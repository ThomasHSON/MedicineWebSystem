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
var Tu = { exports: {} },
  Ol = {},
  Du = { exports: {} },
  R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nr = Symbol.for("react.element"),
  dd = Symbol.for("react.portal"),
  fd = Symbol.for("react.fragment"),
  pd = Symbol.for("react.strict_mode"),
  md = Symbol.for("react.profiler"),
  hd = Symbol.for("react.provider"),
  gd = Symbol.for("react.context"),
  yd = Symbol.for("react.forward_ref"),
  vd = Symbol.for("react.suspense"),
  xd = Symbol.for("react.memo"),
  wd = Symbol.for("react.lazy"),
  xs = Symbol.iterator;
function Sd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (xs && e[xs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Lu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  zu = Object.assign,
  Ou = {};
function On(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Ou),
    (this.updater = n || Lu));
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
function Mu() {}
Mu.prototype = On.prototype;
function wi(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Ou),
    (this.updater = n || Lu));
}
var Si = (wi.prototype = new Mu());
Si.constructor = wi;
zu(Si, On.prototype);
Si.isPureReactComponent = !0;
var ws = Array.isArray,
  Iu = Object.prototype.hasOwnProperty,
  ki = { current: null },
  Ru = { key: !0, ref: !0, __self: !0, __source: !0 };
function $u(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Iu.call(t, r) && !Ru.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) l[r] === void 0 && (l[r] = s[r]);
  return {
    $$typeof: Nr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: ki.current,
  };
}
function kd(e, t) {
  return {
    $$typeof: Nr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ni(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Nr;
}
function Nd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ss = /\/+/g;
function Jl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Nd("" + e.key)
    : t.toString(36);
}
function Gr(e, t, n, r, l) {
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
          case Nr:
          case dd:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Jl(i, 0) : r),
      ws(l)
        ? ((n = ""),
          e != null && (n = e.replace(Ss, "$&/") + "/"),
          Gr(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (Ni(l) &&
            (l = kd(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Ss, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), ws(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var u = r + Jl(o, s);
      i += Gr(o, t, n, u, l);
    }
  else if (((u = Sd(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(o = e.next()).done; )
      ((o = o.value), (u = r + Jl(o, s++)), (i += Gr(o, t, n, u, l)));
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
function Dr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Gr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Ed(e) {
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
var ge = { current: null },
  Xr = { transition: null },
  Cd = {
    ReactCurrentDispatcher: ge,
    ReactCurrentBatchConfig: Xr,
    ReactCurrentOwner: ki,
  };
function Au() {
  throw Error("act(...) is not supported in production builds of React.");
}
R.Children = {
  map: Dr,
  forEach: function (e, t, n) {
    Dr(
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
      Dr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Dr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ni(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
R.Component = On;
R.Fragment = fd;
R.Profiler = md;
R.PureComponent = wi;
R.StrictMode = pd;
R.Suspense = vd;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cd;
R.act = Au;
R.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = zu({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = ki.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      Iu.call(t, u) &&
        !Ru.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
    r.children = s;
  }
  return { $$typeof: Nr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
R.createContext = function (e) {
  return (
    (e = {
      $$typeof: gd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: hd, _context: e }),
    (e.Consumer = e)
  );
};
R.createElement = $u;
R.createFactory = function (e) {
  var t = $u.bind(null, e);
  return ((t.type = e), t);
};
R.createRef = function () {
  return { current: null };
};
R.forwardRef = function (e) {
  return { $$typeof: yd, render: e };
};
R.isValidElement = Ni;
R.lazy = function (e) {
  return { $$typeof: wd, _payload: { _status: -1, _result: e }, _init: Ed };
};
R.memo = function (e, t) {
  return { $$typeof: xd, type: e, compare: t === void 0 ? null : t };
};
R.startTransition = function (e) {
  var t = Xr.transition;
  Xr.transition = {};
  try {
    e();
  } finally {
    Xr.transition = t;
  }
};
R.unstable_act = Au;
R.useCallback = function (e, t) {
  return ge.current.useCallback(e, t);
};
R.useContext = function (e) {
  return ge.current.useContext(e);
};
R.useDebugValue = function () {};
R.useDeferredValue = function (e) {
  return ge.current.useDeferredValue(e);
};
R.useEffect = function (e, t) {
  return ge.current.useEffect(e, t);
};
R.useId = function () {
  return ge.current.useId();
};
R.useImperativeHandle = function (e, t, n) {
  return ge.current.useImperativeHandle(e, t, n);
};
R.useInsertionEffect = function (e, t) {
  return ge.current.useInsertionEffect(e, t);
};
R.useLayoutEffect = function (e, t) {
  return ge.current.useLayoutEffect(e, t);
};
R.useMemo = function (e, t) {
  return ge.current.useMemo(e, t);
};
R.useReducer = function (e, t, n) {
  return ge.current.useReducer(e, t, n);
};
R.useRef = function (e) {
  return ge.current.useRef(e);
};
R.useState = function (e) {
  return ge.current.useState(e);
};
R.useSyncExternalStore = function (e, t, n) {
  return ge.current.useSyncExternalStore(e, t, n);
};
R.useTransition = function () {
  return ge.current.useTransition();
};
R.version = "18.3.1";
Du.exports = R;
var C = Du.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jd = C,
  _d = Symbol.for("react.element"),
  Pd = Symbol.for("react.fragment"),
  Td = Object.prototype.hasOwnProperty,
  Dd = jd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ld = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fu(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  (n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref));
  for (r in t) Td.call(t, r) && !Ld.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: _d,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Dd.current,
  };
}
Ol.Fragment = Pd;
Ol.jsx = Fu;
Ol.jsxs = Fu;
Tu.exports = Ol;
var a = Tu.exports,
  Uu = { exports: {} },
  _e = {},
  Vu = { exports: {} },
  Hu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, L) {
    var M = _.length;
    _.push(L);
    e: for (; 0 < M; ) {
      var B = (M - 1) >>> 1,
        X = _[B];
      if (0 < l(X, L)) ((_[B] = L), (_[M] = X), (M = B));
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var L = _[0],
      M = _.pop();
    if (M !== L) {
      _[0] = M;
      e: for (var B = 0, X = _.length, gt = X >>> 1; B < gt; ) {
        var Ye = 2 * (B + 1) - 1,
          Rn = _[Ye],
          Ae = Ye + 1,
          ln = _[Ae];
        if (0 > l(Rn, M))
          Ae < X && 0 > l(ln, Rn)
            ? ((_[B] = ln), (_[Ae] = M), (B = Ae))
            : ((_[B] = Rn), (_[Ye] = M), (B = Ye));
        else if (Ae < X && 0 > l(ln, M)) ((_[B] = ln), (_[Ae] = M), (B = Ae));
        else break e;
      }
    }
    return L;
  }
  function l(_, L) {
    var M = _.sortIndex - L.sortIndex;
    return M !== 0 ? M : _.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      s = i.now();
    e.unstable_now = function () {
      return i.now() - s;
    };
  }
  var u = [],
    c = [],
    h = 1,
    g = null,
    m = 3,
    x = !1,
    S = !1,
    E = !1,
    I = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(_) {
    for (var L = n(c); L !== null; ) {
      if (L.callback === null) r(c);
      else if (L.startTime <= _)
        (r(c), (L.sortIndex = L.expirationTime), t(u, L));
      else break;
      L = n(c);
    }
  }
  function y(_) {
    if (((E = !1), d(_), !S))
      if (n(u) !== null) ((S = !0), mt(N));
      else {
        var L = n(c);
        L !== null && ht(y, L.startTime - _);
      }
  }
  function N(_, L) {
    ((S = !1), E && ((E = !1), p(v), (v = -1)), (x = !0));
    var M = m;
    try {
      for (
        d(L), g = n(u);
        g !== null && (!(g.expirationTime > L) || (_ && !A()));
      ) {
        var B = g.callback;
        if (typeof B == "function") {
          ((g.callback = null), (m = g.priorityLevel));
          var X = B(g.expirationTime <= L);
          ((L = e.unstable_now()),
            typeof X == "function" ? (g.callback = X) : g === n(u) && r(u),
            d(L));
        } else r(u);
        g = n(u);
      }
      if (g !== null) var gt = !0;
      else {
        var Ye = n(c);
        (Ye !== null && ht(y, Ye.startTime - L), (gt = !1));
      }
      return gt;
    } finally {
      ((g = null), (m = M), (x = !1));
    }
  }
  var w = !1,
    j = null,
    v = -1,
    z = 5,
    T = -1;
  function A() {
    return !(e.unstable_now() - T < z);
  }
  function J() {
    if (j !== null) {
      var _ = e.unstable_now();
      T = _;
      var L = !0;
      try {
        L = j(!0, _);
      } finally {
        L ? Te() : ((w = !1), (j = null));
      }
    } else w = !1;
  }
  var Te;
  if (typeof f == "function")
    Te = function () {
      f(J);
    };
  else if (typeof MessageChannel < "u") {
    var se = new MessageChannel(),
      $e = se.port2;
    ((se.port1.onmessage = J),
      (Te = function () {
        $e.postMessage(null);
      }));
  } else
    Te = function () {
      I(J, 0);
    };
  function mt(_) {
    ((j = _), w || ((w = !0), Te()));
  }
  function ht(_, L) {
    v = I(function () {
      _(e.unstable_now());
    }, L);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || x || ((S = !0), mt(N));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (z = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (_) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = m;
      }
      var M = m;
      m = L;
      try {
        return _();
      } finally {
        m = M;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, L) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var M = m;
      m = _;
      try {
        return L();
      } finally {
        m = M;
      }
    }),
    (e.unstable_scheduleCallback = function (_, L, M) {
      var B = e.unstable_now();
      switch (
        (typeof M == "object" && M !== null
          ? ((M = M.delay), (M = typeof M == "number" && 0 < M ? B + M : B))
          : (M = B),
        _)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = M + X),
        (_ = {
          id: h++,
          callback: L,
          priorityLevel: _,
          startTime: M,
          expirationTime: X,
          sortIndex: -1,
        }),
        M > B
          ? ((_.sortIndex = M),
            t(c, _),
            n(u) === null &&
              _ === n(c) &&
              (E ? (p(v), (v = -1)) : (E = !0), ht(y, M - B)))
          : ((_.sortIndex = X), t(u, _), S || x || ((S = !0), mt(N))),
        _
      );
    }),
    (e.unstable_shouldYield = A),
    (e.unstable_wrapCallback = function (_) {
      var L = m;
      return function () {
        var M = m;
        m = L;
        try {
          return _.apply(this, arguments);
        } finally {
          m = M;
        }
      };
    }));
})(Hu);
Vu.exports = Hu;
var zd = Vu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Od = C,
  je = zd;
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
var Qu = new Set(),
  ir = {};
function tn(e, t) {
  (jn(e, t), jn(e + "Capture", t));
}
function jn(e, t) {
  for (ir[e] = t, e = 0; e < t.length; e++) Qu.add(t[e]);
}
var ut = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Co = Object.prototype.hasOwnProperty,
  Md =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ks = {},
  Ns = {};
function Id(e) {
  return Co.call(Ns, e)
    ? !0
    : Co.call(ks, e)
      ? !1
      : Md.test(e)
        ? (Ns[e] = !0)
        : ((ks[e] = !0), !1);
}
function Rd(e, t, n, r) {
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
function $d(e, t, n, r) {
  if (t === null || typeof t > "u" || Rd(e, t, n, r)) return !0;
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
function ye(e, t, n, r, l, o, i) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i));
}
var ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ie[e] = new ye(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ie[t] = new ye(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ie[e] = new ye(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ie[e] = new ye(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ie[e] = new ye(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ie[e] = new ye(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ie[e] = new ye(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ie[e] = new ye(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ie[e] = new ye(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ei = /[\-:]([a-z])/g;
function Ci(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ei, Ci);
    ie[t] = new ye(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ei, Ci);
    ie[t] = new ye(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ei, Ci);
  ie[t] = new ye(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ie[e] = new ye(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ie.xlinkHref = new ye(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ie[e] = new ye(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ji(e, t, n, r) {
  var l = ie.hasOwnProperty(t) ? ie[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    ($d(t, n, l, r) && (n = null),
    r || l === null
      ? Id(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var pt = Od.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Lr = Symbol.for("react.element"),
  un = Symbol.for("react.portal"),
  an = Symbol.for("react.fragment"),
  _i = Symbol.for("react.strict_mode"),
  jo = Symbol.for("react.profiler"),
  Bu = Symbol.for("react.provider"),
  Wu = Symbol.for("react.context"),
  Pi = Symbol.for("react.forward_ref"),
  _o = Symbol.for("react.suspense"),
  Po = Symbol.for("react.suspense_list"),
  Ti = Symbol.for("react.memo"),
  xt = Symbol.for("react.lazy"),
  Ku = Symbol.for("react.offscreen"),
  Es = Symbol.iterator;
function An(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Es && e[Es]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Y = Object.assign,
  ql;
function Kn(e) {
  if (ql === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ql = (t && t[1]) || "";
    }
  return (
    `
` +
    ql +
    e
  );
}
var bl = !1;
function eo(e, t) {
  if (!e || bl) return "";
  bl = !0;
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
          s = o.length - 1;
        1 <= i && 0 <= s && l[i] !== o[s];
      )
        s--;
      for (; 1 <= i && 0 <= s; i--, s--)
        if (l[i] !== o[s]) {
          if (i !== 1 || s !== 1)
            do
              if ((i--, s--, 0 > s || l[i] !== o[s])) {
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
            while (1 <= i && 0 <= s);
          break;
        }
    }
  } finally {
    ((bl = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? Kn(e) : "";
}
function Ad(e) {
  switch (e.tag) {
    case 5:
      return Kn(e.type);
    case 16:
      return Kn("Lazy");
    case 13:
      return Kn("Suspense");
    case 19:
      return Kn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = eo(e.type, !1)), e);
    case 11:
      return ((e = eo(e.type.render, !1)), e);
    case 1:
      return ((e = eo(e.type, !0)), e);
    default:
      return "";
  }
}
function To(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case an:
      return "Fragment";
    case un:
      return "Portal";
    case jo:
      return "Profiler";
    case _i:
      return "StrictMode";
    case _o:
      return "Suspense";
    case Po:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Wu:
        return (e.displayName || "Context") + ".Consumer";
      case Bu:
        return (e._context.displayName || "Context") + ".Provider";
      case Pi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ti:
        return (
          (t = e.displayName || null),
          t !== null ? t : To(e.type) || "Memo"
        );
      case xt:
        ((t = e._payload), (e = e._init));
        try {
          return To(e(t));
        } catch {}
    }
  return null;
}
function Fd(e) {
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
      return To(t);
    case 8:
      return t === _i ? "StrictMode" : "Mode";
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
function Mt(e) {
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
function Yu(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ud(e) {
  var t = Yu(e) ? "checked" : "value",
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
function zr(e) {
  e._valueTracker || (e._valueTracker = Ud(e));
}
function Gu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Yu(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function sl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Do(e, t) {
  var n = t.checked;
  return Y({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Cs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = Mt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function Xu(e, t) {
  ((t = t.checked), t != null && ji(e, "checked", t, !1));
}
function Lo(e, t) {
  Xu(e, t);
  var n = Mt(t.value),
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
    ? zo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && zo(e, t.type, Mt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function js(e, t, n) {
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
function zo(e, t, n) {
  (t !== "number" || sl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Yn = Array.isArray;
function wn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      ((l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + Mt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Oo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return Y({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function _s(e, t) {
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
  e._wrapperState = { initialValue: Mt(n) };
}
function Zu(e, t) {
  var n = Mt(t.value),
    r = Mt(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function Ps(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ju(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Mo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ju(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Or,
  qu = (function (e) {
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
        Or = Or || document.createElement("div"),
          Or.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Or.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function sr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Zn = {
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
  Vd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Zn).forEach(function (e) {
  Vd.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Zn[t] = Zn[e]));
  });
});
function bu(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Zn.hasOwnProperty(e) && Zn[e])
      ? ("" + t).trim()
      : t + "px";
}
function ea(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = bu(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l));
    }
}
var Hd = Y(
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
function Io(e, t) {
  if (t) {
    if (Hd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Ro(e, t) {
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
var $o = null;
function Di(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ao = null,
  Sn = null,
  kn = null;
function Ts(e) {
  if ((e = jr(e))) {
    if (typeof Ao != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = Al(t)), Ao(e.stateNode, e.type, t));
  }
}
function ta(e) {
  Sn ? (kn ? kn.push(e) : (kn = [e])) : (Sn = e);
}
function na() {
  if (Sn) {
    var e = Sn,
      t = kn;
    if (((kn = Sn = null), Ts(e), t)) for (e = 0; e < t.length; e++) Ts(t[e]);
  }
}
function ra(e, t) {
  return e(t);
}
function la() {}
var to = !1;
function oa(e, t, n) {
  if (to) return e(t, n);
  to = !0;
  try {
    return ra(e, t, n);
  } finally {
    ((to = !1), (Sn !== null || kn !== null) && (la(), na()));
  }
}
function ur(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Al(n);
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
var Fo = !1;
if (ut)
  try {
    var Fn = {};
    (Object.defineProperty(Fn, "passive", {
      get: function () {
        Fo = !0;
      },
    }),
      window.addEventListener("test", Fn, Fn),
      window.removeEventListener("test", Fn, Fn));
  } catch {
    Fo = !1;
  }
function Qd(e, t, n, r, l, o, i, s, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var Jn = !1,
  ul = null,
  al = !1,
  Uo = null,
  Bd = {
    onError: function (e) {
      ((Jn = !0), (ul = e));
    },
  };
function Wd(e, t, n, r, l, o, i, s, u) {
  ((Jn = !1), (ul = null), Qd.apply(Bd, arguments));
}
function Kd(e, t, n, r, l, o, i, s, u) {
  if ((Wd.apply(this, arguments), Jn)) {
    if (Jn) {
      var c = ul;
      ((Jn = !1), (ul = null));
    } else throw Error(k(198));
    al || ((al = !0), (Uo = c));
  }
}
function nn(e) {
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
function ia(e) {
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
  if (nn(e) !== e) throw Error(k(188));
}
function Yd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = nn(e)), t === null)) throw Error(k(188));
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
        if (o === n) return (Ds(l), e);
        if (o === r) return (Ds(l), t);
        o = o.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) ((n = l), (r = o));
    else {
      for (var i = !1, s = l.child; s; ) {
        if (s === n) {
          ((i = !0), (n = l), (r = o));
          break;
        }
        if (s === r) {
          ((i = !0), (r = l), (n = o));
          break;
        }
        s = s.sibling;
      }
      if (!i) {
        for (s = o.child; s; ) {
          if (s === n) {
            ((i = !0), (n = o), (r = l));
            break;
          }
          if (s === r) {
            ((i = !0), (r = o), (n = l));
            break;
          }
          s = s.sibling;
        }
        if (!i) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function sa(e) {
  return ((e = Yd(e)), e !== null ? ua(e) : null);
}
function ua(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ua(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var aa = je.unstable_scheduleCallback,
  Ls = je.unstable_cancelCallback,
  Gd = je.unstable_shouldYield,
  Xd = je.unstable_requestPaint,
  Z = je.unstable_now,
  Zd = je.unstable_getCurrentPriorityLevel,
  Li = je.unstable_ImmediatePriority,
  ca = je.unstable_UserBlockingPriority,
  cl = je.unstable_NormalPriority,
  Jd = je.unstable_LowPriority,
  da = je.unstable_IdlePriority,
  Ml = null,
  be = null;
function qd(e) {
  if (be && typeof be.onCommitFiberRoot == "function")
    try {
      be.onCommitFiberRoot(Ml, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Be = Math.clz32 ? Math.clz32 : tf,
  bd = Math.log,
  ef = Math.LN2;
function tf(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((bd(e) / ef) | 0)) | 0);
}
var Mr = 64,
  Ir = 4194304;
function Gn(e) {
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
function dl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var s = i & ~l;
    s !== 0 ? (r = Gn(s)) : ((o &= i), o !== 0 && (r = Gn(o)));
  } else ((i = n & ~l), i !== 0 ? (r = Gn(i)) : o !== 0 && (r = Gn(o)));
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
      ((n = 31 - Be(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
  return r;
}
function nf(e, t) {
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
function rf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;
  ) {
    var i = 31 - Be(o),
      s = 1 << i,
      u = l[i];
    (u === -1
      ? (!(s & n) || s & r) && (l[i] = nf(s, t))
      : u <= t && (e.expiredLanes |= s),
      (o &= ~s));
  }
}
function Vo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function fa() {
  var e = Mr;
  return ((Mr <<= 1), !(Mr & 4194240) && (Mr = 64), e);
}
function no(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Er(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Be(t)),
    (e[t] = n));
}
function lf(e, t) {
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
    var l = 31 - Be(n),
      o = 1 << l;
    ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o));
  }
}
function zi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Be(n),
      l = 1 << r;
    ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
  }
}
var F = 0;
function pa(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var ma,
  Oi,
  ha,
  ga,
  ya,
  Ho = !1,
  Rr = [],
  jt = null,
  _t = null,
  Pt = null,
  ar = new Map(),
  cr = new Map(),
  St = [],
  of =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function zs(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      jt = null;
      break;
    case "dragenter":
    case "dragleave":
      _t = null;
      break;
    case "mouseover":
    case "mouseout":
      Pt = null;
      break;
    case "pointerover":
    case "pointerout":
      ar.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      cr.delete(t.pointerId);
  }
}
function Un(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = jr(t)), t !== null && Oi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function sf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ((jt = Un(jt, e, t, n, r, l)), !0);
    case "dragenter":
      return ((_t = Un(_t, e, t, n, r, l)), !0);
    case "mouseover":
      return ((Pt = Un(Pt, e, t, n, r, l)), !0);
    case "pointerover":
      var o = l.pointerId;
      return (ar.set(o, Un(ar.get(o) || null, e, t, n, r, l)), !0);
    case "gotpointercapture":
      return (
        (o = l.pointerId),
        cr.set(o, Un(cr.get(o) || null, e, t, n, r, l)),
        !0
      );
  }
  return !1;
}
function va(e) {
  var t = Bt(e.target);
  if (t !== null) {
    var n = nn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ia(n)), t !== null)) {
          ((e.blockedOn = t),
            ya(e.priority, function () {
              ha(n);
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
function Zr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Qo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (($o = r), n.target.dispatchEvent(r), ($o = null));
    } else return ((t = jr(n)), t !== null && Oi(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Os(e, t, n) {
  Zr(e) && n.delete(t);
}
function uf() {
  ((Ho = !1),
    jt !== null && Zr(jt) && (jt = null),
    _t !== null && Zr(_t) && (_t = null),
    Pt !== null && Zr(Pt) && (Pt = null),
    ar.forEach(Os),
    cr.forEach(Os));
}
function Vn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ho ||
      ((Ho = !0),
      je.unstable_scheduleCallback(je.unstable_NormalPriority, uf)));
}
function dr(e) {
  function t(l) {
    return Vn(l, e);
  }
  if (0 < Rr.length) {
    Vn(Rr[0], e);
    for (var n = 1; n < Rr.length; n++) {
      var r = Rr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    jt !== null && Vn(jt, e),
      _t !== null && Vn(_t, e),
      Pt !== null && Vn(Pt, e),
      ar.forEach(t),
      cr.forEach(t),
      n = 0;
    n < St.length;
    n++
  )
    ((r = St[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < St.length && ((n = St[0]), n.blockedOn === null); )
    (va(n), n.blockedOn === null && St.shift());
}
var Nn = pt.ReactCurrentBatchConfig,
  fl = !0;
function af(e, t, n, r) {
  var l = F,
    o = Nn.transition;
  Nn.transition = null;
  try {
    ((F = 1), Mi(e, t, n, r));
  } finally {
    ((F = l), (Nn.transition = o));
  }
}
function cf(e, t, n, r) {
  var l = F,
    o = Nn.transition;
  Nn.transition = null;
  try {
    ((F = 4), Mi(e, t, n, r));
  } finally {
    ((F = l), (Nn.transition = o));
  }
}
function Mi(e, t, n, r) {
  if (fl) {
    var l = Qo(e, t, n, r);
    if (l === null) (po(e, t, r, pl, n), zs(e, r));
    else if (sf(l, e, t, n, r)) r.stopPropagation();
    else if ((zs(e, r), t & 4 && -1 < of.indexOf(e))) {
      for (; l !== null; ) {
        var o = jr(l);
        if (
          (o !== null && ma(o),
          (o = Qo(e, t, n, r)),
          o === null && po(e, t, r, pl, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else po(e, t, r, null, n);
  }
}
var pl = null;
function Qo(e, t, n, r) {
  if (((pl = null), (e = Di(r)), (e = Bt(e)), e !== null))
    if (((t = nn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ia(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((pl = e), null);
}
function xa(e) {
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
      switch (Zd()) {
        case Li:
          return 1;
        case ca:
          return 4;
        case cl:
        case Jd:
          return 16;
        case da:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Et = null,
  Ii = null,
  Jr = null;
function wa() {
  if (Jr) return Jr;
  var e,
    t = Ii,
    n = t.length,
    r,
    l = "value" in Et ? Et.value : Et.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Jr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function qr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function $r() {
  return !0;
}
function Ms() {
  return !1;
}
function Pe(e) {
  function t(n, r, l, o, i) {
    ((this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null));
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? $r
        : Ms),
      (this.isPropagationStopped = Ms),
      this
    );
  }
  return (
    Y(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = $r));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = $r));
      },
      persist: function () {},
      isPersistent: $r,
    }),
    t
  );
}
var Mn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ri = Pe(Mn),
  Cr = Y({}, Mn, { view: 0, detail: 0 }),
  df = Pe(Cr),
  ro,
  lo,
  Hn,
  Il = Y({}, Cr, {
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
    getModifierState: $i,
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
        : (e !== Hn &&
            (Hn && e.type === "mousemove"
              ? ((ro = e.screenX - Hn.screenX), (lo = e.screenY - Hn.screenY))
              : (lo = ro = 0),
            (Hn = e)),
          ro);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : lo;
    },
  }),
  Is = Pe(Il),
  ff = Y({}, Il, { dataTransfer: 0 }),
  pf = Pe(ff),
  mf = Y({}, Cr, { relatedTarget: 0 }),
  oo = Pe(mf),
  hf = Y({}, Mn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  gf = Pe(hf),
  yf = Y({}, Mn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  vf = Pe(yf),
  xf = Y({}, Mn, { data: 0 }),
  Rs = Pe(xf),
  wf = {
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
  Sf = {
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
  kf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Nf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = kf[e]) ? !!t[e] : !1;
}
function $i() {
  return Nf;
}
var Ef = Y({}, Cr, {
    key: function (e) {
      if (e.key) {
        var t = wf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = qr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Sf[e.keyCode] || "Unidentified"
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
    getModifierState: $i,
    charCode: function (e) {
      return e.type === "keypress" ? qr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? qr(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Cf = Pe(Ef),
  jf = Y({}, Il, {
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
  $s = Pe(jf),
  _f = Y({}, Cr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: $i,
  }),
  Pf = Pe(_f),
  Tf = Y({}, Mn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Df = Pe(Tf),
  Lf = Y({}, Il, {
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
  zf = Pe(Lf),
  Of = [9, 13, 27, 32],
  Ai = ut && "CompositionEvent" in window,
  qn = null;
ut && "documentMode" in document && (qn = document.documentMode);
var Mf = ut && "TextEvent" in window && !qn,
  Sa = ut && (!Ai || (qn && 8 < qn && 11 >= qn)),
  As = " ",
  Fs = !1;
function ka(e, t) {
  switch (e) {
    case "keyup":
      return Of.indexOf(t.keyCode) !== -1;
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
function Na(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var cn = !1;
function If(e, t) {
  switch (e) {
    case "compositionend":
      return Na(t);
    case "keypress":
      return t.which !== 32 ? null : ((Fs = !0), As);
    case "textInput":
      return ((e = t.data), e === As && Fs ? null : e);
    default:
      return null;
  }
}
function Rf(e, t) {
  if (cn)
    return e === "compositionend" || (!Ai && ka(e, t))
      ? ((e = wa()), (Jr = Ii = Et = null), (cn = !1), e)
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
      return Sa && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var $f = {
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
function Us(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!$f[e.type] : t === "textarea";
}
function Ea(e, t, n, r) {
  (ta(r),
    (t = ml(t, "onChange")),
    0 < t.length &&
      ((n = new Ri("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var bn = null,
  fr = null;
function Af(e) {
  Ia(e, 0);
}
function Rl(e) {
  var t = pn(e);
  if (Gu(t)) return e;
}
function Ff(e, t) {
  if (e === "change") return t;
}
var Ca = !1;
if (ut) {
  var io;
  if (ut) {
    var so = "oninput" in document;
    if (!so) {
      var Vs = document.createElement("div");
      (Vs.setAttribute("oninput", "return;"),
        (so = typeof Vs.oninput == "function"));
    }
    io = so;
  } else io = !1;
  Ca = io && (!document.documentMode || 9 < document.documentMode);
}
function Hs() {
  bn && (bn.detachEvent("onpropertychange", ja), (fr = bn = null));
}
function ja(e) {
  if (e.propertyName === "value" && Rl(fr)) {
    var t = [];
    (Ea(t, fr, e, Di(e)), oa(Af, t));
  }
}
function Uf(e, t, n) {
  e === "focusin"
    ? (Hs(), (bn = t), (fr = n), bn.attachEvent("onpropertychange", ja))
    : e === "focusout" && Hs();
}
function Vf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Rl(fr);
}
function Hf(e, t) {
  if (e === "click") return Rl(t);
}
function Qf(e, t) {
  if (e === "input" || e === "change") return Rl(t);
}
function Bf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ke = typeof Object.is == "function" ? Object.is : Bf;
function pr(e, t) {
  if (Ke(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Co.call(t, l) || !Ke(e[l], t[l])) return !1;
  }
  return !0;
}
function Qs(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Bs(e, t) {
  var n = Qs(e);
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
    n = Qs(n);
  }
}
function _a(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? _a(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Pa() {
  for (var e = window, t = sl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = sl(e.document);
  }
  return t;
}
function Fi(e) {
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
function Wf(e) {
  var t = Pa(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    _a(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Fi(n)) {
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
          (l = Bs(n, o)));
        var i = Bs(n, r);
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
var Kf = ut && "documentMode" in document && 11 >= document.documentMode,
  dn = null,
  Bo = null,
  er = null,
  Wo = !1;
function Ws(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Wo ||
    dn == null ||
    dn !== sl(r) ||
    ((r = dn),
    "selectionStart" in r && Fi(r)
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
    (er && pr(er, r)) ||
      ((er = r),
      (r = ml(Bo, "onSelect")),
      0 < r.length &&
        ((t = new Ri("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = dn))));
}
function Ar(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var fn = {
    animationend: Ar("Animation", "AnimationEnd"),
    animationiteration: Ar("Animation", "AnimationIteration"),
    animationstart: Ar("Animation", "AnimationStart"),
    transitionend: Ar("Transition", "TransitionEnd"),
  },
  uo = {},
  Ta = {};
ut &&
  ((Ta = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete fn.animationend.animation,
    delete fn.animationiteration.animation,
    delete fn.animationstart.animation),
  "TransitionEvent" in window || delete fn.transitionend.transition);
function $l(e) {
  if (uo[e]) return uo[e];
  if (!fn[e]) return e;
  var t = fn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ta) return (uo[e] = t[n]);
  return e;
}
var Da = $l("animationend"),
  La = $l("animationiteration"),
  za = $l("animationstart"),
  Oa = $l("transitionend"),
  Ma = new Map(),
  Ks =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Rt(e, t) {
  (Ma.set(e, t), tn(t, [e]));
}
for (var ao = 0; ao < Ks.length; ao++) {
  var co = Ks[ao],
    Yf = co.toLowerCase(),
    Gf = co[0].toUpperCase() + co.slice(1);
  Rt(Yf, "on" + Gf);
}
Rt(Da, "onAnimationEnd");
Rt(La, "onAnimationIteration");
Rt(za, "onAnimationStart");
Rt("dblclick", "onDoubleClick");
Rt("focusin", "onFocus");
Rt("focusout", "onBlur");
Rt(Oa, "onTransitionEnd");
jn("onMouseEnter", ["mouseout", "mouseover"]);
jn("onMouseLeave", ["mouseout", "mouseover"]);
jn("onPointerEnter", ["pointerout", "pointerover"]);
jn("onPointerLeave", ["pointerout", "pointerover"]);
tn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
tn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
tn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
tn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
tn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
tn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Xn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Xf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xn));
function Ys(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), Kd(r, t, void 0, e), (e.currentTarget = null));
}
function Ia(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var s = r[i],
            u = s.instance,
            c = s.currentTarget;
          if (((s = s.listener), u !== o && l.isPropagationStopped())) break e;
          (Ys(l, s, c), (o = u));
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((s = r[i]),
            (u = s.instance),
            (c = s.currentTarget),
            (s = s.listener),
            u !== o && l.isPropagationStopped())
          )
            break e;
          (Ys(l, s, c), (o = u));
        }
    }
  }
  if (al) throw ((e = Uo), (al = !1), (Uo = null), e);
}
function V(e, t) {
  var n = t[Zo];
  n === void 0 && (n = t[Zo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ra(t, e, 2, !1), n.add(r));
}
function fo(e, t, n) {
  var r = 0;
  (t && (r |= 4), Ra(n, e, r, t));
}
var Fr = "_reactListening" + Math.random().toString(36).slice(2);
function mr(e) {
  if (!e[Fr]) {
    ((e[Fr] = !0),
      Qu.forEach(function (n) {
        n !== "selectionchange" && (Xf.has(n) || fo(n, !1, e), fo(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Fr] || ((t[Fr] = !0), fo("selectionchange", !1, t));
  }
}
function Ra(e, t, n, r) {
  switch (xa(t)) {
    case 1:
      var l = af;
      break;
    case 4:
      l = cf;
      break;
    default:
      l = Mi;
  }
  ((n = l.bind(null, t, n, e)),
    (l = void 0),
    !Fo ||
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
function po(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var s = r.stateNode.containerInfo;
        if (s === l || (s.nodeType === 8 && s.parentNode === l)) break;
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
        for (; s !== null; ) {
          if (((i = Bt(s)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = o = i;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  oa(function () {
    var c = o,
      h = Di(n),
      g = [];
    e: {
      var m = Ma.get(e);
      if (m !== void 0) {
        var x = Ri,
          S = e;
        switch (e) {
          case "keypress":
            if (qr(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = Cf;
            break;
          case "focusin":
            ((S = "focus"), (x = oo));
            break;
          case "focusout":
            ((S = "blur"), (x = oo));
            break;
          case "beforeblur":
          case "afterblur":
            x = oo;
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
            x = Is;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = pf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Pf;
            break;
          case Da:
          case La:
          case za:
            x = gf;
            break;
          case Oa:
            x = Df;
            break;
          case "scroll":
            x = df;
            break;
          case "wheel":
            x = zf;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = vf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = $s;
        }
        var E = (t & 4) !== 0,
          I = !E && e === "scroll",
          p = E ? (m !== null ? m + "Capture" : null) : m;
        E = [];
        for (var f = c, d; f !== null; ) {
          d = f;
          var y = d.stateNode;
          if (
            (d.tag === 5 &&
              y !== null &&
              ((d = y),
              p !== null && ((y = ur(f, p)), y != null && E.push(hr(f, y, d)))),
            I)
          )
            break;
          f = f.return;
        }
        0 < E.length &&
          ((m = new x(m, S, null, n, h)), g.push({ event: m, listeners: E }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          m &&
            n !== $o &&
            (S = n.relatedTarget || n.fromElement) &&
            (Bt(S) || S[at]))
        )
          break e;
        if (
          (x || m) &&
          ((m =
            h.window === h
              ? h
              : (m = h.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
          x
            ? ((S = n.relatedTarget || n.toElement),
              (x = c),
              (S = S ? Bt(S) : null),
              S !== null &&
                ((I = nn(S)), S !== I || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((x = null), (S = c)),
          x !== S)
        ) {
          if (
            ((E = Is),
            (y = "onMouseLeave"),
            (p = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((E = $s),
              (y = "onPointerLeave"),
              (p = "onPointerEnter"),
              (f = "pointer")),
            (I = x == null ? m : pn(x)),
            (d = S == null ? m : pn(S)),
            (m = new E(y, f + "leave", x, n, h)),
            (m.target = I),
            (m.relatedTarget = d),
            (y = null),
            Bt(h) === c &&
              ((E = new E(p, f + "enter", S, n, h)),
              (E.target = d),
              (E.relatedTarget = I),
              (y = E)),
            (I = y),
            x && S)
          )
            t: {
              for (E = x, p = S, f = 0, d = E; d; d = on(d)) f++;
              for (d = 0, y = p; y; y = on(y)) d++;
              for (; 0 < f - d; ) ((E = on(E)), f--);
              for (; 0 < d - f; ) ((p = on(p)), d--);
              for (; f--; ) {
                if (E === p || (p !== null && E === p.alternate)) break t;
                ((E = on(E)), (p = on(p)));
              }
              E = null;
            }
          else E = null;
          (x !== null && Gs(g, m, x, E, !1),
            S !== null && I !== null && Gs(g, I, S, E, !0));
        }
      }
      e: {
        if (
          ((m = c ? pn(c) : window),
          (x = m.nodeName && m.nodeName.toLowerCase()),
          x === "select" || (x === "input" && m.type === "file"))
        )
          var N = Ff;
        else if (Us(m))
          if (Ca) N = Qf;
          else {
            N = Vf;
            var w = Uf;
          }
        else
          (x = m.nodeName) &&
            x.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (N = Hf);
        if (N && (N = N(e, c))) {
          Ea(g, N, n, h);
          break e;
        }
        (w && w(e, m, c),
          e === "focusout" &&
            (w = m._wrapperState) &&
            w.controlled &&
            m.type === "number" &&
            zo(m, "number", m.value));
      }
      switch (((w = c ? pn(c) : window), e)) {
        case "focusin":
          (Us(w) || w.contentEditable === "true") &&
            ((dn = w), (Bo = c), (er = null));
          break;
        case "focusout":
          er = Bo = dn = null;
          break;
        case "mousedown":
          Wo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Wo = !1), Ws(g, n, h));
          break;
        case "selectionchange":
          if (Kf) break;
        case "keydown":
        case "keyup":
          Ws(g, n, h);
      }
      var j;
      if (Ai)
        e: {
          switch (e) {
            case "compositionstart":
              var v = "onCompositionStart";
              break e;
            case "compositionend":
              v = "onCompositionEnd";
              break e;
            case "compositionupdate":
              v = "onCompositionUpdate";
              break e;
          }
          v = void 0;
        }
      else
        cn
          ? ka(e, n) && (v = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (v = "onCompositionStart");
      (v &&
        (Sa &&
          n.locale !== "ko" &&
          (cn || v !== "onCompositionStart"
            ? v === "onCompositionEnd" && cn && (j = wa())
            : ((Et = h),
              (Ii = "value" in Et ? Et.value : Et.textContent),
              (cn = !0))),
        (w = ml(c, v)),
        0 < w.length &&
          ((v = new Rs(v, e, null, n, h)),
          g.push({ event: v, listeners: w }),
          j ? (v.data = j) : ((j = Na(n)), j !== null && (v.data = j)))),
        (j = Mf ? If(e, n) : Rf(e, n)) &&
          ((c = ml(c, "onBeforeInput")),
          0 < c.length &&
            ((h = new Rs("onBeforeInput", "beforeinput", null, n, h)),
            g.push({ event: h, listeners: c }),
            (h.data = j))));
    }
    Ia(g, t);
  });
}
function hr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ml(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    (l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = ur(e, n)),
      o != null && r.unshift(hr(e, o, l)),
      (o = ur(e, t)),
      o != null && r.push(hr(e, o, l))),
      (e = e.return));
  }
  return r;
}
function on(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Gs(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      c = s.stateNode;
    if (u !== null && u === r) break;
    (s.tag === 5 &&
      c !== null &&
      ((s = c),
      l
        ? ((u = ur(n, o)), u != null && i.unshift(hr(n, u, s)))
        : l || ((u = ur(n, o)), u != null && i.push(hr(n, u, s)))),
      (n = n.return));
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Zf = /\r\n?/g,
  Jf = /\u0000|\uFFFD/g;
function Xs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Zf,
      `
`,
    )
    .replace(Jf, "");
}
function Ur(e, t, n) {
  if (((t = Xs(t)), Xs(e) !== t && n)) throw Error(k(425));
}
function hl() {}
var Ko = null,
  Yo = null;
function Go(e, t) {
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
var Xo = typeof setTimeout == "function" ? setTimeout : void 0,
  qf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Zs = typeof Promise == "function" ? Promise : void 0,
  bf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Zs < "u"
        ? function (e) {
            return Zs.resolve(null).then(e).catch(ep);
          }
        : Xo;
function ep(e) {
  setTimeout(function () {
    throw e;
  });
}
function mo(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(l), dr(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  dr(t);
}
function Tt(e) {
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
function Js(e) {
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
var In = Math.random().toString(36).slice(2),
  qe = "__reactFiber$" + In,
  gr = "__reactProps$" + In,
  at = "__reactContainer$" + In,
  Zo = "__reactEvents$" + In,
  tp = "__reactListeners$" + In,
  np = "__reactHandles$" + In;
function Bt(e) {
  var t = e[qe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[at] || n[qe])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Js(e); e !== null; ) {
          if ((n = e[qe])) return n;
          e = Js(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function jr(e) {
  return (
    (e = e[qe] || e[at]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function pn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function Al(e) {
  return e[gr] || null;
}
var Jo = [],
  mn = -1;
function $t(e) {
  return { current: e };
}
function H(e) {
  0 > mn || ((e.current = Jo[mn]), (Jo[mn] = null), mn--);
}
function U(e, t) {
  (mn++, (Jo[mn] = e.current), (e.current = t));
}
var It = {},
  de = $t(It),
  we = $t(!1),
  Zt = It;
function _n(e, t) {
  var n = e.type.contextTypes;
  if (!n) return It;
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
function Se(e) {
  return ((e = e.childContextTypes), e != null);
}
function gl() {
  (H(we), H(de));
}
function qs(e, t, n) {
  if (de.current !== It) throw Error(k(168));
  (U(de, t), U(we, n));
}
function $a(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(k(108, Fd(e) || "Unknown", l));
  return Y({}, n, r);
}
function yl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || It),
    (Zt = de.current),
    U(de, e),
    U(we, we.current),
    !0
  );
}
function bs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  (n
    ? ((e = $a(e, t, Zt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      H(we),
      H(de),
      U(de, e))
    : H(we),
    U(we, n));
}
var lt = null,
  Fl = !1,
  ho = !1;
function Aa(e) {
  lt === null ? (lt = [e]) : lt.push(e);
}
function rp(e) {
  ((Fl = !0), Aa(e));
}
function At() {
  if (!ho && lt !== null) {
    ho = !0;
    var e = 0,
      t = F;
    try {
      var n = lt;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((lt = null), (Fl = !1));
    } catch (l) {
      throw (lt !== null && (lt = lt.slice(e + 1)), aa(Li, At), l);
    } finally {
      ((F = t), (ho = !1));
    }
  }
  return null;
}
var hn = [],
  gn = 0,
  vl = null,
  xl = 0,
  Le = [],
  ze = 0,
  Jt = null,
  ot = 1,
  it = "";
function Ht(e, t) {
  ((hn[gn++] = xl), (hn[gn++] = vl), (vl = e), (xl = t));
}
function Fa(e, t, n) {
  ((Le[ze++] = ot), (Le[ze++] = it), (Le[ze++] = Jt), (Jt = e));
  var r = ot;
  e = it;
  var l = 32 - Be(r) - 1;
  ((r &= ~(1 << l)), (n += 1));
  var o = 32 - Be(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    ((o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (ot = (1 << (32 - Be(t) + l)) | (n << l) | r),
      (it = o + e));
  } else ((ot = (1 << o) | (n << l) | r), (it = e));
}
function Ui(e) {
  e.return !== null && (Ht(e, 1), Fa(e, 1, 0));
}
function Vi(e) {
  for (; e === vl; )
    ((vl = hn[--gn]), (hn[gn] = null), (xl = hn[--gn]), (hn[gn] = null));
  for (; e === Jt; )
    ((Jt = Le[--ze]),
      (Le[ze] = null),
      (it = Le[--ze]),
      (Le[ze] = null),
      (ot = Le[--ze]),
      (Le[ze] = null));
}
var Ce = null,
  Ee = null,
  Q = !1,
  Qe = null;
function Ua(e, t) {
  var n = Oe(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function eu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ce = e), (Ee = Tt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ce = e), (Ee = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Jt !== null ? { id: ot, overflow: it } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Oe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ce = e),
            (Ee = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function qo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function bo(e) {
  if (Q) {
    var t = Ee;
    if (t) {
      var n = t;
      if (!eu(e, t)) {
        if (qo(e)) throw Error(k(418));
        t = Tt(n.nextSibling);
        var r = Ce;
        t && eu(e, t)
          ? Ua(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Q = !1), (Ce = e));
      }
    } else {
      if (qo(e)) throw Error(k(418));
      ((e.flags = (e.flags & -4097) | 2), (Q = !1), (Ce = e));
    }
  }
}
function tu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ce = e;
}
function Vr(e) {
  if (e !== Ce) return !1;
  if (!Q) return (tu(e), (Q = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Go(e.type, e.memoizedProps))),
    t && (t = Ee))
  ) {
    if (qo(e)) throw (Va(), Error(k(418)));
    for (; t; ) (Ua(e, t), (t = Tt(t.nextSibling)));
  }
  if ((tu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ee = Tt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ee = null;
    }
  } else Ee = Ce ? Tt(e.stateNode.nextSibling) : null;
  return !0;
}
function Va() {
  for (var e = Ee; e; ) e = Tt(e.nextSibling);
}
function Pn() {
  ((Ee = Ce = null), (Q = !1));
}
function Hi(e) {
  Qe === null ? (Qe = [e]) : Qe.push(e);
}
var lp = pt.ReactCurrentBatchConfig;
function Qn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var s = l.refs;
            i === null ? delete s[o] : (s[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function Hr(e, t) {
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
function nu(e) {
  var t = e._init;
  return t(e._payload);
}
function Ha(e) {
  function t(p, f) {
    if (e) {
      var d = p.deletions;
      d === null ? ((p.deletions = [f]), (p.flags |= 16)) : d.push(f);
    }
  }
  function n(p, f) {
    if (!e) return null;
    for (; f !== null; ) (t(p, f), (f = f.sibling));
    return null;
  }
  function r(p, f) {
    for (p = new Map(); f !== null; )
      (f.key !== null ? p.set(f.key, f) : p.set(f.index, f), (f = f.sibling));
    return p;
  }
  function l(p, f) {
    return ((p = Ot(p, f)), (p.index = 0), (p.sibling = null), p);
  }
  function o(p, f, d) {
    return (
      (p.index = d),
      e
        ? ((d = p.alternate),
          d !== null
            ? ((d = d.index), d < f ? ((p.flags |= 2), f) : d)
            : ((p.flags |= 2), f))
        : ((p.flags |= 1048576), f)
    );
  }
  function i(p) {
    return (e && p.alternate === null && (p.flags |= 2), p);
  }
  function s(p, f, d, y) {
    return f === null || f.tag !== 6
      ? ((f = ko(d, p.mode, y)), (f.return = p), f)
      : ((f = l(f, d)), (f.return = p), f);
  }
  function u(p, f, d, y) {
    var N = d.type;
    return N === an
      ? h(p, f, d.props.children, y, d.key)
      : f !== null &&
          (f.elementType === N ||
            (typeof N == "object" &&
              N !== null &&
              N.$$typeof === xt &&
              nu(N) === f.type))
        ? ((y = l(f, d.props)), (y.ref = Qn(p, f, d)), (y.return = p), y)
        : ((y = ol(d.type, d.key, d.props, null, p.mode, y)),
          (y.ref = Qn(p, f, d)),
          (y.return = p),
          y);
  }
  function c(p, f, d, y) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== d.containerInfo ||
      f.stateNode.implementation !== d.implementation
      ? ((f = No(d, p.mode, y)), (f.return = p), f)
      : ((f = l(f, d.children || [])), (f.return = p), f);
  }
  function h(p, f, d, y, N) {
    return f === null || f.tag !== 7
      ? ((f = Xt(d, p.mode, y, N)), (f.return = p), f)
      : ((f = l(f, d)), (f.return = p), f);
  }
  function g(p, f, d) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return ((f = ko("" + f, p.mode, d)), (f.return = p), f);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Lr:
          return (
            (d = ol(f.type, f.key, f.props, null, p.mode, d)),
            (d.ref = Qn(p, null, f)),
            (d.return = p),
            d
          );
        case un:
          return ((f = No(f, p.mode, d)), (f.return = p), f);
        case xt:
          var y = f._init;
          return g(p, y(f._payload), d);
      }
      if (Yn(f) || An(f))
        return ((f = Xt(f, p.mode, d, null)), (f.return = p), f);
      Hr(p, f);
    }
    return null;
  }
  function m(p, f, d, y) {
    var N = f !== null ? f.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return N !== null ? null : s(p, f, "" + d, y);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Lr:
          return d.key === N ? u(p, f, d, y) : null;
        case un:
          return d.key === N ? c(p, f, d, y) : null;
        case xt:
          return ((N = d._init), m(p, f, N(d._payload), y));
      }
      if (Yn(d) || An(d)) return N !== null ? null : h(p, f, d, y, null);
      Hr(p, d);
    }
    return null;
  }
  function x(p, f, d, y, N) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return ((p = p.get(d) || null), s(f, p, "" + y, N));
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Lr:
          return (
            (p = p.get(y.key === null ? d : y.key) || null),
            u(f, p, y, N)
          );
        case un:
          return (
            (p = p.get(y.key === null ? d : y.key) || null),
            c(f, p, y, N)
          );
        case xt:
          var w = y._init;
          return x(p, f, d, w(y._payload), N);
      }
      if (Yn(y) || An(y)) return ((p = p.get(d) || null), h(f, p, y, N, null));
      Hr(f, y);
    }
    return null;
  }
  function S(p, f, d, y) {
    for (
      var N = null, w = null, j = f, v = (f = 0), z = null;
      j !== null && v < d.length;
      v++
    ) {
      j.index > v ? ((z = j), (j = null)) : (z = j.sibling);
      var T = m(p, j, d[v], y);
      if (T === null) {
        j === null && (j = z);
        break;
      }
      (e && j && T.alternate === null && t(p, j),
        (f = o(T, f, v)),
        w === null ? (N = T) : (w.sibling = T),
        (w = T),
        (j = z));
    }
    if (v === d.length) return (n(p, j), Q && Ht(p, v), N);
    if (j === null) {
      for (; v < d.length; v++)
        ((j = g(p, d[v], y)),
          j !== null &&
            ((f = o(j, f, v)),
            w === null ? (N = j) : (w.sibling = j),
            (w = j)));
      return (Q && Ht(p, v), N);
    }
    for (j = r(p, j); v < d.length; v++)
      ((z = x(j, p, v, d[v], y)),
        z !== null &&
          (e && z.alternate !== null && j.delete(z.key === null ? v : z.key),
          (f = o(z, f, v)),
          w === null ? (N = z) : (w.sibling = z),
          (w = z)));
    return (
      e &&
        j.forEach(function (A) {
          return t(p, A);
        }),
      Q && Ht(p, v),
      N
    );
  }
  function E(p, f, d, y) {
    var N = An(d);
    if (typeof N != "function") throw Error(k(150));
    if (((d = N.call(d)), d == null)) throw Error(k(151));
    for (
      var w = (N = null), j = f, v = (f = 0), z = null, T = d.next();
      j !== null && !T.done;
      v++, T = d.next()
    ) {
      j.index > v ? ((z = j), (j = null)) : (z = j.sibling);
      var A = m(p, j, T.value, y);
      if (A === null) {
        j === null && (j = z);
        break;
      }
      (e && j && A.alternate === null && t(p, j),
        (f = o(A, f, v)),
        w === null ? (N = A) : (w.sibling = A),
        (w = A),
        (j = z));
    }
    if (T.done) return (n(p, j), Q && Ht(p, v), N);
    if (j === null) {
      for (; !T.done; v++, T = d.next())
        ((T = g(p, T.value, y)),
          T !== null &&
            ((f = o(T, f, v)),
            w === null ? (N = T) : (w.sibling = T),
            (w = T)));
      return (Q && Ht(p, v), N);
    }
    for (j = r(p, j); !T.done; v++, T = d.next())
      ((T = x(j, p, v, T.value, y)),
        T !== null &&
          (e && T.alternate !== null && j.delete(T.key === null ? v : T.key),
          (f = o(T, f, v)),
          w === null ? (N = T) : (w.sibling = T),
          (w = T)));
    return (
      e &&
        j.forEach(function (J) {
          return t(p, J);
        }),
      Q && Ht(p, v),
      N
    );
  }
  function I(p, f, d, y) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === an &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case Lr:
          e: {
            for (var N = d.key, w = f; w !== null; ) {
              if (w.key === N) {
                if (((N = d.type), N === an)) {
                  if (w.tag === 7) {
                    (n(p, w.sibling),
                      (f = l(w, d.props.children)),
                      (f.return = p),
                      (p = f));
                    break e;
                  }
                } else if (
                  w.elementType === N ||
                  (typeof N == "object" &&
                    N !== null &&
                    N.$$typeof === xt &&
                    nu(N) === w.type)
                ) {
                  (n(p, w.sibling),
                    (f = l(w, d.props)),
                    (f.ref = Qn(p, w, d)),
                    (f.return = p),
                    (p = f));
                  break e;
                }
                n(p, w);
                break;
              } else t(p, w);
              w = w.sibling;
            }
            d.type === an
              ? ((f = Xt(d.props.children, p.mode, y, d.key)),
                (f.return = p),
                (p = f))
              : ((y = ol(d.type, d.key, d.props, null, p.mode, y)),
                (y.ref = Qn(p, f, d)),
                (y.return = p),
                (p = y));
          }
          return i(p);
        case un:
          e: {
            for (w = d.key; f !== null; ) {
              if (f.key === w)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === d.containerInfo &&
                  f.stateNode.implementation === d.implementation
                ) {
                  (n(p, f.sibling),
                    (f = l(f, d.children || [])),
                    (f.return = p),
                    (p = f));
                  break e;
                } else {
                  n(p, f);
                  break;
                }
              else t(p, f);
              f = f.sibling;
            }
            ((f = No(d, p.mode, y)), (f.return = p), (p = f));
          }
          return i(p);
        case xt:
          return ((w = d._init), I(p, f, w(d._payload), y));
      }
      if (Yn(d)) return S(p, f, d, y);
      if (An(d)) return E(p, f, d, y);
      Hr(p, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        f !== null && f.tag === 6
          ? (n(p, f.sibling), (f = l(f, d)), (f.return = p), (p = f))
          : (n(p, f), (f = ko(d, p.mode, y)), (f.return = p), (p = f)),
        i(p))
      : n(p, f);
  }
  return I;
}
var Tn = Ha(!0),
  Qa = Ha(!1),
  wl = $t(null),
  Sl = null,
  yn = null,
  Qi = null;
function Bi() {
  Qi = yn = Sl = null;
}
function Wi(e) {
  var t = wl.current;
  (H(wl), (e._currentValue = t));
}
function ei(e, t, n) {
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
function En(e, t) {
  ((Sl = e),
    (Qi = yn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (xe = !0), (e.firstContext = null)));
}
function Ie(e) {
  var t = e._currentValue;
  if (Qi !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), yn === null)) {
      if (Sl === null) throw Error(k(308));
      ((yn = e), (Sl.dependencies = { lanes: 0, firstContext: e }));
    } else yn = yn.next = e;
  return t;
}
var Wt = null;
function Ki(e) {
  Wt === null ? (Wt = [e]) : Wt.push(e);
}
function Ba(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Ki(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    ct(e, r)
  );
}
function ct(e, t) {
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
var wt = !1;
function Yi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Wa(e, t) {
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
function st(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Dt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), $ & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      ct(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Ki(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    ct(e, n)
  );
}
function br(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), zi(e, n));
  }
}
function ru(e, t) {
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
function kl(e, t, n, r) {
  var l = e.updateQueue;
  wt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var u = s,
      c = u.next;
    ((u.next = null), i === null ? (o = c) : (i.next = c), (i = u));
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (s = h.lastBaseUpdate),
      s !== i &&
        (s === null ? (h.firstBaseUpdate = c) : (s.next = c),
        (h.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var g = l.baseState;
    ((i = 0), (h = c = u = null), (s = o));
    do {
      var m = s.lane,
        x = s.eventTime;
      if ((r & m) === m) {
        h !== null &&
          (h = h.next =
            {
              eventTime: x,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var S = e,
            E = s;
          switch (((m = t), (x = n), E.tag)) {
            case 1:
              if (((S = E.payload), typeof S == "function")) {
                g = S.call(x, g, m);
                break e;
              }
              g = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = E.payload),
                (m = typeof S == "function" ? S.call(x, g, m) : S),
                m == null)
              )
                break e;
              g = Y({}, g, m);
              break e;
            case 2:
              wt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [s]) : m.push(s));
      } else
        ((x = {
          eventTime: x,
          lane: m,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          h === null ? ((c = h = x), (u = g)) : (h = h.next = x),
          (i |= m));
      if (((s = s.next), s === null)) {
        if (((s = l.shared.pending), s === null)) break;
        ((m = s),
          (s = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null));
      }
    } while (!0);
    if (
      (h === null && (u = g),
      (l.baseState = u),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do ((i |= l.lane), (l = l.next));
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    ((bt |= i), (e.lanes = i), (e.memoizedState = g));
  }
}
function lu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(k(191, l));
        l.call(r);
      }
    }
}
var _r = {},
  et = $t(_r),
  yr = $t(_r),
  vr = $t(_r);
function Kt(e) {
  if (e === _r) throw Error(k(174));
  return e;
}
function Gi(e, t) {
  switch ((U(vr, t), U(yr, e), U(et, _r), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Mo(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Mo(t, e)));
  }
  (H(et), U(et, t));
}
function Dn() {
  (H(et), H(yr), H(vr));
}
function Ka(e) {
  Kt(vr.current);
  var t = Kt(et.current),
    n = Mo(t, e.type);
  t !== n && (U(yr, e), U(et, n));
}
function Xi(e) {
  yr.current === e && (H(et), H(yr));
}
var W = $t(0);
function Nl(e) {
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
var go = [];
function Zi() {
  for (var e = 0; e < go.length; e++)
    go[e]._workInProgressVersionPrimary = null;
  go.length = 0;
}
var el = pt.ReactCurrentDispatcher,
  yo = pt.ReactCurrentBatchConfig,
  qt = 0,
  K = null,
  b = null,
  te = null,
  El = !1,
  tr = !1,
  xr = 0,
  op = 0;
function ue() {
  throw Error(k(321));
}
function Ji(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ke(e[n], t[n])) return !1;
  return !0;
}
function qi(e, t, n, r, l, o) {
  if (
    ((qt = o),
    (K = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (el.current = e === null || e.memoizedState === null ? ap : cp),
    (e = n(r, l)),
    tr)
  ) {
    o = 0;
    do {
      if (((tr = !1), (xr = 0), 25 <= o)) throw Error(k(301));
      ((o += 1),
        (te = b = null),
        (t.updateQueue = null),
        (el.current = dp),
        (e = n(r, l)));
    } while (tr);
  }
  if (
    ((el.current = Cl),
    (t = b !== null && b.next !== null),
    (qt = 0),
    (te = b = K = null),
    (El = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function bi() {
  var e = xr !== 0;
  return ((xr = 0), e);
}
function Je() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (te === null ? (K.memoizedState = te = e) : (te = te.next = e), te);
}
function Re() {
  if (b === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = b.next;
  var t = te === null ? K.memoizedState : te.next;
  if (t !== null) ((te = t), (b = e));
  else {
    if (e === null) throw Error(k(310));
    ((b = e),
      (e = {
        memoizedState: b.memoizedState,
        baseState: b.baseState,
        baseQueue: b.baseQueue,
        queue: b.queue,
        next: null,
      }),
      te === null ? (K.memoizedState = te = e) : (te = te.next = e));
  }
  return te;
}
function wr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function vo(e) {
  var t = Re(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = b,
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
    var s = (i = null),
      u = null,
      c = o;
    do {
      var h = c.lane;
      if ((qt & h) === h)
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
        var g = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        (u === null ? ((s = u = g), (i = r)) : (u = u.next = g),
          (K.lanes |= h),
          (bt |= h));
      }
      c = c.next;
    } while (c !== null && c !== o);
    (u === null ? (i = r) : (u.next = s),
      Ke(r, t.memoizedState) || (xe = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do ((o = l.lane), (K.lanes |= o), (bt |= o), (l = l.next));
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function xo(e) {
  var t = Re(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do ((o = e(o, i.action)), (i = i.next));
    while (i !== l);
    (Ke(o, t.memoizedState) || (xe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o));
  }
  return [o, r];
}
function Ya() {}
function Ga(e, t) {
  var n = K,
    r = Re(),
    l = t(),
    o = !Ke(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (xe = !0)),
    (r = r.queue),
    es(Ja.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (te !== null && te.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Sr(9, Za.bind(null, n, r, l, t), void 0, null),
      ne === null)
    )
      throw Error(k(349));
    qt & 30 || Xa(n, t, l);
  }
  return l;
}
function Xa(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function Za(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), qa(t) && ba(e));
}
function Ja(e, t, n) {
  return n(function () {
    qa(t) && ba(e);
  });
}
function qa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ke(e, n);
  } catch {
    return !0;
  }
}
function ba(e) {
  var t = ct(e, 1);
  t !== null && We(t, e, 1, -1);
}
function ou(e) {
  var t = Je();
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
    (e = e.dispatch = up.bind(null, K, e)),
    [t.memoizedState, e]
  );
}
function Sr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ec() {
  return Re().memoizedState;
}
function tl(e, t, n, r) {
  var l = Je();
  ((K.flags |= e),
    (l.memoizedState = Sr(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Ul(e, t, n, r) {
  var l = Re();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (b !== null) {
    var i = b.memoizedState;
    if (((o = i.destroy), r !== null && Ji(r, i.deps))) {
      l.memoizedState = Sr(t, n, o, r);
      return;
    }
  }
  ((K.flags |= e), (l.memoizedState = Sr(1 | t, n, o, r)));
}
function iu(e, t) {
  return tl(8390656, 8, e, t);
}
function es(e, t) {
  return Ul(2048, 8, e, t);
}
function tc(e, t) {
  return Ul(4, 2, e, t);
}
function nc(e, t) {
  return Ul(4, 4, e, t);
}
function rc(e, t) {
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
function lc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Ul(4, 4, rc.bind(null, t, e), n)
  );
}
function ts() {}
function oc(e, t) {
  var n = Re();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ji(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ic(e, t) {
  var n = Re();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ji(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function sc(e, t, n) {
  return qt & 21
    ? (Ke(n, t) || ((n = fa()), (K.lanes |= n), (bt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (xe = !0)), (e.memoizedState = n));
}
function ip(e, t) {
  var n = F;
  ((F = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = yo.transition;
  yo.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((F = n), (yo.transition = r));
  }
}
function uc() {
  return Re().memoizedState;
}
function sp(e, t, n) {
  var r = zt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ac(e))
  )
    cc(t, n);
  else if (((n = Ba(e, t, n, r)), n !== null)) {
    var l = he();
    (We(n, e, r, l), dc(n, t, r));
  }
}
function up(e, t, n) {
  var r = zt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ac(e)) cc(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          s = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = s), Ke(s, i))) {
          var u = t.interleaved;
          (u === null
            ? ((l.next = l), Ki(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l));
          return;
        }
      } catch {
      } finally {
      }
    ((n = Ba(e, t, l, r)),
      n !== null && ((l = he()), We(n, e, r, l), dc(n, t, r)));
  }
}
function ac(e) {
  var t = e.alternate;
  return e === K || (t !== null && t === K);
}
function cc(e, t) {
  tr = El = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function dc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), zi(e, n));
  }
}
var Cl = {
    readContext: Ie,
    useCallback: ue,
    useContext: ue,
    useEffect: ue,
    useImperativeHandle: ue,
    useInsertionEffect: ue,
    useLayoutEffect: ue,
    useMemo: ue,
    useReducer: ue,
    useRef: ue,
    useState: ue,
    useDebugValue: ue,
    useDeferredValue: ue,
    useTransition: ue,
    useMutableSource: ue,
    useSyncExternalStore: ue,
    useId: ue,
    unstable_isNewReconciler: !1,
  },
  ap = {
    readContext: Ie,
    useCallback: function (e, t) {
      return ((Je().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Ie,
    useEffect: iu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        tl(4194308, 4, rc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return tl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return tl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Je();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = Je();
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
        (e = e.dispatch = sp.bind(null, K, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Je();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: ou,
    useDebugValue: ts,
    useDeferredValue: function (e) {
      return (Je().memoizedState = e);
    },
    useTransition: function () {
      var e = ou(!1),
        t = e[0];
      return ((e = ip.bind(null, e[1])), (Je().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = K,
        l = Je();
      if (Q) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), ne === null)) throw Error(k(349));
        qt & 30 || Xa(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        iu(Ja.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Sr(9, Za.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Je(),
        t = ne.identifierPrefix;
      if (Q) {
        var n = it,
          r = ot;
        ((n = (r & ~(1 << (32 - Be(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = xr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = op++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  cp = {
    readContext: Ie,
    useCallback: oc,
    useContext: Ie,
    useEffect: es,
    useImperativeHandle: lc,
    useInsertionEffect: tc,
    useLayoutEffect: nc,
    useMemo: ic,
    useReducer: vo,
    useRef: ec,
    useState: function () {
      return vo(wr);
    },
    useDebugValue: ts,
    useDeferredValue: function (e) {
      var t = Re();
      return sc(t, b.memoizedState, e);
    },
    useTransition: function () {
      var e = vo(wr)[0],
        t = Re().memoizedState;
      return [e, t];
    },
    useMutableSource: Ya,
    useSyncExternalStore: Ga,
    useId: uc,
    unstable_isNewReconciler: !1,
  },
  dp = {
    readContext: Ie,
    useCallback: oc,
    useContext: Ie,
    useEffect: es,
    useImperativeHandle: lc,
    useInsertionEffect: tc,
    useLayoutEffect: nc,
    useMemo: ic,
    useReducer: xo,
    useRef: ec,
    useState: function () {
      return xo(wr);
    },
    useDebugValue: ts,
    useDeferredValue: function (e) {
      var t = Re();
      return b === null ? (t.memoizedState = e) : sc(t, b.memoizedState, e);
    },
    useTransition: function () {
      var e = xo(wr)[0],
        t = Re().memoizedState;
      return [e, t];
    },
    useMutableSource: Ya,
    useSyncExternalStore: Ga,
    useId: uc,
    unstable_isNewReconciler: !1,
  };
function Ve(e, t) {
  if (e && e.defaultProps) {
    ((t = Y({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ti(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Y({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var Vl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? nn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = he(),
      l = zt(e),
      o = st(r, l);
    ((o.payload = t),
      n != null && (o.callback = n),
      (t = Dt(e, o, l)),
      t !== null && (We(t, e, l, r), br(t, e, l)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = he(),
      l = zt(e),
      o = st(r, l);
    ((o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Dt(e, o, l)),
      t !== null && (We(t, e, l, r), br(t, e, l)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = he(),
      r = zt(e),
      l = st(n, r);
    ((l.tag = 2),
      t != null && (l.callback = t),
      (t = Dt(e, l, r)),
      t !== null && (We(t, e, r, n), br(t, e, r)));
  },
};
function su(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !pr(n, r) || !pr(l, o)
        : !0
  );
}
function fc(e, t, n) {
  var r = !1,
    l = It,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ie(o))
      : ((l = Se(t) ? Zt : de.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? _n(e, l) : It)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Vl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function uu(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Vl.enqueueReplaceState(t, t.state, null));
}
function ni(e, t, n, r) {
  var l = e.stateNode;
  ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Yi(e));
  var o = t.contextType;
  (typeof o == "object" && o !== null
    ? (l.context = Ie(o))
    : ((o = Se(t) ? Zt : de.current), (l.context = _n(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (ti(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Vl.enqueueReplaceState(l, l.state, null),
      kl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308));
}
function Ln(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += Ad(r)), (r = r.return));
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
function wo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ri(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var fp = typeof WeakMap == "function" ? WeakMap : Map;
function pc(e, t, n) {
  ((n = st(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (_l || ((_l = !0), (pi = r)), ri(e, t));
    }),
    n
  );
}
function mc(e, t, n) {
  ((n = st(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    ((n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        ri(e, t);
      }));
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        (ri(e, t),
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
function au(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new fp();
    var l = new Set();
    r.set(t, l);
  } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
  l.has(n) || (l.add(n), (e = jp.bind(null, e, t, n)), t.then(e, e));
}
function cu(e) {
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
function du(e, t, n, r, l) {
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
              : ((t = st(-1, 1)), (t.tag = 2), Dt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var pp = pt.ReactCurrentOwner,
  xe = !1;
function pe(e, t, n, r) {
  t.child = e === null ? Qa(t, null, n, r) : Tn(t, e.child, n, r);
}
function fu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    En(t, l),
    (r = qi(e, t, n, r, o, l)),
    (n = bi()),
    e !== null && !xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        dt(e, t, l))
      : (Q && n && Ui(t), (t.flags |= 1), pe(e, t, r, l), t.child)
  );
}
function pu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !as(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), hc(e, t, o, r, l))
      : ((e = ol(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : pr), n(i, r) && e.ref === t.ref)
    )
      return dt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Ot(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function hc(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (pr(o, r) && e.ref === t.ref)
      if (((xe = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (xe = !0);
      else return ((t.lanes = e.lanes), dt(e, t, l));
  }
  return li(e, t, n, r, l);
}
function gc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        U(xn, Ne),
        (Ne |= n));
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
          U(xn, Ne),
          (Ne |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        U(xn, Ne),
        (Ne |= r));
    }
  else
    (o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      U(xn, Ne),
      (Ne |= r));
  return (pe(e, t, l, n), t.child);
}
function yc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function li(e, t, n, r, l) {
  var o = Se(n) ? Zt : de.current;
  return (
    (o = _n(t, o)),
    En(t, l),
    (n = qi(e, t, n, r, o, l)),
    (r = bi()),
    e !== null && !xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        dt(e, t, l))
      : (Q && r && Ui(t), (t.flags |= 1), pe(e, t, n, l), t.child)
  );
}
function mu(e, t, n, r, l) {
  if (Se(n)) {
    var o = !0;
    yl(t);
  } else o = !1;
  if ((En(t, l), t.stateNode === null))
    (nl(e, t), fc(t, n, r), ni(t, n, r, l), (r = !0));
  else if (e === null) {
    var i = t.stateNode,
      s = t.memoizedProps;
    i.props = s;
    var u = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ie(c))
      : ((c = Se(n) ? Zt : de.current), (c = _n(t, c)));
    var h = n.getDerivedStateFromProps,
      g =
        typeof h == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    (g ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== r || u !== c) && uu(t, i, r, c)),
      (wt = !1));
    var m = t.memoizedState;
    ((i.state = m),
      kl(t, r, i, l),
      (u = t.memoizedState),
      s !== r || m !== u || we.current || wt
        ? (typeof h == "function" && (ti(t, n, h, r), (u = t.memoizedState)),
          (s = wt || su(t, n, s, r, m, u, c))
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
          (r = s))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((i = t.stateNode),
      Wa(e, t),
      (s = t.memoizedProps),
      (c = t.type === t.elementType ? s : Ve(t.type, s)),
      (i.props = c),
      (g = t.pendingProps),
      (m = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Ie(u))
        : ((u = Se(n) ? Zt : de.current), (u = _n(t, u))));
    var x = n.getDerivedStateFromProps;
    ((h =
      typeof x == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== g || m !== u) && uu(t, i, r, u)),
      (wt = !1),
      (m = t.memoizedState),
      (i.state = m),
      kl(t, r, i, l));
    var S = t.memoizedState;
    s !== g || m !== S || we.current || wt
      ? (typeof x == "function" && (ti(t, n, x, r), (S = t.memoizedState)),
        (c = wt || su(t, n, c, r, m, S, u) || !1)
          ? (h ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, S, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, S, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (i.props = r),
        (i.state = S),
        (i.context = u),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return oi(e, t, n, r, o, l);
}
function oi(e, t, n, r, l, o) {
  yc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return (l && bs(t, n, !1), dt(e, t, o));
  ((r = t.stateNode), (pp.current = t));
  var s =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Tn(t, e.child, null, o)), (t.child = Tn(t, null, s, o)))
      : pe(e, t, s, o),
    (t.memoizedState = r.state),
    l && bs(t, n, !0),
    t.child
  );
}
function vc(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? qs(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && qs(e, t.context, !1),
    Gi(e, t.containerInfo));
}
function hu(e, t, n, r, l) {
  return (Pn(), Hi(l), (t.flags |= 256), pe(e, t, n, r), t.child);
}
var ii = { dehydrated: null, treeContext: null, retryLane: 0 };
function si(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function xc(e, t, n) {
  var r = t.pendingProps,
    l = W.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    s;
  if (
    ((s = i) ||
      (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    U(W, l & 1),
    e === null)
  )
    return (
      bo(t),
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
                : (o = Bl(i, r, 0, null)),
              (e = Xt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = si(n)),
              (t.memoizedState = ii),
              e)
            : ns(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
    return mp(e, t, i, r, s, l, n);
  if (o) {
    ((o = r.fallback), (i = t.mode), (l = e.child), (s = l.sibling));
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Ot(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      s !== null ? (o = Ot(s, o)) : ((o = Xt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? si(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = ii),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Ot(o, { mode: "visible", children: r.children })),
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
function ns(e, t) {
  return (
    (t = Bl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Qr(e, t, n, r) {
  return (
    r !== null && Hi(r),
    Tn(t, e.child, null, n),
    (e = ns(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function mp(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = wo(Error(k(422)))), Qr(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (l = t.mode),
          (r = Bl({ mode: "visible", children: r.children }, l, 0, null)),
          (o = Xt(o, l, i, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && Tn(t, e.child, null, i),
          (t.child.memoizedState = si(i)),
          (t.memoizedState = ii),
          o);
  if (!(t.mode & 1)) return Qr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst;
    return (
      (r = s),
      (o = Error(k(419))),
      (r = wo(o, r, void 0)),
      Qr(e, t, i, r)
    );
  }
  if (((s = (i & e.childLanes) !== 0), xe || s)) {
    if (((r = ne), r !== null)) {
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
          ((o.retryLane = l), ct(e, l), We(r, e, l, -1)));
    }
    return (us(), (r = wo(Error(k(421)))), Qr(e, t, i, r));
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = _p.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ee = Tt(l.nextSibling)),
      (Ce = t),
      (Q = !0),
      (Qe = null),
      e !== null &&
        ((Le[ze++] = ot),
        (Le[ze++] = it),
        (Le[ze++] = Jt),
        (ot = e.id),
        (it = e.overflow),
        (Jt = t)),
      (t = ns(t, r.children)),
      (t.flags |= 4096),
      t);
}
function gu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), ei(e.return, t, n));
}
function So(e, t, n, r, l) {
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
function wc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((pe(e, t, r.children, n), (r = W.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && gu(e, n, t);
        else if (e.tag === 19) gu(e, n, t);
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
  if ((U(W, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          ((e = n.alternate),
            e !== null && Nl(e) === null && (l = n),
            (n = n.sibling));
        ((n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          So(t, !1, l, n, o));
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Nl(e) === null)) {
            t.child = l;
            break;
          }
          ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
        }
        So(t, !0, n, null, o);
        break;
      case "together":
        So(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function nl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function dt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (bt |= t.lanes),
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
function hp(e, t, n) {
  switch (t.tag) {
    case 3:
      (vc(t), Pn());
      break;
    case 5:
      Ka(t);
      break;
    case 1:
      Se(t.type) && yl(t);
      break;
    case 4:
      Gi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      (U(wl, r._currentValue), (r._currentValue = l));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (U(W, W.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? xc(e, t, n)
            : (U(W, W.current & 1),
              (e = dt(e, t, n)),
              e !== null ? e.sibling : null);
      U(W, W.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return wc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        U(W, W.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), gc(e, t, n));
  }
  return dt(e, t, n);
}
var Sc, ui, kc, Nc;
Sc = function (e, t) {
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
ui = function () {};
kc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    ((e = t.stateNode), Kt(et.current));
    var o = null;
    switch (n) {
      case "input":
        ((l = Do(e, l)), (r = Do(e, r)), (o = []));
        break;
      case "select":
        ((l = Y({}, l, { value: void 0 })),
          (r = Y({}, r, { value: void 0 })),
          (o = []));
        break;
      case "textarea":
        ((l = Oo(e, l)), (r = Oo(e, r)), (o = []));
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = hl);
    }
    Io(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var s = l[c];
          for (i in s) s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (ir.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((s = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && u !== s && (u != null || s != null))
      )
        if (c === "style")
          if (s) {
            for (i in s)
              !s.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in u)
              u.hasOwnProperty(i) &&
                s[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else (n || (o || (o = []), o.push(c, n)), (n = u));
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (o = o || []).push(c, u))
            : c === "children"
              ? (typeof u != "string" && typeof u != "number") ||
                (o = o || []).push(c, "" + u)
              : c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                (ir.hasOwnProperty(c)
                  ? (u != null && c === "onScroll" && V("scroll", e),
                    o || s === u || (o = []))
                  : (o = o || []).push(c, u));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Nc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Bn(e, t) {
  if (!Q)
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
function ae(e) {
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
function gp(e, t, n) {
  var r = t.pendingProps;
  switch ((Vi(t), t.tag)) {
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
      return (ae(t), null);
    case 1:
      return (Se(t.type) && gl(), ae(t), null);
    case 3:
      return (
        (r = t.stateNode),
        Dn(),
        H(we),
        H(de),
        Zi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Vr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Qe !== null && (gi(Qe), (Qe = null)))),
        ui(e, t),
        ae(t),
        null
      );
    case 5:
      Xi(t);
      var l = Kt(vr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (kc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return (ae(t), null);
        }
        if (((e = Kt(et.current)), Vr(t))) {
          ((r = t.stateNode), (n = t.type));
          var o = t.memoizedProps;
          switch (((r[qe] = t), (r[gr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (V("cancel", r), V("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              V("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Xn.length; l++) V(Xn[l], r);
              break;
            case "source":
              V("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (V("error", r), V("load", r));
              break;
            case "details":
              V("toggle", r);
              break;
            case "input":
              (Cs(r, o), V("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!o.multiple }),
                V("invalid", r));
              break;
            case "textarea":
              (_s(r, o), V("invalid", r));
          }
          (Io(n, o), (l = null));
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var s = o[i];
              i === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ur(r.textContent, s, e),
                    (l = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ur(r.textContent, s, e),
                    (l = ["children", "" + s]))
                : ir.hasOwnProperty(i) &&
                  s != null &&
                  i === "onScroll" &&
                  V("scroll", r);
            }
          switch (n) {
            case "input":
              (zr(r), js(r, o, !0));
              break;
            case "textarea":
              (zr(r), Ps(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = hl);
          }
          ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ju(n)),
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
            (e[qe] = t),
            (e[gr] = r),
            Sc(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((i = Ro(n, r)), n)) {
              case "dialog":
                (V("cancel", e), V("close", e), (l = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (V("load", e), (l = r));
                break;
              case "video":
              case "audio":
                for (l = 0; l < Xn.length; l++) V(Xn[l], e);
                l = r;
                break;
              case "source":
                (V("error", e), (l = r));
                break;
              case "img":
              case "image":
              case "link":
                (V("error", e), V("load", e), (l = r));
                break;
              case "details":
                (V("toggle", e), (l = r));
                break;
              case "input":
                (Cs(e, r), (l = Do(e, r)), V("invalid", e));
                break;
              case "option":
                l = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = Y({}, r, { value: void 0 })),
                  V("invalid", e));
                break;
              case "textarea":
                (_s(e, r), (l = Oo(e, r)), V("invalid", e));
                break;
              default:
                l = r;
            }
            (Io(n, l), (s = l));
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var u = s[o];
                o === "style"
                  ? ea(e, u)
                  : o === "dangerouslySetInnerHTML"
                    ? ((u = u ? u.__html : void 0), u != null && qu(e, u))
                    : o === "children"
                      ? typeof u == "string"
                        ? (n !== "textarea" || u !== "") && sr(e, u)
                        : typeof u == "number" && sr(e, "" + u)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (ir.hasOwnProperty(o)
                          ? u != null && o === "onScroll" && V("scroll", e)
                          : u != null && ji(e, o, u, i));
              }
            switch (n) {
              case "input":
                (zr(e), js(e, r, !1));
                break;
              case "textarea":
                (zr(e), Ps(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Mt(r.value));
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
                typeof l.onClick == "function" && (e.onclick = hl);
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
      return (ae(t), null);
    case 6:
      if (e && t.stateNode != null) Nc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = Kt(vr.current)), Kt(et.current), Vr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[qe] = t),
            (o = r.nodeValue !== n) && ((e = Ce), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ur(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ur(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[qe] = t),
            (t.stateNode = r));
      }
      return (ae(t), null);
    case 13:
      if (
        (H(W),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Q && Ee !== null && t.mode & 1 && !(t.flags & 128))
          (Va(), Pn(), (t.flags |= 98560), (o = !1));
        else if (((o = Vr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(k(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(k(317));
            o[qe] = t;
          } else
            (Pn(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (ae(t), (o = !1));
        } else (Qe !== null && (gi(Qe), (Qe = null)), (o = !0));
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || W.current & 1 ? ee === 0 && (ee = 3) : us())),
          t.updateQueue !== null && (t.flags |= 4),
          ae(t),
          null);
    case 4:
      return (
        Dn(),
        ui(e, t),
        e === null && mr(t.stateNode.containerInfo),
        ae(t),
        null
      );
    case 10:
      return (Wi(t.type._context), ae(t), null);
    case 17:
      return (Se(t.type) && gl(), ae(t), null);
    case 19:
      if ((H(W), (o = t.memoizedState), o === null)) return (ae(t), null);
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Bn(o, !1);
        else {
          if (ee !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Nl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Bn(o, !1),
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
                return (U(W, (W.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Z() > zn &&
            ((t.flags |= 128), (r = !0), Bn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Nl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Bn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !Q)
            )
              return (ae(t), null);
          } else
            2 * Z() - o.renderingStartTime > zn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Bn(o, !1), (t.lanes = 4194304));
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
          (o.renderingStartTime = Z()),
          (t.sibling = null),
          (n = W.current),
          U(W, r ? (n & 1) | 2 : n & 1),
          t)
        : (ae(t), null);
    case 22:
    case 23:
      return (
        ss(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ne & 1073741824 && (ae(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ae(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function yp(e, t) {
  switch ((Vi(t), t.tag)) {
    case 1:
      return (
        Se(t.type) && gl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Dn(),
        H(we),
        H(de),
        Zi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Xi(t), null);
    case 13:
      if ((H(W), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        Pn();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (H(W), null);
    case 4:
      return (Dn(), null);
    case 10:
      return (Wi(t.type._context), null);
    case 22:
    case 23:
      return (ss(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Br = !1,
  ce = !1,
  vp = typeof WeakSet == "function" ? WeakSet : Set,
  P = null;
function vn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        G(e, t, r);
      }
    else n.current = null;
}
function ai(e, t, n) {
  try {
    n();
  } catch (r) {
    G(e, t, r);
  }
}
var yu = !1;
function xp(e, t) {
  if (((Ko = fl), (e = Pa()), Fi(e))) {
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
            s = -1,
            u = -1,
            c = 0,
            h = 0,
            g = e,
            m = null;
          t: for (;;) {
            for (
              var x;
              g !== n || (l !== 0 && g.nodeType !== 3) || (s = i + l),
                g !== o || (r !== 0 && g.nodeType !== 3) || (u = i + r),
                g.nodeType === 3 && (i += g.nodeValue.length),
                (x = g.firstChild) !== null;
            )
              ((m = g), (g = x));
            for (;;) {
              if (g === e) break t;
              if (
                (m === n && ++c === l && (s = i),
                m === o && ++h === r && (u = i),
                (x = g.nextSibling) !== null)
              )
                break;
              ((g = m), (m = g.parentNode));
            }
            g = x;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Yo = { focusedElem: e, selectionRange: n }, fl = !1, P = t; P !== null; )
    if (((t = P), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (P = e));
    else
      for (; P !== null; ) {
        t = P;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var E = S.memoizedProps,
                    I = S.memoizedState,
                    p = t.stateNode,
                    f = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? E : Ve(t.type, E),
                      I,
                    );
                  p.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (y) {
          G(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (P = e));
          break;
        }
        P = t.return;
      }
  return ((S = yu), (yu = !1), S);
}
function nr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        ((l.destroy = void 0), o !== void 0 && ai(t, n, o));
      }
      l = l.next;
    } while (l !== r);
  }
}
function Hl(e, t) {
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
function ci(e) {
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
function Ec(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Ec(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[qe], delete t[gr], delete t[Zo], delete t[tp], delete t[np])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Cc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function vu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Cc(e.return)) return null;
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
function di(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = hl)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (di(e, t, n), e = e.sibling; e !== null; )
      (di(e, t, n), (e = e.sibling));
}
function fi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (fi(e, t, n), e = e.sibling; e !== null; )
      (fi(e, t, n), (e = e.sibling));
}
var le = null,
  He = !1;
function vt(e, t, n) {
  for (n = n.child; n !== null; ) (jc(e, t, n), (n = n.sibling));
}
function jc(e, t, n) {
  if (be && typeof be.onCommitFiberUnmount == "function")
    try {
      be.onCommitFiberUnmount(Ml, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ce || vn(n, t);
    case 6:
      var r = le,
        l = He;
      ((le = null),
        vt(e, t, n),
        (le = r),
        (He = l),
        le !== null &&
          (He
            ? ((e = le),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : le.removeChild(n.stateNode)));
      break;
    case 18:
      le !== null &&
        (He
          ? ((e = le),
            (n = n.stateNode),
            e.nodeType === 8
              ? mo(e.parentNode, n)
              : e.nodeType === 1 && mo(e, n),
            dr(e))
          : mo(le, n.stateNode));
      break;
    case 4:
      ((r = le),
        (l = He),
        (le = n.stateNode.containerInfo),
        (He = !0),
        vt(e, t, n),
        (le = r),
        (He = l));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ce &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          ((o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && ai(n, t, i),
            (l = l.next));
        } while (l !== r);
      }
      vt(e, t, n);
      break;
    case 1:
      if (
        !ce &&
        (vn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (s) {
          G(n, t, s);
        }
      vt(e, t, n);
      break;
    case 21:
      vt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ce = (r = ce) || n.memoizedState !== null), vt(e, t, n), (ce = r))
        : vt(e, t, n);
      break;
    default:
      vt(e, t, n);
  }
}
function xu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new vp()),
      t.forEach(function (r) {
        var l = Pp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      }));
  }
}
function Ue(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          s = i;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              ((le = s.stateNode), (He = !1));
              break e;
            case 3:
              ((le = s.stateNode.containerInfo), (He = !0));
              break e;
            case 4:
              ((le = s.stateNode.containerInfo), (He = !0));
              break e;
          }
          s = s.return;
        }
        if (le === null) throw Error(k(160));
        (jc(o, i, l), (le = null), (He = !1));
        var u = l.alternate;
        (u !== null && (u.return = null), (l.return = null));
      } catch (c) {
        G(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (_c(t, e), (t = t.sibling));
}
function _c(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ue(t, e), Ze(e), r & 4)) {
        try {
          (nr(3, e, e.return), Hl(3, e));
        } catch (E) {
          G(e, e.return, E);
        }
        try {
          nr(5, e, e.return);
        } catch (E) {
          G(e, e.return, E);
        }
      }
      break;
    case 1:
      (Ue(t, e), Ze(e), r & 512 && n !== null && vn(n, n.return));
      break;
    case 5:
      if (
        (Ue(t, e),
        Ze(e),
        r & 512 && n !== null && vn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          sr(l, "");
        } catch (E) {
          G(e, e.return, E);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            (s === "input" && o.type === "radio" && o.name != null && Xu(l, o),
              Ro(s, i));
            var c = Ro(s, o);
            for (i = 0; i < u.length; i += 2) {
              var h = u[i],
                g = u[i + 1];
              h === "style"
                ? ea(l, g)
                : h === "dangerouslySetInnerHTML"
                  ? qu(l, g)
                  : h === "children"
                    ? sr(l, g)
                    : ji(l, h, g, c);
            }
            switch (s) {
              case "input":
                Lo(l, o);
                break;
              case "textarea":
                Zu(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var x = o.value;
                x != null
                  ? wn(l, !!o.multiple, x, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? wn(l, !!o.multiple, o.defaultValue, !0)
                      : wn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[gr] = o;
          } catch (E) {
            G(e, e.return, E);
          }
      }
      break;
    case 6:
      if ((Ue(t, e), Ze(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        ((l = e.stateNode), (o = e.memoizedProps));
        try {
          l.nodeValue = o;
        } catch (E) {
          G(e, e.return, E);
        }
      }
      break;
    case 3:
      if (
        (Ue(t, e), Ze(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          dr(t.containerInfo);
        } catch (E) {
          G(e, e.return, E);
        }
      break;
    case 4:
      (Ue(t, e), Ze(e));
      break;
    case 13:
      (Ue(t, e),
        Ze(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (os = Z())),
        r & 4 && xu(e));
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ce = (c = ce) || h), Ue(t, e), (ce = c)) : Ue(t, e),
        Ze(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !h && e.mode & 1)
        )
          for (P = e, h = e.child; h !== null; ) {
            for (g = P = h; P !== null; ) {
              switch (((m = P), (x = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  nr(4, m, m.return);
                  break;
                case 1:
                  vn(m, m.return);
                  var S = m.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    ((r = m), (n = m.return));
                    try {
                      ((t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount());
                    } catch (E) {
                      G(r, n, E);
                    }
                  }
                  break;
                case 5:
                  vn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Su(g);
                    continue;
                  }
              }
              x !== null ? ((x.return = m), (P = x)) : Su(g);
            }
            h = h.sibling;
          }
        e: for (h = null, g = e; ; ) {
          if (g.tag === 5) {
            if (h === null) {
              h = g;
              try {
                ((l = g.stateNode),
                  c
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((s = g.stateNode),
                      (u = g.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (s.style.display = bu("display", i))));
              } catch (E) {
                G(e, e.return, E);
              }
            }
          } else if (g.tag === 6) {
            if (h === null)
              try {
                g.stateNode.nodeValue = c ? "" : g.memoizedProps;
              } catch (E) {
                G(e, e.return, E);
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
            (h === g && (h = null), (g = g.return));
          }
          (h === g && (h = null),
            (g.sibling.return = g.return),
            (g = g.sibling));
        }
      }
      break;
    case 19:
      (Ue(t, e), Ze(e), r & 4 && xu(e));
      break;
    case 21:
      break;
    default:
      (Ue(t, e), Ze(e));
  }
}
function Ze(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Cc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (sr(l, ""), (r.flags &= -33));
          var o = vu(e);
          fi(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            s = vu(e);
          di(e, s, i);
          break;
        default:
          throw Error(k(161));
      }
    } catch (u) {
      G(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function wp(e, t, n) {
  ((P = e), Pc(e));
}
function Pc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var l = P,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Br;
      if (!i) {
        var s = l.alternate,
          u = (s !== null && s.memoizedState !== null) || ce;
        s = Br;
        var c = ce;
        if (((Br = i), (ce = u) && !c))
          for (P = l; P !== null; )
            ((i = P),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? ku(l)
                : u !== null
                  ? ((u.return = i), (P = u))
                  : ku(l));
        for (; o !== null; ) ((P = o), Pc(o), (o = o.sibling));
        ((P = l), (Br = s), (ce = c));
      }
      wu(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (P = o)) : wu(e);
  }
}
function wu(e) {
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
              ce || Hl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ce)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ve(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && lu(t, o, r);
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
                lu(t, i, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
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
                  var h = c.memoizedState;
                  if (h !== null) {
                    var g = h.dehydrated;
                    g !== null && dr(g);
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
        ce || (t.flags & 512 && ci(t));
      } catch (m) {
        G(t, t.return, m);
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
function Su(e) {
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
function ku(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Hl(4, t);
          } catch (u) {
            G(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              G(t, l, u);
            }
          }
          var o = t.return;
          try {
            ci(t);
          } catch (u) {
            G(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ci(t);
          } catch (u) {
            G(t, i, u);
          }
      }
    } catch (u) {
      G(t, t.return, u);
    }
    if (t === e) {
      P = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      ((s.return = t.return), (P = s));
      break;
    }
    P = t.return;
  }
}
var Sp = Math.ceil,
  jl = pt.ReactCurrentDispatcher,
  rs = pt.ReactCurrentOwner,
  Me = pt.ReactCurrentBatchConfig,
  $ = 0,
  ne = null,
  q = null,
  oe = 0,
  Ne = 0,
  xn = $t(0),
  ee = 0,
  kr = null,
  bt = 0,
  Ql = 0,
  ls = 0,
  rr = null,
  ve = null,
  os = 0,
  zn = 1 / 0,
  rt = null,
  _l = !1,
  pi = null,
  Lt = null,
  Wr = !1,
  Ct = null,
  Pl = 0,
  lr = 0,
  mi = null,
  rl = -1,
  ll = 0;
function he() {
  return $ & 6 ? Z() : rl !== -1 ? rl : (rl = Z());
}
function zt(e) {
  return e.mode & 1
    ? $ & 2 && oe !== 0
      ? oe & -oe
      : lp.transition !== null
        ? (ll === 0 && (ll = fa()), ll)
        : ((e = F),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : xa(e.type))),
          e)
    : 1;
}
function We(e, t, n, r) {
  if (50 < lr) throw ((lr = 0), (mi = null), Error(k(185)));
  (Er(e, n, r),
    (!($ & 2) || e !== ne) &&
      (e === ne && (!($ & 2) && (Ql |= n), ee === 4 && kt(e, oe)),
      ke(e, r),
      n === 1 && $ === 0 && !(t.mode & 1) && ((zn = Z() + 500), Fl && At())));
}
function ke(e, t) {
  var n = e.callbackNode;
  rf(e, t);
  var r = dl(e, e === ne ? oe : 0);
  if (r === 0)
    (n !== null && Ls(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ls(n), t === 1))
      (e.tag === 0 ? rp(Nu.bind(null, e)) : Aa(Nu.bind(null, e)),
        bf(function () {
          !($ & 6) && At();
        }),
        (n = null));
    else {
      switch (pa(r)) {
        case 1:
          n = Li;
          break;
        case 4:
          n = ca;
          break;
        case 16:
          n = cl;
          break;
        case 536870912:
          n = da;
          break;
        default:
          n = cl;
      }
      n = Rc(n, Tc.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function Tc(e, t) {
  if (((rl = -1), (ll = 0), $ & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (Cn() && e.callbackNode !== n) return null;
  var r = dl(e, e === ne ? oe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Tl(e, r);
  else {
    t = r;
    var l = $;
    $ |= 2;
    var o = Lc();
    (ne !== e || oe !== t) && ((rt = null), (zn = Z() + 500), Gt(e, t));
    do
      try {
        Ep();
        break;
      } catch (s) {
        Dc(e, s);
      }
    while (!0);
    (Bi(),
      (jl.current = o),
      ($ = l),
      q !== null ? (t = 0) : ((ne = null), (oe = 0), (t = ee)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Vo(e)), l !== 0 && ((r = l), (t = hi(e, l)))), t === 1)
    )
      throw ((n = kr), Gt(e, 0), kt(e, r), ke(e, Z()), n);
    if (t === 6) kt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !kp(l) &&
          ((t = Tl(e, r)),
          t === 2 && ((o = Vo(e)), o !== 0 && ((r = o), (t = hi(e, o)))),
          t === 1))
      )
        throw ((n = kr), Gt(e, 0), kt(e, r), ke(e, Z()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Qt(e, ve, rt);
          break;
        case 3:
          if (
            (kt(e, r), (r & 130023424) === r && ((t = os + 500 - Z()), 10 < t))
          ) {
            if (dl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              (he(), (e.pingedLanes |= e.suspendedLanes & l));
              break;
            }
            e.timeoutHandle = Xo(Qt.bind(null, e, ve, rt), t);
            break;
          }
          Qt(e, ve, rt);
          break;
        case 4:
          if ((kt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Be(r);
            ((o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o));
          }
          if (
            ((r = l),
            (r = Z() - r),
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
                          : 1960 * Sp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Xo(Qt.bind(null, e, ve, rt), r);
            break;
          }
          Qt(e, ve, rt);
          break;
        case 5:
          Qt(e, ve, rt);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return (ke(e, Z()), e.callbackNode === n ? Tc.bind(null, e) : null);
}
function hi(e, t) {
  var n = rr;
  return (
    e.current.memoizedState.isDehydrated && (Gt(e, t).flags |= 256),
    (e = Tl(e, t)),
    e !== 2 && ((t = ve), (ve = n), t !== null && gi(t)),
    e
  );
}
function gi(e) {
  ve === null ? (ve = e) : ve.push.apply(ve, e);
}
function kp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Ke(o(), l)) return !1;
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
    t &= ~ls,
      t &= ~Ql,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - Be(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Nu(e) {
  if ($ & 6) throw Error(k(327));
  Cn();
  var t = dl(e, 0);
  if (!(t & 1)) return (ke(e, Z()), null);
  var n = Tl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Vo(e);
    r !== 0 && ((t = r), (n = hi(e, r)));
  }
  if (n === 1) throw ((n = kr), Gt(e, 0), kt(e, t), ke(e, Z()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Qt(e, ve, rt),
    ke(e, Z()),
    null
  );
}
function is(e, t) {
  var n = $;
  $ |= 1;
  try {
    return e(t);
  } finally {
    (($ = n), $ === 0 && ((zn = Z() + 500), Fl && At()));
  }
}
function en(e) {
  Ct !== null && Ct.tag === 0 && !($ & 6) && Cn();
  var t = $;
  $ |= 1;
  var n = Me.transition,
    r = F;
  try {
    if (((Me.transition = null), (F = 1), e)) return e();
  } finally {
    ((F = r), (Me.transition = n), ($ = t), !($ & 6) && At());
  }
}
function ss() {
  ((Ne = xn.current), H(xn));
}
function Gt(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), qf(n)), q !== null))
    for (n = q.return; n !== null; ) {
      var r = n;
      switch ((Vi(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && gl());
          break;
        case 3:
          (Dn(), H(we), H(de), Zi());
          break;
        case 5:
          Xi(r);
          break;
        case 4:
          Dn();
          break;
        case 13:
          H(W);
          break;
        case 19:
          H(W);
          break;
        case 10:
          Wi(r.type._context);
          break;
        case 22:
        case 23:
          ss();
      }
      n = n.return;
    }
  if (
    ((ne = e),
    (q = e = Ot(e.current, null)),
    (oe = Ne = t),
    (ee = 0),
    (kr = null),
    (ls = Ql = bt = 0),
    (ve = rr = null),
    Wt !== null)
  ) {
    for (t = 0; t < Wt.length; t++)
      if (((n = Wt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          ((o.next = l), (r.next = i));
        }
        n.pending = r;
      }
    Wt = null;
  }
  return e;
}
function Dc(e, t) {
  do {
    var n = q;
    try {
      if ((Bi(), (el.current = Cl), El)) {
        for (var r = K.memoizedState; r !== null; ) {
          var l = r.queue;
          (l !== null && (l.pending = null), (r = r.next));
        }
        El = !1;
      }
      if (
        ((qt = 0),
        (te = b = K = null),
        (tr = !1),
        (xr = 0),
        (rs.current = null),
        n === null || n.return === null)
      ) {
        ((ee = 1), (kr = t), (q = null));
        break;
      }
      e: {
        var o = e,
          i = n.return,
          s = n,
          u = t;
        if (
          ((t = oe),
          (s.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            h = s,
            g = h.tag;
          if (!(h.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var m = h.alternate;
            m
              ? ((h.updateQueue = m.updateQueue),
                (h.memoizedState = m.memoizedState),
                (h.lanes = m.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var x = cu(i);
          if (x !== null) {
            ((x.flags &= -257),
              du(x, i, s, o, t),
              x.mode & 1 && au(o, c, t),
              (t = x),
              (u = c));
            var S = t.updateQueue;
            if (S === null) {
              var E = new Set();
              (E.add(u), (t.updateQueue = E));
            } else S.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              (au(o, c, t), us());
              break e;
            }
            u = Error(k(426));
          }
        } else if (Q && s.mode & 1) {
          var I = cu(i);
          if (I !== null) {
            (!(I.flags & 65536) && (I.flags |= 256),
              du(I, i, s, o, t),
              Hi(Ln(u, s)));
            break e;
          }
        }
        ((o = u = Ln(u, s)),
          ee !== 4 && (ee = 2),
          rr === null ? (rr = [o]) : rr.push(o),
          (o = i));
        do {
          switch (o.tag) {
            case 3:
              ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
              var p = pc(o, u, t);
              ru(o, p);
              break e;
            case 1:
              s = u;
              var f = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (Lt === null || !Lt.has(d))))
              ) {
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var y = mc(o, s, t);
                ru(o, y);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Oc(n);
    } catch (N) {
      ((t = N), q === n && n !== null && (q = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Lc() {
  var e = jl.current;
  return ((jl.current = Cl), e === null ? Cl : e);
}
function us() {
  ((ee === 0 || ee === 3 || ee === 2) && (ee = 4),
    ne === null || (!(bt & 268435455) && !(Ql & 268435455)) || kt(ne, oe));
}
function Tl(e, t) {
  var n = $;
  $ |= 2;
  var r = Lc();
  (ne !== e || oe !== t) && ((rt = null), Gt(e, t));
  do
    try {
      Np();
      break;
    } catch (l) {
      Dc(e, l);
    }
  while (!0);
  if ((Bi(), ($ = n), (jl.current = r), q !== null)) throw Error(k(261));
  return ((ne = null), (oe = 0), ee);
}
function Np() {
  for (; q !== null; ) zc(q);
}
function Ep() {
  for (; q !== null && !Gd(); ) zc(q);
}
function zc(e) {
  var t = Ic(e.alternate, e, Ne);
  ((e.memoizedProps = e.pendingProps),
    t === null ? Oc(e) : (q = t),
    (rs.current = null));
}
function Oc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = yp(n, t)), n !== null)) {
        ((n.flags &= 32767), (q = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((ee = 6), (q = null));
        return;
      }
    } else if (((n = gp(n, t, Ne)), n !== null)) {
      q = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      q = t;
      return;
    }
    q = t = e;
  } while (t !== null);
  ee === 0 && (ee = 5);
}
function Qt(e, t, n) {
  var r = F,
    l = Me.transition;
  try {
    ((Me.transition = null), (F = 1), Cp(e, t, n, r));
  } finally {
    ((Me.transition = l), (F = r));
  }
  return null;
}
function Cp(e, t, n, r) {
  do Cn();
  while (Ct !== null);
  if ($ & 6) throw Error(k(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var o = n.lanes | n.childLanes;
  if (
    (lf(e, o),
    e === ne && ((q = ne = null), (oe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Wr ||
      ((Wr = !0),
      Rc(cl, function () {
        return (Cn(), null);
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    ((o = Me.transition), (Me.transition = null));
    var i = F;
    F = 1;
    var s = $;
    (($ |= 4),
      (rs.current = null),
      xp(e, n),
      _c(n, e),
      Wf(Yo),
      (fl = !!Ko),
      (Yo = Ko = null),
      (e.current = n),
      wp(n),
      Xd(),
      ($ = s),
      (F = i),
      (Me.transition = o));
  } else e.current = n;
  if (
    (Wr && ((Wr = !1), (Ct = e), (Pl = l)),
    (o = e.pendingLanes),
    o === 0 && (Lt = null),
    qd(n.stateNode),
    ke(e, Z()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
  if (_l) throw ((_l = !1), (e = pi), (pi = null), e);
  return (
    Pl & 1 && e.tag !== 0 && Cn(),
    (o = e.pendingLanes),
    o & 1 ? (e === mi ? lr++ : ((lr = 0), (mi = e))) : (lr = 0),
    At(),
    null
  );
}
function Cn() {
  if (Ct !== null) {
    var e = pa(Pl),
      t = Me.transition,
      n = F;
    try {
      if (((Me.transition = null), (F = 16 > e ? 16 : e), Ct === null))
        var r = !1;
      else {
        if (((e = Ct), (Ct = null), (Pl = 0), $ & 6)) throw Error(k(331));
        var l = $;
        for ($ |= 4, P = e.current; P !== null; ) {
          var o = P,
            i = o.child;
          if (P.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var c = s[u];
                for (P = c; P !== null; ) {
                  var h = P;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      nr(8, h, o);
                  }
                  var g = h.child;
                  if (g !== null) ((g.return = h), (P = g));
                  else
                    for (; P !== null; ) {
                      h = P;
                      var m = h.sibling,
                        x = h.return;
                      if ((Ec(h), h === c)) {
                        P = null;
                        break;
                      }
                      if (m !== null) {
                        ((m.return = x), (P = m));
                        break;
                      }
                      P = x;
                    }
                }
              }
              var S = o.alternate;
              if (S !== null) {
                var E = S.child;
                if (E !== null) {
                  S.child = null;
                  do {
                    var I = E.sibling;
                    ((E.sibling = null), (E = I));
                  } while (E !== null);
                }
              }
              P = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) ((i.return = o), (P = i));
          else
            e: for (; P !== null; ) {
              if (((o = P), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    nr(9, o, o.return);
                }
              var p = o.sibling;
              if (p !== null) {
                ((p.return = o.return), (P = p));
                break e;
              }
              P = o.return;
            }
        }
        var f = e.current;
        for (P = f; P !== null; ) {
          i = P;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) ((d.return = i), (P = d));
          else
            e: for (i = f; P !== null; ) {
              if (((s = P), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hl(9, s);
                  }
                } catch (N) {
                  G(s, s.return, N);
                }
              if (s === i) {
                P = null;
                break e;
              }
              var y = s.sibling;
              if (y !== null) {
                ((y.return = s.return), (P = y));
                break e;
              }
              P = s.return;
            }
        }
        if (
          (($ = l), At(), be && typeof be.onPostCommitFiberRoot == "function")
        )
          try {
            be.onPostCommitFiberRoot(Ml, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((F = n), (Me.transition = t));
    }
  }
  return !1;
}
function Eu(e, t, n) {
  ((t = Ln(n, t)),
    (t = pc(e, t, 1)),
    (e = Dt(e, t, 1)),
    (t = he()),
    e !== null && (Er(e, 1, t), ke(e, t)));
}
function G(e, t, n) {
  if (e.tag === 3) Eu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Eu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Lt === null || !Lt.has(r)))
        ) {
          ((e = Ln(n, e)),
            (e = mc(t, e, 1)),
            (t = Dt(t, e, 1)),
            (e = he()),
            t !== null && (Er(t, 1, e), ke(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function jp(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = he()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ne === e &&
      (oe & n) === n &&
      (ee === 4 || (ee === 3 && (oe & 130023424) === oe && 500 > Z() - os)
        ? Gt(e, 0)
        : (ls |= n)),
    ke(e, t));
}
function Mc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ir), (Ir <<= 1), !(Ir & 130023424) && (Ir = 4194304))
      : (t = 1));
  var n = he();
  ((e = ct(e, t)), e !== null && (Er(e, t, n), ke(e, n)));
}
function _p(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Mc(e, n));
}
function Pp(e, t) {
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
      throw Error(k(314));
  }
  (r !== null && r.delete(t), Mc(e, n));
}
var Ic;
Ic = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || we.current) xe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((xe = !1), hp(e, t, n));
      xe = !!(e.flags & 131072);
    }
  else ((xe = !1), Q && t.flags & 1048576 && Fa(t, xl, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (nl(e, t), (e = t.pendingProps));
      var l = _n(t, de.current);
      (En(t, n), (l = qi(null, t, r, e, l, n)));
      var o = bi();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Se(r) ? ((o = !0), yl(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Yi(t),
            (l.updater = Vl),
            (t.stateNode = l),
            (l._reactInternals = t),
            ni(t, r, e, n),
            (t = oi(null, t, r, !0, o, n)))
          : ((t.tag = 0), Q && o && Ui(t), pe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (nl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Dp(r)),
          (e = Ve(r, e)),
          l)
        ) {
          case 0:
            t = li(null, t, r, e, n);
            break e;
          case 1:
            t = mu(null, t, r, e, n);
            break e;
          case 11:
            t = fu(null, t, r, e, n);
            break e;
          case 14:
            t = pu(null, t, r, Ve(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ve(r, l)),
        li(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ve(r, l)),
        mu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((vc(t), e === null)) throw Error(k(387));
        ((r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Wa(e, t),
          kl(t, r, null, n));
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
            ((l = Ln(Error(k(423)), t)), (t = hu(e, t, r, n, l)));
            break e;
          } else if (r !== l) {
            ((l = Ln(Error(k(424)), t)), (t = hu(e, t, r, n, l)));
            break e;
          } else
            for (
              Ee = Tt(t.stateNode.containerInfo.firstChild),
                Ce = t,
                Q = !0,
                Qe = null,
                n = Qa(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((Pn(), r === l)) {
            t = dt(e, t, n);
            break e;
          }
          pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ka(t),
        e === null && bo(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Go(r, l) ? (i = null) : o !== null && Go(r, o) && (t.flags |= 32),
        yc(e, t),
        pe(e, t, i, n),
        t.child
      );
    case 6:
      return (e === null && bo(t), null);
    case 13:
      return xc(e, t, n);
    case 4:
      return (
        Gi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Tn(t, null, r, n)) : pe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ve(r, l)),
        fu(e, t, r, l, n)
      );
    case 7:
      return (pe(e, t, t.pendingProps, n), t.child);
    case 8:
      return (pe(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (pe(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          U(wl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Ke(o.value, i)) {
            if (o.children === l.children && !we.current) {
              t = dt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                i = o.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      ((u = st(-1, n & -n)), (u.tag = 2));
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var h = c.pending;
                        (h === null
                          ? (u.next = u)
                          : ((u.next = h.next), (h.next = u)),
                          (c.pending = u));
                      }
                    }
                    ((o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      ei(o.return, n, t),
                      (s.lanes |= n));
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(k(341));
                ((i.lanes |= n),
                  (s = i.alternate),
                  s !== null && (s.lanes |= n),
                  ei(i, n, t),
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
        (pe(e, t, l.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        En(t, n),
        (l = Ie(l)),
        (r = r(l)),
        (t.flags |= 1),
        pe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Ve(r, t.pendingProps)),
        (l = Ve(r.type, l)),
        pu(e, t, r, l, n)
      );
    case 15:
      return hc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ve(r, l)),
        nl(e, t),
        (t.tag = 1),
        Se(r) ? ((e = !0), yl(t)) : (e = !1),
        En(t, n),
        fc(t, r, l),
        ni(t, r, l, n),
        oi(null, t, r, !0, e, n)
      );
    case 19:
      return wc(e, t, n);
    case 22:
      return gc(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function Rc(e, t) {
  return aa(e, t);
}
function Tp(e, t, n, r) {
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
function Oe(e, t, n, r) {
  return new Tp(e, t, n, r);
}
function as(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function Dp(e) {
  if (typeof e == "function") return as(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Pi)) return 11;
    if (e === Ti) return 14;
  }
  return 2;
}
function Ot(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Oe(e.tag, t, e.key, e.mode)),
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
function ol(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) as(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case an:
        return Xt(n.children, l, o, t);
      case _i:
        ((i = 8), (l |= 8));
        break;
      case jo:
        return (
          (e = Oe(12, n, t, l | 2)),
          (e.elementType = jo),
          (e.lanes = o),
          e
        );
      case _o:
        return ((e = Oe(13, n, t, l)), (e.elementType = _o), (e.lanes = o), e);
      case Po:
        return ((e = Oe(19, n, t, l)), (e.elementType = Po), (e.lanes = o), e);
      case Ku:
        return Bl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Bu:
              i = 10;
              break e;
            case Wu:
              i = 9;
              break e;
            case Pi:
              i = 11;
              break e;
            case Ti:
              i = 14;
              break e;
            case xt:
              ((i = 16), (r = null));
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Oe(i, n, t, l)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = o),
    t
  );
}
function Xt(e, t, n, r) {
  return ((e = Oe(7, e, r, t)), (e.lanes = n), e);
}
function Bl(e, t, n, r) {
  return (
    (e = Oe(22, e, r, t)),
    (e.elementType = Ku),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ko(e, t, n) {
  return ((e = Oe(6, e, null, t)), (e.lanes = n), e);
}
function No(e, t, n) {
  return (
    (t = Oe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Lp(e, t, n, r, l) {
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
    (this.eventTimes = no(0)),
    (this.expirationTimes = no(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = no(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null));
}
function cs(e, t, n, r, l, o, i, s, u) {
  return (
    (e = new Lp(e, t, n, s, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Oe(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Yi(o),
    e
  );
}
function zp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: un,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function $c(e) {
  if (!e) return It;
  e = e._reactInternals;
  e: {
    if (nn(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Se(t.type)) {
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
    if (Se(n)) return $a(e, n, t);
  }
  return t;
}
function Ac(e, t, n, r, l, o, i, s, u) {
  return (
    (e = cs(n, r, !0, e, l, o, i, s, u)),
    (e.context = $c(null)),
    (n = e.current),
    (r = he()),
    (l = zt(n)),
    (o = st(r, l)),
    (o.callback = t ?? null),
    Dt(n, o, l),
    (e.current.lanes = l),
    Er(e, l, r),
    ke(e, r),
    e
  );
}
function Wl(e, t, n, r) {
  var l = t.current,
    o = he(),
    i = zt(l);
  return (
    (n = $c(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = st(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Dt(l, t, i)),
    e !== null && (We(e, l, i, o), br(e, l, i)),
    i
  );
}
function Dl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Cu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ds(e, t) {
  (Cu(e, t), (e = e.alternate) && Cu(e, t));
}
function Op() {
  return null;
}
var Fc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function fs(e) {
  this._internalRoot = e;
}
Kl.prototype.render = fs.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Wl(e, t, null, null);
};
Kl.prototype.unmount = fs.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (en(function () {
      Wl(null, e, null, null);
    }),
      (t[at] = null));
  }
};
function Kl(e) {
  this._internalRoot = e;
}
Kl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ga();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < St.length && t !== 0 && t < St[n].priority; n++);
    (St.splice(n, 0, e), n === 0 && va(e));
  }
};
function ps(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Yl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ju() {}
function Mp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = Dl(i);
        o.call(c);
      };
    }
    var i = Ac(t, r, e, 0, null, !1, !1, "", ju);
    return (
      (e._reactRootContainer = i),
      (e[at] = i.current),
      mr(e.nodeType === 8 ? e.parentNode : e),
      en(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var c = Dl(u);
      s.call(c);
    };
  }
  var u = cs(e, 0, !1, null, null, !1, !1, "", ju);
  return (
    (e._reactRootContainer = u),
    (e[at] = u.current),
    mr(e.nodeType === 8 ? e.parentNode : e),
    en(function () {
      Wl(t, u, n, r);
    }),
    u
  );
}
function Gl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var s = l;
      l = function () {
        var u = Dl(i);
        s.call(u);
      };
    }
    Wl(t, i, e, l);
  } else i = Mp(n, t, e, l, r);
  return Dl(i);
}
ma = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Gn(t.pendingLanes);
        n !== 0 &&
          (zi(t, n | 1), ke(t, Z()), !($ & 6) && ((zn = Z() + 500), At()));
      }
      break;
    case 13:
      (en(function () {
        var r = ct(e, 1);
        if (r !== null) {
          var l = he();
          We(r, e, 1, l);
        }
      }),
        ds(e, 1));
  }
};
Oi = function (e) {
  if (e.tag === 13) {
    var t = ct(e, 134217728);
    if (t !== null) {
      var n = he();
      We(t, e, 134217728, n);
    }
    ds(e, 134217728);
  }
};
ha = function (e) {
  if (e.tag === 13) {
    var t = zt(e),
      n = ct(e, t);
    if (n !== null) {
      var r = he();
      We(n, e, t, r);
    }
    ds(e, t);
  }
};
ga = function () {
  return F;
};
ya = function (e, t) {
  var n = F;
  try {
    return ((F = e), t());
  } finally {
    F = n;
  }
};
Ao = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Lo(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var l = Al(r);
            if (!l) throw Error(k(90));
            (Gu(r), Lo(r, l));
          }
        }
      }
      break;
    case "textarea":
      Zu(e, n);
      break;
    case "select":
      ((t = n.value), t != null && wn(e, !!n.multiple, t, !1));
  }
};
ra = is;
la = en;
var Ip = { usingClientEntryPoint: !1, Events: [jr, pn, Al, ta, na, is] },
  Wn = {
    findFiberByHostInstance: Bt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Rp = {
    bundleType: Wn.bundleType,
    version: Wn.version,
    rendererPackageName: Wn.rendererPackageName,
    rendererConfig: Wn.rendererConfig,
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
      return ((e = sa(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Wn.findFiberByHostInstance || Op,
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
      ((Ml = Kr.inject(Rp)), (be = Kr));
    } catch {}
}
_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ip;
_e.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ps(t)) throw Error(k(200));
  return zp(e, t, null, n);
};
_e.createRoot = function (e, t) {
  if (!ps(e)) throw Error(k(299));
  var n = !1,
    r = "",
    l = Fc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = cs(e, 1, !1, null, null, n, !1, r, l)),
    (e[at] = t.current),
    mr(e.nodeType === 8 ? e.parentNode : e),
    new fs(t)
  );
};
_e.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return ((e = sa(t)), (e = e === null ? null : e.stateNode), e);
};
_e.flushSync = function (e) {
  return en(e);
};
_e.hydrate = function (e, t, n) {
  if (!Yl(t)) throw Error(k(200));
  return Gl(null, e, t, !0, n);
};
_e.hydrateRoot = function (e, t, n) {
  if (!ps(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = Fc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Ac(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[at] = t.current),
    mr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l));
  return new Kl(t);
};
_e.render = function (e, t, n) {
  if (!Yl(t)) throw Error(k(200));
  return Gl(null, e, t, !1, n);
};
_e.unmountComponentAtNode = function (e) {
  if (!Yl(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (en(function () {
        Gl(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[at] = null));
        });
      }),
      !0)
    : !1;
};
_e.unstable_batchedUpdates = is;
_e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Yl(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Gl(e, t, n, !1, r);
};
_e.version = "18.3.1-next-f1338f8080-20240426";
function Uc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uc);
    } catch (e) {
      console.error(e);
    }
}
(Uc(), (Uu.exports = _e));
var $p = Uu.exports,
  Vc,
  _u = $p;
((Vc = _u.createRoot), _u.hydrateRoot);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Ap = {
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
 */ const Fp = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  fe = (e, t) => {
    const n = C.forwardRef(
      (
        {
          color: r = "currentColor",
          size: l = 24,
          strokeWidth: o = 2,
          absoluteStrokeWidth: i,
          className: s = "",
          children: u,
          ...c
        },
        h,
      ) =>
        C.createElement(
          "svg",
          {
            ref: h,
            ...Ap,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: i ? (Number(o) * 24) / Number(l) : o,
            className: ["lucide", `lucide-${Fp(e)}`, s].join(" "),
            ...c,
          },
          [
            ...t.map(([g, m]) => C.createElement(g, m)),
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
 */ const yi = fe("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xl = fe("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ms = fe("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pr = fe("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hc = fe("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Up = fe("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vp = fe("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hp = fe("FileDown", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M12 18v-6", key: "17g6i2" }],
  ["path", { d: "m9 15 3 3 3-3", key: "1npd3o" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qc = fe("FileX", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m14.5 12.5-5 5", key: "b62r18" }],
  ["path", { d: "m9.5 12.5 5 5", key: "1rk7el" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qp = fe("Globe", [
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
 */ const Bp = fe("Layers", [
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
 */ const Wp = fe("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kp = fe("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yp = fe("Table", [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
  ],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gp = fe("XCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xp = fe("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
let Zp = { data: "" },
  Jp = (e) =>
    typeof window == "object"
      ? (
          (e ? e.querySelector("#_goober") : window._goober) ||
          Object.assign(
            (e || document.head).appendChild(document.createElement("style")),
            { innerHTML: " ", id: "_goober" },
          )
        ).firstChild
      : e || Zp,
  qp = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  bp = /\/\*[^]*?\*\/|  +/g,
  Pu = /\n+/g,
  Nt = (e, t) => {
    let n = "",
      r = "",
      l = "";
    for (let o in e) {
      let i = e[o];
      o[0] == "@"
        ? o[1] == "i"
          ? (n = o + " " + i + ";")
          : (r +=
              o[1] == "f"
                ? Nt(i, o)
                : o + "{" + Nt(i, o[1] == "k" ? "" : t) + "}")
        : typeof i == "object"
          ? (r += Nt(
              i,
              t
                ? t.replace(/([^,])+/g, (s) =>
                    o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (u) =>
                      /&/.test(u) ? u.replace(/&/g, s) : s ? s + " " + u : u,
                    ),
                  )
                : o,
            ))
          : i != null &&
            ((o = /^--/.test(o) ? o : o.replace(/[A-Z]/g, "-$&").toLowerCase()),
            (l += Nt.p ? Nt.p(o, i) : o + ":" + i + ";"));
    }
    return n + (t && l ? t + "{" + l + "}" : l) + r;
  },
  nt = {},
  Bc = (e) => {
    if (typeof e == "object") {
      let t = "";
      for (let n in e) t += n + Bc(e[n]);
      return t;
    }
    return e;
  },
  em = (e, t, n, r, l) => {
    let o = Bc(e),
      i =
        nt[o] ||
        (nt[o] = ((u) => {
          let c = 0,
            h = 11;
          for (; c < u.length; ) h = (101 * h + u.charCodeAt(c++)) >>> 0;
          return "go" + h;
        })(o));
    if (!nt[i]) {
      let u =
        o !== e
          ? e
          : ((c) => {
              let h,
                g,
                m = [{}];
              for (; (h = qp.exec(c.replace(bp, ""))); )
                h[4]
                  ? m.shift()
                  : h[3]
                    ? ((g = h[3].replace(Pu, " ").trim()),
                      m.unshift((m[0][g] = m[0][g] || {})))
                    : (m[0][h[1]] = h[2].replace(Pu, " ").trim());
              return m[0];
            })(e);
      nt[i] = Nt(l ? { ["@keyframes " + i]: u } : u, n ? "" : "." + i);
    }
    let s = n && nt.g ? nt.g : null;
    return (
      n && (nt.g = nt[i]),
      ((u, c, h, g) => {
        g
          ? (c.data = c.data.replace(g, u))
          : c.data.indexOf(u) === -1 && (c.data = h ? u + c.data : c.data + u);
      })(nt[i], t, r, s),
      i
    );
  },
  tm = (e, t, n) =>
    e.reduce((r, l, o) => {
      let i = t[o];
      if (i && i.call) {
        let s = i(n),
          u = (s && s.props && s.props.className) || (/^go/.test(s) && s);
        i = u
          ? "." + u
          : s && typeof s == "object"
            ? s.props
              ? ""
              : Nt(s, "")
            : s === !1
              ? ""
              : s;
      }
      return r + l + (i ?? "");
    }, "");
function Zl(e) {
  let t = this || {},
    n = e.call ? e(t.p) : e;
  return em(
    n.unshift
      ? n.raw
        ? tm(n, [].slice.call(arguments, 1), t.p)
        : n.reduce((r, l) => Object.assign(r, l && l.call ? l(t.p) : l), {})
      : n,
    Jp(t.target),
    t.g,
    t.o,
    t.k,
  );
}
let Wc, vi, xi;
Zl.bind({ g: 1 });
let ft = Zl.bind({ k: 1 });
function nm(e, t, n, r) {
  ((Nt.p = t), (Wc = e), (vi = n), (xi = r));
}
function Ft(e, t) {
  let n = this || {};
  return function () {
    let r = arguments;
    function l(o, i) {
      let s = Object.assign({}, o),
        u = s.className || l.className;
      ((n.p = Object.assign({ theme: vi && vi() }, s)),
        (n.o = / *go\d+/.test(u)),
        (s.className = Zl.apply(n, r) + (u ? " " + u : "")));
      let c = e;
      return (
        e[0] && ((c = s.as || e), delete s.as),
        xi && c[0] && xi(s),
        Wc(c, s)
      );
    }
    return l;
  };
}
var rm = (e) => typeof e == "function",
  Ll = (e, t) => (rm(e) ? e(t) : e),
  lm = (() => {
    let e = 0;
    return () => (++e).toString();
  })(),
  Kc = (() => {
    let e;
    return () => {
      if (e === void 0 && typeof window < "u") {
        let t = matchMedia("(prefers-reduced-motion: reduce)");
        e = !t || t.matches;
      }
      return e;
    };
  })(),
  om = 20,
  Yc = (e, t) => {
    switch (t.type) {
      case 0:
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, om) };
      case 1:
        return {
          ...e,
          toasts: e.toasts.map((o) =>
            o.id === t.toast.id ? { ...o, ...t.toast } : o,
          ),
        };
      case 2:
        let { toast: n } = t;
        return Yc(e, {
          type: e.toasts.find((o) => o.id === n.id) ? 1 : 0,
          toast: n,
        });
      case 3:
        let { toastId: r } = t;
        return {
          ...e,
          toasts: e.toasts.map((o) =>
            o.id === r || r === void 0
              ? { ...o, dismissed: !0, visible: !1 }
              : o,
          ),
        };
      case 4:
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((o) => o.id !== t.toastId) };
      case 5:
        return { ...e, pausedAt: t.time };
      case 6:
        let l = t.time - (e.pausedAt || 0);
        return {
          ...e,
          pausedAt: void 0,
          toasts: e.toasts.map((o) => ({
            ...o,
            pauseDuration: o.pauseDuration + l,
          })),
        };
    }
  },
  il = [],
  Yt = { toasts: [], pausedAt: void 0 },
  rn = (e) => {
    ((Yt = Yc(Yt, e)),
      il.forEach((t) => {
        t(Yt);
      }));
  },
  im = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  sm = (e = {}) => {
    let [t, n] = C.useState(Yt),
      r = C.useRef(Yt);
    C.useEffect(
      () => (
        r.current !== Yt && n(Yt),
        il.push(n),
        () => {
          let o = il.indexOf(n);
          o > -1 && il.splice(o, 1);
        }
      ),
      [],
    );
    let l = t.toasts.map((o) => {
      var i, s, u;
      return {
        ...e,
        ...e[o.type],
        ...o,
        removeDelay:
          o.removeDelay ||
          ((i = e[o.type]) == null ? void 0 : i.removeDelay) ||
          (e == null ? void 0 : e.removeDelay),
        duration:
          o.duration ||
          ((s = e[o.type]) == null ? void 0 : s.duration) ||
          (e == null ? void 0 : e.duration) ||
          im[o.type],
        style: {
          ...e.style,
          ...((u = e[o.type]) == null ? void 0 : u.style),
          ...o.style,
        },
      };
    });
    return { ...t, toasts: l };
  },
  um = (e, t = "blank", n) => ({
    createdAt: Date.now(),
    visible: !0,
    dismissed: !1,
    type: t,
    ariaProps: { role: "status", "aria-live": "polite" },
    message: e,
    pauseDuration: 0,
    ...n,
    id: (n == null ? void 0 : n.id) || lm(),
  }),
  Tr = (e) => (t, n) => {
    let r = um(t, e, n);
    return (rn({ type: 2, toast: r }), r.id);
  },
  me = (e, t) => Tr("blank")(e, t);
me.error = Tr("error");
me.success = Tr("success");
me.loading = Tr("loading");
me.custom = Tr("custom");
me.dismiss = (e) => {
  rn({ type: 3, toastId: e });
};
me.remove = (e) => rn({ type: 4, toastId: e });
me.promise = (e, t, n) => {
  let r = me.loading(t.loading, { ...n, ...(n == null ? void 0 : n.loading) });
  return (
    typeof e == "function" && (e = e()),
    e
      .then((l) => {
        let o = t.success ? Ll(t.success, l) : void 0;
        return (
          o
            ? me.success(o, {
                id: r,
                ...n,
                ...(n == null ? void 0 : n.success),
              })
            : me.dismiss(r),
          l
        );
      })
      .catch((l) => {
        let o = t.error ? Ll(t.error, l) : void 0;
        o
          ? me.error(o, { id: r, ...n, ...(n == null ? void 0 : n.error) })
          : me.dismiss(r);
      }),
    e
  );
};
var am = (e, t) => {
    rn({ type: 1, toast: { id: e, height: t } });
  },
  cm = () => {
    rn({ type: 5, time: Date.now() });
  },
  or = new Map(),
  dm = 1e3,
  fm = (e, t = dm) => {
    if (or.has(e)) return;
    let n = setTimeout(() => {
      (or.delete(e), rn({ type: 4, toastId: e }));
    }, t);
    or.set(e, n);
  },
  pm = (e) => {
    let { toasts: t, pausedAt: n } = sm(e);
    C.useEffect(() => {
      if (n) return;
      let o = Date.now(),
        i = t.map((s) => {
          if (s.duration === 1 / 0) return;
          let u = (s.duration || 0) + s.pauseDuration - (o - s.createdAt);
          if (u < 0) {
            s.visible && me.dismiss(s.id);
            return;
          }
          return setTimeout(() => me.dismiss(s.id), u);
        });
      return () => {
        i.forEach((s) => s && clearTimeout(s));
      };
    }, [t, n]);
    let r = C.useCallback(() => {
        n && rn({ type: 6, time: Date.now() });
      }, [n]),
      l = C.useCallback(
        (o, i) => {
          let {
              reverseOrder: s = !1,
              gutter: u = 8,
              defaultPosition: c,
            } = i || {},
            h = t.filter(
              (x) => (x.position || c) === (o.position || c) && x.height,
            ),
            g = h.findIndex((x) => x.id === o.id),
            m = h.filter((x, S) => S < g && x.visible).length;
          return h
            .filter((x) => x.visible)
            .slice(...(s ? [m + 1] : [0, m]))
            .reduce((x, S) => x + (S.height || 0) + u, 0);
        },
        [t],
      );
    return (
      C.useEffect(() => {
        t.forEach((o) => {
          if (o.dismissed) fm(o.id, o.removeDelay);
          else {
            let i = or.get(o.id);
            i && (clearTimeout(i), or.delete(o.id));
          }
        });
      }, [t]),
      {
        toasts: t,
        handlers: {
          updateHeight: am,
          startPause: cm,
          endPause: r,
          calculateOffset: l,
        },
      }
    );
  },
  mm = ft`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  hm = ft`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  gm = ft`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  ym = Ft("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${mm} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${hm} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${gm} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  vm = ft`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  xm = Ft("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${vm} 1s linear infinite;
`,
  wm = ft`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  Sm = ft`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
  km = Ft("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${wm} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Sm} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
  Nm = Ft("div")`
  position: absolute;
`,
  Em = Ft("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  Cm = ft`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  jm = Ft("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Cm} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  _m = ({ toast: e }) => {
    let { icon: t, type: n, iconTheme: r } = e;
    return t !== void 0
      ? typeof t == "string"
        ? C.createElement(jm, null, t)
        : t
      : n === "blank"
        ? null
        : C.createElement(
            Em,
            null,
            C.createElement(xm, { ...r }),
            n !== "loading" &&
              C.createElement(
                Nm,
                null,
                n === "error"
                  ? C.createElement(ym, { ...r })
                  : C.createElement(km, { ...r }),
              ),
          );
  },
  Pm = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  Tm = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
  Dm = "0%{opacity:0;} 100%{opacity:1;}",
  Lm = "0%{opacity:1;} 100%{opacity:0;}",
  zm = Ft("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
  Om = Ft("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  Mm = (e, t) => {
    let n = e.includes("top") ? 1 : -1,
      [r, l] = Kc() ? [Dm, Lm] : [Pm(n), Tm(n)];
    return {
      animation: t
        ? `${ft(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${ft(l)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  },
  Im = C.memo(({ toast: e, position: t, style: n, children: r }) => {
    let l = e.height
        ? Mm(e.position || t || "top-center", e.visible)
        : { opacity: 0 },
      o = C.createElement(_m, { toast: e }),
      i = C.createElement(Om, { ...e.ariaProps }, Ll(e.message, e));
    return C.createElement(
      zm,
      { className: e.className, style: { ...l, ...n, ...e.style } },
      typeof r == "function"
        ? r({ icon: o, message: i })
        : C.createElement(C.Fragment, null, o, i),
    );
  });
nm(C.createElement);
var Rm = ({
    id: e,
    className: t,
    style: n,
    onHeightUpdate: r,
    children: l,
  }) => {
    let o = C.useCallback(
      (i) => {
        if (i) {
          let s = () => {
            let u = i.getBoundingClientRect().height;
            r(e, u);
          };
          (s(),
            new MutationObserver(s).observe(i, {
              subtree: !0,
              childList: !0,
              characterData: !0,
            }));
        }
      },
      [e, r],
    );
    return C.createElement("div", { ref: o, className: t, style: n }, l);
  },
  $m = (e, t) => {
    let n = e.includes("top"),
      r = n ? { top: 0 } : { bottom: 0 },
      l = e.includes("center")
        ? { justifyContent: "center" }
        : e.includes("right")
          ? { justifyContent: "flex-end" }
          : {};
    return {
      left: 0,
      right: 0,
      display: "flex",
      position: "absolute",
      transition: Kc() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
      transform: `translateY(${t * (n ? 1 : -1)}px)`,
      ...r,
      ...l,
    };
  },
  Am = Zl`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  Yr = 16,
  Fm = ({
    reverseOrder: e,
    position: t = "top-center",
    toastOptions: n,
    gutter: r,
    children: l,
    containerStyle: o,
    containerClassName: i,
  }) => {
    let { toasts: s, handlers: u } = pm(n);
    return C.createElement(
      "div",
      {
        id: "_rht_toaster",
        style: {
          position: "fixed",
          zIndex: 9999,
          top: Yr,
          left: Yr,
          right: Yr,
          bottom: Yr,
          pointerEvents: "none",
          ...o,
        },
        className: i,
        onMouseEnter: u.startPause,
        onMouseLeave: u.endPause,
      },
      s.map((c) => {
        let h = c.position || t,
          g = u.calculateOffset(c, {
            reverseOrder: e,
            gutter: r,
            defaultPosition: t,
          }),
          m = $m(h, g);
        return C.createElement(
          Rm,
          {
            id: c.id,
            key: c.id,
            onHeightUpdate: u.updateHeight,
            className: c.visible ? Am : "",
            style: m,
          },
          c.type === "custom"
            ? Ll(c.message, c)
            : l
              ? l(c)
              : C.createElement(Im, { toast: c, position: h }),
        );
      }),
    );
  };
const Um = () => {
    if (!window.API_DOMAIN)
      throw new Error("API_DOMAIN not configured. Please check config.txt");
    return window.API_DOMAIN;
  },
  Eo = {
    request: "color: #2563eb; font-weight: bold;",
    response: "color: #059669; font-weight: bold;",
    error: "color: #dc2626; font-weight: bold;",
  },
  sn = async (e, t, n, r) => {
    const l = window.API_DOMAIN || "",
      o = e.startsWith("http") ? e : `${l}${e}`;
    (console.group(`🌐 API Call: ${t} ${e}`),
      console.log("%cRequest:", Eo.request, {
        url: o,
        method: t,
        headers: { "Content-Type": "application/json" },
        body: n,
      }));
    try {
      const i = await fetch(o, {
          method: t,
          headers: r || { "Content-Type": "application/json" },
          body: n ? JSON.stringify(n) : void 0,
        }),
        s = await i.json();
      return (
        console.log("%cResponse:", Eo.response, { status: i.status, data: s }),
        console.groupEnd(),
        s
      );
    } catch (i) {
      throw (console.log("%cError:", Eo.error, i), console.groupEnd(), i);
    }
  },
  Gc = (e) => {
    const t = e.find((n) => n.name === "管制結存");
    return (t == null ? void 0 : t.state) === !0;
  },
  Vm = (e) => {
    if (!Gc(e.Permissions)) return !1;
    const t = { ...e, loginTime: new Date().toISOString() };
    return (sessionStorage.setItem("user_session", JSON.stringify(t)), !0);
  },
  Xc = () => {
    const e = sessionStorage.getItem("user_session");
    if (!e) return null;
    try {
      const t = JSON.parse(e);
      return !t.GUID || !t.ID || !t.Name || !Gc(t.Permissions)
        ? (zl(), null)
        : t;
    } catch {
      return (zl(), null);
    }
  },
  zl = () => {
    sessionStorage.removeItem("user_session");
  },
  Hm = () => {
    const e = Xc();
    if (!e) return !1;
    const t = new Date(e.loginTime).getTime();
    return (new Date().getTime() - t) / (1e3 * 60 * 60) > 24 ? (zl(), !1) : !0;
  },
  Qm = {
    "zh-TW": {
      "system.title": "管制結存系統",
      "system.department": "軟體部",
      "system.copyright": "鴻森智能科技",
      "inventory.title": "管制結存",
      "station.title": "調劑台",
      "station.select": "(請至少選擇一調劑台)",
      "time.type": "時間類型",
      "time.operation": "操作時間",
      "time.start": "開始日期時間",
      "time.end": "結束日期時間",
      "time.range": "時間區間",
      "drug.title": "藥檔資料",
      "drug.search": "搜尋藥碼或藥名",
      "drug.group": "選擇藥品群組",
      "drug.selected": "已選擇的藥品",
      "drug.code": "藥碼",
      "drug.name": "藥名",
      "drug.control": "管制級別",
      "drug.select": "選擇",
      "drug.total": "共 {0} 筆資料",
      "action.selectAll": "全選",
      "action.clear": "清除選擇",
      "action.export": "輸出報表",
      "action.processing": "處理中...",
      "action.loading": "載入中...",
      language: "繁體中文",
      "action.logout": "登出",
      "error.station.required": "請選擇至少一個調劑台",
      "error.drug.required": "請選擇至少一個藥品",
      "error.init.failed": "初始化資料失敗",
      "error.export.failed": "匯出Excel檔案失敗",
      "error.fetch.station": "無法取得調劑台資料",
      "error.fetch.drug": "無法取得藥品資料",
      "error.fetch.group": "無法取得藥品群組",
      "error.fetch.transaction": "無法取得交易資料",
      "user.notLoggedIn": "未登入",
    },
    en: {
      "system.title": "Controlled Substance Inventory",
      "system.department": "Software Department",
      "system.copyright": "鴻森智能科技",
      "inventory.title": "Controlled Inventory",
      "station.title": "Dispensing Station",
      "station.select": "(Please select at least one dispensing station)",
      "time.type": "Time Type",
      "time.operation": "Operation Time",
      "time.start": "Start Date Time",
      "time.end": "End Date Time",
      "time.range": "Time Range",
      "drug.title": "Drug Information",
      "drug.search": "Search by code or name",
      "drug.group": "Select Drug Group",
      "drug.selected": "Selected Drugs",
      "drug.code": "Code",
      "drug.name": "Name",
      "drug.control": "Control Level",
      "drug.select": "Select",
      "drug.total": "Total {0} records",
      "action.selectAll": "Select All",
      "action.clear": "Clear",
      "action.export": "Export Report",
      "action.processing": "Processing...",
      "action.loading": "Loading...",
      language: "English",
      "action.logout": "Logout",
      "error.station.required": "Please select at least one dispensing station",
      "error.drug.required": "Please select at least one drug",
      "error.init.failed": "Failed to initialize data",
      "error.export.failed": "Failed to export Excel file",
      "error.fetch.station": "Failed to fetch station data",
      "error.fetch.drug": "Failed to fetch drug data",
      "error.fetch.group": "Failed to fetch drug group",
      "error.fetch.transaction": "Failed to fetch transaction data",
      "user.notLoggedIn": "Not logged in",
    },
  },
  Zc = C.createContext(void 0);
function Bm({ children: e }) {
  const [t, n] = C.useState("zh-TW"),
    r = () => {
      n((o) => (o === "zh-TW" ? "en" : "zh-TW"));
    },
    l = (o, i = []) => {
      let s = Qm[t][o] || o;
      return (
        i.forEach((u, c) => {
          s = s.replace(`{${c}}`, u);
        }),
        s
      );
    };
  return a.jsx(Zc.Provider, {
    value: { language: t, toggleLanguage: r, t: l },
    children: e,
  });
}
function Ut() {
  const e = C.useContext(Zc);
  if (e === void 0)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return e;
}
const Jc = C.createContext({ config: null, isLoading: !0, error: null }),
  Wm = () => C.useContext(Jc),
  Km = ({ children: e }) => {
    const [t, n] = C.useState(null),
      [r, l] = C.useState(!0),
      [o, i] = C.useState(null);
    return (
      C.useEffect(() => {
        (async () => {
          try {
            const u = new Date().getTime(),
              c = await fetch(`../config.txt?t=${u}`);
            if (!c.ok) throw new Error(`HTTP ${c.status}: ${c.statusText}`);
            const h = await c.json();
            (n(h),
              i(null),
              (window.API_DOMAIN = h.domain),
              (window.HOMEPAGE = h.homepage),
              h.ai && (window.AI_API = h.ai),
              console.log("✅ Configuration loaded:", h));
          } catch (u) {
            const c = `❌ Failed to load config.txt: ${u instanceof Error ? u.message : String(u)}`;
            (console.error(c), i(c), n(null));
          } finally {
            l(!1);
          }
        })();
      }, []),
      a.jsx(Jc.Provider, {
        value: { config: t, isLoading: r, error: o },
        children: e,
      })
    );
  },
  Ym = ({ title: e }) => {
    const { t, toggleLanguage: n } = Ut(),
      r = Xc(),
      l = r
        ? `${r.Name} - ${r.Employer || t("system.department")}`
        : t("user.notLoggedIn"),
      o = () => {
        (zl(), window.location.reload());
      },
      i = () => {
        const s = window.HOMEPAGE;
        s && (window.location.href = `${s}/phar_system/frontpage/`);
      };
    return a.jsx("header", {
      className: "bg-white",
      children: a.jsx("div", {
        className: "w-full p-4",
        children: a.jsxs("div", {
          className: "flex items-center justify-between",
          children: [
            a.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                a.jsxs("button", {
                  onClick: i,
                  className:
                    "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors group relative",
                  title: t("system.title"),
                  children: [
                    a.jsx(Bp, { size: 24 }),
                    a.jsx("span", {
                      className:
                        "absolute left-1/2 -translate-x-1/2 -bottom-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",
                      children: t("system.title"),
                    }),
                  ],
                }),
                a.jsxs("div", {
                  children: [
                    a.jsx("h1", {
                      className:
                        "text-2xl md:text-3xl font-semibold text-gray-800",
                      children: t("inventory.title"),
                    }),
                    a.jsx("p", {
                      className: "text-gray-600 text-sm",
                      children: l,
                    }),
                  ],
                }),
              ],
            }),
            a.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                a.jsxs("button", {
                  onClick: n,
                  className:
                    "inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
                  children: [
                    a.jsx(Qp, { className: "h-4 w-4 mr-2" }),
                    t("language"),
                  ],
                }),
                a.jsxs("button", {
                  onClick: o,
                  className:
                    "inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
                  children: [
                    a.jsx(Wp, { className: "h-4 w-4 mr-2" }),
                    t("action.logout"),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  Gm = () => {
    const { t: e } = Ut();
    return a.jsx("footer", {
      className:
        "fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-6 text-center text-gray-600 text-sm z-10",
      children: a.jsxs("p", {
        children: ["Copyright ©2025 ", e("system.copyright")],
      }),
    });
  },
  Xm = ({ onLoginSuccess: e }) => {
    const { t } = Ut(),
      [n, r] = C.useState(""),
      [l, o] = C.useState(""),
      [i, s] = C.useState(""),
      [u, c] = C.useState(!1),
      h = async (g) => {
        (g.preventDefault(), s(""), c(!0));
        try {
          const m = await sn("/api/session/login", "POST", {
            Data: { ID: n, Password: l },
          });
          m.Code === 200
            ? Vm(m.Data)
              ? e()
              : s("您沒有使用此系統的權限")
            : s(m.Result || "登入失敗");
        } catch (m) {
          (console.error("Login error:", m), s("系統錯誤，請稍後再試"));
        } finally {
          c(!1);
        }
      };
    return a.jsx("div", {
      className: "min-h-screen bg-white flex flex-col justify-center",
      children: a.jsx("div", {
        className: "max-w-md w-full mx-auto",
        children: a.jsxs("div", {
          className:
            "bg-white px-8 py-12 rounded-lg shadow-sm border border-gray-200",
          children: [
            a.jsx("h2", {
              className: "text-center text-2xl font-bold text-gray-900 mb-8",
              children: t("system.title"),
            }),
            a.jsxs("form", {
              onSubmit: h,
              className: "space-y-6",
              children: [
                i &&
                  a.jsxs("div", {
                    className: "bg-red-50 p-4 rounded-md flex items-start",
                    children: [
                      a.jsx(yi, { className: "h-5 w-5 text-red-400 mt-0.5" }),
                      a.jsx("p", {
                        className: "ml-3 text-sm text-red-700",
                        children: i,
                      }),
                    ],
                  }),
                a.jsxs("div", {
                  children: [
                    a.jsx("label", {
                      htmlFor: "id",
                      className: "block text-sm font-medium text-gray-700",
                      children: "帳號",
                    }),
                    a.jsx("input", {
                      type: "text",
                      id: "id",
                      value: n,
                      onChange: (g) => r(g.target.value),
                      className:
                        "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm",
                      required: !0,
                    }),
                  ],
                }),
                a.jsxs("div", {
                  children: [
                    a.jsx("label", {
                      htmlFor: "password",
                      className: "block text-sm font-medium text-gray-700",
                      children: "密碼",
                    }),
                    a.jsx("input", {
                      type: "password",
                      id: "password",
                      value: l,
                      onChange: (g) => o(g.target.value),
                      className:
                        "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm",
                      required: !0,
                    }),
                  ],
                }),
                a.jsx("button", {
                  type: "submit",
                  disabled: u,
                  className: `w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${u ? "opacity-50 cursor-not-allowed" : ""}`,
                  children: u ? "登入中..." : "登入",
                }),
              ],
            }),
          ],
        }),
      }),
    });
  };
function Zm({
  startDate: e,
  startTime: t,
  endDate: n,
  endTime: r,
  onStartDateChange: l,
  onStartTimeChange: o,
  onEndDateChange: i,
  onEndTimeChange: s,
  className: u = "",
}) {
  const { t: c } = Ut(),
    [h, g] = C.useState(!1),
    m = (w, j, v, z) => {
      const T = new Date(`${w}T${j}`),
        A = new Date(`${v}T${z}`);
      return T <= A;
    },
    x = (w) => {
      m(w, t, n, r) && l(w);
    },
    S = (w) => {
      m(e, w, n, r) && o(w);
    },
    E = (w) => {
      m(e, t, w, r) && i(w);
    },
    I = (w) => {
      m(e, t, n, w) && s(w);
    },
    p = () => {
      g(!h);
    },
    f = (w) => {
      const [j, v, z] = w.split(":").map(Number);
      return { hours: j || 0, minutes: v || 0, seconds: z || 0 };
    },
    d = (w, j, v) =>
      `${String(w).padStart(2, "0")}:${String(j).padStart(2, "0")}:${String(v).padStart(2, "0")}`,
    y = ({ value: w, options: j, onChange: v }) => {
      const [z, T] = C.useState(!1),
        A = C.useRef(null);
      return (
        C.useEffect(() => {
          const J = (Te) => {
            A.current && !A.current.contains(Te.target) && T(!1);
          };
          return (
            document.addEventListener("mousedown", J),
            () => document.removeEventListener("mousedown", J)
          );
        }, []),
        a.jsxs("div", {
          ref: A,
          className: "relative",
          children: [
            a.jsx("button", {
              type: "button",
              onClick: () => T(!z),
              className:
                "w-12 py-2 px-1 bg-transparent focus:outline-none cursor-pointer text-center hover:bg-gray-100 rounded",
              children: String(w).padStart(2, "0"),
            }),
            z &&
              a.jsx("div", {
                className:
                  "absolute top-full left-0 mt-1 w-12 bg-white border rounded-lg shadow-lg z-50 max-h-[280px] overflow-y-auto",
                children: j.map((J) =>
                  a.jsx(
                    "div",
                    {
                      onClick: () => {
                        (v(J), T(!1));
                      },
                      className: `px-2 py-1.5 text-center cursor-pointer hover:bg-blue-500 hover:text-white ${J === w ? "bg-blue-500 text-white" : ""}`,
                      children: String(J).padStart(2, "0"),
                    },
                    J,
                  ),
                ),
              }),
          ],
        })
      );
    },
    N = ({ time: w, onChange: j }) => {
      const { hours: v, minutes: z, seconds: T } = f(w),
        A = (se, $e) => {
          const mt = d(
            se === "hours" ? $e : v,
            se === "minutes" ? $e : z,
            se === "seconds" ? $e : T,
          );
          j(mt);
        },
        J = Array.from({ length: 24 }, (se, $e) => $e),
        Te = Array.from({ length: 60 }, (se, $e) => $e);
      return a.jsxs("div", {
        className:
          "flex items-center border rounded-lg bg-gray-50 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500 transition-colors",
        children: [
          a.jsx(y, { value: v, options: J, onChange: (se) => A("hours", se) }),
          a.jsx("span", { className: "text-gray-500", children: ":" }),
          a.jsx(y, {
            value: z,
            options: Te,
            onChange: (se) => A("minutes", se),
          }),
          a.jsx("span", { className: "text-gray-500", children: ":" }),
          a.jsx(y, {
            value: T,
            options: Te,
            onChange: (se) => A("seconds", se),
          }),
        ],
      });
    };
  return a.jsxs("div", {
    className: "bg-white rounded-lg shadow-sm border",
    children: [
      a.jsxs("div", {
        className:
          "flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100",
        onClick: p,
        children: [
          a.jsxs("div", {
            className: "flex items-center",
            children: [
              a.jsx("div", {
                className:
                  "rounded-lg text-gray-600 transition-colors protected-2 pr-2",
                children: a.jsx(Up, { className: "w-5 h-5" }),
              }),
              a.jsx("h2", {
                className:
                  "text-lg font-bold text-gray-800 group-hover:text-gray-600 transition-colors",
                children: c("time.range"),
              }),
            ],
          }),
          a.jsx("div", {
            className: "flex items-center space-x-2",
            children: h
              ? a.jsx(Xl, {
                  className:
                    "w-5 h-5 text-gray-600 transition-transform duration-200",
                })
              : a.jsx(Pr, {
                  className:
                    "w-5 h-5 text-gray-600 transition-transform duration-200",
                }),
          }),
        ],
      }),
      a.jsx("div", {
        className: `transition-all duration-300 ease-in-out ${h ? "max-h-96 opacity-100 overflow-visible" : "max-h-0 opacity-0 overflow-hidden"}`,
        children: a.jsx("div", {
          className: "bg-white rounded-lg shadow-sm p-6",
          children: a.jsxs("div", {
            className: "flex flex-wrap gap-6",
            children: [
              a.jsxs("div", {
                children: [
                  a.jsx("label", {
                    className: "block text-sm font-medium text-gray-700 mb-2",
                    children: c("time.type"),
                  }),
                  a.jsx("select", {
                    defaultValue: "操作時間",
                    className:
                      "w-40 border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                    children: a.jsx("option", {
                      value: "操作時間",
                      children: c("time.operation"),
                    }),
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "flex-1 min-w-[600px] grid grid-cols-2 gap-6",
                children: [
                  a.jsxs("div", {
                    children: [
                      a.jsx("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: c("time.start"),
                      }),
                      a.jsxs("div", {
                        className: "flex gap-3",
                        children: [
                          a.jsx("input", {
                            type: "date",
                            value: e,
                            onChange: (w) => x(w.target.value),
                            className:
                              "w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                            placeholder: "YYYY-MM-DD",
                          }),
                          a.jsx(N, { time: t, onChange: S }),
                        ],
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsx("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: c("time.end"),
                      }),
                      a.jsxs("div", {
                        className: "flex gap-3",
                        children: [
                          a.jsx("input", {
                            type: "date",
                            value: n,
                            onChange: (w) => E(w.target.value),
                            className:
                              "w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                            placeholder: "YYYY-MM-DD",
                          }),
                          a.jsx(N, { time: r, onChange: I }),
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
    ],
  });
}
const Jm = ({ stations: e, selectedStations: t, onToggleStation: n }) => {
    const { t: r } = Ut(),
      [l, o] = C.useState(!0),
      i = () => {
        o(!l);
      };
    return a.jsxs("div", {
      className:
        "bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden",
      children: [
        a.jsxs("div", {
          className:
            "flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100",
          onClick: i,
          children: [
            a.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                a.jsx("div", {
                  className:
                    "pr-2 text-gray-600 hover:text-gray-800 rounded-lg text-blue-600 transition-colors duration-200",
                  children: a.jsx(Yp, { className: "w-5 h-5" }),
                }),
                a.jsxs("div", {
                  className: "flex items-end",
                  children: [
                    a.jsx("h2", {
                      className:
                        "text-xl font-bold text-gray-800 group-hover:text-gray-600 transition-colors mr-2",
                      children: r("station.title"),
                    }),
                    t.length === 0 &&
                      a.jsx("span", {
                        className: "text-sm text-gray-500 font-medium",
                        children: r("station.select"),
                      }),
                  ],
                }),
              ],
            }),
            a.jsxs("div", {
              className: "flex items-center space-x-2",
              children: [
                t.length > 0 &&
                  a.jsxs("span", {
                    className:
                      "px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full",
                    children: ["已選擇 ", t.length, " 個"],
                  }),
                l
                  ? a.jsx(Xl, {
                      className:
                        "w-5 h-5 text-gray-600 transition-transform duration-200",
                    })
                  : a.jsx(Pr, {
                      className:
                        "w-5 h-5 text-gray-600 transition-transform duration-200",
                    }),
              ],
            }),
          ],
        }),
        a.jsx("div", {
          className: `overflow-hidden transition-all duration-300 ease-in-out ${l ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`,
          children: a.jsx("div", {
            className: "p-4 md:p-6",
            children: a.jsx("div", {
              className: "flex flex-wrap gap-3",
              children: e.map((s) =>
                a.jsx(
                  "button",
                  {
                    onClick: () => n(s.name),
                    className: `
                  min-w-[120px] px-4 py-2.5 
                  rounded-lg 
                  font-medium
                  transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                  ${t.includes(s.name) ? "bg-blue-600 text-white hover:bg-blue-700 shadow-sm relative after:absolute after:inset-0 after:rounded-lg after:ring-2 after:ring-blue-600/50" : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"}
                `,
                    children: s.name,
                  },
                  s.id,
                ),
              ),
            }),
          }),
        }),
      ],
    });
  },
  qm = ({ drugs: e, selectedDrugs: t, onToggleDrug: n, className: r = "" }) => {
    const { t: l } = Ut(),
      [o, i] = C.useState(1),
      [s] = C.useState(50),
      [u, c] = C.useState(null),
      [h, g] = C.useState("asc"),
      m = C.useMemo(
        () =>
          u
            ? [...e].sort((v, z) => {
                let T = v[u],
                  A = z[u];
                if (typeof T == "string" && typeof A == "string") {
                  const J = T.localeCompare(A);
                  return h === "asc" ? J : -J;
                }
                return 0;
              })
            : e,
        [e, u, h],
      ),
      x = C.useMemo(() => {
        const v = (o - 1) * s;
        return m.slice(v, v + s);
      }, [m, o, s]),
      S = Math.ceil(m.length / s),
      E = (o - 1) * s + 1,
      I = Math.min(o * s, m.length),
      p = (v) => {
        u === v ? g(h === "asc" ? "desc" : "asc") : (c(v), g("asc"));
      },
      f = (v) => {
        v >= 1 && v <= S && i(v);
      },
      d = (v) => {
        const z = parseInt(v.target.value);
        isNaN(z) || f(z);
      },
      y = (v) =>
        u !== v
          ? null
          : h === "asc"
            ? a.jsx(Hc, { className: "w-4 h-4 ml-1" })
            : a.jsx(Xl, { className: "w-4 h-4 ml-1" }),
      N = () => {
        const v = x.map((T) => T.CODE);
        v.every((T) => t.includes(T))
          ? v.forEach((T) => {
              t.includes(T) && n(T);
            })
          : v.forEach((T) => {
              t.includes(T) || n(T);
            });
      },
      w = x.length > 0 && x.every((v) => t.includes(v.CODE)),
      j = x.some((v) => t.includes(v.CODE)) && !w;
    return e.length === 0
      ? a.jsx("div", {
          className: `bg-white rounded-lg shadow-sm border border-gray-200 ${r}`,
          children: a.jsxs("div", {
            className: "flex flex-col items-center justify-center py-12",
            children: [
              a.jsx(Qc, { className: "w-12 h-12 text-gray-400 mb-4" }),
              a.jsx("p", {
                className: "text-gray-500 text-lg",
                children: "暫無藥品資料",
              }),
            ],
          }),
        })
      : a.jsxs("div", {
          className: `bg-white rounded-lg shadow-sm border border-gray-200 ${r}`,
          children: [
            a.jsx("div", {
              className: "bg-gray-50 px-4 py-2 border-b border-gray-200",
              children: a.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  a.jsxs("div", {
                    className: "flex items-center gap-4",
                    children: [
                      a.jsxs("span", {
                        className: "text-base font-normal text-gray-900",
                        children: [
                          "顯示第 ",
                          E,
                          "-",
                          I,
                          " 筆，共 ",
                          m.length,
                          " 筆藥品",
                        ],
                      }),
                      a.jsxs("span", {
                        className: "text-sm text-gray-600",
                        children: ["已選擇 ", t.length, " 個藥品"],
                      }),
                    ],
                  }),
                  S > 1 &&
                    a.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        a.jsxs("button", {
                          onClick: () => f(o - 1),
                          disabled: o === 1,
                          className:
                            "inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                          children: [
                            a.jsx(ms, { className: "w-4 h-4 mr-1" }),
                            "上一頁",
                          ],
                        }),
                        a.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            a.jsx("span", {
                              className: "text-sm text-gray-600",
                              children: "第",
                            }),
                            a.jsx("input", {
                              type: "number",
                              min: "1",
                              max: S,
                              value: o,
                              onChange: d,
                              className:
                                "w-16 px-2 py-1 text-center border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                            }),
                            a.jsxs("span", {
                              className: "text-sm text-gray-600",
                              children: ["頁，共 ", S, " 頁"],
                            }),
                          ],
                        }),
                        a.jsxs("button", {
                          onClick: () => f(o + 1),
                          disabled: o === S,
                          className:
                            "inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                          children: [
                            "下一頁",
                            a.jsx(Pr, { className: "w-4 h-4 ml-1" }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
            }),
            a.jsx("div", {
              className: "overflow-x-auto",
              style: { maxHeight: "calc(100vh - 180px)" },
              children: a.jsxs("table", {
                className: "min-w-full table-fixed",
                children: [
                  a.jsx("thead", {
                    className: "sticky top-0 z-10 bg-gray-100",
                    children: a.jsxs("tr", {
                      children: [
                        a.jsx("th", {
                          style: { width: "100px" },
                          className:
                            "px-4 py-2 text-left border-b border-gray-200",
                          children: a.jsxs("div", {
                            className: "flex items-center",
                            children: [
                              a.jsx("input", {
                                type: "checkbox",
                                checked: w,
                                ref: (v) => {
                                  v && (v.indeterminate = j);
                                },
                                onChange: N,
                                className:
                                  "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer",
                              }),
                              a.jsx("span", {
                                className:
                                  "ml-2 text-base font-medium text-gray-500 uppercase tracking-wider",
                                children: l("drug.select"),
                              }),
                            ],
                          }),
                        }),
                        a.jsx("th", {
                          style: { width: "180px" },
                          className:
                            "px-4 py-2 text-left text-base font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-700 transition-colors border-b border-gray-200",
                          onClick: () => p("CODE"),
                          children: a.jsxs("div", {
                            className: "flex items-center",
                            children: [l("drug.code"), y("CODE")],
                          }),
                        }),
                        a.jsx("th", {
                          style: { width: "400px" },
                          className:
                            "px-4 py-2 text-left text-base font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-700 transition-colors border-b border-gray-200",
                          onClick: () => p("NAME"),
                          children: a.jsxs("div", {
                            className: "flex items-center",
                            children: [l("drug.name"), y("NAME")],
                          }),
                        }),
                        a.jsx("th", {
                          style: { width: "350px" },
                          className:
                            "px-4 py-2 text-left text-base font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-700 transition-colors border-b border-gray-200",
                          onClick: () => p("DIANAME"),
                          children: a.jsxs("div", {
                            className: "flex items-center",
                            children: ["學名", y("DIANAME")],
                          }),
                        }),
                        a.jsx("th", {
                          style: { width: "120px" },
                          className:
                            "px-4 py-2 text-left text-base font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-700 transition-colors border-b border-gray-200",
                          onClick: () => p("DRUGKIND"),
                          children: a.jsxs("div", {
                            className: "flex items-center",
                            children: [l("drug.control"), y("DRUGKIND")],
                          }),
                        }),
                      ],
                    }),
                  }),
                  a.jsx("tbody", {
                    className: "bg-white divide-y divide-gray-200",
                    children: x.map((v) =>
                      a.jsxs(
                        "tr",
                        {
                          onClick: () => n(v.CODE),
                          className:
                            "hover:bg-gray-50 transition-colors cursor-pointer",
                          children: [
                            a.jsx("td", {
                              style: { width: "100px" },
                              className: "px-4 py-2",
                              onClick: (z) => z.stopPropagation(),
                              children: a.jsx("input", {
                                type: "checkbox",
                                checked: t.includes(v.CODE),
                                onChange: () => n(v.CODE),
                                className:
                                  "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer",
                              }),
                            }),
                            a.jsx("td", {
                              style: { width: "180px" },
                              className:
                                "px-4 py-2 text-sm text-gray-900 font-medium truncate",
                              title: v.CODE,
                              children: v.CODE,
                            }),
                            a.jsx("td", {
                              style: { width: "400px" },
                              className:
                                "px-4 py-2 text-sm text-gray-900 truncate",
                              title: v.NAME,
                              children: v.NAME,
                            }),
                            a.jsx("td", {
                              style: { width: "350px" },
                              className:
                                "px-4 py-2 text-sm text-gray-600 truncate",
                              title: v.DIANAME,
                              children: v.DIANAME,
                            }),
                            a.jsx("td", {
                              style: { width: "120px" },
                              className:
                                "px-4 py-2 text-sm text-gray-900 truncate",
                              children: a.jsx("span", {
                                className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${v.DRUGKIND === "N" ? "bg-gray-100 text-gray-800" : v.DRUGKIND === "1" ? "bg-yellow-100 text-yellow-800" : v.DRUGKIND === "2" ? "bg-orange-100 text-orange-800" : v.DRUGKIND === "3" ? "bg-red-100 text-red-800" : v.DRUGKIND === "4" ? "bg-purple-100 text-purple-800" : "bg-gray-100 text-gray-800"}`,
                                children: v.DRUGKIND || "N",
                              }),
                            }),
                          ],
                        },
                        v.CODE,
                      ),
                    ),
                  }),
                ],
              }),
            }),
          ],
        });
  },
  bm = ({
    drugs: e,
    allDrugs: t,
    selectedDrugs: n,
    medicationGroups: r,
    searchTerm: l,
    isLoading: o,
    onSearchChange: i,
    onGroupSelection: s,
    onSelectAllDrugs: u,
    onClearSelection: c,
    onExport: h,
    onToggleDrug: g,
    onRemoveDrug: m,
  }) => {
    const { t: x } = Ut();
    return a.jsxs("div", {
      children: [
        a.jsxs("div", {
          className: "flex items-center justify-between mb-6",
          children: [
            a.jsxs("div", {
              className: "flex items-center gap-6",
              children: [
                a.jsx("h2", {
                  className: "text-xl font-bold text-gray-800",
                  children: x("drug.title"),
                }),
                a.jsxs("div", {
                  className: "relative w-[300px]",
                  children: [
                    a.jsx("input", {
                      type: "text",
                      placeholder: x("drug.search"),
                      value: l,
                      onChange: (S) => i(S.target.value),
                      className:
                        "w-full border rounded-lg px-3 py-2 pl-10 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors",
                    }),
                    a.jsx(Kp, {
                      className:
                        "absolute left-3 top-2.5 text-gray-400 w-5 h-5",
                    }),
                  ],
                }),
                a.jsxs("select", {
                  onChange: (S) => s(S.target.value),
                  className:
                    "w-[200px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors",
                  defaultValue: "",
                  children: [
                    a.jsx("option", { value: "", children: x("drug.group") }),
                    r.map((S) =>
                      a.jsx(
                        "option",
                        { value: S.GUID, children: S.NAME },
                        S.GUID,
                      ),
                    ),
                  ],
                }),
              ],
            }),
            a.jsxs("div", {
              className: "flex gap-4",
              children: [
                a.jsx("button", {
                  onClick: u,
                  className:
                    "px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors focus:ring-2 focus:ring-opacity-50",
                  children: x("action.selectAll"),
                }),
                a.jsx("button", {
                  onClick: c,
                  className:
                    "px-4 py-2 rounded-lg bg-white text-gray-700 hover:bg-gray-50 border border-gray-300 transition-colors focus:ring-2 focus:ring-opacity-50",
                  children: x("action.clear"),
                }),
                a.jsxs("button", {
                  onClick: h,
                  disabled: o,
                  className: `flex items-center px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors focus:ring-2 focus:ring-opacity-50 ${o ? "opacity-50 cursor-not-allowed" : ""}`,
                  children: [
                    a.jsx(Hp, { className: "w-5 h-5 mr-2" }),
                    x(o ? "action.processing" : "action.export"),
                  ],
                }),
              ],
            }),
          ],
        }),
        n.length > 0 &&
          a.jsxs("div", {
            className:
              "mb-6 bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6",
            children: [
              a.jsxs("h3", {
                className: "text-sm font-medium text-gray-700 mb-2",
                children: [x("drug.selected"), "："],
              }),
              a.jsx("div", {
                className: "flex flex-wrap gap-2 max-h-32 overflow-y-auto py-4",
                children: n.map((S) => {
                  const E = t.find((I) => I.CODE === S);
                  return (
                    E &&
                    a.jsxs(
                      "div",
                      {
                        className:
                          "flex items-center bg-blue-50 text-blue-700 px-3 py-1.5 rounded border border-blue-100",
                        children: [
                          a.jsx("span", {
                            className: "truncate max-w-[200px]",
                            children: E.NAME,
                          }),
                          a.jsx("button", {
                            onClick: () => m(E.CODE),
                            className:
                              "ml-2 flex-shrink-0 focus:outline-none hover:text-blue-800",
                            children: a.jsx(Xp, { className: "w-4 h-4" }),
                          }),
                        ],
                      },
                      E.CODE,
                    )
                  );
                }),
              }),
            ],
          }),
        a.jsx(qm, { drugs: e, selectedDrugs: n, onToggleDrug: g }),
      ],
    });
  },
  e0 = ({ transactions: e, className: t = "" }) => {
    const [n, r] = C.useState(1),
      [l] = C.useState(50),
      [o, i] = C.useState(null),
      [s, u] = C.useState("asc"),
      c = C.useMemo(
        () =>
          o
            ? [...e].sort((d, y) => {
                let N = d[o],
                  w = y[o];
                if (
                  ((o === "TXN_QTY" || o === "EBQ_QTY") &&
                    ((N = typeof N == "number" ? N : parseFloat(N) || 0),
                    (w = typeof w == "number" ? w : parseFloat(w) || 0)),
                  typeof N == "string" && typeof w == "string")
                ) {
                  const j = N.localeCompare(w);
                  return s === "asc" ? j : -j;
                }
                return typeof N == "number" && typeof w == "number"
                  ? s === "asc"
                    ? N - w
                    : w - N
                  : 0;
              })
            : e,
        [e, o, s],
      ),
      h = C.useMemo(() => {
        const d = (n - 1) * l;
        return c.slice(d, d + l);
      }, [c, n, l]),
      g = Math.ceil(c.length / l),
      m = (n - 1) * l + 1,
      x = Math.min(n * l, c.length),
      S = (d) => {
        o === d ? u(s === "asc" ? "desc" : "asc") : (i(d), u("asc"));
      },
      E = (d) => {
        d >= 1 && d <= g && r(d);
      },
      I = (d) => {
        const y = parseInt(d.target.value);
        isNaN(y) || E(y);
      },
      p = (d) =>
        o !== d
          ? null
          : s === "asc"
            ? a.jsx(Hc, { className: "w-4 h-4 ml-1" })
            : a.jsx(Xl, { className: "w-4 h-4 ml-1" }),
      f = [
        { key: "OP_TIME", label: "操作時間", width: "180px" },
        { key: "MED_BAG_NUM", label: "領藥號", width: "120px" },
        { key: "PAT", label: "病人姓名", width: "120px" },
        { key: "MRN", label: "病歷號", width: "120px" },
        { key: "OP", label: "調劑人", width: "100px" },
        { key: "TXN_QTY", label: "收入", width: "80px" },
        { key: "TXN_QTY", label: "支出", width: "80px" },
        { key: "EBQ_QTY", label: "結存量", width: "100px" },
        { key: "RSN", label: "收支原因", width: "120px" },
        { key: "STOREHOUSE", label: "來源", width: "120px" },
        { key: "NOTE", label: "備註", width: "200px" },
      ];
    return e.length === 0
      ? a.jsx("div", {
          className: `bg-white rounded-lg shadow-sm border border-gray-200 ${t}`,
          children: a.jsxs("div", {
            className: "flex flex-col items-center justify-center py-12",
            children: [
              a.jsx(Qc, { className: "w-12 h-12 text-gray-400 mb-4" }),
              a.jsx("p", {
                className: "text-gray-500 text-lg",
                children: "暫無交易記錄",
              }),
            ],
          }),
        })
      : a.jsxs("div", {
          className: `bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col h-full ${t}`,
          children: [
            a.jsx("div", {
              className: "bg-gray-50 px-6 py-4 border-b border-gray-200",
              children: a.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  a.jsx("div", {
                    className: "flex items-center gap-4",
                    children: a.jsxs("span", {
                      className: "text-base font-normal text-gray-900",
                      children: [
                        "顯示第 ",
                        m,
                        "-",
                        x,
                        " 筆，共 ",
                        c.length,
                        " 筆記錄",
                      ],
                    }),
                  }),
                  g > 1 &&
                    a.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        a.jsxs("button", {
                          onClick: () => E(n - 1),
                          disabled: n === 1,
                          className:
                            "inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                          children: [
                            a.jsx(ms, { className: "w-4 h-4 mr-1" }),
                            "上一頁",
                          ],
                        }),
                        a.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            a.jsx("span", {
                              className: "text-sm text-gray-600",
                              children: "第",
                            }),
                            a.jsx("input", {
                              type: "number",
                              min: "1",
                              max: g,
                              value: n,
                              onChange: I,
                              className:
                                "w-16 px-2 py-1 text-center border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                            }),
                            a.jsxs("span", {
                              className: "text-sm text-gray-600",
                              children: ["頁，共 ", g, " 頁"],
                            }),
                          ],
                        }),
                        a.jsxs("button", {
                          onClick: () => E(n + 1),
                          disabled: n === g,
                          className:
                            "inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                          children: [
                            "下一頁",
                            a.jsx(Pr, { className: "w-4 h-4 ml-1" }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
            }),
            a.jsx("div", {
              className: "overflow-auto flex-1 pb-2",
              children: a.jsxs("table", {
                className: "min-w-full table-fixed",
                children: [
                  a.jsx("thead", {
                    className: "sticky top-0 z-10 bg-gray-100",
                    children: a.jsx("tr", {
                      children: f.map((d, y) =>
                        a.jsx(
                          "th",
                          {
                            style: { width: d.width },
                            className:
                              "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-700 transition-colors border-b border-gray-200",
                            onClick: () => S(d.key),
                            children: a.jsxs("div", {
                              className: "flex items-center",
                              children: [d.label, p(d.key)],
                            }),
                          },
                          `${d.key}-${y}`,
                        ),
                      ),
                    }),
                  }),
                  a.jsx("tbody", {
                    className: "bg-white divide-y divide-gray-200",
                    children: h.map((d, y) => {
                      const N =
                          typeof d.TXN_QTY == "number"
                            ? d.TXN_QTY
                            : parseFloat(d.TXN_QTY) || 0,
                        w = N > 0 ? N.toString() : "",
                        j = N <= 0 ? Math.abs(N).toString() : "";
                      return a.jsxs(
                        "tr",
                        {
                          className: "hover:bg-gray-50 transition-colors",
                          children: [
                            a.jsx("td", {
                              className:
                                "px-4 py-2 text-sm text-gray-900 truncate",
                              title: d.OP_TIME,
                              children: d.OP_TIME,
                            }),
                            a.jsx("td", {
                              className:
                                "px-4 py-2 text-sm text-gray-900 truncate",
                              title: d.MED_BAG_NUM,
                              children: d.MED_BAG_NUM,
                            }),
                            a.jsx("td", {
                              className:
                                "px-4 py-2 text-sm text-gray-900 truncate",
                              title: d.PAT,
                              children: d.PAT,
                            }),
                            a.jsx("td", {
                              className:
                                "px-4 py-2 text-sm text-gray-900 truncate",
                              title: d.MRN,
                              children: d.MRN,
                            }),
                            a.jsx("td", {
                              className:
                                "px-4 py-2 text-sm text-gray-900 truncate",
                              title: d.OP,
                              children: d.OP,
                            }),
                            a.jsx("td", {
                              className:
                                "px-4 py-2 text-sm text-gray-900 text-right font-medium",
                              children:
                                w &&
                                a.jsx("span", {
                                  className: "text-green-600",
                                  children: w,
                                }),
                            }),
                            a.jsx("td", {
                              className:
                                "px-4 py-2 text-sm text-gray-900 text-right font-medium",
                              children:
                                j &&
                                a.jsx("span", {
                                  className: "text-red-600",
                                  children: j,
                                }),
                            }),
                            a.jsx("td", {
                              className:
                                "px-4 py-2 text-sm text-gray-900 text-right font-medium",
                              children: d.EBQ_QTY,
                            }),
                            a.jsx("td", {
                              className:
                                "px-4 py-2 text-sm text-gray-900 truncate",
                              title: d.RSN,
                              children: d.RSN,
                            }),
                            a.jsx("td", {
                              className:
                                "px-4 py-2 text-sm text-gray-900 truncate",
                              title: d.STOREHOUSE,
                              children: d.STOREHOUSE,
                            }),
                            a.jsx("td", {
                              className:
                                "px-4 py-2 text-sm text-gray-900 truncate",
                              title: d.NOTE,
                              children: d.NOTE,
                            }),
                          ],
                        },
                        y,
                      );
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
  };
function t0() {
  const { t: e } = Ut(),
    { config: t, isLoading: n, error: r } = Wm(),
    [l, o] = C.useState(!1),
    [i, s] = C.useState([]),
    [u, c] = C.useState([]),
    [h, g] = C.useState([]),
    [m, x] = C.useState([]),
    [S, E] = C.useState([]),
    [I, p] = C.useState(""),
    f = new Date(),
    d = new Date(f);
  d.setDate(f.getDate() - 30);
  const y = (D) => {
      const O = D.getFullYear(),
        re = String(D.getMonth() + 1).padStart(2, "0"),
        Ge = String(D.getDate()).padStart(2, "0");
      return `${O}-${re}-${Ge}`;
    },
    [N, w] = C.useState(y(d)),
    [j, v] = C.useState("00:00:00"),
    [z, T] = C.useState(y(f)),
    [A, J] = C.useState("23:59:59"),
    [Te, se] = C.useState([]),
    [$e, mt] = C.useState(!1),
    [ht, _] = C.useState(0),
    [L, M] = C.useState([]),
    [B, X] = C.useState(!1),
    [gt, Ye] = C.useState(!1),
    [Rn, Ae] = C.useState(!0);
  (C.useEffect(() => {
    (() => {
      const O = Hm();
      (o(O), Ae(!1));
    })();
  }, []),
    C.useEffect(() => {
      l &&
        !n &&
        t &&
        (async () => {
          Ae(!0);
          try {
            await Promise.all([qc(), bc(), ed()]);
          } catch (O) {
            (console.error("Error initializing data:", O),
              tt(e("error.init.failed")));
          } finally {
            Ae(!1);
          }
        })();
    }, [l, n, t, e]),
    C.useEffect(() => {
      const D = h.filter(
        (O) =>
          O.CODE.toLowerCase().includes(I.toLowerCase()) ||
          O.NAME.toLowerCase().includes(I.toLowerCase()) ||
          O.DIANAME.toLowerCase().includes(I.toLowerCase()),
      );
      x(D);
    }, [I, h]));
  const ln = () => {
      o(!0);
    },
    qc = async () => {
      const D = { ValueAry: ["調劑台"] };
      try {
        const O = await sn(
          "/api/ServerSetting/get_serversetting_by_type",
          "POST",
          D,
        );
        s(O.Data || []);
      } catch (O) {
        (console.error("Error:", O), tt(e("error.fetch.station")));
      }
    },
    bc = async () => {
      try {
        const O = (
          (await sn("/api/med_page/get_med_cloud", "POST", {})).Data || []
        ).map((re) => ({ ...re, DRUGKIND: re.DRUGKIND || "N" }));
        (g(O), x(O));
      } catch (D) {
        (console.error("Error:", D), tt(e("error.fetch.drug")));
      }
    },
    ed = async () => {
      try {
        const D = await sn("/api/medGroup/get_all_group", "POST", {});
        se(D.Data || []);
      } catch (D) {
        (console.error("Error:", D), tt(e("error.fetch.group")));
      }
    },
    td = async () => {
      X(!0);
      const D = `${N} ${j}`,
        O = `${z} ${A}`,
        re = new Array(u.length).fill("調劑台"),
        Ge = { ValueAry: [D, O, u.join(","), re.join(",")] };
      try {
        const Xe = await sn(
            "/api/transactions/get_datas_by_op_time_st_end",
            "POST",
            Ge,
          ),
          Vt = await Promise.all(
            S.map(async (yt) => {
              const De = h.find((Fe) => Fe.CODE === yt);
              if (!De) return null;
              const hs = (Xe.Data || []).filter((Fe) => Fe.CODE === yt);
              let gs = 0,
                ys = 0,
                vs = 0;
              return (
                hs.forEach((Fe) => {
                  const $n =
                    typeof Fe.TXN_QTY == "number"
                      ? Fe.TXN_QTY
                      : parseFloat(Fe.TXN_QTY) || 0;
                  $n > 0 && Fe.RSN === "入庫作業"
                    ? (gs += $n)
                    : $n < 0 && Fe.RSN === "出庫作業"
                      ? (ys += Math.abs($n))
                      : Fe.RSN !== "入庫作業" &&
                        Fe.RSN !== "出庫作業" &&
                        (vs += $n);
                }),
                {
                  CODE: De.CODE,
                  NAME: De.NAME,
                  TRADE_NAME: De.DIANAME,
                  CONTROL_LEVEL: De.DRUGKIND || "N",
                  MIN_UNIT: De.MIN_PAKAGE || "未知",
                  TOTAL_INCOME: gs,
                  TOTAL_EXPENSE: ys,
                  CONSUMPTION: vs,
                  transactions: hs,
                }
              );
            }),
          );
        (M(Vt.filter((yt) => yt !== null)), mt(!0));
      } catch (Xe) {
        (console.error("Error:", Xe), tt(e("error.fetch.transaction")));
      } finally {
        X(!1);
      }
    },
    nd = async () => {
      Ye(!0);
      const D = `${N} ${j}`,
        O = `${z} ${A}`,
        re = new Array(u.length).fill("調劑台"),
        Ge = { ValueAry: [S.join(","), D, O, u.join(","), re.join(",")] };
      try {
        const Xe = await fetch(
          `${Um()}/api/transactions/download_cdmis_datas_excel`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Ge),
          },
        );
        if (!Xe.ok) throw new Error("Export failed");
        const Vt = await Xe.blob(),
          yt = window.URL.createObjectURL(Vt),
          De = document.createElement("a");
        ((De.href = yt),
          (De.download = "藥品結存報表.xlsx"),
          document.body.appendChild(De),
          De.click(),
          document.body.removeChild(De),
          window.URL.revokeObjectURL(yt));
      } catch (Xe) {
        (console.error("Error:", Xe), tt(e("error.export.failed")));
      } finally {
        Ye(!1);
      }
    },
    rd = async (D) => {
      var O, re;
      if (D)
        try {
          const Ge = await sn("/api/medGroup/get_group_by_guid", "POST", {
            ValueAry: [D],
          });
          if (
            (re = (O = Ge.Data) == null ? void 0 : O[0]) != null &&
            re.MedClasses
          ) {
            const Xe = Ge.Data[0].MedClasses.map((Vt) => Vt.CODE);
            E((Vt) => [...new Set([...Vt, ...Xe])]);
          }
        } catch (Ge) {
          (console.error("Error:", Ge), tt(e("error.fetch.group")));
        }
    },
    ld = (D) => {
      c((O) => (O.includes(D) ? O.filter((re) => re !== D) : [...O, D]));
    },
    od = (D) => {
      E((O) => (O.includes(D) ? O.filter((re) => re !== D) : [...O, D]));
    },
    id = (D) => {
      E((O) => O.filter((re) => re !== D));
    },
    sd = () => {
      const D = h.map((O) => O.CODE);
      E(D);
    },
    ud = () => {
      E([]);
    },
    tt = (D) => {
      me.custom(
        (O) =>
          a.jsx("div", {
            className: `${O.visible ? "animate-enter" : "animate-leave"} toast-message min-w-[200px] max-w-[400px] bg-red-50 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`,
            children: a.jsx("div", {
              className: "flex-1 p-4",
              children: a.jsxs("div", {
                className: "flex items-start",
                children: [
                  a.jsx("div", {
                    className: "flex-shrink-0 pt-0.5",
                    children: a.jsx(yi, {
                      className: "h-5 w-5 text-red-400",
                      "aria-hidden": "true",
                    }),
                  }),
                  a.jsx("div", {
                    className: "ml-3 flex-1",
                    children: a.jsx("p", {
                      className: "text-sm font-medium text-red-800 break-words",
                      children: D,
                    }),
                  }),
                ],
              }),
            }),
          }),
        { position: "top-right", duration: 4e3 },
      );
    },
    ad = () => {
      if (u.length === 0) {
        tt(e("error.station.required"));
        return;
      }
      if (S.length === 0) {
        tt(e("error.drug.required"));
        return;
      }
      td();
    },
    cd = () => {
      if (!$e || L.length === 0) return null;
      const D = L[ht];
      return a.jsx("div", {
        className:
          "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
        children: a.jsxs("div", {
          className:
            "bg-white rounded-xl shadow-xl w-[95vw] max-w-7xl max-h-[95vh] overflow-hidden",
          children: [
            a.jsx("div", {
              className: "p-6 border-b border-gray-200",
              children: a.jsxs("div", {
                className: "flex justify-between items-center",
                children: [
                  a.jsxs("div", {
                    children: [
                      a.jsx("h2", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "結存報表",
                      }),
                      a.jsxs("p", {
                        className: "text-sm text-gray-600 mt-1",
                        children: [N, " ", j, " ~ ", z, " ", A],
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    className: "flex items-center gap-4",
                    children: [
                      a.jsxs("button", {
                        onClick: nd,
                        disabled: gt,
                        className: `flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors ${gt ? "opacity-50 cursor-not-allowed" : ""}`,
                        children: [
                          a.jsx(Vp, { className: "w-5 h-5 mr-2" }),
                          gt ? "匯出中..." : "匯出",
                        ],
                      }),
                      a.jsx("button", {
                        onClick: () => mt(!1),
                        className:
                          "text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-lg p-1 transition-colors",
                        children: a.jsx(Gp, { className: "w-6 h-6" }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            a.jsxs("div", {
              className: "flex flex-col h-[calc(95vh-120px)]",
              children: [
                L.length > 1 &&
                  a.jsxs("div", {
                    className:
                      "flex justify-center gap-2 p-4 border-b border-gray-200 bg-gray-50",
                    children: [
                      a.jsx("button", {
                        onClick: () => _((O) => Math.max(0, O - 1)),
                        disabled: ht === 0,
                        className:
                          "px-4 py-2 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
                        children: a.jsx(ms, { className: "w-4 h-4" }),
                      }),
                      a.jsxs("span", {
                        className:
                          "px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg",
                        children: [
                          "第 ",
                          ht + 1,
                          " 個藥品，共 ",
                          L.length,
                          " 個",
                        ],
                      }),
                      a.jsx("button", {
                        onClick: () => _((O) => Math.min(L.length - 1, O + 1)),
                        disabled: ht === L.length - 1,
                        className:
                          "px-4 py-2 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
                        children: a.jsx(Pr, { className: "w-4 h-4" }),
                      }),
                    ],
                  }),
                a.jsx("div", {
                  className:
                    "p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50",
                  children: a.jsxs("div", {
                    className:
                      "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4",
                    children: [
                      a.jsxs("div", {
                        className: "bg-white p-3 rounded-lg shadow-sm",
                        children: [
                          a.jsx("p", {
                            className:
                              "text-xs text-gray-500 uppercase tracking-wide",
                            children: "藥碼",
                          }),
                          a.jsx("p", {
                            className: "font-semibold text-gray-900 mt-1",
                            children: D.CODE,
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className: "bg-white p-3 rounded-lg shadow-sm",
                        children: [
                          a.jsx("p", {
                            className:
                              "text-xs text-gray-500 uppercase tracking-wide",
                            children: "藥名",
                          }),
                          a.jsx("p", {
                            className:
                              "font-semibold text-gray-900 mt-1 truncate",
                            title: D.NAME,
                            children: D.NAME,
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className: "bg-white p-3 rounded-lg shadow-sm",
                        children: [
                          a.jsx("p", {
                            className:
                              "text-xs text-gray-500 uppercase tracking-wide",
                            children: "藥品學名",
                          }),
                          a.jsx("p", {
                            className:
                              "font-semibold text-gray-900 mt-1 truncate",
                            title: D.TRADE_NAME,
                            children: D.TRADE_NAME,
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className: "bg-white p-3 rounded-lg shadow-sm",
                        children: [
                          a.jsx("p", {
                            className:
                              "text-xs text-gray-500 uppercase tracking-wide",
                            children: "管制級別",
                          }),
                          a.jsx("p", {
                            className: "font-semibold text-gray-900 mt-1",
                            children: D.CONTROL_LEVEL,
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className: "bg-white p-3 rounded-lg shadow-sm",
                        children: [
                          a.jsx("p", {
                            className:
                              "text-xs text-gray-500 uppercase tracking-wide",
                            children: "最小單位",
                          }),
                          a.jsx("p", {
                            className: "font-semibold text-gray-900 mt-1",
                            children: D.MIN_UNIT,
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className: "bg-white p-3 rounded-lg shadow-sm",
                        children: [
                          a.jsx("p", {
                            className:
                              "text-xs text-gray-500 uppercase tracking-wide",
                            children: "入庫",
                          }),
                          a.jsx("p", {
                            className: "font-semibold text-green-600 mt-1",
                            children: D.TOTAL_INCOME,
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className: "bg-white p-3 rounded-lg shadow-sm",
                        children: [
                          a.jsx("p", {
                            className:
                              "text-xs text-gray-500 uppercase tracking-wide",
                            children: "出庫",
                          }),
                          a.jsx("p", {
                            className: "font-semibold text-red-600 mt-1",
                            children: D.TOTAL_EXPENSE,
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className: "bg-white p-3 rounded-lg shadow-sm",
                        children: [
                          a.jsx("p", {
                            className:
                              "text-xs text-gray-500 uppercase tracking-wide",
                            children: "消耗量",
                          }),
                          a.jsx("p", {
                            className: "font-semibold text-orange-600 mt-1",
                            children: D.CONSUMPTION,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                a.jsx("div", {
                  className: "flex-1 overflow-hidden",
                  children: a.jsx(e0, { transactions: D.transactions }),
                }),
              ],
            }),
          ],
        }),
      });
    };
  return n
    ? a.jsx("div", {
        className: "min-h-screen bg-white flex items-center justify-center",
        children: a.jsx("div", {
          className: "text-gray-600",
          children: "載入設定中...",
        }),
      })
    : r || !t
      ? a.jsx("div", {
          className: "min-h-screen bg-white flex items-center justify-center",
          children: a.jsx("div", {
            className:
              "max-w-md p-6 bg-red-50 border border-red-200 rounded-lg",
            children: a.jsxs("div", {
              className: "flex items-start",
              children: [
                a.jsx(yi, {
                  className: "w-6 h-6 text-red-600 mt-0.5 mr-3 flex-shrink-0",
                }),
                a.jsxs("div", {
                  children: [
                    a.jsx("h2", {
                      className: "text-lg font-semibold text-red-900 mb-2",
                      children: "配置載入失敗",
                    }),
                    a.jsx("p", {
                      className: "text-sm text-red-700 mb-3",
                      children: r || "無法載入 config.txt",
                    }),
                    a.jsx("p", {
                      className: "text-xs text-red-600",
                      children: "請確認 config.txt 檔案存在且格式正確",
                    }),
                  ],
                }),
              ],
            }),
          }),
        })
      : l
        ? Rn
          ? a.jsx("div", {
              className:
                "min-h-screen bg-white flex items-center justify-center",
              children: a.jsx("div", {
                className: "text-gray-600",
                children: e("action.loading"),
              }),
            })
          : a.jsxs("div", {
              className: "min-h-screen bg-white flex flex-col",
              children: [
                a.jsx(Fm, {
                  position: "top-right",
                  toastOptions: { duration: 4e3 },
                }),
                a.jsx(Ym, { title: "管制結存" }),
                a.jsxs("main", {
                  className: "flex-1 w-full p-4 space-y-6 pb-16",
                  children: [
                    a.jsx(Jm, {
                      stations: i,
                      selectedStations: u,
                      onToggleStation: ld,
                    }),
                    a.jsx(Zm, {
                      startDate: N,
                      startTime: j,
                      endDate: z,
                      endTime: A,
                      onStartDateChange: w,
                      onStartTimeChange: v,
                      onEndDateChange: T,
                      onEndTimeChange: J,
                      className:
                        "bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6",
                    }),
                    a.jsx(bm, {
                      drugs: m,
                      allDrugs: h,
                      selectedDrugs: S,
                      medicationGroups: Te,
                      searchTerm: I,
                      isLoading: B,
                      onSearchChange: p,
                      onGroupSelection: rd,
                      onSelectAllDrugs: sd,
                      onClearSelection: ud,
                      onExport: ad,
                      onToggleDrug: od,
                      onRemoveDrug: id,
                    }),
                  ],
                }),
                a.jsx(Gm, {}),
                a.jsx(cd, {}),
              ],
            })
        : a.jsx(Xm, { onLoginSuccess: ln });
}
Vc(document.getElementById("root")).render(
  a.jsx(C.StrictMode, {
    children: a.jsx(Km, { children: a.jsx(Bm, { children: a.jsx(t0, {}) }) }),
  }),
);
