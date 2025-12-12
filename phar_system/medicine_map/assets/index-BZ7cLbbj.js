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
function Sf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Tc = { exports: {} },
  Lo = {},
  Rc = { exports: {} },
  Ge = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Is = Symbol.for("react.element"),
  Cf = Symbol.for("react.portal"),
  Df = Symbol.for("react.fragment"),
  kf = Symbol.for("react.strict_mode"),
  _f = Symbol.for("react.profiler"),
  Mf = Symbol.for("react.provider"),
  Ef = Symbol.for("react.context"),
  If = Symbol.for("react.forward_ref"),
  Pf = Symbol.for("react.suspense"),
  Tf = Symbol.for("react.memo"),
  Rf = Symbol.for("react.lazy"),
  bi = Symbol.iterator;
function $f(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (bi && e[bi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var $c = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ac = Object.assign,
  Oc = {};
function Lr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Oc),
    (this.updater = n || $c);
}
Lr.prototype.isReactComponent = {};
Lr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Lr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Uc() {}
Uc.prototype = Lr.prototype;
function Sa(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Oc),
    (this.updater = n || $c);
}
var Ca = (Sa.prototype = new Uc());
Ca.constructor = Sa;
Ac(Ca, Lr.prototype);
Ca.isPureReactComponent = !0;
var Ni = Array.isArray,
  Lc = Object.prototype.hasOwnProperty,
  Da = { current: null },
  Gc = { key: !0, ref: !0, __self: !0, __source: !0 };
function zc(e, t, n) {
  var s,
    o = {},
    l = null,
    a = null;
  if (t != null)
    for (s in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      Lc.call(t, s) && !Gc.hasOwnProperty(s) && (o[s] = t[s]);
  var i = arguments.length - 2;
  if (i === 1) o.children = n;
  else if (1 < i) {
    for (var c = Array(i), g = 0; g < i; g++) c[g] = arguments[g + 2];
    o.children = c;
  }
  if (e && e.defaultProps)
    for (s in ((i = e.defaultProps), i)) o[s] === void 0 && (o[s] = i[s]);
  return {
    $$typeof: Is,
    type: e,
    key: l,
    ref: a,
    props: o,
    _owner: Da.current,
  };
}
function Af(e, t) {
  return {
    $$typeof: Is,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ka(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Is;
}
function Of(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ji = /\/+/g;
function ol(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Of("" + e.key)
    : t.toString(36);
}
function to(e, t, n, s, o) {
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
          case Is:
          case Cf:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = s === "" ? "." + ol(a, 0) : s),
      Ni(o)
        ? ((n = ""),
          e != null && (n = e.replace(ji, "$&/") + "/"),
          to(o, t, n, "", function (g) {
            return g;
          }))
        : o != null &&
          (ka(o) &&
            (o = Af(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(ji, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (s = s === "" ? "." : s + ":"), Ni(e)))
    for (var i = 0; i < e.length; i++) {
      l = e[i];
      var c = s + ol(l, i);
      a += to(l, t, n, c, o);
    }
  else if (((c = $f(e)), typeof c == "function"))
    for (e = c.call(e), i = 0; !(l = e.next()).done; )
      (l = l.value), (c = s + ol(l, i++)), (a += to(l, t, n, c, o));
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
function Os(e, t, n) {
  if (e == null) return e;
  var s = [],
    o = 0;
  return (
    to(e, s, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    s
  );
}
function Uf(e) {
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
var Ct = { current: null },
  no = { transition: null },
  Lf = {
    ReactCurrentDispatcher: Ct,
    ReactCurrentBatchConfig: no,
    ReactCurrentOwner: Da,
  };
function Bc() {
  throw Error("act(...) is not supported in production builds of React.");
}
Ge.Children = {
  map: Os,
  forEach: function (e, t, n) {
    Os(
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
      Os(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Os(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ka(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Ge.Component = Lr;
Ge.Fragment = Df;
Ge.Profiler = _f;
Ge.PureComponent = Sa;
Ge.StrictMode = kf;
Ge.Suspense = Pf;
Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lf;
Ge.act = Bc;
Ge.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var s = Ac({}, e.props),
    o = e.key,
    l = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (a = Da.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var i = e.type.defaultProps;
    for (c in t)
      Lc.call(t, c) &&
        !Gc.hasOwnProperty(c) &&
        (s[c] = t[c] === void 0 && i !== void 0 ? i[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) s.children = n;
  else if (1 < c) {
    i = Array(c);
    for (var g = 0; g < c; g++) i[g] = arguments[g + 2];
    s.children = i;
  }
  return { $$typeof: Is, type: e.type, key: o, ref: l, props: s, _owner: a };
};
Ge.createContext = function (e) {
  return (
    (e = {
      $$typeof: Ef,
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
Ge.createElement = zc;
Ge.createFactory = function (e) {
  var t = zc.bind(null, e);
  return (t.type = e), t;
};
Ge.createRef = function () {
  return { current: null };
};
Ge.forwardRef = function (e) {
  return { $$typeof: If, render: e };
};
Ge.isValidElement = ka;
Ge.lazy = function (e) {
  return { $$typeof: Rf, _payload: { _status: -1, _result: e }, _init: Uf };
};
Ge.memo = function (e, t) {
  return { $$typeof: Tf, type: e, compare: t === void 0 ? null : t };
};
Ge.startTransition = function (e) {
  var t = no.transition;
  no.transition = {};
  try {
    e();
  } finally {
    no.transition = t;
  }
};
Ge.unstable_act = Bc;
Ge.useCallback = function (e, t) {
  return Ct.current.useCallback(e, t);
};
Ge.useContext = function (e) {
  return Ct.current.useContext(e);
};
Ge.useDebugValue = function () {};
Ge.useDeferredValue = function (e) {
  return Ct.current.useDeferredValue(e);
};
Ge.useEffect = function (e, t) {
  return Ct.current.useEffect(e, t);
};
Ge.useId = function () {
  return Ct.current.useId();
};
Ge.useImperativeHandle = function (e, t, n) {
  return Ct.current.useImperativeHandle(e, t, n);
};
Ge.useInsertionEffect = function (e, t) {
  return Ct.current.useInsertionEffect(e, t);
};
Ge.useLayoutEffect = function (e, t) {
  return Ct.current.useLayoutEffect(e, t);
};
Ge.useMemo = function (e, t) {
  return Ct.current.useMemo(e, t);
};
Ge.useReducer = function (e, t, n) {
  return Ct.current.useReducer(e, t, n);
};
Ge.useRef = function (e) {
  return Ct.current.useRef(e);
};
Ge.useState = function (e) {
  return Ct.current.useState(e);
};
Ge.useSyncExternalStore = function (e, t, n) {
  return Ct.current.useSyncExternalStore(e, t, n);
};
Ge.useTransition = function () {
  return Ct.current.useTransition();
};
Ge.version = "18.3.1";
Rc.exports = Ge;
var f = Rc.exports;
const mo = Sf(f);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gf = f,
  zf = Symbol.for("react.element"),
  Bf = Symbol.for("react.fragment"),
  Ff = Object.prototype.hasOwnProperty,
  Hf = Gf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Vf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fc(e, t, n) {
  var s,
    o = {},
    l = null,
    a = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (s in t) Ff.call(t, s) && !Vf.hasOwnProperty(s) && (o[s] = t[s]);
  if (e && e.defaultProps)
    for (s in ((t = e.defaultProps), t)) o[s] === void 0 && (o[s] = t[s]);
  return {
    $$typeof: zf,
    type: e,
    key: l,
    ref: a,
    props: o,
    _owner: Hf.current,
  };
}
Lo.Fragment = Bf;
Lo.jsx = Fc;
Lo.jsxs = Fc;
Tc.exports = Lo;
var r = Tc.exports,
  Hc = { exports: {} },
  zt = {},
  Vc = { exports: {} },
  qc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(k, _) {
    var J = k.length;
    k.push(_);
    e: for (; 0 < J; ) {
      var G = (J - 1) >>> 1,
        oe = k[G];
      if (0 < o(oe, _)) (k[G] = _), (k[J] = oe), (J = G);
      else break e;
    }
  }
  function n(k) {
    return k.length === 0 ? null : k[0];
  }
  function s(k) {
    if (k.length === 0) return null;
    var _ = k[0],
      J = k.pop();
    if (J !== _) {
      k[0] = J;
      e: for (var G = 0, oe = k.length, we = oe >>> 1; G < we; ) {
        var me = 2 * (G + 1) - 1,
          V = k[me],
          he = me + 1,
          X = k[he];
        if (0 > o(V, J))
          he < oe && 0 > o(X, V)
            ? ((k[G] = X), (k[he] = J), (G = he))
            : ((k[G] = V), (k[me] = J), (G = me));
        else if (he < oe && 0 > o(X, J)) (k[G] = X), (k[he] = J), (G = he);
        else break e;
      }
    }
    return _;
  }
  function o(k, _) {
    var J = k.sortIndex - _.sortIndex;
    return J !== 0 ? J : k.id - _.id;
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
    y = 1,
    h = null,
    p = 3,
    b = !1,
    N = !1,
    S = !1,
    A = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    u = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(k) {
    for (var _ = n(g); _ !== null; ) {
      if (_.callback === null) s(g);
      else if (_.startTime <= k)
        s(g), (_.sortIndex = _.expirationTime), t(c, _);
      else break;
      _ = n(g);
    }
  }
  function C(k) {
    if (((S = !1), m(k), !N))
      if (n(c) !== null) (N = !0), w(P);
      else {
        var _ = n(g);
        _ !== null && j(C, _.startTime - k);
      }
  }
  function P(k, _) {
    (N = !1), S && ((S = !1), d(z), (z = -1)), (b = !0);
    var J = p;
    try {
      for (
        m(_), h = n(c);
        h !== null && (!(h.expirationTime > _) || (k && !se()));

      ) {
        var G = h.callback;
        if (typeof G == "function") {
          (h.callback = null), (p = h.priorityLevel);
          var oe = G(h.expirationTime <= _);
          (_ = e.unstable_now()),
            typeof oe == "function" ? (h.callback = oe) : h === n(c) && s(c),
            m(_);
        } else s(c);
        h = n(c);
      }
      if (h !== null) var we = !0;
      else {
        var me = n(g);
        me !== null && j(C, me.startTime - _), (we = !1);
      }
      return we;
    } finally {
      (h = null), (p = J), (b = !1);
    }
  }
  var D = !1,
    T = null,
    z = -1,
    E = 5,
    O = -1;
  function se() {
    return !(e.unstable_now() - O < E);
  }
  function fe() {
    if (T !== null) {
      var k = e.unstable_now();
      O = k;
      var _ = !0;
      try {
        _ = T(!0, k);
      } finally {
        _ ? M() : ((D = !1), (T = null));
      }
    } else D = !1;
  }
  var M;
  if (typeof u == "function")
    M = function () {
      u(fe);
    };
  else if (typeof MessageChannel < "u") {
    var v = new MessageChannel(),
      F = v.port2;
    (v.port1.onmessage = fe),
      (M = function () {
        F.postMessage(null);
      });
  } else
    M = function () {
      A(fe, 0);
    };
  function w(k) {
    (T = k), D || ((D = !0), M());
  }
  function j(k, _) {
    z = A(function () {
      k(e.unstable_now());
    }, _);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (k) {
      k.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      N || b || ((N = !0), w(P));
    }),
    (e.unstable_forceFrameRate = function (k) {
      0 > k || 125 < k
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (E = 0 < k ? Math.floor(1e3 / k) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (k) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = p;
      }
      var J = p;
      p = _;
      try {
        return k();
      } finally {
        p = J;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (k, _) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var J = p;
      p = k;
      try {
        return _();
      } finally {
        p = J;
      }
    }),
    (e.unstable_scheduleCallback = function (k, _, J) {
      var G = e.unstable_now();
      switch (
        (typeof J == "object" && J !== null
          ? ((J = J.delay), (J = typeof J == "number" && 0 < J ? G + J : G))
          : (J = G),
        k)
      ) {
        case 1:
          var oe = -1;
          break;
        case 2:
          oe = 250;
          break;
        case 5:
          oe = 1073741823;
          break;
        case 4:
          oe = 1e4;
          break;
        default:
          oe = 5e3;
      }
      return (
        (oe = J + oe),
        (k = {
          id: y++,
          callback: _,
          priorityLevel: k,
          startTime: J,
          expirationTime: oe,
          sortIndex: -1,
        }),
        J > G
          ? ((k.sortIndex = J),
            t(g, k),
            n(c) === null &&
              k === n(g) &&
              (S ? (d(z), (z = -1)) : (S = !0), j(C, J - G)))
          : ((k.sortIndex = oe), t(c, k), N || b || ((N = !0), w(P))),
        k
      );
    }),
    (e.unstable_shouldYield = se),
    (e.unstable_wrapCallback = function (k) {
      var _ = p;
      return function () {
        var J = p;
        p = _;
        try {
          return k.apply(this, arguments);
        } finally {
          p = J;
        }
      };
    });
})(qc);
Vc.exports = qc;
var qf = Vc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wf = f,
  Gt = qf;
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
var Wc = new Set(),
  ms = {};
function or(e, t) {
  Ir(e, t), Ir(e + "Capture", t);
}
function Ir(e, t) {
  for (ms[e] = t, e = 0; e < t.length; e++) Wc.add(t[e]);
}
var xn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Il = Object.prototype.hasOwnProperty,
  Yf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Si = {},
  Ci = {};
function Xf(e) {
  return Il.call(Ci, e)
    ? !0
    : Il.call(Si, e)
    ? !1
    : Yf.test(e)
    ? (Ci[e] = !0)
    : ((Si[e] = !0), !1);
}
function Qf(e, t, n, s) {
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
function Kf(e, t, n, s) {
  if (t === null || typeof t > "u" || Qf(e, t, n, s)) return !0;
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
function Dt(e, t, n, s, o, l, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = s),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = a);
}
var yt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    yt[e] = new Dt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  yt[t] = new Dt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  yt[e] = new Dt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  yt[e] = new Dt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    yt[e] = new Dt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  yt[e] = new Dt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  yt[e] = new Dt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  yt[e] = new Dt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  yt[e] = new Dt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var _a = /[\-:]([a-z])/g;
function Ma(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(_a, Ma);
    yt[t] = new Dt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(_a, Ma);
    yt[t] = new Dt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(_a, Ma);
  yt[t] = new Dt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  yt[e] = new Dt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
yt.xlinkHref = new Dt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  yt[e] = new Dt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ea(e, t, n, s) {
  var o = yt.hasOwnProperty(t) ? yt[t] : null;
  (o !== null
    ? o.type !== 0
    : s ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Kf(t, n, o, s) && (n = null),
    s || o === null
      ? Xf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var bn = Wf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Us = Symbol.for("react.element"),
  ur = Symbol.for("react.portal"),
  fr = Symbol.for("react.fragment"),
  Ia = Symbol.for("react.strict_mode"),
  Pl = Symbol.for("react.profiler"),
  Yc = Symbol.for("react.provider"),
  Xc = Symbol.for("react.context"),
  Pa = Symbol.for("react.forward_ref"),
  Tl = Symbol.for("react.suspense"),
  Rl = Symbol.for("react.suspense_list"),
  Ta = Symbol.for("react.memo"),
  Cn = Symbol.for("react.lazy"),
  Qc = Symbol.for("react.offscreen"),
  Di = Symbol.iterator;
function Vr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Di && e[Di]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var nt = Object.assign,
  ll;
function es(e) {
  if (ll === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ll = (t && t[1]) || "";
    }
  return (
    `
` +
    ll +
    e
  );
}
var al = !1;
function il(e, t) {
  if (!e || al) return "";
  al = !0;
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
    (al = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? es(e) : "";
}
function Jf(e) {
  switch (e.tag) {
    case 5:
      return es(e.type);
    case 16:
      return es("Lazy");
    case 13:
      return es("Suspense");
    case 19:
      return es("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = il(e.type, !1)), e;
    case 11:
      return (e = il(e.type.render, !1)), e;
    case 1:
      return (e = il(e.type, !0)), e;
    default:
      return "";
  }
}
function $l(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case fr:
      return "Fragment";
    case ur:
      return "Portal";
    case Pl:
      return "Profiler";
    case Ia:
      return "StrictMode";
    case Tl:
      return "Suspense";
    case Rl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Xc:
        return (e.displayName || "Context") + ".Consumer";
      case Yc:
        return (e._context.displayName || "Context") + ".Provider";
      case Pa:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ta:
        return (
          (t = e.displayName || null), t !== null ? t : $l(e.type) || "Memo"
        );
      case Cn:
        (t = e._payload), (e = e._init);
        try {
          return $l(e(t));
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
      return $l(t);
    case 8:
      return t === Ia ? "StrictMode" : "Mode";
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
function Gn(e) {
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
function Kc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function ep(e) {
  var t = Kc(e) ? "checked" : "value",
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
function Ls(e) {
  e._valueTracker || (e._valueTracker = ep(e));
}
function Jc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    s = "";
  return (
    e && (s = Kc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = s),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ho(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Al(e, t) {
  var n = t.checked;
  return nt({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ki(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    s = t.checked != null ? t.checked : t.defaultChecked;
  (n = Gn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: s,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Zc(e, t) {
  (t = t.checked), t != null && Ea(e, "checked", t, !1);
}
function Ol(e, t) {
  Zc(e, t);
  var n = Gn(t.value),
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
    ? Ul(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ul(e, t.type, Gn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function _i(e, t, n) {
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
function Ul(e, t, n) {
  (t !== "number" || ho(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ts = Array.isArray;
function Cr(e, t, n, s) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && s && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Gn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), s && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ll(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(de(91));
  return nt({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Mi(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(de(92));
      if (ts(n)) {
        if (1 < n.length) throw Error(de(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Gn(n) };
}
function ed(e, t) {
  var n = Gn(t.value),
    s = Gn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    s != null && (e.defaultValue = "" + s);
}
function Ei(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function td(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Gl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? td(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Gs,
  nd = (function (e) {
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
        Gs = Gs || document.createElement("div"),
          Gs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Gs.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function hs(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ss = {
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
Object.keys(ss).forEach(function (e) {
  tp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ss[t] = ss[e]);
  });
});
function rd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ss.hasOwnProperty(e) && ss[e])
    ? ("" + t).trim()
    : t + "px";
}
function sd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var s = n.indexOf("--") === 0,
        o = rd(n, t[n], s);
      n === "float" && (n = "cssFloat"), s ? e.setProperty(n, o) : (e[n] = o);
    }
}
var np = nt(
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
function zl(e, t) {
  if (t) {
    if (np[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Bl(e, t) {
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
var Fl = null;
function Ra(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Hl = null,
  Dr = null,
  kr = null;
function Ii(e) {
  if ((e = Rs(e))) {
    if (typeof Hl != "function") throw Error(de(280));
    var t = e.stateNode;
    t && ((t = Ho(t)), Hl(e.stateNode, e.type, t));
  }
}
function od(e) {
  Dr ? (kr ? kr.push(e) : (kr = [e])) : (Dr = e);
}
function ld() {
  if (Dr) {
    var e = Dr,
      t = kr;
    if (((kr = Dr = null), Ii(e), t)) for (e = 0; e < t.length; e++) Ii(t[e]);
  }
}
function ad(e, t) {
  return e(t);
}
function id() {}
var cl = !1;
function cd(e, t, n) {
  if (cl) return e(t, n);
  cl = !0;
  try {
    return ad(e, t, n);
  } finally {
    (cl = !1), (Dr !== null || kr !== null) && (id(), ld());
  }
}
function gs(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var s = Ho(n);
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
var Vl = !1;
if (xn)
  try {
    var qr = {};
    Object.defineProperty(qr, "passive", {
      get: function () {
        Vl = !0;
      },
    }),
      window.addEventListener("test", qr, qr),
      window.removeEventListener("test", qr, qr);
  } catch {
    Vl = !1;
  }
function rp(e, t, n, s, o, l, a, i, c) {
  var g = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, g);
  } catch (y) {
    this.onError(y);
  }
}
var os = !1,
  go = null,
  xo = !1,
  ql = null,
  sp = {
    onError: function (e) {
      (os = !0), (go = e);
    },
  };
function op(e, t, n, s, o, l, a, i, c) {
  (os = !1), (go = null), rp.apply(sp, arguments);
}
function lp(e, t, n, s, o, l, a, i, c) {
  if ((op.apply(this, arguments), os)) {
    if (os) {
      var g = go;
      (os = !1), (go = null);
    } else throw Error(de(198));
    xo || ((xo = !0), (ql = g));
  }
}
function lr(e) {
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
function dd(e) {
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
function Pi(e) {
  if (lr(e) !== e) throw Error(de(188));
}
function ap(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = lr(e)), t === null)) throw Error(de(188));
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
        if (l === n) return Pi(o), e;
        if (l === s) return Pi(o), t;
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
function ud(e) {
  return (e = ap(e)), e !== null ? fd(e) : null;
}
function fd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = fd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var pd = Gt.unstable_scheduleCallback,
  Ti = Gt.unstable_cancelCallback,
  ip = Gt.unstable_shouldYield,
  cp = Gt.unstable_requestPaint,
  at = Gt.unstable_now,
  dp = Gt.unstable_getCurrentPriorityLevel,
  $a = Gt.unstable_ImmediatePriority,
  md = Gt.unstable_UserBlockingPriority,
  yo = Gt.unstable_NormalPriority,
  up = Gt.unstable_LowPriority,
  hd = Gt.unstable_IdlePriority,
  Go = null,
  dn = null;
function fp(e) {
  if (dn && typeof dn.onCommitFiberRoot == "function")
    try {
      dn.onCommitFiberRoot(Go, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var nn = Math.clz32 ? Math.clz32 : hp,
  pp = Math.log,
  mp = Math.LN2;
function hp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((pp(e) / mp) | 0)) | 0;
}
var zs = 64,
  Bs = 4194304;
function ns(e) {
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
function vo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var s = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var i = a & ~o;
    i !== 0 ? (s = ns(i)) : ((l &= a), l !== 0 && (s = ns(l)));
  } else (a = n & ~o), a !== 0 ? (s = ns(a)) : l !== 0 && (s = ns(l));
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
      (n = 31 - nn(t)), (o = 1 << n), (s |= e[n]), (t &= ~o);
  return s;
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
function xp(e, t) {
  for (
    var n = e.suspendedLanes,
      s = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var a = 31 - nn(l),
      i = 1 << a,
      c = o[a];
    c === -1
      ? (!(i & n) || i & s) && (o[a] = gp(i, t))
      : c <= t && (e.expiredLanes |= i),
      (l &= ~i);
  }
}
function Wl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function gd() {
  var e = zs;
  return (zs <<= 1), !(zs & 4194240) && (zs = 64), e;
}
function dl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ps(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - nn(t)),
    (e[t] = n);
}
function yp(e, t) {
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
    var o = 31 - nn(n),
      l = 1 << o;
    (t[o] = 0), (s[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function Aa(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var s = 31 - nn(n),
      o = 1 << s;
    (o & t) | (e[s] & t) && (e[s] |= t), (n &= ~o);
  }
}
var He = 0;
function xd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var yd,
  Oa,
  vd,
  wd,
  bd,
  Yl = !1,
  Fs = [],
  Pn = null,
  Tn = null,
  Rn = null,
  xs = new Map(),
  ys = new Map(),
  kn = [],
  vp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ri(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Pn = null;
      break;
    case "dragenter":
    case "dragleave":
      Tn = null;
      break;
    case "mouseover":
    case "mouseout":
      Rn = null;
      break;
    case "pointerover":
    case "pointerout":
      xs.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ys.delete(t.pointerId);
  }
}
function Wr(e, t, n, s, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: s,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = Rs(t)), t !== null && Oa(t)),
      e)
    : ((e.eventSystemFlags |= s),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function wp(e, t, n, s, o) {
  switch (t) {
    case "focusin":
      return (Pn = Wr(Pn, e, t, n, s, o)), !0;
    case "dragenter":
      return (Tn = Wr(Tn, e, t, n, s, o)), !0;
    case "mouseover":
      return (Rn = Wr(Rn, e, t, n, s, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return xs.set(l, Wr(xs.get(l) || null, e, t, n, s, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), ys.set(l, Wr(ys.get(l) || null, e, t, n, s, o)), !0
      );
  }
  return !1;
}
function Nd(e) {
  var t = Xn(e.target);
  if (t !== null) {
    var n = lr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = dd(n)), t !== null)) {
          (e.blockedOn = t),
            bd(e.priority, function () {
              vd(n);
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
function ro(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Xl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var s = new n.constructor(n.type, n);
      (Fl = s), n.target.dispatchEvent(s), (Fl = null);
    } else return (t = Rs(n)), t !== null && Oa(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function $i(e, t, n) {
  ro(e) && n.delete(t);
}
function bp() {
  (Yl = !1),
    Pn !== null && ro(Pn) && (Pn = null),
    Tn !== null && ro(Tn) && (Tn = null),
    Rn !== null && ro(Rn) && (Rn = null),
    xs.forEach($i),
    ys.forEach($i);
}
function Yr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Yl ||
      ((Yl = !0),
      Gt.unstable_scheduleCallback(Gt.unstable_NormalPriority, bp)));
}
function vs(e) {
  function t(o) {
    return Yr(o, e);
  }
  if (0 < Fs.length) {
    Yr(Fs[0], e);
    for (var n = 1; n < Fs.length; n++) {
      var s = Fs[n];
      s.blockedOn === e && (s.blockedOn = null);
    }
  }
  for (
    Pn !== null && Yr(Pn, e),
      Tn !== null && Yr(Tn, e),
      Rn !== null && Yr(Rn, e),
      xs.forEach(t),
      ys.forEach(t),
      n = 0;
    n < kn.length;
    n++
  )
    (s = kn[n]), s.blockedOn === e && (s.blockedOn = null);
  for (; 0 < kn.length && ((n = kn[0]), n.blockedOn === null); )
    Nd(n), n.blockedOn === null && kn.shift();
}
var _r = bn.ReactCurrentBatchConfig,
  wo = !0;
function Np(e, t, n, s) {
  var o = He,
    l = _r.transition;
  _r.transition = null;
  try {
    (He = 1), Ua(e, t, n, s);
  } finally {
    (He = o), (_r.transition = l);
  }
}
function jp(e, t, n, s) {
  var o = He,
    l = _r.transition;
  _r.transition = null;
  try {
    (He = 4), Ua(e, t, n, s);
  } finally {
    (He = o), (_r.transition = l);
  }
}
function Ua(e, t, n, s) {
  if (wo) {
    var o = Xl(e, t, n, s);
    if (o === null) wl(e, t, s, bo, n), Ri(e, s);
    else if (wp(o, e, t, n, s)) s.stopPropagation();
    else if ((Ri(e, s), t & 4 && -1 < vp.indexOf(e))) {
      for (; o !== null; ) {
        var l = Rs(o);
        if (
          (l !== null && yd(l),
          (l = Xl(e, t, n, s)),
          l === null && wl(e, t, s, bo, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && s.stopPropagation();
    } else wl(e, t, s, null, n);
  }
}
var bo = null;
function Xl(e, t, n, s) {
  if (((bo = null), (e = Ra(s)), (e = Xn(e)), e !== null))
    if (((t = lr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = dd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (bo = e), null;
}
function jd(e) {
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
      switch (dp()) {
        case $a:
          return 1;
        case md:
          return 4;
        case yo:
        case up:
          return 16;
        case hd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Mn = null,
  La = null,
  so = null;
function Sd() {
  if (so) return so;
  var e,
    t = La,
    n = t.length,
    s,
    o = "value" in Mn ? Mn.value : Mn.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (s = 1; s <= a && t[n - s] === o[l - s]; s++);
  return (so = o.slice(e, 1 < s ? 1 - s : void 0));
}
function oo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Hs() {
  return !0;
}
function Ai() {
  return !1;
}
function Bt(e) {
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
        ? Hs
        : Ai),
      (this.isPropagationStopped = Ai),
      this
    );
  }
  return (
    nt(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Hs));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Hs));
      },
      persist: function () {},
      isPersistent: Hs,
    }),
    t
  );
}
var Gr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ga = Bt(Gr),
  Ts = nt({}, Gr, { view: 0, detail: 0 }),
  Sp = Bt(Ts),
  ul,
  fl,
  Xr,
  zo = nt({}, Ts, {
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
    getModifierState: za,
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
        : (e !== Xr &&
            (Xr && e.type === "mousemove"
              ? ((ul = e.screenX - Xr.screenX), (fl = e.screenY - Xr.screenY))
              : (fl = ul = 0),
            (Xr = e)),
          ul);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : fl;
    },
  }),
  Oi = Bt(zo),
  Cp = nt({}, zo, { dataTransfer: 0 }),
  Dp = Bt(Cp),
  kp = nt({}, Ts, { relatedTarget: 0 }),
  pl = Bt(kp),
  _p = nt({}, Gr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Mp = Bt(_p),
  Ep = nt({}, Gr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ip = Bt(Ep),
  Pp = nt({}, Gr, { data: 0 }),
  Ui = Bt(Pp),
  Tp = {
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
  Rp = {
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
  $p = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Ap(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = $p[e]) ? !!t[e] : !1;
}
function za() {
  return Ap;
}
var Op = nt({}, Ts, {
    key: function (e) {
      if (e.key) {
        var t = Tp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = oo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Rp[e.keyCode] || "Unidentified"
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
    getModifierState: za,
    charCode: function (e) {
      return e.type === "keypress" ? oo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? oo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Up = Bt(Op),
  Lp = nt({}, zo, {
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
  Li = Bt(Lp),
  Gp = nt({}, Ts, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: za,
  }),
  zp = Bt(Gp),
  Bp = nt({}, Gr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Fp = Bt(Bp),
  Hp = nt({}, zo, {
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
  Vp = Bt(Hp),
  qp = [9, 13, 27, 32],
  Ba = xn && "CompositionEvent" in window,
  ls = null;
xn && "documentMode" in document && (ls = document.documentMode);
var Wp = xn && "TextEvent" in window && !ls,
  Cd = xn && (!Ba || (ls && 8 < ls && 11 >= ls)),
  Gi = " ",
  zi = !1;
function Dd(e, t) {
  switch (e) {
    case "keyup":
      return qp.indexOf(t.keyCode) !== -1;
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
function kd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var pr = !1;
function Yp(e, t) {
  switch (e) {
    case "compositionend":
      return kd(t);
    case "keypress":
      return t.which !== 32 ? null : ((zi = !0), Gi);
    case "textInput":
      return (e = t.data), e === Gi && zi ? null : e;
    default:
      return null;
  }
}
function Xp(e, t) {
  if (pr)
    return e === "compositionend" || (!Ba && Dd(e, t))
      ? ((e = Sd()), (so = La = Mn = null), (pr = !1), e)
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
      return Cd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Qp = {
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
function Bi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Qp[e.type] : t === "textarea";
}
function _d(e, t, n, s) {
  od(s),
    (t = No(t, "onChange")),
    0 < t.length &&
      ((n = new Ga("onChange", "change", null, n, s)),
      e.push({ event: n, listeners: t }));
}
var as = null,
  ws = null;
function Kp(e) {
  Ld(e, 0);
}
function Bo(e) {
  var t = gr(e);
  if (Jc(t)) return e;
}
function Jp(e, t) {
  if (e === "change") return t;
}
var Md = !1;
if (xn) {
  var ml;
  if (xn) {
    var hl = "oninput" in document;
    if (!hl) {
      var Fi = document.createElement("div");
      Fi.setAttribute("oninput", "return;"),
        (hl = typeof Fi.oninput == "function");
    }
    ml = hl;
  } else ml = !1;
  Md = ml && (!document.documentMode || 9 < document.documentMode);
}
function Hi() {
  as && (as.detachEvent("onpropertychange", Ed), (ws = as = null));
}
function Ed(e) {
  if (e.propertyName === "value" && Bo(ws)) {
    var t = [];
    _d(t, ws, e, Ra(e)), cd(Kp, t);
  }
}
function Zp(e, t, n) {
  e === "focusin"
    ? (Hi(), (as = t), (ws = n), as.attachEvent("onpropertychange", Ed))
    : e === "focusout" && Hi();
}
function em(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Bo(ws);
}
function tm(e, t) {
  if (e === "click") return Bo(t);
}
function nm(e, t) {
  if (e === "input" || e === "change") return Bo(t);
}
function rm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var sn = typeof Object.is == "function" ? Object.is : rm;
function bs(e, t) {
  if (sn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    s = Object.keys(t);
  if (n.length !== s.length) return !1;
  for (s = 0; s < n.length; s++) {
    var o = n[s];
    if (!Il.call(t, o) || !sn(e[o], t[o])) return !1;
  }
  return !0;
}
function Vi(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function qi(e, t) {
  var n = Vi(e);
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
    n = Vi(n);
  }
}
function Id(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Id(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Pd() {
  for (var e = window, t = ho(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ho(e.document);
  }
  return t;
}
function Fa(e) {
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
  var t = Pd(),
    n = e.focusedElem,
    s = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Id(n.ownerDocument.documentElement, n)
  ) {
    if (s !== null && Fa(n)) {
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
          (o = qi(n, l));
        var a = qi(n, s);
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
var om = xn && "documentMode" in document && 11 >= document.documentMode,
  mr = null,
  Ql = null,
  is = null,
  Kl = !1;
function Wi(e, t, n) {
  var s = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Kl ||
    mr == null ||
    mr !== ho(s) ||
    ((s = mr),
    "selectionStart" in s && Fa(s)
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
    (is && bs(is, s)) ||
      ((is = s),
      (s = No(Ql, "onSelect")),
      0 < s.length &&
        ((t = new Ga("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: s }),
        (t.target = mr))));
}
function Vs(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var hr = {
    animationend: Vs("Animation", "AnimationEnd"),
    animationiteration: Vs("Animation", "AnimationIteration"),
    animationstart: Vs("Animation", "AnimationStart"),
    transitionend: Vs("Transition", "TransitionEnd"),
  },
  gl = {},
  Td = {};
xn &&
  ((Td = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete hr.animationend.animation,
    delete hr.animationiteration.animation,
    delete hr.animationstart.animation),
  "TransitionEvent" in window || delete hr.transitionend.transition);
function Fo(e) {
  if (gl[e]) return gl[e];
  if (!hr[e]) return e;
  var t = hr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Td) return (gl[e] = t[n]);
  return e;
}
var Rd = Fo("animationend"),
  $d = Fo("animationiteration"),
  Ad = Fo("animationstart"),
  Od = Fo("transitionend"),
  Ud = new Map(),
  Yi =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Bn(e, t) {
  Ud.set(e, t), or(t, [e]);
}
for (var xl = 0; xl < Yi.length; xl++) {
  var yl = Yi[xl],
    lm = yl.toLowerCase(),
    am = yl[0].toUpperCase() + yl.slice(1);
  Bn(lm, "on" + am);
}
Bn(Rd, "onAnimationEnd");
Bn($d, "onAnimationIteration");
Bn(Ad, "onAnimationStart");
Bn("dblclick", "onDoubleClick");
Bn("focusin", "onFocus");
Bn("focusout", "onBlur");
Bn(Od, "onTransitionEnd");
Ir("onMouseEnter", ["mouseout", "mouseover"]);
Ir("onMouseLeave", ["mouseout", "mouseover"]);
Ir("onPointerEnter", ["pointerout", "pointerover"]);
Ir("onPointerLeave", ["pointerout", "pointerover"]);
or(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
or(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
or("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
or(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
or(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
or(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var rs =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  im = new Set("cancel close invalid load scroll toggle".split(" ").concat(rs));
function Xi(e, t, n) {
  var s = e.type || "unknown-event";
  (e.currentTarget = n), lp(s, t, void 0, e), (e.currentTarget = null);
}
function Ld(e, t) {
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
          Xi(o, i, g), (l = c);
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
          Xi(o, i, g), (l = c);
        }
    }
  }
  if (xo) throw ((e = ql), (xo = !1), (ql = null), e);
}
function We(e, t) {
  var n = t[na];
  n === void 0 && (n = t[na] = new Set());
  var s = e + "__bubble";
  n.has(s) || (Gd(t, e, 2, !1), n.add(s));
}
function vl(e, t, n) {
  var s = 0;
  t && (s |= 4), Gd(n, e, s, t);
}
var qs = "_reactListening" + Math.random().toString(36).slice(2);
function Ns(e) {
  if (!e[qs]) {
    (e[qs] = !0),
      Wc.forEach(function (n) {
        n !== "selectionchange" && (im.has(n) || vl(n, !1, e), vl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[qs] || ((t[qs] = !0), vl("selectionchange", !1, t));
  }
}
function Gd(e, t, n, s) {
  switch (jd(t)) {
    case 1:
      var o = Np;
      break;
    case 4:
      o = jp;
      break;
    default:
      o = Ua;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Vl ||
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
function wl(e, t, n, s, o) {
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
          if (((a = Xn(i)), a === null)) return;
          if (((c = a.tag), c === 5 || c === 6)) {
            s = l = a;
            continue e;
          }
          i = i.parentNode;
        }
      }
      s = s.return;
    }
  cd(function () {
    var g = l,
      y = Ra(n),
      h = [];
    e: {
      var p = Ud.get(e);
      if (p !== void 0) {
        var b = Ga,
          N = e;
        switch (e) {
          case "keypress":
            if (oo(n) === 0) break e;
          case "keydown":
          case "keyup":
            b = Up;
            break;
          case "focusin":
            (N = "focus"), (b = pl);
            break;
          case "focusout":
            (N = "blur"), (b = pl);
            break;
          case "beforeblur":
          case "afterblur":
            b = pl;
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
            b = Oi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            b = Dp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            b = zp;
            break;
          case Rd:
          case $d:
          case Ad:
            b = Mp;
            break;
          case Od:
            b = Fp;
            break;
          case "scroll":
            b = Sp;
            break;
          case "wheel":
            b = Vp;
            break;
          case "copy":
          case "cut":
          case "paste":
            b = Ip;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            b = Li;
        }
        var S = (t & 4) !== 0,
          A = !S && e === "scroll",
          d = S ? (p !== null ? p + "Capture" : null) : p;
        S = [];
        for (var u = g, m; u !== null; ) {
          m = u;
          var C = m.stateNode;
          if (
            (m.tag === 5 &&
              C !== null &&
              ((m = C),
              d !== null && ((C = gs(u, d)), C != null && S.push(js(u, C, m)))),
            A)
          )
            break;
          u = u.return;
        }
        0 < S.length &&
          ((p = new b(p, N, null, n, y)), h.push({ event: p, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (b = e === "mouseout" || e === "pointerout"),
          p &&
            n !== Fl &&
            (N = n.relatedTarget || n.fromElement) &&
            (Xn(N) || N[yn]))
        )
          break e;
        if (
          (b || p) &&
          ((p =
            y.window === y
              ? y
              : (p = y.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          b
            ? ((N = n.relatedTarget || n.toElement),
              (b = g),
              (N = N ? Xn(N) : null),
              N !== null &&
                ((A = lr(N)), N !== A || (N.tag !== 5 && N.tag !== 6)) &&
                (N = null))
            : ((b = null), (N = g)),
          b !== N)
        ) {
          if (
            ((S = Oi),
            (C = "onMouseLeave"),
            (d = "onMouseEnter"),
            (u = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = Li),
              (C = "onPointerLeave"),
              (d = "onPointerEnter"),
              (u = "pointer")),
            (A = b == null ? p : gr(b)),
            (m = N == null ? p : gr(N)),
            (p = new S(C, u + "leave", b, n, y)),
            (p.target = A),
            (p.relatedTarget = m),
            (C = null),
            Xn(y) === g &&
              ((S = new S(d, u + "enter", N, n, y)),
              (S.target = m),
              (S.relatedTarget = A),
              (C = S)),
            (A = C),
            b && N)
          )
            t: {
              for (S = b, d = N, u = 0, m = S; m; m = dr(m)) u++;
              for (m = 0, C = d; C; C = dr(C)) m++;
              for (; 0 < u - m; ) (S = dr(S)), u--;
              for (; 0 < m - u; ) (d = dr(d)), m--;
              for (; u--; ) {
                if (S === d || (d !== null && S === d.alternate)) break t;
                (S = dr(S)), (d = dr(d));
              }
              S = null;
            }
          else S = null;
          b !== null && Qi(h, p, b, S, !1),
            N !== null && A !== null && Qi(h, A, N, S, !0);
        }
      }
      e: {
        if (
          ((p = g ? gr(g) : window),
          (b = p.nodeName && p.nodeName.toLowerCase()),
          b === "select" || (b === "input" && p.type === "file"))
        )
          var P = Jp;
        else if (Bi(p))
          if (Md) P = nm;
          else {
            P = em;
            var D = Zp;
          }
        else
          (b = p.nodeName) &&
            b.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (P = tm);
        if (P && (P = P(e, g))) {
          _d(h, P, n, y);
          break e;
        }
        D && D(e, p, g),
          e === "focusout" &&
            (D = p._wrapperState) &&
            D.controlled &&
            p.type === "number" &&
            Ul(p, "number", p.value);
      }
      switch (((D = g ? gr(g) : window), e)) {
        case "focusin":
          (Bi(D) || D.contentEditable === "true") &&
            ((mr = D), (Ql = g), (is = null));
          break;
        case "focusout":
          is = Ql = mr = null;
          break;
        case "mousedown":
          Kl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Kl = !1), Wi(h, n, y);
          break;
        case "selectionchange":
          if (om) break;
        case "keydown":
        case "keyup":
          Wi(h, n, y);
      }
      var T;
      if (Ba)
        e: {
          switch (e) {
            case "compositionstart":
              var z = "onCompositionStart";
              break e;
            case "compositionend":
              z = "onCompositionEnd";
              break e;
            case "compositionupdate":
              z = "onCompositionUpdate";
              break e;
          }
          z = void 0;
        }
      else
        pr
          ? Dd(e, n) && (z = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (z = "onCompositionStart");
      z &&
        (Cd &&
          n.locale !== "ko" &&
          (pr || z !== "onCompositionStart"
            ? z === "onCompositionEnd" && pr && (T = Sd())
            : ((Mn = y),
              (La = "value" in Mn ? Mn.value : Mn.textContent),
              (pr = !0))),
        (D = No(g, z)),
        0 < D.length &&
          ((z = new Ui(z, e, null, n, y)),
          h.push({ event: z, listeners: D }),
          T ? (z.data = T) : ((T = kd(n)), T !== null && (z.data = T)))),
        (T = Wp ? Yp(e, n) : Xp(e, n)) &&
          ((g = No(g, "onBeforeInput")),
          0 < g.length &&
            ((y = new Ui("onBeforeInput", "beforeinput", null, n, y)),
            h.push({ event: y, listeners: g }),
            (y.data = T)));
    }
    Ld(h, t);
  });
}
function js(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function No(e, t) {
  for (var n = t + "Capture", s = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = gs(e, n)),
      l != null && s.unshift(js(e, l, o)),
      (l = gs(e, t)),
      l != null && s.push(js(e, l, o))),
      (e = e.return);
  }
  return s;
}
function dr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Qi(e, t, n, s, o) {
  for (var l = t._reactName, a = []; n !== null && n !== s; ) {
    var i = n,
      c = i.alternate,
      g = i.stateNode;
    if (c !== null && c === s) break;
    i.tag === 5 &&
      g !== null &&
      ((i = g),
      o
        ? ((c = gs(n, l)), c != null && a.unshift(js(n, c, i)))
        : o || ((c = gs(n, l)), c != null && a.push(js(n, c, i)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var cm = /\r\n?/g,
  dm = /\u0000|\uFFFD/g;
function Ki(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      cm,
      `
`
    )
    .replace(dm, "");
}
function Ws(e, t, n) {
  if (((t = Ki(t)), Ki(e) !== t && n)) throw Error(de(425));
}
function jo() {}
var Jl = null,
  Zl = null;
function ea(e, t) {
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
var ta = typeof setTimeout == "function" ? setTimeout : void 0,
  um = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ji = typeof Promise == "function" ? Promise : void 0,
  fm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ji < "u"
      ? function (e) {
          return Ji.resolve(null).then(e).catch(pm);
        }
      : ta;
function pm(e) {
  setTimeout(function () {
    throw e;
  });
}
function bl(e, t) {
  var n = t,
    s = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (s === 0) {
          e.removeChild(o), vs(t);
          return;
        }
        s--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || s++;
    n = o;
  } while (n);
  vs(t);
}
function $n(e) {
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
function Zi(e) {
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
var zr = Math.random().toString(36).slice(2),
  cn = "__reactFiber$" + zr,
  Ss = "__reactProps$" + zr,
  yn = "__reactContainer$" + zr,
  na = "__reactEvents$" + zr,
  mm = "__reactListeners$" + zr,
  hm = "__reactHandles$" + zr;
function Xn(e) {
  var t = e[cn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[yn] || n[cn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Zi(e); e !== null; ) {
          if ((n = e[cn])) return n;
          e = Zi(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Rs(e) {
  return (
    (e = e[cn] || e[yn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function gr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(de(33));
}
function Ho(e) {
  return e[Ss] || null;
}
var ra = [],
  xr = -1;
function Fn(e) {
  return { current: e };
}
function Ye(e) {
  0 > xr || ((e.current = ra[xr]), (ra[xr] = null), xr--);
}
function qe(e, t) {
  xr++, (ra[xr] = e.current), (e.current = t);
}
var zn = {},
  Nt = Fn(zn),
  Pt = Fn(!1),
  er = zn;
function Pr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return zn;
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
function Tt(e) {
  return (e = e.childContextTypes), e != null;
}
function So() {
  Ye(Pt), Ye(Nt);
}
function ec(e, t, n) {
  if (Nt.current !== zn) throw Error(de(168));
  qe(Nt, t), qe(Pt, n);
}
function zd(e, t, n) {
  var s = e.stateNode;
  if (((t = t.childContextTypes), typeof s.getChildContext != "function"))
    return n;
  s = s.getChildContext();
  for (var o in s) if (!(o in t)) throw Error(de(108, Zf(e) || "Unknown", o));
  return nt({}, n, s);
}
function Co(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || zn),
    (er = Nt.current),
    qe(Nt, e),
    qe(Pt, Pt.current),
    !0
  );
}
function tc(e, t, n) {
  var s = e.stateNode;
  if (!s) throw Error(de(169));
  n
    ? ((e = zd(e, t, er)),
      (s.__reactInternalMemoizedMergedChildContext = e),
      Ye(Pt),
      Ye(Nt),
      qe(Nt, e))
    : Ye(Pt),
    qe(Pt, n);
}
var pn = null,
  Vo = !1,
  Nl = !1;
function Bd(e) {
  pn === null ? (pn = [e]) : pn.push(e);
}
function gm(e) {
  (Vo = !0), Bd(e);
}
function Hn() {
  if (!Nl && pn !== null) {
    Nl = !0;
    var e = 0,
      t = He;
    try {
      var n = pn;
      for (He = 1; e < n.length; e++) {
        var s = n[e];
        do s = s(!0);
        while (s !== null);
      }
      (pn = null), (Vo = !1);
    } catch (o) {
      throw (pn !== null && (pn = pn.slice(e + 1)), pd($a, Hn), o);
    } finally {
      (He = t), (Nl = !1);
    }
  }
  return null;
}
var yr = [],
  vr = 0,
  Do = null,
  ko = 0,
  Ht = [],
  Vt = 0,
  tr = null,
  mn = 1,
  hn = "";
function Wn(e, t) {
  (yr[vr++] = ko), (yr[vr++] = Do), (Do = e), (ko = t);
}
function Fd(e, t, n) {
  (Ht[Vt++] = mn), (Ht[Vt++] = hn), (Ht[Vt++] = tr), (tr = e);
  var s = mn;
  e = hn;
  var o = 32 - nn(s) - 1;
  (s &= ~(1 << o)), (n += 1);
  var l = 32 - nn(t) + o;
  if (30 < l) {
    var a = o - (o % 5);
    (l = (s & ((1 << a) - 1)).toString(32)),
      (s >>= a),
      (o -= a),
      (mn = (1 << (32 - nn(t) + o)) | (n << o) | s),
      (hn = l + e);
  } else (mn = (1 << l) | (n << o) | s), (hn = e);
}
function Ha(e) {
  e.return !== null && (Wn(e, 1), Fd(e, 1, 0));
}
function Va(e) {
  for (; e === Do; )
    (Do = yr[--vr]), (yr[vr] = null), (ko = yr[--vr]), (yr[vr] = null);
  for (; e === tr; )
    (tr = Ht[--Vt]),
      (Ht[Vt] = null),
      (hn = Ht[--Vt]),
      (Ht[Vt] = null),
      (mn = Ht[--Vt]),
      (Ht[Vt] = null);
}
var Lt = null,
  Ut = null,
  Ke = !1,
  tn = null;
function Hd(e, t) {
  var n = qt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function nc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Lt = e), (Ut = $n(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Lt = e), (Ut = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = tr !== null ? { id: mn, overflow: hn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = qt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Lt = e),
            (Ut = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function sa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function oa(e) {
  if (Ke) {
    var t = Ut;
    if (t) {
      var n = t;
      if (!nc(e, t)) {
        if (sa(e)) throw Error(de(418));
        t = $n(n.nextSibling);
        var s = Lt;
        t && nc(e, t)
          ? Hd(s, n)
          : ((e.flags = (e.flags & -4097) | 2), (Ke = !1), (Lt = e));
      }
    } else {
      if (sa(e)) throw Error(de(418));
      (e.flags = (e.flags & -4097) | 2), (Ke = !1), (Lt = e);
    }
  }
}
function rc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Lt = e;
}
function Ys(e) {
  if (e !== Lt) return !1;
  if (!Ke) return rc(e), (Ke = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ea(e.type, e.memoizedProps))),
    t && (t = Ut))
  ) {
    if (sa(e)) throw (Vd(), Error(de(418)));
    for (; t; ) Hd(e, t), (t = $n(t.nextSibling));
  }
  if ((rc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(de(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ut = $n(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ut = null;
    }
  } else Ut = Lt ? $n(e.stateNode.nextSibling) : null;
  return !0;
}
function Vd() {
  for (var e = Ut; e; ) e = $n(e.nextSibling);
}
function Tr() {
  (Ut = Lt = null), (Ke = !1);
}
function qa(e) {
  tn === null ? (tn = [e]) : tn.push(e);
}
var xm = bn.ReactCurrentBatchConfig;
function Qr(e, t, n) {
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
function Xs(e, t) {
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
function sc(e) {
  var t = e._init;
  return t(e._payload);
}
function qd(e) {
  function t(d, u) {
    if (e) {
      var m = d.deletions;
      m === null ? ((d.deletions = [u]), (d.flags |= 16)) : m.push(u);
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
    return (d = Ln(d, u)), (d.index = 0), (d.sibling = null), d;
  }
  function l(d, u, m) {
    return (
      (d.index = m),
      e
        ? ((m = d.alternate),
          m !== null
            ? ((m = m.index), m < u ? ((d.flags |= 2), u) : m)
            : ((d.flags |= 2), u))
        : ((d.flags |= 1048576), u)
    );
  }
  function a(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function i(d, u, m, C) {
    return u === null || u.tag !== 6
      ? ((u = Ml(m, d.mode, C)), (u.return = d), u)
      : ((u = o(u, m)), (u.return = d), u);
  }
  function c(d, u, m, C) {
    var P = m.type;
    return P === fr
      ? y(d, u, m.props.children, C, m.key)
      : u !== null &&
        (u.elementType === P ||
          (typeof P == "object" &&
            P !== null &&
            P.$$typeof === Cn &&
            sc(P) === u.type))
      ? ((C = o(u, m.props)), (C.ref = Qr(d, u, m)), (C.return = d), C)
      : ((C = po(m.type, m.key, m.props, null, d.mode, C)),
        (C.ref = Qr(d, u, m)),
        (C.return = d),
        C);
  }
  function g(d, u, m, C) {
    return u === null ||
      u.tag !== 4 ||
      u.stateNode.containerInfo !== m.containerInfo ||
      u.stateNode.implementation !== m.implementation
      ? ((u = El(m, d.mode, C)), (u.return = d), u)
      : ((u = o(u, m.children || [])), (u.return = d), u);
  }
  function y(d, u, m, C, P) {
    return u === null || u.tag !== 7
      ? ((u = Zn(m, d.mode, C, P)), (u.return = d), u)
      : ((u = o(u, m)), (u.return = d), u);
  }
  function h(d, u, m) {
    if ((typeof u == "string" && u !== "") || typeof u == "number")
      return (u = Ml("" + u, d.mode, m)), (u.return = d), u;
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case Us:
          return (
            (m = po(u.type, u.key, u.props, null, d.mode, m)),
            (m.ref = Qr(d, null, u)),
            (m.return = d),
            m
          );
        case ur:
          return (u = El(u, d.mode, m)), (u.return = d), u;
        case Cn:
          var C = u._init;
          return h(d, C(u._payload), m);
      }
      if (ts(u) || Vr(u))
        return (u = Zn(u, d.mode, m, null)), (u.return = d), u;
      Xs(d, u);
    }
    return null;
  }
  function p(d, u, m, C) {
    var P = u !== null ? u.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return P !== null ? null : i(d, u, "" + m, C);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Us:
          return m.key === P ? c(d, u, m, C) : null;
        case ur:
          return m.key === P ? g(d, u, m, C) : null;
        case Cn:
          return (P = m._init), p(d, u, P(m._payload), C);
      }
      if (ts(m) || Vr(m)) return P !== null ? null : y(d, u, m, C, null);
      Xs(d, m);
    }
    return null;
  }
  function b(d, u, m, C, P) {
    if ((typeof C == "string" && C !== "") || typeof C == "number")
      return (d = d.get(m) || null), i(u, d, "" + C, P);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case Us:
          return (d = d.get(C.key === null ? m : C.key) || null), c(u, d, C, P);
        case ur:
          return (d = d.get(C.key === null ? m : C.key) || null), g(u, d, C, P);
        case Cn:
          var D = C._init;
          return b(d, u, m, D(C._payload), P);
      }
      if (ts(C) || Vr(C)) return (d = d.get(m) || null), y(u, d, C, P, null);
      Xs(u, C);
    }
    return null;
  }
  function N(d, u, m, C) {
    for (
      var P = null, D = null, T = u, z = (u = 0), E = null;
      T !== null && z < m.length;
      z++
    ) {
      T.index > z ? ((E = T), (T = null)) : (E = T.sibling);
      var O = p(d, T, m[z], C);
      if (O === null) {
        T === null && (T = E);
        break;
      }
      e && T && O.alternate === null && t(d, T),
        (u = l(O, u, z)),
        D === null ? (P = O) : (D.sibling = O),
        (D = O),
        (T = E);
    }
    if (z === m.length) return n(d, T), Ke && Wn(d, z), P;
    if (T === null) {
      for (; z < m.length; z++)
        (T = h(d, m[z], C)),
          T !== null &&
            ((u = l(T, u, z)), D === null ? (P = T) : (D.sibling = T), (D = T));
      return Ke && Wn(d, z), P;
    }
    for (T = s(d, T); z < m.length; z++)
      (E = b(T, d, z, m[z], C)),
        E !== null &&
          (e && E.alternate !== null && T.delete(E.key === null ? z : E.key),
          (u = l(E, u, z)),
          D === null ? (P = E) : (D.sibling = E),
          (D = E));
    return (
      e &&
        T.forEach(function (se) {
          return t(d, se);
        }),
      Ke && Wn(d, z),
      P
    );
  }
  function S(d, u, m, C) {
    var P = Vr(m);
    if (typeof P != "function") throw Error(de(150));
    if (((m = P.call(m)), m == null)) throw Error(de(151));
    for (
      var D = (P = null), T = u, z = (u = 0), E = null, O = m.next();
      T !== null && !O.done;
      z++, O = m.next()
    ) {
      T.index > z ? ((E = T), (T = null)) : (E = T.sibling);
      var se = p(d, T, O.value, C);
      if (se === null) {
        T === null && (T = E);
        break;
      }
      e && T && se.alternate === null && t(d, T),
        (u = l(se, u, z)),
        D === null ? (P = se) : (D.sibling = se),
        (D = se),
        (T = E);
    }
    if (O.done) return n(d, T), Ke && Wn(d, z), P;
    if (T === null) {
      for (; !O.done; z++, O = m.next())
        (O = h(d, O.value, C)),
          O !== null &&
            ((u = l(O, u, z)), D === null ? (P = O) : (D.sibling = O), (D = O));
      return Ke && Wn(d, z), P;
    }
    for (T = s(d, T); !O.done; z++, O = m.next())
      (O = b(T, d, z, O.value, C)),
        O !== null &&
          (e && O.alternate !== null && T.delete(O.key === null ? z : O.key),
          (u = l(O, u, z)),
          D === null ? (P = O) : (D.sibling = O),
          (D = O));
    return (
      e &&
        T.forEach(function (fe) {
          return t(d, fe);
        }),
      Ke && Wn(d, z),
      P
    );
  }
  function A(d, u, m, C) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === fr &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Us:
          e: {
            for (var P = m.key, D = u; D !== null; ) {
              if (D.key === P) {
                if (((P = m.type), P === fr)) {
                  if (D.tag === 7) {
                    n(d, D.sibling),
                      (u = o(D, m.props.children)),
                      (u.return = d),
                      (d = u);
                    break e;
                  }
                } else if (
                  D.elementType === P ||
                  (typeof P == "object" &&
                    P !== null &&
                    P.$$typeof === Cn &&
                    sc(P) === D.type)
                ) {
                  n(d, D.sibling),
                    (u = o(D, m.props)),
                    (u.ref = Qr(d, D, m)),
                    (u.return = d),
                    (d = u);
                  break e;
                }
                n(d, D);
                break;
              } else t(d, D);
              D = D.sibling;
            }
            m.type === fr
              ? ((u = Zn(m.props.children, d.mode, C, m.key)),
                (u.return = d),
                (d = u))
              : ((C = po(m.type, m.key, m.props, null, d.mode, C)),
                (C.ref = Qr(d, u, m)),
                (C.return = d),
                (d = C));
          }
          return a(d);
        case ur:
          e: {
            for (D = m.key; u !== null; ) {
              if (u.key === D)
                if (
                  u.tag === 4 &&
                  u.stateNode.containerInfo === m.containerInfo &&
                  u.stateNode.implementation === m.implementation
                ) {
                  n(d, u.sibling),
                    (u = o(u, m.children || [])),
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
            (u = El(m, d.mode, C)), (u.return = d), (d = u);
          }
          return a(d);
        case Cn:
          return (D = m._init), A(d, u, D(m._payload), C);
      }
      if (ts(m)) return N(d, u, m, C);
      if (Vr(m)) return S(d, u, m, C);
      Xs(d, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        u !== null && u.tag === 6
          ? (n(d, u.sibling), (u = o(u, m)), (u.return = d), (d = u))
          : (n(d, u), (u = Ml(m, d.mode, C)), (u.return = d), (d = u)),
        a(d))
      : n(d, u);
  }
  return A;
}
var Rr = qd(!0),
  Wd = qd(!1),
  _o = Fn(null),
  Mo = null,
  wr = null,
  Wa = null;
function Ya() {
  Wa = wr = Mo = null;
}
function Xa(e) {
  var t = _o.current;
  Ye(_o), (e._currentValue = t);
}
function la(e, t, n) {
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
function Mr(e, t) {
  (Mo = e),
    (Wa = wr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Mt = !0), (e.firstContext = null));
}
function Yt(e) {
  var t = e._currentValue;
  if (Wa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), wr === null)) {
      if (Mo === null) throw Error(de(308));
      (wr = e), (Mo.dependencies = { lanes: 0, firstContext: e });
    } else wr = wr.next = e;
  return t;
}
var Qn = null;
function Qa(e) {
  Qn === null ? (Qn = [e]) : Qn.push(e);
}
function Yd(e, t, n, s) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Qa(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    vn(e, s)
  );
}
function vn(e, t) {
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
var Dn = !1;
function Ka(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Xd(e, t) {
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
function gn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function An(e, t, n) {
  var s = e.updateQueue;
  if (s === null) return null;
  if (((s = s.shared), Be & 2)) {
    var o = s.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (s.pending = t),
      vn(e, n)
    );
  }
  return (
    (o = s.interleaved),
    o === null ? ((t.next = t), Qa(s)) : ((t.next = o.next), (o.next = t)),
    (s.interleaved = t),
    vn(e, n)
  );
}
function lo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var s = t.lanes;
    (s &= e.pendingLanes), (n |= s), (t.lanes = n), Aa(e, n);
  }
}
function oc(e, t) {
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
function Eo(e, t, n, s) {
  var o = e.updateQueue;
  Dn = !1;
  var l = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    i = o.shared.pending;
  if (i !== null) {
    o.shared.pending = null;
    var c = i,
      g = c.next;
    (c.next = null), a === null ? (l = g) : (a.next = g), (a = c);
    var y = e.alternate;
    y !== null &&
      ((y = y.updateQueue),
      (i = y.lastBaseUpdate),
      i !== a &&
        (i === null ? (y.firstBaseUpdate = g) : (i.next = g),
        (y.lastBaseUpdate = c)));
  }
  if (l !== null) {
    var h = o.baseState;
    (a = 0), (y = g = c = null), (i = l);
    do {
      var p = i.lane,
        b = i.eventTime;
      if ((s & p) === p) {
        y !== null &&
          (y = y.next =
            {
              eventTime: b,
              lane: 0,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null,
            });
        e: {
          var N = e,
            S = i;
          switch (((p = t), (b = n), S.tag)) {
            case 1:
              if (((N = S.payload), typeof N == "function")) {
                h = N.call(b, h, p);
                break e;
              }
              h = N;
              break e;
            case 3:
              N.flags = (N.flags & -65537) | 128;
            case 0:
              if (
                ((N = S.payload),
                (p = typeof N == "function" ? N.call(b, h, p) : N),
                p == null)
              )
                break e;
              h = nt({}, h, p);
              break e;
            case 2:
              Dn = !0;
          }
        }
        i.callback !== null &&
          i.lane !== 0 &&
          ((e.flags |= 64),
          (p = o.effects),
          p === null ? (o.effects = [i]) : p.push(i));
      } else
        (b = {
          eventTime: b,
          lane: p,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null,
        }),
          y === null ? ((g = y = b), (c = h)) : (y = y.next = b),
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
      (y === null && (c = h),
      (o.baseState = c),
      (o.firstBaseUpdate = g),
      (o.lastBaseUpdate = y),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    (rr |= a), (e.lanes = a), (e.memoizedState = h);
  }
}
function lc(e, t, n) {
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
var $s = {},
  un = Fn($s),
  Cs = Fn($s),
  Ds = Fn($s);
function Kn(e) {
  if (e === $s) throw Error(de(174));
  return e;
}
function Ja(e, t) {
  switch ((qe(Ds, t), qe(Cs, e), qe(un, $s), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Gl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Gl(t, e));
  }
  Ye(un), qe(un, t);
}
function $r() {
  Ye(un), Ye(Cs), Ye(Ds);
}
function Qd(e) {
  Kn(Ds.current);
  var t = Kn(un.current),
    n = Gl(t, e.type);
  t !== n && (qe(Cs, e), qe(un, n));
}
function Za(e) {
  Cs.current === e && (Ye(un), Ye(Cs));
}
var et = Fn(0);
function Io(e) {
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
var jl = [];
function ei() {
  for (var e = 0; e < jl.length; e++)
    jl[e]._workInProgressVersionPrimary = null;
  jl.length = 0;
}
var ao = bn.ReactCurrentDispatcher,
  Sl = bn.ReactCurrentBatchConfig,
  nr = 0,
  tt = null,
  dt = null,
  pt = null,
  Po = !1,
  cs = !1,
  ks = 0,
  ym = 0;
function vt() {
  throw Error(de(321));
}
function ti(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!sn(e[n], t[n])) return !1;
  return !0;
}
function ni(e, t, n, s, o, l) {
  if (
    ((nr = l),
    (tt = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ao.current = e === null || e.memoizedState === null ? Nm : jm),
    (e = n(s, o)),
    cs)
  ) {
    l = 0;
    do {
      if (((cs = !1), (ks = 0), 25 <= l)) throw Error(de(301));
      (l += 1),
        (pt = dt = null),
        (t.updateQueue = null),
        (ao.current = Sm),
        (e = n(s, o));
    } while (cs);
  }
  if (
    ((ao.current = To),
    (t = dt !== null && dt.next !== null),
    (nr = 0),
    (pt = dt = tt = null),
    (Po = !1),
    t)
  )
    throw Error(de(300));
  return e;
}
function ri() {
  var e = ks !== 0;
  return (ks = 0), e;
}
function an() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return pt === null ? (tt.memoizedState = pt = e) : (pt = pt.next = e), pt;
}
function Xt() {
  if (dt === null) {
    var e = tt.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = dt.next;
  var t = pt === null ? tt.memoizedState : pt.next;
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
      pt === null ? (tt.memoizedState = pt = e) : (pt = pt.next = e);
  }
  return pt;
}
function _s(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Cl(e) {
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
      g = l;
    do {
      var y = g.lane;
      if ((nr & y) === y)
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
          lane: y,
          action: g.action,
          hasEagerState: g.hasEagerState,
          eagerState: g.eagerState,
          next: null,
        };
        c === null ? ((i = c = h), (a = s)) : (c = c.next = h),
          (tt.lanes |= y),
          (rr |= y);
      }
      g = g.next;
    } while (g !== null && g !== l);
    c === null ? (a = s) : (c.next = i),
      sn(s, t.memoizedState) || (Mt = !0),
      (t.memoizedState = s),
      (t.baseState = a),
      (t.baseQueue = c),
      (n.lastRenderedState = s);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (tt.lanes |= l), (rr |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Dl(e) {
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
    sn(l, t.memoizedState) || (Mt = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, s];
}
function Kd() {}
function Jd(e, t) {
  var n = tt,
    s = Xt(),
    o = t(),
    l = !sn(s.memoizedState, o);
  if (
    (l && ((s.memoizedState = o), (Mt = !0)),
    (s = s.queue),
    si(tu.bind(null, n, s, e), [e]),
    s.getSnapshot !== t || l || (pt !== null && pt.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ms(9, eu.bind(null, n, s, o, t), void 0, null),
      mt === null)
    )
      throw Error(de(349));
    nr & 30 || Zd(n, t, o);
  }
  return o;
}
function Zd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = tt.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (tt.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function eu(e, t, n, s) {
  (t.value = n), (t.getSnapshot = s), nu(t) && ru(e);
}
function tu(e, t, n) {
  return n(function () {
    nu(t) && ru(e);
  });
}
function nu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !sn(e, n);
  } catch {
    return !0;
  }
}
function ru(e) {
  var t = vn(e, 1);
  t !== null && rn(t, e, 1, -1);
}
function ac(e) {
  var t = an();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: _s,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = bm.bind(null, tt, e)),
    [t.memoizedState, e]
  );
}
function Ms(e, t, n, s) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: s, next: null }),
    (t = tt.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (tt.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((s = n.next), (n.next = e), (e.next = s), (t.lastEffect = e))),
    e
  );
}
function su() {
  return Xt().memoizedState;
}
function io(e, t, n, s) {
  var o = an();
  (tt.flags |= e),
    (o.memoizedState = Ms(1 | t, n, void 0, s === void 0 ? null : s));
}
function qo(e, t, n, s) {
  var o = Xt();
  s = s === void 0 ? null : s;
  var l = void 0;
  if (dt !== null) {
    var a = dt.memoizedState;
    if (((l = a.destroy), s !== null && ti(s, a.deps))) {
      o.memoizedState = Ms(t, n, l, s);
      return;
    }
  }
  (tt.flags |= e), (o.memoizedState = Ms(1 | t, n, l, s));
}
function ic(e, t) {
  return io(8390656, 8, e, t);
}
function si(e, t) {
  return qo(2048, 8, e, t);
}
function ou(e, t) {
  return qo(4, 2, e, t);
}
function lu(e, t) {
  return qo(4, 4, e, t);
}
function au(e, t) {
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
function iu(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), qo(4, 4, au.bind(null, t, e), n)
  );
}
function oi() {}
function cu(e, t) {
  var n = Xt();
  t = t === void 0 ? null : t;
  var s = n.memoizedState;
  return s !== null && t !== null && ti(t, s[1])
    ? s[0]
    : ((n.memoizedState = [e, t]), e);
}
function du(e, t) {
  var n = Xt();
  t = t === void 0 ? null : t;
  var s = n.memoizedState;
  return s !== null && t !== null && ti(t, s[1])
    ? s[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function uu(e, t, n) {
  return nr & 21
    ? (sn(n, t) || ((n = gd()), (tt.lanes |= n), (rr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Mt = !0)), (e.memoizedState = n));
}
function vm(e, t) {
  var n = He;
  (He = n !== 0 && 4 > n ? n : 4), e(!0);
  var s = Sl.transition;
  Sl.transition = {};
  try {
    e(!1), t();
  } finally {
    (He = n), (Sl.transition = s);
  }
}
function fu() {
  return Xt().memoizedState;
}
function wm(e, t, n) {
  var s = Un(e);
  if (
    ((n = {
      lane: s,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    pu(e))
  )
    mu(t, n);
  else if (((n = Yd(e, t, n, s)), n !== null)) {
    var o = St();
    rn(n, e, s, o), hu(n, t, s);
  }
}
function bm(e, t, n) {
  var s = Un(e),
    o = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (pu(e)) mu(t, o);
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
        if (((o.hasEagerState = !0), (o.eagerState = i), sn(i, a))) {
          var c = t.interleaved;
          c === null
            ? ((o.next = o), Qa(t))
            : ((o.next = c.next), (c.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Yd(e, t, o, s)),
      n !== null && ((o = St()), rn(n, e, s, o), hu(n, t, s));
  }
}
function pu(e) {
  var t = e.alternate;
  return e === tt || (t !== null && t === tt);
}
function mu(e, t) {
  cs = Po = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function hu(e, t, n) {
  if (n & 4194240) {
    var s = t.lanes;
    (s &= e.pendingLanes), (n |= s), (t.lanes = n), Aa(e, n);
  }
}
var To = {
    readContext: Yt,
    useCallback: vt,
    useContext: vt,
    useEffect: vt,
    useImperativeHandle: vt,
    useInsertionEffect: vt,
    useLayoutEffect: vt,
    useMemo: vt,
    useReducer: vt,
    useRef: vt,
    useState: vt,
    useDebugValue: vt,
    useDeferredValue: vt,
    useTransition: vt,
    useMutableSource: vt,
    useSyncExternalStore: vt,
    useId: vt,
    unstable_isNewReconciler: !1,
  },
  Nm = {
    readContext: Yt,
    useCallback: function (e, t) {
      return (an().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Yt,
    useEffect: ic,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        io(4194308, 4, au.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return io(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return io(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = an();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var s = an();
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
        (e = e.dispatch = wm.bind(null, tt, e)),
        [s.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = an();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ac,
    useDebugValue: oi,
    useDeferredValue: function (e) {
      return (an().memoizedState = e);
    },
    useTransition: function () {
      var e = ac(!1),
        t = e[0];
      return (e = vm.bind(null, e[1])), (an().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var s = tt,
        o = an();
      if (Ke) {
        if (n === void 0) throw Error(de(407));
        n = n();
      } else {
        if (((n = t()), mt === null)) throw Error(de(349));
        nr & 30 || Zd(s, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        ic(tu.bind(null, s, l, e), [e]),
        (s.flags |= 2048),
        Ms(9, eu.bind(null, s, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = an(),
        t = mt.identifierPrefix;
      if (Ke) {
        var n = hn,
          s = mn;
        (n = (s & ~(1 << (32 - nn(s) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ks++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = ym++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  jm = {
    readContext: Yt,
    useCallback: cu,
    useContext: Yt,
    useEffect: si,
    useImperativeHandle: iu,
    useInsertionEffect: ou,
    useLayoutEffect: lu,
    useMemo: du,
    useReducer: Cl,
    useRef: su,
    useState: function () {
      return Cl(_s);
    },
    useDebugValue: oi,
    useDeferredValue: function (e) {
      var t = Xt();
      return uu(t, dt.memoizedState, e);
    },
    useTransition: function () {
      var e = Cl(_s)[0],
        t = Xt().memoizedState;
      return [e, t];
    },
    useMutableSource: Kd,
    useSyncExternalStore: Jd,
    useId: fu,
    unstable_isNewReconciler: !1,
  },
  Sm = {
    readContext: Yt,
    useCallback: cu,
    useContext: Yt,
    useEffect: si,
    useImperativeHandle: iu,
    useInsertionEffect: ou,
    useLayoutEffect: lu,
    useMemo: du,
    useReducer: Dl,
    useRef: su,
    useState: function () {
      return Dl(_s);
    },
    useDebugValue: oi,
    useDeferredValue: function (e) {
      var t = Xt();
      return dt === null ? (t.memoizedState = e) : uu(t, dt.memoizedState, e);
    },
    useTransition: function () {
      var e = Dl(_s)[0],
        t = Xt().memoizedState;
      return [e, t];
    },
    useMutableSource: Kd,
    useSyncExternalStore: Jd,
    useId: fu,
    unstable_isNewReconciler: !1,
  };
function Zt(e, t) {
  if (e && e.defaultProps) {
    (t = nt({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function aa(e, t, n, s) {
  (t = e.memoizedState),
    (n = n(s, t)),
    (n = n == null ? t : nt({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Wo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? lr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var s = St(),
      o = Un(e),
      l = gn(s, o);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = An(e, l, o)),
      t !== null && (rn(t, e, o, s), lo(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var s = St(),
      o = Un(e),
      l = gn(s, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = An(e, l, o)),
      t !== null && (rn(t, e, o, s), lo(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = St(),
      s = Un(e),
      o = gn(n, s);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = An(e, o, s)),
      t !== null && (rn(t, e, s, n), lo(t, e, s));
  },
};
function cc(e, t, n, s, o, l, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(s, l, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !bs(n, s) || !bs(o, l)
      : !0
  );
}
function gu(e, t, n) {
  var s = !1,
    o = zn,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = Yt(l))
      : ((o = Tt(t) ? er : Nt.current),
        (s = t.contextTypes),
        (l = (s = s != null) ? Pr(e, o) : zn)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Wo),
    (e.stateNode = t),
    (t._reactInternals = e),
    s &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function dc(e, t, n, s) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, s),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, s),
    t.state !== e && Wo.enqueueReplaceState(t, t.state, null);
}
function ia(e, t, n, s) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Ka(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = Yt(l))
    : ((l = Tt(t) ? er : Nt.current), (o.context = Pr(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (aa(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Wo.enqueueReplaceState(o, o.state, null),
      Eo(e, n, o, s),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ar(e, t) {
  try {
    var n = "",
      s = t;
    do (n += Jf(s)), (s = s.return);
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
function kl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ca(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Cm = typeof WeakMap == "function" ? WeakMap : Map;
function xu(e, t, n) {
  (n = gn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var s = t.value;
  return (
    (n.callback = function () {
      $o || (($o = !0), (va = s)), ca(e, t);
    }),
    n
  );
}
function yu(e, t, n) {
  (n = gn(-1, n)), (n.tag = 3);
  var s = e.type.getDerivedStateFromError;
  if (typeof s == "function") {
    var o = t.value;
    (n.payload = function () {
      return s(o);
    }),
      (n.callback = function () {
        ca(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        ca(e, t),
          typeof s != "function" &&
            (On === null ? (On = new Set([this])) : On.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function uc(e, t, n) {
  var s = e.pingCache;
  if (s === null) {
    s = e.pingCache = new Cm();
    var o = new Set();
    s.set(t, o);
  } else (o = s.get(t)), o === void 0 && ((o = new Set()), s.set(t, o));
  o.has(n) || (o.add(n), (e = Lm.bind(null, e, t, n)), t.then(e, e));
}
function fc(e) {
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
function pc(e, t, n, s, o) {
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
              : ((t = gn(-1, 1)), (t.tag = 2), An(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Dm = bn.ReactCurrentOwner,
  Mt = !1;
function jt(e, t, n, s) {
  t.child = e === null ? Wd(t, null, n, s) : Rr(t, e.child, n, s);
}
function mc(e, t, n, s, o) {
  n = n.render;
  var l = t.ref;
  return (
    Mr(t, o),
    (s = ni(e, t, n, s, l, o)),
    (n = ri()),
    e !== null && !Mt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        wn(e, t, o))
      : (Ke && n && Ha(t), (t.flags |= 1), jt(e, t, s, o), t.child)
  );
}
function hc(e, t, n, s, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !pi(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), vu(e, t, l, s, o))
      : ((e = po(n.type, null, s, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var a = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : bs), n(a, s) && e.ref === t.ref)
    )
      return wn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Ln(l, s)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function vu(e, t, n, s, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (bs(l, s) && e.ref === t.ref)
      if (((Mt = !1), (t.pendingProps = s = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (Mt = !0);
      else return (t.lanes = e.lanes), wn(e, t, o);
  }
  return da(e, t, n, s, o);
}
function wu(e, t, n) {
  var s = t.pendingProps,
    o = s.children,
    l = e !== null ? e.memoizedState : null;
  if (s.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        qe(Nr, Ot),
        (Ot |= n);
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
          qe(Nr, Ot),
          (Ot |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (s = l !== null ? l.baseLanes : n),
        qe(Nr, Ot),
        (Ot |= s);
    }
  else
    l !== null ? ((s = l.baseLanes | n), (t.memoizedState = null)) : (s = n),
      qe(Nr, Ot),
      (Ot |= s);
  return jt(e, t, o, n), t.child;
}
function bu(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function da(e, t, n, s, o) {
  var l = Tt(n) ? er : Nt.current;
  return (
    (l = Pr(t, l)),
    Mr(t, o),
    (n = ni(e, t, n, s, l, o)),
    (s = ri()),
    e !== null && !Mt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        wn(e, t, o))
      : (Ke && s && Ha(t), (t.flags |= 1), jt(e, t, n, o), t.child)
  );
}
function gc(e, t, n, s, o) {
  if (Tt(n)) {
    var l = !0;
    Co(t);
  } else l = !1;
  if ((Mr(t, o), t.stateNode === null))
    co(e, t), gu(t, n, s), ia(t, n, s, o), (s = !0);
  else if (e === null) {
    var a = t.stateNode,
      i = t.memoizedProps;
    a.props = i;
    var c = a.context,
      g = n.contextType;
    typeof g == "object" && g !== null
      ? (g = Yt(g))
      : ((g = Tt(n) ? er : Nt.current), (g = Pr(t, g)));
    var y = n.getDerivedStateFromProps,
      h =
        typeof y == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((i !== s || c !== g) && dc(t, a, s, g)),
      (Dn = !1);
    var p = t.memoizedState;
    (a.state = p),
      Eo(t, s, a, o),
      (c = t.memoizedState),
      i !== s || p !== c || Pt.current || Dn
        ? (typeof y == "function" && (aa(t, n, y, s), (c = t.memoizedState)),
          (i = Dn || cc(t, n, i, s, p, c, g))
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
      Xd(e, t),
      (i = t.memoizedProps),
      (g = t.type === t.elementType ? i : Zt(t.type, i)),
      (a.props = g),
      (h = t.pendingProps),
      (p = a.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = Yt(c))
        : ((c = Tt(n) ? er : Nt.current), (c = Pr(t, c)));
    var b = n.getDerivedStateFromProps;
    (y =
      typeof b == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((i !== h || p !== c) && dc(t, a, s, c)),
      (Dn = !1),
      (p = t.memoizedState),
      (a.state = p),
      Eo(t, s, a, o);
    var N = t.memoizedState;
    i !== h || p !== N || Pt.current || Dn
      ? (typeof b == "function" && (aa(t, n, b, s), (N = t.memoizedState)),
        (g = Dn || cc(t, n, g, s, p, N, c) || !1)
          ? (y ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(s, N, c),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(s, N, c)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (i === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (i === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = s),
            (t.memoizedState = N)),
        (a.props = s),
        (a.state = N),
        (a.context = c),
        (s = g))
      : (typeof a.componentDidUpdate != "function" ||
          (i === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (i === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (s = !1));
  }
  return ua(e, t, n, s, l, o);
}
function ua(e, t, n, s, o, l) {
  bu(e, t);
  var a = (t.flags & 128) !== 0;
  if (!s && !a) return o && tc(t, n, !1), wn(e, t, l);
  (s = t.stateNode), (Dm.current = t);
  var i =
    a && typeof n.getDerivedStateFromError != "function" ? null : s.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Rr(t, e.child, null, l)), (t.child = Rr(t, null, i, l)))
      : jt(e, t, i, l),
    (t.memoizedState = s.state),
    o && tc(t, n, !0),
    t.child
  );
}
function Nu(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ec(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ec(e, t.context, !1),
    Ja(e, t.containerInfo);
}
function xc(e, t, n, s, o) {
  return Tr(), qa(o), (t.flags |= 256), jt(e, t, n, s), t.child;
}
var fa = { dehydrated: null, treeContext: null, retryLane: 0 };
function pa(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ju(e, t, n) {
  var s = t.pendingProps,
    o = et.current,
    l = !1,
    a = (t.flags & 128) !== 0,
    i;
  if (
    ((i = a) ||
      (i = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    i
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    qe(et, o & 1),
    e === null)
  )
    return (
      oa(t),
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
                : (l = Qo(a, s, 0, null)),
              (e = Zn(e, s, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = pa(n)),
              (t.memoizedState = fa),
              e)
            : li(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((i = o.dehydrated), i !== null)))
    return km(e, t, a, s, i, o, n);
  if (l) {
    (l = s.fallback), (a = t.mode), (o = e.child), (i = o.sibling);
    var c = { mode: "hidden", children: s.children };
    return (
      !(a & 1) && t.child !== o
        ? ((s = t.child),
          (s.childLanes = 0),
          (s.pendingProps = c),
          (t.deletions = null))
        : ((s = Ln(o, c)), (s.subtreeFlags = o.subtreeFlags & 14680064)),
      i !== null ? (l = Ln(i, l)) : ((l = Zn(l, a, n, null)), (l.flags |= 2)),
      (l.return = t),
      (s.return = t),
      (s.sibling = l),
      (t.child = s),
      (s = l),
      (l = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? pa(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (l.memoizedState = a),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = fa),
      s
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (s = Ln(l, { mode: "visible", children: s.children })),
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
function li(e, t) {
  return (
    (t = Qo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Qs(e, t, n, s) {
  return (
    s !== null && qa(s),
    Rr(t, e.child, null, n),
    (e = li(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function km(e, t, n, s, o, l, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (s = kl(Error(de(422)))), Qs(e, t, a, s))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = s.fallback),
        (o = t.mode),
        (s = Qo({ mode: "visible", children: s.children }, o, 0, null)),
        (l = Zn(l, o, a, null)),
        (l.flags |= 2),
        (s.return = t),
        (l.return = t),
        (s.sibling = l),
        (t.child = s),
        t.mode & 1 && Rr(t, e.child, null, a),
        (t.child.memoizedState = pa(a)),
        (t.memoizedState = fa),
        l);
  if (!(t.mode & 1)) return Qs(e, t, a, null);
  if (o.data === "$!") {
    if (((s = o.nextSibling && o.nextSibling.dataset), s)) var i = s.dgst;
    return (
      (s = i), (l = Error(de(419))), (s = kl(l, s, void 0)), Qs(e, t, a, s)
    );
  }
  if (((i = (a & e.childLanes) !== 0), Mt || i)) {
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
          ((l.retryLane = o), vn(e, o), rn(s, e, o, -1));
    }
    return fi(), (s = kl(Error(de(421)))), Qs(e, t, a, s);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Gm.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Ut = $n(o.nextSibling)),
      (Lt = t),
      (Ke = !0),
      (tn = null),
      e !== null &&
        ((Ht[Vt++] = mn),
        (Ht[Vt++] = hn),
        (Ht[Vt++] = tr),
        (mn = e.id),
        (hn = e.overflow),
        (tr = t)),
      (t = li(t, s.children)),
      (t.flags |= 4096),
      t);
}
function yc(e, t, n) {
  e.lanes |= t;
  var s = e.alternate;
  s !== null && (s.lanes |= t), la(e.return, t, n);
}
function _l(e, t, n, s, o) {
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
function Su(e, t, n) {
  var s = t.pendingProps,
    o = s.revealOrder,
    l = s.tail;
  if ((jt(e, t, s.children, n), (s = et.current), s & 2))
    (s = (s & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && yc(e, n, t);
        else if (e.tag === 19) yc(e, n, t);
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
  if ((qe(et, s), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Io(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          _l(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Io(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        _l(t, !0, n, null, l);
        break;
      case "together":
        _l(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function co(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function wn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (rr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(de(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ln(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ln(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function _m(e, t, n) {
  switch (t.tag) {
    case 3:
      Nu(t), Tr();
      break;
    case 5:
      Qd(t);
      break;
    case 1:
      Tt(t.type) && Co(t);
      break;
    case 4:
      Ja(t, t.stateNode.containerInfo);
      break;
    case 10:
      var s = t.type._context,
        o = t.memoizedProps.value;
      qe(_o, s._currentValue), (s._currentValue = o);
      break;
    case 13:
      if (((s = t.memoizedState), s !== null))
        return s.dehydrated !== null
          ? (qe(et, et.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? ju(e, t, n)
          : (qe(et, et.current & 1),
            (e = wn(e, t, n)),
            e !== null ? e.sibling : null);
      qe(et, et.current & 1);
      break;
    case 19:
      if (((s = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (s) return Su(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        qe(et, et.current),
        s)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), wu(e, t, n);
  }
  return wn(e, t, n);
}
var Cu, ma, Du, ku;
Cu = function (e, t) {
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
ma = function () {};
Du = function (e, t, n, s) {
  var o = e.memoizedProps;
  if (o !== s) {
    (e = t.stateNode), Kn(un.current);
    var l = null;
    switch (n) {
      case "input":
        (o = Al(e, o)), (s = Al(e, s)), (l = []);
        break;
      case "select":
        (o = nt({}, o, { value: void 0 })),
          (s = nt({}, s, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = Ll(e, o)), (s = Ll(e, s)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof s.onClick == "function" &&
          (e.onclick = jo);
    }
    zl(n, s);
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
            (ms.hasOwnProperty(g)
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
              (ms.hasOwnProperty(g)
                ? (c != null && g === "onScroll" && We("scroll", e),
                  l || i === c || (l = []))
                : (l = l || []).push(g, c));
    }
    n && (l = l || []).push("style", n);
    var g = l;
    (t.updateQueue = g) && (t.flags |= 4);
  }
};
ku = function (e, t, n, s) {
  n !== s && (t.flags |= 4);
};
function Kr(e, t) {
  if (!Ke)
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
function Mm(e, t, n) {
  var s = t.pendingProps;
  switch ((Va(t), t.tag)) {
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
      return Tt(t.type) && So(), wt(t), null;
    case 3:
      return (
        (s = t.stateNode),
        $r(),
        Ye(Pt),
        Ye(Nt),
        ei(),
        s.pendingContext &&
          ((s.context = s.pendingContext), (s.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ys(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), tn !== null && (Na(tn), (tn = null)))),
        ma(e, t),
        wt(t),
        null
      );
    case 5:
      Za(t);
      var o = Kn(Ds.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Du(e, t, n, s, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!s) {
          if (t.stateNode === null) throw Error(de(166));
          return wt(t), null;
        }
        if (((e = Kn(un.current)), Ys(t))) {
          (s = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((s[cn] = t), (s[Ss] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              We("cancel", s), We("close", s);
              break;
            case "iframe":
            case "object":
            case "embed":
              We("load", s);
              break;
            case "video":
            case "audio":
              for (o = 0; o < rs.length; o++) We(rs[o], s);
              break;
            case "source":
              We("error", s);
              break;
            case "img":
            case "image":
            case "link":
              We("error", s), We("load", s);
              break;
            case "details":
              We("toggle", s);
              break;
            case "input":
              ki(s, l), We("invalid", s);
              break;
            case "select":
              (s._wrapperState = { wasMultiple: !!l.multiple }),
                We("invalid", s);
              break;
            case "textarea":
              Mi(s, l), We("invalid", s);
          }
          zl(n, l), (o = null);
          for (var a in l)
            if (l.hasOwnProperty(a)) {
              var i = l[a];
              a === "children"
                ? typeof i == "string"
                  ? s.textContent !== i &&
                    (l.suppressHydrationWarning !== !0 &&
                      Ws(s.textContent, i, e),
                    (o = ["children", i]))
                  : typeof i == "number" &&
                    s.textContent !== "" + i &&
                    (l.suppressHydrationWarning !== !0 &&
                      Ws(s.textContent, i, e),
                    (o = ["children", "" + i]))
                : ms.hasOwnProperty(a) &&
                  i != null &&
                  a === "onScroll" &&
                  We("scroll", s);
            }
          switch (n) {
            case "input":
              Ls(s), _i(s, l, !0);
              break;
            case "textarea":
              Ls(s), Ei(s);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (s.onclick = jo);
          }
          (s = o), (t.updateQueue = s), s !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = td(n)),
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
            (e[cn] = t),
            (e[Ss] = s),
            Cu(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Bl(n, s)), n)) {
              case "dialog":
                We("cancel", e), We("close", e), (o = s);
                break;
              case "iframe":
              case "object":
              case "embed":
                We("load", e), (o = s);
                break;
              case "video":
              case "audio":
                for (o = 0; o < rs.length; o++) We(rs[o], e);
                o = s;
                break;
              case "source":
                We("error", e), (o = s);
                break;
              case "img":
              case "image":
              case "link":
                We("error", e), We("load", e), (o = s);
                break;
              case "details":
                We("toggle", e), (o = s);
                break;
              case "input":
                ki(e, s), (o = Al(e, s)), We("invalid", e);
                break;
              case "option":
                o = s;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!s.multiple }),
                  (o = nt({}, s, { value: void 0 })),
                  We("invalid", e);
                break;
              case "textarea":
                Mi(e, s), (o = Ll(e, s)), We("invalid", e);
                break;
              default:
                o = s;
            }
            zl(n, o), (i = o);
            for (l in i)
              if (i.hasOwnProperty(l)) {
                var c = i[l];
                l === "style"
                  ? sd(e, c)
                  : l === "dangerouslySetInnerHTML"
                  ? ((c = c ? c.__html : void 0), c != null && nd(e, c))
                  : l === "children"
                  ? typeof c == "string"
                    ? (n !== "textarea" || c !== "") && hs(e, c)
                    : typeof c == "number" && hs(e, "" + c)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (ms.hasOwnProperty(l)
                      ? c != null && l === "onScroll" && We("scroll", e)
                      : c != null && Ea(e, l, c, a));
              }
            switch (n) {
              case "input":
                Ls(e), _i(e, s, !1);
                break;
              case "textarea":
                Ls(e), Ei(e);
                break;
              case "option":
                s.value != null && e.setAttribute("value", "" + Gn(s.value));
                break;
              case "select":
                (e.multiple = !!s.multiple),
                  (l = s.value),
                  l != null
                    ? Cr(e, !!s.multiple, l, !1)
                    : s.defaultValue != null &&
                      Cr(e, !!s.multiple, s.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = jo);
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
      if (e && t.stateNode != null) ku(e, t, e.memoizedProps, s);
      else {
        if (typeof s != "string" && t.stateNode === null) throw Error(de(166));
        if (((n = Kn(Ds.current)), Kn(un.current), Ys(t))) {
          if (
            ((s = t.stateNode),
            (n = t.memoizedProps),
            (s[cn] = t),
            (l = s.nodeValue !== n) && ((e = Lt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ws(s.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ws(s.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (s = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(s)),
            (s[cn] = t),
            (t.stateNode = s);
      }
      return wt(t), null;
    case 13:
      if (
        (Ye(et),
        (s = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Ke && Ut !== null && t.mode & 1 && !(t.flags & 128))
          Vd(), Tr(), (t.flags |= 98560), (l = !1);
        else if (((l = Ys(t)), s !== null && s.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(de(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(de(317));
            l[cn] = t;
          } else
            Tr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          wt(t), (l = !1);
        } else tn !== null && (Na(tn), (tn = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((s = s !== null),
          s !== (e !== null && e.memoizedState !== null) &&
            s &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || et.current & 1 ? ut === 0 && (ut = 3) : fi())),
          t.updateQueue !== null && (t.flags |= 4),
          wt(t),
          null);
    case 4:
      return (
        $r(), ma(e, t), e === null && Ns(t.stateNode.containerInfo), wt(t), null
      );
    case 10:
      return Xa(t.type._context), wt(t), null;
    case 17:
      return Tt(t.type) && So(), wt(t), null;
    case 19:
      if ((Ye(et), (l = t.memoizedState), l === null)) return wt(t), null;
      if (((s = (t.flags & 128) !== 0), (a = l.rendering), a === null))
        if (s) Kr(l, !1);
        else {
          if (ut !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Io(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Kr(l, !1),
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
                return qe(et, (et.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            at() > Or &&
            ((t.flags |= 128), (s = !0), Kr(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!s)
          if (((e = Io(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (s = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Kr(l, !0),
              l.tail === null && l.tailMode === "hidden" && !a.alternate && !Ke)
            )
              return wt(t), null;
          } else
            2 * at() - l.renderingStartTime > Or &&
              n !== 1073741824 &&
              ((t.flags |= 128), (s = !0), Kr(l, !1), (t.lanes = 4194304));
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
          (l.renderingStartTime = at()),
          (t.sibling = null),
          (n = et.current),
          qe(et, s ? (n & 1) | 2 : n & 1),
          t)
        : (wt(t), null);
    case 22:
    case 23:
      return (
        ui(),
        (s = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== s && (t.flags |= 8192),
        s && t.mode & 1
          ? Ot & 1073741824 && (wt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
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
function Em(e, t) {
  switch ((Va(t), t.tag)) {
    case 1:
      return (
        Tt(t.type) && So(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        $r(),
        Ye(Pt),
        Ye(Nt),
        ei(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Za(t), null;
    case 13:
      if (
        (Ye(et), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(de(340));
        Tr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Ye(et), null;
    case 4:
      return $r(), null;
    case 10:
      return Xa(t.type._context), null;
    case 22:
    case 23:
      return ui(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ks = !1,
  bt = !1,
  Im = typeof WeakSet == "function" ? WeakSet : Set,
  be = null;
function br(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (s) {
        st(e, t, s);
      }
    else n.current = null;
}
function ha(e, t, n) {
  try {
    n();
  } catch (s) {
    st(e, t, s);
  }
}
var vc = !1;
function Pm(e, t) {
  if (((Jl = wo), (e = Pd()), Fa(e))) {
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
            y = 0,
            h = e,
            p = null;
          t: for (;;) {
            for (
              var b;
              h !== n || (o !== 0 && h.nodeType !== 3) || (i = a + o),
                h !== l || (s !== 0 && h.nodeType !== 3) || (c = a + s),
                h.nodeType === 3 && (a += h.nodeValue.length),
                (b = h.firstChild) !== null;

            )
              (p = h), (h = b);
            for (;;) {
              if (h === e) break t;
              if (
                (p === n && ++g === o && (i = a),
                p === l && ++y === s && (c = a),
                (b = h.nextSibling) !== null)
              )
                break;
              (h = p), (p = h.parentNode);
            }
            h = b;
          }
          n = i === -1 || c === -1 ? null : { start: i, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (
    Zl = { focusedElem: e, selectionRange: n }, wo = !1, be = t;
    be !== null;

  )
    if (((t = be), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (be = e);
    else
      for (; be !== null; ) {
        t = be;
        try {
          var N = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (N !== null) {
                  var S = N.memoizedProps,
                    A = N.memoizedState,
                    d = t.stateNode,
                    u = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : Zt(t.type, S),
                      A
                    );
                  d.__reactInternalSnapshotBeforeUpdate = u;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(de(163));
            }
        } catch (C) {
          st(t, t.return, C);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (be = e);
          break;
        }
        be = t.return;
      }
  return (N = vc), (vc = !1), N;
}
function ds(e, t, n) {
  var s = t.updateQueue;
  if (((s = s !== null ? s.lastEffect : null), s !== null)) {
    var o = (s = s.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && ha(t, n, l);
      }
      o = o.next;
    } while (o !== s);
  }
}
function Yo(e, t) {
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
function ga(e) {
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
function _u(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), _u(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[cn], delete t[Ss], delete t[na], delete t[mm], delete t[hm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Mu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function wc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Mu(e.return)) return null;
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
function xa(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = jo));
  else if (s !== 4 && ((e = e.child), e !== null))
    for (xa(e, t, n), e = e.sibling; e !== null; ) xa(e, t, n), (e = e.sibling);
}
function ya(e, t, n) {
  var s = e.tag;
  if (s === 5 || s === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (s !== 4 && ((e = e.child), e !== null))
    for (ya(e, t, n), e = e.sibling; e !== null; ) ya(e, t, n), (e = e.sibling);
}
var gt = null,
  en = !1;
function Sn(e, t, n) {
  for (n = n.child; n !== null; ) Eu(e, t, n), (n = n.sibling);
}
function Eu(e, t, n) {
  if (dn && typeof dn.onCommitFiberUnmount == "function")
    try {
      dn.onCommitFiberUnmount(Go, n);
    } catch {}
  switch (n.tag) {
    case 5:
      bt || br(n, t);
    case 6:
      var s = gt,
        o = en;
      (gt = null),
        Sn(e, t, n),
        (gt = s),
        (en = o),
        gt !== null &&
          (en
            ? ((e = gt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : gt.removeChild(n.stateNode));
      break;
    case 18:
      gt !== null &&
        (en
          ? ((e = gt),
            (n = n.stateNode),
            e.nodeType === 8
              ? bl(e.parentNode, n)
              : e.nodeType === 1 && bl(e, n),
            vs(e))
          : bl(gt, n.stateNode));
      break;
    case 4:
      (s = gt),
        (o = en),
        (gt = n.stateNode.containerInfo),
        (en = !0),
        Sn(e, t, n),
        (gt = s),
        (en = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !bt &&
        ((s = n.updateQueue), s !== null && ((s = s.lastEffect), s !== null))
      ) {
        o = s = s.next;
        do {
          var l = o,
            a = l.destroy;
          (l = l.tag),
            a !== void 0 && (l & 2 || l & 4) && ha(n, t, a),
            (o = o.next);
        } while (o !== s);
      }
      Sn(e, t, n);
      break;
    case 1:
      if (
        !bt &&
        (br(n, t),
        (s = n.stateNode),
        typeof s.componentWillUnmount == "function")
      )
        try {
          (s.props = n.memoizedProps),
            (s.state = n.memoizedState),
            s.componentWillUnmount();
        } catch (i) {
          st(n, t, i);
        }
      Sn(e, t, n);
      break;
    case 21:
      Sn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((bt = (s = bt) || n.memoizedState !== null), Sn(e, t, n), (bt = s))
        : Sn(e, t, n);
      break;
    default:
      Sn(e, t, n);
  }
}
function bc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Im()),
      t.forEach(function (s) {
        var o = zm.bind(null, e, s);
        n.has(s) || (n.add(s), s.then(o, o));
      });
  }
}
function Jt(e, t) {
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
              (gt = i.stateNode), (en = !1);
              break e;
            case 3:
              (gt = i.stateNode.containerInfo), (en = !0);
              break e;
            case 4:
              (gt = i.stateNode.containerInfo), (en = !0);
              break e;
          }
          i = i.return;
        }
        if (gt === null) throw Error(de(160));
        Eu(l, a, o), (gt = null), (en = !1);
        var c = o.alternate;
        c !== null && (c.return = null), (o.return = null);
      } catch (g) {
        st(o, t, g);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Iu(t, e), (t = t.sibling);
}
function Iu(e, t) {
  var n = e.alternate,
    s = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Jt(t, e), on(e), s & 4)) {
        try {
          ds(3, e, e.return), Yo(3, e);
        } catch (S) {
          st(e, e.return, S);
        }
        try {
          ds(5, e, e.return);
        } catch (S) {
          st(e, e.return, S);
        }
      }
      break;
    case 1:
      Jt(t, e), on(e), s & 512 && n !== null && br(n, n.return);
      break;
    case 5:
      if (
        (Jt(t, e),
        on(e),
        s & 512 && n !== null && br(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          hs(o, "");
        } catch (S) {
          st(e, e.return, S);
        }
      }
      if (s & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          a = n !== null ? n.memoizedProps : l,
          i = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            i === "input" && l.type === "radio" && l.name != null && Zc(o, l),
              Bl(i, a);
            var g = Bl(i, l);
            for (a = 0; a < c.length; a += 2) {
              var y = c[a],
                h = c[a + 1];
              y === "style"
                ? sd(o, h)
                : y === "dangerouslySetInnerHTML"
                ? nd(o, h)
                : y === "children"
                ? hs(o, h)
                : Ea(o, y, h, g);
            }
            switch (i) {
              case "input":
                Ol(o, l);
                break;
              case "textarea":
                ed(o, l);
                break;
              case "select":
                var p = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var b = l.value;
                b != null
                  ? Cr(o, !!l.multiple, b, !1)
                  : p !== !!l.multiple &&
                    (l.defaultValue != null
                      ? Cr(o, !!l.multiple, l.defaultValue, !0)
                      : Cr(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[Ss] = l;
          } catch (S) {
            st(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((Jt(t, e), on(e), s & 4)) {
        if (e.stateNode === null) throw Error(de(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (S) {
          st(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (Jt(t, e), on(e), s & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          vs(t.containerInfo);
        } catch (S) {
          st(e, e.return, S);
        }
      break;
    case 4:
      Jt(t, e), on(e);
      break;
    case 13:
      Jt(t, e),
        on(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (ci = at())),
        s & 4 && bc(e);
      break;
    case 22:
      if (
        ((y = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((bt = (g = bt) || y), Jt(t, e), (bt = g)) : Jt(t, e),
        on(e),
        s & 8192)
      ) {
        if (
          ((g = e.memoizedState !== null),
          (e.stateNode.isHidden = g) && !y && e.mode & 1)
        )
          for (be = e, y = e.child; y !== null; ) {
            for (h = be = y; be !== null; ) {
              switch (((p = be), (b = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ds(4, p, p.return);
                  break;
                case 1:
                  br(p, p.return);
                  var N = p.stateNode;
                  if (typeof N.componentWillUnmount == "function") {
                    (s = p), (n = p.return);
                    try {
                      (t = s),
                        (N.props = t.memoizedProps),
                        (N.state = t.memoizedState),
                        N.componentWillUnmount();
                    } catch (S) {
                      st(s, n, S);
                    }
                  }
                  break;
                case 5:
                  br(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    jc(h);
                    continue;
                  }
              }
              b !== null ? ((b.return = p), (be = b)) : jc(h);
            }
            y = y.sibling;
          }
        e: for (y = null, h = e; ; ) {
          if (h.tag === 5) {
            if (y === null) {
              y = h;
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
                      (i.style.display = rd("display", a)));
              } catch (S) {
                st(e, e.return, S);
              }
            }
          } else if (h.tag === 6) {
            if (y === null)
              try {
                h.stateNode.nodeValue = g ? "" : h.memoizedProps;
              } catch (S) {
                st(e, e.return, S);
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
            y === h && (y = null), (h = h.return);
          }
          y === h && (y = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Jt(t, e), on(e), s & 4 && bc(e);
      break;
    case 21:
      break;
    default:
      Jt(t, e), on(e);
  }
}
function on(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Mu(n)) {
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
          s.flags & 32 && (hs(o, ""), (s.flags &= -33));
          var l = wc(e);
          ya(e, l, o);
          break;
        case 3:
        case 4:
          var a = s.stateNode.containerInfo,
            i = wc(e);
          xa(e, i, a);
          break;
        default:
          throw Error(de(161));
      }
    } catch (c) {
      st(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Tm(e, t, n) {
  (be = e), Pu(e);
}
function Pu(e, t, n) {
  for (var s = (e.mode & 1) !== 0; be !== null; ) {
    var o = be,
      l = o.child;
    if (o.tag === 22 && s) {
      var a = o.memoizedState !== null || Ks;
      if (!a) {
        var i = o.alternate,
          c = (i !== null && i.memoizedState !== null) || bt;
        i = Ks;
        var g = bt;
        if (((Ks = a), (bt = c) && !g))
          for (be = o; be !== null; )
            (a = be),
              (c = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Sc(o)
                : c !== null
                ? ((c.return = a), (be = c))
                : Sc(o);
        for (; l !== null; ) (be = l), Pu(l), (l = l.sibling);
        (be = o), (Ks = i), (bt = g);
      }
      Nc(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (be = l)) : Nc(e);
  }
}
function Nc(e) {
  for (; be !== null; ) {
    var t = be;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              bt || Yo(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !bt)
                if (n === null) s.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Zt(t.type, n.memoizedProps);
                  s.componentDidUpdate(
                    o,
                    n.memoizedState,
                    s.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && lc(t, l, s);
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
                lc(t, a, n);
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
                  var y = g.memoizedState;
                  if (y !== null) {
                    var h = y.dehydrated;
                    h !== null && vs(h);
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
        bt || (t.flags & 512 && ga(t));
      } catch (p) {
        st(t, t.return, p);
      }
    }
    if (t === e) {
      be = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (be = n);
      break;
    }
    be = t.return;
  }
}
function jc(e) {
  for (; be !== null; ) {
    var t = be;
    if (t === e) {
      be = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (be = n);
      break;
    }
    be = t.return;
  }
}
function Sc(e) {
  for (; be !== null; ) {
    var t = be;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Yo(4, t);
          } catch (c) {
            st(t, n, c);
          }
          break;
        case 1:
          var s = t.stateNode;
          if (typeof s.componentDidMount == "function") {
            var o = t.return;
            try {
              s.componentDidMount();
            } catch (c) {
              st(t, o, c);
            }
          }
          var l = t.return;
          try {
            ga(t);
          } catch (c) {
            st(t, l, c);
          }
          break;
        case 5:
          var a = t.return;
          try {
            ga(t);
          } catch (c) {
            st(t, a, c);
          }
      }
    } catch (c) {
      st(t, t.return, c);
    }
    if (t === e) {
      be = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      (i.return = t.return), (be = i);
      break;
    }
    be = t.return;
  }
}
var Rm = Math.ceil,
  Ro = bn.ReactCurrentDispatcher,
  ai = bn.ReactCurrentOwner,
  Wt = bn.ReactCurrentBatchConfig,
  Be = 0,
  mt = null,
  ct = null,
  xt = 0,
  Ot = 0,
  Nr = Fn(0),
  ut = 0,
  Es = null,
  rr = 0,
  Xo = 0,
  ii = 0,
  us = null,
  _t = null,
  ci = 0,
  Or = 1 / 0,
  fn = null,
  $o = !1,
  va = null,
  On = null,
  Js = !1,
  En = null,
  Ao = 0,
  fs = 0,
  wa = null,
  uo = -1,
  fo = 0;
function St() {
  return Be & 6 ? at() : uo !== -1 ? uo : (uo = at());
}
function Un(e) {
  return e.mode & 1
    ? Be & 2 && xt !== 0
      ? xt & -xt
      : xm.transition !== null
      ? (fo === 0 && (fo = gd()), fo)
      : ((e = He),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : jd(e.type))),
        e)
    : 1;
}
function rn(e, t, n, s) {
  if (50 < fs) throw ((fs = 0), (wa = null), Error(de(185)));
  Ps(e, n, s),
    (!(Be & 2) || e !== mt) &&
      (e === mt && (!(Be & 2) && (Xo |= n), ut === 4 && _n(e, xt)),
      Rt(e, s),
      n === 1 && Be === 0 && !(t.mode & 1) && ((Or = at() + 500), Vo && Hn()));
}
function Rt(e, t) {
  var n = e.callbackNode;
  xp(e, t);
  var s = vo(e, e === mt ? xt : 0);
  if (s === 0)
    n !== null && Ti(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = s & -s), e.callbackPriority !== t)) {
    if ((n != null && Ti(n), t === 1))
      e.tag === 0 ? gm(Cc.bind(null, e)) : Bd(Cc.bind(null, e)),
        fm(function () {
          !(Be & 6) && Hn();
        }),
        (n = null);
    else {
      switch (xd(s)) {
        case 1:
          n = $a;
          break;
        case 4:
          n = md;
          break;
        case 16:
          n = yo;
          break;
        case 536870912:
          n = hd;
          break;
        default:
          n = yo;
      }
      n = Gu(n, Tu.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Tu(e, t) {
  if (((uo = -1), (fo = 0), Be & 6)) throw Error(de(327));
  var n = e.callbackNode;
  if (Er() && e.callbackNode !== n) return null;
  var s = vo(e, e === mt ? xt : 0);
  if (s === 0) return null;
  if (s & 30 || s & e.expiredLanes || t) t = Oo(e, s);
  else {
    t = s;
    var o = Be;
    Be |= 2;
    var l = $u();
    (mt !== e || xt !== t) && ((fn = null), (Or = at() + 500), Jn(e, t));
    do
      try {
        Om();
        break;
      } catch (i) {
        Ru(e, i);
      }
    while (!0);
    Ya(),
      (Ro.current = l),
      (Be = o),
      ct !== null ? (t = 0) : ((mt = null), (xt = 0), (t = ut));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Wl(e)), o !== 0 && ((s = o), (t = ba(e, o)))), t === 1)
    )
      throw ((n = Es), Jn(e, 0), _n(e, s), Rt(e, at()), n);
    if (t === 6) _n(e, s);
    else {
      if (
        ((o = e.current.alternate),
        !(s & 30) &&
          !$m(o) &&
          ((t = Oo(e, s)),
          t === 2 && ((l = Wl(e)), l !== 0 && ((s = l), (t = ba(e, l)))),
          t === 1))
      )
        throw ((n = Es), Jn(e, 0), _n(e, s), Rt(e, at()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = s), t)) {
        case 0:
        case 1:
          throw Error(de(345));
        case 2:
          Yn(e, _t, fn);
          break;
        case 3:
          if (
            (_n(e, s), (s & 130023424) === s && ((t = ci + 500 - at()), 10 < t))
          ) {
            if (vo(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & s) !== s)) {
              St(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = ta(Yn.bind(null, e, _t, fn), t);
            break;
          }
          Yn(e, _t, fn);
          break;
        case 4:
          if ((_n(e, s), (s & 4194240) === s)) break;
          for (t = e.eventTimes, o = -1; 0 < s; ) {
            var a = 31 - nn(s);
            (l = 1 << a), (a = t[a]), a > o && (o = a), (s &= ~l);
          }
          if (
            ((s = o),
            (s = at() - s),
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
                : 1960 * Rm(s / 1960)) - s),
            10 < s)
          ) {
            e.timeoutHandle = ta(Yn.bind(null, e, _t, fn), s);
            break;
          }
          Yn(e, _t, fn);
          break;
        case 5:
          Yn(e, _t, fn);
          break;
        default:
          throw Error(de(329));
      }
    }
  }
  return Rt(e, at()), e.callbackNode === n ? Tu.bind(null, e) : null;
}
function ba(e, t) {
  var n = us;
  return (
    e.current.memoizedState.isDehydrated && (Jn(e, t).flags |= 256),
    (e = Oo(e, t)),
    e !== 2 && ((t = _t), (_t = n), t !== null && Na(t)),
    e
  );
}
function Na(e) {
  _t === null ? (_t = e) : _t.push.apply(_t, e);
}
function $m(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var s = 0; s < n.length; s++) {
          var o = n[s],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!sn(l(), o)) return !1;
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
function _n(e, t) {
  for (
    t &= ~ii,
      t &= ~Xo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - nn(t),
      s = 1 << n;
    (e[n] = -1), (t &= ~s);
  }
}
function Cc(e) {
  if (Be & 6) throw Error(de(327));
  Er();
  var t = vo(e, 0);
  if (!(t & 1)) return Rt(e, at()), null;
  var n = Oo(e, t);
  if (e.tag !== 0 && n === 2) {
    var s = Wl(e);
    s !== 0 && ((t = s), (n = ba(e, s)));
  }
  if (n === 1) throw ((n = Es), Jn(e, 0), _n(e, t), Rt(e, at()), n);
  if (n === 6) throw Error(de(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Yn(e, _t, fn),
    Rt(e, at()),
    null
  );
}
function di(e, t) {
  var n = Be;
  Be |= 1;
  try {
    return e(t);
  } finally {
    (Be = n), Be === 0 && ((Or = at() + 500), Vo && Hn());
  }
}
function sr(e) {
  En !== null && En.tag === 0 && !(Be & 6) && Er();
  var t = Be;
  Be |= 1;
  var n = Wt.transition,
    s = He;
  try {
    if (((Wt.transition = null), (He = 1), e)) return e();
  } finally {
    (He = s), (Wt.transition = n), (Be = t), !(Be & 6) && Hn();
  }
}
function ui() {
  (Ot = Nr.current), Ye(Nr);
}
function Jn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), um(n)), ct !== null))
    for (n = ct.return; n !== null; ) {
      var s = n;
      switch ((Va(s), s.tag)) {
        case 1:
          (s = s.type.childContextTypes), s != null && So();
          break;
        case 3:
          $r(), Ye(Pt), Ye(Nt), ei();
          break;
        case 5:
          Za(s);
          break;
        case 4:
          $r();
          break;
        case 13:
          Ye(et);
          break;
        case 19:
          Ye(et);
          break;
        case 10:
          Xa(s.type._context);
          break;
        case 22:
        case 23:
          ui();
      }
      n = n.return;
    }
  if (
    ((mt = e),
    (ct = e = Ln(e.current, null)),
    (xt = Ot = t),
    (ut = 0),
    (Es = null),
    (ii = Xo = rr = 0),
    (_t = us = null),
    Qn !== null)
  ) {
    for (t = 0; t < Qn.length; t++)
      if (((n = Qn[t]), (s = n.interleaved), s !== null)) {
        n.interleaved = null;
        var o = s.next,
          l = n.pending;
        if (l !== null) {
          var a = l.next;
          (l.next = o), (s.next = a);
        }
        n.pending = s;
      }
    Qn = null;
  }
  return e;
}
function Ru(e, t) {
  do {
    var n = ct;
    try {
      if ((Ya(), (ao.current = To), Po)) {
        for (var s = tt.memoizedState; s !== null; ) {
          var o = s.queue;
          o !== null && (o.pending = null), (s = s.next);
        }
        Po = !1;
      }
      if (
        ((nr = 0),
        (pt = dt = tt = null),
        (cs = !1),
        (ks = 0),
        (ai.current = null),
        n === null || n.return === null)
      ) {
        (ut = 1), (Es = t), (ct = null);
        break;
      }
      e: {
        var l = e,
          a = n.return,
          i = n,
          c = t;
        if (
          ((t = xt),
          (i.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var g = c,
            y = i,
            h = y.tag;
          if (!(y.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = y.alternate;
            p
              ? ((y.updateQueue = p.updateQueue),
                (y.memoizedState = p.memoizedState),
                (y.lanes = p.lanes))
              : ((y.updateQueue = null), (y.memoizedState = null));
          }
          var b = fc(a);
          if (b !== null) {
            (b.flags &= -257),
              pc(b, a, i, l, t),
              b.mode & 1 && uc(l, g, t),
              (t = b),
              (c = g);
            var N = t.updateQueue;
            if (N === null) {
              var S = new Set();
              S.add(c), (t.updateQueue = S);
            } else N.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              uc(l, g, t), fi();
              break e;
            }
            c = Error(de(426));
          }
        } else if (Ke && i.mode & 1) {
          var A = fc(a);
          if (A !== null) {
            !(A.flags & 65536) && (A.flags |= 256),
              pc(A, a, i, l, t),
              qa(Ar(c, i));
            break e;
          }
        }
        (l = c = Ar(c, i)),
          ut !== 4 && (ut = 2),
          us === null ? (us = [l]) : us.push(l),
          (l = a);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var d = xu(l, c, t);
              oc(l, d);
              break e;
            case 1:
              i = c;
              var u = l.type,
                m = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof u.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (On === null || !On.has(m))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var C = yu(l, i, t);
                oc(l, C);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Ou(n);
    } catch (P) {
      (t = P), ct === n && n !== null && (ct = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function $u() {
  var e = Ro.current;
  return (Ro.current = To), e === null ? To : e;
}
function fi() {
  (ut === 0 || ut === 3 || ut === 2) && (ut = 4),
    mt === null || (!(rr & 268435455) && !(Xo & 268435455)) || _n(mt, xt);
}
function Oo(e, t) {
  var n = Be;
  Be |= 2;
  var s = $u();
  (mt !== e || xt !== t) && ((fn = null), Jn(e, t));
  do
    try {
      Am();
      break;
    } catch (o) {
      Ru(e, o);
    }
  while (!0);
  if ((Ya(), (Be = n), (Ro.current = s), ct !== null)) throw Error(de(261));
  return (mt = null), (xt = 0), ut;
}
function Am() {
  for (; ct !== null; ) Au(ct);
}
function Om() {
  for (; ct !== null && !ip(); ) Au(ct);
}
function Au(e) {
  var t = Lu(e.alternate, e, Ot);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ou(e) : (ct = t),
    (ai.current = null);
}
function Ou(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Em(n, t)), n !== null)) {
        (n.flags &= 32767), (ct = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ut = 6), (ct = null);
        return;
      }
    } else if (((n = Mm(n, t, Ot)), n !== null)) {
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
function Yn(e, t, n) {
  var s = He,
    o = Wt.transition;
  try {
    (Wt.transition = null), (He = 1), Um(e, t, n, s);
  } finally {
    (Wt.transition = o), (He = s);
  }
  return null;
}
function Um(e, t, n, s) {
  do Er();
  while (En !== null);
  if (Be & 6) throw Error(de(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(de(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (yp(e, l),
    e === mt && ((ct = mt = null), (xt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Js ||
      ((Js = !0),
      Gu(yo, function () {
        return Er(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = Wt.transition), (Wt.transition = null);
    var a = He;
    He = 1;
    var i = Be;
    (Be |= 4),
      (ai.current = null),
      Pm(e, n),
      Iu(n, e),
      sm(Zl),
      (wo = !!Jl),
      (Zl = Jl = null),
      (e.current = n),
      Tm(n),
      cp(),
      (Be = i),
      (He = a),
      (Wt.transition = l);
  } else e.current = n;
  if (
    (Js && ((Js = !1), (En = e), (Ao = o)),
    (l = e.pendingLanes),
    l === 0 && (On = null),
    fp(n.stateNode),
    Rt(e, at()),
    t !== null)
  )
    for (s = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), s(o.value, { componentStack: o.stack, digest: o.digest });
  if ($o) throw (($o = !1), (e = va), (va = null), e);
  return (
    Ao & 1 && e.tag !== 0 && Er(),
    (l = e.pendingLanes),
    l & 1 ? (e === wa ? fs++ : ((fs = 0), (wa = e))) : (fs = 0),
    Hn(),
    null
  );
}
function Er() {
  if (En !== null) {
    var e = xd(Ao),
      t = Wt.transition,
      n = He;
    try {
      if (((Wt.transition = null), (He = 16 > e ? 16 : e), En === null))
        var s = !1;
      else {
        if (((e = En), (En = null), (Ao = 0), Be & 6)) throw Error(de(331));
        var o = Be;
        for (Be |= 4, be = e.current; be !== null; ) {
          var l = be,
            a = l.child;
          if (be.flags & 16) {
            var i = l.deletions;
            if (i !== null) {
              for (var c = 0; c < i.length; c++) {
                var g = i[c];
                for (be = g; be !== null; ) {
                  var y = be;
                  switch (y.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ds(8, y, l);
                  }
                  var h = y.child;
                  if (h !== null) (h.return = y), (be = h);
                  else
                    for (; be !== null; ) {
                      y = be;
                      var p = y.sibling,
                        b = y.return;
                      if ((_u(y), y === g)) {
                        be = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = b), (be = p);
                        break;
                      }
                      be = b;
                    }
                }
              }
              var N = l.alternate;
              if (N !== null) {
                var S = N.child;
                if (S !== null) {
                  N.child = null;
                  do {
                    var A = S.sibling;
                    (S.sibling = null), (S = A);
                  } while (S !== null);
                }
              }
              be = l;
            }
          }
          if (l.subtreeFlags & 2064 && a !== null) (a.return = l), (be = a);
          else
            e: for (; be !== null; ) {
              if (((l = be), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ds(9, l, l.return);
                }
              var d = l.sibling;
              if (d !== null) {
                (d.return = l.return), (be = d);
                break e;
              }
              be = l.return;
            }
        }
        var u = e.current;
        for (be = u; be !== null; ) {
          a = be;
          var m = a.child;
          if (a.subtreeFlags & 2064 && m !== null) (m.return = a), (be = m);
          else
            e: for (a = u; be !== null; ) {
              if (((i = be), i.flags & 2048))
                try {
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yo(9, i);
                  }
                } catch (P) {
                  st(i, i.return, P);
                }
              if (i === a) {
                be = null;
                break e;
              }
              var C = i.sibling;
              if (C !== null) {
                (C.return = i.return), (be = C);
                break e;
              }
              be = i.return;
            }
        }
        if (
          ((Be = o), Hn(), dn && typeof dn.onPostCommitFiberRoot == "function")
        )
          try {
            dn.onPostCommitFiberRoot(Go, e);
          } catch {}
        s = !0;
      }
      return s;
    } finally {
      (He = n), (Wt.transition = t);
    }
  }
  return !1;
}
function Dc(e, t, n) {
  (t = Ar(n, t)),
    (t = xu(e, t, 1)),
    (e = An(e, t, 1)),
    (t = St()),
    e !== null && (Ps(e, 1, t), Rt(e, t));
}
function st(e, t, n) {
  if (e.tag === 3) Dc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Dc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof s.componentDidCatch == "function" &&
            (On === null || !On.has(s)))
        ) {
          (e = Ar(n, e)),
            (e = yu(t, e, 1)),
            (t = An(t, e, 1)),
            (e = St()),
            t !== null && (Ps(t, 1, e), Rt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Lm(e, t, n) {
  var s = e.pingCache;
  s !== null && s.delete(t),
    (t = St()),
    (e.pingedLanes |= e.suspendedLanes & n),
    mt === e &&
      (xt & n) === n &&
      (ut === 4 || (ut === 3 && (xt & 130023424) === xt && 500 > at() - ci)
        ? Jn(e, 0)
        : (ii |= n)),
    Rt(e, t);
}
function Uu(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Bs), (Bs <<= 1), !(Bs & 130023424) && (Bs = 4194304))
      : (t = 1));
  var n = St();
  (e = vn(e, t)), e !== null && (Ps(e, t, n), Rt(e, n));
}
function Gm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Uu(e, n);
}
function zm(e, t) {
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
  s !== null && s.delete(t), Uu(e, n);
}
var Lu;
Lu = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Pt.current) Mt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Mt = !1), _m(e, t, n);
      Mt = !!(e.flags & 131072);
    }
  else (Mt = !1), Ke && t.flags & 1048576 && Fd(t, ko, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var s = t.type;
      co(e, t), (e = t.pendingProps);
      var o = Pr(t, Nt.current);
      Mr(t, n), (o = ni(null, t, s, e, o, n));
      var l = ri();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Tt(s) ? ((l = !0), Co(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Ka(t),
            (o.updater = Wo),
            (t.stateNode = o),
            (o._reactInternals = t),
            ia(t, s, e, n),
            (t = ua(null, t, s, !0, l, n)))
          : ((t.tag = 0), Ke && l && Ha(t), jt(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      s = t.elementType;
      e: {
        switch (
          (co(e, t),
          (e = t.pendingProps),
          (o = s._init),
          (s = o(s._payload)),
          (t.type = s),
          (o = t.tag = Fm(s)),
          (e = Zt(s, e)),
          o)
        ) {
          case 0:
            t = da(null, t, s, e, n);
            break e;
          case 1:
            t = gc(null, t, s, e, n);
            break e;
          case 11:
            t = mc(null, t, s, e, n);
            break e;
          case 14:
            t = hc(null, t, s, Zt(s.type, e), n);
            break e;
        }
        throw Error(de(306, s, ""));
      }
      return t;
    case 0:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : Zt(s, o)),
        da(e, t, s, o, n)
      );
    case 1:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : Zt(s, o)),
        gc(e, t, s, o, n)
      );
    case 3:
      e: {
        if ((Nu(t), e === null)) throw Error(de(387));
        (s = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          Xd(e, t),
          Eo(t, s, null, n);
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
            (o = Ar(Error(de(423)), t)), (t = xc(e, t, s, n, o));
            break e;
          } else if (s !== o) {
            (o = Ar(Error(de(424)), t)), (t = xc(e, t, s, n, o));
            break e;
          } else
            for (
              Ut = $n(t.stateNode.containerInfo.firstChild),
                Lt = t,
                Ke = !0,
                tn = null,
                n = Wd(t, null, s, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Tr(), s === o)) {
            t = wn(e, t, n);
            break e;
          }
          jt(e, t, s, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Qd(t),
        e === null && oa(t),
        (s = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (a = o.children),
        ea(s, o) ? (a = null) : l !== null && ea(s, l) && (t.flags |= 32),
        bu(e, t),
        jt(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && oa(t), null;
    case 13:
      return ju(e, t, n);
    case 4:
      return (
        Ja(t, t.stateNode.containerInfo),
        (s = t.pendingProps),
        e === null ? (t.child = Rr(t, null, s, n)) : jt(e, t, s, n),
        t.child
      );
    case 11:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : Zt(s, o)),
        mc(e, t, s, o, n)
      );
    case 7:
      return jt(e, t, t.pendingProps, n), t.child;
    case 8:
      return jt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return jt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((s = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (a = o.value),
          qe(_o, s._currentValue),
          (s._currentValue = a),
          l !== null)
        )
          if (sn(l.value, a)) {
            if (l.children === o.children && !Pt.current) {
              t = wn(e, t, n);
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
                      (c = gn(-1, n & -n)), (c.tag = 2);
                      var g = l.updateQueue;
                      if (g !== null) {
                        g = g.shared;
                        var y = g.pending;
                        y === null
                          ? (c.next = c)
                          : ((c.next = y.next), (y.next = c)),
                          (g.pending = c);
                      }
                    }
                    (l.lanes |= n),
                      (c = l.alternate),
                      c !== null && (c.lanes |= n),
                      la(l.return, n, t),
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
                  la(a, n, t),
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
        jt(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (s = t.pendingProps.children),
        Mr(t, n),
        (o = Yt(o)),
        (s = s(o)),
        (t.flags |= 1),
        jt(e, t, s, n),
        t.child
      );
    case 14:
      return (
        (s = t.type),
        (o = Zt(s, t.pendingProps)),
        (o = Zt(s.type, o)),
        hc(e, t, s, o, n)
      );
    case 15:
      return vu(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : Zt(s, o)),
        co(e, t),
        (t.tag = 1),
        Tt(s) ? ((e = !0), Co(t)) : (e = !1),
        Mr(t, n),
        gu(t, s, o),
        ia(t, s, o, n),
        ua(null, t, s, !0, e, n)
      );
    case 19:
      return Su(e, t, n);
    case 22:
      return wu(e, t, n);
  }
  throw Error(de(156, t.tag));
};
function Gu(e, t) {
  return pd(e, t);
}
function Bm(e, t, n, s) {
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
  return new Bm(e, t, n, s);
}
function pi(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Fm(e) {
  if (typeof e == "function") return pi(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Pa)) return 11;
    if (e === Ta) return 14;
  }
  return 2;
}
function Ln(e, t) {
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
function po(e, t, n, s, o, l) {
  var a = 2;
  if (((s = e), typeof e == "function")) pi(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case fr:
        return Zn(n.children, o, l, t);
      case Ia:
        (a = 8), (o |= 8);
        break;
      case Pl:
        return (
          (e = qt(12, n, t, o | 2)), (e.elementType = Pl), (e.lanes = l), e
        );
      case Tl:
        return (e = qt(13, n, t, o)), (e.elementType = Tl), (e.lanes = l), e;
      case Rl:
        return (e = qt(19, n, t, o)), (e.elementType = Rl), (e.lanes = l), e;
      case Qc:
        return Qo(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Yc:
              a = 10;
              break e;
            case Xc:
              a = 9;
              break e;
            case Pa:
              a = 11;
              break e;
            case Ta:
              a = 14;
              break e;
            case Cn:
              (a = 16), (s = null);
              break e;
          }
        throw Error(de(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = qt(a, n, t, o)), (t.elementType = e), (t.type = s), (t.lanes = l), t
  );
}
function Zn(e, t, n, s) {
  return (e = qt(7, e, s, t)), (e.lanes = n), e;
}
function Qo(e, t, n, s) {
  return (
    (e = qt(22, e, s, t)),
    (e.elementType = Qc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ml(e, t, n) {
  return (e = qt(6, e, null, t)), (e.lanes = n), e;
}
function El(e, t, n) {
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
function Hm(e, t, n, s, o) {
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
    (this.eventTimes = dl(0)),
    (this.expirationTimes = dl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = dl(0)),
    (this.identifierPrefix = s),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function mi(e, t, n, s, o, l, a, i, c) {
  return (
    (e = new Hm(e, t, n, i, c)),
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
    Ka(l),
    e
  );
}
function Vm(e, t, n) {
  var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ur,
    key: s == null ? null : "" + s,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function zu(e) {
  if (!e) return zn;
  e = e._reactInternals;
  e: {
    if (lr(e) !== e || e.tag !== 1) throw Error(de(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Tt(t.type)) {
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
    if (Tt(n)) return zd(e, n, t);
  }
  return t;
}
function Bu(e, t, n, s, o, l, a, i, c) {
  return (
    (e = mi(n, s, !0, e, o, l, a, i, c)),
    (e.context = zu(null)),
    (n = e.current),
    (s = St()),
    (o = Un(n)),
    (l = gn(s, o)),
    (l.callback = t ?? null),
    An(n, l, o),
    (e.current.lanes = o),
    Ps(e, o, s),
    Rt(e, s),
    e
  );
}
function Ko(e, t, n, s) {
  var o = t.current,
    l = St(),
    a = Un(o);
  return (
    (n = zu(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = gn(l, a)),
    (t.payload = { element: e }),
    (s = s === void 0 ? null : s),
    s !== null && (t.callback = s),
    (e = An(o, t, a)),
    e !== null && (rn(e, o, a, l), lo(e, o, a)),
    a
  );
}
function Uo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function kc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function hi(e, t) {
  kc(e, t), (e = e.alternate) && kc(e, t);
}
function qm() {
  return null;
}
var Fu =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function gi(e) {
  this._internalRoot = e;
}
Jo.prototype.render = gi.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(de(409));
  Ko(e, t, null, null);
};
Jo.prototype.unmount = gi.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    sr(function () {
      Ko(null, e, null, null);
    }),
      (t[yn] = null);
  }
};
function Jo(e) {
  this._internalRoot = e;
}
Jo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = wd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < kn.length && t !== 0 && t < kn[n].priority; n++);
    kn.splice(n, 0, e), n === 0 && Nd(e);
  }
};
function xi(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Zo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function _c() {}
function Wm(e, t, n, s, o) {
  if (o) {
    if (typeof s == "function") {
      var l = s;
      s = function () {
        var g = Uo(a);
        l.call(g);
      };
    }
    var a = Bu(t, s, e, 0, null, !1, !1, "", _c);
    return (
      (e._reactRootContainer = a),
      (e[yn] = a.current),
      Ns(e.nodeType === 8 ? e.parentNode : e),
      sr(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof s == "function") {
    var i = s;
    s = function () {
      var g = Uo(c);
      i.call(g);
    };
  }
  var c = mi(e, 0, !1, null, null, !1, !1, "", _c);
  return (
    (e._reactRootContainer = c),
    (e[yn] = c.current),
    Ns(e.nodeType === 8 ? e.parentNode : e),
    sr(function () {
      Ko(t, c, n, s);
    }),
    c
  );
}
function el(e, t, n, s, o) {
  var l = n._reactRootContainer;
  if (l) {
    var a = l;
    if (typeof o == "function") {
      var i = o;
      o = function () {
        var c = Uo(a);
        i.call(c);
      };
    }
    Ko(t, a, e, o);
  } else a = Wm(n, t, e, o, s);
  return Uo(a);
}
yd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ns(t.pendingLanes);
        n !== 0 &&
          (Aa(t, n | 1), Rt(t, at()), !(Be & 6) && ((Or = at() + 500), Hn()));
      }
      break;
    case 13:
      sr(function () {
        var s = vn(e, 1);
        if (s !== null) {
          var o = St();
          rn(s, e, 1, o);
        }
      }),
        hi(e, 1);
  }
};
Oa = function (e) {
  if (e.tag === 13) {
    var t = vn(e, 134217728);
    if (t !== null) {
      var n = St();
      rn(t, e, 134217728, n);
    }
    hi(e, 134217728);
  }
};
vd = function (e) {
  if (e.tag === 13) {
    var t = Un(e),
      n = vn(e, t);
    if (n !== null) {
      var s = St();
      rn(n, e, t, s);
    }
    hi(e, t);
  }
};
wd = function () {
  return He;
};
bd = function (e, t) {
  var n = He;
  try {
    return (He = e), t();
  } finally {
    He = n;
  }
};
Hl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ol(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = Ho(s);
            if (!o) throw Error(de(90));
            Jc(s), Ol(s, o);
          }
        }
      }
      break;
    case "textarea":
      ed(e, n);
      break;
    case "select":
      (t = n.value), t != null && Cr(e, !!n.multiple, t, !1);
  }
};
ad = di;
id = sr;
var Ym = { usingClientEntryPoint: !1, Events: [Rs, gr, Ho, od, ld, di] },
  Jr = {
    findFiberByHostInstance: Xn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Xm = {
    bundleType: Jr.bundleType,
    version: Jr.version,
    rendererPackageName: Jr.rendererPackageName,
    rendererConfig: Jr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: bn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ud(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Jr.findFiberByHostInstance || qm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Zs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Zs.isDisabled && Zs.supportsFiber)
    try {
      (Go = Zs.inject(Xm)), (dn = Zs);
    } catch {}
}
zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ym;
zt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!xi(t)) throw Error(de(200));
  return Vm(e, t, null, n);
};
zt.createRoot = function (e, t) {
  if (!xi(e)) throw Error(de(299));
  var n = !1,
    s = "",
    o = Fu;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = mi(e, 1, !1, null, null, n, !1, s, o)),
    (e[yn] = t.current),
    Ns(e.nodeType === 8 ? e.parentNode : e),
    new gi(t)
  );
};
zt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(de(188))
      : ((e = Object.keys(e).join(",")), Error(de(268, e)));
  return (e = ud(t)), (e = e === null ? null : e.stateNode), e;
};
zt.flushSync = function (e) {
  return sr(e);
};
zt.hydrate = function (e, t, n) {
  if (!Zo(t)) throw Error(de(200));
  return el(null, e, t, !0, n);
};
zt.hydrateRoot = function (e, t, n) {
  if (!xi(e)) throw Error(de(405));
  var s = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    a = Fu;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Bu(t, null, e, 1, n ?? null, o, !1, l, a)),
    (e[yn] = t.current),
    Ns(e),
    s)
  )
    for (e = 0; e < s.length; e++)
      (n = s[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Jo(t);
};
zt.render = function (e, t, n) {
  if (!Zo(t)) throw Error(de(200));
  return el(null, e, t, !1, n);
};
zt.unmountComponentAtNode = function (e) {
  if (!Zo(e)) throw Error(de(40));
  return e._reactRootContainer
    ? (sr(function () {
        el(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[yn] = null);
        });
      }),
      !0)
    : !1;
};
zt.unstable_batchedUpdates = di;
zt.unstable_renderSubtreeIntoContainer = function (e, t, n, s) {
  if (!Zo(n)) throw Error(de(200));
  if (e == null || e._reactInternals === void 0) throw Error(de(38));
  return el(e, t, n, !1, s);
};
zt.version = "18.3.1-next-f1338f8080-20240426";
function Hu() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hu);
    } catch (e) {
      console.error(e);
    }
}
Hu(), (Hc.exports = zt);
var Qm = Hc.exports,
  Vu,
  Mc = Qm;
(Vu = Mc.createRoot), Mc.hydrateRoot;
class Km {
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
const De = new Km();
class Jm {
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
                l.sub_section.forEach((c, g) => {
                  let y = {
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
                  o.contents[a].contents[g] = y;
                  let h = 0;
                  Array.isArray(c.shelf) &&
                    c.shelf.forEach((p, b) => {
                      let N = {
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
                        (N.serverName &&
                          (N.serverName = t.sys_ServerSetting.name),
                        N.serverType &&
                          (N.serverType = t.sys_ServerSetting.type),
                        p.type == "dispensing_shelves" || p.type == "shelf")
                      )
                        p.type == "shelf" && (N.type = "dispensing_shelves"),
                          Array.isArray(p.medMapBox) &&
                            p.medMapBox.forEach((A, d) => {
                              let u = {
                                  GUID: A.GUID,
                                  Master_GUID: A.Master_GUID,
                                  name: "藥盒",
                                  class: 4,
                                  gird_position: A.position,
                                  ip: A.ip_box,
                                  box_type: "",
                                  width: A.width,
                                  height: A.height,
                                  serverType: A.serverType,
                                  serverName: A.serverName,
                                  med_info: [],
                                  type: "med_box",
                                },
                                m = {},
                                C = p.position.split(","),
                                P = A.position.split(",");
                              if (A.storage) {
                                switch (
                                  ((u.device_type = A.storage.DeviceType),
                                  (u.storage = A.storage),
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
                                (m.name = A.storage.Name),
                                  (m.code = A.storage.Code),
                                  (m.cht_name = A.storage.ChineseName),
                                  (m.SKDIACODE = A.storage.SKDIACODE),
                                  (m.device_type = A.storage.device_type),
                                  (m.qty = A.storage.StorageName),
                                  (m.stockCol = `${+C[0] + 1}`),
                                  (m.stockRow = ""),
                                  (m.stock = `${+P[1] + 1}`);
                              } else
                                (u.device_type = 10),
                                  (u.box_type = "2.9"),
                                  (m.name = ""),
                                  (m.code = ""),
                                  (m.cht_name = ""),
                                  (m.stockCol = `${+C[0] + 1}`),
                                  (m.stockRow = ""),
                                  (m.stock = `${+P[1] + 1}`);
                              o.contents[a].med_list.push(m),
                                (u.med_info[0] = m),
                                N.contents.push(u);
                            });
                      else {
                        N.type = "store_shelves";
                        const A = p.medMapStock.sort((P, D) => {
                          const [T] = P.location.split(",").map(Number),
                            [z] = D.location.split(",").map(Number);
                          return T - z;
                        });
                        (N.medMapStock = A), (N.name = p.name);
                        let d = Math.max(
                            ...A.map((P) => P.location.split(",")[0])
                          ),
                          u = Math.max(
                            ...l.sub_section.map(
                              (P) => P.position.split(",")[1]
                            )
                          );
                        +d <= 0 && (d = 0);
                        let m = p.position.split(","),
                          C = c.position.split(",");
                        A.forEach((P, D) => {
                          if (P.code) {
                            let T = {};
                            (T.name = P.name),
                              (T.code = P.code),
                              (T.cht_name = ""),
                              (T.SKDIACODE = P.material_no),
                              (T.qty = P.qty),
                              (T.stockCol = `${+m[0] + 1}`),
                              (T.stockRow = `${+C[1] + 1}`),
                              l.reverse == "True" &&
                                (T.stockRow = u + 1 - `${+C[1]}`),
                              (T.stock = `${+P.location.split(",")[0] + 1}`),
                              l.reverse == "True" &&
                                (T.stock = d + 1 - +P.location.split(",")[0]),
                              o.contents[a].med_list.push(T);
                          }
                        });
                      }
                      let S = p.position.split(",")[1];
                      h < +S &&
                        ((h = +S), (o.contents[a].contents[g].oriMaxCol = +h)),
                        o.contents[a].contents[g].contents.push(N);
                    }),
                    Array.isArray(c.drawer) &&
                      c.drawer.forEach((p, b) => {
                        let N = {
                          GUID: p.GUID,
                          Master_GUID: p.Master_GUID,
                          name: `抽屜 ${b}`,
                          class: 3,
                          gird_position: p.position,
                          ip: p.ip_drawer,
                          serverName: p.serverName,
                          serverType: p.serverType,
                        };
                        N.serverName &&
                          (N.serverName = t.sys_ServerSetting.name),
                          N.serverType &&
                            (N.serverType = t.sys_ServerSetting.type),
                          p.drawer
                            ? ((N.drawer = p.drawer),
                              p.drawer.Boxes &&
                                ((N.type = "grid_draw"),
                                (N.name = p.drawer.Name),
                                (N.Boxes = []),
                                Array.isArray(p.drawer.Boxes)
                                  ? p.drawer.Boxes.forEach((d, u) => {
                                      let m = [];
                                      Array.isArray(d) &&
                                        d.forEach((C, P) => {
                                          let D = {
                                            Row: C.Row,
                                            Column: C.Column,
                                            Width: 1,
                                            Height: 1,
                                            Slave: C.Slave,
                                            SlaveBox_Row: C.SlaveBox_Row,
                                            SlaveBox_Column: C.SlaveBox_Column,
                                            MasterBox_Column:
                                              C.MasterBox_Column,
                                            MasterBox_Row: C.MasterBox_Row,
                                            Name: C.Name,
                                            Code: C.Code,
                                            ChineseName: C.ChineseName,
                                            GUID: C.GUID,
                                          };
                                          m.push(D),
                                            C.Code &&
                                              o.contents[a].med_list.push(
                                                C.Code
                                              );
                                        }),
                                        N.Boxes.push(m);
                                    })
                                  : (N.Boxes = p.drawer.Boxes)))
                            : ((N.type = "list_draw"),
                              (N.name = `清單抽屜 ${b}`));
                        let S = p.position.split(",")[1];
                        h < +S &&
                          ((h = +S),
                          (o.contents[a].contents[g].oriMaxCol = +h)),
                          o.contents[a].contents[g].contents.push(N);
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
        (o.components = t.components.map((y, h) =>
          this.convertSingleComponent(y, h, o.GUID)
        )),
      Object.keys(t).forEach((y) => {
        [
          "GUID",
          "type",
          "name",
          "position",
          "dimensions",
          "med_box",
          "components",
        ].includes(y) || (o[y] = t[y]);
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
const Et = new Jm(),
  Zm = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Et },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  qu = f.createContext(void 0),
  eh = ({ children: e }) => {
    const [t, n] = f.useState(!1),
      [s, o] = f.useState(null),
      [l, a] = f.useState(!1),
      [i, c] = f.useState(null),
      [g, y] = f.useState(null),
      [h, p] = f.useState("medicine"),
      [b, N] = f.useState(!1),
      [S, A] = f.useState(0),
      [d, u] = f.useState({ message: "", type: "success", isVisible: !1 }),
      [m, C] = f.useState(!1),
      [P, D] = f.useState(null),
      [T, z] = f.useState("edit"),
      [E, O] = f.useState(!1),
      [se, fe] = f.useState(null),
      [M, v] = f.useState(!1),
      [F, w] = f.useState(null),
      [j, k] = f.useState(!1),
      [_, J] = f.useState(!1),
      [G, oe] = f.useState(null),
      [we, me] = f.useState(!1),
      [V, he] = f.useState(null),
      [X, Ce] = f.useState(!1),
      [ye, xe] = f.useState(null),
      [Ue, te] = f.useState(!1),
      [R, I] = f.useState(null),
      [K, U] = f.useState(null),
      [ne, ae] = f.useState("add"),
      [$, H] = f.useState(!1),
      [B, Z] = f.useState([]),
      [le, ge] = f.useState([]),
      [ue, ve] = f.useState(!1),
      [je, Re] = f.useState(!1),
      [rt, $e] = f.useState(""),
      [it, Ve] = f.useState(!1),
      [At, Ft] = f.useState(""),
      [Vn, Qt] = f.useState(!1),
      [qn, Br] = f.useState(null),
      [As, Fr] = f.useState(null),
      [nl, x] = f.useState(!1),
      [re, Q] = f.useState(null),
      [L, ie] = f.useState(!1),
      [q, W] = f.useState(null),
      [ee, ce] = f.useState(null),
      Y = () => {
        sessionStorage.removeItem("user_session"), n(!1), o(null);
      },
      pe = f.useCallback(() => {
        A((Ie) => Ie + 1);
      }, []),
      Ne = f.useCallback((Ie, Xe) => {
        u({ message: Ie, type: Xe, isVisible: !0 });
      }, []),
      Pe = f.useCallback(() => {
        u((Ie) => ({ ...Ie, isVisible: !1 }));
      }, []),
      ke = (Ie) => {
        D(Ie), z("edit"), C(!0);
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
        D(Ie), z("add"), C(!0);
      },
      ze = () => {
        C(!1), D(null), z("edit");
      },
      Te = (Ie) => {
        fe(Ie), O(!0);
      },
      Ae = () => {
        O(!1), fe(null);
      },
      Oe = (Ie) => {
        w(Ie), v(!0);
      },
      Se = () => {
        v(!1), w(null);
      },
      Ee = (Ie) => {
        oe(Ie), J(!0);
      },
      Le = () => {
        J(!1), oe(null);
      },
      _e = (Ie) => {
        he(Ie), me(!0);
      },
      Ze = () => {
        me(!1), he(null);
      },
      Hr = (Ie) => {
        xe(Ie), Ce(!0);
      },
      rl = () => {
        Ce(!1), xe(null);
      },
      tf = (Ie) => {
        I(Ie), U(null), ae("add"), te(!0);
      },
      nf = (Ie, Xe) => {
        I(Ie), U(Xe), ae("edit"), te(!0);
      },
      rf = () => {
        te(!1), I(null), U(null), ae("add");
      },
      sf = () => {
        H(!0);
      },
      of = () => {
        H(!1);
      },
      lf = (Ie = "") => {
        $e(Ie), Re(!0);
      },
      af = () => {
        Re(!1);
      },
      cf = (Ie) => {
        Ft(Ie), Ve(!0);
      },
      df = () => {
        Ve(!1), Ft("");
      },
      uf = (Ie, Xe) => {
        Br(Ie), Fr(Xe || null), Qt(!0);
      },
      ff = () => {
        Qt(!1), Br(null), Fr(null);
      },
      pf = (Ie) => {
        Q(Ie), x(!0);
      },
      mf = () => {
        x(!1), Q(null);
      },
      hf = (Ie) => {
        W(Ie), ie(!0);
      },
      gf = () => {
        ie(!1), W(null);
      },
      xf = f.useCallback(async () => {
        if (!i) {
          console.warn("沒有選擇部門分類，無法重新載入資料");
          return;
        }
        console.log("🔄 重新載入藥品地圖資料，部門類型:", i), k(!0);
        try {
          const Ie = await De.getMedMapByDepartment(i);
          if (Ie.Code === 200 && Ie.Data) {
            console.log("📡 重新載入成功:", Ie.Data);
            const Xe = Et.convertMedMapApiToFakeData(Ie.Data);
            if (!Et.validateConvertedData(Xe)) {
              console.error("❌ 轉換後的資料驗證失敗"), y(null);
              return;
            }
            y(Xe), console.log("✅ 地圖資料已重新載入");
          } else console.error("❌ API 回傳錯誤:", Ie), y(null);
        } catch (Ie) {
          console.error("💥 重新載入藥品地圖資料失敗:", Ie), y(null);
        } finally {
          k(!1);
        }
      }, [i, k, y]),
      yf = f.useCallback((Ie, Xe) => {
        y(
          (lt) =>
            lt &&
            lt.map((ht) => {
              const Qe = { ...ht };
              return (
                Qe.contents &&
                  (Qe.contents = Qe.contents.map((Nn) => {
                    const ar = { ...Nn };
                    return (
                      ar.contents &&
                        (ar.contents = ar.contents.map((ir) => {
                          const cr = { ...ir };
                          return (
                            cr.contents &&
                              (cr.contents = cr.contents.map((jn) => {
                                if (jn.GUID === Ie) {
                                  const Kt = { ...jn };
                                  return (
                                    Kt.medMapStock || (Kt.medMapStock = []),
                                    (Kt.medMapStock = [...Kt.medMapStock, Xe]),
                                    Kt
                                  );
                                }
                                return jn;
                              })),
                            cr
                          );
                        })),
                      ar
                    );
                  })),
                Qe
              );
            })
        );
      }, []),
      vf = f.useCallback((Ie, Xe, lt) => {
        y(
          (ft) =>
            ft &&
            ft.map((Qe) => {
              const Nn = { ...Qe };
              return (
                Nn.contents &&
                  (Nn.contents = Nn.contents.map((ar) => {
                    const ir = { ...ar };
                    return (
                      ir.contents &&
                        (ir.contents = ir.contents.map((cr) => {
                          const jn = { ...cr };
                          return (
                            jn.contents &&
                              (jn.contents = jn.contents.map((Kt) => {
                                if (Kt.GUID === Ie && Kt.medMapStock) {
                                  const wi = { ...Kt };
                                  return (
                                    (wi.medMapStock = Kt.medMapStock.map((sl) =>
                                      sl.GUID === Xe ? { ...sl, ...lt } : sl
                                    )),
                                    wi
                                  );
                                }
                                return Kt;
                              })),
                            jn
                          );
                        })),
                      ir
                    );
                  })),
                Nn
              );
            })
        );
      }, []),
      wf = f.useCallback((Ie, Xe) => {
        y((lt) => {
          if (!lt) return lt;
          const ft = (ht) =>
            ht.map((Qe) =>
              Qe.GUID === Ie
                ? { ...Qe, ...Xe }
                : Qe.contents && Array.isArray(Qe.contents)
                ? { ...Qe, contents: ft(Qe.contents) }
                : Qe
            );
          return ft(lt);
        });
      }, []),
      bf = f.useCallback((Ie) => {
        y((Xe) => {
          if (!Xe) return Xe;
          const lt = (ft) =>
            ft
              .filter((ht) => ht.GUID !== Ie)
              .map((ht) =>
                ht.contents && Array.isArray(ht.contents)
                  ? { ...ht, contents: lt(ht.contents) }
                  : ht
              );
          return lt(Xe);
        });
      }, []),
      Nf = f.useCallback((Ie, Xe) => {
        y(
          (lt) =>
            lt &&
            lt.map((ft) => {
              if (ft.GUID === Ie) {
                const ht = ft.contents ? [...ft.contents, Xe] : [Xe];
                return { ...ft, contents: ht, medMap_Section: ht };
              }
              return ft;
            })
        );
      }, []),
      jf = f.useCallback((Ie, Xe) => {
        y((lt) => {
          if (!lt) return lt;
          const ft = (ht) =>
            ht.map((Qe) => {
              if (Qe.GUID === Ie) {
                const Nn = Qe.contents ? [...Qe.contents, Xe] : [Xe];
                return { ...Qe, contents: Nn };
              }
              return Qe.contents && Array.isArray(Qe.contents)
                ? { ...Qe, contents: ft(Qe.contents) }
                : Qe;
            });
          return ft(lt);
        });
      }, []);
    return r.jsx(qu.Provider, {
      value: {
        isAuthenticated: t,
        setIsAuthenticated: n,
        currentUser: s,
        setCurrentUser: o,
        logout: Y,
        sidebarOpen: l,
        setSidebarOpen: a,
        selectedDepartmentType: i,
        setSelectedDepartmentType: c,
        isAdminMode: b,
        setIsAdminMode: N,
        apiDepartmentData: g,
        setApiDepartmentData: y,
        viewMode: h,
        setViewMode: p,
        refreshTrigger: S,
        triggerRefresh: pe,
        addStockToShelf: yf,
        notification: d,
        showNotification: Ne,
        hideNotification: Pe,
        medBoxModalOpen: m,
        setMedBoxModalOpen: C,
        selectedMedBox: P,
        setSelectedMedBox: D,
        openMedBoxModal: ke,
        closeMedBoxModal: ze,
        modalMode: T,
        setModalMode: z,
        openAddMedBoxModal: Me,
        listDrawModalOpen: E,
        setListDrawModalOpen: O,
        selectedListDraw: se,
        setSelectedListDraw: fe,
        openListDrawModal: Te,
        closeListDrawModal: Ae,
        gridDrawModalOpen: M,
        setGridDrawModalOpen: v,
        selectedGridDraw: F,
        setSelectedGridDraw: w,
        openGridDrawModal: Oe,
        closeGridDrawModal: Se,
        isLoadingMedMap: j,
        setIsLoadingMedMap: k,
        addParentContainerModalOpen: _,
        setAddParentContainerModalOpen: J,
        selectedDepartmentForAdd: G,
        setSelectedDepartmentForAdd: oe,
        openAddParentContainerModal: Ee,
        closeAddParentContainerModal: Le,
        addShelfDrawContainerModalOpen: we,
        setAddShelfDrawContainerModalOpen: me,
        selectedSubContainerForAdd: V,
        setSelectedSubContainerForAdd: he,
        openAddShelfDrawContainerModal: _e,
        closeAddShelfDrawContainerModal: Ze,
        addSubContainerModalOpen: X,
        setAddSubContainerModalOpen: Ce,
        selectedParentContainerForAdd: ye,
        setSelectedParentContainerForAdd: xe,
        openAddSubContainerModal: Hr,
        closeAddSubContainerModal: rl,
        addStoreItemModalOpen: Ue,
        setAddStoreItemModalOpen: te,
        selectedStoreShelfForAdd: R,
        setSelectedStoreShelfForAdd: I,
        selectedStockItemForEdit: K,
        setSelectedStockItemForEdit: U,
        storeItemModalMode: ne,
        setStoreItemModalMode: ae,
        openAddStoreItemModal: tf,
        openEditStoreItemModal: nf,
        closeAddStoreItemModal: rf,
        updateStockInShelf: vf,
        updateContainerInLocalData: wf,
        removeContainerFromLocalData: bf,
        addParentContainerToLocalData: Nf,
        addSubContainerToLocalData: jf,
        addDepartmentModalOpen: $,
        setAddDepartmentModalOpen: H,
        allDepartmentsList: B,
        setAllDepartmentsList: Z,
        openAddDepartmentModal: sf,
        closeAddDepartmentModal: of,
        reloadMedMapData: xf,
        qrCodeScannerModalOpen: je,
        qrCodeScannerMode: rt,
        setQRCodeScannerModalOpen: Re,
        openQRCodeScannerModal: lf,
        closeQRCodeScannerModal: af,
        addBarcodeModalOpen: it,
        setAddBarcodeModalOpen: Ve,
        openAddBarcodeModal: cf,
        closeAddBarcodeModal: df,
        initialBarcodeValue: At,
        containerDetailModalOpen: Vn,
        setContainerDetailModalOpen: Qt,
        selectedContainerForDetail: qn,
        setSelectedContainerForDetail: Br,
        highlightedMedicineCode: As,
        setHighlightedMedicineCode: Fr,
        openContainerDetailModal: uf,
        closeContainerDetailModal: ff,
        editStoreShelfModalOpen: nl,
        setEditStoreShelfModalOpen: x,
        selectedStoreShelfForEdit: re,
        setSelectedStoreShelfForEdit: Q,
        openEditStoreShelfModal: pf,
        closeEditStoreShelfModal: mf,
        activeCanvas: ee,
        setActiveCanvas: ce,
        editParentContainerModalOpen: L,
        setEditParentContainerModalOpen: ie,
        selectedParentContainerForEdit: q,
        setSelectedParentContainerForEdit: W,
        openEditParentContainerModal: hf,
        closeEditParentContainerModal: gf,
        medicineList: le,
        setMedicineList: ge,
        isLoadingMedicines: ue,
        setIsLoadingMedicines: ve,
      },
      children: e,
    });
  },
  ot = () => {
    const e = f.useContext(qu);
    if (e === void 0)
      throw new Error("useDrugMap must be used within a DrugMapProvider");
    return e;
  },
  th = {
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
  Wu = f.createContext(void 0),
  nh = ({ children: e }) => {
    const [t, n] = f.useState("zh-TW"),
      s = (o) => th[t][o] || o;
    return r.jsx(Wu.Provider, {
      value: { language: t, setLanguage: n, t: s },
      children: e,
    });
  },
  kt = () => {
    const e = f.useContext(Wu);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var rh = {
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
 */ const sh = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  Fe = (e, t) => {
    const n = f.forwardRef(
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
        y
      ) =>
        f.createElement(
          "svg",
          {
            ref: y,
            ...rh,
            width: o,
            height: o,
            stroke: s,
            strokeWidth: a ? (Number(l) * 24) / Number(o) : l,
            className: ["lucide", `lucide-${sh(e)}`, i].join(" "),
            ...g,
          },
          [
            ...t.map(([h, p]) => f.createElement(h, p)),
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
 */ const oh = Fe("Archive", [
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
 */ const Ec = Fe("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yu = Fe("Building2", [
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
 */ const Ur = Fe("Camera", [
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
 */ const lh = Fe("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eo = Fe("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xu = Fe("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ah = Fe("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ih = Fe("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qu = Fe("EyeOff", [
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
 */ const Ku = Fe("Eye", [
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
 */ const ch = Fe("Globe", [
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
 */ const Ju = Fe("Grid3x3", [
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
 */ const yi = Fe("Layers", [
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
 */ const dh = Fe("Lightbulb", [
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
 */ const uh = Fe("ListX", [
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
 */ const ja = Fe("List", [
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
 */ const $t = Fe("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vi = Fe("Lock", [
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
 */ const fh = Fe("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ph = Fe("Package", [
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
 */ const jr = Fe("Pen", [
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
 */ const mh = Fe("Pill", [
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
 */ const It = Fe("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const In = Fe("Settings", [
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
 */ const Sr = Fe("Trash2", [
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
 */ const Zu = Fe("Unlock", [
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
 */ const hh = Fe("Warehouse", [
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
 */ const gh = Fe("XCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Je = Fe("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  xh = () => {
    const { sidebarOpen: e, setSidebarOpen: t } = ot(),
      { t: n } = kt();
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
              children: r.jsx(yi, { className: "w-5 h-5" }),
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
                ? r.jsx(ja, { className: "w-6 h-6" })
                : r.jsx(ja, { className: "w-6 h-6" }),
            }),
          ],
        }),
      }),
    });
  },
  yh = () => {
    const {
        viewMode: e,
        setViewMode: t,
        logout: n,
        currentUser: s,
        selectedDepartmentType: o,
        openAddDepartmentModal: l,
        apiDepartmentData: a,
        allDepartmentsList: i,
      } = ot(),
      { language: c, setLanguage: g, t: y } = kt(),
      [h, p] = mo.useState(!1),
      b = () => {
        g(c === "zh-TW" ? "en" : "zh-TW");
      },
      N = mo.useMemo(() => {
        if (!o || !i || !a) return !1;
        const S = a.map((u) => u.name);
        return (
          i
            .filter((u) => u["department_type "] === o)
            .filter((u) => !S.includes(u.name)).length > 0
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
                        r.jsx(mh, { className: "w-4 h-4" }),
                        r.jsx("span", {
                          className: "text-sm font-medium",
                          children: y("topbar.medicine"),
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
                        r.jsx(Yu, { className: "w-4 h-4" }),
                        r.jsx("span", {
                          className: "text-sm font-medium",
                          children: y("topbar.department"),
                        }),
                      ],
                    }),
                  ],
                }),
                r.jsx("button", {
                  onClick: () => p(!h),
                  className:
                    "lg:hidden flex items-center justify-center p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
                  children: h
                    ? r.jsx(ih, { className: "w-4 h-4" })
                    : r.jsx(Xu, { className: "w-4 h-4" }),
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
                  N &&
                  r.jsxs(r.Fragment, {
                    children: [
                      r.jsxs("button", {
                        onClick: () => l(),
                        className:
                          "w-full lg:w-auto flex justify-center items-center space-x-2 px-3 py-1.5 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors border border-green-700",
                        children: [
                          r.jsx(It, { className: "w-4 h-4" }),
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
                    r.jsx(ch, { className: "w-4 h-4" }),
                    r.jsx("span", {
                      className: "text-sm font-medium",
                      children: y("topbar.language"),
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
                    r.jsx(fh, { className: "w-4 h-4" }),
                    r.jsx("span", {
                      className: "text-sm font-medium",
                      children: y("topbar.logout"),
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
  vh = [
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
  wh = ({ isOpen: e, onClose: t }) => {
    const [n, s] = f.useState("blue"),
      [o, l] = f.useState(1),
      [a, i] = f.useState(60),
      [c, g] = f.useState(""),
      [y, h] = f.useState(""),
      [p, b] = f.useState([]),
      [N, S] = f.useState([]),
      [A, d] = f.useState([]),
      [u, m] = f.useState(!1),
      [C, P] = f.useState(!1),
      D = f.useRef(null),
      T = f.useRef(null),
      z = f.useRef(null),
      E = f.useRef(null);
    f.useEffect(() => {
      if (e) {
        const w = localStorage.getItem("medMap_setting");
        if (w)
          try {
            const j = JSON.parse(w);
            s(j.light_color || "blue"),
              l(j.brightness !== void 0 ? j.brightness : 1),
              i(j.light_sec !== void 0 ? j.light_sec : 60),
              g(j.default_person || ""),
              h(j.default_person_id || "");
          } catch (j) {
            console.error("讀取設定失敗:", j),
              s("blue"),
              l(1),
              i(60),
              g(""),
              h("");
          }
        else s("blue"), l(1), i(60), g(""), h("");
        O();
      }
    }, [e]),
      f.useEffect(() => {
        const w = (j) => {
          z.current &&
            !z.current.contains(j.target) &&
            D.current &&
            !D.current.contains(j.target) &&
            m(!1),
            E.current &&
              !E.current.contains(j.target) &&
              T.current &&
              !T.current.contains(j.target) &&
              P(!1);
        };
        return (
          document.addEventListener("mousedown", w),
          () => document.removeEventListener("mousedown", w)
        );
      }, []);
    const O = async () => {
        try {
          const w = await De.getAllStaffInfo();
          w.Code === 200 && w.Data && b(w.Data);
        } catch (w) {
          console.error("獲取人員資料失敗:", w);
        }
      },
      se = (w) => {
        if ((g(w), w.trim() === "")) {
          S([]), m(!1);
          return;
        }
        const j = p.filter(
          (k) => k.name && k.name.toLowerCase().includes(w.toLowerCase())
        );
        S(j), m(j.length > 0);
      },
      fe = (w) => {
        if ((h(w), w.trim() === "")) {
          d([]), P(!1);
          return;
        }
        const j = p.filter(
          (k) => k.ID && k.ID.toLowerCase().includes(w.toLowerCase())
        );
        d(j), P(j.length > 0);
      },
      M = (w) => {
        g(w.name), h(w.ID), m(!1);
      },
      v = (w) => {
        g(w.name), h(w.ID), P(!1);
      },
      F = () => {
        const w = {
          light_color: n,
          brightness: o,
          light_sec: a,
          default_person: c,
          default_person_id: y,
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
                      children: r.jsx(Je, { className: "w-5 h-5" }),
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
                                  ref: D,
                                  type: "text",
                                  value: c,
                                  onChange: (w) => se(w.target.value),
                                  onFocus: () => {
                                    c.trim() && se(c);
                                  },
                                  placeholder: "請輸入人員名稱",
                                  className:
                                    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                                }),
                                u &&
                                  r.jsx("div", {
                                    ref: z,
                                    className:
                                      "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto",
                                    children: N.map((w, j) =>
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
                                        j
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
                                  ref: T,
                                  type: "text",
                                  value: y,
                                  onChange: (w) => fe(w.target.value),
                                  onFocus: () => {
                                    y.trim() && fe(y);
                                  },
                                  placeholder: "請輸入人員 ID",
                                  className:
                                    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                                }),
                                C &&
                                  r.jsx("div", {
                                    ref: E,
                                    className:
                                      "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto",
                                    children: A.map((w, j) =>
                                      r.jsxs(
                                        "div",
                                        {
                                          onClick: () => v(w),
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
                                        j
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
                          children: vh.map((w) =>
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
  bh = ({ isOpen: e, onClose: t, onConfirm: n }) => {
    const [s, o] = f.useState(""),
      [l, a] = f.useState(!1);
    f.useEffect(() => {
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
                          children: r.jsx(vi, {
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
                      children: r.jsx(Je, { className: "w-6 h-6" }),
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
                              ? r.jsx(Qu, { className: "w-5 h-5" })
                              : r.jsx(Ku, { className: "w-5 h-5" }),
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
  Nh = () => {
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
      } = ot(),
      { t: y } = kt(),
      [h, p] = f.useState(new Set()),
      [b, N] = f.useState([]),
      [S, A] = f.useState(!0),
      [d, u] = f.useState([]),
      [m, C] = f.useState(!1),
      [P, D] = f.useState(!1),
      T = () => {
        c ? g(!1) : D(!0);
      },
      z = (M) => {
        M === "66437068" ? (g(!0), D(!1)) : alert("密碼錯誤，無法開啟後台模式");
      };
    f.useEffect(() => {
      (async () => {
        A(!0);
        try {
          const v = await De.getDepartments();
          v.Code === 200 && v.Data
            ? (console.log(v.Data), N(v.Data), i(v.Data))
            : (console.error("API returned error:", v), N([]), i([]));
        } catch (v) {
          console.error("Failed to fetch department data:", v), N([]), i([]);
        } finally {
          A(!1);
        }
      })();
    }, []);
    const E = b.reduce((M, v) => {
        const F = v["department_type "];
        return M[F] || (M[F] = []), M[F].push(v), M;
      }, {}),
      O = (M) => {
        const v = new Set(h);
        v.has(M) ? v.delete(M) : v.add(M), p(v);
      },
      se = async (M) => {
        console.log("🏢 選擇部門:", M), s(M), await fe(M), t(!1);
      },
      fe = async (M) => {
        console.log("🚀 開始取得藥品地圖資料，部門類型:", M), a(!0);
        try {
          const v = await De.getMedMapByDepartment(M);
          if (v.Code === 200 && v.Data) {
            console.log("📡 API 回傳成功:", v.Data);
            const F = Et.convertMedMapApiToFakeData(v.Data);
            if (!Et.validateConvertedData(F)) {
              console.error("❌ 轉換後的資料驗證失敗"), u([]);
              return;
            }
            const j = Et.generateConversionReport(v.Data, F);
            u(F),
              o(F),
              console.log("💾 已暫存轉換後的資料到狀態中"),
              console.log("📊 最終轉換結果:", F),
              console.log("📋 轉換報告:", j);
          } else console.error("❌ API 回傳錯誤:", v), u([]), o(null);
        } catch (v) {
          console.error("💥 取得藥品地圖資料失敗:", v), u([]), o(null);
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
                          title: y("nav.home"),
                          children: r.jsx(yi, { className: "w-5 h-5" }),
                        }),
                        r.jsx("h1", {
                          className: "text-lg font-semibold text-gray-900",
                          children: y("sidebar.drugMap"),
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      type: "button",
                      onClick: () => t(!e),
                      className:
                        "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
                      title: y("sidebar.closeSidebar"),
                      children: r.jsx(uh, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
              }),
              r.jsx("div", {
                className: "flex-1 overflow-y-auto p-4",
                children: S
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
                          children: y("sidebar.departmentCategories"),
                        }),
                        Object.entries(E).map(([M, v]) =>
                          r.jsxs(
                            "div",
                            {
                              className: "space-y-1",
                              children: [
                                r.jsxs("button", {
                                  type: "button",
                                  onClick: () => se(M),
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
                                          ? r.jsx(Yu, { className: "w-4 h-4" })
                                          : r.jsx(hh, { className: "w-4 h-4" }),
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
                                                v.length,
                                                " ",
                                                y("sidebar.departments"),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    r.jsx("div", {
                                      onClick: (F) => {
                                        F.stopPropagation(), O(M);
                                      },
                                      className:
                                        "p-1 hover:bg-gray-200/50 rounded transition-colors",
                                      children: h.has(M)
                                        ? r.jsx(Xu, { className: "w-4 h-4" })
                                        : r.jsx(ah, { className: "w-4 h-4" }),
                                    }),
                                  ],
                                }),
                                h.has(M) &&
                                  r.jsx("div", {
                                    className: "ml-6 space-y-2",
                                    children: v.map((F) =>
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
                          onClick: T,
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
                      onClick: () => C(!0),
                      className:
                        "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
                      title: "設定",
                      children: r.jsx(In, { className: "w-5 h-5" }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
        r.jsx(wh, { isOpen: m, onClose: () => C(!1) }),
        r.jsx(bh, { isOpen: P, onClose: () => D(!1), onConfirm: z }),
      ],
    });
  },
  jh = () => {
    const { t: e } = kt();
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
  Sh = ({
    component: e,
    scale: t,
    isLocked: n,
    isHighlighted: s = !1,
    onContainerClick: o,
  }) => {
    const l = f.useRef(null),
      { t: a } = kt(),
      {
        apiDepartmentData: i,
        setApiDepartmentData: c,
        showNotification: g,
      } = ot(),
      [y, h] = f.useState(!1),
      [p, b] = f.useState({ x: 0, y: 0 }),
      [N, S] = f.useState(e.position),
      [A, d] = f.useState(!1),
      [u, m] = f.useState(null),
      [C, P] = f.useState({ x: 0, y: 0 }),
      [D, T] = f.useState({ x: 0, y: 0 });
    f.useEffect(() => {
      console.log("🔄 CanvasComponent: position prop changed", {
        GUID: e.GUID,
        newPosition: e.position,
        currentPosition: N,
      }),
        S(e.position);
    }, [e.position]);
    const z = () => {
        try {
          const X = localStorage.getItem("medMap_setting");
          if (X) return JSON.parse(X).light_color || "red";
        } catch (X) {
          console.error("讀取高亮顏色設定失敗:", X);
        }
        return "red";
      },
      E = f.useCallback(
        async (X, Ce) => {
          if (!i) return;
          console.log("🔄 更新組件位置:", X, Ce);
          const ye = JSON.parse(JSON.stringify(i)),
            xe = (te) => {
              for (const R of te) {
                if (R.GUID === X)
                  return (
                    (R.position = { x: Ce.x.toFixed(3), y: Ce.y.toFixed(3) }),
                    console.log(
                      "✅ 組件位置已更新:",
                      R.name,
                      Ce.x.toFixed(3),
                      Ce.y.toFixed(3)
                    ),
                    !0
                  );
                if (
                  (R.components &&
                    Array.isArray(R.components) &&
                    xe(R.components)) ||
                  (R.contents && Array.isArray(R.contents) && xe(R.contents))
                )
                  return !0;
              }
              return !1;
            };
          if (xe(ye)) {
            c(ye), console.log("💾 全域資料已更新");
            try {
              console.log("📡 開始同步後端位置資料...");
              const te = await De.updateContainerPosition({
                GUID: X,
                absolute_position: `${Ce.x.toFixed(3)},${Ce.y.toFixed(3)}`,
              });
              te.Code === 200
                ? (console.log("✅ 後端位置同步成功", te),
                  g("位置更新成功", "success"))
                : (console.error("❌ 後端位置同步失敗:", te),
                  g(`位置更新失敗: ${te.Result || "未知錯誤"}`, "error"));
            } catch (te) {
              console.error("💥 後端位置同步發生錯誤:", te),
                g("位置更新失敗: 網路錯誤", "error");
            }
          } else console.warn("⚠️ 未找到要更新的組件:", X);
        },
        [i, c, g]
      ),
      { position: O, dimensions: se, name: fe, type: M } = e,
      v = f.useCallback(
        (X) => {
          const Ce = l.current;
          if (Ce)
            if ((T({ x: X.clientX, y: X.clientY }), n)) {
              X.preventDefault(),
                X.stopPropagation(),
                Ce.setPointerCapture(X.pointerId);
              const ye = Ce.getBoundingClientRect(),
                xe = X.clientX - ye.left,
                Ue = X.clientY - ye.top;
              b({ x: xe, y: Ue }), h(!0), d(!1);
            } else d(!1);
        },
        [n]
      ),
      F = f.useCallback(() => {
        if (!i) return [];
        const X = [],
          Ce = (ye) => {
            for (const xe of ye)
              xe.GUID !== e.GUID &&
                xe.position &&
                X.push({
                  GUID: xe.GUID,
                  position: xe.position,
                  dimensions: xe.dimensions,
                }),
                xe.components &&
                  Array.isArray(xe.components) &&
                  Ce(xe.components),
                xe.contents && Array.isArray(xe.contents) && Ce(xe.contents);
          };
        return Ce(i), X;
      }, [i, e.GUID]),
      w = f.useCallback(
        (X, Ce) => {
          const xe = F();
          let Ue = X,
            te = Ce;
          for (const R of xe) {
            const I = parseFloat(R.position.x),
              K = parseFloat(R.position.y);
            if (
              (Math.abs(X - I) < 20 && (Ue = I),
              Math.abs(Ce - K) < 20 && (te = K),
              R.dimensions && e.dimensions)
            ) {
              const U = I + parseFloat(R.dimensions.width),
                ne = X + parseFloat(e.dimensions.width);
              Math.abs(ne - U) < 20 &&
                (Ue = U - parseFloat(e.dimensions.width));
              const ae = K + parseFloat(R.dimensions.depth),
                $ = Ce + parseFloat(e.dimensions.depth);
              Math.abs($ - ae) < 20 &&
                (te = ae - parseFloat(e.dimensions.depth));
            }
          }
          return { x: Ue, y: te };
        },
        [F, e.dimensions]
      ),
      j = f.useCallback(
        (X) => {
          const Ce = Math.abs(X.clientX - D.x),
            ye = Math.abs(X.clientY - D.y);
          if (((Ce > 5 || ye > 5) && d(!0), !y || !n)) return;
          X.preventDefault(), X.stopPropagation();
          const xe = l.current;
          if (!xe) return;
          const Ue = xe.closest("[data-canvas-content]");
          if (!Ue) return;
          const te = Ue.getBoundingClientRect(),
            R = (X.clientX - te.left - p.x) / t,
            I = (X.clientY - te.top - p.y) / t,
            K = w(R, I);
          S(K);
        },
        [y, p, t, n, w, D]
      ),
      k = f.useCallback(
        (X) => {
          const Ce = Math.abs(X.clientX - D.x),
            ye = Math.abs(X.clientY - D.y),
            xe = Ce > 5 || ye > 5;
          if (n) {
            if (!y) return;
            X.preventDefault(), X.stopPropagation();
            const Ue = l.current;
            Ue && Ue.releasePointerCapture(X.pointerId),
              h(!1),
              xe ? E(e.GUID, N) : o && o(e),
              d(!1);
          } else
            !xe && o && (X.preventDefault(), X.stopPropagation(), o(e)), d(!1);
        },
        [y, n, o, e, E, N, D]
      ),
      _ = f.useCallback(
        (X) => {
          const Ce = l.current;
          if (!Ce) return;
          const ye = X.touches[0];
          if (ye && (P({ x: ye.clientX, y: ye.clientY }), n)) {
            X.preventDefault(), X.stopPropagation(), m(ye.identifier);
            const xe = Ce.getBoundingClientRect(),
              Ue = ye.clientX - xe.left,
              te = ye.clientY - xe.top;
            b({ x: Ue, y: te }), h(!0);
          }
        },
        [n]
      ),
      J = f.useCallback(
        (X) => {
          if (!y || !n || u === null) return;
          X.preventDefault(), X.stopPropagation();
          const Ce = l.current;
          if (!Ce) return;
          const ye = Array.from(X.touches).find((K) => K.identifier === u);
          if (!ye) return;
          const xe = Ce.closest("[data-canvas-content]");
          if (!xe) return;
          const Ue = xe.getBoundingClientRect(),
            te = (ye.clientX - Ue.left - p.x) / t,
            R = (ye.clientY - Ue.top - p.y) / t,
            I = w(te, R);
          S(I);
        },
        [y, p, t, n, u, w]
      ),
      G = f.useCallback(
        (X) => {
          const Ce = Array.from(X.changedTouches)[0];
          if (!Ce) return;
          const ye = Math.abs(Ce.clientX - C.x),
            xe = Math.abs(Ce.clientY - C.y),
            Ue = ye > 10 || xe > 10;
          if (n) {
            if (
              !y ||
              u === null ||
              !Array.from(X.changedTouches).some((R) => R.identifier === u)
            )
              return;
            X.preventDefault(),
              X.stopPropagation(),
              h(!1),
              m(null),
              P({ x: 0, y: 0 }),
              Ue ? E(e.GUID, N) : o && o(e);
          } else
            !Ue && o && (X.preventDefault(), X.stopPropagation(), o(e)),
              P({ x: 0, y: 0 });
        },
        [y, n, u, E, e, N, C, o]
      ),
      oe = f.useCallback(
        (X) => {
          !y ||
            !n ||
            u === null ||
            !Array.from(X.changedTouches).some((ye) => ye.identifier === u) ||
            (X.preventDefault(),
            X.stopPropagation(),
            S(e.position),
            h(!1),
            m(null),
            P({ x: 0, y: 0 }));
        },
        [y, n, u, e.position]
      ),
      we = (X) => {
        if (s) return `highlight-breathe-${z()}`;
        switch (X) {
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
      me = (X) => {
        if (s) return `highlight-breathe-${z()}`;
        switch (X) {
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
      V = (X) => {
        if (s) return `highlight-tag-${z()}`;
        switch (X) {
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
      he = (X) => {
        const Ce =
          X === "調劑台"
            ? "type.dispensingStation"
            : X === "藥庫"
            ? "type.warehouse"
            : X === "parent_container"
            ? "櫃體"
            : "type." + X;
        return a(Ce) || X;
      };
    return r.jsx("div", {
      ref: l,
      className: `flex flex-col absolute border-2 rounded-lg shadow-lg hover:shadow-xl ${we(
        M
      )} overflow-hidden ${n ? "cursor-move" : "cursor-default"} ${
        y ? "shadow-2xl z-50" : ""
      }`,
      style: {
        left: `${N.x}px`,
        top: `${N.y}px`,
        minWidth: M === "調劑台" || M === "藥庫" ? "120px" : "180px",
        minHeight: M === "調劑台" || M === "藥庫" ? "60px" : "120px",
        userSelect: "none",
        touchAction: "none",
        transition: y
          ? "none"
          : "transform 0.2s ease-out, box-shadow 0.2s ease-out",
      },
      onPointerDown: v,
      onPointerMove: j,
      onPointerUp: k,
      onTouchStart: _,
      onTouchMove: J,
      onTouchEnd: G,
      onTouchCancel: oe,
      children: r.jsx("div", {
        className: `w-full min-w-[400px] h-auto flex items-start flex-1 justify-between p-2 border-gray-600 ${me(
          M
        )}`,
        children: r.jsx("div", {
          className: "flex space-x-2 flex-1 min-w-0",
          children: r.jsxs("div", {
            className: "min-w-0 flex gap-4",
            children: [
              r.jsx("div", {
                className: "font-semibold text-[48px] truncate",
                children: fe,
              }),
              r.jsx("div", {
                className: `flex items-center text-[28px] truncate py-2 px-4 text-white rounded-2xl ${V(
                  M
                )}`,
                children: he(M),
              }),
            ],
          }),
        }),
      }),
    });
  },
  tl = ({ isOpen: e, onClose: t, onScanSuccess: n, mode: s }) => {
    const { showNotification: o, openAddBarcodeModal: l } = ot();
    console.log("🔍 QRCodeScannerModal props:", {
      isOpen: e,
      mode: s,
      hasOnScanSuccess: !!n,
    });
    const a = f.useRef(null),
      i = f.useRef(null),
      c = f.useRef(null),
      g = f.useRef(null),
      y = f.useRef(!1),
      [h, p] = f.useState(!1),
      [b, N] = f.useState(""),
      [S, A] = f.useState(null),
      [d, u] = f.useState(!1);
    f.useEffect(() => {
      const E = () => {
        const O = window.innerWidth < 680;
        u(O);
      };
      return (
        E(),
        window.addEventListener("resize", E),
        () => window.removeEventListener("resize", E)
      );
    }, []);
    const m = async () => {
        try {
          N("");
          const E = await navigator.mediaDevices.getUserMedia({
            video: {
              facingMode: "environment",
              width: { ideal: 9999 },
              height: { ideal: 9999 },
            },
          });
          (c.current = E),
            a.current &&
              ((a.current.srcObject = E),
              await a.current.play(),
              console.log("✅ Camera started, setting isScanning to true"),
              p(!0));
        } catch (E) {
          console.error("無法開啟相機:", E),
            N("無法開啟相機，請確認相機權限已開啟");
        }
      },
      C = () => {
        console.log("🛑 停止相機和掃描"),
          (y.current = !1),
          p(!1),
          c.current &&
            (c.current.getTracks().forEach((E) => E.stop()),
            (c.current = null)),
          a.current && (a.current.srcObject = null);
      },
      P = async () => {
        if (
          (console.log("🔄 captureAndScan called"),
          !a.current || !i.current || !h)
        ) {
          console.log("❌ Early return: missing refs or not scanning");
          return;
        }
        if (y.current) {
          console.log("⏱️ Scan already in progress, skipping");
          return;
        }
        y.current = !0;
        const E = a.current,
          O = i.current,
          se = O.getContext("2d");
        if (!se || E.readyState !== E.HAVE_ENOUGH_DATA) {
          console.log("❌ Video not ready or no context"),
            (y.current = !1),
            setTimeout(() => {
              h && P();
            }, 100);
          return;
        }
        (O.width = E.videoWidth),
          (O.height = E.videoHeight),
          se.drawImage(E, 0, 0, O.width, O.height),
          O.toBlob(
            async (fe) => {
              if (!fe) return;
              const M = new File([fe], "scan.jpg", { type: "image/jpeg" }),
                v = performance.now();
              try {
                console.log("📸 [相機掃描] 截取圖片並掃描...");
                const F = performance.now(),
                  w = await De.scanBarcode(M),
                  j = performance.now();
                if (
                  (console.log(
                    `⏱️ [相機掃描] 掃描條碼API用時: ${(j - F).toFixed(2)}ms`
                  ),
                  !w.results || w.results.length === 0)
                ) {
                  console.log("⚠️ 未辨識到條碼，立即進行下一輪掃描"),
                    (y.current = !1),
                    h && P();
                  return;
                }
                const k = w.results[0];
                if (!k.code) {
                  console.log(
                    "⚠️ 辨識到條碼但無法讀取內容，立即進行下一輪掃描"
                  ),
                    (y.current = !1),
                    h && P();
                  return;
                }
                console.log("✅ 成功辨識條碼:", k.code),
                  console.log("📋 條碼類型:", k.type),
                  console.log("📊 信心度:", k.conf),
                  (y.current = !1),
                  C(),
                  t();
                try {
                  const _ = performance.now(),
                    J = await De.searchByBarCode(k.code);
                  console.log("AI掃描回傳:", J);
                  const G = performance.now();
                  if (
                    (console.log(
                      `⏱️ [相機掃描] 搜尋藥品資料API用時: ${(G - _).toFixed(
                        2
                      )}ms`
                    ),
                    console.log("🔍 條碼搜尋結果:", J),
                    J.Code === 200)
                  )
                    if (
                      (console.log("✅ 找到藥品資料:", J.Data),
                      console.log("🎯 準備調用 onScanSuccess, mode:", s),
                      o("找到藥品資料", "success"),
                      n)
                    ) {
                      console.log("✅ onScanSuccess 存在，開始調用");
                      const oe = performance.now();
                      n(k.code, J.Data);
                      const we = performance.now();
                      console.log(
                        `⏱️ [相機掃描] 定位藥品用時: ${(we - oe).toFixed(2)}ms`
                      );
                      const me = performance.now();
                      console.log(
                        `⏱️ [相機掃描] 總用時: ${(me - v).toFixed(2)}ms`
                      ),
                        console.log("✅ onScanSuccess 調用完成");
                    } else console.warn("⚠️ onScanSuccess 不存在");
                  else
                    J.Code === -200 && J.Result === "查無資料"
                      ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                        o("查無條碼資料，請建立條碼", "warning"),
                        l(k.code))
                      : (console.log("❌ 搜尋失敗:", J.Result),
                        o(J.Result || "搜尋失敗", "error"));
                } catch (_) {
                  console.error("條碼搜尋錯誤:", _),
                    o("搜尋失敗，請稍後再試", "error");
                }
              } catch (F) {
                console.error("掃描錯誤:", F),
                  (y.current = !1),
                  setTimeout(() => {
                    h && P();
                  }, 500);
              }
            },
            "image/jpeg",
            1
          );
      },
      D = () => {
        console.log("🚀 開始連續掃描模式"), (y.current = !1), P();
      };
    f.useEffect(
      () => (
        e ? m() : C(),
        () => {
          C();
        }
      ),
      [e]
    ),
      f.useEffect(() => {
        h
          ? (console.log("🚀 isScanning became true, starting continuous scan"),
            D())
          : (console.log("🛑 isScanning became false"), (y.current = !1));
      }, [h]);
    const T = () => {
        C(), t();
      },
      z = async (E) => {
        if (!c.current || !g.current) return;
        const O = g.current.getBoundingClientRect(),
          se = (E.clientX - O.left) / O.width,
          fe = (E.clientY - O.top) / O.height;
        console.log("🎯 點擊聚焦位置:", { x: se, y: fe }),
          A({ x: E.clientX - O.left, y: E.clientY - O.top }),
          setTimeout(() => A(null), 1e3);
        try {
          const M = c.current.getVideoTracks()[0],
            v = M.getCapabilities();
          if (
            (console.log("📹 相機能力:", v),
            !v.focusMode || !v.focusMode.includes("manual"))
          ) {
            console.log("⚠️ 此相機不支援手動聚焦");
            return;
          }
          const F = {
            advanced: [
              {
                focusMode: "manual",
                focusDistance: 0,
                pointsOfInterest: [{ x: se, y: fe }],
              },
            ],
          };
          await M.applyConstraints(F), console.log("✅ 聚焦成功");
        } catch (M) {
          console.log("⚠️ 聚焦失敗 (可能不支援):", M);
        }
      };
    return e
      ? d
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
                      r.jsx(Ur, { className: "w-6 h-6 text-white" }),
                      r.jsx("h2", {
                        className: "text-lg font-semibold text-white",
                        children: "條碼掃描",
                      }),
                    ],
                  }),
                  r.jsx("button", {
                    onClick: T,
                    className:
                      "p-2 hover:bg-gray-700 rounded-lg transition-colors",
                    children: r.jsx(Je, { className: "w-6 h-6 text-white" }),
                  }),
                ],
              }),
              r.jsxs("div", {
                className: "flex-1 relative",
                children: [
                  r.jsxs("div", {
                    ref: g,
                    className: "absolute inset-0 bg-black cursor-crosshair",
                    onClick: z,
                    children: [
                      r.jsx("video", {
                        ref: a,
                        className: "w-full h-full object-cover",
                        playsInline: !0,
                        muted: !0,
                      }),
                      S &&
                        r.jsxs("div", {
                          className: "absolute pointer-events-none",
                          style: {
                            left: S.x,
                            top: S.y,
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
                          children: r.jsx(Ur, {
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
                      onClick: T,
                      className:
                        "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Je, {
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
                          ref: g,
                          className:
                            "relative bg-black rounded-xl overflow-hidden cursor-crosshair",
                          style: { aspectRatio: "16/9" },
                          onClick: z,
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
class Ch {
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
const ps = new Ch(),
  Dh = ({ children: e }) => {
    const t = f.useRef(null),
      {
        selectedDepartmentType: n,
        apiDepartmentData: s,
        setApiDepartmentData: o,
        showNotification: l,
        openAddBarcodeModal: a,
        openContainerDetailModal: i,
        highlightedMedicineCode: c,
        setHighlightedMedicineCode: g,
        activeCanvas: y,
        setActiveCanvas: h,
      } = ot(),
      { t: p } = kt(),
      [b, N] = f.useState({ x: 0, y: 0, scale: 1 }),
      [S, A] = f.useState(!1),
      [d, u] = f.useState(!1),
      [m, C] = f.useState({ x: 0, y: 0 }),
      [P, D] = f.useState(!1),
      [T, z] = f.useState(!1),
      [E, O] = f.useState(""),
      [se, fe] = f.useState([]),
      [M, v] = f.useState(null),
      F = {
        blue: "255,0,0",
        green: "0,255,0",
        red: "0,0,255",
        yellow: "0,255,255",
        purple: "255,0,255",
        cyan: "255,255,0",
      },
      w = () => {
        try {
          const $ = localStorage.getItem("med_map_anchor");
          return $ ? JSON.parse($) : [];
        } catch ($) {
          return (
            console.error("Error reading canvas states from localStorage:", $),
            []
          );
        }
      },
      j = ($, H, B, Z) => {
        try {
          const le = w(),
            ge = le.findIndex(
              (ve) => ve.department === $ && ve.canvasType === H
            ),
            ue = { department: $, canvasType: H, scale: B, position: Z };
          ge >= 0 ? (le[ge] = ue) : le.push(ue),
            localStorage.setItem("med_map_anchor", JSON.stringify(le));
        } catch (le) {
          console.error("Error saving canvas state to localStorage:", le);
        }
      },
      k = ($, H) =>
        w().find((Z) => Z.department === $ && Z.canvasType === H) || null;
    f.useEffect(
      () => (
        h("infinite"),
        () => {
          h(null);
        }
      ),
      [h]
    ),
      f.useEffect(() => {
        if (y !== "infinite" || !n) return;
        const H = setInterval(async () => {
          try {
            console.log("🔄 Auto-refreshing data for InfiniteCanvas...");
            const B = await De.getMedMapByDepartment(n);
            if (B.Code === 200 && B.Data) {
              console.log("📡 API 回傳成功，開始轉換資料");
              const Z = Et.convertMedMapApiToFakeData(B.Data);
              if (!Et.validateConvertedData(Z)) {
                console.error("❌ 轉換後的資料驗證失敗");
                return;
              }
              console.log(
                "✅ Data refreshed and converted successfully, updating state..."
              ),
                console.log("📊 Converted data to set:", Z),
                o(Z);
            }
          } catch (B) {
            console.error("❌ Failed to auto-refresh data:", B);
          }
        }, 2 * 60 * 1e3);
        return () => {
          clearInterval(H);
        };
      }, [y, n, o]),
      f.useEffect(() => {
        if (n) {
          const $ = k(n, "InfiniteCanvas");
          if ($) N({ x: $.position.x, y: $.position.y, scale: $.scale });
          else {
            const H = { x: 0, y: 0, scale: 1 };
            N(H), j(n, "InfiniteCanvas", H.scale, H);
          }
        }
      }, [n]),
      f.useEffect(() => {
        if (!n) return;
        const $ = setTimeout(() => {
          j(n, "InfiniteCanvas", b.scale, { x: b.x, y: b.y });
        }, 500);
        return () => clearTimeout($);
      }, [b, n]),
      f.useEffect(() => {
        console.log("🔄 InfiniteCanvas: apiDepartmentData changed", {
          hasData: !!s,
          length: (s == null ? void 0 : s.length) || 0,
          data: s,
        });
      }, [s]);
    const _ = f.useMemo(() => {
      if (
        (console.log(
          "🔄 useMemo: Re-calculating components due to apiDepartmentData change"
        ),
        !s || s.length === 0)
      )
        return console.log("⚠️ No apiDepartmentData available"), [];
      const $ = s,
        H = [];
      console.log("🔍 Processing departments for InfiniteCanvas:", $);
      for (const B of $)
        if (
          (console.log("📦 Processing department:", B.name, "Type:", B.type),
          B.type === "調劑台" || B.type === "藥庫")
        ) {
          if (B.contents && Array.isArray(B.contents)) {
            console.log("  └─ Found", B.contents.length, "parent containers");
            for (const Z of B.contents)
              console.log("    📌 Parent container:", {
                GUID: Z.GUID,
                name: Z.name,
                type: Z.type,
                position: Z.position,
                hasDimensions: !!Z.dimensions,
                dimensions: Z.dimensions,
              }),
                H.push({
                  GUID: Z.GUID,
                  type: Z.type,
                  name: `${Z.name}`,
                  position: Z.position,
                  dimensions: Z.dimensions || {
                    width: 200,
                    height: 200,
                    depth: 200,
                  },
                  med_list: Z.med_list || [],
                  serverName: Z.serverName,
                  serverType: Z.serverType,
                  Master_GUID: B.GUID,
                  contents: Z.contents || [],
                });
          }
        } else
          B.contents &&
            Array.isArray(B.contents) &&
            B.contents.length > 0 &&
            (console.log("  └─ Found", B.contents.length, "contents"),
            H.push(...B.contents));
      return (
        console.log("✅ Total components for InfiniteCanvas:", H.length), H
      );
    }, [s]);
    f.useEffect(() => {
      console.log("🎨 InfiniteCanvas: components changed", {
        count: _.length,
        components: _.map(($) => ({
          GUID: $.GUID,
          name: $.name,
          type: $.type,
          position: $.position,
        })),
      });
    }, [_]),
      f.useEffect(() => {
        const $ = (B) => {
            B.code === "Space" && !B.repeat && (B.preventDefault(), D(!0));
          },
          H = (B) => {
            B.code === "Space" && (B.preventDefault(), D(!1), A(!1));
          };
        return (
          window.addEventListener("keydown", $),
          window.addEventListener("keyup", H),
          () => {
            window.removeEventListener("keydown", $),
              window.removeEventListener("keyup", H);
          }
        );
      }, []);
    const J = f.useCallback(
        ($) => {
          var B;
          if (d) return;
          if (
            ($.ctrlKey && !navigator.userAgent.includes("Mac")) ||
            ($.metaKey && navigator.userAgent.includes("Mac"))
          ) {
            $.preventDefault(), $.stopPropagation();
            const Z =
              (B = t.current) == null ? void 0 : B.getBoundingClientRect();
            if (!Z) return;
            const le = $.clientX - Z.left,
              ge = $.clientY - Z.top,
              ue = $.deltaY > 0 ? 0.9 : 1.1,
              ve = Math.max(0.1, Math.min(5, b.scale * ue)),
              je = ve / b.scale,
              Re = le - (le - b.x) * je,
              rt = ge - (ge - b.y) * je;
            N({ x: Re, y: rt, scale: ve });
          }
        },
        [b, d]
      ),
      G = f.useCallback(
        ($) => {
          d ||
            !P ||
            (A(!0), C({ x: $.clientX, y: $.clientY }), $.preventDefault());
        },
        [d, P]
      ),
      oe = f.useCallback(
        ($) => {
          if (!S || d) return;
          const H = $.clientX - m.x,
            B = $.clientY - m.y;
          N((Z) => ({ ...Z, x: Z.x + H, y: Z.y + B })),
            C({ x: $.clientX, y: $.clientY });
        },
        [S, m, d]
      ),
      we = f.useCallback(() => {
        A(!1);
      }, []),
      me = f.useCallback(
        ($) => {
          if (!s) return [];
          const H = [],
            B = (Z) => {
              for (const le of Z)
                le.med_list &&
                  Array.isArray(le.med_list) &&
                  le.med_list.some((ue) => ue.code == $) &&
                  (console.log("✅ 找到藥品所在櫃體:", le.name, le.GUID),
                  H.push(le)),
                  le.components &&
                    Array.isArray(le.components) &&
                    B(le.components),
                  le.contents && Array.isArray(le.contents) && B(le.contents);
            };
          return B(s), H;
        },
        [s]
      ),
      V = f.useCallback(() => {
        try {
          const H = localStorage.getItem("medMap_setting");
          if (H) {
            const Z = JSON.parse(H).light_sec;
            if (Z != null && Z !== "") {
              const le = Number(Z);
              if (!isNaN(le) && le > 0) return le * 1e3;
            }
          }
        } catch (H) {
          console.error("讀取亮燈設定失敗:", H);
        }
        return 6e4;
      }, []),
      he = f.useCallback(() => {
        const $ = { rgb_color: "255,0,0", brightness: "100" };
        try {
          const H = localStorage.getItem("medMap_setting");
          if (H) {
            const B = JSON.parse(H),
              Z = B.light_color || "red";
            return {
              rgb_color: F[Z] || F.red,
              brightness: String(B.brightness !== void 0 ? B.brightness : 100),
            };
          }
        } catch (H) {
          console.error("讀取亮燈設定失敗:", H);
        }
        return $;
      }, []),
      X = f.useCallback(
        async ($) => {
          if (!$.trim()) return;
          console.log("🔍 搜尋藥碼:", $);
          const H = me($);
          if (H.length > 0) {
            const B = V(),
              Z = he();
            console.log(`🎯 高亮 ${H.length} 個櫃體:`, H),
              console.log(`⏱️ 亮燈時長: ${B}ms (${B / 1e3}秒)`),
              console.log("💡 亮燈設定:", Z);
            const le = H.map((ue) => ue.GUID);
            fe(le), v($), g($);
            const ge = H.filter((ue) => ue.serverName && ue.serverType).map(
              (ue) => ({
                serverName: ue.serverName,
                serverType: ue.serverType,
                medicineCode: $,
                deviceType: ue.device_type,
              })
            );
            ge.length > 0 &&
              (await ps.startLighting(ge, Z.rgb_color, Z.brightness, B),
              setTimeout(() => {
                fe([]), v(null), g(null);
              }, B));
          } else
            console.log("❌ 未找到包含此藥品的櫃體"), fe([]), v(null), g(null);
        },
        [me, V, he, g]
      ),
      Ce = ($, H) => {
        var ge, ue;
        console.log("📍 [相機掃描-部門視圖] 藥品定位模式 - 掃描到藥品:", {
          barcode: $,
          medicineData: H,
        });
        const B =
          ((ge = H[0]) == null ? void 0 : ge.CODE) ||
          ((ue = H[0]) == null ? void 0 : ue.code);
        z(!1);
        const Z = performance.now();
        X(B);
        const le = performance.now();
        console.log(
          `⏱️ [相機掃描-部門視圖] 亮燈用時: ${(le - Z).toFixed(2)}ms`
        );
      },
      ye = async ($) => {
        var H, B;
        if ($.key === "Enter") {
          if (($.preventDefault(), !E.trim())) {
            l("請輸入條碼", "warning");
            return;
          }
          const Z = performance.now();
          try {
            console.log("🔍 [手動輸入-部門視圖] 搜尋條碼:", E);
            const le = performance.now(),
              ge = await De.searchByBarCode(E),
              ue = performance.now();
            if (
              (console.log(
                `⏱️ [手動輸入-部門視圖] API搜尋藥品資料用時: ${(
                  ue - le
                ).toFixed(2)}ms`
              ),
              console.log("📋 條碼搜尋回應:", ge),
              ge.Code === 200 && ge.Data && ge.Data.length > 0)
            ) {
              const ve =
                ((H = ge.Data[0]) == null ? void 0 : H.CODE) ||
                ((B = ge.Data[0]) == null ? void 0 : B.code);
              console.log("✅ 找到藥品資料:", ge.Data),
                l("找到藥品，開始亮燈", "success");
              const je = performance.now();
              X(ve);
              const Re = performance.now();
              console.log(
                `⏱️ [手動輸入-部門視圖] 亮燈用時: ${(Re - je).toFixed(2)}ms`
              ),
                O("");
              const rt = performance.now();
              console.log(
                `⏱️ [手動輸入-部門視圖] 總用時: ${(rt - Z).toFixed(2)}ms`
              );
            } else
              ge.Code === -200 && ge.Result === "查無資料"
                ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                  l("查無條碼資料，請建立條碼", "warning"),
                  a(E),
                  O(""))
                : (console.log("❌ 搜尋失敗:", ge.Result),
                  l(ge.Result || "搜尋失敗", "error"));
          } catch (le) {
            console.error("條碼搜尋錯誤:", le),
              l("搜尋失敗，請稍後再試", "error");
          }
        }
      };
    f.useEffect(
      () => () => {
        ps.cleanup();
      },
      []
    ),
      f.useEffect(() => {
        if (c) {
          console.log("🔔 Context highlightedMedicineCode 變化:", c);
          const $ = me(c);
          if ($.length > 0) {
            const H = $.map((B) => B.GUID);
            fe(H), v(c), console.log("✨ UI 高亮已更新:", H);
          }
        } else fe([]), v(null);
      }, [c, me]);
    const [xe, Ue] = f.useState(null),
      [te, R] = f.useState({ x: 0, y: 0 }),
      I = ($) => {
        if ($.length < 2) return null;
        const H = $[0],
          B = $[1];
        return Math.sqrt(
          Math.pow(B.clientX - H.clientX, 2) +
            Math.pow(B.clientY - H.clientY, 2)
        );
      },
      K = ($) => {
        if ($.length === 1) return { x: $[0].clientX, y: $[0].clientY };
        const H = $[0],
          B = $[1];
        return {
          x: (H.clientX + B.clientX) / 2,
          y: (H.clientY + B.clientY) / 2,
        };
      },
      U = f.useCallback(
        ($) => {
          if (!d) {
            if ($.touches.length === 2) {
              const H = I($.touches),
                B = K($.touches);
              Ue(H), R(B);
            } else if ($.touches.length === 1) {
              const H = $.touches[0];
              C({ x: H.clientX, y: H.clientY }), A(!0);
            }
          }
        },
        [d]
      ),
      ne = f.useCallback(
        ($) => {
          var H;
          if (!d) {
            if (($.preventDefault(), $.touches.length === 2 && xe !== null)) {
              const B = I($.touches),
                Z = K($.touches);
              if (B && xe) {
                const le =
                  (H = t.current) == null ? void 0 : H.getBoundingClientRect();
                if (!le) return;
                const ge = B / xe,
                  ue = Math.max(0.1, Math.min(5, b.scale * ge)),
                  ve = Z.x - le.left,
                  je = Z.y - le.top,
                  Re = ue / b.scale,
                  rt = ve - (ve - b.x) * Re,
                  $e = je - (je - b.y) * Re;
                N({ x: rt, y: $e, scale: ue }), Ue(B), R(Z);
              }
            } else if ($.touches.length === 1 && S) {
              const B = $.touches[0],
                Z = B.clientX - m.x,
                le = B.clientY - m.y;
              N((ge) => ({ ...ge, x: ge.x + Z, y: ge.y + le })),
                C({ x: B.clientX, y: B.clientY });
            }
          }
        },
        [b, xe, S, m, d]
      ),
      ae = f.useCallback(() => {
        Ue(null), A(!1);
      }, []);
    return (
      f.useEffect(() => {
        const $ = t.current;
        if ($)
          return (
            $.addEventListener("wheel", J, { passive: !1 }),
            () => $.removeEventListener("wheel", J)
          );
      }, [J]),
      f.useCallback(() => {
        N({ x: 0, y: 0, scale: 1 });
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
                r.jsx("input", {
                  type: "text",
                  value: E,
                  onChange: ($) => O($.target.value),
                  onKeyPress: ye,
                  placeholder: "輸入條碼或掃描...",
                  className:
                    "px-4 py-2 w-50 focus:outline-none text-gray-700 disabled:opacity-50",
                }),
                r.jsx("button", {
                  onClick: () => z(!0),
                  className: "p-2",
                  title: "掃描條碼",
                  children: r.jsx(Ur, { className: "w-6 h-6 text-blue-600" }),
                }),
              ],
            }),
          }),
          r.jsx("div", {
            className: "absolute bottom-4 right-4 z-10 flex gap-2",
            children: r.jsx("button", {
              onClick: () => u(!d),
              className: `p-3 rounded-lg shadow-lg transition-colors ${
                d
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`,
              title: p(d ? "canvas.unlockCanvas" : "canvas.lockCanvas"),
              children: d
                ? r.jsx(vi, { className: "w-6 h-6" })
                : r.jsx(Zu, { className: "w-6 h-6" }),
            }),
          }),
          r.jsx("div", {
            ref: t,
            className: `w-full h-full relative ${
              P && !d ? "cursor-grab" : "cursor-default"
            } ${S ? "cursor-grabbing" : ""}`,
            onMouseDown: G,
            onMouseMove: oe,
            onMouseUp: we,
            onMouseLeave: we,
            onTouchStart: U,
            onTouchMove: ne,
            onTouchEnd: ae,
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
                    _.map(($) =>
                      r.jsx(
                        Sh,
                        {
                          component: $,
                          scale: b.scale,
                          isLocked: d,
                          isHighlighted: se.includes($.GUID),
                          onContainerClick: (H) => {
                            console.log("🖱️ 點擊櫃體，傳遞亮燈藥品代碼:", M),
                              i(H, M);
                          },
                        },
                        $.GUID
                      )
                    ),
                    e,
                  ],
                }),
              ],
            }),
          }),
          r.jsx(tl, {
            isOpen: T,
            onClose: () => z(!1),
            onScanSuccess: Ce,
            mode: "med_light_location_mode",
          }),
        ],
      })
    );
  },
  Zr = ({ content: e, isAdminMode: t }) => {
    const {
        openMedBoxModal: n,
        openAddMedBoxModal: s,
        openListDrawModal: o,
        openGridDrawModal: l,
        openAddShelfDrawContainerModal: a,
        openAddSubContainerModal: i,
        openAddStoreItemModal: c,
        setSelectedMedBox: g,
        setModalMode: y,
        setMedBoxModalOpen: h,
        showNotification: p,
        triggerRefresh: b,
        openEditStoreShelfModal: N,
        openEditParentContainerModal: S,
        updateContainerInLocalData: A,
        removeContainerFromLocalData: d,
      } = ot(),
      { t: u } = kt(),
      [m, C] = f.useState(!1),
      [P, D] = f.useState(""),
      [T, z] = f.useState(!1),
      [E, O] = f.useState(e.name),
      [se, fe] = f.useState(!1),
      [M, v] = f.useState(!1);
    f.useEffect(() => {
      O(e.name);
    }, [e.name]);
    const F = (V) => {
        V.stopPropagation(), D(e.name || ""), C(!0);
      },
      w = (V) => {
        V.stopPropagation(), C(!1), D("");
      },
      j = (V) => {
        V.stopPropagation(), v(!0);
      },
      k = (V) => {
        V.stopPropagation(), v(!1);
      },
      _ = async (V) => {
        V.stopPropagation(), fe(!0);
        try {
          let he;
          if (e.type === "parent_container")
            he = await De.deleteParentContainer(e.GUID);
          else if (e.type === "sub_container")
            he = await De.deleteSubContainer(e.GUID);
          else if (
            e.type === "store_shelves" ||
            e.type === "dispensing_shelves"
          )
            he = await De.deleteShelfContainer(e.GUID);
          else {
            p("不支援的容器類型", "error"), fe(!1), v(!1);
            return;
          }
          he.Code === 200
            ? (p("刪除成功", "success"), d(e.GUID), v(!1))
            : p(he.Result || "刪除失敗", "error");
        } catch (he) {
          console.error("刪除容器失敗:", he),
            p("刪除失敗，請稍後再試", "error");
        } finally {
          fe(!1), v(!1);
        }
      },
      J = async (V) => {
        if ((V.stopPropagation(), !P.trim())) {
          p("名稱不能為空", "error");
          return;
        }
        if (P === e.name) {
          C(!1);
          return;
        }
        z(!0);
        try {
          const he = [
            {
              GUID: e.GUID,
              name: P.trim(),
              Master_GUID: e.Master_GUID,
              position: e.gird_position,
              serverName: e.serverName,
              serverType: e.serverType,
            },
          ];
          let X;
          if (e.type === "store_shelves" || e.type === "dispensing_shelves")
            X = await De.updateMedMapShelf(he);
          else if (e.type === "sub_container")
            X = await De.updateSubSection(he);
          else if (e.type === "parent_container")
            X = await De.updateMedMapSection(he);
          else {
            p("不支援的容器類型", "error"), z(!1);
            return;
          }
          X.Code === 200
            ? (p("名稱更新成功", "success"),
              C(!1),
              O(P.trim()),
              A(e.GUID, { name: P.trim() }))
            : p(X.Result || "更新失敗", "error");
        } catch (he) {
          console.error("更新名稱失敗:", he),
            p("更新失敗，請稍後再試", "error");
        } finally {
          z(!1);
        }
      },
      G = (V) => {
        switch (V) {
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
      oe = (V) => {
        switch (V) {
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
      we = (V) => {
        switch (V) {
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
      me = (V) => {
        switch (V) {
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
            return V;
        }
      };
    switch (e.type) {
      case "sub_container":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${G(
            e.type || 0
          )} ${oe(e.type || 0)}`,
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                m
                  ? r.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        r.jsx("input", {
                          type: "text",
                          value: P,
                          onChange: (V) => D(V.target.value),
                          onClick: (V) => V.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: T,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: J,
                          disabled: T,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(eo, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: w,
                          disabled: T,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(Je, {
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
                          children: E,
                        }),
                        r.jsx("button", {
                          onClick: F,
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(jr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !m &&
                  r.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${we(
                      e.type
                    )}`,
                    children: me(e.type),
                  }),
              ],
            }),
            e.type !== "none" &&
              !m &&
              r.jsxs("div", {
                className: "flex items-center space-x-1",
                children: [
                  t &&
                    r.jsx("button", {
                      className:
                        "p-1 hover:bg-red-100 rounded transition-colors",
                      onClick: j,
                      title: "刪除容器",
                      children: r.jsx(Sr, {
                        className: "w-5 h-5 text-red-600",
                      }),
                    }),
                  r.jsx("button", {
                    className:
                      "p-1 hover:bg-black/10 rounded transition-colors",
                    onClick: (V) => {
                      V.stopPropagation(), a(e);
                    },
                    title: u("modal.add"),
                    children: r.jsx(It, {
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
                  onClick: (V) => V.stopPropagation(),
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
                          onClick: k,
                          disabled: se,
                          className:
                            "px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        r.jsx("button", {
                          onClick: _,
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
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${G(
            e.type || 0
          )} ${oe(
            e.type || 0
          )} cursor-pointer hover:bg-black/5 transition-colors`,
          onClick: (V) => {
            m || S(e);
          },
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                m
                  ? r.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        r.jsx("input", {
                          type: "text",
                          value: P,
                          onChange: (V) => D(V.target.value),
                          onClick: (V) => V.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: T,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: (V) => {
                            V.stopPropagation(), J(V);
                          },
                          disabled: T,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(eo, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: (V) => {
                            V.stopPropagation(), w(V);
                          },
                          disabled: T,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(Je, {
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
                          children: E,
                        }),
                        r.jsx("button", {
                          onClick: (V) => {
                            V.stopPropagation(), F(V);
                          },
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(jr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" && !m
                  ? r.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${we(
                        e.type
                      )}`,
                      children: me(e.type),
                    })
                  : null,
              ],
            }),
            e.type !== "none" &&
              !m &&
              r.jsxs("div", {
                className: "flex items-center space-x-1",
                children: [
                  t &&
                    r.jsx("button", {
                      className:
                        "p-1 hover:bg-red-100 rounded transition-colors",
                      onClick: j,
                      title: "刪除容器",
                      children: r.jsx(Sr, {
                        className: "w-5 h-5 text-red-600",
                      }),
                    }),
                  r.jsx("button", {
                    className:
                      "p-1 hover:bg-black/10 rounded transition-colors",
                    onClick: (V) => {
                      V.stopPropagation(), i(e);
                    },
                    title: u("modal.add"),
                    children: r.jsx(It, {
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
                  onClick: (V) => V.stopPropagation(),
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
                          onClick: k,
                          disabled: se,
                          className:
                            "px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        r.jsx("button", {
                          onClick: _,
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
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${G(
            e.type || 0
          )} ${oe(e.type || 0)}`,
          children: [
            r.jsx("div", {
              className: "flex items-center mr-4",
              children:
                e.type != "parent_container"
                  ? r.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${we(
                        e.type
                      )}`,
                      children: me(e.type),
                    })
                  : null,
            }),
            r.jsx("div", {
              className: "flex items-center space-x-1",
              children: r.jsx("button", {
                className: "p-1 hover:bg-black/10 rounded transition-colors",
                onClick: (V) => {
                  V.stopPropagation(), n(e);
                },
                title: u("modal.settings"),
                children: r.jsx(In, { className: "w-6 h-6 text-gray-600" }),
              }),
            }),
          ],
        });
      case "dispensing_shelves":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${G(
            e.type || 0
          )} ${oe(e.type || 0)}`,
          onClick: (V) => {
            m || N(e);
          },
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                m
                  ? r.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        r.jsx("input", {
                          type: "text",
                          value: P,
                          onChange: (V) => D(V.target.value),
                          onClick: (V) => V.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: T,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: J,
                          disabled: T,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(eo, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: w,
                          disabled: T,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(Je, {
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
                          children: E,
                        }),
                        r.jsx("button", {
                          onClick: (V) => {
                            V.stopPropagation(), F(V);
                          },
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(jr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !m &&
                  r.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${we(
                      e.type
                    )}`,
                    children: me(e.type),
                  }),
              ],
            }),
            r.jsxs("div", {
              className: "flex items-center space-x-1",
              children: [
                t &&
                  !m &&
                  r.jsx("button", {
                    className: "p-1 hover:bg-red-100 rounded transition-colors",
                    onClick: j,
                    title: "刪除容器",
                    children: r.jsx(Sr, { className: "w-5 h-5 text-red-600" }),
                  }),
                r.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (V) => {
                    V.stopPropagation();
                    const he = {
                      GUID: `new_medbox_${Date.now()}`,
                      name: "",
                      box_type: "",
                      width: [],
                      width_index: 0,
                      med_info: [],
                      parentShelf: e,
                    };
                    g(he), y("add"), h(!0);
                  },
                  title: u("modal.add"),
                  children: r.jsx(It, { className: "w-6 h-6 text-green-700" }),
                }),
              ],
            }),
            M &&
              r.jsx("div", {
                className:
                  "absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",
                children: r.jsxs("div", {
                  className: "bg-white rounded-lg shadow-xl p-6 max-w-sm mx-4",
                  onClick: (V) => V.stopPropagation(),
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
                          onClick: k,
                          disabled: se,
                          className:
                            "px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        r.jsx("button", {
                          onClick: _,
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
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${G(
            e.type || 0
          )} ${oe(
            e.type || 0
          )} cursor-pointer hover:bg-black/5 transition-colors`,
          onClick: (V) => {
            m || N(e);
          },
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                m
                  ? r.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        r.jsx("input", {
                          type: "text",
                          value: P,
                          onChange: (V) => D(V.target.value),
                          onClick: (V) => V.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: T,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: (V) => {
                            V.stopPropagation(), J(V);
                          },
                          disabled: T,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(eo, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: (V) => {
                            V.stopPropagation(), w(V);
                          },
                          disabled: T,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(Je, {
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
                          children: E,
                        }),
                        r.jsx("button", {
                          onClick: (V) => {
                            V.stopPropagation(), F(V);
                          },
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(jr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !m &&
                  r.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${we(
                      e.type
                    )}`,
                    children: me(e.type),
                  }),
              ],
            }),
            r.jsxs("div", {
              className: "flex items-center space-x-1",
              children: [
                t &&
                  !m &&
                  r.jsx("button", {
                    className: "p-1 hover:bg-red-100 rounded transition-colors",
                    onClick: j,
                    title: "刪除容器",
                    children: r.jsx(Sr, { className: "w-5 h-5 text-red-600" }),
                  }),
                r.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (V) => {
                    V.stopPropagation(), c(e);
                  },
                  title: u("modal.add"),
                  children: r.jsx(It, { className: "w-6 h-6 text-green-700" }),
                }),
              ],
            }),
            M &&
              r.jsx("div", {
                className:
                  "absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",
                children: r.jsxs("div", {
                  className: "bg-white rounded-lg shadow-xl p-6 max-w-sm mx-4",
                  onClick: (V) => V.stopPropagation(),
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
                          onClick: k,
                          disabled: se,
                          className:
                            "px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        r.jsx("button", {
                          onClick: _,
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
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${G(
            e.type || 0
          )} ${oe(e.type || 0)}`,
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
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${we(
                        e.type
                      )}`,
                      children: me(e.type),
                    })
                  : null,
              ],
            }),
            r.jsx("button", {
              className: "p-1 hover:bg-black/10 rounded transition-colors",
              onClick: (V) => {
                V.stopPropagation(), o(e);
              },
              title: u("modal.settings"),
              children: r.jsx(In, { className: "w-6 h-6 text-gray-600" }),
            }),
          ],
        });
      case "grid_draw":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${G(
            e.type || 0
          )} ${oe(e.type || 0)}`,
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
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${we(
                        e.type
                      )}`,
                      children: me(e.type),
                    })
                  : null,
              ],
            }),
            r.jsx("button", {
              className: "p-1 hover:bg-black/10 rounded transition-colors",
              onClick: (V) => {
                V.stopPropagation(), l(e);
              },
              title: u("modal.settings"),
              children: r.jsx(In, { className: "w-6 h-6 text-gray-600" }),
            }),
          ],
        });
      default:
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${G(
            e.type || 0
          )} ${oe(e.type || 0)}`,
          children: [
            r.jsx("div", {
              className: "flex items-center space-x-2 mr-6",
              children:
                e.type != "parent_container"
                  ? r.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${we(
                        e.type
                      )}`,
                      children: me(e.type),
                    })
                  : null,
            }),
            e.type !== "none" &&
              r.jsx("button", {
                className: "p-1 hover:bg-black/10 rounded transition-colors",
                title: u("modal.settings"),
                children: r.jsx(In, { className: "w-6 h-6 text-gray-600" }),
              }),
          ],
        });
    }
  },
  ef = f.forwardRef(({ children: e }, t) => {
    const n = f.useRef(null),
      {
        selectedDepartmentType: s,
        apiDepartmentData: o,
        setApiDepartmentData: l,
        setSidebarOpen: a,
        openAddParentContainerModal: i,
        openEditStoreItemModal: c,
        openQRCodeScannerModal: g,
        openAddBarcodeModal: y,
        showNotification: h,
        isAdminMode: p,
        activeCanvas: b,
        setActiveCanvas: N,
      } = ot(),
      [S, A] = f.useState({ x: 0, y: 0, scale: 1 }),
      [d, u] = f.useState(!1),
      [m, C] = f.useState(!1),
      [P, D] = f.useState({ x: 0, y: 0 }),
      [T, z] = f.useState(!1),
      [E, O] = f.useState(""),
      [se, fe] = f.useState(!1),
      [M, v] = f.useState(null),
      [F, w] = f.useState(!1),
      [j, k] = f.useState({
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
      [_, J] = f.useState(null),
      G = f.useRef({}),
      oe = () =>
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0,
      we = 8,
      me = () => {
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
      V = (x, re, Q, L) => {
        try {
          const ie = me(),
            q = ie.findIndex(
              (ee) => ee.department === x && ee.canvasType === re
            ),
            W = { department: x, canvasType: re, scale: Q, position: L };
          q >= 0 ? (ie[q] = W) : ie.push(W),
            localStorage.setItem("med_map_anchor", JSON.stringify(ie));
        } catch (ie) {
          console.error("Error saving canvas state to localStorage:", ie);
        }
      },
      he = (x, re) =>
        me().find((L) => L.department === x && L.canvasType === re) || null;
    f.useEffect(
      () => (
        N("drug"),
        () => {
          N(null);
        }
      ),
      [N]
    ),
      f.useEffect(() => {
        if (b !== "drug" || !s) return;
        const re = setInterval(async () => {
          try {
            console.log("🔄 Auto-refreshing data for DrugCanvas...");
            const Q = await De.getMedMapByDepartment(s);
            if (Q.Code === 200 && Q.Data) {
              console.log("📡 API 回傳成功，開始轉換資料");
              const L = Et.convertMedMapApiToFakeData(Q.Data);
              if (!Et.validateConvertedData(L)) {
                console.error("❌ 轉換後的資料驗證失敗");
                return;
              }
              console.log(
                "✅ Data refreshed and converted successfully, updating state..."
              ),
                l(L);
            }
          } catch (Q) {
            console.error("❌ Failed to auto-refresh data:", Q);
          }
        }, 2 * 60 * 1e3);
        return () => {
          clearInterval(re);
        };
      }, [b, s, l]),
      f.useEffect(() => {
        if (s) {
          const x = he(s, "drugCanvas");
          if (x) A({ x: x.position.x, y: x.position.y, scale: x.scale });
          else {
            const re = { x: 0, y: 0, scale: 1 };
            A(re), V(s, "drugCanvas", re.scale, re);
          }
        }
      }, [s]),
      f.useEffect(() => {
        if (!s) return;
        const x = setTimeout(() => {
          V(s, "drugCanvas", S.scale, { x: S.x, y: S.y });
        }, 500);
        return () => clearTimeout(x);
      }, [S, s]);
    const X = (x) =>
        [
          "parent_container",
          "sub_container",
          "dispensing_shelves",
          "store_shelves",
          "grid_draw",
          "list_draw",
          "med_box",
        ].includes(x),
      Ce = (x) =>
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
        }[x] || []),
      ye = (x) => {
        const [re, Q] = x.split(",").map(Number);
        return { row: re || 0, col: Q || 0 };
      },
      xe = (x, re) => {
        const Q = (ie, q = null) => {
            if (ie.GUID === x) return { container: ie, parent: q };
            if (ie.contents)
              for (const W of ie.contents) {
                const ee = Q(W, ie);
                if (ee) return ee;
              }
            return null;
          },
          L = it();
        for (const ie of L) {
          const q = Q(ie);
          if (q) return q;
        }
        return null;
      },
      Ue = (x, re) => {
        if (!x.contents) return [];
        const Q = re;
        if (!Q) return x.contents;
        const L = ye(Q.gird_position);
        console.log("📤 移除容器位置:", L);
        for (const ie of x.contents) {
          const q = ye(ie.gird_position);
          if (q.row === L.row && q.col > L.col) {
            const W = q.col - 1;
            (ie.gird_position = `${q.row},${W}`),
              console.log(
                `  ← 容器 ${ie.GUID}: (${q.row},${q.col}) → (${q.row},${W})`
              ),
              (G.current[ie.GUID] = {
                GUID: ie.GUID,
                Master_GUID: x.GUID,
                position: `${q.row},${W}`,
                serverName: x.serverName,
                serverType: x.serverType,
                type: ie.type,
                containerData: ie,
              });
          }
        }
        return console.log("✓ 重新計算完成"), x.contents;
      },
      te = (x, re, Q, L, ie) => {
        if (
          (x.contents || (x.contents = []),
          console.log("📥 插入容器到位置:", `(${Q},${L})`),
          console.log("   插入方向:", ie),
          console.log("   目標父容器:", x.GUID),
          console.log("   插入前容器數量:", x.contents.length),
          x.contents.length === 0)
        )
          (Q = 0), (L = 0), console.log("   父容器為空，放置在 (0,0)");
        else {
          const q = x.contents
            .filter((W) => {
              const ee = ye(W.gird_position || "0,0");
              return ee.row === Q && ee.col >= L;
            })
            .sort((W, ee) => {
              const ce = ye(W.gird_position || "0,0");
              return ye(ee.gird_position || "0,0").col - ce.col;
            });
          console.log(`   同 row ${Q} 需要移動的容器數量:`, q.length);
          for (const W of q) {
            const ee = ye(W.gird_position || "0,0"),
              ce = ee.col + 1;
            (W.gird_position = `${ee.row},${ce}`),
              console.log(
                `  → 容器 ${W.GUID}: (${ee.row},${ee.col}) → (${ee.row},${ce})`
              ),
              (G.current[W.GUID] = {
                GUID: W.GUID,
                Master_GUID: x.GUID,
                position: `${ee.row},${ce}`,
                serverName: x.serverName,
                serverType: x.serverType,
                type: W.type,
                containerData: W,
              });
          }
        }
        (re.gird_position = `${Q},${L}`),
          (re.Master_GUID = x.GUID),
          console.log(`Inserted container ${re.GUID} at position ${Q},${L}`),
          x.contents.push(re),
          (G.current[re.GUID] = {
            GUID: re.GUID,
            Master_GUID: x.GUID,
            position: `${Q},${L}`,
            serverName: x.serverName,
            serverType: x.serverType,
            type: re.type,
            containerData: re,
          }),
          re.type === "dispensing_shelves" &&
            re.contents &&
            re.contents.forEach((q) => {
              q.type === "med_box" &&
                (G.current[q.GUID] = {
                  GUID: q.GUID,
                  Master_GUID: q.Master_GUID,
                  position: q.gird_position,
                  serverName: x.serverName,
                  serverType: x.serverType,
                  type: q.type,
                  containerData: q,
                });
            });
      },
      R = (x, re, Q) => {
        const L = x.getBoundingClientRect(),
          ie = L.left + L.width / 2,
          q = L.top + L.height / 2,
          W = re - ie,
          ee = Q - q;
        return Math.abs(W) > Math.abs(ee)
          ? W > 0
            ? "right"
            : "left"
          : ee > 0
          ? "bottom"
          : "top";
      },
      I = (x, re, Q, L) => {
        if (!m) return;
        if ((L.preventDefault(), L.stopPropagation(), j.floatingElement))
          try {
            j.floatingElement.parentNode &&
              j.floatingElement.parentNode.removeChild(j.floatingElement);
          } catch (pe) {
            console.error("清除舊浮動元素失敗:", pe);
          }
        const ie = oe(),
          q =
            "touches" in L
              ? L.touches[0].clientX
              : ("pointerId" in L, L.clientX),
          W =
            "touches" in L
              ? L.touches[0].clientY
              : ("pointerId" in L, L.clientY),
          ee = Q.getBoundingClientRect(),
          ce = { x: q - ee.left, y: W - ee.top },
          Y = Q.cloneNode(!0);
        (Y.style.position = "fixed"),
          (Y.style.left = `${q - ce.x}px`),
          (Y.style.top = `${W - ce.y}px`),
          (Y.style.width = `${ee.width}px`),
          (Y.style.height = `${ee.height}px`),
          (Y.style.zIndex = "9999"),
          (Y.style.opacity = "0.8"),
          (Y.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)"),
          (Y.style.pointerEvents = "none"),
          document.body.appendChild(Y),
          console.log("開始拖曳 stockItem:", x),
          console.log("來源 shelf:", re),
          k({
            isDragging: !0,
            draggedContainer: null,
            draggedElement: Q,
            floatingElement: Y,
            originalParent: null,
            originalPosition: "",
            originalIndex: -1,
            mouseOffset: ce,
            isMobileDrag: ie,
            originalData: null,
            draggedStockItem: x,
            draggedStockShelf: re,
          });
      },
      K = (x, re, Q) => {
        if (!m || !X(x.type)) return;
        if (x.type === "sub_container" && !p) {
          h("需要開啟後台模式才能移動該容器", "error");
          return;
        }
        if (x.type === "grid_draw" && !p) {
          h("需要開啟後台模式才能移動該容器", "error");
          return;
        }
        if (x.type === "list_draw" && !p) {
          h("需要開啟後台模式才能移動該容器", "error");
          return;
        }
        if (x.type === "parent_container" && !p) {
          h("需要開啟後台模式才能移動該容器", "error");
          return;
        }
        if (x.type === "dispensing_shelves" && !p) {
          h("需要開啟後台模式才能移動該容器", "error");
          return;
        }
        if (x.type === "store_shelves" && !p) {
          h("需要開啟後台模式才能移動該容器", "error");
          return;
        }
        if (
          ((G.current = {}),
          Q.preventDefault(),
          Q.stopPropagation(),
          j.floatingElement)
        )
          try {
            j.floatingElement.parentNode &&
              j.floatingElement.parentNode.removeChild(j.floatingElement);
          } catch (Me) {
            console.error("清除舊浮動元素失敗:", Me);
          }
        const L = oe(),
          ie =
            "touches" in Q
              ? Q.touches[0].clientX
              : ("pointerId" in Q, Q.clientX),
          q =
            "touches" in Q
              ? Q.touches[0].clientY
              : ("pointerId" in Q, Q.clientY),
          W = re.getBoundingClientRect(),
          ee = { x: ie - W.left, y: q - W.top },
          ce = xe(x.GUID);
        if (!ce) return;
        console.log("拖曳目標", x), console.log("拖曳目標", ce);
        const Y = re.cloneNode(!0);
        (Y.style.position = "fixed"),
          (Y.style.left = `${ie - ee.x}px`),
          (Y.style.top = `${q - ee.y}px`),
          (Y.style.width = `${W.width}px`),
          (Y.style.height = `${W.height}px`),
          (Y.style.zIndex = "9999"),
          (Y.style.opacity = "0.8"),
          (Y.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)"),
          (Y.style.pointerEvents = "none"),
          document.body.appendChild(Y);
        const pe = ce.parent.contents.findIndex((Me) => Me.GUID === x.GUID),
          Ne = JSON.parse(JSON.stringify(ce.parent.contents));
        ce.parent.contents.splice(pe, 1), console.log(pe);
        const Pe = ce.parent,
          ke = Ue(ce.parent, x);
        (ce.parent.contents = ke),
          console.log(ce.parent),
          k({
            isDragging: !0,
            draggedContainer: x,
            draggedElement: re,
            floatingElement: Y,
            originalParent: Pe,
            originalPosition: x.gird_position,
            originalIndex: pe,
            mouseOffset: ee,
            isMobileDrag: L,
            originalData: Ne,
          });
      },
      U = (x) => {
        if (!j.isDragging || !j.floatingElement) return;
        const re = "touches" in x ? x.touches[0].clientX : x.clientX,
          Q = "touches" in x ? x.touches[0].clientY : x.clientY;
        if (
          ((j.floatingElement.style.left = `${re - j.mouseOffset.x}px`),
          (j.floatingElement.style.top = `${Q - j.mouseOffset.y}px`),
          j.draggedStockItem)
        ) {
          const q = document.elementFromPoint(re, Q),
            W = q == null ? void 0 : q.closest("[data-stock-guid]");
          if (W) {
            const ce = W.getAttribute("data-stock-guid"),
              Y = (Ne) => {
                for (const Pe of Ne) {
                  if (Pe.type === "store_shelves" && Pe.medMapStock) {
                    const ke = Pe.medMapStock.find((Me) => Me.GUID === ce);
                    if (ke) return { stockItem: ke, shelf: Pe };
                  }
                  if (Pe.contents) {
                    const ke = Y(Pe.contents);
                    if (ke) return ke;
                  }
                }
                return null;
              },
              pe = Y(o);
            if (pe && pe.stockItem.GUID !== j.draggedStockItem.GUID) {
              const Ne = W.getBoundingClientRect(),
                Pe = Ne.left + Ne.width / 2,
                ke = Ne.top + Ne.height / 2,
                Me = Math.abs(re - Pe),
                ze = Math.abs(Q - ke);
              let Te;
              Me > ze
                ? (Te = re < Pe ? "left" : "right")
                : (Te = Q < ke ? "top" : "bottom"),
                J({
                  container: pe.shelf,
                  direction: null,
                  element: W,
                  stockItem: pe.stockItem,
                  stockItemDirection: Te,
                });
              return;
            }
          }
          const ee = q == null ? void 0 : q.closest("[data-container-guid]");
          if (ee) {
            const ce = ee.getAttribute("data-container-guid"),
              Y = xe(ce);
            if (Y && Y.container.type === "store_shelves") {
              J({ container: Y.container, direction: null, element: ee });
              return;
            }
          }
          J(null);
          return;
        }
        const L = document.elementFromPoint(re, Q),
          ie = L == null ? void 0 : L.closest("[data-container-guid]");
        if (ie) {
          const q = ie.getAttribute("data-container-guid"),
            W = xe(q);
          if (W) {
            const ee = Ce(j.draggedContainer.type),
              ce = j.draggedContainer.type,
              Y = W.container.type;
            if (W.container.GUID === j.draggedContainer.GUID) {
              J(null);
              return;
            }
            if (ee.includes(Y)) {
              const pe = R(ie, re, Q);
              if (ce === "med_box" && !["left", "right"].includes(pe)) {
                J(null);
                return;
              }
              W.container.gird_position ||
                console.warn(
                  `⚠️ 目標容器 ${W.container.GUID} 缺少 gird_position`
                ),
                J({ container: W.container, direction: pe, element: ie });
              return;
            }
            if (ce === "parent_container" || ce === "sub_container") {
              let pe = ie.parentElement;
              for (; pe; ) {
                if (pe.hasAttribute("data-container-guid")) {
                  const Ne = pe.getAttribute("data-container-guid"),
                    Pe = xe(Ne);
                  if (Pe && ee.includes(Pe.container.type)) {
                    if (Pe.container.GUID === j.draggedContainer.GUID) {
                      pe = pe.parentElement;
                      continue;
                    }
                    const ke = R(pe, re, Q);
                    console.log(
                      `🔼 向上找到有效目標: ${Pe.container.type} (${Pe.container.name})`
                    ),
                      Pe.container.gird_position ||
                        console.warn(
                          `⚠️ 父容器 ${Pe.container.GUID} 缺少 gird_position`
                        ),
                      J({
                        container: Pe.container,
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
        J(null);
      },
      ne = async (x) => {
        var ie, q;
        if (!j.isDragging) return;
        if (j.floatingElement)
          try {
            j.floatingElement.parentNode &&
              j.floatingElement.parentNode.removeChild(j.floatingElement);
          } catch (W) {
            console.error("清除浮動元素失敗:", W);
          }
        if (j.draggedStockItem && j.draggedStockShelf) {
          if (
            (console.log("StockItem 拖曳結束"),
            console.log("Drop Target:", _),
            _)
          ) {
            const W = [];
            if (_.stockItem && _.stockItemDirection) {
              console.log(
                `拖曳到 stockItem ${_.stockItem.GUID} 的 ${_.stockItemDirection} 邊`
              );
              const ee = _.container,
                ce = j.draggedStockShelf,
                Y = j.draggedStockItem,
                pe = (_.stockItem.location || "0,0").split(","),
                Ne = Number(pe[0] || "0"),
                Pe = (Y.location || "0,0").split(","),
                ke = Number(Pe[0] || "0"),
                Me = Number(Pe[1] || "0");
              if (ee.GUID === ce.GUID) {
                console.log("同一層架內移動");
                const Te = Number(pe[1] || "0");
                if (
                  _.stockItemDirection === "top" ||
                  _.stockItemDirection === "bottom"
                ) {
                  console.log("垂直移動（上下）");
                  let Ae;
                  if (
                    (_.stockItemDirection === "top" ? (Ae = Te) : (Ae = Te + 1),
                    ke === Ne)
                  ) {
                    console.log("同一列內的深度移動"),
                      ce.medMapStock.forEach((Se) => {
                        const Ee = (Se.location || "0,0").split(","),
                          Le = Number(Ee[0] || "0"),
                          _e = Number(Ee[1] || "0");
                        if (Le === ke && Se.GUID !== Y.GUID) {
                          if (_e > Me) {
                            const Ze = _e - 1;
                            Ze >= Ae
                              ? (Se.location = `${Le},${Ze + 1}`)
                              : (Se.location = `${Le},${Ze}`),
                              W.push({ ...Se });
                          } else if (_e < Me) {
                            const Ze = Ae > Me ? Ae - 1 : Ae;
                            _e >= Ze &&
                              ((Se.location = `${Le},${_e + 1}`),
                              W.push({ ...Se }));
                          }
                        }
                      });
                    const Oe = Ae > Me ? Ae - 1 : Ae;
                    (Y.location = `${Ne},${Oe}`), W.push({ ...Y });
                  } else
                    console.log("跨列移動到目標列"),
                      ce.medMapStock.forEach((Oe) => {
                        const Se = (Oe.location || "0,0").split(","),
                          Ee = Number(Se[0] || "0"),
                          Le = Number(Se[1] || "0");
                        Ee === ke &&
                          Oe.GUID !== Y.GUID &&
                          Le > Me &&
                          ((Oe.location = `${Ee},${Le - 1}`),
                          W.push({ ...Oe }));
                      }),
                      ce.medMapStock.forEach((Oe) => {
                        const Se = (Oe.location || "0,0").split(","),
                          Ee = Number(Se[0] || "0"),
                          Le = Number(Se[1] || "0");
                        Ee === Ne &&
                          Oe.GUID !== Y.GUID &&
                          Le >= Ae &&
                          ((Oe.location = `${Ee},${Le + 1}`),
                          W.push({ ...Oe }));
                      }),
                      (Y.location = `${Ne},${Ae}`),
                      W.push({ ...Y });
                } else {
                  console.log("水平移動（左右）");
                  const Ae = ce.medMapStock.findIndex(
                    (Ee) => Ee.GUID === Y.GUID
                  );
                  Ae !== -1 && ce.medMapStock.splice(Ae, 1),
                    ce.medMapStock.forEach((Ee) => {
                      const Le = (Ee.location || "0,0").split(","),
                        _e = Number(Le[0] || "0"),
                        Ze = Number(Le[1] || "0");
                      _e > ke &&
                        ((Ee.location = `${_e - 1},${Ze}`), W.push({ ...Ee }));
                    });
                  let Oe;
                  const Se = Ne > ke ? Ne - 1 : Ne;
                  _.stockItemDirection === "left" ? (Oe = Se) : (Oe = Se + 1),
                    ce.medMapStock.forEach((Ee) => {
                      const Le = (Ee.location || "0,0").split(","),
                        _e = Number(Le[0] || "0"),
                        Ze = Number(Le[1] || "0");
                      _e >= Oe &&
                        ((Ee.location = `${_e + 1},${Ze}`), W.push({ ...Ee }));
                    }),
                    (Y.location = `${Oe},${Me}`),
                    ce.medMapStock.push(Y),
                    ce.medMapStock.sort((Ee, Le) => {
                      const _e = (Ee.location || "0,0").split(","),
                        Ze = (Le.location || "0,0").split(",");
                      return Number(_e[0] || "0") - Number(Ze[0] || "0");
                    }),
                    W.push({ ...Y });
                }
              } else {
                console.log("不同層架間移動");
                const Te = Number(pe[1] || "0"),
                  Ae = ce.medMapStock.findIndex((Oe) => Oe.GUID === Y.GUID);
                if (
                  (Ae !== -1 && ce.medMapStock.splice(Ae, 1),
                  _.stockItemDirection === "top" ||
                    _.stockItemDirection === "bottom")
                ) {
                  console.log("跨層架垂直移動到目標列"),
                    ce.medMapStock.forEach((Se) => {
                      const Ee = (Se.location || "0,0").split(","),
                        Le = Number(Ee[0] || "0"),
                        _e = Number(Ee[1] || "0");
                      Le === ke &&
                        _e > Me &&
                        ((Se.location = `${Le},${_e - 1}`), W.push({ ...Se }));
                    });
                  let Oe;
                  _.stockItemDirection === "top" ? (Oe = Te) : (Oe = Te + 1),
                    ee.medMapStock.forEach((Se) => {
                      const Ee = (Se.location || "0,0").split(","),
                        Le = Number(Ee[0] || "0"),
                        _e = Number(Ee[1] || "0");
                      Le === Ne &&
                        _e >= Oe &&
                        ((Se.location = `${Le},${_e + 1}`), W.push({ ...Se }));
                    }),
                    (Y.location = `${Ne},${Oe}`),
                    (Y.shelf_guid = ee.GUID),
                    ee.medMapStock.push(Y),
                    ee.medMapStock.sort((Se, Ee) => {
                      const Le = (Se.location || "0,0").split(","),
                        _e = (Ee.location || "0,0").split(",");
                      return Number(Le[0] || "0") - Number(_e[0] || "0");
                    }),
                    W.push({ ...Y });
                } else {
                  console.log("跨層架水平移動"),
                    ce.medMapStock.forEach((Se) => {
                      const Ee = (Se.location || "0,0").split(","),
                        Le = Number(Ee[0] || "0"),
                        _e = Number(Ee[1] || "0");
                      Le > ke &&
                        ((Se.location = `${Le - 1},${_e}`), W.push({ ...Se }));
                    });
                  let Oe;
                  _.stockItemDirection === "left" ? (Oe = Ne) : (Oe = Ne + 1),
                    ee.medMapStock.forEach((Se) => {
                      const Ee = (Se.location || "0,0").split(","),
                        Le = Number(Ee[0] || "0"),
                        _e = Number(Ee[1] || "0");
                      Le >= Oe &&
                        ((Se.location = `${Le + 1},${_e}`), W.push({ ...Se }));
                    }),
                    (Y.location = `${Oe},${Me}`),
                    (Y.shelf_guid = ee.GUID),
                    ee.medMapStock.push(Y),
                    ee.medMapStock.sort((Se, Ee) => {
                      const Le = (Se.location || "0,0").split(","),
                        _e = (Ee.location || "0,0").split(",");
                      return Number(Le[0] || "0") - Number(_e[0] || "0");
                    }),
                    W.push({ ...Y });
                }
              }
            } else if (_.container.type === "store_shelves") {
              console.log("拖曳到 store_shelves 容器");
              const ee = _.container,
                ce = j.draggedStockShelf,
                Y = j.draggedStockItem,
                pe = (Y.location || "0,0").split(","),
                Ne = Number(pe[0] || "0"),
                Pe = ce.medMapStock.findIndex((ke) => ke.GUID === Y.GUID);
              Pe !== -1 &&
                (ce.medMapStock.splice(Pe, 1),
                ce.medMapStock.forEach((ke) => {
                  const Me = (ke.location || "0,0").split(","),
                    ze = Number(Me[0] || "0"),
                    Te = Number(Me[1] || "0");
                  ze > Ne &&
                    ((ke.location = `${ze - 1},${Te}`), W.push({ ...ke }));
                })),
                (Y.location = "0,0"),
                (Y.shelf_guid = ee.GUID),
                ee.medMapStock || (ee.medMapStock = []),
                ee.medMapStock.forEach((ke) => {
                  const Me = (ke.location || "0,0").split(","),
                    ze = Number(Me[0] || "0"),
                    Te = Number(Me[1] || "0");
                  (ke.location = `${ze + 1},${Te}`), W.push({ ...ke });
                }),
                ee.medMapStock.push(Y),
                ee.medMapStock.sort((ke, Me) => {
                  const ze = (ke.location || "0,0").split(","),
                    Te = (Me.location || "0,0").split(",");
                  return Number(ze[0] || "0") - Number(Te[0] || "0");
                }),
                W.push({ ...Y });
            }
            if (W.length > 0) {
              console.log("準備更新的 stockItems:", W);
              try {
                const ee = await De.updateStock(W);
                if (ee.Code === 200) {
                  h("藥品位置更新成功", "success");
                  try {
                    const ce = await De.getMedMapByDepartment(s);
                    if (ce.Code === 200 && ce.Data) {
                      const Y = Et.convertMedMapApiToFakeData(ce.Data);
                      Et.validateConvertedData(Y) && l(Y);
                    }
                  } catch (ce) {
                    console.error("刷新數據失敗:", ce);
                  }
                } else h(ee.Result || "更新失敗", "error");
              } catch (ee) {
                console.error("更新 stockItem 失敗:", ee),
                  h("更新失敗，請稍後再試", "error");
              }
            }
          }
          k({
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
            J(null);
          return;
        }
        let re = null,
          Q = null,
          L = null;
        if (
          (console.log("Drop Target:", _),
          console.log("Is Mobile Drag:", j.isMobileDrag),
          j.isMobileDrag)
        )
          if (_) {
            (re = _.direction), (L = _.container);
            const W = _.container.gird_position;
            console.log("目標容器原始位置:", W);
            const ee = xe(_.container.Master_GUID || _.container.GUID);
            console.log("🔍 移除前查找目標父容器:"),
              console.log(
                "  - 查找 GUID:",
                _.container.Master_GUID || _.container.GUID
              ),
              console.log(
                "  - 找到的父容器:",
                (ie = ee == null ? void 0 : ee.container) == null
                  ? void 0
                  : ie.GUID
              ),
              console.log(
                "  - 父容器類型:",
                (q = ee == null ? void 0 : ee.container) == null
                  ? void 0
                  : q.type
              );
            const ce = xe(j.draggedContainer.GUID);
            let Y = null;
            if (ce) {
              Y = ce.parent.GUID;
              const Ae = ce.parent.contents.findIndex(
                (Se) => Se.GUID === j.draggedContainer.GUID
              );
              ce.parent.contents.splice(Ae, 1);
              const Oe = Ue(ce.parent, j.draggedContainer);
              ce.parent.contents = Oe;
            }
            let pe = ee;
            if (!pe) {
              console.warn(
                "⚠️ 透過 Master_GUID 找不到父容器，嘗試透過目標容器 GUID 查找"
              );
              const Ae = xe(_.container.GUID);
              Ae && Ae.parent
                ? ((pe = { container: Ae.parent, parent: null }),
                  console.log(
                    "✓ 透過目標容器 GUID 找到父容器:",
                    Ae.parent.GUID
                  ))
                : console.error("❌ 完全找不到目標父容器");
            }
            let Ne = _.container;
            if (Y && pe && pe.container.GUID === Y) {
              const Ae = pe.container.contents.find(
                (Oe) => Oe.GUID === _.container.GUID
              );
              Ae
                ? ((Ne = Ae),
                  console.log(
                    "同一父容器內移動，更新後的目標容器位置:",
                    Ae.gird_position
                  ))
                : (console.log("找不到更新後的目標容器，使用原始位置:", W),
                  (Ne = { ..._.container, gird_position: W }));
            }
            const Pe = Ne.gird_position || W;
            console.log("最終使用的目標位置:", Pe),
              (!Pe || Pe === "0,0") &&
                (console.error("❌ 警告：目標位置無效或為 0,0"),
                console.error(
                  "  - targetContainer.gird_position:",
                  Ne.gird_position
                ),
                console.error("  - originalTargetPosition:", W),
                console.error("  - dropTarget.container:", _.container));
            const ke = ye(Pe || "0,0");
            let Me = ke.row,
              ze = ke.col;
            switch (
              (console.log("計算後的新位置 (插入前):", { row: Me, col: ze }),
              _.direction)
            ) {
              case "top":
                Me = Math.max(0, ke.row);
                break;
              case "bottom":
                Me = ke.row + 1;
                break;
              case "left":
                ze = Math.max(0, ke.col);
                break;
              case "right":
                ze = ke.col + 1;
                break;
            }
            let Te = (pe == null ? void 0 : pe.container) || _.container;
            if (
              (console.log("📦 目標父容器決定:"),
              console.log("  - targetParentData 存在:", !!pe),
              console.log(
                "  - 使用的父容器 GUID:",
                Te == null ? void 0 : Te.GUID
              ),
              console.log(
                "  - 使用的父容器類型:",
                Te == null ? void 0 : Te.type
              ),
              console.log("  - dropTarget.container.class:", _.container.class),
              console.log(
                "  - dragState.draggedContainer.class:",
                j.draggedContainer.class
              ),
              j.draggedContainer.class != _.container.class &&
                ((Te = _.container),
                console.log(
                  "  → class 不同，改用 dropTarget.container 作為父容器"
                )),
              j.draggedContainer.type === "med_box" &&
                _.container.type !== "med_box")
            )
              if (
                (console.log("藥盒移動目標到層架上"),
                (Te = _.container),
                Te.contents.length > 0)
              ) {
                let Ae = 0,
                  Oe = 0;
                Te.contents.forEach((Se) => {
                  const Ee = ye(Se.gird_position || "0,0").row,
                    Le = ye(Se.gird_position || "0,0").col;
                  Ae > Ee && (Ae = Ee), Oe > Le && (Oe = Le);
                });
                for (let Se = 0; Se <= Oe; Se++)
                  for (let Ee = 0; Ee <= Ae; Ee++) {
                    const Le = `${Se},${Ee}`;
                    Te.contents.filter((Ze) => Ze.grid_position === Le)
                      .length === 0 && ((Me = Se), (ze = Ee));
                  }
              } else (Me = 0), (ze = 0);
            (Q = Te), te(Te, j.draggedContainer, Me, ze, _.direction);
          } else
            console.log("無效拖放，復原所有容器位置"),
              j.originalData &&
                j.originalParent &&
                (j.originalParent.contents = JSON.parse(
                  JSON.stringify(j.originalData)
                )),
              (re = null),
              (L = null),
              (Q = j.originalParent);
        else if (_) {
          (re = _.direction), (L = _.container);
          const W = xe(j.draggedContainer.GUID);
          let ee = null;
          if (
            (console.log("=== 開始處理容器拖曳 ==="),
            console.log("拖曳容器 GUID:", j.draggedContainer.GUID),
            console.log("拖曳容器原始位置:", j.draggedContainer.gird_position),
            W)
          ) {
            (ee = W.parent.GUID),
              console.log("原始父容器 GUID:", ee),
              console.log(
                "移除前父容器的 contents 數量:",
                W.parent.contents.length
              );
            const Me = W.parent.contents.findIndex(
              (Te) => Te.GUID === j.draggedContainer.GUID
            );
            W.parent.contents.splice(Me, 1),
              console.log(
                "移除後父容器的 contents 數量:",
                W.parent.contents.length
              );
            const ze = Ue(W.parent, j.draggedContainer);
            (W.parent.contents = ze),
              console.log("重新計算後的容器列表:"),
              W.parent.contents.forEach((Te) => {
                console.log(`  - ${Te.GUID}: ${Te.gird_position}`);
              });
          }
          const ce = xe(_.container.Master_GUID || _.container.GUID);
          let Y = _.container;
          if (
            (console.log("目標容器原始位置:", _.container.gird_position),
            ee && ce && ce.container.GUID === ee)
          ) {
            console.log("✓ 在同一個父容器內移動");
            const Me = ce.container.contents.find(
              (ze) => ze.GUID === _.container.GUID
            );
            Me &&
              ((Y = Me),
              console.log(
                "同一父容器內移動，更新後的目標容器位置:",
                Me.gird_position
              ));
          } else console.log("✗ 跨父容器移動或父容器不同");
          const pe = ye(Y.gird_position || "0,0");
          let Ne = pe.row,
            Pe = pe.col;
          switch (_.direction) {
            case "top":
              Ne = Math.max(0, pe.row);
              break;
            case "bottom":
              Ne = pe.row + 1;
              break;
            case "left":
              Pe = Math.max(0, pe.col);
              break;
            case "right":
              Pe = pe.col + 1;
              break;
          }
          console.log("------目標容器", _),
            console.log("------拖曳容器", j.draggedContainer);
          let ke = (ce == null ? void 0 : ce.container) || _.container;
          if (
            (console.log(j.draggedContainer.class),
            console.log(_.container.class),
            console.log(j.draggedContainer.class != _.container.class),
            j.draggedContainer.class != _.container.class &&
              ((ke = _.container),
              console.log("------這邊顯示放到上層容器現象"),
              console.log("------目標容器", _),
              console.log("------拖曳容器", j.draggedContainer),
              console.log("------目標父容器", ke)),
            j.draggedContainer.type === "med_box" &&
              _.container.type !== "med_box")
          )
            if (
              (console.log("藥盒移動目標到層架上"),
              (ke = _.container),
              ke.contents.length > 0)
            ) {
              let Me = 0,
                ze = 0;
              ke.contents.forEach((Te) => {
                const Ae = ye(Te.gird_position || "0,0").row,
                  Oe = ye(Te.gird_position || "0,0").col;
                Me > Ae && (Me = Ae), ze > Oe && (ze = Oe);
              });
              for (let Te = 0; Te <= ze; Te++)
                for (let Ae = 0; Ae <= Me; Ae++) {
                  const Oe = `${Te},${Ae}`;
                  ke.contents.filter((Ee) => Ee.grid_position === Oe).length ===
                    0 && ((Ne = Te), (Pe = Ae));
                }
            } else (Ne = 0), (Pe = 0);
          (Q = ke), te(ke, j.draggedContainer, Ne, Pe, _.direction);
        } else
          console.log("無效拖放，復原所有容器位置"),
            j.originalData &&
              j.originalParent &&
              (j.originalParent.contents = JSON.parse(
                JSON.stringify(j.originalData)
              )),
            (re = null),
            (L = null),
            (Q = j.originalParent);
        k({
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
          J(null),
          console.log("Drop Direction:", re),
          console.log("Parent Object:", Q),
          console.log("Target Object:", L),
          console.log("API更新資料：", G),
          await kh(G);
      };
    f.useEffect(() => {
      if (j.isDragging)
        if (oe()) {
          const re = (ie) => {
              ie.preventDefault(), U(ie);
            },
            Q = (ie) => ne(),
            L = (ie) => ne();
          return (
            document.addEventListener("pointermove", re, { passive: !1 }),
            document.addEventListener("pointerup", Q),
            document.addEventListener("pointercancel", L),
            () => {
              document.removeEventListener("pointermove", re),
                document.removeEventListener("pointerup", Q),
                document.removeEventListener("pointercancel", L);
            }
          );
        } else {
          const re = (q) => U(q),
            Q = (q) => ne(),
            L = (q) => {
              q.preventDefault(), U(q);
            },
            ie = (q) => ne();
          return (
            document.addEventListener("mousemove", re),
            document.addEventListener("mouseup", Q),
            document.addEventListener("touchmove", L, { passive: !1 }),
            document.addEventListener("touchend", ie),
            () => {
              document.removeEventListener("mousemove", re),
                document.removeEventListener("mouseup", Q),
                document.removeEventListener("touchmove", L),
                document.removeEventListener("touchend", ie);
            }
          );
        }
    }, [j.isDragging, _]),
      f.useEffect(
        () => () => {
          if (j.floatingElement)
            try {
              j.floatingElement.parentNode &&
                j.floatingElement.parentNode.removeChild(j.floatingElement);
            } catch (x) {
              console.error("組件卸載時清除浮動元素失敗:", x);
            }
        },
        [j.floatingElement]
      ),
      f.useEffect(() => {
        const x = (Q) => {
            Q.code === "Space" && !Q.repeat && (Q.preventDefault(), z(!0));
          },
          re = (Q) => {
            Q.code === "Space" && (Q.preventDefault(), z(!1), u(!1));
          };
        return (
          window.addEventListener("keydown", x),
          window.addEventListener("keyup", re),
          () => {
            window.removeEventListener("keydown", x),
              window.removeEventListener("keyup", re);
          }
        );
      }, []);
    const ae = f.useCallback(
        (x) => {
          var Q;
          if (m) return;
          if (x.ctrlKey || x.metaKey) {
            x.preventDefault(), x.stopPropagation();
            const L =
              (Q = n.current) == null ? void 0 : Q.getBoundingClientRect();
            if (!L) return;
            const ie = x.clientX - L.left,
              q = x.clientY - L.top,
              W = x.deltaY > 0 ? 0.9 : 1.1,
              ee = Math.max(0.1, Math.min(5, S.scale * W)),
              ce = ee / S.scale,
              Y = ie - (ie - S.x) * ce,
              pe = q - (q - S.y) * ce;
            A({ x: Y, y: pe, scale: ee });
          }
        },
        [S, m]
      ),
      $ = f.useCallback(
        (x) => {
          m ||
            !T ||
            (u(!0),
            D({ x: x.clientX, y: x.clientY }),
            v({ x: x.clientX, y: x.clientY }),
            w(!1),
            x.preventDefault());
        },
        [m, T]
      ),
      H = f.useCallback(
        (x) => {
          if (!d || m) return;
          const re = x.clientX - P.x,
            Q = x.clientY - P.y;
          if (M) {
            const L = Math.abs(x.clientX - M.x),
              ie = Math.abs(x.clientY - M.y);
            (L > 5 || ie > 5) && w(!0);
          }
          A((L) => ({ ...L, x: L.x + re, y: L.y + Q })),
            D({ x: x.clientX, y: x.clientY });
        },
        [d, P, m, M]
      ),
      B = f.useCallback(() => {
        u(!1), v(null);
      }, []),
      [Z, le] = f.useState(null),
      [ge, ue] = f.useState({ x: 0, y: 0 }),
      ve = (x) => {
        if (x.length < 2) return null;
        const re = x[0],
          Q = x[1];
        return Math.sqrt(
          Math.pow(Q.clientX - re.clientX, 2) +
            Math.pow(Q.clientY - re.clientY, 2)
        );
      },
      je = (x) => {
        if (x.length === 1) return { x: x[0].clientX, y: x[0].clientY };
        const re = x[0],
          Q = x[1];
        return {
          x: (re.clientX + Q.clientX) / 2,
          y: (re.clientY + Q.clientY) / 2,
        };
      },
      Re = f.useCallback(
        (x) => {
          if (!m) {
            if (x.touches.length === 2) {
              const re = ve(x.touches),
                Q = je(x.touches);
              le(re), ue(Q);
            } else if (x.touches.length === 1) {
              const re = x.touches[0];
              D({ x: re.clientX, y: re.clientY }), u(!0);
            }
          }
        },
        [m]
      ),
      rt = f.useCallback(
        (x) => {
          var re;
          if (!m) {
            if ((x.preventDefault(), x.touches.length === 2 && Z !== null)) {
              const Q = ve(x.touches),
                L = je(x.touches);
              if (Q && Z) {
                const ie =
                  (re = n.current) == null
                    ? void 0
                    : re.getBoundingClientRect();
                if (!ie) return;
                const q = Q / Z,
                  W = Math.max(0.1, Math.min(5, S.scale * q)),
                  ee = L.x - ie.left,
                  ce = L.y - ie.top,
                  Y = W / S.scale,
                  pe = ee - (ee - S.x) * Y,
                  Ne = ce - (ce - S.y) * Y;
                A({ x: pe, y: Ne, scale: W }), le(Q), ue(L);
              }
            } else if (x.touches.length === 1 && d) {
              const Q = x.touches[0],
                L = Q.clientX - P.x,
                ie = Q.clientY - P.y;
              A((q) => ({ ...q, x: q.x + L, y: q.y + ie })),
                D({ x: Q.clientX, y: Q.clientY });
            }
          }
        },
        [S, Z, d, P, m]
      ),
      $e = f.useCallback(() => {
        le(null), u(!1);
      }, []);
    f.useEffect(() => {
      const x = n.current;
      if (x)
        return (
          x.addEventListener("wheel", ae, { passive: !1 }),
          () => x.removeEventListener("wheel", ae)
        );
    }, [ae]);
    const it = () => (!o || o.length === 0 ? [] : o),
      Ve = (x) => {
        if (!x || x.length === 0)
          return { sortedContents: [], maxRow: 0, maxCol: 0 };
        const re = x.map((q) => ({
            ...q,
            gridPos: ye(q.gird_position || "0,0"),
          })),
          Q = Math.max(...re.map((q) => q.gridPos.row), 0),
          L = Math.max(...re.map((q) => q.gridPos.col), 0);
        return {
          sortedContents: re.sort((q, W) =>
            q.gridPos.row !== W.gridPos.row
              ? q.gridPos.row - W.gridPos.row
              : q.gridPos.col - W.gridPos.col
          ),
          maxRow: Q,
          maxCol: L,
        };
      },
      At = it(),
      Ft = Math.max(...At.map((x) => ye(x.gird_position || "0,0").row), 0),
      Vn = Math.max(...At.map((x) => ye(x.gird_position || "0,0").col), 0),
      Qt = (x) => {
        const re = (L) => {
            if (
              L.width &&
              Array.isArray(L.width) &&
              typeof L.width_index == "number" &&
              L.width_index >= 0 &&
              L.width_index < L.width.length
            ) {
              const q = parseFloat(L.width[L.width_index]);
              if (!isNaN(q)) {
                const W = q * 20;
                return Math.max(200, W);
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
        switch (x.type) {
          case "med_box":
            return (
              re(x),
              r.jsxs(
                "div",
                {
                  "data-container-guid": x.GUID,
                  className: `${
                    x.type !== "sub_container"
                      ? "border-2 rounded-lg shadow-sm"
                      : ""
                  } ${Q(
                    x.type || 0
                  )} min-h-[80px] flex flex-col flex-shrink-0 h-full overflow-hidden`,
                  children: [
                    r.jsx("div", {
                      onMouseDown:
                        m && X(x.type) && !oe()
                          ? (L) =>
                              K(
                                x,
                                L.currentTarget.closest(
                                  "[data-container-guid]"
                                ),
                                L
                              )
                          : void 0,
                      onPointerDown:
                        m && X(x.type) && oe()
                          ? (L) =>
                              K(
                                x,
                                L.currentTarget.closest(
                                  "[data-container-guid]"
                                ),
                                L
                              )
                          : void 0,
                      className: m && X(x.type) ? "cursor-move" : "",
                      children: r.jsx(Zr, { content: x, isAdminMode: p }),
                    }),
                    r.jsx("div", { className: "flex-1 p-1", children: qn(x) }),
                  ],
                },
                x.GUID
              )
            );
          case "sub_container":
          case "parent_container":
            return r.jsxs(
              "div",
              {
                "data-container-guid": x.GUID,
                className: `${Q(
                  x.type || 0
                )} border-2 overflow-hidden rounded-lg shadow-sm min-h-[80px] flex flex-col h-full`,
                children: [
                  r.jsx("div", {
                    onMouseDown:
                      m && X(x.type) && !oe()
                        ? (L) =>
                            K(
                              x,
                              L.currentTarget.closest("[data-container-guid]"),
                              L
                            )
                        : void 0,
                    onPointerDown:
                      m && X(x.type) && oe()
                        ? (L) =>
                            K(
                              x,
                              L.currentTarget.closest("[data-container-guid]"),
                              L
                            )
                        : void 0,
                    className: m && X(x.type) ? "cursor-move" : "",
                    children: r.jsx(Zr, { content: x, isAdminMode: p }),
                  }),
                  r.jsx("div", { className: "flex-1  p-1", children: qn(x) }),
                ],
              },
              x.GUID
            );
          case "grid_draw":
            return r.jsxs(
              "div",
              {
                "data-container-guid": x.GUID,
                className: `${
                  x.type !== "sub_container"
                    ? "border-2 rounded-lg shadow-sm"
                    : ""
                } ${Q(
                  x.type || 0
                )} min-h-[80px] flex flex-col h-full overflow-hidden`,
                children: [
                  r.jsx("div", {
                    onMouseDown:
                      m && X(x.type) && !oe()
                        ? (L) =>
                            K(
                              x,
                              L.currentTarget.closest("[data-container-guid]"),
                              L
                            )
                        : void 0,
                    onPointerDown:
                      m && X(x.type) && oe()
                        ? (L) =>
                            K(
                              x,
                              L.currentTarget.closest("[data-container-guid]"),
                              L
                            )
                        : void 0,
                    className: m && X(x.type) ? "cursor-move" : "",
                    children: r.jsx(Zr, { content: x, isAdminMode: p }),
                  }),
                  r.jsx("div", {
                    className: "flex-1 p-1 flex items-center",
                    children: qn(x),
                  }),
                ],
              },
              x.GUID
            );
          case "dispensing_shelves":
          case "store_shelves":
            return r.jsxs(
              "div",
              {
                "data-container-guid": x.GUID,
                className: `${
                  x.type !== "sub_container"
                    ? "border-2 rounded-lg shadow-sm"
                    : ""
                } ${Q(
                  x.type || 0
                )} min-h-[80px] flex flex-col h-full overflow-hidden`,
                children: [
                  r.jsx("div", {
                    onMouseDown:
                      m && X(x.type) && !oe()
                        ? (L) =>
                            K(
                              x,
                              L.currentTarget.closest("[data-container-guid]"),
                              L
                            )
                        : void 0,
                    onPointerDown:
                      m && X(x.type) && oe()
                        ? (L) =>
                            K(
                              x,
                              L.currentTarget.closest("[data-container-guid]"),
                              L
                            )
                        : void 0,
                    className: m && X(x.type) ? "cursor-move" : "",
                    children: r.jsx(Zr, { content: x, isAdminMode: p }),
                  }),
                  r.jsx("div", {
                    className: "flex-1 p-1 h-full overflow-hidden",
                    children: qn(x),
                  }),
                ],
              },
              x.GUID
            );
          default:
            return r.jsxs(
              "div",
              {
                "data-container-guid": x.GUID,
                className: `${
                  x.type !== "sub_container"
                    ? "border-2 rounded-lg shadow-sm"
                    : ""
                } ${Q(
                  x.type || 0
                )} min-h-[80px] flex flex-col h-full overflow-hidden ${
                  x.type == "none" ? "opacity-0" : ""
                }`,
                children: [
                  r.jsx("div", {
                    onMouseDown:
                      m && X(x.type) && !oe()
                        ? (L) =>
                            K(
                              x,
                              L.currentTarget.closest("[data-container-guid]"),
                              L
                            )
                        : void 0,
                    onPointerDown:
                      m && X(x.type) && oe()
                        ? (L) =>
                            K(
                              x,
                              L.currentTarget.closest("[data-container-guid]"),
                              L
                            )
                        : void 0,
                    className: m && X(x.type) ? "cursor-move" : "",
                    children: r.jsx(Zr, { content: x, isAdminMode: p }),
                  }),
                  r.jsx("div", { className: "flex-1 p-1", children: qn(x) }),
                ],
              },
              x.GUID
            );
        }
      },
      qn = (x) => {
        const re = (Q, L, ie) => {
          const q = Array(L + 1)
              .fill(null)
              .map(() => Array(ie + 1).fill(!1)),
            W = {};
          return (
            Q.forEach((ee) => {
              const ce = ye(ee.gird_position || "0,0");
              (W[`${ce.row},${ce.col}`] = ee), (q[ce.row][ce.col] = !0);
            }),
            r.jsx("table", {
              className: "w-full h-full",
              style: { borderCollapse: "none", borderSpacing: "0px" },
              children: r.jsx("tbody", {
                children: Array.from({ length: L + 1 }, (ee, ce) =>
                  r.jsx(
                    "tr",
                    {
                      className: "h-full",
                      style: { height: `${100 / (L + 1)}%`, minHeight: "80px" },
                      children: Array.from({ length: ie + 1 }, (Y, pe) => {
                        const Ne = `${ce},${pe}`,
                          Pe = W[Ne];
                        return Pe
                          ? r.jsxs(
                              "td",
                              {
                                className: "align-top bg-transparent",
                                style: {
                                  width: `${100 / (ie + 1)}%`,
                                  height: `${100 / (L + 1)}%`,
                                  minHeight: "80px",
                                  border: "none",
                                  position: "relative",
                                },
                                children: [
                                  Qt(Pe),
                                  (_ == null ? void 0 : _.container.GUID) ===
                                    Pe.GUID &&
                                    r.jsx("div", {
                                      className:
                                        "absolute inset-0 pointer-events-none",
                                      children: r.jsx("div", {
                                        className: `absolute bg-blue-400 opacity-50 ${
                                          _.direction === "top"
                                            ? "top-0 left-0 right-0 h-1"
                                            : _.direction === "bottom"
                                            ? "bottom-0 left-0 right-0 h-1"
                                            : _.direction === "left"
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
                                  width: `${100 / (ie + 1)}%`,
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
                    ce
                  )
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
                sortedContents: Y,
                maxRow: pe,
                maxCol: Ne,
              } = Ve(x.contents);
              return re(Y, pe, Ne);
            } else
              return r.jsx("table", {
                className: "bg-transparent w-full h-full",
                style: { borderCollapse: "separate", borderSpacing: "1px" },
                children: r.jsx("tbody", { children: r.jsx("tr", {}) }),
              });
          case "dispensing_shelves":
            if (x.contents && x.contents.length > 0) {
              const {
                sortedContents: Y,
                maxRow: pe,
                maxCol: Ne,
              } = Ve(x.contents);
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
            if (x.medMapStock && x.medMapStock.length > 0) {
              const Y = x.medMapStock,
                pe = {};
              Y.forEach((Me) => {
                const ze = (Me.location || "0,0").split(","),
                  Te = Number(ze[0] || "0"),
                  Ae = Number(ze[1] || "0");
                pe[Te] || (pe[Te] = []),
                  pe[Te].push({ ...Me, _position: Te, _depth: Ae });
              });
              const Ne = Object.keys(pe)
                  .map(Number)
                  .sort((Me, ze) => Me - ze),
                Pe = Ne.length;
              Math.max(...Ne.map((Me) => pe[Me].length));
              const ke = x.width ? x.width * 5 : 500;
              return r.jsx("div", {
                className: "flex h-full",
                style: { minWidth: `${ke}px` },
                children: Ne.map((Me) => {
                  const ze = pe[Me].sort((Se, Ee) => Ee._depth - Se._depth),
                    Te = Pe > 0 ? 100 / Pe : 100,
                    Ae = ze.length,
                    Oe = Ae > 0 ? 100 / Ae : 100;
                  return r.jsx(
                    "div",
                    {
                      className: "flex flex-shrink-0 flex-col m-1",
                      style: { width: `calc(${Te}% - 8px)`, minWidth: "160px" },
                      children: ze.map((Se, Ee) => {
                        const Le = Ee === Ae - 1;
                        return r.jsx(
                          "div",
                          {
                            className: `relative ${Le ? "" : "mb-1"}`,
                            style: {
                              height: `calc(${Oe}% - ${
                                Le ? "0px" : "0.25rem"
                              })`,
                            },
                            "data-stock-guid": Se.GUID,
                            children: r.jsxs("div", {
                              className: `border-2 bg-yellow-50 border-yellow-400 rounded-lg p-2 h-full flex flex-col justify-center items-center cursor-pointer bg-white hover:bg-yellow-100 hover:border-yellow-500 hover:shadow-md transition-all ${
                                m ? "cursor-move" : ""
                              }`,
                              onMouseDown: (_e) => {
                                m
                                  ? I(
                                      Se,
                                      x,
                                      _e.currentTarget.closest(
                                        "[data-stock-guid]"
                                      ),
                                      _e
                                    )
                                  : !d &&
                                    !T &&
                                    (v({ x: _e.clientX, y: _e.clientY }),
                                    w(!1));
                              },
                              onMouseUp: (_e) => {
                                if (!d && !T && !F && M && !m) {
                                  const Ze = Math.abs(_e.clientX - M.x),
                                    Hr = Math.abs(_e.clientY - M.y);
                                  Ze <= 5 &&
                                    Hr <= 5 &&
                                    (_e.stopPropagation(), c(x, Se));
                                }
                                m || (v(null), w(!1));
                              },
                              onTouchStart: (_e) => {
                                if (m && oe())
                                  I(
                                    Se,
                                    x,
                                    _e.currentTarget.closest(
                                      "[data-stock-guid]"
                                    ),
                                    _e
                                  );
                                else if (!d && !m) {
                                  const Ze = _e.touches[0];
                                  v({ x: Ze.clientX, y: Ze.clientY }), w(!1);
                                }
                              },
                              onTouchEnd: (_e) => {
                                if (!d && !F && M && !m) {
                                  const Ze = _e.changedTouches[0],
                                    Hr = Math.abs(Ze.clientX - M.x),
                                    rl = Math.abs(Ze.clientY - M.y);
                                  Hr <= 5 &&
                                    rl <= 5 &&
                                    (_e.stopPropagation(), c(x, Se));
                                }
                                m || (v(null), w(!1));
                              },
                              onPointerDown: (_e) => {
                                m &&
                                  oe() &&
                                  I(
                                    Se,
                                    x,
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
                                  children: Se.name || Se.material_no,
                                }),
                                r.jsxs("div", {
                                  className:
                                    "w-full flex justify-between items-end",
                                  children: [
                                    r.jsx("div", {
                                      className: "",
                                      children: r.jsxs("div", {
                                        className: "mt-1",
                                        children: ["[ ", +Se.qty || 0, " ]"],
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
                                        onClick: (_e) => Fr(Se, x, _e),
                                        className:
                                          "text-red-500 hover:text-red-600 rounded-full p-2 transition-all z-10",
                                        title: "刪除",
                                        children: r.jsx(Sr, {
                                          className: "w-6 h-6",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          Se.GUID || Ee
                        );
                      }),
                    },
                    Me
                  );
                }),
              });
            } else if (x.contents && x.contents.length > 0) {
              const {
                sortedContents: Y,
                maxRow: pe,
                maxCol: Ne,
              } = Ve(x.contents);
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
            if (x.contents && x.contents.length > 0) {
              const {
                sortedContents: Y,
                maxRow: pe,
                maxCol: Ne,
              } = Ve(x.contents);
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
            const Q = Math.max(
                ...x.Boxes.flat().map((Y) => +Y.Row + +Y.Height - 1)
              ),
              L = Math.max(
                ...x.Boxes.flat().map((Y) => +Y.Column + +Y.Width - 1)
              ),
              ie = Q + 1,
              q = L + 1,
              W = x.Boxes.flat(),
              ee = Array(ie)
                .fill(null)
                .map(() => Array(q).fill(!1)),
              ce = {};
            return (
              W.forEach((Y) => {
                Y.Slave || (ce[`${Y.Row},${Y.Column}`] = Y);
              }),
              W.forEach((Y) => {
                if (!Y.Slave && (Y.Width > 1 || Y.Height > 1))
                  for (let pe = Y.Row; pe < Y.Row + Y.Height; pe++)
                    for (let Ne = Y.Column; Ne < Y.Column + Y.Width; Ne++)
                      (pe !== Y.Row || Ne !== Y.Column) && (ee[pe][Ne] = !0);
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
                  children: x.contents.map((Y) => Qt(Y)),
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
      Br = (x) => {
        if (
          (ye(x.gird_position || "0,0"),
          x.type !== "調劑台" && x.type !== "藥庫")
        )
          return null;
        const re = (Q) => {
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
          const { sortedContents: L, maxRow: ie, maxCol: q } = Ve(Q),
            W = Array(ie + 1)
              .fill(null)
              .map(() => Array(q + 1).fill(!1)),
            ee = {};
          return (
            L.forEach((ce) => {
              const Y = ye(ce.gird_position || "0,0");
              (ee[`${Y.row},${Y.col}`] = ce), (W[Y.row][Y.col] = !0);
            }),
            r.jsx("table", {
              className: "w-full h-full",
              style: { borderCollapse: "none", borderSpacing: "0px" },
              children: r.jsx("tbody", {
                children: Array.from({ length: ie + 1 }, (ce, Y) =>
                  r.jsx(
                    "tr",
                    {
                      className: "h-full",
                      children: Array.from({ length: q + 1 }, (pe, Ne) => {
                        const Pe = `${Y},${Ne}`,
                          ke = ee[Pe];
                        return ke
                          ? r.jsxs(
                              "td",
                              {
                                className: "p-1 align-top bg-transparent",
                                style: {
                                  width: `${100 / (q + 1)}%`,
                                  height: `${100 / (ie + 1)}%`,
                                  minHeight: "120px",
                                  border: "none",
                                  position: "relative",
                                },
                                children: [
                                  Qt(ke),
                                  (_ == null ? void 0 : _.container.GUID) ===
                                    ke.GUID &&
                                    r.jsx("div", {
                                      className:
                                        "absolute inset-0 pointer-events-none",
                                      children: r.jsx("div", {
                                        className: `absolute bg-blue-400 opacity-50 ${
                                          _.direction === "top"
                                            ? "top-0 left-0 right-0 h-1"
                                            : _.direction === "bottom"
                                            ? "bottom-0 left-0 right-0 h-1"
                                            : _.direction === "left"
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
                                  width: `${100 / (q + 1)}%`,
                                  height: `${100 / (ie + 1)}%`,
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
                      onClick: (Q) => {
                        Q.stopPropagation(),
                          console.log("🔘 點擊新增父容器按鈕"),
                          console.log("📋 找到的部門資料:", x),
                          x
                            ? (console.log(
                                "✅ 呼叫 openAddParentContainerModal"
                              ),
                              i(x))
                            : console.warn("⚠️ 未找到對應的部門資料");
                      },
                      title: "新增",
                      children: r.jsx(It, {
                        className: "w-6 h-6 text-green-700",
                      }),
                    }),
                  }),
                ],
              }),
              r.jsx("div", {
                className: `flex-1 bg-orange-50 ${
                  (_ == null ? void 0 : _.container.GUID) === x.GUID
                    ? "ring-2 ring-blue-400 ring-inset"
                    : ""
                }`,
                children: re(x.contents || []),
              }),
            ],
          },
          x.GUID
        );
      },
      As = f.useCallback(
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
          const re = x[0].CODE || x[0].code;
          if ((console.log("🎯 提取的藥碼:", re), !re)) {
            console.warn("⚠️ 無法定位藥品：缺少藥碼");
            return;
          }
          console.log("🎯 開始定位藥品:", re);
          const Q = (ie) => {
              for (const q of ie) {
                if (q.type === "grid_draw" && q.Boxes) {
                  for (const W of q.Boxes)
                    for (const ee of W)
                      if (ee.Code === re) {
                        const ce = document.querySelector(
                          `[data-container-guid="${q.GUID}"]`
                        );
                        if (ce)
                          return (
                            console.log("✅ 找到藥品容器 (grid_draw):", q),
                            { element: ce, bounds: ce.getBoundingClientRect() }
                          );
                      }
                }
                if (
                  q.type === "list_draw" &&
                  q.drugs &&
                  q.drugs.some((ee) => ee.code === re)
                ) {
                  const ee = document.querySelector(
                    `[data-container-guid="${q.GUID}"]`
                  );
                  if (ee)
                    return (
                      console.log("✅ 找到藥品容器 (list_draw):", q),
                      { element: ee, bounds: ee.getBoundingClientRect() }
                    );
                }
                if (
                  (q.type === "store_shelves" ||
                    q.type === "dispensing_shelves") &&
                  q.medMapStock &&
                  q.medMapStock.some(
                    (ee) => ee.code === re || ee.material_no === re
                  )
                ) {
                  const ee = document.querySelector(
                    `[data-container-guid="${q.GUID}"]`
                  );
                  if (ee)
                    return (
                      console.log("✅ 找到藥品容器 (store_shelves):", q),
                      { element: ee, bounds: ee.getBoundingClientRect() }
                    );
                }
                if (
                  q.type === "med_box" &&
                  q.med_info &&
                  q.med_info.length > 0 &&
                  q.med_info.some((ee) => ee.code === re)
                ) {
                  const ee = document.querySelector(
                    `[data-container-guid="${q.GUID}"]`
                  );
                  if (ee)
                    return (
                      console.log("✅ 找到藥品容器 (med_box):", q),
                      { element: ee, bounds: ee.getBoundingClientRect() }
                    );
                }
                if (q.contents && q.contents.length > 0) {
                  const W = Q(q.contents);
                  if (W) return W;
                }
              }
              return null;
            },
            L = Q(o);
          if (L) {
            const ie = n.current.getBoundingClientRect(),
              q = L.bounds,
              W = (q.left + q.right) / 2,
              ee = (q.top + q.bottom) / 2,
              ce = (W - ie.left - S.x) / S.scale,
              Y = (ee - ie.top - S.y) / S.scale,
              pe = ie.width / 2,
              Ne = ie.height / 2,
              Pe = pe - ce * S.scale,
              ke = Ne - Y * S.scale;
            A((Me) => ({ ...Me, x: Pe, y: ke })),
              console.log("✅ 定位完成", {
                elementScreenCenter: { x: W, y: ee },
                elementCanvasPos: { x: ce, y: Y },
                screenCenter: { x: pe, y: Ne },
                newTransform: { x: Pe, y: ke },
              }),
              h(`已定位到藥品：${x.CHT_NAME || x.NAME || re}`, "success");
          } else
            console.warn("❌ 未找到藥品容器"),
              h("未找到該藥品的儲存位置", "error");
        },
        [o, S, h]
      );
    f.useImperativeHandle(
      t,
      () => (
        console.log("🔧 useImperativeHandle 設置 ref 方法"), { locateDrug: As }
      )
    );
    const Fr = async (x, re, Q) => {
        if (
          (Q.stopPropagation(),
          Q.preventDefault(),
          !!window.confirm(`確定要刪除 ${x.name || x.material_no} 嗎？`))
        )
          try {
            const ie = await De.deleteStockByGUID([x.GUID]);
            if (ie.Code === 200) {
              const q = re.medMapStock.findIndex((W) => W.GUID === x.GUID);
              q !== -1 &&
                (re.medMapStock.splice(q, 1),
                re.medMapStock.forEach((W, ee) => {
                  W.location = String(ee);
                })),
                h("刪除成功", "success");
            } else h(ie.Result || "刪除失敗", "error");
          } catch (ie) {
            console.error("刪除 stock 失敗:", ie),
              h("刪除失敗，請稍後再試", "error");
          }
      },
      nl = async (x) => {
        if (x.key === "Enter" && E.trim() && !se) {
          x.preventDefault(), fe(!0);
          const re = performance.now();
          try {
            console.log("🔍 [手動輸入] 搜尋條碼:", E);
            const Q = performance.now(),
              L = await De.searchByBarCode(E.trim()),
              ie = performance.now();
            if (
              (console.log(
                `⏱️ [手動輸入] API搜尋藥品資料用時: ${(ie - Q).toFixed(2)}ms`
              ),
              console.log("📋 條碼搜尋回應:", L),
              L.Code === 200)
            ) {
              console.log("✅ 找到藥品資料:", L.Data),
                h("找到藥品資料", "success");
              const q = performance.now();
              As(L.Data);
              const W = performance.now();
              console.log(
                `⏱️ [手動輸入] 定位藥品用時: ${(W - q).toFixed(2)}ms`
              ),
                O("");
              const ee = performance.now();
              console.log(`⏱️ [手動輸入] 總用時: ${(ee - re).toFixed(2)}ms`);
            } else
              L.Code === -200 && L.Result === "查無資料"
                ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                  h("查無資料，請建立條碼", "error"),
                  y(E.trim()),
                  O(""))
                : (console.log("❌ 搜尋失敗:", L.Result),
                  h(L.Result || "搜尋失敗", "error"));
          } catch (Q) {
            console.error("條碼搜尋錯誤:", Q),
              h("搜尋失敗，請稍後再試", "error");
          } finally {
            fe(!1);
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
                onChange: (x) => O(x.target.value),
                onKeyDown: nl,
                placeholder: "輸入條碼或掃描...",
                className:
                  "px-4 py-2 w-50 focus:outline-none text-gray-700 disabled:opacity-50",
                disabled: se,
              }),
              r.jsx("button", {
                onClick: () => g("track_Drug_mode"),
                className: "p-2",
                title: "掃描條碼",
                disabled: se,
                children: r.jsx(Ur, { className: "w-6 h-6 text-blue-600" }),
              }),
            ],
          }),
        }),
        r.jsx("div", {
          className: "absolute bottom-4 right-4 z-10 flex gap-2",
          children: r.jsx("button", {
            onClick: () => C(!m),
            className: `rounded-lg shadow-lg p-2 transition-colors ${
              m
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`,
            title: m ? "Unlock Canvas" : "Lock Canvas",
            children: m
              ? r.jsx(vi, { className: "w-6 h-6" })
              : r.jsx(Zu, { className: "w-6 h-6" }),
          }),
        }),
        r.jsx("div", {
          ref: n,
          className: `w-full h-full relative ${
            T && !m ? "cursor-grab" : "cursor-default"
          } ${d ? "cursor-grabbing" : ""}`,
          onMouseDown: $,
          onMouseMove: H,
          onMouseUp: B,
          onMouseLeave: B,
          onTouchStart: Re,
          onTouchMove: rt,
          onTouchEnd: $e,
          children: r.jsxs("div", {
            className: "absolute inset-0 origin-top-left",
            style: {
              transform: `translate(${S.x}px, ${S.y}px) scale(${S.scale})`,
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
                    borderSpacing: `${we}px`,
                    minWidth: "fit-content",
                    minHeight: "fit-content",
                  },
                  children: r.jsx("tbody", {
                    children: Array.from({ length: Ft + 1 }, (x, re) =>
                      r.jsx(
                        "tr",
                        {
                          children: Array.from({ length: Vn + 1 }, (Q, L) => {
                            const ie = At.find((q) => {
                              const W = ye(q.gird_position || "0,0");
                              return W.row === re && W.col === L;
                            });
                            return ie
                              ? r.jsx(
                                  "td",
                                  {
                                    className: "align-top",
                                    style: {
                                      minWidth: "150px",
                                      minHeight: "120px",
                                      border: "none",
                                    },
                                    children: Br(ie),
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
      ],
    });
  });
ef.displayName = "DrugCanvas";
const kh = async (e) => {
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
      var g, y, h, p, b;
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
          const N = {
            ...c,
            absolute_position: `${
              (g = i.containerData) == null ? void 0 : g.position.x
            },${(y = i.containerData) == null ? void 0 : y.position.y}`,
            position:
              ((h = i.containerData) == null ? void 0 : h.gird_position) ||
              i.position,
            name: ((p = i.containerData) == null ? void 0 : p.name) || "",
            ip: ((b = i.containerData) == null ? void 0 : b.ip) || "",
          };
          o.push(N);
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
      const y = [];
      i.forEach((h) => {
        var p, b;
        if (h.error)
          (g += h.count),
            y.push(`${h.type}: ${h.error.message || "網路錯誤"}`),
            console.error(`❌ ${h.type} API 失敗:`, h.error);
        else if (((p = h.response) == null ? void 0 : p.Code) === 200)
          (c += h.count), console.log(`✅ ${h.type} API 成功:`, h.response);
        else {
          g += h.count;
          const N =
            ((b = h.response) == null ? void 0 : b.Result) || "未知錯誤";
          y.push(`${h.type}: ${N}`),
            console.error(`❌ ${h.type} API 失敗:`, h.response);
        }
      });
    } catch (i) {
      console.error("💥 批次更新過程中發生錯誤:", i);
    } finally {
      console.log("完成更新");
    }
  },
  _h = "modulepreload",
  Mh = function (e) {
    return "/" + e;
  },
  Ic = {},
  Eh = function (t, n, s) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const a = document.querySelector("meta[property=csp-nonce]"),
        i =
          (a == null ? void 0 : a.nonce) ||
          (a == null ? void 0 : a.getAttribute("nonce"));
      o = Promise.allSettled(
        n.map((c) => {
          if (((c = Mh(c)), c in Ic)) return;
          Ic[c] = !0;
          const g = c.endsWith(".css"),
            y = g ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${c}"]${y}`)) return;
          const h = document.createElement("link");
          if (
            ((h.rel = g ? "stylesheet" : _h),
            g || (h.as = "script"),
            (h.crossOrigin = ""),
            (h.href = c),
            i && h.setAttribute("nonce", i),
            document.head.appendChild(h),
            g)
          )
            return new Promise((p, b) => {
              h.addEventListener("load", p),
                h.addEventListener("error", () =>
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
  ln = [
    { name: "2.13吋", box_type: "2.13", width: ["7.5"], unit: "cm" },
    { name: "2.9吋", type: "2.9", width: ["10", "15", "20"], unit: "cm" },
    { name: "4.2吋", type: "4.2", width: ["11", "16"], unit: "cm" },
  ],
  Ih = () => {
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
      } = ot(),
      { t: y } = kt(),
      [h, p] = f.useState(0),
      [b, N] = f.useState({}),
      [S, A] = f.useState(""),
      [d, u] = f.useState(""),
      [m, C] = f.useState("N"),
      [P, D] = f.useState([]),
      [T, z] = f.useState(!1),
      [E, O] = f.useState(!1),
      [se, fe] = f.useState(null),
      [M, v] = f.useState(null),
      [F, w] = f.useState(!1),
      [j, k] = f.useState(!1);
    f.useEffect(() => {
      if (n && e)
        if (c === "add") {
          p(0);
          const te = {};
          ln.forEach((R, I) => {
            te[I] = 0;
          }),
            N(te),
            A(""),
            O(!1),
            _();
        } else {
          const te = ln.findIndex(
            (R) => R.box_type === n.box_type || R.type === n.box_type
          );
          if ((console.log(n), te >= 0)) {
            p(te);
            const I = ln[te].width.findIndex((U) => {
                var ne;
                return (
                  U ===
                  ((ne = n.width) == null ? void 0 : ne[n.width_index || 0])
                );
              }),
              K = {};
            ln.forEach((U, ne) => {
              ne === te ? (K[ne] = I >= 0 ? I : 0) : (K[ne] = 0);
            }),
              N(K);
          } else {
            p(0);
            const R = {};
            ln.forEach((I, K) => {
              R[K] = 0;
            }),
              N(R);
          }
          A(n.ip || ""),
            v({
              box_type: n.box_type,
              width: n.width,
              width_index: n.width_index,
              ip: n.ip || "",
              storage: n.storage ? JSON.parse(JSON.stringify(n.storage)) : null,
            });
        }
    }, [n, e, c]);
    const _ = () => {
        n && n.parentShelf && fe(n.parentShelf);
      },
      J = (te) => {
        if (!te || !te.contents || te.contents.length === 0) return "0,0";
        let R = -1,
          I = 0;
        return (
          te.contents.forEach((K) => {
            if (K.gird_position) {
              const [U, ne] = K.gird_position.split(",").map(Number);
              ne > R && ((R = ne), (I = U));
            }
          }),
          `${I},${R + 1}`
        );
      },
      G = () => {
        if (!M || c !== "edit") return !1;
        const te = ln[h],
          R = b[h] || 0,
          I = te.box_type || te.type || te.name;
        return (
          M.box_type !== I ||
          M.width_index !== R ||
          M.ip !== S ||
          JSON.stringify(M.storage) !==
            JSON.stringify(n == null ? void 0 : n.storage)
        );
      },
      oe = (te) => {
        p(te);
      },
      we = (te, R) => {
        N((I) => ({ ...I, [te]: R }));
      },
      me = () => {
        n && (c === "add" ? he() : X());
      },
      V = () => {
        t();
      },
      he = async () => {
        if (!n || !se) {
          a("缺少必要資料，無法新增藥盒", "error");
          return;
        }
        O(!0);
        try {
          const te = ln[h],
            R = b[h] || 0,
            I = te.width[R],
            K = J(se),
            U = {
              Master_GUID: se.GUID,
              position: K,
              width: I.toString(),
              height: "60",
              ip_box: S,
              serverName: se.serverName || "",
              serverType: se.serverType || "",
            };
          console.log("🚀 發送新增藥盒 API 請求:", U);
          const ne = await De.addMedMapBox(U);
          ne.Code === 200
            ? (a("藥盒新增成功", "success"), t(), await Ce())
            : a(`藥盒新增失敗：${ne.Result || "未知錯誤"}`, "error");
        } catch (te) {
          console.error("Add med box failed:", te),
            a("藥盒新增失敗：網路錯誤", "error");
        } finally {
          O(!1);
        }
      },
      X = async () => {
        var te;
        if (!n || !G()) {
          a("沒有資料變更", "error");
          return;
        }
        w(!0);
        try {
          const R = ln[h],
            I = b[h] || 0,
            K = R.width[I],
            U = R.box_type || R.type || R.name,
            ne = M.box_type !== U || M.width_index !== I || M.ip !== S,
            ae =
              JSON.stringify(M.storage) !==
              JSON.stringify(n == null ? void 0 : n.storage),
            $ = [];
          if (ne) {
            const Z = {
              GUID: n.GUID,
              Master_GUID: n.Master_GUID,
              position: n.gird_position,
              ip_light: S,
              serverName: n.serverName,
              serverType: n.serverType,
            };
            $.push(De.updateMedMapBox([Z]));
          }
          ae &&
            $.push(
              De.updateEpd266Storages(n.serverName || "", n.serverType || "", [
                n.storage,
              ])
            );
          const H = await Promise.all($);
          if (H.every((Z) => Z.Code === 200))
            a("藥盒更新成功", "success"), t(), await Ce();
          else {
            const Z = H.filter((le) => le.Code !== 200);
            a(
              `藥盒更新失敗：${
                ((te = Z[0]) == null ? void 0 : te.Result) || "未知錯誤"
              }`,
              "error"
            );
          }
        } catch (R) {
          console.error("Update med box failed:", R),
            a("藥盒更新失敗：網路錯誤", "error");
        } finally {
          w(!1);
        }
      },
      Ce = async () => {
        if (!s) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", s), l(!0);
        try {
          const te = await De.getMedMapByDepartment(s);
          if (te.Code === 200 && te.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const R = await Eh(() => Promise.resolve().then(() => Zm), void 0),
              I = R.default.convertMedMapApiToFakeData(te.Data);
            if (!R.default.validateConvertedData(I)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(I), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", te),
              a("資料更新失敗：API 錯誤", "error");
        } catch (te) {
          console.error("💥 重新獲取藥品地圖資料失敗:", te),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      ye = async () => {
        z(!0);
        try {
          const te = d.toLowerCase().trim();
          let R = g;
          te &&
            (R = R.filter((I) => {
              var K, U, ne;
              return (
                ((K = I.CODE) == null
                  ? void 0
                  : K.toLowerCase().includes(te)) ||
                ((U = I.NAME) == null
                  ? void 0
                  : U.toLowerCase().includes(te)) ||
                ((ne = I.CHT_NAME) == null
                  ? void 0
                  : ne.toLowerCase().includes(te))
              );
            })),
            m !== "N" && (R = R.filter((I) => I.DRUGKIND === m)),
            D(R);
        } catch (te) {
          console.error("Search failed:", te), D([]);
        } finally {
          z(!1);
        }
      },
      xe = (te, R) => {
        console.log("📸 掃描成功，藥品資料:", R), k(!1), Ue(R);
      },
      Ue = async (te) => {
        if (n)
          try {
            console.log("🚀 開始更新藥盒藥品代碼:", te.CODE);
            const R = await De.updateEpd266Medcode(
              n.serverName || "",
              n.serverType || "",
              te.CODE,
              n.storage || {}
            );
            R.Code === 200
              ? (console.log("✅ 藥品代碼更新成功:", R.Data),
                (n.storage = R.Data),
                (n.med_info = [
                  { name: te.NAME, cht_name: te.CHT_NAME, code: te.CODE },
                ]),
                a("藥品更新成功", "success"),
                i())
              : (console.error("❌ 藥品代碼更新失敗:", R),
                a(`藥品更新失敗：${R.Result || "未知錯誤"}`, "error"));
          } catch (R) {
            console.error("💥 藥品代碼更新發生錯誤:", R),
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
              onClick: V,
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
                        r.jsx(In, { className: "w-6 h-6 text-gray-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: y(
                            c === "add"
                              ? "modal.addMedBox"
                              : "modal.medBoxSettings"
                          ),
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: V,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Je, { className: "w-6 h-6" }),
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
                              children: y("form.ipAddress"),
                            }),
                            r.jsx("div", {
                              className: "flex items-center",
                              children: r.jsx("input", {
                                type: "text",
                                onChange: (te) => A(te.target.value),
                                placeholder:
                                  (n == null ? void 0 : n.ip) ||
                                  (n == null ? void 0 : n.name) ||
                                  y("placeholder.ipAddress"),
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
                                children: y("form.medBoxType"),
                              }),
                              r.jsx("div", {
                                className: "flex gap-4 justify-between",
                                children: ln.map((te, R) =>
                                  r.jsxs(
                                    "label",
                                    {
                                      className: `flex items-center px-4 py-2 border-2 rounded-lg cursor-pointer transition-all ${
                                        h === R
                                          ? "border-blue-500 bg-blue-50"
                                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                      }`,
                                      children: [
                                        r.jsx("input", {
                                          type: "radio",
                                          name: "boxType",
                                          value: R,
                                          checked: h === R,
                                          onChange: () => oe(R),
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
                                    R
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
                                children: y("form.widthSelection"),
                              }),
                              ln.map((te, R) =>
                                r.jsx(
                                  "div",
                                  {
                                    className: `flex gap-4 ${
                                      h === R ? "block" : "hidden"
                                    }`,
                                    children: te.width.map((I, K) =>
                                      r.jsxs(
                                        "label",
                                        {
                                          className: `flex items-center justify-center px-4 py-2 border-2 rounded-lg cursor-pointer transition-all ${
                                            h === R && (b[R] || 0) === K
                                              ? "border-green-500 bg-green-50"
                                              : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                          }`,
                                          children: [
                                            r.jsx("input", {
                                              type: "radio",
                                              name: `width-${R}`,
                                              value: K,
                                              checked:
                                                h === R && (b[R] || 0) === K,
                                              onChange: () => we(R, K),
                                              className:
                                                "w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500 hidden",
                                            }),
                                            r.jsx("div", {
                                              className: "text-center",
                                              children: r.jsxs("div", {
                                                className:
                                                  "text-sm font-semibold text-gray-900",
                                                children: [I, " ", te.unit],
                                              }),
                                            }),
                                          ],
                                        },
                                        `${R}-${K}`
                                      )
                                    ),
                                  },
                                  R
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
                                  children: y("form.drugInfo"),
                                }),
                                r.jsx("div", {
                                  children:
                                    n != null &&
                                    n.med_info &&
                                    n.med_info.length > 0
                                      ? r.jsx("div", {
                                          children: n.med_info.map((te, R) =>
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
                                                          y("form.drugCode"),
                                                          ":",
                                                        ],
                                                      }),
                                                      r.jsx("div", {
                                                        className:
                                                          "text-base text-gray-900 mt-1",
                                                        children:
                                                          te.code ||
                                                          y("status.notSet"),
                                                      }),
                                                    ],
                                                  }),
                                                  r.jsxs("div", {
                                                    children: [
                                                      r.jsxs("span", {
                                                        className:
                                                          "text-sm font-medium text-gray-600",
                                                        children: [
                                                          y("form.drugName"),
                                                          ":",
                                                        ],
                                                      }),
                                                      r.jsx("div", {
                                                        className:
                                                          "text-base text-gray-900 mt-1",
                                                        children:
                                                          te.name ||
                                                          y("status.notSet"),
                                                      }),
                                                    ],
                                                  }),
                                                  r.jsxs("div", {
                                                    children: [
                                                      r.jsxs("span", {
                                                        className:
                                                          "text-sm font-medium text-gray-600",
                                                        children: [
                                                          y("form.chineseName"),
                                                          ":",
                                                        ],
                                                      }),
                                                      r.jsx("div", {
                                                        className:
                                                          "text-base text-gray-900 mt-1",
                                                        children:
                                                          te.cht_name ||
                                                          y("status.notSet"),
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              R
                                            )
                                          ),
                                        })
                                      : r.jsx("div", {
                                          className:
                                            "bg-gray-50 border border-gray-200 rounded-lg py-8 px-4 text-center space-y-4",
                                          children: r.jsx("div", {
                                            className:
                                              "text-gray-500 text-base",
                                            children: y("status.noDrugData"),
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
                                  children: y("form.drugInfo"),
                                }),
                                r.jsx("div", {
                                  className:
                                    "bg-gray-50 border border-gray-200 rounded-lg py-2 px-4 min-h-[262px] max-h-[262px]",
                                  children: r.jsx("div", {
                                    className: "text-center py-8 space-y-4",
                                    children: r.jsx("div", {
                                      className: "text-gray-500 text-base",
                                      children: y("status.newMedBoxNoDrug"),
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
                                    children: y("form.drugSearch"),
                                  }),
                                  r.jsx("button", {
                                    onClick: () => k(!0),
                                    className:
                                      "p-2 hover:bg-gray-100 rounded-full transition-colors",
                                    title: "掃描條碼",
                                    children: r.jsx(Ur, {
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
                                    onChange: (te) => u(te.target.value),
                                    placeholder: y("placeholder.drugSearch"),
                                    className:
                                      "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                  r.jsxs("select", {
                                    value: m,
                                    onChange: (te) => C(te.target.value),
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
                                    onClick: ye,
                                    disabled: T,
                                    className:
                                      "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                    children: [
                                      T &&
                                        r.jsx($t, {
                                          className: "w-4 h-4 animate-spin",
                                        }),
                                      y("button.search"),
                                    ],
                                  }),
                                ],
                              }),
                              r.jsx("div", {
                                className:
                                  "bg-white border rounded p-3 min-h-[220px] max-h-[220px] overflow-y-auto",
                                children: T
                                  ? r.jsxs("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: [
                                        r.jsx($t, {
                                          className:
                                            "w-5 h-5 animate-spin mr-2",
                                        }),
                                        y("status.searching"),
                                      ],
                                    })
                                  : P.length > 0
                                  ? r.jsx("div", {
                                      className: "space-y-1",
                                      children: P.map((te, R) =>
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
                                                onClick: () => Ue(te),
                                                className:
                                                  "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                                title: y("button.add"),
                                                children: r.jsx(It, {
                                                  className: "w-4 h-4",
                                                }),
                                              }),
                                            ],
                                          },
                                          te.GUID || R
                                        )
                                      ),
                                    })
                                  : r.jsx("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: y(
                                        d || m !== "N"
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
                      onClick: V,
                      disabled: E || F,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                      children: y("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: me,
                      disabled: E || F,
                      className:
                        "px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        (E || F) &&
                          r.jsx($t, { className: "w-4 h-4 animate-spin" }),
                        r.jsx("span", {
                          children: E
                            ? "新增中..."
                            : F
                            ? "更新中..."
                            : y(c === "add" ? "button.add" : "button.save"),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            r.jsx(tl, {
              isOpen: j,
              onClose: () => k(!1),
              onScanSuccess: xe,
              mode: "set_med_box_med_mode",
            }),
          ],
        });
  },
  Ph = () => {
    const {
        listDrawModalOpen: e,
        closeListDrawModal: t,
        selectedListDraw: n,
        triggerRefresh: s,
      } = ot(),
      { t: o } = kt(),
      [l, a] = f.useState(""),
      [i, c] = f.useState([]),
      [g, y] = f.useState(""),
      [h, p] = f.useState("N"),
      [b, N] = f.useState([]),
      [S, A] = f.useState(!1);
    f.useEffect(() => {
      n && e && (a(n.name || ""), c(n.med_info || []));
    }, [n, e]);
    const d = (D) => {
        c((T) => T.filter((z) => z.code !== D));
      },
      u = async () => {
        A(!0);
        try {
          const D = await De.searchMedicine(g, h);
          N(D);
        } catch (D) {
          console.error("Search failed:", D), N([]);
        } finally {
          A(!1);
        }
      },
      m = (D) => {
        const T = {
          id: D.GUID || `${Date.now()}_${Math.random()}`,
          name: D.NAME,
          cht_name: D.CHT_NAME,
          code: D.CODE,
        };
        c((z) => (z.some((O) => O.code === T.code) ? z : [...z, T]));
      },
      C = () => {
        n && ((n.name = l), (n.med_info = i), s(), t());
      },
      P = () => {
        t();
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
              onClick: (D) => D.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(In, { className: "w-6 h-6 text-gray-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: o("modal.listDrawSettings"),
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: P,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Je, { className: "w-6 h-6" }),
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
                            onChange: (D) => a(D.target.value),
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
                                    children: i.map((D) =>
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
                                                    D.code &&
                                                      r.jsx("div", {
                                                        children: r.jsx("div", {
                                                          className:
                                                            "text-sm text-gray-900 font-mono",
                                                          children: D.code,
                                                        }),
                                                      }),
                                                    r.jsx("div", {
                                                      children: r.jsx("div", {
                                                        className:
                                                          "text-sm text-gray-900 font-medium",
                                                        children:
                                                          D.name ||
                                                          o("status.notSet"),
                                                      }),
                                                    }),
                                                    r.jsx("div", {
                                                      children: r.jsx("div", {
                                                        className:
                                                          "text-sm text-gray-900",
                                                        children:
                                                          D.cht_name ||
                                                          o("status.notSet"),
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              r.jsx("button", {
                                                onClick: () => d(D.code),
                                                className:
                                                  "ml-3 p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0",
                                                title: o("button.remove"),
                                                children: r.jsx(Je, {
                                                  className: "w-5 h-5",
                                                }),
                                              }),
                                            ],
                                          }),
                                        },
                                        D.id
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
                                    onChange: (D) => y(D.target.value),
                                    placeholder: o("placeholder.drugSearch"),
                                    className:
                                      "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                  r.jsxs("select", {
                                    value: h,
                                    onChange: (D) => p(D.target.value),
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
                                    disabled: S,
                                    className:
                                      "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                    children: [
                                      S &&
                                        r.jsx($t, {
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
                                children: S
                                  ? r.jsxs("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: [
                                        r.jsx($t, {
                                          className:
                                            "w-5 h-5 animate-spin mr-2",
                                        }),
                                        o("status.searching"),
                                      ],
                                    })
                                  : b.length > 0
                                  ? r.jsx("div", {
                                      className: "space-y-1",
                                      children: b.map((D, T) =>
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
                                                    children: D.NAME,
                                                  }),
                                                  r.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-500 truncate",
                                                    children: D.CHT_NAME,
                                                  }),
                                                  r.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-400 font-mono",
                                                    children: D.CODE,
                                                  }),
                                                ],
                                              }),
                                              r.jsx("button", {
                                                onClick: () => m(D),
                                                className:
                                                  "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                                title: o("button.add"),
                                                children: r.jsx(It, {
                                                  className: "w-4 h-4",
                                                }),
                                              }),
                                            ],
                                          },
                                          D.GUID || T
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
                      onClick: P,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                      children: o("button.cancel"),
                    }),
                    r.jsx("button", {
                      onClick: C,
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
  Th = () => {
    const {
        gridDrawModalOpen: e,
        closeGridDrawModal: t,
        selectedGridDraw: n,
        triggerRefresh: s,
        apiDepartmentData: o,
        setApiDepartmentData: l,
        showNotification: a,
        medicineList: i,
      } = ot(),
      { t: c } = kt(),
      [g, y] = f.useState(""),
      [h, p] = f.useState(null),
      [b, N] = f.useState(!1),
      [S, A] = f.useState(!1),
      [d, u] = f.useState(null),
      [m, C] = f.useState(""),
      [P, D] = f.useState("N"),
      [T, z] = f.useState([]),
      [E, O] = f.useState(!1),
      [se, fe] = f.useState(0),
      [M, v] = f.useState({ x: 0, y: 0 });
    f.useEffect(() => {
      if (n && e)
        if ((y(n.name || ""), n.drawer)) {
          if (!b) {
            console.log("🔄 備份原始 drawer 資料:", n);
            const U = JSON.parse(JSON.stringify(n.drawer));
            p(U), N(!0), console.log("✅ 備份完成，備份資料:", U);
          }
        } else console.log("⚠️ 沒有 drawer 資料可備份"), p(null), N(!1);
    }, [n, e, b]),
      f.useEffect(() => {
        e || (N(!1), p(null), u(null));
      }, [e]);
    const F = () => {
        n && I();
      },
      w = () => {
        if (
          (console.log("🔄 開始恢復原始資料..."),
          console.log("原始備份資料:", h),
          console.log("當前 selectedGridDraw:", n),
          n && h && b)
        ) {
          console.log("📦 恢復 drawer 資料...");
          const U = JSON.parse(JSON.stringify(h));
          if (((n.drawer = U), o)) {
            const ne = ($) => {
                $.forEach((H) => {
                  H.GUID === n.GUID &&
                    (console.log("🎯 找到目標格線抽屜，更新資料"),
                    (H.drawer = U)),
                    H.contents && Array.isArray(H.contents) && ne(H.contents),
                    H.components &&
                      Array.isArray(H.components) &&
                      ne(H.components);
                });
              },
              ae = JSON.parse(JSON.stringify(o));
            ne(ae), l(ae), console.log("🔄 已更新全域資料狀態");
          }
          console.log("✅ 資料已恢復:", n.drawer);
        } else
          console.log(
            "⚠️ 無法恢復資料 - selectedGridDraw、originalDrawerData 或 hasBackup 為空"
          ),
            console.log("selectedGridDraw:", !!n),
            console.log("originalDrawerData:", !!h),
            console.log("hasBackup:", b);
        u(null), N(!1), p(null), s(), t();
      },
      j = (U, ne) => {
        if (!d) return !1;
        const ae = Math.min(d.startRow, d.endRow),
          $ = Math.max(d.startRow, d.endRow),
          H = Math.min(d.startCol, d.endCol),
          B = Math.max(d.startCol, d.endCol);
        return U >= ae && U <= $ && ne >= H && ne <= B;
      },
      k = (U) => {
        var ge;
        if (
          !((ge = n == null ? void 0 : n.drawer) != null && ge.Boxes) ||
          U.Slave
        )
          return { width: 1, height: 1 };
        const ae = n.drawer.Boxes.flat().filter(
          (ue) =>
            ue.Slave &&
            ue.MasterBox_Row === U.Row &&
            ue.MasterBox_Column === U.Column
        );
        if (ae.length === 0) return { width: 1, height: 1 };
        const $ = [U, ...ae],
          H = Math.min(...$.map((ue) => ue.Row)),
          B = Math.max(...$.map((ue) => ue.Row)),
          Z = Math.min(...$.map((ue) => ue.Column));
        return {
          width: Math.max(...$.map((ue) => ue.Column)) - Z + 1,
          height: B - H + 1,
        };
      },
      _ = () => {
        var Z;
        if (!d || !((Z = n == null ? void 0 : n.drawer) != null && Z.Boxes))
          return [];
        const U = n.drawer.Boxes.flat(),
          ne = Math.min(d.startRow, d.endRow),
          ae = Math.max(d.startRow, d.endRow),
          $ = Math.min(d.startCol, d.endCol),
          H = Math.max(d.startCol, d.endCol),
          B = [];
        return (
          U.forEach((le) => {
            if (!le.Slave) {
              const ge = k(le),
                ue = le.Row + ge.height - 1,
                ve = le.Column + ge.width - 1;
              le.Row >= ne &&
                ue <= ae &&
                le.Column >= $ &&
                ve <= H &&
                B.push(le);
            }
          }),
          B
        );
      },
      J = (U, ne, ae, $) => {
        var ve;
        if (!d || !((ve = n == null ? void 0 : n.drawer) != null && ve.Boxes))
          return !1;
        const H = n.drawer.Boxes.flat();
        let B = !0,
          Z = U,
          le = ne,
          ge = ae,
          ue = $;
        for (; B; )
          (B = !1),
            H.forEach((je) => {
              if (!je.Slave) {
                const Re = k(je),
                  rt = je.Row + Re.height - 1,
                  $e = je.Column + Re.width - 1;
                !(je.Row > le || rt < Z || je.Column > ue || $e < ge) &&
                  (je.Row < Z && ((Z = je.Row), (B = !0)),
                  rt > le && ((le = rt), (B = !0)),
                  je.Column < ge && ((ge = je.Column), (B = !0)),
                  $e > ue && ((ue = $e), (B = !0)));
              }
            });
        return { minRow: Z, maxRow: le, minCol: ge, maxCol: ue };
      },
      G = () => {
        var B;
        if (!d || !((B = n == null ? void 0 : n.drawer) != null && B.Boxes))
          return !1;
        const U = Math.min(d.startRow, d.endRow),
          ne = Math.max(d.startRow, d.endRow),
          ae = Math.min(d.startCol, d.endCol),
          $ = Math.max(d.startCol, d.endCol),
          H = n.drawer.Boxes.flat();
        for (let Z = U; Z <= ne; Z++)
          for (let le = ae; le <= $; le++) {
            let ge = !1;
            for (const ue of H)
              if (!ue.Slave) {
                const ve = k(ue),
                  je = ue.Row + ve.height - 1,
                  Re = ue.Column + ve.width - 1;
                if (Z >= ue.Row && Z <= je && le >= ue.Column && le <= Re) {
                  ge = !0;
                  break;
                }
              }
            if (!ge) return !1;
          }
        return !0;
      },
      oe = () => {
        var ve, je;
        const U = _();
        if (!d) return { canMerge: !1, canUnmerge: !1 };
        if (U.length === 0) return { canMerge: !1, canUnmerge: !1 };
        const ne =
            ((je =
              (ve = n == null ? void 0 : n.drawer) == null
                ? void 0
                : ve.Boxes) == null
              ? void 0
              : je.flat()) || [],
          ae = U.some(
            (Re) =>
              ne.filter(
                ($e) =>
                  $e.Slave &&
                  $e.MasterBox_Row === Re.Row &&
                  $e.MasterBox_Column === Re.Column
              ).length > 0
          ),
          $ = Math.min(d.startRow, d.endRow),
          H = Math.max(d.startRow, d.endRow),
          B = Math.min(d.startCol, d.endCol),
          Z = Math.max(d.startCol, d.endCol),
          le = ne.some(
            (Re) =>
              Re.Slave &&
              Re.Row >= $ &&
              Re.Row <= H &&
              Re.Column >= B &&
              Re.Column <= Z
          );
        return { canMerge: U.length > 1 && G(), canUnmerge: ae || le };
      },
      { canMerge: we, canUnmerge: me } = oe(),
      V = async () => {
        O(!0);
        try {
          const U = m.toLowerCase().trim();
          let ne = i;
          U &&
            (ne = ne.filter((ae) => {
              var $, H, B;
              return (
                (($ = ae.CODE) == null
                  ? void 0
                  : $.toLowerCase().includes(U)) ||
                ((H = ae.NAME) == null
                  ? void 0
                  : H.toLowerCase().includes(U)) ||
                ((B = ae.CHT_NAME) == null
                  ? void 0
                  : B.toLowerCase().includes(U))
              );
            })),
            P !== "N" && (ne = ne.filter((ae) => ae.DRUGKIND === P)),
            z(ne);
        } catch (U) {
          console.error("Search failed:", U), z([]);
        } finally {
          O(!1);
        }
      },
      he = async (U) => {
        var ae;
        if (!d || !((ae = n == null ? void 0 : n.drawer) != null && ae.Boxes))
          return;
        const ne = _();
        if (ne.length !== 0)
          try {
            const $ = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [`guid=${ne[0].GUID}`, `code=${U.CODE}`],
              Data: n.drawer,
            };
            console.log("🚀 發送更新藥品 API 請求:", $);
            const H = await De.request("/api/device/update_drawer_medcode", {
              method: "POST",
              body: JSON.stringify($),
            });
            if (
              (console.log("📡 更新藥品 API 回應:", H),
              H.Code === 200 && H.Data)
            ) {
              if (
                ((n.drawer = H.Data),
                H.Data.Boxes && (n.Boxes = H.Data.Boxes),
                console.log("✅ 藥品資料更新成功"),
                o)
              ) {
                const B = (le) => {
                    le.forEach((ge) => {
                      ge.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新資料"),
                        (ge.drawer = n.drawer),
                        n.Boxes && (ge.Boxes = n.Boxes)),
                        ge.contents &&
                          Array.isArray(ge.contents) &&
                          B(ge.contents),
                        ge.components &&
                          Array.isArray(ge.components) &&
                          B(ge.components);
                    });
                  },
                  Z = JSON.parse(JSON.stringify(o));
                B(Z), l(Z);
              }
              u(null), s();
            } else
              console.error("❌ 藥品更新失敗:", H),
                a(`藥品更新失敗：${H.Result || "未知錯誤"}`, "error");
          } catch ($) {
            console.error("💥 藥品更新 API 調用失敗:", $),
              a("藥品更新失敗：網路錯誤", "error");
          }
      },
      X = (U, ne, ae) => {
        ae.preventDefault(),
          ae.stopPropagation(),
          "touches" in ae &&
            (fe(Date.now()),
            v({ x: ae.touches[0].clientX, y: ae.touches[0].clientY })),
          A(!0),
          u({ startRow: U, startCol: ne, endRow: U, endCol: ne });
      },
      Ce = (U, ne) => {
        if (!S || !d) return;
        const ae = Math.min(d.startRow, U),
          $ = Math.max(d.startRow, U),
          H = Math.min(d.startCol, ne),
          B = Math.max(d.startCol, ne),
          Z = J(ae, $, H, B);
        Z &&
          u((le) =>
            le
              ? {
                  startRow: le.startRow,
                  startCol: le.startCol,
                  endRow: U >= le.startRow ? Z.maxRow : Z.minRow,
                  endCol: ne >= le.startCol ? Z.maxCol : Z.minCol,
                }
              : null
          );
      },
      ye = () => {
        if (S && (A(!1), d && n != null && n.Boxes)) {
          const U = Math.min(d.startRow, d.endRow),
            ne = Math.max(d.startRow, d.endRow),
            ae = Math.min(d.startCol, d.endCol),
            $ = Math.max(d.startCol, d.endCol),
            H = J(U, ne, ae, $);
          H &&
            u({
              startRow: H.minRow,
              startCol: H.minCol,
              endRow: H.maxRow,
              endCol: H.maxCol,
            });
        }
      },
      xe = () => {
        var U;
        !we ||
          !((U = n == null ? void 0 : n.drawer) != null && U.Boxes) ||
          !d ||
          R();
      },
      Ue = () => {
        var U;
        !me ||
          !((U = n == null ? void 0 : n.drawer) != null && U.Boxes) ||
          !d ||
          (console.log(d), te());
      },
      te = async () => {
        var U;
        if (!(!d || !((U = n == null ? void 0 : n.drawer) != null && U.Boxes)))
          try {
            const ne = Math.min(d.startRow, d.endRow),
              ae = Math.max(d.startRow, d.endRow),
              $ = Math.min(d.startCol, d.endCol),
              H = Math.max(d.startCol, d.endCol),
              Z = n.drawer.Boxes.flat().filter(
                (je) =>
                  je.Row >= ne &&
                  je.Row <= ae &&
                  je.Column >= $ &&
                  je.Column <= H
              ),
              le = [],
              ge = [];
            Z.forEach((je) => {
              le.push(je.Column.toString()), ge.push(je.Row.toString());
            });
            const ue = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [
                `SelectColumns=${le.join(",")}`,
                `SelectRows=${ge.join(",")}`,
              ],
              Data: { IP: n.ip, Boxes: n.Boxes },
            };
            console.log("🚀 發送 API 請求:", ue);
            const ve = await De.request("/api/device/separate_drawer_boxes", {
              method: "POST",
              body: JSON.stringify(ue),
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
                const je = (rt) => {
                    rt.forEach(($e) => {
                      $e.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新資料"),
                        ($e.drawer = n.drawer)),
                        $e.contents &&
                          Array.isArray($e.contents) &&
                          je($e.contents),
                        $e.components &&
                          Array.isArray($e.components) &&
                          je($e.components);
                    });
                  },
                  Re = JSON.parse(JSON.stringify(o));
                je(Re), l(Re);
              }
            } else
              console.error("❌ API 回應錯誤:", ve),
                a(`取消合併失敗：${ve.Result || "未知錯誤"}`, "error");
          } catch (ne) {
            console.error("💥 API 調用失敗:", ne),
              a("取消合併失敗：網路錯誤", "error");
          } finally {
            console.log("更新後資料：", n),
              console.log("更新後最深層資料：", o),
              u(null),
              s();
          }
      },
      R = async () => {
        var U;
        if (!(!d || !((U = n == null ? void 0 : n.drawer) != null && U.Boxes)))
          try {
            const ne = Math.min(d.startRow, d.endRow),
              ae = Math.max(d.startRow, d.endRow),
              $ = Math.min(d.startCol, d.endCol),
              H = Math.max(d.startCol, d.endCol),
              Z = n.drawer.Boxes.flat().filter(
                (je) =>
                  je.Row >= ne &&
                  je.Row <= ae &&
                  je.Column >= $ &&
                  je.Column <= H
              ),
              le = [],
              ge = [];
            Z.forEach((je) => {
              le.push(je.Column.toString()), ge.push(je.Row.toString());
            });
            const ue = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [
                `SelectColumns=${le.join(",")}`,
                `SelectRows=${ge.join(",")}`,
              ],
              Data: { IP: n.ip, Boxes: n.Boxes },
            };
            console.log("🚀 發送 API 請求:", ue);
            const ve = await De.request("/api/device/combine_drawer_boxes", {
              method: "POST",
              body: JSON.stringify(ue),
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
                const je = (rt) => {
                    rt.forEach(($e) => {
                      $e.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新資料"),
                        ($e.drawer = n.drawer)),
                        $e.contents &&
                          Array.isArray($e.contents) &&
                          je($e.contents),
                        $e.components &&
                          Array.isArray($e.components) &&
                          je($e.components);
                    });
                  },
                  Re = JSON.parse(JSON.stringify(o));
                je(Re), l(Re);
              }
            } else
              console.error("❌ API 回應錯誤:", ve),
                a(`取消合併失敗：${ve.Result || "未知錯誤"}`, "error");
          } catch (ne) {
            console.error("💥 API 調用失敗:", ne),
              a("取消合併失敗：網路錯誤", "error");
          } finally {
            console.log("更新後資料：", n),
              console.log("更新後最深層資料：", o),
              u(null),
              s();
          }
      },
      I = async () => {
        if (n)
          try {
            n.name = g;
            const U = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              Data: [n.drawer],
            };
            console.log("🚀 發送確認更新 API 請求:", U);
            const ne = await De.request("/api/device/update_epd583_drawers", {
              method: "POST",
              body: JSON.stringify(U),
            });
            if ((console.log("📡 確認更新 API 回應:", ne), ne.Code === 200)) {
              if (
                (console.log("✅ 抽屜資料更新成功"),
                a("抽屜資料更新成功", "success"),
                o)
              ) {
                const ae = (H) => {
                    H.forEach((B) => {
                      B.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新名稱"),
                        (B.name = n.name)),
                        B.contents &&
                          Array.isArray(B.contents) &&
                          ae(B.contents),
                        B.components &&
                          Array.isArray(B.components) &&
                          ae(B.components);
                    });
                  },
                  $ = JSON.parse(JSON.stringify(o));
                ae($), l($);
              }
              N(!1), p(null), s(), t();
            } else
              console.error("❌ 抽屜資料更新失敗:", ne),
                a(`抽屜資料更新失敗：${ne.Result || "未知錯誤"}`, "error");
          } catch (U) {
            console.error("💥 抽屜資料更新 API 調用失敗:", U),
              a("抽屜資料更新失敗：網路錯誤", "error");
          }
      },
      K = () => {
        var ge;
        if (
          !((ge = n == null ? void 0 : n.drawer) != null && ge.Boxes) ||
          n.drawer.Boxes.length === 0
        )
          return r.jsx("div", {
            className:
              "bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg py-12",
            children: r.jsxs("div", {
              className: "text-center",
              children: [
                r.jsx(Ju, {
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
          ne = (ue) => {
            if (ue.Slave) return { width: 1, height: 1 };
            const ve = U.filter(
              (Ve) =>
                Ve.Slave &&
                Ve.MasterBox_Row === ue.Row &&
                Ve.MasterBox_Column === ue.Column
            );
            if (ve.length === 0) return { width: 1, height: 1 };
            const je = [ue, ...ve],
              Re = Math.min(...je.map((Ve) => Ve.Row)),
              rt = Math.max(...je.map((Ve) => Ve.Row)),
              $e = Math.min(...je.map((Ve) => Ve.Column));
            return {
              width: Math.max(...je.map((Ve) => Ve.Column)) - $e + 1,
              height: rt - Re + 1,
            };
          },
          ae = Math.max(...U.map((ue) => ue.Row + 1 - 1)),
          $ = Math.max(...U.map((ue) => ue.Column + 1 - 1)),
          H = ae + 1,
          B = $ + 1,
          Z = Array(H)
            .fill(null)
            .map(() => Array(B).fill(!1)),
          le = {};
        return (
          U.forEach((ue) => {
            if (!ue.Slave) {
              const ve = ne(ue);
              (le[`${ue.Row},${ue.Column}`] = ue),
                (ue.calculatedWidth = ve.width),
                (ue.calculatedHeight = ve.height);
            }
          }),
          U.forEach((ue) => {
            if (
              !ue.Slave &&
              (ue.calculatedWidth > 1 || ue.calculatedHeight > 1)
            )
              for (let ve = ue.Row; ve < ue.Row + ue.calculatedHeight; ve++)
                for (
                  let je = ue.Column;
                  je < ue.Column + ue.calculatedWidth;
                  je++
                )
                  (ve !== ue.Row || je !== ue.Column) && (Z[ve][je] = !0);
          }),
          r.jsx("div", {
            className: "rounded-lg",
            children: r.jsx("table", {
              className: "w-full",
              children: r.jsx("tbody", {
                children: Array.from({ length: H }, (ue, ve) =>
                  r.jsx(
                    "tr",
                    {
                      children: Array.from({ length: B }, (je, Re) => {
                        if (Z[ve][Re]) return null;
                        const rt = `${ve},${Re}`,
                          $e = le[rt];
                        return $e
                          ? r.jsx(
                              "td",
                              {
                                className: `border border-gray-400 pt-1 pl-1 align-top cursor-pointer select-none ${
                                  j(ve, Re)
                                    ? "bg-blue-200"
                                    : "bg-white hover:bg-gray-100"
                                }`,
                                style: {
                                  width: `${100 / B}%`,
                                  minHeight: "40px",
                                  height: `${50 * $e.calculatedHeight}px`,
                                  maxHeight: `${50 * $e.calculatedHeight}px`,
                                },
                                colSpan: $e.calculatedWidth,
                                rowSpan: $e.calculatedHeight,
                                onMouseDown: (it) => X(ve, Re, it),
                                onMouseEnter: () => Ce(ve, Re),
                                onMouseUp: ye,
                                onTouchStart: (it) => X(ve, Re, it),
                                onTouchMove: (it) => {
                                  if ((it.preventDefault(), !S)) return;
                                  const Ve = it.touches[0],
                                    At = document.elementFromPoint(
                                      Ve.clientX,
                                      Ve.clientY
                                    ),
                                    Ft = At == null ? void 0 : At.closest("td");
                                  if (Ft) {
                                    const Vn = parseInt(
                                        Ft.getAttribute("data-row") || "0"
                                      ),
                                      Qt = parseInt(
                                        Ft.getAttribute("data-col") || "0"
                                      );
                                    Ce(Vn, Qt);
                                  }
                                },
                                onTouchEnd: ye,
                                "data-row": ve,
                                "data-col": Re,
                                children: r.jsx("div", {
                                  className: "h-full flex flex-col",
                                  children:
                                    $e.Code || $e.Name || $e.ChineseName
                                      ? r.jsxs(r.Fragment, {
                                          children: [
                                            $e.Code &&
                                              r.jsx("div", {
                                                className:
                                                  "text-xs font-mono text-gray-600",
                                                children: $e.Code,
                                              }),
                                            $e.Name &&
                                              r.jsx("div", {
                                                className:
                                                  "text-xs font-medium text-gray-900",
                                                children: $e.Name,
                                              }),
                                            $e.ChineseName &&
                                              r.jsx("div", {
                                                className:
                                                  "text-xs text-gray-700",
                                                children: $e.ChineseName,
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
                              Re
                            )
                          : r.jsx(
                              "td",
                              {
                                className: `border border-gray-300 p-2 align-top cursor-pointer select-none ${
                                  j(ve, Re)
                                    ? "border-1 border-blue-500 bg-blue-100"
                                    : "bg-gray-50 hover:bg-gray-100"
                                }`,
                                style: {
                                  width: `${100 / B}%`,
                                  minWidth: "80px",
                                  minHeight: "80px",
                                },
                                onMouseDown: (it) => X(ve, Re, it),
                                onMouseEnter: () => Ce(ve, Re),
                                onMouseUp: ye,
                                onTouchStart: (it) => X(ve, Re, it),
                                onTouchMove: (it) => {
                                  if ((it.preventDefault(), !S)) return;
                                  const Ve = it.touches[0],
                                    At = document.elementFromPoint(
                                      Ve.clientX,
                                      Ve.clientY
                                    ),
                                    Ft = At == null ? void 0 : At.closest("td");
                                  if (Ft) {
                                    const Vn = parseInt(
                                        Ft.getAttribute("data-row") || "0"
                                      ),
                                      Qt = parseInt(
                                        Ft.getAttribute("data-col") || "0"
                                      );
                                    Ce(Vn, Qt);
                                  }
                                },
                                onTouchEnd: ye,
                                "data-row": ve,
                                "data-col": Re,
                                children: r.jsx("div", {
                                  className:
                                    "h-full flex items-center justify-center text-gray-400 text-xs",
                                  children: c("status.notAdded"),
                                }),
                              },
                              Re
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
              onClick: w,
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
                        r.jsx(In, { className: "w-6 h-6 text-gray-600" }),
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
                      children: r.jsx(Je, { className: "w-6 h-6" }),
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
                              onChange: (U) => y(U.target.value),
                              disabled: !0,
                              placeholder:
                                (n == null ? void 0 : n.name) ||
                                c("placeholder.gridDrawName"),
                              className:
                                "px-2 py-1 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-base",
                            }),
                          ],
                        }),
                        r.jsx("div", { className: "space-y-1", children: K() }),
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
                                onClick: xe,
                                disabled: !we,
                                className: `px-4 py-2 rounded transition-colors ${
                                  we
                                    ? "bg-blue-600 text-white hover:bg-blue-700"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                }`,
                                children: c("button.merge"),
                              }),
                              r.jsx("button", {
                                onClick: Ue,
                                disabled: !me,
                                className: `px-4 py-2 rounded transition-colors ${
                                  me
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
                            const U = _(),
                              ne = U.find((ae) => !ae.Slave);
                            return ne && (ne.Code || ne.Name || ne.ChineseName)
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
                                          children: ne.Code || "-",
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
                                          children: ne.Name || "-",
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
                                          children: ne.ChineseName || "-",
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
                                      d && U.length > 0
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
                                  value: m,
                                  onChange: (U) => C(U.target.value),
                                  placeholder: c("placeholder.drugSearch"),
                                  className:
                                    "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                }),
                                r.jsxs("select", {
                                  value: P,
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
                                  onClick: V,
                                  disabled: E,
                                  className:
                                    "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                  children: [
                                    E &&
                                      r.jsx($t, {
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
                              children: E
                                ? r.jsxs("div", {
                                    className:
                                      "text-gray-500 text-center flex items-center justify-center h-full",
                                    children: [
                                      r.jsx($t, {
                                        className: "w-5 h-5 animate-spin mr-2",
                                      }),
                                      c("status.searching"),
                                    ],
                                  })
                                : T.length > 0
                                ? r.jsx("div", {
                                    className: "space-y-1",
                                    children: T.map((U, ne) =>
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
                                              onClick: () => he(U),
                                              className:
                                                "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                              title: c("button.add"),
                                              children: r.jsx(It, {
                                                className: "w-4 h-4",
                                              }),
                                            }),
                                          ],
                                        },
                                        U.GUID || ne
                                      )
                                    ),
                                  })
                                : r.jsx("div", {
                                    className:
                                      "text-gray-500 text-center flex items-center justify-center h-full",
                                    children: c(
                                      m || P !== "N"
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
                  onMouseUp: ye,
                  onMouseLeave: ye,
                  onTouchEnd: ye,
                  onTouchCancel: ye,
                }),
              ],
            }),
          ],
        });
  },
  Rh = () => {
    var z;
    const {
        addParentContainerModalOpen: e,
        closeAddParentContainerModal: t,
        selectedDepartmentForAdd: n,
        showNotification: s,
        setSidebarOpen: o,
        addParentContainerToLocalData: l,
      } = ot(),
      { t: a } = kt(),
      [i, c] = f.useState(null),
      [g, y] = f.useState(0),
      [h, p] = f.useState(0),
      [b, N] = f.useState(!1);
    f.useEffect(() => {
      e && (c(null), y(0), p(0), N(!1));
    }, [e]),
      f.useEffect(() => {
        i && (y(i.row), p(i.col));
      }, [i]);
    const S = () => {
        const E = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((O) => {
              O.type === "parent_container" &&
                O.gird_position &&
                E.add(O.gird_position);
            }),
          E
        );
      },
      A = () => {
        const E = S(),
          O = [];
        if (E.size === 0) return O.push({ row: 0, col: 0 }), O;
        const se = [];
        E.forEach((M) => {
          const [v, F] = M.split(",").map(Number);
          se.push({ row: v, col: F });
        });
        const fe = new Set();
        return (
          se.forEach(({ row: M, col: v }) => {
            fe.add(`${M},${v + 1}`),
              fe.add(`${M + 1},${v}`),
              v > 0 && fe.add(`${M},${v - 1}`),
              M > 0 && fe.add(`${M - 1},${v}`);
          }),
          fe.forEach((M) => {
            if (!E.has(M)) {
              const [v, F] = M.split(",").map(Number);
              v >= 0 && F >= 0 && O.push({ row: v, col: F });
            }
          }),
          E.has("0,1") ||
            O.some((v) => v.row === 0 && v.col === 1) ||
            O.push({ row: 0, col: 1 }),
          E.has("1,0") ||
            O.some((v) => v.row === 1 && v.col === 0) ||
            O.push({ row: 1, col: 0 }),
          O.sort((M, v) => (M.row === v.row ? M.col - v.col : M.row - v.row))
        );
      },
      d = (E) => {
        c(E);
      },
      u = (E) => {
        y(E), c({ row: E, col: h });
      },
      m = (E) => {
        p(E), c({ row: g, col: E });
      },
      C = i && !S().has(`${i.row},${i.col}`) && i.row >= 0 && i.col >= 0,
      P = async () => {
        if (!(!i || !n || !C)) {
          N(!0);
          try {
            const E = `${i.row},${i.col}`;
            console.log(n);
            const O = await De.addMedMapSection(n.GUID, E, n.name, n.type);
            if (O.Code === 200) {
              const se = {
                GUID: O.Data.GUID,
                Master_GUID: O.Data.Master_GUID,
                gird_position: O.Data.position,
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
              l(n.GUID, se), s("新增成功", "success"), t(), o(!1);
            } else s(`新增失敗：${O.Result || "未知錯誤"}`, "error");
          } catch (E) {
            console.error("Add parent container failed:", E),
              s("新增失敗：網路錯誤", "error");
          } finally {
            N(!1);
          }
        }
      },
      D = () => {
        t();
      },
      T = () => {
        const E = S(),
          O = A(),
          se = [...E]
            .map((k) => {
              const [_, J] = k.split(",").map(Number);
              return { row: _, col: J };
            })
            .concat(O);
        se.length === 0 && se.push({ row: 0, col: 0 });
        const fe = Math.max(...se.map((k) => k.row)),
          M = Math.max(...se.map((k) => k.col)),
          v = Math.min(...se.map((k) => k.row)),
          F = Math.min(...se.map((k) => k.col)),
          w = fe - v + 1,
          j = M - F + 1;
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
                style: { gridTemplateColumns: `repeat(${j}, 1fr)` },
                children: Array.from({ length: w * j }, (k, _) => {
                  const J = Math.floor(_ / j) + v,
                    G = (_ % j) + F,
                    oe = `${J},${G}`,
                    we = E.has(oe),
                    me = O.some((he) => he.row === J && he.col === G),
                    V =
                      (i == null ? void 0 : i.row) === J &&
                      (i == null ? void 0 : i.col) === G;
                  return r.jsx(
                    "button",
                    {
                      onClick: () => me && d({ row: J, col: G }),
                      disabled: we || !me,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      we
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : V
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : me
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: we ? "已占用" : me ? "可選擇" : "不可用",
                      children: we ? "占用" : `${J},${G}`,
                    },
                    oe
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
              onClick: D,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh", maxWidth: "800px" },
              onClick: (E) => E.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(It, { className: "w-6 h-6 text-green-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "新增櫃體",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: D,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Je, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 px-6 py-4 overflow-y-auto",
                  children: r.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      T(),
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
                                    value: g,
                                    onChange: (E) =>
                                      u(parseInt(E.target.value) || 0),
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
                                    value: h,
                                    onChange: (E) =>
                                      m(parseInt(E.target.value) || 0),
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
                                C
                                  ? "bg-green-50 text-green-700 border border-green-200"
                                  : "bg-red-50 text-red-700 border border-red-200"
                              }`,
                              children: C
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
                                  ((z = n == null ? void 0 : n.contents) == null
                                    ? void 0
                                    : z.filter(
                                        (E) => E.type === "parent_container"
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
                      onClick: D,
                      disabled: b,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: a("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: P,
                      disabled: !C || b,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        b && r.jsx($t, { className: "w-4 h-4 animate-spin" }),
                        r.jsx("span", { children: b ? "新增中..." : "新增" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  },
  Pc = [
    {
      value: "dispensing_shelves",
      label: "藥盒層架",
      icon: r.jsx(ph, { className: "w-5 h-5" }),
      isShelf: !0,
    },
    {
      value: "store_shelves",
      label: "藥品層架",
      icon: r.jsx(oh, { className: "w-5 h-5" }),
      isShelf: !0,
    },
    {
      value: "list_draw",
      label: "清單抽屜",
      icon: r.jsx(ja, { className: "w-5 h-5" }),
      isShelf: !1,
    },
    {
      value: "grid_draw",
      label: "格線抽屜",
      icon: r.jsx(Ju, { className: "w-5 h-5" }),
      isShelf: !1,
    },
  ],
  $h = () => {
    var J;
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
      } = ot(),
      { t: g } = kt(),
      [y, h] = f.useState("dispensing_shelves"),
      [p, b] = f.useState("1"),
      [N, S] = f.useState("1"),
      [A, d] = f.useState(""),
      [u, m] = f.useState(null),
      [C, P] = f.useState(0),
      [D, T] = f.useState(0),
      [z, E] = f.useState(!1);
    f.useEffect(() => {
      e &&
        (h("dispensing_shelves"),
        b("1"),
        S("1"),
        d(""),
        m(null),
        P(0),
        T(0),
        E(!1));
    }, [e]),
      f.useEffect(() => {
        u && (P(u.row), T(u.col));
      }, [u]);
    const O = () => {
        const G = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((oe) => {
              oe.gird_position && G.add(oe.gird_position);
            }),
          G
        );
      },
      se = () => {
        const G = O(),
          oe = [];
        if (G.size === 0) return oe.push({ row: 0, col: 0 }), oe;
        const we = [];
        G.forEach((V) => {
          const [he, X] = V.split(",").map(Number);
          we.push({ row: he, col: X });
        });
        const me = new Set();
        return (
          we.forEach(({ row: V, col: he }) => {
            me.add(`${V},${he + 1}`),
              me.add(`${V + 1},${he}`),
              he > 0 && me.add(`${V},${he - 1}`),
              V > 0 && me.add(`${V - 1},${he}`);
          }),
          me.forEach((V) => {
            if (!G.has(V)) {
              const [he, X] = V.split(",").map(Number);
              he >= 0 && X >= 0 && oe.push({ row: he, col: X });
            }
          }),
          G.has("0,1") ||
            oe.some((he) => he.row === 0 && he.col === 1) ||
            oe.push({ row: 0, col: 1 }),
          G.has("1,0") ||
            oe.some((he) => he.row === 1 && he.col === 0) ||
            oe.push({ row: 1, col: 0 }),
          oe.sort((V, he) =>
            V.row === he.row ? V.col - he.col : V.row - he.row
          )
        );
      },
      fe = (G) => {
        m(G);
      },
      M = (G) => {
        P(G), m({ row: G, col: D });
      },
      v = (G) => {
        T(G), m({ row: C, col: G });
      },
      F = u && !O().has(`${u.row},${u.col}`) && u.row >= 0 && u.col >= 0,
      w = async () => {
        if (!(!u || !n || !F)) {
          E(!0);
          try {
            const G = `${u.row},${u.col}`,
              oe = Pc.find((me) => me.value === y);
            let we;
            oe != null && oe.isShelf
              ? (we = await De.addMedMapShelf({
                  Master_GUID: n.GUID,
                  position: G,
                  width: p,
                  height: N,
                  ip_light: A,
                  type: y,
                  serverName: n.name,
                  serverType: n.type,
                }))
              : (we = await De.addMedMapDrawer({
                  Master_GUID: n.GUID,
                  position: G,
                  width: p,
                  height: N,
                  ip_drawer: A,
                  type: y,
                  serverName: n.name,
                  serverType: n.type,
                })),
              we.Code === 200
                ? (a("新增成功", "success"), t(), c(!1), await j())
                : a(`新增失敗：${we.Result || "未知錯誤"}`, "error");
          } catch (G) {
            console.error("Add container failed:", G),
              a("新增失敗：網路錯誤", "error");
          } finally {
            E(!1);
          }
        }
      },
      j = async () => {
        if (!s) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", s), l(!0);
        try {
          const G = await De.getMedMapByDepartment(s);
          if (G.Code === 200 && G.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const oe = Et.convertMedMapApiToFakeData(G.Data);
            if (!Et.validateConvertedData(oe)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(oe), console.log("✅ 藥品地圖資料已更新");
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
      k = () => {
        t();
      },
      _ = () => {
        const G = O(),
          oe = se(),
          we = [...G]
            .map((xe) => {
              const [Ue, te] = xe.split(",").map(Number);
              return { row: Ue, col: te };
            })
            .concat(oe);
        we.length === 0 && we.push({ row: 0, col: 0 });
        const me = Math.max(...we.map((xe) => xe.row)),
          V = Math.max(...we.map((xe) => xe.col)),
          he = Math.min(...we.map((xe) => xe.row)),
          X = Math.min(...we.map((xe) => xe.col)),
          Ce = me - he + 1,
          ye = V - X + 1;
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
                style: { gridTemplateColumns: `repeat(${ye}, 1fr)` },
                children: Array.from({ length: Ce * ye }, (xe, Ue) => {
                  const te = Math.floor(Ue / ye) + he,
                    R = (Ue % ye) + X,
                    I = `${te},${R}`,
                    K = G.has(I),
                    U = oe.some((ae) => ae.row === te && ae.col === R),
                    ne =
                      (u == null ? void 0 : u.row) === te &&
                      (u == null ? void 0 : u.col) === R;
                  return r.jsx(
                    "button",
                    {
                      onClick: () => U && fe({ row: te, col: R }),
                      disabled: K || !U,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      K
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : ne
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : U
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: K ? "已占用" : U ? "可選擇" : "不可用",
                      children: K ? "占用" : `${te},${R}`,
                    },
                    I
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
              onClick: k,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh", maxWidth: "1000px" },
              onClick: (G) => G.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(It, { className: "w-6 h-6 text-green-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "新增層架/抽屜",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: k,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Je, { className: "w-6 h-6" }),
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
                            children: Pc.map((G) =>
                              r.jsxs(
                                "label",
                                {
                                  className: `flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                    y === G.value
                                      ? "border-blue-500 bg-blue-50"
                                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                  }`,
                                  children: [
                                    r.jsx("input", {
                                      type: "radio",
                                      name: "containerType",
                                      value: G.value,
                                      checked: y === G.value,
                                      onChange: (oe) => h(oe.target.value),
                                      className:
                                        "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 hidden",
                                    }),
                                    r.jsxs("div", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        G.icon,
                                        r.jsx("span", {
                                          className:
                                            "font-medium text-gray-900",
                                          children: G.label,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                G.value
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
                                onChange: (G) => b(G.target.value),
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
                                value: N,
                                onChange: (G) => S(G.target.value),
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
                            value: A,
                            onChange: (G) => d(G.target.value),
                            placeholder: "請輸入 IP 位址",
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                          }),
                        ],
                      }),
                      _(),
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
                                    value: C,
                                    onChange: (G) =>
                                      M(parseInt(G.target.value) || 0),
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
                                    value: D,
                                    onChange: (G) =>
                                      v(parseInt(G.target.value) || 0),
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
                                F
                                  ? "bg-green-50 text-green-700 border border-green-200"
                                  : "bg-red-50 text-red-700 border border-red-200"
                              }`,
                              children: F
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
                                  ((J = n == null ? void 0 : n.contents) == null
                                    ? void 0
                                    : J.length) || 0,
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
                      onClick: k,
                      disabled: z,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: g("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: w,
                      disabled: !F || z,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        z && r.jsx($t, { className: "w-4 h-4 animate-spin" }),
                        r.jsx("span", { children: z ? "新增中..." : "新增" }),
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
    var z;
    const {
        addSubContainerModalOpen: e,
        closeAddSubContainerModal: t,
        selectedParentContainerForAdd: n,
        showNotification: s,
        setSidebarOpen: o,
        addSubContainerToLocalData: l,
      } = ot(),
      { t: a } = kt(),
      [i, c] = f.useState(null),
      [g, y] = f.useState(0),
      [h, p] = f.useState(0),
      [b, N] = f.useState(!1);
    f.useEffect(() => {
      e && (c(null), y(0), p(0), N(!1));
    }, [e]),
      f.useEffect(() => {
        i && (y(i.row), p(i.col));
      }, [i]);
    const S = () => {
        const E = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((O) => {
              O.type === "sub_container" &&
                O.gird_position &&
                E.add(O.gird_position);
            }),
          E
        );
      },
      A = () => {
        const E = S(),
          O = [];
        if (E.size === 0) return O.push({ row: 0, col: 0 }), O;
        const se = [];
        E.forEach((M) => {
          const [v, F] = M.split(",").map(Number);
          se.push({ row: v, col: F });
        });
        const fe = new Set();
        return (
          se.forEach(({ row: M, col: v }) => {
            fe.add(`${M},${v + 1}`),
              fe.add(`${M + 1},${v}`),
              v > 0 && fe.add(`${M},${v - 1}`),
              M > 0 && fe.add(`${M - 1},${v}`);
          }),
          fe.forEach((M) => {
            if (!E.has(M)) {
              const [v, F] = M.split(",").map(Number);
              v >= 0 && F >= 0 && O.push({ row: v, col: F });
            }
          }),
          E.has("0,1") ||
            O.some((v) => v.row === 0 && v.col === 1) ||
            O.push({ row: 0, col: 1 }),
          E.has("1,0") ||
            O.some((v) => v.row === 1 && v.col === 0) ||
            O.push({ row: 1, col: 0 }),
          O.sort((M, v) => (M.row === v.row ? M.col - v.col : M.row - v.row))
        );
      },
      d = (E) => {
        c(E);
      },
      u = (E) => {
        y(E), c({ row: E, col: h });
      },
      m = (E) => {
        p(E), c({ row: g, col: E });
      },
      C = i && !S().has(`${i.row},${i.col}`) && i.row >= 0 && i.col >= 0,
      P = async () => {
        if (!(!i || !n || !C)) {
          N(!0);
          try {
            const E = `${i.row},${i.col}`,
              O = await De.addSubSection(n.GUID, E);
            if (O.Code === 200) {
              const se = {
                GUID: O.Data.GUID,
                Master_GUID: O.Data.Master_GUID,
                name: "",
                type: "sub_container",
                class: 2,
                gird_position: O.Data.position,
                contents: [],
                serverName: n.serverName,
                serverType: n.serverType,
                oriMaxCol: 0,
              };
              l(n.GUID, se), s("新增成功", "success"), t(), o(!1);
            } else s(`新增失敗：${O.Result || "未知錯誤"}`, "error");
          } catch (E) {
            console.error("Add sub container failed:", E),
              s("新增失敗：網路錯誤", "error");
          } finally {
            N(!1);
          }
        }
      },
      D = () => {
        t();
      },
      T = () => {
        const E = S(),
          O = A(),
          se = [...E]
            .map((k) => {
              const [_, J] = k.split(",").map(Number);
              return { row: _, col: J };
            })
            .concat(O);
        se.length === 0 && se.push({ row: 0, col: 0 });
        const fe = Math.max(...se.map((k) => k.row)),
          M = Math.max(...se.map((k) => k.col)),
          v = Math.min(...se.map((k) => k.row)),
          F = Math.min(...se.map((k) => k.col)),
          w = fe - v + 1,
          j = M - F + 1;
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
                style: { gridTemplateColumns: `repeat(${j}, 1fr)` },
                children: Array.from({ length: w * j }, (k, _) => {
                  const J = Math.floor(_ / j) + v,
                    G = (_ % j) + F,
                    oe = `${J},${G}`,
                    we = E.has(oe),
                    me = O.some((he) => he.row === J && he.col === G),
                    V =
                      (i == null ? void 0 : i.row) === J &&
                      (i == null ? void 0 : i.col) === G;
                  return r.jsx(
                    "button",
                    {
                      onClick: () => me && d({ row: J, col: G }),
                      disabled: we || !me,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      we
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : V
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : me
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: we ? "已占用" : me ? "可選擇" : "不可用",
                      children: we ? "占用" : `${J},${G}`,
                    },
                    oe
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
              onClick: D,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh", maxWidth: "800px" },
              onClick: (E) => E.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(It, { className: "w-6 h-6 text-green-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "新增虛擬容器",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: D,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Je, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 px-6 py-4 overflow-y-auto",
                  children: r.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      T(),
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
                                    value: g,
                                    onChange: (E) =>
                                      u(parseInt(E.target.value) || 0),
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
                                    value: h,
                                    onChange: (E) =>
                                      m(parseInt(E.target.value) || 0),
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
                                C
                                  ? "bg-green-50 text-green-700 border border-green-200"
                                  : "bg-red-50 text-red-700 border border-red-200"
                              }`,
                              children: C
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
                                  ((z = n == null ? void 0 : n.contents) == null
                                    ? void 0
                                    : z.filter(
                                        (E) => E.type === "sub_container"
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
                      onClick: D,
                      disabled: b,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: a("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: P,
                      disabled: !C || b,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        b && r.jsx($t, { className: "w-4 h-4 animate-spin" }),
                        r.jsx("span", { children: b ? "新增中..." : "新增" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  },
  Oh = ({ isOpen: e, onClose: t, storeShelf: n }) => {
    const {
        showNotification: s,
        medicineList: o,
        isLoadingMedicines: l,
        addStockToShelf: a,
        selectedStockItemForEdit: i,
        storeItemModalMode: c,
        updateStockInShelf: g,
      } = ot(),
      [y, h] = f.useState(""),
      [p, b] = f.useState(""),
      [N, S] = f.useState(""),
      [A, d] = f.useState(""),
      [u, m] = f.useState([]),
      [C, P] = f.useState([]),
      [D, T] = f.useState(""),
      [z, E] = f.useState(""),
      [O, se] = f.useState(""),
      [fe, M] = f.useState(""),
      [v, F] = f.useState("EPD290"),
      [w, j] = f.useState(null),
      [k, _] = f.useState([]),
      [J, G] = f.useState(""),
      [oe, we] = f.useState(!1),
      me = f.useRef(null);
    f.useEffect(() => {
      if (e && c === "edit" && i) {
        h(i.code || ""), b(i.name || ""), S(""), d(i.material_no || "");
        const I = i.lot || [],
          K = i.expiry_date || [],
          U = i.qty || [],
          ne = [];
        if (I.length > 0 || K.length > 0 || U.length > 0) {
          const H = Math.max(I.length, K.length, U.length),
            B = [];
          for (let Z = 0; Z < H; Z++) {
            const le = K[Z] || "";
            let ge = "";
            le && (ge = le.split("T")[0]),
              (ge = ge.replace(/\//g, "-")),
              B.push({
                id: `batch_${Date.now()}_${Z}`,
                lot: I[Z] || "",
                expiryDate: ge,
                qty: String(U[Z] || ""),
              }),
              ge && ne.push(ge);
          }
          m(B), P(ne), m([]);
        } else P([]);
        const $ = (i.location || "0,0").split(",");
        T($[0] || "0"),
          E($[1] || "0"),
          se(i.led_index || ""),
          M(i.ip || ""),
          F(i.device_type || "EPD290");
      } else if (e && c === "add") {
        if (
          (h(""),
          b(""),
          S(""),
          d(""),
          m([]),
          P([]),
          se(""),
          M(""),
          F("EPD290"),
          n && n.medMapStock && n.medMapStock.length > 0)
        ) {
          const I = n.medMapStock.map((U) => {
            const ae = (U.location || "0,0").split(",");
            return Number(ae[0] || "0");
          });
          let K = 0;
          for (; I.includes(K); ) K++;
          T(String(K));
        } else T("0");
        E("0");
      }
    }, [e, c, i, n]),
      f.useEffect(() => {
        const I = (K) => {
          me.current && !me.current.contains(K.target) && j(null);
        };
        return (
          document.addEventListener("mousedown", I),
          () => {
            document.removeEventListener("mousedown", I);
          }
        );
      }, []);
    const V = (I, K) => {
        if (!K.trim()) {
          _([]);
          return;
        }
        const U = K.toLowerCase(),
          ne = o.filter((ae) => {
            var $, H, B, Z;
            switch (I) {
              case "code":
                return ($ = ae.CODE) == null
                  ? void 0
                  : $.toLowerCase().includes(U);
              case "name":
                return (H = ae.NAME) == null
                  ? void 0
                  : H.toLowerCase().includes(U);
              case "chineseName":
                return (B = ae.CHT_NAME) == null
                  ? void 0
                  : B.toLowerCase().includes(U);
              case "skdiacode":
                return (Z = ae.SKDIACODE) == null
                  ? void 0
                  : Z.toLowerCase().includes(U);
              default:
                return !1;
            }
          });
        _(ne.slice(0, 50));
      },
      he = (I, K) => {
        switch ((j(I), I)) {
          case "code":
            h(K);
            break;
          case "name":
            b(K);
            break;
          case "chineseName":
            S(K);
            break;
          case "skdiacode":
            d(K);
            break;
        }
        V(I, K);
      },
      X = (I, K) => {
        switch (K) {
          case "code":
            h(I.CODE || ""),
              b(I.NAME || ""),
              S(I.CHT_NAME || ""),
              d(I.SKDIACODE || "");
            break;
          case "name":
            h(I.CODE || ""),
              b(I.NAME || ""),
              S(I.CHT_NAME || ""),
              d(I.SKDIACODE || "");
            break;
          case "chineseName":
            h(I.CODE || ""),
              b(I.NAME || ""),
              S(I.CHT_NAME || ""),
              d(I.SKDIACODE || "");
            break;
          case "skdiacode":
            h(I.CODE || ""),
              b(I.NAME || ""),
              S(I.CHT_NAME || ""),
              d(I.SKDIACODE || "");
            break;
        }
        G(I.GUID), j(null), _([]);
      },
      Ce = () => {
        const I = {
          id: `batch_${Date.now()}`,
          lot: "",
          expiryDate: "",
          qty: "",
        };
        m([...u, I]);
      },
      ye = (I) => {
        m(u.filter((K) => K.id !== I));
      },
      xe = (I, K, U) => {
        m(u.map((ne) => (ne.id === I ? { ...ne, [K]: U } : ne)));
      },
      Ue = async () => {
        var ne;
        if (!y || !p) {
          s("請選擇藥品", "error");
          return;
        }
        if (!n || !n.GUID) {
          s("層架資訊錯誤", "error");
          return;
        }
        const I = [],
          K = [],
          U = [];
        u.forEach((ae) => {
          I.push(ae.lot || "");
          let $ = "";
          ae.expiryDate && ($ = `${ae.expiryDate}`),
            K.push($),
            U.push(ae.qty ? `${Number(ae.qty)}` : "0");
        });
        try {
          if (c === "edit" && i) {
            const ae = {
                GUID: i.GUID,
                code: y,
                device_type: v,
                expiry_date: K,
                ip_light: fe || "",
                ip: fe || "",
                led_index: O || "",
                location: `${D || "0"},${z || "0"}`,
                lot: I,
                material_no: A || "",
                name: p,
                qty: U,
                shelf_guid: n.GUID,
              },
              $ = await De.updateStock([ae]);
            if ($.Code === 200) {
              g(n.GUID, i.GUID, ae), console.log("檢查有無貨物批次被刪除");
              const H = C.filter((B) => !K.includes(B));
              if ((console.log(H), H.length > 0)) {
                console.log("🗑️ 檢測到被刪除的批次效期:", H);
                let B = "";
                try {
                  i.Value &&
                    ((B = JSON.parse(i.Value).GUID || ""),
                    console.log("📦 從 Value 欄位解析出的 GUID:", B));
                } catch (Z) {
                  console.error("❌ 解析 Value 欄位失敗:", Z);
                }
                if (B) {
                  for (const Z of H)
                    try {
                      console.log(`🗑️ 正在刪除批次，GUID: ${B}, 效期: ${Z}`);
                      const le = await De.stockDeleteValidityPeriod(B, Z);
                      le.Code === 200
                        ? console.log(`✅ 成功刪除批次效期: ${Z}`)
                        : console.warn(
                            `⚠️ 刪除批次失敗 (效期: ${Z}):`,
                            le.Result
                          );
                    } catch (le) {
                      console.error(`❌ 刪除批次時發生錯誤 (效期: ${Z}):`, le);
                    }
                  s(`更新貨物成功，已刪除 ${H.length} 個批次`, "success");
                } else
                  console.warn("⚠️ 無法取得 Value GUID，跳過批次刪除"),
                    s("更新貨物成功（但無法刪除批次）", "success");
              } else s("更新貨物成功", "success");
              R();
            } else s($.Result || "更新貨物失敗", "error");
          } else {
            const ae = {
                code: y,
                device_type: v,
                expiry_date: K,
                ip_light: fe || "",
                ip: fe || "",
                led_index: O || "",
                location: `${D || "0"},${z || "0"}`,
                lot: I,
                material_no: A || "",
                name: p,
                qty: U,
                shelf_guid: n.GUID,
              },
              $ = await De.addStock([ae]);
            $.Code === 200
              ? (a(n.GUID, {
                  GUID:
                    ((ne = $.Data) == null ? void 0 : ne.GUID) ||
                    `stock_${Date.now()}`,
                  ...ae,
                }),
                s("新增貨物成功", "success"),
                R())
              : s($.Result || "新增貨物失敗", "error");
          }
        } catch (ae) {
          console.error("貨物操作錯誤:", ae),
            s(
              c === "edit"
                ? "更新貨物失敗，請稍後再試"
                : "新增貨物失敗，請稍後再試",
              "error"
            );
        }
      },
      te = (I, K) => {
        console.log("📸 掃描成功，填入藥品資料:", K),
          h(K[0].CODE || K[0].code || ""),
          b(K[0].NAME || K[0].name || ""),
          S(K[0].CHT_NAME || K[0].cht_name || ""),
          d(K[0].SKDIACODE || K[0].skdiacode || K[0].material_no || ""),
          G(K[0].GUID || ""),
          we(!1),
          s("已自動填入藥品資料", "success");
      },
      R = () => {
        h(""),
          b(""),
          S(""),
          d(""),
          m([]),
          P([]),
          T(""),
          E(""),
          se(""),
          M(""),
          F("EPD290"),
          G(""),
          _([]),
          j(null),
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
                      onClick: R,
                      className:
                        "p-2 hover:bg-gray-100 rounded-full transition-colors",
                      children: r.jsx(Je, { className: "w-5 h-5" }),
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
                                    onClick: () => we(!0),
                                    className:
                                      "hover:bg-gray-100 rounded-lg transition-colors p-2",
                                    title: "掃描條碼",
                                    children: r.jsx(Ur, {
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
                                    ref: w === "code" ? me : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "藥碼",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: y,
                                        onChange: (I) =>
                                          he("code", I.target.value),
                                        onFocus: () => j("code"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入藥品代碼",
                                      }),
                                      w === "code" &&
                                        k.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: k.map((I) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () => X(I, "code"),
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
                                                        children: I.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: I.NAME,
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
                                                        children: I.CHT_NAME,
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
                                                          I.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              I.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    className: "relative",
                                    ref: w === "name" ? me : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "藥名",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: p,
                                        onChange: (I) =>
                                          he("name", I.target.value),
                                        onFocus: () => j("name"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入藥品名稱",
                                      }),
                                      w === "name" &&
                                        k.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: k.map((I) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () => X(I, "name"),
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
                                                        children: I.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: I.NAME,
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
                                                        children: I.CHT_NAME,
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
                                                          I.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              I.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    className: "relative",
                                    ref: w === "chineseName" ? me : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "中文名",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: N,
                                        onChange: (I) =>
                                          he("chineseName", I.target.value),
                                        onFocus: () => j("chineseName"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入中文名稱",
                                      }),
                                      w === "chineseName" &&
                                        k.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: k.map((I) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () =>
                                                  X(I, "chineseName"),
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
                                                        children: I.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: I.NAME,
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
                                                        children: I.CHT_NAME,
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
                                                          I.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              I.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    className: "relative",
                                    ref: w === "skdiacode" ? me : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "料號",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: A,
                                        onChange: (I) =>
                                          he("skdiacode", I.target.value),
                                        onFocus: () => j("skdiacode"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入料號",
                                      }),
                                      w === "skdiacode" &&
                                        k.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: k.map((I) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () =>
                                                  X(I, "skdiacode"),
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
                                                        children: I.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: I.NAME,
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
                                                        children: I.CHT_NAME,
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
                                                          I.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              I.GUID
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
                                    onClick: Ce,
                                    className:
                                      "flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",
                                    title: "新增批次",
                                    children: [
                                      r.jsx(It, { className: "w-4 h-4" }),
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
                                    children: u.map((I, K) =>
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
                                                  children: ["批次 ", K + 1],
                                                }),
                                                r.jsx("button", {
                                                  onClick: () => ye(I.id),
                                                  className:
                                                    "p-1 text-red-600 hover:bg-red-50 rounded transition-colors",
                                                  title: "刪除批次",
                                                  children: r.jsx(Sr, {
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
                                                      value: I.lot,
                                                      onChange: (U) =>
                                                        xe(
                                                          I.id,
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
                                                      value: I.expiryDate,
                                                      onChange: (U) =>
                                                        xe(
                                                          I.id,
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
                                                      value: I.qty,
                                                      onChange: (U) =>
                                                        xe(
                                                          I.id,
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
                                        I.id
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
                                        value: D,
                                        onChange: (I) => T(I.target.value),
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
                                        value: z,
                                        onChange: (I) => E(I.target.value),
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
                                        value: O,
                                        onChange: (I) => se(I.target.value),
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
                                        value: fe,
                                        onChange: (I) => M(I.target.value),
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
                                        value: v,
                                        onChange: (I) => F(I.target.value),
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
                      onClick: R,
                      className:
                        "px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
                      children: "取消",
                    }),
                    r.jsx("button", {
                      onClick: Ue,
                      disabled: l || o.length === 0,
                      className:
                        "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400",
                      children: c === "edit" ? "修改" : "新增",
                    }),
                  ],
                }),
              ],
            }),
            r.jsx(tl, {
              isOpen: oe,
              onClose: () => we(!1),
              onScanSuccess: te,
              mode: "set_store_med_mode",
            }),
          ],
        })
      : null;
  },
  Uh = ({ isOpen: e, onClose: t }) => {
    const {
        selectedDepartmentType: n,
        apiDepartmentData: s,
        allDepartmentsList: o,
        showNotification: l,
        triggerRefresh: a,
        reloadMedMapData: i,
      } = ot(),
      [c, g] = f.useState(null),
      [y, h] = f.useState(""),
      [p, b] = f.useState(!1),
      N = () => (s ? s.map((T) => T.name) : []),
      S = () => (!n || !o ? [] : o.filter((T) => T["department_type "] === n)),
      A = () => {
        const T = N();
        return S().filter((E) => !T.includes(E.name));
      },
      d = () => (s ? s.map((T) => T.gird_position) : []),
      u = () => {
        const T = d(),
          z = [];
        for (let E = 0; E < 10; E++)
          for (let O = 0; O < 10; O++) {
            const se = `${E},${O}`;
            T.includes(se) || z.push(se);
          }
        return z.slice(0, 20);
      };
    f.useEffect(() => {
      e && (g(null), h(""));
    }, [e]);
    const m = async () => {
        if (!c) {
          l("請選擇部門", "error");
          return;
        }
        if (!y) {
          l("請選擇位置", "error");
          return;
        }
        if (!n) {
          l("部門分類資訊錯誤", "error");
          return;
        }
        b(!0);
        try {
          const T = await De.addMedMap(c.name, c.type, y);
          T.Code === 200
            ? (l("新增部門成功", "success"), await i(), C())
            : l(T.Result || "新增部門失敗", "error");
        } catch (T) {
          console.error("新增部門錯誤:", T),
            l("新增部門失敗，請稍後再試", "error");
        } finally {
          b(!1);
        }
      },
      C = () => {
        g(null), h(""), t();
      };
    if (!e) return null;
    const P = A(),
      D = u();
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
                onClick: C,
                className:
                  "p-2 hover:bg-gray-100 rounded-full transition-colors",
                children: r.jsx(Je, { className: "w-5 h-5" }),
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
                  P.length === 0
                    ? r.jsx("div", {
                        className: "text-center py-8",
                        children: r.jsx("p", {
                          className: "text-gray-600",
                          children: "所有部門都已新增",
                        }),
                      })
                    : r.jsx("div", {
                        className: "space-y-2",
                        children: P.map((T) =>
                          r.jsxs(
                            "label",
                            {
                              className: `flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                (c == null ? void 0 : c.name) === T.name
                                  ? "border-blue-500 bg-blue-50"
                                  : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                              }`,
                              children: [
                                r.jsx("input", {
                                  type: "radio",
                                  name: "department",
                                  value: T.name,
                                  checked:
                                    (c == null ? void 0 : c.name) === T.name,
                                  onChange: () => g(T),
                                  className:
                                    "w-4 h-4 text-blue-600 focus:ring-blue-500",
                                }),
                                r.jsxs("div", {
                                  className: "ml-3",
                                  children: [
                                    r.jsx("div", {
                                      className:
                                        "text-sm font-medium text-gray-900",
                                      children: T.name,
                                    }),
                                    r.jsx("div", {
                                      className: "text-xs text-gray-500",
                                      children: T.type,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            T.name
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
                    D.length === 0
                      ? r.jsx("div", {
                          className: "text-center py-8",
                          children: r.jsx("p", {
                            className: "text-gray-600",
                            children: "沒有可用的位置",
                          }),
                        })
                      : r.jsx("div", {
                          className: "grid grid-cols-5 gap-2",
                          children: D.map((T) => {
                            const [z, E] = T.split(",");
                            return r.jsxs(
                              "button",
                              {
                                onClick: () => h(T),
                                className: `p-3 border-2 rounded-lg text-sm font-medium transition-all ${
                                  y === T
                                    ? "border-blue-500 bg-blue-500 text-white"
                                    : "border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700"
                                }`,
                                children: ["(", z, ",", E, ")"],
                              },
                              T
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
                onClick: C,
                className:
                  "px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
                disabled: p,
                children: "取消",
              }),
              r.jsx("button", {
                onClick: m,
                disabled: !c || !y || p,
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
  Lh = ({ isOpen: e, onClose: t, initialBarcode: n = "" }) => {
    const {
        showNotification: s,
        medicineList: o,
        isLoadingMedicines: l,
      } = ot(),
      [a, i] = f.useState(""),
      [c, g] = f.useState(""),
      [y, h] = f.useState(""),
      [p, b] = f.useState(""),
      [N, S] = f.useState(""),
      [A, d] = f.useState(null),
      [u, m] = f.useState([]),
      [C, P] = f.useState(""),
      [D, T] = f.useState(null),
      [z, E] = f.useState(!1),
      O = f.useRef(null);
    f.useEffect(() => {
      e && (i(n), g(""), h(""), b(""), S(""), P(""), T(null), d(null));
    }, [e, n]),
      f.useEffect(() => {
        const w = (j) => {
          O.current && !O.current.contains(j.target) && d(null);
        };
        return (
          document.addEventListener("mousedown", w),
          () => {
            document.removeEventListener("mousedown", w);
          }
        );
      }, []);
    const se = (w, j) => {
        if (!j.trim() || l) {
          m([]);
          return;
        }
        const k = j.toLowerCase(),
          _ = o.filter((J) => {
            var G, oe, we, me;
            switch (w) {
              case "code":
                return (G = J.CODE) == null
                  ? void 0
                  : G.toLowerCase().includes(k);
              case "name":
                return (oe = J.NAME) == null
                  ? void 0
                  : oe.toLowerCase().includes(k);
              case "chineseName":
                return (we = J.CHT_NAME) == null
                  ? void 0
                  : we.toLowerCase().includes(k);
              case "skdiacode":
                return (me = J.SKDIACODE) == null
                  ? void 0
                  : me.toLowerCase().includes(k);
              default:
                return !1;
            }
          });
        m(_.slice(0, 10));
      },
      fe = (w, j) => {
        switch ((d(w), w)) {
          case "code":
            g(j);
            break;
          case "name":
            h(j);
            break;
          case "chineseName":
            b(j);
            break;
          case "skdiacode":
            S(j);
            break;
        }
        se(w, j);
      },
      M = (w) => {
        P(w.GUID),
          T(w),
          g(w.CODE || ""),
          h(w.NAME || ""),
          b(w.CHT_NAME || ""),
          S(w.SKDIACODE || ""),
          d(null),
          m([]);
      },
      v = () => {
        i(""), g(""), h(""), b(""), S(""), P(""), T(null), d(null), m([]), t();
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
        E(!0);
        try {
          let w = [];
          if (D && D.BARCODE2)
            try {
              const k = JSON.parse(D.BARCODE2);
              Array.isArray(k)
                ? (w = [...k])
                : typeof k == "string" && (w = [k]);
            } catch {
              console.warn("解析 BARCODE2 失敗，使用原始值:", D.BARCODE2),
                D.BARCODE2 && (w = [D.BARCODE2]);
            }
          w.includes(a.trim()) || w.push(a.trim()),
            console.log("📋 處理後的 BARCODE2 陣列:", w);
          const j = await De.addMedClouds(
            a.trim(),
            c.trim(),
            JSON.stringify(w),
            D.BARCODE
          );
          j.Code === 200
            ? (s("條碼建立成功", "success"), v())
            : s(j.Result || "建立條碼失敗", "error");
        } catch (w) {
          console.error("建立條碼失敗:", w),
            s("建立條碼失敗，請稍後再試", "error");
        } finally {
          E(!1);
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
                        children: r.jsx(It, {
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
                    disabled: z,
                    children: r.jsx(Je, { className: "w-6 h-6 text-gray-600" }),
                  }),
                ],
              }),
              r.jsx("div", {
                className: "flex-1 overflow-y-auto p-6",
                children: r.jsxs("div", {
                  className: "space-y-4",
                  ref: O,
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
                          onChange: (w) => fe("code", w.target.value),
                          onFocus: () => d("code"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入藥碼搜尋...",
                          disabled: z,
                        }),
                        A === "code" &&
                          u.length > 0 &&
                          r.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: u.map((w) =>
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
                          value: y,
                          onChange: (w) => fe("name", w.target.value),
                          onFocus: () => d("name"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入藥名搜尋...",
                          disabled: z,
                        }),
                        A === "name" &&
                          u.length > 0 &&
                          r.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: u.map((w) =>
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
                          onChange: (w) => fe("chineseName", w.target.value),
                          onFocus: () => d("chineseName"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入中文名搜尋...",
                          disabled: z,
                        }),
                        A === "chineseName" &&
                          u.length > 0 &&
                          r.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: u.map((w) =>
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
                          value: N,
                          onChange: (w) => fe("skdiacode", w.target.value),
                          onFocus: () => d("skdiacode"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入料號搜尋...",
                          disabled: z,
                        }),
                        A === "skdiacode" &&
                          u.length > 0 &&
                          r.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: u.map((w) =>
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
                      onClick: v,
                      disabled: z,
                      className:
                        "px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: "取消",
                    }),
                    r.jsx("button", {
                      onClick: F,
                      disabled: z || !c.trim(),
                      className:
                        "px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: z ? "建立中..." : "確認建立",
                    }),
                  ],
                }),
              }),
            ],
          }),
        })
      : null;
  },
  Gh = ({
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
        const [p, b] = h.split(",").map(Number);
        return { row: p || 0, col: b || 0 };
      },
      a = (h) => {
        if (!h || h.length === 0)
          return { sortedContents: [], maxRow: 0, maxCol: 0 };
        const p = h.map((A) => ({
            ...A,
            gridPos: l(A.gird_position || "0,0"),
          })),
          b = Math.max(...p.map((A) => A.gridPos.row), 0),
          N = Math.max(...p.map((A) => A.gridPos.col), 0);
        return {
          sortedContents: p.sort((A, d) =>
            A.gridPos.row !== d.gridPos.row
              ? A.gridPos.row - d.gridPos.row
              : A.gridPos.col - d.gridPos.col
          ),
          maxRow: b,
          maxCol: N,
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
        const p = [
          "med_box",
          "dispensing_shelves",
          "store_shelves",
          "grid_draw",
          "list_draw",
        ].includes(h.type);
        return r.jsx(
          "div",
          {
            className: `${p ? "shadow-sm border-2 p-1 rounded-lg" : ""} ${i(
              h.type
            )} flex flex-col max-w-full min-w-0 h-full overflow-hidden`,
            children: r.jsx("div", {
              className: "flex-1 min-w-0 overflow-hidden",
              children: y(h),
            }),
          },
          h.GUID
        );
      },
      g = (h, p, b) => {
        const N = {};
        return (
          h.forEach((S) => {
            const A = l(S.gird_position || "0,0");
            N[`${A.row},${A.col}`] = S;
          }),
          r.jsx("table", {
            className: "w-full h-full max-w-full table-fixed",
            style: { borderCollapse: "separate", borderSpacing: "0px" },
            children: r.jsx("tbody", {
              children: Array.from({ length: p + 1 }, (S, A) =>
                r.jsx(
                  "tr",
                  {
                    children: Array.from({ length: b + 1 }, (d, u) => {
                      const m = `${A},${u}`,
                        C = N[m];
                      return C
                        ? r.jsx(
                            "td",
                            {
                              className:
                                "align-top bg-transparent overflow-hidden",
                              style: {
                                width: `${100 / (b + 1)}%`,
                                maxWidth: `${100 / (b + 1)}%`,
                              },
                              children: c(C),
                            },
                            u
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
                            u
                          );
                    }),
                  },
                  A
                )
              ),
            }),
          })
        );
      },
      y = (h) => {
        switch (h.type) {
          case "parent_container":
            if (h.contents && h.contents.length > 0) {
              const { sortedContents: p, maxRow: b, maxCol: N } = a(h.contents);
              return g(p, b, N);
            } else return r.jsx("div", { className: "" });
          case "sub_container":
            if (h.contents && h.contents.length > 0) {
              const { sortedContents: p, maxRow: b, maxCol: N } = a(h.contents);
              return g(p, b, N);
            } else return r.jsx("div", { className: "" });
          case "dispensing_shelves":
            if (h.contents && h.contents.length > 0) {
              const { sortedContents: p, maxRow: b, maxCol: N } = a(h.contents);
              return g(p, b, N);
            } else
              return r.jsx("div", {
                className:
                  "border-2 rounded-lg flex py-3 items-center justify-center h-full text-gray-400 text-sm",
                children: "無藥盒",
              });
          case "store_shelves":
            if (h.medMapStock && h.medMapStock.length > 0) {
              const p = h.medMapStock,
                b = {};
              p.forEach((A) => {
                const d = A.location || A.gird_position || "0,0",
                  [u, m] = d.split(",").map(Number);
                b[u] || (b[u] = []),
                  b[u].push({ ...A, _position: u, _depth: m });
              });
              const N = Object.keys(b)
                  .map(Number)
                  .sort((A, d) => A - d),
                S = N.length;
              return (
                Math.max(...N.map((A) => b[A].length)),
                r.jsx("div", {
                  className: "flex h-full w-full overflow-hidden gap-1",
                  children: N.map((A) => {
                    const d = b[A].sort((P, D) => D._depth - P._depth),
                      u = S > 0 ? 100 / S : 100,
                      m = d.length,
                      C = m > 0 ? 100 / m : 100;
                    return r.jsx(
                      "div",
                      {
                        className: "flex flex-col h-full",
                        style: { width: `${u}%` },
                        children: d.map((P, D) => {
                          let T = 0;
                          P.qty &&
                            P.qty.forEach((fe) => {
                              T += +fe;
                            });
                          const z = t && (P.code == t || P.material_no == t),
                            E = n.includes(P.code) || n.includes(P.material_no),
                            O = o(),
                            se = D === m - 1;
                          return r.jsxs(
                            "div",
                            {
                              className: `border-2 rounded-lg border-gray-300 p-2 flex flex-col text-gray-800 justify-center items-center transition-colors cursor-pointer min-w-0 overflow-hidden ${
                                se ? "" : "mb-1"
                              } ${
                                E
                                  ? "highlight-breathe-red"
                                  : z
                                  ? `highlight-breathe-${O}`
                                  : ""
                              }`,
                              style: {
                                height: `calc(${C}% - ${
                                  se ? "0px" : "0.25rem"
                                })`,
                              },
                              onClick: () =>
                                s &&
                                s({
                                  code: P.code || P.material_no,
                                  name: P.name,
                                }),
                              children: [
                                r.jsx("div", {
                                  className:
                                    "text-sm font-semibold truncate w-full text-center whitespace-normal overflow-hidden",
                                  children: P.name || P.material_no,
                                }),
                                r.jsxs("div", {
                                  className: "text-xs mt-1",
                                  children: ["數量: ", T || 0],
                                }),
                              ],
                            },
                            P.GUID || D
                          );
                        }),
                      },
                      A
                    );
                  }),
                })
              );
            } else if (h.contents && h.contents.length > 0) {
              const { sortedContents: p, maxRow: b, maxCol: N } = a(h.contents);
              return g(p, b, N);
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
              const p = t && h.med_info.some((S) => S.code == t),
                b = h.med_info.some((S) => n.includes(S.code)),
                N = o();
              return r.jsx("div", {
                className: `text-sm text-center h-full p-2 flex flex-col text-gray-800 justify-center transition-colors cursor-pointer overflow-hidden ${
                  b
                    ? "highlight-breathe-red"
                    : p
                    ? `highlight-breathe-${N}`
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
              const { sortedContents: p, maxRow: b, maxCol: N } = a(h.contents);
              return g(p, b, N);
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
            children: y(e),
          }),
        })
      : r.jsx("div", {
          className: "flex items-center justify-center h-full text-gray-400",
          children: r.jsx("p", { children: "無容器資料" }),
        });
  },
  zh = ({ isOpen: e, onClose: t, type: n, data: s, onApprove: o }) => {
    const [l, a] = f.useState("0"),
      [i, c] = f.useState("0"),
      [g, y] = f.useState(null),
      [h, p] = f.useState(null),
      [b, N] = f.useState(!1),
      [S, A] = f.useState(!1),
      [d, u] = f.useState(""),
      [m, C] = f.useState(""),
      [P, D] = f.useState([]),
      [T, z] = f.useState([]),
      [E, O] = f.useState([]),
      [se, fe] = f.useState(!1),
      [M, v] = f.useState(!1),
      F = f.useRef(null),
      w = f.useRef(null),
      j = f.useRef(null),
      k = f.useRef(null);
    f.useEffect(() => {
      if (e && s) {
        const R = s.issuedQuantity || s.requestedQuantity || "0";
        a(R), c(R), y(null), p(null), N(!1);
        const I = localStorage.getItem("medMap_setting");
        if (I)
          try {
            const K = JSON.parse(I);
            u(K.default_person || ""), C(K.default_person_id || "");
          } catch (K) {
            console.error("讀取設定失敗:", K), u(""), C("");
          }
        else u(""), C("");
        _();
      }
    }, [e, s]),
      f.useEffect(() => {
        const R = (I) => {
          j.current &&
            !j.current.contains(I.target) &&
            F.current &&
            !F.current.contains(I.target) &&
            fe(!1),
            k.current &&
              !k.current.contains(I.target) &&
              w.current &&
              !w.current.contains(I.target) &&
              v(!1);
        };
        return (
          document.addEventListener("mousedown", R),
          () => document.removeEventListener("mousedown", R)
        );
      }, []);
    const _ = async () => {
        try {
          const R = await De.getAllStaffInfo();
          R.Code === 200 && R.Data && D(R.Data);
        } catch (R) {
          console.error("獲取人員資料失敗:", R);
        }
      },
      J = (R) => {
        if ((u(R), R.trim() === "")) {
          z([]), fe(!1);
          return;
        }
        const I = P.filter(
          (K) => K.name && K.name.toLowerCase().includes(R.toLowerCase())
        );
        z(I), fe(I.length > 0);
      },
      G = (R) => {
        if ((C(R), R.trim() === "")) {
          O([]), v(!1);
          return;
        }
        const I = P.filter(
          (K) => K.ID && K.ID.toLowerCase().includes(R.toLowerCase())
        );
        O(I), v(I.length > 0);
      },
      oe = (R) => {
        u(R.name), C(R.ID), fe(!1);
      },
      we = (R) => {
        u(R.name), C(R.ID), v(!1);
      };
    if (!e || !s) return null;
    const me = (R) => {
        if (b) a(R), c(R), N(!1);
        else {
          const I = l === "0" ? R : l + R;
          a(I), c(I);
        }
      },
      V = (R) => {
        g && h !== null && !b && he(), p(i), y(R), N(!0);
      },
      he = () => {
        if (g === null || h === null) return;
        const R = parseFloat(h),
          I = parseFloat(i);
        let K = 0;
        switch (g) {
          case "+":
            K = R + I;
            break;
          case "-":
            K = R - I;
            break;
          case "×":
            K = R * I;
            break;
          case "÷":
            K = I !== 0 ? R / I : 0;
            break;
          default:
            return;
        }
        const U = K.toString();
        a(U), c(U), y(null), p(null), N(!0);
      },
      X = () => {
        he();
      },
      Ce = () => {
        if (b) a("0."), c("0."), N(!1);
        else if (!l.includes(".")) {
          const R = l + ".";
          a(R), c(R);
        }
      },
      ye = () => {
        a("0"), c("0"), y(null), p(null), N(!1);
      },
      xe = () => {
        const R = new Date(),
          I = R.getFullYear(),
          K = String(R.getMonth() + 1).padStart(2, "0"),
          U = String(R.getDate()).padStart(2, "0"),
          ne = String(R.getHours()).padStart(2, "0"),
          ae = String(R.getMinutes()).padStart(2, "0"),
          $ = String(R.getSeconds()).padStart(2, "0");
        return `${I}-${K}-${U}T${ne}:${ae}:${$}`;
      },
      Ue = async () => {
        if (!s) return;
        if (!d.trim()) {
          alert("請輸入核撥人員名稱");
          return;
        }
        const R = n === "requisition" ? "申領" : "撥補";
        if (
          window.confirm(`確認核撥資訊：

藥品名稱：${s.name}
實際撥發量：${l}
核撥人員：${d}${m ? ` (${m})` : ""}

是否確認${R}？`)
        ) {
          A(!0);
          try {
            const K = xe();
            if (n === "requisition") {
              const U = await De.updateRequisitionActualQuantity(s.GUID, l);
              if (U.Code !== 200) {
                alert(`更新實際撥發量失敗：${U.Message || "未知錯誤"}`), A(!1);
                return;
              }
              const ne = {
                ...s,
                actualQuantity: l,
                notice: "False",
                state: "已過帳",
                issuingPerson: d,
                issueTime: K,
              };
              console.log("申領request", ne);
              const ae = await De.updateRequisitionByGuid(ne);
              if (ae.Code !== 200) {
                alert(`申領過帳失敗：${ae.Message || "未知錯誤"}`), A(!1);
                return;
              }
              console.log("✅ 申領核撥成功:", {
                GUID: s.GUID,
                name: s.name,
                actualQuantity: l,
                issuingPerson: d,
                issueTime: K,
              });
            } else {
              const U = await De.updateDistributionActualQuantity(s.GUID, l);
              if (U.Code !== 200) {
                alert(`更新實際撥發量失敗：${U.Message || "未知錯誤"}`), A(!1);
                return;
              }
              const ne = {
                ...s,
                actualQuantity: l,
                notice: "False",
                state: "已過帳",
                issuer: d,
                issuanceTime: K,
              };
              console.log("撥補request", ne);
              const ae = await De.updateDistributionByGuid(ne);
              if (ae.Code !== 200) {
                alert(`撥補過帳失敗：${ae.Message || "未知錯誤"}`), A(!1);
                return;
              }
              console.log("✅ 撥補核撥成功:", {
                GUID: s.GUID,
                name: s.name,
                actualQuantity: l,
                issuer: d,
                issuanceTime: K,
              });
            }
            o && (await o()), alert(`${R}核撥成功！`), t();
          } catch (K) {
            console.error(`${R}核撥失敗:`, K),
              alert(`${R}核撥失敗，請稍後再試`);
          } finally {
            A(!1);
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
                  children: r.jsx(Je, { className: "w-5 h-5 text-gray-700" }),
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
                                value: d,
                                onChange: (R) => J(R.target.value),
                                onFocus: () => {
                                  d.trim() && J(d);
                                },
                                placeholder: "人員名稱",
                                className:
                                  "w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                              }),
                              se &&
                                r.jsx("div", {
                                  ref: j,
                                  className:
                                    "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto",
                                  children: T.map((R, I) =>
                                    r.jsxs(
                                      "div",
                                      {
                                        onClick: () => oe(R),
                                        className:
                                          "px-3 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                        children: [
                                          r.jsx("div", {
                                            className: "text-xs text-gray-500",
                                            children: R.ID,
                                          }),
                                          r.jsx("div", {
                                            className:
                                              "font-medium text-gray-900 text-sm",
                                            children: R.name,
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
                            className: "relative",
                            children: [
                              r.jsx("input", {
                                ref: w,
                                type: "text",
                                value: m,
                                onChange: (R) => G(R.target.value),
                                onFocus: () => {
                                  m.trim() && G(m);
                                },
                                placeholder: "人員 ID",
                                className:
                                  "w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                              }),
                              M &&
                                r.jsx("div", {
                                  ref: k,
                                  className:
                                    "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto",
                                  children: E.map((R, I) =>
                                    r.jsxs(
                                      "div",
                                      {
                                        onClick: () => we(R),
                                        className:
                                          "px-3 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                        children: [
                                          r.jsx("div", {
                                            className:
                                              "font-medium text-gray-900 text-sm",
                                            children: R.ID,
                                          }),
                                          r.jsx("div", {
                                            className: "text-xs text-gray-500",
                                            children: R.name,
                                          }),
                                        ],
                                      },
                                      I
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
                        onClick: () => me("7"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "7",
                      }),
                      r.jsx("button", {
                        onClick: () => me("8"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "8",
                      }),
                      r.jsx("button", {
                        onClick: () => me("9"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "9",
                      }),
                      r.jsx("button", {
                        onClick: () => V("÷"),
                        className:
                          "py-4 text-lg font-semibold bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors",
                        children: "÷",
                      }),
                      r.jsx("button", {
                        onClick: () => me("4"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "4",
                      }),
                      r.jsx("button", {
                        onClick: () => me("5"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "5",
                      }),
                      r.jsx("button", {
                        onClick: () => me("6"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "6",
                      }),
                      r.jsx("button", {
                        onClick: () => V("×"),
                        className:
                          "py-4 text-lg font-semibold bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors",
                        children: "×",
                      }),
                      r.jsx("button", {
                        onClick: () => me("1"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "1",
                      }),
                      r.jsx("button", {
                        onClick: () => me("2"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "2",
                      }),
                      r.jsx("button", {
                        onClick: () => me("3"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "3",
                      }),
                      r.jsx("button", {
                        onClick: () => V("-"),
                        className:
                          "py-4 text-lg font-semibold bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors",
                        children: "-",
                      }),
                      r.jsx("button", {
                        onClick: () => me("0"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "0",
                      }),
                      r.jsx("button", {
                        onClick: Ce,
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: ".",
                      }),
                      r.jsx("button", {
                        onClick: X,
                        className:
                          "py-4 text-lg font-semibold bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors",
                        children: "=",
                      }),
                      r.jsx("button", {
                        onClick: () => V("+"),
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
                  onClick: ye,
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
                  onClick: Ue,
                  disabled: S,
                  className:
                    "px-6 py-2.5 font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                  children: S ? "處理中..." : "核撥",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Bh = ({
    isOpen: e,
    onClose: t,
    medicineInfo: n,
    requisitions: s,
    distributions: o,
    onNoticeUpdated: l,
  }) => {
    const { setHighlightedMedicineCode: a } = ot(),
      [i, c] = f.useState(s),
      [g, y] = f.useState(o),
      [h, p] = f.useState(null),
      [b, N] = f.useState(!1),
      [S, A] = f.useState(null),
      [d, u] = f.useState("requisition"),
      [m, C] = f.useState(!1),
      [P, D] = f.useState(!1);
    mo.useEffect(() => {
      c(s), y(o);
    }, [s, o]),
      f.useEffect(
        () => () => {
          ps.cleanup();
        },
        []
      );
    const T = async () => {
        var v;
        if (n && !P) {
          if (!n.serverName || !n.serverType) {
            alert("無法取得藥品位置資訊");
            return;
          }
          D(!0);
          try {
            const F = localStorage.getItem("medMap_setting");
            let w = "255,0,0",
              j = "1",
              k = 60;
            if (F)
              try {
                const _ = JSON.parse(F);
                (w =
                  {
                    blue: "255,0,0",
                    green: "0,255,0",
                    red: "0,0,255",
                    yellow: "0,255,255",
                    purple: "255,0,255",
                    cyan: "255,255,0",
                  }[_.light_color] || "255,0,0"),
                  (j =
                    ((v = _.brightness) == null ? void 0 : v.toString()) ||
                    "1"),
                  (k = _.light_sec || 60);
              } catch (_) {
                console.error("讀取設定失敗:", _);
              }
            if (m) await ps.turnOffAllLights(), C(!1), a(null);
            else {
              const _ = [
                {
                  serverName: n.serverName,
                  serverType: n.serverType,
                  medicineCode: n.code,
                },
              ];
              await ps.startLighting(_, w, j, k * 1e3, () => {
                C(!1), a(null);
              }),
                C(!0),
                a(n.code);
            }
          } catch (F) {
            console.error("亮燈操作失敗:", F);
          } finally {
            D(!1);
          }
        }
      },
      z = async (v) => {
        const F = v.notice === "True" ? "False" : "True";
        p(v.GUID);
        const w = [...i],
          j = w.findIndex((k) => k.GUID === v.GUID);
        if (j === -1) {
          p(null);
          return;
        }
        (w[j] = { ...v, notice: F }), c(w);
        try {
          const k = await De.updateRequisitionNotice(v.GUID, F);
          k.Code !== 200
            ? ((w[j] = { ...v, notice: v.notice }),
              c(w),
              console.error("更新申領通知狀態失敗:", k))
            : l && l();
        } catch (k) {
          (w[j] = { ...v, notice: v.notice }),
            c(w),
            console.error("更新申領通知狀態失敗:", k);
        } finally {
          p(null);
        }
      },
      E = async (v) => {
        const F = v.notice === "True" ? "False" : "True";
        p(v.GUID);
        const w = [...g],
          j = w.findIndex((k) => k.GUID === v.GUID);
        if (j === -1) {
          p(null);
          return;
        }
        (w[j] = { ...v, notice: F }), y(w);
        try {
          const k = await De.updateDistributionNotice(v.GUID, F);
          k.Code !== 200
            ? ((w[j] = { ...v, notice: v.notice }),
              y(w),
              console.error("更新撥補通知狀態失敗:", k))
            : l && l();
        } catch (k) {
          (w[j] = { ...v, notice: v.notice }),
            y(w),
            console.error("更新撥補通知狀態失敗:", k);
        } finally {
          p(null);
        }
      };
    if (!e || !n) return null;
    const O = i.filter((v) => v.state === "等待過帳"),
      se = g.filter((v) => v.state === "等待過帳"),
      fe = O.length === 0 && se.length === 0,
      M = (v) => {
        if (!v || v === "1/01/01 00:00:00" || v === "0001-01-01T00:00:00")
          return "-";
        try {
          const F = new Date(v);
          if (isNaN(F.getTime())) return v;
          const w = F.getFullYear(),
            j = String(F.getMonth() + 1).padStart(2, "0"),
            k = String(F.getDate()).padStart(2, "0"),
            _ = String(F.getHours()).padStart(2, "0"),
            J = String(F.getMinutes()).padStart(2, "0");
          return `${w}/${j}/${k} ${_}:${J}`;
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
                      onClick: T,
                      disabled: P,
                      className: `p-2 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                        m
                          ? "bg-green-500 text-white hover:bg-green-600 shadow-lg"
                          : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                      }`,
                      title: m ? "點擊關燈" : "點擊亮燈",
                      children: r.jsx(dh, {
                        className: "w-6 h-6",
                        fill: m ? "currentColor" : "none",
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
                    children: r.jsx(Je, { className: "w-6 h-6 text-gray-700" }),
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
              children: fe
                ? r.jsx("div", {
                    className:
                      "flex items-center justify-center h-40 text-gray-400 text-lg",
                    children: "無藥品需求",
                  })
                : r.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      O.map((v, F) =>
                        r.jsxs(
                          "div",
                          {
                            className:
                              "border border-blue-200 rounded-lg p-3 bg-blue-50 hover:shadow-md transition-shadow",
                            onClick: () => {
                              u("requisition"), A(v), N(!0);
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
                                          w.stopPropagation(), z(v);
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
                                        children: r.jsx(Ec, {
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
                                        children: M(v.requestTime),
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
                      se.map((v, F) =>
                        r.jsxs(
                          "div",
                          {
                            className:
                              "border border-yellow-200 rounded-lg p-3 bg-yellow-50 hover:shadow-md transition-shadow",
                            onClick: () => {
                              u("distribution"), A(v), N(!0);
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
                                      w.stopPropagation(), E(v);
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
                                    children: r.jsx(Ec, {
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
                                        children: M(v.addedTime),
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
        r.jsx(zh, {
          isOpen: b,
          onClose: () => N(!1),
          type: d,
          data: S,
          onApprove: l,
        }),
      ],
    });
  },
  Fh = ({ isOpen: e, onClose: t, container: n }) => {
    const [s, o] = f.useState("list_mode"),
      { highlightedMedicineCode: l, apiDepartmentData: a } = ot(),
      [i, c] = f.useState(!1),
      [g, y] = f.useState([]),
      [h, p] = f.useState([]),
      [b, N] = f.useState([]),
      [S, A] = f.useState(!1),
      [d, u] = f.useState(null),
      m = f.useRef(null),
      C = f.useRef(null),
      P = f.useCallback(
        (M) => {
          if (!a || !M) return null;
          const v = (F) => {
            for (const w of F) {
              if (w.GUID === M) return w;
              if (w.contents && Array.isArray(w.contents)) {
                const j = v(w.contents);
                if (j) return j;
              }
            }
            return null;
          };
          for (const F of a) {
            if (F.GUID === M) return F;
            if (F.contents && Array.isArray(F.contents)) {
              const w = v(F.contents);
              if (w) return w;
            }
          }
          return null;
        },
        [a]
      ),
      D = n ? P(n.GUID) || n : null,
      T = () => {
        try {
          const v = localStorage.getItem("medMap_setting");
          if (v) {
            const w = JSON.parse(v).light_sec;
            if (w != null && w !== "") {
              const j = Number(w);
              if (!isNaN(j) && j > 0) return j * 1e3;
            }
          }
        } catch (v) {
          console.error("讀取亮燈設定失敗:", v);
        }
        return 6e4;
      },
      z = () => {
        try {
          const M = localStorage.getItem("medMap_setting");
          if (M) return JSON.parse(M).light_color || "red";
        } catch (M) {
          console.error("讀取高亮顏色設定失敗:", M);
        }
        return "red";
      },
      E = f.useCallback(async () => {
        try {
          const M = new Date(),
            v = `${M.getFullYear()}-${String(M.getMonth() + 1).padStart(
              2,
              "0"
            )}-${String(M.getDate()).padStart(2, "0")} 00:00:00`,
            F = `${M.getFullYear()}-${String(M.getMonth() + 1).padStart(
              2,
              "0"
            )}-${String(M.getDate()).padStart(2, "0")} 23:59:59`,
            [w, j] = await Promise.all([
              De.getRequisitionByTime(v, F),
              De.getDistributionByTime(v, F),
            ]),
            k = [];
          if (w.Code === 200 && w.Data) {
            const _ = w.Data.filter((G) => {
              var oe;
              return (oe = D == null ? void 0 : D.med_list) == null
                ? void 0
                : oe.some((we) => we.code === G.code);
            });
            p(_),
              _.filter(
                (G) => G.state === "等待過帳" && G.notice === "True"
              ).forEach((G) => {
                G.code && k.push(G.code);
              });
          }
          if (j.Code === 200 && j.Data) {
            const _ = j.Data.filter((G) => {
              var oe;
              return (oe = D == null ? void 0 : D.med_list) == null
                ? void 0
                : oe.some((we) => we.code === G.code);
            });
            N(_),
              _.filter(
                (G) => G.state === "等待過帳" && G.notice === "True"
              ).forEach((G) => {
                G.code && (k.includes(G.code) || k.push(G.code));
              });
          }
          y(k);
        } catch (M) {
          console.error("檢查申領撥補資料失敗:", M);
        }
      }, [D]);
    f.useEffect(
      () => (
        e
          ? (E(),
            C.current && clearInterval(C.current),
            (C.current = setInterval(() => {
              E();
            }, 1e4)))
          : C.current && (clearInterval(C.current), (C.current = null)),
        () => {
          C.current && (clearInterval(C.current), (C.current = null));
        }
      ),
      [e, E]
    ),
      f.useEffect(() => {
        var M;
        D &&
          console.log("🔄 ContainerDetailModal: currentContainer updated", {
            GUID: D.GUID,
            name: D.name,
            medListCount: ((M = D.med_list) == null ? void 0 : M.length) || 0,
          });
      }, [D]),
      f.useEffect(() => {
        if (
          (console.log("容器資料：", D),
          console.log("🔍 ContainerDetailModal - 亮燈狀態檢查:", {
            isOpen: e,
            highlightedMedicineCode: l,
            containerName: D == null ? void 0 : D.name,
          }),
          e && l)
        ) {
          c(!0);
          const M = T();
          console.log("✅ ContainerDetailModal - 啟動亮燈:", {
            medicineCode: l,
            duration: M / 1e3 + "秒",
          }),
            m.current && clearTimeout(m.current),
            (m.current = setTimeout(() => {
              console.log("⏱️ ContainerDetailModal - 亮燈時間結束"),
                c(!1),
                (m.current = null);
            }, M));
        } else c(!1);
        return () => {
          m.current && clearTimeout(m.current);
        };
      }, [e, l]);
    const O = (M) => {
      var w, j;
      h.filter((k) => k.code === M.code), b.filter((k) => k.code === M.code);
      const v = (k) => {
          for (const _ of k) {
            if (_.type === "store_shelves" && _.medMapStock) {
              const J = _.medMapStock.find((G) => G.code === M.code);
              if (J) return { stock: J, shelf: _ };
            }
            if (_.contents && _.contents.length > 0) {
              const J = v(_.contents);
              if (J) return J;
            }
          }
          return null;
        },
        F = n ? v([n]) : null;
      u({
        code: M.code,
        name: M.name,
        cht_name: M.cht_name,
        skdiacode: M.SKDIACODE || M.skdiacode,
        serverName:
          (w = F == null ? void 0 : F.shelf) == null ? void 0 : w.serverName,
        serverType:
          (j = F == null ? void 0 : F.shelf) == null ? void 0 : j.serverType,
      }),
        A(!0);
    };
    if (!e) return null;
    const se = () => {
        if (!(D != null && D.med_list) || D.med_list.length === 0)
          return r.jsx("div", {
            className: "flex items-center justify-center h-full text-gray-400",
            children: r.jsx("p", { children: "無藥品資料" }),
          });
        const M = [...D.med_list].sort((v, F) => v.code.localeCompare(F.code));
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
                children: M.map((v, F) => {
                  const w = i && l && v.code == l,
                    j = g.includes(v.code);
                  let k = 0;
                  v.qty.forEach((J) => {
                    k += +J;
                  }),
                    F === 0 &&
                      console.log("🧪 ContainerDetailModal - 第一筆藥品檢查:", {
                        medCode: v.code,
                        highlightedCode: l,
                        isHighlightActive: i,
                        isHighlighted: w,
                        isPendingRequisition: j,
                        comparison: `${v.code} == ${l} = ${v.code == l}`,
                      });
                  const _ = z();
                  return r.jsxs(
                    "tr",
                    {
                      className: `transition-colors cursor-pointer ${
                        j
                          ? "highlight-breathe-red"
                          : w
                          ? `highlight-breathe-${_}`
                          : "hover:bg-gray-50"
                      }`,
                      onClick: () => O(v),
                      children: [
                        r.jsx("td", {
                          className: "border border-gray-300 px-1 py-2 text-sm",
                          children: v.code || "-",
                        }),
                        r.jsx("td", {
                          className: "border border-gray-300 px-1 py-2 text-sm",
                          children: v.SKDIACODE || "-",
                        }),
                        r.jsx("td", {
                          className: "border border-gray-300 px-1 py-2 text-sm",
                          children: v.name || "-",
                        }),
                        r.jsx("td", {
                          className:
                            "border border-gray-300 px-1 py-2 text-sm text-right",
                          children: k || "-",
                        }),
                        r.jsx("td", {
                          className:
                            "border border-gray-300 px-1 py-2 text-sm text-center",
                          children: v.stockCol || "-",
                        }),
                        r.jsx("td", {
                          className:
                            "border border-gray-300 px-1 py-2 text-sm text-center",
                          children: v.stockRow || "-",
                        }),
                        r.jsx("td", {
                          className:
                            "border border-gray-300 px-1 py-2 text-sm text-center",
                          children: v.stock || "-",
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
      fe = () =>
        n
          ? r.jsx(Gh, {
              container: D,
              highlightedMedicineCode: i ? l : null,
              pendingRequisitionCodes: g,
              onMedicineClick: O,
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
                      children: r.jsx(Je, {
                        className: "w-6 h-6 text-gray-700",
                      }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 overflow-hidden p-3",
                  children: s === "list_mode" ? se() : fe(),
                }),
              ],
            }),
          ],
        }),
        r.jsx(Bh, {
          isOpen: S,
          onClose: () => A(!1),
          medicineInfo: d,
          requisitions: d ? h.filter((M) => M.code === d.code) : [],
          distributions: d ? b.filter((M) => M.code === d.code) : [],
          onNoticeUpdated: E,
        }),
      ],
    });
  },
  Hh = () => {
    const {
        editStoreShelfModalOpen: e,
        closeEditStoreShelfModal: t,
        selectedStoreShelfForEdit: n,
        showNotification: s,
        updateContainerInLocalData: o,
      } = ot(),
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
    const g = (p, b) => {
        a((N) => ({ ...N, [p]: b }));
      },
      y = async () => {
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
              N = `${(await De.getConfig()).domain}/api/medmap/update_shelf`,
              A = await (
                await fetch(N, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(p),
                })
              ).json();
            console.log(p),
              console.log(A),
              A.Code === 200
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
                : s(A.Result || "更新失敗", "error");
          } catch (p) {
            console.error("更新層架失敗:", p),
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
              onClick: (p) => p.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-6 py-4 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(jr, { className: "w-6 h-6 text-gray-600" }),
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
                      children: r.jsx(Je, { className: "w-6 h-6" }),
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
                            onChange: (p) => g("name", p.target.value),
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
                            onChange: (p) => g("position", p.target.value),
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
                                onChange: (p) => g("width", p.target.value),
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
                                onChange: (p) => g("height", p.target.value),
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
                            onChange: (p) => g("ip", p.target.value),
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
                            onChange: (p) => g("serverName", p.target.value),
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
                            onChange: (p) => g("serverType", p.target.value),
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
                            onChange: (p) => g("deviceType", p.target.value),
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
                      onClick: y,
                      disabled: i,
                      className:
                        "px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        i && r.jsx($t, { className: "w-4 h-4 animate-spin" }),
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
  Vh = () => {
    const {
        editParentContainerModalOpen: e,
        closeEditParentContainerModal: t,
        selectedParentContainerForEdit: n,
        showNotification: s,
        updateContainerInLocalData: o,
      } = ot(),
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
    const g = (p, b) => {
        a((N) => ({ ...N, [p]: b }));
      },
      y = async () => {
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
            const b = [
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
            console.log("=========", b, "=========");
            const N = await De.updateMedMapSection(b);
            N.Code === 200
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
              : s(N.Result || "更新失敗", "error");
          } catch (p) {
            console.error("更新父容器失敗:", p),
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
              onClick: (p) => p.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-6 py-4 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(jr, { className: "w-6 h-6 text-gray-600" }),
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
                      children: r.jsx(Je, { className: "w-6 h-6" }),
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
                            onChange: (p) => g("name", p.target.value),
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
                            onChange: (p) => g("position", p.target.value),
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
                            onChange: (p) => g("ip_light", p.target.value),
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
                            onChange: (p) => g("serverName", p.target.value),
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
                            onChange: (p) => g("serverType", p.target.value),
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
                            onChange: (p) => g("deviceType", p.target.value),
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
                              g(
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
                      onClick: h,
                      disabled: i,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                      children: "取消",
                    }),
                    r.jsxs("button", {
                      onClick: y,
                      disabled: i,
                      className:
                        "px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        i && r.jsx($t, { className: "w-4 h-4 animate-spin" }),
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
  qh = ({ isOpen: e, onLoginSuccess: t }) => {
    const { t: n } = kt(),
      [s, o] = f.useState(""),
      [l, a] = f.useState(""),
      [i, c] = f.useState(!1),
      [g, y] = f.useState(!1),
      [h, p] = f.useState(""),
      b = async (S) => {
        if ((S.preventDefault(), !s.trim() || !l.trim())) {
          p("Please enter both ID and password");
          return;
        }
        y(!0), p("");
        try {
          const A = await De.login({ ID: s.trim(), Password: l });
          if (A.Code === 200 && A.Data) {
            const d = { ...A.Data, loginTime: new Date().toISOString() };
            sessionStorage.setItem("user_session", JSON.stringify(d)), t(d);
          } else p(A.Result || "Login failed");
        } catch (A) {
          console.error("Login failed:", A),
            p("Network error. Please try again.");
        } finally {
          y(!1);
        }
      },
      N = (S) => {
        S.key === "Enter" && !g && b(S);
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
                              onChange: (S) => o(S.target.value),
                              onKeyPress: N,
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
                                  onChange: (S) => a(S.target.value),
                                  onKeyPress: N,
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
                                    ? r.jsx(Qu, { className: "w-5 h-5" })
                                    : r.jsx(Ku, { className: "w-5 h-5" }),
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
                                  r.jsx($t, {
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
  Wh = ({ isVisible: e, message: t }) => {
    const { t: n } = kt();
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
                        children: r.jsx(yi, {
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
                      r.jsx($t, {
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
  Yh = ({
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
                  ? r.jsx(lh, { className: "w-5 h-5 text-green-600" })
                  : r.jsx(gh, { className: "w-5 h-5 text-red-600" }),
                r.jsx("span", {
                  className: "text-sm font-medium",
                  children: e,
                }),
                r.jsx("button", {
                  onClick: s,
                  className: `p-1 rounded-full hover:bg-black/10 transition-colors ${
                    t === "success" ? "text-green-600" : "text-red-600"
                  }`,
                  children: r.jsx(Je, { className: "w-4 h-4" }),
                }),
              ],
            }),
          })
        : null
    );
  };
function Xh() {
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
    selectedDepartmentForAdd: y,
    addStoreItemModalOpen: h,
    closeAddStoreItemModal: p,
    selectedStoreShelfForAdd: b,
    addDepartmentModalOpen: N,
    closeAddDepartmentModal: S,
    qrCodeScannerModalOpen: A,
    qrCodeScannerMode: d,
    closeQRCodeScannerModal: u,
    addBarcodeModalOpen: m,
    closeAddBarcodeModal: C,
    initialBarcodeValue: P,
    containerDetailModalOpen: D,
    closeContainerDetailModal: T,
    selectedContainerForDetail: z,
    setMedicineList: E,
    setIsLoadingMedicines: O,
    showNotification: se,
  } = ot();
  f.useEffect(() => {
    (() => {
      try {
        const w = sessionStorage.getItem("user_session");
        if (w) {
          const j = JSON.parse(w);
          j.GUID && j.ID && j.Name
            ? (o(j), s(!0))
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
            O(!0);
            try {
              console.log("開始載入藥品資料...");
              const j = await De.getMedicineCloud();
              if ((console.log("藥品資料 API 回應:", j), !F)) return;
              j.Code === 200 && j.Data
                ? (E(j.Data),
                  console.log(`✅ 成功載入 ${j.Data.length} 筆藥品資料`),
                  se(`載入 ${j.Data.length} 筆藥品資料`, "success"))
                : (console.warn("API 回應異常:", j),
                  E([]),
                  se("藥品資料載入異常，請稍後重試", "error"));
            } catch (j) {
              if (!F) return;
              console.error("載入藥品資料失敗:", j),
                E([]),
                se("無法連線到藥品資料庫，部分功能可能無法使用", "error");
            } finally {
              F && O(!1);
            }
          }
        })(),
        () => {
          F = !1;
        }
      );
    }, [n]);
  const fe = (F) => {
      o(F), s(!0);
    },
    M = mo.useRef(null),
    v = (F, w) => {
      if (
        (console.log("📸 QR掃描成功 - handleQRScanSuccess 被調用:", {
          barcode: F,
          medicineData: w,
          mode: d,
        }),
        console.log("📸 當前 mode:", d),
        console.log("📸 當前 viewMode:", t),
        console.log("📸 drugCanvasRef.current:", M.current),
        d === "track_Drug_mode")
      ) {
        if ((console.log("✅ 進入 track_Drug_mode 分支"), t !== "medicine")) {
          console.warn("⚠️ 當前不在藥品地圖視圖，無法定位藥品"),
            se("請切換到藥品地圖視圖後再使用此功能", "error");
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
      } else console.log("⚠️ mode 不是 track_Drug_mode，當前 mode:", d);
    };
  return n
    ? r.jsxs("div", {
        className: "min-h-screen bg-gray-50",
        children: [
          r.jsx(xh, {}),
          r.jsx(yh, {}),
          r.jsx(Nh, {}),
          r.jsx("div", {
            className: "fixed inset-0",
            children: r.jsx("div", {
              className: "w-full h-full",
              children:
                t === "department" ? r.jsx(Dh, {}) : r.jsx(ef, { ref: M }),
            }),
          }),
          r.jsx(jh, {}),
          r.jsx(Ih, {}),
          r.jsx(Ph, {}),
          r.jsx(Th, {}),
          r.jsx(Rh, {}),
          r.jsx($h, {}),
          r.jsx(Ah, {}),
          r.jsx(Oh, { isOpen: h, onClose: p, storeShelf: b }),
          r.jsx(Uh, { isOpen: N, onClose: S }),
          r.jsx(tl, { isOpen: A, onClose: u, mode: d, onScanSuccess: v }),
          r.jsx(Lh, { isOpen: m, onClose: C, initialBarcode: P }),
          r.jsx(Fh, { isOpen: D, onClose: T, container: z }),
          r.jsx(Hh, {}),
          r.jsx(Vh, {}),
          r.jsx(Wh, { isVisible: l }),
          r.jsx(Yh, {
            message: a.message,
            type: a.type,
            isVisible: a.isVisible,
            onClose: i,
          }),
        ],
      })
    : r.jsx(qh, { isOpen: !0, onLoginSuccess: fe });
}
function Qh() {
  return r.jsx(nh, { children: r.jsx(eh, { children: r.jsx(Xh, {}) }) });
}
Vu(document.getElementById("root")).render(
  r.jsx(f.StrictMode, { children: r.jsx(Qh, {}) })
);
