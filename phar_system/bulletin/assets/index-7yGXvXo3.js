(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) s(l);
  new MutationObserver((l) => {
    for (const a of l)
      if (a.type === "childList")
        for (const i of a.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && s(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(l) {
    const a = {};
    return (
      l.integrity && (a.integrity = l.integrity),
      l.referrerPolicy && (a.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function s(l) {
    if (l.ep) return;
    l.ep = !0;
    const a = r(l);
    fetch(l.href, a);
  }
})();
function rd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Do = { exports: {} },
  Rs = {},
  _o = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var En = Symbol.for("react.element"),
  nd = Symbol.for("react.portal"),
  sd = Symbol.for("react.fragment"),
  ld = Symbol.for("react.strict_mode"),
  ad = Symbol.for("react.profiler"),
  id = Symbol.for("react.provider"),
  od = Symbol.for("react.context"),
  cd = Symbol.for("react.forward_ref"),
  ud = Symbol.for("react.suspense"),
  dd = Symbol.for("react.memo"),
  fd = Symbol.for("react.lazy"),
  xi = Symbol.iterator;
function md(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (xi && e[xi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var zo = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  To = Object.assign,
  Io = {};
function Mr(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = Io),
    (this.updater = r || zo);
}
Mr.prototype.isReactComponent = {};
Mr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Mr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Po() {}
Po.prototype = Mr.prototype;
function Na(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = Io),
    (this.updater = r || zo);
}
var ba = (Na.prototype = new Po());
ba.constructor = Na;
To(ba, Mr.prototype);
ba.isPureReactComponent = !0;
var yi = Array.isArray,
  Mo = Object.prototype.hasOwnProperty,
  Sa = { current: null },
  Ro = { key: !0, ref: !0, __self: !0, __source: !0 };
function Oo(e, t, r) {
  var s,
    l = {},
    a = null,
    i = null;
  if (t != null)
    for (s in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (a = "" + t.key),
    t))
      Mo.call(t, s) && !Ro.hasOwnProperty(s) && (l[s] = t[s]);
  var o = arguments.length - 2;
  if (o === 1) l.children = r;
  else if (1 < o) {
    for (var c = Array(o), u = 0; u < o; u++) c[u] = arguments[u + 2];
    l.children = c;
  }
  if (e && e.defaultProps)
    for (s in ((o = e.defaultProps), o)) l[s] === void 0 && (l[s] = o[s]);
  return {
    $$typeof: En,
    type: e,
    key: a,
    ref: i,
    props: l,
    _owner: Sa.current,
  };
}
function pd(e, t) {
  return {
    $$typeof: En,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ka(e) {
  return typeof e == "object" && e !== null && e.$$typeof === En;
}
function hd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var vi = /\/+/g;
function el(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? hd("" + e.key)
    : t.toString(36);
}
function Jn(e, t, r, s, l) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (a) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case En:
          case nd:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = s === "" ? "." + el(i, 0) : s),
      yi(l)
        ? ((r = ""),
          e != null && (r = e.replace(vi, "$&/") + "/"),
          Jn(l, t, r, "", function (u) {
            return u;
          }))
        : l != null &&
          (ka(l) &&
            (l = pd(
              l,
              r +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(vi, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (s = s === "" ? "." : s + ":"), yi(e)))
    for (var o = 0; o < e.length; o++) {
      a = e[o];
      var c = s + el(a, o);
      i += Jn(a, t, r, c, l);
    }
  else if (((c = md(e)), typeof c == "function"))
    for (e = c.call(e), o = 0; !(a = e.next()).done; )
      (a = a.value), (c = s + el(a, o++)), (i += Jn(a, t, r, c, l));
  else if (a === "object")
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
function Mn(e, t, r) {
  if (e == null) return e;
  var s = [],
    l = 0;
  return (
    Jn(e, s, "", "", function (a) {
      return t.call(r, a, l++);
    }),
    s
  );
}
function gd(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var je = { current: null },
  Zn = { transition: null },
  xd = {
    ReactCurrentDispatcher: je,
    ReactCurrentBatchConfig: Zn,
    ReactCurrentOwner: Sa,
  };
function Lo() {
  throw Error("act(...) is not supported in production builds of React.");
}
F.Children = {
  map: Mn,
  forEach: function (e, t, r) {
    Mn(
      e,
      function () {
        t.apply(this, arguments);
      },
      r
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Mn(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Mn(e, function (t) {
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
F.Component = Mr;
F.Fragment = sd;
F.Profiler = ad;
F.PureComponent = Na;
F.StrictMode = ld;
F.Suspense = ud;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xd;
F.act = Lo;
F.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var s = To({}, e.props),
    l = e.key,
    a = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((a = t.ref), (i = Sa.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (c in t)
      Mo.call(t, c) &&
        !Ro.hasOwnProperty(c) &&
        (s[c] = t[c] === void 0 && o !== void 0 ? o[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) s.children = r;
  else if (1 < c) {
    o = Array(c);
    for (var u = 0; u < c; u++) o[u] = arguments[u + 2];
    s.children = o;
  }
  return { $$typeof: En, type: e.type, key: l, ref: a, props: s, _owner: i };
};
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: od,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: id, _context: e }),
    (e.Consumer = e)
  );
};
F.createElement = Oo;
F.createFactory = function (e) {
  var t = Oo.bind(null, e);
  return (t.type = e), t;
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: cd, render: e };
};
F.isValidElement = ka;
F.lazy = function (e) {
  return { $$typeof: fd, _payload: { _status: -1, _result: e }, _init: gd };
};
F.memo = function (e, t) {
  return { $$typeof: dd, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
  var t = Zn.transition;
  Zn.transition = {};
  try {
    e();
  } finally {
    Zn.transition = t;
  }
};
F.unstable_act = Lo;
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
F.useImperativeHandle = function (e, t, r) {
  return je.current.useImperativeHandle(e, t, r);
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
F.useReducer = function (e, t, r) {
  return je.current.useReducer(e, t, r);
};
F.useRef = function (e) {
  return je.current.useRef(e);
};
F.useState = function (e) {
  return je.current.useState(e);
};
F.useSyncExternalStore = function (e, t, r) {
  return je.current.useSyncExternalStore(e, t, r);
};
F.useTransition = function () {
  return je.current.useTransition();
};
F.version = "18.3.1";
_o.exports = F;
var w = _o.exports;
const Te = rd(w);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yd = w,
  vd = Symbol.for("react.element"),
  jd = Symbol.for("react.fragment"),
  wd = Object.prototype.hasOwnProperty,
  Nd = yd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  bd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ao(e, t, r) {
  var s,
    l = {},
    a = null,
    i = null;
  r !== void 0 && (a = "" + r),
    t.key !== void 0 && (a = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (s in t) wd.call(t, s) && !bd.hasOwnProperty(s) && (l[s] = t[s]);
  if (e && e.defaultProps)
    for (s in ((t = e.defaultProps), t)) l[s] === void 0 && (l[s] = t[s]);
  return {
    $$typeof: vd,
    type: e,
    key: a,
    ref: i,
    props: l,
    _owner: Nd.current,
  };
}
Rs.Fragment = jd;
Rs.jsx = Ao;
Rs.jsxs = Ao;
Do.exports = Rs;
var n = Do.exports,
  Fo = { exports: {} },
  Oe = {},
  $o = { exports: {} },
  Uo = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, L) {
    var C = M.length;
    M.push(L);
    e: for (; 0 < C; ) {
      var $ = (C - 1) >>> 1,
        S = M[$];
      if (0 < l(S, L)) (M[$] = L), (M[C] = S), (C = $);
      else break e;
    }
  }
  function r(M) {
    return M.length === 0 ? null : M[0];
  }
  function s(M) {
    if (M.length === 0) return null;
    var L = M[0],
      C = M.pop();
    if (C !== L) {
      M[0] = C;
      e: for (var $ = 0, S = M.length, U = S >>> 1; $ < U; ) {
        var ee = 2 * ($ + 1) - 1,
          _e = M[ee],
          xt = ee + 1,
          Pn = M[xt];
        if (0 > l(_e, C))
          xt < S && 0 > l(Pn, _e)
            ? ((M[$] = Pn), (M[xt] = C), ($ = xt))
            : ((M[$] = _e), (M[ee] = C), ($ = ee));
        else if (xt < S && 0 > l(Pn, C)) (M[$] = Pn), (M[xt] = C), ($ = xt);
        else break e;
      }
    }
    return L;
  }
  function l(M, L) {
    var C = M.sortIndex - L.sortIndex;
    return C !== 0 ? C : M.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e.unstable_now = function () {
      return a.now();
    };
  } else {
    var i = Date,
      o = i.now();
    e.unstable_now = function () {
      return i.now() - o;
    };
  }
  var c = [],
    u = [],
    d = 1,
    m = null,
    f = 3,
    x = !1,
    v = !1,
    j = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(M) {
    for (var L = r(u); L !== null; ) {
      if (L.callback === null) s(u);
      else if (L.startTime <= M)
        s(u), (L.sortIndex = L.expirationTime), t(c, L);
      else break;
      L = r(u);
    }
  }
  function N(M) {
    if (((j = !1), h(M), !v))
      if (r(c) !== null) (v = !0), G(_);
      else {
        var L = r(u);
        L !== null && Ae(N, L.startTime - M);
      }
  }
  function _(M, L) {
    (v = !1), j && ((j = !1), g(E), (E = -1)), (x = !0);
    var C = f;
    try {
      for (
        h(L), m = r(c);
        m !== null && (!(m.expirationTime > L) || (M && !I()));

      ) {
        var $ = m.callback;
        if (typeof $ == "function") {
          (m.callback = null), (f = m.priorityLevel);
          var S = $(m.expirationTime <= L);
          (L = e.unstable_now()),
            typeof S == "function" ? (m.callback = S) : m === r(c) && s(c),
            h(L);
        } else s(c);
        m = r(c);
      }
      if (m !== null) var U = !0;
      else {
        var ee = r(u);
        ee !== null && Ae(N, ee.startTime - L), (U = !1);
      }
      return U;
    } finally {
      (m = null), (f = C), (x = !1);
    }
  }
  var D = !1,
    T = null,
    E = -1,
    y = 5,
    b = -1;
  function I() {
    return !(e.unstable_now() - b < y);
  }
  function P() {
    if (T !== null) {
      var M = e.unstable_now();
      b = M;
      var L = !0;
      try {
        L = T(!0, M);
      } finally {
        L ? A() : ((D = !1), (T = null));
      }
    } else D = !1;
  }
  var A;
  if (typeof p == "function")
    A = function () {
      p(P);
    };
  else if (typeof MessageChannel < "u") {
    var le = new MessageChannel(),
      R = le.port2;
    (le.port1.onmessage = P),
      (A = function () {
        R.postMessage(null);
      });
  } else
    A = function () {
      k(P, 0);
    };
  function G(M) {
    (T = M), D || ((D = !0), A());
  }
  function Ae(M, L) {
    E = k(function () {
      M(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || x || ((v = !0), G(_));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (y = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(c);
    }),
    (e.unstable_next = function (M) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = f;
      }
      var C = f;
      f = L;
      try {
        return M();
      } finally {
        f = C;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, L) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var C = f;
      f = M;
      try {
        return L();
      } finally {
        f = C;
      }
    }),
    (e.unstable_scheduleCallback = function (M, L, C) {
      var $ = e.unstable_now();
      switch (
        (typeof C == "object" && C !== null
          ? ((C = C.delay), (C = typeof C == "number" && 0 < C ? $ + C : $))
          : (C = $),
        M)
      ) {
        case 1:
          var S = -1;
          break;
        case 2:
          S = 250;
          break;
        case 5:
          S = 1073741823;
          break;
        case 4:
          S = 1e4;
          break;
        default:
          S = 5e3;
      }
      return (
        (S = C + S),
        (M = {
          id: d++,
          callback: L,
          priorityLevel: M,
          startTime: C,
          expirationTime: S,
          sortIndex: -1,
        }),
        C > $
          ? ((M.sortIndex = C),
            t(u, M),
            r(c) === null &&
              M === r(u) &&
              (j ? (g(E), (E = -1)) : (j = !0), Ae(N, C - $)))
          : ((M.sortIndex = S), t(c, M), v || x || ((v = !0), G(_))),
        M
      );
    }),
    (e.unstable_shouldYield = I),
    (e.unstable_wrapCallback = function (M) {
      var L = f;
      return function () {
        var C = f;
        f = L;
        try {
          return M.apply(this, arguments);
        } finally {
          f = C;
        }
      };
    });
})(Uo);
$o.exports = Uo;
var Sd = $o.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kd = w,
  Me = Sd;
function z(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
    r < arguments.length;
    r++
  )
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Vo = new Set(),
  on = {};
function sr(e, t) {
  Cr(e, t), Cr(e + "Capture", t);
}
function Cr(e, t) {
  for (on[e] = t, e = 0; e < t.length; e++) Vo.add(t[e]);
}
var ut = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  zl = Object.prototype.hasOwnProperty,
  Cd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ji = {},
  wi = {};
function Ed(e) {
  return zl.call(wi, e)
    ? !0
    : zl.call(ji, e)
    ? !1
    : Cd.test(e)
    ? (wi[e] = !0)
    : ((ji[e] = !0), !1);
}
function Dd(e, t, r, s) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return s
        ? !1
        : r !== null
        ? !r.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function _d(e, t, r, s) {
  if (t === null || typeof t > "u" || Dd(e, t, r, s)) return !0;
  if (s) return !1;
  if (r !== null)
    switch (r.type) {
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
function we(e, t, r, s, l, a, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = s),
    (this.attributeNamespace = l),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = i);
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
var Ca = /[\-:]([a-z])/g;
function Ea(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ca, Ea);
    fe[t] = new we(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ca, Ea);
    fe[t] = new we(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ca, Ea);
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
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  fe[e] = new we(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Da(e, t, r, s) {
  var l = fe.hasOwnProperty(t) ? fe[t] : null;
  (l !== null
    ? l.type !== 0
    : s ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (_d(t, r, l, s) && (r = null),
    s || l === null
      ? Ed(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
      : l.mustUseProperty
      ? (e[l.propertyName] = r === null ? (l.type === 3 ? !1 : "") : r)
      : ((t = l.attributeName),
        (s = l.attributeNamespace),
        r === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (r = l === 3 || (l === 4 && r === !0) ? "" : "" + r),
            s ? e.setAttributeNS(s, t, r) : e.setAttribute(t, r))));
}
var gt = kd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Rn = Symbol.for("react.element"),
  ir = Symbol.for("react.portal"),
  or = Symbol.for("react.fragment"),
  _a = Symbol.for("react.strict_mode"),
  Tl = Symbol.for("react.profiler"),
  Ho = Symbol.for("react.provider"),
  Bo = Symbol.for("react.context"),
  za = Symbol.for("react.forward_ref"),
  Il = Symbol.for("react.suspense"),
  Pl = Symbol.for("react.suspense_list"),
  Ta = Symbol.for("react.memo"),
  jt = Symbol.for("react.lazy"),
  qo = Symbol.for("react.offscreen"),
  Ni = Symbol.iterator;
function Fr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ni && e[Ni]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Z = Object.assign,
  tl;
function Wr(e) {
  if (tl === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      tl = (t && t[1]) || "";
    }
  return (
    `
` +
    tl +
    e
  );
}
var rl = !1;
function nl(e, t) {
  if (!e || rl) return "";
  rl = !0;
  var r = Error.prepareStackTrace;
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
          var s = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          s = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        s = u;
      }
      e();
    }
  } catch (u) {
    if (u && s && typeof u.stack == "string") {
      for (
        var l = u.stack.split(`
`),
          a = s.stack.split(`
`),
          i = l.length - 1,
          o = a.length - 1;
        1 <= i && 0 <= o && l[i] !== a[o];

      )
        o--;
      for (; 1 <= i && 0 <= o; i--, o--)
        if (l[i] !== a[o]) {
          if (i !== 1 || o !== 1)
            do
              if ((i--, o--, 0 > o || l[i] !== a[o])) {
                var c =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    c.includes("<anonymous>") &&
                    (c = c.replace("<anonymous>", e.displayName)),
                  c
                );
              }
            while (1 <= i && 0 <= o);
          break;
        }
    }
  } finally {
    (rl = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : "") ? Wr(e) : "";
}
function zd(e) {
  switch (e.tag) {
    case 5:
      return Wr(e.type);
    case 16:
      return Wr("Lazy");
    case 13:
      return Wr("Suspense");
    case 19:
      return Wr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = nl(e.type, !1)), e;
    case 11:
      return (e = nl(e.type.render, !1)), e;
    case 1:
      return (e = nl(e.type, !0)), e;
    default:
      return "";
  }
}
function Ml(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case or:
      return "Fragment";
    case ir:
      return "Portal";
    case Tl:
      return "Profiler";
    case _a:
      return "StrictMode";
    case Il:
      return "Suspense";
    case Pl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Bo:
        return (e.displayName || "Context") + ".Consumer";
      case Ho:
        return (e._context.displayName || "Context") + ".Provider";
      case za:
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
          (t = e.displayName || null), t !== null ? t : Ml(e.type) || "Memo"
        );
      case jt:
        (t = e._payload), (e = e._init);
        try {
          return Ml(e(t));
        } catch {}
    }
  return null;
}
function Td(e) {
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
      return Ml(t);
    case 8:
      return t === _a ? "StrictMode" : "Mode";
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
function Qo(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Id(e) {
  var t = Qo(e) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    s = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof r < "u" &&
    typeof r.get == "function" &&
    typeof r.set == "function"
  ) {
    var l = r.get,
      a = r.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (s = "" + i), a.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return s;
        },
        setValue: function (i) {
          s = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function On(e) {
  e._valueTracker || (e._valueTracker = Id(e));
}
function Wo(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    s = "";
  return (
    e && (s = Qo(e) ? (e.checked ? "true" : "false") : e.value),
    (e = s),
    e !== r ? (t.setValue(e), !0) : !1
  );
}
function us(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Rl(e, t) {
  var r = t.checked;
  return Z({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  });
}
function bi(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue,
    s = t.checked != null ? t.checked : t.defaultChecked;
  (r = Mt(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: s,
      initialValue: r,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Go(e, t) {
  (t = t.checked), t != null && Da(e, "checked", t, !1);
}
function Ol(e, t) {
  Go(e, t);
  var r = Mt(t.value),
    s = t.type;
  if (r != null)
    s === "number"
      ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
      : e.value !== "" + r && (e.value = "" + r);
  else if (s === "submit" || s === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ll(e, t.type, r)
    : t.hasOwnProperty("defaultValue") && Ll(e, t.type, Mt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Si(e, t, r) {
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
      r || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (r = e.name),
    r !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== "" && (e.name = r);
}
function Ll(e, t, r) {
  (t !== "number" || us(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var Gr = Array.isArray;
function vr(e, t, r, s) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < r.length; l++) t["$" + r[l]] = !0;
    for (r = 0; r < e.length; r++)
      (l = t.hasOwnProperty("$" + e[r].value)),
        e[r].selected !== l && (e[r].selected = l),
        l && s && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + Mt(r), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === r) {
        (e[l].selected = !0), s && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Al(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(z(91));
  return Z({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ki(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(z(92));
      if (Gr(r)) {
        if (1 < r.length) throw Error(z(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), (r = t);
  }
  e._wrapperState = { initialValue: Mt(r) };
}
function Yo(e, t) {
  var r = Mt(t.value),
    s = Mt(t.defaultValue);
  r != null &&
    ((r = "" + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    s != null && (e.defaultValue = "" + s);
}
function Ci(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ko(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Fl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ko(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ln,
  Xo = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, r, s, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, s, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ln = Ln || document.createElement("div"),
          Ln.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ln.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function cn(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Xr = {
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
  Pd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Xr).forEach(function (e) {
  Pd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Xr[t] = Xr[e]);
  });
});
function Jo(e, t, r) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : r || typeof t != "number" || t === 0 || (Xr.hasOwnProperty(e) && Xr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Zo(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var s = r.indexOf("--") === 0,
        l = Jo(r, t[r], s);
      r === "float" && (r = "cssFloat"), s ? e.setProperty(r, l) : (e[r] = l);
    }
}
var Md = Z(
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
function $l(e, t) {
  if (t) {
    if (Md[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(z(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(z(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(z(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(z(62));
  }
}
function Ul(e, t) {
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
var Vl = null;
function Ia(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Hl = null,
  jr = null,
  wr = null;
function Ei(e) {
  if ((e = zn(e))) {
    if (typeof Hl != "function") throw Error(z(280));
    var t = e.stateNode;
    t && ((t = $s(t)), Hl(e.stateNode, e.type, t));
  }
}
function ec(e) {
  jr ? (wr ? wr.push(e) : (wr = [e])) : (jr = e);
}
function tc() {
  if (jr) {
    var e = jr,
      t = wr;
    if (((wr = jr = null), Ei(e), t)) for (e = 0; e < t.length; e++) Ei(t[e]);
  }
}
function rc(e, t) {
  return e(t);
}
function nc() {}
var sl = !1;
function sc(e, t, r) {
  if (sl) return e(t, r);
  sl = !0;
  try {
    return rc(e, t, r);
  } finally {
    (sl = !1), (jr !== null || wr !== null) && (nc(), tc());
  }
}
function un(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var s = $s(r);
  if (s === null) return null;
  r = s[t];
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
  if (r && typeof r != "function") throw Error(z(231, t, typeof r));
  return r;
}
var Bl = !1;
if (ut)
  try {
    var $r = {};
    Object.defineProperty($r, "passive", {
      get: function () {
        Bl = !0;
      },
    }),
      window.addEventListener("test", $r, $r),
      window.removeEventListener("test", $r, $r);
  } catch {
    Bl = !1;
  }
function Rd(e, t, r, s, l, a, i, o, c) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (d) {
    this.onError(d);
  }
}
var Jr = !1,
  ds = null,
  fs = !1,
  ql = null,
  Od = {
    onError: function (e) {
      (Jr = !0), (ds = e);
    },
  };
function Ld(e, t, r, s, l, a, i, o, c) {
  (Jr = !1), (ds = null), Rd.apply(Od, arguments);
}
function Ad(e, t, r, s, l, a, i, o, c) {
  if ((Ld.apply(this, arguments), Jr)) {
    if (Jr) {
      var u = ds;
      (Jr = !1), (ds = null);
    } else throw Error(z(198));
    fs || ((fs = !0), (ql = u));
  }
}
function lr(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function lc(e) {
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
function Di(e) {
  if (lr(e) !== e) throw Error(z(188));
}
function Fd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = lr(e)), t === null)) throw Error(z(188));
    return t !== e ? null : e;
  }
  for (var r = e, s = t; ; ) {
    var l = r.return;
    if (l === null) break;
    var a = l.alternate;
    if (a === null) {
      if (((s = l.return), s !== null)) {
        r = s;
        continue;
      }
      break;
    }
    if (l.child === a.child) {
      for (a = l.child; a; ) {
        if (a === r) return Di(l), e;
        if (a === s) return Di(l), t;
        a = a.sibling;
      }
      throw Error(z(188));
    }
    if (r.return !== s.return) (r = l), (s = a);
    else {
      for (var i = !1, o = l.child; o; ) {
        if (o === r) {
          (i = !0), (r = l), (s = a);
          break;
        }
        if (o === s) {
          (i = !0), (s = l), (r = a);
          break;
        }
        o = o.sibling;
      }
      if (!i) {
        for (o = a.child; o; ) {
          if (o === r) {
            (i = !0), (r = a), (s = l);
            break;
          }
          if (o === s) {
            (i = !0), (s = a), (r = l);
            break;
          }
          o = o.sibling;
        }
        if (!i) throw Error(z(189));
      }
    }
    if (r.alternate !== s) throw Error(z(190));
  }
  if (r.tag !== 3) throw Error(z(188));
  return r.stateNode.current === r ? e : t;
}
function ac(e) {
  return (e = Fd(e)), e !== null ? ic(e) : null;
}
function ic(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ic(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var oc = Me.unstable_scheduleCallback,
  _i = Me.unstable_cancelCallback,
  $d = Me.unstable_shouldYield,
  Ud = Me.unstable_requestPaint,
  ne = Me.unstable_now,
  Vd = Me.unstable_getCurrentPriorityLevel,
  Pa = Me.unstable_ImmediatePriority,
  cc = Me.unstable_UserBlockingPriority,
  ms = Me.unstable_NormalPriority,
  Hd = Me.unstable_LowPriority,
  uc = Me.unstable_IdlePriority,
  Os = null,
  rt = null;
function Bd(e) {
  if (rt && typeof rt.onCommitFiberRoot == "function")
    try {
      rt.onCommitFiberRoot(Os, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ke = Math.clz32 ? Math.clz32 : Wd,
  qd = Math.log,
  Qd = Math.LN2;
function Wd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((qd(e) / Qd) | 0)) | 0;
}
var An = 64,
  Fn = 4194304;
function Yr(e) {
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
function ps(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var s = 0,
    l = e.suspendedLanes,
    a = e.pingedLanes,
    i = r & 268435455;
  if (i !== 0) {
    var o = i & ~l;
    o !== 0 ? (s = Yr(o)) : ((a &= i), a !== 0 && (s = Yr(a)));
  } else (i = r & ~l), i !== 0 ? (s = Yr(i)) : a !== 0 && (s = Yr(a));
  if (s === 0) return 0;
  if (
    t !== 0 &&
    t !== s &&
    !(t & l) &&
    ((l = s & -s), (a = t & -t), l >= a || (l === 16 && (a & 4194240) !== 0))
  )
    return t;
  if ((s & 4 && (s |= r & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= s; 0 < t; )
      (r = 31 - Ke(t)), (l = 1 << r), (s |= e[r]), (t &= ~l);
  return s;
}
function Gd(e, t) {
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
function Yd(e, t) {
  for (
    var r = e.suspendedLanes,
      s = e.pingedLanes,
      l = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;

  ) {
    var i = 31 - Ke(a),
      o = 1 << i,
      c = l[i];
    c === -1
      ? (!(o & r) || o & s) && (l[i] = Gd(o, t))
      : c <= t && (e.expiredLanes |= o),
      (a &= ~o);
  }
}
function Ql(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function dc() {
  var e = An;
  return (An <<= 1), !(An & 4194240) && (An = 64), e;
}
function ll(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function Dn(e, t, r) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ke(t)),
    (e[t] = r);
}
function Kd(e, t) {
  var r = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var s = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var l = 31 - Ke(r),
      a = 1 << l;
    (t[l] = 0), (s[l] = -1), (e[l] = -1), (r &= ~a);
  }
}
function Ma(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r; ) {
    var s = 31 - Ke(r),
      l = 1 << s;
    (l & t) | (e[s] & t) && (e[s] |= t), (r &= ~l);
  }
}
var B = 0;
function fc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var mc,
  Ra,
  pc,
  hc,
  gc,
  Wl = !1,
  $n = [],
  Ct = null,
  Et = null,
  Dt = null,
  dn = new Map(),
  fn = new Map(),
  Nt = [],
  Xd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function zi(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ct = null;
      break;
    case "dragenter":
    case "dragleave":
      Et = null;
      break;
    case "mouseover":
    case "mouseout":
      Dt = null;
      break;
    case "pointerover":
    case "pointerout":
      dn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      fn.delete(t.pointerId);
  }
}
function Ur(e, t, r, s, l, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: s,
        nativeEvent: a,
        targetContainers: [l],
      }),
      t !== null && ((t = zn(t)), t !== null && Ra(t)),
      e)
    : ((e.eventSystemFlags |= s),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Jd(e, t, r, s, l) {
  switch (t) {
    case "focusin":
      return (Ct = Ur(Ct, e, t, r, s, l)), !0;
    case "dragenter":
      return (Et = Ur(Et, e, t, r, s, l)), !0;
    case "mouseover":
      return (Dt = Ur(Dt, e, t, r, s, l)), !0;
    case "pointerover":
      var a = l.pointerId;
      return dn.set(a, Ur(dn.get(a) || null, e, t, r, s, l)), !0;
    case "gotpointercapture":
      return (
        (a = l.pointerId), fn.set(a, Ur(fn.get(a) || null, e, t, r, s, l)), !0
      );
  }
  return !1;
}
function xc(e) {
  var t = Bt(e.target);
  if (t !== null) {
    var r = lr(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = lc(r)), t !== null)) {
          (e.blockedOn = t),
            gc(e.priority, function () {
              pc(r);
            });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function es(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Gl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var s = new r.constructor(r.type, r);
      (Vl = s), r.target.dispatchEvent(s), (Vl = null);
    } else return (t = zn(r)), t !== null && Ra(t), (e.blockedOn = r), !1;
    t.shift();
  }
  return !0;
}
function Ti(e, t, r) {
  es(e) && r.delete(t);
}
function Zd() {
  (Wl = !1),
    Ct !== null && es(Ct) && (Ct = null),
    Et !== null && es(Et) && (Et = null),
    Dt !== null && es(Dt) && (Dt = null),
    dn.forEach(Ti),
    fn.forEach(Ti);
}
function Vr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Wl ||
      ((Wl = !0),
      Me.unstable_scheduleCallback(Me.unstable_NormalPriority, Zd)));
}
function mn(e) {
  function t(l) {
    return Vr(l, e);
  }
  if (0 < $n.length) {
    Vr($n[0], e);
    for (var r = 1; r < $n.length; r++) {
      var s = $n[r];
      s.blockedOn === e && (s.blockedOn = null);
    }
  }
  for (
    Ct !== null && Vr(Ct, e),
      Et !== null && Vr(Et, e),
      Dt !== null && Vr(Dt, e),
      dn.forEach(t),
      fn.forEach(t),
      r = 0;
    r < Nt.length;
    r++
  )
    (s = Nt[r]), s.blockedOn === e && (s.blockedOn = null);
  for (; 0 < Nt.length && ((r = Nt[0]), r.blockedOn === null); )
    xc(r), r.blockedOn === null && Nt.shift();
}
var Nr = gt.ReactCurrentBatchConfig,
  hs = !0;
function ef(e, t, r, s) {
  var l = B,
    a = Nr.transition;
  Nr.transition = null;
  try {
    (B = 1), Oa(e, t, r, s);
  } finally {
    (B = l), (Nr.transition = a);
  }
}
function tf(e, t, r, s) {
  var l = B,
    a = Nr.transition;
  Nr.transition = null;
  try {
    (B = 4), Oa(e, t, r, s);
  } finally {
    (B = l), (Nr.transition = a);
  }
}
function Oa(e, t, r, s) {
  if (hs) {
    var l = Gl(e, t, r, s);
    if (l === null) hl(e, t, s, gs, r), zi(e, s);
    else if (Jd(l, e, t, r, s)) s.stopPropagation();
    else if ((zi(e, s), t & 4 && -1 < Xd.indexOf(e))) {
      for (; l !== null; ) {
        var a = zn(l);
        if (
          (a !== null && mc(a),
          (a = Gl(e, t, r, s)),
          a === null && hl(e, t, s, gs, r),
          a === l)
        )
          break;
        l = a;
      }
      l !== null && s.stopPropagation();
    } else hl(e, t, s, null, r);
  }
}
var gs = null;
function Gl(e, t, r, s) {
  if (((gs = null), (e = Ia(s)), (e = Bt(e)), e !== null))
    if (((t = lr(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = lc(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (gs = e), null;
}
function yc(e) {
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
      switch (Vd()) {
        case Pa:
          return 1;
        case cc:
          return 4;
        case ms:
        case Hd:
          return 16;
        case uc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var St = null,
  La = null,
  ts = null;
function vc() {
  if (ts) return ts;
  var e,
    t = La,
    r = t.length,
    s,
    l = "value" in St ? St.value : St.textContent,
    a = l.length;
  for (e = 0; e < r && t[e] === l[e]; e++);
  var i = r - e;
  for (s = 1; s <= i && t[r - s] === l[a - s]; s++);
  return (ts = l.slice(e, 1 < s ? 1 - s : void 0));
}
function rs(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Un() {
  return !0;
}
function Ii() {
  return !1;
}
function Le(e) {
  function t(r, s, l, a, i) {
    (this._reactName = r),
      (this._targetInst = l),
      (this.type = s),
      (this.nativeEvent = a),
      (this.target = i),
      (this.currentTarget = null);
    for (var o in e)
      e.hasOwnProperty(o) && ((r = e[o]), (this[o] = r ? r(a) : a[o]));
    return (
      (this.isDefaultPrevented = (
        a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
      )
        ? Un
        : Ii),
      (this.isPropagationStopped = Ii),
      this
    );
  }
  return (
    Z(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = Un));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = Un));
      },
      persist: function () {},
      isPersistent: Un,
    }),
    t
  );
}
var Rr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Aa = Le(Rr),
  _n = Z({}, Rr, { view: 0, detail: 0 }),
  rf = Le(_n),
  al,
  il,
  Hr,
  Ls = Z({}, _n, {
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
    getModifierState: Fa,
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
        : (e !== Hr &&
            (Hr && e.type === "mousemove"
              ? ((al = e.screenX - Hr.screenX), (il = e.screenY - Hr.screenY))
              : (il = al = 0),
            (Hr = e)),
          al);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : il;
    },
  }),
  Pi = Le(Ls),
  nf = Z({}, Ls, { dataTransfer: 0 }),
  sf = Le(nf),
  lf = Z({}, _n, { relatedTarget: 0 }),
  ol = Le(lf),
  af = Z({}, Rr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  of = Le(af),
  cf = Z({}, Rr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  uf = Le(cf),
  df = Z({}, Rr, { data: 0 }),
  Mi = Le(df),
  ff = {
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
  mf = {
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
  pf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function hf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = pf[e]) ? !!t[e] : !1;
}
function Fa() {
  return hf;
}
var gf = Z({}, _n, {
    key: function (e) {
      if (e.key) {
        var t = ff[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = rs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? mf[e.keyCode] || "Unidentified"
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
    getModifierState: Fa,
    charCode: function (e) {
      return e.type === "keypress" ? rs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? rs(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  xf = Le(gf),
  yf = Z({}, Ls, {
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
  Ri = Le(yf),
  vf = Z({}, _n, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Fa,
  }),
  jf = Le(vf),
  wf = Z({}, Rr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Nf = Le(wf),
  bf = Z({}, Ls, {
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
  Sf = Le(bf),
  kf = [9, 13, 27, 32],
  $a = ut && "CompositionEvent" in window,
  Zr = null;
ut && "documentMode" in document && (Zr = document.documentMode);
var Cf = ut && "TextEvent" in window && !Zr,
  jc = ut && (!$a || (Zr && 8 < Zr && 11 >= Zr)),
  Oi = " ",
  Li = !1;
function wc(e, t) {
  switch (e) {
    case "keyup":
      return kf.indexOf(t.keyCode) !== -1;
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
function Nc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var cr = !1;
function Ef(e, t) {
  switch (e) {
    case "compositionend":
      return Nc(t);
    case "keypress":
      return t.which !== 32 ? null : ((Li = !0), Oi);
    case "textInput":
      return (e = t.data), e === Oi && Li ? null : e;
    default:
      return null;
  }
}
function Df(e, t) {
  if (cr)
    return e === "compositionend" || (!$a && wc(e, t))
      ? ((e = vc()), (ts = La = St = null), (cr = !1), e)
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
      return jc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var _f = {
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
function Ai(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!_f[e.type] : t === "textarea";
}
function bc(e, t, r, s) {
  ec(s),
    (t = xs(t, "onChange")),
    0 < t.length &&
      ((r = new Aa("onChange", "change", null, r, s)),
      e.push({ event: r, listeners: t }));
}
var en = null,
  pn = null;
function zf(e) {
  Mc(e, 0);
}
function As(e) {
  var t = fr(e);
  if (Wo(t)) return e;
}
function Tf(e, t) {
  if (e === "change") return t;
}
var Sc = !1;
if (ut) {
  var cl;
  if (ut) {
    var ul = "oninput" in document;
    if (!ul) {
      var Fi = document.createElement("div");
      Fi.setAttribute("oninput", "return;"),
        (ul = typeof Fi.oninput == "function");
    }
    cl = ul;
  } else cl = !1;
  Sc = cl && (!document.documentMode || 9 < document.documentMode);
}
function $i() {
  en && (en.detachEvent("onpropertychange", kc), (pn = en = null));
}
function kc(e) {
  if (e.propertyName === "value" && As(pn)) {
    var t = [];
    bc(t, pn, e, Ia(e)), sc(zf, t);
  }
}
function If(e, t, r) {
  e === "focusin"
    ? ($i(), (en = t), (pn = r), en.attachEvent("onpropertychange", kc))
    : e === "focusout" && $i();
}
function Pf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return As(pn);
}
function Mf(e, t) {
  if (e === "click") return As(t);
}
function Rf(e, t) {
  if (e === "input" || e === "change") return As(t);
}
function Of(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Je = typeof Object.is == "function" ? Object.is : Of;
function hn(e, t) {
  if (Je(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e),
    s = Object.keys(t);
  if (r.length !== s.length) return !1;
  for (s = 0; s < r.length; s++) {
    var l = r[s];
    if (!zl.call(t, l) || !Je(e[l], t[l])) return !1;
  }
  return !0;
}
function Ui(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Vi(e, t) {
  var r = Ui(e);
  e = 0;
  for (var s; r; ) {
    if (r.nodeType === 3) {
      if (((s = e + r.textContent.length), e <= t && s >= t))
        return { node: r, offset: t - e };
      e = s;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = Ui(r);
  }
}
function Cc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Cc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ec() {
  for (var e = window, t = us(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = us(e.document);
  }
  return t;
}
function Ua(e) {
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
function Lf(e) {
  var t = Ec(),
    r = e.focusedElem,
    s = e.selectionRange;
  if (
    t !== r &&
    r &&
    r.ownerDocument &&
    Cc(r.ownerDocument.documentElement, r)
  ) {
    if (s !== null && Ua(r)) {
      if (
        ((t = s.start),
        (e = s.end),
        e === void 0 && (e = t),
        "selectionStart" in r)
      )
        (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length));
      else if (
        ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = r.textContent.length,
          a = Math.min(s.start, l);
        (s = s.end === void 0 ? a : Math.min(s.end, l)),
          !e.extend && a > s && ((l = s), (s = a), (a = l)),
          (l = Vi(r, a));
        var i = Vi(r, s);
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
          a > s
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
      (e = t[r]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Af = ut && "documentMode" in document && 11 >= document.documentMode,
  ur = null,
  Yl = null,
  tn = null,
  Kl = !1;
function Hi(e, t, r) {
  var s = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  Kl ||
    ur == null ||
    ur !== us(s) ||
    ((s = ur),
    "selectionStart" in s && Ua(s)
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
    (tn && hn(tn, s)) ||
      ((tn = s),
      (s = xs(Yl, "onSelect")),
      0 < s.length &&
        ((t = new Aa("onSelect", "select", null, t, r)),
        e.push({ event: t, listeners: s }),
        (t.target = ur))));
}
function Vn(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r["Webkit" + e] = "webkit" + t),
    (r["Moz" + e] = "moz" + t),
    r
  );
}
var dr = {
    animationend: Vn("Animation", "AnimationEnd"),
    animationiteration: Vn("Animation", "AnimationIteration"),
    animationstart: Vn("Animation", "AnimationStart"),
    transitionend: Vn("Transition", "TransitionEnd"),
  },
  dl = {},
  Dc = {};
ut &&
  ((Dc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete dr.animationend.animation,
    delete dr.animationiteration.animation,
    delete dr.animationstart.animation),
  "TransitionEvent" in window || delete dr.transitionend.transition);
function Fs(e) {
  if (dl[e]) return dl[e];
  if (!dr[e]) return e;
  var t = dr[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in Dc) return (dl[e] = t[r]);
  return e;
}
var _c = Fs("animationend"),
  zc = Fs("animationiteration"),
  Tc = Fs("animationstart"),
  Ic = Fs("transitionend"),
  Pc = new Map(),
  Bi =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Lt(e, t) {
  Pc.set(e, t), sr(t, [e]);
}
for (var fl = 0; fl < Bi.length; fl++) {
  var ml = Bi[fl],
    Ff = ml.toLowerCase(),
    $f = ml[0].toUpperCase() + ml.slice(1);
  Lt(Ff, "on" + $f);
}
Lt(_c, "onAnimationEnd");
Lt(zc, "onAnimationIteration");
Lt(Tc, "onAnimationStart");
Lt("dblclick", "onDoubleClick");
Lt("focusin", "onFocus");
Lt("focusout", "onBlur");
Lt(Ic, "onTransitionEnd");
Cr("onMouseEnter", ["mouseout", "mouseover"]);
Cr("onMouseLeave", ["mouseout", "mouseover"]);
Cr("onPointerEnter", ["pointerout", "pointerover"]);
Cr("onPointerLeave", ["pointerout", "pointerover"]);
sr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
sr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
sr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
sr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
sr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
sr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Kr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Uf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Kr));
function qi(e, t, r) {
  var s = e.type || "unknown-event";
  (e.currentTarget = r), Ad(s, t, void 0, e), (e.currentTarget = null);
}
function Mc(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var s = e[r],
      l = s.event;
    s = s.listeners;
    e: {
      var a = void 0;
      if (t)
        for (var i = s.length - 1; 0 <= i; i--) {
          var o = s[i],
            c = o.instance,
            u = o.currentTarget;
          if (((o = o.listener), c !== a && l.isPropagationStopped())) break e;
          qi(l, o, u), (a = c);
        }
      else
        for (i = 0; i < s.length; i++) {
          if (
            ((o = s[i]),
            (c = o.instance),
            (u = o.currentTarget),
            (o = o.listener),
            c !== a && l.isPropagationStopped())
          )
            break e;
          qi(l, o, u), (a = c);
        }
    }
  }
  if (fs) throw ((e = ql), (fs = !1), (ql = null), e);
}
function Q(e, t) {
  var r = t[ta];
  r === void 0 && (r = t[ta] = new Set());
  var s = e + "__bubble";
  r.has(s) || (Rc(t, e, 2, !1), r.add(s));
}
function pl(e, t, r) {
  var s = 0;
  t && (s |= 4), Rc(r, e, s, t);
}
var Hn = "_reactListening" + Math.random().toString(36).slice(2);
function gn(e) {
  if (!e[Hn]) {
    (e[Hn] = !0),
      Vo.forEach(function (r) {
        r !== "selectionchange" && (Uf.has(r) || pl(r, !1, e), pl(r, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Hn] || ((t[Hn] = !0), pl("selectionchange", !1, t));
  }
}
function Rc(e, t, r, s) {
  switch (yc(t)) {
    case 1:
      var l = ef;
      break;
    case 4:
      l = tf;
      break;
    default:
      l = Oa;
  }
  (r = l.bind(null, t, r, e)),
    (l = void 0),
    !Bl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    s
      ? l !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: l })
        : e.addEventListener(t, r, !0)
      : l !== void 0
      ? e.addEventListener(t, r, { passive: l })
      : e.addEventListener(t, r, !1);
}
function hl(e, t, r, s, l) {
  var a = s;
  if (!(t & 1) && !(t & 2) && s !== null)
    e: for (;;) {
      if (s === null) return;
      var i = s.tag;
      if (i === 3 || i === 4) {
        var o = s.stateNode.containerInfo;
        if (o === l || (o.nodeType === 8 && o.parentNode === l)) break;
        if (i === 4)
          for (i = s.return; i !== null; ) {
            var c = i.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = i.stateNode.containerInfo),
              c === l || (c.nodeType === 8 && c.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; o !== null; ) {
          if (((i = Bt(o)), i === null)) return;
          if (((c = i.tag), c === 5 || c === 6)) {
            s = a = i;
            continue e;
          }
          o = o.parentNode;
        }
      }
      s = s.return;
    }
  sc(function () {
    var u = a,
      d = Ia(r),
      m = [];
    e: {
      var f = Pc.get(e);
      if (f !== void 0) {
        var x = Aa,
          v = e;
        switch (e) {
          case "keypress":
            if (rs(r) === 0) break e;
          case "keydown":
          case "keyup":
            x = xf;
            break;
          case "focusin":
            (v = "focus"), (x = ol);
            break;
          case "focusout":
            (v = "blur"), (x = ol);
            break;
          case "beforeblur":
          case "afterblur":
            x = ol;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = Pi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = sf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = jf;
            break;
          case _c:
          case zc:
          case Tc:
            x = of;
            break;
          case Ic:
            x = Nf;
            break;
          case "scroll":
            x = rf;
            break;
          case "wheel":
            x = Sf;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = uf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Ri;
        }
        var j = (t & 4) !== 0,
          k = !j && e === "scroll",
          g = j ? (f !== null ? f + "Capture" : null) : f;
        j = [];
        for (var p = u, h; p !== null; ) {
          h = p;
          var N = h.stateNode;
          if (
            (h.tag === 5 &&
              N !== null &&
              ((h = N),
              g !== null && ((N = un(p, g)), N != null && j.push(xn(p, N, h)))),
            k)
          )
            break;
          p = p.return;
        }
        0 < j.length &&
          ((f = new x(f, v, null, r, d)), m.push({ event: f, listeners: j }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          f &&
            r !== Vl &&
            (v = r.relatedTarget || r.fromElement) &&
            (Bt(v) || v[dt]))
        )
          break e;
        if (
          (x || f) &&
          ((f =
            d.window === d
              ? d
              : (f = d.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          x
            ? ((v = r.relatedTarget || r.toElement),
              (x = u),
              (v = v ? Bt(v) : null),
              v !== null &&
                ((k = lr(v)), v !== k || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((x = null), (v = u)),
          x !== v)
        ) {
          if (
            ((j = Pi),
            (N = "onMouseLeave"),
            (g = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((j = Ri),
              (N = "onPointerLeave"),
              (g = "onPointerEnter"),
              (p = "pointer")),
            (k = x == null ? f : fr(x)),
            (h = v == null ? f : fr(v)),
            (f = new j(N, p + "leave", x, r, d)),
            (f.target = k),
            (f.relatedTarget = h),
            (N = null),
            Bt(d) === u &&
              ((j = new j(g, p + "enter", v, r, d)),
              (j.target = h),
              (j.relatedTarget = k),
              (N = j)),
            (k = N),
            x && v)
          )
            t: {
              for (j = x, g = v, p = 0, h = j; h; h = ar(h)) p++;
              for (h = 0, N = g; N; N = ar(N)) h++;
              for (; 0 < p - h; ) (j = ar(j)), p--;
              for (; 0 < h - p; ) (g = ar(g)), h--;
              for (; p--; ) {
                if (j === g || (g !== null && j === g.alternate)) break t;
                (j = ar(j)), (g = ar(g));
              }
              j = null;
            }
          else j = null;
          x !== null && Qi(m, f, x, j, !1),
            v !== null && k !== null && Qi(m, k, v, j, !0);
        }
      }
      e: {
        if (
          ((f = u ? fr(u) : window),
          (x = f.nodeName && f.nodeName.toLowerCase()),
          x === "select" || (x === "input" && f.type === "file"))
        )
          var _ = Tf;
        else if (Ai(f))
          if (Sc) _ = Rf;
          else {
            _ = Pf;
            var D = If;
          }
        else
          (x = f.nodeName) &&
            x.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (_ = Mf);
        if (_ && (_ = _(e, u))) {
          bc(m, _, r, d);
          break e;
        }
        D && D(e, f, u),
          e === "focusout" &&
            (D = f._wrapperState) &&
            D.controlled &&
            f.type === "number" &&
            Ll(f, "number", f.value);
      }
      switch (((D = u ? fr(u) : window), e)) {
        case "focusin":
          (Ai(D) || D.contentEditable === "true") &&
            ((ur = D), (Yl = u), (tn = null));
          break;
        case "focusout":
          tn = Yl = ur = null;
          break;
        case "mousedown":
          Kl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Kl = !1), Hi(m, r, d);
          break;
        case "selectionchange":
          if (Af) break;
        case "keydown":
        case "keyup":
          Hi(m, r, d);
      }
      var T;
      if ($a)
        e: {
          switch (e) {
            case "compositionstart":
              var E = "onCompositionStart";
              break e;
            case "compositionend":
              E = "onCompositionEnd";
              break e;
            case "compositionupdate":
              E = "onCompositionUpdate";
              break e;
          }
          E = void 0;
        }
      else
        cr
          ? wc(e, r) && (E = "onCompositionEnd")
          : e === "keydown" && r.keyCode === 229 && (E = "onCompositionStart");
      E &&
        (jc &&
          r.locale !== "ko" &&
          (cr || E !== "onCompositionStart"
            ? E === "onCompositionEnd" && cr && (T = vc())
            : ((St = d),
              (La = "value" in St ? St.value : St.textContent),
              (cr = !0))),
        (D = xs(u, E)),
        0 < D.length &&
          ((E = new Mi(E, e, null, r, d)),
          m.push({ event: E, listeners: D }),
          T ? (E.data = T) : ((T = Nc(r)), T !== null && (E.data = T)))),
        (T = Cf ? Ef(e, r) : Df(e, r)) &&
          ((u = xs(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new Mi("onBeforeInput", "beforeinput", null, r, d)),
            m.push({ event: d, listeners: u }),
            (d.data = T)));
    }
    Mc(m, t);
  });
}
function xn(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function xs(e, t) {
  for (var r = t + "Capture", s = []; e !== null; ) {
    var l = e,
      a = l.stateNode;
    l.tag === 5 &&
      a !== null &&
      ((l = a),
      (a = un(e, r)),
      a != null && s.unshift(xn(e, a, l)),
      (a = un(e, t)),
      a != null && s.push(xn(e, a, l))),
      (e = e.return);
  }
  return s;
}
function ar(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Qi(e, t, r, s, l) {
  for (var a = t._reactName, i = []; r !== null && r !== s; ) {
    var o = r,
      c = o.alternate,
      u = o.stateNode;
    if (c !== null && c === s) break;
    o.tag === 5 &&
      u !== null &&
      ((o = u),
      l
        ? ((c = un(r, a)), c != null && i.unshift(xn(r, c, o)))
        : l || ((c = un(r, a)), c != null && i.push(xn(r, c, o)))),
      (r = r.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Vf = /\r\n?/g,
  Hf = /\u0000|\uFFFD/g;
function Wi(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Vf,
      `
`
    )
    .replace(Hf, "");
}
function Bn(e, t, r) {
  if (((t = Wi(t)), Wi(e) !== t && r)) throw Error(z(425));
}
function ys() {}
var Xl = null,
  Jl = null;
function Zl(e, t) {
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
var ea = typeof setTimeout == "function" ? setTimeout : void 0,
  Bf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Gi = typeof Promise == "function" ? Promise : void 0,
  qf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Gi < "u"
      ? function (e) {
          return Gi.resolve(null).then(e).catch(Qf);
        }
      : ea;
function Qf(e) {
  setTimeout(function () {
    throw e;
  });
}
function gl(e, t) {
  var r = t,
    s = 0;
  do {
    var l = r.nextSibling;
    if ((e.removeChild(r), l && l.nodeType === 8))
      if (((r = l.data), r === "/$")) {
        if (s === 0) {
          e.removeChild(l), mn(t);
          return;
        }
        s--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || s++;
    r = l;
  } while (r);
  mn(t);
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
function Yi(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Or = Math.random().toString(36).slice(2),
  tt = "__reactFiber$" + Or,
  yn = "__reactProps$" + Or,
  dt = "__reactContainer$" + Or,
  ta = "__reactEvents$" + Or,
  Wf = "__reactListeners$" + Or,
  Gf = "__reactHandles$" + Or;
function Bt(e) {
  var t = e[tt];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[dt] || r[tt])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = Yi(e); e !== null; ) {
          if ((r = e[tt])) return r;
          e = Yi(e);
        }
      return t;
    }
    (e = r), (r = e.parentNode);
  }
  return null;
}
function zn(e) {
  return (
    (e = e[tt] || e[dt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function fr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(z(33));
}
function $s(e) {
  return e[yn] || null;
}
var ra = [],
  mr = -1;
function At(e) {
  return { current: e };
}
function W(e) {
  0 > mr || ((e.current = ra[mr]), (ra[mr] = null), mr--);
}
function q(e, t) {
  mr++, (ra[mr] = e.current), (e.current = t);
}
var Rt = {},
  ge = At(Rt),
  Se = At(!1),
  Jt = Rt;
function Er(e, t) {
  var r = e.type.contextTypes;
  if (!r) return Rt;
  var s = e.stateNode;
  if (s && s.__reactInternalMemoizedUnmaskedChildContext === t)
    return s.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    a;
  for (a in r) l[a] = t[a];
  return (
    s &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function ke(e) {
  return (e = e.childContextTypes), e != null;
}
function vs() {
  W(Se), W(ge);
}
function Ki(e, t, r) {
  if (ge.current !== Rt) throw Error(z(168));
  q(ge, t), q(Se, r);
}
function Oc(e, t, r) {
  var s = e.stateNode;
  if (((t = t.childContextTypes), typeof s.getChildContext != "function"))
    return r;
  s = s.getChildContext();
  for (var l in s) if (!(l in t)) throw Error(z(108, Td(e) || "Unknown", l));
  return Z({}, r, s);
}
function js(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Rt),
    (Jt = ge.current),
    q(ge, e),
    q(Se, Se.current),
    !0
  );
}
function Xi(e, t, r) {
  var s = e.stateNode;
  if (!s) throw Error(z(169));
  r
    ? ((e = Oc(e, t, Jt)),
      (s.__reactInternalMemoizedMergedChildContext = e),
      W(Se),
      W(ge),
      q(ge, e))
    : W(Se),
    q(Se, r);
}
var lt = null,
  Us = !1,
  xl = !1;
function Lc(e) {
  lt === null ? (lt = [e]) : lt.push(e);
}
function Yf(e) {
  (Us = !0), Lc(e);
}
function Ft() {
  if (!xl && lt !== null) {
    xl = !0;
    var e = 0,
      t = B;
    try {
      var r = lt;
      for (B = 1; e < r.length; e++) {
        var s = r[e];
        do s = s(!0);
        while (s !== null);
      }
      (lt = null), (Us = !1);
    } catch (l) {
      throw (lt !== null && (lt = lt.slice(e + 1)), oc(Pa, Ft), l);
    } finally {
      (B = t), (xl = !1);
    }
  }
  return null;
}
var pr = [],
  hr = 0,
  ws = null,
  Ns = 0,
  Fe = [],
  $e = 0,
  Zt = null,
  at = 1,
  it = "";
function Vt(e, t) {
  (pr[hr++] = Ns), (pr[hr++] = ws), (ws = e), (Ns = t);
}
function Ac(e, t, r) {
  (Fe[$e++] = at), (Fe[$e++] = it), (Fe[$e++] = Zt), (Zt = e);
  var s = at;
  e = it;
  var l = 32 - Ke(s) - 1;
  (s &= ~(1 << l)), (r += 1);
  var a = 32 - Ke(t) + l;
  if (30 < a) {
    var i = l - (l % 5);
    (a = (s & ((1 << i) - 1)).toString(32)),
      (s >>= i),
      (l -= i),
      (at = (1 << (32 - Ke(t) + l)) | (r << l) | s),
      (it = a + e);
  } else (at = (1 << a) | (r << l) | s), (it = e);
}
function Va(e) {
  e.return !== null && (Vt(e, 1), Ac(e, 1, 0));
}
function Ha(e) {
  for (; e === ws; )
    (ws = pr[--hr]), (pr[hr] = null), (Ns = pr[--hr]), (pr[hr] = null);
  for (; e === Zt; )
    (Zt = Fe[--$e]),
      (Fe[$e] = null),
      (it = Fe[--$e]),
      (Fe[$e] = null),
      (at = Fe[--$e]),
      (Fe[$e] = null);
}
var Pe = null,
  Ie = null,
  Y = !1,
  Ye = null;
function Fc(e, t) {
  var r = Ue(5, null, null, 0);
  (r.elementType = "DELETED"),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
}
function Ji(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Pe = e), (Ie = _t(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Pe = e), (Ie = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = Zt !== null ? { id: at, overflow: it } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = Ue(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (Pe = e),
            (Ie = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function na(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function sa(e) {
  if (Y) {
    var t = Ie;
    if (t) {
      var r = t;
      if (!Ji(e, t)) {
        if (na(e)) throw Error(z(418));
        t = _t(r.nextSibling);
        var s = Pe;
        t && Ji(e, t)
          ? Fc(s, r)
          : ((e.flags = (e.flags & -4097) | 2), (Y = !1), (Pe = e));
      }
    } else {
      if (na(e)) throw Error(z(418));
      (e.flags = (e.flags & -4097) | 2), (Y = !1), (Pe = e);
    }
  }
}
function Zi(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Pe = e;
}
function qn(e) {
  if (e !== Pe) return !1;
  if (!Y) return Zi(e), (Y = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Zl(e.type, e.memoizedProps))),
    t && (t = Ie))
  ) {
    if (na(e)) throw ($c(), Error(z(418)));
    for (; t; ) Fc(e, t), (t = _t(t.nextSibling));
  }
  if ((Zi(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(z(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              Ie = _t(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ie = null;
    }
  } else Ie = Pe ? _t(e.stateNode.nextSibling) : null;
  return !0;
}
function $c() {
  for (var e = Ie; e; ) e = _t(e.nextSibling);
}
function Dr() {
  (Ie = Pe = null), (Y = !1);
}
function Ba(e) {
  Ye === null ? (Ye = [e]) : Ye.push(e);
}
var Kf = gt.ReactCurrentBatchConfig;
function Br(e, t, r) {
  if (
    ((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(z(309));
        var s = r.stateNode;
      }
      if (!s) throw Error(z(147, e));
      var l = s,
        a = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === a
        ? t.ref
        : ((t = function (i) {
            var o = l.refs;
            i === null ? delete o[a] : (o[a] = i);
          }),
          (t._stringRef = a),
          t);
    }
    if (typeof e != "string") throw Error(z(284));
    if (!r._owner) throw Error(z(290, e));
  }
  return e;
}
function Qn(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      z(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function eo(e) {
  var t = e._init;
  return t(e._payload);
}
function Uc(e) {
  function t(g, p) {
    if (e) {
      var h = g.deletions;
      h === null ? ((g.deletions = [p]), (g.flags |= 16)) : h.push(p);
    }
  }
  function r(g, p) {
    if (!e) return null;
    for (; p !== null; ) t(g, p), (p = p.sibling);
    return null;
  }
  function s(g, p) {
    for (g = new Map(); p !== null; )
      p.key !== null ? g.set(p.key, p) : g.set(p.index, p), (p = p.sibling);
    return g;
  }
  function l(g, p) {
    return (g = Pt(g, p)), (g.index = 0), (g.sibling = null), g;
  }
  function a(g, p, h) {
    return (
      (g.index = h),
      e
        ? ((h = g.alternate),
          h !== null
            ? ((h = h.index), h < p ? ((g.flags |= 2), p) : h)
            : ((g.flags |= 2), p))
        : ((g.flags |= 1048576), p)
    );
  }
  function i(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function o(g, p, h, N) {
    return p === null || p.tag !== 6
      ? ((p = Sl(h, g.mode, N)), (p.return = g), p)
      : ((p = l(p, h)), (p.return = g), p);
  }
  function c(g, p, h, N) {
    var _ = h.type;
    return _ === or
      ? d(g, p, h.props.children, N, h.key)
      : p !== null &&
        (p.elementType === _ ||
          (typeof _ == "object" &&
            _ !== null &&
            _.$$typeof === jt &&
            eo(_) === p.type))
      ? ((N = l(p, h.props)), (N.ref = Br(g, p, h)), (N.return = g), N)
      : ((N = cs(h.type, h.key, h.props, null, g.mode, N)),
        (N.ref = Br(g, p, h)),
        (N.return = g),
        N);
  }
  function u(g, p, h, N) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== h.containerInfo ||
      p.stateNode.implementation !== h.implementation
      ? ((p = kl(h, g.mode, N)), (p.return = g), p)
      : ((p = l(p, h.children || [])), (p.return = g), p);
  }
  function d(g, p, h, N, _) {
    return p === null || p.tag !== 7
      ? ((p = Yt(h, g.mode, N, _)), (p.return = g), p)
      : ((p = l(p, h)), (p.return = g), p);
  }
  function m(g, p, h) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Sl("" + p, g.mode, h)), (p.return = g), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Rn:
          return (
            (h = cs(p.type, p.key, p.props, null, g.mode, h)),
            (h.ref = Br(g, null, p)),
            (h.return = g),
            h
          );
        case ir:
          return (p = kl(p, g.mode, h)), (p.return = g), p;
        case jt:
          var N = p._init;
          return m(g, N(p._payload), h);
      }
      if (Gr(p) || Fr(p))
        return (p = Yt(p, g.mode, h, null)), (p.return = g), p;
      Qn(g, p);
    }
    return null;
  }
  function f(g, p, h, N) {
    var _ = p !== null ? p.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return _ !== null ? null : o(g, p, "" + h, N);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Rn:
          return h.key === _ ? c(g, p, h, N) : null;
        case ir:
          return h.key === _ ? u(g, p, h, N) : null;
        case jt:
          return (_ = h._init), f(g, p, _(h._payload), N);
      }
      if (Gr(h) || Fr(h)) return _ !== null ? null : d(g, p, h, N, null);
      Qn(g, h);
    }
    return null;
  }
  function x(g, p, h, N, _) {
    if ((typeof N == "string" && N !== "") || typeof N == "number")
      return (g = g.get(h) || null), o(p, g, "" + N, _);
    if (typeof N == "object" && N !== null) {
      switch (N.$$typeof) {
        case Rn:
          return (g = g.get(N.key === null ? h : N.key) || null), c(p, g, N, _);
        case ir:
          return (g = g.get(N.key === null ? h : N.key) || null), u(p, g, N, _);
        case jt:
          var D = N._init;
          return x(g, p, h, D(N._payload), _);
      }
      if (Gr(N) || Fr(N)) return (g = g.get(h) || null), d(p, g, N, _, null);
      Qn(p, N);
    }
    return null;
  }
  function v(g, p, h, N) {
    for (
      var _ = null, D = null, T = p, E = (p = 0), y = null;
      T !== null && E < h.length;
      E++
    ) {
      T.index > E ? ((y = T), (T = null)) : (y = T.sibling);
      var b = f(g, T, h[E], N);
      if (b === null) {
        T === null && (T = y);
        break;
      }
      e && T && b.alternate === null && t(g, T),
        (p = a(b, p, E)),
        D === null ? (_ = b) : (D.sibling = b),
        (D = b),
        (T = y);
    }
    if (E === h.length) return r(g, T), Y && Vt(g, E), _;
    if (T === null) {
      for (; E < h.length; E++)
        (T = m(g, h[E], N)),
          T !== null &&
            ((p = a(T, p, E)), D === null ? (_ = T) : (D.sibling = T), (D = T));
      return Y && Vt(g, E), _;
    }
    for (T = s(g, T); E < h.length; E++)
      (y = x(T, g, E, h[E], N)),
        y !== null &&
          (e && y.alternate !== null && T.delete(y.key === null ? E : y.key),
          (p = a(y, p, E)),
          D === null ? (_ = y) : (D.sibling = y),
          (D = y));
    return (
      e &&
        T.forEach(function (I) {
          return t(g, I);
        }),
      Y && Vt(g, E),
      _
    );
  }
  function j(g, p, h, N) {
    var _ = Fr(h);
    if (typeof _ != "function") throw Error(z(150));
    if (((h = _.call(h)), h == null)) throw Error(z(151));
    for (
      var D = (_ = null), T = p, E = (p = 0), y = null, b = h.next();
      T !== null && !b.done;
      E++, b = h.next()
    ) {
      T.index > E ? ((y = T), (T = null)) : (y = T.sibling);
      var I = f(g, T, b.value, N);
      if (I === null) {
        T === null && (T = y);
        break;
      }
      e && T && I.alternate === null && t(g, T),
        (p = a(I, p, E)),
        D === null ? (_ = I) : (D.sibling = I),
        (D = I),
        (T = y);
    }
    if (b.done) return r(g, T), Y && Vt(g, E), _;
    if (T === null) {
      for (; !b.done; E++, b = h.next())
        (b = m(g, b.value, N)),
          b !== null &&
            ((p = a(b, p, E)), D === null ? (_ = b) : (D.sibling = b), (D = b));
      return Y && Vt(g, E), _;
    }
    for (T = s(g, T); !b.done; E++, b = h.next())
      (b = x(T, g, E, b.value, N)),
        b !== null &&
          (e && b.alternate !== null && T.delete(b.key === null ? E : b.key),
          (p = a(b, p, E)),
          D === null ? (_ = b) : (D.sibling = b),
          (D = b));
    return (
      e &&
        T.forEach(function (P) {
          return t(g, P);
        }),
      Y && Vt(g, E),
      _
    );
  }
  function k(g, p, h, N) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === or &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case Rn:
          e: {
            for (var _ = h.key, D = p; D !== null; ) {
              if (D.key === _) {
                if (((_ = h.type), _ === or)) {
                  if (D.tag === 7) {
                    r(g, D.sibling),
                      (p = l(D, h.props.children)),
                      (p.return = g),
                      (g = p);
                    break e;
                  }
                } else if (
                  D.elementType === _ ||
                  (typeof _ == "object" &&
                    _ !== null &&
                    _.$$typeof === jt &&
                    eo(_) === D.type)
                ) {
                  r(g, D.sibling),
                    (p = l(D, h.props)),
                    (p.ref = Br(g, D, h)),
                    (p.return = g),
                    (g = p);
                  break e;
                }
                r(g, D);
                break;
              } else t(g, D);
              D = D.sibling;
            }
            h.type === or
              ? ((p = Yt(h.props.children, g.mode, N, h.key)),
                (p.return = g),
                (g = p))
              : ((N = cs(h.type, h.key, h.props, null, g.mode, N)),
                (N.ref = Br(g, p, h)),
                (N.return = g),
                (g = N));
          }
          return i(g);
        case ir:
          e: {
            for (D = h.key; p !== null; ) {
              if (p.key === D)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === h.containerInfo &&
                  p.stateNode.implementation === h.implementation
                ) {
                  r(g, p.sibling),
                    (p = l(p, h.children || [])),
                    (p.return = g),
                    (g = p);
                  break e;
                } else {
                  r(g, p);
                  break;
                }
              else t(g, p);
              p = p.sibling;
            }
            (p = kl(h, g.mode, N)), (p.return = g), (g = p);
          }
          return i(g);
        case jt:
          return (D = h._init), k(g, p, D(h._payload), N);
      }
      if (Gr(h)) return v(g, p, h, N);
      if (Fr(h)) return j(g, p, h, N);
      Qn(g, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        p !== null && p.tag === 6
          ? (r(g, p.sibling), (p = l(p, h)), (p.return = g), (g = p))
          : (r(g, p), (p = Sl(h, g.mode, N)), (p.return = g), (g = p)),
        i(g))
      : r(g, p);
  }
  return k;
}
var _r = Uc(!0),
  Vc = Uc(!1),
  bs = At(null),
  Ss = null,
  gr = null,
  qa = null;
function Qa() {
  qa = gr = Ss = null;
}
function Wa(e) {
  var t = bs.current;
  W(bs), (e._currentValue = t);
}
function la(e, t, r) {
  for (; e !== null; ) {
    var s = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), s !== null && (s.childLanes |= t))
        : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t),
      e === r)
    )
      break;
    e = e.return;
  }
}
function br(e, t) {
  (Ss = e),
    (qa = gr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (be = !0), (e.firstContext = null));
}
function He(e) {
  var t = e._currentValue;
  if (qa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), gr === null)) {
      if (Ss === null) throw Error(z(308));
      (gr = e), (Ss.dependencies = { lanes: 0, firstContext: e });
    } else gr = gr.next = e;
  return t;
}
var qt = null;
function Ga(e) {
  qt === null ? (qt = [e]) : qt.push(e);
}
function Hc(e, t, r, s) {
  var l = t.interleaved;
  return (
    l === null ? ((r.next = r), Ga(t)) : ((r.next = l.next), (l.next = r)),
    (t.interleaved = r),
    ft(e, s)
  );
}
function ft(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (r = e.alternate),
      r !== null && (r.childLanes |= t),
      (r = e),
      (e = e.return);
  return r.tag === 3 ? r.stateNode : null;
}
var wt = !1;
function Ya(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Bc(e, t) {
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
function ot(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function zt(e, t, r) {
  var s = e.updateQueue;
  if (s === null) return null;
  if (((s = s.shared), V & 2)) {
    var l = s.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (s.pending = t),
      ft(e, r)
    );
  }
  return (
    (l = s.interleaved),
    l === null ? ((t.next = t), Ga(s)) : ((t.next = l.next), (l.next = t)),
    (s.interleaved = t),
    ft(e, r)
  );
}
function ns(e, t, r) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
  ) {
    var s = t.lanes;
    (s &= e.pendingLanes), (r |= s), (t.lanes = r), Ma(e, r);
  }
}
function to(e, t) {
  var r = e.updateQueue,
    s = e.alternate;
  if (s !== null && ((s = s.updateQueue), r === s)) {
    var l = null,
      a = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var i = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        a === null ? (l = a = i) : (a = a.next = i), (r = r.next);
      } while (r !== null);
      a === null ? (l = a = t) : (a = a.next = t);
    } else l = a = t;
    (r = {
      baseState: s.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: a,
      shared: s.shared,
      effects: s.effects,
    }),
      (e.updateQueue = r);
    return;
  }
  (e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t);
}
function ks(e, t, r, s) {
  var l = e.updateQueue;
  wt = !1;
  var a = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    o = l.shared.pending;
  if (o !== null) {
    l.shared.pending = null;
    var c = o,
      u = c.next;
    (c.next = null), i === null ? (a = u) : (i.next = u), (i = c);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (o = d.lastBaseUpdate),
      o !== i &&
        (o === null ? (d.firstBaseUpdate = u) : (o.next = u),
        (d.lastBaseUpdate = c)));
  }
  if (a !== null) {
    var m = l.baseState;
    (i = 0), (d = u = c = null), (o = a);
    do {
      var f = o.lane,
        x = o.eventTime;
      if ((s & f) === f) {
        d !== null &&
          (d = d.next =
            {
              eventTime: x,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var v = e,
            j = o;
          switch (((f = t), (x = r), j.tag)) {
            case 1:
              if (((v = j.payload), typeof v == "function")) {
                m = v.call(x, m, f);
                break e;
              }
              m = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = j.payload),
                (f = typeof v == "function" ? v.call(x, m, f) : v),
                f == null)
              )
                break e;
              m = Z({}, m, f);
              break e;
            case 2:
              wt = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (f = l.effects),
          f === null ? (l.effects = [o]) : f.push(o));
      } else
        (x = {
          eventTime: x,
          lane: f,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          d === null ? ((u = d = x), (c = m)) : (d = d.next = x),
          (i |= f);
      if (((o = o.next), o === null)) {
        if (((o = l.shared.pending), o === null)) break;
        (f = o),
          (o = f.next),
          (f.next = null),
          (l.lastBaseUpdate = f),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (c = m),
      (l.baseState = c),
      (l.firstBaseUpdate = u),
      (l.lastBaseUpdate = d),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else a === null && (l.shared.lanes = 0);
    (tr |= i), (e.lanes = i), (e.memoizedState = m);
  }
}
function ro(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var s = e[t],
        l = s.callback;
      if (l !== null) {
        if (((s.callback = null), (s = r), typeof l != "function"))
          throw Error(z(191, l));
        l.call(s);
      }
    }
}
var Tn = {},
  nt = At(Tn),
  vn = At(Tn),
  jn = At(Tn);
function Qt(e) {
  if (e === Tn) throw Error(z(174));
  return e;
}
function Ka(e, t) {
  switch ((q(jn, t), q(vn, e), q(nt, Tn), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Fl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Fl(t, e));
  }
  W(nt), q(nt, t);
}
function zr() {
  W(nt), W(vn), W(jn);
}
function qc(e) {
  Qt(jn.current);
  var t = Qt(nt.current),
    r = Fl(t, e.type);
  t !== r && (q(vn, e), q(nt, r));
}
function Xa(e) {
  vn.current === e && (W(nt), W(vn));
}
var K = At(0);
function Cs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
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
var yl = [];
function Ja() {
  for (var e = 0; e < yl.length; e++)
    yl[e]._workInProgressVersionPrimary = null;
  yl.length = 0;
}
var ss = gt.ReactCurrentDispatcher,
  vl = gt.ReactCurrentBatchConfig,
  er = 0,
  J = null,
  ae = null,
  oe = null,
  Es = !1,
  rn = !1,
  wn = 0,
  Xf = 0;
function me() {
  throw Error(z(321));
}
function Za(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!Je(e[r], t[r])) return !1;
  return !0;
}
function ei(e, t, r, s, l, a) {
  if (
    ((er = a),
    (J = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ss.current = e === null || e.memoizedState === null ? tm : rm),
    (e = r(s, l)),
    rn)
  ) {
    a = 0;
    do {
      if (((rn = !1), (wn = 0), 25 <= a)) throw Error(z(301));
      (a += 1),
        (oe = ae = null),
        (t.updateQueue = null),
        (ss.current = nm),
        (e = r(s, l));
    } while (rn);
  }
  if (
    ((ss.current = Ds),
    (t = ae !== null && ae.next !== null),
    (er = 0),
    (oe = ae = J = null),
    (Es = !1),
    t)
  )
    throw Error(z(300));
  return e;
}
function ti() {
  var e = wn !== 0;
  return (wn = 0), e;
}
function et() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return oe === null ? (J.memoizedState = oe = e) : (oe = oe.next = e), oe;
}
function Be() {
  if (ae === null) {
    var e = J.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ae.next;
  var t = oe === null ? J.memoizedState : oe.next;
  if (t !== null) (oe = t), (ae = e);
  else {
    if (e === null) throw Error(z(310));
    (ae = e),
      (e = {
        memoizedState: ae.memoizedState,
        baseState: ae.baseState,
        baseQueue: ae.baseQueue,
        queue: ae.queue,
        next: null,
      }),
      oe === null ? (J.memoizedState = oe = e) : (oe = oe.next = e);
  }
  return oe;
}
function Nn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function jl(e) {
  var t = Be(),
    r = t.queue;
  if (r === null) throw Error(z(311));
  r.lastRenderedReducer = e;
  var s = ae,
    l = s.baseQueue,
    a = r.pending;
  if (a !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = a.next), (a.next = i);
    }
    (s.baseQueue = l = a), (r.pending = null);
  }
  if (l !== null) {
    (a = l.next), (s = s.baseState);
    var o = (i = null),
      c = null,
      u = a;
    do {
      var d = u.lane;
      if ((er & d) === d)
        c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (s = u.hasEagerState ? u.eagerState : e(s, u.action));
      else {
        var m = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        c === null ? ((o = c = m), (i = s)) : (c = c.next = m),
          (J.lanes |= d),
          (tr |= d);
      }
      u = u.next;
    } while (u !== null && u !== a);
    c === null ? (i = s) : (c.next = o),
      Je(s, t.memoizedState) || (be = !0),
      (t.memoizedState = s),
      (t.baseState = i),
      (t.baseQueue = c),
      (r.lastRenderedState = s);
  }
  if (((e = r.interleaved), e !== null)) {
    l = e;
    do (a = l.lane), (J.lanes |= a), (tr |= a), (l = l.next);
    while (l !== e);
  } else l === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function wl(e) {
  var t = Be(),
    r = t.queue;
  if (r === null) throw Error(z(311));
  r.lastRenderedReducer = e;
  var s = r.dispatch,
    l = r.pending,
    a = t.memoizedState;
  if (l !== null) {
    r.pending = null;
    var i = (l = l.next);
    do (a = e(a, i.action)), (i = i.next);
    while (i !== l);
    Je(a, t.memoizedState) || (be = !0),
      (t.memoizedState = a),
      t.baseQueue === null && (t.baseState = a),
      (r.lastRenderedState = a);
  }
  return [a, s];
}
function Qc() {}
function Wc(e, t) {
  var r = J,
    s = Be(),
    l = t(),
    a = !Je(s.memoizedState, l);
  if (
    (a && ((s.memoizedState = l), (be = !0)),
    (s = s.queue),
    ri(Kc.bind(null, r, s, e), [e]),
    s.getSnapshot !== t || a || (oe !== null && oe.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      bn(9, Yc.bind(null, r, s, l, t), void 0, null),
      ce === null)
    )
      throw Error(z(349));
    er & 30 || Gc(r, t, l);
  }
  return l;
}
function Gc(e, t, r) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = J.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (J.updateQueue = t),
        (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
}
function Yc(e, t, r, s) {
  (t.value = r), (t.getSnapshot = s), Xc(t) && Jc(e);
}
function Kc(e, t, r) {
  return r(function () {
    Xc(t) && Jc(e);
  });
}
function Xc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !Je(e, r);
  } catch {
    return !0;
  }
}
function Jc(e) {
  var t = ft(e, 1);
  t !== null && Xe(t, e, 1, -1);
}
function no(e) {
  var t = et();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Nn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = em.bind(null, J, e)),
    [t.memoizedState, e]
  );
}
function bn(e, t, r, s) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: s, next: null }),
    (t = J.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (J.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((s = r.next), (r.next = e), (e.next = s), (t.lastEffect = e))),
    e
  );
}
function Zc() {
  return Be().memoizedState;
}
function ls(e, t, r, s) {
  var l = et();
  (J.flags |= e),
    (l.memoizedState = bn(1 | t, r, void 0, s === void 0 ? null : s));
}
function Vs(e, t, r, s) {
  var l = Be();
  s = s === void 0 ? null : s;
  var a = void 0;
  if (ae !== null) {
    var i = ae.memoizedState;
    if (((a = i.destroy), s !== null && Za(s, i.deps))) {
      l.memoizedState = bn(t, r, a, s);
      return;
    }
  }
  (J.flags |= e), (l.memoizedState = bn(1 | t, r, a, s));
}
function so(e, t) {
  return ls(8390656, 8, e, t);
}
function ri(e, t) {
  return Vs(2048, 8, e, t);
}
function eu(e, t) {
  return Vs(4, 2, e, t);
}
function tu(e, t) {
  return Vs(4, 4, e, t);
}
function ru(e, t) {
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
function nu(e, t, r) {
  return (
    (r = r != null ? r.concat([e]) : null), Vs(4, 4, ru.bind(null, t, e), r)
  );
}
function ni() {}
function su(e, t) {
  var r = Be();
  t = t === void 0 ? null : t;
  var s = r.memoizedState;
  return s !== null && t !== null && Za(t, s[1])
    ? s[0]
    : ((r.memoizedState = [e, t]), e);
}
function lu(e, t) {
  var r = Be();
  t = t === void 0 ? null : t;
  var s = r.memoizedState;
  return s !== null && t !== null && Za(t, s[1])
    ? s[0]
    : ((e = e()), (r.memoizedState = [e, t]), e);
}
function au(e, t, r) {
  return er & 21
    ? (Je(r, t) || ((r = dc()), (J.lanes |= r), (tr |= r), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (be = !0)), (e.memoizedState = r));
}
function Jf(e, t) {
  var r = B;
  (B = r !== 0 && 4 > r ? r : 4), e(!0);
  var s = vl.transition;
  vl.transition = {};
  try {
    e(!1), t();
  } finally {
    (B = r), (vl.transition = s);
  }
}
function iu() {
  return Be().memoizedState;
}
function Zf(e, t, r) {
  var s = It(e);
  if (
    ((r = {
      lane: s,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ou(e))
  )
    cu(t, r);
  else if (((r = Hc(e, t, r, s)), r !== null)) {
    var l = ve();
    Xe(r, e, s, l), uu(r, t, s);
  }
}
function em(e, t, r) {
  var s = It(e),
    l = { lane: s, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (ou(e)) cu(t, l);
  else {
    var a = e.alternate;
    if (
      e.lanes === 0 &&
      (a === null || a.lanes === 0) &&
      ((a = t.lastRenderedReducer), a !== null)
    )
      try {
        var i = t.lastRenderedState,
          o = a(i, r);
        if (((l.hasEagerState = !0), (l.eagerState = o), Je(o, i))) {
          var c = t.interleaved;
          c === null
            ? ((l.next = l), Ga(t))
            : ((l.next = c.next), (c.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (r = Hc(e, t, l, s)),
      r !== null && ((l = ve()), Xe(r, e, s, l), uu(r, t, s));
  }
}
function ou(e) {
  var t = e.alternate;
  return e === J || (t !== null && t === J);
}
function cu(e, t) {
  rn = Es = !0;
  var r = e.pending;
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
    (e.pending = t);
}
function uu(e, t, r) {
  if (r & 4194240) {
    var s = t.lanes;
    (s &= e.pendingLanes), (r |= s), (t.lanes = r), Ma(e, r);
  }
}
var Ds = {
    readContext: He,
    useCallback: me,
    useContext: me,
    useEffect: me,
    useImperativeHandle: me,
    useInsertionEffect: me,
    useLayoutEffect: me,
    useMemo: me,
    useReducer: me,
    useRef: me,
    useState: me,
    useDebugValue: me,
    useDeferredValue: me,
    useTransition: me,
    useMutableSource: me,
    useSyncExternalStore: me,
    useId: me,
    unstable_isNewReconciler: !1,
  },
  tm = {
    readContext: He,
    useCallback: function (e, t) {
      return (et().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: He,
    useEffect: so,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        ls(4194308, 4, ru.bind(null, t, e), r)
      );
    },
    useLayoutEffect: function (e, t) {
      return ls(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ls(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = et();
      return (
        (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, r) {
      var s = et();
      return (
        (t = r !== void 0 ? r(t) : t),
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
        (e = e.dispatch = Zf.bind(null, J, e)),
        [s.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = et();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: no,
    useDebugValue: ni,
    useDeferredValue: function (e) {
      return (et().memoizedState = e);
    },
    useTransition: function () {
      var e = no(!1),
        t = e[0];
      return (e = Jf.bind(null, e[1])), (et().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var s = J,
        l = et();
      if (Y) {
        if (r === void 0) throw Error(z(407));
        r = r();
      } else {
        if (((r = t()), ce === null)) throw Error(z(349));
        er & 30 || Gc(s, t, r);
      }
      l.memoizedState = r;
      var a = { value: r, getSnapshot: t };
      return (
        (l.queue = a),
        so(Kc.bind(null, s, a, e), [e]),
        (s.flags |= 2048),
        bn(9, Yc.bind(null, s, a, r, t), void 0, null),
        r
      );
    },
    useId: function () {
      var e = et(),
        t = ce.identifierPrefix;
      if (Y) {
        var r = it,
          s = at;
        (r = (s & ~(1 << (32 - Ke(s) - 1))).toString(32) + r),
          (t = ":" + t + "R" + r),
          (r = wn++),
          0 < r && (t += "H" + r.toString(32)),
          (t += ":");
      } else (r = Xf++), (t = ":" + t + "r" + r.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  rm = {
    readContext: He,
    useCallback: su,
    useContext: He,
    useEffect: ri,
    useImperativeHandle: nu,
    useInsertionEffect: eu,
    useLayoutEffect: tu,
    useMemo: lu,
    useReducer: jl,
    useRef: Zc,
    useState: function () {
      return jl(Nn);
    },
    useDebugValue: ni,
    useDeferredValue: function (e) {
      var t = Be();
      return au(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = jl(Nn)[0],
        t = Be().memoizedState;
      return [e, t];
    },
    useMutableSource: Qc,
    useSyncExternalStore: Wc,
    useId: iu,
    unstable_isNewReconciler: !1,
  },
  nm = {
    readContext: He,
    useCallback: su,
    useContext: He,
    useEffect: ri,
    useImperativeHandle: nu,
    useInsertionEffect: eu,
    useLayoutEffect: tu,
    useMemo: lu,
    useReducer: wl,
    useRef: Zc,
    useState: function () {
      return wl(Nn);
    },
    useDebugValue: ni,
    useDeferredValue: function (e) {
      var t = Be();
      return ae === null ? (t.memoizedState = e) : au(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = wl(Nn)[0],
        t = Be().memoizedState;
      return [e, t];
    },
    useMutableSource: Qc,
    useSyncExternalStore: Wc,
    useId: iu,
    unstable_isNewReconciler: !1,
  };
function We(e, t) {
  if (e && e.defaultProps) {
    (t = Z({}, t)), (e = e.defaultProps);
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
function aa(e, t, r, s) {
  (t = e.memoizedState),
    (r = r(s, t)),
    (r = r == null ? t : Z({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r);
}
var Hs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? lr(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var s = ve(),
      l = It(e),
      a = ot(s, l);
    (a.payload = t),
      r != null && (a.callback = r),
      (t = zt(e, a, l)),
      t !== null && (Xe(t, e, l, s), ns(t, e, l));
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var s = ve(),
      l = It(e),
      a = ot(s, l);
    (a.tag = 1),
      (a.payload = t),
      r != null && (a.callback = r),
      (t = zt(e, a, l)),
      t !== null && (Xe(t, e, l, s), ns(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = ve(),
      s = It(e),
      l = ot(r, s);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = zt(e, l, s)),
      t !== null && (Xe(t, e, s, r), ns(t, e, s));
  },
};
function lo(e, t, r, s, l, a, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(s, a, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !hn(r, s) || !hn(l, a)
      : !0
  );
}
function du(e, t, r) {
  var s = !1,
    l = Rt,
    a = t.contextType;
  return (
    typeof a == "object" && a !== null
      ? (a = He(a))
      : ((l = ke(t) ? Jt : ge.current),
        (s = t.contextTypes),
        (a = (s = s != null) ? Er(e, l) : Rt)),
    (t = new t(r, a)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Hs),
    (e.stateNode = t),
    (t._reactInternals = e),
    s &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  );
}
function ao(e, t, r, s) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(r, s),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(r, s),
    t.state !== e && Hs.enqueueReplaceState(t, t.state, null);
}
function ia(e, t, r, s) {
  var l = e.stateNode;
  (l.props = r), (l.state = e.memoizedState), (l.refs = {}), Ya(e);
  var a = t.contextType;
  typeof a == "object" && a !== null
    ? (l.context = He(a))
    : ((a = ke(t) ? Jt : ge.current), (l.context = Er(e, a))),
    (l.state = e.memoizedState),
    (a = t.getDerivedStateFromProps),
    typeof a == "function" && (aa(e, t, a, r), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Hs.enqueueReplaceState(l, l.state, null),
      ks(e, r, l, s),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Tr(e, t) {
  try {
    var r = "",
      s = t;
    do (r += zd(s)), (s = s.return);
    while (s);
    var l = r;
  } catch (a) {
    l =
      `
Error generating stack: ` +
      a.message +
      `
` +
      a.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Nl(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function oa(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var sm = typeof WeakMap == "function" ? WeakMap : Map;
function fu(e, t, r) {
  (r = ot(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var s = t.value;
  return (
    (r.callback = function () {
      zs || ((zs = !0), (ya = s)), oa(e, t);
    }),
    r
  );
}
function mu(e, t, r) {
  (r = ot(-1, r)), (r.tag = 3);
  var s = e.type.getDerivedStateFromError;
  if (typeof s == "function") {
    var l = t.value;
    (r.payload = function () {
      return s(l);
    }),
      (r.callback = function () {
        oa(e, t);
      });
  }
  var a = e.stateNode;
  return (
    a !== null &&
      typeof a.componentDidCatch == "function" &&
      (r.callback = function () {
        oa(e, t),
          typeof s != "function" &&
            (Tt === null ? (Tt = new Set([this])) : Tt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    r
  );
}
function io(e, t, r) {
  var s = e.pingCache;
  if (s === null) {
    s = e.pingCache = new sm();
    var l = new Set();
    s.set(t, l);
  } else (l = s.get(t)), l === void 0 && ((l = new Set()), s.set(t, l));
  l.has(r) || (l.add(r), (e = ym.bind(null, e, t, r)), t.then(e, e));
}
function oo(e) {
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
function co(e, t, r, s, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null
              ? (r.tag = 17)
              : ((t = ot(-1, 1)), (t.tag = 2), zt(r, t, 1))),
          (r.lanes |= 1)),
      e);
}
var lm = gt.ReactCurrentOwner,
  be = !1;
function xe(e, t, r, s) {
  t.child = e === null ? Vc(t, null, r, s) : _r(t, e.child, r, s);
}
function uo(e, t, r, s, l) {
  r = r.render;
  var a = t.ref;
  return (
    br(t, l),
    (s = ei(e, t, r, s, a, l)),
    (r = ti()),
    e !== null && !be
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        mt(e, t, l))
      : (Y && r && Va(t), (t.flags |= 1), xe(e, t, s, l), t.child)
  );
}
function fo(e, t, r, s, l) {
  if (e === null) {
    var a = r.type;
    return typeof a == "function" &&
      !di(a) &&
      a.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), pu(e, t, a, s, l))
      : ((e = cs(r.type, null, s, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((a = e.child), !(e.lanes & l))) {
    var i = a.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : hn), r(i, s) && e.ref === t.ref)
    )
      return mt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Pt(a, s)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function pu(e, t, r, s, l) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (hn(a, s) && e.ref === t.ref)
      if (((be = !1), (t.pendingProps = s = a), (e.lanes & l) !== 0))
        e.flags & 131072 && (be = !0);
      else return (t.lanes = e.lanes), mt(e, t, l);
  }
  return ca(e, t, r, s, l);
}
function hu(e, t, r) {
  var s = t.pendingProps,
    l = s.children,
    a = e !== null ? e.memoizedState : null;
  if (s.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        q(yr, ze),
        (ze |= r);
    else {
      if (!(r & 1073741824))
        return (
          (e = a !== null ? a.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          q(yr, ze),
          (ze |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (s = a !== null ? a.baseLanes : r),
        q(yr, ze),
        (ze |= s);
    }
  else
    a !== null ? ((s = a.baseLanes | r), (t.memoizedState = null)) : (s = r),
      q(yr, ze),
      (ze |= s);
  return xe(e, t, l, r), t.child;
}
function gu(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ca(e, t, r, s, l) {
  var a = ke(r) ? Jt : ge.current;
  return (
    (a = Er(t, a)),
    br(t, l),
    (r = ei(e, t, r, s, a, l)),
    (s = ti()),
    e !== null && !be
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        mt(e, t, l))
      : (Y && s && Va(t), (t.flags |= 1), xe(e, t, r, l), t.child)
  );
}
function mo(e, t, r, s, l) {
  if (ke(r)) {
    var a = !0;
    js(t);
  } else a = !1;
  if ((br(t, l), t.stateNode === null))
    as(e, t), du(t, r, s), ia(t, r, s, l), (s = !0);
  else if (e === null) {
    var i = t.stateNode,
      o = t.memoizedProps;
    i.props = o;
    var c = i.context,
      u = r.contextType;
    typeof u == "object" && u !== null
      ? (u = He(u))
      : ((u = ke(r) ? Jt : ge.current), (u = Er(t, u)));
    var d = r.getDerivedStateFromProps,
      m =
        typeof d == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((o !== s || c !== u) && ao(t, i, s, u)),
      (wt = !1);
    var f = t.memoizedState;
    (i.state = f),
      ks(t, s, i, l),
      (c = t.memoizedState),
      o !== s || f !== c || Se.current || wt
        ? (typeof d == "function" && (aa(t, r, d, s), (c = t.memoizedState)),
          (o = wt || lo(t, r, o, s, f, c, u))
            ? (m ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = s),
              (t.memoizedState = c)),
          (i.props = s),
          (i.state = c),
          (i.context = u),
          (s = o))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (s = !1));
  } else {
    (i = t.stateNode),
      Bc(e, t),
      (o = t.memoizedProps),
      (u = t.type === t.elementType ? o : We(t.type, o)),
      (i.props = u),
      (m = t.pendingProps),
      (f = i.context),
      (c = r.contextType),
      typeof c == "object" && c !== null
        ? (c = He(c))
        : ((c = ke(r) ? Jt : ge.current), (c = Er(t, c)));
    var x = r.getDerivedStateFromProps;
    (d =
      typeof x == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((o !== m || f !== c) && ao(t, i, s, c)),
      (wt = !1),
      (f = t.memoizedState),
      (i.state = f),
      ks(t, s, i, l);
    var v = t.memoizedState;
    o !== m || f !== v || Se.current || wt
      ? (typeof x == "function" && (aa(t, r, x, s), (v = t.memoizedState)),
        (u = wt || lo(t, r, u, s, f, v, c) || !1)
          ? (d ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(s, v, c),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(s, v, c)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = s),
            (t.memoizedState = v)),
        (i.props = s),
        (i.state = v),
        (i.context = c),
        (s = u))
      : (typeof i.componentDidUpdate != "function" ||
          (o === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (o === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (s = !1));
  }
  return ua(e, t, r, s, a, l);
}
function ua(e, t, r, s, l, a) {
  gu(e, t);
  var i = (t.flags & 128) !== 0;
  if (!s && !i) return l && Xi(t, r, !1), mt(e, t, a);
  (s = t.stateNode), (lm.current = t);
  var o =
    i && typeof r.getDerivedStateFromError != "function" ? null : s.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = _r(t, e.child, null, a)), (t.child = _r(t, null, o, a)))
      : xe(e, t, o, a),
    (t.memoizedState = s.state),
    l && Xi(t, r, !0),
    t.child
  );
}
function xu(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ki(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ki(e, t.context, !1),
    Ka(e, t.containerInfo);
}
function po(e, t, r, s, l) {
  return Dr(), Ba(l), (t.flags |= 256), xe(e, t, r, s), t.child;
}
var da = { dehydrated: null, treeContext: null, retryLane: 0 };
function fa(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function yu(e, t, r) {
  var s = t.pendingProps,
    l = K.current,
    a = !1,
    i = (t.flags & 128) !== 0,
    o;
  if (
    ((o = i) ||
      (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    o
      ? ((a = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    q(K, l & 1),
    e === null)
  )
    return (
      sa(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = s.children),
          (e = s.fallback),
          a
            ? ((s = t.mode),
              (a = t.child),
              (i = { mode: "hidden", children: i }),
              !(s & 1) && a !== null
                ? ((a.childLanes = 0), (a.pendingProps = i))
                : (a = Qs(i, s, 0, null)),
              (e = Yt(e, s, r, null)),
              (a.return = t),
              (e.return = t),
              (a.sibling = e),
              (t.child = a),
              (t.child.memoizedState = fa(r)),
              (t.memoizedState = da),
              e)
            : si(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((o = l.dehydrated), o !== null)))
    return am(e, t, i, s, o, l, r);
  if (a) {
    (a = s.fallback), (i = t.mode), (l = e.child), (o = l.sibling);
    var c = { mode: "hidden", children: s.children };
    return (
      !(i & 1) && t.child !== l
        ? ((s = t.child),
          (s.childLanes = 0),
          (s.pendingProps = c),
          (t.deletions = null))
        : ((s = Pt(l, c)), (s.subtreeFlags = l.subtreeFlags & 14680064)),
      o !== null ? (a = Pt(o, a)) : ((a = Yt(a, i, r, null)), (a.flags |= 2)),
      (a.return = t),
      (s.return = t),
      (s.sibling = a),
      (t.child = s),
      (s = a),
      (a = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? fa(r)
          : {
              baseLanes: i.baseLanes | r,
              cachePool: null,
              transitions: i.transitions,
            }),
      (a.memoizedState = i),
      (a.childLanes = e.childLanes & ~r),
      (t.memoizedState = da),
      s
    );
  }
  return (
    (a = e.child),
    (e = a.sibling),
    (s = Pt(a, { mode: "visible", children: s.children })),
    !(t.mode & 1) && (s.lanes = r),
    (s.return = t),
    (s.sibling = null),
    e !== null &&
      ((r = t.deletions),
      r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = s),
    (t.memoizedState = null),
    s
  );
}
function si(e, t) {
  return (
    (t = Qs({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Wn(e, t, r, s) {
  return (
    s !== null && Ba(s),
    _r(t, e.child, null, r),
    (e = si(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function am(e, t, r, s, l, a, i) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (s = Nl(Error(z(422)))), Wn(e, t, i, s))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((a = s.fallback),
        (l = t.mode),
        (s = Qs({ mode: "visible", children: s.children }, l, 0, null)),
        (a = Yt(a, l, i, null)),
        (a.flags |= 2),
        (s.return = t),
        (a.return = t),
        (s.sibling = a),
        (t.child = s),
        t.mode & 1 && _r(t, e.child, null, i),
        (t.child.memoizedState = fa(i)),
        (t.memoizedState = da),
        a);
  if (!(t.mode & 1)) return Wn(e, t, i, null);
  if (l.data === "$!") {
    if (((s = l.nextSibling && l.nextSibling.dataset), s)) var o = s.dgst;
    return (s = o), (a = Error(z(419))), (s = Nl(a, s, void 0)), Wn(e, t, i, s);
  }
  if (((o = (i & e.childLanes) !== 0), be || o)) {
    if (((s = ce), s !== null)) {
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
      (l = l & (s.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== a.retryLane &&
          ((a.retryLane = l), ft(e, l), Xe(s, e, l, -1));
    }
    return ui(), (s = Nl(Error(z(421)))), Wn(e, t, i, s);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = vm.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = a.treeContext),
      (Ie = _t(l.nextSibling)),
      (Pe = t),
      (Y = !0),
      (Ye = null),
      e !== null &&
        ((Fe[$e++] = at),
        (Fe[$e++] = it),
        (Fe[$e++] = Zt),
        (at = e.id),
        (it = e.overflow),
        (Zt = t)),
      (t = si(t, s.children)),
      (t.flags |= 4096),
      t);
}
function ho(e, t, r) {
  e.lanes |= t;
  var s = e.alternate;
  s !== null && (s.lanes |= t), la(e.return, t, r);
}
function bl(e, t, r, s, l) {
  var a = e.memoizedState;
  a === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: s,
        tail: r,
        tailMode: l,
      })
    : ((a.isBackwards = t),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = s),
      (a.tail = r),
      (a.tailMode = l));
}
function vu(e, t, r) {
  var s = t.pendingProps,
    l = s.revealOrder,
    a = s.tail;
  if ((xe(e, t, s.children, r), (s = K.current), s & 2))
    (s = (s & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ho(e, r, t);
        else if (e.tag === 19) ho(e, r, t);
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
  if ((q(K, s), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (r = t.child, l = null; r !== null; )
          (e = r.alternate),
            e !== null && Cs(e) === null && (l = r),
            (r = r.sibling);
        (r = l),
          r === null
            ? ((l = t.child), (t.child = null))
            : ((l = r.sibling), (r.sibling = null)),
          bl(t, !1, l, r, a);
        break;
      case "backwards":
        for (r = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Cs(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = r), (r = l), (l = e);
        }
        bl(t, !0, r, null, a);
        break;
      case "together":
        bl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function as(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function mt(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (tr |= t.lanes),
    !(r & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(z(153));
  if (t.child !== null) {
    for (
      e = t.child, r = Pt(e, e.pendingProps), t.child = r, r.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (r = r.sibling = Pt(e, e.pendingProps)), (r.return = t);
    r.sibling = null;
  }
  return t.child;
}
function im(e, t, r) {
  switch (t.tag) {
    case 3:
      xu(t), Dr();
      break;
    case 5:
      qc(t);
      break;
    case 1:
      ke(t.type) && js(t);
      break;
    case 4:
      Ka(t, t.stateNode.containerInfo);
      break;
    case 10:
      var s = t.type._context,
        l = t.memoizedProps.value;
      q(bs, s._currentValue), (s._currentValue = l);
      break;
    case 13:
      if (((s = t.memoizedState), s !== null))
        return s.dehydrated !== null
          ? (q(K, K.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
          ? yu(e, t, r)
          : (q(K, K.current & 1),
            (e = mt(e, t, r)),
            e !== null ? e.sibling : null);
      q(K, K.current & 1);
      break;
    case 19:
      if (((s = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (s) return vu(e, t, r);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        q(K, K.current),
        s)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), hu(e, t, r);
  }
  return mt(e, t, r);
}
var ju, ma, wu, Nu;
ju = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
};
ma = function () {};
wu = function (e, t, r, s) {
  var l = e.memoizedProps;
  if (l !== s) {
    (e = t.stateNode), Qt(nt.current);
    var a = null;
    switch (r) {
      case "input":
        (l = Rl(e, l)), (s = Rl(e, s)), (a = []);
        break;
      case "select":
        (l = Z({}, l, { value: void 0 })),
          (s = Z({}, s, { value: void 0 })),
          (a = []);
        break;
      case "textarea":
        (l = Al(e, l)), (s = Al(e, s)), (a = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof s.onClick == "function" &&
          (e.onclick = ys);
    }
    $l(r, s);
    var i;
    r = null;
    for (u in l)
      if (!s.hasOwnProperty(u) && l.hasOwnProperty(u) && l[u] != null)
        if (u === "style") {
          var o = l[u];
          for (i in o) o.hasOwnProperty(i) && (r || (r = {}), (r[i] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (on.hasOwnProperty(u)
              ? a || (a = [])
              : (a = a || []).push(u, null));
    for (u in s) {
      var c = s[u];
      if (
        ((o = l != null ? l[u] : void 0),
        s.hasOwnProperty(u) && c !== o && (c != null || o != null))
      )
        if (u === "style")
          if (o) {
            for (i in o)
              !o.hasOwnProperty(i) ||
                (c && c.hasOwnProperty(i)) ||
                (r || (r = {}), (r[i] = ""));
            for (i in c)
              c.hasOwnProperty(i) &&
                o[i] !== c[i] &&
                (r || (r = {}), (r[i] = c[i]));
          } else r || (a || (a = []), a.push(u, r)), (r = c);
        else
          u === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (o = o ? o.__html : void 0),
              c != null && o !== c && (a = a || []).push(u, c))
            : u === "children"
            ? (typeof c != "string" && typeof c != "number") ||
              (a = a || []).push(u, "" + c)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (on.hasOwnProperty(u)
                ? (c != null && u === "onScroll" && Q("scroll", e),
                  a || o === c || (a = []))
                : (a = a || []).push(u, c));
    }
    r && (a = a || []).push("style", r);
    var u = a;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Nu = function (e, t, r, s) {
  r !== s && (t.flags |= 4);
};
function qr(e, t) {
  if (!Y)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = e.tail;
        for (var s = null; r !== null; )
          r.alternate !== null && (s = r), (r = r.sibling);
        s === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (s.sibling = null);
    }
}
function pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    s = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (r |= l.lanes | l.childLanes),
        (s |= l.subtreeFlags & 14680064),
        (s |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (r |= l.lanes | l.childLanes),
        (s |= l.subtreeFlags),
        (s |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= s), (e.childLanes = r), t;
}
function om(e, t, r) {
  var s = t.pendingProps;
  switch ((Ha(t), t.tag)) {
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
      return pe(t), null;
    case 1:
      return ke(t.type) && vs(), pe(t), null;
    case 3:
      return (
        (s = t.stateNode),
        zr(),
        W(Se),
        W(ge),
        Ja(),
        s.pendingContext &&
          ((s.context = s.pendingContext), (s.pendingContext = null)),
        (e === null || e.child === null) &&
          (qn(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ye !== null && (wa(Ye), (Ye = null)))),
        ma(e, t),
        pe(t),
        null
      );
    case 5:
      Xa(t);
      var l = Qt(jn.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        wu(e, t, r, s, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!s) {
          if (t.stateNode === null) throw Error(z(166));
          return pe(t), null;
        }
        if (((e = Qt(nt.current)), qn(t))) {
          (s = t.stateNode), (r = t.type);
          var a = t.memoizedProps;
          switch (((s[tt] = t), (s[yn] = a), (e = (t.mode & 1) !== 0), r)) {
            case "dialog":
              Q("cancel", s), Q("close", s);
              break;
            case "iframe":
            case "object":
            case "embed":
              Q("load", s);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Kr.length; l++) Q(Kr[l], s);
              break;
            case "source":
              Q("error", s);
              break;
            case "img":
            case "image":
            case "link":
              Q("error", s), Q("load", s);
              break;
            case "details":
              Q("toggle", s);
              break;
            case "input":
              bi(s, a), Q("invalid", s);
              break;
            case "select":
              (s._wrapperState = { wasMultiple: !!a.multiple }),
                Q("invalid", s);
              break;
            case "textarea":
              ki(s, a), Q("invalid", s);
          }
          $l(r, a), (l = null);
          for (var i in a)
            if (a.hasOwnProperty(i)) {
              var o = a[i];
              i === "children"
                ? typeof o == "string"
                  ? s.textContent !== o &&
                    (a.suppressHydrationWarning !== !0 &&
                      Bn(s.textContent, o, e),
                    (l = ["children", o]))
                  : typeof o == "number" &&
                    s.textContent !== "" + o &&
                    (a.suppressHydrationWarning !== !0 &&
                      Bn(s.textContent, o, e),
                    (l = ["children", "" + o]))
                : on.hasOwnProperty(i) &&
                  o != null &&
                  i === "onScroll" &&
                  Q("scroll", s);
            }
          switch (r) {
            case "input":
              On(s), Si(s, a, !0);
              break;
            case "textarea":
              On(s), Ci(s);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (s.onclick = ys);
          }
          (s = l), (t.updateQueue = s), s !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ko(r)),
            e === "http://www.w3.org/1999/xhtml"
              ? r === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof s.is == "string"
                ? (e = i.createElement(r, { is: s.is }))
                : ((e = i.createElement(r)),
                  r === "select" &&
                    ((i = e),
                    s.multiple
                      ? (i.multiple = !0)
                      : s.size && (i.size = s.size)))
              : (e = i.createElementNS(e, r)),
            (e[tt] = t),
            (e[yn] = s),
            ju(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Ul(r, s)), r)) {
              case "dialog":
                Q("cancel", e), Q("close", e), (l = s);
                break;
              case "iframe":
              case "object":
              case "embed":
                Q("load", e), (l = s);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Kr.length; l++) Q(Kr[l], e);
                l = s;
                break;
              case "source":
                Q("error", e), (l = s);
                break;
              case "img":
              case "image":
              case "link":
                Q("error", e), Q("load", e), (l = s);
                break;
              case "details":
                Q("toggle", e), (l = s);
                break;
              case "input":
                bi(e, s), (l = Rl(e, s)), Q("invalid", e);
                break;
              case "option":
                l = s;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!s.multiple }),
                  (l = Z({}, s, { value: void 0 })),
                  Q("invalid", e);
                break;
              case "textarea":
                ki(e, s), (l = Al(e, s)), Q("invalid", e);
                break;
              default:
                l = s;
            }
            $l(r, l), (o = l);
            for (a in o)
              if (o.hasOwnProperty(a)) {
                var c = o[a];
                a === "style"
                  ? Zo(e, c)
                  : a === "dangerouslySetInnerHTML"
                  ? ((c = c ? c.__html : void 0), c != null && Xo(e, c))
                  : a === "children"
                  ? typeof c == "string"
                    ? (r !== "textarea" || c !== "") && cn(e, c)
                    : typeof c == "number" && cn(e, "" + c)
                  : a !== "suppressContentEditableWarning" &&
                    a !== "suppressHydrationWarning" &&
                    a !== "autoFocus" &&
                    (on.hasOwnProperty(a)
                      ? c != null && a === "onScroll" && Q("scroll", e)
                      : c != null && Da(e, a, c, i));
              }
            switch (r) {
              case "input":
                On(e), Si(e, s, !1);
                break;
              case "textarea":
                On(e), Ci(e);
                break;
              case "option":
                s.value != null && e.setAttribute("value", "" + Mt(s.value));
                break;
              case "select":
                (e.multiple = !!s.multiple),
                  (a = s.value),
                  a != null
                    ? vr(e, !!s.multiple, a, !1)
                    : s.defaultValue != null &&
                      vr(e, !!s.multiple, s.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = ys);
            }
            switch (r) {
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
      return pe(t), null;
    case 6:
      if (e && t.stateNode != null) Nu(e, t, e.memoizedProps, s);
      else {
        if (typeof s != "string" && t.stateNode === null) throw Error(z(166));
        if (((r = Qt(jn.current)), Qt(nt.current), qn(t))) {
          if (
            ((s = t.stateNode),
            (r = t.memoizedProps),
            (s[tt] = t),
            (a = s.nodeValue !== r) && ((e = Pe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Bn(s.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Bn(s.nodeValue, r, (e.mode & 1) !== 0);
            }
          a && (t.flags |= 4);
        } else
          (s = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(s)),
            (s[tt] = t),
            (t.stateNode = s);
      }
      return pe(t), null;
    case 13:
      if (
        (W(K),
        (s = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Y && Ie !== null && t.mode & 1 && !(t.flags & 128))
          $c(), Dr(), (t.flags |= 98560), (a = !1);
        else if (((a = qn(t)), s !== null && s.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(z(318));
            if (
              ((a = t.memoizedState),
              (a = a !== null ? a.dehydrated : null),
              !a)
            )
              throw Error(z(317));
            a[tt] = t;
          } else
            Dr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          pe(t), (a = !1);
        } else Ye !== null && (wa(Ye), (Ye = null)), (a = !0);
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((s = s !== null),
          s !== (e !== null && e.memoizedState !== null) &&
            s &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || K.current & 1 ? ie === 0 && (ie = 3) : ui())),
          t.updateQueue !== null && (t.flags |= 4),
          pe(t),
          null);
    case 4:
      return (
        zr(), ma(e, t), e === null && gn(t.stateNode.containerInfo), pe(t), null
      );
    case 10:
      return Wa(t.type._context), pe(t), null;
    case 17:
      return ke(t.type) && vs(), pe(t), null;
    case 19:
      if ((W(K), (a = t.memoizedState), a === null)) return pe(t), null;
      if (((s = (t.flags & 128) !== 0), (i = a.rendering), i === null))
        if (s) qr(a, !1);
        else {
          if (ie !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Cs(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    qr(a, !1),
                    s = i.updateQueue,
                    s !== null && ((t.updateQueue = s), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    s = r,
                    r = t.child;
                  r !== null;

                )
                  (a = r),
                    (e = s),
                    (a.flags &= 14680066),
                    (i = a.alternate),
                    i === null
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.subtreeFlags = 0),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = i.childLanes),
                        (a.lanes = i.lanes),
                        (a.child = i.child),
                        (a.subtreeFlags = 0),
                        (a.deletions = null),
                        (a.memoizedProps = i.memoizedProps),
                        (a.memoizedState = i.memoizedState),
                        (a.updateQueue = i.updateQueue),
                        (a.type = i.type),
                        (e = i.dependencies),
                        (a.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling);
                return q(K, (K.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          a.tail !== null &&
            ne() > Ir &&
            ((t.flags |= 128), (s = !0), qr(a, !1), (t.lanes = 4194304));
        }
      else {
        if (!s)
          if (((e = Cs(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (s = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              qr(a, !0),
              a.tail === null && a.tailMode === "hidden" && !i.alternate && !Y)
            )
              return pe(t), null;
          } else
            2 * ne() - a.renderingStartTime > Ir &&
              r !== 1073741824 &&
              ((t.flags |= 128), (s = !0), qr(a, !1), (t.lanes = 4194304));
        a.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((r = a.last),
            r !== null ? (r.sibling = i) : (t.child = i),
            (a.last = i));
      }
      return a.tail !== null
        ? ((t = a.tail),
          (a.rendering = t),
          (a.tail = t.sibling),
          (a.renderingStartTime = ne()),
          (t.sibling = null),
          (r = K.current),
          q(K, s ? (r & 1) | 2 : r & 1),
          t)
        : (pe(t), null);
    case 22:
    case 23:
      return (
        ci(),
        (s = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== s && (t.flags |= 8192),
        s && t.mode & 1
          ? ze & 1073741824 && (pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : pe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(z(156, t.tag));
}
function cm(e, t) {
  switch ((Ha(t), t.tag)) {
    case 1:
      return (
        ke(t.type) && vs(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        zr(),
        W(Se),
        W(ge),
        Ja(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Xa(t), null;
    case 13:
      if ((W(K), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(z(340));
        Dr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return W(K), null;
    case 4:
      return zr(), null;
    case 10:
      return Wa(t.type._context), null;
    case 22:
    case 23:
      return ci(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Gn = !1,
  he = !1,
  um = typeof WeakSet == "function" ? WeakSet : Set,
  O = null;
function xr(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (s) {
        te(e, t, s);
      }
    else r.current = null;
}
function pa(e, t, r) {
  try {
    r();
  } catch (s) {
    te(e, t, s);
  }
}
var go = !1;
function dm(e, t) {
  if (((Xl = hs), (e = Ec()), Ua(e))) {
    if ("selectionStart" in e)
      var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window;
        var s = r.getSelection && r.getSelection();
        if (s && s.rangeCount !== 0) {
          r = s.anchorNode;
          var l = s.anchorOffset,
            a = s.focusNode;
          s = s.focusOffset;
          try {
            r.nodeType, a.nodeType;
          } catch {
            r = null;
            break e;
          }
          var i = 0,
            o = -1,
            c = -1,
            u = 0,
            d = 0,
            m = e,
            f = null;
          t: for (;;) {
            for (
              var x;
              m !== r || (l !== 0 && m.nodeType !== 3) || (o = i + l),
                m !== a || (s !== 0 && m.nodeType !== 3) || (c = i + s),
                m.nodeType === 3 && (i += m.nodeValue.length),
                (x = m.firstChild) !== null;

            )
              (f = m), (m = x);
            for (;;) {
              if (m === e) break t;
              if (
                (f === r && ++u === l && (o = i),
                f === a && ++d === s && (c = i),
                (x = m.nextSibling) !== null)
              )
                break;
              (m = f), (f = m.parentNode);
            }
            m = x;
          }
          r = o === -1 || c === -1 ? null : { start: o, end: c };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (Jl = { focusedElem: e, selectionRange: r }, hs = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (O = e);
    else
      for (; O !== null; ) {
        t = O;
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
                  var j = v.memoizedProps,
                    k = v.memoizedState,
                    g = t.stateNode,
                    p = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? j : We(t.type, j),
                      k
                    );
                  g.__reactInternalSnapshotBeforeUpdate = p;
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
                throw Error(z(163));
            }
        } catch (N) {
          te(t, t.return, N);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (O = e);
          break;
        }
        O = t.return;
      }
  return (v = go), (go = !1), v;
}
function nn(e, t, r) {
  var s = t.updateQueue;
  if (((s = s !== null ? s.lastEffect : null), s !== null)) {
    var l = (s = s.next);
    do {
      if ((l.tag & e) === e) {
        var a = l.destroy;
        (l.destroy = void 0), a !== void 0 && pa(t, r, a);
      }
      l = l.next;
    } while (l !== s);
  }
}
function Bs(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var r = (t = t.next);
    do {
      if ((r.tag & e) === e) {
        var s = r.create;
        r.destroy = s();
      }
      r = r.next;
    } while (r !== t);
  }
}
function ha(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function bu(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), bu(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[tt], delete t[yn], delete t[ta], delete t[Wf], delete t[Gf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Su(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function xo(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Su(e.return)) return null;
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
function ga(e, t, r) {
  var s = e.tag;
  if (s === 5 || s === 6)
    (e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8
            ? ((t = r.parentNode), t.insertBefore(e, r))
            : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = ys));
  else if (s !== 4 && ((e = e.child), e !== null))
    for (ga(e, t, r), e = e.sibling; e !== null; ) ga(e, t, r), (e = e.sibling);
}
function xa(e, t, r) {
  var s = e.tag;
  if (s === 5 || s === 6)
    (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (s !== 4 && ((e = e.child), e !== null))
    for (xa(e, t, r), e = e.sibling; e !== null; ) xa(e, t, r), (e = e.sibling);
}
var ue = null,
  Ge = !1;
function yt(e, t, r) {
  for (r = r.child; r !== null; ) ku(e, t, r), (r = r.sibling);
}
function ku(e, t, r) {
  if (rt && typeof rt.onCommitFiberUnmount == "function")
    try {
      rt.onCommitFiberUnmount(Os, r);
    } catch {}
  switch (r.tag) {
    case 5:
      he || xr(r, t);
    case 6:
      var s = ue,
        l = Ge;
      (ue = null),
        yt(e, t, r),
        (ue = s),
        (Ge = l),
        ue !== null &&
          (Ge
            ? ((e = ue),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : ue.removeChild(r.stateNode));
      break;
    case 18:
      ue !== null &&
        (Ge
          ? ((e = ue),
            (r = r.stateNode),
            e.nodeType === 8
              ? gl(e.parentNode, r)
              : e.nodeType === 1 && gl(e, r),
            mn(e))
          : gl(ue, r.stateNode));
      break;
    case 4:
      (s = ue),
        (l = Ge),
        (ue = r.stateNode.containerInfo),
        (Ge = !0),
        yt(e, t, r),
        (ue = s),
        (Ge = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !he &&
        ((s = r.updateQueue), s !== null && ((s = s.lastEffect), s !== null))
      ) {
        l = s = s.next;
        do {
          var a = l,
            i = a.destroy;
          (a = a.tag),
            i !== void 0 && (a & 2 || a & 4) && pa(r, t, i),
            (l = l.next);
        } while (l !== s);
      }
      yt(e, t, r);
      break;
    case 1:
      if (
        !he &&
        (xr(r, t),
        (s = r.stateNode),
        typeof s.componentWillUnmount == "function")
      )
        try {
          (s.props = r.memoizedProps),
            (s.state = r.memoizedState),
            s.componentWillUnmount();
        } catch (o) {
          te(r, t, o);
        }
      yt(e, t, r);
      break;
    case 21:
      yt(e, t, r);
      break;
    case 22:
      r.mode & 1
        ? ((he = (s = he) || r.memoizedState !== null), yt(e, t, r), (he = s))
        : yt(e, t, r);
      break;
    default:
      yt(e, t, r);
  }
}
function yo(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new um()),
      t.forEach(function (s) {
        var l = jm.bind(null, e, s);
        r.has(s) || (r.add(s), s.then(l, l));
      });
  }
}
function Qe(e, t) {
  var r = t.deletions;
  if (r !== null)
    for (var s = 0; s < r.length; s++) {
      var l = r[s];
      try {
        var a = e,
          i = t,
          o = i;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              (ue = o.stateNode), (Ge = !1);
              break e;
            case 3:
              (ue = o.stateNode.containerInfo), (Ge = !0);
              break e;
            case 4:
              (ue = o.stateNode.containerInfo), (Ge = !0);
              break e;
          }
          o = o.return;
        }
        if (ue === null) throw Error(z(160));
        ku(a, i, l), (ue = null), (Ge = !1);
        var c = l.alternate;
        c !== null && (c.return = null), (l.return = null);
      } catch (u) {
        te(l, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Cu(t, e), (t = t.sibling);
}
function Cu(e, t) {
  var r = e.alternate,
    s = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Qe(t, e), Ze(e), s & 4)) {
        try {
          nn(3, e, e.return), Bs(3, e);
        } catch (j) {
          te(e, e.return, j);
        }
        try {
          nn(5, e, e.return);
        } catch (j) {
          te(e, e.return, j);
        }
      }
      break;
    case 1:
      Qe(t, e), Ze(e), s & 512 && r !== null && xr(r, r.return);
      break;
    case 5:
      if (
        (Qe(t, e),
        Ze(e),
        s & 512 && r !== null && xr(r, r.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          cn(l, "");
        } catch (j) {
          te(e, e.return, j);
        }
      }
      if (s & 4 && ((l = e.stateNode), l != null)) {
        var a = e.memoizedProps,
          i = r !== null ? r.memoizedProps : a,
          o = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            o === "input" && a.type === "radio" && a.name != null && Go(l, a),
              Ul(o, i);
            var u = Ul(o, a);
            for (i = 0; i < c.length; i += 2) {
              var d = c[i],
                m = c[i + 1];
              d === "style"
                ? Zo(l, m)
                : d === "dangerouslySetInnerHTML"
                ? Xo(l, m)
                : d === "children"
                ? cn(l, m)
                : Da(l, d, m, u);
            }
            switch (o) {
              case "input":
                Ol(l, a);
                break;
              case "textarea":
                Yo(l, a);
                break;
              case "select":
                var f = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!a.multiple;
                var x = a.value;
                x != null
                  ? vr(l, !!a.multiple, x, !1)
                  : f !== !!a.multiple &&
                    (a.defaultValue != null
                      ? vr(l, !!a.multiple, a.defaultValue, !0)
                      : vr(l, !!a.multiple, a.multiple ? [] : "", !1));
            }
            l[yn] = a;
          } catch (j) {
            te(e, e.return, j);
          }
      }
      break;
    case 6:
      if ((Qe(t, e), Ze(e), s & 4)) {
        if (e.stateNode === null) throw Error(z(162));
        (l = e.stateNode), (a = e.memoizedProps);
        try {
          l.nodeValue = a;
        } catch (j) {
          te(e, e.return, j);
        }
      }
      break;
    case 3:
      if (
        (Qe(t, e), Ze(e), s & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          mn(t.containerInfo);
        } catch (j) {
          te(e, e.return, j);
        }
      break;
    case 4:
      Qe(t, e), Ze(e);
      break;
    case 13:
      Qe(t, e),
        Ze(e),
        (l = e.child),
        l.flags & 8192 &&
          ((a = l.memoizedState !== null),
          (l.stateNode.isHidden = a),
          !a ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (ii = ne())),
        s & 4 && yo(e);
      break;
    case 22:
      if (
        ((d = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((he = (u = he) || d), Qe(t, e), (he = u)) : Qe(t, e),
        Ze(e),
        s & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (O = e, d = e.child; d !== null; ) {
            for (m = O = d; O !== null; ) {
              switch (((f = O), (x = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  nn(4, f, f.return);
                  break;
                case 1:
                  xr(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (s = f), (r = f.return);
                    try {
                      (t = s),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (j) {
                      te(s, r, j);
                    }
                  }
                  break;
                case 5:
                  xr(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    jo(m);
                    continue;
                  }
              }
              x !== null ? ((x.return = f), (O = x)) : jo(m);
            }
            d = d.sibling;
          }
        e: for (d = null, m = e; ; ) {
          if (m.tag === 5) {
            if (d === null) {
              d = m;
              try {
                (l = m.stateNode),
                  u
                    ? ((a = l.style),
                      typeof a.setProperty == "function"
                        ? a.setProperty("display", "none", "important")
                        : (a.display = "none"))
                    : ((o = m.stateNode),
                      (c = m.memoizedProps.style),
                      (i =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (o.style.display = Jo("display", i)));
              } catch (j) {
                te(e, e.return, j);
              }
            }
          } else if (m.tag === 6) {
            if (d === null)
              try {
                m.stateNode.nodeValue = u ? "" : m.memoizedProps;
              } catch (j) {
                te(e, e.return, j);
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
            d === m && (d = null), (m = m.return);
          }
          d === m && (d = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Qe(t, e), Ze(e), s & 4 && yo(e);
      break;
    case 21:
      break;
    default:
      Qe(t, e), Ze(e);
  }
}
function Ze(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (Su(r)) {
            var s = r;
            break e;
          }
          r = r.return;
        }
        throw Error(z(160));
      }
      switch (s.tag) {
        case 5:
          var l = s.stateNode;
          s.flags & 32 && (cn(l, ""), (s.flags &= -33));
          var a = xo(e);
          xa(e, a, l);
          break;
        case 3:
        case 4:
          var i = s.stateNode.containerInfo,
            o = xo(e);
          ga(e, o, i);
          break;
        default:
          throw Error(z(161));
      }
    } catch (c) {
      te(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function fm(e, t, r) {
  (O = e), Eu(e);
}
function Eu(e, t, r) {
  for (var s = (e.mode & 1) !== 0; O !== null; ) {
    var l = O,
      a = l.child;
    if (l.tag === 22 && s) {
      var i = l.memoizedState !== null || Gn;
      if (!i) {
        var o = l.alternate,
          c = (o !== null && o.memoizedState !== null) || he;
        o = Gn;
        var u = he;
        if (((Gn = i), (he = c) && !u))
          for (O = l; O !== null; )
            (i = O),
              (c = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? wo(l)
                : c !== null
                ? ((c.return = i), (O = c))
                : wo(l);
        for (; a !== null; ) (O = a), Eu(a), (a = a.sibling);
        (O = l), (Gn = o), (he = u);
      }
      vo(e);
    } else
      l.subtreeFlags & 8772 && a !== null ? ((a.return = l), (O = a)) : vo(e);
  }
}
function vo(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              he || Bs(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !he)
                if (r === null) s.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? r.memoizedProps
                      : We(t.type, r.memoizedProps);
                  s.componentDidUpdate(
                    l,
                    r.memoizedState,
                    s.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var a = t.updateQueue;
              a !== null && ro(t, a, s);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                ro(t, i, r);
              }
              break;
            case 5:
              var o = t.stateNode;
              if (r === null && t.flags & 4) {
                r = o;
                var c = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && r.focus();
                    break;
                  case "img":
                    c.src && (r.src = c.src);
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
                  var d = u.memoizedState;
                  if (d !== null) {
                    var m = d.dehydrated;
                    m !== null && mn(m);
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
              throw Error(z(163));
          }
        he || (t.flags & 512 && ha(t));
      } catch (f) {
        te(t, t.return, f);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      (r.return = t.return), (O = r);
      break;
    }
    O = t.return;
  }
}
function jo(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      (r.return = t.return), (O = r);
      break;
    }
    O = t.return;
  }
}
function wo(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            Bs(4, t);
          } catch (c) {
            te(t, r, c);
          }
          break;
        case 1:
          var s = t.stateNode;
          if (typeof s.componentDidMount == "function") {
            var l = t.return;
            try {
              s.componentDidMount();
            } catch (c) {
              te(t, l, c);
            }
          }
          var a = t.return;
          try {
            ha(t);
          } catch (c) {
            te(t, a, c);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ha(t);
          } catch (c) {
            te(t, i, c);
          }
      }
    } catch (c) {
      te(t, t.return, c);
    }
    if (t === e) {
      O = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      (o.return = t.return), (O = o);
      break;
    }
    O = t.return;
  }
}
var mm = Math.ceil,
  _s = gt.ReactCurrentDispatcher,
  li = gt.ReactCurrentOwner,
  Ve = gt.ReactCurrentBatchConfig,
  V = 0,
  ce = null,
  se = null,
  de = 0,
  ze = 0,
  yr = At(0),
  ie = 0,
  Sn = null,
  tr = 0,
  qs = 0,
  ai = 0,
  sn = null,
  Ne = null,
  ii = 0,
  Ir = 1 / 0,
  st = null,
  zs = !1,
  ya = null,
  Tt = null,
  Yn = !1,
  kt = null,
  Ts = 0,
  ln = 0,
  va = null,
  is = -1,
  os = 0;
function ve() {
  return V & 6 ? ne() : is !== -1 ? is : (is = ne());
}
function It(e) {
  return e.mode & 1
    ? V & 2 && de !== 0
      ? de & -de
      : Kf.transition !== null
      ? (os === 0 && (os = dc()), os)
      : ((e = B),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : yc(e.type))),
        e)
    : 1;
}
function Xe(e, t, r, s) {
  if (50 < ln) throw ((ln = 0), (va = null), Error(z(185)));
  Dn(e, r, s),
    (!(V & 2) || e !== ce) &&
      (e === ce && (!(V & 2) && (qs |= r), ie === 4 && bt(e, de)),
      Ce(e, s),
      r === 1 && V === 0 && !(t.mode & 1) && ((Ir = ne() + 500), Us && Ft()));
}
function Ce(e, t) {
  var r = e.callbackNode;
  Yd(e, t);
  var s = ps(e, e === ce ? de : 0);
  if (s === 0)
    r !== null && _i(r), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = s & -s), e.callbackPriority !== t)) {
    if ((r != null && _i(r), t === 1))
      e.tag === 0 ? Yf(No.bind(null, e)) : Lc(No.bind(null, e)),
        qf(function () {
          !(V & 6) && Ft();
        }),
        (r = null);
    else {
      switch (fc(s)) {
        case 1:
          r = Pa;
          break;
        case 4:
          r = cc;
          break;
        case 16:
          r = ms;
          break;
        case 536870912:
          r = uc;
          break;
        default:
          r = ms;
      }
      r = Ru(r, Du.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = r);
  }
}
function Du(e, t) {
  if (((is = -1), (os = 0), V & 6)) throw Error(z(327));
  var r = e.callbackNode;
  if (Sr() && e.callbackNode !== r) return null;
  var s = ps(e, e === ce ? de : 0);
  if (s === 0) return null;
  if (s & 30 || s & e.expiredLanes || t) t = Is(e, s);
  else {
    t = s;
    var l = V;
    V |= 2;
    var a = zu();
    (ce !== e || de !== t) && ((st = null), (Ir = ne() + 500), Gt(e, t));
    do
      try {
        gm();
        break;
      } catch (o) {
        _u(e, o);
      }
    while (!0);
    Qa(),
      (_s.current = a),
      (V = l),
      se !== null ? (t = 0) : ((ce = null), (de = 0), (t = ie));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Ql(e)), l !== 0 && ((s = l), (t = ja(e, l)))), t === 1)
    )
      throw ((r = Sn), Gt(e, 0), bt(e, s), Ce(e, ne()), r);
    if (t === 6) bt(e, s);
    else {
      if (
        ((l = e.current.alternate),
        !(s & 30) &&
          !pm(l) &&
          ((t = Is(e, s)),
          t === 2 && ((a = Ql(e)), a !== 0 && ((s = a), (t = ja(e, a)))),
          t === 1))
      )
        throw ((r = Sn), Gt(e, 0), bt(e, s), Ce(e, ne()), r);
      switch (((e.finishedWork = l), (e.finishedLanes = s), t)) {
        case 0:
        case 1:
          throw Error(z(345));
        case 2:
          Ht(e, Ne, st);
          break;
        case 3:
          if (
            (bt(e, s), (s & 130023424) === s && ((t = ii + 500 - ne()), 10 < t))
          ) {
            if (ps(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & s) !== s)) {
              ve(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = ea(Ht.bind(null, e, Ne, st), t);
            break;
          }
          Ht(e, Ne, st);
          break;
        case 4:
          if ((bt(e, s), (s & 4194240) === s)) break;
          for (t = e.eventTimes, l = -1; 0 < s; ) {
            var i = 31 - Ke(s);
            (a = 1 << i), (i = t[i]), i > l && (l = i), (s &= ~a);
          }
          if (
            ((s = l),
            (s = ne() - s),
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
                : 1960 * mm(s / 1960)) - s),
            10 < s)
          ) {
            e.timeoutHandle = ea(Ht.bind(null, e, Ne, st), s);
            break;
          }
          Ht(e, Ne, st);
          break;
        case 5:
          Ht(e, Ne, st);
          break;
        default:
          throw Error(z(329));
      }
    }
  }
  return Ce(e, ne()), e.callbackNode === r ? Du.bind(null, e) : null;
}
function ja(e, t) {
  var r = sn;
  return (
    e.current.memoizedState.isDehydrated && (Gt(e, t).flags |= 256),
    (e = Is(e, t)),
    e !== 2 && ((t = Ne), (Ne = r), t !== null && wa(t)),
    e
  );
}
function wa(e) {
  Ne === null ? (Ne = e) : Ne.push.apply(Ne, e);
}
function pm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var s = 0; s < r.length; s++) {
          var l = r[s],
            a = l.getSnapshot;
          l = l.value;
          try {
            if (!Je(a(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
      (r.return = t), (t = r);
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
function bt(e, t) {
  for (
    t &= ~ai,
      t &= ~qs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - Ke(t),
      s = 1 << r;
    (e[r] = -1), (t &= ~s);
  }
}
function No(e) {
  if (V & 6) throw Error(z(327));
  Sr();
  var t = ps(e, 0);
  if (!(t & 1)) return Ce(e, ne()), null;
  var r = Is(e, t);
  if (e.tag !== 0 && r === 2) {
    var s = Ql(e);
    s !== 0 && ((t = s), (r = ja(e, s)));
  }
  if (r === 1) throw ((r = Sn), Gt(e, 0), bt(e, t), Ce(e, ne()), r);
  if (r === 6) throw Error(z(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ht(e, Ne, st),
    Ce(e, ne()),
    null
  );
}
function oi(e, t) {
  var r = V;
  V |= 1;
  try {
    return e(t);
  } finally {
    (V = r), V === 0 && ((Ir = ne() + 500), Us && Ft());
  }
}
function rr(e) {
  kt !== null && kt.tag === 0 && !(V & 6) && Sr();
  var t = V;
  V |= 1;
  var r = Ve.transition,
    s = B;
  try {
    if (((Ve.transition = null), (B = 1), e)) return e();
  } finally {
    (B = s), (Ve.transition = r), (V = t), !(V & 6) && Ft();
  }
}
function ci() {
  (ze = yr.current), W(yr);
}
function Gt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), Bf(r)), se !== null))
    for (r = se.return; r !== null; ) {
      var s = r;
      switch ((Ha(s), s.tag)) {
        case 1:
          (s = s.type.childContextTypes), s != null && vs();
          break;
        case 3:
          zr(), W(Se), W(ge), Ja();
          break;
        case 5:
          Xa(s);
          break;
        case 4:
          zr();
          break;
        case 13:
          W(K);
          break;
        case 19:
          W(K);
          break;
        case 10:
          Wa(s.type._context);
          break;
        case 22:
        case 23:
          ci();
      }
      r = r.return;
    }
  if (
    ((ce = e),
    (se = e = Pt(e.current, null)),
    (de = ze = t),
    (ie = 0),
    (Sn = null),
    (ai = qs = tr = 0),
    (Ne = sn = null),
    qt !== null)
  ) {
    for (t = 0; t < qt.length; t++)
      if (((r = qt[t]), (s = r.interleaved), s !== null)) {
        r.interleaved = null;
        var l = s.next,
          a = r.pending;
        if (a !== null) {
          var i = a.next;
          (a.next = l), (s.next = i);
        }
        r.pending = s;
      }
    qt = null;
  }
  return e;
}
function _u(e, t) {
  do {
    var r = se;
    try {
      if ((Qa(), (ss.current = Ds), Es)) {
        for (var s = J.memoizedState; s !== null; ) {
          var l = s.queue;
          l !== null && (l.pending = null), (s = s.next);
        }
        Es = !1;
      }
      if (
        ((er = 0),
        (oe = ae = J = null),
        (rn = !1),
        (wn = 0),
        (li.current = null),
        r === null || r.return === null)
      ) {
        (ie = 1), (Sn = t), (se = null);
        break;
      }
      e: {
        var a = e,
          i = r.return,
          o = r,
          c = t;
        if (
          ((t = de),
          (o.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var u = c,
            d = o,
            m = d.tag;
          if (!(d.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var f = d.alternate;
            f
              ? ((d.updateQueue = f.updateQueue),
                (d.memoizedState = f.memoizedState),
                (d.lanes = f.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var x = oo(i);
          if (x !== null) {
            (x.flags &= -257),
              co(x, i, o, a, t),
              x.mode & 1 && io(a, u, t),
              (t = x),
              (c = u);
            var v = t.updateQueue;
            if (v === null) {
              var j = new Set();
              j.add(c), (t.updateQueue = j);
            } else v.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              io(a, u, t), ui();
              break e;
            }
            c = Error(z(426));
          }
        } else if (Y && o.mode & 1) {
          var k = oo(i);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              co(k, i, o, a, t),
              Ba(Tr(c, o));
            break e;
          }
        }
        (a = c = Tr(c, o)),
          ie !== 4 && (ie = 2),
          sn === null ? (sn = [a]) : sn.push(a),
          (a = i);
        do {
          switch (a.tag) {
            case 3:
              (a.flags |= 65536), (t &= -t), (a.lanes |= t);
              var g = fu(a, c, t);
              to(a, g);
              break e;
            case 1:
              o = c;
              var p = a.type,
                h = a.stateNode;
              if (
                !(a.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Tt === null || !Tt.has(h))))
              ) {
                (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                var N = mu(a, o, t);
                to(a, N);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      Iu(r);
    } catch (_) {
      (t = _), se === r && r !== null && (se = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function zu() {
  var e = _s.current;
  return (_s.current = Ds), e === null ? Ds : e;
}
function ui() {
  (ie === 0 || ie === 3 || ie === 2) && (ie = 4),
    ce === null || (!(tr & 268435455) && !(qs & 268435455)) || bt(ce, de);
}
function Is(e, t) {
  var r = V;
  V |= 2;
  var s = zu();
  (ce !== e || de !== t) && ((st = null), Gt(e, t));
  do
    try {
      hm();
      break;
    } catch (l) {
      _u(e, l);
    }
  while (!0);
  if ((Qa(), (V = r), (_s.current = s), se !== null)) throw Error(z(261));
  return (ce = null), (de = 0), ie;
}
function hm() {
  for (; se !== null; ) Tu(se);
}
function gm() {
  for (; se !== null && !$d(); ) Tu(se);
}
function Tu(e) {
  var t = Mu(e.alternate, e, ze);
  (e.memoizedProps = e.pendingProps),
    t === null ? Iu(e) : (se = t),
    (li.current = null);
}
function Iu(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((r = cm(r, t)), r !== null)) {
        (r.flags &= 32767), (se = r);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ie = 6), (se = null);
        return;
      }
    } else if (((r = om(r, t, ze)), r !== null)) {
      se = r;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      se = t;
      return;
    }
    se = t = e;
  } while (t !== null);
  ie === 0 && (ie = 5);
}
function Ht(e, t, r) {
  var s = B,
    l = Ve.transition;
  try {
    (Ve.transition = null), (B = 1), xm(e, t, r, s);
  } finally {
    (Ve.transition = l), (B = s);
  }
  return null;
}
function xm(e, t, r, s) {
  do Sr();
  while (kt !== null);
  if (V & 6) throw Error(z(327));
  r = e.finishedWork;
  var l = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(z(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var a = r.lanes | r.childLanes;
  if (
    (Kd(e, a),
    e === ce && ((se = ce = null), (de = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      Yn ||
      ((Yn = !0),
      Ru(ms, function () {
        return Sr(), null;
      })),
    (a = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || a)
  ) {
    (a = Ve.transition), (Ve.transition = null);
    var i = B;
    B = 1;
    var o = V;
    (V |= 4),
      (li.current = null),
      dm(e, r),
      Cu(r, e),
      Lf(Jl),
      (hs = !!Xl),
      (Jl = Xl = null),
      (e.current = r),
      fm(r),
      Ud(),
      (V = o),
      (B = i),
      (Ve.transition = a);
  } else e.current = r;
  if (
    (Yn && ((Yn = !1), (kt = e), (Ts = l)),
    (a = e.pendingLanes),
    a === 0 && (Tt = null),
    Bd(r.stateNode),
    Ce(e, ne()),
    t !== null)
  )
    for (s = e.onRecoverableError, r = 0; r < t.length; r++)
      (l = t[r]), s(l.value, { componentStack: l.stack, digest: l.digest });
  if (zs) throw ((zs = !1), (e = ya), (ya = null), e);
  return (
    Ts & 1 && e.tag !== 0 && Sr(),
    (a = e.pendingLanes),
    a & 1 ? (e === va ? ln++ : ((ln = 0), (va = e))) : (ln = 0),
    Ft(),
    null
  );
}
function Sr() {
  if (kt !== null) {
    var e = fc(Ts),
      t = Ve.transition,
      r = B;
    try {
      if (((Ve.transition = null), (B = 16 > e ? 16 : e), kt === null))
        var s = !1;
      else {
        if (((e = kt), (kt = null), (Ts = 0), V & 6)) throw Error(z(331));
        var l = V;
        for (V |= 4, O = e.current; O !== null; ) {
          var a = O,
            i = a.child;
          if (O.flags & 16) {
            var o = a.deletions;
            if (o !== null) {
              for (var c = 0; c < o.length; c++) {
                var u = o[c];
                for (O = u; O !== null; ) {
                  var d = O;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      nn(8, d, a);
                  }
                  var m = d.child;
                  if (m !== null) (m.return = d), (O = m);
                  else
                    for (; O !== null; ) {
                      d = O;
                      var f = d.sibling,
                        x = d.return;
                      if ((bu(d), d === u)) {
                        O = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = x), (O = f);
                        break;
                      }
                      O = x;
                    }
                }
              }
              var v = a.alternate;
              if (v !== null) {
                var j = v.child;
                if (j !== null) {
                  v.child = null;
                  do {
                    var k = j.sibling;
                    (j.sibling = null), (j = k);
                  } while (j !== null);
                }
              }
              O = a;
            }
          }
          if (a.subtreeFlags & 2064 && i !== null) (i.return = a), (O = i);
          else
            e: for (; O !== null; ) {
              if (((a = O), a.flags & 2048))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    nn(9, a, a.return);
                }
              var g = a.sibling;
              if (g !== null) {
                (g.return = a.return), (O = g);
                break e;
              }
              O = a.return;
            }
        }
        var p = e.current;
        for (O = p; O !== null; ) {
          i = O;
          var h = i.child;
          if (i.subtreeFlags & 2064 && h !== null) (h.return = i), (O = h);
          else
            e: for (i = p; O !== null; ) {
              if (((o = O), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bs(9, o);
                  }
                } catch (_) {
                  te(o, o.return, _);
                }
              if (o === i) {
                O = null;
                break e;
              }
              var N = o.sibling;
              if (N !== null) {
                (N.return = o.return), (O = N);
                break e;
              }
              O = o.return;
            }
        }
        if (
          ((V = l), Ft(), rt && typeof rt.onPostCommitFiberRoot == "function")
        )
          try {
            rt.onPostCommitFiberRoot(Os, e);
          } catch {}
        s = !0;
      }
      return s;
    } finally {
      (B = r), (Ve.transition = t);
    }
  }
  return !1;
}
function bo(e, t, r) {
  (t = Tr(r, t)),
    (t = fu(e, t, 1)),
    (e = zt(e, t, 1)),
    (t = ve()),
    e !== null && (Dn(e, 1, t), Ce(e, t));
}
function te(e, t, r) {
  if (e.tag === 3) bo(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        bo(t, e, r);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof s.componentDidCatch == "function" &&
            (Tt === null || !Tt.has(s)))
        ) {
          (e = Tr(r, e)),
            (e = mu(t, e, 1)),
            (t = zt(t, e, 1)),
            (e = ve()),
            t !== null && (Dn(t, 1, e), Ce(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function ym(e, t, r) {
  var s = e.pingCache;
  s !== null && s.delete(t),
    (t = ve()),
    (e.pingedLanes |= e.suspendedLanes & r),
    ce === e &&
      (de & r) === r &&
      (ie === 4 || (ie === 3 && (de & 130023424) === de && 500 > ne() - ii)
        ? Gt(e, 0)
        : (ai |= r)),
    Ce(e, t);
}
function Pu(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Fn), (Fn <<= 1), !(Fn & 130023424) && (Fn = 4194304))
      : (t = 1));
  var r = ve();
  (e = ft(e, t)), e !== null && (Dn(e, t, r), Ce(e, r));
}
function vm(e) {
  var t = e.memoizedState,
    r = 0;
  t !== null && (r = t.retryLane), Pu(e, r);
}
function jm(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var s = e.stateNode,
        l = e.memoizedState;
      l !== null && (r = l.retryLane);
      break;
    case 19:
      s = e.stateNode;
      break;
    default:
      throw Error(z(314));
  }
  s !== null && s.delete(t), Pu(e, r);
}
var Mu;
Mu = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Se.current) be = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return (be = !1), im(e, t, r);
      be = !!(e.flags & 131072);
    }
  else (be = !1), Y && t.flags & 1048576 && Ac(t, Ns, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var s = t.type;
      as(e, t), (e = t.pendingProps);
      var l = Er(t, ge.current);
      br(t, r), (l = ei(null, t, s, e, l, r));
      var a = ti();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ke(s) ? ((a = !0), js(t)) : (a = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ya(t),
            (l.updater = Hs),
            (t.stateNode = l),
            (l._reactInternals = t),
            ia(t, s, e, r),
            (t = ua(null, t, s, !0, a, r)))
          : ((t.tag = 0), Y && a && Va(t), xe(null, t, l, r), (t = t.child)),
        t
      );
    case 16:
      s = t.elementType;
      e: {
        switch (
          (as(e, t),
          (e = t.pendingProps),
          (l = s._init),
          (s = l(s._payload)),
          (t.type = s),
          (l = t.tag = Nm(s)),
          (e = We(s, e)),
          l)
        ) {
          case 0:
            t = ca(null, t, s, e, r);
            break e;
          case 1:
            t = mo(null, t, s, e, r);
            break e;
          case 11:
            t = uo(null, t, s, e, r);
            break e;
          case 14:
            t = fo(null, t, s, We(s.type, e), r);
            break e;
        }
        throw Error(z(306, s, ""));
      }
      return t;
    case 0:
      return (
        (s = t.type),
        (l = t.pendingProps),
        (l = t.elementType === s ? l : We(s, l)),
        ca(e, t, s, l, r)
      );
    case 1:
      return (
        (s = t.type),
        (l = t.pendingProps),
        (l = t.elementType === s ? l : We(s, l)),
        mo(e, t, s, l, r)
      );
    case 3:
      e: {
        if ((xu(t), e === null)) throw Error(z(387));
        (s = t.pendingProps),
          (a = t.memoizedState),
          (l = a.element),
          Bc(e, t),
          ks(t, s, null, r);
        var i = t.memoizedState;
        if (((s = i.element), a.isDehydrated))
          if (
            ((a = {
              element: s,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = a),
            (t.memoizedState = a),
            t.flags & 256)
          ) {
            (l = Tr(Error(z(423)), t)), (t = po(e, t, s, r, l));
            break e;
          } else if (s !== l) {
            (l = Tr(Error(z(424)), t)), (t = po(e, t, s, r, l));
            break e;
          } else
            for (
              Ie = _t(t.stateNode.containerInfo.firstChild),
                Pe = t,
                Y = !0,
                Ye = null,
                r = Vc(t, null, s, r),
                t.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((Dr(), s === l)) {
            t = mt(e, t, r);
            break e;
          }
          xe(e, t, s, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        qc(t),
        e === null && sa(t),
        (s = t.type),
        (l = t.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Zl(s, l) ? (i = null) : a !== null && Zl(s, a) && (t.flags |= 32),
        gu(e, t),
        xe(e, t, i, r),
        t.child
      );
    case 6:
      return e === null && sa(t), null;
    case 13:
      return yu(e, t, r);
    case 4:
      return (
        Ka(t, t.stateNode.containerInfo),
        (s = t.pendingProps),
        e === null ? (t.child = _r(t, null, s, r)) : xe(e, t, s, r),
        t.child
      );
    case 11:
      return (
        (s = t.type),
        (l = t.pendingProps),
        (l = t.elementType === s ? l : We(s, l)),
        uo(e, t, s, l, r)
      );
    case 7:
      return xe(e, t, t.pendingProps, r), t.child;
    case 8:
      return xe(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return xe(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (
          ((s = t.type._context),
          (l = t.pendingProps),
          (a = t.memoizedProps),
          (i = l.value),
          q(bs, s._currentValue),
          (s._currentValue = i),
          a !== null)
        )
          if (Je(a.value, i)) {
            if (a.children === l.children && !Se.current) {
              t = mt(e, t, r);
              break e;
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null; ) {
              var o = a.dependencies;
              if (o !== null) {
                i = a.child;
                for (var c = o.firstContext; c !== null; ) {
                  if (c.context === s) {
                    if (a.tag === 1) {
                      (c = ot(-1, r & -r)), (c.tag = 2);
                      var u = a.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (c.next = c)
                          : ((c.next = d.next), (d.next = c)),
                          (u.pending = c);
                      }
                    }
                    (a.lanes |= r),
                      (c = a.alternate),
                      c !== null && (c.lanes |= r),
                      la(a.return, r, t),
                      (o.lanes |= r);
                    break;
                  }
                  c = c.next;
                }
              } else if (a.tag === 10) i = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (((i = a.return), i === null)) throw Error(z(341));
                (i.lanes |= r),
                  (o = i.alternate),
                  o !== null && (o.lanes |= r),
                  la(i, r, t),
                  (i = a.sibling);
              } else i = a.child;
              if (i !== null) i.return = a;
              else
                for (i = a; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((a = i.sibling), a !== null)) {
                    (a.return = i.return), (i = a);
                    break;
                  }
                  i = i.return;
                }
              a = i;
            }
        xe(e, t, l.children, r), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (s = t.pendingProps.children),
        br(t, r),
        (l = He(l)),
        (s = s(l)),
        (t.flags |= 1),
        xe(e, t, s, r),
        t.child
      );
    case 14:
      return (
        (s = t.type),
        (l = We(s, t.pendingProps)),
        (l = We(s.type, l)),
        fo(e, t, s, l, r)
      );
    case 15:
      return pu(e, t, t.type, t.pendingProps, r);
    case 17:
      return (
        (s = t.type),
        (l = t.pendingProps),
        (l = t.elementType === s ? l : We(s, l)),
        as(e, t),
        (t.tag = 1),
        ke(s) ? ((e = !0), js(t)) : (e = !1),
        br(t, r),
        du(t, s, l),
        ia(t, s, l, r),
        ua(null, t, s, !0, e, r)
      );
    case 19:
      return vu(e, t, r);
    case 22:
      return hu(e, t, r);
  }
  throw Error(z(156, t.tag));
};
function Ru(e, t) {
  return oc(e, t);
}
function wm(e, t, r, s) {
  (this.tag = e),
    (this.key = r),
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
function Ue(e, t, r, s) {
  return new wm(e, t, r, s);
}
function di(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Nm(e) {
  if (typeof e == "function") return di(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === za)) return 11;
    if (e === Ta) return 14;
  }
  return 2;
}
function Pt(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = Ue(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t),
        (r.type = e.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  );
}
function cs(e, t, r, s, l, a) {
  var i = 2;
  if (((s = e), typeof e == "function")) di(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case or:
        return Yt(r.children, l, a, t);
      case _a:
        (i = 8), (l |= 8);
        break;
      case Tl:
        return (
          (e = Ue(12, r, t, l | 2)), (e.elementType = Tl), (e.lanes = a), e
        );
      case Il:
        return (e = Ue(13, r, t, l)), (e.elementType = Il), (e.lanes = a), e;
      case Pl:
        return (e = Ue(19, r, t, l)), (e.elementType = Pl), (e.lanes = a), e;
      case qo:
        return Qs(r, l, a, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ho:
              i = 10;
              break e;
            case Bo:
              i = 9;
              break e;
            case za:
              i = 11;
              break e;
            case Ta:
              i = 14;
              break e;
            case jt:
              (i = 16), (s = null);
              break e;
          }
        throw Error(z(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ue(i, r, t, l)), (t.elementType = e), (t.type = s), (t.lanes = a), t
  );
}
function Yt(e, t, r, s) {
  return (e = Ue(7, e, s, t)), (e.lanes = r), e;
}
function Qs(e, t, r, s) {
  return (
    (e = Ue(22, e, s, t)),
    (e.elementType = qo),
    (e.lanes = r),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Sl(e, t, r) {
  return (e = Ue(6, e, null, t)), (e.lanes = r), e;
}
function kl(e, t, r) {
  return (
    (t = Ue(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function bm(e, t, r, s, l) {
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
    (this.eventTimes = ll(0)),
    (this.expirationTimes = ll(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ll(0)),
    (this.identifierPrefix = s),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function fi(e, t, r, s, l, a, i, o, c) {
  return (
    (e = new bm(e, t, r, o, c)),
    t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
    (a = Ue(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: s,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ya(a),
    e
  );
}
function Sm(e, t, r) {
  var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ir,
    key: s == null ? null : "" + s,
    children: e,
    containerInfo: t,
    implementation: r,
  };
}
function Ou(e) {
  if (!e) return Rt;
  e = e._reactInternals;
  e: {
    if (lr(e) !== e || e.tag !== 1) throw Error(z(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ke(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(z(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (ke(r)) return Oc(e, r, t);
  }
  return t;
}
function Lu(e, t, r, s, l, a, i, o, c) {
  return (
    (e = fi(r, s, !0, e, l, a, i, o, c)),
    (e.context = Ou(null)),
    (r = e.current),
    (s = ve()),
    (l = It(r)),
    (a = ot(s, l)),
    (a.callback = t ?? null),
    zt(r, a, l),
    (e.current.lanes = l),
    Dn(e, l, s),
    Ce(e, s),
    e
  );
}
function Ws(e, t, r, s) {
  var l = t.current,
    a = ve(),
    i = It(l);
  return (
    (r = Ou(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = ot(a, i)),
    (t.payload = { element: e }),
    (s = s === void 0 ? null : s),
    s !== null && (t.callback = s),
    (e = zt(l, t, i)),
    e !== null && (Xe(e, l, i, a), ns(e, l, i)),
    i
  );
}
function Ps(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function So(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function mi(e, t) {
  So(e, t), (e = e.alternate) && So(e, t);
}
function km() {
  return null;
}
var Au =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function pi(e) {
  this._internalRoot = e;
}
Gs.prototype.render = pi.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(z(409));
  Ws(e, t, null, null);
};
Gs.prototype.unmount = pi.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    rr(function () {
      Ws(null, e, null, null);
    }),
      (t[dt] = null);
  }
};
function Gs(e) {
  this._internalRoot = e;
}
Gs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = hc();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < Nt.length && t !== 0 && t < Nt[r].priority; r++);
    Nt.splice(r, 0, e), r === 0 && xc(e);
  }
};
function hi(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ys(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ko() {}
function Cm(e, t, r, s, l) {
  if (l) {
    if (typeof s == "function") {
      var a = s;
      s = function () {
        var u = Ps(i);
        a.call(u);
      };
    }
    var i = Lu(t, s, e, 0, null, !1, !1, "", ko);
    return (
      (e._reactRootContainer = i),
      (e[dt] = i.current),
      gn(e.nodeType === 8 ? e.parentNode : e),
      rr(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof s == "function") {
    var o = s;
    s = function () {
      var u = Ps(c);
      o.call(u);
    };
  }
  var c = fi(e, 0, !1, null, null, !1, !1, "", ko);
  return (
    (e._reactRootContainer = c),
    (e[dt] = c.current),
    gn(e.nodeType === 8 ? e.parentNode : e),
    rr(function () {
      Ws(t, c, r, s);
    }),
    c
  );
}
function Ks(e, t, r, s, l) {
  var a = r._reactRootContainer;
  if (a) {
    var i = a;
    if (typeof l == "function") {
      var o = l;
      l = function () {
        var c = Ps(i);
        o.call(c);
      };
    }
    Ws(t, i, e, l);
  } else i = Cm(r, t, e, l, s);
  return Ps(i);
}
mc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = Yr(t.pendingLanes);
        r !== 0 &&
          (Ma(t, r | 1), Ce(t, ne()), !(V & 6) && ((Ir = ne() + 500), Ft()));
      }
      break;
    case 13:
      rr(function () {
        var s = ft(e, 1);
        if (s !== null) {
          var l = ve();
          Xe(s, e, 1, l);
        }
      }),
        mi(e, 1);
  }
};
Ra = function (e) {
  if (e.tag === 13) {
    var t = ft(e, 134217728);
    if (t !== null) {
      var r = ve();
      Xe(t, e, 134217728, r);
    }
    mi(e, 134217728);
  }
};
pc = function (e) {
  if (e.tag === 13) {
    var t = It(e),
      r = ft(e, t);
    if (r !== null) {
      var s = ve();
      Xe(r, e, t, s);
    }
    mi(e, t);
  }
};
hc = function () {
  return B;
};
gc = function (e, t) {
  var r = B;
  try {
    return (B = e), t();
  } finally {
    B = r;
  }
};
Hl = function (e, t, r) {
  switch (t) {
    case "input":
      if ((Ol(e, r), (t = r.name), r.type === "radio" && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < r.length;
          t++
        ) {
          var s = r[t];
          if (s !== e && s.form === e.form) {
            var l = $s(s);
            if (!l) throw Error(z(90));
            Wo(s), Ol(s, l);
          }
        }
      }
      break;
    case "textarea":
      Yo(e, r);
      break;
    case "select":
      (t = r.value), t != null && vr(e, !!r.multiple, t, !1);
  }
};
rc = oi;
nc = rr;
var Em = { usingClientEntryPoint: !1, Events: [zn, fr, $s, ec, tc, oi] },
  Qr = {
    findFiberByHostInstance: Bt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Dm = {
    bundleType: Qr.bundleType,
    version: Qr.version,
    rendererPackageName: Qr.rendererPackageName,
    rendererConfig: Qr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: gt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ac(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Qr.findFiberByHostInstance || km,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Kn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Kn.isDisabled && Kn.supportsFiber)
    try {
      (Os = Kn.inject(Dm)), (rt = Kn);
    } catch {}
}
Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Em;
Oe.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!hi(t)) throw Error(z(200));
  return Sm(e, t, null, r);
};
Oe.createRoot = function (e, t) {
  if (!hi(e)) throw Error(z(299));
  var r = !1,
    s = "",
    l = Au;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = fi(e, 1, !1, null, null, r, !1, s, l)),
    (e[dt] = t.current),
    gn(e.nodeType === 8 ? e.parentNode : e),
    new pi(t)
  );
};
Oe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(z(188))
      : ((e = Object.keys(e).join(",")), Error(z(268, e)));
  return (e = ac(t)), (e = e === null ? null : e.stateNode), e;
};
Oe.flushSync = function (e) {
  return rr(e);
};
Oe.hydrate = function (e, t, r) {
  if (!Ys(t)) throw Error(z(200));
  return Ks(null, e, t, !0, r);
};
Oe.hydrateRoot = function (e, t, r) {
  if (!hi(e)) throw Error(z(405));
  var s = (r != null && r.hydratedSources) || null,
    l = !1,
    a = "",
    i = Au;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (l = !0),
      r.identifierPrefix !== void 0 && (a = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (i = r.onRecoverableError)),
    (t = Lu(t, null, e, 1, r ?? null, l, !1, a, i)),
    (e[dt] = t.current),
    gn(e),
    s)
  )
    for (e = 0; e < s.length; e++)
      (r = s[e]),
        (l = r._getVersion),
        (l = l(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, l])
          : t.mutableSourceEagerHydrationData.push(r, l);
  return new Gs(t);
};
Oe.render = function (e, t, r) {
  if (!Ys(t)) throw Error(z(200));
  return Ks(null, e, t, !1, r);
};
Oe.unmountComponentAtNode = function (e) {
  if (!Ys(e)) throw Error(z(40));
  return e._reactRootContainer
    ? (rr(function () {
        Ks(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[dt] = null);
        });
      }),
      !0)
    : !1;
};
Oe.unstable_batchedUpdates = oi;
Oe.unstable_renderSubtreeIntoContainer = function (e, t, r, s) {
  if (!Ys(r)) throw Error(z(200));
  if (e == null || e._reactInternals === void 0) throw Error(z(38));
  return Ks(e, t, r, !1, s);
};
Oe.version = "18.3.1-next-f1338f8080-20240426";
function Fu() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fu);
    } catch (e) {
      console.error(e);
    }
}
Fu(), (Fo.exports = Oe);
var _m = Fo.exports,
  $u,
  Co = _m;
($u = Co.createRoot), Co.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var zm = {
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
 */ const Tm = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  H = (e, t) => {
    const r = w.forwardRef(
      (
        {
          color: s = "currentColor",
          size: l = 24,
          strokeWidth: a = 2,
          absoluteStrokeWidth: i,
          className: o = "",
          children: c,
          ...u
        },
        d
      ) =>
        w.createElement(
          "svg",
          {
            ref: d,
            ...zm,
            width: l,
            height: l,
            stroke: s,
            strokeWidth: i ? (Number(a) * 24) / Number(l) : a,
            className: ["lucide", `lucide-${Tm(e)}`, o].join(" "),
            ...u,
          },
          [
            ...t.map(([m, f]) => w.createElement(m, f)),
            ...(Array.isArray(c) ? c : [c]),
          ]
        )
    );
    return (r.displayName = `${e}`), r;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qe = H("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ms = H("AlertTriangle", [
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
 */ const Uu = H("Archive", [
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
 */ const Vu = H("BellOff", [
  ["path", { d: "M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5", key: "o7mx20" }],
  ["path", { d: "M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7", key: "16f1lm" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hu = H("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bu = H("Building2", [
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
 */ const qu = H("Building", [
  [
    "rect",
    {
      width: "16",
      height: "20",
      x: "4",
      y: "2",
      rx: "2",
      ry: "2",
      key: "76otgf",
    },
  ],
  ["path", { d: "M9 22v-4h6v4", key: "r93iot" }],
  ["path", { d: "M8 6h.01", key: "1dz90k" }],
  ["path", { d: "M16 6h.01", key: "1x0f13" }],
  ["path", { d: "M12 6h.01", key: "1vi96p" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xs = H("Calendar", [
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
 */ const Xn = H("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kn = H("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lr = H("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kt = H("FileText", [
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
 */ const Im = H("Globe", [
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
 */ const pt = H("History", [
  [
    "path",
    { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" },
  ],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cl = H("Layers", [
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
 */ const Pm = H("LayoutList", [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  [
    "rect",
    { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" },
  ],
  ["path", { d: "M14 4h7", key: "3xa0d5" }],
  ["path", { d: "M14 9h7", key: "1icrd9" }],
  ["path", { d: "M14 15h7", key: "1mj8o2" }],
  ["path", { d: "M14 20h7", key: "11slyb" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mm = H("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qu = H("Maximize2", [
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["polyline", { points: "9 21 3 21 3 15", key: "1avn1i" }],
  ["line", { x1: "21", x2: "14", y1: "3", y2: "10", key: "ota7mn" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rm = H("Maximize", [
  ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
  ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
  ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
  ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const an = H("Megaphone", [
  ["path", { d: "m3 11 18-5v12L3 14v-3z", key: "n962bs" }],
  ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6", key: "1yl0tm" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Om = H("Move", [
  ["polyline", { points: "5 9 2 12 5 15", key: "1r5uj5" }],
  ["polyline", { points: "9 5 12 2 15 5", key: "5v383o" }],
  ["polyline", { points: "15 19 12 22 9 19", key: "g7qi8m" }],
  ["polyline", { points: "19 9 22 12 19 15", key: "tpp73q" }],
  ["line", { x1: "2", x2: "22", y1: "12", y2: "12", key: "1dnqot" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ee = H("Package", [
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
 */ const ht = H("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kr = H("RefreshCw", [
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
 */ const Cn = H("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nr = H("Settings", [
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
 */ const Lm = H("SplitSquareHorizontal", [
  ["path", { d: "M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3", key: "lubmu8" }],
  ["path", { d: "M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3", key: "1ag34g" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pr = H("SquarePen", [
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
 */ const ct = H("Trash2", [
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
 */ const Xt = H("Truck", [
  [
    "path",
    {
      d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
      key: "wrbu53",
    },
  ],
  ["path", { d: "M15 18H9", key: "1lyqi6" }],
  [
    "path",
    {
      d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
      key: "lysw3i",
    },
  ],
  ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Js = H("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Am = H("Volume2", [
  ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }],
  ["path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07", key: "ltjumu" }],
  ["path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14", key: "1kegas" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Re = H("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Fm = {
    zh: {
      "app.title": "藥庫監控系統",
      "app.subtitle": "查詢處方疑義紀錄，並檢視相關資訊",
      "search.button": "搜尋",
      "search.field.patientCode": "病歷號",
      "search.field.department": "科別",
      "search.field.operator": "操作者",
      "search.field.reporter": "提報人員",
      "search.placeholder.patientCode": "搜尋病歷號",
      "search.placeholder.department": "搜尋科別",
      "search.placeholder.operator": "搜尋操作者",
      "search.placeholder.reporter": "搜尋提報人員",
      "export.button": "匯出",
      "filter.placeholder": "搜尋病歷號",
      "date.startLabel": "開始日期時間",
      "date.endLabel": "結束日期時間",
      "date.timeType": "時間類型",
      "date.timeType.create": "建立時間",
      "date.timeType.prescription": "開方時間",
      "date.timeType.order": "開方時間",
      "date.timeType.report": "提報時間",
      "date.timeType.handle": "處理時間",
      "table.patientCode": "病歷號",
      "table.doctor": "醫師姓名",
      "table.department": "科別",
      "table.prescriptionBagType": "藥袋類型",
      "table.orderTime": "開方時間",
      "table.createTime": "建立時間",
      "table.errorType": "錯誤類別",
      "table.status": "狀態",
      "table.operator": "操作者",
      "table.diagnosis": "診斷內容",
      "table.details": "事件詳細描述",
      "table.reportTime": "提報時間",
      "table.reporter": "提報人員",
      "table.handleTime": "處理時間",
      "table.notification": "通報",
      "table.remarks": "備註",
      "table.showAll": "顯示所有詳細資料",
      "table.recordCount": "顯示 {showing} 筆資料（共 {total} 筆）",
      "table.noRecords": "沒有符合條件的處方疑義紀錄",
      "table.records": "筆",
      "status.processed": "已處理",
      "status.processing": "處理中",
      "status.unchanged": "未更改",
      "tab.records": "歷史紀錄",
      "tab.rules": "環境監控",
      "rules.description": "規則說明",
      "rules.environment": "執行環境",
      "rules.importance": "重要程度",
      "error.loading": "載入資料時發生錯誤",
      "error.api": "系統錯誤，請稍後再試",
      loading: "正在載入資料...",
      download: "下載紀錄",
      logout: "登出",
      "platform.title": "次世代整合平台",
      copyright: "Copyright ©2025 鴻森智能科技",
      "realtime.overview": "即時概況",
      "inpatient.pharmacy": "住院藥局",
      "drug.storage": "藥庫",
      "outpatient.pharmacy": "門急診藥局",
      temperature: "溫度",
      humidity: "濕度",
      "last.updated": "最後更新",
      "temp.humidity.trend.chart": "溫濕度趨勢圖表",
      "temp.humidity.trend": "溫濕度趨勢",
      "records.count": "筆數據",
      "displaying.last.8hours": "預設顯示最近8小時",
      "latest.time": "最新時間",
      "showing.records": "顯示",
    },
    en: {
      "app.title": "Pharmacy Control Panel",
      "app.subtitle": "Query and review prescription records",
      "search.button": "Search",
      "search.field.patientCode": "Patient Code",
      "search.field.department": "Department",
      "search.field.operator": "Operator",
      "search.field.reporter": "Reporter",
      "search.placeholder.patientCode": "Search patient code...",
      "search.placeholder.department": "Search department...",
      "search.placeholder.operator": "Search operator...",
      "search.placeholder.reporter": "Search reporter...",
      "export.button": "Export",
      "filter.placeholder": "Search patient ID...",
      "date.startLabel": "Start Date & Time",
      "date.endLabel": "End Date & Time",
      "date.timeType": "Time Type",
      "date.timeType.create": "Create Time",
      "date.timeType.prescription": "Prescription Time",
      "date.timeType.order": "Order Time",
      "date.timeType.report": "Report Time",
      "date.timeType.handle": "Handle Time",
      "table.patientCode": "Patient ID",
      "table.doctor": "Doctor",
      "table.department": "Department",
      "table.prescriptionBagType": "Prescription Bag Type",
      "table.orderTime": "Order Time",
      "table.createTime": "Create Time",
      "table.errorType": "Error Type",
      "table.status": "Status",
      "table.operator": "Operator",
      "table.diagnosis": "Diagnosis",
      "table.details": "Event Details",
      "table.reportTime": "Report Time",
      "table.reporter": "Reporter",
      "table.handleTime": "Handle Time",
      "table.notification": "Notification",
      "table.remarks": "Remarks",
      "table.showAll": "Show All Details",
      "table.recordCount": "Showing {showing} records (Total {total})",
      "table.noRecords": "No prescription records found",
      "table.records": "records",
      "status.processed": "Processed",
      "status.processing": "Processing",
      "status.unchanged": "Unchanged",
      "tab.records": "Historical Records",
      "tab.rules": "Environment Monitoring",
      "rules.description": "Rule Description",
      "rules.environment": "Environment",
      "rules.importance": "Importance Level",
      "error.loading": "Error loading data",
      "error.api": "System error, please try again later",
      loading: "Loading data...",
      download: "Download Record",
      logout: "Logout",
      "platform.title": "Next Generation Platform",
      copyright: "Copyright ©2025 Hongsen Technology",
      "realtime.overview": "Real-Time Overview",
      "inpatient.pharmacy": "Inpatient Pharmacy",
      "drug.storage": "Drug Storage",
      "outpatient.pharmacy": "Outpatient Pharmacy",
      temperature: "Temperature",
      humidity: "Humidity",
      "last.updated": "Last Updated",
      "temp.humidity.trend.chart": "Temperature & Humidity Trend Chart",
      "temp.humidity.trend": "Temp & Humidity Trend",
      "records.count": "Records",
      "displaying.last.8hours": "Displaying Last 8 Hours (default)",
      "latest.time": "Latest Time",
      "showing.records": "Showing",
    },
  },
  Wu = w.createContext(void 0),
  $m = ({ children: e }) => {
    const [t, r] = w.useState("zh"),
      s = () => {
        r((a) => (a === "zh" ? "en" : "zh"));
      },
      l = (a, i) => {
        let o = Fm[t][a] || a;
        return (
          i &&
            Object.entries(i).forEach(([c, u]) => {
              o = o.replace(`{${c}}`, u.toString());
            }),
          o
        );
      };
    return n.jsx(Wu.Provider, {
      value: { language: t, toggleLanguage: s, t: l },
      children: e,
    });
  },
  Ar = () => {
    const e = w.useContext(Wu);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  };
let Wt = null;
const Gu = async () => {
    if (Wt) return Wt;
    try {
      const e = await fetch("../config.txt");
      if (!e.ok) throw new Error("Failed to load configuration");
      return (Wt = await e.json()), Wt;
    } catch (e) {
      throw (console.error("Error loading config:", e), e);
    }
  },
  Um = (e) => {
    if (!Wt) throw new Error("Configuration not loaded");
    return `${Wt.domain}${e}`;
  },
  El = () => Wt,
  re = async (e, t = {}) => {
    let r;
    try {
      r = Um(e);
    } catch {
      throw new Error(
        "API configuration not loaded. Please refresh the page and try again."
      );
    }
    const s = t.method || "GET";
    console.group(`🌐 API Request: ${e}`),
      console.log(`URL: ${r}`),
      console.log(`Method: ${s}`),
      t.body && console.log("Request Payload:", t.body);
    try {
      const l = await fetch(r, {
          method: s,
          headers: { "Content-Type": "application/json" },
          body: t.body ? JSON.stringify(t.body) : void 0,
        }),
        a = await l.text();
      let i;
      try {
        i = JSON.parse(a);
      } catch (o) {
        throw (
          (console.error("Failed to parse response as JSON:", o),
          new Error("伺服器回應格式錯誤，請稍後再試"))
        );
      }
      if ((console.log("Response:", i), console.groupEnd(), !l.ok))
        throw new Error(`伺服器錯誤 (${l.status})`);
      return i;
    } catch (l) {
      throw (
        (console.error("API Error:", l),
        console.groupEnd(),
        l instanceof TypeError && l.message.includes("Failed to fetch")
          ? new Error("無法連接到伺服器，請檢查網路連線或稍後再試")
          : l instanceof Error
          ? l
          : new Error("發生未知錯誤，請稍後再試"))
      );
    }
  },
  Vm = async (e) =>
    await re("/api/session/login", { method: "POST", body: { Data: e } }),
  Hm = (e) => (
    sessionStorage.setItem("user_session", JSON.stringify(e)),
    sessionStorage.setItem("loggedGUID", e.GUID || ""),
    sessionStorage.setItem("loggedEmployer", e.Employer || ""),
    sessionStorage.setItem("loggedID", e.ID || ""),
    sessionStorage.setItem("loggedName", e.Name || ""),
    sessionStorage.setItem("loggedTime", e.loginTime || ""),
    sessionStorage.setItem("loggedLevel", e.level || ""),
    e
  ),
  Bm = () => {
    sessionStorage.removeItem("user_session"),
      sessionStorage.removeItem("loggedGUID"),
      sessionStorage.removeItem("loggedEmployer"),
      sessionStorage.removeItem("loggedID"),
      sessionStorage.removeItem("loggedName"),
      sessionStorage.removeItem("loggedPassword"),
      sessionStorage.removeItem("loggedTime"),
      sessionStorage.removeItem("loggedLevel"),
      window.location.reload();
  },
  In = () => {
    const e = sessionStorage.getItem("user_session");
    if (!e) return null;
    try {
      const t = JSON.parse(e);
      if (!t.GUID || !t.ID || !t.Name) return null;
      if (t.loginTime)
        try {
          const r = new Date(t.loginTime).getTime();
          if ((new Date().getTime() - r) / (1e3 * 60 * 60) > 24) return null;
        } catch {
          console.warn("Invalid login time format:", t.loginTime);
        }
      return t;
    } catch (t) {
      return console.error("Failed to parse user session:", t), null;
    }
  },
  qm = () => !!In(),
  Dl = () => {
    const { t: e } = Ar();
    return n.jsxs("button", {
      onClick: Bm,
      className:
        "inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      children: [n.jsx(Mm, { className: "h-4 w-4 mr-2" }), e("logout")],
    });
  },
  _l = () => {
    const { language: e, toggleLanguage: t } = Ar();
    return n.jsxs("button", {
      onClick: t,
      className:
        "inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      children: [
        n.jsx(Im, { className: "h-4 w-4 mr-2" }),
        e === "zh" ? "繁體中文" : "English",
      ],
    });
  },
  Qm = async () =>
    await re("/api/controlpanel/get_by_startendtime_bbs", {
      method: "POST",
      body: {},
    }),
  Wm = (e) =>
    e.map((t, r) => ({
      id: t.GUID || `bulletin-${r}`,
      title: t.title || "無標題",
      content: t.content || "無內容",
      priority: Zm(t.priority || "medium"),
      publishDate: Jm(t.created_time) || new Date().toISOString(),
      author:
        `${t.creator_dept || ""} ${t.creator_name || ""}`.trim() ||
        "系統管理員",
    })),
  Gm = async (e) => {
    await re("/api/controlpanel/add", { method: "POST", body: { Data: e } });
  },
  Ym = async () =>
    await re("/api/controlpanel/get_bbs", { method: "POST", body: {} }),
  Km = async (e) => {
    await re("/api/controlpanel/update", { method: "POST", body: { Data: e } });
  },
  Xm = async (e) => {
    await re("/api/controlpanel/delete", {
      method: "POST",
      body: { Data: { GUID: e } },
    });
  },
  Jm = (e) => {
    if (!e) return null;
    try {
      const t = e.replace(/\//g, "-"),
        r = new Date(t);
      return isNaN(r.getTime())
        ? (console.warn("Invalid date format from API:", e), null)
        : r.toISOString();
    } catch (t) {
      return console.error("Error parsing API date:", e, t), null;
    }
  },
  Zm = (e) =>
    e
      ? e === "Critical"
        ? "high"
        : e === "Important"
        ? "medium"
        : e === "Normal"
        ? "low"
        : "medium"
      : "medium",
  Zs = async () =>
    await re("/api/med_page/get_med_cloud", { method: "POST", body: {} }),
  Ot = (e) => {
    const t = e.getFullYear(),
      r = String(e.getMonth() + 1).padStart(2, "0"),
      s = String(e.getDate()).padStart(2, "0"),
      l = String(e.getHours()).padStart(2, "0"),
      a = String(e.getMinutes()).padStart(2, "0"),
      i = String(e.getSeconds()).padStart(2, "0");
    return `${t}-${r}-${s} ${l}:${a}:${i}`;
  },
  e0 = async () => {
    const e = new Date(),
      t = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0),
      r = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59);
    return await re("/api/drugStotreDistribution/get_by_addedTime", {
      method: "POST",
      body: { ValueAry: [Ot(t), Ot(r)] },
    });
  },
  t0 = async () => {
    const e = new Date(),
      t = new Date(e.getFullYear(), e.getMonth() - 1, e.getDate(), 0, 0, 0),
      r = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59);
    return await re("/api/inspection/content_get_by_addTime", {
      method: "POST",
      body: { ValueAry: [Ot(t), Ot(r)] },
    });
  },
  r0 = async () => {
    const e = new Date(),
      t = new Date(e.getFullYear(), e.getMonth() - 1, e.getDate(), 0, 0, 0),
      r = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59);
    return await re("/api/inspection/content_get_by_addTime", {
      method: "POST",
      body: { ValueAry: [Ot(t), Ot(r)] },
    });
  },
  n0 = async () =>
    await re("/api/controlpanel/get_by_startendtime_MedNotice", {
      method: "POST",
      body: {},
    }),
  s0 = async () =>
    await re("/api/controlpanel/get_MedNotice", { method: "POST", body: {} }),
  l0 = async (e) =>
    await re("/api/controlpanel/add", { method: "POST", body: { Data: e } }),
  a0 = async (e) =>
    await re("/api/controlpanel/update", { method: "POST", body: { Data: e } }),
  i0 = async (e) =>
    await re("/api/controlpanel/delete", {
      method: "POST",
      body: { Data: { GUID: e } },
    }),
  o0 = async () =>
    await re("/api/controlpanel/get_by_startendtime_out_of_stock", {
      method: "POST",
      body: {},
    }),
  c0 = async () =>
    await re("/api/controlpanel/get_out_of_stock", {
      method: "POST",
      body: {},
    }),
  u0 = async (e) =>
    await re("/api/controlpanel/add", { method: "POST", body: { Data: e } }),
  d0 = async (e) =>
    await re("/api/controlpanel/update", { method: "POST", body: { Data: e } }),
  f0 = async (e) =>
    await re("/api/controlpanel/delete", {
      method: "POST",
      body: { Data: { GUID: e } },
    }),
  m0 = (e) =>
    e.map((t) => ({
      id: t.GUID || "",
      code: t.code || "",
      name: t.name || "",
      issuedQuantity: t.issuedQuantity || "0",
      actualIssuedQuantity: t.actualIssuedQuantity || "",
      destinationStoreType: t.destinationStoreType || "",
      state: t.state || "等待過帳",
      sourceStoreType: t.sourceStoreType,
      LOT: t.LOT,
      VAL: t.VAL,
      addedTime: t.addedTime,
      priority:
        t.state === "等待過帳"
          ? "high"
          : t.state === "已過帳"
          ? "medium"
          : "low",
    })),
  p0 = (e) =>
    e
      .map((t) => {
        const s = (t.Sub_content || [])
          .filter((l) => l.STATE != "已鎖定")
          .reduce((l, a) => {
            const i = parseFloat(a.END_QTY) || 0;
            return l + i;
          }, 0);
        return {
          id: t.GUID || "",
          code: t.CODE || "",
          name: t.NAME || "",
          quantity: s,
          supplier: t.BRD || "",
          priority: s > 0 ? "high" : "low",
        };
      })
      .filter((t) => t.quantity > 0),
  h0 = (e) => {
    const t = new Date(),
      r = new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0),
      s = new Date(t.getFullYear(), t.getMonth(), t.getDate(), 23, 59, 59);
    return e
      .map((l) => {
        const i = (l.Sub_content || [])
          .filter((o) => {
            if (o.STATE !== "已鎖定") return !1;
            try {
              const c = new Date(o.OP_TIME.replace(/\//g, "-"));
              return c >= r && c <= s;
            } catch {
              return !1;
            }
          })
          .reduce((o, c) => {
            const u = parseFloat(c.END_QTY) || 0;
            return +o + +u;
          }, 0);
        return {
          id: l.GUID || "",
          code: l.CODE || "",
          name: l.NAME || "",
          quantity: i,
          supplier: l.BRD || "",
          priority: i > 0 ? "medium" : "low",
        };
      })
      .filter((l) => l.quantity > 0);
  },
  g0 = (e) =>
    e
      .filter((t) => (t.Sub_content || []).length === 0)
      .map((t) => {
        const r = t.DELIVERY_TIME || "",
          s = new Date();
        let l = !1;
        if (r)
          try {
            l = new Date(r.replace(/\//g, "-")) < s;
          } catch {
            l = !1;
          }
        return {
          id: t.GUID || "",
          drugName: t.NAME || "",
          expectedArrivalDate: r,
          quantityOrdered: parseFloat(t.START_QTY) || 0,
          supplier: t.BRD || "",
          orderNumber: t.PON || "",
          status: l ? "delayed" : "ordered",
        };
      }),
  x0 = async () =>
    await re("/api/stock/get_stock_all_server", { method: "POST", body: {} }),
  y0 = (e) => {
    const t = new Map();
    e.forEach((s) => {
      const l = s.code || "";
      t.has(l) || t.set(l, []), t.get(l).push(s);
    });
    const r = [];
    return (
      t.forEach((s, l) => {
        const a = s[0],
          i = [],
          o = [],
          c = [],
          u = new Map();
        s.forEach((f) => {
          const x = f.serverName || "未知伺服器",
            v = f.qty || [],
            j = f.lot || [],
            k = f.expiry_date || [];
          i.push(...j), o.push(...k), c.push(...v);
          const g = v.reduce((h, N) => h + (Number(N) || 0), 0),
            p = u.get(x) || 0;
          u.set(x, p + g);
        });
        const d = c.reduce((f, x) => f + (Number(x) || 0), 0),
          m = Array.from(u.entries()).map(([f, x]) => ({
            serverName: f,
            qty: x,
          }));
        r.push({
          id: a.GUID || "",
          code: l,
          name: a.name || "",
          qty: c,
          lot: i,
          expiry_date: o,
          totalQuantity: d,
          batchCount: i.length,
          serverData: m,
        });
      }),
      r
    );
  },
  v0 = async () => {
    const e = new Date(),
      t = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0),
      r = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59);
    return await re("/api/materialRequisition/get_by_requestTime", {
      method: "POST",
      body: { ValueAry: [Ot(t), Ot(r)] },
    });
  },
  j0 = (e) =>
    e
      .filter((t) => t.state === "等待過帳")
      .map((t) => ({
        id: t.GUID || "",
        code: t.code || "",
        name: t.name || "",
        requestedQuantity: t.requestedQuantity || "0",
        requestingUnit: t.requestingUnit || "",
        requestingPerson: t.requestingPerson || "",
        requestTime: t.requestTime || "",
        actionType: t.actionType || "",
        state: t.state,
        remarks: t.remarks || void 0,
      })),
  w0 = (e) =>
    e.map((t, r) => {
      var o, c;
      const s = (t.content || "").split(";"),
        l = ((o = s[0]) == null ? void 0 : o.trim()) || "未知原藥品",
        a = ((c = s[1]) == null ? void 0 : c.trim()) || "未知替換藥品";
      let i;
      try {
        const u = t.created_time.replace(/\//g, "-");
        i = new Date(u).toISOString();
      } catch (u) {
        console.error("Error parsing created_time:", t.created_time, u),
          (i = new Date().toISOString());
      }
      return {
        id: t.GUID || `drug-replacement-${r}`,
        originalDrug: l,
        replacementDrug: a,
        reason: t.note || "無原因說明",
        effectiveDate: i,
        affectedDepartments: [],
        instructions: "",
        priority: "medium",
      };
    }),
  N0 = (e) =>
    e.map((t, r) => {
      let s;
      try {
        const d = t.created_time.replace(/\//g, "-");
        (s = new Date(d)),
          isNaN(s.getTime()) &&
            (console.warn("Invalid date format:", t.created_time),
            (s = new Date()));
      } catch (d) {
        console.error("Error parsing created_time:", t.created_time, d),
          (s = new Date());
      }
      const l = new Date(),
        a = new Date(s.getFullYear(), s.getMonth(), s.getDate()),
        i = new Date(l.getFullYear(), l.getMonth(), l.getDate()),
        o = i.getTime() - a.getTime(),
        c = Math.floor(o / (1e3 * 60 * 60 * 24));
      console.log("Out of stock calculation:", {
        originalTime: t.created_time,
        parsedDate: s,
        createdDateOnly: a,
        nowDateOnly: i,
        diffDays: c,
      });
      let u = "procurement_in_progress";
      return (
        t.priority === "Critical"
          ? (u = "urgent_order")
          : t.priority === "Important"
          ? (u = "procurement_in_progress")
          : (u = "supplier_contacted"),
        {
          id: t.GUID || `out-of-stock-${r}`,
          drugName: t.content || "未知藥品",
          departmentAffected: [],
          status: u,
          lastStockDate: s.toISOString(),
          estimatedRestockDate: void 0,
        }
      );
    }),
  b0 = async () => {
    await new Promise((d) => setTimeout(d, 500));
    const e = {};
    let t = [];
    try {
      const d = await Qm();
      if (d.Code === 200 && d.Data)
        (t = Wm(d.Data)),
          console.log(
            "[Dashboard] Bulletins loaded successfully:",
            t.length,
            "items"
          );
      else throw new Error(`API returned code ${d.Code}`);
    } catch (d) {
      console.error("[Dashboard] Error fetching bulletin data:", d),
        (e.bulletins = { hasError: !0, message: "公告欄資料載入失敗" }),
        (t = []);
    }
    let r = [];
    try {
      const d = await n0();
      if (d.Code === 200 && d.Data)
        (r = w0(d.Data)),
          console.log(
            "[Dashboard] Drug replacements loaded successfully:",
            r.length,
            "items"
          );
      else throw new Error(`API returned code ${d.Code}`);
    } catch (d) {
      console.error("[Dashboard] Error fetching drug replacement data:", d),
        (e.drugReplacements = {
          hasError: !0,
          message: "藥品替換資料載入失敗",
        }),
        (r = []);
    }
    let s = [];
    try {
      const d = await o0();
      if (d.Code === 200 && d.Data)
        (s = N0(d.Data)),
          console.log(
            "[Dashboard] Out of stock items loaded successfully:",
            s.length,
            "items"
          );
      else throw new Error(`API returned code ${d.Code}`);
    } catch (d) {
      console.error("[Dashboard] Error fetching out of stock data:", d),
        (e.outOfStock = { hasError: !0, message: "缺貨清單資料載入失敗" }),
        (s = []);
    }
    let l = [];
    try {
      const d = await e0();
      if (d.Code === 200 && d.Data)
        (l = m0(d.Data)),
          console.log(
            "[Dashboard] Restock tasks loaded successfully:",
            l.length,
            "items"
          );
      else throw new Error(`API returned code ${d.Code}`);
    } catch (d) {
      console.error("[Dashboard] Error fetching restock tasks data:", d),
        e.tasks || (e.tasks = { hasError: !0, message: "" }),
        (e.tasks.message =
          (e.tasks.message ? e.tasks.message + "、" : "") + "撥補任務載入失敗"),
        (e.tasks.hasError = !0),
        (l = []);
    }
    let a = [],
      i = [];
    try {
      const d = await r0();
      if (d.Code === 200 && d.Data)
        (a = p0(d.Data)),
          (i = h0(d.Data)),
          console.log(
            "[Dashboard] Receiving tasks loaded successfully:",
            a.length,
            "items"
          ),
          console.log(
            "[Dashboard] Put away tasks loaded successfully:",
            i.length,
            "items"
          );
      else throw new Error(`API returned code ${d.Code}`);
    } catch (d) {
      console.error(
        "[Dashboard] Error fetching receiving and putaway tasks data:",
        d
      ),
        e.tasks || (e.tasks = { hasError: !0, message: "" }),
        (e.tasks.message =
          (e.tasks.message ? e.tasks.message + "、" : "") +
          "驗收與歸貨任務載入失敗"),
        (e.tasks.hasError = !0),
        (a = []),
        (i = []);
    }
    let o = [];
    try {
      const d = await v0();
      if (d.Code === 200 && d.Data)
        (o = j0(d.Data)),
          console.log(
            "[Dashboard] Internal requests loaded successfully:",
            o.length,
            "items"
          );
      else throw new Error(`API returned code ${d.Code}`);
    } catch (d) {
      console.error("[Dashboard] Error fetching internal requests data:", d),
        (e.internalRequests = {
          hasError: !0,
          message: "內部申請資料載入失敗",
        }),
        (o = []);
    }
    let c = [];
    try {
      const d = await t0();
      if (d.Code === 200 && d.Data)
        (c = g0(d.Data)),
          console.log(
            "[Dashboard] Incoming drugs loaded successfully:",
            c.length,
            "items"
          );
      else throw new Error(`API returned code ${d.Code}`);
    } catch (d) {
      console.error("[Dashboard] Error fetching incoming drugs data:", d),
        (e.incomingDrugs = { hasError: !0, message: "未到貨監控資料載入失敗" }),
        (c = []);
    }
    let u = [];
    try {
      const d = await x0();
      if (d.Code === 200 && d.Data)
        (u = y0(d.Data)),
          console.log(
            "[Dashboard] Inventory highlights loaded successfully:",
            u.length,
            "items"
          );
      else throw new Error(`API returned code ${d.Code}`);
    } catch (d) {
      console.error("[Dashboard] Error fetching stock all server data:", d),
        (e.inventory = { hasError: !0, message: "庫存重點資料載入失敗" }),
        (u = []);
    }
    return {
      bulletins: t,
      restockTasks: l,
      receivingTasks: a,
      putAwayTasks: i,
      incomingDrugs: c,
      outOfStockItems: s,
      drugReplacements: r,
      inventoryHighlights: u,
      internalRequests: o,
      lastUpdated: new Date().toISOString(),
      errors: Object.keys(e).length > 0 ? e : void 0,
    };
  },
  vt = {
    title: "text-[32px] fhd:text-[32px] qhd:text-[48px] uhd:text-[64px]",
    subTitle: "text-[20px] fhd:text-[20px] qhd:text-[32px] uhd:text-[48px]",
    content: "text-[16px] fhd:text-[16px] qhd:text-[24px] uhd:text-[32px]",
    smallLabel: "text-[14px] fhd:text-[14px] qhd:text-[20px] uhd:text-[24px]",
  },
  Eo = {
    small: "uhd:w-5 uhd:h-5 qhd:w-4 qhd:h-4",
    medium: "uhd:w-6 uhd:h-6 qhd:w-5 qhd:h-5",
    large: "uhd:w-8 uhd:h-8 qhd:w-6 qhd:h-6",
    xlarge: "uhd:w-10 uhd:h-10 qhd:w-8 qhd:h-8",
  },
  S0 = () => ({
    bulletins: { position: { master_row: 0, master_col: 0 }, row: 2, col: 3 },
    tasks: { position: { master_row: 0, master_col: 3 }, row: 2, col: 3 },
    incomingDrugs: {
      position: { master_row: 0, master_col: 6 },
      row: 2,
      col: 2,
    },
    outOfStock: { position: { master_row: 2, master_col: 0 }, row: 2, col: 3 },
    drugReplacements: {
      position: { master_row: 2, master_col: 3 },
      row: 2,
      col: 3,
    },
    inventory: { position: { master_row: 2, master_col: 6 }, row: 2, col: 2 },
    internalRequests: {
      position: { master_row: 4, master_col: 0 },
      row: 2,
      col: 8,
    },
  }),
  k0 = () => ({
    bulletins: !0,
    tasks: !0,
    incomingDrugs: !0,
    outOfStock: !0,
    drugReplacements: !0,
    inventory: !0,
    internalRequests: !0,
  }),
  C0 = () => {
    try {
      const e = localStorage.getItem("section_grid_position");
      if (e) {
        const t = JSON.parse(e);
        if (z0(t)) return t;
      }
    } catch (e) {
      console.error("Error loading grid config:", e);
    }
    return S0();
  },
  E0 = () => {
    try {
      const e = localStorage.getItem("section_visibility");
      if (e) {
        const t = JSON.parse(e);
        if (T0(t)) return t;
      }
    } catch (e) {
      console.error("Error loading section visibility:", e);
    }
    return k0();
  },
  D0 = (e) => {
    try {
      localStorage.setItem("section_grid_position", JSON.stringify(e));
    } catch (t) {
      console.error("Error saving grid config:", t);
    }
  },
  _0 = (e) => {
    try {
      localStorage.setItem("section_visibility", JSON.stringify(e));
    } catch (t) {
      console.error("Error saving section visibility:", t);
    }
  },
  z0 = (e) => {
    const t = [
      "bulletins",
      "tasks",
      "incomingDrugs",
      "outOfStock",
      "drugReplacements",
      "inventory",
      "internalRequests",
    ];
    if (!e || typeof e != "object") return !1;
    for (const r of t) {
      const s = e[r];
      if (
        !s ||
        !s.position ||
        typeof s.position.master_row != "number" ||
        typeof s.position.master_col != "number" ||
        typeof s.row != "number" ||
        typeof s.col != "number"
      )
        return !1;
    }
    return !0;
  },
  T0 = (e) => {
    const t = [
      "bulletins",
      "tasks",
      "incomingDrugs",
      "outOfStock",
      "drugReplacements",
      "inventory",
      "internalRequests",
    ];
    if (!e || typeof e != "object") return !1;
    for (const r of t) if (typeof e[r] != "boolean") return !1;
    return !0;
  },
  $t = (e, t) => {
    const r = e.master_row + 1,
      s = e.master_col + 1,
      l = r + t.row,
      a = s + t.col;
    return `${r} / ${s} / ${l} / ${a}`;
  },
  Ut = ({
    children: e,
    sectionKey: t,
    gridData: r,
    onPositionChange: s,
    onSizeChange: l,
    gridArea: a,
  }) => {
    const [i, o] = w.useState(!1),
      [c, u] = w.useState(!1),
      [d, m] = w.useState(null),
      [f, x] = w.useState(null),
      v = w.useRef(null),
      j = w.useCallback(
        (h) => {
          h.preventDefault(),
            h.stopPropagation(),
            o(!0),
            m({
              x: h.clientX,
              y: h.clientY,
              startRow: r.position.master_row,
              startCol: r.position.master_col,
            });
        },
        [r.position]
      ),
      k = w.useCallback(
        (h) => {
          h.preventDefault(),
            h.stopPropagation(),
            u(!0),
            x({ x: h.clientX, y: h.clientY, startRow: r.row, startCol: r.col });
        },
        [r.row, r.col]
      ),
      g = w.useCallback(
        (h) => {
          if (i && d && v.current) {
            const N = h.clientX - d.x,
              _ = h.clientY - d.y,
              D = v.current.parentElement;
            if (D) {
              const T = D.getBoundingClientRect(),
                E = (T.width - 7 * 16) / 8,
                y = (T.height - 5 * 16) / 6,
                b = Math.round(N / (E + 16)),
                I = Math.round(_ / (y + 16)),
                P = Math.max(0, Math.min(8 - r.col, d.startCol + b)),
                A = Math.max(0, Math.min(6 - r.row, d.startRow + I));
              (A !== r.position.master_row || P !== r.position.master_col) &&
                s(t, { master_row: A, master_col: P });
            }
          }
          if (c && f && v.current) {
            const N = h.clientX - f.x,
              _ = h.clientY - f.y,
              D = v.current.parentElement;
            if (D) {
              const T = D.getBoundingClientRect(),
                E = (T.width - 7 * 16) / 8,
                y = (T.height - 5 * 16) / 6,
                b = Math.round(N / (E + 16)),
                I = Math.round(_ / (y + 16)),
                P = Math.max(
                  1,
                  Math.min(8 - r.position.master_col, f.startCol + b)
                ),
                A = Math.max(
                  1,
                  Math.min(6 - r.position.master_row, f.startRow + I)
                );
              (A !== r.row || P !== r.col) && l(t, { row: A, col: P });
            }
          }
        },
        [i, c, d, f, r, s, l, t]
      ),
      p = w.useCallback(() => {
        o(!1), u(!1), m(null), x(null);
      }, []);
    return (
      Te.useEffect(() => {
        if (i || c)
          return (
            document.addEventListener("mousemove", g),
            document.addEventListener("mouseup", p),
            (document.body.style.cursor = i ? "grabbing" : "nw-resize"),
            (document.body.style.userSelect = "none"),
            (document.body.style.pointerEvents = "none"),
            v.current && (v.current.style.pointerEvents = "auto"),
            () => {
              document.removeEventListener("mousemove", g),
                document.removeEventListener("mouseup", p),
                (document.body.style.cursor = "auto"),
                (document.body.style.userSelect = "auto"),
                (document.body.style.pointerEvents = "auto");
            }
          );
      }, [i, c, g, p]),
      n.jsxs("div", {
        ref: v,
        className: `relative bg-white rounded-xl shadow-lg border border-gray-200 h-full flex flex-col min-h-0 max-h-full overflow-hidden transition-all duration-200 ${
          i || c ? "z-50 shadow-2xl scale-105" : "z-10"
        }`,
        style: { gridArea: a },
        children: [
          n.jsxs("div", {
            className: `absolute top-0 left-0 right-0 h-12 cursor-move z-20 flex items-center justify-center transition-opacity bg-blue-500 bg-opacity-20 rounded-t-xl ${
              i ? "opacity-100" : "opacity-0 hover:opacity-100"
            }`,
            onMouseDown: j,
            children: [
              n.jsx(Om, { size: 20, className: "text-blue-600" }),
              n.jsx("span", {
                className: `ml-2 text-blue-600 font-medium ${vt.smallLabel}`,
                children: "拖拽移動",
              }),
            ],
          }),
          n.jsx("div", {
            className: `absolute bottom-2 right-2 w-6 h-6 cursor-nw-resize z-20 flex items-center justify-center transition-opacity bg-gray-500 bg-opacity-20 rounded ${
              c ? "opacity-100" : "opacity-0 hover:opacity-100"
            }`,
            onMouseDown: k,
            children: n.jsx(Qu, { size: 16, className: "text-gray-600" }),
          }),
          n.jsx("div", { className: "flex-1 min-h-0 relative", children: e }),
          (i || c) &&
            n.jsxs("div", {
              className:
                "absolute top-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs font-mono z-30",
              children: [
                "(",
                r.position.master_row,
                ",",
                r.position.master_col,
                ") ",
                r.row,
                "×",
                r.col,
              ],
            }),
        ],
      })
    );
  },
  X = ({ size: e = "medium", className: t = "" }) => {
    const r = {
      small: "w-4 h-4 border-[2px]",
      medium: "w-8 h-8 border-[3px]",
      large: "w-12 h-12 border-[4px]",
    };
    return n.jsx("div", {
      className: `${r[e]} ${t} rounded-full border-blue-300 border-t-blue-600 animate-spin`,
    });
  },
  I0 = ({ isOpen: e, onClose: t, onSuccess: r }) => {
    Ar();
    const [s, l] = w.useState({
        title: "",
        content: "",
        priority: "Normal",
        start_time: "",
        end_time: "",
      }),
      [a, i] = w.useState(!1),
      [o, c] = w.useState(null);
    Te.useEffect(() => {
      if (e) {
        const x = new Date(),
          v = x.toISOString().slice(0, 16),
          j = new Date(x);
        j.setMonth(j.getMonth() + 1);
        const k = j.toISOString().slice(0, 16);
        l({
          title: "",
          content: "",
          priority: "Normal",
          start_time: v,
          end_time: k,
        }),
          c(null);
      }
    }, [e]);
    const u = (x, v) => {
        l((j) => ({ ...j, [x]: v }));
      },
      d = () => {
        if (!s.title.trim()) return "請輸入主旨";
        if (!s.content.trim()) return "請輸入內容";
        if (!s.start_time) return "請選擇開始時間";
        if (!s.end_time) return "請選擇結束時間";
        const x = new Date(s.start_time);
        return new Date(s.end_time) <= x ? "結束時間必須晚於開始時間" : null;
      },
      m = async () => {
        c(null);
        const x = d();
        if (x) {
          c(x);
          return;
        }
        const v = In();
        if (!v) {
          c("無法獲取使用者資訊，請重新登入");
          return;
        }
        i(!0);
        try {
          const j = (g) => g.replace("T", " ") + ":00",
            k = {
              title: s.title.trim(),
              content: s.content.trim(),
              priority: s.priority,
              creator_dept: v.Employer || "",
              creator_name: v.Name || "",
              start_time: j(s.start_time),
              end_time: j(s.end_time),
            };
          await Gm(k), r(), t();
        } catch (j) {
          c(j instanceof Error ? j.message : "新增公告失敗，請稍後再試");
        } finally {
          i(!1);
        }
      },
      f = () => {
        a || t();
      };
    return e
      ? n.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
          children: n.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
            children: [
              n.jsxs("div", {
                className:
                  "flex items-center justify-between p-6 border-b border-gray-200",
                children: [
                  n.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      n.jsx(ht, { size: 24, className: "text-blue-600 mr-3" }),
                      n.jsx("h2", {
                        className: "text-xl font-semibold text-gray-800",
                        children: "新增公告",
                      }),
                    ],
                  }),
                  n.jsx("button", {
                    onClick: f,
                    disabled: a,
                    className:
                      "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                    children: n.jsx(Re, { size: 20 }),
                  }),
                ],
              }),
              n.jsxs("div", {
                className: "p-6 space-y-6",
                children: [
                  o &&
                    n.jsxs("div", {
                      className:
                        "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center",
                      children: [
                        n.jsx(qe, {
                          size: 20,
                          className: "mr-2 flex-shrink-0",
                        }),
                        o,
                      ],
                    }),
                  n.jsxs("div", {
                    children: [
                      n.jsxs("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: [
                          "主旨 ",
                          n.jsx("span", {
                            className: "text-red-500",
                            children: "*",
                          }),
                        ],
                      }),
                      n.jsx("input", {
                        type: "text",
                        value: s.title,
                        onChange: (x) => u("title", x.target.value),
                        disabled: a,
                        className:
                          "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                        placeholder: "請輸入公告主旨",
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    children: [
                      n.jsxs("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: [
                          "內容 ",
                          n.jsx("span", {
                            className: "text-red-500",
                            children: "*",
                          }),
                        ],
                      }),
                      n.jsx("textarea", {
                        value: s.content,
                        onChange: (x) => u("content", x.target.value),
                        disabled: a,
                        rows: 6,
                        className:
                          "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical disabled:opacity-50 disabled:bg-gray-100",
                        placeholder: "請輸入公告內容",
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    children: [
                      n.jsxs("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: [
                          "重要程度 ",
                          n.jsx("span", {
                            className: "text-red-500",
                            children: "*",
                          }),
                        ],
                      }),
                      n.jsxs("select", {
                        value: s.priority,
                        onChange: (x) => u("priority", x.target.value),
                        disabled: a,
                        className:
                          "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                        children: [
                          n.jsx("option", {
                            value: "Normal",
                            children: "一般",
                          }),
                          n.jsx("option", {
                            value: "Important",
                            children: "重要",
                          }),
                          n.jsx("option", {
                            value: "Critical",
                            children: "緊急",
                          }),
                        ],
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                    children: [
                      n.jsxs("div", {
                        children: [
                          n.jsxs("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: [
                              "開始時間 ",
                              n.jsx("span", {
                                className: "text-red-500",
                                children: "*",
                              }),
                            ],
                          }),
                          n.jsx("input", {
                            type: "datetime-local",
                            value: s.start_time,
                            onChange: (x) => u("start_time", x.target.value),
                            disabled: a,
                            className:
                              "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        children: [
                          n.jsxs("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: [
                              "結束時間 ",
                              n.jsx("span", {
                                className: "text-red-500",
                                children: "*",
                              }),
                            ],
                          }),
                          n.jsx("input", {
                            type: "datetime-local",
                            value: s.end_time,
                            onChange: (x) => u("end_time", x.target.value),
                            disabled: a,
                            className:
                              "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              n.jsxs("div", {
                className:
                  "flex items-center justify-end space-x-4 p-6 border-t border-gray-200 bg-gray-50",
                children: [
                  n.jsx("button", {
                    onClick: f,
                    disabled: a,
                    className:
                      "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                    children: "取消",
                  }),
                  n.jsx("button", {
                    onClick: m,
                    disabled: a || !s.title.trim() || !s.content.trim(),
                    className:
                      "flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                    children: a
                      ? n.jsxs(n.Fragment, {
                          children: [
                            n.jsx(X, { size: "small", className: "mr-2" }),
                            "新增中...",
                          ],
                        })
                      : n.jsxs(n.Fragment, {
                          children: [
                            n.jsx(ht, { size: 16, className: "mr-2" }),
                            "新增公告",
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
  P0 = ({ isOpen: e, onClose: t, onSuccess: r }) => {
    Ar();
    const [s, l] = w.useState([]),
      [a, i] = w.useState(!1),
      [o, c] = w.useState(null),
      [u, d] = w.useState(null),
      [m, f] = w.useState(!1),
      [x, v] = w.useState(!1),
      [j, k] = w.useState(!1);
    w.useEffect(() => {
      e && g();
    }, [e]);
    const g = async () => {
        i(!0), c(null);
        try {
          const y = await Ym();
          if (y.Code === 200) l(y.Data || []);
          else throw new Error(y.Result || "載入歷史公告失敗");
        } catch (y) {
          c(y instanceof Error ? y.message : "載入歷史公告時發生錯誤");
        } finally {
          i(!1);
        }
      },
      p = (y) => {
        const b = (I) => {
          if (!I) return "";
          try {
            const P = I.replace(/\//g, "-");
            return new Date(P).toISOString().slice(0, 16);
          } catch (P) {
            return console.error("Error formatting date for input:", I, P), "";
          }
        };
        d({
          GUID: y.GUID,
          title: y.title || "",
          content: y.content || "",
          priority: y.priority || "Normal",
          creator_dept: y.creator_dept || "",
          creator_name: y.creator_name || "",
          start_time: b(y.start_time),
          end_time: b(y.end_time),
          created_time: y.created_time || "",
        });
      },
      h = async () => {
        if (u) {
          f(!0), c(null);
          try {
            const y = (I) =>
                I ? I.replace("T", " ").replace(/-/g, "/") + ":00" : "",
              b = {
                GUID: u.GUID,
                title: u.title.trim(),
                content: u.content.trim(),
                priority: u.priority,
                creator_dept: u.creator_dept,
                creator_name: u.creator_name,
                start_time: y(u.start_time),
                end_time: y(u.end_time),
              };
            await Km(b), await g(), d(null), r && r();
          } catch (y) {
            c(y instanceof Error ? y.message : "更新公告失敗，請稍後再試");
          } finally {
            f(!1);
          }
        }
      },
      N = async () => {
        if (u) {
          k(!0), c(null), v(!1);
          try {
            await Xm(u.GUID), await g(), d(null), r && r();
          } catch (y) {
            c(y instanceof Error ? y.message : "刪除公告失敗，請稍後再試");
          } finally {
            k(!1);
          }
        }
      },
      _ = (y) => {
        if (!y) return "-";
        try {
          const b = y.replace(/\//g, "-");
          return new Date(b).toLocaleString("zh-TW", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: !1,
          });
        } catch {
          return y;
        }
      },
      D = (y) => {
        switch (y) {
          case "Critical":
            return "緊急";
          case "Important":
            return "重要";
          case "Normal":
            return "一般";
          default:
            return y || "一般";
        }
      },
      T = (y) => {
        switch (y) {
          case "Critical":
            return "bg-red-100 text-red-800";
          case "Important":
            return "bg-yellow-100 text-yellow-800";
          case "Normal":
            return "bg-green-100 text-green-800";
          default:
            return "bg-gray-100 text-gray-800";
        }
      },
      E = () => {
        !a && !m && !j && (d(null), v(!1), t());
      };
    return e
      ? n.jsxs("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
          children: [
            n.jsxs("div", {
              className:
                "bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto",
              children: [
                n.jsxs("div", {
                  className:
                    "flex items-center justify-between p-6 border-b border-gray-200",
                  children: [
                    n.jsxs("div", {
                      className: "flex items-center",
                      children: [
                        n.jsx(pt, {
                          size: 24,
                          className: "text-blue-600 mr-3",
                        }),
                        n.jsx("h2", {
                          className: "text-xl font-semibold text-gray-800",
                          children: "歷史公告",
                        }),
                      ],
                    }),
                    n.jsx("button", {
                      onClick: E,
                      disabled: a || m,
                      className:
                        "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                      children: n.jsx(Re, { size: 20 }),
                    }),
                  ],
                }),
                n.jsxs("div", {
                  className: "p-6",
                  children: [
                    o &&
                      n.jsxs("div", {
                        className:
                          "mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center",
                        children: [
                          n.jsx(qe, {
                            size: 20,
                            className: "mr-2 flex-shrink-0",
                          }),
                          o,
                        ],
                      }),
                    a
                      ? n.jsxs("div", {
                          className: "flex items-center justify-center py-12",
                          children: [
                            n.jsx(X, { size: "large" }),
                            n.jsx("span", {
                              className: "ml-3 text-gray-500",
                              children: "載入歷史公告中...",
                            }),
                          ],
                        })
                      : s.length === 0
                      ? n.jsxs("div", {
                          className: "text-center text-gray-500 py-12",
                          children: [
                            n.jsx(pt, {
                              size: 48,
                              className: "mx-auto text-gray-300 mb-2",
                            }),
                            n.jsx("p", { children: "暫無歷史公告" }),
                          ],
                        })
                      : n.jsx("div", {
                          className: "overflow-x-auto",
                          children: n.jsx("div", {
                            className: "max-h-96 overflow-y-auto",
                            children: n.jsxs("table", {
                              className: "min-w-full divide-y divide-gray-200",
                              children: [
                                n.jsx("thead", {
                                  className: "bg-gray-50 sticky top-0 z-10",
                                  children: n.jsxs("tr", {
                                    children: [
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "建立時間",
                                      }),
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "主旨",
                                      }),
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "內容",
                                      }),
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "重要程度",
                                      }),
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "發布人員",
                                      }),
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "開始時間",
                                      }),
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "結束時間",
                                      }),
                                    ],
                                  }),
                                }),
                                n.jsx("tbody", {
                                  className:
                                    "bg-white divide-y divide-gray-200",
                                  children: s.map((y) =>
                                    n.jsxs(
                                      "tr",
                                      {
                                        className:
                                          "hover:bg-blue-50 cursor-pointer transition-colors",
                                        onClick: () => p(y),
                                        title: "點擊編輯此公告",
                                        children: [
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: _(y.created_time),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 text-sm text-gray-900 max-w-xs",
                                            children: n.jsx("div", {
                                              className: "truncate",
                                              title: y.title,
                                              children: y.title || "-",
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 text-sm text-gray-900 max-w-md",
                                            children: n.jsx("div", {
                                              className: "truncate",
                                              title: y.content,
                                              children: y.content || "-",
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap",
                                            children: n.jsx("span", {
                                              className: `px-2 py-1 rounded-full text-xs font-medium ${T(
                                                y.priority
                                              )}`,
                                              children: D(y.priority),
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children:
                                              `${y.creator_dept || ""} ${
                                                y.creator_name || ""
                                              }`.trim() || "-",
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: _(y.start_time),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: _(y.end_time),
                                          }),
                                        ],
                                      },
                                      y.GUID
                                    )
                                  ),
                                }),
                              ],
                            }),
                          }),
                        }),
                  ],
                }),
              ],
            }),
            u &&
              n.jsx("div", {
                className:
                  "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4",
                children: n.jsxs("div", {
                  className:
                    "bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
                  children: [
                    n.jsxs("div", {
                      className:
                        "flex items-center justify-between p-6 border-b border-gray-200",
                      children: [
                        n.jsxs("div", {
                          className: "flex items-center",
                          children: [
                            n.jsx(Pr, {
                              size: 24,
                              className: "text-green-600 mr-3",
                            }),
                            n.jsx("h2", {
                              className: "text-xl font-semibold text-gray-800",
                              children: "編輯公告",
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            n.jsxs("button", {
                              onClick: () => v(!0),
                              disabled: m || j,
                              className:
                                "flex items-center px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                              title: "刪除公告",
                              children: [
                                n.jsx(ct, { size: 16, className: "mr-2" }),
                                "刪除",
                              ],
                            }),
                            n.jsx("button", {
                              onClick: () => d(null),
                              disabled: m || j,
                              className:
                                "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                              children: n.jsx(Re, { size: 20 }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    n.jsxs("div", {
                      className: "p-6 space-y-6",
                      children: [
                        n.jsxs("div", {
                          children: [
                            n.jsxs("label", {
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: [
                                "主旨 ",
                                n.jsx("span", {
                                  className: "text-red-500",
                                  children: "*",
                                }),
                              ],
                            }),
                            n.jsx("input", {
                              type: "text",
                              value: u.title,
                              onChange: (y) =>
                                d({ ...u, title: y.target.value }),
                              disabled: m,
                              className:
                                "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          children: [
                            n.jsxs("label", {
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: [
                                "內容 ",
                                n.jsx("span", {
                                  className: "text-red-500",
                                  children: "*",
                                }),
                              ],
                            }),
                            n.jsx("textarea", {
                              value: u.content,
                              onChange: (y) =>
                                d({ ...u, content: y.target.value }),
                              disabled: m,
                              rows: 6,
                              className:
                                "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical disabled:opacity-50 disabled:bg-gray-100",
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          children: [
                            n.jsxs("label", {
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: [
                                "重要程度 ",
                                n.jsx("span", {
                                  className: "text-red-500",
                                  children: "*",
                                }),
                              ],
                            }),
                            n.jsxs("select", {
                              value: u.priority,
                              onChange: (y) =>
                                d({ ...u, priority: y.target.value }),
                              disabled: m,
                              className:
                                "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                              children: [
                                n.jsx("option", {
                                  value: "Normal",
                                  children: "一般",
                                }),
                                n.jsx("option", {
                                  value: "Important",
                                  children: "重要",
                                }),
                                n.jsx("option", {
                                  value: "Critical",
                                  children: "緊急",
                                }),
                              ],
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                          children: [
                            n.jsxs("div", {
                              children: [
                                n.jsxs("label", {
                                  className:
                                    "block text-sm font-medium text-gray-700 mb-2",
                                  children: [
                                    "開始時間 ",
                                    n.jsx("span", {
                                      className: "text-red-500",
                                      children: "*",
                                    }),
                                  ],
                                }),
                                n.jsx("input", {
                                  type: "datetime-local",
                                  value: u.start_time,
                                  onChange: (y) =>
                                    d({ ...u, start_time: y.target.value }),
                                  disabled: m,
                                  className:
                                    "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              children: [
                                n.jsxs("label", {
                                  className:
                                    "block text-sm font-medium text-gray-700 mb-2",
                                  children: [
                                    "結束時間 ",
                                    n.jsx("span", {
                                      className: "text-red-500",
                                      children: "*",
                                    }),
                                  ],
                                }),
                                n.jsx("input", {
                                  type: "datetime-local",
                                  value: u.end_time,
                                  onChange: (y) =>
                                    d({ ...u, end_time: y.target.value }),
                                  disabled: m,
                                  className:
                                    "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    n.jsxs("div", {
                      className:
                        "flex items-center justify-end space-x-4 p-6 border-t border-gray-200 bg-gray-50",
                      children: [
                        n.jsx("button", {
                          onClick: () => d(null),
                          disabled: m || j,
                          className:
                            "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        n.jsx("button", {
                          onClick: h,
                          disabled:
                            m || j || !u.title.trim() || !u.content.trim(),
                          className:
                            "flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                          children:
                            m || j
                              ? n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(X, {
                                      size: "small",
                                      className: "mr-2",
                                    }),
                                    m ? "更新中..." : "處理中...",
                                  ],
                                })
                              : n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(Pr, { size: 16, className: "mr-2" }),
                                    "更新公告",
                                  ],
                                }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            x &&
              u &&
              n.jsx("div", {
                className:
                  "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[110] p-4",
                children: n.jsx("div", {
                  className: "bg-white rounded-lg shadow-xl max-w-md w-full",
                  children: n.jsxs("div", {
                    className: "p-6",
                    children: [
                      n.jsxs("div", {
                        className: "flex items-center mb-4",
                        children: [
                          n.jsx(ct, {
                            size: 24,
                            className: "text-red-600 mr-3",
                          }),
                          n.jsx("h3", {
                            className: "text-lg font-semibold text-gray-800",
                            children: "確認刪除公告",
                          }),
                        ],
                      }),
                      n.jsxs("p", {
                        className: "text-gray-600 mb-2",
                        children: ["您確定要刪除公告「", u.title, "」嗎？"],
                      }),
                      n.jsx("p", {
                        className: "text-sm text-red-600 mb-6",
                        children: "此操作無法復原，請謹慎操作。",
                      }),
                      n.jsxs("div", {
                        className: "flex items-center justify-end space-x-4",
                        children: [
                          n.jsx("button", {
                            onClick: () => v(!1),
                            disabled: j,
                            className:
                              "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                            children: "取消",
                          }),
                          n.jsx("button", {
                            onClick: N,
                            disabled: j,
                            className:
                              "flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                            children: j
                              ? n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(X, {
                                      size: "small",
                                      className: "mr-2",
                                    }),
                                    "刪除中...",
                                  ],
                                })
                              : n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(ct, { size: 16, className: "mr-2" }),
                                    "確認刪除",
                                  ],
                                }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
          ],
        })
      : null;
  },
  M0 = ({
    bulletins: e,
    onBulletinAdded: t,
    showInFocus: r = !0,
    onFocusToggle: s,
  }) => {
    const [l, a] = Te.useState(!1),
      [i, o] = Te.useState(!1),
      c = (x) => {
        switch (x) {
          case "high":
            return "border-l-red-500 bg-red-50";
          case "medium":
            return "border-l-yellow-500 bg-yellow-50";
          case "low":
            return "border-l-green-500 bg-green-50";
          default:
            return "border-l-gray-500 bg-gray-50";
        }
      },
      u = (x) => {
        switch (x) {
          case "high":
            return "bg-red-100 text-red-800";
          case "medium":
            return "bg-yellow-100 text-yellow-800";
          case "low":
            return "bg-green-100 text-green-800";
          default:
            return "bg-gray-100 text-gray-800";
        }
      },
      d = (x) =>
        new Date(x).toLocaleString("zh-TW", {
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        }),
      m = () => {
        t && t();
      },
      f = () => {
        t && t();
      };
    return n.jsxs(n.Fragment, {
      children: [
        n.jsxs("div", {
          className:
            "bg-white rounded-lg shadow-sm border border-gray-200 h-full flex flex-col",
          children: [
            n.jsx("div", {
              className: "p-4 border-b border-gray-200",
              children: n.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  n.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      n.jsx(an, { size: 20, className: "text-blue-600 mr-2" }),
                      n.jsx("h3", {
                        className: "text-lg font-semibold text-gray-800",
                        children: "公告欄",
                      }),
                      s &&
                        n.jsxs("div", {
                          className: "ml-4 flex items-center",
                          children: [
                            n.jsxs("label", {
                              className:
                                "relative inline-flex items-center cursor-pointer",
                              children: [
                                n.jsx("input", {
                                  type: "checkbox",
                                  className: "sr-only peer",
                                  checked: r,
                                  onChange: (x) => s(x.target.checked),
                                }),
                                n.jsx("div", {
                                  className:
                                    "w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600",
                                }),
                              ],
                            }),
                            n.jsx("span", {
                              className: "ml-2 text-xs text-gray-500",
                              children: "專注顯示",
                            }),
                          ],
                        }),
                    ],
                  }),
                  n.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [
                      n.jsxs("button", {
                        onClick: () => o(!0),
                        className:
                          "flex items-center px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors text-sm",
                        children: [
                          n.jsx(pt, { size: 16, className: "mr-2" }),
                          "查看歷史",
                        ],
                      }),
                      n.jsxs("button", {
                        onClick: () => a(!0),
                        className:
                          "flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors text-sm",
                        children: [
                          n.jsx(ht, { size: 16, className: "mr-2" }),
                          "新增項目",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            n.jsx("div", {
              className: "p-4 space-y-3 max-h-[400px] overflow-y-auto flex-1",
              children:
                e.length === 0
                  ? n.jsxs("div", {
                      className: "text-center text-gray-500 py-8",
                      children: [
                        n.jsx(an, {
                          size: 48,
                          className: "mx-auto text-gray-300 mb-2",
                        }),
                        n.jsx("p", { children: "暫無公告" }),
                      ],
                    })
                  : e.map((x) =>
                      n.jsxs(
                        "div",
                        {
                          className: `p-3 rounded-lg ${c(x.priority)}`,
                          children: [
                            n.jsxs("div", {
                              className:
                                "flex items-start justify-between mb-2",
                              children: [
                                n.jsx("h4", {
                                  className: "font-medium text-gray-800 flex-1",
                                  children: x.title,
                                }),
                                n.jsx("span", {
                                  className: `px-2 py-1 rounded-full text-xs font-medium ${u(
                                    x.priority
                                  )}`,
                                  children:
                                    x.priority === "high"
                                      ? "緊急"
                                      : x.priority === "medium"
                                      ? "重要"
                                      : "一般",
                                }),
                              ],
                            }),
                            n.jsx("p", {
                              className:
                                "text-gray-700 text-sm mb-3 leading-relaxed whitespace-pre-line",
                              children: x.content,
                            }),
                            n.jsxs("div", {
                              className:
                                "flex items-center justify-between text-xs text-gray-500",
                              children: [
                                n.jsxs("div", {
                                  className: "flex items-center",
                                  children: [
                                    n.jsx(Js, { size: 12, className: "mr-1" }),
                                    n.jsx("span", { children: x.author }),
                                  ],
                                }),
                                n.jsxs("div", {
                                  className: "flex items-center",
                                  children: [
                                    n.jsx(Lr, { size: 12, className: "mr-1" }),
                                    n.jsx("span", {
                                      children: d(x.publishDate),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        },
                        x.id
                      )
                    ),
            }),
          ],
        }),
        n.jsx(I0, { isOpen: l, onClose: () => a(!1), onSuccess: m }),
        n.jsx(P0, { isOpen: i, onClose: () => o(!1), onSuccess: f }),
      ],
    });
  },
  R0 = ({ bulletins: e }) => {
    const [t, r] = w.useState(0);
    w.useEffect(() => {
      if (e.length <= 1) return;
      const c = setInterval(() => {
        r((u) => (u + 1) % e.length);
      }, 8e3);
      return () => clearInterval(c);
    }, [e.length]);
    const s = (c) => {
        switch (c) {
          case "high":
            return "bg-red-50";
          case "medium":
            return "bg-yellow-50";
          case "low":
            return "bg-green-50";
          default:
            return "bg-gray-50";
        }
      },
      l = (c) => {
        switch (c) {
          case "high":
            return "bg-red-100 text-red-800";
          case "medium":
            return "bg-yellow-100 text-yellow-800";
          case "low":
            return "bg-green-100 text-green-800";
          default:
            return "bg-gray-100 text-gray-800";
        }
      },
      a = (c) => {
        switch (c) {
          case "high":
            return "緊急";
          case "medium":
            return "重要";
          case "low":
            return "一般";
          default:
            return "一般";
        }
      },
      i = (c) => {
        try {
          const u = c.replace(/\//g, "-"),
            d = new Date(u);
          return isNaN(d.getTime())
            ? c
            : d.toLocaleString("zh-TW", {
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
              });
        } catch {
          return c;
        }
      };
    if (e.length === 0)
      return n.jsxs("div", {
        className:
          "bg-white rounded-lg shadow-sm border border-gray-200 h-full flex flex-col",
        children: [
          n.jsx("div", {
            className: "p-2 border-b border-gray-200 bg-blue-50",
            children: n.jsxs("div", {
              className: "flex items-center",
              children: [
                n.jsx(an, { size: 20, className: "text-blue-600 mr-2" }),
                n.jsx("h3", {
                  className: "text-xl font-semibold text-gray-800",
                  children: "公告欄",
                }),
              ],
            }),
          }),
          n.jsx("div", {
            className: "flex-1 flex items-center justify-center",
            children: n.jsxs("div", {
              className: "text-center text-gray-500",
              children: [
                n.jsx(an, {
                  size: 32,
                  className: "mx-auto text-gray-300 mb-2",
                }),
                n.jsx("p", { className: "text-sm", children: "暫無公告" }),
              ],
            }),
          }),
        ],
      });
    const o = e[t];
    return n.jsxs("div", {
      className:
        "bg-white rounded-xl shadow-lg border border-gray-200 h-full flex flex-col",
      children: [
        n.jsx("div", {
          className: "p-2 border-b border-gray-200 bg-blue-50",
          children: n.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              n.jsxs("div", {
                className: "flex items-center",
                children: [
                  n.jsx(an, { size: 20, className: "text-blue-600 mr-2" }),
                  n.jsx("h3", {
                    className: "text-xl font-semibold text-gray-800",
                    children: "公告欄",
                  }),
                ],
              }),
              n.jsxs("span", {
                className: "text-sm text-gray-500 font-medium",
                children: [t + 1, "/", e.length],
              }),
            ],
          }),
        }),
        n.jsx("div", {
          className: "flex-1 p-3",
          children: n.jsxs("div", {
            className: `h-full px-4 py-2 border flex flex-col rounded-xl transition-colors ${s(
              o.priority
            )} border-gray-200`,
            children: [
              n.jsxs("div", {
                className: "flex items-center justify-between mb-2 w-full",
                children: [
                  n.jsx("h4", {
                    className:
                      "font-bold text-lg text-gray-800 flex-1 leading-tight",
                    children: o.title,
                  }),
                  n.jsx("span", {
                    className: `px-3 py-1 rounded-full text-base font-bold ${l(
                      o.priority
                    )} ml-2`,
                    children: a(o.priority),
                  }),
                ],
              }),
              n.jsx("p", {
                className:
                  "text-gray-700 text-base mb-2 leading-relaxed whitespace-pre-line flex-1",
                children: o.content,
              }),
              n.jsxs("div", {
                className:
                  "flex items-center justify-between text-base text-gray-500 mt-auto",
                children: [
                  n.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      n.jsx(Js, { size: 16, className: "mr-2" }),
                      n.jsx("span", { children: o.author }),
                    ],
                  }),
                  n.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      n.jsx(Lr, { size: 16, className: "mr-2" }),
                      n.jsx("span", { children: i(o.publishDate) }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  De = ({ message: e }) =>
    n.jsx("div", {
      className:
        "flex items-center justify-center p-8 bg-red-50 border border-red-200 rounded-lg",
      children: n.jsxs("div", {
        className: "text-center",
        children: [
          n.jsx(Ms, { className: "mx-auto mb-3 text-red-500", size: 48 }),
          n.jsx("h3", {
            className: "text-lg font-semibold text-red-800 mb-2",
            children: "載入錯誤",
          }),
          n.jsx("p", { className: "text-red-600", children: e }),
          n.jsx("p", {
            className: "text-sm text-red-500 mt-2",
            children: "系統將在下次刷新時重試",
          }),
        ],
      }),
    }),
  Yu = ({
    bulletins: e,
    isFullscreen: t = !1,
    onBulletinAdded: r,
    showInFocus: s,
    onFocusToggle: l,
    error: a,
  }) =>
    a != null && a.hasError
      ? t
        ? n.jsx("div", {
            className: "bg-gray-800 rounded-lg p-6 h-full",
            children: n.jsx(De, { message: a.message || "資料載入失敗" }),
          })
        : n.jsx(De, { message: a.message || "資料載入失敗" })
      : t
      ? n.jsx(R0, { bulletins: e })
      : n.jsx(M0, {
          bulletins: e,
          onBulletinAdded: r,
          showInFocus: s,
          onFocusToggle: l,
        }),
  gi = ({ isOpen: e, onClose: t, sectionKey: r, sectionTitle: s }) => {
    const [l, a] = w.useState(5);
    w.useEffect(() => {
      if (e) {
        const o = localStorage.getItem(`focusTable_${r}_itemsPerPage`);
        o && a(parseInt(o, 10));
      }
    }, [e, r]);
    const i = () => {
      localStorage.setItem(`focusTable_${r}_itemsPerPage`, l.toString()),
        t(),
        window.location.reload();
    };
    return e
      ? n.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
          children: n.jsxs("div", {
            className: "bg-white rounded-lg shadow-xl max-w-md w-full mx-4",
            children: [
              n.jsxs("div", {
                className:
                  "flex items-center justify-between p-6 border-b border-gray-200",
                children: [
                  n.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      n.jsx(nr, { size: 24, className: "text-blue-600 mr-3" }),
                      n.jsxs("h2", {
                        className: "text-xl font-semibold text-gray-800",
                        children: [s, " - 專注模式設定"],
                      }),
                    ],
                  }),
                  n.jsx("button", {
                    onClick: t,
                    className:
                      "text-gray-400 hover:text-gray-600 transition-colors",
                    children: n.jsx(Re, { size: 24 }),
                  }),
                ],
              }),
              n.jsx("div", {
                className: "p-6",
                children: n.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    n.jsxs("div", {
                      children: [
                        n.jsx("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: "每頁顯示項目數",
                        }),
                        n.jsx("input", {
                          type: "number",
                          min: "1",
                          max: "20",
                          value: l,
                          onChange: (o) =>
                            a(
                              Math.max(
                                1,
                                Math.min(20, parseInt(o.target.value) || 1)
                              )
                            ),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                        }),
                        n.jsx("p", {
                          className: "mt-2 text-sm text-gray-500",
                          children:
                            "設定在專注顯示模式下，此區塊的表格每頁要顯示多少個項目（建議：1-20）",
                        }),
                      ],
                    }),
                    n.jsx("div", {
                      className:
                        "bg-blue-50 border border-blue-200 rounded-lg p-4",
                      children: n.jsxs("div", {
                        className: "flex items-start",
                        children: [
                          n.jsx("div", {
                            className: "flex-shrink-0",
                            children: n.jsx(nr, {
                              size: 20,
                              className: "text-blue-600 mt-0.5",
                            }),
                          }),
                          n.jsx("div", {
                            className: "ml-3",
                            children: n.jsxs("p", {
                              className: "text-sm text-blue-800",
                              children: [
                                n.jsx("strong", { children: "提示：" }),
                                "設定較少的項目數可以讓每個項目顯示更清楚，設定較多的項目數可以一次看到更多資訊。",
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              n.jsxs("div", {
                className:
                  "flex items-center justify-end space-x-3 p-6 border-t border-gray-200",
                children: [
                  n.jsx("button", {
                    onClick: t,
                    className:
                      "px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors",
                    children: "取消",
                  }),
                  n.jsx("button", {
                    onClick: i,
                    className:
                      "px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors",
                    children: "儲存設定",
                  }),
                ],
              }),
            ],
          }),
        })
      : null;
  },
  O0 = ({
    restockTasks: e,
    receivingTasks: t,
    putAwayTasks: r,
    showInFocus: s = !0,
    onFocusToggle: l,
  }) => {
    var x;
    const [a, i] = w.useState("restock"),
      [o, c] = w.useState(!1),
      u = (v) => {
        switch (v) {
          case "等待過帳":
            return "bg-white border-gray-200";
          case "已過帳":
            return "bg-yellow-50 border-yellow-200";
          case "已簽收":
            return "bg-green-50 border-green-200";
          default:
            return "bg-white border-gray-200";
        }
      },
      d = ({ task: v, taskType: j }) =>
        j === "restock" && "code" in v
          ? n.jsx("div", {
              className: `p-3 border rounded-lg transition-all duration-200 ${u(
                v.state
              )} hover:border-gray-300`,
              children: n.jsx("div", {
                className: "flex items-start space-x-3",
                children: n.jsx("div", {
                  className: "flex-1 min-w-0",
                  children: n.jsxs("div", {
                    className: "grid grid-cols-2 gap-1 text-sm",
                    children: [
                      n.jsxs("div", {
                        children: [
                          n.jsx("span", {
                            className: "text-gray-500",
                            children: "藥碼:",
                          }),
                          n.jsx("span", {
                            className: "ml-2 font-medium text-gray-800",
                            children: v.code,
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        children: [
                          n.jsx("span", {
                            className: "text-gray-500",
                            children: "藥名:",
                          }),
                          n.jsx("span", {
                            className: "ml-2 font-medium text-gray-800",
                            children: v.name,
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        children: [
                          n.jsx("span", {
                            className: "text-gray-500",
                            children: "數量:",
                          }),
                          n.jsx("span", {
                            className: "ml-2 font-medium text-gray-800",
                            children: v.issuedQuantity,
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        children: [
                          n.jsx("span", {
                            className: "text-gray-500",
                            children: "部門:",
                          }),
                          n.jsx("span", {
                            className: "ml-2 font-medium text-gray-800",
                            children: v.destinationStoreType,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            })
          : (j === "receiving" || j === "putaway") && "code" in v
          ? n.jsx("div", {
              className:
                "p-3 border rounded-lg transition-all duration-200 bg-white border-gray-200 hover:border-gray-300",
              children: n.jsx("div", {
                className: "flex items-start space-x-3",
                children: n.jsx("div", {
                  className: "flex-1 min-w-0",
                  children: n.jsxs("div", {
                    className: "grid grid-cols-2 gap-2 text-sm",
                    children: [
                      n.jsxs("div", {
                        children: [
                          n.jsx("span", {
                            className: "text-gray-500",
                            children: "藥碼:",
                          }),
                          n.jsx("span", {
                            className: "ml-2 font-medium text-gray-800",
                            children: v.code,
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        children: [
                          n.jsx("span", {
                            className: "text-gray-500",
                            children: "數量:",
                          }),
                          n.jsx("span", {
                            className: "ml-2 font-medium text-gray-800",
                            children: v.quantity,
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        children: [
                          n.jsx("span", {
                            className: "text-gray-500",
                            children: "藥名:",
                          }),
                          n.jsx("span", {
                            className: "ml-2 font-medium text-gray-800",
                            children: v.name,
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        children: [
                          n.jsx("span", {
                            className: "text-gray-500",
                            children: "廠商:",
                          }),
                          n.jsx("span", {
                            className: "ml-2 font-medium text-gray-800",
                            children: v.supplier,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            })
          : null,
      m = [
        { key: "restock", label: "撥補", icon: Ee, tasks: e },
        { key: "receiving", label: "驗收", icon: Xt, tasks: t },
        { key: "putaway", label: "歸貨", icon: Uu, tasks: r },
      ],
      f = ((x = m.find((v) => v.key === a)) == null ? void 0 : x.tasks) || [];
    return (
      f.filter((v) =>
        "state" in v ? v.state === "等待過帳" : v.quantity && v.quantity > 0
      ).length,
      f.filter((v) => ("state" in v ? v.state === "已簽收" : !1)).length,
      n.jsxs("div", {
        className:
          "bg-white rounded-lg shadow-sm border border-gray-200 h-full",
        children: [
          n.jsxs("div", {
            className: "p-4 border-b border-gray-200",
            children: [
              n.jsxs("div", {
                className: "flex items-center justify-between mb-3",
                children: [
                  n.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      n.jsxs("h3", {
                        className: "flex items-end gap-2",
                        children: [
                          n.jsx("span", {
                            className: "text-lg font-semibold text-gray-800",
                            children: "任務清單",
                          }),
                          n.jsxs("span", {
                            className: "text-gray-500 text-sm",
                            children: ["總計: ", f.length],
                          }),
                        ],
                      }),
                      l &&
                        n.jsxs("div", {
                          className: "ml-4 flex items-center",
                          children: [
                            n.jsxs("label", {
                              className:
                                "relative inline-flex items-center cursor-pointer",
                              children: [
                                n.jsx("input", {
                                  type: "checkbox",
                                  className: "sr-only peer",
                                  checked: s,
                                  onChange: (v) => l(v.target.checked),
                                }),
                                n.jsx("div", {
                                  className:
                                    "w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600",
                                }),
                              ],
                            }),
                            n.jsx("span", {
                              className: "ml-2 text-xs text-gray-500",
                              children: "專注顯示",
                            }),
                          ],
                        }),
                    ],
                  }),
                  n.jsx("button", {
                    onClick: () => c(!0),
                    className:
                      "p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                    title: "專注模式設定",
                    children: n.jsx(nr, { size: 18 }),
                  }),
                ],
              }),
              n.jsx("div", {
                className: "flex space-x-1 bg-gray-100 rounded-lg p-1",
                children: m.map((v) => {
                  const j = v.icon,
                    k = a === v.key,
                    g = v.tasks.filter((p) =>
                      "state" in p
                        ? p.state === "等待過帳"
                        : p.quantity && p.quantity > 0
                    ).length;
                  return n.jsxs(
                    "button",
                    {
                      onClick: () => i(v.key),
                      className: `flex-1 flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        k
                          ? "bg-white text-blue-600 shadow-sm"
                          : "text-gray-600 hover:text-gray-800"
                      }`,
                      children: [
                        n.jsx(j, { size: 16, className: "mr-2" }),
                        v.label,
                        g > 0 &&
                          n.jsx("span", {
                            className: `ml-2 px-2 py-0.5 rounded-full text-xs ${
                              k
                                ? "bg-blue-100 text-blue-600"
                                : "bg-gray-200 text-gray-600"
                            }`,
                            children: g,
                          }),
                      ],
                    },
                    v.key
                  );
                }),
              }),
            ],
          }),
          n.jsx("div", {
            className: "p-4",
            children: n.jsx("div", {
              className: "space-y-3 max-h-64 overflow-y-auto",
              children:
                f.length === 0
                  ? n.jsxs("div", {
                      className: "text-center text-gray-500 py-8",
                      children: [
                        n.jsx(Ee, {
                          size: 48,
                          className: "mx-auto text-gray-300 mb-2",
                        }),
                        n.jsx("p", { children: "暫無任務" }),
                      ],
                    })
                  : f.map((v) => n.jsx(d, { task: v, taskType: a }, v.id)),
            }),
          }),
          n.jsx(gi, {
            isOpen: o,
            onClose: () => c(!1),
            sectionKey: "tasks",
            sectionTitle: "任務清單",
          }),
        ],
      })
    );
  },
  L0 = ({ restockTasks: e, receivingTasks: t, putAwayTasks: r }) => {
    var j;
    const [s, l] = w.useState("restock"),
      [a, i] = w.useState(0),
      c = (() => {
        const k = localStorage.getItem("focusTable_tasks_itemsPerPage");
        return k ? parseInt(k, 10) : 5;
      })(),
      u = e.filter((k) => k.state === "等待過帳"),
      d = [
        { key: "restock", label: "撥補", icon: Ee, tasks: u },
        { key: "receiving", label: "驗收", icon: Xt, tasks: t },
        { key: "putaway", label: "歸貨", icon: Uu, tasks: r },
      ],
      m = ((j = d.find((k) => k.key === s)) == null ? void 0 : j.tasks) || [];
    w.useEffect(() => {
      const k = setInterval(() => {
        l((g) => {
          const h = (d.findIndex((N) => N.key === g) + 1) % d.length;
          return d[h].key;
        }),
          i(0);
      }, 12e3);
      return () => clearInterval(k);
    }, []),
      w.useEffect(() => {
        if (m.length <= c) return;
        const k = setInterval(() => {
          i((g) => {
            const p = g + c;
            return p >= m.length ? 0 : p;
          });
        }, 8e3);
        return () => clearInterval(k);
      }, [m.length, s]),
      m.filter((k) =>
        "state" in k
          ? k.state === "等待過帳"
          : "quantity" in k && k.quantity > 0
      ).length,
      m.filter((k) => ("state" in k ? k.state === "已簽收" : !1)).length;
    const f = m.slice(a, a + c),
      x = Math.ceil(m.length / c),
      v = Math.floor(a / c) + 1;
    return n.jsxs("div", {
      className:
        "bg-white rounded-xl shadow-lg border border-gray-200 h-full flex flex-col min-h-0 max-h-full",
      children: [
        n.jsxs("div", {
          className: "p-2 border-b border-gray-200 bg-green-50 flex-shrink-0",
          children: [
            n.jsxs("div", {
              className: "flex items-center justify-between mb-2",
              children: [
                n.jsxs("h3", {
                  className:
                    "text-xl font-semibold text-gray-800 flex gap-2 items-end",
                  children: [
                    "任務清單",
                    n.jsxs("span", {
                      className: "text-gray-500 text-sm",
                      children: ["總計: ", m.length],
                    }),
                  ],
                }),
                n.jsx("div", {
                  className: "flex space-x-1 bg-gray-100 rounded-lg p-1",
                  children: d.map((k) => {
                    const g = k.icon,
                      p = s === k.key,
                      h = k.tasks.filter((N) =>
                        "state" in N
                          ? N.state === "等待過帳"
                          : "quantity" in N && N.quantity > 0
                      ).length;
                    return n.jsxs(
                      "div",
                      {
                        className: `flex items-center justify-center px-2 py-1 rounded-md text-xs font-medium transition-colors ${
                          p
                            ? "bg-white text-blue-600 shadow-sm"
                            : "text-gray-600"
                        }`,
                        children: [
                          n.jsx(g, { size: 14, className: "mr-1" }),
                          k.label,
                          h > 0 &&
                            n.jsx("span", {
                              className: `ml-1 px-1 py-0.5 rounded-full text-xs ${
                                p
                                  ? "bg-blue-100 text-blue-600"
                                  : "bg-gray-200 text-gray-600"
                              }`,
                              children: h,
                            }),
                        ],
                      },
                      k.key
                    );
                  }),
                }),
              ],
            }),
            m.length > c &&
              n.jsxs("div", {
                className:
                  "flex items-center justify-between text-base text-gray-600 mt-2",
                children: [
                  n.jsxs("span", { children: ["第 ", v, " / ", x, " 頁"] }),
                  n.jsx("div", {
                    className: "flex space-x-1",
                    children: Array.from({ length: x }, (k, g) =>
                      n.jsx(
                        "div",
                        {
                          className: `w-2 h-2 rounded-full ${
                            g === v - 1 ? "bg-green-500" : "bg-gray-300"
                          }`,
                        },
                        g
                      )
                    ),
                  }),
                ],
              }),
          ],
        }),
        n.jsx("div", {
          className: "flex-1 min-h-0 overflow-hidden",
          children:
            m.length === 0
              ? n.jsx("div", {
                  className:
                    "flex items-center justify-center h-full text-gray-500",
                  children: n.jsxs("div", {
                    className: "text-center",
                    children: [
                      n.jsx(Ee, {
                        size: 32,
                        className: "mx-auto mb-2 text-gray-400",
                      }),
                      n.jsx("p", {
                        className: "text-sm",
                        children: "暫無任務",
                      }),
                    ],
                  }),
                })
              : n.jsx("div", {
                  className: "h-full overflow-auto",
                  children: n.jsxs("table", {
                    className: "w-full border-collapse",
                    children: [
                      n.jsx("thead", {
                        className:
                          "sticky top-0 bg-gray-50 border-b-2 border-gray-200",
                        children: n.jsxs("tr", {
                          children: [
                            n.jsx("th", {
                              className:
                                "text-base font-semibold text-left p-2 text-gray-700",
                              children: "藥碼",
                            }),
                            n.jsx("th", {
                              className:
                                "text-base font-semibold text-left p-2 text-gray-700",
                              children: "藥名",
                            }),
                            n.jsx("th", {
                              className:
                                "text-base font-semibold text-center p-2 text-gray-700",
                              children: "數量",
                            }),
                            n.jsxs("th", {
                              className:
                                "text-base font-semibold text-center p-2 text-gray-700",
                              children: [
                                s === "restock" && "部門",
                                s === "receiving" && "廠商",
                                s === "putaway" && "廠商",
                              ],
                            }),
                          ],
                        }),
                      }),
                      n.jsx("tbody", {
                        children: f.map((k, g) => {
                          if (s === "restock" && "code" in k && "state" in k) {
                            const p = (N) => {
                                switch (N) {
                                  case "等待過帳":
                                    return "bg-white hover:bg-gray-50";
                                  case "已過帳":
                                    return "bg-yellow-50 hover:bg-yellow-100";
                                  case "已簽收":
                                    return "bg-green-50 hover:bg-green-100";
                                  default:
                                    return "bg-white hover:bg-gray-50";
                                }
                              },
                              h =
                                (k.state === "已過帳" ||
                                  k.state === "已簽收") &&
                                k.actualIssuedQuantity
                                  ? k.actualIssuedQuantity
                                  : k.issuedQuantity;
                            return n.jsxs(
                              "tr",
                              {
                                className: `border-b border-gray-200 transition-colors ${p(
                                  k.state
                                )}`,
                                children: [
                                  n.jsx("td", {
                                    className:
                                      "text-base p-2 text-gray-800 font-medium",
                                    children: k.code,
                                  }),
                                  n.jsx("td", {
                                    className:
                                      "text-base p-2 text-gray-800 font-medium",
                                    children: k.name,
                                  }),
                                  n.jsx("td", {
                                    className:
                                      "text-base p-2 text-center text-gray-700",
                                    children: h,
                                  }),
                                  n.jsx("td", {
                                    className:
                                      "text-base p-2 text-center text-gray-700",
                                    children: k.destinationStoreType,
                                  }),
                                ],
                              },
                              `${a}-${g}`
                            );
                          }
                          return (s === "receiving" || s === "putaway") &&
                            "code" in k
                            ? n.jsxs(
                                "tr",
                                {
                                  className:
                                    "border-b border-gray-200 transition-colors bg-white hover:bg-gray-50",
                                  children: [
                                    n.jsx("td", {
                                      className:
                                        "text-base p-2 text-gray-800 font-medium",
                                      children: k.code,
                                    }),
                                    n.jsx("td", {
                                      className:
                                        "text-base p-2 text-gray-800 font-medium",
                                      children: k.name,
                                    }),
                                    n.jsx("td", {
                                      className:
                                        "text-base p-2 text-center text-gray-700",
                                      children: k.quantity,
                                    }),
                                    n.jsx("td", {
                                      className:
                                        "text-base p-2 text-center text-gray-700",
                                      children: k.supplier,
                                    }),
                                  ],
                                },
                                `${a}-${g}`
                              )
                            : null;
                        }),
                      }),
                    ],
                  }),
                }),
        }),
      ],
    });
  },
  Ku = ({
    restockTasks: e,
    receivingTasks: t,
    putAwayTasks: r,
    isFullscreen: s = !1,
    showInFocus: l,
    onFocusToggle: a,
    error: i,
  }) =>
    i != null && i.hasError
      ? s
        ? n.jsx("div", {
            className: "bg-gray-800 rounded-lg p-6 h-full",
            children: n.jsx(De, { message: i.message || "資料載入失敗" }),
          })
        : n.jsx(De, { message: i.message || "資料載入失敗" })
      : s
      ? n.jsx(L0, { restockTasks: e, receivingTasks: t, putAwayTasks: r })
      : n.jsx(O0, {
          restockTasks: e,
          receivingTasks: t,
          putAwayTasks: r,
          showInFocus: l,
          onFocusToggle: a,
        }),
  A0 = ({ incomingDrugs: e, showInFocus: t = !0, onFocusToggle: r }) => {
    const s = (o) => {
        switch (o) {
          case "shipped":
            return "bg-blue-100 text-blue-800";
          case "ordered":
            return "bg-yellow-100 text-yellow-800";
          case "delayed":
            return "bg-red-100 text-red-800";
          default:
            return "bg-gray-100 text-gray-800";
        }
      },
      l = (o) => {
        switch (o) {
          case "shipped":
            return "已出貨";
          case "ordered":
            return "已訂購";
          case "delayed":
            return "延遲";
          default:
            return o;
        }
      },
      a = (o) => {
        if (!o) return "未設定";
        try {
          const c = new Date(o.replace(/\//g, "-")),
            u = new Date(),
            d = c.getTime() - u.getTime(),
            m = Math.ceil(d / (1e3 * 60 * 60 * 24)),
            f = c.toLocaleDateString("zh-TW", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            });
          return m < 0
            ? `${f} (逾期 ${Math.abs(m)} 天)`
            : m === 0
            ? `${f} (今天)`
            : m === 1
            ? `${f} (明天)`
            : `${f} (${m} 天後)`;
        } catch {
          return o;
        }
      },
      i = (o) => {
        if (!o) return !1;
        try {
          return new Date(o.replace(/\//g, "-")) < new Date();
        } catch {
          return !1;
        }
      };
    return n.jsxs("div", {
      className: "bg-white rounded-lg shadow-sm border border-gray-200",
      children: [
        n.jsx("div", {
          className: "p-4 border-b border-gray-200",
          children: n.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              n.jsxs("div", {
                className: "flex items-center",
                children: [
                  n.jsx(Xt, { size: 20, className: "text-green-600 mr-2" }),
                  n.jsx("h3", {
                    className: "text-lg font-semibold text-gray-800",
                    children: "未到貨監控",
                  }),
                  r &&
                    n.jsxs("div", {
                      className: "ml-4 flex items-center",
                      children: [
                        n.jsxs("label", {
                          className:
                            "relative inline-flex items-center cursor-pointer",
                          children: [
                            n.jsx("input", {
                              type: "checkbox",
                              className: "sr-only peer",
                              checked: t,
                              onChange: (o) => r(o.target.checked),
                            }),
                            n.jsx("div", {
                              className:
                                "w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600",
                            }),
                          ],
                        }),
                        n.jsx("span", {
                          className: "ml-2 text-xs text-gray-500",
                          children: "專注顯示",
                        }),
                      ],
                    }),
                ],
              }),
              n.jsxs("span", {
                className: "text-sm text-gray-500",
                children: [e.length, " 項待到貨"],
              }),
            ],
          }),
        }),
        n.jsx("div", {
          className: "p-4",
          children: n.jsx("div", {
            className: "space-y-3 max-h-60 overflow-y-auto",
            children:
              e.length === 0
                ? n.jsxs("div", {
                    className: "text-center text-gray-500 py-4",
                    children: [
                      n.jsx(Xt, {
                        size: 48,
                        className: "mx-auto text-gray-300 mb-2",
                      }),
                      n.jsx("p", { children: "暫無待到貨品項" }),
                    ],
                  })
                : e.map((o) =>
                    n.jsxs(
                      "div",
                      {
                        className: `p-3 border rounded-lg transition-colors ${
                          i(o.expectedArrivalDate)
                            ? "border-red-200 bg-red-50"
                            : o.status === "delayed"
                            ? "border-yellow-200 bg-yellow-50"
                            : "border-gray-200 bg-white hover:border-gray-300"
                        }`,
                        children: [
                          n.jsxs("div", {
                            className: "flex items-start justify-between mb-2",
                            children: [
                              n.jsx("h4", {
                                className: "font-medium text-gray-800 flex-1",
                                children: o.drugName,
                              }),
                              n.jsxs("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                  i(o.expectedArrivalDate) &&
                                    n.jsx(qe, {
                                      size: 16,
                                      className: "text-red-500",
                                    }),
                                  n.jsx("span", {
                                    className: `px-2 py-1 rounded-full text-xs font-medium ${s(
                                      o.status
                                    )}`,
                                    children: l(o.status),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          n.jsxs("div", {
                            className: "space-y-1 text-sm text-gray-600",
                            children: [
                              n.jsxs("div", {
                                className: "flex items-center",
                                children: [
                                  n.jsx(Xs, {
                                    size: 14,
                                    className: `mr-2 ${
                                      i(o.expectedArrivalDate)
                                        ? "text-red-500"
                                        : "text-gray-400"
                                    }`,
                                  }),
                                  n.jsxs("span", {
                                    className: i(o.expectedArrivalDate)
                                      ? "text-red-600 font-medium"
                                      : "",
                                    children: [
                                      "預計到貨: ",
                                      a(o.expectedArrivalDate),
                                    ],
                                  }),
                                ],
                              }),
                              n.jsxs("div", {
                                className: "flex items-center",
                                children: [
                                  n.jsx(Ee, {
                                    size: 14,
                                    className: "mr-2 text-gray-400",
                                  }),
                                  n.jsxs("span", {
                                    children: ["數量: ", o.quantityOrdered],
                                  }),
                                ],
                              }),
                              n.jsxs("div", {
                                className: "flex items-center",
                                children: [
                                  n.jsx(qu, {
                                    size: 14,
                                    className: "mr-2 text-gray-400",
                                  }),
                                  n.jsxs("span", {
                                    children: ["供應商: ", o.supplier],
                                  }),
                                ],
                              }),
                              n.jsxs("div", {
                                className: "text-sm text-gray-500 mt-1",
                                children: ["訂單號: ", o.orderNumber],
                              }),
                            ],
                          }),
                        ],
                      },
                      o.id
                    )
                  ),
          }),
        }),
      ],
    });
  },
  F0 = ({ incomingDrugs: e }) => {
    const [t, r] = w.useState(0);
    w.useEffect(() => {
      if (e.length <= 1) return;
      const c = setInterval(() => {
        r((u) => (u + 1) % e.length);
      }, 6e3);
      return () => clearInterval(c);
    }, [e.length]);
    const s = (c) => {
        switch (c) {
          case "shipped":
            return "bg-blue-100 text-blue-800";
          case "ordered":
            return "bg-yellow-100 text-yellow-800";
          case "delayed":
            return "bg-red-100 text-red-800";
          default:
            return "bg-gray-100 text-gray-800";
        }
      },
      l = (c) => {
        switch (c) {
          case "shipped":
            return "已出貨";
          case "ordered":
            return "已訂購";
          case "delayed":
            return "延遲";
          default:
            return c;
        }
      },
      a = (c) => {
        if (!c) return "未設定";
        try {
          const u = new Date(c.replace(/\//g, "-")),
            d = new Date(),
            m = u.getTime() - d.getTime(),
            f = Math.ceil(m / (1e3 * 60 * 60 * 24)),
            x = u.toLocaleDateString("zh-TW", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            });
          return f < 0
            ? `${x} (逾期 ${Math.abs(f)} 天)`
            : f === 0
            ? `${x} (今天)`
            : f === 1
            ? `${x} (明天)`
            : `${x} (${f} 天後)`;
        } catch {
          return c;
        }
      },
      i = (c) => {
        if (!c) return !1;
        try {
          return new Date(c.replace(/\//g, "-")) < new Date();
        } catch {
          return !1;
        }
      };
    if (e.length === 0)
      return n.jsxs("div", {
        className:
          "bg-white rounded-lg shadow-sm border border-gray-200 h-full flex flex-col",
        children: [
          n.jsx("div", {
            className: "p-2 border-b border-gray-200 bg-green-50",
            children: n.jsxs("div", {
              className: "flex items-center",
              children: [
                n.jsx(Xt, { size: 20, className: "text-green-600 mr-2" }),
                n.jsx("h3", {
                  className: "text-xl font-semibold text-gray-800",
                  children: "未到貨監控",
                }),
              ],
            }),
          }),
          n.jsx("div", {
            className: "flex-1 flex items-center justify-center",
            children: n.jsxs("div", {
              className: "text-center text-gray-500",
              children: [
                n.jsx(Xt, {
                  size: 32,
                  className: "mx-auto text-gray-300 mb-2",
                }),
                n.jsx("p", {
                  className: "text-sm",
                  children: "暫無待到貨品項",
                }),
              ],
            }),
          }),
        ],
      });
    const o = e[t];
    return n.jsxs("div", {
      className:
        "bg-white rounded-xl shadow-lg border border-gray-200 h-full flex flex-col",
      children: [
        n.jsx("div", {
          className: "p-2 border-b border-gray-200 bg-green-50",
          children: n.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              n.jsxs("div", {
                className: "flex items-center",
                children: [
                  n.jsx(Xt, { size: 20, className: "text-green-600 mr-2" }),
                  n.jsx("h3", {
                    className: "text-xl font-semibold text-gray-800",
                    children: "未到貨監控",
                  }),
                ],
              }),
              n.jsxs("span", {
                className: "text-sm text-gray-500 font-medium",
                children: [t + 1, "/", e.length],
              }),
            ],
          }),
        }),
        n.jsx("div", {
          className: "flex-1 p-2",
          children: n.jsxs("div", {
            className: `h-full p-2 border rounded-xl transition-colors ${
              i(o.expectedArrivalDate)
                ? "border-red-200 bg-red-50"
                : o.status === "delayed"
                ? "border-yellow-200 bg-yellow-50"
                : "border-gray-200 bg-white"
            }`,
            children: [
              n.jsxs("div", {
                className: "flex items-start justify-between mb-1",
                children: [
                  n.jsx("h4", {
                    className:
                      "font-bold text-lg text-gray-800 flex-1 leading-tight",
                    children: o.drugName,
                  }),
                  n.jsxs("div", {
                    className: "flex items-center space-x-1 ml-2",
                    children: [
                      i(o.expectedArrivalDate) &&
                        n.jsx(qe, { size: 18, className: "text-red-500" }),
                      n.jsx("span", {
                        className: `px-3 py-1 rounded-full text-base font-bold ${s(
                          o.status
                        )}`,
                        children: l(o.status),
                      }),
                    ],
                  }),
                ],
              }),
              n.jsxs("div", {
                className: "space-y-1 text-base text-gray-600",
                children: [
                  n.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      n.jsx(Xs, {
                        size: 20,
                        className: `mr-3 ${
                          i(o.expectedArrivalDate)
                            ? "text-red-500"
                            : "text-gray-400"
                        }`,
                      }),
                      n.jsxs("span", {
                        className: i(o.expectedArrivalDate)
                          ? "text-red-600 font-medium"
                          : "",
                        children: ["預計到貨: ", a(o.expectedArrivalDate)],
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    className: "flex justify-between",
                    children: [
                      n.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          n.jsx(Ee, {
                            size: 20,
                            className: "mr-3 text-gray-400",
                          }),
                          n.jsxs("span", {
                            children: ["數量: ", o.quantityOrdered],
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          n.jsx(qu, {
                            size: 18,
                            className: "mr-3 text-gray-400",
                          }),
                          n.jsxs("span", {
                            children: ["供應商: ", o.supplier],
                          }),
                        ],
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    className: "text-base text-gray-500 mt-3 pt-3 border-t",
                    children: ["訂單號: ", o.orderNumber],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  Xu = ({
    incomingDrugs: e,
    isFullscreen: t = !1,
    showInFocus: r,
    onFocusToggle: s,
    error: l,
  }) =>
    l != null && l.hasError
      ? t
        ? n.jsx("div", {
            className: "bg-gray-800 rounded-lg p-6 h-full",
            children: n.jsx(De, { message: l.message || "資料載入失敗" }),
          })
        : n.jsx(De, { message: l.message || "資料載入失敗" })
      : t
      ? n.jsx(F0, { incomingDrugs: e })
      : n.jsx(A0, { incomingDrugs: e, showInFocus: r, onFocusToggle: s }),
  $0 = ({ isOpen: e, onClose: t, onSuccess: r }) => {
    const [s, l] = w.useState({ drugName: "", start_time: "", end_time: "" }),
      [a, i] = w.useState([]),
      [o, c] = w.useState([]),
      [u, d] = w.useState(!1),
      [m, f] = w.useState(!1),
      [x, v] = w.useState(!1),
      [j, k] = w.useState(null);
    Te.useEffect(() => {
      if (e) {
        const E = new Date(),
          y = E.toISOString().slice(0, 16),
          b = new Date(E);
        b.setMonth(b.getMonth() + 1);
        const I = b.toISOString().slice(0, 16);
        l({ drugName: "", start_time: y, end_time: I }),
          c([]),
          d(!1),
          k(null),
          g();
      }
    }, [e]);
    const g = async () => {
        f(!0);
        try {
          const E = await Zs();
          E.Code === 200 && E.Data
            ? i(E.Data)
            : console.warn("Failed to load medicine data:", E);
        } catch (E) {
          console.error("Error loading medicine data:", E);
        } finally {
          f(!1);
        }
      },
      p = (E, y) => {
        l((b) => ({ ...b, [E]: y })), E === "drugName" && h(y);
      },
      h = (E) => {
        if (!E.trim()) {
          c([]), d(!1);
          return;
        }
        const y = a.filter((b) =>
          b.NAME.toLowerCase().includes(E.toLowerCase())
        );
        c(y.slice(0, 10)), d(y.length > 0);
      },
      N = (E) => {
        l((y) => ({ ...y, drugName: E })), d(!1), c([]);
      },
      _ = () => {
        if (!s.drugName.trim()) return "請輸入藥品名稱";
        if (!s.start_time) return "請選擇開始時間";
        if (!s.end_time) return "請選擇結束時間";
        const E = new Date(s.start_time);
        return new Date(s.end_time) <= E ? "結束時間必須晚於開始時間" : null;
      },
      D = async () => {
        k(null);
        const E = _();
        if (E) {
          k(E);
          return;
        }
        const y = In();
        if (!y) {
          k("無法獲取使用者資訊，請重新登入");
          return;
        }
        v(!0);
        try {
          const b = (P) => P.replace("T", " ") + ":00",
            I = {
              title: "缺貨通知",
              content: s.drugName.trim(),
              priority: "Critical",
              creator_dept: y.Employer || "",
              creator_name: y.Name || "",
              start_time: b(s.start_time),
              end_time: b(s.end_time),
            };
          await u0(I), r(), t();
        } catch (b) {
          k(b instanceof Error ? b.message : "新增缺貨項目失敗，請稍後再試");
        } finally {
          v(!1);
        }
      },
      T = () => {
        x || t();
      };
    return e
      ? n.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
          children: n.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
            children: [
              n.jsxs("div", {
                className:
                  "flex items-center justify-between p-6 border-b border-gray-200",
                children: [
                  n.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      n.jsx(ht, { size: 24, className: "text-blue-600 mr-3" }),
                      n.jsx("h2", {
                        className: "text-xl font-semibold text-gray-800",
                        children: "新增缺貨項目",
                      }),
                    ],
                  }),
                  n.jsx("button", {
                    onClick: T,
                    disabled: x,
                    className:
                      "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                    children: n.jsx(Re, { size: 20 }),
                  }),
                ],
              }),
              n.jsxs("div", {
                className: "p-6 space-y-6",
                children: [
                  j &&
                    n.jsxs("div", {
                      className:
                        "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center",
                      children: [
                        n.jsx(qe, {
                          size: 20,
                          className: "mr-2 flex-shrink-0",
                        }),
                        j,
                      ],
                    }),
                  n.jsxs("div", {
                    className: "relative",
                    children: [
                      n.jsxs("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: [
                          "藥品名稱 ",
                          n.jsx("span", {
                            className: "text-red-500",
                            children: "*",
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className: "relative",
                        children: [
                          n.jsx("div", {
                            className:
                              "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",
                            children: n.jsx(Cn, {
                              size: 16,
                              className: "text-gray-400",
                            }),
                          }),
                          n.jsx("input", {
                            type: "text",
                            value: s.drugName,
                            onChange: (E) => p("drugName", E.target.value),
                            onFocus: () => {
                              o.length > 0 && d(!0);
                            },
                            disabled: x || m,
                            className:
                              "w-full pl-10 pr-10 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                            placeholder: "請輸入藥品名稱進行搜尋",
                            autoComplete: "off",
                          }),
                          m &&
                            n.jsx("div", {
                              className:
                                "absolute inset-y-0 right-0 flex items-center pr-3",
                              children: n.jsx(X, { size: "small" }),
                            }),
                          u &&
                            n.jsx("div", {
                              className:
                                "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",
                              children: n.jsx(kn, {
                                size: 16,
                                className: "text-gray-400",
                              }),
                            }),
                        ],
                      }),
                      u &&
                        o.length > 0 &&
                        n.jsx("div", {
                          className:
                            "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                          children: o.map((E, y) =>
                            n.jsx(
                              "button",
                              {
                                type: "button",
                                onClick: () => N(E.NAME),
                                className:
                                  "w-full px-4 py-2 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors border-b border-gray-100 last:border-b-0",
                                children: n.jsx("div", {
                                  className: "font-medium text-gray-900",
                                  children: E.NAME,
                                }),
                              },
                              y
                            )
                          ),
                        }),
                      m &&
                        n.jsxs("div", {
                          className:
                            "mt-2 text-sm text-gray-500 flex items-center",
                          children: [
                            n.jsx(X, { size: "small", className: "mr-2" }),
                            "載入藥品資料中...",
                          ],
                        }),
                    ],
                  }),
                  u &&
                    n.jsx("div", {
                      className: "fixed inset-0 z-40",
                      onClick: () => d(!1),
                    }),
                  n.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                    children: [
                      n.jsxs("div", {
                        children: [
                          n.jsxs("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: [
                              "開始時間 ",
                              n.jsx("span", {
                                className: "text-red-500",
                                children: "*",
                              }),
                            ],
                          }),
                          n.jsx("input", {
                            type: "datetime-local",
                            value: s.start_time,
                            onChange: (E) => p("start_time", E.target.value),
                            disabled: x,
                            className:
                              "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        children: [
                          n.jsxs("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: [
                              "結束時間 ",
                              n.jsx("span", {
                                className: "text-red-500",
                                children: "*",
                              }),
                            ],
                          }),
                          n.jsx("input", {
                            type: "datetime-local",
                            value: s.end_time,
                            onChange: (E) => p("end_time", E.target.value),
                            disabled: x,
                            className:
                              "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              n.jsxs("div", {
                className:
                  "flex items-center justify-end space-x-4 p-6 border-t border-gray-200 bg-gray-50",
                children: [
                  n.jsx("button", {
                    onClick: T,
                    disabled: x,
                    className:
                      "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                    children: "取消",
                  }),
                  n.jsx("button", {
                    onClick: D,
                    disabled: x || !s.drugName.trim(),
                    className:
                      "flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                    children: x
                      ? n.jsxs(n.Fragment, {
                          children: [
                            n.jsx(X, { size: "small", className: "mr-2" }),
                            "新增中...",
                          ],
                        })
                      : n.jsxs(n.Fragment, {
                          children: [
                            n.jsx(ht, { size: 16, className: "mr-2" }),
                            "新增項目",
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
  U0 = ({ isOpen: e, onClose: t, onSuccess: r }) => {
    const [s, l] = w.useState([]),
      [a, i] = w.useState(!1),
      [o, c] = w.useState(null),
      [u, d] = w.useState(null),
      [m, f] = w.useState(!1),
      [x, v] = w.useState(!1),
      [j, k] = w.useState(!1),
      [g, p] = w.useState([]),
      [h, N] = w.useState([]),
      [_, D] = w.useState(!1),
      [T, E] = w.useState(!1);
    w.useEffect(() => {
      e && y();
    }, [e]);
    const y = async () => {
        i(!0), c(null);
        try {
          const C = await c0();
          if (C.Code === 200) l(C.Data || []);
          else throw new Error(C.Result || "載入歷史缺貨項目失敗");
        } catch (C) {
          c(C instanceof Error ? C.message : "載入歷史缺貨項目時發生錯誤");
        } finally {
          i(!1);
        }
      },
      b = async () => {
        E(!0);
        try {
          const C = await Zs();
          C.Code === 200 && C.Data
            ? p(C.Data)
            : console.warn("Failed to load medicine data:", C);
        } catch (C) {
          console.error("Error loading medicine data:", C);
        } finally {
          E(!1);
        }
      },
      I = (C) => {
        const $ = (S) => {
          if (!S) return "";
          try {
            const U = S.replace(/\//g, "-");
            return new Date(U).toISOString().slice(0, 16);
          } catch (U) {
            return console.error("Error formatting date for input:", S, U), "";
          }
        };
        d({
          GUID: C.GUID,
          title: C.title || "",
          content: C.content || "",
          priority: C.priority || "Normal",
          creator_dept: C.creator_dept || "",
          creator_name: C.creator_name || "",
          start_time: $(C.start_time),
          end_time: $(C.end_time),
          created_time: C.created_time || "",
        }),
          g.length === 0 && b();
      },
      P = (C) => {
        if (!C.trim()) {
          N([]), D(!1);
          return;
        }
        const $ = g.filter((S) =>
          S.NAME.toLowerCase().includes(C.toLowerCase())
        );
        N($.slice(0, 10)), D($.length > 0);
      },
      A = (C) => {
        u && d({ ...u, content: C }), D(!1), N([]);
      },
      le = async () => {
        if (u) {
          f(!0), c(null);
          try {
            const C = (S) =>
                S ? S.replace("T", " ").replace(/-/g, "/") + ":00" : "",
              $ = {
                GUID: u.GUID,
                title: u.title.trim(),
                content: u.content.trim(),
                priority: u.priority,
                creator_dept: u.creator_dept,
                creator_name: u.creator_name,
                start_time: C(u.start_time),
                end_time: C(u.end_time),
              };
            await d0($), await y(), d(null), r && r();
          } catch (C) {
            c(C instanceof Error ? C.message : "更新缺貨項目失敗，請稍後再試");
          } finally {
            f(!1);
          }
        }
      },
      R = async () => {
        if (u) {
          k(!0), c(null), v(!1);
          try {
            await f0(u.GUID), await y(), d(null), r && r();
          } catch (C) {
            c(C instanceof Error ? C.message : "刪除缺貨項目失敗，請稍後再試");
          } finally {
            k(!1);
          }
        }
      },
      G = (C) => {
        if (!C) return "-";
        try {
          const $ = C.replace(/\//g, "-");
          return new Date($).toLocaleString("zh-TW", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: !1,
          });
        } catch {
          return C;
        }
      },
      Ae = (C) => {
        switch (C) {
          case "Critical":
            return "緊急";
          case "Important":
            return "重要";
          case "Normal":
            return "一般";
          default:
            return C || "一般";
        }
      },
      M = (C) => {
        switch (C) {
          case "Critical":
            return "bg-red-100 text-red-800";
          case "Important":
            return "bg-yellow-100 text-yellow-800";
          case "Normal":
            return "bg-green-100 text-green-800";
          default:
            return "bg-gray-100 text-gray-800";
        }
      },
      L = () => {
        !a && !m && !j && (d(null), v(!1), t());
      };
    return e
      ? n.jsxs("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
          children: [
            n.jsxs("div", {
              className:
                "bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto",
              children: [
                n.jsxs("div", {
                  className:
                    "flex items-center justify-between p-6 border-b border-gray-200",
                  children: [
                    n.jsxs("div", {
                      className: "flex items-center",
                      children: [
                        n.jsx(pt, {
                          size: 24,
                          className: "text-blue-600 mr-3",
                        }),
                        n.jsx("h2", {
                          className: "text-xl font-semibold text-gray-800",
                          children: "歷史缺貨項目",
                        }),
                      ],
                    }),
                    n.jsx("button", {
                      onClick: L,
                      disabled: a || m,
                      className:
                        "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                      children: n.jsx(Re, { size: 20 }),
                    }),
                  ],
                }),
                n.jsxs("div", {
                  className: "p-6",
                  children: [
                    o &&
                      n.jsxs("div", {
                        className:
                          "mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center",
                        children: [
                          n.jsx(qe, {
                            size: 20,
                            className: "mr-2 flex-shrink-0",
                          }),
                          o,
                        ],
                      }),
                    a
                      ? n.jsxs("div", {
                          className: "flex items-center justify-center py-12",
                          children: [
                            n.jsx(X, { size: "large" }),
                            n.jsx("span", {
                              className: "ml-3 text-gray-500",
                              children: "載入歷史缺貨項目中...",
                            }),
                          ],
                        })
                      : s.length === 0
                      ? n.jsxs("div", {
                          className: "text-center text-gray-500 py-12",
                          children: [
                            n.jsx(pt, {
                              size: 48,
                              className: "mx-auto text-gray-300 mb-2",
                            }),
                            n.jsx("p", { children: "暫無歷史缺貨項目" }),
                          ],
                        })
                      : n.jsx("div", {
                          className: "overflow-x-auto",
                          children: n.jsx("div", {
                            className: "max-h-96 overflow-y-auto",
                            children: n.jsxs("table", {
                              className: "min-w-full divide-y divide-gray-200",
                              children: [
                                n.jsx("thead", {
                                  className: "bg-gray-50 sticky top-0 z-10",
                                  children: n.jsxs("tr", {
                                    children: [
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "建立時間",
                                      }),
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "藥品名稱",
                                      }),
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "重要程度",
                                      }),
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "建立人員",
                                      }),
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "開始時間",
                                      }),
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "結束時間",
                                      }),
                                    ],
                                  }),
                                }),
                                n.jsx("tbody", {
                                  className:
                                    "bg-white divide-y divide-gray-200",
                                  children: s.map((C) =>
                                    n.jsxs(
                                      "tr",
                                      {
                                        className:
                                          "hover:bg-blue-50 cursor-pointer transition-colors",
                                        onClick: () => I(C),
                                        title: "點擊編輯此缺貨項目",
                                        children: [
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: G(C.created_time),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 text-sm text-gray-900 max-w-xs",
                                            children: n.jsx("div", {
                                              className: "truncate",
                                              title: C.content,
                                              children: C.content || "-",
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap",
                                            children: n.jsx("span", {
                                              className: `px-2 py-1 rounded-full text-xs font-medium ${M(
                                                C.priority
                                              )}`,
                                              children: Ae(C.priority),
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children:
                                              `${C.creator_dept || ""} ${
                                                C.creator_name || ""
                                              }`.trim() || "-",
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: G(C.start_time),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: G(C.end_time),
                                          }),
                                        ],
                                      },
                                      C.GUID
                                    )
                                  ),
                                }),
                              ],
                            }),
                          }),
                        }),
                  ],
                }),
              ],
            }),
            u &&
              n.jsx("div", {
                className:
                  "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4",
                children: n.jsxs("div", {
                  className:
                    "bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
                  children: [
                    n.jsxs("div", {
                      className:
                        "flex items-center justify-between p-6 border-b border-gray-200",
                      children: [
                        n.jsxs("div", {
                          className: "flex items-center",
                          children: [
                            n.jsx(Pr, {
                              size: 24,
                              className: "text-green-600 mr-3",
                            }),
                            n.jsx("h2", {
                              className: "text-xl font-semibold text-gray-800",
                              children: "編輯缺貨項目",
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            n.jsxs("button", {
                              onClick: () => v(!0),
                              disabled: m || j,
                              className:
                                "flex items-center px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                              title: "刪除缺貨項目",
                              children: [
                                n.jsx(ct, { size: 16, className: "mr-2" }),
                                "刪除",
                              ],
                            }),
                            n.jsx("button", {
                              onClick: () => d(null),
                              disabled: m || j,
                              className:
                                "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                              children: n.jsx(Re, { size: 20 }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    n.jsxs("div", {
                      className: "p-6 space-y-6",
                      children: [
                        n.jsxs("div", {
                          className: "relative",
                          children: [
                            n.jsxs("label", {
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: [
                                "藥品名稱 ",
                                n.jsx("span", {
                                  className: "text-red-500",
                                  children: "*",
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              className: "relative",
                              children: [
                                n.jsx("div", {
                                  className:
                                    "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",
                                  children: n.jsx(Cn, {
                                    size: 16,
                                    className: "text-gray-400",
                                  }),
                                }),
                                n.jsx("input", {
                                  type: "text",
                                  value: u.content,
                                  onChange: (C) => {
                                    d({ ...u, content: C.target.value }),
                                      P(C.target.value);
                                  },
                                  onFocus: () => {
                                    h.length > 0 && D(!0);
                                  },
                                  disabled: m || T,
                                  className:
                                    "w-full pl-10 pr-10 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                  placeholder: "請輸入藥品名稱進行搜尋",
                                  autoComplete: "off",
                                }),
                                T &&
                                  n.jsx("div", {
                                    className:
                                      "absolute inset-y-0 right-0 flex items-center pr-3",
                                    children: n.jsx(X, { size: "small" }),
                                  }),
                                _ &&
                                  n.jsx("div", {
                                    className:
                                      "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",
                                    children: n.jsx(kn, {
                                      size: 16,
                                      className: "text-gray-400",
                                    }),
                                  }),
                              ],
                            }),
                            _ &&
                              h.length > 0 &&
                              n.jsx("div", {
                                className:
                                  "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                                children: h.map((C, $) =>
                                  n.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      onClick: () => A(C.NAME),
                                      className:
                                        "w-full px-4 py-2 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors border-b border-gray-100 last:border-b-0",
                                      children: n.jsx("div", {
                                        className: "font-medium text-gray-900",
                                        children: C.NAME,
                                      }),
                                    },
                                    $
                                  )
                                ),
                              }),
                            T &&
                              n.jsxs("div", {
                                className:
                                  "mt-2 text-sm text-gray-500 flex items-center",
                                children: [
                                  n.jsx(X, {
                                    size: "small",
                                    className: "mr-2",
                                  }),
                                  "載入藥品資料中...",
                                ],
                              }),
                          ],
                        }),
                        _ &&
                          n.jsx("div", {
                            className: "fixed inset-0 z-40",
                            onClick: () => D(!1),
                          }),
                        n.jsxs("div", {
                          children: [
                            n.jsxs("label", {
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: [
                                "重要程度 ",
                                n.jsx("span", {
                                  className: "text-red-500",
                                  children: "*",
                                }),
                              ],
                            }),
                            n.jsxs("select", {
                              value: u.priority,
                              onChange: (C) =>
                                d({ ...u, priority: C.target.value }),
                              disabled: m,
                              className:
                                "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                              children: [
                                n.jsx("option", {
                                  value: "Normal",
                                  children: "一般",
                                }),
                                n.jsx("option", {
                                  value: "Important",
                                  children: "重要",
                                }),
                                n.jsx("option", {
                                  value: "Critical",
                                  children: "緊急",
                                }),
                              ],
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                          children: [
                            n.jsxs("div", {
                              children: [
                                n.jsxs("label", {
                                  className:
                                    "block text-sm font-medium text-gray-700 mb-2",
                                  children: [
                                    "開始時間 ",
                                    n.jsx("span", {
                                      className: "text-red-500",
                                      children: "*",
                                    }),
                                  ],
                                }),
                                n.jsx("input", {
                                  type: "datetime-local",
                                  value: u.start_time,
                                  onChange: (C) =>
                                    d({ ...u, start_time: C.target.value }),
                                  disabled: m,
                                  className:
                                    "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              children: [
                                n.jsxs("label", {
                                  className:
                                    "block text-sm font-medium text-gray-700 mb-2",
                                  children: [
                                    "結束時間 ",
                                    n.jsx("span", {
                                      className: "text-red-500",
                                      children: "*",
                                    }),
                                  ],
                                }),
                                n.jsx("input", {
                                  type: "datetime-local",
                                  value: u.end_time,
                                  onChange: (C) =>
                                    d({ ...u, end_time: C.target.value }),
                                  disabled: m,
                                  className:
                                    "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    n.jsxs("div", {
                      className:
                        "flex items-center justify-end space-x-4 p-6 border-t border-gray-200 bg-gray-50",
                      children: [
                        n.jsx("button", {
                          onClick: () => d(null),
                          disabled: m || j,
                          className:
                            "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        n.jsx("button", {
                          onClick: le,
                          disabled: m || j || !u.content.trim(),
                          className:
                            "flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                          children:
                            m || j
                              ? n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(X, {
                                      size: "small",
                                      className: "mr-2",
                                    }),
                                    m ? "更新中..." : "處理中...",
                                  ],
                                })
                              : n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(Pr, { size: 16, className: "mr-2" }),
                                    "更新項目",
                                  ],
                                }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            x &&
              u &&
              n.jsx("div", {
                className:
                  "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[110] p-4",
                children: n.jsx("div", {
                  className: "bg-white rounded-lg shadow-xl max-w-md w-full",
                  children: n.jsxs("div", {
                    className: "p-6",
                    children: [
                      n.jsxs("div", {
                        className: "flex items-center mb-4",
                        children: [
                          n.jsx(ct, {
                            size: 24,
                            className: "text-red-600 mr-3",
                          }),
                          n.jsx("h3", {
                            className: "text-lg font-semibold text-gray-800",
                            children: "確認刪除缺貨項目",
                          }),
                        ],
                      }),
                      n.jsxs("p", {
                        className: "text-gray-600 mb-2",
                        children: [
                          "您確定要刪除缺貨項目「",
                          u.content,
                          "」嗎？",
                        ],
                      }),
                      n.jsx("p", {
                        className: "text-sm text-red-600 mb-6",
                        children: "此操作無法復原，請謹慎操作。",
                      }),
                      n.jsxs("div", {
                        className: "flex items-center justify-end space-x-4",
                        children: [
                          n.jsx("button", {
                            onClick: () => v(!1),
                            disabled: j,
                            className:
                              "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                            children: "取消",
                          }),
                          n.jsx("button", {
                            onClick: R,
                            disabled: j,
                            className:
                              "flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                            children: j
                              ? n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(X, {
                                      size: "small",
                                      className: "mr-2",
                                    }),
                                    "刪除中...",
                                  ],
                                })
                              : n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(ct, { size: 16, className: "mr-2" }),
                                    "確認刪除",
                                  ],
                                }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
          ],
        })
      : null;
  },
  V0 = ({
    outOfStockItems: e,
    onItemAdded: t,
    showInFocus: r = !0,
    onFocusToggle: s,
  }) => {
    const [l, a] = Te.useState(!1),
      [i, o] = Te.useState(!1),
      [c, u] = Te.useState(!1),
      [d, m] = Te.useState(!1),
      f = (g) =>
        new Date(g).toLocaleDateString("zh-TW", {
          month: "2-digit",
          day: "2-digit",
        }),
      x = (g) => {
        const p = new Date(g);
        if (isNaN(p.getTime()))
          return console.warn("Invalid lastStockDate:", g), 0;
        const h = new Date(),
          N = new Date(p.getFullYear(), p.getMonth(), p.getDate()),
          _ = new Date(h.getFullYear(), h.getMonth(), h.getDate()),
          D = _.getTime() - N.getTime(),
          T = Math.floor(D / (1e3 * 60 * 60 * 24));
        return (
          console.log("Days calculation in OutOfStockList:", {
            lastStockDate: g,
            lastStock: p,
            lastStockDateOnly: N,
            nowDateOnly: _,
            diffDays: T,
          }),
          T
        );
      },
      v = () => {
        t && t();
      },
      j = async () => {
        u(!0);
        try {
          await new Promise((g) => setTimeout(g, 100)), a(!0);
        } catch (g) {
          console.error("Failed to prepare add modal:", g), a(!0);
        } finally {
          u(!1);
        }
      },
      k = () => {
        t && t();
      };
    return n.jsxs(n.Fragment, {
      children: [
        n.jsxs("div", {
          className: "bg-white rounded-lg shadow-sm border border-gray-200",
          children: [
            n.jsxs("div", {
              className: "p-4 border-b border-gray-200",
              children: [
                n.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    n.jsxs("div", {
                      className: "flex items-center",
                      children: [
                        n.jsx(Ms, { size: 20, className: "text-red-600 mr-2" }),
                        n.jsx("h3", {
                          className: "text-lg font-semibold text-gray-800",
                          children: "缺貨清單",
                        }),
                        s &&
                          n.jsxs("div", {
                            className: "ml-4 flex items-center",
                            children: [
                              n.jsxs("label", {
                                className:
                                  "relative inline-flex items-center cursor-pointer",
                                children: [
                                  n.jsx("input", {
                                    type: "checkbox",
                                    className: "sr-only peer",
                                    checked: r,
                                    onChange: (g) => s(g.target.checked),
                                  }),
                                  n.jsx("div", {
                                    className:
                                      "w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600",
                                  }),
                                ],
                              }),
                              n.jsx("span", {
                                className: "ml-2 text-xs text-gray-500",
                                children: "專注顯示",
                              }),
                            ],
                          }),
                      ],
                    }),
                    n.jsxs("div", {
                      className: "flex items-center space-x-2",
                      children: [
                        n.jsx("button", {
                          onClick: () => m(!0),
                          className:
                            "p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                          title: "專注模式設定",
                          children: n.jsx(nr, { size: 18 }),
                        }),
                        n.jsxs("button", {
                          onClick: () => o(!0),
                          className:
                            "flex items-center px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors text-sm",
                          children: [
                            n.jsx(pt, { size: 16, className: "mr-2" }),
                            "查看歷史",
                          ],
                        }),
                        n.jsx("button", {
                          onClick: j,
                          disabled: c,
                          className:
                            "flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed",
                          children: c
                            ? n.jsxs(n.Fragment, {
                                children: [
                                  n.jsx("div", {
                                    className:
                                      "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2",
                                  }),
                                  "載入中...",
                                ],
                              })
                            : n.jsxs(n.Fragment, {
                                children: [
                                  n.jsx(ht, { size: 16, className: "mr-2" }),
                                  "新增項目",
                                ],
                              }),
                        }),
                      ],
                    }),
                  ],
                }),
                n.jsxs("span", {
                  className: "text-sm text-gray-500",
                  children: [e.length, " 項缺貨"],
                }),
              ],
            }),
            n.jsx("div", {
              className: "p-4",
              children: n.jsx("div", {
                className: "space-y-2 max-h-52 overflow-y-auto",
                children:
                  e.length === 0
                    ? n.jsxs("div", {
                        className: "text-center text-gray-500 py-4",
                        children: [
                          n.jsx(Ms, {
                            size: 48,
                            className: "mx-auto text-gray-300 mb-2",
                          }),
                          n.jsx("p", { children: "目前無缺貨品項" }),
                        ],
                      })
                    : e.map((g) => {
                        const p = x(g.lastStockDate),
                          h = p > 3 || g.status === "urgent_order";
                        return n.jsxs(
                          "div",
                          {
                            className: `p-3 border rounded-lg transition-colors ${
                              h
                                ? "border-red-200 bg-red-50"
                                : "border-gray-200 bg-white hover:border-gray-300"
                            }`,
                            children: [
                              n.jsx("div", {
                                className:
                                  "flex items-start justify-between mb-2",
                                children: n.jsx("h4", {
                                  className: "font-medium text-gray-800 flex-1",
                                  children: g.drugName,
                                }),
                              }),
                              n.jsx("div", {
                                className: "space-y-1 text-sm text-gray-600",
                                children: n.jsxs("div", {
                                  className: "flex items-center",
                                  children: [
                                    n.jsx(Lr, {
                                      size: 14,
                                      className: "mr-2 text-gray-400",
                                    }),
                                    n.jsxs("span", {
                                      className:
                                        p > 3 ? "text-red-600 font-medium" : "",
                                      children: [
                                        "缺貨 ",
                                        p,
                                        " 天 (自 ",
                                        f(g.lastStockDate),
                                        ")",
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          },
                          g.id
                        );
                      }),
              }),
            }),
          ],
        }),
        n.jsx($0, { isOpen: l, onClose: () => a(!1), onSuccess: v }),
        n.jsx(U0, { isOpen: i, onClose: () => o(!1), onSuccess: k }),
        n.jsx(gi, {
          isOpen: d,
          onClose: () => m(!1),
          sectionKey: "outOfStock",
          sectionTitle: "缺貨通知",
        }),
      ],
    });
  },
  H0 = ({ outOfStockItems: e }) => {
    const [t, r] = w.useState(0),
      l = (() => {
        const u = localStorage.getItem("focusTable_outOfStock_itemsPerPage");
        return u ? parseInt(u, 10) : 5;
      })();
    w.useEffect(() => {
      if (e.length <= l) return;
      const u = setInterval(() => {
        r((d) => {
          const m = d + l;
          return m >= e.length ? 0 : m;
        });
      }, 8e3);
      return () => clearInterval(u);
    }, [e.length, l]);
    const a = (u) => {
        if (!u) return 0;
        try {
          const d = new Date(u),
            m = new Date(),
            f = new Date(d.getFullYear(), d.getMonth(), d.getDate()),
            v =
              new Date(m.getFullYear(), m.getMonth(), m.getDate()).getTime() -
              f.getTime(),
            j = Math.floor(v / (1e3 * 60 * 60 * 24));
          return Math.max(0, j);
        } catch (d) {
          return console.error("日期解析錯誤:", d, "原始日期:", u), 0;
        }
      },
      i = e.slice(t, t + l),
      o = Math.ceil(e.length / l),
      c = Math.floor(t / l) + 1;
    return n.jsxs("div", {
      className:
        "bg-white rounded-xl shadow-lg border border-gray-200 h-full flex flex-col min-h-0 max-h-full",
      children: [
        n.jsxs("div", {
          className: "p-2 border-b border-gray-200 bg-red-50 flex-shrink-0",
          children: [
            n.jsxs("div", {
              className: "flex items-center justify-between mb-2",
              children: [
                n.jsxs("h3", {
                  className:
                    "text-xl font-semibold text-gray-800 flex items-center",
                  children: [
                    n.jsx(Ms, { size: 20, className: "mr-2 text-red-500" }),
                    "缺貨通知",
                  ],
                }),
                n.jsxs("div", {
                  className: "text-sm text-gray-600",
                  children: ["總計: ", e.length, " 項"],
                }),
              ],
            }),
            e.length > l &&
              n.jsxs("div", {
                className:
                  "flex items-center justify-between text-sm text-gray-600",
                children: [
                  n.jsxs("span", { children: ["第 ", c, " / ", o, " 頁"] }),
                  n.jsx("div", {
                    className: "flex space-x-1",
                    children: Array.from({ length: o }, (u, d) =>
                      n.jsx(
                        "div",
                        {
                          className: `w-2 h-2 rounded-full ${
                            d === c - 1 ? "bg-red-500" : "bg-gray-300"
                          }`,
                        },
                        d
                      )
                    ),
                  }),
                ],
              }),
          ],
        }),
        n.jsx("div", {
          className: "flex-1 min-h-0 overflow-hidden",
          children:
            e.length === 0
              ? n.jsx("div", {
                  className:
                    "flex items-center justify-center h-full text-gray-500",
                  children: n.jsxs("div", {
                    className: "text-center",
                    children: [
                      n.jsx(Ee, {
                        size: 32,
                        className: "mx-auto mb-2 text-gray-400",
                      }),
                      n.jsx("p", {
                        className: "text-sm",
                        children: "暫無缺貨項目",
                      }),
                    ],
                  }),
                })
              : n.jsx("div", {
                  className: "h-full overflow-auto",
                  children: n.jsxs("table", {
                    className: "w-full border-collapse",
                    children: [
                      n.jsx("thead", {
                        className:
                          "sticky top-0 bg-gray-50 border-b-2 border-gray-200",
                        children: n.jsxs("tr", {
                          children: [
                            n.jsx("th", {
                              className:
                                "text-base font-semibold text-left p-2 text-gray-700",
                              children: "藥品名稱",
                            }),
                            n.jsx("th", {
                              className:
                                "text-base font-semibold text-center p-2 text-gray-700",
                              children: "缺貨天數",
                            }),
                            n.jsx("th", {
                              className:
                                "text-base font-semibold text-center p-2 text-gray-700",
                              children: "庫存/最低",
                            }),
                          ],
                        }),
                      }),
                      n.jsx("tbody", {
                        children: i.map((u, d) => {
                          const m = a(u.lastStockDate),
                            f = m > 3 || u.status === "urgent_order";
                          return n.jsxs(
                            "tr",
                            {
                              className: `border-b border-gray-200 transition-colors ${
                                f ? "bg-red-50" : "bg-white hover:bg-gray-50"
                              }`,
                              children: [
                                n.jsx("td", {
                                  className: "text-base p-2 text-gray-800",
                                  children: n.jsx("div", {
                                    className: "font-semibold",
                                    children: u.drugName,
                                  }),
                                }),
                                n.jsx("td", {
                                  className: "text-base p-2 text-center",
                                  children: n.jsxs("span", {
                                    className: `font-semibold ${
                                      m > 3 ? "text-red-600" : "text-gray-700"
                                    }`,
                                    children: [m, " 天"],
                                  }),
                                }),
                                n.jsx("td", {
                                  className:
                                    "text-base p-2 text-center text-gray-700",
                                  children:
                                    u.currentStock !== void 0 &&
                                    u.minimumStock !== void 0
                                      ? `${u.currentStock} / ${u.minimumStock}`
                                      : "-",
                                }),
                              ],
                            },
                            `${t}-${d}`
                          );
                        }),
                      }),
                    ],
                  }),
                }),
        }),
      ],
    });
  },
  Ju = ({
    outOfStockItems: e,
    isFullscreen: t = !1,
    onItemAdded: r,
    showInFocus: s,
    onFocusToggle: l,
    error: a,
  }) =>
    a != null && a.hasError
      ? t
        ? n.jsx("div", {
            className: "bg-gray-800 rounded-lg p-6 h-full",
            children: n.jsx(De, { message: a.message || "資料載入失敗" }),
          })
        : n.jsx(De, { message: a.message || "資料載入失敗" })
      : t
      ? n.jsx(H0, { outOfStockItems: e })
      : n.jsx(V0, {
          outOfStockItems: e,
          onItemAdded: r,
          showInFocus: s,
          onFocusToggle: l,
        }),
  B0 = ({ isOpen: e, onClose: t, onSuccess: r }) => {
    const [s, l] = w.useState({
        originalDrug: null,
        reason: "",
        start_time: "",
        end_time: "",
      }),
      [a, i] = w.useState([]),
      [o, c] = w.useState([]),
      [u, d] = w.useState(""),
      [m, f] = w.useState(!1),
      [x, v] = w.useState(!1),
      [j, k] = w.useState(!1),
      [g, p] = w.useState(null);
    Te.useEffect(() => {
      if (e) {
        const b = new Date(),
          I = b.toISOString().slice(0, 16),
          P = new Date(b);
        P.setMonth(P.getMonth() + 1);
        const A = P.toISOString().slice(0, 16);
        l({ originalDrug: null, reason: "", start_time: I, end_time: A }),
          d(""),
          c([]),
          f(!1),
          p(null),
          h();
      }
    }, [e]);
    const h = async () => {
        v(!0);
        try {
          const b = await Zs();
          b.Code === 200 && b.Data
            ? i(b.Data)
            : console.warn("Failed to load medicine data:", b);
        } catch (b) {
          console.error("Error loading medicine data:", b);
        } finally {
          v(!1);
        }
      },
      N = (b, I) => {
        l((P) => ({ ...P, [b]: I }));
      },
      _ = (b) => {
        if ((d(b), !b.trim())) {
          c([]), f(!1);
          return;
        }
        const I = b.toLowerCase(),
          P = a.filter((A) => {
            const le = (A.NAME || "").toLowerCase(),
              R = (A.CODE || "").toLowerCase(),
              G = (A.SKDIACODE || "").toLowerCase(),
              Ae = (A.CHT_NAME || "").toLowerCase();
            return (
              le.includes(I) || R.includes(I) || G.includes(I) || Ae.includes(I)
            );
          });
        c(P.slice(0, 10)), f(P.length > 0);
      },
      D = (b) => {
        l((I) => ({ ...I, originalDrug: b })), d(b.NAME), f(!1), c([]);
      },
      T = () => {
        if (!s.originalDrug) return "請選擇藥品";
        if (!s.reason.trim()) return "請輸入替換原因";
        if (!s.start_time) return "請選擇開始時間";
        if (!s.end_time) return "請選擇結束時間";
        const b = new Date(s.start_time);
        return new Date(s.end_time) <= b ? "結束時間必須晚於開始時間" : null;
      },
      E = async () => {
        p(null);
        const b = T();
        if (b) {
          p(b);
          return;
        }
        const I = In();
        if (!I) {
          p("無法獲取使用者資訊，請重新登入");
          return;
        }
        k(!0);
        try {
          const P = (le) => le.replace("T", " ") + ":00",
            A = {
              title: "藥品通知",
              content: `${s.originalDrug.NAME.trim()};${s.originalDrug.CODE.trim()}`,
              note: s.reason.trim(),
              priority: "Important",
              creator_dept: I.Employer || "",
              creator_name: I.Name || "",
              start_time: P(s.start_time),
              end_time: P(s.end_time),
            };
          await l0(A), t(), r();
        } catch (P) {
          p(
            P instanceof Error ? P.message : "新增藥品通知項目失敗，請稍後再試"
          );
        } finally {
          k(!1);
        }
      },
      y = () => {
        j || t();
      };
    return e
      ? n.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
          children: n.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
            children: [
              n.jsxs("div", {
                className:
                  "flex items-center justify-between p-6 border-b border-gray-200",
                children: [
                  n.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      n.jsx(ht, { size: 24, className: "text-blue-600 mr-3" }),
                      n.jsx("h2", {
                        className: "text-xl font-semibold text-gray-800",
                        children: "新增藥品通知",
                      }),
                    ],
                  }),
                  n.jsx("button", {
                    onClick: y,
                    disabled: j,
                    className:
                      "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                    children: n.jsx(Re, { size: 20 }),
                  }),
                ],
              }),
              n.jsxs("div", {
                className: "p-6 space-y-6",
                children: [
                  g &&
                    n.jsxs("div", {
                      className:
                        "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center",
                      children: [
                        n.jsx(qe, {
                          size: 20,
                          className: "mr-2 flex-shrink-0",
                        }),
                        g,
                      ],
                    }),
                  n.jsxs("div", {
                    className: "relative",
                    children: [
                      n.jsxs("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: [
                          "藥品名稱 ",
                          n.jsx("span", {
                            className: "text-red-500",
                            children: "*",
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className: "relative",
                        children: [
                          n.jsx("div", {
                            className:
                              "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",
                            children: n.jsx(Cn, {
                              size: 16,
                              className: "text-gray-400",
                            }),
                          }),
                          n.jsx("input", {
                            type: "text",
                            value: u,
                            onChange: (b) => _(b.target.value),
                            onFocus: () => {
                              o.length > 0 && f(!0);
                            },
                            disabled: j || x,
                            className:
                              "w-full pl-10 pr-10 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                            placeholder: "請輸入藥品名稱進行搜尋",
                            autoComplete: "off",
                          }),
                          x &&
                            n.jsx("div", {
                              className:
                                "absolute inset-y-0 right-0 flex items-center pr-3",
                              children: n.jsx(X, { size: "small" }),
                            }),
                          m &&
                            n.jsx("div", {
                              className:
                                "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",
                              children: n.jsx(kn, {
                                size: 16,
                                className: "text-gray-400",
                              }),
                            }),
                        ],
                      }),
                      m &&
                        o.length > 0 &&
                        n.jsx("div", {
                          className:
                            "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                          children: o.map((b, I) =>
                            n.jsxs(
                              "button",
                              {
                                type: "button",
                                onClick: () => D(b),
                                className:
                                  "w-full px-4 py-2 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors border-b border-gray-100 last:border-b-0",
                                children: [
                                  n.jsx("div", {
                                    className: "font-medium text-gray-900",
                                    children: b.NAME,
                                  }),
                                  n.jsxs("div", {
                                    className:
                                      "text-sm text-gray-500 space-y-0.5",
                                    children: [
                                      n.jsxs("div", {
                                        children: ["藥碼: ", b.CODE],
                                      }),
                                      b.SKDIACODE &&
                                        n.jsxs("div", {
                                          children: ["料號: ", b.SKDIACODE],
                                        }),
                                      b.CHT_NAME &&
                                        n.jsxs("div", {
                                          children: ["中文名: ", b.CHT_NAME],
                                        }),
                                    ],
                                  }),
                                ],
                              },
                              I
                            )
                          ),
                        }),
                    ],
                  }),
                  m &&
                    n.jsx("div", {
                      className: "fixed inset-0 z-40",
                      onClick: () => f(!1),
                    }),
                  n.jsxs("div", {
                    children: [
                      n.jsxs("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: [
                          "替換原因 ",
                          n.jsx("span", {
                            className: "text-red-500",
                            children: "*",
                          }),
                        ],
                      }),
                      n.jsx("textarea", {
                        value: s.reason,
                        onChange: (b) => N("reason", b.target.value),
                        disabled: j,
                        rows: 4,
                        className:
                          "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical disabled:opacity-50 disabled:bg-gray-100",
                        placeholder: "請輸入替換原因",
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                    children: [
                      n.jsxs("div", {
                        children: [
                          n.jsxs("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: [
                              "開始時間 ",
                              n.jsx("span", {
                                className: "text-red-500",
                                children: "*",
                              }),
                            ],
                          }),
                          n.jsx("input", {
                            type: "datetime-local",
                            value: s.start_time,
                            onChange: (b) => N("start_time", b.target.value),
                            disabled: j,
                            className:
                              "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        children: [
                          n.jsxs("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: [
                              "結束時間 ",
                              n.jsx("span", {
                                className: "text-red-500",
                                children: "*",
                              }),
                            ],
                          }),
                          n.jsx("input", {
                            type: "datetime-local",
                            value: s.end_time,
                            onChange: (b) => N("end_time", b.target.value),
                            disabled: j,
                            className:
                              "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                          }),
                        ],
                      }),
                    ],
                  }),
                  x &&
                    n.jsxs("div", {
                      className: "text-sm text-gray-500 flex items-center",
                      children: [
                        n.jsx(X, { size: "small", className: "mr-2" }),
                        "載入藥品資料中...",
                      ],
                    }),
                ],
              }),
              n.jsxs("div", {
                className:
                  "flex items-center justify-end space-x-4 p-6 border-t border-gray-200 bg-gray-50",
                children: [
                  n.jsx("button", {
                    onClick: y,
                    disabled: j,
                    className:
                      "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                    children: "取消",
                  }),
                  n.jsx("button", {
                    onClick: E,
                    disabled: j || !s.originalDrug || !s.reason.trim(),
                    className:
                      "flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                    children: j
                      ? n.jsxs(n.Fragment, {
                          children: [
                            n.jsx(X, { size: "small", className: "mr-2" }),
                            "新增中...",
                          ],
                        })
                      : n.jsxs(n.Fragment, {
                          children: [
                            n.jsx(ht, { size: 16, className: "mr-2" }),
                            "新增項目",
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
  q0 = ({ isOpen: e, onClose: t, onSuccess: r }) => {
    const [s, l] = w.useState([]),
      [a, i] = w.useState(!1),
      [o, c] = w.useState(null),
      [u, d] = w.useState(null),
      [m, f] = w.useState(!1),
      [x, v] = w.useState(!1),
      [j, k] = w.useState(!1),
      [g, p] = w.useState([]),
      [h, N] = w.useState([]),
      [_, D] = w.useState(null),
      [T, E] = w.useState(!1);
    w.useEffect(() => {
      e && y();
    }, [e]);
    const y = async () => {
        i(!0), c(null);
        try {
          const S = await s0();
          if (S.Code === 200) l(S.Data || []);
          else throw new Error(S.Result || "載入歷史藥品通知項目失敗");
        } catch (S) {
          c(S instanceof Error ? S.message : "載入歷史藥品通知項目時發生錯誤");
        } finally {
          i(!1);
        }
      },
      b = async () => {
        E(!0);
        try {
          const S = await Zs();
          S.Code === 200 && S.Data
            ? p(S.Data)
            : console.warn("Failed to load medicine data:", S);
        } catch (S) {
          console.error("Error loading medicine data:", S);
        } finally {
          E(!1);
        }
      },
      I = (S) => {
        const U = (ee) => {
          if (!ee) return "";
          try {
            const _e = ee.replace(/\//g, "-");
            return new Date(_e).toISOString().slice(0, 16);
          } catch (_e) {
            return (
              console.error("Error formatting date for input:", ee, _e), ""
            );
          }
        };
        d({
          GUID: S.GUID,
          title: S.title || "",
          content: S.content || "",
          note: S.note || "",
          priority: S.priority || "Normal",
          creator_dept: S.creator_dept || "",
          creator_name: S.creator_name || "",
          start_time: U(S.start_time),
          end_time: U(S.end_time),
          created_time: S.created_time || "",
        }),
          g.length === 0 && b();
      },
      P = (S, U) => {
        if (!S.trim()) {
          N([]), D(null);
          return;
        }
        const ee = g.filter((_e) =>
          _e.NAME.toLowerCase().includes(S.toLowerCase())
        );
        N(ee.slice(0, 10)), D(ee.length > 0 ? U : null);
      },
      A = (S, U) => {
        if (u) {
          const ee = u.content.split(";");
          let _e = "";
          U === "original"
            ? (_e = `${S};${ee[1] || ""}`)
            : (_e = `${ee[0] || ""};${S}`),
            d({ ...u, content: _e });
        }
        D(null), N([]);
      },
      le = (S) => {
        var U;
        return ((U = S.split(";")[0]) == null ? void 0 : U.trim()) || "";
      },
      R = (S) => {
        var U;
        return ((U = S.split(";")[1]) == null ? void 0 : U.trim()) || "";
      },
      G = async () => {
        if (u) {
          f(!0), c(null);
          try {
            const S = (ee) =>
                ee ? ee.replace("T", " ").replace(/-/g, "/") + ":00" : "",
              U = {
                GUID: u.GUID,
                title: u.title.trim(),
                content: u.content.trim(),
                note: u.note.trim(),
                priority: u.priority,
                creator_dept: u.creator_dept,
                creator_name: u.creator_name,
                start_time: S(u.start_time),
                end_time: S(u.end_time),
              };
            await a0(U), await y(), d(null), r && r();
          } catch (S) {
            c(
              S instanceof Error
                ? S.message
                : "更新藥品通知項目失敗，請稍後再試"
            );
          } finally {
            f(!1);
          }
        }
      },
      Ae = async () => {
        if (u) {
          k(!0), c(null), v(!1);
          try {
            await i0(u.GUID), await y(), d(null), r && r();
          } catch (S) {
            c(
              S instanceof Error
                ? S.message
                : "刪除藥品通知項目失敗，請稍後再試"
            );
          } finally {
            k(!1);
          }
        }
      },
      M = (S) => {
        if (!S) return "-";
        try {
          const U = S.replace(/\//g, "-");
          return new Date(U).toLocaleString("zh-TW", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: !1,
          });
        } catch {
          return S;
        }
      },
      L = (S) => {
        switch (S) {
          case "Critical":
            return "緊急";
          case "Important":
            return "重要";
          case "Normal":
            return "一般";
          default:
            return S || "一般";
        }
      },
      C = (S) => {
        switch (S) {
          case "Critical":
            return "bg-red-100 text-red-800";
          case "Important":
            return "bg-yellow-100 text-yellow-800";
          case "Normal":
            return "bg-green-100 text-green-800";
          default:
            return "bg-gray-100 text-gray-800";
        }
      },
      $ = () => {
        !a && !m && !j && (d(null), v(!1), t());
      };
    return e
      ? n.jsxs("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
          children: [
            n.jsxs("div", {
              className:
                "bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto",
              children: [
                n.jsxs("div", {
                  className:
                    "flex items-center justify-between p-6 border-b border-gray-200",
                  children: [
                    n.jsxs("div", {
                      className: "flex items-center",
                      children: [
                        n.jsx(pt, {
                          size: 24,
                          className: "text-blue-600 mr-3",
                        }),
                        n.jsx("h2", {
                          className: "text-xl font-semibold text-gray-800",
                          children: "歷史藥品通知",
                        }),
                      ],
                    }),
                    n.jsx("button", {
                      onClick: $,
                      disabled: a || m,
                      className:
                        "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                      children: n.jsx(Re, { size: 20 }),
                    }),
                  ],
                }),
                n.jsxs("div", {
                  className: "p-6",
                  children: [
                    o &&
                      n.jsxs("div", {
                        className:
                          "mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center",
                        children: [
                          n.jsx(qe, {
                            size: 20,
                            className: "mr-2 flex-shrink-0",
                          }),
                          o,
                        ],
                      }),
                    a
                      ? n.jsxs("div", {
                          className: "flex items-center justify-center py-12",
                          children: [
                            n.jsx(X, { size: "large" }),
                            n.jsx("span", {
                              className: "ml-3 text-gray-500",
                              children: "載入歷史藥品通知中...",
                            }),
                          ],
                        })
                      : s.length === 0
                      ? n.jsxs("div", {
                          className: "text-center text-gray-500 py-12",
                          children: [
                            n.jsx(pt, {
                              size: 48,
                              className: "mx-auto text-gray-300 mb-2",
                            }),
                            n.jsx("p", { children: "暫無歷史藥品通知項目" }),
                          ],
                        })
                      : n.jsx("div", {
                          className: "overflow-x-auto",
                          children: n.jsx("div", {
                            className: "max-h-96 overflow-y-auto",
                            children: n.jsxs("table", {
                              className: "min-w-full divide-y divide-gray-200",
                              children: [
                                n.jsx("thead", {
                                  className: "bg-gray-50 sticky top-0 z-10",
                                  children: n.jsxs("tr", {
                                    children: [
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "建立時間",
                                      }),
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "藥名",
                                      }),
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "藥碼",
                                      }),
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "替換原因",
                                      }),
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "重要程度",
                                      }),
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "建立人員",
                                      }),
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "開始時間",
                                      }),
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "結束時間",
                                      }),
                                    ],
                                  }),
                                }),
                                n.jsx("tbody", {
                                  className:
                                    "bg-white divide-y divide-gray-200",
                                  children: s.map((S) =>
                                    n.jsxs(
                                      "tr",
                                      {
                                        className:
                                          "hover:bg-blue-50 cursor-pointer transition-colors",
                                        onClick: () => I(S),
                                        title: "點擊編輯此藥品通知項目",
                                        children: [
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: M(S.created_time),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 text-sm text-gray-900 max-w-xs",
                                            children: n.jsx("div", {
                                              className: "truncate",
                                              title: le(S.content),
                                              children: le(S.content) || "-",
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 text-sm text-gray-900 max-w-xs",
                                            children: n.jsx("div", {
                                              className: "truncate",
                                              title: R(S.content),
                                              children: R(S.content) || "-",
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 text-sm text-gray-900 max-w-md",
                                            children: n.jsx("div", {
                                              className: "truncate",
                                              title: S.note,
                                              children: S.note || "-",
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap",
                                            children: n.jsx("span", {
                                              className: `px-2 py-1 rounded-full text-xs font-medium ${C(
                                                S.priority
                                              )}`,
                                              children: L(S.priority),
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children:
                                              `${S.creator_dept || ""} ${
                                                S.creator_name || ""
                                              }`.trim() || "-",
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: M(S.start_time),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: M(S.end_time),
                                          }),
                                        ],
                                      },
                                      S.GUID
                                    )
                                  ),
                                }),
                              ],
                            }),
                          }),
                        }),
                  ],
                }),
              ],
            }),
            u &&
              n.jsx("div", {
                className:
                  "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4",
                children: n.jsxs("div", {
                  className:
                    "bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
                  children: [
                    n.jsxs("div", {
                      className:
                        "flex items-center justify-between p-6 border-b border-gray-200",
                      children: [
                        n.jsxs("div", {
                          className: "flex items-center",
                          children: [
                            n.jsx(Pr, {
                              size: 24,
                              className: "text-green-600 mr-3",
                            }),
                            n.jsx("h2", {
                              className: "text-xl font-semibold text-gray-800",
                              children: "編輯藥品通知",
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            n.jsxs("button", {
                              onClick: () => v(!0),
                              disabled: m || j,
                              className:
                                "flex items-center px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                              title: "刪除藥品通知項目",
                              children: [
                                n.jsx(ct, { size: 16, className: "mr-2" }),
                                "刪除",
                              ],
                            }),
                            n.jsx("button", {
                              onClick: () => d(null),
                              disabled: m || j,
                              className:
                                "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                              children: n.jsx(Re, { size: 20 }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    n.jsxs("div", {
                      className: "p-6 space-y-6",
                      children: [
                        n.jsxs("div", {
                          className: "relative",
                          children: [
                            n.jsxs("label", {
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: [
                                "原藥品名稱 ",
                                n.jsx("span", {
                                  className: "text-red-500",
                                  children: "*",
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              className: "relative",
                              children: [
                                n.jsx("div", {
                                  className:
                                    "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",
                                  children: n.jsx(Cn, {
                                    size: 16,
                                    className: "text-gray-400",
                                  }),
                                }),
                                n.jsx("input", {
                                  type: "text",
                                  value: le(u.content),
                                  onChange: (S) => {
                                    const U = `${S.target.value};${R(
                                      u.content
                                    )}`;
                                    d({ ...u, content: U }),
                                      P(S.target.value, "original");
                                  },
                                  onFocus: () => {
                                    h.length > 0 && D("original");
                                  },
                                  disabled: m || T,
                                  className:
                                    "w-full pl-10 pr-10 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                  placeholder: "請輸入原藥品名稱進行搜尋",
                                  autoComplete: "off",
                                }),
                                T &&
                                  n.jsx("div", {
                                    className:
                                      "absolute inset-y-0 right-0 flex items-center pr-3",
                                    children: n.jsx(X, { size: "small" }),
                                  }),
                                _ === "original" &&
                                  n.jsx("div", {
                                    className:
                                      "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",
                                    children: n.jsx(kn, {
                                      size: 16,
                                      className: "text-gray-400",
                                    }),
                                  }),
                              ],
                            }),
                            _ === "original" &&
                              h.length > 0 &&
                              n.jsx("div", {
                                className:
                                  "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                                children: h.map((S, U) =>
                                  n.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      onClick: () => A(S.NAME, "original"),
                                      className:
                                        "w-full px-4 py-2 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors border-b border-gray-100 last:border-b-0",
                                      children: n.jsx("div", {
                                        className: "font-medium text-gray-900",
                                        children: S.NAME,
                                      }),
                                    },
                                    U
                                  )
                                ),
                              }),
                          ],
                        }),
                        n.jsxs("div", {
                          className: "relative",
                          children: [
                            n.jsxs("label", {
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: [
                                "替換藥品名稱 ",
                                n.jsx("span", {
                                  className: "text-red-500",
                                  children: "*",
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              className: "relative",
                              children: [
                                n.jsx("div", {
                                  className:
                                    "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",
                                  children: n.jsx(Cn, {
                                    size: 16,
                                    className: "text-gray-400",
                                  }),
                                }),
                                n.jsx("input", {
                                  type: "text",
                                  value: R(u.content),
                                  onChange: (S) => {
                                    const U = `${le(u.content)};${
                                      S.target.value
                                    }`;
                                    d({ ...u, content: U }),
                                      P(S.target.value, "replacement");
                                  },
                                  onFocus: () => {
                                    h.length > 0 && D("replacement");
                                  },
                                  disabled: m || T,
                                  className:
                                    "w-full pl-10 pr-10 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                  placeholder: "請輸入替換藥品名稱進行搜尋",
                                  autoComplete: "off",
                                }),
                                T &&
                                  n.jsx("div", {
                                    className:
                                      "absolute inset-y-0 right-0 flex items-center pr-3",
                                    children: n.jsx(X, { size: "small" }),
                                  }),
                                _ === "replacement" &&
                                  n.jsx("div", {
                                    className:
                                      "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",
                                    children: n.jsx(kn, {
                                      size: 16,
                                      className: "text-gray-400",
                                    }),
                                  }),
                              ],
                            }),
                            _ === "replacement" &&
                              h.length > 0 &&
                              n.jsx("div", {
                                className:
                                  "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                                children: h.map((S, U) =>
                                  n.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      onClick: () => A(S.NAME, "replacement"),
                                      className:
                                        "w-full px-4 py-2 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors border-b border-gray-100 last:border-b-0",
                                      children: n.jsx("div", {
                                        className: "font-medium text-gray-900",
                                        children: S.NAME,
                                      }),
                                    },
                                    U
                                  )
                                ),
                              }),
                          ],
                        }),
                        _ &&
                          n.jsx("div", {
                            className: "fixed inset-0 z-40",
                            onClick: () => D(null),
                          }),
                        n.jsxs("div", {
                          children: [
                            n.jsxs("label", {
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: [
                                "替換原因 ",
                                n.jsx("span", {
                                  className: "text-red-500",
                                  children: "*",
                                }),
                              ],
                            }),
                            n.jsx("textarea", {
                              value: u.note,
                              onChange: (S) =>
                                d({ ...u, note: S.target.value }),
                              disabled: m,
                              rows: 4,
                              className:
                                "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical disabled:opacity-50 disabled:bg-gray-100",
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          children: [
                            n.jsxs("label", {
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: [
                                "重要程度 ",
                                n.jsx("span", {
                                  className: "text-red-500",
                                  children: "*",
                                }),
                              ],
                            }),
                            n.jsxs("select", {
                              value: u.priority,
                              onChange: (S) =>
                                d({ ...u, priority: S.target.value }),
                              disabled: m,
                              className:
                                "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                              children: [
                                n.jsx("option", {
                                  value: "Normal",
                                  children: "一般",
                                }),
                                n.jsx("option", {
                                  value: "Important",
                                  children: "重要",
                                }),
                                n.jsx("option", {
                                  value: "Critical",
                                  children: "緊急",
                                }),
                              ],
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                          children: [
                            n.jsxs("div", {
                              children: [
                                n.jsxs("label", {
                                  className:
                                    "block text-sm font-medium text-gray-700 mb-2",
                                  children: [
                                    "開始時間 ",
                                    n.jsx("span", {
                                      className: "text-red-500",
                                      children: "*",
                                    }),
                                  ],
                                }),
                                n.jsx("input", {
                                  type: "datetime-local",
                                  value: u.start_time,
                                  onChange: (S) =>
                                    d({ ...u, start_time: S.target.value }),
                                  disabled: m,
                                  className:
                                    "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              children: [
                                n.jsxs("label", {
                                  className:
                                    "block text-sm font-medium text-gray-700 mb-2",
                                  children: [
                                    "結束時間 ",
                                    n.jsx("span", {
                                      className: "text-red-500",
                                      children: "*",
                                    }),
                                  ],
                                }),
                                n.jsx("input", {
                                  type: "datetime-local",
                                  value: u.end_time,
                                  onChange: (S) =>
                                    d({ ...u, end_time: S.target.value }),
                                  disabled: m,
                                  className:
                                    "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                }),
                              ],
                            }),
                          ],
                        }),
                        T &&
                          n.jsxs("div", {
                            className:
                              "text-sm text-gray-500 flex items-center",
                            children: [
                              n.jsx(X, { size: "small", className: "mr-2" }),
                              "載入藥品資料中...",
                            ],
                          }),
                      ],
                    }),
                    n.jsxs("div", {
                      className:
                        "flex items-center justify-end space-x-4 p-6 border-t border-gray-200 bg-gray-50",
                      children: [
                        n.jsx("button", {
                          onClick: () => d(null),
                          disabled: m || j,
                          className:
                            "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        n.jsx("button", {
                          onClick: G,
                          disabled:
                            m || j || !u.content.trim() || !u.note.trim(),
                          className:
                            "flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                          children:
                            m || j
                              ? n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(X, {
                                      size: "small",
                                      className: "mr-2",
                                    }),
                                    m ? "更新中..." : "處理中...",
                                  ],
                                })
                              : n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(Pr, { size: 16, className: "mr-2" }),
                                    "更新項目",
                                  ],
                                }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            x &&
              u &&
              n.jsx("div", {
                className:
                  "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[110] p-4",
                children: n.jsx("div", {
                  className: "bg-white rounded-lg shadow-xl max-w-md w-full",
                  children: n.jsxs("div", {
                    className: "p-6",
                    children: [
                      n.jsxs("div", {
                        className: "flex items-center mb-4",
                        children: [
                          n.jsx(ct, {
                            size: 24,
                            className: "text-red-600 mr-3",
                          }),
                          n.jsx("h3", {
                            className: "text-lg font-semibold text-gray-800",
                            children: "確認刪除藥品通知項目",
                          }),
                        ],
                      }),
                      n.jsxs("p", {
                        className: "text-gray-600 mb-2",
                        children: [
                          "您確定要刪除藥品通知項目「",
                          le(u.content),
                          " → ",
                          R(u.content),
                          "」嗎？",
                        ],
                      }),
                      n.jsx("p", {
                        className: "text-sm text-red-600 mb-6",
                        children: "此操作無法復原，請謹慎操作。",
                      }),
                      n.jsxs("div", {
                        className: "flex items-center justify-end space-x-4",
                        children: [
                          n.jsx("button", {
                            onClick: () => v(!1),
                            disabled: j,
                            className:
                              "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                            children: "取消",
                          }),
                          n.jsx("button", {
                            onClick: Ae,
                            disabled: j,
                            className:
                              "flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                            children: j
                              ? n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(X, {
                                      size: "small",
                                      className: "mr-2",
                                    }),
                                    "刪除中...",
                                  ],
                                })
                              : n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(ct, { size: 16, className: "mr-2" }),
                                    "確認刪除",
                                  ],
                                }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
          ],
        })
      : null;
  },
  Q0 = ({
    drugReplacements: e,
    onItemAdded: t,
    showInFocus: r = !0,
    onFocusToggle: s,
  }) => {
    const [l, a] = Te.useState(!1),
      [i, o] = Te.useState(!1),
      c = (f) => {
        switch (f) {
          case "high":
            return "border-red-200 bg-red-50";
          case "medium":
            return "border-yellow-200 bg-yellow-50";
          case "low":
            return "border-green-200 bg-green-50";
          default:
            return "border-gray-200 bg-white";
        }
      },
      u = (f) => {
        const x = new Date(f),
          v = new Date();
        return (
          x.getTime() - v.getTime(),
          x.toLocaleDateString("zh-TW", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })
        );
      },
      d = () => {
        t && t();
      },
      m = () => {
        t && t();
      };
    return n.jsxs(n.Fragment, {
      children: [
        n.jsxs("div", {
          className: "bg-white rounded-lg shadow-sm border border-gray-200",
          children: [
            n.jsxs("div", {
              className: "p-4 border-b border-gray-200",
              children: [
                n.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    n.jsxs("div", {
                      className: "flex items-center",
                      children: [
                        n.jsx(kr, {
                          size: 20,
                          className: "text-purple-600 mr-2",
                        }),
                        n.jsx("h3", {
                          className: "text-lg font-semibold text-gray-800",
                          children: "藥品通知",
                        }),
                        s &&
                          n.jsxs("div", {
                            className: "ml-4 flex items-center",
                            children: [
                              n.jsxs("label", {
                                className:
                                  "relative inline-flex items-center cursor-pointer",
                                children: [
                                  n.jsx("input", {
                                    type: "checkbox",
                                    className: "sr-only peer",
                                    checked: r,
                                    onChange: (f) => s(f.target.checked),
                                  }),
                                  n.jsx("div", {
                                    className:
                                      "w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600",
                                  }),
                                ],
                              }),
                              n.jsx("span", {
                                className: "ml-2 text-xs text-gray-500",
                                children: "專注顯示",
                              }),
                            ],
                          }),
                      ],
                    }),
                    n.jsxs("div", {
                      className: "flex items-center space-x-2",
                      children: [
                        n.jsxs("button", {
                          onClick: () => o(!0),
                          className:
                            "flex items-center px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors text-sm",
                          children: [
                            n.jsx(pt, { size: 16, className: "mr-2" }),
                            "查看歷史",
                          ],
                        }),
                        n.jsxs("button", {
                          onClick: () => a(!0),
                          className:
                            "flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors text-sm",
                          children: [
                            n.jsx(ht, { size: 16, className: "mr-2" }),
                            "新增項目",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                n.jsxs("span", {
                  className: "text-sm text-gray-500",
                  children: [e.length, " 項通知"],
                }),
              ],
            }),
            n.jsx("div", {
              className: "p-4",
              children: n.jsx("div", {
                className: "space-y-3 max-h-60 overflow-y-auto",
                children:
                  e.length === 0
                    ? n.jsxs("div", {
                        className: "text-center text-gray-500 py-4",
                        children: [
                          n.jsx(kr, {
                            size: 48,
                            className: "mx-auto text-gray-300 mb-2",
                          }),
                          n.jsx("p", { children: "暫無藥品通知" }),
                        ],
                      })
                    : e.map((f) => {
                        const [x, v] = [f.originalDrug, f.replacementDrug];
                        return n.jsxs(
                          "div",
                          {
                            className: `p-3 rounded-lg border ${c(f.priority)}`,
                            children: [
                              n.jsx("div", {
                                className: "space-y-2 text-sm",
                                children: n.jsx("div", {
                                  className:
                                    "bg-white rounded p-2 border border-gray-100",
                                  children: n.jsxs("div", {
                                    className: "flex flex-col gap-2",
                                    children: [
                                      n.jsx("div", {
                                        className: "font-medium text-gray-900",
                                        children: x,
                                      }),
                                      n.jsx("div", {
                                        className:
                                          "pl-2 font-medium text-gray-600",
                                        children: v,
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                              n.jsxs("div", {
                                className:
                                  "mt-3 space-y-2 text-sm text-gray-600",
                                children: [
                                  n.jsxs("div", {
                                    className: "flex items-center",
                                    children: [
                                      n.jsx(Kt, {
                                        size: 14,
                                        className: "mr-2 text-gray-400",
                                      }),
                                      n.jsxs("span", {
                                        children: ["原因: ", f.reason],
                                      }),
                                    ],
                                  }),
                                  n.jsxs("div", {
                                    className: "flex items-center",
                                    children: [
                                      n.jsx(Xs, {
                                        size: 14,
                                        className: "mr-2 text-gray-400",
                                      }),
                                      n.jsxs("span", {
                                        children: [
                                          "生效日期: ",
                                          u(f.effectiveDate),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          f.id || `${f.originalDrug}`
                        );
                      }),
              }),
            }),
          ],
        }),
        n.jsx(B0, { isOpen: l, onClose: () => a(!1), onSuccess: d }),
        n.jsx(q0, { isOpen: i, onClose: () => o(!1), onSuccess: m }),
      ],
    });
  },
  W0 = ({ drugReplacements: e }) => {
    const [t, r] = w.useState(0),
      s = (c) => {
        switch (c) {
          case "high":
            return "border-red-200 bg-red-50";
          case "medium":
            return "border-yellow-200 bg-yellow-50";
          case "low":
            return "border-green-200 bg-green-50";
          default:
            return "border-gray-200 bg-white";
        }
      };
    w.useEffect(() => {
      if (e.length <= 1) return;
      const c = setInterval(() => {
        r((u) => (u + 1) % e.length);
      }, 8e3);
      return () => clearInterval(c);
    }, [e.length]);
    const l = (c) => {
      const u = new Date(c),
        d = new Date();
      return (
        u.getTime() - d.getTime(),
        u.toLocaleDateString("zh-TW", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
      );
    };
    if (e.length === 0)
      return n.jsxs("div", {
        className:
          "bg-white rounded-lg shadow-sm border border-gray-200 h-full flex flex-col",
        children: [
          n.jsx("div", {
            className: "p-2 border-b border-gray-200 bg-purple-50",
            children: n.jsxs("div", {
              className: "flex items-center",
              children: [
                n.jsx(kr, { size: 20, className: "text-purple-600 mr-2" }),
                n.jsx("h3", {
                  className: "text-xl font-semibold text-gray-800",
                  children: "藥品通知",
                }),
              ],
            }),
          }),
          n.jsx("div", {
            className: "flex-1 flex items-center justify-center",
            children: n.jsxs("div", {
              className: "text-center text-gray-500",
              children: [
                n.jsx(kr, {
                  size: 32,
                  className: "mx-auto text-gray-300 mb-2",
                }),
                n.jsx("p", { className: "text-sm", children: "暫無藥品通知" }),
              ],
            }),
          }),
        ],
      });
    const a = e[t],
      [i, o] = [a.originalDrug, a.replacementDrug];
    return n.jsxs("div", {
      className:
        "bg-white rounded-xl shadow-lg border border-gray-200 h-full flex flex-col",
      children: [
        n.jsx("div", {
          className: "p-2 border-b border-gray-200 bg-purple-50",
          children: n.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              n.jsxs("div", {
                className: "flex items-center",
                children: [
                  n.jsx(kr, { size: 20, className: "text-purple-600 mr-2" }),
                  n.jsx("h3", {
                    className: "text-xl font-semibold text-gray-800",
                    children: "藥品通知",
                  }),
                ],
              }),
              n.jsxs("span", {
                className: "text-sm text-gray-500 font-medium",
                children: [t + 1, "/", e.length],
              }),
            ],
          }),
        }),
        n.jsx("div", {
          className: "flex-1 p-3",
          children: n.jsxs("div", {
            className: `h-full p-4 border rounded-xl transition-colors ${s(
              a.priority
            )}`,
            children: [
              n.jsx("div", {
                className: "space-y-2 text-sm",
                children: n.jsx("div", {
                  className: "bg-white rounded p-3 border border-gray-100",
                  children: n.jsxs("div", {
                    className: "flex flex-col gap-2",
                    children: [
                      n.jsx("div", {
                        className: "font-medium text-gray-900 text-base",
                        children: i,
                      }),
                      n.jsx("div", {
                        className: "pl-2 font-medium text-gray-600 text-base",
                        children: o,
                      }),
                    ],
                  }),
                }),
              }),
              n.jsxs("div", {
                className: "mt-4 space-y-2 text-base text-gray-600",
                children: [
                  n.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      n.jsx(Kt, { size: 16, className: "mr-2 text-gray-400" }),
                      n.jsxs("span", { children: ["原因: ", a.reason] }),
                    ],
                  }),
                  n.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      n.jsx(Xs, { size: 16, className: "mr-2 text-gray-400" }),
                      n.jsxs("span", {
                        children: ["生效: ", l(a.effectiveDate)],
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
  },
  Zu = ({
    drugReplacements: e,
    isFullscreen: t = !1,
    onItemAdded: r,
    showInFocus: s,
    onFocusToggle: l,
    error: a,
  }) =>
    a != null && a.hasError
      ? t
        ? n.jsx("div", {
            className: "bg-gray-800 rounded-lg p-6 h-full",
            children: n.jsx(De, { message: a.message || "資料載入失敗" }),
          })
        : n.jsx(De, { message: a.message || "資料載入失敗" })
      : t
      ? n.jsx(W0, { drugReplacements: e })
      : n.jsx(Q0, {
          drugReplacements: e,
          onItemAdded: r,
          showInFocus: s,
          onFocusToggle: l,
        }),
  G0 = ({ inventoryHighlights: e, showInFocus: t = !0, onFocusToggle: r }) => {
    const [s, l] = Te.useState(!1);
    return n.jsxs("div", {
      className: "bg-white rounded-lg shadow-sm border border-gray-200 h-full",
      children: [
        n.jsx("div", {
          className: "p-4 border-b border-gray-200",
          children: n.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              n.jsxs("div", {
                className: "flex items-center",
                children: [
                  n.jsx(Ee, { size: 20, className: "text-blue-600 mr-2" }),
                  n.jsx("h3", {
                    className: "text-lg font-semibold text-gray-800",
                    children: "即時庫存重點",
                  }),
                  r &&
                    n.jsxs("div", {
                      className: "ml-4 flex items-center",
                      children: [
                        n.jsxs("label", {
                          className:
                            "relative inline-flex items-center cursor-pointer",
                          children: [
                            n.jsx("input", {
                              type: "checkbox",
                              className: "sr-only peer",
                              checked: t,
                              onChange: (a) => r(a.target.checked),
                            }),
                            n.jsx("div", {
                              className:
                                "w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600",
                            }),
                          ],
                        }),
                        n.jsx("span", {
                          className: "ml-2 text-xs text-gray-500",
                          children: "專注顯示",
                        }),
                      ],
                    }),
                ],
              }),
              n.jsxs("div", {
                className: "flex items-center space-x-2",
                children: [
                  n.jsx("button", {
                    onClick: () => l(!0),
                    className:
                      "p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                    title: "專注模式設定",
                    children: n.jsx(nr, { size: 18 }),
                  }),
                  n.jsxs("span", {
                    className: "text-sm text-gray-500",
                    children: [e.length, " 項監控中"],
                  }),
                ],
              }),
            ],
          }),
        }),
        n.jsx("div", {
          className: "p-4",
          children: n.jsx("div", {
            className: "space-y-3 max-h-80 overflow-y-auto",
            children:
              e.length === 0
                ? n.jsxs("div", {
                    className: "text-center text-gray-500 py-8",
                    children: [
                      n.jsx(Ee, {
                        size: 48,
                        className: "mx-auto text-gray-300 mb-2",
                      }),
                      n.jsx("p", { children: "暫無庫存監控項目" }),
                    ],
                  })
                : e.map((a) =>
                    n.jsxs(
                      "div",
                      {
                        className:
                          "p-3 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition-colors",
                        children: [
                          n.jsx("div", {
                            className: "flex items-start justify-between mb-2",
                            children: n.jsxs("div", {
                              className: "flex-1",
                              children: [
                                n.jsx("h4", {
                                  className: "font-medium text-gray-800",
                                  children: a.name,
                                }),
                                n.jsxs("p", {
                                  className: "text-sm text-gray-500",
                                  children: ["藥碼: ", a.code],
                                }),
                              ],
                            }),
                          }),
                          n.jsxs("div", {
                            className: "grid grid-cols-2 gap-2 mt-2",
                            children: [
                              n.jsxs("div", {
                                className: "text-sm",
                                children: [
                                  n.jsx("span", {
                                    className: "text-gray-600",
                                    children: "總庫存:",
                                  }),
                                  n.jsx("span", {
                                    className:
                                      "ml-2 font-semibold text-gray-800",
                                    children: a.totalQuantity,
                                  }),
                                ],
                              }),
                              n.jsxs("div", {
                                className: "text-sm",
                                children: [
                                  n.jsx("span", {
                                    className: "text-gray-600",
                                    children: "批號數量:",
                                  }),
                                  n.jsx("span", {
                                    className:
                                      "ml-2 font-semibold text-gray-800",
                                    children: a.batchCount,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          a.serverData &&
                            a.serverData.length > 0 &&
                            n.jsxs("div", {
                              className: "mt-3 pt-3 border-t border-gray-100",
                              children: [
                                n.jsx("div", {
                                  className: "text-xs text-gray-500 mb-1",
                                  children: "各伺服器庫存:",
                                }),
                                n.jsx("div", {
                                  className: "grid grid-cols-2 gap-2",
                                  children: a.serverData.map((i) =>
                                    n.jsxs(
                                      "div",
                                      {
                                        className: "text-sm",
                                        children: [
                                          n.jsxs("span", {
                                            className: "text-gray-600",
                                            children: [i.serverName, ":"],
                                          }),
                                          n.jsx("span", {
                                            className:
                                              "ml-1 font-semibold text-gray-800",
                                            children: i.qty,
                                          }),
                                        ],
                                      },
                                      i.serverName
                                    )
                                  ),
                                }),
                              ],
                            }),
                        ],
                      },
                      a.id
                    )
                  ),
          }),
        }),
        n.jsx(gi, {
          isOpen: s,
          onClose: () => l(!1),
          sectionKey: "inventory",
          sectionTitle: "即時庫存重點",
        }),
      ],
    });
  },
  Y0 = ({ inventoryHighlights: e }) => {
    const [t, r] = w.useState(0),
      l = (() => {
        const m = localStorage.getItem("focusTable_inventory_itemsPerPage");
        return m ? parseInt(m, 10) : 5;
      })();
    w.useEffect(() => {
      if (e.length <= l) return;
      const m = setInterval(() => {
        r((f) => {
          const x = f + l;
          return x >= e.length ? 0 : x;
        });
      }, 8e3);
      return () => clearInterval(m);
    }, [e.length, l]);
    const a = e.slice(t, t + l),
      i = Math.ceil(e.length / l),
      o = Math.floor(t / l) + 1,
      c = Array.from(
        new Set(e.flatMap((m) => (m.serverData || []).map((f) => f.serverName)))
      ).sort(),
      u = 40,
      d = c.length > 0 ? 60 / c.length : 20;
    return n.jsxs("div", {
      className:
        "bg-white rounded-xl shadow-lg border border-gray-200 h-full flex flex-col min-h-0 max-h-full",
      children: [
        n.jsxs("div", {
          className: "p-2 border-b border-gray-200 bg-blue-50 flex-shrink-0",
          children: [
            n.jsxs("div", {
              className: "flex items-center justify-between mb-2",
              children: [
                n.jsxs("h3", {
                  className:
                    "text-xl font-semibold text-gray-800 flex items-center",
                  children: [
                    n.jsx(Ee, { size: 20, className: "mr-2 text-blue-600" }),
                    "即時庫存重點",
                  ],
                }),
                n.jsxs("div", {
                  className: "text-sm text-gray-600",
                  children: ["總計: ", e.length, " 項"],
                }),
              ],
            }),
            e.length > l &&
              n.jsx("div", {
                className:
                  "flex items-center justify-between text-sm text-gray-600",
                children: n.jsxs("span", {
                  children: ["第 ", o, " / ", i, " 頁"],
                }),
              }),
          ],
        }),
        n.jsx("div", {
          className: "flex-1 min-h-0 overflow-hidden",
          children:
            e.length === 0
              ? n.jsx("div", {
                  className:
                    "flex items-center justify-center h-full text-gray-500",
                  children: n.jsxs("div", {
                    className: "text-center",
                    children: [
                      n.jsx(Ee, {
                        size: 32,
                        className: "mx-auto mb-2 text-gray-400",
                      }),
                      n.jsx("p", {
                        className: "text-sm",
                        children: "暫無庫存監控項目",
                      }),
                    ],
                  }),
                })
              : n.jsx("div", {
                  className: "h-full overflow-auto",
                  children: n.jsxs("table", {
                    className: "w-full border-collapse",
                    children: [
                      n.jsxs("colgroup", {
                        children: [
                          n.jsx("col", { style: { width: `${u}%` } }),
                          c.map((m) =>
                            n.jsx("col", { style: { width: `${d}%` } }, m)
                          ),
                        ],
                      }),
                      n.jsx("thead", {
                        className:
                          "sticky top-0 bg-gray-50 border-b-2 border-gray-200",
                        children: n.jsxs("tr", {
                          children: [
                            n.jsx("th", {
                              className:
                                "text-base font-semibold text-left p-2 text-gray-700 truncate whitespace-nowrap",
                              children: "藥品名稱 (藥碼)",
                            }),
                            c.map((m) =>
                              n.jsx(
                                "th",
                                {
                                  className:
                                    "text-base font-semibold text-center py-1 px-3 whitespace-nowrap truncate text-gray-700",
                                  children: m,
                                },
                                m
                              )
                            ),
                          ],
                        }),
                      }),
                      n.jsx("tbody", {
                        children: a.map((m, f) =>
                          n.jsxs(
                            "tr",
                            {
                              className: `border-b border-gray-200 transition-colors ${
                                f % 2 === 0
                                  ? "bg-white hover:bg-gray-300"
                                  : "bg-gray-200 hover:bg-gray-300"
                              }`,
                              children: [
                                n.jsxs("td", {
                                  className: "text-base p-1 text-gray-800",
                                  children: [
                                    n.jsx("div", {
                                      className:
                                        "font-semibold truncate whitespace-nowrap",
                                      children: m.name,
                                    }),
                                    n.jsx("div", {
                                      className:
                                        "text-sm text-gray-500 truncate whitespace-nowrap",
                                      children: m.code,
                                    }),
                                  ],
                                }),
                                c.map((x) => {
                                  const v = (m.serverData || []).find(
                                      (k) => k.serverName === x
                                    ),
                                    j = v ? v.qty : 0;
                                  return n.jsx(
                                    "td",
                                    {
                                      className:
                                        "text-base py-1 px-3 whitespace-nowrap truncate text-center",
                                      children: n.jsx("div", {
                                        className:
                                          "font-semibold text-gray-700",
                                        children: j,
                                      }),
                                    },
                                    x
                                  );
                                }),
                              ],
                            },
                            `${t}-${f}`
                          )
                        ),
                      }),
                    ],
                  }),
                }),
        }),
      ],
    });
  },
  ed = ({
    inventoryHighlights: e,
    isFullscreen: t = !1,
    showInFocus: r,
    onFocusToggle: s,
    error: l,
  }) =>
    l != null && l.hasError
      ? t
        ? n.jsx("div", {
            className: "bg-gray-800 rounded-lg p-6 h-full",
            children: n.jsx(De, { message: l.message || "資料載入失敗" }),
          })
        : n.jsx(De, { message: l.message || "資料載入失敗" })
      : t
      ? n.jsx(Y0, { inventoryHighlights: e })
      : n.jsx(G0, { inventoryHighlights: e, showInFocus: r, onFocusToggle: s });
class K0 {
  constructor() {
    (this.audioContext = null),
      (this.isEnabled = !0),
      (this.selectedSound = "ding"),
      (this.activeNodes = new Set()),
      (this.repeatCount = 1),
      (this.repeatInterval = 0.5),
      (this.volume = 0.5),
      this.initializeAudioContext(),
      this.loadSettings(),
      this.setupVisibilityHandler();
  }
  setupVisibilityHandler() {
    document.addEventListener("visibilitychange", () => {
      !document.hidden &&
        this.audioContext &&
        (console.log(
          "[NotificationSound] Page became visible, checking AudioContext state:",
          this.audioContext.state
        ),
        this.audioContext.state === "suspended" &&
          console.log(
            "[NotificationSound] AudioContext suspended, will resume on next play"
          ));
    });
  }
  initializeAudioContext() {
    try {
      (this.audioContext = new (window.AudioContext ||
        window.webkitAudioContext)()),
        console.log(
          "[NotificationSound] AudioContext initialized, state:",
          this.audioContext.state
        );
    } catch (t) {
      console.error("[NotificationSound] Audio context not supported:", t);
    }
  }
  async ensureAudioContext() {
    var r;
    if (
      (console.log("[NotificationSound] ensureAudioContext - Current state:", {
        exists: !!this.audioContext,
        state: (r = this.audioContext) == null ? void 0 : r.state,
        isEnabled: this.isEnabled,
        selectedSound: this.selectedSound,
      }),
      !this.audioContext &&
        (console.warn(
          "[NotificationSound] AudioContext is null, initializing..."
        ),
        this.initializeAudioContext(),
        !this.audioContext))
    )
      return (
        console.error("[NotificationSound] Failed to initialize AudioContext"),
        !1
      );
    if (
      this.audioContext.state === "closed" &&
      (console.warn(
        "[NotificationSound] AudioContext is closed, recreating..."
      ),
      this.initializeAudioContext(),
      !this.audioContext)
    )
      return (
        console.error("[NotificationSound] Failed to recreate AudioContext"), !1
      );
    if (this.audioContext.state === "suspended") {
      console.log(
        "[NotificationSound] AudioContext is suspended, attempting to resume..."
      );
      try {
        if (
          (await this.audioContext.resume(),
          console.log(
            "[NotificationSound] AudioContext resumed successfully, new state:",
            this.audioContext.state
          ),
          this.audioContext.state !== "running")
        )
          return (
            console.error(
              "[NotificationSound] AudioContext failed to resume, state:",
              this.audioContext.state
            ),
            !1
          );
      } catch (s) {
        return (
          console.error(
            "[NotificationSound] Failed to resume AudioContext:",
            s
          ),
          !1
        );
      }
    }
    const t = this.audioContext.state === "running";
    return (
      console.log(
        "[NotificationSound] AudioContext ready:",
        t,
        "state:",
        this.audioContext.state
      ),
      t
    );
  }
  cleanupNode(t, r = 0) {
    setTimeout(() => {
      try {
        t.disconnect(),
          this.activeNodes.delete(t),
          console.log(
            "[NotificationSound] Node cleaned up, active nodes:",
            this.activeNodes.size
          );
      } catch (s) {
        console.warn("[NotificationSound] Error cleaning up node:", s);
      }
    }, r);
  }
  createDingSound() {
    if (!this.audioContext) {
      console.error(
        "[NotificationSound] Cannot create ding sound: audioContext is null"
      );
      return;
    }
    const t = this.audioContext.createOscillator(),
      r = this.audioContext.createGain();
    this.activeNodes.add(t),
      this.activeNodes.add(r),
      t.connect(r),
      r.connect(this.audioContext.destination),
      t.frequency.setValueAtTime(800, this.audioContext.currentTime),
      (t.type = "sine"),
      r.gain.setValueAtTime(this.volume, this.audioContext.currentTime),
      r.gain.exponentialRampToValueAtTime(
        0.01,
        this.audioContext.currentTime + 0.3
      ),
      t.start(this.audioContext.currentTime),
      t.stop(this.audioContext.currentTime + 0.3),
      this.cleanupNode(t, 350),
      this.cleanupNode(r, 350),
      console.log(
        "[NotificationSound] Ding sound created, volume:",
        this.volume,
        "active nodes:",
        this.activeNodes.size
      );
  }
  createChimeSound() {
    if (!this.audioContext) {
      console.error(
        "[NotificationSound] Cannot create chime sound: audioContext is null"
      );
      return;
    }
    const t = this.audioContext.currentTime;
    [1e3, 1200].forEach((r, s) => {
      const l = this.audioContext.createOscillator(),
        a = this.audioContext.createGain();
      this.activeNodes.add(l),
        this.activeNodes.add(a),
        l.connect(a),
        a.connect(this.audioContext.destination),
        l.frequency.setValueAtTime(r, t),
        (l.type = "sine");
      const i = t + s * 0.15;
      a.gain.setValueAtTime(0, i),
        a.gain.linearRampToValueAtTime(0.4 * this.volume, i + 0.02),
        a.gain.exponentialRampToValueAtTime(0.01, i + 0.4),
        l.start(i),
        l.stop(i + 0.4),
        this.cleanupNode(l, (i - t + 0.45) * 1e3),
        this.cleanupNode(a, (i - t + 0.45) * 1e3);
    }),
      console.log(
        "[NotificationSound] Chime sound created, volume:",
        this.volume,
        "active nodes:",
        this.activeNodes.size
      );
  }
  createBellSound() {
    if (!this.audioContext) {
      console.error(
        "[NotificationSound] Cannot create bell sound: audioContext is null"
      );
      return;
    }
    const t = this.audioContext.currentTime;
    [600, 800, 1e3].forEach((r, s) => {
      const l = this.audioContext.createOscillator(),
        a = this.audioContext.createGain();
      this.activeNodes.add(l),
        this.activeNodes.add(a),
        l.connect(a),
        a.connect(this.audioContext.destination),
        l.frequency.setValueAtTime(r, t),
        (l.type = "triangle");
      const i = t + s * 0.1;
      a.gain.setValueAtTime(0, i),
        a.gain.linearRampToValueAtTime(0.3 * this.volume, i + 0.02),
        a.gain.exponentialRampToValueAtTime(0.01, i + 0.5),
        l.start(i),
        l.stop(i + 0.5),
        this.cleanupNode(l, (i - t + 0.55) * 1e3),
        this.cleanupNode(a, (i - t + 0.55) * 1e3);
    }),
      console.log(
        "[NotificationSound] Bell sound created, volume:",
        this.volume,
        "active nodes:",
        this.activeNodes.size
      );
  }
  playSound(t) {
    switch ((console.log("[NotificationSound] Playing sound:", t), t)) {
      case "ding":
        this.createDingSound();
        break;
      case "chime":
        this.createChimeSound();
        break;
      case "bell":
        this.createBellSound();
        break;
      default:
        console.error("[NotificationSound] Unknown sound type:", t);
    }
  }
  async playNotification() {
    if (
      (console.log(
        "[NotificationSound] playNotification called, isEnabled:",
        this.isEnabled
      ),
      !this.isEnabled)
    ) {
      console.log(
        "[NotificationSound] Notification is disabled, skipping sound"
      );
      return;
    }
    try {
      if (!(await this.ensureAudioContext()))
        throw (
          (console.error(
            "[NotificationSound] AudioContext is not ready, cannot play sound"
          ),
          new Error("AudioContext is not ready"))
        );
      console.log("[NotificationSound] ===== 開始播放音效 ====="),
        console.log("[NotificationSound] 音效類型:", this.selectedSound),
        console.log("[NotificationSound] 音量:", this.volume),
        console.log("[NotificationSound] 重複次數:", this.repeatCount),
        console.log("[NotificationSound] 間隔秒數:", this.repeatInterval),
        await this.playRepeatedSound(
          this.selectedSound,
          this.repeatCount,
          this.repeatInterval
        ),
        console.log(
          "[NotificationSound] Notification sound played successfully"
        );
    } catch (t) {
      console.error(
        "[NotificationSound] Failed to play notification sound:",
        t
      ),
        (this.audioContext = null),
        this.initializeAudioContext();
    }
  }
  async playRepeatedSound(t, r, s) {
    for (let l = 0; l < r; l++)
      console.log(`[NotificationSound] 播放第 ${l + 1} / ${r} 次`),
        this.playSound(t),
        l < r - 1 && (await new Promise((a) => setTimeout(a, s * 1e3)));
  }
  async playPreview(t) {
    console.log("[NotificationSound] playPreview called, soundType:", t);
    try {
      if (!(await this.ensureAudioContext()))
        throw (
          (console.error(
            "[NotificationSound] AudioContext is not ready, cannot play preview"
          ),
          new Error("AudioContext is not ready"))
        );
      console.log(
        "[NotificationSound] 預覽音效 - 重複次數:",
        this.repeatCount,
        "間隔:",
        this.repeatInterval
      ),
        await this.playRepeatedSound(t, this.repeatCount, this.repeatInterval),
        console.log("[NotificationSound] Preview sound played successfully");
    } catch (r) {
      console.error("[NotificationSound] Failed to play preview sound:", r),
        (this.audioContext = null),
        this.initializeAudioContext();
    }
  }
  enable() {
    console.log("[NotificationSound] Enabling notifications"),
      (this.isEnabled = !0),
      this.saveSettings();
  }
  disable() {
    console.log("[NotificationSound] Disabling notifications"),
      (this.isEnabled = !1),
      this.saveSettings();
  }
  toggle() {
    return (
      (this.isEnabled = !this.isEnabled),
      console.log(
        "[NotificationSound] Toggled notifications, new state:",
        this.isEnabled
      ),
      this.saveSettings(),
      this.isEnabled
    );
  }
  getStatus() {
    return this.isEnabled;
  }
  getSelectedSound() {
    return this.selectedSound;
  }
  setSelectedSound(t) {
    console.log("[NotificationSound] Setting sound type:", t),
      (this.selectedSound = t),
      this.saveSettings();
  }
  getRepeatCount() {
    return this.repeatCount;
  }
  setRepeatCount(t) {
    (this.repeatCount = Math.max(1, Math.min(5, t))),
      console.log(
        "[NotificationSound] Setting repeat count:",
        this.repeatCount
      ),
      this.saveSettings();
  }
  getRepeatInterval() {
    return this.repeatInterval;
  }
  setRepeatInterval(t) {
    (this.repeatInterval = Math.max(0.5, Math.min(2, t))),
      console.log(
        "[NotificationSound] Setting repeat interval:",
        this.repeatInterval
      ),
      this.saveSettings();
  }
  getVolume() {
    return this.volume;
  }
  setVolume(t) {
    (this.volume = Math.max(0, Math.min(1, t))),
      console.log("[NotificationSound] Setting volume:", this.volume),
      this.saveSettings();
  }
  saveSettings() {
    try {
      localStorage.setItem(
        "internalRequestNotificationEnabled",
        JSON.stringify(this.isEnabled)
      ),
        localStorage.setItem(
          "internalRequestNotificationSound",
          this.selectedSound
        ),
        localStorage.setItem(
          "internalRequestNotificationRepeatCount",
          JSON.stringify(this.repeatCount)
        ),
        localStorage.setItem(
          "internalRequestNotificationRepeatInterval",
          JSON.stringify(this.repeatInterval)
        ),
        localStorage.setItem(
          "internalRequestNotificationVolume",
          JSON.stringify(this.volume)
        ),
        console.log("[NotificationSound] Settings saved:", {
          isEnabled: this.isEnabled,
          selectedSound: this.selectedSound,
          repeatCount: this.repeatCount,
          repeatInterval: this.repeatInterval,
          volume: this.volume,
        });
    } catch (t) {
      console.error(
        "[NotificationSound] Failed to save notification settings:",
        t
      );
    }
  }
  loadSettings() {
    try {
      const t = localStorage.getItem("internalRequestNotificationEnabled");
      t !== null && (this.isEnabled = JSON.parse(t));
      const r = localStorage.getItem("internalRequestNotificationSound");
      r &&
        (r === "ding" || r === "chime" || r === "bell") &&
        (this.selectedSound = r);
      const s = localStorage.getItem("internalRequestNotificationRepeatCount");
      if (s !== null) {
        const i = JSON.parse(s);
        this.repeatCount = Math.max(1, Math.min(5, i));
      }
      const l = localStorage.getItem(
        "internalRequestNotificationRepeatInterval"
      );
      if (l !== null) {
        const i = JSON.parse(l);
        this.repeatInterval = Math.max(0.5, Math.min(2, i));
      }
      const a = localStorage.getItem("internalRequestNotificationVolume");
      if (a !== null) {
        const i = JSON.parse(a);
        this.volume = Math.max(0, Math.min(1, i));
      }
      console.log("[NotificationSound] Settings loaded:", {
        isEnabled: this.isEnabled,
        selectedSound: this.selectedSound,
        repeatCount: this.repeatCount,
        repeatInterval: this.repeatInterval,
        volume: this.volume,
      });
    } catch (t) {
      console.error(
        "[NotificationSound] Failed to load notification settings:",
        t
      );
    }
  }
  diagnose() {
    var t;
    console.log("[NotificationSound] === DIAGNOSTIC INFO ==="),
      console.log("AudioContext exists:", !!this.audioContext),
      console.log(
        "AudioContext state:",
        (t = this.audioContext) == null ? void 0 : t.state
      ),
      console.log("Is enabled:", this.isEnabled),
      console.log("Selected sound:", this.selectedSound),
      console.log("Volume:", this.volume),
      console.log("Repeat count:", this.repeatCount),
      console.log("Repeat interval:", this.repeatInterval),
      console.log("Active nodes count:", this.activeNodes.size),
      console.log("=====================================");
  }
}
const ye = new K0(),
  X0 = ({ isOpen: e, onClose: t }) => {
    const [r, s] = w.useState(ye.getSelectedSound()),
      [l, a] = w.useState(ye.getRepeatCount()),
      [i, o] = w.useState(ye.getRepeatInterval()),
      [c, u] = w.useState(ye.getVolume()),
      [d, m] = w.useState(() => {
        const h = localStorage.getItem("internalRequests_displayMode");
        return h || "all";
      }),
      f = [
        { type: "ding", name: "叮咚聲", description: "單音清脆提示音" },
        { type: "chime", name: "鐘鈴聲", description: "雙音和諧提示音" },
        { type: "bell", name: "鈴聲", description: "三音漸進提示音" },
      ],
      x = (h) => {
        ye.playPreview(h);
      },
      v = (h) => {
        s(h), ye.setSelectedSound(h);
      },
      j = (h) => {
        a(h), ye.setRepeatCount(h);
      },
      k = (h) => {
        o(h), ye.setRepeatInterval(h);
      },
      g = (h) => {
        u(h), ye.setVolume(h);
      },
      p = (h) => {
        m(h),
          localStorage.setItem("internalRequests_displayMode", h),
          window.dispatchEvent(
            new CustomEvent("internalRequestsSettingChanged", {
              detail: { displayMode: h },
            })
          );
      };
    return e
      ? n.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
          children: n.jsxs("div", {
            className: "bg-white rounded-lg shadow-xl w-full max-w-md",
            children: [
              n.jsxs("div", {
                className:
                  "flex items-center justify-between p-4 border-b border-gray-200",
                children: [
                  n.jsx("h3", {
                    className: "text-xl font-semibold text-gray-800",
                    children: "申領通知設定",
                  }),
                  n.jsx("button", {
                    onClick: t,
                    className:
                      "text-gray-400 hover:text-gray-600 transition-colors",
                    children: n.jsx(Re, { size: 24 }),
                  }),
                ],
              }),
              n.jsxs("div", {
                className: "p-6 space-y-6 max-h-[70vh] overflow-y-auto",
                children: [
                  n.jsxs("div", {
                    children: [
                      n.jsx("h4", {
                        className: "text-base font-semibold text-gray-700 mb-3",
                        children: "音效設定",
                      }),
                      n.jsx("div", {
                        className: "space-y-3",
                        children: f.map((h) =>
                          n.jsx(
                            "div",
                            {
                              className: `border-2 rounded-lg p-4 transition-all cursor-pointer ${
                                r === h.type
                                  ? "border-teal-500 bg-teal-50"
                                  : "border-gray-200 hover:border-gray-300"
                              }`,
                              onClick: () => v(h.type),
                              children: n.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [
                                  n.jsxs("div", {
                                    className: "flex-1",
                                    children: [
                                      n.jsxs("div", {
                                        className:
                                          "flex items-center space-x-2 mb-1",
                                        children: [
                                          n.jsx("h4", {
                                            className:
                                              "text-lg font-semibold text-gray-800",
                                            children: h.name,
                                          }),
                                          r === h.type &&
                                            n.jsx(Xn, {
                                              size: 20,
                                              className: "text-teal-600",
                                            }),
                                        ],
                                      }),
                                      n.jsx("p", {
                                        className: "text-sm text-gray-600",
                                        children: h.description,
                                      }),
                                    ],
                                  }),
                                  n.jsx("button", {
                                    onClick: (N) => {
                                      N.stopPropagation(), x(h.type);
                                    },
                                    className:
                                      "ml-4 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors",
                                    title: "試聽音效",
                                    children: n.jsx(Am, {
                                      size: 20,
                                      className: "text-gray-700",
                                    }),
                                  }),
                                ],
                              }),
                            },
                            h.type
                          )
                        ),
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    children: [
                      n.jsx("h4", {
                        className: "text-base font-semibold text-gray-700 mb-3",
                        children: "音效重複設定",
                      }),
                      n.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          n.jsxs("div", {
                            children: [
                              n.jsxs("div", {
                                className:
                                  "flex items-center justify-between mb-2",
                                children: [
                                  n.jsx("label", {
                                    className:
                                      "text-sm font-medium text-gray-700",
                                    children: "音量",
                                  }),
                                  n.jsxs("span", {
                                    className:
                                      "text-lg font-semibold text-teal-600",
                                    children: [Math.round(c * 100), "%"],
                                  }),
                                ],
                              }),
                              n.jsx("input", {
                                type: "range",
                                min: "0",
                                max: "1",
                                step: "0.01",
                                value: c,
                                onChange: (h) => g(parseFloat(h.target.value)),
                                className:
                                  "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600",
                              }),
                              n.jsxs("div", {
                                className:
                                  "flex justify-between text-xs text-gray-500 mt-1",
                                children: [
                                  n.jsx("span", { children: "0%" }),
                                  n.jsx("span", { children: "100%" }),
                                ],
                              }),
                            ],
                          }),
                          n.jsxs("div", {
                            children: [
                              n.jsxs("div", {
                                className:
                                  "flex items-center justify-between mb-2",
                                children: [
                                  n.jsx("label", {
                                    className:
                                      "text-sm font-medium text-gray-700",
                                    children: "重複次數",
                                  }),
                                  n.jsxs("span", {
                                    className:
                                      "text-lg font-semibold text-teal-600",
                                    children: [l, " 次"],
                                  }),
                                ],
                              }),
                              n.jsx("input", {
                                type: "range",
                                min: "1",
                                max: "5",
                                step: "1",
                                value: l,
                                onChange: (h) => j(parseInt(h.target.value)),
                                className:
                                  "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600",
                              }),
                              n.jsxs("div", {
                                className:
                                  "flex justify-between text-xs text-gray-500 mt-1",
                                children: [
                                  n.jsx("span", { children: "1 次" }),
                                  n.jsx("span", { children: "5 次" }),
                                ],
                              }),
                            ],
                          }),
                          l > 1 &&
                            n.jsxs("div", {
                              children: [
                                n.jsxs("div", {
                                  className:
                                    "flex items-center justify-between mb-2",
                                  children: [
                                    n.jsx("label", {
                                      className:
                                        "text-sm font-medium text-gray-700",
                                      children: "間隔秒數",
                                    }),
                                    n.jsxs("span", {
                                      className:
                                        "text-lg font-semibold text-teal-600",
                                      children: [i.toFixed(1), " 秒"],
                                    }),
                                  ],
                                }),
                                n.jsx("input", {
                                  type: "range",
                                  min: "0.5",
                                  max: "2",
                                  step: "0.1",
                                  value: i,
                                  onChange: (h) =>
                                    k(parseFloat(h.target.value)),
                                  className:
                                    "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600",
                                }),
                                n.jsxs("div", {
                                  className:
                                    "flex justify-between text-xs text-gray-500 mt-1",
                                  children: [
                                    n.jsx("span", { children: "0.5 秒" }),
                                    n.jsx("span", { children: "2.0 秒" }),
                                  ],
                                }),
                              ],
                            }),
                          n.jsxs("div", {
                            className:
                              "text-sm text-gray-600 bg-blue-50 border border-blue-200 rounded-lg p-3",
                            children: [
                              n.jsx("p", {
                                className: "font-medium text-blue-900 mb-1",
                                children: "說明：",
                              }),
                              n.jsxs("ul", {
                                className:
                                  "list-disc list-inside space-y-1 text-blue-800",
                                children: [
                                  n.jsx("li", {
                                    children:
                                      "音量：控制音效播放的音量大小（0-100%）",
                                  }),
                                  n.jsx("li", {
                                    children:
                                      "重複次數：音效連續播放的次數（1-5 次）",
                                  }),
                                  l > 1 &&
                                    n.jsx("li", {
                                      children:
                                        "間隔秒數：每次播放之間的等待時間（0.5-2.0 秒）",
                                    }),
                                  n.jsx("li", {
                                    children: "測試音效按鈕會按照目前設定播放",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    children: [
                      n.jsx("h4", {
                        className: "text-base font-semibold text-gray-700 mb-3",
                        children: "顯示設定",
                      }),
                      n.jsxs("div", {
                        className: "space-y-3",
                        children: [
                          n.jsx("div", {
                            className: `border-2 rounded-lg p-4 transition-all cursor-pointer ${
                              d === "all"
                                ? "border-teal-500 bg-teal-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`,
                            onClick: () => p("all"),
                            children: n.jsx("div", {
                              className: "flex items-center justify-between",
                              children: n.jsxs("div", {
                                className: "flex items-center space-x-3",
                                children: [
                                  n.jsx(Pm, {
                                    size: 24,
                                    className: "text-gray-700",
                                  }),
                                  n.jsxs("div", {
                                    className: "flex-1",
                                    children: [
                                      n.jsxs("div", {
                                        className:
                                          "flex items-center space-x-2 mb-1",
                                        children: [
                                          n.jsx("h5", {
                                            className:
                                              "text-base font-semibold text-gray-800",
                                            children: "不分類顯示",
                                          }),
                                          d === "all" &&
                                            n.jsx(Xn, {
                                              size: 18,
                                              className: "text-teal-600",
                                            }),
                                        ],
                                      }),
                                      n.jsx("p", {
                                        className: "text-sm text-gray-600",
                                        children: "所有申領依序顯示",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                          n.jsx("div", {
                            className: `border-2 rounded-lg p-4 transition-all cursor-pointer ${
                              d === "separate"
                                ? "border-teal-500 bg-teal-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`,
                            onClick: () => p("separate"),
                            children: n.jsx("div", {
                              className: "flex items-center justify-between",
                              children: n.jsxs("div", {
                                className: "flex items-center space-x-3",
                                children: [
                                  n.jsx(Lm, {
                                    size: 24,
                                    className: "text-gray-700",
                                  }),
                                  n.jsxs("div", {
                                    className: "flex-1",
                                    children: [
                                      n.jsxs("div", {
                                        className:
                                          "flex items-center space-x-2 mb-1",
                                        children: [
                                          n.jsx("h5", {
                                            className:
                                              "text-base font-semibold text-gray-800",
                                            children: "區分緊急申領",
                                          }),
                                          d === "separate" &&
                                            n.jsx(Xn, {
                                              size: 18,
                                              className: "text-teal-600",
                                            }),
                                        ],
                                      }),
                                      n.jsx("p", {
                                        className: "text-sm text-gray-600",
                                        children: "左側緊急申領，右側一般申領",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                          n.jsx("div", {
                            className: `border-2 rounded-lg p-4 transition-all cursor-pointer ${
                              d === "urgentOnly"
                                ? "border-teal-500 bg-teal-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`,
                            onClick: () => p("urgentOnly"),
                            children: n.jsx("div", {
                              className: "flex items-center justify-between",
                              children: n.jsxs("div", {
                                className: "flex items-center space-x-3",
                                children: [
                                  n.jsx(qe, {
                                    size: 24,
                                    className: "text-gray-700",
                                  }),
                                  n.jsxs("div", {
                                    className: "flex-1",
                                    children: [
                                      n.jsxs("div", {
                                        className:
                                          "flex items-center space-x-2 mb-1",
                                        children: [
                                          n.jsx("h5", {
                                            className:
                                              "text-base font-semibold text-gray-800",
                                            children: "僅顯示緊急申領",
                                          }),
                                          d === "urgentOnly" &&
                                            n.jsx(Xn, {
                                              size: 18,
                                              className: "text-teal-600",
                                            }),
                                        ],
                                      }),
                                      n.jsx("p", {
                                        className: "text-sm text-gray-600",
                                        children: "僅顯示緊急申領",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              n.jsx("div", {
                className: "flex justify-end p-4 border-t border-gray-200",
                children: n.jsx("button", {
                  onClick: t,
                  className:
                    "px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium",
                  children: "確定",
                }),
              }),
            ],
          }),
        })
      : null;
  },
  J0 = ({ internalRequests: e, showInFocus: t = !0, onFocusToggle: r }) => {
    const [s, l] = w.useState(ye.getStatus()),
      [a, i] = w.useState(!1),
      o = w.useRef(new Set());
    w.useEffect(() => {
      const f = new Set();
      if (
        (e.forEach((v) => {
          v.state === "等待過帳" && v.actionType === "緊急申領" && f.add(v.id);
        }),
        Array.from(f).some((v) => !o.current.has(v)) && o.current.size > 0)
      ) {
        console.log("======= 通知音效發出 =======");
        try {
          ye.playNotification();
        } catch (v) {
          console.error(v), console.log(v);
        }
      }
      o.current = f;
    }, [e]);
    const c = () => {
        const f = ye.toggle();
        l(f);
      },
      u = (f, x) => {
        if (f === "等待過帳" && x === "緊急申領")
          return "border-red-500 bg-red-50";
        switch (f) {
          case "等待過帳":
            return "border-yellow-200 bg-yellow-50";
          case "已過帳":
            return "border-gray-200 bg-white";
          case "已簽收":
            return "border-green-200 bg-green-50";
          default:
            return "border-gray-200 bg-white";
        }
      },
      d = (f) => {
        try {
          return new Date(f.replace(/\//g, "-")).toLocaleString("zh-TW", {
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          });
        } catch {
          return f;
        }
      },
      m = [...e].sort((f, x) => {
        if (f.state === "等待過帳" && f.actionType === "緊急申領") return -1;
        if (x.state === "等待過帳" && x.actionType === "緊急申領") return 1;
        const v = { 等待過帳: 0, 已過帳: 1, 已簽收: 2 },
          j = v[f.state],
          k = v[x.state];
        if (j !== k) return j - k;
        try {
          const g = new Date(f.requestTime.replace(/\//g, "-")).getTime();
          return new Date(x.requestTime.replace(/\//g, "-")).getTime() - g;
        } catch {
          return 0;
        }
      });
    return n.jsxs("div", {
      className: "bg-white rounded-lg shadow-sm border border-gray-200 h-full",
      children: [
        n.jsx("div", {
          className: "p-4 border-b border-gray-200",
          children: n.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              n.jsxs("div", {
                className: "flex items-center",
                children: [
                  n.jsx(Kt, { size: 20, className: "text-teal-600 mr-2" }),
                  n.jsx("h3", {
                    className: "text-lg font-semibold text-gray-800",
                    children: "藥品申領通知",
                  }),
                  n.jsx("button", {
                    onClick: () => i(!0),
                    className:
                      "ml-3 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors",
                    title: "音效設定",
                    children: n.jsx(nr, { size: 18 }),
                  }),
                  n.jsx("button", {
                    onClick: c,
                    className: `ml-2 p-2 rounded-lg transition-colors ${
                      s
                        ? "bg-green-100 text-green-600 hover:bg-green-200"
                        : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                    }`,
                    title: s ? "通知已啟用" : "通知已關閉",
                    children: s
                      ? n.jsx(Hu, { size: 18, className: "fill-current" })
                      : n.jsx(Vu, { size: 18 }),
                  }),
                  r &&
                    n.jsxs("div", {
                      className: "ml-4 flex items-center",
                      children: [
                        n.jsxs("label", {
                          className:
                            "relative inline-flex items-center cursor-pointer",
                          children: [
                            n.jsx("input", {
                              type: "checkbox",
                              className: "sr-only peer",
                              checked: t,
                              onChange: (f) => r(f.target.checked),
                            }),
                            n.jsx("div", {
                              className:
                                "w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600",
                            }),
                          ],
                        }),
                        n.jsx("span", {
                          className: "ml-2 text-xs text-gray-500",
                          children: "專注顯示",
                        }),
                      ],
                    }),
                ],
              }),
              n.jsxs("span", {
                className: "text-sm text-gray-500",
                children: [
                  e.filter((f) => f.state === "等待過帳").length,
                  " 項待處理",
                ],
              }),
            ],
          }),
        }),
        n.jsx("div", {
          className: "p-4",
          children: n.jsx("div", {
            className: "space-y-3 max-h-80 overflow-y-auto",
            children:
              m.length === 0
                ? n.jsxs("div", {
                    className: "text-center text-gray-500 py-8",
                    children: [
                      n.jsx(Kt, {
                        size: 48,
                        className: "mx-auto text-gray-300 mb-2",
                      }),
                      n.jsx("p", { children: "暫無藥品申領" }),
                    ],
                  })
                : m.map(
                    (f) => (
                      f.state === "等待過帳" && f.actionType,
                      n.jsxs(
                        "div",
                        {
                          className: `p-3 border-2 rounded-lg transition-colors ${u(
                            f.state,
                            f.actionType
                          )}`,
                          children: [
                            n.jsxs("div", {
                              className:
                                "flex items-start justify-between mb-2",
                              children: [
                                n.jsxs("div", {
                                  className: "flex-1",
                                  children: [
                                    n.jsxs("div", {
                                      className: "flex items-center gap-2 mb-1",
                                      children: [
                                        n.jsx("span", {
                                          className:
                                            "text-sm font-semibold text-gray-700",
                                          children: f.code,
                                        }),
                                        f.actionType === "緊急申領" &&
                                          n.jsxs("span", {
                                            className:
                                              "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-red-600 text-white",
                                            children: [
                                              n.jsx(qe, {
                                                size: 10,
                                                className: "mr-1",
                                              }),
                                              "緊急申領",
                                            ],
                                          }),
                                      ],
                                    }),
                                    n.jsx("h4", {
                                      className: "font-medium text-gray-800",
                                      children: f.name,
                                    }),
                                  ],
                                }),
                                n.jsx("span", {
                                  className:
                                    "px-2 py-1 rounded-lg text-xs font-medium bg-gray-100 text-gray-700",
                                  children: f.state,
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              className: "space-y-2 text-sm text-gray-600",
                              children: [
                                n.jsxs("div", {
                                  className:
                                    "flex items-center justify-between",
                                  children: [
                                    n.jsxs("div", {
                                      className: "flex items-center",
                                      children: [
                                        n.jsx(Bu, {
                                          size: 14,
                                          className: "mr-2 text-gray-400",
                                        }),
                                        n.jsx("span", {
                                          children: f.requestingUnit,
                                        }),
                                      ],
                                    }),
                                    n.jsxs("div", {
                                      className: "flex items-center",
                                      children: [
                                        n.jsx(Ee, {
                                          size: 14,
                                          className: "mr-2 text-gray-400",
                                        }),
                                        n.jsxs("span", {
                                          className: "font-medium",
                                          children: [
                                            "數量: ",
                                            f.requestedQuantity,
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                n.jsxs("div", {
                                  className: "flex items-center",
                                  children: [
                                    n.jsx(Js, {
                                      size: 14,
                                      className: "mr-2 text-gray-400",
                                    }),
                                    n.jsxs("span", {
                                      children: [
                                        "申請人: ",
                                        f.requestingPerson,
                                      ],
                                    }),
                                  ],
                                }),
                                n.jsxs("div", {
                                  className: "flex items-center",
                                  children: [
                                    n.jsx(Lr, {
                                      size: 14,
                                      className: "mr-2 text-gray-400",
                                    }),
                                    n.jsxs("span", {
                                      children: [
                                        "申請時間: ",
                                        d(f.requestTime),
                                      ],
                                    }),
                                  ],
                                }),
                                f.remarks &&
                                  n.jsxs("div", {
                                    className:
                                      "mt-2 p-2 bg-gray-50 border border-gray-200 rounded text-xs",
                                    children: [
                                      n.jsx("span", {
                                        className: "text-gray-500",
                                        children: "備註: ",
                                      }),
                                      n.jsx("span", {
                                        className: "text-gray-700",
                                        children: f.remarks,
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        },
                        f.id
                      )
                    )
                  ),
          }),
        }),
        n.jsx(X0, { isOpen: a, onClose: () => i(!1) }),
      ],
    });
  },
  Z0 = ({ internalRequests: e, gridHeight: t = 2 }) => {
    const [r, s] = w.useState(0),
      [l, a] = w.useState(0),
      [i, o] = w.useState(0),
      c = Math.min(5, Math.max(1, t - 1)),
      [u, d] = w.useState(ye.getStatus()),
      [m, f] = w.useState(() => {
        const y = localStorage.getItem("internalRequests_displayMode");
        return y || "all";
      }),
      x = w.useRef(new Set());
    w.useEffect(() => {
      try {
        if (
          (console.log(
            "[InternalRequestsCarousel] Checking for new urgent requests, total requests:",
            e.length
          ),
          !Array.isArray(e))
        ) {
          console.error(
            "[InternalRequestsCarousel] internalRequests is not an array:",
            typeof e
          );
          return;
        }
        const y = new Set();
        e.forEach((P) => {
          if (!P || typeof P != "object") {
            console.warn(
              "[InternalRequestsCarousel] Invalid request object:",
              P
            );
            return;
          }
          P.state === "等待過帳" &&
            P.actionType === "緊急申領" &&
            (P.id
              ? (y.add(P.id),
                console.log(
                  "[InternalRequestsCarousel] Found urgent request:",
                  { id: P.id, name: P.name }
                ))
              : console.warn(
                  "[InternalRequestsCarousel] Urgent request missing ID:",
                  P
                ));
        }),
          console.log(
            "[InternalRequestsCarousel] Current urgent requests:",
            y.size
          ),
          console.log(
            "[InternalRequestsCarousel] Previous urgent requests:",
            x.current.size
          );
        const b = Array.from(y).filter((P) => !x.current.has(P)),
          I = b.length > 0;
        console.log(
          "[InternalRequestsCarousel] New urgent requests:",
          b.length,
          b
        ),
          console.log("[InternalRequestsCarousel] Has new urgent request:", I),
          console.log(
            "[InternalRequestsCarousel] Is first load:",
            x.current.size === 0
          ),
          I && x.current.size > 0
            ? (console.log(
                "======= [InternalRequestsCarousel] 觸發通知音效 ======="
              ),
              console.log(
                "[InternalRequestsCarousel] New urgent request IDs:",
                b
              ),
              (async () => {
                try {
                  await ye.playNotification(),
                    console.log(
                      "[InternalRequestsCarousel] Notification sound played successfully"
                    );
                } catch (P) {
                  console.error(
                    "[InternalRequestsCarousel] Failed to play notification:",
                    P
                  );
                }
              })())
            : x.current.size === 0
            ? console.log(
                "[InternalRequestsCarousel] First load, skipping notification"
              )
            : I ||
              console.log(
                "[InternalRequestsCarousel] No new urgent requests, skipping notification"
              ),
          (x.current = new Set(y));
      } catch (y) {
        console.error(
          "[InternalRequestsCarousel] Error in urgent request detection:",
          y
        );
      }
    }, [e]),
      w.useEffect(() => {
        const y = (b) => {
          var P;
          const I = b;
          ((P = I.detail) == null ? void 0 : P.displayMode) !== void 0 &&
            f(I.detail.displayMode);
        };
        return (
          window.addEventListener("internalRequestsSettingChanged", y),
          () => window.removeEventListener("internalRequestsSettingChanged", y)
        );
      }, []),
      w.useEffect(() => {
        if (m === "separate") {
          const y = e.filter((I) => I.actionType === "緊急申領"),
            b = e.filter((I) => I.actionType !== "緊急申領");
          if (y.length > c) {
            const I = setInterval(() => {
              a((P) => {
                const A = P + c;
                return A >= y.length ? 0 : A;
              });
            }, 6e3);
            return () => clearInterval(I);
          }
          if (b.length > c) {
            const I = setInterval(() => {
              o((P) => {
                const A = P + c;
                return A >= b.length ? 0 : A;
              });
            }, 6e3);
            return () => clearInterval(I);
          }
        } else {
          const y =
            m === "urgentOnly"
              ? e.filter((b) => b.actionType === "緊急申領")
              : e;
          if (y.length > c) {
            const b = setInterval(() => {
              s((I) => {
                const P = I + c;
                return P >= y.length ? 0 : P;
              });
            }, 6e3);
            return () => clearInterval(b);
          }
        }
      }, [e.length, m, e, c]);
    const v = () => {
        const y = ye.toggle();
        d(y);
      },
      j = (y, b) => {
        if (y === "等待過帳" && b === "緊急申領")
          return "bg-red-100 border-red-300";
        switch (y) {
          case "等待過帳":
            return "bg-yellow-100 border-yellow-200";
          case "已過帳":
            return "bg-white border-gray-200";
          case "已簽收":
            return "bg-green-100 border-green-200";
          default:
            return "bg-gray-100 border-gray-200";
        }
      },
      k = (y, b) => {
        if (y === "等待過帳" && b === "緊急申領") return "text-gray-800";
        switch (y) {
          case "等待過帳":
            return "text-yellow-800";
          case "已過帳":
            return "text-gray-800";
          case "已簽收":
            return "text-green-800";
          default:
            return "text-gray-800";
        }
      },
      g = (y) => {
        try {
          return new Date(y.replace(/\//g, "-")).toLocaleString("zh-TW", {
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          });
        } catch {
          return y;
        }
      },
      p = (y, b) => {
        const I = y.state === "等待過帳" && y.actionType === "緊急申領";
        return n.jsx("div", {
          className: "h-full flex flex-col",
          children: n.jsxs("div", {
            className: `flex-1 p-3 border-2 rounded-lg transition-all flex flex-col ${j(
              y.state,
              y.actionType
            )}`,
            children: [
              n.jsxs("div", {
                className: "flex items-start justify-between mb-1 gap-1",
                children: [
                  n.jsxs("div", {
                    className: "flex-1 min-w-0",
                    children: [
                      n.jsx("h4", {
                        className: `font-semibold text-lg ${k(
                          y.state,
                          y.actionType
                        )} leading-tight truncate mb-1`,
                        title: y.name,
                        children: y.name,
                      }),
                      n.jsx("div", {
                        className: `text-sm ${k(y.state, y.actionType)}`,
                        children: y.code,
                      }),
                    ],
                  }),
                  y.actionType === "緊急申領" &&
                    n.jsxs("div", {
                      className:
                        "inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-red-600 text-white flex-shrink-0",
                      children: [
                        n.jsx(qe, { size: 12, className: "mr-1" }),
                        "緊急申領",
                      ],
                    }),
                ],
              }),
              n.jsxs("div", {
                className: `grid grid-cols-2 gap-1 text-base ${k(
                  y.state,
                  y.actionType
                )} flex-1 min-h-0`,
                children: [
                  n.jsxs("div", {
                    className: "space-y-1",
                    children: [
                      n.jsxs("div", {
                        className: "flex items-center min-w-0",
                        children: [
                          n.jsx(Bu, {
                            size: 20,
                            className: `mr-2 flex-shrink-0 ${
                              I ? "text-gray-800" : "text-gray-400"
                            }`,
                          }),
                          n.jsx("span", {
                            className: "truncate",
                            children: n.jsx("strong", {
                              children: y.requestingUnit,
                            }),
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className: "flex items-center min-w-0",
                        children: [
                          n.jsx(Js, {
                            size: 20,
                            className: `mr-2 flex-shrink-0 ${
                              I ? "text-gray-800" : "text-gray-400"
                            }`,
                          }),
                          n.jsx("span", {
                            className: "truncate",
                            children: n.jsx("strong", {
                              children: y.requestingPerson,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    className: "space-y-1",
                    children: [
                      n.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          n.jsx(Ee, {
                            size: 20,
                            className: `mr-2 ${
                              I ? "text-gray-800" : "text-gray-400"
                            }`,
                          }),
                          n.jsx("span", {
                            children: n.jsx("strong", {
                              children: y.requestedQuantity,
                            }),
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          n.jsx(Lr, {
                            size: 20,
                            className: `mr-2 ${
                              I ? "text-gray-800" : "text-gray-400"
                            }`,
                          }),
                          n.jsx("span", {
                            children: n.jsx("strong", {
                              children: g(y.requestTime),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              y.remarks &&
                n.jsxs("div", {
                  className: `mt-3 p-2 border rounded-lg text-base flex-shrink-0 ${
                    I
                      ? "bg-red-600 border-red-700 text-white"
                      : "bg-gray-50 border-gray-200 text-gray-700"
                  }`,
                  children: [
                    n.jsx("span", {
                      className: "font-medium",
                      children: "備註: ",
                    }),
                    n.jsx("span", { children: y.remarks }),
                  ],
                }),
            ],
          }),
        });
      },
      h = e.filter((y) => y.actionType === "緊急申領"),
      N = e.filter((y) => y.actionType !== "緊急申領");
    if (m === "urgentOnly" ? h.length === 0 : e.length === 0)
      return n.jsxs("div", {
        className:
          "bg-white rounded-lg shadow-sm border border-gray-200 h-full flex flex-col",
        children: [
          n.jsx("div", {
            className: "p-2 border-b border-gray-200 bg-teal-50",
            children: n.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                n.jsxs("div", {
                  className: "flex items-center",
                  children: [
                    n.jsx(Kt, { size: 20, className: "text-teal-600 mr-2" }),
                    n.jsx("h3", {
                      className: "text-xl font-semibold text-gray-800",
                      children: "藥品申領通知",
                    }),
                  ],
                }),
                n.jsx("button", {
                  onClick: v,
                  className: `p-2 rounded-lg transition-colors ${
                    u
                      ? "bg-green-100 text-green-600 hover:bg-green-200"
                      : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                  }`,
                  title: u ? "通知已啟用" : "通知已關閉",
                  children: u
                    ? n.jsx(Hu, { size: 18, className: "fill-current" })
                    : n.jsx(Vu, { size: 18 }),
                }),
              ],
            }),
          }),
          n.jsx("div", {
            className: "flex-1 flex items-center justify-center",
            children: n.jsxs("div", {
              className: "text-center text-gray-500",
              children: [
                n.jsx(Ee, {
                  size: 48,
                  className: "mx-auto text-gray-300 mb-2",
                }),
                n.jsx("p", {
                  children:
                    m === "urgentOnly" ? "暫無緊急申領" : "暫無藥品申領",
                }),
              ],
            }),
          }),
        ],
      });
    const D = [...e].sort((y, b) => {
      if (y.state === "等待過帳" && y.actionType === "緊急申領") return -1;
      if (b.state === "等待過帳" && b.actionType === "緊急申領") return 1;
      const I = { 等待過帳: 0, 已過帳: 1, 已簽收: 2 },
        P = I[y.state],
        A = I[b.state];
      if (P !== A) return P - A;
      try {
        const le = new Date(y.requestTime.replace(/\//g, "-")).getTime();
        return new Date(b.requestTime.replace(/\//g, "-")).getTime() - le;
      } catch {
        return 0;
      }
    });
    if (m === "separate") {
      const y = h.slice(l, l + c),
        b = N.slice(i, i + c);
      return n.jsxs("div", {
        className:
          "bg-white rounded-lg shadow-sm border border-gray-200 h-full flex flex-col min-h-0 max-h-full",
        children: [
          n.jsx("div", {
            className: "p-2 border-b border-gray-200 bg-teal-50 flex-shrink-0",
            children: n.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                n.jsxs("div", {
                  className: "flex items-center",
                  children: [
                    n.jsx(Kt, { size: 20, className: "text-teal-600 mr-2" }),
                    n.jsx("h3", {
                      className: "text-xl font-semibold text-gray-800",
                      children: "藥品申領通知",
                    }),
                  ],
                }),
                n.jsx("div", {
                  className: "flex items-center space-x-4",
                  children: n.jsxs("span", {
                    className: "text-sm text-gray-500 font-medium",
                    children: [
                      e.filter((I) => I.state === "等待過帳").length,
                      " 項待處理",
                    ],
                  }),
                }),
              ],
            }),
          }),
          n.jsxs("div", {
            className:
              "flex-1 grid grid-cols-2 gap-2 p-2 min-h-0 overflow-hidden",
            children: [
              n.jsxs("div", {
                className: "flex flex-col min-h-0",
                children: [
                  n.jsxs("div", {
                    className:
                      "flex justify-center text-center text-sm font-semibold text-red-600 mb-1 bg-red-50 py-1 rounded",
                    children: [
                      n.jsxs("div", {
                        className: "mr-4",
                        children: ["緊急申領 (", h.length, ")"],
                      }),
                      n.jsxs("div", {
                        children: [
                          "第 ",
                          Math.floor(l / c) + 1,
                          " / ",
                          Math.ceil(h.length / c),
                          " 頁",
                        ],
                      }),
                    ],
                  }),
                  n.jsx("div", {
                    className:
                      "flex-1 min-h-0 overflow-hidden flex flex-col gap-2",
                    children:
                      h.length === 0
                        ? n.jsx("div", {
                            className:
                              "h-full flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg",
                            children: n.jsx("p", {
                              className: "text-sm text-gray-400",
                              children: "暫無緊急申領",
                            }),
                          })
                        : y.map((I, P) =>
                            n.jsx(
                              "div",
                              { className: "flex-1 min-h-0", children: p(I) },
                              I.id
                            )
                          ),
                  }),
                ],
              }),
              n.jsxs("div", {
                className: "flex flex-col min-h-0",
                children: [
                  n.jsxs("div", {
                    className:
                      "flex justify-center text-center text-sm font-semibold text-teal-600 mb-1 bg-teal-50 py-1 rounded",
                    children: [
                      n.jsxs("div", {
                        className: "mr-4",
                        children: ["一般申領 (", N.length, ")"],
                      }),
                      n.jsxs("div", {
                        children: [
                          "第 ",
                          Math.floor(i / c) + 1,
                          " / ",
                          Math.ceil(N.length / c),
                          " 頁",
                        ],
                      }),
                    ],
                  }),
                  n.jsx("div", {
                    className:
                      "flex-1 min-h-0 overflow-hidden flex flex-col gap-2",
                    children:
                      N.length === 0
                        ? n.jsx("div", {
                            className:
                              "h-full flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg",
                            children: n.jsx("p", {
                              className: "text-sm text-gray-400",
                              children: "暫無一般申領",
                            }),
                          })
                        : b.map((I, P) =>
                            n.jsx(
                              "div",
                              { className: "flex-1 min-h-0", children: p(I) },
                              I.id
                            )
                          ),
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    }
    const T =
        m === "urgentOnly" ? D.filter((y) => y.actionType === "緊急申領") : D,
      E = T.slice(r, r + c);
    return n.jsxs("div", {
      className:
        "bg-white rounded-lg shadow-sm border border-gray-200 h-full flex flex-col min-h-0 max-h-full",
      children: [
        n.jsx("div", {
          className: "p-2 border-b border-gray-200 bg-teal-50 flex-shrink-0",
          children: n.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              n.jsxs("div", {
                className: "flex items-center",
                children: [
                  n.jsx(Kt, { size: 20, className: "text-teal-600 mr-2" }),
                  n.jsx("h3", {
                    className: "text-xl font-semibold text-gray-800",
                    children: "藥品申領通知",
                  }),
                ],
              }),
              n.jsxs("div", {
                className: "flex items-center space-x-4",
                children: [
                  m === "urgentOnly" &&
                    n.jsx("span", {
                      className: "text-sm text-red-600 font-semibold",
                      children: "僅顯示緊急申領",
                    }),
                  n.jsxs("span", {
                    className: "text-sm text-gray-500 font-medium",
                    children: [
                      m === "urgentOnly"
                        ? e.filter(
                            (y) =>
                              y.state === "等待過帳" &&
                              y.actionType === "緊急申領"
                          ).length
                        : e.filter((y) => y.state === "等待過帳").length,
                      " 項待處理",
                    ],
                  }),
                  n.jsxs("span", {
                    className: "text-sm text-gray-500 font-medium",
                    children: [
                      "第 ",
                      Math.floor(r / c) + 1,
                      " / ",
                      Math.ceil(T.length / c),
                      " 頁",
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        n.jsx("div", {
          className: "flex-1 p-1 min-h-0 overflow-hidden flex flex-col gap-2",
          children: E.map((y) =>
            n.jsx("div", { className: "flex-1 min-h-0", children: p(y) }, y.id)
          ),
        }),
      ],
    });
  },
  td = ({
    internalRequests: e,
    isFullscreen: t = !1,
    showInFocus: r,
    onFocusToggle: s,
    gridHeight: l = 2,
    error: a,
  }) =>
    a != null && a.hasError
      ? t
        ? n.jsx("div", {
            className: "bg-gray-800 rounded-lg p-6 h-full",
            children: n.jsx(De, { message: a.message || "資料載入失敗" }),
          })
        : n.jsx(De, { message: a.message || "資料載入失敗" })
      : t
      ? n.jsx(Z0, { internalRequests: e, gridHeight: l })
      : n.jsx(J0, { internalRequests: e, showInFocus: r, onFocusToggle: s }),
  ep = ({
    isOpen: e,
    onClose: t,
    dashboardData: r,
    lastRefresh: s,
    sectionVisibility: l,
  }) => {
    const [a, i] = w.useState(new Date()),
      [o, c] = w.useState(C0());
    w.useEffect(() => {
      if (!e) return;
      const m = setInterval(() => {
        i(new Date());
      }, 1e3);
      return () => clearInterval(m);
    }, [e]),
      w.useEffect(() => {
        D0(o);
      }, [o]),
      w.useEffect(() => {
        const m = (f) => {
          f.key === "Escape" && t();
        };
        return (
          e &&
            (document.addEventListener("keydown", m),
            (document.body.style.overflow = "hidden")),
          () => {
            document.removeEventListener("keydown", m),
              (document.body.style.overflow = "unset");
          }
        );
      }, [e, t]);
    const u = (m, f) => {
        c((x) => ({ ...x, [m]: { ...x[m], position: f } }));
      },
      d = (m, f) => {
        c((x) => ({ ...x, [m]: { ...x[m], ...f } }));
      };
    return e
      ? n.jsxs("div", {
          className: "fixed inset-0 bg-gray-900 z-50 flex flex-col",
          children: [
            n.jsxs("div", {
              className:
                "bg-gray-800 text-white px-6 py-3 flex items-center justify-between border-b border-gray-700",
              children: [
                n.jsxs("div", {
                  className: "flex items-center space-x-6",
                  children: [
                    n.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        n.jsx(Qu, {
                          size: 24,
                          className: `text-blue-400 ${Eo.xlarge}`,
                        }),
                        n.jsx("h1", {
                          className: `${vt.subTitle} font-bold`,
                          children: "藥庫監控系統",
                        }),
                      ],
                    }),
                    n.jsx("div", {
                      className: `${vt.subTitle} font-mono`,
                      children: a.toLocaleString("zh-TW", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        hour12: !1,
                      }),
                    }),
                  ],
                }),
                n.jsxs("div", {
                  className: "flex items-center space-x-4",
                  children: [
                    s &&
                      n.jsxs("span", {
                        className: `text-gray-300 ${vt.content}`,
                        children: ["最後更新: ", s.toLocaleTimeString("zh-TW")],
                      }),
                    n.jsx("button", {
                      onClick: t,
                      className:
                        "p-2 hover:bg-gray-700 rounded-lg transition-colors",
                      title: "退出專注模式 (ESC)",
                      children: n.jsx(Re, { size: 24, className: Eo.xlarge }),
                    }),
                  ],
                }),
              ],
            }),
            n.jsx("div", {
              className: "flex-1 p-3 overflow-hidden",
              children: n.jsx("div", {
                className: "h-full grid grid-cols-8 grid-rows-6 gap-4",
                children: Object.entries(l).some(([m, f]) => f)
                  ? n.jsxs(n.Fragment, {
                      children: [
                        l.bulletins &&
                          n.jsx(Ut, {
                            sectionKey: "bulletins",
                            gridData: o.bulletins,
                            onPositionChange: u,
                            onSizeChange: d,
                            gridArea: $t(o.bulletins.position, {
                              row: o.bulletins.row,
                              col: o.bulletins.col,
                            }),
                            children: n.jsx(Yu, {
                              bulletins: r.bulletins,
                              isFullscreen: !0,
                            }),
                          }),
                        l.tasks &&
                          n.jsx(Ut, {
                            sectionKey: "tasks",
                            gridData: o.tasks,
                            onPositionChange: u,
                            onSizeChange: d,
                            gridArea: $t(o.tasks.position, {
                              row: o.tasks.row,
                              col: o.tasks.col,
                            }),
                            children: n.jsx(Ku, {
                              restockTasks: r.restockTasks,
                              receivingTasks: r.receivingTasks,
                              putAwayTasks: r.putAwayTasks,
                              isFullscreen: !0,
                            }),
                          }),
                        l.incomingDrugs &&
                          n.jsx(Ut, {
                            sectionKey: "incomingDrugs",
                            gridData: o.incomingDrugs,
                            onPositionChange: u,
                            onSizeChange: d,
                            gridArea: $t(o.incomingDrugs.position, {
                              row: o.incomingDrugs.row,
                              col: o.incomingDrugs.col,
                            }),
                            children: n.jsx(Xu, {
                              incomingDrugs: r.incomingDrugs,
                              isFullscreen: !0,
                            }),
                          }),
                        l.outOfStock &&
                          n.jsx(Ut, {
                            sectionKey: "outOfStock",
                            gridData: o.outOfStock,
                            onPositionChange: u,
                            onSizeChange: d,
                            gridArea: $t(o.outOfStock.position, {
                              row: o.outOfStock.row,
                              col: o.outOfStock.col,
                            }),
                            children: n.jsx(Ju, {
                              outOfStockItems: r.outOfStockItems,
                              isFullscreen: !0,
                            }),
                          }),
                        l.drugReplacements &&
                          n.jsx(Ut, {
                            sectionKey: "drugReplacements",
                            gridData: o.drugReplacements,
                            onPositionChange: u,
                            onSizeChange: d,
                            gridArea: $t(o.drugReplacements.position, {
                              row: o.drugReplacements.row,
                              col: o.drugReplacements.col,
                            }),
                            children: n.jsx(Zu, {
                              drugReplacements: r.drugReplacements,
                              isFullscreen: !0,
                            }),
                          }),
                        l.inventory &&
                          n.jsx(Ut, {
                            sectionKey: "inventory",
                            gridData: o.inventory,
                            onPositionChange: u,
                            onSizeChange: d,
                            gridArea: $t(o.inventory.position, {
                              row: o.inventory.row,
                              col: o.inventory.col,
                            }),
                            children: n.jsx(ed, {
                              inventoryHighlights: r.inventoryHighlights,
                              isFullscreen: !0,
                            }),
                          }),
                        l.internalRequests &&
                          n.jsx(Ut, {
                            sectionKey: "internalRequests",
                            gridData: o.internalRequests,
                            onPositionChange: u,
                            onSizeChange: d,
                            gridArea: $t(o.internalRequests.position, {
                              row: o.internalRequests.row,
                              col: o.internalRequests.col,
                            }),
                            children: n.jsx(td, {
                              internalRequests: r.internalRequests,
                              isFullscreen: !0,
                              gridHeight: o.internalRequests.row,
                            }),
                          }),
                      ],
                    })
                  : n.jsx("div", {
                      className:
                        "col-span-8 row-span-6 flex items-center justify-center",
                      children: n.jsxs("div", {
                        className: "text-center text-gray-400",
                        children: [
                          n.jsx("div", {
                            className: `${vt.title} mb-4`,
                            children: "👁️",
                          }),
                          n.jsx("p", {
                            className: vt.subTitle,
                            children: "所有區塊都已隱藏",
                          }),
                          n.jsx("p", {
                            className: `${vt.content} mt-2`,
                            children: "請在一般模式下開啟需要顯示的區塊",
                          }),
                        ],
                      }),
                    }),
              }),
            }),
            n.jsx("div", {
              className: `bg-gray-800 text-gray-300 text-center py-1 ${vt.smallLabel} border-t border-gray-700`,
              children:
                "按 ESC 鍵退出專注顯示模式 | 拖拽標題移動位置 | 拖拽右下角調整大小 | 內容每 8 秒自動輪播",
            }),
          ],
        })
      : null;
  },
  tp = () => {
    const [e, t] = w.useState(!document.hidden);
    return (
      w.useEffect(() => {
        const r = () => {
          const s = !document.hidden;
          t(s),
            console.log("[usePageVisibility] Page visibility changed:", {
              visible: s,
              visibilityState: document.visibilityState,
              timestamp: new Date().toISOString(),
            });
        };
        return (
          document.addEventListener("visibilitychange", r),
          () => {
            document.removeEventListener("visibilitychange", r);
          }
        );
      }, []),
      e
    );
  },
  rp = ({
    intervalMs: e,
    onPoll: t,
    enabled: r = !0,
    maxRetryDelay: s = 6e4,
  }) => {
    const l = tp(),
      a = w.useRef(Date.now() + e),
      i = w.useRef(!1),
      o = w.useRef(null),
      c = w.useRef(e),
      u = w.useCallback(async () => {
        if (i.current || !r) return;
        i.current = !0;
        const m = Date.now();
        try {
          console.log(
            "[useRobustPolling] Executing poll at",
            new Date().toISOString(),
            "with interval",
            e,
            "ms"
          ),
            await t(),
            (c.current = e);
          const f = Date.now() - m,
            x = Math.max(0, e - f);
          console.log(
            "[useRobustPolling] Poll completed successfully, next poll in",
            x,
            "ms"
          ),
            o.current && clearTimeout(o.current),
            (a.current = Date.now() + x),
            (o.current = setTimeout(() => {
              l && r && !i.current && u();
            }, x));
        } catch (f) {
          console.error("[useRobustPolling] Poll failed:", f),
            (c.current = Math.min(c.current * 1.5, s)),
            console.log("[useRobustPolling] Retrying in", c.current, "ms"),
            o.current && clearTimeout(o.current),
            (a.current = Date.now() + c.current),
            (o.current = setTimeout(() => {
              l && r && !i.current && u();
            }, c.current));
        } finally {
          i.current = !1;
        }
      }, [r, t, e, s, l]);
    return (
      w.useEffect(() => {
        if (!r) {
          console.log("[useRobustPolling] Polling disabled, clearing timers"),
            o.current && (clearTimeout(o.current), (o.current = null));
          return;
        }
        return (
          l
            ? (console.log(
                "[useRobustPolling] Effect triggered - interval changed to:",
                e,
                "ms"
              ),
              o.current && (clearTimeout(o.current), (o.current = null)),
              console.log(
                "[useRobustPolling] Starting new polling cycle with interval:",
                e,
                "ms"
              ),
              u())
            : (console.log("[useRobustPolling] Page hidden, pausing polling"),
              o.current && (clearTimeout(o.current), (o.current = null))),
          () => {
            o.current && (clearTimeout(o.current), (o.current = null));
          }
        );
      }, [l, r, u, e]),
      {
        triggerImmediatePoll: w.useCallback(() => {
          console.log("[useRobustPolling] Immediate poll triggered"),
            o.current && (clearTimeout(o.current), (o.current = null)),
            u();
        }, [u]),
      }
    );
  },
  np = ({ isOpen: e, onClose: t, onSave: r, currentInterval: s }) => {
    const [l, a] = w.useState(s);
    if (
      (w.useEffect(() => {
        a(s);
      }, [s]),
      !e)
    )
      return null;
    const i = () => {
      if (l < 2) {
        alert("刷新間隔不能小於 2 秒");
        return;
      }
      if (l > 300) {
        alert("刷新間隔不能大於 300 秒（5 分鐘）");
        return;
      }
      r(l), t();
    };
    return n.jsx("div", {
      className:
        "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
      children: n.jsxs("div", {
        className: "bg-white rounded-xl shadow-2xl max-w-md w-full mx-4",
        children: [
          n.jsxs("div", {
            className:
              "flex items-center justify-between p-6 border-b border-gray-200",
            children: [
              n.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  n.jsx(Lr, { size: 24, className: "text-blue-600" }),
                  n.jsx("h2", {
                    className: "text-xl font-semibold text-gray-800",
                    children: "刷新間隔設定",
                  }),
                ],
              }),
              n.jsx("button", {
                onClick: t,
                className: "p-1 hover:bg-gray-100 rounded-lg transition-colors",
                children: n.jsx(Re, { size: 20 }),
              }),
            ],
          }),
          n.jsxs("div", {
            className: "p-6 space-y-6",
            children: [
              n.jsxs("div", {
                children: [
                  n.jsx("label", {
                    className: "block text-sm font-medium text-gray-700 mb-2",
                    children: "自動刷新間隔（秒）",
                  }),
                  n.jsx("input", {
                    type: "number",
                    min: "2",
                    max: "300",
                    value: l,
                    onChange: (o) => a(Number(o.target.value)),
                    className:
                      "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                  }),
                  n.jsx("p", {
                    className: "mt-2 text-sm text-gray-500",
                    children: "建議範圍：2 ~ 300 秒（預設：20 秒）",
                  }),
                ],
              }),
              n.jsx("div", {
                className: "bg-blue-50 border border-blue-200 rounded-lg p-4",
                children: n.jsxs("p", {
                  className: "text-sm text-blue-800",
                  children: [
                    n.jsx("strong", { children: "提示：" }),
                    "較短的刷新間隔可以更即時地顯示資料變化，但會增加伺服器負擔。建議根據實際需求調整。",
                  ],
                }),
              }),
            ],
          }),
          n.jsxs("div", {
            className:
              "flex items-center justify-end gap-3 p-6 border-t border-gray-200 bg-gray-50 rounded-b-xl",
            children: [
              n.jsx("button", {
                onClick: t,
                className:
                  "px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors",
                children: "取消",
              }),
              n.jsx("button", {
                onClick: i,
                className:
                  "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
                children: "儲存設定",
              }),
            ],
          }),
        ],
      }),
    });
  },
  sp = () => {
    var E, y, b, I, P, A, le;
    const { t: e } = Ar(),
      [t, r] = w.useState(null),
      [s, l] = w.useState(!0),
      [a, i] = w.useState(null),
      [o, c] = w.useState(null),
      [u, d] = w.useState(!0),
      [m, f] = w.useState(!1),
      [x, v] = w.useState(() => {
        const R = localStorage.getItem("dashboard_refresh_interval");
        return R ? parseInt(R, 10) : 20;
      }),
      [j, k] = w.useState({
        bulletins: !0,
        tasks: !0,
        incomingDrugs: !0,
        outOfStock: !0,
        drugReplacements: !0,
        inventory: !0,
        internalRequests: !0,
      }),
      g = In(),
      p = g ? `${g.Name} - ${g.Employer}` : "鴻森智能科技 - 臨床藥事科",
      h = w.useCallback(async () => {
        try {
          console.log("[PrescriptionQueryPage] Loading dashboard data..."),
            i(null);
          const R = await b0();
          if (!R || typeof R != "object")
            throw new Error("Invalid data format received from API");
          Array.isArray(R.bulletins) ||
            (console.warn(
              "[PrescriptionQueryPage] Invalid bulletins data, using empty array"
            ),
            (R.bulletins = [])),
            Array.isArray(R.internalRequests) ||
              (console.warn(
                "[PrescriptionQueryPage] Invalid internalRequests data, using empty array"
              ),
              (R.internalRequests = [])),
            console.log("[PrescriptionQueryPage] Dashboard data loaded:", {
              bulletins: R.bulletins.length,
              internalRequests: R.internalRequests.length,
              urgentRequests: R.internalRequests.filter(
                (G) => G.state === "等待過帳" && G.actionType === "緊急申領"
              ).length,
            }),
            r(R),
            c(new Date());
        } catch (R) {
          const G = R instanceof Error ? R.message : "載入資料失敗，請稍後再試";
          throw (
            (i(G),
            console.error(
              "[PrescriptionQueryPage] Failed to load dashboard data:",
              R
            ),
            R)
          );
        } finally {
          l(!1);
        }
      }, []);
    rp({ intervalMs: x * 1e3, onPoll: h, enabled: !0 }),
      w.useEffect(() => {
        console.log(
          "[PrescriptionQueryPage] Setting up page auto-reload every 20 minutes"
        );
        const G = setTimeout(() => {
          console.log(
            "[PrescriptionQueryPage] Auto-reloading page after 20 minutes"
          ),
            window.location.reload();
        }, 12e5);
        return () => {
          console.log(
            "[PrescriptionQueryPage] Clearing page auto-reload timer"
          ),
            clearTimeout(G);
        };
      }, []),
      w.useEffect(() => {
        (async () => {
          try {
            const G = E0();
            k(G), await Gu(), await h();
          } catch (G) {
            console.error("Failed to initialize:", G),
              i("初始化失敗，請重新整理頁面");
          }
        })();
      }, [h]);
    const N = () => {
        l(!0), h();
      },
      _ = () => {
        h();
      },
      D = (R, G) => {
        const Ae = { ...j, [R]: G };
        k(Ae), _0(Ae);
      },
      T = (R) => {
        v(R),
          localStorage.setItem("dashboard_refresh_interval", R.toString()),
          console.log(
            "[PrescriptionQueryPage] Refresh interval updated to",
            R,
            "seconds"
          );
      };
    return s && !t
      ? n.jsxs("div", {
          className: "min-h-screen flex flex-col bg-white",
          children: [
            n.jsx("main", {
              className: "flex-1 p-4 md:p-6 lg:p-8 pb-8",
              children: n.jsxs("div", {
                className: "max-w-screen-xl mx-auto",
                children: [
                  n.jsx("header", {
                    className: "h-[80px] mb-2",
                    children: n.jsxs("div", {
                      className: "flex items-start justify-between",
                      children: [
                        n.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            n.jsxs("button", {
                              onClick: () => {
                                const R = El();
                                R != null &&
                                  R.homepage &&
                                  (window.location.href = `${R.homepage}/phar_system/frontpage/`);
                              },
                              className:
                                "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors group relative",
                              title: e("platform.title"),
                              children: [
                                n.jsx(Cl, { size: 24 }),
                                n.jsx("span", {
                                  className:
                                    "absolute left-1/2 -translate-x-1/2 -bottom-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",
                                  children: e("platform.title"),
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              children: [
                                n.jsx("h1", {
                                  className:
                                    "text-2xl md:text-3xl font-semibold text-gray-800",
                                  children: e("app.title"),
                                }),
                                n.jsx("p", {
                                  className: "text-gray-600 text-sm",
                                  children: p,
                                }),
                              ],
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className: "flex items-center space-x-4",
                          children: [n.jsx(_l, {}), n.jsx(Dl, {})],
                        }),
                      ],
                    }),
                  }),
                  n.jsx("div", {
                    className: "flex items-center justify-center min-h-[400px]",
                    children: n.jsxs("div", {
                      className: "text-center",
                      children: [
                        n.jsx(X, { size: "large" }),
                        n.jsx("p", {
                          className: "mt-4 text-gray-600",
                          children: "載入藥庫監控系統資料中...",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            n.jsx("footer", {
              className:
                "fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-6 text-center text-gray-600 text-sm z-10",
              children: e("copyright"),
            }),
          ],
        })
      : a && !t
      ? n.jsxs("div", {
          className: "min-h-screen flex flex-col bg-white",
          children: [
            n.jsx("main", {
              className: "flex-1 p-4 md:p-6 lg:p-8 pb-8",
              children: n.jsxs("div", {
                className: "max-w-screen-xl mx-auto",
                children: [
                  n.jsx("header", {
                    className: "h-[80px] mb-2",
                    children: n.jsxs("div", {
                      className: "flex items-start justify-between",
                      children: [
                        n.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            n.jsxs("button", {
                              onClick: () => {
                                const R = El();
                                R != null &&
                                  R.homepage &&
                                  (window.location.href = `${R.homepage}/phar_system/frontpage/`);
                              },
                              className:
                                "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors group relative",
                              title: e("platform.title"),
                              children: [
                                n.jsx(Cl, { size: 24 }),
                                n.jsx("span", {
                                  className:
                                    "absolute left-1/2 -translate-x-1/2 -bottom-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",
                                  children: e("platform.title"),
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              children: [
                                n.jsx("h1", {
                                  className:
                                    "text-2xl md:text-3xl font-semibold text-gray-800",
                                  children: e("app.title"),
                                }),
                                n.jsx("p", {
                                  className: "text-gray-600 text-sm",
                                  children: p,
                                }),
                              ],
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className: "flex items-center space-x-4",
                          children: [n.jsx(_l, {}), n.jsx(Dl, {})],
                        }),
                      ],
                    }),
                  }),
                  n.jsx("div", {
                    className: "flex items-center justify-center min-h-[400px]",
                    children: n.jsxs("div", {
                      className: "text-center",
                      children: [
                        n.jsx("div", {
                          className: "text-6xl mb-4",
                          children: "⚠️",
                        }),
                        n.jsx("h2", {
                          className: "text-xl font-semibold mb-2 text-red-600",
                          children: "載入失敗",
                        }),
                        n.jsx("p", {
                          className: "text-gray-600 mb-4",
                          children: a,
                        }),
                        n.jsx("button", {
                          onClick: N,
                          className:
                            "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
                          children: "重新載入",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            n.jsx("footer", {
              className:
                "fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-6 text-center text-gray-600 text-sm z-10",
              children: e("copyright"),
            }),
          ],
        })
      : t
      ? n.jsxs("div", {
          className: "min-h-screen flex flex-col bg-gray-50",
          children: [
            n.jsx("main", {
              className: "flex-1 p-4 md:p-6 lg:p-8 pb-8",
              children: n.jsxs("div", {
                className: "max-w-screen-2xl mx-auto",
                children: [
                  n.jsx("header", {
                    className: "h-[80px] mb-6",
                    children: n.jsxs("div", {
                      className: "flex items-start justify-between",
                      children: [
                        n.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            n.jsxs("button", {
                              onClick: () => {
                                const R = El();
                                R != null &&
                                  R.homepage &&
                                  (window.location.href = `${R.homepage}/phar_system/frontpage/`);
                              },
                              className:
                                "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors group relative",
                              title: e("platform.title"),
                              children: [
                                n.jsx(Cl, { size: 24 }),
                                n.jsx("span", {
                                  className:
                                    "absolute left-1/2 -translate-x-1/2 -bottom-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",
                                  children: e("platform.title"),
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              children: [
                                n.jsx("h1", {
                                  className:
                                    "text-2xl md:text-3xl font-semibold text-gray-800",
                                  children: e("app.title"),
                                }),
                                n.jsx("p", {
                                  className: "text-gray-600 text-sm",
                                  children: p,
                                }),
                              ],
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className: "flex items-center space-x-4",
                          children: [
                            n.jsxs("div", {
                              className:
                                "flex items-center space-x-2 text-sm text-gray-500",
                              children: [
                                o &&
                                  n.jsxs("span", {
                                    children: [
                                      "最後更新: ",
                                      o.toLocaleTimeString("zh-TW"),
                                    ],
                                  }),
                                n.jsx("button", {
                                  onClick: N,
                                  disabled: s,
                                  className:
                                    "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                                  title: "重新整理",
                                  children: n.jsx(kr, {
                                    size: 16,
                                    className: s ? "animate-spin" : "",
                                  }),
                                }),
                              ],
                            }),
                            n.jsxs("button", {
                              onClick: () => d(!0),
                              className:
                                "flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors",
                              title: "專注顯示模式",
                              children: [
                                n.jsx(Rm, { size: 16, className: "mr-2" }),
                                "專注顯示",
                              ],
                            }),
                            n.jsx("button", {
                              onClick: () => f(!0),
                              className:
                                "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors",
                              title: "刷新間隔設定",
                              children: n.jsx(nr, { size: 20 }),
                            }),
                            n.jsx(_l, {}),
                            n.jsx(Dl, {}),
                          ],
                        }),
                      ],
                    }),
                  }),
                  n.jsxs("div", {
                    className: "grid grid-cols-2 gap-4 mb-4",
                    children: [
                      n.jsx("div", {
                        className: "lg:col-span-2 xl:col-span-2",
                        children: n.jsx(Yu, {
                          bulletins: t.bulletins,
                          onBulletinAdded: _,
                          showInFocus: j.bulletins,
                          onFocusToggle: (R) => D("bulletins", R),
                          error: (E = t.errors) == null ? void 0 : E.bulletins,
                        }),
                      }),
                      n.jsx("div", {
                        className: "lg:col-span-2 xl:col-span-1",
                        children: n.jsx(Ku, {
                          restockTasks: t.restockTasks,
                          receivingTasks: t.receivingTasks,
                          putAwayTasks: t.putAwayTasks,
                          showInFocus: j.tasks,
                          onFocusToggle: (R) => D("tasks", R),
                          error: (y = t.errors) == null ? void 0 : y.tasks,
                        }),
                      }),
                      n.jsx("div", {
                        children: n.jsx(Xu, {
                          incomingDrugs: t.incomingDrugs,
                          showInFocus: j.incomingDrugs,
                          onFocusToggle: (R) => D("incomingDrugs", R),
                          error:
                            (b = t.errors) == null ? void 0 : b.incomingDrugs,
                        }),
                      }),
                      n.jsx("div", {
                        children: n.jsx(Ju, {
                          outOfStockItems: t.outOfStockItems,
                          onItemAdded: _,
                          showInFocus: j.outOfStock,
                          onFocusToggle: (R) => D("outOfStock", R),
                          error: (I = t.errors) == null ? void 0 : I.outOfStock,
                        }),
                      }),
                      n.jsx("div", {
                        children: n.jsx(Zu, {
                          drugReplacements: t.drugReplacements,
                          showInFocus: j.drugReplacements,
                          onFocusToggle: (R) => D("drugReplacements", R),
                          error:
                            (P = t.errors) == null
                              ? void 0
                              : P.drugReplacements,
                        }),
                      }),
                      n.jsx("div", {
                        children: n.jsx(ed, {
                          inventoryHighlights: t.inventoryHighlights,
                          showInFocus: j.inventory,
                          onFocusToggle: (R) => D("inventory", R),
                          error: (A = t.errors) == null ? void 0 : A.inventory,
                        }),
                      }),
                      n.jsx("div", {
                        className: "lg:col-span-2",
                        children: n.jsx(td, {
                          internalRequests: t.internalRequests,
                          showInFocus: j.internalRequests,
                          onFocusToggle: (R) => D("internalRequests", R),
                          error:
                            (le = t.errors) == null
                              ? void 0
                              : le.internalRequests,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            n.jsx(ep, {
              isOpen: u,
              onClose: () => d(!1),
              dashboardData: t,
              lastRefresh: o,
              sectionVisibility: j,
            }),
            n.jsx(np, {
              isOpen: m,
              onClose: () => f(!1),
              onSave: T,
              currentInterval: x,
            }),
            n.jsx("footer", {
              className:
                "bg-white border-t border-gray-200 py-2 px-6 text-center text-gray-600 text-sm",
              children: e("copyright"),
            }),
          ],
        })
      : null;
  },
  lp = ({ onLogin: e }) => {
    const { t } = Ar(),
      [r, s] = w.useState(""),
      [l, a] = w.useState(""),
      [i, o] = w.useState(null),
      [c, u] = w.useState(!1),
      d = async (m) => {
        m.preventDefault(), o(null), u(!0);
        try {
          const f = await Vm({ ID: r, Password: l });
          f.Code === 200
            ? (Hm(f.Data), e())
            : f.Code === -1 || f.Code === -2
            ? o(f.Result)
            : o(t("error.api"));
        } catch (f) {
          console.error("Login error:", f),
            o(f instanceof Error ? f.message : t("error.api"));
        } finally {
          u(!1);
        }
      };
    return n.jsx("div", {
      className:
        "min-h-screen bg-gray-100 flex items-center justify-center p-4",
      children: n.jsxs("div", {
        className: "bg-white rounded-lg shadow-lg p-8 w-full max-w-md",
        children: [
          n.jsx("h1", {
            className: "text-2xl font-bold text-center text-gray-800 mb-8",
            children: t("app.title"),
          }),
          i &&
            n.jsxs("div", {
              className:
                "mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center gap-2",
              children: [
                n.jsx(qe, { size: 20 }),
                n.jsx("span", { children: i }),
              ],
            }),
          n.jsxs("form", {
            onSubmit: d,
            className: "space-y-6",
            children: [
              n.jsxs("div", {
                children: [
                  n.jsx("label", {
                    htmlFor: "id",
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: "帳號",
                  }),
                  n.jsx("input", {
                    type: "text",
                    id: "id",
                    value: r,
                    onChange: (m) => s(m.target.value),
                    className:
                      "w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                    required: !0,
                    autoComplete: "username",
                  }),
                ],
              }),
              n.jsxs("div", {
                children: [
                  n.jsx("label", {
                    htmlFor: "password",
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: "密碼",
                  }),
                  n.jsx("input", {
                    type: "password",
                    id: "password",
                    value: l,
                    onChange: (m) => a(m.target.value),
                    className:
                      "w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                    required: !0,
                    autoComplete: "current-password",
                  }),
                ],
              }),
              n.jsx("button", {
                type: "submit",
                disabled: c,
                className: `w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center ${
                  c
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`,
                children: c
                  ? n.jsxs(n.Fragment, {
                      children: [
                        n.jsx(X, { size: "small\\", className: "mr-2" }),
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
function ap() {
  const [e, t] = w.useState(!1),
    [r, s] = w.useState(!1),
    [l, a] = w.useState(!0);
  w.useEffect(() => {
    (async () => {
      try {
        await Gu(), t(!0);
        const c = qm();
        s(c),
          console.log("Authentication check:", {
            authenticated: c,
            userSession: sessionStorage.getItem("user_session")
              ? "exists"
              : "missing",
          });
      } catch (c) {
        console.error("Failed to load configuration:", c);
      } finally {
        a(!1);
      }
    })();
  }, []);
  const i = () => {
    s(!0);
  };
  return !e || l
    ? n.jsx("div", {
        className: "min-h-screen flex items-center justify-center",
        children: n.jsx("div", {
          className: "text-gray-600",
          children: "Loading...",
        }),
      })
    : n.jsx($m, { children: r ? n.jsx(sp, {}) : n.jsx(lp, { onLogin: i }) });
}
$u(document.getElementById("root")).render(
  n.jsx(w.StrictMode, { children: n.jsx(ap, {}) })
);
