var cf = Object.defineProperty;
var uf = (e, t, n) =>
  t in e
    ? cf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Un = (e, t, n) => uf(e, typeof t != "symbol" ? t + "" : t, n);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === "childList")
        for (const i of l.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
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
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = n(o);
    fetch(o.href, l);
  }
})();
function df(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Rc = { exports: {} },
  jo = {},
  Lc = { exports: {} },
  se = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var is = Symbol.for("react.element"),
  ff = Symbol.for("react.portal"),
  hf = Symbol.for("react.fragment"),
  mf = Symbol.for("react.strict_mode"),
  pf = Symbol.for("react.profiler"),
  gf = Symbol.for("react.provider"),
  xf = Symbol.for("react.context"),
  yf = Symbol.for("react.forward_ref"),
  vf = Symbol.for("react.suspense"),
  wf = Symbol.for("react.memo"),
  bf = Symbol.for("react.lazy"),
  ma = Symbol.iterator;
function _f(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ma && e[ma]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Mc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ac = Object.assign,
  Oc = {};
function mr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Oc),
    (this.updater = n || Mc);
}
mr.prototype.isReactComponent = {};
mr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
mr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Uc() {}
Uc.prototype = mr.prototype;
function fi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Oc),
    (this.updater = n || Mc);
}
var hi = (fi.prototype = new Uc());
hi.constructor = fi;
Ac(hi, mr.prototype);
hi.isPureReactComponent = !0;
var pa = Array.isArray,
  $c = Object.prototype.hasOwnProperty,
  mi = { current: null },
  zc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fc(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      $c.call(t, r) && !zc.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var c = Array(a), u = 0; u < a; u++) c[u] = arguments[u + 2];
    o.children = c;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: is,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: mi.current,
  };
}
function Nf(e, t) {
  return {
    $$typeof: is,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function pi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === is;
}
function jf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ga = /\/+/g;
function Ho(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? jf("" + e.key)
    : t.toString(36);
}
function zs(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (l) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case is:
          case ff:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + Ho(i, 0) : r),
      pa(o)
        ? ((n = ""),
          e != null && (n = e.replace(ga, "$&/") + "/"),
          zs(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (pi(o) &&
            (o = Nf(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(ga, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), pa(e)))
    for (var a = 0; a < e.length; a++) {
      l = e[a];
      var c = r + Ho(l, a);
      i += zs(l, t, n, c, o);
    }
  else if (((c = _f(e)), typeof c == "function"))
    for (e = c.call(e), a = 0; !(l = e.next()).done; )
      (l = l.value), (c = r + Ho(l, a++)), (i += zs(l, t, n, c, o));
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
  return i;
}
function _s(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    zs(e, r, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    r
  );
}
function Sf(e) {
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
var qe = { current: null },
  Fs = { transition: null },
  kf = {
    ReactCurrentDispatcher: qe,
    ReactCurrentBatchConfig: Fs,
    ReactCurrentOwner: mi,
  };
function Bc() {
  throw Error("act(...) is not supported in production builds of React.");
}
se.Children = {
  map: _s,
  forEach: function (e, t, n) {
    _s(
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
      _s(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      _s(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!pi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
se.Component = mr;
se.Fragment = hf;
se.Profiler = pf;
se.PureComponent = fi;
se.StrictMode = mf;
se.Suspense = vf;
se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kf;
se.act = Bc;
se.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ac({}, e.props),
    o = e.key,
    l = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (i = mi.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (c in t)
      $c.call(t, c) &&
        !zc.hasOwnProperty(c) &&
        (r[c] = t[c] === void 0 && a !== void 0 ? a[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    a = Array(c);
    for (var u = 0; u < c; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: is, type: e.type, key: o, ref: l, props: r, _owner: i };
};
se.createContext = function (e) {
  return (
    (e = {
      $$typeof: xf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: gf, _context: e }),
    (e.Consumer = e)
  );
};
se.createElement = Fc;
se.createFactory = function (e) {
  var t = Fc.bind(null, e);
  return (t.type = e), t;
};
se.createRef = function () {
  return { current: null };
};
se.forwardRef = function (e) {
  return { $$typeof: yf, render: e };
};
se.isValidElement = pi;
se.lazy = function (e) {
  return { $$typeof: bf, _payload: { _status: -1, _result: e }, _init: Sf };
};
se.memo = function (e, t) {
  return { $$typeof: wf, type: e, compare: t === void 0 ? null : t };
};
se.startTransition = function (e) {
  var t = Fs.transition;
  Fs.transition = {};
  try {
    e();
  } finally {
    Fs.transition = t;
  }
};
se.unstable_act = Bc;
se.useCallback = function (e, t) {
  return qe.current.useCallback(e, t);
};
se.useContext = function (e) {
  return qe.current.useContext(e);
};
se.useDebugValue = function () {};
se.useDeferredValue = function (e) {
  return qe.current.useDeferredValue(e);
};
se.useEffect = function (e, t) {
  return qe.current.useEffect(e, t);
};
se.useId = function () {
  return qe.current.useId();
};
se.useImperativeHandle = function (e, t, n) {
  return qe.current.useImperativeHandle(e, t, n);
};
se.useInsertionEffect = function (e, t) {
  return qe.current.useInsertionEffect(e, t);
};
se.useLayoutEffect = function (e, t) {
  return qe.current.useLayoutEffect(e, t);
};
se.useMemo = function (e, t) {
  return qe.current.useMemo(e, t);
};
se.useReducer = function (e, t, n) {
  return qe.current.useReducer(e, t, n);
};
se.useRef = function (e) {
  return qe.current.useRef(e);
};
se.useState = function (e) {
  return qe.current.useState(e);
};
se.useSyncExternalStore = function (e, t, n) {
  return qe.current.useSyncExternalStore(e, t, n);
};
se.useTransition = function () {
  return qe.current.useTransition();
};
se.version = "18.3.1";
Lc.exports = se;
var y = Lc.exports;
const ke = df(y);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cf = y,
  Ef = Symbol.for("react.element"),
  Df = Symbol.for("react.fragment"),
  Tf = Object.prototype.hasOwnProperty,
  If = Cf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Pf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Hc(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Tf.call(t, r) && !Pf.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Ef,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: If.current,
  };
}
jo.Fragment = Df;
jo.jsx = Hc;
jo.jsxs = Hc;
Rc.exports = jo;
var s = Rc.exports,
  Gc = { exports: {} },
  ft = {},
  Wc = { exports: {} },
  Vc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, O) {
    var A = j.length;
    j.push(O);
    e: for (; 0 < A; ) {
      var Y = (A - 1) >>> 1,
        re = j[Y];
      if (0 < o(re, O)) (j[Y] = O), (j[A] = re), (A = Y);
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var O = j[0],
      A = j.pop();
    if (A !== O) {
      j[0] = A;
      e: for (var Y = 0, re = j.length, rt = re >>> 1; Y < rt; ) {
        var _ = 2 * (Y + 1) - 1,
          ee = j[_],
          H = _ + 1,
          oe = j[H];
        if (0 > o(ee, A))
          H < re && 0 > o(oe, ee)
            ? ((j[Y] = oe), (j[H] = A), (Y = H))
            : ((j[Y] = ee), (j[_] = A), (Y = _));
        else if (H < re && 0 > o(oe, A)) (j[Y] = oe), (j[H] = A), (Y = H);
        else break e;
      }
    }
    return O;
  }
  function o(j, O) {
    var A = j.sortIndex - O.sortIndex;
    return A !== 0 ? A : j.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var c = [],
    u = [],
    h = 1,
    m = null,
    g = 3,
    x = !1,
    b = !1,
    S = !1,
    I = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(j) {
    for (var O = n(u); O !== null; ) {
      if (O.callback === null) r(u);
      else if (O.startTime <= j)
        r(u), (O.sortIndex = O.expirationTime), t(c, O);
      else break;
      O = n(u);
    }
  }
  function v(j) {
    if (((S = !1), p(j), !b))
      if (n(c) !== null) (b = !0), B(w);
      else {
        var O = n(u);
        O !== null && G(v, O.startTime - j);
      }
  }
  function w(j, O) {
    (b = !1), S && ((S = !1), f(P), (P = -1)), (x = !0);
    var A = g;
    try {
      for (
        p(O), m = n(c);
        m !== null && (!(m.expirationTime > O) || (j && !M()));

      ) {
        var Y = m.callback;
        if (typeof Y == "function") {
          (m.callback = null), (g = m.priorityLevel);
          var re = Y(m.expirationTime <= O);
          (O = e.unstable_now()),
            typeof re == "function" ? (m.callback = re) : m === n(c) && r(c),
            p(O);
        } else r(c);
        m = n(c);
      }
      if (m !== null) var rt = !0;
      else {
        var _ = n(u);
        _ !== null && G(v, _.startTime - O), (rt = !1);
      }
      return rt;
    } finally {
      (m = null), (g = A), (x = !1);
    }
  }
  var k = !1,
    D = null,
    P = -1,
    U = 5,
    T = -1;
  function M() {
    return !(e.unstable_now() - T < U);
  }
  function C() {
    if (D !== null) {
      var j = e.unstable_now();
      T = j;
      var O = !0;
      try {
        O = D(!0, j);
      } finally {
        O ? E() : ((k = !1), (D = null));
      }
    } else k = !1;
  }
  var E;
  if (typeof d == "function")
    E = function () {
      d(C);
    };
  else if (typeof MessageChannel < "u") {
    var z = new MessageChannel(),
      te = z.port2;
    (z.port1.onmessage = C),
      (E = function () {
        te.postMessage(null);
      });
  } else
    E = function () {
      I(C, 0);
    };
  function B(j) {
    (D = j), k || ((k = !0), E());
  }
  function G(j, O) {
    P = I(function () {
      j(e.unstable_now());
    }, O);
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
      b || x || ((b = !0), B(w));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (U = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return g;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (j) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = g;
      }
      var A = g;
      g = O;
      try {
        return j();
      } finally {
        g = A;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, O) {
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
      var A = g;
      g = j;
      try {
        return O();
      } finally {
        g = A;
      }
    }),
    (e.unstable_scheduleCallback = function (j, O, A) {
      var Y = e.unstable_now();
      switch (
        (typeof A == "object" && A !== null
          ? ((A = A.delay), (A = typeof A == "number" && 0 < A ? Y + A : Y))
          : (A = Y),
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
        (re = A + re),
        (j = {
          id: h++,
          callback: O,
          priorityLevel: j,
          startTime: A,
          expirationTime: re,
          sortIndex: -1,
        }),
        A > Y
          ? ((j.sortIndex = A),
            t(u, j),
            n(c) === null &&
              j === n(u) &&
              (S ? (f(P), (P = -1)) : (S = !0), G(v, A - Y)))
          : ((j.sortIndex = re), t(c, j), b || x || ((b = !0), B(w))),
        j
      );
    }),
    (e.unstable_shouldYield = M),
    (e.unstable_wrapCallback = function (j) {
      var O = g;
      return function () {
        var A = g;
        g = O;
        try {
          return j.apply(this, arguments);
        } finally {
          g = A;
        }
      };
    });
})(Vc);
Wc.exports = Vc;
var Rf = Wc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lf = y,
  dt = Rf;
function L(e) {
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
var Qc = new Set(),
  Fr = {};
function Ln(e, t) {
  sr(e, t), sr(e + "Capture", t);
}
function sr(e, t) {
  for (Fr[e] = t, e = 0; e < t.length; e++) Qc.add(t[e]);
}
var Bt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  gl = Object.prototype.hasOwnProperty,
  Mf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  xa = {},
  ya = {};
function Af(e) {
  return gl.call(ya, e)
    ? !0
    : gl.call(xa, e)
    ? !1
    : Mf.test(e)
    ? (ya[e] = !0)
    : ((xa[e] = !0), !1);
}
function Of(e, t, n, r) {
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
function Uf(e, t, n, r) {
  if (t === null || typeof t > "u" || Of(e, t, n, r)) return !0;
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
function Ke(e, t, n, r, o, l, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = i);
}
var ze = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ze[e] = new Ke(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ze[t] = new Ke(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ze[e] = new Ke(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ze[e] = new Ke(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ze[e] = new Ke(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ze[e] = new Ke(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ze[e] = new Ke(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ze[e] = new Ke(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ze[e] = new Ke(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var gi = /[\-:]([a-z])/g;
function xi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(gi, xi);
    ze[t] = new Ke(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(gi, xi);
    ze[t] = new Ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(gi, xi);
  ze[t] = new Ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ze[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ze.xlinkHref = new Ke(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ze[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function yi(e, t, n, r) {
  var o = ze.hasOwnProperty(t) ? ze[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Uf(t, n, o, r) && (n = null),
    r || o === null
      ? Af(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Vt = Lf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ns = Symbol.for("react.element"),
  zn = Symbol.for("react.portal"),
  Fn = Symbol.for("react.fragment"),
  vi = Symbol.for("react.strict_mode"),
  xl = Symbol.for("react.profiler"),
  qc = Symbol.for("react.provider"),
  Kc = Symbol.for("react.context"),
  wi = Symbol.for("react.forward_ref"),
  yl = Symbol.for("react.suspense"),
  vl = Symbol.for("react.suspense_list"),
  bi = Symbol.for("react.memo"),
  qt = Symbol.for("react.lazy"),
  Yc = Symbol.for("react.offscreen"),
  va = Symbol.iterator;
function vr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (va && e[va]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var _e = Object.assign,
  Go;
function Cr(e) {
  if (Go === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Go = (t && t[1]) || "";
    }
  return (
    `
` +
    Go +
    e
  );
}
var Wo = !1;
function Vo(e, t) {
  if (!e || Wo) return "";
  Wo = !0;
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
          l = r.stack.split(`
`),
          i = o.length - 1,
          a = l.length - 1;
        1 <= i && 0 <= a && o[i] !== l[a];

      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (o[i] !== l[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || o[i] !== l[a])) {
                var c =
                  `
` + o[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    c.includes("<anonymous>") &&
                    (c = c.replace("<anonymous>", e.displayName)),
                  c
                );
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    (Wo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Cr(e) : "";
}
function $f(e) {
  switch (e.tag) {
    case 5:
      return Cr(e.type);
    case 16:
      return Cr("Lazy");
    case 13:
      return Cr("Suspense");
    case 19:
      return Cr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Vo(e.type, !1)), e;
    case 11:
      return (e = Vo(e.type.render, !1)), e;
    case 1:
      return (e = Vo(e.type, !0)), e;
    default:
      return "";
  }
}
function wl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Fn:
      return "Fragment";
    case zn:
      return "Portal";
    case xl:
      return "Profiler";
    case vi:
      return "StrictMode";
    case yl:
      return "Suspense";
    case vl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Kc:
        return (e.displayName || "Context") + ".Consumer";
      case qc:
        return (e._context.displayName || "Context") + ".Provider";
      case wi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case bi:
        return (
          (t = e.displayName || null), t !== null ? t : wl(e.type) || "Memo"
        );
      case qt:
        (t = e._payload), (e = e._init);
        try {
          return wl(e(t));
        } catch {}
    }
  return null;
}
function zf(e) {
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
      return wl(t);
    case 8:
      return t === vi ? "StrictMode" : "Mode";
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
function cn(e) {
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
function Jc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ff(e) {
  var t = Jc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
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
        set: function (i) {
          (r = "" + i), l.call(this, i);
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
function js(e) {
  e._valueTracker || (e._valueTracker = Ff(e));
}
function Xc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Jc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Xs(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function bl(e, t) {
  var n = t.checked;
  return _e({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function wa(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = cn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Zc(e, t) {
  (t = t.checked), t != null && yi(e, "checked", t, !1);
}
function _l(e, t) {
  Zc(e, t);
  var n = cn(t.value),
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
    ? Nl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Nl(e, t.type, cn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ba(e, t, n) {
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
function Nl(e, t, n) {
  (t !== "number" || Xs(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Er = Array.isArray;
function Xn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + cn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function jl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return _e({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function _a(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(L(92));
      if (Er(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: cn(n) };
}
function eu(e, t) {
  var n = cn(t.value),
    r = cn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Na(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function tu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Sl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? tu(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ss,
  nu = (function (e) {
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
        Ss = Ss || document.createElement("div"),
          Ss.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ss.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Br(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ir = {
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
  Bf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ir).forEach(function (e) {
  Bf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ir[t] = Ir[e]);
  });
});
function ru(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Ir.hasOwnProperty(e) && Ir[e])
    ? ("" + t).trim()
    : t + "px";
}
function su(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = ru(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Hf = _e(
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
function kl(e, t) {
  if (t) {
    if (Hf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(L(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(L(62));
  }
}
function Cl(e, t) {
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
var El = null;
function _i(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Dl = null,
  Zn = null,
  er = null;
function ja(e) {
  if ((e = us(e))) {
    if (typeof Dl != "function") throw Error(L(280));
    var t = e.stateNode;
    t && ((t = Do(t)), Dl(e.stateNode, e.type, t));
  }
}
function ou(e) {
  Zn ? (er ? er.push(e) : (er = [e])) : (Zn = e);
}
function lu() {
  if (Zn) {
    var e = Zn,
      t = er;
    if (((er = Zn = null), ja(e), t)) for (e = 0; e < t.length; e++) ja(t[e]);
  }
}
function iu(e, t) {
  return e(t);
}
function au() {}
var Qo = !1;
function cu(e, t, n) {
  if (Qo) return e(t, n);
  Qo = !0;
  try {
    return iu(e, t, n);
  } finally {
    (Qo = !1), (Zn !== null || er !== null) && (au(), lu());
  }
}
function Hr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Do(n);
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
  if (n && typeof n != "function") throw Error(L(231, t, typeof n));
  return n;
}
var Tl = !1;
if (Bt)
  try {
    var wr = {};
    Object.defineProperty(wr, "passive", {
      get: function () {
        Tl = !0;
      },
    }),
      window.addEventListener("test", wr, wr),
      window.removeEventListener("test", wr, wr);
  } catch {
    Tl = !1;
  }
function Gf(e, t, n, r, o, l, i, a, c) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (h) {
    this.onError(h);
  }
}
var Pr = !1,
  Zs = null,
  eo = !1,
  Il = null,
  Wf = {
    onError: function (e) {
      (Pr = !0), (Zs = e);
    },
  };
function Vf(e, t, n, r, o, l, i, a, c) {
  (Pr = !1), (Zs = null), Gf.apply(Wf, arguments);
}
function Qf(e, t, n, r, o, l, i, a, c) {
  if ((Vf.apply(this, arguments), Pr)) {
    if (Pr) {
      var u = Zs;
      (Pr = !1), (Zs = null);
    } else throw Error(L(198));
    eo || ((eo = !0), (Il = u));
  }
}
function Mn(e) {
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
function uu(e) {
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
function Sa(e) {
  if (Mn(e) !== e) throw Error(L(188));
}
function qf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Mn(e)), t === null)) throw Error(L(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var l = o.alternate;
    if (l === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return Sa(o), e;
        if (l === r) return Sa(o), t;
        l = l.sibling;
      }
      throw Error(L(188));
    }
    if (n.return !== r.return) (n = o), (r = l);
    else {
      for (var i = !1, a = o.child; a; ) {
        if (a === n) {
          (i = !0), (n = o), (r = l);
          break;
        }
        if (a === r) {
          (i = !0), (r = o), (n = l);
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = l.child; a; ) {
          if (a === n) {
            (i = !0), (n = l), (r = o);
            break;
          }
          if (a === r) {
            (i = !0), (r = l), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(L(189));
      }
    }
    if (n.alternate !== r) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? e : t;
}
function du(e) {
  return (e = qf(e)), e !== null ? fu(e) : null;
}
function fu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = fu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var hu = dt.unstable_scheduleCallback,
  ka = dt.unstable_cancelCallback,
  Kf = dt.unstable_shouldYield,
  Yf = dt.unstable_requestPaint,
  Ce = dt.unstable_now,
  Jf = dt.unstable_getCurrentPriorityLevel,
  Ni = dt.unstable_ImmediatePriority,
  mu = dt.unstable_UserBlockingPriority,
  to = dt.unstable_NormalPriority,
  Xf = dt.unstable_LowPriority,
  pu = dt.unstable_IdlePriority,
  So = null,
  Lt = null;
function Zf(e) {
  if (Lt && typeof Lt.onCommitFiberRoot == "function")
    try {
      Lt.onCommitFiberRoot(So, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ct = Math.clz32 ? Math.clz32 : nh,
  eh = Math.log,
  th = Math.LN2;
function nh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((eh(e) / th) | 0)) | 0;
}
var ks = 64,
  Cs = 4194304;
function Dr(e) {
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
function no(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~o;
    a !== 0 ? (r = Dr(a)) : ((l &= i), l !== 0 && (r = Dr(l)));
  } else (i = n & ~o), i !== 0 ? (r = Dr(i)) : l !== 0 && (r = Dr(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (l = t & -t), o >= l || (o === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ct(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function rh(e, t) {
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
function sh(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var i = 31 - Ct(l),
      a = 1 << i,
      c = o[i];
    c === -1
      ? (!(a & n) || a & r) && (o[i] = rh(a, t))
      : c <= t && (e.expiredLanes |= a),
      (l &= ~a);
  }
}
function Pl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function gu() {
  var e = ks;
  return (ks <<= 1), !(ks & 4194240) && (ks = 64), e;
}
function qo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function as(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ct(t)),
    (e[t] = n);
}
function oh(e, t) {
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
    var o = 31 - Ct(n),
      l = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function ji(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ct(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ue = 0;
function xu(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var yu,
  Si,
  vu,
  wu,
  bu,
  Rl = !1,
  Es = [],
  en = null,
  tn = null,
  nn = null,
  Gr = new Map(),
  Wr = new Map(),
  Yt = [],
  lh =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ca(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      en = null;
      break;
    case "dragenter":
    case "dragleave":
      tn = null;
      break;
    case "mouseover":
    case "mouseout":
      nn = null;
      break;
    case "pointerover":
    case "pointerout":
      Gr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Wr.delete(t.pointerId);
  }
}
function br(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = us(t)), t !== null && Si(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function ih(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (en = br(en, e, t, n, r, o)), !0;
    case "dragenter":
      return (tn = br(tn, e, t, n, r, o)), !0;
    case "mouseover":
      return (nn = br(nn, e, t, n, r, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return Gr.set(l, br(Gr.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), Wr.set(l, br(Wr.get(l) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function _u(e) {
  var t = vn(e.target);
  if (t !== null) {
    var n = Mn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = uu(n)), t !== null)) {
          (e.blockedOn = t),
            bu(e.priority, function () {
              vu(n);
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
function Bs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ll(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (El = r), n.target.dispatchEvent(r), (El = null);
    } else return (t = us(n)), t !== null && Si(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ea(e, t, n) {
  Bs(e) && n.delete(t);
}
function ah() {
  (Rl = !1),
    en !== null && Bs(en) && (en = null),
    tn !== null && Bs(tn) && (tn = null),
    nn !== null && Bs(nn) && (nn = null),
    Gr.forEach(Ea),
    Wr.forEach(Ea);
}
function _r(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Rl ||
      ((Rl = !0),
      dt.unstable_scheduleCallback(dt.unstable_NormalPriority, ah)));
}
function Vr(e) {
  function t(o) {
    return _r(o, e);
  }
  if (0 < Es.length) {
    _r(Es[0], e);
    for (var n = 1; n < Es.length; n++) {
      var r = Es[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    en !== null && _r(en, e),
      tn !== null && _r(tn, e),
      nn !== null && _r(nn, e),
      Gr.forEach(t),
      Wr.forEach(t),
      n = 0;
    n < Yt.length;
    n++
  )
    (r = Yt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Yt.length && ((n = Yt[0]), n.blockedOn === null); )
    _u(n), n.blockedOn === null && Yt.shift();
}
var tr = Vt.ReactCurrentBatchConfig,
  ro = !0;
function ch(e, t, n, r) {
  var o = ue,
    l = tr.transition;
  tr.transition = null;
  try {
    (ue = 1), ki(e, t, n, r);
  } finally {
    (ue = o), (tr.transition = l);
  }
}
function uh(e, t, n, r) {
  var o = ue,
    l = tr.transition;
  tr.transition = null;
  try {
    (ue = 4), ki(e, t, n, r);
  } finally {
    (ue = o), (tr.transition = l);
  }
}
function ki(e, t, n, r) {
  if (ro) {
    var o = Ll(e, t, n, r);
    if (o === null) sl(e, t, r, so, n), Ca(e, r);
    else if (ih(o, e, t, n, r)) r.stopPropagation();
    else if ((Ca(e, r), t & 4 && -1 < lh.indexOf(e))) {
      for (; o !== null; ) {
        var l = us(o);
        if (
          (l !== null && yu(l),
          (l = Ll(e, t, n, r)),
          l === null && sl(e, t, r, so, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else sl(e, t, r, null, n);
  }
}
var so = null;
function Ll(e, t, n, r) {
  if (((so = null), (e = _i(r)), (e = vn(e)), e !== null))
    if (((t = Mn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = uu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (so = e), null;
}
function Nu(e) {
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
      switch (Jf()) {
        case Ni:
          return 1;
        case mu:
          return 4;
        case to:
        case Xf:
          return 16;
        case pu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Xt = null,
  Ci = null,
  Hs = null;
function ju() {
  if (Hs) return Hs;
  var e,
    t = Ci,
    n = t.length,
    r,
    o = "value" in Xt ? Xt.value : Xt.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++);
  return (Hs = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Gs(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ds() {
  return !0;
}
function Da() {
  return !1;
}
function ht(e) {
  function t(n, r, o, l, i) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = i),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(l) : l[a]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? Ds
        : Da),
      (this.isPropagationStopped = Da),
      this
    );
  }
  return (
    _e(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ds));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ds));
      },
      persist: function () {},
      isPersistent: Ds,
    }),
    t
  );
}
var pr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ei = ht(pr),
  cs = _e({}, pr, { view: 0, detail: 0 }),
  dh = ht(cs),
  Ko,
  Yo,
  Nr,
  ko = _e({}, cs, {
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
    getModifierState: Di,
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
        : (e !== Nr &&
            (Nr && e.type === "mousemove"
              ? ((Ko = e.screenX - Nr.screenX), (Yo = e.screenY - Nr.screenY))
              : (Yo = Ko = 0),
            (Nr = e)),
          Ko);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Yo;
    },
  }),
  Ta = ht(ko),
  fh = _e({}, ko, { dataTransfer: 0 }),
  hh = ht(fh),
  mh = _e({}, cs, { relatedTarget: 0 }),
  Jo = ht(mh),
  ph = _e({}, pr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  gh = ht(ph),
  xh = _e({}, pr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  yh = ht(xh),
  vh = _e({}, pr, { data: 0 }),
  Ia = ht(vh),
  wh = {
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
  bh = {
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
  _h = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Nh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = _h[e]) ? !!t[e] : !1;
}
function Di() {
  return Nh;
}
var jh = _e({}, cs, {
    key: function (e) {
      if (e.key) {
        var t = wh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Gs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? bh[e.keyCode] || "Unidentified"
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
    getModifierState: Di,
    charCode: function (e) {
      return e.type === "keypress" ? Gs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Gs(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Sh = ht(jh),
  kh = _e({}, ko, {
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
  Pa = ht(kh),
  Ch = _e({}, cs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Di,
  }),
  Eh = ht(Ch),
  Dh = _e({}, pr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Th = ht(Dh),
  Ih = _e({}, ko, {
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
  Ph = ht(Ih),
  Rh = [9, 13, 27, 32],
  Ti = Bt && "CompositionEvent" in window,
  Rr = null;
Bt && "documentMode" in document && (Rr = document.documentMode);
var Lh = Bt && "TextEvent" in window && !Rr,
  Su = Bt && (!Ti || (Rr && 8 < Rr && 11 >= Rr)),
  Ra = " ",
  La = !1;
function ku(e, t) {
  switch (e) {
    case "keyup":
      return Rh.indexOf(t.keyCode) !== -1;
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
function Cu(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Bn = !1;
function Mh(e, t) {
  switch (e) {
    case "compositionend":
      return Cu(t);
    case "keypress":
      return t.which !== 32 ? null : ((La = !0), Ra);
    case "textInput":
      return (e = t.data), e === Ra && La ? null : e;
    default:
      return null;
  }
}
function Ah(e, t) {
  if (Bn)
    return e === "compositionend" || (!Ti && ku(e, t))
      ? ((e = ju()), (Hs = Ci = Xt = null), (Bn = !1), e)
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
      return Su && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Oh = {
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
function Ma(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Oh[e.type] : t === "textarea";
}
function Eu(e, t, n, r) {
  ou(r),
    (t = oo(t, "onChange")),
    0 < t.length &&
      ((n = new Ei("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Lr = null,
  Qr = null;
function Uh(e) {
  $u(e, 0);
}
function Co(e) {
  var t = Wn(e);
  if (Xc(t)) return e;
}
function $h(e, t) {
  if (e === "change") return t;
}
var Du = !1;
if (Bt) {
  var Xo;
  if (Bt) {
    var Zo = "oninput" in document;
    if (!Zo) {
      var Aa = document.createElement("div");
      Aa.setAttribute("oninput", "return;"),
        (Zo = typeof Aa.oninput == "function");
    }
    Xo = Zo;
  } else Xo = !1;
  Du = Xo && (!document.documentMode || 9 < document.documentMode);
}
function Oa() {
  Lr && (Lr.detachEvent("onpropertychange", Tu), (Qr = Lr = null));
}
function Tu(e) {
  if (e.propertyName === "value" && Co(Qr)) {
    var t = [];
    Eu(t, Qr, e, _i(e)), cu(Uh, t);
  }
}
function zh(e, t, n) {
  e === "focusin"
    ? (Oa(), (Lr = t), (Qr = n), Lr.attachEvent("onpropertychange", Tu))
    : e === "focusout" && Oa();
}
function Fh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Co(Qr);
}
function Bh(e, t) {
  if (e === "click") return Co(t);
}
function Hh(e, t) {
  if (e === "input" || e === "change") return Co(t);
}
function Gh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Tt = typeof Object.is == "function" ? Object.is : Gh;
function qr(e, t) {
  if (Tt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!gl.call(t, o) || !Tt(e[o], t[o])) return !1;
  }
  return !0;
}
function Ua(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function $a(e, t) {
  var n = Ua(e);
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
    n = Ua(n);
  }
}
function Iu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Iu(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Pu() {
  for (var e = window, t = Xs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Xs(e.document);
  }
  return t;
}
function Ii(e) {
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
function Wh(e) {
  var t = Pu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Iu(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ii(n)) {
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
        var o = n.textContent.length,
          l = Math.min(r.start, o);
        (r = r.end === void 0 ? l : Math.min(r.end, o)),
          !e.extend && l > r && ((o = r), (r = l), (l = o)),
          (o = $a(n, l));
        var i = $a(n, r);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          l > r
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
var Vh = Bt && "documentMode" in document && 11 >= document.documentMode,
  Hn = null,
  Ml = null,
  Mr = null,
  Al = !1;
function za(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Al ||
    Hn == null ||
    Hn !== Xs(r) ||
    ((r = Hn),
    "selectionStart" in r && Ii(r)
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
    (Mr && qr(Mr, r)) ||
      ((Mr = r),
      (r = oo(Ml, "onSelect")),
      0 < r.length &&
        ((t = new Ei("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Hn))));
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
var Gn = {
    animationend: Ts("Animation", "AnimationEnd"),
    animationiteration: Ts("Animation", "AnimationIteration"),
    animationstart: Ts("Animation", "AnimationStart"),
    transitionend: Ts("Transition", "TransitionEnd"),
  },
  el = {},
  Ru = {};
Bt &&
  ((Ru = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Gn.animationend.animation,
    delete Gn.animationiteration.animation,
    delete Gn.animationstart.animation),
  "TransitionEvent" in window || delete Gn.transitionend.transition);
function Eo(e) {
  if (el[e]) return el[e];
  if (!Gn[e]) return e;
  var t = Gn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ru) return (el[e] = t[n]);
  return e;
}
var Lu = Eo("animationend"),
  Mu = Eo("animationiteration"),
  Au = Eo("animationstart"),
  Ou = Eo("transitionend"),
  Uu = new Map(),
  Fa =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function dn(e, t) {
  Uu.set(e, t), Ln(t, [e]);
}
for (var tl = 0; tl < Fa.length; tl++) {
  var nl = Fa[tl],
    Qh = nl.toLowerCase(),
    qh = nl[0].toUpperCase() + nl.slice(1);
  dn(Qh, "on" + qh);
}
dn(Lu, "onAnimationEnd");
dn(Mu, "onAnimationIteration");
dn(Au, "onAnimationStart");
dn("dblclick", "onDoubleClick");
dn("focusin", "onFocus");
dn("focusout", "onBlur");
dn(Ou, "onTransitionEnd");
sr("onMouseEnter", ["mouseout", "mouseover"]);
sr("onMouseLeave", ["mouseout", "mouseover"]);
sr("onPointerEnter", ["pointerout", "pointerover"]);
sr("onPointerLeave", ["pointerout", "pointerover"]);
Ln(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ln(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ln("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ln(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ln(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ln(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Tr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Kh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Tr));
function Ba(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Qf(r, t, void 0, e), (e.currentTarget = null);
}
function $u(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            c = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), c !== l && o.isPropagationStopped())) break e;
          Ba(o, a, u), (l = c);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (c = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            c !== l && o.isPropagationStopped())
          )
            break e;
          Ba(o, a, u), (l = c);
        }
    }
  }
  if (eo) throw ((e = Il), (eo = !1), (Il = null), e);
}
function pe(e, t) {
  var n = t[Fl];
  n === void 0 && (n = t[Fl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (zu(t, e, 2, !1), n.add(r));
}
function rl(e, t, n) {
  var r = 0;
  t && (r |= 4), zu(n, e, r, t);
}
var Is = "_reactListening" + Math.random().toString(36).slice(2);
function Kr(e) {
  if (!e[Is]) {
    (e[Is] = !0),
      Qc.forEach(function (n) {
        n !== "selectionchange" && (Kh.has(n) || rl(n, !1, e), rl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Is] || ((t[Is] = !0), rl("selectionchange", !1, t));
  }
}
function zu(e, t, n, r) {
  switch (Nu(t)) {
    case 1:
      var o = ch;
      break;
    case 4:
      o = uh;
      break;
    default:
      o = ki;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Tl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function sl(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var c = i.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = i.stateNode.containerInfo),
              c === o || (c.nodeType === 8 && c.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = vn(a)), i === null)) return;
          if (((c = i.tag), c === 5 || c === 6)) {
            r = l = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  cu(function () {
    var u = l,
      h = _i(n),
      m = [];
    e: {
      var g = Uu.get(e);
      if (g !== void 0) {
        var x = Ei,
          b = e;
        switch (e) {
          case "keypress":
            if (Gs(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = Sh;
            break;
          case "focusin":
            (b = "focus"), (x = Jo);
            break;
          case "focusout":
            (b = "blur"), (x = Jo);
            break;
          case "beforeblur":
          case "afterblur":
            x = Jo;
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
            x = Ta;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = hh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Eh;
            break;
          case Lu:
          case Mu:
          case Au:
            x = gh;
            break;
          case Ou:
            x = Th;
            break;
          case "scroll":
            x = dh;
            break;
          case "wheel":
            x = Ph;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = yh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Pa;
        }
        var S = (t & 4) !== 0,
          I = !S && e === "scroll",
          f = S ? (g !== null ? g + "Capture" : null) : g;
        S = [];
        for (var d = u, p; d !== null; ) {
          p = d;
          var v = p.stateNode;
          if (
            (p.tag === 5 &&
              v !== null &&
              ((p = v),
              f !== null && ((v = Hr(d, f)), v != null && S.push(Yr(d, v, p)))),
            I)
          )
            break;
          d = d.return;
        }
        0 < S.length &&
          ((g = new x(g, b, null, n, h)), m.push({ event: g, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((g = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          g &&
            n !== El &&
            (b = n.relatedTarget || n.fromElement) &&
            (vn(b) || b[Ht]))
        )
          break e;
        if (
          (x || g) &&
          ((g =
            h.window === h
              ? h
              : (g = h.ownerDocument)
              ? g.defaultView || g.parentWindow
              : window),
          x
            ? ((b = n.relatedTarget || n.toElement),
              (x = u),
              (b = b ? vn(b) : null),
              b !== null &&
                ((I = Mn(b)), b !== I || (b.tag !== 5 && b.tag !== 6)) &&
                (b = null))
            : ((x = null), (b = u)),
          x !== b)
        ) {
          if (
            ((S = Ta),
            (v = "onMouseLeave"),
            (f = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = Pa),
              (v = "onPointerLeave"),
              (f = "onPointerEnter"),
              (d = "pointer")),
            (I = x == null ? g : Wn(x)),
            (p = b == null ? g : Wn(b)),
            (g = new S(v, d + "leave", x, n, h)),
            (g.target = I),
            (g.relatedTarget = p),
            (v = null),
            vn(h) === u &&
              ((S = new S(f, d + "enter", b, n, h)),
              (S.target = p),
              (S.relatedTarget = I),
              (v = S)),
            (I = v),
            x && b)
          )
            t: {
              for (S = x, f = b, d = 0, p = S; p; p = $n(p)) d++;
              for (p = 0, v = f; v; v = $n(v)) p++;
              for (; 0 < d - p; ) (S = $n(S)), d--;
              for (; 0 < p - d; ) (f = $n(f)), p--;
              for (; d--; ) {
                if (S === f || (f !== null && S === f.alternate)) break t;
                (S = $n(S)), (f = $n(f));
              }
              S = null;
            }
          else S = null;
          x !== null && Ha(m, g, x, S, !1),
            b !== null && I !== null && Ha(m, I, b, S, !0);
        }
      }
      e: {
        if (
          ((g = u ? Wn(u) : window),
          (x = g.nodeName && g.nodeName.toLowerCase()),
          x === "select" || (x === "input" && g.type === "file"))
        )
          var w = $h;
        else if (Ma(g))
          if (Du) w = Hh;
          else {
            w = Fh;
            var k = zh;
          }
        else
          (x = g.nodeName) &&
            x.toLowerCase() === "input" &&
            (g.type === "checkbox" || g.type === "radio") &&
            (w = Bh);
        if (w && (w = w(e, u))) {
          Eu(m, w, n, h);
          break e;
        }
        k && k(e, g, u),
          e === "focusout" &&
            (k = g._wrapperState) &&
            k.controlled &&
            g.type === "number" &&
            Nl(g, "number", g.value);
      }
      switch (((k = u ? Wn(u) : window), e)) {
        case "focusin":
          (Ma(k) || k.contentEditable === "true") &&
            ((Hn = k), (Ml = u), (Mr = null));
          break;
        case "focusout":
          Mr = Ml = Hn = null;
          break;
        case "mousedown":
          Al = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Al = !1), za(m, n, h);
          break;
        case "selectionchange":
          if (Vh) break;
        case "keydown":
        case "keyup":
          za(m, n, h);
      }
      var D;
      if (Ti)
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
        Bn
          ? ku(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (Su &&
          n.locale !== "ko" &&
          (Bn || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Bn && (D = ju())
            : ((Xt = h),
              (Ci = "value" in Xt ? Xt.value : Xt.textContent),
              (Bn = !0))),
        (k = oo(u, P)),
        0 < k.length &&
          ((P = new Ia(P, e, null, n, h)),
          m.push({ event: P, listeners: k }),
          D ? (P.data = D) : ((D = Cu(n)), D !== null && (P.data = D)))),
        (D = Lh ? Mh(e, n) : Ah(e, n)) &&
          ((u = oo(u, "onBeforeInput")),
          0 < u.length &&
            ((h = new Ia("onBeforeInput", "beforeinput", null, n, h)),
            m.push({ event: h, listeners: u }),
            (h.data = D)));
    }
    $u(m, t);
  });
}
function Yr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function oo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = Hr(e, n)),
      l != null && r.unshift(Yr(e, l, o)),
      (l = Hr(e, t)),
      l != null && r.push(Yr(e, l, o))),
      (e = e.return);
  }
  return r;
}
function $n(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ha(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      c = a.alternate,
      u = a.stateNode;
    if (c !== null && c === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((c = Hr(n, l)), c != null && i.unshift(Yr(n, c, a)))
        : o || ((c = Hr(n, l)), c != null && i.push(Yr(n, c, a)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Yh = /\r\n?/g,
  Jh = /\u0000|\uFFFD/g;
function Ga(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Yh,
      `
`
    )
    .replace(Jh, "");
}
function Ps(e, t, n) {
  if (((t = Ga(t)), Ga(e) !== t && n)) throw Error(L(425));
}
function lo() {}
var Ol = null,
  Ul = null;
function $l(e, t) {
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
var zl = typeof setTimeout == "function" ? setTimeout : void 0,
  Xh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Wa = typeof Promise == "function" ? Promise : void 0,
  Zh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Wa < "u"
      ? function (e) {
          return Wa.resolve(null).then(e).catch(em);
        }
      : zl;
function em(e) {
  setTimeout(function () {
    throw e;
  });
}
function ol(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Vr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Vr(t);
}
function rn(e) {
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
function Va(e) {
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
var gr = Math.random().toString(36).slice(2),
  Rt = "__reactFiber$" + gr,
  Jr = "__reactProps$" + gr,
  Ht = "__reactContainer$" + gr,
  Fl = "__reactEvents$" + gr,
  tm = "__reactListeners$" + gr,
  nm = "__reactHandles$" + gr;
function vn(e) {
  var t = e[Rt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ht] || n[Rt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Va(e); e !== null; ) {
          if ((n = e[Rt])) return n;
          e = Va(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function us(e) {
  return (
    (e = e[Rt] || e[Ht]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Wn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function Do(e) {
  return e[Jr] || null;
}
var Bl = [],
  Vn = -1;
function fn(e) {
  return { current: e };
}
function ge(e) {
  0 > Vn || ((e.current = Bl[Vn]), (Bl[Vn] = null), Vn--);
}
function fe(e, t) {
  Vn++, (Bl[Vn] = e.current), (e.current = t);
}
var un = {},
  We = fn(un),
  et = fn(!1),
  kn = un;
function or(e, t) {
  var n = e.type.contextTypes;
  if (!n) return un;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    l;
  for (l in n) o[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function tt(e) {
  return (e = e.childContextTypes), e != null;
}
function io() {
  ge(et), ge(We);
}
function Qa(e, t, n) {
  if (We.current !== un) throw Error(L(168));
  fe(We, t), fe(et, n);
}
function Fu(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(L(108, zf(e) || "Unknown", o));
  return _e({}, n, r);
}
function ao(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || un),
    (kn = We.current),
    fe(We, e),
    fe(et, et.current),
    !0
  );
}
function qa(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  n
    ? ((e = Fu(e, t, kn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ge(et),
      ge(We),
      fe(We, e))
    : ge(et),
    fe(et, n);
}
var Ot = null,
  To = !1,
  ll = !1;
function Bu(e) {
  Ot === null ? (Ot = [e]) : Ot.push(e);
}
function rm(e) {
  (To = !0), Bu(e);
}
function hn() {
  if (!ll && Ot !== null) {
    ll = !0;
    var e = 0,
      t = ue;
    try {
      var n = Ot;
      for (ue = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ot = null), (To = !1);
    } catch (o) {
      throw (Ot !== null && (Ot = Ot.slice(e + 1)), hu(Ni, hn), o);
    } finally {
      (ue = t), (ll = !1);
    }
  }
  return null;
}
var Qn = [],
  qn = 0,
  co = null,
  uo = 0,
  pt = [],
  gt = 0,
  Cn = null,
  Ut = 1,
  $t = "";
function gn(e, t) {
  (Qn[qn++] = uo), (Qn[qn++] = co), (co = e), (uo = t);
}
function Hu(e, t, n) {
  (pt[gt++] = Ut), (pt[gt++] = $t), (pt[gt++] = Cn), (Cn = e);
  var r = Ut;
  e = $t;
  var o = 32 - Ct(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var l = 32 - Ct(t) + o;
  if (30 < l) {
    var i = o - (o % 5);
    (l = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (Ut = (1 << (32 - Ct(t) + o)) | (n << o) | r),
      ($t = l + e);
  } else (Ut = (1 << l) | (n << o) | r), ($t = e);
}
function Pi(e) {
  e.return !== null && (gn(e, 1), Hu(e, 1, 0));
}
function Ri(e) {
  for (; e === co; )
    (co = Qn[--qn]), (Qn[qn] = null), (uo = Qn[--qn]), (Qn[qn] = null);
  for (; e === Cn; )
    (Cn = pt[--gt]),
      (pt[gt] = null),
      ($t = pt[--gt]),
      (pt[gt] = null),
      (Ut = pt[--gt]),
      (pt[gt] = null);
}
var ut = null,
  lt = null,
  xe = !1,
  St = null;
function Gu(e, t) {
  var n = xt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ka(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ut = e), (lt = rn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ut = e), (lt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Cn !== null ? { id: Ut, overflow: $t } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = xt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ut = e),
            (lt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Hl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Gl(e) {
  if (xe) {
    var t = lt;
    if (t) {
      var n = t;
      if (!Ka(e, t)) {
        if (Hl(e)) throw Error(L(418));
        t = rn(n.nextSibling);
        var r = ut;
        t && Ka(e, t)
          ? Gu(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (xe = !1), (ut = e));
      }
    } else {
      if (Hl(e)) throw Error(L(418));
      (e.flags = (e.flags & -4097) | 2), (xe = !1), (ut = e);
    }
  }
}
function Ya(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ut = e;
}
function Rs(e) {
  if (e !== ut) return !1;
  if (!xe) return Ya(e), (xe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !$l(e.type, e.memoizedProps))),
    t && (t = lt))
  ) {
    if (Hl(e)) throw (Wu(), Error(L(418)));
    for (; t; ) Gu(e, t), (t = rn(t.nextSibling));
  }
  if ((Ya(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              lt = rn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      lt = null;
    }
  } else lt = ut ? rn(e.stateNode.nextSibling) : null;
  return !0;
}
function Wu() {
  for (var e = lt; e; ) e = rn(e.nextSibling);
}
function lr() {
  (lt = ut = null), (xe = !1);
}
function Li(e) {
  St === null ? (St = [e]) : St.push(e);
}
var sm = Vt.ReactCurrentBatchConfig;
function jr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(L(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(L(147, e));
      var o = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (i) {
            var a = o.refs;
            i === null ? delete a[l] : (a[l] = i);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(L(284));
    if (!n._owner) throw Error(L(290, e));
  }
  return e;
}
function Ls(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      L(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Ja(e) {
  var t = e._init;
  return t(e._payload);
}
function Vu(e) {
  function t(f, d) {
    if (e) {
      var p = f.deletions;
      p === null ? ((f.deletions = [d]), (f.flags |= 16)) : p.push(d);
    }
  }
  function n(f, d) {
    if (!e) return null;
    for (; d !== null; ) t(f, d), (d = d.sibling);
    return null;
  }
  function r(f, d) {
    for (f = new Map(); d !== null; )
      d.key !== null ? f.set(d.key, d) : f.set(d.index, d), (d = d.sibling);
    return f;
  }
  function o(f, d) {
    return (f = an(f, d)), (f.index = 0), (f.sibling = null), f;
  }
  function l(f, d, p) {
    return (
      (f.index = p),
      e
        ? ((p = f.alternate),
          p !== null
            ? ((p = p.index), p < d ? ((f.flags |= 2), d) : p)
            : ((f.flags |= 2), d))
        : ((f.flags |= 1048576), d)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function a(f, d, p, v) {
    return d === null || d.tag !== 6
      ? ((d = hl(p, f.mode, v)), (d.return = f), d)
      : ((d = o(d, p)), (d.return = f), d);
  }
  function c(f, d, p, v) {
    var w = p.type;
    return w === Fn
      ? h(f, d, p.props.children, v, p.key)
      : d !== null &&
        (d.elementType === w ||
          (typeof w == "object" &&
            w !== null &&
            w.$$typeof === qt &&
            Ja(w) === d.type))
      ? ((v = o(d, p.props)), (v.ref = jr(f, d, p)), (v.return = f), v)
      : ((v = Js(p.type, p.key, p.props, null, f.mode, v)),
        (v.ref = jr(f, d, p)),
        (v.return = f),
        v);
  }
  function u(f, d, p, v) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== p.containerInfo ||
      d.stateNode.implementation !== p.implementation
      ? ((d = ml(p, f.mode, v)), (d.return = f), d)
      : ((d = o(d, p.children || [])), (d.return = f), d);
  }
  function h(f, d, p, v, w) {
    return d === null || d.tag !== 7
      ? ((d = Nn(p, f.mode, v, w)), (d.return = f), d)
      : ((d = o(d, p)), (d.return = f), d);
  }
  function m(f, d, p) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = hl("" + d, f.mode, p)), (d.return = f), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Ns:
          return (
            (p = Js(d.type, d.key, d.props, null, f.mode, p)),
            (p.ref = jr(f, null, d)),
            (p.return = f),
            p
          );
        case zn:
          return (d = ml(d, f.mode, p)), (d.return = f), d;
        case qt:
          var v = d._init;
          return m(f, v(d._payload), p);
      }
      if (Er(d) || vr(d))
        return (d = Nn(d, f.mode, p, null)), (d.return = f), d;
      Ls(f, d);
    }
    return null;
  }
  function g(f, d, p, v) {
    var w = d !== null ? d.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return w !== null ? null : a(f, d, "" + p, v);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Ns:
          return p.key === w ? c(f, d, p, v) : null;
        case zn:
          return p.key === w ? u(f, d, p, v) : null;
        case qt:
          return (w = p._init), g(f, d, w(p._payload), v);
      }
      if (Er(p) || vr(p)) return w !== null ? null : h(f, d, p, v, null);
      Ls(f, p);
    }
    return null;
  }
  function x(f, d, p, v, w) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (f = f.get(p) || null), a(d, f, "" + v, w);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Ns:
          return (f = f.get(v.key === null ? p : v.key) || null), c(d, f, v, w);
        case zn:
          return (f = f.get(v.key === null ? p : v.key) || null), u(d, f, v, w);
        case qt:
          var k = v._init;
          return x(f, d, p, k(v._payload), w);
      }
      if (Er(v) || vr(v)) return (f = f.get(p) || null), h(d, f, v, w, null);
      Ls(d, v);
    }
    return null;
  }
  function b(f, d, p, v) {
    for (
      var w = null, k = null, D = d, P = (d = 0), U = null;
      D !== null && P < p.length;
      P++
    ) {
      D.index > P ? ((U = D), (D = null)) : (U = D.sibling);
      var T = g(f, D, p[P], v);
      if (T === null) {
        D === null && (D = U);
        break;
      }
      e && D && T.alternate === null && t(f, D),
        (d = l(T, d, P)),
        k === null ? (w = T) : (k.sibling = T),
        (k = T),
        (D = U);
    }
    if (P === p.length) return n(f, D), xe && gn(f, P), w;
    if (D === null) {
      for (; P < p.length; P++)
        (D = m(f, p[P], v)),
          D !== null &&
            ((d = l(D, d, P)), k === null ? (w = D) : (k.sibling = D), (k = D));
      return xe && gn(f, P), w;
    }
    for (D = r(f, D); P < p.length; P++)
      (U = x(D, f, P, p[P], v)),
        U !== null &&
          (e && U.alternate !== null && D.delete(U.key === null ? P : U.key),
          (d = l(U, d, P)),
          k === null ? (w = U) : (k.sibling = U),
          (k = U));
    return (
      e &&
        D.forEach(function (M) {
          return t(f, M);
        }),
      xe && gn(f, P),
      w
    );
  }
  function S(f, d, p, v) {
    var w = vr(p);
    if (typeof w != "function") throw Error(L(150));
    if (((p = w.call(p)), p == null)) throw Error(L(151));
    for (
      var k = (w = null), D = d, P = (d = 0), U = null, T = p.next();
      D !== null && !T.done;
      P++, T = p.next()
    ) {
      D.index > P ? ((U = D), (D = null)) : (U = D.sibling);
      var M = g(f, D, T.value, v);
      if (M === null) {
        D === null && (D = U);
        break;
      }
      e && D && M.alternate === null && t(f, D),
        (d = l(M, d, P)),
        k === null ? (w = M) : (k.sibling = M),
        (k = M),
        (D = U);
    }
    if (T.done) return n(f, D), xe && gn(f, P), w;
    if (D === null) {
      for (; !T.done; P++, T = p.next())
        (T = m(f, T.value, v)),
          T !== null &&
            ((d = l(T, d, P)), k === null ? (w = T) : (k.sibling = T), (k = T));
      return xe && gn(f, P), w;
    }
    for (D = r(f, D); !T.done; P++, T = p.next())
      (T = x(D, f, P, T.value, v)),
        T !== null &&
          (e && T.alternate !== null && D.delete(T.key === null ? P : T.key),
          (d = l(T, d, P)),
          k === null ? (w = T) : (k.sibling = T),
          (k = T));
    return (
      e &&
        D.forEach(function (C) {
          return t(f, C);
        }),
      xe && gn(f, P),
      w
    );
  }
  function I(f, d, p, v) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Fn &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case Ns:
          e: {
            for (var w = p.key, k = d; k !== null; ) {
              if (k.key === w) {
                if (((w = p.type), w === Fn)) {
                  if (k.tag === 7) {
                    n(f, k.sibling),
                      (d = o(k, p.props.children)),
                      (d.return = f),
                      (f = d);
                    break e;
                  }
                } else if (
                  k.elementType === w ||
                  (typeof w == "object" &&
                    w !== null &&
                    w.$$typeof === qt &&
                    Ja(w) === k.type)
                ) {
                  n(f, k.sibling),
                    (d = o(k, p.props)),
                    (d.ref = jr(f, k, p)),
                    (d.return = f),
                    (f = d);
                  break e;
                }
                n(f, k);
                break;
              } else t(f, k);
              k = k.sibling;
            }
            p.type === Fn
              ? ((d = Nn(p.props.children, f.mode, v, p.key)),
                (d.return = f),
                (f = d))
              : ((v = Js(p.type, p.key, p.props, null, f.mode, v)),
                (v.ref = jr(f, d, p)),
                (v.return = f),
                (f = v));
          }
          return i(f);
        case zn:
          e: {
            for (k = p.key; d !== null; ) {
              if (d.key === k)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === p.containerInfo &&
                  d.stateNode.implementation === p.implementation
                ) {
                  n(f, d.sibling),
                    (d = o(d, p.children || [])),
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
            (d = ml(p, f.mode, v)), (d.return = f), (f = d);
          }
          return i(f);
        case qt:
          return (k = p._init), I(f, d, k(p._payload), v);
      }
      if (Er(p)) return b(f, d, p, v);
      if (vr(p)) return S(f, d, p, v);
      Ls(f, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        d !== null && d.tag === 6
          ? (n(f, d.sibling), (d = o(d, p)), (d.return = f), (f = d))
          : (n(f, d), (d = hl(p, f.mode, v)), (d.return = f), (f = d)),
        i(f))
      : n(f, d);
  }
  return I;
}
var ir = Vu(!0),
  Qu = Vu(!1),
  fo = fn(null),
  ho = null,
  Kn = null,
  Mi = null;
function Ai() {
  Mi = Kn = ho = null;
}
function Oi(e) {
  var t = fo.current;
  ge(fo), (e._currentValue = t);
}
function Wl(e, t, n) {
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
function nr(e, t) {
  (ho = e),
    (Mi = Kn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ze = !0), (e.firstContext = null));
}
function vt(e) {
  var t = e._currentValue;
  if (Mi !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Kn === null)) {
      if (ho === null) throw Error(L(308));
      (Kn = e), (ho.dependencies = { lanes: 0, firstContext: e });
    } else Kn = Kn.next = e;
  return t;
}
var wn = null;
function Ui(e) {
  wn === null ? (wn = [e]) : wn.push(e);
}
function qu(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Ui(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Gt(e, r)
  );
}
function Gt(e, t) {
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
var Kt = !1;
function $i(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ku(e, t) {
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
function Ft(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function sn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ae & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Gt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Ui(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Gt(e, n)
  );
}
function Ws(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ji(e, n);
  }
}
function Xa(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      l = null;
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
        l === null ? (o = l = i) : (l = l.next = i), (n = n.next);
      } while (n !== null);
      l === null ? (o = l = t) : (l = l.next = t);
    } else o = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: l,
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
function mo(e, t, n, r) {
  var o = e.updateQueue;
  Kt = !1;
  var l = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var c = a,
      u = c.next;
    (c.next = null), i === null ? (l = u) : (i.next = u), (i = c);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (a = h.lastBaseUpdate),
      a !== i &&
        (a === null ? (h.firstBaseUpdate = u) : (a.next = u),
        (h.lastBaseUpdate = c)));
  }
  if (l !== null) {
    var m = o.baseState;
    (i = 0), (h = u = c = null), (a = l);
    do {
      var g = a.lane,
        x = a.eventTime;
      if ((r & g) === g) {
        h !== null &&
          (h = h.next =
            {
              eventTime: x,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var b = e,
            S = a;
          switch (((g = t), (x = n), S.tag)) {
            case 1:
              if (((b = S.payload), typeof b == "function")) {
                m = b.call(x, m, g);
                break e;
              }
              m = b;
              break e;
            case 3:
              b.flags = (b.flags & -65537) | 128;
            case 0:
              if (
                ((b = S.payload),
                (g = typeof b == "function" ? b.call(x, m, g) : b),
                g == null)
              )
                break e;
              m = _e({}, m, g);
              break e;
            case 2:
              Kt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (g = o.effects),
          g === null ? (o.effects = [a]) : g.push(a));
      } else
        (x = {
          eventTime: x,
          lane: g,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          h === null ? ((u = h = x), (c = m)) : (h = h.next = x),
          (i |= g);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (g = a),
          (a = g.next),
          (g.next = null),
          (o.lastBaseUpdate = g),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (c = m),
      (o.baseState = c),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = h),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (i |= o.lane), (o = o.next);
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    (Dn |= i), (e.lanes = i), (e.memoizedState = m);
  }
}
function Za(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(L(191, o));
        o.call(r);
      }
    }
}
var ds = {},
  Mt = fn(ds),
  Xr = fn(ds),
  Zr = fn(ds);
function bn(e) {
  if (e === ds) throw Error(L(174));
  return e;
}
function zi(e, t) {
  switch ((fe(Zr, t), fe(Xr, e), fe(Mt, ds), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Sl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Sl(t, e));
  }
  ge(Mt), fe(Mt, t);
}
function ar() {
  ge(Mt), ge(Xr), ge(Zr);
}
function Yu(e) {
  bn(Zr.current);
  var t = bn(Mt.current),
    n = Sl(t, e.type);
  t !== n && (fe(Xr, e), fe(Mt, n));
}
function Fi(e) {
  Xr.current === e && (ge(Mt), ge(Xr));
}
var ve = fn(0);
function po(e) {
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
var il = [];
function Bi() {
  for (var e = 0; e < il.length; e++)
    il[e]._workInProgressVersionPrimary = null;
  il.length = 0;
}
var Vs = Vt.ReactCurrentDispatcher,
  al = Vt.ReactCurrentBatchConfig,
  En = 0,
  be = null,
  Pe = null,
  Ae = null,
  go = !1,
  Ar = !1,
  es = 0,
  om = 0;
function Fe() {
  throw Error(L(321));
}
function Hi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Tt(e[n], t[n])) return !1;
  return !0;
}
function Gi(e, t, n, r, o, l) {
  if (
    ((En = l),
    (be = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Vs.current = e === null || e.memoizedState === null ? cm : um),
    (e = n(r, o)),
    Ar)
  ) {
    l = 0;
    do {
      if (((Ar = !1), (es = 0), 25 <= l)) throw Error(L(301));
      (l += 1),
        (Ae = Pe = null),
        (t.updateQueue = null),
        (Vs.current = dm),
        (e = n(r, o));
    } while (Ar);
  }
  if (
    ((Vs.current = xo),
    (t = Pe !== null && Pe.next !== null),
    (En = 0),
    (Ae = Pe = be = null),
    (go = !1),
    t)
  )
    throw Error(L(300));
  return e;
}
function Wi() {
  var e = es !== 0;
  return (es = 0), e;
}
function Pt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ae === null ? (be.memoizedState = Ae = e) : (Ae = Ae.next = e), Ae;
}
function wt() {
  if (Pe === null) {
    var e = be.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Pe.next;
  var t = Ae === null ? be.memoizedState : Ae.next;
  if (t !== null) (Ae = t), (Pe = e);
  else {
    if (e === null) throw Error(L(310));
    (Pe = e),
      (e = {
        memoizedState: Pe.memoizedState,
        baseState: Pe.baseState,
        baseQueue: Pe.baseQueue,
        queue: Pe.queue,
        next: null,
      }),
      Ae === null ? (be.memoizedState = Ae = e) : (Ae = Ae.next = e);
  }
  return Ae;
}
function ts(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function cl(e) {
  var t = wt(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = Pe,
    o = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var i = o.next;
      (o.next = l.next), (l.next = i);
    }
    (r.baseQueue = o = l), (n.pending = null);
  }
  if (o !== null) {
    (l = o.next), (r = r.baseState);
    var a = (i = null),
      c = null,
      u = l;
    do {
      var h = u.lane;
      if ((En & h) === h)
        c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var m = {
          lane: h,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        c === null ? ((a = c = m), (i = r)) : (c = c.next = m),
          (be.lanes |= h),
          (Dn |= h);
      }
      u = u.next;
    } while (u !== null && u !== l);
    c === null ? (i = r) : (c.next = a),
      Tt(r, t.memoizedState) || (Ze = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = c),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (be.lanes |= l), (Dn |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ul(e) {
  var t = wt(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (l = e(l, i.action)), (i = i.next);
    while (i !== o);
    Tt(l, t.memoizedState) || (Ze = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function Ju() {}
function Xu(e, t) {
  var n = be,
    r = wt(),
    o = t(),
    l = !Tt(r.memoizedState, o);
  if (
    (l && ((r.memoizedState = o), (Ze = !0)),
    (r = r.queue),
    Vi(td.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (Ae !== null && Ae.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ns(9, ed.bind(null, n, r, o, t), void 0, null),
      Oe === null)
    )
      throw Error(L(349));
    En & 30 || Zu(n, t, o);
  }
  return o;
}
function Zu(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = be.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (be.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function ed(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), nd(t) && rd(e);
}
function td(e, t, n) {
  return n(function () {
    nd(t) && rd(e);
  });
}
function nd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Tt(e, n);
  } catch {
    return !0;
  }
}
function rd(e) {
  var t = Gt(e, 1);
  t !== null && Et(t, e, 1, -1);
}
function ec(e) {
  var t = Pt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ts,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = am.bind(null, be, e)),
    [t.memoizedState, e]
  );
}
function ns(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = be.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (be.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function sd() {
  return wt().memoizedState;
}
function Qs(e, t, n, r) {
  var o = Pt();
  (be.flags |= e),
    (o.memoizedState = ns(1 | t, n, void 0, r === void 0 ? null : r));
}
function Io(e, t, n, r) {
  var o = wt();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (Pe !== null) {
    var i = Pe.memoizedState;
    if (((l = i.destroy), r !== null && Hi(r, i.deps))) {
      o.memoizedState = ns(t, n, l, r);
      return;
    }
  }
  (be.flags |= e), (o.memoizedState = ns(1 | t, n, l, r));
}
function tc(e, t) {
  return Qs(8390656, 8, e, t);
}
function Vi(e, t) {
  return Io(2048, 8, e, t);
}
function od(e, t) {
  return Io(4, 2, e, t);
}
function ld(e, t) {
  return Io(4, 4, e, t);
}
function id(e, t) {
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
function ad(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Io(4, 4, id.bind(null, t, e), n)
  );
}
function Qi() {}
function cd(e, t) {
  var n = wt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Hi(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ud(e, t) {
  var n = wt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Hi(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function dd(e, t, n) {
  return En & 21
    ? (Tt(n, t) || ((n = gu()), (be.lanes |= n), (Dn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ze = !0)), (e.memoizedState = n));
}
function lm(e, t) {
  var n = ue;
  (ue = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = al.transition;
  al.transition = {};
  try {
    e(!1), t();
  } finally {
    (ue = n), (al.transition = r);
  }
}
function fd() {
  return wt().memoizedState;
}
function im(e, t, n) {
  var r = ln(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    hd(e))
  )
    md(t, n);
  else if (((n = qu(e, t, n, r)), n !== null)) {
    var o = Qe();
    Et(n, e, r, o), pd(n, t, r);
  }
}
function am(e, t, n) {
  var r = ln(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (hd(e)) md(t, o);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = l(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), Tt(a, i))) {
          var c = t.interleaved;
          c === null
            ? ((o.next = o), Ui(t))
            : ((o.next = c.next), (c.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = qu(e, t, o, r)),
      n !== null && ((o = Qe()), Et(n, e, r, o), pd(n, t, r));
  }
}
function hd(e) {
  var t = e.alternate;
  return e === be || (t !== null && t === be);
}
function md(e, t) {
  Ar = go = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function pd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ji(e, n);
  }
}
var xo = {
    readContext: vt,
    useCallback: Fe,
    useContext: Fe,
    useEffect: Fe,
    useImperativeHandle: Fe,
    useInsertionEffect: Fe,
    useLayoutEffect: Fe,
    useMemo: Fe,
    useReducer: Fe,
    useRef: Fe,
    useState: Fe,
    useDebugValue: Fe,
    useDeferredValue: Fe,
    useTransition: Fe,
    useMutableSource: Fe,
    useSyncExternalStore: Fe,
    useId: Fe,
    unstable_isNewReconciler: !1,
  },
  cm = {
    readContext: vt,
    useCallback: function (e, t) {
      return (Pt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: vt,
    useEffect: tc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Qs(4194308, 4, id.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Qs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Qs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Pt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Pt();
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
        (e = e.dispatch = im.bind(null, be, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Pt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ec,
    useDebugValue: Qi,
    useDeferredValue: function (e) {
      return (Pt().memoizedState = e);
    },
    useTransition: function () {
      var e = ec(!1),
        t = e[0];
      return (e = lm.bind(null, e[1])), (Pt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = be,
        o = Pt();
      if (xe) {
        if (n === void 0) throw Error(L(407));
        n = n();
      } else {
        if (((n = t()), Oe === null)) throw Error(L(349));
        En & 30 || Zu(r, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        tc(td.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        ns(9, ed.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Pt(),
        t = Oe.identifierPrefix;
      if (xe) {
        var n = $t,
          r = Ut;
        (n = (r & ~(1 << (32 - Ct(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = es++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = om++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  um = {
    readContext: vt,
    useCallback: cd,
    useContext: vt,
    useEffect: Vi,
    useImperativeHandle: ad,
    useInsertionEffect: od,
    useLayoutEffect: ld,
    useMemo: ud,
    useReducer: cl,
    useRef: sd,
    useState: function () {
      return cl(ts);
    },
    useDebugValue: Qi,
    useDeferredValue: function (e) {
      var t = wt();
      return dd(t, Pe.memoizedState, e);
    },
    useTransition: function () {
      var e = cl(ts)[0],
        t = wt().memoizedState;
      return [e, t];
    },
    useMutableSource: Ju,
    useSyncExternalStore: Xu,
    useId: fd,
    unstable_isNewReconciler: !1,
  },
  dm = {
    readContext: vt,
    useCallback: cd,
    useContext: vt,
    useEffect: Vi,
    useImperativeHandle: ad,
    useInsertionEffect: od,
    useLayoutEffect: ld,
    useMemo: ud,
    useReducer: ul,
    useRef: sd,
    useState: function () {
      return ul(ts);
    },
    useDebugValue: Qi,
    useDeferredValue: function (e) {
      var t = wt();
      return Pe === null ? (t.memoizedState = e) : dd(t, Pe.memoizedState, e);
    },
    useTransition: function () {
      var e = ul(ts)[0],
        t = wt().memoizedState;
      return [e, t];
    },
    useMutableSource: Ju,
    useSyncExternalStore: Xu,
    useId: fd,
    unstable_isNewReconciler: !1,
  };
function Nt(e, t) {
  if (e && e.defaultProps) {
    (t = _e({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Vl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : _e({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Po = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Mn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Qe(),
      o = ln(e),
      l = Ft(r, o);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = sn(e, l, o)),
      t !== null && (Et(t, e, o, r), Ws(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Qe(),
      o = ln(e),
      l = Ft(r, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = sn(e, l, o)),
      t !== null && (Et(t, e, o, r), Ws(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Qe(),
      r = ln(e),
      o = Ft(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = sn(e, o, r)),
      t !== null && (Et(t, e, r, n), Ws(t, e, r));
  },
};
function nc(e, t, n, r, o, l, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !qr(n, r) || !qr(o, l)
      : !0
  );
}
function gd(e, t, n) {
  var r = !1,
    o = un,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = vt(l))
      : ((o = tt(t) ? kn : We.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? or(e, o) : un)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Po),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function rc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Po.enqueueReplaceState(t, t.state, null);
}
function Ql(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), $i(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = vt(l))
    : ((l = tt(t) ? kn : We.current), (o.context = or(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (Vl(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Po.enqueueReplaceState(o, o.state, null),
      mo(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function cr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += $f(r)), (r = r.return);
    while (r);
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
function dl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ql(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var fm = typeof WeakMap == "function" ? WeakMap : Map;
function xd(e, t, n) {
  (n = Ft(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      vo || ((vo = !0), (si = r)), ql(e, t);
    }),
    n
  );
}
function yd(e, t, n) {
  (n = Ft(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        ql(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        ql(e, t),
          typeof r != "function" &&
            (on === null ? (on = new Set([this])) : on.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function sc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new fm();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = km.bind(null, e, t, n)), t.then(e, e));
}
function oc(e) {
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
function lc(e, t, n, r, o) {
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
              : ((t = Ft(-1, 1)), (t.tag = 2), sn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var hm = Vt.ReactCurrentOwner,
  Ze = !1;
function Ve(e, t, n, r) {
  t.child = e === null ? Qu(t, null, n, r) : ir(t, e.child, n, r);
}
function ic(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return (
    nr(t, o),
    (r = Gi(e, t, n, r, l, o)),
    (n = Wi()),
    e !== null && !Ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Wt(e, t, o))
      : (xe && n && Pi(t), (t.flags |= 1), Ve(e, t, r, o), t.child)
  );
}
function ac(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !ta(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), vd(e, t, l, r, o))
      : ((e = Js(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var i = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : qr), n(i, r) && e.ref === t.ref)
    )
      return Wt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = an(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function vd(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (qr(l, r) && e.ref === t.ref)
      if (((Ze = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ze = !0);
      else return (t.lanes = e.lanes), Wt(e, t, o);
  }
  return Kl(e, t, n, r, o);
}
function wd(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        fe(Jn, st),
        (st |= n);
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
          fe(Jn, st),
          (st |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        fe(Jn, st),
        (st |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      fe(Jn, st),
      (st |= r);
  return Ve(e, t, o, n), t.child;
}
function bd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Kl(e, t, n, r, o) {
  var l = tt(n) ? kn : We.current;
  return (
    (l = or(t, l)),
    nr(t, o),
    (n = Gi(e, t, n, r, l, o)),
    (r = Wi()),
    e !== null && !Ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Wt(e, t, o))
      : (xe && r && Pi(t), (t.flags |= 1), Ve(e, t, n, o), t.child)
  );
}
function cc(e, t, n, r, o) {
  if (tt(n)) {
    var l = !0;
    ao(t);
  } else l = !1;
  if ((nr(t, o), t.stateNode === null))
    qs(e, t), gd(t, n, r), Ql(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var c = i.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = vt(u))
      : ((u = tt(n) ? kn : We.current), (u = or(t, u)));
    var h = n.getDerivedStateFromProps,
      m =
        typeof h == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || c !== u) && rc(t, i, r, u)),
      (Kt = !1);
    var g = t.memoizedState;
    (i.state = g),
      mo(t, r, i, o),
      (c = t.memoizedState),
      a !== r || g !== c || et.current || Kt
        ? (typeof h == "function" && (Vl(t, n, h, r), (c = t.memoizedState)),
          (a = Kt || nc(t, n, a, r, g, c, u))
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
              (t.memoizedState = c)),
          (i.props = r),
          (i.state = c),
          (i.context = u),
          (r = a))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Ku(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Nt(t.type, a)),
      (i.props = u),
      (m = t.pendingProps),
      (g = i.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = vt(c))
        : ((c = tt(n) ? kn : We.current), (c = or(t, c)));
    var x = n.getDerivedStateFromProps;
    (h =
      typeof x == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== m || g !== c) && rc(t, i, r, c)),
      (Kt = !1),
      (g = t.memoizedState),
      (i.state = g),
      mo(t, r, i, o);
    var b = t.memoizedState;
    a !== m || g !== b || et.current || Kt
      ? (typeof x == "function" && (Vl(t, n, x, r), (b = t.memoizedState)),
        (u = Kt || nc(t, n, u, r, g, b, c) || !1)
          ? (h ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, b, c),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, b, c)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = b)),
        (i.props = r),
        (i.state = b),
        (i.context = c),
        (r = u))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Yl(e, t, n, r, l, o);
}
function Yl(e, t, n, r, o, l) {
  bd(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && qa(t, n, !1), Wt(e, t, l);
  (r = t.stateNode), (hm.current = t);
  var a =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = ir(t, e.child, null, l)), (t.child = ir(t, null, a, l)))
      : Ve(e, t, a, l),
    (t.memoizedState = r.state),
    o && qa(t, n, !0),
    t.child
  );
}
function _d(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Qa(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Qa(e, t.context, !1),
    zi(e, t.containerInfo);
}
function uc(e, t, n, r, o) {
  return lr(), Li(o), (t.flags |= 256), Ve(e, t, n, r), t.child;
}
var Jl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Xl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Nd(e, t, n) {
  var r = t.pendingProps,
    o = ve.current,
    l = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    fe(ve, o & 1),
    e === null)
  )
    return (
      Gl(t),
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
          l
            ? ((r = t.mode),
              (l = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = i))
                : (l = Mo(i, r, 0, null)),
              (e = Nn(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = Xl(n)),
              (t.memoizedState = Jl),
              e)
            : qi(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return mm(e, t, i, r, a, o, n);
  if (l) {
    (l = r.fallback), (i = t.mode), (o = e.child), (a = o.sibling);
    var c = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = c),
          (t.deletions = null))
        : ((r = an(o, c)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (l = an(a, l)) : ((l = Nn(l, i, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Xl(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (l.memoizedState = i),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = Jl),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = an(l, { mode: "visible", children: r.children })),
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
function qi(e, t) {
  return (
    (t = Mo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ms(e, t, n, r) {
  return (
    r !== null && Li(r),
    ir(t, e.child, null, n),
    (e = qi(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function mm(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = dl(Error(L(422)))), Ms(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (o = t.mode),
        (r = Mo({ mode: "visible", children: r.children }, o, 0, null)),
        (l = Nn(l, o, i, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && ir(t, e.child, null, i),
        (t.child.memoizedState = Xl(i)),
        (t.memoizedState = Jl),
        l);
  if (!(t.mode & 1)) return Ms(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (l = Error(L(419))), (r = dl(l, r, void 0)), Ms(e, t, i, r);
  }
  if (((a = (i & e.childLanes) !== 0), Ze || a)) {
    if (((r = Oe), r !== null)) {
      switch (i & -i) {
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
      (o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== l.retryLane &&
          ((l.retryLane = o), Gt(e, o), Et(r, e, o, -1));
    }
    return ea(), (r = dl(Error(L(421)))), Ms(e, t, i, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Cm.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (lt = rn(o.nextSibling)),
      (ut = t),
      (xe = !0),
      (St = null),
      e !== null &&
        ((pt[gt++] = Ut),
        (pt[gt++] = $t),
        (pt[gt++] = Cn),
        (Ut = e.id),
        ($t = e.overflow),
        (Cn = t)),
      (t = qi(t, r.children)),
      (t.flags |= 4096),
      t);
}
function dc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Wl(e.return, t, n);
}
function fl(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = o));
}
function jd(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail;
  if ((Ve(e, t, r.children, n), (r = ve.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && dc(e, n, t);
        else if (e.tag === 19) dc(e, n, t);
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
  if ((fe(ve, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && po(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          fl(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && po(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        fl(t, !0, n, null, l);
        break;
      case "together":
        fl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function qs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Wt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Dn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (
      e = t.child, n = an(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = an(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function pm(e, t, n) {
  switch (t.tag) {
    case 3:
      _d(t), lr();
      break;
    case 5:
      Yu(t);
      break;
    case 1:
      tt(t.type) && ao(t);
      break;
    case 4:
      zi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      fe(fo, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (fe(ve, ve.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Nd(e, t, n)
          : (fe(ve, ve.current & 1),
            (e = Wt(e, t, n)),
            e !== null ? e.sibling : null);
      fe(ve, ve.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return jd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        fe(ve, ve.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), wd(e, t, n);
  }
  return Wt(e, t, n);
}
var Sd, Zl, kd, Cd;
Sd = function (e, t) {
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
Zl = function () {};
kd = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), bn(Mt.current);
    var l = null;
    switch (n) {
      case "input":
        (o = bl(e, o)), (r = bl(e, r)), (l = []);
        break;
      case "select":
        (o = _e({}, o, { value: void 0 })),
          (r = _e({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = jl(e, o)), (r = jl(e, r)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = lo);
    }
    kl(n, r);
    var i;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Fr.hasOwnProperty(u)
              ? l || (l = [])
              : (l = l || []).push(u, null));
    for (u in r) {
      var c = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && c !== a && (c != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (c && c.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in c)
              c.hasOwnProperty(i) &&
                a[i] !== c[i] &&
                (n || (n = {}), (n[i] = c[i]));
          } else n || (l || (l = []), l.push(u, n)), (n = c);
        else
          u === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (a = a ? a.__html : void 0),
              c != null && a !== c && (l = l || []).push(u, c))
            : u === "children"
            ? (typeof c != "string" && typeof c != "number") ||
              (l = l || []).push(u, "" + c)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Fr.hasOwnProperty(u)
                ? (c != null && u === "onScroll" && pe("scroll", e),
                  l || a === c || (l = []))
                : (l = l || []).push(u, c));
    }
    n && (l = l || []).push("style", n);
    var u = l;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Cd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Sr(e, t) {
  if (!xe)
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
function Be(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function gm(e, t, n) {
  var r = t.pendingProps;
  switch ((Ri(t), t.tag)) {
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
      return Be(t), null;
    case 1:
      return tt(t.type) && io(), Be(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ar(),
        ge(et),
        ge(We),
        Bi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Rs(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), St !== null && (ii(St), (St = null)))),
        Zl(e, t),
        Be(t),
        null
      );
    case 5:
      Fi(t);
      var o = bn(Zr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        kd(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return Be(t), null;
        }
        if (((e = bn(Mt.current)), Rs(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[Rt] = t), (r[Jr] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              pe("cancel", r), pe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              pe("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Tr.length; o++) pe(Tr[o], r);
              break;
            case "source":
              pe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              pe("error", r), pe("load", r);
              break;
            case "details":
              pe("toggle", r);
              break;
            case "input":
              wa(r, l), pe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                pe("invalid", r);
              break;
            case "textarea":
              _a(r, l), pe("invalid", r);
          }
          kl(n, l), (o = null);
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var a = l[i];
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (l.suppressHydrationWarning !== !0 &&
                      Ps(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (l.suppressHydrationWarning !== !0 &&
                      Ps(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : Fr.hasOwnProperty(i) &&
                  a != null &&
                  i === "onScroll" &&
                  pe("scroll", r);
            }
          switch (n) {
            case "input":
              js(r), ba(r, l, !0);
              break;
            case "textarea":
              js(r), Na(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = lo);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = tu(n)),
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
            (e[Rt] = t),
            (e[Jr] = r),
            Sd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Cl(n, r)), n)) {
              case "dialog":
                pe("cancel", e), pe("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                pe("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Tr.length; o++) pe(Tr[o], e);
                o = r;
                break;
              case "source":
                pe("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                pe("error", e), pe("load", e), (o = r);
                break;
              case "details":
                pe("toggle", e), (o = r);
                break;
              case "input":
                wa(e, r), (o = bl(e, r)), pe("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = _e({}, r, { value: void 0 })),
                  pe("invalid", e);
                break;
              case "textarea":
                _a(e, r), (o = jl(e, r)), pe("invalid", e);
                break;
              default:
                o = r;
            }
            kl(n, o), (a = o);
            for (l in a)
              if (a.hasOwnProperty(l)) {
                var c = a[l];
                l === "style"
                  ? su(e, c)
                  : l === "dangerouslySetInnerHTML"
                  ? ((c = c ? c.__html : void 0), c != null && nu(e, c))
                  : l === "children"
                  ? typeof c == "string"
                    ? (n !== "textarea" || c !== "") && Br(e, c)
                    : typeof c == "number" && Br(e, "" + c)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (Fr.hasOwnProperty(l)
                      ? c != null && l === "onScroll" && pe("scroll", e)
                      : c != null && yi(e, l, c, i));
              }
            switch (n) {
              case "input":
                js(e), ba(e, r, !1);
                break;
              case "textarea":
                js(e), Na(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + cn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? Xn(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      Xn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = lo);
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
      return Be(t), null;
    case 6:
      if (e && t.stateNode != null) Cd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
        if (((n = bn(Zr.current)), bn(Mt.current), Rs(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Rt] = t),
            (l = r.nodeValue !== n) && ((e = ut), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ps(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ps(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Rt] = t),
            (t.stateNode = r);
      }
      return Be(t), null;
    case 13:
      if (
        (ge(ve),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (xe && lt !== null && t.mode & 1 && !(t.flags & 128))
          Wu(), lr(), (t.flags |= 98560), (l = !1);
        else if (((l = Rs(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(L(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(L(317));
            l[Rt] = t;
          } else
            lr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Be(t), (l = !1);
        } else St !== null && (ii(St), (St = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ve.current & 1 ? Re === 0 && (Re = 3) : ea())),
          t.updateQueue !== null && (t.flags |= 4),
          Be(t),
          null);
    case 4:
      return (
        ar(), Zl(e, t), e === null && Kr(t.stateNode.containerInfo), Be(t), null
      );
    case 10:
      return Oi(t.type._context), Be(t), null;
    case 17:
      return tt(t.type) && io(), Be(t), null;
    case 19:
      if ((ge(ve), (l = t.memoizedState), l === null)) return Be(t), null;
      if (((r = (t.flags & 128) !== 0), (i = l.rendering), i === null))
        if (r) Sr(l, !1);
        else {
          if (Re !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = po(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Sr(l, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (i = l.alternate),
                    i === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = i.childLanes),
                        (l.lanes = i.lanes),
                        (l.child = i.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = i.memoizedProps),
                        (l.memoizedState = i.memoizedState),
                        (l.updateQueue = i.updateQueue),
                        (l.type = i.type),
                        (e = i.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return fe(ve, (ve.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            Ce() > ur &&
            ((t.flags |= 128), (r = !0), Sr(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = po(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Sr(l, !0),
              l.tail === null && l.tailMode === "hidden" && !i.alternate && !xe)
            )
              return Be(t), null;
          } else
            2 * Ce() - l.renderingStartTime > ur &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Sr(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = l.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (l.last = i));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = Ce()),
          (t.sibling = null),
          (n = ve.current),
          fe(ve, r ? (n & 1) | 2 : n & 1),
          t)
        : (Be(t), null);
    case 22:
    case 23:
      return (
        Zi(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? st & 1073741824 && (Be(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Be(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
function xm(e, t) {
  switch ((Ri(t), t.tag)) {
    case 1:
      return (
        tt(t.type) && io(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ar(),
        ge(et),
        ge(We),
        Bi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Fi(t), null;
    case 13:
      if (
        (ge(ve), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(L(340));
        lr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ge(ve), null;
    case 4:
      return ar(), null;
    case 10:
      return Oi(t.type._context), null;
    case 22:
    case 23:
      return Zi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var As = !1,
  He = !1,
  ym = typeof WeakSet == "function" ? WeakSet : Set,
  F = null;
function Yn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ne(e, t, r);
      }
    else n.current = null;
}
function ei(e, t, n) {
  try {
    n();
  } catch (r) {
    Ne(e, t, r);
  }
}
var fc = !1;
function vm(e, t) {
  if (((Ol = ro), (e = Pu()), Ii(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            a = -1,
            c = -1,
            u = 0,
            h = 0,
            m = e,
            g = null;
          t: for (;;) {
            for (
              var x;
              m !== n || (o !== 0 && m.nodeType !== 3) || (a = i + o),
                m !== l || (r !== 0 && m.nodeType !== 3) || (c = i + r),
                m.nodeType === 3 && (i += m.nodeValue.length),
                (x = m.firstChild) !== null;

            )
              (g = m), (m = x);
            for (;;) {
              if (m === e) break t;
              if (
                (g === n && ++u === o && (a = i),
                g === l && ++h === r && (c = i),
                (x = m.nextSibling) !== null)
              )
                break;
              (m = g), (g = m.parentNode);
            }
            m = x;
          }
          n = a === -1 || c === -1 ? null : { start: a, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ul = { focusedElem: e, selectionRange: n }, ro = !1, F = t; F !== null; )
    if (((t = F), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (F = e);
    else
      for (; F !== null; ) {
        t = F;
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
                  var S = b.memoizedProps,
                    I = b.memoizedState,
                    f = t.stateNode,
                    d = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : Nt(t.type, S),
                      I
                    );
                  f.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(L(163));
            }
        } catch (v) {
          Ne(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (F = e);
          break;
        }
        F = t.return;
      }
  return (b = fc), (fc = !1), b;
}
function Or(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && ei(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ro(e, t) {
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
function ti(e) {
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
function Ed(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ed(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Rt], delete t[Jr], delete t[Fl], delete t[tm], delete t[nm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Dd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function hc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Dd(e.return)) return null;
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
function ni(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = lo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ni(e, t, n), e = e.sibling; e !== null; ) ni(e, t, n), (e = e.sibling);
}
function ri(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ri(e, t, n), e = e.sibling; e !== null; ) ri(e, t, n), (e = e.sibling);
}
var Ue = null,
  jt = !1;
function Qt(e, t, n) {
  for (n = n.child; n !== null; ) Td(e, t, n), (n = n.sibling);
}
function Td(e, t, n) {
  if (Lt && typeof Lt.onCommitFiberUnmount == "function")
    try {
      Lt.onCommitFiberUnmount(So, n);
    } catch {}
  switch (n.tag) {
    case 5:
      He || Yn(n, t);
    case 6:
      var r = Ue,
        o = jt;
      (Ue = null),
        Qt(e, t, n),
        (Ue = r),
        (jt = o),
        Ue !== null &&
          (jt
            ? ((e = Ue),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ue.removeChild(n.stateNode));
      break;
    case 18:
      Ue !== null &&
        (jt
          ? ((e = Ue),
            (n = n.stateNode),
            e.nodeType === 8
              ? ol(e.parentNode, n)
              : e.nodeType === 1 && ol(e, n),
            Vr(e))
          : ol(Ue, n.stateNode));
      break;
    case 4:
      (r = Ue),
        (o = jt),
        (Ue = n.stateNode.containerInfo),
        (jt = !0),
        Qt(e, t, n),
        (Ue = r),
        (jt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !He &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var l = o,
            i = l.destroy;
          (l = l.tag),
            i !== void 0 && (l & 2 || l & 4) && ei(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      Qt(e, t, n);
      break;
    case 1:
      if (
        !He &&
        (Yn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Ne(n, t, a);
        }
      Qt(e, t, n);
      break;
    case 21:
      Qt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((He = (r = He) || n.memoizedState !== null), Qt(e, t, n), (He = r))
        : Qt(e, t, n);
      break;
    default:
      Qt(e, t, n);
  }
}
function mc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ym()),
      t.forEach(function (r) {
        var o = Em.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function _t(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var l = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ue = a.stateNode), (jt = !1);
              break e;
            case 3:
              (Ue = a.stateNode.containerInfo), (jt = !0);
              break e;
            case 4:
              (Ue = a.stateNode.containerInfo), (jt = !0);
              break e;
          }
          a = a.return;
        }
        if (Ue === null) throw Error(L(160));
        Td(l, i, o), (Ue = null), (jt = !1);
        var c = o.alternate;
        c !== null && (c.return = null), (o.return = null);
      } catch (u) {
        Ne(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Id(t, e), (t = t.sibling);
}
function Id(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((_t(t, e), It(e), r & 4)) {
        try {
          Or(3, e, e.return), Ro(3, e);
        } catch (S) {
          Ne(e, e.return, S);
        }
        try {
          Or(5, e, e.return);
        } catch (S) {
          Ne(e, e.return, S);
        }
      }
      break;
    case 1:
      _t(t, e), It(e), r & 512 && n !== null && Yn(n, n.return);
      break;
    case 5:
      if (
        (_t(t, e),
        It(e),
        r & 512 && n !== null && Yn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Br(o, "");
        } catch (S) {
          Ne(e, e.return, S);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          i = n !== null ? n.memoizedProps : l,
          a = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            a === "input" && l.type === "radio" && l.name != null && Zc(o, l),
              Cl(a, i);
            var u = Cl(a, l);
            for (i = 0; i < c.length; i += 2) {
              var h = c[i],
                m = c[i + 1];
              h === "style"
                ? su(o, m)
                : h === "dangerouslySetInnerHTML"
                ? nu(o, m)
                : h === "children"
                ? Br(o, m)
                : yi(o, h, m, u);
            }
            switch (a) {
              case "input":
                _l(o, l);
                break;
              case "textarea":
                eu(o, l);
                break;
              case "select":
                var g = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var x = l.value;
                x != null
                  ? Xn(o, !!l.multiple, x, !1)
                  : g !== !!l.multiple &&
                    (l.defaultValue != null
                      ? Xn(o, !!l.multiple, l.defaultValue, !0)
                      : Xn(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[Jr] = l;
          } catch (S) {
            Ne(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((_t(t, e), It(e), r & 4)) {
        if (e.stateNode === null) throw Error(L(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (S) {
          Ne(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (_t(t, e), It(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Vr(t.containerInfo);
        } catch (S) {
          Ne(e, e.return, S);
        }
      break;
    case 4:
      _t(t, e), It(e);
      break;
    case 13:
      _t(t, e),
        It(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Ji = Ce())),
        r & 4 && mc(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((He = (u = He) || h), _t(t, e), (He = u)) : _t(t, e),
        It(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !h && e.mode & 1)
        )
          for (F = e, h = e.child; h !== null; ) {
            for (m = F = h; F !== null; ) {
              switch (((g = F), (x = g.child), g.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Or(4, g, g.return);
                  break;
                case 1:
                  Yn(g, g.return);
                  var b = g.stateNode;
                  if (typeof b.componentWillUnmount == "function") {
                    (r = g), (n = g.return);
                    try {
                      (t = r),
                        (b.props = t.memoizedProps),
                        (b.state = t.memoizedState),
                        b.componentWillUnmount();
                    } catch (S) {
                      Ne(r, n, S);
                    }
                  }
                  break;
                case 5:
                  Yn(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    gc(m);
                    continue;
                  }
              }
              x !== null ? ((x.return = g), (F = x)) : gc(m);
            }
            h = h.sibling;
          }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                (o = m.stateNode),
                  u
                    ? ((l = o.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((a = m.stateNode),
                      (c = m.memoizedProps.style),
                      (i =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (a.style.display = ru("display", i)));
              } catch (S) {
                Ne(e, e.return, S);
              }
            }
          } else if (m.tag === 6) {
            if (h === null)
              try {
                m.stateNode.nodeValue = u ? "" : m.memoizedProps;
              } catch (S) {
                Ne(e, e.return, S);
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
            h === m && (h = null), (m = m.return);
          }
          h === m && (h = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      _t(t, e), It(e), r & 4 && mc(e);
      break;
    case 21:
      break;
    default:
      _t(t, e), It(e);
  }
}
function It(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Dd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(L(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Br(o, ""), (r.flags &= -33));
          var l = hc(e);
          ri(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = hc(e);
          ni(e, a, i);
          break;
        default:
          throw Error(L(161));
      }
    } catch (c) {
      Ne(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function wm(e, t, n) {
  (F = e), Pd(e);
}
function Pd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; F !== null; ) {
    var o = F,
      l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || As;
      if (!i) {
        var a = o.alternate,
          c = (a !== null && a.memoizedState !== null) || He;
        a = As;
        var u = He;
        if (((As = i), (He = c) && !u))
          for (F = o; F !== null; )
            (i = F),
              (c = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? xc(o)
                : c !== null
                ? ((c.return = i), (F = c))
                : xc(o);
        for (; l !== null; ) (F = l), Pd(l), (l = l.sibling);
        (F = o), (As = a), (He = u);
      }
      pc(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (F = l)) : pc(e);
  }
}
function pc(e) {
  for (; F !== null; ) {
    var t = F;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              He || Ro(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !He)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Nt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && Za(t, l, r);
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
                Za(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
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
                var u = t.alternate;
                if (u !== null) {
                  var h = u.memoizedState;
                  if (h !== null) {
                    var m = h.dehydrated;
                    m !== null && Vr(m);
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
              throw Error(L(163));
          }
        He || (t.flags & 512 && ti(t));
      } catch (g) {
        Ne(t, t.return, g);
      }
    }
    if (t === e) {
      F = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function gc(e) {
  for (; F !== null; ) {
    var t = F;
    if (t === e) {
      F = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function xc(e) {
  for (; F !== null; ) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ro(4, t);
          } catch (c) {
            Ne(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              Ne(t, o, c);
            }
          }
          var l = t.return;
          try {
            ti(t);
          } catch (c) {
            Ne(t, l, c);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ti(t);
          } catch (c) {
            Ne(t, i, c);
          }
      }
    } catch (c) {
      Ne(t, t.return, c);
    }
    if (t === e) {
      F = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (F = a);
      break;
    }
    F = t.return;
  }
}
var bm = Math.ceil,
  yo = Vt.ReactCurrentDispatcher,
  Ki = Vt.ReactCurrentOwner,
  yt = Vt.ReactCurrentBatchConfig,
  ae = 0,
  Oe = null,
  Te = null,
  $e = 0,
  st = 0,
  Jn = fn(0),
  Re = 0,
  rs = null,
  Dn = 0,
  Lo = 0,
  Yi = 0,
  Ur = null,
  Xe = null,
  Ji = 0,
  ur = 1 / 0,
  At = null,
  vo = !1,
  si = null,
  on = null,
  Os = !1,
  Zt = null,
  wo = 0,
  $r = 0,
  oi = null,
  Ks = -1,
  Ys = 0;
function Qe() {
  return ae & 6 ? Ce() : Ks !== -1 ? Ks : (Ks = Ce());
}
function ln(e) {
  return e.mode & 1
    ? ae & 2 && $e !== 0
      ? $e & -$e
      : sm.transition !== null
      ? (Ys === 0 && (Ys = gu()), Ys)
      : ((e = ue),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Nu(e.type))),
        e)
    : 1;
}
function Et(e, t, n, r) {
  if (50 < $r) throw (($r = 0), (oi = null), Error(L(185)));
  as(e, n, r),
    (!(ae & 2) || e !== Oe) &&
      (e === Oe && (!(ae & 2) && (Lo |= n), Re === 4 && Jt(e, $e)),
      nt(e, r),
      n === 1 && ae === 0 && !(t.mode & 1) && ((ur = Ce() + 500), To && hn()));
}
function nt(e, t) {
  var n = e.callbackNode;
  sh(e, t);
  var r = no(e, e === Oe ? $e : 0);
  if (r === 0)
    n !== null && ka(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ka(n), t === 1))
      e.tag === 0 ? rm(yc.bind(null, e)) : Bu(yc.bind(null, e)),
        Zh(function () {
          !(ae & 6) && hn();
        }),
        (n = null);
    else {
      switch (xu(r)) {
        case 1:
          n = Ni;
          break;
        case 4:
          n = mu;
          break;
        case 16:
          n = to;
          break;
        case 536870912:
          n = pu;
          break;
        default:
          n = to;
      }
      n = zd(n, Rd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Rd(e, t) {
  if (((Ks = -1), (Ys = 0), ae & 6)) throw Error(L(327));
  var n = e.callbackNode;
  if (rr() && e.callbackNode !== n) return null;
  var r = no(e, e === Oe ? $e : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = bo(e, r);
  else {
    t = r;
    var o = ae;
    ae |= 2;
    var l = Md();
    (Oe !== e || $e !== t) && ((At = null), (ur = Ce() + 500), _n(e, t));
    do
      try {
        jm();
        break;
      } catch (a) {
        Ld(e, a);
      }
    while (!0);
    Ai(),
      (yo.current = l),
      (ae = o),
      Te !== null ? (t = 0) : ((Oe = null), ($e = 0), (t = Re));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Pl(e)), o !== 0 && ((r = o), (t = li(e, o)))), t === 1)
    )
      throw ((n = rs), _n(e, 0), Jt(e, r), nt(e, Ce()), n);
    if (t === 6) Jt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !_m(o) &&
          ((t = bo(e, r)),
          t === 2 && ((l = Pl(e)), l !== 0 && ((r = l), (t = li(e, l)))),
          t === 1))
      )
        throw ((n = rs), _n(e, 0), Jt(e, r), nt(e, Ce()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          xn(e, Xe, At);
          break;
        case 3:
          if (
            (Jt(e, r), (r & 130023424) === r && ((t = Ji + 500 - Ce()), 10 < t))
          ) {
            if (no(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Qe(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = zl(xn.bind(null, e, Xe, At), t);
            break;
          }
          xn(e, Xe, At);
          break;
        case 4:
          if ((Jt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - Ct(r);
            (l = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~l);
          }
          if (
            ((r = o),
            (r = Ce() - r),
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
                : 1960 * bm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = zl(xn.bind(null, e, Xe, At), r);
            break;
          }
          xn(e, Xe, At);
          break;
        case 5:
          xn(e, Xe, At);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return nt(e, Ce()), e.callbackNode === n ? Rd.bind(null, e) : null;
}
function li(e, t) {
  var n = Ur;
  return (
    e.current.memoizedState.isDehydrated && (_n(e, t).flags |= 256),
    (e = bo(e, t)),
    e !== 2 && ((t = Xe), (Xe = n), t !== null && ii(t)),
    e
  );
}
function ii(e) {
  Xe === null ? (Xe = e) : Xe.push.apply(Xe, e);
}
function _m(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!Tt(l(), o)) return !1;
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
function Jt(e, t) {
  for (
    t &= ~Yi,
      t &= ~Lo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ct(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function yc(e) {
  if (ae & 6) throw Error(L(327));
  rr();
  var t = no(e, 0);
  if (!(t & 1)) return nt(e, Ce()), null;
  var n = bo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Pl(e);
    r !== 0 && ((t = r), (n = li(e, r)));
  }
  if (n === 1) throw ((n = rs), _n(e, 0), Jt(e, t), nt(e, Ce()), n);
  if (n === 6) throw Error(L(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    xn(e, Xe, At),
    nt(e, Ce()),
    null
  );
}
function Xi(e, t) {
  var n = ae;
  ae |= 1;
  try {
    return e(t);
  } finally {
    (ae = n), ae === 0 && ((ur = Ce() + 500), To && hn());
  }
}
function Tn(e) {
  Zt !== null && Zt.tag === 0 && !(ae & 6) && rr();
  var t = ae;
  ae |= 1;
  var n = yt.transition,
    r = ue;
  try {
    if (((yt.transition = null), (ue = 1), e)) return e();
  } finally {
    (ue = r), (yt.transition = n), (ae = t), !(ae & 6) && hn();
  }
}
function Zi() {
  (st = Jn.current), ge(Jn);
}
function _n(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Xh(n)), Te !== null))
    for (n = Te.return; n !== null; ) {
      var r = n;
      switch ((Ri(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && io();
          break;
        case 3:
          ar(), ge(et), ge(We), Bi();
          break;
        case 5:
          Fi(r);
          break;
        case 4:
          ar();
          break;
        case 13:
          ge(ve);
          break;
        case 19:
          ge(ve);
          break;
        case 10:
          Oi(r.type._context);
          break;
        case 22:
        case 23:
          Zi();
      }
      n = n.return;
    }
  if (
    ((Oe = e),
    (Te = e = an(e.current, null)),
    ($e = st = t),
    (Re = 0),
    (rs = null),
    (Yi = Lo = Dn = 0),
    (Xe = Ur = null),
    wn !== null)
  ) {
    for (t = 0; t < wn.length; t++)
      if (((n = wn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          l = n.pending;
        if (l !== null) {
          var i = l.next;
          (l.next = o), (r.next = i);
        }
        n.pending = r;
      }
    wn = null;
  }
  return e;
}
function Ld(e, t) {
  do {
    var n = Te;
    try {
      if ((Ai(), (Vs.current = xo), go)) {
        for (var r = be.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        go = !1;
      }
      if (
        ((En = 0),
        (Ae = Pe = be = null),
        (Ar = !1),
        (es = 0),
        (Ki.current = null),
        n === null || n.return === null)
      ) {
        (Re = 1), (rs = t), (Te = null);
        break;
      }
      e: {
        var l = e,
          i = n.return,
          a = n,
          c = t;
        if (
          ((t = $e),
          (a.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var u = c,
            h = a,
            m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var g = h.alternate;
            g
              ? ((h.updateQueue = g.updateQueue),
                (h.memoizedState = g.memoizedState),
                (h.lanes = g.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var x = oc(i);
          if (x !== null) {
            (x.flags &= -257),
              lc(x, i, a, l, t),
              x.mode & 1 && sc(l, u, t),
              (t = x),
              (c = u);
            var b = t.updateQueue;
            if (b === null) {
              var S = new Set();
              S.add(c), (t.updateQueue = S);
            } else b.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              sc(l, u, t), ea();
              break e;
            }
            c = Error(L(426));
          }
        } else if (xe && a.mode & 1) {
          var I = oc(i);
          if (I !== null) {
            !(I.flags & 65536) && (I.flags |= 256),
              lc(I, i, a, l, t),
              Li(cr(c, a));
            break e;
          }
        }
        (l = c = cr(c, a)),
          Re !== 4 && (Re = 2),
          Ur === null ? (Ur = [l]) : Ur.push(l),
          (l = i);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var f = xd(l, c, t);
              Xa(l, f);
              break e;
            case 1:
              a = c;
              var d = l.type,
                p = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (on === null || !on.has(p))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var v = yd(l, a, t);
                Xa(l, v);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Od(n);
    } catch (w) {
      (t = w), Te === n && n !== null && (Te = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Md() {
  var e = yo.current;
  return (yo.current = xo), e === null ? xo : e;
}
function ea() {
  (Re === 0 || Re === 3 || Re === 2) && (Re = 4),
    Oe === null || (!(Dn & 268435455) && !(Lo & 268435455)) || Jt(Oe, $e);
}
function bo(e, t) {
  var n = ae;
  ae |= 2;
  var r = Md();
  (Oe !== e || $e !== t) && ((At = null), _n(e, t));
  do
    try {
      Nm();
      break;
    } catch (o) {
      Ld(e, o);
    }
  while (!0);
  if ((Ai(), (ae = n), (yo.current = r), Te !== null)) throw Error(L(261));
  return (Oe = null), ($e = 0), Re;
}
function Nm() {
  for (; Te !== null; ) Ad(Te);
}
function jm() {
  for (; Te !== null && !Kf(); ) Ad(Te);
}
function Ad(e) {
  var t = $d(e.alternate, e, st);
  (e.memoizedProps = e.pendingProps),
    t === null ? Od(e) : (Te = t),
    (Ki.current = null);
}
function Od(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = xm(n, t)), n !== null)) {
        (n.flags &= 32767), (Te = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Re = 6), (Te = null);
        return;
      }
    } else if (((n = gm(n, t, st)), n !== null)) {
      Te = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Te = t;
      return;
    }
    Te = t = e;
  } while (t !== null);
  Re === 0 && (Re = 5);
}
function xn(e, t, n) {
  var r = ue,
    o = yt.transition;
  try {
    (yt.transition = null), (ue = 1), Sm(e, t, n, r);
  } finally {
    (yt.transition = o), (ue = r);
  }
  return null;
}
function Sm(e, t, n, r) {
  do rr();
  while (Zt !== null);
  if (ae & 6) throw Error(L(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(L(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (oh(e, l),
    e === Oe && ((Te = Oe = null), ($e = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Os ||
      ((Os = !0),
      zd(to, function () {
        return rr(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = yt.transition), (yt.transition = null);
    var i = ue;
    ue = 1;
    var a = ae;
    (ae |= 4),
      (Ki.current = null),
      vm(e, n),
      Id(n, e),
      Wh(Ul),
      (ro = !!Ol),
      (Ul = Ol = null),
      (e.current = n),
      wm(n),
      Yf(),
      (ae = a),
      (ue = i),
      (yt.transition = l);
  } else e.current = n;
  if (
    (Os && ((Os = !1), (Zt = e), (wo = o)),
    (l = e.pendingLanes),
    l === 0 && (on = null),
    Zf(n.stateNode),
    nt(e, Ce()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (vo) throw ((vo = !1), (e = si), (si = null), e);
  return (
    wo & 1 && e.tag !== 0 && rr(),
    (l = e.pendingLanes),
    l & 1 ? (e === oi ? $r++ : (($r = 0), (oi = e))) : ($r = 0),
    hn(),
    null
  );
}
function rr() {
  if (Zt !== null) {
    var e = xu(wo),
      t = yt.transition,
      n = ue;
    try {
      if (((yt.transition = null), (ue = 16 > e ? 16 : e), Zt === null))
        var r = !1;
      else {
        if (((e = Zt), (Zt = null), (wo = 0), ae & 6)) throw Error(L(331));
        var o = ae;
        for (ae |= 4, F = e.current; F !== null; ) {
          var l = F,
            i = l.child;
          if (F.flags & 16) {
            var a = l.deletions;
            if (a !== null) {
              for (var c = 0; c < a.length; c++) {
                var u = a[c];
                for (F = u; F !== null; ) {
                  var h = F;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Or(8, h, l);
                  }
                  var m = h.child;
                  if (m !== null) (m.return = h), (F = m);
                  else
                    for (; F !== null; ) {
                      h = F;
                      var g = h.sibling,
                        x = h.return;
                      if ((Ed(h), h === u)) {
                        F = null;
                        break;
                      }
                      if (g !== null) {
                        (g.return = x), (F = g);
                        break;
                      }
                      F = x;
                    }
                }
              }
              var b = l.alternate;
              if (b !== null) {
                var S = b.child;
                if (S !== null) {
                  b.child = null;
                  do {
                    var I = S.sibling;
                    (S.sibling = null), (S = I);
                  } while (S !== null);
                }
              }
              F = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null) (i.return = l), (F = i);
          else
            e: for (; F !== null; ) {
              if (((l = F), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Or(9, l, l.return);
                }
              var f = l.sibling;
              if (f !== null) {
                (f.return = l.return), (F = f);
                break e;
              }
              F = l.return;
            }
        }
        var d = e.current;
        for (F = d; F !== null; ) {
          i = F;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null) (p.return = i), (F = p);
          else
            e: for (i = d; F !== null; ) {
              if (((a = F), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ro(9, a);
                  }
                } catch (w) {
                  Ne(a, a.return, w);
                }
              if (a === i) {
                F = null;
                break e;
              }
              var v = a.sibling;
              if (v !== null) {
                (v.return = a.return), (F = v);
                break e;
              }
              F = a.return;
            }
        }
        if (
          ((ae = o), hn(), Lt && typeof Lt.onPostCommitFiberRoot == "function")
        )
          try {
            Lt.onPostCommitFiberRoot(So, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ue = n), (yt.transition = t);
    }
  }
  return !1;
}
function vc(e, t, n) {
  (t = cr(n, t)),
    (t = xd(e, t, 1)),
    (e = sn(e, t, 1)),
    (t = Qe()),
    e !== null && (as(e, 1, t), nt(e, t));
}
function Ne(e, t, n) {
  if (e.tag === 3) vc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        vc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (on === null || !on.has(r)))
        ) {
          (e = cr(n, e)),
            (e = yd(t, e, 1)),
            (t = sn(t, e, 1)),
            (e = Qe()),
            t !== null && (as(t, 1, e), nt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function km(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Qe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Oe === e &&
      ($e & n) === n &&
      (Re === 4 || (Re === 3 && ($e & 130023424) === $e && 500 > Ce() - Ji)
        ? _n(e, 0)
        : (Yi |= n)),
    nt(e, t);
}
function Ud(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Cs), (Cs <<= 1), !(Cs & 130023424) && (Cs = 4194304))
      : (t = 1));
  var n = Qe();
  (e = Gt(e, t)), e !== null && (as(e, t, n), nt(e, n));
}
function Cm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ud(e, n);
}
function Em(e, t) {
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
      throw Error(L(314));
  }
  r !== null && r.delete(t), Ud(e, n);
}
var $d;
$d = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || et.current) Ze = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ze = !1), pm(e, t, n);
      Ze = !!(e.flags & 131072);
    }
  else (Ze = !1), xe && t.flags & 1048576 && Hu(t, uo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      qs(e, t), (e = t.pendingProps);
      var o = or(t, We.current);
      nr(t, n), (o = Gi(null, t, r, e, o, n));
      var l = Wi();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            tt(r) ? ((l = !0), ao(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            $i(t),
            (o.updater = Po),
            (t.stateNode = o),
            (o._reactInternals = t),
            Ql(t, r, e, n),
            (t = Yl(null, t, r, !0, l, n)))
          : ((t.tag = 0), xe && l && Pi(t), Ve(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (qs(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Tm(r)),
          (e = Nt(r, e)),
          o)
        ) {
          case 0:
            t = Kl(null, t, r, e, n);
            break e;
          case 1:
            t = cc(null, t, r, e, n);
            break e;
          case 11:
            t = ic(null, t, r, e, n);
            break e;
          case 14:
            t = ac(null, t, r, Nt(r.type, e), n);
            break e;
        }
        throw Error(L(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Nt(r, o)),
        Kl(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Nt(r, o)),
        cc(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((_d(t), e === null)) throw Error(L(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          Ku(e, t),
          mo(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (o = cr(Error(L(423)), t)), (t = uc(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = cr(Error(L(424)), t)), (t = uc(e, t, r, n, o));
            break e;
          } else
            for (
              lt = rn(t.stateNode.containerInfo.firstChild),
                ut = t,
                xe = !0,
                St = null,
                n = Qu(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((lr(), r === o)) {
            t = Wt(e, t, n);
            break e;
          }
          Ve(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Yu(t),
        e === null && Gl(t),
        (r = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (i = o.children),
        $l(r, o) ? (i = null) : l !== null && $l(r, l) && (t.flags |= 32),
        bd(e, t),
        Ve(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Gl(t), null;
    case 13:
      return Nd(e, t, n);
    case 4:
      return (
        zi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ir(t, null, r, n)) : Ve(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Nt(r, o)),
        ic(e, t, r, o, n)
      );
    case 7:
      return Ve(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ve(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ve(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (i = o.value),
          fe(fo, r._currentValue),
          (r._currentValue = i),
          l !== null)
        )
          if (Tt(l.value, i)) {
            if (l.children === o.children && !et.current) {
              t = Wt(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var a = l.dependencies;
              if (a !== null) {
                i = l.child;
                for (var c = a.firstContext; c !== null; ) {
                  if (c.context === r) {
                    if (l.tag === 1) {
                      (c = Ft(-1, n & -n)), (c.tag = 2);
                      var u = l.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var h = u.pending;
                        h === null
                          ? (c.next = c)
                          : ((c.next = h.next), (h.next = c)),
                          (u.pending = c);
                      }
                    }
                    (l.lanes |= n),
                      (c = l.alternate),
                      c !== null && (c.lanes |= n),
                      Wl(l.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  c = c.next;
                }
              } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((i = l.return), i === null)) throw Error(L(341));
                (i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  Wl(i, n, t),
                  (i = l.sibling);
              } else i = l.child;
              if (i !== null) i.return = l;
              else
                for (i = l; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((l = i.sibling), l !== null)) {
                    (l.return = i.return), (i = l);
                    break;
                  }
                  i = i.return;
                }
              l = i;
            }
        Ve(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        nr(t, n),
        (o = vt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ve(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Nt(r, t.pendingProps)),
        (o = Nt(r.type, o)),
        ac(e, t, r, o, n)
      );
    case 15:
      return vd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Nt(r, o)),
        qs(e, t),
        (t.tag = 1),
        tt(r) ? ((e = !0), ao(t)) : (e = !1),
        nr(t, n),
        gd(t, r, o),
        Ql(t, r, o, n),
        Yl(null, t, r, !0, e, n)
      );
    case 19:
      return jd(e, t, n);
    case 22:
      return wd(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function zd(e, t) {
  return hu(e, t);
}
function Dm(e, t, n, r) {
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
function xt(e, t, n, r) {
  return new Dm(e, t, n, r);
}
function ta(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Tm(e) {
  if (typeof e == "function") return ta(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === wi)) return 11;
    if (e === bi) return 14;
  }
  return 2;
}
function an(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = xt(e.tag, t, e.key, e.mode)),
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
function Js(e, t, n, r, o, l) {
  var i = 2;
  if (((r = e), typeof e == "function")) ta(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Fn:
        return Nn(n.children, o, l, t);
      case vi:
        (i = 8), (o |= 8);
        break;
      case xl:
        return (
          (e = xt(12, n, t, o | 2)), (e.elementType = xl), (e.lanes = l), e
        );
      case yl:
        return (e = xt(13, n, t, o)), (e.elementType = yl), (e.lanes = l), e;
      case vl:
        return (e = xt(19, n, t, o)), (e.elementType = vl), (e.lanes = l), e;
      case Yc:
        return Mo(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case qc:
              i = 10;
              break e;
            case Kc:
              i = 9;
              break e;
            case wi:
              i = 11;
              break e;
            case bi:
              i = 14;
              break e;
            case qt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(L(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = xt(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function Nn(e, t, n, r) {
  return (e = xt(7, e, r, t)), (e.lanes = n), e;
}
function Mo(e, t, n, r) {
  return (
    (e = xt(22, e, r, t)),
    (e.elementType = Yc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function hl(e, t, n) {
  return (e = xt(6, e, null, t)), (e.lanes = n), e;
}
function ml(e, t, n) {
  return (
    (t = xt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Im(e, t, n, r, o) {
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
    (this.eventTimes = qo(0)),
    (this.expirationTimes = qo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = qo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function na(e, t, n, r, o, l, i, a, c) {
  return (
    (e = new Im(e, t, n, a, c)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = xt(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    $i(l),
    e
  );
}
function Pm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: zn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Fd(e) {
  if (!e) return un;
  e = e._reactInternals;
  e: {
    if (Mn(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (tt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(L(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (tt(n)) return Fu(e, n, t);
  }
  return t;
}
function Bd(e, t, n, r, o, l, i, a, c) {
  return (
    (e = na(n, r, !0, e, o, l, i, a, c)),
    (e.context = Fd(null)),
    (n = e.current),
    (r = Qe()),
    (o = ln(n)),
    (l = Ft(r, o)),
    (l.callback = t ?? null),
    sn(n, l, o),
    (e.current.lanes = o),
    as(e, o, r),
    nt(e, r),
    e
  );
}
function Ao(e, t, n, r) {
  var o = t.current,
    l = Qe(),
    i = ln(o);
  return (
    (n = Fd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ft(l, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = sn(o, t, i)),
    e !== null && (Et(e, o, i, l), Ws(e, o, i)),
    i
  );
}
function _o(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function wc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ra(e, t) {
  wc(e, t), (e = e.alternate) && wc(e, t);
}
function Rm() {
  return null;
}
var Hd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function sa(e) {
  this._internalRoot = e;
}
Oo.prototype.render = sa.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  Ao(e, t, null, null);
};
Oo.prototype.unmount = sa.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Tn(function () {
      Ao(null, e, null, null);
    }),
      (t[Ht] = null);
  }
};
function Oo(e) {
  this._internalRoot = e;
}
Oo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = wu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Yt.length && t !== 0 && t < Yt[n].priority; n++);
    Yt.splice(n, 0, e), n === 0 && _u(e);
  }
};
function oa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Uo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function bc() {}
function Lm(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var u = _o(i);
        l.call(u);
      };
    }
    var i = Bd(t, r, e, 0, null, !1, !1, "", bc);
    return (
      (e._reactRootContainer = i),
      (e[Ht] = i.current),
      Kr(e.nodeType === 8 ? e.parentNode : e),
      Tn(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = _o(c);
      a.call(u);
    };
  }
  var c = na(e, 0, !1, null, null, !1, !1, "", bc);
  return (
    (e._reactRootContainer = c),
    (e[Ht] = c.current),
    Kr(e.nodeType === 8 ? e.parentNode : e),
    Tn(function () {
      Ao(t, c, n, r);
    }),
    c
  );
}
function $o(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var c = _o(i);
        a.call(c);
      };
    }
    Ao(t, i, e, o);
  } else i = Lm(n, t, e, o, r);
  return _o(i);
}
yu = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Dr(t.pendingLanes);
        n !== 0 &&
          (ji(t, n | 1), nt(t, Ce()), !(ae & 6) && ((ur = Ce() + 500), hn()));
      }
      break;
    case 13:
      Tn(function () {
        var r = Gt(e, 1);
        if (r !== null) {
          var o = Qe();
          Et(r, e, 1, o);
        }
      }),
        ra(e, 1);
  }
};
Si = function (e) {
  if (e.tag === 13) {
    var t = Gt(e, 134217728);
    if (t !== null) {
      var n = Qe();
      Et(t, e, 134217728, n);
    }
    ra(e, 134217728);
  }
};
vu = function (e) {
  if (e.tag === 13) {
    var t = ln(e),
      n = Gt(e, t);
    if (n !== null) {
      var r = Qe();
      Et(n, e, t, r);
    }
    ra(e, t);
  }
};
wu = function () {
  return ue;
};
bu = function (e, t) {
  var n = ue;
  try {
    return (ue = e), t();
  } finally {
    ue = n;
  }
};
Dl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((_l(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = Do(r);
            if (!o) throw Error(L(90));
            Xc(r), _l(r, o);
          }
        }
      }
      break;
    case "textarea":
      eu(e, n);
      break;
    case "select":
      (t = n.value), t != null && Xn(e, !!n.multiple, t, !1);
  }
};
iu = Xi;
au = Tn;
var Mm = { usingClientEntryPoint: !1, Events: [us, Wn, Do, ou, lu, Xi] },
  kr = {
    findFiberByHostInstance: vn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Am = {
    bundleType: kr.bundleType,
    version: kr.version,
    rendererPackageName: kr.rendererPackageName,
    rendererConfig: kr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Vt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = du(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: kr.findFiberByHostInstance || Rm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Us = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Us.isDisabled && Us.supportsFiber)
    try {
      (So = Us.inject(Am)), (Lt = Us);
    } catch {}
}
ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mm;
ft.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!oa(t)) throw Error(L(200));
  return Pm(e, t, null, n);
};
ft.createRoot = function (e, t) {
  if (!oa(e)) throw Error(L(299));
  var n = !1,
    r = "",
    o = Hd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = na(e, 1, !1, null, null, n, !1, r, o)),
    (e[Ht] = t.current),
    Kr(e.nodeType === 8 ? e.parentNode : e),
    new sa(t)
  );
};
ft.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(L(188))
      : ((e = Object.keys(e).join(",")), Error(L(268, e)));
  return (e = du(t)), (e = e === null ? null : e.stateNode), e;
};
ft.flushSync = function (e) {
  return Tn(e);
};
ft.hydrate = function (e, t, n) {
  if (!Uo(t)) throw Error(L(200));
  return $o(null, e, t, !0, n);
};
ft.hydrateRoot = function (e, t, n) {
  if (!oa(e)) throw Error(L(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    i = Hd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Bd(t, null, e, 1, n ?? null, o, !1, l, i)),
    (e[Ht] = t.current),
    Kr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Oo(t);
};
ft.render = function (e, t, n) {
  if (!Uo(t)) throw Error(L(200));
  return $o(null, e, t, !1, n);
};
ft.unmountComponentAtNode = function (e) {
  if (!Uo(e)) throw Error(L(40));
  return e._reactRootContainer
    ? (Tn(function () {
        $o(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ht] = null);
        });
      }),
      !0)
    : !1;
};
ft.unstable_batchedUpdates = Xi;
ft.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Uo(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return $o(e, t, n, !1, r);
};
ft.version = "18.3.1-next-f1338f8080-20240426";
function Gd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gd);
    } catch (e) {
      console.error(e);
    }
}
Gd(), (Gc.exports = ft);
var Om = Gc.exports,
  Wd,
  _c = Om;
(Wd = _c.createRoot), _c.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Um = {
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
 */ const $m = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  le = (e, t) => {
    const n = y.forwardRef(
      (
        {
          color: r = "currentColor",
          size: o = 24,
          strokeWidth: l = 2,
          absoluteStrokeWidth: i,
          className: a = "",
          children: c,
          ...u
        },
        h
      ) =>
        y.createElement(
          "svg",
          {
            ref: h,
            ...Um,
            width: o,
            height: o,
            stroke: r,
            strokeWidth: i ? (Number(l) * 24) / Number(o) : l,
            className: ["lucide", `lucide-${$m(e)}`, a].join(" "),
            ...u,
          },
          [
            ...t.map(([m, g]) => y.createElement(m, g)),
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
 */ const it = le("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vd = le("AlertTriangle", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
      key: "c3ski4",
    },
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ss = le("Calendar", [
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
 */ const Qd = le("Camera", [
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
 */ const Dt = le("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ai = le("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qd = le("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zm = le("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const la = le("CreditCard", [
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" },
  ],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fm = le("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kd = le("Eye", [
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
 */ const ci = le("FileSpreadsheet", [
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
 */ const zo = le("FileText", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bm = le("Globe", [
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
 */ const Yd = le("Image", [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      ry: "2",
      key: "1m3agn",
    },
  ],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hm = le("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gm = le("Layers", [
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
 */ const ui = le("Link", [
  [
    "path",
    {
      d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
      key: "1cjeqo",
    },
  ],
  [
    "path",
    {
      d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
      key: "19qd67",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nc = le("Lock", [
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
 */ const Wm = le("Package2", [
  ["path", { d: "M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z", key: "1ront0" }],
  [
    "path",
    {
      d: "m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9",
      key: "19h2x1",
    },
  ],
  ["path", { d: "M12 3v6", key: "1holv5" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const In = le("Package", [
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
 */ const dr = le("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vm = le("Save", [
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
 */ const zt = le("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jd = le("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qm = le("Settings", [
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
 */ const Pn = le("Trash2", [
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
 */ const qm = le("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Km = le("Unlock", [
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
 */ const fr = le("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xd = le("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zd = le("XCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Le = le("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ym = le("ZoomIn", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }],
]);
let at = null;
const fs = async () => {
    if (at) return at;
    try {
      const e = await fetch("../config.txt");
      if (!e.ok) throw new Error("Failed to load configuration");
      return (at = await e.json()), at;
    } catch (e) {
      throw (console.error("Error loading config:", e), e);
    }
  },
  ia = (e) => {
    if (!at)
      throw new Error("Configuration not loaded. Call loadConfig() first.");
    const t = e.startsWith("/") ? e.slice(1) : e;
    return `${
      at.domain.endsWith("/") ? at.domain.slice(0, -1) : at.domain
    }/${t}`;
  },
  Jm = (e) => {
    if (!at)
      throw new Error("Configuration not loaded. Call loadConfig() first.");
    const t = e.startsWith("/") ? e.slice(1) : e;
    return `${at.ai.endsWith("/") ? at.ai.slice(0, -1) : at.ai}/${t}`;
  },
  di = () => at,
  je = async (e, t = {}) => {
    await fs();
    const n = ia(e),
      { method: r = "GET", headers: o = {}, body: l } = t,
      i = { method: r, headers: { "Content-Type": "application/json", ...o } };
    l && r !== "GET" && (i.body = JSON.stringify(l));
    try {
      const a = await fetch(n, i);
      if (!a.ok) throw new Error(`HTTP error! status: ${a.status}`);
      return await a.json();
    } catch (a) {
      throw (console.error("API call failed:", a), a);
    }
  },
  ef = async (e, t) => {
    await fs();
    const n = ia(e),
      { method: r = "POST", headers: o = {}, body: l } = t,
      i = { method: r, headers: o, body: l };
    try {
      const a = await fetch(n, i);
      if (!a.ok) throw new Error(`HTTP error! status: ${a.status}`);
      return await a.json();
    } catch (a) {
      throw (console.error("API multipart call failed:", a), a);
    }
  },
  Xm = async (e, t) => {
    var a;
    await fs();
    const n = Jm(e);
    console.log("URL:", n);
    const { method: r = "POST", headers: o = {}, body: l } = t,
      i = { method: r, headers: o, body: l };
    try {
      console.log("發送請求到:", n),
        console.log("Request options:", {
          method: r,
          hasBody: !!l,
          bodyType:
            (a = l == null ? void 0 : l.constructor) == null ? void 0 : a.name,
        });
      const c = await fetch(n, i);
      if (
        (console.log("收到回應:", {
          status: c.status,
          statusText: c.statusText,
          ok: c.ok,
          headers: Object.fromEntries(c.headers.entries()),
        }),
        !c.ok)
      ) {
        const h = await c.text();
        throw (
          (console.error("API 錯誤回應:", h),
          new Error(`HTTP error! status: ${c.status}, body: ${h}`))
        );
      }
      const u = await c.json();
      return console.log("API 成功回應:", u), u;
    } catch (c) {
      throw (
        (console.error("API multipart call failed:", c),
        c instanceof TypeError &&
          c.message === "Failed to fetch" &&
          (console.error("❌ 可能是 CORS 問題或網路連線失敗"),
          console.error("請檢查："),
          console.error("1. 後端是否正確設定 CORS headers"),
          console.error("2. URL 是否正確:", n),
          console.error("3. 網路連線是否正常")),
        c)
      );
    }
  },
  Zm = async (e, t = {}) => {
    await fs();
    const n = ia(e),
      { method: r = "GET", headers: o = {}, body: l } = t,
      i = { method: r, headers: { "Content-Type": "application/json", ...o } };
    l && r !== "GET" && (i.body = JSON.stringify(l));
    try {
      const a = await fetch(n, i);
      if (!a.ok) throw new Error(`HTTP error! status: ${a.status}`);
      return await a.blob();
    } catch (a) {
      throw (console.error("API blob call failed:", a), a);
    }
  },
  ep = async (e) =>
    await je("/api/session/login", { method: "POST", body: { Data: e } }),
  tp = (e) => (
    sessionStorage.setItem("user_session", JSON.stringify(e)),
    sessionStorage.setItem("loggedGUID", e.GUID || ""),
    sessionStorage.setItem("loggedEmployer", e.Employer || ""),
    sessionStorage.setItem("loggedID", e.ID || ""),
    sessionStorage.setItem("loggedName", e.Name || ""),
    sessionStorage.setItem("loggedTime", e.loginTime || ""),
    sessionStorage.setItem("loggedLevel", e.level || ""),
    e
  ),
  hs = () => {
    const e = sessionStorage.getItem("user_session");
    if (!e) return null;
    try {
      const t = JSON.parse(e);
      if (!t.GUID || !t.ID || !t.Name) return null;
      if (t.loginTime)
        try {
          const n = new Date(t.loginTime).getTime();
          if ((new Date().getTime() - n) / (1e3 * 60 * 60) > 24) return null;
        } catch {
          console.warn("Invalid login time format:", t.loginTime);
        }
      return t;
    } catch (t) {
      return console.error("Failed to parse user session:", t), null;
    }
  },
  np = () => !!hs(),
  rp = () => {
    const e = hs();
    return (
      (e == null ? void 0 : e.Employer) ||
      sessionStorage.getItem("loggedEmployer")
    );
  },
  aa = () => {
    const e = hs();
    return (e == null ? void 0 : e.ID) || sessionStorage.getItem("loggedID");
  },
  ot = () => {
    const e = hs();
    return (
      (e == null ? void 0 : e.Name) || sessionStorage.getItem("loggedName")
    );
  },
  tf = () => {
    const e = hs();
    return (
      (e == null ? void 0 : e.level) || sessionStorage.getItem("loggedLevel")
    );
  },
  ce = ({ size: e = "medium", className: t = "" }) => {
    const n = { small: "w-4 h-4", medium: "w-6 h-6", large: "w-8 h-8" };
    return s.jsx("div", {
      className: `inline-block animate-spin rounded-full border-2 border-solid border-current border-r-transparent ${n[e]} ${t}`,
      role: "status",
      "aria-label": "Loading",
      children: s.jsx("span", { className: "sr-only", children: "Loading..." }),
    });
  },
  sp = {
    zh: {
      "app.title": "系統登入",
      "app.inspection": "驗收管理",
      "app.inspection.drugs": "需驗收藥品種類",
      "app.inspection.total": "總驗收單數",
      "app.inspection.today": "今日驗收筆數",
      "app.inspection.batch_upload": "批次上傳出貨單",
      "app.inspection.excel_upload": "建單上傳",
      "app.inspection.manual_create": "手動建單",
      "app.inspection.barcode_search": "條碼搜尋",
      "app.inspection.number_search": "單號搜尋",
      "app.inspection.search_barcode_placeholder": "搜尋條碼...",
      "app.inspection.search_number_placeholder": "搜尋驗收單號/請購單號...",
      "app.inspection.time_range": "時間區間",
      "app.inspection.time_type": "時間類型",
      "app.inspection.start_datetime": "開始日期時間",
      "app.inspection.end_datetime": "結束日期時間",
      "app.inspection.search": "查詢",
      "app.inspection.searching": "查詢中",
      "app.inspection.operation_time": "操作時間",
      "app.inspection.add_time": "新增時間",
      "app.inspection.update_time": "更新時間",
      "language.zh": "繁體中文",
      "language.en": "English",
      "error.api": "系統錯誤，請稍後再試",
      logout: "登出",
      copyright: "Copyright ©2025 鴻森智能科技",
      "table.drug_code": "藥品碼",
      "table.item_number": "料號",
      "table.drug_name": "藥品名稱",
      "table.manufacturer": "廠商名稱",
      "table.received_expected_qty": "實收/應收數量",
      "table.detail_count": "明細筆數",
      "table.inspection_number": "驗收單號",
      "table.purchase_number": "請購單號",
      "table.delivery_time": "交貨時間",
      "table.arrival_time": "到貨時間",
      "delivery.overdue": "逾期",
      "delivery.remaining": "剩餘",
      "delivery.today": "今日",
      "delivery.days": "天",
    },
    en: {
      "app.title": "System Login",
      "app.inspection": "Inspection Management",
      "app.inspection.drugs": "Drug Types to Inspect",
      "app.inspection.total": "Total Inspection Orders",
      "app.inspection.today": "Today's Inspections",
      "app.inspection.batch_upload": "Batch Upload Shipping Documents",
      "app.inspection.excel_upload": "Excel Upload",
      "app.inspection.manual_create": "Manual Create",
      "app.inspection.barcode_search": "Barcode Search",
      "app.inspection.number_search": "Number Search",
      "app.inspection.search_barcode_placeholder": "Search barcode...",
      "app.inspection.search_number_placeholder":
        "Search inspection/purchase order number...",
      "app.inspection.time_range": "Time Range",
      "app.inspection.time_type": "Time Type",
      "app.inspection.start_datetime": "Start Date Time",
      "app.inspection.end_datetime": "End Date Time",
      "app.inspection.search": "Search",
      "app.inspection.searching": "Searching",
      "app.inspection.operation_time": "Operation Time",
      "app.inspection.add_time": "Add Time",
      "app.inspection.update_time": "Update Time",
      "language.zh": "繁體中文",
      "language.en": "English",
      "error.api": "System error, please try again later",
      logout: "Logout",
      copyright: "Copyright ©2025 Hongsen Technology",
      "table.drug_code": "Drug Code",
      "table.item_number": "Item Number",
      "table.drug_name": "Drug Name",
      "table.manufacturer": "Manufacturer",
      "table.received_expected_qty": "Received/Expected Qty",
      "table.detail_count": "Detail Count",
      "table.inspection_number": "Inspection No.",
      "table.purchase_number": "Purchase No.",
      "table.delivery_time": "Delivery Time",
      "table.arrival_time": "Arrival Time",
      "delivery.overdue": "Overdue",
      "delivery.remaining": "Remaining",
      "delivery.today": "Today",
      "delivery.days": "days",
    },
  },
  nf = y.createContext(void 0),
  op = ({ children: e }) => {
    const [t, n] = y.useState("zh"),
      r = () => {
        n((l) => (l === "zh" ? "en" : "zh"));
      },
      o = (l, i) => {
        let a = sp[t][l] || l;
        return (
          i &&
            Object.entries(i).forEach(([c, u]) => {
              a = a.replace(`{${c}}`, u.toString());
            }),
          a
        );
      };
    return s.jsx(nf.Provider, {
      value: { language: t, toggleLanguage: r, t: o },
      children: e,
    });
  },
  ms = () => {
    const e = y.useContext(nf);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  },
  lp = ({ onLogin: e }) => {
    const { t } = ms(),
      [n, r] = y.useState(""),
      [o, l] = y.useState(""),
      [i, a] = y.useState(null),
      [c, u] = y.useState(!1),
      h = async (m) => {
        m.preventDefault(), a(null), u(!0);
        try {
          const g = await ep({ ID: n, Password: o });
          g.Code === 200
            ? (tp(g.Data), e())
            : g.Code === -1 || g.Code === -2
            ? a(g.Result)
            : a(t("error.api"));
        } catch (g) {
          console.error("Login error:", g),
            a(g instanceof Error ? g.message : t("error.api"));
        } finally {
          u(!1);
        }
      };
    return s.jsx("div", {
      className:
        "min-h-screen bg-gray-100 flex items-center justify-center p-4",
      children: s.jsxs("div", {
        className: "bg-white rounded-lg shadow-lg p-8 w-full max-w-md",
        children: [
          s.jsx("h1", {
            className: "text-2xl font-bold text-center text-gray-800 mb-8",
            children: t("app.title"),
          }),
          i &&
            s.jsxs("div", {
              className:
                "mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center gap-2",
              children: [
                s.jsx(it, { size: 20 }),
                s.jsx("span", { children: i }),
              ],
            }),
          s.jsxs("form", {
            onSubmit: h,
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
                    value: n,
                    onChange: (m) => r(m.target.value),
                    className:
                      "w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                    required: !0,
                    autoComplete: "username",
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
                    value: o,
                    onChange: (m) => l(m.target.value),
                    className:
                      "w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                    required: !0,
                    autoComplete: "current-password",
                  }),
                ],
              }),
              s.jsx("button", {
                type: "submit",
                disabled: c,
                className: `w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center ${
                  c
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`,
                children: c
                  ? s.jsxs(s.Fragment, {
                      children: [
                        s.jsx(ce, { size: "small\\", className: "mr-2" }),
                        "登入中...",
                      ],
                    })
                  : "登入",
              }),
            ],
          }),
        ],
      }),
    });
  };
class jn extends Error {
  constructor(t, n) {
    const r = new.target.prototype;
    super(`${t}: Status code '${n}'`),
      (this.statusCode = n),
      (this.__proto__ = r);
  }
}
class ca extends Error {
  constructor(t = "A timeout occurred.") {
    const n = new.target.prototype;
    super(t), (this.__proto__ = n);
  }
}
class kt extends Error {
  constructor(t = "An abort occurred.") {
    const n = new.target.prototype;
    super(t), (this.__proto__ = n);
  }
}
class ip extends Error {
  constructor(t, n) {
    const r = new.target.prototype;
    super(t),
      (this.transport = n),
      (this.errorType = "UnsupportedTransportError"),
      (this.__proto__ = r);
  }
}
class ap extends Error {
  constructor(t, n) {
    const r = new.target.prototype;
    super(t),
      (this.transport = n),
      (this.errorType = "DisabledTransportError"),
      (this.__proto__ = r);
  }
}
class cp extends Error {
  constructor(t, n) {
    const r = new.target.prototype;
    super(t),
      (this.transport = n),
      (this.errorType = "FailedToStartTransportError"),
      (this.__proto__ = r);
  }
}
class jc extends Error {
  constructor(t) {
    const n = new.target.prototype;
    super(t),
      (this.errorType = "FailedToNegotiateWithServerError"),
      (this.__proto__ = n);
  }
}
class up extends Error {
  constructor(t, n) {
    const r = new.target.prototype;
    super(t), (this.innerErrors = n), (this.__proto__ = r);
  }
}
class rf {
  constructor(t, n, r) {
    (this.statusCode = t), (this.statusText = n), (this.content = r);
  }
}
class Fo {
  get(t, n) {
    return this.send({ ...n, method: "GET", url: t });
  }
  post(t, n) {
    return this.send({ ...n, method: "POST", url: t });
  }
  delete(t, n) {
    return this.send({ ...n, method: "DELETE", url: t });
  }
  getCookieString(t) {
    return "";
  }
}
var N;
(function (e) {
  (e[(e.Trace = 0)] = "Trace"),
    (e[(e.Debug = 1)] = "Debug"),
    (e[(e.Information = 2)] = "Information"),
    (e[(e.Warning = 3)] = "Warning"),
    (e[(e.Error = 4)] = "Error"),
    (e[(e.Critical = 5)] = "Critical"),
    (e[(e.None = 6)] = "None");
})(N || (N = {}));
class os {
  constructor() {}
  log(t, n) {}
}
os.instance = new os();
const dp = "9.0.6";
class De {
  static isRequired(t, n) {
    if (t == null) throw new Error(`The '${n}' argument is required.`);
  }
  static isNotEmpty(t, n) {
    if (!t || t.match(/^\s*$/))
      throw new Error(`The '${n}' argument should not be empty.`);
  }
  static isIn(t, n, r) {
    if (!(t in n)) throw new Error(`Unknown ${r} value: ${t}.`);
  }
}
class we {
  static get isBrowser() {
    return (
      !we.isNode &&
      typeof window == "object" &&
      typeof window.document == "object"
    );
  }
  static get isWebWorker() {
    return !we.isNode && typeof self == "object" && "importScripts" in self;
  }
  static get isReactNative() {
    return (
      !we.isNode && typeof window == "object" && typeof window.document > "u"
    );
  }
  static get isNode() {
    return (
      typeof process < "u" && process.release && process.release.name === "node"
    );
  }
}
function ls(e, t) {
  let n = "";
  return (
    Rn(e)
      ? ((n = `Binary data of length ${e.byteLength}`),
        t && (n += `. Content: '${fp(e)}'`))
      : typeof e == "string" &&
        ((n = `String data of length ${e.length}`),
        t && (n += `. Content: '${e}'`)),
    n
  );
}
function fp(e) {
  const t = new Uint8Array(e);
  let n = "";
  return (
    t.forEach((r) => {
      const o = r < 16 ? "0" : "";
      n += `0x${o}${r.toString(16)} `;
    }),
    n.substr(0, n.length - 1)
  );
}
function Rn(e) {
  return (
    e &&
    typeof ArrayBuffer < "u" &&
    (e instanceof ArrayBuffer ||
      (e.constructor && e.constructor.name === "ArrayBuffer"))
  );
}
async function sf(e, t, n, r, o, l) {
  const i = {},
    [a, c] = hr();
  (i[a] = c),
    e.log(
      N.Trace,
      `(${t} transport) sending data. ${ls(o, l.logMessageContent)}.`
    );
  const u = Rn(o) ? "arraybuffer" : "text",
    h = await n.post(r, {
      content: o,
      headers: { ...i, ...l.headers },
      responseType: u,
      timeout: l.timeout,
      withCredentials: l.withCredentials,
    });
  e.log(
    N.Trace,
    `(${t} transport) request complete. Response status: ${h.statusCode}.`
  );
}
function hp(e) {
  return e === void 0
    ? new No(N.Information)
    : e === null
    ? os.instance
    : e.log !== void 0
    ? e
    : new No(e);
}
class mp {
  constructor(t, n) {
    (this._subject = t), (this._observer = n);
  }
  dispose() {
    const t = this._subject.observers.indexOf(this._observer);
    t > -1 && this._subject.observers.splice(t, 1),
      this._subject.observers.length === 0 &&
        this._subject.cancelCallback &&
        this._subject.cancelCallback().catch((n) => {});
  }
}
class No {
  constructor(t) {
    (this._minLevel = t), (this.out = console);
  }
  log(t, n) {
    if (t >= this._minLevel) {
      const r = `[${new Date().toISOString()}] ${N[t]}: ${n}`;
      switch (t) {
        case N.Critical:
        case N.Error:
          this.out.error(r);
          break;
        case N.Warning:
          this.out.warn(r);
          break;
        case N.Information:
          this.out.info(r);
          break;
        default:
          this.out.log(r);
          break;
      }
    }
  }
}
function hr() {
  let e = "X-SignalR-User-Agent";
  return we.isNode && (e = "User-Agent"), [e, pp(dp, gp(), yp(), xp())];
}
function pp(e, t, n, r) {
  let o = "Microsoft SignalR/";
  const l = e.split(".");
  return (
    (o += `${l[0]}.${l[1]}`),
    (o += ` (${e}; `),
    t && t !== "" ? (o += `${t}; `) : (o += "Unknown OS; "),
    (o += `${n}`),
    r ? (o += `; ${r}`) : (o += "; Unknown Runtime Version"),
    (o += ")"),
    o
  );
}
function gp() {
  if (we.isNode)
    switch (process.platform) {
      case "win32":
        return "Windows NT";
      case "darwin":
        return "macOS";
      case "linux":
        return "Linux";
      default:
        return process.platform;
    }
  else return "";
}
function xp() {
  if (we.isNode) return process.versions.node;
}
function yp() {
  return we.isNode ? "NodeJS" : "Browser";
}
function pl(e) {
  return e.stack ? e.stack : e.message ? e.message : `${e}`;
}
function vp() {
  if (typeof globalThis < "u") return globalThis;
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("could not find global");
}
class wp extends Fo {
  constructor(t) {
    if ((super(), (this._logger = t), typeof fetch > "u" || we.isNode)) {
      const n =
        typeof __webpack_require__ == "function"
          ? __non_webpack_require__
          : require;
      (this._jar = new (n("tough-cookie").CookieJar)()),
        typeof fetch > "u"
          ? (this._fetchType = n("node-fetch"))
          : (this._fetchType = fetch),
        (this._fetchType = n("fetch-cookie")(this._fetchType, this._jar));
    } else this._fetchType = fetch.bind(vp());
    if (typeof AbortController > "u") {
      const n =
        typeof __webpack_require__ == "function"
          ? __non_webpack_require__
          : require;
      this._abortControllerType = n("abort-controller");
    } else this._abortControllerType = AbortController;
  }
  async send(t) {
    if (t.abortSignal && t.abortSignal.aborted) throw new kt();
    if (!t.method) throw new Error("No method defined.");
    if (!t.url) throw new Error("No url defined.");
    const n = new this._abortControllerType();
    let r;
    t.abortSignal &&
      (t.abortSignal.onabort = () => {
        n.abort(), (r = new kt());
      });
    let o = null;
    if (t.timeout) {
      const c = t.timeout;
      o = setTimeout(() => {
        n.abort(),
          this._logger.log(N.Warning, "Timeout from HTTP request."),
          (r = new ca());
      }, c);
    }
    t.content === "" && (t.content = void 0),
      t.content &&
        ((t.headers = t.headers || {}),
        Rn(t.content)
          ? (t.headers["Content-Type"] = "application/octet-stream")
          : (t.headers["Content-Type"] = "text/plain;charset=UTF-8"));
    let l;
    try {
      l = await this._fetchType(t.url, {
        body: t.content,
        cache: "no-cache",
        credentials: t.withCredentials === !0 ? "include" : "same-origin",
        headers: { "X-Requested-With": "XMLHttpRequest", ...t.headers },
        method: t.method,
        mode: "cors",
        redirect: "follow",
        signal: n.signal,
      });
    } catch (c) {
      throw (
        r || (this._logger.log(N.Warning, `Error from HTTP request. ${c}.`), c)
      );
    } finally {
      o && clearTimeout(o), t.abortSignal && (t.abortSignal.onabort = null);
    }
    if (!l.ok) {
      const c = await Sc(l, "text");
      throw new jn(c || l.statusText, l.status);
    }
    const a = await Sc(l, t.responseType);
    return new rf(l.status, l.statusText, a);
  }
  getCookieString(t) {
    let n = "";
    return (
      we.isNode &&
        this._jar &&
        this._jar.getCookies(t, (r, o) => (n = o.join("; "))),
      n
    );
  }
}
function Sc(e, t) {
  let n;
  switch (t) {
    case "arraybuffer":
      n = e.arrayBuffer();
      break;
    case "text":
      n = e.text();
      break;
    case "blob":
    case "document":
    case "json":
      throw new Error(`${t} is not supported.`);
    default:
      n = e.text();
      break;
  }
  return n;
}
class bp extends Fo {
  constructor(t) {
    super(), (this._logger = t);
  }
  send(t) {
    return t.abortSignal && t.abortSignal.aborted
      ? Promise.reject(new kt())
      : t.method
      ? t.url
        ? new Promise((n, r) => {
            const o = new XMLHttpRequest();
            o.open(t.method, t.url, !0),
              (o.withCredentials =
                t.withCredentials === void 0 ? !0 : t.withCredentials),
              o.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
              t.content === "" && (t.content = void 0),
              t.content &&
                (Rn(t.content)
                  ? o.setRequestHeader(
                      "Content-Type",
                      "application/octet-stream"
                    )
                  : o.setRequestHeader(
                      "Content-Type",
                      "text/plain;charset=UTF-8"
                    ));
            const l = t.headers;
            l &&
              Object.keys(l).forEach((i) => {
                o.setRequestHeader(i, l[i]);
              }),
              t.responseType && (o.responseType = t.responseType),
              t.abortSignal &&
                (t.abortSignal.onabort = () => {
                  o.abort(), r(new kt());
                }),
              t.timeout && (o.timeout = t.timeout),
              (o.onload = () => {
                t.abortSignal && (t.abortSignal.onabort = null),
                  o.status >= 200 && o.status < 300
                    ? n(
                        new rf(
                          o.status,
                          o.statusText,
                          o.response || o.responseText
                        )
                      )
                    : r(
                        new jn(
                          o.response || o.responseText || o.statusText,
                          o.status
                        )
                      );
              }),
              (o.onerror = () => {
                this._logger.log(
                  N.Warning,
                  `Error from HTTP request. ${o.status}: ${o.statusText}.`
                ),
                  r(new jn(o.statusText, o.status));
              }),
              (o.ontimeout = () => {
                this._logger.log(N.Warning, "Timeout from HTTP request."),
                  r(new ca());
              }),
              o.send(t.content);
          })
        : Promise.reject(new Error("No url defined."))
      : Promise.reject(new Error("No method defined."));
  }
}
class _p extends Fo {
  constructor(t) {
    if ((super(), typeof fetch < "u" || we.isNode))
      this._httpClient = new wp(t);
    else if (typeof XMLHttpRequest < "u") this._httpClient = new bp(t);
    else throw new Error("No usable HttpClient found.");
  }
  send(t) {
    return t.abortSignal && t.abortSignal.aborted
      ? Promise.reject(new kt())
      : t.method
      ? t.url
        ? this._httpClient.send(t)
        : Promise.reject(new Error("No url defined."))
      : Promise.reject(new Error("No method defined."));
  }
  getCookieString(t) {
    return this._httpClient.getCookieString(t);
  }
}
class ct {
  static write(t) {
    return `${t}${ct.RecordSeparator}`;
  }
  static parse(t) {
    if (t[t.length - 1] !== ct.RecordSeparator)
      throw new Error("Message is incomplete.");
    const n = t.split(ct.RecordSeparator);
    return n.pop(), n;
  }
}
ct.RecordSeparatorCode = 30;
ct.RecordSeparator = String.fromCharCode(ct.RecordSeparatorCode);
class Np {
  writeHandshakeRequest(t) {
    return ct.write(JSON.stringify(t));
  }
  parseHandshakeResponse(t) {
    let n, r;
    if (Rn(t)) {
      const a = new Uint8Array(t),
        c = a.indexOf(ct.RecordSeparatorCode);
      if (c === -1) throw new Error("Message is incomplete.");
      const u = c + 1;
      (n = String.fromCharCode.apply(
        null,
        Array.prototype.slice.call(a.slice(0, u))
      )),
        (r = a.byteLength > u ? a.slice(u).buffer : null);
    } else {
      const a = t,
        c = a.indexOf(ct.RecordSeparator);
      if (c === -1) throw new Error("Message is incomplete.");
      const u = c + 1;
      (n = a.substring(0, u)), (r = a.length > u ? a.substring(u) : null);
    }
    const o = ct.parse(n),
      l = JSON.parse(o[0]);
    if (l.type)
      throw new Error("Expected a handshake response from the server.");
    return [r, l];
  }
}
var ne;
(function (e) {
  (e[(e.Invocation = 1)] = "Invocation"),
    (e[(e.StreamItem = 2)] = "StreamItem"),
    (e[(e.Completion = 3)] = "Completion"),
    (e[(e.StreamInvocation = 4)] = "StreamInvocation"),
    (e[(e.CancelInvocation = 5)] = "CancelInvocation"),
    (e[(e.Ping = 6)] = "Ping"),
    (e[(e.Close = 7)] = "Close"),
    (e[(e.Ack = 8)] = "Ack"),
    (e[(e.Sequence = 9)] = "Sequence");
})(ne || (ne = {}));
class jp {
  constructor() {
    this.observers = [];
  }
  next(t) {
    for (const n of this.observers) n.next(t);
  }
  error(t) {
    for (const n of this.observers) n.error && n.error(t);
  }
  complete() {
    for (const t of this.observers) t.complete && t.complete();
  }
  subscribe(t) {
    return this.observers.push(t), new mp(this, t);
  }
}
class Sp {
  constructor(t, n, r) {
    (this._bufferSize = 1e5),
      (this._messages = []),
      (this._totalMessageCount = 0),
      (this._waitForSequenceMessage = !1),
      (this._nextReceivingSequenceId = 1),
      (this._latestReceivedSequenceId = 0),
      (this._bufferedByteCount = 0),
      (this._reconnectInProgress = !1),
      (this._protocol = t),
      (this._connection = n),
      (this._bufferSize = r);
  }
  async _send(t) {
    const n = this._protocol.writeMessage(t);
    let r = Promise.resolve();
    if (this._isInvocationMessage(t)) {
      this._totalMessageCount++;
      let o = () => {},
        l = () => {};
      Rn(n)
        ? (this._bufferedByteCount += n.byteLength)
        : (this._bufferedByteCount += n.length),
        this._bufferedByteCount >= this._bufferSize &&
          (r = new Promise((i, a) => {
            (o = i), (l = a);
          })),
        this._messages.push(new kp(n, this._totalMessageCount, o, l));
    }
    try {
      this._reconnectInProgress || (await this._connection.send(n));
    } catch {
      this._disconnected();
    }
    await r;
  }
  _ack(t) {
    let n = -1;
    for (let r = 0; r < this._messages.length; r++) {
      const o = this._messages[r];
      if (o._id <= t.sequenceId)
        (n = r),
          Rn(o._message)
            ? (this._bufferedByteCount -= o._message.byteLength)
            : (this._bufferedByteCount -= o._message.length),
          o._resolver();
      else if (this._bufferedByteCount < this._bufferSize) o._resolver();
      else break;
    }
    n !== -1 && (this._messages = this._messages.slice(n + 1));
  }
  _shouldProcessMessage(t) {
    if (this._waitForSequenceMessage)
      return t.type !== ne.Sequence
        ? !1
        : ((this._waitForSequenceMessage = !1), !0);
    if (!this._isInvocationMessage(t)) return !0;
    const n = this._nextReceivingSequenceId;
    return (
      this._nextReceivingSequenceId++,
      n <= this._latestReceivedSequenceId
        ? (n === this._latestReceivedSequenceId && this._ackTimer(), !1)
        : ((this._latestReceivedSequenceId = n), this._ackTimer(), !0)
    );
  }
  _resetSequence(t) {
    if (t.sequenceId > this._nextReceivingSequenceId) {
      this._connection.stop(
        new Error("Sequence ID greater than amount of messages we've received.")
      );
      return;
    }
    this._nextReceivingSequenceId = t.sequenceId;
  }
  _disconnected() {
    (this._reconnectInProgress = !0), (this._waitForSequenceMessage = !0);
  }
  async _resend() {
    const t =
      this._messages.length !== 0
        ? this._messages[0]._id
        : this._totalMessageCount + 1;
    await this._connection.send(
      this._protocol.writeMessage({ type: ne.Sequence, sequenceId: t })
    );
    const n = this._messages;
    for (const r of n) await this._connection.send(r._message);
    this._reconnectInProgress = !1;
  }
  _dispose(t) {
    t ?? (t = new Error("Unable to reconnect to server."));
    for (const n of this._messages) n._rejector(t);
  }
  _isInvocationMessage(t) {
    switch (t.type) {
      case ne.Invocation:
      case ne.StreamItem:
      case ne.Completion:
      case ne.StreamInvocation:
      case ne.CancelInvocation:
        return !0;
      case ne.Close:
      case ne.Sequence:
      case ne.Ping:
      case ne.Ack:
        return !1;
    }
  }
  _ackTimer() {
    this._ackTimerHandle === void 0 &&
      (this._ackTimerHandle = setTimeout(async () => {
        try {
          this._reconnectInProgress ||
            (await this._connection.send(
              this._protocol.writeMessage({
                type: ne.Ack,
                sequenceId: this._latestReceivedSequenceId,
              })
            ));
        } catch {}
        clearTimeout(this._ackTimerHandle), (this._ackTimerHandle = void 0);
      }, 1e3));
  }
}
class kp {
  constructor(t, n, r, o) {
    (this._message = t),
      (this._id = n),
      (this._resolver = r),
      (this._rejector = o);
  }
}
const Cp = 30 * 1e3,
  Ep = 15 * 1e3,
  Dp = 1e5;
var de;
(function (e) {
  (e.Disconnected = "Disconnected"),
    (e.Connecting = "Connecting"),
    (e.Connected = "Connected"),
    (e.Disconnecting = "Disconnecting"),
    (e.Reconnecting = "Reconnecting");
})(de || (de = {}));
class ua {
  static create(t, n, r, o, l, i, a) {
    return new ua(t, n, r, o, l, i, a);
  }
  constructor(t, n, r, o, l, i, a) {
    (this._nextKeepAlive = 0),
      (this._freezeEventListener = () => {
        this._logger.log(
          N.Warning,
          "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://learn.microsoft.com/aspnet/core/signalr/javascript-client#bsleep"
        );
      }),
      De.isRequired(t, "connection"),
      De.isRequired(n, "logger"),
      De.isRequired(r, "protocol"),
      (this.serverTimeoutInMilliseconds = l ?? Cp),
      (this.keepAliveIntervalInMilliseconds = i ?? Ep),
      (this._statefulReconnectBufferSize = a ?? Dp),
      (this._logger = n),
      (this._protocol = r),
      (this.connection = t),
      (this._reconnectPolicy = o),
      (this._handshakeProtocol = new Np()),
      (this.connection.onreceive = (c) => this._processIncomingData(c)),
      (this.connection.onclose = (c) => this._connectionClosed(c)),
      (this._callbacks = {}),
      (this._methods = {}),
      (this._closedCallbacks = []),
      (this._reconnectingCallbacks = []),
      (this._reconnectedCallbacks = []),
      (this._invocationId = 0),
      (this._receivedHandshakeResponse = !1),
      (this._connectionState = de.Disconnected),
      (this._connectionStarted = !1),
      (this._cachedPingMessage = this._protocol.writeMessage({
        type: ne.Ping,
      }));
  }
  get state() {
    return this._connectionState;
  }
  get connectionId() {
    return (this.connection && this.connection.connectionId) || null;
  }
  get baseUrl() {
    return this.connection.baseUrl || "";
  }
  set baseUrl(t) {
    if (
      this._connectionState !== de.Disconnected &&
      this._connectionState !== de.Reconnecting
    )
      throw new Error(
        "The HubConnection must be in the Disconnected or Reconnecting state to change the url."
      );
    if (!t) throw new Error("The HubConnection url must be a valid url.");
    this.connection.baseUrl = t;
  }
  start() {
    return (
      (this._startPromise = this._startWithStateTransitions()),
      this._startPromise
    );
  }
  async _startWithStateTransitions() {
    if (this._connectionState !== de.Disconnected)
      return Promise.reject(
        new Error(
          "Cannot start a HubConnection that is not in the 'Disconnected' state."
        )
      );
    (this._connectionState = de.Connecting),
      this._logger.log(N.Debug, "Starting HubConnection.");
    try {
      await this._startInternal(),
        we.isBrowser &&
          window.document.addEventListener("freeze", this._freezeEventListener),
        (this._connectionState = de.Connected),
        (this._connectionStarted = !0),
        this._logger.log(N.Debug, "HubConnection connected successfully.");
    } catch (t) {
      return (
        (this._connectionState = de.Disconnected),
        this._logger.log(
          N.Debug,
          `HubConnection failed to start successfully because of error '${t}'.`
        ),
        Promise.reject(t)
      );
    }
  }
  async _startInternal() {
    (this._stopDuringStartError = void 0),
      (this._receivedHandshakeResponse = !1);
    const t = new Promise((n, r) => {
      (this._handshakeResolver = n), (this._handshakeRejecter = r);
    });
    await this.connection.start(this._protocol.transferFormat);
    try {
      let n = this._protocol.version;
      this.connection.features.reconnect || (n = 1);
      const r = { protocol: this._protocol.name, version: n };
      if (
        (this._logger.log(N.Debug, "Sending handshake request."),
        await this._sendMessage(
          this._handshakeProtocol.writeHandshakeRequest(r)
        ),
        this._logger.log(
          N.Information,
          `Using HubProtocol '${this._protocol.name}'.`
        ),
        this._cleanupTimeout(),
        this._resetTimeoutPeriod(),
        this._resetKeepAliveInterval(),
        await t,
        this._stopDuringStartError)
      )
        throw this._stopDuringStartError;
      (this.connection.features.reconnect || !1) &&
        ((this._messageBuffer = new Sp(
          this._protocol,
          this.connection,
          this._statefulReconnectBufferSize
        )),
        (this.connection.features.disconnected =
          this._messageBuffer._disconnected.bind(this._messageBuffer)),
        (this.connection.features.resend = () => {
          if (this._messageBuffer) return this._messageBuffer._resend();
        })),
        this.connection.features.inherentKeepAlive ||
          (await this._sendMessage(this._cachedPingMessage));
    } catch (n) {
      throw (
        (this._logger.log(
          N.Debug,
          `Hub handshake failed with error '${n}' during start(). Stopping HubConnection.`
        ),
        this._cleanupTimeout(),
        this._cleanupPingTimer(),
        await this.connection.stop(n),
        n)
      );
    }
  }
  async stop() {
    const t = this._startPromise;
    (this.connection.features.reconnect = !1),
      (this._stopPromise = this._stopInternal()),
      await this._stopPromise;
    try {
      await t;
    } catch {}
  }
  _stopInternal(t) {
    if (this._connectionState === de.Disconnected)
      return (
        this._logger.log(
          N.Debug,
          `Call to HubConnection.stop(${t}) ignored because it is already in the disconnected state.`
        ),
        Promise.resolve()
      );
    if (this._connectionState === de.Disconnecting)
      return (
        this._logger.log(
          N.Debug,
          `Call to HttpConnection.stop(${t}) ignored because the connection is already in the disconnecting state.`
        ),
        this._stopPromise
      );
    const n = this._connectionState;
    return (
      (this._connectionState = de.Disconnecting),
      this._logger.log(N.Debug, "Stopping HubConnection."),
      this._reconnectDelayHandle
        ? (this._logger.log(
            N.Debug,
            "Connection stopped during reconnect delay. Done reconnecting."
          ),
          clearTimeout(this._reconnectDelayHandle),
          (this._reconnectDelayHandle = void 0),
          this._completeClose(),
          Promise.resolve())
        : (n === de.Connected && this._sendCloseMessage(),
          this._cleanupTimeout(),
          this._cleanupPingTimer(),
          (this._stopDuringStartError =
            t ||
            new kt(
              "The connection was stopped before the hub handshake could complete."
            )),
          this.connection.stop(t))
    );
  }
  async _sendCloseMessage() {
    try {
      await this._sendWithProtocol(this._createCloseMessage());
    } catch {}
  }
  stream(t, ...n) {
    const [r, o] = this._replaceStreamingParams(n),
      l = this._createStreamInvocation(t, n, o);
    let i;
    const a = new jp();
    return (
      (a.cancelCallback = () => {
        const c = this._createCancelInvocation(l.invocationId);
        return (
          delete this._callbacks[l.invocationId],
          i.then(() => this._sendWithProtocol(c))
        );
      }),
      (this._callbacks[l.invocationId] = (c, u) => {
        if (u) {
          a.error(u);
          return;
        } else
          c &&
            (c.type === ne.Completion
              ? c.error
                ? a.error(new Error(c.error))
                : a.complete()
              : a.next(c.item));
      }),
      (i = this._sendWithProtocol(l).catch((c) => {
        a.error(c), delete this._callbacks[l.invocationId];
      })),
      this._launchStreams(r, i),
      a
    );
  }
  _sendMessage(t) {
    return this._resetKeepAliveInterval(), this.connection.send(t);
  }
  _sendWithProtocol(t) {
    return this._messageBuffer
      ? this._messageBuffer._send(t)
      : this._sendMessage(this._protocol.writeMessage(t));
  }
  send(t, ...n) {
    const [r, o] = this._replaceStreamingParams(n),
      l = this._sendWithProtocol(this._createInvocation(t, n, !0, o));
    return this._launchStreams(r, l), l;
  }
  invoke(t, ...n) {
    const [r, o] = this._replaceStreamingParams(n),
      l = this._createInvocation(t, n, !1, o);
    return new Promise((a, c) => {
      this._callbacks[l.invocationId] = (h, m) => {
        if (m) {
          c(m);
          return;
        } else
          h &&
            (h.type === ne.Completion
              ? h.error
                ? c(new Error(h.error))
                : a(h.result)
              : c(new Error(`Unexpected message type: ${h.type}`)));
      };
      const u = this._sendWithProtocol(l).catch((h) => {
        c(h), delete this._callbacks[l.invocationId];
      });
      this._launchStreams(r, u);
    });
  }
  on(t, n) {
    !t ||
      !n ||
      ((t = t.toLowerCase()),
      this._methods[t] || (this._methods[t] = []),
      this._methods[t].indexOf(n) === -1 && this._methods[t].push(n));
  }
  off(t, n) {
    if (!t) return;
    t = t.toLowerCase();
    const r = this._methods[t];
    if (r)
      if (n) {
        const o = r.indexOf(n);
        o !== -1 && (r.splice(o, 1), r.length === 0 && delete this._methods[t]);
      } else delete this._methods[t];
  }
  onclose(t) {
    t && this._closedCallbacks.push(t);
  }
  onreconnecting(t) {
    t && this._reconnectingCallbacks.push(t);
  }
  onreconnected(t) {
    t && this._reconnectedCallbacks.push(t);
  }
  _processIncomingData(t) {
    if (
      (this._cleanupTimeout(),
      this._receivedHandshakeResponse ||
        ((t = this._processHandshakeResponse(t)),
        (this._receivedHandshakeResponse = !0)),
      t)
    ) {
      const n = this._protocol.parseMessages(t, this._logger);
      for (const r of n)
        if (
          !(
            this._messageBuffer && !this._messageBuffer._shouldProcessMessage(r)
          )
        )
          switch (r.type) {
            case ne.Invocation:
              this._invokeClientMethod(r).catch((o) => {
                this._logger.log(
                  N.Error,
                  `Invoke client method threw error: ${pl(o)}`
                );
              });
              break;
            case ne.StreamItem:
            case ne.Completion: {
              const o = this._callbacks[r.invocationId];
              if (o) {
                r.type === ne.Completion &&
                  delete this._callbacks[r.invocationId];
                try {
                  o(r);
                } catch (l) {
                  this._logger.log(
                    N.Error,
                    `Stream callback threw error: ${pl(l)}`
                  );
                }
              }
              break;
            }
            case ne.Ping:
              break;
            case ne.Close: {
              this._logger.log(
                N.Information,
                "Close message received from server."
              );
              const o = r.error
                ? new Error("Server returned an error on close: " + r.error)
                : void 0;
              r.allowReconnect === !0
                ? this.connection.stop(o)
                : (this._stopPromise = this._stopInternal(o));
              break;
            }
            case ne.Ack:
              this._messageBuffer && this._messageBuffer._ack(r);
              break;
            case ne.Sequence:
              this._messageBuffer && this._messageBuffer._resetSequence(r);
              break;
            default:
              this._logger.log(N.Warning, `Invalid message type: ${r.type}.`);
              break;
          }
    }
    this._resetTimeoutPeriod();
  }
  _processHandshakeResponse(t) {
    let n, r;
    try {
      [r, n] = this._handshakeProtocol.parseHandshakeResponse(t);
    } catch (o) {
      const l = "Error parsing handshake response: " + o;
      this._logger.log(N.Error, l);
      const i = new Error(l);
      throw (this._handshakeRejecter(i), i);
    }
    if (n.error) {
      const o = "Server returned handshake error: " + n.error;
      this._logger.log(N.Error, o);
      const l = new Error(o);
      throw (this._handshakeRejecter(l), l);
    } else this._logger.log(N.Debug, "Server handshake complete.");
    return this._handshakeResolver(), r;
  }
  _resetKeepAliveInterval() {
    this.connection.features.inherentKeepAlive ||
      ((this._nextKeepAlive =
        new Date().getTime() + this.keepAliveIntervalInMilliseconds),
      this._cleanupPingTimer());
  }
  _resetTimeoutPeriod() {
    if (
      (!this.connection.features ||
        !this.connection.features.inherentKeepAlive) &&
      ((this._timeoutHandle = setTimeout(
        () => this.serverTimeout(),
        this.serverTimeoutInMilliseconds
      )),
      this._pingServerHandle === void 0)
    ) {
      let t = this._nextKeepAlive - new Date().getTime();
      t < 0 && (t = 0),
        (this._pingServerHandle = setTimeout(async () => {
          if (this._connectionState === de.Connected)
            try {
              await this._sendMessage(this._cachedPingMessage);
            } catch {
              this._cleanupPingTimer();
            }
        }, t));
    }
  }
  serverTimeout() {
    this.connection.stop(
      new Error(
        "Server timeout elapsed without receiving a message from the server."
      )
    );
  }
  async _invokeClientMethod(t) {
    const n = t.target.toLowerCase(),
      r = this._methods[n];
    if (!r) {
      this._logger.log(
        N.Warning,
        `No client method with the name '${n}' found.`
      ),
        t.invocationId &&
          (this._logger.log(
            N.Warning,
            `No result given for '${n}' method and invocation ID '${t.invocationId}'.`
          ),
          await this._sendWithProtocol(
            this._createCompletionMessage(
              t.invocationId,
              "Client didn't provide a result.",
              null
            )
          ));
      return;
    }
    const o = r.slice(),
      l = !!t.invocationId;
    let i, a, c;
    for (const u of o)
      try {
        const h = i;
        (i = await u.apply(this, t.arguments)),
          l &&
            i &&
            h &&
            (this._logger.log(
              N.Error,
              `Multiple results provided for '${n}'. Sending error to server.`
            ),
            (c = this._createCompletionMessage(
              t.invocationId,
              "Client provided multiple results.",
              null
            ))),
          (a = void 0);
      } catch (h) {
        (a = h),
          this._logger.log(
            N.Error,
            `A callback for the method '${n}' threw error '${h}'.`
          );
      }
    c
      ? await this._sendWithProtocol(c)
      : l
      ? (a
          ? (c = this._createCompletionMessage(t.invocationId, `${a}`, null))
          : i !== void 0
          ? (c = this._createCompletionMessage(t.invocationId, null, i))
          : (this._logger.log(
              N.Warning,
              `No result given for '${n}' method and invocation ID '${t.invocationId}'.`
            ),
            (c = this._createCompletionMessage(
              t.invocationId,
              "Client didn't provide a result.",
              null
            ))),
        await this._sendWithProtocol(c))
      : i &&
        this._logger.log(
          N.Error,
          `Result given for '${n}' method but server is not expecting a result.`
        );
  }
  _connectionClosed(t) {
    this._logger.log(
      N.Debug,
      `HubConnection.connectionClosed(${t}) called while in state ${this._connectionState}.`
    ),
      (this._stopDuringStartError =
        this._stopDuringStartError ||
        t ||
        new kt(
          "The underlying connection was closed before the hub handshake could complete."
        )),
      this._handshakeResolver && this._handshakeResolver(),
      this._cancelCallbacksWithError(
        t ||
          new Error(
            "Invocation canceled due to the underlying connection being closed."
          )
      ),
      this._cleanupTimeout(),
      this._cleanupPingTimer(),
      this._connectionState === de.Disconnecting
        ? this._completeClose(t)
        : this._connectionState === de.Connected && this._reconnectPolicy
        ? this._reconnect(t)
        : this._connectionState === de.Connected && this._completeClose(t);
  }
  _completeClose(t) {
    if (this._connectionStarted) {
      (this._connectionState = de.Disconnected),
        (this._connectionStarted = !1),
        this._messageBuffer &&
          (this._messageBuffer._dispose(t ?? new Error("Connection closed.")),
          (this._messageBuffer = void 0)),
        we.isBrowser &&
          window.document.removeEventListener(
            "freeze",
            this._freezeEventListener
          );
      try {
        this._closedCallbacks.forEach((n) => n.apply(this, [t]));
      } catch (n) {
        this._logger.log(
          N.Error,
          `An onclose callback called with error '${t}' threw error '${n}'.`
        );
      }
    }
  }
  async _reconnect(t) {
    const n = Date.now();
    let r = 0,
      o =
        t !== void 0
          ? t
          : new Error("Attempting to reconnect due to a unknown error."),
      l = this._getNextRetryDelay(r++, 0, o);
    if (l === null) {
      this._logger.log(
        N.Debug,
        "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt."
      ),
        this._completeClose(t);
      return;
    }
    if (
      ((this._connectionState = de.Reconnecting),
      t
        ? this._logger.log(
            N.Information,
            `Connection reconnecting because of error '${t}'.`
          )
        : this._logger.log(N.Information, "Connection reconnecting."),
      this._reconnectingCallbacks.length !== 0)
    ) {
      try {
        this._reconnectingCallbacks.forEach((i) => i.apply(this, [t]));
      } catch (i) {
        this._logger.log(
          N.Error,
          `An onreconnecting callback called with error '${t}' threw error '${i}'.`
        );
      }
      if (this._connectionState !== de.Reconnecting) {
        this._logger.log(
          N.Debug,
          "Connection left the reconnecting state in onreconnecting callback. Done reconnecting."
        );
        return;
      }
    }
    for (; l !== null; ) {
      if (
        (this._logger.log(
          N.Information,
          `Reconnect attempt number ${r} will start in ${l} ms.`
        ),
        await new Promise((i) => {
          this._reconnectDelayHandle = setTimeout(i, l);
        }),
        (this._reconnectDelayHandle = void 0),
        this._connectionState !== de.Reconnecting)
      ) {
        this._logger.log(
          N.Debug,
          "Connection left the reconnecting state during reconnect delay. Done reconnecting."
        );
        return;
      }
      try {
        if (
          (await this._startInternal(),
          (this._connectionState = de.Connected),
          this._logger.log(
            N.Information,
            "HubConnection reconnected successfully."
          ),
          this._reconnectedCallbacks.length !== 0)
        )
          try {
            this._reconnectedCallbacks.forEach((i) =>
              i.apply(this, [this.connection.connectionId])
            );
          } catch (i) {
            this._logger.log(
              N.Error,
              `An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${i}'.`
            );
          }
        return;
      } catch (i) {
        if (
          (this._logger.log(
            N.Information,
            `Reconnect attempt failed because of error '${i}'.`
          ),
          this._connectionState !== de.Reconnecting)
        ) {
          this._logger.log(
            N.Debug,
            `Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`
          ),
            this._connectionState === de.Disconnecting && this._completeClose();
          return;
        }
        (o = i instanceof Error ? i : new Error(i.toString())),
          (l = this._getNextRetryDelay(r++, Date.now() - n, o));
      }
    }
    this._logger.log(
      N.Information,
      `Reconnect retries have been exhausted after ${
        Date.now() - n
      } ms and ${r} failed attempts. Connection disconnecting.`
    ),
      this._completeClose();
  }
  _getNextRetryDelay(t, n, r) {
    try {
      return this._reconnectPolicy.nextRetryDelayInMilliseconds({
        elapsedMilliseconds: n,
        previousRetryCount: t,
        retryReason: r,
      });
    } catch (o) {
      return (
        this._logger.log(
          N.Error,
          `IRetryPolicy.nextRetryDelayInMilliseconds(${t}, ${n}) threw error '${o}'.`
        ),
        null
      );
    }
  }
  _cancelCallbacksWithError(t) {
    const n = this._callbacks;
    (this._callbacks = {}),
      Object.keys(n).forEach((r) => {
        const o = n[r];
        try {
          o(null, t);
        } catch (l) {
          this._logger.log(
            N.Error,
            `Stream 'error' callback called with '${t}' threw error: ${pl(l)}`
          );
        }
      });
  }
  _cleanupPingTimer() {
    this._pingServerHandle &&
      (clearTimeout(this._pingServerHandle), (this._pingServerHandle = void 0));
  }
  _cleanupTimeout() {
    this._timeoutHandle && clearTimeout(this._timeoutHandle);
  }
  _createInvocation(t, n, r, o) {
    if (r)
      return o.length !== 0
        ? { target: t, arguments: n, streamIds: o, type: ne.Invocation }
        : { target: t, arguments: n, type: ne.Invocation };
    {
      const l = this._invocationId;
      return (
        this._invocationId++,
        o.length !== 0
          ? {
              target: t,
              arguments: n,
              invocationId: l.toString(),
              streamIds: o,
              type: ne.Invocation,
            }
          : {
              target: t,
              arguments: n,
              invocationId: l.toString(),
              type: ne.Invocation,
            }
      );
    }
  }
  _launchStreams(t, n) {
    if (t.length !== 0) {
      n || (n = Promise.resolve());
      for (const r in t)
        t[r].subscribe({
          complete: () => {
            n = n.then(() =>
              this._sendWithProtocol(this._createCompletionMessage(r))
            );
          },
          error: (o) => {
            let l;
            o instanceof Error
              ? (l = o.message)
              : o && o.toString
              ? (l = o.toString())
              : (l = "Unknown error"),
              (n = n.then(() =>
                this._sendWithProtocol(this._createCompletionMessage(r, l))
              ));
          },
          next: (o) => {
            n = n.then(() =>
              this._sendWithProtocol(this._createStreamItemMessage(r, o))
            );
          },
        });
    }
  }
  _replaceStreamingParams(t) {
    const n = [],
      r = [];
    for (let o = 0; o < t.length; o++) {
      const l = t[o];
      if (this._isObservable(l)) {
        const i = this._invocationId;
        this._invocationId++, (n[i] = l), r.push(i.toString()), t.splice(o, 1);
      }
    }
    return [n, r];
  }
  _isObservable(t) {
    return t && t.subscribe && typeof t.subscribe == "function";
  }
  _createStreamInvocation(t, n, r) {
    const o = this._invocationId;
    return (
      this._invocationId++,
      r.length !== 0
        ? {
            target: t,
            arguments: n,
            invocationId: o.toString(),
            streamIds: r,
            type: ne.StreamInvocation,
          }
        : {
            target: t,
            arguments: n,
            invocationId: o.toString(),
            type: ne.StreamInvocation,
          }
    );
  }
  _createCancelInvocation(t) {
    return { invocationId: t, type: ne.CancelInvocation };
  }
  _createStreamItemMessage(t, n) {
    return { invocationId: t, item: n, type: ne.StreamItem };
  }
  _createCompletionMessage(t, n, r) {
    return n
      ? { error: n, invocationId: t, type: ne.Completion }
      : { invocationId: t, result: r, type: ne.Completion };
  }
  _createCloseMessage() {
    return { type: ne.Close };
  }
}
const Tp = [0, 2e3, 1e4, 3e4, null];
class kc {
  constructor(t) {
    this._retryDelays = t !== void 0 ? [...t, null] : Tp;
  }
  nextRetryDelayInMilliseconds(t) {
    return this._retryDelays[t.previousRetryCount];
  }
}
class Sn {}
Sn.Authorization = "Authorization";
Sn.Cookie = "Cookie";
class Ip extends Fo {
  constructor(t, n) {
    super(), (this._innerClient = t), (this._accessTokenFactory = n);
  }
  async send(t) {
    let n = !0;
    this._accessTokenFactory &&
      (!this._accessToken || (t.url && t.url.indexOf("/negotiate?") > 0)) &&
      ((n = !1), (this._accessToken = await this._accessTokenFactory())),
      this._setAuthorizationHeader(t);
    const r = await this._innerClient.send(t);
    return n && r.statusCode === 401 && this._accessTokenFactory
      ? ((this._accessToken = await this._accessTokenFactory()),
        this._setAuthorizationHeader(t),
        await this._innerClient.send(t))
      : r;
  }
  _setAuthorizationHeader(t) {
    t.headers || (t.headers = {}),
      this._accessToken
        ? (t.headers[Sn.Authorization] = `Bearer ${this._accessToken}`)
        : this._accessTokenFactory &&
          t.headers[Sn.Authorization] &&
          delete t.headers[Sn.Authorization];
  }
  getCookieString(t) {
    return this._innerClient.getCookieString(t);
  }
}
var Ie;
(function (e) {
  (e[(e.None = 0)] = "None"),
    (e[(e.WebSockets = 1)] = "WebSockets"),
    (e[(e.ServerSentEvents = 2)] = "ServerSentEvents"),
    (e[(e.LongPolling = 4)] = "LongPolling");
})(Ie || (Ie = {}));
var Ge;
(function (e) {
  (e[(e.Text = 1)] = "Text"), (e[(e.Binary = 2)] = "Binary");
})(Ge || (Ge = {}));
let Pp = class {
  constructor() {
    (this._isAborted = !1), (this.onabort = null);
  }
  abort() {
    this._isAborted || ((this._isAborted = !0), this.onabort && this.onabort());
  }
  get signal() {
    return this;
  }
  get aborted() {
    return this._isAborted;
  }
};
class Cc {
  get pollAborted() {
    return this._pollAbort.aborted;
  }
  constructor(t, n, r) {
    (this._httpClient = t),
      (this._logger = n),
      (this._pollAbort = new Pp()),
      (this._options = r),
      (this._running = !1),
      (this.onreceive = null),
      (this.onclose = null);
  }
  async connect(t, n) {
    if (
      (De.isRequired(t, "url"),
      De.isRequired(n, "transferFormat"),
      De.isIn(n, Ge, "transferFormat"),
      (this._url = t),
      this._logger.log(N.Trace, "(LongPolling transport) Connecting."),
      n === Ge.Binary &&
        typeof XMLHttpRequest < "u" &&
        typeof new XMLHttpRequest().responseType != "string")
    )
      throw new Error(
        "Binary protocols over XmlHttpRequest not implementing advanced features are not supported."
      );
    const [r, o] = hr(),
      l = { [r]: o, ...this._options.headers },
      i = {
        abortSignal: this._pollAbort.signal,
        headers: l,
        timeout: 1e5,
        withCredentials: this._options.withCredentials,
      };
    n === Ge.Binary && (i.responseType = "arraybuffer");
    const a = `${t}&_=${Date.now()}`;
    this._logger.log(N.Trace, `(LongPolling transport) polling: ${a}.`);
    const c = await this._httpClient.get(a, i);
    c.statusCode !== 200
      ? (this._logger.log(
          N.Error,
          `(LongPolling transport) Unexpected response code: ${c.statusCode}.`
        ),
        (this._closeError = new jn(c.statusText || "", c.statusCode)),
        (this._running = !1))
      : (this._running = !0),
      (this._receiving = this._poll(this._url, i));
  }
  async _poll(t, n) {
    try {
      for (; this._running; )
        try {
          const r = `${t}&_=${Date.now()}`;
          this._logger.log(N.Trace, `(LongPolling transport) polling: ${r}.`);
          const o = await this._httpClient.get(r, n);
          o.statusCode === 204
            ? (this._logger.log(
                N.Information,
                "(LongPolling transport) Poll terminated by server."
              ),
              (this._running = !1))
            : o.statusCode !== 200
            ? (this._logger.log(
                N.Error,
                `(LongPolling transport) Unexpected response code: ${o.statusCode}.`
              ),
              (this._closeError = new jn(o.statusText || "", o.statusCode)),
              (this._running = !1))
            : o.content
            ? (this._logger.log(
                N.Trace,
                `(LongPolling transport) data received. ${ls(
                  o.content,
                  this._options.logMessageContent
                )}.`
              ),
              this.onreceive && this.onreceive(o.content))
            : this._logger.log(
                N.Trace,
                "(LongPolling transport) Poll timed out, reissuing."
              );
        } catch (r) {
          this._running
            ? r instanceof ca
              ? this._logger.log(
                  N.Trace,
                  "(LongPolling transport) Poll timed out, reissuing."
                )
              : ((this._closeError = r), (this._running = !1))
            : this._logger.log(
                N.Trace,
                `(LongPolling transport) Poll errored after shutdown: ${r.message}`
              );
        }
    } finally {
      this._logger.log(N.Trace, "(LongPolling transport) Polling complete."),
        this.pollAborted || this._raiseOnClose();
    }
  }
  async send(t) {
    return this._running
      ? sf(
          this._logger,
          "LongPolling",
          this._httpClient,
          this._url,
          t,
          this._options
        )
      : Promise.reject(
          new Error("Cannot send until the transport is connected")
        );
  }
  async stop() {
    this._logger.log(N.Trace, "(LongPolling transport) Stopping polling."),
      (this._running = !1),
      this._pollAbort.abort();
    try {
      await this._receiving,
        this._logger.log(
          N.Trace,
          `(LongPolling transport) sending DELETE request to ${this._url}.`
        );
      const t = {},
        [n, r] = hr();
      t[n] = r;
      const o = {
        headers: { ...t, ...this._options.headers },
        timeout: this._options.timeout,
        withCredentials: this._options.withCredentials,
      };
      let l;
      try {
        await this._httpClient.delete(this._url, o);
      } catch (i) {
        l = i;
      }
      l
        ? l instanceof jn &&
          (l.statusCode === 404
            ? this._logger.log(
                N.Trace,
                "(LongPolling transport) A 404 response was returned from sending a DELETE request."
              )
            : this._logger.log(
                N.Trace,
                `(LongPolling transport) Error sending a DELETE request: ${l}`
              ))
        : this._logger.log(
            N.Trace,
            "(LongPolling transport) DELETE request accepted."
          );
    } finally {
      this._logger.log(N.Trace, "(LongPolling transport) Stop finished."),
        this._raiseOnClose();
    }
  }
  _raiseOnClose() {
    if (this.onclose) {
      let t = "(LongPolling transport) Firing onclose event.";
      this._closeError && (t += " Error: " + this._closeError),
        this._logger.log(N.Trace, t),
        this.onclose(this._closeError);
    }
  }
}
class Rp {
  constructor(t, n, r, o) {
    (this._httpClient = t),
      (this._accessToken = n),
      (this._logger = r),
      (this._options = o),
      (this.onreceive = null),
      (this.onclose = null);
  }
  async connect(t, n) {
    return (
      De.isRequired(t, "url"),
      De.isRequired(n, "transferFormat"),
      De.isIn(n, Ge, "transferFormat"),
      this._logger.log(N.Trace, "(SSE transport) Connecting."),
      (this._url = t),
      this._accessToken &&
        (t +=
          (t.indexOf("?") < 0 ? "?" : "&") +
          `access_token=${encodeURIComponent(this._accessToken)}`),
      new Promise((r, o) => {
        let l = !1;
        if (n !== Ge.Text) {
          o(
            new Error(
              "The Server-Sent Events transport only supports the 'Text' transfer format"
            )
          );
          return;
        }
        let i;
        if (we.isBrowser || we.isWebWorker)
          i = new this._options.EventSource(t, {
            withCredentials: this._options.withCredentials,
          });
        else {
          const a = this._httpClient.getCookieString(t),
            c = {};
          c.Cookie = a;
          const [u, h] = hr();
          (c[u] = h),
            (i = new this._options.EventSource(t, {
              withCredentials: this._options.withCredentials,
              headers: { ...c, ...this._options.headers },
            }));
        }
        try {
          (i.onmessage = (a) => {
            if (this.onreceive)
              try {
                this._logger.log(
                  N.Trace,
                  `(SSE transport) data received. ${ls(
                    a.data,
                    this._options.logMessageContent
                  )}.`
                ),
                  this.onreceive(a.data);
              } catch (c) {
                this._close(c);
                return;
              }
          }),
            (i.onerror = (a) => {
              l
                ? this._close()
                : o(
                    new Error(
                      "EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled."
                    )
                  );
            }),
            (i.onopen = () => {
              this._logger.log(N.Information, `SSE connected to ${this._url}`),
                (this._eventSource = i),
                (l = !0),
                r();
            });
        } catch (a) {
          o(a);
          return;
        }
      })
    );
  }
  async send(t) {
    return this._eventSource
      ? sf(this._logger, "SSE", this._httpClient, this._url, t, this._options)
      : Promise.reject(
          new Error("Cannot send until the transport is connected")
        );
  }
  stop() {
    return this._close(), Promise.resolve();
  }
  _close(t) {
    this._eventSource &&
      (this._eventSource.close(),
      (this._eventSource = void 0),
      this.onclose && this.onclose(t));
  }
}
class Lp {
  constructor(t, n, r, o, l, i) {
    (this._logger = r),
      (this._accessTokenFactory = n),
      (this._logMessageContent = o),
      (this._webSocketConstructor = l),
      (this._httpClient = t),
      (this.onreceive = null),
      (this.onclose = null),
      (this._headers = i);
  }
  async connect(t, n) {
    De.isRequired(t, "url"),
      De.isRequired(n, "transferFormat"),
      De.isIn(n, Ge, "transferFormat"),
      this._logger.log(N.Trace, "(WebSockets transport) Connecting.");
    let r;
    return (
      this._accessTokenFactory && (r = await this._accessTokenFactory()),
      new Promise((o, l) => {
        t = t.replace(/^http/, "ws");
        let i;
        const a = this._httpClient.getCookieString(t);
        let c = !1;
        if (we.isNode || we.isReactNative) {
          const u = {},
            [h, m] = hr();
          (u[h] = m),
            r && (u[Sn.Authorization] = `Bearer ${r}`),
            a && (u[Sn.Cookie] = a),
            (i = new this._webSocketConstructor(t, void 0, {
              headers: { ...u, ...this._headers },
            }));
        } else
          r &&
            (t +=
              (t.indexOf("?") < 0 ? "?" : "&") +
              `access_token=${encodeURIComponent(r)}`);
        i || (i = new this._webSocketConstructor(t)),
          n === Ge.Binary && (i.binaryType = "arraybuffer"),
          (i.onopen = (u) => {
            this._logger.log(N.Information, `WebSocket connected to ${t}.`),
              (this._webSocket = i),
              (c = !0),
              o();
          }),
          (i.onerror = (u) => {
            let h = null;
            typeof ErrorEvent < "u" && u instanceof ErrorEvent
              ? (h = u.error)
              : (h = "There was an error with the transport"),
              this._logger.log(N.Information, `(WebSockets transport) ${h}.`);
          }),
          (i.onmessage = (u) => {
            if (
              (this._logger.log(
                N.Trace,
                `(WebSockets transport) data received. ${ls(
                  u.data,
                  this._logMessageContent
                )}.`
              ),
              this.onreceive)
            )
              try {
                this.onreceive(u.data);
              } catch (h) {
                this._close(h);
                return;
              }
          }),
          (i.onclose = (u) => {
            if (c) this._close(u);
            else {
              let h = null;
              typeof ErrorEvent < "u" && u instanceof ErrorEvent
                ? (h = u.error)
                : (h =
                    "WebSocket failed to connect. The connection could not be found on the server, either the endpoint may not be a SignalR endpoint, the connection ID is not present on the server, or there is a proxy blocking WebSockets. If you have multiple servers check that sticky sessions are enabled."),
                l(new Error(h));
            }
          });
      })
    );
  }
  send(t) {
    return this._webSocket &&
      this._webSocket.readyState === this._webSocketConstructor.OPEN
      ? (this._logger.log(
          N.Trace,
          `(WebSockets transport) sending data. ${ls(
            t,
            this._logMessageContent
          )}.`
        ),
        this._webSocket.send(t),
        Promise.resolve())
      : Promise.reject("WebSocket is not in the OPEN state");
  }
  stop() {
    return this._webSocket && this._close(void 0), Promise.resolve();
  }
  _close(t) {
    this._webSocket &&
      ((this._webSocket.onclose = () => {}),
      (this._webSocket.onmessage = () => {}),
      (this._webSocket.onerror = () => {}),
      this._webSocket.close(),
      (this._webSocket = void 0)),
      this._logger.log(N.Trace, "(WebSockets transport) socket closed."),
      this.onclose &&
        (this._isCloseEvent(t) && (t.wasClean === !1 || t.code !== 1e3)
          ? this.onclose(
              new Error(
                `WebSocket closed with status code: ${t.code} (${
                  t.reason || "no reason given"
                }).`
              )
            )
          : t instanceof Error
          ? this.onclose(t)
          : this.onclose());
  }
  _isCloseEvent(t) {
    return t && typeof t.wasClean == "boolean" && typeof t.code == "number";
  }
}
const Ec = 100;
class Mp {
  constructor(t, n = {}) {
    if (
      ((this._stopPromiseResolver = () => {}),
      (this.features = {}),
      (this._negotiateVersion = 1),
      De.isRequired(t, "url"),
      (this._logger = hp(n.logger)),
      (this.baseUrl = this._resolveUrl(t)),
      (n = n || {}),
      (n.logMessageContent =
        n.logMessageContent === void 0 ? !1 : n.logMessageContent),
      typeof n.withCredentials == "boolean" || n.withCredentials === void 0)
    )
      n.withCredentials = n.withCredentials === void 0 ? !0 : n.withCredentials;
    else
      throw new Error(
        "withCredentials option was not a 'boolean' or 'undefined' value"
      );
    n.timeout = n.timeout === void 0 ? 100 * 1e3 : n.timeout;
    let r = null,
      o = null;
    if (we.isNode && typeof require < "u") {
      const l =
        typeof __webpack_require__ == "function"
          ? __non_webpack_require__
          : require;
      (r = l("ws")), (o = l("eventsource"));
    }
    !we.isNode && typeof WebSocket < "u" && !n.WebSocket
      ? (n.WebSocket = WebSocket)
      : we.isNode && !n.WebSocket && r && (n.WebSocket = r),
      !we.isNode && typeof EventSource < "u" && !n.EventSource
        ? (n.EventSource = EventSource)
        : we.isNode && !n.EventSource && typeof o < "u" && (n.EventSource = o),
      (this._httpClient = new Ip(
        n.httpClient || new _p(this._logger),
        n.accessTokenFactory
      )),
      (this._connectionState = "Disconnected"),
      (this._connectionStarted = !1),
      (this._options = n),
      (this.onreceive = null),
      (this.onclose = null);
  }
  async start(t) {
    if (
      ((t = t || Ge.Binary),
      De.isIn(t, Ge, "transferFormat"),
      this._logger.log(
        N.Debug,
        `Starting connection with transfer format '${Ge[t]}'.`
      ),
      this._connectionState !== "Disconnected")
    )
      return Promise.reject(
        new Error(
          "Cannot start an HttpConnection that is not in the 'Disconnected' state."
        )
      );
    if (
      ((this._connectionState = "Connecting"),
      (this._startInternalPromise = this._startInternal(t)),
      await this._startInternalPromise,
      this._connectionState === "Disconnecting")
    ) {
      const n = "Failed to start the HttpConnection before stop() was called.";
      return (
        this._logger.log(N.Error, n),
        await this._stopPromise,
        Promise.reject(new kt(n))
      );
    } else if (this._connectionState !== "Connected") {
      const n =
        "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
      return this._logger.log(N.Error, n), Promise.reject(new kt(n));
    }
    this._connectionStarted = !0;
  }
  send(t) {
    return this._connectionState !== "Connected"
      ? Promise.reject(
          new Error(
            "Cannot send data if the connection is not in the 'Connected' State."
          )
        )
      : (this._sendQueue || (this._sendQueue = new da(this.transport)),
        this._sendQueue.send(t));
  }
  async stop(t) {
    if (this._connectionState === "Disconnected")
      return (
        this._logger.log(
          N.Debug,
          `Call to HttpConnection.stop(${t}) ignored because the connection is already in the disconnected state.`
        ),
        Promise.resolve()
      );
    if (this._connectionState === "Disconnecting")
      return (
        this._logger.log(
          N.Debug,
          `Call to HttpConnection.stop(${t}) ignored because the connection is already in the disconnecting state.`
        ),
        this._stopPromise
      );
    (this._connectionState = "Disconnecting"),
      (this._stopPromise = new Promise((n) => {
        this._stopPromiseResolver = n;
      })),
      await this._stopInternal(t),
      await this._stopPromise;
  }
  async _stopInternal(t) {
    this._stopError = t;
    try {
      await this._startInternalPromise;
    } catch {}
    if (this.transport) {
      try {
        await this.transport.stop();
      } catch (n) {
        this._logger.log(
          N.Error,
          `HttpConnection.transport.stop() threw error '${n}'.`
        ),
          this._stopConnection();
      }
      this.transport = void 0;
    } else
      this._logger.log(
        N.Debug,
        "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed."
      );
  }
  async _startInternal(t) {
    let n = this.baseUrl;
    (this._accessTokenFactory = this._options.accessTokenFactory),
      (this._httpClient._accessTokenFactory = this._accessTokenFactory);
    try {
      if (this._options.skipNegotiation)
        if (this._options.transport === Ie.WebSockets)
          (this.transport = this._constructTransport(Ie.WebSockets)),
            await this._startTransport(n, t);
        else
          throw new Error(
            "Negotiation can only be skipped when using the WebSocket transport directly."
          );
      else {
        let r = null,
          o = 0;
        do {
          if (
            ((r = await this._getNegotiationResponse(n)),
            this._connectionState === "Disconnecting" ||
              this._connectionState === "Disconnected")
          )
            throw new kt("The connection was stopped during negotiation.");
          if (r.error) throw new Error(r.error);
          if (r.ProtocolVersion)
            throw new Error(
              "Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details."
            );
          if ((r.url && (n = r.url), r.accessToken)) {
            const l = r.accessToken;
            (this._accessTokenFactory = () => l),
              (this._httpClient._accessToken = l),
              (this._httpClient._accessTokenFactory = void 0);
          }
          o++;
        } while (r.url && o < Ec);
        if (o === Ec && r.url)
          throw new Error("Negotiate redirection limit exceeded.");
        await this._createTransport(n, this._options.transport, r, t);
      }
      this.transport instanceof Cc && (this.features.inherentKeepAlive = !0),
        this._connectionState === "Connecting" &&
          (this._logger.log(
            N.Debug,
            "The HttpConnection connected successfully."
          ),
          (this._connectionState = "Connected"));
    } catch (r) {
      return (
        this._logger.log(N.Error, "Failed to start the connection: " + r),
        (this._connectionState = "Disconnected"),
        (this.transport = void 0),
        this._stopPromiseResolver(),
        Promise.reject(r)
      );
    }
  }
  async _getNegotiationResponse(t) {
    const n = {},
      [r, o] = hr();
    n[r] = o;
    const l = this._resolveNegotiateUrl(t);
    this._logger.log(N.Debug, `Sending negotiation request: ${l}.`);
    try {
      const i = await this._httpClient.post(l, {
        content: "",
        headers: { ...n, ...this._options.headers },
        timeout: this._options.timeout,
        withCredentials: this._options.withCredentials,
      });
      if (i.statusCode !== 200)
        return Promise.reject(
          new Error(
            `Unexpected status code returned from negotiate '${i.statusCode}'`
          )
        );
      const a = JSON.parse(i.content);
      return (
        (!a.negotiateVersion || a.negotiateVersion < 1) &&
          (a.connectionToken = a.connectionId),
        a.useStatefulReconnect && this._options._useStatefulReconnect !== !0
          ? Promise.reject(
              new jc(
                "Client didn't negotiate Stateful Reconnect but the server did."
              )
            )
          : a
      );
    } catch (i) {
      let a = "Failed to complete negotiation with the server: " + i;
      return (
        i instanceof jn &&
          i.statusCode === 404 &&
          (a =
            a +
            " Either this is not a SignalR endpoint or there is a proxy blocking the connection."),
        this._logger.log(N.Error, a),
        Promise.reject(new jc(a))
      );
    }
  }
  _createConnectUrl(t, n) {
    return n ? t + (t.indexOf("?") === -1 ? "?" : "&") + `id=${n}` : t;
  }
  async _createTransport(t, n, r, o) {
    let l = this._createConnectUrl(t, r.connectionToken);
    if (this._isITransport(n)) {
      this._logger.log(
        N.Debug,
        "Connection was provided an instance of ITransport, using that directly."
      ),
        (this.transport = n),
        await this._startTransport(l, o),
        (this.connectionId = r.connectionId);
      return;
    }
    const i = [],
      a = r.availableTransports || [];
    let c = r;
    for (const u of a) {
      const h = this._resolveTransportOrError(
        u,
        n,
        o,
        (c == null ? void 0 : c.useStatefulReconnect) === !0
      );
      if (h instanceof Error) i.push(`${u.transport} failed:`), i.push(h);
      else if (this._isITransport(h)) {
        if (((this.transport = h), !c)) {
          try {
            c = await this._getNegotiationResponse(t);
          } catch (m) {
            return Promise.reject(m);
          }
          l = this._createConnectUrl(t, c.connectionToken);
        }
        try {
          await this._startTransport(l, o),
            (this.connectionId = c.connectionId);
          return;
        } catch (m) {
          if (
            (this._logger.log(
              N.Error,
              `Failed to start the transport '${u.transport}': ${m}`
            ),
            (c = void 0),
            i.push(new cp(`${u.transport} failed: ${m}`, Ie[u.transport])),
            this._connectionState !== "Connecting")
          ) {
            const g = "Failed to select transport before stop() was called.";
            return this._logger.log(N.Debug, g), Promise.reject(new kt(g));
          }
        }
      }
    }
    return i.length > 0
      ? Promise.reject(
          new up(
            `Unable to connect to the server with any of the available transports. ${i.join(
              " "
            )}`,
            i
          )
        )
      : Promise.reject(
          new Error(
            "None of the transports supported by the client are supported by the server."
          )
        );
  }
  _constructTransport(t) {
    switch (t) {
      case Ie.WebSockets:
        if (!this._options.WebSocket)
          throw new Error("'WebSocket' is not supported in your environment.");
        return new Lp(
          this._httpClient,
          this._accessTokenFactory,
          this._logger,
          this._options.logMessageContent,
          this._options.WebSocket,
          this._options.headers || {}
        );
      case Ie.ServerSentEvents:
        if (!this._options.EventSource)
          throw new Error(
            "'EventSource' is not supported in your environment."
          );
        return new Rp(
          this._httpClient,
          this._httpClient._accessToken,
          this._logger,
          this._options
        );
      case Ie.LongPolling:
        return new Cc(this._httpClient, this._logger, this._options);
      default:
        throw new Error(`Unknown transport: ${t}.`);
    }
  }
  _startTransport(t, n) {
    return (
      (this.transport.onreceive = this.onreceive),
      this.features.reconnect
        ? (this.transport.onclose = async (r) => {
            let o = !1;
            if (this.features.reconnect)
              try {
                this.features.disconnected(),
                  await this.transport.connect(t, n),
                  await this.features.resend();
              } catch {
                o = !0;
              }
            else {
              this._stopConnection(r);
              return;
            }
            o && this._stopConnection(r);
          })
        : (this.transport.onclose = (r) => this._stopConnection(r)),
      this.transport.connect(t, n)
    );
  }
  _resolveTransportOrError(t, n, r, o) {
    const l = Ie[t.transport];
    if (l == null)
      return (
        this._logger.log(
          N.Debug,
          `Skipping transport '${t.transport}' because it is not supported by this client.`
        ),
        new Error(
          `Skipping transport '${t.transport}' because it is not supported by this client.`
        )
      );
    if (Ap(n, l))
      if (t.transferFormats.map((a) => Ge[a]).indexOf(r) >= 0) {
        if (
          (l === Ie.WebSockets && !this._options.WebSocket) ||
          (l === Ie.ServerSentEvents && !this._options.EventSource)
        )
          return (
            this._logger.log(
              N.Debug,
              `Skipping transport '${Ie[l]}' because it is not supported in your environment.'`
            ),
            new ip(`'${Ie[l]}' is not supported in your environment.`, l)
          );
        this._logger.log(N.Debug, `Selecting transport '${Ie[l]}'.`);
        try {
          return (
            (this.features.reconnect = l === Ie.WebSockets ? o : void 0),
            this._constructTransport(l)
          );
        } catch (a) {
          return a;
        }
      } else
        return (
          this._logger.log(
            N.Debug,
            `Skipping transport '${Ie[l]}' because it does not support the requested transfer format '${Ge[r]}'.`
          ),
          new Error(`'${Ie[l]}' does not support ${Ge[r]}.`)
        );
    else
      return (
        this._logger.log(
          N.Debug,
          `Skipping transport '${Ie[l]}' because it was disabled by the client.`
        ),
        new ap(`'${Ie[l]}' is disabled by the client.`, l)
      );
  }
  _isITransport(t) {
    return t && typeof t == "object" && "connect" in t;
  }
  _stopConnection(t) {
    if (
      (this._logger.log(
        N.Debug,
        `HttpConnection.stopConnection(${t}) called while in state ${this._connectionState}.`
      ),
      (this.transport = void 0),
      (t = this._stopError || t),
      (this._stopError = void 0),
      this._connectionState === "Disconnected")
    ) {
      this._logger.log(
        N.Debug,
        `Call to HttpConnection.stopConnection(${t}) was ignored because the connection is already in the disconnected state.`
      );
      return;
    }
    if (this._connectionState === "Connecting")
      throw (
        (this._logger.log(
          N.Warning,
          `Call to HttpConnection.stopConnection(${t}) was ignored because the connection is still in the connecting state.`
        ),
        new Error(
          `HttpConnection.stopConnection(${t}) was called while the connection is still in the connecting state.`
        ))
      );
    if (
      (this._connectionState === "Disconnecting" && this._stopPromiseResolver(),
      t
        ? this._logger.log(
            N.Error,
            `Connection disconnected with error '${t}'.`
          )
        : this._logger.log(N.Information, "Connection disconnected."),
      this._sendQueue &&
        (this._sendQueue.stop().catch((n) => {
          this._logger.log(
            N.Error,
            `TransportSendQueue.stop() threw error '${n}'.`
          );
        }),
        (this._sendQueue = void 0)),
      (this.connectionId = void 0),
      (this._connectionState = "Disconnected"),
      this._connectionStarted)
    ) {
      this._connectionStarted = !1;
      try {
        this.onclose && this.onclose(t);
      } catch (n) {
        this._logger.log(
          N.Error,
          `HttpConnection.onclose(${t}) threw error '${n}'.`
        );
      }
    }
  }
  _resolveUrl(t) {
    if (t.lastIndexOf("https://", 0) === 0 || t.lastIndexOf("http://", 0) === 0)
      return t;
    if (!we.isBrowser) throw new Error(`Cannot resolve '${t}'.`);
    const n = window.document.createElement("a");
    return (
      (n.href = t),
      this._logger.log(N.Information, `Normalizing '${t}' to '${n.href}'.`),
      n.href
    );
  }
  _resolveNegotiateUrl(t) {
    const n = new URL(t);
    n.pathname.endsWith("/")
      ? (n.pathname += "negotiate")
      : (n.pathname += "/negotiate");
    const r = new URLSearchParams(n.searchParams);
    return (
      r.has("negotiateVersion") ||
        r.append("negotiateVersion", this._negotiateVersion.toString()),
      r.has("useStatefulReconnect")
        ? r.get("useStatefulReconnect") === "true" &&
          (this._options._useStatefulReconnect = !0)
        : this._options._useStatefulReconnect === !0 &&
          r.append("useStatefulReconnect", "true"),
      (n.search = r.toString()),
      n.toString()
    );
  }
}
function Ap(e, t) {
  return !e || (t & e) !== 0;
}
class da {
  constructor(t) {
    (this._transport = t),
      (this._buffer = []),
      (this._executing = !0),
      (this._sendBufferedData = new $s()),
      (this._transportResult = new $s()),
      (this._sendLoopPromise = this._sendLoop());
  }
  send(t) {
    return (
      this._bufferData(t),
      this._transportResult || (this._transportResult = new $s()),
      this._transportResult.promise
    );
  }
  stop() {
    return (
      (this._executing = !1),
      this._sendBufferedData.resolve(),
      this._sendLoopPromise
    );
  }
  _bufferData(t) {
    if (this._buffer.length && typeof this._buffer[0] != typeof t)
      throw new Error(
        `Expected data to be of type ${typeof this
          ._buffer} but was of type ${typeof t}`
      );
    this._buffer.push(t), this._sendBufferedData.resolve();
  }
  async _sendLoop() {
    for (;;) {
      if ((await this._sendBufferedData.promise, !this._executing)) {
        this._transportResult &&
          this._transportResult.reject("Connection stopped.");
        break;
      }
      this._sendBufferedData = new $s();
      const t = this._transportResult;
      this._transportResult = void 0;
      const n =
        typeof this._buffer[0] == "string"
          ? this._buffer.join("")
          : da._concatBuffers(this._buffer);
      this._buffer.length = 0;
      try {
        await this._transport.send(n), t.resolve();
      } catch (r) {
        t.reject(r);
      }
    }
  }
  static _concatBuffers(t) {
    const n = t.map((l) => l.byteLength).reduce((l, i) => l + i),
      r = new Uint8Array(n);
    let o = 0;
    for (const l of t) r.set(new Uint8Array(l), o), (o += l.byteLength);
    return r.buffer;
  }
}
class $s {
  constructor() {
    this.promise = new Promise(
      (t, n) => ([this._resolver, this._rejecter] = [t, n])
    );
  }
  resolve() {
    this._resolver();
  }
  reject(t) {
    this._rejecter(t);
  }
}
const Op = "json";
class Up {
  constructor() {
    (this.name = Op), (this.version = 2), (this.transferFormat = Ge.Text);
  }
  parseMessages(t, n) {
    if (typeof t != "string")
      throw new Error(
        "Invalid input for JSON hub protocol. Expected a string."
      );
    if (!t) return [];
    n === null && (n = os.instance);
    const r = ct.parse(t),
      o = [];
    for (const l of r) {
      const i = JSON.parse(l);
      if (typeof i.type != "number") throw new Error("Invalid payload.");
      switch (i.type) {
        case ne.Invocation:
          this._isInvocationMessage(i);
          break;
        case ne.StreamItem:
          this._isStreamItemMessage(i);
          break;
        case ne.Completion:
          this._isCompletionMessage(i);
          break;
        case ne.Ping:
          break;
        case ne.Close:
          break;
        case ne.Ack:
          this._isAckMessage(i);
          break;
        case ne.Sequence:
          this._isSequenceMessage(i);
          break;
        default:
          n.log(
            N.Information,
            "Unknown message type '" + i.type + "' ignored."
          );
          continue;
      }
      o.push(i);
    }
    return o;
  }
  writeMessage(t) {
    return ct.write(JSON.stringify(t));
  }
  _isInvocationMessage(t) {
    this._assertNotEmptyString(
      t.target,
      "Invalid payload for Invocation message."
    ),
      t.invocationId !== void 0 &&
        this._assertNotEmptyString(
          t.invocationId,
          "Invalid payload for Invocation message."
        );
  }
  _isStreamItemMessage(t) {
    if (
      (this._assertNotEmptyString(
        t.invocationId,
        "Invalid payload for StreamItem message."
      ),
      t.item === void 0)
    )
      throw new Error("Invalid payload for StreamItem message.");
  }
  _isCompletionMessage(t) {
    if (t.result && t.error)
      throw new Error("Invalid payload for Completion message.");
    !t.result &&
      t.error &&
      this._assertNotEmptyString(
        t.error,
        "Invalid payload for Completion message."
      ),
      this._assertNotEmptyString(
        t.invocationId,
        "Invalid payload for Completion message."
      );
  }
  _isAckMessage(t) {
    if (typeof t.sequenceId != "number")
      throw new Error("Invalid SequenceId for Ack message.");
  }
  _isSequenceMessage(t) {
    if (typeof t.sequenceId != "number")
      throw new Error("Invalid SequenceId for Sequence message.");
  }
  _assertNotEmptyString(t, n) {
    if (typeof t != "string" || t === "") throw new Error(n);
  }
}
const $p = {
  trace: N.Trace,
  debug: N.Debug,
  info: N.Information,
  information: N.Information,
  warn: N.Warning,
  warning: N.Warning,
  error: N.Error,
  critical: N.Critical,
  none: N.None,
};
function zp(e) {
  const t = $p[e.toLowerCase()];
  if (typeof t < "u") return t;
  throw new Error(`Unknown log level: ${e}`);
}
class Fp {
  configureLogging(t) {
    if ((De.isRequired(t, "logging"), Bp(t))) this.logger = t;
    else if (typeof t == "string") {
      const n = zp(t);
      this.logger = new No(n);
    } else this.logger = new No(t);
    return this;
  }
  withUrl(t, n) {
    return (
      De.isRequired(t, "url"),
      De.isNotEmpty(t, "url"),
      (this.url = t),
      typeof n == "object"
        ? (this.httpConnectionOptions = { ...this.httpConnectionOptions, ...n })
        : (this.httpConnectionOptions = {
            ...this.httpConnectionOptions,
            transport: n,
          }),
      this
    );
  }
  withHubProtocol(t) {
    return De.isRequired(t, "protocol"), (this.protocol = t), this;
  }
  withAutomaticReconnect(t) {
    if (this.reconnectPolicy)
      throw new Error("A reconnectPolicy has already been set.");
    return (
      t
        ? Array.isArray(t)
          ? (this.reconnectPolicy = new kc(t))
          : (this.reconnectPolicy = t)
        : (this.reconnectPolicy = new kc()),
      this
    );
  }
  withServerTimeout(t) {
    return (
      De.isRequired(t, "milliseconds"),
      (this._serverTimeoutInMilliseconds = t),
      this
    );
  }
  withKeepAliveInterval(t) {
    return (
      De.isRequired(t, "milliseconds"),
      (this._keepAliveIntervalInMilliseconds = t),
      this
    );
  }
  withStatefulReconnect(t) {
    return (
      this.httpConnectionOptions === void 0 &&
        (this.httpConnectionOptions = {}),
      (this.httpConnectionOptions._useStatefulReconnect = !0),
      (this._statefulReconnectBufferSize = t == null ? void 0 : t.bufferSize),
      this
    );
  }
  build() {
    const t = this.httpConnectionOptions || {};
    if ((t.logger === void 0 && (t.logger = this.logger), !this.url))
      throw new Error(
        "The 'HubConnectionBuilder.withUrl' method must be called before building the connection."
      );
    const n = new Mp(this.url, t);
    return ua.create(
      n,
      this.logger || os.instance,
      this.protocol || new Up(),
      this.reconnectPolicy,
      this._serverTimeoutInMilliseconds,
      this._keepAliveIntervalInMilliseconds,
      this._statefulReconnectBufferSize
    );
  }
}
function Bp(e) {
  return e.log !== void 0;
}
class Hp {
  constructor() {
    Un(this, "connection", null);
    Un(this, "messageCallbacks", []);
    Un(this, "reconnectAttempts", 0);
    Un(this, "maxReconnectAttempts", 5);
    Un(this, "isIntentionallyClosed", !1);
  }
  connect() {
    if (this.connection && this.connection.state === de.Connected) {
      console.log("SignalR already connected");
      return;
    }
    try {
      const n = `${di().domain}/chatHub`;
      console.log("=== SignalR Connection ==="),
        console.log("URL:", n),
        (this.isIntentionallyClosed = !1),
        (this.connection = new Fp()
          .withUrl(n)
          .withAutomaticReconnect()
          .configureLogging(N.Information)
          .build()),
        this.connection.on("ReceiveMessage", (r) => {
          console.log("=== SignalR ReceiveMessage ==="),
            console.log("Message:", r),
            this.messageCallbacks.forEach((o) => {
              try {
                o(r);
              } catch (l) {
                console.error("Error in message callback:", l);
              }
            });
        }),
        this.connection.onclose((r) => {
          console.warn("SignalR connection closed:", r),
            !this.isIntentionallyClosed &&
              this.reconnectAttempts < this.maxReconnectAttempts &&
              (this.reconnectAttempts++,
              console.log(
                `Attempting to reconnect (${this.reconnectAttempts}/${this.maxReconnectAttempts})...`
              ),
              setTimeout(() => {
                this.connect();
              }, 3e3));
        }),
        this.connection
          .start()
          .then(() => {
            console.log("✅ SignalR connected successfully"),
              (this.reconnectAttempts = 0);
          })
          .catch((r) => {
            console.error("❌ SignalR connection failed:", r);
          });
    } catch (t) {
      throw (console.error("❌ SignalR initialization failed:", t), t);
    }
  }
  disconnect() {
    this.connection &&
      ((this.isIntentionallyClosed = !0),
      this.connection.stop(),
      (this.connection = null),
      console.log("SignalR disconnected"));
  }
  onMessage(t) {
    return (
      this.messageCallbacks.push(t),
      () => {
        this.messageCallbacks = this.messageCallbacks.filter((n) => n !== t);
      }
    );
  }
  async sendMessage() {
    try {
      const n = `${di().domain}/api/Message`;
      console.log("=== Send Message API ==="), console.log("URL:", n);
      const r = await fetch(n, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      if (!r.ok) throw new Error(`HTTP error! status: ${r.status}`);
      const o = await r.json();
      return console.log("Send Message Response:", o), o;
    } catch (t) {
      throw (console.error("Send Message failed:", t), t);
    }
  }
  isConnected() {
    return this.connection !== null && this.connection.state === de.Connected;
  }
  getReadyState() {
    var t;
    return ((t = this.connection) == null ? void 0 : t.state) ?? null;
  }
}
const yn = new Hp(),
  Gp = ["sub_content_add", "sub_content_update", "sub_contents_delete_by_GUID"],
  Wp = (e) => (!e || !e.Method ? !1 : Gp.includes(e.Method)),
  fa = async (e) => {
    if (Wp(e))
      try {
        console.log("=== Trigger WebSocket Broadcast ==="),
          console.log("Method:", e.Method),
          console.log("Response:", e),
          await yn.sendMessage(),
          console.log("✅ WebSocket broadcast triggered successfully");
      } catch (t) {
        console.error("❌ Failed to trigger WebSocket broadcast:", t);
      }
  },
  Vp = async (e, t) => {
    const n = { ValueAry: [e, t] };
    return (
      console.log("=== API Request Debug ==="),
      console.log("URL:", "/api/inspection/content_get_by_addTime"),
      console.log("Method:", "POST"),
      console.log("Request Data:", JSON.stringify(n, null, 2)),
      console.log("========================"),
      await je("/api/inspection/content_get_by_addTime", {
        method: "POST",
        body: n,
      })
    );
  },
  Dc = () => {
    const e = new Date(),
      t = new Date();
    t.setMonth(e.getMonth() - 1);
    const n = (r, o = !1) => {
      const l = r.getFullYear(),
        i = String(r.getMonth() + 1).padStart(2, "0"),
        a = String(r.getDate()).padStart(2, "0");
      return o ? `${l}-${i}-${a} 23:59:59` : `${l}-${i}-${a} 00:00:00`;
    };
    return [n(t), n(e, !0)];
  },
  Qp = (e, t = !1) => {
    const n = new Map();
    return (
      (t
        ? e
        : e.filter((o) =>
            !o.Sub_content || o.Sub_content.length === 0
              ? !0
              : !o.Sub_content.some((l) => l.STATE === "已鎖定")
          )
      ).forEach((o) => {
        var a;
        const l = `${o.CODE}-${o.SKDIACODE}`,
          i =
            ((a = o.Sub_content) == null
              ? void 0
              : a.reduce((c, u) => c + (parseInt(u.END_QTY) || 0), 0)) || 0;
        if (n.has(l)) {
          const c = n.get(l);
          (c.totalStartQty += parseInt(o.START_QTY) || 0),
            (c.totalReceivedQty += i),
            c.items.push(o);
        } else
          n.set(l, {
            CODE: o.CODE,
            SKDIACODE: o.SKDIACODE,
            CHT_NAME: o.CHT_NAME,
            NAME: o.NAME,
            BRD: o.BRD,
            PAKAGE: o.PAKAGE,
            totalStartQty: parseInt(o.START_QTY) || 0,
            totalReceivedQty: i,
            items: [o],
          });
      }),
      Array.from(n.values()).sort((o, l) => o.CODE.localeCompare(l.CODE))
    );
  },
  ha = async (e, t, n, r, o) => {
    const l = { Data: { Master_GUID: e, LOT: t, END_QTY: n, VAL: r, OP: o } };
    console.log("=== API Request Debug ==="),
      console.log("URL:", "/api/inspection/sub_content_add"),
      console.log("Method:", "POST"),
      console.log("Request Data:", JSON.stringify(l, null, 2)),
      console.log("========================");
    const i = await je("/api/inspection/sub_content_add", {
      method: "POST",
      body: l,
    });
    return await fa(i), i;
  },
  of = async (e, t) => {
    const n = { Data: [{ GUID: e, Master_GUID: t }] };
    console.log("=== Delete API Request Debug ==="),
      console.log("URL:", "/api/inspection/sub_contents_delete_by_GUID"),
      console.log("Method:", "POST"),
      console.log("Request Data:", JSON.stringify(n, null, 2)),
      console.log("================================");
    const r = await je("/api/inspection/sub_contents_delete_by_GUID", {
      method: "POST",
      body: n,
    });
    return await fa(r), r;
  },
  zr = async (e) => {
    const t = new Date(),
      n =
        t.getFullYear() +
        "-" +
        String(t.getMonth() + 1).padStart(2, "0") +
        "-" +
        String(t.getDate()).padStart(2, "0") +
        " " +
        String(t.getHours()).padStart(2, "0") +
        ":" +
        String(t.getMinutes()).padStart(2, "0") +
        ":" +
        String(t.getSeconds()).padStart(2, "0"),
      r = { Data: [{ ...e, OP_TIME: n }] };
    console.log("=== Update API Request Debug ==="),
      console.log("URL:", "/api/inspection/sub_content_update"),
      console.log("Method:", "POST"),
      console.log("Request Data:", JSON.stringify(r, null, 2)),
      console.log("================================");
    const o = await je("/api/inspection/sub_content_update", {
      method: "POST",
      body: r,
    });
    return await fa(o), o;
  },
  qp = async (e, t, n, r) => {
    const o = {
      Data: {
        GUID: e.GUID,
        Master_GUID: e.Master_GUID,
        PON: e.PON,
        IC_SN: e.IC_SN,
        CODE: e.CODE,
        NAME: e.NAME,
        BRD: e.BRD || "",
        SKDIACODE: e.SKDIACODE,
        BARCODE1: e.BARCODE1 || "",
        BARCODE2: e.BARCODE2 || "",
        START_QTY: e.START_QTY,
        ADD_TIME: e.ADD_TIME,
        SEQ: e.SEQ || "",
        FREE_CHARGE_FLAG: e.FREE_CHARGE_FLAG || "",
        API_RETURN_NOTE: e.API_RETURN_NOTE || "",
        NOTE: e.NOTE || "",
        CHT_NAME: e.CHT_NAME,
        PAKAGE: e.PAKAGE,
        END_QTY: e.END_QTY || e.START_QTY,
        textVision: { op_id: n, op_name: r, base64: t },
      },
    };
    return (
      console.log("=== Text Vision API Request Debug ==="),
      console.log("URL:", "/api/pcmpo/analyze_single"),
      console.log("Method:", "POST"),
      console.log("Request Data:", JSON.stringify(o, null, 2)),
      console.log("====================================="),
      await je("/api/pcmpo/analyze_single", { method: "POST", body: o })
    );
  },
  Kp = async (e) => {
    const t = { ValueAry: [e] };
    return (
      console.log("=== Get Inspection by IC_SN API Request Debug ==="),
      console.log("URL:", "/api/inspection/content_get_by_IC_SN"),
      console.log("Method:", "POST"),
      console.log("Request Data:", JSON.stringify(t, null, 2)),
      console.log("================================================"),
      await je("/api/inspection/content_get_by_IC_SN", {
        method: "POST",
        body: t,
      })
    );
  },
  Yp = async (e, t, n) => {
    const r = {
      Data: {
        GUID: e,
        Master_GUID: t.GUID,
        IC_SN: t.IC_SN,
        op_name: n.op_name,
        op_id: n.op_id,
        op_time: n.op_time,
        batch_num: n.batch_num,
        po_num: n.po_num,
        name: t.NAME,
        cht_name: t.CHT_NAME,
        qty: t.START_QTY,
        expirydate: n.expirydate,
        code: t.CODE,
      },
    };
    return (
      console.log("=== Update Text Vision API Request Debug ==="),
      console.log("URL:", "/api/pcmpo/update"),
      console.log("Method:", "POST"),
      console.log("Request Data:", JSON.stringify(r, null, 2)),
      console.log("==========================================="),
      await je("/api/pcmpo/update", { method: "POST", body: r })
    );
  },
  lf = async (e) => {
    const t = { ValueAry: [e] };
    return (
      console.log("=== Get by MasterGUID API Request Debug ==="),
      console.log("URL:", "/api/pcmpo/get_by_MasterGUID"),
      console.log("Method:", "POST"),
      console.log("Request Data:", JSON.stringify(t, null, 2)),
      console.log("====================================="),
      await je("/api/pcmpo/get_by_MasterGUID", { method: "POST", body: t })
    );
  },
  Jp = async (e) => {
    const t = { ValueAry: [e] };
    return (
      console.log("=== Get by GUID API Request Debug ==="),
      console.log("URL:", "/api/pcmpo/get_by_GUID"),
      console.log("Method:", "POST"),
      console.log("Request Data:", JSON.stringify(t, null, 2)),
      console.log("====================================="),
      await je("/api/pcmpo/get_by_GUID", { method: "POST", body: t })
    );
  },
  Xp = async (e) => {
    const t = { Data: e };
    return (
      console.log("=== Update Text Vision Data API Request Debug ==="),
      console.log("URL:", "/api/pcmpo/update"),
      console.log("Method:", "POST"),
      console.log("Request Data:", JSON.stringify(t, null, 2)),
      console.log("================================================"),
      await je("/api/pcmpo/update", { method: "POST", body: t })
    );
  },
  Tc = async (e) => {
    const t = { Value: e };
    return (
      console.log("=== Search by Barcode API Request Debug ==="),
      console.log("URL:", "/api/MED_page/serch_by_BarCode"),
      console.log("Method:", "POST"),
      console.log("Request Data:", JSON.stringify(t, null, 2)),
      console.log("=========================================="),
      await je("/api/MED_page/serch_by_BarCode", { method: "POST", body: t })
    );
  },
  Ic = async (e, t) => {
    const n = { ValueAry: [e, t] };
    return (
      console.log("=== Today Inspection Count API Request Debug ==="),
      console.log("URL:", "/api/inspection/content_get_by_sub_content_addTime"),
      console.log("Method:", "POST"),
      console.log("Request Data:", JSON.stringify(n, null, 2)),
      console.log("Date Range:", e, "to", t),
      console.log("=================================================="),
      await je("/api/inspection/content_get_by_sub_content_addTime", {
        method: "POST",
        body: n,
      })
    );
  },
  Zp = async (e, t, n) => {
    const r = new FormData();
    return (
      r.append("file", e),
      r.append("op_id", t),
      r.append("op_name", n),
      console.log("=== Excel Upload API Request Debug ==="),
      console.log("URL:", "/api/inspection/excel_upload_extra"),
      console.log("Method:", "POST (multipart/form-data)"),
      console.log("File Name:", e.name),
      console.log("File Size:", e.size, "bytes"),
      console.log("Operator ID:", t),
      console.log("Operator Name:", n),
      console.log("FormData entries:", Array.from(r.entries())),
      console.log("=========================================="),
      await ef("/api/inspection/excel_upload_extra", {
        method: "POST",
        body: r,
      })
    );
  },
  af = async () => {
    const e = {};
    return (
      console.log("=== Get Med Cloud API Request Debug ==="),
      console.log("URL:", "/api/med_page/get_med_cloud"),
      console.log("Method:", "POST"),
      console.log("Request Data:", JSON.stringify(e, null, 2)),
      console.log("=========================================="),
      await je("/api/med_page/get_med_cloud", { method: "POST", body: e })
    );
  },
  eg = async (e, t, n, r, o, l, i) => {
    const a = {
      Data: [
        {
          PON: e,
          IC_SN: t,
          CODE: n,
          NAME: r,
          BRD: o,
          SKDIACODE: l,
          START_QTY: i,
        },
      ],
    };
    return (
      console.log("=== Manual Create Inspection API Request Debug ==="),
      console.log("URL:", "/api/inspection/content_add"),
      console.log("Method:", "POST"),
      console.log("Request Data:", JSON.stringify(a, null, 2)),
      console.log("=================================================="),
      await je("/api/inspection/content_add", { method: "POST", body: a })
    );
  },
  tg = async (e) => {
    const t = { Data: [{ GUID: e }] };
    return (
      console.log("=== Delete Inspection Content API Request Debug ==="),
      console.log("URL:", "/api/inspection/contents_delete_by_GUID"),
      console.log("Method:", "POST"),
      console.log("Request Data:", JSON.stringify(t, null, 2)),
      console.log("=================================================="),
      await je("/api/inspection/contents_delete_by_GUID", {
        method: "POST",
        body: t,
      })
    );
  },
  ng = async (e) => {
    const t = { Data: e };
    return (
      console.log("=== Download Excel API Request Debug ==="),
      console.log("URL:", "/api/inspection/download_excle_by_content"),
      console.log("Method:", "POST"),
      console.log("Request Data:", t),
      console.log("=========================================="),
      await Zm("/api/inspection/download_excle_by_content", {
        method: "POST",
        body: t,
      })
    );
  },
  rg = async (e, t) => {
    const n = new FormData();
    return (
      n.append("file", e),
      n.append("CT", t),
      console.log("=== Upload Sub Content Excel API Request Debug ==="),
      console.log("URL:", "/api/inspection/excel_upload_sub_content_extra"),
      console.log("Method:", "POST (multipart/form-data)"),
      console.log("File Name:", e.name),
      console.log("File Size:", e.size, "bytes"),
      console.log("CT (Operator):", t),
      console.log("FormData entries:", Array.from(n.entries())),
      console.log("===================================================="),
      await ef("/api/inspection/excel_upload_sub_content_extra", {
        method: "POST",
        body: n,
      })
    );
  },
  sg = async (e) => (
    console.log("=== Barcode Scan API Request ==="),
    console.log("URL:", "/barcode"),
    console.log("Method:", "POST (multipart/form-data)"),
    console.log("=========================================="),
    await Xm("/barcode", { method: "POST", body: e })
  ),
  og = async (e, t) => {
    const n = {
      Data: [{ BARCODE: [e], CODE: t, BARCODE2: JSON.stringify([e]) }],
    };
    return (
      console.log("=== Add Med Clouds API Request ==="),
      console.log("URL:", "/api/med_page/add_med_clouds"),
      console.log("Method:", "POST"),
      console.log("Request Data:", JSON.stringify(n, null, 2)),
      console.log("==================================="),
      await je("/api/med_page/add_med_clouds", { method: "POST", body: n })
    );
  },
  lg = ({ data: e, loading: t, onRowClick: n }) => {
    const { t: r } = ms(),
      o = (i) => {
        if (!i) return "";
        try {
          const a = new Date(i),
            c = new Date();
          a.setHours(0, 0, 0, 0), c.setHours(0, 0, 0, 0);
          const u = a.getTime() - c.getTime(),
            h = Math.ceil(u / (1e3 * 60 * 60 * 24)),
            m = a
              .toLocaleDateString("zh-TW", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })
              .replace(/\//g, "/");
          return h === 0
            ? `${m} (${r("delivery.today")})`
            : h < 0
            ? `${m} (${r("delivery.overdue")} ${Math.abs(h)} ${r(
                "delivery.days"
              )})`
            : `${m} (${r("delivery.remaining")} ${h} ${r("delivery.days")})`;
        } catch (a) {
          return console.error("Error formatting arrival time:", a), i;
        }
      },
      l = (i) => {
        if (!i) return "text-gray-500";
        try {
          const a = new Date(i),
            c = new Date();
          a.setHours(0, 0, 0, 0), c.setHours(0, 0, 0, 0);
          const u = a.getTime() - c.getTime(),
            h = Math.ceil(u / (1e3 * 60 * 60 * 24));
          return h === 0
            ? "text-blue-600 font-medium"
            : h < 0
            ? "text-red-600 font-medium"
            : "text-green-600 font-medium";
        } catch {
          return "text-gray-500";
        }
      };
    return t
      ? s.jsxs("div", {
          className: "bg-white rounded-lg shadow-sm border p-8 text-center",
          children: [
            s.jsx("div", {
              className:
                "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4",
            }),
            s.jsx("p", {
              className: "text-gray-600",
              children: "載入驗收資料中...",
            }),
          ],
        })
      : e.length === 0
      ? s.jsxs("div", {
          className: "bg-white rounded-lg shadow-sm border p-8 text-center",
          children: [
            s.jsx(In, { className: "w-12 h-12 text-gray-400 mx-auto mb-4" }),
            s.jsx("p", {
              className: "text-gray-600",
              children: "查無驗收資料",
            }),
          ],
        })
      : s.jsx("div", {
          className:
            "bg-white rounded-lg shadow-sm border overflow-hidden mb-6",
          children: s.jsx("div", {
            className: "overflow-x-auto",
            children: s.jsxs("table", {
              className: "min-w-full divide-y divide-gray-200",
              children: [
                s.jsx("thead", {
                  className: "bg-gray-50",
                  children: s.jsxs("tr", {
                    children: [
                      s.jsx("th", {
                        className:
                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                        children: r("table.drug_code"),
                      }),
                      s.jsx("th", {
                        className:
                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                        children: r("table.item_number"),
                      }),
                      s.jsx("th", {
                        className:
                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                        children: r("table.drug_name"),
                      }),
                      s.jsx("th", {
                        className:
                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                        children: r("table.manufacturer"),
                      }),
                      s.jsx("th", {
                        className:
                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                        children: r("table.arrival_time"),
                      }),
                      s.jsx("th", {
                        className:
                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                        children: r("table.received_expected_qty"),
                      }),
                      s.jsx("th", {
                        className:
                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                        children: r("table.detail_count"),
                      }),
                      s.jsx("th", {
                        className:
                          "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",
                      }),
                    ],
                  }),
                }),
                s.jsx("tbody", {
                  className: "bg-white divide-y divide-gray-200",
                  children: e.map((i, a) =>
                    s.jsxs(
                      "tr",
                      {
                        className:
                          "hover:bg-gray-50 cursor-pointer transition-colors",
                        onClick: () => n(i),
                        children: [
                          s.jsx("td", {
                            className: "px-6 py-4 whitespace-nowrap",
                            children: s.jsx("span", {
                              className: "text-sm font-medium text-gray-900",
                              children: i.CODE,
                            }),
                          }),
                          s.jsx("td", {
                            className: "px-6 py-4 whitespace-nowrap",
                            children: s.jsx("span", {
                              className: "text-sm text-gray-900",
                              children: i.SKDIACODE,
                            }),
                          }),
                          s.jsx("td", {
                            className: "px-6 py-4",
                            children: s.jsxs("div", {
                              className: "text-sm text-gray-900",
                              children: [
                                s.jsx("div", {
                                  className: "font-medium",
                                  children: i.CHT_NAME || i.NAME,
                                }),
                                i.CHT_NAME &&
                                  i.NAME &&
                                  i.CHT_NAME !== i.NAME &&
                                  s.jsx("div", {
                                    className: "text-gray-500 text-xs mt-1",
                                    children: i.NAME,
                                  }),
                              ],
                            }),
                          }),
                          s.jsx("td", {
                            className: "px-6 py-4 whitespace-nowrap",
                            children: s.jsx("span", {
                              className: "text-sm text-gray-900",
                              children: i.BRD || "未指定",
                            }),
                          }),
                          s.jsx("td", {
                            className: "px-6 py-4 whitespace-nowrap",
                            children: s.jsx("div", {
                              className: "text-sm space-y-1",
                              children: i.items.map((c, u) =>
                                s.jsxs(
                                  "div",
                                  {
                                    className: `flex items-center ${l(
                                      c.DELIVERY_TIME
                                    )}`,
                                    children: [
                                      s.jsx(ss, {
                                        className: "w-4 h-4 mr-1 text-gray-400",
                                      }),
                                      o(c.DELIVERY_TIME),
                                    ],
                                  },
                                  u
                                )
                              ),
                            }),
                          }),
                          s.jsx("td", {
                            className: "px-6 py-4 whitespace-nowrap",
                            children: s.jsxs("div", {
                              className: "text-sm text-gray-900",
                              children: [
                                s.jsx("span", {
                                  className: "font-semibold text-green-600",
                                  children: i.totalReceivedQty.toLocaleString(),
                                }),
                                s.jsx("span", {
                                  className: "text-gray-400 mx-1",
                                  children: "/",
                                }),
                                s.jsx("span", {
                                  className: "font-semibold text-blue-600",
                                  children: i.totalStartQty.toLocaleString(),
                                }),
                                s.jsx("span", {
                                  className: "text-gray-500 ml-1",
                                  children: i.PAKAGE,
                                }),
                              ],
                            }),
                          }),
                          s.jsx("td", {
                            className: "px-6 py-4 whitespace-nowrap",
                            children: s.jsxs("span", {
                              className:
                                "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800",
                              children: [i.items.length, " 筆"],
                            }),
                          }),
                          s.jsx("td", {
                            className: "px-6 py-4 whitespace-nowrap text-right",
                            children: s.jsx(qd, {
                              className: "w-5 h-5 text-gray-400",
                            }),
                          }),
                        ],
                      },
                      `${i.CODE}-${i.SKDIACODE}`
                    )
                  ),
                }),
              ],
            }),
          }),
        });
  },
  ig = ({ isOpen: e, onClose: t, inspectionItem: n, onSuccess: r }) => {
    const [o, l] = y.useState({ lot: "", endQty: "", val: "" }),
      [i, a] = y.useState(!1),
      [c, u] = y.useState(null),
      [h, m] = y.useState(""),
      [g, x] = y.useState(null),
      [b, S] = y.useState(null),
      I = () =>
        n != null && n.Sub_content
          ? n.Sub_content.reduce((T, M) => T + (parseInt(M.END_QTY) || 0), 0)
          : 0,
      f = () => {
        const T = parseInt((n == null ? void 0 : n.START_QTY) || "0"),
          M = I();
        return Math.max(0, T - M);
      },
      d = () => {
        l({ lot: "", endQty: f().toString(), val: "" }),
          u(null),
          m(""),
          x(null),
          S(null);
      };
    ke.useEffect(() => {
      if (n) {
        const T = f();
        l((M) => ({ ...M, endQty: T.toString() }));
      }
    }, [n, I()]);
    const p = () => {
        d(), t();
      },
      v = (T) => {
        m((M) => M + T);
      },
      w = (T) => {
        h && (b !== null && g ? k() : S(parseFloat(h)), x(T), m(""));
      },
      k = () => {
        if (b !== null && g && h) {
          const T = parseFloat(h);
          let M = 0;
          switch (g) {
            case "+":
              M = b + T;
              break;
            case "-":
              M = b - T;
              break;
            case "*":
              M = b * T;
              break;
            case "/":
              M = b / T;
              break;
            default:
              return;
          }
          m(M.toString()), x(null), S(null);
        }
      },
      D = () => {
        m(""), x(null), S(null);
      },
      P = () => {
        h && l((T) => ({ ...T, endQty: h }));
      },
      U = async (T) => {
        if ((T.preventDefault(), !n)) return;
        const M = parseInt(o.endQty) || 0,
          C = f();
        if (M > C) {
          u(`實收數量不可超過剩餘可收數量 ${C}`);
          return;
        }
        const E = ot();
        if (!E) {
          u("無法取得操作人資訊");
          return;
        }
        a(!0), u(null);
        try {
          const z = await ha(n.GUID, o.lot, o.endQty, o.val, E);
          z.Code === 200 ? (r(), p()) : u(z.Result || "新增失敗");
        } catch (z) {
          console.error("Add sub content error:", z),
            u(z instanceof Error ? z.message : "系統錯誤，請稍後再試");
        } finally {
          a(!1);
        }
      };
    return !e || !n
      ? null
      : s.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
          children: s.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto",
            children: [
              s.jsxs("div", {
                className: "flex items-center justify-between p-6 border-b",
                children: [
                  s.jsxs("div", {
                    children: [
                      s.jsxs("h3", {
                        className:
                          "text-lg font-semibold text-gray-900 flex items-center",
                        children: [
                          s.jsx(dr, { className: "w-5 h-5 mr-2" }),
                          "新增子明細",
                        ],
                      }),
                      s.jsx("p", {
                        className: "text-sm text-gray-600 mt-1",
                        children: n.CHT_NAME || n.NAME,
                      }),
                    ],
                  }),
                  s.jsx("button", {
                    onClick: p,
                    className:
                      "text-gray-400 hover:text-gray-600 transition-colors",
                    children: s.jsx(Le, { className: "w-6 h-6" }),
                  }),
                ],
              }),
              s.jsxs("form", {
                onSubmit: U,
                className: "p-6",
                children: [
                  c &&
                    s.jsx("div", {
                      className:
                        "mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm",
                      children: c,
                    }),
                  s.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "批號 *",
                          }),
                          s.jsx("input", {
                            type: "text",
                            value: o.lot,
                            onChange: (T) => l({ ...o, lot: T.target.value }),
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                            required: !0,
                            placeholder: "請輸入批號",
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "效期 *",
                          }),
                          s.jsx("input", {
                            type: "date",
                            value: o.val,
                            onChange: (T) => l({ ...o, val: T.target.value }),
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                            required: !0,
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "實收數量 *",
                          }),
                          s.jsxs("div", {
                            className: "relative",
                            children: [
                              s.jsx("input", {
                                type: "number",
                                value: o.endQty,
                                onChange: (T) =>
                                  l({ ...o, endQty: T.target.value }),
                                className:
                                  "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                required: !0,
                                min: "0",
                                step: "1",
                                placeholder: "請輸入實收數量",
                              }),
                              s.jsx("div", {
                                className:
                                  "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",
                                children: s.jsx("span", {
                                  className: "text-gray-500 text-sm",
                                  children: n.PAKAGE,
                                }),
                              }),
                            ],
                          }),
                          s.jsxs("p", {
                            className: "text-xs text-gray-500 mt-1",
                            children: [
                              "應收數量: ",
                              n.START_QTY,
                              " ",
                              n.PAKAGE,
                            ],
                          }),
                          s.jsxs("p", {
                            className: "text-xs text-blue-600 mt-1",
                            children: [
                              "已實收: ",
                              I(),
                              " ",
                              n.PAKAGE,
                              " | 剩餘可收: ",
                              f(),
                              " ",
                              n.PAKAGE,
                            ],
                          }),
                          s.jsxs("div", {
                            className: "mt-3 p-3 bg-gray-50 rounded-lg",
                            children: [
                              s.jsxs("div", {
                                className:
                                  "flex items-center justify-between mb-2",
                                children: [
                                  s.jsx("span", {
                                    className:
                                      "text-sm font-medium text-gray-700",
                                    children: "小算盤",
                                  }),
                                  s.jsx("div", {
                                    className: "flex-1 mx-3",
                                    children: s.jsx("input", {
                                      type: "text",
                                      value: h,
                                      readOnly: !0,
                                      className:
                                        "w-full px-2 py-1 text-right border border-gray-300 rounded bg-white text-sm",
                                      placeholder: "0",
                                    }),
                                  }),
                                  s.jsx("button", {
                                    type: "button",
                                    onClick: P,
                                    disabled: !h,
                                    className:
                                      "px-2 py-1 bg-green-600 text-white rounded text-xs hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: "確認",
                                  }),
                                ],
                              }),
                              s.jsxs("div", {
                                className: "grid grid-cols-4 gap-1",
                                children: [
                                  s.jsx("button", {
                                    type: "button",
                                    onClick: D,
                                    className:
                                      "p-2 bg-red-500 text-white rounded text-sm hover:bg-red-600",
                                    children: "C",
                                  }),
                                  s.jsx("button", {
                                    type: "button",
                                    onClick: () => m((T) => T.slice(0, -1)),
                                    className:
                                      "p-2 bg-gray-300 text-gray-700 rounded text-sm hover:bg-gray-400",
                                    children: "⌫",
                                  }),
                                  s.jsx("button", {
                                    type: "button",
                                    onClick: () => w("/"),
                                    className:
                                      "p-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600",
                                    children: "÷",
                                  }),
                                  s.jsx("button", {
                                    type: "button",
                                    onClick: () => w("*"),
                                    className:
                                      "p-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600",
                                    children: "×",
                                  }),
                                  s.jsx("button", {
                                    type: "button",
                                    onClick: () => v("7"),
                                    className:
                                      "p-2 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50",
                                    children: "7",
                                  }),
                                  s.jsx("button", {
                                    type: "button",
                                    onClick: () => v("8"),
                                    className:
                                      "p-2 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50",
                                    children: "8",
                                  }),
                                  s.jsx("button", {
                                    type: "button",
                                    onClick: () => v("9"),
                                    className:
                                      "p-2 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50",
                                    children: "9",
                                  }),
                                  s.jsx("button", {
                                    type: "button",
                                    onClick: () => w("-"),
                                    className:
                                      "p-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600",
                                    children: "-",
                                  }),
                                  s.jsx("button", {
                                    type: "button",
                                    onClick: () => v("4"),
                                    className:
                                      "p-2 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50",
                                    children: "4",
                                  }),
                                  s.jsx("button", {
                                    type: "button",
                                    onClick: () => v("5"),
                                    className:
                                      "p-2 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50",
                                    children: "5",
                                  }),
                                  s.jsx("button", {
                                    type: "button",
                                    onClick: () => v("6"),
                                    className:
                                      "p-2 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50",
                                    children: "6",
                                  }),
                                  s.jsx("button", {
                                    type: "button",
                                    onClick: () => w("+"),
                                    className:
                                      "p-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600",
                                    children: "+",
                                  }),
                                  s.jsx("button", {
                                    type: "button",
                                    onClick: () => v("1"),
                                    className:
                                      "p-2 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50",
                                    children: "1",
                                  }),
                                  s.jsx("button", {
                                    type: "button",
                                    onClick: () => v("2"),
                                    className:
                                      "p-2 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50",
                                    children: "2",
                                  }),
                                  s.jsx("button", {
                                    type: "button",
                                    onClick: () => v("3"),
                                    className:
                                      "p-2 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50",
                                    children: "3",
                                  }),
                                  s.jsx("button", {
                                    type: "button",
                                    onClick: k,
                                    className:
                                      "p-2 bg-green-500 text-white rounded text-sm hover:bg-green-600 row-span-2",
                                    children: "=",
                                  }),
                                  s.jsx("button", {
                                    type: "button",
                                    onClick: () => v("0"),
                                    className:
                                      "p-2 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50 col-span-2",
                                    children: "0",
                                  }),
                                  s.jsx("button", {
                                    type: "button",
                                    onClick: () => v("."),
                                    className:
                                      "p-2 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50",
                                    children: ".",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "flex gap-3 mt-6",
                    children: [
                      s.jsx("button", {
                        type: "button",
                        onClick: p,
                        className:
                          "flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",
                        disabled: i,
                        children: "取消",
                      }),
                      s.jsx("button", {
                        type: "submit",
                        disabled: i,
                        className:
                          "flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center",
                        children: i
                          ? s.jsxs(s.Fragment, {
                              children: [
                                s.jsx(ce, { size: "small", className: "mr-2" }),
                                "新增中...",
                              ],
                            })
                          : "新增",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
  },
  ag = ({ isOpen: e, onClose: t, onConfirm: n, subContentData: r }) => {
    const [o, l] = y.useState(!1),
      [i, a] = y.useState(null),
      c = async () => {
        if (r) {
          l(!0), a(null);
          try {
            const u = await of(r.subContentGuid, r.masterGuid);
            console.log("Response Data", u),
              u.Code === 200 ? n() : a(u.Result || "刪除失敗");
          } catch (u) {
            console.error("Delete sub content error:", u),
              a(u instanceof Error ? u.message : "系統錯誤，請稍後再試");
          } finally {
            l(!1);
          }
        }
      };
    return !e || !r
      ? null
      : s.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
          children: s.jsxs("div", {
            className: "bg-white rounded-lg shadow-xl max-w-md w-full",
            children: [
              s.jsxs("div", {
                className: "flex items-center justify-between p-6 border-b",
                children: [
                  s.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      s.jsx("div", {
                        className:
                          "flex-shrink-0 w-10 h-10 mx-auto bg-red-100 rounded-full flex items-center justify-center",
                        children: s.jsx(Vd, {
                          className: "w-6 h-6 text-red-600",
                        }),
                      }),
                      s.jsx("div", {
                        className: "ml-4",
                        children: s.jsx("h3", {
                          className: "text-lg font-semibold text-gray-900",
                          children: "確認刪除",
                        }),
                      }),
                    ],
                  }),
                  s.jsx("button", {
                    onClick: t,
                    className:
                      "text-gray-400 hover:text-gray-600 transition-colors",
                    disabled: o,
                    children: s.jsx(Le, { className: "w-6 h-6" }),
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "p-6",
                children: [
                  i &&
                    s.jsx("div", {
                      className:
                        "mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm",
                      children: i,
                    }),
                  s.jsxs("div", {
                    className: "mb-6",
                    children: [
                      s.jsx("p", {
                        className: "text-sm text-gray-600 mb-4",
                        children: "您確定要刪除以下子明細嗎？此操作無法復原。",
                      }),
                      s.jsxs("div", {
                        className: "bg-gray-50 rounded-lg p-4 space-y-2",
                        children: [
                          s.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              s.jsx("span", {
                                className: "text-sm text-gray-500",
                                children: "藥品名稱:",
                              }),
                              s.jsx("span", {
                                className: "text-sm font-medium text-gray-900",
                                children: r.itemName,
                              }),
                            ],
                          }),
                          s.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              s.jsx("span", {
                                className: "text-sm text-gray-500",
                                children: "批號:",
                              }),
                              s.jsx("span", {
                                className: "text-sm font-medium text-gray-900",
                                children: r.lot,
                              }),
                            ],
                          }),
                          s.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              s.jsx("span", {
                                className: "text-sm text-gray-500",
                                children: "實收數量:",
                              }),
                              s.jsx("span", {
                                className: "text-sm font-medium text-gray-900",
                                children: r.qty,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "flex gap-3",
                    children: [
                      s.jsx("button", {
                        type: "button",
                        onClick: t,
                        className:
                          "flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",
                        disabled: o,
                        children: "取消",
                      }),
                      s.jsx("button", {
                        onClick: c,
                        disabled: o,
                        className:
                          "flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center",
                        children: o
                          ? s.jsxs(s.Fragment, {
                              children: [
                                s.jsx(ce, { size: "small", className: "mr-2" }),
                                "刪除中...",
                              ],
                            })
                          : s.jsxs(s.Fragment, {
                              children: [
                                s.jsx(Pn, { className: "w-4 h-4 mr-2" }),
                                "確認刪除",
                              ],
                            }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
  },
  cg = ({
    isOpen: e,
    onClose: t,
    subContentData: n,
    onSuccess: r,
    inspectionItem: o,
  }) => {
    const [l, i] = y.useState({ lot: "", endQty: "", val: "" }),
      [a, c] = y.useState(!1),
      [u, h] = y.useState(null),
      m = () =>
        o != null && o.Sub_content
          ? o.Sub_content.reduce(
              (I, f) =>
                f.GUID === (n == null ? void 0 : n.GUID)
                  ? I
                  : I + (parseInt(f.END_QTY) || 0),
              0
            )
          : 0,
      g = () => {
        if (!o) return 0;
        const I = parseInt(o.START_QTY || "0"),
          f = m();
        return Math.max(0, I - f);
      };
    y.useEffect(() => {
      if (n) {
        let I = "";
        if (n.VAL)
          try {
            I = new Date(n.VAL).toISOString().split("T")[0];
          } catch {
            console.warn("Invalid date format:", n.VAL);
          }
        i({ lot: n.LOT || "", endQty: n.END_QTY || "", val: I });
      }
    }, [n]);
    const x = () => {
        i({ lot: "", endQty: "", val: "" }), h(null);
      },
      b = () => {
        x(), t();
      },
      S = async (I) => {
        if ((I.preventDefault(), !n)) return;
        const f = parseInt(l.endQty) || 0,
          d = g();
        if (f > d) {
          h(`實收數量不可超過剩餘可收數量 ${d}`);
          return;
        }
        const p = ot();
        if (!p) {
          h("無法取得操作人資訊");
          return;
        }
        c(!0), h(null);
        try {
          const v = l.val ? `${l.val} 00:00:00` : "",
            w = { ...n, LOT: l.lot, END_QTY: l.endQty, VAL: v, OP: p },
            k = await zr(w);
          console.log("Response Data", k),
            k.Code === 200 ? (r(), b()) : h(k.Result || "更新失敗");
        } catch (v) {
          console.error("Update sub content error:", v),
            h(v instanceof Error ? v.message : "系統錯誤，請稍後再試");
        } finally {
          c(!1);
        }
      };
    return !e || !n
      ? null
      : s.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
          children: s.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto",
            children: [
              s.jsxs("div", {
                className: "flex items-center justify-between p-6 border-b",
                children: [
                  s.jsxs("div", {
                    children: [
                      s.jsxs("h3", {
                        className:
                          "text-lg font-semibold text-gray-900 flex items-center",
                        children: [
                          s.jsx(la, { className: "w-5 h-5 mr-2" }),
                          "編輯子明細",
                        ],
                      }),
                      s.jsx("p", {
                        className: "text-sm text-gray-600 mt-1",
                        children: n.CHT_NAME || n.NAME,
                      }),
                    ],
                  }),
                  s.jsx("button", {
                    onClick: b,
                    className:
                      "text-gray-400 hover:text-gray-600 transition-colors",
                    children: s.jsx(Le, { className: "w-6 h-6" }),
                  }),
                ],
              }),
              s.jsxs("form", {
                onSubmit: S,
                className: "p-6",
                children: [
                  u &&
                    s.jsx("div", {
                      className:
                        "mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm",
                      children: u,
                    }),
                  s.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "批號 *",
                          }),
                          s.jsx("input", {
                            type: "text",
                            value: l.lot,
                            onChange: (I) => i({ ...l, lot: I.target.value }),
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                            required: !0,
                            placeholder: "請輸入批號",
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "效期 *",
                          }),
                          s.jsx("input", {
                            type: "date",
                            value: l.val,
                            onChange: (I) => i({ ...l, val: I.target.value }),
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                            required: !0,
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "實收數量 *",
                          }),
                          s.jsxs("div", {
                            className: "relative",
                            children: [
                              s.jsx("input", {
                                type: "number",
                                value: l.endQty,
                                onChange: (I) =>
                                  i({ ...l, endQty: I.target.value }),
                                className:
                                  "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                required: !0,
                                min: "0",
                                step: "1",
                                placeholder: "請輸入實收數量",
                              }),
                              s.jsx("div", {
                                className:
                                  "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",
                                children: s.jsx("span", {
                                  className: "text-gray-500 text-sm",
                                  children: n.PAKAGE,
                                }),
                              }),
                            ],
                          }),
                          o &&
                            s.jsxs(s.Fragment, {
                              children: [
                                s.jsxs("p", {
                                  className: "text-xs text-gray-500 mt-1",
                                  children: [
                                    "應收數量: ",
                                    o.START_QTY,
                                    " ",
                                    o.PAKAGE,
                                  ],
                                }),
                                s.jsxs("p", {
                                  className: "text-xs text-blue-600 mt-1",
                                  children: [
                                    "其他已實收: ",
                                    m(),
                                    " ",
                                    o.PAKAGE,
                                    " | 剩餘可收: ",
                                    g(),
                                    " ",
                                    o.PAKAGE,
                                  ],
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "flex gap-3 mt-6",
                    children: [
                      s.jsx("button", {
                        type: "button",
                        onClick: b,
                        className:
                          "flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",
                        disabled: a,
                        children: "取消",
                      }),
                      s.jsx("button", {
                        type: "submit",
                        disabled: a,
                        className:
                          "flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center",
                        children: a
                          ? s.jsxs(s.Fragment, {
                              children: [
                                s.jsx(ce, { size: "small", className: "mr-2" }),
                                "更新中...",
                              ],
                            })
                          : "更新",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
  },
  ug = ({ isOpen: e, onClose: t, result: n, onConfirmSubmit: r }) => {
    const [o, l] = ke.useState(!1),
      [i, a] = ke.useState(null);
    if (!e || !n) return null;
    const c = (h) => {
        if (!h) return "";
        try {
          return new Date(h)
            .toLocaleDateString("zh-TW", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })
            .replace(/\//g, "/");
        } catch {
          return h;
        }
      },
      u = async () => {
        if (!n) return;
        const h = ot();
        if (!h) {
          a("無法取得操作人資訊");
          return;
        }
        l(!0), a(null);
        try {
          console.log("=== Check API Request Debug ===");
          const m = { ValueAry: [n.batch_id, n.GUID] };
          console.log("Check Request Data:", JSON.stringify(m, null, 2));
          const g = await je("/api/pcmpo/check", { method: "POST", body: m });
          if (
            (console.log("Check Response:", JSON.stringify(g, null, 2)),
            g.Code !== 200)
          ) {
            a(g.Result || "確認檢查失敗");
            return;
          }
          console.log("=== Add Sub Content API Request Debug ===");
          const x = n.expirydate ? `${n.expirydate} 00:00:00` : "",
            b = await ha(n.Master_GUID, n.batch_num, n.qty, x, h);
          console.log("Add Sub Content Response:", JSON.stringify(b, null, 2)),
            b.Code === 200
              ? (console.log("✅ 確認送出成功"), r && r(), t())
              : a(b.Result || "新增子明細失敗");
        } catch (m) {
          console.error("Confirm submit error:", m),
            console.log("❌ 確認送出失敗"),
            a(m instanceof Error ? m.message : "系統錯誤，請稍後再試");
        } finally {
          l(!1);
        }
      };
    return s.jsx("div", {
      className:
        "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
      children: s.jsxs("div", {
        className:
          "bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden",
        children: [
          s.jsxs("div", {
            className:
              "flex items-center justify-between p-6 border-b bg-gray-50",
            children: [
              s.jsxs("div", {
                children: [
                  s.jsx("h3", {
                    className:
                      "text-lg font-semibold text-gray-900 flex items-center",
                    children: "出貨單辨識結果",
                  }),
                  s.jsxs("div", {
                    className: "flex items-center mt-1",
                    children: [
                      s.jsx(Dt, { className: "w-4 h-4 text-green-500 mr-1" }),
                      s.jsx("span", {
                        className: "text-sm text-gray-600",
                        children: n.Result,
                      }),
                    ],
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  s.jsx("button", {
                    onClick: u,
                    disabled: o,
                    className:
                      "px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center",
                    children: o
                      ? s.jsxs(s.Fragment, {
                          children: [
                            s.jsx(ce, { size: "small", className: "mr-2" }),
                            "處理中...",
                          ],
                        })
                      : s.jsxs(s.Fragment, {
                          children: [
                            s.jsx(Jd, { className: "w-4 h-4 mr-2" }),
                            "確認送出",
                          ],
                        }),
                  }),
                  s.jsx("button", {
                    onClick: t,
                    className:
                      "text-gray-400 hover:text-gray-600 transition-colors",
                    children: s.jsx(Le, { className: "w-6 h-6" }),
                  }),
                ],
              }),
            ],
          }),
          s.jsx("div", {
            className: "p-6 overflow-y-auto max-h-[calc(90vh-120px)]",
            children: s.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
              children: [
                s.jsxs("div", {
                  children: [
                    s.jsx("h4", {
                      className: "text-md font-medium text-gray-900 mb-3",
                      children: "原始圖片",
                    }),
                    n.base64
                      ? s.jsx("div", {
                          className: "border rounded-lg overflow-hidden",
                          children: s.jsx("img", {
                            src: n.base64.startsWith("data:")
                              ? n.base64
                              : `data:image/jpeg;base64,${n.base64}`,
                            alt: "出貨單",
                            className: "w-full h-auto max-h-96 object-contain",
                          }),
                        })
                      : s.jsxs("div", {
                          className:
                            "border-2 border-dashed border-gray-300 rounded-lg p-8 text-center",
                          children: [
                            s.jsx(zo, {
                              className: "w-12 h-12 text-gray-400 mx-auto mb-2",
                            }),
                            s.jsx("p", {
                              className: "text-gray-500",
                              children: "無圖片資料",
                            }),
                          ],
                        }),
                  ],
                }),
                s.jsx("div", {
                  className: "space-y-6",
                  children: s.jsxs("div", {
                    children: [
                      s.jsx("h4", {
                        className: "text-md font-medium text-gray-900 mb-3",
                        children: "辨識資訊",
                      }),
                      s.jsxs("div", {
                        className: "bg-blue-50 rounded-lg p-4 mb-4",
                        children: [
                          s.jsxs("h5", {
                            className:
                              "text-sm font-medium text-blue-800 mb-2 flex items-center",
                            children: [
                              s.jsx(In, { className: "w-4 h-4 mr-1" }),
                              "藥品資訊",
                            ],
                          }),
                          s.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              s.jsxs("div", {
                                children: [
                                  s.jsx("span", {
                                    className: "text-sm text-blue-600",
                                    children: "藥名:",
                                  }),
                                  s.jsx("span", {
                                    className:
                                      "text-sm font-medium text-blue-900 ml-2",
                                    children: n.name,
                                  }),
                                ],
                              }),
                              s.jsxs("div", {
                                children: [
                                  s.jsx("span", {
                                    className: "text-sm text-blue-600",
                                    children: "中文名:",
                                  }),
                                  s.jsx("span", {
                                    className:
                                      "text-sm font-medium text-blue-900 ml-2",
                                    children: n.cht_name,
                                  }),
                                ],
                              }),
                              s.jsxs("div", {
                                children: [
                                  s.jsx("span", {
                                    className: "text-sm text-blue-600",
                                    children: "藥品碼:",
                                  }),
                                  s.jsx("span", {
                                    className:
                                      "text-sm font-medium text-blue-900 ml-2",
                                    children: n.code,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className:
                          "bg-green-50 rounded-lg p-4 mb-4 border-2 border-green-200",
                        children: [
                          s.jsx("h5", {
                            className:
                              "text-sm font-medium text-green-800 mb-2",
                            children: "數量",
                          }),
                          s.jsx("div", {
                            className: "text-center",
                            children: s.jsx("div", {
                              className:
                                "text-3xl font-bold text-green-700 mb-1",
                              children: n.qty,
                            }),
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: "bg-yellow-50 rounded-lg p-4 mb-4",
                        children: [
                          s.jsx("h5", {
                            className:
                              "text-sm font-medium text-yellow-800 mb-2",
                            children: "批號",
                          }),
                          s.jsx("div", {
                            className: "text-center",
                            children: s.jsx("div", {
                              className: "text-2xl font-bold text-yellow-900",
                              children: n.batch_num,
                            }),
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: "bg-purple-50 rounded-lg p-4 mb-4",
                        children: [
                          s.jsx("h5", {
                            className:
                              "text-sm font-medium text-purple-800 mb-2",
                            children: "效期",
                          }),
                          s.jsx("div", {
                            className: "text-center",
                            children: s.jsx("div", {
                              className: "text-2xl font-bold text-purple-900",
                              children: c(n.expirydate),
                            }),
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: "bg-gray-50 rounded-lg p-4",
                        children: [
                          s.jsx("h5", {
                            className: "text-sm font-medium text-gray-800 mb-2",
                            children: "其他資訊",
                          }),
                          s.jsxs("div", {
                            className: "space-y-2 text-sm",
                            children: [
                              s.jsxs("div", {
                                className: "flex justify-between",
                                children: [
                                  s.jsx("span", {
                                    className: "text-gray-600",
                                    children: "請購單號:",
                                  }),
                                  s.jsx("span", {
                                    className: "font-medium text-gray-900",
                                    children: n.po_num,
                                  }),
                                ],
                              }),
                              s.jsxs("div", {
                                className: "flex justify-between",
                                children: [
                                  s.jsx("span", {
                                    className: "text-gray-600",
                                    children: "操作人員:",
                                  }),
                                  s.jsx("span", {
                                    className: "font-medium text-gray-900",
                                    children: n.op_name,
                                  }),
                                ],
                              }),
                              s.jsxs("div", {
                                className: "flex justify-between",
                                children: [
                                  s.jsx("span", {
                                    className: "text-gray-600",
                                    children: "辨識時間:",
                                  }),
                                  s.jsx("span", {
                                    className: "font-medium text-gray-900",
                                    children: n.op_time,
                                  }),
                                ],
                              }),
                              s.jsxs("div", {
                                className: "flex justify-between",
                                children: [
                                  s.jsx("span", {
                                    className: "text-gray-600",
                                    children: "確認狀態:",
                                  }),
                                  s.jsx("span", {
                                    className: `font-medium ${
                                      n.check === "未確認"
                                        ? "text-yellow-600"
                                        : "text-green-600"
                                    }`,
                                    children: n.check,
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
              ],
            }),
          }),
          i &&
            s.jsxs("div", {
              className:
                "mx-6 mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm flex items-center",
              children: [
                s.jsx(Dt, { className: "w-4 h-4 mr-2 flex-shrink-0" }),
                i,
              ],
            }),
          s.jsx("div", {
            className: "flex justify-end p-6 border-t bg-gray-50",
            children: s.jsx("button", {
              onClick: t,
              className:
                "px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
              children: "關閉",
            }),
          }),
        ],
      }),
    });
  },
  dg = ({ isOpen: e, onClose: t, inspectionItem: n, onDataUpdate: r }) => {
    const [o, l] = y.useState(null),
      [i, a] = y.useState(null),
      [c, u] = y.useState(!1),
      [h, m] = y.useState(null),
      [g, x] = y.useState(null),
      [b, S] = y.useState(!1),
      I = y.useRef(null),
      f = () => {
        l(null), a(null), m(null), x(null), I.current && (I.current.value = "");
      },
      d = () => {
        f(), t();
      },
      p = (k) => {
        var U;
        const D = (U = k.target.files) == null ? void 0 : U[0];
        if (!D) return;
        if (!D.type.startsWith("image/")) {
          m("請選擇圖片檔案");
          return;
        }
        if (D.size > 10 * 1024 * 1024) {
          m("檔案大小不可超過 10MB");
          return;
        }
        l(D), m(null);
        const P = new FileReader();
        (P.onload = (T) => {
          var M;
          a((M = T.target) == null ? void 0 : M.result);
        }),
          P.readAsDataURL(D);
      },
      v = (k) =>
        new Promise((D, P) => {
          const U = new FileReader();
          (U.onload = () => {
            const M = U.result.split(",")[1];
            D(M);
          }),
            (U.onerror = P),
            U.readAsDataURL(k);
        }),
      w = async () => {
        if (!o || !n) return;
        const k = aa(),
          D = ot();
        if (!k || !D) {
          m("無法取得操作人資訊");
          return;
        }
        u(!0), m(null);
        try {
          const P = await v(o);
          console.log("=== Upload Shipping Document Debug ==="),
            console.log("Selected file:", o.name, o.size, "bytes"),
            console.log("Base64 length:", P.length),
            console.log("Operator ID:", k),
            console.log("Operator Name:", D),
            console.log("Inspection Item:", n);
          const U = await qp(n, P, k, D);
          console.log("=== API Response Debug ==="),
            console.log("Response Code:", U.Code),
            console.log("Response Result:", U.Result),
            console.log("Response Data:", U.Data),
            console.log("Full Response:", JSON.stringify(U, null, 2)),
            console.log("====================================="),
            U.Code === 200 && U.Data && U.Data.length > 0
              ? (console.log("✅ Analysis successful, opening result modal"),
                x(U.Data[0]),
                S(!0))
              : (console.log("❌ Analysis failed or no data returned"),
                m(U.Result || "分析失敗"));
        } catch (P) {
          console.error("Upload and analyze error:", P),
            console.log("❌ Exception occurred during upload/analysis"),
            m(P instanceof Error ? P.message : "系統錯誤，請稍後再試");
        } finally {
          u(!1);
        }
      };
    return !e || !n
      ? null
      : s.jsxs(s.Fragment, {
          children: [
            s.jsx("div", {
              className:
                "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
              children: s.jsxs("div", {
                className:
                  "bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto",
                children: [
                  s.jsxs("div", {
                    className: "flex items-center justify-between p-6 border-b",
                    children: [
                      s.jsxs("div", {
                        children: [
                          s.jsxs("h3", {
                            className:
                              "text-lg font-semibold text-gray-900 flex items-center",
                            children: [
                              s.jsx(fr, { className: "w-5 h-5 mr-2" }),
                              "上傳出貨單",
                            ],
                          }),
                          s.jsx("p", {
                            className: "text-sm text-gray-600 mt-1",
                            children: n.CHT_NAME || n.NAME,
                          }),
                        ],
                      }),
                      s.jsx("button", {
                        onClick: d,
                        className:
                          "text-gray-400 hover:text-gray-600 transition-colors",
                        children: s.jsx(Le, { className: "w-6 h-6" }),
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "p-6",
                    children: [
                      h &&
                        s.jsxs("div", {
                          className:
                            "mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm flex items-center",
                          children: [
                            s.jsx(it, {
                              className: "w-4 h-4 mr-2 flex-shrink-0",
                            }),
                            h,
                          ],
                        }),
                      s.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          s.jsxs("div", {
                            children: [
                              s.jsx("label", {
                                className:
                                  "block text-sm font-medium text-gray-700 mb-2",
                                children: "選擇圖片檔案",
                              }),
                              s.jsxs("div", {
                                className:
                                  "border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors cursor-pointer",
                                onClick: () => {
                                  var k;
                                  return (k = I.current) == null
                                    ? void 0
                                    : k.click();
                                },
                                children: [
                                  s.jsx("input", {
                                    ref: I,
                                    type: "file",
                                    accept: "image/*",
                                    onChange: p,
                                    className: "hidden",
                                  }),
                                  i
                                    ? s.jsxs("div", {
                                        className: "space-y-2",
                                        children: [
                                          s.jsx("img", {
                                            src: i,
                                            alt: "預覽",
                                            className:
                                              "max-w-full max-h-48 mx-auto rounded-lg shadow-sm",
                                          }),
                                          s.jsx("p", {
                                            className: "text-sm text-gray-600",
                                            children:
                                              o == null ? void 0 : o.name,
                                          }),
                                          s.jsx("p", {
                                            className: "text-xs text-gray-500",
                                            children: "點擊重新選擇檔案",
                                          }),
                                        ],
                                      })
                                    : s.jsxs("div", {
                                        className: "space-y-2",
                                        children: [
                                          s.jsx(Yd, {
                                            className:
                                              "w-12 h-12 text-gray-400 mx-auto",
                                          }),
                                          s.jsxs("div", {
                                            children: [
                                              s.jsx("p", {
                                                className:
                                                  "text-sm text-gray-600",
                                                children: "點擊選擇圖片檔案",
                                              }),
                                              s.jsx("p", {
                                                className:
                                                  "text-xs text-gray-500",
                                                children:
                                                  "支援 JPG, PNG, GIF 等格式，檔案大小限制 10MB",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                ],
                              }),
                            ],
                          }),
                          s.jsxs("div", {
                            className: "bg-gray-50 rounded-lg p-4",
                            children: [
                              s.jsxs("h4", {
                                className:
                                  "text-sm font-medium text-gray-700 mb-2 flex items-center",
                                children: [
                                  s.jsx(zo, { className: "w-4 h-4 mr-1" }),
                                  "驗收單資訊",
                                ],
                              }),
                              s.jsxs("div", {
                                className: "space-y-1 text-sm text-gray-600",
                                children: [
                                  s.jsxs("div", {
                                    children: ["驗收單號: ", n.IC_SN],
                                  }),
                                  s.jsxs("div", {
                                    children: ["藥品碼: ", n.CODE],
                                  }),
                                  s.jsxs("div", {
                                    children: ["料號: ", n.SKDIACODE],
                                  }),
                                  s.jsxs("div", {
                                    children: [
                                      "應收數量: ",
                                      n.START_QTY,
                                      " ",
                                      n.PAKAGE,
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: "flex gap-3 mt-6",
                        children: [
                          s.jsx("button", {
                            type: "button",
                            onClick: d,
                            className:
                              "flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",
                            disabled: c,
                            children: "取消",
                          }),
                          s.jsx("button", {
                            onClick: w,
                            disabled: c || !o,
                            className:
                              "flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center",
                            children: c
                              ? s.jsxs(s.Fragment, {
                                  children: [
                                    s.jsx(ce, {
                                      size: "small",
                                      className: "mr-2",
                                    }),
                                    "分析中...",
                                  ],
                                })
                              : s.jsxs(s.Fragment, {
                                  children: [
                                    s.jsx(fr, { className: "w-4 h-4 mr-2" }),
                                    "上傳並分析",
                                  ],
                                }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            s.jsx(ug, {
              isOpen: b,
              onClose: () => {
                S(!1), x(null), d();
              },
              result: g,
              onConfirmSubmit: () => {
                r && r(), S(!1), x(null), d();
              },
            }),
          ],
        });
  },
  fg = ({ isOpen: e, onClose: t, onConfirm: n, inspectionContent: r }) => {
    const [o, l] = y.useState(!1),
      [i, a] = y.useState(null),
      c = async () => {
        if (r) {
          l(!0), a(null);
          try {
            const u = await tg(r.GUID);
            u.Code === 200 ? n() : a(u.Result || "刪除失敗");
          } catch (u) {
            console.error("Delete inspection content error:", u),
              a(u instanceof Error ? u.message : "系統錯誤，請稍後再試");
          } finally {
            l(!1);
          }
        }
      };
    return !e || !r
      ? null
      : s.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
          children: s.jsxs("div", {
            className: "bg-white rounded-lg shadow-xl max-w-md w-full",
            children: [
              s.jsxs("div", {
                className: "flex items-center justify-between p-6 border-b",
                children: [
                  s.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      s.jsx("div", {
                        className:
                          "flex-shrink-0 w-10 h-10 mx-auto bg-red-100 rounded-full flex items-center justify-center",
                        children: s.jsx(Vd, {
                          className: "w-6 h-6 text-red-600",
                        }),
                      }),
                      s.jsx("div", {
                        className: "ml-4",
                        children: s.jsx("h3", {
                          className: "text-lg font-semibold text-gray-900",
                          children: "確認刪除驗收資料",
                        }),
                      }),
                    ],
                  }),
                  s.jsx("button", {
                    onClick: t,
                    className:
                      "text-gray-400 hover:text-gray-600 transition-colors",
                    disabled: o,
                    children: s.jsx(Le, { className: "w-6 h-6" }),
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "p-6",
                children: [
                  i &&
                    s.jsx("div", {
                      className:
                        "mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm",
                      children: i,
                    }),
                  s.jsxs("div", {
                    className: "mb-6",
                    children: [
                      s.jsx("p", {
                        className: "text-sm text-gray-600 mb-4",
                        children:
                          "您確定要刪除以下驗收資料嗎？此操作無法復原。",
                      }),
                      s.jsxs("div", {
                        className: "bg-gray-50 rounded-lg p-4 space-y-2",
                        children: [
                          s.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              s.jsx("span", {
                                className: "text-sm text-gray-500",
                                children: "驗收單號:",
                              }),
                              s.jsx("span", {
                                className: "text-sm font-medium text-gray-900",
                                children: r.IC_SN,
                              }),
                            ],
                          }),
                          s.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              s.jsx("span", {
                                className: "text-sm text-gray-500",
                                children: "請購單號:",
                              }),
                              s.jsx("span", {
                                className: "text-sm font-medium text-gray-900",
                                children: r.PON,
                              }),
                            ],
                          }),
                          s.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              s.jsx("span", {
                                className: "text-sm text-gray-500",
                                children: "藥品名稱:",
                              }),
                              s.jsx("span", {
                                className: "text-sm font-medium text-gray-900",
                                children: r.CHT_NAME || r.NAME,
                              }),
                            ],
                          }),
                          s.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              s.jsx("span", {
                                className: "text-sm text-gray-500",
                                children: "藥品碼:",
                              }),
                              s.jsx("span", {
                                className: "text-sm font-medium text-gray-900",
                                children: r.CODE,
                              }),
                            ],
                          }),
                          s.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              s.jsx("span", {
                                className: "text-sm text-gray-500",
                                children: "應收數量:",
                              }),
                              s.jsxs("span", {
                                className: "text-sm font-medium text-gray-900",
                                children: [r.START_QTY, " ", r.PAKAGE],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "flex gap-3",
                    children: [
                      s.jsx("button", {
                        type: "button",
                        onClick: t,
                        className:
                          "flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",
                        disabled: o,
                        children: "取消",
                      }),
                      s.jsx("button", {
                        onClick: c,
                        disabled: o,
                        className:
                          "flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center",
                        children: o
                          ? s.jsxs(s.Fragment, {
                              children: [
                                s.jsx(ce, { size: "small", className: "mr-2" }),
                                "刪除中...",
                              ],
                            })
                          : s.jsxs(s.Fragment, {
                              children: [
                                s.jsx(Pn, { className: "w-4 h-4 mr-2" }),
                                "確認刪除",
                              ],
                            }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
  },
  hg = ({ isOpen: e, onClose: t, imageUrl: n, title: r }) =>
    e
      ? s.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-[60]",
          children: s.jsxs("div", {
            className: "relative max-w-[90vw] max-h-[90vh]",
            children: [
              s.jsx("button", {
                onClick: t,
                className:
                  "absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors",
                children: s.jsx("svg", {
                  className: "w-8 h-8",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: s.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M6 18L18 6M6 6l12 12",
                  }),
                }),
              }),
              s.jsx("img", {
                src: n,
                alt: r,
                className:
                  "max-w-full max-h-full object-contain rounded-lg shadow-2xl",
              }),
              s.jsx("div", {
                className:
                  "absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg",
                children: s.jsx("p", {
                  className: "text-center text-sm",
                  children: r,
                }),
              }),
            ],
          }),
        })
      : null,
  mg = ({ groupedData: e, isOpen: t, onClose: n, onDataUpdate: r }) => {
    const [o, l] = y.useState(!1),
      [i, a] = y.useState(null),
      [c, u] = y.useState(!1),
      [h, m] = y.useState(!1),
      [g, x] = y.useState(null),
      [b, S] = y.useState(null),
      [I, f] = y.useState(!1),
      [d, p] = y.useState(null),
      [v, w] = y.useState(!1),
      [k, D] = y.useState(null),
      [P, U] = y.useState({ isOpen: !1, imageUrl: "", title: "" }),
      [T, M] = y.useState(null),
      [C, E] = y.useState(new Set()),
      [z, te] = y.useState(null),
      G = tf() === "20",
      j = (W) => {
        a(W), l(!0);
      },
      O = (W) => {
        p(W), f(!0);
      },
      A = () => {
        r && r(), l(!1);
      },
      Y = y.useCallback((W) => {
        x(W), m(!0);
      }, []),
      re = y.useCallback(() => {
        r && r(), m(!1), x(null);
      }, [r]),
      rt = y.useCallback((W, V, ie, J, Ee) => {
        S({ subContentGuid: W, masterGuid: V, itemName: ie, lot: J, qty: Ee }),
          u(!0);
      }, []),
      _ = y.useCallback(() => {
        r && r(), u(!1), S(null);
      }, [r]),
      ee = (W) => {
        D(W), w(!0);
      },
      H = () => {
        r && r(), w(!1), D(null), n();
      },
      oe = async (W, V) => {
        M(W);
        try {
          console.log("=== 查看驗收單圖片 ==="), console.log("Item GUID:", W);
          const ie = await lf(W);
          if (
            (console.log("API Response:", ie),
            console.log("API Response Data:", JSON.stringify(ie.Data, null, 2)),
            ie.Code === 200 && ie.Data)
          ) {
            const J = ie.Data;
            if (
              (console.log("Image Data:", J),
              console.log("Base64 field exists:", !!J.base64),
              console.log("Base64 length:", J.base64 ? J.base64.length : 0),
              J.base64)
            ) {
              const Ee = J.base64.startsWith("data:")
                ? J.base64
                : `data:image/jpeg;base64,${J.base64}`;
              console.log(
                "Final image URL (first 100 chars):",
                Ee.substring(0, 100)
              ),
                U({ isOpen: !0, imageUrl: Ee, title: `${V} - 驗收單圖片` });
            } else
              console.log("No base64 data found in response"),
                console.log("Available fields:", Object.keys(J)),
                alert("此驗收單沒有相關圖片");
          } else
            console.log("API response failed or no data"),
              alert("查無此驗收單的圖片資料");
        } catch (ie) {
          console.error("查看圖片失敗:", ie), alert("查看圖片失敗，請稍後再試");
        } finally {
          M(null);
        }
      },
      he = async (W, V) => {
        if (!G) {
          te("您沒有權限執行此操作");
          return;
        }
        E((ie) => new Set([...ie, W.GUID])), te(null);
        try {
          console.log("=== Lock/Unlock Sub Content Debug ==="),
            console.log("Sub Content GUID:", W.GUID),
            console.log("Current State:", W.STATE),
            console.log("New State:", V);
          const ie = { ...W, STATE: V };
          console.log("Update Data:", JSON.stringify(ie, null, 2));
          const J = await zr(ie);
          console.log("Lock/Unlock Response:", JSON.stringify(J, null, 2)),
            J.Code === 200
              ? (console.log(`✅ ${V === "已鎖定" ? "鎖定" : "解鎖"}成功`),
                r && r())
              : te(J.Result || `${V === "已鎖定" ? "鎖定" : "解鎖"}失敗`);
        } catch (ie) {
          console.error("Lock/Unlock error:", ie),
            te(
              ie instanceof Error
                ? ie.message
                : `${V === "已鎖定" ? "鎖定" : "解鎖"}失敗`
            );
        } finally {
          E((ie) => {
            const J = new Set(ie);
            return J.delete(W.GUID), J;
          });
        }
      };
    return !t || !e
      ? null
      : s.jsxs(s.Fragment, {
          children: [
            s.jsx("div", {
              className:
                "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
              children: s.jsxs("div", {
                className:
                  "bg-white rounded-lg shadow-xl max-w-7xl w-full max-h-[90vh] overflow-hidden",
                children: [
                  s.jsxs("div", {
                    className:
                      "flex items-center justify-between p-6 border-b bg-gray-50",
                    children: [
                      s.jsxs("div", {
                        children: [
                          s.jsx("h3", {
                            className:
                              "text-lg font-semibold text-gray-900 mb-2",
                            children: "驗收明細",
                          }),
                          s.jsxs("div", {
                            className:
                              "flex items-center gap-4 text-sm text-gray-600",
                            children: [
                              s.jsxs("div", {
                                className: "flex items-center",
                                children: ["藥品碼: ", e.CODE],
                              }),
                              s.jsxs("div", {
                                className: "flex items-center",
                                children: ["料號: ", e.SKDIACODE],
                              }),
                              s.jsxs("div", {
                                className: "flex items-center",
                                children: ["廠商: ", e.BRD || "未指定"],
                              }),
                            ],
                          }),
                          z &&
                            s.jsx("div", {
                              className:
                                "mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm",
                              children: z,
                            }),
                        ],
                      }),
                      s.jsx("button", {
                        onClick: n,
                        className:
                          "text-gray-400 hover:text-gray-600 transition-colors",
                        children: s.jsx("svg", {
                          className: "w-6 h-6",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: s.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M6 18L18 6M6 6l12 12",
                          }),
                        }),
                      }),
                    ],
                  }),
                  s.jsx("div", {
                    className: "p-6 overflow-y-auto max-h-[calc(90vh-120px)]",
                    children:
                      e.items.length === 0
                        ? s.jsxs("div", {
                            className: "text-center py-8",
                            children: [
                              s.jsx(Wm, {
                                className:
                                  "w-12 h-12 text-gray-400 mx-auto mb-4",
                              }),
                              s.jsx("p", {
                                className: "text-gray-600",
                                children: "無明細資料",
                              }),
                            ],
                          })
                        : s.jsx("div", {
                            className: "space-y-6",
                            children: e.items.map((W) =>
                              s.jsxs(
                                "div",
                                {
                                  className: "bg-gray-50 rounded-lg p-6 border",
                                  children: [
                                    s.jsxs("div", {
                                      className:
                                        "flex items-center justify-between mb-4",
                                      children: [
                                        s.jsxs("h4", {
                                          className:
                                            "text-lg font-medium text-gray-900",
                                          children: ["請購單號: ", W.PON],
                                        }),
                                        s.jsxs("div", {
                                          className: "flex gap-2",
                                          children: [
                                            s.jsxs("button", {
                                              onClick: () => j(W),
                                              className:
                                                "inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors",
                                              children: [
                                                s.jsx(dr, {
                                                  className: "w-4 h-4 mr-2",
                                                }),
                                                "新增子明細",
                                              ],
                                            }),
                                            s.jsxs("button", {
                                              onClick: () => O(W),
                                              className:
                                                "inline-flex items-center px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors",
                                              children: [
                                                s.jsx("svg", {
                                                  className: "w-4 h-4 mr-2",
                                                  fill: "none",
                                                  stroke: "currentColor",
                                                  viewBox: "0 0 24 24",
                                                  children: s.jsx("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12",
                                                  }),
                                                }),
                                                "上傳出貨單",
                                              ],
                                            }),
                                            s.jsx("button", {
                                              onClick: () => ee(W),
                                              className:
                                                "inline-flex items-center px-3 py-2 bg-white border border-red-300 text-red-700 text-sm font-medium rounded-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors",
                                              title: "刪除此驗收資料",
                                              children: s.jsx(Pn, {
                                                className: "w-4 h-4",
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    s.jsxs("div", {
                                      className:
                                        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                      children: [
                                        s.jsxs("div", {
                                          children: [
                                            s.jsxs("h4", {
                                              className:
                                                "font-medium text-gray-900 mb-3 flex items-center",
                                              children: [
                                                s.jsx(zo, {
                                                  className: "w-4 h-4 mr-2",
                                                }),
                                                "基本資訊",
                                              ],
                                            }),
                                            s.jsxs("div", {
                                              className: "space-y-2 text-sm",
                                              children: [
                                                s.jsxs("div", {
                                                  children: [
                                                    s.jsx("span", {
                                                      className:
                                                        "text-gray-500",
                                                      children: "驗收單號:",
                                                    }),
                                                    " ",
                                                    s.jsx("span", {
                                                      className: "font-medium",
                                                      children: W.IC_SN,
                                                    }),
                                                  ],
                                                }),
                                                s.jsxs("div", {
                                                  children: [
                                                    s.jsx("span", {
                                                      className:
                                                        "text-gray-500",
                                                      children: "應收數量:",
                                                    }),
                                                    " ",
                                                    s.jsxs("span", {
                                                      className:
                                                        "font-medium text-blue-600",
                                                      children: [
                                                        W.START_QTY,
                                                        " ",
                                                        W.PAKAGE,
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                W.END_QTY &&
                                                  s.jsxs("div", {
                                                    children: [
                                                      s.jsx("span", {
                                                        className:
                                                          "text-gray-500",
                                                        children: "實收數量:",
                                                      }),
                                                      " ",
                                                      s.jsxs("span", {
                                                        className:
                                                          "font-medium text-green-600",
                                                        children: [
                                                          W.END_QTY,
                                                          " ",
                                                          W.PAKAGE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        s.jsxs("div", {
                                          children: [
                                            s.jsxs("h4", {
                                              className:
                                                "font-medium text-gray-900 mb-3 flex items-center",
                                              children: [
                                                s.jsx(ss, {
                                                  className: "w-4 h-4 mr-2",
                                                }),
                                                "時間資訊",
                                              ],
                                            }),
                                            s.jsxs("div", {
                                              className: "space-y-2 text-sm",
                                              children: [
                                                s.jsxs("div", {
                                                  children: [
                                                    s.jsx("span", {
                                                      className:
                                                        "text-gray-500",
                                                      children: "新增時間:",
                                                    }),
                                                    " ",
                                                    s.jsx("span", {
                                                      className: "font-medium",
                                                      children: W.ADD_TIME,
                                                    }),
                                                  ],
                                                }),
                                                s.jsxs("div", {
                                                  children: [
                                                    s.jsx("span", {
                                                      className:
                                                        "text-gray-500",
                                                      children: "交貨時間:",
                                                    }),
                                                    " ",
                                                    s.jsx("span", {
                                                      className: "font-medium",
                                                      children: W.DELIVERY_TIME
                                                        ? W.DELIVERY_TIME.split(
                                                            " "
                                                          )[0].replace(
                                                            /-/g,
                                                            "/"
                                                          )
                                                        : "",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        s.jsxs("div", {
                                          children: [
                                            s.jsxs("h4", {
                                              className:
                                                "font-medium text-gray-900 mb-3 flex items-center",
                                              children: [
                                                s.jsx(it, {
                                                  className: "w-4 h-4 mr-2",
                                                }),
                                                "其他資訊",
                                              ],
                                            }),
                                            s.jsxs("div", {
                                              className: "space-y-2 text-sm",
                                              children: [
                                                W.SEQ &&
                                                  s.jsxs("div", {
                                                    children: [
                                                      s.jsx("span", {
                                                        className:
                                                          "text-gray-500",
                                                        children: "編號:",
                                                      }),
                                                      " ",
                                                      W.SEQ,
                                                    ],
                                                  }),
                                                W.FREE_CHARGE_FLAG &&
                                                  s.jsxs("div", {
                                                    children: [
                                                      s.jsx("span", {
                                                        className:
                                                          "text-gray-500",
                                                        children: "贈品註記:",
                                                      }),
                                                      " ",
                                                      W.FREE_CHARGE_FLAG,
                                                    ],
                                                  }),
                                                W.NOTE &&
                                                  s.jsxs("div", {
                                                    children: [
                                                      s.jsx("span", {
                                                        className:
                                                          "text-gray-500",
                                                        children: "備註:",
                                                      }),
                                                      " ",
                                                      W.NOTE,
                                                    ],
                                                  }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    W.Sub_content &&
                                      W.Sub_content.length > 0 &&
                                      s.jsxs("div", {
                                        className: "border-t pt-4 mt-4",
                                        children: [
                                          s.jsx("h5", {
                                            className:
                                              "font-medium text-gray-900 mb-3",
                                            children: "子明細資料",
                                          }),
                                          s.jsx("div", {
                                            className: "space-y-3",
                                            children: W.Sub_content.map((V) =>
                                              s.jsxs(
                                                "div",
                                                {
                                                  className:
                                                    "bg-white rounded-md p-4 border border-gray-200",
                                                  children: [
                                                    s.jsx("div", {
                                                      className:
                                                        "flex justify-between items-start mb-3",
                                                      children: s.jsxs("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                          V.STATE !==
                                                            "已鎖定" &&
                                                            s.jsxs(s.Fragment, {
                                                              children: [
                                                                s.jsxs(
                                                                  "button",
                                                                  {
                                                                    onClick:
                                                                      () =>
                                                                        Y(V),
                                                                    className:
                                                                      "inline-flex items-center px-2 py-1 text-xs font-medium text-gray-600 bg-white border border-gray-300 rounded hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors",
                                                                    title:
                                                                      "編輯此子明細",
                                                                    children: [
                                                                      s.jsx(
                                                                        "svg",
                                                                        {
                                                                          className:
                                                                            "w-3 h-3 mr-1",
                                                                          fill: "none",
                                                                          stroke:
                                                                            "currentColor",
                                                                          viewBox:
                                                                            "0 0 24 24",
                                                                          children:
                                                                            s.jsx(
                                                                              "path",
                                                                              {
                                                                                strokeLinecap:
                                                                                  "round",
                                                                                strokeLinejoin:
                                                                                  "round",
                                                                                strokeWidth: 2,
                                                                                d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
                                                                              }
                                                                            ),
                                                                        }
                                                                      ),
                                                                      "編輯",
                                                                    ],
                                                                  }
                                                                ),
                                                                s.jsx(
                                                                  "button",
                                                                  {
                                                                    onClick:
                                                                      () =>
                                                                        rt(
                                                                          V.GUID,
                                                                          V.Master_GUID,
                                                                          W.CHT_NAME ||
                                                                            W.NAME,
                                                                          V.LOT,
                                                                          `${V.END_QTY}`
                                                                        ),
                                                                    className:
                                                                      "inline-flex items-center px-2 py-1 text-xs font-medium text-red-600 bg-white border border-red-300 rounded hover:bg-red-50 focus:outline-none focus:ring-1 focus:ring-red-500 transition-colors",
                                                                    title:
                                                                      "刪除此子明細",
                                                                    children:
                                                                      s.jsx(
                                                                        Pn,
                                                                        {
                                                                          className:
                                                                            "w-3 h-3",
                                                                        }
                                                                      ),
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                          G &&
                                                            s.jsx("div", {
                                                              className:
                                                                "flex gap-1",
                                                              children:
                                                                V.STATE ===
                                                                "未鎖定"
                                                                  ? s.jsx(
                                                                      "button",
                                                                      {
                                                                        onClick:
                                                                          () =>
                                                                            he(
                                                                              V,
                                                                              "已鎖定"
                                                                            ),
                                                                        disabled:
                                                                          C.has(
                                                                            V.GUID
                                                                          ),
                                                                        className:
                                                                          "inline-flex items-center px-2 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                                                        title:
                                                                          "鎖定此子明細",
                                                                        children:
                                                                          C.has(
                                                                            V.GUID
                                                                          )
                                                                            ? s.jsx(
                                                                                ce,
                                                                                {
                                                                                  size: "small",
                                                                                  className:
                                                                                    "w-3 h-3",
                                                                                }
                                                                              )
                                                                            : s.jsx(
                                                                                "svg",
                                                                                {
                                                                                  className:
                                                                                    "w-3 h-3",
                                                                                  fill: "none",
                                                                                  stroke:
                                                                                    "currentColor",
                                                                                  viewBox:
                                                                                    "0 0 24 24",
                                                                                  children:
                                                                                    s.jsx(
                                                                                      "path",
                                                                                      {
                                                                                        strokeLinecap:
                                                                                          "round",
                                                                                        strokeLinejoin:
                                                                                          "round",
                                                                                        strokeWidth: 2,
                                                                                        d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                                                                                      }
                                                                                    ),
                                                                                }
                                                                              ),
                                                                      }
                                                                    )
                                                                  : s.jsx(
                                                                      "button",
                                                                      {
                                                                        onClick:
                                                                          () =>
                                                                            he(
                                                                              V,
                                                                              "未鎖定"
                                                                            ),
                                                                        disabled:
                                                                          C.has(
                                                                            V.GUID
                                                                          ),
                                                                        className:
                                                                          "inline-flex items-center px-2 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                                                        title:
                                                                          "解鎖此子明細",
                                                                        children:
                                                                          C.has(
                                                                            V.GUID
                                                                          )
                                                                            ? s.jsx(
                                                                                ce,
                                                                                {
                                                                                  size: "small",
                                                                                  className:
                                                                                    "w-3 h-3",
                                                                                }
                                                                              )
                                                                            : s.jsx(
                                                                                "svg",
                                                                                {
                                                                                  className:
                                                                                    "w-3 h-3",
                                                                                  fill: "none",
                                                                                  stroke:
                                                                                    "currentColor",
                                                                                  viewBox:
                                                                                    "0 0 24 24",
                                                                                  children:
                                                                                    s.jsx(
                                                                                      "path",
                                                                                      {
                                                                                        strokeLinecap:
                                                                                          "round",
                                                                                        strokeLinejoin:
                                                                                          "round",
                                                                                        strokeWidth: 2,
                                                                                        d: "M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z",
                                                                                      }
                                                                                    ),
                                                                                }
                                                                              ),
                                                                      }
                                                                    ),
                                                            }),
                                                          s.jsx("button", {
                                                            onClick: () =>
                                                              oe(
                                                                W.GUID,
                                                                W.CHT_NAME ||
                                                                  W.NAME
                                                              ),
                                                            disabled:
                                                              T === W.GUID,
                                                            className:
                                                              "inline-flex items-center px-2 py-1 text-xs font-medium text-blue-600 bg-white border border-blue-300 rounded hover:bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                                            title:
                                                              "查看驗收單圖片",
                                                            children:
                                                              T === W.GUID
                                                                ? s.jsx(ce, {
                                                                    size: "small",
                                                                    className:
                                                                      "w-3 h-3",
                                                                  })
                                                                : s.jsx(Kd, {
                                                                    className:
                                                                      "w-3 h-3",
                                                                  }),
                                                          }),
                                                        ],
                                                      }),
                                                    }),
                                                    s.jsxs("div", {
                                                      className:
                                                        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                                                      children: [
                                                        s.jsxs("div", {
                                                          children: [
                                                            s.jsx("h6", {
                                                              className:
                                                                "text-xs font-medium text-gray-500 uppercase mb-1",
                                                              children:
                                                                "數量資訊",
                                                            }),
                                                            s.jsx("div", {
                                                              className:
                                                                "text-sm space-y-1",
                                                              children: s.jsxs(
                                                                "div",
                                                                {
                                                                  children: [
                                                                    s.jsx(
                                                                      "span",
                                                                      {
                                                                        className:
                                                                          "text-gray-500",
                                                                        children:
                                                                          "實收:",
                                                                      }
                                                                    ),
                                                                    " ",
                                                                    s.jsxs(
                                                                      "span",
                                                                      {
                                                                        className:
                                                                          "font-medium text-green-600",
                                                                        children:
                                                                          [
                                                                            V.END_QTY,
                                                                            " ",
                                                                            V.PAKAGE,
                                                                          ],
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                            }),
                                                          ],
                                                        }),
                                                        s.jsxs("div", {
                                                          children: [
                                                            s.jsx("h6", {
                                                              className:
                                                                "text-xs font-medium text-gray-500 uppercase mb-1",
                                                              children:
                                                                "效期批號",
                                                            }),
                                                            s.jsxs("div", {
                                                              className:
                                                                "text-sm space-y-1",
                                                              children: [
                                                                s.jsxs("div", {
                                                                  children: [
                                                                    s.jsx(
                                                                      "span",
                                                                      {
                                                                        className:
                                                                          "text-gray-500",
                                                                        children:
                                                                          "效期:",
                                                                      }
                                                                    ),
                                                                    " ",
                                                                    V.VAL
                                                                      ? new Date(
                                                                          V.VAL
                                                                        )
                                                                          .toLocaleDateString(
                                                                            "zh-TW",
                                                                            {
                                                                              year: "numeric",
                                                                              month:
                                                                                "2-digit",
                                                                              day: "2-digit",
                                                                            }
                                                                          )
                                                                          .replace(
                                                                            /\//g,
                                                                            "/"
                                                                          )
                                                                      : "",
                                                                  ],
                                                                }),
                                                                s.jsxs("div", {
                                                                  children: [
                                                                    s.jsx(
                                                                      "span",
                                                                      {
                                                                        className:
                                                                          "text-gray-500",
                                                                        children:
                                                                          "批號:",
                                                                      }
                                                                    ),
                                                                    " ",
                                                                    V.LOT,
                                                                  ],
                                                                }),
                                                              ],
                                                            }),
                                                          ],
                                                        }),
                                                        s.jsxs("div", {
                                                          children: [
                                                            s.jsx("h6", {
                                                              className:
                                                                "text-xs font-medium text-gray-500 uppercase mb-1",
                                                              children:
                                                                "操作資訊",
                                                            }),
                                                            s.jsxs("div", {
                                                              className:
                                                                "text-sm space-y-1",
                                                              children: [
                                                                s.jsxs("div", {
                                                                  className:
                                                                    "flex items-center",
                                                                  children: [
                                                                    s.jsx(Xd, {
                                                                      className:
                                                                        "w-3 h-3 text-gray-400 mr-1",
                                                                    }),
                                                                    V.OP,
                                                                  ],
                                                                }),
                                                                s.jsxs("div", {
                                                                  className:
                                                                    "flex items-center",
                                                                  children: [
                                                                    s.jsx(ss, {
                                                                      className:
                                                                        "w-3 h-3 text-gray-400 mr-1",
                                                                    }),
                                                                    V.OP_TIME
                                                                      ? new Date(
                                                                          V.OP_TIME
                                                                        )
                                                                          .toLocaleDateString(
                                                                            "zh-TW",
                                                                            {
                                                                              year: "numeric",
                                                                              month:
                                                                                "2-digit",
                                                                              day: "2-digit",
                                                                            }
                                                                          )
                                                                          .replace(
                                                                            /\//g,
                                                                            "/"
                                                                          )
                                                                      : "",
                                                                  ],
                                                                }),
                                                              ],
                                                            }),
                                                          ],
                                                        }),
                                                        s.jsxs("div", {
                                                          children: [
                                                            s.jsx("h6", {
                                                              className:
                                                                "text-xs font-medium text-gray-500 uppercase mb-1",
                                                              children: "狀態",
                                                            }),
                                                            s.jsx("div", {
                                                              className:
                                                                "text-sm",
                                                              children: s.jsx(
                                                                "span",
                                                                {
                                                                  className: `inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                                                    V.STATE ===
                                                                    "未鎖定"
                                                                      ? "bg-yellow-100 text-yellow-800"
                                                                      : "bg-green-100 text-green-800"
                                                                  }`,
                                                                  children:
                                                                    V.STATE,
                                                                }
                                                              ),
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    (V.BARCODE1 ||
                                                      V.BARCODE2 ||
                                                      V.NOTE) &&
                                                      s.jsxs("div", {
                                                        className:
                                                          "mt-3 pt-3 border-t border-gray-100",
                                                        children: [
                                                          (V.BARCODE1 ||
                                                            V.BARCODE2) &&
                                                            s.jsxs("div", {
                                                              className: "mb-2",
                                                              children: [
                                                                s.jsx("span", {
                                                                  className:
                                                                    "text-xs font-medium text-gray-500 uppercase",
                                                                  children:
                                                                    "條碼資訊",
                                                                }),
                                                                s.jsxs("div", {
                                                                  className:
                                                                    "text-sm text-gray-600 mt-1",
                                                                  children: [
                                                                    V.BARCODE1 &&
                                                                      s.jsxs(
                                                                        "div",
                                                                        {
                                                                          children:
                                                                            [
                                                                              "條碼1: ",
                                                                              V.BARCODE1,
                                                                            ],
                                                                        }
                                                                      ),
                                                                    V.BARCODE2 &&
                                                                      s.jsxs(
                                                                        "div",
                                                                        {
                                                                          children:
                                                                            [
                                                                              "條碼2: ",
                                                                              V.BARCODE2,
                                                                            ],
                                                                        }
                                                                      ),
                                                                  ],
                                                                }),
                                                              ],
                                                            }),
                                                          V.NOTE &&
                                                            s.jsxs("div", {
                                                              children: [
                                                                s.jsx("span", {
                                                                  className:
                                                                    "text-xs font-medium text-gray-500 uppercase",
                                                                  children:
                                                                    "備註",
                                                                }),
                                                                s.jsx("p", {
                                                                  className:
                                                                    "text-sm text-gray-600 mt-1",
                                                                  children:
                                                                    V.NOTE,
                                                                }),
                                                              ],
                                                            }),
                                                        ],
                                                      }),
                                                  ],
                                                },
                                                V.GUID
                                              )
                                            ),
                                          }),
                                        ],
                                      }),
                                  ],
                                },
                                W.GUID
                              )
                            ),
                          }),
                  }),
                ],
              }),
            }),
            s.jsx(ig, {
              isOpen: o,
              onClose: () => l(!1),
              inspectionItem: i,
              onSuccess: A,
            }),
            s.jsx(dg, {
              isOpen: I,
              onClose: () => {
                f(!1), p(null);
              },
              inspectionItem: d,
              onDataUpdate: r,
            }),
            s.jsx(cg, {
              isOpen: h,
              onClose: () => {
                m(!1), x(null);
              },
              subContentData: g,
              onSuccess: re,
              inspectionItem: e.items.find((W) => {
                var V;
                return (V = W.Sub_content) == null
                  ? void 0
                  : V.some((ie) => ie.GUID === (g == null ? void 0 : g.GUID));
              }),
            }),
            s.jsx(ag, {
              isOpen: c,
              onClose: () => {
                u(!1), S(null);
              },
              onConfirm: _,
              subContentData: b,
            }),
            s.jsx(fg, {
              isOpen: v,
              onClose: () => {
                w(!1), D(null);
              },
              onConfirm: H,
              inspectionContent: k,
            }),
            s.jsx(hg, {
              isOpen: P.isOpen,
              onClose: () => U({ isOpen: !1, imageUrl: "", title: "" }),
              imageUrl: P.imageUrl,
              title: P.title,
            }),
          ],
        });
  },
  pg = ({
    startDate: e,
    endDate: t,
    onDateChange: n,
    onSearch: r,
    onReset: o,
    loading: l,
  }) => {
    const { t: i } = ms(),
      [a, c] = y.useState(!1),
      [u, h] = y.useState(i("app.inspection.operation_time")),
      [m, g] = y.useState(e.split(" ")[0]),
      [x, b] = y.useState("00:00:00"),
      [S, I] = y.useState(t.split(" ")[0]),
      [f, d] = y.useState("23:59:59"),
      p = [
        i("app.inspection.operation_time"),
        i("app.inspection.add_time"),
        i("app.inspection.update_time"),
      ],
      v = () => {
        const w = `${m} ${x}`,
          k = `${S} ${f}`;
        n(w, k), r();
      };
    return s.jsxs("div", {
      className: "bg-white rounded-lg shadow-sm border mb-6",
      children: [
        s.jsxs("div", {
          className:
            "flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors",
          onClick: () => c(!a),
          children: [
            s.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                s.jsx(zm, { className: "w-5 h-5 text-gray-600" }),
                s.jsx("h3", {
                  className: "text-lg font-medium text-gray-900",
                  children: i("app.inspection.time_range"),
                }),
              ],
            }),
            s.jsx(ai, {
              className: `w-5 h-5 text-gray-400 transition-transform duration-200 ${
                a ? "rotate-180" : ""
              }`,
            }),
          ],
        }),
        a &&
          s.jsx("div", {
            className: "px-4 pb-4 border-t border-gray-100",
            children: s.jsxs("div", {
              className:
                "grid grid-cols-1 lg:grid-cols-12 gap-4 items-end mt-4",
              children: [
                s.jsxs("div", {
                  className: "lg:col-span-3",
                  children: [
                    s.jsx("label", {
                      className: "block text-sm font-medium text-gray-700 mb-2",
                      children: i("app.inspection.time_type"),
                    }),
                    s.jsxs("div", {
                      className: "relative",
                      children: [
                        s.jsx("select", {
                          value: u,
                          onChange: (w) => h(w.target.value),
                          className:
                            "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none",
                          children: p.map((w) =>
                            s.jsx("option", { value: w, children: w }, w)
                          ),
                        }),
                        s.jsx(ai, {
                          className:
                            "absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none",
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "lg:col-span-4",
                  children: [
                    s.jsx("label", {
                      className: "block text-sm font-medium text-gray-700 mb-2",
                      children: i("app.inspection.start_datetime"),
                    }),
                    s.jsxs("div", {
                      className: "flex gap-3",
                      children: [
                        s.jsx("input", {
                          type: "date",
                          value: m,
                          onChange: (w) => g(w.target.value),
                          className:
                            "px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                        }),
                        s.jsx("input", {
                          type: "time",
                          value: x,
                          onChange: (w) => b(w.target.value),
                          className:
                            "px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                          step: "1",
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "lg:col-span-4",
                  children: [
                    s.jsx("label", {
                      className: "block text-sm font-medium text-gray-700 mb-2",
                      children: i("app.inspection.end_datetime"),
                    }),
                    s.jsxs("div", {
                      className: "flex gap-3",
                      children: [
                        s.jsx("input", {
                          type: "date",
                          value: S,
                          onChange: (w) => I(w.target.value),
                          className:
                            "px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                        }),
                        s.jsx("input", {
                          type: "time",
                          value: f,
                          onChange: (w) => d(w.target.value),
                          className:
                            "px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                          step: "1",
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsx("div", {
                  className: "lg:col-span-1",
                  children: s.jsxs("button", {
                    onClick: v,
                    disabled: l,
                    className:
                      "w-full inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                    children: [
                      s.jsx(zt, { className: "w-4 h-4" }),
                      s.jsx("span", {
                        className: "ml-1 hidden xl:inline",
                        children: i(
                          l
                            ? "app.inspection.searching"
                            : "app.inspection.search"
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
  gg = ({ isOpen: e, onClose: t, analysisResult: n, onSuccess: r }) => {
    const [o, l] = y.useState([]),
      [i, a] = y.useState(null),
      [c, u] = y.useState(!1),
      [h, m] = y.useState(!1),
      [g, x] = y.useState(null);
    y.useEffect(() => {
      e && n != null && n.po_num && b();
    }, [e, n]);
    const b = async () => {
        if (n != null && n.po_num) {
          m(!0), x(null);
          try {
            console.log("搜尋請購單號:", n.po_num);
            const f = await Kp(n.po_num);
            if (f.Code === 200 && f.Data) {
              l(f.Data), console.log("找到驗收資料:", f.Data.length, "筆");
              const d = f.Data.filter((p) => {
                const v = p.Sub_content && p.Sub_content.length > 0;
                return (
                  v &&
                    console.log(
                      "過濾掉已有子明細的項目:",
                      p.IC_SN,
                      "子明細數量:",
                      p.Sub_content.length
                    ),
                  !v
                );
              });
              l(d), console.log("過濾後的驗收資料:", d.length, "筆");
            } else x(f.Result || "查無相關驗收資料"), l([]);
          } catch (f) {
            console.error("搜尋驗收資料失敗:", f),
              x(f instanceof Error ? f.message : "搜尋失敗"),
              l([]);
          } finally {
            m(!1);
          }
        }
      },
      S = async () => {
        if (!(!i || !n)) {
          u(!0), x(null);
          try {
            console.log("開始配對:", {
              selectedItem: i.GUID,
              analysisResult: n.GUID,
            });
            const f = await Yp(n.GUID, i, n);
            console.log("配對 API 完整回應:", f),
              f.Code === 200
                ? (console.log("配對成功"), r(n.GUID))
                : x(f.Result || "配對失敗");
          } catch (f) {
            console.error("配對失敗:", f),
              x(f instanceof Error ? f.message : "配對失敗");
          } finally {
            u(!1);
          }
        }
      },
      I = (f) => {
        if (!f) return "";
        try {
          return new Date(f)
            .toLocaleDateString("zh-TW", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })
            .replace(/\//g, "/");
        } catch {
          return f;
        }
      };
    return !e || !n
      ? null
      : s.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
          children: s.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-hidden",
            children: [
              s.jsxs("div", {
                className:
                  "flex items-center justify-between p-6 border-b bg-gray-50",
                children: [
                  s.jsxs("div", {
                    children: [
                      s.jsxs("h3", {
                        className:
                          "text-lg font-semibold text-gray-900 flex items-center",
                        children: [
                          s.jsx(ui, { className: "w-5 h-5 mr-2" }),
                          "配對驗收資料",
                        ],
                      }),
                      s.jsxs("p", {
                        className: "text-sm text-gray-600 mt-1",
                        children: ["請購單號: ", n.po_num],
                      }),
                    ],
                  }),
                  s.jsx("button", {
                    onClick: t,
                    className:
                      "text-gray-400 hover:text-gray-600 transition-colors",
                    children: s.jsx(Le, { className: "w-6 h-6" }),
                  }),
                ],
              }),
              s.jsx("div", {
                className: "p-6 overflow-y-auto max-h-[calc(90vh-200px)]",
                children: s.jsxs("div", {
                  className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                  children: [
                    s.jsxs("div", {
                      children: [
                        s.jsx("h4", {
                          className: "text-md font-medium text-gray-900 mb-4",
                          children: "分析結果",
                        }),
                        s.jsxs("div", {
                          className: "bg-blue-50 rounded-lg p-4 mb-4",
                          children: [
                            n.base64 &&
                              s.jsx("img", {
                                src: n.base64.startsWith("data:")
                                  ? n.base64
                                  : `data:image/jpeg;base64,${n.base64}`,
                                alt: "出貨單",
                                className:
                                  "w-full h-48 object-cover rounded mb-4",
                              }),
                            s.jsxs("div", {
                              className: "space-y-3",
                              children: [
                                s.jsxs("div", {
                                  className: "bg-white rounded p-3",
                                  children: [
                                    s.jsx("h5", {
                                      className:
                                        "text-sm font-medium text-gray-700 mb-2",
                                      children: "藥品資訊",
                                    }),
                                    s.jsxs("div", {
                                      className: "space-y-1 text-sm",
                                      children: [
                                        s.jsxs("div", {
                                          children: [
                                            s.jsx("span", {
                                              className: "text-gray-500",
                                              children: "藥品碼:",
                                            }),
                                            " ",
                                            n.code,
                                          ],
                                        }),
                                        s.jsxs("div", {
                                          children: [
                                            s.jsx("span", {
                                              className: "text-gray-500",
                                              children: "中文名:",
                                            }),
                                            " ",
                                            n.cht_name,
                                          ],
                                        }),
                                        s.jsxs("div", {
                                          children: [
                                            s.jsx("span", {
                                              className: "text-gray-500",
                                              children: "英文名:",
                                            }),
                                            " ",
                                            n.name,
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                s.jsxs("div", {
                                  className: "bg-white rounded p-3",
                                  children: [
                                    s.jsx("h5", {
                                      className:
                                        "text-sm font-medium text-gray-700 mb-2",
                                      children: "批次資訊",
                                    }),
                                    s.jsxs("div", {
                                      className: "space-y-1 text-sm",
                                      children: [
                                        s.jsxs("div", {
                                          children: [
                                            s.jsx("span", {
                                              className: "text-gray-500",
                                              children: "批號:",
                                            }),
                                            " ",
                                            n.batch_num,
                                          ],
                                        }),
                                        s.jsxs("div", {
                                          children: [
                                            s.jsx("span", {
                                              className: "text-gray-500",
                                              children: "效期:",
                                            }),
                                            " ",
                                            I(n.expirydate),
                                          ],
                                        }),
                                        s.jsxs("div", {
                                          children: [
                                            s.jsx("span", {
                                              className: "text-gray-500",
                                              children: "數量:",
                                            }),
                                            " ",
                                            n.qty,
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
                    s.jsxs("div", {
                      children: [
                        s.jsxs("h4", {
                          className: "text-md font-medium text-gray-900 mb-4",
                          children: [
                            "選擇配對的驗收資料",
                            h &&
                              s.jsx(ce, { size: "small", className: "ml-2" }),
                          ],
                        }),
                        g &&
                          s.jsxs("div", {
                            className:
                              "mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm flex items-center",
                            children: [
                              s.jsx(it, {
                                className: "w-4 h-4 mr-2 flex-shrink-0",
                              }),
                              g,
                            ],
                          }),
                        h
                          ? s.jsxs("div", {
                              className: "text-center py-8",
                              children: [
                                s.jsx(ce, {
                                  size: "medium",
                                  className: "mx-auto mb-4",
                                }),
                                s.jsx("p", {
                                  className: "text-gray-600",
                                  children: "搜尋驗收資料中...",
                                }),
                              ],
                            })
                          : o.length === 0
                          ? s.jsxs("div", {
                              className: "text-center py-8",
                              children: [
                                s.jsx(In, {
                                  className:
                                    "w-12 h-12 text-gray-400 mx-auto mb-4",
                                }),
                                s.jsx("p", {
                                  className: "text-gray-600",
                                  children: "查無相關驗收資料",
                                }),
                              ],
                            })
                          : s.jsx("div", {
                              className: "space-y-3",
                              children: o.map((f) =>
                                s.jsxs(
                                  "div",
                                  {
                                    className: `border rounded-lg p-4 cursor-pointer transition-colors ${
                                      (i == null ? void 0 : i.GUID) === f.GUID
                                        ? "border-blue-500 bg-blue-50"
                                        : "border-gray-200 hover:border-gray-300"
                                    }`,
                                    onClick: () => a(f),
                                    children: [
                                      s.jsxs("div", {
                                        className:
                                          "flex items-start justify-between mb-2",
                                        children: [
                                          s.jsxs("div", {
                                            className: "flex-1",
                                            children: [
                                              s.jsx("h5", {
                                                className:
                                                  "font-medium text-gray-900",
                                                children: f.CHT_NAME || f.NAME,
                                              }),
                                              s.jsxs("p", {
                                                className:
                                                  "text-sm text-gray-600",
                                                children: [
                                                  "驗收單號: ",
                                                  f.IC_SN,
                                                ],
                                              }),
                                            ],
                                          }),
                                          (i == null ? void 0 : i.GUID) ===
                                            f.GUID &&
                                            s.jsx(Dt, {
                                              className:
                                                "w-5 h-5 text-blue-500 flex-shrink-0",
                                            }),
                                        ],
                                      }),
                                      s.jsxs("div", {
                                        className:
                                          "grid grid-cols-2 gap-4 text-sm",
                                        children: [
                                          s.jsxs("div", {
                                            children: [
                                              s.jsx("span", {
                                                className: "text-gray-500",
                                                children: "藥品碼:",
                                              }),
                                              s.jsx("span", {
                                                className: "ml-1 font-medium",
                                                children: f.CODE,
                                              }),
                                            ],
                                          }),
                                          s.jsxs("div", {
                                            children: [
                                              s.jsx("span", {
                                                className: "text-gray-500",
                                                children: "料號:",
                                              }),
                                              s.jsx("span", {
                                                className: "ml-1 font-medium",
                                                children: f.SKDIACODE,
                                              }),
                                            ],
                                          }),
                                          s.jsxs("div", {
                                            children: [
                                              s.jsx("span", {
                                                className: "text-gray-500",
                                                children: "應收數量:",
                                              }),
                                              s.jsxs("span", {
                                                className: "ml-1 font-medium",
                                                children: [
                                                  f.START_QTY,
                                                  " ",
                                                  f.PAKAGE,
                                                ],
                                              }),
                                            ],
                                          }),
                                          s.jsxs("div", {
                                            children: [
                                              s.jsx("span", {
                                                className: "text-gray-500",
                                                children: "廠商:",
                                              }),
                                              s.jsx("span", {
                                                className: "ml-1 font-medium",
                                                children: f.BRD || "未指定",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  f.GUID
                                )
                              ),
                            }),
                      ],
                    }),
                  ],
                }),
              }),
              s.jsxs("div", {
                className: "flex justify-end gap-3 p-6 border-t bg-gray-50",
                children: [
                  s.jsx("button", {
                    onClick: t,
                    className:
                      "px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",
                    disabled: c,
                    children: "取消",
                  }),
                  s.jsx("button", {
                    onClick: S,
                    disabled: c || !i,
                    className:
                      "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center",
                    children: c
                      ? s.jsxs(s.Fragment, {
                          children: [
                            s.jsx(ce, { size: "small", className: "mr-2" }),
                            "配對中...",
                          ],
                        })
                      : s.jsxs(s.Fragment, {
                          children: [
                            s.jsx(ui, { className: "w-4 h-4 mr-2" }),
                            "確認配對",
                          ],
                        }),
                  }),
                ],
              }),
            ],
          }),
        });
  },
  xg = ({ isOpen: e, onClose: t, imageUrl: n, title: r }) =>
    e
      ? s.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-[60]",
          children: s.jsxs("div", {
            className: "relative max-w-[90vw] max-h-[90vh]",
            children: [
              s.jsx("button", {
                onClick: t,
                className:
                  "absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors",
                children: s.jsx(Le, { className: "w-8 h-8" }),
              }),
              s.jsx("img", {
                src: n,
                alt: r,
                className:
                  "max-w-full max-h-full object-contain rounded-lg shadow-2xl",
              }),
              s.jsx("div", {
                className:
                  "absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg",
                children: s.jsx("p", {
                  className: "text-center text-sm",
                  children: r,
                }),
              }),
            ],
          }),
        })
      : null,
  yg = ({ isOpen: e, onClose: t, results: n, onDataUpdate: r }) => {
    const [o, l] = y.useState([]),
      [i, a] = y.useState(!1),
      [c, u] = y.useState(null),
      [h, m] = y.useState(null),
      [g, x] = y.useState({ isOpen: !1, result: null }),
      [b, S] = y.useState(new Set()),
      [I, f] = y.useState(null),
      [d, p] = y.useState({
        po_num: "",
        qty: "",
        batch_num: "",
        expirydate: "",
      }),
      [v, w] = y.useState(null),
      [k, D] = y.useState(!1),
      [P, U] = y.useState(null),
      [T, M] = y.useState(new Set());
    y.useEffect(() => {
      n && n.length > 0 && o.length === 0 && l(n);
    }, [n, o.length]);
    const C = async (_) => {
        try {
          console.log("=== 開始取得最新資料 ==="), console.log("GUID:", _);
          const ee = await Jp(_);
          if (
            (console.log("API Response:", ee),
            ee.Code === 200 && ee.Data && ee.Data.length > 0)
          ) {
            const H = ee.Data[0];
            console.log("取得最新資料:", H),
              l((oe) => {
                const he = oe.findIndex((V) => V.GUID === _);
                if (he < 0)
                  return console.warn("找不到對應的結果 GUID:", _), oe;
                const W = [...oe];
                return (
                  (W[he] = { ...oe[he], ...H, base64: oe[he].base64 }),
                  console.log("✅ 更新成功，索引:", he),
                  console.log("更新後資料:", W[he]),
                  W
                );
              });
          } else
            console.error("取得最新資料失敗:", ee.Result),
              u(ee.Result || "取得最新資料失敗");
        } catch (ee) {
          console.error("取得最新資料異常:", ee),
            u(ee instanceof Error ? ee.message : "取得最新資料失敗");
        }
      },
      E = (_, ee) => {
        console.log("Image clicked:", { index: ee, hasBase64: !!_.base64 });
        const H = _.base64 || _.image || _.img || _.picture;
        if (!H) {
          console.warn("No image data found for result:", _);
          return;
        }
        const oe = H.startsWith("data:") ? H : `data:image/jpeg;base64,${H}`;
        console.log("Setting zoom image:", {
          url: oe.substring(0, 50) + "...",
          title: `出貨單分析結果 #${ee + 1}`,
        }),
          m({ url: oe, title: `出貨單分析結果 #${ee + 1}` });
      },
      z = (_) => {
        console.log("開始配對流程:", _), x({ isOpen: !0, result: _ });
      },
      te = (_) => {
        f(_.GUID),
          p({
            po_num: _.po_num || "",
            qty: _.qty || "",
            batch_num: _.batch_num || "",
            expirydate: _.expirydate ? _.expirydate.split(" ")[0] : "",
          });
      },
      B = () => {
        f(null), p({ po_num: "", qty: "", batch_num: "", expirydate: "" });
      },
      G = async (_) => {
        w(_.GUID), u(null);
        try {
          console.log("=== 開始更新分析結果 ==="),
            console.log("GUID:", _.GUID),
            console.log("更新資料:", d);
          const ee = d.expirydate ? `${d.expirydate} 00:00:00` : "",
            H = await Xp({
              GUID: _.GUID,
              po_num: d.po_num,
              qty: d.qty,
              batch_num: d.batch_num,
              expirydate: ee,
            });
          console.log("更新 API 回應:", H),
            H.Code === 200
              ? (console.log("✅ 更新成功"), await C(_.GUID), f(null))
              : u(H.Result || "更新失敗");
        } catch (ee) {
          console.error("更新失敗:", ee),
            u(ee instanceof Error ? ee.message : "更新失敗");
        } finally {
          w(null);
        }
      },
      j = (_) =>
        b.has(_.GUID)
          ? { canPair: !1, reason: "已配對" }
          : _.check === "此單號已驗收"
          ? { canPair: !1, reason: "此單號已驗收" }
          : { canPair: !0, reason: "" },
      O = (_) => {
        console.log("配對成功，準備取得最新資料，GUID:", _),
          C(_),
          x({ isOpen: !1, result: null });
      },
      A = (_) =>
        T.has(_.GUID)
          ? !1
          : !!(_.po_num && _.qty && _.batch_num && _.expirydate),
      Y = async () => {
        const _ = o.filter((H) => A(H) && !T.has(H.GUID));
        if (_.length === 0) {
          U("沒有可送出的資料");
          return;
        }
        const ee = ot();
        if (!ee) {
          U("無法取得操作人資訊");
          return;
        }
        D(!0), U(null);
        try {
          console.log(
            `本次送出的 GUID 共 ${_.length} 筆:`,
            _.map((J) => J.GUID)
          );
          const oe = { ValueAry: [null, _.map((J) => J.GUID).join(";")] },
            he = await je("/api/pcmpo/check", { method: "POST", body: oe });
          if (he.Code !== 200) {
            U(he.Result || "確認檢查失敗");
            return;
          }
          const W = _.map((J) => ({
              GUID: J.GUID,
              Master_GUID: J.Master_GUID,
              LOT: J.batch_num,
              END_QTY: J.qty,
              VAL: J.expirydate ? `${J.expirydate.split(" ")[0]} 00:00:00` : "",
              OP: ee,
            })),
            V = [],
            ie = [];
          for (const J of W)
            try {
              const Ee = await ha(J.Master_GUID, J.LOT, J.END_QTY, J.VAL, J.OP);
              Ee.Code === 200
                ? (V.push(J.GUID),
                  console.log(`✅ 子明細新增成功: ${J.Master_GUID}`))
                : (ie.push(`${J.Master_GUID}: ${Ee.Result}`),
                  console.log(
                    `❌ 子明細新增失敗: ${J.Master_GUID} - ${Ee.Result}`
                  ));
            } catch (Ee) {
              const xr = Ee instanceof Error ? Ee.message : "未知錯誤";
              ie.push(`${J.Master_GUID}: ${xr}`),
                console.error(`❌ 子明細新增異常: ${J.Master_GUID}`, Ee);
            }
          V.length > 0 &&
            (M((J) => new Set([...J, ...V])),
            l((J) =>
              J.map((Ee) => (V.includes(Ee.GUID) ? { ...Ee, _locked: !0 } : Ee))
            )),
            ie.length === 0
              ? (U(null), r && r())
              : V.length > 0
              ? (U(
                  `部分成功：${V.length} 筆成功，${
                    ie.length
                  } 筆失敗。失敗原因：${ie.join("; ")}`
                ),
                r && r())
              : U(`全部失敗：${ie.join("; ")}`);
        } catch (H) {
          console.error("批次確認送出失敗:", H),
            U(H instanceof Error ? H.message : "批次送出失敗");
        } finally {
          D(!1);
        }
      },
      re = async () => {
        const _ = o.filter((ee) => !T.has(ee.GUID));
        if (_.length > 0)
          try {
            console.log("=== 刪除未送出資料 ==="),
              console.log("未送出資料數量:", _.length),
              console.log(
                "未送出的 GUIDs:",
                _.map((he) => he.GUID)
              );
            const H = { ValueAry: [_.map((he) => he.GUID).join(";")] };
            console.log("=== Delete API Request Debug ==="),
              console.log("URL:", "/api/pcmpo/delete_by_GUID"),
              console.log("Method:", "POST"),
              console.log("Request Data:", JSON.stringify(H, null, 2));
            const oe = await je("/api/pcmpo/delete_by_GUID", {
              method: "POST",
              body: H,
            });
            console.log("Delete API Response:", JSON.stringify(oe, null, 2)),
              oe.Code === 200
                ? console.log("✅ 未送出資料刪除成功")
                : console.log("❌ 未送出資料刪除失敗:", oe.Result);
          } catch (ee) {
            console.error("刪除未送出資料失敗:", ee);
          }
        T.size > 0 && r && r(), t();
      };
    if (!e || !n || n.length === 0) return null;
    const rt = (_) => {
      if (!_) return "";
      try {
        return new Date(_)
          .toLocaleDateString("zh-TW", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })
          .replace(/\//g, "/");
      } catch {
        return _;
      }
    };
    return s.jsxs(s.Fragment, {
      children: [
        s.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
          children: s.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-hidden",
            children: [
              s.jsxs("div", {
                className:
                  "flex items-center justify-between p-6 border-b bg-gray-50",
                children: [
                  s.jsxs("div", {
                    children: [
                      s.jsx("h3", {
                        className: "text-lg font-semibold text-gray-900",
                        children: "批次分析結果",
                      }),
                      s.jsxs("div", {
                        className: "flex items-center mt-1",
                        children: [
                          s.jsx(Dt, {
                            className: "w-4 h-4 text-green-500 mr-1",
                          }),
                          s.jsxs("span", {
                            className: "text-sm text-gray-600",
                            children: ["共分析 ", o.length, " 筆資料"],
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsx("button", {
                    onClick: re,
                    className:
                      "text-gray-400 hover:text-gray-600 transition-colors",
                    children: s.jsx(Le, { className: "w-6 h-6" }),
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "p-6 overflow-y-auto max-h-[calc(90vh-200px)]",
                children: [
                  c &&
                    s.jsxs("div", {
                      className:
                        "mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm flex items-center",
                      children: [
                        s.jsx(it, { className: "w-4 h-4 mr-2 flex-shrink-0" }),
                        c,
                      ],
                    }),
                  s.jsx("div", {
                    className:
                      "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6",
                    children: o.map((_, ee) =>
                      s.jsxs(
                        "div",
                        {
                          className: `border rounded-lg p-4 ${
                            T.has(_.GUID)
                              ? "bg-blue-50 border-blue-200"
                              : "bg-gray-50"
                          }`,
                          children: [
                            s.jsx("div", {
                              className: "mb-2",
                              children: A(_)
                                ? _.Result === "辨識失敗" ||
                                  _.check === "辨識失敗" ||
                                  _._isFailed
                                  ? s.jsxs("span", {
                                      className:
                                        "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800",
                                      children: [
                                        s.jsx(Dt, {
                                          className: "w-3 h-3 mr-1",
                                        }),
                                        _._isFailed ? "分析失敗" : "辨識失敗",
                                      ],
                                    })
                                  : s.jsxs("span", {
                                      className:
                                        "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800",
                                      children: [
                                        s.jsx(Dt, {
                                          className: "w-3 h-3 mr-1",
                                        }),
                                        "可送出",
                                      ],
                                    })
                                : s.jsx(s.Fragment, {
                                    children:
                                      _.Result === "辨識失敗" ||
                                      _.check === "辨識失敗"
                                        ? s.jsxs("span", {
                                            className:
                                              "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800",
                                            children: [
                                              s.jsx(it, {
                                                className: "w-3 h-3 mr-1",
                                              }),
                                              "辨識失敗",
                                            ],
                                          })
                                        : s.jsxs("span", {
                                            className:
                                              "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800",
                                            children: [
                                              s.jsx(it, {
                                                className: "w-3 h-3 mr-1",
                                              }),
                                              "缺少必要資料",
                                            ],
                                          }),
                                  }),
                            }),
                            s.jsxs("div", {
                              className: "mb-4",
                              children: [
                                s.jsxs("div", {
                                  className:
                                    "flex items-center justify-between mb-2",
                                  children: [
                                    s.jsxs("h4", {
                                      className:
                                        "text-md font-medium text-gray-900",
                                      children: ["分析結果 #", ee + 1],
                                    }),
                                    s.jsx("div", {
                                      className: "flex gap-2",
                                      children:
                                        I === _.GUID
                                          ? s.jsxs(s.Fragment, {
                                              children: [
                                                s.jsxs("button", {
                                                  onClick: () => G(_),
                                                  disabled: v === _.GUID,
                                                  className:
                                                    "px-2 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700 transition-colors flex items-center",
                                                  children: [
                                                    v === _.GUID
                                                      ? s.jsx(ce, {
                                                          size: "small",
                                                          className: "mr-1",
                                                        })
                                                      : s.jsx(Vm, {
                                                          className:
                                                            "w-3 h-3 mr-1",
                                                        }),
                                                    "儲存",
                                                  ],
                                                }),
                                                s.jsxs("button", {
                                                  onClick: B,
                                                  disabled: v === _.GUID,
                                                  className:
                                                    "px-2 py-1 bg-gray-500 text-white text-xs rounded hover:bg-gray-600 transition-colors flex items-center",
                                                  children: [
                                                    s.jsx(Zd, {
                                                      className: "w-3 h-3 mr-1",
                                                    }),
                                                    "取消",
                                                  ],
                                                }),
                                              ],
                                            })
                                          : s.jsxs(s.Fragment, {
                                              children: [
                                                s.jsxs("button", {
                                                  onClick: () => te(_),
                                                  className:
                                                    "px-2 py-1 bg-orange-600 text-white text-xs rounded hover:bg-orange-700 transition-colors flex items-center",
                                                  children: [
                                                    s.jsx(la, {
                                                      className: "w-3 h-3 mr-1",
                                                    }),
                                                    "編輯",
                                                  ],
                                                }),
                                                (() => {
                                                  const H = j(_);
                                                  return s.jsxs("button", {
                                                    onClick: () => z(_),
                                                    className: `px-2 py-1 text-xs rounded transition-colors flex items-center ${
                                                      H.canPair
                                                        ? "bg-blue-600 text-white hover:bg-blue-700"
                                                        : "bg-gray-400 text-white cursor-not-allowed"
                                                    }`,
                                                    disabled: !H.canPair,
                                                    title: H.canPair
                                                      ? ""
                                                      : H.reason,
                                                    children: [
                                                      s.jsx(ui, {
                                                        className:
                                                          "w-3 h-3 mr-1",
                                                      }),
                                                      H.canPair
                                                        ? "配對"
                                                        : H.reason,
                                                    ],
                                                  });
                                                })(),
                                              ],
                                            }),
                                    }),
                                  ],
                                }),
                                _.base64 &&
                                  s.jsx("div", {
                                    className: "mb-4",
                                    children: s.jsxs("div", {
                                      className:
                                        "relative group cursor-pointer",
                                      onClick: () => E(_, ee),
                                      children: [
                                        s.jsx("img", {
                                          src: _.base64.startsWith("data:")
                                            ? _.base64
                                            : `data:image/jpeg;base64,${_.base64}`,
                                          alt: `出貨單 ${ee + 1}`,
                                          className:
                                            "w-full h-32 object-cover rounded border hover:opacity-80 transition-opacity",
                                        }),
                                        s.jsx("div", {
                                          className:
                                            "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-30 rounded pointer-events-none",
                                          children: s.jsx(Ym, {
                                            className: "w-8 h-8 text-white",
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                              ],
                            }),
                            s.jsxs("div", {
                              className: "space-y-3",
                              children: [
                                s.jsxs("div", {
                                  className: "bg-blue-50 rounded-lg p-3",
                                  children: [
                                    s.jsxs("h5", {
                                      className:
                                        "text-sm font-medium text-blue-800 mb-2 flex items-center",
                                      children: [
                                        s.jsx(In, {
                                          className: "w-4 h-4 mr-1",
                                        }),
                                        "藥品資訊",
                                      ],
                                    }),
                                    s.jsxs("div", {
                                      className: "space-y-1 text-sm",
                                      children: [
                                        s.jsxs("div", {
                                          children: [
                                            s.jsx("span", {
                                              className: "text-blue-600",
                                              children: "藥名:",
                                            }),
                                            s.jsx("span", {
                                              className:
                                                "font-medium text-blue-900 ml-1",
                                              children: _.name,
                                            }),
                                          ],
                                        }),
                                        _.cht_name &&
                                          s.jsxs("div", {
                                            children: [
                                              s.jsx("span", {
                                                className: "text-blue-600",
                                                children: "中文名:",
                                              }),
                                              s.jsx("span", {
                                                className:
                                                  "font-medium text-blue-900 ml-1",
                                                children: _.cht_name,
                                              }),
                                            ],
                                          }),
                                        s.jsxs("div", {
                                          children: [
                                            s.jsx("span", {
                                              className: "text-blue-600",
                                              children: "藥品碼:",
                                            }),
                                            s.jsx("span", {
                                              className:
                                                "font-medium text-blue-900 ml-1",
                                              children: _.code,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                s.jsxs("div", {
                                  className:
                                    "bg-green-50 rounded-lg p-3 border-2 border-green-200",
                                  children: [
                                    s.jsx("h5", {
                                      className:
                                        "text-sm font-medium text-green-800 mb-2",
                                      children: "請購單號",
                                    }),
                                    I === _.GUID
                                      ? s.jsx("input", {
                                          type: "text",
                                          value: d.po_num,
                                          onChange: (H) =>
                                            p((oe) => ({
                                              ...oe,
                                              po_num: H.target.value,
                                            })),
                                          className:
                                            "w-full px-2 py-1 text-center text-lg font-bold border border-green-300 rounded focus:ring-2 focus:ring-green-500 focus:border-green-500",
                                          placeholder: "請輸入請購單號",
                                        })
                                      : s.jsx("div", {
                                          className: "text-center",
                                          children: s.jsx("div", {
                                            className:
                                              "text-2xl font-bold text-green-700",
                                            children: _.po_num,
                                          }),
                                        }),
                                  ],
                                }),
                                _.qty &&
                                  s.jsxs("div", {
                                    className:
                                      "bg-orange-50 rounded-lg p-3 border-2 border-orange-200",
                                    children: [
                                      s.jsx("h5", {
                                        className:
                                          "text-sm font-medium text-orange-800 mb-2",
                                        children: "數量",
                                      }),
                                      I === _.GUID
                                        ? s.jsx("input", {
                                            type: "number",
                                            value: d.qty,
                                            onChange: (H) =>
                                              p((oe) => ({
                                                ...oe,
                                                qty: H.target.value,
                                              })),
                                            className:
                                              "w-full px-2 py-1 text-center text-2xl font-bold border border-orange-300 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500",
                                            placeholder: "請輸入數量",
                                          })
                                        : s.jsx("div", {
                                            className: "text-center",
                                            children: s.jsx("div", {
                                              className:
                                                "text-3xl font-bold text-orange-700",
                                              children: _.qty,
                                            }),
                                          }),
                                    ],
                                  }),
                                s.jsxs("div", {
                                  className: "bg-yellow-50 rounded-lg p-3",
                                  children: [
                                    s.jsx("h5", {
                                      className:
                                        "text-sm font-medium text-yellow-800 mb-2",
                                      children: "批號",
                                    }),
                                    _._isFailed
                                      ? s.jsxs("div", {
                                          className:
                                            "text-xs text-red-600 bg-red-50 px-2 py-1 rounded",
                                          children: [
                                            "失敗原因: ",
                                            _._failureReason,
                                          ],
                                        })
                                      : I === _.GUID
                                      ? s.jsx("input", {
                                          type: "text",
                                          value: d.batch_num,
                                          onChange: (H) =>
                                            p((oe) => ({
                                              ...oe,
                                              batch_num: H.target.value,
                                            })),
                                          className:
                                            "w-full px-2 py-1 text-center text-lg font-bold border border-yellow-300 rounded focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500",
                                          placeholder: "請輸入批號",
                                        })
                                      : s.jsx("div", {
                                          className: "text-center",
                                          children: s.jsx("div", {
                                            className:
                                              "text-lg font-bold text-yellow-900",
                                            children: _.batch_num,
                                          }),
                                        }),
                                  ],
                                }),
                                s.jsxs("div", {
                                  className: "bg-purple-50 rounded-lg p-3",
                                  children: [
                                    s.jsx("h5", {
                                      className:
                                        "text-sm font-medium text-purple-800 mb-2",
                                      children: "效期",
                                    }),
                                    I === _.GUID
                                      ? s.jsx("input", {
                                          type: "date",
                                          value: d.expirydate,
                                          onChange: (H) =>
                                            p((oe) => ({
                                              ...oe,
                                              expirydate: H.target.value,
                                            })),
                                          className:
                                            "w-full px-2 py-1 text-center text-lg font-bold border border-purple-300 rounded focus:ring-2 focus:ring-purple-500 focus:border-purple-500",
                                        })
                                      : s.jsx("div", {
                                          className: "text-center",
                                          children: s.jsx("div", {
                                            className:
                                              "text-lg font-bold text-purple-900",
                                            children: rt(_.expirydate),
                                          }),
                                        }),
                                  ],
                                }),
                                s.jsxs("div", {
                                  className: "bg-gray-100 rounded-lg p-3",
                                  children: [
                                    s.jsx("h5", {
                                      className:
                                        "text-sm font-medium text-gray-800 mb-2",
                                      children: "其他資訊",
                                    }),
                                    s.jsxs("div", {
                                      className: "space-y-1 text-xs",
                                      children: [
                                        s.jsxs("div", {
                                          className: "flex justify-between",
                                          children: [
                                            s.jsx("span", {
                                              className: "text-gray-600",
                                              children: "驗收單號:",
                                            }),
                                            s.jsx("span", {
                                              className:
                                                "font-medium text-gray-900",
                                              children: _.IC_SN,
                                            }),
                                          ],
                                        }),
                                        s.jsxs("div", {
                                          className: "flex justify-between",
                                          children: [
                                            s.jsx("span", {
                                              className: "text-gray-600",
                                              children: "操作人員:",
                                            }),
                                            s.jsx("span", {
                                              className:
                                                "font-medium text-gray-900",
                                              children: _.op_name,
                                            }),
                                          ],
                                        }),
                                        s.jsxs("div", {
                                          className: "flex justify-between",
                                          children: [
                                            s.jsx("span", {
                                              className: "text-gray-600",
                                              children: "辨識時間:",
                                            }),
                                            s.jsx("span", {
                                              className:
                                                "font-medium text-gray-900",
                                              children: _.op_time,
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
                        },
                        ee
                      )
                    ),
                  }),
                ],
              }),
              P &&
                s.jsxs("div", {
                  className:
                    "mx-6 mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm flex items-center",
                  children: [
                    s.jsx(it, { className: "w-4 h-4 mr-2 flex-shrink-0" }),
                    P,
                  ],
                }),
              s.jsxs("div", {
                className: "flex justify-end p-6 border-t bg-gray-50",
                children: [
                  s.jsx("div", {
                    className: "text-sm text-gray-600 flex items-center",
                    children: s.jsxs("div", {
                      className: "mr-4",
                      children: [
                        "可送出: ",
                        o.filter((_) => A(_) && !T.has(_.GUID)).length,
                        " 筆 | 已送出: ",
                        T.size,
                        " 筆 | 未送出: ",
                        o.filter((_) => !T.has(_.GUID)).length,
                        " 筆",
                      ],
                    }),
                  }),
                  s.jsxs("div", {
                    className: "flex gap-3",
                    children: [
                      s.jsx("button", {
                        onClick: Y,
                        disabled:
                          k ||
                          o.filter((_) => A(_) && !T.has(_.GUID)).length === 0,
                        className:
                          "px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center",
                        children: k
                          ? s.jsxs(s.Fragment, {
                              children: [
                                s.jsx(ce, { size: "small", className: "mr-2" }),
                                "送出中...",
                              ],
                            })
                          : s.jsxs(s.Fragment, {
                              children: [
                                s.jsx(Jd, { className: "w-4 h-4 mr-2" }),
                                "確認送出 (",
                                o.filter((_) => A(_) && !T.has(_.GUID)).length,
                                ")",
                              ],
                            }),
                      }),
                      s.jsx("button", {
                        onClick: re,
                        className:
                          "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
                        disabled: k,
                        children: "關閉",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        s.jsx(xg, {
          isOpen: !!h,
          onClose: () => m(null),
          imageUrl: (h == null ? void 0 : h.url) || "",
          title: (h == null ? void 0 : h.title) || "",
        }),
        s.jsx(gg, {
          isOpen: g.isOpen,
          onClose: () => x({ isOpen: !1, result: null }),
          analysisResult: g.result,
          onSuccess: (_) => O(_),
        }),
      ],
    });
  },
  vg = ({ message: e, type: t = "success", duration: n = 3e3, onClose: r }) => {
    const [o, l] = y.useState(!1),
      [i, a] = y.useState(!1);
    y.useEffect(() => {
      setTimeout(() => l(!0), 10);
      const m = setTimeout(() => {
        c();
      }, n);
      return () => clearTimeout(m);
    }, [n]);
    const c = () => {
        a(!0),
          setTimeout(() => {
            r();
          }, 300);
      },
      u = () => {
        switch (t) {
          case "success":
            return s.jsx(Dt, { className: "w-5 h-5 text-green-500" });
          case "error":
            return s.jsx(Zd, { className: "w-5 h-5 text-red-500" });
          case "warning":
            return s.jsx(it, { className: "w-5 h-5 text-yellow-500" });
          case "info":
            return s.jsx(Hm, { className: "w-5 h-5 text-blue-500" });
          default:
            return s.jsx(Dt, { className: "w-5 h-5 text-green-500" });
        }
      },
      h = () => {
        switch (t) {
          case "success":
            return "bg-green-50 border-green-200";
          case "error":
            return "bg-red-50 border-red-200";
          case "warning":
            return "bg-yellow-50 border-yellow-200";
          case "info":
            return "bg-blue-50 border-blue-200";
          default:
            return "bg-green-50 border-green-200";
        }
      };
    return s.jsx("div", {
      className: `fixed top-4 right-4 z-[9999] transition-all duration-300 ease-out ${
        o && !i ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`,
      children: s.jsxs("div", {
        className: `flex items-center gap-3 min-w-[300px] max-w-md p-4 rounded-lg shadow-lg border ${h()}`,
        children: [
          s.jsx("div", { className: "flex-shrink-0", children: u() }),
          s.jsx("div", {
            className: "flex-1 text-sm text-gray-800",
            children: e,
          }),
          s.jsx("button", {
            onClick: c,
            className:
              "flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors",
            children: s.jsx(Le, { className: "w-4 h-4" }),
          }),
        ],
      }),
    });
  },
  wg = ({ toasts: e, onRemove: t }) =>
    s.jsx(s.Fragment, {
      children: e.map((n, r) =>
        s.jsx(
          "div",
          {
            style: { top: `${4 + r * 80}px` },
            children: s.jsx(vg, {
              message: n.message,
              type: n.type,
              duration: n.duration,
              onClose: () => t(n.id),
            }),
          },
          n.id
        )
      ),
    }),
  bg = () => {
    const [e, t] = y.useState([]);
    return {
      toasts: e,
      showToast: (o, l = "success", i = 3e3) => {
        const a = `toast-${Date.now()}-${Math.random()}`;
        t((c) => [...c, { id: a, message: o, type: l, duration: i }]);
      },
      removeToast: (o) => {
        t((l) => l.filter((i) => i.id !== o));
      },
    };
  },
  _g = ({ isOpen: e, onClose: t, onDataUpdate: n }) => {
    const [r, o] = y.useState([]),
      [l, i] = y.useState(!1),
      [a, c] = y.useState(null),
      [u, h] = y.useState([]),
      [m, g] = y.useState(!1),
      x = y.useRef(null),
      b = y.useRef(null),
      [S, I] = y.useState(!1),
      { toasts: f, showToast: d, removeToast: p } = bg(),
      v = () => {
        o([]), c(null), h([]), x.current && (x.current.value = "");
      },
      w = () => {
        v(), t();
      },
      k = (E) => {
        const z = Array.from(E.target.files || []);
        if (z.length === 0) return;
        const te = z.map((B, G) =>
          B.type.startsWith("image/")
            ? B.size > 10 * 1024 * 1024
              ? {
                  id: `${Date.now()}-${G}`,
                  file: B,
                  previewUrl: "",
                  status: "error",
                  error: "檔案大小不可超過 10MB",
                }
              : {
                  id: `${Date.now()}-${G}`,
                  file: B,
                  previewUrl: "",
                  status: "pending",
                }
            : {
                id: `${Date.now()}-${G}`,
                file: B,
                previewUrl: "",
                status: "error",
                error: "請選擇圖片檔案",
              }
        );
        te.forEach((B) => {
          if (B.status === "pending") {
            const G = new FileReader();
            (G.onload = (j) => {
              o((O) =>
                O.map((A) => {
                  var Y;
                  return A.id === B.id
                    ? {
                        ...A,
                        previewUrl: (Y = j.target) == null ? void 0 : Y.result,
                      }
                    : A;
                })
              );
            }),
              G.readAsDataURL(B.file);
          }
        }),
          o((B) => [...B, ...te]),
          c(null);
      },
      D = (E) => {
        o((z) => z.filter((te) => te.id !== E));
      },
      P = (E) =>
        new Promise((z, te) => {
          const B = new FileReader();
          (B.onload = () => {
            const j = B.result.split(",")[1];
            z(j);
          }),
            (B.onerror = te),
            B.readAsDataURL(E);
        }),
      U = async (E) => {
        const z = aa(),
          te = ot();
        if (!z || !te) throw new Error("無法取得操作人資訊");
        try {
          o((O) =>
            O.map((A) => (A.id === E.id ? { ...A, status: "uploading" } : A))
          );
          const B = await P(E.file),
            G = { Data: [{ op_id: z, op_name: te, base64: B }] };
          console.log("=== PreSave API Request Debug ==="),
            console.log("File:", E.file.name),
            console.log("Request Data:", JSON.stringify(G, null, 2));
          const j = await je("/api/pcmpo/preSave", { method: "POST", body: G });
          if (
            (console.log("PreSave Response:", JSON.stringify(j, null, 2)),
            j.Code === 200 && j.Data && j.Data.length > 0)
          ) {
            const O = j.Data[0].GUID;
            return (
              o((A) =>
                A.map((Y) =>
                  Y.id === E.id ? { ...Y, status: "uploaded", guid: O } : Y
                )
              ),
              O
            );
          } else throw new Error(j.Result || "上傳失敗");
        } catch (B) {
          throw (
            (console.error("Upload error:", B),
            o((G) =>
              G.map((j) =>
                j.id === E.id
                  ? {
                      ...j,
                      status: "error",
                      error: B instanceof Error ? B.message : "上傳失敗",
                    }
                  : j
              )
            ),
            B)
          );
        }
      },
      T = async () => {
        const E = r.filter((z) => z.status === "pending" && z.previewUrl);
        if (E.length === 0) {
          c("請選擇有效的圖片檔案");
          return;
        }
        i(!0), c(null);
        try {
          console.log("=== 開始批次處理 ==="),
            console.log("待處理圖片數量:", E.length),
            console.log("第一階段：上傳圖片");
          const z = [];
          for (const B of E)
            try {
              const G = await U(B);
              G &&
                (z.push({ imageId: B.id, guid: G, imageItem: B }),
                console.log(`✅ 圖片 ${B.file.name} 上傳成功，GUID: ${G}`));
            } catch (G) {
              console.error(`❌ 圖片 ${B.file.name} 上傳失敗:`, G);
            }
          if (
            (console.log("上傳成功數量:", z.length),
            console.log(
              "上傳成功的結果:",
              z.map((B) => ({ fileName: B.imageItem.file.name, guid: B.guid }))
            ),
            z.length === 0)
          ) {
            c("所有圖片上傳失敗");
            return;
          }
          console.log("第二階段：分析圖片"),
            console.log("準備分析的圖片數量:", z.length),
            console.log(
              "準備分析的圖片GUIDs:",
              z.map((B) => B.guid)
            );
          const te = [];
          for (const B of z) {
            const { imageItem: G, guid: j } = B;
            console.log(`開始分析圖片: ${G.file.name}, GUID: ${j}`);
            try {
              o((Y) =>
                Y.map((re) =>
                  re.id === G.id ? { ...re, status: "analyzing" } : re
                )
              );
              const O = { ValueAry: [j] };
              console.log("=== Analyze Batch API Request Debug ==="),
                console.log("API URL:", "/api/pcmpo/analyze_batch"),
                console.log("Method:", "POST"),
                console.log("Request Data:", JSON.stringify(O, null, 2)),
                console.log("準備發送 API 請求...");
              const A = await je("/api/pcmpo/analyze_batch", {
                method: "POST",
                body: O,
              });
              console.log("API 請求已發送，等待回應..."),
                console.log(
                  "Analyze Batch Response:",
                  JSON.stringify(A, null, 2)
                ),
                A.Code === 200 && A.Data
                  ? (console.log(`✅ 圖片 ${G.file.name} 分析成功`),
                    o((Y) =>
                      Y.map((re) =>
                        re.id === G.id
                          ? {
                              ...re,
                              status: "analyzed",
                              analysisResult: A.Data,
                            }
                          : re
                      )
                    ),
                    Array.isArray(A.Data)
                      ? te.push(...A.Data)
                      : (te.push(A.Data),
                        A.Data
                          ? Array.isArray(A.Data)
                            ? te.push(...A.Data)
                            : te.push(A.Data)
                          : te.push({
                              GUID: j,
                              Result: A.Result || "分析失敗",
                              check: "辨識失敗",
                              base64: G.previewUrl,
                              op_name: ot(),
                              op_time: new Date().toLocaleString("zh-TW"),
                              po_num: "",
                              qty: "",
                              batch_num: "",
                              expirydate: "",
                              name: "",
                              cht_name: "",
                              code: "",
                            })))
                  : (console.log(`❌ 圖片 ${G.file.name} 分析失敗:`, A.Result),
                    o((Y) =>
                      Y.map((re) =>
                        re.id === G.id
                          ? {
                              ...re,
                              status: "error",
                              error: A.Result || "分析失敗",
                            }
                          : re
                      )
                    ),
                    te.push({
                      GUID: j,
                      Result: A.Result || "分析失敗",
                      check: "辨識失敗",
                      base64: G.previewUrl,
                      op_name: ot(),
                      create_time: new Date().toLocaleString("zh-TW"),
                      po_num: "",
                      qty: "",
                      batch_num: "",
                      expirydate: "",
                      name: "",
                      cht_name: "",
                      code: "",
                      _isFailed: !0,
                      _failureReason: A.Result || "分析失敗",
                    }));
            } catch (O) {
              console.error(`❌ 圖片 ${G.file.name} 分析異常:`, O),
                o((A) =>
                  A.map((Y) =>
                    Y.id === G.id
                      ? {
                          ...Y,
                          status: "error",
                          error: O instanceof Error ? O.message : "分析失敗",
                        }
                      : Y
                  )
                ),
                te.push({
                  GUID: j,
                  Result: O instanceof Error ? O.message : "分析異常",
                  check: "辨識失敗",
                  base64: G.previewUrl,
                  op_name: ot(),
                  create_time: new Date().toLocaleString("zh-TW"),
                  po_num: "",
                  qty: "",
                  batch_num: "",
                  expirydate: "",
                  name: "",
                  cht_name: "",
                  code: "",
                  _isFailed: !0,
                  _failureReason: O instanceof Error ? O.message : "分析異常",
                });
            }
          }
          console.log("分析成功數量:", te.length),
            console.log("所有分析結果:", te),
            console.log("=== 批次處理完成 ==="),
            te.length > 0 ? (h(te), g(!0)) : c("沒有成功的分析結果");
        } catch (z) {
          console.error("Batch process error:", z),
            c(z instanceof Error ? z.message : "批次處理失敗");
        } finally {
          i(!1);
        }
      },
      M = async (E) => {
        var B;
        const z = (B = E.target.files) == null ? void 0 : B[0];
        if (!z) return;
        if (!z.name.endsWith(".xlsx") && !z.name.endsWith(".xls")) {
          d("請選擇 Excel 檔案 (.xlsx 或 .xls)", "error"),
            b.current && (b.current.value = "");
          return;
        }
        const te = ot();
        if (!te) {
          d("無法取得操作人資訊", "error");
          return;
        }
        I(!0), c(null);
        try {
          console.log("=== 上傳出貨單 Excel ==="),
            console.log("檔案名稱:", z.name),
            console.log("操作人:", te);
          const G = await rg(z, te);
          console.log("上傳回應:", G),
            G.Code === 200
              ? (d(G.Result || "Excel 上傳成功", "success"),
                n && n(),
                b.current && (b.current.value = ""),
                setTimeout(() => {
                  w();
                }, 500))
              : d(G.Result || "Excel 上傳失敗", "error");
        } catch (G) {
          console.error("Excel 上傳失敗:", G);
          const j = G instanceof Error ? G.message : "Excel 上傳失敗";
          d(j, "error");
        } finally {
          I(!1);
        }
      },
      C = (E, z) => {
        switch (E) {
          case "pending":
            return s.jsx("span", {
              className: "text-gray-500",
              children: "待處理",
            });
          case "uploading":
            return s.jsxs("span", {
              className: "text-blue-500 flex items-center",
              children: [
                s.jsx(ce, { size: "small", className: "mr-1" }),
                "上傳中",
              ],
            });
          case "uploaded":
            return s.jsxs("span", {
              className: "text-green-500 flex items-center",
              children: [s.jsx(Dt, { className: "w-4 h-4 mr-1" }), "已上傳"],
            });
          case "analyzing":
            return s.jsxs("span", {
              className: "text-blue-500 flex items-center",
              children: [
                s.jsx(ce, { size: "small", className: "mr-1" }),
                "分析中",
              ],
            });
          case "analyzed":
            return s.jsxs("span", {
              className: "text-green-500 flex items-center",
              children: [s.jsx(Dt, { className: "w-4 h-4 mr-1" }), "已完成"],
            });
          case "error":
            return s.jsxs("span", {
              className: "text-red-500 flex items-center",
              children: [s.jsx(it, { className: "w-4 h-4 mr-1" }), z || "錯誤"],
            });
          default:
            return null;
        }
      };
    return e
      ? s.jsxs(s.Fragment, {
          children: [
            s.jsx(wg, { toasts: f, onRemove: p }),
            s.jsx("div", {
              className:
                "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
              children: s.jsxs("div", {
                className:
                  "bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden",
                children: [
                  s.jsxs("div", {
                    className: "flex items-center justify-between p-6 border-b",
                    children: [
                      s.jsxs("div", {
                        className: "flex-1",
                        children: [
                          s.jsxs("h3", {
                            className:
                              "text-lg font-semibold text-gray-900 flex items-center",
                            children: [
                              s.jsx(fr, { className: "w-5 h-5 mr-2" }),
                              "批次上傳出貨單",
                            ],
                          }),
                          s.jsx("p", {
                            className: "text-sm text-gray-600 mt-1",
                            children: "可同時上傳多張出貨單圖片進行批次分析",
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          s.jsxs("div", {
                            children: [
                              s.jsx("input", {
                                ref: b,
                                type: "file",
                                accept: ".xlsx,.xls",
                                onChange: M,
                                className: "hidden",
                              }),
                              s.jsx("button", {
                                onClick: () => {
                                  var E;
                                  return (E = b.current) == null
                                    ? void 0
                                    : E.click();
                                },
                                disabled: S || l,
                                className:
                                  "inline-flex items-center px-3 py-2 text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                title: "上傳出貨單 Excel",
                                children: S
                                  ? s.jsxs(s.Fragment, {
                                      children: [
                                        s.jsx(ce, {
                                          size: "small",
                                          className: "mr-2",
                                        }),
                                        "上傳中...",
                                      ],
                                    })
                                  : s.jsxs(s.Fragment, {
                                      children: [
                                        s.jsx(ci, {
                                          className: "w-4 h-4 mr-2",
                                        }),
                                        "上傳 Excel",
                                      ],
                                    }),
                              }),
                            ],
                          }),
                          s.jsx("button", {
                            onClick: w,
                            className:
                              "text-gray-400 hover:text-gray-600 transition-colors",
                            children: s.jsx(Le, { className: "w-6 h-6" }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "p-6 overflow-y-auto max-h-[calc(90vh-200px)]",
                    children: [
                      a &&
                        s.jsxs("div", {
                          className:
                            "mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm flex items-center",
                          children: [
                            s.jsx(it, {
                              className: "w-4 h-4 mr-2 flex-shrink-0",
                            }),
                            a,
                          ],
                        }),
                      s.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          s.jsxs("div", {
                            children: [
                              s.jsx("label", {
                                className:
                                  "block text-sm font-medium text-gray-700 mb-2",
                                children: "選擇圖片檔案（可多選）",
                              }),
                              s.jsxs("div", {
                                className:
                                  "border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors cursor-pointer",
                                onClick: () => {
                                  var E;
                                  return (E = x.current) == null
                                    ? void 0
                                    : E.click();
                                },
                                children: [
                                  s.jsx("input", {
                                    ref: x,
                                    type: "file",
                                    accept: "image/*",
                                    multiple: !0,
                                    onChange: k,
                                    className: "hidden",
                                  }),
                                  s.jsxs("div", {
                                    className: "space-y-2",
                                    children: [
                                      s.jsx(Yd, {
                                        className:
                                          "w-12 h-12 text-gray-400 mx-auto",
                                      }),
                                      s.jsxs("div", {
                                        children: [
                                          s.jsx("p", {
                                            className: "text-sm text-gray-600",
                                            children: "點擊選擇圖片檔案",
                                          }),
                                          s.jsx("p", {
                                            className: "text-xs text-gray-500",
                                            children:
                                              "支援 JPG, PNG, GIF 等格式，可同時選擇多個檔案",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          r.length > 0 &&
                            s.jsxs("div", {
                              children: [
                                s.jsxs("h4", {
                                  className:
                                    "text-sm font-medium text-gray-700 mb-3",
                                  children: [
                                    "已選擇的圖片 (",
                                    r.length,
                                    " 張)",
                                  ],
                                }),
                                s.jsx("div", {
                                  className:
                                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                                  children: r.map((E) =>
                                    s.jsxs(
                                      "div",
                                      {
                                        className: "border rounded-lg p-3",
                                        children: [
                                          s.jsxs("div", {
                                            className:
                                              "flex items-start justify-between mb-2",
                                            children: [
                                              s.jsxs("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                  s.jsx("p", {
                                                    className:
                                                      "text-sm font-medium text-gray-900 truncate",
                                                    children: E.file.name,
                                                  }),
                                                  s.jsxs("p", {
                                                    className:
                                                      "text-xs text-gray-500",
                                                    children: [
                                                      (
                                                        E.file.size /
                                                        1024 /
                                                        1024
                                                      ).toFixed(2),
                                                      " MB",
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              s.jsx("button", {
                                                onClick: () => D(E.id),
                                                className:
                                                  "ml-2 text-red-500 hover:text-red-700",
                                                disabled: l,
                                                children: s.jsx(Pn, {
                                                  className: "w-4 h-4",
                                                }),
                                              }),
                                            ],
                                          }),
                                          E.previewUrl &&
                                            s.jsx("img", {
                                              src: E.previewUrl,
                                              alt: "預覽",
                                              className:
                                                "w-full h-32 object-cover rounded mb-2",
                                            }),
                                          s.jsx("div", {
                                            className: "text-xs",
                                            children: C(E.status, E.error),
                                          }),
                                        ],
                                      },
                                      E.id
                                    )
                                  ),
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className:
                      "flex justify-between items-center p-6 border-t bg-gray-50",
                    children: [
                      s.jsx("div", {
                        className: "text-sm text-gray-600",
                        children:
                          r.length > 0 &&
                          s.jsxs("span", {
                            children: [
                              "共 ",
                              r.length,
                              " 張圖片 | 待處理: ",
                              r.filter((E) => E.status === "pending").length,
                              " | 已完成: ",
                              r.filter((E) => E.status === "analyzed").length,
                              " | 錯誤: ",
                              r.filter((E) => E.status === "error").length,
                            ],
                          }),
                      }),
                      s.jsxs("div", {
                        className: "flex gap-3",
                        children: [
                          s.jsx("button", {
                            type: "button",
                            onClick: w,
                            className:
                              "px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",
                            disabled: l,
                            children: "取消",
                          }),
                          s.jsx("button", {
                            onClick: T,
                            disabled:
                              l ||
                              r.filter((E) => E.status === "pending").length ===
                                0,
                            className:
                              "px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center",
                            children: l
                              ? s.jsxs(s.Fragment, {
                                  children: [
                                    s.jsx(ce, {
                                      size: "small",
                                      className: "mr-2",
                                    }),
                                    "處理中...",
                                  ],
                                })
                              : s.jsxs(s.Fragment, {
                                  children: [
                                    s.jsx(fr, { className: "w-4 h-4 mr-2" }),
                                    "開始批次處理",
                                  ],
                                }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            s.jsx(yg, {
              isOpen: m,
              onClose: () => {
                g(!1), h([]), w();
              },
              results: u,
              onDataUpdate: n,
            }),
          ],
        })
      : null;
  },
  Pc = ({
    isOpen: e,
    onClose: t,
    inspections: n,
    title: r = "所有驗收單資料",
    onDataUpdate: o,
    isToday: l = !1,
    onDateRangeChange: i,
    initialDateRange: a,
  }) => {
    var mn, ys, vs, ws, bs;
    const [c, u] = ke.useState(new Set()),
      [h, m] = ke.useState(new Set()),
      [g, x] = ke.useState(null),
      [b, S] = ke.useState(!1),
      [I, f] = ke.useState(!1),
      [d, p] = ke.useState(""),
      [v, w] = ke.useState("00:00:00"),
      [k, D] = ke.useState(""),
      [P, U] = ke.useState("23:59:59"),
      [T, M] = ke.useState(null),
      [C, E] = ke.useState({ lot: "", endQty: "", val: "" }),
      [z, te] = ke.useState(null),
      [B, G] = ke.useState({
        isOpen: !1,
        subContent: null,
        inspectionItem: null,
      }),
      [j, O] = ke.useState(null),
      [A, Y] = ke.useState({ isOpen: !1, imageUrl: "", title: "" }),
      [re, rt] = ke.useState(null),
      [_, ee] = ke.useState(!1),
      { t: H } = ms();
    ke.useEffect(() => {
      if (l) {
        const Q = new Date().toISOString().split("T")[0];
        p(Q), D(Q), w("00:00:00"), U("23:59:59");
      } else if (a) {
        const [R, Q] = a,
          q = R.split(" "),
          Z = Q.split(" ");
        p(q[0]), w(q[1] || "00:00:00"), D(Z[0]), U(Z[1] || "23:59:59");
      }
    }, [l, a]);
    const he = tf() === "20",
      W = (R) => {
        if (!R) return "";
        try {
          const Q = new Date(R),
            q = new Date();
          Q.setHours(0, 0, 0, 0), q.setHours(0, 0, 0, 0);
          const Z = Q.getTime() - q.getTime(),
            ye = Math.ceil(Z / (1e3 * 60 * 60 * 24)),
            X = Q.toLocaleDateString("zh-TW", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }).replace(/\//g, "/");
          return ye === 0
            ? `${X} (${H("delivery.today")})`
            : ye < 0
            ? `${X} (${H("delivery.overdue")} ${Math.abs(ye)} ${H(
                "delivery.days"
              )})`
            : `${X} (${H("delivery.remaining")} ${ye} ${H("delivery.days")})`;
        } catch (Q) {
          return console.error("Error formatting arrival time:", Q), R;
        }
      },
      V = (R) => {
        if (!R) return "text-gray-500";
        try {
          const Q = new Date(R),
            q = new Date();
          Q.setHours(0, 0, 0, 0), q.setHours(0, 0, 0, 0);
          const Z = Q.getTime() - q.getTime(),
            ye = Math.ceil(Z / (1e3 * 60 * 60 * 24));
          return ye === 0
            ? "text-blue-600 font-medium"
            : ye < 0
            ? "text-red-600 font-medium"
            : "text-green-600 font-medium";
        } catch {
          return "text-gray-500";
        }
      },
      ie = (R) => {
        u((Q) => {
          const q = new Set(Q);
          return q.has(R) ? q.delete(R) : q.add(R), q;
        });
      },
      J = async (R, Q) => {
        if (!he) {
          x("您沒有權限執行此操作");
          return;
        }
        m((q) => new Set([...q, R.GUID])), x(null);
        try {
          console.log("=== Lock/Unlock Sub Content Debug ==="),
            console.log("Sub Content GUID:", R.GUID),
            console.log("Current State:", R.STATE),
            console.log("New State:", Q);
          const q = { ...R, STATE: Q };
          console.log("Update Data:", JSON.stringify(q, null, 2));
          const Z = await zr(q);
          console.log("Lock/Unlock Response:", JSON.stringify(Z, null, 2)),
            Z.Code === 200
              ? (console.log(`✅ ${Q === "已鎖定" ? "鎖定" : "解鎖"}成功`),
                o && o())
              : x(Z.Result || `${Q === "已鎖定" ? "鎖定" : "解鎖"}失敗`);
        } catch (q) {
          console.error("Lock/Unlock error:", q),
            x(
              q instanceof Error
                ? q.message
                : `${Q === "已鎖定" ? "鎖定" : "解鎖"}失敗`
            );
        } finally {
          m((q) => {
            const Z = new Set(q);
            return Z.delete(R.GUID), Z;
          });
        }
      },
      Ee = async () => {
        if (!he) {
          x("您沒有權限執行此操作");
          return;
        }
        const R = [];
        if (
          (n.forEach((Z) => {
            Z.Sub_content &&
              Z.Sub_content.length > 0 &&
              R.push(...Z.Sub_content);
          }),
          R.length === 0)
        ) {
          x("沒有可操作的子明細");
          return;
        }
        const Q = "已鎖定",
          q = "鎖定";
        S(!0), x(null);
        try {
          console.log(`=== 批次${q} Debug ===`),
            console.log("子明細數量:", R.length),
            console.log("目標狀態:", Q);
          let Z = 0,
            ye = 0;
          const X = [];
          for (const Je of R)
            try {
              const $ = { ...Je, STATE: Q },
                K = await zr($);
              K.Code === 200
                ? (Z++, console.log(`✅ ${Je.GUID} ${q}成功`))
                : (ye++,
                  X.push(`${Je.GUID}: ${K.Result}`),
                  console.log(`❌ ${Je.GUID} ${q}失敗:`, K.Result));
            } catch ($) {
              ye++;
              const K = $ instanceof Error ? $.message : "未知錯誤";
              X.push(`${Je.GUID}: ${K}`),
                console.error(`❌ ${Je.GUID} ${q}異常:`, $);
            }
          console.log(`=== 批次${q}結果 ===`),
            console.log("成功數量:", Z),
            console.log("失敗數量:", ye),
            Z > 0
              ? (o && o(),
                ye === 0
                  ? console.log(`✅ 批次${q}完全成功`)
                  : x(
                      `部分成功：${Z} 筆成功，${ye} 筆失敗。失敗原因：${X.join(
                        "; "
                      )}`
                    ))
              : x(`批次${q}失敗：${X.join("; ")}`);
        } catch (Z) {
          console.error(`批次${q}失敗:`, Z),
            x(Z instanceof Error ? Z.message : `批次${q}失敗`);
        } finally {
          S(!1);
        }
      },
      xr = (R) => {
        M(R);
        let Q = "";
        if (R.VAL)
          try {
            Q = new Date(R.VAL).toISOString().split("T")[0];
          } catch {
            console.warn("Invalid date format:", R.VAL);
          }
        E({ lot: R.LOT || "", endQty: R.END_QTY || "", val: Q });
      },
      Bo = () => {
        M(null), E({ lot: "", endQty: "", val: "" });
      },
      An = async (R) => {
        te(R.GUID), x(null);
        try {
          const Q = ot();
          if (!Q) {
            x("無法取得操作人資訊");
            return;
          }
          const q = C.val ? `${C.val} 00:00:00` : "",
            Z = { ...R, LOT: C.lot, END_QTY: C.endQty, VAL: q, OP: Q },
            ye = await zr(Z);
          ye.Code === 200
            ? (console.log("✅ 更新成功"), o && o(), M(null))
            : x(ye.Result || "更新失敗");
        } catch (Q) {
          console.error("更新失敗:", Q),
            x(Q instanceof Error ? Q.message : "更新失敗");
        } finally {
          te(null);
        }
      },
      yr = (R, Q) => {
        G({ isOpen: !0, subContent: R, inspectionItem: Q });
      },
      ps = async () => {
        const { subContent: R } = B;
        if (R) {
          O(R.GUID), x(null);
          try {
            const Q = await of(R.GUID, R.Master_GUID);
            Q.Code === 200
              ? (console.log("✅ 刪除成功"),
                o && o(),
                G({ isOpen: !1, subContent: null, inspectionItem: null }))
              : x(Q.Result || "刪除失敗");
          } catch (Q) {
            console.error("刪除失敗:", Q),
              x(Q instanceof Error ? Q.message : "刪除失敗");
          } finally {
            O(null);
          }
        }
      },
      gs = async (R, Q) => {
        rt(R);
        try {
          console.log("=== 查看驗收單圖片 ==="), console.log("Item GUID:", R);
          const q = await lf(R);
          if ((console.log("API Response:", q), q.Code === 200 && q.Data)) {
            const Z = q.Data;
            if ((console.log("Image Data:", Z), Z.base64)) {
              const ye = Z.base64.startsWith("data:")
                ? Z.base64
                : `data:image/jpeg;base64,${Z.base64}`;
              Y({ isOpen: !0, imageUrl: ye, title: `${Q} - 驗收單圖片` });
            } else alert("此驗收單沒有相關圖片");
          } else alert("查無此驗收單的圖片資料");
        } catch (q) {
          console.error("查看圖片失敗:", q), alert("查看圖片失敗，請稍後再試");
        } finally {
          rt(null);
        }
      },
      Ye = () => {
        if (i && d && k) {
          const R = `${d} ${v}`,
            Q = `${k} ${P}`;
          i(R, Q), f(!1);
        }
      },
      On = async () => {
        if (n.length === 0) {
          alert("無資料可下載");
          return;
        }
        ee(!0), x(null);
        try {
          console.log("=== 下載驗收明細 ==="),
            console.log("資料筆數:", n.length);
          const R = await ng(n);
          console.log("下載回應 Blob:", R);
          const Q = `驗收明細_${d || "all"}_${k || "all"}.xlsx`,
            q = window.URL.createObjectURL(R),
            Z = document.createElement("a");
          (Z.href = q),
            (Z.download = Q),
            document.body.appendChild(Z),
            Z.click(),
            document.body.removeChild(Z),
            window.URL.revokeObjectURL(q),
            console.log("✅ 下載成功");
        } catch (R) {
          console.error("下載失敗:", R),
            x(R instanceof Error ? R.message : "下載失敗");
        } finally {
          ee(!1);
        }
      },
      xs = ({ isOpen: R, onClose: Q, imageUrl: q, title: Z }) =>
        R
          ? s.jsx("div", {
              className:
                "fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-[60]",
              children: s.jsxs("div", {
                className: "relative max-w-[90vw] max-h-[90vh]",
                children: [
                  s.jsx("button", {
                    onClick: Q,
                    className:
                      "absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors",
                    children: s.jsx(Le, { className: "w-8 h-8" }),
                  }),
                  s.jsx("img", {
                    src: q,
                    alt: Z,
                    className:
                      "max-w-full max-h-full object-contain rounded-lg shadow-2xl",
                  }),
                  s.jsx("div", {
                    className:
                      "absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg",
                    children: s.jsx("p", {
                      className: "text-center text-sm",
                      children: Z,
                    }),
                  }),
                ],
              }),
            })
          : null;
    return e
      ? s.jsxs("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
          children: [
            s.jsxs("div", {
              className:
                "bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-hidden",
              children: [
                s.jsxs("div", {
                  className:
                    "flex items-center justify-between p-6 border-b bg-gray-50",
                  children: [
                    s.jsxs("div", {
                      children: [
                        s.jsxs("h3", {
                          className:
                            "text-lg font-semibold text-gray-900 flex items-center",
                          children: [
                            s.jsx(zo, { className: "w-5 h-5 mr-2" }),
                            r,
                            s.jsx("button", {
                              onClick: () => f(!I),
                              className:
                                "ml-2 text-gray-400 hover:text-gray-600 transition-colors",
                              title: "設定查詢日期範圍",
                              children: s.jsx(Qm, { className: "w-5 h-5" }),
                            }),
                          ],
                        }),
                        s.jsxs("p", {
                          className: "text-sm text-gray-600 mt-1",
                          children: ["共 ", n.length, " 筆驗收單"],
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        s.jsx("button", {
                          onClick: On,
                          disabled: _ || n.length === 0,
                          className:
                            "inline-flex items-center px-3 py-2 text-sm font-medium rounded-md bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                          title: "下載驗收明細 Excel",
                          children: _
                            ? s.jsxs(s.Fragment, {
                                children: [
                                  s.jsx(ce, {
                                    size: "small",
                                    className: "mr-2",
                                  }),
                                  "下載中...",
                                ],
                              })
                            : s.jsxs(s.Fragment, {
                                children: [
                                  s.jsx(Fm, { className: "w-4 h-4 mr-2" }),
                                  "下載明細",
                                ],
                              }),
                        }),
                        s.jsx("button", {
                          onClick: Ee,
                          disabled: !he || b || n.length === 0,
                          className: `inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                            he
                              ? "bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                              : "bg-gray-300 text-gray-500 cursor-not-allowed"
                          }`,
                          title: he
                            ? "批次鎖定/解鎖所有子明細"
                            : "需要管理員權限",
                          children: b
                            ? s.jsxs(s.Fragment, {
                                children: [
                                  s.jsx(ce, {
                                    size: "small",
                                    className: "mr-2",
                                  }),
                                  "處理中...",
                                ],
                              })
                            : s.jsxs(s.Fragment, {
                                children: [
                                  s.jsx(Nc, { className: "w-4 h-4 mr-2" }),
                                  "全部鎖定",
                                ],
                              }),
                        }),
                        s.jsx("button", {
                          onClick: t,
                          className:
                            "text-gray-400 hover:text-gray-600 transition-colors",
                          children: s.jsx(Le, { className: "w-6 h-6" }),
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "p-6 overflow-y-auto max-h-[calc(90vh-120px)]",
                  children: [
                    I &&
                      s.jsxs("div", {
                        className: "mb-6 p-4 bg-gray-50 rounded-lg border",
                        children: [
                          s.jsx("h4", {
                            className: "text-sm font-medium text-gray-700 mb-3",
                            children: "設定查詢日期範圍",
                          }),
                          s.jsxs("div", {
                            className:
                              "grid grid-cols-1 lg:grid-cols-2 gap-4 items-end",
                            children: [
                              s.jsxs("div", {
                                children: [
                                  s.jsx("label", {
                                    className:
                                      "block text-sm font-medium text-gray-700 mb-1",
                                    children: "開始日期時間",
                                  }),
                                  s.jsxs("div", {
                                    className: "flex gap-3",
                                    children: [
                                      s.jsx("input", {
                                        type: "date",
                                        value: d,
                                        onChange: (R) => p(R.target.value),
                                        className:
                                          "px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                      }),
                                      s.jsx("input", {
                                        type: "time",
                                        value: v,
                                        onChange: (R) => w(R.target.value),
                                        className:
                                          "px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        step: "1",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              s.jsxs("div", {
                                children: [
                                  s.jsx("label", {
                                    className:
                                      "block text-sm font-medium text-gray-700 mb-1",
                                    children: "結束日期時間",
                                  }),
                                  s.jsxs("div", {
                                    className: "flex gap-3",
                                    children: [
                                      s.jsx("input", {
                                        type: "date",
                                        value: k,
                                        onChange: (R) => D(R.target.value),
                                        className:
                                          "px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                      }),
                                      s.jsx("input", {
                                        type: "time",
                                        value: P,
                                        onChange: (R) => U(R.target.value),
                                        className:
                                          "px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        step: "1",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          s.jsx("div", {
                            className: "flex justify-end gap-2 mt-4",
                            children: s.jsx("button", {
                              onClick: Ye,
                              disabled: !d || !k || !v || !P,
                              className:
                                "px-3 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                              children: "送出",
                            }),
                          }),
                        ],
                      }),
                    g &&
                      s.jsx("div", {
                        className:
                          "mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm",
                        children: g,
                      }),
                    n.length === 0
                      ? s.jsxs("div", {
                          className: "text-center py-8",
                          children: [
                            s.jsx(In, {
                              className: "w-12 h-12 text-gray-400 mx-auto mb-4",
                            }),
                            s.jsx("p", {
                              className: "text-gray-600",
                              children: "查無驗收資料",
                            }),
                          ],
                        })
                      : s.jsx("div", {
                          className: "overflow-x-auto",
                          children: s.jsxs("table", {
                            className: "min-w-full divide-y divide-gray-200",
                            children: [
                              s.jsx("thead", {
                                className: "bg-gray-50",
                                children: s.jsxs("tr", {
                                  children: [
                                    s.jsx("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                      children: H("table.inspection_number"),
                                    }),
                                    s.jsx("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                      children: H("table.purchase_number"),
                                    }),
                                    s.jsx("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                      children: H("table.drug_code"),
                                    }),
                                    s.jsx("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                      children: H("table.item_number"),
                                    }),
                                    s.jsx("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                      children: H("table.drug_name"),
                                    }),
                                    s.jsx("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                      children: H("table.manufacturer"),
                                    }),
                                    s.jsx("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                      children: H("table.arrival_time"),
                                    }),
                                    s.jsx("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                      children: H(
                                        "table.received_expected_qty"
                                      ),
                                    }),
                                    s.jsx("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                    }),
                                  ],
                                }),
                              }),
                              s.jsx("tbody", {
                                className: "bg-white divide-y divide-gray-200",
                                children: n.map((R) => {
                                  var ye;
                                  const Q =
                                      ((ye = R.Sub_content) == null
                                        ? void 0
                                        : ye.reduce(
                                            (X, Je) =>
                                              X + (parseInt(Je.END_QTY) || 0),
                                            0
                                          )) || 0,
                                    q = c.has(R.GUID),
                                    Z =
                                      R.Sub_content && R.Sub_content.length > 0;
                                  return s.jsxs(s.Fragment, {
                                    children: [
                                      s.jsxs(
                                        "tr",
                                        {
                                          className: `hover:bg-gray-50 ${
                                            Z ? "cursor-pointer" : ""
                                          }`,
                                          onClick: () => Z && ie(R.GUID),
                                          children: [
                                            s.jsx("td", {
                                              className:
                                                "px-6 py-4 whitespace-nowrap",
                                              children: s.jsx("span", {
                                                className:
                                                  "text-sm font-medium text-gray-900",
                                                children: R.IC_SN,
                                              }),
                                            }),
                                            s.jsx("td", {
                                              className:
                                                "px-6 py-4 whitespace-nowrap",
                                              children: s.jsx("span", {
                                                className:
                                                  "text-sm text-gray-900",
                                                children: R.PON,
                                              }),
                                            }),
                                            s.jsx("td", {
                                              className:
                                                "px-6 py-4 whitespace-nowrap",
                                              children: s.jsx("span", {
                                                className:
                                                  "text-sm text-gray-900",
                                                children: R.CODE,
                                              }),
                                            }),
                                            s.jsx("td", {
                                              className:
                                                "px-6 py-4 whitespace-nowrap",
                                              children: s.jsx("span", {
                                                className:
                                                  "text-sm text-gray-900",
                                                children: R.SKDIACODE,
                                              }),
                                            }),
                                            s.jsx("td", {
                                              className: "px-6 py-4",
                                              children: s.jsxs("div", {
                                                className:
                                                  "text-sm text-gray-900",
                                                children: [
                                                  s.jsx("div", {
                                                    className: "font-medium",
                                                    children:
                                                      R.CHT_NAME || R.NAME,
                                                  }),
                                                  R.CHT_NAME &&
                                                    R.NAME &&
                                                    R.CHT_NAME !== R.NAME &&
                                                    s.jsx("div", {
                                                      className:
                                                        "text-gray-500 text-xs mt-1",
                                                      children: R.NAME,
                                                    }),
                                                ],
                                              }),
                                            }),
                                            s.jsx("td", {
                                              className:
                                                "px-6 py-4 whitespace-nowrap",
                                              children: s.jsx("span", {
                                                className:
                                                  "text-sm text-gray-900",
                                                children: R.BRD || "未指定",
                                              }),
                                            }),
                                            s.jsx("td", {
                                              className:
                                                "px-6 py-4 whitespace-nowrap",
                                              children: s.jsxs("div", {
                                                className: `text-sm flex items-center ${V(
                                                  R.DELIVERY_TIME
                                                )}`,
                                                children: [
                                                  s.jsx(ss, {
                                                    className:
                                                      "w-4 h-4 mr-1 text-gray-400",
                                                  }),
                                                  W(R.DELIVERY_TIME),
                                                ],
                                              }),
                                            }),
                                            s.jsx("td", {
                                              className:
                                                "px-6 py-4 whitespace-nowrap",
                                              children: s.jsxs("div", {
                                                className:
                                                  "text-sm text-gray-900",
                                                children: [
                                                  s.jsx("span", {
                                                    className:
                                                      "font-semibold text-green-600",
                                                    children:
                                                      Q.toLocaleString(),
                                                  }),
                                                  s.jsx("span", {
                                                    className:
                                                      "text-gray-400 mx-1",
                                                    children: "/",
                                                  }),
                                                  s.jsx("span", {
                                                    className:
                                                      "font-semibold text-blue-600",
                                                    children: parseInt(
                                                      R.START_QTY
                                                    ).toLocaleString(),
                                                  }),
                                                  s.jsx("span", {
                                                    className:
                                                      "text-gray-500 ml-1",
                                                    children: R.PAKAGE,
                                                  }),
                                                ],
                                              }),
                                            }),
                                            s.jsx("td", {
                                              className:
                                                "px-6 py-4 whitespace-nowrap text-right",
                                              children:
                                                Z &&
                                                (q
                                                  ? s.jsx(ai, {
                                                      className:
                                                        "w-5 h-5 text-gray-400",
                                                    })
                                                  : s.jsx(qd, {
                                                      className:
                                                        "w-5 h-5 text-gray-400",
                                                    })),
                                            }),
                                          ],
                                        },
                                        R.GUID
                                      ),
                                      q &&
                                        Z &&
                                        R.Sub_content.map((X, Je) =>
                                          s.jsx(
                                            "tr",
                                            {
                                              className: "bg-gray-50",
                                              children: s.jsx("td", {
                                                colSpan: 9,
                                                className: "px-6 py-4",
                                                children: s.jsxs("div", {
                                                  className:
                                                    "bg-white rounded-md p-4 border border-gray-200 ml-8",
                                                  children: [
                                                    s.jsxs("div", {
                                                      className:
                                                        "flex justify-between items-start mb-3",
                                                      children: [
                                                        s.jsxs("h6", {
                                                          className:
                                                            "text-sm font-medium text-gray-900",
                                                          children: [
                                                            "子明細資料 #",
                                                            Je + 1,
                                                          ],
                                                        }),
                                                        s.jsxs("div", {
                                                          className:
                                                            "flex gap-2",
                                                          children: [
                                                            X.STATE !==
                                                              "已鎖定" &&
                                                              s.jsx(
                                                                s.Fragment,
                                                                {
                                                                  children:
                                                                    (T == null
                                                                      ? void 0
                                                                      : T.GUID) ===
                                                                    X.GUID
                                                                      ? s.jsxs(
                                                                          s.Fragment,
                                                                          {
                                                                            children:
                                                                              [
                                                                                s.jsxs(
                                                                                  "button",
                                                                                  {
                                                                                    onClick:
                                                                                      () =>
                                                                                        An(
                                                                                          X
                                                                                        ),
                                                                                    disabled:
                                                                                      z ===
                                                                                      X.GUID,
                                                                                    className:
                                                                                      "inline-flex items-center px-2 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                                                                    children:
                                                                                      [
                                                                                        z ===
                                                                                        X.GUID
                                                                                          ? s.jsx(
                                                                                              ce,
                                                                                              {
                                                                                                size: "small",
                                                                                                className:
                                                                                                  "mr-1",
                                                                                              }
                                                                                            )
                                                                                          : s.jsx(
                                                                                              "svg",
                                                                                              {
                                                                                                className:
                                                                                                  "w-3 h-3 mr-1",
                                                                                                fill: "none",
                                                                                                stroke:
                                                                                                  "currentColor",
                                                                                                viewBox:
                                                                                                  "0 0 24 24",
                                                                                                children:
                                                                                                  s.jsx(
                                                                                                    "path",
                                                                                                    {
                                                                                                      strokeLinecap:
                                                                                                        "round",
                                                                                                      strokeLinejoin:
                                                                                                        "round",
                                                                                                      strokeWidth: 2,
                                                                                                      d: "M5 13l4 4L19 7",
                                                                                                    }
                                                                                                  ),
                                                                                              }
                                                                                            ),
                                                                                        "儲存",
                                                                                      ],
                                                                                  }
                                                                                ),
                                                                                s.jsxs(
                                                                                  "button",
                                                                                  {
                                                                                    onClick:
                                                                                      Bo,
                                                                                    disabled:
                                                                                      z ===
                                                                                      X.GUID,
                                                                                    className:
                                                                                      "inline-flex items-center px-2 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                                                                    children:
                                                                                      [
                                                                                        s.jsx(
                                                                                          Le,
                                                                                          {
                                                                                            className:
                                                                                              "w-3 h-3 mr-1",
                                                                                          }
                                                                                        ),
                                                                                        "取消",
                                                                                      ],
                                                                                  }
                                                                                ),
                                                                              ],
                                                                          }
                                                                        )
                                                                      : s.jsxs(
                                                                          s.Fragment,
                                                                          {
                                                                            children:
                                                                              [
                                                                                s.jsxs(
                                                                                  "button",
                                                                                  {
                                                                                    onClick:
                                                                                      () =>
                                                                                        xr(
                                                                                          X
                                                                                        ),
                                                                                    className:
                                                                                      "inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded hover:bg-gray-200 transition-colors",
                                                                                    title:
                                                                                      "編輯此子明細",
                                                                                    children:
                                                                                      [
                                                                                        s.jsx(
                                                                                          la,
                                                                                          {
                                                                                            className:
                                                                                              "w-3 h-3 mr-1",
                                                                                          }
                                                                                        ),
                                                                                        "編輯",
                                                                                      ],
                                                                                  }
                                                                                ),
                                                                                s.jsxs(
                                                                                  "button",
                                                                                  {
                                                                                    onClick:
                                                                                      () =>
                                                                                        yr(
                                                                                          X,
                                                                                          R
                                                                                        ),
                                                                                    disabled:
                                                                                      j ===
                                                                                      X.GUID,
                                                                                    className:
                                                                                      "inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                                                                    title:
                                                                                      "刪除此子明細",
                                                                                    children:
                                                                                      [
                                                                                        j ===
                                                                                        X.GUID
                                                                                          ? s.jsx(
                                                                                              ce,
                                                                                              {
                                                                                                size: "small",
                                                                                                className:
                                                                                                  "mr-1",
                                                                                              }
                                                                                            )
                                                                                          : s.jsx(
                                                                                              Pn,
                                                                                              {
                                                                                                className:
                                                                                                  "w-3 h-3 mr-1",
                                                                                              }
                                                                                            ),
                                                                                        "刪除",
                                                                                      ],
                                                                                  }
                                                                                ),
                                                                              ],
                                                                          }
                                                                        ),
                                                                }
                                                              ),
                                                            s.jsxs("button", {
                                                              onClick: () =>
                                                                gs(
                                                                  R.GUID,
                                                                  R.CHT_NAME ||
                                                                    R.NAME
                                                                ),
                                                              disabled:
                                                                re === R.GUID,
                                                              className:
                                                                "inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                                              title:
                                                                "查看驗收單圖片",
                                                              children: [
                                                                re === R.GUID
                                                                  ? s.jsx(ce, {
                                                                      size: "small",
                                                                      className:
                                                                        "mr-1",
                                                                    })
                                                                  : s.jsx(Kd, {
                                                                      className:
                                                                        "w-3 h-3 mr-1",
                                                                    }),
                                                                "查看",
                                                              ],
                                                            }),
                                                            he &&
                                                              s.jsx("div", {
                                                                className:
                                                                  "flex gap-2",
                                                                children:
                                                                  X.STATE ===
                                                                  "未鎖定"
                                                                    ? s.jsxs(
                                                                        "button",
                                                                        {
                                                                          onClick:
                                                                            () =>
                                                                              J(
                                                                                X,
                                                                                "已鎖定"
                                                                              ),
                                                                          disabled:
                                                                            h.has(
                                                                              X.GUID
                                                                            ),
                                                                          className:
                                                                            "inline-flex items-center px-2 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                                                          title:
                                                                            "鎖定此子明細",
                                                                          children:
                                                                            [
                                                                              h.has(
                                                                                X.GUID
                                                                              )
                                                                                ? s.jsx(
                                                                                    ce,
                                                                                    {
                                                                                      size: "small",
                                                                                      className:
                                                                                        "mr-1",
                                                                                    }
                                                                                  )
                                                                                : s.jsx(
                                                                                    Nc,
                                                                                    {
                                                                                      className:
                                                                                        "w-3 h-3 mr-1",
                                                                                    }
                                                                                  ),
                                                                              "鎖定",
                                                                            ],
                                                                        }
                                                                      )
                                                                    : s.jsxs(
                                                                        "button",
                                                                        {
                                                                          onClick:
                                                                            () =>
                                                                              J(
                                                                                X,
                                                                                "未鎖定"
                                                                              ),
                                                                          disabled:
                                                                            h.has(
                                                                              X.GUID
                                                                            ),
                                                                          className:
                                                                            "inline-flex items-center px-2 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                                                          title:
                                                                            "解鎖此子明細",
                                                                          children:
                                                                            [
                                                                              h.has(
                                                                                X.GUID
                                                                              )
                                                                                ? s.jsx(
                                                                                    ce,
                                                                                    {
                                                                                      size: "small",
                                                                                      className:
                                                                                        "mr-1",
                                                                                    }
                                                                                  )
                                                                                : s.jsx(
                                                                                    Km,
                                                                                    {
                                                                                      className:
                                                                                        "w-3 h-3 mr-1",
                                                                                    }
                                                                                  ),
                                                                              "解鎖",
                                                                            ],
                                                                        }
                                                                      ),
                                                              }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    (T == null
                                                      ? void 0
                                                      : T.GUID) === X.GUID
                                                      ? s.jsxs("div", {
                                                          className:
                                                            "grid grid-cols-1 md:grid-cols-3 gap-4",
                                                          children: [
                                                            s.jsxs("div", {
                                                              children: [
                                                                s.jsx("label", {
                                                                  className:
                                                                    "block text-xs font-medium text-gray-500 uppercase mb-1",
                                                                  children:
                                                                    "批號",
                                                                }),
                                                                s.jsx("input", {
                                                                  type: "text",
                                                                  value: C.lot,
                                                                  onChange: (
                                                                    $
                                                                  ) =>
                                                                    E((K) => ({
                                                                      ...K,
                                                                      lot: $
                                                                        .target
                                                                        .value,
                                                                    })),
                                                                  className:
                                                                    "w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                }),
                                                              ],
                                                            }),
                                                            s.jsxs("div", {
                                                              children: [
                                                                s.jsx("label", {
                                                                  className:
                                                                    "block text-xs font-medium text-gray-500 uppercase mb-1",
                                                                  children:
                                                                    "實收數量",
                                                                }),
                                                                s.jsx("input", {
                                                                  type: "number",
                                                                  value:
                                                                    C.endQty,
                                                                  onChange: (
                                                                    $
                                                                  ) =>
                                                                    E((K) => ({
                                                                      ...K,
                                                                      endQty:
                                                                        $.target
                                                                          .value,
                                                                    })),
                                                                  className:
                                                                    "w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                }),
                                                              ],
                                                            }),
                                                            s.jsxs("div", {
                                                              children: [
                                                                s.jsx("label", {
                                                                  className:
                                                                    "block text-xs font-medium text-gray-500 uppercase mb-1",
                                                                  children:
                                                                    "效期",
                                                                }),
                                                                s.jsx("input", {
                                                                  type: "date",
                                                                  value: C.val,
                                                                  onChange: (
                                                                    $
                                                                  ) =>
                                                                    E((K) => ({
                                                                      ...K,
                                                                      val: $
                                                                        .target
                                                                        .value,
                                                                    })),
                                                                  className:
                                                                    "w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                }),
                                                              ],
                                                            }),
                                                          ],
                                                        })
                                                      : s.jsxs("div", {
                                                          className:
                                                            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                                                          children: [
                                                            s.jsxs("div", {
                                                              children: [
                                                                s.jsx("h6", {
                                                                  className:
                                                                    "text-xs font-medium text-gray-500 uppercase mb-1",
                                                                  children:
                                                                    "數量資訊",
                                                                }),
                                                                s.jsx("div", {
                                                                  className:
                                                                    "text-sm space-y-1",
                                                                  children:
                                                                    s.jsxs(
                                                                      "div",
                                                                      {
                                                                        children:
                                                                          [
                                                                            s.jsx(
                                                                              "span",
                                                                              {
                                                                                className:
                                                                                  "text-gray-500",
                                                                                children:
                                                                                  "實收:",
                                                                              }
                                                                            ),
                                                                            " ",
                                                                            s.jsxs(
                                                                              "span",
                                                                              {
                                                                                className:
                                                                                  "font-medium text-green-600",
                                                                                children:
                                                                                  [
                                                                                    X.END_QTY,
                                                                                    " ",
                                                                                    X.PAKAGE,
                                                                                  ],
                                                                              }
                                                                            ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                }),
                                                              ],
                                                            }),
                                                            s.jsxs("div", {
                                                              children: [
                                                                s.jsx("h6", {
                                                                  className:
                                                                    "text-xs font-medium text-gray-500 uppercase mb-1",
                                                                  children:
                                                                    "效期批號",
                                                                }),
                                                                s.jsxs("div", {
                                                                  className:
                                                                    "text-sm space-y-1",
                                                                  children: [
                                                                    s.jsxs(
                                                                      "div",
                                                                      {
                                                                        children:
                                                                          [
                                                                            s.jsx(
                                                                              "span",
                                                                              {
                                                                                className:
                                                                                  "text-gray-500",
                                                                                children:
                                                                                  "效期:",
                                                                              }
                                                                            ),
                                                                            " ",
                                                                            X.VAL
                                                                              ? new Date(
                                                                                  X.VAL
                                                                                )
                                                                                  .toLocaleDateString(
                                                                                    "zh-TW",
                                                                                    {
                                                                                      year: "numeric",
                                                                                      month:
                                                                                        "2-digit",
                                                                                      day: "2-digit",
                                                                                    }
                                                                                  )
                                                                                  .replace(
                                                                                    /\//g,
                                                                                    "/"
                                                                                  )
                                                                              : "",
                                                                          ],
                                                                      }
                                                                    ),
                                                                    s.jsxs(
                                                                      "div",
                                                                      {
                                                                        children:
                                                                          [
                                                                            s.jsx(
                                                                              "span",
                                                                              {
                                                                                className:
                                                                                  "text-gray-500",
                                                                                children:
                                                                                  "批號:",
                                                                              }
                                                                            ),
                                                                            " ",
                                                                            X.LOT,
                                                                          ],
                                                                      }
                                                                    ),
                                                                  ],
                                                                }),
                                                              ],
                                                            }),
                                                            s.jsxs("div", {
                                                              children: [
                                                                s.jsx("h6", {
                                                                  className:
                                                                    "text-xs font-medium text-gray-500 uppercase mb-1",
                                                                  children:
                                                                    "操作資訊",
                                                                }),
                                                                s.jsxs("div", {
                                                                  className:
                                                                    "text-sm space-y-1",
                                                                  children: [
                                                                    s.jsxs(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "flex items-center",
                                                                        children:
                                                                          [
                                                                            s.jsx(
                                                                              Xd,
                                                                              {
                                                                                className:
                                                                                  "w-3 h-3 text-gray-400 mr-1",
                                                                              }
                                                                            ),
                                                                            X.OP,
                                                                          ],
                                                                      }
                                                                    ),
                                                                    s.jsxs(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "flex items-center",
                                                                        children:
                                                                          [
                                                                            s.jsx(
                                                                              ss,
                                                                              {
                                                                                className:
                                                                                  "w-3 h-3 text-gray-400 mr-1",
                                                                              }
                                                                            ),
                                                                            X.OP_TIME,
                                                                          ],
                                                                      }
                                                                    ),
                                                                  ],
                                                                }),
                                                              ],
                                                            }),
                                                            s.jsxs("div", {
                                                              children: [
                                                                s.jsx("h6", {
                                                                  className:
                                                                    "text-xs font-medium text-gray-500 uppercase mb-1",
                                                                  children:
                                                                    "狀態",
                                                                }),
                                                                s.jsx("div", {
                                                                  className:
                                                                    "text-sm",
                                                                  children:
                                                                    s.jsx(
                                                                      "span",
                                                                      {
                                                                        className: `inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                                                          X.STATE ===
                                                                          "未鎖定"
                                                                            ? "bg-yellow-100 text-yellow-800"
                                                                            : "bg-green-100 text-green-800"
                                                                        }`,
                                                                        children:
                                                                          X.STATE,
                                                                      }
                                                                    ),
                                                                }),
                                                              ],
                                                            }),
                                                          ],
                                                        }),
                                                    (X.BARCODE1 ||
                                                      X.BARCODE2 ||
                                                      X.NOTE) &&
                                                      s.jsxs("div", {
                                                        className:
                                                          "mt-3 pt-3 border-t border-gray-100",
                                                        children: [
                                                          (X.BARCODE1 ||
                                                            X.BARCODE2) &&
                                                            s.jsxs("div", {
                                                              className: "mb-2",
                                                              children: [
                                                                s.jsx("span", {
                                                                  className:
                                                                    "text-xs font-medium text-gray-500 uppercase",
                                                                  children:
                                                                    "條碼資訊",
                                                                }),
                                                                s.jsxs("div", {
                                                                  className:
                                                                    "text-sm text-gray-600 mt-1",
                                                                  children: [
                                                                    X.BARCODE1 &&
                                                                      s.jsxs(
                                                                        "div",
                                                                        {
                                                                          children:
                                                                            [
                                                                              "條碼1: ",
                                                                              X.BARCODE1,
                                                                            ],
                                                                        }
                                                                      ),
                                                                    X.BARCODE2 &&
                                                                      s.jsxs(
                                                                        "div",
                                                                        {
                                                                          children:
                                                                            [
                                                                              "條碼2: ",
                                                                              X.BARCODE2,
                                                                            ],
                                                                        }
                                                                      ),
                                                                  ],
                                                                }),
                                                              ],
                                                            }),
                                                          X.NOTE &&
                                                            s.jsxs("div", {
                                                              children: [
                                                                s.jsx("span", {
                                                                  className:
                                                                    "text-xs font-medium text-gray-500 uppercase",
                                                                  children:
                                                                    "備註",
                                                                }),
                                                                s.jsx("p", {
                                                                  className:
                                                                    "text-sm text-gray-600 mt-1",
                                                                  children:
                                                                    X.NOTE,
                                                                }),
                                                              ],
                                                            }),
                                                        ],
                                                      }),
                                                  ],
                                                }),
                                              }),
                                            },
                                            `${R.GUID}-sub-${Je}`
                                          )
                                        ),
                                    ],
                                  });
                                }),
                              }),
                            ],
                          }),
                        }),
                  ],
                }),
                s.jsx("div", {
                  className: "flex justify-end p-6 border-t bg-gray-50",
                  children: s.jsx("button", {
                    onClick: t,
                    className:
                      "px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
                    children: "關閉",
                  }),
                }),
              ],
            }),
            B.isOpen &&
              s.jsx("div", {
                className:
                  "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[60]",
                children: s.jsxs("div", {
                  className: "bg-white rounded-lg shadow-xl max-w-md w-full",
                  children: [
                    s.jsxs("div", {
                      className:
                        "flex items-center justify-between p-6 border-b",
                      children: [
                        s.jsx("h3", {
                          className: "text-lg font-semibold text-gray-900",
                          children: "確認刪除",
                        }),
                        s.jsx("button", {
                          onClick: () =>
                            G({
                              isOpen: !1,
                              subContent: null,
                              inspectionItem: null,
                            }),
                          className:
                            "text-gray-400 hover:text-gray-600 transition-colors",
                          children: s.jsx(Le, { className: "w-6 h-6" }),
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "p-6",
                      children: [
                        s.jsx("p", {
                          className: "text-sm text-gray-600 mb-4",
                          children: "您確定要刪除此子明細嗎？此操作無法復原。",
                        }),
                        s.jsxs("div", {
                          className: "bg-gray-50 rounded-lg p-4 space-y-2 mb-6",
                          children: [
                            s.jsxs("div", {
                              className: "flex justify-between",
                              children: [
                                s.jsx("span", {
                                  className: "text-sm text-gray-500",
                                  children: "藥品名稱:",
                                }),
                                s.jsx("span", {
                                  className:
                                    "text-sm font-medium text-gray-900",
                                  children:
                                    ((mn = B.inspectionItem) == null
                                      ? void 0
                                      : mn.CHT_NAME) ||
                                    ((ys = B.inspectionItem) == null
                                      ? void 0
                                      : ys.NAME),
                                }),
                              ],
                            }),
                            s.jsxs("div", {
                              className: "flex justify-between",
                              children: [
                                s.jsx("span", {
                                  className: "text-sm text-gray-500",
                                  children: "批號:",
                                }),
                                s.jsx("span", {
                                  className:
                                    "text-sm font-medium text-gray-900",
                                  children:
                                    (vs = B.subContent) == null
                                      ? void 0
                                      : vs.LOT,
                                }),
                              ],
                            }),
                            s.jsxs("div", {
                              className: "flex justify-between",
                              children: [
                                s.jsx("span", {
                                  className: "text-sm text-gray-500",
                                  children: "實收數量:",
                                }),
                                s.jsxs("span", {
                                  className:
                                    "text-sm font-medium text-gray-900",
                                  children: [
                                    (ws = B.subContent) == null
                                      ? void 0
                                      : ws.END_QTY,
                                    " ",
                                    (bs = B.subContent) == null
                                      ? void 0
                                      : bs.PAKAGE,
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          className: "flex gap-3",
                          children: [
                            s.jsx("button", {
                              onClick: () =>
                                G({
                                  isOpen: !1,
                                  subContent: null,
                                  inspectionItem: null,
                                }),
                              className:
                                "flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",
                              disabled: j,
                              children: "取消",
                            }),
                            s.jsx("button", {
                              onClick: ps,
                              disabled: j,
                              className:
                                "flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center",
                              children: j
                                ? s.jsxs(s.Fragment, {
                                    children: [
                                      s.jsx(ce, {
                                        size: "small",
                                        className: "mr-2",
                                      }),
                                      "刪除中...",
                                    ],
                                  })
                                : s.jsxs(s.Fragment, {
                                    children: [
                                      s.jsx(Pn, { className: "w-4 h-4 mr-2" }),
                                      "確認刪除",
                                    ],
                                  }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            s.jsx(xs, {
              isOpen: A.isOpen,
              onClose: () => Y({ isOpen: !1, imageUrl: "", title: "" }),
              imageUrl: A.imageUrl,
              title: A.title,
            }),
          ],
        })
      : null;
  },
  Ng = ({ isOpen: e, onClose: t, onDataUpdate: n }) => {
    const [r, o] = y.useState(null),
      [l, i] = y.useState(!1),
      [a, c] = y.useState(null),
      [u, h] = y.useState(null),
      m = y.useRef(null),
      g = () => {
        o(null), c(null), h(null), m.current && (m.current.value = "");
      },
      x = () => {
        g(), t();
      },
      b = (I) => {
        var v;
        const f = (v = I.target.files) == null ? void 0 : v[0];
        if (!f) return;
        if (
          ![
            "application/vnd.ms-excel",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            ".xls",
            ".xlsx",
          ].some((w) => f.type === w || f.name.toLowerCase().endsWith(w))
        ) {
          c("請選擇 Excel 檔案 (.xls 或 .xlsx)");
          return;
        }
        if (f.size > 50 * 1024 * 1024) {
          c("檔案大小不可超過 50MB");
          return;
        }
        o(f), c(null), h(null);
      },
      S = async () => {
        if (!r) return;
        const I = aa(),
          f = ot();
        if (!I || !f) {
          c("無法取得操作人資訊");
          return;
        }
        i(!0), c(null), h(null);
        try {
          console.log("=== Excel Upload Debug ==="),
            console.log("Selected file:", r.name, r.size, "bytes"),
            console.log("Operator ID:", I),
            console.log("Operator Name:", f);
          const d = await Zp(r, I, f);
          console.log("Response Data:", d),
            console.log("==============================="),
            d.Code === 200
              ? (console.log("✅ Excel upload successful"),
                h(d.Result || "Excel 檔案上傳成功"),
                n && n(),
                setTimeout(() => {
                  x();
                }, 3e3))
              : (console.log("❌ Excel upload failed"),
                c(d.Result || "上傳失敗"));
        } catch (d) {
          console.error("Excel upload error:", d),
            console.log("❌ Exception occurred during upload"),
            c(d instanceof Error ? d.message : "系統錯誤，請稍後再試");
        } finally {
          i(!1);
        }
      };
    return e
      ? s.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
          children: s.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto",
            children: [
              s.jsxs("div", {
                className: "flex items-center justify-between p-6 border-b",
                children: [
                  s.jsxs("div", {
                    children: [
                      s.jsxs("h3", {
                        className:
                          "text-lg font-semibold text-gray-900 flex items-center",
                        children: [
                          s.jsx(fr, { className: "w-5 h-5 mr-2" }),
                          "建單上傳",
                        ],
                      }),
                      s.jsx("p", {
                        className: "text-sm text-gray-600 mt-1",
                        children: "上傳 Excel 檔案來建立驗收資料",
                      }),
                    ],
                  }),
                  s.jsx("button", {
                    onClick: x,
                    className:
                      "text-gray-400 hover:text-gray-600 transition-colors",
                    children: s.jsx(Le, { className: "w-6 h-6" }),
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "p-6",
                children: [
                  a &&
                    s.jsxs("div", {
                      className:
                        "mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm flex items-center",
                      children: [
                        s.jsx(it, { className: "w-4 h-4 mr-2 flex-shrink-0" }),
                        a,
                      ],
                    }),
                  u &&
                    s.jsxs("div", {
                      className:
                        "mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm flex items-center",
                      children: [
                        s.jsx(Dt, { className: "w-4 h-4 mr-2 flex-shrink-0" }),
                        u,
                      ],
                    }),
                  s.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "選擇 Excel 檔案",
                          }),
                          s.jsxs("div", {
                            className:
                              "border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors cursor-pointer",
                            onClick: () => {
                              var I;
                              return (I = m.current) == null
                                ? void 0
                                : I.click();
                            },
                            children: [
                              s.jsx("input", {
                                ref: m,
                                type: "file",
                                accept:
                                  ".xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                                onChange: b,
                                className: "hidden",
                              }),
                              r
                                ? s.jsxs("div", {
                                    className: "space-y-2",
                                    children: [
                                      s.jsx(ci, {
                                        className:
                                          "w-12 h-12 text-green-500 mx-auto",
                                      }),
                                      s.jsxs("div", {
                                        children: [
                                          s.jsx("p", {
                                            className:
                                              "text-sm font-medium text-gray-900",
                                            children: r.name,
                                          }),
                                          s.jsxs("p", {
                                            className: "text-xs text-gray-500",
                                            children: [
                                              (r.size / 1024 / 1024).toFixed(2),
                                              " MB",
                                            ],
                                          }),
                                          s.jsx("p", {
                                            className:
                                              "text-xs text-gray-500 mt-1",
                                            children: "點擊重新選擇檔案",
                                          }),
                                        ],
                                      }),
                                    ],
                                  })
                                : s.jsxs("div", {
                                    className: "space-y-2",
                                    children: [
                                      s.jsx(ci, {
                                        className:
                                          "w-12 h-12 text-gray-400 mx-auto",
                                      }),
                                      s.jsxs("div", {
                                        children: [
                                          s.jsx("p", {
                                            className: "text-sm text-gray-600",
                                            children: "點擊選擇 Excel 檔案",
                                          }),
                                          s.jsx("p", {
                                            className: "text-xs text-gray-500",
                                            children:
                                              "支援 .xls 和 .xlsx 格式，檔案大小限制 50MB",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                            ],
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: "bg-blue-50 rounded-lg p-4",
                        children: [
                          s.jsx("h4", {
                            className: "text-sm font-medium text-blue-800 mb-2",
                            children: "使用說明",
                          }),
                          s.jsxs("ul", {
                            className: "text-xs text-blue-700 space-y-1",
                            children: [
                              s.jsx("li", {
                                children: "• 請確保 Excel 檔案格式正確",
                              }),
                              s.jsx("li", {
                                children: "• 檔案大小不可超過 50MB",
                              }),
                              s.jsx("li", {
                                children: "• 上傳成功後會自動更新驗收資料",
                              }),
                              s.jsx("li", {
                                children: "• 如有錯誤請檢查檔案內容格式",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "flex gap-3 mt-6",
                    children: [
                      s.jsx("button", {
                        type: "button",
                        onClick: x,
                        className:
                          "flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",
                        disabled: l,
                        children: "取消",
                      }),
                      s.jsx("button", {
                        onClick: S,
                        disabled: l || !r,
                        className:
                          "flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center",
                        children: l
                          ? s.jsxs(s.Fragment, {
                              children: [
                                s.jsx(ce, { size: "small", className: "mr-2" }),
                                "上傳中...",
                              ],
                            })
                          : s.jsxs(s.Fragment, {
                              children: [
                                s.jsx(fr, { className: "w-4 h-4 mr-2" }),
                                "上傳",
                              ],
                            }),
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
  jg = ({ isOpen: e, onClose: t, onDataUpdate: n }) => {
    const [r, o] = y.useState([]),
      [l, i] = y.useState(!1),
      [a, c] = y.useState(!1),
      [u, h] = y.useState(null),
      [m, g] = y.useState(null),
      [x, b] = y.useState({
        pon: "",
        icSn: "",
        code: "",
        name: "",
        brd: "",
        skdiacode: "",
        startQty: "",
      }),
      [S, I] = y.useState([]),
      [f, d] = y.useState(!1),
      [p, v] = y.useState(!1),
      w = async () => {
        c(!0);
        try {
          const C = await af();
          C.Code === 200 && C.Data
            ? (o(C.Data), console.log("藥檔資料載入成功:", C.Data.length, "筆"))
            : (console.error("藥檔資料載入失敗:", C.Result),
              h(C.Result || "載入藥檔資料失敗"));
        } catch (C) {
          console.error("載入藥檔資料異常:", C),
            h(C instanceof Error ? C.message : "載入藥檔資料失敗");
        } finally {
          c(!1);
        }
      };
    y.useEffect(() => {
      e && r.length === 0 && w();
    }, [e]);
    const k = () => {
        b({
          pon: "",
          icSn: "",
          code: "",
          name: "",
          brd: "",
          skdiacode: "",
          startQty: "",
        }),
          h(null),
          g(null),
          d(!1),
          v(!1),
          I([]);
      },
      D = () => {
        k(), t();
      },
      P = (C) => {
        if ((b((E) => ({ ...E, code: C })), C.trim())) {
          const E = r.filter((z) =>
            z.CODE.toLowerCase().includes(C.toLowerCase())
          );
          I(E), d(!0), v(!1);
        } else d(!1), I([]);
      },
      U = (C) => {
        if ((b((E) => ({ ...E, name: C })), C.trim())) {
          const E = r.filter(
            (z) =>
              z.NAME.toLowerCase().includes(C.toLowerCase()) ||
              (z.CHT_NAME &&
                z.CHT_NAME.toLowerCase().includes(C.toLowerCase())) ||
              z.DIANAME.toLowerCase().includes(C.toLowerCase()) ||
              z.TRADENAME.toLowerCase().includes(C.toLowerCase())
          );
          I(E), v(!0), d(!1);
        } else v(!1), I([]);
      },
      T = (C) => {
        b((E) => ({
          ...E,
          code: C.CODE,
          name: C.NAME,
          skdiacode: C.SKDIACODE,
          brd: C.BRD || E.brd,
        })),
          d(!1),
          v(!1),
          I([]);
      },
      M = async (C) => {
        C.preventDefault(), i(!0), h(null), g(null);
        try {
          const E = await eg(
            x.pon,
            x.icSn,
            x.code,
            x.name,
            x.brd,
            x.skdiacode,
            x.startQty
          );
          E.Code === 200
            ? (g("手動建單成功"),
              n && n(),
              setTimeout(() => {
                D();
              }, 3e3))
            : h(E.Result || "建單失敗");
        } catch (E) {
          console.error("手動建單失敗:", E),
            h(E instanceof Error ? E.message : "系統錯誤，請稍後再試");
        } finally {
          i(!1);
        }
      };
    return e
      ? s.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
          children: s.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto",
            children: [
              s.jsxs("div", {
                className: "flex items-center justify-between p-6 border-b",
                children: [
                  s.jsxs("div", {
                    children: [
                      s.jsxs("h3", {
                        className:
                          "text-lg font-semibold text-gray-900 flex items-center",
                        children: [
                          s.jsx(dr, { className: "w-5 h-5 mr-2" }),
                          "手動建單",
                        ],
                      }),
                      s.jsx("p", {
                        className: "text-sm text-gray-600 mt-1",
                        children: "手動建立驗收資料",
                      }),
                    ],
                  }),
                  s.jsx("button", {
                    onClick: D,
                    className:
                      "text-gray-400 hover:text-gray-600 transition-colors",
                    children: s.jsx(Le, { className: "w-6 h-6" }),
                  }),
                ],
              }),
              s.jsxs("form", {
                onSubmit: M,
                className: "p-6",
                children: [
                  a &&
                    s.jsxs("div", {
                      className:
                        "mb-4 p-3 bg-blue-50 border border-blue-200 text-blue-700 rounded-lg text-sm flex items-center",
                      children: [
                        s.jsx(ce, { size: "small", className: "mr-2" }),
                        "載入藥檔資料中...",
                      ],
                    }),
                  u &&
                    s.jsx("div", {
                      className:
                        "mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm",
                      children: u,
                    }),
                  m &&
                    s.jsx("div", {
                      className:
                        "mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm",
                      children: m,
                    }),
                  s.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "請購單號 *",
                          }),
                          s.jsx("input", {
                            type: "text",
                            value: x.pon,
                            onChange: (C) => b({ ...x, pon: C.target.value }),
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                            required: !0,
                            placeholder: "請輸入請購單號",
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "驗收單號",
                          }),
                          s.jsx("input", {
                            type: "text",
                            value: x.icSn,
                            onChange: (C) => b({ ...x, icSn: C.target.value }),
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                            placeholder: "請輸入驗收單號",
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: "relative",
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "藥碼 *",
                          }),
                          s.jsxs("div", {
                            className: "relative",
                            children: [
                              s.jsx("input", {
                                type: "text",
                                value: x.code,
                                onChange: (C) => P(C.target.value),
                                className:
                                  "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                required: !0,
                                placeholder: "請輸入藥碼",
                              }),
                              s.jsx("div", {
                                className:
                                  "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",
                                children: s.jsx(zt, {
                                  className: "h-4 w-4 text-gray-400",
                                }),
                              }),
                            ],
                          }),
                          f &&
                            S.length > 0 &&
                            s.jsx("div", {
                              className:
                                "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                              children: S.slice(0, 10).map((C, E) =>
                                s.jsxs(
                                  "div",
                                  {
                                    onClick: () => T(C),
                                    className:
                                      "px-3 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0",
                                    children: [
                                      s.jsx("div", {
                                        className: "font-medium text-sm",
                                        children: C.CODE,
                                      }),
                                      s.jsx("div", {
                                        className: "text-xs text-gray-600",
                                        children: C.CHT_NAME || C.NAME,
                                      }),
                                      s.jsxs("div", {
                                        className: "text-xs text-gray-500",
                                        children: ["料號: ", C.SKDIACODE],
                                      }),
                                    ],
                                  },
                                  E
                                )
                              ),
                            }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: "relative",
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "藥名 *",
                          }),
                          s.jsxs("div", {
                            className: "relative",
                            children: [
                              s.jsx("input", {
                                type: "text",
                                value: x.name,
                                onChange: (C) => U(C.target.value),
                                className:
                                  "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                required: !0,
                                placeholder: "請輸入藥名",
                              }),
                              s.jsx("div", {
                                className:
                                  "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",
                                children: s.jsx(zt, {
                                  className: "h-4 w-4 text-gray-400",
                                }),
                              }),
                            ],
                          }),
                          p &&
                            S.length > 0 &&
                            s.jsx("div", {
                              className:
                                "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                              children: S.slice(0, 10).map((C, E) =>
                                s.jsxs(
                                  "div",
                                  {
                                    onClick: () => T(C),
                                    className:
                                      "px-3 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0",
                                    children: [
                                      s.jsx("div", {
                                        className: "font-medium text-sm",
                                        children: C.NAME,
                                      }),
                                      s.jsxs("div", {
                                        className: "text-xs text-gray-600",
                                        children: ["藥碼: ", C.CODE],
                                      }),
                                      s.jsxs("div", {
                                        className: "text-xs text-gray-500",
                                        children: ["料號: ", C.SKDIACODE],
                                      }),
                                    ],
                                  },
                                  E
                                )
                              ),
                            }),
                        ],
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "料號 *",
                          }),
                          s.jsx("input", {
                            type: "text",
                            value: x.skdiacode,
                            onChange: (C) =>
                              b({ ...x, skdiacode: C.target.value }),
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                            required: !0,
                            placeholder: "請輸入料號",
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "廠牌",
                          }),
                          s.jsx("input", {
                            type: "text",
                            value: x.brd,
                            onChange: (C) => b({ ...x, brd: C.target.value }),
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                            placeholder: "請輸入廠牌",
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "應收數量 *",
                          }),
                          s.jsx("input", {
                            type: "number",
                            value: x.startQty,
                            onChange: (C) =>
                              b({ ...x, startQty: C.target.value }),
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                            required: !0,
                            min: "1",
                            step: "1",
                            placeholder: "請輸入應收數量",
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "flex gap-3 mt-6",
                    children: [
                      s.jsx("button", {
                        type: "button",
                        onClick: D,
                        className:
                          "flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",
                        disabled: l,
                        children: "取消",
                      }),
                      s.jsx("button", {
                        type: "submit",
                        disabled: l || a,
                        className:
                          "flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center",
                        children: l
                          ? s.jsxs(s.Fragment, {
                              children: [
                                s.jsx(ce, { size: "small", className: "mr-2" }),
                                "建單中...",
                              ],
                            })
                          : s.jsxs(s.Fragment, {
                              children: [
                                s.jsx(dr, { className: "w-4 h-4 mr-2" }),
                                "確認建單",
                              ],
                            }),
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
  Sg = ({ isOpen: e, onClose: t, onBarcodeDetected: n }) => {
    const r = y.useRef(null),
      o = y.useRef(null),
      l = y.useRef(null),
      i = y.useRef(null),
      a = y.useRef(!1),
      c = y.useRef(!1),
      u = y.useRef(null),
      [h, m] = y.useState(null),
      [g, x] = y.useState(!1),
      [b, S] = y.useState(null),
      I = () => {
        i.current && (clearInterval(i.current), (i.current = null));
      },
      f = () => {
        I(),
          l.current &&
            (l.current.getTracks().forEach((w) => w.stop()),
            (l.current = null)),
          r.current && (r.current.srcObject = null),
          (a.current = !1),
          (c.current = !1),
          x(!1);
      },
      d = async () => {
        if (
          !r.current ||
          !o.current ||
          !a.current ||
          document.hidden ||
          c.current ||
          r.current.paused
        )
          return;
        const w = r.current,
          k = o.current,
          D = k.getContext("2d");
        !D ||
          w.readyState !== w.HAVE_ENOUGH_DATA ||
          ((k.width = w.videoWidth),
          (k.height = w.videoHeight),
          D.drawImage(w, 0, 0, k.width, k.height),
          (c.current = !0),
          k.toBlob(
            async (P) => {
              if (!P) {
                c.current = !1;
                return;
              }
              try {
                const U = new FormData();
                U.append("file", P, "camera-capture.jpg");
                const T = await sg(U),
                  M = (T == null ? void 0 : T.results) ?? [];
                if (M.length > 0) {
                  const C = M[0],
                    E = ((C == null ? void 0 : C.code) || "").trim();
                  E &&
                    E !== u.current &&
                    ((u.current = E), S(E), f(), n(E), t());
                }
              } catch (U) {
                console.error("條碼掃描錯誤:", U);
              } finally {
                c.current = !1;
              }
            },
            "image/jpeg",
            0.8
          ));
      },
      p = async () => {
        try {
          m(null), S(null), (u.current = null);
          const w = await navigator.mediaDevices.getUserMedia({
            video: {
              facingMode: { ideal: "environment" },
              width: { ideal: 1280 },
              height: { ideal: 720 },
            },
            audio: !1,
          });
          (l.current = w),
            r.current &&
              ((r.current.srcObject = w),
              await new Promise((k) => {
                const D = r.current,
                  P = () => {
                    D.removeEventListener("canplay", P), k();
                  };
                D.addEventListener("canplay", P), D.play().catch(() => {});
              })),
            (a.current = !0),
            x(!0),
            I(),
            (i.current = setInterval(d, 500));
        } catch (w) {
          console.error("無法開啟相機:", w);
          let k = "無法開啟相機，請確認已授予相機權限";
          (w == null ? void 0 : w.name) === "NotAllowedError" &&
            (k = "已拒絕相機權限，請至瀏覽器設定開啟。"),
            (w == null ? void 0 : w.name) === "NotFoundError" &&
              (k = "找不到可用的攝影機裝置。"),
            m(k);
        }
      };
    y.useEffect(() => {
      const w = () => {
        e &&
          (document.hidden
            ? I()
            : !i.current && a.current && (i.current = setInterval(d, 500)));
      };
      return (
        e ? (p(), document.addEventListener("visibilitychange", w)) : f(),
        () => {
          document.removeEventListener("visibilitychange", w), f();
        }
      );
    }, [e]);
    const v = () => {
      f(), t();
    };
    return e
      ? s.jsxs("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50",
          children: [
            s.jsxs("div", {
              className: "bg-white rounded-lg shadow-xl max-w-2xl w-full",
              children: [
                s.jsxs("div", {
                  className: "flex items-center justify-between p-4 border-b",
                  children: [
                    s.jsxs("div", {
                      className: "flex items-center",
                      children: [
                        s.jsx(Qd, { className: "w-6 h-6 text-blue-600 mr-2" }),
                        s.jsx("h3", {
                          className: "text-lg font-semibold text-gray-900",
                          children: "條碼掃描",
                        }),
                      ],
                    }),
                    s.jsx("button", {
                      onClick: v,
                      className:
                        "text-gray-400 hover:text-gray-600 transition-colors",
                      children: s.jsx(Le, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "p-4",
                  children: [
                    h &&
                      s.jsx("div", {
                        className:
                          "mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm",
                        children: h,
                      }),
                    s.jsxs("div", {
                      className: "relative bg-black rounded-lg overflow-hidden",
                      style: { aspectRatio: "16/9" },
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
                              "relative w-3/4 h-2/3 border-2 border-blue-500 rounded-lg",
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
                              g &&
                                s.jsx("div", {
                                  className:
                                    "absolute top-0 left-0 right-0 h-1 bg-blue-500 animate-scan",
                                }),
                            ],
                          }),
                        }),
                        s.jsx("div", {
                          className:
                            "absolute bottom-4 left-0 right-0 text-center",
                          children: s.jsx("p", {
                            className:
                              "text-white text-sm bg-black bg-opacity-50 inline-block px-4 py-2 rounded-full",
                            children: g ? "正在掃描條碼..." : "準備中...",
                          }),
                        }),
                      ],
                    }),
                    s.jsx("canvas", { ref: o, className: "hidden" }),
                    s.jsxs("div", {
                      className: "mt-4 text-center text-sm text-gray-600",
                      children: [
                        s.jsx("p", { children: "請將條碼對準掃描框" }),
                        s.jsx("p", {
                          className: "text-xs text-gray-500 mt-1",
                          children: "支援一維條碼和二維條碼（QR Code）",
                        }),
                        b &&
                          s.jsxs("p", {
                            className: "text-xs text-gray-500 mt-1",
                            children: ["最近偵測：", b],
                          }),
                      ],
                    }),
                    s.jsx("div", {
                      className: "mt-4 flex justify-end",
                      children: s.jsx("button", {
                        onClick: v,
                        className:
                          "px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",
                        children: "取消",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            s.jsx("style", {
              children: `
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }
        .animate-scan {
          animation: scan 2s linear infinite;
        }
      `,
            }),
          ],
        })
      : null;
  },
  kg = ({ isOpen: e, onClose: t, barcode: n, onSuccess: r }) => {
    const [o, l] = y.useState([]),
      [i, a] = y.useState(!0),
      [c, u] = y.useState(!1),
      [h, m] = y.useState(null),
      [g, x] = y.useState(""),
      [b, S] = y.useState(""),
      [I, f] = y.useState(""),
      [d, p] = y.useState(""),
      [v, w] = y.useState(null);
    y.useEffect(() => {
      e ? k() : (x(""), S(""), f(""), p(""), w(null), m(null));
    }, [e]);
    const k = async () => {
        a(!0), m(null);
        try {
          const M = await af();
          console.log("藥檔資料:", M),
            M.Code === 200 && M.Data
              ? l(M.Data)
              : m(M.Result || "載入藥檔失敗");
        } catch (M) {
          console.error("載入藥檔失敗:", M), m("載入藥檔失敗");
        } finally {
          a(!1);
        }
      },
      D = y.useMemo(
        () =>
          o.length
            ? o.filter((M) => {
                var B, G, j, O;
                const C =
                    !g ||
                    ((B = M.NAME) == null
                      ? void 0
                      : B.toLowerCase().includes(g.toLowerCase())),
                  E =
                    !b ||
                    ((G = M.CHT_NAME) == null
                      ? void 0
                      : G.toLowerCase().includes(b.toLowerCase())),
                  z =
                    !I ||
                    ((j = M.CODE) == null
                      ? void 0
                      : j.toLowerCase().includes(I.toLowerCase())),
                  te =
                    !d ||
                    ((O = M.SKDIACODE) == null
                      ? void 0
                      : O.toLowerCase().includes(d.toLowerCase()));
                return C && E && z && te;
              })
            : [],
        [o, g, b, I, d]
      ),
      P = (M, C) => {
        switch (M) {
          case "name":
            x(C);
            break;
          case "chtName":
            S(C);
            break;
          case "code":
            f(C);
            break;
          case "skdiacode":
            p(C);
            break;
        }
        if (C && D.length > 0) {
          const E = o.find((z) => {
            var te, B, G, j;
            switch (M) {
              case "name":
                return (te = z.NAME) == null
                  ? void 0
                  : te.toLowerCase().includes(C.toLowerCase());
              case "chtName":
                return (B = z.CHT_NAME) == null
                  ? void 0
                  : B.toLowerCase().includes(C.toLowerCase());
              case "code":
                return (G = z.CODE) == null
                  ? void 0
                  : G.toLowerCase().includes(C.toLowerCase());
              case "skdiacode":
                return (j = z.SKDIACODE) == null
                  ? void 0
                  : j.toLowerCase().includes(C.toLowerCase());
              default:
                return !1;
            }
          });
          E &&
            (w(E),
            x(E.NAME || ""),
            S(E.CHT_NAME || ""),
            f(E.CODE || ""),
            p(E.SKDIACODE || ""));
        }
      },
      U = (M) => {
        w(M),
          x(M.NAME || ""),
          S(M.CHT_NAME || ""),
          f(M.CODE || ""),
          p(M.SKDIACODE || "");
      },
      T = async (M) => {
        if ((M.preventDefault(), !I)) {
          m("請選擇或輸入藥碼");
          return;
        }
        u(!0), m(null);
        try {
          const C = await og(n, I);
          console.log("新增條碼回應:", C),
            C.Code === 200 ? (r(), t()) : m(C.Result || "新增條碼失敗");
        } catch (C) {
          console.error("新增條碼失敗:", C), m("新增條碼失敗");
        } finally {
          u(!1);
        }
      };
    return e
      ? s.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
          children: s.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden",
            children: [
              s.jsxs("div", {
                className: "flex items-center justify-between p-4 border-b",
                children: [
                  s.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      s.jsx(dr, { className: "w-6 h-6 text-blue-600 mr-2" }),
                      s.jsx("h3", {
                        className: "text-lg font-semibold text-gray-900",
                        children: "建立條碼",
                      }),
                    ],
                  }),
                  s.jsx("button", {
                    onClick: t,
                    className:
                      "text-gray-400 hover:text-gray-600 transition-colors",
                    children: s.jsx(Le, { className: "w-6 h-6" }),
                  }),
                ],
              }),
              s.jsxs("form", {
                onSubmit: T,
                className: "p-6",
                children: [
                  h &&
                    s.jsx("div", {
                      className:
                        "mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm",
                      children: h,
                    }),
                  s.jsxs("div", {
                    className: "grid grid-cols-2 gap-4 mb-6",
                    children: [
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "條碼",
                          }),
                          s.jsx("input", {
                            type: "text",
                            value: n,
                            disabled: !0,
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500",
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsxs("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: [
                              "藥碼 ",
                              s.jsx("span", {
                                className: "text-red-500",
                                children: "*",
                              }),
                            ],
                          }),
                          s.jsxs("div", {
                            className: "relative",
                            children: [
                              s.jsx("input", {
                                type: "text",
                                value: I,
                                onChange: (M) => P("code", M.target.value),
                                placeholder: "搜尋藥碼",
                                disabled: i || c,
                                className:
                                  "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                              }),
                              s.jsx(zt, {
                                className:
                                  "absolute right-3 top-2.5 w-5 h-5 text-gray-400",
                              }),
                            ],
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "藥名",
                          }),
                          s.jsxs("div", {
                            className: "relative",
                            children: [
                              s.jsx("input", {
                                type: "text",
                                value: g,
                                onChange: (M) => P("name", M.target.value),
                                placeholder: "搜尋藥名",
                                disabled: i || c,
                                className:
                                  "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                              }),
                              s.jsx(zt, {
                                className:
                                  "absolute right-3 top-2.5 w-5 h-5 text-gray-400",
                              }),
                            ],
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "中文名",
                          }),
                          s.jsxs("div", {
                            className: "relative",
                            children: [
                              s.jsx("input", {
                                type: "text",
                                value: b,
                                onChange: (M) => P("chtName", M.target.value),
                                placeholder: "搜尋中文名",
                                disabled: i || c,
                                className:
                                  "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                              }),
                              s.jsx(zt, {
                                className:
                                  "absolute right-3 top-2.5 w-5 h-5 text-gray-400",
                              }),
                            ],
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "料號",
                          }),
                          s.jsxs("div", {
                            className: "relative",
                            children: [
                              s.jsx("input", {
                                type: "text",
                                value: d,
                                onChange: (M) => P("skdiacode", M.target.value),
                                placeholder: "搜尋料號",
                                disabled: i || c,
                                className:
                                  "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                              }),
                              s.jsx(zt, {
                                className:
                                  "absolute right-3 top-2.5 w-5 h-5 text-gray-400",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  i &&
                    s.jsx("div", {
                      className: "text-center py-8 text-gray-500",
                      children: "載入藥檔中...",
                    }),
                  !i &&
                    D.length > 0 &&
                    s.jsxs("div", {
                      className: "mb-6",
                      children: [
                        s.jsxs("h4", {
                          className: "text-sm font-medium text-gray-700 mb-2",
                          children: ["搜尋結果 (", D.length, " 筆)"],
                        }),
                        s.jsxs("div", {
                          className:
                            "border border-gray-200 rounded-lg max-h-64 overflow-y-auto",
                          children: [
                            s.jsxs("table", {
                              className: "min-w-full divide-y divide-gray-200",
                              children: [
                                s.jsx("thead", {
                                  className: "bg-gray-50 sticky top-0",
                                  children: s.jsxs("tr", {
                                    children: [
                                      s.jsx("th", {
                                        className:
                                          "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase",
                                        children: "藥名",
                                      }),
                                      s.jsx("th", {
                                        className:
                                          "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase",
                                        children: "中文名",
                                      }),
                                      s.jsx("th", {
                                        className:
                                          "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase",
                                        children: "藥碼",
                                      }),
                                      s.jsx("th", {
                                        className:
                                          "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase",
                                        children: "料號",
                                      }),
                                      s.jsx("th", {
                                        className:
                                          "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase",
                                        children: "操作",
                                      }),
                                    ],
                                  }),
                                }),
                                s.jsx("tbody", {
                                  className:
                                    "bg-white divide-y divide-gray-200",
                                  children: D.slice(0, 50).map((M, C) =>
                                    s.jsxs(
                                      "tr",
                                      {
                                        className: `hover:bg-gray-50 cursor-pointer ${
                                          (v == null ? void 0 : v.CODE) ===
                                          M.CODE
                                            ? "bg-blue-50"
                                            : ""
                                        }`,
                                        onClick: () => U(M),
                                        children: [
                                          s.jsx("td", {
                                            className:
                                              "px-4 py-2 text-sm text-gray-900",
                                            children: M.NAME,
                                          }),
                                          s.jsx("td", {
                                            className:
                                              "px-4 py-2 text-sm text-gray-900",
                                            children: M.CHT_NAME,
                                          }),
                                          s.jsx("td", {
                                            className:
                                              "px-4 py-2 text-sm text-gray-900",
                                            children: M.CODE,
                                          }),
                                          s.jsx("td", {
                                            className:
                                              "px-4 py-2 text-sm text-gray-900",
                                            children: M.SKDIACODE,
                                          }),
                                          s.jsx("td", {
                                            className: "px-4 py-2 text-sm",
                                            children: s.jsx("button", {
                                              type: "button",
                                              onClick: (E) => {
                                                E.stopPropagation(), U(M);
                                              },
                                              className:
                                                "text-blue-600 hover:text-blue-800",
                                              children: "選擇",
                                            }),
                                          }),
                                        ],
                                      },
                                      C
                                    )
                                  ),
                                }),
                              ],
                            }),
                            D.length > 50 &&
                              s.jsx("div", {
                                className:
                                  "px-4 py-2 text-sm text-gray-500 bg-gray-50 text-center",
                                children: "僅顯示前 50 筆，請縮小搜尋範圍",
                              }),
                          ],
                        }),
                      ],
                    }),
                  !i &&
                    D.length === 0 &&
                    (g || b || I || d) &&
                    s.jsx("div", {
                      className: "text-center py-8 text-gray-500",
                      children: "查無符合條件的藥品",
                    }),
                  s.jsxs("div", {
                    className: "flex justify-end gap-3 mt-6",
                    children: [
                      s.jsx("button", {
                        type: "button",
                        onClick: t,
                        disabled: c,
                        className:
                          "px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors disabled:opacity-50",
                        children: "取消",
                      }),
                      s.jsx("button", {
                        type: "submit",
                        disabled: c || !I,
                        className:
                          "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                        children: c ? "建立中..." : "確認建立",
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
  Cg = (e = {}) => {
    const { onMessage: t, autoConnect: n = !0 } = e;
    y.useEffect(() => {
      let a = null;
      return (
        (() => {
          try {
            n && yn.connect(), t && (a = yn.onMessage(t));
          } catch (u) {
            console.error("WebSocket initialization error:", u);
          }
        })(),
        () => {
          a && a();
        }
      );
    }, [t, n]);
    const r = y.useCallback(() => {
        try {
          yn.connect();
        } catch (a) {
          throw (console.error("WebSocket connect error:", a), a);
        }
      }, []),
      o = y.useCallback(() => {
        try {
          yn.disconnect();
        } catch (a) {
          throw (console.error("WebSocket disconnect error:", a), a);
        }
      }, []),
      l = y.useCallback(async () => {
        try {
          return await yn.sendMessage();
        } catch (a) {
          throw (console.error("WebSocket send message error:", a), a);
        }
      }, []),
      i = y.useCallback(() => yn.isConnected(), []);
    return { connect: r, disconnect: o, sendMessage: l, isConnected: i };
  },
  Eg = () => {
    const { t: e, language: t, toggleLanguage: n } = ms(),
      [r, o] = y.useState([]),
      [l, i] = y.useState([]),
      [a, c] = y.useState(!0),
      [u, h] = y.useState(null),
      [m, g] = y.useState(null),
      [x, b] = y.useState(!1),
      [S, I] = y.useState(!1),
      [f, d] = y.useState(!1),
      [p, v] = y.useState(!1),
      [w, k] = y.useState(!1),
      [D, P] = y.useState([]),
      [U, T] = y.useState(0),
      [M, C] = y.useState([]),
      [E, z] = y.useState(""),
      [te, B] = y.useState(!1),
      [G, j] = y.useState([]),
      [O, A] = y.useState(!1),
      [Y, re] = y.useState(""),
      [rt, _] = y.useState(!1),
      [ee, H] = y.useState(!1),
      [oe, he] = y.useState(!1),
      [W, V] = y.useState(!1),
      [ie, J] = y.useState(!1),
      [Ee, xr] = y.useState(""),
      Bo = () => {
        const $ = di();
        $ != null && $.domain && (window.location.href = $.homepage);
      },
      [An, yr] = y.useState(Dc()),
      [ps, gs] = An;
    Cg({
      onMessage: ($) => {
        console.log("=== Received WebSocket Message ==="),
          console.log("Message:", $),
          Ye(),
          On();
      },
      autoConnect: !0,
    });
    const Ye = async ($, K) => {
        c(!0), h(null);
        try {
          const [me, Me] = $ && K ? [$, K] : An,
            Se = await Vp(me, Me);
          if ((console.log("Response Data:", Se), Se.Code === 200)) {
            o(Se.Data);
            const mt = Qp(Se.Data, oe);
            if ((i(mt), m)) {
              const pn = mt.find(
                (bt) => bt.CODE === m.CODE && bt.SKDIACODE === m.SKDIACODE
              );
              pn && g(pn);
            }
          } else h(Se.Result || "查詢失敗"), o([]), i([]);
        } catch (me) {
          console.error("Failed to load inspections:", me),
            h(me instanceof Error ? me.message : "系統錯誤，請稍後再試"),
            o([]),
            i([]);
        } finally {
          c(!1);
        }
      },
      On = async () => {
        try {
          const K = new Date().toLocaleDateString("zh-TW", {
              timeZone: "Asia/Taipei",
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }),
            [me, Me, Se] = K.split("/"),
            mt = `${me}-${Me.padStart(2, "0")}-${Se.padStart(2, "0")} 00:00:00`,
            pn = `${me}-${Me.padStart(2, "0")}-${Se.padStart(2, "0")} 23:59:59`,
            bt = await Ic(mt, pn);
          bt.Code === 200
            ? (T(bt.Data.length), P(bt.Data), C(bt.Data))
            : (bt.Result && bt.Result.includes("查無此時間區域")
                ? console.warn("No inspection data found for today:", bt.Result)
                : console.error(
                    "Failed to load today inspection count:",
                    bt.Result
                  ),
              T(0),
              P([]),
              C([]));
        } catch ($) {
          console.error("Failed to load today inspection count:", $),
            T(0),
            P([]),
            C([]);
        }
      },
      xs = async ($, K) => {
        try {
          console.log("=== Custom Date Range Query ==="),
            console.log("Start Date:", $),
            console.log("End Date:", K);
          const me = await Ic($, K);
          me.Code === 200
            ? (C(me.Data),
              console.log("Custom query result:", me.Data.length, "筆"))
            : (console.error("Custom date range query failed:", me.Result),
              C([]));
        } catch (me) {
          console.error("Custom date range query error:", me), C([]);
        }
      },
      mn = async ($) => {
        if (!$.trim()) {
          ee || j(l), A(!1);
          return;
        }
        B(!0), A(!0);
        try {
          if (
            (console.log("=== 開始條碼搜尋 ==="),
            console.log("搜尋條碼:", $),
            a || l.length === 0)
          ) {
            console.log("⏳ 驗收資料載入中，等待載入完成..."), B(!1);
            return;
          }
          const K = await Tc($);
          if (
            (console.log("條碼搜尋回應:", K),
            K.Code === 200 && K.Data && K.Data.length > 0)
          ) {
            console.log("API 回傳的完整資料:", K.Data),
              console.log("API 回傳的第一筆資料:", K.Data[0]);
            const me = K.Data.map((Se) => Se.CODE).filter(Boolean);
            console.log("搜尋到的藥品碼:", me),
              console.log(
                "所有驗收資料的 CODE:",
                l.map((Se) => Se.CODE)
              ),
              console.log("驗收資料的第一筆:", l[0]);
            const Me = l.filter((Se) => {
              const mt = me.includes(Se.CODE);
              return mt && console.log("✅ 找到匹配:", Se.CODE), mt;
            });
            console.log("篩選後的驗收資料:", Me.length, "筆"),
              console.log("篩選後的資料:", Me),
              j(Me);
          } else
            K.Code === -200 && K.Result === "查無資料"
              ? (console.log("查無條碼資料，開啟建立條碼彈窗"),
                xr($),
                J(!0),
                j([]))
              : (console.log("查無相關藥品資料"), j([]));
        } catch (K) {
          console.error("條碼搜尋失敗:", K), j([]);
        } finally {
          B(!1);
        }
      },
      ys = ($) => {
        if (!$.trim()) {
          if (!O) j(l);
          else if (E.trim()) {
            mn(E);
            return;
          }
          H(!1);
          return;
        }
        _(!0), H(!0);
        try {
          console.log("=== 開始單號搜尋 ==="), console.log("搜尋單號:", $);
          const K = l.filter((me) =>
            me.items.some((Me) => {
              var Se, mt;
              return (
                ((Se = Me.IC_SN) == null
                  ? void 0
                  : Se.toLowerCase().includes($.toLowerCase())) ||
                ((mt = Me.PON) == null
                  ? void 0
                  : mt.toLowerCase().includes($.toLowerCase()))
              );
            })
          );
          console.log("篩選後的驗收資料:", K.length, "筆"), j(K);
        } catch (K) {
          console.error("單號搜尋失敗:", K), j([]);
        } finally {
          _(!1);
        }
      },
      vs = ($) => {
        z($);
        const K = setTimeout(() => {
          mn($);
        }, 500);
        return () => clearTimeout(K);
      },
      ws = ($) => {
        re($);
        const K = setTimeout(() => {
          ys($);
        }, 300);
        return () => clearTimeout(K);
      },
      bs = y.useCallback(($) => {
        console.log("=== 掃描到條碼 ==="), console.log("條碼:", $), z($), mn($);
      }, []);
    y.useEffect(() => {
      Ye(), On();
    }, []),
      y.useEffect(() => {
        if (!O && !ee) j(l);
        else if (O && E.trim() && l.length > 0)
          Tc(E).then(($) => {
            if ($.Code === 200 && $.Data && $.Data.length > 0) {
              const K = $.Data.map((Me) => Me.CODE).filter(Boolean),
                me = l.filter((Me) => K.includes(Me.CODE));
              j(me);
            } else j([]);
          });
        else if (ee && Y.trim() && l.length > 0) {
          const $ = l.filter((K) => {
            var me, Me, Se;
            return (
              K.CODE.includes(Y) ||
              ((me = K.NAME_CH) == null ? void 0 : me.includes(Y)) ||
              ((Me = K.NAME_E) == null ? void 0 : Me.includes(Y)) ||
              ((Se = K.KSKLOT) == null
                ? void 0
                : Se.some((mt) => {
                    var pn;
                    return (pn = mt.KS_num) == null ? void 0 : pn.includes(Y);
                  }))
            );
          });
          j($);
        }
      }, [l, O, ee, E, Y]),
      y.useEffect(() => {
        Ye();
      }, [oe]);
    const R = ($, K) => {
        yr([$, K]);
      },
      Q = () => {
        Ye(ps, gs);
      },
      q = () => {
        const $ = Dc();
        yr($), Ye($[0], $[1]);
      },
      Z = r.length,
      ye = O ? G.length : l.length,
      X = ot(),
      Je = rp();
    return s.jsxs("div", {
      className: "min-h-screen flex flex-col bg-white",
      children: [
        s.jsx("main", {
          className: "flex-1 p-4 md:p-6 lg:p-8 pb-24",
          children: s.jsxs("div", {
            className: "max-w-screen-xl mx-auto",
            children: [
              s.jsx("header", {
                className: "mb-8",
                children: s.jsxs("div", {
                  className: "flex items-center justify-between mb-1",
                  children: [
                    s.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        s.jsx("button", {
                          onClick: Bo,
                          className:
                            "flex items-center justify-center w-12 h-12 hover:bg-slate-200 rounded-lg transition-colors",
                          children: s.jsx(Gm, {
                            size: 24,
                            className: "text-slate-700",
                          }),
                        }),
                        s.jsxs("div", {
                          children: [
                            s.jsx("h1", {
                              className:
                                "text-2xl md:text-3xl font-semibold text-gray-800",
                              children: e("app.inspection"),
                            }),
                            s.jsx("p", {
                              className: "text-slate-600",
                              children: X && Je ? `${X}-${Je}` : "",
                            }),
                          ],
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        s.jsxs("button", {
                          onClick: n,
                          className:
                            "inline-flex items-center px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors",
                          children: [
                            s.jsx(Bm, { className: "w-4 h-4 mr-2" }),
                            e(`language.${t}`),
                          ],
                        }),
                        s.jsxs("button", {
                          onClick: () => {
                            sessionStorage.clear(), window.location.reload();
                          },
                          className:
                            "inline-flex items-center px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors",
                          children: [
                            s.jsx("svg", {
                              className: "w-4 h-4 mr-2",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: s.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1",
                              }),
                            }),
                            e("logout"),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              s.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-6",
                children: [
                  s.jsx("div", {
                    className: "bg-white rounded-lg shadow-sm border p-6",
                    children: s.jsxs("div", {
                      className: "flex items-center",
                      children: [
                        s.jsx("div", {
                          className: "p-2 bg-blue-100 rounded-lg",
                          children: s.jsx(In, {
                            className: "w-6 h-6 text-blue-600",
                          }),
                        }),
                        s.jsxs("div", {
                          className: "ml-4",
                          children: [
                            s.jsx("p", {
                              className: "text-sm font-medium text-gray-600",
                              children: e("app.inspection.drugs"),
                            }),
                            s.jsx("p", {
                              className: "text-2xl font-semibold text-gray-900",
                              children: ye,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  s.jsx("div", {
                    className:
                      "bg-white rounded-lg shadow-sm border p-6 cursor-pointer hover:shadow-md hover:bg-gray-50 transition-all duration-200",
                    onClick: () => v(!0),
                    children: s.jsxs("div", {
                      className: "flex items-center",
                      children: [
                        s.jsx("div", {
                          className: "p-2 bg-green-100 rounded-lg",
                          children: s.jsx(qm, {
                            className: "w-6 h-6 text-green-600",
                          }),
                        }),
                        s.jsxs("div", {
                          className: "ml-4",
                          children: [
                            s.jsx("p", {
                              className: "text-sm font-medium text-gray-600",
                              children: e("app.inspection.total"),
                            }),
                            s.jsx("p", {
                              className: "text-2xl font-semibold text-gray-900",
                              children: Z,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  s.jsx("div", {
                    className:
                      "bg-white rounded-lg shadow-sm border p-6 cursor-pointer hover:shadow-md hover:bg-gray-50 transition-all duration-200",
                    onClick: () => {
                      On(), k(!0);
                    },
                    children: s.jsxs("div", {
                      className: "flex items-center",
                      children: [
                        s.jsx("div", {
                          className: "p-2 bg-purple-100 rounded-lg",
                          children: s.jsx(In, {
                            className: "w-6 h-6 text-purple-600",
                          }),
                        }),
                        s.jsxs("div", {
                          className: "ml-4",
                          children: [
                            s.jsx("p", {
                              className: "text-sm font-medium text-gray-600",
                              children: e("app.inspection.today"),
                            }),
                            s.jsx("p", {
                              className: "text-2xl font-semibold text-gray-900",
                              children: U,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              s.jsx(pg, {
                startDate: ps,
                endDate: gs,
                onDateChange: R,
                onSearch: Q,
                onReset: q,
                loading: a,
              }),
              s.jsxs("div", {
                className: "mb-6",
                children: [
                  s.jsx("div", {
                    className: "mb-4",
                    children: s.jsxs("label", {
                      className: "inline-flex items-center",
                      children: [
                        s.jsx("input", {
                          type: "checkbox",
                          checked: oe,
                          onChange: ($) => he($.target.checked),
                          className:
                            "rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50",
                        }),
                        s.jsx("span", {
                          className: "ml-2 text-sm text-gray-700",
                          children: "顯示已鎖定資料",
                        }),
                      ],
                    }),
                  }),
                  s.jsxs("div", {
                    className: "flex flex-col xl:flex-row gap-4 xl:items-end",
                    children: [
                      s.jsxs("div", {
                        className: "flex flex-col sm:flex-row gap-3",
                        children: [
                          s.jsxs("button", {
                            onClick: () => b(!0),
                            className:
                              "inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
                            children: [
                              s.jsx("svg", {
                                className: "w-5 h-5 mr-2",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: s.jsx("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: 2,
                                  d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12",
                                }),
                              }),
                              e("app.inspection.batch_upload"),
                            ],
                          }),
                          s.jsxs("button", {
                            onClick: () => I(!0),
                            className:
                              "inline-flex items-center px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",
                            children: [
                              s.jsx("svg", {
                                className: "w-5 h-5 mr-2",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: s.jsx("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: 2,
                                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                                }),
                              }),
                              e("app.inspection.excel_upload"),
                            ],
                          }),
                          s.jsxs("button", {
                            onClick: () => d(!0),
                            className:
                              "inline-flex items-center px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",
                            children: [
                              s.jsx(dr, { className: "w-5 h-5 mr-2" }),
                              e("app.inspection.manual_create"),
                            ],
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className:
                          "flex flex-col sm:flex-row gap-4 xl:flex-1 xl:justify-end",
                        children: [
                          s.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              s.jsxs("label", {
                                className:
                                  "text-sm font-medium text-gray-700 whitespace-nowrap",
                                children: [
                                  e("app.inspection.barcode_search"),
                                  ":",
                                ],
                              }),
                              s.jsxs("div", {
                                className: "relative",
                                children: [
                                  s.jsx("div", {
                                    className:
                                      "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                    children: s.jsx(zt, {
                                      className: "h-5 w-5 text-gray-400",
                                    }),
                                  }),
                                  s.jsx("input", {
                                    type: "text",
                                    value: E,
                                    onChange: ($) => vs($.target.value),
                                    placeholder: e(
                                      "app.inspection.search_barcode_placeholder"
                                    ),
                                    className:
                                      "block w-full pl-10 pr-20 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm",
                                  }),
                                  s.jsx("div", {
                                    className:
                                      "absolute inset-y-0 right-0 flex items-center",
                                    children: te
                                      ? s.jsx("div", {
                                          className: "pr-3",
                                          children: s.jsx("div", {
                                            className:
                                              "animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600",
                                          }),
                                        })
                                      : s.jsx("button", {
                                          onClick: () => V(!0),
                                          className:
                                            "pr-3 flex items-center justify-center text-blue-600 hover:text-blue-700 transition-colors",
                                          title: "掃描條碼",
                                          children: s.jsx(Qd, {
                                            className: "h-5 w-5",
                                          }),
                                        }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          s.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              s.jsxs("label", {
                                className:
                                  "text-sm font-medium text-gray-700 whitespace-nowrap",
                                children: [
                                  e("app.inspection.number_search"),
                                  ":",
                                ],
                              }),
                              s.jsxs("div", {
                                className: "relative",
                                children: [
                                  s.jsx("div", {
                                    className:
                                      "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                    children: s.jsx(zt, {
                                      className: "h-5 w-5 text-gray-400",
                                    }),
                                  }),
                                  s.jsx("input", {
                                    type: "text",
                                    value: Y,
                                    onChange: ($) => ws($.target.value),
                                    placeholder: e(
                                      "app.inspection.search_number_placeholder"
                                    ),
                                    className:
                                      "block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm",
                                  }),
                                  rt &&
                                    s.jsx("div", {
                                      className:
                                        "absolute inset-y-0 right-0 pr-3 flex items-center",
                                      children: s.jsx("div", {
                                        className:
                                          "animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600",
                                      }),
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
              u &&
                s.jsx("div", {
                  className:
                    "mb-6 p-4 bg-red-50 border border-red-200 rounded-md",
                  children: s.jsxs("div", {
                    className: "flex",
                    children: [
                      s.jsx(it, { className: "h-5 w-5 text-red-400" }),
                      s.jsx("div", {
                        className: "ml-3",
                        children: s.jsx("p", {
                          className: "text-sm text-red-800",
                          children: u,
                        }),
                      }),
                    ],
                  }),
                }),
              s.jsx(lg, { data: G, loading: a, onRowClick: g }),
            ],
          }),
        }),
        s.jsx("footer", {
          className:
            "fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-6 text-center text-gray-600 text-sm z-10",
          children: "Copyright ©2025 鴻森智能科技",
        }),
        s.jsx(mg, {
          groupedData: m,
          isOpen: !!m,
          onClose: () => g(null),
          onDataUpdate: () => Ye(),
        }),
        s.jsx(_g, {
          isOpen: x,
          onClose: () => b(!1),
          onDataUpdate: () => {
            Ye(), On();
          },
        }),
        s.jsx(Ng, {
          isOpen: S,
          onClose: () => I(!1),
          onDataUpdate: () => Ye(),
        }),
        s.jsx(jg, {
          isOpen: f,
          onClose: () => d(!1),
          onDataUpdate: () => Ye(),
        }),
        s.jsx(Pc, {
          isOpen: p,
          onClose: () => v(!1),
          inspections: r,
          initialDateRange: An,
          onDateRangeChange: ($, K) => {
            yr([$, K]), Ye($, K);
          },
          onDataUpdate: () => Ye(),
        }),
        s.jsx(Pc, {
          isOpen: w,
          onClose: () => k(!1),
          inspections: M,
          title: "今日驗收單資料",
          isToday: !0,
          onDateRangeChange: xs,
          onDataUpdate: () => {
            const [$, K] = An;
            Ye(), xs($, K);
          },
        }),
        s.jsx(Sg, { isOpen: W, onClose: () => V(!1), onBarcodeDetected: bs }),
        s.jsx(kg, {
          isOpen: ie,
          onClose: () => J(!1),
          barcode: Ee,
          onSuccess: () => {
            J(!1), E && mn(E);
          },
        }),
      ],
    });
  };
function Dg() {
  const [e, t] = y.useState(!1),
    [n, r] = y.useState(!1),
    [o, l] = y.useState(!0);
  y.useEffect(() => {
    (async () => {
      try {
        await fs(), t(!0);
        const c = np();
        r(c),
          console.log("Authentication check:", {
            authenticated: c,
            userSession: sessionStorage.getItem("user_session")
              ? "exists"
              : "missing",
          });
      } catch (c) {
        console.error("Failed to load configuration:", c);
      } finally {
        l(!1);
      }
    })();
  }, []);
  const i = () => {
    r(!0);
  };
  return !e || o
    ? s.jsx("div", {
        className: "min-h-screen flex items-center justify-center",
        children: s.jsx("div", {
          className: "text-gray-600",
          children: "Loading...",
        }),
      })
    : s.jsx(op, { children: n ? s.jsx(Eg, {}) : s.jsx(lp, { onLogin: i }) });
}
Wd(document.getElementById("root")).render(
  s.jsx(y.StrictMode, { children: s.jsx(Dg, {}) })
);
//# sourceMappingURL=index-DRLpaDBA.js.map
