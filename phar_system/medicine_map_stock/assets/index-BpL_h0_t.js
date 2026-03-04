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
var mu = { exports: {} },
  wl = {},
  hu = { exports: {} },
  O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gr = Symbol.for("react.element"),
  Fc = Symbol.for("react.portal"),
  Uc = Symbol.for("react.fragment"),
  Ac = Symbol.for("react.strict_mode"),
  $c = Symbol.for("react.profiler"),
  Vc = Symbol.for("react.provider"),
  bc = Symbol.for("react.context"),
  Bc = Symbol.for("react.forward_ref"),
  Hc = Symbol.for("react.suspense"),
  Wc = Symbol.for("react.memo"),
  Qc = Symbol.for("react.lazy"),
  ns = Symbol.iterator;
function Gc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ns && e[ns]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var gu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  yu = Object.assign,
  vu = {};
function Pn(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = vu),
    (this.updater = n || gu));
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
function xu() {}
xu.prototype = Pn.prototype;
function oi(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = vu),
    (this.updater = n || gu));
}
var ii = (oi.prototype = new xu());
ii.constructor = oi;
yu(ii, Pn.prototype);
ii.isPureReactComponent = !0;
var rs = Array.isArray,
  wu = Object.prototype.hasOwnProperty,
  si = { current: null },
  Su = { key: !0, ref: !0, __self: !0, __source: !0 };
function ku(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      wu.call(t, r) && !Su.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), d = 0; d < u; d++) a[d] = arguments[d + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: gr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: si.current,
  };
}
function Kc(e, t) {
  return {
    $$typeof: gr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ui(e) {
  return typeof e == "object" && e !== null && e.$$typeof === gr;
}
function Yc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ls = /\/+/g;
function Al(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Yc("" + e.key)
    : t.toString(36);
}
function Ur(e, t, n, r, l) {
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
          case gr:
          case Fc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Al(i, 0) : r),
      rs(l)
        ? ((n = ""),
          e != null && (n = e.replace(ls, "$&/") + "/"),
          Ur(l, t, n, "", function (d) {
            return d;
          }))
        : l != null &&
          (ui(l) &&
            (l = Kc(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(ls, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), rs(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var a = r + Al(o, u);
      i += Ur(o, t, n, a, l);
    }
  else if (((a = Gc(e)), typeof a == "function"))
    for (e = a.call(e), u = 0; !(o = e.next()).done; )
      ((o = o.value), (a = r + Al(o, u++)), (i += Ur(o, t, n, a, l)));
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
function Sr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Ur(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Xc(e) {
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
  Ar = { transition: null },
  Zc = {
    ReactCurrentDispatcher: xe,
    ReactCurrentBatchConfig: Ar,
    ReactCurrentOwner: si,
  };
function Nu() {
  throw Error("act(...) is not supported in production builds of React.");
}
O.Children = {
  map: Sr,
  forEach: function (e, t, n) {
    Sr(
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
      Sr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Sr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ui(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
O.Component = Pn;
O.Fragment = Uc;
O.Profiler = $c;
O.PureComponent = oi;
O.StrictMode = Ac;
O.Suspense = Hc;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zc;
O.act = Nu;
O.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = yu({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = si.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (a in t)
      wu.call(t, a) &&
        !Su.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var d = 0; d < a; d++) u[d] = arguments[d + 2];
    r.children = u;
  }
  return { $$typeof: gr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
O.createContext = function (e) {
  return (
    (e = {
      $$typeof: bc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Vc, _context: e }),
    (e.Consumer = e)
  );
};
O.createElement = ku;
O.createFactory = function (e) {
  var t = ku.bind(null, e);
  return ((t.type = e), t);
};
O.createRef = function () {
  return { current: null };
};
O.forwardRef = function (e) {
  return { $$typeof: Bc, render: e };
};
O.isValidElement = ui;
O.lazy = function (e) {
  return { $$typeof: Qc, _payload: { _status: -1, _result: e }, _init: Xc };
};
O.memo = function (e, t) {
  return { $$typeof: Wc, type: e, compare: t === void 0 ? null : t };
};
O.startTransition = function (e) {
  var t = Ar.transition;
  Ar.transition = {};
  try {
    e();
  } finally {
    Ar.transition = t;
  }
};
O.unstable_act = Nu;
O.useCallback = function (e, t) {
  return xe.current.useCallback(e, t);
};
O.useContext = function (e) {
  return xe.current.useContext(e);
};
O.useDebugValue = function () {};
O.useDeferredValue = function (e) {
  return xe.current.useDeferredValue(e);
};
O.useEffect = function (e, t) {
  return xe.current.useEffect(e, t);
};
O.useId = function () {
  return xe.current.useId();
};
O.useImperativeHandle = function (e, t, n) {
  return xe.current.useImperativeHandle(e, t, n);
};
O.useInsertionEffect = function (e, t) {
  return xe.current.useInsertionEffect(e, t);
};
O.useLayoutEffect = function (e, t) {
  return xe.current.useLayoutEffect(e, t);
};
O.useMemo = function (e, t) {
  return xe.current.useMemo(e, t);
};
O.useReducer = function (e, t, n) {
  return xe.current.useReducer(e, t, n);
};
O.useRef = function (e) {
  return xe.current.useRef(e);
};
O.useState = function (e) {
  return xe.current.useState(e);
};
O.useSyncExternalStore = function (e, t, n) {
  return xe.current.useSyncExternalStore(e, t, n);
};
O.useTransition = function () {
  return xe.current.useTransition();
};
O.version = "18.3.1";
hu.exports = O;
var N = hu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qc = N,
  Jc = Symbol.for("react.element"),
  ed = Symbol.for("react.fragment"),
  td = Object.prototype.hasOwnProperty,
  nd = qc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  rd = { key: !0, ref: !0, __self: !0, __source: !0 };
function ju(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  (n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref));
  for (r in t) td.call(t, r) && !rd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Jc,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: nd.current,
  };
}
wl.Fragment = ed;
wl.jsx = ju;
wl.jsxs = ju;
mu.exports = wl;
var s = mu.exports,
  _u = { exports: {} },
  De = {},
  Cu = { exports: {} },
  Eu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, M) {
    var T = _.length;
    _.push(M);
    e: for (; 0 < T; ) {
      var F = (T - 1) >>> 1,
        H = _[F];
      if (0 < l(H, M)) ((_[F] = M), (_[T] = H), (T = F));
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var M = _[0],
      T = _.pop();
    if (T !== M) {
      _[0] = T;
      e: for (var F = 0, H = _.length, ht = H >>> 1; F < ht; ) {
        var q = 2 * (F + 1) - 1,
          Ut = _[q],
          Ve = q + 1,
          gt = _[Ve];
        if (0 > l(Ut, T))
          Ve < H && 0 > l(gt, Ut)
            ? ((_[F] = gt), (_[Ve] = T), (F = Ve))
            : ((_[F] = Ut), (_[q] = T), (F = q));
        else if (Ve < H && 0 > l(gt, T)) ((_[F] = gt), (_[Ve] = T), (F = Ve));
        else break e;
      }
    }
    return M;
  }
  function l(_, M) {
    var T = _.sortIndex - M.sortIndex;
    return T !== 0 ? T : _.id - M.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var a = [],
    d = [],
    g = 1,
    h = null,
    f = 3,
    v = !1,
    x = !1,
    w = !1,
    z = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(_) {
    for (var M = n(d); M !== null; ) {
      if (M.callback === null) r(d);
      else if (M.startTime <= _)
        (r(d), (M.sortIndex = M.expirationTime), t(a, M));
      else break;
      M = n(d);
    }
  }
  function y(_) {
    if (((w = !1), p(_), !x))
      if (n(a) !== null) ((x = !0), rt(j));
      else {
        var M = n(d);
        M !== null && lt(y, M.startTime - _);
      }
  }
  function j(_, M) {
    ((x = !1), w && ((w = !1), m(L), (L = -1)), (v = !0));
    var T = f;
    try {
      for (
        p(M), h = n(a);
        h !== null && (!(h.expirationTime > M) || (_ && !re()));
      ) {
        var F = h.callback;
        if (typeof F == "function") {
          ((h.callback = null), (f = h.priorityLevel));
          var H = F(h.expirationTime <= M);
          ((M = e.unstable_now()),
            typeof H == "function" ? (h.callback = H) : h === n(a) && r(a),
            p(M));
        } else r(a);
        h = n(a);
      }
      if (h !== null) var ht = !0;
      else {
        var q = n(d);
        (q !== null && lt(y, q.startTime - M), (ht = !1));
      }
      return ht;
    } finally {
      ((h = null), (f = T), (v = !1));
    }
  }
  var k = !1,
    C = null,
    L = -1,
    b = 5,
    D = -1;
  function re() {
    return !(e.unstable_now() - D < b);
  }
  function Xe() {
    if (C !== null) {
      var _ = e.unstable_now();
      D = _;
      var M = !0;
      try {
        M = C(!0, _);
      } finally {
        M ? $e() : ((k = !1), (C = null));
      }
    } else k = !1;
  }
  var $e;
  if (typeof c == "function")
    $e = function () {
      c(Xe);
    };
  else if (typeof MessageChannel < "u") {
    var nt = new MessageChannel(),
      Ft = nt.port2;
    ((nt.port1.onmessage = Xe),
      ($e = function () {
        Ft.postMessage(null);
      }));
  } else
    $e = function () {
      z(Xe, 0);
    };
  function rt(_) {
    ((C = _), k || ((k = !0), $e()));
  }
  function lt(_, M) {
    L = z(function () {
      _(e.unstable_now());
    }, M);
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
      x || v || ((x = !0), rt(j));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (b = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (_) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = f;
      }
      var T = f;
      f = M;
      try {
        return _();
      } finally {
        f = T;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, M) {
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
      var T = f;
      f = _;
      try {
        return M();
      } finally {
        f = T;
      }
    }),
    (e.unstable_scheduleCallback = function (_, M, T) {
      var F = e.unstable_now();
      switch (
        (typeof T == "object" && T !== null
          ? ((T = T.delay), (T = typeof T == "number" && 0 < T ? F + T : F))
          : (T = F),
        _)
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
        (H = T + H),
        (_ = {
          id: g++,
          callback: M,
          priorityLevel: _,
          startTime: T,
          expirationTime: H,
          sortIndex: -1,
        }),
        T > F
          ? ((_.sortIndex = T),
            t(d, _),
            n(a) === null &&
              _ === n(d) &&
              (w ? (m(L), (L = -1)) : (w = !0), lt(y, T - F)))
          : ((_.sortIndex = H), t(a, _), x || v || ((x = !0), rt(j))),
        _
      );
    }),
    (e.unstable_shouldYield = re),
    (e.unstable_wrapCallback = function (_) {
      var M = f;
      return function () {
        var T = f;
        f = M;
        try {
          return _.apply(this, arguments);
        } finally {
          f = T;
        }
      };
    }));
})(Eu);
Cu.exports = Eu;
var ld = Cu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var od = N,
  Le = ld;
function S(e) {
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
var Pu = new Set(),
  Jn = {};
function qt(e, t) {
  (Sn(e, t), Sn(e + "Capture", t));
}
function Sn(e, t) {
  for (Jn[e] = t, e = 0; e < t.length; e++) Pu.add(t[e]);
}
var ct = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  po = Object.prototype.hasOwnProperty,
  id =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  os = {},
  is = {};
function sd(e) {
  return po.call(is, e)
    ? !0
    : po.call(os, e)
      ? !1
      : id.test(e)
        ? (is[e] = !0)
        : ((os[e] = !0), !1);
}
function ud(e, t, n, r) {
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
function ad(e, t, n, r) {
  if (t === null || typeof t > "u" || ud(e, t, n, r)) return !0;
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
function we(e, t, n, r, l, o, i) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i));
}
var de = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    de[e] = new we(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  de[t] = new we(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  de[e] = new we(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  de[e] = new we(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    de[e] = new we(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  de[e] = new we(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  de[e] = new we(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  de[e] = new we(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  de[e] = new we(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ai = /[\-:]([a-z])/g;
function ci(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ai, ci);
    de[t] = new we(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ai, ci);
    de[t] = new we(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ai, ci);
  de[t] = new we(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  de[e] = new we(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
de.xlinkHref = new we(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  de[e] = new we(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function di(e, t, n, r) {
  var l = de.hasOwnProperty(t) ? de[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (ad(t, n, l, r) && (n = null),
    r || l === null
      ? sd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var mt = od.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  kr = Symbol.for("react.element"),
  tn = Symbol.for("react.portal"),
  nn = Symbol.for("react.fragment"),
  fi = Symbol.for("react.strict_mode"),
  mo = Symbol.for("react.profiler"),
  Lu = Symbol.for("react.provider"),
  Du = Symbol.for("react.context"),
  pi = Symbol.for("react.forward_ref"),
  ho = Symbol.for("react.suspense"),
  go = Symbol.for("react.suspense_list"),
  mi = Symbol.for("react.memo"),
  vt = Symbol.for("react.lazy"),
  Iu = Symbol.for("react.offscreen"),
  ss = Symbol.iterator;
function Mn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ss && e[ss]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var X = Object.assign,
  $l;
function $n(e) {
  if ($l === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      $l = (t && t[1]) || "";
    }
  return (
    `
` +
    $l +
    e
  );
}
var Vl = !1;
function bl(e, t) {
  if (!e || Vl) return "";
  Vl = !0;
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
        } catch (d) {
          var r = d;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (d) {
          r = d;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (d) {
        r = d;
      }
      e();
    }
  } catch (d) {
    if (d && r && typeof d.stack == "string") {
      for (
        var l = d.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];
      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var a =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    ((Vl = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? $n(e) : "";
}
function cd(e) {
  switch (e.tag) {
    case 5:
      return $n(e.type);
    case 16:
      return $n("Lazy");
    case 13:
      return $n("Suspense");
    case 19:
      return $n("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = bl(e.type, !1)), e);
    case 11:
      return ((e = bl(e.type.render, !1)), e);
    case 1:
      return ((e = bl(e.type, !0)), e);
    default:
      return "";
  }
}
function yo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case nn:
      return "Fragment";
    case tn:
      return "Portal";
    case mo:
      return "Profiler";
    case fi:
      return "StrictMode";
    case ho:
      return "Suspense";
    case go:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Du:
        return (e.displayName || "Context") + ".Consumer";
      case Lu:
        return (e._context.displayName || "Context") + ".Provider";
      case pi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case mi:
        return (
          (t = e.displayName || null),
          t !== null ? t : yo(e.type) || "Memo"
        );
      case vt:
        ((t = e._payload), (e = e._init));
        try {
          return yo(e(t));
        } catch {}
    }
  return null;
}
function dd(e) {
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
      return yo(t);
    case 8:
      return t === fi ? "StrictMode" : "Mode";
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
function Mu(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function fd(e) {
  var t = Mu(e) ? "checked" : "value",
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
function Nr(e) {
  e._valueTracker || (e._valueTracker = fd(e));
}
function Tu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Mu(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Xr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function vo(e, t) {
  var n = t.checked;
  return X({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function us(e, t) {
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
function zu(e, t) {
  ((t = t.checked), t != null && di(e, "checked", t, !1));
}
function xo(e, t) {
  zu(e, t);
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
    ? wo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && wo(e, t.type, Mt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function as(e, t, n) {
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
function wo(e, t, n) {
  (t !== "number" || Xr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Vn = Array.isArray;
function hn(e, t, n, r) {
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
function So(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return X({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function cs(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(S(92));
      if (Vn(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: Mt(n) };
}
function Ru(e, t) {
  var n = Mt(t.value),
    r = Mt(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function ds(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ou(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ko(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ou(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var jr,
  Fu = (function (e) {
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
        jr = jr || document.createElement("div"),
          jr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = jr.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function er(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Hn = {
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
  pd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Hn).forEach(function (e) {
  pd.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Hn[t] = Hn[e]));
  });
});
function Uu(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Hn.hasOwnProperty(e) && Hn[e])
      ? ("" + t).trim()
      : t + "px";
}
function Au(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Uu(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l));
    }
}
var md = X(
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
function No(e, t) {
  if (t) {
    if (md[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function jo(e, t) {
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
var _o = null;
function hi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Co = null,
  gn = null,
  yn = null;
function fs(e) {
  if ((e = xr(e))) {
    if (typeof Co != "function") throw Error(S(280));
    var t = e.stateNode;
    t && ((t = _l(t)), Co(e.stateNode, e.type, t));
  }
}
function $u(e) {
  gn ? (yn ? yn.push(e) : (yn = [e])) : (gn = e);
}
function Vu() {
  if (gn) {
    var e = gn,
      t = yn;
    if (((yn = gn = null), fs(e), t)) for (e = 0; e < t.length; e++) fs(t[e]);
  }
}
function bu(e, t) {
  return e(t);
}
function Bu() {}
var Bl = !1;
function Hu(e, t, n) {
  if (Bl) return e(t, n);
  Bl = !0;
  try {
    return bu(e, t, n);
  } finally {
    ((Bl = !1), (gn !== null || yn !== null) && (Bu(), Vu()));
  }
}
function tr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = _l(n);
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
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var Eo = !1;
if (ct)
  try {
    var Tn = {};
    (Object.defineProperty(Tn, "passive", {
      get: function () {
        Eo = !0;
      },
    }),
      window.addEventListener("test", Tn, Tn),
      window.removeEventListener("test", Tn, Tn));
  } catch {
    Eo = !1;
  }
function hd(e, t, n, r, l, o, i, u, a) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (g) {
    this.onError(g);
  }
}
var Wn = !1,
  Zr = null,
  qr = !1,
  Po = null,
  gd = {
    onError: function (e) {
      ((Wn = !0), (Zr = e));
    },
  };
function yd(e, t, n, r, l, o, i, u, a) {
  ((Wn = !1), (Zr = null), hd.apply(gd, arguments));
}
function vd(e, t, n, r, l, o, i, u, a) {
  if ((yd.apply(this, arguments), Wn)) {
    if (Wn) {
      var d = Zr;
      ((Wn = !1), (Zr = null));
    } else throw Error(S(198));
    qr || ((qr = !0), (Po = d));
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
function Wu(e) {
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
function ps(e) {
  if (Jt(e) !== e) throw Error(S(188));
}
function xd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Jt(e)), t === null)) throw Error(S(188));
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
        if (o === n) return (ps(l), e);
        if (o === r) return (ps(l), t);
        o = o.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) ((n = l), (r = o));
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          ((i = !0), (n = l), (r = o));
          break;
        }
        if (u === r) {
          ((i = !0), (r = l), (n = o));
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            ((i = !0), (n = o), (r = l));
            break;
          }
          if (u === r) {
            ((i = !0), (r = o), (n = l));
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function Qu(e) {
  return ((e = xd(e)), e !== null ? Gu(e) : null);
}
function Gu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Gu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ku = Le.unstable_scheduleCallback,
  ms = Le.unstable_cancelCallback,
  wd = Le.unstable_shouldYield,
  Sd = Le.unstable_requestPaint,
  J = Le.unstable_now,
  kd = Le.unstable_getCurrentPriorityLevel,
  gi = Le.unstable_ImmediatePriority,
  Yu = Le.unstable_UserBlockingPriority,
  Jr = Le.unstable_NormalPriority,
  Nd = Le.unstable_LowPriority,
  Xu = Le.unstable_IdlePriority,
  Sl = null,
  et = null;
function jd(e) {
  if (et && typeof et.onCommitFiberRoot == "function")
    try {
      et.onCommitFiberRoot(Sl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ge = Math.clz32 ? Math.clz32 : Ed,
  _d = Math.log,
  Cd = Math.LN2;
function Ed(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((_d(e) / Cd) | 0)) | 0);
}
var _r = 64,
  Cr = 4194304;
function bn(e) {
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
function el(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = bn(u)) : ((o &= i), o !== 0 && (r = bn(o)));
  } else ((i = n & ~l), i !== 0 ? (r = bn(i)) : o !== 0 && (r = bn(o)));
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
      ((n = 31 - Ge(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
  return r;
}
function Pd(e, t) {
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
function Ld(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;
  ) {
    var i = 31 - Ge(o),
      u = 1 << i,
      a = l[i];
    (a === -1
      ? (!(u & n) || u & r) && (l[i] = Pd(u, t))
      : a <= t && (e.expiredLanes |= u),
      (o &= ~u));
  }
}
function Lo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Zu() {
  var e = _r;
  return ((_r <<= 1), !(_r & 4194240) && (_r = 64), e);
}
function Hl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function yr(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ge(t)),
    (e[t] = n));
}
function Dd(e, t) {
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
    var l = 31 - Ge(n),
      o = 1 << l;
    ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o));
  }
}
function yi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ge(n),
      l = 1 << r;
    ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
  }
}
var V = 0;
function qu(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Ju,
  vi,
  ea,
  ta,
  na,
  Do = !1,
  Er = [],
  jt = null,
  _t = null,
  Ct = null,
  nr = new Map(),
  rr = new Map(),
  wt = [],
  Id =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function hs(e, t) {
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
      Ct = null;
      break;
    case "pointerover":
    case "pointerout":
      nr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      rr.delete(t.pointerId);
  }
}
function zn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = xr(t)), t !== null && vi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Md(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ((jt = zn(jt, e, t, n, r, l)), !0);
    case "dragenter":
      return ((_t = zn(_t, e, t, n, r, l)), !0);
    case "mouseover":
      return ((Ct = zn(Ct, e, t, n, r, l)), !0);
    case "pointerover":
      var o = l.pointerId;
      return (nr.set(o, zn(nr.get(o) || null, e, t, n, r, l)), !0);
    case "gotpointercapture":
      return (
        (o = l.pointerId),
        rr.set(o, zn(rr.get(o) || null, e, t, n, r, l)),
        !0
      );
  }
  return !1;
}
function ra(e) {
  var t = bt(e.target);
  if (t !== null) {
    var n = Jt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Wu(n)), t !== null)) {
          ((e.blockedOn = t),
            na(e.priority, function () {
              ea(n);
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
function $r(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Io(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((_o = r), n.target.dispatchEvent(r), (_o = null));
    } else return ((t = xr(n)), t !== null && vi(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function gs(e, t, n) {
  $r(e) && n.delete(t);
}
function Td() {
  ((Do = !1),
    jt !== null && $r(jt) && (jt = null),
    _t !== null && $r(_t) && (_t = null),
    Ct !== null && $r(Ct) && (Ct = null),
    nr.forEach(gs),
    rr.forEach(gs));
}
function Rn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Do ||
      ((Do = !0),
      Le.unstable_scheduleCallback(Le.unstable_NormalPriority, Td)));
}
function lr(e) {
  function t(l) {
    return Rn(l, e);
  }
  if (0 < Er.length) {
    Rn(Er[0], e);
    for (var n = 1; n < Er.length; n++) {
      var r = Er[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    jt !== null && Rn(jt, e),
      _t !== null && Rn(_t, e),
      Ct !== null && Rn(Ct, e),
      nr.forEach(t),
      rr.forEach(t),
      n = 0;
    n < wt.length;
    n++
  )
    ((r = wt[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < wt.length && ((n = wt[0]), n.blockedOn === null); )
    (ra(n), n.blockedOn === null && wt.shift());
}
var vn = mt.ReactCurrentBatchConfig,
  tl = !0;
function zd(e, t, n, r) {
  var l = V,
    o = vn.transition;
  vn.transition = null;
  try {
    ((V = 1), xi(e, t, n, r));
  } finally {
    ((V = l), (vn.transition = o));
  }
}
function Rd(e, t, n, r) {
  var l = V,
    o = vn.transition;
  vn.transition = null;
  try {
    ((V = 4), xi(e, t, n, r));
  } finally {
    ((V = l), (vn.transition = o));
  }
}
function xi(e, t, n, r) {
  if (tl) {
    var l = Io(e, t, n, r);
    if (l === null) (eo(e, t, r, nl, n), hs(e, r));
    else if (Md(l, e, t, n, r)) r.stopPropagation();
    else if ((hs(e, r), t & 4 && -1 < Id.indexOf(e))) {
      for (; l !== null; ) {
        var o = xr(l);
        if (
          (o !== null && Ju(o),
          (o = Io(e, t, n, r)),
          o === null && eo(e, t, r, nl, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else eo(e, t, r, null, n);
  }
}
var nl = null;
function Io(e, t, n, r) {
  if (((nl = null), (e = hi(r)), (e = bt(e)), e !== null))
    if (((t = Jt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Wu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((nl = e), null);
}
function la(e) {
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
      switch (kd()) {
        case gi:
          return 1;
        case Yu:
          return 4;
        case Jr:
        case Nd:
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
var kt = null,
  wi = null,
  Vr = null;
function oa() {
  if (Vr) return Vr;
  var e,
    t = wi,
    n = t.length,
    r,
    l = "value" in kt ? kt.value : kt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Vr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function br(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Pr() {
  return !0;
}
function ys() {
  return !1;
}
function Ie(e) {
  function t(n, r, l, o, i) {
    ((this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null));
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Pr
        : ys),
      (this.isPropagationStopped = ys),
      this
    );
  }
  return (
    X(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Pr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Pr));
      },
      persist: function () {},
      isPersistent: Pr,
    }),
    t
  );
}
var Ln = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Si = Ie(Ln),
  vr = X({}, Ln, { view: 0, detail: 0 }),
  Od = Ie(vr),
  Wl,
  Ql,
  On,
  kl = X({}, vr, {
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
    getModifierState: ki,
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
        : (e !== On &&
            (On && e.type === "mousemove"
              ? ((Wl = e.screenX - On.screenX), (Ql = e.screenY - On.screenY))
              : (Ql = Wl = 0),
            (On = e)),
          Wl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ql;
    },
  }),
  vs = Ie(kl),
  Fd = X({}, kl, { dataTransfer: 0 }),
  Ud = Ie(Fd),
  Ad = X({}, vr, { relatedTarget: 0 }),
  Gl = Ie(Ad),
  $d = X({}, Ln, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Vd = Ie($d),
  bd = X({}, Ln, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Bd = Ie(bd),
  Hd = X({}, Ln, { data: 0 }),
  xs = Ie(Hd),
  Wd = {
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
  Qd = {
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
  Gd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Kd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Gd[e]) ? !!t[e] : !1;
}
function ki() {
  return Kd;
}
var Yd = X({}, vr, {
    key: function (e) {
      if (e.key) {
        var t = Wd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = br(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Qd[e.keyCode] || "Unidentified"
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
    getModifierState: ki,
    charCode: function (e) {
      return e.type === "keypress" ? br(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? br(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Xd = Ie(Yd),
  Zd = X({}, kl, {
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
  ws = Ie(Zd),
  qd = X({}, vr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ki,
  }),
  Jd = Ie(qd),
  ef = X({}, Ln, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  tf = Ie(ef),
  nf = X({}, kl, {
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
  rf = Ie(nf),
  lf = [9, 13, 27, 32],
  Ni = ct && "CompositionEvent" in window,
  Qn = null;
ct && "documentMode" in document && (Qn = document.documentMode);
var of = ct && "TextEvent" in window && !Qn,
  ia = ct && (!Ni || (Qn && 8 < Qn && 11 >= Qn)),
  Ss = " ",
  ks = !1;
function sa(e, t) {
  switch (e) {
    case "keyup":
      return lf.indexOf(t.keyCode) !== -1;
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
function ua(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var rn = !1;
function sf(e, t) {
  switch (e) {
    case "compositionend":
      return ua(t);
    case "keypress":
      return t.which !== 32 ? null : ((ks = !0), Ss);
    case "textInput":
      return ((e = t.data), e === Ss && ks ? null : e);
    default:
      return null;
  }
}
function uf(e, t) {
  if (rn)
    return e === "compositionend" || (!Ni && sa(e, t))
      ? ((e = oa()), (Vr = wi = kt = null), (rn = !1), e)
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
      return ia && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var af = {
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
function Ns(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!af[e.type] : t === "textarea";
}
function aa(e, t, n, r) {
  ($u(r),
    (t = rl(t, "onChange")),
    0 < t.length &&
      ((n = new Si("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var Gn = null,
  or = null;
function cf(e) {
  wa(e, 0);
}
function Nl(e) {
  var t = sn(e);
  if (Tu(t)) return e;
}
function df(e, t) {
  if (e === "change") return t;
}
var ca = !1;
if (ct) {
  var Kl;
  if (ct) {
    var Yl = "oninput" in document;
    if (!Yl) {
      var js = document.createElement("div");
      (js.setAttribute("oninput", "return;"),
        (Yl = typeof js.oninput == "function"));
    }
    Kl = Yl;
  } else Kl = !1;
  ca = Kl && (!document.documentMode || 9 < document.documentMode);
}
function _s() {
  Gn && (Gn.detachEvent("onpropertychange", da), (or = Gn = null));
}
function da(e) {
  if (e.propertyName === "value" && Nl(or)) {
    var t = [];
    (aa(t, or, e, hi(e)), Hu(cf, t));
  }
}
function ff(e, t, n) {
  e === "focusin"
    ? (_s(), (Gn = t), (or = n), Gn.attachEvent("onpropertychange", da))
    : e === "focusout" && _s();
}
function pf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Nl(or);
}
function mf(e, t) {
  if (e === "click") return Nl(t);
}
function hf(e, t) {
  if (e === "input" || e === "change") return Nl(t);
}
function gf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ye = typeof Object.is == "function" ? Object.is : gf;
function ir(e, t) {
  if (Ye(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!po.call(t, l) || !Ye(e[l], t[l])) return !1;
  }
  return !0;
}
function Cs(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Es(e, t) {
  var n = Cs(e);
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
    n = Cs(n);
  }
}
function fa(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? fa(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function pa() {
  for (var e = window, t = Xr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Xr(e.document);
  }
  return t;
}
function ji(e) {
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
function yf(e) {
  var t = pa(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    fa(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ji(n)) {
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
          (l = Es(n, o)));
        var i = Es(n, r);
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
var vf = ct && "documentMode" in document && 11 >= document.documentMode,
  ln = null,
  Mo = null,
  Kn = null,
  To = !1;
function Ps(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  To ||
    ln == null ||
    ln !== Xr(r) ||
    ((r = ln),
    "selectionStart" in r && ji(r)
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
    (Kn && ir(Kn, r)) ||
      ((Kn = r),
      (r = rl(Mo, "onSelect")),
      0 < r.length &&
        ((t = new Si("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = ln))));
}
function Lr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var on = {
    animationend: Lr("Animation", "AnimationEnd"),
    animationiteration: Lr("Animation", "AnimationIteration"),
    animationstart: Lr("Animation", "AnimationStart"),
    transitionend: Lr("Transition", "TransitionEnd"),
  },
  Xl = {},
  ma = {};
ct &&
  ((ma = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete on.animationend.animation,
    delete on.animationiteration.animation,
    delete on.animationstart.animation),
  "TransitionEvent" in window || delete on.transitionend.transition);
function jl(e) {
  if (Xl[e]) return Xl[e];
  if (!on[e]) return e;
  var t = on[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ma) return (Xl[e] = t[n]);
  return e;
}
var ha = jl("animationend"),
  ga = jl("animationiteration"),
  ya = jl("animationstart"),
  va = jl("transitionend"),
  xa = new Map(),
  Ls =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function zt(e, t) {
  (xa.set(e, t), qt(t, [e]));
}
for (var Zl = 0; Zl < Ls.length; Zl++) {
  var ql = Ls[Zl],
    xf = ql.toLowerCase(),
    wf = ql[0].toUpperCase() + ql.slice(1);
  zt(xf, "on" + wf);
}
zt(ha, "onAnimationEnd");
zt(ga, "onAnimationIteration");
zt(ya, "onAnimationStart");
zt("dblclick", "onDoubleClick");
zt("focusin", "onFocus");
zt("focusout", "onBlur");
zt(va, "onTransitionEnd");
Sn("onMouseEnter", ["mouseout", "mouseover"]);
Sn("onMouseLeave", ["mouseout", "mouseover"]);
Sn("onPointerEnter", ["pointerout", "pointerover"]);
Sn("onPointerLeave", ["pointerout", "pointerover"]);
qt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
qt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
qt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
qt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
qt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
qt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Bn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Sf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Bn));
function Ds(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), vd(r, t, void 0, e), (e.currentTarget = null));
}
function wa(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            a = u.instance,
            d = u.currentTarget;
          if (((u = u.listener), a !== o && l.isPropagationStopped())) break e;
          (Ds(l, u, d), (o = a));
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (a = u.instance),
            (d = u.currentTarget),
            (u = u.listener),
            a !== o && l.isPropagationStopped())
          )
            break e;
          (Ds(l, u, d), (o = a));
        }
    }
  }
  if (qr) throw ((e = Po), (qr = !1), (Po = null), e);
}
function W(e, t) {
  var n = t[Uo];
  n === void 0 && (n = t[Uo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Sa(t, e, 2, !1), n.add(r));
}
function Jl(e, t, n) {
  var r = 0;
  (t && (r |= 4), Sa(n, e, r, t));
}
var Dr = "_reactListening" + Math.random().toString(36).slice(2);
function sr(e) {
  if (!e[Dr]) {
    ((e[Dr] = !0),
      Pu.forEach(function (n) {
        n !== "selectionchange" && (Sf.has(n) || Jl(n, !1, e), Jl(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Dr] || ((t[Dr] = !0), Jl("selectionchange", !1, t));
  }
}
function Sa(e, t, n, r) {
  switch (la(t)) {
    case 1:
      var l = zd;
      break;
    case 4:
      l = Rd;
      break;
    default:
      l = xi;
  }
  ((n = l.bind(null, t, n, e)),
    (l = void 0),
    !Eo ||
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
function eo(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = bt(u)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Hu(function () {
    var d = o,
      g = hi(n),
      h = [];
    e: {
      var f = xa.get(e);
      if (f !== void 0) {
        var v = Si,
          x = e;
        switch (e) {
          case "keypress":
            if (br(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Xd;
            break;
          case "focusin":
            ((x = "focus"), (v = Gl));
            break;
          case "focusout":
            ((x = "blur"), (v = Gl));
            break;
          case "beforeblur":
          case "afterblur":
            v = Gl;
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
            v = vs;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Ud;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Jd;
            break;
          case ha:
          case ga:
          case ya:
            v = Vd;
            break;
          case va:
            v = tf;
            break;
          case "scroll":
            v = Od;
            break;
          case "wheel":
            v = rf;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Bd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = ws;
        }
        var w = (t & 4) !== 0,
          z = !w && e === "scroll",
          m = w ? (f !== null ? f + "Capture" : null) : f;
        w = [];
        for (var c = d, p; c !== null; ) {
          p = c;
          var y = p.stateNode;
          if (
            (p.tag === 5 &&
              y !== null &&
              ((p = y),
              m !== null && ((y = tr(c, m)), y != null && w.push(ur(c, y, p)))),
            z)
          )
            break;
          c = c.return;
        }
        0 < w.length &&
          ((f = new v(f, x, null, n, g)), h.push({ event: f, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          f &&
            n !== _o &&
            (x = n.relatedTarget || n.fromElement) &&
            (bt(x) || x[dt]))
        )
          break e;
        if (
          (v || f) &&
          ((f =
            g.window === g
              ? g
              : (f = g.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
          v
            ? ((x = n.relatedTarget || n.toElement),
              (v = d),
              (x = x ? bt(x) : null),
              x !== null &&
                ((z = Jt(x)), x !== z || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((v = null), (x = d)),
          v !== x)
        ) {
          if (
            ((w = vs),
            (y = "onMouseLeave"),
            (m = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = ws),
              (y = "onPointerLeave"),
              (m = "onPointerEnter"),
              (c = "pointer")),
            (z = v == null ? f : sn(v)),
            (p = x == null ? f : sn(x)),
            (f = new w(y, c + "leave", v, n, g)),
            (f.target = z),
            (f.relatedTarget = p),
            (y = null),
            bt(g) === d &&
              ((w = new w(m, c + "enter", x, n, g)),
              (w.target = p),
              (w.relatedTarget = z),
              (y = w)),
            (z = y),
            v && x)
          )
            t: {
              for (w = v, m = x, c = 0, p = w; p; p = en(p)) c++;
              for (p = 0, y = m; y; y = en(y)) p++;
              for (; 0 < c - p; ) ((w = en(w)), c--);
              for (; 0 < p - c; ) ((m = en(m)), p--);
              for (; c--; ) {
                if (w === m || (m !== null && w === m.alternate)) break t;
                ((w = en(w)), (m = en(m)));
              }
              w = null;
            }
          else w = null;
          (v !== null && Is(h, f, v, w, !1),
            x !== null && z !== null && Is(h, z, x, w, !0));
        }
      }
      e: {
        if (
          ((f = d ? sn(d) : window),
          (v = f.nodeName && f.nodeName.toLowerCase()),
          v === "select" || (v === "input" && f.type === "file"))
        )
          var j = df;
        else if (Ns(f))
          if (ca) j = hf;
          else {
            j = pf;
            var k = ff;
          }
        else
          (v = f.nodeName) &&
            v.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (j = mf);
        if (j && (j = j(e, d))) {
          aa(h, j, n, g);
          break e;
        }
        (k && k(e, f, d),
          e === "focusout" &&
            (k = f._wrapperState) &&
            k.controlled &&
            f.type === "number" &&
            wo(f, "number", f.value));
      }
      switch (((k = d ? sn(d) : window), e)) {
        case "focusin":
          (Ns(k) || k.contentEditable === "true") &&
            ((ln = k), (Mo = d), (Kn = null));
          break;
        case "focusout":
          Kn = Mo = ln = null;
          break;
        case "mousedown":
          To = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((To = !1), Ps(h, n, g));
          break;
        case "selectionchange":
          if (vf) break;
        case "keydown":
        case "keyup":
          Ps(h, n, g);
      }
      var C;
      if (Ni)
        e: {
          switch (e) {
            case "compositionstart":
              var L = "onCompositionStart";
              break e;
            case "compositionend":
              L = "onCompositionEnd";
              break e;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break e;
          }
          L = void 0;
        }
      else
        rn
          ? sa(e, n) && (L = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      (L &&
        (ia &&
          n.locale !== "ko" &&
          (rn || L !== "onCompositionStart"
            ? L === "onCompositionEnd" && rn && (C = oa())
            : ((kt = g),
              (wi = "value" in kt ? kt.value : kt.textContent),
              (rn = !0))),
        (k = rl(d, L)),
        0 < k.length &&
          ((L = new xs(L, e, null, n, g)),
          h.push({ event: L, listeners: k }),
          C ? (L.data = C) : ((C = ua(n)), C !== null && (L.data = C)))),
        (C = of ? sf(e, n) : uf(e, n)) &&
          ((d = rl(d, "onBeforeInput")),
          0 < d.length &&
            ((g = new xs("onBeforeInput", "beforeinput", null, n, g)),
            h.push({ event: g, listeners: d }),
            (g.data = C))));
    }
    wa(h, t);
  });
}
function ur(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function rl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    (l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = tr(e, n)),
      o != null && r.unshift(ur(e, o, l)),
      (o = tr(e, t)),
      o != null && r.push(ur(e, o, l))),
      (e = e.return));
  }
  return r;
}
function en(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Is(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      a = u.alternate,
      d = u.stateNode;
    if (a !== null && a === r) break;
    (u.tag === 5 &&
      d !== null &&
      ((u = d),
      l
        ? ((a = tr(n, o)), a != null && i.unshift(ur(n, a, u)))
        : l || ((a = tr(n, o)), a != null && i.push(ur(n, a, u)))),
      (n = n.return));
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var kf = /\r\n?/g,
  Nf = /\u0000|\uFFFD/g;
function Ms(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      kf,
      `
`,
    )
    .replace(Nf, "");
}
function Ir(e, t, n) {
  if (((t = Ms(t)), Ms(e) !== t && n)) throw Error(S(425));
}
function ll() {}
var zo = null,
  Ro = null;
function Oo(e, t) {
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
var Fo = typeof setTimeout == "function" ? setTimeout : void 0,
  jf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ts = typeof Promise == "function" ? Promise : void 0,
  _f =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ts < "u"
        ? function (e) {
            return Ts.resolve(null).then(e).catch(Cf);
          }
        : Fo;
function Cf(e) {
  setTimeout(function () {
    throw e;
  });
}
function to(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(l), lr(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  lr(t);
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
function zs(e) {
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
var Dn = Math.random().toString(36).slice(2),
  Je = "__reactFiber$" + Dn,
  ar = "__reactProps$" + Dn,
  dt = "__reactContainer$" + Dn,
  Uo = "__reactEvents$" + Dn,
  Ef = "__reactListeners$" + Dn,
  Pf = "__reactHandles$" + Dn;
function bt(e) {
  var t = e[Je];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[dt] || n[Je])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = zs(e); e !== null; ) {
          if ((n = e[Je])) return n;
          e = zs(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function xr(e) {
  return (
    (e = e[Je] || e[dt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function sn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function _l(e) {
  return e[ar] || null;
}
var Ao = [],
  un = -1;
function Rt(e) {
  return { current: e };
}
function Q(e) {
  0 > un || ((e.current = Ao[un]), (Ao[un] = null), un--);
}
function B(e, t) {
  (un++, (Ao[un] = e.current), (e.current = t));
}
var Tt = {},
  he = Rt(Tt),
  Ne = Rt(!1),
  Gt = Tt;
function kn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Tt;
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
function je(e) {
  return ((e = e.childContextTypes), e != null);
}
function ol() {
  (Q(Ne), Q(he));
}
function Rs(e, t, n) {
  if (he.current !== Tt) throw Error(S(168));
  (B(he, t), B(Ne, n));
}
function ka(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(S(108, dd(e) || "Unknown", l));
  return X({}, n, r);
}
function il(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Tt),
    (Gt = he.current),
    B(he, e),
    B(Ne, Ne.current),
    !0
  );
}
function Os(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  (n
    ? ((e = ka(e, t, Gt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Q(Ne),
      Q(he),
      B(he, e))
    : Q(Ne),
    B(Ne, n));
}
var it = null,
  Cl = !1,
  no = !1;
function Na(e) {
  it === null ? (it = [e]) : it.push(e);
}
function Lf(e) {
  ((Cl = !0), Na(e));
}
function Ot() {
  if (!no && it !== null) {
    no = !0;
    var e = 0,
      t = V;
    try {
      var n = it;
      for (V = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((it = null), (Cl = !1));
    } catch (l) {
      throw (it !== null && (it = it.slice(e + 1)), Ku(gi, Ot), l);
    } finally {
      ((V = t), (no = !1));
    }
  }
  return null;
}
var an = [],
  cn = 0,
  sl = null,
  ul = 0,
  Te = [],
  ze = 0,
  Kt = null,
  st = 1,
  ut = "";
function $t(e, t) {
  ((an[cn++] = ul), (an[cn++] = sl), (sl = e), (ul = t));
}
function ja(e, t, n) {
  ((Te[ze++] = st), (Te[ze++] = ut), (Te[ze++] = Kt), (Kt = e));
  var r = st;
  e = ut;
  var l = 32 - Ge(r) - 1;
  ((r &= ~(1 << l)), (n += 1));
  var o = 32 - Ge(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    ((o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (st = (1 << (32 - Ge(t) + l)) | (n << l) | r),
      (ut = o + e));
  } else ((st = (1 << o) | (n << l) | r), (ut = e));
}
function _i(e) {
  e.return !== null && ($t(e, 1), ja(e, 1, 0));
}
function Ci(e) {
  for (; e === sl; )
    ((sl = an[--cn]), (an[cn] = null), (ul = an[--cn]), (an[cn] = null));
  for (; e === Kt; )
    ((Kt = Te[--ze]),
      (Te[ze] = null),
      (ut = Te[--ze]),
      (Te[ze] = null),
      (st = Te[--ze]),
      (Te[ze] = null));
}
var Pe = null,
  Ee = null,
  G = !1,
  Qe = null;
function _a(e, t) {
  var n = Re(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Fs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Pe = e), (Ee = Et(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Pe = e), (Ee = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Kt !== null ? { id: st, overflow: ut } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Re(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Pe = e),
            (Ee = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function $o(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Vo(e) {
  if (G) {
    var t = Ee;
    if (t) {
      var n = t;
      if (!Fs(e, t)) {
        if ($o(e)) throw Error(S(418));
        t = Et(n.nextSibling);
        var r = Pe;
        t && Fs(e, t)
          ? _a(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (G = !1), (Pe = e));
      }
    } else {
      if ($o(e)) throw Error(S(418));
      ((e.flags = (e.flags & -4097) | 2), (G = !1), (Pe = e));
    }
  }
}
function Us(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Pe = e;
}
function Mr(e) {
  if (e !== Pe) return !1;
  if (!G) return (Us(e), (G = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Oo(e.type, e.memoizedProps))),
    t && (t = Ee))
  ) {
    if ($o(e)) throw (Ca(), Error(S(418)));
    for (; t; ) (_a(e, t), (t = Et(t.nextSibling)));
  }
  if ((Us(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ee = Et(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ee = null;
    }
  } else Ee = Pe ? Et(e.stateNode.nextSibling) : null;
  return !0;
}
function Ca() {
  for (var e = Ee; e; ) e = Et(e.nextSibling);
}
function Nn() {
  ((Ee = Pe = null), (G = !1));
}
function Ei(e) {
  Qe === null ? (Qe = [e]) : Qe.push(e);
}
var Df = mt.ReactCurrentBatchConfig;
function Fn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function Tr(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      S(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function As(e) {
  var t = e._init;
  return t(e._payload);
}
function Ea(e) {
  function t(m, c) {
    if (e) {
      var p = m.deletions;
      p === null ? ((m.deletions = [c]), (m.flags |= 16)) : p.push(c);
    }
  }
  function n(m, c) {
    if (!e) return null;
    for (; c !== null; ) (t(m, c), (c = c.sibling));
    return null;
  }
  function r(m, c) {
    for (m = new Map(); c !== null; )
      (c.key !== null ? m.set(c.key, c) : m.set(c.index, c), (c = c.sibling));
    return m;
  }
  function l(m, c) {
    return ((m = It(m, c)), (m.index = 0), (m.sibling = null), m);
  }
  function o(m, c, p) {
    return (
      (m.index = p),
      e
        ? ((p = m.alternate),
          p !== null
            ? ((p = p.index), p < c ? ((m.flags |= 2), c) : p)
            : ((m.flags |= 2), c))
        : ((m.flags |= 1048576), c)
    );
  }
  function i(m) {
    return (e && m.alternate === null && (m.flags |= 2), m);
  }
  function u(m, c, p, y) {
    return c === null || c.tag !== 6
      ? ((c = ao(p, m.mode, y)), (c.return = m), c)
      : ((c = l(c, p)), (c.return = m), c);
  }
  function a(m, c, p, y) {
    var j = p.type;
    return j === nn
      ? g(m, c, p.props.children, y, p.key)
      : c !== null &&
          (c.elementType === j ||
            (typeof j == "object" &&
              j !== null &&
              j.$$typeof === vt &&
              As(j) === c.type))
        ? ((y = l(c, p.props)), (y.ref = Fn(m, c, p)), (y.return = m), y)
        : ((y = Yr(p.type, p.key, p.props, null, m.mode, y)),
          (y.ref = Fn(m, c, p)),
          (y.return = m),
          y);
  }
  function d(m, c, p, y) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = co(p, m.mode, y)), (c.return = m), c)
      : ((c = l(c, p.children || [])), (c.return = m), c);
  }
  function g(m, c, p, y, j) {
    return c === null || c.tag !== 7
      ? ((c = Qt(p, m.mode, y, j)), (c.return = m), c)
      : ((c = l(c, p)), (c.return = m), c);
  }
  function h(m, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return ((c = ao("" + c, m.mode, p)), (c.return = m), c);
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case kr:
          return (
            (p = Yr(c.type, c.key, c.props, null, m.mode, p)),
            (p.ref = Fn(m, null, c)),
            (p.return = m),
            p
          );
        case tn:
          return ((c = co(c, m.mode, p)), (c.return = m), c);
        case vt:
          var y = c._init;
          return h(m, y(c._payload), p);
      }
      if (Vn(c) || Mn(c))
        return ((c = Qt(c, m.mode, p, null)), (c.return = m), c);
      Tr(m, c);
    }
    return null;
  }
  function f(m, c, p, y) {
    var j = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return j !== null ? null : u(m, c, "" + p, y);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case kr:
          return p.key === j ? a(m, c, p, y) : null;
        case tn:
          return p.key === j ? d(m, c, p, y) : null;
        case vt:
          return ((j = p._init), f(m, c, j(p._payload), y));
      }
      if (Vn(p) || Mn(p)) return j !== null ? null : g(m, c, p, y, null);
      Tr(m, p);
    }
    return null;
  }
  function v(m, c, p, y, j) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return ((m = m.get(p) || null), u(c, m, "" + y, j));
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case kr:
          return (
            (m = m.get(y.key === null ? p : y.key) || null),
            a(c, m, y, j)
          );
        case tn:
          return (
            (m = m.get(y.key === null ? p : y.key) || null),
            d(c, m, y, j)
          );
        case vt:
          var k = y._init;
          return v(m, c, p, k(y._payload), j);
      }
      if (Vn(y) || Mn(y)) return ((m = m.get(p) || null), g(c, m, y, j, null));
      Tr(c, y);
    }
    return null;
  }
  function x(m, c, p, y) {
    for (
      var j = null, k = null, C = c, L = (c = 0), b = null;
      C !== null && L < p.length;
      L++
    ) {
      C.index > L ? ((b = C), (C = null)) : (b = C.sibling);
      var D = f(m, C, p[L], y);
      if (D === null) {
        C === null && (C = b);
        break;
      }
      (e && C && D.alternate === null && t(m, C),
        (c = o(D, c, L)),
        k === null ? (j = D) : (k.sibling = D),
        (k = D),
        (C = b));
    }
    if (L === p.length) return (n(m, C), G && $t(m, L), j);
    if (C === null) {
      for (; L < p.length; L++)
        ((C = h(m, p[L], y)),
          C !== null &&
            ((c = o(C, c, L)),
            k === null ? (j = C) : (k.sibling = C),
            (k = C)));
      return (G && $t(m, L), j);
    }
    for (C = r(m, C); L < p.length; L++)
      ((b = v(C, m, L, p[L], y)),
        b !== null &&
          (e && b.alternate !== null && C.delete(b.key === null ? L : b.key),
          (c = o(b, c, L)),
          k === null ? (j = b) : (k.sibling = b),
          (k = b)));
    return (
      e &&
        C.forEach(function (re) {
          return t(m, re);
        }),
      G && $t(m, L),
      j
    );
  }
  function w(m, c, p, y) {
    var j = Mn(p);
    if (typeof j != "function") throw Error(S(150));
    if (((p = j.call(p)), p == null)) throw Error(S(151));
    for (
      var k = (j = null), C = c, L = (c = 0), b = null, D = p.next();
      C !== null && !D.done;
      L++, D = p.next()
    ) {
      C.index > L ? ((b = C), (C = null)) : (b = C.sibling);
      var re = f(m, C, D.value, y);
      if (re === null) {
        C === null && (C = b);
        break;
      }
      (e && C && re.alternate === null && t(m, C),
        (c = o(re, c, L)),
        k === null ? (j = re) : (k.sibling = re),
        (k = re),
        (C = b));
    }
    if (D.done) return (n(m, C), G && $t(m, L), j);
    if (C === null) {
      for (; !D.done; L++, D = p.next())
        ((D = h(m, D.value, y)),
          D !== null &&
            ((c = o(D, c, L)),
            k === null ? (j = D) : (k.sibling = D),
            (k = D)));
      return (G && $t(m, L), j);
    }
    for (C = r(m, C); !D.done; L++, D = p.next())
      ((D = v(C, m, L, D.value, y)),
        D !== null &&
          (e && D.alternate !== null && C.delete(D.key === null ? L : D.key),
          (c = o(D, c, L)),
          k === null ? (j = D) : (k.sibling = D),
          (k = D)));
    return (
      e &&
        C.forEach(function (Xe) {
          return t(m, Xe);
        }),
      G && $t(m, L),
      j
    );
  }
  function z(m, c, p, y) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === nn &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case kr:
          e: {
            for (var j = p.key, k = c; k !== null; ) {
              if (k.key === j) {
                if (((j = p.type), j === nn)) {
                  if (k.tag === 7) {
                    (n(m, k.sibling),
                      (c = l(k, p.props.children)),
                      (c.return = m),
                      (m = c));
                    break e;
                  }
                } else if (
                  k.elementType === j ||
                  (typeof j == "object" &&
                    j !== null &&
                    j.$$typeof === vt &&
                    As(j) === k.type)
                ) {
                  (n(m, k.sibling),
                    (c = l(k, p.props)),
                    (c.ref = Fn(m, k, p)),
                    (c.return = m),
                    (m = c));
                  break e;
                }
                n(m, k);
                break;
              } else t(m, k);
              k = k.sibling;
            }
            p.type === nn
              ? ((c = Qt(p.props.children, m.mode, y, p.key)),
                (c.return = m),
                (m = c))
              : ((y = Yr(p.type, p.key, p.props, null, m.mode, y)),
                (y.ref = Fn(m, c, p)),
                (y.return = m),
                (m = y));
          }
          return i(m);
        case tn:
          e: {
            for (k = p.key; c !== null; ) {
              if (c.key === k)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  (n(m, c.sibling),
                    (c = l(c, p.children || [])),
                    (c.return = m),
                    (m = c));
                  break e;
                } else {
                  n(m, c);
                  break;
                }
              else t(m, c);
              c = c.sibling;
            }
            ((c = co(p, m.mode, y)), (c.return = m), (m = c));
          }
          return i(m);
        case vt:
          return ((k = p._init), z(m, c, k(p._payload), y));
      }
      if (Vn(p)) return x(m, c, p, y);
      if (Mn(p)) return w(m, c, p, y);
      Tr(m, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (n(m, c.sibling), (c = l(c, p)), (c.return = m), (m = c))
          : (n(m, c), (c = ao(p, m.mode, y)), (c.return = m), (m = c)),
        i(m))
      : n(m, c);
  }
  return z;
}
var jn = Ea(!0),
  Pa = Ea(!1),
  al = Rt(null),
  cl = null,
  dn = null,
  Pi = null;
function Li() {
  Pi = dn = cl = null;
}
function Di(e) {
  var t = al.current;
  (Q(al), (e._currentValue = t));
}
function bo(e, t, n) {
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
function xn(e, t) {
  ((cl = e),
    (Pi = dn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ke = !0), (e.firstContext = null)));
}
function Fe(e) {
  var t = e._currentValue;
  if (Pi !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), dn === null)) {
      if (cl === null) throw Error(S(308));
      ((dn = e), (cl.dependencies = { lanes: 0, firstContext: e }));
    } else dn = dn.next = e;
  return t;
}
var Bt = null;
function Ii(e) {
  Bt === null ? (Bt = [e]) : Bt.push(e);
}
function La(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Ii(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    ft(e, r)
  );
}
function ft(e, t) {
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
var xt = !1;
function Mi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Da(e, t) {
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
function Pt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), A & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      ft(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Ii(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    ft(e, n)
  );
}
function Br(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), yi(e, n));
  }
}
function $s(e, t) {
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
function dl(e, t, n, r) {
  var l = e.updateQueue;
  xt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u,
      d = a.next;
    ((a.next = null), i === null ? (o = d) : (i.next = d), (i = a));
    var g = e.alternate;
    g !== null &&
      ((g = g.updateQueue),
      (u = g.lastBaseUpdate),
      u !== i &&
        (u === null ? (g.firstBaseUpdate = d) : (u.next = d),
        (g.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var h = l.baseState;
    ((i = 0), (g = d = a = null), (u = o));
    do {
      var f = u.lane,
        v = u.eventTime;
      if ((r & f) === f) {
        g !== null &&
          (g = g.next =
            {
              eventTime: v,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var x = e,
            w = u;
          switch (((f = t), (v = n), w.tag)) {
            case 1:
              if (((x = w.payload), typeof x == "function")) {
                h = x.call(v, h, f);
                break e;
              }
              h = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = w.payload),
                (f = typeof x == "function" ? x.call(v, h, f) : x),
                f == null)
              )
                break e;
              h = X({}, h, f);
              break e;
            case 2:
              xt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (f = l.effects),
          f === null ? (l.effects = [u]) : f.push(u));
      } else
        ((v = {
          eventTime: v,
          lane: f,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          g === null ? ((d = g = v), (a = h)) : (g = g.next = v),
          (i |= f));
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        ((f = u),
          (u = f.next),
          (f.next = null),
          (l.lastBaseUpdate = f),
          (l.shared.pending = null));
      }
    } while (!0);
    if (
      (g === null && (a = h),
      (l.baseState = a),
      (l.firstBaseUpdate = d),
      (l.lastBaseUpdate = g),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do ((i |= l.lane), (l = l.next));
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    ((Xt |= i), (e.lanes = i), (e.memoizedState = h));
  }
}
function Vs(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(S(191, l));
        l.call(r);
      }
    }
}
var wr = {},
  tt = Rt(wr),
  cr = Rt(wr),
  dr = Rt(wr);
function Ht(e) {
  if (e === wr) throw Error(S(174));
  return e;
}
function Ti(e, t) {
  switch ((B(dr, t), B(cr, e), B(tt, wr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ko(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ko(t, e)));
  }
  (Q(tt), B(tt, t));
}
function _n() {
  (Q(tt), Q(cr), Q(dr));
}
function Ia(e) {
  Ht(dr.current);
  var t = Ht(tt.current),
    n = ko(t, e.type);
  t !== n && (B(cr, e), B(tt, n));
}
function zi(e) {
  cr.current === e && (Q(tt), Q(cr));
}
var K = Rt(0);
function fl(e) {
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
var ro = [];
function Ri() {
  for (var e = 0; e < ro.length; e++)
    ro[e]._workInProgressVersionPrimary = null;
  ro.length = 0;
}
var Hr = mt.ReactCurrentDispatcher,
  lo = mt.ReactCurrentBatchConfig,
  Yt = 0,
  Y = null,
  le = null,
  ie = null,
  pl = !1,
  Yn = !1,
  fr = 0,
  If = 0;
function fe() {
  throw Error(S(321));
}
function Oi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ye(e[n], t[n])) return !1;
  return !0;
}
function Fi(e, t, n, r, l, o) {
  if (
    ((Yt = o),
    (Y = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Hr.current = e === null || e.memoizedState === null ? Rf : Of),
    (e = n(r, l)),
    Yn)
  ) {
    o = 0;
    do {
      if (((Yn = !1), (fr = 0), 25 <= o)) throw Error(S(301));
      ((o += 1),
        (ie = le = null),
        (t.updateQueue = null),
        (Hr.current = Ff),
        (e = n(r, l)));
    } while (Yn);
  }
  if (
    ((Hr.current = ml),
    (t = le !== null && le.next !== null),
    (Yt = 0),
    (ie = le = Y = null),
    (pl = !1),
    t)
  )
    throw Error(S(300));
  return e;
}
function Ui() {
  var e = fr !== 0;
  return ((fr = 0), e);
}
function qe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (ie === null ? (Y.memoizedState = ie = e) : (ie = ie.next = e), ie);
}
function Ue() {
  if (le === null) {
    var e = Y.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = le.next;
  var t = ie === null ? Y.memoizedState : ie.next;
  if (t !== null) ((ie = t), (le = e));
  else {
    if (e === null) throw Error(S(310));
    ((le = e),
      (e = {
        memoizedState: le.memoizedState,
        baseState: le.baseState,
        baseQueue: le.baseQueue,
        queue: le.queue,
        next: null,
      }),
      ie === null ? (Y.memoizedState = ie = e) : (ie = ie.next = e));
  }
  return ie;
}
function pr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function oo(e) {
  var t = Ue(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = le,
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
    var u = (i = null),
      a = null,
      d = o;
    do {
      var g = d.lane;
      if ((Yt & g) === g)
        (a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null,
            }),
          (r = d.hasEagerState ? d.eagerState : e(r, d.action)));
      else {
        var h = {
          lane: g,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null,
        };
        (a === null ? ((u = a = h), (i = r)) : (a = a.next = h),
          (Y.lanes |= g),
          (Xt |= g));
      }
      d = d.next;
    } while (d !== null && d !== o);
    (a === null ? (i = r) : (a.next = u),
      Ye(r, t.memoizedState) || (ke = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do ((o = l.lane), (Y.lanes |= o), (Xt |= o), (l = l.next));
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function io(e) {
  var t = Ue(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do ((o = e(o, i.action)), (i = i.next));
    while (i !== l);
    (Ye(o, t.memoizedState) || (ke = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o));
  }
  return [o, r];
}
function Ma() {}
function Ta(e, t) {
  var n = Y,
    r = Ue(),
    l = t(),
    o = !Ye(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (ke = !0)),
    (r = r.queue),
    Ai(Oa.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ie !== null && ie.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      mr(9, Ra.bind(null, n, r, l, t), void 0, null),
      se === null)
    )
      throw Error(S(349));
    Yt & 30 || za(n, t, l);
  }
  return l;
}
function za(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function Ra(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), Fa(t) && Ua(e));
}
function Oa(e, t, n) {
  return n(function () {
    Fa(t) && Ua(e);
  });
}
function Fa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ye(e, n);
  } catch {
    return !0;
  }
}
function Ua(e) {
  var t = ft(e, 1);
  t !== null && Ke(t, e, 1, -1);
}
function bs(e) {
  var t = qe();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: pr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = zf.bind(null, Y, e)),
    [t.memoizedState, e]
  );
}
function mr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Aa() {
  return Ue().memoizedState;
}
function Wr(e, t, n, r) {
  var l = qe();
  ((Y.flags |= e),
    (l.memoizedState = mr(1 | t, n, void 0, r === void 0 ? null : r)));
}
function El(e, t, n, r) {
  var l = Ue();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (le !== null) {
    var i = le.memoizedState;
    if (((o = i.destroy), r !== null && Oi(r, i.deps))) {
      l.memoizedState = mr(t, n, o, r);
      return;
    }
  }
  ((Y.flags |= e), (l.memoizedState = mr(1 | t, n, o, r)));
}
function Bs(e, t) {
  return Wr(8390656, 8, e, t);
}
function Ai(e, t) {
  return El(2048, 8, e, t);
}
function $a(e, t) {
  return El(4, 2, e, t);
}
function Va(e, t) {
  return El(4, 4, e, t);
}
function ba(e, t) {
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
function Ba(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    El(4, 4, ba.bind(null, t, e), n)
  );
}
function $i() {}
function Ha(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Oi(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Wa(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Oi(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Qa(e, t, n) {
  return Yt & 21
    ? (Ye(n, t) || ((n = Zu()), (Y.lanes |= n), (Xt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ke = !0)), (e.memoizedState = n));
}
function Mf(e, t) {
  var n = V;
  ((V = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = lo.transition;
  lo.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((V = n), (lo.transition = r));
  }
}
function Ga() {
  return Ue().memoizedState;
}
function Tf(e, t, n) {
  var r = Dt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ka(e))
  )
    Ya(t, n);
  else if (((n = La(e, t, n, r)), n !== null)) {
    var l = ve();
    (Ke(n, e, r, l), Xa(n, t, r));
  }
}
function zf(e, t, n) {
  var r = Dt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ka(e)) Ya(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Ye(u, i))) {
          var a = t.interleaved;
          (a === null
            ? ((l.next = l), Ii(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l));
          return;
        }
      } catch {
      } finally {
      }
    ((n = La(e, t, l, r)),
      n !== null && ((l = ve()), Ke(n, e, r, l), Xa(n, t, r)));
  }
}
function Ka(e) {
  var t = e.alternate;
  return e === Y || (t !== null && t === Y);
}
function Ya(e, t) {
  Yn = pl = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function Xa(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), yi(e, n));
  }
}
var ml = {
    readContext: Fe,
    useCallback: fe,
    useContext: fe,
    useEffect: fe,
    useImperativeHandle: fe,
    useInsertionEffect: fe,
    useLayoutEffect: fe,
    useMemo: fe,
    useReducer: fe,
    useRef: fe,
    useState: fe,
    useDebugValue: fe,
    useDeferredValue: fe,
    useTransition: fe,
    useMutableSource: fe,
    useSyncExternalStore: fe,
    useId: fe,
    unstable_isNewReconciler: !1,
  },
  Rf = {
    readContext: Fe,
    useCallback: function (e, t) {
      return ((qe().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Fe,
    useEffect: Bs,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Wr(4194308, 4, ba.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Wr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Wr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = qe();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = qe();
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
        (e = e.dispatch = Tf.bind(null, Y, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = qe();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: bs,
    useDebugValue: $i,
    useDeferredValue: function (e) {
      return (qe().memoizedState = e);
    },
    useTransition: function () {
      var e = bs(!1),
        t = e[0];
      return ((e = Mf.bind(null, e[1])), (qe().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Y,
        l = qe();
      if (G) {
        if (n === void 0) throw Error(S(407));
        n = n();
      } else {
        if (((n = t()), se === null)) throw Error(S(349));
        Yt & 30 || za(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Bs(Oa.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        mr(9, Ra.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = qe(),
        t = se.identifierPrefix;
      if (G) {
        var n = ut,
          r = st;
        ((n = (r & ~(1 << (32 - Ge(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = fr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = If++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Of = {
    readContext: Fe,
    useCallback: Ha,
    useContext: Fe,
    useEffect: Ai,
    useImperativeHandle: Ba,
    useInsertionEffect: $a,
    useLayoutEffect: Va,
    useMemo: Wa,
    useReducer: oo,
    useRef: Aa,
    useState: function () {
      return oo(pr);
    },
    useDebugValue: $i,
    useDeferredValue: function (e) {
      var t = Ue();
      return Qa(t, le.memoizedState, e);
    },
    useTransition: function () {
      var e = oo(pr)[0],
        t = Ue().memoizedState;
      return [e, t];
    },
    useMutableSource: Ma,
    useSyncExternalStore: Ta,
    useId: Ga,
    unstable_isNewReconciler: !1,
  },
  Ff = {
    readContext: Fe,
    useCallback: Ha,
    useContext: Fe,
    useEffect: Ai,
    useImperativeHandle: Ba,
    useInsertionEffect: $a,
    useLayoutEffect: Va,
    useMemo: Wa,
    useReducer: io,
    useRef: Aa,
    useState: function () {
      return io(pr);
    },
    useDebugValue: $i,
    useDeferredValue: function (e) {
      var t = Ue();
      return le === null ? (t.memoizedState = e) : Qa(t, le.memoizedState, e);
    },
    useTransition: function () {
      var e = io(pr)[0],
        t = Ue().memoizedState;
      return [e, t];
    },
    useMutableSource: Ma,
    useSyncExternalStore: Ta,
    useId: Ga,
    unstable_isNewReconciler: !1,
  };
function He(e, t) {
  if (e && e.defaultProps) {
    ((t = X({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Bo(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : X({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var Pl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Jt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ve(),
      l = Dt(e),
      o = at(r, l);
    ((o.payload = t),
      n != null && (o.callback = n),
      (t = Pt(e, o, l)),
      t !== null && (Ke(t, e, l, r), Br(t, e, l)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ve(),
      l = Dt(e),
      o = at(r, l);
    ((o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Pt(e, o, l)),
      t !== null && (Ke(t, e, l, r), Br(t, e, l)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ve(),
      r = Dt(e),
      l = at(n, r);
    ((l.tag = 2),
      t != null && (l.callback = t),
      (t = Pt(e, l, r)),
      t !== null && (Ke(t, e, r, n), Br(t, e, r)));
  },
};
function Hs(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !ir(n, r) || !ir(l, o)
        : !0
  );
}
function Za(e, t, n) {
  var r = !1,
    l = Tt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Fe(o))
      : ((l = je(t) ? Gt : he.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? kn(e, l) : Tt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Pl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Ws(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Pl.enqueueReplaceState(t, t.state, null));
}
function Ho(e, t, n, r) {
  var l = e.stateNode;
  ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Mi(e));
  var o = t.contextType;
  (typeof o == "object" && o !== null
    ? (l.context = Fe(o))
    : ((o = je(t) ? Gt : he.current), (l.context = kn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Bo(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Pl.enqueueReplaceState(l, l.state, null),
      dl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308));
}
function Cn(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += cd(r)), (r = r.return));
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
function so(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Wo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Uf = typeof WeakMap == "function" ? WeakMap : Map;
function qa(e, t, n) {
  ((n = at(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (gl || ((gl = !0), (ti = r)), Wo(e, t));
    }),
    n
  );
}
function Ja(e, t, n) {
  ((n = at(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    ((n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Wo(e, t);
      }));
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        (Wo(e, t),
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
function Qs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Uf();
    var l = new Set();
    r.set(t, l);
  } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
  l.has(n) || (l.add(n), (e = qf.bind(null, e, t, n)), t.then(e, e));
}
function Gs(e) {
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
function Ks(e, t, n, r, l) {
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
              : ((t = at(-1, 1)), (t.tag = 2), Pt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Af = mt.ReactCurrentOwner,
  ke = !1;
function ye(e, t, n, r) {
  t.child = e === null ? Pa(t, null, n, r) : jn(t, e.child, n, r);
}
function Ys(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    xn(t, l),
    (r = Fi(e, t, n, r, o, l)),
    (n = Ui()),
    e !== null && !ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        pt(e, t, l))
      : (G && n && _i(t), (t.flags |= 1), ye(e, t, r, l), t.child)
  );
}
function Xs(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Ki(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), ec(e, t, o, r, l))
      : ((e = Yr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ir), n(i, r) && e.ref === t.ref)
    )
      return pt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = It(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ec(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (ir(o, r) && e.ref === t.ref)
      if (((ke = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (ke = !0);
      else return ((t.lanes = e.lanes), pt(e, t, l));
  }
  return Qo(e, t, n, r, l);
}
function tc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        B(pn, Ce),
        (Ce |= n));
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
          B(pn, Ce),
          (Ce |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        B(pn, Ce),
        (Ce |= r));
    }
  else
    (o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      B(pn, Ce),
      (Ce |= r));
  return (ye(e, t, l, n), t.child);
}
function nc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Qo(e, t, n, r, l) {
  var o = je(n) ? Gt : he.current;
  return (
    (o = kn(t, o)),
    xn(t, l),
    (n = Fi(e, t, n, r, o, l)),
    (r = Ui()),
    e !== null && !ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        pt(e, t, l))
      : (G && r && _i(t), (t.flags |= 1), ye(e, t, n, l), t.child)
  );
}
function Zs(e, t, n, r, l) {
  if (je(n)) {
    var o = !0;
    il(t);
  } else o = !1;
  if ((xn(t, l), t.stateNode === null))
    (Qr(e, t), Za(t, n, r), Ho(t, n, r, l), (r = !0));
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var a = i.context,
      d = n.contextType;
    typeof d == "object" && d !== null
      ? (d = Fe(d))
      : ((d = je(n) ? Gt : he.current), (d = kn(t, d)));
    var g = n.getDerivedStateFromProps,
      h =
        typeof g == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    (h ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || a !== d) && Ws(t, i, r, d)),
      (xt = !1));
    var f = t.memoizedState;
    ((i.state = f),
      dl(t, r, i, l),
      (a = t.memoizedState),
      u !== r || f !== a || Ne.current || xt
        ? (typeof g == "function" && (Bo(t, n, g, r), (a = t.memoizedState)),
          (u = xt || Hs(t, n, u, r, f, a, d))
            ? (h ||
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
          (i.context = d),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((i = t.stateNode),
      Da(e, t),
      (u = t.memoizedProps),
      (d = t.type === t.elementType ? u : He(t.type, u)),
      (i.props = d),
      (h = t.pendingProps),
      (f = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Fe(a))
        : ((a = je(n) ? Gt : he.current), (a = kn(t, a))));
    var v = n.getDerivedStateFromProps;
    ((g =
      typeof v == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== h || f !== a) && Ws(t, i, r, a)),
      (xt = !1),
      (f = t.memoizedState),
      (i.state = f),
      dl(t, r, i, l));
    var x = t.memoizedState;
    u !== h || f !== x || Ne.current || xt
      ? (typeof v == "function" && (Bo(t, n, v, r), (x = t.memoizedState)),
        (d = xt || Hs(t, n, d, r, f, x, a) || !1)
          ? (g ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, x, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, x, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (i.props = r),
        (i.state = x),
        (i.context = a),
        (r = d))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Go(e, t, n, r, o, l);
}
function Go(e, t, n, r, l, o) {
  nc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return (l && Os(t, n, !1), pt(e, t, o));
  ((r = t.stateNode), (Af.current = t));
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = jn(t, e.child, null, o)), (t.child = jn(t, null, u, o)))
      : ye(e, t, u, o),
    (t.memoizedState = r.state),
    l && Os(t, n, !0),
    t.child
  );
}
function rc(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Rs(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Rs(e, t.context, !1),
    Ti(e, t.containerInfo));
}
function qs(e, t, n, r, l) {
  return (Nn(), Ei(l), (t.flags |= 256), ye(e, t, n, r), t.child);
}
var Ko = { dehydrated: null, treeContext: null, retryLane: 0 };
function Yo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function lc(e, t, n) {
  var r = t.pendingProps,
    l = K.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    B(K, l & 1),
    e === null)
  )
    return (
      Vo(t),
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
                : (o = Il(i, r, 0, null)),
              (e = Qt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Yo(n)),
              (t.memoizedState = Ko),
              e)
            : Vi(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return $f(e, t, i, r, u, l, n);
  if (o) {
    ((o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling));
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = It(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = It(u, o)) : ((o = Qt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Yo(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ko),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = It(o, { mode: "visible", children: r.children })),
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
function Vi(e, t) {
  return (
    (t = Il({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function zr(e, t, n, r) {
  return (
    r !== null && Ei(r),
    jn(t, e.child, null, n),
    (e = Vi(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function $f(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = so(Error(S(422)))), zr(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (l = t.mode),
          (r = Il({ mode: "visible", children: r.children }, l, 0, null)),
          (o = Qt(o, l, i, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && jn(t, e.child, null, i),
          (t.child.memoizedState = Yo(i)),
          (t.memoizedState = Ko),
          o);
  if (!(t.mode & 1)) return zr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (
      (r = u),
      (o = Error(S(419))),
      (r = so(o, r, void 0)),
      zr(e, t, i, r)
    );
  }
  if (((u = (i & e.childLanes) !== 0), ke || u)) {
    if (((r = se), r !== null)) {
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
          ((o.retryLane = l), ft(e, l), Ke(r, e, l, -1)));
    }
    return (Gi(), (r = so(Error(S(421)))), zr(e, t, i, r));
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Jf.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ee = Et(l.nextSibling)),
      (Pe = t),
      (G = !0),
      (Qe = null),
      e !== null &&
        ((Te[ze++] = st),
        (Te[ze++] = ut),
        (Te[ze++] = Kt),
        (st = e.id),
        (ut = e.overflow),
        (Kt = t)),
      (t = Vi(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Js(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), bo(e.return, t, n));
}
function uo(e, t, n, r, l) {
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
function oc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ye(e, t, r.children, n), (r = K.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Js(e, n, t);
        else if (e.tag === 19) Js(e, n, t);
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
  if ((B(K, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          ((e = n.alternate),
            e !== null && fl(e) === null && (l = n),
            (n = n.sibling));
        ((n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          uo(t, !1, l, n, o));
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && fl(e) === null)) {
            t.child = l;
            break;
          }
          ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
        }
        uo(t, !0, n, null, o);
        break;
      case "together":
        uo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Qr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function pt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Xt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (
      e = t.child, n = It(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = It(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function Vf(e, t, n) {
  switch (t.tag) {
    case 3:
      (rc(t), Nn());
      break;
    case 5:
      Ia(t);
      break;
    case 1:
      je(t.type) && il(t);
      break;
    case 4:
      Ti(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      (B(al, r._currentValue), (r._currentValue = l));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (B(K, K.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? lc(e, t, n)
            : (B(K, K.current & 1),
              (e = pt(e, t, n)),
              e !== null ? e.sibling : null);
      B(K, K.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return oc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        B(K, K.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), tc(e, t, n));
  }
  return pt(e, t, n);
}
var ic, Xo, sc, uc;
ic = function (e, t) {
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
Xo = function () {};
sc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    ((e = t.stateNode), Ht(tt.current));
    var o = null;
    switch (n) {
      case "input":
        ((l = vo(e, l)), (r = vo(e, r)), (o = []));
        break;
      case "select":
        ((l = X({}, l, { value: void 0 })),
          (r = X({}, r, { value: void 0 })),
          (o = []));
        break;
      case "textarea":
        ((l = So(e, l)), (r = So(e, r)), (o = []));
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ll);
    }
    No(n, r);
    var i;
    n = null;
    for (d in l)
      if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
        if (d === "style") {
          var u = l[d];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          d !== "dangerouslySetInnerHTML" &&
            d !== "children" &&
            d !== "suppressContentEditableWarning" &&
            d !== "suppressHydrationWarning" &&
            d !== "autoFocus" &&
            (Jn.hasOwnProperty(d)
              ? o || (o = [])
              : (o = o || []).push(d, null));
    for (d in r) {
      var a = r[d];
      if (
        ((u = l != null ? l[d] : void 0),
        r.hasOwnProperty(d) && a !== u && (a != null || u != null))
      )
        if (d === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in a)
              a.hasOwnProperty(i) &&
                u[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else (n || (o || (o = []), o.push(d, n)), (n = a));
        else
          d === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (u = u ? u.__html : void 0),
              a != null && u !== a && (o = o || []).push(d, a))
            : d === "children"
              ? (typeof a != "string" && typeof a != "number") ||
                (o = o || []).push(d, "" + a)
              : d !== "suppressContentEditableWarning" &&
                d !== "suppressHydrationWarning" &&
                (Jn.hasOwnProperty(d)
                  ? (a != null && d === "onScroll" && W("scroll", e),
                    o || u === a || (o = []))
                  : (o = o || []).push(d, a));
    }
    n && (o = o || []).push("style", n);
    var d = o;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
uc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Un(e, t) {
  if (!G)
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
function pe(e) {
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
function bf(e, t, n) {
  var r = t.pendingProps;
  switch ((Ci(t), t.tag)) {
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
      return (pe(t), null);
    case 1:
      return (je(t.type) && ol(), pe(t), null);
    case 3:
      return (
        (r = t.stateNode),
        _n(),
        Q(Ne),
        Q(he),
        Ri(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Mr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Qe !== null && (li(Qe), (Qe = null)))),
        Xo(e, t),
        pe(t),
        null
      );
    case 5:
      zi(t);
      var l = Ht(dr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (sc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return (pe(t), null);
        }
        if (((e = Ht(tt.current)), Mr(t))) {
          ((r = t.stateNode), (n = t.type));
          var o = t.memoizedProps;
          switch (((r[Je] = t), (r[ar] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (W("cancel", r), W("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              W("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Bn.length; l++) W(Bn[l], r);
              break;
            case "source":
              W("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (W("error", r), W("load", r));
              break;
            case "details":
              W("toggle", r);
              break;
            case "input":
              (us(r, o), W("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!o.multiple }),
                W("invalid", r));
              break;
            case "textarea":
              (cs(r, o), W("invalid", r));
          }
          (No(n, o), (l = null));
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ir(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ir(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Jn.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  W("scroll", r);
            }
          switch (n) {
            case "input":
              (Nr(r), as(r, o, !0));
              break;
            case "textarea":
              (Nr(r), ds(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = ll);
          }
          ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ou(n)),
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
            (e[Je] = t),
            (e[ar] = r),
            ic(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((i = jo(n, r)), n)) {
              case "dialog":
                (W("cancel", e), W("close", e), (l = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (W("load", e), (l = r));
                break;
              case "video":
              case "audio":
                for (l = 0; l < Bn.length; l++) W(Bn[l], e);
                l = r;
                break;
              case "source":
                (W("error", e), (l = r));
                break;
              case "img":
              case "image":
              case "link":
                (W("error", e), W("load", e), (l = r));
                break;
              case "details":
                (W("toggle", e), (l = r));
                break;
              case "input":
                (us(e, r), (l = vo(e, r)), W("invalid", e));
                break;
              case "option":
                l = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = X({}, r, { value: void 0 })),
                  W("invalid", e));
                break;
              case "textarea":
                (cs(e, r), (l = So(e, r)), W("invalid", e));
                break;
              default:
                l = r;
            }
            (No(n, l), (u = l));
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var a = u[o];
                o === "style"
                  ? Au(e, a)
                  : o === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && Fu(e, a))
                    : o === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && er(e, a)
                        : typeof a == "number" && er(e, "" + a)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (Jn.hasOwnProperty(o)
                          ? a != null && o === "onScroll" && W("scroll", e)
                          : a != null && di(e, o, a, i));
              }
            switch (n) {
              case "input":
                (Nr(e), as(e, r, !1));
                break;
              case "textarea":
                (Nr(e), ds(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Mt(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? hn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      hn(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = ll);
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
      return (pe(t), null);
    case 6:
      if (e && t.stateNode != null) uc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (((n = Ht(dr.current)), Ht(tt.current), Mr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Je] = t),
            (o = r.nodeValue !== n) && ((e = Pe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ir(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ir(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Je] = t),
            (t.stateNode = r));
      }
      return (pe(t), null);
    case 13:
      if (
        (Q(K),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (G && Ee !== null && t.mode & 1 && !(t.flags & 128))
          (Ca(), Nn(), (t.flags |= 98560), (o = !1));
        else if (((o = Mr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(S(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(S(317));
            o[Je] = t;
          } else
            (Nn(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (pe(t), (o = !1));
        } else (Qe !== null && (li(Qe), (Qe = null)), (o = !0));
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || K.current & 1 ? oe === 0 && (oe = 3) : Gi())),
          t.updateQueue !== null && (t.flags |= 4),
          pe(t),
          null);
    case 4:
      return (
        _n(),
        Xo(e, t),
        e === null && sr(t.stateNode.containerInfo),
        pe(t),
        null
      );
    case 10:
      return (Di(t.type._context), pe(t), null);
    case 17:
      return (je(t.type) && ol(), pe(t), null);
    case 19:
      if ((Q(K), (o = t.memoizedState), o === null)) return (pe(t), null);
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Un(o, !1);
        else {
          if (oe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = fl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Un(o, !1),
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
                return (B(K, (K.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          o.tail !== null &&
            J() > En &&
            ((t.flags |= 128), (r = !0), Un(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = fl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Un(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !G)
            )
              return (pe(t), null);
          } else
            2 * J() - o.renderingStartTime > En &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Un(o, !1), (t.lanes = 4194304));
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
          (o.renderingStartTime = J()),
          (t.sibling = null),
          (n = K.current),
          B(K, r ? (n & 1) | 2 : n & 1),
          t)
        : (pe(t), null);
    case 22:
    case 23:
      return (
        Qi(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ce & 1073741824 && (pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : pe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function Bf(e, t) {
  switch ((Ci(t), t.tag)) {
    case 1:
      return (
        je(t.type) && ol(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        _n(),
        Q(Ne),
        Q(he),
        Ri(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (zi(t), null);
    case 13:
      if ((Q(K), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(S(340));
        Nn();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (Q(K), null);
    case 4:
      return (_n(), null);
    case 10:
      return (Di(t.type._context), null);
    case 22:
    case 23:
      return (Qi(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Rr = !1,
  me = !1,
  Hf = typeof WeakSet == "function" ? WeakSet : Set,
  E = null;
function fn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Z(e, t, r);
      }
    else n.current = null;
}
function Zo(e, t, n) {
  try {
    n();
  } catch (r) {
    Z(e, t, r);
  }
}
var eu = !1;
function Wf(e, t) {
  if (((zo = tl), (e = pa()), ji(e))) {
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
            u = -1,
            a = -1,
            d = 0,
            g = 0,
            h = e,
            f = null;
          t: for (;;) {
            for (
              var v;
              h !== n || (l !== 0 && h.nodeType !== 3) || (u = i + l),
                h !== o || (r !== 0 && h.nodeType !== 3) || (a = i + r),
                h.nodeType === 3 && (i += h.nodeValue.length),
                (v = h.firstChild) !== null;
            )
              ((f = h), (h = v));
            for (;;) {
              if (h === e) break t;
              if (
                (f === n && ++d === l && (u = i),
                f === o && ++g === r && (a = i),
                (v = h.nextSibling) !== null)
              )
                break;
              ((h = f), (f = h.parentNode));
            }
            h = v;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ro = { focusedElem: e, selectionRange: n }, tl = !1, E = t; E !== null; )
    if (((t = E), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (E = e));
    else
      for (; E !== null; ) {
        t = E;
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
                  var w = x.memoizedProps,
                    z = x.memoizedState,
                    m = t.stateNode,
                    c = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : He(t.type, w),
                      z,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = c;
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
                throw Error(S(163));
            }
        } catch (y) {
          Z(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (E = e));
          break;
        }
        E = t.return;
      }
  return ((x = eu), (eu = !1), x);
}
function Xn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        ((l.destroy = void 0), o !== void 0 && Zo(t, n, o));
      }
      l = l.next;
    } while (l !== r);
  }
}
function Ll(e, t) {
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
function qo(e) {
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
function ac(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), ac(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Je], delete t[ar], delete t[Uo], delete t[Ef], delete t[Pf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function cc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function tu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || cc(e.return)) return null;
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
function Jo(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = ll)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Jo(e, t, n), e = e.sibling; e !== null; )
      (Jo(e, t, n), (e = e.sibling));
}
function ei(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ei(e, t, n), e = e.sibling; e !== null; )
      (ei(e, t, n), (e = e.sibling));
}
var ae = null,
  We = !1;
function yt(e, t, n) {
  for (n = n.child; n !== null; ) (dc(e, t, n), (n = n.sibling));
}
function dc(e, t, n) {
  if (et && typeof et.onCommitFiberUnmount == "function")
    try {
      et.onCommitFiberUnmount(Sl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      me || fn(n, t);
    case 6:
      var r = ae,
        l = We;
      ((ae = null),
        yt(e, t, n),
        (ae = r),
        (We = l),
        ae !== null &&
          (We
            ? ((e = ae),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ae.removeChild(n.stateNode)));
      break;
    case 18:
      ae !== null &&
        (We
          ? ((e = ae),
            (n = n.stateNode),
            e.nodeType === 8
              ? to(e.parentNode, n)
              : e.nodeType === 1 && to(e, n),
            lr(e))
          : to(ae, n.stateNode));
      break;
    case 4:
      ((r = ae),
        (l = We),
        (ae = n.stateNode.containerInfo),
        (We = !0),
        yt(e, t, n),
        (ae = r),
        (We = l));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !me &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          ((o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Zo(n, t, i),
            (l = l.next));
        } while (l !== r);
      }
      yt(e, t, n);
      break;
    case 1:
      if (
        !me &&
        (fn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (u) {
          Z(n, t, u);
        }
      yt(e, t, n);
      break;
    case 21:
      yt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((me = (r = me) || n.memoizedState !== null), yt(e, t, n), (me = r))
        : yt(e, t, n);
      break;
    default:
      yt(e, t, n);
  }
}
function nu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new Hf()),
      t.forEach(function (r) {
        var l = ep.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      }));
  }
}
function Be(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              ((ae = u.stateNode), (We = !1));
              break e;
            case 3:
              ((ae = u.stateNode.containerInfo), (We = !0));
              break e;
            case 4:
              ((ae = u.stateNode.containerInfo), (We = !0));
              break e;
          }
          u = u.return;
        }
        if (ae === null) throw Error(S(160));
        (dc(o, i, l), (ae = null), (We = !1));
        var a = l.alternate;
        (a !== null && (a.return = null), (l.return = null));
      } catch (d) {
        Z(l, t, d);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (fc(t, e), (t = t.sibling));
}
function fc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Be(t, e), Ze(e), r & 4)) {
        try {
          (Xn(3, e, e.return), Ll(3, e));
        } catch (w) {
          Z(e, e.return, w);
        }
        try {
          Xn(5, e, e.return);
        } catch (w) {
          Z(e, e.return, w);
        }
      }
      break;
    case 1:
      (Be(t, e), Ze(e), r & 512 && n !== null && fn(n, n.return));
      break;
    case 5:
      if (
        (Be(t, e),
        Ze(e),
        r & 512 && n !== null && fn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          er(l, "");
        } catch (w) {
          Z(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            (u === "input" && o.type === "radio" && o.name != null && zu(l, o),
              jo(u, i));
            var d = jo(u, o);
            for (i = 0; i < a.length; i += 2) {
              var g = a[i],
                h = a[i + 1];
              g === "style"
                ? Au(l, h)
                : g === "dangerouslySetInnerHTML"
                  ? Fu(l, h)
                  : g === "children"
                    ? er(l, h)
                    : di(l, g, h, d);
            }
            switch (u) {
              case "input":
                xo(l, o);
                break;
              case "textarea":
                Ru(l, o);
                break;
              case "select":
                var f = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null
                  ? hn(l, !!o.multiple, v, !1)
                  : f !== !!o.multiple &&
                    (o.defaultValue != null
                      ? hn(l, !!o.multiple, o.defaultValue, !0)
                      : hn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[ar] = o;
          } catch (w) {
            Z(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Be(t, e), Ze(e), r & 4)) {
        if (e.stateNode === null) throw Error(S(162));
        ((l = e.stateNode), (o = e.memoizedProps));
        try {
          l.nodeValue = o;
        } catch (w) {
          Z(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Be(t, e), Ze(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          lr(t.containerInfo);
        } catch (w) {
          Z(e, e.return, w);
        }
      break;
    case 4:
      (Be(t, e), Ze(e));
      break;
    case 13:
      (Be(t, e),
        Ze(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Hi = J())),
        r & 4 && nu(e));
      break;
    case 22:
      if (
        ((g = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((me = (d = me) || g), Be(t, e), (me = d)) : Be(t, e),
        Ze(e),
        r & 8192)
      ) {
        if (
          ((d = e.memoizedState !== null),
          (e.stateNode.isHidden = d) && !g && e.mode & 1)
        )
          for (E = e, g = e.child; g !== null; ) {
            for (h = E = g; E !== null; ) {
              switch (((f = E), (v = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Xn(4, f, f.return);
                  break;
                case 1:
                  fn(f, f.return);
                  var x = f.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    ((r = f), (n = f.return));
                    try {
                      ((t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount());
                    } catch (w) {
                      Z(r, n, w);
                    }
                  }
                  break;
                case 5:
                  fn(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    lu(h);
                    continue;
                  }
              }
              v !== null ? ((v.return = f), (E = v)) : lu(h);
            }
            g = g.sibling;
          }
        e: for (g = null, h = e; ; ) {
          if (h.tag === 5) {
            if (g === null) {
              g = h;
              try {
                ((l = h.stateNode),
                  d
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = h.stateNode),
                      (a = h.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (u.style.display = Uu("display", i))));
              } catch (w) {
                Z(e, e.return, w);
              }
            }
          } else if (h.tag === 6) {
            if (g === null)
              try {
                h.stateNode.nodeValue = d ? "" : h.memoizedProps;
              } catch (w) {
                Z(e, e.return, w);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            ((h.child.return = h), (h = h.child));
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            (g === h && (g = null), (h = h.return));
          }
          (g === h && (g = null),
            (h.sibling.return = h.return),
            (h = h.sibling));
        }
      }
      break;
    case 19:
      (Be(t, e), Ze(e), r & 4 && nu(e));
      break;
    case 21:
      break;
    default:
      (Be(t, e), Ze(e));
  }
}
function Ze(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (cc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (er(l, ""), (r.flags &= -33));
          var o = tu(e);
          ei(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = tu(e);
          Jo(e, u, i);
          break;
        default:
          throw Error(S(161));
      }
    } catch (a) {
      Z(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Qf(e, t, n) {
  ((E = e), pc(e));
}
function pc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; E !== null; ) {
    var l = E,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Rr;
      if (!i) {
        var u = l.alternate,
          a = (u !== null && u.memoizedState !== null) || me;
        u = Rr;
        var d = me;
        if (((Rr = i), (me = a) && !d))
          for (E = l; E !== null; )
            ((i = E),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? ou(l)
                : a !== null
                  ? ((a.return = i), (E = a))
                  : ou(l));
        for (; o !== null; ) ((E = o), pc(o), (o = o.sibling));
        ((E = l), (Rr = u), (me = d));
      }
      ru(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (E = o)) : ru(e);
  }
}
function ru(e) {
  for (; E !== null; ) {
    var t = E;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              me || Ll(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !me)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : He(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && Vs(t, o, r);
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
                Vs(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
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
                var d = t.alternate;
                if (d !== null) {
                  var g = d.memoizedState;
                  if (g !== null) {
                    var h = g.dehydrated;
                    h !== null && lr(h);
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
              throw Error(S(163));
          }
        me || (t.flags & 512 && qo(t));
      } catch (f) {
        Z(t, t.return, f);
      }
    }
    if (t === e) {
      E = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (E = n));
      break;
    }
    E = t.return;
  }
}
function lu(e) {
  for (; E !== null; ) {
    var t = E;
    if (t === e) {
      E = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (E = n));
      break;
    }
    E = t.return;
  }
}
function ou(e) {
  for (; E !== null; ) {
    var t = E;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ll(4, t);
          } catch (a) {
            Z(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Z(t, l, a);
            }
          }
          var o = t.return;
          try {
            qo(t);
          } catch (a) {
            Z(t, o, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            qo(t);
          } catch (a) {
            Z(t, i, a);
          }
      }
    } catch (a) {
      Z(t, t.return, a);
    }
    if (t === e) {
      E = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      ((u.return = t.return), (E = u));
      break;
    }
    E = t.return;
  }
}
var Gf = Math.ceil,
  hl = mt.ReactCurrentDispatcher,
  bi = mt.ReactCurrentOwner,
  Oe = mt.ReactCurrentBatchConfig,
  A = 0,
  se = null,
  ne = null,
  ce = 0,
  Ce = 0,
  pn = Rt(0),
  oe = 0,
  hr = null,
  Xt = 0,
  Dl = 0,
  Bi = 0,
  Zn = null,
  Se = null,
  Hi = 0,
  En = 1 / 0,
  ot = null,
  gl = !1,
  ti = null,
  Lt = null,
  Or = !1,
  Nt = null,
  yl = 0,
  qn = 0,
  ni = null,
  Gr = -1,
  Kr = 0;
function ve() {
  return A & 6 ? J() : Gr !== -1 ? Gr : (Gr = J());
}
function Dt(e) {
  return e.mode & 1
    ? A & 2 && ce !== 0
      ? ce & -ce
      : Df.transition !== null
        ? (Kr === 0 && (Kr = Zu()), Kr)
        : ((e = V),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : la(e.type))),
          e)
    : 1;
}
function Ke(e, t, n, r) {
  if (50 < qn) throw ((qn = 0), (ni = null), Error(S(185)));
  (yr(e, n, r),
    (!(A & 2) || e !== se) &&
      (e === se && (!(A & 2) && (Dl |= n), oe === 4 && St(e, ce)),
      _e(e, r),
      n === 1 && A === 0 && !(t.mode & 1) && ((En = J() + 500), Cl && Ot())));
}
function _e(e, t) {
  var n = e.callbackNode;
  Ld(e, t);
  var r = el(e, e === se ? ce : 0);
  if (r === 0)
    (n !== null && ms(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ms(n), t === 1))
      (e.tag === 0 ? Lf(iu.bind(null, e)) : Na(iu.bind(null, e)),
        _f(function () {
          !(A & 6) && Ot();
        }),
        (n = null));
    else {
      switch (qu(r)) {
        case 1:
          n = gi;
          break;
        case 4:
          n = Yu;
          break;
        case 16:
          n = Jr;
          break;
        case 536870912:
          n = Xu;
          break;
        default:
          n = Jr;
      }
      n = Sc(n, mc.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function mc(e, t) {
  if (((Gr = -1), (Kr = 0), A & 6)) throw Error(S(327));
  var n = e.callbackNode;
  if (wn() && e.callbackNode !== n) return null;
  var r = el(e, e === se ? ce : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = vl(e, r);
  else {
    t = r;
    var l = A;
    A |= 2;
    var o = gc();
    (se !== e || ce !== t) && ((ot = null), (En = J() + 500), Wt(e, t));
    do
      try {
        Xf();
        break;
      } catch (u) {
        hc(e, u);
      }
    while (!0);
    (Li(),
      (hl.current = o),
      (A = l),
      ne !== null ? (t = 0) : ((se = null), (ce = 0), (t = oe)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Lo(e)), l !== 0 && ((r = l), (t = ri(e, l)))), t === 1)
    )
      throw ((n = hr), Wt(e, 0), St(e, r), _e(e, J()), n);
    if (t === 6) St(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Kf(l) &&
          ((t = vl(e, r)),
          t === 2 && ((o = Lo(e)), o !== 0 && ((r = o), (t = ri(e, o)))),
          t === 1))
      )
        throw ((n = hr), Wt(e, 0), St(e, r), _e(e, J()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Vt(e, Se, ot);
          break;
        case 3:
          if (
            (St(e, r), (r & 130023424) === r && ((t = Hi + 500 - J()), 10 < t))
          ) {
            if (el(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              (ve(), (e.pingedLanes |= e.suspendedLanes & l));
              break;
            }
            e.timeoutHandle = Fo(Vt.bind(null, e, Se, ot), t);
            break;
          }
          Vt(e, Se, ot);
          break;
        case 4:
          if ((St(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Ge(r);
            ((o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o));
          }
          if (
            ((r = l),
            (r = J() - r),
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
                          : 1960 * Gf(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Fo(Vt.bind(null, e, Se, ot), r);
            break;
          }
          Vt(e, Se, ot);
          break;
        case 5:
          Vt(e, Se, ot);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return (_e(e, J()), e.callbackNode === n ? mc.bind(null, e) : null);
}
function ri(e, t) {
  var n = Zn;
  return (
    e.current.memoizedState.isDehydrated && (Wt(e, t).flags |= 256),
    (e = vl(e, t)),
    e !== 2 && ((t = Se), (Se = n), t !== null && li(t)),
    e
  );
}
function li(e) {
  Se === null ? (Se = e) : Se.push.apply(Se, e);
}
function Kf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Ye(o(), l)) return !1;
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
function St(e, t) {
  for (
    t &= ~Bi,
      t &= ~Dl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - Ge(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function iu(e) {
  if (A & 6) throw Error(S(327));
  wn();
  var t = el(e, 0);
  if (!(t & 1)) return (_e(e, J()), null);
  var n = vl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Lo(e);
    r !== 0 && ((t = r), (n = ri(e, r)));
  }
  if (n === 1) throw ((n = hr), Wt(e, 0), St(e, t), _e(e, J()), n);
  if (n === 6) throw Error(S(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Vt(e, Se, ot),
    _e(e, J()),
    null
  );
}
function Wi(e, t) {
  var n = A;
  A |= 1;
  try {
    return e(t);
  } finally {
    ((A = n), A === 0 && ((En = J() + 500), Cl && Ot()));
  }
}
function Zt(e) {
  Nt !== null && Nt.tag === 0 && !(A & 6) && wn();
  var t = A;
  A |= 1;
  var n = Oe.transition,
    r = V;
  try {
    if (((Oe.transition = null), (V = 1), e)) return e();
  } finally {
    ((V = r), (Oe.transition = n), (A = t), !(A & 6) && Ot());
  }
}
function Qi() {
  ((Ce = pn.current), Q(pn));
}
function Wt(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), jf(n)), ne !== null))
    for (n = ne.return; n !== null; ) {
      var r = n;
      switch ((Ci(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && ol());
          break;
        case 3:
          (_n(), Q(Ne), Q(he), Ri());
          break;
        case 5:
          zi(r);
          break;
        case 4:
          _n();
          break;
        case 13:
          Q(K);
          break;
        case 19:
          Q(K);
          break;
        case 10:
          Di(r.type._context);
          break;
        case 22:
        case 23:
          Qi();
      }
      n = n.return;
    }
  if (
    ((se = e),
    (ne = e = It(e.current, null)),
    (ce = Ce = t),
    (oe = 0),
    (hr = null),
    (Bi = Dl = Xt = 0),
    (Se = Zn = null),
    Bt !== null)
  ) {
    for (t = 0; t < Bt.length; t++)
      if (((n = Bt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          ((o.next = l), (r.next = i));
        }
        n.pending = r;
      }
    Bt = null;
  }
  return e;
}
function hc(e, t) {
  do {
    var n = ne;
    try {
      if ((Li(), (Hr.current = ml), pl)) {
        for (var r = Y.memoizedState; r !== null; ) {
          var l = r.queue;
          (l !== null && (l.pending = null), (r = r.next));
        }
        pl = !1;
      }
      if (
        ((Yt = 0),
        (ie = le = Y = null),
        (Yn = !1),
        (fr = 0),
        (bi.current = null),
        n === null || n.return === null)
      ) {
        ((oe = 1), (hr = t), (ne = null));
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          a = t;
        if (
          ((t = ce),
          (u.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var d = a,
            g = u,
            h = g.tag;
          if (!(g.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var f = g.alternate;
            f
              ? ((g.updateQueue = f.updateQueue),
                (g.memoizedState = f.memoizedState),
                (g.lanes = f.lanes))
              : ((g.updateQueue = null), (g.memoizedState = null));
          }
          var v = Gs(i);
          if (v !== null) {
            ((v.flags &= -257),
              Ks(v, i, u, o, t),
              v.mode & 1 && Qs(o, d, t),
              (t = v),
              (a = d));
            var x = t.updateQueue;
            if (x === null) {
              var w = new Set();
              (w.add(a), (t.updateQueue = w));
            } else x.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              (Qs(o, d, t), Gi());
              break e;
            }
            a = Error(S(426));
          }
        } else if (G && u.mode & 1) {
          var z = Gs(i);
          if (z !== null) {
            (!(z.flags & 65536) && (z.flags |= 256),
              Ks(z, i, u, o, t),
              Ei(Cn(a, u)));
            break e;
          }
        }
        ((o = a = Cn(a, u)),
          oe !== 4 && (oe = 2),
          Zn === null ? (Zn = [o]) : Zn.push(o),
          (o = i));
        do {
          switch (o.tag) {
            case 3:
              ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
              var m = qa(o, a, t);
              $s(o, m);
              break e;
            case 1:
              u = a;
              var c = o.type,
                p = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (Lt === null || !Lt.has(p))))
              ) {
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var y = Ja(o, u, t);
                $s(o, y);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      vc(n);
    } catch (j) {
      ((t = j), ne === n && n !== null && (ne = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function gc() {
  var e = hl.current;
  return ((hl.current = ml), e === null ? ml : e);
}
function Gi() {
  ((oe === 0 || oe === 3 || oe === 2) && (oe = 4),
    se === null || (!(Xt & 268435455) && !(Dl & 268435455)) || St(se, ce));
}
function vl(e, t) {
  var n = A;
  A |= 2;
  var r = gc();
  (se !== e || ce !== t) && ((ot = null), Wt(e, t));
  do
    try {
      Yf();
      break;
    } catch (l) {
      hc(e, l);
    }
  while (!0);
  if ((Li(), (A = n), (hl.current = r), ne !== null)) throw Error(S(261));
  return ((se = null), (ce = 0), oe);
}
function Yf() {
  for (; ne !== null; ) yc(ne);
}
function Xf() {
  for (; ne !== null && !wd(); ) yc(ne);
}
function yc(e) {
  var t = wc(e.alternate, e, Ce);
  ((e.memoizedProps = e.pendingProps),
    t === null ? vc(e) : (ne = t),
    (bi.current = null));
}
function vc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Bf(n, t)), n !== null)) {
        ((n.flags &= 32767), (ne = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((oe = 6), (ne = null));
        return;
      }
    } else if (((n = bf(n, t, Ce)), n !== null)) {
      ne = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ne = t;
      return;
    }
    ne = t = e;
  } while (t !== null);
  oe === 0 && (oe = 5);
}
function Vt(e, t, n) {
  var r = V,
    l = Oe.transition;
  try {
    ((Oe.transition = null), (V = 1), Zf(e, t, n, r));
  } finally {
    ((Oe.transition = l), (V = r));
  }
  return null;
}
function Zf(e, t, n, r) {
  do wn();
  while (Nt !== null);
  if (A & 6) throw Error(S(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(S(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var o = n.lanes | n.childLanes;
  if (
    (Dd(e, o),
    e === se && ((ne = se = null), (ce = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Or ||
      ((Or = !0),
      Sc(Jr, function () {
        return (wn(), null);
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    ((o = Oe.transition), (Oe.transition = null));
    var i = V;
    V = 1;
    var u = A;
    ((A |= 4),
      (bi.current = null),
      Wf(e, n),
      fc(n, e),
      yf(Ro),
      (tl = !!zo),
      (Ro = zo = null),
      (e.current = n),
      Qf(n),
      Sd(),
      (A = u),
      (V = i),
      (Oe.transition = o));
  } else e.current = n;
  if (
    (Or && ((Or = !1), (Nt = e), (yl = l)),
    (o = e.pendingLanes),
    o === 0 && (Lt = null),
    jd(n.stateNode),
    _e(e, J()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
  if (gl) throw ((gl = !1), (e = ti), (ti = null), e);
  return (
    yl & 1 && e.tag !== 0 && wn(),
    (o = e.pendingLanes),
    o & 1 ? (e === ni ? qn++ : ((qn = 0), (ni = e))) : (qn = 0),
    Ot(),
    null
  );
}
function wn() {
  if (Nt !== null) {
    var e = qu(yl),
      t = Oe.transition,
      n = V;
    try {
      if (((Oe.transition = null), (V = 16 > e ? 16 : e), Nt === null))
        var r = !1;
      else {
        if (((e = Nt), (Nt = null), (yl = 0), A & 6)) throw Error(S(331));
        var l = A;
        for (A |= 4, E = e.current; E !== null; ) {
          var o = E,
            i = o.child;
          if (E.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var d = u[a];
                for (E = d; E !== null; ) {
                  var g = E;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xn(8, g, o);
                  }
                  var h = g.child;
                  if (h !== null) ((h.return = g), (E = h));
                  else
                    for (; E !== null; ) {
                      g = E;
                      var f = g.sibling,
                        v = g.return;
                      if ((ac(g), g === d)) {
                        E = null;
                        break;
                      }
                      if (f !== null) {
                        ((f.return = v), (E = f));
                        break;
                      }
                      E = v;
                    }
                }
              }
              var x = o.alternate;
              if (x !== null) {
                var w = x.child;
                if (w !== null) {
                  x.child = null;
                  do {
                    var z = w.sibling;
                    ((w.sibling = null), (w = z));
                  } while (w !== null);
                }
              }
              E = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) ((i.return = o), (E = i));
          else
            e: for (; E !== null; ) {
              if (((o = E), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Xn(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                ((m.return = o.return), (E = m));
                break e;
              }
              E = o.return;
            }
        }
        var c = e.current;
        for (E = c; E !== null; ) {
          i = E;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null) ((p.return = i), (E = p));
          else
            e: for (i = c; E !== null; ) {
              if (((u = E), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ll(9, u);
                  }
                } catch (j) {
                  Z(u, u.return, j);
                }
              if (u === i) {
                E = null;
                break e;
              }
              var y = u.sibling;
              if (y !== null) {
                ((y.return = u.return), (E = y));
                break e;
              }
              E = u.return;
            }
        }
        if (
          ((A = l), Ot(), et && typeof et.onPostCommitFiberRoot == "function")
        )
          try {
            et.onPostCommitFiberRoot(Sl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((V = n), (Oe.transition = t));
    }
  }
  return !1;
}
function su(e, t, n) {
  ((t = Cn(n, t)),
    (t = qa(e, t, 1)),
    (e = Pt(e, t, 1)),
    (t = ve()),
    e !== null && (yr(e, 1, t), _e(e, t)));
}
function Z(e, t, n) {
  if (e.tag === 3) su(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        su(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Lt === null || !Lt.has(r)))
        ) {
          ((e = Cn(n, e)),
            (e = Ja(t, e, 1)),
            (t = Pt(t, e, 1)),
            (e = ve()),
            t !== null && (yr(t, 1, e), _e(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function qf(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = ve()),
    (e.pingedLanes |= e.suspendedLanes & n),
    se === e &&
      (ce & n) === n &&
      (oe === 4 || (oe === 3 && (ce & 130023424) === ce && 500 > J() - Hi)
        ? Wt(e, 0)
        : (Bi |= n)),
    _e(e, t));
}
function xc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Cr), (Cr <<= 1), !(Cr & 130023424) && (Cr = 4194304))
      : (t = 1));
  var n = ve();
  ((e = ft(e, t)), e !== null && (yr(e, t, n), _e(e, n)));
}
function Jf(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), xc(e, n));
}
function ep(e, t) {
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
      throw Error(S(314));
  }
  (r !== null && r.delete(t), xc(e, n));
}
var wc;
wc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ne.current) ke = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((ke = !1), Vf(e, t, n));
      ke = !!(e.flags & 131072);
    }
  else ((ke = !1), G && t.flags & 1048576 && ja(t, ul, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Qr(e, t), (e = t.pendingProps));
      var l = kn(t, he.current);
      (xn(t, n), (l = Fi(null, t, r, e, l, n)));
      var o = Ui();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            je(r) ? ((o = !0), il(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Mi(t),
            (l.updater = Pl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ho(t, r, e, n),
            (t = Go(null, t, r, !0, o, n)))
          : ((t.tag = 0), G && o && _i(t), ye(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Qr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = np(r)),
          (e = He(r, e)),
          l)
        ) {
          case 0:
            t = Qo(null, t, r, e, n);
            break e;
          case 1:
            t = Zs(null, t, r, e, n);
            break e;
          case 11:
            t = Ys(null, t, r, e, n);
            break e;
          case 14:
            t = Xs(null, t, r, He(r.type, e), n);
            break e;
        }
        throw Error(S(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : He(r, l)),
        Qo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : He(r, l)),
        Zs(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((rc(t), e === null)) throw Error(S(387));
        ((r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Da(e, t),
          dl(t, r, null, n));
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
            ((l = Cn(Error(S(423)), t)), (t = qs(e, t, r, n, l)));
            break e;
          } else if (r !== l) {
            ((l = Cn(Error(S(424)), t)), (t = qs(e, t, r, n, l)));
            break e;
          } else
            for (
              Ee = Et(t.stateNode.containerInfo.firstChild),
                Pe = t,
                G = !0,
                Qe = null,
                n = Pa(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((Nn(), r === l)) {
            t = pt(e, t, n);
            break e;
          }
          ye(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ia(t),
        e === null && Vo(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Oo(r, l) ? (i = null) : o !== null && Oo(r, o) && (t.flags |= 32),
        nc(e, t),
        ye(e, t, i, n),
        t.child
      );
    case 6:
      return (e === null && Vo(t), null);
    case 13:
      return lc(e, t, n);
    case 4:
      return (
        Ti(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = jn(t, null, r, n)) : ye(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : He(r, l)),
        Ys(e, t, r, l, n)
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
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          B(al, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Ye(o.value, i)) {
            if (o.children === l.children && !Ne.current) {
              t = pt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      ((a = at(-1, n & -n)), (a.tag = 2));
                      var d = o.updateQueue;
                      if (d !== null) {
                        d = d.shared;
                        var g = d.pending;
                        (g === null
                          ? (a.next = a)
                          : ((a.next = g.next), (g.next = a)),
                          (d.pending = a));
                      }
                    }
                    ((o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      bo(o.return, n, t),
                      (u.lanes |= n));
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(S(341));
                ((i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  bo(i, n, t),
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
        (ye(e, t, l.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        xn(t, n),
        (l = Fe(l)),
        (r = r(l)),
        (t.flags |= 1),
        ye(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = He(r, t.pendingProps)),
        (l = He(r.type, l)),
        Xs(e, t, r, l, n)
      );
    case 15:
      return ec(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : He(r, l)),
        Qr(e, t),
        (t.tag = 1),
        je(r) ? ((e = !0), il(t)) : (e = !1),
        xn(t, n),
        Za(t, r, l),
        Ho(t, r, l, n),
        Go(null, t, r, !0, e, n)
      );
    case 19:
      return oc(e, t, n);
    case 22:
      return tc(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function Sc(e, t) {
  return Ku(e, t);
}
function tp(e, t, n, r) {
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
function Re(e, t, n, r) {
  return new tp(e, t, n, r);
}
function Ki(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function np(e) {
  if (typeof e == "function") return Ki(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === pi)) return 11;
    if (e === mi) return 14;
  }
  return 2;
}
function It(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Re(e.tag, t, e.key, e.mode)),
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
function Yr(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Ki(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case nn:
        return Qt(n.children, l, o, t);
      case fi:
        ((i = 8), (l |= 8));
        break;
      case mo:
        return (
          (e = Re(12, n, t, l | 2)),
          (e.elementType = mo),
          (e.lanes = o),
          e
        );
      case ho:
        return ((e = Re(13, n, t, l)), (e.elementType = ho), (e.lanes = o), e);
      case go:
        return ((e = Re(19, n, t, l)), (e.elementType = go), (e.lanes = o), e);
      case Iu:
        return Il(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Lu:
              i = 10;
              break e;
            case Du:
              i = 9;
              break e;
            case pi:
              i = 11;
              break e;
            case mi:
              i = 14;
              break e;
            case vt:
              ((i = 16), (r = null));
              break e;
          }
        throw Error(S(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Re(i, n, t, l)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = o),
    t
  );
}
function Qt(e, t, n, r) {
  return ((e = Re(7, e, r, t)), (e.lanes = n), e);
}
function Il(e, t, n, r) {
  return (
    (e = Re(22, e, r, t)),
    (e.elementType = Iu),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ao(e, t, n) {
  return ((e = Re(6, e, null, t)), (e.lanes = n), e);
}
function co(e, t, n) {
  return (
    (t = Re(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function rp(e, t, n, r, l) {
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
    (this.eventTimes = Hl(0)),
    (this.expirationTimes = Hl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Hl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null));
}
function Yi(e, t, n, r, l, o, i, u, a) {
  return (
    (e = new rp(e, t, n, u, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Re(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Mi(o),
    e
  );
}
function lp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: tn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function kc(e) {
  if (!e) return Tt;
  e = e._reactInternals;
  e: {
    if (Jt(e) !== e || e.tag !== 1) throw Error(S(170));
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
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (je(n)) return ka(e, n, t);
  }
  return t;
}
function Nc(e, t, n, r, l, o, i, u, a) {
  return (
    (e = Yi(n, r, !0, e, l, o, i, u, a)),
    (e.context = kc(null)),
    (n = e.current),
    (r = ve()),
    (l = Dt(n)),
    (o = at(r, l)),
    (o.callback = t ?? null),
    Pt(n, o, l),
    (e.current.lanes = l),
    yr(e, l, r),
    _e(e, r),
    e
  );
}
function Ml(e, t, n, r) {
  var l = t.current,
    o = ve(),
    i = Dt(l);
  return (
    (n = kc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = at(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Pt(l, t, i)),
    e !== null && (Ke(e, l, i, o), Br(e, l, i)),
    i
  );
}
function xl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function uu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Xi(e, t) {
  (uu(e, t), (e = e.alternate) && uu(e, t));
}
function op() {
  return null;
}
var jc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Zi(e) {
  this._internalRoot = e;
}
Tl.prototype.render = Zi.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  Ml(e, t, null, null);
};
Tl.prototype.unmount = Zi.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (Zt(function () {
      Ml(null, e, null, null);
    }),
      (t[dt] = null));
  }
};
function Tl(e) {
  this._internalRoot = e;
}
Tl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ta();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < wt.length && t !== 0 && t < wt[n].priority; n++);
    (wt.splice(n, 0, e), n === 0 && ra(e));
  }
};
function qi(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function zl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function au() {}
function ip(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var d = xl(i);
        o.call(d);
      };
    }
    var i = Nc(t, r, e, 0, null, !1, !1, "", au);
    return (
      (e._reactRootContainer = i),
      (e[dt] = i.current),
      sr(e.nodeType === 8 ? e.parentNode : e),
      Zt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var d = xl(a);
      u.call(d);
    };
  }
  var a = Yi(e, 0, !1, null, null, !1, !1, "", au);
  return (
    (e._reactRootContainer = a),
    (e[dt] = a.current),
    sr(e.nodeType === 8 ? e.parentNode : e),
    Zt(function () {
      Ml(t, a, n, r);
    }),
    a
  );
}
function Rl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var a = xl(i);
        u.call(a);
      };
    }
    Ml(t, i, e, l);
  } else i = ip(n, t, e, l, r);
  return xl(i);
}
Ju = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = bn(t.pendingLanes);
        n !== 0 &&
          (yi(t, n | 1), _e(t, J()), !(A & 6) && ((En = J() + 500), Ot()));
      }
      break;
    case 13:
      (Zt(function () {
        var r = ft(e, 1);
        if (r !== null) {
          var l = ve();
          Ke(r, e, 1, l);
        }
      }),
        Xi(e, 1));
  }
};
vi = function (e) {
  if (e.tag === 13) {
    var t = ft(e, 134217728);
    if (t !== null) {
      var n = ve();
      Ke(t, e, 134217728, n);
    }
    Xi(e, 134217728);
  }
};
ea = function (e) {
  if (e.tag === 13) {
    var t = Dt(e),
      n = ft(e, t);
    if (n !== null) {
      var r = ve();
      Ke(n, e, t, r);
    }
    Xi(e, t);
  }
};
ta = function () {
  return V;
};
na = function (e, t) {
  var n = V;
  try {
    return ((V = e), t());
  } finally {
    V = n;
  }
};
Co = function (e, t, n) {
  switch (t) {
    case "input":
      if ((xo(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var l = _l(r);
            if (!l) throw Error(S(90));
            (Tu(r), xo(r, l));
          }
        }
      }
      break;
    case "textarea":
      Ru(e, n);
      break;
    case "select":
      ((t = n.value), t != null && hn(e, !!n.multiple, t, !1));
  }
};
bu = Wi;
Bu = Zt;
var sp = { usingClientEntryPoint: !1, Events: [xr, sn, _l, $u, Vu, Wi] },
  An = {
    findFiberByHostInstance: bt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  up = {
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
    currentDispatcherRef: mt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Qu(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: An.findFiberByHostInstance || op,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Fr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Fr.isDisabled && Fr.supportsFiber)
    try {
      ((Sl = Fr.inject(up)), (et = Fr));
    } catch {}
}
De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sp;
De.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!qi(t)) throw Error(S(200));
  return lp(e, t, null, n);
};
De.createRoot = function (e, t) {
  if (!qi(e)) throw Error(S(299));
  var n = !1,
    r = "",
    l = jc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Yi(e, 1, !1, null, null, n, !1, r, l)),
    (e[dt] = t.current),
    sr(e.nodeType === 8 ? e.parentNode : e),
    new Zi(t)
  );
};
De.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(S(188))
      : ((e = Object.keys(e).join(",")), Error(S(268, e)));
  return ((e = Qu(t)), (e = e === null ? null : e.stateNode), e);
};
De.flushSync = function (e) {
  return Zt(e);
};
De.hydrate = function (e, t, n) {
  if (!zl(t)) throw Error(S(200));
  return Rl(null, e, t, !0, n);
};
De.hydrateRoot = function (e, t, n) {
  if (!qi(e)) throw Error(S(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = jc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Nc(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[dt] = t.current),
    sr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l));
  return new Tl(t);
};
De.render = function (e, t, n) {
  if (!zl(t)) throw Error(S(200));
  return Rl(null, e, t, !1, n);
};
De.unmountComponentAtNode = function (e) {
  if (!zl(e)) throw Error(S(40));
  return e._reactRootContainer
    ? (Zt(function () {
        Rl(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[dt] = null));
        });
      }),
      !0)
    : !1;
};
De.unstable_batchedUpdates = Wi;
De.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!zl(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return Rl(e, t, n, !1, r);
};
De.version = "18.3.1-next-f1338f8080-20240426";
function _c() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_c);
    } catch (e) {
      console.error(e);
    }
}
(_c(), (_u.exports = De));
var ap = _u.exports,
  Cc,
  cu = ap;
((Cc = cu.createRoot), cu.hydrateRoot);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var cp = {
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
 */ const dp = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  ue = (e, t) => {
    const n = N.forwardRef(
      (
        {
          color: r = "currentColor",
          size: l = 24,
          strokeWidth: o = 2,
          absoluteStrokeWidth: i,
          className: u = "",
          children: a,
          ...d
        },
        g,
      ) =>
        N.createElement(
          "svg",
          {
            ref: g,
            ...cp,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: i ? (Number(o) * 24) / Number(l) : o,
            className: ["lucide", `lucide-${dp(e)}`, u].join(" "),
            ...d,
          },
          [
            ...t.map(([h, f]) => N.createElement(h, f)),
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
 */ const Ol = ue("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fp = ue("AlertTriangle", [
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
 */ const pp = ue("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ec = ue("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pc = ue("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mp = ue("Container", [
  [
    "path",
    {
      d: "M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",
      key: "1t2lqe",
    },
  ],
  ["path", { d: "M10 21.9V14L2.1 9.1", key: "o7czzq" }],
  ["path", { d: "m10 14 11.9-6.9", key: "zm5e20" }],
  ["path", { d: "M14 19.8v-8.1", key: "159ecu" }],
  ["path", { d: "M18 17.5V9.4", key: "11uown" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fl = ue("CreditCard", [
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
 */ const hp = ue("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gp = ue("Layers", [
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
 */ const yp = ue("Lightbulb", [
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
 */ const vp = ue("Package", [
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
 */ const Ji = ue("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const du = ue("RefreshCw", [
  [
    "path",
    { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" },
  ],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  [
    "path",
    { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" },
  ],
  ["path", { d: "M8 16H3v5", key: "1cv678" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const es = ue("Save", [
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
 */ const fo = ue("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xp = ue("Settings", [
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
 */ const ts = ue("Trash2", [
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
 */ const In = ue("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
let mn = null;
const Lc = async () => {
    if (mn) return mn;
    try {
      const e = await fetch("../config.txt");
      if (!e.ok) throw new Error("Failed to load configuration");
      return ((mn = await e.json()), mn);
    } catch (e) {
      throw (console.error("Error loading config:", e), e);
    }
  },
  wp = (e) => {
    if (!mn) throw new Error("Configuration not loaded");
    return `${mn.domain}${e}`;
  },
  Ae = async (e, t = {}) => {
    await Lc();
    const n = wp(e),
      { method: r = "GET", headers: l = {}, body: o } = t,
      i = { method: r, headers: { "Content-Type": "application/json", ...l } };
    (o && r !== "GET" && (i.body = JSON.stringify(o)),
      console.log("=== API Request ==="),
      console.log("URL:", n),
      console.log("Method:", r),
      console.log("Request Data:", o));
    try {
      const u = await fetch(n, i);
      if (!u.ok) throw new Error(`HTTP error! status: ${u.status}`);
      const a = await u.json();
      return (
        console.log("Response Data:", a),
        console.log("==================="),
        a
      );
    } catch (u) {
      throw (
        console.error("API call failed:", u),
        console.log("==================="),
        u
      );
    }
  },
  Sp = async (e) =>
    await Ae("/api/session/login", { method: "POST", body: { Data: e } }),
  kp = (e) => (
    sessionStorage.setItem("user_session", JSON.stringify(e)),
    sessionStorage.setItem("loggedGUID", e.GUID || ""),
    sessionStorage.setItem("loggedEmployer", e.Employer || ""),
    sessionStorage.setItem("loggedID", e.ID || ""),
    sessionStorage.setItem("loggedName", e.Name || ""),
    sessionStorage.setItem("loggedTime", e.loginTime || ""),
    sessionStorage.setItem("loggedLevel", e.level || ""),
    e
  ),
  Np = () => {
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
      return (console.error("Failed to parse user session:", t), null);
    }
  },
  jp = () => !!Np(),
  Dc = ({ size: e = "medium", className: t = "" }) => {
    const n = { small: "w-4 h-4", medium: "w-6 h-6", large: "w-8 h-8" };
    return s.jsx("div", {
      className: `inline-block animate-spin rounded-full border-2 border-solid border-current border-r-transparent ${n[e]} ${t}`,
      role: "status",
      "aria-label": "Loading",
      children: s.jsx("span", { className: "sr-only", children: "Loading..." }),
    });
  },
  _p = {
    zh: {
      "app.title": "系統登入",
      "error.api": "系統錯誤，請稍後再試",
      logout: "登出",
      copyright: "Copyright ©2025 鴻森智能科技",
    },
    en: {
      "app.title": "System Login",
      "error.api": "System error, please try again later",
      logout: "Logout",
      copyright: "Copyright ©2025 Hongsen Technology",
    },
  },
  Ic = N.createContext(void 0),
  Cp = ({ children: e }) => {
    const [t, n] = N.useState("zh"),
      r = () => {
        n((o) => (o === "zh" ? "en" : "zh"));
      },
      l = (o, i) => {
        let u = _p[t][o] || o;
        return (
          i &&
            Object.entries(i).forEach(([a, d]) => {
              u = u.replace(`{${a}}`, d.toString());
            }),
          u
        );
      };
    return s.jsx(Ic.Provider, {
      value: { language: t, toggleLanguage: r, t: l },
      children: e,
    });
  },
  Ep = () => {
    const e = N.useContext(Ic);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  },
  Pp = ({ onLogin: e }) => {
    const { t } = Ep(),
      [n, r] = N.useState(""),
      [l, o] = N.useState(""),
      [i, u] = N.useState(null),
      [a, d] = N.useState(!1),
      g = async (h) => {
        (h.preventDefault(), u(null), d(!0));
        try {
          const f = await Sp({ ID: n, Password: l });
          f.Code === 200
            ? (kp(f.Data), e())
            : f.Code === -1 || f.Code === -2
              ? u(f.Result)
              : u(t("error.api"));
        } catch (f) {
          (console.error("Login error:", f),
            u(f instanceof Error ? f.message : t("error.api")));
        } finally {
          d(!1);
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
                s.jsx(Ol, { size: 20 }),
                s.jsx("span", { children: i }),
              ],
            }),
          s.jsxs("form", {
            onSubmit: g,
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
                    onChange: (h) => r(h.target.value),
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
                    value: l,
                    onChange: (h) => o(h.target.value),
                    className:
                      "w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                    required: !0,
                    autoComplete: "current-password",
                  }),
                ],
              }),
              s.jsx("button", {
                type: "submit",
                disabled: a,
                className: `w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center ${a ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"}`,
                children: a
                  ? s.jsxs(s.Fragment, {
                      children: [
                        s.jsx(Dc, { size: "small\\", className: "mr-2" }),
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
  },
  Lp = async (e) =>
    await Ae("/api/medMap/get_medMap_by_department", {
      method: "POST",
      body: { ValueAry: e },
    }),
  Dp = (e) => {
    const t = [];
    return (
      e.forEach((n) => {
        n.medMap_Section.forEach((r) => {
          const l = r.sub_section.map((o) => {
            const i = [...o.shelf].sort((u, a) => {
              const d = parseInt(u.position.split(",")[0]),
                g = parseInt(a.position.split(",")[0]);
              return d - g;
            });
            return { subSection: o, shelves: i };
          });
          t.push({ medMapSection: r, subSections: l });
        });
      }),
      t
    );
  },
  Ip = async (e) =>
    await Ae("/api/medMap/add_stock", { method: "POST", body: { Data: [e] } }),
  Mp = async (e) =>
    await Ae("/api/medMap/update_stock", {
      method: "POST",
      body: { Data: [e] },
    }),
  Tp = async (e) =>
    await Ae("/api/medMap/update_sub_section", {
      method: "POST",
      body: { Data: [e] },
    }),
  zp = async (e) =>
    await Ae("/api/medmap/update_medMap_section", {
      method: "POST",
      body: { Data: [e] },
    }),
  Rp = async (e) =>
    await Ae("/api/medmap/add_shelf", { method: "POST", body: { Data: e } }),
  Op = async (e) =>
    await Ae("/api/medmap/update_shelf", {
      method: "POST",
      body: { Data: [e] },
    }),
  Fp = async (e) =>
    await Ae("/api/medmap/delete_shelf_by_GUID", {
      method: "POST",
      body: { ValueAry: [e] },
    }),
  Up = async (e) =>
    await Ae("/api/medmap/delete_stock_by_GUID", {
      method: "POST",
      body: { ValueAry: [e] },
    }),
  fu = async (e) => {
    const t = [
      `ip=${e.ip}`,
      `color=${e.color}`,
      `lightness=${e.lightness}`,
      `device_type=${e.device_type}`,
    ];
    return (
      e.start_num !== void 0 &&
        e.end_num !== void 0 &&
        t.splice(1, 0, `start_num=${e.start_num}`, `end_num=${e.end_num}`),
      await Ae("/api/device_control/light_action", {
        method: "POST",
        body: { Method: "light_action", ValueAry: t },
      })
    );
  },
  Ap = (e, t, n, r, l) => {
    const o = n === "RowsLED",
      i = { ip: o ? t : e.ip, color: r, lightness: l, device_type: n };
    if (o && e.led_index) {
      const u = e.led_index.split(",").map((a) => a.trim());
      ((i.start_num = u[0]), (i.end_num = u[1]));
    }
    return i;
  },
  pu = async (e, t) => {
    (await fu(e),
      t &&
        t > 0 &&
        setTimeout(async () => {
          const n = { ...e, color: "0,0,0" };
          await fu(n);
        }, t * 1e3));
  },
  $p = async (e, t, n, r, l, o) => {
    const i = t && n,
      u = e.ip && e.device_type;
    if (i) {
      const a = Ap(e, t, n, r, l);
      await pu(a, o);
    }
    if (u) {
      const a = {
        ip: e.ip,
        color: r,
        lightness: l,
        device_type: e.device_type,
      };
      if (e.device_type === "RowsLED" && e.led_index) {
        const d = e.led_index.split(",").map((g) => g.trim());
        ((a.start_num = d[0]), (a.end_num = d[1]));
      }
      await pu(a, o);
    }
  },
  Vp = [
    { name: "藍色", value: "255,0,0" },
    { name: "綠色", value: "0,255,0" },
    { name: "紅色", value: "0,0,255" },
    { name: "黃色", value: "0,255,255" },
    { name: "紫色", value: "255,0,255" },
    { name: "青色", value: "255,255,0" },
  ],
  bp = { color: "255,0,0", lightness: 0.9, autoOffSeconds: 30 },
  Bp = { ledIndexes: [] },
  Mc = "light_settings",
  Tc = "led_index_settings",
  Hp = () => {
    try {
      const e = localStorage.getItem(Mc);
      if (e) return JSON.parse(e);
    } catch (e) {
      console.error("Failed to load settings:", e);
    }
    return bp;
  },
  Wp = (e) => {
    try {
      localStorage.setItem(Mc, JSON.stringify(e));
    } catch (t) {
      console.error("Failed to save settings:", t);
    }
  },
  Qp = () => {
    try {
      const e = localStorage.getItem(Tc);
      if (e) return JSON.parse(e);
    } catch (e) {
      console.error("Failed to load LED index settings:", e);
    }
    return Bp;
  },
  Gp = (e) => {
    try {
      localStorage.setItem(Tc, JSON.stringify(e));
    } catch (t) {
      console.error("Failed to save LED index settings:", t);
    }
  },
  Kp = ({ stock: e, onEdit: t, onLight: n, onDelete: r }) => {
    const [l, o] = N.useState(!1),
      i = async () => {
        o(!0);
        try {
          await n(e);
        } finally {
          o(!1);
        }
      };
    return s.jsxs("div", {
      className:
        "bg-white border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all duration-200",
      children: [
        s.jsx("div", {
          className: "p-3 pb-2",
          children: s.jsxs("div", {
            className: "flex items-start gap-2",
            children: [
              s.jsx(vp, {
                className: "w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5",
              }),
              s.jsxs("div", {
                className: "flex-1 min-w-0",
                children: [
                  s.jsx("div", {
                    className: "font-semibold text-gray-900 text-sm truncate",
                    title: e.name,
                    children: e.code,
                  }),
                  s.jsx("div", {
                    className: "text-base text-gray-600 truncate",
                    title: e.name,
                    children: e.name,
                  }),
                  s.jsxs("div", {
                    className: "mt-2 space-y-1",
                    children: [
                      s.jsxs("div", {
                        className: "flex justify-between text-base",
                        children: [
                          s.jsx("span", {
                            className: "text-gray-500",
                            children: "料號:",
                          }),
                          s.jsx("span", {
                            className: "text-gray-700 font-medium",
                            children: e.material_no,
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: "flex justify-between text-base",
                        children: [
                          s.jsx("span", {
                            className: "text-gray-500",
                            children: "批號:",
                          }),
                          s.jsx("span", {
                            className: "text-gray-700 font-medium",
                            children: Array.isArray(e.lot)
                              ? e.lot.join(", ")
                              : e.lot,
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: "flex justify-between text-base",
                        children: [
                          s.jsx("span", {
                            className: "text-gray-500",
                            children: "效期:",
                          }),
                          s.jsx("span", {
                            className: "text-gray-700 font-medium",
                            children: Array.isArray(e.expiry_date)
                              ? e.expiry_date.join(", ")
                              : typeof e.expiry_date == "string"
                                ? e.expiry_date.split(" ")[0]
                                : e.expiry_date,
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: "flex justify-between text-base",
                        children: [
                          s.jsx("span", {
                            className: "text-gray-500",
                            children: "數量:",
                          }),
                          s.jsx("span", {
                            className: "text-blue-600 font-semibold",
                            children: Array.isArray(e.qty)
                              ? e.qty.join(", ")
                              : e.qty,
                          }),
                        ],
                      }),
                      e.ip &&
                        s.jsxs("div", {
                          className: "flex justify-between text-base",
                          children: [
                            s.jsx("span", {
                              className: "text-gray-500",
                              children: "IP:",
                            }),
                            s.jsx("span", {
                              className: "text-gray-700 font-medium text-xs",
                              title: e.ip,
                              children: e.ip,
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
        s.jsxs("div", {
          className: "border-t border-gray-200 flex",
          children: [
            s.jsxs("button", {
              onClick: i,
              disabled: l,
              className:
                "flex-1 flex items-center justify-center gap-1.5 py-2 text-yellow-600 hover:bg-yellow-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed rounded-bl-lg",
              title: "亮燈",
              children: [
                s.jsx(yp, { className: "w-4 h-4" }),
                s.jsx("span", {
                  className: "text-sm font-medium",
                  children: "亮燈",
                }),
              ],
            }),
            s.jsx("div", { className: "w-px bg-gray-200" }),
            s.jsxs("button", {
              onClick: () => t(e),
              className:
                "flex-1 flex items-center justify-center gap-1.5 py-2 text-blue-600 hover:bg-blue-50 transition-colors",
              title: "編輯",
              children: [
                s.jsx(Fl, { className: "w-4 h-4" }),
                s.jsx("span", {
                  className: "text-sm font-medium",
                  children: "編輯",
                }),
              ],
            }),
            s.jsx("div", { className: "w-px bg-gray-200" }),
            s.jsxs("button", {
              onClick: () => r(e),
              className:
                "flex-1 flex items-center justify-center gap-1.5 py-2 text-red-600 hover:bg-red-50 transition-colors rounded-br-lg",
              title: "刪除",
              children: [
                s.jsx(ts, { className: "w-4 h-4" }),
                s.jsx("span", {
                  className: "text-sm font-medium",
                  children: "刪除",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Yp = ({
    shelf: e,
    index: t,
    subSectionGuid: n,
    onAddStock: r,
    onEditStock: l,
    onEditShelf: o,
    onLightStock: i,
    onDeleteShelf: u,
    onDeleteStock: a,
  }) => {
    const d = [...e.medMapStock].sort((h, f) => {
        const v = parseInt(h.location.split(",")[0]),
          x = parseInt(f.location.split(",")[0]);
        return v - x;
      }),
      g = e.name || `層架 ${t + 1}`;
    return s.jsx("div", {
      className: "mb-4",
      children: s.jsxs("div", {
        className: "flex items-start gap-4",
        children: [
          s.jsxs("div", {
            className: "flex-shrink-0 w-28",
            children: [
              s.jsx("div", {
                className:
                  "bg-gradient-to-r from-gray-700 to-gray-600 text-white px-3 py-2 rounded-lg text-center shadow-md",
                children: s.jsx("div", {
                  className: "text-sm font-bold",
                  children: g,
                }),
              }),
              s.jsxs("div", {
                className: "mt-2 text-base text-gray-500 text-center",
                children: [e.width, "×", e.height],
              }),
              s.jsx("div", {
                className: "mt-2 text-base text-gray-500 text-center",
                children: e.position,
              }),
              s.jsxs("div", {
                className: "mt-2 text-xs text-gray-400 text-center",
                title: e.ip_light,
                children: ["IP: ", e.ip_light],
              }),
              (e.start_num || e.end_num) &&
                s.jsxs("div", {
                  className: "mt-2 text-xs text-gray-400 text-center",
                  children: [
                    "燈條: ",
                    e.start_num || "0",
                    " - ",
                    e.end_num || "0",
                  ],
                }),
              s.jsxs("button", {
                onClick: () => o(e, n),
                className:
                  "mt-2 w-full inline-flex items-center justify-center gap-1 px-2 py-1.5 bg-gray-600 text-white text-xs rounded-lg hover:bg-gray-700 transition-colors",
                title: "編輯層架",
                children: [s.jsx(Fl, { className: "w-3 h-3" }), "編輯"],
              }),
              s.jsxs("button", {
                onClick: () => u(e.GUID, g),
                className:
                  "mt-1.5 w-full inline-flex items-center justify-center gap-1 px-2 py-1.5 bg-red-600 text-white text-xs rounded-lg hover:bg-red-700 transition-colors",
                title: "刪除層架",
                children: [s.jsx(ts, { className: "w-3 h-3" }), "刪除"],
              }),
            ],
          }),
          s.jsxs("div", {
            className:
              "flex-1 bg-gray-50 rounded-lg p-4 border-2 border-gray-200",
            children: [
              s.jsxs("div", {
                className: "flex items-center justify-between mb-3",
                children: [
                  s.jsxs("div", {
                    className: "text-base text-gray-500",
                    children: ["共 ", d.length, " 個貨品"],
                  }),
                  s.jsxs("button", {
                    onClick: () => r(e.GUID, g, n),
                    className:
                      "inline-flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors",
                    children: [s.jsx(Ji, { className: "w-4 h-4" }), "新增貨物"],
                  }),
                ],
              }),
              d.length > 0
                ? s.jsx("div", {
                    className:
                      "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3",
                    children: d.map((h) =>
                      s.jsx(
                        Kp,
                        {
                          stock: h,
                          onEdit: (f) => l(f, g, n),
                          onLight: async (f) =>
                            await i(f, e.ip_light, e.device_type),
                          onDelete: async (f) => await a(f.GUID, f.name),
                        },
                        h.GUID,
                      ),
                    ),
                  })
                : s.jsx("div", {
                    className: "text-center py-8 text-gray-400",
                    children: s.jsx("div", {
                      className: "text-sm",
                      children: "此層架無貨品",
                    }),
                  }),
            ],
          }),
        ],
      }),
    });
  },
  Xp = ({
    subSection: e,
    index: t,
    isExpanded: n,
    onToggleExpand: r,
    onAddStock: l,
    onEditStock: o,
    onEditShelf: i,
    onLightStock: u,
    onUpdateSubSectionName: a,
    onAddShelf: d,
    onDeleteShelf: g,
    onDeleteStock: h,
  }) => {
    const [f, v] = N.useState(!1),
      [x, w] = N.useState(""),
      [z, m] = N.useState(!1),
      c = e.subSection.name || `虛擬容器 ${t + 1}`,
      p = () => {
        (w(e.subSection.name), v(!0));
      },
      y = async () => {
        if (x.trim() !== "")
          try {
            (m(!0), await a(e.subSection.GUID, x.trim()), v(!1));
          } catch (k) {
            console.error("Failed to update sub section name:", k);
          } finally {
            m(!1);
          }
      },
      j = () => {
        (v(!1), w(""));
      };
    return s.jsxs("div", {
      className: "bg-gray-50 rounded-lg border border-gray-200 overflow-hidden",
      children: [
        s.jsxs("div", {
          className:
            "flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-100 transition-colors",
          onClick: () => !f && r(e.subSection.GUID, !n),
          children: [
            s.jsx("button", {
              onClick: (k) => {
                (k.stopPropagation(), r(e.subSection.GUID, !n));
              },
              className: "p-1.5 hover:bg-gray-200 rounded-lg transition-colors",
              title: n ? "收合" : "展開",
              children: n
                ? s.jsx(Ec, { className: "w-4 h-4 text-gray-600" })
                : s.jsx(Pc, { className: "w-4 h-4 text-gray-600" }),
            }),
            s.jsx("div", {
              className: "bg-gray-600 p-2 rounded-lg",
              children: s.jsx(gp, { className: "w-5 h-5 text-white" }),
            }),
            s.jsx("div", {
              className: "flex-1",
              onClick: (k) => f && k.stopPropagation(),
              children: f
                ? s.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      s.jsx("input", {
                        type: "text",
                        value: x,
                        onChange: (k) => w(k.target.value),
                        className:
                          "px-2.5 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base font-semibold",
                        placeholder: "輸入容器名稱",
                        autoFocus: !0,
                        disabled: z,
                      }),
                      s.jsx("button", {
                        onClick: y,
                        disabled: z || !x.trim(),
                        className:
                          "p-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                        title: "儲存",
                        children: s.jsx(es, { className: "w-3.5 h-3.5" }),
                      }),
                      s.jsx("button", {
                        onClick: j,
                        disabled: z,
                        className:
                          "p-1 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                        title: "取消",
                        children: s.jsx(In, { className: "w-3.5 h-3.5" }),
                      }),
                    ],
                  })
                : s.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      s.jsx("h3", {
                        className: "text-base font-semibold text-gray-800",
                        children: c,
                      }),
                      s.jsx("button", {
                        onClick: (k) => {
                          (k.stopPropagation(), p());
                        },
                        className:
                          "p-1 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition-colors",
                        title: "編輯名稱",
                        children: s.jsx(Fl, { className: "w-3.5 h-3.5" }),
                      }),
                    ],
                  }),
            }),
            s.jsxs("div", {
              className: "ml-auto flex items-center gap-2",
              children: [
                s.jsxs("div", {
                  className: "bg-gray-200 px-3 py-1.5 rounded-lg",
                  children: [
                    s.jsx("span", {
                      className: "text-xs text-gray-600",
                      children: "共 ",
                    }),
                    s.jsx("span", {
                      className: "text-base font-bold text-gray-700",
                      children: e.shelves.length,
                    }),
                    s.jsx("span", {
                      className: "text-xs text-gray-600",
                      children: " 層",
                    }),
                  ],
                }),
                s.jsxs("button", {
                  onClick: (k) => {
                    (k.stopPropagation(), d(e.subSection.GUID));
                  },
                  className:
                    "inline-flex items-center gap-1 px-2.5 py-1.5 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors",
                  title: "新增層架",
                  children: [
                    s.jsx(Ji, { className: "w-3.5 h-3.5" }),
                    s.jsx("span", {
                      className: "text-xs font-medium",
                      children: "新增層架",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        n &&
          s.jsx("div", {
            className: "px-4 pb-4 pt-2",
            children: s.jsx("div", {
              className: "space-y-2",
              children: e.shelves.map((k, C) =>
                s.jsx(
                  Yp,
                  {
                    shelf: k,
                    index: C,
                    subSectionGuid: e.subSection.GUID,
                    onAddStock: l,
                    onEditStock: o,
                    onEditShelf: i,
                    onLightStock: u,
                    onDeleteShelf: g,
                    onDeleteStock: h,
                  },
                  k.GUID,
                ),
              ),
            }),
          }),
      ],
    });
  },
  Zp = ({
    section: e,
    index: t,
    isExpanded: n,
    expandedSubSections: r,
    onToggleExpand: l,
    onToggleSubSectionExpand: o,
    onAddStock: i,
    onEditStock: u,
    onEditShelf: a,
    onLightStock: d,
    onUpdateMedMapSectionName: g,
    onUpdateSubSectionName: h,
    onAddShelf: f,
    onDeleteShelf: v,
    onDeleteStock: x,
  }) => {
    const [w, z] = N.useState(!1),
      [m, c] = N.useState(""),
      [p, y] = N.useState(!1),
      j = e.medMapSection.name || `櫃體 ${t + 1}`,
      k = e.subSections.reduce((D, re) => D + re.shelves.length, 0),
      C = () => {
        (c(e.medMapSection.name), z(!0));
      },
      L = async () => {
        if (m.trim() !== "")
          try {
            (y(!0),
              await g(e.medMapSection.GUID, m.trim(), {
                GUID: e.medMapSection.GUID,
                Master_GUID: e.medMapSection.Master_GUID,
                name: m.trim(),
                ip_light: e.medMapSection.ip_light,
                device_type: e.medMapSection.device_type,
                position: e.medMapSection.position,
                absolute_position: e.medMapSection.absolute_position,
                type: e.medMapSection.type,
                reverse: e.medMapSection.reverse,
              }),
              z(!1));
          } catch (D) {
            console.error("Failed to update medMap section name:", D);
          } finally {
            y(!1);
          }
      },
      b = () => {
        (z(!1), c(""));
      };
    return s.jsxs("div", {
      className:
        "bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden mb-6",
      children: [
        s.jsxs("div", {
          className:
            "flex items-center gap-3 p-6 cursor-pointer hover:bg-gray-50 transition-colors",
          onClick: () => !w && l(e.medMapSection.GUID, !n),
          children: [
            s.jsx("button", {
              onClick: (D) => {
                (D.stopPropagation(), l(e.medMapSection.GUID, !n));
              },
              className: "p-2 hover:bg-gray-200 rounded-lg transition-colors",
              title: n ? "收合" : "展開",
              children: n
                ? s.jsx(Ec, { className: "w-5 h-5 text-gray-600" })
                : s.jsx(Pc, { className: "w-5 h-5 text-gray-600" }),
            }),
            s.jsx("div", {
              className: "bg-blue-600 p-2.5 rounded-lg",
              children: s.jsx(mp, { className: "w-6 h-6 text-white" }),
            }),
            s.jsx("div", {
              className: "flex-1",
              onClick: (D) => w && D.stopPropagation(),
              children: w
                ? s.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      s.jsx("input", {
                        type: "text",
                        value: m,
                        onChange: (D) => c(D.target.value),
                        className:
                          "px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg font-bold",
                        placeholder: "輸入櫃體名稱",
                        autoFocus: !0,
                        disabled: p,
                      }),
                      s.jsx("button", {
                        onClick: L,
                        disabled: p || !m.trim(),
                        className:
                          "p-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                        title: "儲存",
                        children: s.jsx(es, { className: "w-4 h-4" }),
                      }),
                      s.jsx("button", {
                        onClick: b,
                        disabled: p,
                        className:
                          "p-1.5 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                        title: "取消",
                        children: s.jsx(In, { className: "w-4 h-4" }),
                      }),
                    ],
                  })
                : s.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      s.jsx("h2", {
                        className: "text-xl font-bold text-gray-800",
                        children: j,
                      }),
                      s.jsx("button", {
                        onClick: (D) => {
                          (D.stopPropagation(), C());
                        },
                        className:
                          "p-1.5 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors",
                        title: "編輯名稱",
                        children: s.jsx(Fl, { className: "w-4 h-4" }),
                      }),
                    ],
                  }),
            }),
            s.jsx("div", {
              className: "ml-auto flex items-center gap-2",
              children: s.jsxs("div", {
                className: "bg-blue-50 px-4 py-2 rounded-lg",
                children: [
                  s.jsx("span", {
                    className: "text-sm text-gray-600",
                    children: "共 ",
                  }),
                  s.jsx("span", {
                    className: "text-lg font-bold text-blue-600",
                    children: k,
                  }),
                  s.jsx("span", {
                    className: "text-sm text-gray-600",
                    children: " 層",
                  }),
                ],
              }),
            }),
          ],
        }),
        n &&
          s.jsx("div", {
            className: "px-6 pb-6 pt-2 border-t border-gray-200",
            children: s.jsx("div", {
              className: "space-y-4",
              children: e.subSections.map((D, re) =>
                s.jsx(
                  Xp,
                  {
                    subSection: D,
                    index: re,
                    isExpanded: r.has(D.subSection.GUID),
                    onToggleExpand: o,
                    onAddStock: i,
                    onEditStock: u,
                    onEditShelf: a,
                    onLightStock: d,
                    onUpdateSubSectionName: h,
                    onAddShelf: f,
                    onDeleteShelf: v,
                    onDeleteStock: x,
                  },
                  D.subSection.GUID,
                ),
              ),
            }),
          }),
      ],
    });
  },
  qp = async () =>
    await Ae("/api/med_page/get_med_cloud", { method: "POST", body: {} }),
  Jp = ({
    isOpen: e,
    onClose: t,
    onSubmit: n,
    stock: r,
    shelfName: l,
    shelfStocks: o,
    ledIndexOptions: i,
  }) => {
    const [u, a] = N.useState({
        code: "",
        name: "",
        material_no: "",
        lot: "",
        expiry_date: "",
        qty: "",
        location: "",
        ip: "",
        led_index: "",
        device_type: "EPD290",
      }),
      [d, g] = N.useState(null),
      [h, f] = N.useState(!1),
      [v, x] = N.useState([]),
      [w, z] = N.useState([]),
      [m, c] = N.useState(!1),
      [p, y] = N.useState([]),
      [j, k] = N.useState(!1),
      [C, L] = N.useState([]),
      [b, D] = N.useState(!1),
      [re, Xe] = N.useState(!1),
      $e = N.useRef(null),
      nt = N.useRef(null),
      Ft = N.useRef(null),
      rt = N.useRef(null),
      lt = N.useRef(null),
      _ = N.useRef(null),
      M = N.useRef(null),
      T = N.useRef(null),
      [F, H] = N.useState(!1);
    (N.useEffect(
      () => (
        e
          ? ((document.body.style.overflow = "hidden"), v.length === 0 && ht())
          : document.body.style.removeProperty("overflow"),
        () => {
          document.body.style.removeProperty("overflow");
        }
      ),
      [e],
    ),
      N.useEffect(() => {
        if (r) {
          const I = (ee) =>
              Array.isArray(ee) ? (ee.length > 0 ? ee[0] : "") : ee,
            R = (ee) => {
              const te = I(ee);
              return typeof te == "string" ? te.split(" ")[0] : te;
            };
          a({
            code: r.code,
            name: r.name,
            material_no: r.material_no,
            lot: I(r.lot),
            expiry_date: R(r.expiry_date),
            qty: I(r.qty),
            location: r.location,
            ip: r.ip,
            led_index: r.led_index,
            device_type: r.device_type || "EPD290",
          });
        } else {
          const I = o.length > 0 ? o[o.length - 1] : null;
          let R = "0,1";
          if (I != null && I.location) {
            const [ee, te] = I.location
              .split(",")
              .map((Me) => parseInt(Me.trim()));
            !isNaN(ee) && !isNaN(te) && (R = `${te + 1},${te + 2}`);
          }
          a({
            code: "",
            name: "",
            material_no: "",
            lot: "",
            expiry_date: "",
            qty: "",
            location: R,
            ip: "",
            led_index: "",
            device_type: "EPD290",
          });
        }
        (g(null), c(!1), H(!1));
      }, [r, e, o]),
      N.useEffect(() => {
        const I = (R) => {
          (nt.current &&
            !nt.current.contains(R.target) &&
            $e.current &&
            !$e.current.contains(R.target) &&
            c(!1),
            rt.current &&
              !rt.current.contains(R.target) &&
              Ft.current &&
              !Ft.current.contains(R.target) &&
              k(!1),
            _.current &&
              !_.current.contains(R.target) &&
              lt.current &&
              !lt.current.contains(R.target) &&
              D(!1),
            T.current &&
              !T.current.contains(R.target) &&
              M.current &&
              !M.current.contains(R.target) &&
              H(!1));
        };
        return (
          document.addEventListener("mousedown", I),
          () => document.removeEventListener("mousedown", I)
        );
      }, []));
    const ht = async () => {
        try {
          Xe(!0);
          const I = await qp();
          I.Code === 200 && x(I.Data);
        } catch (I) {
          console.error("Failed to fetch medications:", I);
        } finally {
          Xe(!1);
        }
      },
      q = (I) => {
        const { name: R, value: ee } = I.target;
        if ((a((te) => ({ ...te, [R]: ee })), R === "name"))
          if (ee.trim()) {
            const te = v.filter((Me) =>
              Me.NAME.toLowerCase().includes(ee.toLowerCase()),
            );
            (z(te), c(te.length > 0));
          } else (z([]), c(!1));
        else if (R === "code")
          if (ee.trim()) {
            const te = v.filter((Me) =>
              Me.CODE.toLowerCase().includes(ee.toLowerCase()),
            );
            (y(te), k(te.length > 0));
          } else (y([]), k(!1));
        else if (R === "material_no")
          if (ee.trim()) {
            const te = v.filter((Me) =>
              Me.SKDIACODE.toLowerCase().includes(ee.toLowerCase()),
            );
            (L(te), D(te.length > 0));
          } else (L([]), D(!1));
      },
      Ut = (I) => {
        (a((R) => ({
          ...R,
          name: I.NAME,
          code: I.CODE,
          material_no: I.SKDIACODE,
        })),
          c(!1));
      },
      Ve = (I) => {
        (a((R) => ({
          ...R,
          name: I.NAME,
          code: I.CODE,
          material_no: I.SKDIACODE,
        })),
          k(!1));
      },
      gt = (I) => {
        (a((R) => ({
          ...R,
          name: I.NAME,
          code: I.CODE,
          material_no: I.SKDIACODE,
        })),
          D(!1));
      },
      Ul = async (I) => {
        if ((I.preventDefault(), g(null), !u.location)) {
          g("位置為必填欄位");
          return;
        }
        try {
          (f(!0), await n(u), t());
        } catch (R) {
          (g("操作失敗，請稍後再試"),
            console.error("Stock operation failed:", R));
        } finally {
          f(!1);
        }
      };
    return e
      ? s.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
          children: s.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
            children: [
              s.jsxs("div", {
                className:
                  "sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between",
                children: [
                  s.jsxs("div", {
                    children: [
                      s.jsx("h2", {
                        className: "text-xl font-semibold text-gray-900",
                        children: r ? "編輯貨物" : "新增貨物",
                      }),
                      s.jsxs("p", {
                        className: "text-sm text-gray-500 mt-1",
                        children: ["層架: ", l],
                      }),
                    ],
                  }),
                  s.jsx("button", {
                    onClick: t,
                    className:
                      "text-gray-400 hover:text-gray-600 transition-colors",
                    disabled: h,
                    children: s.jsx(In, { className: "w-6 h-6" }),
                  }),
                ],
              }),
              s.jsxs("form", {
                onSubmit: Ul,
                className: "p-6",
                children: [
                  d &&
                    s.jsxs("div", {
                      className:
                        "mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2",
                      children: [
                        s.jsx(Ol, {
                          className:
                            "w-5 h-5 text-red-600 flex-shrink-0 mt-0.5",
                        }),
                        s.jsx("p", {
                          className: "text-sm text-red-800",
                          children: d,
                        }),
                      ],
                    }),
                  s.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                    children: [
                      s.jsxs("div", {
                        className: "relative",
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "藥碼",
                          }),
                          s.jsxs("div", {
                            className: "relative",
                            children: [
                              s.jsx("input", {
                                ref: Ft,
                                type: "text",
                                name: "code",
                                value: u.code,
                                onChange: q,
                                onFocus: () => {
                                  u.code && p.length > 0 && k(!0);
                                },
                                className:
                                  "w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                placeholder: "輸入藥碼搜尋",
                                autoComplete: "off",
                              }),
                              s.jsx(fo, {
                                className:
                                  "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400",
                              }),
                            ],
                          }),
                          j &&
                            p.length > 0 &&
                            s.jsx("div", {
                              ref: rt,
                              className:
                                "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                              children: p
                                .slice(0, 50)
                                .map((I, R) =>
                                  s.jsxs(
                                    "button",
                                    {
                                      type: "button",
                                      onClick: () => Ve(I),
                                      className:
                                        "w-full px-3 py-2 text-left hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0",
                                      children: [
                                        s.jsx("div", {
                                          className:
                                            "font-medium text-gray-900 text-sm",
                                          children: I.CODE,
                                        }),
                                        s.jsxs("div", {
                                          className:
                                            "text-base text-gray-500 mt-0.5",
                                          children: ["藥名: ", I.NAME],
                                        }),
                                        s.jsxs("div", {
                                          className: "text-base text-gray-500",
                                          children: ["料號: ", I.SKDIACODE],
                                        }),
                                      ],
                                    },
                                    R,
                                  ),
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
                            children: "藥名",
                          }),
                          s.jsxs("div", {
                            className: "relative",
                            children: [
                              s.jsx("input", {
                                ref: $e,
                                type: "text",
                                name: "name",
                                value: u.name,
                                onChange: q,
                                onFocus: () => {
                                  u.name && w.length > 0 && c(!0);
                                },
                                className:
                                  "w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                placeholder: "輸入藥品名稱搜尋",
                                autoComplete: "off",
                              }),
                              s.jsx(fo, {
                                className:
                                  "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400",
                              }),
                            ],
                          }),
                          m &&
                            w.length > 0 &&
                            s.jsx("div", {
                              ref: nt,
                              className:
                                "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                              children: w
                                .slice(0, 50)
                                .map((I, R) =>
                                  s.jsxs(
                                    "button",
                                    {
                                      type: "button",
                                      onClick: () => Ut(I),
                                      className:
                                        "w-full px-3 py-2 text-left hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0",
                                      children: [
                                        s.jsx("div", {
                                          className:
                                            "font-medium text-gray-900 text-sm",
                                          children: I.NAME,
                                        }),
                                        s.jsxs("div", {
                                          className:
                                            "text-base text-gray-500 mt-0.5",
                                          children: [
                                            "藥碼: ",
                                            I.CODE,
                                            " | 料號: ",
                                            I.SKDIACODE,
                                          ],
                                        }),
                                      ],
                                    },
                                    R,
                                  ),
                                ),
                            }),
                          re &&
                            s.jsx("div", {
                              className:
                                "absolute right-3 top-9 text-base text-gray-500",
                              children: "載入藥品資料中...",
                            }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: "relative",
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "料號",
                          }),
                          s.jsxs("div", {
                            className: "relative",
                            children: [
                              s.jsx("input", {
                                ref: lt,
                                type: "text",
                                name: "material_no",
                                value: u.material_no,
                                onChange: q,
                                onFocus: () => {
                                  u.material_no && C.length > 0 && D(!0);
                                },
                                className:
                                  "w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                placeholder: "輸入料號搜尋",
                                autoComplete: "off",
                              }),
                              s.jsx(fo, {
                                className:
                                  "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400",
                              }),
                            ],
                          }),
                          b &&
                            C.length > 0 &&
                            s.jsx("div", {
                              ref: _,
                              className:
                                "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                              children: C.slice(0, 50).map((I, R) =>
                                s.jsxs(
                                  "button",
                                  {
                                    type: "button",
                                    onClick: () => gt(I),
                                    className:
                                      "w-full px-3 py-2 text-left hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0",
                                    children: [
                                      s.jsx("div", {
                                        className:
                                          "font-medium text-gray-900 text-sm",
                                        children: I.SKDIACODE,
                                      }),
                                      s.jsxs("div", {
                                        className:
                                          "text-base text-gray-500 mt-0.5",
                                        children: ["藥名: ", I.NAME],
                                      }),
                                      s.jsxs("div", {
                                        className: "text-base text-gray-500",
                                        children: ["藥碼: ", I.CODE],
                                      }),
                                    ],
                                  },
                                  R,
                                ),
                              ),
                            }),
                        ],
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "批號",
                          }),
                          s.jsx("input", {
                            type: "text",
                            name: "lot",
                            value: u.lot,
                            onChange: q,
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "效期",
                          }),
                          s.jsx("input", {
                            type: "date",
                            name: "expiry_date",
                            value: u.expiry_date,
                            onChange: q,
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "數量",
                          }),
                          s.jsx("input", {
                            type: "number",
                            name: "qty",
                            value: u.qty,
                            onChange: q,
                            min: "0",
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "位置",
                          }),
                          s.jsx("input", {
                            type: "text",
                            name: "location",
                            value: u.location,
                            onChange: q,
                            placeholder: "例: 0,1",
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "IP 位址",
                          }),
                          s.jsx("input", {
                            type: "text",
                            name: "ip",
                            value: u.ip,
                            onChange: q,
                            onFocus: (I) => {
                              I.target.value ||
                                a((R) => ({ ...R, ip: "192.168." }));
                            },
                            placeholder: "例: 192.168.5.2",
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: "relative",
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "LED 索引",
                          }),
                          s.jsx("input", {
                            ref: M,
                            type: "text",
                            name: "led_index",
                            value: u.led_index,
                            onChange: q,
                            onFocus: () => {
                              i.length > 0 && H(!0);
                            },
                            placeholder: "例: 145,162",
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                            autoComplete: "off",
                          }),
                          F &&
                            i.length > 0 &&
                            s.jsx("div", {
                              ref: T,
                              className:
                                "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto",
                              children: i.map((I, R) =>
                                s.jsx(
                                  "button",
                                  {
                                    type: "button",
                                    onClick: () => {
                                      (a((ee) => ({ ...ee, led_index: I })),
                                        H(!1));
                                    },
                                    className:
                                      "w-full px-3 py-2 text-left hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0",
                                    children: s.jsx("div", {
                                      className: "text-sm text-gray-900",
                                      children: I,
                                    }),
                                  },
                                  R,
                                ),
                              ),
                            }),
                        ],
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "設備類型",
                          }),
                          s.jsxs("div", {
                            className: "flex gap-4",
                            children: [
                              s.jsxs("label", {
                                className:
                                  "inline-flex items-center cursor-pointer",
                                children: [
                                  s.jsx("input", {
                                    type: "radio",
                                    name: "device_type",
                                    value: "RowsLED",
                                    checked: u.device_type === "RowsLED",
                                    onChange: q,
                                    className:
                                      "w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500",
                                  }),
                                  s.jsx("span", {
                                    className: "ml-2 text-sm text-gray-700",
                                    children: "RowsLED",
                                  }),
                                ],
                              }),
                              s.jsxs("label", {
                                className:
                                  "inline-flex items-center cursor-pointer",
                                children: [
                                  s.jsx("input", {
                                    type: "radio",
                                    name: "device_type",
                                    value: "EPD290",
                                    checked: u.device_type === "EPD290",
                                    onChange: q,
                                    className:
                                      "w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500",
                                  }),
                                  s.jsx("span", {
                                    className: "ml-2 text-sm text-gray-700",
                                    children: "EPD290",
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
                    className: "mt-6 flex justify-end gap-3",
                    children: [
                      s.jsx("button", {
                        type: "button",
                        onClick: t,
                        className:
                          "px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors",
                        disabled: h,
                        children: "取消",
                      }),
                      s.jsxs("button", {
                        type: "submit",
                        className:
                          "inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                        disabled: h,
                        children: [
                          s.jsx(es, { className: "w-4 h-4" }),
                          h ? "處理中..." : "儲存",
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
  em = ({
    isOpen: e,
    onClose: t,
    onSubmit: n,
    shelf: r,
    subSections: l,
    selectedSubSectionGuid: o,
  }) => {
    const [i, u] = N.useState({
        Master_GUID: "",
        name: "",
        position: "",
        width: "",
        height: "",
        ip_light: "",
        device_type: "RowsLED",
        serverName: "DS01",
        serverType: "藥庫",
        start_num: "",
        end_num: "",
      }),
      [a, d] = N.useState(!1);
    N.useEffect(() => {
      if (e)
        if (((document.body.style.overflow = "hidden"), r))
          u({
            Master_GUID: r.Master_GUID,
            name: r.name,
            position: r.position,
            width: r.width,
            height: r.height,
            ip_light: r.ip_light,
            device_type: r.device_type || "RowsLED",
            serverName: r.serverName,
            serverType: r.serverType,
            start_num: r.start_num || "",
            end_num: r.end_num || "",
          });
        else {
          const f = o || (l.length > 0 ? l[0].GUID : ""),
            v = l.find((z) => z.GUID === f),
            x = (v == null ? void 0 : v.shelf) || [],
            w = x.length > 0 ? x[x.length - 1] : null;
          u({
            Master_GUID: f,
            name: "",
            position: "",
            width: (w == null ? void 0 : w.width) || "",
            height: (w == null ? void 0 : w.height) || "",
            ip_light: "",
            device_type: "RowsLED",
            serverName: "DS01",
            serverType: "藥庫",
            start_num: "",
            end_num: "",
          });
        }
      else document.body.style.removeProperty("overflow");
      return () => {
        document.body.style.removeProperty("overflow");
      };
    }, [e, r, l, o]);
    const g = async (f) => {
        (f.preventDefault(), d(!0));
        try {
          (await n(i), t());
        } catch (v) {
          console.error("Failed to submit shelf:", v);
        } finally {
          d(!1);
        }
      },
      h = (f, v) => {
        u((x) => ({ ...x, [f]: v }));
      };
    return e
      ? s.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
          children: s.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
            children: [
              s.jsxs("div", {
                className: "flex items-center justify-between p-6 border-b",
                children: [
                  s.jsx("h2", {
                    className: "text-xl font-semibold text-gray-800",
                    children: r ? "編輯層架" : "新增層架",
                  }),
                  s.jsx("button", {
                    onClick: t,
                    className:
                      "text-gray-400 hover:text-gray-600 transition-colors",
                    children: s.jsx(In, { className: "w-6 h-6" }),
                  }),
                ],
              }),
              s.jsxs("form", {
                onSubmit: g,
                className: "p-6 space-y-4",
                children: [
                  s.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                    children: [
                      s.jsxs("div", {
                        children: [
                          s.jsxs("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: [
                              "櫃體 ",
                              s.jsx("span", {
                                className: "text-red-500",
                                children: "*",
                              }),
                            ],
                          }),
                          s.jsx("select", {
                            value: i.Master_GUID,
                            onChange: (f) => h("Master_GUID", f.target.value),
                            required: !0,
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                            children: l.map((f) =>
                              s.jsx(
                                "option",
                                { value: f.GUID, children: f.name },
                                f.GUID,
                              ),
                            ),
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "層架名稱",
                          }),
                          s.jsx("input", {
                            type: "text",
                            value: i.name,
                            onChange: (f) => h("name", f.target.value),
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                            placeholder: "例：口服_1",
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsxs("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: [
                              "位置 ",
                              s.jsx("span", {
                                className: "text-red-500",
                                children: "*",
                              }),
                            ],
                          }),
                          s.jsx("input", {
                            type: "text",
                            value: i.position,
                            onChange: (f) => h("position", f.target.value),
                            required: !0,
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                            placeholder: "例：1,0",
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsxs("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: [
                              "寬度 ",
                              s.jsx("span", {
                                className: "text-red-500",
                                children: "*",
                              }),
                            ],
                          }),
                          s.jsx("input", {
                            type: "text",
                            value: i.width,
                            onChange: (f) => h("width", f.target.value),
                            required: !0,
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                            placeholder: "例：400",
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsxs("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: [
                              "高度 ",
                              s.jsx("span", {
                                className: "text-red-500",
                                children: "*",
                              }),
                            ],
                          }),
                          s.jsx("input", {
                            type: "text",
                            value: i.height,
                            onChange: (f) => h("height", f.target.value),
                            required: !0,
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                            placeholder: "例：60",
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "燈條IP",
                          }),
                          s.jsx("input", {
                            type: "text",
                            value: i.ip_light,
                            onChange: (f) => h("ip_light", f.target.value),
                            onFocus: (f) => {
                              f.target.value || h("ip_light", "192.168.");
                            },
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                            placeholder: "例：111.111.111.111",
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: "md:col-span-2",
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "設備類型",
                          }),
                          s.jsxs("div", {
                            className: "flex gap-4",
                            children: [
                              s.jsxs("label", {
                                className:
                                  "inline-flex items-center cursor-pointer",
                                children: [
                                  s.jsx("input", {
                                    type: "radio",
                                    value: "RowsLED",
                                    checked: i.device_type === "RowsLED",
                                    onChange: (f) =>
                                      h("device_type", f.target.value),
                                    className:
                                      "w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500",
                                  }),
                                  s.jsx("span", {
                                    className: "ml-2 text-sm text-gray-700",
                                    children: "RowsLED",
                                  }),
                                ],
                              }),
                              s.jsxs("label", {
                                className:
                                  "inline-flex items-center cursor-pointer",
                                children: [
                                  s.jsx("input", {
                                    type: "radio",
                                    value: "EPD290",
                                    checked: i.device_type === "EPD290",
                                    onChange: (f) =>
                                      h("device_type", f.target.value),
                                    className:
                                      "w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500",
                                  }),
                                  s.jsx("span", {
                                    className: "ml-2 text-sm text-gray-700",
                                    children: "EPD290",
                                  }),
                                ],
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
                            children: "燈條開始位置",
                          }),
                          s.jsx("input", {
                            type: "text",
                            value: i.start_num,
                            onChange: (f) => h("start_num", f.target.value),
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                            placeholder: "例：0",
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "燈條結束位置",
                          }),
                          s.jsx("input", {
                            type: "text",
                            value: i.end_num,
                            onChange: (f) => h("end_num", f.target.value),
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                            placeholder: "例：10",
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "伺服器名稱",
                          }),
                          s.jsx("input", {
                            type: "text",
                            value: i.serverName,
                            onChange: (f) => h("serverName", f.target.value),
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                            placeholder: "例：DS01",
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "伺服器類型",
                          }),
                          s.jsx("input", {
                            type: "text",
                            value: i.serverType,
                            onChange: (f) => h("serverType", f.target.value),
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                            placeholder: "例：藥庫",
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "flex justify-end gap-3 pt-4 border-t",
                    children: [
                      s.jsx("button", {
                        type: "button",
                        onClick: t,
                        disabled: a,
                        className:
                          "px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50",
                        children: "取消",
                      }),
                      s.jsx("button", {
                        type: "submit",
                        disabled: a,
                        className:
                          "px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                        children: a ? "處理中..." : r ? "更新" : "新增",
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
  tm = ({
    isOpen: e,
    onClose: t,
    settings: n,
    onSave: r,
    ledIndexSettings: l,
    onSaveLedIndexes: o,
  }) => {
    const [i, u] = N.useState(n.color),
      [a, d] = N.useState(n.lightness),
      [g, h] = N.useState(n.autoOffSeconds),
      [f, v] = N.useState(l.ledIndexes),
      [x, w] = N.useState("");
    N.useEffect(
      () => (
        e
          ? ((document.body.style.overflow = "hidden"),
            u(n.color),
            d(n.lightness),
            h(n.autoOffSeconds),
            v(l.ledIndexes),
            w(""))
          : document.body.style.removeProperty("overflow"),
        () => {
          document.body.style.removeProperty("overflow");
        }
      ),
      [e, n, l],
    );
    const z = () => {
        (r({ color: i, lightness: a, autoOffSeconds: g }),
          o({ ledIndexes: f }),
          t());
      },
      m = () => {
        x.trim() && !f.includes(x.trim()) && (v([...f, x.trim()]), w(""));
      },
      c = (p) => {
        v(f.filter((y, j) => j !== p));
      };
    return e
      ? s.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
          children: s.jsxs("div", {
            className: "bg-white rounded-lg shadow-xl max-w-md w-full",
            children: [
              s.jsxs("div", {
                className: "flex items-center justify-between p-6 border-b",
                children: [
                  s.jsx("h2", {
                    className: "text-xl font-semibold text-gray-800",
                    children: "亮燈設定",
                  }),
                  s.jsx("button", {
                    onClick: t,
                    className:
                      "text-gray-400 hover:text-gray-600 transition-colors",
                    children: s.jsx(In, { className: "w-6 h-6" }),
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "p-6 space-y-6",
                children: [
                  s.jsxs("div", {
                    children: [
                      s.jsx("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-3",
                        children: "亮燈顏色 (BGR)",
                      }),
                      s.jsx("div", {
                        className: "grid grid-cols-3 gap-3",
                        children: Vp.map((p) =>
                          s.jsxs(
                            "button",
                            {
                              onClick: () => u(p.value),
                              className: `px-4 py-3 rounded-lg border-2 transition-all ${i === p.value ? "border-blue-600 bg-blue-50" : "border-gray-300 hover:border-gray-400"}`,
                              children: [
                                s.jsx("div", {
                                  className:
                                    "text-sm font-medium text-gray-700",
                                  children: p.name,
                                }),
                                s.jsx("div", {
                                  className: "text-xs text-gray-500 mt-1",
                                  children: p.value,
                                }),
                              ],
                            },
                            p.value,
                          ),
                        ),
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    children: [
                      s.jsxs("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: ["亮度: ", a.toFixed(1)],
                      }),
                      s.jsx("input", {
                        type: "range",
                        min: "0",
                        max: "1",
                        step: "0.1",
                        value: a,
                        onChange: (p) => d(parseFloat(p.target.value)),
                        className:
                          "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer",
                      }),
                      s.jsxs("div", {
                        className:
                          "flex justify-between text-xs text-gray-500 mt-1",
                        children: [
                          s.jsx("span", { children: "0" }),
                          s.jsx("span", { children: "0.5" }),
                          s.jsx("span", { children: "1" }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    children: [
                      s.jsxs("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: ["自動滅燈時間 (秒): ", g],
                      }),
                      s.jsx("input", {
                        type: "range",
                        min: "5",
                        max: "120",
                        step: "5",
                        value: g,
                        onChange: (p) => h(parseInt(p.target.value)),
                        className:
                          "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer",
                      }),
                      s.jsxs("div", {
                        className:
                          "flex justify-between text-xs text-gray-500 mt-1",
                        children: [
                          s.jsx("span", { children: "5秒" }),
                          s.jsx("span", { children: "60秒" }),
                          s.jsx("span", { children: "120秒" }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    children: [
                      s.jsx("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-3",
                        children: "LED 索引選單",
                      }),
                      s.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          s.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                              s.jsx("input", {
                                type: "text",
                                value: x,
                                onChange: (p) => w(p.target.value),
                                onKeyPress: (p) => p.key === "Enter" && m(),
                                placeholder: "例: 145,162",
                                className:
                                  "flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                              }),
                              s.jsx("button", {
                                onClick: m,
                                className:
                                  "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
                                children: s.jsx(Ji, { className: "w-4 h-4" }),
                              }),
                            ],
                          }),
                          f.length > 0 &&
                            s.jsx("div", {
                              className:
                                "border border-gray-200 rounded-lg p-2 max-h-40 overflow-y-auto",
                              children: f.map((p, y) =>
                                s.jsxs(
                                  "div",
                                  {
                                    className:
                                      "flex items-center justify-between px-3 py-2 hover:bg-gray-50 rounded transition-colors",
                                    children: [
                                      s.jsx("span", {
                                        className: "text-sm text-gray-700",
                                        children: p,
                                      }),
                                      s.jsx("button", {
                                        onClick: () => c(y),
                                        className:
                                          "text-red-600 hover:text-red-700 transition-colors",
                                        children: s.jsx(ts, {
                                          className: "w-4 h-4",
                                        }),
                                      }),
                                    ],
                                  },
                                  y,
                                ),
                              ),
                            }),
                          f.length === 0 &&
                            s.jsx("div", {
                              className:
                                "text-sm text-gray-500 text-center py-4",
                              children: "尚無 LED 索引",
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "flex justify-end gap-3 p-6 border-t",
                children: [
                  s.jsx("button", {
                    onClick: t,
                    className:
                      "px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors",
                    children: "取消",
                  }),
                  s.jsx("button", {
                    onClick: z,
                    className:
                      "px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
                    children: "儲存",
                  }),
                ],
              }),
            ],
          }),
        })
      : null;
  },
  nm = ({ message: e, type: t, onClose: n, duration: r = 3e3 }) => {
    N.useEffect(() => {
      const i = setTimeout(() => {
        n();
      }, r);
      return () => clearTimeout(i);
    }, [r, n]);
    const l = () => {
        switch (t) {
          case "success":
            return s.jsx(pp, { className: "w-5 h-5 text-green-600" });
          case "error":
            return s.jsx(Ol, { className: "w-5 h-5 text-red-600" });
          case "info":
            return s.jsx(hp, { className: "w-5 h-5 text-blue-600" });
        }
      },
      o = () => {
        switch (t) {
          case "success":
            return "bg-green-50 border-green-200";
          case "error":
            return "bg-red-50 border-red-200";
          case "info":
            return "bg-blue-50 border-blue-200";
        }
      };
    return s.jsxs("div", {
      className: `${o()} border rounded-lg shadow-lg p-4 flex items-start gap-3 min-w-[300px] max-w-md animate-slide-in`,
      children: [
        l(),
        s.jsx("p", { className: "flex-1 text-sm text-gray-800", children: e }),
        s.jsx("button", {
          onClick: n,
          className:
            "text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0",
          children: s.jsx(In, { className: "w-4 h-4" }),
        }),
      ],
    });
  },
  rm = ({ toasts: e, onRemove: t }) =>
    s.jsx("div", {
      className: "fixed top-4 right-4 z-50 space-y-2",
      children: e.map((n) =>
        s.jsx(
          nm,
          { message: n.message, type: n.type, onClose: () => t(n.id) },
          n.id,
        ),
      ),
    }),
  lm = ({
    isOpen: e,
    title: t,
    message: n,
    onConfirm: r,
    onCancel: l,
    confirmText: o = "確定",
    cancelText: i = "取消",
  }) =>
    e
      ? s.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
          children: s.jsxs("div", {
            className: "bg-white rounded-lg shadow-xl max-w-md w-full",
            children: [
              s.jsx("div", {
                className: "p-6",
                children: s.jsxs("div", {
                  className: "flex items-start gap-4",
                  children: [
                    s.jsx("div", {
                      className: "flex-shrink-0",
                      children: s.jsx(fp, {
                        className: "w-6 h-6 text-red-600",
                      }),
                    }),
                    s.jsxs("div", {
                      className: "flex-1",
                      children: [
                        s.jsx("h3", {
                          className: "text-lg font-semibold text-gray-900 mb-2",
                          children: t,
                        }),
                        s.jsx("p", {
                          className: "text-sm text-gray-600",
                          children: n,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              s.jsxs("div", {
                className: "flex gap-3 px-6 pb-6",
                children: [
                  s.jsx("button", {
                    onClick: l,
                    className:
                      "flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium",
                    children: i,
                  }),
                  s.jsx("button", {
                    onClick: r,
                    className:
                      "flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium",
                    children: o,
                  }),
                ],
              }),
            ],
          }),
        })
      : null,
  om = () => {
    const [e, t] = N.useState([]),
      [n, r] = N.useState(!0),
      [l, o] = N.useState(null),
      [i, u] = N.useState(!1),
      [a, d] = N.useState(!1),
      [g, h] = N.useState(!1),
      [f, v] = N.useState(),
      [x, w] = N.useState(),
      [z, m] = N.useState(""),
      [c, p] = N.useState(""),
      [y, j] = N.useState(Hp()),
      [k, C] = N.useState(Qp()),
      L = N.useRef(!1),
      [b, D] = N.useState([]),
      [re, Xe] = N.useState([]),
      [$e, nt] = N.useState(""),
      [Ft, rt] = N.useState(new Set()),
      [lt, _] = N.useState(new Set()),
      [M, T] = N.useState({
        isOpen: !1,
        title: "",
        message: "",
        onConfirm: () => {},
      }),
      F = async (P = !1) => {
        const $ = P ? window.scrollY : 0;
        try {
          (r(!0), o(null));
          const U = await Lp(["藥庫"]);
          if (U.Code === 200) {
            const ge = Dp(U.Data);
            (t(ge),
              P &&
                requestAnimationFrame(() => {
                  requestAnimationFrame(() => {
                    window.scrollTo(0, $);
                  });
                }));
          } else o(U.Result || "取得層架資料失敗");
        } catch (U) {
          (o("無法連接到伺服器，請稍後再試"),
            console.error("Failed to fetch shelf data:", U));
        } finally {
          r(!1);
        }
      };
    N.useEffect(() => {
      L.current || ((L.current = !0), F());
    }, []);
    const H = (P, $, U) => {
        (m(P), p($), v(void 0));
        const ge = e
          .flatMap((be) => be.subSections)
          .flatMap((be) => be.shelves)
          .find((be) => be.GUID === P);
        (Xe((ge == null ? void 0 : ge.medMapStock) || []),
          _((be) => new Set(be).add(U)),
          u(!0));
      },
      ht = (P, $, U) => {
        (m(P.shelf_guid), p($), v(P), _((ge) => new Set(ge).add(U)), u(!0));
      },
      q = (P) => {
        (w(void 0), P ? (nt(P), _(($) => new Set($).add(P))) : nt(""), d(!0));
      },
      Ut = (P, $) => {
        (w(P), _((U) => new Set(U).add($)), d(!0));
      },
      Ve = async (P) => {
        const $ = {
          shelf_guid: z,
          device_type: P.device_type,
          location: P.location,
          ip: P.ip,
          led_index: P.led_index,
          code: P.code,
          name: P.name,
          material_no: P.material_no,
          lot: P.lot,
          expiry_date: P.expiry_date ? `${P.expiry_date} 00:00:00` : "",
          qty: P.qty,
        };
        (f ? await Mp({ ...$, GUID: f.GUID }) : await Ip($), await F(!0));
      },
      gt = async (P, $) => {
        (await Tp({ GUID: P, name: $ }), await F(!0));
      },
      Ul = async (P, $, U) => {
        (await zp(U), await F(!0));
      },
      I = async (P) => {
        const $ = {
          Master_GUID: P.Master_GUID,
          name: P.name,
          position: P.position,
          type: "store_shelves",
          width: P.width,
          height: P.height,
          ip_light: P.ip_light,
          device_type: P.device_type,
          serverName: P.serverName,
          serverType: P.serverType,
          start_num: P.start_num,
          end_num: P.end_num,
        };
        (x ? await Op({ ...$, GUID: x.GUID }) : await Rp($), await F(!0));
      },
      R = (P) => {
        (j(P), Wp(P));
      },
      ee = (P) => {
        (C(P), Gp(P));
      },
      te = async (P, $, U) => {
        try {
          await $p(P, $, U, y.color, y.lightness, y.autoOffSeconds);
        } catch (ge) {
          console.error("Failed to control light:", ge);
        }
      },
      Me = (P, $) => {
        const U = Date.now().toString();
        D((ge) => [...ge, { id: U, message: P, type: $ }]);
      },
      zc = (P) => {
        D(($) => $.filter((U) => U.id !== P));
      },
      Rc = async (P, $) => {
        T({
          isOpen: !0,
          title: "刪除層架",
          message: `確定要刪除層架「${$}」嗎？此操作無法復原。`,
          onConfirm: async () => {
            T((U) => ({ ...U, isOpen: !1 }));
            try {
              (await Fp(P), Me("層架已成功刪除", "success"), await F(!0));
            } catch (U) {
              (console.error("Failed to delete shelf:", U),
                Me("刪除層架失敗，請稍後再試", "error"));
            }
          },
        });
      },
      Oc = async (P, $) => {
        T({
          isOpen: !0,
          title: "刪除貨物",
          message: `確定要刪除貨物「${$}」嗎？此操作無法復原。`,
          onConfirm: async () => {
            T((U) => ({ ...U, isOpen: !1 }));
            try {
              (await Up(P), Me("貨物已成功刪除", "success"), await F(!0));
            } catch (U) {
              (console.error("Failed to delete stock:", U),
                Me("刪除貨物失敗，請稍後再試", "error"));
            }
          },
        });
      };
    return n
      ? s.jsx("div", {
          className: "flex items-center justify-center min-h-[400px]",
          children: s.jsx(Dc, {}),
        })
      : l
        ? s.jsx("div", {
            className: "flex items-center justify-center min-h-[400px]",
            children: s.jsxs("div", {
              className: "text-center",
              children: [
                s.jsx(Ol, { className: "w-12 h-12 text-red-500 mx-auto mb-4" }),
                s.jsx("p", { className: "text-gray-600 mb-4", children: l }),
                s.jsxs("button", {
                  onClick: F,
                  className:
                    "inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
                  children: [s.jsx(du, { className: "w-4 h-4" }), "重新載入"],
                }),
              ],
            }),
          })
        : e.length === 0
          ? s.jsx("div", {
              className: "flex items-center justify-center min-h-[400px]",
              children: s.jsx("div", {
                className: "text-center",
                children: s.jsx("p", {
                  className: "text-gray-500",
                  children: "目前沒有層架資料",
                }),
              }),
            })
          : s.jsxs(s.Fragment, {
              children: [
                s.jsx(rm, { toasts: b, onRemove: zc }),
                s.jsxs("div", {
                  className: "space-y-6",
                  children: [
                    s.jsx("div", {
                      className: "flex items-center justify-end mb-6",
                      children: s.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          s.jsxs("button", {
                            onClick: F,
                            className:
                              "inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors",
                            children: [
                              s.jsx(du, { className: "w-4 h-4" }),
                              "重新整理",
                            ],
                          }),
                          s.jsx("button", {
                            onClick: () => h(!0),
                            className:
                              "inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors",
                            title: "設定",
                            children: s.jsx(xp, { className: "w-5 h-5" }),
                          }),
                        ],
                      }),
                    }),
                    e.map((P, $) =>
                      s.jsx(
                        Zp,
                        {
                          section: P,
                          index: $,
                          isExpanded: Ft.has(P.medMapSection.GUID),
                          expandedSubSections: lt,
                          onToggleExpand: (U, ge) => {
                            rt((be) => {
                              const At = new Set(be);
                              return (ge ? At.add(U) : At.delete(U), At);
                            });
                          },
                          onToggleSubSectionExpand: (U, ge) => {
                            _((be) => {
                              const At = new Set(be);
                              return (ge ? At.add(U) : At.delete(U), At);
                            });
                          },
                          onAddStock: H,
                          onEditStock: ht,
                          onEditShelf: Ut,
                          onLightStock: te,
                          onUpdateMedMapSectionName: Ul,
                          onUpdateSubSectionName: gt,
                          onAddShelf: q,
                          onDeleteShelf: Rc,
                          onDeleteStock: Oc,
                        },
                        P.medMapSection.GUID,
                      ),
                    ),
                    s.jsx(Jp, {
                      isOpen: i,
                      onClose: () => u(!1),
                      onSubmit: Ve,
                      stock: f,
                      shelfName: c,
                      shelfStocks: re,
                      ledIndexOptions: k.ledIndexes,
                    }),
                    s.jsx(em, {
                      isOpen: a,
                      onClose: () => d(!1),
                      onSubmit: I,
                      shelf: x,
                      subSections: e.flatMap((P) =>
                        P.subSections.map(($) => $.subSection),
                      ),
                      selectedSubSectionGuid: $e,
                    }),
                    s.jsx(tm, {
                      isOpen: g,
                      onClose: () => h(!1),
                      settings: y,
                      onSave: R,
                      ledIndexSettings: k,
                      onSaveLedIndexes: ee,
                    }),
                    s.jsx(lm, {
                      isOpen: M.isOpen,
                      title: M.title,
                      message: M.message,
                      onConfirm: M.onConfirm,
                      onCancel: () => T((P) => ({ ...P, isOpen: !1 })),
                    }),
                  ],
                }),
              ],
            });
  };
function im() {
  const [e, t] = N.useState(!1),
    [n, r] = N.useState(!1),
    [l, o] = N.useState(!0);
  N.useEffect(() => {
    (async () => {
      try {
        (await Lc(), t(!0));
        const a = jp();
        (r(a),
          console.log("Authentication check:", {
            authenticated: a,
            userSession: sessionStorage.getItem("user_session")
              ? "exists"
              : "missing",
          }));
      } catch (a) {
        console.error("Failed to load configuration:", a);
      } finally {
        o(!1);
      }
    })();
  }, []);
  const i = () => {
    r(!0);
  };
  return !e || l
    ? s.jsx("div", {
        className: "min-h-screen flex items-center justify-center",
        children: s.jsx("div", {
          className: "text-gray-600",
          children: "Loading...",
        }),
      })
    : s.jsx(Cp, {
        children: n
          ? s.jsxs("div", {
              className: "min-h-screen flex flex-col bg-white",
              children: [
                s.jsx("main", {
                  className: "flex-1 p-4 md:p-6 lg:p-8 pb-8",
                  children: s.jsxs("div", {
                    className: "max-w-screen-xl mx-auto",
                    children: [
                      s.jsx("header", {
                        className: "mb-6",
                        children: s.jsxs("div", {
                          className: "flex items-center justify-between",
                          children: [
                            s.jsxs("div", {
                              children: [
                                s.jsx("h1", {
                                  className: "text-3xl font-bold text-gray-800",
                                  children: "建置儲位",
                                }),
                                s.jsx("p", {
                                  className: "text-gray-600 mt-1",
                                  children: "層架與貨品管理系統",
                                }),
                              ],
                            }),
                            s.jsx("button", {
                              onClick: () => {
                                (sessionStorage.clear(),
                                  window.location.reload());
                              },
                              className:
                                "inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
                              children: "登出",
                            }),
                          ],
                        }),
                      }),
                      s.jsx(om, {}),
                    ],
                  }),
                }),
                s.jsx("footer", {
                  className:
                    "fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-6 text-center text-gray-600 text-sm z-10",
                  children: "Copyright ©2025 鴻森智能科技",
                }),
              ],
            })
          : s.jsx(Pp, { onLogin: i }),
      });
}
Cc(document.getElementById("root")).render(
  s.jsx(N.StrictMode, { children: s.jsx(im, {}) }),
);
//# sourceMappingURL=index-C9mrJ5pw.js.map
