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
function nd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Do = { exports: {} },
  Rs = {},
  _o = { exports: {} },
  q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dn = Symbol.for("react.element"),
  sd = Symbol.for("react.portal"),
  ld = Symbol.for("react.fragment"),
  ad = Symbol.for("react.strict_mode"),
  id = Symbol.for("react.profiler"),
  od = Symbol.for("react.provider"),
  cd = Symbol.for("react.context"),
  ud = Symbol.for("react.forward_ref"),
  dd = Symbol.for("react.suspense"),
  fd = Symbol.for("react.memo"),
  md = Symbol.for("react.lazy"),
  hi = Symbol.iterator;
function gd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (hi && e[hi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Io = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  zo = Object.assign,
  To = {};
function Pr(e, t, r) {
  ((this.props = e),
    (this.context = t),
    (this.refs = To),
    (this.updater = r || Io));
}
Pr.prototype.isReactComponent = {};
Pr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Pr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ro() {}
Ro.prototype = Pr.prototype;
function ja(e, t, r) {
  ((this.props = e),
    (this.context = t),
    (this.refs = To),
    (this.updater = r || Io));
}
var Na = (ja.prototype = new Ro());
Na.constructor = ja;
zo(Na, Pr.prototype);
Na.isPureReactComponent = !0;
var xi = Array.isArray,
  Po = Object.prototype.hasOwnProperty,
  ba = { current: null },
  Mo = { key: !0, ref: !0, __self: !0, __source: !0 };
function Oo(e, t, r) {
  var s,
    l = {},
    a = null,
    i = null;
  if (t != null)
    for (s in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (a = "" + t.key),
    t))
      Po.call(t, s) && !Mo.hasOwnProperty(s) && (l[s] = t[s]);
  var o = arguments.length - 2;
  if (o === 1) l.children = r;
  else if (1 < o) {
    for (var c = Array(o), u = 0; u < o; u++) c[u] = arguments[u + 2];
    l.children = c;
  }
  if (e && e.defaultProps)
    for (s in ((o = e.defaultProps), o)) l[s] === void 0 && (l[s] = o[s]);
  return {
    $$typeof: Dn,
    type: e,
    key: a,
    ref: i,
    props: l,
    _owner: ba.current,
  };
}
function pd(e, t) {
  return {
    $$typeof: Dn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Sa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Dn;
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
var yi = /\/+/g;
function Js(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? hd("" + e.key)
    : t.toString(36);
}
function Xn(e, t, r, s, l) {
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
          case Dn:
          case sd:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = s === "" ? "." + Js(i, 0) : s),
      xi(l)
        ? ((r = ""),
          e != null && (r = e.replace(yi, "$&/") + "/"),
          Xn(l, t, r, "", function (u) {
            return u;
          }))
        : l != null &&
          (Sa(l) &&
            (l = pd(
              l,
              r +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(yi, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (s = s === "" ? "." : s + ":"), xi(e)))
    for (var o = 0; o < e.length; o++) {
      a = e[o];
      var c = s + Js(a, o);
      i += Xn(a, t, r, c, l);
    }
  else if (((c = gd(e)), typeof c == "function"))
    for (e = c.call(e), o = 0; !(a = e.next()).done; )
      ((a = a.value), (c = s + Js(a, o++)), (i += Xn(a, t, r, c, l)));
  else if (a === "object")
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
function Pn(e, t, r) {
  if (e == null) return e;
  var s = [],
    l = 0;
  return (
    Xn(e, s, "", "", function (a) {
      return t.call(r, a, l++);
    }),
    s
  );
}
function xd(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var be = { current: null },
  Jn = { transition: null },
  yd = {
    ReactCurrentDispatcher: be,
    ReactCurrentBatchConfig: Jn,
    ReactCurrentOwner: ba,
  };
function Lo() {
  throw Error("act(...) is not supported in production builds of React.");
}
q.Children = {
  map: Pn,
  forEach: function (e, t, r) {
    Pn(
      e,
      function () {
        t.apply(this, arguments);
      },
      r,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Pn(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Pn(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Sa(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
q.Component = Pr;
q.Fragment = ld;
q.Profiler = id;
q.PureComponent = ja;
q.StrictMode = ad;
q.Suspense = dd;
q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yd;
q.act = Lo;
q.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var s = zo({}, e.props),
    l = e.key,
    a = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((a = t.ref), (i = ba.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (c in t)
      Po.call(t, c) &&
        !Mo.hasOwnProperty(c) &&
        (s[c] = t[c] === void 0 && o !== void 0 ? o[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) s.children = r;
  else if (1 < c) {
    o = Array(c);
    for (var u = 0; u < c; u++) o[u] = arguments[u + 2];
    s.children = o;
  }
  return { $$typeof: Dn, type: e.type, key: l, ref: a, props: s, _owner: i };
};
q.createContext = function (e) {
  return (
    (e = {
      $$typeof: cd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: od, _context: e }),
    (e.Consumer = e)
  );
};
q.createElement = Oo;
q.createFactory = function (e) {
  var t = Oo.bind(null, e);
  return ((t.type = e), t);
};
q.createRef = function () {
  return { current: null };
};
q.forwardRef = function (e) {
  return { $$typeof: ud, render: e };
};
q.isValidElement = Sa;
q.lazy = function (e) {
  return { $$typeof: md, _payload: { _status: -1, _result: e }, _init: xd };
};
q.memo = function (e, t) {
  return { $$typeof: fd, type: e, compare: t === void 0 ? null : t };
};
q.startTransition = function (e) {
  var t = Jn.transition;
  Jn.transition = {};
  try {
    e();
  } finally {
    Jn.transition = t;
  }
};
q.unstable_act = Lo;
q.useCallback = function (e, t) {
  return be.current.useCallback(e, t);
};
q.useContext = function (e) {
  return be.current.useContext(e);
};
q.useDebugValue = function () {};
q.useDeferredValue = function (e) {
  return be.current.useDeferredValue(e);
};
q.useEffect = function (e, t) {
  return be.current.useEffect(e, t);
};
q.useId = function () {
  return be.current.useId();
};
q.useImperativeHandle = function (e, t, r) {
  return be.current.useImperativeHandle(e, t, r);
};
q.useInsertionEffect = function (e, t) {
  return be.current.useInsertionEffect(e, t);
};
q.useLayoutEffect = function (e, t) {
  return be.current.useLayoutEffect(e, t);
};
q.useMemo = function (e, t) {
  return be.current.useMemo(e, t);
};
q.useReducer = function (e, t, r) {
  return be.current.useReducer(e, t, r);
};
q.useRef = function (e) {
  return be.current.useRef(e);
};
q.useState = function (e) {
  return be.current.useState(e);
};
q.useSyncExternalStore = function (e, t, r) {
  return be.current.useSyncExternalStore(e, t, r);
};
q.useTransition = function () {
  return be.current.useTransition();
};
q.version = "18.3.1";
_o.exports = q;
var w = _o.exports;
const Te = nd(w);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vd = w,
  wd = Symbol.for("react.element"),
  jd = Symbol.for("react.fragment"),
  Nd = Object.prototype.hasOwnProperty,
  bd = vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Sd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ao(e, t, r) {
  var s,
    l = {},
    a = null,
    i = null;
  (r !== void 0 && (a = "" + r),
    t.key !== void 0 && (a = "" + t.key),
    t.ref !== void 0 && (i = t.ref));
  for (s in t) Nd.call(t, s) && !Sd.hasOwnProperty(s) && (l[s] = t[s]);
  if (e && e.defaultProps)
    for (s in ((t = e.defaultProps), t)) l[s] === void 0 && (l[s] = t[s]);
  return {
    $$typeof: wd,
    type: e,
    key: a,
    ref: i,
    props: l,
    _owner: bd.current,
  };
}
Rs.Fragment = jd;
Rs.jsx = Ao;
Rs.jsxs = Ao;
Do.exports = Rs;
var n = Do.exports,
  Fo = { exports: {} },
  Ae = {},
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
  function t(R, F) {
    var C = R.length;
    R.push(F);
    e: for (; 0 < C; ) {
      var S = (C - 1) >>> 1,
        b = R[S];
      if (0 < l(b, F)) ((R[S] = F), (R[C] = b), (C = S));
      else break e;
    }
  }
  function r(R) {
    return R.length === 0 ? null : R[0];
  }
  function s(R) {
    if (R.length === 0) return null;
    var F = R[0],
      C = R.pop();
    if (C !== F) {
      R[0] = C;
      e: for (var S = 0, b = R.length, P = b >>> 1; S < P; ) {
        var A = 2 * (S + 1) - 1,
          U = R[A],
          we = A + 1,
          Fr = R[we];
        if (0 > l(U, C))
          we < b && 0 > l(Fr, U)
            ? ((R[S] = Fr), (R[we] = C), (S = we))
            : ((R[S] = U), (R[A] = C), (S = A));
        else if (we < b && 0 > l(Fr, C)) ((R[S] = Fr), (R[we] = C), (S = we));
        else break e;
      }
    }
    return F;
  }
  function l(R, F) {
    var C = R.sortIndex - F.sortIndex;
    return C !== 0 ? C : R.id - F.id;
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
    g = 3,
    x = !1,
    y = !1,
    j = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(R) {
    for (var F = r(u); F !== null; ) {
      if (F.callback === null) s(u);
      else if (F.startTime <= R)
        (s(u), (F.sortIndex = F.expirationTime), t(c, F));
      else break;
      F = r(u);
    }
  }
  function N(R) {
    if (((j = !1), h(R), !y))
      if (r(c) !== null) ((y = !0), M(D));
      else {
        var F = r(u);
        F !== null && X(N, F.startTime - R);
      }
  }
  function D(R, F) {
    ((y = !1), j && ((j = !1), p(_), (_ = -1)), (x = !0));
    var C = g;
    try {
      for (
        h(F), m = r(c);
        m !== null && (!(m.expirationTime > F) || (R && !L()));
      ) {
        var S = m.callback;
        if (typeof S == "function") {
          ((m.callback = null), (g = m.priorityLevel));
          var b = S(m.expirationTime <= F);
          ((F = e.unstable_now()),
            typeof b == "function" ? (m.callback = b) : m === r(c) && s(c),
            h(F));
        } else s(c);
        m = r(c);
      }
      if (m !== null) var P = !0;
      else {
        var A = r(u);
        (A !== null && X(N, A.startTime - F), (P = !1));
      }
      return P;
    } finally {
      ((m = null), (g = C), (x = !1));
    }
  }
  var I = !1,
    z = null,
    _ = -1,
    v = 5,
    E = -1;
  function L() {
    return !(e.unstable_now() - E < v);
  }
  function $() {
    if (z !== null) {
      var R = e.unstable_now();
      E = R;
      var F = !0;
      try {
        F = z(!0, R);
      } finally {
        F ? B() : ((I = !1), (z = null));
      }
    } else I = !1;
  }
  var B;
  if (typeof f == "function")
    B = function () {
      f($);
    };
  else if (typeof MessageChannel < "u") {
    var se = new MessageChannel(),
      ae = se.port2;
    ((se.port1.onmessage = $),
      (B = function () {
        ae.postMessage(null);
      }));
  } else
    B = function () {
      k($, 0);
    };
  function M(R) {
    ((z = R), I || ((I = !0), B()));
  }
  function X(R, F) {
    _ = k(function () {
      R(e.unstable_now());
    }, F);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || x || ((y = !0), M(D));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (v = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return g;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(c);
    }),
    (e.unstable_next = function (R) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = g;
      }
      var C = g;
      g = F;
      try {
        return R();
      } finally {
        g = C;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, F) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var C = g;
      g = R;
      try {
        return F();
      } finally {
        g = C;
      }
    }),
    (e.unstable_scheduleCallback = function (R, F, C) {
      var S = e.unstable_now();
      switch (
        (typeof C == "object" && C !== null
          ? ((C = C.delay), (C = typeof C == "number" && 0 < C ? S + C : S))
          : (C = S),
        R)
      ) {
        case 1:
          var b = -1;
          break;
        case 2:
          b = 250;
          break;
        case 5:
          b = 1073741823;
          break;
        case 4:
          b = 1e4;
          break;
        default:
          b = 5e3;
      }
      return (
        (b = C + b),
        (R = {
          id: d++,
          callback: F,
          priorityLevel: R,
          startTime: C,
          expirationTime: b,
          sortIndex: -1,
        }),
        C > S
          ? ((R.sortIndex = C),
            t(u, R),
            r(c) === null &&
              R === r(u) &&
              (j ? (p(_), (_ = -1)) : (j = !0), X(N, C - S)))
          : ((R.sortIndex = b), t(c, R), y || x || ((y = !0), M(D))),
        R
      );
    }),
    (e.unstable_shouldYield = L),
    (e.unstable_wrapCallback = function (R) {
      var F = g;
      return function () {
        var C = g;
        g = F;
        try {
          return R.apply(this, arguments);
        } finally {
          g = C;
        }
      };
    }));
})(Uo);
$o.exports = Uo;
var kd = $o.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cd = w,
  Me = kd;
function T(e) {
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
var qo = new Set(),
  cn = {};
function nr(e, t) {
  (Cr(e, t), Cr(e + "Capture", t));
}
function Cr(e, t) {
  for (cn[e] = t, e = 0; e < t.length; e++) qo.add(t[e]);
}
var ut = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Dl = Object.prototype.hasOwnProperty,
  Ed =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  vi = {},
  wi = {};
function Dd(e) {
  return Dl.call(wi, e)
    ? !0
    : Dl.call(vi, e)
      ? !1
      : Ed.test(e)
        ? (wi[e] = !0)
        : ((vi[e] = !0), !1);
}
function _d(e, t, r, s) {
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
function Id(e, t, r, s) {
  if (t === null || typeof t > "u" || _d(e, t, r, s)) return !0;
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
function Se(e, t, r, s, l, a, i) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = s),
    (this.attributeNamespace = l),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = i));
}
var ge = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ge[e] = new Se(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ge[t] = new Se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ge[e] = new Se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ge[e] = new Se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ge[e] = new Se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ge[e] = new Se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ge[e] = new Se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ge[e] = new Se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ge[e] = new Se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ka = /[\-:]([a-z])/g;
function Ca(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ka, Ca);
    ge[t] = new Se(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ka, Ca);
    ge[t] = new Se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ka, Ca);
  ge[t] = new Se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ge[e] = new Se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ge.xlinkHref = new Se(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ge[e] = new Se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ea(e, t, r, s) {
  var l = ge.hasOwnProperty(t) ? ge[t] : null;
  (l !== null
    ? l.type !== 0
    : s ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Id(t, r, l, s) && (r = null),
    s || l === null
      ? Dd(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
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
var ht = Cd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Mn = Symbol.for("react.element"),
  ir = Symbol.for("react.portal"),
  or = Symbol.for("react.fragment"),
  Da = Symbol.for("react.strict_mode"),
  _l = Symbol.for("react.profiler"),
  Vo = Symbol.for("react.provider"),
  Ho = Symbol.for("react.context"),
  _a = Symbol.for("react.forward_ref"),
  Il = Symbol.for("react.suspense"),
  zl = Symbol.for("react.suspense_list"),
  Ia = Symbol.for("react.memo"),
  vt = Symbol.for("react.lazy"),
  Bo = Symbol.for("react.offscreen"),
  ji = Symbol.iterator;
function $r(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ji && e[ji]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var te = Object.assign,
  Zs;
function Gr(e) {
  if (Zs === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      Zs = (t && t[1]) || "";
    }
  return (
    `
` +
    Zs +
    e
  );
}
var el = !1;
function tl(e, t) {
  if (!e || el) return "";
  el = !0;
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
    ((el = !1), (Error.prepareStackTrace = r));
  }
  return (e = e ? e.displayName || e.name : "") ? Gr(e) : "";
}
function zd(e) {
  switch (e.tag) {
    case 5:
      return Gr(e.type);
    case 16:
      return Gr("Lazy");
    case 13:
      return Gr("Suspense");
    case 19:
      return Gr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = tl(e.type, !1)), e);
    case 11:
      return ((e = tl(e.type.render, !1)), e);
    case 1:
      return ((e = tl(e.type, !0)), e);
    default:
      return "";
  }
}
function Tl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case or:
      return "Fragment";
    case ir:
      return "Portal";
    case _l:
      return "Profiler";
    case Da:
      return "StrictMode";
    case Il:
      return "Suspense";
    case zl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ho:
        return (e.displayName || "Context") + ".Consumer";
      case Vo:
        return (e._context.displayName || "Context") + ".Provider";
      case _a:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ia:
        return (
          (t = e.displayName || null),
          t !== null ? t : Tl(e.type) || "Memo"
        );
      case vt:
        ((t = e._payload), (e = e._init));
        try {
          return Tl(e(t));
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
      return Tl(t);
    case 8:
      return t === Da ? "StrictMode" : "Mode";
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
function Rt(e) {
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
function Rd(e) {
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
          ((s = "" + i), a.call(this, i));
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
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function On(e) {
  e._valueTracker || (e._valueTracker = Rd(e));
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
function cs(e) {
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
  return te({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  });
}
function Ni(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue,
    s = t.checked != null ? t.checked : t.defaultChecked;
  ((r = Rt(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: s,
      initialValue: r,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function Go(e, t) {
  ((t = t.checked), t != null && Ea(e, "checked", t, !1));
}
function Pl(e, t) {
  Go(e, t);
  var r = Rt(t.value),
    s = t.type;
  if (r != null)
    s === "number"
      ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
      : e.value !== "" + r && (e.value = "" + r);
  else if (s === "submit" || s === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? Ml(e, t.type, r)
    : t.hasOwnProperty("defaultValue") && Ml(e, t.type, Rt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function bi(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var s = t.type;
    if (
      !(
        (s !== "submit" && s !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      r || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((r = e.name),
    r !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== "" && (e.name = r));
}
function Ml(e, t, r) {
  (t !== "number" || cs(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var Kr = Array.isArray;
function vr(e, t, r, s) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < r.length; l++) t["$" + r[l]] = !0;
    for (r = 0; r < e.length; r++)
      ((l = t.hasOwnProperty("$" + e[r].value)),
        e[r].selected !== l && (e[r].selected = l),
        l && s && (e[r].defaultSelected = !0));
  } else {
    for (r = "" + Rt(r), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === r) {
        ((e[l].selected = !0), s && (e[l].defaultSelected = !0));
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ol(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
  return te({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Si(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(T(92));
      if (Kr(r)) {
        if (1 < r.length) throw Error(T(93));
        r = r[0];
      }
      t = r;
    }
    (t == null && (t = ""), (r = t));
  }
  e._wrapperState = { initialValue: Rt(r) };
}
function Ko(e, t) {
  var r = Rt(t.value),
    s = Rt(t.defaultValue);
  (r != null &&
    ((r = "" + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    s != null && (e.defaultValue = "" + s));
}
function ki(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Yo(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ll(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Yo(t)
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
function un(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Jr = {
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
Object.keys(Jr).forEach(function (e) {
  Pd.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Jr[t] = Jr[e]));
  });
});
function Jo(e, t, r) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : r || typeof t != "number" || t === 0 || (Jr.hasOwnProperty(e) && Jr[e])
      ? ("" + t).trim()
      : t + "px";
}
function Zo(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var s = r.indexOf("--") === 0,
        l = Jo(r, t[r], s);
      (r === "float" && (r = "cssFloat"), s ? e.setProperty(r, l) : (e[r] = l));
    }
}
var Md = te(
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
function Al(e, t) {
  if (t) {
    if (Md[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(T(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(T(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(T(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(T(62));
  }
}
function Fl(e, t) {
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
var $l = null;
function za(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ul = null,
  wr = null,
  jr = null;
function Ci(e) {
  if ((e = zn(e))) {
    if (typeof Ul != "function") throw Error(T(280));
    var t = e.stateNode;
    t && ((t = As(t)), Ul(e.stateNode, e.type, t));
  }
}
function ec(e) {
  wr ? (jr ? jr.push(e) : (jr = [e])) : (wr = e);
}
function tc() {
  if (wr) {
    var e = wr,
      t = jr;
    if (((jr = wr = null), Ci(e), t)) for (e = 0; e < t.length; e++) Ci(t[e]);
  }
}
function rc(e, t) {
  return e(t);
}
function nc() {}
var rl = !1;
function sc(e, t, r) {
  if (rl) return e(t, r);
  rl = !0;
  try {
    return rc(e, t, r);
  } finally {
    ((rl = !1), (wr !== null || jr !== null) && (nc(), tc()));
  }
}
function dn(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var s = As(r);
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
      ((s = !s.disabled) ||
        ((e = e.type),
        (s = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !s));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(T(231, t, typeof r));
  return r;
}
var ql = !1;
if (ut)
  try {
    var Ur = {};
    (Object.defineProperty(Ur, "passive", {
      get: function () {
        ql = !0;
      },
    }),
      window.addEventListener("test", Ur, Ur),
      window.removeEventListener("test", Ur, Ur));
  } catch {
    ql = !1;
  }
function Od(e, t, r, s, l, a, i, o, c) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (d) {
    this.onError(d);
  }
}
var Zr = !1,
  us = null,
  ds = !1,
  Vl = null,
  Ld = {
    onError: function (e) {
      ((Zr = !0), (us = e));
    },
  };
function Ad(e, t, r, s, l, a, i, o, c) {
  ((Zr = !1), (us = null), Od.apply(Ld, arguments));
}
function Fd(e, t, r, s, l, a, i, o, c) {
  if ((Ad.apply(this, arguments), Zr)) {
    if (Zr) {
      var u = us;
      ((Zr = !1), (us = null));
    } else throw Error(T(198));
    ds || ((ds = !0), (Vl = u));
  }
}
function sr(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (r = t.return), (e = t.return));
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
function Ei(e) {
  if (sr(e) !== e) throw Error(T(188));
}
function $d(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = sr(e)), t === null)) throw Error(T(188));
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
        if (a === r) return (Ei(l), e);
        if (a === s) return (Ei(l), t);
        a = a.sibling;
      }
      throw Error(T(188));
    }
    if (r.return !== s.return) ((r = l), (s = a));
    else {
      for (var i = !1, o = l.child; o; ) {
        if (o === r) {
          ((i = !0), (r = l), (s = a));
          break;
        }
        if (o === s) {
          ((i = !0), (s = l), (r = a));
          break;
        }
        o = o.sibling;
      }
      if (!i) {
        for (o = a.child; o; ) {
          if (o === r) {
            ((i = !0), (r = a), (s = l));
            break;
          }
          if (o === s) {
            ((i = !0), (s = a), (r = l));
            break;
          }
          o = o.sibling;
        }
        if (!i) throw Error(T(189));
      }
    }
    if (r.alternate !== s) throw Error(T(190));
  }
  if (r.tag !== 3) throw Error(T(188));
  return r.stateNode.current === r ? e : t;
}
function ac(e) {
  return ((e = $d(e)), e !== null ? ic(e) : null);
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
  Di = Me.unstable_cancelCallback,
  Ud = Me.unstable_shouldYield,
  qd = Me.unstable_requestPaint,
  le = Me.unstable_now,
  Vd = Me.unstable_getCurrentPriorityLevel,
  Ta = Me.unstable_ImmediatePriority,
  cc = Me.unstable_UserBlockingPriority,
  fs = Me.unstable_NormalPriority,
  Hd = Me.unstable_LowPriority,
  uc = Me.unstable_IdlePriority,
  Ps = null,
  rt = null;
function Bd(e) {
  if (rt && typeof rt.onCommitFiberRoot == "function")
    try {
      rt.onCommitFiberRoot(Ps, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ye = Math.clz32 ? Math.clz32 : Gd,
  Qd = Math.log,
  Wd = Math.LN2;
function Gd(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Qd(e) / Wd) | 0)) | 0);
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
function ms(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var s = 0,
    l = e.suspendedLanes,
    a = e.pingedLanes,
    i = r & 268435455;
  if (i !== 0) {
    var o = i & ~l;
    o !== 0 ? (s = Yr(o)) : ((a &= i), a !== 0 && (s = Yr(a)));
  } else ((i = r & ~l), i !== 0 ? (s = Yr(i)) : a !== 0 && (s = Yr(a)));
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
      ((r = 31 - Ye(t)), (l = 1 << r), (s |= e[r]), (t &= ~l));
  return s;
}
function Kd(e, t) {
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
    var i = 31 - Ye(a),
      o = 1 << i,
      c = l[i];
    (c === -1
      ? (!(o & r) || o & s) && (l[i] = Kd(o, t))
      : c <= t && (e.expiredLanes |= o),
      (a &= ~o));
  }
}
function Hl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function dc() {
  var e = An;
  return ((An <<= 1), !(An & 4194240) && (An = 64), e);
}
function nl(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function _n(e, t, r) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ye(t)),
    (e[t] = r));
}
function Xd(e, t) {
  var r = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var s = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var l = 31 - Ye(r),
      a = 1 << l;
    ((t[l] = 0), (s[l] = -1), (e[l] = -1), (r &= ~a));
  }
}
function Ra(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r; ) {
    var s = 31 - Ye(r),
      l = 1 << s;
    ((l & t) | (e[s] & t) && (e[s] |= t), (r &= ~l));
  }
}
var Q = 0;
function fc(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var mc,
  Pa,
  gc,
  pc,
  hc,
  Bl = !1,
  $n = [],
  kt = null,
  Ct = null,
  Et = null,
  fn = new Map(),
  mn = new Map(),
  jt = [],
  Jd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function _i(e, t) {
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
      Et = null;
      break;
    case "pointerover":
    case "pointerout":
      fn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      mn.delete(t.pointerId);
  }
}
function qr(e, t, r, s, l, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: s,
        nativeEvent: a,
        targetContainers: [l],
      }),
      t !== null && ((t = zn(t)), t !== null && Pa(t)),
      e)
    : ((e.eventSystemFlags |= s),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Zd(e, t, r, s, l) {
  switch (t) {
    case "focusin":
      return ((kt = qr(kt, e, t, r, s, l)), !0);
    case "dragenter":
      return ((Ct = qr(Ct, e, t, r, s, l)), !0);
    case "mouseover":
      return ((Et = qr(Et, e, t, r, s, l)), !0);
    case "pointerover":
      var a = l.pointerId;
      return (fn.set(a, qr(fn.get(a) || null, e, t, r, s, l)), !0);
    case "gotpointercapture":
      return (
        (a = l.pointerId),
        mn.set(a, qr(mn.get(a) || null, e, t, r, s, l)),
        !0
      );
  }
  return !1;
}
function xc(e) {
  var t = Vt(e.target);
  if (t !== null) {
    var r = sr(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = lc(r)), t !== null)) {
          ((e.blockedOn = t),
            hc(e.priority, function () {
              gc(r);
            }));
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
function Zn(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Ql(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var s = new r.constructor(r.type, r);
      (($l = s), r.target.dispatchEvent(s), ($l = null));
    } else return ((t = zn(r)), t !== null && Pa(t), (e.blockedOn = r), !1);
    t.shift();
  }
  return !0;
}
function Ii(e, t, r) {
  Zn(e) && r.delete(t);
}
function ef() {
  ((Bl = !1),
    kt !== null && Zn(kt) && (kt = null),
    Ct !== null && Zn(Ct) && (Ct = null),
    Et !== null && Zn(Et) && (Et = null),
    fn.forEach(Ii),
    mn.forEach(Ii));
}
function Vr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Bl ||
      ((Bl = !0),
      Me.unstable_scheduleCallback(Me.unstable_NormalPriority, ef)));
}
function gn(e) {
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
    kt !== null && Vr(kt, e),
      Ct !== null && Vr(Ct, e),
      Et !== null && Vr(Et, e),
      fn.forEach(t),
      mn.forEach(t),
      r = 0;
    r < jt.length;
    r++
  )
    ((s = jt[r]), s.blockedOn === e && (s.blockedOn = null));
  for (; 0 < jt.length && ((r = jt[0]), r.blockedOn === null); )
    (xc(r), r.blockedOn === null && jt.shift());
}
var Nr = ht.ReactCurrentBatchConfig,
  gs = !0;
function tf(e, t, r, s) {
  var l = Q,
    a = Nr.transition;
  Nr.transition = null;
  try {
    ((Q = 1), Ma(e, t, r, s));
  } finally {
    ((Q = l), (Nr.transition = a));
  }
}
function rf(e, t, r, s) {
  var l = Q,
    a = Nr.transition;
  Nr.transition = null;
  try {
    ((Q = 4), Ma(e, t, r, s));
  } finally {
    ((Q = l), (Nr.transition = a));
  }
}
function Ma(e, t, r, s) {
  if (gs) {
    var l = Ql(e, t, r, s);
    if (l === null) (ml(e, t, s, ps, r), _i(e, s));
    else if (Zd(l, e, t, r, s)) s.stopPropagation();
    else if ((_i(e, s), t & 4 && -1 < Jd.indexOf(e))) {
      for (; l !== null; ) {
        var a = zn(l);
        if (
          (a !== null && mc(a),
          (a = Ql(e, t, r, s)),
          a === null && ml(e, t, s, ps, r),
          a === l)
        )
          break;
        l = a;
      }
      l !== null && s.stopPropagation();
    } else ml(e, t, s, null, r);
  }
}
var ps = null;
function Ql(e, t, r, s) {
  if (((ps = null), (e = za(s)), (e = Vt(e)), e !== null))
    if (((t = sr(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = lc(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((ps = e), null);
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
        case Ta:
          return 1;
        case cc:
          return 4;
        case fs:
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
var bt = null,
  Oa = null,
  es = null;
function vc() {
  if (es) return es;
  var e,
    t = Oa,
    r = t.length,
    s,
    l = "value" in bt ? bt.value : bt.textContent,
    a = l.length;
  for (e = 0; e < r && t[e] === l[e]; e++);
  var i = r - e;
  for (s = 1; s <= i && t[r - s] === l[a - s]; s++);
  return (es = l.slice(e, 1 < s ? 1 - s : void 0));
}
function ts(e) {
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
function zi() {
  return !1;
}
function Fe(e) {
  function t(r, s, l, a, i) {
    ((this._reactName = r),
      (this._targetInst = l),
      (this.type = s),
      (this.nativeEvent = a),
      (this.target = i),
      (this.currentTarget = null));
    for (var o in e)
      e.hasOwnProperty(o) && ((r = e[o]), (this[o] = r ? r(a) : a[o]));
    return (
      (this.isDefaultPrevented = (
        a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
      )
        ? Un
        : zi),
      (this.isPropagationStopped = zi),
      this
    );
  }
  return (
    te(t.prototype, {
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
var Mr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  La = Fe(Mr),
  In = te({}, Mr, { view: 0, detail: 0 }),
  nf = Fe(In),
  sl,
  ll,
  Hr,
  Ms = te({}, In, {
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
    getModifierState: Aa,
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
              ? ((sl = e.screenX - Hr.screenX), (ll = e.screenY - Hr.screenY))
              : (ll = sl = 0),
            (Hr = e)),
          sl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ll;
    },
  }),
  Ti = Fe(Ms),
  sf = te({}, Ms, { dataTransfer: 0 }),
  lf = Fe(sf),
  af = te({}, In, { relatedTarget: 0 }),
  al = Fe(af),
  of = te({}, Mr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  cf = Fe(of),
  uf = te({}, Mr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  df = Fe(uf),
  ff = te({}, Mr, { data: 0 }),
  Ri = Fe(ff),
  mf = {
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
  gf = {
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
function Aa() {
  return hf;
}
var xf = te({}, In, {
    key: function (e) {
      if (e.key) {
        var t = mf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ts(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? gf[e.keyCode] || "Unidentified"
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
    getModifierState: Aa,
    charCode: function (e) {
      return e.type === "keypress" ? ts(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ts(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  yf = Fe(xf),
  vf = te({}, Ms, {
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
  Pi = Fe(vf),
  wf = te({}, In, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Aa,
  }),
  jf = Fe(wf),
  Nf = te({}, Mr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  bf = Fe(Nf),
  Sf = te({}, Ms, {
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
  kf = Fe(Sf),
  Cf = [9, 13, 27, 32],
  Fa = ut && "CompositionEvent" in window,
  en = null;
ut && "documentMode" in document && (en = document.documentMode);
var Ef = ut && "TextEvent" in window && !en,
  wc = ut && (!Fa || (en && 8 < en && 11 >= en)),
  Mi = " ",
  Oi = !1;
function jc(e, t) {
  switch (e) {
    case "keyup":
      return Cf.indexOf(t.keyCode) !== -1;
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
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var cr = !1;
function Df(e, t) {
  switch (e) {
    case "compositionend":
      return Nc(t);
    case "keypress":
      return t.which !== 32 ? null : ((Oi = !0), Mi);
    case "textInput":
      return ((e = t.data), e === Mi && Oi ? null : e);
    default:
      return null;
  }
}
function _f(e, t) {
  if (cr)
    return e === "compositionend" || (!Fa && jc(e, t))
      ? ((e = vc()), (es = Oa = bt = null), (cr = !1), e)
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
      return wc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var If = {
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
function Li(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!If[e.type] : t === "textarea";
}
function bc(e, t, r, s) {
  (ec(s),
    (t = hs(t, "onChange")),
    0 < t.length &&
      ((r = new La("onChange", "change", null, r, s)),
      e.push({ event: r, listeners: t })));
}
var tn = null,
  pn = null;
function zf(e) {
  Pc(e, 0);
}
function Os(e) {
  var t = fr(e);
  if (Wo(t)) return e;
}
function Tf(e, t) {
  if (e === "change") return t;
}
var Sc = !1;
if (ut) {
  var il;
  if (ut) {
    var ol = "oninput" in document;
    if (!ol) {
      var Ai = document.createElement("div");
      (Ai.setAttribute("oninput", "return;"),
        (ol = typeof Ai.oninput == "function"));
    }
    il = ol;
  } else il = !1;
  Sc = il && (!document.documentMode || 9 < document.documentMode);
}
function Fi() {
  tn && (tn.detachEvent("onpropertychange", kc), (pn = tn = null));
}
function kc(e) {
  if (e.propertyName === "value" && Os(pn)) {
    var t = [];
    (bc(t, pn, e, za(e)), sc(zf, t));
  }
}
function Rf(e, t, r) {
  e === "focusin"
    ? (Fi(), (tn = t), (pn = r), tn.attachEvent("onpropertychange", kc))
    : e === "focusout" && Fi();
}
function Pf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Os(pn);
}
function Mf(e, t) {
  if (e === "click") return Os(t);
}
function Of(e, t) {
  if (e === "input" || e === "change") return Os(t);
}
function Lf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Je = typeof Object.is == "function" ? Object.is : Lf;
function hn(e, t) {
  if (Je(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e),
    s = Object.keys(t);
  if (r.length !== s.length) return !1;
  for (s = 0; s < r.length; s++) {
    var l = r[s];
    if (!Dl.call(t, l) || !Je(e[l], t[l])) return !1;
  }
  return !0;
}
function $i(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ui(e, t) {
  var r = $i(e);
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
    r = $i(r);
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
  for (var e = window, t = cs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = cs(e.document);
  }
  return t;
}
function $a(e) {
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
function Af(e) {
  var t = Ec(),
    r = e.focusedElem,
    s = e.selectionRange;
  if (
    t !== r &&
    r &&
    r.ownerDocument &&
    Cc(r.ownerDocument.documentElement, r)
  ) {
    if (s !== null && $a(r)) {
      if (
        ((t = s.start),
        (e = s.end),
        e === void 0 && (e = t),
        "selectionStart" in r)
      )
        ((r.selectionStart = t),
          (r.selectionEnd = Math.min(e, r.value.length)));
      else if (
        ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = r.textContent.length,
          a = Math.min(s.start, l);
        ((s = s.end === void 0 ? a : Math.min(s.end, l)),
          !e.extend && a > s && ((l = s), (s = a), (a = l)),
          (l = Ui(r, a)));
        var i = Ui(r, s);
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
      ((e = t[r]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var Ff = ut && "documentMode" in document && 11 >= document.documentMode,
  ur = null,
  Wl = null,
  rn = null,
  Gl = !1;
function qi(e, t, r) {
  var s = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  Gl ||
    ur == null ||
    ur !== cs(s) ||
    ((s = ur),
    "selectionStart" in s && $a(s)
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
    (rn && hn(rn, s)) ||
      ((rn = s),
      (s = hs(Wl, "onSelect")),
      0 < s.length &&
        ((t = new La("onSelect", "select", null, t, r)),
        e.push({ event: t, listeners: s }),
        (t.target = ur))));
}
function qn(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r["Webkit" + e] = "webkit" + t),
    (r["Moz" + e] = "moz" + t),
    r
  );
}
var dr = {
    animationend: qn("Animation", "AnimationEnd"),
    animationiteration: qn("Animation", "AnimationIteration"),
    animationstart: qn("Animation", "AnimationStart"),
    transitionend: qn("Transition", "TransitionEnd"),
  },
  cl = {},
  Dc = {};
ut &&
  ((Dc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete dr.animationend.animation,
    delete dr.animationiteration.animation,
    delete dr.animationstart.animation),
  "TransitionEvent" in window || delete dr.transitionend.transition);
function Ls(e) {
  if (cl[e]) return cl[e];
  if (!dr[e]) return e;
  var t = dr[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in Dc) return (cl[e] = t[r]);
  return e;
}
var _c = Ls("animationend"),
  Ic = Ls("animationiteration"),
  zc = Ls("animationstart"),
  Tc = Ls("transitionend"),
  Rc = new Map(),
  Vi =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Ot(e, t) {
  (Rc.set(e, t), nr(t, [e]));
}
for (var ul = 0; ul < Vi.length; ul++) {
  var dl = Vi[ul],
    $f = dl.toLowerCase(),
    Uf = dl[0].toUpperCase() + dl.slice(1);
  Ot($f, "on" + Uf);
}
Ot(_c, "onAnimationEnd");
Ot(Ic, "onAnimationIteration");
Ot(zc, "onAnimationStart");
Ot("dblclick", "onDoubleClick");
Ot("focusin", "onFocus");
Ot("focusout", "onBlur");
Ot(Tc, "onTransitionEnd");
Cr("onMouseEnter", ["mouseout", "mouseover"]);
Cr("onMouseLeave", ["mouseout", "mouseover"]);
Cr("onPointerEnter", ["pointerout", "pointerover"]);
Cr("onPointerLeave", ["pointerout", "pointerover"]);
nr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
nr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
nr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
nr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
nr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
nr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Xr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  qf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xr));
function Hi(e, t, r) {
  var s = e.type || "unknown-event";
  ((e.currentTarget = r), Fd(s, t, void 0, e), (e.currentTarget = null));
}
function Pc(e, t) {
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
          (Hi(l, o, u), (a = c));
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
          (Hi(l, o, u), (a = c));
        }
    }
  }
  if (ds) throw ((e = Vl), (ds = !1), (Vl = null), e);
}
function G(e, t) {
  var r = t[Zl];
  r === void 0 && (r = t[Zl] = new Set());
  var s = e + "__bubble";
  r.has(s) || (Mc(t, e, 2, !1), r.add(s));
}
function fl(e, t, r) {
  var s = 0;
  (t && (s |= 4), Mc(r, e, s, t));
}
var Vn = "_reactListening" + Math.random().toString(36).slice(2);
function xn(e) {
  if (!e[Vn]) {
    ((e[Vn] = !0),
      qo.forEach(function (r) {
        r !== "selectionchange" && (qf.has(r) || fl(r, !1, e), fl(r, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Vn] || ((t[Vn] = !0), fl("selectionchange", !1, t));
  }
}
function Mc(e, t, r, s) {
  switch (yc(t)) {
    case 1:
      var l = tf;
      break;
    case 4:
      l = rf;
      break;
    default:
      l = Ma;
  }
  ((r = l.bind(null, t, r, e)),
    (l = void 0),
    !ql ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    s
      ? l !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: l })
        : e.addEventListener(t, r, !0)
      : l !== void 0
        ? e.addEventListener(t, r, { passive: l })
        : e.addEventListener(t, r, !1));
}
function ml(e, t, r, s, l) {
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
          if (((i = Vt(o)), i === null)) return;
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
      d = za(r),
      m = [];
    e: {
      var g = Rc.get(e);
      if (g !== void 0) {
        var x = La,
          y = e;
        switch (e) {
          case "keypress":
            if (ts(r) === 0) break e;
          case "keydown":
          case "keyup":
            x = yf;
            break;
          case "focusin":
            ((y = "focus"), (x = al));
            break;
          case "focusout":
            ((y = "blur"), (x = al));
            break;
          case "beforeblur":
          case "afterblur":
            x = al;
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
            x = Ti;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = lf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = jf;
            break;
          case _c:
          case Ic:
          case zc:
            x = cf;
            break;
          case Tc:
            x = bf;
            break;
          case "scroll":
            x = nf;
            break;
          case "wheel":
            x = kf;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = df;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Pi;
        }
        var j = (t & 4) !== 0,
          k = !j && e === "scroll",
          p = j ? (g !== null ? g + "Capture" : null) : g;
        j = [];
        for (var f = u, h; f !== null; ) {
          h = f;
          var N = h.stateNode;
          if (
            (h.tag === 5 &&
              N !== null &&
              ((h = N),
              p !== null && ((N = dn(f, p)), N != null && j.push(yn(f, N, h)))),
            k)
          )
            break;
          f = f.return;
        }
        0 < j.length &&
          ((g = new x(g, y, null, r, d)), m.push({ event: g, listeners: j }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((g = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          g &&
            r !== $l &&
            (y = r.relatedTarget || r.fromElement) &&
            (Vt(y) || y[dt]))
        )
          break e;
        if (
          (x || g) &&
          ((g =
            d.window === d
              ? d
              : (g = d.ownerDocument)
                ? g.defaultView || g.parentWindow
                : window),
          x
            ? ((y = r.relatedTarget || r.toElement),
              (x = u),
              (y = y ? Vt(y) : null),
              y !== null &&
                ((k = sr(y)), y !== k || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((x = null), (y = u)),
          x !== y)
        ) {
          if (
            ((j = Ti),
            (N = "onMouseLeave"),
            (p = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((j = Pi),
              (N = "onPointerLeave"),
              (p = "onPointerEnter"),
              (f = "pointer")),
            (k = x == null ? g : fr(x)),
            (h = y == null ? g : fr(y)),
            (g = new j(N, f + "leave", x, r, d)),
            (g.target = k),
            (g.relatedTarget = h),
            (N = null),
            Vt(d) === u &&
              ((j = new j(p, f + "enter", y, r, d)),
              (j.target = h),
              (j.relatedTarget = k),
              (N = j)),
            (k = N),
            x && y)
          )
            t: {
              for (j = x, p = y, f = 0, h = j; h; h = lr(h)) f++;
              for (h = 0, N = p; N; N = lr(N)) h++;
              for (; 0 < f - h; ) ((j = lr(j)), f--);
              for (; 0 < h - f; ) ((p = lr(p)), h--);
              for (; f--; ) {
                if (j === p || (p !== null && j === p.alternate)) break t;
                ((j = lr(j)), (p = lr(p)));
              }
              j = null;
            }
          else j = null;
          (x !== null && Bi(m, g, x, j, !1),
            y !== null && k !== null && Bi(m, k, y, j, !0));
        }
      }
      e: {
        if (
          ((g = u ? fr(u) : window),
          (x = g.nodeName && g.nodeName.toLowerCase()),
          x === "select" || (x === "input" && g.type === "file"))
        )
          var D = Tf;
        else if (Li(g))
          if (Sc) D = Of;
          else {
            D = Pf;
            var I = Rf;
          }
        else
          (x = g.nodeName) &&
            x.toLowerCase() === "input" &&
            (g.type === "checkbox" || g.type === "radio") &&
            (D = Mf);
        if (D && (D = D(e, u))) {
          bc(m, D, r, d);
          break e;
        }
        (I && I(e, g, u),
          e === "focusout" &&
            (I = g._wrapperState) &&
            I.controlled &&
            g.type === "number" &&
            Ml(g, "number", g.value));
      }
      switch (((I = u ? fr(u) : window), e)) {
        case "focusin":
          (Li(I) || I.contentEditable === "true") &&
            ((ur = I), (Wl = u), (rn = null));
          break;
        case "focusout":
          rn = Wl = ur = null;
          break;
        case "mousedown":
          Gl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Gl = !1), qi(m, r, d));
          break;
        case "selectionchange":
          if (Ff) break;
        case "keydown":
        case "keyup":
          qi(m, r, d);
      }
      var z;
      if (Fa)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        cr
          ? jc(e, r) && (_ = "onCompositionEnd")
          : e === "keydown" && r.keyCode === 229 && (_ = "onCompositionStart");
      (_ &&
        (wc &&
          r.locale !== "ko" &&
          (cr || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && cr && (z = vc())
            : ((bt = d),
              (Oa = "value" in bt ? bt.value : bt.textContent),
              (cr = !0))),
        (I = hs(u, _)),
        0 < I.length &&
          ((_ = new Ri(_, e, null, r, d)),
          m.push({ event: _, listeners: I }),
          z ? (_.data = z) : ((z = Nc(r)), z !== null && (_.data = z)))),
        (z = Ef ? Df(e, r) : _f(e, r)) &&
          ((u = hs(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new Ri("onBeforeInput", "beforeinput", null, r, d)),
            m.push({ event: d, listeners: u }),
            (d.data = z))));
    }
    Pc(m, t);
  });
}
function yn(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function hs(e, t) {
  for (var r = t + "Capture", s = []; e !== null; ) {
    var l = e,
      a = l.stateNode;
    (l.tag === 5 &&
      a !== null &&
      ((l = a),
      (a = dn(e, r)),
      a != null && s.unshift(yn(e, a, l)),
      (a = dn(e, t)),
      a != null && s.push(yn(e, a, l))),
      (e = e.return));
  }
  return s;
}
function lr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Bi(e, t, r, s, l) {
  for (var a = t._reactName, i = []; r !== null && r !== s; ) {
    var o = r,
      c = o.alternate,
      u = o.stateNode;
    if (c !== null && c === s) break;
    (o.tag === 5 &&
      u !== null &&
      ((o = u),
      l
        ? ((c = dn(r, a)), c != null && i.unshift(yn(r, c, o)))
        : l || ((c = dn(r, a)), c != null && i.push(yn(r, c, o)))),
      (r = r.return));
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Vf = /\r\n?/g,
  Hf = /\u0000|\uFFFD/g;
function Qi(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Vf,
      `
`,
    )
    .replace(Hf, "");
}
function Hn(e, t, r) {
  if (((t = Qi(t)), Qi(e) !== t && r)) throw Error(T(425));
}
function xs() {}
var Kl = null,
  Yl = null;
function Xl(e, t) {
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
var Jl = typeof setTimeout == "function" ? setTimeout : void 0,
  Bf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Wi = typeof Promise == "function" ? Promise : void 0,
  Qf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Wi < "u"
        ? function (e) {
            return Wi.resolve(null).then(e).catch(Wf);
          }
        : Jl;
function Wf(e) {
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
          (e.removeChild(l), gn(t));
          return;
        }
        s--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || s++;
    r = l;
  } while (r);
  gn(t);
}
function Dt(e) {
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
function Gi(e) {
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
  vn = "__reactProps$" + Or,
  dt = "__reactContainer$" + Or,
  Zl = "__reactEvents$" + Or,
  Gf = "__reactListeners$" + Or,
  Kf = "__reactHandles$" + Or;
function Vt(e) {
  var t = e[tt];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[dt] || r[tt])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = Gi(e); e !== null; ) {
          if ((r = e[tt])) return r;
          e = Gi(e);
        }
      return t;
    }
    ((e = r), (r = e.parentNode));
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
  throw Error(T(33));
}
function As(e) {
  return e[vn] || null;
}
var ea = [],
  mr = -1;
function Lt(e) {
  return { current: e };
}
function K(e) {
  0 > mr || ((e.current = ea[mr]), (ea[mr] = null), mr--);
}
function W(e, t) {
  (mr++, (ea[mr] = e.current), (e.current = t));
}
var Pt = {},
  ve = Lt(Pt),
  Ee = Lt(!1),
  Xt = Pt;
function Er(e, t) {
  var r = e.type.contextTypes;
  if (!r) return Pt;
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
function De(e) {
  return ((e = e.childContextTypes), e != null);
}
function ys() {
  (K(Ee), K(ve));
}
function Ki(e, t, r) {
  if (ve.current !== Pt) throw Error(T(168));
  (W(ve, t), W(Ee, r));
}
function Oc(e, t, r) {
  var s = e.stateNode;
  if (((t = t.childContextTypes), typeof s.getChildContext != "function"))
    return r;
  s = s.getChildContext();
  for (var l in s) if (!(l in t)) throw Error(T(108, Td(e) || "Unknown", l));
  return te({}, r, s);
}
function vs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Pt),
    (Xt = ve.current),
    W(ve, e),
    W(Ee, Ee.current),
    !0
  );
}
function Yi(e, t, r) {
  var s = e.stateNode;
  if (!s) throw Error(T(169));
  (r
    ? ((e = Oc(e, t, Xt)),
      (s.__reactInternalMemoizedMergedChildContext = e),
      K(Ee),
      K(ve),
      W(ve, e))
    : K(Ee),
    W(Ee, r));
}
var lt = null,
  Fs = !1,
  pl = !1;
function Lc(e) {
  lt === null ? (lt = [e]) : lt.push(e);
}
function Yf(e) {
  ((Fs = !0), Lc(e));
}
function At() {
  if (!pl && lt !== null) {
    pl = !0;
    var e = 0,
      t = Q;
    try {
      var r = lt;
      for (Q = 1; e < r.length; e++) {
        var s = r[e];
        do s = s(!0);
        while (s !== null);
      }
      ((lt = null), (Fs = !1));
    } catch (l) {
      throw (lt !== null && (lt = lt.slice(e + 1)), oc(Ta, At), l);
    } finally {
      ((Q = t), (pl = !1));
    }
  }
  return null;
}
var gr = [],
  pr = 0,
  ws = null,
  js = 0,
  $e = [],
  Ue = 0,
  Jt = null,
  at = 1,
  it = "";
function Ut(e, t) {
  ((gr[pr++] = js), (gr[pr++] = ws), (ws = e), (js = t));
}
function Ac(e, t, r) {
  (($e[Ue++] = at), ($e[Ue++] = it), ($e[Ue++] = Jt), (Jt = e));
  var s = at;
  e = it;
  var l = 32 - Ye(s) - 1;
  ((s &= ~(1 << l)), (r += 1));
  var a = 32 - Ye(t) + l;
  if (30 < a) {
    var i = l - (l % 5);
    ((a = (s & ((1 << i) - 1)).toString(32)),
      (s >>= i),
      (l -= i),
      (at = (1 << (32 - Ye(t) + l)) | (r << l) | s),
      (it = a + e));
  } else ((at = (1 << a) | (r << l) | s), (it = e));
}
function Ua(e) {
  e.return !== null && (Ut(e, 1), Ac(e, 1, 0));
}
function qa(e) {
  for (; e === ws; )
    ((ws = gr[--pr]), (gr[pr] = null), (js = gr[--pr]), (gr[pr] = null));
  for (; e === Jt; )
    ((Jt = $e[--Ue]),
      ($e[Ue] = null),
      (it = $e[--Ue]),
      ($e[Ue] = null),
      (at = $e[--Ue]),
      ($e[Ue] = null));
}
var Pe = null,
  Re = null,
  Y = !1,
  Ke = null;
function Fc(e, t) {
  var r = qe(5, null, null, 0);
  ((r.elementType = "DELETED"),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r));
}
function Xi(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Pe = e), (Re = Dt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Pe = e), (Re = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = Jt !== null ? { id: at, overflow: it } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = qe(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (Pe = e),
            (Re = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ta(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ra(e) {
  if (Y) {
    var t = Re;
    if (t) {
      var r = t;
      if (!Xi(e, t)) {
        if (ta(e)) throw Error(T(418));
        t = Dt(r.nextSibling);
        var s = Pe;
        t && Xi(e, t)
          ? Fc(s, r)
          : ((e.flags = (e.flags & -4097) | 2), (Y = !1), (Pe = e));
      }
    } else {
      if (ta(e)) throw Error(T(418));
      ((e.flags = (e.flags & -4097) | 2), (Y = !1), (Pe = e));
    }
  }
}
function Ji(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Pe = e;
}
function Bn(e) {
  if (e !== Pe) return !1;
  if (!Y) return (Ji(e), (Y = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Xl(e.type, e.memoizedProps))),
    t && (t = Re))
  ) {
    if (ta(e)) throw ($c(), Error(T(418)));
    for (; t; ) (Fc(e, t), (t = Dt(t.nextSibling)));
  }
  if ((Ji(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(T(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              Re = Dt(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Re = null;
    }
  } else Re = Pe ? Dt(e.stateNode.nextSibling) : null;
  return !0;
}
function $c() {
  for (var e = Re; e; ) e = Dt(e.nextSibling);
}
function Dr() {
  ((Re = Pe = null), (Y = !1));
}
function Va(e) {
  Ke === null ? (Ke = [e]) : Ke.push(e);
}
var Xf = ht.ReactCurrentBatchConfig;
function Br(e, t, r) {
  if (
    ((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(T(309));
        var s = r.stateNode;
      }
      if (!s) throw Error(T(147, e));
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
    if (typeof e != "string") throw Error(T(284));
    if (!r._owner) throw Error(T(290, e));
  }
  return e;
}
function Qn(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      T(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function Zi(e) {
  var t = e._init;
  return t(e._payload);
}
function Uc(e) {
  function t(p, f) {
    if (e) {
      var h = p.deletions;
      h === null ? ((p.deletions = [f]), (p.flags |= 16)) : h.push(f);
    }
  }
  function r(p, f) {
    if (!e) return null;
    for (; f !== null; ) (t(p, f), (f = f.sibling));
    return null;
  }
  function s(p, f) {
    for (p = new Map(); f !== null; )
      (f.key !== null ? p.set(f.key, f) : p.set(f.index, f), (f = f.sibling));
    return p;
  }
  function l(p, f) {
    return ((p = Tt(p, f)), (p.index = 0), (p.sibling = null), p);
  }
  function a(p, f, h) {
    return (
      (p.index = h),
      e
        ? ((h = p.alternate),
          h !== null
            ? ((h = h.index), h < f ? ((p.flags |= 2), f) : h)
            : ((p.flags |= 2), f))
        : ((p.flags |= 1048576), f)
    );
  }
  function i(p) {
    return (e && p.alternate === null && (p.flags |= 2), p);
  }
  function o(p, f, h, N) {
    return f === null || f.tag !== 6
      ? ((f = Nl(h, p.mode, N)), (f.return = p), f)
      : ((f = l(f, h)), (f.return = p), f);
  }
  function c(p, f, h, N) {
    var D = h.type;
    return D === or
      ? d(p, f, h.props.children, N, h.key)
      : f !== null &&
          (f.elementType === D ||
            (typeof D == "object" &&
              D !== null &&
              D.$$typeof === vt &&
              Zi(D) === f.type))
        ? ((N = l(f, h.props)), (N.ref = Br(p, f, h)), (N.return = p), N)
        : ((N = os(h.type, h.key, h.props, null, p.mode, N)),
          (N.ref = Br(p, f, h)),
          (N.return = p),
          N);
  }
  function u(p, f, h, N) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== h.containerInfo ||
      f.stateNode.implementation !== h.implementation
      ? ((f = bl(h, p.mode, N)), (f.return = p), f)
      : ((f = l(f, h.children || [])), (f.return = p), f);
  }
  function d(p, f, h, N, D) {
    return f === null || f.tag !== 7
      ? ((f = Gt(h, p.mode, N, D)), (f.return = p), f)
      : ((f = l(f, h)), (f.return = p), f);
  }
  function m(p, f, h) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return ((f = Nl("" + f, p.mode, h)), (f.return = p), f);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Mn:
          return (
            (h = os(f.type, f.key, f.props, null, p.mode, h)),
            (h.ref = Br(p, null, f)),
            (h.return = p),
            h
          );
        case ir:
          return ((f = bl(f, p.mode, h)), (f.return = p), f);
        case vt:
          var N = f._init;
          return m(p, N(f._payload), h);
      }
      if (Kr(f) || $r(f))
        return ((f = Gt(f, p.mode, h, null)), (f.return = p), f);
      Qn(p, f);
    }
    return null;
  }
  function g(p, f, h, N) {
    var D = f !== null ? f.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return D !== null ? null : o(p, f, "" + h, N);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Mn:
          return h.key === D ? c(p, f, h, N) : null;
        case ir:
          return h.key === D ? u(p, f, h, N) : null;
        case vt:
          return ((D = h._init), g(p, f, D(h._payload), N));
      }
      if (Kr(h) || $r(h)) return D !== null ? null : d(p, f, h, N, null);
      Qn(p, h);
    }
    return null;
  }
  function x(p, f, h, N, D) {
    if ((typeof N == "string" && N !== "") || typeof N == "number")
      return ((p = p.get(h) || null), o(f, p, "" + N, D));
    if (typeof N == "object" && N !== null) {
      switch (N.$$typeof) {
        case Mn:
          return (
            (p = p.get(N.key === null ? h : N.key) || null),
            c(f, p, N, D)
          );
        case ir:
          return (
            (p = p.get(N.key === null ? h : N.key) || null),
            u(f, p, N, D)
          );
        case vt:
          var I = N._init;
          return x(p, f, h, I(N._payload), D);
      }
      if (Kr(N) || $r(N)) return ((p = p.get(h) || null), d(f, p, N, D, null));
      Qn(f, N);
    }
    return null;
  }
  function y(p, f, h, N) {
    for (
      var D = null, I = null, z = f, _ = (f = 0), v = null;
      z !== null && _ < h.length;
      _++
    ) {
      z.index > _ ? ((v = z), (z = null)) : (v = z.sibling);
      var E = g(p, z, h[_], N);
      if (E === null) {
        z === null && (z = v);
        break;
      }
      (e && z && E.alternate === null && t(p, z),
        (f = a(E, f, _)),
        I === null ? (D = E) : (I.sibling = E),
        (I = E),
        (z = v));
    }
    if (_ === h.length) return (r(p, z), Y && Ut(p, _), D);
    if (z === null) {
      for (; _ < h.length; _++)
        ((z = m(p, h[_], N)),
          z !== null &&
            ((f = a(z, f, _)),
            I === null ? (D = z) : (I.sibling = z),
            (I = z)));
      return (Y && Ut(p, _), D);
    }
    for (z = s(p, z); _ < h.length; _++)
      ((v = x(z, p, _, h[_], N)),
        v !== null &&
          (e && v.alternate !== null && z.delete(v.key === null ? _ : v.key),
          (f = a(v, f, _)),
          I === null ? (D = v) : (I.sibling = v),
          (I = v)));
    return (
      e &&
        z.forEach(function (L) {
          return t(p, L);
        }),
      Y && Ut(p, _),
      D
    );
  }
  function j(p, f, h, N) {
    var D = $r(h);
    if (typeof D != "function") throw Error(T(150));
    if (((h = D.call(h)), h == null)) throw Error(T(151));
    for (
      var I = (D = null), z = f, _ = (f = 0), v = null, E = h.next();
      z !== null && !E.done;
      _++, E = h.next()
    ) {
      z.index > _ ? ((v = z), (z = null)) : (v = z.sibling);
      var L = g(p, z, E.value, N);
      if (L === null) {
        z === null && (z = v);
        break;
      }
      (e && z && L.alternate === null && t(p, z),
        (f = a(L, f, _)),
        I === null ? (D = L) : (I.sibling = L),
        (I = L),
        (z = v));
    }
    if (E.done) return (r(p, z), Y && Ut(p, _), D);
    if (z === null) {
      for (; !E.done; _++, E = h.next())
        ((E = m(p, E.value, N)),
          E !== null &&
            ((f = a(E, f, _)),
            I === null ? (D = E) : (I.sibling = E),
            (I = E)));
      return (Y && Ut(p, _), D);
    }
    for (z = s(p, z); !E.done; _++, E = h.next())
      ((E = x(z, p, _, E.value, N)),
        E !== null &&
          (e && E.alternate !== null && z.delete(E.key === null ? _ : E.key),
          (f = a(E, f, _)),
          I === null ? (D = E) : (I.sibling = E),
          (I = E)));
    return (
      e &&
        z.forEach(function ($) {
          return t(p, $);
        }),
      Y && Ut(p, _),
      D
    );
  }
  function k(p, f, h, N) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === or &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case Mn:
          e: {
            for (var D = h.key, I = f; I !== null; ) {
              if (I.key === D) {
                if (((D = h.type), D === or)) {
                  if (I.tag === 7) {
                    (r(p, I.sibling),
                      (f = l(I, h.props.children)),
                      (f.return = p),
                      (p = f));
                    break e;
                  }
                } else if (
                  I.elementType === D ||
                  (typeof D == "object" &&
                    D !== null &&
                    D.$$typeof === vt &&
                    Zi(D) === I.type)
                ) {
                  (r(p, I.sibling),
                    (f = l(I, h.props)),
                    (f.ref = Br(p, I, h)),
                    (f.return = p),
                    (p = f));
                  break e;
                }
                r(p, I);
                break;
              } else t(p, I);
              I = I.sibling;
            }
            h.type === or
              ? ((f = Gt(h.props.children, p.mode, N, h.key)),
                (f.return = p),
                (p = f))
              : ((N = os(h.type, h.key, h.props, null, p.mode, N)),
                (N.ref = Br(p, f, h)),
                (N.return = p),
                (p = N));
          }
          return i(p);
        case ir:
          e: {
            for (I = h.key; f !== null; ) {
              if (f.key === I)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === h.containerInfo &&
                  f.stateNode.implementation === h.implementation
                ) {
                  (r(p, f.sibling),
                    (f = l(f, h.children || [])),
                    (f.return = p),
                    (p = f));
                  break e;
                } else {
                  r(p, f);
                  break;
                }
              else t(p, f);
              f = f.sibling;
            }
            ((f = bl(h, p.mode, N)), (f.return = p), (p = f));
          }
          return i(p);
        case vt:
          return ((I = h._init), k(p, f, I(h._payload), N));
      }
      if (Kr(h)) return y(p, f, h, N);
      if ($r(h)) return j(p, f, h, N);
      Qn(p, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        f !== null && f.tag === 6
          ? (r(p, f.sibling), (f = l(f, h)), (f.return = p), (p = f))
          : (r(p, f), (f = Nl(h, p.mode, N)), (f.return = p), (p = f)),
        i(p))
      : r(p, f);
  }
  return k;
}
var _r = Uc(!0),
  qc = Uc(!1),
  Ns = Lt(null),
  bs = null,
  hr = null,
  Ha = null;
function Ba() {
  Ha = hr = bs = null;
}
function Qa(e) {
  var t = Ns.current;
  (K(Ns), (e._currentValue = t));
}
function na(e, t, r) {
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
  ((bs = e),
    (Ha = hr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ce = !0), (e.firstContext = null)));
}
function He(e) {
  var t = e._currentValue;
  if (Ha !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), hr === null)) {
      if (bs === null) throw Error(T(308));
      ((hr = e), (bs.dependencies = { lanes: 0, firstContext: e }));
    } else hr = hr.next = e;
  return t;
}
var Ht = null;
function Wa(e) {
  Ht === null ? (Ht = [e]) : Ht.push(e);
}
function Vc(e, t, r, s) {
  var l = t.interleaved;
  return (
    l === null ? ((r.next = r), Wa(t)) : ((r.next = l.next), (l.next = r)),
    (t.interleaved = r),
    ft(e, s)
  );
}
function ft(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (r = e.alternate),
      r !== null && (r.childLanes |= t),
      (r = e),
      (e = e.return));
  return r.tag === 3 ? r.stateNode : null;
}
var wt = !1;
function Ga(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Hc(e, t) {
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
function _t(e, t, r) {
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
    l === null ? ((t.next = t), Wa(s)) : ((t.next = l.next), (l.next = t)),
    (s.interleaved = t),
    ft(e, r)
  );
}
function rs(e, t, r) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
  ) {
    var s = t.lanes;
    ((s &= e.pendingLanes), (r |= s), (t.lanes = r), Ra(e, r));
  }
}
function eo(e, t) {
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
        (a === null ? (l = a = i) : (a = a.next = i), (r = r.next));
      } while (r !== null);
      a === null ? (l = a = t) : (a = a.next = t);
    } else l = a = t;
    ((r = {
      baseState: s.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: a,
      shared: s.shared,
      effects: s.effects,
    }),
      (e.updateQueue = r));
    return;
  }
  ((e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t));
}
function Ss(e, t, r, s) {
  var l = e.updateQueue;
  wt = !1;
  var a = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    o = l.shared.pending;
  if (o !== null) {
    l.shared.pending = null;
    var c = o,
      u = c.next;
    ((c.next = null), i === null ? (a = u) : (i.next = u), (i = c));
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
    ((i = 0), (d = u = c = null), (o = a));
    do {
      var g = o.lane,
        x = o.eventTime;
      if ((s & g) === g) {
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
          var y = e,
            j = o;
          switch (((g = t), (x = r), j.tag)) {
            case 1:
              if (((y = j.payload), typeof y == "function")) {
                m = y.call(x, m, g);
                break e;
              }
              m = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = j.payload),
                (g = typeof y == "function" ? y.call(x, m, g) : y),
                g == null)
              )
                break e;
              m = te({}, m, g);
              break e;
            case 2:
              wt = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (g = l.effects),
          g === null ? (l.effects = [o]) : g.push(o));
      } else
        ((x = {
          eventTime: x,
          lane: g,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          d === null ? ((u = d = x), (c = m)) : (d = d.next = x),
          (i |= g));
      if (((o = o.next), o === null)) {
        if (((o = l.shared.pending), o === null)) break;
        ((g = o),
          (o = g.next),
          (g.next = null),
          (l.lastBaseUpdate = g),
          (l.shared.pending = null));
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
      do ((i |= l.lane), (l = l.next));
      while (l !== t);
    } else a === null && (l.shared.lanes = 0);
    ((er |= i), (e.lanes = i), (e.memoizedState = m));
  }
}
function to(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var s = e[t],
        l = s.callback;
      if (l !== null) {
        if (((s.callback = null), (s = r), typeof l != "function"))
          throw Error(T(191, l));
        l.call(s);
      }
    }
}
var Tn = {},
  nt = Lt(Tn),
  wn = Lt(Tn),
  jn = Lt(Tn);
function Bt(e) {
  if (e === Tn) throw Error(T(174));
  return e;
}
function Ka(e, t) {
  switch ((W(jn, t), W(wn, e), W(nt, Tn), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ll(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ll(t, e)));
  }
  (K(nt), W(nt, t));
}
function Ir() {
  (K(nt), K(wn), K(jn));
}
function Bc(e) {
  Bt(jn.current);
  var t = Bt(nt.current),
    r = Ll(t, e.type);
  t !== r && (W(wn, e), W(nt, r));
}
function Ya(e) {
  wn.current === e && (K(nt), K(wn));
}
var J = Lt(0);
function ks(e) {
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
var hl = [];
function Xa() {
  for (var e = 0; e < hl.length; e++)
    hl[e]._workInProgressVersionPrimary = null;
  hl.length = 0;
}
var ns = ht.ReactCurrentDispatcher,
  xl = ht.ReactCurrentBatchConfig,
  Zt = 0,
  ee = null,
  oe = null,
  ue = null,
  Cs = !1,
  nn = !1,
  Nn = 0,
  Jf = 0;
function pe() {
  throw Error(T(321));
}
function Ja(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!Je(e[r], t[r])) return !1;
  return !0;
}
function Za(e, t, r, s, l, a) {
  if (
    ((Zt = a),
    (ee = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ns.current = e === null || e.memoizedState === null ? rm : nm),
    (e = r(s, l)),
    nn)
  ) {
    a = 0;
    do {
      if (((nn = !1), (Nn = 0), 25 <= a)) throw Error(T(301));
      ((a += 1),
        (ue = oe = null),
        (t.updateQueue = null),
        (ns.current = sm),
        (e = r(s, l)));
    } while (nn);
  }
  if (
    ((ns.current = Es),
    (t = oe !== null && oe.next !== null),
    (Zt = 0),
    (ue = oe = ee = null),
    (Cs = !1),
    t)
  )
    throw Error(T(300));
  return e;
}
function ei() {
  var e = Nn !== 0;
  return ((Nn = 0), e);
}
function et() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (ue === null ? (ee.memoizedState = ue = e) : (ue = ue.next = e), ue);
}
function Be() {
  if (oe === null) {
    var e = ee.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = oe.next;
  var t = ue === null ? ee.memoizedState : ue.next;
  if (t !== null) ((ue = t), (oe = e));
  else {
    if (e === null) throw Error(T(310));
    ((oe = e),
      (e = {
        memoizedState: oe.memoizedState,
        baseState: oe.baseState,
        baseQueue: oe.baseQueue,
        queue: oe.queue,
        next: null,
      }),
      ue === null ? (ee.memoizedState = ue = e) : (ue = ue.next = e));
  }
  return ue;
}
function bn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function yl(e) {
  var t = Be(),
    r = t.queue;
  if (r === null) throw Error(T(311));
  r.lastRenderedReducer = e;
  var s = oe,
    l = s.baseQueue,
    a = r.pending;
  if (a !== null) {
    if (l !== null) {
      var i = l.next;
      ((l.next = a.next), (a.next = i));
    }
    ((s.baseQueue = l = a), (r.pending = null));
  }
  if (l !== null) {
    ((a = l.next), (s = s.baseState));
    var o = (i = null),
      c = null,
      u = a;
    do {
      var d = u.lane;
      if ((Zt & d) === d)
        (c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (s = u.hasEagerState ? u.eagerState : e(s, u.action)));
      else {
        var m = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (c === null ? ((o = c = m), (i = s)) : (c = c.next = m),
          (ee.lanes |= d),
          (er |= d));
      }
      u = u.next;
    } while (u !== null && u !== a);
    (c === null ? (i = s) : (c.next = o),
      Je(s, t.memoizedState) || (Ce = !0),
      (t.memoizedState = s),
      (t.baseState = i),
      (t.baseQueue = c),
      (r.lastRenderedState = s));
  }
  if (((e = r.interleaved), e !== null)) {
    l = e;
    do ((a = l.lane), (ee.lanes |= a), (er |= a), (l = l.next));
    while (l !== e);
  } else l === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function vl(e) {
  var t = Be(),
    r = t.queue;
  if (r === null) throw Error(T(311));
  r.lastRenderedReducer = e;
  var s = r.dispatch,
    l = r.pending,
    a = t.memoizedState;
  if (l !== null) {
    r.pending = null;
    var i = (l = l.next);
    do ((a = e(a, i.action)), (i = i.next));
    while (i !== l);
    (Je(a, t.memoizedState) || (Ce = !0),
      (t.memoizedState = a),
      t.baseQueue === null && (t.baseState = a),
      (r.lastRenderedState = a));
  }
  return [a, s];
}
function Qc() {}
function Wc(e, t) {
  var r = ee,
    s = Be(),
    l = t(),
    a = !Je(s.memoizedState, l);
  if (
    (a && ((s.memoizedState = l), (Ce = !0)),
    (s = s.queue),
    ti(Yc.bind(null, r, s, e), [e]),
    s.getSnapshot !== t || a || (ue !== null && ue.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      Sn(9, Kc.bind(null, r, s, l, t), void 0, null),
      de === null)
    )
      throw Error(T(349));
    Zt & 30 || Gc(r, t, l);
  }
  return l;
}
function Gc(e, t, r) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ee.updateQueue = t),
        (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e)));
}
function Kc(e, t, r, s) {
  ((t.value = r), (t.getSnapshot = s), Xc(t) && Jc(e));
}
function Yc(e, t, r) {
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
function ro(e) {
  var t = et();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: bn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = tm.bind(null, ee, e)),
    [t.memoizedState, e]
  );
}
function Sn(e, t, r, s) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: s, next: null }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ee.updateQueue = t),
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
function ss(e, t, r, s) {
  var l = et();
  ((ee.flags |= e),
    (l.memoizedState = Sn(1 | t, r, void 0, s === void 0 ? null : s)));
}
function $s(e, t, r, s) {
  var l = Be();
  s = s === void 0 ? null : s;
  var a = void 0;
  if (oe !== null) {
    var i = oe.memoizedState;
    if (((a = i.destroy), s !== null && Ja(s, i.deps))) {
      l.memoizedState = Sn(t, r, a, s);
      return;
    }
  }
  ((ee.flags |= e), (l.memoizedState = Sn(1 | t, r, a, s)));
}
function no(e, t) {
  return ss(8390656, 8, e, t);
}
function ti(e, t) {
  return $s(2048, 8, e, t);
}
function eu(e, t) {
  return $s(4, 2, e, t);
}
function tu(e, t) {
  return $s(4, 4, e, t);
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
    (r = r != null ? r.concat([e]) : null),
    $s(4, 4, ru.bind(null, t, e), r)
  );
}
function ri() {}
function su(e, t) {
  var r = Be();
  t = t === void 0 ? null : t;
  var s = r.memoizedState;
  return s !== null && t !== null && Ja(t, s[1])
    ? s[0]
    : ((r.memoizedState = [e, t]), e);
}
function lu(e, t) {
  var r = Be();
  t = t === void 0 ? null : t;
  var s = r.memoizedState;
  return s !== null && t !== null && Ja(t, s[1])
    ? s[0]
    : ((e = e()), (r.memoizedState = [e, t]), e);
}
function au(e, t, r) {
  return Zt & 21
    ? (Je(r, t) || ((r = dc()), (ee.lanes |= r), (er |= r), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ce = !0)), (e.memoizedState = r));
}
function Zf(e, t) {
  var r = Q;
  ((Q = r !== 0 && 4 > r ? r : 4), e(!0));
  var s = xl.transition;
  xl.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((Q = r), (xl.transition = s));
  }
}
function iu() {
  return Be().memoizedState;
}
function em(e, t, r) {
  var s = zt(e);
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
  else if (((r = Vc(e, t, r, s)), r !== null)) {
    var l = Ne();
    (Xe(r, e, s, l), uu(r, t, s));
  }
}
function tm(e, t, r) {
  var s = zt(e),
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
          (c === null
            ? ((l.next = l), Wa(t))
            : ((l.next = c.next), (c.next = l)),
            (t.interleaved = l));
          return;
        }
      } catch {
      } finally {
      }
    ((r = Vc(e, t, l, s)),
      r !== null && ((l = Ne()), Xe(r, e, s, l), uu(r, t, s)));
  }
}
function ou(e) {
  var t = e.alternate;
  return e === ee || (t !== null && t === ee);
}
function cu(e, t) {
  nn = Cs = !0;
  var r = e.pending;
  (r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
    (e.pending = t));
}
function uu(e, t, r) {
  if (r & 4194240) {
    var s = t.lanes;
    ((s &= e.pendingLanes), (r |= s), (t.lanes = r), Ra(e, r));
  }
}
var Es = {
    readContext: He,
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
  rm = {
    readContext: He,
    useCallback: function (e, t) {
      return ((et().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: He,
    useEffect: no,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        ss(4194308, 4, ru.bind(null, t, e), r)
      );
    },
    useLayoutEffect: function (e, t) {
      return ss(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ss(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = et();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (r.memoizedState = [e, t]),
        e
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
        (e = e.dispatch = em.bind(null, ee, e)),
        [s.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = et();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: ro,
    useDebugValue: ri,
    useDeferredValue: function (e) {
      return (et().memoizedState = e);
    },
    useTransition: function () {
      var e = ro(!1),
        t = e[0];
      return ((e = Zf.bind(null, e[1])), (et().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var s = ee,
        l = et();
      if (Y) {
        if (r === void 0) throw Error(T(407));
        r = r();
      } else {
        if (((r = t()), de === null)) throw Error(T(349));
        Zt & 30 || Gc(s, t, r);
      }
      l.memoizedState = r;
      var a = { value: r, getSnapshot: t };
      return (
        (l.queue = a),
        no(Yc.bind(null, s, a, e), [e]),
        (s.flags |= 2048),
        Sn(9, Kc.bind(null, s, a, r, t), void 0, null),
        r
      );
    },
    useId: function () {
      var e = et(),
        t = de.identifierPrefix;
      if (Y) {
        var r = it,
          s = at;
        ((r = (s & ~(1 << (32 - Ye(s) - 1))).toString(32) + r),
          (t = ":" + t + "R" + r),
          (r = Nn++),
          0 < r && (t += "H" + r.toString(32)),
          (t += ":"));
      } else ((r = Jf++), (t = ":" + t + "r" + r.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  nm = {
    readContext: He,
    useCallback: su,
    useContext: He,
    useEffect: ti,
    useImperativeHandle: nu,
    useInsertionEffect: eu,
    useLayoutEffect: tu,
    useMemo: lu,
    useReducer: yl,
    useRef: Zc,
    useState: function () {
      return yl(bn);
    },
    useDebugValue: ri,
    useDeferredValue: function (e) {
      var t = Be();
      return au(t, oe.memoizedState, e);
    },
    useTransition: function () {
      var e = yl(bn)[0],
        t = Be().memoizedState;
      return [e, t];
    },
    useMutableSource: Qc,
    useSyncExternalStore: Wc,
    useId: iu,
    unstable_isNewReconciler: !1,
  },
  sm = {
    readContext: He,
    useCallback: su,
    useContext: He,
    useEffect: ti,
    useImperativeHandle: nu,
    useInsertionEffect: eu,
    useLayoutEffect: tu,
    useMemo: lu,
    useReducer: vl,
    useRef: Zc,
    useState: function () {
      return vl(bn);
    },
    useDebugValue: ri,
    useDeferredValue: function (e) {
      var t = Be();
      return oe === null ? (t.memoizedState = e) : au(t, oe.memoizedState, e);
    },
    useTransition: function () {
      var e = vl(bn)[0],
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
    ((t = te({}, t)), (e = e.defaultProps));
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
function sa(e, t, r, s) {
  ((t = e.memoizedState),
    (r = r(s, t)),
    (r = r == null ? t : te({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r));
}
var Us = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? sr(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var s = Ne(),
      l = zt(e),
      a = ot(s, l);
    ((a.payload = t),
      r != null && (a.callback = r),
      (t = _t(e, a, l)),
      t !== null && (Xe(t, e, l, s), rs(t, e, l)));
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var s = Ne(),
      l = zt(e),
      a = ot(s, l);
    ((a.tag = 1),
      (a.payload = t),
      r != null && (a.callback = r),
      (t = _t(e, a, l)),
      t !== null && (Xe(t, e, l, s), rs(t, e, l)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = Ne(),
      s = zt(e),
      l = ot(r, s);
    ((l.tag = 2),
      t != null && (l.callback = t),
      (t = _t(e, l, s)),
      t !== null && (Xe(t, e, s, r), rs(t, e, s)));
  },
};
function so(e, t, r, s, l, a, i) {
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
    l = Pt,
    a = t.contextType;
  return (
    typeof a == "object" && a !== null
      ? (a = He(a))
      : ((l = De(t) ? Xt : ve.current),
        (s = t.contextTypes),
        (a = (s = s != null) ? Er(e, l) : Pt)),
    (t = new t(r, a)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Us),
    (e.stateNode = t),
    (t._reactInternals = e),
    s &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  );
}
function lo(e, t, r, s) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(r, s),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(r, s),
    t.state !== e && Us.enqueueReplaceState(t, t.state, null));
}
function la(e, t, r, s) {
  var l = e.stateNode;
  ((l.props = r), (l.state = e.memoizedState), (l.refs = {}), Ga(e));
  var a = t.contextType;
  (typeof a == "object" && a !== null
    ? (l.context = He(a))
    : ((a = De(t) ? Xt : ve.current), (l.context = Er(e, a))),
    (l.state = e.memoizedState),
    (a = t.getDerivedStateFromProps),
    typeof a == "function" && (sa(e, t, a, r), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Us.enqueueReplaceState(l, l.state, null),
      Ss(e, r, l, s),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308));
}
function zr(e, t) {
  try {
    var r = "",
      s = t;
    do ((r += zd(s)), (s = s.return));
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
function wl(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function aa(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var lm = typeof WeakMap == "function" ? WeakMap : Map;
function fu(e, t, r) {
  ((r = ot(-1, r)), (r.tag = 3), (r.payload = { element: null }));
  var s = t.value;
  return (
    (r.callback = function () {
      (_s || ((_s = !0), (ha = s)), aa(e, t));
    }),
    r
  );
}
function mu(e, t, r) {
  ((r = ot(-1, r)), (r.tag = 3));
  var s = e.type.getDerivedStateFromError;
  if (typeof s == "function") {
    var l = t.value;
    ((r.payload = function () {
      return s(l);
    }),
      (r.callback = function () {
        aa(e, t);
      }));
  }
  var a = e.stateNode;
  return (
    a !== null &&
      typeof a.componentDidCatch == "function" &&
      (r.callback = function () {
        (aa(e, t),
          typeof s != "function" &&
            (It === null ? (It = new Set([this])) : It.add(this)));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    r
  );
}
function ao(e, t, r) {
  var s = e.pingCache;
  if (s === null) {
    s = e.pingCache = new lm();
    var l = new Set();
    s.set(t, l);
  } else ((l = s.get(t)), l === void 0 && ((l = new Set()), s.set(t, l)));
  l.has(r) || (l.add(r), (e = vm.bind(null, e, t, r)), t.then(e, e));
}
function io(e) {
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
function oo(e, t, r, s, l) {
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
              : ((t = ot(-1, 1)), (t.tag = 2), _t(r, t, 1))),
          (r.lanes |= 1)),
      e);
}
var am = ht.ReactCurrentOwner,
  Ce = !1;
function je(e, t, r, s) {
  t.child = e === null ? qc(t, null, r, s) : _r(t, e.child, r, s);
}
function co(e, t, r, s, l) {
  r = r.render;
  var a = t.ref;
  return (
    br(t, l),
    (s = Za(e, t, r, s, a, l)),
    (r = ei()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        mt(e, t, l))
      : (Y && r && Ua(t), (t.flags |= 1), je(e, t, s, l), t.child)
  );
}
function uo(e, t, r, s, l) {
  if (e === null) {
    var a = r.type;
    return typeof a == "function" &&
      !ui(a) &&
      a.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), gu(e, t, a, s, l))
      : ((e = os(r.type, null, s, t, t.mode, l)),
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
    (e = Tt(a, s)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function gu(e, t, r, s, l) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (hn(a, s) && e.ref === t.ref)
      if (((Ce = !1), (t.pendingProps = s = a), (e.lanes & l) !== 0))
        e.flags & 131072 && (Ce = !0);
      else return ((t.lanes = e.lanes), mt(e, t, l));
  }
  return ia(e, t, r, s, l);
}
function pu(e, t, r) {
  var s = t.pendingProps,
    l = s.children,
    a = e !== null ? e.memoizedState : null;
  if (s.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        W(yr, ze),
        (ze |= r));
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
          W(yr, ze),
          (ze |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (s = a !== null ? a.baseLanes : r),
        W(yr, ze),
        (ze |= s));
    }
  else
    (a !== null ? ((s = a.baseLanes | r), (t.memoizedState = null)) : (s = r),
      W(yr, ze),
      (ze |= s));
  return (je(e, t, l, r), t.child);
}
function hu(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ia(e, t, r, s, l) {
  var a = De(r) ? Xt : ve.current;
  return (
    (a = Er(t, a)),
    br(t, l),
    (r = Za(e, t, r, s, a, l)),
    (s = ei()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        mt(e, t, l))
      : (Y && s && Ua(t), (t.flags |= 1), je(e, t, r, l), t.child)
  );
}
function fo(e, t, r, s, l) {
  if (De(r)) {
    var a = !0;
    vs(t);
  } else a = !1;
  if ((br(t, l), t.stateNode === null))
    (ls(e, t), du(t, r, s), la(t, r, s, l), (s = !0));
  else if (e === null) {
    var i = t.stateNode,
      o = t.memoizedProps;
    i.props = o;
    var c = i.context,
      u = r.contextType;
    typeof u == "object" && u !== null
      ? (u = He(u))
      : ((u = De(r) ? Xt : ve.current), (u = Er(t, u)));
    var d = r.getDerivedStateFromProps,
      m =
        typeof d == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    (m ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((o !== s || c !== u) && lo(t, i, s, u)),
      (wt = !1));
    var g = t.memoizedState;
    ((i.state = g),
      Ss(t, s, i, l),
      (c = t.memoizedState),
      o !== s || g !== c || Ee.current || wt
        ? (typeof d == "function" && (sa(t, r, d, s), (c = t.memoizedState)),
          (o = wt || so(t, r, o, s, g, c, u))
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
          (s = !1)));
  } else {
    ((i = t.stateNode),
      Hc(e, t),
      (o = t.memoizedProps),
      (u = t.type === t.elementType ? o : We(t.type, o)),
      (i.props = u),
      (m = t.pendingProps),
      (g = i.context),
      (c = r.contextType),
      typeof c == "object" && c !== null
        ? (c = He(c))
        : ((c = De(r) ? Xt : ve.current), (c = Er(t, c))));
    var x = r.getDerivedStateFromProps;
    ((d =
      typeof x == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((o !== m || g !== c) && lo(t, i, s, c)),
      (wt = !1),
      (g = t.memoizedState),
      (i.state = g),
      Ss(t, s, i, l));
    var y = t.memoizedState;
    o !== m || g !== y || Ee.current || wt
      ? (typeof x == "function" && (sa(t, r, x, s), (y = t.memoizedState)),
        (u = wt || so(t, r, u, s, g, y, c) || !1)
          ? (d ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(s, y, c),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(s, y, c)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (o === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (o === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = s),
            (t.memoizedState = y)),
        (i.props = s),
        (i.state = y),
        (i.context = c),
        (s = u))
      : (typeof i.componentDidUpdate != "function" ||
          (o === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (o === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 1024),
        (s = !1));
  }
  return oa(e, t, r, s, a, l);
}
function oa(e, t, r, s, l, a) {
  hu(e, t);
  var i = (t.flags & 128) !== 0;
  if (!s && !i) return (l && Yi(t, r, !1), mt(e, t, a));
  ((s = t.stateNode), (am.current = t));
  var o =
    i && typeof r.getDerivedStateFromError != "function" ? null : s.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = _r(t, e.child, null, a)), (t.child = _r(t, null, o, a)))
      : je(e, t, o, a),
    (t.memoizedState = s.state),
    l && Yi(t, r, !0),
    t.child
  );
}
function xu(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Ki(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ki(e, t.context, !1),
    Ka(e, t.containerInfo));
}
function mo(e, t, r, s, l) {
  return (Dr(), Va(l), (t.flags |= 256), je(e, t, r, s), t.child);
}
var ca = { dehydrated: null, treeContext: null, retryLane: 0 };
function ua(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function yu(e, t, r) {
  var s = t.pendingProps,
    l = J.current,
    a = !1,
    i = (t.flags & 128) !== 0,
    o;
  if (
    ((o = i) ||
      (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    o
      ? ((a = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    W(J, l & 1),
    e === null)
  )
    return (
      ra(t),
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
                : (a = Hs(i, s, 0, null)),
              (e = Gt(e, s, r, null)),
              (a.return = t),
              (e.return = t),
              (a.sibling = e),
              (t.child = a),
              (t.child.memoizedState = ua(r)),
              (t.memoizedState = ca),
              e)
            : ni(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((o = l.dehydrated), o !== null)))
    return im(e, t, i, s, o, l, r);
  if (a) {
    ((a = s.fallback), (i = t.mode), (l = e.child), (o = l.sibling));
    var c = { mode: "hidden", children: s.children };
    return (
      !(i & 1) && t.child !== l
        ? ((s = t.child),
          (s.childLanes = 0),
          (s.pendingProps = c),
          (t.deletions = null))
        : ((s = Tt(l, c)), (s.subtreeFlags = l.subtreeFlags & 14680064)),
      o !== null ? (a = Tt(o, a)) : ((a = Gt(a, i, r, null)), (a.flags |= 2)),
      (a.return = t),
      (s.return = t),
      (s.sibling = a),
      (t.child = s),
      (s = a),
      (a = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? ua(r)
          : {
              baseLanes: i.baseLanes | r,
              cachePool: null,
              transitions: i.transitions,
            }),
      (a.memoizedState = i),
      (a.childLanes = e.childLanes & ~r),
      (t.memoizedState = ca),
      s
    );
  }
  return (
    (a = e.child),
    (e = a.sibling),
    (s = Tt(a, { mode: "visible", children: s.children })),
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
function ni(e, t) {
  return (
    (t = Hs({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Wn(e, t, r, s) {
  return (
    s !== null && Va(s),
    _r(t, e.child, null, r),
    (e = ni(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function im(e, t, r, s, l, a, i) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (s = wl(Error(T(422)))), Wn(e, t, i, s))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((a = s.fallback),
          (l = t.mode),
          (s = Hs({ mode: "visible", children: s.children }, l, 0, null)),
          (a = Gt(a, l, i, null)),
          (a.flags |= 2),
          (s.return = t),
          (a.return = t),
          (s.sibling = a),
          (t.child = s),
          t.mode & 1 && _r(t, e.child, null, i),
          (t.child.memoizedState = ua(i)),
          (t.memoizedState = ca),
          a);
  if (!(t.mode & 1)) return Wn(e, t, i, null);
  if (l.data === "$!") {
    if (((s = l.nextSibling && l.nextSibling.dataset), s)) var o = s.dgst;
    return (
      (s = o),
      (a = Error(T(419))),
      (s = wl(a, s, void 0)),
      Wn(e, t, i, s)
    );
  }
  if (((o = (i & e.childLanes) !== 0), Ce || o)) {
    if (((s = de), s !== null)) {
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
      ((l = l & (s.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== a.retryLane &&
          ((a.retryLane = l), ft(e, l), Xe(s, e, l, -1)));
    }
    return (ci(), (s = wl(Error(T(421)))), Wn(e, t, i, s));
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = wm.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = a.treeContext),
      (Re = Dt(l.nextSibling)),
      (Pe = t),
      (Y = !0),
      (Ke = null),
      e !== null &&
        (($e[Ue++] = at),
        ($e[Ue++] = it),
        ($e[Ue++] = Jt),
        (at = e.id),
        (it = e.overflow),
        (Jt = t)),
      (t = ni(t, s.children)),
      (t.flags |= 4096),
      t);
}
function go(e, t, r) {
  e.lanes |= t;
  var s = e.alternate;
  (s !== null && (s.lanes |= t), na(e.return, t, r));
}
function jl(e, t, r, s, l) {
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
  if ((je(e, t, s.children, r), (s = J.current), s & 2))
    ((s = (s & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && go(e, r, t);
        else if (e.tag === 19) go(e, r, t);
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
    s &= 1;
  }
  if ((W(J, s), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (r = t.child, l = null; r !== null; )
          ((e = r.alternate),
            e !== null && ks(e) === null && (l = r),
            (r = r.sibling));
        ((r = l),
          r === null
            ? ((l = t.child), (t.child = null))
            : ((l = r.sibling), (r.sibling = null)),
          jl(t, !1, l, r, a));
        break;
      case "backwards":
        for (r = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ks(e) === null)) {
            t.child = l;
            break;
          }
          ((e = l.sibling), (l.sibling = r), (r = l), (l = e));
        }
        jl(t, !0, r, null, a);
        break;
      case "together":
        jl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ls(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function mt(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (er |= t.lanes),
    !(r & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(T(153));
  if (t.child !== null) {
    for (
      e = t.child, r = Tt(e, e.pendingProps), t.child = r, r.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (r = r.sibling = Tt(e, e.pendingProps)),
        (r.return = t));
    r.sibling = null;
  }
  return t.child;
}
function om(e, t, r) {
  switch (t.tag) {
    case 3:
      (xu(t), Dr());
      break;
    case 5:
      Bc(t);
      break;
    case 1:
      De(t.type) && vs(t);
      break;
    case 4:
      Ka(t, t.stateNode.containerInfo);
      break;
    case 10:
      var s = t.type._context,
        l = t.memoizedProps.value;
      (W(Ns, s._currentValue), (s._currentValue = l));
      break;
    case 13:
      if (((s = t.memoizedState), s !== null))
        return s.dehydrated !== null
          ? (W(J, J.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
            ? yu(e, t, r)
            : (W(J, J.current & 1),
              (e = mt(e, t, r)),
              e !== null ? e.sibling : null);
      W(J, J.current & 1);
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
        W(J, J.current),
        s)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), pu(e, t, r));
  }
  return mt(e, t, r);
}
var wu, da, ju, Nu;
wu = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      ((r.child.return = r), (r = r.child));
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    ((r.sibling.return = r.return), (r = r.sibling));
  }
};
da = function () {};
ju = function (e, t, r, s) {
  var l = e.memoizedProps;
  if (l !== s) {
    ((e = t.stateNode), Bt(nt.current));
    var a = null;
    switch (r) {
      case "input":
        ((l = Rl(e, l)), (s = Rl(e, s)), (a = []));
        break;
      case "select":
        ((l = te({}, l, { value: void 0 })),
          (s = te({}, s, { value: void 0 })),
          (a = []));
        break;
      case "textarea":
        ((l = Ol(e, l)), (s = Ol(e, s)), (a = []));
        break;
      default:
        typeof l.onClick != "function" &&
          typeof s.onClick == "function" &&
          (e.onclick = xs);
    }
    Al(r, s);
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
            (cn.hasOwnProperty(u)
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
          } else (r || (a || (a = []), a.push(u, r)), (r = c));
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
                (cn.hasOwnProperty(u)
                  ? (c != null && u === "onScroll" && G("scroll", e),
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
function Qr(e, t) {
  if (!Y)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; )
          (t.alternate !== null && (r = t), (t = t.sibling));
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = e.tail;
        for (var s = null; r !== null; )
          (r.alternate !== null && (s = r), (r = r.sibling));
        s === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (s.sibling = null);
    }
}
function he(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    s = 0;
  if (t)
    for (var l = e.child; l !== null; )
      ((r |= l.lanes | l.childLanes),
        (s |= l.subtreeFlags & 14680064),
        (s |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling));
  else
    for (l = e.child; l !== null; )
      ((r |= l.lanes | l.childLanes),
        (s |= l.subtreeFlags),
        (s |= l.flags),
        (l.return = e),
        (l = l.sibling));
  return ((e.subtreeFlags |= s), (e.childLanes = r), t);
}
function cm(e, t, r) {
  var s = t.pendingProps;
  switch ((qa(t), t.tag)) {
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
      return (De(t.type) && ys(), he(t), null);
    case 3:
      return (
        (s = t.stateNode),
        Ir(),
        K(Ee),
        K(ve),
        Xa(),
        s.pendingContext &&
          ((s.context = s.pendingContext), (s.pendingContext = null)),
        (e === null || e.child === null) &&
          (Bn(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ke !== null && (va(Ke), (Ke = null)))),
        da(e, t),
        he(t),
        null
      );
    case 5:
      Ya(t);
      var l = Bt(jn.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        (ju(e, t, r, s, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!s) {
          if (t.stateNode === null) throw Error(T(166));
          return (he(t), null);
        }
        if (((e = Bt(nt.current)), Bn(t))) {
          ((s = t.stateNode), (r = t.type));
          var a = t.memoizedProps;
          switch (((s[tt] = t), (s[vn] = a), (e = (t.mode & 1) !== 0), r)) {
            case "dialog":
              (G("cancel", s), G("close", s));
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", s);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Xr.length; l++) G(Xr[l], s);
              break;
            case "source":
              G("error", s);
              break;
            case "img":
            case "image":
            case "link":
              (G("error", s), G("load", s));
              break;
            case "details":
              G("toggle", s);
              break;
            case "input":
              (Ni(s, a), G("invalid", s));
              break;
            case "select":
              ((s._wrapperState = { wasMultiple: !!a.multiple }),
                G("invalid", s));
              break;
            case "textarea":
              (Si(s, a), G("invalid", s));
          }
          (Al(r, a), (l = null));
          for (var i in a)
            if (a.hasOwnProperty(i)) {
              var o = a[i];
              i === "children"
                ? typeof o == "string"
                  ? s.textContent !== o &&
                    (a.suppressHydrationWarning !== !0 &&
                      Hn(s.textContent, o, e),
                    (l = ["children", o]))
                  : typeof o == "number" &&
                    s.textContent !== "" + o &&
                    (a.suppressHydrationWarning !== !0 &&
                      Hn(s.textContent, o, e),
                    (l = ["children", "" + o]))
                : cn.hasOwnProperty(i) &&
                  o != null &&
                  i === "onScroll" &&
                  G("scroll", s);
            }
          switch (r) {
            case "input":
              (On(s), bi(s, a, !0));
              break;
            case "textarea":
              (On(s), ki(s));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (s.onclick = xs);
          }
          ((s = l), (t.updateQueue = s), s !== null && (t.flags |= 4));
        } else {
          ((i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Yo(r)),
            e === "http://www.w3.org/1999/xhtml"
              ? r === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
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
            (e[vn] = s),
            wu(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((i = Fl(r, s)), r)) {
              case "dialog":
                (G("cancel", e), G("close", e), (l = s));
                break;
              case "iframe":
              case "object":
              case "embed":
                (G("load", e), (l = s));
                break;
              case "video":
              case "audio":
                for (l = 0; l < Xr.length; l++) G(Xr[l], e);
                l = s;
                break;
              case "source":
                (G("error", e), (l = s));
                break;
              case "img":
              case "image":
              case "link":
                (G("error", e), G("load", e), (l = s));
                break;
              case "details":
                (G("toggle", e), (l = s));
                break;
              case "input":
                (Ni(e, s), (l = Rl(e, s)), G("invalid", e));
                break;
              case "option":
                l = s;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!s.multiple }),
                  (l = te({}, s, { value: void 0 })),
                  G("invalid", e));
                break;
              case "textarea":
                (Si(e, s), (l = Ol(e, s)), G("invalid", e));
                break;
              default:
                l = s;
            }
            (Al(r, l), (o = l));
            for (a in o)
              if (o.hasOwnProperty(a)) {
                var c = o[a];
                a === "style"
                  ? Zo(e, c)
                  : a === "dangerouslySetInnerHTML"
                    ? ((c = c ? c.__html : void 0), c != null && Xo(e, c))
                    : a === "children"
                      ? typeof c == "string"
                        ? (r !== "textarea" || c !== "") && un(e, c)
                        : typeof c == "number" && un(e, "" + c)
                      : a !== "suppressContentEditableWarning" &&
                        a !== "suppressHydrationWarning" &&
                        a !== "autoFocus" &&
                        (cn.hasOwnProperty(a)
                          ? c != null && a === "onScroll" && G("scroll", e)
                          : c != null && Ea(e, a, c, i));
              }
            switch (r) {
              case "input":
                (On(e), bi(e, s, !1));
                break;
              case "textarea":
                (On(e), ki(e));
                break;
              case "option":
                s.value != null && e.setAttribute("value", "" + Rt(s.value));
                break;
              case "select":
                ((e.multiple = !!s.multiple),
                  (a = s.value),
                  a != null
                    ? vr(e, !!s.multiple, a, !1)
                    : s.defaultValue != null &&
                      vr(e, !!s.multiple, s.defaultValue, !0));
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = xs);
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
      return (he(t), null);
    case 6:
      if (e && t.stateNode != null) Nu(e, t, e.memoizedProps, s);
      else {
        if (typeof s != "string" && t.stateNode === null) throw Error(T(166));
        if (((r = Bt(jn.current)), Bt(nt.current), Bn(t))) {
          if (
            ((s = t.stateNode),
            (r = t.memoizedProps),
            (s[tt] = t),
            (a = s.nodeValue !== r) && ((e = Pe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Hn(s.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Hn(s.nodeValue, r, (e.mode & 1) !== 0);
            }
          a && (t.flags |= 4);
        } else
          ((s = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(s)),
            (s[tt] = t),
            (t.stateNode = s));
      }
      return (he(t), null);
    case 13:
      if (
        (K(J),
        (s = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Y && Re !== null && t.mode & 1 && !(t.flags & 128))
          ($c(), Dr(), (t.flags |= 98560), (a = !1));
        else if (((a = Bn(t)), s !== null && s.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(T(318));
            if (
              ((a = t.memoizedState),
              (a = a !== null ? a.dehydrated : null),
              !a)
            )
              throw Error(T(317));
            a[tt] = t;
          } else
            (Dr(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (he(t), (a = !1));
        } else (Ke !== null && (va(Ke), (Ke = null)), (a = !0));
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((s = s !== null),
          s !== (e !== null && e.memoizedState !== null) &&
            s &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || J.current & 1 ? ce === 0 && (ce = 3) : ci())),
          t.updateQueue !== null && (t.flags |= 4),
          he(t),
          null);
    case 4:
      return (
        Ir(),
        da(e, t),
        e === null && xn(t.stateNode.containerInfo),
        he(t),
        null
      );
    case 10:
      return (Qa(t.type._context), he(t), null);
    case 17:
      return (De(t.type) && ys(), he(t), null);
    case 19:
      if ((K(J), (a = t.memoizedState), a === null)) return (he(t), null);
      if (((s = (t.flags & 128) !== 0), (i = a.rendering), i === null))
        if (s) Qr(a, !1);
        else {
          if (ce !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = ks(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Qr(a, !1),
                    s = i.updateQueue,
                    s !== null && ((t.updateQueue = s), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    s = r,
                    r = t.child;
                  r !== null;
                )
                  ((a = r),
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
                    (r = r.sibling));
                return (W(J, (J.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          a.tail !== null &&
            le() > Tr &&
            ((t.flags |= 128), (s = !0), Qr(a, !1), (t.lanes = 4194304));
        }
      else {
        if (!s)
          if (((e = ks(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (s = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              Qr(a, !0),
              a.tail === null && a.tailMode === "hidden" && !i.alternate && !Y)
            )
              return (he(t), null);
          } else
            2 * le() - a.renderingStartTime > Tr &&
              r !== 1073741824 &&
              ((t.flags |= 128), (s = !0), Qr(a, !1), (t.lanes = 4194304));
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
          (a.renderingStartTime = le()),
          (t.sibling = null),
          (r = J.current),
          W(J, s ? (r & 1) | 2 : r & 1),
          t)
        : (he(t), null);
    case 22:
    case 23:
      return (
        oi(),
        (s = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== s && (t.flags |= 8192),
        s && t.mode & 1
          ? ze & 1073741824 && (he(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : he(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(T(156, t.tag));
}
function um(e, t) {
  switch ((qa(t), t.tag)) {
    case 1:
      return (
        De(t.type) && ys(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ir(),
        K(Ee),
        K(ve),
        Xa(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Ya(t), null);
    case 13:
      if ((K(J), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(T(340));
        Dr();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (K(J), null);
    case 4:
      return (Ir(), null);
    case 10:
      return (Qa(t.type._context), null);
    case 22:
    case 23:
      return (oi(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Gn = !1,
  ye = !1,
  dm = typeof WeakSet == "function" ? WeakSet : Set,
  O = null;
function xr(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (s) {
        re(e, t, s);
      }
    else r.current = null;
}
function fa(e, t, r) {
  try {
    r();
  } catch (s) {
    re(e, t, s);
  }
}
var po = !1;
function fm(e, t) {
  if (((Kl = gs), (e = Ec()), $a(e))) {
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
            (r.nodeType, a.nodeType);
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
            g = null;
          t: for (;;) {
            for (
              var x;
              m !== r || (l !== 0 && m.nodeType !== 3) || (o = i + l),
                m !== a || (s !== 0 && m.nodeType !== 3) || (c = i + s),
                m.nodeType === 3 && (i += m.nodeValue.length),
                (x = m.firstChild) !== null;
            )
              ((g = m), (m = x));
            for (;;) {
              if (m === e) break t;
              if (
                (g === r && ++u === l && (o = i),
                g === a && ++d === s && (c = i),
                (x = m.nextSibling) !== null)
              )
                break;
              ((m = g), (g = m.parentNode));
            }
            m = x;
          }
          r = o === -1 || c === -1 ? null : { start: o, end: c };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (Yl = { focusedElem: e, selectionRange: r }, gs = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (O = e));
    else
      for (; O !== null; ) {
        t = O;
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
                  var j = y.memoizedProps,
                    k = y.memoizedState,
                    p = t.stateNode,
                    f = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? j : We(t.type, j),
                      k,
                    );
                  p.__reactInternalSnapshotBeforeUpdate = f;
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
                throw Error(T(163));
            }
        } catch (N) {
          re(t, t.return, N);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (O = e));
          break;
        }
        O = t.return;
      }
  return ((y = po), (po = !1), y);
}
function sn(e, t, r) {
  var s = t.updateQueue;
  if (((s = s !== null ? s.lastEffect : null), s !== null)) {
    var l = (s = s.next);
    do {
      if ((l.tag & e) === e) {
        var a = l.destroy;
        ((l.destroy = void 0), a !== void 0 && fa(t, r, a));
      }
      l = l.next;
    } while (l !== s);
  }
}
function qs(e, t) {
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
function ma(e) {
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
  (t !== null && ((e.alternate = null), bu(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[tt], delete t[vn], delete t[Zl], delete t[Gf], delete t[Kf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Su(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ho(e) {
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
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ga(e, t, r) {
  var s = e.tag;
  if (s === 5 || s === 6)
    ((e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8
            ? ((t = r.parentNode), t.insertBefore(e, r))
            : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = xs)));
  else if (s !== 4 && ((e = e.child), e !== null))
    for (ga(e, t, r), e = e.sibling; e !== null; )
      (ga(e, t, r), (e = e.sibling));
}
function pa(e, t, r) {
  var s = e.tag;
  if (s === 5 || s === 6)
    ((e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e));
  else if (s !== 4 && ((e = e.child), e !== null))
    for (pa(e, t, r), e = e.sibling; e !== null; )
      (pa(e, t, r), (e = e.sibling));
}
var fe = null,
  Ge = !1;
function xt(e, t, r) {
  for (r = r.child; r !== null; ) (ku(e, t, r), (r = r.sibling));
}
function ku(e, t, r) {
  if (rt && typeof rt.onCommitFiberUnmount == "function")
    try {
      rt.onCommitFiberUnmount(Ps, r);
    } catch {}
  switch (r.tag) {
    case 5:
      ye || xr(r, t);
    case 6:
      var s = fe,
        l = Ge;
      ((fe = null),
        xt(e, t, r),
        (fe = s),
        (Ge = l),
        fe !== null &&
          (Ge
            ? ((e = fe),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : fe.removeChild(r.stateNode)));
      break;
    case 18:
      fe !== null &&
        (Ge
          ? ((e = fe),
            (r = r.stateNode),
            e.nodeType === 8
              ? gl(e.parentNode, r)
              : e.nodeType === 1 && gl(e, r),
            gn(e))
          : gl(fe, r.stateNode));
      break;
    case 4:
      ((s = fe),
        (l = Ge),
        (fe = r.stateNode.containerInfo),
        (Ge = !0),
        xt(e, t, r),
        (fe = s),
        (Ge = l));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ye &&
        ((s = r.updateQueue), s !== null && ((s = s.lastEffect), s !== null))
      ) {
        l = s = s.next;
        do {
          var a = l,
            i = a.destroy;
          ((a = a.tag),
            i !== void 0 && (a & 2 || a & 4) && fa(r, t, i),
            (l = l.next));
        } while (l !== s);
      }
      xt(e, t, r);
      break;
    case 1:
      if (
        !ye &&
        (xr(r, t),
        (s = r.stateNode),
        typeof s.componentWillUnmount == "function")
      )
        try {
          ((s.props = r.memoizedProps),
            (s.state = r.memoizedState),
            s.componentWillUnmount());
        } catch (o) {
          re(r, t, o);
        }
      xt(e, t, r);
      break;
    case 21:
      xt(e, t, r);
      break;
    case 22:
      r.mode & 1
        ? ((ye = (s = ye) || r.memoizedState !== null), xt(e, t, r), (ye = s))
        : xt(e, t, r);
      break;
    default:
      xt(e, t, r);
  }
}
function xo(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    (r === null && (r = e.stateNode = new dm()),
      t.forEach(function (s) {
        var l = jm.bind(null, e, s);
        r.has(s) || (r.add(s), s.then(l, l));
      }));
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
              ((fe = o.stateNode), (Ge = !1));
              break e;
            case 3:
              ((fe = o.stateNode.containerInfo), (Ge = !0));
              break e;
            case 4:
              ((fe = o.stateNode.containerInfo), (Ge = !0));
              break e;
          }
          o = o.return;
        }
        if (fe === null) throw Error(T(160));
        (ku(a, i, l), (fe = null), (Ge = !1));
        var c = l.alternate;
        (c !== null && (c.return = null), (l.return = null));
      } catch (u) {
        re(l, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (Cu(t, e), (t = t.sibling));
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
          (sn(3, e, e.return), qs(3, e));
        } catch (j) {
          re(e, e.return, j);
        }
        try {
          sn(5, e, e.return);
        } catch (j) {
          re(e, e.return, j);
        }
      }
      break;
    case 1:
      (Qe(t, e), Ze(e), s & 512 && r !== null && xr(r, r.return));
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
          un(l, "");
        } catch (j) {
          re(e, e.return, j);
        }
      }
      if (s & 4 && ((l = e.stateNode), l != null)) {
        var a = e.memoizedProps,
          i = r !== null ? r.memoizedProps : a,
          o = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            (o === "input" && a.type === "radio" && a.name != null && Go(l, a),
              Fl(o, i));
            var u = Fl(o, a);
            for (i = 0; i < c.length; i += 2) {
              var d = c[i],
                m = c[i + 1];
              d === "style"
                ? Zo(l, m)
                : d === "dangerouslySetInnerHTML"
                  ? Xo(l, m)
                  : d === "children"
                    ? un(l, m)
                    : Ea(l, d, m, u);
            }
            switch (o) {
              case "input":
                Pl(l, a);
                break;
              case "textarea":
                Ko(l, a);
                break;
              case "select":
                var g = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!a.multiple;
                var x = a.value;
                x != null
                  ? vr(l, !!a.multiple, x, !1)
                  : g !== !!a.multiple &&
                    (a.defaultValue != null
                      ? vr(l, !!a.multiple, a.defaultValue, !0)
                      : vr(l, !!a.multiple, a.multiple ? [] : "", !1));
            }
            l[vn] = a;
          } catch (j) {
            re(e, e.return, j);
          }
      }
      break;
    case 6:
      if ((Qe(t, e), Ze(e), s & 4)) {
        if (e.stateNode === null) throw Error(T(162));
        ((l = e.stateNode), (a = e.memoizedProps));
        try {
          l.nodeValue = a;
        } catch (j) {
          re(e, e.return, j);
        }
      }
      break;
    case 3:
      if (
        (Qe(t, e), Ze(e), s & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          gn(t.containerInfo);
        } catch (j) {
          re(e, e.return, j);
        }
      break;
    case 4:
      (Qe(t, e), Ze(e));
      break;
    case 13:
      (Qe(t, e),
        Ze(e),
        (l = e.child),
        l.flags & 8192 &&
          ((a = l.memoizedState !== null),
          (l.stateNode.isHidden = a),
          !a ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (ai = le())),
        s & 4 && xo(e));
      break;
    case 22:
      if (
        ((d = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((ye = (u = ye) || d), Qe(t, e), (ye = u)) : Qe(t, e),
        Ze(e),
        s & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (O = e, d = e.child; d !== null; ) {
            for (m = O = d; O !== null; ) {
              switch (((g = O), (x = g.child), g.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  sn(4, g, g.return);
                  break;
                case 1:
                  xr(g, g.return);
                  var y = g.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    ((s = g), (r = g.return));
                    try {
                      ((t = s),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount());
                    } catch (j) {
                      re(s, r, j);
                    }
                  }
                  break;
                case 5:
                  xr(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    vo(m);
                    continue;
                  }
              }
              x !== null ? ((x.return = g), (O = x)) : vo(m);
            }
            d = d.sibling;
          }
        e: for (d = null, m = e; ; ) {
          if (m.tag === 5) {
            if (d === null) {
              d = m;
              try {
                ((l = m.stateNode),
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
                      (o.style.display = Jo("display", i))));
              } catch (j) {
                re(e, e.return, j);
              }
            }
          } else if (m.tag === 6) {
            if (d === null)
              try {
                m.stateNode.nodeValue = u ? "" : m.memoizedProps;
              } catch (j) {
                re(e, e.return, j);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            ((m.child.return = m), (m = m.child));
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            (d === m && (d = null), (m = m.return));
          }
          (d === m && (d = null),
            (m.sibling.return = m.return),
            (m = m.sibling));
        }
      }
      break;
    case 19:
      (Qe(t, e), Ze(e), s & 4 && xo(e));
      break;
    case 21:
      break;
    default:
      (Qe(t, e), Ze(e));
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
        throw Error(T(160));
      }
      switch (s.tag) {
        case 5:
          var l = s.stateNode;
          s.flags & 32 && (un(l, ""), (s.flags &= -33));
          var a = ho(e);
          pa(e, a, l);
          break;
        case 3:
        case 4:
          var i = s.stateNode.containerInfo,
            o = ho(e);
          ga(e, o, i);
          break;
        default:
          throw Error(T(161));
      }
    } catch (c) {
      re(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function mm(e, t, r) {
  ((O = e), Eu(e));
}
function Eu(e, t, r) {
  for (var s = (e.mode & 1) !== 0; O !== null; ) {
    var l = O,
      a = l.child;
    if (l.tag === 22 && s) {
      var i = l.memoizedState !== null || Gn;
      if (!i) {
        var o = l.alternate,
          c = (o !== null && o.memoizedState !== null) || ye;
        o = Gn;
        var u = ye;
        if (((Gn = i), (ye = c) && !u))
          for (O = l; O !== null; )
            ((i = O),
              (c = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? wo(l)
                : c !== null
                  ? ((c.return = i), (O = c))
                  : wo(l));
        for (; a !== null; ) ((O = a), Eu(a), (a = a.sibling));
        ((O = l), (Gn = o), (ye = u));
      }
      yo(e);
    } else
      l.subtreeFlags & 8772 && a !== null ? ((a.return = l), (O = a)) : yo(e);
  }
}
function yo(e) {
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
              ye || qs(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !ye)
                if (r === null) s.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? r.memoizedProps
                      : We(t.type, r.memoizedProps);
                  s.componentDidUpdate(
                    l,
                    r.memoizedState,
                    s.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var a = t.updateQueue;
              a !== null && to(t, a, s);
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
                to(t, i, r);
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
                    m !== null && gn(m);
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
              throw Error(T(163));
          }
        ye || (t.flags & 512 && ma(t));
      } catch (g) {
        re(t, t.return, g);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      ((r.return = t.return), (O = r));
      break;
    }
    O = t.return;
  }
}
function vo(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      ((r.return = t.return), (O = r));
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
            qs(4, t);
          } catch (c) {
            re(t, r, c);
          }
          break;
        case 1:
          var s = t.stateNode;
          if (typeof s.componentDidMount == "function") {
            var l = t.return;
            try {
              s.componentDidMount();
            } catch (c) {
              re(t, l, c);
            }
          }
          var a = t.return;
          try {
            ma(t);
          } catch (c) {
            re(t, a, c);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ma(t);
          } catch (c) {
            re(t, i, c);
          }
      }
    } catch (c) {
      re(t, t.return, c);
    }
    if (t === e) {
      O = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      ((o.return = t.return), (O = o));
      break;
    }
    O = t.return;
  }
}
var gm = Math.ceil,
  Ds = ht.ReactCurrentDispatcher,
  si = ht.ReactCurrentOwner,
  Ve = ht.ReactCurrentBatchConfig,
  V = 0,
  de = null,
  ie = null,
  me = 0,
  ze = 0,
  yr = Lt(0),
  ce = 0,
  kn = null,
  er = 0,
  Vs = 0,
  li = 0,
  ln = null,
  ke = null,
  ai = 0,
  Tr = 1 / 0,
  st = null,
  _s = !1,
  ha = null,
  It = null,
  Kn = !1,
  St = null,
  Is = 0,
  an = 0,
  xa = null,
  as = -1,
  is = 0;
function Ne() {
  return V & 6 ? le() : as !== -1 ? as : (as = le());
}
function zt(e) {
  return e.mode & 1
    ? V & 2 && me !== 0
      ? me & -me
      : Xf.transition !== null
        ? (is === 0 && (is = dc()), is)
        : ((e = Q),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : yc(e.type))),
          e)
    : 1;
}
function Xe(e, t, r, s) {
  if (50 < an) throw ((an = 0), (xa = null), Error(T(185)));
  (_n(e, r, s),
    (!(V & 2) || e !== de) &&
      (e === de && (!(V & 2) && (Vs |= r), ce === 4 && Nt(e, me)),
      _e(e, s),
      r === 1 && V === 0 && !(t.mode & 1) && ((Tr = le() + 500), Fs && At())));
}
function _e(e, t) {
  var r = e.callbackNode;
  Yd(e, t);
  var s = ms(e, e === de ? me : 0);
  if (s === 0)
    (r !== null && Di(r), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = s & -s), e.callbackPriority !== t)) {
    if ((r != null && Di(r), t === 1))
      (e.tag === 0 ? Yf(jo.bind(null, e)) : Lc(jo.bind(null, e)),
        Qf(function () {
          !(V & 6) && At();
        }),
        (r = null));
    else {
      switch (fc(s)) {
        case 1:
          r = Ta;
          break;
        case 4:
          r = cc;
          break;
        case 16:
          r = fs;
          break;
        case 536870912:
          r = uc;
          break;
        default:
          r = fs;
      }
      r = Mu(r, Du.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = r));
  }
}
function Du(e, t) {
  if (((as = -1), (is = 0), V & 6)) throw Error(T(327));
  var r = e.callbackNode;
  if (Sr() && e.callbackNode !== r) return null;
  var s = ms(e, e === de ? me : 0);
  if (s === 0) return null;
  if (s & 30 || s & e.expiredLanes || t) t = zs(e, s);
  else {
    t = s;
    var l = V;
    V |= 2;
    var a = Iu();
    (de !== e || me !== t) && ((st = null), (Tr = le() + 500), Wt(e, t));
    do
      try {
        xm();
        break;
      } catch (o) {
        _u(e, o);
      }
    while (!0);
    (Ba(),
      (Ds.current = a),
      (V = l),
      ie !== null ? (t = 0) : ((de = null), (me = 0), (t = ce)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Hl(e)), l !== 0 && ((s = l), (t = ya(e, l)))), t === 1)
    )
      throw ((r = kn), Wt(e, 0), Nt(e, s), _e(e, le()), r);
    if (t === 6) Nt(e, s);
    else {
      if (
        ((l = e.current.alternate),
        !(s & 30) &&
          !pm(l) &&
          ((t = zs(e, s)),
          t === 2 && ((a = Hl(e)), a !== 0 && ((s = a), (t = ya(e, a)))),
          t === 1))
      )
        throw ((r = kn), Wt(e, 0), Nt(e, s), _e(e, le()), r);
      switch (((e.finishedWork = l), (e.finishedLanes = s), t)) {
        case 0:
        case 1:
          throw Error(T(345));
        case 2:
          qt(e, ke, st);
          break;
        case 3:
          if (
            (Nt(e, s), (s & 130023424) === s && ((t = ai + 500 - le()), 10 < t))
          ) {
            if (ms(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & s) !== s)) {
              (Ne(), (e.pingedLanes |= e.suspendedLanes & l));
              break;
            }
            e.timeoutHandle = Jl(qt.bind(null, e, ke, st), t);
            break;
          }
          qt(e, ke, st);
          break;
        case 4:
          if ((Nt(e, s), (s & 4194240) === s)) break;
          for (t = e.eventTimes, l = -1; 0 < s; ) {
            var i = 31 - Ye(s);
            ((a = 1 << i), (i = t[i]), i > l && (l = i), (s &= ~a));
          }
          if (
            ((s = l),
            (s = le() - s),
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
                          : 1960 * gm(s / 1960)) - s),
            10 < s)
          ) {
            e.timeoutHandle = Jl(qt.bind(null, e, ke, st), s);
            break;
          }
          qt(e, ke, st);
          break;
        case 5:
          qt(e, ke, st);
          break;
        default:
          throw Error(T(329));
      }
    }
  }
  return (_e(e, le()), e.callbackNode === r ? Du.bind(null, e) : null);
}
function ya(e, t) {
  var r = ln;
  return (
    e.current.memoizedState.isDehydrated && (Wt(e, t).flags |= 256),
    (e = zs(e, t)),
    e !== 2 && ((t = ke), (ke = r), t !== null && va(t)),
    e
  );
}
function va(e) {
  ke === null ? (ke = e) : ke.push.apply(ke, e);
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
      ((r.return = t), (t = r));
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
function Nt(e, t) {
  for (
    t &= ~li,
      t &= ~Vs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var r = 31 - Ye(t),
      s = 1 << r;
    ((e[r] = -1), (t &= ~s));
  }
}
function jo(e) {
  if (V & 6) throw Error(T(327));
  Sr();
  var t = ms(e, 0);
  if (!(t & 1)) return (_e(e, le()), null);
  var r = zs(e, t);
  if (e.tag !== 0 && r === 2) {
    var s = Hl(e);
    s !== 0 && ((t = s), (r = ya(e, s)));
  }
  if (r === 1) throw ((r = kn), Wt(e, 0), Nt(e, t), _e(e, le()), r);
  if (r === 6) throw Error(T(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    qt(e, ke, st),
    _e(e, le()),
    null
  );
}
function ii(e, t) {
  var r = V;
  V |= 1;
  try {
    return e(t);
  } finally {
    ((V = r), V === 0 && ((Tr = le() + 500), Fs && At()));
  }
}
function tr(e) {
  St !== null && St.tag === 0 && !(V & 6) && Sr();
  var t = V;
  V |= 1;
  var r = Ve.transition,
    s = Q;
  try {
    if (((Ve.transition = null), (Q = 1), e)) return e();
  } finally {
    ((Q = s), (Ve.transition = r), (V = t), !(V & 6) && At());
  }
}
function oi() {
  ((ze = yr.current), K(yr));
}
function Wt(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), Bf(r)), ie !== null))
    for (r = ie.return; r !== null; ) {
      var s = r;
      switch ((qa(s), s.tag)) {
        case 1:
          ((s = s.type.childContextTypes), s != null && ys());
          break;
        case 3:
          (Ir(), K(Ee), K(ve), Xa());
          break;
        case 5:
          Ya(s);
          break;
        case 4:
          Ir();
          break;
        case 13:
          K(J);
          break;
        case 19:
          K(J);
          break;
        case 10:
          Qa(s.type._context);
          break;
        case 22:
        case 23:
          oi();
      }
      r = r.return;
    }
  if (
    ((de = e),
    (ie = e = Tt(e.current, null)),
    (me = ze = t),
    (ce = 0),
    (kn = null),
    (li = Vs = er = 0),
    (ke = ln = null),
    Ht !== null)
  ) {
    for (t = 0; t < Ht.length; t++)
      if (((r = Ht[t]), (s = r.interleaved), s !== null)) {
        r.interleaved = null;
        var l = s.next,
          a = r.pending;
        if (a !== null) {
          var i = a.next;
          ((a.next = l), (s.next = i));
        }
        r.pending = s;
      }
    Ht = null;
  }
  return e;
}
function _u(e, t) {
  do {
    var r = ie;
    try {
      if ((Ba(), (ns.current = Es), Cs)) {
        for (var s = ee.memoizedState; s !== null; ) {
          var l = s.queue;
          (l !== null && (l.pending = null), (s = s.next));
        }
        Cs = !1;
      }
      if (
        ((Zt = 0),
        (ue = oe = ee = null),
        (nn = !1),
        (Nn = 0),
        (si.current = null),
        r === null || r.return === null)
      ) {
        ((ce = 1), (kn = t), (ie = null));
        break;
      }
      e: {
        var a = e,
          i = r.return,
          o = r,
          c = t;
        if (
          ((t = me),
          (o.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var u = c,
            d = o,
            m = d.tag;
          if (!(d.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var g = d.alternate;
            g
              ? ((d.updateQueue = g.updateQueue),
                (d.memoizedState = g.memoizedState),
                (d.lanes = g.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var x = io(i);
          if (x !== null) {
            ((x.flags &= -257),
              oo(x, i, o, a, t),
              x.mode & 1 && ao(a, u, t),
              (t = x),
              (c = u));
            var y = t.updateQueue;
            if (y === null) {
              var j = new Set();
              (j.add(c), (t.updateQueue = j));
            } else y.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              (ao(a, u, t), ci());
              break e;
            }
            c = Error(T(426));
          }
        } else if (Y && o.mode & 1) {
          var k = io(i);
          if (k !== null) {
            (!(k.flags & 65536) && (k.flags |= 256),
              oo(k, i, o, a, t),
              Va(zr(c, o)));
            break e;
          }
        }
        ((a = c = zr(c, o)),
          ce !== 4 && (ce = 2),
          ln === null ? (ln = [a]) : ln.push(a),
          (a = i));
        do {
          switch (a.tag) {
            case 3:
              ((a.flags |= 65536), (t &= -t), (a.lanes |= t));
              var p = fu(a, c, t);
              eo(a, p);
              break e;
            case 1:
              o = c;
              var f = a.type,
                h = a.stateNode;
              if (
                !(a.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (It === null || !It.has(h))))
              ) {
                ((a.flags |= 65536), (t &= -t), (a.lanes |= t));
                var N = mu(a, o, t);
                eo(a, N);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      Tu(r);
    } catch (D) {
      ((t = D), ie === r && r !== null && (ie = r = r.return));
      continue;
    }
    break;
  } while (!0);
}
function Iu() {
  var e = Ds.current;
  return ((Ds.current = Es), e === null ? Es : e);
}
function ci() {
  ((ce === 0 || ce === 3 || ce === 2) && (ce = 4),
    de === null || (!(er & 268435455) && !(Vs & 268435455)) || Nt(de, me));
}
function zs(e, t) {
  var r = V;
  V |= 2;
  var s = Iu();
  (de !== e || me !== t) && ((st = null), Wt(e, t));
  do
    try {
      hm();
      break;
    } catch (l) {
      _u(e, l);
    }
  while (!0);
  if ((Ba(), (V = r), (Ds.current = s), ie !== null)) throw Error(T(261));
  return ((de = null), (me = 0), ce);
}
function hm() {
  for (; ie !== null; ) zu(ie);
}
function xm() {
  for (; ie !== null && !Ud(); ) zu(ie);
}
function zu(e) {
  var t = Pu(e.alternate, e, ze);
  ((e.memoizedProps = e.pendingProps),
    t === null ? Tu(e) : (ie = t),
    (si.current = null));
}
function Tu(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((r = um(r, t)), r !== null)) {
        ((r.flags &= 32767), (ie = r));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((ce = 6), (ie = null));
        return;
      }
    } else if (((r = cm(r, t, ze)), r !== null)) {
      ie = r;
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
function qt(e, t, r) {
  var s = Q,
    l = Ve.transition;
  try {
    ((Ve.transition = null), (Q = 1), ym(e, t, r, s));
  } finally {
    ((Ve.transition = l), (Q = s));
  }
  return null;
}
function ym(e, t, r, s) {
  do Sr();
  while (St !== null);
  if (V & 6) throw Error(T(327));
  r = e.finishedWork;
  var l = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(T(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var a = r.lanes | r.childLanes;
  if (
    (Xd(e, a),
    e === de && ((ie = de = null), (me = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      Kn ||
      ((Kn = !0),
      Mu(fs, function () {
        return (Sr(), null);
      })),
    (a = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || a)
  ) {
    ((a = Ve.transition), (Ve.transition = null));
    var i = Q;
    Q = 1;
    var o = V;
    ((V |= 4),
      (si.current = null),
      fm(e, r),
      Cu(r, e),
      Af(Yl),
      (gs = !!Kl),
      (Yl = Kl = null),
      (e.current = r),
      mm(r),
      qd(),
      (V = o),
      (Q = i),
      (Ve.transition = a));
  } else e.current = r;
  if (
    (Kn && ((Kn = !1), (St = e), (Is = l)),
    (a = e.pendingLanes),
    a === 0 && (It = null),
    Bd(r.stateNode),
    _e(e, le()),
    t !== null)
  )
    for (s = e.onRecoverableError, r = 0; r < t.length; r++)
      ((l = t[r]), s(l.value, { componentStack: l.stack, digest: l.digest }));
  if (_s) throw ((_s = !1), (e = ha), (ha = null), e);
  return (
    Is & 1 && e.tag !== 0 && Sr(),
    (a = e.pendingLanes),
    a & 1 ? (e === xa ? an++ : ((an = 0), (xa = e))) : (an = 0),
    At(),
    null
  );
}
function Sr() {
  if (St !== null) {
    var e = fc(Is),
      t = Ve.transition,
      r = Q;
    try {
      if (((Ve.transition = null), (Q = 16 > e ? 16 : e), St === null))
        var s = !1;
      else {
        if (((e = St), (St = null), (Is = 0), V & 6)) throw Error(T(331));
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
                      sn(8, d, a);
                  }
                  var m = d.child;
                  if (m !== null) ((m.return = d), (O = m));
                  else
                    for (; O !== null; ) {
                      d = O;
                      var g = d.sibling,
                        x = d.return;
                      if ((bu(d), d === u)) {
                        O = null;
                        break;
                      }
                      if (g !== null) {
                        ((g.return = x), (O = g));
                        break;
                      }
                      O = x;
                    }
                }
              }
              var y = a.alternate;
              if (y !== null) {
                var j = y.child;
                if (j !== null) {
                  y.child = null;
                  do {
                    var k = j.sibling;
                    ((j.sibling = null), (j = k));
                  } while (j !== null);
                }
              }
              O = a;
            }
          }
          if (a.subtreeFlags & 2064 && i !== null) ((i.return = a), (O = i));
          else
            e: for (; O !== null; ) {
              if (((a = O), a.flags & 2048))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    sn(9, a, a.return);
                }
              var p = a.sibling;
              if (p !== null) {
                ((p.return = a.return), (O = p));
                break e;
              }
              O = a.return;
            }
        }
        var f = e.current;
        for (O = f; O !== null; ) {
          i = O;
          var h = i.child;
          if (i.subtreeFlags & 2064 && h !== null) ((h.return = i), (O = h));
          else
            e: for (i = f; O !== null; ) {
              if (((o = O), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      qs(9, o);
                  }
                } catch (D) {
                  re(o, o.return, D);
                }
              if (o === i) {
                O = null;
                break e;
              }
              var N = o.sibling;
              if (N !== null) {
                ((N.return = o.return), (O = N));
                break e;
              }
              O = o.return;
            }
        }
        if (
          ((V = l), At(), rt && typeof rt.onPostCommitFiberRoot == "function")
        )
          try {
            rt.onPostCommitFiberRoot(Ps, e);
          } catch {}
        s = !0;
      }
      return s;
    } finally {
      ((Q = r), (Ve.transition = t));
    }
  }
  return !1;
}
function No(e, t, r) {
  ((t = zr(r, t)),
    (t = fu(e, t, 1)),
    (e = _t(e, t, 1)),
    (t = Ne()),
    e !== null && (_n(e, 1, t), _e(e, t)));
}
function re(e, t, r) {
  if (e.tag === 3) No(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        No(t, e, r);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof s.componentDidCatch == "function" &&
            (It === null || !It.has(s)))
        ) {
          ((e = zr(r, e)),
            (e = mu(t, e, 1)),
            (t = _t(t, e, 1)),
            (e = Ne()),
            t !== null && (_n(t, 1, e), _e(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function vm(e, t, r) {
  var s = e.pingCache;
  (s !== null && s.delete(t),
    (t = Ne()),
    (e.pingedLanes |= e.suspendedLanes & r),
    de === e &&
      (me & r) === r &&
      (ce === 4 || (ce === 3 && (me & 130023424) === me && 500 > le() - ai)
        ? Wt(e, 0)
        : (li |= r)),
    _e(e, t));
}
function Ru(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Fn), (Fn <<= 1), !(Fn & 130023424) && (Fn = 4194304))
      : (t = 1));
  var r = Ne();
  ((e = ft(e, t)), e !== null && (_n(e, t, r), _e(e, r)));
}
function wm(e) {
  var t = e.memoizedState,
    r = 0;
  (t !== null && (r = t.retryLane), Ru(e, r));
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
      throw Error(T(314));
  }
  (s !== null && s.delete(t), Ru(e, r));
}
var Pu;
Pu = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ee.current) Ce = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return ((Ce = !1), om(e, t, r));
      Ce = !!(e.flags & 131072);
    }
  else ((Ce = !1), Y && t.flags & 1048576 && Ac(t, js, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var s = t.type;
      (ls(e, t), (e = t.pendingProps));
      var l = Er(t, ve.current);
      (br(t, r), (l = Za(null, t, s, e, l, r)));
      var a = ei();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            De(s) ? ((a = !0), vs(t)) : (a = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ga(t),
            (l.updater = Us),
            (t.stateNode = l),
            (l._reactInternals = t),
            la(t, s, e, r),
            (t = oa(null, t, s, !0, a, r)))
          : ((t.tag = 0), Y && a && Ua(t), je(null, t, l, r), (t = t.child)),
        t
      );
    case 16:
      s = t.elementType;
      e: {
        switch (
          (ls(e, t),
          (e = t.pendingProps),
          (l = s._init),
          (s = l(s._payload)),
          (t.type = s),
          (l = t.tag = bm(s)),
          (e = We(s, e)),
          l)
        ) {
          case 0:
            t = ia(null, t, s, e, r);
            break e;
          case 1:
            t = fo(null, t, s, e, r);
            break e;
          case 11:
            t = co(null, t, s, e, r);
            break e;
          case 14:
            t = uo(null, t, s, We(s.type, e), r);
            break e;
        }
        throw Error(T(306, s, ""));
      }
      return t;
    case 0:
      return (
        (s = t.type),
        (l = t.pendingProps),
        (l = t.elementType === s ? l : We(s, l)),
        ia(e, t, s, l, r)
      );
    case 1:
      return (
        (s = t.type),
        (l = t.pendingProps),
        (l = t.elementType === s ? l : We(s, l)),
        fo(e, t, s, l, r)
      );
    case 3:
      e: {
        if ((xu(t), e === null)) throw Error(T(387));
        ((s = t.pendingProps),
          (a = t.memoizedState),
          (l = a.element),
          Hc(e, t),
          Ss(t, s, null, r));
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
            ((l = zr(Error(T(423)), t)), (t = mo(e, t, s, r, l)));
            break e;
          } else if (s !== l) {
            ((l = zr(Error(T(424)), t)), (t = mo(e, t, s, r, l)));
            break e;
          } else
            for (
              Re = Dt(t.stateNode.containerInfo.firstChild),
                Pe = t,
                Y = !0,
                Ke = null,
                r = qc(t, null, s, r),
                t.child = r;
              r;
            )
              ((r.flags = (r.flags & -3) | 4096), (r = r.sibling));
        else {
          if ((Dr(), s === l)) {
            t = mt(e, t, r);
            break e;
          }
          je(e, t, s, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Bc(t),
        e === null && ra(t),
        (s = t.type),
        (l = t.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Xl(s, l) ? (i = null) : a !== null && Xl(s, a) && (t.flags |= 32),
        hu(e, t),
        je(e, t, i, r),
        t.child
      );
    case 6:
      return (e === null && ra(t), null);
    case 13:
      return yu(e, t, r);
    case 4:
      return (
        Ka(t, t.stateNode.containerInfo),
        (s = t.pendingProps),
        e === null ? (t.child = _r(t, null, s, r)) : je(e, t, s, r),
        t.child
      );
    case 11:
      return (
        (s = t.type),
        (l = t.pendingProps),
        (l = t.elementType === s ? l : We(s, l)),
        co(e, t, s, l, r)
      );
    case 7:
      return (je(e, t, t.pendingProps, r), t.child);
    case 8:
      return (je(e, t, t.pendingProps.children, r), t.child);
    case 12:
      return (je(e, t, t.pendingProps.children, r), t.child);
    case 10:
      e: {
        if (
          ((s = t.type._context),
          (l = t.pendingProps),
          (a = t.memoizedProps),
          (i = l.value),
          W(Ns, s._currentValue),
          (s._currentValue = i),
          a !== null)
        )
          if (Je(a.value, i)) {
            if (a.children === l.children && !Ee.current) {
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
                      ((c = ot(-1, r & -r)), (c.tag = 2));
                      var u = a.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        (d === null
                          ? (c.next = c)
                          : ((c.next = d.next), (d.next = c)),
                          (u.pending = c));
                      }
                    }
                    ((a.lanes |= r),
                      (c = a.alternate),
                      c !== null && (c.lanes |= r),
                      na(a.return, r, t),
                      (o.lanes |= r));
                    break;
                  }
                  c = c.next;
                }
              } else if (a.tag === 10) i = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (((i = a.return), i === null)) throw Error(T(341));
                ((i.lanes |= r),
                  (o = i.alternate),
                  o !== null && (o.lanes |= r),
                  na(i, r, t),
                  (i = a.sibling));
              } else i = a.child;
              if (i !== null) i.return = a;
              else
                for (i = a; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((a = i.sibling), a !== null)) {
                    ((a.return = i.return), (i = a));
                    break;
                  }
                  i = i.return;
                }
              a = i;
            }
        (je(e, t, l.children, r), (t = t.child));
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
        je(e, t, s, r),
        t.child
      );
    case 14:
      return (
        (s = t.type),
        (l = We(s, t.pendingProps)),
        (l = We(s.type, l)),
        uo(e, t, s, l, r)
      );
    case 15:
      return gu(e, t, t.type, t.pendingProps, r);
    case 17:
      return (
        (s = t.type),
        (l = t.pendingProps),
        (l = t.elementType === s ? l : We(s, l)),
        ls(e, t),
        (t.tag = 1),
        De(s) ? ((e = !0), vs(t)) : (e = !1),
        br(t, r),
        du(t, s, l),
        la(t, s, l, r),
        oa(null, t, s, !0, e, r)
      );
    case 19:
      return vu(e, t, r);
    case 22:
      return pu(e, t, r);
  }
  throw Error(T(156, t.tag));
};
function Mu(e, t) {
  return oc(e, t);
}
function Nm(e, t, r, s) {
  ((this.tag = e),
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
    (this.alternate = null));
}
function qe(e, t, r, s) {
  return new Nm(e, t, r, s);
}
function ui(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function bm(e) {
  if (typeof e == "function") return ui(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === _a)) return 11;
    if (e === Ia) return 14;
  }
  return 2;
}
function Tt(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = qe(e.tag, t, e.key, e.mode)),
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
function os(e, t, r, s, l, a) {
  var i = 2;
  if (((s = e), typeof e == "function")) ui(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case or:
        return Gt(r.children, l, a, t);
      case Da:
        ((i = 8), (l |= 8));
        break;
      case _l:
        return (
          (e = qe(12, r, t, l | 2)),
          (e.elementType = _l),
          (e.lanes = a),
          e
        );
      case Il:
        return ((e = qe(13, r, t, l)), (e.elementType = Il), (e.lanes = a), e);
      case zl:
        return ((e = qe(19, r, t, l)), (e.elementType = zl), (e.lanes = a), e);
      case Bo:
        return Hs(r, l, a, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Vo:
              i = 10;
              break e;
            case Ho:
              i = 9;
              break e;
            case _a:
              i = 11;
              break e;
            case Ia:
              i = 14;
              break e;
            case vt:
              ((i = 16), (s = null));
              break e;
          }
        throw Error(T(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = qe(i, r, t, l)),
    (t.elementType = e),
    (t.type = s),
    (t.lanes = a),
    t
  );
}
function Gt(e, t, r, s) {
  return ((e = qe(7, e, s, t)), (e.lanes = r), e);
}
function Hs(e, t, r, s) {
  return (
    (e = qe(22, e, s, t)),
    (e.elementType = Bo),
    (e.lanes = r),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Nl(e, t, r) {
  return ((e = qe(6, e, null, t)), (e.lanes = r), e);
}
function bl(e, t, r) {
  return (
    (t = qe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Sm(e, t, r, s, l) {
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
    (this.eventTimes = nl(0)),
    (this.expirationTimes = nl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = nl(0)),
    (this.identifierPrefix = s),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null));
}
function di(e, t, r, s, l, a, i, o, c) {
  return (
    (e = new Sm(e, t, r, o, c)),
    t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
    (a = qe(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: s,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ga(a),
    e
  );
}
function km(e, t, r) {
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
  if (!e) return Pt;
  e = e._reactInternals;
  e: {
    if (sr(e) !== e || e.tag !== 1) throw Error(T(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (De(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(T(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (De(r)) return Oc(e, r, t);
  }
  return t;
}
function Lu(e, t, r, s, l, a, i, o, c) {
  return (
    (e = di(r, s, !0, e, l, a, i, o, c)),
    (e.context = Ou(null)),
    (r = e.current),
    (s = Ne()),
    (l = zt(r)),
    (a = ot(s, l)),
    (a.callback = t ?? null),
    _t(r, a, l),
    (e.current.lanes = l),
    _n(e, l, s),
    _e(e, s),
    e
  );
}
function Bs(e, t, r, s) {
  var l = t.current,
    a = Ne(),
    i = zt(l);
  return (
    (r = Ou(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = ot(a, i)),
    (t.payload = { element: e }),
    (s = s === void 0 ? null : s),
    s !== null && (t.callback = s),
    (e = _t(l, t, i)),
    e !== null && (Xe(e, l, i, a), rs(e, l, i)),
    i
  );
}
function Ts(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function bo(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function fi(e, t) {
  (bo(e, t), (e = e.alternate) && bo(e, t));
}
function Cm() {
  return null;
}
var Au =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function mi(e) {
  this._internalRoot = e;
}
Qs.prototype.render = mi.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(T(409));
  Bs(e, t, null, null);
};
Qs.prototype.unmount = mi.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (tr(function () {
      Bs(null, e, null, null);
    }),
      (t[dt] = null));
  }
};
function Qs(e) {
  this._internalRoot = e;
}
Qs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = pc();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < jt.length && t !== 0 && t < jt[r].priority; r++);
    (jt.splice(r, 0, e), r === 0 && xc(e));
  }
};
function gi(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ws(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function So() {}
function Em(e, t, r, s, l) {
  if (l) {
    if (typeof s == "function") {
      var a = s;
      s = function () {
        var u = Ts(i);
        a.call(u);
      };
    }
    var i = Lu(t, s, e, 0, null, !1, !1, "", So);
    return (
      (e._reactRootContainer = i),
      (e[dt] = i.current),
      xn(e.nodeType === 8 ? e.parentNode : e),
      tr(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof s == "function") {
    var o = s;
    s = function () {
      var u = Ts(c);
      o.call(u);
    };
  }
  var c = di(e, 0, !1, null, null, !1, !1, "", So);
  return (
    (e._reactRootContainer = c),
    (e[dt] = c.current),
    xn(e.nodeType === 8 ? e.parentNode : e),
    tr(function () {
      Bs(t, c, r, s);
    }),
    c
  );
}
function Gs(e, t, r, s, l) {
  var a = r._reactRootContainer;
  if (a) {
    var i = a;
    if (typeof l == "function") {
      var o = l;
      l = function () {
        var c = Ts(i);
        o.call(c);
      };
    }
    Bs(t, i, e, l);
  } else i = Em(r, t, e, l, s);
  return Ts(i);
}
mc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = Yr(t.pendingLanes);
        r !== 0 &&
          (Ra(t, r | 1), _e(t, le()), !(V & 6) && ((Tr = le() + 500), At()));
      }
      break;
    case 13:
      (tr(function () {
        var s = ft(e, 1);
        if (s !== null) {
          var l = Ne();
          Xe(s, e, 1, l);
        }
      }),
        fi(e, 1));
  }
};
Pa = function (e) {
  if (e.tag === 13) {
    var t = ft(e, 134217728);
    if (t !== null) {
      var r = Ne();
      Xe(t, e, 134217728, r);
    }
    fi(e, 134217728);
  }
};
gc = function (e) {
  if (e.tag === 13) {
    var t = zt(e),
      r = ft(e, t);
    if (r !== null) {
      var s = Ne();
      Xe(r, e, t, s);
    }
    fi(e, t);
  }
};
pc = function () {
  return Q;
};
hc = function (e, t) {
  var r = Q;
  try {
    return ((Q = e), t());
  } finally {
    Q = r;
  }
};
Ul = function (e, t, r) {
  switch (t) {
    case "input":
      if ((Pl(e, r), (t = r.name), r.type === "radio" && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < r.length;
          t++
        ) {
          var s = r[t];
          if (s !== e && s.form === e.form) {
            var l = As(s);
            if (!l) throw Error(T(90));
            (Wo(s), Pl(s, l));
          }
        }
      }
      break;
    case "textarea":
      Ko(e, r);
      break;
    case "select":
      ((t = r.value), t != null && vr(e, !!r.multiple, t, !1));
  }
};
rc = ii;
nc = tr;
var Dm = { usingClientEntryPoint: !1, Events: [zn, fr, As, ec, tc, ii] },
  Wr = {
    findFiberByHostInstance: Vt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  _m = {
    bundleType: Wr.bundleType,
    version: Wr.version,
    rendererPackageName: Wr.rendererPackageName,
    rendererConfig: Wr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ht.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = ac(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Wr.findFiberByHostInstance || Cm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Yn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Yn.isDisabled && Yn.supportsFiber)
    try {
      ((Ps = Yn.inject(_m)), (rt = Yn));
    } catch {}
}
Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dm;
Ae.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!gi(t)) throw Error(T(200));
  return km(e, t, null, r);
};
Ae.createRoot = function (e, t) {
  if (!gi(e)) throw Error(T(299));
  var r = !1,
    s = "",
    l = Au;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = di(e, 1, !1, null, null, r, !1, s, l)),
    (e[dt] = t.current),
    xn(e.nodeType === 8 ? e.parentNode : e),
    new mi(t)
  );
};
Ae.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(T(188))
      : ((e = Object.keys(e).join(",")), Error(T(268, e)));
  return ((e = ac(t)), (e = e === null ? null : e.stateNode), e);
};
Ae.flushSync = function (e) {
  return tr(e);
};
Ae.hydrate = function (e, t, r) {
  if (!Ws(t)) throw Error(T(200));
  return Gs(null, e, t, !0, r);
};
Ae.hydrateRoot = function (e, t, r) {
  if (!gi(e)) throw Error(T(405));
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
    xn(e),
    s)
  )
    for (e = 0; e < s.length; e++)
      ((r = s[e]),
        (l = r._getVersion),
        (l = l(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, l])
          : t.mutableSourceEagerHydrationData.push(r, l));
  return new Qs(t);
};
Ae.render = function (e, t, r) {
  if (!Ws(t)) throw Error(T(200));
  return Gs(null, e, t, !1, r);
};
Ae.unmountComponentAtNode = function (e) {
  if (!Ws(e)) throw Error(T(40));
  return e._reactRootContainer
    ? (tr(function () {
        Gs(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[dt] = null));
        });
      }),
      !0)
    : !1;
};
Ae.unstable_batchedUpdates = ii;
Ae.unstable_renderSubtreeIntoContainer = function (e, t, r, s) {
  if (!Ws(r)) throw Error(T(200));
  if (e == null || e._reactInternals === void 0) throw Error(T(38));
  return Gs(e, t, r, !1, s);
};
Ae.version = "18.3.1-next-f1338f8080-20240426";
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
(Fu(), (Fo.exports = Ae));
var Im = Fo.exports,
  $u,
  ko = Im;
(($u = ko.createRoot), ko.hydrateRoot);
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
        d,
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
            ...t.map(([m, g]) => w.createElement(m, g)),
            ...(Array.isArray(c) ? c : [c]),
          ],
        ),
    );
    return ((r.displayName = `${e}`), r);
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Oe = H("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wa = H("AlertTriangle", [
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
 */ const qu = H("BellOff", [
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
 */ const Vu = H("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hu = H("Building2", [
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
 */ const Bu = H("Building", [
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
 */ const Ks = H("Calendar", [
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
 */ const ar = H("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cn = H("ChevronDown", [
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
 */ const Rm = H("Globe", [
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
 */ const gt = H("History", [
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
 */ const Sl = H("Layers", [
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
 */ const Om = H("Maximize", [
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
 */ const on = H("Megaphone", [
  ["path", { d: "m3 11 18-5v12L3 14v-3z", key: "n962bs" }],
  ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6", key: "1yl0tm" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lm = H("Move", [
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
 */ const Ie = H("Package", [
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
 */ const pt = H("Plus", [
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
 */ const En = H("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rr = H("Settings", [
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
 */ const Am = H("SplitSquareHorizontal", [
  ["path", { d: "M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3", key: "lubmu8" }],
  ["path", { d: "M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3", key: "1ag34g" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rr = H("SquarePen", [
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
 */ const Yt = H("Truck", [
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
 */ const Ys = H("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Co = H("Volume2", [
  ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }],
  ["path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07", key: "ltjumu" }],
  ["path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14", key: "1kegas" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Le = H("X", [
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
let Qt = null;
const Gu = async () => {
    if (Qt) return Qt;
    try {
      const e = await fetch("../config.txt");
      if (!e.ok) throw new Error("Failed to load configuration");
      return ((Qt = await e.json()), Qt);
    } catch (e) {
      throw (console.error("Error loading config:", e), e);
    }
  },
  Um = (e) => {
    if (!Qt) throw new Error("Configuration not loaded");
    return `${Qt.domain}${e}`;
  },
  kl = () => Qt,
  ne = async (e, t = {}) => {
    let r;
    try {
      r = Um(e);
    } catch {
      throw new Error(
        "API configuration not loaded. Please refresh the page and try again.",
      );
    }
    const s = t.method || "GET";
    (console.group(`🌐 API Request: ${e}`),
      console.log(`URL: ${r}`),
      console.log(`Method: ${s}`),
      t.body && console.log("Request Payload:", t.body));
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
          console.error("Failed to parse response as JSON:", o),
          new Error("伺服器回應格式錯誤，請稍後再試")
        );
      }
      if ((console.log("Response:", i), console.groupEnd(), !l.ok))
        throw new Error(`伺服器錯誤 (${l.status})`);
      return i;
    } catch (l) {
      throw (
        console.error("API Error:", l),
        console.groupEnd(),
        l instanceof TypeError && l.message.includes("Failed to fetch")
          ? new Error("無法連接到伺服器，請檢查網路連線或稍後再試")
          : l instanceof Error
            ? l
            : new Error("發生未知錯誤，請稍後再試")
      );
    }
  },
  qm = async (e) =>
    await ne("/api/session/login", { method: "POST", body: { Data: e } }),
  Vm = (e) => (
    localStorage.setItem("user_session", JSON.stringify(e)),
    localStorage.setItem("loggedGUID", e.GUID || ""),
    localStorage.setItem("loggedEmployer", e.Employer || ""),
    localStorage.setItem("loggedID", e.ID || ""),
    localStorage.setItem("loggedName", e.Name || ""),
    localStorage.setItem("loggedTime", e.loginTime || ""),
    localStorage.setItem("loggedLevel", e.level || ""),
    e
  ),
  Hm = () => {
    (localStorage.removeItem("user_session"),
      localStorage.removeItem("loggedGUID"),
      localStorage.removeItem("loggedEmployer"),
      localStorage.removeItem("loggedID"),
      localStorage.removeItem("loggedName"),
      localStorage.removeItem("loggedPassword"),
      localStorage.removeItem("loggedTime"),
      localStorage.removeItem("loggedLevel"),
      window.location.reload());
  },
  Rn = () => {
    const e = localStorage.getItem("user_session");
    if (!e) return null;
    try {
      const t = JSON.parse(e);
      return !t.GUID || !t.ID || !t.Name ? null : t;
    } catch (t) {
      return (console.error("Failed to parse user session:", t), null);
    }
  },
  Bm = () => !!Rn(),
  Cl = () => {
    const { t: e } = Ar();
    return n.jsxs("button", {
      onClick: Hm,
      className:
        "inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      children: [n.jsx(Mm, { className: "h-4 w-4 mr-2" }), e("logout")],
    });
  },
  El = () => {
    const { language: e, toggleLanguage: t } = Ar();
    return n.jsxs("button", {
      onClick: t,
      className:
        "inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      children: [
        n.jsx(Rm, { className: "h-4 w-4 mr-2" }),
        e === "zh" ? "繁體中文" : "English",
      ],
    });
  },
  Qm = async () =>
    await ne("/api/controlpanel/get_by_startendtime_bbs", {
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
    await ne("/api/controlpanel/add", { method: "POST", body: { Data: e } });
  },
  Km = async () =>
    await ne("/api/controlpanel/get_bbs", { method: "POST", body: {} }),
  Ym = async (e) => {
    await ne("/api/controlpanel/update", { method: "POST", body: { Data: e } });
  },
  Xm = async (e) => {
    await ne("/api/controlpanel/delete", {
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
      return (console.error("Error parsing API date:", e, t), null);
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
  Xs = async () =>
    await ne("/api/med_page/get_med_cloud", { method: "POST", body: {} }),
  Mt = (e) => {
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
    return await ne("/api/drugStotreDistribution/get_by_addedTime", {
      method: "POST",
      body: { ValueAry: [Mt(t), Mt(r)] },
    });
  },
  t0 = async () => {
    const e = new Date(),
      t = new Date(e.getFullYear(), e.getMonth() - 1, e.getDate(), 0, 0, 0),
      r = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59);
    return await ne("/api/inspection/content_get_by_addTime", {
      method: "POST",
      body: { ValueAry: [Mt(t), Mt(r)] },
    });
  },
  r0 = async () => {
    const e = new Date(),
      t = new Date(e.getFullYear(), e.getMonth() - 1, e.getDate(), 0, 0, 0),
      r = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59);
    return await ne("/api/inspection/content_get_by_addTime", {
      method: "POST",
      body: { ValueAry: [Mt(t), Mt(r)] },
    });
  },
  n0 = async () =>
    await ne("/api/controlpanel/get_by_startendtime_MedNotice", {
      method: "POST",
      body: {},
    }),
  s0 = async () =>
    await ne("/api/controlpanel/get_MedNotice", { method: "POST", body: {} }),
  l0 = async (e) =>
    await ne("/api/controlpanel/add", { method: "POST", body: { Data: e } }),
  a0 = async (e) =>
    await ne("/api/controlpanel/update", { method: "POST", body: { Data: e } }),
  i0 = async (e) =>
    await ne("/api/controlpanel/delete", {
      method: "POST",
      body: { Data: { GUID: e } },
    }),
  o0 = async () =>
    await ne("/api/controlpanel/get_by_startendtime_out_of_stock", {
      method: "POST",
      body: {},
    }),
  c0 = async () =>
    await ne("/api/controlpanel/get_out_of_stock", {
      method: "POST",
      body: {},
    }),
  u0 = async (e) =>
    await ne("/api/controlpanel/add", { method: "POST", body: { Data: e } }),
  d0 = async (e) =>
    await ne("/api/controlpanel/update", { method: "POST", body: { Data: e } }),
  f0 = async (e) =>
    await ne("/api/controlpanel/delete", {
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
  g0 = (e) =>
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
  p0 = (e) => {
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
  h0 = (e) =>
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
    await ne("/api/stock/get_stock_all_server", { method: "POST", body: {} }),
  y0 = (e) => {
    const t = new Map();
    e.forEach((s) => {
      const l = s.code || "";
      (t.has(l) || t.set(l, []), t.get(l).push(s));
    });
    const r = [];
    return (
      t.forEach((s, l) => {
        const a = s[0],
          i = [],
          o = [],
          c = [],
          u = new Map();
        s.forEach((g) => {
          const x = g.serverName || "未知伺服器",
            y = g.qty || [],
            j = g.lot || [],
            k = g.expiry_date || [];
          (i.push(...j), o.push(...k), c.push(...y));
          const p = y.reduce((h, N) => h + (Number(N) || 0), 0),
            f = u.get(x) || 0;
          u.set(x, f + p);
        });
        const d = c.reduce((g, x) => g + (Number(x) || 0), 0),
          m = Array.from(u.entries()).map(([g, x]) => ({
            serverName: g,
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
    return await ne("/api/materialRequisition/get_by_requestTime", {
      method: "POST",
      body: { ValueAry: [Mt(t), Mt(r)] },
    });
  },
  w0 = (e) =>
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
  j0 = (e) =>
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
        (console.error("Error parsing created_time:", t.created_time, u),
          (i = new Date().toISOString()));
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
        ((s = new Date(d)),
          isNaN(s.getTime()) &&
            (console.warn("Invalid date format:", t.created_time),
            (s = new Date())));
      } catch (d) {
        (console.error("Error parsing created_time:", t.created_time, d),
          (s = new Date()));
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
        ((t = Wm(d.Data)),
          console.log(
            "[Dashboard] Bulletins loaded successfully:",
            t.length,
            "items",
          ));
      else throw new Error(`API returned code ${d.Code}`);
    } catch (d) {
      (console.error("[Dashboard] Error fetching bulletin data:", d),
        (e.bulletins = { hasError: !0, message: "公告欄資料載入失敗" }),
        (t = []));
    }
    let r = [];
    try {
      const d = await n0();
      if (d.Code === 200 && d.Data)
        ((r = j0(d.Data)),
          console.log(
            "[Dashboard] Drug replacements loaded successfully:",
            r.length,
            "items",
          ));
      else throw new Error(`API returned code ${d.Code}`);
    } catch (d) {
      (console.error("[Dashboard] Error fetching drug replacement data:", d),
        (e.drugReplacements = {
          hasError: !0,
          message: "藥品替換資料載入失敗",
        }),
        (r = []));
    }
    let s = [];
    try {
      const d = await o0();
      if (d.Code === 200 && d.Data)
        ((s = N0(d.Data)),
          console.log(
            "[Dashboard] Out of stock items loaded successfully:",
            s.length,
            "items",
          ));
      else throw new Error(`API returned code ${d.Code}`);
    } catch (d) {
      (console.error("[Dashboard] Error fetching out of stock data:", d),
        (e.outOfStock = { hasError: !0, message: "缺貨清單資料載入失敗" }),
        (s = []));
    }
    let l = [];
    try {
      const d = await e0();
      if (d.Code === -200 && d.Result && d.Result.includes("查無此時間區域"))
        (console.log(
          "[Dashboard] No restock data in time range, treating as success with empty array",
        ),
          (l = []));
      else if (d.Code === 200 && d.Data)
        ((l = m0(d.Data)),
          console.log(
            "[Dashboard] Restock tasks loaded successfully:",
            l.length,
            "items",
          ));
      else throw new Error(`API returned code ${d.Code}`);
    } catch (d) {
      (d instanceof Error ? d.message : String(d)).includes("查無此時間區域")
        ? (console.log(
            "[Dashboard] No restock data in time range (from error), treating as success",
          ),
          (l = []))
        : (console.error("[Dashboard] Error fetching restock tasks data:", d),
          e.tasks || (e.tasks = { hasError: !0, message: "" }),
          (e.tasks.message =
            (e.tasks.message ? e.tasks.message + "、" : "") +
            "撥補任務載入失敗"),
          (e.tasks.hasError = !0),
          (l = []));
    }
    let a = [],
      i = [];
    try {
      const d = await r0();
      if (d.Code === -200 && d.Result && d.Result.includes("查無此時間區域"))
        (console.log(
          "[Dashboard] No receiving/putaway data in time range, treating as success with empty array",
        ),
          (a = []),
          (i = []));
      else if (d.Code === 200 && d.Data)
        ((a = g0(d.Data)),
          (i = p0(d.Data)),
          console.log(
            "[Dashboard] Receiving tasks loaded successfully:",
            a.length,
            "items",
          ),
          console.log(
            "[Dashboard] Put away tasks loaded successfully:",
            i.length,
            "items",
          ));
      else throw new Error(`API returned code ${d.Code}`);
    } catch (d) {
      (d instanceof Error ? d.message : String(d)).includes("查無此時間區域")
        ? (console.log(
            "[Dashboard] No receiving/putaway data in time range (from error), treating as success",
          ),
          (a = []),
          (i = []))
        : (console.error(
            "[Dashboard] Error fetching receiving and putaway tasks data:",
            d,
          ),
          e.tasks || (e.tasks = { hasError: !0, message: "" }),
          (e.tasks.message =
            (e.tasks.message ? e.tasks.message + "、" : "") +
            "驗收與歸貨任務載入失敗"),
          (e.tasks.hasError = !0),
          (a = []),
          (i = []));
    }
    let o = [];
    try {
      const d = await v0();
      if (d.Code === -200 && d.Result && d.Result.includes("查無此時間區域"))
        (console.log(
          "[Dashboard] No internal requests data in time range, treating as success with empty array",
        ),
          (o = []));
      else if (d.Code === 200 && d.Data)
        ((o = w0(d.Data)),
          console.log(
            "[Dashboard] Internal requests loaded successfully:",
            o.length,
            "items",
          ));
      else throw new Error(`API returned code ${d.Code}`);
    } catch (d) {
      (d instanceof Error ? d.message : String(d)).includes("查無此時間區域")
        ? (console.log(
            "[Dashboard] No internal requests data in time range (from error), treating as success",
          ),
          (o = []))
        : (console.error(
            "[Dashboard] Error fetching internal requests data:",
            d,
          ),
          (e.internalRequests = {
            hasError: !0,
            message: "內部申請資料載入失敗",
          }),
          (o = []));
    }
    let c = [];
    try {
      const d = await t0();
      if (
        (console.log("===============", d.Result.includes("查無此時間區域")),
        d.Code == -200 && d.Result && d.Result.includes("查無此時間區域"))
      )
        (console.log(
          "[Dashboard] No incoming drugs data in time range, treating as success with empty array",
        ),
          (c = []));
      else if (d.Code == 200 && d.Data)
        ((c = h0(d.Data)),
          console.log(
            "[Dashboard] Incoming drugs loaded successfully:",
            c.length,
            "items",
          ));
      else throw new Error(`API returned code ${d.Code}`);
    } catch (d) {
      (d instanceof Error ? d.message : String(d)).includes("查無此時間區域")
        ? (console.log(
            "[Dashboard] No incoming drugs data in time range (from error), treating as success",
          ),
          (c = []))
        : (console.error("[Dashboard] Error fetching incoming drugs data:", d),
          (e.incomingDrugs = {
            hasError: !0,
            message: "未到貨監控資料載入失敗",
          }),
          (c = []));
    }
    let u = [];
    try {
      const d = await x0();
      if (d.Code === -200 && d.Result && d.Result.includes("查無此時間區域"))
        (console.log(
          "[Dashboard] No inventory data in time range, treating as success with empty array",
        ),
          (u = []));
      else if (d.Code === 200 && d.Data)
        ((u = y0(d.Data)),
          console.log(
            "[Dashboard] Inventory highlights loaded successfully:",
            u.length,
            "items",
          ));
      else throw new Error(`API returned code ${d.Code}`);
    } catch (d) {
      (d instanceof Error ? d.message : String(d)).includes("查無此時間區域")
        ? (console.log(
            "[Dashboard] No inventory data in time range (from error), treating as success",
          ),
          (u = []))
        : (console.error(
            "[Dashboard] Error fetching stock all server data:",
            d,
          ),
          (e.inventory = { hasError: !0, message: "庫存重點資料載入失敗" }),
          (u = []));
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
  yt = {
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
        if (I0(t)) return t;
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
        if (z0(t)) return t;
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
  I0 = (e) => {
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
    for (const r of t) if (typeof e[r] != "boolean") return !1;
    return !0;
  },
  Ft = (e, t) => {
    const r = e.master_row + 1,
      s = e.master_col + 1,
      l = r + t.row,
      a = s + t.col;
    return `${r} / ${s} / ${l} / ${a}`;
  },
  $t = ({
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
      [g, x] = w.useState(null),
      y = w.useRef(null),
      j = w.useCallback(
        (h) => {
          (h.preventDefault(),
            h.stopPropagation(),
            o(!0),
            m({
              x: h.clientX,
              y: h.clientY,
              startRow: r.position.master_row,
              startCol: r.position.master_col,
            }));
        },
        [r.position],
      ),
      k = w.useCallback(
        (h) => {
          (h.preventDefault(),
            h.stopPropagation(),
            u(!0),
            x({
              x: h.clientX,
              y: h.clientY,
              startRow: r.row,
              startCol: r.col,
            }));
        },
        [r.row, r.col],
      ),
      p = w.useCallback(
        (h) => {
          if (i && d && y.current) {
            const N = h.clientX - d.x,
              D = h.clientY - d.y,
              I = y.current.parentElement;
            if (I) {
              const z = I.getBoundingClientRect(),
                _ = (z.width - 7 * 16) / 8,
                v = (z.height - 5 * 16) / 6,
                E = Math.round(N / (_ + 16)),
                L = Math.round(D / (v + 16)),
                $ = Math.max(0, Math.min(8 - r.col, d.startCol + E)),
                B = Math.max(0, Math.min(6 - r.row, d.startRow + L));
              (B !== r.position.master_row || $ !== r.position.master_col) &&
                s(t, { master_row: B, master_col: $ });
            }
          }
          if (c && g && y.current) {
            const N = h.clientX - g.x,
              D = h.clientY - g.y,
              I = y.current.parentElement;
            if (I) {
              const z = I.getBoundingClientRect(),
                _ = (z.width - 7 * 16) / 8,
                v = (z.height - 5 * 16) / 6,
                E = Math.round(N / (_ + 16)),
                L = Math.round(D / (v + 16)),
                $ = Math.max(
                  1,
                  Math.min(8 - r.position.master_col, g.startCol + E),
                ),
                B = Math.max(
                  1,
                  Math.min(6 - r.position.master_row, g.startRow + L),
                );
              (B !== r.row || $ !== r.col) && l(t, { row: B, col: $ });
            }
          }
        },
        [i, c, d, g, r, s, l, t],
      ),
      f = w.useCallback(() => {
        (o(!1), u(!1), m(null), x(null));
      }, []);
    return (
      Te.useEffect(() => {
        if (i || c)
          return (
            document.addEventListener("mousemove", p),
            document.addEventListener("mouseup", f),
            (document.body.style.cursor = i ? "grabbing" : "nw-resize"),
            (document.body.style.userSelect = "none"),
            (document.body.style.pointerEvents = "none"),
            y.current && (y.current.style.pointerEvents = "auto"),
            () => {
              (document.removeEventListener("mousemove", p),
                document.removeEventListener("mouseup", f),
                (document.body.style.cursor = "auto"),
                (document.body.style.userSelect = "auto"),
                (document.body.style.pointerEvents = "auto"));
            }
          );
      }, [i, c, p, f]),
      n.jsxs("div", {
        ref: y,
        className: `relative bg-white rounded-xl shadow-lg border border-gray-200 h-full flex flex-col min-h-0 max-h-full overflow-hidden transition-all duration-200 ${i || c ? "z-50 shadow-2xl scale-105" : "z-10"}`,
        style: { gridArea: a },
        children: [
          n.jsxs("div", {
            className: `absolute top-0 left-0 right-0 h-12 cursor-move z-20 flex items-center justify-center transition-opacity bg-blue-500 bg-opacity-20 rounded-t-xl ${i ? "opacity-100" : "opacity-0 hover:opacity-100"}`,
            onMouseDown: j,
            children: [
              n.jsx(Lm, { size: 20, className: "text-blue-600" }),
              n.jsx("span", {
                className: `ml-2 text-blue-600 font-medium ${yt.smallLabel}`,
                children: "拖拽移動",
              }),
            ],
          }),
          n.jsx("div", {
            className: `absolute bottom-2 right-2 w-6 h-6 cursor-nw-resize z-20 flex items-center justify-center transition-opacity bg-gray-500 bg-opacity-20 rounded ${c ? "opacity-100" : "opacity-0 hover:opacity-100"}`,
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
  Z = ({ size: e = "medium", className: t = "" }) => {
    const r = {
      small: "w-4 h-4 border-[2px]",
      medium: "w-8 h-8 border-[3px]",
      large: "w-12 h-12 border-[4px]",
    };
    return n.jsx("div", {
      className: `${r[e]} ${t} rounded-full border-blue-300 border-t-blue-600 animate-spin`,
    });
  },
  T0 = ({ isOpen: e, onClose: t, onSuccess: r }) => {
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
          y = x.toISOString().slice(0, 16),
          j = new Date(x);
        j.setMonth(j.getMonth() + 1);
        const k = j.toISOString().slice(0, 16);
        (l({
          title: "",
          content: "",
          priority: "Normal",
          start_time: y,
          end_time: k,
        }),
          c(null));
      }
    }, [e]);
    const u = (x, y) => {
        l((j) => ({ ...j, [x]: y }));
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
        const y = Rn();
        if (!y) {
          c("無法獲取使用者資訊，請重新登入");
          return;
        }
        i(!0);
        try {
          const j = (p) => p.replace("T", " ") + ":00",
            k = {
              title: s.title.trim(),
              content: s.content.trim(),
              priority: s.priority,
              creator_dept: y.Employer || "",
              creator_name: y.Name || "",
              start_time: j(s.start_time),
              end_time: j(s.end_time),
            };
          (await Gm(k), r(), t());
        } catch (j) {
          c(j instanceof Error ? j.message : "新增公告失敗，請稍後再試");
        } finally {
          i(!1);
        }
      },
      g = () => {
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
                      n.jsx(pt, { size: 24, className: "text-blue-600 mr-3" }),
                      n.jsx("h2", {
                        className: "text-xl font-semibold text-gray-800",
                        children: "新增公告",
                      }),
                    ],
                  }),
                  n.jsx("button", {
                    onClick: g,
                    disabled: a,
                    className:
                      "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                    children: n.jsx(Le, { size: 20 }),
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
                        n.jsx(Oe, {
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
                        placeholder: "請輸入公告內容，上限300字。",
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
                    onClick: g,
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
                            n.jsx(Z, { size: "small", className: "mr-2" }),
                            "新增中...",
                          ],
                        })
                      : n.jsxs(n.Fragment, {
                          children: [
                            n.jsx(pt, { size: 16, className: "mr-2" }),
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
  R0 = ({ isOpen: e, onClose: t, onSuccess: r }) => {
    Ar();
    const [s, l] = w.useState([]),
      [a, i] = w.useState(!1),
      [o, c] = w.useState(null),
      [u, d] = w.useState(null),
      [m, g] = w.useState(!1),
      [x, y] = w.useState(!1),
      [j, k] = w.useState(!1);
    w.useEffect(() => {
      e && p();
    }, [e]);
    const p = async () => {
        (i(!0), c(null));
        try {
          const v = await Km();
          if (v.Code === 200) l(v.Data || []);
          else throw new Error(v.Result || "載入歷史公告失敗");
        } catch (v) {
          c(v instanceof Error ? v.message : "載入歷史公告時發生錯誤");
        } finally {
          i(!1);
        }
      },
      f = (v) => {
        const E = (L) => {
          if (!L) return "";
          try {
            const $ = L.replace(/\//g, "-");
            return new Date($).toISOString().slice(0, 16);
          } catch ($) {
            return (
              console.error("Error formatting date for input:", L, $),
              ""
            );
          }
        };
        d({
          GUID: v.GUID,
          title: v.title || "",
          content: v.content || "",
          priority: v.priority || "Normal",
          creator_dept: v.creator_dept || "",
          creator_name: v.creator_name || "",
          start_time: E(v.start_time),
          end_time: E(v.end_time),
          created_time: v.created_time || "",
        });
      },
      h = async () => {
        if (u) {
          (g(!0), c(null));
          try {
            const v = (L) =>
                L ? L.replace("T", " ").replace(/-/g, "/") + ":00" : "",
              E = {
                GUID: u.GUID,
                title: u.title.trim(),
                content: u.content.trim(),
                priority: u.priority,
                creator_dept: u.creator_dept,
                creator_name: u.creator_name,
                start_time: v(u.start_time),
                end_time: v(u.end_time),
              };
            (await Ym(E), await p(), d(null), r && r());
          } catch (v) {
            c(v instanceof Error ? v.message : "更新公告失敗，請稍後再試");
          } finally {
            g(!1);
          }
        }
      },
      N = async () => {
        if (u) {
          (k(!0), c(null), y(!1));
          try {
            (await Xm(u.GUID), await p(), d(null), r && r());
          } catch (v) {
            c(v instanceof Error ? v.message : "刪除公告失敗，請稍後再試");
          } finally {
            k(!1);
          }
        }
      },
      D = (v) => {
        if (!v) return "-";
        try {
          const E = v.replace(/\//g, "-");
          return new Date(E).toLocaleString("zh-TW", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: !1,
          });
        } catch {
          return v;
        }
      },
      I = (v) => {
        switch (v) {
          case "Critical":
            return "緊急";
          case "Important":
            return "重要";
          case "Normal":
            return "一般";
          default:
            return v || "一般";
        }
      },
      z = (v) => {
        switch (v) {
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
      _ = () => {
        !a && !m && !j && (d(null), y(!1), t());
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
                        n.jsx(gt, {
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
                      onClick: _,
                      disabled: a || m,
                      className:
                        "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                      children: n.jsx(Le, { size: 20 }),
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
                          n.jsx(Oe, {
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
                            n.jsx(Z, { size: "large" }),
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
                              n.jsx(gt, {
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
                                className:
                                  "min-w-full divide-y divide-gray-200",
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
                                    children: s.map((v) =>
                                      n.jsxs(
                                        "tr",
                                        {
                                          className:
                                            "hover:bg-blue-50 cursor-pointer transition-colors",
                                          onClick: () => f(v),
                                          title: "點擊編輯此公告",
                                          children: [
                                            n.jsx("td", {
                                              className:
                                                "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                              children: D(v.created_time),
                                            }),
                                            n.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900 max-w-xs",
                                              children: n.jsx("div", {
                                                className: "truncate",
                                                title: v.title,
                                                children: v.title || "-",
                                              }),
                                            }),
                                            n.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900 max-w-md",
                                              children: n.jsx("div", {
                                                className: "truncate",
                                                title: v.content,
                                                children: v.content || "-",
                                              }),
                                            }),
                                            n.jsx("td", {
                                              className:
                                                "px-6 py-4 whitespace-nowrap",
                                              children: n.jsx("span", {
                                                className: `px-2 py-1 rounded-full text-xs font-medium ${z(v.priority)}`,
                                                children: I(v.priority),
                                              }),
                                            }),
                                            n.jsx("td", {
                                              className:
                                                "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                              children:
                                                `${v.creator_dept || ""} ${v.creator_name || ""}`.trim() ||
                                                "-",
                                            }),
                                            n.jsx("td", {
                                              className:
                                                "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                              children: D(v.start_time),
                                            }),
                                            n.jsx("td", {
                                              className:
                                                "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                              children: D(v.end_time),
                                            }),
                                          ],
                                        },
                                        v.GUID,
                                      ),
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
                            n.jsx(Rr, {
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
                              onClick: () => y(!0),
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
                              children: n.jsx(Le, { size: 20 }),
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
                              onChange: (v) =>
                                d({ ...u, title: v.target.value }),
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
                              onChange: (v) =>
                                d({ ...u, content: v.target.value }),
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
                              onChange: (v) =>
                                d({ ...u, priority: v.target.value }),
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
                                  onChange: (v) =>
                                    d({ ...u, start_time: v.target.value }),
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
                                  onChange: (v) =>
                                    d({ ...u, end_time: v.target.value }),
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
                                    n.jsx(Z, {
                                      size: "small",
                                      className: "mr-2",
                                    }),
                                    m ? "更新中..." : "處理中...",
                                  ],
                                })
                              : n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(Rr, { size: 16, className: "mr-2" }),
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
                            onClick: () => y(!1),
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
                                    n.jsx(Z, {
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
  P0 = ({
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
      g = () => {
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
                      n.jsx(on, { size: 20, className: "text-blue-600 mr-2" }),
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
                          n.jsx(gt, { size: 16, className: "mr-2" }),
                          "查看歷史",
                        ],
                      }),
                      n.jsxs("button", {
                        onClick: () => a(!0),
                        className:
                          "flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors text-sm",
                        children: [
                          n.jsx(pt, { size: 16, className: "mr-2" }),
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
                        n.jsx(on, {
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
                                  className: `px-2 py-1 rounded-full text-xs font-medium ${u(x.priority)}`,
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
                                    n.jsx(Ys, { size: 12, className: "mr-1" }),
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
                        x.id,
                      ),
                    ),
            }),
          ],
        }),
        n.jsx(T0, { isOpen: l, onClose: () => a(!1), onSuccess: m }),
        n.jsx(R0, { isOpen: i, onClose: () => o(!1), onSuccess: g }),
      ],
    });
  },
  M0 = ({ bulletins: e }) => {
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
                n.jsx(on, { size: 20, className: "text-blue-600 mr-2" }),
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
                n.jsx(on, {
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
                  n.jsx(on, { size: 20, className: "text-blue-600 mr-2" }),
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
            className: `h-full px-4 py-2 border flex flex-col rounded-xl transition-colors ${s(o.priority)} border-gray-200`,
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
                    className: `px-3 py-1 rounded-full text-base font-bold ${l(o.priority)} ml-2`,
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
                      n.jsx(Ys, { size: 16, className: "mr-2" }),
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
  Ku = ({
    bulletins: e,
    isFullscreen: t = !1,
    onBulletinAdded: r,
    showInFocus: s,
    onFocusToggle: l,
  }) =>
    t
      ? n.jsx(M0, { bulletins: e })
      : n.jsx(P0, {
          bulletins: e,
          onBulletinAdded: r,
          showInFocus: s,
          onFocusToggle: l,
        }),
  pi = ({ isOpen: e, onClose: t, sectionKey: r, sectionTitle: s }) => {
    const [l, a] = w.useState(5);
    w.useEffect(() => {
      if (e) {
        const o = localStorage.getItem(`focusTable_${r}_itemsPerPage`);
        o && a(parseInt(o, 10));
      }
    }, [e, r]);
    const i = () => {
      (localStorage.setItem(`focusTable_${r}_itemsPerPage`, l.toString()),
        t(),
        window.location.reload());
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
                      n.jsx(rr, { size: 24, className: "text-blue-600 mr-3" }),
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
                    children: n.jsx(Le, { size: 24 }),
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
                                Math.min(20, parseInt(o.target.value) || 1),
                              ),
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
                            children: n.jsx(rr, {
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
      u = (y) => {
        switch (y) {
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
      d = ({ task: y, taskType: j }) =>
        j === "restock" && "code" in y
          ? n.jsx("div", {
              className: `p-3 border rounded-lg transition-all duration-200 ${u(y.state)} hover:border-gray-300`,
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
                            children: y.code,
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
                            children: y.name,
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
                            children: y.issuedQuantity,
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
                            children: y.destinationStoreType,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            })
          : (j === "receiving" || j === "putaway") && "code" in y
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
                              children: y.code,
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
                              children: y.quantity,
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
                              children: y.name,
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
                              children: y.supplier,
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
        { key: "restock", label: "撥補", icon: Ie, tasks: e },
        { key: "receiving", label: "驗收", icon: Yt, tasks: t },
        { key: "putaway", label: "歸貨", icon: Uu, tasks: r },
      ],
      g = ((x = m.find((y) => y.key === a)) == null ? void 0 : x.tasks) || [];
    return (
      g.filter((y) =>
        "state" in y ? y.state === "等待過帳" : y.quantity && y.quantity > 0,
      ).length,
      g.filter((y) => ("state" in y ? y.state === "已簽收" : !1)).length,
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
                            children: ["總計: ", g.length],
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
                                  onChange: (y) => l(y.target.checked),
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
                    children: n.jsx(rr, { size: 18 }),
                  }),
                ],
              }),
              n.jsx("div", {
                className: "flex space-x-1 bg-gray-100 rounded-lg p-1",
                children: m.map((y) => {
                  const j = y.icon,
                    k = a === y.key,
                    p = y.tasks.filter((f) =>
                      "state" in f
                        ? f.state === "等待過帳"
                        : f.quantity && f.quantity > 0,
                    ).length;
                  return n.jsxs(
                    "button",
                    {
                      onClick: () => i(y.key),
                      className: `flex-1 flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${k ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-800"}`,
                      children: [
                        n.jsx(j, { size: 16, className: "mr-2" }),
                        y.label,
                        p > 0 &&
                          n.jsx("span", {
                            className: `ml-2 px-2 py-0.5 rounded-full text-xs ${k ? "bg-blue-100 text-blue-600" : "bg-gray-200 text-gray-600"}`,
                            children: p,
                          }),
                      ],
                    },
                    y.key,
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
                g.length === 0
                  ? n.jsxs("div", {
                      className: "text-center text-gray-500 py-8",
                      children: [
                        n.jsx(Ie, {
                          size: 48,
                          className: "mx-auto text-gray-300 mb-2",
                        }),
                        n.jsx("p", { children: "暫無任務" }),
                      ],
                    })
                  : g
                      .filter((y) =>
                        a === "restock" && "state" in y
                          ? y.state === "等待過帳"
                          : !0,
                      )
                      .map((y) => n.jsx(d, { task: y, taskType: a }, y.id)),
            }),
          }),
          n.jsx(pi, {
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
        { key: "restock", label: "撥補", icon: Ie, tasks: u },
        { key: "receiving", label: "驗收", icon: Yt, tasks: t },
        { key: "putaway", label: "歸貨", icon: Uu, tasks: r },
      ],
      m = ((j = d.find((k) => k.key === s)) == null ? void 0 : j.tasks) || [];
    (w.useEffect(() => {
      const k = setInterval(() => {
        (l((p) => {
          const h = (d.findIndex((N) => N.key === p) + 1) % d.length;
          return d[h].key;
        }),
          i(0));
      }, 12e3);
      return () => clearInterval(k);
    }, []),
      w.useEffect(() => {
        if (m.length <= c) return;
        const k = setInterval(() => {
          i((p) => {
            const f = p + c;
            return f >= m.length ? 0 : f;
          });
        }, 8e3);
        return () => clearInterval(k);
      }, [m.length, s]),
      m.filter((k) =>
        "state" in k
          ? k.state === "等待過帳"
          : "quantity" in k && k.quantity > 0,
      ).length,
      m.filter((k) => ("state" in k ? k.state === "已簽收" : !1)).length);
    const g = m.slice(a, a + c),
      x = Math.ceil(m.length / c),
      y = Math.floor(a / c) + 1;
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
                    const p = k.icon,
                      f = s === k.key,
                      h = k.tasks.filter((N) =>
                        "state" in N
                          ? N.state === "等待過帳"
                          : "quantity" in N && N.quantity > 0,
                      ).length;
                    return n.jsxs(
                      "div",
                      {
                        className: `flex items-center justify-center px-2 py-1 rounded-md text-xs font-medium transition-colors ${f ? "bg-white text-blue-600 shadow-sm" : "text-gray-600"}`,
                        children: [
                          n.jsx(p, { size: 14, className: "mr-1" }),
                          k.label,
                          h > 0 &&
                            n.jsx("span", {
                              className: `ml-1 px-1 py-0.5 rounded-full text-xs ${f ? "bg-blue-100 text-blue-600" : "bg-gray-200 text-gray-600"}`,
                              children: h,
                            }),
                        ],
                      },
                      k.key,
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
                  n.jsxs("span", { children: ["第 ", y, " / ", x, " 頁"] }),
                  n.jsx("div", {
                    className: "flex space-x-1",
                    children: Array.from({ length: x }, (k, p) =>
                      n.jsx(
                        "div",
                        {
                          className: `w-2 h-2 rounded-full ${p === y - 1 ? "bg-green-500" : "bg-gray-300"}`,
                        },
                        p,
                      ),
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
                      n.jsx(Ie, {
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
                        children: g.map((k, p) => {
                          if (s === "restock" && "code" in k && "state" in k) {
                            const f = (N) => {
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
                                className: `border-b border-gray-200 transition-colors ${f(k.state)}`,
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
                              `${a}-${p}`,
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
                                `${a}-${p}`,
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
  Yu = ({
    restockTasks: e,
    receivingTasks: t,
    putAwayTasks: r,
    isFullscreen: s = !1,
    showInFocus: l,
    onFocusToggle: a,
  }) =>
    s
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
            g = c.toLocaleDateString("zh-TW", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            });
          return m < 0
            ? `${g} (逾期 ${Math.abs(m)} 天)`
            : m === 0
              ? `${g} (今天)`
              : m === 1
                ? `${g} (明天)`
                : `${g} (${m} 天後)`;
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
                  n.jsx(Yt, { size: 20, className: "text-green-600 mr-2" }),
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
                      n.jsx(Yt, {
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
                        className: `p-3 border rounded-lg transition-colors ${i(o.expectedArrivalDate) ? "border-red-200 bg-red-50" : o.status === "delayed" ? "border-yellow-200 bg-yellow-50" : "border-gray-200 bg-white hover:border-gray-300"}`,
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
                                    n.jsx(Oe, {
                                      size: 16,
                                      className: "text-red-500",
                                    }),
                                  n.jsx("span", {
                                    className: `px-2 py-1 rounded-full text-xs font-medium ${s(o.status)}`,
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
                                  n.jsx(Ks, {
                                    size: 14,
                                    className: `mr-2 ${i(o.expectedArrivalDate) ? "text-red-500" : "text-gray-400"}`,
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
                                  n.jsx(Ie, {
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
                                  n.jsx(Bu, {
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
                      o.id,
                    ),
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
            g = Math.ceil(m / (1e3 * 60 * 60 * 24)),
            x = u.toLocaleDateString("zh-TW", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            });
          return g < 0
            ? `${x} (逾期 ${Math.abs(g)} 天)`
            : g === 0
              ? `${x} (今天)`
              : g === 1
                ? `${x} (明天)`
                : `${x} (${g} 天後)`;
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
                n.jsx(Yt, { size: 20, className: "text-green-600 mr-2" }),
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
                n.jsx(Yt, {
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
                  n.jsx(Yt, { size: 20, className: "text-green-600 mr-2" }),
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
            className: `h-full p-2 border rounded-xl transition-colors ${i(o.expectedArrivalDate) ? "border-red-200 bg-red-50" : o.status === "delayed" ? "border-yellow-200 bg-yellow-50" : "border-gray-200 bg-white"}`,
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
                        n.jsx(Oe, { size: 18, className: "text-red-500" }),
                      n.jsx("span", {
                        className: `px-3 py-1 rounded-full text-base font-bold ${s(o.status)}`,
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
                      n.jsx(Ks, {
                        size: 20,
                        className: `mr-3 ${i(o.expectedArrivalDate) ? "text-red-500" : "text-gray-400"}`,
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
                          n.jsx(Ie, {
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
                          n.jsx(Bu, {
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
  }) =>
    t
      ? n.jsx(F0, { incomingDrugs: e })
      : n.jsx(A0, { incomingDrugs: e, showInFocus: r, onFocusToggle: s }),
  $0 = ({ isOpen: e, onClose: t, onSuccess: r }) => {
    const [s, l] = w.useState({ drugName: "", start_time: "", end_time: "" }),
      [a, i] = w.useState([]),
      [o, c] = w.useState([]),
      [u, d] = w.useState(!1),
      [m, g] = w.useState(!1),
      [x, y] = w.useState(!1),
      [j, k] = w.useState(null);
    Te.useEffect(() => {
      if (e) {
        const _ = new Date(),
          v = _.toISOString().slice(0, 16),
          E = new Date(_);
        E.setMonth(E.getMonth() + 1);
        const L = E.toISOString().slice(0, 16);
        (l({ drugName: "", start_time: v, end_time: L }),
          c([]),
          d(!1),
          k(null),
          p());
      }
    }, [e]);
    const p = async () => {
        g(!0);
        try {
          const _ = await Xs();
          _.Code === 200 && _.Data
            ? i(_.Data)
            : console.warn("Failed to load medicine data:", _);
        } catch (_) {
          console.error("Error loading medicine data:", _);
        } finally {
          g(!1);
        }
      },
      f = (_, v) => {
        (l((E) => ({ ...E, [_]: v })), _ === "drugName" && h(v));
      },
      h = (_) => {
        if (!_.trim()) {
          (c([]), d(!1));
          return;
        }
        const v = a.filter((E) =>
          E.NAME.toLowerCase().includes(_.toLowerCase()),
        );
        (c(v.slice(0, 10)), d(v.length > 0));
      },
      N = (_) => {
        (l((v) => ({ ...v, drugName: _ })), d(!1), c([]));
      },
      D = () => {
        if (!s.drugName.trim()) return "請輸入藥品名稱";
        if (!s.start_time) return "請選擇開始時間";
        if (!s.end_time) return "請選擇結束時間";
        const _ = new Date(s.start_time);
        return new Date(s.end_time) <= _ ? "結束時間必須晚於開始時間" : null;
      },
      I = async () => {
        k(null);
        const _ = D();
        if (_) {
          k(_);
          return;
        }
        const v = Rn();
        if (!v) {
          k("無法獲取使用者資訊，請重新登入");
          return;
        }
        y(!0);
        try {
          const E = ($) => $.replace("T", " ") + ":00",
            L = {
              title: "缺貨通知",
              content: s.drugName.trim(),
              priority: "Critical",
              creator_dept: v.Employer || "",
              creator_name: v.Name || "",
              start_time: E(s.start_time),
              end_time: E(s.end_time),
            };
          (await u0(L), r(), t());
        } catch (E) {
          k(E instanceof Error ? E.message : "新增缺貨項目失敗，請稍後再試");
        } finally {
          y(!1);
        }
      },
      z = () => {
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
                      n.jsx(pt, { size: 24, className: "text-blue-600 mr-3" }),
                      n.jsx("h2", {
                        className: "text-xl font-semibold text-gray-800",
                        children: "新增缺貨項目",
                      }),
                    ],
                  }),
                  n.jsx("button", {
                    onClick: z,
                    disabled: x,
                    className:
                      "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                    children: n.jsx(Le, { size: 20 }),
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
                        n.jsx(Oe, {
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
                            children: n.jsx(En, {
                              size: 16,
                              className: "text-gray-400",
                            }),
                          }),
                          n.jsx("input", {
                            type: "text",
                            value: s.drugName,
                            onChange: (_) => f("drugName", _.target.value),
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
                              children: n.jsx(Z, { size: "small" }),
                            }),
                          u &&
                            n.jsx("div", {
                              className:
                                "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",
                              children: n.jsx(Cn, {
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
                          children: o.map((_, v) =>
                            n.jsx(
                              "button",
                              {
                                type: "button",
                                onClick: () => N(_.NAME),
                                className:
                                  "w-full px-4 py-2 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors border-b border-gray-100 last:border-b-0",
                                children: n.jsx("div", {
                                  className: "font-medium text-gray-900",
                                  children: _.NAME,
                                }),
                              },
                              v,
                            ),
                          ),
                        }),
                      m &&
                        n.jsxs("div", {
                          className:
                            "mt-2 text-sm text-gray-500 flex items-center",
                          children: [
                            n.jsx(Z, { size: "small", className: "mr-2" }),
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
                            onChange: (_) => f("start_time", _.target.value),
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
                            onChange: (_) => f("end_time", _.target.value),
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
                    onClick: z,
                    disabled: x,
                    className:
                      "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                    children: "取消",
                  }),
                  n.jsx("button", {
                    onClick: I,
                    disabled: x || !s.drugName.trim(),
                    className:
                      "flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                    children: x
                      ? n.jsxs(n.Fragment, {
                          children: [
                            n.jsx(Z, { size: "small", className: "mr-2" }),
                            "新增中...",
                          ],
                        })
                      : n.jsxs(n.Fragment, {
                          children: [
                            n.jsx(pt, { size: 16, className: "mr-2" }),
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
      [m, g] = w.useState(!1),
      [x, y] = w.useState(!1),
      [j, k] = w.useState(!1),
      [p, f] = w.useState([]),
      [h, N] = w.useState([]),
      [D, I] = w.useState(!1),
      [z, _] = w.useState(!1);
    w.useEffect(() => {
      e && v();
    }, [e]);
    const v = async () => {
        (i(!0), c(null));
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
      E = async () => {
        _(!0);
        try {
          const C = await Xs();
          C.Code === 200 && C.Data
            ? f(C.Data)
            : console.warn("Failed to load medicine data:", C);
        } catch (C) {
          console.error("Error loading medicine data:", C);
        } finally {
          _(!1);
        }
      },
      L = (C) => {
        const S = (b) => {
          if (!b) return "";
          try {
            const P = b.replace(/\//g, "-");
            return new Date(P).toISOString().slice(0, 16);
          } catch (P) {
            return (
              console.error("Error formatting date for input:", b, P),
              ""
            );
          }
        };
        (d({
          GUID: C.GUID,
          title: C.title || "",
          content: C.content || "",
          priority: C.priority || "Normal",
          creator_dept: C.creator_dept || "",
          creator_name: C.creator_name || "",
          start_time: S(C.start_time),
          end_time: S(C.end_time),
          created_time: C.created_time || "",
        }),
          p.length === 0 && E());
      },
      $ = (C) => {
        if (!C.trim()) {
          (N([]), I(!1));
          return;
        }
        const S = p.filter((b) =>
          b.NAME.toLowerCase().includes(C.toLowerCase()),
        );
        (N(S.slice(0, 10)), I(S.length > 0));
      },
      B = (C) => {
        (u && d({ ...u, content: C }), I(!1), N([]));
      },
      se = async () => {
        if (u) {
          (g(!0), c(null));
          try {
            const C = (b) =>
                b ? b.replace("T", " ").replace(/-/g, "/") + ":00" : "",
              S = {
                GUID: u.GUID,
                title: u.title.trim(),
                content: u.content.trim(),
                priority: u.priority,
                creator_dept: u.creator_dept,
                creator_name: u.creator_name,
                start_time: C(u.start_time),
                end_time: C(u.end_time),
              };
            (await d0(S), await v(), d(null), r && r());
          } catch (C) {
            c(C instanceof Error ? C.message : "更新缺貨項目失敗，請稍後再試");
          } finally {
            g(!1);
          }
        }
      },
      ae = async () => {
        if (u) {
          (k(!0), c(null), y(!1));
          try {
            (await f0(u.GUID), await v(), d(null), r && r());
          } catch (C) {
            c(C instanceof Error ? C.message : "刪除缺貨項目失敗，請稍後再試");
          } finally {
            k(!1);
          }
        }
      },
      M = (C) => {
        if (!C) return "-";
        try {
          const S = C.replace(/\//g, "-");
          return new Date(S).toLocaleString("zh-TW", {
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
      X = (C) => {
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
      R = (C) => {
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
      F = () => {
        !a && !m && !j && (d(null), y(!1), t());
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
                        n.jsx(gt, {
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
                      onClick: F,
                      disabled: a || m,
                      className:
                        "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                      children: n.jsx(Le, { size: 20 }),
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
                          n.jsx(Oe, {
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
                            n.jsx(Z, { size: "large" }),
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
                              n.jsx(gt, {
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
                                className:
                                  "min-w-full divide-y divide-gray-200",
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
                                          onClick: () => L(C),
                                          title: "點擊編輯此缺貨項目",
                                          children: [
                                            n.jsx("td", {
                                              className:
                                                "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                              children: M(C.created_time),
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
                                                className: `px-2 py-1 rounded-full text-xs font-medium ${R(C.priority)}`,
                                                children: X(C.priority),
                                              }),
                                            }),
                                            n.jsx("td", {
                                              className:
                                                "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                              children:
                                                `${C.creator_dept || ""} ${C.creator_name || ""}`.trim() ||
                                                "-",
                                            }),
                                            n.jsx("td", {
                                              className:
                                                "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                              children: M(C.start_time),
                                            }),
                                            n.jsx("td", {
                                              className:
                                                "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                              children: M(C.end_time),
                                            }),
                                          ],
                                        },
                                        C.GUID,
                                      ),
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
                            n.jsx(Rr, {
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
                              onClick: () => y(!0),
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
                              children: n.jsx(Le, { size: 20 }),
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
                                  children: n.jsx(En, {
                                    size: 16,
                                    className: "text-gray-400",
                                  }),
                                }),
                                n.jsx("input", {
                                  type: "text",
                                  value: u.content,
                                  onChange: (C) => {
                                    (d({ ...u, content: C.target.value }),
                                      $(C.target.value));
                                  },
                                  onFocus: () => {
                                    h.length > 0 && I(!0);
                                  },
                                  disabled: m || z,
                                  className:
                                    "w-full pl-10 pr-10 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                  placeholder: "請輸入藥品名稱進行搜尋",
                                  autoComplete: "off",
                                }),
                                z &&
                                  n.jsx("div", {
                                    className:
                                      "absolute inset-y-0 right-0 flex items-center pr-3",
                                    children: n.jsx(Z, { size: "small" }),
                                  }),
                                D &&
                                  n.jsx("div", {
                                    className:
                                      "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",
                                    children: n.jsx(Cn, {
                                      size: 16,
                                      className: "text-gray-400",
                                    }),
                                  }),
                              ],
                            }),
                            D &&
                              h.length > 0 &&
                              n.jsx("div", {
                                className:
                                  "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                                children: h.map((C, S) =>
                                  n.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      onClick: () => B(C.NAME),
                                      className:
                                        "w-full px-4 py-2 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors border-b border-gray-100 last:border-b-0",
                                      children: n.jsx("div", {
                                        className: "font-medium text-gray-900",
                                        children: C.NAME,
                                      }),
                                    },
                                    S,
                                  ),
                                ),
                              }),
                            z &&
                              n.jsxs("div", {
                                className:
                                  "mt-2 text-sm text-gray-500 flex items-center",
                                children: [
                                  n.jsx(Z, {
                                    size: "small",
                                    className: "mr-2",
                                  }),
                                  "載入藥品資料中...",
                                ],
                              }),
                          ],
                        }),
                        D &&
                          n.jsx("div", {
                            className: "fixed inset-0 z-40",
                            onClick: () => I(!1),
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
                          onClick: se,
                          disabled: m || j || !u.content.trim(),
                          className:
                            "flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                          children:
                            m || j
                              ? n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(Z, {
                                      size: "small",
                                      className: "mr-2",
                                    }),
                                    m ? "更新中..." : "處理中...",
                                  ],
                                })
                              : n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(Rr, { size: 16, className: "mr-2" }),
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
                            onClick: () => y(!1),
                            disabled: j,
                            className:
                              "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                            children: "取消",
                          }),
                          n.jsx("button", {
                            onClick: ae,
                            disabled: j,
                            className:
                              "flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                            children: j
                              ? n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(Z, {
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
  q0 = ({
    outOfStockItems: e,
    onItemAdded: t,
    showInFocus: r = !0,
    onFocusToggle: s,
  }) => {
    const [l, a] = Te.useState(!1),
      [i, o] = Te.useState(!1),
      [c, u] = Te.useState(!1),
      [d, m] = Te.useState(!1),
      g = (p) =>
        new Date(p).toLocaleDateString("zh-TW", {
          month: "2-digit",
          day: "2-digit",
        }),
      x = (p) => {
        const f = new Date(p);
        if (isNaN(f.getTime()))
          return (console.warn("Invalid lastStockDate:", p), 0);
        const h = new Date(),
          N = new Date(f.getFullYear(), f.getMonth(), f.getDate()),
          D = new Date(h.getFullYear(), h.getMonth(), h.getDate()),
          I = D.getTime() - N.getTime(),
          z = Math.floor(I / (1e3 * 60 * 60 * 24));
        return (
          console.log("Days calculation in OutOfStockList:", {
            lastStockDate: p,
            lastStock: f,
            lastStockDateOnly: N,
            nowDateOnly: D,
            diffDays: z,
          }),
          z
        );
      },
      y = () => {
        t && t();
      },
      j = async () => {
        u(!0);
        try {
          (await new Promise((p) => setTimeout(p, 100)), a(!0));
        } catch (p) {
          (console.error("Failed to prepare add modal:", p), a(!0));
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
                        n.jsx(wa, { size: 20, className: "text-red-600 mr-2" }),
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
                                    onChange: (p) => s(p.target.checked),
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
                          children: n.jsx(rr, { size: 18 }),
                        }),
                        n.jsxs("button", {
                          onClick: () => o(!0),
                          className:
                            "flex items-center px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors text-sm",
                          children: [
                            n.jsx(gt, { size: 16, className: "mr-2" }),
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
                                  n.jsx(pt, { size: 16, className: "mr-2" }),
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
                          n.jsx(wa, {
                            size: 48,
                            className: "mx-auto text-gray-300 mb-2",
                          }),
                          n.jsx("p", { children: "目前無缺貨品項" }),
                        ],
                      })
                    : e.map((p) => {
                        const f = x(p.lastStockDate),
                          h = f > 3 || p.status === "urgent_order";
                        return n.jsxs(
                          "div",
                          {
                            className: `p-3 border rounded-lg transition-colors ${h ? "border-red-200 bg-red-50" : "border-gray-200 bg-white hover:border-gray-300"}`,
                            children: [
                              n.jsx("div", {
                                className:
                                  "flex items-start justify-between mb-2",
                                children: n.jsx("h4", {
                                  className: "font-medium text-gray-800 flex-1",
                                  children: p.drugName,
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
                                        f > 3 ? "text-red-600 font-medium" : "",
                                      children: [
                                        "缺貨 ",
                                        f,
                                        " 天 (自 ",
                                        g(p.lastStockDate),
                                        ")",
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          },
                          p.id,
                        );
                      }),
              }),
            }),
          ],
        }),
        n.jsx($0, { isOpen: l, onClose: () => a(!1), onSuccess: y }),
        n.jsx(U0, { isOpen: i, onClose: () => o(!1), onSuccess: k }),
        n.jsx(pi, {
          isOpen: d,
          onClose: () => m(!1),
          sectionKey: "outOfStock",
          sectionTitle: "缺貨通知",
        }),
      ],
    });
  },
  V0 = ({ outOfStockItems: e }) => {
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
            g = new Date(d.getFullYear(), d.getMonth(), d.getDate()),
            y =
              new Date(m.getFullYear(), m.getMonth(), m.getDate()).getTime() -
              g.getTime(),
            j = Math.floor(y / (1e3 * 60 * 60 * 24));
          return Math.max(0, j);
        } catch (d) {
          return (console.error("日期解析錯誤:", d, "原始日期:", u), 0);
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
                    n.jsx(wa, { size: 20, className: "mr-2 text-red-500" }),
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
                          className: `w-2 h-2 rounded-full ${d === c - 1 ? "bg-red-500" : "bg-gray-300"}`,
                        },
                        d,
                      ),
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
                      n.jsx(Ie, {
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
                            g = m > 3 || u.status === "urgent_order";
                          return n.jsxs(
                            "tr",
                            {
                              className: `border-b border-gray-200 transition-colors ${g ? "bg-red-50" : "bg-white hover:bg-gray-50"}`,
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
                                    className: `font-semibold ${m > 3 ? "text-red-600" : "text-gray-700"}`,
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
                            `${t}-${d}`,
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
  }) =>
    t
      ? n.jsx(V0, { outOfStockItems: e })
      : n.jsx(q0, {
          outOfStockItems: e,
          onItemAdded: r,
          showInFocus: s,
          onFocusToggle: l,
        }),
  H0 = ({ isOpen: e, onClose: t, onSuccess: r }) => {
    const [s, l] = w.useState({
        originalDrug: null,
        reason: "",
        start_time: "",
        end_time: "",
      }),
      [a, i] = w.useState([]),
      [o, c] = w.useState([]),
      [u, d] = w.useState(""),
      [m, g] = w.useState(!1),
      [x, y] = w.useState(!1),
      [j, k] = w.useState(!1),
      [p, f] = w.useState(null);
    Te.useEffect(() => {
      if (e) {
        const E = new Date(),
          L = E.toISOString().slice(0, 16),
          $ = new Date(E);
        $.setMonth($.getMonth() + 1);
        const B = $.toISOString().slice(0, 16);
        (l({ originalDrug: null, reason: "", start_time: L, end_time: B }),
          d(""),
          c([]),
          g(!1),
          f(null),
          h());
      }
    }, [e]);
    const h = async () => {
        y(!0);
        try {
          const E = await Xs();
          E.Code === 200 && E.Data
            ? i(E.Data)
            : console.warn("Failed to load medicine data:", E);
        } catch (E) {
          console.error("Error loading medicine data:", E);
        } finally {
          y(!1);
        }
      },
      N = (E, L) => {
        l(($) => ({ ...$, [E]: L }));
      },
      D = (E) => {
        if ((d(E), !E.trim())) {
          (c([]), g(!1));
          return;
        }
        const L = E.toLowerCase(),
          $ = a.filter((B) => {
            const se = (B.NAME || "").toLowerCase(),
              ae = (B.CODE || "").toLowerCase(),
              M = (B.SKDIACODE || "").toLowerCase(),
              X = (B.CHT_NAME || "").toLowerCase();
            return (
              se.includes(L) || ae.includes(L) || M.includes(L) || X.includes(L)
            );
          });
        (c($.slice(0, 10)), g($.length > 0));
      },
      I = (E) => {
        (l((L) => ({ ...L, originalDrug: E })), d(E.NAME), g(!1), c([]));
      },
      z = () => {
        if (!s.originalDrug) return "請選擇藥品";
        if (!s.reason.trim()) return "請輸入替換原因";
        if (!s.start_time) return "請選擇開始時間";
        if (!s.end_time) return "請選擇結束時間";
        const E = new Date(s.start_time);
        return new Date(s.end_time) <= E ? "結束時間必須晚於開始時間" : null;
      },
      _ = async () => {
        f(null);
        const E = z();
        if (E) {
          f(E);
          return;
        }
        const L = Rn();
        if (!L) {
          f("無法獲取使用者資訊，請重新登入");
          return;
        }
        k(!0);
        try {
          const $ = (se) => se.replace("T", " ") + ":00",
            B = {
              title: "藥品通知",
              content: `${s.originalDrug.NAME.trim()};${s.originalDrug.CODE.trim()}`,
              note: s.reason.trim(),
              priority: "Important",
              creator_dept: L.Employer || "",
              creator_name: L.Name || "",
              start_time: $(s.start_time),
              end_time: $(s.end_time),
            };
          (await l0(B), t(), r());
        } catch ($) {
          f(
            $ instanceof Error ? $.message : "新增藥品通知項目失敗，請稍後再試",
          );
        } finally {
          k(!1);
        }
      },
      v = () => {
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
                      n.jsx(pt, { size: 24, className: "text-blue-600 mr-3" }),
                      n.jsx("h2", {
                        className: "text-xl font-semibold text-gray-800",
                        children: "新增藥品通知",
                      }),
                    ],
                  }),
                  n.jsx("button", {
                    onClick: v,
                    disabled: j,
                    className:
                      "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                    children: n.jsx(Le, { size: 20 }),
                  }),
                ],
              }),
              n.jsxs("div", {
                className: "p-6 space-y-6",
                children: [
                  p &&
                    n.jsxs("div", {
                      className:
                        "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center",
                      children: [
                        n.jsx(Oe, {
                          size: 20,
                          className: "mr-2 flex-shrink-0",
                        }),
                        p,
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
                            children: n.jsx(En, {
                              size: 16,
                              className: "text-gray-400",
                            }),
                          }),
                          n.jsx("input", {
                            type: "text",
                            value: u,
                            onChange: (E) => D(E.target.value),
                            onFocus: () => {
                              o.length > 0 && g(!0);
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
                              children: n.jsx(Z, { size: "small" }),
                            }),
                          m &&
                            n.jsx("div", {
                              className:
                                "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",
                              children: n.jsx(Cn, {
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
                          children: o.map((E, L) =>
                            n.jsxs(
                              "button",
                              {
                                type: "button",
                                onClick: () => I(E),
                                className:
                                  "w-full px-4 py-2 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors border-b border-gray-100 last:border-b-0",
                                children: [
                                  n.jsx("div", {
                                    className: "font-medium text-gray-900",
                                    children: E.NAME,
                                  }),
                                  n.jsxs("div", {
                                    className:
                                      "text-sm text-gray-500 space-y-0.5",
                                    children: [
                                      n.jsxs("div", {
                                        children: ["藥碼: ", E.CODE],
                                      }),
                                      E.SKDIACODE &&
                                        n.jsxs("div", {
                                          children: ["料號: ", E.SKDIACODE],
                                        }),
                                      E.CHT_NAME &&
                                        n.jsxs("div", {
                                          children: ["中文名: ", E.CHT_NAME],
                                        }),
                                    ],
                                  }),
                                ],
                              },
                              L,
                            ),
                          ),
                        }),
                    ],
                  }),
                  m &&
                    n.jsx("div", {
                      className: "fixed inset-0 z-40",
                      onClick: () => g(!1),
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
                        onChange: (E) => N("reason", E.target.value),
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
                            onChange: (E) => N("start_time", E.target.value),
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
                            onChange: (E) => N("end_time", E.target.value),
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
                        n.jsx(Z, { size: "small", className: "mr-2" }),
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
                    onClick: v,
                    disabled: j,
                    className:
                      "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                    children: "取消",
                  }),
                  n.jsx("button", {
                    onClick: _,
                    disabled: j || !s.originalDrug || !s.reason.trim(),
                    className:
                      "flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                    children: j
                      ? n.jsxs(n.Fragment, {
                          children: [
                            n.jsx(Z, { size: "small", className: "mr-2" }),
                            "新增中...",
                          ],
                        })
                      : n.jsxs(n.Fragment, {
                          children: [
                            n.jsx(pt, { size: 16, className: "mr-2" }),
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
  B0 = ({ isOpen: e, onClose: t, onSuccess: r }) => {
    const [s, l] = w.useState([]),
      [a, i] = w.useState(!1),
      [o, c] = w.useState(null),
      [u, d] = w.useState(null),
      [m, g] = w.useState(!1),
      [x, y] = w.useState(!1),
      [j, k] = w.useState(!1),
      [p, f] = w.useState([]),
      [h, N] = w.useState([]),
      [D, I] = w.useState(null),
      [z, _] = w.useState(!1);
    w.useEffect(() => {
      e && v();
    }, [e]);
    const v = async () => {
        (i(!0), c(null));
        try {
          const b = await s0();
          if (b.Code === 200) l(b.Data || []);
          else throw new Error(b.Result || "載入歷史藥品通知項目失敗");
        } catch (b) {
          c(b instanceof Error ? b.message : "載入歷史藥品通知項目時發生錯誤");
        } finally {
          i(!1);
        }
      },
      E = async () => {
        _(!0);
        try {
          const b = await Xs();
          b.Code === 200 && b.Data
            ? f(b.Data)
            : console.warn("Failed to load medicine data:", b);
        } catch (b) {
          console.error("Error loading medicine data:", b);
        } finally {
          _(!1);
        }
      },
      L = (b) => {
        const P = (A) => {
          if (!A) return "";
          try {
            const U = A.replace(/\//g, "-");
            return new Date(U).toISOString().slice(0, 16);
          } catch (U) {
            return (
              console.error("Error formatting date for input:", A, U),
              ""
            );
          }
        };
        (d({
          GUID: b.GUID,
          title: b.title || "",
          content: b.content || "",
          note: b.note || "",
          priority: b.priority || "Normal",
          creator_dept: b.creator_dept || "",
          creator_name: b.creator_name || "",
          start_time: P(b.start_time),
          end_time: P(b.end_time),
          created_time: b.created_time || "",
        }),
          p.length === 0 && E());
      },
      $ = (b, P) => {
        if (!b.trim()) {
          (N([]), I(null));
          return;
        }
        const A = p.filter((U) =>
          U.NAME.toLowerCase().includes(b.toLowerCase()),
        );
        (N(A.slice(0, 10)), I(A.length > 0 ? P : null));
      },
      B = (b, P) => {
        if (u) {
          const A = u.content.split(";");
          let U = "";
          (P === "original"
            ? (U = `${b};${A[1] || ""}`)
            : (U = `${A[0] || ""};${b}`),
            d({ ...u, content: U }));
        }
        (I(null), N([]));
      },
      se = (b) => {
        var P;
        return ((P = b.split(";")[0]) == null ? void 0 : P.trim()) || "";
      },
      ae = (b) => {
        var P;
        return ((P = b.split(";")[1]) == null ? void 0 : P.trim()) || "";
      },
      M = async () => {
        if (u) {
          (g(!0), c(null));
          try {
            const b = (A) =>
                A ? A.replace("T", " ").replace(/-/g, "/") + ":00" : "",
              P = {
                GUID: u.GUID,
                title: u.title.trim(),
                content: u.content.trim(),
                note: u.note.trim(),
                priority: u.priority,
                creator_dept: u.creator_dept,
                creator_name: u.creator_name,
                start_time: b(u.start_time),
                end_time: b(u.end_time),
              };
            (await a0(P), await v(), d(null), r && r());
          } catch (b) {
            c(
              b instanceof Error
                ? b.message
                : "更新藥品通知項目失敗，請稍後再試",
            );
          } finally {
            g(!1);
          }
        }
      },
      X = async () => {
        if (u) {
          (k(!0), c(null), y(!1));
          try {
            (await i0(u.GUID), await v(), d(null), r && r());
          } catch (b) {
            c(
              b instanceof Error
                ? b.message
                : "刪除藥品通知項目失敗，請稍後再試",
            );
          } finally {
            k(!1);
          }
        }
      },
      R = (b) => {
        if (!b) return "-";
        try {
          const P = b.replace(/\//g, "-");
          return new Date(P).toLocaleString("zh-TW", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: !1,
          });
        } catch {
          return b;
        }
      },
      F = (b) => {
        switch (b) {
          case "Critical":
            return "緊急";
          case "Important":
            return "重要";
          case "Normal":
            return "一般";
          default:
            return b || "一般";
        }
      },
      C = (b) => {
        switch (b) {
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
      S = () => {
        !a && !m && !j && (d(null), y(!1), t());
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
                        n.jsx(gt, {
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
                      onClick: S,
                      disabled: a || m,
                      className:
                        "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                      children: n.jsx(Le, { size: 20 }),
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
                          n.jsx(Oe, {
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
                            n.jsx(Z, { size: "large" }),
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
                              n.jsx(gt, {
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
                                className:
                                  "min-w-full divide-y divide-gray-200",
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
                                    children: s.map((b) =>
                                      n.jsxs(
                                        "tr",
                                        {
                                          className:
                                            "hover:bg-blue-50 cursor-pointer transition-colors",
                                          onClick: () => L(b),
                                          title: "點擊編輯此藥品通知項目",
                                          children: [
                                            n.jsx("td", {
                                              className:
                                                "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                              children: R(b.created_time),
                                            }),
                                            n.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900 max-w-xs",
                                              children: n.jsx("div", {
                                                className: "truncate",
                                                title: se(b.content),
                                                children: se(b.content) || "-",
                                              }),
                                            }),
                                            n.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900 max-w-xs",
                                              children: n.jsx("div", {
                                                className: "truncate",
                                                title: ae(b.content),
                                                children: ae(b.content) || "-",
                                              }),
                                            }),
                                            n.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900 max-w-md",
                                              children: n.jsx("div", {
                                                className: "truncate",
                                                title: b.note,
                                                children: b.note || "-",
                                              }),
                                            }),
                                            n.jsx("td", {
                                              className:
                                                "px-6 py-4 whitespace-nowrap",
                                              children: n.jsx("span", {
                                                className: `px-2 py-1 rounded-full text-xs font-medium ${C(b.priority)}`,
                                                children: F(b.priority),
                                              }),
                                            }),
                                            n.jsx("td", {
                                              className:
                                                "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                              children:
                                                `${b.creator_dept || ""} ${b.creator_name || ""}`.trim() ||
                                                "-",
                                            }),
                                            n.jsx("td", {
                                              className:
                                                "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                              children: R(b.start_time),
                                            }),
                                            n.jsx("td", {
                                              className:
                                                "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                              children: R(b.end_time),
                                            }),
                                          ],
                                        },
                                        b.GUID,
                                      ),
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
                            n.jsx(Rr, {
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
                              onClick: () => y(!0),
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
                              children: n.jsx(Le, { size: 20 }),
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
                                  children: n.jsx(En, {
                                    size: 16,
                                    className: "text-gray-400",
                                  }),
                                }),
                                n.jsx("input", {
                                  type: "text",
                                  value: se(u.content),
                                  onChange: (b) => {
                                    const P = `${b.target.value};${ae(u.content)}`;
                                    (d({ ...u, content: P }),
                                      $(b.target.value, "original"));
                                  },
                                  onFocus: () => {
                                    h.length > 0 && I("original");
                                  },
                                  disabled: m || z,
                                  className:
                                    "w-full pl-10 pr-10 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                  placeholder: "請輸入原藥品名稱進行搜尋",
                                  autoComplete: "off",
                                }),
                                z &&
                                  n.jsx("div", {
                                    className:
                                      "absolute inset-y-0 right-0 flex items-center pr-3",
                                    children: n.jsx(Z, { size: "small" }),
                                  }),
                                D === "original" &&
                                  n.jsx("div", {
                                    className:
                                      "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",
                                    children: n.jsx(Cn, {
                                      size: 16,
                                      className: "text-gray-400",
                                    }),
                                  }),
                              ],
                            }),
                            D === "original" &&
                              h.length > 0 &&
                              n.jsx("div", {
                                className:
                                  "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                                children: h.map((b, P) =>
                                  n.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      onClick: () => B(b.NAME, "original"),
                                      className:
                                        "w-full px-4 py-2 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors border-b border-gray-100 last:border-b-0",
                                      children: n.jsx("div", {
                                        className: "font-medium text-gray-900",
                                        children: b.NAME,
                                      }),
                                    },
                                    P,
                                  ),
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
                                  children: n.jsx(En, {
                                    size: 16,
                                    className: "text-gray-400",
                                  }),
                                }),
                                n.jsx("input", {
                                  type: "text",
                                  value: ae(u.content),
                                  onChange: (b) => {
                                    const P = `${se(u.content)};${b.target.value}`;
                                    (d({ ...u, content: P }),
                                      $(b.target.value, "replacement"));
                                  },
                                  onFocus: () => {
                                    h.length > 0 && I("replacement");
                                  },
                                  disabled: m || z,
                                  className:
                                    "w-full pl-10 pr-10 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                  placeholder: "請輸入替換藥品名稱進行搜尋",
                                  autoComplete: "off",
                                }),
                                z &&
                                  n.jsx("div", {
                                    className:
                                      "absolute inset-y-0 right-0 flex items-center pr-3",
                                    children: n.jsx(Z, { size: "small" }),
                                  }),
                                D === "replacement" &&
                                  n.jsx("div", {
                                    className:
                                      "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",
                                    children: n.jsx(Cn, {
                                      size: 16,
                                      className: "text-gray-400",
                                    }),
                                  }),
                              ],
                            }),
                            D === "replacement" &&
                              h.length > 0 &&
                              n.jsx("div", {
                                className:
                                  "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                                children: h.map((b, P) =>
                                  n.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      onClick: () => B(b.NAME, "replacement"),
                                      className:
                                        "w-full px-4 py-2 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors border-b border-gray-100 last:border-b-0",
                                      children: n.jsx("div", {
                                        className: "font-medium text-gray-900",
                                        children: b.NAME,
                                      }),
                                    },
                                    P,
                                  ),
                                ),
                              }),
                          ],
                        }),
                        D &&
                          n.jsx("div", {
                            className: "fixed inset-0 z-40",
                            onClick: () => I(null),
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
                              onChange: (b) =>
                                d({ ...u, note: b.target.value }),
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
                              onChange: (b) =>
                                d({ ...u, priority: b.target.value }),
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
                                  onChange: (b) =>
                                    d({ ...u, start_time: b.target.value }),
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
                                  onChange: (b) =>
                                    d({ ...u, end_time: b.target.value }),
                                  disabled: m,
                                  className:
                                    "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                }),
                              ],
                            }),
                          ],
                        }),
                        z &&
                          n.jsxs("div", {
                            className:
                              "text-sm text-gray-500 flex items-center",
                            children: [
                              n.jsx(Z, { size: "small", className: "mr-2" }),
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
                          onClick: M,
                          disabled:
                            m || j || !u.content.trim() || !u.note.trim(),
                          className:
                            "flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                          children:
                            m || j
                              ? n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(Z, {
                                      size: "small",
                                      className: "mr-2",
                                    }),
                                    m ? "更新中..." : "處理中...",
                                  ],
                                })
                              : n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(Rr, { size: 16, className: "mr-2" }),
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
                          se(u.content),
                          " → ",
                          ae(u.content),
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
                            onClick: () => y(!1),
                            disabled: j,
                            className:
                              "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                            children: "取消",
                          }),
                          n.jsx("button", {
                            onClick: X,
                            disabled: j,
                            className:
                              "flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                            children: j
                              ? n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(Z, {
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
      c = (g) => {
        switch (g) {
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
      u = (g) => {
        const x = new Date(g),
          y = new Date();
        return (
          x.getTime() - y.getTime(),
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
                        n.jsxs("button", {
                          onClick: () => o(!0),
                          className:
                            "flex items-center px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors text-sm",
                          children: [
                            n.jsx(gt, { size: 16, className: "mr-2" }),
                            "查看歷史",
                          ],
                        }),
                        n.jsxs("button", {
                          onClick: () => a(!0),
                          className:
                            "flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors text-sm",
                          children: [
                            n.jsx(pt, { size: 16, className: "mr-2" }),
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
                    : e.map((g) => {
                        const [x, y] = [g.originalDrug, g.replacementDrug];
                        return n.jsxs(
                          "div",
                          {
                            className: `p-3 rounded-lg border ${c(g.priority)}`,
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
                                        children: y,
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
                                        children: ["原因: ", g.reason],
                                      }),
                                    ],
                                  }),
                                  n.jsxs("div", {
                                    className: "flex items-center",
                                    children: [
                                      n.jsx(Ks, {
                                        size: 14,
                                        className: "mr-2 text-gray-400",
                                      }),
                                      n.jsxs("span", {
                                        children: [
                                          "生效日期: ",
                                          u(g.effectiveDate),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          g.id || `${g.originalDrug}`,
                        );
                      }),
              }),
            }),
          ],
        }),
        n.jsx(H0, { isOpen: l, onClose: () => a(!1), onSuccess: d }),
        n.jsx(B0, { isOpen: i, onClose: () => o(!1), onSuccess: m }),
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
            className: `h-full p-4 border rounded-xl transition-colors ${s(a.priority)}`,
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
                      n.jsx(Ks, { size: 16, className: "mr-2 text-gray-400" }),
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
  }) =>
    t
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
                  n.jsx(Ie, { size: 20, className: "text-blue-600 mr-2" }),
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
                    children: n.jsx(rr, { size: 18 }),
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
                      n.jsx(Ie, {
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
                                      i.serverName,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                        ],
                      },
                      a.id,
                    ),
                  ),
          }),
        }),
        n.jsx(pi, {
          isOpen: s,
          onClose: () => l(!1),
          sectionKey: "inventory",
          sectionTitle: "即時庫存重點",
        }),
      ],
    });
  },
  K0 = ({ inventoryHighlights: e }) => {
    const [t, r] = w.useState(0),
      l = (() => {
        const m = localStorage.getItem("focusTable_inventory_itemsPerPage");
        return m ? parseInt(m, 10) : 5;
      })();
    w.useEffect(() => {
      if (e.length <= l) return;
      const m = setInterval(() => {
        r((g) => {
          const x = g + l;
          return x >= e.length ? 0 : x;
        });
      }, 8e3);
      return () => clearInterval(m);
    }, [e.length, l]);
    const a = e.slice(t, t + l),
      i = Math.ceil(e.length / l),
      o = Math.floor(t / l) + 1,
      c = Array.from(
        new Set(
          e.flatMap((m) => (m.serverData || []).map((g) => g.serverName)),
        ),
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
                    n.jsx(Ie, { size: 20, className: "mr-2 text-blue-600" }),
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
                      n.jsx(Ie, {
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
                            n.jsx("col", { style: { width: `${d}%` } }, m),
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
                                m,
                              ),
                            ),
                          ],
                        }),
                      }),
                      n.jsx("tbody", {
                        children: a.map((m, g) =>
                          n.jsxs(
                            "tr",
                            {
                              className: `border-b border-gray-200 transition-colors ${g % 2 === 0 ? "bg-white hover:bg-gray-300" : "bg-gray-200 hover:bg-gray-300"}`,
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
                                  const y = (m.serverData || []).find(
                                      (k) => k.serverName === x,
                                    ),
                                    j = y ? y.qty : 0;
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
                                    x,
                                  );
                                }),
                              ],
                            },
                            `${t}-${g}`,
                          ),
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
  }) =>
    t
      ? n.jsx(K0, { inventoryHighlights: e })
      : n.jsx(G0, { inventoryHighlights: e, showInFocus: r, onFocusToggle: s });
class Y0 {
  constructor() {
    ((this.audioContext = null),
      (this.isEnabled = !0),
      (this.selectedSound = "ding"),
      (this.activeNodes = new Set()),
      (this.repeatCount = 1),
      (this.repeatInterval = 0.5),
      (this.volume = 0.5),
      this.initializeAudioContext(),
      this.loadSettings(),
      this.setupVisibilityHandler());
  }
  setupVisibilityHandler() {
    document.addEventListener("visibilitychange", () => {
      !document.hidden &&
        this.audioContext &&
        (console.log(
          "[NotificationSound] Page became visible, checking AudioContext state:",
          this.audioContext.state,
        ),
        this.audioContext.state === "suspended" &&
          console.log(
            "[NotificationSound] AudioContext suspended, will resume on next play",
          ));
    });
  }
  initializeAudioContext() {
    try {
      ((this.audioContext = new (
        window.AudioContext || window.webkitAudioContext
      )()),
        console.log(
          "[NotificationSound] AudioContext initialized, state:",
          this.audioContext.state,
        ));
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
          "[NotificationSound] AudioContext is null, initializing...",
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
        "[NotificationSound] AudioContext is closed, recreating...",
      ),
      this.initializeAudioContext(),
      !this.audioContext)
    )
      return (
        console.error("[NotificationSound] Failed to recreate AudioContext"),
        !1
      );
    if (this.audioContext.state === "suspended") {
      console.log(
        "[NotificationSound] AudioContext is suspended, attempting to resume...",
      );
      try {
        if (
          (await this.audioContext.resume(),
          console.log(
            "[NotificationSound] AudioContext resumed successfully, new state:",
            this.audioContext.state,
          ),
          this.audioContext.state !== "running")
        )
          return (
            console.error(
              "[NotificationSound] AudioContext failed to resume, state:",
              this.audioContext.state,
            ),
            !1
          );
      } catch (s) {
        return (
          console.error(
            "[NotificationSound] Failed to resume AudioContext:",
            s,
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
        this.audioContext.state,
      ),
      t
    );
  }
  cleanupNode(t, r = 0) {
    setTimeout(() => {
      try {
        (t.disconnect(),
          this.activeNodes.delete(t),
          console.log(
            "[NotificationSound] Node cleaned up, active nodes:",
            this.activeNodes.size,
          ));
      } catch (s) {
        console.warn("[NotificationSound] Error cleaning up node:", s);
      }
    }, r);
  }
  createDingSound() {
    if (!this.audioContext) {
      console.error(
        "[NotificationSound] Cannot create ding sound: audioContext is null",
      );
      return;
    }
    const t = this.audioContext.createOscillator(),
      r = this.audioContext.createGain();
    (this.activeNodes.add(t),
      this.activeNodes.add(r),
      t.connect(r),
      r.connect(this.audioContext.destination),
      t.frequency.setValueAtTime(800, this.audioContext.currentTime),
      (t.type = "sine"),
      r.gain.setValueAtTime(this.volume, this.audioContext.currentTime),
      r.gain.exponentialRampToValueAtTime(
        0.01,
        this.audioContext.currentTime + 0.3,
      ),
      t.start(this.audioContext.currentTime),
      t.stop(this.audioContext.currentTime + 0.3),
      this.cleanupNode(t, 350),
      this.cleanupNode(r, 350),
      console.log(
        "[NotificationSound] Ding sound created, volume:",
        this.volume,
        "active nodes:",
        this.activeNodes.size,
      ));
  }
  createChimeSound() {
    if (!this.audioContext) {
      console.error(
        "[NotificationSound] Cannot create chime sound: audioContext is null",
      );
      return;
    }
    const t = this.audioContext.currentTime;
    ([1e3, 1200].forEach((r, s) => {
      const l = this.audioContext.createOscillator(),
        a = this.audioContext.createGain();
      (this.activeNodes.add(l),
        this.activeNodes.add(a),
        l.connect(a),
        a.connect(this.audioContext.destination),
        l.frequency.setValueAtTime(r, t),
        (l.type = "sine"));
      const i = t + s * 0.15;
      (a.gain.setValueAtTime(0, i),
        a.gain.linearRampToValueAtTime(0.4 * this.volume, i + 0.02),
        a.gain.exponentialRampToValueAtTime(0.01, i + 0.4),
        l.start(i),
        l.stop(i + 0.4),
        this.cleanupNode(l, (i - t + 0.45) * 1e3),
        this.cleanupNode(a, (i - t + 0.45) * 1e3));
    }),
      console.log(
        "[NotificationSound] Chime sound created, volume:",
        this.volume,
        "active nodes:",
        this.activeNodes.size,
      ));
  }
  createBellSound() {
    if (!this.audioContext) {
      console.error(
        "[NotificationSound] Cannot create bell sound: audioContext is null",
      );
      return;
    }
    const t = this.audioContext.currentTime;
    ([600, 800, 1e3].forEach((r, s) => {
      const l = this.audioContext.createOscillator(),
        a = this.audioContext.createGain();
      (this.activeNodes.add(l),
        this.activeNodes.add(a),
        l.connect(a),
        a.connect(this.audioContext.destination),
        l.frequency.setValueAtTime(r, t),
        (l.type = "triangle"));
      const i = t + s * 0.1;
      (a.gain.setValueAtTime(0, i),
        a.gain.linearRampToValueAtTime(0.3 * this.volume, i + 0.02),
        a.gain.exponentialRampToValueAtTime(0.01, i + 0.5),
        l.start(i),
        l.stop(i + 0.5),
        this.cleanupNode(l, (i - t + 0.55) * 1e3),
        this.cleanupNode(a, (i - t + 0.55) * 1e3));
    }),
      console.log(
        "[NotificationSound] Bell sound created, volume:",
        this.volume,
        "active nodes:",
        this.activeNodes.size,
      ));
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
        this.isEnabled,
      ),
      !this.isEnabled)
    ) {
      console.log(
        "[NotificationSound] Notification is disabled, skipping sound",
      );
      return;
    }
    try {
      if (!(await this.ensureAudioContext()))
        throw (
          console.error(
            "[NotificationSound] AudioContext is not ready, cannot play sound",
          ),
          new Error("AudioContext is not ready")
        );
      (console.log("[NotificationSound] ===== 開始播放音效 ====="),
        console.log("[NotificationSound] 音效類型:", this.selectedSound),
        console.log("[NotificationSound] 音量:", this.volume),
        console.log("[NotificationSound] 重複次數:", this.repeatCount),
        console.log("[NotificationSound] 間隔秒數:", this.repeatInterval),
        await this.playRepeatedSound(
          this.selectedSound,
          this.repeatCount,
          this.repeatInterval,
        ),
        console.log(
          "[NotificationSound] Notification sound played successfully",
        ));
    } catch (t) {
      (console.error(
        "[NotificationSound] Failed to play notification sound:",
        t,
      ),
        (this.audioContext = null),
        this.initializeAudioContext());
    }
  }
  async playRepeatedSound(t, r, s) {
    for (let l = 0; l < r; l++)
      (console.log(`[NotificationSound] 播放第 ${l + 1} / ${r} 次`),
        this.playSound(t),
        l < r - 1 && (await new Promise((a) => setTimeout(a, s * 1e3))));
  }
  async playPreview(t) {
    console.log("[NotificationSound] playPreview called, soundType:", t);
    try {
      if (!(await this.ensureAudioContext()))
        throw (
          console.error(
            "[NotificationSound] AudioContext is not ready, cannot play preview",
          ),
          new Error("AudioContext is not ready")
        );
      (console.log(
        "[NotificationSound] 預覽音效 - 重複次數:",
        this.repeatCount,
        "間隔:",
        this.repeatInterval,
      ),
        await this.playRepeatedSound(t, this.repeatCount, this.repeatInterval),
        console.log("[NotificationSound] Preview sound played successfully"));
    } catch (r) {
      (console.error("[NotificationSound] Failed to play preview sound:", r),
        (this.audioContext = null),
        this.initializeAudioContext());
    }
  }
  enable() {
    (console.log("[NotificationSound] Enabling notifications"),
      (this.isEnabled = !0),
      this.saveSettings());
  }
  disable() {
    (console.log("[NotificationSound] Disabling notifications"),
      (this.isEnabled = !1),
      this.saveSettings());
  }
  toggle() {
    return (
      (this.isEnabled = !this.isEnabled),
      console.log(
        "[NotificationSound] Toggled notifications, new state:",
        this.isEnabled,
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
    (console.log("[NotificationSound] Setting sound type:", t),
      (this.selectedSound = t),
      this.saveSettings());
  }
  getRepeatCount() {
    return this.repeatCount;
  }
  setRepeatCount(t) {
    ((this.repeatCount = Math.max(1, Math.min(5, t))),
      console.log(
        "[NotificationSound] Setting repeat count:",
        this.repeatCount,
      ),
      this.saveSettings());
  }
  getRepeatInterval() {
    return this.repeatInterval;
  }
  setRepeatInterval(t) {
    ((this.repeatInterval = Math.max(0.5, Math.min(2, t))),
      console.log(
        "[NotificationSound] Setting repeat interval:",
        this.repeatInterval,
      ),
      this.saveSettings());
  }
  getVolume() {
    return this.volume;
  }
  setVolume(t) {
    ((this.volume = Math.max(0, Math.min(1, t))),
      console.log("[NotificationSound] Setting volume:", this.volume),
      this.saveSettings());
  }
  saveSettings() {
    try {
      (localStorage.setItem(
        "internalRequestNotificationEnabled",
        JSON.stringify(this.isEnabled),
      ),
        localStorage.setItem(
          "internalRequestNotificationSound",
          this.selectedSound,
        ),
        localStorage.setItem(
          "internalRequestNotificationRepeatCount",
          JSON.stringify(this.repeatCount),
        ),
        localStorage.setItem(
          "internalRequestNotificationRepeatInterval",
          JSON.stringify(this.repeatInterval),
        ),
        localStorage.setItem(
          "internalRequestNotificationVolume",
          JSON.stringify(this.volume),
        ),
        console.log("[NotificationSound] Settings saved:", {
          isEnabled: this.isEnabled,
          selectedSound: this.selectedSound,
          repeatCount: this.repeatCount,
          repeatInterval: this.repeatInterval,
          volume: this.volume,
        }));
    } catch (t) {
      console.error(
        "[NotificationSound] Failed to save notification settings:",
        t,
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
        "internalRequestNotificationRepeatInterval",
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
        t,
      );
    }
  }
  diagnose() {
    var t;
    (console.log("[NotificationSound] === DIAGNOSTIC INFO ==="),
      console.log("AudioContext exists:", !!this.audioContext),
      console.log(
        "AudioContext state:",
        (t = this.audioContext) == null ? void 0 : t.state,
      ),
      console.log("Is enabled:", this.isEnabled),
      console.log("Selected sound:", this.selectedSound),
      console.log("Volume:", this.volume),
      console.log("Repeat count:", this.repeatCount),
      console.log("Repeat interval:", this.repeatInterval),
      console.log("Active nodes count:", this.activeNodes.size),
      console.log("====================================="));
  }
}
const xe = new Y0(),
  X0 = ({ isOpen: e, onClose: t }) => {
    const [r, s] = w.useState(xe.getSelectedSound()),
      [l, a] = w.useState(xe.getRepeatCount()),
      [i, o] = w.useState(xe.getRepeatInterval()),
      [c, u] = w.useState(xe.getVolume()),
      [d, m] = w.useState(() => {
        const v = localStorage.getItem("internalRequests_displayMode");
        return v || "all";
      }),
      [g, x] = w.useState(() => {
        const v = localStorage.getItem("internalRequests_notifyMode");
        return v || "urgentOnly";
      }),
      [y, j] = w.useState(() => {
        const v = localStorage.getItem("internalRequests_reminderInterval");
        return v ? parseInt(v, 10) : 5;
      }),
      k = [
        { type: "ding", name: "叮咚聲", description: "單音清脆提示音" },
        { type: "chime", name: "鐘鈴聲", description: "雙音和諧提示音" },
        { type: "bell", name: "鈴聲", description: "三音漸進提示音" },
      ],
      p = (v) => {
        xe.playPreview(v);
      },
      f = (v) => {
        (s(v), xe.setSelectedSound(v));
      },
      h = (v) => {
        (a(v), xe.setRepeatCount(v));
      },
      N = (v) => {
        (o(v), xe.setRepeatInterval(v));
      },
      D = (v) => {
        (u(v), xe.setVolume(v));
      },
      I = (v) => {
        (m(v),
          localStorage.setItem("internalRequests_displayMode", v),
          window.dispatchEvent(
            new CustomEvent("internalRequestsSettingChanged", {
              detail: { displayMode: v },
            }),
          ));
      },
      z = (v) => {
        (x(v),
          localStorage.setItem("internalRequests_notifyMode", v),
          window.dispatchEvent(
            new CustomEvent("internalRequestsSettingChanged", {
              detail: { notifyMode: v },
            }),
          ));
      },
      _ = (v) => {
        (j(v),
          localStorage.setItem(
            "internalRequests_reminderInterval",
            v.toString(),
          ),
          window.dispatchEvent(
            new CustomEvent("internalRequestsSettingChanged", {
              detail: { reminderInterval: v },
            }),
          ));
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
                    children: n.jsx(Le, { size: 24 }),
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
                        children: k.map((v) =>
                          n.jsx(
                            "div",
                            {
                              className: `border-2 rounded-lg p-4 transition-all cursor-pointer ${r === v.type ? "border-teal-500 bg-teal-50" : "border-gray-200 hover:border-gray-300"}`,
                              onClick: () => f(v.type),
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
                                            children: v.name,
                                          }),
                                          r === v.type &&
                                            n.jsx(ar, {
                                              size: 20,
                                              className: "text-teal-600",
                                            }),
                                        ],
                                      }),
                                      n.jsx("p", {
                                        className: "text-sm text-gray-600",
                                        children: v.description,
                                      }),
                                    ],
                                  }),
                                  n.jsx("button", {
                                    onClick: (E) => {
                                      (E.stopPropagation(), p(v.type));
                                    },
                                    className:
                                      "ml-4 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors",
                                    title: "試聽音效",
                                    children: n.jsx(Co, {
                                      size: 20,
                                      className: "text-gray-700",
                                    }),
                                  }),
                                ],
                              }),
                            },
                            v.type,
                          ),
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
                                onChange: (v) => D(parseFloat(v.target.value)),
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
                                onChange: (v) => h(parseInt(v.target.value)),
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
                                  onChange: (v) =>
                                    N(parseFloat(v.target.value)),
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
                        children: "定期提醒設定",
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
                                    children: "提醒間隔",
                                  }),
                                  n.jsxs("span", {
                                    className:
                                      "text-lg font-semibold text-teal-600",
                                    children: [y, " 分鐘"],
                                  }),
                                ],
                              }),
                              n.jsx("input", {
                                type: "range",
                                min: "2",
                                max: "8",
                                step: "1",
                                value: y,
                                onChange: (v) => _(parseInt(v.target.value)),
                                className:
                                  "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600",
                              }),
                              n.jsxs("div", {
                                className:
                                  "flex justify-between text-xs text-gray-500 mt-1",
                                children: [
                                  n.jsx("span", { children: "2 分鐘" }),
                                  n.jsx("span", { children: "8 分鐘" }),
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
                                      "系統會每隔指定時間檢查是否有未處理的緊急申領",
                                  }),
                                  n.jsx("li", {
                                    children:
                                      "只要有緊急申領未處理，就會播放提醒音效",
                                  }),
                                  n.jsx("li", {
                                    children:
                                      "此功能獨立於新申領通知，用於提醒尚未處理的緊急申領",
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
                        children: "通知觸發條件",
                      }),
                      n.jsxs("div", {
                        className: "space-y-3",
                        children: [
                          n.jsx("div", {
                            className: `border-2 rounded-lg p-4 transition-all cursor-pointer ${g === "urgentOnly" ? "border-teal-500 bg-teal-50" : "border-gray-200 hover:border-gray-300"}`,
                            onClick: () => z("urgentOnly"),
                            children: n.jsx("div", {
                              className: "flex items-center justify-between",
                              children: n.jsxs("div", {
                                className: "flex items-center space-x-3",
                                children: [
                                  n.jsx(Oe, {
                                    size: 24,
                                    className: "text-red-600",
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
                                            children: "僅通知緊急申領",
                                          }),
                                          g === "urgentOnly" &&
                                            n.jsx(ar, {
                                              size: 18,
                                              className: "text-teal-600",
                                            }),
                                        ],
                                      }),
                                      n.jsx("p", {
                                        className: "text-sm text-gray-600",
                                        children: "只有新的緊急申領才播放音效",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                          n.jsx("div", {
                            className: `border-2 rounded-lg p-4 transition-all cursor-pointer ${g === "all" ? "border-teal-500 bg-teal-50" : "border-gray-200 hover:border-gray-300"}`,
                            onClick: () => z("all"),
                            children: n.jsx("div", {
                              className: "flex items-center justify-between",
                              children: n.jsxs("div", {
                                className: "flex items-center space-x-3",
                                children: [
                                  n.jsx(Co, {
                                    size: 24,
                                    className: "text-teal-600",
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
                                            children: "通知所有新申領",
                                          }),
                                          g === "all" &&
                                            n.jsx(ar, {
                                              size: 18,
                                              className: "text-teal-600",
                                            }),
                                        ],
                                      }),
                                      n.jsx("p", {
                                        className: "text-sm text-gray-600",
                                        children:
                                          "不論緊急或一般申領，只要有新資料就播放音效",
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
                            className: `border-2 rounded-lg p-4 transition-all cursor-pointer ${d === "all" ? "border-teal-500 bg-teal-50" : "border-gray-200 hover:border-gray-300"}`,
                            onClick: () => I("all"),
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
                                            n.jsx(ar, {
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
                            className: `border-2 rounded-lg p-4 transition-all cursor-pointer ${d === "separate" ? "border-teal-500 bg-teal-50" : "border-gray-200 hover:border-gray-300"}`,
                            onClick: () => I("separate"),
                            children: n.jsx("div", {
                              className: "flex items-center justify-between",
                              children: n.jsxs("div", {
                                className: "flex items-center space-x-3",
                                children: [
                                  n.jsx(Am, {
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
                                            n.jsx(ar, {
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
                            className: `border-2 rounded-lg p-4 transition-all cursor-pointer ${d === "urgentOnly" ? "border-teal-500 bg-teal-50" : "border-gray-200 hover:border-gray-300"}`,
                            onClick: () => I("urgentOnly"),
                            children: n.jsx("div", {
                              className: "flex items-center justify-between",
                              children: n.jsxs("div", {
                                className: "flex items-center space-x-3",
                                children: [
                                  n.jsx(Oe, {
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
                                            n.jsx(ar, {
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
    const [s, l] = w.useState(xe.getStatus()),
      [a, i] = w.useState(!1),
      o = w.useRef(new Set()),
      c = w.useRef(new Set()),
      u = w.useRef(!0),
      [d, m] = w.useState(() => {
        const f = localStorage.getItem("internalRequests_notifyMode");
        return f || "urgentOnly";
      }),
      [g, x] = w.useState(() => {
        const f = localStorage.getItem("internalRequests_reminderInterval");
        return f ? parseInt(f, 10) : 5;
      });
    (w.useEffect(() => {
      const f = (h) => {
        var D, I;
        const N = h;
        (((D = N.detail) == null ? void 0 : D.notifyMode) !== void 0 &&
          m(N.detail.notifyMode),
          ((I = N.detail) == null ? void 0 : I.reminderInterval) !== void 0 &&
            x(N.detail.reminderInterval));
      };
      return (
        window.addEventListener("internalRequestsSettingChanged", f),
        () => window.removeEventListener("internalRequestsSettingChanged", f)
      );
    }, []),
      w.useEffect(() => {
        u.current &&
          e.length > 0 &&
          (console.log("======= 初始載入完成，開始監控申領通知 ======="),
          console.log("通知模式:", d),
          (u.current = !1));
        const f = new Set(),
          h = new Set();
        e.forEach((D) => {
          D.state === "等待過帳" &&
            (h.add(D.id), D.actionType === "緊急申領" && f.add(D.id));
        });
        let N = !1;
        (d === "urgentOnly"
          ? Array.from(f).some((I) => !o.current.has(I)) &&
            !u.current &&
            (console.log("======= 檢測到新的緊急申領，準備播放音效 ======="),
            console.log("當前緊急申領 IDs:", Array.from(f)),
            console.log("之前緊急申領 IDs:", Array.from(o.current)),
            (N = !0))
          : d === "all" &&
            Array.from(h).some((I) => !c.current.has(I)) &&
            !u.current &&
            (console.log(
              "======= 檢測到新的申領（所有類型），準備播放音效 =======",
            ),
            console.log("當前待處理申領 IDs:", Array.from(h)),
            console.log("之前待處理申領 IDs:", Array.from(c.current)),
            (N = !0)),
          N &&
            (async () => {
              try {
                (await xe.playNotification(),
                  console.log("======= 音效播放完成 ======="));
              } catch (D) {
                console.error("======= 音效播放失敗 =======", D);
              }
            })(),
          (o.current = f),
          (c.current = h));
      }, [e, d]));
    const y = () => {
        const f = xe.toggle();
        l(f);
      },
      j = (f, h) => {
        if (f === "等待過帳" && h === "緊急申領")
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
      k = (f) => {
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
      p = [...e].sort((f, h) => {
        if (f.state === "等待過帳" && f.actionType === "緊急申領") return -1;
        if (h.state === "等待過帳" && h.actionType === "緊急申領") return 1;
        const N = { 等待過帳: 0, 已過帳: 1, 已簽收: 2 },
          D = N[f.state],
          I = N[h.state];
        if (D !== I) return D - I;
        try {
          const z = new Date(f.requestTime.replace(/\//g, "-")).getTime();
          return new Date(h.requestTime.replace(/\//g, "-")).getTime() - z;
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
                    children: n.jsx(rr, { size: 18 }),
                  }),
                  n.jsx("button", {
                    onClick: y,
                    className: `ml-2 p-2 rounded-lg transition-colors ${s ? "bg-green-100 text-green-600 hover:bg-green-200" : "bg-gray-100 text-gray-400 hover:bg-gray-200"}`,
                    title: s ? "通知已啟用" : "通知已關閉",
                    children: s
                      ? n.jsx(Vu, { size: 18, className: "fill-current" })
                      : n.jsx(qu, { size: 18 }),
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
              p.length === 0
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
                : p.map(
                    (f) => (
                      f.state === "等待過帳" && f.actionType,
                      n.jsxs(
                        "div",
                        {
                          className: `p-3 border-2 rounded-lg transition-colors ${j(f.state, f.actionType)}`,
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
                                              n.jsx(Oe, {
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
                                        n.jsx(Hu, {
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
                                        n.jsx(Ie, {
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
                                    n.jsx(Ys, {
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
                                        k(f.requestTime),
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
                        f.id,
                      )
                    ),
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
      [u, d] = w.useState(xe.getStatus()),
      [m, g] = w.useState(() => {
        const S = localStorage.getItem("internalRequests_displayMode");
        return S || "all";
      }),
      [x, y] = w.useState(() => {
        const S = localStorage.getItem("internalRequests_notifyMode");
        return S || "urgentOnly";
      }),
      [j, k] = w.useState(() => {
        const S = localStorage.getItem("internalRequests_reminderInterval");
        return S ? parseInt(S, 10) : 5;
      }),
      p = w.useRef(new Set()),
      f = w.useRef(new Set()),
      h = w.useRef(!0),
      N = w.useRef(e),
      [D, I] = w.useState(Date.now());
    (w.useEffect(() => {
      N.current = e;
    }, [e]),
      w.useEffect(() => {
        try {
          if (
            (console.log(
              "[InternalRequestsCarousel] Checking for new urgent requests, total requests:",
              e.length,
            ),
            !Array.isArray(e))
          ) {
            console.error(
              "[InternalRequestsCarousel] internalRequests is not an array:",
              typeof e,
            );
            return;
          }
          h.current &&
            e.length > 0 &&
            (console.log(
              "======= [InternalRequestsCarousel] 初始載入完成，開始監控申領通知 =======",
            ),
            console.log("[InternalRequestsCarousel] 通知模式:", x),
            (h.current = !1));
          const S = new Set(),
            b = new Set();
          (e.forEach((U) => {
            if (!U || typeof U != "object") {
              console.warn(
                "[InternalRequestsCarousel] Invalid request object:",
                U,
              );
              return;
            }
            U.state === "等待過帳" &&
              (U.id
                ? (b.add(U.id),
                  U.actionType === "緊急申領" &&
                    (S.add(U.id),
                    console.log(
                      "[InternalRequestsCarousel] Found urgent request:",
                      { id: U.id, name: U.name },
                    )))
                : console.warn(
                    "[InternalRequestsCarousel] Request missing ID:",
                    U,
                  ));
          }),
            console.log(
              "[InternalRequestsCarousel] Current urgent requests:",
              S.size,
            ),
            console.log(
              "[InternalRequestsCarousel] Previous urgent requests:",
              p.current.size,
            ),
            console.log(
              "[InternalRequestsCarousel] Current all requests:",
              b.size,
            ),
            console.log(
              "[InternalRequestsCarousel] Previous all requests:",
              f.current.size,
            ));
          let P = !1,
            A = [];
          if (
            (x === "urgentOnly"
              ? ((A = Array.from(S).filter((U) => !p.current.has(U))),
                A.length > 0 &&
                  !h.current &&
                  (console.log(
                    "======= [InternalRequestsCarousel] 檢測到新的緊急申領，準備播放音效 =======",
                  ),
                  console.log(
                    "[InternalRequestsCarousel] 當前緊急申領 IDs:",
                    Array.from(S),
                  ),
                  console.log(
                    "[InternalRequestsCarousel] 之前緊急申領 IDs:",
                    Array.from(p.current),
                  ),
                  console.log(
                    "[InternalRequestsCarousel] 新增的緊急申領 IDs:",
                    A,
                  ),
                  (P = !0)))
              : x === "all" &&
                ((A = Array.from(b).filter((U) => !f.current.has(U))),
                A.length > 0 &&
                  !h.current &&
                  (console.log(
                    "======= [InternalRequestsCarousel] 檢測到新的申領（所有類型），準備播放音效 =======",
                  ),
                  console.log(
                    "[InternalRequestsCarousel] 當前待處理申領 IDs:",
                    Array.from(b),
                  ),
                  console.log(
                    "[InternalRequestsCarousel] 之前待處理申領 IDs:",
                    Array.from(f.current),
                  ),
                  console.log("[InternalRequestsCarousel] 新增的申領 IDs:", A),
                  (P = !0))),
            console.log(
              "[InternalRequestsCarousel] New requests:",
              A.length,
              A,
            ),
            console.log(
              "[InternalRequestsCarousel] Should play notification:",
              P,
            ),
            console.log(
              "[InternalRequestsCarousel] Is initial load:",
              h.current,
            ),
            P)
          ) {
            (console.log("[InternalRequestsCarousel] 當前顯示模式:", m),
              m === "all"
                ? (console.log(
                    "[InternalRequestsCarousel] 重置輪播到第一頁 (all 模式)",
                  ),
                  s(0))
                : m === "separate"
                  ? (console.log(
                      "[InternalRequestsCarousel] 重置緊急申領輪播到第一頁 (separate 模式)",
                    ),
                    a(0))
                  : m === "urgentOnly" &&
                    (console.log(
                      "[InternalRequestsCarousel] 重置緊急申領輪播到第一頁 (urgentOnly 模式)",
                    ),
                    a(0)));
            const U = Date.now();
            (console.log(
              "[InternalRequestsCarousel] 重置輪播計時器，時間戳:",
              U,
            ),
              I(U),
              (async () => {
                try {
                  (await xe.playNotification(),
                    console.log(
                      "======= [InternalRequestsCarousel] 音效播放完成 =======",
                    ));
                } catch (we) {
                  console.error(
                    "======= [InternalRequestsCarousel] 音效播放失敗 =======",
                    we,
                  );
                }
              })());
          } else
            h.current
              ? console.log(
                  "[InternalRequestsCarousel] 初始載入中，跳過音效通知",
                )
              : A.length === 0 &&
                console.log(
                  "[InternalRequestsCarousel] 無新的申領，跳過音效通知",
                );
          ((p.current = new Set(S)), (f.current = new Set(b)));
        } catch (S) {
          console.error(
            "[InternalRequestsCarousel] Error in urgent request detection:",
            S,
          );
        }
      }, [e, m, x]),
      w.useEffect(() => {
        const S = (b) => {
          var A, U, we;
          const P = b;
          (((A = P.detail) == null ? void 0 : A.displayMode) !== void 0 &&
            g(P.detail.displayMode),
            ((U = P.detail) == null ? void 0 : U.notifyMode) !== void 0 &&
              y(P.detail.notifyMode),
            ((we = P.detail) == null ? void 0 : we.reminderInterval) !==
              void 0 && k(P.detail.reminderInterval));
        };
        return (
          window.addEventListener("internalRequestsSettingChanged", S),
          () => window.removeEventListener("internalRequestsSettingChanged", S)
        );
      }, []),
      w.useEffect(() => {
        (console.log(
          "======= [InternalRequestsCarousel] 設置定期提醒計時器 =======",
        ),
          console.log("[InternalRequestsCarousel] 提醒間隔:", j, "分鐘"));
        const S = setInterval(
          () => {
            const b = N.current.filter(
              (P) => P.state === "等待過帳" && P.actionType === "緊急申領",
            );
            b.length > 0
              ? (console.log(
                  "======= [InternalRequestsCarousel] 定期提醒：檢測到未處理的緊急申領 =======",
                ),
                console.log(
                  "[InternalRequestsCarousel] 緊急申領數量:",
                  b.length,
                ),
                console.log(
                  "[InternalRequestsCarousel] 緊急申領 IDs:",
                  b.map((P) => P.id),
                ),
                (async () => {
                  try {
                    (await xe.playNotification(),
                      console.log(
                        "======= [InternalRequestsCarousel] 定期提醒音效播放完成 =======",
                      ));
                  } catch (P) {
                    console.error(
                      "======= [InternalRequestsCarousel] 定期提醒音效播放失敗 =======",
                      P,
                    );
                  }
                })())
              : console.log(
                  "======= [InternalRequestsCarousel] 定期提醒：無未處理的緊急申領 =======",
                );
          },
          j * 60 * 1e3,
        );
        return () => {
          (console.log(
            "======= [InternalRequestsCarousel] 清除定期提醒計時器 =======",
          ),
            clearInterval(S));
        };
      }, [j]));
    const z = e.filter((S) => S.actionType === "緊急申領").length,
      _ = e.filter((S) => S.actionType !== "緊急申領").length,
      v = e.length;
    w.useEffect(() => {
      if (m === "separate") {
        const S = [];
        if (z > c) {
          const b = setInterval(() => {
            a((P) => {
              const A = P + c;
              return A >= z ? 0 : A;
            });
          }, 8e3);
          S.push(b);
        }
        if (_ > c) {
          const b = setInterval(() => {
            o((P) => {
              const A = P + c;
              return A >= _ ? 0 : A;
            });
          }, 8e3);
          S.push(b);
        }
        return () => S.forEach((b) => clearInterval(b));
      } else {
        const S = m === "urgentOnly" ? z : v;
        if (S > c) {
          const b = setInterval(() => {
            s((P) => {
              const A = P + c;
              return A >= S ? 0 : A;
            });
          }, 8e3);
          return () => clearInterval(b);
        }
      }
    }, [z, _, v, m, c, D]);
    const E = () => {
        const S = xe.toggle();
        d(S);
      },
      L = (S, b) => {
        if (S === "等待過帳" && b === "緊急申領")
          return "bg-red-100 border-red-300";
        switch (S) {
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
      $ = (S, b) => {
        if (S === "等待過帳" && b === "緊急申領") return "text-gray-800";
        switch (S) {
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
      B = (S) => {
        try {
          return new Date(S.replace(/\//g, "-")).toLocaleString("zh-TW", {
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          });
        } catch {
          return S;
        }
      },
      se = (S, b) => {
        const P = S.state === "等待過帳" && S.actionType === "緊急申領";
        return n.jsx("div", {
          className: "h-full flex flex-col",
          children: n.jsxs("div", {
            className: `flex-1 p-3 border-2 rounded-lg transition-all flex flex-col ${L(S.state, S.actionType)}`,
            children: [
              n.jsxs("div", {
                className: "flex items-start justify-between mb-1 gap-1",
                children: [
                  n.jsxs("div", {
                    className: "flex-1 min-w-0",
                    children: [
                      n.jsx("h4", {
                        className: `font-semibold text-lg ${$(S.state, S.actionType)} leading-tight truncate mb-1`,
                        title: S.name,
                        children: S.name,
                      }),
                      n.jsx("div", {
                        className: `text-sm ${$(S.state, S.actionType)}`,
                        children: S.code,
                      }),
                    ],
                  }),
                  S.actionType === "緊急申領" &&
                    n.jsxs("div", {
                      className:
                        "inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-red-600 text-white flex-shrink-0",
                      children: [
                        n.jsx(Oe, { size: 12, className: "mr-1" }),
                        "緊急申領",
                      ],
                    }),
                ],
              }),
              n.jsxs("div", {
                className: `grid grid-cols-2 gap-1 text-base ${$(S.state, S.actionType)} flex-1 min-h-0`,
                children: [
                  n.jsxs("div", {
                    className: "space-y-1",
                    children: [
                      n.jsxs("div", {
                        className: "flex items-center min-w-0",
                        children: [
                          n.jsx(Hu, {
                            size: 20,
                            className: `mr-2 flex-shrink-0 ${P ? "text-gray-800" : "text-gray-400"}`,
                          }),
                          n.jsx("span", {
                            className: "truncate",
                            children: n.jsx("strong", {
                              children: S.requestingUnit,
                            }),
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className: "flex items-center min-w-0",
                        children: [
                          n.jsx(Ys, {
                            size: 20,
                            className: `mr-2 flex-shrink-0 ${P ? "text-gray-800" : "text-gray-400"}`,
                          }),
                          n.jsx("span", {
                            className: "truncate",
                            children: n.jsx("strong", {
                              children: S.requestingPerson,
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
                          n.jsx(Ie, {
                            size: 20,
                            className: `mr-2 ${P ? "text-gray-800" : "text-gray-400"}`,
                          }),
                          n.jsx("span", {
                            children: n.jsx("strong", {
                              children: S.requestedQuantity,
                            }),
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          n.jsx(Lr, {
                            size: 20,
                            className: `mr-2 ${P ? "text-gray-800" : "text-gray-400"}`,
                          }),
                          n.jsx("span", {
                            children: n.jsx("strong", {
                              children: B(S.requestTime),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              S.remarks &&
                n.jsxs("div", {
                  className: `mt-3 p-2 border rounded-lg text-base flex-shrink-0 ${P ? "bg-red-600 border-red-700 text-white" : "bg-gray-50 border-gray-200 text-gray-700"}`,
                  children: [
                    n.jsx("span", {
                      className: "font-medium",
                      children: "備註: ",
                    }),
                    n.jsx("span", { children: S.remarks }),
                  ],
                }),
            ],
          }),
        });
      },
      ae = e.filter((S) => S.actionType === "緊急申領"),
      M = e.filter((S) => S.actionType !== "緊急申領");
    if (m === "urgentOnly" ? ae.length === 0 : e.length === 0)
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
                  onClick: E,
                  className: `p-2 rounded-lg transition-colors ${u ? "bg-green-100 text-green-600 hover:bg-green-200" : "bg-gray-100 text-gray-400 hover:bg-gray-200"}`,
                  title: u ? "通知已啟用" : "通知已關閉",
                  children: u
                    ? n.jsx(Vu, { size: 18, className: "fill-current" })
                    : n.jsx(qu, { size: 18 }),
                }),
              ],
            }),
          }),
          n.jsx("div", {
            className: "flex-1 flex items-center justify-center",
            children: n.jsxs("div", {
              className: "text-center text-gray-500",
              children: [
                n.jsx(Ie, {
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
    const R = [...e].sort((S, b) => {
      if (S.state === "等待過帳" && S.actionType === "緊急申領") return -1;
      if (b.state === "等待過帳" && b.actionType === "緊急申領") return 1;
      const P = { 等待過帳: 0, 已過帳: 1, 已簽收: 2 },
        A = P[S.state],
        U = P[b.state];
      if (A !== U) return A - U;
      try {
        const we = new Date(S.requestTime.replace(/\//g, "-")).getTime();
        return new Date(b.requestTime.replace(/\//g, "-")).getTime() - we;
      } catch {
        return 0;
      }
    });
    if (m === "separate") {
      const S = ae.slice(l, l + c),
        b = M.slice(i, i + c);
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
                      e.filter((P) => P.state === "等待過帳").length,
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
                        children: ["緊急申領 (", ae.length, ")"],
                      }),
                      n.jsxs("div", {
                        children: [
                          "第 ",
                          Math.floor(l / c) + 1,
                          " / ",
                          Math.ceil(ae.length / c),
                          " 頁",
                        ],
                      }),
                    ],
                  }),
                  n.jsx("div", {
                    className:
                      "flex-1 min-h-0 overflow-hidden flex flex-col gap-2",
                    children:
                      ae.length === 0
                        ? n.jsx("div", {
                            className:
                              "h-full flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg",
                            children: n.jsx("p", {
                              className: "text-sm text-gray-400",
                              children: "暫無緊急申領",
                            }),
                          })
                        : S.map((P, A) =>
                            n.jsx(
                              "div",
                              { className: "flex-1 min-h-0", children: se(P) },
                              P.id,
                            ),
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
                        children: ["一般申領 (", M.length, ")"],
                      }),
                      n.jsxs("div", {
                        children: [
                          "第 ",
                          Math.floor(i / c) + 1,
                          " / ",
                          Math.ceil(M.length / c),
                          " 頁",
                        ],
                      }),
                    ],
                  }),
                  n.jsx("div", {
                    className:
                      "flex-1 min-h-0 overflow-hidden flex flex-col gap-2",
                    children:
                      M.length === 0
                        ? n.jsx("div", {
                            className:
                              "h-full flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg",
                            children: n.jsx("p", {
                              className: "text-sm text-gray-400",
                              children: "暫無一般申領",
                            }),
                          })
                        : b.map((P, A) =>
                            n.jsx(
                              "div",
                              { className: "flex-1 min-h-0", children: se(P) },
                              P.id,
                            ),
                          ),
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    }
    const F =
        m === "urgentOnly" ? R.filter((S) => S.actionType === "緊急申領") : R,
      C = F.slice(r, r + c);
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
                            (S) =>
                              S.state === "等待過帳" &&
                              S.actionType === "緊急申領",
                          ).length
                        : e.filter((S) => S.state === "等待過帳").length,
                      " 項待處理",
                    ],
                  }),
                  n.jsxs("span", {
                    className: "text-sm text-gray-500 font-medium",
                    children: [
                      "第 ",
                      Math.floor(r / c) + 1,
                      " / ",
                      Math.ceil(F.length / c),
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
          children: C.map((S) =>
            n.jsx(
              "div",
              { className: "flex-1 min-h-0", children: se(S) },
              S.id,
            ),
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
  }) =>
    t
      ? n.jsx(Z0, { internalRequests: e, gridHeight: l })
      : n.jsx(J0, { internalRequests: e, showInFocus: r, onFocusToggle: s }),
  eg = ({
    isOpen: e,
    onClose: t,
    dashboardData: r,
    lastRefresh: s,
    sectionVisibility: l,
  }) => {
    const [a, i] = w.useState(new Date()),
      [o, c] = w.useState(C0());
    (w.useEffect(() => {
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
        const m = (g) => {
          g.key === "Escape" && t();
        };
        return (
          e &&
            (document.addEventListener("keydown", m),
            (document.body.style.overflow = "hidden")),
          () => {
            (document.removeEventListener("keydown", m),
              (document.body.style.overflow = "unset"));
          }
        );
      }, [e, t]));
    const u = (m, g) => {
        c((x) => ({ ...x, [m]: { ...x[m], position: g } }));
      },
      d = (m, g) => {
        c((x) => ({ ...x, [m]: { ...x[m], ...g } }));
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
                          className: `${yt.subTitle} font-bold`,
                          children: "藥庫監控系統",
                        }),
                      ],
                    }),
                    n.jsx("div", {
                      className: `${yt.subTitle} font-mono`,
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
                        className: `text-gray-300 ${yt.content}`,
                        children: ["最後更新: ", s.toLocaleTimeString("zh-TW")],
                      }),
                    n.jsx("button", {
                      onClick: t,
                      className:
                        "p-2 hover:bg-gray-700 rounded-lg transition-colors",
                      title: "退出專注模式 (ESC)",
                      children: n.jsx(Le, { size: 24, className: Eo.xlarge }),
                    }),
                  ],
                }),
              ],
            }),
            n.jsx("div", {
              className: "flex-1 p-3 overflow-hidden",
              children: n.jsx("div", {
                className: "h-full grid grid-cols-8 grid-rows-6 gap-4",
                children: Object.entries(l).some(([m, g]) => g)
                  ? n.jsxs(n.Fragment, {
                      children: [
                        l.bulletins &&
                          n.jsx($t, {
                            sectionKey: "bulletins",
                            gridData: o.bulletins,
                            onPositionChange: u,
                            onSizeChange: d,
                            gridArea: Ft(o.bulletins.position, {
                              row: o.bulletins.row,
                              col: o.bulletins.col,
                            }),
                            children: n.jsx(Ku, {
                              bulletins: r.bulletins,
                              isFullscreen: !0,
                            }),
                          }),
                        l.tasks &&
                          n.jsx($t, {
                            sectionKey: "tasks",
                            gridData: o.tasks,
                            onPositionChange: u,
                            onSizeChange: d,
                            gridArea: Ft(o.tasks.position, {
                              row: o.tasks.row,
                              col: o.tasks.col,
                            }),
                            children: n.jsx(Yu, {
                              restockTasks: r.restockTasks,
                              receivingTasks: r.receivingTasks,
                              putAwayTasks: r.putAwayTasks,
                              isFullscreen: !0,
                            }),
                          }),
                        l.incomingDrugs &&
                          n.jsx($t, {
                            sectionKey: "incomingDrugs",
                            gridData: o.incomingDrugs,
                            onPositionChange: u,
                            onSizeChange: d,
                            gridArea: Ft(o.incomingDrugs.position, {
                              row: o.incomingDrugs.row,
                              col: o.incomingDrugs.col,
                            }),
                            children: n.jsx(Xu, {
                              incomingDrugs: r.incomingDrugs,
                              isFullscreen: !0,
                            }),
                          }),
                        l.outOfStock &&
                          n.jsx($t, {
                            sectionKey: "outOfStock",
                            gridData: o.outOfStock,
                            onPositionChange: u,
                            onSizeChange: d,
                            gridArea: Ft(o.outOfStock.position, {
                              row: o.outOfStock.row,
                              col: o.outOfStock.col,
                            }),
                            children: n.jsx(Ju, {
                              outOfStockItems: r.outOfStockItems,
                              isFullscreen: !0,
                            }),
                          }),
                        l.drugReplacements &&
                          n.jsx($t, {
                            sectionKey: "drugReplacements",
                            gridData: o.drugReplacements,
                            onPositionChange: u,
                            onSizeChange: d,
                            gridArea: Ft(o.drugReplacements.position, {
                              row: o.drugReplacements.row,
                              col: o.drugReplacements.col,
                            }),
                            children: n.jsx(Zu, {
                              drugReplacements: r.drugReplacements,
                              isFullscreen: !0,
                            }),
                          }),
                        l.inventory &&
                          n.jsx($t, {
                            sectionKey: "inventory",
                            gridData: o.inventory,
                            onPositionChange: u,
                            onSizeChange: d,
                            gridArea: Ft(o.inventory.position, {
                              row: o.inventory.row,
                              col: o.inventory.col,
                            }),
                            children: n.jsx(ed, {
                              inventoryHighlights: r.inventoryHighlights,
                              isFullscreen: !0,
                            }),
                          }),
                        l.internalRequests &&
                          n.jsx($t, {
                            sectionKey: "internalRequests",
                            gridData: o.internalRequests,
                            onPositionChange: u,
                            onSizeChange: d,
                            gridArea: Ft(o.internalRequests.position, {
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
                            className: `${yt.title} mb-4`,
                            children: "👁️",
                          }),
                          n.jsx("p", {
                            className: yt.subTitle,
                            children: "所有區塊都已隱藏",
                          }),
                          n.jsx("p", {
                            className: `${yt.content} mt-2`,
                            children: "請在一般模式下開啟需要顯示的區塊",
                          }),
                        ],
                      }),
                    }),
              }),
            }),
            n.jsx("div", {
              className: `bg-gray-800 text-gray-300 text-center py-1 ${yt.smallLabel} border-t border-gray-700`,
              children:
                "按 ESC 鍵退出專注顯示模式 | 拖拽標題移動位置 | 拖拽右下角調整大小 | 內容每 8 秒自動輪播",
            }),
          ],
        })
      : null;
  },
  rd = () => {
    const [e, t] = w.useState(!document.hidden);
    return (
      w.useEffect(() => {
        const r = () => {
          const s = !document.hidden;
          (t(s),
            console.log("[usePageVisibility] Page visibility changed:", {
              visible: s,
              visibilityState: document.visibilityState,
              timestamp: new Date().toISOString(),
            }));
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
  tg = ({
    intervalMs: e,
    onPoll: t,
    enabled: r = !0,
    maxRetryDelay: s = 6e4,
  }) => {
    const l = rd(),
      a = w.useRef(Date.now() + e),
      i = w.useRef(!1),
      o = w.useRef(null),
      c = w.useRef(e),
      u = w.useCallback(async () => {
        if (i.current || !r) return;
        i.current = !0;
        const m = Date.now();
        try {
          (console.log(
            "[useRobustPolling] Executing poll at",
            new Date().toISOString(),
            "with interval",
            e,
            "ms",
          ),
            await t(),
            (c.current = e));
          const g = Date.now() - m,
            x = Math.max(0, e - g);
          (console.log(
            "[useRobustPolling] Poll completed successfully, next poll in",
            x,
            "ms",
          ),
            o.current && clearTimeout(o.current),
            (a.current = Date.now() + x),
            (o.current = setTimeout(() => {
              l && r && !i.current && u();
            }, x)));
        } catch (g) {
          (console.error("[useRobustPolling] Poll failed:", g),
            (c.current = Math.min(c.current * 1.5, s)),
            console.log("[useRobustPolling] Retrying in", c.current, "ms"),
            o.current && clearTimeout(o.current),
            (a.current = Date.now() + c.current),
            (o.current = setTimeout(() => {
              l && r && !i.current && u();
            }, c.current)));
        } finally {
          i.current = !1;
        }
      }, [r, t, e, s, l]);
    return (
      w.useEffect(() => {
        if (!r) {
          (console.log("[useRobustPolling] Polling disabled, clearing timers"),
            o.current && (clearTimeout(o.current), (o.current = null)));
          return;
        }
        return (
          l
            ? (console.log(
                "[useRobustPolling] Effect triggered - interval changed to:",
                e,
                "ms",
              ),
              o.current && (clearTimeout(o.current), (o.current = null)),
              console.log(
                "[useRobustPolling] Starting new polling cycle with interval:",
                e,
                "ms",
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
          (console.log("[useRobustPolling] Immediate poll triggered"),
            o.current && (clearTimeout(o.current), (o.current = null)),
            u());
        }, [u]),
      }
    );
  },
  rg = ({ isOpen: e, onClose: t, onSave: r, currentInterval: s }) => {
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
      (r(l), t());
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
                children: n.jsx(Le, { size: 20 }),
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
  ng = () => {
    const e = w.useRef(null);
    w.useRef(null);
    const t = w.useRef(null);
    return (
      w.useEffect(() => {
        let r = null,
          s = null;
        const l = async () => {
            if ("wakeLock" in navigator)
              try {
                ((e.current = await navigator.wakeLock.request("screen")),
                  console.log("[KeepAwake] Wake Lock acquired"),
                  e.current.addEventListener("release", () => {
                    console.log("[KeepAwake] Wake Lock released");
                  }));
              } catch (o) {
                console.error("[KeepAwake] Wake Lock failed:", o);
              }
            else console.warn("[KeepAwake] Wake Lock API not supported");
          },
          a = () => {
            try {
              ((t.current = new (
                window.AudioContext || window.webkitAudioContext
              )()),
                (r = t.current.createOscillator()),
                (s = t.current.createGain()),
                r.connect(s),
                s.connect(t.current.destination),
                (s.gain.value = 0.001),
                (r.frequency.value = 20),
                (r.type = "sine"),
                r.start(),
                console.log("[KeepAwake] Silent audio started"));
            } catch (o) {
              console.error("[KeepAwake] Silent audio failed:", o);
            }
          },
          i = async () => {
            document.visibilityState === "visible" &&
              (console.log(
                "[KeepAwake] Page became visible, re-acquiring wake lock",
              ),
              await l(),
              t.current &&
                t.current.state === "suspended" &&
                (await t.current.resume(),
                console.log("[KeepAwake] AudioContext resumed")));
          };
        return (
          l(),
          a(),
          document.addEventListener("visibilitychange", i),
          () => {
            if (
              (console.log("[KeepAwake] Cleaning up keep-awake mechanisms"),
              e.current && (e.current.release(), (e.current = null)),
              r)
            )
              try {
                (r.stop(), r.disconnect());
              } catch (o) {
                console.warn("[KeepAwake] Error stopping oscillator:", o);
              }
            (s && s.disconnect(),
              t.current && t.current.state !== "closed" && t.current.close(),
              document.removeEventListener("visibilitychange", i));
          }
        );
      }, []),
      null
    );
  },
  sg = () => {
    var v, E, L, $, B, se, ae;
    const { t: e } = Ar();
    ng();
    const t = rd(),
      [r, s] = w.useState(null),
      [l, a] = w.useState(!0),
      [i, o] = w.useState(null),
      [c, u] = w.useState(null),
      [d, m] = w.useState(!0),
      [g, x] = w.useState(!1),
      [y, j] = w.useState(() => {
        const M = localStorage.getItem("dashboard_refresh_interval");
        return M ? parseInt(M, 10) : 20;
      }),
      [k, p] = w.useState({
        bulletins: !0,
        tasks: !0,
        incomingDrugs: !0,
        outOfStock: !0,
        drugReplacements: !0,
        inventory: !0,
        internalRequests: !0,
      }),
      f = Rn(),
      h = f ? `${f.Name} - ${f.Employer}` : "鴻森智能科技 - 臨床藥事科",
      N = w.useCallback(async () => {
        try {
          (console.log("[PrescriptionQueryPage] Loading dashboard data..."),
            o(null));
          const M = await b0();
          if (!M || typeof M != "object")
            throw new Error("Invalid data format received from API");
          (Array.isArray(M.bulletins) ||
            (console.warn(
              "[PrescriptionQueryPage] Invalid bulletins data, using empty array",
            ),
            (M.bulletins = [])),
            Array.isArray(M.internalRequests) ||
              (console.warn(
                "[PrescriptionQueryPage] Invalid internalRequests data, using empty array",
              ),
              (M.internalRequests = [])),
            console.log("[PrescriptionQueryPage] Dashboard data loaded:", {
              bulletins: M.bulletins.length,
              internalRequests: M.internalRequests.length,
              urgentRequests: M.internalRequests.filter(
                (X) => X.state === "等待過帳" && X.actionType === "緊急申領",
              ).length,
            }),
            s(M),
            u(new Date()));
        } catch (M) {
          const X = M instanceof Error ? M.message : "載入資料失敗，請稍後再試";
          throw (
            o(X),
            console.error(
              "[PrescriptionQueryPage] Failed to load dashboard data:",
              M,
            ),
            M
          );
        } finally {
          a(!1);
        }
      }, []);
    (tg({ intervalMs: y * 1e3, onPoll: N, enabled: !0 }),
      w.useEffect(() => {
        console.log(
          "[PrescriptionQueryPage] Setting up page auto-reload every 15 minutes",
        );
        const X = setTimeout(() => {
          (console.log(
            "[PrescriptionQueryPage] Auto-reloading page after 15 minutes",
          ),
            window.location.reload());
        }, 9e5);
        return () => {
          (console.log(
            "[PrescriptionQueryPage] Clearing page auto-reload timer",
          ),
            clearTimeout(X));
        };
      }, []),
      w.useEffect(() => {
        t &&
          (console.log(
            "[PrescriptionQueryPage] Page became visible, forcing data refresh",
          ),
          N());
      }, [t, N]),
      w.useEffect(() => {
        (async () => {
          try {
            const X = E0();
            (p(X), await Gu(), await N());
          } catch (X) {
            (console.error("Failed to initialize:", X),
              o("初始化失敗，請重新整理頁面"));
          }
        })();
      }, [N]));
    const D = () => {
        (a(!0), N());
      },
      I = () => {
        N();
      },
      z = (M, X) => {
        const R = { ...k, [M]: X };
        (p(R), _0(R));
      },
      _ = (M) => {
        (j(M),
          localStorage.setItem("dashboard_refresh_interval", M.toString()),
          console.log(
            "[PrescriptionQueryPage] Refresh interval updated to",
            M,
            "seconds",
          ));
      };
    return l && !r
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
                                const M = kl();
                                M != null &&
                                  M.homepage &&
                                  (window.location.href = `${M.homepage}/phar_system/frontpage/`);
                              },
                              className:
                                "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors group relative",
                              title: e("platform.title"),
                              children: [
                                n.jsx(Sl, { size: 24 }),
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
                                  children: h,
                                }),
                              ],
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className: "flex items-center space-x-4",
                          children: [n.jsx(El, {}), n.jsx(Cl, {})],
                        }),
                      ],
                    }),
                  }),
                  n.jsx("div", {
                    className: "flex items-center justify-center min-h-[400px]",
                    children: n.jsxs("div", {
                      className: "text-center",
                      children: [
                        n.jsx(Z, { size: "large" }),
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
      : i && !r
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
                                  const M = kl();
                                  M != null &&
                                    M.homepage &&
                                    (window.location.href = `${M.homepage}/phar_system/frontpage/`);
                                },
                                className:
                                  "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors group relative",
                                title: e("platform.title"),
                                children: [
                                  n.jsx(Sl, { size: 24 }),
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
                                    children: h,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          n.jsxs("div", {
                            className: "flex items-center space-x-4",
                            children: [n.jsx(El, {}), n.jsx(Cl, {})],
                          }),
                        ],
                      }),
                    }),
                    n.jsx("div", {
                      className:
                        "flex items-center justify-center min-h-[400px]",
                      children: n.jsxs("div", {
                        className: "text-center",
                        children: [
                          n.jsx("div", {
                            className: "text-6xl mb-4",
                            children: "⚠️",
                          }),
                          n.jsx("h2", {
                            className:
                              "text-xl font-semibold mb-2 text-red-600",
                            children: "載入失敗",
                          }),
                          n.jsx("p", {
                            className: "text-gray-600 mb-4",
                            children: i,
                          }),
                          n.jsx("button", {
                            onClick: D,
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
        : r
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
                                    const M = kl();
                                    M != null &&
                                      M.homepage &&
                                      (window.location.href = `${M.homepage}/phar_system/frontpage/`);
                                  },
                                  className:
                                    "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors group relative",
                                  title: e("platform.title"),
                                  children: [
                                    n.jsx(Sl, { size: 24 }),
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
                                      children: h,
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
                                    c &&
                                      n.jsxs("span", {
                                        children: [
                                          "最後更新: ",
                                          c.toLocaleTimeString("zh-TW"),
                                        ],
                                      }),
                                    n.jsx("button", {
                                      onClick: D,
                                      disabled: l,
                                      className:
                                        "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                                      title: "重新整理",
                                      children: n.jsx(kr, {
                                        size: 16,
                                        className: l ? "animate-spin" : "",
                                      }),
                                    }),
                                  ],
                                }),
                                n.jsxs("button", {
                                  onClick: () => m(!0),
                                  className:
                                    "flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors",
                                  title: "專注顯示模式",
                                  children: [
                                    n.jsx(Om, { size: 16, className: "mr-2" }),
                                    "專注顯示",
                                  ],
                                }),
                                n.jsx("button", {
                                  onClick: () => x(!0),
                                  className:
                                    "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors",
                                  title: "刷新間隔設定",
                                  children: n.jsx(rr, { size: 20 }),
                                }),
                                n.jsx(El, {}),
                                n.jsx(Cl, {}),
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
                            children: n.jsx(Ku, {
                              bulletins: r.bulletins,
                              onBulletinAdded: I,
                              showInFocus: k.bulletins,
                              onFocusToggle: (M) => z("bulletins", M),
                              error:
                                (v = r.errors) == null ? void 0 : v.bulletins,
                            }),
                          }),
                          n.jsx("div", {
                            className: "lg:col-span-2 xl:col-span-1",
                            children: n.jsx(Yu, {
                              restockTasks: r.restockTasks,
                              receivingTasks: r.receivingTasks,
                              putAwayTasks: r.putAwayTasks,
                              showInFocus: k.tasks,
                              onFocusToggle: (M) => z("tasks", M),
                              error: (E = r.errors) == null ? void 0 : E.tasks,
                            }),
                          }),
                          n.jsx("div", {
                            children: n.jsx(Xu, {
                              incomingDrugs: r.incomingDrugs,
                              showInFocus: k.incomingDrugs,
                              onFocusToggle: (M) => z("incomingDrugs", M),
                              error:
                                (L = r.errors) == null
                                  ? void 0
                                  : L.incomingDrugs,
                            }),
                          }),
                          n.jsx("div", {
                            children: n.jsx(Ju, {
                              outOfStockItems: r.outOfStockItems,
                              onItemAdded: I,
                              showInFocus: k.outOfStock,
                              onFocusToggle: (M) => z("outOfStock", M),
                              error:
                                ($ = r.errors) == null ? void 0 : $.outOfStock,
                            }),
                          }),
                          n.jsx("div", {
                            children: n.jsx(Zu, {
                              drugReplacements: r.drugReplacements,
                              showInFocus: k.drugReplacements,
                              onFocusToggle: (M) => z("drugReplacements", M),
                              error:
                                (B = r.errors) == null
                                  ? void 0
                                  : B.drugReplacements,
                            }),
                          }),
                          n.jsx("div", {
                            children: n.jsx(ed, {
                              inventoryHighlights: r.inventoryHighlights,
                              showInFocus: k.inventory,
                              onFocusToggle: (M) => z("inventory", M),
                              error:
                                (se = r.errors) == null ? void 0 : se.inventory,
                            }),
                          }),
                          n.jsx("div", {
                            className: "lg:col-span-2",
                            children: n.jsx(td, {
                              internalRequests: r.internalRequests,
                              showInFocus: k.internalRequests,
                              onFocusToggle: (M) => z("internalRequests", M),
                              error:
                                (ae = r.errors) == null
                                  ? void 0
                                  : ae.internalRequests,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                n.jsx(eg, {
                  isOpen: d,
                  onClose: () => m(!1),
                  dashboardData: r,
                  lastRefresh: c,
                  sectionVisibility: k,
                }),
                n.jsx(rg, {
                  isOpen: g,
                  onClose: () => x(!1),
                  onSave: _,
                  currentInterval: y,
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
  lg = ({ onLogin: e }) => {
    const { t } = Ar(),
      [r, s] = w.useState(""),
      [l, a] = w.useState(""),
      [i, o] = w.useState(null),
      [c, u] = w.useState(!1),
      d = async (m) => {
        (m.preventDefault(), o(null), u(!0));
        try {
          const g = await qm({ ID: r, Password: l });
          g.Code === 200
            ? (Vm(g.Data), e())
            : g.Code === -1 || g.Code === -2
              ? o(g.Result)
              : o(t("error.api"));
        } catch (g) {
          (console.error("Login error:", g),
            o(g instanceof Error ? g.message : t("error.api")));
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
                n.jsx(Oe, { size: 20 }),
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
                className: `w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center ${c ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"}`,
                children: c
                  ? n.jsxs(n.Fragment, {
                      children: [
                        n.jsx(Z, { size: "small\\", className: "mr-2" }),
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
function ag() {
  const [e, t] = w.useState(!1),
    [r, s] = w.useState(!1),
    [l, a] = w.useState(!0);
  w.useEffect(() => {
    (async () => {
      try {
        (await Gu(), t(!0));
        const c = Bm();
        (s(c),
          console.log("Authentication check:", {
            authenticated: c,
            userSession: localStorage.getItem("user_session")
              ? "exists"
              : "missing",
          }));
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
    : n.jsx($m, { children: r ? n.jsx(sg, {}) : n.jsx(lg, { onLogin: i }) });
}
$u(document.getElementById("root")).render(
  n.jsx(w.StrictMode, { children: n.jsx(ag, {}) }),
);
