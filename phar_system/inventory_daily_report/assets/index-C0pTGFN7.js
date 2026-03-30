var ad = Object.defineProperty;
var ud = (e, t, n) =>
  t in e
    ? ad(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var ds = (e, t, n) => ud(e, typeof t != "symbol" ? t + "" : t, n);
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
function cd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ua = { exports: {} },
  Oo = {},
  Aa = { exports: {} },
  I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gr = Symbol.for("react.element"),
  dd = Symbol.for("react.portal"),
  fd = Symbol.for("react.fragment"),
  pd = Symbol.for("react.strict_mode"),
  hd = Symbol.for("react.profiler"),
  gd = Symbol.for("react.provider"),
  md = Symbol.for("react.context"),
  yd = Symbol.for("react.forward_ref"),
  vd = Symbol.for("react.suspense"),
  wd = Symbol.for("react.memo"),
  xd = Symbol.for("react.lazy"),
  fs = Symbol.iterator;
function Sd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (fs && e[fs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Va = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ba = Object.assign,
  Ha = {};
function kn(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Ha),
    (this.updater = n || Va));
}
kn.prototype.isReactComponent = {};
kn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
kn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ba() {}
ba.prototype = kn.prototype;
function yl(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Ha),
    (this.updater = n || Va));
}
var vl = (yl.prototype = new ba());
vl.constructor = yl;
Ba(vl, kn.prototype);
vl.isPureReactComponent = !0;
var ps = Array.isArray,
  Wa = Object.prototype.hasOwnProperty,
  wl = { current: null },
  Ka = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qa(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Wa.call(t, r) && !Ka.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: gr,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: wl.current,
  };
}
function kd(e, t) {
  return {
    $$typeof: gr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function xl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === gr;
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
var hs = /\/+/g;
function Qo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Nd("" + e.key)
    : t.toString(36);
}
function Vr(e, t, n, r, o) {
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
          case gr:
          case dd:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === "" ? "." + Qo(l, 0) : r),
      ps(o)
        ? ((n = ""),
          e != null && (n = e.replace(hs, "$&/") + "/"),
          Vr(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (xl(o) &&
            (o = kd(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ""
                  : ("" + o.key).replace(hs, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), ps(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var a = r + Qo(i, s);
      l += Vr(i, t, n, a, o);
    }
  else if (((a = Sd(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(i = e.next()).done; )
      ((i = i.value), (a = r + Qo(i, s++)), (l += Vr(i, t, n, a, o)));
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
function kr(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Vr(e, r, "", "", function (i) {
      return t.call(n, i, o++);
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
var pe = { current: null },
  Br = { transition: null },
  Cd = {
    ReactCurrentDispatcher: pe,
    ReactCurrentBatchConfig: Br,
    ReactCurrentOwner: wl,
  };
function Ya() {
  throw Error("act(...) is not supported in production builds of React.");
}
I.Children = {
  map: kr,
  forEach: function (e, t, n) {
    kr(
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
      kr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      kr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!xl(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
I.Component = kn;
I.Fragment = fd;
I.Profiler = hd;
I.PureComponent = yl;
I.StrictMode = pd;
I.Suspense = vd;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cd;
I.act = Ya;
I.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Ba({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = wl.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      Wa.call(t, a) &&
        !Ka.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: gr, type: e.type, key: o, ref: i, props: r, _owner: l };
};
I.createContext = function (e) {
  return (
    (e = {
      $$typeof: md,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: gd, _context: e }),
    (e.Consumer = e)
  );
};
I.createElement = Qa;
I.createFactory = function (e) {
  var t = Qa.bind(null, e);
  return ((t.type = e), t);
};
I.createRef = function () {
  return { current: null };
};
I.forwardRef = function (e) {
  return { $$typeof: yd, render: e };
};
I.isValidElement = xl;
I.lazy = function (e) {
  return { $$typeof: xd, _payload: { _status: -1, _result: e }, _init: Ed };
};
I.memo = function (e, t) {
  return { $$typeof: wd, type: e, compare: t === void 0 ? null : t };
};
I.startTransition = function (e) {
  var t = Br.transition;
  Br.transition = {};
  try {
    e();
  } finally {
    Br.transition = t;
  }
};
I.unstable_act = Ya;
I.useCallback = function (e, t) {
  return pe.current.useCallback(e, t);
};
I.useContext = function (e) {
  return pe.current.useContext(e);
};
I.useDebugValue = function () {};
I.useDeferredValue = function (e) {
  return pe.current.useDeferredValue(e);
};
I.useEffect = function (e, t) {
  return pe.current.useEffect(e, t);
};
I.useId = function () {
  return pe.current.useId();
};
I.useImperativeHandle = function (e, t, n) {
  return pe.current.useImperativeHandle(e, t, n);
};
I.useInsertionEffect = function (e, t) {
  return pe.current.useInsertionEffect(e, t);
};
I.useLayoutEffect = function (e, t) {
  return pe.current.useLayoutEffect(e, t);
};
I.useMemo = function (e, t) {
  return pe.current.useMemo(e, t);
};
I.useReducer = function (e, t, n) {
  return pe.current.useReducer(e, t, n);
};
I.useRef = function (e) {
  return pe.current.useRef(e);
};
I.useState = function (e) {
  return pe.current.useState(e);
};
I.useSyncExternalStore = function (e, t, n) {
  return pe.current.useSyncExternalStore(e, t, n);
};
I.useTransition = function () {
  return pe.current.useTransition();
};
I.version = "18.3.1";
Aa.exports = I;
var z = Aa.exports;
const qr = cd(z);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ld = z,
  Rd = Symbol.for("react.element"),
  Pd = Symbol.for("react.fragment"),
  Od = Object.prototype.hasOwnProperty,
  _d = Ld.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Td = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ga(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  (n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref));
  for (r in t) Od.call(t, r) && !Td.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Rd,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: _d.current,
  };
}
Oo.Fragment = Pd;
Oo.jsx = Ga;
Oo.jsxs = Ga;
Ua.exports = Oo;
var m = Ua.exports,
  Ja = { exports: {} },
  Re = {},
  Xa = { exports: {} },
  Za = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(L, T) {
    var j = L.length;
    L.push(T);
    e: for (; 0 < j; ) {
      var B = (j - 1) >>> 1,
        Z = L[B];
      if (0 < o(Z, T)) ((L[B] = T), (L[j] = Z), (j = B));
      else break e;
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function r(L) {
    if (L.length === 0) return null;
    var T = L[0],
      j = L.pop();
    if (j !== T) {
      L[0] = j;
      e: for (var B = 0, Z = L.length, xr = Z >>> 1; B < xr; ) {
        var Pt = 2 * (B + 1) - 1,
          Ko = L[Pt],
          Ot = Pt + 1,
          Sr = L[Ot];
        if (0 > o(Ko, j))
          Ot < Z && 0 > o(Sr, Ko)
            ? ((L[B] = Sr), (L[Ot] = j), (B = Ot))
            : ((L[B] = Ko), (L[Pt] = j), (B = Pt));
        else if (Ot < Z && 0 > o(Sr, j)) ((L[B] = Sr), (L[Ot] = j), (B = Ot));
        else break e;
      }
    }
    return T;
  }
  function o(L, T) {
    var j = L.sortIndex - T.sortIndex;
    return j !== 0 ? j : L.id - T.id;
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
    d = 1,
    p = null,
    c = 3,
    v = !1,
    w = !1,
    S = !1,
    O = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(L) {
    for (var T = n(u); T !== null; ) {
      if (T.callback === null) r(u);
      else if (T.startTime <= L)
        (r(u), (T.sortIndex = T.expirationTime), t(a, T));
      else break;
      T = n(u);
    }
  }
  function y(L) {
    if (((S = !1), g(L), !w))
      if (n(a) !== null) ((w = !0), Oe(N));
      else {
        var T = n(u);
        T !== null && He(y, T.startTime - L);
      }
  }
  function N(L, T) {
    ((w = !1), S && ((S = !1), h(x), (x = -1)), (v = !0));
    var j = c;
    try {
      for (
        g(T), p = n(a);
        p !== null && (!(p.expirationTime > T) || (L && !F()));
      ) {
        var B = p.callback;
        if (typeof B == "function") {
          ((p.callback = null), (c = p.priorityLevel));
          var Z = B(p.expirationTime <= T);
          ((T = e.unstable_now()),
            typeof Z == "function" ? (p.callback = Z) : p === n(a) && r(a),
            g(T));
        } else r(a);
        p = n(a);
      }
      if (p !== null) var xr = !0;
      else {
        var Pt = n(u);
        (Pt !== null && He(y, Pt.startTime - T), (xr = !1));
      }
      return xr;
    } finally {
      ((p = null), (c = j), (v = !1));
    }
  }
  var C = !1,
    E = null,
    x = -1,
    _ = 5,
    P = -1;
  function F() {
    return !(e.unstable_now() - P < _);
  }
  function ge() {
    if (E !== null) {
      var L = e.unstable_now();
      P = L;
      var T = !0;
      try {
        T = E(!0, L);
      } finally {
        T ? ue() : ((C = !1), (E = null));
      }
    } else C = !1;
  }
  var ue;
  if (typeof f == "function")
    ue = function () {
      f(ge);
    };
  else if (typeof MessageChannel < "u") {
    var me = new MessageChannel(),
      ke = me.port2;
    ((me.port1.onmessage = ge),
      (ue = function () {
        ke.postMessage(null);
      }));
  } else
    ue = function () {
      O(ge, 0);
    };
  function Oe(L) {
    ((E = L), C || ((C = !0), ue()));
  }
  function He(L, T) {
    x = O(function () {
      L(e.unstable_now());
    }, T);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (L) {
      L.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || v || ((w = !0), Oe(N));
    }),
    (e.unstable_forceFrameRate = function (L) {
      0 > L || 125 < L
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (_ = 0 < L ? Math.floor(1e3 / L) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return c;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (L) {
      switch (c) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = c;
      }
      var j = c;
      c = T;
      try {
        return L();
      } finally {
        c = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (L, T) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var j = c;
      c = L;
      try {
        return T();
      } finally {
        c = j;
      }
    }),
    (e.unstable_scheduleCallback = function (L, T, j) {
      var B = e.unstable_now();
      switch (
        (typeof j == "object" && j !== null
          ? ((j = j.delay), (j = typeof j == "number" && 0 < j ? B + j : B))
          : (j = B),
        L)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = j + Z),
        (L = {
          id: d++,
          callback: T,
          priorityLevel: L,
          startTime: j,
          expirationTime: Z,
          sortIndex: -1,
        }),
        j > B
          ? ((L.sortIndex = j),
            t(u, L),
            n(a) === null &&
              L === n(u) &&
              (S ? (h(x), (x = -1)) : (S = !0), He(y, j - B)))
          : ((L.sortIndex = Z), t(a, L), w || v || ((w = !0), Oe(N))),
        L
      );
    }),
    (e.unstable_shouldYield = F),
    (e.unstable_wrapCallback = function (L) {
      var T = c;
      return function () {
        var j = c;
        c = T;
        try {
          return L.apply(this, arguments);
        } finally {
          c = j;
        }
      };
    }));
})(Za);
Xa.exports = Za;
var Dd = Xa.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jd = z,
  Le = Dd;
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
var qa = new Set(),
  Jn = {};
function Ht(e, t) {
  (gn(e, t), gn(e + "Capture", t));
}
function gn(e, t) {
  for (Jn[e] = t, e = 0; e < t.length; e++) qa.add(t[e]);
}
var tt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ki = Object.prototype.hasOwnProperty,
  Id =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  gs = {},
  ms = {};
function $d(e) {
  return ki.call(ms, e)
    ? !0
    : ki.call(gs, e)
      ? !1
      : Id.test(e)
        ? (ms[e] = !0)
        : ((gs[e] = !0), !1);
}
function zd(e, t, n, r) {
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
function Md(e, t, n, r) {
  if (t === null || typeof t > "u" || zd(e, t, n, r)) return !0;
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
function he(e, t, n, r, o, i, l) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l));
}
var re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    re[e] = new he(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  re[t] = new he(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  re[e] = new he(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  re[e] = new he(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    re[e] = new he(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  re[e] = new he(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  re[e] = new he(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  re[e] = new he(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  re[e] = new he(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Sl = /[\-:]([a-z])/g;
function kl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Sl, kl);
    re[t] = new he(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Sl, kl);
    re[t] = new he(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Sl, kl);
  re[t] = new he(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  re[e] = new he(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
re.xlinkHref = new he(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  re[e] = new he(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Nl(e, t, n, r) {
  var o = re.hasOwnProperty(t) ? re[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Md(t, n, o, r) && (n = null),
    r || o === null
      ? $d(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var it = jd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Nr = Symbol.for("react.element"),
  Jt = Symbol.for("react.portal"),
  Xt = Symbol.for("react.fragment"),
  El = Symbol.for("react.strict_mode"),
  Ni = Symbol.for("react.profiler"),
  eu = Symbol.for("react.provider"),
  tu = Symbol.for("react.context"),
  Cl = Symbol.for("react.forward_ref"),
  Ei = Symbol.for("react.suspense"),
  Ci = Symbol.for("react.suspense_list"),
  Ll = Symbol.for("react.memo"),
  at = Symbol.for("react.lazy"),
  nu = Symbol.for("react.offscreen"),
  ys = Symbol.iterator;
function Cn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ys && e[ys]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var K = Object.assign,
  Yo;
function zn(e) {
  if (Yo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Yo = (t && t[1]) || "";
    }
  return (
    `
` +
    Yo +
    e
  );
}
var Go = !1;
function Jo(e, t) {
  if (!e || Go) return "";
  Go = !0;
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
    ((Go = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? zn(e) : "";
}
function Fd(e) {
  switch (e.tag) {
    case 5:
      return zn(e.type);
    case 16:
      return zn("Lazy");
    case 13:
      return zn("Suspense");
    case 19:
      return zn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Jo(e.type, !1)), e);
    case 11:
      return ((e = Jo(e.type.render, !1)), e);
    case 1:
      return ((e = Jo(e.type, !0)), e);
    default:
      return "";
  }
}
function Li(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Xt:
      return "Fragment";
    case Jt:
      return "Portal";
    case Ni:
      return "Profiler";
    case El:
      return "StrictMode";
    case Ei:
      return "Suspense";
    case Ci:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case tu:
        return (e.displayName || "Context") + ".Consumer";
      case eu:
        return (e._context.displayName || "Context") + ".Provider";
      case Cl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ll:
        return (
          (t = e.displayName || null),
          t !== null ? t : Li(e.type) || "Memo"
        );
      case at:
        ((t = e._payload), (e = e._init));
        try {
          return Li(e(t));
        } catch {}
    }
  return null;
}
function Ud(e) {
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
      return Li(t);
    case 8:
      return t === El ? "StrictMode" : "Mode";
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
function kt(e) {
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
function Ad(e) {
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
function Er(e) {
  e._valueTracker || (e._valueTracker = Ad(e));
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
function eo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ri(e, t) {
  var n = t.checked;
  return K({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function vs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = kt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function iu(e, t) {
  ((t = t.checked), t != null && Nl(e, "checked", t, !1));
}
function Pi(e, t) {
  iu(e, t);
  var n = kt(t.value),
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
    ? Oi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Oi(e, t.type, kt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function ws(e, t, n) {
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
function Oi(e, t, n) {
  (t !== "number" || eo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Mn = Array.isArray;
function un(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      ((o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + kt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ((e[o].selected = !0), r && (e[o].defaultSelected = !0));
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function _i(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return K({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function xs(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (Mn(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: kt(n) };
}
function lu(e, t) {
  var n = kt(t.value),
    r = kt(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function Ss(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function su(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ti(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? su(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Cr,
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
        Cr = Cr || document.createElement("div"),
          Cr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Cr.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Xn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var An = {
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
Object.keys(An).forEach(function (e) {
  Vd.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (An[t] = An[e]));
  });
});
function uu(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (An.hasOwnProperty(e) && An[e])
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
var Bd = K(
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
function Di(e, t) {
  if (t) {
    if (Bd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function ji(e, t) {
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
var Ii = null;
function Rl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var $i = null,
  cn = null,
  dn = null;
function ks(e) {
  if ((e = vr(e))) {
    if (typeof $i != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = Io(t)), $i(e.stateNode, e.type, t));
  }
}
function du(e) {
  cn ? (dn ? dn.push(e) : (dn = [e])) : (cn = e);
}
function fu() {
  if (cn) {
    var e = cn,
      t = dn;
    if (((dn = cn = null), ks(e), t)) for (e = 0; e < t.length; e++) ks(t[e]);
  }
}
function pu(e, t) {
  return e(t);
}
function hu() {}
var Xo = !1;
function gu(e, t, n) {
  if (Xo) return e(t, n);
  Xo = !0;
  try {
    return pu(e, t, n);
  } finally {
    ((Xo = !1), (cn !== null || dn !== null) && (hu(), fu()));
  }
}
function Zn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Io(n);
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
var zi = !1;
if (tt)
  try {
    var Ln = {};
    (Object.defineProperty(Ln, "passive", {
      get: function () {
        zi = !0;
      },
    }),
      window.addEventListener("test", Ln, Ln),
      window.removeEventListener("test", Ln, Ln));
  } catch {
    zi = !1;
  }
function Hd(e, t, n, r, o, i, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Vn = !1,
  to = null,
  no = !1,
  Mi = null,
  bd = {
    onError: function (e) {
      ((Vn = !0), (to = e));
    },
  };
function Wd(e, t, n, r, o, i, l, s, a) {
  ((Vn = !1), (to = null), Hd.apply(bd, arguments));
}
function Kd(e, t, n, r, o, i, l, s, a) {
  if ((Wd.apply(this, arguments), Vn)) {
    if (Vn) {
      var u = to;
      ((Vn = !1), (to = null));
    } else throw Error(k(198));
    no || ((no = !0), (Mi = u));
  }
}
function bt(e) {
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
function mu(e) {
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
function Ns(e) {
  if (bt(e) !== e) throw Error(k(188));
}
function Qd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = bt(e)), t === null)) throw Error(k(188));
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
        if (i === n) return (Ns(o), e);
        if (i === r) return (Ns(o), t);
        i = i.sibling;
      }
      throw Error(k(188));
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
        if (!l) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function yu(e) {
  return ((e = Qd(e)), e !== null ? vu(e) : null);
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
var wu = Le.unstable_scheduleCallback,
  Es = Le.unstable_cancelCallback,
  Yd = Le.unstable_shouldYield,
  Gd = Le.unstable_requestPaint,
  Y = Le.unstable_now,
  Jd = Le.unstable_getCurrentPriorityLevel,
  Pl = Le.unstable_ImmediatePriority,
  xu = Le.unstable_UserBlockingPriority,
  ro = Le.unstable_NormalPriority,
  Xd = Le.unstable_LowPriority,
  Su = Le.unstable_IdlePriority,
  _o = null,
  Ye = null;
function Zd(e) {
  if (Ye && typeof Ye.onCommitFiberRoot == "function")
    try {
      Ye.onCommitFiberRoot(_o, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ae = Math.clz32 ? Math.clz32 : tf,
  qd = Math.log,
  ef = Math.LN2;
function tf(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((qd(e) / ef) | 0)) | 0);
}
var Lr = 64,
  Rr = 4194304;
function Fn(e) {
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
function oo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? (r = Fn(s)) : ((i &= l), i !== 0 && (r = Fn(i)));
  } else ((l = n & ~o), l !== 0 ? (r = Fn(l)) : i !== 0 && (r = Fn(i)));
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
      ((n = 31 - Ae(t)), (o = 1 << n), (r |= e[n]), (t &= ~o));
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
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;
  ) {
    var l = 31 - Ae(i),
      s = 1 << l,
      a = o[l];
    (a === -1
      ? (!(s & n) || s & r) && (o[l] = nf(s, t))
      : a <= t && (e.expiredLanes |= s),
      (i &= ~s));
  }
}
function Fi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ku() {
  var e = Lr;
  return ((Lr <<= 1), !(Lr & 4194240) && (Lr = 64), e);
}
function Zo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function mr(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ae(t)),
    (e[t] = n));
}
function of(e, t) {
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
    var o = 31 - Ae(n),
      i = 1 << o;
    ((t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i));
  }
}
function Ol(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ae(n),
      o = 1 << r;
    ((o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o));
  }
}
var M = 0;
function Nu(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Eu,
  _l,
  Cu,
  Lu,
  Ru,
  Ui = !1,
  Pr = [],
  ht = null,
  gt = null,
  mt = null,
  qn = new Map(),
  er = new Map(),
  ct = [],
  lf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Cs(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ht = null;
      break;
    case "dragenter":
    case "dragleave":
      gt = null;
      break;
    case "mouseover":
    case "mouseout":
      mt = null;
      break;
    case "pointerover":
    case "pointerout":
      qn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      er.delete(t.pointerId);
  }
}
function Rn(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = vr(t)), t !== null && _l(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function sf(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return ((ht = Rn(ht, e, t, n, r, o)), !0);
    case "dragenter":
      return ((gt = Rn(gt, e, t, n, r, o)), !0);
    case "mouseover":
      return ((mt = Rn(mt, e, t, n, r, o)), !0);
    case "pointerover":
      var i = o.pointerId;
      return (qn.set(i, Rn(qn.get(i) || null, e, t, n, r, o)), !0);
    case "gotpointercapture":
      return (
        (i = o.pointerId),
        er.set(i, Rn(er.get(i) || null, e, t, n, r, o)),
        !0
      );
  }
  return !1;
}
function Pu(e) {
  var t = Dt(e.target);
  if (t !== null) {
    var n = bt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = mu(n)), t !== null)) {
          ((e.blockedOn = t),
            Ru(e.priority, function () {
              Cu(n);
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
function Hr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ai(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((Ii = r), n.target.dispatchEvent(r), (Ii = null));
    } else return ((t = vr(n)), t !== null && _l(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Ls(e, t, n) {
  Hr(e) && n.delete(t);
}
function af() {
  ((Ui = !1),
    ht !== null && Hr(ht) && (ht = null),
    gt !== null && Hr(gt) && (gt = null),
    mt !== null && Hr(mt) && (mt = null),
    qn.forEach(Ls),
    er.forEach(Ls));
}
function Pn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ui ||
      ((Ui = !0),
      Le.unstable_scheduleCallback(Le.unstable_NormalPriority, af)));
}
function tr(e) {
  function t(o) {
    return Pn(o, e);
  }
  if (0 < Pr.length) {
    Pn(Pr[0], e);
    for (var n = 1; n < Pr.length; n++) {
      var r = Pr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ht !== null && Pn(ht, e),
      gt !== null && Pn(gt, e),
      mt !== null && Pn(mt, e),
      qn.forEach(t),
      er.forEach(t),
      n = 0;
    n < ct.length;
    n++
  )
    ((r = ct[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < ct.length && ((n = ct[0]), n.blockedOn === null); )
    (Pu(n), n.blockedOn === null && ct.shift());
}
var fn = it.ReactCurrentBatchConfig,
  io = !0;
function uf(e, t, n, r) {
  var o = M,
    i = fn.transition;
  fn.transition = null;
  try {
    ((M = 1), Tl(e, t, n, r));
  } finally {
    ((M = o), (fn.transition = i));
  }
}
function cf(e, t, n, r) {
  var o = M,
    i = fn.transition;
  fn.transition = null;
  try {
    ((M = 4), Tl(e, t, n, r));
  } finally {
    ((M = o), (fn.transition = i));
  }
}
function Tl(e, t, n, r) {
  if (io) {
    var o = Ai(e, t, n, r);
    if (o === null) (ai(e, t, r, lo, n), Cs(e, r));
    else if (sf(o, e, t, n, r)) r.stopPropagation();
    else if ((Cs(e, r), t & 4 && -1 < lf.indexOf(e))) {
      for (; o !== null; ) {
        var i = vr(o);
        if (
          (i !== null && Eu(i),
          (i = Ai(e, t, n, r)),
          i === null && ai(e, t, r, lo, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else ai(e, t, r, null, n);
  }
}
var lo = null;
function Ai(e, t, n, r) {
  if (((lo = null), (e = Rl(r)), (e = Dt(e)), e !== null))
    if (((t = bt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = mu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((lo = e), null);
}
function Ou(e) {
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
      switch (Jd()) {
        case Pl:
          return 1;
        case xu:
          return 4;
        case ro:
        case Xd:
          return 16;
        case Su:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ft = null,
  Dl = null,
  br = null;
function _u() {
  if (br) return br;
  var e,
    t = Dl,
    n = t.length,
    r,
    o = "value" in ft ? ft.value : ft.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (br = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Wr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Or() {
  return !0;
}
function Rs() {
  return !1;
}
function Pe(e) {
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
        ? Or
        : Rs),
      (this.isPropagationStopped = Rs),
      this
    );
  }
  return (
    K(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Or));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Or));
      },
      persist: function () {},
      isPersistent: Or,
    }),
    t
  );
}
var Nn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  jl = Pe(Nn),
  yr = K({}, Nn, { view: 0, detail: 0 }),
  df = Pe(yr),
  qo,
  ei,
  On,
  To = K({}, yr, {
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
    getModifierState: Il,
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
              ? ((qo = e.screenX - On.screenX), (ei = e.screenY - On.screenY))
              : (ei = qo = 0),
            (On = e)),
          qo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ei;
    },
  }),
  Ps = Pe(To),
  ff = K({}, To, { dataTransfer: 0 }),
  pf = Pe(ff),
  hf = K({}, yr, { relatedTarget: 0 }),
  ti = Pe(hf),
  gf = K({}, Nn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  mf = Pe(gf),
  yf = K({}, Nn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  vf = Pe(yf),
  wf = K({}, Nn, { data: 0 }),
  Os = Pe(wf),
  xf = {
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
function Il() {
  return Nf;
}
var Ef = K({}, yr, {
    key: function (e) {
      if (e.key) {
        var t = xf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Wr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
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
    getModifierState: Il,
    charCode: function (e) {
      return e.type === "keypress" ? Wr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Wr(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Cf = Pe(Ef),
  Lf = K({}, To, {
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
  _s = Pe(Lf),
  Rf = K({}, yr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Il,
  }),
  Pf = Pe(Rf),
  Of = K({}, Nn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  _f = Pe(Of),
  Tf = K({}, To, {
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
  Df = Pe(Tf),
  jf = [9, 13, 27, 32],
  $l = tt && "CompositionEvent" in window,
  Bn = null;
tt && "documentMode" in document && (Bn = document.documentMode);
var If = tt && "TextEvent" in window && !Bn,
  Tu = tt && (!$l || (Bn && 8 < Bn && 11 >= Bn)),
  Ts = " ",
  Ds = !1;
function Du(e, t) {
  switch (e) {
    case "keyup":
      return jf.indexOf(t.keyCode) !== -1;
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
function ju(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var Zt = !1;
function $f(e, t) {
  switch (e) {
    case "compositionend":
      return ju(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ds = !0), Ts);
    case "textInput":
      return ((e = t.data), e === Ts && Ds ? null : e);
    default:
      return null;
  }
}
function zf(e, t) {
  if (Zt)
    return e === "compositionend" || (!$l && Du(e, t))
      ? ((e = _u()), (br = Dl = ft = null), (Zt = !1), e)
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
      return Tu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Mf = {
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
function js(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Mf[e.type] : t === "textarea";
}
function Iu(e, t, n, r) {
  (du(r),
    (t = so(t, "onChange")),
    0 < t.length &&
      ((n = new jl("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var Hn = null,
  nr = null;
function Ff(e) {
  Wu(e, 0);
}
function Do(e) {
  var t = tn(e);
  if (ou(t)) return e;
}
function Uf(e, t) {
  if (e === "change") return t;
}
var $u = !1;
if (tt) {
  var ni;
  if (tt) {
    var ri = "oninput" in document;
    if (!ri) {
      var Is = document.createElement("div");
      (Is.setAttribute("oninput", "return;"),
        (ri = typeof Is.oninput == "function"));
    }
    ni = ri;
  } else ni = !1;
  $u = ni && (!document.documentMode || 9 < document.documentMode);
}
function $s() {
  Hn && (Hn.detachEvent("onpropertychange", zu), (nr = Hn = null));
}
function zu(e) {
  if (e.propertyName === "value" && Do(nr)) {
    var t = [];
    (Iu(t, nr, e, Rl(e)), gu(Ff, t));
  }
}
function Af(e, t, n) {
  e === "focusin"
    ? ($s(), (Hn = t), (nr = n), Hn.attachEvent("onpropertychange", zu))
    : e === "focusout" && $s();
}
function Vf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Do(nr);
}
function Bf(e, t) {
  if (e === "click") return Do(t);
}
function Hf(e, t) {
  if (e === "input" || e === "change") return Do(t);
}
function bf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Be = typeof Object.is == "function" ? Object.is : bf;
function rr(e, t) {
  if (Be(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!ki.call(t, o) || !Be(e[o], t[o])) return !1;
  }
  return !0;
}
function zs(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ms(e, t) {
  var n = zs(e);
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
    n = zs(n);
  }
}
function Mu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Mu(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Fu() {
  for (var e = window, t = eo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = eo(e.document);
  }
  return t;
}
function zl(e) {
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
  var t = Fu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Mu(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && zl(n)) {
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
          (o = Ms(n, i)));
        var l = Ms(n, r);
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
var Kf = tt && "documentMode" in document && 11 >= document.documentMode,
  qt = null,
  Vi = null,
  bn = null,
  Bi = !1;
function Fs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Bi ||
    qt == null ||
    qt !== eo(r) ||
    ((r = qt),
    "selectionStart" in r && zl(r)
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
    (bn && rr(bn, r)) ||
      ((bn = r),
      (r = so(Vi, "onSelect")),
      0 < r.length &&
        ((t = new jl("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = qt))));
}
function _r(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var en = {
    animationend: _r("Animation", "AnimationEnd"),
    animationiteration: _r("Animation", "AnimationIteration"),
    animationstart: _r("Animation", "AnimationStart"),
    transitionend: _r("Transition", "TransitionEnd"),
  },
  oi = {},
  Uu = {};
tt &&
  ((Uu = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete en.animationend.animation,
    delete en.animationiteration.animation,
    delete en.animationstart.animation),
  "TransitionEvent" in window || delete en.transitionend.transition);
function jo(e) {
  if (oi[e]) return oi[e];
  if (!en[e]) return e;
  var t = en[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Uu) return (oi[e] = t[n]);
  return e;
}
var Au = jo("animationend"),
  Vu = jo("animationiteration"),
  Bu = jo("animationstart"),
  Hu = jo("transitionend"),
  bu = new Map(),
  Us =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Et(e, t) {
  (bu.set(e, t), Ht(t, [e]));
}
for (var ii = 0; ii < Us.length; ii++) {
  var li = Us[ii],
    Qf = li.toLowerCase(),
    Yf = li[0].toUpperCase() + li.slice(1);
  Et(Qf, "on" + Yf);
}
Et(Au, "onAnimationEnd");
Et(Vu, "onAnimationIteration");
Et(Bu, "onAnimationStart");
Et("dblclick", "onDoubleClick");
Et("focusin", "onFocus");
Et("focusout", "onBlur");
Et(Hu, "onTransitionEnd");
gn("onMouseEnter", ["mouseout", "mouseover"]);
gn("onMouseLeave", ["mouseout", "mouseover"]);
gn("onPointerEnter", ["pointerout", "pointerover"]);
gn("onPointerLeave", ["pointerout", "pointerover"]);
Ht(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Ht(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Ht("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ht(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Ht(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Ht(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Un =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Gf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Un));
function As(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), Kd(r, t, void 0, e), (e.currentTarget = null));
}
function Wu(e, t) {
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
          (As(o, s, u), (i = a));
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
          (As(o, s, u), (i = a));
        }
    }
  }
  if (no) throw ((e = Mi), (no = !1), (Mi = null), e);
}
function A(e, t) {
  var n = t[Qi];
  n === void 0 && (n = t[Qi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ku(t, e, 2, !1), n.add(r));
}
function si(e, t, n) {
  var r = 0;
  (t && (r |= 4), Ku(n, e, r, t));
}
var Tr = "_reactListening" + Math.random().toString(36).slice(2);
function or(e) {
  if (!e[Tr]) {
    ((e[Tr] = !0),
      qa.forEach(function (n) {
        n !== "selectionchange" && (Gf.has(n) || si(n, !1, e), si(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Tr] || ((t[Tr] = !0), si("selectionchange", !1, t));
  }
}
function Ku(e, t, n, r) {
  switch (Ou(t)) {
    case 1:
      var o = uf;
      break;
    case 4:
      o = cf;
      break;
    default:
      o = Tl;
  }
  ((n = o.bind(null, t, n, e)),
    (o = void 0),
    !zi ||
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
function ai(e, t, n, r, o) {
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
          if (((l = Dt(s)), l === null)) return;
          if (((a = l.tag), a === 5 || a === 6)) {
            r = i = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  gu(function () {
    var u = i,
      d = Rl(n),
      p = [];
    e: {
      var c = bu.get(e);
      if (c !== void 0) {
        var v = jl,
          w = e;
        switch (e) {
          case "keypress":
            if (Wr(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Cf;
            break;
          case "focusin":
            ((w = "focus"), (v = ti));
            break;
          case "focusout":
            ((w = "blur"), (v = ti));
            break;
          case "beforeblur":
          case "afterblur":
            v = ti;
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
            v = Ps;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = pf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Pf;
            break;
          case Au:
          case Vu:
          case Bu:
            v = mf;
            break;
          case Hu:
            v = _f;
            break;
          case "scroll":
            v = df;
            break;
          case "wheel":
            v = Df;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = vf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = _s;
        }
        var S = (t & 4) !== 0,
          O = !S && e === "scroll",
          h = S ? (c !== null ? c + "Capture" : null) : c;
        S = [];
        for (var f = u, g; f !== null; ) {
          g = f;
          var y = g.stateNode;
          if (
            (g.tag === 5 &&
              y !== null &&
              ((g = y),
              h !== null && ((y = Zn(f, h)), y != null && S.push(ir(f, y, g)))),
            O)
          )
            break;
          f = f.return;
        }
        0 < S.length &&
          ((c = new v(c, w, null, n, d)), p.push({ event: c, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((c = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          c &&
            n !== Ii &&
            (w = n.relatedTarget || n.fromElement) &&
            (Dt(w) || w[nt]))
        )
          break e;
        if (
          (v || c) &&
          ((c =
            d.window === d
              ? d
              : (c = d.ownerDocument)
                ? c.defaultView || c.parentWindow
                : window),
          v
            ? ((w = n.relatedTarget || n.toElement),
              (v = u),
              (w = w ? Dt(w) : null),
              w !== null &&
                ((O = bt(w)), w !== O || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((v = null), (w = u)),
          v !== w)
        ) {
          if (
            ((S = Ps),
            (y = "onMouseLeave"),
            (h = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = _s),
              (y = "onPointerLeave"),
              (h = "onPointerEnter"),
              (f = "pointer")),
            (O = v == null ? c : tn(v)),
            (g = w == null ? c : tn(w)),
            (c = new S(y, f + "leave", v, n, d)),
            (c.target = O),
            (c.relatedTarget = g),
            (y = null),
            Dt(d) === u &&
              ((S = new S(h, f + "enter", w, n, d)),
              (S.target = g),
              (S.relatedTarget = O),
              (y = S)),
            (O = y),
            v && w)
          )
            t: {
              for (S = v, h = w, f = 0, g = S; g; g = Kt(g)) f++;
              for (g = 0, y = h; y; y = Kt(y)) g++;
              for (; 0 < f - g; ) ((S = Kt(S)), f--);
              for (; 0 < g - f; ) ((h = Kt(h)), g--);
              for (; f--; ) {
                if (S === h || (h !== null && S === h.alternate)) break t;
                ((S = Kt(S)), (h = Kt(h)));
              }
              S = null;
            }
          else S = null;
          (v !== null && Vs(p, c, v, S, !1),
            w !== null && O !== null && Vs(p, O, w, S, !0));
        }
      }
      e: {
        if (
          ((c = u ? tn(u) : window),
          (v = c.nodeName && c.nodeName.toLowerCase()),
          v === "select" || (v === "input" && c.type === "file"))
        )
          var N = Uf;
        else if (js(c))
          if ($u) N = Hf;
          else {
            N = Vf;
            var C = Af;
          }
        else
          (v = c.nodeName) &&
            v.toLowerCase() === "input" &&
            (c.type === "checkbox" || c.type === "radio") &&
            (N = Bf);
        if (N && (N = N(e, u))) {
          Iu(p, N, n, d);
          break e;
        }
        (C && C(e, c, u),
          e === "focusout" &&
            (C = c._wrapperState) &&
            C.controlled &&
            c.type === "number" &&
            Oi(c, "number", c.value));
      }
      switch (((C = u ? tn(u) : window), e)) {
        case "focusin":
          (js(C) || C.contentEditable === "true") &&
            ((qt = C), (Vi = u), (bn = null));
          break;
        case "focusout":
          bn = Vi = qt = null;
          break;
        case "mousedown":
          Bi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Bi = !1), Fs(p, n, d));
          break;
        case "selectionchange":
          if (Kf) break;
        case "keydown":
        case "keyup":
          Fs(p, n, d);
      }
      var E;
      if ($l)
        e: {
          switch (e) {
            case "compositionstart":
              var x = "onCompositionStart";
              break e;
            case "compositionend":
              x = "onCompositionEnd";
              break e;
            case "compositionupdate":
              x = "onCompositionUpdate";
              break e;
          }
          x = void 0;
        }
      else
        Zt
          ? Du(e, n) && (x = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (x = "onCompositionStart");
      (x &&
        (Tu &&
          n.locale !== "ko" &&
          (Zt || x !== "onCompositionStart"
            ? x === "onCompositionEnd" && Zt && (E = _u())
            : ((ft = d),
              (Dl = "value" in ft ? ft.value : ft.textContent),
              (Zt = !0))),
        (C = so(u, x)),
        0 < C.length &&
          ((x = new Os(x, e, null, n, d)),
          p.push({ event: x, listeners: C }),
          E ? (x.data = E) : ((E = ju(n)), E !== null && (x.data = E)))),
        (E = If ? $f(e, n) : zf(e, n)) &&
          ((u = so(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new Os("onBeforeInput", "beforeinput", null, n, d)),
            p.push({ event: d, listeners: u }),
            (d.data = E))));
    }
    Wu(p, t);
  });
}
function ir(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function so(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    (o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Zn(e, n)),
      i != null && r.unshift(ir(e, i, o)),
      (i = Zn(e, t)),
      i != null && r.push(ir(e, i, o))),
      (e = e.return));
  }
  return r;
}
function Kt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Vs(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    (s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((a = Zn(n, i)), a != null && l.unshift(ir(n, a, s)))
        : o || ((a = Zn(n, i)), a != null && l.push(ir(n, a, s)))),
      (n = n.return));
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Jf = /\r\n?/g,
  Xf = /\u0000|\uFFFD/g;
function Bs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Jf,
      `
`,
    )
    .replace(Xf, "");
}
function Dr(e, t, n) {
  if (((t = Bs(t)), Bs(e) !== t && n)) throw Error(k(425));
}
function ao() {}
var Hi = null,
  bi = null;
function Wi(e, t) {
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
var Ki = typeof setTimeout == "function" ? setTimeout : void 0,
  Zf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Hs = typeof Promise == "function" ? Promise : void 0,
  qf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Hs < "u"
        ? function (e) {
            return Hs.resolve(null).then(e).catch(ep);
          }
        : Ki;
function ep(e) {
  setTimeout(function () {
    throw e;
  });
}
function ui(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(o), tr(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  tr(t);
}
function yt(e) {
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
function bs(e) {
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
var En = Math.random().toString(36).slice(2),
  Ke = "__reactFiber$" + En,
  lr = "__reactProps$" + En,
  nt = "__reactContainer$" + En,
  Qi = "__reactEvents$" + En,
  tp = "__reactListeners$" + En,
  np = "__reactHandles$" + En;
function Dt(e) {
  var t = e[Ke];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[nt] || n[Ke])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = bs(e); e !== null; ) {
          if ((n = e[Ke])) return n;
          e = bs(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function vr(e) {
  return (
    (e = e[Ke] || e[nt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function tn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function Io(e) {
  return e[lr] || null;
}
var Yi = [],
  nn = -1;
function Ct(e) {
  return { current: e };
}
function V(e) {
  0 > nn || ((e.current = Yi[nn]), (Yi[nn] = null), nn--);
}
function U(e, t) {
  (nn++, (Yi[nn] = e.current), (e.current = t));
}
var Nt = {},
  se = Ct(Nt),
  we = Ct(!1),
  Ft = Nt;
function mn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Nt;
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
function xe(e) {
  return ((e = e.childContextTypes), e != null);
}
function uo() {
  (V(we), V(se));
}
function Ws(e, t, n) {
  if (se.current !== Nt) throw Error(k(168));
  (U(se, t), U(we, n));
}
function Qu(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(k(108, Ud(e) || "Unknown", o));
  return K({}, n, r);
}
function co(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Nt),
    (Ft = se.current),
    U(se, e),
    U(we, we.current),
    !0
  );
}
function Ks(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  (n
    ? ((e = Qu(e, t, Ft)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      V(we),
      V(se),
      U(se, e))
    : V(we),
    U(we, n));
}
var Xe = null,
  $o = !1,
  ci = !1;
function Yu(e) {
  Xe === null ? (Xe = [e]) : Xe.push(e);
}
function rp(e) {
  (($o = !0), Yu(e));
}
function Lt() {
  if (!ci && Xe !== null) {
    ci = !0;
    var e = 0,
      t = M;
    try {
      var n = Xe;
      for (M = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((Xe = null), ($o = !1));
    } catch (o) {
      throw (Xe !== null && (Xe = Xe.slice(e + 1)), wu(Pl, Lt), o);
    } finally {
      ((M = t), (ci = !1));
    }
  }
  return null;
}
var rn = [],
  on = 0,
  fo = null,
  po = 0,
  _e = [],
  Te = 0,
  Ut = null,
  Ze = 1,
  qe = "";
function _t(e, t) {
  ((rn[on++] = po), (rn[on++] = fo), (fo = e), (po = t));
}
function Gu(e, t, n) {
  ((_e[Te++] = Ze), (_e[Te++] = qe), (_e[Te++] = Ut), (Ut = e));
  var r = Ze;
  e = qe;
  var o = 32 - Ae(r) - 1;
  ((r &= ~(1 << o)), (n += 1));
  var i = 32 - Ae(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    ((i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (Ze = (1 << (32 - Ae(t) + o)) | (n << o) | r),
      (qe = i + e));
  } else ((Ze = (1 << i) | (n << o) | r), (qe = e));
}
function Ml(e) {
  e.return !== null && (_t(e, 1), Gu(e, 1, 0));
}
function Fl(e) {
  for (; e === fo; )
    ((fo = rn[--on]), (rn[on] = null), (po = rn[--on]), (rn[on] = null));
  for (; e === Ut; )
    ((Ut = _e[--Te]),
      (_e[Te] = null),
      (qe = _e[--Te]),
      (_e[Te] = null),
      (Ze = _e[--Te]),
      (_e[Te] = null));
}
var Ce = null,
  Ee = null,
  H = !1,
  Ue = null;
function Ju(e, t) {
  var n = De(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Qs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ce = e), (Ee = yt(t.firstChild)), !0)
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
          ? ((n = Ut !== null ? { id: Ze, overflow: qe } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = De(18, null, null, 0)),
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
function Gi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ji(e) {
  if (H) {
    var t = Ee;
    if (t) {
      var n = t;
      if (!Qs(e, t)) {
        if (Gi(e)) throw Error(k(418));
        t = yt(n.nextSibling);
        var r = Ce;
        t && Qs(e, t)
          ? Ju(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (H = !1), (Ce = e));
      }
    } else {
      if (Gi(e)) throw Error(k(418));
      ((e.flags = (e.flags & -4097) | 2), (H = !1), (Ce = e));
    }
  }
}
function Ys(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ce = e;
}
function jr(e) {
  if (e !== Ce) return !1;
  if (!H) return (Ys(e), (H = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Wi(e.type, e.memoizedProps))),
    t && (t = Ee))
  ) {
    if (Gi(e)) throw (Xu(), Error(k(418)));
    for (; t; ) (Ju(e, t), (t = yt(t.nextSibling)));
  }
  if ((Ys(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ee = yt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ee = null;
    }
  } else Ee = Ce ? yt(e.stateNode.nextSibling) : null;
  return !0;
}
function Xu() {
  for (var e = Ee; e; ) e = yt(e.nextSibling);
}
function yn() {
  ((Ee = Ce = null), (H = !1));
}
function Ul(e) {
  Ue === null ? (Ue = [e]) : Ue.push(e);
}
var op = it.ReactCurrentBatchConfig;
function _n(e, t, n) {
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
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function Ir(e, t) {
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
function Gs(e) {
  var t = e._init;
  return t(e._payload);
}
function Zu(e) {
  function t(h, f) {
    if (e) {
      var g = h.deletions;
      g === null ? ((h.deletions = [f]), (h.flags |= 16)) : g.push(f);
    }
  }
  function n(h, f) {
    if (!e) return null;
    for (; f !== null; ) (t(h, f), (f = f.sibling));
    return null;
  }
  function r(h, f) {
    for (h = new Map(); f !== null; )
      (f.key !== null ? h.set(f.key, f) : h.set(f.index, f), (f = f.sibling));
    return h;
  }
  function o(h, f) {
    return ((h = St(h, f)), (h.index = 0), (h.sibling = null), h);
  }
  function i(h, f, g) {
    return (
      (h.index = g),
      e
        ? ((g = h.alternate),
          g !== null
            ? ((g = g.index), g < f ? ((h.flags |= 2), f) : g)
            : ((h.flags |= 2), f))
        : ((h.flags |= 1048576), f)
    );
  }
  function l(h) {
    return (e && h.alternate === null && (h.flags |= 2), h);
  }
  function s(h, f, g, y) {
    return f === null || f.tag !== 6
      ? ((f = yi(g, h.mode, y)), (f.return = h), f)
      : ((f = o(f, g)), (f.return = h), f);
  }
  function a(h, f, g, y) {
    var N = g.type;
    return N === Xt
      ? d(h, f, g.props.children, y, g.key)
      : f !== null &&
          (f.elementType === N ||
            (typeof N == "object" &&
              N !== null &&
              N.$$typeof === at &&
              Gs(N) === f.type))
        ? ((y = o(f, g.props)), (y.ref = _n(h, f, g)), (y.return = h), y)
        : ((y = Zr(g.type, g.key, g.props, null, h.mode, y)),
          (y.ref = _n(h, f, g)),
          (y.return = h),
          y);
  }
  function u(h, f, g, y) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== g.containerInfo ||
      f.stateNode.implementation !== g.implementation
      ? ((f = vi(g, h.mode, y)), (f.return = h), f)
      : ((f = o(f, g.children || [])), (f.return = h), f);
  }
  function d(h, f, g, y, N) {
    return f === null || f.tag !== 7
      ? ((f = zt(g, h.mode, y, N)), (f.return = h), f)
      : ((f = o(f, g)), (f.return = h), f);
  }
  function p(h, f, g) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return ((f = yi("" + f, h.mode, g)), (f.return = h), f);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Nr:
          return (
            (g = Zr(f.type, f.key, f.props, null, h.mode, g)),
            (g.ref = _n(h, null, f)),
            (g.return = h),
            g
          );
        case Jt:
          return ((f = vi(f, h.mode, g)), (f.return = h), f);
        case at:
          var y = f._init;
          return p(h, y(f._payload), g);
      }
      if (Mn(f) || Cn(f))
        return ((f = zt(f, h.mode, g, null)), (f.return = h), f);
      Ir(h, f);
    }
    return null;
  }
  function c(h, f, g, y) {
    var N = f !== null ? f.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return N !== null ? null : s(h, f, "" + g, y);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Nr:
          return g.key === N ? a(h, f, g, y) : null;
        case Jt:
          return g.key === N ? u(h, f, g, y) : null;
        case at:
          return ((N = g._init), c(h, f, N(g._payload), y));
      }
      if (Mn(g) || Cn(g)) return N !== null ? null : d(h, f, g, y, null);
      Ir(h, g);
    }
    return null;
  }
  function v(h, f, g, y, N) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return ((h = h.get(g) || null), s(f, h, "" + y, N));
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Nr:
          return (
            (h = h.get(y.key === null ? g : y.key) || null),
            a(f, h, y, N)
          );
        case Jt:
          return (
            (h = h.get(y.key === null ? g : y.key) || null),
            u(f, h, y, N)
          );
        case at:
          var C = y._init;
          return v(h, f, g, C(y._payload), N);
      }
      if (Mn(y) || Cn(y)) return ((h = h.get(g) || null), d(f, h, y, N, null));
      Ir(f, y);
    }
    return null;
  }
  function w(h, f, g, y) {
    for (
      var N = null, C = null, E = f, x = (f = 0), _ = null;
      E !== null && x < g.length;
      x++
    ) {
      E.index > x ? ((_ = E), (E = null)) : (_ = E.sibling);
      var P = c(h, E, g[x], y);
      if (P === null) {
        E === null && (E = _);
        break;
      }
      (e && E && P.alternate === null && t(h, E),
        (f = i(P, f, x)),
        C === null ? (N = P) : (C.sibling = P),
        (C = P),
        (E = _));
    }
    if (x === g.length) return (n(h, E), H && _t(h, x), N);
    if (E === null) {
      for (; x < g.length; x++)
        ((E = p(h, g[x], y)),
          E !== null &&
            ((f = i(E, f, x)),
            C === null ? (N = E) : (C.sibling = E),
            (C = E)));
      return (H && _t(h, x), N);
    }
    for (E = r(h, E); x < g.length; x++)
      ((_ = v(E, h, x, g[x], y)),
        _ !== null &&
          (e && _.alternate !== null && E.delete(_.key === null ? x : _.key),
          (f = i(_, f, x)),
          C === null ? (N = _) : (C.sibling = _),
          (C = _)));
    return (
      e &&
        E.forEach(function (F) {
          return t(h, F);
        }),
      H && _t(h, x),
      N
    );
  }
  function S(h, f, g, y) {
    var N = Cn(g);
    if (typeof N != "function") throw Error(k(150));
    if (((g = N.call(g)), g == null)) throw Error(k(151));
    for (
      var C = (N = null), E = f, x = (f = 0), _ = null, P = g.next();
      E !== null && !P.done;
      x++, P = g.next()
    ) {
      E.index > x ? ((_ = E), (E = null)) : (_ = E.sibling);
      var F = c(h, E, P.value, y);
      if (F === null) {
        E === null && (E = _);
        break;
      }
      (e && E && F.alternate === null && t(h, E),
        (f = i(F, f, x)),
        C === null ? (N = F) : (C.sibling = F),
        (C = F),
        (E = _));
    }
    if (P.done) return (n(h, E), H && _t(h, x), N);
    if (E === null) {
      for (; !P.done; x++, P = g.next())
        ((P = p(h, P.value, y)),
          P !== null &&
            ((f = i(P, f, x)),
            C === null ? (N = P) : (C.sibling = P),
            (C = P)));
      return (H && _t(h, x), N);
    }
    for (E = r(h, E); !P.done; x++, P = g.next())
      ((P = v(E, h, x, P.value, y)),
        P !== null &&
          (e && P.alternate !== null && E.delete(P.key === null ? x : P.key),
          (f = i(P, f, x)),
          C === null ? (N = P) : (C.sibling = P),
          (C = P)));
    return (
      e &&
        E.forEach(function (ge) {
          return t(h, ge);
        }),
      H && _t(h, x),
      N
    );
  }
  function O(h, f, g, y) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === Xt &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case Nr:
          e: {
            for (var N = g.key, C = f; C !== null; ) {
              if (C.key === N) {
                if (((N = g.type), N === Xt)) {
                  if (C.tag === 7) {
                    (n(h, C.sibling),
                      (f = o(C, g.props.children)),
                      (f.return = h),
                      (h = f));
                    break e;
                  }
                } else if (
                  C.elementType === N ||
                  (typeof N == "object" &&
                    N !== null &&
                    N.$$typeof === at &&
                    Gs(N) === C.type)
                ) {
                  (n(h, C.sibling),
                    (f = o(C, g.props)),
                    (f.ref = _n(h, C, g)),
                    (f.return = h),
                    (h = f));
                  break e;
                }
                n(h, C);
                break;
              } else t(h, C);
              C = C.sibling;
            }
            g.type === Xt
              ? ((f = zt(g.props.children, h.mode, y, g.key)),
                (f.return = h),
                (h = f))
              : ((y = Zr(g.type, g.key, g.props, null, h.mode, y)),
                (y.ref = _n(h, f, g)),
                (y.return = h),
                (h = y));
          }
          return l(h);
        case Jt:
          e: {
            for (C = g.key; f !== null; ) {
              if (f.key === C)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === g.containerInfo &&
                  f.stateNode.implementation === g.implementation
                ) {
                  (n(h, f.sibling),
                    (f = o(f, g.children || [])),
                    (f.return = h),
                    (h = f));
                  break e;
                } else {
                  n(h, f);
                  break;
                }
              else t(h, f);
              f = f.sibling;
            }
            ((f = vi(g, h.mode, y)), (f.return = h), (h = f));
          }
          return l(h);
        case at:
          return ((C = g._init), O(h, f, C(g._payload), y));
      }
      if (Mn(g)) return w(h, f, g, y);
      if (Cn(g)) return S(h, f, g, y);
      Ir(h, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        f !== null && f.tag === 6
          ? (n(h, f.sibling), (f = o(f, g)), (f.return = h), (h = f))
          : (n(h, f), (f = yi(g, h.mode, y)), (f.return = h), (h = f)),
        l(h))
      : n(h, f);
  }
  return O;
}
var vn = Zu(!0),
  qu = Zu(!1),
  ho = Ct(null),
  go = null,
  ln = null,
  Al = null;
function Vl() {
  Al = ln = go = null;
}
function Bl(e) {
  var t = ho.current;
  (V(ho), (e._currentValue = t));
}
function Xi(e, t, n) {
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
function pn(e, t) {
  ((go = e),
    (Al = ln = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ve = !0), (e.firstContext = null)));
}
function Ie(e) {
  var t = e._currentValue;
  if (Al !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ln === null)) {
      if (go === null) throw Error(k(308));
      ((ln = e), (go.dependencies = { lanes: 0, firstContext: e }));
    } else ln = ln.next = e;
  return t;
}
var jt = null;
function Hl(e) {
  jt === null ? (jt = [e]) : jt.push(e);
}
function ec(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Hl(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    rt(e, r)
  );
}
function rt(e, t) {
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
var ut = !1;
function bl(e) {
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
function et(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function vt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), $ & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      rt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Hl(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    rt(e, n)
  );
}
function Kr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ol(e, n));
  }
}
function Js(e, t) {
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
function mo(e, t, n, r) {
  var o = e.updateQueue;
  ut = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var a = s,
      u = a.next;
    ((a.next = null), l === null ? (i = u) : (l.next = u), (l = a));
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (s = d.lastBaseUpdate),
      s !== l &&
        (s === null ? (d.firstBaseUpdate = u) : (s.next = u),
        (d.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var p = o.baseState;
    ((l = 0), (d = u = a = null), (s = i));
    do {
      var c = s.lane,
        v = s.eventTime;
      if ((r & c) === c) {
        d !== null &&
          (d = d.next =
            {
              eventTime: v,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var w = e,
            S = s;
          switch (((c = t), (v = n), S.tag)) {
            case 1:
              if (((w = S.payload), typeof w == "function")) {
                p = w.call(v, p, c);
                break e;
              }
              p = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = S.payload),
                (c = typeof w == "function" ? w.call(v, p, c) : w),
                c == null)
              )
                break e;
              p = K({}, p, c);
              break e;
            case 2:
              ut = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (c = o.effects),
          c === null ? (o.effects = [s]) : c.push(s));
      } else
        ((v = {
          eventTime: v,
          lane: c,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          d === null ? ((u = d = v), (a = p)) : (d = d.next = v),
          (l |= c));
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        ((c = s),
          (s = c.next),
          (c.next = null),
          (o.lastBaseUpdate = c),
          (o.shared.pending = null));
      }
    } while (!0);
    if (
      (d === null && (a = p),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do ((l |= o.lane), (o = o.next));
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    ((Vt |= l), (e.lanes = l), (e.memoizedState = p));
  }
}
function Xs(e, t, n) {
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
var wr = {},
  Ge = Ct(wr),
  sr = Ct(wr),
  ar = Ct(wr);
function It(e) {
  if (e === wr) throw Error(k(174));
  return e;
}
function Wl(e, t) {
  switch ((U(ar, t), U(sr, e), U(Ge, wr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ti(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ti(t, e)));
  }
  (V(Ge), U(Ge, t));
}
function wn() {
  (V(Ge), V(sr), V(ar));
}
function nc(e) {
  It(ar.current);
  var t = It(Ge.current),
    n = Ti(t, e.type);
  t !== n && (U(sr, e), U(Ge, n));
}
function Kl(e) {
  sr.current === e && (V(Ge), V(sr));
}
var b = Ct(0);
function yo(e) {
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
var di = [];
function Ql() {
  for (var e = 0; e < di.length; e++)
    di[e]._workInProgressVersionPrimary = null;
  di.length = 0;
}
var Qr = it.ReactCurrentDispatcher,
  fi = it.ReactCurrentBatchConfig,
  At = 0,
  W = null,
  J = null,
  q = null,
  vo = !1,
  Wn = !1,
  ur = 0,
  ip = 0;
function oe() {
  throw Error(k(321));
}
function Yl(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Be(e[n], t[n])) return !1;
  return !0;
}
function Gl(e, t, n, r, o, i) {
  if (
    ((At = i),
    (W = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Qr.current = e === null || e.memoizedState === null ? up : cp),
    (e = n(r, o)),
    Wn)
  ) {
    i = 0;
    do {
      if (((Wn = !1), (ur = 0), 25 <= i)) throw Error(k(301));
      ((i += 1),
        (q = J = null),
        (t.updateQueue = null),
        (Qr.current = dp),
        (e = n(r, o)));
    } while (Wn);
  }
  if (
    ((Qr.current = wo),
    (t = J !== null && J.next !== null),
    (At = 0),
    (q = J = W = null),
    (vo = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function Jl() {
  var e = ur !== 0;
  return ((ur = 0), e);
}
function We() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (q === null ? (W.memoizedState = q = e) : (q = q.next = e), q);
}
function $e() {
  if (J === null) {
    var e = W.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = J.next;
  var t = q === null ? W.memoizedState : q.next;
  if (t !== null) ((q = t), (J = e));
  else {
    if (e === null) throw Error(k(310));
    ((J = e),
      (e = {
        memoizedState: J.memoizedState,
        baseState: J.baseState,
        baseQueue: J.baseQueue,
        queue: J.queue,
        next: null,
      }),
      q === null ? (W.memoizedState = q = e) : (q = q.next = e));
  }
  return q;
}
function cr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function pi(e) {
  var t = $e(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = J,
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
      var d = u.lane;
      if ((At & d) === d)
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
        var p = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (a === null ? ((s = a = p), (l = r)) : (a = a.next = p),
          (W.lanes |= d),
          (Vt |= d));
      }
      u = u.next;
    } while (u !== null && u !== i);
    (a === null ? (l = r) : (a.next = s),
      Be(r, t.memoizedState) || (ve = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = a),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do ((i = o.lane), (W.lanes |= i), (Vt |= i), (o = o.next));
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function hi(e) {
  var t = $e(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do ((i = e(i, l.action)), (l = l.next));
    while (l !== o);
    (Be(i, t.memoizedState) || (ve = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i));
  }
  return [i, r];
}
function rc() {}
function oc(e, t) {
  var n = W,
    r = $e(),
    o = t(),
    i = !Be(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (ve = !0)),
    (r = r.queue),
    Xl(sc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (q !== null && q.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      dr(9, lc.bind(null, n, r, o, t), void 0, null),
      ee === null)
    )
      throw Error(k(349));
    At & 30 || ic(n, t, o);
  }
  return o;
}
function ic(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = W.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (W.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function lc(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), ac(t) && uc(e));
}
function sc(e, t, n) {
  return n(function () {
    ac(t) && uc(e);
  });
}
function ac(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Be(e, n);
  } catch {
    return !0;
  }
}
function uc(e) {
  var t = rt(e, 1);
  t !== null && Ve(t, e, 1, -1);
}
function Zs(e) {
  var t = We();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: cr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = ap.bind(null, W, e)),
    [t.memoizedState, e]
  );
}
function dr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = W.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (W.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function cc() {
  return $e().memoizedState;
}
function Yr(e, t, n, r) {
  var o = We();
  ((W.flags |= e),
    (o.memoizedState = dr(1 | t, n, void 0, r === void 0 ? null : r)));
}
function zo(e, t, n, r) {
  var o = $e();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (J !== null) {
    var l = J.memoizedState;
    if (((i = l.destroy), r !== null && Yl(r, l.deps))) {
      o.memoizedState = dr(t, n, i, r);
      return;
    }
  }
  ((W.flags |= e), (o.memoizedState = dr(1 | t, n, i, r)));
}
function qs(e, t) {
  return Yr(8390656, 8, e, t);
}
function Xl(e, t) {
  return zo(2048, 8, e, t);
}
function dc(e, t) {
  return zo(4, 2, e, t);
}
function fc(e, t) {
  return zo(4, 4, e, t);
}
function pc(e, t) {
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
function hc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    zo(4, 4, pc.bind(null, t, e), n)
  );
}
function Zl() {}
function gc(e, t) {
  var n = $e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Yl(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function mc(e, t) {
  var n = $e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Yl(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function yc(e, t, n) {
  return At & 21
    ? (Be(n, t) || ((n = ku()), (W.lanes |= n), (Vt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ve = !0)), (e.memoizedState = n));
}
function lp(e, t) {
  var n = M;
  ((M = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = fi.transition;
  fi.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((M = n), (fi.transition = r));
  }
}
function vc() {
  return $e().memoizedState;
}
function sp(e, t, n) {
  var r = xt(e);
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
    xc(t, n);
  else if (((n = ec(e, t, n, r)), n !== null)) {
    var o = fe();
    (Ve(n, e, r, o), Sc(n, t, r));
  }
}
function ap(e, t, n) {
  var r = xt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (wc(e)) xc(t, o);
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
        if (((o.hasEagerState = !0), (o.eagerState = s), Be(s, l))) {
          var a = t.interleaved;
          (a === null
            ? ((o.next = o), Hl(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o));
          return;
        }
      } catch {
      } finally {
      }
    ((n = ec(e, t, o, r)),
      n !== null && ((o = fe()), Ve(n, e, r, o), Sc(n, t, r)));
  }
}
function wc(e) {
  var t = e.alternate;
  return e === W || (t !== null && t === W);
}
function xc(e, t) {
  Wn = vo = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function Sc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ol(e, n));
  }
}
var wo = {
    readContext: Ie,
    useCallback: oe,
    useContext: oe,
    useEffect: oe,
    useImperativeHandle: oe,
    useInsertionEffect: oe,
    useLayoutEffect: oe,
    useMemo: oe,
    useReducer: oe,
    useRef: oe,
    useState: oe,
    useDebugValue: oe,
    useDeferredValue: oe,
    useTransition: oe,
    useMutableSource: oe,
    useSyncExternalStore: oe,
    useId: oe,
    unstable_isNewReconciler: !1,
  },
  up = {
    readContext: Ie,
    useCallback: function (e, t) {
      return ((We().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Ie,
    useEffect: qs,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Yr(4194308, 4, pc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Yr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Yr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = We();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = We();
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
        (e = e.dispatch = sp.bind(null, W, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = We();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: Zs,
    useDebugValue: Zl,
    useDeferredValue: function (e) {
      return (We().memoizedState = e);
    },
    useTransition: function () {
      var e = Zs(!1),
        t = e[0];
      return ((e = lp.bind(null, e[1])), (We().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = W,
        o = We();
      if (H) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), ee === null)) throw Error(k(349));
        At & 30 || ic(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        qs(sc.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        dr(9, lc.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = We(),
        t = ee.identifierPrefix;
      if (H) {
        var n = qe,
          r = Ze;
        ((n = (r & ~(1 << (32 - Ae(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ur++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = ip++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  cp = {
    readContext: Ie,
    useCallback: gc,
    useContext: Ie,
    useEffect: Xl,
    useImperativeHandle: hc,
    useInsertionEffect: dc,
    useLayoutEffect: fc,
    useMemo: mc,
    useReducer: pi,
    useRef: cc,
    useState: function () {
      return pi(cr);
    },
    useDebugValue: Zl,
    useDeferredValue: function (e) {
      var t = $e();
      return yc(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = pi(cr)[0],
        t = $e().memoizedState;
      return [e, t];
    },
    useMutableSource: rc,
    useSyncExternalStore: oc,
    useId: vc,
    unstable_isNewReconciler: !1,
  },
  dp = {
    readContext: Ie,
    useCallback: gc,
    useContext: Ie,
    useEffect: Xl,
    useImperativeHandle: hc,
    useInsertionEffect: dc,
    useLayoutEffect: fc,
    useMemo: mc,
    useReducer: hi,
    useRef: cc,
    useState: function () {
      return hi(cr);
    },
    useDebugValue: Zl,
    useDeferredValue: function (e) {
      var t = $e();
      return J === null ? (t.memoizedState = e) : yc(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = hi(cr)[0],
        t = $e().memoizedState;
      return [e, t];
    },
    useMutableSource: rc,
    useSyncExternalStore: oc,
    useId: vc,
    unstable_isNewReconciler: !1,
  };
function Me(e, t) {
  if (e && e.defaultProps) {
    ((t = K({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Zi(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : K({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var Mo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? bt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = fe(),
      o = xt(e),
      i = et(r, o);
    ((i.payload = t),
      n != null && (i.callback = n),
      (t = vt(e, i, o)),
      t !== null && (Ve(t, e, o, r), Kr(t, e, o)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = fe(),
      o = xt(e),
      i = et(r, o);
    ((i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = vt(e, i, o)),
      t !== null && (Ve(t, e, o, r), Kr(t, e, o)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = fe(),
      r = xt(e),
      o = et(n, r);
    ((o.tag = 2),
      t != null && (o.callback = t),
      (t = vt(e, o, r)),
      t !== null && (Ve(t, e, r, n), Kr(t, e, r)));
  },
};
function ea(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
        ? !rr(n, r) || !rr(o, i)
        : !0
  );
}
function kc(e, t, n) {
  var r = !1,
    o = Nt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ie(i))
      : ((o = xe(t) ? Ft : se.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? mn(e, o) : Nt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Mo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function ta(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Mo.enqueueReplaceState(t, t.state, null));
}
function qi(e, t, n, r) {
  var o = e.stateNode;
  ((o.props = n), (o.state = e.memoizedState), (o.refs = {}), bl(e));
  var i = t.contextType;
  (typeof i == "object" && i !== null
    ? (o.context = Ie(i))
    : ((i = xe(t) ? Ft : se.current), (o.context = mn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Zi(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Mo.enqueueReplaceState(o, o.state, null),
      mo(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308));
}
function xn(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += Fd(r)), (r = r.return));
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
function gi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function el(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var fp = typeof WeakMap == "function" ? WeakMap : Map;
function Nc(e, t, n) {
  ((n = et(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (So || ((So = !0), (cl = r)), el(e, t));
    }),
    n
  );
}
function Ec(e, t, n) {
  ((n = et(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    ((n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        el(e, t);
      }));
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        (el(e, t),
          typeof r != "function" &&
            (wt === null ? (wt = new Set([this])) : wt.add(this)));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function na(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new fp();
    var o = new Set();
    r.set(t, o);
  } else ((o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o)));
  o.has(n) || (o.add(n), (e = Lp.bind(null, e, t, n)), t.then(e, e));
}
function ra(e) {
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
function oa(e, t, n, r, o) {
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
              : ((t = et(-1, 1)), (t.tag = 2), vt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var pp = it.ReactCurrentOwner,
  ve = !1;
function de(e, t, n, r) {
  t.child = e === null ? qu(t, null, n, r) : vn(t, e.child, n, r);
}
function ia(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    pn(t, o),
    (r = Gl(e, t, n, r, i, o)),
    (n = Jl()),
    e !== null && !ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        ot(e, t, o))
      : (H && n && Ml(t), (t.flags |= 1), de(e, t, r, o), t.child)
  );
}
function la(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !ls(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Cc(e, t, i, r, o))
      : ((e = Zr(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : rr), n(l, r) && e.ref === t.ref)
    )
      return ot(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = St(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Cc(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (rr(i, r) && e.ref === t.ref)
      if (((ve = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (ve = !0);
      else return ((t.lanes = e.lanes), ot(e, t, o));
  }
  return tl(e, t, n, r, o);
}
function Lc(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        U(an, Ne),
        (Ne |= n));
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
          U(an, Ne),
          (Ne |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        U(an, Ne),
        (Ne |= r));
    }
  else
    (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      U(an, Ne),
      (Ne |= r));
  return (de(e, t, o, n), t.child);
}
function Rc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function tl(e, t, n, r, o) {
  var i = xe(n) ? Ft : se.current;
  return (
    (i = mn(t, i)),
    pn(t, o),
    (n = Gl(e, t, n, r, i, o)),
    (r = Jl()),
    e !== null && !ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        ot(e, t, o))
      : (H && r && Ml(t), (t.flags |= 1), de(e, t, n, o), t.child)
  );
}
function sa(e, t, n, r, o) {
  if (xe(n)) {
    var i = !0;
    co(t);
  } else i = !1;
  if ((pn(t, o), t.stateNode === null))
    (Gr(e, t), kc(t, n, r), qi(t, n, r, o), (r = !0));
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var a = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Ie(u))
      : ((u = xe(n) ? Ft : se.current), (u = mn(t, u)));
    var d = n.getDerivedStateFromProps,
      p =
        typeof d == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    (p ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== r || a !== u) && ta(t, l, r, u)),
      (ut = !1));
    var c = t.memoizedState;
    ((l.state = c),
      mo(t, r, l, o),
      (a = t.memoizedState),
      s !== r || c !== a || we.current || ut
        ? (typeof d == "function" && (Zi(t, n, d, r), (a = t.memoizedState)),
          (s = ut || ea(t, n, s, r, c, a, u))
            ? (p ||
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
      tc(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : Me(t.type, s)),
      (l.props = u),
      (p = t.pendingProps),
      (c = l.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Ie(a))
        : ((a = xe(n) ? Ft : se.current), (a = mn(t, a))));
    var v = n.getDerivedStateFromProps;
    ((d =
      typeof v == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== p || c !== a) && ta(t, l, r, a)),
      (ut = !1),
      (c = t.memoizedState),
      (l.state = c),
      mo(t, r, l, o));
    var w = t.memoizedState;
    s !== p || c !== w || we.current || ut
      ? (typeof v == "function" && (Zi(t, n, v, r), (w = t.memoizedState)),
        (u = ut || ea(t, n, u, r, c, w, a) || !1)
          ? (d ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, w, a),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, w, a)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (s === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (l.props = r),
        (l.state = w),
        (l.context = a),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (s === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return nl(e, t, n, r, i, o);
}
function nl(e, t, n, r, o, i) {
  Rc(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return (o && Ks(t, n, !1), ot(e, t, i));
  ((r = t.stateNode), (pp.current = t));
  var s =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = vn(t, e.child, null, i)), (t.child = vn(t, null, s, i)))
      : de(e, t, s, i),
    (t.memoizedState = r.state),
    o && Ks(t, n, !0),
    t.child
  );
}
function Pc(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Ws(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ws(e, t.context, !1),
    Wl(e, t.containerInfo));
}
function aa(e, t, n, r, o) {
  return (yn(), Ul(o), (t.flags |= 256), de(e, t, n, r), t.child);
}
var rl = { dehydrated: null, treeContext: null, retryLane: 0 };
function ol(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Oc(e, t, n) {
  var r = t.pendingProps,
    o = b.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    U(b, o & 1),
    e === null)
  )
    return (
      Ji(t),
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
                : (i = Ao(l, r, 0, null)),
              (e = zt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = ol(n)),
              (t.memoizedState = rl),
              e)
            : ql(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return hp(e, t, l, r, s, o, n);
  if (i) {
    ((i = r.fallback), (l = t.mode), (o = e.child), (s = o.sibling));
    var a = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = St(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = St(s, i)) : ((i = zt(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? ol(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = rl),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = St(i, { mode: "visible", children: r.children })),
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
function ql(e, t) {
  return (
    (t = Ao({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function $r(e, t, n, r) {
  return (
    r !== null && Ul(r),
    vn(t, e.child, null, n),
    (e = ql(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function hp(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = gi(Error(k(422)))), $r(e, t, l, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = Ao({ mode: "visible", children: r.children }, o, 0, null)),
          (i = zt(i, o, l, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && vn(t, e.child, null, l),
          (t.child.memoizedState = ol(l)),
          (t.memoizedState = rl),
          i);
  if (!(t.mode & 1)) return $r(e, t, l, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (
      (r = s),
      (i = Error(k(419))),
      (r = gi(i, r, void 0)),
      $r(e, t, l, r)
    );
  }
  if (((s = (l & e.childLanes) !== 0), ve || s)) {
    if (((r = ee), r !== null)) {
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
          ((i.retryLane = o), rt(e, o), Ve(r, e, o, -1)));
    }
    return (is(), (r = gi(Error(k(421)))), $r(e, t, l, r));
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Rp.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ee = yt(o.nextSibling)),
      (Ce = t),
      (H = !0),
      (Ue = null),
      e !== null &&
        ((_e[Te++] = Ze),
        (_e[Te++] = qe),
        (_e[Te++] = Ut),
        (Ze = e.id),
        (qe = e.overflow),
        (Ut = t)),
      (t = ql(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ua(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), Xi(e.return, t, n));
}
function mi(e, t, n, r, o) {
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
function _c(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((de(e, t, r.children, n), (r = b.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ua(e, n, t);
        else if (e.tag === 19) ua(e, n, t);
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
  if ((U(b, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          ((e = n.alternate),
            e !== null && yo(e) === null && (o = n),
            (n = n.sibling));
        ((n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          mi(t, !1, o, n, i));
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && yo(e) === null)) {
            t.child = o;
            break;
          }
          ((e = o.sibling), (o.sibling = n), (n = o), (o = e));
        }
        mi(t, !0, n, null, i);
        break;
      case "together":
        mi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Gr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ot(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Vt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = St(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = St(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function gp(e, t, n) {
  switch (t.tag) {
    case 3:
      (Pc(t), yn());
      break;
    case 5:
      nc(t);
      break;
    case 1:
      xe(t.type) && co(t);
      break;
    case 4:
      Wl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      (U(ho, r._currentValue), (r._currentValue = o));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (U(b, b.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Oc(e, t, n)
            : (U(b, b.current & 1),
              (e = ot(e, t, n)),
              e !== null ? e.sibling : null);
      U(b, b.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return _c(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        U(b, b.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Lc(e, t, n));
  }
  return ot(e, t, n);
}
var Tc, il, Dc, jc;
Tc = function (e, t) {
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
il = function () {};
Dc = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    ((e = t.stateNode), It(Ge.current));
    var i = null;
    switch (n) {
      case "input":
        ((o = Ri(e, o)), (r = Ri(e, r)), (i = []));
        break;
      case "select":
        ((o = K({}, o, { value: void 0 })),
          (r = K({}, r, { value: void 0 })),
          (i = []));
        break;
      case "textarea":
        ((o = _i(e, o)), (r = _i(e, r)), (i = []));
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ao);
    }
    Di(n, r);
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
            (Jn.hasOwnProperty(u)
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
                (Jn.hasOwnProperty(u)
                  ? (a != null && u === "onScroll" && A("scroll", e),
                    i || s === a || (i = []))
                  : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
jc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Tn(e, t) {
  if (!H)
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
function ie(e) {
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
function mp(e, t, n) {
  var r = t.pendingProps;
  switch ((Fl(t), t.tag)) {
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
      return (ie(t), null);
    case 1:
      return (xe(t.type) && uo(), ie(t), null);
    case 3:
      return (
        (r = t.stateNode),
        wn(),
        V(we),
        V(se),
        Ql(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (jr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ue !== null && (pl(Ue), (Ue = null)))),
        il(e, t),
        ie(t),
        null
      );
    case 5:
      Kl(t);
      var o = It(ar.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Dc(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return (ie(t), null);
        }
        if (((e = It(Ge.current)), jr(t))) {
          ((r = t.stateNode), (n = t.type));
          var i = t.memoizedProps;
          switch (((r[Ke] = t), (r[lr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (A("cancel", r), A("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              A("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Un.length; o++) A(Un[o], r);
              break;
            case "source":
              A("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (A("error", r), A("load", r));
              break;
            case "details":
              A("toggle", r);
              break;
            case "input":
              (vs(r, i), A("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!i.multiple }),
                A("invalid", r));
              break;
            case "textarea":
              (xs(r, i), A("invalid", r));
          }
          (Di(n, i), (o = null));
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var s = i[l];
              l === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Dr(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Dr(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : Jn.hasOwnProperty(l) &&
                  s != null &&
                  l === "onScroll" &&
                  A("scroll", r);
            }
          switch (n) {
            case "input":
              (Er(r), ws(r, i, !0));
              break;
            case "textarea":
              (Er(r), Ss(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ao);
          }
          ((r = o), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((l = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = su(n)),
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
            (e[Ke] = t),
            (e[lr] = r),
            Tc(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((l = ji(n, r)), n)) {
              case "dialog":
                (A("cancel", e), A("close", e), (o = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (A("load", e), (o = r));
                break;
              case "video":
              case "audio":
                for (o = 0; o < Un.length; o++) A(Un[o], e);
                o = r;
                break;
              case "source":
                (A("error", e), (o = r));
                break;
              case "img":
              case "image":
              case "link":
                (A("error", e), A("load", e), (o = r));
                break;
              case "details":
                (A("toggle", e), (o = r));
                break;
              case "input":
                (vs(e, r), (o = Ri(e, r)), A("invalid", e));
                break;
              case "option":
                o = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = K({}, r, { value: void 0 })),
                  A("invalid", e));
                break;
              case "textarea":
                (xs(e, r), (o = _i(e, r)), A("invalid", e));
                break;
              default:
                o = r;
            }
            (Di(n, o), (s = o));
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var a = s[i];
                i === "style"
                  ? cu(e, a)
                  : i === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && au(e, a))
                    : i === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && Xn(e, a)
                        : typeof a == "number" && Xn(e, "" + a)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (Jn.hasOwnProperty(i)
                          ? a != null && i === "onScroll" && A("scroll", e)
                          : a != null && Nl(e, i, a, l));
              }
            switch (n) {
              case "input":
                (Er(e), ws(e, r, !1));
                break;
              case "textarea":
                (Er(e), Ss(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + kt(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? un(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      un(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ao);
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
      return (ie(t), null);
    case 6:
      if (e && t.stateNode != null) jc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = It(ar.current)), It(Ge.current), jr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ke] = t),
            (i = r.nodeValue !== n) && ((e = Ce), e !== null))
          )
            switch (e.tag) {
              case 3:
                Dr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Dr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ke] = t),
            (t.stateNode = r));
      }
      return (ie(t), null);
    case 13:
      if (
        (V(b),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (H && Ee !== null && t.mode & 1 && !(t.flags & 128))
          (Xu(), yn(), (t.flags |= 98560), (i = !1));
        else if (((i = jr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(k(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(k(317));
            i[Ke] = t;
          } else
            (yn(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (ie(t), (i = !1));
        } else (Ue !== null && (pl(Ue), (Ue = null)), (i = !0));
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || b.current & 1 ? X === 0 && (X = 3) : is())),
          t.updateQueue !== null && (t.flags |= 4),
          ie(t),
          null);
    case 4:
      return (
        wn(),
        il(e, t),
        e === null && or(t.stateNode.containerInfo),
        ie(t),
        null
      );
    case 10:
      return (Bl(t.type._context), ie(t), null);
    case 17:
      return (xe(t.type) && uo(), ie(t), null);
    case 19:
      if ((V(b), (i = t.memoizedState), i === null)) return (ie(t), null);
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) Tn(i, !1);
        else {
          if (X !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = yo(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Tn(i, !1),
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
                return (U(b, (b.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Y() > Sn &&
            ((t.flags |= 128), (r = !0), Tn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = yo(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Tn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !H)
            )
              return (ie(t), null);
          } else
            2 * Y() - i.renderingStartTime > Sn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Tn(i, !1), (t.lanes = 4194304));
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
          (i.renderingStartTime = Y()),
          (t.sibling = null),
          (n = b.current),
          U(b, r ? (n & 1) | 2 : n & 1),
          t)
        : (ie(t), null);
    case 22:
    case 23:
      return (
        os(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ne & 1073741824 && (ie(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ie(t),
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
  switch ((Fl(t), t.tag)) {
    case 1:
      return (
        xe(t.type) && uo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        wn(),
        V(we),
        V(se),
        Ql(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Kl(t), null);
    case 13:
      if ((V(b), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        yn();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (V(b), null);
    case 4:
      return (wn(), null);
    case 10:
      return (Bl(t.type._context), null);
    case 22:
    case 23:
      return (os(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var zr = !1,
  le = !1,
  vp = typeof WeakSet == "function" ? WeakSet : Set,
  R = null;
function sn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Q(e, t, r);
      }
    else n.current = null;
}
function ll(e, t, n) {
  try {
    n();
  } catch (r) {
    Q(e, t, r);
  }
}
var ca = !1;
function wp(e, t) {
  if (((Hi = io), (e = Fu()), zl(e))) {
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
            d = 0,
            p = e,
            c = null;
          t: for (;;) {
            for (
              var v;
              p !== n || (o !== 0 && p.nodeType !== 3) || (s = l + o),
                p !== i || (r !== 0 && p.nodeType !== 3) || (a = l + r),
                p.nodeType === 3 && (l += p.nodeValue.length),
                (v = p.firstChild) !== null;
            )
              ((c = p), (p = v));
            for (;;) {
              if (p === e) break t;
              if (
                (c === n && ++u === o && (s = l),
                c === i && ++d === r && (a = l),
                (v = p.nextSibling) !== null)
              )
                break;
              ((p = c), (c = p.parentNode));
            }
            p = v;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (bi = { focusedElem: e, selectionRange: n }, io = !1, R = t; R !== null; )
    if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (R = e));
    else
      for (; R !== null; ) {
        t = R;
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
                    O = w.memoizedState,
                    h = t.stateNode,
                    f = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : Me(t.type, S),
                      O,
                    );
                  h.__reactInternalSnapshotBeforeUpdate = f;
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
                throw Error(k(163));
            }
        } catch (y) {
          Q(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (R = e));
          break;
        }
        R = t.return;
      }
  return ((w = ca), (ca = !1), w);
}
function Kn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        ((o.destroy = void 0), i !== void 0 && ll(t, n, i));
      }
      o = o.next;
    } while (o !== r);
  }
}
function Fo(e, t) {
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
function sl(e) {
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
function Ic(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Ic(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ke], delete t[lr], delete t[Qi], delete t[tp], delete t[np])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function $c(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function da(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || $c(e.return)) return null;
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
function al(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = ao)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (al(e, t, n), e = e.sibling; e !== null; )
      (al(e, t, n), (e = e.sibling));
}
function ul(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ul(e, t, n), e = e.sibling; e !== null; )
      (ul(e, t, n), (e = e.sibling));
}
var te = null,
  Fe = !1;
function lt(e, t, n) {
  for (n = n.child; n !== null; ) (zc(e, t, n), (n = n.sibling));
}
function zc(e, t, n) {
  if (Ye && typeof Ye.onCommitFiberUnmount == "function")
    try {
      Ye.onCommitFiberUnmount(_o, n);
    } catch {}
  switch (n.tag) {
    case 5:
      le || sn(n, t);
    case 6:
      var r = te,
        o = Fe;
      ((te = null),
        lt(e, t, n),
        (te = r),
        (Fe = o),
        te !== null &&
          (Fe
            ? ((e = te),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : te.removeChild(n.stateNode)));
      break;
    case 18:
      te !== null &&
        (Fe
          ? ((e = te),
            (n = n.stateNode),
            e.nodeType === 8
              ? ui(e.parentNode, n)
              : e.nodeType === 1 && ui(e, n),
            tr(e))
          : ui(te, n.stateNode));
      break;
    case 4:
      ((r = te),
        (o = Fe),
        (te = n.stateNode.containerInfo),
        (Fe = !0),
        lt(e, t, n),
        (te = r),
        (Fe = o));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !le &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          ((i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && ll(n, t, l),
            (o = o.next));
        } while (o !== r);
      }
      lt(e, t, n);
      break;
    case 1:
      if (
        !le &&
        (sn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (s) {
          Q(n, t, s);
        }
      lt(e, t, n);
      break;
    case 21:
      lt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((le = (r = le) || n.memoizedState !== null), lt(e, t, n), (le = r))
        : lt(e, t, n);
      break;
    default:
      lt(e, t, n);
  }
}
function fa(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new vp()),
      t.forEach(function (r) {
        var o = Pp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      }));
  }
}
function ze(e, t) {
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
              ((te = s.stateNode), (Fe = !1));
              break e;
            case 3:
              ((te = s.stateNode.containerInfo), (Fe = !0));
              break e;
            case 4:
              ((te = s.stateNode.containerInfo), (Fe = !0));
              break e;
          }
          s = s.return;
        }
        if (te === null) throw Error(k(160));
        (zc(i, l, o), (te = null), (Fe = !1));
        var a = o.alternate;
        (a !== null && (a.return = null), (o.return = null));
      } catch (u) {
        Q(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (Mc(t, e), (t = t.sibling));
}
function Mc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ze(t, e), be(e), r & 4)) {
        try {
          (Kn(3, e, e.return), Fo(3, e));
        } catch (S) {
          Q(e, e.return, S);
        }
        try {
          Kn(5, e, e.return);
        } catch (S) {
          Q(e, e.return, S);
        }
      }
      break;
    case 1:
      (ze(t, e), be(e), r & 512 && n !== null && sn(n, n.return));
      break;
    case 5:
      if (
        (ze(t, e),
        be(e),
        r & 512 && n !== null && sn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Xn(o, "");
        } catch (S) {
          Q(e, e.return, S);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            (s === "input" && i.type === "radio" && i.name != null && iu(o, i),
              ji(s, l));
            var u = ji(s, i);
            for (l = 0; l < a.length; l += 2) {
              var d = a[l],
                p = a[l + 1];
              d === "style"
                ? cu(o, p)
                : d === "dangerouslySetInnerHTML"
                  ? au(o, p)
                  : d === "children"
                    ? Xn(o, p)
                    : Nl(o, d, p, u);
            }
            switch (s) {
              case "input":
                Pi(o, i);
                break;
              case "textarea":
                lu(o, i);
                break;
              case "select":
                var c = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var v = i.value;
                v != null
                  ? un(o, !!i.multiple, v, !1)
                  : c !== !!i.multiple &&
                    (i.defaultValue != null
                      ? un(o, !!i.multiple, i.defaultValue, !0)
                      : un(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[lr] = i;
          } catch (S) {
            Q(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((ze(t, e), be(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        ((o = e.stateNode), (i = e.memoizedProps));
        try {
          o.nodeValue = i;
        } catch (S) {
          Q(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (ze(t, e), be(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          tr(t.containerInfo);
        } catch (S) {
          Q(e, e.return, S);
        }
      break;
    case 4:
      (ze(t, e), be(e));
      break;
    case 13:
      (ze(t, e),
        be(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (ns = Y())),
        r & 4 && fa(e));
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((le = (u = le) || d), ze(t, e), (le = u)) : ze(t, e),
        be(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (R = e, d = e.child; d !== null; ) {
            for (p = R = d; R !== null; ) {
              switch (((c = R), (v = c.child), c.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Kn(4, c, c.return);
                  break;
                case 1:
                  sn(c, c.return);
                  var w = c.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    ((r = c), (n = c.return));
                    try {
                      ((t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount());
                    } catch (S) {
                      Q(r, n, S);
                    }
                  }
                  break;
                case 5:
                  sn(c, c.return);
                  break;
                case 22:
                  if (c.memoizedState !== null) {
                    ha(p);
                    continue;
                  }
              }
              v !== null ? ((v.return = c), (R = v)) : ha(p);
            }
            d = d.sibling;
          }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                ((o = p.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = p.stateNode),
                      (a = p.memoizedProps.style),
                      (l =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = uu("display", l))));
              } catch (S) {
                Q(e, e.return, S);
              }
            }
          } else if (p.tag === 6) {
            if (d === null)
              try {
                p.stateNode.nodeValue = u ? "" : p.memoizedProps;
              } catch (S) {
                Q(e, e.return, S);
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
            (d === p && (d = null), (p = p.return));
          }
          (d === p && (d = null),
            (p.sibling.return = p.return),
            (p = p.sibling));
        }
      }
      break;
    case 19:
      (ze(t, e), be(e), r & 4 && fa(e));
      break;
    case 21:
      break;
    default:
      (ze(t, e), be(e));
  }
}
function be(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if ($c(n)) {
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
          r.flags & 32 && (Xn(o, ""), (r.flags &= -33));
          var i = da(e);
          ul(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = da(e);
          al(e, s, l);
          break;
        default:
          throw Error(k(161));
      }
    } catch (a) {
      Q(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function xp(e, t, n) {
  ((R = e), Fc(e));
}
function Fc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var o = R,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || zr;
      if (!l) {
        var s = o.alternate,
          a = (s !== null && s.memoizedState !== null) || le;
        s = zr;
        var u = le;
        if (((zr = l), (le = a) && !u))
          for (R = o; R !== null; )
            ((l = R),
              (a = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? ga(o)
                : a !== null
                  ? ((a.return = l), (R = a))
                  : ga(o));
        for (; i !== null; ) ((R = i), Fc(i), (i = i.sibling));
        ((R = o), (zr = s), (le = u));
      }
      pa(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (R = i)) : pa(e);
  }
}
function pa(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              le || Fo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !le)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Me(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && Xs(t, i, r);
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
                Xs(t, l, n);
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
                  var d = u.memoizedState;
                  if (d !== null) {
                    var p = d.dehydrated;
                    p !== null && tr(p);
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
        le || (t.flags & 512 && sl(t));
      } catch (c) {
        Q(t, t.return, c);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (R = n));
      break;
    }
    R = t.return;
  }
}
function ha(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (R = n));
      break;
    }
    R = t.return;
  }
}
function ga(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Fo(4, t);
          } catch (a) {
            Q(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Q(t, o, a);
            }
          }
          var i = t.return;
          try {
            sl(t);
          } catch (a) {
            Q(t, i, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            sl(t);
          } catch (a) {
            Q(t, l, a);
          }
      }
    } catch (a) {
      Q(t, t.return, a);
    }
    if (t === e) {
      R = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      ((s.return = t.return), (R = s));
      break;
    }
    R = t.return;
  }
}
var Sp = Math.ceil,
  xo = it.ReactCurrentDispatcher,
  es = it.ReactCurrentOwner,
  je = it.ReactCurrentBatchConfig,
  $ = 0,
  ee = null,
  G = null,
  ne = 0,
  Ne = 0,
  an = Ct(0),
  X = 0,
  fr = null,
  Vt = 0,
  Uo = 0,
  ts = 0,
  Qn = null,
  ye = null,
  ns = 0,
  Sn = 1 / 0,
  Je = null,
  So = !1,
  cl = null,
  wt = null,
  Mr = !1,
  pt = null,
  ko = 0,
  Yn = 0,
  dl = null,
  Jr = -1,
  Xr = 0;
function fe() {
  return $ & 6 ? Y() : Jr !== -1 ? Jr : (Jr = Y());
}
function xt(e) {
  return e.mode & 1
    ? $ & 2 && ne !== 0
      ? ne & -ne
      : op.transition !== null
        ? (Xr === 0 && (Xr = ku()), Xr)
        : ((e = M),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ou(e.type))),
          e)
    : 1;
}
function Ve(e, t, n, r) {
  if (50 < Yn) throw ((Yn = 0), (dl = null), Error(k(185)));
  (mr(e, n, r),
    (!($ & 2) || e !== ee) &&
      (e === ee && (!($ & 2) && (Uo |= n), X === 4 && dt(e, ne)),
      Se(e, r),
      n === 1 && $ === 0 && !(t.mode & 1) && ((Sn = Y() + 500), $o && Lt())));
}
function Se(e, t) {
  var n = e.callbackNode;
  rf(e, t);
  var r = oo(e, e === ee ? ne : 0);
  if (r === 0)
    (n !== null && Es(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Es(n), t === 1))
      (e.tag === 0 ? rp(ma.bind(null, e)) : Yu(ma.bind(null, e)),
        qf(function () {
          !($ & 6) && Lt();
        }),
        (n = null));
    else {
      switch (Nu(r)) {
        case 1:
          n = Pl;
          break;
        case 4:
          n = xu;
          break;
        case 16:
          n = ro;
          break;
        case 536870912:
          n = Su;
          break;
        default:
          n = ro;
      }
      n = Kc(n, Uc.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function Uc(e, t) {
  if (((Jr = -1), (Xr = 0), $ & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (hn() && e.callbackNode !== n) return null;
  var r = oo(e, e === ee ? ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = No(e, r);
  else {
    t = r;
    var o = $;
    $ |= 2;
    var i = Vc();
    (ee !== e || ne !== t) && ((Je = null), (Sn = Y() + 500), $t(e, t));
    do
      try {
        Ep();
        break;
      } catch (s) {
        Ac(e, s);
      }
    while (!0);
    (Vl(),
      (xo.current = i),
      ($ = o),
      G !== null ? (t = 0) : ((ee = null), (ne = 0), (t = X)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Fi(e)), o !== 0 && ((r = o), (t = fl(e, o)))), t === 1)
    )
      throw ((n = fr), $t(e, 0), dt(e, r), Se(e, Y()), n);
    if (t === 6) dt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !kp(o) &&
          ((t = No(e, r)),
          t === 2 && ((i = Fi(e)), i !== 0 && ((r = i), (t = fl(e, i)))),
          t === 1))
      )
        throw ((n = fr), $t(e, 0), dt(e, r), Se(e, Y()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Tt(e, ye, Je);
          break;
        case 3:
          if (
            (dt(e, r), (r & 130023424) === r && ((t = ns + 500 - Y()), 10 < t))
          ) {
            if (oo(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              (fe(), (e.pingedLanes |= e.suspendedLanes & o));
              break;
            }
            e.timeoutHandle = Ki(Tt.bind(null, e, ye, Je), t);
            break;
          }
          Tt(e, ye, Je);
          break;
        case 4:
          if ((dt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - Ae(r);
            ((i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i));
          }
          if (
            ((r = o),
            (r = Y() - r),
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
            e.timeoutHandle = Ki(Tt.bind(null, e, ye, Je), r);
            break;
          }
          Tt(e, ye, Je);
          break;
        case 5:
          Tt(e, ye, Je);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return (Se(e, Y()), e.callbackNode === n ? Uc.bind(null, e) : null);
}
function fl(e, t) {
  var n = Qn;
  return (
    e.current.memoizedState.isDehydrated && ($t(e, t).flags |= 256),
    (e = No(e, t)),
    e !== 2 && ((t = ye), (ye = n), t !== null && pl(t)),
    e
  );
}
function pl(e) {
  ye === null ? (ye = e) : ye.push.apply(ye, e);
}
function kp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Be(i(), o)) return !1;
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
function dt(e, t) {
  for (
    t &= ~ts,
      t &= ~Uo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - Ae(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function ma(e) {
  if ($ & 6) throw Error(k(327));
  hn();
  var t = oo(e, 0);
  if (!(t & 1)) return (Se(e, Y()), null);
  var n = No(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Fi(e);
    r !== 0 && ((t = r), (n = fl(e, r)));
  }
  if (n === 1) throw ((n = fr), $t(e, 0), dt(e, t), Se(e, Y()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Tt(e, ye, Je),
    Se(e, Y()),
    null
  );
}
function rs(e, t) {
  var n = $;
  $ |= 1;
  try {
    return e(t);
  } finally {
    (($ = n), $ === 0 && ((Sn = Y() + 500), $o && Lt()));
  }
}
function Bt(e) {
  pt !== null && pt.tag === 0 && !($ & 6) && hn();
  var t = $;
  $ |= 1;
  var n = je.transition,
    r = M;
  try {
    if (((je.transition = null), (M = 1), e)) return e();
  } finally {
    ((M = r), (je.transition = n), ($ = t), !($ & 6) && Lt());
  }
}
function os() {
  ((Ne = an.current), V(an));
}
function $t(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Zf(n)), G !== null))
    for (n = G.return; n !== null; ) {
      var r = n;
      switch ((Fl(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && uo());
          break;
        case 3:
          (wn(), V(we), V(se), Ql());
          break;
        case 5:
          Kl(r);
          break;
        case 4:
          wn();
          break;
        case 13:
          V(b);
          break;
        case 19:
          V(b);
          break;
        case 10:
          Bl(r.type._context);
          break;
        case 22:
        case 23:
          os();
      }
      n = n.return;
    }
  if (
    ((ee = e),
    (G = e = St(e.current, null)),
    (ne = Ne = t),
    (X = 0),
    (fr = null),
    (ts = Uo = Vt = 0),
    (ye = Qn = null),
    jt !== null)
  ) {
    for (t = 0; t < jt.length; t++)
      if (((n = jt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          ((i.next = o), (r.next = l));
        }
        n.pending = r;
      }
    jt = null;
  }
  return e;
}
function Ac(e, t) {
  do {
    var n = G;
    try {
      if ((Vl(), (Qr.current = wo), vo)) {
        for (var r = W.memoizedState; r !== null; ) {
          var o = r.queue;
          (o !== null && (o.pending = null), (r = r.next));
        }
        vo = !1;
      }
      if (
        ((At = 0),
        (q = J = W = null),
        (Wn = !1),
        (ur = 0),
        (es.current = null),
        n === null || n.return === null)
      ) {
        ((X = 1), (fr = t), (G = null));
        break;
      }
      e: {
        var i = e,
          l = n.return,
          s = n,
          a = t;
        if (
          ((t = ne),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            d = s,
            p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var c = d.alternate;
            c
              ? ((d.updateQueue = c.updateQueue),
                (d.memoizedState = c.memoizedState),
                (d.lanes = c.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var v = ra(l);
          if (v !== null) {
            ((v.flags &= -257),
              oa(v, l, s, i, t),
              v.mode & 1 && na(i, u, t),
              (t = v),
              (a = u));
            var w = t.updateQueue;
            if (w === null) {
              var S = new Set();
              (S.add(a), (t.updateQueue = S));
            } else w.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              (na(i, u, t), is());
              break e;
            }
            a = Error(k(426));
          }
        } else if (H && s.mode & 1) {
          var O = ra(l);
          if (O !== null) {
            (!(O.flags & 65536) && (O.flags |= 256),
              oa(O, l, s, i, t),
              Ul(xn(a, s)));
            break e;
          }
        }
        ((i = a = xn(a, s)),
          X !== 4 && (X = 2),
          Qn === null ? (Qn = [i]) : Qn.push(i),
          (i = l));
        do {
          switch (i.tag) {
            case 3:
              ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
              var h = Nc(i, a, t);
              Js(i, h);
              break e;
            case 1:
              s = a;
              var f = i.type,
                g = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (wt === null || !wt.has(g))))
              ) {
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var y = Ec(i, s, t);
                Js(i, y);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Hc(n);
    } catch (N) {
      ((t = N), G === n && n !== null && (G = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Vc() {
  var e = xo.current;
  return ((xo.current = wo), e === null ? wo : e);
}
function is() {
  ((X === 0 || X === 3 || X === 2) && (X = 4),
    ee === null || (!(Vt & 268435455) && !(Uo & 268435455)) || dt(ee, ne));
}
function No(e, t) {
  var n = $;
  $ |= 2;
  var r = Vc();
  (ee !== e || ne !== t) && ((Je = null), $t(e, t));
  do
    try {
      Np();
      break;
    } catch (o) {
      Ac(e, o);
    }
  while (!0);
  if ((Vl(), ($ = n), (xo.current = r), G !== null)) throw Error(k(261));
  return ((ee = null), (ne = 0), X);
}
function Np() {
  for (; G !== null; ) Bc(G);
}
function Ep() {
  for (; G !== null && !Yd(); ) Bc(G);
}
function Bc(e) {
  var t = Wc(e.alternate, e, Ne);
  ((e.memoizedProps = e.pendingProps),
    t === null ? Hc(e) : (G = t),
    (es.current = null));
}
function Hc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = yp(n, t)), n !== null)) {
        ((n.flags &= 32767), (G = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((X = 6), (G = null));
        return;
      }
    } else if (((n = mp(n, t, Ne)), n !== null)) {
      G = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      G = t;
      return;
    }
    G = t = e;
  } while (t !== null);
  X === 0 && (X = 5);
}
function Tt(e, t, n) {
  var r = M,
    o = je.transition;
  try {
    ((je.transition = null), (M = 1), Cp(e, t, n, r));
  } finally {
    ((je.transition = o), (M = r));
  }
  return null;
}
function Cp(e, t, n, r) {
  do hn();
  while (pt !== null);
  if ($ & 6) throw Error(k(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var i = n.lanes | n.childLanes;
  if (
    (of(e, i),
    e === ee && ((G = ee = null), (ne = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Mr ||
      ((Mr = !0),
      Kc(ro, function () {
        return (hn(), null);
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ((i = je.transition), (je.transition = null));
    var l = M;
    M = 1;
    var s = $;
    (($ |= 4),
      (es.current = null),
      wp(e, n),
      Mc(n, e),
      Wf(bi),
      (io = !!Hi),
      (bi = Hi = null),
      (e.current = n),
      xp(n),
      Gd(),
      ($ = s),
      (M = l),
      (je.transition = i));
  } else e.current = n;
  if (
    (Mr && ((Mr = !1), (pt = e), (ko = o)),
    (i = e.pendingLanes),
    i === 0 && (wt = null),
    Zd(n.stateNode),
    Se(e, Y()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest }));
  if (So) throw ((So = !1), (e = cl), (cl = null), e);
  return (
    ko & 1 && e.tag !== 0 && hn(),
    (i = e.pendingLanes),
    i & 1 ? (e === dl ? Yn++ : ((Yn = 0), (dl = e))) : (Yn = 0),
    Lt(),
    null
  );
}
function hn() {
  if (pt !== null) {
    var e = Nu(ko),
      t = je.transition,
      n = M;
    try {
      if (((je.transition = null), (M = 16 > e ? 16 : e), pt === null))
        var r = !1;
      else {
        if (((e = pt), (pt = null), (ko = 0), $ & 6)) throw Error(k(331));
        var o = $;
        for ($ |= 4, R = e.current; R !== null; ) {
          var i = R,
            l = i.child;
          if (R.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (R = u; R !== null; ) {
                  var d = R;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Kn(8, d, i);
                  }
                  var p = d.child;
                  if (p !== null) ((p.return = d), (R = p));
                  else
                    for (; R !== null; ) {
                      d = R;
                      var c = d.sibling,
                        v = d.return;
                      if ((Ic(d), d === u)) {
                        R = null;
                        break;
                      }
                      if (c !== null) {
                        ((c.return = v), (R = c));
                        break;
                      }
                      R = v;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var S = w.child;
                if (S !== null) {
                  w.child = null;
                  do {
                    var O = S.sibling;
                    ((S.sibling = null), (S = O));
                  } while (S !== null);
                }
              }
              R = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) ((l.return = i), (R = l));
          else
            e: for (; R !== null; ) {
              if (((i = R), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Kn(9, i, i.return);
                }
              var h = i.sibling;
              if (h !== null) {
                ((h.return = i.return), (R = h));
                break e;
              }
              R = i.return;
            }
        }
        var f = e.current;
        for (R = f; R !== null; ) {
          l = R;
          var g = l.child;
          if (l.subtreeFlags & 2064 && g !== null) ((g.return = l), (R = g));
          else
            e: for (l = f; R !== null; ) {
              if (((s = R), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fo(9, s);
                  }
                } catch (N) {
                  Q(s, s.return, N);
                }
              if (s === l) {
                R = null;
                break e;
              }
              var y = s.sibling;
              if (y !== null) {
                ((y.return = s.return), (R = y));
                break e;
              }
              R = s.return;
            }
        }
        if (
          (($ = o), Lt(), Ye && typeof Ye.onPostCommitFiberRoot == "function")
        )
          try {
            Ye.onPostCommitFiberRoot(_o, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((M = n), (je.transition = t));
    }
  }
  return !1;
}
function ya(e, t, n) {
  ((t = xn(n, t)),
    (t = Nc(e, t, 1)),
    (e = vt(e, t, 1)),
    (t = fe()),
    e !== null && (mr(e, 1, t), Se(e, t)));
}
function Q(e, t, n) {
  if (e.tag === 3) ya(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ya(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (wt === null || !wt.has(r)))
        ) {
          ((e = xn(n, e)),
            (e = Ec(t, e, 1)),
            (t = vt(t, e, 1)),
            (e = fe()),
            t !== null && (mr(t, 1, e), Se(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function Lp(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = fe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ee === e &&
      (ne & n) === n &&
      (X === 4 || (X === 3 && (ne & 130023424) === ne && 500 > Y() - ns)
        ? $t(e, 0)
        : (ts |= n)),
    Se(e, t));
}
function bc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Rr), (Rr <<= 1), !(Rr & 130023424) && (Rr = 4194304))
      : (t = 1));
  var n = fe();
  ((e = rt(e, t)), e !== null && (mr(e, t, n), Se(e, n)));
}
function Rp(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), bc(e, n));
}
function Pp(e, t) {
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
  (r !== null && r.delete(t), bc(e, n));
}
var Wc;
Wc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || we.current) ve = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((ve = !1), gp(e, t, n));
      ve = !!(e.flags & 131072);
    }
  else ((ve = !1), H && t.flags & 1048576 && Gu(t, po, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Gr(e, t), (e = t.pendingProps));
      var o = mn(t, se.current);
      (pn(t, n), (o = Gl(null, t, r, e, o, n)));
      var i = Jl();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            xe(r) ? ((i = !0), co(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            bl(t),
            (o.updater = Mo),
            (t.stateNode = o),
            (o._reactInternals = t),
            qi(t, r, e, n),
            (t = nl(null, t, r, !0, i, n)))
          : ((t.tag = 0), H && i && Ml(t), de(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Gr(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = _p(r)),
          (e = Me(r, e)),
          o)
        ) {
          case 0:
            t = tl(null, t, r, e, n);
            break e;
          case 1:
            t = sa(null, t, r, e, n);
            break e;
          case 11:
            t = ia(null, t, r, e, n);
            break e;
          case 14:
            t = la(null, t, r, Me(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Me(r, o)),
        tl(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Me(r, o)),
        sa(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Pc(t), e === null)) throw Error(k(387));
        ((r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          tc(e, t),
          mo(t, r, null, n));
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
            ((o = xn(Error(k(423)), t)), (t = aa(e, t, r, n, o)));
            break e;
          } else if (r !== o) {
            ((o = xn(Error(k(424)), t)), (t = aa(e, t, r, n, o)));
            break e;
          } else
            for (
              Ee = yt(t.stateNode.containerInfo.firstChild),
                Ce = t,
                H = !0,
                Ue = null,
                n = qu(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((yn(), r === o)) {
            t = ot(e, t, n);
            break e;
          }
          de(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        nc(t),
        e === null && Ji(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        Wi(r, o) ? (l = null) : i !== null && Wi(r, i) && (t.flags |= 32),
        Rc(e, t),
        de(e, t, l, n),
        t.child
      );
    case 6:
      return (e === null && Ji(t), null);
    case 13:
      return Oc(e, t, n);
    case 4:
      return (
        Wl(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = vn(t, null, r, n)) : de(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Me(r, o)),
        ia(e, t, r, o, n)
      );
    case 7:
      return (de(e, t, t.pendingProps, n), t.child);
    case 8:
      return (de(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (de(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          U(ho, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (Be(i.value, l)) {
            if (i.children === o.children && !we.current) {
              t = ot(e, t, n);
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
                      ((a = et(-1, n & -n)), (a.tag = 2));
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        (d === null
                          ? (a.next = a)
                          : ((a.next = d.next), (d.next = a)),
                          (u.pending = a));
                      }
                    }
                    ((i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      Xi(i.return, n, t),
                      (s.lanes |= n));
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(k(341));
                ((l.lanes |= n),
                  (s = l.alternate),
                  s !== null && (s.lanes |= n),
                  Xi(l, n, t),
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
        (de(e, t, o.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        pn(t, n),
        (o = Ie(o)),
        (r = r(o)),
        (t.flags |= 1),
        de(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Me(r, t.pendingProps)),
        (o = Me(r.type, o)),
        la(e, t, r, o, n)
      );
    case 15:
      return Cc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Me(r, o)),
        Gr(e, t),
        (t.tag = 1),
        xe(r) ? ((e = !0), co(t)) : (e = !1),
        pn(t, n),
        kc(t, r, o),
        qi(t, r, o, n),
        nl(null, t, r, !0, e, n)
      );
    case 19:
      return _c(e, t, n);
    case 22:
      return Lc(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function Kc(e, t) {
  return wu(e, t);
}
function Op(e, t, n, r) {
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
function De(e, t, n, r) {
  return new Op(e, t, n, r);
}
function ls(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function _p(e) {
  if (typeof e == "function") return ls(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Cl)) return 11;
    if (e === Ll) return 14;
  }
  return 2;
}
function St(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = De(e.tag, t, e.key, e.mode)),
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
function Zr(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == "function")) ls(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case Xt:
        return zt(n.children, o, i, t);
      case El:
        ((l = 8), (o |= 8));
        break;
      case Ni:
        return (
          (e = De(12, n, t, o | 2)),
          (e.elementType = Ni),
          (e.lanes = i),
          e
        );
      case Ei:
        return ((e = De(13, n, t, o)), (e.elementType = Ei), (e.lanes = i), e);
      case Ci:
        return ((e = De(19, n, t, o)), (e.elementType = Ci), (e.lanes = i), e);
      case nu:
        return Ao(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case eu:
              l = 10;
              break e;
            case tu:
              l = 9;
              break e;
            case Cl:
              l = 11;
              break e;
            case Ll:
              l = 14;
              break e;
            case at:
              ((l = 16), (r = null));
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = De(l, n, t, o)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = i),
    t
  );
}
function zt(e, t, n, r) {
  return ((e = De(7, e, r, t)), (e.lanes = n), e);
}
function Ao(e, t, n, r) {
  return (
    (e = De(22, e, r, t)),
    (e.elementType = nu),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function yi(e, t, n) {
  return ((e = De(6, e, null, t)), (e.lanes = n), e);
}
function vi(e, t, n) {
  return (
    (t = De(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Tp(e, t, n, r, o) {
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
    (this.eventTimes = Zo(0)),
    (this.expirationTimes = Zo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Zo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null));
}
function ss(e, t, n, r, o, i, l, s, a) {
  return (
    (e = new Tp(e, t, n, s, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = De(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    bl(i),
    e
  );
}
function Dp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Jt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Qc(e) {
  if (!e) return Nt;
  e = e._reactInternals;
  e: {
    if (bt(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (xe(t.type)) {
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
    if (xe(n)) return Qu(e, n, t);
  }
  return t;
}
function Yc(e, t, n, r, o, i, l, s, a) {
  return (
    (e = ss(n, r, !0, e, o, i, l, s, a)),
    (e.context = Qc(null)),
    (n = e.current),
    (r = fe()),
    (o = xt(n)),
    (i = et(r, o)),
    (i.callback = t ?? null),
    vt(n, i, o),
    (e.current.lanes = o),
    mr(e, o, r),
    Se(e, r),
    e
  );
}
function Vo(e, t, n, r) {
  var o = t.current,
    i = fe(),
    l = xt(o);
  return (
    (n = Qc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = et(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = vt(o, t, l)),
    e !== null && (Ve(e, o, l, i), Kr(e, o, l)),
    l
  );
}
function Eo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function va(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function as(e, t) {
  (va(e, t), (e = e.alternate) && va(e, t));
}
function jp() {
  return null;
}
var Gc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function us(e) {
  this._internalRoot = e;
}
Bo.prototype.render = us.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Vo(e, t, null, null);
};
Bo.prototype.unmount = us.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (Bt(function () {
      Vo(null, e, null, null);
    }),
      (t[nt] = null));
  }
};
function Bo(e) {
  this._internalRoot = e;
}
Bo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Lu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ct.length && t !== 0 && t < ct[n].priority; n++);
    (ct.splice(n, 0, e), n === 0 && Pu(e));
  }
};
function cs(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ho(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function wa() {}
function Ip(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Eo(l);
        i.call(u);
      };
    }
    var l = Yc(t, r, e, 0, null, !1, !1, "", wa);
    return (
      (e._reactRootContainer = l),
      (e[nt] = l.current),
      or(e.nodeType === 8 ? e.parentNode : e),
      Bt(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = Eo(a);
      s.call(u);
    };
  }
  var a = ss(e, 0, !1, null, null, !1, !1, "", wa);
  return (
    (e._reactRootContainer = a),
    (e[nt] = a.current),
    or(e.nodeType === 8 ? e.parentNode : e),
    Bt(function () {
      Vo(t, a, n, r);
    }),
    a
  );
}
function bo(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var a = Eo(l);
        s.call(a);
      };
    }
    Vo(t, l, e, o);
  } else l = Ip(n, t, e, o, r);
  return Eo(l);
}
Eu = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Fn(t.pendingLanes);
        n !== 0 &&
          (Ol(t, n | 1), Se(t, Y()), !($ & 6) && ((Sn = Y() + 500), Lt()));
      }
      break;
    case 13:
      (Bt(function () {
        var r = rt(e, 1);
        if (r !== null) {
          var o = fe();
          Ve(r, e, 1, o);
        }
      }),
        as(e, 1));
  }
};
_l = function (e) {
  if (e.tag === 13) {
    var t = rt(e, 134217728);
    if (t !== null) {
      var n = fe();
      Ve(t, e, 134217728, n);
    }
    as(e, 134217728);
  }
};
Cu = function (e) {
  if (e.tag === 13) {
    var t = xt(e),
      n = rt(e, t);
    if (n !== null) {
      var r = fe();
      Ve(n, e, t, r);
    }
    as(e, t);
  }
};
Lu = function () {
  return M;
};
Ru = function (e, t) {
  var n = M;
  try {
    return ((M = e), t());
  } finally {
    M = n;
  }
};
$i = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Pi(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = Io(r);
            if (!o) throw Error(k(90));
            (ou(r), Pi(r, o));
          }
        }
      }
      break;
    case "textarea":
      lu(e, n);
      break;
    case "select":
      ((t = n.value), t != null && un(e, !!n.multiple, t, !1));
  }
};
pu = rs;
hu = Bt;
var $p = { usingClientEntryPoint: !1, Events: [vr, tn, Io, du, fu, rs] },
  Dn = {
    findFiberByHostInstance: Dt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  zp = {
    bundleType: Dn.bundleType,
    version: Dn.version,
    rendererPackageName: Dn.rendererPackageName,
    rendererConfig: Dn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: it.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = yu(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Dn.findFiberByHostInstance || jp,
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
      ((_o = Fr.inject(zp)), (Ye = Fr));
    } catch {}
}
Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $p;
Re.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!cs(t)) throw Error(k(200));
  return Dp(e, t, null, n);
};
Re.createRoot = function (e, t) {
  if (!cs(e)) throw Error(k(299));
  var n = !1,
    r = "",
    o = Gc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = ss(e, 1, !1, null, null, n, !1, r, o)),
    (e[nt] = t.current),
    or(e.nodeType === 8 ? e.parentNode : e),
    new us(t)
  );
};
Re.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return ((e = yu(t)), (e = e === null ? null : e.stateNode), e);
};
Re.flushSync = function (e) {
  return Bt(e);
};
Re.hydrate = function (e, t, n) {
  if (!Ho(t)) throw Error(k(200));
  return bo(null, e, t, !0, n);
};
Re.hydrateRoot = function (e, t, n) {
  if (!cs(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    l = Gc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Yc(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[nt] = t.current),
    or(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o));
  return new Bo(t);
};
Re.render = function (e, t, n) {
  if (!Ho(t)) throw Error(k(200));
  return bo(null, e, t, !1, n);
};
Re.unmountComponentAtNode = function (e) {
  if (!Ho(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (Bt(function () {
        bo(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[nt] = null));
        });
      }),
      !0)
    : !1;
};
Re.unstable_batchedUpdates = rs;
Re.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ho(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return bo(e, t, n, !1, r);
};
Re.version = "18.3.1-next-f1338f8080-20240426";
function Jc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jc);
    } catch (e) {
      console.error(e);
    }
}
(Jc(), (Ja.exports = Re));
var Mp = Ja.exports,
  Xc,
  xa = Mp;
((Xc = xa.createRoot), xa.hydrateRoot);
function Fp() {
  if (console && console.warn) {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    (Mt(t[0]) && (t[0] = `react-i18next:: ${t[0]}`), console.warn(...t));
  }
}
const Sa = {};
function hl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  (Mt(t[0]) && Sa[t[0]]) || (Mt(t[0]) && (Sa[t[0]] = new Date()), Fp(...t));
}
const Zc = (e, t) => () => {
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
  ka = (e, t, n) => {
    e.loadNamespaces(t, Zc(e, n));
  },
  Na = (e, t, n, r) => {
    (Mt(n) && (n = [n]),
      n.forEach((o) => {
        e.options.ns.indexOf(o) < 0 && e.options.ns.push(o);
      }),
      e.loadLanguages(t, Zc(e, r)));
  },
  Up = function (e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const r = t.languages[0],
      o = t.options ? t.options.fallbackLng : !1,
      i = t.languages[t.languages.length - 1];
    if (r.toLowerCase() === "cimode") return !0;
    const l = (s, a) => {
      const u = t.services.backendConnector.state[`${s}|${a}`];
      return u === -1 || u === 2;
    };
    return n.bindI18n &&
      n.bindI18n.indexOf("languageChanging") > -1 &&
      t.services.backendConnector.backend &&
      t.isLanguageChangingTo &&
      !l(t.isLanguageChangingTo, e)
      ? !1
      : !!(
          t.hasResourceBundle(r, e) ||
          !t.services.backendConnector.backend ||
          (t.options.resources && !t.options.partialBundledLanguages) ||
          (l(r, e) && (!o || l(i, e)))
        );
  },
  Ap = function (e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return !t.languages || !t.languages.length
      ? (hl("i18n.languages were undefined or empty", t.languages), !0)
      : t.options.ignoreJSONStructure !== void 0
        ? t.hasLoadedNamespace(e, {
            lng: n.lng,
            precheck: (o, i) => {
              if (
                n.bindI18n &&
                n.bindI18n.indexOf("languageChanging") > -1 &&
                o.services.backendConnector.backend &&
                o.isLanguageChangingTo &&
                !i(o.isLanguageChangingTo, e)
              )
                return !1;
            },
          })
        : Up(e, t, n);
  },
  Mt = (e) => typeof e == "string",
  Vp = (e) => typeof e == "object" && e !== null,
  Bp =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  Hp = {
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
  bp = (e) => Hp[e],
  Wp = (e) => e.replace(Bp, bp);
let gl = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Wp,
};
const Kp = function () {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    gl = { ...gl, ...e };
  },
  Qp = () => gl;
let qc;
const Yp = (e) => {
    qc = e;
  },
  Gp = () => qc,
  Jp = {
    type: "3rdParty",
    init(e) {
      (Kp(e.options.react), Yp(e));
    },
  },
  Xp = z.createContext();
class Zp {
  constructor() {
    ds(this, "getUsedNamespaces", () => Object.keys(this.usedNamespaces));
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
}
const qp = (e, t) => {
    const n = z.useRef();
    return (
      z.useEffect(() => {
        n.current = e;
      }, [e, t]),
      n.current
    );
  },
  ed = (e, t, n, r) => e.getFixedT(t, n, r),
  eh = (e, t, n, r) => z.useCallback(ed(e, t, n, r), [e, t, n, r]),
  Rt = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const { i18n: n } = t,
      { i18n: r, defaultNS: o } = z.useContext(Xp) || {},
      i = n || r || Gp();
    if ((i && !i.reportNamespaces && (i.reportNamespaces = new Zp()), !i)) {
      hl(
        "You will need to pass in an i18next instance by using initReactI18next",
      );
      const y = (C, E) =>
          Mt(E)
            ? E
            : Vp(E) && Mt(E.defaultValue)
              ? E.defaultValue
              : Array.isArray(C)
                ? C[C.length - 1]
                : C,
        N = [y, {}, !1];
      return ((N.t = y), (N.i18n = {}), (N.ready = !1), N);
    }
    i.options.react &&
      i.options.react.wait !== void 0 &&
      hl(
        "It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.",
      );
    const l = { ...Qp(), ...i.options.react, ...t },
      { useSuspense: s, keyPrefix: a } = l;
    let u = o || (i.options && i.options.defaultNS);
    ((u = Mt(u) ? [u] : u || ["translation"]),
      i.reportNamespaces.addUsedNamespaces &&
        i.reportNamespaces.addUsedNamespaces(u));
    const d =
        (i.isInitialized || i.initializedStoreOnce) &&
        u.every((y) => Ap(y, i, l)),
      p = eh(i, t.lng || null, l.nsMode === "fallback" ? u : u[0], a),
      c = () => p,
      v = () => ed(i, t.lng || null, l.nsMode === "fallback" ? u : u[0], a),
      [w, S] = z.useState(c);
    let O = u.join();
    t.lng && (O = `${t.lng}${O}`);
    const h = qp(O),
      f = z.useRef(!0);
    (z.useEffect(() => {
      const { bindI18n: y, bindI18nStore: N } = l;
      ((f.current = !0),
        !d &&
          !s &&
          (t.lng
            ? Na(i, t.lng, u, () => {
                f.current && S(v);
              })
            : ka(i, u, () => {
                f.current && S(v);
              })),
        d && h && h !== O && f.current && S(v));
      const C = () => {
        f.current && S(v);
      };
      return (
        y && i && i.on(y, C),
        N && i && i.store.on(N, C),
        () => {
          ((f.current = !1),
            y && i && y.split(" ").forEach((E) => i.off(E, C)),
            N && i && N.split(" ").forEach((E) => i.store.off(E, C)));
        }
      );
    }, [i, O]),
      z.useEffect(() => {
        f.current && d && S(c);
      }, [i, a, d]));
    const g = [w, i, d];
    if (((g.t = w), (g.i18n = i), (g.ready = d), d || (!d && !s))) return g;
    throw new Promise((y) => {
      t.lng ? Na(i, t.lng, u, () => y()) : ka(i, u, () => y());
    });
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var th = {
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
 */ const nh = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  Wt = (e, t) => {
    const n = z.forwardRef(
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
        d,
      ) =>
        z.createElement(
          "svg",
          {
            ref: d,
            ...th,
            width: o,
            height: o,
            stroke: r,
            strokeWidth: l ? (Number(i) * 24) / Number(o) : i,
            className: ["lucide", `lucide-${nh(e)}`, s].join(" "),
            ...u,
          },
          [
            ...t.map(([p, c]) => z.createElement(p, c)),
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
 */ const rh = Wt("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oh = Wt("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ur = Wt("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ih = Wt("Globe", [
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
 */ const lh = Wt("Layers", [
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
 */ const sh = Wt("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const td = Wt("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  ah = ({ user: e, onLogout: t }) => {
    const { t: n, i18n: r } = Rt(),
      o = () => {
        const i = r.language === "en" ? "zh" : "en";
        r.changeLanguage(i);
      };
    return m.jsx("nav", {
      className: "bg-transparent py-4 md:py-6 lg:py-8",
      children: m.jsx("div", {
        className: "mx-auto px-4 sm:px-6 lg:px-8",
        children: m.jsxs("div", {
          className: "flex justify-between items-center h-16",
          children: [
            m.jsxs("div", {
              className: "flex items-center space-x-4",
              children: [
                m.jsxs("a", {
                  href: "../frontpage",
                  className:
                    "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors",
                  children: [
                    m.jsx("span", { className: "sr-only", children: "Home" }),
                    m.jsx(lh, { className: "w-7 h-7" }),
                  ],
                }),
                m.jsxs("div", {
                  children: [
                    m.jsx("h1", {
                      className:
                        "text-2xl md:text-3xl font-semibold text-gray-800 mb-2",
                      children: n("inventoryMerge"),
                    }),
                    m.jsxs("p", {
                      className: "text-gray-600 text-base",
                      children: [e.Name, " - ", e.Employer],
                    }),
                  ],
                }),
              ],
            }),
            m.jsxs("div", {
              className: "flex items-center space-x-4",
              children: [
                m.jsxs("button", {
                  onClick: o,
                  className:
                    "px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center",
                  children: [
                    m.jsx(ih, { className: "w-5 h-5 text-gray-600" }),
                    m.jsx("span", {
                      className:
                        "hidden sm:inline ml-2 text-base text-gray-700",
                      children: r.language === "en" ? "English" : "繁體中文",
                    }),
                  ],
                }),
                m.jsxs("button", {
                  onClick: t,
                  className:
                    "px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center",
                  children: [
                    m.jsx(sh, { className: "w-5 h-5" }),
                    m.jsx("span", {
                      className: "hidden sm:inline ml-2 text-base",
                      children: n("logout"),
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
  uh = () => {
    const { t: e } = Rt();
    return m.jsx("div", {
      className: "bg-white h-[40px] mb-2",
      children: m.jsx("div", {
        className: "mx-auto px-4 sm:px-6 lg:px-8",
        children: m.jsxs("div", {
          className: "flex space-x-8 border-b border-gray-200",
          children: [
            m.jsx("a", {
              href: "../inventory_manager",
              className:
                "px-4 py-2 text-base font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
              children: e("tabs.manage"),
            }),
            m.jsx("a", {
              href: "../inventory_merge",
              className:
                "px-4 py-2 text-base font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
              children: e("tabs.merge"),
            }),
            m.jsx("a", {
              href: "../inventory_review",
              className:
                "px-4 py-2 text-base font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
              children: e("tabs.review"),
            }),
            m.jsx("a", {
              href: "#",
              className:
                "px-4 py-2 text-base font-medium border-b-2 border-blue-500 text-blue-600",
              children: e("tabs.dailyReport"),
            }),
          ],
        }),
      }),
    });
  };
async function ch() {
  const t = await (await fetch("../config.txt")).text();
  return JSON.parse(t);
}
let wi = null;
async function dh() {
  return (wi || (wi = await ch()), wi.domain);
}
const ce = {
  GET_ALL_INV: "/api/inv_combinelist/get_all_inv",
  DELETE_INV: "/api/inv_combinelist/inv_delete_by_SN",
  EXPORT_INV: "/api/inv_combinelist/get_full_inv_Excel_by_SN",
  NEW_SN: "/api/inv_combinelist/new_IC_SN",
  CREATE_UPDATE: "/api/inv_combinelist/inv_creat_update",
  EXPORT_RECORD: "/api/inv_combinelist/get_record_Excel_by_SN",
  GET_ALL_RECORDS: "/api/inv_combinelist/get_all_records",
  LOGIN: "/api/session/login",
  GET_DAILY_REPORT: "/api/inventory/creat_get_by_CT_TIME_ST_END",
  EXPORT_DAILY_REPORT: "/api/inv_daily/get_daily_report_excel",
  EXPORT_MONTHLY_REPORT: "/api/inv_daily/get_month_report_excel",
  DOWNLOAD_EXCEL_BY_IC_SN: "/api/inventory/download_excel_by_IC_SN",
};
let Qt = class {
  static logApiRequest(t, n, r) {
    (console.group(`🌐 API Request: ${n} ${t}`),
      console.log("📤 Request Payload:", r || "No payload"),
      console.groupEnd());
  }
  static logApiResponse(t, n) {
    (console.group(`✅ API Response: ${t}`),
      console.log("📥 Response Data:", n),
      console.groupEnd());
  }
  static logApiError(t, n) {
    (console.group(`❌ API Error: ${t}`),
      console.error("Error Details:", n),
      console.groupEnd());
  }
};
class st {
  static async getBaseUrl() {
    return await dh();
  }
  static async fetchApi(t, n = "POST", r) {
    const i = `${await this.getBaseUrl()}${t}`;
    (console.log(i), Qt.logApiRequest(t, n, r));
    try {
      const l = await fetch(i, {
        method: n,
        headers: { "Content-Type": "application/json" },
        body: r ? JSON.stringify(r) : void 0,
      });
      if (!l.ok)
        throw new Error(
          `API call failed with status ${l.status}: ${l.statusText || "Unknown network error"}. Endpoint: ${t}`,
        );
      const s = await l.json();
      if ((Qt.logApiResponse(t, s), s.Code !== 200 && s.Code !== void 0))
        throw new Error(s.Result || "API request failed");
      return s;
    } catch (l) {
      throw (Qt.logApiError(t, l), l);
    }
  }
  static async login(t, n) {
    return this.fetchApi(ce.LOGIN, "POST", { Data: { ID: t, Password: n } });
  }
  static async getAllMergeSheets() {
    return (
      (await this.fetchApi(ce.GET_ALL_INV, "POST", { Data: {} })).Data || []
    );
  }
  static async deleteMergeSheet(t) {
    await this.fetchApi(ce.DELETE_INV, "POST", { Value: t, Data: {} });
  }
  static async getNewSheetNumber() {
    return (await this.fetchApi(ce.NEW_SN, "POST", { Data: {} })).Value;
  }
  static async createUpdateMergeSheet(t) {
    const n = sessionStorage.getItem("user_session"),
      r = n ? JSON.parse(n) : null;
    await this.fetchApi(ce.CREATE_UPDATE, "POST", {
      Data: {
        INV_NAME: t.INV_NAME,
        INV_SN: t.INV_SN,
        CT: (r == null ? void 0 : r.Name) || "",
        NOTE: "",
        records_Ary: t.records_Ary || [],
      },
    });
  }
  static async getAllRecords() {
    return (await this.fetchApi(ce.GET_ALL_RECORDS, "POST", { Data: {} })).Data;
  }
  static async exportMergeSheet(t) {
    const n = await this.getBaseUrl(),
      r = await fetch(`${n}${ce.EXPORT_INV}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Value: t, Data: {} }),
      });
    if (!r.ok) throw new Error("Failed to download Excel file");
    const o = await r.blob(),
      i = window.URL.createObjectURL(o),
      l = document.createElement("a");
    ((l.href = i),
      (l.download = `${t}.xlsx`),
      document.body.appendChild(l),
      l.click(),
      window.URL.revokeObjectURL(i),
      document.body.removeChild(l));
  }
  static async exportRecord(t, n) {
    const r = await this.getBaseUrl();
    console.log({ Value: `${t},${n}`, Data: {} });
    const o = await fetch(`${r}${ce.EXPORT_RECORD}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Value: `${t},${n}`, Data: {} }),
    });
    if (!o.ok) throw new Error("Failed to download Excel file");
    console.log(await o);
    const i = await o.blob(),
      l = window.URL.createObjectURL(i),
      s = document.createElement("a");
    ((s.href = l),
      (s.download = `${n} - ${t}.xls`),
      document.body.appendChild(s),
      s.click(),
      window.URL.revokeObjectURL(l),
      document.body.removeChild(s));
  }
  static async getDailyInventoryReport(t, n) {
    return (
      (
        await this.fetchApi(ce.GET_DAILY_REPORT, "POST", {
          Data: {},
          Code: 0,
          Result: "",
          Value: `${t},${n}`,
          ServerName: "",
          ServerType: "網頁",
          TableName: "medicine_page_firstclass",
          TimeTaken: "",
        })
      ).Data || []
    ).filter((i) => i.IC_SN && i.IC_SN.includes("EVD"));
  }
  static async exportDailyReportExcel(t) {
    const n = await this.getBaseUrl(),
      r = t.join(";");
    Qt.logApiRequest(ce.EXPORT_DAILY_REPORT, "POST", { Value: r });
    const o = await fetch(`${n}${ce.EXPORT_DAILY_REPORT}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Value: r }),
    });
    if (!o.ok) throw new Error("下載 Excel 檔案失敗");
    const i = await o.blob(),
      l = window.URL.createObjectURL(i),
      s = document.createElement("a");
    s.href = l;
    const a = new Date(),
      u = `${a.getFullYear()}${String(a.getMonth() + 1).padStart(2, "0")}${String(a.getDate()).padStart(2, "0")}`,
      d = t.length > 1 ? `每日盤點報表_${u}.xlsx` : `盤點單_${u}.xlsx`;
    ((s.download = d),
      document.body.appendChild(s),
      s.click(),
      window.URL.revokeObjectURL(l),
      document.body.removeChild(s));
  }
  static async exportMonthlyReportExcel(t) {
    const n = await this.getBaseUrl(),
      r = t.join(";");
    Qt.logApiRequest(ce.EXPORT_MONTHLY_REPORT, "POST", { Value: r });
    const o = await fetch(`${n}${ce.EXPORT_MONTHLY_REPORT}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Value: r }),
    });
    if (!o.ok) throw new Error("下載月報表檔案失敗");
    const i = await o.blob(),
      l = window.URL.createObjectURL(i),
      s = document.createElement("a");
    s.href = l;
    const a = new Date(),
      d = `月報表_${`${a.getFullYear()}${String(a.getMonth() + 1).padStart(2, "0")}`}.xlsx`;
    ((s.download = d),
      document.body.appendChild(s),
      s.click(),
      window.URL.revokeObjectURL(l),
      document.body.removeChild(s));
  }
  static async downloadExcelByIcSn(t) {
    const n = await this.getBaseUrl();
    for (const r of t) {
      Qt.logApiRequest(ce.DOWNLOAD_EXCEL_BY_IC_SN, "POST", { Value: r });
      const o = await fetch(`${n}${ce.DOWNLOAD_EXCEL_BY_IC_SN}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Data: {},
          Code: 0,
          Result: "",
          Value: r,
          ServerName: "",
          ServerType: "網頁",
          TableName: "medicine_page_firstclass",
          TimeTaken: "",
        }),
      });
      if (!o.ok) throw new Error(`下載 ${r} Excel 檔案失敗`);
      const i = await o.blob(),
        l = window.URL.createObjectURL(i),
        s = document.createElement("a");
      ((s.href = l),
        (s.download = `${r}.xlsx`),
        document.body.appendChild(s),
        s.click(),
        window.URL.revokeObjectURL(l),
        document.body.removeChild(s),
        t.length > 1 && (await new Promise((a) => setTimeout(a, 500))));
    }
  }
}
const fh = ({ onLoginSuccess: e }) => {
    const { t } = Rt(),
      [n, r] = z.useState(""),
      [o, i] = z.useState(""),
      [l, s] = z.useState("");
    z.useEffect(
      () => (
        document.body.classList.add("modal-open"),
        () => {
          document.body.classList.remove("modal-open");
        }
      ),
      [],
    );
    const a = async (u) => {
      u.preventDefault();
      try {
        const d = await st.login(n, o);
        d.Code === 200
          ? (sessionStorage.setItem("user_session", JSON.stringify(d.Data)),
            e(d.Data))
          : s(d.Result);
      } catch {
        s(t("loginError"));
      }
    };
    return m.jsx("div", {
      className:
        "fixed inset-0 z-[9999] bg-[#F8F9FF] flex items-center justify-center",
      children: m.jsxs("div", {
        className: "w-full max-w-md p-8",
        children: [
          m.jsx("div", {
            className: "text-center mb-12",
            children: m.jsx("h2", {
              className: "text-3xl font-bold mb-2 text-gray-900",
              children: t("inventoryMerge"),
            }),
          }),
          m.jsx("div", {
            className: "bg-white rounded-lg p-8 w-full max-w-md",
            children: m.jsxs("form", {
              onSubmit: a,
              className: "space-y-6 bg-white rounded-2xl shadow-sm",
              children: [
                m.jsxs("div", {
                  children: [
                    m.jsx("label", {
                      htmlFor: "id",
                      className:
                        "block text-base font-medium text-gray-700 mb-1",
                      children: t("userId"),
                    }),
                    m.jsx("input", {
                      id: "id",
                      type: "text",
                      value: n,
                      onChange: (u) => r(u.target.value),
                      className:
                        "block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out",
                      required: !0,
                      placeholder: t("login_id"),
                    }),
                  ],
                }),
                m.jsxs("div", {
                  children: [
                    m.jsx("label", {
                      htmlFor: "password",
                      className:
                        "block text-base font-medium text-gray-700 mb-1",
                      children: t("password"),
                    }),
                    m.jsx("input", {
                      id: "password",
                      type: "password",
                      value: o,
                      onChange: (u) => i(u.target.value),
                      className:
                        "block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out",
                      required: !0,
                      placeholder: t("login_password"),
                    }),
                  ],
                }),
                l &&
                  m.jsx("div", {
                    className: "text-red-600 text-base",
                    children: l,
                  }),
                m.jsx("button", {
                  type: "submit",
                  className:
                    "block w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out font-medium text-lg mt-2",
                  children: t("login"),
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  ph = () => {
    const { t: e } = Rt();
    return m.jsx("footer", {
      className:
        "fixed bottom-0 w-full bg-white shadow-lg bg-white border-t border-gray-200",
      children: m.jsx("div", {
        className: "mx-auto px-1 sm:px-1 lg:px-2 py-1",
        children: m.jsx("p", {
          className: "text-sm text-center text-gray-600",
          children: e("copyright"),
        }),
      }),
    });
  },
  hh = ({ isOpen: e, onClose: t, onConfirm: n }) => {
    const { t: r } = Rt(),
      [o, i] = qr.useState("");
    qr.useEffect(() => {
      if (e) {
        const a = new Date(),
          u = a.getFullYear(),
          d = String(a.getMonth() + 1).padStart(2, "0"),
          p = String(a.getDate()).padStart(2, "0");
        i(`${u}-${d}-${p}`);
      }
    }, [e]);
    const l = () => {
        const a = new Date(),
          u = a.getFullYear(),
          d = String(a.getMonth() + 1).padStart(2, "0"),
          p = String(a.getDate()).padStart(2, "0");
        return `${u}-${d}-${p}`;
      },
      s = () => {
        o && (n(o), t());
      };
    return e
      ? m.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
          children: m.jsxs("div", {
            className: "bg-white rounded-lg shadow-xl w-full max-w-md mx-4",
            children: [
              m.jsxs("div", {
                className:
                  "flex items-center justify-between px-6 py-4 border-b border-gray-200",
                children: [
                  m.jsx("h3", {
                    className: "text-lg font-semibold text-gray-900",
                    children: r("dailyReport.downloadDailyReport"),
                  }),
                  m.jsx("button", {
                    onClick: t,
                    className:
                      "text-gray-400 hover:text-gray-600 transition-colors",
                    children: m.jsx(td, { className: "w-5 h-5" }),
                  }),
                ],
              }),
              m.jsxs("div", {
                className: "px-6 py-6",
                children: [
                  m.jsx("label", {
                    className: "block text-sm font-medium text-gray-700 mb-2",
                    children: r("dailyReport.selectDate"),
                  }),
                  m.jsx("input", {
                    type: "date",
                    value: o,
                    max: l(),
                    onChange: (a) => i(a.target.value),
                    className:
                      "w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                  }),
                ],
              }),
              m.jsxs("div", {
                className: "flex gap-3 px-6 py-4 bg-gray-50 rounded-b-lg",
                children: [
                  m.jsx("button", {
                    onClick: t,
                    className:
                      "flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium",
                    children: r("dailyReport.cancel"),
                  }),
                  m.jsx("button", {
                    onClick: s,
                    disabled: !o,
                    className:
                      "flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-medium",
                    children: r("dailyReport.confirmDownload"),
                  }),
                ],
              }),
            ],
          }),
        })
      : null;
  },
  gh = ({ isOpen: e, onClose: t, onConfirm: n }) => {
    const { t: r } = Rt(),
      [o, i] = qr.useState("");
    qr.useEffect(() => {
      if (e) {
        const a = new Date(),
          u = a.getFullYear(),
          d = String(a.getMonth() + 1).padStart(2, "0");
        i(`${u}-${d}`);
      }
    }, [e]);
    const l = () => {
        const a = new Date(),
          u = a.getFullYear(),
          d = String(a.getMonth() + 1).padStart(2, "0");
        return `${u}-${d}`;
      },
      s = () => {
        if (o) {
          const [a, u] = o.split("-");
          (n(a, u), t());
        }
      };
    return e
      ? m.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
          children: m.jsxs("div", {
            className: "bg-white rounded-lg shadow-xl w-full max-w-md mx-4",
            children: [
              m.jsxs("div", {
                className:
                  "flex items-center justify-between px-6 py-4 border-b border-gray-200",
                children: [
                  m.jsx("h3", {
                    className: "text-lg font-semibold text-gray-900",
                    children: r("dailyReport.downloadMonthlyReport"),
                  }),
                  m.jsx("button", {
                    onClick: t,
                    className:
                      "text-gray-400 hover:text-gray-600 transition-colors",
                    children: m.jsx(td, { className: "w-5 h-5" }),
                  }),
                ],
              }),
              m.jsxs("div", {
                className: "px-6 py-6",
                children: [
                  m.jsx("label", {
                    className: "block text-sm font-medium text-gray-700 mb-2",
                    children: r("dailyReport.selectMonth"),
                  }),
                  m.jsx("input", {
                    type: "month",
                    value: o,
                    max: l(),
                    onChange: (a) => i(a.target.value),
                    className:
                      "w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                  }),
                ],
              }),
              m.jsxs("div", {
                className: "flex gap-3 px-6 py-4 bg-gray-50 rounded-b-lg",
                children: [
                  m.jsx("button", {
                    onClick: t,
                    className:
                      "flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium",
                    children: r("dailyReport.cancel"),
                  }),
                  m.jsx("button", {
                    onClick: s,
                    disabled: !o,
                    className:
                      "flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-medium",
                    children: r("dailyReport.confirmDownload"),
                  }),
                ],
              }),
            ],
          }),
        })
      : null;
  },
  mh = () => {
    const { t: e } = Rt(),
      [t, n] = z.useState(!1),
      [r, o] = z.useState(""),
      [i, l] = z.useState(""),
      [s, a] = z.useState([]),
      [u, d] = z.useState(!1),
      [p, c] = z.useState(new Set()),
      [v, w] = z.useState(!1),
      [S, O] = z.useState(!1);
    (z.useEffect(() => {
      const x = new Date(),
        _ = x.getFullYear(),
        P = String(x.getMonth() + 1).padStart(2, "0"),
        F = String(x.getDate()).padStart(2, "0"),
        ge = `${_}-${P}-01`,
        ue = `${_}-${P}-${F}`;
      (o(ge), l(ue));
    }, []),
      z.useEffect(() => {
        r && i && h();
      }, [r, i]));
    const h = async () => {
        d(!0);
        try {
          const x = r.replace(/-/g, "/"),
            _ = new Date(i);
          _.setDate(_.getDate() + 1);
          const P = _.getFullYear(),
            F = String(_.getMonth() + 1).padStart(2, "0"),
            ge = String(_.getDate()).padStart(2, "0"),
            ue = `${P}/${F}/${ge}`,
            me = await st.getDailyInventoryReport(x, ue);
          (a(me), c(new Set()));
        } catch (x) {
          console.error("Failed to fetch daily report:", x);
        } finally {
          d(!1);
        }
      },
      f = (x) => {
        c(x ? new Set(s.map((_) => _.GUID)) : new Set());
      },
      g = (x, _) => {
        const P = new Set(p);
        (_ ? P.add(x) : P.delete(x), c(P));
      },
      y = async () => {
        try {
          const x = Array.from(p),
            _ = s.filter((P) => x.includes(P.GUID)).map((P) => P.IC_SN);
          await st.downloadExcelByIcSn(_);
        } catch (x) {
          (console.error("下載失敗:", x), alert("下載 Excel 失敗，請稍後再試"));
        }
      },
      N = async (x) => {
        try {
          const _ = s.find((P) => P.GUID === x);
          _ && (await st.downloadExcelByIcSn([_.IC_SN]));
        } catch (_) {
          (console.error("下載失敗:", _), alert("下載 Excel 失敗，請稍後再試"));
        }
      },
      C = async (x) => {
        try {
          const _ = x.replace(/-/g, "/"),
            P = new Date(x);
          P.setDate(P.getDate() + 1);
          const F = P.getFullYear(),
            ge = String(P.getMonth() + 1).padStart(2, "0"),
            ue = String(P.getDate()).padStart(2, "0"),
            me = `${F}/${ge}/${ue}`,
            ke = await st.getDailyInventoryReport(_, me);
          if (ke.length === 0) {
            alert("該日期沒有 EVD 盤點資料");
            return;
          }
          const Oe = ke.map((He) => He.IC_SN);
          await st.exportDailyReportExcel(Oe);
        } catch (_) {
          (console.error("下載日報表失敗:", _),
            alert("下載日報表失敗，請稍後再試"));
        }
      },
      E = async (x, _) => {
        try {
          const P = `${x}/${_}/01`,
            F = new Date(parseInt(x), parseInt(_), 1),
            ge = F.getFullYear(),
            ue = String(F.getMonth() + 1).padStart(2, "0"),
            me = `${ge}/${ue}/01`,
            ke = await st.getDailyInventoryReport(P, me);
          if (ke.length === 0) {
            alert("該月份沒有 EVD 盤點資料");
            return;
          }
          const Oe = ke.map((He) => He.IC_SN);
          await st.exportMonthlyReportExcel(Oe);
        } catch (P) {
          (console.error("下載月報表失敗:", P),
            alert("下載月報表失敗，請稍後再試"));
        }
      };
    return m.jsxs(m.Fragment, {
      children: [
        m.jsxs("div", {
          className: "bg-white border border-gray-200 rounded-lg mb-6",
          children: [
            m.jsxs("button", {
              onClick: () => n(!t),
              className:
                "w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors",
              children: [
                m.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    m.jsx(oh, { className: "w-5 h-5 text-gray-600" }),
                    m.jsx("span", {
                      className: "text-lg font-semibold text-gray-900",
                      children: e("dailyReport.title"),
                    }),
                  ],
                }),
                m.jsx(rh, {
                  className: `w-5 h-5 text-gray-500 transition-transform duration-200 ${t ? "rotate-180" : ""}`,
                }),
              ],
            }),
            !t &&
              m.jsx("div", {
                className: "px-6 pb-6 border-t border-gray-100",
                children: m.jsxs("div", {
                  className: "pt-6 grid grid-cols-2 gap-8",
                  children: [
                    m.jsxs("div", {
                      children: [
                        m.jsx("label", {
                          className:
                            "block text-base font-medium text-gray-700 mb-2",
                          children: e("dailyReport.startDate"),
                        }),
                        m.jsx("input", {
                          type: "date",
                          value: r,
                          onChange: (x) => o(x.target.value),
                          className:
                            "w-full border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                        }),
                      ],
                    }),
                    m.jsxs("div", {
                      children: [
                        m.jsx("label", {
                          className:
                            "block text-base font-medium text-gray-700 mb-2",
                          children: e("dailyReport.endDate"),
                        }),
                        m.jsx("input", {
                          type: "date",
                          value: i,
                          onChange: (x) => l(x.target.value),
                          className:
                            "w-full border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
          ],
        }),
        m.jsx("div", {
          className: "bg-white mb-6",
          children: u
            ? m.jsx("div", {
                className: "flex justify-center py-12",
                children: m.jsx("div", {
                  className:
                    "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600",
                }),
              })
            : m.jsxs("div", {
                className: "",
                children: [
                  m.jsxs("div", {
                    className:
                      "flex items-center justify-between mb-4 py-3 rounded-lg",
                    children: [
                      m.jsxs("div", {
                        className:
                          "flex items-center gap-6 text-base text-gray-600",
                        children: [
                          m.jsxs("span", {
                            children: [
                              e("dailyReport.totalRecords"),
                              ": ",
                              m.jsx("span", {
                                className: "font-semibold text-gray-900",
                                children: s.length,
                              }),
                            ],
                          }),
                          m.jsxs("span", {
                            children: [
                              e("dailyReport.selectedRecords"),
                              ": ",
                              m.jsx("span", {
                                className: "font-semibold text-gray-900",
                                children: p.size,
                              }),
                            ],
                          }),
                        ],
                      }),
                      m.jsxs("div", {
                        className: "flex gap-3",
                        children: [
                          m.jsxs("button", {
                            onClick: () => w(!0),
                            className:
                              "flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors",
                            children: [
                              m.jsx(Ur, { className: "w-4 h-4" }),
                              e("dailyReport.downloadDailyReport"),
                            ],
                          }),
                          m.jsxs("button", {
                            onClick: () => O(!0),
                            className:
                              "flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors",
                            children: [
                              m.jsx(Ur, { className: "w-4 h-4" }),
                              e("dailyReport.downloadMonthlyReport"),
                            ],
                          }),
                          m.jsxs("button", {
                            onClick: y,
                            disabled: p.size === 0,
                            className:
                              "flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",
                            children: [
                              m.jsx(Ur, { className: "w-4 h-4" }),
                              e("dailyReport.downloadExcel"),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  m.jsxs("div", {
                    className:
                      "overflow-x-auto border border-gray-200 rounded-lg",
                    children: [
                      m.jsxs("table", {
                        className: "w-full",
                        children: [
                          m.jsx("thead", {
                            className: "bg-gray-50 border-b border-gray-200",
                            children: m.jsxs("tr", {
                              children: [
                                m.jsx("th", {
                                  className: "px-4 py-3 text-left",
                                  children: m.jsx("input", {
                                    type: "checkbox",
                                    checked:
                                      s.length > 0 && p.size === s.length,
                                    onChange: (x) => f(x.target.checked),
                                    className:
                                      "w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500",
                                  }),
                                }),
                                m.jsx("th", {
                                  className:
                                    "px-4 py-3 text-left text-base font-semibold text-gray-700",
                                  children: e("dailyReport.serialNumber"),
                                }),
                                m.jsx("th", {
                                  className:
                                    "px-4 py-3 text-left text-base font-semibold text-gray-700",
                                  children: e("dailyReport.name"),
                                }),
                                m.jsx("th", {
                                  className:
                                    "px-4 py-3 text-left text-base font-semibold text-gray-700",
                                  children: e("dailyReport.createDate"),
                                }),
                                m.jsx("th", {
                                  className:
                                    "px-4 py-3 text-center text-base font-semibold text-gray-700",
                                  children: e("dailyReport.status"),
                                }),
                                m.jsx("th", {
                                  className:
                                    "px-4 py-3 text-center text-base font-semibold text-gray-700",
                                  children: e("dailyReport.actions"),
                                }),
                              ],
                            }),
                          }),
                          m.jsx("tbody", {
                            className: "divide-y divide-gray-200",
                            children: s.map((x) =>
                              m.jsxs(
                                "tr",
                                {
                                  className:
                                    "hover:bg-gray-50 transition-colors",
                                  children: [
                                    m.jsx("td", {
                                      className: "px-4 py-3",
                                      children: m.jsx("input", {
                                        type: "checkbox",
                                        checked: p.has(x.GUID),
                                        onChange: (_) =>
                                          g(x.GUID, _.target.checked),
                                        className:
                                          "w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500",
                                      }),
                                    }),
                                    m.jsx("td", {
                                      className:
                                        "px-4 py-3 text-base text-gray-900",
                                      children: x.IC_SN,
                                    }),
                                    m.jsx("td", {
                                      className:
                                        "px-4 py-3 text-base text-gray-900",
                                      children: x.IC_NAME,
                                    }),
                                    m.jsx("td", {
                                      className:
                                        "px-4 py-3 text-base text-gray-600",
                                      children: x.CT_TIME,
                                    }),
                                    m.jsx("td", {
                                      className: "px-4 py-3 text-center",
                                      children: m.jsx("span", {
                                        className: `inline-flex px-2 py-1 text-sm font-medium rounded-full ${x.STATE === "完成" || x.STATE === "Complete" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`,
                                        children: x.STATE,
                                      }),
                                    }),
                                    m.jsx("td", {
                                      className: "px-4 py-3",
                                      children: m.jsx("div", {
                                        className: "flex justify-center",
                                        children: m.jsxs("button", {
                                          onClick: () => N(x.GUID),
                                          className:
                                            "flex items-center gap-1 px-3 py-1 text-base text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",
                                          children: [
                                            m.jsx(Ur, { className: "w-4 h-4" }),
                                            e("dailyReport.download"),
                                          ],
                                        }),
                                      }),
                                    }),
                                  ],
                                },
                                x.GUID,
                              ),
                            ),
                          }),
                        ],
                      }),
                      s.length === 0 &&
                        m.jsx("div", {
                          className: "text-center py-12 text-gray-500",
                          children: e("dailyReport.noData"),
                        }),
                    ],
                  }),
                ],
              }),
        }),
        m.jsx(hh, { isOpen: v, onClose: () => w(!1), onConfirm: C }),
        m.jsx(gh, { isOpen: S, onClose: () => O(!1), onConfirm: E }),
      ],
    });
  };
function yh() {
  Rt();
  const [e, t] = z.useState(null);
  z.useEffect(() => {
    const r = sessionStorage.getItem("user_session");
    r && t(JSON.parse(r));
  }, []);
  const n = () => {
    (sessionStorage.removeItem("user_session"), t(null));
  };
  return e
    ? m.jsxs("div", {
        className: "min-h-screen bg-white",
        children: [
          m.jsx(ah, { user: e, onLogout: n }),
          m.jsx(uh, {}),
          m.jsx("main", {
            className: "mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-10",
            children: m.jsx(mh, {}),
          }),
          m.jsx(ph, {}),
        ],
      })
    : m.jsx(fh, { onLoginSuccess: t });
}
const D = (e) => typeof e == "string",
  jn = () => {
    let e, t;
    const n = new Promise((r, o) => {
      ((e = r), (t = o));
    });
    return ((n.resolve = e), (n.reject = t), n);
  },
  Ea = (e) => (e == null ? "" : "" + e),
  vh = (e, t, n) => {
    e.forEach((r) => {
      t[r] && (n[r] = t[r]);
    });
  },
  wh = /###/g,
  Ca = (e) => (e && e.indexOf("###") > -1 ? e.replace(wh, ".") : e),
  La = (e) => !e || D(e),
  Gn = (e, t, n) => {
    const r = D(t) ? t.split(".") : t;
    let o = 0;
    for (; o < r.length - 1; ) {
      if (La(e)) return {};
      const i = Ca(r[o]);
      (!e[i] && n && (e[i] = new n()),
        Object.prototype.hasOwnProperty.call(e, i) ? (e = e[i]) : (e = {}),
        ++o);
    }
    return La(e) ? {} : { obj: e, k: Ca(r[o]) };
  },
  Ra = (e, t, n) => {
    const { obj: r, k: o } = Gn(e, t, Object);
    if (r !== void 0 || t.length === 1) {
      r[o] = n;
      return;
    }
    let i = t[t.length - 1],
      l = t.slice(0, t.length - 1),
      s = Gn(e, l, Object);
    for (; s.obj === void 0 && l.length; )
      ((i = `${l[l.length - 1]}.${i}`),
        (l = l.slice(0, l.length - 1)),
        (s = Gn(e, l, Object)),
        s && s.obj && typeof s.obj[`${s.k}.${i}`] < "u" && (s.obj = void 0));
    s.obj[`${s.k}.${i}`] = n;
  },
  xh = (e, t, n, r) => {
    const { obj: o, k: i } = Gn(e, t, Object);
    ((o[i] = o[i] || []), o[i].push(n));
  },
  Co = (e, t) => {
    const { obj: n, k: r } = Gn(e, t);
    if (n) return n[r];
  },
  Sh = (e, t, n) => {
    const r = Co(e, n);
    return r !== void 0 ? r : Co(t, n);
  },
  nd = (e, t, n) => {
    for (const r in t)
      r !== "__proto__" &&
        r !== "constructor" &&
        (r in e
          ? D(e[r]) ||
            e[r] instanceof String ||
            D(t[r]) ||
            t[r] instanceof String
            ? n && (e[r] = t[r])
            : nd(e[r], t[r], n)
          : (e[r] = t[r]));
    return e;
  },
  Yt = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var kh = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
};
const Nh = (e) => (D(e) ? e.replace(/[&<>"'\/]/g, (t) => kh[t]) : e);
class Eh {
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
const Ch = [" ", ",", "?", "!", ";"],
  Lh = new Eh(20),
  Rh = (e, t, n) => {
    ((t = t || ""), (n = n || ""));
    const r = Ch.filter((l) => t.indexOf(l) < 0 && n.indexOf(l) < 0);
    if (r.length === 0) return !0;
    const o = Lh.getRegExp(
      `(${r.map((l) => (l === "?" ? "\\?" : l)).join("|")})`,
    );
    let i = !o.test(e);
    if (!i) {
      const l = e.indexOf(n);
      l > 0 && !o.test(e.substring(0, l)) && (i = !0);
    }
    return i;
  },
  ml = function (e, t) {
    let n =
      arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
    if (!e) return;
    if (e[t]) return e[t];
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
  Lo = (e) => e && e.replace("_", "-"),
  Ph = {
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
      console && console[e] && console[e].apply(console, t);
    },
  };
class Ro {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    ((this.prefix = n.prefix || "i18next:"),
      (this.logger = t || Ph),
      (this.options = n),
      (this.debug = n.debug));
  }
  log() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "log", "", !0);
  }
  warn() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "", !0);
  }
  error() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "error", "");
  }
  deprecate() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(t, n, r, o) {
    return o && !this.debug
      ? null
      : (D(t[0]) && (t[0] = `${r}${this.prefix} ${t[0]}`), this.logger[n](t));
  }
  create(t) {
    return new Ro(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options,
    });
  }
  clone(t) {
    return (
      (t = t || this.options),
      (t.prefix = t.prefix || this.prefix),
      new Ro(this.logger, t)
    );
  }
}
var Qe = new Ro();
class Wo {
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
  emit(t) {
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
      o < n;
      o++
    )
      r[o - 1] = arguments[o];
    (this.observers[t] &&
      Array.from(this.observers[t].entries()).forEach((l) => {
        let [s, a] = l;
        for (let u = 0; u < a; u++) s(...r);
      }),
      this.observers["*"] &&
        Array.from(this.observers["*"].entries()).forEach((l) => {
          let [s, a] = l;
          for (let u = 0; u < a; u++) s.apply(s, [t, ...r]);
        }));
  }
}
class Pa extends Wo {
  constructor(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ["translation"], defaultNS: "translation" };
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
  getResource(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
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
            : D(r) && i
              ? s.push(...r.split(i))
              : s.push(r)));
    const a = Co(this.data, s);
    return (
      !a &&
        !n &&
        !r &&
        t.indexOf(".") > -1 &&
        ((t = s[0]), (n = s[1]), (r = s.slice(2).join("."))),
      a || !l || !D(r)
        ? a
        : ml(this.data && this.data[t] && this.data[t][n], r, i)
    );
  }
  addResource(t, n, r, o) {
    let i =
      arguments.length > 4 && arguments[4] !== void 0
        ? arguments[4]
        : { silent: !1 };
    const l =
      i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let s = [t, n];
    (r && (s = s.concat(l ? r.split(l) : r)),
      t.indexOf(".") > -1 && ((s = t.split(".")), (o = n), (n = s[1])),
      this.addNamespaces(n),
      Ra(this.data, s, o),
      i.silent || this.emit("added", t, n, r, o));
  }
  addResources(t, n, r) {
    let o =
      arguments.length > 3 && arguments[3] !== void 0
        ? arguments[3]
        : { silent: !1 };
    for (const i in r)
      (D(r[i]) || Array.isArray(r[i])) &&
        this.addResource(t, n, i, r[i], { silent: !0 });
    o.silent || this.emit("added", t, n, r);
  }
  addResourceBundle(t, n, r, o, i) {
    let l =
        arguments.length > 5 && arguments[5] !== void 0
          ? arguments[5]
          : { silent: !1, skipCopy: !1 },
      s = [t, n];
    (t.indexOf(".") > -1 && ((s = t.split(".")), (o = r), (r = n), (n = s[1])),
      this.addNamespaces(n));
    let a = Co(this.data, s) || {};
    (l.skipCopy || (r = JSON.parse(JSON.stringify(r))),
      o ? nd(a, r, i) : (a = { ...a, ...r }),
      Ra(this.data, s, a),
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
    return (
      n || (n = this.options.defaultNS),
      this.options.compatibilityAPI === "v1"
        ? { ...this.getResource(t, n) }
        : this.getResource(t, n)
    );
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
var rd = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, n, r, o) {
    return (
      e.forEach((i) => {
        this.processors[i] && (t = this.processors[i].process(t, n, r, o));
      }),
      t
    );
  },
};
const Oa = {};
class Po extends Wo {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (super(),
      vh(
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
      (this.logger = Qe.create("translator")));
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} };
    if (t == null) return !1;
    const r = this.resolve(t, n);
    return r && r.res !== void 0;
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
        !Rh(t, r, o);
    if (l && !s) {
      const a = t.match(this.interpolator.nestingRegexp);
      if (a && a.length > 0) return { key: t, namespaces: D(i) ? [i] : i };
      const u = t.split(r);
      ((r !== o || (r === o && this.options.ns.indexOf(u[0]) > -1)) &&
        (i = u.shift()),
        (t = u.join(o)));
    }
    return { key: t, namespaces: D(i) ? [i] : i };
  }
  translate(t, n, r) {
    if (
      (typeof n != "object" &&
        this.options.overloadTranslationOptionHandler &&
        (n = this.options.overloadTranslationOptionHandler(arguments)),
      typeof n == "object" && (n = { ...n }),
      n || (n = {}),
      t == null)
    )
      return "";
    Array.isArray(t) || (t = [String(t)]);
    const o =
        n.returnDetails !== void 0
          ? n.returnDetails
          : this.options.returnDetails,
      i =
        n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator,
      { key: l, namespaces: s } = this.extractFromKey(t[t.length - 1], n),
      a = s[s.length - 1],
      u = n.lng || this.language,
      d = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (u && u.toLowerCase() === "cimode") {
      if (d) {
        const y = n.nsSeparator || this.options.nsSeparator;
        return o
          ? {
              res: `${a}${y}${l}`,
              usedKey: l,
              exactUsedKey: l,
              usedLng: u,
              usedNS: a,
              usedParams: this.getUsedParamsDetails(n),
            }
          : `${a}${y}${l}`;
      }
      return o
        ? {
            res: l,
            usedKey: l,
            exactUsedKey: l,
            usedLng: u,
            usedNS: a,
            usedParams: this.getUsedParamsDetails(n),
          }
        : l;
    }
    const p = this.resolve(t, n);
    let c = p && p.res;
    const v = (p && p.usedKey) || l,
      w = (p && p.exactUsedKey) || l,
      S = Object.prototype.toString.apply(c),
      O = ["[object Number]", "[object Function]", "[object RegExp]"],
      h = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays,
      f = !this.i18nFormat || this.i18nFormat.handleAsObject,
      g = !D(c) && typeof c != "boolean" && typeof c != "number";
    if (f && c && g && O.indexOf(S) < 0 && !(D(h) && Array.isArray(c))) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            "accessing an object - but returnObjects options is not enabled!",
          );
        const y = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(v, c, { ...n, ns: s })
          : `key '${l} (${this.language})' returned an object instead of string.`;
        return o
          ? ((p.res = y), (p.usedParams = this.getUsedParamsDetails(n)), p)
          : y;
      }
      if (i) {
        const y = Array.isArray(c),
          N = y ? [] : {},
          C = y ? w : v;
        for (const E in c)
          if (Object.prototype.hasOwnProperty.call(c, E)) {
            const x = `${C}${i}${E}`;
            ((N[E] = this.translate(x, { ...n, joinArrays: !1, ns: s })),
              N[E] === x && (N[E] = c[E]));
          }
        c = N;
      }
    } else if (f && D(h) && Array.isArray(c))
      ((c = c.join(h)), c && (c = this.extendTranslation(c, t, n, r)));
    else {
      let y = !1,
        N = !1;
      const C = n.count !== void 0 && !D(n.count),
        E = Po.hasDefaultValue(n),
        x = C ? this.pluralResolver.getSuffix(u, n.count, n) : "",
        _ =
          n.ordinal && C
            ? this.pluralResolver.getSuffix(u, n.count, { ordinal: !1 })
            : "",
        P =
          C &&
          !n.ordinal &&
          n.count === 0 &&
          this.pluralResolver.shouldUseIntlApi(),
        F =
          (P && n[`defaultValue${this.options.pluralSeparator}zero`]) ||
          n[`defaultValue${x}`] ||
          n[`defaultValue${_}`] ||
          n.defaultValue;
      (!this.isValidLookup(c) && E && ((y = !0), (c = F)),
        this.isValidLookup(c) || ((N = !0), (c = l)));
      const ue =
          (n.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          N
            ? void 0
            : c,
        me = E && F !== c && this.options.updateMissing;
      if (N || y || me) {
        if (
          (this.logger.log(
            me ? "updateKey" : "missingKey",
            u,
            a,
            l,
            me ? F : c,
          ),
          i)
        ) {
          const L = this.resolve(l, { ...n, keySeparator: !1 });
          L &&
            L.res &&
            this.logger.warn(
              "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.",
            );
        }
        let ke = [];
        const Oe = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          n.lng || this.language,
        );
        if (this.options.saveMissingTo === "fallback" && Oe && Oe[0])
          for (let L = 0; L < Oe.length; L++) ke.push(Oe[L]);
        else
          this.options.saveMissingTo === "all"
            ? (ke = this.languageUtils.toResolveHierarchy(
                n.lng || this.language,
              ))
            : ke.push(n.lng || this.language);
        const He = (L, T, j) => {
          const B = E && j !== c ? j : ue;
          (this.options.missingKeyHandler
            ? this.options.missingKeyHandler(L, a, T, B, me, n)
            : this.backendConnector &&
              this.backendConnector.saveMissing &&
              this.backendConnector.saveMissing(L, a, T, B, me, n),
            this.emit("missingKey", L, a, T, c));
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && C
            ? ke.forEach((L) => {
                const T = this.pluralResolver.getSuffixes(L, n);
                (P &&
                  n[`defaultValue${this.options.pluralSeparator}zero`] &&
                  T.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  T.push(`${this.options.pluralSeparator}zero`),
                  T.forEach((j) => {
                    He([L], l + j, n[`defaultValue${j}`] || F);
                  }));
              })
            : He(ke, l, F));
      }
      ((c = this.extendTranslation(c, t, n, p, r)),
        N &&
          c === l &&
          this.options.appendNamespaceToMissingKey &&
          (c = `${a}:${l}`),
        (N || y) &&
          this.options.parseMissingKeyHandler &&
          (this.options.compatibilityAPI !== "v1"
            ? (c = this.options.parseMissingKeyHandler(
                this.options.appendNamespaceToMissingKey ? `${a}:${l}` : l,
                y ? c : void 0,
              ))
            : (c = this.options.parseMissingKeyHandler(c))));
    }
    return o
      ? ((p.res = c), (p.usedParams = this.getUsedParamsDetails(n)), p)
      : c;
  }
  extendTranslation(t, n, r, o, i) {
    var l = this;
    if (this.i18nFormat && this.i18nFormat.parse)
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
      const u =
        D(t) &&
        (r && r.interpolation && r.interpolation.skipOnVariables !== void 0
          ? r.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let d;
      if (u) {
        const c = t.match(this.interpolator.nestingRegexp);
        d = c && c.length;
      }
      let p = r.replace && !D(r.replace) ? r.replace : r;
      if (
        (this.options.interpolation.defaultVariables &&
          (p = { ...this.options.interpolation.defaultVariables, ...p }),
        (t = this.interpolator.interpolate(
          t,
          p,
          r.lng || this.language || o.usedLng,
          r,
        )),
        u)
      ) {
        const c = t.match(this.interpolator.nestingRegexp),
          v = c && c.length;
        d < v && (r.nest = !1);
      }
      (!r.lng &&
        this.options.compatibilityAPI !== "v1" &&
        o &&
        o.res &&
        (r.lng = this.language || o.usedLng),
        r.nest !== !1 &&
          (t = this.interpolator.nest(
            t,
            function () {
              for (
                var c = arguments.length, v = new Array(c), w = 0;
                w < c;
                w++
              )
                v[w] = arguments[w];
              return i && i[0] === v[0] && !r.context
                ? (l.logger.warn(
                    `It seems you are nesting recursively key: ${v[0]} in key: ${n[0]}`,
                  ),
                  null)
                : l.translate(...v, n);
            },
            r,
          )),
        r.interpolation && this.interpolator.reset());
    }
    const s = r.postProcess || this.options.postProcess,
      a = D(s) ? [s] : s;
    return (
      t != null &&
        a &&
        a.length &&
        r.applyPostProcessor !== !1 &&
        (t = rd.handle(
          a,
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
  resolve(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r,
      o,
      i,
      l,
      s;
    return (
      D(t) && (t = [t]),
      t.forEach((a) => {
        if (this.isValidLookup(r)) return;
        const u = this.extractFromKey(a, n),
          d = u.key;
        o = d;
        let p = u.namespaces;
        this.options.fallbackNS && (p = p.concat(this.options.fallbackNS));
        const c = n.count !== void 0 && !D(n.count),
          v =
            c &&
            !n.ordinal &&
            n.count === 0 &&
            this.pluralResolver.shouldUseIntlApi(),
          w =
            n.context !== void 0 &&
            (D(n.context) || typeof n.context == "number") &&
            n.context !== "",
          S = n.lngs
            ? n.lngs
            : this.languageUtils.toResolveHierarchy(
                n.lng || this.language,
                n.fallbackLng,
              );
        p.forEach((O) => {
          this.isValidLookup(r) ||
            ((s = O),
            !Oa[`${S[0]}-${O}`] &&
              this.utils &&
              this.utils.hasLoadedNamespace &&
              !this.utils.hasLoadedNamespace(s) &&
              ((Oa[`${S[0]}-${O}`] = !0),
              this.logger.warn(
                `key "${o}" for languages "${S.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`,
                "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
              )),
            S.forEach((h) => {
              if (this.isValidLookup(r)) return;
              l = h;
              const f = [d];
              if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                this.i18nFormat.addLookupKeys(f, d, h, O, n);
              else {
                let y;
                c && (y = this.pluralResolver.getSuffix(h, n.count, n));
                const N = `${this.options.pluralSeparator}zero`,
                  C = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (c &&
                    (f.push(d + y),
                    n.ordinal &&
                      y.indexOf(C) === 0 &&
                      f.push(d + y.replace(C, this.options.pluralSeparator)),
                    v && f.push(d + N)),
                  w)
                ) {
                  const E = `${d}${this.options.contextSeparator}${n.context}`;
                  (f.push(E),
                    c &&
                      (f.push(E + y),
                      n.ordinal &&
                        y.indexOf(C) === 0 &&
                        f.push(E + y.replace(C, this.options.pluralSeparator)),
                      v && f.push(E + N)));
                }
              }
              let g;
              for (; (g = f.pop()); )
                this.isValidLookup(r) ||
                  ((i = g), (r = this.getResource(h, O, g, n)));
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
  getResource(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource
      ? this.i18nFormat.getResource(t, n, r, o)
      : this.resourceStore.getResource(t, n, r, o);
  }
  getUsedParamsDetails() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
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
      r = t.replace && !D(t.replace);
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
const xi = (e) => e.charAt(0).toUpperCase() + e.slice(1);
class _a {
  constructor(t) {
    ((this.options = t),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = Qe.create("languageUtils")));
  }
  getScriptPartFromCode(t) {
    if (((t = Lo(t)), !t || t.indexOf("-") < 0)) return null;
    const n = t.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x")
      ? null
      : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (((t = Lo(t)), !t || t.indexOf("-") < 0)) return t;
    const n = t.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (D(t) && t.indexOf("-") > -1) {
      if (typeof Intl < "u" && typeof Intl.getCanonicalLocales < "u")
        try {
          let o = Intl.getCanonicalLocales(t)[0];
          if ((o && this.options.lowerCaseLng && (o = o.toLowerCase()), o))
            return o;
        } catch {}
      const n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let r = t.split("-");
      return (
        this.options.lowerCaseLng
          ? (r = r.map((o) => o.toLowerCase()))
          : r.length === 2
            ? ((r[0] = r[0].toLowerCase()),
              (r[1] = r[1].toUpperCase()),
              n.indexOf(r[1].toLowerCase()) > -1 &&
                (r[1] = xi(r[1].toLowerCase())))
            : r.length === 3 &&
              ((r[0] = r[0].toLowerCase()),
              r[1].length === 2 && (r[1] = r[1].toUpperCase()),
              r[0] !== "sgn" &&
                r[2].length === 2 &&
                (r[2] = r[2].toUpperCase()),
              n.indexOf(r[1].toLowerCase()) > -1 &&
                (r[1] = xi(r[1].toLowerCase())),
              n.indexOf(r[2].toLowerCase()) > -1 &&
                (r[2] = xi(r[2].toLowerCase()))),
        r.join("-")
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
          const o = this.getLanguagePartFromCode(r);
          if (this.isSupportedCode(o)) return (n = o);
          n = this.options.supportedLngs.find((i) => {
            if (i === o) return i;
            if (
              !(i.indexOf("-") < 0 && o.indexOf("-") < 0) &&
              ((i.indexOf("-") > 0 &&
                o.indexOf("-") < 0 &&
                i.substring(0, i.indexOf("-")) === o) ||
                (i.indexOf(o) === 0 && o.length > 1))
            )
              return i;
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
      D(t) && (t = [t]),
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
    const r = this.getFallbackCodes(n || this.options.fallbackLng || [], t),
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
      D(t) && (t.indexOf("-") > -1 || t.indexOf("_") > -1)
        ? (this.options.load !== "languageOnly" &&
            i(this.formatLanguageCode(t)),
          this.options.load !== "languageOnly" &&
            this.options.load !== "currentOnly" &&
            i(this.getScriptPartFromCode(t)),
          this.options.load !== "currentOnly" &&
            i(this.getLanguagePartFromCode(t)))
        : D(t) && i(this.formatLanguageCode(t)),
      r.forEach((l) => {
        o.indexOf(l) < 0 && i(this.formatLanguageCode(l));
      }),
      o
    );
  }
}
let Oh = [
    {
      lngs: [
        "ach",
        "ak",
        "am",
        "arn",
        "br",
        "fil",
        "gun",
        "ln",
        "mfe",
        "mg",
        "mi",
        "oc",
        "pt",
        "pt-BR",
        "tg",
        "tl",
        "ti",
        "tr",
        "uz",
        "wa",
      ],
      nr: [1, 2],
      fc: 1,
    },
    {
      lngs: [
        "af",
        "an",
        "ast",
        "az",
        "bg",
        "bn",
        "ca",
        "da",
        "de",
        "dev",
        "el",
        "en",
        "eo",
        "es",
        "et",
        "eu",
        "fi",
        "fo",
        "fur",
        "fy",
        "gl",
        "gu",
        "ha",
        "hi",
        "hu",
        "hy",
        "ia",
        "it",
        "kk",
        "kn",
        "ku",
        "lb",
        "mai",
        "ml",
        "mn",
        "mr",
        "nah",
        "nap",
        "nb",
        "ne",
        "nl",
        "nn",
        "no",
        "nso",
        "pa",
        "pap",
        "pms",
        "ps",
        "pt-PT",
        "rm",
        "sco",
        "se",
        "si",
        "so",
        "son",
        "sq",
        "sv",
        "sw",
        "ta",
        "te",
        "tk",
        "ur",
        "yo",
      ],
      nr: [1, 2],
      fc: 2,
    },
    {
      lngs: [
        "ay",
        "bo",
        "cgg",
        "fa",
        "ht",
        "id",
        "ja",
        "jbo",
        "ka",
        "km",
        "ko",
        "ky",
        "lo",
        "ms",
        "sah",
        "su",
        "th",
        "tt",
        "ug",
        "vi",
        "wo",
        "zh",
      ],
      nr: [1],
      fc: 3,
    },
    {
      lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
      nr: [1, 2, 5],
      fc: 4,
    },
    { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
    { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
    { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
    { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
    { lngs: ["fr"], nr: [1, 2], fc: 9 },
    { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
    { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
    { lngs: ["is"], nr: [1, 2], fc: 12 },
    { lngs: ["jv"], nr: [0, 1], fc: 13 },
    { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
    { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
    { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
    { lngs: ["mk"], nr: [1, 2], fc: 17 },
    { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
    { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
    { lngs: ["or"], nr: [2, 1], fc: 2 },
    { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
    { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
    { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
  ],
  _h = {
    1: (e) => +(e > 1),
    2: (e) => +(e != 1),
    3: (e) => 0,
    4: (e) =>
      e % 10 == 1 && e % 100 != 11
        ? 0
        : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
          ? 1
          : 2,
    5: (e) =>
      e == 0
        ? 0
        : e == 1
          ? 1
          : e == 2
            ? 2
            : e % 100 >= 3 && e % 100 <= 10
              ? 3
              : e % 100 >= 11
                ? 4
                : 5,
    6: (e) => (e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2),
    7: (e) =>
      e == 1
        ? 0
        : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
          ? 1
          : 2,
    8: (e) => (e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3),
    9: (e) => +(e >= 2),
    10: (e) => (e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4),
    11: (e) =>
      e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3,
    12: (e) => +(e % 10 != 1 || e % 100 == 11),
    13: (e) => +(e !== 0),
    14: (e) => (e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3),
    15: (e) =>
      e % 10 == 1 && e % 100 != 11
        ? 0
        : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
          ? 1
          : 2,
    16: (e) => (e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2),
    17: (e) => (e == 1 || (e % 10 == 1 && e % 100 != 11) ? 0 : 1),
    18: (e) => (e == 0 ? 0 : e == 1 ? 1 : 2),
    19: (e) =>
      e == 1
        ? 0
        : e == 0 || (e % 100 > 1 && e % 100 < 11)
          ? 1
          : e % 100 > 10 && e % 100 < 20
            ? 2
            : 3,
    20: (e) => (e == 1 ? 0 : e == 0 || (e % 100 > 0 && e % 100 < 20) ? 1 : 2),
    21: (e) =>
      e % 100 == 1
        ? 1
        : e % 100 == 2
          ? 2
          : e % 100 == 3 || e % 100 == 4
            ? 3
            : 0,
    22: (e) =>
      e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3,
  };
const Th = ["v1", "v2", "v3"],
  Dh = ["v4"],
  Ta = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  jh = () => {
    const e = {};
    return (
      Oh.forEach((t) => {
        t.lngs.forEach((n) => {
          e[n] = { numbers: t.nr, plurals: _h[t.fc] };
        });
      }),
      e
    );
  };
class Ih {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    ((this.languageUtils = t),
      (this.options = n),
      (this.logger = Qe.create("pluralResolver")),
      (!this.options.compatibilityJSON ||
        Dh.includes(this.options.compatibilityJSON)) &&
        (typeof Intl > "u" || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = "v3"),
        this.logger.error(
          "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.",
        )),
      (this.rules = jh()),
      (this.pluralRulesCache = {}));
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi()) {
      const r = Lo(t === "dev" ? "en" : t),
        o = n.ordinal ? "ordinal" : "cardinal",
        i = JSON.stringify({ cleanedCode: r, type: o });
      if (i in this.pluralRulesCache) return this.pluralRulesCache[i];
      let l;
      try {
        l = new Intl.PluralRules(r, { type: o });
      } catch {
        if (!t.match(/-|_/)) return;
        const a = this.languageUtils.getLanguagePartFromCode(t);
        l = this.getRule(a, n);
      }
      return ((this.pluralRulesCache[i] = l), l);
    }
    return (
      this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)]
    );
  }
  needsPlural(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return this.shouldUseIntlApi()
      ? r && r.resolvedOptions().pluralCategories.length > 1
      : r && r.numbers.length > 1;
  }
  getPluralFormsOfKey(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(t, r).map((o) => `${n}${o}`);
  }
  getSuffixes(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return r
      ? this.shouldUseIntlApi()
        ? r
            .resolvedOptions()
            .pluralCategories.sort((o, i) => Ta[o] - Ta[i])
            .map(
              (o) =>
                `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${o}`,
            )
        : r.numbers.map((o) => this.getSuffix(t, o, n))
      : [];
  }
  getSuffix(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const o = this.getRule(t, r);
    return o
      ? this.shouldUseIntlApi()
        ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${o.select(n)}`
        : this.getSuffixRetroCompatible(o, n)
      : (this.logger.warn(`no plural rule found for: ${t}`), "");
  }
  getSuffixRetroCompatible(t, n) {
    const r = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n));
    let o = t.numbers[r];
    this.options.simplifyPluralSuffix &&
      t.numbers.length === 2 &&
      t.numbers[0] === 1 &&
      (o === 2 ? (o = "plural") : o === 1 && (o = ""));
    const i = () =>
      this.options.prepend && o.toString()
        ? this.options.prepend + o.toString()
        : o.toString();
    return this.options.compatibilityJSON === "v1"
      ? o === 1
        ? ""
        : typeof o == "number"
          ? `_plural_${o.toString()}`
          : i()
      : this.options.compatibilityJSON === "v2" ||
          (this.options.simplifyPluralSuffix &&
            t.numbers.length === 2 &&
            t.numbers[0] === 1)
        ? i()
        : this.options.prepend && r.toString()
          ? this.options.prepend + r.toString()
          : r.toString();
  }
  shouldUseIntlApi() {
    return !Th.includes(this.options.compatibilityJSON);
  }
}
const Da = function (e, t, n) {
    let r =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".",
      o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
      i = Sh(e, t, n);
    return (
      !i && o && D(n) && ((i = ml(e, n, r)), i === void 0 && (i = ml(t, n, r))),
      i
    );
  },
  Si = (e) => e.replace(/\$/g, "$$$$");
class $h {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ((this.logger = Qe.create("interpolator")),
      (this.options = t),
      (this.format = (t.interpolation && t.interpolation.format) || ((n) => n)),
      this.init(t));
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
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
      unescapeSuffix: d,
      unescapePrefix: p,
      nestingPrefix: c,
      nestingPrefixEscaped: v,
      nestingSuffix: w,
      nestingSuffixEscaped: S,
      nestingOptionsSeparator: O,
      maxReplaces: h,
      alwaysFormat: f,
    } = t.interpolation;
    ((this.escape = n !== void 0 ? n : Nh),
      (this.escapeValue = r !== void 0 ? r : !0),
      (this.useRawValueToEscape = o !== void 0 ? o : !1),
      (this.prefix = i ? Yt(i) : l || "{{"),
      (this.suffix = s ? Yt(s) : a || "}}"),
      (this.formatSeparator = u || ","),
      (this.unescapePrefix = d ? "" : p || "-"),
      (this.unescapeSuffix = this.unescapePrefix ? "" : d || ""),
      (this.nestingPrefix = c ? Yt(c) : v || Yt("$t(")),
      (this.nestingSuffix = w ? Yt(w) : S || Yt(")")),
      (this.nestingOptionsSeparator = O || ","),
      (this.maxReplaces = h || 1e3),
      (this.alwaysFormat = f !== void 0 ? f : !1),
      this.resetRegExp());
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = (n, r) =>
      n && n.source === r ? ((n.lastIndex = 0), n) : new RegExp(r, "g");
    ((this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = t(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`,
      )),
      (this.nestingRegexp = t(
        this.nestingRegexp,
        `${this.nestingPrefix}(.+?)${this.nestingSuffix}`,
      )));
  }
  interpolate(t, n, r, o) {
    let i, l, s;
    const a =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      u = (v) => {
        if (v.indexOf(this.formatSeparator) < 0) {
          const h = Da(
            n,
            a,
            v,
            this.options.keySeparator,
            this.options.ignoreJSONStructure,
          );
          return this.alwaysFormat
            ? this.format(h, void 0, r, { ...o, ...n, interpolationkey: v })
            : h;
        }
        const w = v.split(this.formatSeparator),
          S = w.shift().trim(),
          O = w.join(this.formatSeparator).trim();
        return this.format(
          Da(
            n,
            a,
            S,
            this.options.keySeparator,
            this.options.ignoreJSONStructure,
          ),
          O,
          r,
          { ...o, ...n, interpolationkey: S },
        );
      };
    this.resetRegExp();
    const d =
        (o && o.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      p =
        o && o.interpolation && o.interpolation.skipOnVariables !== void 0
          ? o.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (v) => Si(v) },
        {
          regex: this.regexp,
          safeValue: (v) => (this.escapeValue ? Si(this.escape(v)) : Si(v)),
        },
      ].forEach((v) => {
        for (s = 0; (i = v.regex.exec(t)); ) {
          const w = i[1].trim();
          if (((l = u(w)), l === void 0))
            if (typeof d == "function") {
              const O = d(t, i, o);
              l = D(O) ? O : "";
            } else if (o && Object.prototype.hasOwnProperty.call(o, w)) l = "";
            else if (p) {
              l = i[0];
              continue;
            } else
              (this.logger.warn(
                `missed to pass in variable ${w} for interpolating ${t}`,
              ),
                (l = ""));
          else !D(l) && !this.useRawValueToEscape && (l = Ea(l));
          const S = v.safeValue(l);
          if (
            ((t = t.replace(i[0], S)),
            p
              ? ((v.regex.lastIndex += l.length),
                (v.regex.lastIndex -= i[0].length))
              : (v.regex.lastIndex = 0),
            s++,
            s >= this.maxReplaces)
          )
            break;
        }
      }),
      t
    );
  }
  nest(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      o,
      i,
      l;
    const s = (a, u) => {
      const d = this.nestingOptionsSeparator;
      if (a.indexOf(d) < 0) return a;
      const p = a.split(new RegExp(`${d}[ ]*{`));
      let c = `{${p[1]}`;
      ((a = p[0]), (c = this.interpolate(c, l)));
      const v = c.match(/'/g),
        w = c.match(/"/g);
      ((v && v.length % 2 === 0 && !w) || w.length % 2 !== 0) &&
        (c = c.replace(/'/g, '"'));
      try {
        ((l = JSON.parse(c)), u && (l = { ...u, ...l }));
      } catch (S) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${a}`,
            S,
          ),
          `${a}${d}${c}`
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
        (l = l.replace && !D(l.replace) ? l.replace : l),
        (l.applyPostProcessor = !1),
        delete l.defaultValue);
      let u = !1;
      if (o[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(o[1])) {
        const d = o[1].split(this.formatSeparator).map((p) => p.trim());
        ((o[1] = d.shift()), (a = d), (u = !0));
      }
      if (((i = n(s.call(this, o[1].trim(), l), l)), i && o[0] === t && !D(i)))
        return i;
      (D(i) || (i = Ea(i)),
        i ||
          (this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`),
          (i = "")),
        u &&
          (i = a.reduce(
            (d, p) =>
              this.format(d, p, r.lng, { ...r, interpolationkey: o[1].trim() }),
            i.trim(),
          )),
        (t = t.replace(o[0], i)),
        (this.regexp.lastIndex = 0));
    }
    return t;
  }
}
const zh = (e) => {
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
                  d = s.trim();
                (n[d] || (n[d] = u),
                  u === "false" && (n[d] = !1),
                  u === "true" && (n[d] = !0),
                  isNaN(u) || (n[d] = parseInt(u, 10)));
              }
            });
    }
    return { formatName: t, formatOptions: n };
  },
  Gt = (e) => {
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
      return (s || ((s = e(Lo(r), o)), (t[l] = s)), s(n));
    };
  };
class Mh {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ((this.logger = Qe.create("formatter")),
      (this.options = t),
      (this.formats = {
        number: Gt((n, r) => {
          const o = new Intl.NumberFormat(n, { ...r });
          return (i) => o.format(i);
        }),
        currency: Gt((n, r) => {
          const o = new Intl.NumberFormat(n, { ...r, style: "currency" });
          return (i) => o.format(i);
        }),
        datetime: Gt((n, r) => {
          const o = new Intl.DateTimeFormat(n, { ...r });
          return (i) => o.format(i);
        }),
        relativetime: Gt((n, r) => {
          const o = new Intl.RelativeTimeFormat(n, { ...r });
          return (i) => o.format(i, r.range || "day");
        }),
        list: Gt((n, r) => {
          const o = new Intl.ListFormat(n, { ...r });
          return (i) => o.format(i);
        }),
      }),
      this.init(t));
  }
  init(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} };
    this.formatSeparator = n.interpolation.formatSeparator || ",";
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n;
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = Gt(n);
  }
  format(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
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
      const { formatName: u, formatOptions: d } = zh(a);
      if (this.formats[u]) {
        let p = s;
        try {
          const c =
              (o && o.formatParams && o.formatParams[o.interpolationkey]) || {},
            v = c.locale || c.lng || o.locale || o.lng || r;
          p = this.formats[u](s, v, { ...d, ...o, ...c });
        } catch (c) {
          this.logger.warn(c);
        }
        return p;
      } else this.logger.warn(`there was no format function for ${u}`);
      return s;
    }, t);
  }
}
const Fh = (e, t) => {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
};
class Uh extends Wo {
  constructor(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    (super(),
      (this.backend = t),
      (this.store = n),
      (this.services = r),
      (this.languageUtils = r.languageUtils),
      (this.options = o),
      (this.logger = Qe.create("backendConnector")),
      (this.waitingReads = []),
      (this.maxParallelReads = o.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5),
      (this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend && this.backend.init && this.backend.init(r, o.backend, o));
  }
  queueLoad(t, n, r, o) {
    const i = {},
      l = {},
      s = {},
      a = {};
    return (
      t.forEach((u) => {
        let d = !0;
        (n.forEach((p) => {
          const c = `${u}|${p}`;
          !r.reload && this.store.hasResourceBundle(u, p)
            ? (this.state[c] = 2)
            : this.state[c] < 0 ||
              (this.state[c] === 1
                ? l[c] === void 0 && (l[c] = !0)
                : ((this.state[c] = 1),
                  (d = !1),
                  l[c] === void 0 && (l[c] = !0),
                  i[c] === void 0 && (i[c] = !0),
                  a[p] === void 0 && (a[p] = !0)));
        }),
          d || (s[u] = !0));
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
      (xh(a.loaded, [i], l),
        Fh(a, t),
        n && a.errors.push(n),
        a.pendingCount === 0 &&
          !a.done &&
          (Object.keys(a.loaded).forEach((u) => {
            s[u] || (s[u] = {});
            const d = a.loaded[u];
            d.length &&
              d.forEach((p) => {
                s[u][p] === void 0 && (s[u][p] = !0);
              });
          }),
          (a.done = !0),
          a.errors.length ? a.callback(a.errors) : a.callback()));
    }),
      this.emit("loaded", s),
      (this.queue = this.queue.filter((a) => !a.done)));
  }
  read(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      i =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : this.retryTimeout,
      l = arguments.length > 5 ? arguments[5] : void 0;
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
    const s = (u, d) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const p = this.waitingReads.shift();
          this.read(p.lng, p.ns, p.fcName, p.tried, p.wait, p.callback);
        }
        if (u && d && o < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, t, n, r, o + 1, i * 2, l);
          }, i);
          return;
        }
        l(u, d);
      },
      a = this.backend[r].bind(this.backend);
    if (a.length === 2) {
      try {
        const u = a(t, n);
        u && typeof u.then == "function"
          ? u.then((d) => s(null, d)).catch(s)
          : s(null, u);
      } catch (u) {
        s(u);
      }
      return;
    }
    return a(t, n, s);
  }
  prepareLoading(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      o = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return (
        this.logger.warn(
          "No backend was added via i18next.use. Will not load resources.",
        ),
        o && o()
      );
    (D(t) && (t = this.languageUtils.toResolveHierarchy(t)), D(n) && (n = [n]));
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
  loadOne(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
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
  saveMissing(t, n, r, o, i) {
    let l = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      s =
        arguments.length > 6 && arguments[6] !== void 0
          ? arguments[6]
          : () => {};
    if (
      this.services.utils &&
      this.services.utils.hasLoadedNamespace &&
      !this.services.utils.hasLoadedNamespace(n)
    ) {
      this.logger.warn(
        `did not save key "${r}" as the namespace "${n}" was not yet loaded`,
        "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
      );
      return;
    }
    if (!(r == null || r === "")) {
      if (this.backend && this.backend.create) {
        const a = { ...l, isUpdate: i },
          u = this.backend.create.bind(this.backend);
        if (u.length < 6)
          try {
            let d;
            (u.length === 5 ? (d = u(t, n, r, o, a)) : (d = u(t, n, r, o)),
              d && typeof d.then == "function"
                ? d.then((p) => s(null, p)).catch(s)
                : s(null, d));
          } catch (d) {
            s(d);
          }
        else u(t, n, r, o, s, a);
      }
      !t || !t[0] || this.store.addResource(t[0], n, r, o);
    }
  }
}
const ja = () => ({
    debug: !1,
    initImmediate: !0,
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
        D(e[1]) && (t.defaultValue = e[1]),
        D(e[2]) && (t.tDescription = e[2]),
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
  }),
  Ia = (e) => (
    D(e.ns) && (e.ns = [e.ns]),
    D(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]),
    D(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]),
    e.supportedLngs &&
      e.supportedLngs.indexOf("cimode") < 0 &&
      (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
    e
  ),
  Ar = () => {},
  Ah = (e) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
      typeof e[n] == "function" && (e[n] = e[n].bind(e));
    });
  };
class pr extends Wo {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (super(),
      (this.options = Ia(t)),
      (this.services = {}),
      (this.logger = Qe),
      (this.modules = { external: [] }),
      Ah(this),
      n && !this.isInitialized && !t.isClone)
    ) {
      if (!this.options.initImmediate) return (this.init(t, n), this);
      setTimeout(() => {
        this.init(t, n);
      }, 0);
    }
  }
  init() {
    var t = this;
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0;
    ((this.isInitializing = !0),
      typeof n == "function" && ((r = n), (n = {})),
      !n.defaultNS &&
        n.defaultNS !== !1 &&
        n.ns &&
        (D(n.ns)
          ? (n.defaultNS = n.ns)
          : n.ns.indexOf("translation") < 0 && (n.defaultNS = n.ns[0])));
    const o = ja();
    ((this.options = { ...o, ...this.options, ...Ia(n) }),
      this.options.compatibilityAPI !== "v1" &&
        (this.options.interpolation = {
          ...o.interpolation,
          ...this.options.interpolation,
        }),
      n.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = n.keySeparator),
      n.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = n.nsSeparator));
    const i = (d) => (d ? (typeof d == "function" ? new d() : d) : null);
    if (!this.options.isClone) {
      this.modules.logger
        ? Qe.init(i(this.modules.logger), this.options)
        : Qe.init(null, this.options);
      let d;
      this.modules.formatter
        ? (d = this.modules.formatter)
        : typeof Intl < "u" && (d = Mh);
      const p = new _a(this.options);
      this.store = new Pa(this.options.resources, this.options);
      const c = this.services;
      ((c.logger = Qe),
        (c.resourceStore = this.store),
        (c.languageUtils = p),
        (c.pluralResolver = new Ih(p, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        d &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === o.interpolation.format) &&
          ((c.formatter = i(d)),
          c.formatter.init(c, this.options),
          (this.options.interpolation.format = c.formatter.format.bind(
            c.formatter,
          ))),
        (c.interpolator = new $h(this.options)),
        (c.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (c.backendConnector = new Uh(
          i(this.modules.backend),
          c.resourceStore,
          c,
          this.options,
        )),
        c.backendConnector.on("*", function (v) {
          for (
            var w = arguments.length, S = new Array(w > 1 ? w - 1 : 0), O = 1;
            O < w;
            O++
          )
            S[O - 1] = arguments[O];
          t.emit(v, ...S);
        }),
        this.modules.languageDetector &&
          ((c.languageDetector = i(this.modules.languageDetector)),
          c.languageDetector.init &&
            c.languageDetector.init(c, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((c.i18nFormat = i(this.modules.i18nFormat)),
          c.i18nFormat.init && c.i18nFormat.init(this)),
        (this.translator = new Po(this.services, this.options)),
        this.translator.on("*", function (v) {
          for (
            var w = arguments.length, S = new Array(w > 1 ? w - 1 : 0), O = 1;
            O < w;
            O++
          )
            S[O - 1] = arguments[O];
          t.emit(v, ...S);
        }),
        this.modules.external.forEach((v) => {
          v.init && v.init(this);
        }));
    }
    if (
      ((this.format = this.options.interpolation.format),
      r || (r = Ar),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const d = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng,
      );
      d.length > 0 && d[0] !== "dev" && (this.options.lng = d[0]);
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
      ].forEach((d) => {
        this[d] = function () {
          return t.store[d](...arguments);
        };
      }),
      [
        "addResource",
        "addResources",
        "addResourceBundle",
        "removeResourceBundle",
      ].forEach((d) => {
        this[d] = function () {
          return (t.store[d](...arguments), t);
        };
      }));
    const a = jn(),
      u = () => {
        const d = (p, c) => {
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
            a.resolve(c),
            r(p, c));
        };
        if (
          this.languages &&
          this.options.compatibilityAPI !== "v1" &&
          !this.isInitialized
        )
          return d(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, d);
      };
    return (
      this.options.resources || !this.options.initImmediate
        ? u()
        : setTimeout(u, 0),
      a
    );
  }
  loadResources(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ar;
    const o = D(t) ? t : this.language;
    if (
      (typeof t == "function" && (r = t),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        o &&
        o.toLowerCase() === "cimode" &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return r();
      const i = [],
        l = (s) => {
          if (!s || s === "cimode") return;
          this.services.languageUtils.toResolveHierarchy(s).forEach((u) => {
            u !== "cimode" && i.indexOf(u) < 0 && i.push(u);
          });
        };
      (o
        ? l(o)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((a) => l(a)),
        this.options.preload && this.options.preload.forEach((s) => l(s)),
        this.services.backendConnector.load(i, this.options.ns, (s) => {
          (!s &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            r(s));
        }));
    } else r(null);
  }
  reloadResources(t, n, r) {
    const o = jn();
    return (
      typeof t == "function" && ((r = t), (t = void 0)),
      typeof n == "function" && ((r = n), (n = void 0)),
      t || (t = this.languages),
      n || (n = this.options.ns),
      r || (r = Ar),
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
      t.type === "postProcessor" && rd.addPostProcessor(t),
      t.type === "formatter" && (this.modules.formatter = t),
      t.type === "3rdParty" && this.modules.external.push(t),
      this
    );
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1))
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
  }
  changeLanguage(t, n) {
    var r = this;
    this.isLanguageChangingTo = t;
    const o = jn();
    this.emit("languageChanging", t);
    const i = (a) => {
        ((this.language = a),
          (this.languages = this.services.languageUtils.toResolveHierarchy(a)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(a));
      },
      l = (a, u) => {
        (u
          ? (i(u),
            this.translator.changeLanguage(u),
            (this.isLanguageChangingTo = void 0),
            this.emit("languageChanged", u),
            this.logger.log("languageChanged", u))
          : (this.isLanguageChangingTo = void 0),
          o.resolve(function () {
            return r.t(...arguments);
          }),
          n &&
            n(a, function () {
              return r.t(...arguments);
            }));
      },
      s = (a) => {
        !t && !a && this.services.languageDetector && (a = []);
        const u = D(a)
          ? a
          : this.services.languageUtils.getBestMatchFromCodes(a);
        (u &&
          (this.language || i(u),
          this.translator.language || this.translator.changeLanguage(u),
          this.services.languageDetector &&
            this.services.languageDetector.cacheUserLanguage &&
            this.services.languageDetector.cacheUserLanguage(u)),
          this.loadResources(u, (d) => {
            l(d, u);
          }));
      };
    return (
      !t &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? s(this.services.languageDetector.detect())
        : !t &&
            this.services.languageDetector &&
            this.services.languageDetector.async
          ? this.services.languageDetector.detect.length === 0
            ? this.services.languageDetector.detect().then(s)
            : this.services.languageDetector.detect(s)
          : s(t),
      o
    );
  }
  getFixedT(t, n, r) {
    var o = this;
    const i = function (l, s) {
      let a;
      if (typeof s != "object") {
        for (
          var u = arguments.length, d = new Array(u > 2 ? u - 2 : 0), p = 2;
          p < u;
          p++
        )
          d[p - 2] = arguments[p];
        a = o.options.overloadTranslationOptionHandler([l, s].concat(d));
      } else a = { ...s };
      ((a.lng = a.lng || i.lng),
        (a.lngs = a.lngs || i.lngs),
        (a.ns = a.ns || i.ns),
        a.keyPrefix !== "" && (a.keyPrefix = a.keyPrefix || r || i.keyPrefix));
      const c = o.options.keySeparator || ".";
      let v;
      return (
        a.keyPrefix && Array.isArray(l)
          ? (v = l.map((w) => `${a.keyPrefix}${c}${w}`))
          : (v = a.keyPrefix ? `${a.keyPrefix}${c}${l}` : l),
        o.t(v, a)
      );
    };
    return (
      D(t) ? (i.lng = t) : (i.lngs = t),
      (i.ns = n),
      (i.keyPrefix = r),
      i
    );
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
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
    const r = jn();
    return this.options.ns
      ? (D(t) && (t = [t]),
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
    const r = jn();
    D(t) && (t = [t]);
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
    if (
      (t ||
        (t =
          this.resolvedLanguage ||
          (this.languages && this.languages.length > 0
            ? this.languages[0]
            : this.language)),
      !t)
    )
      return "rtl";
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
      r = (this.services && this.services.languageUtils) || new _a(ja());
    return n.indexOf(r.getLanguagePartFromCode(t)) > -1 ||
      t.toLowerCase().indexOf("-arab") > 1
      ? "rtl"
      : "ltr";
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    return new pr(t, n);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ar;
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const o = { ...this.options, ...t, isClone: !0 },
      i = new pr(o);
    return (
      (t.debug !== void 0 || t.prefix !== void 0) &&
        (i.logger = i.logger.clone(t)),
      ["store", "services", "language"].forEach((s) => {
        i[s] = this[s];
      }),
      (i.services = { ...this.services }),
      (i.services.utils = { hasLoadedNamespace: i.hasLoadedNamespace.bind(i) }),
      r &&
        ((i.store = new Pa(this.store.data, o)),
        (i.services.resourceStore = i.store)),
      (i.translator = new Po(i.services, o)),
      i.translator.on("*", function (s) {
        for (
          var a = arguments.length, u = new Array(a > 1 ? a - 1 : 0), d = 1;
          d < a;
          d++
        )
          u[d - 1] = arguments[d];
        i.emit(s, ...u);
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
const ae = pr.createInstance();
ae.createInstance = pr.createInstance;
ae.createInstance;
ae.dir;
ae.init;
ae.loadResources;
ae.reloadResources;
ae.use;
ae.changeLanguage;
ae.getFixedT;
ae.t;
ae.exists;
ae.setDefaultNamespace;
ae.hasLoadedNamespace;
ae.loadNamespaces;
ae.loadLanguages;
function Vh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function hr(e) {
  "@babel/helpers - typeof";
  return (
    (hr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    hr(e)
  );
}
function Bh(e, t) {
  if (hr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (hr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Hh(e) {
  var t = Bh(e, "string");
  return hr(t) == "symbol" ? t : t + "";
}
function bh(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, Hh(r.key), r));
  }
}
function Wh(e, t, n) {
  return (
    t && bh(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
var od = [],
  Kh = od.forEach,
  Qh = od.slice;
function Yh(e) {
  return (
    Kh.call(Qh.call(arguments, 1), function (t) {
      if (t) for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    }),
    e
  );
}
var $a = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
  Gh = function (t, n, r) {
    var o = r || {};
    o.path = o.path || "/";
    var i = encodeURIComponent(n),
      l = "".concat(t, "=").concat(i);
    if (o.maxAge > 0) {
      var s = o.maxAge - 0;
      if (Number.isNaN(s)) throw new Error("maxAge should be a Number");
      l += "; Max-Age=".concat(Math.floor(s));
    }
    if (o.domain) {
      if (!$a.test(o.domain)) throw new TypeError("option domain is invalid");
      l += "; Domain=".concat(o.domain);
    }
    if (o.path) {
      if (!$a.test(o.path)) throw new TypeError("option path is invalid");
      l += "; Path=".concat(o.path);
    }
    if (o.expires) {
      if (typeof o.expires.toUTCString != "function")
        throw new TypeError("option expires is invalid");
      l += "; Expires=".concat(o.expires.toUTCString());
    }
    if (
      (o.httpOnly && (l += "; HttpOnly"),
      o.secure && (l += "; Secure"),
      o.sameSite)
    ) {
      var a =
        typeof o.sameSite == "string" ? o.sameSite.toLowerCase() : o.sameSite;
      switch (a) {
        case !0:
          l += "; SameSite=Strict";
          break;
        case "lax":
          l += "; SameSite=Lax";
          break;
        case "strict":
          l += "; SameSite=Strict";
          break;
        case "none":
          l += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    }
    return l;
  },
  za = {
    create: function (t, n, r, o) {
      var i =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : { path: "/", sameSite: "strict" };
      (r &&
        ((i.expires = new Date()),
        i.expires.setTime(i.expires.getTime() + r * 60 * 1e3)),
        o && (i.domain = o),
        (document.cookie = Gh(t, encodeURIComponent(n), i)));
    },
    read: function (t) {
      for (
        var n = "".concat(t, "="), r = document.cookie.split(";"), o = 0;
        o < r.length;
        o++
      ) {
        for (var i = r[o]; i.charAt(0) === " "; ) i = i.substring(1, i.length);
        if (i.indexOf(n) === 0) return i.substring(n.length, i.length);
      }
      return null;
    },
    remove: function (t) {
      this.create(t, "", -1);
    },
  },
  Jh = {
    name: "cookie",
    lookup: function (t) {
      var n;
      if (t.lookupCookie && typeof document < "u") {
        var r = za.read(t.lookupCookie);
        r && (n = r);
      }
      return n;
    },
    cacheUserLanguage: function (t, n) {
      n.lookupCookie &&
        typeof document < "u" &&
        za.create(
          n.lookupCookie,
          t,
          n.cookieMinutes,
          n.cookieDomain,
          n.cookieOptions,
        );
    },
  },
  Xh = {
    name: "querystring",
    lookup: function (t) {
      var n;
      if (typeof window < "u") {
        var r = window.location.search;
        !window.location.search &&
          window.location.hash &&
          window.location.hash.indexOf("?") > -1 &&
          (r = window.location.hash.substring(
            window.location.hash.indexOf("?"),
          ));
        for (
          var o = r.substring(1), i = o.split("&"), l = 0;
          l < i.length;
          l++
        ) {
          var s = i[l].indexOf("=");
          if (s > 0) {
            var a = i[l].substring(0, s);
            a === t.lookupQuerystring && (n = i[l].substring(s + 1));
          }
        }
      }
      return n;
    },
  },
  In = null,
  Ma = function () {
    if (In !== null) return In;
    try {
      In = window !== "undefined" && window.localStorage !== null;
      var t = "i18next.translate.boo";
      (window.localStorage.setItem(t, "foo"),
        window.localStorage.removeItem(t));
    } catch {
      In = !1;
    }
    return In;
  },
  Zh = {
    name: "localStorage",
    lookup: function (t) {
      var n;
      if (t.lookupLocalStorage && Ma()) {
        var r = window.localStorage.getItem(t.lookupLocalStorage);
        r && (n = r);
      }
      return n;
    },
    cacheUserLanguage: function (t, n) {
      n.lookupLocalStorage &&
        Ma() &&
        window.localStorage.setItem(n.lookupLocalStorage, t);
    },
  },
  $n = null,
  Fa = function () {
    if ($n !== null) return $n;
    try {
      $n = window !== "undefined" && window.sessionStorage !== null;
      var t = "i18next.translate.boo";
      (window.sessionStorage.setItem(t, "foo"),
        window.sessionStorage.removeItem(t));
    } catch {
      $n = !1;
    }
    return $n;
  },
  qh = {
    name: "sessionStorage",
    lookup: function (t) {
      var n;
      if (t.lookupSessionStorage && Fa()) {
        var r = window.sessionStorage.getItem(t.lookupSessionStorage);
        r && (n = r);
      }
      return n;
    },
    cacheUserLanguage: function (t, n) {
      n.lookupSessionStorage &&
        Fa() &&
        window.sessionStorage.setItem(n.lookupSessionStorage, t);
    },
  },
  eg = {
    name: "navigator",
    lookup: function (t) {
      var n = [];
      if (typeof navigator < "u") {
        if (navigator.languages)
          for (var r = 0; r < navigator.languages.length; r++)
            n.push(navigator.languages[r]);
        (navigator.userLanguage && n.push(navigator.userLanguage),
          navigator.language && n.push(navigator.language));
      }
      return n.length > 0 ? n : void 0;
    },
  },
  tg = {
    name: "htmlTag",
    lookup: function (t) {
      var n,
        r =
          t.htmlTag ||
          (typeof document < "u" ? document.documentElement : null);
      return (
        r &&
          typeof r.getAttribute == "function" &&
          (n = r.getAttribute("lang")),
        n
      );
    },
  },
  ng = {
    name: "path",
    lookup: function (t) {
      var n;
      if (typeof window < "u") {
        var r = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
        if (r instanceof Array)
          if (typeof t.lookupFromPathIndex == "number") {
            if (typeof r[t.lookupFromPathIndex] != "string") return;
            n = r[t.lookupFromPathIndex].replace("/", "");
          } else n = r[0].replace("/", "");
      }
      return n;
    },
  },
  rg = {
    name: "subdomain",
    lookup: function (t) {
      var n =
          typeof t.lookupFromSubdomainIndex == "number"
            ? t.lookupFromSubdomainIndex + 1
            : 1,
        r =
          typeof window < "u" &&
          window.location &&
          window.location.hostname &&
          window.location.hostname.match(
            /^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i,
          );
      if (r) return r[n];
    },
  },
  id = !1;
try {
  (document.cookie, (id = !0));
} catch {}
var ld = [
  "querystring",
  "cookie",
  "localStorage",
  "sessionStorage",
  "navigator",
  "htmlTag",
];
id || ld.splice(1, 1);
function og() {
  return {
    order: ld,
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    caches: ["localStorage"],
    excludeCacheFor: ["cimode"],
    convertDetectedLanguage: function (t) {
      return t;
    },
  };
}
var sd = (function () {
  function e(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (Vh(this, e),
      (this.type = "languageDetector"),
      (this.detectors = {}),
      this.init(t, n));
  }
  return Wh(e, [
    {
      key: "init",
      value: function (n) {
        var r =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          o =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        ((this.services = n || { languageUtils: {} }),
          (this.options = Yh(r, this.options || {}, og())),
          typeof this.options.convertDetectedLanguage == "string" &&
            this.options.convertDetectedLanguage.indexOf("15897") > -1 &&
            (this.options.convertDetectedLanguage = function (i) {
              return i.replace("-", "_");
            }),
          this.options.lookupFromUrlIndex &&
            (this.options.lookupFromPathIndex =
              this.options.lookupFromUrlIndex),
          (this.i18nOptions = o),
          this.addDetector(Jh),
          this.addDetector(Xh),
          this.addDetector(Zh),
          this.addDetector(qh),
          this.addDetector(eg),
          this.addDetector(tg),
          this.addDetector(ng),
          this.addDetector(rg));
      },
    },
    {
      key: "addDetector",
      value: function (n) {
        return ((this.detectors[n.name] = n), this);
      },
    },
    {
      key: "detect",
      value: function (n) {
        var r = this;
        n || (n = this.options.order);
        var o = [];
        return (
          n.forEach(function (i) {
            if (r.detectors[i]) {
              var l = r.detectors[i].lookup(r.options);
              (l && typeof l == "string" && (l = [l]), l && (o = o.concat(l)));
            }
          }),
          (o = o.map(function (i) {
            return r.options.convertDetectedLanguage(i);
          })),
          this.services.languageUtils.getBestMatchFromCodes
            ? o
            : o.length > 0
              ? o[0]
              : null
        );
      },
    },
    {
      key: "cacheUserLanguage",
      value: function (n, r) {
        var o = this;
        (r || (r = this.options.caches),
          r &&
            ((this.options.excludeCacheFor &&
              this.options.excludeCacheFor.indexOf(n) > -1) ||
              r.forEach(function (i) {
                o.detectors[i] &&
                  o.detectors[i].cacheUserLanguage(n, o.options);
              })));
      },
    },
  ]);
})();
sd.type = "languageDetector";
const ig = {
  en: {
    translation: {
      inventoryMerge: "Daily Inventory",
      company: "Hongsen Technology",
      totalMergeSheets: "Total Merge Sheets",
      createNewMergeSheet: "Create New Merge Sheet",
      createNew: "Create New",
      cancel: "Cancel",
      create: "Create",
      enterSheetName: "Enter sheet name",
      records: "List count",
      loading: "Loading",
      searchPlaceholder: "Search by NAME or INV-NUMBER...",
      tabs: {
        manage: "Management",
        merge: "Merge",
        review: "Review",
        report: "Report",
        final: "Final",
        dailyReport: "Daily Inventory Report",
      },
      copyright: "Copyright ©2025 鴻森智能科技",
      logout: "Logout",
      edit: "Edit",
      download: "Download",
      delete: "Delete",
      login: "Login",
      userId: "ID",
      password: "Password",
      loginError: "Login failed. Please try again.",
      login_id: "Enter account",
      login_password: "Enter password",
      mergeSheetBasicInfo: "Merge Sheet Basic Info",
      totalRecords: "Total Records",
      deleteSelected: "Delete Selected",
      addRecord: "Add Record",
      columns: {
        sn: "SN",
        name: "NAME",
        type: "TYPE",
        export: "Export",
        delete: "Delete",
        creator: "Creator",
        createTime: "Create Time",
      },
      recordTypes: {
        inventory: "Inventory Record",
        consumption: "Consumption Record",
        review: "Review Record",
      },
      searchFields: { name: "Record Name", number: "Record Number" },
      searchButton: "Search",
      enterRecordName: "Enter record name",
      enterRecordNumber: "Enter record number",
      selectAll: "Select All",
      deselectAll: "Deselect All",
      addSelected: "Add Selected",
      noRecordsFound: "No related records found",
      searchPrompt: "Search for records to add...",
      recordNumber: "Record Number...",
      name: "Name",
      creator: "Creator",
      createTime: "Create Time",
      dailyReport: {
        title: "Time Range",
        startDate: "Start Date",
        endDate: "End Date",
        totalRecords: "Total Records",
        selectedRecords: "Selected Records",
        downloadExcel: "Download Excel",
        downloadDailyReport: "Download Daily Report",
        downloadMonthlyReport: "Download Monthly Report",
        serialNumber: "Serial Number",
        name: "Name",
        createDate: "Create Date",
        status: "Status",
        actions: "Actions",
        download: "Download",
        noData: "No data available",
        selectDate: "Select Date",
        selectMonth: "Select Month",
        cancel: "Cancel",
        confirmDownload: "Confirm Download",
      },
    },
  },
  zh: {
    translation: {
      inventoryMerge: "每日盤點報表",
      company: "鴻森智能科技",
      totalMergeSheets: "合併單數量",
      createNewMergeSheet: "建立新合併單",
      createNew: "建立新的",
      cancel: "取消",
      create: "建立",
      enterSheetName: "輸入合併單名稱",
      records: "單據數量",
      loading: "載入中",
      searchPlaceholder: "請輸入合併單名稱或單號...",
      tabs: {
        manage: "管理",
        merge: "合併",
        review: "覆盤",
        report: "報表",
        final: "定盤",
        dailyReport: "每日盤點報表",
      },
      copyright: "Copyright ©2025 鴻森智能科技",
      logout: "登出",
      edit: "編輯",
      download: "下載",
      delete: "刪除",
      login: "登入",
      userId: "帳號",
      password: "密碼",
      loginError: "登入失敗，請重試。",
      login_id: "請輸入帳號",
      login_password: "請輸入密碼",
      mergeSheetBasicInfo: "合併單基本資訊",
      totalRecords: "單據數量",
      deleteSelected: "刪除勾選項目",
      addRecord: "新增盤點單",
      columns: {
        sn: "單號",
        name: "名稱",
        type: "類型",
        export: "匯出",
        delete: "刪除",
        creator: "建表人",
        createTime: "建表時間",
      },
      recordTypes: {
        inventory: "盤點單",
        consumption: "消耗單",
        review: "覆盤單",
      },
      searchFields: { name: "名稱", number: "單號" },
      searchButton: "搜尋",
      enterRecordName: "請輸入名稱...",
      enterRecordNumber: "請輸入單號...",
      selectAll: "全選",
      deselectAll: "取消全選",
      addSelected: "新增已選項目",
      noRecordsFound: "查無相關單據",
      searchPrompt: "請搜尋要新增的單據",
      recordNumber: "單號",
      name: "名稱",
      creator: "建表人",
      createTime: "建表時間",
      dailyReport: {
        title: "時間範圍",
        startDate: "開始日期",
        endDate: "結束日期",
        totalRecords: "總筆數",
        selectedRecords: "選取筆數",
        downloadExcel: "下載 Excel",
        downloadDailyReport: "日報表下載",
        downloadMonthlyReport: "月報表下載",
        serialNumber: "單號",
        name: "名稱",
        createDate: "建立日期",
        status: "狀態",
        actions: "操作",
        download: "下載",
        noData: "無資料",
        selectDate: "選擇日期",
        selectMonth: "選擇月份",
        cancel: "取消",
        confirmDownload: "確認下載",
      },
    },
  },
};
ae.use(sd)
  .use(Jp)
  .init({
    resources: ig,
    fallbackLng: "zh",
    interpolation: { escapeValue: !1 },
  });
Xc(document.getElementById("root")).render(
  m.jsx(z.StrictMode, { children: m.jsx(yh, {}) }),
);
