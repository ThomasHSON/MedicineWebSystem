(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const s of o)
      if (s.type === "childList")
        for (const i of s.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const s = {};
    return (
      o.integrity && (s.integrity = o.integrity),
      o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
      s
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const s = n(o);
    fetch(o.href, s);
  }
})();
var za = { exports: {} },
  Oo = {},
  Aa = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ir = Symbol.for("react.element"),
  _d = Symbol.for("react.portal"),
  xd = Symbol.for("react.fragment"),
  Sd = Symbol.for("react.strict_mode"),
  kd = Symbol.for("react.profiler"),
  Cd = Symbol.for("react.provider"),
  Ed = Symbol.for("react.context"),
  Nd = Symbol.for("react.forward_ref"),
  Td = Symbol.for("react.suspense"),
  Id = Symbol.for("react.memo"),
  jd = Symbol.for("react.lazy"),
  El = Symbol.iterator;
function Pd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (El && e[El]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ua = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ha = Object.assign,
  Ba = {};
function On(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Ba),
    (this.updater = n || Ua));
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
function Wa() {}
Wa.prototype = On.prototype;
function Ei(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Ba),
    (this.updater = n || Ua));
}
var Ni = (Ei.prototype = new Wa());
Ni.constructor = Ei;
Ha(Ni, On.prototype);
Ni.isPureReactComponent = !0;
var Nl = Array.isArray,
  Va = Object.prototype.hasOwnProperty,
  Ti = { current: null },
  Qa = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ka(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Va.call(t, r) && !Qa.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), c = 0; c < l; c++) a[c] = arguments[c + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: Ir,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: Ti.current,
  };
}
function bd(e, t) {
  return {
    $$typeof: Ir,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ii(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ir;
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
var Tl = /\/+/g;
function rs(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Dd("" + e.key)
    : t.toString(36);
}
function Zr(e, t, n, r, o) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (s) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ir:
          case _d:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + rs(i, 0) : r),
      Nl(o)
        ? ((n = ""),
          e != null && (n = e.replace(Tl, "$&/") + "/"),
          Zr(o, t, n, "", function (c) {
            return c;
          }))
        : o != null &&
          (Ii(o) &&
            (o = bd(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Tl, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Nl(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var a = r + rs(s, l);
      i += Zr(s, t, n, a, o);
    }
  else if (((a = Pd(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(s = e.next()).done; )
      ((s = s.value), (a = r + rs(s, l++)), (i += Zr(s, t, n, a, o)));
  else if (s === "object")
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
function Lr(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Zr(e, r, "", "", function (s) {
      return t.call(n, s, o++);
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
var Te = { current: null },
  eo = { transition: null },
  Ld = {
    ReactCurrentDispatcher: Te,
    ReactCurrentBatchConfig: eo,
    ReactCurrentOwner: Ti,
  };
function Ga() {
  throw Error("act(...) is not supported in production builds of React.");
}
F.Children = {
  map: Lr,
  forEach: function (e, t, n) {
    Lr(
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
      Lr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Lr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ii(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
F.Component = On;
F.Fragment = xd;
F.Profiler = kd;
F.PureComponent = Ei;
F.StrictMode = Sd;
F.Suspense = Td;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ld;
F.act = Ga;
F.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Ha({}, e.props),
    o = e.key,
    s = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (i = Ti.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Va.call(t, a) &&
        !Qa.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var c = 0; c < a; c++) l[c] = arguments[c + 2];
    r.children = l;
  }
  return { $$typeof: Ir, type: e.type, key: o, ref: s, props: r, _owner: i };
};
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: Ed,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Cd, _context: e }),
    (e.Consumer = e)
  );
};
F.createElement = Ka;
F.createFactory = function (e) {
  var t = Ka.bind(null, e);
  return ((t.type = e), t);
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: Nd, render: e };
};
F.isValidElement = Ii;
F.lazy = function (e) {
  return { $$typeof: jd, _payload: { _status: -1, _result: e }, _init: Md };
};
F.memo = function (e, t) {
  return { $$typeof: Id, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
  var t = eo.transition;
  eo.transition = {};
  try {
    e();
  } finally {
    eo.transition = t;
  }
};
F.unstable_act = Ga;
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
Aa.exports = F;
var N = Aa.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rd = N,
  $d = Symbol.for("react.element"),
  Od = Symbol.for("react.fragment"),
  Fd = Object.prototype.hasOwnProperty,
  zd = Rd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ad = { key: !0, ref: !0, __self: !0, __source: !0 };
function qa(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  (n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (i = t.ref));
  for (r in t) Fd.call(t, r) && !Ad.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: $d,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: zd.current,
  };
}
Oo.Fragment = Od;
Oo.jsx = qa;
Oo.jsxs = qa;
za.exports = Oo;
var u = za.exports,
  Xa = { exports: {} },
  Ae = {},
  Ya = { exports: {} },
  Ja = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, L) {
    var O = j.length;
    j.push(L);
    e: for (; 0 < O; ) {
      var X = (O - 1) >>> 1,
        re = j[X];
      if (0 < o(re, L)) ((j[X] = L), (j[O] = re), (O = X));
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var L = j[0],
      O = j.pop();
    if (O !== L) {
      j[0] = O;
      e: for (var X = 0, re = j.length, an = re >>> 1; X < an; ) {
        var nt = 2 * (X + 1) - 1,
          Un = j[nt],
          dt = nt + 1,
          un = j[dt];
        if (0 > o(Un, O))
          dt < re && 0 > o(un, Un)
            ? ((j[X] = un), (j[dt] = O), (X = dt))
            : ((j[X] = Un), (j[nt] = O), (X = nt));
        else if (dt < re && 0 > o(un, O)) ((j[X] = un), (j[dt] = O), (X = dt));
        else break e;
      }
    }
    return L;
  }
  function o(j, L) {
    var O = j.sortIndex - L.sortIndex;
    return O !== 0 ? O : j.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var i = Date,
      l = i.now();
    e.unstable_now = function () {
      return i.now() - l;
    };
  }
  var a = [],
    c = [],
    p = 1,
    g = null,
    m = 3,
    w = !1,
    _ = !1,
    x = !1,
    b = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(j) {
    for (var L = n(c); L !== null; ) {
      if (L.callback === null) r(c);
      else if (L.startTime <= j)
        (r(c), (L.sortIndex = L.expirationTime), t(a, L));
      else break;
      L = n(c);
    }
  }
  function v(j) {
    if (((x = !1), h(j), !_))
      if (n(a) !== null) ((_ = !0), ne(S));
      else {
        var L = n(c);
        L !== null && ke(v, L.startTime - j);
      }
  }
  function S(j, L) {
    ((_ = !1), x && ((x = !1), f(T), (T = -1)), (w = !0));
    var O = m;
    try {
      for (
        h(L), g = n(a);
        g !== null && (!(g.expirationTime > L) || (j && !H()));
      ) {
        var X = g.callback;
        if (typeof X == "function") {
          ((g.callback = null), (m = g.priorityLevel));
          var re = X(g.expirationTime <= L);
          ((L = e.unstable_now()),
            typeof re == "function" ? (g.callback = re) : g === n(a) && r(a),
            h(L));
        } else r(a);
        g = n(a);
      }
      if (g !== null) var an = !0;
      else {
        var nt = n(c);
        (nt !== null && ke(v, nt.startTime - L), (an = !1));
      }
      return an;
    } finally {
      ((g = null), (m = O), (w = !1));
    }
  }
  var I = !1,
    C = null,
    T = -1,
    R = 5,
    M = -1;
  function H() {
    return !(e.unstable_now() - M < R);
  }
  function ct() {
    if (C !== null) {
      var j = e.unstable_now();
      M = j;
      var L = !0;
      try {
        L = C(!0, j);
      } finally {
        L ? le() : ((I = !1), (C = null));
      }
    } else I = !1;
  }
  var le;
  if (typeof d == "function")
    le = function () {
      d(ct);
    };
  else if (typeof MessageChannel < "u") {
    var B = new MessageChannel(),
      V = B.port2;
    ((B.port1.onmessage = ct),
      (le = function () {
        V.postMessage(null);
      }));
  } else
    le = function () {
      b(ct, 0);
    };
  function ne(j) {
    ((C = j), I || ((I = !0), le()));
  }
  function ke(j, L) {
    T = b(function () {
      j(e.unstable_now());
    }, L);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      _ || w || ((_ = !0), ne(S));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (R = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (j) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = m;
      }
      var O = m;
      m = L;
      try {
        return j();
      } finally {
        m = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, L) {
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
      var O = m;
      m = j;
      try {
        return L();
      } finally {
        m = O;
      }
    }),
    (e.unstable_scheduleCallback = function (j, L, O) {
      var X = e.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? X + O : X))
          : (O = X),
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
        (re = O + re),
        (j = {
          id: p++,
          callback: L,
          priorityLevel: j,
          startTime: O,
          expirationTime: re,
          sortIndex: -1,
        }),
        O > X
          ? ((j.sortIndex = O),
            t(c, j),
            n(a) === null &&
              j === n(c) &&
              (x ? (f(T), (T = -1)) : (x = !0), ke(v, O - X)))
          : ((j.sortIndex = re), t(a, j), _ || w || ((_ = !0), ne(S))),
        j
      );
    }),
    (e.unstable_shouldYield = H),
    (e.unstable_wrapCallback = function (j) {
      var L = m;
      return function () {
        var O = m;
        m = L;
        try {
          return j.apply(this, arguments);
        } finally {
          m = O;
        }
      };
    }));
})(Ja);
Ya.exports = Ja;
var Ud = Ya.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hd = N,
  ze = Ud;
function k(e) {
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
var Za = new Set(),
  ur = {};
function sn(e, t) {
  (jn(e, t), jn(e + "Capture", t));
}
function jn(e, t) {
  for (ur[e] = t, e = 0; e < t.length; e++) Za.add(t[e]);
}
var yt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  bs = Object.prototype.hasOwnProperty,
  Bd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Il = {},
  jl = {};
function Wd(e) {
  return bs.call(jl, e)
    ? !0
    : bs.call(Il, e)
      ? !1
      : Bd.test(e)
        ? (jl[e] = !0)
        : ((Il[e] = !0), !1);
}
function Vd(e, t, n, r) {
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
  if (t === null || typeof t > "u" || Vd(e, t, n, r)) return !0;
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
function Ie(e, t, n, r, o, s, i) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = i));
}
var ye = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ye[e] = new Ie(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ye[t] = new Ie(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ye[e] = new Ie(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ye[e] = new Ie(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ye[e] = new Ie(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ye[e] = new Ie(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ye[e] = new Ie(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ye[e] = new Ie(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ye[e] = new Ie(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ji = /[\-:]([a-z])/g;
function Pi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ji, Pi);
    ye[t] = new Ie(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ji, Pi);
    ye[t] = new Ie(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ji, Pi);
  ye[t] = new Ie(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ye[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ye.xlinkHref = new Ie(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ye[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function bi(e, t, n, r) {
  var o = ye.hasOwnProperty(t) ? ye[t] : null;
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
var xt = Hd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Rr = Symbol.for("react.element"),
  dn = Symbol.for("react.portal"),
  fn = Symbol.for("react.fragment"),
  Di = Symbol.for("react.strict_mode"),
  Ds = Symbol.for("react.profiler"),
  eu = Symbol.for("react.provider"),
  tu = Symbol.for("react.context"),
  Mi = Symbol.for("react.forward_ref"),
  Ms = Symbol.for("react.suspense"),
  Ls = Symbol.for("react.suspense_list"),
  Li = Symbol.for("react.memo"),
  Ct = Symbol.for("react.lazy"),
  nu = Symbol.for("react.offscreen"),
  Pl = Symbol.iterator;
function Hn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Pl && e[Pl]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ee = Object.assign,
  os;
function Xn(e) {
  if (os === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      os = (t && t[1]) || "";
    }
  return (
    `
` +
    os +
    e
  );
}
var ss = !1;
function is(e, t) {
  if (!e || ss) return "";
  ss = !0;
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
        var o = c.stack.split(`
`),
          s = r.stack.split(`
`),
          i = o.length - 1,
          l = s.length - 1;
        1 <= i && 0 <= l && o[i] !== s[l];
      )
        l--;
      for (; 1 <= i && 0 <= l; i--, l--)
        if (o[i] !== s[l]) {
          if (i !== 1 || l !== 1)
            do
              if ((i--, l--, 0 > l || o[i] !== s[l])) {
                var a =
                  `
` + o[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= l);
          break;
        }
    }
  } finally {
    ((ss = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? Xn(e) : "";
}
function Kd(e) {
  switch (e.tag) {
    case 5:
      return Xn(e.type);
    case 16:
      return Xn("Lazy");
    case 13:
      return Xn("Suspense");
    case 19:
      return Xn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = is(e.type, !1)), e);
    case 11:
      return ((e = is(e.type.render, !1)), e);
    case 1:
      return ((e = is(e.type, !0)), e);
    default:
      return "";
  }
}
function Rs(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case fn:
      return "Fragment";
    case dn:
      return "Portal";
    case Ds:
      return "Profiler";
    case Di:
      return "StrictMode";
    case Ms:
      return "Suspense";
    case Ls:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case tu:
        return (e.displayName || "Context") + ".Consumer";
      case eu:
        return (e._context.displayName || "Context") + ".Provider";
      case Mi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Li:
        return (
          (t = e.displayName || null),
          t !== null ? t : Rs(e.type) || "Memo"
        );
      case Ct:
        ((t = e._payload), (e = e._init));
        try {
          return Rs(e(t));
        } catch {}
    }
  return null;
}
function Gd(e) {
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
      return Rs(t);
    case 8:
      return t === Di ? "StrictMode" : "Mode";
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
function Ft(e) {
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
function ru(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function qd(e) {
  var t = ru(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          ((r = "" + i), s.call(this, i));
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
function $r(e) {
  e._valueTracker || (e._valueTracker = qd(e));
}
function ou(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ru(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function fo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function $s(e, t) {
  var n = t.checked;
  return ee({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function bl(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = Ft(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function su(e, t) {
  ((t = t.checked), t != null && bi(e, "checked", t, !1));
}
function Os(e, t) {
  su(e, t);
  var n = Ft(t.value),
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
    ? Fs(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Fs(e, t.type, Ft(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Dl(e, t, n) {
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
function Fs(e, t, n) {
  (t !== "number" || fo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Yn = Array.isArray;
function kn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      ((o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + Ft(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ((e[o].selected = !0), r && (e[o].defaultSelected = !0));
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function zs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return ee({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ml(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (Yn(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: Ft(n) };
}
function iu(e, t) {
  var n = Ft(t.value),
    r = Ft(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function Ll(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function lu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function As(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? lu(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Or,
  au = (function (e) {
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
        Or = Or || document.createElement("div"),
          Or.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Or.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function cr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var er = {
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
  Xd = ["Webkit", "ms", "Moz", "O"];
Object.keys(er).forEach(function (e) {
  Xd.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (er[t] = er[e]));
  });
});
function uu(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (er.hasOwnProperty(e) && er[e])
      ? ("" + t).trim()
      : t + "px";
}
function cu(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = uu(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o));
    }
}
var Yd = ee(
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
function Us(e, t) {
  if (t) {
    if (Yd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function Hs(e, t) {
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
var Bs = null;
function Ri(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ws = null,
  Cn = null,
  En = null;
function Rl(e) {
  if ((e = br(e))) {
    if (typeof Ws != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = Ho(t)), Ws(e.stateNode, e.type, t));
  }
}
function du(e) {
  Cn ? (En ? En.push(e) : (En = [e])) : (Cn = e);
}
function fu() {
  if (Cn) {
    var e = Cn,
      t = En;
    if (((En = Cn = null), Rl(e), t)) for (e = 0; e < t.length; e++) Rl(t[e]);
  }
}
function hu(e, t) {
  return e(t);
}
function pu() {}
var ls = !1;
function mu(e, t, n) {
  if (ls) return e(t, n);
  ls = !0;
  try {
    return hu(e, t, n);
  } finally {
    ((ls = !1), (Cn !== null || En !== null) && (pu(), fu()));
  }
}
function dr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ho(n);
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
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var Vs = !1;
if (yt)
  try {
    var Bn = {};
    (Object.defineProperty(Bn, "passive", {
      get: function () {
        Vs = !0;
      },
    }),
      window.addEventListener("test", Bn, Bn),
      window.removeEventListener("test", Bn, Bn));
  } catch {
    Vs = !1;
  }
function Jd(e, t, n, r, o, s, i, l, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (p) {
    this.onError(p);
  }
}
var tr = !1,
  ho = null,
  po = !1,
  Qs = null,
  Zd = {
    onError: function (e) {
      ((tr = !0), (ho = e));
    },
  };
function ef(e, t, n, r, o, s, i, l, a) {
  ((tr = !1), (ho = null), Jd.apply(Zd, arguments));
}
function tf(e, t, n, r, o, s, i, l, a) {
  if ((ef.apply(this, arguments), tr)) {
    if (tr) {
      var c = ho;
      ((tr = !1), (ho = null));
    } else throw Error(k(198));
    po || ((po = !0), (Qs = c));
  }
}
function ln(e) {
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
function gu(e) {
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
function $l(e) {
  if (ln(e) !== e) throw Error(k(188));
}
function nf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = ln(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var s = o.alternate;
    if (s === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === s.child) {
      for (s = o.child; s; ) {
        if (s === n) return ($l(o), e);
        if (s === r) return ($l(o), t);
        s = s.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) ((n = o), (r = s));
    else {
      for (var i = !1, l = o.child; l; ) {
        if (l === n) {
          ((i = !0), (n = o), (r = s));
          break;
        }
        if (l === r) {
          ((i = !0), (r = o), (n = s));
          break;
        }
        l = l.sibling;
      }
      if (!i) {
        for (l = s.child; l; ) {
          if (l === n) {
            ((i = !0), (n = s), (r = o));
            break;
          }
          if (l === r) {
            ((i = !0), (r = s), (n = o));
            break;
          }
          l = l.sibling;
        }
        if (!i) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function yu(e) {
  return ((e = nf(e)), e !== null ? vu(e) : null);
}
function vu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = vu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var wu = ze.unstable_scheduleCallback,
  Ol = ze.unstable_cancelCallback,
  rf = ze.unstable_shouldYield,
  of = ze.unstable_requestPaint,
  oe = ze.unstable_now,
  sf = ze.unstable_getCurrentPriorityLevel,
  $i = ze.unstable_ImmediatePriority,
  _u = ze.unstable_UserBlockingPriority,
  mo = ze.unstable_NormalPriority,
  lf = ze.unstable_LowPriority,
  xu = ze.unstable_IdlePriority,
  Fo = null,
  at = null;
function af(e) {
  if (at && typeof at.onCommitFiberRoot == "function")
    try {
      at.onCommitFiberRoot(Fo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ze = Math.clz32 ? Math.clz32 : df,
  uf = Math.log,
  cf = Math.LN2;
function df(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((uf(e) / cf) | 0)) | 0);
}
var Fr = 64,
  zr = 4194304;
function Jn(e) {
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
function go(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    s = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var l = i & ~o;
    l !== 0 ? (r = Jn(l)) : ((s &= i), s !== 0 && (r = Jn(s)));
  } else ((i = n & ~o), i !== 0 ? (r = Jn(i)) : s !== 0 && (r = Jn(s)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (s = t & -t), o >= s || (o === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - Ze(t)), (o = 1 << n), (r |= e[n]), (t &= ~o));
  return r;
}
function ff(e, t) {
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
      s = e.pendingLanes;
    0 < s;
  ) {
    var i = 31 - Ze(s),
      l = 1 << i,
      a = o[i];
    (a === -1
      ? (!(l & n) || l & r) && (o[i] = ff(l, t))
      : a <= t && (e.expiredLanes |= l),
      (s &= ~l));
  }
}
function Ks(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Su() {
  var e = Fr;
  return ((Fr <<= 1), !(Fr & 4194240) && (Fr = 64), e);
}
function as(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function jr(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ze(t)),
    (e[t] = n));
}
function pf(e, t) {
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
    var o = 31 - Ze(n),
      s = 1 << o;
    ((t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~s));
  }
}
function Oi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ze(n),
      o = 1 << r;
    ((o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o));
  }
}
var A = 0;
function ku(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Cu,
  Fi,
  Eu,
  Nu,
  Tu,
  Gs = !1,
  Ar = [],
  Pt = null,
  bt = null,
  Dt = null,
  fr = new Map(),
  hr = new Map(),
  Nt = [],
  mf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Fl(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Pt = null;
      break;
    case "dragenter":
    case "dragleave":
      bt = null;
      break;
    case "mouseover":
    case "mouseout":
      Dt = null;
      break;
    case "pointerover":
    case "pointerout":
      fr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      hr.delete(t.pointerId);
  }
}
function Wn(e, t, n, r, o, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [o],
      }),
      t !== null && ((t = br(t)), t !== null && Fi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function gf(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return ((Pt = Wn(Pt, e, t, n, r, o)), !0);
    case "dragenter":
      return ((bt = Wn(bt, e, t, n, r, o)), !0);
    case "mouseover":
      return ((Dt = Wn(Dt, e, t, n, r, o)), !0);
    case "pointerover":
      var s = o.pointerId;
      return (fr.set(s, Wn(fr.get(s) || null, e, t, n, r, o)), !0);
    case "gotpointercapture":
      return (
        (s = o.pointerId),
        hr.set(s, Wn(hr.get(s) || null, e, t, n, r, o)),
        !0
      );
  }
  return !1;
}
function Iu(e) {
  var t = Qt(e.target);
  if (t !== null) {
    var n = ln(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = gu(n)), t !== null)) {
          ((e.blockedOn = t),
            Tu(e.priority, function () {
              Eu(n);
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
function to(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = qs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((Bs = r), n.target.dispatchEvent(r), (Bs = null));
    } else return ((t = br(n)), t !== null && Fi(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function zl(e, t, n) {
  to(e) && n.delete(t);
}
function yf() {
  ((Gs = !1),
    Pt !== null && to(Pt) && (Pt = null),
    bt !== null && to(bt) && (bt = null),
    Dt !== null && to(Dt) && (Dt = null),
    fr.forEach(zl),
    hr.forEach(zl));
}
function Vn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Gs ||
      ((Gs = !0),
      ze.unstable_scheduleCallback(ze.unstable_NormalPriority, yf)));
}
function pr(e) {
  function t(o) {
    return Vn(o, e);
  }
  if (0 < Ar.length) {
    Vn(Ar[0], e);
    for (var n = 1; n < Ar.length; n++) {
      var r = Ar[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Pt !== null && Vn(Pt, e),
      bt !== null && Vn(bt, e),
      Dt !== null && Vn(Dt, e),
      fr.forEach(t),
      hr.forEach(t),
      n = 0;
    n < Nt.length;
    n++
  )
    ((r = Nt[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < Nt.length && ((n = Nt[0]), n.blockedOn === null); )
    (Iu(n), n.blockedOn === null && Nt.shift());
}
var Nn = xt.ReactCurrentBatchConfig,
  yo = !0;
function vf(e, t, n, r) {
  var o = A,
    s = Nn.transition;
  Nn.transition = null;
  try {
    ((A = 1), zi(e, t, n, r));
  } finally {
    ((A = o), (Nn.transition = s));
  }
}
function wf(e, t, n, r) {
  var o = A,
    s = Nn.transition;
  Nn.transition = null;
  try {
    ((A = 4), zi(e, t, n, r));
  } finally {
    ((A = o), (Nn.transition = s));
  }
}
function zi(e, t, n, r) {
  if (yo) {
    var o = qs(e, t, n, r);
    if (o === null) (vs(e, t, r, vo, n), Fl(e, r));
    else if (gf(o, e, t, n, r)) r.stopPropagation();
    else if ((Fl(e, r), t & 4 && -1 < mf.indexOf(e))) {
      for (; o !== null; ) {
        var s = br(o);
        if (
          (s !== null && Cu(s),
          (s = qs(e, t, n, r)),
          s === null && vs(e, t, r, vo, n),
          s === o)
        )
          break;
        o = s;
      }
      o !== null && r.stopPropagation();
    } else vs(e, t, r, null, n);
  }
}
var vo = null;
function qs(e, t, n, r) {
  if (((vo = null), (e = Ri(r)), (e = Qt(e)), e !== null))
    if (((t = ln(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = gu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((vo = e), null);
}
function ju(e) {
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
        case $i:
          return 1;
        case _u:
          return 4;
        case mo:
        case lf:
          return 16;
        case xu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var It = null,
  Ai = null,
  no = null;
function Pu() {
  if (no) return no;
  var e,
    t = Ai,
    n = t.length,
    r,
    o = "value" in It ? It.value : It.textContent,
    s = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[s - r]; r++);
  return (no = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ro(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ur() {
  return !0;
}
function Al() {
  return !1;
}
function Ue(e) {
  function t(n, r, o, s, i) {
    ((this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = i),
      (this.currentTarget = null));
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Ur
        : Al),
      (this.isPropagationStopped = Al),
      this
    );
  }
  return (
    ee(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ur));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ur));
      },
      persist: function () {},
      isPersistent: Ur,
    }),
    t
  );
}
var Fn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ui = Ue(Fn),
  Pr = ee({}, Fn, { view: 0, detail: 0 }),
  _f = Ue(Pr),
  us,
  cs,
  Qn,
  zo = ee({}, Pr, {
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
    getModifierState: Hi,
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
        : (e !== Qn &&
            (Qn && e.type === "mousemove"
              ? ((us = e.screenX - Qn.screenX), (cs = e.screenY - Qn.screenY))
              : (cs = us = 0),
            (Qn = e)),
          us);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : cs;
    },
  }),
  Ul = Ue(zo),
  xf = ee({}, zo, { dataTransfer: 0 }),
  Sf = Ue(xf),
  kf = ee({}, Pr, { relatedTarget: 0 }),
  ds = Ue(kf),
  Cf = ee({}, Fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ef = Ue(Cf),
  Nf = ee({}, Fn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Tf = Ue(Nf),
  If = ee({}, Fn, { data: 0 }),
  Hl = Ue(If),
  jf = {
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
  Pf = {
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
  bf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Df(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = bf[e]) ? !!t[e] : !1;
}
function Hi() {
  return Df;
}
var Mf = ee({}, Pr, {
    key: function (e) {
      if (e.key) {
        var t = jf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ro(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Pf[e.keyCode] || "Unidentified"
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
    getModifierState: Hi,
    charCode: function (e) {
      return e.type === "keypress" ? ro(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ro(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Lf = Ue(Mf),
  Rf = ee({}, zo, {
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
  Bl = Ue(Rf),
  $f = ee({}, Pr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Hi,
  }),
  Of = Ue($f),
  Ff = ee({}, Fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  zf = Ue(Ff),
  Af = ee({}, zo, {
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
  Uf = Ue(Af),
  Hf = [9, 13, 27, 32],
  Bi = yt && "CompositionEvent" in window,
  nr = null;
yt && "documentMode" in document && (nr = document.documentMode);
var Bf = yt && "TextEvent" in window && !nr,
  bu = yt && (!Bi || (nr && 8 < nr && 11 >= nr)),
  Wl = " ",
  Vl = !1;
function Du(e, t) {
  switch (e) {
    case "keyup":
      return Hf.indexOf(t.keyCode) !== -1;
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
function Mu(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var hn = !1;
function Wf(e, t) {
  switch (e) {
    case "compositionend":
      return Mu(t);
    case "keypress":
      return t.which !== 32 ? null : ((Vl = !0), Wl);
    case "textInput":
      return ((e = t.data), e === Wl && Vl ? null : e);
    default:
      return null;
  }
}
function Vf(e, t) {
  if (hn)
    return e === "compositionend" || (!Bi && Du(e, t))
      ? ((e = Pu()), (no = Ai = It = null), (hn = !1), e)
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
function Ql(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Qf[e.type] : t === "textarea";
}
function Lu(e, t, n, r) {
  (du(r),
    (t = wo(t, "onChange")),
    0 < t.length &&
      ((n = new Ui("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var rr = null,
  mr = null;
function Kf(e) {
  Vu(e, 0);
}
function Ao(e) {
  var t = gn(e);
  if (ou(t)) return e;
}
function Gf(e, t) {
  if (e === "change") return t;
}
var Ru = !1;
if (yt) {
  var fs;
  if (yt) {
    var hs = "oninput" in document;
    if (!hs) {
      var Kl = document.createElement("div");
      (Kl.setAttribute("oninput", "return;"),
        (hs = typeof Kl.oninput == "function"));
    }
    fs = hs;
  } else fs = !1;
  Ru = fs && (!document.documentMode || 9 < document.documentMode);
}
function Gl() {
  rr && (rr.detachEvent("onpropertychange", $u), (mr = rr = null));
}
function $u(e) {
  if (e.propertyName === "value" && Ao(mr)) {
    var t = [];
    (Lu(t, mr, e, Ri(e)), mu(Kf, t));
  }
}
function qf(e, t, n) {
  e === "focusin"
    ? (Gl(), (rr = t), (mr = n), rr.attachEvent("onpropertychange", $u))
    : e === "focusout" && Gl();
}
function Xf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ao(mr);
}
function Yf(e, t) {
  if (e === "click") return Ao(t);
}
function Jf(e, t) {
  if (e === "input" || e === "change") return Ao(t);
}
function Zf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var tt = typeof Object.is == "function" ? Object.is : Zf;
function gr(e, t) {
  if (tt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!bs.call(t, o) || !tt(e[o], t[o])) return !1;
  }
  return !0;
}
function ql(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Xl(e, t) {
  var n = ql(e);
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
    n = ql(n);
  }
}
function Ou(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Ou(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Fu() {
  for (var e = window, t = fo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = fo(e.document);
  }
  return t;
}
function Wi(e) {
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
function eh(e) {
  var t = Fu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ou(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Wi(n)) {
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
          s = Math.min(r.start, o);
        ((r = r.end === void 0 ? s : Math.min(r.end, o)),
          !e.extend && s > r && ((o = r), (r = s), (s = o)),
          (o = Xl(n, s)));
        var i = Xl(n, r);
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
          s > r
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
var th = yt && "documentMode" in document && 11 >= document.documentMode,
  pn = null,
  Xs = null,
  or = null,
  Ys = !1;
function Yl(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ys ||
    pn == null ||
    pn !== fo(r) ||
    ((r = pn),
    "selectionStart" in r && Wi(r)
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
    (or && gr(or, r)) ||
      ((or = r),
      (r = wo(Xs, "onSelect")),
      0 < r.length &&
        ((t = new Ui("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = pn))));
}
function Hr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var mn = {
    animationend: Hr("Animation", "AnimationEnd"),
    animationiteration: Hr("Animation", "AnimationIteration"),
    animationstart: Hr("Animation", "AnimationStart"),
    transitionend: Hr("Transition", "TransitionEnd"),
  },
  ps = {},
  zu = {};
yt &&
  ((zu = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete mn.animationend.animation,
    delete mn.animationiteration.animation,
    delete mn.animationstart.animation),
  "TransitionEvent" in window || delete mn.transitionend.transition);
function Uo(e) {
  if (ps[e]) return ps[e];
  if (!mn[e]) return e;
  var t = mn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in zu) return (ps[e] = t[n]);
  return e;
}
var Au = Uo("animationend"),
  Uu = Uo("animationiteration"),
  Hu = Uo("animationstart"),
  Bu = Uo("transitionend"),
  Wu = new Map(),
  Jl =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function At(e, t) {
  (Wu.set(e, t), sn(t, [e]));
}
for (var ms = 0; ms < Jl.length; ms++) {
  var gs = Jl[ms],
    nh = gs.toLowerCase(),
    rh = gs[0].toUpperCase() + gs.slice(1);
  At(nh, "on" + rh);
}
At(Au, "onAnimationEnd");
At(Uu, "onAnimationIteration");
At(Hu, "onAnimationStart");
At("dblclick", "onDoubleClick");
At("focusin", "onFocus");
At("focusout", "onBlur");
At(Bu, "onTransitionEnd");
jn("onMouseEnter", ["mouseout", "mouseover"]);
jn("onMouseLeave", ["mouseout", "mouseover"]);
jn("onPointerEnter", ["pointerout", "pointerover"]);
jn("onPointerLeave", ["pointerout", "pointerover"]);
sn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
sn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
sn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
sn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
sn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
sn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Zn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  oh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Zn));
function Zl(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), tf(r, t, void 0, e), (e.currentTarget = null));
}
function Vu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var l = r[i],
            a = l.instance,
            c = l.currentTarget;
          if (((l = l.listener), a !== s && o.isPropagationStopped())) break e;
          (Zl(o, l, c), (s = a));
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((l = r[i]),
            (a = l.instance),
            (c = l.currentTarget),
            (l = l.listener),
            a !== s && o.isPropagationStopped())
          )
            break e;
          (Zl(o, l, c), (s = a));
        }
    }
  }
  if (po) throw ((e = Qs), (po = !1), (Qs = null), e);
}
function Q(e, t) {
  var n = t[ni];
  n === void 0 && (n = t[ni] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Qu(t, e, 2, !1), n.add(r));
}
function ys(e, t, n) {
  var r = 0;
  (t && (r |= 4), Qu(n, e, r, t));
}
var Br = "_reactListening" + Math.random().toString(36).slice(2);
function yr(e) {
  if (!e[Br]) {
    ((e[Br] = !0),
      Za.forEach(function (n) {
        n !== "selectionchange" && (oh.has(n) || ys(n, !1, e), ys(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Br] || ((t[Br] = !0), ys("selectionchange", !1, t));
  }
}
function Qu(e, t, n, r) {
  switch (ju(t)) {
    case 1:
      var o = vf;
      break;
    case 4:
      o = wf;
      break;
    default:
      o = zi;
  }
  ((n = o.bind(null, t, n, e)),
    (o = void 0),
    !Vs ||
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
function vs(e, t, n, r, o) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; l !== null; ) {
          if (((i = Qt(l)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = s = i;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  mu(function () {
    var c = s,
      p = Ri(n),
      g = [];
    e: {
      var m = Wu.get(e);
      if (m !== void 0) {
        var w = Ui,
          _ = e;
        switch (e) {
          case "keypress":
            if (ro(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = Lf;
            break;
          case "focusin":
            ((_ = "focus"), (w = ds));
            break;
          case "focusout":
            ((_ = "blur"), (w = ds));
            break;
          case "beforeblur":
          case "afterblur":
            w = ds;
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
            w = Ul;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = Sf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Of;
            break;
          case Au:
          case Uu:
          case Hu:
            w = Ef;
            break;
          case Bu:
            w = zf;
            break;
          case "scroll":
            w = _f;
            break;
          case "wheel":
            w = Uf;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = Tf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = Bl;
        }
        var x = (t & 4) !== 0,
          b = !x && e === "scroll",
          f = x ? (m !== null ? m + "Capture" : null) : m;
        x = [];
        for (var d = c, h; d !== null; ) {
          h = d;
          var v = h.stateNode;
          if (
            (h.tag === 5 &&
              v !== null &&
              ((h = v),
              f !== null && ((v = dr(d, f)), v != null && x.push(vr(d, v, h)))),
            b)
          )
            break;
          d = d.return;
        }
        0 < x.length &&
          ((m = new w(m, _, null, n, p)), g.push({ event: m, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Bs &&
            (_ = n.relatedTarget || n.fromElement) &&
            (Qt(_) || _[vt]))
        )
          break e;
        if (
          (w || m) &&
          ((m =
            p.window === p
              ? p
              : (m = p.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
          w
            ? ((_ = n.relatedTarget || n.toElement),
              (w = c),
              (_ = _ ? Qt(_) : null),
              _ !== null &&
                ((b = ln(_)), _ !== b || (_.tag !== 5 && _.tag !== 6)) &&
                (_ = null))
            : ((w = null), (_ = c)),
          w !== _)
        ) {
          if (
            ((x = Ul),
            (v = "onMouseLeave"),
            (f = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = Bl),
              (v = "onPointerLeave"),
              (f = "onPointerEnter"),
              (d = "pointer")),
            (b = w == null ? m : gn(w)),
            (h = _ == null ? m : gn(_)),
            (m = new x(v, d + "leave", w, n, p)),
            (m.target = b),
            (m.relatedTarget = h),
            (v = null),
            Qt(p) === c &&
              ((x = new x(f, d + "enter", _, n, p)),
              (x.target = h),
              (x.relatedTarget = b),
              (v = x)),
            (b = v),
            w && _)
          )
            t: {
              for (x = w, f = _, d = 0, h = x; h; h = cn(h)) d++;
              for (h = 0, v = f; v; v = cn(v)) h++;
              for (; 0 < d - h; ) ((x = cn(x)), d--);
              for (; 0 < h - d; ) ((f = cn(f)), h--);
              for (; d--; ) {
                if (x === f || (f !== null && x === f.alternate)) break t;
                ((x = cn(x)), (f = cn(f)));
              }
              x = null;
            }
          else x = null;
          (w !== null && ea(g, m, w, x, !1),
            _ !== null && b !== null && ea(g, b, _, x, !0));
        }
      }
      e: {
        if (
          ((m = c ? gn(c) : window),
          (w = m.nodeName && m.nodeName.toLowerCase()),
          w === "select" || (w === "input" && m.type === "file"))
        )
          var S = Gf;
        else if (Ql(m))
          if (Ru) S = Jf;
          else {
            S = Xf;
            var I = qf;
          }
        else
          (w = m.nodeName) &&
            w.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (S = Yf);
        if (S && (S = S(e, c))) {
          Lu(g, S, n, p);
          break e;
        }
        (I && I(e, m, c),
          e === "focusout" &&
            (I = m._wrapperState) &&
            I.controlled &&
            m.type === "number" &&
            Fs(m, "number", m.value));
      }
      switch (((I = c ? gn(c) : window), e)) {
        case "focusin":
          (Ql(I) || I.contentEditable === "true") &&
            ((pn = I), (Xs = c), (or = null));
          break;
        case "focusout":
          or = Xs = pn = null;
          break;
        case "mousedown":
          Ys = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Ys = !1), Yl(g, n, p));
          break;
        case "selectionchange":
          if (th) break;
        case "keydown":
        case "keyup":
          Yl(g, n, p);
      }
      var C;
      if (Bi)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        hn
          ? Du(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      (T &&
        (bu &&
          n.locale !== "ko" &&
          (hn || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && hn && (C = Pu())
            : ((It = p),
              (Ai = "value" in It ? It.value : It.textContent),
              (hn = !0))),
        (I = wo(c, T)),
        0 < I.length &&
          ((T = new Hl(T, e, null, n, p)),
          g.push({ event: T, listeners: I }),
          C ? (T.data = C) : ((C = Mu(n)), C !== null && (T.data = C)))),
        (C = Bf ? Wf(e, n) : Vf(e, n)) &&
          ((c = wo(c, "onBeforeInput")),
          0 < c.length &&
            ((p = new Hl("onBeforeInput", "beforeinput", null, n, p)),
            g.push({ event: p, listeners: c }),
            (p.data = C))));
    }
    Vu(g, t);
  });
}
function vr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function wo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      s = o.stateNode;
    (o.tag === 5 &&
      s !== null &&
      ((o = s),
      (s = dr(e, n)),
      s != null && r.unshift(vr(e, s, o)),
      (s = dr(e, t)),
      s != null && r.push(vr(e, s, o))),
      (e = e.return));
  }
  return r;
}
function cn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ea(e, t, n, r, o) {
  for (var s = t._reactName, i = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      c = l.stateNode;
    if (a !== null && a === r) break;
    (l.tag === 5 &&
      c !== null &&
      ((l = c),
      o
        ? ((a = dr(n, s)), a != null && i.unshift(vr(n, a, l)))
        : o || ((a = dr(n, s)), a != null && i.push(vr(n, a, l)))),
      (n = n.return));
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var sh = /\r\n?/g,
  ih = /\u0000|\uFFFD/g;
function ta(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      sh,
      `
`,
    )
    .replace(ih, "");
}
function Wr(e, t, n) {
  if (((t = ta(t)), ta(e) !== t && n)) throw Error(k(425));
}
function _o() {}
var Js = null,
  Zs = null;
function ei(e, t) {
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
var ti = typeof setTimeout == "function" ? setTimeout : void 0,
  lh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  na = typeof Promise == "function" ? Promise : void 0,
  ah =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof na < "u"
        ? function (e) {
            return na.resolve(null).then(e).catch(uh);
          }
        : ti;
function uh(e) {
  setTimeout(function () {
    throw e;
  });
}
function ws(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(o), pr(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  pr(t);
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
function ra(e) {
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
var zn = Math.random().toString(36).slice(2),
  lt = "__reactFiber$" + zn,
  wr = "__reactProps$" + zn,
  vt = "__reactContainer$" + zn,
  ni = "__reactEvents$" + zn,
  ch = "__reactListeners$" + zn,
  dh = "__reactHandles$" + zn;
function Qt(e) {
  var t = e[lt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[vt] || n[lt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ra(e); e !== null; ) {
          if ((n = e[lt])) return n;
          e = ra(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function br(e) {
  return (
    (e = e[lt] || e[vt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function gn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function Ho(e) {
  return e[wr] || null;
}
var ri = [],
  yn = -1;
function Ut(e) {
  return { current: e };
}
function K(e) {
  0 > yn || ((e.current = ri[yn]), (ri[yn] = null), yn--);
}
function W(e, t) {
  (yn++, (ri[yn] = e.current), (e.current = t));
}
var zt = {},
  Se = Ut(zt),
  De = Ut(!1),
  Zt = zt;
function Pn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return zt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    s;
  for (s in n) o[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Me(e) {
  return ((e = e.childContextTypes), e != null);
}
function xo() {
  (K(De), K(Se));
}
function oa(e, t, n) {
  if (Se.current !== zt) throw Error(k(168));
  (W(Se, t), W(De, n));
}
function Ku(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(k(108, Gd(e) || "Unknown", o));
  return ee({}, n, r);
}
function So(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || zt),
    (Zt = Se.current),
    W(Se, e),
    W(De, De.current),
    !0
  );
}
function sa(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  (n
    ? ((e = Ku(e, t, Zt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      K(De),
      K(Se),
      W(Se, e))
    : K(De),
    W(De, n));
}
var ht = null,
  Bo = !1,
  _s = !1;
function Gu(e) {
  ht === null ? (ht = [e]) : ht.push(e);
}
function fh(e) {
  ((Bo = !0), Gu(e));
}
function Ht() {
  if (!_s && ht !== null) {
    _s = !0;
    var e = 0,
      t = A;
    try {
      var n = ht;
      for (A = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((ht = null), (Bo = !1));
    } catch (o) {
      throw (ht !== null && (ht = ht.slice(e + 1)), wu($i, Ht), o);
    } finally {
      ((A = t), (_s = !1));
    }
  }
  return null;
}
var vn = [],
  wn = 0,
  ko = null,
  Co = 0,
  He = [],
  Be = 0,
  en = null,
  pt = 1,
  mt = "";
function Wt(e, t) {
  ((vn[wn++] = Co), (vn[wn++] = ko), (ko = e), (Co = t));
}
function qu(e, t, n) {
  ((He[Be++] = pt), (He[Be++] = mt), (He[Be++] = en), (en = e));
  var r = pt;
  e = mt;
  var o = 32 - Ze(r) - 1;
  ((r &= ~(1 << o)), (n += 1));
  var s = 32 - Ze(t) + o;
  if (30 < s) {
    var i = o - (o % 5);
    ((s = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (pt = (1 << (32 - Ze(t) + o)) | (n << o) | r),
      (mt = s + e));
  } else ((pt = (1 << s) | (n << o) | r), (mt = e));
}
function Vi(e) {
  e.return !== null && (Wt(e, 1), qu(e, 1, 0));
}
function Qi(e) {
  for (; e === ko; )
    ((ko = vn[--wn]), (vn[wn] = null), (Co = vn[--wn]), (vn[wn] = null));
  for (; e === en; )
    ((en = He[--Be]),
      (He[Be] = null),
      (mt = He[--Be]),
      (He[Be] = null),
      (pt = He[--Be]),
      (He[Be] = null));
}
var Fe = null,
  $e = null,
  q = !1,
  Ye = null;
function Xu(e, t) {
  var n = We(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function ia(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Fe = e), ($e = Mt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Fe = e), ($e = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = en !== null ? { id: pt, overflow: mt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = We(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Fe = e),
            ($e = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function oi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function si(e) {
  if (q) {
    var t = $e;
    if (t) {
      var n = t;
      if (!ia(e, t)) {
        if (oi(e)) throw Error(k(418));
        t = Mt(n.nextSibling);
        var r = Fe;
        t && ia(e, t)
          ? Xu(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (q = !1), (Fe = e));
      }
    } else {
      if (oi(e)) throw Error(k(418));
      ((e.flags = (e.flags & -4097) | 2), (q = !1), (Fe = e));
    }
  }
}
function la(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Fe = e;
}
function Vr(e) {
  if (e !== Fe) return !1;
  if (!q) return (la(e), (q = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ei(e.type, e.memoizedProps))),
    t && (t = $e))
  ) {
    if (oi(e)) throw (Yu(), Error(k(418)));
    for (; t; ) (Xu(e, t), (t = Mt(t.nextSibling)));
  }
  if ((la(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              $e = Mt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      $e = null;
    }
  } else $e = Fe ? Mt(e.stateNode.nextSibling) : null;
  return !0;
}
function Yu() {
  for (var e = $e; e; ) e = Mt(e.nextSibling);
}
function bn() {
  (($e = Fe = null), (q = !1));
}
function Ki(e) {
  Ye === null ? (Ye = [e]) : Ye.push(e);
}
var hh = xt.ReactCurrentBatchConfig;
function Kn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var o = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (i) {
            var l = o.refs;
            i === null ? delete l[s] : (l[s] = i);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function Qr(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function aa(e) {
  var t = e._init;
  return t(e._payload);
}
function Ju(e) {
  function t(f, d) {
    if (e) {
      var h = f.deletions;
      h === null ? ((f.deletions = [d]), (f.flags |= 16)) : h.push(d);
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
  function o(f, d) {
    return ((f = Ot(f, d)), (f.index = 0), (f.sibling = null), f);
  }
  function s(f, d, h) {
    return (
      (f.index = h),
      e
        ? ((h = f.alternate),
          h !== null
            ? ((h = h.index), h < d ? ((f.flags |= 2), d) : h)
            : ((f.flags |= 2), d))
        : ((f.flags |= 1048576), d)
    );
  }
  function i(f) {
    return (e && f.alternate === null && (f.flags |= 2), f);
  }
  function l(f, d, h, v) {
    return d === null || d.tag !== 6
      ? ((d = Ts(h, f.mode, v)), (d.return = f), d)
      : ((d = o(d, h)), (d.return = f), d);
  }
  function a(f, d, h, v) {
    var S = h.type;
    return S === fn
      ? p(f, d, h.props.children, v, h.key)
      : d !== null &&
          (d.elementType === S ||
            (typeof S == "object" &&
              S !== null &&
              S.$$typeof === Ct &&
              aa(S) === d.type))
        ? ((v = o(d, h.props)), (v.ref = Kn(f, d, h)), (v.return = f), v)
        : ((v = co(h.type, h.key, h.props, null, f.mode, v)),
          (v.ref = Kn(f, d, h)),
          (v.return = f),
          v);
  }
  function c(f, d, h, v) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== h.containerInfo ||
      d.stateNode.implementation !== h.implementation
      ? ((d = Is(h, f.mode, v)), (d.return = f), d)
      : ((d = o(d, h.children || [])), (d.return = f), d);
  }
  function p(f, d, h, v, S) {
    return d === null || d.tag !== 7
      ? ((d = Xt(h, f.mode, v, S)), (d.return = f), d)
      : ((d = o(d, h)), (d.return = f), d);
  }
  function g(f, d, h) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return ((d = Ts("" + d, f.mode, h)), (d.return = f), d);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Rr:
          return (
            (h = co(d.type, d.key, d.props, null, f.mode, h)),
            (h.ref = Kn(f, null, d)),
            (h.return = f),
            h
          );
        case dn:
          return ((d = Is(d, f.mode, h)), (d.return = f), d);
        case Ct:
          var v = d._init;
          return g(f, v(d._payload), h);
      }
      if (Yn(d) || Hn(d))
        return ((d = Xt(d, f.mode, h, null)), (d.return = f), d);
      Qr(f, d);
    }
    return null;
  }
  function m(f, d, h, v) {
    var S = d !== null ? d.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return S !== null ? null : l(f, d, "" + h, v);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Rr:
          return h.key === S ? a(f, d, h, v) : null;
        case dn:
          return h.key === S ? c(f, d, h, v) : null;
        case Ct:
          return ((S = h._init), m(f, d, S(h._payload), v));
      }
      if (Yn(h) || Hn(h)) return S !== null ? null : p(f, d, h, v, null);
      Qr(f, h);
    }
    return null;
  }
  function w(f, d, h, v, S) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return ((f = f.get(h) || null), l(d, f, "" + v, S));
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Rr:
          return (
            (f = f.get(v.key === null ? h : v.key) || null),
            a(d, f, v, S)
          );
        case dn:
          return (
            (f = f.get(v.key === null ? h : v.key) || null),
            c(d, f, v, S)
          );
        case Ct:
          var I = v._init;
          return w(f, d, h, I(v._payload), S);
      }
      if (Yn(v) || Hn(v)) return ((f = f.get(h) || null), p(d, f, v, S, null));
      Qr(d, v);
    }
    return null;
  }
  function _(f, d, h, v) {
    for (
      var S = null, I = null, C = d, T = (d = 0), R = null;
      C !== null && T < h.length;
      T++
    ) {
      C.index > T ? ((R = C), (C = null)) : (R = C.sibling);
      var M = m(f, C, h[T], v);
      if (M === null) {
        C === null && (C = R);
        break;
      }
      (e && C && M.alternate === null && t(f, C),
        (d = s(M, d, T)),
        I === null ? (S = M) : (I.sibling = M),
        (I = M),
        (C = R));
    }
    if (T === h.length) return (n(f, C), q && Wt(f, T), S);
    if (C === null) {
      for (; T < h.length; T++)
        ((C = g(f, h[T], v)),
          C !== null &&
            ((d = s(C, d, T)),
            I === null ? (S = C) : (I.sibling = C),
            (I = C)));
      return (q && Wt(f, T), S);
    }
    for (C = r(f, C); T < h.length; T++)
      ((R = w(C, f, T, h[T], v)),
        R !== null &&
          (e && R.alternate !== null && C.delete(R.key === null ? T : R.key),
          (d = s(R, d, T)),
          I === null ? (S = R) : (I.sibling = R),
          (I = R)));
    return (
      e &&
        C.forEach(function (H) {
          return t(f, H);
        }),
      q && Wt(f, T),
      S
    );
  }
  function x(f, d, h, v) {
    var S = Hn(h);
    if (typeof S != "function") throw Error(k(150));
    if (((h = S.call(h)), h == null)) throw Error(k(151));
    for (
      var I = (S = null), C = d, T = (d = 0), R = null, M = h.next();
      C !== null && !M.done;
      T++, M = h.next()
    ) {
      C.index > T ? ((R = C), (C = null)) : (R = C.sibling);
      var H = m(f, C, M.value, v);
      if (H === null) {
        C === null && (C = R);
        break;
      }
      (e && C && H.alternate === null && t(f, C),
        (d = s(H, d, T)),
        I === null ? (S = H) : (I.sibling = H),
        (I = H),
        (C = R));
    }
    if (M.done) return (n(f, C), q && Wt(f, T), S);
    if (C === null) {
      for (; !M.done; T++, M = h.next())
        ((M = g(f, M.value, v)),
          M !== null &&
            ((d = s(M, d, T)),
            I === null ? (S = M) : (I.sibling = M),
            (I = M)));
      return (q && Wt(f, T), S);
    }
    for (C = r(f, C); !M.done; T++, M = h.next())
      ((M = w(C, f, T, M.value, v)),
        M !== null &&
          (e && M.alternate !== null && C.delete(M.key === null ? T : M.key),
          (d = s(M, d, T)),
          I === null ? (S = M) : (I.sibling = M),
          (I = M)));
    return (
      e &&
        C.forEach(function (ct) {
          return t(f, ct);
        }),
      q && Wt(f, T),
      S
    );
  }
  function b(f, d, h, v) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === fn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case Rr:
          e: {
            for (var S = h.key, I = d; I !== null; ) {
              if (I.key === S) {
                if (((S = h.type), S === fn)) {
                  if (I.tag === 7) {
                    (n(f, I.sibling),
                      (d = o(I, h.props.children)),
                      (d.return = f),
                      (f = d));
                    break e;
                  }
                } else if (
                  I.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === Ct &&
                    aa(S) === I.type)
                ) {
                  (n(f, I.sibling),
                    (d = o(I, h.props)),
                    (d.ref = Kn(f, I, h)),
                    (d.return = f),
                    (f = d));
                  break e;
                }
                n(f, I);
                break;
              } else t(f, I);
              I = I.sibling;
            }
            h.type === fn
              ? ((d = Xt(h.props.children, f.mode, v, h.key)),
                (d.return = f),
                (f = d))
              : ((v = co(h.type, h.key, h.props, null, f.mode, v)),
                (v.ref = Kn(f, d, h)),
                (v.return = f),
                (f = v));
          }
          return i(f);
        case dn:
          e: {
            for (I = h.key; d !== null; ) {
              if (d.key === I)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === h.containerInfo &&
                  d.stateNode.implementation === h.implementation
                ) {
                  (n(f, d.sibling),
                    (d = o(d, h.children || [])),
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
            ((d = Is(h, f.mode, v)), (d.return = f), (f = d));
          }
          return i(f);
        case Ct:
          return ((I = h._init), b(f, d, I(h._payload), v));
      }
      if (Yn(h)) return _(f, d, h, v);
      if (Hn(h)) return x(f, d, h, v);
      Qr(f, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        d !== null && d.tag === 6
          ? (n(f, d.sibling), (d = o(d, h)), (d.return = f), (f = d))
          : (n(f, d), (d = Ts(h, f.mode, v)), (d.return = f), (f = d)),
        i(f))
      : n(f, d);
  }
  return b;
}
var Dn = Ju(!0),
  Zu = Ju(!1),
  Eo = Ut(null),
  No = null,
  _n = null,
  Gi = null;
function qi() {
  Gi = _n = No = null;
}
function Xi(e) {
  var t = Eo.current;
  (K(Eo), (e._currentValue = t));
}
function ii(e, t, n) {
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
  ((No = e),
    (Gi = _n = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (be = !0), (e.firstContext = null)));
}
function Qe(e) {
  var t = e._currentValue;
  if (Gi !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), _n === null)) {
      if (No === null) throw Error(k(308));
      ((_n = e), (No.dependencies = { lanes: 0, firstContext: e }));
    } else _n = _n.next = e;
  return t;
}
var Kt = null;
function Yi(e) {
  Kt === null ? (Kt = [e]) : Kt.push(e);
}
function ec(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Yi(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    wt(e, r)
  );
}
function wt(e, t) {
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
var Et = !1;
function Ji(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function tc(e, t) {
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
function gt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Lt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), z & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      wt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Yi(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    wt(e, n)
  );
}
function oo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Oi(e, n));
  }
}
function ua(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      s = null;
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
        (s === null ? (o = s = i) : (s = s.next = i), (n = n.next));
      } while (n !== null);
      s === null ? (o = s = t) : (s = s.next = t);
    } else o = s = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: s,
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
function To(e, t, n, r) {
  var o = e.updateQueue;
  Et = !1;
  var s = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l,
      c = a.next;
    ((a.next = null), i === null ? (s = c) : (i.next = c), (i = a));
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (l = p.lastBaseUpdate),
      l !== i &&
        (l === null ? (p.firstBaseUpdate = c) : (l.next = c),
        (p.lastBaseUpdate = a)));
  }
  if (s !== null) {
    var g = o.baseState;
    ((i = 0), (p = c = a = null), (l = s));
    do {
      var m = l.lane,
        w = l.eventTime;
      if ((r & m) === m) {
        p !== null &&
          (p = p.next =
            {
              eventTime: w,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var _ = e,
            x = l;
          switch (((m = t), (w = n), x.tag)) {
            case 1:
              if (((_ = x.payload), typeof _ == "function")) {
                g = _.call(w, g, m);
                break e;
              }
              g = _;
              break e;
            case 3:
              _.flags = (_.flags & -65537) | 128;
            case 0:
              if (
                ((_ = x.payload),
                (m = typeof _ == "function" ? _.call(w, g, m) : _),
                m == null)
              )
                break e;
              g = ee({}, g, m);
              break e;
            case 2:
              Et = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (m = o.effects),
          m === null ? (o.effects = [l]) : m.push(l));
      } else
        ((w = {
          eventTime: w,
          lane: m,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          p === null ? ((c = p = w), (a = g)) : (p = p.next = w),
          (i |= m));
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        ((m = l),
          (l = m.next),
          (m.next = null),
          (o.lastBaseUpdate = m),
          (o.shared.pending = null));
      }
    } while (!0);
    if (
      (p === null && (a = g),
      (o.baseState = a),
      (o.firstBaseUpdate = c),
      (o.lastBaseUpdate = p),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do ((i |= o.lane), (o = o.next));
      while (o !== t);
    } else s === null && (o.shared.lanes = 0);
    ((nn |= i), (e.lanes = i), (e.memoizedState = g));
  }
}
function ca(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(k(191, o));
        o.call(r);
      }
    }
}
var Dr = {},
  ut = Ut(Dr),
  _r = Ut(Dr),
  xr = Ut(Dr);
function Gt(e) {
  if (e === Dr) throw Error(k(174));
  return e;
}
function Zi(e, t) {
  switch ((W(xr, t), W(_r, e), W(ut, Dr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : As(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = As(t, e)));
  }
  (K(ut), W(ut, t));
}
function Mn() {
  (K(ut), K(_r), K(xr));
}
function nc(e) {
  Gt(xr.current);
  var t = Gt(ut.current),
    n = As(t, e.type);
  t !== n && (W(_r, e), W(ut, n));
}
function el(e) {
  _r.current === e && (K(ut), K(_r));
}
var Y = Ut(0);
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
var xs = [];
function tl() {
  for (var e = 0; e < xs.length; e++)
    xs[e]._workInProgressVersionPrimary = null;
  xs.length = 0;
}
var so = xt.ReactCurrentDispatcher,
  Ss = xt.ReactCurrentBatchConfig,
  tn = 0,
  Z = null,
  ue = null,
  de = null,
  jo = !1,
  sr = !1,
  Sr = 0,
  ph = 0;
function ve() {
  throw Error(k(321));
}
function nl(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!tt(e[n], t[n])) return !1;
  return !0;
}
function rl(e, t, n, r, o, s) {
  if (
    ((tn = s),
    (Z = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (so.current = e === null || e.memoizedState === null ? vh : wh),
    (e = n(r, o)),
    sr)
  ) {
    s = 0;
    do {
      if (((sr = !1), (Sr = 0), 25 <= s)) throw Error(k(301));
      ((s += 1),
        (de = ue = null),
        (t.updateQueue = null),
        (so.current = _h),
        (e = n(r, o)));
    } while (sr);
  }
  if (
    ((so.current = Po),
    (t = ue !== null && ue.next !== null),
    (tn = 0),
    (de = ue = Z = null),
    (jo = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function ol() {
  var e = Sr !== 0;
  return ((Sr = 0), e);
}
function it() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (de === null ? (Z.memoizedState = de = e) : (de = de.next = e), de);
}
function Ke() {
  if (ue === null) {
    var e = Z.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ue.next;
  var t = de === null ? Z.memoizedState : de.next;
  if (t !== null) ((de = t), (ue = e));
  else {
    if (e === null) throw Error(k(310));
    ((ue = e),
      (e = {
        memoizedState: ue.memoizedState,
        baseState: ue.baseState,
        baseQueue: ue.baseQueue,
        queue: ue.queue,
        next: null,
      }),
      de === null ? (Z.memoizedState = de = e) : (de = de.next = e));
  }
  return de;
}
function kr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ks(e) {
  var t = Ke(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = ue,
    o = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (o !== null) {
      var i = o.next;
      ((o.next = s.next), (s.next = i));
    }
    ((r.baseQueue = o = s), (n.pending = null));
  }
  if (o !== null) {
    ((s = o.next), (r = r.baseState));
    var l = (i = null),
      a = null,
      c = s;
    do {
      var p = c.lane;
      if ((tn & p) === p)
        (a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action)));
      else {
        var g = {
          lane: p,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        (a === null ? ((l = a = g), (i = r)) : (a = a.next = g),
          (Z.lanes |= p),
          (nn |= p));
      }
      c = c.next;
    } while (c !== null && c !== s);
    (a === null ? (i = r) : (a.next = l),
      tt(r, t.memoizedState) || (be = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do ((s = o.lane), (Z.lanes |= s), (nn |= s), (o = o.next));
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Cs(e) {
  var t = Ke(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    s = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do ((s = e(s, i.action)), (i = i.next));
    while (i !== o);
    (tt(s, t.memoizedState) || (be = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s));
  }
  return [s, r];
}
function rc() {}
function oc(e, t) {
  var n = Z,
    r = Ke(),
    o = t(),
    s = !tt(r.memoizedState, o);
  if (
    (s && ((r.memoizedState = o), (be = !0)),
    (r = r.queue),
    sl(lc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (de !== null && de.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Cr(9, ic.bind(null, n, r, o, t), void 0, null),
      he === null)
    )
      throw Error(k(349));
    tn & 30 || sc(n, t, o);
  }
  return o;
}
function sc(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Z.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Z.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function ic(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), ac(t) && uc(e));
}
function lc(e, t, n) {
  return n(function () {
    ac(t) && uc(e);
  });
}
function ac(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !tt(e, n);
  } catch {
    return !0;
  }
}
function uc(e) {
  var t = wt(e, 1);
  t !== null && et(t, e, 1, -1);
}
function da(e) {
  var t = it();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: kr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = yh.bind(null, Z, e)),
    [t.memoizedState, e]
  );
}
function Cr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Z.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Z.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function cc() {
  return Ke().memoizedState;
}
function io(e, t, n, r) {
  var o = it();
  ((Z.flags |= e),
    (o.memoizedState = Cr(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Wo(e, t, n, r) {
  var o = Ke();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (ue !== null) {
    var i = ue.memoizedState;
    if (((s = i.destroy), r !== null && nl(r, i.deps))) {
      o.memoizedState = Cr(t, n, s, r);
      return;
    }
  }
  ((Z.flags |= e), (o.memoizedState = Cr(1 | t, n, s, r)));
}
function fa(e, t) {
  return io(8390656, 8, e, t);
}
function sl(e, t) {
  return Wo(2048, 8, e, t);
}
function dc(e, t) {
  return Wo(4, 2, e, t);
}
function fc(e, t) {
  return Wo(4, 4, e, t);
}
function hc(e, t) {
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
function pc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Wo(4, 4, hc.bind(null, t, e), n)
  );
}
function il() {}
function mc(e, t) {
  var n = Ke();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && nl(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function gc(e, t) {
  var n = Ke();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && nl(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function yc(e, t, n) {
  return tn & 21
    ? (tt(n, t) || ((n = Su()), (Z.lanes |= n), (nn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (be = !0)), (e.memoizedState = n));
}
function mh(e, t) {
  var n = A;
  ((A = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = Ss.transition;
  Ss.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((A = n), (Ss.transition = r));
  }
}
function vc() {
  return Ke().memoizedState;
}
function gh(e, t, n) {
  var r = $t(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    wc(e))
  )
    _c(t, n);
  else if (((n = ec(e, t, n, r)), n !== null)) {
    var o = Ne();
    (et(n, e, r, o), xc(n, t, r));
  }
}
function yh(e, t, n) {
  var r = $t(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (wc(e)) _c(t, o);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var i = t.lastRenderedState,
          l = s(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), tt(l, i))) {
          var a = t.interleaved;
          (a === null
            ? ((o.next = o), Yi(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o));
          return;
        }
      } catch {
      } finally {
      }
    ((n = ec(e, t, o, r)),
      n !== null && ((o = Ne()), et(n, e, r, o), xc(n, t, r)));
  }
}
function wc(e) {
  var t = e.alternate;
  return e === Z || (t !== null && t === Z);
}
function _c(e, t) {
  sr = jo = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function xc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Oi(e, n));
  }
}
var Po = {
    readContext: Qe,
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
  vh = {
    readContext: Qe,
    useCallback: function (e, t) {
      return ((it().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Qe,
    useEffect: fa,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        io(4194308, 4, hc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return io(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return io(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = it();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = it();
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
        (e = e.dispatch = gh.bind(null, Z, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = it();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: da,
    useDebugValue: il,
    useDeferredValue: function (e) {
      return (it().memoizedState = e);
    },
    useTransition: function () {
      var e = da(!1),
        t = e[0];
      return ((e = mh.bind(null, e[1])), (it().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Z,
        o = it();
      if (q) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), he === null)) throw Error(k(349));
        tn & 30 || sc(r, t, n);
      }
      o.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (o.queue = s),
        fa(lc.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Cr(9, ic.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = it(),
        t = he.identifierPrefix;
      if (q) {
        var n = mt,
          r = pt;
        ((n = (r & ~(1 << (32 - Ze(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Sr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = ph++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  wh = {
    readContext: Qe,
    useCallback: mc,
    useContext: Qe,
    useEffect: sl,
    useImperativeHandle: pc,
    useInsertionEffect: dc,
    useLayoutEffect: fc,
    useMemo: gc,
    useReducer: ks,
    useRef: cc,
    useState: function () {
      return ks(kr);
    },
    useDebugValue: il,
    useDeferredValue: function (e) {
      var t = Ke();
      return yc(t, ue.memoizedState, e);
    },
    useTransition: function () {
      var e = ks(kr)[0],
        t = Ke().memoizedState;
      return [e, t];
    },
    useMutableSource: rc,
    useSyncExternalStore: oc,
    useId: vc,
    unstable_isNewReconciler: !1,
  },
  _h = {
    readContext: Qe,
    useCallback: mc,
    useContext: Qe,
    useEffect: sl,
    useImperativeHandle: pc,
    useInsertionEffect: dc,
    useLayoutEffect: fc,
    useMemo: gc,
    useReducer: Cs,
    useRef: cc,
    useState: function () {
      return Cs(kr);
    },
    useDebugValue: il,
    useDeferredValue: function (e) {
      var t = Ke();
      return ue === null ? (t.memoizedState = e) : yc(t, ue.memoizedState, e);
    },
    useTransition: function () {
      var e = Cs(kr)[0],
        t = Ke().memoizedState;
      return [e, t];
    },
    useMutableSource: rc,
    useSyncExternalStore: oc,
    useId: vc,
    unstable_isNewReconciler: !1,
  };
function qe(e, t) {
  if (e && e.defaultProps) {
    ((t = ee({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function li(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ee({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var Vo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ln(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ne(),
      o = $t(e),
      s = gt(r, o);
    ((s.payload = t),
      n != null && (s.callback = n),
      (t = Lt(e, s, o)),
      t !== null && (et(t, e, o, r), oo(t, e, o)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ne(),
      o = $t(e),
      s = gt(r, o);
    ((s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Lt(e, s, o)),
      t !== null && (et(t, e, o, r), oo(t, e, o)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ne(),
      r = $t(e),
      o = gt(n, r);
    ((o.tag = 2),
      t != null && (o.callback = t),
      (t = Lt(e, o, r)),
      t !== null && (et(t, e, r, n), oo(t, e, r)));
  },
};
function ha(e, t, n, r, o, s, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !gr(n, r) || !gr(o, s)
        : !0
  );
}
function Sc(e, t, n) {
  var r = !1,
    o = zt,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Qe(s))
      : ((o = Me(t) ? Zt : Se.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Pn(e, o) : zt)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Vo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function pa(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Vo.enqueueReplaceState(t, t.state, null));
}
function ai(e, t, n, r) {
  var o = e.stateNode;
  ((o.props = n), (o.state = e.memoizedState), (o.refs = {}), Ji(e));
  var s = t.contextType;
  (typeof s == "object" && s !== null
    ? (o.context = Qe(s))
    : ((s = Me(t) ? Zt : Se.current), (o.context = Pn(e, s))),
    (o.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (li(e, t, s, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Vo.enqueueReplaceState(o, o.state, null),
      To(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308));
}
function Ln(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += Kd(r)), (r = r.return));
    while (r);
    var o = n;
  } catch (s) {
    o =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Es(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ui(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var xh = typeof WeakMap == "function" ? WeakMap : Map;
function kc(e, t, n) {
  ((n = gt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (Do || ((Do = !0), (wi = r)), ui(e, t));
    }),
    n
  );
}
function Cc(e, t, n) {
  ((n = gt(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    ((n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        ui(e, t);
      }));
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        (ui(e, t),
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
function ma(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new xh();
    var o = new Set();
    r.set(t, o);
  } else ((o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o)));
  o.has(n) || (o.add(n), (e = Rh.bind(null, e, t, n)), t.then(e, e));
}
function ga(e) {
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
function ya(e, t, n, r, o) {
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
              : ((t = gt(-1, 1)), (t.tag = 2), Lt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Sh = xt.ReactCurrentOwner,
  be = !1;
function Ce(e, t, n, r) {
  t.child = e === null ? Zu(t, null, n, r) : Dn(t, e.child, n, r);
}
function va(e, t, n, r, o) {
  n = n.render;
  var s = t.ref;
  return (
    Tn(t, o),
    (r = rl(e, t, n, r, s, o)),
    (n = ol()),
    e !== null && !be
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        _t(e, t, o))
      : (q && n && Vi(t), (t.flags |= 1), Ce(e, t, r, o), t.child)
  );
}
function wa(e, t, n, r, o) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !pl(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), Ec(e, t, s, r, o))
      : ((e = co(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & o))) {
    var i = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : gr), n(i, r) && e.ref === t.ref)
    )
      return _t(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Ot(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ec(e, t, n, r, o) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (gr(s, r) && e.ref === t.ref)
      if (((be = !1), (t.pendingProps = r = s), (e.lanes & o) !== 0))
        e.flags & 131072 && (be = !0);
      else return ((t.lanes = e.lanes), _t(e, t, o));
  }
  return ci(e, t, n, r, o);
}
function Nc(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        W(Sn, Re),
        (Re |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          W(Sn, Re),
          (Re |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        W(Sn, Re),
        (Re |= r));
    }
  else
    (s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      W(Sn, Re),
      (Re |= r));
  return (Ce(e, t, o, n), t.child);
}
function Tc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ci(e, t, n, r, o) {
  var s = Me(n) ? Zt : Se.current;
  return (
    (s = Pn(t, s)),
    Tn(t, o),
    (n = rl(e, t, n, r, s, o)),
    (r = ol()),
    e !== null && !be
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        _t(e, t, o))
      : (q && r && Vi(t), (t.flags |= 1), Ce(e, t, n, o), t.child)
  );
}
function _a(e, t, n, r, o) {
  if (Me(n)) {
    var s = !0;
    So(t);
  } else s = !1;
  if ((Tn(t, o), t.stateNode === null))
    (lo(e, t), Sc(t, n, r), ai(t, n, r, o), (r = !0));
  else if (e === null) {
    var i = t.stateNode,
      l = t.memoizedProps;
    i.props = l;
    var a = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Qe(c))
      : ((c = Me(n) ? Zt : Se.current), (c = Pn(t, c)));
    var p = n.getDerivedStateFromProps,
      g =
        typeof p == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    (g ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((l !== r || a !== c) && pa(t, i, r, c)),
      (Et = !1));
    var m = t.memoizedState;
    ((i.state = m),
      To(t, r, i, o),
      (a = t.memoizedState),
      l !== r || m !== a || De.current || Et
        ? (typeof p == "function" && (li(t, n, p, r), (a = t.memoizedState)),
          (l = Et || ha(t, n, l, r, m, a, c))
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
              (t.memoizedState = a)),
          (i.props = r),
          (i.state = a),
          (i.context = c),
          (r = l))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((i = t.stateNode),
      tc(e, t),
      (l = t.memoizedProps),
      (c = t.type === t.elementType ? l : qe(t.type, l)),
      (i.props = c),
      (g = t.pendingProps),
      (m = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Qe(a))
        : ((a = Me(n) ? Zt : Se.current), (a = Pn(t, a))));
    var w = n.getDerivedStateFromProps;
    ((p =
      typeof w == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((l !== g || m !== a) && pa(t, i, r, a)),
      (Et = !1),
      (m = t.memoizedState),
      (i.state = m),
      To(t, r, i, o));
    var _ = t.memoizedState;
    l !== g || m !== _ || De.current || Et
      ? (typeof w == "function" && (li(t, n, w, r), (_ = t.memoizedState)),
        (c = Et || ha(t, n, c, r, m, _, a) || !1)
          ? (p ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, _, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, _, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (l === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = _)),
        (i.props = r),
        (i.state = _),
        (i.context = a),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (l === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return di(e, t, n, r, s, o);
}
function di(e, t, n, r, o, s) {
  Tc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return (o && sa(t, n, !1), _t(e, t, s));
  ((r = t.stateNode), (Sh.current = t));
  var l =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Dn(t, e.child, null, s)), (t.child = Dn(t, null, l, s)))
      : Ce(e, t, l, s),
    (t.memoizedState = r.state),
    o && sa(t, n, !0),
    t.child
  );
}
function Ic(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? oa(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && oa(e, t.context, !1),
    Zi(e, t.containerInfo));
}
function xa(e, t, n, r, o) {
  return (bn(), Ki(o), (t.flags |= 256), Ce(e, t, n, r), t.child);
}
var fi = { dehydrated: null, treeContext: null, retryLane: 0 };
function hi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function jc(e, t, n) {
  var r = t.pendingProps,
    o = Y.current,
    s = !1,
    i = (t.flags & 128) !== 0,
    l;
  if (
    ((l = i) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    W(Y, o & 1),
    e === null)
  )
    return (
      si(t),
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
          s
            ? ((r = t.mode),
              (s = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = i))
                : (s = Go(i, r, 0, null)),
              (e = Xt(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = hi(n)),
              (t.memoizedState = fi),
              e)
            : ll(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return kh(e, t, i, r, l, o, n);
  if (s) {
    ((s = r.fallback), (i = t.mode), (o = e.child), (l = o.sibling));
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Ot(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (s = Ot(l, s)) : ((s = Xt(s, i, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? hi(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (s.memoizedState = i),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = fi),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Ot(s, { mode: "visible", children: r.children })),
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
function ll(e, t) {
  return (
    (t = Go({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Kr(e, t, n, r) {
  return (
    r !== null && Ki(r),
    Dn(t, e.child, null, n),
    (e = ll(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function kh(e, t, n, r, o, s, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Es(Error(k(422)))), Kr(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((s = r.fallback),
          (o = t.mode),
          (r = Go({ mode: "visible", children: r.children }, o, 0, null)),
          (s = Xt(s, o, i, null)),
          (s.flags |= 2),
          (r.return = t),
          (s.return = t),
          (r.sibling = s),
          (t.child = r),
          t.mode & 1 && Dn(t, e.child, null, i),
          (t.child.memoizedState = hi(i)),
          (t.memoizedState = fi),
          s);
  if (!(t.mode & 1)) return Kr(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (
      (r = l),
      (s = Error(k(419))),
      (r = Es(s, r, void 0)),
      Kr(e, t, i, r)
    );
  }
  if (((l = (i & e.childLanes) !== 0), be || l)) {
    if (((r = he), r !== null)) {
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
      ((o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== s.retryLane &&
          ((s.retryLane = o), wt(e, o), et(r, e, o, -1)));
    }
    return (hl(), (r = Es(Error(k(421)))), Kr(e, t, i, r));
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = $h.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = s.treeContext),
      ($e = Mt(o.nextSibling)),
      (Fe = t),
      (q = !0),
      (Ye = null),
      e !== null &&
        ((He[Be++] = pt),
        (He[Be++] = mt),
        (He[Be++] = en),
        (pt = e.id),
        (mt = e.overflow),
        (en = t)),
      (t = ll(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Sa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), ii(e.return, t, n));
}
function Ns(e, t, n, r, o) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = o));
}
function Pc(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    s = r.tail;
  if ((Ce(e, t, r.children, n), (r = Y.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Sa(e, n, t);
        else if (e.tag === 19) Sa(e, n, t);
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
  if ((W(Y, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          ((e = n.alternate),
            e !== null && Io(e) === null && (o = n),
            (n = n.sibling));
        ((n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Ns(t, !1, o, n, s));
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Io(e) === null)) {
            t.child = o;
            break;
          }
          ((e = o.sibling), (o.sibling = n), (n = o), (o = e));
        }
        Ns(t, !0, n, null, s);
        break;
      case "together":
        Ns(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function lo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function _t(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (nn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ot(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = Ot(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function Ch(e, t, n) {
  switch (t.tag) {
    case 3:
      (Ic(t), bn());
      break;
    case 5:
      nc(t);
      break;
    case 1:
      Me(t.type) && So(t);
      break;
    case 4:
      Zi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      (W(Eo, r._currentValue), (r._currentValue = o));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (W(Y, Y.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? jc(e, t, n)
            : (W(Y, Y.current & 1),
              (e = _t(e, t, n)),
              e !== null ? e.sibling : null);
      W(Y, Y.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Pc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        W(Y, Y.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Nc(e, t, n));
  }
  return _t(e, t, n);
}
var bc, pi, Dc, Mc;
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
pi = function () {};
Dc = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    ((e = t.stateNode), Gt(ut.current));
    var s = null;
    switch (n) {
      case "input":
        ((o = $s(e, o)), (r = $s(e, r)), (s = []));
        break;
      case "select":
        ((o = ee({}, o, { value: void 0 })),
          (r = ee({}, r, { value: void 0 })),
          (s = []));
        break;
      case "textarea":
        ((o = zs(e, o)), (r = zs(e, r)), (s = []));
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = _o);
    }
    Us(n, r);
    var i;
    n = null;
    for (c in o)
      if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
        if (c === "style") {
          var l = o[c];
          for (i in l) l.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (ur.hasOwnProperty(c)
              ? s || (s = [])
              : (s = s || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (
        ((l = o != null ? o[c] : void 0),
        r.hasOwnProperty(c) && a !== l && (a != null || l != null))
      )
        if (c === "style")
          if (l) {
            for (i in l)
              !l.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in a)
              a.hasOwnProperty(i) &&
                l[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else (n || (s || (s = []), s.push(c, n)), (n = a));
        else
          c === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (s = s || []).push(c, a))
            : c === "children"
              ? (typeof a != "string" && typeof a != "number") ||
                (s = s || []).push(c, "" + a)
              : c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                (ur.hasOwnProperty(c)
                  ? (a != null && c === "onScroll" && Q("scroll", e),
                    s || l === a || (s = []))
                  : (s = s || []).push(c, a));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Mc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Gn(e, t) {
  if (!q)
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
function Eh(e, t, n) {
  var r = t.pendingProps;
  switch ((Qi(t), t.tag)) {
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
      return (Me(t.type) && xo(), we(t), null);
    case 3:
      return (
        (r = t.stateNode),
        Mn(),
        K(De),
        K(Se),
        tl(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Vr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ye !== null && (Si(Ye), (Ye = null)))),
        pi(e, t),
        we(t),
        null
      );
    case 5:
      el(t);
      var o = Gt(xr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Dc(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return (we(t), null);
        }
        if (((e = Gt(ut.current)), Vr(t))) {
          ((r = t.stateNode), (n = t.type));
          var s = t.memoizedProps;
          switch (((r[lt] = t), (r[wr] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (Q("cancel", r), Q("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              Q("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Zn.length; o++) Q(Zn[o], r);
              break;
            case "source":
              Q("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (Q("error", r), Q("load", r));
              break;
            case "details":
              Q("toggle", r);
              break;
            case "input":
              (bl(r, s), Q("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!s.multiple }),
                Q("invalid", r));
              break;
            case "textarea":
              (Ml(r, s), Q("invalid", r));
          }
          (Us(n, s), (o = null));
          for (var i in s)
            if (s.hasOwnProperty(i)) {
              var l = s[i];
              i === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      Wr(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      Wr(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : ur.hasOwnProperty(i) &&
                  l != null &&
                  i === "onScroll" &&
                  Q("scroll", r);
            }
          switch (n) {
            case "input":
              ($r(r), Dl(r, s, !0));
              break;
            case "textarea":
              ($r(r), Ll(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = _o);
          }
          ((r = o), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = lu(n)),
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
            (e[wr] = r),
            bc(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((i = Hs(n, r)), n)) {
              case "dialog":
                (Q("cancel", e), Q("close", e), (o = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (Q("load", e), (o = r));
                break;
              case "video":
              case "audio":
                for (o = 0; o < Zn.length; o++) Q(Zn[o], e);
                o = r;
                break;
              case "source":
                (Q("error", e), (o = r));
                break;
              case "img":
              case "image":
              case "link":
                (Q("error", e), Q("load", e), (o = r));
                break;
              case "details":
                (Q("toggle", e), (o = r));
                break;
              case "input":
                (bl(e, r), (o = $s(e, r)), Q("invalid", e));
                break;
              case "option":
                o = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = ee({}, r, { value: void 0 })),
                  Q("invalid", e));
                break;
              case "textarea":
                (Ml(e, r), (o = zs(e, r)), Q("invalid", e));
                break;
              default:
                o = r;
            }
            (Us(n, o), (l = o));
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var a = l[s];
                s === "style"
                  ? cu(e, a)
                  : s === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && au(e, a))
                    : s === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && cr(e, a)
                        : typeof a == "number" && cr(e, "" + a)
                      : s !== "suppressContentEditableWarning" &&
                        s !== "suppressHydrationWarning" &&
                        s !== "autoFocus" &&
                        (ur.hasOwnProperty(s)
                          ? a != null && s === "onScroll" && Q("scroll", e)
                          : a != null && bi(e, s, a, i));
              }
            switch (n) {
              case "input":
                ($r(e), Dl(e, r, !1));
                break;
              case "textarea":
                ($r(e), Ll(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ft(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? kn(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      kn(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = _o);
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
      if (e && t.stateNode != null) Mc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = Gt(xr.current)), Gt(ut.current), Vr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[lt] = t),
            (s = r.nodeValue !== n) && ((e = Fe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Wr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Wr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[lt] = t),
            (t.stateNode = r));
      }
      return (we(t), null);
    case 13:
      if (
        (K(Y),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (q && $e !== null && t.mode & 1 && !(t.flags & 128))
          (Yu(), bn(), (t.flags |= 98560), (s = !1));
        else if (((s = Vr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(k(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(k(317));
            s[lt] = t;
          } else
            (bn(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (we(t), (s = !1));
        } else (Ye !== null && (Si(Ye), (Ye = null)), (s = !0));
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Y.current & 1 ? ce === 0 && (ce = 3) : hl())),
          t.updateQueue !== null && (t.flags |= 4),
          we(t),
          null);
    case 4:
      return (
        Mn(),
        pi(e, t),
        e === null && yr(t.stateNode.containerInfo),
        we(t),
        null
      );
    case 10:
      return (Xi(t.type._context), we(t), null);
    case 17:
      return (Me(t.type) && xo(), we(t), null);
    case 19:
      if ((K(Y), (s = t.memoizedState), s === null)) return (we(t), null);
      if (((r = (t.flags & 128) !== 0), (i = s.rendering), i === null))
        if (r) Gn(s, !1);
        else {
          if (ce !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Io(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Gn(s, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (i = s.alternate),
                    i === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = i.childLanes),
                        (s.lanes = i.lanes),
                        (s.child = i.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = i.memoizedProps),
                        (s.memoizedState = i.memoizedState),
                        (s.updateQueue = i.updateQueue),
                        (s.type = i.type),
                        (e = i.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (W(Y, (Y.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          s.tail !== null &&
            oe() > Rn &&
            ((t.flags |= 128), (r = !0), Gn(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Io(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Gn(s, !0),
              s.tail === null && s.tailMode === "hidden" && !i.alternate && !q)
            )
              return (we(t), null);
          } else
            2 * oe() - s.renderingStartTime > Rn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Gn(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = s.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (s.last = i));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = oe()),
          (t.sibling = null),
          (n = Y.current),
          W(Y, r ? (n & 1) | 2 : n & 1),
          t)
        : (we(t), null);
    case 22:
    case 23:
      return (
        fl(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Re & 1073741824 && (we(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : we(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function Nh(e, t) {
  switch ((Qi(t), t.tag)) {
    case 1:
      return (
        Me(t.type) && xo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Mn(),
        K(De),
        K(Se),
        tl(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (el(t), null);
    case 13:
      if ((K(Y), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        bn();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (K(Y), null);
    case 4:
      return (Mn(), null);
    case 10:
      return (Xi(t.type._context), null);
    case 22:
    case 23:
      return (fl(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Gr = !1,
  _e = !1,
  Th = typeof WeakSet == "function" ? WeakSet : Set,
  P = null;
function xn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        te(e, t, r);
      }
    else n.current = null;
}
function mi(e, t, n) {
  try {
    n();
  } catch (r) {
    te(e, t, r);
  }
}
var ka = !1;
function Ih(e, t) {
  if (((Js = yo), (e = Fu()), Wi(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, s.nodeType);
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            l = -1,
            a = -1,
            c = 0,
            p = 0,
            g = e,
            m = null;
          t: for (;;) {
            for (
              var w;
              g !== n || (o !== 0 && g.nodeType !== 3) || (l = i + o),
                g !== s || (r !== 0 && g.nodeType !== 3) || (a = i + r),
                g.nodeType === 3 && (i += g.nodeValue.length),
                (w = g.firstChild) !== null;
            )
              ((m = g), (g = w));
            for (;;) {
              if (g === e) break t;
              if (
                (m === n && ++c === o && (l = i),
                m === s && ++p === r && (a = i),
                (w = g.nextSibling) !== null)
              )
                break;
              ((g = m), (m = g.parentNode));
            }
            g = w;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Zs = { focusedElem: e, selectionRange: n }, yo = !1, P = t; P !== null; )
    if (((t = P), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (P = e));
    else
      for (; P !== null; ) {
        t = P;
        try {
          var _ = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (_ !== null) {
                  var x = _.memoizedProps,
                    b = _.memoizedState,
                    f = t.stateNode,
                    d = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : qe(t.type, x),
                      b,
                    );
                  f.__reactInternalSnapshotBeforeUpdate = d;
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
                throw Error(k(163));
            }
        } catch (v) {
          te(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (P = e));
          break;
        }
        P = t.return;
      }
  return ((_ = ka), (ka = !1), _);
}
function ir(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var s = o.destroy;
        ((o.destroy = void 0), s !== void 0 && mi(t, n, s));
      }
      o = o.next;
    } while (o !== r);
  }
}
function Qo(e, t) {
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
function gi(e) {
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
function Lc(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Lc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[lt], delete t[wr], delete t[ni], delete t[ch], delete t[dh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Rc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ca(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Rc(e.return)) return null;
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
function yi(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = _o)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (yi(e, t, n), e = e.sibling; e !== null; )
      (yi(e, t, n), (e = e.sibling));
}
function vi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (vi(e, t, n), e = e.sibling; e !== null; )
      (vi(e, t, n), (e = e.sibling));
}
var me = null,
  Xe = !1;
function kt(e, t, n) {
  for (n = n.child; n !== null; ) ($c(e, t, n), (n = n.sibling));
}
function $c(e, t, n) {
  if (at && typeof at.onCommitFiberUnmount == "function")
    try {
      at.onCommitFiberUnmount(Fo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      _e || xn(n, t);
    case 6:
      var r = me,
        o = Xe;
      ((me = null),
        kt(e, t, n),
        (me = r),
        (Xe = o),
        me !== null &&
          (Xe
            ? ((e = me),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : me.removeChild(n.stateNode)));
      break;
    case 18:
      me !== null &&
        (Xe
          ? ((e = me),
            (n = n.stateNode),
            e.nodeType === 8
              ? ws(e.parentNode, n)
              : e.nodeType === 1 && ws(e, n),
            pr(e))
          : ws(me, n.stateNode));
      break;
    case 4:
      ((r = me),
        (o = Xe),
        (me = n.stateNode.containerInfo),
        (Xe = !0),
        kt(e, t, n),
        (me = r),
        (Xe = o));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !_e &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var s = o,
            i = s.destroy;
          ((s = s.tag),
            i !== void 0 && (s & 2 || s & 4) && mi(n, t, i),
            (o = o.next));
        } while (o !== r);
      }
      kt(e, t, n);
      break;
    case 1:
      if (
        !_e &&
        (xn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (l) {
          te(n, t, l);
        }
      kt(e, t, n);
      break;
    case 21:
      kt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((_e = (r = _e) || n.memoizedState !== null), kt(e, t, n), (_e = r))
        : kt(e, t, n);
      break;
    default:
      kt(e, t, n);
  }
}
function Ea(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new Th()),
      t.forEach(function (r) {
        var o = Oh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      }));
  }
}
function Ge(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var s = e,
          i = t,
          l = i;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              ((me = l.stateNode), (Xe = !1));
              break e;
            case 3:
              ((me = l.stateNode.containerInfo), (Xe = !0));
              break e;
            case 4:
              ((me = l.stateNode.containerInfo), (Xe = !0));
              break e;
          }
          l = l.return;
        }
        if (me === null) throw Error(k(160));
        ($c(s, i, o), (me = null), (Xe = !1));
        var a = o.alternate;
        (a !== null && (a.return = null), (o.return = null));
      } catch (c) {
        te(o, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (Oc(t, e), (t = t.sibling));
}
function Oc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ge(t, e), ot(e), r & 4)) {
        try {
          (ir(3, e, e.return), Qo(3, e));
        } catch (x) {
          te(e, e.return, x);
        }
        try {
          ir(5, e, e.return);
        } catch (x) {
          te(e, e.return, x);
        }
      }
      break;
    case 1:
      (Ge(t, e), ot(e), r & 512 && n !== null && xn(n, n.return));
      break;
    case 5:
      if (
        (Ge(t, e),
        ot(e),
        r & 512 && n !== null && xn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          cr(o, "");
        } catch (x) {
          te(e, e.return, x);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var s = e.memoizedProps,
          i = n !== null ? n.memoizedProps : s,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            (l === "input" && s.type === "radio" && s.name != null && su(o, s),
              Hs(l, i));
            var c = Hs(l, s);
            for (i = 0; i < a.length; i += 2) {
              var p = a[i],
                g = a[i + 1];
              p === "style"
                ? cu(o, g)
                : p === "dangerouslySetInnerHTML"
                  ? au(o, g)
                  : p === "children"
                    ? cr(o, g)
                    : bi(o, p, g, c);
            }
            switch (l) {
              case "input":
                Os(o, s);
                break;
              case "textarea":
                iu(o, s);
                break;
              case "select":
                var m = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!s.multiple;
                var w = s.value;
                w != null
                  ? kn(o, !!s.multiple, w, !1)
                  : m !== !!s.multiple &&
                    (s.defaultValue != null
                      ? kn(o, !!s.multiple, s.defaultValue, !0)
                      : kn(o, !!s.multiple, s.multiple ? [] : "", !1));
            }
            o[wr] = s;
          } catch (x) {
            te(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((Ge(t, e), ot(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        ((o = e.stateNode), (s = e.memoizedProps));
        try {
          o.nodeValue = s;
        } catch (x) {
          te(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (Ge(t, e), ot(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          pr(t.containerInfo);
        } catch (x) {
          te(e, e.return, x);
        }
      break;
    case 4:
      (Ge(t, e), ot(e));
      break;
    case 13:
      (Ge(t, e),
        ot(e),
        (o = e.child),
        o.flags & 8192 &&
          ((s = o.memoizedState !== null),
          (o.stateNode.isHidden = s),
          !s ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (cl = oe())),
        r & 4 && Ea(e));
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((_e = (c = _e) || p), Ge(t, e), (_e = c)) : Ge(t, e),
        ot(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !p && e.mode & 1)
        )
          for (P = e, p = e.child; p !== null; ) {
            for (g = P = p; P !== null; ) {
              switch (((m = P), (w = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ir(4, m, m.return);
                  break;
                case 1:
                  xn(m, m.return);
                  var _ = m.stateNode;
                  if (typeof _.componentWillUnmount == "function") {
                    ((r = m), (n = m.return));
                    try {
                      ((t = r),
                        (_.props = t.memoizedProps),
                        (_.state = t.memoizedState),
                        _.componentWillUnmount());
                    } catch (x) {
                      te(r, n, x);
                    }
                  }
                  break;
                case 5:
                  xn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Ta(g);
                    continue;
                  }
              }
              w !== null ? ((w.return = m), (P = w)) : Ta(g);
            }
            p = p.sibling;
          }
        e: for (p = null, g = e; ; ) {
          if (g.tag === 5) {
            if (p === null) {
              p = g;
              try {
                ((o = g.stateNode),
                  c
                    ? ((s = o.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((l = g.stateNode),
                      (a = g.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = uu("display", i))));
              } catch (x) {
                te(e, e.return, x);
              }
            }
          } else if (g.tag === 6) {
            if (p === null)
              try {
                g.stateNode.nodeValue = c ? "" : g.memoizedProps;
              } catch (x) {
                te(e, e.return, x);
              }
          } else if (
            ((g.tag !== 22 && g.tag !== 23) ||
              g.memoizedState === null ||
              g === e) &&
            g.child !== null
          ) {
            ((g.child.return = g), (g = g.child));
            continue;
          }
          if (g === e) break e;
          for (; g.sibling === null; ) {
            if (g.return === null || g.return === e) break e;
            (p === g && (p = null), (g = g.return));
          }
          (p === g && (p = null),
            (g.sibling.return = g.return),
            (g = g.sibling));
        }
      }
      break;
    case 19:
      (Ge(t, e), ot(e), r & 4 && Ea(e));
      break;
    case 21:
      break;
    default:
      (Ge(t, e), ot(e));
  }
}
function ot(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Rc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (cr(o, ""), (r.flags &= -33));
          var s = Ca(e);
          vi(e, s, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            l = Ca(e);
          yi(e, l, i);
          break;
        default:
          throw Error(k(161));
      }
    } catch (a) {
      te(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function jh(e, t, n) {
  ((P = e), Fc(e));
}
function Fc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var o = P,
      s = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Gr;
      if (!i) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || _e;
        l = Gr;
        var c = _e;
        if (((Gr = i), (_e = a) && !c))
          for (P = o; P !== null; )
            ((i = P),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Ia(o)
                : a !== null
                  ? ((a.return = i), (P = a))
                  : Ia(o));
        for (; s !== null; ) ((P = s), Fc(s), (s = s.sibling));
        ((P = o), (Gr = l), (_e = c));
      }
      Na(e);
    } else
      o.subtreeFlags & 8772 && s !== null ? ((s.return = o), (P = s)) : Na(e);
  }
}
function Na(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              _e || Qo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !_e)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : qe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var s = t.updateQueue;
              s !== null && ca(t, s, r);
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
                ca(t, i, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
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
                var c = t.alternate;
                if (c !== null) {
                  var p = c.memoizedState;
                  if (p !== null) {
                    var g = p.dehydrated;
                    g !== null && pr(g);
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
              throw Error(k(163));
          }
        _e || (t.flags & 512 && gi(t));
      } catch (m) {
        te(t, t.return, m);
      }
    }
    if (t === e) {
      P = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (P = n));
      break;
    }
    P = t.return;
  }
}
function Ta(e) {
  for (; P !== null; ) {
    var t = P;
    if (t === e) {
      P = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (P = n));
      break;
    }
    P = t.return;
  }
}
function Ia(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Qo(4, t);
          } catch (a) {
            te(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              te(t, o, a);
            }
          }
          var s = t.return;
          try {
            gi(t);
          } catch (a) {
            te(t, s, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            gi(t);
          } catch (a) {
            te(t, i, a);
          }
      }
    } catch (a) {
      te(t, t.return, a);
    }
    if (t === e) {
      P = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      ((l.return = t.return), (P = l));
      break;
    }
    P = t.return;
  }
}
var Ph = Math.ceil,
  bo = xt.ReactCurrentDispatcher,
  al = xt.ReactCurrentOwner,
  Ve = xt.ReactCurrentBatchConfig,
  z = 0,
  he = null,
  ie = null,
  ge = 0,
  Re = 0,
  Sn = Ut(0),
  ce = 0,
  Er = null,
  nn = 0,
  Ko = 0,
  ul = 0,
  lr = null,
  Pe = null,
  cl = 0,
  Rn = 1 / 0,
  ft = null,
  Do = !1,
  wi = null,
  Rt = null,
  qr = !1,
  jt = null,
  Mo = 0,
  ar = 0,
  _i = null,
  ao = -1,
  uo = 0;
function Ne() {
  return z & 6 ? oe() : ao !== -1 ? ao : (ao = oe());
}
function $t(e) {
  return e.mode & 1
    ? z & 2 && ge !== 0
      ? ge & -ge
      : hh.transition !== null
        ? (uo === 0 && (uo = Su()), uo)
        : ((e = A),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ju(e.type))),
          e)
    : 1;
}
function et(e, t, n, r) {
  if (50 < ar) throw ((ar = 0), (_i = null), Error(k(185)));
  (jr(e, n, r),
    (!(z & 2) || e !== he) &&
      (e === he && (!(z & 2) && (Ko |= n), ce === 4 && Tt(e, ge)),
      Le(e, r),
      n === 1 && z === 0 && !(t.mode & 1) && ((Rn = oe() + 500), Bo && Ht())));
}
function Le(e, t) {
  var n = e.callbackNode;
  hf(e, t);
  var r = go(e, e === he ? ge : 0);
  if (r === 0)
    (n !== null && Ol(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ol(n), t === 1))
      (e.tag === 0 ? fh(ja.bind(null, e)) : Gu(ja.bind(null, e)),
        ah(function () {
          !(z & 6) && Ht();
        }),
        (n = null));
    else {
      switch (ku(r)) {
        case 1:
          n = $i;
          break;
        case 4:
          n = _u;
          break;
        case 16:
          n = mo;
          break;
        case 536870912:
          n = xu;
          break;
        default:
          n = mo;
      }
      n = Qc(n, zc.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function zc(e, t) {
  if (((ao = -1), (uo = 0), z & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (In() && e.callbackNode !== n) return null;
  var r = go(e, e === he ? ge : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Lo(e, r);
  else {
    t = r;
    var o = z;
    z |= 2;
    var s = Uc();
    (he !== e || ge !== t) && ((ft = null), (Rn = oe() + 500), qt(e, t));
    do
      try {
        Mh();
        break;
      } catch (l) {
        Ac(e, l);
      }
    while (!0);
    (qi(),
      (bo.current = s),
      (z = o),
      ie !== null ? (t = 0) : ((he = null), (ge = 0), (t = ce)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Ks(e)), o !== 0 && ((r = o), (t = xi(e, o)))), t === 1)
    )
      throw ((n = Er), qt(e, 0), Tt(e, r), Le(e, oe()), n);
    if (t === 6) Tt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !bh(o) &&
          ((t = Lo(e, r)),
          t === 2 && ((s = Ks(e)), s !== 0 && ((r = s), (t = xi(e, s)))),
          t === 1))
      )
        throw ((n = Er), qt(e, 0), Tt(e, r), Le(e, oe()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Vt(e, Pe, ft);
          break;
        case 3:
          if (
            (Tt(e, r), (r & 130023424) === r && ((t = cl + 500 - oe()), 10 < t))
          ) {
            if (go(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              (Ne(), (e.pingedLanes |= e.suspendedLanes & o));
              break;
            }
            e.timeoutHandle = ti(Vt.bind(null, e, Pe, ft), t);
            break;
          }
          Vt(e, Pe, ft);
          break;
        case 4:
          if ((Tt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - Ze(r);
            ((s = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~s));
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
                          : 1960 * Ph(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ti(Vt.bind(null, e, Pe, ft), r);
            break;
          }
          Vt(e, Pe, ft);
          break;
        case 5:
          Vt(e, Pe, ft);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return (Le(e, oe()), e.callbackNode === n ? zc.bind(null, e) : null);
}
function xi(e, t) {
  var n = lr;
  return (
    e.current.memoizedState.isDehydrated && (qt(e, t).flags |= 256),
    (e = Lo(e, t)),
    e !== 2 && ((t = Pe), (Pe = n), t !== null && Si(t)),
    e
  );
}
function Si(e) {
  Pe === null ? (Pe = e) : Pe.push.apply(Pe, e);
}
function bh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            s = o.getSnapshot;
          o = o.value;
          try {
            if (!tt(s(), o)) return !1;
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
function Tt(e, t) {
  for (
    t &= ~ul,
      t &= ~Ko,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - Ze(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function ja(e) {
  if (z & 6) throw Error(k(327));
  In();
  var t = go(e, 0);
  if (!(t & 1)) return (Le(e, oe()), null);
  var n = Lo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ks(e);
    r !== 0 && ((t = r), (n = xi(e, r)));
  }
  if (n === 1) throw ((n = Er), qt(e, 0), Tt(e, t), Le(e, oe()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Vt(e, Pe, ft),
    Le(e, oe()),
    null
  );
}
function dl(e, t) {
  var n = z;
  z |= 1;
  try {
    return e(t);
  } finally {
    ((z = n), z === 0 && ((Rn = oe() + 500), Bo && Ht()));
  }
}
function rn(e) {
  jt !== null && jt.tag === 0 && !(z & 6) && In();
  var t = z;
  z |= 1;
  var n = Ve.transition,
    r = A;
  try {
    if (((Ve.transition = null), (A = 1), e)) return e();
  } finally {
    ((A = r), (Ve.transition = n), (z = t), !(z & 6) && Ht());
  }
}
function fl() {
  ((Re = Sn.current), K(Sn));
}
function qt(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), lh(n)), ie !== null))
    for (n = ie.return; n !== null; ) {
      var r = n;
      switch ((Qi(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && xo());
          break;
        case 3:
          (Mn(), K(De), K(Se), tl());
          break;
        case 5:
          el(r);
          break;
        case 4:
          Mn();
          break;
        case 13:
          K(Y);
          break;
        case 19:
          K(Y);
          break;
        case 10:
          Xi(r.type._context);
          break;
        case 22:
        case 23:
          fl();
      }
      n = n.return;
    }
  if (
    ((he = e),
    (ie = e = Ot(e.current, null)),
    (ge = Re = t),
    (ce = 0),
    (Er = null),
    (ul = Ko = nn = 0),
    (Pe = lr = null),
    Kt !== null)
  ) {
    for (t = 0; t < Kt.length; t++)
      if (((n = Kt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          s = n.pending;
        if (s !== null) {
          var i = s.next;
          ((s.next = o), (r.next = i));
        }
        n.pending = r;
      }
    Kt = null;
  }
  return e;
}
function Ac(e, t) {
  do {
    var n = ie;
    try {
      if ((qi(), (so.current = Po), jo)) {
        for (var r = Z.memoizedState; r !== null; ) {
          var o = r.queue;
          (o !== null && (o.pending = null), (r = r.next));
        }
        jo = !1;
      }
      if (
        ((tn = 0),
        (de = ue = Z = null),
        (sr = !1),
        (Sr = 0),
        (al.current = null),
        n === null || n.return === null)
      ) {
        ((ce = 1), (Er = t), (ie = null));
        break;
      }
      e: {
        var s = e,
          i = n.return,
          l = n,
          a = t;
        if (
          ((t = ge),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var c = a,
            p = l,
            g = p.tag;
          if (!(p.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var m = p.alternate;
            m
              ? ((p.updateQueue = m.updateQueue),
                (p.memoizedState = m.memoizedState),
                (p.lanes = m.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var w = ga(i);
          if (w !== null) {
            ((w.flags &= -257),
              ya(w, i, l, s, t),
              w.mode & 1 && ma(s, c, t),
              (t = w),
              (a = c));
            var _ = t.updateQueue;
            if (_ === null) {
              var x = new Set();
              (x.add(a), (t.updateQueue = x));
            } else _.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              (ma(s, c, t), hl());
              break e;
            }
            a = Error(k(426));
          }
        } else if (q && l.mode & 1) {
          var b = ga(i);
          if (b !== null) {
            (!(b.flags & 65536) && (b.flags |= 256),
              ya(b, i, l, s, t),
              Ki(Ln(a, l)));
            break e;
          }
        }
        ((s = a = Ln(a, l)),
          ce !== 4 && (ce = 2),
          lr === null ? (lr = [s]) : lr.push(s),
          (s = i));
        do {
          switch (s.tag) {
            case 3:
              ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
              var f = kc(s, a, t);
              ua(s, f);
              break e;
            case 1:
              l = a;
              var d = s.type,
                h = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Rt === null || !Rt.has(h))))
              ) {
                ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
                var v = Cc(s, l, t);
                ua(s, v);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Bc(n);
    } catch (S) {
      ((t = S), ie === n && n !== null && (ie = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Uc() {
  var e = bo.current;
  return ((bo.current = Po), e === null ? Po : e);
}
function hl() {
  ((ce === 0 || ce === 3 || ce === 2) && (ce = 4),
    he === null || (!(nn & 268435455) && !(Ko & 268435455)) || Tt(he, ge));
}
function Lo(e, t) {
  var n = z;
  z |= 2;
  var r = Uc();
  (he !== e || ge !== t) && ((ft = null), qt(e, t));
  do
    try {
      Dh();
      break;
    } catch (o) {
      Ac(e, o);
    }
  while (!0);
  if ((qi(), (z = n), (bo.current = r), ie !== null)) throw Error(k(261));
  return ((he = null), (ge = 0), ce);
}
function Dh() {
  for (; ie !== null; ) Hc(ie);
}
function Mh() {
  for (; ie !== null && !rf(); ) Hc(ie);
}
function Hc(e) {
  var t = Vc(e.alternate, e, Re);
  ((e.memoizedProps = e.pendingProps),
    t === null ? Bc(e) : (ie = t),
    (al.current = null));
}
function Bc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Nh(n, t)), n !== null)) {
        ((n.flags &= 32767), (ie = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((ce = 6), (ie = null));
        return;
      }
    } else if (((n = Eh(n, t, Re)), n !== null)) {
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
function Vt(e, t, n) {
  var r = A,
    o = Ve.transition;
  try {
    ((Ve.transition = null), (A = 1), Lh(e, t, n, r));
  } finally {
    ((Ve.transition = o), (A = r));
  }
  return null;
}
function Lh(e, t, n, r) {
  do In();
  while (jt !== null);
  if (z & 6) throw Error(k(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var s = n.lanes | n.childLanes;
  if (
    (pf(e, s),
    e === he && ((ie = he = null), (ge = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      qr ||
      ((qr = !0),
      Qc(mo, function () {
        return (In(), null);
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    ((s = Ve.transition), (Ve.transition = null));
    var i = A;
    A = 1;
    var l = z;
    ((z |= 4),
      (al.current = null),
      Ih(e, n),
      Oc(n, e),
      eh(Zs),
      (yo = !!Js),
      (Zs = Js = null),
      (e.current = n),
      jh(n),
      of(),
      (z = l),
      (A = i),
      (Ve.transition = s));
  } else e.current = n;
  if (
    (qr && ((qr = !1), (jt = e), (Mo = o)),
    (s = e.pendingLanes),
    s === 0 && (Rt = null),
    af(n.stateNode),
    Le(e, oe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest }));
  if (Do) throw ((Do = !1), (e = wi), (wi = null), e);
  return (
    Mo & 1 && e.tag !== 0 && In(),
    (s = e.pendingLanes),
    s & 1 ? (e === _i ? ar++ : ((ar = 0), (_i = e))) : (ar = 0),
    Ht(),
    null
  );
}
function In() {
  if (jt !== null) {
    var e = ku(Mo),
      t = Ve.transition,
      n = A;
    try {
      if (((Ve.transition = null), (A = 16 > e ? 16 : e), jt === null))
        var r = !1;
      else {
        if (((e = jt), (jt = null), (Mo = 0), z & 6)) throw Error(k(331));
        var o = z;
        for (z |= 4, P = e.current; P !== null; ) {
          var s = P,
            i = s.child;
          if (P.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var c = l[a];
                for (P = c; P !== null; ) {
                  var p = P;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ir(8, p, s);
                  }
                  var g = p.child;
                  if (g !== null) ((g.return = p), (P = g));
                  else
                    for (; P !== null; ) {
                      p = P;
                      var m = p.sibling,
                        w = p.return;
                      if ((Lc(p), p === c)) {
                        P = null;
                        break;
                      }
                      if (m !== null) {
                        ((m.return = w), (P = m));
                        break;
                      }
                      P = w;
                    }
                }
              }
              var _ = s.alternate;
              if (_ !== null) {
                var x = _.child;
                if (x !== null) {
                  _.child = null;
                  do {
                    var b = x.sibling;
                    ((x.sibling = null), (x = b));
                  } while (x !== null);
                }
              }
              P = s;
            }
          }
          if (s.subtreeFlags & 2064 && i !== null) ((i.return = s), (P = i));
          else
            e: for (; P !== null; ) {
              if (((s = P), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ir(9, s, s.return);
                }
              var f = s.sibling;
              if (f !== null) {
                ((f.return = s.return), (P = f));
                break e;
              }
              P = s.return;
            }
        }
        var d = e.current;
        for (P = d; P !== null; ) {
          i = P;
          var h = i.child;
          if (i.subtreeFlags & 2064 && h !== null) ((h.return = i), (P = h));
          else
            e: for (i = d; P !== null; ) {
              if (((l = P), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qo(9, l);
                  }
                } catch (S) {
                  te(l, l.return, S);
                }
              if (l === i) {
                P = null;
                break e;
              }
              var v = l.sibling;
              if (v !== null) {
                ((v.return = l.return), (P = v));
                break e;
              }
              P = l.return;
            }
        }
        if (
          ((z = o), Ht(), at && typeof at.onPostCommitFiberRoot == "function")
        )
          try {
            at.onPostCommitFiberRoot(Fo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((A = n), (Ve.transition = t));
    }
  }
  return !1;
}
function Pa(e, t, n) {
  ((t = Ln(n, t)),
    (t = kc(e, t, 1)),
    (e = Lt(e, t, 1)),
    (t = Ne()),
    e !== null && (jr(e, 1, t), Le(e, t)));
}
function te(e, t, n) {
  if (e.tag === 3) Pa(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Pa(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Rt === null || !Rt.has(r)))
        ) {
          ((e = Ln(n, e)),
            (e = Cc(t, e, 1)),
            (t = Lt(t, e, 1)),
            (e = Ne()),
            t !== null && (jr(t, 1, e), Le(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function Rh(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = Ne()),
    (e.pingedLanes |= e.suspendedLanes & n),
    he === e &&
      (ge & n) === n &&
      (ce === 4 || (ce === 3 && (ge & 130023424) === ge && 500 > oe() - cl)
        ? qt(e, 0)
        : (ul |= n)),
    Le(e, t));
}
function Wc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = zr), (zr <<= 1), !(zr & 130023424) && (zr = 4194304))
      : (t = 1));
  var n = Ne();
  ((e = wt(e, t)), e !== null && (jr(e, t, n), Le(e, n)));
}
function $h(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Wc(e, n));
}
function Oh(e, t) {
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
      throw Error(k(314));
  }
  (r !== null && r.delete(t), Wc(e, n));
}
var Vc;
Vc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || De.current) be = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((be = !1), Ch(e, t, n));
      be = !!(e.flags & 131072);
    }
  else ((be = !1), q && t.flags & 1048576 && qu(t, Co, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (lo(e, t), (e = t.pendingProps));
      var o = Pn(t, Se.current);
      (Tn(t, n), (o = rl(null, t, r, e, o, n)));
      var s = ol();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Me(r) ? ((s = !0), So(t)) : (s = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Ji(t),
            (o.updater = Vo),
            (t.stateNode = o),
            (o._reactInternals = t),
            ai(t, r, e, n),
            (t = di(null, t, r, !0, s, n)))
          : ((t.tag = 0), q && s && Vi(t), Ce(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (lo(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = zh(r)),
          (e = qe(r, e)),
          o)
        ) {
          case 0:
            t = ci(null, t, r, e, n);
            break e;
          case 1:
            t = _a(null, t, r, e, n);
            break e;
          case 11:
            t = va(null, t, r, e, n);
            break e;
          case 14:
            t = wa(null, t, r, qe(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : qe(r, o)),
        ci(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : qe(r, o)),
        _a(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Ic(t), e === null)) throw Error(k(387));
        ((r = t.pendingProps),
          (s = t.memoizedState),
          (o = s.element),
          tc(e, t),
          To(t, r, null, n));
        var i = t.memoizedState;
        if (((r = i.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            ((o = Ln(Error(k(423)), t)), (t = xa(e, t, r, n, o)));
            break e;
          } else if (r !== o) {
            ((o = Ln(Error(k(424)), t)), (t = xa(e, t, r, n, o)));
            break e;
          } else
            for (
              $e = Mt(t.stateNode.containerInfo.firstChild),
                Fe = t,
                q = !0,
                Ye = null,
                n = Zu(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((bn(), r === o)) {
            t = _t(e, t, n);
            break e;
          }
          Ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        nc(t),
        e === null && si(t),
        (r = t.type),
        (o = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (i = o.children),
        ei(r, o) ? (i = null) : s !== null && ei(r, s) && (t.flags |= 32),
        Tc(e, t),
        Ce(e, t, i, n),
        t.child
      );
    case 6:
      return (e === null && si(t), null);
    case 13:
      return jc(e, t, n);
    case 4:
      return (
        Zi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Dn(t, null, r, n)) : Ce(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : qe(r, o)),
        va(e, t, r, o, n)
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
          (o = t.pendingProps),
          (s = t.memoizedProps),
          (i = o.value),
          W(Eo, r._currentValue),
          (r._currentValue = i),
          s !== null)
        )
          if (tt(s.value, i)) {
            if (s.children === o.children && !De.current) {
              t = _t(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var l = s.dependencies;
              if (l !== null) {
                i = s.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (s.tag === 1) {
                      ((a = gt(-1, n & -n)), (a.tag = 2));
                      var c = s.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var p = c.pending;
                        (p === null
                          ? (a.next = a)
                          : ((a.next = p.next), (p.next = a)),
                          (c.pending = a));
                      }
                    }
                    ((s.lanes |= n),
                      (a = s.alternate),
                      a !== null && (a.lanes |= n),
                      ii(s.return, n, t),
                      (l.lanes |= n));
                    break;
                  }
                  a = a.next;
                }
              } else if (s.tag === 10) i = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((i = s.return), i === null)) throw Error(k(341));
                ((i.lanes |= n),
                  (l = i.alternate),
                  l !== null && (l.lanes |= n),
                  ii(i, n, t),
                  (i = s.sibling));
              } else i = s.child;
              if (i !== null) i.return = s;
              else
                for (i = s; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((s = i.sibling), s !== null)) {
                    ((s.return = i.return), (i = s));
                    break;
                  }
                  i = i.return;
                }
              s = i;
            }
        (Ce(e, t, o.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Tn(t, n),
        (o = Qe(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ce(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = qe(r, t.pendingProps)),
        (o = qe(r.type, o)),
        wa(e, t, r, o, n)
      );
    case 15:
      return Ec(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : qe(r, o)),
        lo(e, t),
        (t.tag = 1),
        Me(r) ? ((e = !0), So(t)) : (e = !1),
        Tn(t, n),
        Sc(t, r, o),
        ai(t, r, o, n),
        di(null, t, r, !0, e, n)
      );
    case 19:
      return Pc(e, t, n);
    case 22:
      return Nc(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function Qc(e, t) {
  return wu(e, t);
}
function Fh(e, t, n, r) {
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
function We(e, t, n, r) {
  return new Fh(e, t, n, r);
}
function pl(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function zh(e) {
  if (typeof e == "function") return pl(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Mi)) return 11;
    if (e === Li) return 14;
  }
  return 2;
}
function Ot(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = We(e.tag, t, e.key, e.mode)),
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
function co(e, t, n, r, o, s) {
  var i = 2;
  if (((r = e), typeof e == "function")) pl(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case fn:
        return Xt(n.children, o, s, t);
      case Di:
        ((i = 8), (o |= 8));
        break;
      case Ds:
        return (
          (e = We(12, n, t, o | 2)),
          (e.elementType = Ds),
          (e.lanes = s),
          e
        );
      case Ms:
        return ((e = We(13, n, t, o)), (e.elementType = Ms), (e.lanes = s), e);
      case Ls:
        return ((e = We(19, n, t, o)), (e.elementType = Ls), (e.lanes = s), e);
      case nu:
        return Go(n, o, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case eu:
              i = 10;
              break e;
            case tu:
              i = 9;
              break e;
            case Mi:
              i = 11;
              break e;
            case Li:
              i = 14;
              break e;
            case Ct:
              ((i = 16), (r = null));
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = We(i, n, t, o)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = s),
    t
  );
}
function Xt(e, t, n, r) {
  return ((e = We(7, e, r, t)), (e.lanes = n), e);
}
function Go(e, t, n, r) {
  return (
    (e = We(22, e, r, t)),
    (e.elementType = nu),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ts(e, t, n) {
  return ((e = We(6, e, null, t)), (e.lanes = n), e);
}
function Is(e, t, n) {
  return (
    (t = We(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Ah(e, t, n, r, o) {
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
    (this.eventTimes = as(0)),
    (this.expirationTimes = as(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = as(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null));
}
function ml(e, t, n, r, o, s, i, l, a) {
  return (
    (e = new Ah(e, t, n, l, a)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = We(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ji(s),
    e
  );
}
function Uh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: dn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Kc(e) {
  if (!e) return zt;
  e = e._reactInternals;
  e: {
    if (ln(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Me(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Me(n)) return Ku(e, n, t);
  }
  return t;
}
function Gc(e, t, n, r, o, s, i, l, a) {
  return (
    (e = ml(n, r, !0, e, o, s, i, l, a)),
    (e.context = Kc(null)),
    (n = e.current),
    (r = Ne()),
    (o = $t(n)),
    (s = gt(r, o)),
    (s.callback = t ?? null),
    Lt(n, s, o),
    (e.current.lanes = o),
    jr(e, o, r),
    Le(e, r),
    e
  );
}
function qo(e, t, n, r) {
  var o = t.current,
    s = Ne(),
    i = $t(o);
  return (
    (n = Kc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = gt(s, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Lt(o, t, i)),
    e !== null && (et(e, o, i, s), oo(e, o, i)),
    i
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
function ba(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function gl(e, t) {
  (ba(e, t), (e = e.alternate) && ba(e, t));
}
function Hh() {
  return null;
}
var qc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function yl(e) {
  this._internalRoot = e;
}
Xo.prototype.render = yl.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  qo(e, t, null, null);
};
Xo.prototype.unmount = yl.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (rn(function () {
      qo(null, e, null, null);
    }),
      (t[vt] = null));
  }
};
function Xo(e) {
  this._internalRoot = e;
}
Xo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Nu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Nt.length && t !== 0 && t < Nt[n].priority; n++);
    (Nt.splice(n, 0, e), n === 0 && Iu(e));
  }
};
function vl(e) {
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
function Da() {}
function Bh(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var c = Ro(i);
        s.call(c);
      };
    }
    var i = Gc(t, r, e, 0, null, !1, !1, "", Da);
    return (
      (e._reactRootContainer = i),
      (e[vt] = i.current),
      yr(e.nodeType === 8 ? e.parentNode : e),
      rn(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var c = Ro(a);
      l.call(c);
    };
  }
  var a = ml(e, 0, !1, null, null, !1, !1, "", Da);
  return (
    (e._reactRootContainer = a),
    (e[vt] = a.current),
    yr(e.nodeType === 8 ? e.parentNode : e),
    rn(function () {
      qo(t, a, n, r);
    }),
    a
  );
}
function Jo(e, t, n, r, o) {
  var s = n._reactRootContainer;
  if (s) {
    var i = s;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var a = Ro(i);
        l.call(a);
      };
    }
    qo(t, i, e, o);
  } else i = Bh(n, t, e, o, r);
  return Ro(i);
}
Cu = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Jn(t.pendingLanes);
        n !== 0 &&
          (Oi(t, n | 1), Le(t, oe()), !(z & 6) && ((Rn = oe() + 500), Ht()));
      }
      break;
    case 13:
      (rn(function () {
        var r = wt(e, 1);
        if (r !== null) {
          var o = Ne();
          et(r, e, 1, o);
        }
      }),
        gl(e, 1));
  }
};
Fi = function (e) {
  if (e.tag === 13) {
    var t = wt(e, 134217728);
    if (t !== null) {
      var n = Ne();
      et(t, e, 134217728, n);
    }
    gl(e, 134217728);
  }
};
Eu = function (e) {
  if (e.tag === 13) {
    var t = $t(e),
      n = wt(e, t);
    if (n !== null) {
      var r = Ne();
      et(n, e, t, r);
    }
    gl(e, t);
  }
};
Nu = function () {
  return A;
};
Tu = function (e, t) {
  var n = A;
  try {
    return ((A = e), t());
  } finally {
    A = n;
  }
};
Ws = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Os(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = Ho(r);
            if (!o) throw Error(k(90));
            (ou(r), Os(r, o));
          }
        }
      }
      break;
    case "textarea":
      iu(e, n);
      break;
    case "select":
      ((t = n.value), t != null && kn(e, !!n.multiple, t, !1));
  }
};
hu = dl;
pu = rn;
var Wh = { usingClientEntryPoint: !1, Events: [br, gn, Ho, du, fu, dl] },
  qn = {
    findFiberByHostInstance: Qt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Vh = {
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
    currentDispatcherRef: xt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = yu(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: qn.findFiberByHostInstance || Hh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Xr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Xr.isDisabled && Xr.supportsFiber)
    try {
      ((Fo = Xr.inject(Vh)), (at = Xr));
    } catch {}
}
Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wh;
Ae.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!vl(t)) throw Error(k(200));
  return Uh(e, t, null, n);
};
Ae.createRoot = function (e, t) {
  if (!vl(e)) throw Error(k(299));
  var n = !1,
    r = "",
    o = qc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = ml(e, 1, !1, null, null, n, !1, r, o)),
    (e[vt] = t.current),
    yr(e.nodeType === 8 ? e.parentNode : e),
    new yl(t)
  );
};
Ae.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return ((e = yu(t)), (e = e === null ? null : e.stateNode), e);
};
Ae.flushSync = function (e) {
  return rn(e);
};
Ae.hydrate = function (e, t, n) {
  if (!Yo(t)) throw Error(k(200));
  return Jo(null, e, t, !0, n);
};
Ae.hydrateRoot = function (e, t, n) {
  if (!vl(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    s = "",
    i = qc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Gc(t, null, e, 1, n ?? null, o, !1, s, i)),
    (e[vt] = t.current),
    yr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o));
  return new Xo(t);
};
Ae.render = function (e, t, n) {
  if (!Yo(t)) throw Error(k(200));
  return Jo(null, e, t, !1, n);
};
Ae.unmountComponentAtNode = function (e) {
  if (!Yo(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (rn(function () {
        Jo(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[vt] = null));
        });
      }),
      !0)
    : !1;
};
Ae.unstable_batchedUpdates = dl;
Ae.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Yo(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Jo(e, t, n, !1, r);
};
Ae.version = "18.3.1-next-f1338f8080-20240426";
function Xc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xc);
    } catch (e) {
      console.error(e);
    }
}
(Xc(), (Xa.exports = Ae));
var Qh = Xa.exports,
  Yc,
  Ma = Qh;
((Yc = Ma.createRoot), Ma.hydrateRoot);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Kh = {
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
 */ const Gh = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  pe = (e, t) => {
    const n = N.forwardRef(
      (
        {
          color: r = "currentColor",
          size: o = 24,
          strokeWidth: s = 2,
          absoluteStrokeWidth: i,
          className: l = "",
          children: a,
          ...c
        },
        p,
      ) =>
        N.createElement(
          "svg",
          {
            ref: p,
            ...Kh,
            width: o,
            height: o,
            stroke: r,
            strokeWidth: i ? (Number(s) * 24) / Number(o) : s,
            className: ["lucide", `lucide-${Gh(e)}`, l].join(" "),
            ...c,
          },
          [
            ...t.map(([g, m]) => N.createElement(g, m)),
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
 */ const qh = pe("CheckSquare", [
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
 */ const Jc = pe("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xh = pe("Globe", [
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
 */ const Yh = pe("Layers", [
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
 */ const ki = pe("Lock", [
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
 */ const Jh = pe("LogIn", [
  ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }],
  ["polyline", { points: "10 17 15 12 10 7", key: "1ail0h" }],
  ["line", { x1: "15", x2: "3", y1: "12", y2: "12", key: "v6grx8" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zh = pe("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ep = pe("PlusSquare", [
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
  ],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tp = pe("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zc = pe("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const np = pe("Square", [
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
 */ const rp = pe("Trash2", [
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
 */ const ed = pe("Unlock", [
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
 */ const td = pe("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const op = pe("UserPlus", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sp = pe("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ci = pe("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const An = pe("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  ip = {
    en: {
      inventoryManagement: "Inventory Management",
      management: "Management",
      merge: "Merge",
      review: "Review",
      report: "Report",
      final: "Final",
      daily: "Daily Inventory Report",
      logout: "Logout",
      downloadTemplate: "Download Template",
      search: "Search",
      uploadExcel: "Upload Excel",
      createInventory: "Create Inventory",
      cancel: "Cancel",
      save: "Save Changes",
      add: "Add",
      downloadExcel: "Download Excel",
      enterInventory: "Enter Inventory",
      filterBy: "Filter by",
      inventoryForms: "Inventory Forms",
      dailyForms: "Daily Inventory",
      reviewForms: "Review Forms",
      noItemsFound: "No items found",
      allStatus: "All",
      locked: "Locked",
      unlocked: "Unlocked",
      batchLock: "Batch Lock",
      selectItems: "Select Items",
      selectedItems: "Selected",
      lockSelected: "Lock Selected",
      unlockSelected: "Unlock Selected",
      cancelSelection: "Cancel",
      selectAll: "Select All",
      deselectAll: "Deselect All",
      today: "Today",
      thisWeek: "This Week",
      oneMonth: "1 Month",
      threeMonths: "3 Months",
      sixMonths: "6 Months",
      oneYear: "1 Year",
      quickSearch: "Quick Search",
      login: "Login",
      userId: "User ID",
      password: "Password",
      loginFailed: "Login failed",
      pleaseLogin: "Please login to continue",
      invalidCredentials: "Invalid credentials",
      creator: "Creator",
      ic_sn: "Inventory no.",
      ic_name: "Inventory name",
      staff: "Staff",
      start: "Start Time",
      end: "End Time",
      status: "Status",
      addMedicine: "Add Medicine",
      editStaff: "Edit Staff",
      onlineUsers: "Online Users",
      createNewInventory: "Create New Inventory",
      inventoryName: "Inventory Name",
      startDate: "Start Date",
      endDate: "End Date",
      notes: "Notes",
      create: "Create",
      medQtyGroup: "Medicine Quantity Group",
      controlLevel: "Control Level",
      medTypeGroup: "Medicine Type Group",
      searchInventory: "Search Inventory",
      inventoryNumber: "Inventory Number",
      searchPeriod: "Search Date",
      searchTerm: "Search Term",
      enterSearchTerm: "Enter search term...",
      enterInventoryNumber: "Enter inventory number...",
      from: "Start date",
      to: "End date",
      uploadExcelFile: "Upload Excel File",
      selectFile: "Select a file",
      dragAndDrop: "or drag and drop",
      excelFilesOnly: "Excel files only (.xls, .xlsx)",
      uploadInventoryName: "Inventory Name",
      uploadInventoryStaff: "Default Staff",
      enterInventoryName: "Enter inventory name",
      enterUploadStaffName: "Enter staff name",
      upload: "Upload",
      fileRequired: "Please select a file",
      invalidFileType: "Only Excel files (.xls, .xlsx) are allowed",
      addMedicineTitle: "Add Medicine",
      medicineCode: "Medicine Code",
      medicineName: "Medicine Name",
      quantity: "Quantity",
      mm_code: "Code: ",
      mm_sdkiacode: "SKDIA Code: ",
      mm_name: "Name: ",
      mm_chtname: "Chinese Name: ",
      mm_notfound: "No results found",
      editStaffTitle: "Edit Staff",
      staffMember: "Staff Member",
      enterStaffName: "Enter staff name",
      invalidStaffName: "Only letters, Chinese characters, and spaces allowed",
      role: "Role",
      counter: "Counter",
      reviewer: "Reviewer",
      manager: "Manager",
    },
    zh: {
      inventoryManagement: "盤點管理",
      management: "管理",
      merge: "合併",
      review: "覆盤",
      report: "報表",
      final: "定盤",
      daily: "每日盤點報表",
      logout: "登出",
      downloadTemplate: "下載範本",
      search: "搜尋",
      uploadExcel: "上傳",
      createInventory: "建立盤點",
      cancel: "取消",
      save: "儲存變更",
      add: "新增",
      downloadExcel: "下載",
      enterInventory: "進入盤點",
      filterBy: "篩選條件",
      inventoryForms: "盤點單",
      dailyForms: "每日盤點單",
      reviewForms: "覆盤單",
      noItemsFound: "查無資料",
      allStatus: "全部",
      locked: "已鎖定",
      unlocked: "未鎖定",
      batchLock: "批次鎖單",
      selectItems: "選取項目",
      selectedItems: "已選取",
      lockSelected: "鎖定選取",
      unlockSelected: "解鎖選取",
      cancelSelection: "取消",
      selectAll: "全選",
      deselectAll: "取消全選",
      today: "當日",
      thisWeek: "當周",
      oneMonth: "近一月",
      threeMonths: "近三月",
      sixMonths: "近半年",
      oneYear: "近一年",
      quickSearch: "快速搜尋",
      login: "登入",
      userId: "使用者帳號",
      password: "密碼",
      loginFailed: "登入失敗",
      pleaseLogin: "請先登入",
      invalidCredentials: "帳號或密碼錯誤",
      creator: "建立者",
      ic_sn: "單號",
      ic_name: "名稱",
      staff: "盤點人員",
      start: "開始時間",
      end: "結束時間",
      status: "狀態",
      addMedicine: "新增藥品",
      editStaff: "編輯人員",
      onlineUsers: "線上人數",
      createNewInventory: "建立新盤點",
      inventoryName: "盤點名稱",
      startDate: "開始日期",
      endDate: "結束日期",
      notes: "備註",
      create: "建立",
      medQtyGroup: "藥品群組",
      controlLevel: "管制級別",
      medTypeGroup: "藥品種類群組",
      searchInventory: "搜尋盤點單",
      inventoryNumber: "盤點單號",
      searchPeriod: "搜尋日期",
      searchTerm: "搜尋條件",
      enterSearchTerm: "請輸入搜尋條件...",
      enterInventoryNumber: "請輸入盤點單號...",
      from: "起始時間",
      to: "結束時間",
      uploadExcelFile: "上傳 Excel 檔案",
      selectFile: "選擇檔案",
      dragAndDrop: "或拖曳至此",
      excelFilesOnly: "僅限 Excel 檔案 (.xls, .xlsx)",
      uploadInventoryName: "盤點名稱",
      uploadInventoryStaff: "預設盤點人",
      enterInventoryName: "請輸入盤點名稱",
      enterUploadStaffName: "請輸入人員名稱",
      upload: "上傳",
      fileRequired: "請選擇檔案",
      invalidFileType: "僅接受 Excel 檔案 (.xls, .xlsx)",
      addMedicineTitle: "新增藥品",
      medicineCode: "藥品代碼",
      medicineName: "藥品名稱",
      quantity: "數量",
      mm_code: "藥碼: ",
      mm_sdkiacode: "料號: ",
      mm_name: "藥名: ",
      mm_chtname: "中文名: ",
      mm_notfound: "查無藥品",
      editStaffTitle: "編輯人員",
      staffMember: "人員",
      enterStaffName: "請輸入人員名稱",
      invalidStaffName: "僅允許使用中英文字母和空格",
      role: "角色",
      counter: "盤點人員",
      reviewer: "覆核人員",
      manager: "管理人員",
    },
  },
  E = (e, t) => ip[t][e],
  wl = () => {
    const [e, t] = N.useState(null);
    return (
      N.useEffect(() => {
        fetch("../config.txt")
          .then((n) => n.json())
          .then((n) => t(n))
          .catch((n) => console.error("Error loading config:", n));
      }, []),
      e
    );
  },
  je = async () => {
    try {
      return await (await fetch("../config.txt")).json();
    } catch (e) {
      return (console.error("Error loading config:", e), null);
    }
  },
  st = async (e, t, n, r) => {
    var s;
    let o;
    try {
      o = await r.clone().json();
    } catch (i) {
      (console.warn("Failed to parse response JSON for logging:", i), (o = {}));
    }
    return (
      console.group(`🌐 API Call: ${e}`),
      console.log("📤 Request:", {
        url: `${(s = await je()) == null ? void 0 : s.domain}${e}`,
        method: t,
        data: n,
      }),
      console.log("📥 Response:", { status: r.status, data: o }),
      console.groupEnd(),
      o
    );
  },
  fe = {
    async getExcelHeader() {
      const e = await je();
      if (!e) throw new Error("Failed to load configuration");
      const t = "/api/inventory/get_excel_header",
        n = {},
        r = await fetch(`${e.domain}${t}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(n),
        });
      if (!r.ok) throw new Error("Failed to download template");
      const o = await r.blob(),
        s = window.URL.createObjectURL(o),
        i = document.createElement("a");
      ((i.href = s),
        (i.download = "盤點範例.xlsx"),
        document.body.appendChild(i),
        i.click(),
        window.URL.revokeObjectURL(s),
        document.body.removeChild(i));
    },
    async downloadExcel(e) {
      const t = await je();
      if (!t) throw new Error("Failed to load configuration");
      const n = "/api/inventory/download_excel_by_IC_SN",
        r = {
          Data: {},
          Code: 0,
          Result: "",
          Value: e.IC_SN,
          ServerName: "",
          ServerType: "網頁",
          TableName: "medicine_page_firstclass",
          TimeTaken: "",
        },
        o = await fetch(`${t.domain}${n}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(r),
        });
      if (!o.ok) throw new Error("Failed to download Excel");
      const s = await o.blob(),
        i = window.URL.createObjectURL(s),
        l = document.createElement("a");
      ((l.href = i), console.log(e));
      const c = e.CT_TIME.split(" ")[0].replaceAll("/", "-");
      (console.log(c),
        e.IC_NAME
          ? (l.download = `${c} ${e.IC_NAME}.xlsx`)
          : (l.download = `${c} ${e.IC_SN}.xlsx`),
        document.body.appendChild(l),
        l.click(),
        window.URL.revokeObjectURL(i),
        document.body.removeChild(l));
    },
    async getInventoryList(e, t) {
      const n = await je();
      if (!n) throw new Error("Failed to load configuration");
      const r = "/api/inventory/creat_get_by_CT_TIME_ST_END";
      let o, s;
      if (e && t) ((o = e), (s = t));
      else {
        const c = new Date();
        c.setMonth(c.getMonth() - 1);
        const p = new Date();
        (p.setDate(p.getDate() + 2),
          (o = c.toISOString().split("T")[0]),
          (s = p.toISOString().split("T")[0]));
      }
      const i = {
          Data: {},
          Code: 0,
          Result: "",
          Value: `${o},${s}`,
          ServerName: "",
          ServerType: "網頁",
          TableName: "medicine_page_firstclass",
          TimeTaken: "",
        },
        l = await fetch(`${n.domain}${r}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(i),
        });
      if (!l.ok) throw new Error("Failed to fetch inventory list");
      return (await st(r, "POST", i, l)).Data || [];
    },
    async getOnlineUsers() {
      const e = await je();
      if (!e) throw new Error("Failed to load configuration");
      const t = "/api/webTraffic/get_by_page",
        n = { ValueAry: ["盤點操作", "10"] },
        r = await fetch(`${e.domain}${t}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(n),
        });
      if (!r.ok) throw new Error("Failed to fetch online users");
      const o = await st(t, "POST", n, r);
      return o.Code == -200 ? [] : o.Data || [];
    },
    async deleteInventory(e, t) {
      const n = await je();
      if (!n) throw new Error("Failed to load configuration");
      const r = "/api/inventory/creat_delete_by_IC_SN",
        o = {
          Data: {},
          Method: "creat_delete_by_IC_SN",
          Value: e,
          ServerName: "",
          ServerType: "網頁",
          TableName: "medicine_page_firstclass",
        },
        s = await fetch(`${n.domain}${r}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(o),
        });
      if (!s.ok) throw new Error("Failed to delete inventory");
      const i = await st(r, "POST", o, s);
      try {
        await t(i);
      } catch (l) {
        console.warn("Failed to send real-time update:", l);
      }
      return i;
    },
    async toggleLock(e, t, n) {
      const r = await je();
      if (!r) throw new Error("Failed to load configuration");
      const o = t ? "creat_unlock_by_IC_SN" : "creat_lock_by_IC_SN",
        s = `/api/inventory/${o}`,
        i = {
          Data: {},
          Method: o,
          Value: e,
          ServerName: "",
          ServerType: "網頁",
          TableName: "medicine_page_firstclass",
          TimeTaken: "",
        },
        l = await fetch(`${r.domain}${s}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(i),
        });
      if (!l.ok)
        throw new Error(`Failed to ${t ? "unlock" : "lock"} inventory`);
      const a = await st(s, "POST", i, l);
      try {
        await n(a);
      } catch (c) {
        console.warn("Failed to send real-time update:", c);
      }
      return a;
    },
    async createInventory(e, t) {
      const n = await je();
      if (!n) throw new Error("Failed to load configuration");
      const r = `medgroup=${(e.selectedMedQtyGroups || []).join(";")}`,
        o = `control=${(e.selectedControlLevels || []).join(";")}`,
        s = `medType=${(e.selectedMedTypes || []).join(";")}`,
        i = "/api/inventory/creat_auto_add",
        l = {
          Data: {
            GUID: null,
            IC_SN: null,
            CT: e.CT,
            CT_TIME: null,
            START_TIME: null,
            END_TIME: null,
            STATE: null,
            IC_NAME: e.IC_NAME,
            Contents: [],
          },
          Code: 0,
          TableName: "medicine_page_firstclass",
          Result: "",
          Value: "",
          ValueAry: [r, o, s],
          ServerName: "DS01",
          ServerType: "藥庫",
          TimeTaken: "",
        },
        a = await fetch(`${n.domain}${i}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(l),
        });
      (console.log(`${n.domain}${i}`), console.log(l));
      let c = await a.clone().json();
      console.log(c);
      const p = await st(i, "POST", l, a);
      try {
        await t(p);
      } catch (g) {
        console.warn("Failed to send real-time update:", g);
      }
      return p;
    },
    async uploadExcel(e, t) {
      const n = await je();
      if (!n) throw new Error("Failed to load configuration");
      const r = "/api/inventory/excel_upload",
        o = await fetch(`${n.domain}${r}`, { method: "POST", body: e });
      if (!o.ok) throw new Error("Failed to upload Excel file");
      let s = await o.json();
      (console.group(`🌐 API Call: ${r}`),
        console.log("📤 Request:", {
          url: `${n.domain}${r}`,
          method: "POST",
          data: "FormData (file upload)",
        }),
        console.log("📥 Response:", { status: o.status, data: s }),
        console.groupEnd());
      try {
        await t(s);
      } catch (i) {
        console.warn("Failed to send real-time update:", i);
      }
      return s;
    },
    async getMedicineList() {
      const e = await je();
      if (!e) throw new Error("Failed to load configuration");
      const t = "/api/MED_page/get_by_apiserver",
        n = {
          Data: {},
          Code: 0,
          Result: "",
          Value: "",
          ServerName: "Main",
          ServerType: "網頁",
          TableName: "medicine_page_cloud",
          DbName: "dbvm",
          TimeTaken: "",
        },
        r = await fetch(`${e.domain}${t}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(n),
        });
      if (!r.ok) throw new Error("Failed to fetch medicine list");
      return (await st(t, "POST", n, r)).Data || [];
    },
    async addMedicineToInventory(e, t) {
      const n = await je();
      if (!n) throw new Error("Failed to load configuration");
      const r = "/api/inventory/content_add_by_IC_SN",
        o = { Data: { Contents: [t] }, Value: e },
        s = await fetch(`${n.domain}${r}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(o),
        });
      if (!s.ok) throw new Error("Failed to add medicine to inventory");
      return st(r, "POST", o, s);
    },
    async updateInventoryStaff(e, t) {
      const n = await je();
      if (!n) throw new Error("Failed to load configuration");
      const r = "/api/inventory/creat_update_default_op_by_IC_SN",
        o = { Data: { DEFAULT_OP: t.join(",") }, Value: e },
        s = await fetch(`${n.domain}${r}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(o),
        });
      if (!s.ok) throw new Error("Failed to update inventory staff");
      return st(r, "POST", o, s);
    },
    async getMedCloud() {
      const e = await je();
      if (!e) throw new Error("Failed to load configuration");
      const t = "/api/MED_page/get_med_cloud",
        n = {},
        r = await fetch(`${e.domain}${t}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(n),
        });
      if (!r.ok) throw new Error("Failed to fetch medicine cloud data");
      return await st(t, "POST", n, r);
    },
    async getMedQtyGroup() {
      const e = await je();
      if (!e) throw new Error("Failed to load configuration");
      const t = "/api/medGroup/get_all_group",
        n = {},
        r = await fetch(`${e.domain}${t}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(n),
        });
      if (!r.ok)
        throw new Error("Failed to fetch medicine quantity group data");
      return await st(t, "POST", n, r);
    },
  },
  lp = ({ isOpen: e }) =>
    e
      ? u.jsx("div", {
          className:
            "fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50",
          children: u.jsxs("div", {
            className: "bg-white rounded-lg p-8 flex flex-col items-center",
            children: [
              u.jsx("div", {
                className:
                  "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600",
              }),
              u.jsx("p", {
                className: "mt-4 text-gray-700 text-lg",
                children: "Loading...",
              }),
            ],
          }),
        })
      : null,
  nd = N.createContext(void 0),
  ap = ({ children: e }) => {
    const [t, n] = N.useState(!1),
      [r, o] = N.useState(0),
      s = N.useCallback(() => {
        (o((l) => l + 1), n(!0));
      }, []),
      i = N.useCallback(() => {
        o((l) => {
          const a = l - 1;
          return a <= 0 ? (n(!1), 0) : a;
        });
      }, []);
    return u.jsxs(nd.Provider, {
      value: { showLoading: s, hideLoading: i },
      children: [e, u.jsx(lp, { isOpen: t })],
    });
  },
  Mr = () => {
    const e = N.useContext(nd);
    if (!e) throw new Error("useLoading must be used within a LoadingProvider");
    return e;
  };
class Yt extends Error {
  constructor(t, n) {
    const r = new.target.prototype;
    (super(`${t}: Status code '${n}'`),
      (this.statusCode = n),
      (this.__proto__ = r));
  }
}
class _l extends Error {
  constructor(t = "A timeout occurred.") {
    const n = new.target.prototype;
    (super(t), (this.__proto__ = n));
  }
}
class Je extends Error {
  constructor(t = "An abort occurred.") {
    const n = new.target.prototype;
    (super(t), (this.__proto__ = n));
  }
}
class up extends Error {
  constructor(t, n) {
    const r = new.target.prototype;
    (super(t),
      (this.transport = n),
      (this.errorType = "UnsupportedTransportError"),
      (this.__proto__ = r));
  }
}
class cp extends Error {
  constructor(t, n) {
    const r = new.target.prototype;
    (super(t),
      (this.transport = n),
      (this.errorType = "DisabledTransportError"),
      (this.__proto__ = r));
  }
}
class dp extends Error {
  constructor(t, n) {
    const r = new.target.prototype;
    (super(t),
      (this.transport = n),
      (this.errorType = "FailedToStartTransportError"),
      (this.__proto__ = r));
  }
}
class La extends Error {
  constructor(t) {
    const n = new.target.prototype;
    (super(t),
      (this.errorType = "FailedToNegotiateWithServerError"),
      (this.__proto__ = n));
  }
}
class fp extends Error {
  constructor(t, n) {
    const r = new.target.prototype;
    (super(t), (this.innerErrors = n), (this.__proto__ = r));
  }
}
class rd {
  constructor(t, n, r) {
    ((this.statusCode = t), (this.statusText = n), (this.content = r));
  }
}
class Zo {
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
var y;
(function (e) {
  ((e[(e.Trace = 0)] = "Trace"),
    (e[(e.Debug = 1)] = "Debug"),
    (e[(e.Information = 2)] = "Information"),
    (e[(e.Warning = 3)] = "Warning"),
    (e[(e.Error = 4)] = "Error"),
    (e[(e.Critical = 5)] = "Critical"),
    (e[(e.None = 6)] = "None"));
})(y || (y = {}));
class Nr {
  constructor() {}
  log(t, n) {}
}
Nr.instance = new Nr();
const hp = "8.0.7";
class se {
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
class J {
  static get isBrowser() {
    return (
      !J.isNode &&
      typeof window == "object" &&
      typeof window.document == "object"
    );
  }
  static get isWebWorker() {
    return !J.isNode && typeof self == "object" && "importScripts" in self;
  }
  static get isReactNative() {
    return (
      !J.isNode && typeof window == "object" && typeof window.document > "u"
    );
  }
  static get isNode() {
    return (
      typeof process < "u" && process.release && process.release.name === "node"
    );
  }
}
function Tr(e, t) {
  let n = "";
  return (
    on(e)
      ? ((n = `Binary data of length ${e.byteLength}`),
        t && (n += `. Content: '${pp(e)}'`))
      : typeof e == "string" &&
        ((n = `String data of length ${e.length}`),
        t && (n += `. Content: '${e}'`)),
    n
  );
}
function pp(e) {
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
function on(e) {
  return (
    e &&
    typeof ArrayBuffer < "u" &&
    (e instanceof ArrayBuffer ||
      (e.constructor && e.constructor.name === "ArrayBuffer"))
  );
}
async function od(e, t, n, r, o, s) {
  const i = {},
    [l, a] = $n();
  ((i[l] = a),
    e.log(
      y.Trace,
      `(${t} transport) sending data. ${Tr(o, s.logMessageContent)}.`,
    ));
  const c = on(o) ? "arraybuffer" : "text",
    p = await n.post(r, {
      content: o,
      headers: { ...i, ...s.headers },
      responseType: c,
      timeout: s.timeout,
      withCredentials: s.withCredentials,
    });
  e.log(
    y.Trace,
    `(${t} transport) request complete. Response status: ${p.statusCode}.`,
  );
}
function mp(e) {
  return e === void 0
    ? new $o(y.Information)
    : e === null
      ? Nr.instance
      : e.log !== void 0
        ? e
        : new $o(e);
}
class gp {
  constructor(t, n) {
    ((this._subject = t), (this._observer = n));
  }
  dispose() {
    const t = this._subject.observers.indexOf(this._observer);
    (t > -1 && this._subject.observers.splice(t, 1),
      this._subject.observers.length === 0 &&
        this._subject.cancelCallback &&
        this._subject.cancelCallback().catch((n) => {}));
  }
}
class $o {
  constructor(t) {
    ((this._minLevel = t), (this.out = console));
  }
  log(t, n) {
    if (t >= this._minLevel) {
      const r = `[${new Date().toISOString()}] ${y[t]}: ${n}`;
      switch (t) {
        case y.Critical:
        case y.Error:
          this.out.error(r);
          break;
        case y.Warning:
          this.out.warn(r);
          break;
        case y.Information:
          this.out.info(r);
          break;
        default:
          this.out.log(r);
          break;
      }
    }
  }
}
function $n() {
  let e = "X-SignalR-User-Agent";
  return (J.isNode && (e = "User-Agent"), [e, yp(hp, vp(), _p(), wp())]);
}
function yp(e, t, n, r) {
  let o = "Microsoft SignalR/";
  const s = e.split(".");
  return (
    (o += `${s[0]}.${s[1]}`),
    (o += ` (${e}; `),
    t && t !== "" ? (o += `${t}; `) : (o += "Unknown OS; "),
    (o += `${n}`),
    r ? (o += `; ${r}`) : (o += "; Unknown Runtime Version"),
    (o += ")"),
    o
  );
}
function vp() {
  if (J.isNode)
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
function wp() {
  if (J.isNode) return process.versions.node;
}
function _p() {
  return J.isNode ? "NodeJS" : "Browser";
}
function js(e) {
  return e.stack ? e.stack : e.message ? e.message : `${e}`;
}
function xp() {
  if (typeof globalThis < "u") return globalThis;
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("could not find global");
}
class Sp extends Zo {
  constructor(t) {
    if ((super(), (this._logger = t), typeof fetch > "u" || J.isNode)) {
      const n =
        typeof __webpack_require__ == "function"
          ? __non_webpack_require__
          : require;
      ((this._jar = new (n("tough-cookie").CookieJar)()),
        typeof fetch > "u"
          ? (this._fetchType = n("node-fetch"))
          : (this._fetchType = fetch),
        (this._fetchType = n("fetch-cookie")(this._fetchType, this._jar)));
    } else this._fetchType = fetch.bind(xp());
    if (typeof AbortController > "u") {
      const n =
        typeof __webpack_require__ == "function"
          ? __non_webpack_require__
          : require;
      this._abortControllerType = n("abort-controller");
    } else this._abortControllerType = AbortController;
  }
  async send(t) {
    if (t.abortSignal && t.abortSignal.aborted) throw new Je();
    if (!t.method) throw new Error("No method defined.");
    if (!t.url) throw new Error("No url defined.");
    const n = new this._abortControllerType();
    let r;
    t.abortSignal &&
      (t.abortSignal.onabort = () => {
        (n.abort(), (r = new Je()));
      });
    let o = null;
    if (t.timeout) {
      const a = t.timeout;
      o = setTimeout(() => {
        (n.abort(),
          this._logger.log(y.Warning, "Timeout from HTTP request."),
          (r = new _l()));
      }, a);
    }
    (t.content === "" && (t.content = void 0),
      t.content &&
        ((t.headers = t.headers || {}),
        on(t.content)
          ? (t.headers["Content-Type"] = "application/octet-stream")
          : (t.headers["Content-Type"] = "text/plain;charset=UTF-8")));
    let s;
    try {
      s = await this._fetchType(t.url, {
        body: t.content,
        cache: "no-cache",
        credentials: t.withCredentials === !0 ? "include" : "same-origin",
        headers: { "X-Requested-With": "XMLHttpRequest", ...t.headers },
        method: t.method,
        mode: "cors",
        redirect: "follow",
        signal: n.signal,
      });
    } catch (a) {
      throw (
        r || (this._logger.log(y.Warning, `Error from HTTP request. ${a}.`), a)
      );
    } finally {
      (o && clearTimeout(o), t.abortSignal && (t.abortSignal.onabort = null));
    }
    if (!s.ok) {
      const a = await Ra(s, "text");
      throw new Yt(a || s.statusText, s.status);
    }
    const l = await Ra(s, t.responseType);
    return new rd(s.status, s.statusText, l);
  }
  getCookieString(t) {
    let n = "";
    return (
      J.isNode &&
        this._jar &&
        this._jar.getCookies(t, (r, o) => (n = o.join("; "))),
      n
    );
  }
}
function Ra(e, t) {
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
class kp extends Zo {
  constructor(t) {
    (super(), (this._logger = t));
  }
  send(t) {
    return t.abortSignal && t.abortSignal.aborted
      ? Promise.reject(new Je())
      : t.method
        ? t.url
          ? new Promise((n, r) => {
              const o = new XMLHttpRequest();
              (o.open(t.method, t.url, !0),
                (o.withCredentials =
                  t.withCredentials === void 0 ? !0 : t.withCredentials),
                o.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                t.content === "" && (t.content = void 0),
                t.content &&
                  (on(t.content)
                    ? o.setRequestHeader(
                        "Content-Type",
                        "application/octet-stream",
                      )
                    : o.setRequestHeader(
                        "Content-Type",
                        "text/plain;charset=UTF-8",
                      )));
              const s = t.headers;
              (s &&
                Object.keys(s).forEach((i) => {
                  o.setRequestHeader(i, s[i]);
                }),
                t.responseType && (o.responseType = t.responseType),
                t.abortSignal &&
                  (t.abortSignal.onabort = () => {
                    (o.abort(), r(new Je()));
                  }),
                t.timeout && (o.timeout = t.timeout),
                (o.onload = () => {
                  (t.abortSignal && (t.abortSignal.onabort = null),
                    o.status >= 200 && o.status < 300
                      ? n(
                          new rd(
                            o.status,
                            o.statusText,
                            o.response || o.responseText,
                          ),
                        )
                      : r(
                          new Yt(
                            o.response || o.responseText || o.statusText,
                            o.status,
                          ),
                        ));
                }),
                (o.onerror = () => {
                  (this._logger.log(
                    y.Warning,
                    `Error from HTTP request. ${o.status}: ${o.statusText}.`,
                  ),
                    r(new Yt(o.statusText, o.status)));
                }),
                (o.ontimeout = () => {
                  (this._logger.log(y.Warning, "Timeout from HTTP request."),
                    r(new _l()));
                }),
                o.send(t.content));
            })
          : Promise.reject(new Error("No url defined."))
        : Promise.reject(new Error("No method defined."));
  }
}
class Cp extends Zo {
  constructor(t) {
    if ((super(), typeof fetch < "u" || J.isNode)) this._httpClient = new Sp(t);
    else if (typeof XMLHttpRequest < "u") this._httpClient = new kp(t);
    else throw new Error("No usable HttpClient found.");
  }
  send(t) {
    return t.abortSignal && t.abortSignal.aborted
      ? Promise.reject(new Je())
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
class Oe {
  static write(t) {
    return `${t}${Oe.RecordSeparator}`;
  }
  static parse(t) {
    if (t[t.length - 1] !== Oe.RecordSeparator)
      throw new Error("Message is incomplete.");
    const n = t.split(Oe.RecordSeparator);
    return (n.pop(), n);
  }
}
Oe.RecordSeparatorCode = 30;
Oe.RecordSeparator = String.fromCharCode(Oe.RecordSeparatorCode);
class Ep {
  writeHandshakeRequest(t) {
    return Oe.write(JSON.stringify(t));
  }
  parseHandshakeResponse(t) {
    let n, r;
    if (on(t)) {
      const l = new Uint8Array(t),
        a = l.indexOf(Oe.RecordSeparatorCode);
      if (a === -1) throw new Error("Message is incomplete.");
      const c = a + 1;
      ((n = String.fromCharCode.apply(
        null,
        Array.prototype.slice.call(l.slice(0, c)),
      )),
        (r = l.byteLength > c ? l.slice(c).buffer : null));
    } else {
      const l = t,
        a = l.indexOf(Oe.RecordSeparator);
      if (a === -1) throw new Error("Message is incomplete.");
      const c = a + 1;
      ((n = l.substring(0, c)), (r = l.length > c ? l.substring(c) : null));
    }
    const o = Oe.parse(n),
      s = JSON.parse(o[0]);
    if (s.type)
      throw new Error("Expected a handshake response from the server.");
    return [r, s];
  }
}
var $;
(function (e) {
  ((e[(e.Invocation = 1)] = "Invocation"),
    (e[(e.StreamItem = 2)] = "StreamItem"),
    (e[(e.Completion = 3)] = "Completion"),
    (e[(e.StreamInvocation = 4)] = "StreamInvocation"),
    (e[(e.CancelInvocation = 5)] = "CancelInvocation"),
    (e[(e.Ping = 6)] = "Ping"),
    (e[(e.Close = 7)] = "Close"),
    (e[(e.Ack = 8)] = "Ack"),
    (e[(e.Sequence = 9)] = "Sequence"));
})($ || ($ = {}));
class Np {
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
    return (this.observers.push(t), new gp(this, t));
  }
}
class Tp {
  constructor(t, n, r) {
    ((this._bufferSize = 1e5),
      (this._messages = []),
      (this._totalMessageCount = 0),
      (this._waitForSequenceMessage = !1),
      (this._nextReceivingSequenceId = 1),
      (this._latestReceivedSequenceId = 0),
      (this._bufferedByteCount = 0),
      (this._reconnectInProgress = !1),
      (this._protocol = t),
      (this._connection = n),
      (this._bufferSize = r));
  }
  async _send(t) {
    const n = this._protocol.writeMessage(t);
    let r = Promise.resolve();
    if (this._isInvocationMessage(t)) {
      this._totalMessageCount++;
      let o = () => {},
        s = () => {};
      (on(n)
        ? (this._bufferedByteCount += n.byteLength)
        : (this._bufferedByteCount += n.length),
        this._bufferedByteCount >= this._bufferSize &&
          (r = new Promise((i, l) => {
            ((o = i), (s = l));
          })),
        this._messages.push(new Ip(n, this._totalMessageCount, o, s)));
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
        ((n = r),
          on(o._message)
            ? (this._bufferedByteCount -= o._message.byteLength)
            : (this._bufferedByteCount -= o._message.length),
          o._resolver());
      else if (this._bufferedByteCount < this._bufferSize) o._resolver();
      else break;
    }
    n !== -1 && (this._messages = this._messages.slice(n + 1));
  }
  _shouldProcessMessage(t) {
    if (this._waitForSequenceMessage)
      return t.type !== $.Sequence
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
        new Error(
          "Sequence ID greater than amount of messages we've received.",
        ),
      );
      return;
    }
    this._nextReceivingSequenceId = t.sequenceId;
  }
  _disconnected() {
    ((this._reconnectInProgress = !0), (this._waitForSequenceMessage = !0));
  }
  async _resend() {
    const t =
      this._messages.length !== 0
        ? this._messages[0]._id
        : this._totalMessageCount + 1;
    await this._connection.send(
      this._protocol.writeMessage({ type: $.Sequence, sequenceId: t }),
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
      case $.Invocation:
      case $.StreamItem:
      case $.Completion:
      case $.StreamInvocation:
      case $.CancelInvocation:
        return !0;
      case $.Close:
      case $.Sequence:
      case $.Ping:
      case $.Ack:
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
                type: $.Ack,
                sequenceId: this._latestReceivedSequenceId,
              }),
            ));
        } catch {}
        (clearTimeout(this._ackTimerHandle), (this._ackTimerHandle = void 0));
      }, 1e3));
  }
}
class Ip {
  constructor(t, n, r, o) {
    ((this._message = t),
      (this._id = n),
      (this._resolver = r),
      (this._rejector = o));
  }
}
const jp = 30 * 1e3,
  Pp = 15 * 1e3,
  bp = 1e5;
var G;
(function (e) {
  ((e.Disconnected = "Disconnected"),
    (e.Connecting = "Connecting"),
    (e.Connected = "Connected"),
    (e.Disconnecting = "Disconnecting"),
    (e.Reconnecting = "Reconnecting"));
})(G || (G = {}));
class xl {
  static create(t, n, r, o, s, i, l) {
    return new xl(t, n, r, o, s, i, l);
  }
  constructor(t, n, r, o, s, i, l) {
    ((this._nextKeepAlive = 0),
      (this._freezeEventListener = () => {
        this._logger.log(
          y.Warning,
          "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://learn.microsoft.com/aspnet/core/signalr/javascript-client#bsleep",
        );
      }),
      se.isRequired(t, "connection"),
      se.isRequired(n, "logger"),
      se.isRequired(r, "protocol"),
      (this.serverTimeoutInMilliseconds = s ?? jp),
      (this.keepAliveIntervalInMilliseconds = i ?? Pp),
      (this._statefulReconnectBufferSize = l ?? bp),
      (this._logger = n),
      (this._protocol = r),
      (this.connection = t),
      (this._reconnectPolicy = o),
      (this._handshakeProtocol = new Ep()),
      (this.connection.onreceive = (a) => this._processIncomingData(a)),
      (this.connection.onclose = (a) => this._connectionClosed(a)),
      (this._callbacks = {}),
      (this._methods = {}),
      (this._closedCallbacks = []),
      (this._reconnectingCallbacks = []),
      (this._reconnectedCallbacks = []),
      (this._invocationId = 0),
      (this._receivedHandshakeResponse = !1),
      (this._connectionState = G.Disconnected),
      (this._connectionStarted = !1),
      (this._cachedPingMessage = this._protocol.writeMessage({
        type: $.Ping,
      })));
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
      this._connectionState !== G.Disconnected &&
      this._connectionState !== G.Reconnecting
    )
      throw new Error(
        "The HubConnection must be in the Disconnected or Reconnecting state to change the url.",
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
    if (this._connectionState !== G.Disconnected)
      return Promise.reject(
        new Error(
          "Cannot start a HubConnection that is not in the 'Disconnected' state.",
        ),
      );
    ((this._connectionState = G.Connecting),
      this._logger.log(y.Debug, "Starting HubConnection."));
    try {
      (await this._startInternal(),
        J.isBrowser &&
          window.document.addEventListener("freeze", this._freezeEventListener),
        (this._connectionState = G.Connected),
        (this._connectionStarted = !0),
        this._logger.log(y.Debug, "HubConnection connected successfully."));
    } catch (t) {
      return (
        (this._connectionState = G.Disconnected),
        this._logger.log(
          y.Debug,
          `HubConnection failed to start successfully because of error '${t}'.`,
        ),
        Promise.reject(t)
      );
    }
  }
  async _startInternal() {
    ((this._stopDuringStartError = void 0),
      (this._receivedHandshakeResponse = !1));
    const t = new Promise((n, r) => {
      ((this._handshakeResolver = n), (this._handshakeRejecter = r));
    });
    await this.connection.start(this._protocol.transferFormat);
    try {
      let n = this._protocol.version;
      this.connection.features.reconnect || (n = 1);
      const r = { protocol: this._protocol.name, version: n };
      if (
        (this._logger.log(y.Debug, "Sending handshake request."),
        await this._sendMessage(
          this._handshakeProtocol.writeHandshakeRequest(r),
        ),
        this._logger.log(
          y.Information,
          `Using HubProtocol '${this._protocol.name}'.`,
        ),
        this._cleanupTimeout(),
        this._resetTimeoutPeriod(),
        this._resetKeepAliveInterval(),
        await t,
        this._stopDuringStartError)
      )
        throw this._stopDuringStartError;
      ((this.connection.features.reconnect || !1) &&
        ((this._messageBuffer = new Tp(
          this._protocol,
          this.connection,
          this._statefulReconnectBufferSize,
        )),
        (this.connection.features.disconnected =
          this._messageBuffer._disconnected.bind(this._messageBuffer)),
        (this.connection.features.resend = () => {
          if (this._messageBuffer) return this._messageBuffer._resend();
        })),
        this.connection.features.inherentKeepAlive ||
          (await this._sendMessage(this._cachedPingMessage)));
    } catch (n) {
      throw (
        this._logger.log(
          y.Debug,
          `Hub handshake failed with error '${n}' during start(). Stopping HubConnection.`,
        ),
        this._cleanupTimeout(),
        this._cleanupPingTimer(),
        await this.connection.stop(n),
        n
      );
    }
  }
  async stop() {
    const t = this._startPromise;
    ((this.connection.features.reconnect = !1),
      (this._stopPromise = this._stopInternal()),
      await this._stopPromise);
    try {
      await t;
    } catch {}
  }
  _stopInternal(t) {
    if (this._connectionState === G.Disconnected)
      return (
        this._logger.log(
          y.Debug,
          `Call to HubConnection.stop(${t}) ignored because it is already in the disconnected state.`,
        ),
        Promise.resolve()
      );
    if (this._connectionState === G.Disconnecting)
      return (
        this._logger.log(
          y.Debug,
          `Call to HttpConnection.stop(${t}) ignored because the connection is already in the disconnecting state.`,
        ),
        this._stopPromise
      );
    const n = this._connectionState;
    return (
      (this._connectionState = G.Disconnecting),
      this._logger.log(y.Debug, "Stopping HubConnection."),
      this._reconnectDelayHandle
        ? (this._logger.log(
            y.Debug,
            "Connection stopped during reconnect delay. Done reconnecting.",
          ),
          clearTimeout(this._reconnectDelayHandle),
          (this._reconnectDelayHandle = void 0),
          this._completeClose(),
          Promise.resolve())
        : (n === G.Connected && this._sendCloseMessage(),
          this._cleanupTimeout(),
          this._cleanupPingTimer(),
          (this._stopDuringStartError =
            t ||
            new Je(
              "The connection was stopped before the hub handshake could complete.",
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
      s = this._createStreamInvocation(t, n, o);
    let i;
    const l = new Np();
    return (
      (l.cancelCallback = () => {
        const a = this._createCancelInvocation(s.invocationId);
        return (
          delete this._callbacks[s.invocationId],
          i.then(() => this._sendWithProtocol(a))
        );
      }),
      (this._callbacks[s.invocationId] = (a, c) => {
        if (c) {
          l.error(c);
          return;
        } else
          a &&
            (a.type === $.Completion
              ? a.error
                ? l.error(new Error(a.error))
                : l.complete()
              : l.next(a.item));
      }),
      (i = this._sendWithProtocol(s).catch((a) => {
        (l.error(a), delete this._callbacks[s.invocationId]);
      })),
      this._launchStreams(r, i),
      l
    );
  }
  _sendMessage(t) {
    return (this._resetKeepAliveInterval(), this.connection.send(t));
  }
  _sendWithProtocol(t) {
    return this._messageBuffer
      ? this._messageBuffer._send(t)
      : this._sendMessage(this._protocol.writeMessage(t));
  }
  send(t, ...n) {
    const [r, o] = this._replaceStreamingParams(n),
      s = this._sendWithProtocol(this._createInvocation(t, n, !0, o));
    return (this._launchStreams(r, s), s);
  }
  invoke(t, ...n) {
    const [r, o] = this._replaceStreamingParams(n),
      s = this._createInvocation(t, n, !1, o);
    return new Promise((l, a) => {
      this._callbacks[s.invocationId] = (p, g) => {
        if (g) {
          a(g);
          return;
        } else
          p &&
            (p.type === $.Completion
              ? p.error
                ? a(new Error(p.error))
                : l(p.result)
              : a(new Error(`Unexpected message type: ${p.type}`)));
      };
      const c = this._sendWithProtocol(s).catch((p) => {
        (a(p), delete this._callbacks[s.invocationId]);
      });
      this._launchStreams(r, c);
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
            case $.Invocation:
              this._invokeClientMethod(r).catch((o) => {
                this._logger.log(
                  y.Error,
                  `Invoke client method threw error: ${js(o)}`,
                );
              });
              break;
            case $.StreamItem:
            case $.Completion: {
              const o = this._callbacks[r.invocationId];
              if (o) {
                r.type === $.Completion &&
                  delete this._callbacks[r.invocationId];
                try {
                  o(r);
                } catch (s) {
                  this._logger.log(
                    y.Error,
                    `Stream callback threw error: ${js(s)}`,
                  );
                }
              }
              break;
            }
            case $.Ping:
              break;
            case $.Close: {
              this._logger.log(
                y.Information,
                "Close message received from server.",
              );
              const o = r.error
                ? new Error("Server returned an error on close: " + r.error)
                : void 0;
              r.allowReconnect === !0
                ? this.connection.stop(o)
                : (this._stopPromise = this._stopInternal(o));
              break;
            }
            case $.Ack:
              this._messageBuffer && this._messageBuffer._ack(r);
              break;
            case $.Sequence:
              this._messageBuffer && this._messageBuffer._resetSequence(r);
              break;
            default:
              this._logger.log(y.Warning, `Invalid message type: ${r.type}.`);
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
      const s = "Error parsing handshake response: " + o;
      this._logger.log(y.Error, s);
      const i = new Error(s);
      throw (this._handshakeRejecter(i), i);
    }
    if (n.error) {
      const o = "Server returned handshake error: " + n.error;
      this._logger.log(y.Error, o);
      const s = new Error(o);
      throw (this._handshakeRejecter(s), s);
    } else this._logger.log(y.Debug, "Server handshake complete.");
    return (this._handshakeResolver(), r);
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
        this.serverTimeoutInMilliseconds,
      )),
      this._pingServerHandle === void 0)
    ) {
      let t = this._nextKeepAlive - new Date().getTime();
      (t < 0 && (t = 0),
        (this._pingServerHandle = setTimeout(async () => {
          if (this._connectionState === G.Connected)
            try {
              await this._sendMessage(this._cachedPingMessage);
            } catch {
              this._cleanupPingTimer();
            }
        }, t)));
    }
  }
  serverTimeout() {
    this.connection.stop(
      new Error(
        "Server timeout elapsed without receiving a message from the server.",
      ),
    );
  }
  async _invokeClientMethod(t) {
    const n = t.target.toLowerCase(),
      r = this._methods[n];
    if (!r) {
      (this._logger.log(
        y.Warning,
        `No client method with the name '${n}' found.`,
      ),
        t.invocationId &&
          (this._logger.log(
            y.Warning,
            `No result given for '${n}' method and invocation ID '${t.invocationId}'.`,
          ),
          await this._sendWithProtocol(
            this._createCompletionMessage(
              t.invocationId,
              "Client didn't provide a result.",
              null,
            ),
          )));
      return;
    }
    const o = r.slice(),
      s = !!t.invocationId;
    let i, l, a;
    for (const c of o)
      try {
        const p = i;
        ((i = await c.apply(this, t.arguments)),
          s &&
            i &&
            p &&
            (this._logger.log(
              y.Error,
              `Multiple results provided for '${n}'. Sending error to server.`,
            ),
            (a = this._createCompletionMessage(
              t.invocationId,
              "Client provided multiple results.",
              null,
            ))),
          (l = void 0));
      } catch (p) {
        ((l = p),
          this._logger.log(
            y.Error,
            `A callback for the method '${n}' threw error '${p}'.`,
          ));
      }
    a
      ? await this._sendWithProtocol(a)
      : s
        ? (l
            ? (a = this._createCompletionMessage(t.invocationId, `${l}`, null))
            : i !== void 0
              ? (a = this._createCompletionMessage(t.invocationId, null, i))
              : (this._logger.log(
                  y.Warning,
                  `No result given for '${n}' method and invocation ID '${t.invocationId}'.`,
                ),
                (a = this._createCompletionMessage(
                  t.invocationId,
                  "Client didn't provide a result.",
                  null,
                ))),
          await this._sendWithProtocol(a))
        : i &&
          this._logger.log(
            y.Error,
            `Result given for '${n}' method but server is not expecting a result.`,
          );
  }
  _connectionClosed(t) {
    (this._logger.log(
      y.Debug,
      `HubConnection.connectionClosed(${t}) called while in state ${this._connectionState}.`,
    ),
      (this._stopDuringStartError =
        this._stopDuringStartError ||
        t ||
        new Je(
          "The underlying connection was closed before the hub handshake could complete.",
        )),
      this._handshakeResolver && this._handshakeResolver(),
      this._cancelCallbacksWithError(
        t ||
          new Error(
            "Invocation canceled due to the underlying connection being closed.",
          ),
      ),
      this._cleanupTimeout(),
      this._cleanupPingTimer(),
      this._connectionState === G.Disconnecting
        ? this._completeClose(t)
        : this._connectionState === G.Connected && this._reconnectPolicy
          ? this._reconnect(t)
          : this._connectionState === G.Connected && this._completeClose(t));
  }
  _completeClose(t) {
    if (this._connectionStarted) {
      ((this._connectionState = G.Disconnected),
        (this._connectionStarted = !1),
        this._messageBuffer &&
          (this._messageBuffer._dispose(t ?? new Error("Connection closed.")),
          (this._messageBuffer = void 0)),
        J.isBrowser &&
          window.document.removeEventListener(
            "freeze",
            this._freezeEventListener,
          ));
      try {
        this._closedCallbacks.forEach((n) => n.apply(this, [t]));
      } catch (n) {
        this._logger.log(
          y.Error,
          `An onclose callback called with error '${t}' threw error '${n}'.`,
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
      s = this._getNextRetryDelay(r++, 0, o);
    if (s === null) {
      (this._logger.log(
        y.Debug,
        "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt.",
      ),
        this._completeClose(t));
      return;
    }
    if (
      ((this._connectionState = G.Reconnecting),
      t
        ? this._logger.log(
            y.Information,
            `Connection reconnecting because of error '${t}'.`,
          )
        : this._logger.log(y.Information, "Connection reconnecting."),
      this._reconnectingCallbacks.length !== 0)
    ) {
      try {
        this._reconnectingCallbacks.forEach((i) => i.apply(this, [t]));
      } catch (i) {
        this._logger.log(
          y.Error,
          `An onreconnecting callback called with error '${t}' threw error '${i}'.`,
        );
      }
      if (this._connectionState !== G.Reconnecting) {
        this._logger.log(
          y.Debug,
          "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.",
        );
        return;
      }
    }
    for (; s !== null; ) {
      if (
        (this._logger.log(
          y.Information,
          `Reconnect attempt number ${r} will start in ${s} ms.`,
        ),
        await new Promise((i) => {
          this._reconnectDelayHandle = setTimeout(i, s);
        }),
        (this._reconnectDelayHandle = void 0),
        this._connectionState !== G.Reconnecting)
      ) {
        this._logger.log(
          y.Debug,
          "Connection left the reconnecting state during reconnect delay. Done reconnecting.",
        );
        return;
      }
      try {
        if (
          (await this._startInternal(),
          (this._connectionState = G.Connected),
          this._logger.log(
            y.Information,
            "HubConnection reconnected successfully.",
          ),
          this._reconnectedCallbacks.length !== 0)
        )
          try {
            this._reconnectedCallbacks.forEach((i) =>
              i.apply(this, [this.connection.connectionId]),
            );
          } catch (i) {
            this._logger.log(
              y.Error,
              `An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${i}'.`,
            );
          }
        return;
      } catch (i) {
        if (
          (this._logger.log(
            y.Information,
            `Reconnect attempt failed because of error '${i}'.`,
          ),
          this._connectionState !== G.Reconnecting)
        ) {
          (this._logger.log(
            y.Debug,
            `Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`,
          ),
            this._connectionState === G.Disconnecting && this._completeClose());
          return;
        }
        ((o = i instanceof Error ? i : new Error(i.toString())),
          (s = this._getNextRetryDelay(r++, Date.now() - n, o)));
      }
    }
    (this._logger.log(
      y.Information,
      `Reconnect retries have been exhausted after ${Date.now() - n} ms and ${r} failed attempts. Connection disconnecting.`,
    ),
      this._completeClose());
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
          y.Error,
          `IRetryPolicy.nextRetryDelayInMilliseconds(${t}, ${n}) threw error '${o}'.`,
        ),
        null
      );
    }
  }
  _cancelCallbacksWithError(t) {
    const n = this._callbacks;
    ((this._callbacks = {}),
      Object.keys(n).forEach((r) => {
        const o = n[r];
        try {
          o(null, t);
        } catch (s) {
          this._logger.log(
            y.Error,
            `Stream 'error' callback called with '${t}' threw error: ${js(s)}`,
          );
        }
      }));
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
        ? { arguments: n, streamIds: o, target: t, type: $.Invocation }
        : { arguments: n, target: t, type: $.Invocation };
    {
      const s = this._invocationId;
      return (
        this._invocationId++,
        o.length !== 0
          ? {
              arguments: n,
              invocationId: s.toString(),
              streamIds: o,
              target: t,
              type: $.Invocation,
            }
          : {
              arguments: n,
              invocationId: s.toString(),
              target: t,
              type: $.Invocation,
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
              this._sendWithProtocol(this._createCompletionMessage(r)),
            );
          },
          error: (o) => {
            let s;
            (o instanceof Error
              ? (s = o.message)
              : o && o.toString
                ? (s = o.toString())
                : (s = "Unknown error"),
              (n = n.then(() =>
                this._sendWithProtocol(this._createCompletionMessage(r, s)),
              )));
          },
          next: (o) => {
            n = n.then(() =>
              this._sendWithProtocol(this._createStreamItemMessage(r, o)),
            );
          },
        });
    }
  }
  _replaceStreamingParams(t) {
    const n = [],
      r = [];
    for (let o = 0; o < t.length; o++) {
      const s = t[o];
      if (this._isObservable(s)) {
        const i = this._invocationId;
        (this._invocationId++,
          (n[i] = s),
          r.push(i.toString()),
          t.splice(o, 1));
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
            arguments: n,
            invocationId: o.toString(),
            streamIds: r,
            target: t,
            type: $.StreamInvocation,
          }
        : {
            arguments: n,
            invocationId: o.toString(),
            target: t,
            type: $.StreamInvocation,
          }
    );
  }
  _createCancelInvocation(t) {
    return { invocationId: t, type: $.CancelInvocation };
  }
  _createStreamItemMessage(t, n) {
    return { invocationId: t, item: n, type: $.StreamItem };
  }
  _createCompletionMessage(t, n, r) {
    return n
      ? { error: n, invocationId: t, type: $.Completion }
      : { invocationId: t, result: r, type: $.Completion };
  }
  _createCloseMessage() {
    return { type: $.Close };
  }
}
const Dp = [0, 2e3, 1e4, 3e4, null];
class $a {
  constructor(t) {
    this._retryDelays = t !== void 0 ? [...t, null] : Dp;
  }
  nextRetryDelayInMilliseconds(t) {
    return this._retryDelays[t.previousRetryCount];
  }
}
class Jt {}
Jt.Authorization = "Authorization";
Jt.Cookie = "Cookie";
class Mp extends Zo {
  constructor(t, n) {
    (super(), (this._innerClient = t), (this._accessTokenFactory = n));
  }
  async send(t) {
    let n = !0;
    (this._accessTokenFactory &&
      (!this._accessToken || (t.url && t.url.indexOf("/negotiate?") > 0)) &&
      ((n = !1), (this._accessToken = await this._accessTokenFactory())),
      this._setAuthorizationHeader(t));
    const r = await this._innerClient.send(t);
    return n && r.statusCode === 401 && this._accessTokenFactory
      ? ((this._accessToken = await this._accessTokenFactory()),
        this._setAuthorizationHeader(t),
        await this._innerClient.send(t))
      : r;
  }
  _setAuthorizationHeader(t) {
    (t.headers || (t.headers = {}),
      this._accessToken
        ? (t.headers[Jt.Authorization] = `Bearer ${this._accessToken}`)
        : this._accessTokenFactory &&
          t.headers[Jt.Authorization] &&
          delete t.headers[Jt.Authorization]);
  }
  getCookieString(t) {
    return this._innerClient.getCookieString(t);
  }
}
var ae;
(function (e) {
  ((e[(e.None = 0)] = "None"),
    (e[(e.WebSockets = 1)] = "WebSockets"),
    (e[(e.ServerSentEvents = 2)] = "ServerSentEvents"),
    (e[(e.LongPolling = 4)] = "LongPolling"));
})(ae || (ae = {}));
var xe;
(function (e) {
  ((e[(e.Text = 1)] = "Text"), (e[(e.Binary = 2)] = "Binary"));
})(xe || (xe = {}));
let Lp = class {
  constructor() {
    ((this._isAborted = !1), (this.onabort = null));
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
class Oa {
  get pollAborted() {
    return this._pollAbort.aborted;
  }
  constructor(t, n, r) {
    ((this._httpClient = t),
      (this._logger = n),
      (this._pollAbort = new Lp()),
      (this._options = r),
      (this._running = !1),
      (this.onreceive = null),
      (this.onclose = null));
  }
  async connect(t, n) {
    if (
      (se.isRequired(t, "url"),
      se.isRequired(n, "transferFormat"),
      se.isIn(n, xe, "transferFormat"),
      (this._url = t),
      this._logger.log(y.Trace, "(LongPolling transport) Connecting."),
      n === xe.Binary &&
        typeof XMLHttpRequest < "u" &&
        typeof new XMLHttpRequest().responseType != "string")
    )
      throw new Error(
        "Binary protocols over XmlHttpRequest not implementing advanced features are not supported.",
      );
    const [r, o] = $n(),
      s = { [r]: o, ...this._options.headers },
      i = {
        abortSignal: this._pollAbort.signal,
        headers: s,
        timeout: 1e5,
        withCredentials: this._options.withCredentials,
      };
    n === xe.Binary && (i.responseType = "arraybuffer");
    const l = `${t}&_=${Date.now()}`;
    this._logger.log(y.Trace, `(LongPolling transport) polling: ${l}.`);
    const a = await this._httpClient.get(l, i);
    (a.statusCode !== 200
      ? (this._logger.log(
          y.Error,
          `(LongPolling transport) Unexpected response code: ${a.statusCode}.`,
        ),
        (this._closeError = new Yt(a.statusText || "", a.statusCode)),
        (this._running = !1))
      : (this._running = !0),
      (this._receiving = this._poll(this._url, i)));
  }
  async _poll(t, n) {
    try {
      for (; this._running; )
        try {
          const r = `${t}&_=${Date.now()}`;
          this._logger.log(y.Trace, `(LongPolling transport) polling: ${r}.`);
          const o = await this._httpClient.get(r, n);
          o.statusCode === 204
            ? (this._logger.log(
                y.Information,
                "(LongPolling transport) Poll terminated by server.",
              ),
              (this._running = !1))
            : o.statusCode !== 200
              ? (this._logger.log(
                  y.Error,
                  `(LongPolling transport) Unexpected response code: ${o.statusCode}.`,
                ),
                (this._closeError = new Yt(o.statusText || "", o.statusCode)),
                (this._running = !1))
              : o.content
                ? (this._logger.log(
                    y.Trace,
                    `(LongPolling transport) data received. ${Tr(o.content, this._options.logMessageContent)}.`,
                  ),
                  this.onreceive && this.onreceive(o.content))
                : this._logger.log(
                    y.Trace,
                    "(LongPolling transport) Poll timed out, reissuing.",
                  );
        } catch (r) {
          this._running
            ? r instanceof _l
              ? this._logger.log(
                  y.Trace,
                  "(LongPolling transport) Poll timed out, reissuing.",
                )
              : ((this._closeError = r), (this._running = !1))
            : this._logger.log(
                y.Trace,
                `(LongPolling transport) Poll errored after shutdown: ${r.message}`,
              );
        }
    } finally {
      (this._logger.log(y.Trace, "(LongPolling transport) Polling complete."),
        this.pollAborted || this._raiseOnClose());
    }
  }
  async send(t) {
    return this._running
      ? od(
          this._logger,
          "LongPolling",
          this._httpClient,
          this._url,
          t,
          this._options,
        )
      : Promise.reject(
          new Error("Cannot send until the transport is connected"),
        );
  }
  async stop() {
    (this._logger.log(y.Trace, "(LongPolling transport) Stopping polling."),
      (this._running = !1),
      this._pollAbort.abort());
    try {
      (await this._receiving,
        this._logger.log(
          y.Trace,
          `(LongPolling transport) sending DELETE request to ${this._url}.`,
        ));
      const t = {},
        [n, r] = $n();
      t[n] = r;
      const o = {
        headers: { ...t, ...this._options.headers },
        timeout: this._options.timeout,
        withCredentials: this._options.withCredentials,
      };
      let s;
      try {
        await this._httpClient.delete(this._url, o);
      } catch (i) {
        s = i;
      }
      s
        ? s instanceof Yt &&
          (s.statusCode === 404
            ? this._logger.log(
                y.Trace,
                "(LongPolling transport) A 404 response was returned from sending a DELETE request.",
              )
            : this._logger.log(
                y.Trace,
                `(LongPolling transport) Error sending a DELETE request: ${s}`,
              ))
        : this._logger.log(
            y.Trace,
            "(LongPolling transport) DELETE request accepted.",
          );
    } finally {
      (this._logger.log(y.Trace, "(LongPolling transport) Stop finished."),
        this._raiseOnClose());
    }
  }
  _raiseOnClose() {
    if (this.onclose) {
      let t = "(LongPolling transport) Firing onclose event.";
      (this._closeError && (t += " Error: " + this._closeError),
        this._logger.log(y.Trace, t),
        this.onclose(this._closeError));
    }
  }
}
class Rp {
  constructor(t, n, r, o) {
    ((this._httpClient = t),
      (this._accessToken = n),
      (this._logger = r),
      (this._options = o),
      (this.onreceive = null),
      (this.onclose = null));
  }
  async connect(t, n) {
    return (
      se.isRequired(t, "url"),
      se.isRequired(n, "transferFormat"),
      se.isIn(n, xe, "transferFormat"),
      this._logger.log(y.Trace, "(SSE transport) Connecting."),
      (this._url = t),
      this._accessToken &&
        (t +=
          (t.indexOf("?") < 0 ? "?" : "&") +
          `access_token=${encodeURIComponent(this._accessToken)}`),
      new Promise((r, o) => {
        let s = !1;
        if (n !== xe.Text) {
          o(
            new Error(
              "The Server-Sent Events transport only supports the 'Text' transfer format",
            ),
          );
          return;
        }
        let i;
        if (J.isBrowser || J.isWebWorker)
          i = new this._options.EventSource(t, {
            withCredentials: this._options.withCredentials,
          });
        else {
          const l = this._httpClient.getCookieString(t),
            a = {};
          a.Cookie = l;
          const [c, p] = $n();
          ((a[c] = p),
            (i = new this._options.EventSource(t, {
              withCredentials: this._options.withCredentials,
              headers: { ...a, ...this._options.headers },
            })));
        }
        try {
          ((i.onmessage = (l) => {
            if (this.onreceive)
              try {
                (this._logger.log(
                  y.Trace,
                  `(SSE transport) data received. ${Tr(l.data, this._options.logMessageContent)}.`,
                ),
                  this.onreceive(l.data));
              } catch (a) {
                this._close(a);
                return;
              }
          }),
            (i.onerror = (l) => {
              s
                ? this._close()
                : o(
                    new Error(
                      "EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled.",
                    ),
                  );
            }),
            (i.onopen = () => {
              (this._logger.log(y.Information, `SSE connected to ${this._url}`),
                (this._eventSource = i),
                (s = !0),
                r());
            }));
        } catch (l) {
          o(l);
          return;
        }
      })
    );
  }
  async send(t) {
    return this._eventSource
      ? od(this._logger, "SSE", this._httpClient, this._url, t, this._options)
      : Promise.reject(
          new Error("Cannot send until the transport is connected"),
        );
  }
  stop() {
    return (this._close(), Promise.resolve());
  }
  _close(t) {
    this._eventSource &&
      (this._eventSource.close(),
      (this._eventSource = void 0),
      this.onclose && this.onclose(t));
  }
}
class $p {
  constructor(t, n, r, o, s, i) {
    ((this._logger = r),
      (this._accessTokenFactory = n),
      (this._logMessageContent = o),
      (this._webSocketConstructor = s),
      (this._httpClient = t),
      (this.onreceive = null),
      (this.onclose = null),
      (this._headers = i));
  }
  async connect(t, n) {
    (se.isRequired(t, "url"),
      se.isRequired(n, "transferFormat"),
      se.isIn(n, xe, "transferFormat"),
      this._logger.log(y.Trace, "(WebSockets transport) Connecting."));
    let r;
    return (
      this._accessTokenFactory && (r = await this._accessTokenFactory()),
      new Promise((o, s) => {
        t = t.replace(/^http/, "ws");
        let i;
        const l = this._httpClient.getCookieString(t);
        let a = !1;
        if (J.isNode || J.isReactNative) {
          const c = {},
            [p, g] = $n();
          ((c[p] = g),
            r && (c[Jt.Authorization] = `Bearer ${r}`),
            l && (c[Jt.Cookie] = l),
            (i = new this._webSocketConstructor(t, void 0, {
              headers: { ...c, ...this._headers },
            })));
        } else
          r &&
            (t +=
              (t.indexOf("?") < 0 ? "?" : "&") +
              `access_token=${encodeURIComponent(r)}`);
        (i || (i = new this._webSocketConstructor(t)),
          n === xe.Binary && (i.binaryType = "arraybuffer"),
          (i.onopen = (c) => {
            (this._logger.log(y.Information, `WebSocket connected to ${t}.`),
              (this._webSocket = i),
              (a = !0),
              o());
          }),
          (i.onerror = (c) => {
            let p = null;
            (typeof ErrorEvent < "u" && c instanceof ErrorEvent
              ? (p = c.error)
              : (p = "There was an error with the transport"),
              this._logger.log(y.Information, `(WebSockets transport) ${p}.`));
          }),
          (i.onmessage = (c) => {
            if (
              (this._logger.log(
                y.Trace,
                `(WebSockets transport) data received. ${Tr(c.data, this._logMessageContent)}.`,
              ),
              this.onreceive)
            )
              try {
                this.onreceive(c.data);
              } catch (p) {
                this._close(p);
                return;
              }
          }),
          (i.onclose = (c) => {
            if (a) this._close(c);
            else {
              let p = null;
              (typeof ErrorEvent < "u" && c instanceof ErrorEvent
                ? (p = c.error)
                : (p =
                    "WebSocket failed to connect. The connection could not be found on the server, either the endpoint may not be a SignalR endpoint, the connection ID is not present on the server, or there is a proxy blocking WebSockets. If you have multiple servers check that sticky sessions are enabled."),
                s(new Error(p)));
            }
          }));
      })
    );
  }
  send(t) {
    return this._webSocket &&
      this._webSocket.readyState === this._webSocketConstructor.OPEN
      ? (this._logger.log(
          y.Trace,
          `(WebSockets transport) sending data. ${Tr(t, this._logMessageContent)}.`,
        ),
        this._webSocket.send(t),
        Promise.resolve())
      : Promise.reject("WebSocket is not in the OPEN state");
  }
  stop() {
    return (this._webSocket && this._close(void 0), Promise.resolve());
  }
  _close(t) {
    (this._webSocket &&
      ((this._webSocket.onclose = () => {}),
      (this._webSocket.onmessage = () => {}),
      (this._webSocket.onerror = () => {}),
      this._webSocket.close(),
      (this._webSocket = void 0)),
      this._logger.log(y.Trace, "(WebSockets transport) socket closed."),
      this.onclose &&
        (this._isCloseEvent(t) && (t.wasClean === !1 || t.code !== 1e3)
          ? this.onclose(
              new Error(
                `WebSocket closed with status code: ${t.code} (${t.reason || "no reason given"}).`,
              ),
            )
          : t instanceof Error
            ? this.onclose(t)
            : this.onclose()));
  }
  _isCloseEvent(t) {
    return t && typeof t.wasClean == "boolean" && typeof t.code == "number";
  }
}
const Fa = 100;
class Op {
  constructor(t, n = {}) {
    if (
      ((this._stopPromiseResolver = () => {}),
      (this.features = {}),
      (this._negotiateVersion = 1),
      se.isRequired(t, "url"),
      (this._logger = mp(n.logger)),
      (this.baseUrl = this._resolveUrl(t)),
      (n = n || {}),
      (n.logMessageContent =
        n.logMessageContent === void 0 ? !1 : n.logMessageContent),
      typeof n.withCredentials == "boolean" || n.withCredentials === void 0)
    )
      n.withCredentials = n.withCredentials === void 0 ? !0 : n.withCredentials;
    else
      throw new Error(
        "withCredentials option was not a 'boolean' or 'undefined' value",
      );
    n.timeout = n.timeout === void 0 ? 100 * 1e3 : n.timeout;
    let r = null,
      o = null;
    if (J.isNode && typeof require < "u") {
      const s =
        typeof __webpack_require__ == "function"
          ? __non_webpack_require__
          : require;
      ((r = s("ws")), (o = s("eventsource")));
    }
    (!J.isNode && typeof WebSocket < "u" && !n.WebSocket
      ? (n.WebSocket = WebSocket)
      : J.isNode && !n.WebSocket && r && (n.WebSocket = r),
      !J.isNode && typeof EventSource < "u" && !n.EventSource
        ? (n.EventSource = EventSource)
        : J.isNode && !n.EventSource && typeof o < "u" && (n.EventSource = o),
      (this._httpClient = new Mp(
        n.httpClient || new Cp(this._logger),
        n.accessTokenFactory,
      )),
      (this._connectionState = "Disconnected"),
      (this._connectionStarted = !1),
      (this._options = n),
      (this.onreceive = null),
      (this.onclose = null));
  }
  async start(t) {
    if (
      ((t = t || xe.Binary),
      se.isIn(t, xe, "transferFormat"),
      this._logger.log(
        y.Debug,
        `Starting connection with transfer format '${xe[t]}'.`,
      ),
      this._connectionState !== "Disconnected")
    )
      return Promise.reject(
        new Error(
          "Cannot start an HttpConnection that is not in the 'Disconnected' state.",
        ),
      );
    if (
      ((this._connectionState = "Connecting"),
      (this._startInternalPromise = this._startInternal(t)),
      await this._startInternalPromise,
      this._connectionState === "Disconnecting")
    ) {
      const n = "Failed to start the HttpConnection before stop() was called.";
      return (
        this._logger.log(y.Error, n),
        await this._stopPromise,
        Promise.reject(new Je(n))
      );
    } else if (this._connectionState !== "Connected") {
      const n =
        "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
      return (this._logger.log(y.Error, n), Promise.reject(new Je(n)));
    }
    this._connectionStarted = !0;
  }
  send(t) {
    return this._connectionState !== "Connected"
      ? Promise.reject(
          new Error(
            "Cannot send data if the connection is not in the 'Connected' State.",
          ),
        )
      : (this._sendQueue || (this._sendQueue = new Sl(this.transport)),
        this._sendQueue.send(t));
  }
  async stop(t) {
    if (this._connectionState === "Disconnected")
      return (
        this._logger.log(
          y.Debug,
          `Call to HttpConnection.stop(${t}) ignored because the connection is already in the disconnected state.`,
        ),
        Promise.resolve()
      );
    if (this._connectionState === "Disconnecting")
      return (
        this._logger.log(
          y.Debug,
          `Call to HttpConnection.stop(${t}) ignored because the connection is already in the disconnecting state.`,
        ),
        this._stopPromise
      );
    ((this._connectionState = "Disconnecting"),
      (this._stopPromise = new Promise((n) => {
        this._stopPromiseResolver = n;
      })),
      await this._stopInternal(t),
      await this._stopPromise);
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
        (this._logger.log(
          y.Error,
          `HttpConnection.transport.stop() threw error '${n}'.`,
        ),
          this._stopConnection());
      }
      this.transport = void 0;
    } else
      this._logger.log(
        y.Debug,
        "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.",
      );
  }
  async _startInternal(t) {
    let n = this.baseUrl;
    ((this._accessTokenFactory = this._options.accessTokenFactory),
      (this._httpClient._accessTokenFactory = this._accessTokenFactory));
    try {
      if (this._options.skipNegotiation)
        if (this._options.transport === ae.WebSockets)
          ((this.transport = this._constructTransport(ae.WebSockets)),
            await this._startTransport(n, t));
        else
          throw new Error(
            "Negotiation can only be skipped when using the WebSocket transport directly.",
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
            throw new Je("The connection was stopped during negotiation.");
          if (r.error) throw new Error(r.error);
          if (r.ProtocolVersion)
            throw new Error(
              "Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.",
            );
          if ((r.url && (n = r.url), r.accessToken)) {
            const s = r.accessToken;
            ((this._accessTokenFactory = () => s),
              (this._httpClient._accessToken = s),
              (this._httpClient._accessTokenFactory = void 0));
          }
          o++;
        } while (r.url && o < Fa);
        if (o === Fa && r.url)
          throw new Error("Negotiate redirection limit exceeded.");
        await this._createTransport(n, this._options.transport, r, t);
      }
      (this.transport instanceof Oa && (this.features.inherentKeepAlive = !0),
        this._connectionState === "Connecting" &&
          (this._logger.log(
            y.Debug,
            "The HttpConnection connected successfully.",
          ),
          (this._connectionState = "Connected")));
    } catch (r) {
      return (
        this._logger.log(y.Error, "Failed to start the connection: " + r),
        (this._connectionState = "Disconnected"),
        (this.transport = void 0),
        this._stopPromiseResolver(),
        Promise.reject(r)
      );
    }
  }
  async _getNegotiationResponse(t) {
    const n = {},
      [r, o] = $n();
    n[r] = o;
    const s = this._resolveNegotiateUrl(t);
    this._logger.log(y.Debug, `Sending negotiation request: ${s}.`);
    try {
      const i = await this._httpClient.post(s, {
        content: "",
        headers: { ...n, ...this._options.headers },
        timeout: this._options.timeout,
        withCredentials: this._options.withCredentials,
      });
      if (i.statusCode !== 200)
        return Promise.reject(
          new Error(
            `Unexpected status code returned from negotiate '${i.statusCode}'`,
          ),
        );
      const l = JSON.parse(i.content);
      return (
        (!l.negotiateVersion || l.negotiateVersion < 1) &&
          (l.connectionToken = l.connectionId),
        l.useStatefulReconnect && this._options._useStatefulReconnect !== !0
          ? Promise.reject(
              new La(
                "Client didn't negotiate Stateful Reconnect but the server did.",
              ),
            )
          : l
      );
    } catch (i) {
      let l = "Failed to complete negotiation with the server: " + i;
      return (
        i instanceof Yt &&
          i.statusCode === 404 &&
          (l =
            l +
            " Either this is not a SignalR endpoint or there is a proxy blocking the connection."),
        this._logger.log(y.Error, l),
        Promise.reject(new La(l))
      );
    }
  }
  _createConnectUrl(t, n) {
    return n ? t + (t.indexOf("?") === -1 ? "?" : "&") + `id=${n}` : t;
  }
  async _createTransport(t, n, r, o) {
    let s = this._createConnectUrl(t, r.connectionToken);
    if (this._isITransport(n)) {
      (this._logger.log(
        y.Debug,
        "Connection was provided an instance of ITransport, using that directly.",
      ),
        (this.transport = n),
        await this._startTransport(s, o),
        (this.connectionId = r.connectionId));
      return;
    }
    const i = [],
      l = r.availableTransports || [];
    let a = r;
    for (const c of l) {
      const p = this._resolveTransportOrError(
        c,
        n,
        o,
        (a == null ? void 0 : a.useStatefulReconnect) === !0,
      );
      if (p instanceof Error) (i.push(`${c.transport} failed:`), i.push(p));
      else if (this._isITransport(p)) {
        if (((this.transport = p), !a)) {
          try {
            a = await this._getNegotiationResponse(t);
          } catch (g) {
            return Promise.reject(g);
          }
          s = this._createConnectUrl(t, a.connectionToken);
        }
        try {
          (await this._startTransport(s, o),
            (this.connectionId = a.connectionId));
          return;
        } catch (g) {
          if (
            (this._logger.log(
              y.Error,
              `Failed to start the transport '${c.transport}': ${g}`,
            ),
            (a = void 0),
            i.push(new dp(`${c.transport} failed: ${g}`, ae[c.transport])),
            this._connectionState !== "Connecting")
          ) {
            const m = "Failed to select transport before stop() was called.";
            return (this._logger.log(y.Debug, m), Promise.reject(new Je(m)));
          }
        }
      }
    }
    return i.length > 0
      ? Promise.reject(
          new fp(
            `Unable to connect to the server with any of the available transports. ${i.join(" ")}`,
            i,
          ),
        )
      : Promise.reject(
          new Error(
            "None of the transports supported by the client are supported by the server.",
          ),
        );
  }
  _constructTransport(t) {
    switch (t) {
      case ae.WebSockets:
        if (!this._options.WebSocket)
          throw new Error("'WebSocket' is not supported in your environment.");
        return new $p(
          this._httpClient,
          this._accessTokenFactory,
          this._logger,
          this._options.logMessageContent,
          this._options.WebSocket,
          this._options.headers || {},
        );
      case ae.ServerSentEvents:
        if (!this._options.EventSource)
          throw new Error(
            "'EventSource' is not supported in your environment.",
          );
        return new Rp(
          this._httpClient,
          this._httpClient._accessToken,
          this._logger,
          this._options,
        );
      case ae.LongPolling:
        return new Oa(this._httpClient, this._logger, this._options);
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
                (this.features.disconnected(),
                  await this.transport.connect(t, n),
                  await this.features.resend());
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
    const s = ae[t.transport];
    if (s == null)
      return (
        this._logger.log(
          y.Debug,
          `Skipping transport '${t.transport}' because it is not supported by this client.`,
        ),
        new Error(
          `Skipping transport '${t.transport}' because it is not supported by this client.`,
        )
      );
    if (Fp(n, s))
      if (t.transferFormats.map((l) => xe[l]).indexOf(r) >= 0) {
        if (
          (s === ae.WebSockets && !this._options.WebSocket) ||
          (s === ae.ServerSentEvents && !this._options.EventSource)
        )
          return (
            this._logger.log(
              y.Debug,
              `Skipping transport '${ae[s]}' because it is not supported in your environment.'`,
            ),
            new up(`'${ae[s]}' is not supported in your environment.`, s)
          );
        this._logger.log(y.Debug, `Selecting transport '${ae[s]}'.`);
        try {
          return (
            (this.features.reconnect = s === ae.WebSockets ? o : void 0),
            this._constructTransport(s)
          );
        } catch (l) {
          return l;
        }
      } else
        return (
          this._logger.log(
            y.Debug,
            `Skipping transport '${ae[s]}' because it does not support the requested transfer format '${xe[r]}'.`,
          ),
          new Error(`'${ae[s]}' does not support ${xe[r]}.`)
        );
    else
      return (
        this._logger.log(
          y.Debug,
          `Skipping transport '${ae[s]}' because it was disabled by the client.`,
        ),
        new cp(`'${ae[s]}' is disabled by the client.`, s)
      );
  }
  _isITransport(t) {
    return t && typeof t == "object" && "connect" in t;
  }
  _stopConnection(t) {
    if (
      (this._logger.log(
        y.Debug,
        `HttpConnection.stopConnection(${t}) called while in state ${this._connectionState}.`,
      ),
      (this.transport = void 0),
      (t = this._stopError || t),
      (this._stopError = void 0),
      this._connectionState === "Disconnected")
    ) {
      this._logger.log(
        y.Debug,
        `Call to HttpConnection.stopConnection(${t}) was ignored because the connection is already in the disconnected state.`,
      );
      return;
    }
    if (this._connectionState === "Connecting")
      throw (
        this._logger.log(
          y.Warning,
          `Call to HttpConnection.stopConnection(${t}) was ignored because the connection is still in the connecting state.`,
        ),
        new Error(
          `HttpConnection.stopConnection(${t}) was called while the connection is still in the connecting state.`,
        )
      );
    if (
      (this._connectionState === "Disconnecting" && this._stopPromiseResolver(),
      t
        ? this._logger.log(
            y.Error,
            `Connection disconnected with error '${t}'.`,
          )
        : this._logger.log(y.Information, "Connection disconnected."),
      this._sendQueue &&
        (this._sendQueue.stop().catch((n) => {
          this._logger.log(
            y.Error,
            `TransportSendQueue.stop() threw error '${n}'.`,
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
          y.Error,
          `HttpConnection.onclose(${t}) threw error '${n}'.`,
        );
      }
    }
  }
  _resolveUrl(t) {
    if (t.lastIndexOf("https://", 0) === 0 || t.lastIndexOf("http://", 0) === 0)
      return t;
    if (!J.isBrowser) throw new Error(`Cannot resolve '${t}'.`);
    const n = window.document.createElement("a");
    return (
      (n.href = t),
      this._logger.log(y.Information, `Normalizing '${t}' to '${n.href}'.`),
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
function Fp(e, t) {
  return !e || (t & e) !== 0;
}
class Sl {
  constructor(t) {
    ((this._transport = t),
      (this._buffer = []),
      (this._executing = !0),
      (this._sendBufferedData = new Yr()),
      (this._transportResult = new Yr()),
      (this._sendLoopPromise = this._sendLoop()));
  }
  send(t) {
    return (
      this._bufferData(t),
      this._transportResult || (this._transportResult = new Yr()),
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
        `Expected data to be of type ${typeof this._buffer} but was of type ${typeof t}`,
      );
    (this._buffer.push(t), this._sendBufferedData.resolve());
  }
  async _sendLoop() {
    for (;;) {
      if ((await this._sendBufferedData.promise, !this._executing)) {
        this._transportResult &&
          this._transportResult.reject("Connection stopped.");
        break;
      }
      this._sendBufferedData = new Yr();
      const t = this._transportResult;
      this._transportResult = void 0;
      const n =
        typeof this._buffer[0] == "string"
          ? this._buffer.join("")
          : Sl._concatBuffers(this._buffer);
      this._buffer.length = 0;
      try {
        (await this._transport.send(n), t.resolve());
      } catch (r) {
        t.reject(r);
      }
    }
  }
  static _concatBuffers(t) {
    const n = t.map((s) => s.byteLength).reduce((s, i) => s + i),
      r = new Uint8Array(n);
    let o = 0;
    for (const s of t) (r.set(new Uint8Array(s), o), (o += s.byteLength));
    return r.buffer;
  }
}
class Yr {
  constructor() {
    this.promise = new Promise(
      (t, n) => ([this._resolver, this._rejecter] = [t, n]),
    );
  }
  resolve() {
    this._resolver();
  }
  reject(t) {
    this._rejecter(t);
  }
}
const zp = "json";
class Ap {
  constructor() {
    ((this.name = zp), (this.version = 2), (this.transferFormat = xe.Text));
  }
  parseMessages(t, n) {
    if (typeof t != "string")
      throw new Error(
        "Invalid input for JSON hub protocol. Expected a string.",
      );
    if (!t) return [];
    n === null && (n = Nr.instance);
    const r = Oe.parse(t),
      o = [];
    for (const s of r) {
      const i = JSON.parse(s);
      if (typeof i.type != "number") throw new Error("Invalid payload.");
      switch (i.type) {
        case $.Invocation:
          this._isInvocationMessage(i);
          break;
        case $.StreamItem:
          this._isStreamItemMessage(i);
          break;
        case $.Completion:
          this._isCompletionMessage(i);
          break;
        case $.Ping:
          break;
        case $.Close:
          break;
        case $.Ack:
          this._isAckMessage(i);
          break;
        case $.Sequence:
          this._isSequenceMessage(i);
          break;
        default:
          n.log(
            y.Information,
            "Unknown message type '" + i.type + "' ignored.",
          );
          continue;
      }
      o.push(i);
    }
    return o;
  }
  writeMessage(t) {
    return Oe.write(JSON.stringify(t));
  }
  _isInvocationMessage(t) {
    (this._assertNotEmptyString(
      t.target,
      "Invalid payload for Invocation message.",
    ),
      t.invocationId !== void 0 &&
        this._assertNotEmptyString(
          t.invocationId,
          "Invalid payload for Invocation message.",
        ));
  }
  _isStreamItemMessage(t) {
    if (
      (this._assertNotEmptyString(
        t.invocationId,
        "Invalid payload for StreamItem message.",
      ),
      t.item === void 0)
    )
      throw new Error("Invalid payload for StreamItem message.");
  }
  _isCompletionMessage(t) {
    if (t.result && t.error)
      throw new Error("Invalid payload for Completion message.");
    (!t.result &&
      t.error &&
      this._assertNotEmptyString(
        t.error,
        "Invalid payload for Completion message.",
      ),
      this._assertNotEmptyString(
        t.invocationId,
        "Invalid payload for Completion message.",
      ));
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
const Up = {
  trace: y.Trace,
  debug: y.Debug,
  info: y.Information,
  information: y.Information,
  warn: y.Warning,
  warning: y.Warning,
  error: y.Error,
  critical: y.Critical,
  none: y.None,
};
function Hp(e) {
  const t = Up[e.toLowerCase()];
  if (typeof t < "u") return t;
  throw new Error(`Unknown log level: ${e}`);
}
class Bp {
  configureLogging(t) {
    if ((se.isRequired(t, "logging"), Wp(t))) this.logger = t;
    else if (typeof t == "string") {
      const n = Hp(t);
      this.logger = new $o(n);
    } else this.logger = new $o(t);
    return this;
  }
  withUrl(t, n) {
    return (
      se.isRequired(t, "url"),
      se.isNotEmpty(t, "url"),
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
    return (se.isRequired(t, "protocol"), (this.protocol = t), this);
  }
  withAutomaticReconnect(t) {
    if (this.reconnectPolicy)
      throw new Error("A reconnectPolicy has already been set.");
    return (
      t
        ? Array.isArray(t)
          ? (this.reconnectPolicy = new $a(t))
          : (this.reconnectPolicy = t)
        : (this.reconnectPolicy = new $a()),
      this
    );
  }
  withServerTimeout(t) {
    return (
      se.isRequired(t, "milliseconds"),
      (this._serverTimeoutInMilliseconds = t),
      this
    );
  }
  withKeepAliveInterval(t) {
    return (
      se.isRequired(t, "milliseconds"),
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
        "The 'HubConnectionBuilder.withUrl' method must be called before building the connection.",
      );
    const n = new Op(this.url, t);
    return xl.create(
      n,
      this.logger || Nr.instance,
      this.protocol || new Ap(),
      this.reconnectPolicy,
      this._serverTimeoutInMilliseconds,
      this._keepAliveIntervalInMilliseconds,
      this._statefulReconnectBufferSize,
    );
  }
}
function Wp(e) {
  return e.log !== void 0;
}
const sd = N.createContext(void 0),
  Vp = ({ children: e }) => {
    const t = wl(),
      n = N.useRef(null),
      r = async () => {
        try {
          const i = [...(await fe.getInventoryList())].sort((a, c) => {
              const p = { 等待盤點: 0, 盤點中: 1, 鎖定: 2 };
              return (p[a.STATE] ?? 999) - (p[c.STATE] ?? 999);
            }),
            l = new CustomEvent("inventoryUpdated", { detail: { items: i } });
          return (document.dispatchEvent(l), i);
        } catch (s) {
          return (console.error("Failed to fetch inventory items:", s), []);
        }
      };
    N.useEffect(() => {
      if (t != null && t.domain) {
        const s = new Bp()
            .withUrl(`${t.domain}/chatHub`)
            .withAutomaticReconnect()
            .configureLogging(y.Warning)
            .build(),
          i = (a, c) => {
            const p = new CustomEvent("ReceivedEvent", {
              detail: { message: c },
            });
            (typeof window.ChathubReceivedEvent == "function" &&
              window.ChathubReceivedEvent(c),
              document.dispatchEvent(p));
          };
        s.on("ReceiveMessage", i);
        const l = async (a) => {
          const c = JSON.parse(a.detail.message);
          (console.log("message received", c),
            c &&
              [
                "creat_lock_by_IC_SN",
                "creat_unlock_by_IC_SN",
                "creat_delete_by_IC_SN",
                "creat_add",
                "excel_upload",
              ].includes(c.Method) &&
              (await r(), console.log("Inventory list updated")));
        };
        return (
          document.addEventListener("ReceivedEvent", l),
          s
            .start()
            .then(() => {
              (console.log("SignalR Connected"), (n.current = s), r());
            })
            .catch((a) => {
              (console.warn("SignalR Connection Error:", a), r());
            }),
          () => {
            (document.removeEventListener("ReceivedEvent", l),
              n.current && n.current.stop());
          }
        );
      }
    }, [t]);
    const o = async (s) => {
      if (!(t != null && t.domain)) {
        console.warn("Configuration not loaded, skipping SignalR message");
        return;
      }
      if (!s.Method) {
        console.warn("Method is required for SignalR message");
        return;
      }
      try {
        const i = {
          ...s,
          ServerName: s.ServerName || "",
          ServerType: s.ServerType || "網頁",
          TableName: s.TableName || "medicine_page_firstclass",
          TimeTaken: s.TimeTaken || "",
        };
        console.log("Sending message:", i);
        const l = await fetch(`${t.domain}/api/Message`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(i),
        });
        if (!l.ok) throw new Error(`HTTP error! status: ${l.status}`);
      } catch (i) {
        throw (console.error("Failed to send message:", i), i);
      }
    };
    return u.jsx(sd.Provider, {
      value: { connection: n.current, sendMessage: o, fetchInventoryItems: r },
      children: e,
    });
  },
  Qp = () => {
    const e = N.useContext(sd);
    if (!e) throw new Error("useSignalR must be used within a SignalRProvider");
    return e;
  },
  Kp = ({ language: e, onLanguageChange: t }) => {
    const [n, r] = N.useState(null);
    N.useEffect(() => {
      const s = sessionStorage.getItem("user_session");
      if (s) {
        const i = JSON.parse(s);
        r({ Name: i.Name || "", Employer: i.Employer || "" });
      }
    }, []);
    const o = () => {
      (sessionStorage.clear(), window.location.reload());
    };
    return u.jsx("nav", {
      className: "bg-transparent py-4 md:py-6 lg:py-8",
      children: u.jsx("div", {
        className: "mx-auto px-4 sm:px-6 lg:px-8",
        children: u.jsxs("div", {
          className: "flex justify-between items-center h-16",
          children: [
            u.jsxs("div", {
              className: "flex items-center space-x-4",
              children: [
                u.jsxs("a", {
                  href: "../frontpage",
                  className:
                    "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors",
                  children: [
                    u.jsx("span", { className: "sr-only", children: "Home" }),
                    u.jsx(Yh, { className: "w-7 h-7" }),
                  ],
                }),
                u.jsxs("div", {
                  children: [
                    u.jsx("h1", {
                      className:
                        "text-2xl md:text-3xl font-semibold text-gray-800 mb-2",
                      children: E("inventoryManagement", e),
                    }),
                    n &&
                      u.jsxs("p", {
                        className: "text-base text-gray-600",
                        children: [n.Name, " - ", n.Employer],
                      }),
                  ],
                }),
              ],
            }),
            u.jsxs("div", {
              className: "flex items-center space-x-4",
              children: [
                u.jsxs("button", {
                  onClick: t,
                  className:
                    "inline-flex items-center justify-center px-3 py-2 border border-gray-300 rounded-md text-base text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
                  children: [
                    u.jsx(Xh, { className: "h-5 w-5" }),
                    u.jsx("span", {
                      className: "ml-2 hidden sm:inline",
                      children: e === "en" ? "English" : "繁體中文",
                    }),
                  ],
                }),
                u.jsxs("button", {
                  onClick: o,
                  className:
                    "inline-flex items-center justify-center px-3 py-2 border border-gray-300 rounded-md text-base text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
                  children: [
                    u.jsx(Zh, { className: "h-5 w-5" }),
                    u.jsx("span", {
                      className: "ml-2 hidden sm:inline",
                      children: E("logout", e),
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
  Gp = ({ tabs: e, activeTab: t, language: n, onTabChange: r }) =>
    u.jsx("div", {
      className: "h-[40px] mb-2",
      children: u.jsx("div", {
        className: "mx-auto px-4 sm:px-6 lg:px-8",
        children: u.jsx("div", {
          className: "flex space-x-8 border-b border-gray-200",
          children: e.map((o) =>
            u.jsx(
              "a",
              {
                href: o.href,
                className: `
                px-4 py-2 text-base font-medium border-b-2 
                ${t === o.id ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}
              `,
                onClick: (s) => {
                  o.href || (s.preventDefault(), r(o.id));
                },
                children: E(o.name, n),
              },
              o.id,
            ),
          ),
        }),
      }),
    }),
  Ee = ({
    variant: e = "primary",
    icon: t,
    children: n,
    className: r = "",
    disabled: o,
    ...s
  }) => {
    const i =
        "inline-flex items-center px-4 py-2 border text-base font-medium rounded-md shadow-sm transition-all duration-200",
      l = {
        primary: "border-transparent text-white bg-blue-600 hover:bg-blue-700",
        secondary: "border-gray-300 text-gray-700 bg-white hover:bg-gray-50",
        danger: "border-red-300 text-white bg-red-600 hover:bg-red-700",
        pass: "border-green-300 text-white bg-green-600 hover:bg-green-700",
      };
    return u.jsxs("button", {
      className: `${i} ${o ? "opacity-50 cursor-not-allowed hover:bg-gray-400" : l[e]} ${r}`,
      disabled: o,
      ...s,
      children: [t && u.jsx(t, { className: "w-4 h-4 mr-2" }), n],
    });
  },
  qp = ({ isOpen: e, onClose: t, inventoryId: n, language: r }) => {
    const [o, s] = N.useState([]),
      [i, l] = N.useState(!1),
      [a, c] = N.useState("");
    N.useEffect(() => {
      e && n && g();
    }, [e, n]);
    const p = (m, w) => {
        if (!m || !w) return [];
        const _ = m.split(",").filter((d) => d.trim()),
          x = w.split(",").filter((d) => d.trim()),
          b = [],
          f = Math.max(_.length, x.length);
        for (let d = 0; d < f; d++)
          b.push({
            userId: _[d] || `User ${d + 1}`,
            userName: x[d] || "Unknown User",
          });
        return b;
      },
      g = async () => {
        try {
          (l(!0), c(""));
          const w = (await fe.getOnlineUsers()).find((_) => _.parameter === n);
          if (w && w.user_id && w.user_name) {
            const _ = p(w.user_id, w.user_name);
            s(_);
          } else s([]);
        } catch (m) {
          (console.error("Failed to fetch online users:", m),
            c(
              r === "en"
                ? "Failed to load user information"
                : "無法載入使用者資訊",
            ));
        } finally {
          l(!1);
        }
      };
    return e
      ? u.jsx("div", {
          className: "fixed inset-0 z-50 overflow-y-auto",
          children: u.jsxs("div", {
            className:
              "flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0",
            children: [
              u.jsx("div", {
                className:
                  "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                onClick: t,
              }),
              u.jsxs("div", {
                className:
                  "inline-block transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle",
                children: [
                  u.jsx("div", {
                    className: "absolute right-0 top-0 pr-4 pt-4",
                    children: u.jsx("button", {
                      onClick: t,
                      className: "text-gray-400 hover:text-gray-500",
                      children: u.jsx(An, { className: "h-6 w-6" }),
                    }),
                  }),
                  u.jsx("div", {
                    className: "sm:flex sm:items-start",
                    children: u.jsxs("div", {
                      className: "mt-3 w-full text-center sm:mt-0 sm:text-left",
                      children: [
                        u.jsxs("div", {
                          className: "flex items-center gap-3 mb-4",
                          children: [
                            u.jsx(Ci, { className: "w-6 h-6 text-blue-600" }),
                            u.jsx("h3", {
                              className:
                                "text-lg font-medium leading-6 text-gray-900",
                              children:
                                r === "en" ? "Online Users" : "線上使用者",
                            }),
                          ],
                        }),
                        u.jsx("div", {
                          className: "mb-4",
                          children: u.jsxs("p", {
                            className: "text-sm text-gray-600",
                            children: [
                              r === "en" ? "Inventory ID:" : "盤點單號:",
                              " ",
                              u.jsx("span", {
                                className: "font-medium",
                                children: n,
                              }),
                            ],
                          }),
                        }),
                        i
                          ? u.jsx("div", {
                              className:
                                "flex justify-center items-center py-8",
                              children: u.jsx("div", {
                                className:
                                  "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600",
                              }),
                            })
                          : a
                            ? u.jsx("div", {
                                className: "text-center py-8",
                                children: u.jsx("p", {
                                  className: "text-red-600",
                                  children: a,
                                }),
                              })
                            : o.length > 0
                              ? u.jsx("div", {
                                  className:
                                    "space-y-3 max-h-64 overflow-y-auto",
                                  children: o.map((m, w) =>
                                    u.jsxs(
                                      "div",
                                      {
                                        className:
                                          "flex items-center gap-3 p-2 bg-gray-50 rounded-lg border",
                                        children: [
                                          u.jsx(sp, {
                                            className:
                                              "w-5 h-5 text-gray-600 flex-shrink-0",
                                          }),
                                          u.jsxs("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                              u.jsx("p", {
                                                className:
                                                  "text-base font-medium text-gray-900 truncate",
                                                children: m.userName,
                                              }),
                                              u.jsxs("p", {
                                                className:
                                                  "text-base text-gray-500 truncate",
                                                children: [
                                                  r === "en" ? "ID:" : "帳號:",
                                                  " ",
                                                  m.userId,
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      w,
                                    ),
                                  ),
                                })
                              : u.jsxs("div", {
                                  className: "text-center py-8",
                                  children: [
                                    u.jsx(Ci, {
                                      className:
                                        "w-12 h-12 text-gray-300 mx-auto mb-3",
                                    }),
                                    u.jsx("p", {
                                      className: "text-gray-500",
                                      children:
                                        r === "en"
                                          ? "No users currently online"
                                          : "目前無使用者線上",
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
        })
      : null;
  },
  Xp = (e) => {
    switch (e) {
      case "等待盤點":
        return "bg-yellow-50";
      case "盤點中":
        return "bg-blue-50";
      case "鎖定":
        return "bg-red-50";
      default:
        return "bg-white";
    }
  },
  Yp = ({
    item: e,
    language: t,
    onlineUserCount: n,
    onDelete: r,
    onLock: o,
    onAddMedicine: s,
    onEditStaff: i,
    batchMode: l = !1,
    isSelected: a = !1,
    onSelect: c,
  }) => {
    const { showLoading: p, hideLoading: g } = Mr(),
      m = e.STATE === "鎖定",
      [w, _] = N.useState(!1),
      x = async () => {
        try {
          (p(), await fe.downloadExcel(e));
        } catch (h) {
          console.error("Failed to download Excel:", h);
        } finally {
          g();
        }
      },
      b = () => {
        (sessionStorage.setItem("IC_SN", e.IC_SN),
          e.IC_SN.includes("EVD")
            ? (location.href = "../inventory_daily/index.html?administrator")
            : (location.href = "../inventory/index.html?administrator"));
      },
      f = async () => {
        const h =
          t === "en"
            ? `Are you sure you want to delete inventory ${e.IC_SN}?`
            : `確定要刪除盤點單 ${e.IC_SN} 嗎？`;
        if (window.confirm(h))
          try {
            (p(), await r(e.IC_SN));
          } finally {
            g();
          }
      },
      d = async () => {
        const h =
          t === "en"
            ? `Are you sure you want to ${m ? "unlock" : "lock"} inventory ${e.IC_SN}?`
            : `確定要${m ? "解鎖" : "鎖定"}盤點單 ${e.IC_SN} 嗎？`;
        if (window.confirm(h))
          try {
            (p(), await o(e.IC_SN));
          } finally {
            g();
          }
      };
    return u.jsxs("div", {
      className: `rounded-lg shadow-lg p-6 transition-all duration-200 ${Xp(e.STATE)} ${l ? "cursor-pointer hover:ring-2 hover:ring-blue-400" : ""} ${a ? "ring-4 ring-blue-500" : ""}`,
      onClick: () => l && c && c(e.IC_SN),
      children: [
        u.jsx("div", {
          className: "flex justify-between items-start mb-4",
          children: u.jsxs("div", {
            className: "flex-1",
            children: [
              l &&
                u.jsxs("div", {
                  className: "flex items-center mb-3",
                  children: [
                    u.jsx("input", {
                      type: "checkbox",
                      checked: a,
                      onChange: () => c && c(e.IC_SN),
                      className:
                        "w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 cursor-pointer",
                      onClick: (h) => h.stopPropagation(),
                    }),
                    u.jsx("label", {
                      className: "ml-3 text-base font-medium text-gray-700",
                      children: a ? "已選取" : "點擊選取",
                    }),
                  ],
                }),
              u.jsxs("div", {
                className: "flex items-center gap-4 mb-2",
                children: [
                  u.jsxs("h3", {
                    className: "text-lg font-semibold text-gray-900",
                    children: [E("ic_sn", t), ": ", e.IC_SN],
                  }),
                  !m &&
                    u.jsxs("div", {
                      className:
                        "flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full cursor-pointer hover:bg-green-200 transition-colors",
                      onClick: () => _(!0),
                      title:
                        t === "en"
                          ? "Click to view online users"
                          : "點擊查看線上使用者",
                      children: [
                        u.jsx(Ci, { className: "w-5 h-5 text-green-600" }),
                        u.jsxs("span", {
                          className: "text-lg font-medium text-green-700",
                          children: [n, " ", t === "en" ? "online" : "線上"],
                        }),
                      ],
                    }),
                ],
              }),
              u.jsx("p", {
                className: "text-lg font-semibold text-gray-900 underline",
                children: e.IC_NAME,
              }),
            ],
          }),
        }),
        u.jsxs("div", {
          className: "space-y-2 mb-6",
          children: [
            u.jsxs("p", {
              className: "text-base",
              children: [
                u.jsxs("span", {
                  className: "font-medium",
                  children: [E("creator", t), ": "],
                }),
                e.CT,
              ],
            }),
            u.jsxs("p", {
              className: "text-base",
              children: [
                u.jsxs("span", {
                  className: "font-medium",
                  children: [E("staff", t), ": "],
                }),
                e.DEFAULT_OP || "-",
              ],
            }),
            u.jsxs("p", {
              className: "text-base",
              children: [
                u.jsxs("span", {
                  className: "font-medium",
                  children: [E("start", t), ": "],
                }),
                new Date(e.START_TIME).toLocaleString(),
              ],
            }),
            u.jsxs("p", {
              className: "text-base",
              children: [
                u.jsxs("span", {
                  className: "font-medium",
                  children: [E("end", t), ": "],
                }),
                new Date(e.END_TIME).toLocaleString(),
              ],
            }),
            u.jsxs("p", {
              className: "text-base",
              children: [
                u.jsxs("span", {
                  className: "font-medium",
                  children: [E("status", t), ": "],
                }),
                e.STATE,
              ],
            }),
          ],
        }),
        u.jsxs("div", {
          className: "flex flex-wrap gap-2",
          children: [
            u.jsx(Ee, {
              variant: "secondary",
              icon: ep,
              onClick: () => s(e.IC_SN),
              children: E("addMedicine", t),
            }),
            u.jsx(Ee, {
              variant: "secondary",
              icon: op,
              onClick: () => i(e.IC_SN),
              children: E("editStaff", t),
            }),
            u.jsx(Ee, {
              variant: "secondary",
              icon: Jc,
              onClick: x,
              children: E("downloadExcel", t),
            }),
            u.jsx(Ee, {
              variant: "pass",
              icon: m ? ki : ed,
              className: `inline-flex items-center px-4 py-2 border border-transparent rounded-lg text-base font-medium text-white ${m ? "bg-green-600 hover:bg-green-700 focus:ring-green-500" : "border-yellow-600 bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-500"} focus:outline-none focus:ring-2 focus:ring-offset-2`,
              onClick: d,
              children: m
                ? t === "en"
                  ? "Unlock"
                  : "鎖定中"
                : t === "en"
                  ? "Lock"
                  : "開放中",
            }),
            u.jsx(Ee, {
              variant: "danger",
              icon: rp,
              className:
                "inline-flex items-center px-4 py-2 border border-transparent rounded-lg text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
              onClick: f,
              children: t === "en" ? "Delete" : "刪除",
            }),
            !m &&
              u.jsx(Ee, {
                variant: "pass",
                icon: Jh,
                onClick: b,
                children: E("enterInventory", t),
              }),
          ],
        }),
        u.jsx(qp, {
          isOpen: w,
          onClose: () => _(!1),
          inventoryId: e.IC_SN,
          language: t,
        }),
      ],
    });
  },
  Jp = ({
    isOpen: e,
    onClose: t,
    language: n,
    onSearch: r,
    setInventoryItems: o,
  }) => {
    const [s, i] = N.useState(""),
      [l, a] = N.useState(""),
      [c, p] = N.useState(""),
      g = (d) => {
        const h = d.getFullYear(),
          v = String(d.getMonth() + 1).padStart(2, "0"),
          S = String(d.getDate()).padStart(2, "0");
        return `${h}-${v}-${S}`;
      },
      m = (d, h) => {
        const v = new Date(d);
        return (v.setDate(v.getDate() + h), v);
      },
      w = () => {
        (i(""), a(""), p(""));
      },
      _ = () => {
        (w(), t());
      },
      x = async (d, h, v) => {
        try {
          let S;
          if (d && h) {
            const C = g(m(new Date(h), 1));
            S = await fe.getInventoryList(d, C);
          } else S = await fe.getInventoryList();
          console.log("API Results:", S);
          let I = S;
          if (v) {
            const C = v.toLowerCase();
            I = S.filter((T) => T.IC_SN.toLowerCase().includes(C));
          }
          (r(I), _());
        } catch (S) {
          console.error("Search failed:", S);
        }
      },
      b = async (d) => {
        (d.preventDefault(), await x(l, c, s));
      },
      f = async (d) => {
        const h = new Date(),
          v = g(h);
        let S = "";
        switch (d) {
          case "today":
            S = v;
            break;
          case "week":
            S = g(m(h, -7));
            break;
          case "month":
            S = g(m(h, -30));
            break;
          case "threeMonths":
            S = g(m(h, -90));
            break;
          case "sixMonths":
            S = g(m(h, -180));
            break;
          case "year":
            S = g(m(h, -365));
            break;
        }
        await x(S, v, s);
      };
    return e
      ? u.jsx("div", {
          className: "fixed inset-0 z-50 overflow-y-auto",
          children: u.jsxs("div", {
            className:
              "flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0",
            children: [
              u.jsx("div", {
                className:
                  "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                onClick: _,
              }),
              u.jsxs("div", {
                className:
                  "inline-block transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle",
                children: [
                  u.jsx("div", {
                    className: "absolute right-0 top-0 pr-4 pt-4",
                    children: u.jsx("button", {
                      onClick: _,
                      className: "text-gray-400 hover:text-gray-500",
                      children: u.jsx(An, { className: "h-6 w-6" }),
                    }),
                  }),
                  u.jsx("div", {
                    className: "sm:flex sm:items-start",
                    children: u.jsxs("div", {
                      className: "mt-3 w-full text-center sm:mt-0 sm:text-left",
                      children: [
                        u.jsx("h3", {
                          className:
                            "text-xl font-medium leading-6 text-gray-900",
                          children: E("searchInventory", n),
                        }),
                        u.jsxs("form", {
                          onSubmit: b,
                          className: "mt-4 space-y-4",
                          children: [
                            u.jsxs("div", {
                              children: [
                                u.jsxs("div", {
                                  className: "mt-1 grid grid-cols-2 gap-4",
                                  children: [
                                    u.jsxs("div", {
                                      children: [
                                        u.jsx("label", {
                                          htmlFor: "startDate",
                                          className:
                                            "block text-base text-gray-500",
                                          children: E("from", n),
                                        }),
                                        u.jsx("input", {
                                          type: "date",
                                          id: "startDate",
                                          className:
                                            "block w-full px-2 py-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base",
                                          value: l,
                                          onChange: (d) => a(d.target.value),
                                        }),
                                      ],
                                    }),
                                    u.jsxs("div", {
                                      children: [
                                        u.jsx("label", {
                                          htmlFor: "endDate",
                                          className:
                                            "block text-base text-gray-500",
                                          children: E("to", n),
                                        }),
                                        u.jsx("input", {
                                          type: "date",
                                          id: "endDate",
                                          className:
                                            "block w-full px-2 py-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base",
                                          value: c,
                                          onChange: (d) => p(d.target.value),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                u.jsxs("div", {
                                  className: "mt-3",
                                  children: [
                                    u.jsx("label", {
                                      className:
                                        "block text-sm font-medium text-gray-700 mb-2",
                                      children: E("quickSearch", n),
                                    }),
                                    u.jsxs("div", {
                                      className: "grid grid-cols-3 gap-2",
                                      children: [
                                        u.jsx("button", {
                                          type: "button",
                                          onClick: () => f("today"),
                                          className:
                                            "px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                                          children: E("today", n),
                                        }),
                                        u.jsx("button", {
                                          type: "button",
                                          onClick: () => f("week"),
                                          className:
                                            "px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                                          children: E("thisWeek", n),
                                        }),
                                        u.jsx("button", {
                                          type: "button",
                                          onClick: () => f("month"),
                                          className:
                                            "px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                                          children: E("oneMonth", n),
                                        }),
                                        u.jsx("button", {
                                          type: "button",
                                          onClick: () => f("threeMonths"),
                                          className:
                                            "px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                                          children: E("threeMonths", n),
                                        }),
                                        u.jsx("button", {
                                          type: "button",
                                          onClick: () => f("sixMonths"),
                                          className:
                                            "px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                                          children: E("sixMonths", n),
                                        }),
                                        u.jsx("button", {
                                          type: "button",
                                          onClick: () => f("year"),
                                          className:
                                            "px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                                          children: E("oneYear", n),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            u.jsxs("div", {
                              children: [
                                u.jsx("label", {
                                  htmlFor: "inventoryNumber",
                                  className:
                                    "block text-base font-medium text-gray-700",
                                  children: E("inventoryNumber", n),
                                }),
                                u.jsx("div", {
                                  className: "mt-1",
                                  children: u.jsx("input", {
                                    type: "text",
                                    id: "inventoryNumber",
                                    className:
                                      "block w-full rounded-md px-2 py-1 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base",
                                    placeholder: E("enterInventoryNumber", n),
                                    value: s,
                                    onChange: (d) => i(d.target.value),
                                  }),
                                }),
                              ],
                            }),
                            u.jsxs("div", {
                              className:
                                "mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3",
                              children: [
                                u.jsx("button", {
                                  type: "submit",
                                  className:
                                    "inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:col-start-2",
                                  children: E("search", n),
                                }),
                                u.jsx("button", {
                                  type: "button",
                                  onClick: _,
                                  className:
                                    "mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0",
                                  children: E("cancel", n),
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
            ],
          }),
        })
      : null;
  },
  Zp = ({
    isOpen: e,
    onClose: t,
    language: n,
    onUploadSuccess: r,
    sendMessage: o,
  }) => {
    const { showLoading: s, hideLoading: i } = Mr(),
      [l, a] = N.useState(""),
      [c, p] = N.useState(""),
      [g, m] = N.useState(null),
      [w, _] = N.useState(""),
      x = N.useRef(null),
      b = () => {
        (a(""), p(""), m(null), _(""), x.current && (x.current.value = ""));
      },
      f = () => {
        (b(), t());
      },
      d = (C) => {
        const T = [
            "application/vnd.ms-excel",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          ],
          R = [".xls", ".xlsx"],
          M = C.name.toLowerCase().slice(C.name.lastIndexOf("."));
        return !R.includes(M) || !T.includes(C.type)
          ? (_(E("invalidFileType", n)), !1)
          : (_(""), !0);
      },
      h = (C) => {
        var R;
        const T = (R = C.target.files) == null ? void 0 : R[0];
        T && (d(T) ? m(T) : m(null));
      },
      v = (C) => {
        C.preventDefault();
        const T = C.dataTransfer.files[0];
        T && d(T) && m(T);
      },
      S = (C) => {
        C.preventDefault();
      },
      I = async (C) => {
        if ((C.preventDefault(), !l || !g)) {
          _(E("fileRequired", n));
          return;
        }
        const T = sessionStorage.getItem("user_session");
        let R = "";
        try {
          T && (R = JSON.parse(T).Name || "");
        } catch (H) {
          console.error("Error parsing user session:", H);
        }
        const M = new FormData();
        (M.append("file", g),
          M.append("IC_NAME", l),
          M.append("CT", R),
          M.append("DEFAULT_OP", c));
        try {
          s();
          const H = await fe.uploadExcel(M, o);
          H.Code == 200 ? (await r(), f()) : _(H.Result || "Upload failed");
        } catch (H) {
          (console.error("Upload failed:", H),
            _(H instanceof Error ? H.message : "Upload failed"));
        } finally {
          i();
        }
      };
    return e
      ? u.jsx("div", {
          className: "fixed inset-0 z-50 overflow-y-auto",
          children: u.jsxs("div", {
            className:
              "flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0",
            children: [
              u.jsx("div", {
                className:
                  "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                onClick: f,
              }),
              u.jsxs("div", {
                className:
                  "inline-block transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle",
                children: [
                  u.jsx("div", {
                    className: "absolute right-0 top-0 pr-4 pt-4",
                    children: u.jsx("button", {
                      onClick: f,
                      className: "text-gray-400 hover:text-gray-500",
                      children: u.jsx(An, { className: "h-6 w-6" }),
                    }),
                  }),
                  u.jsx("div", {
                    className: "sm:flex sm:items-start",
                    children: u.jsxs("div", {
                      className: "mt-3 w-full text-center sm:mt-0 sm:text-left",
                      children: [
                        u.jsx("h3", {
                          className:
                            "text-lg font-medium leading-6 text-gray-900",
                          children: E("uploadExcelFile", n),
                        }),
                        u.jsxs("form", {
                          onSubmit: I,
                          className: "mt-4 space-y-4",
                          children: [
                            u.jsxs("div", {
                              children: [
                                u.jsx("label", {
                                  htmlFor: "inventoryName",
                                  className:
                                    "block text-base font-medium text-gray-700",
                                  children: E("uploadInventoryName", n),
                                }),
                                u.jsx("input", {
                                  type: "text",
                                  id: "inventoryName",
                                  value: l,
                                  onChange: (C) => a(C.target.value),
                                  className:
                                    "px-2 py-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base",
                                  placeholder: E("enterInventoryName", n),
                                  required: !0,
                                }),
                              ],
                            }),
                            u.jsxs("div", {
                              children: [
                                u.jsx("label", {
                                  htmlFor: "defaultStaff",
                                  className:
                                    "block text-base font-medium text-gray-700",
                                  children: E("uploadInventoryStaff", n),
                                }),
                                u.jsx("input", {
                                  type: "text",
                                  id: "defaultStaff",
                                  value: c,
                                  onChange: (C) => p(C.target.value),
                                  className:
                                    "px-2 py-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base",
                                  placeholder: E("enterUploadStaffName", n),
                                }),
                              ],
                            }),
                            u.jsx("div", {
                              className:
                                "mt-4 flex justify-center rounded-lg border-2 border-dashed border-gray-300 px-6 py-8",
                              onDrop: v,
                              onDragOver: S,
                              children: u.jsxs("div", {
                                className: "text-center",
                                children: [
                                  u.jsx(td, {
                                    className:
                                      "mx-auto h-12 w-12 text-gray-400",
                                  }),
                                  u.jsxs("div", {
                                    className:
                                      "mt-4 flex text-base leading-6 text-gray-600",
                                    children: [
                                      u.jsxs("label", {
                                        htmlFor: "file-upload",
                                        className:
                                          "relative cursor-pointer rounded-md bg-white font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-500",
                                        children: [
                                          u.jsx("span", {
                                            children: E("selectFile", n),
                                          }),
                                          u.jsx("input", {
                                            id: "file-upload",
                                            name: "file-upload",
                                            type: "file",
                                            ref: x,
                                            className: "sr-only",
                                            accept: ".xls,.xlsx",
                                            onChange: h,
                                          }),
                                        ],
                                      }),
                                      u.jsx("p", {
                                        className: "pl-1",
                                        children: E("dragAndDrop", n),
                                      }),
                                    ],
                                  }),
                                  u.jsx("p", {
                                    className: "text-sm text-gray-500 mt-2",
                                    children: E("excelFilesOnly", n),
                                  }),
                                  g &&
                                    u.jsx("p", {
                                      className: "text-sm text-green-600 mt-2",
                                      children: g.name,
                                    }),
                                  w &&
                                    u.jsx("p", {
                                      className: "text-sm text-red-600 mt-2",
                                      children: w,
                                    }),
                                ],
                              }),
                            }),
                            u.jsxs("div", {
                              className:
                                "mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3",
                              children: [
                                u.jsx("button", {
                                  type: "submit",
                                  className:
                                    "inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:col-start-2",
                                  children: E("upload", n),
                                }),
                                u.jsx("button", {
                                  type: "button",
                                  onClick: f,
                                  className:
                                    "mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0",
                                  children: E("cancel", n),
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
            ],
          }),
        })
      : null;
  },
  Ps = ({ label: e, options: t, selectedOptions: n, onToggle: r }) =>
    u.jsxs("div", {
      className: "mb-4",
      children: [
        u.jsx("label", {
          className: "block text-base font-medium text-gray-700 mb-2",
          children: e,
        }),
        u.jsx("div", {
          className: "flex flex-wrap gap-2",
          children: t.map((o) =>
            u.jsx(
              "button",
              {
                type: "button",
                onClick: () => r(o),
                className: `px-4 py-2 rounded-md text-sm font-medium transition-colors ${n.includes(o) ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                children: o,
              },
              o,
            ),
          ),
        }),
      ],
    }),
  em = ({
    isOpen: e,
    onClose: t,
    language: n,
    onCreateSuccess: r,
    sendMessage: o,
    medCloudData: s,
    medQtyGroupData: i,
  }) => {
    const { showLoading: l, hideLoading: a } = Mr(),
      [c, p] = N.useState(""),
      [g, m] = N.useState(""),
      [w, _] = N.useState([]),
      [x, b] = N.useState([]),
      [f, d] = N.useState([]),
      [h, v] = N.useState([]),
      [S, I] = N.useState([]),
      C = ["N", "1", "2", "3", "4"];
    (N.useEffect(() => {
      if (i && i.length > 0) {
        const B = i.map((V) => V.NAME).filter(Boolean);
        v(B);
      }
    }, [i]),
      N.useEffect(() => {
        if (s && s.length > 0) {
          const B = [...new Set(s.map((V) => V.TYPE).filter(Boolean))];
          I(B);
        }
      }, [s]));
    const T = () => {
        (p(""), m(""), _([]), b([]), d([]));
      },
      R = () => {
        (T(), t());
      },
      M = (B) => {
        _((V) => (V.includes(B) ? V.filter((ne) => ne !== B) : [...V, B]));
      },
      H = (B) => {
        b((V) => (V.includes(B) ? V.filter((ne) => ne !== B) : [...V, B]));
      },
      ct = (B) => {
        d((V) => (V.includes(B) ? V.filter((ne) => ne !== B) : [...V, B]));
      },
      le = async (B) => {
        if ((B.preventDefault(), !c.trim())) {
          m(E("enterInventoryName", n));
          return;
        }
        const V =
          n === "en"
            ? `Are you sure you want to create inventory "${c}"?`
            : `確定要建立盤點單 "${c}" 嗎？`;
        if (window.confirm(V))
          try {
            l();
            const ne = sessionStorage.getItem("user_session");
            let ke = "";
            (ne && (ke = JSON.parse(ne).Name || ""),
              console.log("Selected filters:", {
                medQtyGroups: w,
                controlLevels: x,
                medTypes: f,
              }));
            const j = await fe.createInventory(
              {
                IC_NAME: c,
                CT: ke,
                selectedMedQtyGroups: w,
                selectedControlLevels: x,
                selectedMedTypes: f,
              },
              o,
            );
            j.Code === 200
              ? (r && (await r()), R())
              : m(j.Result || "Failed to create inventory");
          } catch (ne) {
            (console.error("Failed to create inventory:", ne),
              m(
                ne instanceof Error ? ne.message : "Failed to create inventory",
              ));
          } finally {
            a();
          }
      };
    return e
      ? u.jsx("div", {
          className: "fixed inset-0 z-50 overflow-y-auto",
          children: u.jsxs("div", {
            className:
              "flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0",
            children: [
              u.jsx("div", {
                className:
                  "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                onClick: R,
              }),
              u.jsxs("div", {
                className:
                  "inline-block transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6 sm:align-middle",
                children: [
                  u.jsx("div", {
                    className: "absolute right-0 top-0 pr-4 pt-4",
                    children: u.jsx("button", {
                      onClick: R,
                      className: "text-gray-400 hover:text-gray-500",
                      children: u.jsx(An, { className: "h-6 w-6" }),
                    }),
                  }),
                  u.jsx("div", {
                    className: "sm:flex sm:items-start",
                    children: u.jsxs("div", {
                      className: "mt-3 w-full text-center sm:mt-0 sm:text-left",
                      children: [
                        u.jsx("h3", {
                          className:
                            "text-lg font-medium leading-6 text-gray-900 mb-4",
                          children: E("createNewInventory", n),
                        }),
                        u.jsxs("form", {
                          onSubmit: le,
                          className: "mt-4 space-y-4",
                          children: [
                            u.jsxs("div", {
                              children: [
                                u.jsx("label", {
                                  htmlFor: "inventoryName",
                                  className:
                                    "block text-base font-medium text-gray-700",
                                  children: E("inventoryName", n),
                                }),
                                u.jsx("input", {
                                  type: "text",
                                  id: "inventoryName",
                                  value: c,
                                  onChange: (B) => p(B.target.value),
                                  className:
                                    "px-2 py-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-base",
                                  placeholder: E("enterInventoryName", n),
                                  required: !0,
                                }),
                              ],
                            }),
                            u.jsx(Ps, {
                              label: E("medQtyGroup", n),
                              options: h,
                              selectedOptions: w,
                              onToggle: M,
                            }),
                            u.jsx(Ps, {
                              label: E("controlLevel", n),
                              options: C,
                              selectedOptions: x,
                              onToggle: H,
                            }),
                            u.jsx(Ps, {
                              label: E("medTypeGroup", n),
                              options: S,
                              selectedOptions: f,
                              onToggle: ct,
                            }),
                            g &&
                              u.jsx("p", {
                                className: "mt-2 text-sm text-red-600",
                                children: g,
                              }),
                            u.jsxs("div", {
                              className:
                                "mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3",
                              children: [
                                u.jsx("button", {
                                  type: "submit",
                                  className:
                                    "inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:col-start-2 sm:text-base",
                                  children: E("create", n),
                                }),
                                u.jsx("button", {
                                  type: "button",
                                  onClick: R,
                                  className:
                                    "mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-base",
                                  children: E("cancel", n),
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
            ],
          }),
        })
      : null;
  },
  tm = ({ isOpen: e, onClose: t, inventoryId: n, language: r }) => {
    const [o, s] = N.useState(""),
      [i, l] = N.useState([]),
      [a, c] = N.useState([]),
      [p, g] = N.useState(!1),
      [m, w] = N.useState("");
    N.useEffect(() => {
      e && _();
    }, [e]);
    const _ = async () => {
        try {
          (g(!0), w(""));
          const f = await fe.getMedicineList();
          l(f);
        } catch (f) {
          (w(f instanceof Error ? f.message : "Failed to fetch medicines"),
            console.error("Error fetching medicines:", f));
        } finally {
          g(!1);
        }
      },
      x = () => {
        if (!o.trim()) {
          c([]);
          return;
        }
        const f = o.toLowerCase(),
          d = i.filter((h) => {
            var v, S, I, C;
            return (
              ((v = h.CODE) == null ? void 0 : v.toLowerCase().includes(f)) ||
              ((S = h.NAME) == null ? void 0 : S.toLowerCase().includes(f)) ||
              ((I = h.CHT_NAME) == null
                ? void 0
                : I.toLowerCase().includes(f)) ||
              ((C = h.BARCODE) == null
                ? void 0
                : C.some((T) => T.toLowerCase().includes(f)))
            );
          });
        c(d);
      },
      b = async (f) => {
        try {
          (await fe.addMedicineToInventory(n, { ...f, QUANTITY: 1 }), t());
        } catch (d) {
          w(d instanceof Error ? d.message : "Failed to add medicine");
        }
      };
    return e
      ? u.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
          children: u.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden",
            children: [
              u.jsxs("div", {
                className: "flex justify-between items-center p-6 border-b",
                children: [
                  u.jsx("h2", {
                    className: "text-xl font-semibold text-gray-900",
                    children: E("addMedicineTitle", r),
                  }),
                  u.jsx("button", {
                    onClick: t,
                    className: "text-gray-400 hover:text-gray-500",
                    children: u.jsx(An, { className: "w-6 h-6" }),
                  }),
                ],
              }),
              u.jsx("div", {
                className: "p-6 border-b",
                children: u.jsxs("div", {
                  className: "flex gap-4",
                  children: [
                    u.jsx("div", {
                      className: "flex-1",
                      children: u.jsx("input", {
                        type: "text",
                        value: o,
                        onChange: (f) => s(f.target.value),
                        onKeyPress: (f) => f.key === "Enter" && x(),
                        placeholder: E("enterSearchTerm", r),
                        className:
                          "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500",
                      }),
                    }),
                    u.jsxs("button", {
                      onClick: x,
                      className:
                        "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2",
                      children: [
                        u.jsx(Zc, { className: "w-5 h-5" }),
                        E("search", r),
                      ],
                    }),
                  ],
                }),
              }),
              u.jsx("div", {
                className: "p-6 overflow-y-auto",
                style: { maxHeight: "calc(90vh - 200px)" },
                children: p
                  ? u.jsx("div", {
                      className: "text-center text-gray-600",
                      children: "Loading...",
                    })
                  : m
                    ? u.jsx("div", {
                        className: "text-center text-red-600",
                        children: m,
                      })
                    : a.length > 0
                      ? u.jsx("div", {
                          className: "grid grid-cols-1 gap-4",
                          children: a.map((f) =>
                            u.jsx(
                              "div",
                              {
                                className:
                                  "border rounded-lg p-4 hover:bg-gray-50 transition-colors",
                                children: u.jsxs("div", {
                                  className: "flex justify-between items-start",
                                  children: [
                                    u.jsxs("div", {
                                      className: "space-y-2",
                                      children: [
                                        u.jsxs("div", {
                                          children: [
                                            u.jsx("span", {
                                              className: "font-medium",
                                              children: E("mm_code", r),
                                            }),
                                            u.jsx("span", { children: f.CODE }),
                                          ],
                                        }),
                                        f.SKDIACODE &&
                                          u.jsxs("div", {
                                            children: [
                                              u.jsx("span", {
                                                className: "font-medium",
                                                children: E("mm_sdkiacode", r),
                                              }),
                                              u.jsx("span", {
                                                children: f.SKDIACODE,
                                              }),
                                            ],
                                          }),
                                        u.jsxs("div", {
                                          children: [
                                            u.jsx("span", {
                                              className: "font-medium",
                                              children: E("mm_name", r),
                                            }),
                                            u.jsx("span", { children: f.NAME }),
                                          ],
                                        }),
                                        u.jsxs("div", {
                                          children: [
                                            u.jsx("span", {
                                              className: "font-medium",
                                              children: E("mm_chtname", r),
                                            }),
                                            u.jsx("span", {
                                              children: f.CHT_NAME,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    u.jsx("button", {
                                      onClick: () => b(f),
                                      className:
                                        "px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700",
                                      children: E("add", r),
                                    }),
                                  ],
                                }),
                              },
                              f.GUID,
                            ),
                          ),
                        })
                      : o
                        ? u.jsx("div", {
                            className: "text-center text-gray-600",
                            children: E("mm_notfound", r),
                          })
                        : null,
              }),
            ],
          }),
        })
      : null;
  },
  nm = ({
    isOpen: e,
    onClose: t,
    inventoryId: n,
    language: r,
    onUpdateSuccess: o,
  }) => {
    const [s, i] = N.useState(Array(10).fill("")),
      [l, a] = N.useState(Array(10).fill("")),
      [c, p] = N.useState(!1),
      [g, m] = N.useState(!1);
    N.useEffect(() => {
      e
        ? (async () => {
            if (!(!e || !n)) {
              m(!0);
              try {
                const d = (await fe.getInventoryList()).find(
                  (h) => h.IC_SN === n,
                );
                if (d && d.DEFAULT_OP) {
                  const h = d.DEFAULT_OP.split(","),
                    v = Array(10).fill("");
                  (h.forEach((S, I) => {
                    I < 10 && (v[I] = S.trim());
                  }),
                    i(v),
                    a(Array(10).fill("")));
                }
              } catch (f) {
                console.error("Failed to fetch inventory staff:", f);
              } finally {
                m(!1);
              }
            }
          })()
        : (i(Array(10).fill("")), a(Array(10).fill("")), p(!1));
    }, [e, n]);
    const w = (b) =>
        b.trim() === "" ? !0 : /^[a-zA-Z\u4e00-\u9fa5\s]*$/.test(b),
      _ = (b, f) => {
        const d = [...s];
        ((d[b] = f), i(d));
        const h = [...l];
        ((h[b] = w(f) ? "" : E("invalidStaffName", r)), a(h));
      },
      x = async (b) => {
        (b.preventDefault(), p(!0));
        try {
          let f = [...s];
          for (; f.length > 0 && f[f.length - 1].trim() === ""; ) f.pop();
          const d = await fe.updateInventoryStaff(n, f);
          d && d.Code === 200 && (o && (await o()), t());
        } catch (f) {
          console.error("Failed to update staff:", f);
        } finally {
          p(!1);
        }
      };
    return e
      ? u.jsx("div", {
          className: "fixed inset-0 z-50 overflow-y-auto",
          children: u.jsxs("div", {
            className:
              "flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0",
            children: [
              u.jsx("div", {
                className:
                  "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                onClick: t,
              }),
              u.jsxs("div", {
                className:
                  "inline-block transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle",
                children: [
                  u.jsx("div", {
                    className: "absolute right-0 top-0 pr-4 pt-4",
                    children: u.jsx("button", {
                      onClick: t,
                      className: "text-gray-400 hover:text-gray-500",
                      children: u.jsx(An, { className: "h-6 w-6" }),
                    }),
                  }),
                  u.jsx("div", {
                    className: "sm:flex sm:items-start",
                    children: u.jsxs("div", {
                      className: "mt-3 w-full text-center sm:mt-0 sm:text-left",
                      children: [
                        u.jsx("h3", {
                          className:
                            "text-lg font-medium leading-6 text-gray-900",
                          children: E("editStaffTitle", r),
                        }),
                        g
                          ? u.jsx("div", {
                              className:
                                "flex justify-center items-center h-32",
                              children: u.jsx("div", {
                                className:
                                  "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600",
                              }),
                            })
                          : u.jsxs("form", {
                              onSubmit: x,
                              className: "mt-4",
                              children: [
                                u.jsx("div", {
                                  className:
                                    "gap-4 grid grid-cols-2 max-h-[60vh] overflow-y-auto",
                                  children: s.map((b, f) =>
                                    u.jsxs(
                                      "div",
                                      {
                                        children: [
                                          u.jsxs("label", {
                                            className:
                                              "block text-sm font-medium text-gray-700",
                                            children: [
                                              E("staffMember", r),
                                              " ",
                                              f + 1,
                                            ],
                                          }),
                                          u.jsx("input", {
                                            type: "text",
                                            value: b,
                                            onChange: (d) =>
                                              _(f, d.target.value),
                                            className: `mt-1 block w-full rounded-md px-2 py-1 text-base
                            ${l[f] ? "border-2 border-red-500 focus:border-red-500 focus:ring-red-500" : "border-2 border-gray-400 hover:border-gray-500 focus:border-blue-500 focus:ring-blue-500"}
                            shadow-sm transition-colors duration-200`,
                                            placeholder: E("enterStaffName", r),
                                          }),
                                          l[f] &&
                                            u.jsx("p", {
                                              className:
                                                "mt-1 text-sm text-red-600",
                                              children: l[f],
                                            }),
                                        ],
                                      },
                                      f,
                                    ),
                                  ),
                                }),
                                u.jsxs("div", {
                                  className:
                                    "mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3",
                                  children: [
                                    u.jsx("button", {
                                      type: "submit",
                                      disabled: c || l.some((b) => b !== ""),
                                      className:
                                        "inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-300 disabled:cursor-not-allowed sm:col-start-2",
                                      children: E("save", r),
                                    }),
                                    u.jsx("button", {
                                      type: "button",
                                      onClick: t,
                                      className:
                                        "mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0",
                                      children: E("cancel", r),
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
            ],
          }),
        })
      : null;
  },
  rm = ({ isOpen: e, onClose: t, language: n }) => {
    const r = wl(),
      { showLoading: o, hideLoading: s } = Mr(),
      [i, l] = N.useState(""),
      [a, c] = N.useState(""),
      [p, g] = N.useState(""),
      m = async (w) => {
        if ((w.preventDefault(), g(""), !i || !a)) {
          g(n === "en" ? "Please fill in all fields" : "請填寫所有欄位");
          return;
        }
        if (!(r != null && r.domain)) {
          g(n === "en" ? "System configuration error" : "系統配置錯誤");
          return;
        }
        try {
          o();
          const x = await (
            await fetch(`${r.domain}/api/session/login`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ Data: { ID: i, Password: a } }),
            })
          ).json();
          (console.log("Login response:", x),
            x.Code === 200
              ? (sessionStorage.setItem("user_session", JSON.stringify(x.Data)),
                t(),
                window.location.reload())
              : g(x.Result || (n === "en" ? "Login failed" : "登入失敗")));
        } catch (_) {
          (console.error("Login error:", _),
            g(
              n === "en"
                ? "Network error, please try again"
                : "網路錯誤，請重試",
            ));
        } finally {
          s();
        }
      };
    return e
      ? u.jsx("div", {
          className:
            "fixed inset-0 z-[9999] bg-[#F8F9FF] flex items-center justify-center",
          children: u.jsxs("div", {
            className: "w-full max-w-md p-8",
            children: [
              u.jsx("div", {
                className: "text-center mb-12",
                children: u.jsx("h1", {
                  className: "text-3xl font-bold mb-2 text-gray-900",
                  children: n === "zh" ? "盤點管理" : "Inventory Management",
                }),
              }),
              u.jsxs("form", {
                onSubmit: m,
                className: "space-y-6 bg-white rounded-2xl p-8 shadow-sm",
                children: [
                  u.jsxs("div", {
                    children: [
                      u.jsx("label", {
                        htmlFor: "userId",
                        className:
                          "block text-sm font-medium text-gray-700 mb-1",
                        children: n === "zh" ? "帳號" : "Account",
                      }),
                      u.jsx("input", {
                        type: "text",
                        id: "userId",
                        value: i,
                        onChange: (w) => l(w.target.value),
                        className:
                          "block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out",
                        autoComplete: "username",
                        placeholder:
                          n === "zh" ? "請輸入帳號" : "Enter account",
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    children: [
                      u.jsx("label", {
                        htmlFor: "password",
                        className:
                          "block text-sm font-medium text-gray-700 mb-1",
                        children: n === "zh" ? "密碼" : "Password",
                      }),
                      u.jsx("input", {
                        type: "password",
                        id: "password",
                        value: a,
                        onChange: (w) => c(w.target.value),
                        className:
                          "block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out",
                        autoComplete: "current-password",
                        placeholder:
                          n === "zh" ? "請輸入密碼" : "Enter password",
                      }),
                    ],
                  }),
                  p &&
                    u.jsx("div", {
                      className: "text-red-600 text-sm text-center",
                      children: p,
                    }),
                  u.jsx("button", {
                    type: "submit",
                    className:
                      "w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out font-medium text-lg",
                    children: n === "zh" ? "登入" : "Login",
                  }),
                ],
              }),
            ],
          }),
        })
      : null;
  },
  om = [
    { id: "management", name: "management", href: "#" },
    { id: "merge", name: "merge", href: "../inventory_merge" },
    { id: "review", name: "review", href: "../inventory_review" },
    { id: "daily", name: "daily", href: "../inventory_daily_report" },
  ],
  Jr = { 等待盤點: 0, 盤點中: 1, 鎖定: 2 },
  sm = () => {
    const e = wl(),
      { showLoading: t, hideLoading: n } = Mr(),
      { sendMessage: r, fetchInventoryItems: o } = Qp(),
      [s, i] = N.useState("management"),
      [l, a] = N.useState("zh"),
      [c, p] = N.useState(!1),
      [g, m] = N.useState(!1),
      [w, _] = N.useState(!1),
      [x, b] = N.useState(!1),
      [f, d] = N.useState(!1),
      [h, v] = N.useState(!1),
      [S, I] = N.useState(""),
      [C, T] = N.useState("inventory"),
      [R, M] = N.useState("all"),
      [H, ct] = N.useState(!1),
      [le, B] = N.useState(new Set()),
      [V, ne] = N.useState([]),
      [ke, j] = N.useState([]),
      [L, O] = N.useState([]),
      [X, re] = N.useState([]),
      [an, nt] = N.useState([]);
    (N.useEffect(() => {
      Un();
    }, []),
      N.useEffect(() => {
        if (e) {
          (dt(), un(), Bt(), kl());
          const D = setInterval(kl, 6e3);
          return () => clearInterval(D);
        }
      }, [e]),
      N.useEffect(() => {
        id();
      }, [V, C, R]));
    const Un = () => {
        sessionStorage.getItem("user_session") || v(!0);
      },
      dt = async () => {
        try {
          const D = await fe.getMedCloud();
          (console.log("Medicine cloud data loaded:", D), re(D.Data || []));
        } catch (D) {
          (console.error("Failed to fetch medicine cloud data:", D), re([]));
        }
      },
      un = async () => {
        try {
          const D = await fe.getMedQtyGroup();
          (console.log("Medicine quantity group data loaded:", D),
            nt(D.Data || []));
        } catch (D) {
          (console.error("Failed to fetch medicine quantity group data:", D),
            nt([]));
        }
      },
      id = () => {
        if (!V.length) {
          j([]);
          return;
        }
        const D = V.filter((U) => {
          let rt = !1;
          C === "review"
            ? (rt = U.IC_SN.includes("REV"))
            : C === "daily"
              ? (rt = U.IC_SN.includes("EVD"))
              : (rt = !U.IC_SN.includes("REV") && !U.IC_SN.includes("EVD"));
          let St = !1;
          return (
            R === "all"
              ? (St = !0)
              : R === "locked"
                ? (St = U.STATE === "鎖定")
                : R === "unlocked" && (St = U.STATE !== "鎖定"),
            rt && St
          );
        });
        j(D);
      },
      Bt = async () => {
        try {
          const U = [...(await fe.getInventoryList())].sort(
            (rt, St) => (Jr[rt.STATE] ?? 999) - (Jr[St.STATE] ?? 999),
          );
          ne(U);
        } catch (D) {
          (console.error("Failed to fetch inventory items:", D), ne([]));
        }
      },
      kl = async () => {
        try {
          const D = await fe.getOnlineUsers();
          O(D);
        } catch (D) {
          (console.error("Failed to fetch online users:", D), O([]));
        }
      },
      ld = (D) => {
        const U = L.find((rt) => rt.parameter === D);
        return U ? U.count : 0;
      },
      ad = (D) => {
        const U = [...D].sort(
          (rt, St) => (Jr[rt.STATE] ?? 999) - (Jr[St.STATE] ?? 999),
        );
        ne(U);
      },
      ud = async () => {
        await Bt();
      },
      cd = async () => {
        await Bt();
      },
      dd = async () => {
        try {
          (t(), await fe.getExcelHeader());
        } catch (D) {
          console.error("Failed to download template:", D);
        } finally {
          n();
        }
      },
      fd = async (D) => {
        (await fe.deleteInventory(D, r), await Bt());
      },
      hd = async (D, U) => {
        (await fe.toggleLock(D, U, r), await Bt());
      },
      pd = () => {
        a((D) => (D === "en" ? "zh" : "en"));
      },
      es = (D) => {
        T(D);
      },
      ts = (D) => {
        M(D);
      },
      Cl = () => {
        (ct(!H), B(new Set()));
      },
      md = (D) => {
        const U = new Set(le);
        (U.has(D) ? U.delete(D) : U.add(D), B(U));
      },
      gd = () => {
        (console.log("Batch lock items:", Array.from(le)),
          alert(`批次鎖定功能尚未實作
已選取 ${le.size} 個項目`));
      },
      yd = () => {
        (console.log("Batch unlock items:", Array.from(le)),
          alert(`批次解鎖功能尚未實作
已選取 ${le.size} 個項目`));
      },
      vd = () => {
        const D = new Set(ke.map((U) => U.IC_SN));
        B(D);
      },
      wd = () => {
        B(new Set());
      },
      ns =
        ke.length > 0 &&
        le.size === ke.length &&
        ke.every((D) => le.has(D.IC_SN));
    return u.jsxs("div", {
      className: "min-h-screen bg-white",
      children: [
        u.jsx(Kp, { language: l, onLanguageChange: pd }),
        u.jsx(Gp, { tabs: om, activeTab: s, language: l, onTabChange: i }),
        u.jsxs("main", {
          className: "mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-8",
          children: [
            u.jsxs("div", {
              className:
                "flex justify-between flex-col sm:flex-row lg:flex-row",
              children: [
                u.jsxs("div", {
                  className: "flex space-x-4 mb-6",
                  children: [
                    u.jsx(Ee, {
                      onClick: dd,
                      icon: Jc,
                      children: E("downloadTemplate", l),
                    }),
                    u.jsx(Ee, {
                      onClick: () => p(!0),
                      icon: Zc,
                      children: E("search", l),
                    }),
                    u.jsx(Ee, {
                      onClick: () => m(!0),
                      icon: td,
                      children: E("uploadExcel", l),
                    }),
                    u.jsx(Ee, {
                      onClick: () => _(!0),
                      icon: tp,
                      children: E("createInventory", l),
                    }),
                  ],
                }),
                u.jsx("div", {
                  className: "flex space-x-4 mb-6",
                  children: H
                    ? u.jsxs(u.Fragment, {
                        children: [
                          u.jsx("div", {
                            className:
                              "flex items-center px-4 py-2 bg-blue-50 rounded-lg border-2 border-blue-200",
                            children: u.jsxs("span", {
                              className: "text-base font-medium text-blue-700",
                              children: [
                                E("selectedItems", l),
                                ": ",
                                le.size,
                                " / ",
                                ke.length,
                              ],
                            }),
                          }),
                          u.jsx(Ee, {
                            onClick: ns ? wd : vd,
                            icon: ns ? np : qh,
                            variant: "secondary",
                            disabled: ke.length === 0,
                            children: E(ns ? "deselectAll" : "selectAll", l),
                          }),
                          u.jsx(Ee, {
                            onClick: gd,
                            icon: ki,
                            className: "bg-red-600 hover:bg-red-700 text-white",
                            disabled: le.size === 0,
                            children: E("lockSelected", l),
                          }),
                          u.jsx(Ee, {
                            onClick: yd,
                            icon: ed,
                            className:
                              "bg-green-600 hover:bg-green-700 text-white",
                            disabled: le.size === 0,
                            children: E("unlockSelected", l),
                          }),
                          u.jsx(Ee, {
                            onClick: Cl,
                            variant: "secondary",
                            children: E("cancelSelection", l),
                          }),
                        ],
                      })
                    : u.jsx(Ee, {
                        onClick: Cl,
                        icon: ki,
                        className:
                          "bg-purple-600 hover:bg-purple-700 text-white",
                        children: E("batchLock", l),
                      }),
                }),
              ],
            }),
            u.jsxs("div", {
              className:
                "flex justify-between flex-col sm:flex-row lg:flex-row",
              children: [
                u.jsx("div", {
                  className: "mb-6",
                  children: u.jsx("div", {
                    className: "flex items-center space-x-4",
                    children: u.jsxs("div", {
                      className:
                        "relative inline-flex bg-gray-100 rounded-lg p-1 shadow-inner",
                      children: [
                        u.jsx("button", {
                          onClick: () => ts("all"),
                          className: `relative z-20 px-4 py-2 text-base font-medium rounded-md transition-all duration-300 ease-in-out min-w-[80px] ${R === "all" ? "text-white bg-gray-700 rounded-md" : "text-gray-500 hover:text-gray-800 bg-gray-100 rounded-lg"}`,
                          children: E("allStatus", l),
                        }),
                        u.jsx("button", {
                          onClick: () => ts("unlocked"),
                          className: `relative z-20 px-4 py-2 text-base font-medium rounded-md transition-all duration-300 ease-in-out min-w-[100px] ${R === "unlocked" ? "text-white bg-green-600 rounded-md" : "text-gray-500 hover:text-gray-800 bg-gray-100 rounded-lg"}`,
                          children: E("unlocked", l),
                        }),
                        u.jsx("button", {
                          onClick: () => ts("locked"),
                          className: `relative z-20 px-4 py-2 text-base font-medium rounded-md transition-all duration-300 ease-in-out min-w-[100px] ${R === "locked" ? "text-white bg-red-600 rounded-md" : "text-gray-500 hover:text-gray-800 bg-gray-100 rounded-lg"}`,
                          children: E("locked", l),
                        }),
                      ],
                    }),
                  }),
                }),
                u.jsx("div", {
                  className: "mb-6",
                  children: u.jsx("div", {
                    className: "flex items-center space-x-4",
                    children: u.jsxs("div", {
                      className:
                        "relative inline-flex bg-blue-100 rounded-lg p-1 shadow-inner",
                      children: [
                        u.jsx("button", {
                          onClick: () => es("inventory"),
                          className: `relative z-20 px-2 py-2 text-base font-medium rounded-md transition-all duration-300 ease-in-out min-w-[80px] ${C === "inventory" ? "text-white bg-blue-600 rounded-md" : "text-gray-500 hover:text-gray-800 bg-blue-100 rounded-lg"}`,
                          children: E("inventoryForms", l),
                        }),
                        u.jsx("button", {
                          onClick: () => es("daily"),
                          className: `relative z-20 px-2 py-2 text-base font-medium rounded-md transition-all duration-300 ease-in-out min-w-[90px] ${C === "daily" ? "text-white bg-blue-600 rounded-md" : "text-gray-500 hover:text-gray-800 bg-blue-100 rounded-lg"}`,
                          children: E("dailyForms", l),
                        }),
                        u.jsx("button", {
                          onClick: () => es("review"),
                          className: `relative z-20 px-2 py-2 text-base font-medium rounded-md transition-all duration-300 ease-in-out min-w-[80px] ${C === "review" ? "text-white bg-blue-600 rounded-md" : "text-gray-500 hover:text-gray-800 bg-blue-100 rounded-lg"}`,
                          children: E("reviewForms", l),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
            u.jsx("div", {
              className: "grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-1",
              children: ke.map((D) =>
                u.jsx(
                  Yp,
                  {
                    item: D,
                    language: l,
                    onlineUserCount: ld(D.IC_SN),
                    onDelete: fd,
                    onLock: (U) => hd(U, D.STATE === "鎖定"),
                    onAddMedicine: (U) => {
                      (I(U), b(!0));
                    },
                    onEditStaff: (U) => {
                      (I(U), d(!0));
                    },
                    batchMode: H,
                    isSelected: le.has(D.IC_SN),
                    onSelect: md,
                  },
                  D.GUID,
                ),
              ),
            }),
            ke.length === 0 &&
              V.length > 0 &&
              u.jsx("div", {
                className: "text-center py-12",
                children: u.jsx("p", {
                  className: "text-gray-500 text-lg",
                  children:
                    C === "review"
                      ? l === "en"
                        ? "No review forms found"
                        : "查無覆盤單"
                      : C === "daily"
                        ? l === "en"
                          ? "No daily inventory forms found"
                          : "查無每日盤點單"
                        : l === "en"
                          ? "No inventory forms found"
                          : "查無盤點單",
                }),
              }),
            V.length === 0 &&
              u.jsx("div", {
                className: "text-center py-12",
                children: u.jsx("p", {
                  className: "text-gray-500 text-lg",
                  children: E("noItemsFound", l),
                }),
              }),
          ],
        }),
        u.jsx("footer", {
          className:
            "w-full fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-1 px-6 text-center text-gray-600 text-sm z-10",
          children: u.jsx("div", {
            className: "mx-auto py-1 px-4 sm:px-6 lg:px-8",
            children: u.jsx("p", {
              className: "text-center text-base text-gray-500",
              children: "Copyright ©2025 鴻森智能科技",
            }),
          }),
        }),
        u.jsx(Jp, {
          isOpen: c,
          onClose: () => p(!1),
          language: l,
          onSearch: ad,
          setInventoryItems: ne,
        }),
        u.jsx(Zp, {
          isOpen: g,
          onClose: () => m(!1),
          language: l,
          onUploadSuccess: ud,
          sendMessage: r,
        }),
        u.jsx(em, {
          isOpen: w,
          onClose: () => _(!1),
          language: l,
          onCreateSuccess: cd,
          sendMessage: r,
          medCloudData: X,
          medQtyGroupData: an,
        }),
        u.jsx(tm, {
          isOpen: x,
          onClose: () => b(!1),
          inventoryId: S,
          language: l,
          onUpdateSuccess: Bt,
        }),
        u.jsx(nm, {
          isOpen: f,
          onClose: () => d(!1),
          inventoryId: S,
          language: l,
          onUpdateSuccess: Bt,
        }),
        u.jsx(rm, { isOpen: h, onClose: () => v(!1), language: l }),
      ],
    });
  };
function im() {
  return u.jsx(Vp, { children: u.jsx(ap, { children: u.jsx(sm, {}) }) });
}
Yc(document.getElementById("root")).render(
  u.jsx(N.StrictMode, { children: u.jsx(im, {}) }),
);
