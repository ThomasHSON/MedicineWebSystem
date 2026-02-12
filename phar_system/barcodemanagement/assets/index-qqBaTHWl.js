(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
var Ga = { exports: {} },
  $o = {},
  Ya = { exports: {} },
  B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wr = Symbol.for("react.element"),
  Sd = Symbol.for("react.portal"),
  kd = Symbol.for("react.fragment"),
  Cd = Symbol.for("react.strict_mode"),
  Nd = Symbol.for("react.profiler"),
  Ed = Symbol.for("react.provider"),
  jd = Symbol.for("react.context"),
  Ld = Symbol.for("react.forward_ref"),
  Od = Symbol.for("react.suspense"),
  Rd = Symbol.for("react.memo"),
  Pd = Symbol.for("react.lazy"),
  ks = Symbol.iterator;
function _d(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ks && e[ks]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Xa = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ja = Object.assign,
  Za = {};
function On(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Za),
    (this.updater = n || Xa));
}
On.prototype.isReactComponent = {};
On.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
On.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function qa() {}
qa.prototype = On.prototype;
function El(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Za),
    (this.updater = n || Xa));
}
var jl = (El.prototype = new qa());
jl.constructor = El;
Ja(jl, On.prototype);
jl.isPureReactComponent = !0;
var Cs = Array.isArray,
  eu = Object.prototype.hasOwnProperty,
  Ll = { current: null },
  tu = { key: !0, ref: !0, __self: !0, __source: !0 };
function nu(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      eu.call(t, r) && !tu.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: wr,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: Ll.current,
  };
}
function Td(e, t) {
  return {
    $$typeof: wr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ol(e) {
  return typeof e == "object" && e !== null && e.$$typeof === wr;
}
function Dd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ns = /\/+/g;
function ei(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Dd("" + e.key)
    : t.toString(36);
}
function Kr(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case wr:
          case Sd:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === "" ? "." + ei(l, 0) : r),
      Cs(o)
        ? ((n = ""),
          e != null && (n = e.replace(Ns, "$&/") + "/"),
          Kr(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Ol(o) &&
            (o = Td(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Ns, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), Cs(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var a = r + ei(i, s);
      l += Kr(i, t, n, a, o);
    }
  else if (((a = _d(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(i = e.next()).done; )
      ((i = i.value), (a = r + ei(i, s++)), (l += Kr(i, t, n, a, o)));
  else if (i === "object")
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
  return l;
}
function jr(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Kr(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Md(e) {
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
var xe = { current: null },
  Qr = { transition: null },
  $d = {
    ReactCurrentDispatcher: xe,
    ReactCurrentBatchConfig: Qr,
    ReactCurrentOwner: Ll,
  };
function ru() {
  throw Error("act(...) is not supported in production builds of React.");
}
B.Children = {
  map: jr,
  forEach: function (e, t, n) {
    jr(
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
      jr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      jr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ol(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
B.Component = On;
B.Fragment = kd;
B.Profiler = Nd;
B.PureComponent = El;
B.StrictMode = Cd;
B.Suspense = Od;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $d;
B.act = ru;
B.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Ja({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = Ll.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      eu.call(t, a) &&
        !tu.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: wr, type: e.type, key: o, ref: i, props: r, _owner: l };
};
B.createContext = function (e) {
  return (
    (e = {
      $$typeof: jd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Ed, _context: e }),
    (e.Consumer = e)
  );
};
B.createElement = nu;
B.createFactory = function (e) {
  var t = nu.bind(null, e);
  return ((t.type = e), t);
};
B.createRef = function () {
  return { current: null };
};
B.forwardRef = function (e) {
  return { $$typeof: Ld, render: e };
};
B.isValidElement = Ol;
B.lazy = function (e) {
  return { $$typeof: Pd, _payload: { _status: -1, _result: e }, _init: Md };
};
B.memo = function (e, t) {
  return { $$typeof: Rd, type: e, compare: t === void 0 ? null : t };
};
B.startTransition = function (e) {
  var t = Qr.transition;
  Qr.transition = {};
  try {
    e();
  } finally {
    Qr.transition = t;
  }
};
B.unstable_act = ru;
B.useCallback = function (e, t) {
  return xe.current.useCallback(e, t);
};
B.useContext = function (e) {
  return xe.current.useContext(e);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (e) {
  return xe.current.useDeferredValue(e);
};
B.useEffect = function (e, t) {
  return xe.current.useEffect(e, t);
};
B.useId = function () {
  return xe.current.useId();
};
B.useImperativeHandle = function (e, t, n) {
  return xe.current.useImperativeHandle(e, t, n);
};
B.useInsertionEffect = function (e, t) {
  return xe.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function (e, t) {
  return xe.current.useLayoutEffect(e, t);
};
B.useMemo = function (e, t) {
  return xe.current.useMemo(e, t);
};
B.useReducer = function (e, t, n) {
  return xe.current.useReducer(e, t, n);
};
B.useRef = function (e) {
  return xe.current.useRef(e);
};
B.useState = function (e) {
  return xe.current.useState(e);
};
B.useSyncExternalStore = function (e, t, n) {
  return xe.current.useSyncExternalStore(e, t, n);
};
B.useTransition = function () {
  return xe.current.useTransition();
};
B.version = "18.3.1";
Ya.exports = B;
var C = Ya.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fd = C,
  zd = Symbol.for("react.element"),
  Id = Symbol.for("react.fragment"),
  Ad = Object.prototype.hasOwnProperty,
  bd = Fd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Bd = { key: !0, ref: !0, __self: !0, __source: !0 };
function ou(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  (n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref));
  for (r in t) Ad.call(t, r) && !Bd.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: zd,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: bd.current,
  };
}
$o.Fragment = Id;
$o.jsx = ou;
$o.jsxs = ou;
Ga.exports = $o;
var c = Ga.exports,
  iu = { exports: {} },
  De = {},
  lu = { exports: {} },
  su = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(S, R) {
    var F = S.length;
    S.push(R);
    e: for (; 0 < F; ) {
      var A = (F - 1) >>> 1,
        K = S[A];
      if (0 < o(K, R)) ((S[A] = R), (S[F] = K), (F = A));
      else break e;
    }
  }
  function n(S) {
    return S.length === 0 ? null : S[0];
  }
  function r(S) {
    if (S.length === 0) return null;
    var R = S[0],
      F = S.pop();
    if (F !== R) {
      S[0] = F;
      e: for (var A = 0, K = S.length, $e = K >>> 1; A < $e; ) {
        var Fe = 2 * (A + 1) - 1,
          ht = S[Fe],
          rt = Fe + 1,
          Zt = S[rt];
        if (0 > o(ht, F))
          rt < K && 0 > o(Zt, ht)
            ? ((S[A] = Zt), (S[rt] = F), (A = rt))
            : ((S[A] = ht), (S[Fe] = F), (A = Fe));
        else if (rt < K && 0 > o(Zt, F)) ((S[A] = Zt), (S[rt] = F), (A = rt));
        else break e;
      }
    }
    return R;
  }
  function o(S, R) {
    var F = S.sortIndex - R.sortIndex;
    return F !== 0 ? F : S.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      s = l.now();
    e.unstable_now = function () {
      return l.now() - s;
    };
  }
  var a = [],
    u = [],
    p = 1,
    f = null,
    g = 3,
    v = !1,
    y = !1,
    w = !1,
    P = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(S) {
    for (var R = n(u); R !== null; ) {
      if (R.callback === null) r(u);
      else if (R.startTime <= S)
        (r(u), (R.sortIndex = R.expirationTime), t(a, R));
      else break;
      R = n(u);
    }
  }
  function x(S) {
    if (((w = !1), h(S), !y))
      if (n(a) !== null) ((y = !0), q(k));
      else {
        var R = n(u);
        R !== null && O(x, R.startTime - S);
      }
  }
  function k(S, R) {
    ((y = !1), w && ((w = !1), m(j), (j = -1)), (v = !0));
    var F = g;
    try {
      for (
        h(R), f = n(a);
        f !== null && (!(f.expirationTime > R) || (S && !Z()));
      ) {
        var A = f.callback;
        if (typeof A == "function") {
          ((f.callback = null), (g = f.priorityLevel));
          var K = A(f.expirationTime <= R);
          ((R = e.unstable_now()),
            typeof K == "function" ? (f.callback = K) : f === n(a) && r(a),
            h(R));
        } else r(a);
        f = n(a);
      }
      if (f !== null) var $e = !0;
      else {
        var Fe = n(u);
        (Fe !== null && O(x, Fe.startTime - R), ($e = !1));
      }
      return $e;
    } finally {
      ((f = null), (g = F), (v = !1));
    }
  }
  var E = !1,
    L = null,
    j = -1,
    D = 5,
    T = -1;
  function Z() {
    return !(e.unstable_now() - T < D);
  }
  function I() {
    if (L !== null) {
      var S = e.unstable_now();
      T = S;
      var R = !0;
      try {
        R = L(!0, S);
      } finally {
        R ? $() : ((E = !1), (L = null));
      }
    } else E = !1;
  }
  var $;
  if (typeof d == "function")
    $ = function () {
      d(I);
    };
  else if (typeof MessageChannel < "u") {
    var z = new MessageChannel(),
      H = z.port2;
    ((z.port1.onmessage = I),
      ($ = function () {
        H.postMessage(null);
      }));
  } else
    $ = function () {
      P(I, 0);
    };
  function q(S) {
    ((L = S), E || ((E = !0), $()));
  }
  function O(S, R) {
    j = P(function () {
      S(e.unstable_now());
    }, R);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (S) {
      S.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || v || ((y = !0), q(k));
    }),
    (e.unstable_forceFrameRate = function (S) {
      0 > S || 125 < S
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (D = 0 < S ? Math.floor(1e3 / S) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return g;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (S) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = g;
      }
      var F = g;
      g = R;
      try {
        return S();
      } finally {
        g = F;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (S, R) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var F = g;
      g = S;
      try {
        return R();
      } finally {
        g = F;
      }
    }),
    (e.unstable_scheduleCallback = function (S, R, F) {
      var A = e.unstable_now();
      switch (
        (typeof F == "object" && F !== null
          ? ((F = F.delay), (F = typeof F == "number" && 0 < F ? A + F : A))
          : (F = A),
        S)
      ) {
        case 1:
          var K = -1;
          break;
        case 2:
          K = 250;
          break;
        case 5:
          K = 1073741823;
          break;
        case 4:
          K = 1e4;
          break;
        default:
          K = 5e3;
      }
      return (
        (K = F + K),
        (S = {
          id: p++,
          callback: R,
          priorityLevel: S,
          startTime: F,
          expirationTime: K,
          sortIndex: -1,
        }),
        F > A
          ? ((S.sortIndex = F),
            t(u, S),
            n(a) === null &&
              S === n(u) &&
              (w ? (m(j), (j = -1)) : (w = !0), O(x, F - A)))
          : ((S.sortIndex = K), t(a, S), y || v || ((y = !0), q(k))),
        S
      );
    }),
    (e.unstable_shouldYield = Z),
    (e.unstable_wrapCallback = function (S) {
      var R = g;
      return function () {
        var F = g;
        g = R;
        try {
          return S.apply(this, arguments);
        } finally {
          g = F;
        }
      };
    }));
})(su);
lu.exports = su;
var Ud = lu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vd = C,
  Te = Ud;
function N(e) {
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
var au = new Set(),
  nr = {};
function Xt(e, t) {
  (wn(e, t), wn(e + "Capture", t));
}
function wn(e, t) {
  for (nr[e] = t, e = 0; e < t.length; e++) au.add(t[e]);
}
var ut = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ri = Object.prototype.hasOwnProperty,
  Hd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Es = {},
  js = {};
function Wd(e) {
  return Ri.call(js, e)
    ? !0
    : Ri.call(Es, e)
      ? !1
      : Hd.test(e)
        ? (js[e] = !0)
        : ((Es[e] = !0), !1);
}
function Kd(e, t, n, r) {
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
function Qd(e, t, n, r) {
  if (t === null || typeof t > "u" || Kd(e, t, n, r)) return !0;
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
function we(e, t, n, r, o, i, l) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l));
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    fe[e] = new we(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  fe[t] = new we(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  fe[e] = new we(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  fe[e] = new we(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    fe[e] = new we(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  fe[e] = new we(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  fe[e] = new we(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  fe[e] = new we(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  fe[e] = new we(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Rl = /[\-:]([a-z])/g;
function Pl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Rl, Pl);
    fe[t] = new we(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Rl, Pl);
    fe[t] = new we(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Rl, Pl);
  fe[t] = new we(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  fe[e] = new we(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
fe.xlinkHref = new we(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  fe[e] = new we(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function _l(e, t, n, r) {
  var o = fe.hasOwnProperty(t) ? fe[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Qd(t, n, o, r) && (n = null),
    r || o === null
      ? Wd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var pt = Vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Lr = Symbol.for("react.element"),
  tn = Symbol.for("react.portal"),
  nn = Symbol.for("react.fragment"),
  Tl = Symbol.for("react.strict_mode"),
  Pi = Symbol.for("react.profiler"),
  uu = Symbol.for("react.provider"),
  cu = Symbol.for("react.context"),
  Dl = Symbol.for("react.forward_ref"),
  _i = Symbol.for("react.suspense"),
  Ti = Symbol.for("react.suspense_list"),
  Ml = Symbol.for("react.memo"),
  mt = Symbol.for("react.lazy"),
  du = Symbol.for("react.offscreen"),
  Ls = Symbol.iterator;
function Tn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ls && e[Ls]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ne = Object.assign,
  ti;
function Bn(e) {
  if (ti === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ti = (t && t[1]) || "";
    }
  return (
    `
` +
    ti +
    e
  );
}
var ni = !1;
function ri(e, t) {
  if (!e || ni) return "";
  ni = !0;
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
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          s = i.length - 1;
        1 <= l && 0 <= s && o[l] !== i[s];
      )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (o[l] !== i[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || o[l] !== i[s])) {
                var a =
                  `
` + o[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    ((ni = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? Bn(e) : "";
}
function Gd(e) {
  switch (e.tag) {
    case 5:
      return Bn(e.type);
    case 16:
      return Bn("Lazy");
    case 13:
      return Bn("Suspense");
    case 19:
      return Bn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = ri(e.type, !1)), e);
    case 11:
      return ((e = ri(e.type.render, !1)), e);
    case 1:
      return ((e = ri(e.type, !0)), e);
    default:
      return "";
  }
}
function Di(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case nn:
      return "Fragment";
    case tn:
      return "Portal";
    case Pi:
      return "Profiler";
    case Tl:
      return "StrictMode";
    case _i:
      return "Suspense";
    case Ti:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case cu:
        return (e.displayName || "Context") + ".Consumer";
      case uu:
        return (e._context.displayName || "Context") + ".Provider";
      case Dl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ml:
        return (
          (t = e.displayName || null),
          t !== null ? t : Di(e.type) || "Memo"
        );
      case mt:
        ((t = e._payload), (e = e._init));
        try {
          return Di(e(t));
        } catch {}
    }
  return null;
}
function Yd(e) {
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
      return Di(t);
    case 8:
      return t === Tl ? "StrictMode" : "Mode";
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
function Pt(e) {
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
function fu(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Xd(e) {
  var t = fu(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          ((r = "" + l), i.call(this, l));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function Or(e) {
  e._valueTracker || (e._valueTracker = Xd(e));
}
function pu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = fu(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function io(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Mi(e, t) {
  var n = t.checked;
  return ne({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Os(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = Pt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function hu(e, t) {
  ((t = t.checked), t != null && _l(e, "checked", t, !1));
}
function $i(e, t) {
  hu(e, t);
  var n = Pt(t.value),
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
    ? Fi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Fi(e, t.type, Pt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Rs(e, t, n) {
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
function Fi(e, t, n) {
  (t !== "number" || io(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Un = Array.isArray;
function hn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      ((o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + Pt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ((e[o].selected = !0), r && (e[o].defaultSelected = !0));
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function zi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return ne({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ps(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (Un(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: Pt(n) };
}
function gu(e, t) {
  var n = Pt(t.value),
    r = Pt(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function _s(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function mu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ii(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? mu(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Rr,
  yu = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Rr = Rr || document.createElement("div"),
          Rr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Rr.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function rr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Wn = {
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
  Jd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Wn).forEach(function (e) {
  Jd.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Wn[t] = Wn[e]));
  });
});
function vu(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Wn.hasOwnProperty(e) && Wn[e])
      ? ("" + t).trim()
      : t + "px";
}
function xu(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = vu(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o));
    }
}
var Zd = ne(
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
function Ai(e, t) {
  if (t) {
    if (Zd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function bi(e, t) {
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
var Bi = null;
function $l(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ui = null,
  gn = null,
  mn = null;
function Ts(e) {
  if ((e = Cr(e))) {
    if (typeof Ui != "function") throw Error(N(280));
    var t = e.stateNode;
    t && ((t = bo(t)), Ui(e.stateNode, e.type, t));
  }
}
function wu(e) {
  gn ? (mn ? mn.push(e) : (mn = [e])) : (gn = e);
}
function Su() {
  if (gn) {
    var e = gn,
      t = mn;
    if (((mn = gn = null), Ts(e), t)) for (e = 0; e < t.length; e++) Ts(t[e]);
  }
}
function ku(e, t) {
  return e(t);
}
function Cu() {}
var oi = !1;
function Nu(e, t, n) {
  if (oi) return e(t, n);
  oi = !0;
  try {
    return ku(e, t, n);
  } finally {
    ((oi = !1), (gn !== null || mn !== null) && (Cu(), Su()));
  }
}
function or(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = bo(n);
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
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var Vi = !1;
if (ut)
  try {
    var Dn = {};
    (Object.defineProperty(Dn, "passive", {
      get: function () {
        Vi = !0;
      },
    }),
      window.addEventListener("test", Dn, Dn),
      window.removeEventListener("test", Dn, Dn));
  } catch {
    Vi = !1;
  }
function qd(e, t, n, r, o, i, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (p) {
    this.onError(p);
  }
}
var Kn = !1,
  lo = null,
  so = !1,
  Hi = null,
  ef = {
    onError: function (e) {
      ((Kn = !0), (lo = e));
    },
  };
function tf(e, t, n, r, o, i, l, s, a) {
  ((Kn = !1), (lo = null), qd.apply(ef, arguments));
}
function nf(e, t, n, r, o, i, l, s, a) {
  if ((tf.apply(this, arguments), Kn)) {
    if (Kn) {
      var u = lo;
      ((Kn = !1), (lo = null));
    } else throw Error(N(198));
    so || ((so = !0), (Hi = u));
  }
}
function Jt(e) {
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
function Eu(e) {
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
function Ds(e) {
  if (Jt(e) !== e) throw Error(N(188));
}
function rf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Jt(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return (Ds(o), e);
        if (i === r) return (Ds(o), t);
        i = i.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) ((n = o), (r = i));
    else {
      for (var l = !1, s = o.child; s; ) {
        if (s === n) {
          ((l = !0), (n = o), (r = i));
          break;
        }
        if (s === r) {
          ((l = !0), (r = o), (n = i));
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = i.child; s; ) {
          if (s === n) {
            ((l = !0), (n = i), (r = o));
            break;
          }
          if (s === r) {
            ((l = !0), (r = i), (n = o));
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function ju(e) {
  return ((e = rf(e)), e !== null ? Lu(e) : null);
}
function Lu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Lu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ou = Te.unstable_scheduleCallback,
  Ms = Te.unstable_cancelCallback,
  of = Te.unstable_shouldYield,
  lf = Te.unstable_requestPaint,
  oe = Te.unstable_now,
  sf = Te.unstable_getCurrentPriorityLevel,
  Fl = Te.unstable_ImmediatePriority,
  Ru = Te.unstable_UserBlockingPriority,
  ao = Te.unstable_NormalPriority,
  af = Te.unstable_LowPriority,
  Pu = Te.unstable_IdlePriority,
  Fo = null,
  tt = null;
function uf(e) {
  if (tt && typeof tt.onCommitFiberRoot == "function")
    try {
      tt.onCommitFiberRoot(Fo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Qe = Math.clz32 ? Math.clz32 : ff,
  cf = Math.log,
  df = Math.LN2;
function ff(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((cf(e) / df) | 0)) | 0);
}
var Pr = 64,
  _r = 4194304;
function Vn(e) {
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
function uo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? (r = Vn(s)) : ((i &= l), i !== 0 && (r = Vn(i)));
  } else ((l = n & ~o), l !== 0 ? (r = Vn(l)) : i !== 0 && (r = Vn(i)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - Qe(t)), (o = 1 << n), (r |= e[n]), (t &= ~o));
  return r;
}
function pf(e, t) {
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
function hf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;
  ) {
    var l = 31 - Qe(i),
      s = 1 << l,
      a = o[l];
    (a === -1
      ? (!(s & n) || s & r) && (o[l] = pf(s, t))
      : a <= t && (e.expiredLanes |= s),
      (i &= ~s));
  }
}
function Wi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function _u() {
  var e = Pr;
  return ((Pr <<= 1), !(Pr & 4194240) && (Pr = 64), e);
}
function ii(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Sr(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Qe(t)),
    (e[t] = n));
}
function gf(e, t) {
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
    var o = 31 - Qe(n),
      i = 1 << o;
    ((t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i));
  }
}
function zl(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Qe(n),
      o = 1 << r;
    ((o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o));
  }
}
var W = 0;
function Tu(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Du,
  Il,
  Mu,
  $u,
  Fu,
  Ki = !1,
  Tr = [],
  kt = null,
  Ct = null,
  Nt = null,
  ir = new Map(),
  lr = new Map(),
  vt = [],
  mf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function $s(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      kt = null;
      break;
    case "dragenter":
    case "dragleave":
      Ct = null;
      break;
    case "mouseover":
    case "mouseout":
      Nt = null;
      break;
    case "pointerover":
    case "pointerout":
      ir.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      lr.delete(t.pointerId);
  }
}
function Mn(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Cr(t)), t !== null && Il(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function yf(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return ((kt = Mn(kt, e, t, n, r, o)), !0);
    case "dragenter":
      return ((Ct = Mn(Ct, e, t, n, r, o)), !0);
    case "mouseover":
      return ((Nt = Mn(Nt, e, t, n, r, o)), !0);
    case "pointerover":
      var i = o.pointerId;
      return (ir.set(i, Mn(ir.get(i) || null, e, t, n, r, o)), !0);
    case "gotpointercapture":
      return (
        (i = o.pointerId),
        lr.set(i, Mn(lr.get(i) || null, e, t, n, r, o)),
        !0
      );
  }
  return !1;
}
function zu(e) {
  var t = It(e.target);
  if (t !== null) {
    var n = Jt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Eu(n)), t !== null)) {
          ((e.blockedOn = t),
            Fu(e.priority, function () {
              Mu(n);
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
function Gr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Qi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((Bi = r), n.target.dispatchEvent(r), (Bi = null));
    } else return ((t = Cr(n)), t !== null && Il(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Fs(e, t, n) {
  Gr(e) && n.delete(t);
}
function vf() {
  ((Ki = !1),
    kt !== null && Gr(kt) && (kt = null),
    Ct !== null && Gr(Ct) && (Ct = null),
    Nt !== null && Gr(Nt) && (Nt = null),
    ir.forEach(Fs),
    lr.forEach(Fs));
}
function $n(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ki ||
      ((Ki = !0),
      Te.unstable_scheduleCallback(Te.unstable_NormalPriority, vf)));
}
function sr(e) {
  function t(o) {
    return $n(o, e);
  }
  if (0 < Tr.length) {
    $n(Tr[0], e);
    for (var n = 1; n < Tr.length; n++) {
      var r = Tr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    kt !== null && $n(kt, e),
      Ct !== null && $n(Ct, e),
      Nt !== null && $n(Nt, e),
      ir.forEach(t),
      lr.forEach(t),
      n = 0;
    n < vt.length;
    n++
  )
    ((r = vt[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < vt.length && ((n = vt[0]), n.blockedOn === null); )
    (zu(n), n.blockedOn === null && vt.shift());
}
var yn = pt.ReactCurrentBatchConfig,
  co = !0;
function xf(e, t, n, r) {
  var o = W,
    i = yn.transition;
  yn.transition = null;
  try {
    ((W = 1), Al(e, t, n, r));
  } finally {
    ((W = o), (yn.transition = i));
  }
}
function wf(e, t, n, r) {
  var o = W,
    i = yn.transition;
  yn.transition = null;
  try {
    ((W = 4), Al(e, t, n, r));
  } finally {
    ((W = o), (yn.transition = i));
  }
}
function Al(e, t, n, r) {
  if (co) {
    var o = Qi(e, t, n, r);
    if (o === null) (gi(e, t, r, fo, n), $s(e, r));
    else if (yf(o, e, t, n, r)) r.stopPropagation();
    else if (($s(e, r), t & 4 && -1 < mf.indexOf(e))) {
      for (; o !== null; ) {
        var i = Cr(o);
        if (
          (i !== null && Du(i),
          (i = Qi(e, t, n, r)),
          i === null && gi(e, t, r, fo, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else gi(e, t, r, null, n);
  }
}
var fo = null;
function Qi(e, t, n, r) {
  if (((fo = null), (e = $l(r)), (e = It(e)), e !== null))
    if (((t = Jt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Eu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((fo = e), null);
}
function Iu(e) {
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
      switch (sf()) {
        case Fl:
          return 1;
        case Ru:
          return 4;
        case ao:
        case af:
          return 16;
        case Pu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var wt = null,
  bl = null,
  Yr = null;
function Au() {
  if (Yr) return Yr;
  var e,
    t = bl,
    n = t.length,
    r,
    o = "value" in wt ? wt.value : wt.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (Yr = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Xr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Dr() {
  return !0;
}
function zs() {
  return !1;
}
function Me(e) {
  function t(n, r, o, i, l) {
    ((this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null));
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Dr
        : zs),
      (this.isPropagationStopped = zs),
      this
    );
  }
  return (
    ne(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Dr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Dr));
      },
      persist: function () {},
      isPersistent: Dr,
    }),
    t
  );
}
var Rn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Bl = Me(Rn),
  kr = ne({}, Rn, { view: 0, detail: 0 }),
  Sf = Me(kr),
  li,
  si,
  Fn,
  zo = ne({}, kr, {
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
    getModifierState: Ul,
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
        : (e !== Fn &&
            (Fn && e.type === "mousemove"
              ? ((li = e.screenX - Fn.screenX), (si = e.screenY - Fn.screenY))
              : (si = li = 0),
            (Fn = e)),
          li);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : si;
    },
  }),
  Is = Me(zo),
  kf = ne({}, zo, { dataTransfer: 0 }),
  Cf = Me(kf),
  Nf = ne({}, kr, { relatedTarget: 0 }),
  ai = Me(Nf),
  Ef = ne({}, Rn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  jf = Me(Ef),
  Lf = ne({}, Rn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Of = Me(Lf),
  Rf = ne({}, Rn, { data: 0 }),
  As = Me(Rf),
  Pf = {
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
  _f = {
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
  Tf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Df(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Tf[e]) ? !!t[e] : !1;
}
function Ul() {
  return Df;
}
var Mf = ne({}, kr, {
    key: function (e) {
      if (e.key) {
        var t = Pf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Xr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? _f[e.keyCode] || "Unidentified"
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
    getModifierState: Ul,
    charCode: function (e) {
      return e.type === "keypress" ? Xr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Xr(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  $f = Me(Mf),
  Ff = ne({}, zo, {
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
  bs = Me(Ff),
  zf = ne({}, kr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ul,
  }),
  If = Me(zf),
  Af = ne({}, Rn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  bf = Me(Af),
  Bf = ne({}, zo, {
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
  Uf = Me(Bf),
  Vf = [9, 13, 27, 32],
  Vl = ut && "CompositionEvent" in window,
  Qn = null;
ut && "documentMode" in document && (Qn = document.documentMode);
var Hf = ut && "TextEvent" in window && !Qn,
  bu = ut && (!Vl || (Qn && 8 < Qn && 11 >= Qn)),
  Bs = " ",
  Us = !1;
function Bu(e, t) {
  switch (e) {
    case "keyup":
      return Vf.indexOf(t.keyCode) !== -1;
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
function Uu(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var rn = !1;
function Wf(e, t) {
  switch (e) {
    case "compositionend":
      return Uu(t);
    case "keypress":
      return t.which !== 32 ? null : ((Us = !0), Bs);
    case "textInput":
      return ((e = t.data), e === Bs && Us ? null : e);
    default:
      return null;
  }
}
function Kf(e, t) {
  if (rn)
    return e === "compositionend" || (!Vl && Bu(e, t))
      ? ((e = Au()), (Yr = bl = wt = null), (rn = !1), e)
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
      return bu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Qf = {
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
function Vs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Qf[e.type] : t === "textarea";
}
function Vu(e, t, n, r) {
  (wu(r),
    (t = po(t, "onChange")),
    0 < t.length &&
      ((n = new Bl("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var Gn = null,
  ar = null;
function Gf(e) {
  ec(e, 0);
}
function Io(e) {
  var t = sn(e);
  if (pu(t)) return e;
}
function Yf(e, t) {
  if (e === "change") return t;
}
var Hu = !1;
if (ut) {
  var ui;
  if (ut) {
    var ci = "oninput" in document;
    if (!ci) {
      var Hs = document.createElement("div");
      (Hs.setAttribute("oninput", "return;"),
        (ci = typeof Hs.oninput == "function"));
    }
    ui = ci;
  } else ui = !1;
  Hu = ui && (!document.documentMode || 9 < document.documentMode);
}
function Ws() {
  Gn && (Gn.detachEvent("onpropertychange", Wu), (ar = Gn = null));
}
function Wu(e) {
  if (e.propertyName === "value" && Io(ar)) {
    var t = [];
    (Vu(t, ar, e, $l(e)), Nu(Gf, t));
  }
}
function Xf(e, t, n) {
  e === "focusin"
    ? (Ws(), (Gn = t), (ar = n), Gn.attachEvent("onpropertychange", Wu))
    : e === "focusout" && Ws();
}
function Jf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Io(ar);
}
function Zf(e, t) {
  if (e === "click") return Io(t);
}
function qf(e, t) {
  if (e === "input" || e === "change") return Io(t);
}
function ep(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ye = typeof Object.is == "function" ? Object.is : ep;
function ur(e, t) {
  if (Ye(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Ri.call(t, o) || !Ye(e[o], t[o])) return !1;
  }
  return !0;
}
function Ks(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Qs(e, t) {
  var n = Ks(e);
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
    n = Ks(n);
  }
}
function Ku(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Ku(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Qu() {
  for (var e = window, t = io(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = io(e.document);
  }
  return t;
}
function Hl(e) {
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
function tp(e) {
  var t = Qu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ku(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Hl(n)) {
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
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        ((r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Qs(n, i)));
        var l = Qs(n, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
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
var np = ut && "documentMode" in document && 11 >= document.documentMode,
  on = null,
  Gi = null,
  Yn = null,
  Yi = !1;
function Gs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Yi ||
    on == null ||
    on !== io(r) ||
    ((r = on),
    "selectionStart" in r && Hl(r)
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
    (Yn && ur(Yn, r)) ||
      ((Yn = r),
      (r = po(Gi, "onSelect")),
      0 < r.length &&
        ((t = new Bl("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = on))));
}
function Mr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var ln = {
    animationend: Mr("Animation", "AnimationEnd"),
    animationiteration: Mr("Animation", "AnimationIteration"),
    animationstart: Mr("Animation", "AnimationStart"),
    transitionend: Mr("Transition", "TransitionEnd"),
  },
  di = {},
  Gu = {};
ut &&
  ((Gu = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ln.animationend.animation,
    delete ln.animationiteration.animation,
    delete ln.animationstart.animation),
  "TransitionEvent" in window || delete ln.transitionend.transition);
function Ao(e) {
  if (di[e]) return di[e];
  if (!ln[e]) return e;
  var t = ln[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Gu) return (di[e] = t[n]);
  return e;
}
var Yu = Ao("animationend"),
  Xu = Ao("animationiteration"),
  Ju = Ao("animationstart"),
  Zu = Ao("transitionend"),
  qu = new Map(),
  Ys =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Tt(e, t) {
  (qu.set(e, t), Xt(t, [e]));
}
for (var fi = 0; fi < Ys.length; fi++) {
  var pi = Ys[fi],
    rp = pi.toLowerCase(),
    op = pi[0].toUpperCase() + pi.slice(1);
  Tt(rp, "on" + op);
}
Tt(Yu, "onAnimationEnd");
Tt(Xu, "onAnimationIteration");
Tt(Ju, "onAnimationStart");
Tt("dblclick", "onDoubleClick");
Tt("focusin", "onFocus");
Tt("focusout", "onBlur");
Tt(Zu, "onTransitionEnd");
wn("onMouseEnter", ["mouseout", "mouseover"]);
wn("onMouseLeave", ["mouseout", "mouseover"]);
wn("onPointerEnter", ["pointerout", "pointerover"]);
wn("onPointerLeave", ["pointerout", "pointerover"]);
Xt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Xt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Xt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Xt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Xt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Xt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Hn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  ip = new Set("cancel close invalid load scroll toggle".split(" ").concat(Hn));
function Xs(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), nf(r, t, void 0, e), (e.currentTarget = null));
}
function ec(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            a = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), a !== i && o.isPropagationStopped())) break e;
          (Xs(o, s, u), (i = a));
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]),
            (a = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            a !== i && o.isPropagationStopped())
          )
            break e;
          (Xs(o, s, u), (i = a));
        }
    }
  }
  if (so) throw ((e = Hi), (so = !1), (Hi = null), e);
}
function Y(e, t) {
  var n = t[el];
  n === void 0 && (n = t[el] = new Set());
  var r = e + "__bubble";
  n.has(r) || (tc(t, e, 2, !1), n.add(r));
}
function hi(e, t, n) {
  var r = 0;
  (t && (r |= 4), tc(n, e, r, t));
}
var $r = "_reactListening" + Math.random().toString(36).slice(2);
function cr(e) {
  if (!e[$r]) {
    ((e[$r] = !0),
      au.forEach(function (n) {
        n !== "selectionchange" && (ip.has(n) || hi(n, !1, e), hi(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[$r] || ((t[$r] = !0), hi("selectionchange", !1, t));
  }
}
function tc(e, t, n, r) {
  switch (Iu(t)) {
    case 1:
      var o = xf;
      break;
    case 4:
      o = wf;
      break;
    default:
      o = Al;
  }
  ((n = o.bind(null, t, n, e)),
    (o = void 0),
    !Vi ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1));
}
function gi(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var a = l.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = l.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; s !== null; ) {
          if (((l = It(s)), l === null)) return;
          if (((a = l.tag), a === 5 || a === 6)) {
            r = i = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Nu(function () {
    var u = i,
      p = $l(n),
      f = [];
    e: {
      var g = qu.get(e);
      if (g !== void 0) {
        var v = Bl,
          y = e;
        switch (e) {
          case "keypress":
            if (Xr(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = $f;
            break;
          case "focusin":
            ((y = "focus"), (v = ai));
            break;
          case "focusout":
            ((y = "blur"), (v = ai));
            break;
          case "beforeblur":
          case "afterblur":
            v = ai;
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
            v = Is;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Cf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = If;
            break;
          case Yu:
          case Xu:
          case Ju:
            v = jf;
            break;
          case Zu:
            v = bf;
            break;
          case "scroll":
            v = Sf;
            break;
          case "wheel":
            v = Uf;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Of;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = bs;
        }
        var w = (t & 4) !== 0,
          P = !w && e === "scroll",
          m = w ? (g !== null ? g + "Capture" : null) : g;
        w = [];
        for (var d = u, h; d !== null; ) {
          h = d;
          var x = h.stateNode;
          if (
            (h.tag === 5 &&
              x !== null &&
              ((h = x),
              m !== null && ((x = or(d, m)), x != null && w.push(dr(d, x, h)))),
            P)
          )
            break;
          d = d.return;
        }
        0 < w.length &&
          ((g = new v(g, y, null, n, p)), f.push({ event: g, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((g = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          g &&
            n !== Bi &&
            (y = n.relatedTarget || n.fromElement) &&
            (It(y) || y[ct]))
        )
          break e;
        if (
          (v || g) &&
          ((g =
            p.window === p
              ? p
              : (g = p.ownerDocument)
                ? g.defaultView || g.parentWindow
                : window),
          v
            ? ((y = n.relatedTarget || n.toElement),
              (v = u),
              (y = y ? It(y) : null),
              y !== null &&
                ((P = Jt(y)), y !== P || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((v = null), (y = u)),
          v !== y)
        ) {
          if (
            ((w = Is),
            (x = "onMouseLeave"),
            (m = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = bs),
              (x = "onPointerLeave"),
              (m = "onPointerEnter"),
              (d = "pointer")),
            (P = v == null ? g : sn(v)),
            (h = y == null ? g : sn(y)),
            (g = new w(x, d + "leave", v, n, p)),
            (g.target = P),
            (g.relatedTarget = h),
            (x = null),
            It(p) === u &&
              ((w = new w(m, d + "enter", y, n, p)),
              (w.target = h),
              (w.relatedTarget = P),
              (x = w)),
            (P = x),
            v && y)
          )
            t: {
              for (w = v, m = y, d = 0, h = w; h; h = qt(h)) d++;
              for (h = 0, x = m; x; x = qt(x)) h++;
              for (; 0 < d - h; ) ((w = qt(w)), d--);
              for (; 0 < h - d; ) ((m = qt(m)), h--);
              for (; d--; ) {
                if (w === m || (m !== null && w === m.alternate)) break t;
                ((w = qt(w)), (m = qt(m)));
              }
              w = null;
            }
          else w = null;
          (v !== null && Js(f, g, v, w, !1),
            y !== null && P !== null && Js(f, P, y, w, !0));
        }
      }
      e: {
        if (
          ((g = u ? sn(u) : window),
          (v = g.nodeName && g.nodeName.toLowerCase()),
          v === "select" || (v === "input" && g.type === "file"))
        )
          var k = Yf;
        else if (Vs(g))
          if (Hu) k = qf;
          else {
            k = Jf;
            var E = Xf;
          }
        else
          (v = g.nodeName) &&
            v.toLowerCase() === "input" &&
            (g.type === "checkbox" || g.type === "radio") &&
            (k = Zf);
        if (k && (k = k(e, u))) {
          Vu(f, k, n, p);
          break e;
        }
        (E && E(e, g, u),
          e === "focusout" &&
            (E = g._wrapperState) &&
            E.controlled &&
            g.type === "number" &&
            Fi(g, "number", g.value));
      }
      switch (((E = u ? sn(u) : window), e)) {
        case "focusin":
          (Vs(E) || E.contentEditable === "true") &&
            ((on = E), (Gi = u), (Yn = null));
          break;
        case "focusout":
          Yn = Gi = on = null;
          break;
        case "mousedown":
          Yi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Yi = !1), Gs(f, n, p));
          break;
        case "selectionchange":
          if (np) break;
        case "keydown":
        case "keyup":
          Gs(f, n, p);
      }
      var L;
      if (Vl)
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
        rn
          ? Bu(e, n) && (j = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      (j &&
        (bu &&
          n.locale !== "ko" &&
          (rn || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && rn && (L = Au())
            : ((wt = p),
              (bl = "value" in wt ? wt.value : wt.textContent),
              (rn = !0))),
        (E = po(u, j)),
        0 < E.length &&
          ((j = new As(j, e, null, n, p)),
          f.push({ event: j, listeners: E }),
          L ? (j.data = L) : ((L = Uu(n)), L !== null && (j.data = L)))),
        (L = Hf ? Wf(e, n) : Kf(e, n)) &&
          ((u = po(u, "onBeforeInput")),
          0 < u.length &&
            ((p = new As("onBeforeInput", "beforeinput", null, n, p)),
            f.push({ event: p, listeners: u }),
            (p.data = L))));
    }
    ec(f, t);
  });
}
function dr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function po(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    (o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = or(e, n)),
      i != null && r.unshift(dr(e, i, o)),
      (i = or(e, t)),
      i != null && r.push(dr(e, i, o))),
      (e = e.return));
  }
  return r;
}
function qt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Js(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    (s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((a = or(n, i)), a != null && l.unshift(dr(n, a, s)))
        : o || ((a = or(n, i)), a != null && l.push(dr(n, a, s)))),
      (n = n.return));
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var lp = /\r\n?/g,
  sp = /\u0000|\uFFFD/g;
function Zs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      lp,
      `
`,
    )
    .replace(sp, "");
}
function Fr(e, t, n) {
  if (((t = Zs(t)), Zs(e) !== t && n)) throw Error(N(425));
}
function ho() {}
var Xi = null,
  Ji = null;
function Zi(e, t) {
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
var qi = typeof setTimeout == "function" ? setTimeout : void 0,
  ap = typeof clearTimeout == "function" ? clearTimeout : void 0,
  qs = typeof Promise == "function" ? Promise : void 0,
  up =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof qs < "u"
        ? function (e) {
            return qs.resolve(null).then(e).catch(cp);
          }
        : qi;
function cp(e) {
  setTimeout(function () {
    throw e;
  });
}
function mi(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(o), sr(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  sr(t);
}
function Et(e) {
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
function ea(e) {
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
var Pn = Math.random().toString(36).slice(2),
  qe = "__reactFiber$" + Pn,
  fr = "__reactProps$" + Pn,
  ct = "__reactContainer$" + Pn,
  el = "__reactEvents$" + Pn,
  dp = "__reactListeners$" + Pn,
  fp = "__reactHandles$" + Pn;
function It(e) {
  var t = e[qe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ct] || n[qe])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ea(e); e !== null; ) {
          if ((n = e[qe])) return n;
          e = ea(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function Cr(e) {
  return (
    (e = e[qe] || e[ct]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function sn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function bo(e) {
  return e[fr] || null;
}
var tl = [],
  an = -1;
function Dt(e) {
  return { current: e };
}
function X(e) {
  0 > an || ((e.current = tl[an]), (tl[an] = null), an--);
}
function Q(e, t) {
  (an++, (tl[an] = e.current), (e.current = t));
}
var _t = {},
  me = Dt(_t),
  Ee = Dt(!1),
  Ht = _t;
function Sn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return _t;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function je(e) {
  return ((e = e.childContextTypes), e != null);
}
function go() {
  (X(Ee), X(me));
}
function ta(e, t, n) {
  if (me.current !== _t) throw Error(N(168));
  (Q(me, t), Q(Ee, n));
}
function nc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(N(108, Yd(e) || "Unknown", o));
  return ne({}, n, r);
}
function mo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || _t),
    (Ht = me.current),
    Q(me, e),
    Q(Ee, Ee.current),
    !0
  );
}
function na(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  (n
    ? ((e = nc(e, t, Ht)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      X(Ee),
      X(me),
      Q(me, e))
    : X(Ee),
    Q(Ee, n));
}
var it = null,
  Bo = !1,
  yi = !1;
function rc(e) {
  it === null ? (it = [e]) : it.push(e);
}
function pp(e) {
  ((Bo = !0), rc(e));
}
function Mt() {
  if (!yi && it !== null) {
    yi = !0;
    var e = 0,
      t = W;
    try {
      var n = it;
      for (W = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((it = null), (Bo = !1));
    } catch (o) {
      throw (it !== null && (it = it.slice(e + 1)), Ou(Fl, Mt), o);
    } finally {
      ((W = t), (yi = !1));
    }
  }
  return null;
}
var un = [],
  cn = 0,
  yo = null,
  vo = 0,
  ze = [],
  Ie = 0,
  Wt = null,
  lt = 1,
  st = "";
function Ft(e, t) {
  ((un[cn++] = vo), (un[cn++] = yo), (yo = e), (vo = t));
}
function oc(e, t, n) {
  ((ze[Ie++] = lt), (ze[Ie++] = st), (ze[Ie++] = Wt), (Wt = e));
  var r = lt;
  e = st;
  var o = 32 - Qe(r) - 1;
  ((r &= ~(1 << o)), (n += 1));
  var i = 32 - Qe(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    ((i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (lt = (1 << (32 - Qe(t) + o)) | (n << o) | r),
      (st = i + e));
  } else ((lt = (1 << i) | (n << o) | r), (st = e));
}
function Wl(e) {
  e.return !== null && (Ft(e, 1), oc(e, 1, 0));
}
function Kl(e) {
  for (; e === yo; )
    ((yo = un[--cn]), (un[cn] = null), (vo = un[--cn]), (un[cn] = null));
  for (; e === Wt; )
    ((Wt = ze[--Ie]),
      (ze[Ie] = null),
      (st = ze[--Ie]),
      (ze[Ie] = null),
      (lt = ze[--Ie]),
      (ze[Ie] = null));
}
var _e = null,
  Pe = null,
  J = !1,
  Ke = null;
function ic(e, t) {
  var n = Ae(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function ra(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (_e = e), (Pe = Et(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (_e = e), (Pe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Wt !== null ? { id: lt, overflow: st } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ae(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (_e = e),
            (Pe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function nl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function rl(e) {
  if (J) {
    var t = Pe;
    if (t) {
      var n = t;
      if (!ra(e, t)) {
        if (nl(e)) throw Error(N(418));
        t = Et(n.nextSibling);
        var r = _e;
        t && ra(e, t)
          ? ic(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (J = !1), (_e = e));
      }
    } else {
      if (nl(e)) throw Error(N(418));
      ((e.flags = (e.flags & -4097) | 2), (J = !1), (_e = e));
    }
  }
}
function oa(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  _e = e;
}
function zr(e) {
  if (e !== _e) return !1;
  if (!J) return (oa(e), (J = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Zi(e.type, e.memoizedProps))),
    t && (t = Pe))
  ) {
    if (nl(e)) throw (lc(), Error(N(418)));
    for (; t; ) (ic(e, t), (t = Et(t.nextSibling)));
  }
  if ((oa(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Pe = Et(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Pe = null;
    }
  } else Pe = _e ? Et(e.stateNode.nextSibling) : null;
  return !0;
}
function lc() {
  for (var e = Pe; e; ) e = Et(e.nextSibling);
}
function kn() {
  ((Pe = _e = null), (J = !1));
}
function Ql(e) {
  Ke === null ? (Ke = [e]) : Ke.push(e);
}
var hp = pt.ReactCurrentBatchConfig;
function zn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var s = o.refs;
            l === null ? delete s[i] : (s[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Ir(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function ia(e) {
  var t = e._init;
  return t(e._payload);
}
function sc(e) {
  function t(m, d) {
    if (e) {
      var h = m.deletions;
      h === null ? ((m.deletions = [d]), (m.flags |= 16)) : h.push(d);
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
  function o(m, d) {
    return ((m = Rt(m, d)), (m.index = 0), (m.sibling = null), m);
  }
  function i(m, d, h) {
    return (
      (m.index = h),
      e
        ? ((h = m.alternate),
          h !== null
            ? ((h = h.index), h < d ? ((m.flags |= 2), d) : h)
            : ((m.flags |= 2), d))
        : ((m.flags |= 1048576), d)
    );
  }
  function l(m) {
    return (e && m.alternate === null && (m.flags |= 2), m);
  }
  function s(m, d, h, x) {
    return d === null || d.tag !== 6
      ? ((d = Ni(h, m.mode, x)), (d.return = m), d)
      : ((d = o(d, h)), (d.return = m), d);
  }
  function a(m, d, h, x) {
    var k = h.type;
    return k === nn
      ? p(m, d, h.props.children, x, h.key)
      : d !== null &&
          (d.elementType === k ||
            (typeof k == "object" &&
              k !== null &&
              k.$$typeof === mt &&
              ia(k) === d.type))
        ? ((x = o(d, h.props)), (x.ref = zn(m, d, h)), (x.return = m), x)
        : ((x = ro(h.type, h.key, h.props, null, m.mode, x)),
          (x.ref = zn(m, d, h)),
          (x.return = m),
          x);
  }
  function u(m, d, h, x) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== h.containerInfo ||
      d.stateNode.implementation !== h.implementation
      ? ((d = Ei(h, m.mode, x)), (d.return = m), d)
      : ((d = o(d, h.children || [])), (d.return = m), d);
  }
  function p(m, d, h, x, k) {
    return d === null || d.tag !== 7
      ? ((d = Ut(h, m.mode, x, k)), (d.return = m), d)
      : ((d = o(d, h)), (d.return = m), d);
  }
  function f(m, d, h) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return ((d = Ni("" + d, m.mode, h)), (d.return = m), d);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Lr:
          return (
            (h = ro(d.type, d.key, d.props, null, m.mode, h)),
            (h.ref = zn(m, null, d)),
            (h.return = m),
            h
          );
        case tn:
          return ((d = Ei(d, m.mode, h)), (d.return = m), d);
        case mt:
          var x = d._init;
          return f(m, x(d._payload), h);
      }
      if (Un(d) || Tn(d))
        return ((d = Ut(d, m.mode, h, null)), (d.return = m), d);
      Ir(m, d);
    }
    return null;
  }
  function g(m, d, h, x) {
    var k = d !== null ? d.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return k !== null ? null : s(m, d, "" + h, x);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Lr:
          return h.key === k ? a(m, d, h, x) : null;
        case tn:
          return h.key === k ? u(m, d, h, x) : null;
        case mt:
          return ((k = h._init), g(m, d, k(h._payload), x));
      }
      if (Un(h) || Tn(h)) return k !== null ? null : p(m, d, h, x, null);
      Ir(m, h);
    }
    return null;
  }
  function v(m, d, h, x, k) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return ((m = m.get(h) || null), s(d, m, "" + x, k));
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Lr:
          return (
            (m = m.get(x.key === null ? h : x.key) || null),
            a(d, m, x, k)
          );
        case tn:
          return (
            (m = m.get(x.key === null ? h : x.key) || null),
            u(d, m, x, k)
          );
        case mt:
          var E = x._init;
          return v(m, d, h, E(x._payload), k);
      }
      if (Un(x) || Tn(x)) return ((m = m.get(h) || null), p(d, m, x, k, null));
      Ir(d, x);
    }
    return null;
  }
  function y(m, d, h, x) {
    for (
      var k = null, E = null, L = d, j = (d = 0), D = null;
      L !== null && j < h.length;
      j++
    ) {
      L.index > j ? ((D = L), (L = null)) : (D = L.sibling);
      var T = g(m, L, h[j], x);
      if (T === null) {
        L === null && (L = D);
        break;
      }
      (e && L && T.alternate === null && t(m, L),
        (d = i(T, d, j)),
        E === null ? (k = T) : (E.sibling = T),
        (E = T),
        (L = D));
    }
    if (j === h.length) return (n(m, L), J && Ft(m, j), k);
    if (L === null) {
      for (; j < h.length; j++)
        ((L = f(m, h[j], x)),
          L !== null &&
            ((d = i(L, d, j)),
            E === null ? (k = L) : (E.sibling = L),
            (E = L)));
      return (J && Ft(m, j), k);
    }
    for (L = r(m, L); j < h.length; j++)
      ((D = v(L, m, j, h[j], x)),
        D !== null &&
          (e && D.alternate !== null && L.delete(D.key === null ? j : D.key),
          (d = i(D, d, j)),
          E === null ? (k = D) : (E.sibling = D),
          (E = D)));
    return (
      e &&
        L.forEach(function (Z) {
          return t(m, Z);
        }),
      J && Ft(m, j),
      k
    );
  }
  function w(m, d, h, x) {
    var k = Tn(h);
    if (typeof k != "function") throw Error(N(150));
    if (((h = k.call(h)), h == null)) throw Error(N(151));
    for (
      var E = (k = null), L = d, j = (d = 0), D = null, T = h.next();
      L !== null && !T.done;
      j++, T = h.next()
    ) {
      L.index > j ? ((D = L), (L = null)) : (D = L.sibling);
      var Z = g(m, L, T.value, x);
      if (Z === null) {
        L === null && (L = D);
        break;
      }
      (e && L && Z.alternate === null && t(m, L),
        (d = i(Z, d, j)),
        E === null ? (k = Z) : (E.sibling = Z),
        (E = Z),
        (L = D));
    }
    if (T.done) return (n(m, L), J && Ft(m, j), k);
    if (L === null) {
      for (; !T.done; j++, T = h.next())
        ((T = f(m, T.value, x)),
          T !== null &&
            ((d = i(T, d, j)),
            E === null ? (k = T) : (E.sibling = T),
            (E = T)));
      return (J && Ft(m, j), k);
    }
    for (L = r(m, L); !T.done; j++, T = h.next())
      ((T = v(L, m, j, T.value, x)),
        T !== null &&
          (e && T.alternate !== null && L.delete(T.key === null ? j : T.key),
          (d = i(T, d, j)),
          E === null ? (k = T) : (E.sibling = T),
          (E = T)));
    return (
      e &&
        L.forEach(function (I) {
          return t(m, I);
        }),
      J && Ft(m, j),
      k
    );
  }
  function P(m, d, h, x) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === nn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case Lr:
          e: {
            for (var k = h.key, E = d; E !== null; ) {
              if (E.key === k) {
                if (((k = h.type), k === nn)) {
                  if (E.tag === 7) {
                    (n(m, E.sibling),
                      (d = o(E, h.props.children)),
                      (d.return = m),
                      (m = d));
                    break e;
                  }
                } else if (
                  E.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === mt &&
                    ia(k) === E.type)
                ) {
                  (n(m, E.sibling),
                    (d = o(E, h.props)),
                    (d.ref = zn(m, E, h)),
                    (d.return = m),
                    (m = d));
                  break e;
                }
                n(m, E);
                break;
              } else t(m, E);
              E = E.sibling;
            }
            h.type === nn
              ? ((d = Ut(h.props.children, m.mode, x, h.key)),
                (d.return = m),
                (m = d))
              : ((x = ro(h.type, h.key, h.props, null, m.mode, x)),
                (x.ref = zn(m, d, h)),
                (x.return = m),
                (m = x));
          }
          return l(m);
        case tn:
          e: {
            for (E = h.key; d !== null; ) {
              if (d.key === E)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === h.containerInfo &&
                  d.stateNode.implementation === h.implementation
                ) {
                  (n(m, d.sibling),
                    (d = o(d, h.children || [])),
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
            ((d = Ei(h, m.mode, x)), (d.return = m), (m = d));
          }
          return l(m);
        case mt:
          return ((E = h._init), P(m, d, E(h._payload), x));
      }
      if (Un(h)) return y(m, d, h, x);
      if (Tn(h)) return w(m, d, h, x);
      Ir(m, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        d !== null && d.tag === 6
          ? (n(m, d.sibling), (d = o(d, h)), (d.return = m), (m = d))
          : (n(m, d), (d = Ni(h, m.mode, x)), (d.return = m), (m = d)),
        l(m))
      : n(m, d);
  }
  return P;
}
var Cn = sc(!0),
  ac = sc(!1),
  xo = Dt(null),
  wo = null,
  dn = null,
  Gl = null;
function Yl() {
  Gl = dn = wo = null;
}
function Xl(e) {
  var t = xo.current;
  (X(xo), (e._currentValue = t));
}
function ol(e, t, n) {
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
function vn(e, t) {
  ((wo = e),
    (Gl = dn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ne = !0), (e.firstContext = null)));
}
function Be(e) {
  var t = e._currentValue;
  if (Gl !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), dn === null)) {
      if (wo === null) throw Error(N(308));
      ((dn = e), (wo.dependencies = { lanes: 0, firstContext: e }));
    } else dn = dn.next = e;
  return t;
}
var At = null;
function Jl(e) {
  At === null ? (At = [e]) : At.push(e);
}
function uc(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Jl(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    dt(e, r)
  );
}
function dt(e, t) {
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
var yt = !1;
function Zl(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function cc(e, t) {
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
function at(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function jt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), V & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      dt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Jl(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    dt(e, n)
  );
}
function Jr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), zl(e, n));
  }
}
function la(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (i === null ? (o = i = l) : (i = i.next = l), (n = n.next));
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
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
function So(e, t, n, r) {
  var o = e.updateQueue;
  yt = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var a = s,
      u = a.next;
    ((a.next = null), l === null ? (i = u) : (l.next = u), (l = a));
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (s = p.lastBaseUpdate),
      s !== l &&
        (s === null ? (p.firstBaseUpdate = u) : (s.next = u),
        (p.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var f = o.baseState;
    ((l = 0), (p = u = a = null), (s = i));
    do {
      var g = s.lane,
        v = s.eventTime;
      if ((r & g) === g) {
        p !== null &&
          (p = p.next =
            {
              eventTime: v,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var y = e,
            w = s;
          switch (((g = t), (v = n), w.tag)) {
            case 1:
              if (((y = w.payload), typeof y == "function")) {
                f = y.call(v, f, g);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = w.payload),
                (g = typeof y == "function" ? y.call(v, f, g) : y),
                g == null)
              )
                break e;
              f = ne({}, f, g);
              break e;
            case 2:
              yt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (g = o.effects),
          g === null ? (o.effects = [s]) : g.push(s));
      } else
        ((v = {
          eventTime: v,
          lane: g,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          p === null ? ((u = p = v), (a = f)) : (p = p.next = v),
          (l |= g));
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        ((g = s),
          (s = g.next),
          (g.next = null),
          (o.lastBaseUpdate = g),
          (o.shared.pending = null));
      }
    } while (!0);
    if (
      (p === null && (a = f),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = p),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do ((l |= o.lane), (o = o.next));
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    ((Qt |= l), (e.lanes = l), (e.memoizedState = f));
  }
}
function sa(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(N(191, o));
        o.call(r);
      }
    }
}
var Nr = {},
  nt = Dt(Nr),
  pr = Dt(Nr),
  hr = Dt(Nr);
function bt(e) {
  if (e === Nr) throw Error(N(174));
  return e;
}
function ql(e, t) {
  switch ((Q(hr, t), Q(pr, e), Q(nt, Nr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ii(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ii(t, e)));
  }
  (X(nt), Q(nt, t));
}
function Nn() {
  (X(nt), X(pr), X(hr));
}
function dc(e) {
  bt(hr.current);
  var t = bt(nt.current),
    n = Ii(t, e.type);
  t !== n && (Q(pr, e), Q(nt, n));
}
function es(e) {
  pr.current === e && (X(nt), X(pr));
}
var ee = Dt(0);
function ko(e) {
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
var vi = [];
function ts() {
  for (var e = 0; e < vi.length; e++)
    vi[e]._workInProgressVersionPrimary = null;
  vi.length = 0;
}
var Zr = pt.ReactCurrentDispatcher,
  xi = pt.ReactCurrentBatchConfig,
  Kt = 0,
  te = null,
  le = null,
  ae = null,
  Co = !1,
  Xn = !1,
  gr = 0,
  gp = 0;
function pe() {
  throw Error(N(321));
}
function ns(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ye(e[n], t[n])) return !1;
  return !0;
}
function rs(e, t, n, r, o, i) {
  if (
    ((Kt = i),
    (te = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Zr.current = e === null || e.memoizedState === null ? xp : wp),
    (e = n(r, o)),
    Xn)
  ) {
    i = 0;
    do {
      if (((Xn = !1), (gr = 0), 25 <= i)) throw Error(N(301));
      ((i += 1),
        (ae = le = null),
        (t.updateQueue = null),
        (Zr.current = Sp),
        (e = n(r, o)));
    } while (Xn);
  }
  if (
    ((Zr.current = No),
    (t = le !== null && le.next !== null),
    (Kt = 0),
    (ae = le = te = null),
    (Co = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function os() {
  var e = gr !== 0;
  return ((gr = 0), e);
}
function Ze() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (ae === null ? (te.memoizedState = ae = e) : (ae = ae.next = e), ae);
}
function Ue() {
  if (le === null) {
    var e = te.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = le.next;
  var t = ae === null ? te.memoizedState : ae.next;
  if (t !== null) ((ae = t), (le = e));
  else {
    if (e === null) throw Error(N(310));
    ((le = e),
      (e = {
        memoizedState: le.memoizedState,
        baseState: le.baseState,
        baseQueue: le.baseQueue,
        queue: le.queue,
        next: null,
      }),
      ae === null ? (te.memoizedState = ae = e) : (ae = ae.next = e));
  }
  return ae;
}
function mr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function wi(e) {
  var t = Ue(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = le,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      ((o.next = i.next), (i.next = l));
    }
    ((r.baseQueue = o = i), (n.pending = null));
  }
  if (o !== null) {
    ((i = o.next), (r = r.baseState));
    var s = (l = null),
      a = null,
      u = i;
    do {
      var p = u.lane;
      if ((Kt & p) === p)
        (a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var f = {
          lane: p,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (a === null ? ((s = a = f), (l = r)) : (a = a.next = f),
          (te.lanes |= p),
          (Qt |= p));
      }
      u = u.next;
    } while (u !== null && u !== i);
    (a === null ? (l = r) : (a.next = s),
      Ye(r, t.memoizedState) || (Ne = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = a),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do ((i = o.lane), (te.lanes |= i), (Qt |= i), (o = o.next));
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Si(e) {
  var t = Ue(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do ((i = e(i, l.action)), (l = l.next));
    while (l !== o);
    (Ye(i, t.memoizedState) || (Ne = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i));
  }
  return [i, r];
}
function fc() {}
function pc(e, t) {
  var n = te,
    r = Ue(),
    o = t(),
    i = !Ye(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Ne = !0)),
    (r = r.queue),
    is(mc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ae !== null && ae.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      yr(9, gc.bind(null, n, r, o, t), void 0, null),
      ue === null)
    )
      throw Error(N(349));
    Kt & 30 || hc(n, t, o);
  }
  return o;
}
function hc(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (te.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function gc(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), yc(t) && vc(e));
}
function mc(e, t, n) {
  return n(function () {
    yc(t) && vc(e);
  });
}
function yc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ye(e, n);
  } catch {
    return !0;
  }
}
function vc(e) {
  var t = dt(e, 1);
  t !== null && Ge(t, e, 1, -1);
}
function aa(e) {
  var t = Ze();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: mr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = vp.bind(null, te, e)),
    [t.memoizedState, e]
  );
}
function yr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (te.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function xc() {
  return Ue().memoizedState;
}
function qr(e, t, n, r) {
  var o = Ze();
  ((te.flags |= e),
    (o.memoizedState = yr(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Uo(e, t, n, r) {
  var o = Ue();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (le !== null) {
    var l = le.memoizedState;
    if (((i = l.destroy), r !== null && ns(r, l.deps))) {
      o.memoizedState = yr(t, n, i, r);
      return;
    }
  }
  ((te.flags |= e), (o.memoizedState = yr(1 | t, n, i, r)));
}
function ua(e, t) {
  return qr(8390656, 8, e, t);
}
function is(e, t) {
  return Uo(2048, 8, e, t);
}
function wc(e, t) {
  return Uo(4, 2, e, t);
}
function Sc(e, t) {
  return Uo(4, 4, e, t);
}
function kc(e, t) {
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
function Cc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Uo(4, 4, kc.bind(null, t, e), n)
  );
}
function ls() {}
function Nc(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ns(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ec(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ns(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function jc(e, t, n) {
  return Kt & 21
    ? (Ye(n, t) || ((n = _u()), (te.lanes |= n), (Qt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ne = !0)), (e.memoizedState = n));
}
function mp(e, t) {
  var n = W;
  ((W = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = xi.transition;
  xi.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((W = n), (xi.transition = r));
  }
}
function Lc() {
  return Ue().memoizedState;
}
function yp(e, t, n) {
  var r = Ot(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Oc(e))
  )
    Rc(t, n);
  else if (((n = uc(e, t, n, r)), n !== null)) {
    var o = ve();
    (Ge(n, e, r, o), Pc(n, t, r));
  }
}
function vp(e, t, n) {
  var r = Ot(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Oc(e)) Rc(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          s = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), Ye(s, l))) {
          var a = t.interleaved;
          (a === null
            ? ((o.next = o), Jl(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o));
          return;
        }
      } catch {
      } finally {
      }
    ((n = uc(e, t, o, r)),
      n !== null && ((o = ve()), Ge(n, e, r, o), Pc(n, t, r)));
  }
}
function Oc(e) {
  var t = e.alternate;
  return e === te || (t !== null && t === te);
}
function Rc(e, t) {
  Xn = Co = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function Pc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), zl(e, n));
  }
}
var No = {
    readContext: Be,
    useCallback: pe,
    useContext: pe,
    useEffect: pe,
    useImperativeHandle: pe,
    useInsertionEffect: pe,
    useLayoutEffect: pe,
    useMemo: pe,
    useReducer: pe,
    useRef: pe,
    useState: pe,
    useDebugValue: pe,
    useDeferredValue: pe,
    useTransition: pe,
    useMutableSource: pe,
    useSyncExternalStore: pe,
    useId: pe,
    unstable_isNewReconciler: !1,
  },
  xp = {
    readContext: Be,
    useCallback: function (e, t) {
      return ((Ze().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Be,
    useEffect: ua,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        qr(4194308, 4, kc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return qr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return qr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ze();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ze();
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
        (e = e.dispatch = yp.bind(null, te, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ze();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: aa,
    useDebugValue: ls,
    useDeferredValue: function (e) {
      return (Ze().memoizedState = e);
    },
    useTransition: function () {
      var e = aa(!1),
        t = e[0];
      return ((e = mp.bind(null, e[1])), (Ze().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = te,
        o = Ze();
      if (J) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), ue === null)) throw Error(N(349));
        Kt & 30 || hc(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        ua(mc.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        yr(9, gc.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ze(),
        t = ue.identifierPrefix;
      if (J) {
        var n = st,
          r = lt;
        ((n = (r & ~(1 << (32 - Qe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = gr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = gp++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  wp = {
    readContext: Be,
    useCallback: Nc,
    useContext: Be,
    useEffect: is,
    useImperativeHandle: Cc,
    useInsertionEffect: wc,
    useLayoutEffect: Sc,
    useMemo: Ec,
    useReducer: wi,
    useRef: xc,
    useState: function () {
      return wi(mr);
    },
    useDebugValue: ls,
    useDeferredValue: function (e) {
      var t = Ue();
      return jc(t, le.memoizedState, e);
    },
    useTransition: function () {
      var e = wi(mr)[0],
        t = Ue().memoizedState;
      return [e, t];
    },
    useMutableSource: fc,
    useSyncExternalStore: pc,
    useId: Lc,
    unstable_isNewReconciler: !1,
  },
  Sp = {
    readContext: Be,
    useCallback: Nc,
    useContext: Be,
    useEffect: is,
    useImperativeHandle: Cc,
    useInsertionEffect: wc,
    useLayoutEffect: Sc,
    useMemo: Ec,
    useReducer: Si,
    useRef: xc,
    useState: function () {
      return Si(mr);
    },
    useDebugValue: ls,
    useDeferredValue: function (e) {
      var t = Ue();
      return le === null ? (t.memoizedState = e) : jc(t, le.memoizedState, e);
    },
    useTransition: function () {
      var e = Si(mr)[0],
        t = Ue().memoizedState;
      return [e, t];
    },
    useMutableSource: fc,
    useSyncExternalStore: pc,
    useId: Lc,
    unstable_isNewReconciler: !1,
  };
function He(e, t) {
  if (e && e.defaultProps) {
    ((t = ne({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function il(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ne({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var Vo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Jt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ve(),
      o = Ot(e),
      i = at(r, o);
    ((i.payload = t),
      n != null && (i.callback = n),
      (t = jt(e, i, o)),
      t !== null && (Ge(t, e, o, r), Jr(t, e, o)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ve(),
      o = Ot(e),
      i = at(r, o);
    ((i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = jt(e, i, o)),
      t !== null && (Ge(t, e, o, r), Jr(t, e, o)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ve(),
      r = Ot(e),
      o = at(n, r);
    ((o.tag = 2),
      t != null && (o.callback = t),
      (t = jt(e, o, r)),
      t !== null && (Ge(t, e, r, n), Jr(t, e, r)));
  },
};
function ca(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
        ? !ur(n, r) || !ur(o, i)
        : !0
  );
}
function _c(e, t, n) {
  var r = !1,
    o = _t,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Be(i))
      : ((o = je(t) ? Ht : me.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Sn(e, o) : _t)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Vo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function da(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Vo.enqueueReplaceState(t, t.state, null));
}
function ll(e, t, n, r) {
  var o = e.stateNode;
  ((o.props = n), (o.state = e.memoizedState), (o.refs = {}), Zl(e));
  var i = t.contextType;
  (typeof i == "object" && i !== null
    ? (o.context = Be(i))
    : ((i = je(t) ? Ht : me.current), (o.context = Sn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (il(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Vo.enqueueReplaceState(o, o.state, null),
      So(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308));
}
function En(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += Gd(r)), (r = r.return));
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function ki(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function sl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var kp = typeof WeakMap == "function" ? WeakMap : Map;
function Tc(e, t, n) {
  ((n = at(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (jo || ((jo = !0), (yl = r)), sl(e, t));
    }),
    n
  );
}
function Dc(e, t, n) {
  ((n = at(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    ((n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        sl(e, t);
      }));
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        (sl(e, t),
          typeof r != "function" &&
            (Lt === null ? (Lt = new Set([this])) : Lt.add(this)));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function fa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new kp();
    var o = new Set();
    r.set(t, o);
  } else ((o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o)));
  o.has(n) || (o.add(n), (e = Fp.bind(null, e, t, n)), t.then(e, e));
}
function pa(e) {
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
function ha(e, t, n, r, o) {
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
              : ((t = at(-1, 1)), (t.tag = 2), jt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Cp = pt.ReactCurrentOwner,
  Ne = !1;
function ye(e, t, n, r) {
  t.child = e === null ? ac(t, null, n, r) : Cn(t, e.child, n, r);
}
function ga(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    vn(t, o),
    (r = rs(e, t, n, r, i, o)),
    (n = os()),
    e !== null && !Ne
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        ft(e, t, o))
      : (J && n && Wl(t), (t.flags |= 1), ye(e, t, r, o), t.child)
  );
}
function ma(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !hs(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Mc(e, t, i, r, o))
      : ((e = ro(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ur), n(l, r) && e.ref === t.ref)
    )
      return ft(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Rt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Mc(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ur(i, r) && e.ref === t.ref)
      if (((Ne = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ne = !0);
      else return ((t.lanes = e.lanes), ft(e, t, o));
  }
  return al(e, t, n, r, o);
}
function $c(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Q(pn, Re),
        (Re |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Q(pn, Re),
          (Re |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        Q(pn, Re),
        (Re |= r));
    }
  else
    (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Q(pn, Re),
      (Re |= r));
  return (ye(e, t, o, n), t.child);
}
function Fc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function al(e, t, n, r, o) {
  var i = je(n) ? Ht : me.current;
  return (
    (i = Sn(t, i)),
    vn(t, o),
    (n = rs(e, t, n, r, i, o)),
    (r = os()),
    e !== null && !Ne
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        ft(e, t, o))
      : (J && r && Wl(t), (t.flags |= 1), ye(e, t, n, o), t.child)
  );
}
function ya(e, t, n, r, o) {
  if (je(n)) {
    var i = !0;
    mo(t);
  } else i = !1;
  if ((vn(t, o), t.stateNode === null))
    (eo(e, t), _c(t, n, r), ll(t, n, r, o), (r = !0));
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var a = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Be(u))
      : ((u = je(n) ? Ht : me.current), (u = Sn(t, u)));
    var p = n.getDerivedStateFromProps,
      f =
        typeof p == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    (f ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== r || a !== u) && da(t, l, r, u)),
      (yt = !1));
    var g = t.memoizedState;
    ((l.state = g),
      So(t, r, l, o),
      (a = t.memoizedState),
      s !== r || g !== a || Ee.current || yt
        ? (typeof p == "function" && (il(t, n, p, r), (a = t.memoizedState)),
          (s = yt || ca(t, n, s, r, g, a, u))
            ? (f ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (l.props = r),
          (l.state = a),
          (l.context = u),
          (r = s))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((l = t.stateNode),
      cc(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : He(t.type, s)),
      (l.props = u),
      (f = t.pendingProps),
      (g = l.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Be(a))
        : ((a = je(n) ? Ht : me.current), (a = Sn(t, a))));
    var v = n.getDerivedStateFromProps;
    ((p =
      typeof v == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== f || g !== a) && da(t, l, r, a)),
      (yt = !1),
      (g = t.memoizedState),
      (l.state = g),
      So(t, r, l, o));
    var y = t.memoizedState;
    s !== f || g !== y || Ee.current || yt
      ? (typeof v == "function" && (il(t, n, v, r), (y = t.memoizedState)),
        (u = yt || ca(t, n, u, r, g, y, a) || !1)
          ? (p ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, y, a),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, y, a)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (s === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (l.props = r),
        (l.state = y),
        (l.context = a),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (s === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ul(e, t, n, r, i, o);
}
function ul(e, t, n, r, o, i) {
  Fc(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return (o && na(t, n, !1), ft(e, t, i));
  ((r = t.stateNode), (Cp.current = t));
  var s =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Cn(t, e.child, null, i)), (t.child = Cn(t, null, s, i)))
      : ye(e, t, s, i),
    (t.memoizedState = r.state),
    o && na(t, n, !0),
    t.child
  );
}
function zc(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? ta(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ta(e, t.context, !1),
    ql(e, t.containerInfo));
}
function va(e, t, n, r, o) {
  return (kn(), Ql(o), (t.flags |= 256), ye(e, t, n, r), t.child);
}
var cl = { dehydrated: null, treeContext: null, retryLane: 0 };
function dl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ic(e, t, n) {
  var r = t.pendingProps,
    o = ee.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Q(ee, o & 1),
    e === null)
  )
    return (
      rl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = Ko(l, r, 0, null)),
              (e = Ut(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = dl(n)),
              (t.memoizedState = cl),
              e)
            : ss(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return Np(e, t, l, r, s, o, n);
  if (i) {
    ((i = r.fallback), (l = t.mode), (o = e.child), (s = o.sibling));
    var a = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Rt(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = Rt(s, i)) : ((i = Ut(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? dl(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = cl),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Rt(i, { mode: "visible", children: r.children })),
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
function ss(e, t) {
  return (
    (t = Ko({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ar(e, t, n, r) {
  return (
    r !== null && Ql(r),
    Cn(t, e.child, null, n),
    (e = ss(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Np(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ki(Error(N(422)))), Ar(e, t, l, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = Ko({ mode: "visible", children: r.children }, o, 0, null)),
          (i = Ut(i, o, l, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && Cn(t, e.child, null, l),
          (t.child.memoizedState = dl(l)),
          (t.memoizedState = cl),
          i);
  if (!(t.mode & 1)) return Ar(e, t, l, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (
      (r = s),
      (i = Error(N(419))),
      (r = ki(i, r, void 0)),
      Ar(e, t, l, r)
    );
  }
  if (((s = (l & e.childLanes) !== 0), Ne || s)) {
    if (((r = ue), r !== null)) {
      switch (l & -l) {
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
      ((o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), dt(e, o), Ge(r, e, o, -1)));
    }
    return (ps(), (r = ki(Error(N(421)))), Ar(e, t, l, r));
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = zp.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Pe = Et(o.nextSibling)),
      (_e = t),
      (J = !0),
      (Ke = null),
      e !== null &&
        ((ze[Ie++] = lt),
        (ze[Ie++] = st),
        (ze[Ie++] = Wt),
        (lt = e.id),
        (st = e.overflow),
        (Wt = t)),
      (t = ss(t, r.children)),
      (t.flags |= 4096),
      t);
}
function xa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), ol(e.return, t, n));
}
function Ci(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Ac(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((ye(e, t, r.children, n), (r = ee.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && xa(e, n, t);
        else if (e.tag === 19) xa(e, n, t);
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
  if ((Q(ee, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          ((e = n.alternate),
            e !== null && ko(e) === null && (o = n),
            (n = n.sibling));
        ((n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Ci(t, !1, o, n, i));
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && ko(e) === null)) {
            t.child = o;
            break;
          }
          ((e = o.sibling), (o.sibling = n), (n = o), (o = e));
        }
        Ci(t, !0, n, null, i);
        break;
      case "together":
        Ci(t, !1, null, null, void 0);
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
function ft(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Qt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Rt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = Rt(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function Ep(e, t, n) {
  switch (t.tag) {
    case 3:
      (zc(t), kn());
      break;
    case 5:
      dc(t);
      break;
    case 1:
      je(t.type) && mo(t);
      break;
    case 4:
      ql(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      (Q(xo, r._currentValue), (r._currentValue = o));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Q(ee, ee.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Ic(e, t, n)
            : (Q(ee, ee.current & 1),
              (e = ft(e, t, n)),
              e !== null ? e.sibling : null);
      Q(ee, ee.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ac(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Q(ee, ee.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), $c(e, t, n));
  }
  return ft(e, t, n);
}
var bc, fl, Bc, Uc;
bc = function (e, t) {
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
fl = function () {};
Bc = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    ((e = t.stateNode), bt(nt.current));
    var i = null;
    switch (n) {
      case "input":
        ((o = Mi(e, o)), (r = Mi(e, r)), (i = []));
        break;
      case "select":
        ((o = ne({}, o, { value: void 0 })),
          (r = ne({}, r, { value: void 0 })),
          (i = []));
        break;
      case "textarea":
        ((o = zi(e, o)), (r = zi(e, r)), (i = []));
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ho);
    }
    Ai(n, r);
    var l;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (nr.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((s = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== s && (a != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) ||
                (a && a.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in a)
              a.hasOwnProperty(l) &&
                s[l] !== a[l] &&
                (n || (n = {}), (n[l] = a[l]));
          } else (n || (i || (i = []), i.push(u, n)), (n = a));
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (i = i || []).push(u, a))
            : u === "children"
              ? (typeof a != "string" && typeof a != "number") ||
                (i = i || []).push(u, "" + a)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (nr.hasOwnProperty(u)
                  ? (a != null && u === "onScroll" && Y("scroll", e),
                    i || s === a || (i = []))
                  : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Uc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function In(e, t) {
  if (!J)
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
function he(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      ((n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling));
  else
    for (o = e.child; o !== null; )
      ((n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function jp(e, t, n) {
  var r = t.pendingProps;
  switch ((Kl(t), t.tag)) {
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
      return (he(t), null);
    case 1:
      return (je(t.type) && go(), he(t), null);
    case 3:
      return (
        (r = t.stateNode),
        Nn(),
        X(Ee),
        X(me),
        ts(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (zr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ke !== null && (wl(Ke), (Ke = null)))),
        fl(e, t),
        he(t),
        null
      );
    case 5:
      es(t);
      var o = bt(hr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Bc(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return (he(t), null);
        }
        if (((e = bt(nt.current)), zr(t))) {
          ((r = t.stateNode), (n = t.type));
          var i = t.memoizedProps;
          switch (((r[qe] = t), (r[fr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (Y("cancel", r), Y("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              Y("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Hn.length; o++) Y(Hn[o], r);
              break;
            case "source":
              Y("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (Y("error", r), Y("load", r));
              break;
            case "details":
              Y("toggle", r);
              break;
            case "input":
              (Os(r, i), Y("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!i.multiple }),
                Y("invalid", r));
              break;
            case "textarea":
              (Ps(r, i), Y("invalid", r));
          }
          (Ai(n, i), (o = null));
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var s = i[l];
              l === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Fr(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Fr(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : nr.hasOwnProperty(l) &&
                  s != null &&
                  l === "onScroll" &&
                  Y("scroll", r);
            }
          switch (n) {
            case "input":
              (Or(r), Rs(r, i, !0));
              break;
            case "textarea":
              (Or(r), _s(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ho);
          }
          ((r = o), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((l = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = mu(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = l.createElement(n, { is: r.is }))
                  : ((e = l.createElement(n)),
                    n === "select" &&
                      ((l = e),
                      r.multiple
                        ? (l.multiple = !0)
                        : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[qe] = t),
            (e[fr] = r),
            bc(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((l = bi(n, r)), n)) {
              case "dialog":
                (Y("cancel", e), Y("close", e), (o = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (Y("load", e), (o = r));
                break;
              case "video":
              case "audio":
                for (o = 0; o < Hn.length; o++) Y(Hn[o], e);
                o = r;
                break;
              case "source":
                (Y("error", e), (o = r));
                break;
              case "img":
              case "image":
              case "link":
                (Y("error", e), Y("load", e), (o = r));
                break;
              case "details":
                (Y("toggle", e), (o = r));
                break;
              case "input":
                (Os(e, r), (o = Mi(e, r)), Y("invalid", e));
                break;
              case "option":
                o = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = ne({}, r, { value: void 0 })),
                  Y("invalid", e));
                break;
              case "textarea":
                (Ps(e, r), (o = zi(e, r)), Y("invalid", e));
                break;
              default:
                o = r;
            }
            (Ai(n, o), (s = o));
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var a = s[i];
                i === "style"
                  ? xu(e, a)
                  : i === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && yu(e, a))
                    : i === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && rr(e, a)
                        : typeof a == "number" && rr(e, "" + a)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (nr.hasOwnProperty(i)
                          ? a != null && i === "onScroll" && Y("scroll", e)
                          : a != null && _l(e, i, a, l));
              }
            switch (n) {
              case "input":
                (Or(e), Rs(e, r, !1));
                break;
              case "textarea":
                (Or(e), _s(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Pt(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? hn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      hn(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ho);
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
      return (he(t), null);
    case 6:
      if (e && t.stateNode != null) Uc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (((n = bt(hr.current)), bt(nt.current), zr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[qe] = t),
            (i = r.nodeValue !== n) && ((e = _e), e !== null))
          )
            switch (e.tag) {
              case 3:
                Fr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Fr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[qe] = t),
            (t.stateNode = r));
      }
      return (he(t), null);
    case 13:
      if (
        (X(ee),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (J && Pe !== null && t.mode & 1 && !(t.flags & 128))
          (lc(), kn(), (t.flags |= 98560), (i = !1));
        else if (((i = zr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(N(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(N(317));
            i[qe] = t;
          } else
            (kn(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (he(t), (i = !1));
        } else (Ke !== null && (wl(Ke), (Ke = null)), (i = !0));
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ee.current & 1 ? se === 0 && (se = 3) : ps())),
          t.updateQueue !== null && (t.flags |= 4),
          he(t),
          null);
    case 4:
      return (
        Nn(),
        fl(e, t),
        e === null && cr(t.stateNode.containerInfo),
        he(t),
        null
      );
    case 10:
      return (Xl(t.type._context), he(t), null);
    case 17:
      return (je(t.type) && go(), he(t), null);
    case 19:
      if ((X(ee), (i = t.memoizedState), i === null)) return (he(t), null);
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) In(i, !1);
        else {
          if (se !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = ko(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    In(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (Q(ee, (ee.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          i.tail !== null &&
            oe() > jn &&
            ((t.flags |= 128), (r = !0), In(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ko(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              In(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !J)
            )
              return (he(t), null);
          } else
            2 * oe() - i.renderingStartTime > jn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), In(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = oe()),
          (t.sibling = null),
          (n = ee.current),
          Q(ee, r ? (n & 1) | 2 : n & 1),
          t)
        : (he(t), null);
    case 22:
    case 23:
      return (
        fs(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Re & 1073741824 && (he(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : he(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function Lp(e, t) {
  switch ((Kl(t), t.tag)) {
    case 1:
      return (
        je(t.type) && go(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Nn(),
        X(Ee),
        X(me),
        ts(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (es(t), null);
    case 13:
      if ((X(ee), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(N(340));
        kn();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (X(ee), null);
    case 4:
      return (Nn(), null);
    case 10:
      return (Xl(t.type._context), null);
    case 22:
    case 23:
      return (fs(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var br = !1,
  ge = !1,
  Op = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function fn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        re(e, t, r);
      }
    else n.current = null;
}
function pl(e, t, n) {
  try {
    n();
  } catch (r) {
    re(e, t, r);
  }
}
var wa = !1;
function Rp(e, t) {
  if (((Xi = co), (e = Qu()), Hl(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, i.nodeType);
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            s = -1,
            a = -1,
            u = 0,
            p = 0,
            f = e,
            g = null;
          t: for (;;) {
            for (
              var v;
              f !== n || (o !== 0 && f.nodeType !== 3) || (s = l + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (a = l + r),
                f.nodeType === 3 && (l += f.nodeValue.length),
                (v = f.firstChild) !== null;
            )
              ((g = f), (f = v));
            for (;;) {
              if (f === e) break t;
              if (
                (g === n && ++u === o && (s = l),
                g === i && ++p === r && (a = l),
                (v = f.nextSibling) !== null)
              )
                break;
              ((f = g), (g = f.parentNode));
            }
            f = v;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ji = { focusedElem: e, selectionRange: n }, co = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (_ = e));
    else
      for (; _ !== null; ) {
        t = _;
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
                  var w = y.memoizedProps,
                    P = y.memoizedState,
                    m = t.stateNode,
                    d = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : He(t.type, w),
                      P,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (x) {
          re(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (_ = e));
          break;
        }
        _ = t.return;
      }
  return ((y = wa), (wa = !1), y);
}
function Jn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        ((o.destroy = void 0), i !== void 0 && pl(t, n, i));
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ho(e, t) {
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
function hl(e) {
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
function Vc(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Vc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[qe], delete t[fr], delete t[el], delete t[dp], delete t[fp])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Hc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Sa(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Hc(e.return)) return null;
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
function gl(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = ho)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (gl(e, t, n), e = e.sibling; e !== null; )
      (gl(e, t, n), (e = e.sibling));
}
function ml(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ml(e, t, n), e = e.sibling; e !== null; )
      (ml(e, t, n), (e = e.sibling));
}
var ce = null,
  We = !1;
function gt(e, t, n) {
  for (n = n.child; n !== null; ) (Wc(e, t, n), (n = n.sibling));
}
function Wc(e, t, n) {
  if (tt && typeof tt.onCommitFiberUnmount == "function")
    try {
      tt.onCommitFiberUnmount(Fo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ge || fn(n, t);
    case 6:
      var r = ce,
        o = We;
      ((ce = null),
        gt(e, t, n),
        (ce = r),
        (We = o),
        ce !== null &&
          (We
            ? ((e = ce),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ce.removeChild(n.stateNode)));
      break;
    case 18:
      ce !== null &&
        (We
          ? ((e = ce),
            (n = n.stateNode),
            e.nodeType === 8
              ? mi(e.parentNode, n)
              : e.nodeType === 1 && mi(e, n),
            sr(e))
          : mi(ce, n.stateNode));
      break;
    case 4:
      ((r = ce),
        (o = We),
        (ce = n.stateNode.containerInfo),
        (We = !0),
        gt(e, t, n),
        (ce = r),
        (We = o));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ge &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          ((i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && pl(n, t, l),
            (o = o.next));
        } while (o !== r);
      }
      gt(e, t, n);
      break;
    case 1:
      if (
        !ge &&
        (fn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (s) {
          re(n, t, s);
        }
      gt(e, t, n);
      break;
    case 21:
      gt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ge = (r = ge) || n.memoizedState !== null), gt(e, t, n), (ge = r))
        : gt(e, t, n);
      break;
    default:
      gt(e, t, n);
  }
}
function ka(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new Op()),
      t.forEach(function (r) {
        var o = Ip.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      }));
  }
}
function Ve(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          l = t,
          s = l;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              ((ce = s.stateNode), (We = !1));
              break e;
            case 3:
              ((ce = s.stateNode.containerInfo), (We = !0));
              break e;
            case 4:
              ((ce = s.stateNode.containerInfo), (We = !0));
              break e;
          }
          s = s.return;
        }
        if (ce === null) throw Error(N(160));
        (Wc(i, l, o), (ce = null), (We = !1));
        var a = o.alternate;
        (a !== null && (a.return = null), (o.return = null));
      } catch (u) {
        re(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (Kc(t, e), (t = t.sibling));
}
function Kc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ve(t, e), Je(e), r & 4)) {
        try {
          (Jn(3, e, e.return), Ho(3, e));
        } catch (w) {
          re(e, e.return, w);
        }
        try {
          Jn(5, e, e.return);
        } catch (w) {
          re(e, e.return, w);
        }
      }
      break;
    case 1:
      (Ve(t, e), Je(e), r & 512 && n !== null && fn(n, n.return));
      break;
    case 5:
      if (
        (Ve(t, e),
        Je(e),
        r & 512 && n !== null && fn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          rr(o, "");
        } catch (w) {
          re(e, e.return, w);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            (s === "input" && i.type === "radio" && i.name != null && hu(o, i),
              bi(s, l));
            var u = bi(s, i);
            for (l = 0; l < a.length; l += 2) {
              var p = a[l],
                f = a[l + 1];
              p === "style"
                ? xu(o, f)
                : p === "dangerouslySetInnerHTML"
                  ? yu(o, f)
                  : p === "children"
                    ? rr(o, f)
                    : _l(o, p, f, u);
            }
            switch (s) {
              case "input":
                $i(o, i);
                break;
              case "textarea":
                gu(o, i);
                break;
              case "select":
                var g = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var v = i.value;
                v != null
                  ? hn(o, !!i.multiple, v, !1)
                  : g !== !!i.multiple &&
                    (i.defaultValue != null
                      ? hn(o, !!i.multiple, i.defaultValue, !0)
                      : hn(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[fr] = i;
          } catch (w) {
            re(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Ve(t, e), Je(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        ((o = e.stateNode), (i = e.memoizedProps));
        try {
          o.nodeValue = i;
        } catch (w) {
          re(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Ve(t, e), Je(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          sr(t.containerInfo);
        } catch (w) {
          re(e, e.return, w);
        }
      break;
    case 4:
      (Ve(t, e), Je(e));
      break;
    case 13:
      (Ve(t, e),
        Je(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (cs = oe())),
        r & 4 && ka(e));
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ge = (u = ge) || p), Ve(t, e), (ge = u)) : Ve(t, e),
        Je(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !p && e.mode & 1)
        )
          for (_ = e, p = e.child; p !== null; ) {
            for (f = _ = p; _ !== null; ) {
              switch (((g = _), (v = g.child), g.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Jn(4, g, g.return);
                  break;
                case 1:
                  fn(g, g.return);
                  var y = g.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    ((r = g), (n = g.return));
                    try {
                      ((t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount());
                    } catch (w) {
                      re(r, n, w);
                    }
                  }
                  break;
                case 5:
                  fn(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    Na(f);
                    continue;
                  }
              }
              v !== null ? ((v.return = g), (_ = v)) : Na(f);
            }
            p = p.sibling;
          }
        e: for (p = null, f = e; ; ) {
          if (f.tag === 5) {
            if (p === null) {
              p = f;
              try {
                ((o = f.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = f.stateNode),
                      (a = f.memoizedProps.style),
                      (l =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = vu("display", l))));
              } catch (w) {
                re(e, e.return, w);
              }
            }
          } else if (f.tag === 6) {
            if (p === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (w) {
                re(e, e.return, w);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            ((f.child.return = f), (f = f.child));
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            (p === f && (p = null), (f = f.return));
          }
          (p === f && (p = null),
            (f.sibling.return = f.return),
            (f = f.sibling));
        }
      }
      break;
    case 19:
      (Ve(t, e), Je(e), r & 4 && ka(e));
      break;
    case 21:
      break;
    default:
      (Ve(t, e), Je(e));
  }
}
function Je(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Hc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (rr(o, ""), (r.flags &= -33));
          var i = Sa(e);
          ml(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = Sa(e);
          gl(e, s, l);
          break;
        default:
          throw Error(N(161));
      }
    } catch (a) {
      re(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Pp(e, t, n) {
  ((_ = e), Qc(e));
}
function Qc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var o = _,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || br;
      if (!l) {
        var s = o.alternate,
          a = (s !== null && s.memoizedState !== null) || ge;
        s = br;
        var u = ge;
        if (((br = l), (ge = a) && !u))
          for (_ = o; _ !== null; )
            ((l = _),
              (a = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Ea(o)
                : a !== null
                  ? ((a.return = l), (_ = a))
                  : Ea(o));
        for (; i !== null; ) ((_ = i), Qc(i), (i = i.sibling));
        ((_ = o), (br = s), (ge = u));
      }
      Ca(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (_ = i)) : Ca(e);
  }
}
function Ca(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ge || Ho(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ge)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : He(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && sa(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                sa(t, l, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
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
                var u = t.alternate;
                if (u !== null) {
                  var p = u.memoizedState;
                  if (p !== null) {
                    var f = p.dehydrated;
                    f !== null && sr(f);
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
              throw Error(N(163));
          }
        ge || (t.flags & 512 && hl(t));
      } catch (g) {
        re(t, t.return, g);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (_ = n));
      break;
    }
    _ = t.return;
  }
}
function Na(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (_ = n));
      break;
    }
    _ = t.return;
  }
}
function Ea(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ho(4, t);
          } catch (a) {
            re(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              re(t, o, a);
            }
          }
          var i = t.return;
          try {
            hl(t);
          } catch (a) {
            re(t, i, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            hl(t);
          } catch (a) {
            re(t, l, a);
          }
      }
    } catch (a) {
      re(t, t.return, a);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      ((s.return = t.return), (_ = s));
      break;
    }
    _ = t.return;
  }
}
var _p = Math.ceil,
  Eo = pt.ReactCurrentDispatcher,
  as = pt.ReactCurrentOwner,
  be = pt.ReactCurrentBatchConfig,
  V = 0,
  ue = null,
  ie = null,
  de = 0,
  Re = 0,
  pn = Dt(0),
  se = 0,
  vr = null,
  Qt = 0,
  Wo = 0,
  us = 0,
  Zn = null,
  Ce = null,
  cs = 0,
  jn = 1 / 0,
  ot = null,
  jo = !1,
  yl = null,
  Lt = null,
  Br = !1,
  St = null,
  Lo = 0,
  qn = 0,
  vl = null,
  to = -1,
  no = 0;
function ve() {
  return V & 6 ? oe() : to !== -1 ? to : (to = oe());
}
function Ot(e) {
  return e.mode & 1
    ? V & 2 && de !== 0
      ? de & -de
      : hp.transition !== null
        ? (no === 0 && (no = _u()), no)
        : ((e = W),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Iu(e.type))),
          e)
    : 1;
}
function Ge(e, t, n, r) {
  if (50 < qn) throw ((qn = 0), (vl = null), Error(N(185)));
  (Sr(e, n, r),
    (!(V & 2) || e !== ue) &&
      (e === ue && (!(V & 2) && (Wo |= n), se === 4 && xt(e, de)),
      Le(e, r),
      n === 1 && V === 0 && !(t.mode & 1) && ((jn = oe() + 500), Bo && Mt())));
}
function Le(e, t) {
  var n = e.callbackNode;
  hf(e, t);
  var r = uo(e, e === ue ? de : 0);
  if (r === 0)
    (n !== null && Ms(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ms(n), t === 1))
      (e.tag === 0 ? pp(ja.bind(null, e)) : rc(ja.bind(null, e)),
        up(function () {
          !(V & 6) && Mt();
        }),
        (n = null));
    else {
      switch (Tu(r)) {
        case 1:
          n = Fl;
          break;
        case 4:
          n = Ru;
          break;
        case 16:
          n = ao;
          break;
        case 536870912:
          n = Pu;
          break;
        default:
          n = ao;
      }
      n = td(n, Gc.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function Gc(e, t) {
  if (((to = -1), (no = 0), V & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (xn() && e.callbackNode !== n) return null;
  var r = uo(e, e === ue ? de : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Oo(e, r);
  else {
    t = r;
    var o = V;
    V |= 2;
    var i = Xc();
    (ue !== e || de !== t) && ((ot = null), (jn = oe() + 500), Bt(e, t));
    do
      try {
        Mp();
        break;
      } catch (s) {
        Yc(e, s);
      }
    while (!0);
    (Yl(),
      (Eo.current = i),
      (V = o),
      ie !== null ? (t = 0) : ((ue = null), (de = 0), (t = se)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Wi(e)), o !== 0 && ((r = o), (t = xl(e, o)))), t === 1)
    )
      throw ((n = vr), Bt(e, 0), xt(e, r), Le(e, oe()), n);
    if (t === 6) xt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Tp(o) &&
          ((t = Oo(e, r)),
          t === 2 && ((i = Wi(e)), i !== 0 && ((r = i), (t = xl(e, i)))),
          t === 1))
      )
        throw ((n = vr), Bt(e, 0), xt(e, r), Le(e, oe()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          zt(e, Ce, ot);
          break;
        case 3:
          if (
            (xt(e, r), (r & 130023424) === r && ((t = cs + 500 - oe()), 10 < t))
          ) {
            if (uo(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              (ve(), (e.pingedLanes |= e.suspendedLanes & o));
              break;
            }
            e.timeoutHandle = qi(zt.bind(null, e, Ce, ot), t);
            break;
          }
          zt(e, Ce, ot);
          break;
        case 4:
          if ((xt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - Qe(r);
            ((i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i));
          }
          if (
            ((r = o),
            (r = oe() - r),
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
                          : 1960 * _p(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = qi(zt.bind(null, e, Ce, ot), r);
            break;
          }
          zt(e, Ce, ot);
          break;
        case 5:
          zt(e, Ce, ot);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return (Le(e, oe()), e.callbackNode === n ? Gc.bind(null, e) : null);
}
function xl(e, t) {
  var n = Zn;
  return (
    e.current.memoizedState.isDehydrated && (Bt(e, t).flags |= 256),
    (e = Oo(e, t)),
    e !== 2 && ((t = Ce), (Ce = n), t !== null && wl(t)),
    e
  );
}
function wl(e) {
  Ce === null ? (Ce = e) : Ce.push.apply(Ce, e);
}
function Tp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Ye(i(), o)) return !1;
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
function xt(e, t) {
  for (
    t &= ~us,
      t &= ~Wo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - Qe(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function ja(e) {
  if (V & 6) throw Error(N(327));
  xn();
  var t = uo(e, 0);
  if (!(t & 1)) return (Le(e, oe()), null);
  var n = Oo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Wi(e);
    r !== 0 && ((t = r), (n = xl(e, r)));
  }
  if (n === 1) throw ((n = vr), Bt(e, 0), xt(e, t), Le(e, oe()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    zt(e, Ce, ot),
    Le(e, oe()),
    null
  );
}
function ds(e, t) {
  var n = V;
  V |= 1;
  try {
    return e(t);
  } finally {
    ((V = n), V === 0 && ((jn = oe() + 500), Bo && Mt()));
  }
}
function Gt(e) {
  St !== null && St.tag === 0 && !(V & 6) && xn();
  var t = V;
  V |= 1;
  var n = be.transition,
    r = W;
  try {
    if (((be.transition = null), (W = 1), e)) return e();
  } finally {
    ((W = r), (be.transition = n), (V = t), !(V & 6) && Mt());
  }
}
function fs() {
  ((Re = pn.current), X(pn));
}
function Bt(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), ap(n)), ie !== null))
    for (n = ie.return; n !== null; ) {
      var r = n;
      switch ((Kl(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && go());
          break;
        case 3:
          (Nn(), X(Ee), X(me), ts());
          break;
        case 5:
          es(r);
          break;
        case 4:
          Nn();
          break;
        case 13:
          X(ee);
          break;
        case 19:
          X(ee);
          break;
        case 10:
          Xl(r.type._context);
          break;
        case 22:
        case 23:
          fs();
      }
      n = n.return;
    }
  if (
    ((ue = e),
    (ie = e = Rt(e.current, null)),
    (de = Re = t),
    (se = 0),
    (vr = null),
    (us = Wo = Qt = 0),
    (Ce = Zn = null),
    At !== null)
  ) {
    for (t = 0; t < At.length; t++)
      if (((n = At[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          ((i.next = o), (r.next = l));
        }
        n.pending = r;
      }
    At = null;
  }
  return e;
}
function Yc(e, t) {
  do {
    var n = ie;
    try {
      if ((Yl(), (Zr.current = No), Co)) {
        for (var r = te.memoizedState; r !== null; ) {
          var o = r.queue;
          (o !== null && (o.pending = null), (r = r.next));
        }
        Co = !1;
      }
      if (
        ((Kt = 0),
        (ae = le = te = null),
        (Xn = !1),
        (gr = 0),
        (as.current = null),
        n === null || n.return === null)
      ) {
        ((se = 1), (vr = t), (ie = null));
        break;
      }
      e: {
        var i = e,
          l = n.return,
          s = n,
          a = t;
        if (
          ((t = de),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            p = s,
            f = p.tag;
          if (!(p.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var g = p.alternate;
            g
              ? ((p.updateQueue = g.updateQueue),
                (p.memoizedState = g.memoizedState),
                (p.lanes = g.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var v = pa(l);
          if (v !== null) {
            ((v.flags &= -257),
              ha(v, l, s, i, t),
              v.mode & 1 && fa(i, u, t),
              (t = v),
              (a = u));
            var y = t.updateQueue;
            if (y === null) {
              var w = new Set();
              (w.add(a), (t.updateQueue = w));
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              (fa(i, u, t), ps());
              break e;
            }
            a = Error(N(426));
          }
        } else if (J && s.mode & 1) {
          var P = pa(l);
          if (P !== null) {
            (!(P.flags & 65536) && (P.flags |= 256),
              ha(P, l, s, i, t),
              Ql(En(a, s)));
            break e;
          }
        }
        ((i = a = En(a, s)),
          se !== 4 && (se = 2),
          Zn === null ? (Zn = [i]) : Zn.push(i),
          (i = l));
        do {
          switch (i.tag) {
            case 3:
              ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
              var m = Tc(i, a, t);
              la(i, m);
              break e;
            case 1:
              s = a;
              var d = i.type,
                h = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Lt === null || !Lt.has(h))))
              ) {
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var x = Dc(i, s, t);
                la(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Zc(n);
    } catch (k) {
      ((t = k), ie === n && n !== null && (ie = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Xc() {
  var e = Eo.current;
  return ((Eo.current = No), e === null ? No : e);
}
function ps() {
  ((se === 0 || se === 3 || se === 2) && (se = 4),
    ue === null || (!(Qt & 268435455) && !(Wo & 268435455)) || xt(ue, de));
}
function Oo(e, t) {
  var n = V;
  V |= 2;
  var r = Xc();
  (ue !== e || de !== t) && ((ot = null), Bt(e, t));
  do
    try {
      Dp();
      break;
    } catch (o) {
      Yc(e, o);
    }
  while (!0);
  if ((Yl(), (V = n), (Eo.current = r), ie !== null)) throw Error(N(261));
  return ((ue = null), (de = 0), se);
}
function Dp() {
  for (; ie !== null; ) Jc(ie);
}
function Mp() {
  for (; ie !== null && !of(); ) Jc(ie);
}
function Jc(e) {
  var t = ed(e.alternate, e, Re);
  ((e.memoizedProps = e.pendingProps),
    t === null ? Zc(e) : (ie = t),
    (as.current = null));
}
function Zc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Lp(n, t)), n !== null)) {
        ((n.flags &= 32767), (ie = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((se = 6), (ie = null));
        return;
      }
    } else if (((n = jp(n, t, Re)), n !== null)) {
      ie = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ie = t;
      return;
    }
    ie = t = e;
  } while (t !== null);
  se === 0 && (se = 5);
}
function zt(e, t, n) {
  var r = W,
    o = be.transition;
  try {
    ((be.transition = null), (W = 1), $p(e, t, n, r));
  } finally {
    ((be.transition = o), (W = r));
  }
  return null;
}
function $p(e, t, n, r) {
  do xn();
  while (St !== null);
  if (V & 6) throw Error(N(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var i = n.lanes | n.childLanes;
  if (
    (gf(e, i),
    e === ue && ((ie = ue = null), (de = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Br ||
      ((Br = !0),
      td(ao, function () {
        return (xn(), null);
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ((i = be.transition), (be.transition = null));
    var l = W;
    W = 1;
    var s = V;
    ((V |= 4),
      (as.current = null),
      Rp(e, n),
      Kc(n, e),
      tp(Ji),
      (co = !!Xi),
      (Ji = Xi = null),
      (e.current = n),
      Pp(n),
      lf(),
      (V = s),
      (W = l),
      (be.transition = i));
  } else e.current = n;
  if (
    (Br && ((Br = !1), (St = e), (Lo = o)),
    (i = e.pendingLanes),
    i === 0 && (Lt = null),
    uf(n.stateNode),
    Le(e, oe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest }));
  if (jo) throw ((jo = !1), (e = yl), (yl = null), e);
  return (
    Lo & 1 && e.tag !== 0 && xn(),
    (i = e.pendingLanes),
    i & 1 ? (e === vl ? qn++ : ((qn = 0), (vl = e))) : (qn = 0),
    Mt(),
    null
  );
}
function xn() {
  if (St !== null) {
    var e = Tu(Lo),
      t = be.transition,
      n = W;
    try {
      if (((be.transition = null), (W = 16 > e ? 16 : e), St === null))
        var r = !1;
      else {
        if (((e = St), (St = null), (Lo = 0), V & 6)) throw Error(N(331));
        var o = V;
        for (V |= 4, _ = e.current; _ !== null; ) {
          var i = _,
            l = i.child;
          if (_.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (_ = u; _ !== null; ) {
                  var p = _;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Jn(8, p, i);
                  }
                  var f = p.child;
                  if (f !== null) ((f.return = p), (_ = f));
                  else
                    for (; _ !== null; ) {
                      p = _;
                      var g = p.sibling,
                        v = p.return;
                      if ((Vc(p), p === u)) {
                        _ = null;
                        break;
                      }
                      if (g !== null) {
                        ((g.return = v), (_ = g));
                        break;
                      }
                      _ = v;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var P = w.sibling;
                    ((w.sibling = null), (w = P));
                  } while (w !== null);
                }
              }
              _ = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) ((l.return = i), (_ = l));
          else
            e: for (; _ !== null; ) {
              if (((i = _), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Jn(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                ((m.return = i.return), (_ = m));
                break e;
              }
              _ = i.return;
            }
        }
        var d = e.current;
        for (_ = d; _ !== null; ) {
          l = _;
          var h = l.child;
          if (l.subtreeFlags & 2064 && h !== null) ((h.return = l), (_ = h));
          else
            e: for (l = d; _ !== null; ) {
              if (((s = _), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ho(9, s);
                  }
                } catch (k) {
                  re(s, s.return, k);
                }
              if (s === l) {
                _ = null;
                break e;
              }
              var x = s.sibling;
              if (x !== null) {
                ((x.return = s.return), (_ = x));
                break e;
              }
              _ = s.return;
            }
        }
        if (
          ((V = o), Mt(), tt && typeof tt.onPostCommitFiberRoot == "function")
        )
          try {
            tt.onPostCommitFiberRoot(Fo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((W = n), (be.transition = t));
    }
  }
  return !1;
}
function La(e, t, n) {
  ((t = En(n, t)),
    (t = Tc(e, t, 1)),
    (e = jt(e, t, 1)),
    (t = ve()),
    e !== null && (Sr(e, 1, t), Le(e, t)));
}
function re(e, t, n) {
  if (e.tag === 3) La(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        La(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Lt === null || !Lt.has(r)))
        ) {
          ((e = En(n, e)),
            (e = Dc(t, e, 1)),
            (t = jt(t, e, 1)),
            (e = ve()),
            t !== null && (Sr(t, 1, e), Le(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function Fp(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = ve()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ue === e &&
      (de & n) === n &&
      (se === 4 || (se === 3 && (de & 130023424) === de && 500 > oe() - cs)
        ? Bt(e, 0)
        : (us |= n)),
    Le(e, t));
}
function qc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = _r), (_r <<= 1), !(_r & 130023424) && (_r = 4194304))
      : (t = 1));
  var n = ve();
  ((e = dt(e, t)), e !== null && (Sr(e, t, n), Le(e, n)));
}
function zp(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), qc(e, n));
}
function Ip(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  (r !== null && r.delete(t), qc(e, n));
}
var ed;
ed = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ee.current) Ne = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((Ne = !1), Ep(e, t, n));
      Ne = !!(e.flags & 131072);
    }
  else ((Ne = !1), J && t.flags & 1048576 && oc(t, vo, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (eo(e, t), (e = t.pendingProps));
      var o = Sn(t, me.current);
      (vn(t, n), (o = rs(null, t, r, e, o, n)));
      var i = os();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            je(r) ? ((i = !0), mo(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Zl(t),
            (o.updater = Vo),
            (t.stateNode = o),
            (o._reactInternals = t),
            ll(t, r, e, n),
            (t = ul(null, t, r, !0, i, n)))
          : ((t.tag = 0), J && i && Wl(t), ye(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (eo(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = bp(r)),
          (e = He(r, e)),
          o)
        ) {
          case 0:
            t = al(null, t, r, e, n);
            break e;
          case 1:
            t = ya(null, t, r, e, n);
            break e;
          case 11:
            t = ga(null, t, r, e, n);
            break e;
          case 14:
            t = ma(null, t, r, He(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : He(r, o)),
        al(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : He(r, o)),
        ya(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((zc(t), e === null)) throw Error(N(387));
        ((r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          cc(e, t),
          So(t, r, null, n));
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ((o = En(Error(N(423)), t)), (t = va(e, t, r, n, o)));
            break e;
          } else if (r !== o) {
            ((o = En(Error(N(424)), t)), (t = va(e, t, r, n, o)));
            break e;
          } else
            for (
              Pe = Et(t.stateNode.containerInfo.firstChild),
                _e = t,
                J = !0,
                Ke = null,
                n = ac(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((kn(), r === o)) {
            t = ft(e, t, n);
            break e;
          }
          ye(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        dc(t),
        e === null && rl(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        Zi(r, o) ? (l = null) : i !== null && Zi(r, i) && (t.flags |= 32),
        Fc(e, t),
        ye(e, t, l, n),
        t.child
      );
    case 6:
      return (e === null && rl(t), null);
    case 13:
      return Ic(e, t, n);
    case 4:
      return (
        ql(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Cn(t, null, r, n)) : ye(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : He(r, o)),
        ga(e, t, r, o, n)
      );
    case 7:
      return (ye(e, t, t.pendingProps, n), t.child);
    case 8:
      return (ye(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (ye(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          Q(xo, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (Ye(i.value, l)) {
            if (i.children === o.children && !Ee.current) {
              t = ft(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                l = i.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      ((a = at(-1, n & -n)), (a.tag = 2));
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var p = u.pending;
                        (p === null
                          ? (a.next = a)
                          : ((a.next = p.next), (p.next = a)),
                          (u.pending = a));
                      }
                    }
                    ((i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      ol(i.return, n, t),
                      (s.lanes |= n));
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(N(341));
                ((l.lanes |= n),
                  (s = l.alternate),
                  s !== null && (s.lanes |= n),
                  ol(l, n, t),
                  (l = i.sibling));
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    ((i.return = l.return), (l = i));
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        (ye(e, t, o.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        vn(t, n),
        (o = Be(o)),
        (r = r(o)),
        (t.flags |= 1),
        ye(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = He(r, t.pendingProps)),
        (o = He(r.type, o)),
        ma(e, t, r, o, n)
      );
    case 15:
      return Mc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : He(r, o)),
        eo(e, t),
        (t.tag = 1),
        je(r) ? ((e = !0), mo(t)) : (e = !1),
        vn(t, n),
        _c(t, r, o),
        ll(t, r, o, n),
        ul(null, t, r, !0, e, n)
      );
    case 19:
      return Ac(e, t, n);
    case 22:
      return $c(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function td(e, t) {
  return Ou(e, t);
}
function Ap(e, t, n, r) {
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
function Ae(e, t, n, r) {
  return new Ap(e, t, n, r);
}
function hs(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function bp(e) {
  if (typeof e == "function") return hs(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Dl)) return 11;
    if (e === Ml) return 14;
  }
  return 2;
}
function Rt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ae(e.tag, t, e.key, e.mode)),
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
function ro(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == "function")) hs(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case nn:
        return Ut(n.children, o, i, t);
      case Tl:
        ((l = 8), (o |= 8));
        break;
      case Pi:
        return (
          (e = Ae(12, n, t, o | 2)),
          (e.elementType = Pi),
          (e.lanes = i),
          e
        );
      case _i:
        return ((e = Ae(13, n, t, o)), (e.elementType = _i), (e.lanes = i), e);
      case Ti:
        return ((e = Ae(19, n, t, o)), (e.elementType = Ti), (e.lanes = i), e);
      case du:
        return Ko(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case uu:
              l = 10;
              break e;
            case cu:
              l = 9;
              break e;
            case Dl:
              l = 11;
              break e;
            case Ml:
              l = 14;
              break e;
            case mt:
              ((l = 16), (r = null));
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ae(l, n, t, o)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = i),
    t
  );
}
function Ut(e, t, n, r) {
  return ((e = Ae(7, e, r, t)), (e.lanes = n), e);
}
function Ko(e, t, n, r) {
  return (
    (e = Ae(22, e, r, t)),
    (e.elementType = du),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ni(e, t, n) {
  return ((e = Ae(6, e, null, t)), (e.lanes = n), e);
}
function Ei(e, t, n) {
  return (
    (t = Ae(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Bp(e, t, n, r, o) {
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
    (this.eventTimes = ii(0)),
    (this.expirationTimes = ii(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ii(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null));
}
function gs(e, t, n, r, o, i, l, s, a) {
  return (
    (e = new Bp(e, t, n, s, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ae(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Zl(i),
    e
  );
}
function Up(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: tn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function nd(e) {
  if (!e) return _t;
  e = e._reactInternals;
  e: {
    if (Jt(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (je(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (je(n)) return nc(e, n, t);
  }
  return t;
}
function rd(e, t, n, r, o, i, l, s, a) {
  return (
    (e = gs(n, r, !0, e, o, i, l, s, a)),
    (e.context = nd(null)),
    (n = e.current),
    (r = ve()),
    (o = Ot(n)),
    (i = at(r, o)),
    (i.callback = t ?? null),
    jt(n, i, o),
    (e.current.lanes = o),
    Sr(e, o, r),
    Le(e, r),
    e
  );
}
function Qo(e, t, n, r) {
  var o = t.current,
    i = ve(),
    l = Ot(o);
  return (
    (n = nd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = at(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = jt(o, t, l)),
    e !== null && (Ge(e, o, l, i), Jr(e, o, l)),
    l
  );
}
function Ro(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Oa(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ms(e, t) {
  (Oa(e, t), (e = e.alternate) && Oa(e, t));
}
function Vp() {
  return null;
}
var od =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ys(e) {
  this._internalRoot = e;
}
Go.prototype.render = ys.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  Qo(e, t, null, null);
};
Go.prototype.unmount = ys.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (Gt(function () {
      Qo(null, e, null, null);
    }),
      (t[ct] = null));
  }
};
function Go(e) {
  this._internalRoot = e;
}
Go.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = $u();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < vt.length && t !== 0 && t < vt[n].priority; n++);
    (vt.splice(n, 0, e), n === 0 && zu(e));
  }
};
function vs(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Yo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ra() {}
function Hp(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Ro(l);
        i.call(u);
      };
    }
    var l = rd(t, r, e, 0, null, !1, !1, "", Ra);
    return (
      (e._reactRootContainer = l),
      (e[ct] = l.current),
      cr(e.nodeType === 8 ? e.parentNode : e),
      Gt(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = Ro(a);
      s.call(u);
    };
  }
  var a = gs(e, 0, !1, null, null, !1, !1, "", Ra);
  return (
    (e._reactRootContainer = a),
    (e[ct] = a.current),
    cr(e.nodeType === 8 ? e.parentNode : e),
    Gt(function () {
      Qo(t, a, n, r);
    }),
    a
  );
}
function Xo(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var a = Ro(l);
        s.call(a);
      };
    }
    Qo(t, l, e, o);
  } else l = Hp(n, t, e, o, r);
  return Ro(l);
}
Du = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Vn(t.pendingLanes);
        n !== 0 &&
          (zl(t, n | 1), Le(t, oe()), !(V & 6) && ((jn = oe() + 500), Mt()));
      }
      break;
    case 13:
      (Gt(function () {
        var r = dt(e, 1);
        if (r !== null) {
          var o = ve();
          Ge(r, e, 1, o);
        }
      }),
        ms(e, 1));
  }
};
Il = function (e) {
  if (e.tag === 13) {
    var t = dt(e, 134217728);
    if (t !== null) {
      var n = ve();
      Ge(t, e, 134217728, n);
    }
    ms(e, 134217728);
  }
};
Mu = function (e) {
  if (e.tag === 13) {
    var t = Ot(e),
      n = dt(e, t);
    if (n !== null) {
      var r = ve();
      Ge(n, e, t, r);
    }
    ms(e, t);
  }
};
$u = function () {
  return W;
};
Fu = function (e, t) {
  var n = W;
  try {
    return ((W = e), t());
  } finally {
    W = n;
  }
};
Ui = function (e, t, n) {
  switch (t) {
    case "input":
      if (($i(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = bo(r);
            if (!o) throw Error(N(90));
            (pu(r), $i(r, o));
          }
        }
      }
      break;
    case "textarea":
      gu(e, n);
      break;
    case "select":
      ((t = n.value), t != null && hn(e, !!n.multiple, t, !1));
  }
};
ku = ds;
Cu = Gt;
var Wp = { usingClientEntryPoint: !1, Events: [Cr, sn, bo, wu, Su, ds] },
  An = {
    findFiberByHostInstance: It,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Kp = {
    bundleType: An.bundleType,
    version: An.version,
    rendererPackageName: An.rendererPackageName,
    rendererConfig: An.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: pt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = ju(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: An.findFiberByHostInstance || Vp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ur = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ur.isDisabled && Ur.supportsFiber)
    try {
      ((Fo = Ur.inject(Kp)), (tt = Ur));
    } catch {}
}
De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wp;
De.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!vs(t)) throw Error(N(200));
  return Up(e, t, null, n);
};
De.createRoot = function (e, t) {
  if (!vs(e)) throw Error(N(299));
  var n = !1,
    r = "",
    o = od;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = gs(e, 1, !1, null, null, n, !1, r, o)),
    (e[ct] = t.current),
    cr(e.nodeType === 8 ? e.parentNode : e),
    new ys(t)
  );
};
De.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return ((e = ju(t)), (e = e === null ? null : e.stateNode), e);
};
De.flushSync = function (e) {
  return Gt(e);
};
De.hydrate = function (e, t, n) {
  if (!Yo(t)) throw Error(N(200));
  return Xo(null, e, t, !0, n);
};
De.hydrateRoot = function (e, t, n) {
  if (!vs(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    l = od;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = rd(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[ct] = t.current),
    cr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o));
  return new Go(t);
};
De.render = function (e, t, n) {
  if (!Yo(t)) throw Error(N(200));
  return Xo(null, e, t, !1, n);
};
De.unmountComponentAtNode = function (e) {
  if (!Yo(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (Gt(function () {
        Xo(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[ct] = null));
        });
      }),
      !0)
    : !1;
};
De.unstable_batchedUpdates = ds;
De.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Yo(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return Xo(e, t, n, !1, r);
};
De.version = "18.3.1-next-f1338f8080-20240426";
function id() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(id);
    } catch (e) {
      console.error(e);
    }
}
(id(), (iu.exports = De));
var Qp = iu.exports,
  ld,
  Pa = Qp;
((ld = Pa.createRoot), Pa.hydrateRoot);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Gp = {
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
 */ const Yp = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  Oe = (e, t) => {
    const n = C.forwardRef(
      (
        {
          color: r = "currentColor",
          size: o = 24,
          strokeWidth: i = 2,
          absoluteStrokeWidth: l,
          className: s = "",
          children: a,
          ...u
        },
        p,
      ) =>
        C.createElement(
          "svg",
          {
            ref: p,
            ...Gp,
            width: o,
            height: o,
            stroke: r,
            strokeWidth: l ? (Number(i) * 24) / Number(o) : i,
            className: ["lucide", `lucide-${Yp(e)}`, s].join(" "),
            ...u,
          },
          [
            ...t.map(([f, g]) => C.createElement(f, g)),
            ...(Array.isArray(a) ? a : [a]),
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
 */ const Vr = Oe("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hr = Oe("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Po = Oe("Camera", [
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
 */ const Xp = Oe("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jp = Oe("Focus", [
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zp = Oe("Globe", [
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
 */ const qp = Oe("Layers", [
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
 */ const eh = Oe("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const th = Oe("Package", [
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
 */ const nh = Oe("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _a = Oe("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rh = Oe("Trash2", [
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
 */ const oh = Oe("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xs = Oe("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  M = (e) => typeof e == "string",
  bn = () => {
    let e, t;
    const n = new Promise((r, o) => {
      ((e = r), (t = o));
    });
    return ((n.resolve = e), (n.reject = t), n);
  },
  Ta = (e) => (e == null ? "" : "" + e),
  ih = (e, t, n) => {
    e.forEach((r) => {
      t[r] && (n[r] = t[r]);
    });
  },
  lh = /###/g,
  Da = (e) => (e && e.indexOf("###") > -1 ? e.replace(lh, ".") : e),
  Ma = (e) => !e || M(e),
  er = (e, t, n) => {
    const r = M(t) ? t.split(".") : t;
    let o = 0;
    for (; o < r.length - 1; ) {
      if (Ma(e)) return {};
      const i = Da(r[o]);
      (!e[i] && n && (e[i] = new n()),
        Object.prototype.hasOwnProperty.call(e, i) ? (e = e[i]) : (e = {}),
        ++o);
    }
    return Ma(e) ? {} : { obj: e, k: Da(r[o]) };
  },
  $a = (e, t, n) => {
    const { obj: r, k: o } = er(e, t, Object);
    if (r !== void 0 || t.length === 1) {
      r[o] = n;
      return;
    }
    let i = t[t.length - 1],
      l = t.slice(0, t.length - 1),
      s = er(e, l, Object);
    for (; s.obj === void 0 && l.length; )
      ((i = `${l[l.length - 1]}.${i}`),
        (l = l.slice(0, l.length - 1)),
        (s = er(e, l, Object)),
        s != null &&
          s.obj &&
          typeof s.obj[`${s.k}.${i}`] < "u" &&
          (s.obj = void 0));
    s.obj[`${s.k}.${i}`] = n;
  },
  sh = (e, t, n, r) => {
    const { obj: o, k: i } = er(e, t, Object);
    ((o[i] = o[i] || []), o[i].push(n));
  },
  _o = (e, t) => {
    const { obj: n, k: r } = er(e, t);
    if (n && Object.prototype.hasOwnProperty.call(n, r)) return n[r];
  },
  ah = (e, t, n) => {
    const r = _o(e, n);
    return r !== void 0 ? r : _o(t, n);
  },
  sd = (e, t, n) => {
    for (const r in t)
      r !== "__proto__" &&
        r !== "constructor" &&
        (r in e
          ? M(e[r]) ||
            e[r] instanceof String ||
            M(t[r]) ||
            t[r] instanceof String
            ? n && (e[r] = t[r])
            : sd(e[r], t[r], n)
          : (e[r] = t[r]));
    return e;
  },
  en = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var uh = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
};
const ch = (e) => (M(e) ? e.replace(/[&<>"'\/]/g, (t) => uh[t]) : e);
class dh {
  constructor(t) {
    ((this.capacity = t),
      (this.regExpMap = new Map()),
      (this.regExpQueue = []));
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
const fh = [" ", ",", "?", "!", ";"],
  ph = new dh(20),
  hh = (e, t, n) => {
    ((t = t || ""), (n = n || ""));
    const r = fh.filter((l) => t.indexOf(l) < 0 && n.indexOf(l) < 0);
    if (r.length === 0) return !0;
    const o = ph.getRegExp(
      `(${r.map((l) => (l === "?" ? "\\?" : l)).join("|")})`,
    );
    let i = !o.test(e);
    if (!i) {
      const l = e.indexOf(n);
      l > 0 && !o.test(e.substring(0, l)) && (i = !0);
    }
    return i;
  },
  Sl = (e, t, n = ".") => {
    if (!e) return;
    if (e[t]) return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0;
    const r = t.split(n);
    let o = e;
    for (let i = 0; i < r.length; ) {
      if (!o || typeof o != "object") return;
      let l,
        s = "";
      for (let a = i; a < r.length; ++a)
        if ((a !== i && (s += n), (s += r[a]), (l = o[s]), l !== void 0)) {
          if (
            ["string", "number", "boolean"].indexOf(typeof l) > -1 &&
            a < r.length - 1
          )
            continue;
          i += a - i + 1;
          break;
        }
      o = l;
    }
    return o;
  },
  xr = (e) => (e == null ? void 0 : e.replace("_", "-")),
  gh = {
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
      var n, r;
      (r =
        (n = console == null ? void 0 : console[e]) == null
          ? void 0
          : n.apply) == null || r.call(n, console, t);
    },
  };
class To {
  constructor(t, n = {}) {
    this.init(t, n);
  }
  init(t, n = {}) {
    ((this.prefix = n.prefix || "i18next:"),
      (this.logger = t || gh),
      (this.options = n),
      (this.debug = n.debug));
  }
  log(...t) {
    return this.forward(t, "log", "", !0);
  }
  warn(...t) {
    return this.forward(t, "warn", "", !0);
  }
  error(...t) {
    return this.forward(t, "error", "");
  }
  deprecate(...t) {
    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(t, n, r, o) {
    return o && !this.debug
      ? null
      : (M(t[0]) && (t[0] = `${r}${this.prefix} ${t[0]}`), this.logger[n](t));
  }
  create(t) {
    return new To(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options,
    });
  }
  clone(t) {
    return (
      (t = t || this.options),
      (t.prefix = t.prefix || this.prefix),
      new To(this.logger, t)
    );
  }
}
var et = new To();
class Jo {
  constructor() {
    this.observers = {};
  }
  on(t, n) {
    return (
      t.split(" ").forEach((r) => {
        this.observers[r] || (this.observers[r] = new Map());
        const o = this.observers[r].get(n) || 0;
        this.observers[r].set(n, o + 1);
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
  emit(t, ...n) {
    (this.observers[t] &&
      Array.from(this.observers[t].entries()).forEach(([o, i]) => {
        for (let l = 0; l < i; l++) o(...n);
      }),
      this.observers["*"] &&
        Array.from(this.observers["*"].entries()).forEach(([o, i]) => {
          for (let l = 0; l < i; l++) o.apply(o, [t, ...n]);
        }));
  }
}
class Fa extends Jo {
  constructor(t, n = { ns: ["translation"], defaultNS: "translation" }) {
    (super(),
      (this.data = t || {}),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0));
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const n = this.options.ns.indexOf(t);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(t, n, r, o = {}) {
    var u, p;
    const i =
        o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator,
      l =
        o.ignoreJSONStructure !== void 0
          ? o.ignoreJSONStructure
          : this.options.ignoreJSONStructure;
    let s;
    t.indexOf(".") > -1
      ? (s = t.split("."))
      : ((s = [t, n]),
        r &&
          (Array.isArray(r)
            ? s.push(...r)
            : M(r) && i
              ? s.push(...r.split(i))
              : s.push(r)));
    const a = _o(this.data, s);
    return (
      !a &&
        !n &&
        !r &&
        t.indexOf(".") > -1 &&
        ((t = s[0]), (n = s[1]), (r = s.slice(2).join("."))),
      a || !l || !M(r)
        ? a
        : Sl(
            (p = (u = this.data) == null ? void 0 : u[t]) == null
              ? void 0
              : p[n],
            r,
            i,
          )
    );
  }
  addResource(t, n, r, o, i = { silent: !1 }) {
    const l =
      i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let s = [t, n];
    (r && (s = s.concat(l ? r.split(l) : r)),
      t.indexOf(".") > -1 && ((s = t.split(".")), (o = n), (n = s[1])),
      this.addNamespaces(n),
      $a(this.data, s, o),
      i.silent || this.emit("added", t, n, r, o));
  }
  addResources(t, n, r, o = { silent: !1 }) {
    for (const i in r)
      (M(r[i]) || Array.isArray(r[i])) &&
        this.addResource(t, n, i, r[i], { silent: !0 });
    o.silent || this.emit("added", t, n, r);
  }
  addResourceBundle(t, n, r, o, i, l = { silent: !1, skipCopy: !1 }) {
    let s = [t, n];
    (t.indexOf(".") > -1 && ((s = t.split(".")), (o = r), (r = n), (n = s[1])),
      this.addNamespaces(n));
    let a = _o(this.data, s) || {};
    (l.skipCopy || (r = JSON.parse(JSON.stringify(r))),
      o ? sd(a, r, i) : (a = { ...a, ...r }),
      $a(this.data, s, a),
      l.silent || this.emit("added", t, n, r));
  }
  removeResourceBundle(t, n) {
    (this.hasResourceBundle(t, n) && delete this.data[t][n],
      this.removeNamespaces(n),
      this.emit("removed", t, n));
  }
  hasResourceBundle(t, n) {
    return this.getResource(t, n) !== void 0;
  }
  getResourceBundle(t, n) {
    return (n || (n = this.options.defaultNS), this.getResource(t, n));
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const n = this.getDataByLanguage(t);
    return !!((n && Object.keys(n)) || []).find(
      (o) => n[o] && Object.keys(n[o]).length > 0,
    );
  }
  toJSON() {
    return this.data;
  }
}
var ad = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, n, r, o) {
    return (
      e.forEach((i) => {
        var l;
        t =
          ((l = this.processors[i]) == null ? void 0 : l.process(t, n, r, o)) ??
          t;
      }),
      t
    );
  },
};
const ud = Symbol("i18next/PATH_KEY");
function mh() {
  const e = [],
    t = Object.create(null);
  let n;
  return (
    (t.get = (r, o) => {
      var i;
      return (
        (i = n == null ? void 0 : n.revoke) == null || i.call(n),
        o === ud ? e : (e.push(o), (n = Proxy.revocable(r, t)), n.proxy)
      );
    }),
    Proxy.revocable(Object.create(null), t).proxy
  );
}
function kl(e, t) {
  const { [ud]: n } = e(mh());
  return n.join((t == null ? void 0 : t.keySeparator) ?? ".");
}
const za = {},
  ji = (e) => !M(e) && typeof e != "boolean" && typeof e != "number";
class Do extends Jo {
  constructor(t, n = {}) {
    (super(),
      ih(
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
        this,
      ),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      (this.logger = et.create("translator")));
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t, n = { interpolation: {} }) {
    const r = { ...n };
    if (t == null) return !1;
    const o = this.resolve(t, r);
    if ((o == null ? void 0 : o.res) === void 0) return !1;
    const i = ji(o.res);
    return !(r.returnObjects === !1 && i);
  }
  extractFromKey(t, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const o =
      n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let i = n.ns || this.options.defaultNS || [];
    const l = r && t.indexOf(r) > -1,
      s =
        !this.options.userDefinedKeySeparator &&
        !n.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !n.nsSeparator &&
        !hh(t, r, o);
    if (l && !s) {
      const a = t.match(this.interpolator.nestingRegexp);
      if (a && a.length > 0) return { key: t, namespaces: M(i) ? [i] : i };
      const u = t.split(r);
      ((r !== o || (r === o && this.options.ns.indexOf(u[0]) > -1)) &&
        (i = u.shift()),
        (t = u.join(o)));
    }
    return { key: t, namespaces: M(i) ? [i] : i };
  }
  translate(t, n, r) {
    let o = typeof n == "object" ? { ...n } : n;
    if (
      (typeof o != "object" &&
        this.options.overloadTranslationOptionHandler &&
        (o = this.options.overloadTranslationOptionHandler(arguments)),
      typeof o == "object" && (o = { ...o }),
      o || (o = {}),
      t == null)
    )
      return "";
    (typeof t == "function" && (t = kl(t, { ...this.options, ...o })),
      Array.isArray(t) || (t = [String(t)]));
    const i =
        o.returnDetails !== void 0
          ? o.returnDetails
          : this.options.returnDetails,
      l =
        o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator,
      { key: s, namespaces: a } = this.extractFromKey(t[t.length - 1], o),
      u = a[a.length - 1];
    let p = o.nsSeparator !== void 0 ? o.nsSeparator : this.options.nsSeparator;
    p === void 0 && (p = ":");
    const f = o.lng || this.language,
      g = o.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((f == null ? void 0 : f.toLowerCase()) === "cimode")
      return g
        ? i
          ? {
              res: `${u}${p}${s}`,
              usedKey: s,
              exactUsedKey: s,
              usedLng: f,
              usedNS: u,
              usedParams: this.getUsedParamsDetails(o),
            }
          : `${u}${p}${s}`
        : i
          ? {
              res: s,
              usedKey: s,
              exactUsedKey: s,
              usedLng: f,
              usedNS: u,
              usedParams: this.getUsedParamsDetails(o),
            }
          : s;
    const v = this.resolve(t, o);
    let y = v == null ? void 0 : v.res;
    const w = (v == null ? void 0 : v.usedKey) || s,
      P = (v == null ? void 0 : v.exactUsedKey) || s,
      m = ["[object Number]", "[object Function]", "[object RegExp]"],
      d = o.joinArrays !== void 0 ? o.joinArrays : this.options.joinArrays,
      h = !this.i18nFormat || this.i18nFormat.handleAsObject,
      x = o.count !== void 0 && !M(o.count),
      k = Do.hasDefaultValue(o),
      E = x ? this.pluralResolver.getSuffix(f, o.count, o) : "",
      L =
        o.ordinal && x
          ? this.pluralResolver.getSuffix(f, o.count, { ordinal: !1 })
          : "",
      j = x && !o.ordinal && o.count === 0,
      D =
        (j && o[`defaultValue${this.options.pluralSeparator}zero`]) ||
        o[`defaultValue${E}`] ||
        o[`defaultValue${L}`] ||
        o.defaultValue;
    let T = y;
    h && !y && k && (T = D);
    const Z = ji(T),
      I = Object.prototype.toString.apply(T);
    if (h && T && Z && m.indexOf(I) < 0 && !(M(d) && Array.isArray(T))) {
      if (!o.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            "accessing an object - but returnObjects options is not enabled!",
          );
        const $ = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(w, T, { ...o, ns: a })
          : `key '${s} (${this.language})' returned an object instead of string.`;
        return i
          ? ((v.res = $), (v.usedParams = this.getUsedParamsDetails(o)), v)
          : $;
      }
      if (l) {
        const $ = Array.isArray(T),
          z = $ ? [] : {},
          H = $ ? P : w;
        for (const q in T)
          if (Object.prototype.hasOwnProperty.call(T, q)) {
            const O = `${H}${l}${q}`;
            (k && !y
              ? (z[q] = this.translate(O, {
                  ...o,
                  defaultValue: ji(D) ? D[q] : void 0,
                  joinArrays: !1,
                  ns: a,
                }))
              : (z[q] = this.translate(O, { ...o, joinArrays: !1, ns: a })),
              z[q] === O && (z[q] = T[q]));
          }
        y = z;
      }
    } else if (h && M(d) && Array.isArray(y))
      ((y = y.join(d)), y && (y = this.extendTranslation(y, t, o, r)));
    else {
      let $ = !1,
        z = !1;
      (!this.isValidLookup(y) && k && (($ = !0), (y = D)),
        this.isValidLookup(y) || ((z = !0), (y = s)));
      const q =
          (o.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          z
            ? void 0
            : y,
        O = k && D !== y && this.options.updateMissing;
      if (z || $ || O) {
        if (
          (this.logger.log(O ? "updateKey" : "missingKey", f, u, s, O ? D : y),
          l)
        ) {
          const A = this.resolve(s, { ...o, keySeparator: !1 });
          A &&
            A.res &&
            this.logger.warn(
              "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.",
            );
        }
        let S = [];
        const R = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          o.lng || this.language,
        );
        if (this.options.saveMissingTo === "fallback" && R && R[0])
          for (let A = 0; A < R.length; A++) S.push(R[A]);
        else
          this.options.saveMissingTo === "all"
            ? (S = this.languageUtils.toResolveHierarchy(
                o.lng || this.language,
              ))
            : S.push(o.lng || this.language);
        const F = (A, K, $e) => {
          var ht;
          const Fe = k && $e !== y ? $e : q;
          (this.options.missingKeyHandler
            ? this.options.missingKeyHandler(A, u, K, Fe, O, o)
            : (ht = this.backendConnector) != null &&
              ht.saveMissing &&
              this.backendConnector.saveMissing(A, u, K, Fe, O, o),
            this.emit("missingKey", A, u, K, y));
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && x
            ? S.forEach((A) => {
                const K = this.pluralResolver.getSuffixes(A, o);
                (j &&
                  o[`defaultValue${this.options.pluralSeparator}zero`] &&
                  K.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  K.push(`${this.options.pluralSeparator}zero`),
                  K.forEach(($e) => {
                    F([A], s + $e, o[`defaultValue${$e}`] || D);
                  }));
              })
            : F(S, s, D));
      }
      ((y = this.extendTranslation(y, t, o, v, r)),
        z &&
          y === s &&
          this.options.appendNamespaceToMissingKey &&
          (y = `${u}${p}${s}`),
        (z || $) &&
          this.options.parseMissingKeyHandler &&
          (y = this.options.parseMissingKeyHandler(
            this.options.appendNamespaceToMissingKey ? `${u}${p}${s}` : s,
            $ ? y : void 0,
            o,
          )));
    }
    return i
      ? ((v.res = y), (v.usedParams = this.getUsedParamsDetails(o)), v)
      : y;
  }
  extendTranslation(t, n, r, o, i) {
    var a, u;
    if ((a = this.i18nFormat) != null && a.parse)
      t = this.i18nFormat.parse(
        t,
        { ...this.options.interpolation.defaultVariables, ...r },
        r.lng || this.language || o.usedLng,
        o.usedNS,
        o.usedKey,
        { resolved: o },
      );
    else if (!r.skipInterpolation) {
      r.interpolation &&
        this.interpolator.init({
          ...r,
          interpolation: { ...this.options.interpolation, ...r.interpolation },
        });
      const p =
        M(t) &&
        (((u = r == null ? void 0 : r.interpolation) == null
          ? void 0
          : u.skipOnVariables) !== void 0
          ? r.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let f;
      if (p) {
        const v = t.match(this.interpolator.nestingRegexp);
        f = v && v.length;
      }
      let g = r.replace && !M(r.replace) ? r.replace : r;
      if (
        (this.options.interpolation.defaultVariables &&
          (g = { ...this.options.interpolation.defaultVariables, ...g }),
        (t = this.interpolator.interpolate(
          t,
          g,
          r.lng || this.language || o.usedLng,
          r,
        )),
        p)
      ) {
        const v = t.match(this.interpolator.nestingRegexp),
          y = v && v.length;
        f < y && (r.nest = !1);
      }
      (!r.lng && o && o.res && (r.lng = this.language || o.usedLng),
        r.nest !== !1 &&
          (t = this.interpolator.nest(
            t,
            (...v) =>
              (i == null ? void 0 : i[0]) === v[0] && !r.context
                ? (this.logger.warn(
                    `It seems you are nesting recursively key: ${v[0]} in key: ${n[0]}`,
                  ),
                  null)
                : this.translate(...v, n),
            r,
          )),
        r.interpolation && this.interpolator.reset());
    }
    const l = r.postProcess || this.options.postProcess,
      s = M(l) ? [l] : l;
    return (
      t != null &&
        s != null &&
        s.length &&
        r.applyPostProcessor !== !1 &&
        (t = ad.handle(
          s,
          t,
          n,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...o,
                  usedParams: this.getUsedParamsDetails(r),
                },
                ...r,
              }
            : r,
          this,
        )),
      t
    );
  }
  resolve(t, n = {}) {
    let r, o, i, l, s;
    return (
      M(t) && (t = [t]),
      t.forEach((a) => {
        if (this.isValidLookup(r)) return;
        const u = this.extractFromKey(a, n),
          p = u.key;
        o = p;
        let f = u.namespaces;
        this.options.fallbackNS && (f = f.concat(this.options.fallbackNS));
        const g = n.count !== void 0 && !M(n.count),
          v = g && !n.ordinal && n.count === 0,
          y =
            n.context !== void 0 &&
            (M(n.context) || typeof n.context == "number") &&
            n.context !== "",
          w = n.lngs
            ? n.lngs
            : this.languageUtils.toResolveHierarchy(
                n.lng || this.language,
                n.fallbackLng,
              );
        f.forEach((P) => {
          var m, d;
          this.isValidLookup(r) ||
            ((s = P),
            !za[`${w[0]}-${P}`] &&
              (m = this.utils) != null &&
              m.hasLoadedNamespace &&
              !((d = this.utils) != null && d.hasLoadedNamespace(s)) &&
              ((za[`${w[0]}-${P}`] = !0),
              this.logger.warn(
                `key "${o}" for languages "${w.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`,
                "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
              )),
            w.forEach((h) => {
              var E;
              if (this.isValidLookup(r)) return;
              l = h;
              const x = [p];
              if ((E = this.i18nFormat) != null && E.addLookupKeys)
                this.i18nFormat.addLookupKeys(x, p, h, P, n);
              else {
                let L;
                g && (L = this.pluralResolver.getSuffix(h, n.count, n));
                const j = `${this.options.pluralSeparator}zero`,
                  D = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (g &&
                    (n.ordinal &&
                      L.indexOf(D) === 0 &&
                      x.push(p + L.replace(D, this.options.pluralSeparator)),
                    x.push(p + L),
                    v && x.push(p + j)),
                  y)
                ) {
                  const T = `${p}${this.options.contextSeparator || "_"}${n.context}`;
                  (x.push(T),
                    g &&
                      (n.ordinal &&
                        L.indexOf(D) === 0 &&
                        x.push(T + L.replace(D, this.options.pluralSeparator)),
                      x.push(T + L),
                      v && x.push(T + j)));
                }
              }
              let k;
              for (; (k = x.pop()); )
                this.isValidLookup(r) ||
                  ((i = k), (r = this.getResource(h, P, k, n)));
            }));
        });
      }),
      { res: r, usedKey: o, exactUsedKey: i, usedLng: l, usedNS: s }
    );
  }
  isValidLookup(t) {
    return (
      t !== void 0 &&
      !(!this.options.returnNull && t === null) &&
      !(!this.options.returnEmptyString && t === "")
    );
  }
  getResource(t, n, r, o = {}) {
    var i;
    return (i = this.i18nFormat) != null && i.getResource
      ? this.i18nFormat.getResource(t, n, r, o)
      : this.resourceStore.getResource(t, n, r, o);
  }
  getUsedParamsDetails(t = {}) {
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
      r = t.replace && !M(t.replace);
    let o = r ? t.replace : t;
    if (
      (r && typeof t.count < "u" && (o.count = t.count),
      this.options.interpolation.defaultVariables &&
        (o = { ...this.options.interpolation.defaultVariables, ...o }),
      !r)
    ) {
      o = { ...o };
      for (const i of n) delete o[i];
    }
    return o;
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
class Ia {
  constructor(t) {
    ((this.options = t),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = et.create("languageUtils")));
  }
  getScriptPartFromCode(t) {
    if (((t = xr(t)), !t || t.indexOf("-") < 0)) return null;
    const n = t.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x")
      ? null
      : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (((t = xr(t)), !t || t.indexOf("-") < 0)) return t;
    const n = t.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (M(t) && t.indexOf("-") > -1) {
      let n;
      try {
        n = Intl.getCanonicalLocales(t)[0];
      } catch {}
      return (
        n && this.options.lowerCaseLng && (n = n.toLowerCase()),
        n || (this.options.lowerCaseLng ? t.toLowerCase() : t)
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
        const o = this.formatLanguageCode(r);
        (!this.options.supportedLngs || this.isSupportedCode(o)) && (n = o);
      }),
      !n &&
        this.options.supportedLngs &&
        t.forEach((r) => {
          if (n) return;
          const o = this.getScriptPartFromCode(r);
          if (this.isSupportedCode(o)) return (n = o);
          const i = this.getLanguagePartFromCode(r);
          if (this.isSupportedCode(i)) return (n = i);
          n = this.options.supportedLngs.find((l) => {
            if (l === i) return l;
            if (
              !(l.indexOf("-") < 0 && i.indexOf("-") < 0) &&
              ((l.indexOf("-") > 0 &&
                i.indexOf("-") < 0 &&
                l.substring(0, l.indexOf("-")) === i) ||
                (l.indexOf(i) === 0 && i.length > 1))
            )
              return l;
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
      M(t) && (t = [t]),
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
    const r = this.getFallbackCodes(
        (n === !1 ? [] : n) || this.options.fallbackLng || [],
        t,
      ),
      o = [],
      i = (l) => {
        l &&
          (this.isSupportedCode(l)
            ? o.push(l)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${l}`,
              ));
      };
    return (
      M(t) && (t.indexOf("-") > -1 || t.indexOf("_") > -1)
        ? (this.options.load !== "languageOnly" &&
            i(this.formatLanguageCode(t)),
          this.options.load !== "languageOnly" &&
            this.options.load !== "currentOnly" &&
            i(this.getScriptPartFromCode(t)),
          this.options.load !== "currentOnly" &&
            i(this.getLanguagePartFromCode(t)))
        : M(t) && i(this.formatLanguageCode(t)),
      r.forEach((l) => {
        o.indexOf(l) < 0 && i(this.formatLanguageCode(l));
      }),
      o
    );
  }
}
const Aa = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  ba = {
    select: (e) => (e === 1 ? "one" : "other"),
    resolvedOptions: () => ({ pluralCategories: ["one", "other"] }),
  };
class yh {
  constructor(t, n = {}) {
    ((this.languageUtils = t),
      (this.options = n),
      (this.logger = et.create("pluralResolver")),
      (this.pluralRulesCache = {}));
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(t, n = {}) {
    const r = xr(t === "dev" ? "en" : t),
      o = n.ordinal ? "ordinal" : "cardinal",
      i = JSON.stringify({ cleanedCode: r, type: o });
    if (i in this.pluralRulesCache) return this.pluralRulesCache[i];
    let l;
    try {
      l = new Intl.PluralRules(r, { type: o });
    } catch {
      if (!Intl)
        return (
          this.logger.error("No Intl support, please use an Intl polyfill!"),
          ba
        );
      if (!t.match(/-|_/)) return ba;
      const a = this.languageUtils.getLanguagePartFromCode(t);
      l = this.getRule(a, n);
    }
    return ((this.pluralRulesCache[i] = l), l);
  }
  needsPlural(t, n = {}) {
    let r = this.getRule(t, n);
    return (
      r || (r = this.getRule("dev", n)),
      (r == null ? void 0 : r.resolvedOptions().pluralCategories.length) > 1
    );
  }
  getPluralFormsOfKey(t, n, r = {}) {
    return this.getSuffixes(t, r).map((o) => `${n}${o}`);
  }
  getSuffixes(t, n = {}) {
    let r = this.getRule(t, n);
    return (
      r || (r = this.getRule("dev", n)),
      r
        ? r
            .resolvedOptions()
            .pluralCategories.sort((o, i) => Aa[o] - Aa[i])
            .map(
              (o) =>
                `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${o}`,
            )
        : []
    );
  }
  getSuffix(t, n, r = {}) {
    const o = this.getRule(t, r);
    return o
      ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${o.select(n)}`
      : (this.logger.warn(`no plural rule found for: ${t}`),
        this.getSuffix("dev", n, r));
  }
}
const Ba = (e, t, n, r = ".", o = !0) => {
    let i = ah(e, t, n);
    return (
      !i && o && M(n) && ((i = Sl(e, n, r)), i === void 0 && (i = Sl(t, n, r))),
      i
    );
  },
  Li = (e) => e.replace(/\$/g, "$$$$");
class Ua {
  constructor(t = {}) {
    var n;
    ((this.logger = et.create("interpolator")),
      (this.options = t),
      (this.format =
        ((n = t == null ? void 0 : t.interpolation) == null
          ? void 0
          : n.format) || ((r) => r)),
      this.init(t));
  }
  init(t = {}) {
    t.interpolation || (t.interpolation = { escapeValue: !0 });
    const {
      escape: n,
      escapeValue: r,
      useRawValueToEscape: o,
      prefix: i,
      prefixEscaped: l,
      suffix: s,
      suffixEscaped: a,
      formatSeparator: u,
      unescapeSuffix: p,
      unescapePrefix: f,
      nestingPrefix: g,
      nestingPrefixEscaped: v,
      nestingSuffix: y,
      nestingSuffixEscaped: w,
      nestingOptionsSeparator: P,
      maxReplaces: m,
      alwaysFormat: d,
    } = t.interpolation;
    ((this.escape = n !== void 0 ? n : ch),
      (this.escapeValue = r !== void 0 ? r : !0),
      (this.useRawValueToEscape = o !== void 0 ? o : !1),
      (this.prefix = i ? en(i) : l || "{{"),
      (this.suffix = s ? en(s) : a || "}}"),
      (this.formatSeparator = u || ","),
      (this.unescapePrefix = p ? "" : f || "-"),
      (this.unescapeSuffix = this.unescapePrefix ? "" : p || ""),
      (this.nestingPrefix = g ? en(g) : v || en("$t(")),
      (this.nestingSuffix = y ? en(y) : w || en(")")),
      (this.nestingOptionsSeparator = P || ","),
      (this.maxReplaces = m || 1e3),
      (this.alwaysFormat = d !== void 0 ? d : !1),
      this.resetRegExp());
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = (n, r) =>
      (n == null ? void 0 : n.source) === r
        ? ((n.lastIndex = 0), n)
        : new RegExp(r, "g");
    ((this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = t(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`,
      )),
      (this.nestingRegexp = t(
        this.nestingRegexp,
        `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`,
      )));
  }
  interpolate(t, n, r, o) {
    var v;
    let i, l, s;
    const a =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      u = (y) => {
        if (y.indexOf(this.formatSeparator) < 0) {
          const d = Ba(
            n,
            a,
            y,
            this.options.keySeparator,
            this.options.ignoreJSONStructure,
          );
          return this.alwaysFormat
            ? this.format(d, void 0, r, { ...o, ...n, interpolationkey: y })
            : d;
        }
        const w = y.split(this.formatSeparator),
          P = w.shift().trim(),
          m = w.join(this.formatSeparator).trim();
        return this.format(
          Ba(
            n,
            a,
            P,
            this.options.keySeparator,
            this.options.ignoreJSONStructure,
          ),
          m,
          r,
          { ...o, ...n, interpolationkey: P },
        );
      };
    this.resetRegExp();
    const p =
        (o == null ? void 0 : o.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      f =
        ((v = o == null ? void 0 : o.interpolation) == null
          ? void 0
          : v.skipOnVariables) !== void 0
          ? o.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (y) => Li(y) },
        {
          regex: this.regexp,
          safeValue: (y) => (this.escapeValue ? Li(this.escape(y)) : Li(y)),
        },
      ].forEach((y) => {
        for (s = 0; (i = y.regex.exec(t)); ) {
          const w = i[1].trim();
          if (((l = u(w)), l === void 0))
            if (typeof p == "function") {
              const m = p(t, i, o);
              l = M(m) ? m : "";
            } else if (o && Object.prototype.hasOwnProperty.call(o, w)) l = "";
            else if (f) {
              l = i[0];
              continue;
            } else
              (this.logger.warn(
                `missed to pass in variable ${w} for interpolating ${t}`,
              ),
                (l = ""));
          else !M(l) && !this.useRawValueToEscape && (l = Ta(l));
          const P = y.safeValue(l);
          if (
            ((t = t.replace(i[0], P)),
            f
              ? ((y.regex.lastIndex += l.length),
                (y.regex.lastIndex -= i[0].length))
              : (y.regex.lastIndex = 0),
            s++,
            s >= this.maxReplaces)
          )
            break;
        }
      }),
      t
    );
  }
  nest(t, n, r = {}) {
    let o, i, l;
    const s = (a, u) => {
      const p = this.nestingOptionsSeparator;
      if (a.indexOf(p) < 0) return a;
      const f = a.split(new RegExp(`${p}[ ]*{`));
      let g = `{${f[1]}`;
      ((a = f[0]), (g = this.interpolate(g, l)));
      const v = g.match(/'/g),
        y = g.match(/"/g);
      ((((v == null ? void 0 : v.length) ?? 0) % 2 === 0 && !y) ||
        y.length % 2 !== 0) &&
        (g = g.replace(/'/g, '"'));
      try {
        ((l = JSON.parse(g)), u && (l = { ...u, ...l }));
      } catch (w) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${a}`,
            w,
          ),
          `${a}${p}${g}`
        );
      }
      return (
        l.defaultValue &&
          l.defaultValue.indexOf(this.prefix) > -1 &&
          delete l.defaultValue,
        a
      );
    };
    for (; (o = this.nestingRegexp.exec(t)); ) {
      let a = [];
      ((l = { ...r }),
        (l = l.replace && !M(l.replace) ? l.replace : l),
        (l.applyPostProcessor = !1),
        delete l.defaultValue);
      const u = /{.*}/.test(o[1])
        ? o[1].lastIndexOf("}") + 1
        : o[1].indexOf(this.formatSeparator);
      if (
        (u !== -1 &&
          ((a = o[1]
            .slice(u)
            .split(this.formatSeparator)
            .map((p) => p.trim())
            .filter(Boolean)),
          (o[1] = o[1].slice(0, u))),
        (i = n(s.call(this, o[1].trim(), l), l)),
        i && o[0] === t && !M(i))
      )
        return i;
      (M(i) || (i = Ta(i)),
        i ||
          (this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`),
          (i = "")),
        a.length &&
          (i = a.reduce(
            (p, f) =>
              this.format(p, f, r.lng, { ...r, interpolationkey: o[1].trim() }),
            i.trim(),
          )),
        (t = t.replace(o[0], i)),
        (this.regexp.lastIndex = 0));
    }
    return t;
  }
}
const vh = (e) => {
    let t = e.toLowerCase().trim();
    const n = {};
    if (e.indexOf("(") > -1) {
      const r = e.split("(");
      t = r[0].toLowerCase().trim();
      const o = r[1].substring(0, r[1].length - 1);
      t === "currency" && o.indexOf(":") < 0
        ? n.currency || (n.currency = o.trim())
        : t === "relativetime" && o.indexOf(":") < 0
          ? n.range || (n.range = o.trim())
          : o.split(";").forEach((l) => {
              if (l) {
                const [s, ...a] = l.split(":"),
                  u = a
                    .join(":")
                    .trim()
                    .replace(/^'+|'+$/g, ""),
                  p = s.trim();
                (n[p] || (n[p] = u),
                  u === "false" && (n[p] = !1),
                  u === "true" && (n[p] = !0),
                  isNaN(u) || (n[p] = parseInt(u, 10)));
              }
            });
    }
    return { formatName: t, formatOptions: n };
  },
  Va = (e) => {
    const t = {};
    return (n, r, o) => {
      let i = o;
      o &&
        o.interpolationkey &&
        o.formatParams &&
        o.formatParams[o.interpolationkey] &&
        o[o.interpolationkey] &&
        (i = { ...i, [o.interpolationkey]: void 0 });
      const l = r + JSON.stringify(i);
      let s = t[l];
      return (s || ((s = e(xr(r), o)), (t[l] = s)), s(n));
    };
  },
  xh = (e) => (t, n, r) => e(xr(n), r)(t);
class wh {
  constructor(t = {}) {
    ((this.logger = et.create("formatter")), (this.options = t), this.init(t));
  }
  init(t, n = { interpolation: {} }) {
    this.formatSeparator = n.interpolation.formatSeparator || ",";
    const r = n.cacheInBuiltFormats ? Va : xh;
    this.formats = {
      number: r((o, i) => {
        const l = new Intl.NumberFormat(o, { ...i });
        return (s) => l.format(s);
      }),
      currency: r((o, i) => {
        const l = new Intl.NumberFormat(o, { ...i, style: "currency" });
        return (s) => l.format(s);
      }),
      datetime: r((o, i) => {
        const l = new Intl.DateTimeFormat(o, { ...i });
        return (s) => l.format(s);
      }),
      relativetime: r((o, i) => {
        const l = new Intl.RelativeTimeFormat(o, { ...i });
        return (s) => l.format(s, i.range || "day");
      }),
      list: r((o, i) => {
        const l = new Intl.ListFormat(o, { ...i });
        return (s) => l.format(s);
      }),
    };
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n;
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = Va(n);
  }
  format(t, n, r, o = {}) {
    const i = n.split(this.formatSeparator);
    if (
      i.length > 1 &&
      i[0].indexOf("(") > 1 &&
      i[0].indexOf(")") < 0 &&
      i.find((s) => s.indexOf(")") > -1)
    ) {
      const s = i.findIndex((a) => a.indexOf(")") > -1);
      i[0] = [i[0], ...i.splice(1, s)].join(this.formatSeparator);
    }
    return i.reduce((s, a) => {
      var f;
      const { formatName: u, formatOptions: p } = vh(a);
      if (this.formats[u]) {
        let g = s;
        try {
          const v =
              ((f = o == null ? void 0 : o.formatParams) == null
                ? void 0
                : f[o.interpolationkey]) || {},
            y = v.locale || v.lng || o.locale || o.lng || r;
          g = this.formats[u](s, y, { ...p, ...o, ...v });
        } catch (v) {
          this.logger.warn(v);
        }
        return g;
      } else this.logger.warn(`there was no format function for ${u}`);
      return s;
    }, t);
  }
}
const Sh = (e, t) => {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
};
class kh extends Jo {
  constructor(t, n, r, o = {}) {
    var i, l;
    (super(),
      (this.backend = t),
      (this.store = n),
      (this.services = r),
      (this.languageUtils = r.languageUtils),
      (this.options = o),
      (this.logger = et.create("backendConnector")),
      (this.waitingReads = []),
      (this.maxParallelReads = o.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5),
      (this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      (l = (i = this.backend) == null ? void 0 : i.init) == null ||
        l.call(i, r, o.backend, o));
  }
  queueLoad(t, n, r, o) {
    const i = {},
      l = {},
      s = {},
      a = {};
    return (
      t.forEach((u) => {
        let p = !0;
        (n.forEach((f) => {
          const g = `${u}|${f}`;
          !r.reload && this.store.hasResourceBundle(u, f)
            ? (this.state[g] = 2)
            : this.state[g] < 0 ||
              (this.state[g] === 1
                ? l[g] === void 0 && (l[g] = !0)
                : ((this.state[g] = 1),
                  (p = !1),
                  l[g] === void 0 && (l[g] = !0),
                  i[g] === void 0 && (i[g] = !0),
                  a[f] === void 0 && (a[f] = !0)));
        }),
          p || (s[u] = !0));
      }),
      (Object.keys(i).length || Object.keys(l).length) &&
        this.queue.push({
          pending: l,
          pendingCount: Object.keys(l).length,
          loaded: {},
          errors: [],
          callback: o,
        }),
      {
        toLoad: Object.keys(i),
        pending: Object.keys(l),
        toLoadLanguages: Object.keys(s),
        toLoadNamespaces: Object.keys(a),
      }
    );
  }
  loaded(t, n, r) {
    const o = t.split("|"),
      i = o[0],
      l = o[1];
    (n && this.emit("failedLoading", i, l, n),
      !n &&
        r &&
        this.store.addResourceBundle(i, l, r, void 0, void 0, { skipCopy: !0 }),
      (this.state[t] = n ? -1 : 2),
      n && r && (this.state[t] = 0));
    const s = {};
    (this.queue.forEach((a) => {
      (sh(a.loaded, [i], l),
        Sh(a, t),
        n && a.errors.push(n),
        a.pendingCount === 0 &&
          !a.done &&
          (Object.keys(a.loaded).forEach((u) => {
            s[u] || (s[u] = {});
            const p = a.loaded[u];
            p.length &&
              p.forEach((f) => {
                s[u][f] === void 0 && (s[u][f] = !0);
              });
          }),
          (a.done = !0),
          a.errors.length ? a.callback(a.errors) : a.callback()));
    }),
      this.emit("loaded", s),
      (this.queue = this.queue.filter((a) => !a.done)));
  }
  read(t, n, r, o = 0, i = this.retryTimeout, l) {
    if (!t.length) return l(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: n,
        fcName: r,
        tried: o,
        wait: i,
        callback: l,
      });
      return;
    }
    this.readingCalls++;
    const s = (u, p) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const f = this.waitingReads.shift();
          this.read(f.lng, f.ns, f.fcName, f.tried, f.wait, f.callback);
        }
        if (u && p && o < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, t, n, r, o + 1, i * 2, l);
          }, i);
          return;
        }
        l(u, p);
      },
      a = this.backend[r].bind(this.backend);
    if (a.length === 2) {
      try {
        const u = a(t, n);
        u && typeof u.then == "function"
          ? u.then((p) => s(null, p)).catch(s)
          : s(null, u);
      } catch (u) {
        s(u);
      }
      return;
    }
    return a(t, n, s);
  }
  prepareLoading(t, n, r = {}, o) {
    if (!this.backend)
      return (
        this.logger.warn(
          "No backend was added via i18next.use. Will not load resources.",
        ),
        o && o()
      );
    (M(t) && (t = this.languageUtils.toResolveHierarchy(t)), M(n) && (n = [n]));
    const i = this.queueLoad(t, n, r, o);
    if (!i.toLoad.length) return (i.pending.length || o(), null);
    i.toLoad.forEach((l) => {
      this.loadOne(l);
    });
  }
  load(t, n, r) {
    this.prepareLoading(t, n, {}, r);
  }
  reload(t, n, r) {
    this.prepareLoading(t, n, { reload: !0 }, r);
  }
  loadOne(t, n = "") {
    const r = t.split("|"),
      o = r[0],
      i = r[1];
    this.read(o, i, "read", void 0, void 0, (l, s) => {
      (l &&
        this.logger.warn(
          `${n}loading namespace ${i} for language ${o} failed`,
          l,
        ),
        !l &&
          s &&
          this.logger.log(`${n}loaded namespace ${i} for language ${o}`, s),
        this.loaded(t, l, s));
    });
  }
  saveMissing(t, n, r, o, i, l = {}, s = () => {}) {
    var a, u, p, f, g;
    if (
      (u = (a = this.services) == null ? void 0 : a.utils) != null &&
      u.hasLoadedNamespace &&
      !(
        (f = (p = this.services) == null ? void 0 : p.utils) != null &&
        f.hasLoadedNamespace(n)
      )
    ) {
      this.logger.warn(
        `did not save key "${r}" as the namespace "${n}" was not yet loaded`,
        "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
      );
      return;
    }
    if (!(r == null || r === "")) {
      if ((g = this.backend) != null && g.create) {
        const v = { ...l, isUpdate: i },
          y = this.backend.create.bind(this.backend);
        if (y.length < 6)
          try {
            let w;
            (y.length === 5 ? (w = y(t, n, r, o, v)) : (w = y(t, n, r, o)),
              w && typeof w.then == "function"
                ? w.then((P) => s(null, P)).catch(s)
                : s(null, w));
          } catch (w) {
            s(w);
          }
        else y(t, n, r, o, s, v);
      }
      !t || !t[0] || this.store.addResource(t[0], n, r, o);
    }
  }
}
const Ha = () => ({
    debug: !1,
    initAsync: !0,
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
        M(e[1]) && (t.defaultValue = e[1]),
        M(e[2]) && (t.tDescription = e[2]),
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
    cacheInBuiltFormats: !0,
  }),
  Wa = (e) => {
    var t, n;
    return (
      M(e.ns) && (e.ns = [e.ns]),
      M(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]),
      M(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]),
      ((n = (t = e.supportedLngs) == null ? void 0 : t.indexOf) == null
        ? void 0
        : n.call(t, "cimode")) < 0 &&
        (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
      typeof e.initImmediate == "boolean" && (e.initAsync = e.initImmediate),
      e
    );
  },
  Wr = () => {},
  Ch = (e) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
      typeof e[n] == "function" && (e[n] = e[n].bind(e));
    });
  };
class tr extends Jo {
  constructor(t = {}, n) {
    if (
      (super(),
      (this.options = Wa(t)),
      (this.services = {}),
      (this.logger = et),
      (this.modules = { external: [] }),
      Ch(this),
      n && !this.isInitialized && !t.isClone)
    ) {
      if (!this.options.initAsync) return (this.init(t, n), this);
      setTimeout(() => {
        this.init(t, n);
      }, 0);
    }
  }
  init(t = {}, n) {
    ((this.isInitializing = !0),
      typeof t == "function" && ((n = t), (t = {})),
      t.defaultNS == null &&
        t.ns &&
        (M(t.ns)
          ? (t.defaultNS = t.ns)
          : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0])));
    const r = Ha();
    ((this.options = { ...r, ...this.options, ...Wa(t) }),
      (this.options.interpolation = {
        ...r.interpolation,
        ...this.options.interpolation,
      }),
      t.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = t.keySeparator),
      t.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = t.nsSeparator),
      typeof this.options.overloadTranslationOptionHandler != "function" &&
        (this.options.overloadTranslationOptionHandler =
          r.overloadTranslationOptionHandler));
    const o = (u) => (u ? (typeof u == "function" ? new u() : u) : null);
    if (!this.options.isClone) {
      this.modules.logger
        ? et.init(o(this.modules.logger), this.options)
        : et.init(null, this.options);
      let u;
      this.modules.formatter ? (u = this.modules.formatter) : (u = wh);
      const p = new Ia(this.options);
      this.store = new Fa(this.options.resources, this.options);
      const f = this.services;
      ((f.logger = et),
        (f.resourceStore = this.store),
        (f.languageUtils = p),
        (f.pluralResolver = new yh(p, {
          prepend: this.options.pluralSeparator,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        this.options.interpolation.format &&
          this.options.interpolation.format !== r.interpolation.format &&
          this.logger.deprecate(
            "init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting",
          ),
        u &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === r.interpolation.format) &&
          ((f.formatter = o(u)),
          f.formatter.init && f.formatter.init(f, this.options),
          (this.options.interpolation.format = f.formatter.format.bind(
            f.formatter,
          ))),
        (f.interpolator = new Ua(this.options)),
        (f.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (f.backendConnector = new kh(
          o(this.modules.backend),
          f.resourceStore,
          f,
          this.options,
        )),
        f.backendConnector.on("*", (v, ...y) => {
          this.emit(v, ...y);
        }),
        this.modules.languageDetector &&
          ((f.languageDetector = o(this.modules.languageDetector)),
          f.languageDetector.init &&
            f.languageDetector.init(f, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((f.i18nFormat = o(this.modules.i18nFormat)),
          f.i18nFormat.init && f.i18nFormat.init(this)),
        (this.translator = new Do(this.services, this.options)),
        this.translator.on("*", (v, ...y) => {
          this.emit(v, ...y);
        }),
        this.modules.external.forEach((v) => {
          v.init && v.init(this);
        }));
    }
    if (
      ((this.format = this.options.interpolation.format),
      n || (n = Wr),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const u = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng,
      );
      u.length > 0 && u[0] !== "dev" && (this.options.lng = u[0]);
    }
    (!this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn(
        "init: no languageDetector is used and no lng is defined",
      ),
      [
        "getResource",
        "hasResourceBundle",
        "getResourceBundle",
        "getDataByLanguage",
      ].forEach((u) => {
        this[u] = (...p) => this.store[u](...p);
      }),
      [
        "addResource",
        "addResources",
        "addResourceBundle",
        "removeResourceBundle",
      ].forEach((u) => {
        this[u] = (...p) => (this.store[u](...p), this);
      }));
    const s = bn(),
      a = () => {
        const u = (p, f) => {
          ((this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                "init: i18next is already initialized. You should call init just once!",
              ),
            (this.isInitialized = !0),
            this.options.isClone ||
              this.logger.log("initialized", this.options),
            this.emit("initialized", this.options),
            s.resolve(f),
            n(p, f));
        };
        if (this.languages && !this.isInitialized)
          return u(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, u);
      };
    return (
      this.options.resources || !this.options.initAsync
        ? a()
        : setTimeout(a, 0),
      s
    );
  }
  loadResources(t, n = Wr) {
    var i, l;
    let r = n;
    const o = M(t) ? t : this.language;
    if (
      (typeof t == "function" && (r = t),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        (o == null ? void 0 : o.toLowerCase()) === "cimode" &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return r();
      const s = [],
        a = (u) => {
          if (!u || u === "cimode") return;
          this.services.languageUtils.toResolveHierarchy(u).forEach((f) => {
            f !== "cimode" && s.indexOf(f) < 0 && s.push(f);
          });
        };
      (o
        ? a(o)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((p) => a(p)),
        (l = (i = this.options.preload) == null ? void 0 : i.forEach) == null ||
          l.call(i, (u) => a(u)),
        this.services.backendConnector.load(s, this.options.ns, (u) => {
          (!u &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            r(u));
        }));
    } else r(null);
  }
  reloadResources(t, n, r) {
    const o = bn();
    return (
      typeof t == "function" && ((r = t), (t = void 0)),
      typeof n == "function" && ((r = n), (n = void 0)),
      t || (t = this.languages),
      n || (n = this.options.ns),
      r || (r = Wr),
      this.services.backendConnector.reload(t, n, (i) => {
        (o.resolve(), r(i));
      }),
      o
    );
  }
  use(t) {
    if (!t)
      throw new Error(
        "You are passing an undefined module! Please check the object you are passing to i18next.use()",
      );
    if (!t.type)
      throw new Error(
        "You are passing a wrong module! Please check the object you are passing to i18next.use()",
      );
    return (
      t.type === "backend" && (this.modules.backend = t),
      (t.type === "logger" || (t.log && t.warn && t.error)) &&
        (this.modules.logger = t),
      t.type === "languageDetector" && (this.modules.languageDetector = t),
      t.type === "i18nFormat" && (this.modules.i18nFormat = t),
      t.type === "postProcessor" && ad.addPostProcessor(t),
      t.type === "formatter" && (this.modules.formatter = t),
      t.type === "3rdParty" && this.modules.external.push(t),
      this
    );
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1)) {
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
      !this.resolvedLanguage &&
        this.languages.indexOf(t) < 0 &&
        this.store.hasLanguageSomeTranslations(t) &&
        ((this.resolvedLanguage = t), this.languages.unshift(t));
    }
  }
  changeLanguage(t, n) {
    this.isLanguageChangingTo = t;
    const r = bn();
    this.emit("languageChanging", t);
    const o = (s) => {
        ((this.language = s),
          (this.languages = this.services.languageUtils.toResolveHierarchy(s)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(s));
      },
      i = (s, a) => {
        (a
          ? this.isLanguageChangingTo === t &&
            (o(a),
            this.translator.changeLanguage(a),
            (this.isLanguageChangingTo = void 0),
            this.emit("languageChanged", a),
            this.logger.log("languageChanged", a))
          : (this.isLanguageChangingTo = void 0),
          r.resolve((...u) => this.t(...u)),
          n && n(s, (...u) => this.t(...u)));
      },
      l = (s) => {
        var p, f;
        !t && !s && this.services.languageDetector && (s = []);
        const a = M(s) ? s : s && s[0],
          u = this.store.hasLanguageSomeTranslations(a)
            ? a
            : this.services.languageUtils.getBestMatchFromCodes(M(s) ? [s] : s);
        (u &&
          (this.language || o(u),
          this.translator.language || this.translator.changeLanguage(u),
          (f =
            (p = this.services.languageDetector) == null
              ? void 0
              : p.cacheUserLanguage) == null || f.call(p, u)),
          this.loadResources(u, (g) => {
            i(g, u);
          }));
      };
    return (
      !t &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? l(this.services.languageDetector.detect())
        : !t &&
            this.services.languageDetector &&
            this.services.languageDetector.async
          ? this.services.languageDetector.detect.length === 0
            ? this.services.languageDetector.detect().then(l)
            : this.services.languageDetector.detect(l)
          : l(t),
      r
    );
  }
  getFixedT(t, n, r) {
    const o = (i, l, ...s) => {
      let a;
      (typeof l != "object"
        ? (a = this.options.overloadTranslationOptionHandler([i, l].concat(s)))
        : (a = { ...l }),
        (a.lng = a.lng || o.lng),
        (a.lngs = a.lngs || o.lngs),
        (a.ns = a.ns || o.ns),
        a.keyPrefix !== "" && (a.keyPrefix = a.keyPrefix || r || o.keyPrefix));
      const u = this.options.keySeparator || ".";
      let p;
      return (
        a.keyPrefix && Array.isArray(i)
          ? (p = i.map(
              (f) => (
                typeof f == "function" &&
                  (f = kl(f, { ...this.options, ...l })),
                `${a.keyPrefix}${u}${f}`
              ),
            ))
          : (typeof i == "function" && (i = kl(i, { ...this.options, ...l })),
            (p = a.keyPrefix ? `${a.keyPrefix}${u}${i}` : i)),
        this.t(p, a)
      );
    };
    return (
      M(t) ? (o.lng = t) : (o.lngs = t),
      (o.ns = n),
      (o.keyPrefix = r),
      o
    );
  }
  t(...t) {
    var n;
    return (n = this.translator) == null ? void 0 : n.translate(...t);
  }
  exists(...t) {
    var n;
    return (n = this.translator) == null ? void 0 : n.exists(...t);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t, n = {}) {
    if (!this.isInitialized)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18next was not initialized",
          this.languages,
        ),
        !1
      );
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18n.languages were undefined or empty",
          this.languages,
        ),
        !1
      );
    const r = n.lng || this.resolvedLanguage || this.languages[0],
      o = this.options ? this.options.fallbackLng : !1,
      i = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode") return !0;
    const l = (s, a) => {
      const u = this.services.backendConnector.state[`${s}|${a}`];
      return u === -1 || u === 0 || u === 2;
    };
    if (n.precheck) {
      const s = n.precheck(this, l);
      if (s !== void 0) return s;
    }
    return !!(
      this.hasResourceBundle(r, t) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (l(r, t) && (!o || l(i, t)))
    );
  }
  loadNamespaces(t, n) {
    const r = bn();
    return this.options.ns
      ? (M(t) && (t = [t]),
        t.forEach((o) => {
          this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
        }),
        this.loadResources((o) => {
          (r.resolve(), n && n(o));
        }),
        r)
      : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = bn();
    M(t) && (t = [t]);
    const o = this.options.preload || [],
      i = t.filter(
        (l) =>
          o.indexOf(l) < 0 && this.services.languageUtils.isSupportedCode(l),
      );
    return i.length
      ? ((this.options.preload = o.concat(i)),
        this.loadResources((l) => {
          (r.resolve(), n && n(l));
        }),
        r)
      : (n && n(), Promise.resolve());
  }
  dir(t) {
    var o, i;
    if (
      (t ||
        (t =
          this.resolvedLanguage ||
          (((o = this.languages) == null ? void 0 : o.length) > 0
            ? this.languages[0]
            : this.language)),
      !t)
    )
      return "rtl";
    try {
      const l = new Intl.Locale(t);
      if (l && l.getTextInfo) {
        const s = l.getTextInfo();
        if (s && s.direction) return s.direction;
      }
    } catch {}
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
      r =
        ((i = this.services) == null ? void 0 : i.languageUtils) ||
        new Ia(Ha());
    return t.toLowerCase().indexOf("-latn") > 1
      ? "ltr"
      : n.indexOf(r.getLanguagePartFromCode(t)) > -1 ||
          t.toLowerCase().indexOf("-arab") > 1
        ? "rtl"
        : "ltr";
  }
  static createInstance(t = {}, n) {
    const r = new tr(t, n);
    return ((r.createInstance = tr.createInstance), r);
  }
  cloneInstance(t = {}, n = Wr) {
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const o = { ...this.options, ...t, isClone: !0 },
      i = new tr(o);
    if (
      ((t.debug !== void 0 || t.prefix !== void 0) &&
        (i.logger = i.logger.clone(t)),
      ["store", "services", "language"].forEach((s) => {
        i[s] = this[s];
      }),
      (i.services = { ...this.services }),
      (i.services.utils = { hasLoadedNamespace: i.hasLoadedNamespace.bind(i) }),
      r)
    ) {
      const s = Object.keys(this.store.data).reduce(
        (a, u) => (
          (a[u] = { ...this.store.data[u] }),
          (a[u] = Object.keys(a[u]).reduce(
            (p, f) => ((p[f] = { ...a[u][f] }), p),
            a[u],
          )),
          a
        ),
        {},
      );
      ((i.store = new Fa(s, o)), (i.services.resourceStore = i.store));
    }
    return (
      t.interpolation && (i.services.interpolator = new Ua(o)),
      (i.translator = new Do(i.services, o)),
      i.translator.on("*", (s, ...a) => {
        i.emit(s, ...a);
      }),
      i.init(o, n),
      (i.translator.options = o),
      (i.translator.backendConnector.services.utils = {
        hasLoadedNamespace: i.hasLoadedNamespace.bind(i),
      }),
      i
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
const Se = tr.createInstance();
Se.createInstance;
Se.dir;
Se.init;
Se.loadResources;
Se.reloadResources;
Se.use;
Se.changeLanguage;
Se.getFixedT;
Se.t;
Se.exists;
Se.setDefaultNamespace;
Se.hasLoadedNamespace;
Se.loadNamespaces;
Se.loadLanguages;
const Nh = (e, t, n, r) => {
    var i, l, s, a;
    const o = [n, { code: t, ...(r || {}) }];
    if (
      (l = (i = e == null ? void 0 : e.services) == null ? void 0 : i.logger) !=
        null &&
      l.forward
    )
      return e.services.logger.forward(o, "warn", "react-i18next::", !0);
    (Yt(o[0]) && (o[0] = `react-i18next:: ${o[0]}`),
      (a = (s = e == null ? void 0 : e.services) == null ? void 0 : s.logger) !=
        null && a.warn
        ? e.services.logger.warn(...o)
        : console != null && console.warn && console.warn(...o));
  },
  Ka = {},
  cd = (e, t, n, r) => {
    (Yt(n) && Ka[n]) || (Yt(n) && (Ka[n] = new Date()), Nh(e, t, n, r));
  },
  dd = (e, t) => () => {
    if (e.isInitialized) t();
    else {
      const n = () => {
        (setTimeout(() => {
          e.off("initialized", n);
        }, 0),
          t());
      };
      e.on("initialized", n);
    }
  },
  Cl = (e, t, n) => {
    e.loadNamespaces(t, dd(e, n));
  },
  Qa = (e, t, n, r) => {
    if (
      (Yt(n) && (n = [n]),
      e.options.preload && e.options.preload.indexOf(t) > -1)
    )
      return Cl(e, n, r);
    (n.forEach((o) => {
      e.options.ns.indexOf(o) < 0 && e.options.ns.push(o);
    }),
      e.loadLanguages(t, dd(e, r)));
  },
  Eh = (e, t, n = {}) =>
    !t.languages || !t.languages.length
      ? (cd(t, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
          languages: t.languages,
        }),
        !0)
      : t.hasLoadedNamespace(e, {
          lng: n.lng,
          precheck: (r, o) => {
            if (
              n.bindI18n &&
              n.bindI18n.indexOf("languageChanging") > -1 &&
              r.services.backendConnector.backend &&
              r.isLanguageChangingTo &&
              !o(r.isLanguageChangingTo, e)
            )
              return !1;
          },
        }),
  Yt = (e) => typeof e == "string",
  jh = (e) => typeof e == "object" && e !== null,
  Lh =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  Oh = {
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
  Rh = (e) => Oh[e],
  Ph = (e) => e.replace(Lh, Rh);
let Nl = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Ph,
  transDefaultProps: void 0,
};
const _h = (e = {}) => {
    Nl = { ...Nl, ...e };
  },
  Th = () => Nl;
let fd;
const Dh = (e) => {
    fd = e;
  },
  Mh = () => fd,
  $h = {
    type: "3rdParty",
    init(e) {
      (_h(e.options.react), Dh(e));
    },
  },
  Fh = C.createContext();
class zh {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
var pd = { exports: {} },
  hd = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ln = C;
function Ih(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ah = typeof Object.is == "function" ? Object.is : Ih,
  bh = Ln.useState,
  Bh = Ln.useEffect,
  Uh = Ln.useLayoutEffect,
  Vh = Ln.useDebugValue;
function Hh(e, t) {
  var n = t(),
    r = bh({ inst: { value: n, getSnapshot: t } }),
    o = r[0].inst,
    i = r[1];
  return (
    Uh(
      function () {
        ((o.value = n), (o.getSnapshot = t), Oi(o) && i({ inst: o }));
      },
      [e, n, t],
    ),
    Bh(
      function () {
        return (
          Oi(o) && i({ inst: o }),
          e(function () {
            Oi(o) && i({ inst: o });
          })
        );
      },
      [e],
    ),
    Vh(n),
    n
  );
}
function Oi(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ah(e, n);
  } catch {
    return !0;
  }
}
function Wh(e, t) {
  return t();
}
var Kh =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? Wh
    : Hh;
hd.useSyncExternalStore =
  Ln.useSyncExternalStore !== void 0 ? Ln.useSyncExternalStore : Kh;
pd.exports = hd;
var Qh = pd.exports;
const Gh = (e, t) =>
    Yt(t)
      ? t
      : jh(t) && Yt(t.defaultValue)
        ? t.defaultValue
        : Array.isArray(e)
          ? e[e.length - 1]
          : e,
  Yh = { t: Gh, ready: !1 },
  Xh = () => () => {},
  $t = (e, t = {}) => {
    var D, T, Z;
    const { i18n: n } = t,
      { i18n: r, defaultNS: o } = C.useContext(Fh) || {},
      i = n || r || Mh();
    (i && !i.reportNamespaces && (i.reportNamespaces = new zh()),
      i ||
        cd(
          i,
          "NO_I18NEXT_INSTANCE",
          "useTranslation: You will need to pass in an i18next instance by using initReactI18next",
        ));
    const l = C.useMemo(() => {
        var I;
        return {
          ...Th(),
          ...((I = i == null ? void 0 : i.options) == null ? void 0 : I.react),
          ...t,
        };
      }, [i, t]),
      { useSuspense: s, keyPrefix: a } = l,
      u =
        o ||
        ((D = i == null ? void 0 : i.options) == null ? void 0 : D.defaultNS),
      p = Yt(u) ? [u] : u || ["translation"],
      f = C.useMemo(() => p, p);
    (Z =
      (T = i == null ? void 0 : i.reportNamespaces) == null
        ? void 0
        : T.addUsedNamespaces) == null || Z.call(T, f);
    const g = C.useRef(0),
      v = C.useCallback(
        (I) => {
          if (!i) return Xh;
          const { bindI18n: $, bindI18nStore: z } = l,
            H = () => {
              ((g.current += 1), I());
            };
          return (
            $ && i.on($, H),
            z && i.store.on(z, H),
            () => {
              ($ && $.split(" ").forEach((q) => i.off(q, H)),
                z && z.split(" ").forEach((q) => i.store.off(q, H)));
            }
          );
        },
        [i, l],
      ),
      y = C.useRef(),
      w = C.useCallback(() => {
        if (!i) return Yh;
        const I =
            !!(i.isInitialized || i.initializedStoreOnce) &&
            f.every((S) => Eh(S, i, l)),
          $ = t.lng || i.language,
          z = g.current,
          H = y.current;
        if (
          H &&
          H.ready === I &&
          H.lng === $ &&
          H.keyPrefix === a &&
          H.revision === z
        )
          return H;
        const O = {
          t: i.getFixedT($, l.nsMode === "fallback" ? f : f[0], a),
          ready: I,
          lng: $,
          keyPrefix: a,
          revision: z,
        };
        return ((y.current = O), O);
      }, [i, f, a, l, t.lng]),
      [P, m] = C.useState(0),
      { t: d, ready: h } = Qh.useSyncExternalStore(v, w, w);
    C.useEffect(() => {
      if (i && !h && !s) {
        const I = () => m(($) => $ + 1);
        t.lng ? Qa(i, t.lng, f, I) : Cl(i, f, I);
      }
    }, [i, t.lng, f, h, s, P]);
    const x = i || {},
      k = C.useRef(null),
      E = C.useRef(),
      L = (I) => {
        const $ = Object.getOwnPropertyDescriptors(I);
        $.__original && delete $.__original;
        const z = Object.create(Object.getPrototypeOf(I), $);
        if (!Object.prototype.hasOwnProperty.call(z, "__original"))
          try {
            Object.defineProperty(z, "__original", {
              value: I,
              writable: !1,
              enumerable: !1,
              configurable: !1,
            });
          } catch {}
        return z;
      },
      j = C.useMemo(() => {
        const I = x,
          $ = I == null ? void 0 : I.language;
        let z = I;
        I &&
          (k.current && k.current.__original === I
            ? E.current !== $
              ? ((z = L(I)), (k.current = z), (E.current = $))
              : (z = k.current)
            : ((z = L(I)), (k.current = z), (E.current = $)));
        const H = [d, z, h];
        return ((H.t = d), (H.i18n = z), (H.ready = h), H);
      }, [d, x, h, x.resolvedLanguage, x.language, x.languages]);
    if (i && s && !h)
      throw new Promise((I) => {
        const $ = () => I();
        t.lng ? Qa(i, t.lng, f, $) : Cl(i, f, $);
      });
    return j;
  },
  gd = C.createContext(void 0);
function Jh({ children: e }) {
  const [t, n] = C.useState(null),
    [r, o] = C.useState(!1);
  C.useEffect(() => {
    const s = localStorage.getItem("user_session");
    if (s)
      try {
        const a = JSON.parse(s);
        (n(a), o(!0));
      } catch (a) {
        (console.error("Failed to parse stored session:", a),
          localStorage.removeItem("user_session"));
      }
  }, []);
  const i = (s) => {
      (n(s), o(!0), localStorage.setItem("user_session", JSON.stringify(s)));
    },
    l = () => {
      (n(null), o(!1), localStorage.removeItem("user_session"));
    };
  return c.jsx(gd.Provider, {
    value: { user: t, isAuthenticated: r, login: i, logout: l },
    children: e,
  });
}
function ws() {
  const e = C.useContext(gd);
  if (e === void 0)
    throw new Error("useAuth must be used within an AuthProvider");
  return e;
}
function Zh() {
  const { t: e, i18n: t } = $t(),
    { user: n, logout: r } = ws(),
    o = () => {
      const l = t.language === "zh-TW" ? "en" : "zh-TW";
      t.changeLanguage(l);
    },
    i = () => {
      r();
    };
  return c.jsx("nav", {
    className: "bg-transparent py-4 md:py-6 lg:py-8",
    children: c.jsx("div", {
      className: "mx-auto px-4 sm:px-6 lg:px-8",
      children: c.jsxs("div", {
        className: "flex justify-between items-center h-16",
        children: [
          c.jsxs("div", {
            className: "flex items-center space-x-4",
            children: [
              c.jsxs("a", {
                href: "../frontpage",
                className:
                  "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors",
                children: [
                  c.jsx("span", { className: "sr-only", children: "Home" }),
                  c.jsx(qp, { className: "w-7 h-7" }),
                ],
              }),
              c.jsxs("div", {
                children: [
                  c.jsx("h1", {
                    className:
                      "text-2xl md:text-3xl font-semibold text-gray-800 mb-2",
                    children: e("nav.title"),
                  }),
                  c.jsxs("p", {
                    className: "text-base text-gray-600",
                    children: [
                      n == null ? void 0 : n.Name,
                      " - ",
                      n == null ? void 0 : n.Employer,
                    ],
                  }),
                ],
              }),
            ],
          }),
          c.jsxs("div", {
            className: "flex items-center space-x-3",
            children: [
              c.jsxs("button", {
                onClick: o,
                className:
                  "inline-flex items-center px-3 py-2 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
                children: [
                  c.jsx(Zp, { className: "h-5 w-5" }),
                  c.jsx("span", {
                    className: "hidden sm:ml-2 sm:inline",
                    children: e("nav.language"),
                  }),
                ],
              }),
              c.jsxs("button", {
                onClick: i,
                className:
                  "inline-flex items-center px-3 py-2 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
                children: [
                  c.jsx(eh, { className: "w-5 h-5" }),
                  c.jsx("span", {
                    className: "hidden sm:ml-2 sm:inline",
                    children: e("nav.logout"),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function qh({
  resultCount: e,
  groupFilter: t,
  setGroupFilter: n,
  searchQuery: r,
  setSearchQuery: o,
  onSearch: i,
  onExport: l,
  onUploadExcel: s,
  onDownloadExcel: a,
  isUploading: u = !1,
  isDownloading: p = !1,
}) {
  const { t: f } = $t(),
    g = C.useRef(null),
    v = (w) => {
      var m;
      const P = (m = w.target.files) == null ? void 0 : m[0];
      P && (s(P), (w.target.value = ""));
    },
    y = () => {
      var w;
      (w = g.current) == null || w.click();
    };
  return c.jsx("div", {
    children: c.jsx("div", {
      className: "mx-auto pt-4",
      children: c.jsxs("div", {
        className:
          "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
        children: [
          c.jsx("div", {
            className: "flex items-center gap-4 w-full sm:w-auto",
            children: c.jsxs("div", {
              className: "flex items-center gap-2 flex-1 sm:flex-initial",
              children: [
                c.jsxs("div", {
                  className: "relative flex-1 sm:w-80",
                  children: [
                    c.jsx(_a, {
                      className:
                        "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400",
                    }),
                    c.jsx("input", {
                      type: "text",
                      value: r,
                      onChange: (w) => o(w.target.value),
                      onKeyDown: (w) => w.key === "Enter" && i(),
                      placeholder: f("search.placeholder"),
                      className:
                        "w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                    }),
                  ],
                }),
                c.jsxs("button", {
                  onClick: i,
                  className:
                    "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2",
                  children: [
                    c.jsx(_a, { className: "w-4 h-4" }),
                    c.jsx("span", { children: f("search.searchButton") }),
                  ],
                }),
              ],
            }),
          }),
          c.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              c.jsx("input", {
                ref: g,
                type: "file",
                accept: ".xlsx,.xls",
                onChange: v,
                disabled: u,
                className: "hidden",
              }),
              c.jsx("button", {
                type: "button",
                onClick: y,
                disabled: u,
                className:
                  "bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed",
                children: u
                  ? c.jsxs(c.Fragment, {
                      children: [
                        c.jsx("div", {
                          className:
                            "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin",
                        }),
                        c.jsx("span", { children: "上傳中..." }),
                      ],
                    })
                  : c.jsxs(c.Fragment, {
                      children: [
                        c.jsx(oh, { className: "w-4 h-4" }),
                        c.jsx("span", { children: "上傳Excel" }),
                      ],
                    }),
              }),
              c.jsx("button", {
                onClick: a,
                disabled: p,
                className:
                  "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed",
                children: p
                  ? c.jsxs(c.Fragment, {
                      children: [
                        c.jsx("div", {
                          className:
                            "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin",
                        }),
                        c.jsx("span", { children: "下載中..." }),
                      ],
                    })
                  : c.jsxs(c.Fragment, {
                      children: [
                        c.jsx(Xp, { className: "w-4 h-4" }),
                        c.jsx("span", { children: "下載Excel" }),
                      ],
                    }),
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function eg({
  fileStatusFilter: e,
  setFileStatusFilter: t,
  torwFilter: n,
  setTorwFilter: r,
  barcodeFilter: o,
  setBarcodeFilter: i,
}) {
  const l = (p, f, g) => {
      g(p === f ? null : f);
    },
    s = "px-4 py-2 rounded-lg font-medium transition-all duration-200 border-2",
    a = "bg-blue-600 text-white border-blue-600 shadow-md",
    u =
      "bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:bg-blue-50";
  return c.jsx("div", {
    className: "bg-white mb-6",
    children: c.jsxs("div", {
      className: "grid grid-cols-1 md:grid-cols-3 gap-6",
      children: [
        c.jsxs("div", {
          children: [
            c.jsx("h3", {
              className: "font-medium text-gray-700 mb-3",
              children: "開檔狀態",
            }),
            c.jsxs("div", {
              className: "flex gap-2",
              children: [
                c.jsx("button", {
                  onClick: () => l(e, "開檔", t),
                  className: `${s} ${e === "開檔" ? a : u}`,
                  children: "開檔",
                }),
                c.jsx("button", {
                  onClick: () => l(e, "關檔", t),
                  className: `${s} ${e === "關檔" ? a : u}`,
                  children: "關檔",
                }),
              ],
            }),
          ],
        }),
        c.jsxs("div", {
          children: [
            c.jsx("h3", {
              className: "font-medium text-gray-700 mb-3",
              children: "中/西藥",
            }),
            c.jsxs("div", {
              className: "flex gap-2",
              children: [
                c.jsx("button", {
                  onClick: () => l(n, "中藥", r),
                  className: `${s} ${n === "中藥" ? a : u}`,
                  children: "中藥",
                }),
                c.jsx("button", {
                  onClick: () => l(n, "西藥", r),
                  className: `${s} ${n === "西藥" ? a : u}`,
                  children: "西藥",
                }),
              ],
            }),
          ],
        }),
        c.jsxs("div", {
          children: [
            c.jsx("h3", {
              className: "font-medium text-gray-700 mb-3",
              children: "條碼狀態",
            }),
            c.jsxs("div", {
              className: "flex gap-2",
              children: [
                c.jsx("button", {
                  onClick: () => l(o, "has", i),
                  className: `${s} ${o === "has" ? a : u}`,
                  children: "已建立",
                }),
                c.jsx("button", {
                  onClick: () => l(o, "none", i),
                  className: `${s} ${o === "none" ? a : u}`,
                  children: "未建立",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function tg({ sortBy: e, setSortBy: t, sortOrder: n, setSortOrder: r }) {
  const o = (a) => {
      e === a ? r(n === "asc" ? "desc" : "asc") : (t(a), r("asc"));
    },
    i =
      "px-4 py-2 rounded-lg font-medium transition-all duration-200 border-2 flex items-center gap-2",
    l = "bg-blue-600 text-white border-blue-600 shadow-md",
    s =
      "bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:bg-blue-50";
  return c.jsxs("div", {
    className: "bg-white mb-6",
    children: [
      c.jsx("h3", {
        className: "font-medium text-gray-700 mb-3",
        children: "排序",
      }),
      c.jsxs("div", {
        className: "flex flex-wrap gap-3",
        children: [
          c.jsxs("button", {
            onClick: () => o("code"),
            className: `${i} ${e === "code" ? l : s}`,
            children: [
              c.jsx("span", { children: "藥碼" }),
              e === "code" &&
                (n === "asc"
                  ? c.jsx(Hr, { className: "w-4 h-4" })
                  : c.jsx(Vr, { className: "w-4 h-4" })),
            ],
          }),
          c.jsxs("button", {
            onClick: () => o("name"),
            className: `${i} ${e === "name" ? l : s}`,
            children: [
              c.jsx("span", { children: "藥名" }),
              e === "name" &&
                (n === "asc"
                  ? c.jsx(Hr, { className: "w-4 h-4" })
                  : c.jsx(Vr, { className: "w-4 h-4" })),
            ],
          }),
          c.jsxs("button", {
            onClick: () => o("chtName"),
            className: `${i} ${e === "chtName" ? l : s}`,
            children: [
              c.jsx("span", { children: "中文名" }),
              e === "chtName" &&
                (n === "asc"
                  ? c.jsx(Hr, { className: "w-4 h-4" })
                  : c.jsx(Vr, { className: "w-4 h-4" })),
            ],
          }),
          c.jsxs("button", {
            onClick: () => o("storage"),
            className: `${i} ${e === "storage" ? l : s}`,
            children: [
              c.jsx("span", { children: "儲位" }),
              e === "storage" &&
                (n === "asc"
                  ? c.jsx(Hr, { className: "w-4 h-4" })
                  : c.jsx(Vr, { className: "w-4 h-4" })),
            ],
          }),
        ],
      }),
    ],
  });
}
let Vt = null;
async function ng() {
  if (Vt) return Vt;
  try {
    const e = await fetch("../config.txt");
    if (!e.ok) throw new Error("Failed to load config.txt");
    const t = await e.json();
    return (
      (Vt = t),
      console.log(
        "%c⚙️ Configuration Loaded",
        "color: #F59E0B; font-weight: bold; font-size: 12px",
      ),
      console.log("%cDomain:", "color: #10B981; font-weight: bold", t.domain),
      console.log(
        "%cHomepage:",
        "color: #10B981; font-weight: bold",
        t.homepage,
      ),
      console.log("%cAI:", "color: #10B981; font-weight: bold", t.ai),
      t
    );
  } catch (e) {
    throw (console.error("Failed to load config.txt:", e), e);
  }
}
function _n() {
  if (!Vt) throw new Error("Config not loaded. Call loadConfig() first.");
  return Vt.domain;
}
function rg() {
  if (!Vt) throw new Error("Config not loaded. Call loadConfig() first.");
  return Vt.ai;
}
async function og(e) {
  const n = `${rg()}/barcode`,
    r = performance.now(),
    o = new FormData();
  (o.append("file", e, "capture.jpg"),
    console.group(
      `%c🌐 API REQUEST - POST ${n}`,
      "color: #3B82F6; font-weight: bold; font-size: 12px",
    ),
    console.log("%cURL:", "color: #10B981; font-weight: bold", n),
    console.log("%cMethod:", "color: #10B981; font-weight: bold", "POST"),
    console.log(
      "%cBody:",
      "color: #10B981; font-weight: bold",
      "FormData with image file",
    ),
    console.groupEnd());
  try {
    const i = await fetch(n, { method: "POST", body: o }),
      s = (performance.now() - r).toFixed(2);
    if (!i.ok) throw new Error(`HTTP error! status: ${i.status}`);
    const a = await i.json();
    return (
      console.group(
        `%c✓ API RESPONSE - POST ${n} [${i.status}] (${s}ms)`,
        "color: #10B981; font-weight: bold; font-size: 12px",
      ),
      console.log(
        "%cStatus:",
        "color: #8B5CF6; font-weight: bold",
        `${i.status} ${i.statusText}`,
      ),
      console.log("%cDuration:", "color: #8B5CF6; font-weight: bold", `${s}ms`),
      console.log("%cResponse Data:", "color: #8B5CF6; font-weight: bold", a),
      console.groupEnd(),
      a
    );
  } catch (i) {
    const s = (performance.now() - r).toFixed(2);
    throw (
      console.group(
        `%c✗ API ERROR - POST ${n} (${s}ms)`,
        "color: #EF4444; font-weight: bold; font-size: 12px",
      ),
      console.error("%cError:", "color: #EF4444; font-weight: bold", i),
      console.groupEnd(),
      i
    );
  }
}
function md({ isOpen: e, onClose: t, onScan: n, mode: r = "continuous" }) {
  const { t: o } = $t(),
    i = C.useRef(null),
    l = C.useRef(null),
    s = C.useRef(null),
    [a, u] = C.useState(""),
    [p, f] = C.useState(!1),
    g = C.useRef(!1),
    v = C.useRef(n),
    y = async () => {
      try {
        u("");
        const m = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "environment",
            width: { ideal: 1920 },
            height: { ideal: 1080 },
          },
        });
        i.current &&
          ((i.current.srcObject = m),
          (l.current = m),
          await new Promise((d) => {
            if (i.current) {
              const h = () => {
                var x;
                ((x = i.current) == null || x.removeEventListener("canplay", h),
                  d());
              };
              (i.current.addEventListener("canplay", h),
                i.current.readyState >= 3 &&
                  (i.current.removeEventListener("canplay", h), d()));
            } else d();
          }));
      } catch (m) {
        throw (
          console.error("Error accessing camera:", m),
          u(o("scanner.cameraError")),
          m
        );
      }
    },
    w = () => {
      (l.current &&
        (l.current.getTracks().forEach((m) => m.stop()), (l.current = null)),
        i.current && (i.current.srcObject = null));
    },
    P = () => {
      if (i.current) {
        const m = i.current;
        if (m.srcObject) {
          const d = m.srcObject.getVideoTracks();
          if (d.length > 0) {
            const h = d[0];
            "focusMode" in h.getCapabilities() &&
              h
                .applyConstraints({ advanced: [{ focusMode: "continuous" }] })
                .catch(console.error);
          }
        }
      }
    };
  return (
    C.useEffect(() => {
      v.current = n;
    }, [n]),
    C.useEffect(
      () => (
        e
          ? (async () => {
              try {
                (await y(),
                  r === "manual" &&
                    i.current &&
                    ((g.current = !0),
                    (async () => {
                      for (; g.current; )
                        try {
                          if (
                            (f(!0),
                            await new Promise((E) => setTimeout(E, 500)),
                            !i.current || !s.current)
                          ) {
                            f(!1);
                            break;
                          }
                          const h = i.current;
                          if (h.videoWidth === 0 || h.videoHeight === 0) {
                            (console.warn("Video not ready, skipping frame"),
                              f(!1),
                              await new Promise((E) => setTimeout(E, 500)));
                            continue;
                          }
                          const x = await new Promise((E) => {
                            if (!i.current || !s.current) {
                              E(null);
                              return;
                            }
                            const L = i.current,
                              j = s.current,
                              D = j.getContext("2d");
                            if (!D) {
                              E(null);
                              return;
                            }
                            ((j.width = L.videoWidth),
                              (j.height = L.videoHeight),
                              D.drawImage(L, 0, 0, j.width, j.height),
                              j.toBlob(
                                (T) => {
                                  E(T);
                                },
                                "image/jpeg",
                                0.95,
                              ));
                          });
                          if (!x || !g.current) {
                            f(!1);
                            break;
                          }
                          const k = await og(x);
                          if (!g.current) break;
                          if (k.results && k.results.length > 0) {
                            const E = k.results[0];
                            if (E.code) {
                              ((g.current = !1),
                                f(!1),
                                v.current && v.current(E.code));
                              break;
                            }
                          }
                          f(!1);
                        } catch (h) {
                          (console.error("Error during scanning:", h),
                            f(!1),
                            await new Promise((x) => setTimeout(x, 1e3)));
                        }
                    })()));
              } catch (d) {
                console.error("Failed to initialize camera:", d);
              }
            })()
          : (w(), (g.current = !1)),
        () => {
          (w(), (g.current = !1));
        }
      ),
      [e, r],
    ),
    e
      ? c.jsx("div", {
          className:
            "fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black bg-opacity-70",
          onClick: t,
          children: c.jsxs("div", {
            className:
              "bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden",
            onClick: (m) => m.stopPropagation(),
            children: [
              c.jsxs("div", {
                className:
                  "flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gray-50",
                children: [
                  c.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      c.jsx("div", {
                        className: "p-2 bg-blue-100 rounded-lg",
                        children: c.jsx(Po, {
                          className: "w-6 h-6 text-blue-600",
                        }),
                      }),
                      c.jsx("h2", {
                        className: "text-xl font-semibold text-gray-900",
                        children: o("scanner.title"),
                      }),
                    ],
                  }),
                  c.jsx("button", {
                    onClick: t,
                    className:
                      "p-2 hover:bg-gray-200 rounded-full transition-colors",
                    "aria-label": "Close",
                    children: c.jsx(xs, { className: "w-6 h-6 text-gray-600" }),
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "p-6 bg-gray-50",
                children: [
                  c.jsxs("div", {
                    className: "relative bg-black rounded-xl overflow-hidden",
                    style: { aspectRatio: "16/9" },
                    children: [
                      c.jsx("video", {
                        ref: i,
                        autoPlay: !0,
                        playsInline: !0,
                        muted: !0,
                        onClick: P,
                        className: "w-full h-full object-cover cursor-pointer",
                      }),
                      c.jsx("canvas", { ref: s, className: "hidden" }),
                      p &&
                        r === "manual" &&
                        c.jsx("div", {
                          className:
                            "absolute inset-0 flex items-center justify-center",
                          children: c.jsxs("div", {
                            className: "text-center",
                            children: [
                              c.jsx("div", {
                                className:
                                  "animate-spin rounded-full h-16 w-16 border-4 border-white border-t-transparent mb-3 mx-auto",
                              }),
                              c.jsx("p", {
                                className: "text-white text-lg font-semibold",
                                children: "辨識中...",
                              }),
                            ],
                          }),
                        }),
                      a &&
                        c.jsx("div", {
                          className:
                            "absolute inset-0 flex items-center justify-center bg-black bg-opacity-80",
                          children: c.jsxs("div", {
                            className: "text-center px-6",
                            children: [
                              c.jsx("div", {
                                className:
                                  "inline-block p-3 bg-red-100 rounded-full mb-3",
                                children: c.jsx(Po, {
                                  className: "w-8 h-8 text-red-600",
                                }),
                              }),
                              c.jsx("p", {
                                className: "text-white text-base",
                                children: a,
                              }),
                            ],
                          }),
                        }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "mt-6 text-center space-y-3",
                    children: [
                      c.jsx("p", {
                        className: "text-lg font-semibold text-gray-900",
                        children:
                          r === "manual"
                            ? "請將條碼對準鏡頭"
                            : o("scanner.instruction"),
                      }),
                      c.jsx("p", {
                        className: "text-sm text-gray-600",
                        children:
                          r === "manual"
                            ? "系統會自動辨識條碼"
                            : o("scanner.supportedFormats"),
                      }),
                      c.jsxs("div", {
                        className:
                          "flex items-center justify-center gap-2 text-sm text-gray-500 pt-2",
                        children: [
                          c.jsx(Jp, { className: "w-4 h-4" }),
                          c.jsx("span", { children: o("scanner.focusHint") }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
      : null
  );
}
async function Er(e, t) {
  const n = (t == null ? void 0 : t.method) || "GET",
    r = performance.now();
  if (
    (console.group(
      `%c🌐 API REQUEST - ${n} ${e}`,
      "color: #3B82F6; font-weight: bold; font-size: 12px",
    ),
    console.log("%cURL:", "color: #10B981; font-weight: bold", e),
    console.log("%cMethod:", "color: #10B981; font-weight: bold", n),
    t != null &&
      t.headers &&
      console.log("%cHeaders:", "color: #10B981; font-weight: bold", t.headers),
    t != null && t.body)
  )
    try {
      const o = JSON.parse(t.body);
      console.log("%cRequest Body:", "color: #10B981; font-weight: bold", o);
    } catch {
      console.log(
        "%cRequest Body:",
        "color: #10B981; font-weight: bold",
        t.body,
      );
    }
  console.groupEnd();
  try {
    const o = await fetch(e, t),
      l = (performance.now() - r).toFixed(2),
      s = o.clone();
    let a;
    try {
      a = await s.json();
    } catch {
      a = await s.text();
    }
    const u = o.ok ? "#10B981" : "#EF4444",
      p = o.ok ? "✓" : "✗";
    return (
      console.group(
        `%c${p} API RESPONSE - ${n} ${e} [${o.status}] (${l}ms)`,
        `color: ${u}; font-weight: bold; font-size: 12px`,
      ),
      console.log(
        "%cStatus:",
        "color: #8B5CF6; font-weight: bold",
        `${o.status} ${o.statusText}`,
      ),
      console.log("%cDuration:", "color: #8B5CF6; font-weight: bold", `${l}ms`),
      console.log("%cResponse Data:", "color: #8B5CF6; font-weight: bold", a),
      console.groupEnd(),
      o
    );
  } catch (o) {
    const l = (performance.now() - r).toFixed(2);
    throw (
      console.group(
        `%c✗ API ERROR - ${n} ${e} (${l}ms)`,
        "color: #EF4444; font-weight: bold; font-size: 12px",
      ),
      console.error("%cError:", "color: #EF4444; font-weight: bold", o),
      console.groupEnd(),
      o
    );
  }
}
async function ig() {
  const e = _n(),
    t = await Er(`${e}/api/MED_page/get_med_cloud`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });
  if (!t.ok) throw new Error(`Failed to fetch medications: ${t.statusText}`);
  const n = await t.json();
  if (n.Code !== 200)
    throw new Error(n.Result || "Failed to fetch medications");
  return n.Data || [];
}
async function Mo(e) {
  const t = _n(),
    n = await Er(`${t}/api/MED_page/serch_by_BarCode`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Value: e }),
    });
  if (!n.ok) throw new Error(`Failed to search barcode: ${n.statusText}`);
  return await n.json();
}
async function oo(e) {
  const t = _n(),
    r = {
      Data: { ...e, BARCODE2: JSON.stringify(e.BARCODE || []) },
      Code: 0,
      Result: "",
      Value: "",
      ServerName: "",
      ServerType: "網頁",
      TableName: "medicine_page_cloud",
      DbName: "dbvm",
      TimeTaken: "",
    },
    o = await Er(`${t}/api/MED_page/upadte_by_guid`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(r),
    });
  if (!o.ok) throw new Error(`Failed to update medication: ${o.statusText}`);
  return await o.json();
}
function Ss(e) {
  return /^[a-zA-Z0-9 !#$%&'()*+,\-.:;<=>?@[\]^_`|~]+$/.test(e);
}
async function lg(e) {
  const t = _n(),
    n = new FormData();
  n.append("file", e);
  const r = await Er(`${t}/api/MED_page/upload_med_barcode`, {
    method: "POST",
    body: n,
  });
  if (!r.ok) throw new Error(`Failed to upload Excel: ${r.statusText}`);
  return await r.json();
}
async function sg(e) {
  const t = _n();
  (console.log("%c🌐 Downloading Excel", "color: #3B82F6; font-weight: bold"),
    console.log("${domain}/api/MED_page/download_med_barcode"),
    console.log(`Sending ${e.length} medications`));
  const n = await fetch(`${t}/api/MED_page/download_med_barcode`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ Data: e }),
  });
  if (!n.ok) throw new Error(`Failed to download Excel: ${n.statusText}`);
  const r = await n.blob();
  return (
    console.log(
      "%c✓ Excel downloaded successfully",
      "color: #10B981; font-weight: bold",
      `Size: ${r.size} bytes`,
    ),
    r
  );
}
const yd = C.createContext(void 0);
function ag({ children: e }) {
  const [t, n] = C.useState([]),
    r = (i, l) => {
      const s = Math.random().toString(36).substring(2, 9),
        a = { id: s, type: i, message: l };
      (n((u) => [...u, a]),
        setTimeout(() => {
          n((u) => u.filter((p) => p.id !== s));
        }, 5e3));
    },
    o = (i) => {
      n((l) => l.filter((s) => s.id !== i));
    };
  return c.jsxs(yd.Provider, {
    value: { showNotification: r },
    children: [
      e,
      c.jsx("div", {
        className: "fixed top-4 right-4 z-[60] space-y-3 pointer-events-none",
        children: t.map((i) =>
          c.jsx(ug, { notification: i, onClose: () => o(i.id) }, i.id),
        ),
      }),
    ],
  });
}
function Zo() {
  const e = C.useContext(yd);
  if (!e)
    throw new Error("useNotification must be used within NotificationProvider");
  return e;
}
function ug({ notification: e, onClose: t }) {
  const { type: n, message: r } = e;
  return c.jsx("div", {
    className: "animate-slide-in-right pointer-events-auto",
    style: { animation: "slideInRight 0.3s ease-out" },
    children: c.jsxs("div", {
      className: `min-w-[320px] max-w-md rounded-lg shadow-lg p-4 flex items-start gap-3 ${n === "error" ? "bg-red-50 border-2 border-red-200" : n === "success" ? "bg-green-50 border-2 border-green-200" : "bg-yellow-50 border-2 border-yellow-200"}`,
      children: [
        c.jsxs("div", {
          className: "flex-shrink-0 mt-0.5",
          children: [
            n === "error" &&
              c.jsx("svg", {
                className: "w-5 h-5 text-red-500",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: c.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                }),
              }),
            n === "success" &&
              c.jsx("svg", {
                className: "w-5 h-5 text-green-500",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: c.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                }),
              }),
            n === "warning" &&
              c.jsx("svg", {
                className: "w-5 h-5 text-yellow-500",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: c.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
                }),
              }),
          ],
        }),
        c.jsx("div", {
          className: "flex-1",
          children: c.jsx("p", {
            className: `text-sm font-medium ${n === "error" ? "text-red-800" : n === "success" ? "text-green-800" : "text-yellow-800"}`,
            children: r,
          }),
        }),
        c.jsx("button", {
          onClick: t,
          className: "flex-shrink-0 ml-2 hover:opacity-70 transition-opacity",
          children: c.jsx("svg", {
            className: `w-4 h-4 ${n === "error" ? "text-red-500" : n === "success" ? "text-green-500" : "text-yellow-500"}`,
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: c.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M6 18L18 6M6 6l12 12",
            }),
          }),
        }),
      ],
    }),
  });
}
function cg({ onMedicationFound: e, onMedicationNotFound: t }) {
  $t();
  const { showNotification: n } = Zo(),
    [r, o] = C.useState(""),
    [i, l] = C.useState(!1),
    [s, a] = C.useState(!1),
    u = C.useRef(null),
    p = async (v) => {
      const y = v.trim();
      if (!y) {
        n("warning", "請輸入條碼");
        return;
      }
      if (!Ss(y)) {
        n(
          "error",
          "條碼格式不正確，僅允許使用英文、數字及特殊符號 !#$%&'()*+,-./:;<=>?@[]^_`|~",
        );
        return;
      }
      a(!0);
      try {
        const w = await Mo(y);
        if (w.Result === "查無資料") t && t(y);
        else if (Array.isArray(w.Data) && w.Data.length > 0) {
          const P = w.Data[0];
          e && e(P);
        } else n("error", "無法查詢條碼，請稍後再試");
      } catch (w) {
        (console.error("Error searching barcode:", w),
          n("error", "系統錯誤，請稍後再試"));
      } finally {
        (a(!1), o(""));
      }
    },
    f = async (v) => {
      (l(!1), o(v));
      try {
        const y = await Mo(v);
        if (y.Result === "查無資料") t && t(v);
        else if (Array.isArray(y.Data) && y.Data.length > 0) {
          const w = y.Data[0];
          e && e(w);
        } else n("error", "無法查詢條碼，請稍後再試");
      } catch (y) {
        (console.error("Error searching barcode:", y),
          n("error", "系統錯誤，請稍後再試"));
      } finally {
        (o(""),
          setTimeout(() => {
            var y;
            (y = u.current) == null || y.focus();
          }, 100));
      }
    },
    g = (v) => {
      v.key === "Enter" && !s && p(r);
    };
  return c.jsxs(c.Fragment, {
    children: [
      c.jsx(md, { isOpen: i, onClose: () => l(!1), onScan: f, mode: "manual" }),
      c.jsx("div", {
        className:
          "bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4",
        children: c.jsxs("div", {
          className: "relative",
          children: [
            c.jsx("input", {
              ref: u,
              type: "text",
              value: r,
              onChange: (v) => o(v.target.value),
              onKeyPress: g,
              placeholder: "輸入或掃描條碼",
              disabled: s,
              className:
                "w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed",
            }),
            c.jsx("button", {
              onClick: () => l(!0),
              disabled: s,
              className:
                "absolute right-1 top-1/2 -translate-y-1/2 p-2 text-blue-400 hover:text-blue-600 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
              "aria-label": "Scan code",
              children: s
                ? c.jsx("div", {
                    className:
                      "animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600",
                  })
                : c.jsx(Po, { className: "w-6 h-6" }),
            }),
          ],
        }),
      }),
    ],
  });
}
function dg(e, t = 300, n = 80) {
  const r = e.toString(),
    o = t / (r.length * 12),
    i = r.length * o * 6;
  let l = (t - i) / 2;
  const s = [];
  for (let a = 0; a < r.length; a++)
    ((parseInt(r[a]) || 0) % 2 === 0 ? [2, 1, 1, 2] : [1, 2, 2, 1]).forEach(
      (f, g) => {
        (g % 2 === 0 &&
          s.push(
            `<rect x="${l}" y="10" width="${f * o}" height="${n - 30}" fill="black"/>`,
          ),
          (l += f * o));
      },
    );
  return `
    <svg width="${t}" height="${n}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="white"/>
      ${s.join("")}
      <text x="${t / 2}" y="${n - 5}" font-family="monospace" font-size="14" text-anchor="middle" fill="black">
        ${r}
      </text>
    </svg>
  `;
}
function vd({
  medication: e,
  isOpen: t,
  onClose: n,
  onDeleteBarcode: r,
  onAddBarcode: o,
}) {
  const { t: i } = $t(),
    { showNotification: l } = Zo(),
    [s, a] = C.useState(""),
    [u, p] = C.useState(!1),
    [f, g] = C.useState(!1),
    v = C.useRef(null);
  if (
    (C.useEffect(() => {
      t &&
        setTimeout(() => {
          var d;
          (d = v.current) == null || d.focus();
        }, 100);
    }, [t]),
    !t || !e)
  )
    return null;
  const y = async () => {
      if (!s.trim()) return;
      const d = s.trim();
      if (!Ss(d)) {
        (l(
          "error",
          "條碼格式不正確，僅允許使用英文、數字及特殊符號 !#$%&'()*+,-./:;<=>?@[]^_`|~",
        ),
          a(""));
        return;
      }
      g(!0);
      try {
        const h = await Mo(d);
        if (h.Result === "查無資料") {
          const x = { ...e, BARCODE: [...(e.BARCODE || []), d] },
            k = await oo(x);
          k.Code === 200 && k.Data
            ? (l("success", "條碼新增成功！"), a(""), o && o(d))
            : (l("error", k.Result || "條碼新增失敗"), a(""));
        } else if (Array.isArray(h.Data) && h.Data.length > 0) {
          const x = h.Data[0];
          (l("warning", `此條碼已建立於：${x.CHT_NAME} (${x.CODE})`), a(""));
        } else (l("error", "無法驗證條碼，請稍後再試"), a(""));
      } catch (h) {
        (console.error("Error adding barcode:", h),
          l("error", "系統錯誤，請稍後再試"),
          a(""));
      } finally {
        g(!1);
      }
    },
    w = (d) => {
      d.key === "Enter" && y();
    },
    P = async (d) => {
      (p(!1), g(!0));
      try {
        const h = await Mo(d);
        if (h.Result === "查無資料") {
          const x = { ...e, BARCODE: [...(e.BARCODE || []), d] },
            k = await oo(x);
          k.Code === 200 && k.Data
            ? (l("success", "條碼新增成功！"), o && o(d))
            : l("error", k.Result || "條碼新增失敗");
        } else if (Array.isArray(h.Data) && h.Data.length > 0) {
          const x = h.Data[0];
          l("warning", `此條碼已建立於：${x.CHT_NAME} (${x.CODE})`);
        } else l("error", "無法驗證條碼，請稍後再試");
      } catch (h) {
        (console.error("Error processing scanned barcode:", h),
          l("error", "系統錯誤，請稍後再試"));
      } finally {
        (g(!1),
          setTimeout(() => {
            var h;
            (h = v.current) == null || h.focus();
          }, 100));
      }
    },
    m = async (d) => {
      if (e) {
        g(!0);
        try {
          const h = (e.BARCODE || []).filter((E) => E !== d),
            x = { ...e, BARCODE: h },
            k = await oo(x);
          k.Code === 200 && k.Data
            ? (l("success", "條碼刪除成功！"), r && r(d))
            : l("error", k.Result || "條碼刪除失敗");
        } catch (h) {
          (console.error("Error deleting barcode:", h),
            l("error", "系統錯誤，請稍後再試"));
        } finally {
          g(!1);
        }
      }
    };
  return c.jsxs(c.Fragment, {
    children: [
      c.jsx(md, { isOpen: u, onClose: () => p(!1), onScan: P, mode: "manual" }),
      c.jsx("div", {
        className:
          "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50",
        onClick: n,
        children: c.jsxs("div", {
          className:
            "bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-hidden",
          onClick: (d) => d.stopPropagation(),
          children: [
            c.jsxs("div", {
              className:
                "flex items-center justify-between px-6 py-4 border-b border-gray-200",
              children: [
                c.jsx("h2", {
                  className: "text-2xl font-semibold text-gray-900",
                  children: i("barcode.modalTitle"),
                }),
                c.jsx("button", {
                  onClick: n,
                  className:
                    "p-2 hover:bg-gray-100 rounded-full transition-colors",
                  "aria-label": "Close",
                  children: c.jsx(xs, { className: "w-5 h-5 text-gray-500" }),
                }),
              ],
            }),
            c.jsxs("div", {
              className: "p-6 overflow-y-auto max-h-[calc(90vh-80px)]",
              children: [
                c.jsxs("div", {
                  className: "mb-6 space-y-3 bg-gray-50 p-4 rounded-lg",
                  children: [
                    c.jsx("div", {
                      children: c.jsx("p", {
                        className: "text-base text-gray-900 mt-1",
                        children: e.NAME,
                      }),
                    }),
                    c.jsx("div", {
                      children: c.jsx("p", {
                        className: "text-base text-gray-900 mt-1",
                        children: e.CHT_NAME,
                      }),
                    }),
                    c.jsx("div", {
                      children: c.jsx("p", {
                        className: "text-lg font-semibold text-gray-900 mt-1",
                        children: e.CODE,
                      }),
                    }),
                    e.STORAGE &&
                      e.STORAGE.length > 0 &&
                      c.jsx("div", {
                        className: "flex flex-wrap gap-2 pt-2",
                        children: e.STORAGE.map((d, h) =>
                          c.jsx(
                            "span",
                            {
                              className:
                                "inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200 shadow-sm",
                              children: d.info,
                            },
                            h,
                          ),
                        ),
                      }),
                  ],
                }),
                c.jsxs("div", {
                  className:
                    "mb-6 bg-blue-50 p-4 rounded-lg border border-blue-200",
                  children: [
                    c.jsx("label", {
                      htmlFor: "new-barcode",
                      className: "block text-sm font-medium text-gray-700 mb-2",
                      children: i("barcode.addNewBarcode"),
                    }),
                    c.jsxs("div", {
                      className: "flex gap-2",
                      children: [
                        c.jsxs("div", {
                          className: "flex-1 relative overflow-hidden",
                          children: [
                            c.jsx("input", {
                              ref: v,
                              id: "new-barcode",
                              type: "text",
                              value: s,
                              onChange: (d) => a(d.target.value),
                              onKeyPress: w,
                              placeholder: i("barcode.barcodePlaceholder"),
                              className:
                                "w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg outline-none",
                            }),
                            c.jsx("button", {
                              onClick: () => p(!0),
                              className:
                                "absolute right-1 top-1/2 -translate-y-1/2 p-2 text-blue-400 hover:text-blue-600 rounded transition-colors",
                              "aria-label": "Scan barcode",
                              children: c.jsx(Po, { className: "w-6 h-6" }),
                            }),
                          ],
                        }),
                        c.jsx("button", {
                          onClick: y,
                          disabled: !s.trim() || f,
                          className:
                            "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center gap-2 min-w-[100px]",
                          children: f
                            ? c.jsxs(c.Fragment, {
                                children: [
                                  c.jsx("div", {
                                    className:
                                      "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin",
                                  }),
                                  "處理中...",
                                ],
                              })
                            : c.jsxs(c.Fragment, {
                                children: [
                                  c.jsx(nh, { className: "w-5 h-5" }),
                                  i("barcode.addButton"),
                                ],
                              }),
                        }),
                      ],
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    c.jsx("h3", {
                      className: "text-lg font-semibold text-gray-900 mb-4",
                      children: i("barcode.barcodeList"),
                    }),
                    e.BARCODE && e.BARCODE.length > 0
                      ? e.BARCODE.map((d, h) =>
                          c.jsxs(
                            "div",
                            {
                              className:
                                "border border-gray-200 rounded-lg p-6 bg-white hover:shadow-md transition-shadow",
                              children: [
                                c.jsxs("div", {
                                  className: "flex justify-between mb-1",
                                  children: [
                                    c.jsxs("span", {
                                      className: "font-medium text-gray-700",
                                      children: [
                                        i("barcode.barcodeNumber"),
                                        " ",
                                        h + 1,
                                      ],
                                    }),
                                    c.jsx("button", {
                                      onClick: () => m(d),
                                      disabled: f,
                                      className:
                                        "p-2 hover:bg-red-200 rounded-lg bg-red-50 transition-colors group disabled:opacity-50 disabled:cursor-not-allowed",
                                      "aria-label": "Delete barcode",
                                      children: c.jsx(rh, {
                                        className:
                                          "w-5 h-5 text-red-400 group-hover:text-red-600",
                                      }),
                                    }),
                                  ],
                                }),
                                c.jsx("div", {
                                  className:
                                    "flex items-center justify-center bg-white p-4 rounded border border-gray-100",
                                  children: c.jsx("div", {
                                    dangerouslySetInnerHTML: {
                                      __html: dg(d, 280, 80),
                                    },
                                  }),
                                }),
                              ],
                            },
                            h,
                          ),
                        )
                      : c.jsx("div", {
                          className: "text-center py-8 text-gray-500",
                          children: c.jsx("p", {
                            children: i("barcode.noBarcodes"),
                          }),
                        }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function fg({ medications: e, isLoading: t }) {
  const { t: n } = $t(),
    [r, o] = C.useState(null),
    [i, l] = C.useState(!1),
    [s, a] = C.useState(e);
  C.useEffect(() => {
    a(e);
  }, [e]);
  const u = (v) => {
      const y = s.find((w) => w.GUID === v.GUID) || v;
      (o(y), l(!0));
    },
    p = () => {
      (l(!1), o(null));
    },
    f = (v) => {
      if (!r) return;
      const y = s.map((w) => {
        if (w.GUID === r.GUID) {
          const P = { ...w, BARCODE: [...(w.BARCODE || []), v] };
          return (o(P), P);
        }
        return w;
      });
      a(y);
    },
    g = (v) => {
      if (!r) return;
      const y = s.map((w) => {
        if (w.GUID === r.GUID) {
          const P = { ...w, BARCODE: (w.BARCODE || []).filter((m) => m !== v) };
          return (o(P), P);
        }
        return w;
      });
      a(y);
    };
  return t
    ? c.jsx("div", {
        className: "mx-auto px-4 sm:px-6 lg:px-8 py-12",
        children: c.jsx("div", {
          className: "flex justify-center items-center",
          children: c.jsx("div", {
            className:
              "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600",
          }),
        }),
      })
    : s.length === 0
      ? c.jsx("div", {
          className: "mx-auto px-4 sm:px-6 lg:px-8 pt-12  pb-16",
          children: c.jsxs("div", {
            className: "text-center text-gray-500",
            children: [
              c.jsx(th, { className: "w-16 h-16 mx-auto mb-4 text-gray-300" }),
              c.jsx("p", {
                className: "text-lg",
                children: n("medication.noResults"),
              }),
              c.jsx("p", {
                className: "text-sm mt-2",
                children: n("medication.adjustFilter"),
              }),
            ],
          }),
        })
      : c.jsxs("div", {
          className: "mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16",
          children: [
            c.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
              children: s.map((v, y) => {
                const w = v.BARCODE && v.BARCODE.length > 0;
                return c.jsx(
                  "div",
                  {
                    onClick: () => u(v),
                    className: `border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow cursor-pointer ${w ? "bg-green-100" : "bg-white"}`,
                    children: c.jsxs("div", {
                      className:
                        "space-y-2 flex flex-col justify-between items-between h-full",
                      children: [
                        c.jsxs("div", {
                          className: "flex-1",
                          children: [
                            c.jsxs("div", {
                              children: [
                                c.jsx("h3", {
                                  className:
                                    "text-lg font-semibold text-gray-900 mb-2",
                                  children: v.NAME,
                                }),
                                c.jsx("p", {
                                  className: "text-gray-600 mb-3",
                                  children: v.CHT_NAME,
                                }),
                              ],
                            }),
                            c.jsx("div", {
                              className: "space-y-2",
                              children: c.jsx("div", {
                                className: "flex justify-between",
                                children: c.jsx("span", {
                                  className: "text-gray-900 font-medium",
                                  children: v.CODE,
                                }),
                              }),
                            }),
                          ],
                        }),
                        v.STORAGE &&
                          v.STORAGE.length > 0 &&
                          c.jsx("div", {
                            className: "flex flex-wrap gap-2 mb-3",
                            children: v.STORAGE.map((P, m) =>
                              c.jsx(
                                "span",
                                {
                                  className:
                                    "inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200 shadow-sm",
                                  children: P.info,
                                },
                                m,
                              ),
                            ),
                          }),
                      ],
                    }),
                  },
                  v.GUID || y,
                );
              }),
            }),
            c.jsx(vd, {
              medication: r,
              isOpen: i,
              onClose: p,
              onAddBarcode: f,
              onDeleteBarcode: g,
            }),
          ],
        });
}
function pg() {
  const { t: e } = $t(),
    t = new Date().getFullYear();
  return c.jsx("footer", {
    className:
      "fixed bottom-0 w-full bg-white border-t border-gray-200 mt-auto",
    children: c.jsx("div", {
      className: "mx-auto px-4 sm:px-6 lg:px-8 py-2",
      children: c.jsx("p", {
        className: "text-center text-sm text-gray-600",
        children: e("footer.copyright", { year: t }),
      }),
    }),
  });
}
async function hg(e, t) {
  const n = { Data: { ID: e, Password: t } },
    r = _n(),
    o = await Er(`${r}/api/session/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(n),
    });
  if (!o.ok) throw new Error("Network response was not ok");
  const i = await o.json();
  if (i.Code !== 200) throw new Error(i.Result || "Login failed");
  return i;
}
function gg() {
  const { t: e } = $t(),
    { login: t } = ws(),
    [n, r] = C.useState(""),
    [o, i] = C.useState(""),
    [l, s] = C.useState(""),
    [a, u] = C.useState(!1),
    p = async (f) => {
      (f.preventDefault(), s(""), u(!0));
      try {
        const g = await hg(n, o);
        t(g.Data);
      } catch (g) {
        g instanceof Error ? s(g.message) : s(e("login.error"));
      } finally {
        u(!1);
      }
    };
  return c.jsx("div", {
    className:
      "fixed inset-0 bg-gray-100 flex items-center justify-center z-50",
    children: c.jsxs("div", {
      className: "w-full max-w-md px-6",
      children: [
        c.jsx("div", {
          className: "text-center mb-8",
          children: c.jsx("h1", {
            className: "text-3xl font-bold text-gray-800 mb-2",
            children: e("login.title"),
          }),
        }),
        c.jsx("div", {
          className: "bg-white rounded-2xl shadow-2xl p-8",
          children: c.jsxs("form", {
            onSubmit: p,
            className: "space-y-6",
            children: [
              c.jsxs("div", {
                children: [
                  c.jsx("label", {
                    htmlFor: "id",
                    className: "block text-base font-medium text-gray-700 mb-2",
                    children: e("login.id"),
                  }),
                  c.jsx("div", {
                    className: "relative",
                    children: c.jsx("input", {
                      id: "id",
                      type: "text",
                      value: n,
                      onChange: (f) => r(f.target.value),
                      className:
                        "block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base",
                      placeholder: e("login.idPlaceholder"),
                      required: !0,
                    }),
                  }),
                ],
              }),
              c.jsxs("div", {
                children: [
                  c.jsx("label", {
                    htmlFor: "password",
                    className: "block text-base font-medium text-gray-700 mb-2",
                    children: e("login.password"),
                  }),
                  c.jsx("div", {
                    className: "relative",
                    children: c.jsx("input", {
                      id: "password",
                      type: "password",
                      value: o,
                      onChange: (f) => i(f.target.value),
                      className:
                        "block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base",
                      placeholder: e("login.passwordPlaceholder"),
                      required: !0,
                    }),
                  }),
                ],
              }),
              l &&
                c.jsx("div", {
                  className: "bg-red-50 border border-red-200 rounded-lg p-3",
                  children: c.jsx("p", {
                    className: "text-base text-red-600",
                    children: l,
                  }),
                }),
              c.jsx("button", {
                type: "submit",
                disabled: a,
                className:
                  "w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium text-base hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                children: e(a ? "login.loggingIn" : "login.submit"),
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function mg({
  isOpen: e,
  onClose: t,
  barcodeValue: n,
  medications: r,
  onSuccess: o,
}) {
  const { showNotification: i } = Zo(),
    [l, s] = C.useState(""),
    [a, u] = C.useState(""),
    [p, f] = C.useState(""),
    [g, v] = C.useState(""),
    [y, w] = C.useState(!1),
    [P, m] = C.useState([]),
    [d, h] = C.useState([]),
    [x, k] = C.useState([]),
    [E, L] = C.useState([]),
    [j, D] = C.useState(null),
    T = C.useRef(null),
    Z = C.useRef(null),
    I = C.useRef(null),
    $ = C.useRef(null);
  (C.useEffect(() => {
    const O = (S) => {
      (T.current && !T.current.contains(S.target) && j === "name" && D(null),
        Z.current &&
          !Z.current.contains(S.target) &&
          j === "chtName" &&
          D(null),
        I.current && !I.current.contains(S.target) && j === "code" && D(null),
        $.current &&
          !$.current.contains(S.target) &&
          j === "materialCode" &&
          D(null));
    };
    return (
      document.addEventListener("mousedown", O),
      () => document.removeEventListener("mousedown", O)
    );
  }, [j]),
    C.useEffect(() => {
      if (l.trim()) {
        const O = l.toLowerCase(),
          S = r
            .filter((R) => R.NAME.toLowerCase().includes(O))
            .slice(0, 10)
            .map((R) => ({ medication: R, matchField: "NAME" }));
        m(S);
      } else m([]);
    }, [l, r]),
    C.useEffect(() => {
      if (a.trim()) {
        const O = a.toLowerCase(),
          S = r
            .filter((R) => R.CHT_NAME.toLowerCase().includes(O))
            .slice(0, 10)
            .map((R) => ({ medication: R, matchField: "CHT_NAME" }));
        h(S);
      } else h([]);
    }, [a, r]),
    C.useEffect(() => {
      if (p.trim()) {
        const O = p.toLowerCase(),
          S = r
            .filter((R) => R.CODE.toLowerCase().includes(O))
            .slice(0, 10)
            .map((R) => ({ medication: R, matchField: "CODE" }));
        k(S);
      } else k([]);
    }, [p, r]),
    C.useEffect(() => {
      if (g.trim()) {
        const O = g.toLowerCase(),
          S = r
            .filter(
              (R) =>
                R.MATERIAL_CODE && R.MATERIAL_CODE.toLowerCase().includes(O),
            )
            .slice(0, 10)
            .map((R) => ({ medication: R, matchField: "MATERIAL_CODE" }));
        L(S);
      } else L([]);
    }, [g, r]));
  const z = (O) => {
      (s(O.NAME), u(O.CHT_NAME), f(O.CODE), v(O.MATERIAL_CODE || ""), D(null));
    },
    H = () => {
      (s(""), u(""), f(""), v(""), t());
    },
    q = async () => {
      if (!Ss(n)) {
        i("error", "條碼格式不正確");
        return;
      }
      if (!p.trim()) {
        i("error", "請選擇或輸入藥碼");
        return;
      }
      const O = r.find((S) => S.CODE === p && S.NAME === l && S.CHT_NAME === a);
      if (!O) {
        i("error", "找不到對應的藥品，請確認輸入資料是否正確");
        return;
      }
      if (O.BARCODE && O.BARCODE.includes(n)) {
        i("warning", "此條碼已存在於該藥品");
        return;
      }
      w(!0);
      try {
        const S = { ...O, BARCODE: [...(O.BARCODE || []), n] },
          R = await oo(S);
        R.Code === 200 && R.Data
          ? (i("success", "條碼建立成功！"), H(), o && o())
          : i("error", R.Result || "條碼建立失敗");
      } catch (S) {
        (console.error("Error creating barcode:", S),
          i("error", "系統錯誤，請稍後再試"));
      } finally {
        w(!1);
      }
    };
  return e
    ? c.jsx("div", {
        className:
          "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
        onClick: H,
        children: c.jsxs("div", {
          className:
            "bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden",
          onClick: (O) => O.stopPropagation(),
          children: [
            c.jsxs("div", {
              className:
                "flex items-center justify-between px-6 py-4 border-b border-gray-200",
              children: [
                c.jsx("h2", {
                  className: "text-2xl font-semibold text-gray-900",
                  children: "條碼建立",
                }),
                c.jsx("button", {
                  onClick: H,
                  className:
                    "p-2 hover:bg-gray-100 rounded-full transition-colors",
                  "aria-label": "Close",
                  children: c.jsx(xs, { className: "w-5 h-5 text-gray-500" }),
                }),
              ],
            }),
            c.jsx("div", {
              className: "p-6 overflow-y-auto max-h-[calc(90vh-140px)]",
              children: c.jsxs("div", {
                className: "space-y-4",
                children: [
                  c.jsxs("div", {
                    children: [
                      c.jsx("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: "條碼",
                      }),
                      c.jsx("input", {
                        type: "text",
                        value: n,
                        disabled: !0,
                        className:
                          "w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed",
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    ref: T,
                    className: "relative",
                    children: [
                      c.jsx("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: "藥名",
                      }),
                      c.jsx("input", {
                        type: "text",
                        value: l,
                        onChange: (O) => s(O.target.value),
                        onFocus: () => D("name"),
                        placeholder: "輸入藥名進行搜尋",
                        className:
                          "w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                      }),
                      j === "name" &&
                        P.length > 0 &&
                        c.jsx("div", {
                          className:
                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                          children: P.map((O, S) =>
                            c.jsxs(
                              "div",
                              {
                                onClick: () => z(O.medication),
                                className:
                                  "px-4 py-2 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                children: [
                                  c.jsx("div", {
                                    className: "font-medium text-gray-900",
                                    children: O.medication.NAME,
                                  }),
                                  c.jsx("div", {
                                    className: "text-sm text-gray-600",
                                    children: O.medication.CHT_NAME,
                                  }),
                                  c.jsxs("div", {
                                    className: "text-xs text-gray-500",
                                    children: ["藥碼: ", O.medication.CODE],
                                  }),
                                ],
                              },
                              S,
                            ),
                          ),
                        }),
                    ],
                  }),
                  c.jsxs("div", {
                    ref: I,
                    className: "relative",
                    children: [
                      c.jsx("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: "藥碼",
                      }),
                      c.jsx("input", {
                        type: "text",
                        value: p,
                        onChange: (O) => f(O.target.value),
                        onFocus: () => D("code"),
                        placeholder: "輸入藥碼進行搜尋",
                        className:
                          "w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                      }),
                      j === "code" &&
                        x.length > 0 &&
                        c.jsx("div", {
                          className:
                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                          children: x.map((O, S) =>
                            c.jsxs(
                              "div",
                              {
                                onClick: () => z(O.medication),
                                className:
                                  "px-4 py-2 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                children: [
                                  c.jsx("div", {
                                    className: "font-medium text-gray-900",
                                    children: O.medication.CODE,
                                  }),
                                  c.jsx("div", {
                                    className: "text-sm text-gray-600",
                                    children: O.medication.NAME,
                                  }),
                                  c.jsx("div", {
                                    className: "text-xs text-gray-500",
                                    children: O.medication.CHT_NAME,
                                  }),
                                ],
                              },
                              S,
                            ),
                          ),
                        }),
                    ],
                  }),
                  c.jsxs("div", {
                    ref: Z,
                    className: "relative",
                    children: [
                      c.jsx("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: "中文名",
                      }),
                      c.jsx("input", {
                        type: "text",
                        value: a,
                        onChange: (O) => u(O.target.value),
                        onFocus: () => D("chtName"),
                        placeholder: "輸入中文名進行搜尋",
                        className:
                          "w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                      }),
                      j === "chtName" &&
                        d.length > 0 &&
                        c.jsx("div", {
                          className:
                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                          children: d.map((O, S) =>
                            c.jsxs(
                              "div",
                              {
                                onClick: () => z(O.medication),
                                className:
                                  "px-4 py-2 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                children: [
                                  c.jsx("div", {
                                    className: "font-medium text-gray-900",
                                    children: O.medication.CHT_NAME,
                                  }),
                                  c.jsx("div", {
                                    className: "text-sm text-gray-600",
                                    children: O.medication.NAME,
                                  }),
                                  c.jsxs("div", {
                                    className: "text-xs text-gray-500",
                                    children: ["藥碼: ", O.medication.CODE],
                                  }),
                                ],
                              },
                              S,
                            ),
                          ),
                        }),
                    ],
                  }),
                  c.jsxs("div", {
                    ref: $,
                    className: "relative",
                    children: [
                      c.jsx("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: "料號",
                      }),
                      c.jsx("input", {
                        type: "text",
                        value: g,
                        onChange: (O) => v(O.target.value),
                        onFocus: () => D("materialCode"),
                        placeholder: "輸入料號進行搜尋",
                        className:
                          "w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                      }),
                      j === "materialCode" &&
                        E.length > 0 &&
                        c.jsx("div", {
                          className:
                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                          children: E.map((O, S) =>
                            c.jsxs(
                              "div",
                              {
                                onClick: () => z(O.medication),
                                className:
                                  "px-4 py-2 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                children: [
                                  c.jsx("div", {
                                    className: "font-medium text-gray-900",
                                    children: O.medication.MATERIAL_CODE,
                                  }),
                                  c.jsx("div", {
                                    className: "text-sm text-gray-600",
                                    children: O.medication.NAME,
                                  }),
                                  c.jsx("div", {
                                    className: "text-xs text-gray-500",
                                    children: O.medication.CHT_NAME,
                                  }),
                                ],
                              },
                              S,
                            ),
                          ),
                        }),
                    ],
                  }),
                ],
              }),
            }),
            c.jsxs("div", {
              className:
                "px-6 py-4 border-t border-gray-200 flex gap-3 justify-end",
              children: [
                c.jsx("button", {
                  onClick: H,
                  disabled: y,
                  className:
                    "px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                  children: "取消",
                }),
                c.jsx("button", {
                  onClick: q,
                  disabled: y,
                  className:
                    "px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2",
                  children: y
                    ? c.jsxs(c.Fragment, {
                        children: [
                          c.jsx("div", {
                            className:
                              "animate-spin rounded-full h-4 w-4 border-b-2 border-white",
                          }),
                          "處理中...",
                        ],
                      })
                    : "建立",
                }),
              ],
            }),
          ],
        }),
      })
    : null;
}
function yg() {
  const { isAuthenticated: e } = ws(),
    { showNotification: t } = Zo(),
    [n, r] = C.useState([]),
    [o, i] = C.useState([]),
    [l, s] = C.useState(!0),
    [a, u] = C.useState(!1),
    [p, f] = C.useState("all"),
    [g, v] = C.useState(""),
    [y, w] = C.useState(null),
    [P, m] = C.useState(null),
    [d, h] = C.useState(null),
    [x, k] = C.useState("code"),
    [E, L] = C.useState("asc"),
    [j, D] = C.useState(null),
    [T, Z] = C.useState(!1),
    [I, $] = C.useState(!1),
    [z, H] = C.useState(""),
    [q, O] = C.useState(!1),
    [S, R] = C.useState(!1);
  (C.useEffect(() => {
    (async () => {
      try {
        (await ng(), u(!0));
      } catch (b) {
        console.error("Failed to load configuration:", b);
      }
    })();
  }, []),
    C.useEffect(() => {
      a && e && F();
    }, [a, e]),
    C.useEffect(() => {
      A();
    }, [n, p, g, y, P, d, x, E]));
  const F = async () => {
      try {
        s(!0);
        const U = await ig();
        (r(U), i(U));
      } catch (U) {
        console.error("Error fetching medications:", U);
      } finally {
        s(!1);
      }
    },
    A = () => {
      let U = [...n];
      if (
        (p !== "all" && (U = U.filter((b) => b.group_name === p)), g.trim())
      ) {
        const b = g.toLowerCase().trim();
        U = U.filter(
          (G) =>
            G.CODE.toLowerCase().includes(b) ||
            G.NAME.toLowerCase().includes(b) ||
            G.CHT_NAME.toLowerCase().includes(b) ||
            (G.BARCODE && G.BARCODE.some((Xe) => Xe.toLowerCase().includes(b))),
        );
      }
      (y &&
        (y === "開檔"
          ? (U = U.filter((b) => b.FILE_STATUS !== "關檔中"))
          : y === "關檔" && (U = U.filter((b) => b.FILE_STATUS === "關檔中"))),
        P && (U = U.filter((b) => b.TORW === P)),
        d &&
          (d === "has"
            ? (U = U.filter((b) => b.BARCODE && b.BARCODE.length > 0))
            : d === "none" &&
              (U = U.filter((b) => !b.BARCODE || b.BARCODE.length === 0))),
        U.sort((b, G) => {
          let Xe, ke;
          return (
            x === "code"
              ? ((Xe = b.CODE), (ke = G.CODE))
              : x === "name"
                ? ((Xe = b.NAME), (ke = G.NAME))
                : x === "chtName"
                  ? ((Xe = b.CHT_NAME), (ke = G.CHT_NAME))
                  : ((Xe =
                      b.STORAGE && b.STORAGE.length > 0
                        ? b.STORAGE[0].info
                        : ""),
                    (ke =
                      G.STORAGE && G.STORAGE.length > 0
                        ? G.STORAGE[0].info
                        : "")),
            E === "asc" ? Xe.localeCompare(ke) : ke.localeCompare(Xe)
          );
        }),
        i(U));
    },
    K = () => {
      A();
    },
    $e = () => {
      const U = [
          ["藥碼", "藥名", "中文名", "條碼"],
          ...o.map((ke) => [
            ke.CODE,
            ke.NAME,
            ke.CHT_NAME,
            ke.BARCODE ? ke.BARCODE.join(";") : "",
          ]),
        ].map((ke) => ke.join(",")).join(`
`),
        b = new Blob(["\uFEFF" + U], { type: "text/csv;charset=utf-8;" }),
        G = document.createElement("a"),
        Xe = URL.createObjectURL(b);
      (G.setAttribute("href", Xe),
        G.setAttribute(
          "download",
          `medications_${new Date().toISOString().split("T")[0]}.csv`,
        ),
        (G.style.visibility = "hidden"),
        document.body.appendChild(G),
        G.click(),
        document.body.removeChild(G));
    };
  if (!a)
    return c.jsx("div", {
      className:
        "min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center",
      children: c.jsxs("div", {
        className: "text-center",
        children: [
          c.jsx("div", {
            className:
              "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4",
          }),
          c.jsx("p", {
            className: "text-gray-600",
            children: "Loading configuration...",
          }),
        ],
      }),
    });
  if (!e) return c.jsx(gg, {});
  const Fe = (U) => {
      (D(U), Z(!0));
    },
    ht = (U) => {
      (H(U), $(!0));
    },
    rt = () => {
      (Z(!1), D(null));
    },
    Zt = () => {
      ($(!1), H(""));
    },
    qo = () => {
      F();
    },
    xd = async (U) => {
      O(!0);
      try {
        const b = await lg(U);
        b.Code === 200
          ? (t("success", "Excel 上傳成功！"), await F())
          : t("error", b.Result || "Excel 上傳失敗");
      } catch (b) {
        (console.error("Error uploading Excel:", b),
          t("error", "上傳失敗，請稍後再試"));
      } finally {
        O(!1);
      }
    },
    wd = async () => {
      R(!0);
      try {
        const U = await sg(o),
          b = window.URL.createObjectURL(U),
          G = document.createElement("a");
        ((G.href = b),
          (G.download = `medication_barcodes_${new Date().toISOString().split("T")[0]}.xlsx`),
          document.body.appendChild(G),
          G.click(),
          document.body.removeChild(G),
          window.URL.revokeObjectURL(b),
          t("success", "Excel 下載成功！"));
      } catch (U) {
        (console.error("Error downloading Excel:", U),
          t("error", "下載失敗，請稍後再試"));
      } finally {
        R(!1);
      }
    };
  return c.jsxs("div", {
    className: "min-h-screen flex flex-col",
    children: [
      c.jsx(Zh, {}),
      c.jsxs("div", {
        className: "mx-auto px-4 sm:px-6 lg:px-8 w-full",
        children: [
          c.jsx(cg, { onMedicationFound: Fe, onMedicationNotFound: ht }),
          c.jsx(eg, {
            fileStatusFilter: y,
            setFileStatusFilter: w,
            torwFilter: P,
            setTorwFilter: m,
            barcodeFilter: d,
            setBarcodeFilter: h,
          }),
          c.jsx(tg, { sortBy: x, setSortBy: k, sortOrder: E, setSortOrder: L }),
          c.jsx(qh, {
            resultCount: o.length,
            groupFilter: p,
            setGroupFilter: f,
            searchQuery: g,
            setSearchQuery: v,
            onSearch: K,
            onExport: $e,
            onUploadExcel: xd,
            onDownloadExcel: wd,
            isUploading: q,
            isDownloading: S,
          }),
        ],
      }),
      c.jsx("div", {
        className: "flex-1",
        children: c.jsx(fg, { medications: o, isLoading: l }),
      }),
      c.jsx(pg, {}),
      c.jsx(vd, {
        medication: j,
        isOpen: T,
        onClose: rt,
        onAddBarcode: qo,
        onDeleteBarcode: qo,
      }),
      c.jsx(mg, {
        isOpen: I,
        onClose: Zt,
        barcodeValue: z,
        medications: n,
        onSuccess: qo,
      }),
    ],
  });
}
const vg = {
    translation: {
      nav: {
        title: "條碼建置",
        subtitle: "鴻森智能科技 - 好好",
        language: "繁體中文",
        logout: "登出",
      },
      login: {
        title: "條碼建置",
        subtitle: "請登入以繼續",
        id: "帳號",
        idPlaceholder: "請輸入帳號",
        password: "密碼",
        passwordPlaceholder: "請輸入密碼",
        submit: "登入",
        loggingIn: "登入中...",
        error: "登入失敗，請重試。",
      },
      search: {
        results: "搜尋結果",
        count: "筆",
        allGroups: "全部藥品群組",
        placeholder: "搜尋藥碼、藥名、料號...",
        searchButton: "搜尋",
        export: "匯出",
      },
      medication: {
        code: "藥碼：",
        material: "料號：",
        barcode: "條碼：",
        noResults: "目前沒有搜尋結果",
        adjustFilter: "請調整搜尋條件或篩選器",
      },
      barcode: {
        modalTitle: "藥品條碼資訊",
        medicationCode: "藥碼",
        englishName: "藥品名稱",
        chineseName: "中文名稱",
        barcodeList: "條碼列表",
        barcodeNumber: "條碼",
        noBarcodes: "此藥品尚無條碼資料",
        addNewBarcode: "新增條碼",
        barcodePlaceholder: "請輸入條碼號碼",
        addButton: "新增",
      },
      scanner: {
        title: "條碼掃描",
        instruction: "請將條碼對準鏡頭",
        supportedFormats: "支援一維條碼與二維條碼（QR Code）",
        focusHint: "點擊畫面回對焦",
        cameraError: "無法存取相機，請確認已授予相機權限",
      },
      footer: { copyright: "Copyright ©{{year}} 鴻森智能科技" },
      groups: {
        painRelief: "止痛退燒藥",
        antibiotic: "抗生素",
        vitamin: "維他命",
        cardiovascular: "心血管藥物",
      },
    },
  },
  xg = {
    translation: {
      nav: {
        title: "Barcode Management",
        subtitle: "Hongsen Smart Technology - Clinical Pharmacy",
        language: "English",
        logout: "Logout",
      },
      login: {
        title: "Barcode Management",
        subtitle: "Please sign in to continue",
        id: "User ID",
        idPlaceholder: "Enter your ID",
        password: "Password",
        passwordPlaceholder: "Enter your password",
        submit: "Sign In",
        loggingIn: "Signing In...",
        error: "Login failed. Please try again.",
      },
      search: {
        results: "Search Results",
        count: "items",
        allGroups: "All Medication Groups",
        placeholder: "Search by code, name, material number...",
        searchButton: "Search",
        export: "Export",
      },
      medication: {
        code: "Code:",
        material: "Material No:",
        barcode: "Barcode:",
        noResults: "No search results found",
        adjustFilter: "Please adjust your search criteria or filters",
      },
      barcode: {
        modalTitle: "Medication Barcode Information",
        medicationCode: "Medication Code",
        englishName: "Medication Name",
        chineseName: "Chinese Name",
        barcodeList: "Barcode List",
        barcodeNumber: "Barcode",
        noBarcodes: "No barcode data available for this medication",
        addNewBarcode: "Add New Barcode",
        barcodePlaceholder: "Enter barcode number",
        addButton: "Add",
      },
      scanner: {
        title: "Barcode Scanner",
        instruction: "Point the barcode at the camera",
        supportedFormats: "Supports 1D and 2D barcodes (QR Code)",
        focusHint: "Click screen to refocus",
        cameraError:
          "Unable to access camera, please ensure camera permissions are granted",
      },
      footer: { copyright: "Copyright ©{{year}} Hongsen Smart Technology" },
      groups: {
        painRelief: "Pain Relief",
        antibiotic: "Antibiotic",
        vitamin: "Vitamin",
        cardiovascular: "Cardiovascular",
      },
    },
  },
  wg = { "zh-TW": vg, en: xg };
Se.use($h).init({
  resources: wg,
  lng: "zh-TW",
  fallbackLng: "zh-TW",
  interpolation: { escapeValue: !1 },
});
ld(document.getElementById("root")).render(
  c.jsx(C.StrictMode, {
    children: c.jsx(Jh, { children: c.jsx(ag, { children: c.jsx(yg, {}) }) }),
  }),
);
