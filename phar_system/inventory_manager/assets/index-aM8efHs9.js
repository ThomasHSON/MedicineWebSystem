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
var Ha = { exports: {} },
  zo = {},
  Ba = { exports: {} },
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
  Td = Symbol.for("react.portal"),
  Id = Symbol.for("react.fragment"),
  jd = Symbol.for("react.strict_mode"),
  Pd = Symbol.for("react.profiler"),
  bd = Symbol.for("react.provider"),
  Dd = Symbol.for("react.context"),
  Md = Symbol.for("react.forward_ref"),
  Rd = Symbol.for("react.suspense"),
  Ld = Symbol.for("react.memo"),
  $d = Symbol.for("react.lazy"),
  Tl = Symbol.iterator;
function Od(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Tl && e[Tl]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Wa = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Va = Object.assign,
  Qa = {};
function Fn(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Qa),
    (this.updater = n || Wa));
}
Fn.prototype.isReactComponent = {};
Fn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Fn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ka() {}
Ka.prototype = Fn.prototype;
function Ni(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Qa),
    (this.updater = n || Wa));
}
var Ti = (Ni.prototype = new Ka());
Ti.constructor = Ni;
Va(Ti, Fn.prototype);
Ti.isPureReactComponent = !0;
var Il = Array.isArray,
  qa = Object.prototype.hasOwnProperty,
  Ii = { current: null },
  Ga = { key: !0, ref: !0, __self: !0, __source: !0 };
function Xa(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      qa.call(t, r) && !Ga.hasOwnProperty(r) && (o[r] = t[r]);
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
    _owner: Ii.current,
  };
}
function zd(e, t) {
  return {
    $$typeof: Ir,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ji(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ir;
}
function Fd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var jl = /\/+/g;
function ss(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Fd("" + e.key)
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
          case Td:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + ss(i, 0) : r),
      Il(o)
        ? ((n = ""),
          e != null && (n = e.replace(jl, "$&/") + "/"),
          Zr(o, t, n, "", function (c) {
            return c;
          }))
        : o != null &&
          (ji(o) &&
            (o = zd(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(jl, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Il(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var a = r + ss(s, l);
      i += Zr(s, t, n, a, o);
    }
  else if (((a = Od(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(s = e.next()).done; )
      ((s = s.value), (a = r + ss(s, l++)), (i += Zr(s, t, n, a, o)));
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
function Rr(e, t, n) {
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
function Ad(e) {
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
var je = { current: null },
  eo = { transition: null },
  Ud = {
    ReactCurrentDispatcher: je,
    ReactCurrentBatchConfig: eo,
    ReactCurrentOwner: Ii,
  };
function Ya() {
  throw Error("act(...) is not supported in production builds of React.");
}
F.Children = {
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
    if (!ji(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
F.Component = Fn;
F.Fragment = Id;
F.Profiler = Pd;
F.PureComponent = Ni;
F.StrictMode = jd;
F.Suspense = Rd;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ud;
F.act = Ya;
F.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Va({}, e.props),
    o = e.key,
    s = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (i = Ii.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      qa.call(t, a) &&
        !Ga.hasOwnProperty(a) &&
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
      $$typeof: Dd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: bd, _context: e }),
    (e.Consumer = e)
  );
};
F.createElement = Xa;
F.createFactory = function (e) {
  var t = Xa.bind(null, e);
  return ((t.type = e), t);
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: Md, render: e };
};
F.isValidElement = ji;
F.lazy = function (e) {
  return { $$typeof: $d, _payload: { _status: -1, _result: e }, _init: Ad };
};
F.memo = function (e, t) {
  return { $$typeof: Ld, type: e, compare: t === void 0 ? null : t };
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
F.unstable_act = Ya;
F.useCallback = function (e, t) {
  return je.current.useCallback(e, t);
};
F.useContext = function (e) {
  return je.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
  return je.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
  return je.current.useEffect(e, t);
};
F.useId = function () {
  return je.current.useId();
};
F.useImperativeHandle = function (e, t, n) {
  return je.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function (e, t) {
  return je.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
  return je.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
  return je.current.useMemo(e, t);
};
F.useReducer = function (e, t, n) {
  return je.current.useReducer(e, t, n);
};
F.useRef = function (e) {
  return je.current.useRef(e);
};
F.useState = function (e) {
  return je.current.useState(e);
};
F.useSyncExternalStore = function (e, t, n) {
  return je.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function () {
  return je.current.useTransition();
};
F.version = "18.3.1";
Ba.exports = F;
var N = Ba.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hd = N,
  Bd = Symbol.for("react.element"),
  Wd = Symbol.for("react.fragment"),
  Vd = Object.prototype.hasOwnProperty,
  Qd = Hd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Kd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ja(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  (n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (i = t.ref));
  for (r in t) Vd.call(t, r) && !Kd.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Bd,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: Qd.current,
  };
}
zo.Fragment = Wd;
zo.jsx = Ja;
zo.jsxs = Ja;
Ha.exports = zo;
var u = Ha.exports,
  Za = { exports: {} },
  He = {},
  eu = { exports: {} },
  tu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, $) {
    var z = j.length;
    j.push($);
    e: for (; 0 < z; ) {
      var Y = (z - 1) >>> 1,
        oe = j[Y];
      if (0 < o(oe, $)) ((j[Y] = $), (j[z] = oe), (z = Y));
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var $ = j[0],
      z = j.pop();
    if (z !== $) {
      j[0] = z;
      e: for (var Y = 0, oe = j.length, un = oe >>> 1; Y < un; ) {
        var it = 2 * (Y + 1) - 1,
          cn = j[it],
          ft = it + 1,
          dn = j[ft];
        if (0 > o(cn, z))
          ft < oe && 0 > o(dn, cn)
            ? ((j[Y] = dn), (j[ft] = z), (Y = ft))
            : ((j[Y] = cn), (j[it] = z), (Y = it));
        else if (ft < oe && 0 > o(dn, z)) ((j[Y] = dn), (j[ft] = z), (Y = ft));
        else break e;
      }
    }
    return $;
  }
  function o(j, $) {
    var z = j.sortIndex - $.sortIndex;
    return z !== 0 ? z : j.id - $.id;
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
    _ = !1,
    x = !1,
    k = !1,
    L = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(j) {
    for (var $ = n(c); $ !== null; ) {
      if ($.callback === null) r(c);
      else if ($.startTime <= j)
        (r(c), ($.sortIndex = $.expirationTime), t(a, $));
      else break;
      $ = n(c);
    }
  }
  function y(j) {
    if (((k = !1), h(j), !x))
      if (n(a) !== null) ((x = !0), q(v));
      else {
        var $ = n(c);
        $ !== null && Ee(y, $.startTime - j);
      }
  }
  function v(j, $) {
    ((x = !1), k && ((k = !1), f(T), (T = -1)), (_ = !0));
    var z = m;
    try {
      for (
        h($), g = n(a);
        g !== null && (!(g.expirationTime > $) || (j && !H()));
      ) {
        var Y = g.callback;
        if (typeof Y == "function") {
          ((g.callback = null), (m = g.priorityLevel));
          var oe = Y(g.expirationTime <= $);
          (($ = e.unstable_now()),
            typeof oe == "function" ? (g.callback = oe) : g === n(a) && r(a),
            h($));
        } else r(a);
        g = n(a);
      }
      if (g !== null) var un = !0;
      else {
        var it = n(c);
        (it !== null && Ee(y, it.startTime - $), (un = !1));
      }
      return un;
    } finally {
      ((g = null), (m = z), (_ = !1));
    }
  }
  var C = !1,
    S = null,
    T = -1,
    R = 5,
    D = -1;
  function H() {
    return !(e.unstable_now() - D < R);
  }
  function Ye() {
    if (S !== null) {
      var j = e.unstable_now();
      D = j;
      var $ = !0;
      try {
        $ = S(!0, j);
      } finally {
        $ ? re() : ((C = !1), (S = null));
      }
    } else C = !1;
  }
  var re;
  if (typeof d == "function")
    re = function () {
      d(Ye);
    };
  else if (typeof MessageChannel < "u") {
    var B = new MessageChannel(),
      M = B.port2;
    ((B.port1.onmessage = Ye),
      (re = function () {
        M.postMessage(null);
      }));
  } else
    re = function () {
      L(Ye, 0);
    };
  function q(j) {
    ((S = j), C || ((C = !0), re()));
  }
  function Ee(j, $) {
    T = L(function () {
      j(e.unstable_now());
    }, $);
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
      x || _ || ((x = !0), q(v));
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
          var $ = 3;
          break;
        default:
          $ = m;
      }
      var z = m;
      m = $;
      try {
        return j();
      } finally {
        m = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, $) {
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
      var z = m;
      m = j;
      try {
        return $();
      } finally {
        m = z;
      }
    }),
    (e.unstable_scheduleCallback = function (j, $, z) {
      var Y = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? Y + z : Y))
          : (z = Y),
        j)
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
        (oe = z + oe),
        (j = {
          id: p++,
          callback: $,
          priorityLevel: j,
          startTime: z,
          expirationTime: oe,
          sortIndex: -1,
        }),
        z > Y
          ? ((j.sortIndex = z),
            t(c, j),
            n(a) === null &&
              j === n(c) &&
              (k ? (f(T), (T = -1)) : (k = !0), Ee(y, z - Y)))
          : ((j.sortIndex = oe), t(a, j), x || _ || ((x = !0), q(v))),
        j
      );
    }),
    (e.unstable_shouldYield = H),
    (e.unstable_wrapCallback = function (j) {
      var $ = m;
      return function () {
        var z = m;
        m = $;
        try {
          return j.apply(this, arguments);
        } finally {
          m = z;
        }
      };
    }));
})(tu);
eu.exports = tu;
var qd = eu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gd = N,
  Ue = qd;
function E(e) {
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
var nu = new Set(),
  ur = {};
function ln(e, t) {
  (bn(e, t), bn(e + "Capture", t));
}
function bn(e, t) {
  for (ur[e] = t, e = 0; e < t.length; e++) nu.add(t[e]);
}
var vt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ms = Object.prototype.hasOwnProperty,
  Xd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Pl = {},
  bl = {};
function Yd(e) {
  return Ms.call(bl, e)
    ? !0
    : Ms.call(Pl, e)
      ? !1
      : Xd.test(e)
        ? (bl[e] = !0)
        : ((Pl[e] = !0), !1);
}
function Jd(e, t, n, r) {
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
function Zd(e, t, n, r) {
  if (t === null || typeof t > "u" || Jd(e, t, n, r)) return !0;
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
function Pe(e, t, n, r, o, s, i) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = i));
}
var ve = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ve[e] = new Pe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ve[t] = new Pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ve[e] = new Pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ve[e] = new Pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ve[e] = new Pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ve[e] = new Pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ve[e] = new Pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ve[e] = new Pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ve[e] = new Pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Pi = /[\-:]([a-z])/g;
function bi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Pi, bi);
    ve[t] = new Pe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Pi, bi);
    ve[t] = new Pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Pi, bi);
  ve[t] = new Pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ve[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ve.xlinkHref = new Pe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ve[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Di(e, t, n, r) {
  var o = ve.hasOwnProperty(t) ? ve[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Zd(t, n, o, r) && (n = null),
    r || o === null
      ? Yd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var St = Gd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Lr = Symbol.for("react.element"),
  hn = Symbol.for("react.portal"),
  pn = Symbol.for("react.fragment"),
  Mi = Symbol.for("react.strict_mode"),
  Rs = Symbol.for("react.profiler"),
  ru = Symbol.for("react.provider"),
  ou = Symbol.for("react.context"),
  Ri = Symbol.for("react.forward_ref"),
  Ls = Symbol.for("react.suspense"),
  $s = Symbol.for("react.suspense_list"),
  Li = Symbol.for("react.memo"),
  Ct = Symbol.for("react.lazy"),
  su = Symbol.for("react.offscreen"),
  Dl = Symbol.iterator;
function Hn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Dl && e[Dl]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var te = Object.assign,
  is;
function Xn(e) {
  if (is === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      is = (t && t[1]) || "";
    }
  return (
    `
` +
    is +
    e
  );
}
var ls = !1;
function as(e, t) {
  if (!e || ls) return "";
  ls = !0;
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
    ((ls = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? Xn(e) : "";
}
function ef(e) {
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
      return ((e = as(e.type, !1)), e);
    case 11:
      return ((e = as(e.type.render, !1)), e);
    case 1:
      return ((e = as(e.type, !0)), e);
    default:
      return "";
  }
}
function Os(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case pn:
      return "Fragment";
    case hn:
      return "Portal";
    case Rs:
      return "Profiler";
    case Mi:
      return "StrictMode";
    case Ls:
      return "Suspense";
    case $s:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ou:
        return (e.displayName || "Context") + ".Consumer";
      case ru:
        return (e._context.displayName || "Context") + ".Provider";
      case Ri:
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
          t !== null ? t : Os(e.type) || "Memo"
        );
      case Ct:
        ((t = e._payload), (e = e._init));
        try {
          return Os(e(t));
        } catch {}
    }
  return null;
}
function tf(e) {
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
      return Os(t);
    case 8:
      return t === Mi ? "StrictMode" : "Mode";
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
function zt(e) {
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
function iu(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function nf(e) {
  var t = iu(e) ? "checked" : "value",
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
  e._valueTracker || (e._valueTracker = nf(e));
}
function lu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = iu(e) ? (e.checked ? "true" : "false") : e.value),
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
function zs(e, t) {
  var n = t.checked;
  return te({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ml(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = zt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function au(e, t) {
  ((t = t.checked), t != null && Di(e, "checked", t, !1));
}
function Fs(e, t) {
  au(e, t);
  var n = zt(t.value),
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
    ? As(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && As(e, t.type, zt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Rl(e, t, n) {
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
function As(e, t, n) {
  (t !== "number" || fo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Yn = Array.isArray;
function En(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      ((o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + zt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ((e[o].selected = !0), r && (e[o].defaultSelected = !0));
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Us(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return te({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ll(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(E(92));
      if (Yn(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: zt(n) };
}
function uu(e, t) {
  var n = zt(t.value),
    r = zt(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function $l(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function cu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Hs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? cu(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Or,
  du = (function (e) {
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
  rf = ["Webkit", "ms", "Moz", "O"];
Object.keys(er).forEach(function (e) {
  rf.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (er[t] = er[e]));
  });
});
function fu(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (er.hasOwnProperty(e) && er[e])
      ? ("" + t).trim()
      : t + "px";
}
function hu(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = fu(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o));
    }
}
var of = te(
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
function Bs(e, t) {
  if (t) {
    if (of[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function Ws(e, t) {
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
var Vs = null;
function $i(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Qs = null,
  Nn = null,
  Tn = null;
function Ol(e) {
  if ((e = br(e))) {
    if (typeof Qs != "function") throw Error(E(280));
    var t = e.stateNode;
    t && ((t = Bo(t)), Qs(e.stateNode, e.type, t));
  }
}
function pu(e) {
  Nn ? (Tn ? Tn.push(e) : (Tn = [e])) : (Nn = e);
}
function mu() {
  if (Nn) {
    var e = Nn,
      t = Tn;
    if (((Tn = Nn = null), Ol(e), t)) for (e = 0; e < t.length; e++) Ol(t[e]);
  }
}
function gu(e, t) {
  return e(t);
}
function yu() {}
var us = !1;
function vu(e, t, n) {
  if (us) return e(t, n);
  us = !0;
  try {
    return gu(e, t, n);
  } finally {
    ((us = !1), (Nn !== null || Tn !== null) && (yu(), mu()));
  }
}
function dr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Bo(n);
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
  if (n && typeof n != "function") throw Error(E(231, t, typeof n));
  return n;
}
var Ks = !1;
if (vt)
  try {
    var Bn = {};
    (Object.defineProperty(Bn, "passive", {
      get: function () {
        Ks = !0;
      },
    }),
      window.addEventListener("test", Bn, Bn),
      window.removeEventListener("test", Bn, Bn));
  } catch {
    Ks = !1;
  }
function sf(e, t, n, r, o, s, i, l, a) {
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
  qs = null,
  lf = {
    onError: function (e) {
      ((tr = !0), (ho = e));
    },
  };
function af(e, t, n, r, o, s, i, l, a) {
  ((tr = !1), (ho = null), sf.apply(lf, arguments));
}
function uf(e, t, n, r, o, s, i, l, a) {
  if ((af.apply(this, arguments), tr)) {
    if (tr) {
      var c = ho;
      ((tr = !1), (ho = null));
    } else throw Error(E(198));
    po || ((po = !0), (qs = c));
  }
}
function an(e) {
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
function wu(e) {
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
function zl(e) {
  if (an(e) !== e) throw Error(E(188));
}
function cf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = an(e)), t === null)) throw Error(E(188));
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
        if (s === n) return (zl(o), e);
        if (s === r) return (zl(o), t);
        s = s.sibling;
      }
      throw Error(E(188));
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
        if (!i) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function _u(e) {
  return ((e = cf(e)), e !== null ? xu(e) : null);
}
function xu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = xu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Su = Ue.unstable_scheduleCallback,
  Fl = Ue.unstable_cancelCallback,
  df = Ue.unstable_shouldYield,
  ff = Ue.unstable_requestPaint,
  ie = Ue.unstable_now,
  hf = Ue.unstable_getCurrentPriorityLevel,
  Oi = Ue.unstable_ImmediatePriority,
  ku = Ue.unstable_UserBlockingPriority,
  mo = Ue.unstable_NormalPriority,
  pf = Ue.unstable_LowPriority,
  Cu = Ue.unstable_IdlePriority,
  Fo = null,
  ct = null;
function mf(e) {
  if (ct && typeof ct.onCommitFiberRoot == "function")
    try {
      ct.onCommitFiberRoot(Fo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var rt = Math.clz32 ? Math.clz32 : vf,
  gf = Math.log,
  yf = Math.LN2;
function vf(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((gf(e) / yf) | 0)) | 0);
}
var zr = 64,
  Fr = 4194304;
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
      ((n = 31 - rt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o));
  return r;
}
function wf(e, t) {
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
function _f(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;
  ) {
    var i = 31 - rt(s),
      l = 1 << i,
      a = o[i];
    (a === -1
      ? (!(l & n) || l & r) && (o[i] = wf(l, t))
      : a <= t && (e.expiredLanes |= l),
      (s &= ~l));
  }
}
function Gs(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Eu() {
  var e = zr;
  return ((zr <<= 1), !(zr & 4194240) && (zr = 64), e);
}
function cs(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function jr(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - rt(t)),
    (e[t] = n));
}
function xf(e, t) {
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
    var o = 31 - rt(n),
      s = 1 << o;
    ((t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~s));
  }
}
function zi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - rt(n),
      o = 1 << r;
    ((o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o));
  }
}
var W = 0;
function Nu(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Tu,
  Fi,
  Iu,
  ju,
  Pu,
  Xs = !1,
  Ar = [],
  Pt = null,
  bt = null,
  Dt = null,
  fr = new Map(),
  hr = new Map(),
  Nt = [],
  Sf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Al(e, t) {
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
function kf(e, t, n, r, o) {
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
function bu(e) {
  var t = Kt(e.target);
  if (t !== null) {
    var n = an(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = wu(n)), t !== null)) {
          ((e.blockedOn = t),
            Pu(e.priority, function () {
              Iu(n);
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
    var n = Ys(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((Vs = r), n.target.dispatchEvent(r), (Vs = null));
    } else return ((t = br(n)), t !== null && Fi(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Ul(e, t, n) {
  to(e) && n.delete(t);
}
function Cf() {
  ((Xs = !1),
    Pt !== null && to(Pt) && (Pt = null),
    bt !== null && to(bt) && (bt = null),
    Dt !== null && to(Dt) && (Dt = null),
    fr.forEach(Ul),
    hr.forEach(Ul));
}
function Vn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Xs ||
      ((Xs = !0),
      Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority, Cf)));
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
    (bu(n), n.blockedOn === null && Nt.shift());
}
var In = St.ReactCurrentBatchConfig,
  yo = !0;
function Ef(e, t, n, r) {
  var o = W,
    s = In.transition;
  In.transition = null;
  try {
    ((W = 1), Ai(e, t, n, r));
  } finally {
    ((W = o), (In.transition = s));
  }
}
function Nf(e, t, n, r) {
  var o = W,
    s = In.transition;
  In.transition = null;
  try {
    ((W = 4), Ai(e, t, n, r));
  } finally {
    ((W = o), (In.transition = s));
  }
}
function Ai(e, t, n, r) {
  if (yo) {
    var o = Ys(e, t, n, r);
    if (o === null) (_s(e, t, r, vo, n), Al(e, r));
    else if (kf(o, e, t, n, r)) r.stopPropagation();
    else if ((Al(e, r), t & 4 && -1 < Sf.indexOf(e))) {
      for (; o !== null; ) {
        var s = br(o);
        if (
          (s !== null && Tu(s),
          (s = Ys(e, t, n, r)),
          s === null && _s(e, t, r, vo, n),
          s === o)
        )
          break;
        o = s;
      }
      o !== null && r.stopPropagation();
    } else _s(e, t, r, null, n);
  }
}
var vo = null;
function Ys(e, t, n, r) {
  if (((vo = null), (e = $i(r)), (e = Kt(e)), e !== null))
    if (((t = an(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = wu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((vo = e), null);
}
function Du(e) {
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
      switch (hf()) {
        case Oi:
          return 1;
        case ku:
          return 4;
        case mo:
        case pf:
          return 16;
        case Cu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var It = null,
  Ui = null,
  no = null;
function Mu() {
  if (no) return no;
  var e,
    t = Ui,
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
function Hl() {
  return !1;
}
function Be(e) {
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
        : Hl),
      (this.isPropagationStopped = Hl),
      this
    );
  }
  return (
    te(t.prototype, {
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
  Hi = Be(An),
  Pr = te({}, An, { view: 0, detail: 0 }),
  Tf = Be(Pr),
  ds,
  fs,
  Qn,
  Ao = te({}, Pr, {
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
    getModifierState: Bi,
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
              ? ((ds = e.screenX - Qn.screenX), (fs = e.screenY - Qn.screenY))
              : (fs = ds = 0),
            (Qn = e)),
          ds);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : fs;
    },
  }),
  Bl = Be(Ao),
  If = te({}, Ao, { dataTransfer: 0 }),
  jf = Be(If),
  Pf = te({}, Pr, { relatedTarget: 0 }),
  hs = Be(Pf),
  bf = te({}, An, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Df = Be(bf),
  Mf = te({}, An, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Rf = Be(Mf),
  Lf = te({}, An, { data: 0 }),
  Wl = Be(Lf),
  $f = {
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
  Of = {
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
  zf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Ff(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = zf[e]) ? !!t[e] : !1;
}
function Bi() {
  return Ff;
}
var Af = te({}, Pr, {
    key: function (e) {
      if (e.key) {
        var t = $f[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ro(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Of[e.keyCode] || "Unidentified"
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
    getModifierState: Bi,
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
  Uf = Be(Af),
  Hf = te({}, Ao, {
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
  Vl = Be(Hf),
  Bf = te({}, Pr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Bi,
  }),
  Wf = Be(Bf),
  Vf = te({}, An, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Qf = Be(Vf),
  Kf = te({}, Ao, {
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
  qf = Be(Kf),
  Gf = [9, 13, 27, 32],
  Wi = vt && "CompositionEvent" in window,
  nr = null;
vt && "documentMode" in document && (nr = document.documentMode);
var Xf = vt && "TextEvent" in window && !nr,
  Ru = vt && (!Wi || (nr && 8 < nr && 11 >= nr)),
  Ql = " ",
  Kl = !1;
function Lu(e, t) {
  switch (e) {
    case "keyup":
      return Gf.indexOf(t.keyCode) !== -1;
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
function $u(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var mn = !1;
function Yf(e, t) {
  switch (e) {
    case "compositionend":
      return $u(t);
    case "keypress":
      return t.which !== 32 ? null : ((Kl = !0), Ql);
    case "textInput":
      return ((e = t.data), e === Ql && Kl ? null : e);
    default:
      return null;
  }
}
function Jf(e, t) {
  if (mn)
    return e === "compositionend" || (!Wi && Lu(e, t))
      ? ((e = Mu()), (no = Ui = It = null), (mn = !1), e)
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
      return Ru && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Zf = {
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
function ql(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Zf[e.type] : t === "textarea";
}
function Ou(e, t, n, r) {
  (pu(r),
    (t = wo(t, "onChange")),
    0 < t.length &&
      ((n = new Hi("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var rr = null,
  mr = null;
function eh(e) {
  qu(e, 0);
}
function Uo(e) {
  var t = vn(e);
  if (lu(t)) return e;
}
function th(e, t) {
  if (e === "change") return t;
}
var zu = !1;
if (vt) {
  var ps;
  if (vt) {
    var ms = "oninput" in document;
    if (!ms) {
      var Gl = document.createElement("div");
      (Gl.setAttribute("oninput", "return;"),
        (ms = typeof Gl.oninput == "function"));
    }
    ps = ms;
  } else ps = !1;
  zu = ps && (!document.documentMode || 9 < document.documentMode);
}
function Xl() {
  rr && (rr.detachEvent("onpropertychange", Fu), (mr = rr = null));
}
function Fu(e) {
  if (e.propertyName === "value" && Uo(mr)) {
    var t = [];
    (Ou(t, mr, e, $i(e)), vu(eh, t));
  }
}
function nh(e, t, n) {
  e === "focusin"
    ? (Xl(), (rr = t), (mr = n), rr.attachEvent("onpropertychange", Fu))
    : e === "focusout" && Xl();
}
function rh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Uo(mr);
}
function oh(e, t) {
  if (e === "click") return Uo(t);
}
function sh(e, t) {
  if (e === "input" || e === "change") return Uo(t);
}
function ih(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var st = typeof Object.is == "function" ? Object.is : ih;
function gr(e, t) {
  if (st(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Ms.call(t, o) || !st(e[o], t[o])) return !1;
  }
  return !0;
}
function Yl(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Jl(e, t) {
  var n = Yl(e);
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
    n = Yl(n);
  }
}
function Au(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Au(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Uu() {
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
function Vi(e) {
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
function lh(e) {
  var t = Uu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Au(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Vi(n)) {
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
          (o = Jl(n, s)));
        var i = Jl(n, r);
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
var ah = vt && "documentMode" in document && 11 >= document.documentMode,
  gn = null,
  Js = null,
  or = null,
  Zs = !1;
function Zl(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Zs ||
    gn == null ||
    gn !== fo(r) ||
    ((r = gn),
    "selectionStart" in r && Vi(r)
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
      (r = wo(Js, "onSelect")),
      0 < r.length &&
        ((t = new Hi("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = gn))));
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
var yn = {
    animationend: Hr("Animation", "AnimationEnd"),
    animationiteration: Hr("Animation", "AnimationIteration"),
    animationstart: Hr("Animation", "AnimationStart"),
    transitionend: Hr("Transition", "TransitionEnd"),
  },
  gs = {},
  Hu = {};
vt &&
  ((Hu = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete yn.animationend.animation,
    delete yn.animationiteration.animation,
    delete yn.animationstart.animation),
  "TransitionEvent" in window || delete yn.transitionend.transition);
function Ho(e) {
  if (gs[e]) return gs[e];
  if (!yn[e]) return e;
  var t = yn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Hu) return (gs[e] = t[n]);
  return e;
}
var Bu = Ho("animationend"),
  Wu = Ho("animationiteration"),
  Vu = Ho("animationstart"),
  Qu = Ho("transitionend"),
  Ku = new Map(),
  ea =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Ut(e, t) {
  (Ku.set(e, t), ln(t, [e]));
}
for (var ys = 0; ys < ea.length; ys++) {
  var vs = ea[ys],
    uh = vs.toLowerCase(),
    ch = vs[0].toUpperCase() + vs.slice(1);
  Ut(uh, "on" + ch);
}
Ut(Bu, "onAnimationEnd");
Ut(Wu, "onAnimationIteration");
Ut(Vu, "onAnimationStart");
Ut("dblclick", "onDoubleClick");
Ut("focusin", "onFocus");
Ut("focusout", "onBlur");
Ut(Qu, "onTransitionEnd");
bn("onMouseEnter", ["mouseout", "mouseover"]);
bn("onMouseLeave", ["mouseout", "mouseover"]);
bn("onPointerEnter", ["pointerout", "pointerover"]);
bn("onPointerLeave", ["pointerout", "pointerover"]);
ln(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
ln(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
ln("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ln(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
ln(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
ln(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Zn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  dh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Zn));
function ta(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), uf(r, t, void 0, e), (e.currentTarget = null));
}
function qu(e, t) {
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
          (ta(o, l, c), (s = a));
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
          (ta(o, l, c), (s = a));
        }
    }
  }
  if (po) throw ((e = qs), (po = !1), (qs = null), e);
}
function Q(e, t) {
  var n = t[oi];
  n === void 0 && (n = t[oi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Gu(t, e, 2, !1), n.add(r));
}
function ws(e, t, n) {
  var r = 0;
  (t && (r |= 4), Gu(n, e, r, t));
}
var Br = "_reactListening" + Math.random().toString(36).slice(2);
function yr(e) {
  if (!e[Br]) {
    ((e[Br] = !0),
      nu.forEach(function (n) {
        n !== "selectionchange" && (dh.has(n) || ws(n, !1, e), ws(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Br] || ((t[Br] = !0), ws("selectionchange", !1, t));
  }
}
function Gu(e, t, n, r) {
  switch (Du(t)) {
    case 1:
      var o = Ef;
      break;
    case 4:
      o = Nf;
      break;
    default:
      o = Ai;
  }
  ((n = o.bind(null, t, n, e)),
    (o = void 0),
    !Ks ||
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
function _s(e, t, n, r, o) {
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
          if (((i = Kt(l)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = s = i;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  vu(function () {
    var c = s,
      p = $i(n),
      g = [];
    e: {
      var m = Ku.get(e);
      if (m !== void 0) {
        var _ = Hi,
          x = e;
        switch (e) {
          case "keypress":
            if (ro(n) === 0) break e;
          case "keydown":
          case "keyup":
            _ = Uf;
            break;
          case "focusin":
            ((x = "focus"), (_ = hs));
            break;
          case "focusout":
            ((x = "blur"), (_ = hs));
            break;
          case "beforeblur":
          case "afterblur":
            _ = hs;
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
            _ = Bl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            _ = jf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            _ = Wf;
            break;
          case Bu:
          case Wu:
          case Vu:
            _ = Df;
            break;
          case Qu:
            _ = Qf;
            break;
          case "scroll":
            _ = Tf;
            break;
          case "wheel":
            _ = qf;
            break;
          case "copy":
          case "cut":
          case "paste":
            _ = Rf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            _ = Vl;
        }
        var k = (t & 4) !== 0,
          L = !k && e === "scroll",
          f = k ? (m !== null ? m + "Capture" : null) : m;
        k = [];
        for (var d = c, h; d !== null; ) {
          h = d;
          var y = h.stateNode;
          if (
            (h.tag === 5 &&
              y !== null &&
              ((h = y),
              f !== null && ((y = dr(d, f)), y != null && k.push(vr(d, y, h)))),
            L)
          )
            break;
          d = d.return;
        }
        0 < k.length &&
          ((m = new _(m, x, null, n, p)), g.push({ event: m, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (_ = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Vs &&
            (x = n.relatedTarget || n.fromElement) &&
            (Kt(x) || x[wt]))
        )
          break e;
        if (
          (_ || m) &&
          ((m =
            p.window === p
              ? p
              : (m = p.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
          _
            ? ((x = n.relatedTarget || n.toElement),
              (_ = c),
              (x = x ? Kt(x) : null),
              x !== null &&
                ((L = an(x)), x !== L || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((_ = null), (x = c)),
          _ !== x)
        ) {
          if (
            ((k = Bl),
            (y = "onMouseLeave"),
            (f = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = Vl),
              (y = "onPointerLeave"),
              (f = "onPointerEnter"),
              (d = "pointer")),
            (L = _ == null ? m : vn(_)),
            (h = x == null ? m : vn(x)),
            (m = new k(y, d + "leave", _, n, p)),
            (m.target = L),
            (m.relatedTarget = h),
            (y = null),
            Kt(p) === c &&
              ((k = new k(f, d + "enter", x, n, p)),
              (k.target = h),
              (k.relatedTarget = L),
              (y = k)),
            (L = y),
            _ && x)
          )
            t: {
              for (k = _, f = x, d = 0, h = k; h; h = fn(h)) d++;
              for (h = 0, y = f; y; y = fn(y)) h++;
              for (; 0 < d - h; ) ((k = fn(k)), d--);
              for (; 0 < h - d; ) ((f = fn(f)), h--);
              for (; d--; ) {
                if (k === f || (f !== null && k === f.alternate)) break t;
                ((k = fn(k)), (f = fn(f)));
              }
              k = null;
            }
          else k = null;
          (_ !== null && na(g, m, _, k, !1),
            x !== null && L !== null && na(g, L, x, k, !0));
        }
      }
      e: {
        if (
          ((m = c ? vn(c) : window),
          (_ = m.nodeName && m.nodeName.toLowerCase()),
          _ === "select" || (_ === "input" && m.type === "file"))
        )
          var v = th;
        else if (ql(m))
          if (zu) v = sh;
          else {
            v = rh;
            var C = nh;
          }
        else
          (_ = m.nodeName) &&
            _.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (v = oh);
        if (v && (v = v(e, c))) {
          Ou(g, v, n, p);
          break e;
        }
        (C && C(e, m, c),
          e === "focusout" &&
            (C = m._wrapperState) &&
            C.controlled &&
            m.type === "number" &&
            As(m, "number", m.value));
      }
      switch (((C = c ? vn(c) : window), e)) {
        case "focusin":
          (ql(C) || C.contentEditable === "true") &&
            ((gn = C), (Js = c), (or = null));
          break;
        case "focusout":
          or = Js = gn = null;
          break;
        case "mousedown":
          Zs = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Zs = !1), Zl(g, n, p));
          break;
        case "selectionchange":
          if (ah) break;
        case "keydown":
        case "keyup":
          Zl(g, n, p);
      }
      var S;
      if (Wi)
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
        mn
          ? Lu(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      (T &&
        (Ru &&
          n.locale !== "ko" &&
          (mn || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && mn && (S = Mu())
            : ((It = p),
              (Ui = "value" in It ? It.value : It.textContent),
              (mn = !0))),
        (C = wo(c, T)),
        0 < C.length &&
          ((T = new Wl(T, e, null, n, p)),
          g.push({ event: T, listeners: C }),
          S ? (T.data = S) : ((S = $u(n)), S !== null && (T.data = S)))),
        (S = Xf ? Yf(e, n) : Jf(e, n)) &&
          ((c = wo(c, "onBeforeInput")),
          0 < c.length &&
            ((p = new Wl("onBeforeInput", "beforeinput", null, n, p)),
            g.push({ event: p, listeners: c }),
            (p.data = S))));
    }
    qu(g, t);
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
function fn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function na(e, t, n, r, o) {
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
var fh = /\r\n?/g,
  hh = /\u0000|\uFFFD/g;
function ra(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      fh,
      `
`,
    )
    .replace(hh, "");
}
function Wr(e, t, n) {
  if (((t = ra(t)), ra(e) !== t && n)) throw Error(E(425));
}
function _o() {}
var ei = null,
  ti = null;
function ni(e, t) {
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
var ri = typeof setTimeout == "function" ? setTimeout : void 0,
  ph = typeof clearTimeout == "function" ? clearTimeout : void 0,
  oa = typeof Promise == "function" ? Promise : void 0,
  mh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof oa < "u"
        ? function (e) {
            return oa.resolve(null).then(e).catch(gh);
          }
        : ri;
function gh(e) {
  setTimeout(function () {
    throw e;
  });
}
function xs(e, t) {
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
function sa(e) {
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
var Un = Math.random().toString(36).slice(2),
  ut = "__reactFiber$" + Un,
  wr = "__reactProps$" + Un,
  wt = "__reactContainer$" + Un,
  oi = "__reactEvents$" + Un,
  yh = "__reactListeners$" + Un,
  vh = "__reactHandles$" + Un;
function Kt(e) {
  var t = e[ut];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[wt] || n[ut])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = sa(e); e !== null; ) {
          if ((n = e[ut])) return n;
          e = sa(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function br(e) {
  return (
    (e = e[ut] || e[wt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function vn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function Bo(e) {
  return e[wr] || null;
}
var si = [],
  wn = -1;
function Ht(e) {
  return { current: e };
}
function K(e) {
  0 > wn || ((e.current = si[wn]), (si[wn] = null), wn--);
}
function V(e, t) {
  (wn++, (si[wn] = e.current), (e.current = t));
}
var Ft = {},
  Ce = Ht(Ft),
  Me = Ht(!1),
  en = Ft;
function Dn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ft;
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
function Re(e) {
  return ((e = e.childContextTypes), e != null);
}
function xo() {
  (K(Me), K(Ce));
}
function ia(e, t, n) {
  if (Ce.current !== Ft) throw Error(E(168));
  (V(Ce, t), V(Me, n));
}
function Xu(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(E(108, tf(e) || "Unknown", o));
  return te({}, n, r);
}
function So(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ft),
    (en = Ce.current),
    V(Ce, e),
    V(Me, Me.current),
    !0
  );
}
function la(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  (n
    ? ((e = Xu(e, t, en)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      K(Me),
      K(Ce),
      V(Ce, e))
    : K(Me),
    V(Me, n));
}
var pt = null,
  Wo = !1,
  Ss = !1;
function Yu(e) {
  pt === null ? (pt = [e]) : pt.push(e);
}
function wh(e) {
  ((Wo = !0), Yu(e));
}
function Bt() {
  if (!Ss && pt !== null) {
    Ss = !0;
    var e = 0,
      t = W;
    try {
      var n = pt;
      for (W = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((pt = null), (Wo = !1));
    } catch (o) {
      throw (pt !== null && (pt = pt.slice(e + 1)), Su(Oi, Bt), o);
    } finally {
      ((W = t), (Ss = !1));
    }
  }
  return null;
}
var _n = [],
  xn = 0,
  ko = null,
  Co = 0,
  Ve = [],
  Qe = 0,
  tn = null,
  mt = 1,
  gt = "";
function Vt(e, t) {
  ((_n[xn++] = Co), (_n[xn++] = ko), (ko = e), (Co = t));
}
function Ju(e, t, n) {
  ((Ve[Qe++] = mt), (Ve[Qe++] = gt), (Ve[Qe++] = tn), (tn = e));
  var r = mt;
  e = gt;
  var o = 32 - rt(r) - 1;
  ((r &= ~(1 << o)), (n += 1));
  var s = 32 - rt(t) + o;
  if (30 < s) {
    var i = o - (o % 5);
    ((s = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (mt = (1 << (32 - rt(t) + o)) | (n << o) | r),
      (gt = s + e));
  } else ((mt = (1 << s) | (n << o) | r), (gt = e));
}
function Qi(e) {
  e.return !== null && (Vt(e, 1), Ju(e, 1, 0));
}
function Ki(e) {
  for (; e === ko; )
    ((ko = _n[--xn]), (_n[xn] = null), (Co = _n[--xn]), (_n[xn] = null));
  for (; e === tn; )
    ((tn = Ve[--Qe]),
      (Ve[Qe] = null),
      (gt = Ve[--Qe]),
      (Ve[Qe] = null),
      (mt = Ve[--Qe]),
      (Ve[Qe] = null));
}
var Ae = null,
  ze = null,
  X = !1,
  tt = null;
function Zu(e, t) {
  var n = Ke(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function aa(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ae = e), (ze = Mt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ae = e), (ze = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = tn !== null ? { id: mt, overflow: gt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ke(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ae = e),
            (ze = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ii(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function li(e) {
  if (X) {
    var t = ze;
    if (t) {
      var n = t;
      if (!aa(e, t)) {
        if (ii(e)) throw Error(E(418));
        t = Mt(n.nextSibling);
        var r = Ae;
        t && aa(e, t)
          ? Zu(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (X = !1), (Ae = e));
      }
    } else {
      if (ii(e)) throw Error(E(418));
      ((e.flags = (e.flags & -4097) | 2), (X = !1), (Ae = e));
    }
  }
}
function ua(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ae = e;
}
function Vr(e) {
  if (e !== Ae) return !1;
  if (!X) return (ua(e), (X = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ni(e.type, e.memoizedProps))),
    t && (t = ze))
  ) {
    if (ii(e)) throw (ec(), Error(E(418)));
    for (; t; ) (Zu(e, t), (t = Mt(t.nextSibling)));
  }
  if ((ua(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ze = Mt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ze = null;
    }
  } else ze = Ae ? Mt(e.stateNode.nextSibling) : null;
  return !0;
}
function ec() {
  for (var e = ze; e; ) e = Mt(e.nextSibling);
}
function Mn() {
  ((ze = Ae = null), (X = !1));
}
function qi(e) {
  tt === null ? (tt = [e]) : tt.push(e);
}
var _h = St.ReactCurrentBatchConfig;
function Kn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
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
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function Qr(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      E(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function ca(e) {
  var t = e._init;
  return t(e._payload);
}
function tc(e) {
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
  function l(f, d, h, y) {
    return d === null || d.tag !== 6
      ? ((d = js(h, f.mode, y)), (d.return = f), d)
      : ((d = o(d, h)), (d.return = f), d);
  }
  function a(f, d, h, y) {
    var v = h.type;
    return v === pn
      ? p(f, d, h.props.children, y, h.key)
      : d !== null &&
          (d.elementType === v ||
            (typeof v == "object" &&
              v !== null &&
              v.$$typeof === Ct &&
              ca(v) === d.type))
        ? ((y = o(d, h.props)), (y.ref = Kn(f, d, h)), (y.return = f), y)
        : ((y = co(h.type, h.key, h.props, null, f.mode, y)),
          (y.ref = Kn(f, d, h)),
          (y.return = f),
          y);
  }
  function c(f, d, h, y) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== h.containerInfo ||
      d.stateNode.implementation !== h.implementation
      ? ((d = Ps(h, f.mode, y)), (d.return = f), d)
      : ((d = o(d, h.children || [])), (d.return = f), d);
  }
  function p(f, d, h, y, v) {
    return d === null || d.tag !== 7
      ? ((d = Yt(h, f.mode, y, v)), (d.return = f), d)
      : ((d = o(d, h)), (d.return = f), d);
  }
  function g(f, d, h) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return ((d = js("" + d, f.mode, h)), (d.return = f), d);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Lr:
          return (
            (h = co(d.type, d.key, d.props, null, f.mode, h)),
            (h.ref = Kn(f, null, d)),
            (h.return = f),
            h
          );
        case hn:
          return ((d = Ps(d, f.mode, h)), (d.return = f), d);
        case Ct:
          var y = d._init;
          return g(f, y(d._payload), h);
      }
      if (Yn(d) || Hn(d))
        return ((d = Yt(d, f.mode, h, null)), (d.return = f), d);
      Qr(f, d);
    }
    return null;
  }
  function m(f, d, h, y) {
    var v = d !== null ? d.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return v !== null ? null : l(f, d, "" + h, y);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Lr:
          return h.key === v ? a(f, d, h, y) : null;
        case hn:
          return h.key === v ? c(f, d, h, y) : null;
        case Ct:
          return ((v = h._init), m(f, d, v(h._payload), y));
      }
      if (Yn(h) || Hn(h)) return v !== null ? null : p(f, d, h, y, null);
      Qr(f, h);
    }
    return null;
  }
  function _(f, d, h, y, v) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return ((f = f.get(h) || null), l(d, f, "" + y, v));
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Lr:
          return (
            (f = f.get(y.key === null ? h : y.key) || null),
            a(d, f, y, v)
          );
        case hn:
          return (
            (f = f.get(y.key === null ? h : y.key) || null),
            c(d, f, y, v)
          );
        case Ct:
          var C = y._init;
          return _(f, d, h, C(y._payload), v);
      }
      if (Yn(y) || Hn(y)) return ((f = f.get(h) || null), p(d, f, y, v, null));
      Qr(d, y);
    }
    return null;
  }
  function x(f, d, h, y) {
    for (
      var v = null, C = null, S = d, T = (d = 0), R = null;
      S !== null && T < h.length;
      T++
    ) {
      S.index > T ? ((R = S), (S = null)) : (R = S.sibling);
      var D = m(f, S, h[T], y);
      if (D === null) {
        S === null && (S = R);
        break;
      }
      (e && S && D.alternate === null && t(f, S),
        (d = s(D, d, T)),
        C === null ? (v = D) : (C.sibling = D),
        (C = D),
        (S = R));
    }
    if (T === h.length) return (n(f, S), X && Vt(f, T), v);
    if (S === null) {
      for (; T < h.length; T++)
        ((S = g(f, h[T], y)),
          S !== null &&
            ((d = s(S, d, T)),
            C === null ? (v = S) : (C.sibling = S),
            (C = S)));
      return (X && Vt(f, T), v);
    }
    for (S = r(f, S); T < h.length; T++)
      ((R = _(S, f, T, h[T], y)),
        R !== null &&
          (e && R.alternate !== null && S.delete(R.key === null ? T : R.key),
          (d = s(R, d, T)),
          C === null ? (v = R) : (C.sibling = R),
          (C = R)));
    return (
      e &&
        S.forEach(function (H) {
          return t(f, H);
        }),
      X && Vt(f, T),
      v
    );
  }
  function k(f, d, h, y) {
    var v = Hn(h);
    if (typeof v != "function") throw Error(E(150));
    if (((h = v.call(h)), h == null)) throw Error(E(151));
    for (
      var C = (v = null), S = d, T = (d = 0), R = null, D = h.next();
      S !== null && !D.done;
      T++, D = h.next()
    ) {
      S.index > T ? ((R = S), (S = null)) : (R = S.sibling);
      var H = m(f, S, D.value, y);
      if (H === null) {
        S === null && (S = R);
        break;
      }
      (e && S && H.alternate === null && t(f, S),
        (d = s(H, d, T)),
        C === null ? (v = H) : (C.sibling = H),
        (C = H),
        (S = R));
    }
    if (D.done) return (n(f, S), X && Vt(f, T), v);
    if (S === null) {
      for (; !D.done; T++, D = h.next())
        ((D = g(f, D.value, y)),
          D !== null &&
            ((d = s(D, d, T)),
            C === null ? (v = D) : (C.sibling = D),
            (C = D)));
      return (X && Vt(f, T), v);
    }
    for (S = r(f, S); !D.done; T++, D = h.next())
      ((D = _(S, f, T, D.value, y)),
        D !== null &&
          (e && D.alternate !== null && S.delete(D.key === null ? T : D.key),
          (d = s(D, d, T)),
          C === null ? (v = D) : (C.sibling = D),
          (C = D)));
    return (
      e &&
        S.forEach(function (Ye) {
          return t(f, Ye);
        }),
      X && Vt(f, T),
      v
    );
  }
  function L(f, d, h, y) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === pn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case Lr:
          e: {
            for (var v = h.key, C = d; C !== null; ) {
              if (C.key === v) {
                if (((v = h.type), v === pn)) {
                  if (C.tag === 7) {
                    (n(f, C.sibling),
                      (d = o(C, h.props.children)),
                      (d.return = f),
                      (f = d));
                    break e;
                  }
                } else if (
                  C.elementType === v ||
                  (typeof v == "object" &&
                    v !== null &&
                    v.$$typeof === Ct &&
                    ca(v) === C.type)
                ) {
                  (n(f, C.sibling),
                    (d = o(C, h.props)),
                    (d.ref = Kn(f, C, h)),
                    (d.return = f),
                    (f = d));
                  break e;
                }
                n(f, C);
                break;
              } else t(f, C);
              C = C.sibling;
            }
            h.type === pn
              ? ((d = Yt(h.props.children, f.mode, y, h.key)),
                (d.return = f),
                (f = d))
              : ((y = co(h.type, h.key, h.props, null, f.mode, y)),
                (y.ref = Kn(f, d, h)),
                (y.return = f),
                (f = y));
          }
          return i(f);
        case hn:
          e: {
            for (C = h.key; d !== null; ) {
              if (d.key === C)
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
            ((d = Ps(h, f.mode, y)), (d.return = f), (f = d));
          }
          return i(f);
        case Ct:
          return ((C = h._init), L(f, d, C(h._payload), y));
      }
      if (Yn(h)) return x(f, d, h, y);
      if (Hn(h)) return k(f, d, h, y);
      Qr(f, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        d !== null && d.tag === 6
          ? (n(f, d.sibling), (d = o(d, h)), (d.return = f), (f = d))
          : (n(f, d), (d = js(h, f.mode, y)), (d.return = f), (f = d)),
        i(f))
      : n(f, d);
  }
  return L;
}
var Rn = tc(!0),
  nc = tc(!1),
  Eo = Ht(null),
  No = null,
  Sn = null,
  Gi = null;
function Xi() {
  Gi = Sn = No = null;
}
function Yi(e) {
  var t = Eo.current;
  (K(Eo), (e._currentValue = t));
}
function ai(e, t, n) {
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
function jn(e, t) {
  ((No = e),
    (Gi = Sn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (De = !0), (e.firstContext = null)));
}
function Ge(e) {
  var t = e._currentValue;
  if (Gi !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Sn === null)) {
      if (No === null) throw Error(E(308));
      ((Sn = e), (No.dependencies = { lanes: 0, firstContext: e }));
    } else Sn = Sn.next = e;
  return t;
}
var qt = null;
function Ji(e) {
  qt === null ? (qt = [e]) : qt.push(e);
}
function rc(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Ji(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    _t(e, r)
  );
}
function _t(e, t) {
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
function Zi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function oc(e, t) {
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
function yt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Rt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), A & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      _t(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Ji(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    _t(e, n)
  );
}
function oo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), zi(e, n));
  }
}
function da(e, t) {
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
        _ = l.eventTime;
      if ((r & m) === m) {
        p !== null &&
          (p = p.next =
            {
              eventTime: _,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var x = e,
            k = l;
          switch (((m = t), (_ = n), k.tag)) {
            case 1:
              if (((x = k.payload), typeof x == "function")) {
                g = x.call(_, g, m);
                break e;
              }
              g = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = k.payload),
                (m = typeof x == "function" ? x.call(_, g, m) : x),
                m == null)
              )
                break e;
              g = te({}, g, m);
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
        ((_ = {
          eventTime: _,
          lane: m,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          p === null ? ((c = p = _), (a = g)) : (p = p.next = _),
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
    ((rn |= i), (e.lanes = i), (e.memoizedState = g));
  }
}
function fa(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(E(191, o));
        o.call(r);
      }
    }
}
var Dr = {},
  dt = Ht(Dr),
  _r = Ht(Dr),
  xr = Ht(Dr);
function Gt(e) {
  if (e === Dr) throw Error(E(174));
  return e;
}
function el(e, t) {
  switch ((V(xr, t), V(_r, e), V(dt, Dr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Hs(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Hs(t, e)));
  }
  (K(dt), V(dt, t));
}
function Ln() {
  (K(dt), K(_r), K(xr));
}
function sc(e) {
  Gt(xr.current);
  var t = Gt(dt.current),
    n = Hs(t, e.type);
  t !== n && (V(_r, e), V(dt, n));
}
function tl(e) {
  _r.current === e && (K(dt), K(_r));
}
var J = Ht(0);
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
var ks = [];
function nl() {
  for (var e = 0; e < ks.length; e++)
    ks[e]._workInProgressVersionPrimary = null;
  ks.length = 0;
}
var so = St.ReactCurrentDispatcher,
  Cs = St.ReactCurrentBatchConfig,
  nn = 0,
  ee = null,
  de = null,
  he = null,
  jo = !1,
  sr = !1,
  Sr = 0,
  xh = 0;
function _e() {
  throw Error(E(321));
}
function rl(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!st(e[n], t[n])) return !1;
  return !0;
}
function ol(e, t, n, r, o, s) {
  if (
    ((nn = s),
    (ee = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (so.current = e === null || e.memoizedState === null ? Eh : Nh),
    (e = n(r, o)),
    sr)
  ) {
    s = 0;
    do {
      if (((sr = !1), (Sr = 0), 25 <= s)) throw Error(E(301));
      ((s += 1),
        (he = de = null),
        (t.updateQueue = null),
        (so.current = Th),
        (e = n(r, o)));
    } while (sr);
  }
  if (
    ((so.current = Po),
    (t = de !== null && de.next !== null),
    (nn = 0),
    (he = de = ee = null),
    (jo = !1),
    t)
  )
    throw Error(E(300));
  return e;
}
function sl() {
  var e = Sr !== 0;
  return ((Sr = 0), e);
}
function at() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (he === null ? (ee.memoizedState = he = e) : (he = he.next = e), he);
}
function Xe() {
  if (de === null) {
    var e = ee.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = de.next;
  var t = he === null ? ee.memoizedState : he.next;
  if (t !== null) ((he = t), (de = e));
  else {
    if (e === null) throw Error(E(310));
    ((de = e),
      (e = {
        memoizedState: de.memoizedState,
        baseState: de.baseState,
        baseQueue: de.baseQueue,
        queue: de.queue,
        next: null,
      }),
      he === null ? (ee.memoizedState = he = e) : (he = he.next = e));
  }
  return he;
}
function kr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Es(e) {
  var t = Xe(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = de,
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
      if ((nn & p) === p)
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
          (ee.lanes |= p),
          (rn |= p));
      }
      c = c.next;
    } while (c !== null && c !== s);
    (a === null ? (i = r) : (a.next = l),
      st(r, t.memoizedState) || (De = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do ((s = o.lane), (ee.lanes |= s), (rn |= s), (o = o.next));
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ns(e) {
  var t = Xe(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    s = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do ((s = e(s, i.action)), (i = i.next));
    while (i !== o);
    (st(s, t.memoizedState) || (De = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s));
  }
  return [s, r];
}
function ic() {}
function lc(e, t) {
  var n = ee,
    r = Xe(),
    o = t(),
    s = !st(r.memoizedState, o);
  if (
    (s && ((r.memoizedState = o), (De = !0)),
    (r = r.queue),
    il(cc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (he !== null && he.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Cr(9, uc.bind(null, n, r, o, t), void 0, null),
      pe === null)
    )
      throw Error(E(349));
    nn & 30 || ac(n, t, o);
  }
  return o;
}
function ac(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ee.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function uc(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), dc(t) && fc(e));
}
function cc(e, t, n) {
  return n(function () {
    dc(t) && fc(e);
  });
}
function dc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !st(e, n);
  } catch {
    return !0;
  }
}
function fc(e) {
  var t = _t(e, 1);
  t !== null && ot(t, e, 1, -1);
}
function ha(e) {
  var t = at();
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
    (e = e.dispatch = Ch.bind(null, ee, e)),
    [t.memoizedState, e]
  );
}
function Cr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ee.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function hc() {
  return Xe().memoizedState;
}
function io(e, t, n, r) {
  var o = at();
  ((ee.flags |= e),
    (o.memoizedState = Cr(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Vo(e, t, n, r) {
  var o = Xe();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (de !== null) {
    var i = de.memoizedState;
    if (((s = i.destroy), r !== null && rl(r, i.deps))) {
      o.memoizedState = Cr(t, n, s, r);
      return;
    }
  }
  ((ee.flags |= e), (o.memoizedState = Cr(1 | t, n, s, r)));
}
function pa(e, t) {
  return io(8390656, 8, e, t);
}
function il(e, t) {
  return Vo(2048, 8, e, t);
}
function pc(e, t) {
  return Vo(4, 2, e, t);
}
function mc(e, t) {
  return Vo(4, 4, e, t);
}
function gc(e, t) {
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
function yc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Vo(4, 4, gc.bind(null, t, e), n)
  );
}
function ll() {}
function vc(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && rl(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function wc(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && rl(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function _c(e, t, n) {
  return nn & 21
    ? (st(n, t) || ((n = Eu()), (ee.lanes |= n), (rn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (De = !0)), (e.memoizedState = n));
}
function Sh(e, t) {
  var n = W;
  ((W = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = Cs.transition;
  Cs.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((W = n), (Cs.transition = r));
  }
}
function xc() {
  return Xe().memoizedState;
}
function kh(e, t, n) {
  var r = $t(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Sc(e))
  )
    kc(t, n);
  else if (((n = rc(e, t, n, r)), n !== null)) {
    var o = Ie();
    (ot(n, e, r, o), Cc(n, t, r));
  }
}
function Ch(e, t, n) {
  var r = $t(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Sc(e)) kc(t, o);
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
        if (((o.hasEagerState = !0), (o.eagerState = l), st(l, i))) {
          var a = t.interleaved;
          (a === null
            ? ((o.next = o), Ji(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o));
          return;
        }
      } catch {
      } finally {
      }
    ((n = rc(e, t, o, r)),
      n !== null && ((o = Ie()), ot(n, e, r, o), Cc(n, t, r)));
  }
}
function Sc(e) {
  var t = e.alternate;
  return e === ee || (t !== null && t === ee);
}
function kc(e, t) {
  sr = jo = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function Cc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), zi(e, n));
  }
}
var Po = {
    readContext: Ge,
    useCallback: _e,
    useContext: _e,
    useEffect: _e,
    useImperativeHandle: _e,
    useInsertionEffect: _e,
    useLayoutEffect: _e,
    useMemo: _e,
    useReducer: _e,
    useRef: _e,
    useState: _e,
    useDebugValue: _e,
    useDeferredValue: _e,
    useTransition: _e,
    useMutableSource: _e,
    useSyncExternalStore: _e,
    useId: _e,
    unstable_isNewReconciler: !1,
  },
  Eh = {
    readContext: Ge,
    useCallback: function (e, t) {
      return ((at().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Ge,
    useEffect: pa,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        io(4194308, 4, gc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return io(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return io(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = at();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = at();
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
        (e = e.dispatch = kh.bind(null, ee, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = at();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: ha,
    useDebugValue: ll,
    useDeferredValue: function (e) {
      return (at().memoizedState = e);
    },
    useTransition: function () {
      var e = ha(!1),
        t = e[0];
      return ((e = Sh.bind(null, e[1])), (at().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ee,
        o = at();
      if (X) {
        if (n === void 0) throw Error(E(407));
        n = n();
      } else {
        if (((n = t()), pe === null)) throw Error(E(349));
        nn & 30 || ac(r, t, n);
      }
      o.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (o.queue = s),
        pa(cc.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Cr(9, uc.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = at(),
        t = pe.identifierPrefix;
      if (X) {
        var n = gt,
          r = mt;
        ((n = (r & ~(1 << (32 - rt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Sr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = xh++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Nh = {
    readContext: Ge,
    useCallback: vc,
    useContext: Ge,
    useEffect: il,
    useImperativeHandle: yc,
    useInsertionEffect: pc,
    useLayoutEffect: mc,
    useMemo: wc,
    useReducer: Es,
    useRef: hc,
    useState: function () {
      return Es(kr);
    },
    useDebugValue: ll,
    useDeferredValue: function (e) {
      var t = Xe();
      return _c(t, de.memoizedState, e);
    },
    useTransition: function () {
      var e = Es(kr)[0],
        t = Xe().memoizedState;
      return [e, t];
    },
    useMutableSource: ic,
    useSyncExternalStore: lc,
    useId: xc,
    unstable_isNewReconciler: !1,
  },
  Th = {
    readContext: Ge,
    useCallback: vc,
    useContext: Ge,
    useEffect: il,
    useImperativeHandle: yc,
    useInsertionEffect: pc,
    useLayoutEffect: mc,
    useMemo: wc,
    useReducer: Ns,
    useRef: hc,
    useState: function () {
      return Ns(kr);
    },
    useDebugValue: ll,
    useDeferredValue: function (e) {
      var t = Xe();
      return de === null ? (t.memoizedState = e) : _c(t, de.memoizedState, e);
    },
    useTransition: function () {
      var e = Ns(kr)[0],
        t = Xe().memoizedState;
      return [e, t];
    },
    useMutableSource: ic,
    useSyncExternalStore: lc,
    useId: xc,
    unstable_isNewReconciler: !1,
  };
function Ze(e, t) {
  if (e && e.defaultProps) {
    ((t = te({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ui(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : te({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var Qo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? an(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ie(),
      o = $t(e),
      s = yt(r, o);
    ((s.payload = t),
      n != null && (s.callback = n),
      (t = Rt(e, s, o)),
      t !== null && (ot(t, e, o, r), oo(t, e, o)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ie(),
      o = $t(e),
      s = yt(r, o);
    ((s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Rt(e, s, o)),
      t !== null && (ot(t, e, o, r), oo(t, e, o)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ie(),
      r = $t(e),
      o = yt(n, r);
    ((o.tag = 2),
      t != null && (o.callback = t),
      (t = Rt(e, o, r)),
      t !== null && (ot(t, e, r, n), oo(t, e, r)));
  },
};
function ma(e, t, n, r, o, s, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !gr(n, r) || !gr(o, s)
        : !0
  );
}
function Ec(e, t, n) {
  var r = !1,
    o = Ft,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Ge(s))
      : ((o = Re(t) ? en : Ce.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Dn(e, o) : Ft)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Qo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function ga(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Qo.enqueueReplaceState(t, t.state, null));
}
function ci(e, t, n, r) {
  var o = e.stateNode;
  ((o.props = n), (o.state = e.memoizedState), (o.refs = {}), Zi(e));
  var s = t.contextType;
  (typeof s == "object" && s !== null
    ? (o.context = Ge(s))
    : ((s = Re(t) ? en : Ce.current), (o.context = Dn(e, s))),
    (o.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (ui(e, t, s, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Qo.enqueueReplaceState(o, o.state, null),
      To(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308));
}
function $n(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += ef(r)), (r = r.return));
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
function Ts(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function di(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Ih = typeof WeakMap == "function" ? WeakMap : Map;
function Nc(e, t, n) {
  ((n = yt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (Do || ((Do = !0), (xi = r)), di(e, t));
    }),
    n
  );
}
function Tc(e, t, n) {
  ((n = yt(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    ((n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        di(e, t);
      }));
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        (di(e, t),
          typeof r != "function" &&
            (Lt === null ? (Lt = new Set([this])) : Lt.add(this)));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function ya(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Ih();
    var o = new Set();
    r.set(t, o);
  } else ((o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o)));
  o.has(n) || (o.add(n), (e = Hh.bind(null, e, t, n)), t.then(e, e));
}
function va(e) {
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
function wa(e, t, n, r, o) {
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
              : ((t = yt(-1, 1)), (t.tag = 2), Rt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var jh = St.ReactCurrentOwner,
  De = !1;
function Ne(e, t, n, r) {
  t.child = e === null ? nc(t, null, n, r) : Rn(t, e.child, n, r);
}
function _a(e, t, n, r, o) {
  n = n.render;
  var s = t.ref;
  return (
    jn(t, o),
    (r = ol(e, t, n, r, s, o)),
    (n = sl()),
    e !== null && !De
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        xt(e, t, o))
      : (X && n && Qi(t), (t.flags |= 1), Ne(e, t, r, o), t.child)
  );
}
function xa(e, t, n, r, o) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !ml(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), Ic(e, t, s, r, o))
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
      return xt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Ot(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ic(e, t, n, r, o) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (gr(s, r) && e.ref === t.ref)
      if (((De = !1), (t.pendingProps = r = s), (e.lanes & o) !== 0))
        e.flags & 131072 && (De = !0);
      else return ((t.lanes = e.lanes), xt(e, t, o));
  }
  return fi(e, t, n, r, o);
}
function jc(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        V(Cn, Oe),
        (Oe |= n));
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
          V(Cn, Oe),
          (Oe |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        V(Cn, Oe),
        (Oe |= r));
    }
  else
    (s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      V(Cn, Oe),
      (Oe |= r));
  return (Ne(e, t, o, n), t.child);
}
function Pc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function fi(e, t, n, r, o) {
  var s = Re(n) ? en : Ce.current;
  return (
    (s = Dn(t, s)),
    jn(t, o),
    (n = ol(e, t, n, r, s, o)),
    (r = sl()),
    e !== null && !De
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        xt(e, t, o))
      : (X && r && Qi(t), (t.flags |= 1), Ne(e, t, n, o), t.child)
  );
}
function Sa(e, t, n, r, o) {
  if (Re(n)) {
    var s = !0;
    So(t);
  } else s = !1;
  if ((jn(t, o), t.stateNode === null))
    (lo(e, t), Ec(t, n, r), ci(t, n, r, o), (r = !0));
  else if (e === null) {
    var i = t.stateNode,
      l = t.memoizedProps;
    i.props = l;
    var a = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ge(c))
      : ((c = Re(n) ? en : Ce.current), (c = Dn(t, c)));
    var p = n.getDerivedStateFromProps,
      g =
        typeof p == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    (g ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((l !== r || a !== c) && ga(t, i, r, c)),
      (Et = !1));
    var m = t.memoizedState;
    ((i.state = m),
      To(t, r, i, o),
      (a = t.memoizedState),
      l !== r || m !== a || Me.current || Et
        ? (typeof p == "function" && (ui(t, n, p, r), (a = t.memoizedState)),
          (l = Et || ma(t, n, l, r, m, a, c))
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
      oc(e, t),
      (l = t.memoizedProps),
      (c = t.type === t.elementType ? l : Ze(t.type, l)),
      (i.props = c),
      (g = t.pendingProps),
      (m = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Ge(a))
        : ((a = Re(n) ? en : Ce.current), (a = Dn(t, a))));
    var _ = n.getDerivedStateFromProps;
    ((p =
      typeof _ == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((l !== g || m !== a) && ga(t, i, r, a)),
      (Et = !1),
      (m = t.memoizedState),
      (i.state = m),
      To(t, r, i, o));
    var x = t.memoizedState;
    l !== g || m !== x || Me.current || Et
      ? (typeof _ == "function" && (ui(t, n, _, r), (x = t.memoizedState)),
        (c = Et || ma(t, n, c, r, m, x, a) || !1)
          ? (p ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, x, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, x, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (l === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (i.props = r),
        (i.state = x),
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
  return hi(e, t, n, r, s, o);
}
function hi(e, t, n, r, o, s) {
  Pc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return (o && la(t, n, !1), xt(e, t, s));
  ((r = t.stateNode), (jh.current = t));
  var l =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Rn(t, e.child, null, s)), (t.child = Rn(t, null, l, s)))
      : Ne(e, t, l, s),
    (t.memoizedState = r.state),
    o && la(t, n, !0),
    t.child
  );
}
function bc(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? ia(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ia(e, t.context, !1),
    el(e, t.containerInfo));
}
function ka(e, t, n, r, o) {
  return (Mn(), qi(o), (t.flags |= 256), Ne(e, t, n, r), t.child);
}
var pi = { dehydrated: null, treeContext: null, retryLane: 0 };
function mi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Dc(e, t, n) {
  var r = t.pendingProps,
    o = J.current,
    s = !1,
    i = (t.flags & 128) !== 0,
    l;
  if (
    ((l = i) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    V(J, o & 1),
    e === null)
  )
    return (
      li(t),
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
              (e = Yt(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = mi(n)),
              (t.memoizedState = pi),
              e)
            : al(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return Ph(e, t, i, r, l, o, n);
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
      l !== null ? (s = Ot(l, s)) : ((s = Yt(s, i, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? mi(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (s.memoizedState = i),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = pi),
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
function al(e, t) {
  return (
    (t = Go({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Kr(e, t, n, r) {
  return (
    r !== null && qi(r),
    Rn(t, e.child, null, n),
    (e = al(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Ph(e, t, n, r, o, s, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ts(Error(E(422)))), Kr(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((s = r.fallback),
          (o = t.mode),
          (r = Go({ mode: "visible", children: r.children }, o, 0, null)),
          (s = Yt(s, o, i, null)),
          (s.flags |= 2),
          (r.return = t),
          (s.return = t),
          (r.sibling = s),
          (t.child = r),
          t.mode & 1 && Rn(t, e.child, null, i),
          (t.child.memoizedState = mi(i)),
          (t.memoizedState = pi),
          s);
  if (!(t.mode & 1)) return Kr(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (
      (r = l),
      (s = Error(E(419))),
      (r = Ts(s, r, void 0)),
      Kr(e, t, i, r)
    );
  }
  if (((l = (i & e.childLanes) !== 0), De || l)) {
    if (((r = pe), r !== null)) {
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
          ((s.retryLane = o), _t(e, o), ot(r, e, o, -1)));
    }
    return (pl(), (r = Ts(Error(E(421)))), Kr(e, t, i, r));
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Bh.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (ze = Mt(o.nextSibling)),
      (Ae = t),
      (X = !0),
      (tt = null),
      e !== null &&
        ((Ve[Qe++] = mt),
        (Ve[Qe++] = gt),
        (Ve[Qe++] = tn),
        (mt = e.id),
        (gt = e.overflow),
        (tn = t)),
      (t = al(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ca(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), ai(e.return, t, n));
}
function Is(e, t, n, r, o) {
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
function Mc(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    s = r.tail;
  if ((Ne(e, t, r.children, n), (r = J.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ca(e, n, t);
        else if (e.tag === 19) Ca(e, n, t);
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
  if ((V(J, r), !(t.mode & 1))) t.memoizedState = null;
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
          Is(t, !1, o, n, s));
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Io(e) === null)) {
            t.child = o;
            break;
          }
          ((e = o.sibling), (o.sibling = n), (n = o), (o = e));
        }
        Is(t, !0, n, null, s);
        break;
      case "together":
        Is(t, !1, null, null, void 0);
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
function xt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (rn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
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
function bh(e, t, n) {
  switch (t.tag) {
    case 3:
      (bc(t), Mn());
      break;
    case 5:
      sc(t);
      break;
    case 1:
      Re(t.type) && So(t);
      break;
    case 4:
      el(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      (V(Eo, r._currentValue), (r._currentValue = o));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (V(J, J.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Dc(e, t, n)
            : (V(J, J.current & 1),
              (e = xt(e, t, n)),
              e !== null ? e.sibling : null);
      V(J, J.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Mc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        V(J, J.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), jc(e, t, n));
  }
  return xt(e, t, n);
}
var Rc, gi, Lc, $c;
Rc = function (e, t) {
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
gi = function () {};
Lc = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    ((e = t.stateNode), Gt(dt.current));
    var s = null;
    switch (n) {
      case "input":
        ((o = zs(e, o)), (r = zs(e, r)), (s = []));
        break;
      case "select":
        ((o = te({}, o, { value: void 0 })),
          (r = te({}, r, { value: void 0 })),
          (s = []));
        break;
      case "textarea":
        ((o = Us(e, o)), (r = Us(e, r)), (s = []));
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = _o);
    }
    Bs(n, r);
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
$c = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function qn(e, t) {
  if (!X)
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
function xe(e) {
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
function Dh(e, t, n) {
  var r = t.pendingProps;
  switch ((Ki(t), t.tag)) {
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
      return (xe(t), null);
    case 1:
      return (Re(t.type) && xo(), xe(t), null);
    case 3:
      return (
        (r = t.stateNode),
        Ln(),
        K(Me),
        K(Ce),
        nl(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Vr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), tt !== null && (Ci(tt), (tt = null)))),
        gi(e, t),
        xe(t),
        null
      );
    case 5:
      tl(t);
      var o = Gt(xr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Lc(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return (xe(t), null);
        }
        if (((e = Gt(dt.current)), Vr(t))) {
          ((r = t.stateNode), (n = t.type));
          var s = t.memoizedProps;
          switch (((r[ut] = t), (r[wr] = s), (e = (t.mode & 1) !== 0), n)) {
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
              (Ml(r, s), Q("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!s.multiple }),
                Q("invalid", r));
              break;
            case "textarea":
              (Ll(r, s), Q("invalid", r));
          }
          (Bs(n, s), (o = null));
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
              ($r(r), Rl(r, s, !0));
              break;
            case "textarea":
              ($r(r), $l(r));
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
            e === "http://www.w3.org/1999/xhtml" && (e = cu(n)),
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
            (e[ut] = t),
            (e[wr] = r),
            Rc(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((i = Ws(n, r)), n)) {
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
                (Ml(e, r), (o = zs(e, r)), Q("invalid", e));
                break;
              case "option":
                o = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = te({}, r, { value: void 0 })),
                  Q("invalid", e));
                break;
              case "textarea":
                (Ll(e, r), (o = Us(e, r)), Q("invalid", e));
                break;
              default:
                o = r;
            }
            (Bs(n, o), (l = o));
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var a = l[s];
                s === "style"
                  ? hu(e, a)
                  : s === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && du(e, a))
                    : s === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && cr(e, a)
                        : typeof a == "number" && cr(e, "" + a)
                      : s !== "suppressContentEditableWarning" &&
                        s !== "suppressHydrationWarning" &&
                        s !== "autoFocus" &&
                        (ur.hasOwnProperty(s)
                          ? a != null && s === "onScroll" && Q("scroll", e)
                          : a != null && Di(e, s, a, i));
              }
            switch (n) {
              case "input":
                ($r(e), Rl(e, r, !1));
                break;
              case "textarea":
                ($r(e), $l(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + zt(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? En(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      En(e, !!r.multiple, r.defaultValue, !0));
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
      return (xe(t), null);
    case 6:
      if (e && t.stateNode != null) $c(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (((n = Gt(xr.current)), Gt(dt.current), Vr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ut] = t),
            (s = r.nodeValue !== n) && ((e = Ae), e !== null))
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
            (r[ut] = t),
            (t.stateNode = r));
      }
      return (xe(t), null);
    case 13:
      if (
        (K(J),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (X && ze !== null && t.mode & 1 && !(t.flags & 128))
          (ec(), Mn(), (t.flags |= 98560), (s = !1));
        else if (((s = Vr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(E(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(E(317));
            s[ut] = t;
          } else
            (Mn(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (xe(t), (s = !1));
        } else (tt !== null && (Ci(tt), (tt = null)), (s = !0));
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || J.current & 1 ? fe === 0 && (fe = 3) : pl())),
          t.updateQueue !== null && (t.flags |= 4),
          xe(t),
          null);
    case 4:
      return (
        Ln(),
        gi(e, t),
        e === null && yr(t.stateNode.containerInfo),
        xe(t),
        null
      );
    case 10:
      return (Yi(t.type._context), xe(t), null);
    case 17:
      return (Re(t.type) && xo(), xe(t), null);
    case 19:
      if ((K(J), (s = t.memoizedState), s === null)) return (xe(t), null);
      if (((r = (t.flags & 128) !== 0), (i = s.rendering), i === null))
        if (r) qn(s, !1);
        else {
          if (fe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Io(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    qn(s, !1),
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
                return (V(J, (J.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          s.tail !== null &&
            ie() > On &&
            ((t.flags |= 128), (r = !0), qn(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Io(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              qn(s, !0),
              s.tail === null && s.tailMode === "hidden" && !i.alternate && !X)
            )
              return (xe(t), null);
          } else
            2 * ie() - s.renderingStartTime > On &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), qn(s, !1), (t.lanes = 4194304));
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
          (s.renderingStartTime = ie()),
          (t.sibling = null),
          (n = J.current),
          V(J, r ? (n & 1) | 2 : n & 1),
          t)
        : (xe(t), null);
    case 22:
    case 23:
      return (
        hl(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Oe & 1073741824 && (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : xe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function Mh(e, t) {
  switch ((Ki(t), t.tag)) {
    case 1:
      return (
        Re(t.type) && xo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ln(),
        K(Me),
        K(Ce),
        nl(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (tl(t), null);
    case 13:
      if ((K(J), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(E(340));
        Mn();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (K(J), null);
    case 4:
      return (Ln(), null);
    case 10:
      return (Yi(t.type._context), null);
    case 22:
    case 23:
      return (hl(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var qr = !1,
  Se = !1,
  Rh = typeof WeakSet == "function" ? WeakSet : Set,
  P = null;
function kn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ne(e, t, r);
      }
    else n.current = null;
}
function yi(e, t, n) {
  try {
    n();
  } catch (r) {
    ne(e, t, r);
  }
}
var Ea = !1;
function Lh(e, t) {
  if (((ei = yo), (e = Uu()), Vi(e))) {
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
              var _;
              g !== n || (o !== 0 && g.nodeType !== 3) || (l = i + o),
                g !== s || (r !== 0 && g.nodeType !== 3) || (a = i + r),
                g.nodeType === 3 && (i += g.nodeValue.length),
                (_ = g.firstChild) !== null;
            )
              ((m = g), (g = _));
            for (;;) {
              if (g === e) break t;
              if (
                (m === n && ++c === o && (l = i),
                m === s && ++p === r && (a = i),
                (_ = g.nextSibling) !== null)
              )
                break;
              ((g = m), (m = g.parentNode));
            }
            g = _;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ti = { focusedElem: e, selectionRange: n }, yo = !1, P = t; P !== null; )
    if (((t = P), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (P = e));
    else
      for (; P !== null; ) {
        t = P;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var k = x.memoizedProps,
                    L = x.memoizedState,
                    f = t.stateNode,
                    d = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : Ze(t.type, k),
                      L,
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
                throw Error(E(163));
            }
        } catch (y) {
          ne(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (P = e));
          break;
        }
        P = t.return;
      }
  return ((x = Ea), (Ea = !1), x);
}
function ir(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var s = o.destroy;
        ((o.destroy = void 0), s !== void 0 && yi(t, n, s));
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ko(e, t) {
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
function vi(e) {
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
function Oc(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Oc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ut], delete t[wr], delete t[oi], delete t[yh], delete t[vh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function zc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Na(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || zc(e.return)) return null;
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
function wi(e, t, n) {
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
    for (wi(e, t, n), e = e.sibling; e !== null; )
      (wi(e, t, n), (e = e.sibling));
}
function _i(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (_i(e, t, n), e = e.sibling; e !== null; )
      (_i(e, t, n), (e = e.sibling));
}
var ge = null,
  et = !1;
function kt(e, t, n) {
  for (n = n.child; n !== null; ) (Fc(e, t, n), (n = n.sibling));
}
function Fc(e, t, n) {
  if (ct && typeof ct.onCommitFiberUnmount == "function")
    try {
      ct.onCommitFiberUnmount(Fo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Se || kn(n, t);
    case 6:
      var r = ge,
        o = et;
      ((ge = null),
        kt(e, t, n),
        (ge = r),
        (et = o),
        ge !== null &&
          (et
            ? ((e = ge),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ge.removeChild(n.stateNode)));
      break;
    case 18:
      ge !== null &&
        (et
          ? ((e = ge),
            (n = n.stateNode),
            e.nodeType === 8
              ? xs(e.parentNode, n)
              : e.nodeType === 1 && xs(e, n),
            pr(e))
          : xs(ge, n.stateNode));
      break;
    case 4:
      ((r = ge),
        (o = et),
        (ge = n.stateNode.containerInfo),
        (et = !0),
        kt(e, t, n),
        (ge = r),
        (et = o));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Se &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var s = o,
            i = s.destroy;
          ((s = s.tag),
            i !== void 0 && (s & 2 || s & 4) && yi(n, t, i),
            (o = o.next));
        } while (o !== r);
      }
      kt(e, t, n);
      break;
    case 1:
      if (
        !Se &&
        (kn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (l) {
          ne(n, t, l);
        }
      kt(e, t, n);
      break;
    case 21:
      kt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Se = (r = Se) || n.memoizedState !== null), kt(e, t, n), (Se = r))
        : kt(e, t, n);
      break;
    default:
      kt(e, t, n);
  }
}
function Ta(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new Rh()),
      t.forEach(function (r) {
        var o = Wh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      }));
  }
}
function Je(e, t) {
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
              ((ge = l.stateNode), (et = !1));
              break e;
            case 3:
              ((ge = l.stateNode.containerInfo), (et = !0));
              break e;
            case 4:
              ((ge = l.stateNode.containerInfo), (et = !0));
              break e;
          }
          l = l.return;
        }
        if (ge === null) throw Error(E(160));
        (Fc(s, i, o), (ge = null), (et = !1));
        var a = o.alternate;
        (a !== null && (a.return = null), (o.return = null));
      } catch (c) {
        ne(o, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (Ac(t, e), (t = t.sibling));
}
function Ac(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Je(t, e), lt(e), r & 4)) {
        try {
          (ir(3, e, e.return), Ko(3, e));
        } catch (k) {
          ne(e, e.return, k);
        }
        try {
          ir(5, e, e.return);
        } catch (k) {
          ne(e, e.return, k);
        }
      }
      break;
    case 1:
      (Je(t, e), lt(e), r & 512 && n !== null && kn(n, n.return));
      break;
    case 5:
      if (
        (Je(t, e),
        lt(e),
        r & 512 && n !== null && kn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          cr(o, "");
        } catch (k) {
          ne(e, e.return, k);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var s = e.memoizedProps,
          i = n !== null ? n.memoizedProps : s,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            (l === "input" && s.type === "radio" && s.name != null && au(o, s),
              Ws(l, i));
            var c = Ws(l, s);
            for (i = 0; i < a.length; i += 2) {
              var p = a[i],
                g = a[i + 1];
              p === "style"
                ? hu(o, g)
                : p === "dangerouslySetInnerHTML"
                  ? du(o, g)
                  : p === "children"
                    ? cr(o, g)
                    : Di(o, p, g, c);
            }
            switch (l) {
              case "input":
                Fs(o, s);
                break;
              case "textarea":
                uu(o, s);
                break;
              case "select":
                var m = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!s.multiple;
                var _ = s.value;
                _ != null
                  ? En(o, !!s.multiple, _, !1)
                  : m !== !!s.multiple &&
                    (s.defaultValue != null
                      ? En(o, !!s.multiple, s.defaultValue, !0)
                      : En(o, !!s.multiple, s.multiple ? [] : "", !1));
            }
            o[wr] = s;
          } catch (k) {
            ne(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((Je(t, e), lt(e), r & 4)) {
        if (e.stateNode === null) throw Error(E(162));
        ((o = e.stateNode), (s = e.memoizedProps));
        try {
          o.nodeValue = s;
        } catch (k) {
          ne(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (Je(t, e), lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          pr(t.containerInfo);
        } catch (k) {
          ne(e, e.return, k);
        }
      break;
    case 4:
      (Je(t, e), lt(e));
      break;
    case 13:
      (Je(t, e),
        lt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((s = o.memoizedState !== null),
          (o.stateNode.isHidden = s),
          !s ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (dl = ie())),
        r & 4 && Ta(e));
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Se = (c = Se) || p), Je(t, e), (Se = c)) : Je(t, e),
        lt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !p && e.mode & 1)
        )
          for (P = e, p = e.child; p !== null; ) {
            for (g = P = p; P !== null; ) {
              switch (((m = P), (_ = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ir(4, m, m.return);
                  break;
                case 1:
                  kn(m, m.return);
                  var x = m.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    ((r = m), (n = m.return));
                    try {
                      ((t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount());
                    } catch (k) {
                      ne(r, n, k);
                    }
                  }
                  break;
                case 5:
                  kn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    ja(g);
                    continue;
                  }
              }
              _ !== null ? ((_.return = m), (P = _)) : ja(g);
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
                      (l.style.display = fu("display", i))));
              } catch (k) {
                ne(e, e.return, k);
              }
            }
          } else if (g.tag === 6) {
            if (p === null)
              try {
                g.stateNode.nodeValue = c ? "" : g.memoizedProps;
              } catch (k) {
                ne(e, e.return, k);
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
      (Je(t, e), lt(e), r & 4 && Ta(e));
      break;
    case 21:
      break;
    default:
      (Je(t, e), lt(e));
  }
}
function lt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (zc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (cr(o, ""), (r.flags &= -33));
          var s = Na(e);
          _i(e, s, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            l = Na(e);
          wi(e, l, i);
          break;
        default:
          throw Error(E(161));
      }
    } catch (a) {
      ne(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function $h(e, t, n) {
  ((P = e), Uc(e));
}
function Uc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var o = P,
      s = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || qr;
      if (!i) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || Se;
        l = qr;
        var c = Se;
        if (((qr = i), (Se = a) && !c))
          for (P = o; P !== null; )
            ((i = P),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Pa(o)
                : a !== null
                  ? ((a.return = i), (P = a))
                  : Pa(o));
        for (; s !== null; ) ((P = s), Uc(s), (s = s.sibling));
        ((P = o), (qr = l), (Se = c));
      }
      Ia(e);
    } else
      o.subtreeFlags & 8772 && s !== null ? ((s.return = o), (P = s)) : Ia(e);
  }
}
function Ia(e) {
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
              Se || Ko(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Se)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ze(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var s = t.updateQueue;
              s !== null && fa(t, s, r);
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
                fa(t, i, n);
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
              throw Error(E(163));
          }
        Se || (t.flags & 512 && vi(t));
      } catch (m) {
        ne(t, t.return, m);
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
function ja(e) {
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
function Pa(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ko(4, t);
          } catch (a) {
            ne(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ne(t, o, a);
            }
          }
          var s = t.return;
          try {
            vi(t);
          } catch (a) {
            ne(t, s, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            vi(t);
          } catch (a) {
            ne(t, i, a);
          }
      }
    } catch (a) {
      ne(t, t.return, a);
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
var Oh = Math.ceil,
  bo = St.ReactCurrentDispatcher,
  ul = St.ReactCurrentOwner,
  qe = St.ReactCurrentBatchConfig,
  A = 0,
  pe = null,
  ae = null,
  ye = 0,
  Oe = 0,
  Cn = Ht(0),
  fe = 0,
  Er = null,
  rn = 0,
  qo = 0,
  cl = 0,
  lr = null,
  be = null,
  dl = 0,
  On = 1 / 0,
  ht = null,
  Do = !1,
  xi = null,
  Lt = null,
  Gr = !1,
  jt = null,
  Mo = 0,
  ar = 0,
  Si = null,
  ao = -1,
  uo = 0;
function Ie() {
  return A & 6 ? ie() : ao !== -1 ? ao : (ao = ie());
}
function $t(e) {
  return e.mode & 1
    ? A & 2 && ye !== 0
      ? ye & -ye
      : _h.transition !== null
        ? (uo === 0 && (uo = Eu()), uo)
        : ((e = W),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Du(e.type))),
          e)
    : 1;
}
function ot(e, t, n, r) {
  if (50 < ar) throw ((ar = 0), (Si = null), Error(E(185)));
  (jr(e, n, r),
    (!(A & 2) || e !== pe) &&
      (e === pe && (!(A & 2) && (qo |= n), fe === 4 && Tt(e, ye)),
      Le(e, r),
      n === 1 && A === 0 && !(t.mode & 1) && ((On = ie() + 500), Wo && Bt())));
}
function Le(e, t) {
  var n = e.callbackNode;
  _f(e, t);
  var r = go(e, e === pe ? ye : 0);
  if (r === 0)
    (n !== null && Fl(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Fl(n), t === 1))
      (e.tag === 0 ? wh(ba.bind(null, e)) : Yu(ba.bind(null, e)),
        mh(function () {
          !(A & 6) && Bt();
        }),
        (n = null));
    else {
      switch (Nu(r)) {
        case 1:
          n = Oi;
          break;
        case 4:
          n = ku;
          break;
        case 16:
          n = mo;
          break;
        case 536870912:
          n = Cu;
          break;
        default:
          n = mo;
      }
      n = Gc(n, Hc.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function Hc(e, t) {
  if (((ao = -1), (uo = 0), A & 6)) throw Error(E(327));
  var n = e.callbackNode;
  if (Pn() && e.callbackNode !== n) return null;
  var r = go(e, e === pe ? ye : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ro(e, r);
  else {
    t = r;
    var o = A;
    A |= 2;
    var s = Wc();
    (pe !== e || ye !== t) && ((ht = null), (On = ie() + 500), Xt(e, t));
    do
      try {
        Ah();
        break;
      } catch (l) {
        Bc(e, l);
      }
    while (!0);
    (Xi(),
      (bo.current = s),
      (A = o),
      ae !== null ? (t = 0) : ((pe = null), (ye = 0), (t = fe)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Gs(e)), o !== 0 && ((r = o), (t = ki(e, o)))), t === 1)
    )
      throw ((n = Er), Xt(e, 0), Tt(e, r), Le(e, ie()), n);
    if (t === 6) Tt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !zh(o) &&
          ((t = Ro(e, r)),
          t === 2 && ((s = Gs(e)), s !== 0 && ((r = s), (t = ki(e, s)))),
          t === 1))
      )
        throw ((n = Er), Xt(e, 0), Tt(e, r), Le(e, ie()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          Qt(e, be, ht);
          break;
        case 3:
          if (
            (Tt(e, r), (r & 130023424) === r && ((t = dl + 500 - ie()), 10 < t))
          ) {
            if (go(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              (Ie(), (e.pingedLanes |= e.suspendedLanes & o));
              break;
            }
            e.timeoutHandle = ri(Qt.bind(null, e, be, ht), t);
            break;
          }
          Qt(e, be, ht);
          break;
        case 4:
          if ((Tt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - rt(r);
            ((s = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~s));
          }
          if (
            ((r = o),
            (r = ie() - r),
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
                          : 1960 * Oh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ri(Qt.bind(null, e, be, ht), r);
            break;
          }
          Qt(e, be, ht);
          break;
        case 5:
          Qt(e, be, ht);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return (Le(e, ie()), e.callbackNode === n ? Hc.bind(null, e) : null);
}
function ki(e, t) {
  var n = lr;
  return (
    e.current.memoizedState.isDehydrated && (Xt(e, t).flags |= 256),
    (e = Ro(e, t)),
    e !== 2 && ((t = be), (be = n), t !== null && Ci(t)),
    e
  );
}
function Ci(e) {
  be === null ? (be = e) : be.push.apply(be, e);
}
function zh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            s = o.getSnapshot;
          o = o.value;
          try {
            if (!st(s(), o)) return !1;
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
    t &= ~cl,
      t &= ~qo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - rt(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function ba(e) {
  if (A & 6) throw Error(E(327));
  Pn();
  var t = go(e, 0);
  if (!(t & 1)) return (Le(e, ie()), null);
  var n = Ro(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Gs(e);
    r !== 0 && ((t = r), (n = ki(e, r)));
  }
  if (n === 1) throw ((n = Er), Xt(e, 0), Tt(e, t), Le(e, ie()), n);
  if (n === 6) throw Error(E(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Qt(e, be, ht),
    Le(e, ie()),
    null
  );
}
function fl(e, t) {
  var n = A;
  A |= 1;
  try {
    return e(t);
  } finally {
    ((A = n), A === 0 && ((On = ie() + 500), Wo && Bt()));
  }
}
function on(e) {
  jt !== null && jt.tag === 0 && !(A & 6) && Pn();
  var t = A;
  A |= 1;
  var n = qe.transition,
    r = W;
  try {
    if (((qe.transition = null), (W = 1), e)) return e();
  } finally {
    ((W = r), (qe.transition = n), (A = t), !(A & 6) && Bt());
  }
}
function hl() {
  ((Oe = Cn.current), K(Cn));
}
function Xt(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), ph(n)), ae !== null))
    for (n = ae.return; n !== null; ) {
      var r = n;
      switch ((Ki(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && xo());
          break;
        case 3:
          (Ln(), K(Me), K(Ce), nl());
          break;
        case 5:
          tl(r);
          break;
        case 4:
          Ln();
          break;
        case 13:
          K(J);
          break;
        case 19:
          K(J);
          break;
        case 10:
          Yi(r.type._context);
          break;
        case 22:
        case 23:
          hl();
      }
      n = n.return;
    }
  if (
    ((pe = e),
    (ae = e = Ot(e.current, null)),
    (ye = Oe = t),
    (fe = 0),
    (Er = null),
    (cl = qo = rn = 0),
    (be = lr = null),
    qt !== null)
  ) {
    for (t = 0; t < qt.length; t++)
      if (((n = qt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          s = n.pending;
        if (s !== null) {
          var i = s.next;
          ((s.next = o), (r.next = i));
        }
        n.pending = r;
      }
    qt = null;
  }
  return e;
}
function Bc(e, t) {
  do {
    var n = ae;
    try {
      if ((Xi(), (so.current = Po), jo)) {
        for (var r = ee.memoizedState; r !== null; ) {
          var o = r.queue;
          (o !== null && (o.pending = null), (r = r.next));
        }
        jo = !1;
      }
      if (
        ((nn = 0),
        (he = de = ee = null),
        (sr = !1),
        (Sr = 0),
        (ul.current = null),
        n === null || n.return === null)
      ) {
        ((fe = 1), (Er = t), (ae = null));
        break;
      }
      e: {
        var s = e,
          i = n.return,
          l = n,
          a = t;
        if (
          ((t = ye),
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
          var _ = va(i);
          if (_ !== null) {
            ((_.flags &= -257),
              wa(_, i, l, s, t),
              _.mode & 1 && ya(s, c, t),
              (t = _),
              (a = c));
            var x = t.updateQueue;
            if (x === null) {
              var k = new Set();
              (k.add(a), (t.updateQueue = k));
            } else x.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              (ya(s, c, t), pl());
              break e;
            }
            a = Error(E(426));
          }
        } else if (X && l.mode & 1) {
          var L = va(i);
          if (L !== null) {
            (!(L.flags & 65536) && (L.flags |= 256),
              wa(L, i, l, s, t),
              qi($n(a, l)));
            break e;
          }
        }
        ((s = a = $n(a, l)),
          fe !== 4 && (fe = 2),
          lr === null ? (lr = [s]) : lr.push(s),
          (s = i));
        do {
          switch (s.tag) {
            case 3:
              ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
              var f = Nc(s, a, t);
              da(s, f);
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
                    (Lt === null || !Lt.has(h))))
              ) {
                ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
                var y = Tc(s, l, t);
                da(s, y);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Qc(n);
    } catch (v) {
      ((t = v), ae === n && n !== null && (ae = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Wc() {
  var e = bo.current;
  return ((bo.current = Po), e === null ? Po : e);
}
function pl() {
  ((fe === 0 || fe === 3 || fe === 2) && (fe = 4),
    pe === null || (!(rn & 268435455) && !(qo & 268435455)) || Tt(pe, ye));
}
function Ro(e, t) {
  var n = A;
  A |= 2;
  var r = Wc();
  (pe !== e || ye !== t) && ((ht = null), Xt(e, t));
  do
    try {
      Fh();
      break;
    } catch (o) {
      Bc(e, o);
    }
  while (!0);
  if ((Xi(), (A = n), (bo.current = r), ae !== null)) throw Error(E(261));
  return ((pe = null), (ye = 0), fe);
}
function Fh() {
  for (; ae !== null; ) Vc(ae);
}
function Ah() {
  for (; ae !== null && !df(); ) Vc(ae);
}
function Vc(e) {
  var t = qc(e.alternate, e, Oe);
  ((e.memoizedProps = e.pendingProps),
    t === null ? Qc(e) : (ae = t),
    (ul.current = null));
}
function Qc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Mh(n, t)), n !== null)) {
        ((n.flags &= 32767), (ae = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((fe = 6), (ae = null));
        return;
      }
    } else if (((n = Dh(n, t, Oe)), n !== null)) {
      ae = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ae = t;
      return;
    }
    ae = t = e;
  } while (t !== null);
  fe === 0 && (fe = 5);
}
function Qt(e, t, n) {
  var r = W,
    o = qe.transition;
  try {
    ((qe.transition = null), (W = 1), Uh(e, t, n, r));
  } finally {
    ((qe.transition = o), (W = r));
  }
  return null;
}
function Uh(e, t, n, r) {
  do Pn();
  while (jt !== null);
  if (A & 6) throw Error(E(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(E(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var s = n.lanes | n.childLanes;
  if (
    (xf(e, s),
    e === pe && ((ae = pe = null), (ye = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Gr ||
      ((Gr = !0),
      Gc(mo, function () {
        return (Pn(), null);
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    ((s = qe.transition), (qe.transition = null));
    var i = W;
    W = 1;
    var l = A;
    ((A |= 4),
      (ul.current = null),
      Lh(e, n),
      Ac(n, e),
      lh(ti),
      (yo = !!ei),
      (ti = ei = null),
      (e.current = n),
      $h(n),
      ff(),
      (A = l),
      (W = i),
      (qe.transition = s));
  } else e.current = n;
  if (
    (Gr && ((Gr = !1), (jt = e), (Mo = o)),
    (s = e.pendingLanes),
    s === 0 && (Lt = null),
    mf(n.stateNode),
    Le(e, ie()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest }));
  if (Do) throw ((Do = !1), (e = xi), (xi = null), e);
  return (
    Mo & 1 && e.tag !== 0 && Pn(),
    (s = e.pendingLanes),
    s & 1 ? (e === Si ? ar++ : ((ar = 0), (Si = e))) : (ar = 0),
    Bt(),
    null
  );
}
function Pn() {
  if (jt !== null) {
    var e = Nu(Mo),
      t = qe.transition,
      n = W;
    try {
      if (((qe.transition = null), (W = 16 > e ? 16 : e), jt === null))
        var r = !1;
      else {
        if (((e = jt), (jt = null), (Mo = 0), A & 6)) throw Error(E(331));
        var o = A;
        for (A |= 4, P = e.current; P !== null; ) {
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
                        _ = p.return;
                      if ((Oc(p), p === c)) {
                        P = null;
                        break;
                      }
                      if (m !== null) {
                        ((m.return = _), (P = m));
                        break;
                      }
                      P = _;
                    }
                }
              }
              var x = s.alternate;
              if (x !== null) {
                var k = x.child;
                if (k !== null) {
                  x.child = null;
                  do {
                    var L = k.sibling;
                    ((k.sibling = null), (k = L));
                  } while (k !== null);
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
                      Ko(9, l);
                  }
                } catch (v) {
                  ne(l, l.return, v);
                }
              if (l === i) {
                P = null;
                break e;
              }
              var y = l.sibling;
              if (y !== null) {
                ((y.return = l.return), (P = y));
                break e;
              }
              P = l.return;
            }
        }
        if (
          ((A = o), Bt(), ct && typeof ct.onPostCommitFiberRoot == "function")
        )
          try {
            ct.onPostCommitFiberRoot(Fo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((W = n), (qe.transition = t));
    }
  }
  return !1;
}
function Da(e, t, n) {
  ((t = $n(n, t)),
    (t = Nc(e, t, 1)),
    (e = Rt(e, t, 1)),
    (t = Ie()),
    e !== null && (jr(e, 1, t), Le(e, t)));
}
function ne(e, t, n) {
  if (e.tag === 3) Da(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Da(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Lt === null || !Lt.has(r)))
        ) {
          ((e = $n(n, e)),
            (e = Tc(t, e, 1)),
            (t = Rt(t, e, 1)),
            (e = Ie()),
            t !== null && (jr(t, 1, e), Le(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function Hh(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = Ie()),
    (e.pingedLanes |= e.suspendedLanes & n),
    pe === e &&
      (ye & n) === n &&
      (fe === 4 || (fe === 3 && (ye & 130023424) === ye && 500 > ie() - dl)
        ? Xt(e, 0)
        : (cl |= n)),
    Le(e, t));
}
function Kc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Fr), (Fr <<= 1), !(Fr & 130023424) && (Fr = 4194304))
      : (t = 1));
  var n = Ie();
  ((e = _t(e, t)), e !== null && (jr(e, t, n), Le(e, n)));
}
function Bh(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Kc(e, n));
}
function Wh(e, t) {
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
      throw Error(E(314));
  }
  (r !== null && r.delete(t), Kc(e, n));
}
var qc;
qc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Me.current) De = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((De = !1), bh(e, t, n));
      De = !!(e.flags & 131072);
    }
  else ((De = !1), X && t.flags & 1048576 && Ju(t, Co, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (lo(e, t), (e = t.pendingProps));
      var o = Dn(t, Ce.current);
      (jn(t, n), (o = ol(null, t, r, e, o, n)));
      var s = sl();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Re(r) ? ((s = !0), So(t)) : (s = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Zi(t),
            (o.updater = Qo),
            (t.stateNode = o),
            (o._reactInternals = t),
            ci(t, r, e, n),
            (t = hi(null, t, r, !0, s, n)))
          : ((t.tag = 0), X && s && Qi(t), Ne(null, t, o, n), (t = t.child)),
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
          (o = t.tag = Qh(r)),
          (e = Ze(r, e)),
          o)
        ) {
          case 0:
            t = fi(null, t, r, e, n);
            break e;
          case 1:
            t = Sa(null, t, r, e, n);
            break e;
          case 11:
            t = _a(null, t, r, e, n);
            break e;
          case 14:
            t = xa(null, t, r, Ze(r.type, e), n);
            break e;
        }
        throw Error(E(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ze(r, o)),
        fi(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ze(r, o)),
        Sa(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((bc(t), e === null)) throw Error(E(387));
        ((r = t.pendingProps),
          (s = t.memoizedState),
          (o = s.element),
          oc(e, t),
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
            ((o = $n(Error(E(423)), t)), (t = ka(e, t, r, n, o)));
            break e;
          } else if (r !== o) {
            ((o = $n(Error(E(424)), t)), (t = ka(e, t, r, n, o)));
            break e;
          } else
            for (
              ze = Mt(t.stateNode.containerInfo.firstChild),
                Ae = t,
                X = !0,
                tt = null,
                n = nc(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((Mn(), r === o)) {
            t = xt(e, t, n);
            break e;
          }
          Ne(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        sc(t),
        e === null && li(t),
        (r = t.type),
        (o = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (i = o.children),
        ni(r, o) ? (i = null) : s !== null && ni(r, s) && (t.flags |= 32),
        Pc(e, t),
        Ne(e, t, i, n),
        t.child
      );
    case 6:
      return (e === null && li(t), null);
    case 13:
      return Dc(e, t, n);
    case 4:
      return (
        el(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Rn(t, null, r, n)) : Ne(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ze(r, o)),
        _a(e, t, r, o, n)
      );
    case 7:
      return (Ne(e, t, t.pendingProps, n), t.child);
    case 8:
      return (Ne(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (Ne(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (s = t.memoizedProps),
          (i = o.value),
          V(Eo, r._currentValue),
          (r._currentValue = i),
          s !== null)
        )
          if (st(s.value, i)) {
            if (s.children === o.children && !Me.current) {
              t = xt(e, t, n);
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
                      ((a = yt(-1, n & -n)), (a.tag = 2));
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
                      ai(s.return, n, t),
                      (l.lanes |= n));
                    break;
                  }
                  a = a.next;
                }
              } else if (s.tag === 10) i = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((i = s.return), i === null)) throw Error(E(341));
                ((i.lanes |= n),
                  (l = i.alternate),
                  l !== null && (l.lanes |= n),
                  ai(i, n, t),
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
        (Ne(e, t, o.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        jn(t, n),
        (o = Ge(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ne(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Ze(r, t.pendingProps)),
        (o = Ze(r.type, o)),
        xa(e, t, r, o, n)
      );
    case 15:
      return Ic(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ze(r, o)),
        lo(e, t),
        (t.tag = 1),
        Re(r) ? ((e = !0), So(t)) : (e = !1),
        jn(t, n),
        Ec(t, r, o),
        ci(t, r, o, n),
        hi(null, t, r, !0, e, n)
      );
    case 19:
      return Mc(e, t, n);
    case 22:
      return jc(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function Gc(e, t) {
  return Su(e, t);
}
function Vh(e, t, n, r) {
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
function Ke(e, t, n, r) {
  return new Vh(e, t, n, r);
}
function ml(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function Qh(e) {
  if (typeof e == "function") return ml(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ri)) return 11;
    if (e === Li) return 14;
  }
  return 2;
}
function Ot(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ke(e.tag, t, e.key, e.mode)),
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
  if (((r = e), typeof e == "function")) ml(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case pn:
        return Yt(n.children, o, s, t);
      case Mi:
        ((i = 8), (o |= 8));
        break;
      case Rs:
        return (
          (e = Ke(12, n, t, o | 2)),
          (e.elementType = Rs),
          (e.lanes = s),
          e
        );
      case Ls:
        return ((e = Ke(13, n, t, o)), (e.elementType = Ls), (e.lanes = s), e);
      case $s:
        return ((e = Ke(19, n, t, o)), (e.elementType = $s), (e.lanes = s), e);
      case su:
        return Go(n, o, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ru:
              i = 10;
              break e;
            case ou:
              i = 9;
              break e;
            case Ri:
              i = 11;
              break e;
            case Li:
              i = 14;
              break e;
            case Ct:
              ((i = 16), (r = null));
              break e;
          }
        throw Error(E(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ke(i, n, t, o)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = s),
    t
  );
}
function Yt(e, t, n, r) {
  return ((e = Ke(7, e, r, t)), (e.lanes = n), e);
}
function Go(e, t, n, r) {
  return (
    (e = Ke(22, e, r, t)),
    (e.elementType = su),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function js(e, t, n) {
  return ((e = Ke(6, e, null, t)), (e.lanes = n), e);
}
function Ps(e, t, n) {
  return (
    (t = Ke(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Kh(e, t, n, r, o) {
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
    (this.eventTimes = cs(0)),
    (this.expirationTimes = cs(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = cs(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null));
}
function gl(e, t, n, r, o, s, i, l, a) {
  return (
    (e = new Kh(e, t, n, l, a)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Ke(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Zi(s),
    e
  );
}
function qh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: hn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Xc(e) {
  if (!e) return Ft;
  e = e._reactInternals;
  e: {
    if (an(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Re(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Re(n)) return Xu(e, n, t);
  }
  return t;
}
function Yc(e, t, n, r, o, s, i, l, a) {
  return (
    (e = gl(n, r, !0, e, o, s, i, l, a)),
    (e.context = Xc(null)),
    (n = e.current),
    (r = Ie()),
    (o = $t(n)),
    (s = yt(r, o)),
    (s.callback = t ?? null),
    Rt(n, s, o),
    (e.current.lanes = o),
    jr(e, o, r),
    Le(e, r),
    e
  );
}
function Xo(e, t, n, r) {
  var o = t.current,
    s = Ie(),
    i = $t(o);
  return (
    (n = Xc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = yt(s, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Rt(o, t, i)),
    e !== null && (ot(e, o, i, s), oo(e, o, i)),
    i
  );
}
function Lo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ma(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function yl(e, t) {
  (Ma(e, t), (e = e.alternate) && Ma(e, t));
}
function Gh() {
  return null;
}
var Jc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function vl(e) {
  this._internalRoot = e;
}
Yo.prototype.render = vl.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  Xo(e, t, null, null);
};
Yo.prototype.unmount = vl.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (on(function () {
      Xo(null, e, null, null);
    }),
      (t[wt] = null));
  }
};
function Yo(e) {
  this._internalRoot = e;
}
Yo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ju();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Nt.length && t !== 0 && t < Nt[n].priority; n++);
    (Nt.splice(n, 0, e), n === 0 && bu(e));
  }
};
function wl(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Jo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ra() {}
function Xh(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var c = Lo(i);
        s.call(c);
      };
    }
    var i = Yc(t, r, e, 0, null, !1, !1, "", Ra);
    return (
      (e._reactRootContainer = i),
      (e[wt] = i.current),
      yr(e.nodeType === 8 ? e.parentNode : e),
      on(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var c = Lo(a);
      l.call(c);
    };
  }
  var a = gl(e, 0, !1, null, null, !1, !1, "", Ra);
  return (
    (e._reactRootContainer = a),
    (e[wt] = a.current),
    yr(e.nodeType === 8 ? e.parentNode : e),
    on(function () {
      Xo(t, a, n, r);
    }),
    a
  );
}
function Zo(e, t, n, r, o) {
  var s = n._reactRootContainer;
  if (s) {
    var i = s;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var a = Lo(i);
        l.call(a);
      };
    }
    Xo(t, i, e, o);
  } else i = Xh(n, t, e, o, r);
  return Lo(i);
}
Tu = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Jn(t.pendingLanes);
        n !== 0 &&
          (zi(t, n | 1), Le(t, ie()), !(A & 6) && ((On = ie() + 500), Bt()));
      }
      break;
    case 13:
      (on(function () {
        var r = _t(e, 1);
        if (r !== null) {
          var o = Ie();
          ot(r, e, 1, o);
        }
      }),
        yl(e, 1));
  }
};
Fi = function (e) {
  if (e.tag === 13) {
    var t = _t(e, 134217728);
    if (t !== null) {
      var n = Ie();
      ot(t, e, 134217728, n);
    }
    yl(e, 134217728);
  }
};
Iu = function (e) {
  if (e.tag === 13) {
    var t = $t(e),
      n = _t(e, t);
    if (n !== null) {
      var r = Ie();
      ot(n, e, t, r);
    }
    yl(e, t);
  }
};
ju = function () {
  return W;
};
Pu = function (e, t) {
  var n = W;
  try {
    return ((W = e), t());
  } finally {
    W = n;
  }
};
Qs = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Fs(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = Bo(r);
            if (!o) throw Error(E(90));
            (lu(r), Fs(r, o));
          }
        }
      }
      break;
    case "textarea":
      uu(e, n);
      break;
    case "select":
      ((t = n.value), t != null && En(e, !!n.multiple, t, !1));
  }
};
gu = fl;
yu = on;
var Yh = { usingClientEntryPoint: !1, Events: [br, vn, Bo, pu, mu, fl] },
  Gn = {
    findFiberByHostInstance: Kt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Jh = {
    bundleType: Gn.bundleType,
    version: Gn.version,
    rendererPackageName: Gn.rendererPackageName,
    rendererConfig: Gn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: St.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = _u(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Gn.findFiberByHostInstance || Gh,
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
      ((Fo = Xr.inject(Jh)), (ct = Xr));
    } catch {}
}
He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yh;
He.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!wl(t)) throw Error(E(200));
  return qh(e, t, null, n);
};
He.createRoot = function (e, t) {
  if (!wl(e)) throw Error(E(299));
  var n = !1,
    r = "",
    o = Jc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = gl(e, 1, !1, null, null, n, !1, r, o)),
    (e[wt] = t.current),
    yr(e.nodeType === 8 ? e.parentNode : e),
    new vl(t)
  );
};
He.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(E(188))
      : ((e = Object.keys(e).join(",")), Error(E(268, e)));
  return ((e = _u(t)), (e = e === null ? null : e.stateNode), e);
};
He.flushSync = function (e) {
  return on(e);
};
He.hydrate = function (e, t, n) {
  if (!Jo(t)) throw Error(E(200));
  return Zo(null, e, t, !0, n);
};
He.hydrateRoot = function (e, t, n) {
  if (!wl(e)) throw Error(E(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    s = "",
    i = Jc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Yc(t, null, e, 1, n ?? null, o, !1, s, i)),
    (e[wt] = t.current),
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
  return new Yo(t);
};
He.render = function (e, t, n) {
  if (!Jo(t)) throw Error(E(200));
  return Zo(null, e, t, !1, n);
};
He.unmountComponentAtNode = function (e) {
  if (!Jo(e)) throw Error(E(40));
  return e._reactRootContainer
    ? (on(function () {
        Zo(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[wt] = null));
        });
      }),
      !0)
    : !1;
};
He.unstable_batchedUpdates = fl;
He.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Jo(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return Zo(e, t, n, !1, r);
};
He.version = "18.3.1-next-f1338f8080-20240426";
function Zc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zc);
    } catch (e) {
      console.error(e);
    }
}
(Zc(), (Za.exports = He));
var Zh = Za.exports,
  ed,
  La = Zh;
((ed = La.createRoot), La.hydrateRoot);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var ep = {
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
 */ const tp = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  ue = (e, t) => {
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
            ...ep,
            width: o,
            height: o,
            stroke: r,
            strokeWidth: i ? (Number(s) * 24) / Number(o) : s,
            className: ["lucide", `lucide-${tp(e)}`, l].join(" "),
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
 */ const np = ue("CheckSquare", [
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
 */ const td = ue("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nd = ue("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rp = ue("Globe", [
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
 */ const op = ue("Layers", [
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
 */ const Ei = ue("Lock", [
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
 */ const sp = ue("LogIn", [
  ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }],
  ["polyline", { points: "10 17 15 12 10 7", key: "1ail0h" }],
  ["line", { x1: "15", x2: "3", y1: "12", y2: "12", key: "v6grx8" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ip = ue("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lp = ue("Pencil", [
  [
    "path",
    { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" },
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ap = ue("PlusSquare", [
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
 */ const up = ue("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _l = ue("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cp = ue("Square", [
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
 */ const dp = ue("Trash2", [
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
 */ const rd = ue("Unlock", [
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
 */ const od = ue("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fp = ue("UserPlus", [
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
 */ const hp = ue("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $o = ue("Users", [
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
 */ const At = ue("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  pp = {
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
  I = (e, t) => pp[t][e],
  xl = () => {
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
  me = async () => {
    try {
      return await (await fetch("../config.txt")).json();
    } catch (e) {
      return (console.error("Error loading config:", e), null);
    }
  },
  $e = async (e, t, n, r) => {
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
        url: `${(s = await me()) == null ? void 0 : s.domain}${e}`,
        method: t,
        data: n,
      }),
      console.log("📥 Response:", { status: r.status, data: o }),
      console.groupEnd(),
      o
    );
  },
  se = {
    async getExcelHeader() {
      const e = await me();
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
      const t = await me();
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
      const n = await me();
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
      return (await $e(r, "POST", i, l)).Data || [];
    },
    async getOnlineUsers() {
      const e = await me();
      if (!e) throw new Error("Failed to load configuration");
      const t = "/api/webTraffic/get_by_page",
        n = { ValueAry: ["盤點操作", "10"] },
        r = await fetch(`${e.domain}${t}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(n),
        });
      if (!r.ok) throw new Error("Failed to fetch online users");
      const o = await $e(t, "POST", n, r);
      return o.Code == -200 ? [] : o.Data || [];
    },
    async deleteInventory(e, t) {
      const n = await me();
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
      const i = await $e(r, "POST", o, s);
      try {
        await t(i);
      } catch (l) {
        console.warn("Failed to send real-time update:", l);
      }
      return i;
    },
    async toggleLock(e, t, n) {
      const r = await me();
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
      const a = await $e(s, "POST", i, l);
      try {
        await n(a);
      } catch (c) {
        console.warn("Failed to send real-time update:", c);
      }
      return a;
    },
    async createInventory(e, t) {
      const n = await me();
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
      const p = await $e(i, "POST", l, a);
      try {
        await t(p);
      } catch (g) {
        console.warn("Failed to send real-time update:", g);
      }
      return p;
    },
    async uploadExcel(e, t) {
      const n = await me();
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
      const e = await me();
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
      return (await $e(t, "POST", n, r)).Data || [];
    },
    async addMedicineToInventory(e, t) {
      const n = await me();
      if (!n) throw new Error("Failed to load configuration");
      const r = "/api/inventory/content_add_by_IC_SN",
        o = { Data: { Contents: [t] }, Value: e },
        s = await fetch(`${n.domain}${r}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(o),
        });
      if (!s.ok) throw new Error("Failed to add medicine to inventory");
      return $e(r, "POST", o, s);
    },
    async updateInventoryStaff(e, t) {
      const n = await me();
      if (!n) throw new Error("Failed to load configuration");
      const r = "/api/inventory/creat_update_default_op_by_IC_SN",
        o = { Data: { DEFAULT_OP: t.join(",") }, Value: e },
        s = await fetch(`${n.domain}${r}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(o),
        });
      if (!s.ok) throw new Error("Failed to update inventory staff");
      return $e(r, "POST", o, s);
    },
    async getMedCloud() {
      const e = await me();
      if (!e) throw new Error("Failed to load configuration");
      const t = "/api/MED_page/get_med_cloud",
        n = {},
        r = await fetch(`${e.domain}${t}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(n),
        });
      if (!r.ok) throw new Error("Failed to fetch medicine cloud data");
      return await $e(t, "POST", n, r);
    },
    async getMedQtyGroup() {
      const e = await me();
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
      return await $e(t, "POST", n, r);
    },
    async getAllPersons() {
      const e = await me();
      if (!e) throw new Error("Failed to load configuration");
      const t = "/api/person_page/get_all",
        n = {},
        r = await fetch(`${e.domain}${t}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(n),
        });
      if (!r.ok) throw new Error("Failed to fetch persons");
      return (await $e(t, "POST", n, r)).Data || [];
    },
    async updateInventoryName(e, t) {
      const n = await me();
      if (!n) throw new Error("Failed to load configuration");
      const r = "/api/inventory/creat_update",
        o = { Data: { GUID: e, IC_NAME: t } },
        s = await fetch(`${n.domain}${r}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(o),
        });
      if (!s.ok) throw new Error("Failed to update inventory name");
      return $e(r, "POST", o, s);
    },
    async getSettingByPageName(e) {
      const t = await me();
      if (!t) throw new Error("Failed to load configuration");
      const n = "/api/settingPage/get_by_page_name",
        r = { ValueAry: [e] },
        o = await fetch(`${t.domain}${n}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(r),
        });
      if (!o.ok) throw new Error("Failed to fetch page settings");
      return await $e(n, "POST", r, o);
    },
  },
  mp = ({ isOpen: e }) =>
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
  sd = N.createContext(void 0),
  gp = ({ children: e }) => {
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
    return u.jsxs(sd.Provider, {
      value: { showLoading: s, hideLoading: i },
      children: [e, u.jsx(mp, { isOpen: t })],
    });
  },
  Mr = () => {
    const e = N.useContext(sd);
    if (!e) throw new Error("useLoading must be used within a LoadingProvider");
    return e;
  };
class Jt extends Error {
  constructor(t, n) {
    const r = new.target.prototype;
    (super(`${t}: Status code '${n}'`),
      (this.statusCode = n),
      (this.__proto__ = r));
  }
}
class Sl extends Error {
  constructor(t = "A timeout occurred.") {
    const n = new.target.prototype;
    (super(t), (this.__proto__ = n));
  }
}
class nt extends Error {
  constructor(t = "An abort occurred.") {
    const n = new.target.prototype;
    (super(t), (this.__proto__ = n));
  }
}
class yp extends Error {
  constructor(t, n) {
    const r = new.target.prototype;
    (super(t),
      (this.transport = n),
      (this.errorType = "UnsupportedTransportError"),
      (this.__proto__ = r));
  }
}
class vp extends Error {
  constructor(t, n) {
    const r = new.target.prototype;
    (super(t),
      (this.transport = n),
      (this.errorType = "DisabledTransportError"),
      (this.__proto__ = r));
  }
}
class wp extends Error {
  constructor(t, n) {
    const r = new.target.prototype;
    (super(t),
      (this.transport = n),
      (this.errorType = "FailedToStartTransportError"),
      (this.__proto__ = r));
  }
}
class $a extends Error {
  constructor(t) {
    const n = new.target.prototype;
    (super(t),
      (this.errorType = "FailedToNegotiateWithServerError"),
      (this.__proto__ = n));
  }
}
class _p extends Error {
  constructor(t, n) {
    const r = new.target.prototype;
    (super(t), (this.innerErrors = n), (this.__proto__ = r));
  }
}
class id {
  constructor(t, n, r) {
    ((this.statusCode = t), (this.statusText = n), (this.content = r));
  }
}
class es {
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
var w;
(function (e) {
  ((e[(e.Trace = 0)] = "Trace"),
    (e[(e.Debug = 1)] = "Debug"),
    (e[(e.Information = 2)] = "Information"),
    (e[(e.Warning = 3)] = "Warning"),
    (e[(e.Error = 4)] = "Error"),
    (e[(e.Critical = 5)] = "Critical"),
    (e[(e.None = 6)] = "None"));
})(w || (w = {}));
class Nr {
  constructor() {}
  log(t, n) {}
}
Nr.instance = new Nr();
const xp = "8.0.7";
class le {
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
class Z {
  static get isBrowser() {
    return (
      !Z.isNode &&
      typeof window == "object" &&
      typeof window.document == "object"
    );
  }
  static get isWebWorker() {
    return !Z.isNode && typeof self == "object" && "importScripts" in self;
  }
  static get isReactNative() {
    return (
      !Z.isNode && typeof window == "object" && typeof window.document > "u"
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
    sn(e)
      ? ((n = `Binary data of length ${e.byteLength}`),
        t && (n += `. Content: '${Sp(e)}'`))
      : typeof e == "string" &&
        ((n = `String data of length ${e.length}`),
        t && (n += `. Content: '${e}'`)),
    n
  );
}
function Sp(e) {
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
function sn(e) {
  return (
    e &&
    typeof ArrayBuffer < "u" &&
    (e instanceof ArrayBuffer ||
      (e.constructor && e.constructor.name === "ArrayBuffer"))
  );
}
async function ld(e, t, n, r, o, s) {
  const i = {},
    [l, a] = zn();
  ((i[l] = a),
    e.log(
      w.Trace,
      `(${t} transport) sending data. ${Tr(o, s.logMessageContent)}.`,
    ));
  const c = sn(o) ? "arraybuffer" : "text",
    p = await n.post(r, {
      content: o,
      headers: { ...i, ...s.headers },
      responseType: c,
      timeout: s.timeout,
      withCredentials: s.withCredentials,
    });
  e.log(
    w.Trace,
    `(${t} transport) request complete. Response status: ${p.statusCode}.`,
  );
}
function kp(e) {
  return e === void 0
    ? new Oo(w.Information)
    : e === null
      ? Nr.instance
      : e.log !== void 0
        ? e
        : new Oo(e);
}
class Cp {
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
class Oo {
  constructor(t) {
    ((this._minLevel = t), (this.out = console));
  }
  log(t, n) {
    if (t >= this._minLevel) {
      const r = `[${new Date().toISOString()}] ${w[t]}: ${n}`;
      switch (t) {
        case w.Critical:
        case w.Error:
          this.out.error(r);
          break;
        case w.Warning:
          this.out.warn(r);
          break;
        case w.Information:
          this.out.info(r);
          break;
        default:
          this.out.log(r);
          break;
      }
    }
  }
}
function zn() {
  let e = "X-SignalR-User-Agent";
  return (Z.isNode && (e = "User-Agent"), [e, Ep(xp, Np(), Ip(), Tp())]);
}
function Ep(e, t, n, r) {
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
function Np() {
  if (Z.isNode)
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
function Tp() {
  if (Z.isNode) return process.versions.node;
}
function Ip() {
  return Z.isNode ? "NodeJS" : "Browser";
}
function bs(e) {
  return e.stack ? e.stack : e.message ? e.message : `${e}`;
}
function jp() {
  if (typeof globalThis < "u") return globalThis;
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("could not find global");
}
class Pp extends es {
  constructor(t) {
    if ((super(), (this._logger = t), typeof fetch > "u" || Z.isNode)) {
      const n =
        typeof __webpack_require__ == "function"
          ? __non_webpack_require__
          : require;
      ((this._jar = new (n("tough-cookie").CookieJar)()),
        typeof fetch > "u"
          ? (this._fetchType = n("node-fetch"))
          : (this._fetchType = fetch),
        (this._fetchType = n("fetch-cookie")(this._fetchType, this._jar)));
    } else this._fetchType = fetch.bind(jp());
    if (typeof AbortController > "u") {
      const n =
        typeof __webpack_require__ == "function"
          ? __non_webpack_require__
          : require;
      this._abortControllerType = n("abort-controller");
    } else this._abortControllerType = AbortController;
  }
  async send(t) {
    if (t.abortSignal && t.abortSignal.aborted) throw new nt();
    if (!t.method) throw new Error("No method defined.");
    if (!t.url) throw new Error("No url defined.");
    const n = new this._abortControllerType();
    let r;
    t.abortSignal &&
      (t.abortSignal.onabort = () => {
        (n.abort(), (r = new nt()));
      });
    let o = null;
    if (t.timeout) {
      const a = t.timeout;
      o = setTimeout(() => {
        (n.abort(),
          this._logger.log(w.Warning, "Timeout from HTTP request."),
          (r = new Sl()));
      }, a);
    }
    (t.content === "" && (t.content = void 0),
      t.content &&
        ((t.headers = t.headers || {}),
        sn(t.content)
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
        r || (this._logger.log(w.Warning, `Error from HTTP request. ${a}.`), a)
      );
    } finally {
      (o && clearTimeout(o), t.abortSignal && (t.abortSignal.onabort = null));
    }
    if (!s.ok) {
      const a = await Oa(s, "text");
      throw new Jt(a || s.statusText, s.status);
    }
    const l = await Oa(s, t.responseType);
    return new id(s.status, s.statusText, l);
  }
  getCookieString(t) {
    let n = "";
    return (
      Z.isNode &&
        this._jar &&
        this._jar.getCookies(t, (r, o) => (n = o.join("; "))),
      n
    );
  }
}
function Oa(e, t) {
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
class bp extends es {
  constructor(t) {
    (super(), (this._logger = t));
  }
  send(t) {
    return t.abortSignal && t.abortSignal.aborted
      ? Promise.reject(new nt())
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
                  (sn(t.content)
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
                    (o.abort(), r(new nt()));
                  }),
                t.timeout && (o.timeout = t.timeout),
                (o.onload = () => {
                  (t.abortSignal && (t.abortSignal.onabort = null),
                    o.status >= 200 && o.status < 300
                      ? n(
                          new id(
                            o.status,
                            o.statusText,
                            o.response || o.responseText,
                          ),
                        )
                      : r(
                          new Jt(
                            o.response || o.responseText || o.statusText,
                            o.status,
                          ),
                        ));
                }),
                (o.onerror = () => {
                  (this._logger.log(
                    w.Warning,
                    `Error from HTTP request. ${o.status}: ${o.statusText}.`,
                  ),
                    r(new Jt(o.statusText, o.status)));
                }),
                (o.ontimeout = () => {
                  (this._logger.log(w.Warning, "Timeout from HTTP request."),
                    r(new Sl()));
                }),
                o.send(t.content));
            })
          : Promise.reject(new Error("No url defined."))
        : Promise.reject(new Error("No method defined."));
  }
}
class Dp extends es {
  constructor(t) {
    if ((super(), typeof fetch < "u" || Z.isNode)) this._httpClient = new Pp(t);
    else if (typeof XMLHttpRequest < "u") this._httpClient = new bp(t);
    else throw new Error("No usable HttpClient found.");
  }
  send(t) {
    return t.abortSignal && t.abortSignal.aborted
      ? Promise.reject(new nt())
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
class Fe {
  static write(t) {
    return `${t}${Fe.RecordSeparator}`;
  }
  static parse(t) {
    if (t[t.length - 1] !== Fe.RecordSeparator)
      throw new Error("Message is incomplete.");
    const n = t.split(Fe.RecordSeparator);
    return (n.pop(), n);
  }
}
Fe.RecordSeparatorCode = 30;
Fe.RecordSeparator = String.fromCharCode(Fe.RecordSeparatorCode);
class Mp {
  writeHandshakeRequest(t) {
    return Fe.write(JSON.stringify(t));
  }
  parseHandshakeResponse(t) {
    let n, r;
    if (sn(t)) {
      const l = new Uint8Array(t),
        a = l.indexOf(Fe.RecordSeparatorCode);
      if (a === -1) throw new Error("Message is incomplete.");
      const c = a + 1;
      ((n = String.fromCharCode.apply(
        null,
        Array.prototype.slice.call(l.slice(0, c)),
      )),
        (r = l.byteLength > c ? l.slice(c).buffer : null));
    } else {
      const l = t,
        a = l.indexOf(Fe.RecordSeparator);
      if (a === -1) throw new Error("Message is incomplete.");
      const c = a + 1;
      ((n = l.substring(0, c)), (r = l.length > c ? l.substring(c) : null));
    }
    const o = Fe.parse(n),
      s = JSON.parse(o[0]);
    if (s.type)
      throw new Error("Expected a handshake response from the server.");
    return [r, s];
  }
}
var O;
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
})(O || (O = {}));
class Rp {
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
    return (this.observers.push(t), new Cp(this, t));
  }
}
class Lp {
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
      (sn(n)
        ? (this._bufferedByteCount += n.byteLength)
        : (this._bufferedByteCount += n.length),
        this._bufferedByteCount >= this._bufferSize &&
          (r = new Promise((i, l) => {
            ((o = i), (s = l));
          })),
        this._messages.push(new $p(n, this._totalMessageCount, o, s)));
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
          sn(o._message)
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
      return t.type !== O.Sequence
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
      this._protocol.writeMessage({ type: O.Sequence, sequenceId: t }),
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
      case O.Invocation:
      case O.StreamItem:
      case O.Completion:
      case O.StreamInvocation:
      case O.CancelInvocation:
        return !0;
      case O.Close:
      case O.Sequence:
      case O.Ping:
      case O.Ack:
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
                type: O.Ack,
                sequenceId: this._latestReceivedSequenceId,
              }),
            ));
        } catch {}
        (clearTimeout(this._ackTimerHandle), (this._ackTimerHandle = void 0));
      }, 1e3));
  }
}
class $p {
  constructor(t, n, r, o) {
    ((this._message = t),
      (this._id = n),
      (this._resolver = r),
      (this._rejector = o));
  }
}
const Op = 30 * 1e3,
  zp = 15 * 1e3,
  Fp = 1e5;
var G;
(function (e) {
  ((e.Disconnected = "Disconnected"),
    (e.Connecting = "Connecting"),
    (e.Connected = "Connected"),
    (e.Disconnecting = "Disconnecting"),
    (e.Reconnecting = "Reconnecting"));
})(G || (G = {}));
class kl {
  static create(t, n, r, o, s, i, l) {
    return new kl(t, n, r, o, s, i, l);
  }
  constructor(t, n, r, o, s, i, l) {
    ((this._nextKeepAlive = 0),
      (this._freezeEventListener = () => {
        this._logger.log(
          w.Warning,
          "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://learn.microsoft.com/aspnet/core/signalr/javascript-client#bsleep",
        );
      }),
      le.isRequired(t, "connection"),
      le.isRequired(n, "logger"),
      le.isRequired(r, "protocol"),
      (this.serverTimeoutInMilliseconds = s ?? Op),
      (this.keepAliveIntervalInMilliseconds = i ?? zp),
      (this._statefulReconnectBufferSize = l ?? Fp),
      (this._logger = n),
      (this._protocol = r),
      (this.connection = t),
      (this._reconnectPolicy = o),
      (this._handshakeProtocol = new Mp()),
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
        type: O.Ping,
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
      this._logger.log(w.Debug, "Starting HubConnection."));
    try {
      (await this._startInternal(),
        Z.isBrowser &&
          window.document.addEventListener("freeze", this._freezeEventListener),
        (this._connectionState = G.Connected),
        (this._connectionStarted = !0),
        this._logger.log(w.Debug, "HubConnection connected successfully."));
    } catch (t) {
      return (
        (this._connectionState = G.Disconnected),
        this._logger.log(
          w.Debug,
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
        (this._logger.log(w.Debug, "Sending handshake request."),
        await this._sendMessage(
          this._handshakeProtocol.writeHandshakeRequest(r),
        ),
        this._logger.log(
          w.Information,
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
        ((this._messageBuffer = new Lp(
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
          w.Debug,
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
          w.Debug,
          `Call to HubConnection.stop(${t}) ignored because it is already in the disconnected state.`,
        ),
        Promise.resolve()
      );
    if (this._connectionState === G.Disconnecting)
      return (
        this._logger.log(
          w.Debug,
          `Call to HttpConnection.stop(${t}) ignored because the connection is already in the disconnecting state.`,
        ),
        this._stopPromise
      );
    const n = this._connectionState;
    return (
      (this._connectionState = G.Disconnecting),
      this._logger.log(w.Debug, "Stopping HubConnection."),
      this._reconnectDelayHandle
        ? (this._logger.log(
            w.Debug,
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
            new nt(
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
    const l = new Rp();
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
            (a.type === O.Completion
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
            (p.type === O.Completion
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
            case O.Invocation:
              this._invokeClientMethod(r).catch((o) => {
                this._logger.log(
                  w.Error,
                  `Invoke client method threw error: ${bs(o)}`,
                );
              });
              break;
            case O.StreamItem:
            case O.Completion: {
              const o = this._callbacks[r.invocationId];
              if (o) {
                r.type === O.Completion &&
                  delete this._callbacks[r.invocationId];
                try {
                  o(r);
                } catch (s) {
                  this._logger.log(
                    w.Error,
                    `Stream callback threw error: ${bs(s)}`,
                  );
                }
              }
              break;
            }
            case O.Ping:
              break;
            case O.Close: {
              this._logger.log(
                w.Information,
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
            case O.Ack:
              this._messageBuffer && this._messageBuffer._ack(r);
              break;
            case O.Sequence:
              this._messageBuffer && this._messageBuffer._resetSequence(r);
              break;
            default:
              this._logger.log(w.Warning, `Invalid message type: ${r.type}.`);
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
      this._logger.log(w.Error, s);
      const i = new Error(s);
      throw (this._handshakeRejecter(i), i);
    }
    if (n.error) {
      const o = "Server returned handshake error: " + n.error;
      this._logger.log(w.Error, o);
      const s = new Error(o);
      throw (this._handshakeRejecter(s), s);
    } else this._logger.log(w.Debug, "Server handshake complete.");
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
        w.Warning,
        `No client method with the name '${n}' found.`,
      ),
        t.invocationId &&
          (this._logger.log(
            w.Warning,
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
              w.Error,
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
            w.Error,
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
                  w.Warning,
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
            w.Error,
            `Result given for '${n}' method but server is not expecting a result.`,
          );
  }
  _connectionClosed(t) {
    (this._logger.log(
      w.Debug,
      `HubConnection.connectionClosed(${t}) called while in state ${this._connectionState}.`,
    ),
      (this._stopDuringStartError =
        this._stopDuringStartError ||
        t ||
        new nt(
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
        Z.isBrowser &&
          window.document.removeEventListener(
            "freeze",
            this._freezeEventListener,
          ));
      try {
        this._closedCallbacks.forEach((n) => n.apply(this, [t]));
      } catch (n) {
        this._logger.log(
          w.Error,
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
        w.Debug,
        "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt.",
      ),
        this._completeClose(t));
      return;
    }
    if (
      ((this._connectionState = G.Reconnecting),
      t
        ? this._logger.log(
            w.Information,
            `Connection reconnecting because of error '${t}'.`,
          )
        : this._logger.log(w.Information, "Connection reconnecting."),
      this._reconnectingCallbacks.length !== 0)
    ) {
      try {
        this._reconnectingCallbacks.forEach((i) => i.apply(this, [t]));
      } catch (i) {
        this._logger.log(
          w.Error,
          `An onreconnecting callback called with error '${t}' threw error '${i}'.`,
        );
      }
      if (this._connectionState !== G.Reconnecting) {
        this._logger.log(
          w.Debug,
          "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.",
        );
        return;
      }
    }
    for (; s !== null; ) {
      if (
        (this._logger.log(
          w.Information,
          `Reconnect attempt number ${r} will start in ${s} ms.`,
        ),
        await new Promise((i) => {
          this._reconnectDelayHandle = setTimeout(i, s);
        }),
        (this._reconnectDelayHandle = void 0),
        this._connectionState !== G.Reconnecting)
      ) {
        this._logger.log(
          w.Debug,
          "Connection left the reconnecting state during reconnect delay. Done reconnecting.",
        );
        return;
      }
      try {
        if (
          (await this._startInternal(),
          (this._connectionState = G.Connected),
          this._logger.log(
            w.Information,
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
              w.Error,
              `An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${i}'.`,
            );
          }
        return;
      } catch (i) {
        if (
          (this._logger.log(
            w.Information,
            `Reconnect attempt failed because of error '${i}'.`,
          ),
          this._connectionState !== G.Reconnecting)
        ) {
          (this._logger.log(
            w.Debug,
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
      w.Information,
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
          w.Error,
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
            w.Error,
            `Stream 'error' callback called with '${t}' threw error: ${bs(s)}`,
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
        ? { arguments: n, streamIds: o, target: t, type: O.Invocation }
        : { arguments: n, target: t, type: O.Invocation };
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
              type: O.Invocation,
            }
          : {
              arguments: n,
              invocationId: s.toString(),
              target: t,
              type: O.Invocation,
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
            type: O.StreamInvocation,
          }
        : {
            arguments: n,
            invocationId: o.toString(),
            target: t,
            type: O.StreamInvocation,
          }
    );
  }
  _createCancelInvocation(t) {
    return { invocationId: t, type: O.CancelInvocation };
  }
  _createStreamItemMessage(t, n) {
    return { invocationId: t, item: n, type: O.StreamItem };
  }
  _createCompletionMessage(t, n, r) {
    return n
      ? { error: n, invocationId: t, type: O.Completion }
      : { invocationId: t, result: r, type: O.Completion };
  }
  _createCloseMessage() {
    return { type: O.Close };
  }
}
const Ap = [0, 2e3, 1e4, 3e4, null];
class za {
  constructor(t) {
    this._retryDelays = t !== void 0 ? [...t, null] : Ap;
  }
  nextRetryDelayInMilliseconds(t) {
    return this._retryDelays[t.previousRetryCount];
  }
}
class Zt {}
Zt.Authorization = "Authorization";
Zt.Cookie = "Cookie";
class Up extends es {
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
        ? (t.headers[Zt.Authorization] = `Bearer ${this._accessToken}`)
        : this._accessTokenFactory &&
          t.headers[Zt.Authorization] &&
          delete t.headers[Zt.Authorization]);
  }
  getCookieString(t) {
    return this._innerClient.getCookieString(t);
  }
}
var ce;
(function (e) {
  ((e[(e.None = 0)] = "None"),
    (e[(e.WebSockets = 1)] = "WebSockets"),
    (e[(e.ServerSentEvents = 2)] = "ServerSentEvents"),
    (e[(e.LongPolling = 4)] = "LongPolling"));
})(ce || (ce = {}));
var ke;
(function (e) {
  ((e[(e.Text = 1)] = "Text"), (e[(e.Binary = 2)] = "Binary"));
})(ke || (ke = {}));
let Hp = class {
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
class Fa {
  get pollAborted() {
    return this._pollAbort.aborted;
  }
  constructor(t, n, r) {
    ((this._httpClient = t),
      (this._logger = n),
      (this._pollAbort = new Hp()),
      (this._options = r),
      (this._running = !1),
      (this.onreceive = null),
      (this.onclose = null));
  }
  async connect(t, n) {
    if (
      (le.isRequired(t, "url"),
      le.isRequired(n, "transferFormat"),
      le.isIn(n, ke, "transferFormat"),
      (this._url = t),
      this._logger.log(w.Trace, "(LongPolling transport) Connecting."),
      n === ke.Binary &&
        typeof XMLHttpRequest < "u" &&
        typeof new XMLHttpRequest().responseType != "string")
    )
      throw new Error(
        "Binary protocols over XmlHttpRequest not implementing advanced features are not supported.",
      );
    const [r, o] = zn(),
      s = { [r]: o, ...this._options.headers },
      i = {
        abortSignal: this._pollAbort.signal,
        headers: s,
        timeout: 1e5,
        withCredentials: this._options.withCredentials,
      };
    n === ke.Binary && (i.responseType = "arraybuffer");
    const l = `${t}&_=${Date.now()}`;
    this._logger.log(w.Trace, `(LongPolling transport) polling: ${l}.`);
    const a = await this._httpClient.get(l, i);
    (a.statusCode !== 200
      ? (this._logger.log(
          w.Error,
          `(LongPolling transport) Unexpected response code: ${a.statusCode}.`,
        ),
        (this._closeError = new Jt(a.statusText || "", a.statusCode)),
        (this._running = !1))
      : (this._running = !0),
      (this._receiving = this._poll(this._url, i)));
  }
  async _poll(t, n) {
    try {
      for (; this._running; )
        try {
          const r = `${t}&_=${Date.now()}`;
          this._logger.log(w.Trace, `(LongPolling transport) polling: ${r}.`);
          const o = await this._httpClient.get(r, n);
          o.statusCode === 204
            ? (this._logger.log(
                w.Information,
                "(LongPolling transport) Poll terminated by server.",
              ),
              (this._running = !1))
            : o.statusCode !== 200
              ? (this._logger.log(
                  w.Error,
                  `(LongPolling transport) Unexpected response code: ${o.statusCode}.`,
                ),
                (this._closeError = new Jt(o.statusText || "", o.statusCode)),
                (this._running = !1))
              : o.content
                ? (this._logger.log(
                    w.Trace,
                    `(LongPolling transport) data received. ${Tr(o.content, this._options.logMessageContent)}.`,
                  ),
                  this.onreceive && this.onreceive(o.content))
                : this._logger.log(
                    w.Trace,
                    "(LongPolling transport) Poll timed out, reissuing.",
                  );
        } catch (r) {
          this._running
            ? r instanceof Sl
              ? this._logger.log(
                  w.Trace,
                  "(LongPolling transport) Poll timed out, reissuing.",
                )
              : ((this._closeError = r), (this._running = !1))
            : this._logger.log(
                w.Trace,
                `(LongPolling transport) Poll errored after shutdown: ${r.message}`,
              );
        }
    } finally {
      (this._logger.log(w.Trace, "(LongPolling transport) Polling complete."),
        this.pollAborted || this._raiseOnClose());
    }
  }
  async send(t) {
    return this._running
      ? ld(
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
    (this._logger.log(w.Trace, "(LongPolling transport) Stopping polling."),
      (this._running = !1),
      this._pollAbort.abort());
    try {
      (await this._receiving,
        this._logger.log(
          w.Trace,
          `(LongPolling transport) sending DELETE request to ${this._url}.`,
        ));
      const t = {},
        [n, r] = zn();
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
        ? s instanceof Jt &&
          (s.statusCode === 404
            ? this._logger.log(
                w.Trace,
                "(LongPolling transport) A 404 response was returned from sending a DELETE request.",
              )
            : this._logger.log(
                w.Trace,
                `(LongPolling transport) Error sending a DELETE request: ${s}`,
              ))
        : this._logger.log(
            w.Trace,
            "(LongPolling transport) DELETE request accepted.",
          );
    } finally {
      (this._logger.log(w.Trace, "(LongPolling transport) Stop finished."),
        this._raiseOnClose());
    }
  }
  _raiseOnClose() {
    if (this.onclose) {
      let t = "(LongPolling transport) Firing onclose event.";
      (this._closeError && (t += " Error: " + this._closeError),
        this._logger.log(w.Trace, t),
        this.onclose(this._closeError));
    }
  }
}
class Bp {
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
      le.isRequired(t, "url"),
      le.isRequired(n, "transferFormat"),
      le.isIn(n, ke, "transferFormat"),
      this._logger.log(w.Trace, "(SSE transport) Connecting."),
      (this._url = t),
      this._accessToken &&
        (t +=
          (t.indexOf("?") < 0 ? "?" : "&") +
          `access_token=${encodeURIComponent(this._accessToken)}`),
      new Promise((r, o) => {
        let s = !1;
        if (n !== ke.Text) {
          o(
            new Error(
              "The Server-Sent Events transport only supports the 'Text' transfer format",
            ),
          );
          return;
        }
        let i;
        if (Z.isBrowser || Z.isWebWorker)
          i = new this._options.EventSource(t, {
            withCredentials: this._options.withCredentials,
          });
        else {
          const l = this._httpClient.getCookieString(t),
            a = {};
          a.Cookie = l;
          const [c, p] = zn();
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
                  w.Trace,
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
              (this._logger.log(w.Information, `SSE connected to ${this._url}`),
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
      ? ld(this._logger, "SSE", this._httpClient, this._url, t, this._options)
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
class Wp {
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
    (le.isRequired(t, "url"),
      le.isRequired(n, "transferFormat"),
      le.isIn(n, ke, "transferFormat"),
      this._logger.log(w.Trace, "(WebSockets transport) Connecting."));
    let r;
    return (
      this._accessTokenFactory && (r = await this._accessTokenFactory()),
      new Promise((o, s) => {
        t = t.replace(/^http/, "ws");
        let i;
        const l = this._httpClient.getCookieString(t);
        let a = !1;
        if (Z.isNode || Z.isReactNative) {
          const c = {},
            [p, g] = zn();
          ((c[p] = g),
            r && (c[Zt.Authorization] = `Bearer ${r}`),
            l && (c[Zt.Cookie] = l),
            (i = new this._webSocketConstructor(t, void 0, {
              headers: { ...c, ...this._headers },
            })));
        } else
          r &&
            (t +=
              (t.indexOf("?") < 0 ? "?" : "&") +
              `access_token=${encodeURIComponent(r)}`);
        (i || (i = new this._webSocketConstructor(t)),
          n === ke.Binary && (i.binaryType = "arraybuffer"),
          (i.onopen = (c) => {
            (this._logger.log(w.Information, `WebSocket connected to ${t}.`),
              (this._webSocket = i),
              (a = !0),
              o());
          }),
          (i.onerror = (c) => {
            let p = null;
            (typeof ErrorEvent < "u" && c instanceof ErrorEvent
              ? (p = c.error)
              : (p = "There was an error with the transport"),
              this._logger.log(w.Information, `(WebSockets transport) ${p}.`));
          }),
          (i.onmessage = (c) => {
            if (
              (this._logger.log(
                w.Trace,
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
          w.Trace,
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
      this._logger.log(w.Trace, "(WebSockets transport) socket closed."),
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
const Aa = 100;
class Vp {
  constructor(t, n = {}) {
    if (
      ((this._stopPromiseResolver = () => {}),
      (this.features = {}),
      (this._negotiateVersion = 1),
      le.isRequired(t, "url"),
      (this._logger = kp(n.logger)),
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
    if (Z.isNode && typeof require < "u") {
      const s =
        typeof __webpack_require__ == "function"
          ? __non_webpack_require__
          : require;
      ((r = s("ws")), (o = s("eventsource")));
    }
    (!Z.isNode && typeof WebSocket < "u" && !n.WebSocket
      ? (n.WebSocket = WebSocket)
      : Z.isNode && !n.WebSocket && r && (n.WebSocket = r),
      !Z.isNode && typeof EventSource < "u" && !n.EventSource
        ? (n.EventSource = EventSource)
        : Z.isNode && !n.EventSource && typeof o < "u" && (n.EventSource = o),
      (this._httpClient = new Up(
        n.httpClient || new Dp(this._logger),
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
      ((t = t || ke.Binary),
      le.isIn(t, ke, "transferFormat"),
      this._logger.log(
        w.Debug,
        `Starting connection with transfer format '${ke[t]}'.`,
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
        this._logger.log(w.Error, n),
        await this._stopPromise,
        Promise.reject(new nt(n))
      );
    } else if (this._connectionState !== "Connected") {
      const n =
        "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
      return (this._logger.log(w.Error, n), Promise.reject(new nt(n)));
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
      : (this._sendQueue || (this._sendQueue = new Cl(this.transport)),
        this._sendQueue.send(t));
  }
  async stop(t) {
    if (this._connectionState === "Disconnected")
      return (
        this._logger.log(
          w.Debug,
          `Call to HttpConnection.stop(${t}) ignored because the connection is already in the disconnected state.`,
        ),
        Promise.resolve()
      );
    if (this._connectionState === "Disconnecting")
      return (
        this._logger.log(
          w.Debug,
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
          w.Error,
          `HttpConnection.transport.stop() threw error '${n}'.`,
        ),
          this._stopConnection());
      }
      this.transport = void 0;
    } else
      this._logger.log(
        w.Debug,
        "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.",
      );
  }
  async _startInternal(t) {
    let n = this.baseUrl;
    ((this._accessTokenFactory = this._options.accessTokenFactory),
      (this._httpClient._accessTokenFactory = this._accessTokenFactory));
    try {
      if (this._options.skipNegotiation)
        if (this._options.transport === ce.WebSockets)
          ((this.transport = this._constructTransport(ce.WebSockets)),
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
            throw new nt("The connection was stopped during negotiation.");
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
        } while (r.url && o < Aa);
        if (o === Aa && r.url)
          throw new Error("Negotiate redirection limit exceeded.");
        await this._createTransport(n, this._options.transport, r, t);
      }
      (this.transport instanceof Fa && (this.features.inherentKeepAlive = !0),
        this._connectionState === "Connecting" &&
          (this._logger.log(
            w.Debug,
            "The HttpConnection connected successfully.",
          ),
          (this._connectionState = "Connected")));
    } catch (r) {
      return (
        this._logger.log(w.Error, "Failed to start the connection: " + r),
        (this._connectionState = "Disconnected"),
        (this.transport = void 0),
        this._stopPromiseResolver(),
        Promise.reject(r)
      );
    }
  }
  async _getNegotiationResponse(t) {
    const n = {},
      [r, o] = zn();
    n[r] = o;
    const s = this._resolveNegotiateUrl(t);
    this._logger.log(w.Debug, `Sending negotiation request: ${s}.`);
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
              new $a(
                "Client didn't negotiate Stateful Reconnect but the server did.",
              ),
            )
          : l
      );
    } catch (i) {
      let l = "Failed to complete negotiation with the server: " + i;
      return (
        i instanceof Jt &&
          i.statusCode === 404 &&
          (l =
            l +
            " Either this is not a SignalR endpoint or there is a proxy blocking the connection."),
        this._logger.log(w.Error, l),
        Promise.reject(new $a(l))
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
        w.Debug,
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
              w.Error,
              `Failed to start the transport '${c.transport}': ${g}`,
            ),
            (a = void 0),
            i.push(new wp(`${c.transport} failed: ${g}`, ce[c.transport])),
            this._connectionState !== "Connecting")
          ) {
            const m = "Failed to select transport before stop() was called.";
            return (this._logger.log(w.Debug, m), Promise.reject(new nt(m)));
          }
        }
      }
    }
    return i.length > 0
      ? Promise.reject(
          new _p(
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
      case ce.WebSockets:
        if (!this._options.WebSocket)
          throw new Error("'WebSocket' is not supported in your environment.");
        return new Wp(
          this._httpClient,
          this._accessTokenFactory,
          this._logger,
          this._options.logMessageContent,
          this._options.WebSocket,
          this._options.headers || {},
        );
      case ce.ServerSentEvents:
        if (!this._options.EventSource)
          throw new Error(
            "'EventSource' is not supported in your environment.",
          );
        return new Bp(
          this._httpClient,
          this._httpClient._accessToken,
          this._logger,
          this._options,
        );
      case ce.LongPolling:
        return new Fa(this._httpClient, this._logger, this._options);
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
    const s = ce[t.transport];
    if (s == null)
      return (
        this._logger.log(
          w.Debug,
          `Skipping transport '${t.transport}' because it is not supported by this client.`,
        ),
        new Error(
          `Skipping transport '${t.transport}' because it is not supported by this client.`,
        )
      );
    if (Qp(n, s))
      if (t.transferFormats.map((l) => ke[l]).indexOf(r) >= 0) {
        if (
          (s === ce.WebSockets && !this._options.WebSocket) ||
          (s === ce.ServerSentEvents && !this._options.EventSource)
        )
          return (
            this._logger.log(
              w.Debug,
              `Skipping transport '${ce[s]}' because it is not supported in your environment.'`,
            ),
            new yp(`'${ce[s]}' is not supported in your environment.`, s)
          );
        this._logger.log(w.Debug, `Selecting transport '${ce[s]}'.`);
        try {
          return (
            (this.features.reconnect = s === ce.WebSockets ? o : void 0),
            this._constructTransport(s)
          );
        } catch (l) {
          return l;
        }
      } else
        return (
          this._logger.log(
            w.Debug,
            `Skipping transport '${ce[s]}' because it does not support the requested transfer format '${ke[r]}'.`,
          ),
          new Error(`'${ce[s]}' does not support ${ke[r]}.`)
        );
    else
      return (
        this._logger.log(
          w.Debug,
          `Skipping transport '${ce[s]}' because it was disabled by the client.`,
        ),
        new vp(`'${ce[s]}' is disabled by the client.`, s)
      );
  }
  _isITransport(t) {
    return t && typeof t == "object" && "connect" in t;
  }
  _stopConnection(t) {
    if (
      (this._logger.log(
        w.Debug,
        `HttpConnection.stopConnection(${t}) called while in state ${this._connectionState}.`,
      ),
      (this.transport = void 0),
      (t = this._stopError || t),
      (this._stopError = void 0),
      this._connectionState === "Disconnected")
    ) {
      this._logger.log(
        w.Debug,
        `Call to HttpConnection.stopConnection(${t}) was ignored because the connection is already in the disconnected state.`,
      );
      return;
    }
    if (this._connectionState === "Connecting")
      throw (
        this._logger.log(
          w.Warning,
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
            w.Error,
            `Connection disconnected with error '${t}'.`,
          )
        : this._logger.log(w.Information, "Connection disconnected."),
      this._sendQueue &&
        (this._sendQueue.stop().catch((n) => {
          this._logger.log(
            w.Error,
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
          w.Error,
          `HttpConnection.onclose(${t}) threw error '${n}'.`,
        );
      }
    }
  }
  _resolveUrl(t) {
    if (t.lastIndexOf("https://", 0) === 0 || t.lastIndexOf("http://", 0) === 0)
      return t;
    if (!Z.isBrowser) throw new Error(`Cannot resolve '${t}'.`);
    const n = window.document.createElement("a");
    return (
      (n.href = t),
      this._logger.log(w.Information, `Normalizing '${t}' to '${n.href}'.`),
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
function Qp(e, t) {
  return !e || (t & e) !== 0;
}
class Cl {
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
          : Cl._concatBuffers(this._buffer);
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
const Kp = "json";
class qp {
  constructor() {
    ((this.name = Kp), (this.version = 2), (this.transferFormat = ke.Text));
  }
  parseMessages(t, n) {
    if (typeof t != "string")
      throw new Error(
        "Invalid input for JSON hub protocol. Expected a string.",
      );
    if (!t) return [];
    n === null && (n = Nr.instance);
    const r = Fe.parse(t),
      o = [];
    for (const s of r) {
      const i = JSON.parse(s);
      if (typeof i.type != "number") throw new Error("Invalid payload.");
      switch (i.type) {
        case O.Invocation:
          this._isInvocationMessage(i);
          break;
        case O.StreamItem:
          this._isStreamItemMessage(i);
          break;
        case O.Completion:
          this._isCompletionMessage(i);
          break;
        case O.Ping:
          break;
        case O.Close:
          break;
        case O.Ack:
          this._isAckMessage(i);
          break;
        case O.Sequence:
          this._isSequenceMessage(i);
          break;
        default:
          n.log(
            w.Information,
            "Unknown message type '" + i.type + "' ignored.",
          );
          continue;
      }
      o.push(i);
    }
    return o;
  }
  writeMessage(t) {
    return Fe.write(JSON.stringify(t));
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
const Gp = {
  trace: w.Trace,
  debug: w.Debug,
  info: w.Information,
  information: w.Information,
  warn: w.Warning,
  warning: w.Warning,
  error: w.Error,
  critical: w.Critical,
  none: w.None,
};
function Xp(e) {
  const t = Gp[e.toLowerCase()];
  if (typeof t < "u") return t;
  throw new Error(`Unknown log level: ${e}`);
}
class Yp {
  configureLogging(t) {
    if ((le.isRequired(t, "logging"), Jp(t))) this.logger = t;
    else if (typeof t == "string") {
      const n = Xp(t);
      this.logger = new Oo(n);
    } else this.logger = new Oo(t);
    return this;
  }
  withUrl(t, n) {
    return (
      le.isRequired(t, "url"),
      le.isNotEmpty(t, "url"),
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
    return (le.isRequired(t, "protocol"), (this.protocol = t), this);
  }
  withAutomaticReconnect(t) {
    if (this.reconnectPolicy)
      throw new Error("A reconnectPolicy has already been set.");
    return (
      t
        ? Array.isArray(t)
          ? (this.reconnectPolicy = new za(t))
          : (this.reconnectPolicy = t)
        : (this.reconnectPolicy = new za()),
      this
    );
  }
  withServerTimeout(t) {
    return (
      le.isRequired(t, "milliseconds"),
      (this._serverTimeoutInMilliseconds = t),
      this
    );
  }
  withKeepAliveInterval(t) {
    return (
      le.isRequired(t, "milliseconds"),
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
    const n = new Vp(this.url, t);
    return kl.create(
      n,
      this.logger || Nr.instance,
      this.protocol || new qp(),
      this.reconnectPolicy,
      this._serverTimeoutInMilliseconds,
      this._keepAliveIntervalInMilliseconds,
      this._statefulReconnectBufferSize,
    );
  }
}
function Jp(e) {
  return e.log !== void 0;
}
const ad = N.createContext(void 0),
  Zp = ({ children: e }) => {
    const t = xl(),
      n = N.useRef(null),
      r = async () => {
        try {
          const i = [...(await se.getInventoryList())].sort((a, c) => {
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
        const s = new Yp()
            .withUrl(`${t.domain}/chatHub`)
            .withAutomaticReconnect()
            .configureLogging(w.Warning)
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
    return u.jsx(ad.Provider, {
      value: { connection: n.current, sendMessage: o, fetchInventoryItems: r },
      children: e,
    });
  },
  em = () => {
    const e = N.useContext(ad);
    if (!e) throw new Error("useSignalR must be used within a SignalRProvider");
    return e;
  },
  tm = ({ language: e, onLanguageChange: t }) => {
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
                    u.jsx(op, { className: "w-7 h-7" }),
                  ],
                }),
                u.jsxs("div", {
                  children: [
                    u.jsx("h1", {
                      className:
                        "text-2xl md:text-3xl font-semibold text-gray-800 mb-2",
                      children: I("inventoryManagement", e),
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
                    u.jsx(rp, { className: "h-5 w-5" }),
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
                    u.jsx(ip, { className: "h-5 w-5" }),
                    u.jsx("span", {
                      className: "ml-2 hidden sm:inline",
                      children: I("logout", e),
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
  nm = ({ tabs: e, activeTab: t, language: n, onTabChange: r }) =>
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
                children: I(o.name, n),
              },
              o.id,
            ),
          ),
        }),
      }),
    }),
  Te = ({
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
  rm = ({ isOpen: e, onClose: t, inventoryId: n, language: r }) => {
    const [o, s] = N.useState([]),
      [i, l] = N.useState(!1),
      [a, c] = N.useState("");
    N.useEffect(() => {
      e && n && g();
    }, [e, n]);
    const p = (m, _) => {
        if (!m || !_) return [];
        const x = m.split(",").filter((d) => d.trim()),
          k = _.split(",").filter((d) => d.trim()),
          L = [],
          f = Math.max(x.length, k.length);
        for (let d = 0; d < f; d++)
          L.push({
            userId: x[d] || `User ${d + 1}`,
            userName: k[d] || "Unknown User",
          });
        return L;
      },
      g = async () => {
        try {
          (l(!0), c(""));
          const _ = (await se.getOnlineUsers()).find((x) => x.parameter === n);
          if (_ && _.user_id && _.user_name) {
            const x = p(_.user_id, _.user_name);
            s(x);
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
                      children: u.jsx(At, { className: "h-6 w-6" }),
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
                            u.jsx($o, { className: "w-6 h-6 text-blue-600" }),
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
                                  children: o.map((m, _) =>
                                    u.jsxs(
                                      "div",
                                      {
                                        className:
                                          "flex items-center gap-3 p-2 bg-gray-50 rounded-lg border",
                                        children: [
                                          u.jsx(hp, {
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
                                      _,
                                    ),
                                  ),
                                })
                              : u.jsxs("div", {
                                  className: "text-center py-8",
                                  children: [
                                    u.jsx($o, {
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
  om = (e) => {
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
  sm = ({
    item: e,
    language: t,
    onlineUserCount: n,
    onDelete: r,
    onLock: o,
    onAddMedicine: s,
    onEditStaff: i,
    onRenameSuccess: l,
    batchMode: a = !1,
    isSelected: c = !1,
    onSelect: p,
  }) => {
    const { showLoading: g, hideLoading: m } = Mr(),
      _ = e.STATE === "鎖定",
      [x, k] = N.useState(!1),
      [L, f] = N.useState(!1),
      [d, h] = N.useState(e.IC_NAME),
      [y, v] = N.useState(!1),
      C = N.useRef(null);
    N.useEffect(() => {
      var M;
      L && ((M = C.current) == null || M.focus());
    }, [L]);
    const S = (M) => {
        (M.stopPropagation(), h(e.IC_NAME), f(!0));
      },
      T = () => {
        (f(!1), h(e.IC_NAME));
      },
      R = async () => {
        const M = d.trim();
        if (!M || M === e.IC_NAME) {
          T();
          return;
        }
        v(!0);
        try {
          (await se.updateInventoryName(e.GUID, M), l && l(e.IC_SN, M), f(!1));
        } catch (q) {
          console.error("Failed to rename inventory:", q);
        } finally {
          v(!1);
        }
      },
      D = (M) => {
        (M.key === "Enter" && R(), M.key === "Escape" && T());
      },
      H = async () => {
        try {
          (g(), await se.downloadExcel(e));
        } catch (M) {
          console.error("Failed to download Excel:", M);
        } finally {
          m();
        }
      },
      Ye = () => {
        (sessionStorage.setItem("IC_SN", e.IC_SN),
          e.IC_SN.includes("EVD")
            ? (location.href = "../inventory_daily/index.html?administrator")
            : (location.href = "../inventory/index.html?administrator"));
      },
      re = async () => {
        const M =
          t === "en"
            ? `Are you sure you want to delete inventory ${e.IC_SN}?`
            : `確定要刪除盤點單 ${e.IC_SN} 嗎？`;
        if (window.confirm(M))
          try {
            (g(), await r(e.IC_SN));
          } finally {
            m();
          }
      },
      B = async () => {
        const M =
          t === "en"
            ? `Are you sure you want to ${_ ? "unlock" : "lock"} inventory ${e.IC_SN}?`
            : `確定要${_ ? "解鎖" : "鎖定"}盤點單 ${e.IC_SN} 嗎？`;
        if (window.confirm(M))
          try {
            (g(), await o(e.IC_SN));
          } finally {
            m();
          }
      };
    return u.jsxs("div", {
      className: `rounded-lg shadow-lg p-6 transition-all duration-200 ${om(e.STATE)} ${a ? "cursor-pointer hover:ring-2 hover:ring-blue-400" : ""} ${c ? "ring-4 ring-blue-500" : ""}`,
      onClick: () => a && p && p(e.IC_SN),
      children: [
        u.jsx("div", {
          className: "flex justify-between items-start mb-4",
          children: u.jsxs("div", {
            className: "flex-1",
            children: [
              a &&
                u.jsxs("div", {
                  className: "flex items-center mb-3",
                  children: [
                    u.jsx("input", {
                      type: "checkbox",
                      checked: c,
                      onChange: () => p && p(e.IC_SN),
                      className:
                        "w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 cursor-pointer",
                      onClick: (M) => M.stopPropagation(),
                    }),
                    u.jsx("label", {
                      className: "ml-3 text-base font-medium text-gray-700",
                      children: c ? "已選取" : "點擊選取",
                    }),
                  ],
                }),
              u.jsxs("div", {
                className: "flex items-center gap-4 mb-2",
                children: [
                  u.jsxs("h3", {
                    className: "text-lg font-semibold text-gray-900",
                    children: [I("ic_sn", t), ": ", e.IC_SN],
                  }),
                  !_ &&
                    u.jsxs("div", {
                      className:
                        "flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full cursor-pointer hover:bg-green-200 transition-colors",
                      onClick: () => k(!0),
                      title:
                        t === "en"
                          ? "Click to view online users"
                          : "點擊查看線上使用者",
                      children: [
                        u.jsx($o, { className: "w-5 h-5 text-green-600" }),
                        u.jsxs("span", {
                          className: "text-lg font-medium text-green-700",
                          children: [n, " ", t === "en" ? "online" : "線上"],
                        }),
                      ],
                    }),
                ],
              }),
              L
                ? u.jsxs("div", {
                    className: "flex items-center gap-2 mt-1",
                    onClick: (M) => M.stopPropagation(),
                    children: [
                      u.jsx("input", {
                        ref: C,
                        value: d,
                        onChange: (M) => h(M.target.value),
                        onKeyDown: D,
                        disabled: y,
                        className:
                          "flex-1 text-base font-semibold border-b-2 border-blue-500 bg-transparent focus:outline-none text-gray-900 py-0.5",
                      }),
                      u.jsx("button", {
                        type: "button",
                        onClick: R,
                        disabled: y,
                        className:
                          "p-1 rounded text-green-600 hover:bg-green-50 transition-colors disabled:opacity-50",
                        children: u.jsx(td, { className: "h-4 w-4" }),
                      }),
                      u.jsx("button", {
                        type: "button",
                        onClick: T,
                        disabled: y,
                        className:
                          "p-1 rounded text-gray-400 hover:bg-gray-100 transition-colors",
                        children: u.jsx(At, { className: "h-4 w-4" }),
                      }),
                    ],
                  })
                : u.jsxs("div", {
                    className: "flex items-center gap-2 mt-1",
                    children: [
                      u.jsx("p", {
                        className:
                          "text-lg font-semibold text-gray-900 underline",
                        children: e.IC_NAME,
                      }),
                      u.jsx("button", {
                        type: "button",
                        onClick: S,
                        className:
                          "p-1 rounded text-gray-400 hover:text-blue-500 hover:bg-blue-50 transition-all",
                        title: t === "zh" ? "修改名稱" : "Rename",
                        children: u.jsx(lp, { className: "h-3.5 w-3.5" }),
                      }),
                    ],
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
                  children: [I("creator", t), ": "],
                }),
                e.CT,
              ],
            }),
            u.jsxs("p", {
              className: "text-base",
              children: [
                u.jsxs("span", {
                  className: "font-medium",
                  children: [I("staff", t), ": "],
                }),
                e.DEFAULT_OP || "-",
              ],
            }),
            u.jsxs("p", {
              className: "text-base",
              children: [
                u.jsxs("span", {
                  className: "font-medium",
                  children: [I("start", t), ": "],
                }),
                new Date(e.START_TIME).toLocaleString(),
              ],
            }),
            u.jsxs("p", {
              className: "text-base",
              children: [
                u.jsxs("span", {
                  className: "font-medium",
                  children: [I("end", t), ": "],
                }),
                new Date(e.END_TIME).toLocaleString(),
              ],
            }),
            u.jsxs("p", {
              className: "text-base",
              children: [
                u.jsxs("span", {
                  className: "font-medium",
                  children: [I("status", t), ": "],
                }),
                e.STATE,
              ],
            }),
          ],
        }),
        u.jsxs("div", {
          className: "flex flex-wrap gap-2",
          children: [
            u.jsx(Te, {
              variant: "secondary",
              icon: ap,
              onClick: () => s(e.IC_SN),
              children: I("addMedicine", t),
            }),
            u.jsx(Te, {
              variant: "secondary",
              icon: fp,
              onClick: () => i(e.IC_SN),
              children: I("editStaff", t),
            }),
            u.jsx(Te, {
              variant: "secondary",
              icon: nd,
              onClick: H,
              children: I("downloadExcel", t),
            }),
            u.jsx(Te, {
              variant: "pass",
              icon: _ ? Ei : rd,
              className: `inline-flex items-center px-4 py-2 border border-transparent rounded-lg text-base font-medium text-white ${_ ? "bg-green-600 hover:bg-green-700 focus:ring-green-500" : "border-yellow-600 bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-500"} focus:outline-none focus:ring-2 focus:ring-offset-2`,
              onClick: B,
              children: _
                ? t === "en"
                  ? "Unlock"
                  : "鎖定中"
                : t === "en"
                  ? "Lock"
                  : "開放中",
            }),
            u.jsx(Te, {
              variant: "danger",
              icon: dp,
              className:
                "inline-flex items-center px-4 py-2 border border-transparent rounded-lg text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
              onClick: re,
              children: t === "en" ? "Delete" : "刪除",
            }),
            !_ &&
              u.jsx(Te, {
                variant: "pass",
                icon: sp,
                onClick: Ye,
                children: I("enterInventory", t),
              }),
          ],
        }),
        u.jsx(rm, {
          isOpen: x,
          onClose: () => k(!1),
          inventoryId: e.IC_SN,
          language: t,
        }),
      ],
    });
  },
  im = ({
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
          y = String(d.getMonth() + 1).padStart(2, "0"),
          v = String(d.getDate()).padStart(2, "0");
        return `${h}-${y}-${v}`;
      },
      m = (d, h) => {
        const y = new Date(d);
        return (y.setDate(y.getDate() + h), y);
      },
      _ = () => {
        (i(""), a(""), p(""));
      },
      x = () => {
        (_(), t());
      },
      k = async (d, h, y) => {
        try {
          let v;
          if (d && h) {
            const S = g(m(new Date(h), 1));
            v = await se.getInventoryList(d, S);
          } else v = await se.getInventoryList();
          console.log("API Results:", v);
          let C = v;
          if (y) {
            const S = y.toLowerCase();
            C = v.filter((T) => T.IC_SN.toLowerCase().includes(S));
          }
          (r(C), x());
        } catch (v) {
          console.error("Search failed:", v);
        }
      },
      L = async (d) => {
        (d.preventDefault(), await k(l, c, s));
      },
      f = async (d) => {
        const h = new Date(),
          y = g(h);
        let v = "";
        switch (d) {
          case "today":
            v = y;
            break;
          case "week":
            v = g(m(h, -7));
            break;
          case "month":
            v = g(m(h, -30));
            break;
          case "threeMonths":
            v = g(m(h, -90));
            break;
          case "sixMonths":
            v = g(m(h, -180));
            break;
          case "year":
            v = g(m(h, -365));
            break;
        }
        await k(v, y, s);
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
                onClick: x,
              }),
              u.jsxs("div", {
                className:
                  "inline-block transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle",
                children: [
                  u.jsx("div", {
                    className: "absolute right-0 top-0 pr-4 pt-4",
                    children: u.jsx("button", {
                      onClick: x,
                      className: "text-gray-400 hover:text-gray-500",
                      children: u.jsx(At, { className: "h-6 w-6" }),
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
                          children: I("searchInventory", n),
                        }),
                        u.jsxs("form", {
                          onSubmit: L,
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
                                          children: I("from", n),
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
                                          children: I("to", n),
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
                                      children: I("quickSearch", n),
                                    }),
                                    u.jsxs("div", {
                                      className: "grid grid-cols-3 gap-2",
                                      children: [
                                        u.jsx("button", {
                                          type: "button",
                                          onClick: () => f("today"),
                                          className:
                                            "px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                                          children: I("today", n),
                                        }),
                                        u.jsx("button", {
                                          type: "button",
                                          onClick: () => f("week"),
                                          className:
                                            "px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                                          children: I("thisWeek", n),
                                        }),
                                        u.jsx("button", {
                                          type: "button",
                                          onClick: () => f("month"),
                                          className:
                                            "px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                                          children: I("oneMonth", n),
                                        }),
                                        u.jsx("button", {
                                          type: "button",
                                          onClick: () => f("threeMonths"),
                                          className:
                                            "px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                                          children: I("threeMonths", n),
                                        }),
                                        u.jsx("button", {
                                          type: "button",
                                          onClick: () => f("sixMonths"),
                                          className:
                                            "px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                                          children: I("sixMonths", n),
                                        }),
                                        u.jsx("button", {
                                          type: "button",
                                          onClick: () => f("year"),
                                          className:
                                            "px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                                          children: I("oneYear", n),
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
                                  children: I("inventoryNumber", n),
                                }),
                                u.jsx("div", {
                                  className: "mt-1",
                                  children: u.jsx("input", {
                                    type: "text",
                                    id: "inventoryNumber",
                                    className:
                                      "block w-full rounded-md px-2 py-1 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base",
                                    placeholder: I("enterInventoryNumber", n),
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
                                  children: I("search", n),
                                }),
                                u.jsx("button", {
                                  type: "button",
                                  onClick: x,
                                  className:
                                    "mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0",
                                  children: I("cancel", n),
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
  lm = ({
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
      [_, x] = N.useState(""),
      k = N.useRef(null),
      L = () => {
        (a(""), p(""), m(null), x(""), k.current && (k.current.value = ""));
      },
      f = () => {
        (L(), t());
      },
      d = (S) => {
        const T = [
            "application/vnd.ms-excel",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          ],
          R = [".xls", ".xlsx"],
          D = S.name.toLowerCase().slice(S.name.lastIndexOf("."));
        return !R.includes(D) || !T.includes(S.type)
          ? (x(I("invalidFileType", n)), !1)
          : (x(""), !0);
      },
      h = (S) => {
        var R;
        const T = (R = S.target.files) == null ? void 0 : R[0];
        T && (d(T) ? m(T) : m(null));
      },
      y = (S) => {
        S.preventDefault();
        const T = S.dataTransfer.files[0];
        T && d(T) && m(T);
      },
      v = (S) => {
        S.preventDefault();
      },
      C = async (S) => {
        if ((S.preventDefault(), !l || !g)) {
          x(I("fileRequired", n));
          return;
        }
        const T = sessionStorage.getItem("user_session");
        let R = "";
        try {
          T && (R = JSON.parse(T).Name || "");
        } catch (H) {
          console.error("Error parsing user session:", H);
        }
        const D = new FormData();
        (D.append("file", g),
          D.append("IC_NAME", l),
          D.append("CT", R),
          D.append("DEFAULT_OP", c));
        try {
          s();
          const H = await se.uploadExcel(D, o);
          H.Code == 200 ? (await r(), f()) : x(H.Result || "Upload failed");
        } catch (H) {
          (console.error("Upload failed:", H),
            x(H instanceof Error ? H.message : "Upload failed"));
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
                      children: u.jsx(At, { className: "h-6 w-6" }),
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
                          children: I("uploadExcelFile", n),
                        }),
                        u.jsxs("form", {
                          onSubmit: C,
                          className: "mt-4 space-y-4",
                          children: [
                            u.jsxs("div", {
                              children: [
                                u.jsx("label", {
                                  htmlFor: "inventoryName",
                                  className:
                                    "block text-base font-medium text-gray-700",
                                  children: I("uploadInventoryName", n),
                                }),
                                u.jsx("input", {
                                  type: "text",
                                  id: "inventoryName",
                                  value: l,
                                  onChange: (S) => a(S.target.value),
                                  className:
                                    "px-2 py-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base",
                                  placeholder: I("enterInventoryName", n),
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
                                  children: I("uploadInventoryStaff", n),
                                }),
                                u.jsx("input", {
                                  type: "text",
                                  id: "defaultStaff",
                                  value: c,
                                  onChange: (S) => p(S.target.value),
                                  className:
                                    "px-2 py-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base",
                                  placeholder: I("enterUploadStaffName", n),
                                }),
                              ],
                            }),
                            u.jsx("div", {
                              className:
                                "mt-4 flex justify-center rounded-lg border-2 border-dashed border-gray-300 px-6 py-8",
                              onDrop: y,
                              onDragOver: v,
                              children: u.jsxs("div", {
                                className: "text-center",
                                children: [
                                  u.jsx(od, {
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
                                            children: I("selectFile", n),
                                          }),
                                          u.jsx("input", {
                                            id: "file-upload",
                                            name: "file-upload",
                                            type: "file",
                                            ref: k,
                                            className: "sr-only",
                                            accept: ".xls,.xlsx",
                                            onChange: h,
                                          }),
                                        ],
                                      }),
                                      u.jsx("p", {
                                        className: "pl-1",
                                        children: I("dragAndDrop", n),
                                      }),
                                    ],
                                  }),
                                  u.jsx("p", {
                                    className: "text-sm text-gray-500 mt-2",
                                    children: I("excelFilesOnly", n),
                                  }),
                                  g &&
                                    u.jsx("p", {
                                      className: "text-sm text-green-600 mt-2",
                                      children: g.name,
                                    }),
                                  _ &&
                                    u.jsx("p", {
                                      className: "text-sm text-red-600 mt-2",
                                      children: _,
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
                                  children: I("upload", n),
                                }),
                                u.jsx("button", {
                                  type: "button",
                                  onClick: f,
                                  className:
                                    "mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0",
                                  children: I("cancel", n),
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
  Ds = ({ label: e, options: t, selectedOptions: n, onToggle: r }) =>
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
  am = ({
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
      [_, x] = N.useState([]),
      [k, L] = N.useState([]),
      [f, d] = N.useState([]),
      [h, y] = N.useState([]),
      [v, C] = N.useState([]),
      S = ["N", "1", "2", "3", "4"];
    (N.useEffect(() => {
      if (i && i.length > 0) {
        const B = i.map((M) => M.NAME).filter(Boolean);
        y(B);
      }
    }, [i]),
      N.useEffect(() => {
        if (s && s.length > 0) {
          const B = [...new Set(s.map((M) => M.TYPE).filter(Boolean))];
          C(B);
        }
      }, [s]));
    const T = () => {
        (p(""), m(""), x([]), L([]), d([]));
      },
      R = () => {
        (T(), t());
      },
      D = (B) => {
        x((M) => (M.includes(B) ? M.filter((q) => q !== B) : [...M, B]));
      },
      H = (B) => {
        L((M) => (M.includes(B) ? M.filter((q) => q !== B) : [...M, B]));
      },
      Ye = (B) => {
        d((M) => (M.includes(B) ? M.filter((q) => q !== B) : [...M, B]));
      },
      re = async (B) => {
        if ((B.preventDefault(), !c.trim())) {
          m(I("enterInventoryName", n));
          return;
        }
        const M =
          n === "en"
            ? `Are you sure you want to create inventory "${c}"?`
            : `確定要建立盤點單 "${c}" 嗎？`;
        if (window.confirm(M))
          try {
            l();
            const q = sessionStorage.getItem("user_session");
            let Ee = "";
            (q && (Ee = JSON.parse(q).Name || ""),
              console.log("Selected filters:", {
                medQtyGroups: _,
                controlLevels: k,
                medTypes: f,
              }));
            const j = await se.createInventory(
              {
                IC_NAME: c,
                CT: Ee,
                selectedMedQtyGroups: _,
                selectedControlLevels: k,
                selectedMedTypes: f,
              },
              o,
            );
            j.Code === 200
              ? (r && (await r()), R())
              : m(j.Result || "Failed to create inventory");
          } catch (q) {
            (console.error("Failed to create inventory:", q),
              m(q instanceof Error ? q.message : "Failed to create inventory"));
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
                      children: u.jsx(At, { className: "h-6 w-6" }),
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
                          children: I("createNewInventory", n),
                        }),
                        u.jsxs("form", {
                          onSubmit: re,
                          className: "mt-4 space-y-4",
                          children: [
                            u.jsxs("div", {
                              children: [
                                u.jsx("label", {
                                  htmlFor: "inventoryName",
                                  className:
                                    "block text-base font-medium text-gray-700",
                                  children: I("inventoryName", n),
                                }),
                                u.jsx("input", {
                                  type: "text",
                                  id: "inventoryName",
                                  value: c,
                                  onChange: (B) => p(B.target.value),
                                  className:
                                    "px-2 py-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-base",
                                  placeholder: I("enterInventoryName", n),
                                  required: !0,
                                }),
                              ],
                            }),
                            u.jsx(Ds, {
                              label: I("medQtyGroup", n),
                              options: h,
                              selectedOptions: _,
                              onToggle: D,
                            }),
                            u.jsx(Ds, {
                              label: I("controlLevel", n),
                              options: S,
                              selectedOptions: k,
                              onToggle: H,
                            }),
                            u.jsx(Ds, {
                              label: I("medTypeGroup", n),
                              options: v,
                              selectedOptions: f,
                              onToggle: Ye,
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
                                  children: I("create", n),
                                }),
                                u.jsx("button", {
                                  type: "button",
                                  onClick: R,
                                  className:
                                    "mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-base",
                                  children: I("cancel", n),
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
  um = ({ isOpen: e, onClose: t, inventoryId: n, language: r }) => {
    const [o, s] = N.useState(""),
      [i, l] = N.useState([]),
      [a, c] = N.useState([]),
      [p, g] = N.useState(!1),
      [m, _] = N.useState("");
    N.useEffect(() => {
      e && x();
    }, [e]);
    const x = async () => {
        try {
          (g(!0), _(""));
          const f = await se.getMedicineList();
          l(f);
        } catch (f) {
          (_(f instanceof Error ? f.message : "Failed to fetch medicines"),
            console.error("Error fetching medicines:", f));
        } finally {
          g(!1);
        }
      },
      k = () => {
        if (!o.trim()) {
          c([]);
          return;
        }
        const f = o.toLowerCase(),
          d = i.filter((h) => {
            var y, v, C, S;
            return (
              ((y = h.CODE) == null ? void 0 : y.toLowerCase().includes(f)) ||
              ((v = h.NAME) == null ? void 0 : v.toLowerCase().includes(f)) ||
              ((C = h.CHT_NAME) == null
                ? void 0
                : C.toLowerCase().includes(f)) ||
              ((S = h.BARCODE) == null
                ? void 0
                : S.some((T) => T.toLowerCase().includes(f)))
            );
          });
        c(d);
      },
      L = async (f) => {
        try {
          (await se.addMedicineToInventory(n, { ...f, QUANTITY: 1 }), t());
        } catch (d) {
          _(d instanceof Error ? d.message : "Failed to add medicine");
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
                    children: I("addMedicineTitle", r),
                  }),
                  u.jsx("button", {
                    onClick: t,
                    className: "text-gray-400 hover:text-gray-500",
                    children: u.jsx(At, { className: "w-6 h-6" }),
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
                        onKeyPress: (f) => f.key === "Enter" && k(),
                        placeholder: I("enterSearchTerm", r),
                        className:
                          "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500",
                      }),
                    }),
                    u.jsxs("button", {
                      onClick: k,
                      className:
                        "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2",
                      children: [
                        u.jsx(_l, { className: "w-5 h-5" }),
                        I("search", r),
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
                                              children: I("mm_code", r),
                                            }),
                                            u.jsx("span", { children: f.CODE }),
                                          ],
                                        }),
                                        f.SKDIACODE &&
                                          u.jsxs("div", {
                                            children: [
                                              u.jsx("span", {
                                                className: "font-medium",
                                                children: I("mm_sdkiacode", r),
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
                                              children: I("mm_name", r),
                                            }),
                                            u.jsx("span", { children: f.NAME }),
                                          ],
                                        }),
                                        u.jsxs("div", {
                                          children: [
                                            u.jsx("span", {
                                              className: "font-medium",
                                              children: I("mm_chtname", r),
                                            }),
                                            u.jsx("span", {
                                              children: f.CHT_NAME,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    u.jsx("button", {
                                      onClick: () => L(f),
                                      className:
                                        "px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700",
                                      children: I("add", r),
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
                            children: I("mm_notfound", r),
                          })
                        : null,
              }),
            ],
          }),
        })
      : null;
  },
  cm = ({
    isOpen: e,
    onClose: t,
    inventoryId: n,
    language: r,
    onUpdateSuccess: o,
  }) => {
    const [s, i] = N.useState([]),
      [l, a] = N.useState([]),
      [c, p] = N.useState(new Set()),
      [g, m] = N.useState(""),
      [_, x] = N.useState(!1),
      [k, L] = N.useState(!1);
    N.useEffect(() => {
      if (!e) {
        (i([]), a([]), p(new Set()), m(""), L(!1));
        return;
      }
      (async () => {
        if (n) {
          x(!0);
          try {
            const [C, S] = await Promise.all([
                se.getInventoryList(),
                se.getAllPersons(),
              ]),
              T = C.find((D) => D.IC_SN === n),
              R =
                T != null && T.DEFAULT_OP
                  ? T.DEFAULT_OP.split(",")
                      .map((D) => D.trim())
                      .filter(Boolean)
                  : [];
            (i(S), a(R), p(new Set(R)));
          } catch (C) {
            console.error("Failed to load staff data:", C);
          } finally {
            x(!1);
          }
        }
      })();
    }, [e, n]);
    const f = N.useMemo(() => {
        if (!g.trim()) return s;
        const v = g.toLowerCase();
        return s.filter(
          (C) =>
            C.name.toLowerCase().includes(v) ||
            C.ID.toLowerCase().includes(v) ||
            C.employer.toLowerCase().includes(v),
        );
      }, [s, g]),
      d = N.useMemo(() => {
        const v = Array.from(c).sort(),
          C = [...l].sort();
        return v.length !== C.length ? !0 : v.some((S, T) => S !== C[T]);
      }, [c, l]),
      h = (v) => {
        p((C) => {
          const S = new Set(C);
          return (S.has(v) ? S.delete(v) : S.add(v), S);
        });
      },
      y = async (v) => {
        if ((v.preventDefault(), !!d)) {
          L(!0);
          try {
            const C = Array.from(c),
              S = await se.updateInventoryStaff(n, C);
            S && S.Code === 200 && (o && (await o()), t());
          } catch (C) {
            console.error("Failed to update staff:", C);
          } finally {
            L(!1);
          }
        }
      };
    return e
      ? u.jsx("div", {
          className: "fixed inset-0 z-50 overflow-y-auto",
          children: u.jsxs("div", {
            className:
              "flex min-h-screen items-center justify-center px-4 py-6 text-center sm:p-0",
            children: [
              u.jsx("div", {
                className:
                  "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                onClick: t,
              }),
              u.jsxs("div", {
                className:
                  "relative inline-block transform overflow-hidden rounded-xl bg-white text-left align-middle shadow-xl transition-all w-full sm:max-w-lg flex flex-col",
                style: { height: "76vh", maxHeight: "680px" },
                children: [
                  u.jsxs("div", {
                    className:
                      "flex items-center justify-between px-6 py-4 border-b border-gray-200",
                    children: [
                      u.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          u.jsx($o, { className: "h-5 w-5 text-blue-600" }),
                          u.jsx("h3", {
                            className: "text-lg font-semibold text-gray-900",
                            children: I("editStaffTitle", r),
                          }),
                        ],
                      }),
                      u.jsx("button", {
                        onClick: t,
                        className:
                          "text-gray-400 hover:text-gray-600 transition-colors",
                        children: u.jsx(At, { className: "h-5 w-5" }),
                      }),
                    ],
                  }),
                  _
                    ? u.jsx("div", {
                        className: "flex justify-center items-center h-48",
                        children: u.jsx("div", {
                          className:
                            "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600",
                        }),
                      })
                    : u.jsxs("form", {
                        onSubmit: y,
                        className: "flex flex-col flex-1 min-h-0",
                        children: [
                          u.jsxs("div", {
                            className:
                              "px-6 pt-4 pb-2 flex items-center justify-between",
                            children: [
                              u.jsx("span", {
                                className: "text-sm text-gray-500",
                                children:
                                  r === "zh"
                                    ? `已選取 ${c.size} 位人員`
                                    : `${c.size} staff selected`,
                              }),
                              c.size > 0 &&
                                u.jsx("button", {
                                  type: "button",
                                  onClick: () => p(new Set()),
                                  className:
                                    "text-sm text-red-500 hover:text-red-700 transition-colors",
                                  children:
                                    r === "zh" ? "清除全部" : "Clear all",
                                }),
                            ],
                          }),
                          c.size > 0 &&
                            u.jsx("div", {
                              className: "px-6 pb-3 flex flex-wrap gap-2",
                              children: Array.from(c).map((v) =>
                                u.jsxs(
                                  "span",
                                  {
                                    className:
                                      "inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800",
                                    children: [
                                      v,
                                      u.jsx("button", {
                                        type: "button",
                                        onClick: () => h(v),
                                        className:
                                          "ml-1 text-blue-500 hover:text-blue-700",
                                        children: u.jsx(At, {
                                          className: "h-3 w-3",
                                        }),
                                      }),
                                    ],
                                  },
                                  v,
                                ),
                              ),
                            }),
                          u.jsx("div", {
                            className: "px-6 pb-3",
                            children: u.jsxs("div", {
                              className: "relative",
                              children: [
                                u.jsx(_l, {
                                  className:
                                    "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400",
                                }),
                                u.jsx("input", {
                                  type: "text",
                                  value: g,
                                  onChange: (v) => m(v.target.value),
                                  placeholder:
                                    r === "zh"
                                      ? "搜尋姓名、編號、部門..."
                                      : "Search name, ID, department...",
                                  className:
                                    "w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                }),
                              ],
                            }),
                          }),
                          u.jsx("div", {
                            className:
                              "px-6 pb-3 flex-1 overflow-y-auto min-h-0",
                            children:
                              f.length === 0
                                ? u.jsx("p", {
                                    className:
                                      "py-8 text-center text-sm text-gray-400",
                                    children:
                                      r === "zh"
                                        ? "無符合結果"
                                        : "No results found",
                                  })
                                : u.jsx("div", {
                                    className: "grid grid-cols-3 gap-2",
                                    children: f.map((v) => {
                                      const C = c.has(v.name);
                                      return u.jsxs(
                                        "button",
                                        {
                                          type: "button",
                                          onClick: () => h(v.name),
                                          className: `relative flex flex-col items-center justify-center gap-1 p-3 rounded-xl border-2 transition-all duration-150 text-center ${C ? "border-blue-500 bg-blue-50 shadow-sm" : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"}`,
                                          children: [
                                            C &&
                                              u.jsx("span", {
                                                className:
                                                  "absolute top-1.5 right-1.5 bg-blue-500 rounded-full p-0.5",
                                                children: u.jsx(td, {
                                                  className:
                                                    "h-2.5 w-2.5 text-white",
                                                }),
                                              }),
                                            u.jsx("p", {
                                              className: `text-sm font-semibold leading-tight ${C ? "text-blue-700" : "text-gray-800"}`,
                                              children: v.name,
                                            }),
                                            u.jsx("p", {
                                              className:
                                                "text-xs text-gray-400",
                                              children: v.ID,
                                            }),
                                          ],
                                        },
                                        v.GUID,
                                      );
                                    }),
                                  }),
                          }),
                          u.jsxs("div", {
                            className:
                              "px-6 py-4 border-t border-gray-200 flex gap-3 justify-end",
                            children: [
                              u.jsx("button", {
                                type: "button",
                                onClick: t,
                                className:
                                  "px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors",
                                children: I("cancel", r),
                              }),
                              u.jsx("button", {
                                type: "submit",
                                disabled: !d || k,
                                className:
                                  "px-4 py-2 rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed",
                                children: k
                                  ? r === "zh"
                                    ? "儲存中..."
                                    : "Saving..."
                                  : I("save", r),
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
  dm = ({ isOpen: e, onClose: t, language: n }) => {
    const r = xl(),
      { showLoading: o, hideLoading: s } = Mr(),
      [i, l] = N.useState(""),
      [a, c] = N.useState(""),
      [p, g] = N.useState(""),
      m = async (_) => {
        if ((_.preventDefault(), g(""), !i || !a)) {
          g(n === "en" ? "Please fill in all fields" : "請填寫所有欄位");
          return;
        }
        if (!(r != null && r.domain)) {
          g(n === "en" ? "System configuration error" : "系統配置錯誤");
          return;
        }
        try {
          o();
          const k = await (
            await fetch(`${r.domain}/api/session/login`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ Data: { ID: i, Password: a } }),
            })
          ).json();
          (console.log("Login response:", k),
            k.Code === 200
              ? (sessionStorage.setItem("user_session", JSON.stringify(k.Data)),
                t(),
                window.location.reload())
              : g(k.Result || (n === "en" ? "Login failed" : "登入失敗")));
        } catch (x) {
          (console.error("Login error:", x),
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
                        onChange: (_) => l(_.target.value),
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
                        onChange: (_) => c(_.target.value),
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
  Ua = [
    { id: "management", name: "management", href: "#" },
    { id: "merge", name: "merge", href: "../inventory_merge" },
    { id: "review", name: "review", href: "../inventory_review" },
    { id: "daily", name: "daily", href: "../inventory_daily_report" },
  ],
  Jr = { 等待盤點: 0, 盤點中: 1, 鎖定: 2 },
  fm = () => {
    const e = xl(),
      { showLoading: t, hideLoading: n } = Mr(),
      { sendMessage: r, fetchInventoryItems: o } = em(),
      [s, i] = N.useState("management"),
      [l, a] = N.useState("zh"),
      [c, p] = N.useState(!1),
      [g, m] = N.useState(!1),
      [_, x] = N.useState(!1),
      [k, L] = N.useState(!1),
      [f, d] = N.useState(!1),
      [h, y] = N.useState(!1),
      [v, C] = N.useState(""),
      [S, T] = N.useState("inventory"),
      [R, D] = N.useState("all"),
      [H, Ye] = N.useState(!1),
      [re, B] = N.useState(new Set()),
      [M, q] = N.useState([]),
      [Ee, j] = N.useState([]),
      [$, z] = N.useState([]),
      [Y, oe] = N.useState([]),
      [un, it] = N.useState([]),
      [cn, ft] = N.useState(!1);
    (N.useEffect(() => {
      dn();
    }, []),
      N.useEffect(() => {
        if (e) {
          (cd(), dd(), Wt(), El(), ud());
          const b = setInterval(El, 6e3);
          return () => clearInterval(b);
        }
      }, [e]),
      N.useEffect(() => {
        fd();
      }, [M, S, R]));
    const dn = () => {
        sessionStorage.getItem("user_session") || y(!0);
      },
      ud = async () => {
        try {
          const we = (
            (await se.getSettingByPageName("inventory")).Data || []
          ).find((We) => We.name === "daily_report");
          we && ft(we.value === "True" || we.value === "true");
        } catch (b) {
          console.error("Failed to fetch page settings:", b);
        }
      },
      cd = async () => {
        try {
          const b = await se.getMedCloud();
          (console.log("Medicine cloud data loaded:", b), oe(b.Data || []));
        } catch (b) {
          (console.error("Failed to fetch medicine cloud data:", b), oe([]));
        }
      },
      dd = async () => {
        try {
          const b = await se.getMedQtyGroup();
          (console.log("Medicine quantity group data loaded:", b),
            it(b.Data || []));
        } catch (b) {
          (console.error("Failed to fetch medicine quantity group data:", b),
            it([]));
        }
      },
      fd = () => {
        if (!M.length) {
          j([]);
          return;
        }
        const b = M.filter((U) => {
          let we = !1;
          S === "review"
            ? (we = U.IC_SN.includes("REV"))
            : S === "daily"
              ? (we = U.IC_SN.includes("EVD"))
              : (we = !U.IC_SN.includes("REV") && !U.IC_SN.includes("EVD"));
          let We = !1;
          return (
            R === "all"
              ? (We = !0)
              : R === "locked"
                ? (We = U.STATE === "鎖定")
                : R === "unlocked" && (We = U.STATE !== "鎖定"),
            we && We
          );
        });
        j(b);
      },
      Wt = async () => {
        try {
          const U = [...(await se.getInventoryList())].sort(
            (we, We) => (Jr[we.STATE] ?? 999) - (Jr[We.STATE] ?? 999),
          );
          q(U);
        } catch (b) {
          (console.error("Failed to fetch inventory items:", b), q([]));
        }
      },
      El = async () => {
        try {
          const b = await se.getOnlineUsers();
          z(b);
        } catch (b) {
          (console.error("Failed to fetch online users:", b), z([]));
        }
      },
      hd = (b) => {
        const U = $.find((we) => we.parameter === b);
        return U ? U.count : 0;
      },
      pd = (b) => {
        const U = [...b].sort(
          (we, We) => (Jr[we.STATE] ?? 999) - (Jr[We.STATE] ?? 999),
        );
        q(U);
      },
      md = async () => {
        await Wt();
      },
      gd = async () => {
        await Wt();
      },
      yd = async () => {
        try {
          (t(), await se.getExcelHeader());
        } catch (b) {
          console.error("Failed to download template:", b);
        } finally {
          n();
        }
      },
      vd = async (b) => {
        (await se.deleteInventory(b, r), await Wt());
      },
      wd = async (b, U) => {
        (await se.toggleLock(b, U, r), await Wt());
      },
      _d = () => {
        a((b) => (b === "en" ? "zh" : "en"));
      },
      ts = (b) => {
        T(b);
      },
      ns = (b) => {
        D(b);
      },
      Nl = () => {
        (Ye(!H), B(new Set()));
      },
      xd = (b) => {
        const U = new Set(re);
        (U.has(b) ? U.delete(b) : U.add(b), B(U));
      },
      Sd = () => {
        (console.log("Batch lock items:", Array.from(re)),
          alert(`批次鎖定功能尚未實作
已選取 ${re.size} 個項目`));
      },
      kd = () => {
        (console.log("Batch unlock items:", Array.from(re)),
          alert(`批次解鎖功能尚未實作
已選取 ${re.size} 個項目`));
      },
      Cd = () => {
        const b = new Set(Ee.map((U) => U.IC_SN));
        B(b);
      },
      Ed = () => {
        B(new Set());
      },
      rs =
        Ee.length > 0 &&
        re.size === Ee.length &&
        Ee.every((b) => re.has(b.IC_SN)),
      Nd = cn ? Ua : Ua.filter((b) => b.id !== "daily");
    return u.jsxs("div", {
      className: "min-h-screen bg-white",
      children: [
        u.jsx(tm, { language: l, onLanguageChange: _d }),
        u.jsx(nm, { tabs: Nd, activeTab: s, language: l, onTabChange: i }),
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
                    u.jsx(Te, {
                      onClick: yd,
                      icon: nd,
                      children: I("downloadTemplate", l),
                    }),
                    u.jsx(Te, {
                      onClick: () => p(!0),
                      icon: _l,
                      children: I("search", l),
                    }),
                    u.jsx(Te, {
                      onClick: () => m(!0),
                      icon: od,
                      children: I("uploadExcel", l),
                    }),
                    u.jsx(Te, {
                      onClick: () => x(!0),
                      icon: up,
                      children: I("createInventory", l),
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
                                I("selectedItems", l),
                                ": ",
                                re.size,
                                " / ",
                                Ee.length,
                              ],
                            }),
                          }),
                          u.jsx(Te, {
                            onClick: rs ? Ed : Cd,
                            icon: rs ? cp : np,
                            variant: "secondary",
                            disabled: Ee.length === 0,
                            children: I(rs ? "deselectAll" : "selectAll", l),
                          }),
                          u.jsx(Te, {
                            onClick: Sd,
                            icon: Ei,
                            className: "bg-red-600 hover:bg-red-700 text-white",
                            disabled: re.size === 0,
                            children: I("lockSelected", l),
                          }),
                          u.jsx(Te, {
                            onClick: kd,
                            icon: rd,
                            className:
                              "bg-green-600 hover:bg-green-700 text-white",
                            disabled: re.size === 0,
                            children: I("unlockSelected", l),
                          }),
                          u.jsx(Te, {
                            onClick: Nl,
                            variant: "secondary",
                            children: I("cancelSelection", l),
                          }),
                        ],
                      })
                    : u.jsx(Te, {
                        onClick: Nl,
                        icon: Ei,
                        className:
                          "bg-purple-600 hover:bg-purple-700 text-white",
                        children: I("batchLock", l),
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
                          onClick: () => ns("all"),
                          className: `relative z-20 px-4 py-2 text-base font-medium rounded-md transition-all duration-300 ease-in-out min-w-[80px] ${R === "all" ? "text-white bg-gray-700 rounded-md" : "text-gray-500 hover:text-gray-800 bg-gray-100 rounded-lg"}`,
                          children: I("allStatus", l),
                        }),
                        u.jsx("button", {
                          onClick: () => ns("unlocked"),
                          className: `relative z-20 px-4 py-2 text-base font-medium rounded-md transition-all duration-300 ease-in-out min-w-[100px] ${R === "unlocked" ? "text-white bg-green-600 rounded-md" : "text-gray-500 hover:text-gray-800 bg-gray-100 rounded-lg"}`,
                          children: I("unlocked", l),
                        }),
                        u.jsx("button", {
                          onClick: () => ns("locked"),
                          className: `relative z-20 px-4 py-2 text-base font-medium rounded-md transition-all duration-300 ease-in-out min-w-[100px] ${R === "locked" ? "text-white bg-red-600 rounded-md" : "text-gray-500 hover:text-gray-800 bg-gray-100 rounded-lg"}`,
                          children: I("locked", l),
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
                          onClick: () => ts("inventory"),
                          className: `relative z-20 px-2 py-2 text-base font-medium rounded-md transition-all duration-300 ease-in-out min-w-[80px] ${S === "inventory" ? "text-white bg-blue-600 rounded-md" : "text-gray-500 hover:text-gray-800 bg-blue-100 rounded-lg"}`,
                          children: I("inventoryForms", l),
                        }),
                        cn &&
                          u.jsx("button", {
                            onClick: () => ts("daily"),
                            className: `relative z-20 px-2 py-2 text-base font-medium rounded-md transition-all duration-300 ease-in-out min-w-[90px] ${S === "daily" ? "text-white bg-blue-600 rounded-md" : "text-gray-500 hover:text-gray-800 bg-blue-100 rounded-lg"}`,
                            children: I("dailyForms", l),
                          }),
                        u.jsx("button", {
                          onClick: () => ts("review"),
                          className: `relative z-20 px-2 py-2 text-base font-medium rounded-md transition-all duration-300 ease-in-out min-w-[80px] ${S === "review" ? "text-white bg-blue-600 rounded-md" : "text-gray-500 hover:text-gray-800 bg-blue-100 rounded-lg"}`,
                          children: I("reviewForms", l),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
            u.jsx("div", {
              className: "grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-1",
              children: Ee.map((b) =>
                u.jsx(
                  sm,
                  {
                    item: b,
                    language: l,
                    onlineUserCount: hd(b.IC_SN),
                    onDelete: vd,
                    onLock: (U) => wd(U, b.STATE === "鎖定"),
                    onAddMedicine: (U) => {
                      (C(U), L(!0));
                    },
                    onEditStaff: (U) => {
                      (C(U), d(!0));
                    },
                    onRenameSuccess: (U, we) => {
                      q((We) =>
                        We.map((os) =>
                          os.IC_SN === U ? { ...os, IC_NAME: we } : os,
                        ),
                      );
                    },
                    batchMode: H,
                    isSelected: re.has(b.IC_SN),
                    onSelect: xd,
                  },
                  b.GUID,
                ),
              ),
            }),
            Ee.length === 0 &&
              M.length > 0 &&
              u.jsx("div", {
                className: "text-center py-12",
                children: u.jsx("p", {
                  className: "text-gray-500 text-lg",
                  children:
                    S === "review"
                      ? l === "en"
                        ? "No review forms found"
                        : "查無覆盤單"
                      : S === "daily"
                        ? l === "en"
                          ? "No daily inventory forms found"
                          : "查無每日盤點單"
                        : l === "en"
                          ? "No inventory forms found"
                          : "查無盤點單",
                }),
              }),
            M.length === 0 &&
              u.jsx("div", {
                className: "text-center py-12",
                children: u.jsx("p", {
                  className: "text-gray-500 text-lg",
                  children: I("noItemsFound", l),
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
        u.jsx(im, {
          isOpen: c,
          onClose: () => p(!1),
          language: l,
          onSearch: pd,
          setInventoryItems: q,
        }),
        u.jsx(lm, {
          isOpen: g,
          onClose: () => m(!1),
          language: l,
          onUploadSuccess: md,
          sendMessage: r,
        }),
        u.jsx(am, {
          isOpen: _,
          onClose: () => x(!1),
          language: l,
          onCreateSuccess: gd,
          sendMessage: r,
          medCloudData: Y,
          medQtyGroupData: un,
        }),
        u.jsx(um, {
          isOpen: k,
          onClose: () => L(!1),
          inventoryId: v,
          language: l,
          onUpdateSuccess: Wt,
        }),
        u.jsx(cm, {
          isOpen: f,
          onClose: () => d(!1),
          inventoryId: v,
          language: l,
          onUpdateSuccess: Wt,
        }),
        u.jsx(dm, { isOpen: h, onClose: () => y(!1), language: l }),
      ],
    });
  };
function hm() {
  return u.jsx(Zp, { children: u.jsx(gp, { children: u.jsx(fm, {}) }) });
}
ed(document.getElementById("root")).render(
  u.jsx(N.StrictMode, { children: u.jsx(hm, {}) }),
);
