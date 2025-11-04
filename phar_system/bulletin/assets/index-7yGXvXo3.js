(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) s(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && s(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function s(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = r(l);
    fetch(l.href, i);
  }
})();
function nd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var $o = { exports: {} },
  Ps = {},
  Fo = { exports: {} },
  $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cn = Symbol.for("react.element"),
  sd = Symbol.for("react.portal"),
  ld = Symbol.for("react.fragment"),
  id = Symbol.for("react.strict_mode"),
  ad = Symbol.for("react.profiler"),
  od = Symbol.for("react.provider"),
  cd = Symbol.for("react.context"),
  ud = Symbol.for("react.forward_ref"),
  dd = Symbol.for("react.suspense"),
  fd = Symbol.for("react.memo"),
  md = Symbol.for("react.lazy"),
  Sa = Symbol.iterator;
function pd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Sa && e[Sa]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ao = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Uo = Object.assign,
  Bo = {};
function Pr(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = Bo),
    (this.updater = r || Ao);
}
Pr.prototype.isReactComponent = {};
Pr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Pr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ho() {}
Ho.prototype = Pr.prototype;
function Ti(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = Bo),
    (this.updater = r || Ao);
}
var zi = (Ti.prototype = new Ho());
zi.constructor = Ti;
Uo(zi, Pr.prototype);
zi.isPureReactComponent = !0;
var Ca = Array.isArray,
  Vo = Object.prototype.hasOwnProperty,
  Ii = { current: null },
  Qo = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wo(e, t, r) {
  var s,
    l = {},
    i = null,
    a = null;
  if (t != null)
    for (s in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Vo.call(t, s) && !Qo.hasOwnProperty(s) && (l[s] = t[s]);
  var o = arguments.length - 2;
  if (o === 1) l.children = r;
  else if (1 < o) {
    for (var u = Array(o), c = 0; c < o; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (s in ((o = e.defaultProps), o)) l[s] === void 0 && (l[s] = o[s]);
  return {
    $$typeof: Cn,
    type: e,
    key: i,
    ref: a,
    props: l,
    _owner: Ii.current,
  };
}
function gd(e, t) {
  return {
    $$typeof: Cn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Pi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Cn;
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
var Da = /\/+/g;
function Zs(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? hd("" + e.key)
    : t.toString(36);
}
function Xn(e, t, r, s, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Cn:
          case sd:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (l = l(a)),
      (e = s === "" ? "." + Zs(a, 0) : s),
      Ca(l)
        ? ((r = ""),
          e != null && (r = e.replace(Da, "$&/") + "/"),
          Xn(l, t, r, "", function (c) {
            return c;
          }))
        : l != null &&
          (Pi(l) &&
            (l = gd(
              l,
              r +
                (!l.key || (a && a.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Da, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((a = 0), (s = s === "" ? "." : s + ":"), Ca(e)))
    for (var o = 0; o < e.length; o++) {
      i = e[o];
      var u = s + Zs(i, o);
      a += Xn(i, t, r, u, l);
    }
  else if (((u = pd(e)), typeof u == "function"))
    for (e = u.call(e), o = 0; !(i = e.next()).done; )
      (i = i.value), (u = s + Zs(i, o++)), (a += Xn(i, t, r, u, l));
  else if (i === "object")
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
function Mn(e, t, r) {
  if (e == null) return e;
  var s = [],
    l = 0;
  return (
    Xn(e, s, "", "", function (i) {
      return t.call(r, i, l++);
    }),
    s
  );
}
function xd(e) {
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
var ye = { current: null },
  Zn = { transition: null },
  yd = {
    ReactCurrentDispatcher: ye,
    ReactCurrentBatchConfig: Zn,
    ReactCurrentOwner: Ii,
  };
function qo() {
  throw Error("act(...) is not supported in production builds of React.");
}
$.Children = {
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
    if (!Pi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
$.Component = Pr;
$.Fragment = ld;
$.Profiler = ad;
$.PureComponent = Ti;
$.StrictMode = id;
$.Suspense = dd;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yd;
$.act = qo;
$.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var s = Uo({}, e.props),
    l = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = Ii.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (u in t)
      Vo.call(t, u) &&
        !Qo.hasOwnProperty(u) &&
        (s[u] = t[u] === void 0 && o !== void 0 ? o[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) s.children = r;
  else if (1 < u) {
    o = Array(u);
    for (var c = 0; c < u; c++) o[c] = arguments[c + 2];
    s.children = o;
  }
  return { $$typeof: Cn, type: e.type, key: l, ref: i, props: s, _owner: a };
};
$.createContext = function (e) {
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
$.createElement = Wo;
$.createFactory = function (e) {
  var t = Wo.bind(null, e);
  return (t.type = e), t;
};
$.createRef = function () {
  return { current: null };
};
$.forwardRef = function (e) {
  return { $$typeof: ud, render: e };
};
$.isValidElement = Pi;
$.lazy = function (e) {
  return { $$typeof: md, _payload: { _status: -1, _result: e }, _init: xd };
};
$.memo = function (e, t) {
  return { $$typeof: fd, type: e, compare: t === void 0 ? null : t };
};
$.startTransition = function (e) {
  var t = Zn.transition;
  Zn.transition = {};
  try {
    e();
  } finally {
    Zn.transition = t;
  }
};
$.unstable_act = qo;
$.useCallback = function (e, t) {
  return ye.current.useCallback(e, t);
};
$.useContext = function (e) {
  return ye.current.useContext(e);
};
$.useDebugValue = function () {};
$.useDeferredValue = function (e) {
  return ye.current.useDeferredValue(e);
};
$.useEffect = function (e, t) {
  return ye.current.useEffect(e, t);
};
$.useId = function () {
  return ye.current.useId();
};
$.useImperativeHandle = function (e, t, r) {
  return ye.current.useImperativeHandle(e, t, r);
};
$.useInsertionEffect = function (e, t) {
  return ye.current.useInsertionEffect(e, t);
};
$.useLayoutEffect = function (e, t) {
  return ye.current.useLayoutEffect(e, t);
};
$.useMemo = function (e, t) {
  return ye.current.useMemo(e, t);
};
$.useReducer = function (e, t, r) {
  return ye.current.useReducer(e, t, r);
};
$.useRef = function (e) {
  return ye.current.useRef(e);
};
$.useState = function (e) {
  return ye.current.useState(e);
};
$.useSyncExternalStore = function (e, t, r) {
  return ye.current.useSyncExternalStore(e, t, r);
};
$.useTransition = function () {
  return ye.current.useTransition();
};
$.version = "18.3.1";
Fo.exports = $;
var N = Fo.exports;
const Te = nd(N);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vd = N,
  wd = Symbol.for("react.element"),
  jd = Symbol.for("react.fragment"),
  Nd = Object.prototype.hasOwnProperty,
  bd = vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  kd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Go(e, t, r) {
  var s,
    l = {},
    i = null,
    a = null;
  r !== void 0 && (i = "" + r),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (s in t) Nd.call(t, s) && !kd.hasOwnProperty(s) && (l[s] = t[s]);
  if (e && e.defaultProps)
    for (s in ((t = e.defaultProps), t)) l[s] === void 0 && (l[s] = t[s]);
  return {
    $$typeof: wd,
    type: e,
    key: i,
    ref: a,
    props: l,
    _owner: bd.current,
  };
}
Ps.Fragment = jd;
Ps.jsx = Go;
Ps.jsxs = Go;
$o.exports = Ps;
var n = $o.exports,
  Yo = { exports: {} },
  Le = {},
  Ko = { exports: {} },
  Xo = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(I, R) {
    var k = I.length;
    I.push(R);
    e: for (; 0 < k; ) {
      var F = (k - 1) >>> 1,
        j = I[F];
      if (0 < l(j, R)) (I[F] = R), (I[k] = j), (k = F);
      else break e;
    }
  }
  function r(I) {
    return I.length === 0 ? null : I[0];
  }
  function s(I) {
    if (I.length === 0) return null;
    var R = I[0],
      k = I.pop();
    if (k !== R) {
      I[0] = k;
      e: for (var F = 0, j = I.length, A = j >>> 1; F < A; ) {
        var ee = 2 * (F + 1) - 1,
          _e = I[ee],
          vt = ee + 1,
          Pn = I[vt];
        if (0 > l(_e, k))
          vt < j && 0 > l(Pn, _e)
            ? ((I[F] = Pn), (I[vt] = k), (F = vt))
            : ((I[F] = _e), (I[ee] = k), (F = ee));
        else if (vt < j && 0 > l(Pn, k)) (I[F] = Pn), (I[vt] = k), (F = vt);
        else break e;
      }
    }
    return R;
  }
  function l(I, R) {
    var k = I.sortIndex - R.sortIndex;
    return k !== 0 ? k : I.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      o = a.now();
    e.unstable_now = function () {
      return a.now() - o;
    };
  }
  var u = [],
    c = [],
    d = 1,
    f = null,
    g = 3,
    y = !1,
    v = !1,
    x = !1,
    z = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(I) {
    for (var R = r(c); R !== null; ) {
      if (R.callback === null) s(c);
      else if (R.startTime <= I)
        s(c), (R.sortIndex = R.expirationTime), t(u, R);
      else break;
      R = r(c);
    }
  }
  function w(I) {
    if (((x = !1), p(I), !v))
      if (r(u) !== null) (v = !0), Ve(D);
      else {
        var R = r(c);
        R !== null && lt(w, R.startTime - I);
      }
  }
  function D(I, R) {
    (v = !1), x && ((x = !1), h(C), (C = -1)), (y = !0);
    var k = g;
    try {
      for (
        p(R), f = r(u);
        f !== null && (!(f.expirationTime > R) || (I && !L()));

      ) {
        var F = f.callback;
        if (typeof F == "function") {
          (f.callback = null), (g = f.priorityLevel);
          var j = F(f.expirationTime <= R);
          (R = e.unstable_now()),
            typeof j == "function" ? (f.callback = j) : f === r(u) && s(u),
            p(R);
        } else s(u);
        f = r(u);
      }
      if (f !== null) var A = !0;
      else {
        var ee = r(c);
        ee !== null && lt(w, ee.startTime - R), (A = !1);
      }
      return A;
    } finally {
      (f = null), (g = k), (y = !1);
    }
  }
  var E = !1,
    T = null,
    C = -1,
    b = 5,
    S = -1;
  function L() {
    return !(e.unstable_now() - S < b);
  }
  function O() {
    if (T !== null) {
      var I = e.unstable_now();
      S = I;
      var R = !0;
      try {
        R = T(!0, I);
      } finally {
        R ? V() : ((E = !1), (T = null));
      }
    } else E = !1;
  }
  var V;
  if (typeof m == "function")
    V = function () {
      m(O);
    };
  else if (typeof MessageChannel < "u") {
    var we = new MessageChannel(),
      He = we.port2;
    (we.port1.onmessage = O),
      (V = function () {
        He.postMessage(null);
      });
  } else
    V = function () {
      z(O, 0);
    };
  function Ve(I) {
    (T = I), E || ((E = !0), V());
  }
  function lt(I, R) {
    C = z(function () {
      I(e.unstable_now());
    }, R);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (I) {
      I.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || y || ((v = !0), Ve(D));
    }),
    (e.unstable_forceFrameRate = function (I) {
      0 > I || 125 < I
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (b = 0 < I ? Math.floor(1e3 / I) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return g;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(u);
    }),
    (e.unstable_next = function (I) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = g;
      }
      var k = g;
      g = R;
      try {
        return I();
      } finally {
        g = k;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (I, R) {
      switch (I) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          I = 3;
      }
      var k = g;
      g = I;
      try {
        return R();
      } finally {
        g = k;
      }
    }),
    (e.unstable_scheduleCallback = function (I, R, k) {
      var F = e.unstable_now();
      switch (
        (typeof k == "object" && k !== null
          ? ((k = k.delay), (k = typeof k == "number" && 0 < k ? F + k : F))
          : (k = F),
        I)
      ) {
        case 1:
          var j = -1;
          break;
        case 2:
          j = 250;
          break;
        case 5:
          j = 1073741823;
          break;
        case 4:
          j = 1e4;
          break;
        default:
          j = 5e3;
      }
      return (
        (j = k + j),
        (I = {
          id: d++,
          callback: R,
          priorityLevel: I,
          startTime: k,
          expirationTime: j,
          sortIndex: -1,
        }),
        k > F
          ? ((I.sortIndex = k),
            t(c, I),
            r(u) === null &&
              I === r(c) &&
              (x ? (h(C), (C = -1)) : (x = !0), lt(w, k - F)))
          : ((I.sortIndex = j), t(u, I), v || y || ((v = !0), Ve(D))),
        I
      );
    }),
    (e.unstable_shouldYield = L),
    (e.unstable_wrapCallback = function (I) {
      var R = g;
      return function () {
        var k = g;
        g = R;
        try {
          return I.apply(this, arguments);
        } finally {
          g = k;
        }
      };
    });
})(Xo);
Ko.exports = Xo;
var Sd = Ko.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cd = N,
  Pe = Sd;
function _(e) {
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
var Zo = new Set(),
  ln = {};
function rr(e, t) {
  Sr(e, t), Sr(e + "Capture", t);
}
function Sr(e, t) {
  for (ln[e] = t, e = 0; e < t.length; e++) Zo.add(t[e]);
}
var ft = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  _l = Object.prototype.hasOwnProperty,
  Dd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  _a = {},
  Ea = {};
function _d(e) {
  return _l.call(Ea, e)
    ? !0
    : _l.call(_a, e)
    ? !1
    : Dd.test(e)
    ? (Ea[e] = !0)
    : ((_a[e] = !0), !1);
}
function Ed(e, t, r, s) {
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
function Td(e, t, r, s) {
  if (t === null || typeof t > "u" || Ed(e, t, r, s)) return !0;
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
function ve(e, t, r, s, l, i, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = s),
    (this.attributeNamespace = l),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var de = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    de[e] = new ve(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  de[t] = new ve(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  de[e] = new ve(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  de[e] = new ve(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    de[e] = new ve(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  de[e] = new ve(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  de[e] = new ve(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  de[e] = new ve(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  de[e] = new ve(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Mi = /[\-:]([a-z])/g;
function Li(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Mi, Li);
    de[t] = new ve(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Mi, Li);
    de[t] = new ve(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Mi, Li);
  de[t] = new ve(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  de[e] = new ve(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
de.xlinkHref = new ve(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  de[e] = new ve(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ri(e, t, r, s) {
  var l = de.hasOwnProperty(t) ? de[t] : null;
  (l !== null
    ? l.type !== 0
    : s ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Td(t, r, l, s) && (r = null),
    s || l === null
      ? _d(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
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
var yt = Cd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ln = Symbol.for("react.element"),
  lr = Symbol.for("react.portal"),
  ir = Symbol.for("react.fragment"),
  Oi = Symbol.for("react.strict_mode"),
  El = Symbol.for("react.profiler"),
  Jo = Symbol.for("react.provider"),
  ec = Symbol.for("react.context"),
  $i = Symbol.for("react.forward_ref"),
  Tl = Symbol.for("react.suspense"),
  zl = Symbol.for("react.suspense_list"),
  Fi = Symbol.for("react.memo"),
  jt = Symbol.for("react.lazy"),
  tc = Symbol.for("react.offscreen"),
  Ta = Symbol.iterator;
function Or(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ta && e[Ta]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var J = Object.assign,
  Js;
function Qr(e) {
  if (Js === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      Js = (t && t[1]) || "";
    }
  return (
    `
` +
    Js +
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
        } catch (c) {
          var s = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          s = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        s = c;
      }
      e();
    }
  } catch (c) {
    if (c && s && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          i = s.stack.split(`
`),
          a = l.length - 1,
          o = i.length - 1;
        1 <= a && 0 <= o && l[a] !== i[o];

      )
        o--;
      for (; 1 <= a && 0 <= o; a--, o--)
        if (l[a] !== i[o]) {
          if (a !== 1 || o !== 1)
            do
              if ((a--, o--, 0 > o || l[a] !== i[o])) {
                var u =
                  `
` + l[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= a && 0 <= o);
          break;
        }
    }
  } finally {
    (el = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : "") ? Qr(e) : "";
}
function zd(e) {
  switch (e.tag) {
    case 5:
      return Qr(e.type);
    case 16:
      return Qr("Lazy");
    case 13:
      return Qr("Suspense");
    case 19:
      return Qr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = tl(e.type, !1)), e;
    case 11:
      return (e = tl(e.type.render, !1)), e;
    case 1:
      return (e = tl(e.type, !0)), e;
    default:
      return "";
  }
}
function Il(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ir:
      return "Fragment";
    case lr:
      return "Portal";
    case El:
      return "Profiler";
    case Oi:
      return "StrictMode";
    case Tl:
      return "Suspense";
    case zl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ec:
        return (e.displayName || "Context") + ".Consumer";
      case Jo:
        return (e._context.displayName || "Context") + ".Provider";
      case $i:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Fi:
        return (
          (t = e.displayName || null), t !== null ? t : Il(e.type) || "Memo"
        );
      case jt:
        (t = e._payload), (e = e._init);
        try {
          return Il(e(t));
        } catch {}
    }
  return null;
}
function Id(e) {
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
      return Il(t);
    case 8:
      return t === Oi ? "StrictMode" : "Mode";
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
function Lt(e) {
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
function rc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Pd(e) {
  var t = rc(e) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    s = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof r < "u" &&
    typeof r.get == "function" &&
    typeof r.set == "function"
  ) {
    var l = r.get,
      i = r.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (a) {
          (s = "" + a), i.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
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
function Rn(e) {
  e._valueTracker || (e._valueTracker = Pd(e));
}
function nc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    s = "";
  return (
    e && (s = rc(e) ? (e.checked ? "true" : "false") : e.value),
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
function Pl(e, t) {
  var r = t.checked;
  return J({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  });
}
function za(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue,
    s = t.checked != null ? t.checked : t.defaultChecked;
  (r = Lt(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: s,
      initialValue: r,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function sc(e, t) {
  (t = t.checked), t != null && Ri(e, "checked", t, !1);
}
function Ml(e, t) {
  sc(e, t);
  var r = Lt(t.value),
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
    : t.hasOwnProperty("defaultValue") && Ll(e, t.type, Lt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ia(e, t, r) {
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
  (t !== "number" || cs(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var Wr = Array.isArray;
function xr(e, t, r, s) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < r.length; l++) t["$" + r[l]] = !0;
    for (r = 0; r < e.length; r++)
      (l = t.hasOwnProperty("$" + e[r].value)),
        e[r].selected !== l && (e[r].selected = l),
        l && s && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + Lt(r), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === r) {
        (e[l].selected = !0), s && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Rl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
  return J({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Pa(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(_(92));
      if (Wr(r)) {
        if (1 < r.length) throw Error(_(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), (r = t);
  }
  e._wrapperState = { initialValue: Lt(r) };
}
function lc(e, t) {
  var r = Lt(t.value),
    s = Lt(t.defaultValue);
  r != null &&
    ((r = "" + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    s != null && (e.defaultValue = "" + s);
}
function Ma(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ic(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ol(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ic(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var On,
  ac = (function (e) {
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
        On = On || document.createElement("div"),
          On.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = On.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function an(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Yr = {
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
  Md = ["Webkit", "ms", "Moz", "O"];
Object.keys(Yr).forEach(function (e) {
  Md.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Yr[t] = Yr[e]);
  });
});
function oc(e, t, r) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : r || typeof t != "number" || t === 0 || (Yr.hasOwnProperty(e) && Yr[e])
    ? ("" + t).trim()
    : t + "px";
}
function cc(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var s = r.indexOf("--") === 0,
        l = oc(r, t[r], s);
      r === "float" && (r = "cssFloat"), s ? e.setProperty(r, l) : (e[r] = l);
    }
}
var Ld = J(
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
    if (Ld[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(_(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(_(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(_(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(_(62));
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
var Al = null;
function Ai(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ul = null,
  yr = null,
  vr = null;
function La(e) {
  if ((e = En(e))) {
    if (typeof Ul != "function") throw Error(_(280));
    var t = e.stateNode;
    t && ((t = $s(t)), Ul(e.stateNode, e.type, t));
  }
}
function uc(e) {
  yr ? (vr ? vr.push(e) : (vr = [e])) : (yr = e);
}
function dc() {
  if (yr) {
    var e = yr,
      t = vr;
    if (((vr = yr = null), La(e), t)) for (e = 0; e < t.length; e++) La(t[e]);
  }
}
function fc(e, t) {
  return e(t);
}
function mc() {}
var rl = !1;
function pc(e, t, r) {
  if (rl) return e(t, r);
  rl = !0;
  try {
    return fc(e, t, r);
  } finally {
    (rl = !1), (yr !== null || vr !== null) && (mc(), dc());
  }
}
function on(e, t) {
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
  if (r && typeof r != "function") throw Error(_(231, t, typeof r));
  return r;
}
var Bl = !1;
if (ft)
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
function Rd(e, t, r, s, l, i, a, o, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, c);
  } catch (d) {
    this.onError(d);
  }
}
var Kr = !1,
  us = null,
  ds = !1,
  Hl = null,
  Od = {
    onError: function (e) {
      (Kr = !0), (us = e);
    },
  };
function $d(e, t, r, s, l, i, a, o, u) {
  (Kr = !1), (us = null), Rd.apply(Od, arguments);
}
function Fd(e, t, r, s, l, i, a, o, u) {
  if (($d.apply(this, arguments), Kr)) {
    if (Kr) {
      var c = us;
      (Kr = !1), (us = null);
    } else throw Error(_(198));
    ds || ((ds = !0), (Hl = c));
  }
}
function nr(e) {
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
function gc(e) {
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
function Ra(e) {
  if (nr(e) !== e) throw Error(_(188));
}
function Ad(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = nr(e)), t === null)) throw Error(_(188));
    return t !== e ? null : e;
  }
  for (var r = e, s = t; ; ) {
    var l = r.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((s = l.return), s !== null)) {
        r = s;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === r) return Ra(l), e;
        if (i === s) return Ra(l), t;
        i = i.sibling;
      }
      throw Error(_(188));
    }
    if (r.return !== s.return) (r = l), (s = i);
    else {
      for (var a = !1, o = l.child; o; ) {
        if (o === r) {
          (a = !0), (r = l), (s = i);
          break;
        }
        if (o === s) {
          (a = !0), (s = l), (r = i);
          break;
        }
        o = o.sibling;
      }
      if (!a) {
        for (o = i.child; o; ) {
          if (o === r) {
            (a = !0), (r = i), (s = l);
            break;
          }
          if (o === s) {
            (a = !0), (s = i), (r = l);
            break;
          }
          o = o.sibling;
        }
        if (!a) throw Error(_(189));
      }
    }
    if (r.alternate !== s) throw Error(_(190));
  }
  if (r.tag !== 3) throw Error(_(188));
  return r.stateNode.current === r ? e : t;
}
function hc(e) {
  return (e = Ad(e)), e !== null ? xc(e) : null;
}
function xc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = xc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var yc = Pe.unstable_scheduleCallback,
  Oa = Pe.unstable_cancelCallback,
  Ud = Pe.unstable_shouldYield,
  Bd = Pe.unstable_requestPaint,
  ne = Pe.unstable_now,
  Hd = Pe.unstable_getCurrentPriorityLevel,
  Ui = Pe.unstable_ImmediatePriority,
  vc = Pe.unstable_UserBlockingPriority,
  fs = Pe.unstable_NormalPriority,
  Vd = Pe.unstable_LowPriority,
  wc = Pe.unstable_IdlePriority,
  Ms = null,
  nt = null;
function Qd(e) {
  if (nt && typeof nt.onCommitFiberRoot == "function")
    try {
      nt.onCommitFiberRoot(Ms, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ye = Math.clz32 ? Math.clz32 : Gd,
  Wd = Math.log,
  qd = Math.LN2;
function Gd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Wd(e) / qd) | 0)) | 0;
}
var $n = 64,
  Fn = 4194304;
function qr(e) {
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
    i = e.pingedLanes,
    a = r & 268435455;
  if (a !== 0) {
    var o = a & ~l;
    o !== 0 ? (s = qr(o)) : ((i &= a), i !== 0 && (s = qr(i)));
  } else (a = r & ~l), a !== 0 ? (s = qr(a)) : i !== 0 && (s = qr(i));
  if (s === 0) return 0;
  if (
    t !== 0 &&
    t !== s &&
    !(t & l) &&
    ((l = s & -s), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((s & 4 && (s |= r & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= s; 0 < t; )
      (r = 31 - Ye(t)), (l = 1 << r), (s |= e[r]), (t &= ~l);
  return s;
}
function Yd(e, t) {
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
function Kd(e, t) {
  for (
    var r = e.suspendedLanes,
      s = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - Ye(i),
      o = 1 << a,
      u = l[a];
    u === -1
      ? (!(o & r) || o & s) && (l[a] = Yd(o, t))
      : u <= t && (e.expiredLanes |= o),
      (i &= ~o);
  }
}
function Vl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function jc() {
  var e = $n;
  return ($n <<= 1), !($n & 4194240) && ($n = 64), e;
}
function nl(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function Dn(e, t, r) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ye(t)),
    (e[t] = r);
}
function Xd(e, t) {
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
    var l = 31 - Ye(r),
      i = 1 << l;
    (t[l] = 0), (s[l] = -1), (e[l] = -1), (r &= ~i);
  }
}
function Bi(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r; ) {
    var s = 31 - Ye(r),
      l = 1 << s;
    (l & t) | (e[s] & t) && (e[s] |= t), (r &= ~l);
  }
}
var B = 0;
function Nc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var bc,
  Hi,
  kc,
  Sc,
  Cc,
  Ql = !1,
  An = [],
  Dt = null,
  _t = null,
  Et = null,
  cn = new Map(),
  un = new Map(),
  bt = [],
  Zd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function $a(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Dt = null;
      break;
    case "dragenter":
    case "dragleave":
      _t = null;
      break;
    case "mouseover":
    case "mouseout":
      Et = null;
      break;
    case "pointerover":
    case "pointerout":
      cn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      un.delete(t.pointerId);
  }
}
function Fr(e, t, r, s, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: s,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = En(t)), t !== null && Hi(t)),
      e)
    : ((e.eventSystemFlags |= s),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Jd(e, t, r, s, l) {
  switch (t) {
    case "focusin":
      return (Dt = Fr(Dt, e, t, r, s, l)), !0;
    case "dragenter":
      return (_t = Fr(_t, e, t, r, s, l)), !0;
    case "mouseover":
      return (Et = Fr(Et, e, t, r, s, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return cn.set(i, Fr(cn.get(i) || null, e, t, r, s, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), un.set(i, Fr(un.get(i) || null, e, t, r, s, l)), !0
      );
  }
  return !1;
}
function Dc(e) {
  var t = Ht(e.target);
  if (t !== null) {
    var r = nr(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = gc(r)), t !== null)) {
          (e.blockedOn = t),
            Cc(e.priority, function () {
              kc(r);
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
function Jn(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Wl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var s = new r.constructor(r.type, r);
      (Al = s), r.target.dispatchEvent(s), (Al = null);
    } else return (t = En(r)), t !== null && Hi(t), (e.blockedOn = r), !1;
    t.shift();
  }
  return !0;
}
function Fa(e, t, r) {
  Jn(e) && r.delete(t);
}
function ef() {
  (Ql = !1),
    Dt !== null && Jn(Dt) && (Dt = null),
    _t !== null && Jn(_t) && (_t = null),
    Et !== null && Jn(Et) && (Et = null),
    cn.forEach(Fa),
    un.forEach(Fa);
}
function Ar(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ql ||
      ((Ql = !0),
      Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority, ef)));
}
function dn(e) {
  function t(l) {
    return Ar(l, e);
  }
  if (0 < An.length) {
    Ar(An[0], e);
    for (var r = 1; r < An.length; r++) {
      var s = An[r];
      s.blockedOn === e && (s.blockedOn = null);
    }
  }
  for (
    Dt !== null && Ar(Dt, e),
      _t !== null && Ar(_t, e),
      Et !== null && Ar(Et, e),
      cn.forEach(t),
      un.forEach(t),
      r = 0;
    r < bt.length;
    r++
  )
    (s = bt[r]), s.blockedOn === e && (s.blockedOn = null);
  for (; 0 < bt.length && ((r = bt[0]), r.blockedOn === null); )
    Dc(r), r.blockedOn === null && bt.shift();
}
var wr = yt.ReactCurrentBatchConfig,
  ps = !0;
function tf(e, t, r, s) {
  var l = B,
    i = wr.transition;
  wr.transition = null;
  try {
    (B = 1), Vi(e, t, r, s);
  } finally {
    (B = l), (wr.transition = i);
  }
}
function rf(e, t, r, s) {
  var l = B,
    i = wr.transition;
  wr.transition = null;
  try {
    (B = 4), Vi(e, t, r, s);
  } finally {
    (B = l), (wr.transition = i);
  }
}
function Vi(e, t, r, s) {
  if (ps) {
    var l = Wl(e, t, r, s);
    if (l === null) ml(e, t, s, gs, r), $a(e, s);
    else if (Jd(l, e, t, r, s)) s.stopPropagation();
    else if (($a(e, s), t & 4 && -1 < Zd.indexOf(e))) {
      for (; l !== null; ) {
        var i = En(l);
        if (
          (i !== null && bc(i),
          (i = Wl(e, t, r, s)),
          i === null && ml(e, t, s, gs, r),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && s.stopPropagation();
    } else ml(e, t, s, null, r);
  }
}
var gs = null;
function Wl(e, t, r, s) {
  if (((gs = null), (e = Ai(s)), (e = Ht(e)), e !== null))
    if (((t = nr(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = gc(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (gs = e), null;
}
function _c(e) {
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
      switch (Hd()) {
        case Ui:
          return 1;
        case vc:
          return 4;
        case fs:
        case Vd:
          return 16;
        case wc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var St = null,
  Qi = null,
  es = null;
function Ec() {
  if (es) return es;
  var e,
    t = Qi,
    r = t.length,
    s,
    l = "value" in St ? St.value : St.textContent,
    i = l.length;
  for (e = 0; e < r && t[e] === l[e]; e++);
  var a = r - e;
  for (s = 1; s <= a && t[r - s] === l[i - s]; s++);
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
function Aa() {
  return !1;
}
function Re(e) {
  function t(r, s, l, i, a) {
    (this._reactName = r),
      (this._targetInst = l),
      (this.type = s),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null);
    for (var o in e)
      e.hasOwnProperty(o) && ((r = e[o]), (this[o] = r ? r(i) : i[o]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Un
        : Aa),
      (this.isPropagationStopped = Aa),
      this
    );
  }
  return (
    J(t.prototype, {
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
  Wi = Re(Mr),
  _n = J({}, Mr, { view: 0, detail: 0 }),
  nf = Re(_n),
  sl,
  ll,
  Ur,
  Ls = J({}, _n, {
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
    getModifierState: qi,
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
        : (e !== Ur &&
            (Ur && e.type === "mousemove"
              ? ((sl = e.screenX - Ur.screenX), (ll = e.screenY - Ur.screenY))
              : (ll = sl = 0),
            (Ur = e)),
          sl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ll;
    },
  }),
  Ua = Re(Ls),
  sf = J({}, Ls, { dataTransfer: 0 }),
  lf = Re(sf),
  af = J({}, _n, { relatedTarget: 0 }),
  il = Re(af),
  of = J({}, Mr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  cf = Re(of),
  uf = J({}, Mr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  df = Re(uf),
  ff = J({}, Mr, { data: 0 }),
  Ba = Re(ff),
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
  pf = {
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
  gf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function hf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = gf[e]) ? !!t[e] : !1;
}
function qi() {
  return hf;
}
var xf = J({}, _n, {
    key: function (e) {
      if (e.key) {
        var t = mf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ts(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? pf[e.keyCode] || "Unidentified"
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
    getModifierState: qi,
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
  yf = Re(xf),
  vf = J({}, Ls, {
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
  Ha = Re(vf),
  wf = J({}, _n, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: qi,
  }),
  jf = Re(wf),
  Nf = J({}, Mr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  bf = Re(Nf),
  kf = J({}, Ls, {
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
  Sf = Re(kf),
  Cf = [9, 13, 27, 32],
  Gi = ft && "CompositionEvent" in window,
  Xr = null;
ft && "documentMode" in document && (Xr = document.documentMode);
var Df = ft && "TextEvent" in window && !Xr,
  Tc = ft && (!Gi || (Xr && 8 < Xr && 11 >= Xr)),
  Va = " ",
  Qa = !1;
function zc(e, t) {
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
function Ic(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var ar = !1;
function _f(e, t) {
  switch (e) {
    case "compositionend":
      return Ic(t);
    case "keypress":
      return t.which !== 32 ? null : ((Qa = !0), Va);
    case "textInput":
      return (e = t.data), e === Va && Qa ? null : e;
    default:
      return null;
  }
}
function Ef(e, t) {
  if (ar)
    return e === "compositionend" || (!Gi && zc(e, t))
      ? ((e = Ec()), (es = Qi = St = null), (ar = !1), e)
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
      return Tc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Tf = {
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
function Wa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Tf[e.type] : t === "textarea";
}
function Pc(e, t, r, s) {
  uc(s),
    (t = hs(t, "onChange")),
    0 < t.length &&
      ((r = new Wi("onChange", "change", null, r, s)),
      e.push({ event: r, listeners: t }));
}
var Zr = null,
  fn = null;
function zf(e) {
  Vc(e, 0);
}
function Rs(e) {
  var t = ur(e);
  if (nc(t)) return e;
}
function If(e, t) {
  if (e === "change") return t;
}
var Mc = !1;
if (ft) {
  var al;
  if (ft) {
    var ol = "oninput" in document;
    if (!ol) {
      var qa = document.createElement("div");
      qa.setAttribute("oninput", "return;"),
        (ol = typeof qa.oninput == "function");
    }
    al = ol;
  } else al = !1;
  Mc = al && (!document.documentMode || 9 < document.documentMode);
}
function Ga() {
  Zr && (Zr.detachEvent("onpropertychange", Lc), (fn = Zr = null));
}
function Lc(e) {
  if (e.propertyName === "value" && Rs(fn)) {
    var t = [];
    Pc(t, fn, e, Ai(e)), pc(zf, t);
  }
}
function Pf(e, t, r) {
  e === "focusin"
    ? (Ga(), (Zr = t), (fn = r), Zr.attachEvent("onpropertychange", Lc))
    : e === "focusout" && Ga();
}
function Mf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Rs(fn);
}
function Lf(e, t) {
  if (e === "click") return Rs(t);
}
function Rf(e, t) {
  if (e === "input" || e === "change") return Rs(t);
}
function Of(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Xe = typeof Object.is == "function" ? Object.is : Of;
function mn(e, t) {
  if (Xe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e),
    s = Object.keys(t);
  if (r.length !== s.length) return !1;
  for (s = 0; s < r.length; s++) {
    var l = r[s];
    if (!_l.call(t, l) || !Xe(e[l], t[l])) return !1;
  }
  return !0;
}
function Ya(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ka(e, t) {
  var r = Ya(e);
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
    r = Ya(r);
  }
}
function Rc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Rc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Oc() {
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
function Yi(e) {
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
function $f(e) {
  var t = Oc(),
    r = e.focusedElem,
    s = e.selectionRange;
  if (
    t !== r &&
    r &&
    r.ownerDocument &&
    Rc(r.ownerDocument.documentElement, r)
  ) {
    if (s !== null && Yi(r)) {
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
          i = Math.min(s.start, l);
        (s = s.end === void 0 ? i : Math.min(s.end, l)),
          !e.extend && i > s && ((l = s), (s = i), (i = l)),
          (l = Ka(r, i));
        var a = Ka(r, s);
        l &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > s
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
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
var Ff = ft && "documentMode" in document && 11 >= document.documentMode,
  or = null,
  ql = null,
  Jr = null,
  Gl = !1;
function Xa(e, t, r) {
  var s = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  Gl ||
    or == null ||
    or !== cs(s) ||
    ((s = or),
    "selectionStart" in s && Yi(s)
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
    (Jr && mn(Jr, s)) ||
      ((Jr = s),
      (s = hs(ql, "onSelect")),
      0 < s.length &&
        ((t = new Wi("onSelect", "select", null, t, r)),
        e.push({ event: t, listeners: s }),
        (t.target = or))));
}
function Bn(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r["Webkit" + e] = "webkit" + t),
    (r["Moz" + e] = "moz" + t),
    r
  );
}
var cr = {
    animationend: Bn("Animation", "AnimationEnd"),
    animationiteration: Bn("Animation", "AnimationIteration"),
    animationstart: Bn("Animation", "AnimationStart"),
    transitionend: Bn("Transition", "TransitionEnd"),
  },
  cl = {},
  $c = {};
ft &&
  (($c = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete cr.animationend.animation,
    delete cr.animationiteration.animation,
    delete cr.animationstart.animation),
  "TransitionEvent" in window || delete cr.transitionend.transition);
function Os(e) {
  if (cl[e]) return cl[e];
  if (!cr[e]) return e;
  var t = cr[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in $c) return (cl[e] = t[r]);
  return e;
}
var Fc = Os("animationend"),
  Ac = Os("animationiteration"),
  Uc = Os("animationstart"),
  Bc = Os("transitionend"),
  Hc = new Map(),
  Za =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function $t(e, t) {
  Hc.set(e, t), rr(t, [e]);
}
for (var ul = 0; ul < Za.length; ul++) {
  var dl = Za[ul],
    Af = dl.toLowerCase(),
    Uf = dl[0].toUpperCase() + dl.slice(1);
  $t(Af, "on" + Uf);
}
$t(Fc, "onAnimationEnd");
$t(Ac, "onAnimationIteration");
$t(Uc, "onAnimationStart");
$t("dblclick", "onDoubleClick");
$t("focusin", "onFocus");
$t("focusout", "onBlur");
$t(Bc, "onTransitionEnd");
Sr("onMouseEnter", ["mouseout", "mouseover"]);
Sr("onMouseLeave", ["mouseout", "mouseover"]);
Sr("onPointerEnter", ["pointerout", "pointerover"]);
Sr("onPointerLeave", ["pointerout", "pointerover"]);
rr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
rr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
rr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
rr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
rr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
rr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Gr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Bf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Gr));
function Ja(e, t, r) {
  var s = e.type || "unknown-event";
  (e.currentTarget = r), Fd(s, t, void 0, e), (e.currentTarget = null);
}
function Vc(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var s = e[r],
      l = s.event;
    s = s.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = s.length - 1; 0 <= a; a--) {
          var o = s[a],
            u = o.instance,
            c = o.currentTarget;
          if (((o = o.listener), u !== i && l.isPropagationStopped())) break e;
          Ja(l, o, c), (i = u);
        }
      else
        for (a = 0; a < s.length; a++) {
          if (
            ((o = s[a]),
            (u = o.instance),
            (c = o.currentTarget),
            (o = o.listener),
            u !== i && l.isPropagationStopped())
          )
            break e;
          Ja(l, o, c), (i = u);
        }
    }
  }
  if (ds) throw ((e = Hl), (ds = !1), (Hl = null), e);
}
function W(e, t) {
  var r = t[Jl];
  r === void 0 && (r = t[Jl] = new Set());
  var s = e + "__bubble";
  r.has(s) || (Qc(t, e, 2, !1), r.add(s));
}
function fl(e, t, r) {
  var s = 0;
  t && (s |= 4), Qc(r, e, s, t);
}
var Hn = "_reactListening" + Math.random().toString(36).slice(2);
function pn(e) {
  if (!e[Hn]) {
    (e[Hn] = !0),
      Zo.forEach(function (r) {
        r !== "selectionchange" && (Bf.has(r) || fl(r, !1, e), fl(r, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Hn] || ((t[Hn] = !0), fl("selectionchange", !1, t));
  }
}
function Qc(e, t, r, s) {
  switch (_c(t)) {
    case 1:
      var l = tf;
      break;
    case 4:
      l = rf;
      break;
    default:
      l = Vi;
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
function ml(e, t, r, s, l) {
  var i = s;
  if (!(t & 1) && !(t & 2) && s !== null)
    e: for (;;) {
      if (s === null) return;
      var a = s.tag;
      if (a === 3 || a === 4) {
        var o = s.stateNode.containerInfo;
        if (o === l || (o.nodeType === 8 && o.parentNode === l)) break;
        if (a === 4)
          for (a = s.return; a !== null; ) {
            var u = a.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = a.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            a = a.return;
          }
        for (; o !== null; ) {
          if (((a = Ht(o)), a === null)) return;
          if (((u = a.tag), u === 5 || u === 6)) {
            s = i = a;
            continue e;
          }
          o = o.parentNode;
        }
      }
      s = s.return;
    }
  pc(function () {
    var c = i,
      d = Ai(r),
      f = [];
    e: {
      var g = Hc.get(e);
      if (g !== void 0) {
        var y = Wi,
          v = e;
        switch (e) {
          case "keypress":
            if (ts(r) === 0) break e;
          case "keydown":
          case "keyup":
            y = yf;
            break;
          case "focusin":
            (v = "focus"), (y = il);
            break;
          case "focusout":
            (v = "blur"), (y = il);
            break;
          case "beforeblur":
          case "afterblur":
            y = il;
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
            y = Ua;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = lf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = jf;
            break;
          case Fc:
          case Ac:
          case Uc:
            y = cf;
            break;
          case Bc:
            y = bf;
            break;
          case "scroll":
            y = nf;
            break;
          case "wheel":
            y = Sf;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = df;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Ha;
        }
        var x = (t & 4) !== 0,
          z = !x && e === "scroll",
          h = x ? (g !== null ? g + "Capture" : null) : g;
        x = [];
        for (var m = c, p; m !== null; ) {
          p = m;
          var w = p.stateNode;
          if (
            (p.tag === 5 &&
              w !== null &&
              ((p = w),
              h !== null && ((w = on(m, h)), w != null && x.push(gn(m, w, p)))),
            z)
          )
            break;
          m = m.return;
        }
        0 < x.length &&
          ((g = new y(g, v, null, r, d)), f.push({ event: g, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((g = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          g &&
            r !== Al &&
            (v = r.relatedTarget || r.fromElement) &&
            (Ht(v) || v[mt]))
        )
          break e;
        if (
          (y || g) &&
          ((g =
            d.window === d
              ? d
              : (g = d.ownerDocument)
              ? g.defaultView || g.parentWindow
              : window),
          y
            ? ((v = r.relatedTarget || r.toElement),
              (y = c),
              (v = v ? Ht(v) : null),
              v !== null &&
                ((z = nr(v)), v !== z || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((y = null), (v = c)),
          y !== v)
        ) {
          if (
            ((x = Ua),
            (w = "onMouseLeave"),
            (h = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = Ha),
              (w = "onPointerLeave"),
              (h = "onPointerEnter"),
              (m = "pointer")),
            (z = y == null ? g : ur(y)),
            (p = v == null ? g : ur(v)),
            (g = new x(w, m + "leave", y, r, d)),
            (g.target = z),
            (g.relatedTarget = p),
            (w = null),
            Ht(d) === c &&
              ((x = new x(h, m + "enter", v, r, d)),
              (x.target = p),
              (x.relatedTarget = z),
              (w = x)),
            (z = w),
            y && v)
          )
            t: {
              for (x = y, h = v, m = 0, p = x; p; p = sr(p)) m++;
              for (p = 0, w = h; w; w = sr(w)) p++;
              for (; 0 < m - p; ) (x = sr(x)), m--;
              for (; 0 < p - m; ) (h = sr(h)), p--;
              for (; m--; ) {
                if (x === h || (h !== null && x === h.alternate)) break t;
                (x = sr(x)), (h = sr(h));
              }
              x = null;
            }
          else x = null;
          y !== null && eo(f, g, y, x, !1),
            v !== null && z !== null && eo(f, z, v, x, !0);
        }
      }
      e: {
        if (
          ((g = c ? ur(c) : window),
          (y = g.nodeName && g.nodeName.toLowerCase()),
          y === "select" || (y === "input" && g.type === "file"))
        )
          var D = If;
        else if (Wa(g))
          if (Mc) D = Rf;
          else {
            D = Mf;
            var E = Pf;
          }
        else
          (y = g.nodeName) &&
            y.toLowerCase() === "input" &&
            (g.type === "checkbox" || g.type === "radio") &&
            (D = Lf);
        if (D && (D = D(e, c))) {
          Pc(f, D, r, d);
          break e;
        }
        E && E(e, g, c),
          e === "focusout" &&
            (E = g._wrapperState) &&
            E.controlled &&
            g.type === "number" &&
            Ll(g, "number", g.value);
      }
      switch (((E = c ? ur(c) : window), e)) {
        case "focusin":
          (Wa(E) || E.contentEditable === "true") &&
            ((or = E), (ql = c), (Jr = null));
          break;
        case "focusout":
          Jr = ql = or = null;
          break;
        case "mousedown":
          Gl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Gl = !1), Xa(f, r, d);
          break;
        case "selectionchange":
          if (Ff) break;
        case "keydown":
        case "keyup":
          Xa(f, r, d);
      }
      var T;
      if (Gi)
        e: {
          switch (e) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
      else
        ar
          ? zc(e, r) && (C = "onCompositionEnd")
          : e === "keydown" && r.keyCode === 229 && (C = "onCompositionStart");
      C &&
        (Tc &&
          r.locale !== "ko" &&
          (ar || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && ar && (T = Ec())
            : ((St = d),
              (Qi = "value" in St ? St.value : St.textContent),
              (ar = !0))),
        (E = hs(c, C)),
        0 < E.length &&
          ((C = new Ba(C, e, null, r, d)),
          f.push({ event: C, listeners: E }),
          T ? (C.data = T) : ((T = Ic(r)), T !== null && (C.data = T)))),
        (T = Df ? _f(e, r) : Ef(e, r)) &&
          ((c = hs(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new Ba("onBeforeInput", "beforeinput", null, r, d)),
            f.push({ event: d, listeners: c }),
            (d.data = T)));
    }
    Vc(f, t);
  });
}
function gn(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function hs(e, t) {
  for (var r = t + "Capture", s = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = on(e, r)),
      i != null && s.unshift(gn(e, i, l)),
      (i = on(e, t)),
      i != null && s.push(gn(e, i, l))),
      (e = e.return);
  }
  return s;
}
function sr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function eo(e, t, r, s, l) {
  for (var i = t._reactName, a = []; r !== null && r !== s; ) {
    var o = r,
      u = o.alternate,
      c = o.stateNode;
    if (u !== null && u === s) break;
    o.tag === 5 &&
      c !== null &&
      ((o = c),
      l
        ? ((u = on(r, i)), u != null && a.unshift(gn(r, u, o)))
        : l || ((u = on(r, i)), u != null && a.push(gn(r, u, o)))),
      (r = r.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Hf = /\r\n?/g,
  Vf = /\u0000|\uFFFD/g;
function to(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Hf,
      `
`
    )
    .replace(Vf, "");
}
function Vn(e, t, r) {
  if (((t = to(t)), to(e) !== t && r)) throw Error(_(425));
}
function xs() {}
var Yl = null,
  Kl = null;
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
var Zl = typeof setTimeout == "function" ? setTimeout : void 0,
  Qf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ro = typeof Promise == "function" ? Promise : void 0,
  Wf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ro < "u"
      ? function (e) {
          return ro.resolve(null).then(e).catch(qf);
        }
      : Zl;
function qf(e) {
  setTimeout(function () {
    throw e;
  });
}
function pl(e, t) {
  var r = t,
    s = 0;
  do {
    var l = r.nextSibling;
    if ((e.removeChild(r), l && l.nodeType === 8))
      if (((r = l.data), r === "/$")) {
        if (s === 0) {
          e.removeChild(l), dn(t);
          return;
        }
        s--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || s++;
    r = l;
  } while (r);
  dn(t);
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
function no(e) {
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
var Lr = Math.random().toString(36).slice(2),
  rt = "__reactFiber$" + Lr,
  hn = "__reactProps$" + Lr,
  mt = "__reactContainer$" + Lr,
  Jl = "__reactEvents$" + Lr,
  Gf = "__reactListeners$" + Lr,
  Yf = "__reactHandles$" + Lr;
function Ht(e) {
  var t = e[rt];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[mt] || r[rt])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = no(e); e !== null; ) {
          if ((r = e[rt])) return r;
          e = no(e);
        }
      return t;
    }
    (e = r), (r = e.parentNode);
  }
  return null;
}
function En(e) {
  return (
    (e = e[rt] || e[mt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ur(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(_(33));
}
function $s(e) {
  return e[hn] || null;
}
var ei = [],
  dr = -1;
function Ft(e) {
  return { current: e };
}
function q(e) {
  0 > dr || ((e.current = ei[dr]), (ei[dr] = null), dr--);
}
function Q(e, t) {
  dr++, (ei[dr] = e.current), (e.current = t);
}
var Rt = {},
  ge = Ft(Rt),
  Se = Ft(!1),
  Xt = Rt;
function Cr(e, t) {
  var r = e.type.contextTypes;
  if (!r) return Rt;
  var s = e.stateNode;
  if (s && s.__reactInternalMemoizedUnmaskedChildContext === t)
    return s.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in r) l[i] = t[i];
  return (
    s &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Ce(e) {
  return (e = e.childContextTypes), e != null;
}
function ys() {
  q(Se), q(ge);
}
function so(e, t, r) {
  if (ge.current !== Rt) throw Error(_(168));
  Q(ge, t), Q(Se, r);
}
function Wc(e, t, r) {
  var s = e.stateNode;
  if (((t = t.childContextTypes), typeof s.getChildContext != "function"))
    return r;
  s = s.getChildContext();
  for (var l in s) if (!(l in t)) throw Error(_(108, Id(e) || "Unknown", l));
  return J({}, r, s);
}
function vs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Rt),
    (Xt = ge.current),
    Q(ge, e),
    Q(Se, Se.current),
    !0
  );
}
function lo(e, t, r) {
  var s = e.stateNode;
  if (!s) throw Error(_(169));
  r
    ? ((e = Wc(e, t, Xt)),
      (s.__reactInternalMemoizedMergedChildContext = e),
      q(Se),
      q(ge),
      Q(ge, e))
    : q(Se),
    Q(Se, r);
}
var at = null,
  Fs = !1,
  gl = !1;
function qc(e) {
  at === null ? (at = [e]) : at.push(e);
}
function Kf(e) {
  (Fs = !0), qc(e);
}
function At() {
  if (!gl && at !== null) {
    gl = !0;
    var e = 0,
      t = B;
    try {
      var r = at;
      for (B = 1; e < r.length; e++) {
        var s = r[e];
        do s = s(!0);
        while (s !== null);
      }
      (at = null), (Fs = !1);
    } catch (l) {
      throw (at !== null && (at = at.slice(e + 1)), yc(Ui, At), l);
    } finally {
      (B = t), (gl = !1);
    }
  }
  return null;
}
var fr = [],
  mr = 0,
  ws = null,
  js = 0,
  Oe = [],
  $e = 0,
  Zt = null,
  ot = 1,
  ct = "";
function Ut(e, t) {
  (fr[mr++] = js), (fr[mr++] = ws), (ws = e), (js = t);
}
function Gc(e, t, r) {
  (Oe[$e++] = ot), (Oe[$e++] = ct), (Oe[$e++] = Zt), (Zt = e);
  var s = ot;
  e = ct;
  var l = 32 - Ye(s) - 1;
  (s &= ~(1 << l)), (r += 1);
  var i = 32 - Ye(t) + l;
  if (30 < i) {
    var a = l - (l % 5);
    (i = (s & ((1 << a) - 1)).toString(32)),
      (s >>= a),
      (l -= a),
      (ot = (1 << (32 - Ye(t) + l)) | (r << l) | s),
      (ct = i + e);
  } else (ot = (1 << i) | (r << l) | s), (ct = e);
}
function Ki(e) {
  e.return !== null && (Ut(e, 1), Gc(e, 1, 0));
}
function Xi(e) {
  for (; e === ws; )
    (ws = fr[--mr]), (fr[mr] = null), (js = fr[--mr]), (fr[mr] = null);
  for (; e === Zt; )
    (Zt = Oe[--$e]),
      (Oe[$e] = null),
      (ct = Oe[--$e]),
      (Oe[$e] = null),
      (ot = Oe[--$e]),
      (Oe[$e] = null);
}
var Ie = null,
  ze = null,
  G = !1,
  Ge = null;
function Yc(e, t) {
  var r = Fe(5, null, null, 0);
  (r.elementType = "DELETED"),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
}
function io(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ie = e), (ze = Tt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ie = e), (ze = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = Zt !== null ? { id: ot, overflow: ct } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = Fe(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (Ie = e),
            (ze = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ti(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ri(e) {
  if (G) {
    var t = ze;
    if (t) {
      var r = t;
      if (!io(e, t)) {
        if (ti(e)) throw Error(_(418));
        t = Tt(r.nextSibling);
        var s = Ie;
        t && io(e, t)
          ? Yc(s, r)
          : ((e.flags = (e.flags & -4097) | 2), (G = !1), (Ie = e));
      }
    } else {
      if (ti(e)) throw Error(_(418));
      (e.flags = (e.flags & -4097) | 2), (G = !1), (Ie = e);
    }
  }
}
function ao(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ie = e;
}
function Qn(e) {
  if (e !== Ie) return !1;
  if (!G) return ao(e), (G = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Xl(e.type, e.memoizedProps))),
    t && (t = ze))
  ) {
    if (ti(e)) throw (Kc(), Error(_(418)));
    for (; t; ) Yc(e, t), (t = Tt(t.nextSibling));
  }
  if ((ao(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(_(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              ze = Tt(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ze = null;
    }
  } else ze = Ie ? Tt(e.stateNode.nextSibling) : null;
  return !0;
}
function Kc() {
  for (var e = ze; e; ) e = Tt(e.nextSibling);
}
function Dr() {
  (ze = Ie = null), (G = !1);
}
function Zi(e) {
  Ge === null ? (Ge = [e]) : Ge.push(e);
}
var Xf = yt.ReactCurrentBatchConfig;
function Br(e, t, r) {
  if (
    ((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(_(309));
        var s = r.stateNode;
      }
      if (!s) throw Error(_(147, e));
      var l = s,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var o = l.refs;
            a === null ? delete o[i] : (o[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(_(284));
    if (!r._owner) throw Error(_(290, e));
  }
  return e;
}
function Wn(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      _(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function oo(e) {
  var t = e._init;
  return t(e._payload);
}
function Xc(e) {
  function t(h, m) {
    if (e) {
      var p = h.deletions;
      p === null ? ((h.deletions = [m]), (h.flags |= 16)) : p.push(m);
    }
  }
  function r(h, m) {
    if (!e) return null;
    for (; m !== null; ) t(h, m), (m = m.sibling);
    return null;
  }
  function s(h, m) {
    for (h = new Map(); m !== null; )
      m.key !== null ? h.set(m.key, m) : h.set(m.index, m), (m = m.sibling);
    return h;
  }
  function l(h, m) {
    return (h = Mt(h, m)), (h.index = 0), (h.sibling = null), h;
  }
  function i(h, m, p) {
    return (
      (h.index = p),
      e
        ? ((p = h.alternate),
          p !== null
            ? ((p = p.index), p < m ? ((h.flags |= 2), m) : p)
            : ((h.flags |= 2), m))
        : ((h.flags |= 1048576), m)
    );
  }
  function a(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function o(h, m, p, w) {
    return m === null || m.tag !== 6
      ? ((m = Nl(p, h.mode, w)), (m.return = h), m)
      : ((m = l(m, p)), (m.return = h), m);
  }
  function u(h, m, p, w) {
    var D = p.type;
    return D === ir
      ? d(h, m, p.props.children, w, p.key)
      : m !== null &&
        (m.elementType === D ||
          (typeof D == "object" &&
            D !== null &&
            D.$$typeof === jt &&
            oo(D) === m.type))
      ? ((w = l(m, p.props)), (w.ref = Br(h, m, p)), (w.return = h), w)
      : ((w = os(p.type, p.key, p.props, null, h.mode, w)),
        (w.ref = Br(h, m, p)),
        (w.return = h),
        w);
  }
  function c(h, m, p, w) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== p.containerInfo ||
      m.stateNode.implementation !== p.implementation
      ? ((m = bl(p, h.mode, w)), (m.return = h), m)
      : ((m = l(m, p.children || [])), (m.return = h), m);
  }
  function d(h, m, p, w, D) {
    return m === null || m.tag !== 7
      ? ((m = Gt(p, h.mode, w, D)), (m.return = h), m)
      : ((m = l(m, p)), (m.return = h), m);
  }
  function f(h, m, p) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = Nl("" + m, h.mode, p)), (m.return = h), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ln:
          return (
            (p = os(m.type, m.key, m.props, null, h.mode, p)),
            (p.ref = Br(h, null, m)),
            (p.return = h),
            p
          );
        case lr:
          return (m = bl(m, h.mode, p)), (m.return = h), m;
        case jt:
          var w = m._init;
          return f(h, w(m._payload), p);
      }
      if (Wr(m) || Or(m))
        return (m = Gt(m, h.mode, p, null)), (m.return = h), m;
      Wn(h, m);
    }
    return null;
  }
  function g(h, m, p, w) {
    var D = m !== null ? m.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return D !== null ? null : o(h, m, "" + p, w);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Ln:
          return p.key === D ? u(h, m, p, w) : null;
        case lr:
          return p.key === D ? c(h, m, p, w) : null;
        case jt:
          return (D = p._init), g(h, m, D(p._payload), w);
      }
      if (Wr(p) || Or(p)) return D !== null ? null : d(h, m, p, w, null);
      Wn(h, p);
    }
    return null;
  }
  function y(h, m, p, w, D) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (h = h.get(p) || null), o(m, h, "" + w, D);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Ln:
          return (h = h.get(w.key === null ? p : w.key) || null), u(m, h, w, D);
        case lr:
          return (h = h.get(w.key === null ? p : w.key) || null), c(m, h, w, D);
        case jt:
          var E = w._init;
          return y(h, m, p, E(w._payload), D);
      }
      if (Wr(w) || Or(w)) return (h = h.get(p) || null), d(m, h, w, D, null);
      Wn(m, w);
    }
    return null;
  }
  function v(h, m, p, w) {
    for (
      var D = null, E = null, T = m, C = (m = 0), b = null;
      T !== null && C < p.length;
      C++
    ) {
      T.index > C ? ((b = T), (T = null)) : (b = T.sibling);
      var S = g(h, T, p[C], w);
      if (S === null) {
        T === null && (T = b);
        break;
      }
      e && T && S.alternate === null && t(h, T),
        (m = i(S, m, C)),
        E === null ? (D = S) : (E.sibling = S),
        (E = S),
        (T = b);
    }
    if (C === p.length) return r(h, T), G && Ut(h, C), D;
    if (T === null) {
      for (; C < p.length; C++)
        (T = f(h, p[C], w)),
          T !== null &&
            ((m = i(T, m, C)), E === null ? (D = T) : (E.sibling = T), (E = T));
      return G && Ut(h, C), D;
    }
    for (T = s(h, T); C < p.length; C++)
      (b = y(T, h, C, p[C], w)),
        b !== null &&
          (e && b.alternate !== null && T.delete(b.key === null ? C : b.key),
          (m = i(b, m, C)),
          E === null ? (D = b) : (E.sibling = b),
          (E = b));
    return (
      e &&
        T.forEach(function (L) {
          return t(h, L);
        }),
      G && Ut(h, C),
      D
    );
  }
  function x(h, m, p, w) {
    var D = Or(p);
    if (typeof D != "function") throw Error(_(150));
    if (((p = D.call(p)), p == null)) throw Error(_(151));
    for (
      var E = (D = null), T = m, C = (m = 0), b = null, S = p.next();
      T !== null && !S.done;
      C++, S = p.next()
    ) {
      T.index > C ? ((b = T), (T = null)) : (b = T.sibling);
      var L = g(h, T, S.value, w);
      if (L === null) {
        T === null && (T = b);
        break;
      }
      e && T && L.alternate === null && t(h, T),
        (m = i(L, m, C)),
        E === null ? (D = L) : (E.sibling = L),
        (E = L),
        (T = b);
    }
    if (S.done) return r(h, T), G && Ut(h, C), D;
    if (T === null) {
      for (; !S.done; C++, S = p.next())
        (S = f(h, S.value, w)),
          S !== null &&
            ((m = i(S, m, C)), E === null ? (D = S) : (E.sibling = S), (E = S));
      return G && Ut(h, C), D;
    }
    for (T = s(h, T); !S.done; C++, S = p.next())
      (S = y(T, h, C, S.value, w)),
        S !== null &&
          (e && S.alternate !== null && T.delete(S.key === null ? C : S.key),
          (m = i(S, m, C)),
          E === null ? (D = S) : (E.sibling = S),
          (E = S));
    return (
      e &&
        T.forEach(function (O) {
          return t(h, O);
        }),
      G && Ut(h, C),
      D
    );
  }
  function z(h, m, p, w) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === ir &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case Ln:
          e: {
            for (var D = p.key, E = m; E !== null; ) {
              if (E.key === D) {
                if (((D = p.type), D === ir)) {
                  if (E.tag === 7) {
                    r(h, E.sibling),
                      (m = l(E, p.props.children)),
                      (m.return = h),
                      (h = m);
                    break e;
                  }
                } else if (
                  E.elementType === D ||
                  (typeof D == "object" &&
                    D !== null &&
                    D.$$typeof === jt &&
                    oo(D) === E.type)
                ) {
                  r(h, E.sibling),
                    (m = l(E, p.props)),
                    (m.ref = Br(h, E, p)),
                    (m.return = h),
                    (h = m);
                  break e;
                }
                r(h, E);
                break;
              } else t(h, E);
              E = E.sibling;
            }
            p.type === ir
              ? ((m = Gt(p.props.children, h.mode, w, p.key)),
                (m.return = h),
                (h = m))
              : ((w = os(p.type, p.key, p.props, null, h.mode, w)),
                (w.ref = Br(h, m, p)),
                (w.return = h),
                (h = w));
          }
          return a(h);
        case lr:
          e: {
            for (E = p.key; m !== null; ) {
              if (m.key === E)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === p.containerInfo &&
                  m.stateNode.implementation === p.implementation
                ) {
                  r(h, m.sibling),
                    (m = l(m, p.children || [])),
                    (m.return = h),
                    (h = m);
                  break e;
                } else {
                  r(h, m);
                  break;
                }
              else t(h, m);
              m = m.sibling;
            }
            (m = bl(p, h.mode, w)), (m.return = h), (h = m);
          }
          return a(h);
        case jt:
          return (E = p._init), z(h, m, E(p._payload), w);
      }
      if (Wr(p)) return v(h, m, p, w);
      if (Or(p)) return x(h, m, p, w);
      Wn(h, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        m !== null && m.tag === 6
          ? (r(h, m.sibling), (m = l(m, p)), (m.return = h), (h = m))
          : (r(h, m), (m = Nl(p, h.mode, w)), (m.return = h), (h = m)),
        a(h))
      : r(h, m);
  }
  return z;
}
var _r = Xc(!0),
  Zc = Xc(!1),
  Ns = Ft(null),
  bs = null,
  pr = null,
  Ji = null;
function ea() {
  Ji = pr = bs = null;
}
function ta(e) {
  var t = Ns.current;
  q(Ns), (e._currentValue = t);
}
function ni(e, t, r) {
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
function jr(e, t) {
  (bs = e),
    (Ji = pr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ke = !0), (e.firstContext = null));
}
function Ue(e) {
  var t = e._currentValue;
  if (Ji !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), pr === null)) {
      if (bs === null) throw Error(_(308));
      (pr = e), (bs.dependencies = { lanes: 0, firstContext: e });
    } else pr = pr.next = e;
  return t;
}
var Vt = null;
function ra(e) {
  Vt === null ? (Vt = [e]) : Vt.push(e);
}
function Jc(e, t, r, s) {
  var l = t.interleaved;
  return (
    l === null ? ((r.next = r), ra(t)) : ((r.next = l.next), (l.next = r)),
    (t.interleaved = r),
    pt(e, s)
  );
}
function pt(e, t) {
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
var Nt = !1;
function na(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function eu(e, t) {
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
function ut(e, t) {
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
  if (((s = s.shared), U & 2)) {
    var l = s.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (s.pending = t),
      pt(e, r)
    );
  }
  return (
    (l = s.interleaved),
    l === null ? ((t.next = t), ra(s)) : ((t.next = l.next), (l.next = t)),
    (s.interleaved = t),
    pt(e, r)
  );
}
function rs(e, t, r) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
  ) {
    var s = t.lanes;
    (s &= e.pendingLanes), (r |= s), (t.lanes = r), Bi(e, r);
  }
}
function co(e, t) {
  var r = e.updateQueue,
    s = e.alternate;
  if (s !== null && ((s = s.updateQueue), r === s)) {
    var l = null,
      i = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var a = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        i === null ? (l = i = a) : (i = i.next = a), (r = r.next);
      } while (r !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (r = {
      baseState: s.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
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
  Nt = !1;
  var i = l.firstBaseUpdate,
    a = l.lastBaseUpdate,
    o = l.shared.pending;
  if (o !== null) {
    l.shared.pending = null;
    var u = o,
      c = u.next;
    (u.next = null), a === null ? (i = c) : (a.next = c), (a = u);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (o = d.lastBaseUpdate),
      o !== a &&
        (o === null ? (d.firstBaseUpdate = c) : (o.next = c),
        (d.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var f = l.baseState;
    (a = 0), (d = c = u = null), (o = i);
    do {
      var g = o.lane,
        y = o.eventTime;
      if ((s & g) === g) {
        d !== null &&
          (d = d.next =
            {
              eventTime: y,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var v = e,
            x = o;
          switch (((g = t), (y = r), x.tag)) {
            case 1:
              if (((v = x.payload), typeof v == "function")) {
                f = v.call(y, f, g);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = x.payload),
                (g = typeof v == "function" ? v.call(y, f, g) : v),
                g == null)
              )
                break e;
              f = J({}, f, g);
              break e;
            case 2:
              Nt = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (g = l.effects),
          g === null ? (l.effects = [o]) : g.push(o));
      } else
        (y = {
          eventTime: y,
          lane: g,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          d === null ? ((c = d = y), (u = f)) : (d = d.next = y),
          (a |= g);
      if (((o = o.next), o === null)) {
        if (((o = l.shared.pending), o === null)) break;
        (g = o),
          (o = g.next),
          (g.next = null),
          (l.lastBaseUpdate = g),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (u = f),
      (l.baseState = u),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = d),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (a |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (er |= a), (e.lanes = a), (e.memoizedState = f);
  }
}
function uo(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var s = e[t],
        l = s.callback;
      if (l !== null) {
        if (((s.callback = null), (s = r), typeof l != "function"))
          throw Error(_(191, l));
        l.call(s);
      }
    }
}
var Tn = {},
  st = Ft(Tn),
  xn = Ft(Tn),
  yn = Ft(Tn);
function Qt(e) {
  if (e === Tn) throw Error(_(174));
  return e;
}
function sa(e, t) {
  switch ((Q(yn, t), Q(xn, e), Q(st, Tn), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ol(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ol(t, e));
  }
  q(st), Q(st, t);
}
function Er() {
  q(st), q(xn), q(yn);
}
function tu(e) {
  Qt(yn.current);
  var t = Qt(st.current),
    r = Ol(t, e.type);
  t !== r && (Q(xn, e), Q(st, r));
}
function la(e) {
  xn.current === e && (q(st), q(xn));
}
var Y = Ft(0);
function Ss(e) {
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
var hl = [];
function ia() {
  for (var e = 0; e < hl.length; e++)
    hl[e]._workInProgressVersionPrimary = null;
  hl.length = 0;
}
var ns = yt.ReactCurrentDispatcher,
  xl = yt.ReactCurrentBatchConfig,
  Jt = 0,
  Z = null,
  le = null,
  ae = null,
  Cs = !1,
  en = !1,
  vn = 0,
  Zf = 0;
function fe() {
  throw Error(_(321));
}
function aa(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!Xe(e[r], t[r])) return !1;
  return !0;
}
function oa(e, t, r, s, l, i) {
  if (
    ((Jt = i),
    (Z = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ns.current = e === null || e.memoizedState === null ? rm : nm),
    (e = r(s, l)),
    en)
  ) {
    i = 0;
    do {
      if (((en = !1), (vn = 0), 25 <= i)) throw Error(_(301));
      (i += 1),
        (ae = le = null),
        (t.updateQueue = null),
        (ns.current = sm),
        (e = r(s, l));
    } while (en);
  }
  if (
    ((ns.current = Ds),
    (t = le !== null && le.next !== null),
    (Jt = 0),
    (ae = le = Z = null),
    (Cs = !1),
    t)
  )
    throw Error(_(300));
  return e;
}
function ca() {
  var e = vn !== 0;
  return (vn = 0), e;
}
function tt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ae === null ? (Z.memoizedState = ae = e) : (ae = ae.next = e), ae;
}
function Be() {
  if (le === null) {
    var e = Z.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = le.next;
  var t = ae === null ? Z.memoizedState : ae.next;
  if (t !== null) (ae = t), (le = e);
  else {
    if (e === null) throw Error(_(310));
    (le = e),
      (e = {
        memoizedState: le.memoizedState,
        baseState: le.baseState,
        baseQueue: le.baseQueue,
        queue: le.queue,
        next: null,
      }),
      ae === null ? (Z.memoizedState = ae = e) : (ae = ae.next = e);
  }
  return ae;
}
function wn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function yl(e) {
  var t = Be(),
    r = t.queue;
  if (r === null) throw Error(_(311));
  r.lastRenderedReducer = e;
  var s = le,
    l = s.baseQueue,
    i = r.pending;
  if (i !== null) {
    if (l !== null) {
      var a = l.next;
      (l.next = i.next), (i.next = a);
    }
    (s.baseQueue = l = i), (r.pending = null);
  }
  if (l !== null) {
    (i = l.next), (s = s.baseState);
    var o = (a = null),
      u = null,
      c = i;
    do {
      var d = c.lane;
      if ((Jt & d) === d)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (s = c.hasEagerState ? c.eagerState : e(s, c.action));
      else {
        var f = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        u === null ? ((o = u = f), (a = s)) : (u = u.next = f),
          (Z.lanes |= d),
          (er |= d);
      }
      c = c.next;
    } while (c !== null && c !== i);
    u === null ? (a = s) : (u.next = o),
      Xe(s, t.memoizedState) || (ke = !0),
      (t.memoizedState = s),
      (t.baseState = a),
      (t.baseQueue = u),
      (r.lastRenderedState = s);
  }
  if (((e = r.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (Z.lanes |= i), (er |= i), (l = l.next);
    while (l !== e);
  } else l === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function vl(e) {
  var t = Be(),
    r = t.queue;
  if (r === null) throw Error(_(311));
  r.lastRenderedReducer = e;
  var s = r.dispatch,
    l = r.pending,
    i = t.memoizedState;
  if (l !== null) {
    r.pending = null;
    var a = (l = l.next);
    do (i = e(i, a.action)), (a = a.next);
    while (a !== l);
    Xe(i, t.memoizedState) || (ke = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (r.lastRenderedState = i);
  }
  return [i, s];
}
function ru() {}
function nu(e, t) {
  var r = Z,
    s = Be(),
    l = t(),
    i = !Xe(s.memoizedState, l);
  if (
    (i && ((s.memoizedState = l), (ke = !0)),
    (s = s.queue),
    ua(iu.bind(null, r, s, e), [e]),
    s.getSnapshot !== t || i || (ae !== null && ae.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      jn(9, lu.bind(null, r, s, l, t), void 0, null),
      oe === null)
    )
      throw Error(_(349));
    Jt & 30 || su(r, t, l);
  }
  return l;
}
function su(e, t, r) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = Z.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Z.updateQueue = t),
        (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
}
function lu(e, t, r, s) {
  (t.value = r), (t.getSnapshot = s), au(t) && ou(e);
}
function iu(e, t, r) {
  return r(function () {
    au(t) && ou(e);
  });
}
function au(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !Xe(e, r);
  } catch {
    return !0;
  }
}
function ou(e) {
  var t = pt(e, 1);
  t !== null && Ke(t, e, 1, -1);
}
function fo(e) {
  var t = tt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: wn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = tm.bind(null, Z, e)),
    [t.memoizedState, e]
  );
}
function jn(e, t, r, s) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: s, next: null }),
    (t = Z.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Z.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((s = r.next), (r.next = e), (e.next = s), (t.lastEffect = e))),
    e
  );
}
function cu() {
  return Be().memoizedState;
}
function ss(e, t, r, s) {
  var l = tt();
  (Z.flags |= e),
    (l.memoizedState = jn(1 | t, r, void 0, s === void 0 ? null : s));
}
function As(e, t, r, s) {
  var l = Be();
  s = s === void 0 ? null : s;
  var i = void 0;
  if (le !== null) {
    var a = le.memoizedState;
    if (((i = a.destroy), s !== null && aa(s, a.deps))) {
      l.memoizedState = jn(t, r, i, s);
      return;
    }
  }
  (Z.flags |= e), (l.memoizedState = jn(1 | t, r, i, s));
}
function mo(e, t) {
  return ss(8390656, 8, e, t);
}
function ua(e, t) {
  return As(2048, 8, e, t);
}
function uu(e, t) {
  return As(4, 2, e, t);
}
function du(e, t) {
  return As(4, 4, e, t);
}
function fu(e, t) {
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
function mu(e, t, r) {
  return (
    (r = r != null ? r.concat([e]) : null), As(4, 4, fu.bind(null, t, e), r)
  );
}
function da() {}
function pu(e, t) {
  var r = Be();
  t = t === void 0 ? null : t;
  var s = r.memoizedState;
  return s !== null && t !== null && aa(t, s[1])
    ? s[0]
    : ((r.memoizedState = [e, t]), e);
}
function gu(e, t) {
  var r = Be();
  t = t === void 0 ? null : t;
  var s = r.memoizedState;
  return s !== null && t !== null && aa(t, s[1])
    ? s[0]
    : ((e = e()), (r.memoizedState = [e, t]), e);
}
function hu(e, t, r) {
  return Jt & 21
    ? (Xe(r, t) || ((r = jc()), (Z.lanes |= r), (er |= r), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ke = !0)), (e.memoizedState = r));
}
function Jf(e, t) {
  var r = B;
  (B = r !== 0 && 4 > r ? r : 4), e(!0);
  var s = xl.transition;
  xl.transition = {};
  try {
    e(!1), t();
  } finally {
    (B = r), (xl.transition = s);
  }
}
function xu() {
  return Be().memoizedState;
}
function em(e, t, r) {
  var s = Pt(e);
  if (
    ((r = {
      lane: s,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    yu(e))
  )
    vu(t, r);
  else if (((r = Jc(e, t, r, s)), r !== null)) {
    var l = xe();
    Ke(r, e, s, l), wu(r, t, s);
  }
}
function tm(e, t, r) {
  var s = Pt(e),
    l = { lane: s, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (yu(e)) vu(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          o = i(a, r);
        if (((l.hasEagerState = !0), (l.eagerState = o), Xe(o, a))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), ra(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (r = Jc(e, t, l, s)),
      r !== null && ((l = xe()), Ke(r, e, s, l), wu(r, t, s));
  }
}
function yu(e) {
  var t = e.alternate;
  return e === Z || (t !== null && t === Z);
}
function vu(e, t) {
  en = Cs = !0;
  var r = e.pending;
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
    (e.pending = t);
}
function wu(e, t, r) {
  if (r & 4194240) {
    var s = t.lanes;
    (s &= e.pendingLanes), (r |= s), (t.lanes = r), Bi(e, r);
  }
}
var Ds = {
    readContext: Ue,
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
  rm = {
    readContext: Ue,
    useCallback: function (e, t) {
      return (tt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ue,
    useEffect: mo,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        ss(4194308, 4, fu.bind(null, t, e), r)
      );
    },
    useLayoutEffect: function (e, t) {
      return ss(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ss(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = tt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, r) {
      var s = tt();
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
        (e = e.dispatch = em.bind(null, Z, e)),
        [s.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = tt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: fo,
    useDebugValue: da,
    useDeferredValue: function (e) {
      return (tt().memoizedState = e);
    },
    useTransition: function () {
      var e = fo(!1),
        t = e[0];
      return (e = Jf.bind(null, e[1])), (tt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var s = Z,
        l = tt();
      if (G) {
        if (r === void 0) throw Error(_(407));
        r = r();
      } else {
        if (((r = t()), oe === null)) throw Error(_(349));
        Jt & 30 || su(s, t, r);
      }
      l.memoizedState = r;
      var i = { value: r, getSnapshot: t };
      return (
        (l.queue = i),
        mo(iu.bind(null, s, i, e), [e]),
        (s.flags |= 2048),
        jn(9, lu.bind(null, s, i, r, t), void 0, null),
        r
      );
    },
    useId: function () {
      var e = tt(),
        t = oe.identifierPrefix;
      if (G) {
        var r = ct,
          s = ot;
        (r = (s & ~(1 << (32 - Ye(s) - 1))).toString(32) + r),
          (t = ":" + t + "R" + r),
          (r = vn++),
          0 < r && (t += "H" + r.toString(32)),
          (t += ":");
      } else (r = Zf++), (t = ":" + t + "r" + r.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  nm = {
    readContext: Ue,
    useCallback: pu,
    useContext: Ue,
    useEffect: ua,
    useImperativeHandle: mu,
    useInsertionEffect: uu,
    useLayoutEffect: du,
    useMemo: gu,
    useReducer: yl,
    useRef: cu,
    useState: function () {
      return yl(wn);
    },
    useDebugValue: da,
    useDeferredValue: function (e) {
      var t = Be();
      return hu(t, le.memoizedState, e);
    },
    useTransition: function () {
      var e = yl(wn)[0],
        t = Be().memoizedState;
      return [e, t];
    },
    useMutableSource: ru,
    useSyncExternalStore: nu,
    useId: xu,
    unstable_isNewReconciler: !1,
  },
  sm = {
    readContext: Ue,
    useCallback: pu,
    useContext: Ue,
    useEffect: ua,
    useImperativeHandle: mu,
    useInsertionEffect: uu,
    useLayoutEffect: du,
    useMemo: gu,
    useReducer: vl,
    useRef: cu,
    useState: function () {
      return vl(wn);
    },
    useDebugValue: da,
    useDeferredValue: function (e) {
      var t = Be();
      return le === null ? (t.memoizedState = e) : hu(t, le.memoizedState, e);
    },
    useTransition: function () {
      var e = vl(wn)[0],
        t = Be().memoizedState;
      return [e, t];
    },
    useMutableSource: ru,
    useSyncExternalStore: nu,
    useId: xu,
    unstable_isNewReconciler: !1,
  };
function We(e, t) {
  if (e && e.defaultProps) {
    (t = J({}, t)), (e = e.defaultProps);
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
function si(e, t, r, s) {
  (t = e.memoizedState),
    (r = r(s, t)),
    (r = r == null ? t : J({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r);
}
var Us = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? nr(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var s = xe(),
      l = Pt(e),
      i = ut(s, l);
    (i.payload = t),
      r != null && (i.callback = r),
      (t = zt(e, i, l)),
      t !== null && (Ke(t, e, l, s), rs(t, e, l));
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var s = xe(),
      l = Pt(e),
      i = ut(s, l);
    (i.tag = 1),
      (i.payload = t),
      r != null && (i.callback = r),
      (t = zt(e, i, l)),
      t !== null && (Ke(t, e, l, s), rs(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = xe(),
      s = Pt(e),
      l = ut(r, s);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = zt(e, l, s)),
      t !== null && (Ke(t, e, s, r), rs(t, e, s));
  },
};
function po(e, t, r, s, l, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(s, i, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !mn(r, s) || !mn(l, i)
      : !0
  );
}
function ju(e, t, r) {
  var s = !1,
    l = Rt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ue(i))
      : ((l = Ce(t) ? Xt : ge.current),
        (s = t.contextTypes),
        (i = (s = s != null) ? Cr(e, l) : Rt)),
    (t = new t(r, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Us),
    (e.stateNode = t),
    (t._reactInternals = e),
    s &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function go(e, t, r, s) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(r, s),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(r, s),
    t.state !== e && Us.enqueueReplaceState(t, t.state, null);
}
function li(e, t, r, s) {
  var l = e.stateNode;
  (l.props = r), (l.state = e.memoizedState), (l.refs = {}), na(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Ue(i))
    : ((i = Ce(t) ? Xt : ge.current), (l.context = Cr(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (si(e, t, i, r), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Us.enqueueReplaceState(l, l.state, null),
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
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function wl(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function ii(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var lm = typeof WeakMap == "function" ? WeakMap : Map;
function Nu(e, t, r) {
  (r = ut(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var s = t.value;
  return (
    (r.callback = function () {
      Es || ((Es = !0), (hi = s)), ii(e, t);
    }),
    r
  );
}
function bu(e, t, r) {
  (r = ut(-1, r)), (r.tag = 3);
  var s = e.type.getDerivedStateFromError;
  if (typeof s == "function") {
    var l = t.value;
    (r.payload = function () {
      return s(l);
    }),
      (r.callback = function () {
        ii(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (r.callback = function () {
        ii(e, t),
          typeof s != "function" &&
            (It === null ? (It = new Set([this])) : It.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    r
  );
}
function ho(e, t, r) {
  var s = e.pingCache;
  if (s === null) {
    s = e.pingCache = new lm();
    var l = new Set();
    s.set(t, l);
  } else (l = s.get(t)), l === void 0 && ((l = new Set()), s.set(t, l));
  l.has(r) || (l.add(r), (e = vm.bind(null, e, t, r)), t.then(e, e));
}
function xo(e) {
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
function yo(e, t, r, s, l) {
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
              : ((t = ut(-1, 1)), (t.tag = 2), zt(r, t, 1))),
          (r.lanes |= 1)),
      e);
}
var im = yt.ReactCurrentOwner,
  ke = !1;
function he(e, t, r, s) {
  t.child = e === null ? Zc(t, null, r, s) : _r(t, e.child, r, s);
}
function vo(e, t, r, s, l) {
  r = r.render;
  var i = t.ref;
  return (
    jr(t, l),
    (s = oa(e, t, r, s, i, l)),
    (r = ca()),
    e !== null && !ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        gt(e, t, l))
      : (G && r && Ki(t), (t.flags |= 1), he(e, t, s, l), t.child)
  );
}
function wo(e, t, r, s, l) {
  if (e === null) {
    var i = r.type;
    return typeof i == "function" &&
      !va(i) &&
      i.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), ku(e, t, i, s, l))
      : ((e = os(r.type, null, s, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var a = i.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : mn), r(a, s) && e.ref === t.ref)
    )
      return gt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Mt(i, s)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ku(e, t, r, s, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (mn(i, s) && e.ref === t.ref)
      if (((ke = !1), (t.pendingProps = s = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (ke = !0);
      else return (t.lanes = e.lanes), gt(e, t, l);
  }
  return ai(e, t, r, s, l);
}
function Su(e, t, r) {
  var s = t.pendingProps,
    l = s.children,
    i = e !== null ? e.memoizedState : null;
  if (s.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Q(hr, Ee),
        (Ee |= r);
    else {
      if (!(r & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Q(hr, Ee),
          (Ee |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (s = i !== null ? i.baseLanes : r),
        Q(hr, Ee),
        (Ee |= s);
    }
  else
    i !== null ? ((s = i.baseLanes | r), (t.memoizedState = null)) : (s = r),
      Q(hr, Ee),
      (Ee |= s);
  return he(e, t, l, r), t.child;
}
function Cu(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ai(e, t, r, s, l) {
  var i = Ce(r) ? Xt : ge.current;
  return (
    (i = Cr(t, i)),
    jr(t, l),
    (r = oa(e, t, r, s, i, l)),
    (s = ca()),
    e !== null && !ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        gt(e, t, l))
      : (G && s && Ki(t), (t.flags |= 1), he(e, t, r, l), t.child)
  );
}
function jo(e, t, r, s, l) {
  if (Ce(r)) {
    var i = !0;
    vs(t);
  } else i = !1;
  if ((jr(t, l), t.stateNode === null))
    ls(e, t), ju(t, r, s), li(t, r, s, l), (s = !0);
  else if (e === null) {
    var a = t.stateNode,
      o = t.memoizedProps;
    a.props = o;
    var u = a.context,
      c = r.contextType;
    typeof c == "object" && c !== null
      ? (c = Ue(c))
      : ((c = Ce(r) ? Xt : ge.current), (c = Cr(t, c)));
    var d = r.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((o !== s || u !== c) && go(t, a, s, c)),
      (Nt = !1);
    var g = t.memoizedState;
    (a.state = g),
      ks(t, s, a, l),
      (u = t.memoizedState),
      o !== s || g !== u || Se.current || Nt
        ? (typeof d == "function" && (si(t, r, d, s), (u = t.memoizedState)),
          (o = Nt || po(t, r, o, s, g, u, c))
            ? (f ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = s),
              (t.memoizedState = u)),
          (a.props = s),
          (a.state = u),
          (a.context = c),
          (s = o))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (s = !1));
  } else {
    (a = t.stateNode),
      eu(e, t),
      (o = t.memoizedProps),
      (c = t.type === t.elementType ? o : We(t.type, o)),
      (a.props = c),
      (f = t.pendingProps),
      (g = a.context),
      (u = r.contextType),
      typeof u == "object" && u !== null
        ? (u = Ue(u))
        : ((u = Ce(r) ? Xt : ge.current), (u = Cr(t, u)));
    var y = r.getDerivedStateFromProps;
    (d =
      typeof y == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((o !== f || g !== u) && go(t, a, s, u)),
      (Nt = !1),
      (g = t.memoizedState),
      (a.state = g),
      ks(t, s, a, l);
    var v = t.memoizedState;
    o !== f || g !== v || Se.current || Nt
      ? (typeof y == "function" && (si(t, r, y, s), (v = t.memoizedState)),
        (c = Nt || po(t, r, c, s, g, v, u) || !1)
          ? (d ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(s, v, u),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(s, v, u)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (o === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (o === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = s),
            (t.memoizedState = v)),
        (a.props = s),
        (a.state = v),
        (a.context = u),
        (s = c))
      : (typeof a.componentDidUpdate != "function" ||
          (o === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (o === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 1024),
        (s = !1));
  }
  return oi(e, t, r, s, i, l);
}
function oi(e, t, r, s, l, i) {
  Cu(e, t);
  var a = (t.flags & 128) !== 0;
  if (!s && !a) return l && lo(t, r, !1), gt(e, t, i);
  (s = t.stateNode), (im.current = t);
  var o =
    a && typeof r.getDerivedStateFromError != "function" ? null : s.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = _r(t, e.child, null, i)), (t.child = _r(t, null, o, i)))
      : he(e, t, o, i),
    (t.memoizedState = s.state),
    l && lo(t, r, !0),
    t.child
  );
}
function Du(e) {
  var t = e.stateNode;
  t.pendingContext
    ? so(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && so(e, t.context, !1),
    sa(e, t.containerInfo);
}
function No(e, t, r, s, l) {
  return Dr(), Zi(l), (t.flags |= 256), he(e, t, r, s), t.child;
}
var ci = { dehydrated: null, treeContext: null, retryLane: 0 };
function ui(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function _u(e, t, r) {
  var s = t.pendingProps,
    l = Y.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    o;
  if (
    ((o = a) ||
      (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    o
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    Q(Y, l & 1),
    e === null)
  )
    return (
      ri(t),
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
          i
            ? ((s = t.mode),
              (i = t.child),
              (a = { mode: "hidden", children: a }),
              !(s & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = Vs(a, s, 0, null)),
              (e = Gt(e, s, r, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = ui(r)),
              (t.memoizedState = ci),
              e)
            : fa(t, a))
    );
  if (((l = e.memoizedState), l !== null && ((o = l.dehydrated), o !== null)))
    return am(e, t, a, s, o, l, r);
  if (i) {
    (i = s.fallback), (a = t.mode), (l = e.child), (o = l.sibling);
    var u = { mode: "hidden", children: s.children };
    return (
      !(a & 1) && t.child !== l
        ? ((s = t.child),
          (s.childLanes = 0),
          (s.pendingProps = u),
          (t.deletions = null))
        : ((s = Mt(l, u)), (s.subtreeFlags = l.subtreeFlags & 14680064)),
      o !== null ? (i = Mt(o, i)) : ((i = Gt(i, a, r, null)), (i.flags |= 2)),
      (i.return = t),
      (s.return = t),
      (s.sibling = i),
      (t.child = s),
      (s = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? ui(r)
          : {
              baseLanes: a.baseLanes | r,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~r),
      (t.memoizedState = ci),
      s
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (s = Mt(i, { mode: "visible", children: s.children })),
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
function fa(e, t) {
  return (
    (t = Vs({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function qn(e, t, r, s) {
  return (
    s !== null && Zi(s),
    _r(t, e.child, null, r),
    (e = fa(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function am(e, t, r, s, l, i, a) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (s = wl(Error(_(422)))), qn(e, t, a, s))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = s.fallback),
        (l = t.mode),
        (s = Vs({ mode: "visible", children: s.children }, l, 0, null)),
        (i = Gt(i, l, a, null)),
        (i.flags |= 2),
        (s.return = t),
        (i.return = t),
        (s.sibling = i),
        (t.child = s),
        t.mode & 1 && _r(t, e.child, null, a),
        (t.child.memoizedState = ui(a)),
        (t.memoizedState = ci),
        i);
  if (!(t.mode & 1)) return qn(e, t, a, null);
  if (l.data === "$!") {
    if (((s = l.nextSibling && l.nextSibling.dataset), s)) var o = s.dgst;
    return (s = o), (i = Error(_(419))), (s = wl(i, s, void 0)), qn(e, t, a, s);
  }
  if (((o = (a & e.childLanes) !== 0), ke || o)) {
    if (((s = oe), s !== null)) {
      switch (a & -a) {
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
      (l = l & (s.suspendedLanes | a) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), pt(e, l), Ke(s, e, l, -1));
    }
    return ya(), (s = wl(Error(_(421)))), qn(e, t, a, s);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = wm.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ze = Tt(l.nextSibling)),
      (Ie = t),
      (G = !0),
      (Ge = null),
      e !== null &&
        ((Oe[$e++] = ot),
        (Oe[$e++] = ct),
        (Oe[$e++] = Zt),
        (ot = e.id),
        (ct = e.overflow),
        (Zt = t)),
      (t = fa(t, s.children)),
      (t.flags |= 4096),
      t);
}
function bo(e, t, r) {
  e.lanes |= t;
  var s = e.alternate;
  s !== null && (s.lanes |= t), ni(e.return, t, r);
}
function jl(e, t, r, s, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: s,
        tail: r,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = s),
      (i.tail = r),
      (i.tailMode = l));
}
function Eu(e, t, r) {
  var s = t.pendingProps,
    l = s.revealOrder,
    i = s.tail;
  if ((he(e, t, s.children, r), (s = Y.current), s & 2))
    (s = (s & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && bo(e, r, t);
        else if (e.tag === 19) bo(e, r, t);
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
  if ((Q(Y, s), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (r = t.child, l = null; r !== null; )
          (e = r.alternate),
            e !== null && Ss(e) === null && (l = r),
            (r = r.sibling);
        (r = l),
          r === null
            ? ((l = t.child), (t.child = null))
            : ((l = r.sibling), (r.sibling = null)),
          jl(t, !1, l, r, i);
        break;
      case "backwards":
        for (r = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Ss(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = r), (r = l), (l = e);
        }
        jl(t, !0, r, null, i);
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
function gt(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (er |= t.lanes),
    !(r & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(_(153));
  if (t.child !== null) {
    for (
      e = t.child, r = Mt(e, e.pendingProps), t.child = r, r.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (r = r.sibling = Mt(e, e.pendingProps)), (r.return = t);
    r.sibling = null;
  }
  return t.child;
}
function om(e, t, r) {
  switch (t.tag) {
    case 3:
      Du(t), Dr();
      break;
    case 5:
      tu(t);
      break;
    case 1:
      Ce(t.type) && vs(t);
      break;
    case 4:
      sa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var s = t.type._context,
        l = t.memoizedProps.value;
      Q(Ns, s._currentValue), (s._currentValue = l);
      break;
    case 13:
      if (((s = t.memoizedState), s !== null))
        return s.dehydrated !== null
          ? (Q(Y, Y.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
          ? _u(e, t, r)
          : (Q(Y, Y.current & 1),
            (e = gt(e, t, r)),
            e !== null ? e.sibling : null);
      Q(Y, Y.current & 1);
      break;
    case 19:
      if (((s = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (s) return Eu(e, t, r);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        Q(Y, Y.current),
        s)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Su(e, t, r);
  }
  return gt(e, t, r);
}
var Tu, di, zu, Iu;
Tu = function (e, t) {
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
di = function () {};
zu = function (e, t, r, s) {
  var l = e.memoizedProps;
  if (l !== s) {
    (e = t.stateNode), Qt(st.current);
    var i = null;
    switch (r) {
      case "input":
        (l = Pl(e, l)), (s = Pl(e, s)), (i = []);
        break;
      case "select":
        (l = J({}, l, { value: void 0 })),
          (s = J({}, s, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = Rl(e, l)), (s = Rl(e, s)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof s.onClick == "function" &&
          (e.onclick = xs);
    }
    $l(r, s);
    var a;
    r = null;
    for (c in l)
      if (!s.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var o = l[c];
          for (a in o) o.hasOwnProperty(a) && (r || (r = {}), (r[a] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (ln.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in s) {
      var u = s[c];
      if (
        ((o = l != null ? l[c] : void 0),
        s.hasOwnProperty(c) && u !== o && (u != null || o != null))
      )
        if (c === "style")
          if (o) {
            for (a in o)
              !o.hasOwnProperty(a) ||
                (u && u.hasOwnProperty(a)) ||
                (r || (r = {}), (r[a] = ""));
            for (a in u)
              u.hasOwnProperty(a) &&
                o[a] !== u[a] &&
                (r || (r = {}), (r[a] = u[a]));
          } else r || (i || (i = []), i.push(c, r)), (r = u);
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (o = o ? o.__html : void 0),
              u != null && o !== u && (i = i || []).push(c, u))
            : c === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (i = i || []).push(c, "" + u)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (ln.hasOwnProperty(c)
                ? (u != null && c === "onScroll" && W("scroll", e),
                  i || o === u || (i = []))
                : (i = i || []).push(c, u));
    }
    r && (i = i || []).push("style", r);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Iu = function (e, t, r, s) {
  r !== s && (t.flags |= 4);
};
function Hr(e, t) {
  if (!G)
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
function me(e) {
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
function cm(e, t, r) {
  var s = t.pendingProps;
  switch ((Xi(t), t.tag)) {
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
      return me(t), null;
    case 1:
      return Ce(t.type) && ys(), me(t), null;
    case 3:
      return (
        (s = t.stateNode),
        Er(),
        q(Se),
        q(ge),
        ia(),
        s.pendingContext &&
          ((s.context = s.pendingContext), (s.pendingContext = null)),
        (e === null || e.child === null) &&
          (Qn(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ge !== null && (vi(Ge), (Ge = null)))),
        di(e, t),
        me(t),
        null
      );
    case 5:
      la(t);
      var l = Qt(yn.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        zu(e, t, r, s, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!s) {
          if (t.stateNode === null) throw Error(_(166));
          return me(t), null;
        }
        if (((e = Qt(st.current)), Qn(t))) {
          (s = t.stateNode), (r = t.type);
          var i = t.memoizedProps;
          switch (((s[rt] = t), (s[hn] = i), (e = (t.mode & 1) !== 0), r)) {
            case "dialog":
              W("cancel", s), W("close", s);
              break;
            case "iframe":
            case "object":
            case "embed":
              W("load", s);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Gr.length; l++) W(Gr[l], s);
              break;
            case "source":
              W("error", s);
              break;
            case "img":
            case "image":
            case "link":
              W("error", s), W("load", s);
              break;
            case "details":
              W("toggle", s);
              break;
            case "input":
              za(s, i), W("invalid", s);
              break;
            case "select":
              (s._wrapperState = { wasMultiple: !!i.multiple }),
                W("invalid", s);
              break;
            case "textarea":
              Pa(s, i), W("invalid", s);
          }
          $l(r, i), (l = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var o = i[a];
              a === "children"
                ? typeof o == "string"
                  ? s.textContent !== o &&
                    (i.suppressHydrationWarning !== !0 &&
                      Vn(s.textContent, o, e),
                    (l = ["children", o]))
                  : typeof o == "number" &&
                    s.textContent !== "" + o &&
                    (i.suppressHydrationWarning !== !0 &&
                      Vn(s.textContent, o, e),
                    (l = ["children", "" + o]))
                : ln.hasOwnProperty(a) &&
                  o != null &&
                  a === "onScroll" &&
                  W("scroll", s);
            }
          switch (r) {
            case "input":
              Rn(s), Ia(s, i, !0);
              break;
            case "textarea":
              Rn(s), Ma(s);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (s.onclick = xs);
          }
          (s = l), (t.updateQueue = s), s !== null && (t.flags |= 4);
        } else {
          (a = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ic(r)),
            e === "http://www.w3.org/1999/xhtml"
              ? r === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof s.is == "string"
                ? (e = a.createElement(r, { is: s.is }))
                : ((e = a.createElement(r)),
                  r === "select" &&
                    ((a = e),
                    s.multiple
                      ? (a.multiple = !0)
                      : s.size && (a.size = s.size)))
              : (e = a.createElementNS(e, r)),
            (e[rt] = t),
            (e[hn] = s),
            Tu(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Fl(r, s)), r)) {
              case "dialog":
                W("cancel", e), W("close", e), (l = s);
                break;
              case "iframe":
              case "object":
              case "embed":
                W("load", e), (l = s);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Gr.length; l++) W(Gr[l], e);
                l = s;
                break;
              case "source":
                W("error", e), (l = s);
                break;
              case "img":
              case "image":
              case "link":
                W("error", e), W("load", e), (l = s);
                break;
              case "details":
                W("toggle", e), (l = s);
                break;
              case "input":
                za(e, s), (l = Pl(e, s)), W("invalid", e);
                break;
              case "option":
                l = s;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!s.multiple }),
                  (l = J({}, s, { value: void 0 })),
                  W("invalid", e);
                break;
              case "textarea":
                Pa(e, s), (l = Rl(e, s)), W("invalid", e);
                break;
              default:
                l = s;
            }
            $l(r, l), (o = l);
            for (i in o)
              if (o.hasOwnProperty(i)) {
                var u = o[i];
                i === "style"
                  ? cc(e, u)
                  : i === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && ac(e, u))
                  : i === "children"
                  ? typeof u == "string"
                    ? (r !== "textarea" || u !== "") && an(e, u)
                    : typeof u == "number" && an(e, "" + u)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (ln.hasOwnProperty(i)
                      ? u != null && i === "onScroll" && W("scroll", e)
                      : u != null && Ri(e, i, u, a));
              }
            switch (r) {
              case "input":
                Rn(e), Ia(e, s, !1);
                break;
              case "textarea":
                Rn(e), Ma(e);
                break;
              case "option":
                s.value != null && e.setAttribute("value", "" + Lt(s.value));
                break;
              case "select":
                (e.multiple = !!s.multiple),
                  (i = s.value),
                  i != null
                    ? xr(e, !!s.multiple, i, !1)
                    : s.defaultValue != null &&
                      xr(e, !!s.multiple, s.defaultValue, !0);
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
      return me(t), null;
    case 6:
      if (e && t.stateNode != null) Iu(e, t, e.memoizedProps, s);
      else {
        if (typeof s != "string" && t.stateNode === null) throw Error(_(166));
        if (((r = Qt(yn.current)), Qt(st.current), Qn(t))) {
          if (
            ((s = t.stateNode),
            (r = t.memoizedProps),
            (s[rt] = t),
            (i = s.nodeValue !== r) && ((e = Ie), e !== null))
          )
            switch (e.tag) {
              case 3:
                Vn(s.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Vn(s.nodeValue, r, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (s = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(s)),
            (s[rt] = t),
            (t.stateNode = s);
      }
      return me(t), null;
    case 13:
      if (
        (q(Y),
        (s = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (G && ze !== null && t.mode & 1 && !(t.flags & 128))
          Kc(), Dr(), (t.flags |= 98560), (i = !1);
        else if (((i = Qn(t)), s !== null && s.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(_(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(_(317));
            i[rt] = t;
          } else
            Dr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          me(t), (i = !1);
        } else Ge !== null && (vi(Ge), (Ge = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((s = s !== null),
          s !== (e !== null && e.memoizedState !== null) &&
            s &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Y.current & 1 ? ie === 0 && (ie = 3) : ya())),
          t.updateQueue !== null && (t.flags |= 4),
          me(t),
          null);
    case 4:
      return (
        Er(), di(e, t), e === null && pn(t.stateNode.containerInfo), me(t), null
      );
    case 10:
      return ta(t.type._context), me(t), null;
    case 17:
      return Ce(t.type) && ys(), me(t), null;
    case 19:
      if ((q(Y), (i = t.memoizedState), i === null)) return me(t), null;
      if (((s = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (s) Hr(i, !1);
        else {
          if (ie !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Ss(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Hr(i, !1),
                    s = a.updateQueue,
                    s !== null && ((t.updateQueue = s), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    s = r,
                    r = t.child;
                  r !== null;

                )
                  (i = r),
                    (e = s),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling);
                return Q(Y, (Y.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ne() > zr &&
            ((t.flags |= 128), (s = !0), Hr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!s)
          if (((e = Ss(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (s = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              Hr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !a.alternate && !G)
            )
              return me(t), null;
          } else
            2 * ne() - i.renderingStartTime > zr &&
              r !== 1073741824 &&
              ((t.flags |= 128), (s = !0), Hr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((r = i.last),
            r !== null ? (r.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ne()),
          (t.sibling = null),
          (r = Y.current),
          Q(Y, s ? (r & 1) | 2 : r & 1),
          t)
        : (me(t), null);
    case 22:
    case 23:
      return (
        xa(),
        (s = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== s && (t.flags |= 8192),
        s && t.mode & 1
          ? Ee & 1073741824 && (me(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : me(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(_(156, t.tag));
}
function um(e, t) {
  switch ((Xi(t), t.tag)) {
    case 1:
      return (
        Ce(t.type) && ys(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Er(),
        q(Se),
        q(ge),
        ia(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return la(t), null;
    case 13:
      if ((q(Y), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(_(340));
        Dr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return q(Y), null;
    case 4:
      return Er(), null;
    case 10:
      return ta(t.type._context), null;
    case 22:
    case 23:
      return xa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Gn = !1,
  pe = !1,
  dm = typeof WeakSet == "function" ? WeakSet : Set,
  M = null;
function gr(e, t) {
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
function fi(e, t, r) {
  try {
    r();
  } catch (s) {
    te(e, t, s);
  }
}
var ko = !1;
function fm(e, t) {
  if (((Yl = ps), (e = Oc()), Yi(e))) {
    if ("selectionStart" in e)
      var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window;
        var s = r.getSelection && r.getSelection();
        if (s && s.rangeCount !== 0) {
          r = s.anchorNode;
          var l = s.anchorOffset,
            i = s.focusNode;
          s = s.focusOffset;
          try {
            r.nodeType, i.nodeType;
          } catch {
            r = null;
            break e;
          }
          var a = 0,
            o = -1,
            u = -1,
            c = 0,
            d = 0,
            f = e,
            g = null;
          t: for (;;) {
            for (
              var y;
              f !== r || (l !== 0 && f.nodeType !== 3) || (o = a + l),
                f !== i || (s !== 0 && f.nodeType !== 3) || (u = a + s),
                f.nodeType === 3 && (a += f.nodeValue.length),
                (y = f.firstChild) !== null;

            )
              (g = f), (f = y);
            for (;;) {
              if (f === e) break t;
              if (
                (g === r && ++c === l && (o = a),
                g === i && ++d === s && (u = a),
                (y = f.nextSibling) !== null)
              )
                break;
              (f = g), (g = f.parentNode);
            }
            f = y;
          }
          r = o === -1 || u === -1 ? null : { start: o, end: u };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (Kl = { focusedElem: e, selectionRange: r }, ps = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (M = e);
    else
      for (; M !== null; ) {
        t = M;
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
                  var x = v.memoizedProps,
                    z = v.memoizedState,
                    h = t.stateNode,
                    m = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : We(t.type, x),
                      z
                    );
                  h.__reactInternalSnapshotBeforeUpdate = m;
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
                throw Error(_(163));
            }
        } catch (w) {
          te(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (M = e);
          break;
        }
        M = t.return;
      }
  return (v = ko), (ko = !1), v;
}
function tn(e, t, r) {
  var s = t.updateQueue;
  if (((s = s !== null ? s.lastEffect : null), s !== null)) {
    var l = (s = s.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && fi(t, r, i);
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
function mi(e) {
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
function Pu(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Pu(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[rt], delete t[hn], delete t[Jl], delete t[Gf], delete t[Yf])),
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
function So(e) {
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
function pi(e, t, r) {
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
          r != null || t.onclick !== null || (t.onclick = xs));
  else if (s !== 4 && ((e = e.child), e !== null))
    for (pi(e, t, r), e = e.sibling; e !== null; ) pi(e, t, r), (e = e.sibling);
}
function gi(e, t, r) {
  var s = e.tag;
  if (s === 5 || s === 6)
    (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (s !== 4 && ((e = e.child), e !== null))
    for (gi(e, t, r), e = e.sibling; e !== null; ) gi(e, t, r), (e = e.sibling);
}
var ce = null,
  qe = !1;
function wt(e, t, r) {
  for (r = r.child; r !== null; ) Lu(e, t, r), (r = r.sibling);
}
function Lu(e, t, r) {
  if (nt && typeof nt.onCommitFiberUnmount == "function")
    try {
      nt.onCommitFiberUnmount(Ms, r);
    } catch {}
  switch (r.tag) {
    case 5:
      pe || gr(r, t);
    case 6:
      var s = ce,
        l = qe;
      (ce = null),
        wt(e, t, r),
        (ce = s),
        (qe = l),
        ce !== null &&
          (qe
            ? ((e = ce),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : ce.removeChild(r.stateNode));
      break;
    case 18:
      ce !== null &&
        (qe
          ? ((e = ce),
            (r = r.stateNode),
            e.nodeType === 8
              ? pl(e.parentNode, r)
              : e.nodeType === 1 && pl(e, r),
            dn(e))
          : pl(ce, r.stateNode));
      break;
    case 4:
      (s = ce),
        (l = qe),
        (ce = r.stateNode.containerInfo),
        (qe = !0),
        wt(e, t, r),
        (ce = s),
        (qe = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !pe &&
        ((s = r.updateQueue), s !== null && ((s = s.lastEffect), s !== null))
      ) {
        l = s = s.next;
        do {
          var i = l,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && fi(r, t, a),
            (l = l.next);
        } while (l !== s);
      }
      wt(e, t, r);
      break;
    case 1:
      if (
        !pe &&
        (gr(r, t),
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
      wt(e, t, r);
      break;
    case 21:
      wt(e, t, r);
      break;
    case 22:
      r.mode & 1
        ? ((pe = (s = pe) || r.memoizedState !== null), wt(e, t, r), (pe = s))
        : wt(e, t, r);
      break;
    default:
      wt(e, t, r);
  }
}
function Co(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new dm()),
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
        var i = e,
          a = t,
          o = a;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              (ce = o.stateNode), (qe = !1);
              break e;
            case 3:
              (ce = o.stateNode.containerInfo), (qe = !0);
              break e;
            case 4:
              (ce = o.stateNode.containerInfo), (qe = !0);
              break e;
          }
          o = o.return;
        }
        if (ce === null) throw Error(_(160));
        Lu(i, a, l), (ce = null), (qe = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (c) {
        te(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ru(t, e), (t = t.sibling);
}
function Ru(e, t) {
  var r = e.alternate,
    s = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Qe(t, e), et(e), s & 4)) {
        try {
          tn(3, e, e.return), Bs(3, e);
        } catch (x) {
          te(e, e.return, x);
        }
        try {
          tn(5, e, e.return);
        } catch (x) {
          te(e, e.return, x);
        }
      }
      break;
    case 1:
      Qe(t, e), et(e), s & 512 && r !== null && gr(r, r.return);
      break;
    case 5:
      if (
        (Qe(t, e),
        et(e),
        s & 512 && r !== null && gr(r, r.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          an(l, "");
        } catch (x) {
          te(e, e.return, x);
        }
      }
      if (s & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          a = r !== null ? r.memoizedProps : i,
          o = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            o === "input" && i.type === "radio" && i.name != null && sc(l, i),
              Fl(o, a);
            var c = Fl(o, i);
            for (a = 0; a < u.length; a += 2) {
              var d = u[a],
                f = u[a + 1];
              d === "style"
                ? cc(l, f)
                : d === "dangerouslySetInnerHTML"
                ? ac(l, f)
                : d === "children"
                ? an(l, f)
                : Ri(l, d, f, c);
            }
            switch (o) {
              case "input":
                Ml(l, i);
                break;
              case "textarea":
                lc(l, i);
                break;
              case "select":
                var g = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var y = i.value;
                y != null
                  ? xr(l, !!i.multiple, y, !1)
                  : g !== !!i.multiple &&
                    (i.defaultValue != null
                      ? xr(l, !!i.multiple, i.defaultValue, !0)
                      : xr(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[hn] = i;
          } catch (x) {
            te(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((Qe(t, e), et(e), s & 4)) {
        if (e.stateNode === null) throw Error(_(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (x) {
          te(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (Qe(t, e), et(e), s & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          dn(t.containerInfo);
        } catch (x) {
          te(e, e.return, x);
        }
      break;
    case 4:
      Qe(t, e), et(e);
      break;
    case 13:
      Qe(t, e),
        et(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (ga = ne())),
        s & 4 && Co(e);
      break;
    case 22:
      if (
        ((d = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((pe = (c = pe) || d), Qe(t, e), (pe = c)) : Qe(t, e),
        et(e),
        s & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (M = e, d = e.child; d !== null; ) {
            for (f = M = d; M !== null; ) {
              switch (((g = M), (y = g.child), g.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  tn(4, g, g.return);
                  break;
                case 1:
                  gr(g, g.return);
                  var v = g.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (s = g), (r = g.return);
                    try {
                      (t = s),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (x) {
                      te(s, r, x);
                    }
                  }
                  break;
                case 5:
                  gr(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    _o(f);
                    continue;
                  }
              }
              y !== null ? ((y.return = g), (M = y)) : _o(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                (l = f.stateNode),
                  c
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((o = f.stateNode),
                      (u = f.memoizedProps.style),
                      (a =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (o.style.display = oc("display", a)));
              } catch (x) {
                te(e, e.return, x);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (x) {
                te(e, e.return, x);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            d === f && (d = null), (f = f.return);
          }
          d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Qe(t, e), et(e), s & 4 && Co(e);
      break;
    case 21:
      break;
    default:
      Qe(t, e), et(e);
  }
}
function et(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (Mu(r)) {
            var s = r;
            break e;
          }
          r = r.return;
        }
        throw Error(_(160));
      }
      switch (s.tag) {
        case 5:
          var l = s.stateNode;
          s.flags & 32 && (an(l, ""), (s.flags &= -33));
          var i = So(e);
          gi(e, i, l);
          break;
        case 3:
        case 4:
          var a = s.stateNode.containerInfo,
            o = So(e);
          pi(e, o, a);
          break;
        default:
          throw Error(_(161));
      }
    } catch (u) {
      te(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function mm(e, t, r) {
  (M = e), Ou(e);
}
function Ou(e, t, r) {
  for (var s = (e.mode & 1) !== 0; M !== null; ) {
    var l = M,
      i = l.child;
    if (l.tag === 22 && s) {
      var a = l.memoizedState !== null || Gn;
      if (!a) {
        var o = l.alternate,
          u = (o !== null && o.memoizedState !== null) || pe;
        o = Gn;
        var c = pe;
        if (((Gn = a), (pe = u) && !c))
          for (M = l; M !== null; )
            (a = M),
              (u = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Eo(l)
                : u !== null
                ? ((u.return = a), (M = u))
                : Eo(l);
        for (; i !== null; ) (M = i), Ou(i), (i = i.sibling);
        (M = l), (Gn = o), (pe = c);
      }
      Do(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (M = i)) : Do(e);
  }
}
function Do(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              pe || Bs(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !pe)
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
              var i = t.updateQueue;
              i !== null && uo(t, i, s);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                uo(t, a, r);
              }
              break;
            case 5:
              var o = t.stateNode;
              if (r === null && t.flags & 4) {
                r = o;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && r.focus();
                    break;
                  case "img":
                    u.src && (r.src = u.src);
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
                  var d = c.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && dn(f);
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
              throw Error(_(163));
          }
        pe || (t.flags & 512 && mi(t));
      } catch (g) {
        te(t, t.return, g);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      (r.return = t.return), (M = r);
      break;
    }
    M = t.return;
  }
}
function _o(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      (r.return = t.return), (M = r);
      break;
    }
    M = t.return;
  }
}
function Eo(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            Bs(4, t);
          } catch (u) {
            te(t, r, u);
          }
          break;
        case 1:
          var s = t.stateNode;
          if (typeof s.componentDidMount == "function") {
            var l = t.return;
            try {
              s.componentDidMount();
            } catch (u) {
              te(t, l, u);
            }
          }
          var i = t.return;
          try {
            mi(t);
          } catch (u) {
            te(t, i, u);
          }
          break;
        case 5:
          var a = t.return;
          try {
            mi(t);
          } catch (u) {
            te(t, a, u);
          }
      }
    } catch (u) {
      te(t, t.return, u);
    }
    if (t === e) {
      M = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      (o.return = t.return), (M = o);
      break;
    }
    M = t.return;
  }
}
var pm = Math.ceil,
  _s = yt.ReactCurrentDispatcher,
  ma = yt.ReactCurrentOwner,
  Ae = yt.ReactCurrentBatchConfig,
  U = 0,
  oe = null,
  se = null,
  ue = 0,
  Ee = 0,
  hr = Ft(0),
  ie = 0,
  Nn = null,
  er = 0,
  Hs = 0,
  pa = 0,
  rn = null,
  be = null,
  ga = 0,
  zr = 1 / 0,
  it = null,
  Es = !1,
  hi = null,
  It = null,
  Yn = !1,
  Ct = null,
  Ts = 0,
  nn = 0,
  xi = null,
  is = -1,
  as = 0;
function xe() {
  return U & 6 ? ne() : is !== -1 ? is : (is = ne());
}
function Pt(e) {
  return e.mode & 1
    ? U & 2 && ue !== 0
      ? ue & -ue
      : Xf.transition !== null
      ? (as === 0 && (as = jc()), as)
      : ((e = B),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : _c(e.type))),
        e)
    : 1;
}
function Ke(e, t, r, s) {
  if (50 < nn) throw ((nn = 0), (xi = null), Error(_(185)));
  Dn(e, r, s),
    (!(U & 2) || e !== oe) &&
      (e === oe && (!(U & 2) && (Hs |= r), ie === 4 && kt(e, ue)),
      De(e, s),
      r === 1 && U === 0 && !(t.mode & 1) && ((zr = ne() + 500), Fs && At()));
}
function De(e, t) {
  var r = e.callbackNode;
  Kd(e, t);
  var s = ms(e, e === oe ? ue : 0);
  if (s === 0)
    r !== null && Oa(r), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = s & -s), e.callbackPriority !== t)) {
    if ((r != null && Oa(r), t === 1))
      e.tag === 0 ? Kf(To.bind(null, e)) : qc(To.bind(null, e)),
        Wf(function () {
          !(U & 6) && At();
        }),
        (r = null);
    else {
      switch (Nc(s)) {
        case 1:
          r = Ui;
          break;
        case 4:
          r = vc;
          break;
        case 16:
          r = fs;
          break;
        case 536870912:
          r = wc;
          break;
        default:
          r = fs;
      }
      r = Qu(r, $u.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = r);
  }
}
function $u(e, t) {
  if (((is = -1), (as = 0), U & 6)) throw Error(_(327));
  var r = e.callbackNode;
  if (Nr() && e.callbackNode !== r) return null;
  var s = ms(e, e === oe ? ue : 0);
  if (s === 0) return null;
  if (s & 30 || s & e.expiredLanes || t) t = zs(e, s);
  else {
    t = s;
    var l = U;
    U |= 2;
    var i = Au();
    (oe !== e || ue !== t) && ((it = null), (zr = ne() + 500), qt(e, t));
    do
      try {
        xm();
        break;
      } catch (o) {
        Fu(e, o);
      }
    while (!0);
    ea(),
      (_s.current = i),
      (U = l),
      se !== null ? (t = 0) : ((oe = null), (ue = 0), (t = ie));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Vl(e)), l !== 0 && ((s = l), (t = yi(e, l)))), t === 1)
    )
      throw ((r = Nn), qt(e, 0), kt(e, s), De(e, ne()), r);
    if (t === 6) kt(e, s);
    else {
      if (
        ((l = e.current.alternate),
        !(s & 30) &&
          !gm(l) &&
          ((t = zs(e, s)),
          t === 2 && ((i = Vl(e)), i !== 0 && ((s = i), (t = yi(e, i)))),
          t === 1))
      )
        throw ((r = Nn), qt(e, 0), kt(e, s), De(e, ne()), r);
      switch (((e.finishedWork = l), (e.finishedLanes = s), t)) {
        case 0:
        case 1:
          throw Error(_(345));
        case 2:
          Bt(e, be, it);
          break;
        case 3:
          if (
            (kt(e, s), (s & 130023424) === s && ((t = ga + 500 - ne()), 10 < t))
          ) {
            if (ms(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & s) !== s)) {
              xe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Zl(Bt.bind(null, e, be, it), t);
            break;
          }
          Bt(e, be, it);
          break;
        case 4:
          if ((kt(e, s), (s & 4194240) === s)) break;
          for (t = e.eventTimes, l = -1; 0 < s; ) {
            var a = 31 - Ye(s);
            (i = 1 << a), (a = t[a]), a > l && (l = a), (s &= ~i);
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
                : 1960 * pm(s / 1960)) - s),
            10 < s)
          ) {
            e.timeoutHandle = Zl(Bt.bind(null, e, be, it), s);
            break;
          }
          Bt(e, be, it);
          break;
        case 5:
          Bt(e, be, it);
          break;
        default:
          throw Error(_(329));
      }
    }
  }
  return De(e, ne()), e.callbackNode === r ? $u.bind(null, e) : null;
}
function yi(e, t) {
  var r = rn;
  return (
    e.current.memoizedState.isDehydrated && (qt(e, t).flags |= 256),
    (e = zs(e, t)),
    e !== 2 && ((t = be), (be = r), t !== null && vi(t)),
    e
  );
}
function vi(e) {
  be === null ? (be = e) : be.push.apply(be, e);
}
function gm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var s = 0; s < r.length; s++) {
          var l = r[s],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Xe(i(), l)) return !1;
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
function kt(e, t) {
  for (
    t &= ~pa,
      t &= ~Hs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - Ye(t),
      s = 1 << r;
    (e[r] = -1), (t &= ~s);
  }
}
function To(e) {
  if (U & 6) throw Error(_(327));
  Nr();
  var t = ms(e, 0);
  if (!(t & 1)) return De(e, ne()), null;
  var r = zs(e, t);
  if (e.tag !== 0 && r === 2) {
    var s = Vl(e);
    s !== 0 && ((t = s), (r = yi(e, s)));
  }
  if (r === 1) throw ((r = Nn), qt(e, 0), kt(e, t), De(e, ne()), r);
  if (r === 6) throw Error(_(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Bt(e, be, it),
    De(e, ne()),
    null
  );
}
function ha(e, t) {
  var r = U;
  U |= 1;
  try {
    return e(t);
  } finally {
    (U = r), U === 0 && ((zr = ne() + 500), Fs && At());
  }
}
function tr(e) {
  Ct !== null && Ct.tag === 0 && !(U & 6) && Nr();
  var t = U;
  U |= 1;
  var r = Ae.transition,
    s = B;
  try {
    if (((Ae.transition = null), (B = 1), e)) return e();
  } finally {
    (B = s), (Ae.transition = r), (U = t), !(U & 6) && At();
  }
}
function xa() {
  (Ee = hr.current), q(hr);
}
function qt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), Qf(r)), se !== null))
    for (r = se.return; r !== null; ) {
      var s = r;
      switch ((Xi(s), s.tag)) {
        case 1:
          (s = s.type.childContextTypes), s != null && ys();
          break;
        case 3:
          Er(), q(Se), q(ge), ia();
          break;
        case 5:
          la(s);
          break;
        case 4:
          Er();
          break;
        case 13:
          q(Y);
          break;
        case 19:
          q(Y);
          break;
        case 10:
          ta(s.type._context);
          break;
        case 22:
        case 23:
          xa();
      }
      r = r.return;
    }
  if (
    ((oe = e),
    (se = e = Mt(e.current, null)),
    (ue = Ee = t),
    (ie = 0),
    (Nn = null),
    (pa = Hs = er = 0),
    (be = rn = null),
    Vt !== null)
  ) {
    for (t = 0; t < Vt.length; t++)
      if (((r = Vt[t]), (s = r.interleaved), s !== null)) {
        r.interleaved = null;
        var l = s.next,
          i = r.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = l), (s.next = a);
        }
        r.pending = s;
      }
    Vt = null;
  }
  return e;
}
function Fu(e, t) {
  do {
    var r = se;
    try {
      if ((ea(), (ns.current = Ds), Cs)) {
        for (var s = Z.memoizedState; s !== null; ) {
          var l = s.queue;
          l !== null && (l.pending = null), (s = s.next);
        }
        Cs = !1;
      }
      if (
        ((Jt = 0),
        (ae = le = Z = null),
        (en = !1),
        (vn = 0),
        (ma.current = null),
        r === null || r.return === null)
      ) {
        (ie = 1), (Nn = t), (se = null);
        break;
      }
      e: {
        var i = e,
          a = r.return,
          o = r,
          u = t;
        if (
          ((t = ue),
          (o.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            d = o,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var g = d.alternate;
            g
              ? ((d.updateQueue = g.updateQueue),
                (d.memoizedState = g.memoizedState),
                (d.lanes = g.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var y = xo(a);
          if (y !== null) {
            (y.flags &= -257),
              yo(y, a, o, i, t),
              y.mode & 1 && ho(i, c, t),
              (t = y),
              (u = c);
            var v = t.updateQueue;
            if (v === null) {
              var x = new Set();
              x.add(u), (t.updateQueue = x);
            } else v.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              ho(i, c, t), ya();
              break e;
            }
            u = Error(_(426));
          }
        } else if (G && o.mode & 1) {
          var z = xo(a);
          if (z !== null) {
            !(z.flags & 65536) && (z.flags |= 256),
              yo(z, a, o, i, t),
              Zi(Tr(u, o));
            break e;
          }
        }
        (i = u = Tr(u, o)),
          ie !== 4 && (ie = 2),
          rn === null ? (rn = [i]) : rn.push(i),
          (i = a);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var h = Nu(i, u, t);
              co(i, h);
              break e;
            case 1:
              o = u;
              var m = i.type,
                p = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (It === null || !It.has(p))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var w = bu(i, o, t);
                co(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Bu(r);
    } catch (D) {
      (t = D), se === r && r !== null && (se = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function Au() {
  var e = _s.current;
  return (_s.current = Ds), e === null ? Ds : e;
}
function ya() {
  (ie === 0 || ie === 3 || ie === 2) && (ie = 4),
    oe === null || (!(er & 268435455) && !(Hs & 268435455)) || kt(oe, ue);
}
function zs(e, t) {
  var r = U;
  U |= 2;
  var s = Au();
  (oe !== e || ue !== t) && ((it = null), qt(e, t));
  do
    try {
      hm();
      break;
    } catch (l) {
      Fu(e, l);
    }
  while (!0);
  if ((ea(), (U = r), (_s.current = s), se !== null)) throw Error(_(261));
  return (oe = null), (ue = 0), ie;
}
function hm() {
  for (; se !== null; ) Uu(se);
}
function xm() {
  for (; se !== null && !Ud(); ) Uu(se);
}
function Uu(e) {
  var t = Vu(e.alternate, e, Ee);
  (e.memoizedProps = e.pendingProps),
    t === null ? Bu(e) : (se = t),
    (ma.current = null);
}
function Bu(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((r = um(r, t)), r !== null)) {
        (r.flags &= 32767), (se = r);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ie = 6), (se = null);
        return;
      }
    } else if (((r = cm(r, t, Ee)), r !== null)) {
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
function Bt(e, t, r) {
  var s = B,
    l = Ae.transition;
  try {
    (Ae.transition = null), (B = 1), ym(e, t, r, s);
  } finally {
    (Ae.transition = l), (B = s);
  }
  return null;
}
function ym(e, t, r, s) {
  do Nr();
  while (Ct !== null);
  if (U & 6) throw Error(_(327));
  r = e.finishedWork;
  var l = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(_(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = r.lanes | r.childLanes;
  if (
    (Xd(e, i),
    e === oe && ((se = oe = null), (ue = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      Yn ||
      ((Yn = !0),
      Qu(fs, function () {
        return Nr(), null;
      })),
    (i = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || i)
  ) {
    (i = Ae.transition), (Ae.transition = null);
    var a = B;
    B = 1;
    var o = U;
    (U |= 4),
      (ma.current = null),
      fm(e, r),
      Ru(r, e),
      $f(Kl),
      (ps = !!Yl),
      (Kl = Yl = null),
      (e.current = r),
      mm(r),
      Bd(),
      (U = o),
      (B = a),
      (Ae.transition = i);
  } else e.current = r;
  if (
    (Yn && ((Yn = !1), (Ct = e), (Ts = l)),
    (i = e.pendingLanes),
    i === 0 && (It = null),
    Qd(r.stateNode),
    De(e, ne()),
    t !== null)
  )
    for (s = e.onRecoverableError, r = 0; r < t.length; r++)
      (l = t[r]), s(l.value, { componentStack: l.stack, digest: l.digest });
  if (Es) throw ((Es = !1), (e = hi), (hi = null), e);
  return (
    Ts & 1 && e.tag !== 0 && Nr(),
    (i = e.pendingLanes),
    i & 1 ? (e === xi ? nn++ : ((nn = 0), (xi = e))) : (nn = 0),
    At(),
    null
  );
}
function Nr() {
  if (Ct !== null) {
    var e = Nc(Ts),
      t = Ae.transition,
      r = B;
    try {
      if (((Ae.transition = null), (B = 16 > e ? 16 : e), Ct === null))
        var s = !1;
      else {
        if (((e = Ct), (Ct = null), (Ts = 0), U & 6)) throw Error(_(331));
        var l = U;
        for (U |= 4, M = e.current; M !== null; ) {
          var i = M,
            a = i.child;
          if (M.flags & 16) {
            var o = i.deletions;
            if (o !== null) {
              for (var u = 0; u < o.length; u++) {
                var c = o[u];
                for (M = c; M !== null; ) {
                  var d = M;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      tn(8, d, i);
                  }
                  var f = d.child;
                  if (f !== null) (f.return = d), (M = f);
                  else
                    for (; M !== null; ) {
                      d = M;
                      var g = d.sibling,
                        y = d.return;
                      if ((Pu(d), d === c)) {
                        M = null;
                        break;
                      }
                      if (g !== null) {
                        (g.return = y), (M = g);
                        break;
                      }
                      M = y;
                    }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var x = v.child;
                if (x !== null) {
                  v.child = null;
                  do {
                    var z = x.sibling;
                    (x.sibling = null), (x = z);
                  } while (x !== null);
                }
              }
              M = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (M = a);
          else
            e: for (; M !== null; ) {
              if (((i = M), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    tn(9, i, i.return);
                }
              var h = i.sibling;
              if (h !== null) {
                (h.return = i.return), (M = h);
                break e;
              }
              M = i.return;
            }
        }
        var m = e.current;
        for (M = m; M !== null; ) {
          a = M;
          var p = a.child;
          if (a.subtreeFlags & 2064 && p !== null) (p.return = a), (M = p);
          else
            e: for (a = m; M !== null; ) {
              if (((o = M), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bs(9, o);
                  }
                } catch (D) {
                  te(o, o.return, D);
                }
              if (o === a) {
                M = null;
                break e;
              }
              var w = o.sibling;
              if (w !== null) {
                (w.return = o.return), (M = w);
                break e;
              }
              M = o.return;
            }
        }
        if (
          ((U = l), At(), nt && typeof nt.onPostCommitFiberRoot == "function")
        )
          try {
            nt.onPostCommitFiberRoot(Ms, e);
          } catch {}
        s = !0;
      }
      return s;
    } finally {
      (B = r), (Ae.transition = t);
    }
  }
  return !1;
}
function zo(e, t, r) {
  (t = Tr(r, t)),
    (t = Nu(e, t, 1)),
    (e = zt(e, t, 1)),
    (t = xe()),
    e !== null && (Dn(e, 1, t), De(e, t));
}
function te(e, t, r) {
  if (e.tag === 3) zo(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        zo(t, e, r);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof s.componentDidCatch == "function" &&
            (It === null || !It.has(s)))
        ) {
          (e = Tr(r, e)),
            (e = bu(t, e, 1)),
            (t = zt(t, e, 1)),
            (e = xe()),
            t !== null && (Dn(t, 1, e), De(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function vm(e, t, r) {
  var s = e.pingCache;
  s !== null && s.delete(t),
    (t = xe()),
    (e.pingedLanes |= e.suspendedLanes & r),
    oe === e &&
      (ue & r) === r &&
      (ie === 4 || (ie === 3 && (ue & 130023424) === ue && 500 > ne() - ga)
        ? qt(e, 0)
        : (pa |= r)),
    De(e, t);
}
function Hu(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Fn), (Fn <<= 1), !(Fn & 130023424) && (Fn = 4194304))
      : (t = 1));
  var r = xe();
  (e = pt(e, t)), e !== null && (Dn(e, t, r), De(e, r));
}
function wm(e) {
  var t = e.memoizedState,
    r = 0;
  t !== null && (r = t.retryLane), Hu(e, r);
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
      throw Error(_(314));
  }
  s !== null && s.delete(t), Hu(e, r);
}
var Vu;
Vu = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Se.current) ke = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return (ke = !1), om(e, t, r);
      ke = !!(e.flags & 131072);
    }
  else (ke = !1), G && t.flags & 1048576 && Gc(t, js, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var s = t.type;
      ls(e, t), (e = t.pendingProps);
      var l = Cr(t, ge.current);
      jr(t, r), (l = oa(null, t, s, e, l, r));
      var i = ca();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ce(s) ? ((i = !0), vs(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            na(t),
            (l.updater = Us),
            (t.stateNode = l),
            (l._reactInternals = t),
            li(t, s, e, r),
            (t = oi(null, t, s, !0, i, r)))
          : ((t.tag = 0), G && i && Ki(t), he(null, t, l, r), (t = t.child)),
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
            t = ai(null, t, s, e, r);
            break e;
          case 1:
            t = jo(null, t, s, e, r);
            break e;
          case 11:
            t = vo(null, t, s, e, r);
            break e;
          case 14:
            t = wo(null, t, s, We(s.type, e), r);
            break e;
        }
        throw Error(_(306, s, ""));
      }
      return t;
    case 0:
      return (
        (s = t.type),
        (l = t.pendingProps),
        (l = t.elementType === s ? l : We(s, l)),
        ai(e, t, s, l, r)
      );
    case 1:
      return (
        (s = t.type),
        (l = t.pendingProps),
        (l = t.elementType === s ? l : We(s, l)),
        jo(e, t, s, l, r)
      );
    case 3:
      e: {
        if ((Du(t), e === null)) throw Error(_(387));
        (s = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          eu(e, t),
          ks(t, s, null, r);
        var a = t.memoizedState;
        if (((s = a.element), i.isDehydrated))
          if (
            ((i = {
              element: s,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = Tr(Error(_(423)), t)), (t = No(e, t, s, r, l));
            break e;
          } else if (s !== l) {
            (l = Tr(Error(_(424)), t)), (t = No(e, t, s, r, l));
            break e;
          } else
            for (
              ze = Tt(t.stateNode.containerInfo.firstChild),
                Ie = t,
                G = !0,
                Ge = null,
                r = Zc(t, null, s, r),
                t.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((Dr(), s === l)) {
            t = gt(e, t, r);
            break e;
          }
          he(e, t, s, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        tu(t),
        e === null && ri(t),
        (s = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = l.children),
        Xl(s, l) ? (a = null) : i !== null && Xl(s, i) && (t.flags |= 32),
        Cu(e, t),
        he(e, t, a, r),
        t.child
      );
    case 6:
      return e === null && ri(t), null;
    case 13:
      return _u(e, t, r);
    case 4:
      return (
        sa(t, t.stateNode.containerInfo),
        (s = t.pendingProps),
        e === null ? (t.child = _r(t, null, s, r)) : he(e, t, s, r),
        t.child
      );
    case 11:
      return (
        (s = t.type),
        (l = t.pendingProps),
        (l = t.elementType === s ? l : We(s, l)),
        vo(e, t, s, l, r)
      );
    case 7:
      return he(e, t, t.pendingProps, r), t.child;
    case 8:
      return he(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return he(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (
          ((s = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (a = l.value),
          Q(Ns, s._currentValue),
          (s._currentValue = a),
          i !== null)
        )
          if (Xe(i.value, a)) {
            if (i.children === l.children && !Se.current) {
              t = gt(e, t, r);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var o = i.dependencies;
              if (o !== null) {
                a = i.child;
                for (var u = o.firstContext; u !== null; ) {
                  if (u.context === s) {
                    if (i.tag === 1) {
                      (u = ut(-1, r & -r)), (u.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        d === null
                          ? (u.next = u)
                          : ((u.next = d.next), (d.next = u)),
                          (c.pending = u);
                      }
                    }
                    (i.lanes |= r),
                      (u = i.alternate),
                      u !== null && (u.lanes |= r),
                      ni(i.return, r, t),
                      (o.lanes |= r);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(_(341));
                (a.lanes |= r),
                  (o = a.alternate),
                  o !== null && (o.lanes |= r),
                  ni(a, r, t),
                  (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        he(e, t, l.children, r), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (s = t.pendingProps.children),
        jr(t, r),
        (l = Ue(l)),
        (s = s(l)),
        (t.flags |= 1),
        he(e, t, s, r),
        t.child
      );
    case 14:
      return (
        (s = t.type),
        (l = We(s, t.pendingProps)),
        (l = We(s.type, l)),
        wo(e, t, s, l, r)
      );
    case 15:
      return ku(e, t, t.type, t.pendingProps, r);
    case 17:
      return (
        (s = t.type),
        (l = t.pendingProps),
        (l = t.elementType === s ? l : We(s, l)),
        ls(e, t),
        (t.tag = 1),
        Ce(s) ? ((e = !0), vs(t)) : (e = !1),
        jr(t, r),
        ju(t, s, l),
        li(t, s, l, r),
        oi(null, t, s, !0, e, r)
      );
    case 19:
      return Eu(e, t, r);
    case 22:
      return Su(e, t, r);
  }
  throw Error(_(156, t.tag));
};
function Qu(e, t) {
  return yc(e, t);
}
function Nm(e, t, r, s) {
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
function Fe(e, t, r, s) {
  return new Nm(e, t, r, s);
}
function va(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function bm(e) {
  if (typeof e == "function") return va(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === $i)) return 11;
    if (e === Fi) return 14;
  }
  return 2;
}
function Mt(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = Fe(e.tag, t, e.key, e.mode)),
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
function os(e, t, r, s, l, i) {
  var a = 2;
  if (((s = e), typeof e == "function")) va(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case ir:
        return Gt(r.children, l, i, t);
      case Oi:
        (a = 8), (l |= 8);
        break;
      case El:
        return (
          (e = Fe(12, r, t, l | 2)), (e.elementType = El), (e.lanes = i), e
        );
      case Tl:
        return (e = Fe(13, r, t, l)), (e.elementType = Tl), (e.lanes = i), e;
      case zl:
        return (e = Fe(19, r, t, l)), (e.elementType = zl), (e.lanes = i), e;
      case tc:
        return Vs(r, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Jo:
              a = 10;
              break e;
            case ec:
              a = 9;
              break e;
            case $i:
              a = 11;
              break e;
            case Fi:
              a = 14;
              break e;
            case jt:
              (a = 16), (s = null);
              break e;
          }
        throw Error(_(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Fe(a, r, t, l)), (t.elementType = e), (t.type = s), (t.lanes = i), t
  );
}
function Gt(e, t, r, s) {
  return (e = Fe(7, e, s, t)), (e.lanes = r), e;
}
function Vs(e, t, r, s) {
  return (
    (e = Fe(22, e, s, t)),
    (e.elementType = tc),
    (e.lanes = r),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Nl(e, t, r) {
  return (e = Fe(6, e, null, t)), (e.lanes = r), e;
}
function bl(e, t, r) {
  return (
    (t = Fe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function km(e, t, r, s, l) {
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
    (this.mutableSourceEagerHydrationData = null);
}
function wa(e, t, r, s, l, i, a, o, u) {
  return (
    (e = new km(e, t, r, o, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Fe(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: s,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    na(i),
    e
  );
}
function Sm(e, t, r) {
  var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: lr,
    key: s == null ? null : "" + s,
    children: e,
    containerInfo: t,
    implementation: r,
  };
}
function Wu(e) {
  if (!e) return Rt;
  e = e._reactInternals;
  e: {
    if (nr(e) !== e || e.tag !== 1) throw Error(_(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ce(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(_(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (Ce(r)) return Wc(e, r, t);
  }
  return t;
}
function qu(e, t, r, s, l, i, a, o, u) {
  return (
    (e = wa(r, s, !0, e, l, i, a, o, u)),
    (e.context = Wu(null)),
    (r = e.current),
    (s = xe()),
    (l = Pt(r)),
    (i = ut(s, l)),
    (i.callback = t ?? null),
    zt(r, i, l),
    (e.current.lanes = l),
    Dn(e, l, s),
    De(e, s),
    e
  );
}
function Qs(e, t, r, s) {
  var l = t.current,
    i = xe(),
    a = Pt(l);
  return (
    (r = Wu(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = ut(i, a)),
    (t.payload = { element: e }),
    (s = s === void 0 ? null : s),
    s !== null && (t.callback = s),
    (e = zt(l, t, a)),
    e !== null && (Ke(e, l, a, i), rs(e, l, a)),
    a
  );
}
function Is(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Io(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function ja(e, t) {
  Io(e, t), (e = e.alternate) && Io(e, t);
}
function Cm() {
  return null;
}
var Gu =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Na(e) {
  this._internalRoot = e;
}
Ws.prototype.render = Na.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(_(409));
  Qs(e, t, null, null);
};
Ws.prototype.unmount = Na.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    tr(function () {
      Qs(null, e, null, null);
    }),
      (t[mt] = null);
  }
};
function Ws(e) {
  this._internalRoot = e;
}
Ws.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Sc();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < bt.length && t !== 0 && t < bt[r].priority; r++);
    bt.splice(r, 0, e), r === 0 && Dc(e);
  }
};
function ba(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function qs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Po() {}
function Dm(e, t, r, s, l) {
  if (l) {
    if (typeof s == "function") {
      var i = s;
      s = function () {
        var c = Is(a);
        i.call(c);
      };
    }
    var a = qu(t, s, e, 0, null, !1, !1, "", Po);
    return (
      (e._reactRootContainer = a),
      (e[mt] = a.current),
      pn(e.nodeType === 8 ? e.parentNode : e),
      tr(),
      a
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof s == "function") {
    var o = s;
    s = function () {
      var c = Is(u);
      o.call(c);
    };
  }
  var u = wa(e, 0, !1, null, null, !1, !1, "", Po);
  return (
    (e._reactRootContainer = u),
    (e[mt] = u.current),
    pn(e.nodeType === 8 ? e.parentNode : e),
    tr(function () {
      Qs(t, u, r, s);
    }),
    u
  );
}
function Gs(e, t, r, s, l) {
  var i = r._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof l == "function") {
      var o = l;
      l = function () {
        var u = Is(a);
        o.call(u);
      };
    }
    Qs(t, a, e, l);
  } else a = Dm(r, t, e, l, s);
  return Is(a);
}
bc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = qr(t.pendingLanes);
        r !== 0 &&
          (Bi(t, r | 1), De(t, ne()), !(U & 6) && ((zr = ne() + 500), At()));
      }
      break;
    case 13:
      tr(function () {
        var s = pt(e, 1);
        if (s !== null) {
          var l = xe();
          Ke(s, e, 1, l);
        }
      }),
        ja(e, 1);
  }
};
Hi = function (e) {
  if (e.tag === 13) {
    var t = pt(e, 134217728);
    if (t !== null) {
      var r = xe();
      Ke(t, e, 134217728, r);
    }
    ja(e, 134217728);
  }
};
kc = function (e) {
  if (e.tag === 13) {
    var t = Pt(e),
      r = pt(e, t);
    if (r !== null) {
      var s = xe();
      Ke(r, e, t, s);
    }
    ja(e, t);
  }
};
Sc = function () {
  return B;
};
Cc = function (e, t) {
  var r = B;
  try {
    return (B = e), t();
  } finally {
    B = r;
  }
};
Ul = function (e, t, r) {
  switch (t) {
    case "input":
      if ((Ml(e, r), (t = r.name), r.type === "radio" && t != null)) {
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
            if (!l) throw Error(_(90));
            nc(s), Ml(s, l);
          }
        }
      }
      break;
    case "textarea":
      lc(e, r);
      break;
    case "select":
      (t = r.value), t != null && xr(e, !!r.multiple, t, !1);
  }
};
fc = ha;
mc = tr;
var _m = { usingClientEntryPoint: !1, Events: [En, ur, $s, uc, dc, ha] },
  Vr = {
    findFiberByHostInstance: Ht,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Em = {
    bundleType: Vr.bundleType,
    version: Vr.version,
    rendererPackageName: Vr.rendererPackageName,
    rendererConfig: Vr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: yt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = hc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Vr.findFiberByHostInstance || Cm,
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
      (Ms = Kn.inject(Em)), (nt = Kn);
    } catch {}
}
Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _m;
Le.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ba(t)) throw Error(_(200));
  return Sm(e, t, null, r);
};
Le.createRoot = function (e, t) {
  if (!ba(e)) throw Error(_(299));
  var r = !1,
    s = "",
    l = Gu;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = wa(e, 1, !1, null, null, r, !1, s, l)),
    (e[mt] = t.current),
    pn(e.nodeType === 8 ? e.parentNode : e),
    new Na(t)
  );
};
Le.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(_(188))
      : ((e = Object.keys(e).join(",")), Error(_(268, e)));
  return (e = hc(t)), (e = e === null ? null : e.stateNode), e;
};
Le.flushSync = function (e) {
  return tr(e);
};
Le.hydrate = function (e, t, r) {
  if (!qs(t)) throw Error(_(200));
  return Gs(null, e, t, !0, r);
};
Le.hydrateRoot = function (e, t, r) {
  if (!ba(e)) throw Error(_(405));
  var s = (r != null && r.hydratedSources) || null,
    l = !1,
    i = "",
    a = Gu;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (l = !0),
      r.identifierPrefix !== void 0 && (i = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (a = r.onRecoverableError)),
    (t = qu(t, null, e, 1, r ?? null, l, !1, i, a)),
    (e[mt] = t.current),
    pn(e),
    s)
  )
    for (e = 0; e < s.length; e++)
      (r = s[e]),
        (l = r._getVersion),
        (l = l(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, l])
          : t.mutableSourceEagerHydrationData.push(r, l);
  return new Ws(t);
};
Le.render = function (e, t, r) {
  if (!qs(t)) throw Error(_(200));
  return Gs(null, e, t, !1, r);
};
Le.unmountComponentAtNode = function (e) {
  if (!qs(e)) throw Error(_(40));
  return e._reactRootContainer
    ? (tr(function () {
        Gs(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[mt] = null);
        });
      }),
      !0)
    : !1;
};
Le.unstable_batchedUpdates = ha;
Le.unstable_renderSubtreeIntoContainer = function (e, t, r, s) {
  if (!qs(r)) throw Error(_(200));
  if (e == null || e._reactInternals === void 0) throw Error(_(38));
  return Gs(e, t, r, !1, s);
};
Le.version = "18.3.1-next-f1338f8080-20240426";
function Yu() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yu);
    } catch (e) {
      console.error(e);
    }
}
Yu(), (Yo.exports = Le);
var Tm = Yo.exports,
  Ku,
  Mo = Tm;
(Ku = Mo.createRoot), Mo.hydrateRoot;
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
 */ const Im = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  H = (e, t) => {
    const r = N.forwardRef(
      (
        {
          color: s = "currentColor",
          size: l = 24,
          strokeWidth: i = 2,
          absoluteStrokeWidth: a,
          className: o = "",
          children: u,
          ...c
        },
        d
      ) =>
        N.createElement(
          "svg",
          {
            ref: d,
            ...zm,
            width: l,
            height: l,
            stroke: s,
            strokeWidth: a ? (Number(i) * 24) / Number(l) : i,
            className: ["lucide", `lucide-${Im(e)}`, o].join(" "),
            ...c,
          },
          [
            ...t.map(([f, g]) => N.createElement(f, g)),
            ...(Array.isArray(u) ? u : [u]),
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
 */ const Je = H("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wi = H("AlertTriangle", [
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
 */ const Xu = H("Archive", [
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
 */ const ji = H("BellOff", [
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
 */ const Ni = H("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zu = H("Building2", [
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
 */ const Ju = H("Building", [
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
 */ const Ys = H("Calendar", [
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
 */ const bn = H("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zn = H("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yt = H("FileText", [
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
 */ const Pm = H("Globe", [
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
 */ const ht = H("History", [
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
 */ const kl = H("Layers", [
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
 */ const ed = H("Maximize2", [
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
 */ const Lm = H("Maximize", [
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
 */ const sn = H("Megaphone", [
  ["path", { d: "m3 11 18-5v12L3 14v-3z", key: "n962bs" }],
  ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6", key: "1yl0tm" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rm = H("Move", [
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
 */ const Me = H("Package", [
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
 */ const xt = H("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const br = H("RefreshCw", [
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
 */ const kn = H("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sn = H("Settings", [
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
 */ const Ir = H("SquarePen", [
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
 */ const dt = H("Trash2", [
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
 */ const Kt = H("Truck", [
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
 */ const Ks = H("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ze = H("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Om = {
    zh: {
      "app.title": "戰情白板",
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
  td = N.createContext(void 0),
  $m = ({ children: e }) => {
    const [t, r] = N.useState("zh"),
      s = () => {
        r((i) => (i === "zh" ? "en" : "zh"));
      },
      l = (i, a) => {
        let o = Om[t][i] || i;
        return (
          a &&
            Object.entries(a).forEach(([u, c]) => {
              o = o.replace(`{${u}}`, c.toString());
            }),
          o
        );
      };
    return n.jsx(td.Provider, {
      value: { language: t, toggleLanguage: s, t: l },
      children: e,
    });
  },
  Rr = () => {
    const e = N.useContext(td);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  };
let Wt = null;
const rd = async () => {
    if (Wt) return Wt;
    try {
      const e = await fetch("../config.txt");
      if (!e.ok) throw new Error("Failed to load configuration");
      return (Wt = await e.json()), Wt;
    } catch (e) {
      throw (console.error("Error loading config:", e), e);
    }
  },
  Fm = (e) => {
    if (!Wt) throw new Error("Configuration not loaded");
    return `${Wt.domain}${e}`;
  },
  Sl = () => Wt,
  re = async (e, t = {}) => {
    let r;
    try {
      r = Fm(e);
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
        i = await l.text();
      let a;
      try {
        a = JSON.parse(i);
      } catch (o) {
        throw (
          (console.error("Failed to parse response as JSON:", o),
          new Error("伺服器回應格式錯誤，請稍後再試"))
        );
      }
      if ((console.log("Response:", a), console.groupEnd(), !l.ok))
        throw new Error(`伺服器錯誤 (${l.status})`);
      return a;
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
  Am = async (e) =>
    await re("/api/session/login", { method: "POST", body: { Data: e } }),
  Um = (e) => (
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
  Hm = () => !!In(),
  Cl = () => {
    const { t: e } = Rr();
    return n.jsxs("button", {
      onClick: Bm,
      className:
        "inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      children: [n.jsx(Mm, { className: "h-4 w-4 mr-2" }), e("logout")],
    });
  },
  Dl = () => {
    const { language: e, toggleLanguage: t } = Rr();
    return n.jsxs("button", {
      onClick: t,
      className:
        "inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      children: [
        n.jsx(Pm, { className: "h-4 w-4 mr-2" }),
        e === "zh" ? "繁體中文" : "English",
      ],
    });
  },
  Vm = async () =>
    await re("/api/controlpanel/get_by_startendtime_bbs", {
      method: "POST",
      body: {},
    }),
  Qm = (e) =>
    e.map((t, r) => ({
      id: t.GUID || `bulletin-${r}`,
      title: t.title || "無標題",
      content: t.content || "無內容",
      priority: Xm(t.priority || "medium"),
      publishDate: Km(t.created_time) || new Date().toISOString(),
      author:
        `${t.creator_dept || ""} ${t.creator_name || ""}`.trim() ||
        "系統管理員",
    })),
  Wm = async (e) => {
    await re("/api/controlpanel/add", { method: "POST", body: { Data: e } });
  },
  qm = async () =>
    await re("/api/controlpanel/get_bbs", { method: "POST", body: {} }),
  Gm = async (e) => {
    await re("/api/controlpanel/update", { method: "POST", body: { Data: e } });
  },
  Ym = async (e) => {
    await re("/api/controlpanel/delete", {
      method: "POST",
      body: { Data: { GUID: e } },
    });
  },
  Km = (e) => {
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
  Xm = (e) =>
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
    await re("/api/med_page/get_med_cloud", { method: "POST", body: {} }),
  Ot = (e) => {
    const t = e.getFullYear(),
      r = String(e.getMonth() + 1).padStart(2, "0"),
      s = String(e.getDate()).padStart(2, "0"),
      l = String(e.getHours()).padStart(2, "0"),
      i = String(e.getMinutes()).padStart(2, "0"),
      a = String(e.getSeconds()).padStart(2, "0");
    return `${t}-${r}-${s} ${l}:${i}:${a}`;
  },
  Zm = async () => {
    const e = new Date(),
      t = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0),
      r = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59);
    return await re("/api/drugStotreDistribution/get_by_addedTime", {
      method: "POST",
      body: { ValueAry: [Ot(t), Ot(r)] },
    });
  },
  Jm = async () => {
    const e = new Date(),
      t = new Date(e.getFullYear(), e.getMonth() - 1, e.getDate(), 0, 0, 0),
      r = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59);
    return await re("/api/inspection/content_get_by_addTime", {
      method: "POST",
      body: { ValueAry: [Ot(t), Ot(r)] },
    });
  },
  e0 = async () => {
    const e = new Date(),
      t = new Date(e.getFullYear(), e.getMonth() - 1, e.getDate(), 0, 0, 0),
      r = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59);
    return await re("/api/inspection/content_get_by_addTime", {
      method: "POST",
      body: { ValueAry: [Ot(t), Ot(r)] },
    });
  },
  t0 = async () =>
    await re("/api/controlpanel/get_by_startendtime_MedNotice", {
      method: "POST",
      body: {},
    }),
  r0 = async () =>
    await re("/api/controlpanel/get_MedNotice", { method: "POST", body: {} }),
  n0 = async (e) =>
    await re("/api/controlpanel/add", { method: "POST", body: { Data: e } }),
  s0 = async (e) =>
    await re("/api/controlpanel/update", { method: "POST", body: { Data: e } }),
  l0 = async (e) =>
    await re("/api/controlpanel/delete", {
      method: "POST",
      body: { Data: { GUID: e } },
    }),
  i0 = async () =>
    await re("/api/controlpanel/get_by_startendtime_out_of_stock", {
      method: "POST",
      body: {},
    }),
  a0 = async () =>
    await re("/api/controlpanel/get_out_of_stock", {
      method: "POST",
      body: {},
    }),
  o0 = async (e) =>
    await re("/api/controlpanel/add", { method: "POST", body: { Data: e } }),
  c0 = async (e) =>
    await re("/api/controlpanel/update", { method: "POST", body: { Data: e } }),
  u0 = async (e) =>
    await re("/api/controlpanel/delete", {
      method: "POST",
      body: { Data: { GUID: e } },
    }),
  d0 = (e) =>
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
  f0 = (e) =>
    e
      .map((t) => {
        const s = (t.Sub_content || [])
          .filter((l) => l.STATE != "已鎖定")
          .reduce((l, i) => {
            const a = parseFloat(i.END_QTY) || 0;
            return l + a;
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
  m0 = (e) => {
    const t = new Date(),
      r = new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0),
      s = new Date(t.getFullYear(), t.getMonth(), t.getDate(), 23, 59, 59);
    return e
      .map((l) => {
        const a = (l.Sub_content || [])
          .filter((o) => {
            if (o.STATE !== "已鎖定") return !1;
            try {
              const u = new Date(o.OP_TIME.replace(/\//g, "-"));
              return u >= r && u <= s;
            } catch {
              return !1;
            }
          })
          .reduce((o, u) => {
            const c = parseFloat(u.END_QTY) || 0;
            return +o + +c;
          }, 0);
        return {
          id: l.GUID || "",
          code: l.CODE || "",
          name: l.NAME || "",
          quantity: a,
          supplier: l.BRD || "",
          priority: a > 0 ? "medium" : "low",
        };
      })
      .filter((l) => l.quantity > 0);
  },
  p0 = (e) =>
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
  g0 = async () =>
    await re("/api/medmap/get_stock", { method: "POST", body: {} }),
  h0 = (e) =>
    e.map((t) => {
      const r = t.qty || [],
        s = r.reduce((l, i) => l + (parseInt(i) || 0), 0);
      return {
        id: t.GUID || "",
        code: t.code || "",
        name: t.name || "",
        qty: r,
        lot: t.lot || [],
        expiry_date: t.expiry_date || [],
        totalQuantity: s,
        batchCount: (t.lot || []).length,
      };
    }),
  x0 = async () => {
    const e = new Date(),
      t = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0),
      r = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59);
    return await re("/api/materialRequisition/get_by_requestTime", {
      method: "POST",
      body: { ValueAry: [Ot(t), Ot(r)] },
    });
  },
  y0 = (e) =>
    e.map((t) => ({
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
  v0 = (e) =>
    e.map((t, r) => {
      var o, u;
      const s = (t.content || "").split(";"),
        l = ((o = s[0]) == null ? void 0 : o.trim()) || "未知原藥品",
        i = ((u = s[1]) == null ? void 0 : u.trim()) || "未知替換藥品";
      let a;
      try {
        const c = t.created_time.replace(/\//g, "-");
        a = new Date(c).toISOString();
      } catch (c) {
        console.error("Error parsing created_time:", t.created_time, c),
          (a = new Date().toISOString());
      }
      return {
        id: t.GUID || `drug-replacement-${r}`,
        originalDrug: l,
        replacementDrug: i,
        reason: t.note || "無原因說明",
        effectiveDate: a,
        affectedDepartments: [],
        instructions: "",
        priority: "medium",
      };
    }),
  w0 = (e) =>
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
        i = new Date(s.getFullYear(), s.getMonth(), s.getDate()),
        a = new Date(l.getFullYear(), l.getMonth(), l.getDate()),
        o = a.getTime() - i.getTime(),
        u = Math.floor(o / (1e3 * 60 * 60 * 24));
      console.log("Out of stock calculation:", {
        originalTime: t.created_time,
        parsedDate: s,
        createdDateOnly: i,
        nowDateOnly: a,
        diffDays: u,
      });
      let c = "procurement_in_progress";
      return (
        t.priority === "Critical"
          ? (c = "urgent_order")
          : t.priority === "Important"
          ? (c = "procurement_in_progress")
          : (c = "supplier_contacted"),
        {
          id: t.GUID || `out-of-stock-${r}`,
          drugName: t.content || "未知藥品",
          departmentAffected: [],
          status: c,
          lastStockDate: s.toISOString(),
          estimatedRestockDate: void 0,
        }
      );
    }),
  j0 = async () => {
    await new Promise((c) => setTimeout(c, 500));
    let e = [];
    try {
      const c = await Vm();
      c.Code === 200 && c.Data
        ? (e = Qm(c.Data))
        : console.warn("Failed to fetch bulletin data, using mock data");
    } catch (c) {
      console.error("Error fetching bulletin data:", c);
    }
    let t = [];
    try {
      const c = await t0();
      console.log("Drug replacement API response:", c),
        c.Code === 200 && c.Data
          ? ((t = v0(c.Data)),
            console.log("Transformed drug replacement items:", t))
          : (console.warn(
              "Failed to fetch drug replacement data, using mock data. Response:",
              c
            ),
            (t = Ro()));
    } catch (c) {
      console.error(
        "Error fetching drug replacement data, using mock data:",
        c
      ),
        (t = Ro());
    }
    let r = [];
    try {
      const c = await i0();
      console.log("Out of stock API response:", c),
        c.Code === 200 && c.Data
          ? ((r = w0(c.Data)),
            console.log("Transformed out of stock items:", r))
          : (console.warn(
              "Failed to fetch out of stock data, using mock data. Response:",
              c
            ),
            (r = Lo()));
    } catch (c) {
      console.error("Error fetching out of stock data, using mock data:", c),
        (r = Lo());
    }
    let s = [];
    try {
      const c = await Zm();
      console.log("Restock tasks API response:", c),
        c.Code === 200 && c.Data
          ? ((s = d0(c.Data)), console.log("Transformed restock tasks:", s))
          : console.warn("Failed to fetch restock tasks data. Response:", c);
    } catch (c) {
      console.error("Error fetching restock tasks data:", c);
    }
    let l = [],
      i = [];
    try {
      const c = await e0();
      console.log("Receiving and PutAway API response:", c),
        c.Code === 200 && c.Data
          ? ((l = f0(c.Data)),
            (i = m0(c.Data)),
            console.log("Transformed receiving tasks:", l),
            console.log("Transformed putaway tasks:", i))
          : console.warn(
              "Failed to fetch receiving and putaway tasks data. Response:",
              c
            );
    } catch (c) {
      console.error("Error fetching receiving and putaway tasks data:", c);
    }
    let a = [];
    try {
      const c = await x0();
      console.log("Internal requests API response:", c),
        c.Code === 200 && c.Data
          ? ((a = y0(c.Data)), console.log("Transformed internal requests:", a))
          : console.warn(
              "Failed to fetch internal requests data. Response:",
              c
            );
    } catch (c) {
      console.error("Error fetching internal requests data:", c);
    }
    let o = [];
    try {
      const c = await Jm();
      console.log("Incoming drugs API response:", c),
        c.Code === 200 && c.Data
          ? ((o = p0(c.Data)), console.log("Transformed incoming drugs:", o))
          : console.warn("Failed to fetch incoming drugs data. Response:", c);
    } catch (c) {
      console.error("Error fetching incoming drugs data:", c);
    }
    let u = [];
    try {
      const c = await g0();
      console.log("Stock information API response:", c),
        c.Code === 200 && c.Data
          ? ((u = h0(c.Data)),
            console.log("Transformed inventory highlights:", u))
          : console.warn(
              "Failed to fetch stock information data. Response:",
              c
            );
    } catch (c) {
      console.error("Error fetching stock information data:", c);
    }
    return {
      bulletins: e,
      restockTasks: s,
      receivingTasks: l,
      putAwayTasks: i,
      incomingDrugs: o,
      outOfStockItems: r,
      drugReplacements: t,
      inventoryHighlights: u,
      internalRequests: a,
      lastUpdated: new Date().toISOString(),
    };
  },
  Lo = () => [
    {
      id: "o1",
      drugName: "Losartan 50mg",
      departmentAffected: [],
      status: "procurement_in_progress",
      lastStockDate: "2025-01-25T00:00:00",
      estimatedRestockDate: void 0,
    },
    {
      id: "o2",
      drugName: "Morphine 10mg/ml",
      departmentAffected: [],
      status: "urgent_order",
      lastStockDate: "2025-01-26T00:00:00",
      estimatedRestockDate: void 0,
    },
    {
      id: "o3",
      drugName: "Digoxin 0.25mg",
      departmentAffected: [],
      status: "alternative_available",
      lastStockDate: "2025-01-24T00:00:00",
      estimatedRestockDate: void 0,
    },
  ],
  Ro = () => [
    {
      id: "d1",
      originalDrug: "Brand A Metformin 500mg",
      replacementDrug: "Brand B Metformin 500mg",
      reason: "原廠停產",
      effectiveDate: "2025-02-01T00:00:00",
      affectedDepartments: [],
      instructions: "",
      priority: "medium",
    },
    {
      id: "d2",
      originalDrug: "Clopidogrel 75mg (原廠)",
      replacementDrug: "Clopidogrel 75mg (學名藥)",
      reason: "成本考量",
      effectiveDate: "2025-01-30T00:00:00",
      affectedDepartments: [],
      instructions: "",
      priority: "low",
    },
  ],
  P = {
    title: "text-[32px] fhd:text-[32px] qhd:text-[48px] uhd:text-[64px]",
    subTitle: "text-[20px] fhd:text-[20px] qhd:text-[32px] uhd:text-[48px]",
    content: "text-[16px] fhd:text-[16px] qhd:text-[24px] uhd:text-[32px]",
    smallLabel: "text-[14px] fhd:text-[14px] qhd:text-[20px] uhd:text-[24px]",
  },
  K = {
    small: "uhd:w-5 uhd:h-5 qhd:w-4 qhd:h-4",
    medium: "uhd:w-6 uhd:h-6 qhd:w-5 qhd:h-5",
    large: "uhd:w-8 uhd:h-8 qhd:w-6 qhd:h-6",
    xlarge: "uhd:w-10 uhd:h-10 qhd:w-8 qhd:h-8",
  },
  N0 = () => ({
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
  b0 = () => ({
    bulletins: !0,
    tasks: !0,
    incomingDrugs: !0,
    outOfStock: !0,
    drugReplacements: !0,
    inventory: !0,
    internalRequests: !0,
  }),
  k0 = () => {
    try {
      const e = localStorage.getItem("section_grid_position");
      if (e) {
        const t = JSON.parse(e);
        if (D0(t)) return t;
      }
    } catch (e) {
      console.error("Error loading grid config:", e);
    }
    return N0();
  },
  S0 = () => {
    try {
      const e = localStorage.getItem("section_visibility");
      if (e) {
        const t = JSON.parse(e);
        if (_0(t)) return t;
      }
    } catch (e) {
      console.error("Error loading section visibility:", e);
    }
    return b0();
  },
  Oo = (e) => {
    try {
      localStorage.setItem("section_grid_position", JSON.stringify(e));
    } catch (t) {
      console.error("Error saving grid config:", t);
    }
  },
  C0 = (e) => {
    try {
      localStorage.setItem("section_visibility", JSON.stringify(e));
    } catch (t) {
      console.error("Error saving section visibility:", t);
    }
  },
  D0 = (e) => {
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
  _0 = (e) => {
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
  je = (e, t) => {
    const r = e.master_row + 1,
      s = e.master_col + 1,
      l = r + t.row,
      i = s + t.col;
    return `${r} / ${s} / ${l} / ${i}`;
  },
  Ne = ({
    children: e,
    sectionKey: t,
    gridData: r,
    onPositionChange: s,
    onSizeChange: l,
    gridArea: i,
  }) => {
    const [a, o] = N.useState(!1),
      [u, c] = N.useState(!1),
      [d, f] = N.useState(null),
      [g, y] = N.useState(null),
      v = N.useRef(null),
      x = N.useCallback(
        (p) => {
          p.preventDefault(),
            p.stopPropagation(),
            o(!0),
            f({
              x: p.clientX,
              y: p.clientY,
              startRow: r.position.master_row,
              startCol: r.position.master_col,
            });
        },
        [r.position]
      ),
      z = N.useCallback(
        (p) => {
          p.preventDefault(),
            p.stopPropagation(),
            c(!0),
            y({ x: p.clientX, y: p.clientY, startRow: r.row, startCol: r.col });
        },
        [r.row, r.col]
      ),
      h = N.useCallback(
        (p) => {
          if (a && d && v.current) {
            const w = p.clientX - d.x,
              D = p.clientY - d.y,
              E = v.current.parentElement;
            if (E) {
              const T = E.getBoundingClientRect(),
                C = (T.width - 7 * 16) / 8,
                b = (T.height - 5 * 16) / 6,
                S = Math.round(w / (C + 16)),
                L = Math.round(D / (b + 16)),
                O = Math.max(0, Math.min(8 - r.col, d.startCol + S)),
                V = Math.max(0, Math.min(6 - r.row, d.startRow + L));
              (V !== r.position.master_row || O !== r.position.master_col) &&
                s(t, { master_row: V, master_col: O });
            }
          }
          if (u && g && v.current) {
            const w = p.clientX - g.x,
              D = p.clientY - g.y,
              E = v.current.parentElement;
            if (E) {
              const T = E.getBoundingClientRect(),
                C = (T.width - 7 * 16) / 8,
                b = (T.height - 5 * 16) / 6,
                S = Math.round(w / (C + 16)),
                L = Math.round(D / (b + 16)),
                O = Math.max(
                  1,
                  Math.min(8 - r.position.master_col, g.startCol + S)
                ),
                V = Math.max(
                  1,
                  Math.min(6 - r.position.master_row, g.startRow + L)
                );
              (V !== r.row || O !== r.col) && l(t, { row: V, col: O });
            }
          }
        },
        [a, u, d, g, r, s, l, t]
      ),
      m = N.useCallback(() => {
        o(!1), c(!1), f(null), y(null);
      }, []);
    return (
      Te.useEffect(() => {
        if (a || u)
          return (
            document.addEventListener("mousemove", h),
            document.addEventListener("mouseup", m),
            (document.body.style.cursor = a ? "grabbing" : "nw-resize"),
            (document.body.style.userSelect = "none"),
            (document.body.style.pointerEvents = "none"),
            v.current && (v.current.style.pointerEvents = "auto"),
            () => {
              document.removeEventListener("mousemove", h),
                document.removeEventListener("mouseup", m),
                (document.body.style.cursor = "auto"),
                (document.body.style.userSelect = "auto"),
                (document.body.style.pointerEvents = "auto");
            }
          );
      }, [a, u, h, m]),
      n.jsxs("div", {
        ref: v,
        className: `relative bg-white rounded-xl shadow-lg border border-gray-200 h-full flex flex-col min-h-0 max-h-full overflow-hidden transition-all duration-200 ${
          a || u ? "z-50 shadow-2xl scale-105" : "z-10"
        }`,
        style: { gridArea: i },
        children: [
          n.jsxs("div", {
            className: `absolute top-0 left-0 right-0 h-12 cursor-move z-20 flex items-center justify-center transition-opacity bg-blue-500 bg-opacity-20 rounded-t-xl ${
              a ? "opacity-100" : "opacity-0 hover:opacity-100"
            }`,
            onMouseDown: x,
            children: [
              n.jsx(Rm, { size: 20, className: "text-blue-600" }),
              n.jsx("span", {
                className: `ml-2 text-blue-600 font-medium ${P.smallLabel}`,
                children: "拖拽移動",
              }),
            ],
          }),
          n.jsx("div", {
            className: `absolute bottom-2 right-2 w-6 h-6 cursor-nw-resize z-20 flex items-center justify-center transition-opacity bg-gray-500 bg-opacity-20 rounded ${
              u ? "opacity-100" : "opacity-0 hover:opacity-100"
            }`,
            onMouseDown: z,
            children: n.jsx(ed, { size: 16, className: "text-gray-600" }),
          }),
          n.jsx("div", { className: "flex-1 min-h-0 relative", children: e }),
          (a || u) &&
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
  E0 = ({ isOpen: e, onClose: t, onSuccess: r }) => {
    Rr();
    const [s, l] = N.useState({
        title: "",
        content: "",
        priority: "Normal",
        start_time: "",
        end_time: "",
      }),
      [i, a] = N.useState(!1),
      [o, u] = N.useState(null);
    Te.useEffect(() => {
      if (e) {
        const y = new Date(),
          v = y.toISOString().slice(0, 16),
          x = new Date(y);
        x.setMonth(x.getMonth() + 1);
        const z = x.toISOString().slice(0, 16);
        l({
          title: "",
          content: "",
          priority: "Normal",
          start_time: v,
          end_time: z,
        }),
          u(null);
      }
    }, [e]);
    const c = (y, v) => {
        l((x) => ({ ...x, [y]: v }));
      },
      d = () => {
        if (!s.title.trim()) return "請輸入主旨";
        if (!s.content.trim()) return "請輸入內容";
        if (!s.start_time) return "請選擇開始時間";
        if (!s.end_time) return "請選擇結束時間";
        const y = new Date(s.start_time);
        return new Date(s.end_time) <= y ? "結束時間必須晚於開始時間" : null;
      },
      f = async () => {
        u(null);
        const y = d();
        if (y) {
          u(y);
          return;
        }
        const v = In();
        if (!v) {
          u("無法獲取使用者資訊，請重新登入");
          return;
        }
        a(!0);
        try {
          const x = (h) => h.replace("T", " ") + ":00",
            z = {
              title: s.title.trim(),
              content: s.content.trim(),
              priority: s.priority,
              creator_dept: v.Employer || "",
              creator_name: v.Name || "",
              start_time: x(s.start_time),
              end_time: x(s.end_time),
            };
          await Wm(z), r(), t();
        } catch (x) {
          u(x instanceof Error ? x.message : "新增公告失敗，請稍後再試");
        } finally {
          a(!1);
        }
      },
      g = () => {
        i || t();
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
                      n.jsx(xt, { size: 24, className: "text-blue-600 mr-3" }),
                      n.jsx("h2", {
                        className: "text-xl font-semibold text-gray-800",
                        children: "新增公告",
                      }),
                    ],
                  }),
                  n.jsx("button", {
                    onClick: g,
                    disabled: i,
                    className:
                      "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                    children: n.jsx(Ze, { size: 20 }),
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
                        n.jsx(Je, {
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
                        onChange: (y) => c("title", y.target.value),
                        disabled: i,
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
                        onChange: (y) => c("content", y.target.value),
                        disabled: i,
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
                        onChange: (y) => c("priority", y.target.value),
                        disabled: i,
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
                            onChange: (y) => c("start_time", y.target.value),
                            disabled: i,
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
                            onChange: (y) => c("end_time", y.target.value),
                            disabled: i,
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
                    disabled: i,
                    className:
                      "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                    children: "取消",
                  }),
                  n.jsx("button", {
                    onClick: f,
                    disabled: i || !s.title.trim() || !s.content.trim(),
                    className:
                      "flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                    children: i
                      ? n.jsxs(n.Fragment, {
                          children: [
                            n.jsx(X, { size: "small", className: "mr-2" }),
                            "新增中...",
                          ],
                        })
                      : n.jsxs(n.Fragment, {
                          children: [
                            n.jsx(xt, { size: 16, className: "mr-2" }),
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
  T0 = ({ isOpen: e, onClose: t, onSuccess: r }) => {
    Rr();
    const [s, l] = N.useState([]),
      [i, a] = N.useState(!1),
      [o, u] = N.useState(null),
      [c, d] = N.useState(null),
      [f, g] = N.useState(!1),
      [y, v] = N.useState(!1),
      [x, z] = N.useState(!1);
    N.useEffect(() => {
      e && h();
    }, [e]);
    const h = async () => {
        a(!0), u(null);
        try {
          const b = await qm();
          if (b.Code === 200) l(b.Data || []);
          else throw new Error(b.Result || "載入歷史公告失敗");
        } catch (b) {
          u(b instanceof Error ? b.message : "載入歷史公告時發生錯誤");
        } finally {
          a(!1);
        }
      },
      m = (b) => {
        const S = (L) => {
          if (!L) return "";
          try {
            const O = L.replace(/\//g, "-");
            return new Date(O).toISOString().slice(0, 16);
          } catch (O) {
            return console.error("Error formatting date for input:", L, O), "";
          }
        };
        d({
          GUID: b.GUID,
          title: b.title || "",
          content: b.content || "",
          priority: b.priority || "Normal",
          creator_dept: b.creator_dept || "",
          creator_name: b.creator_name || "",
          start_time: S(b.start_time),
          end_time: S(b.end_time),
          created_time: b.created_time || "",
        });
      },
      p = async () => {
        if (c) {
          g(!0), u(null);
          try {
            const b = (L) =>
                L ? L.replace("T", " ").replace(/-/g, "/") + ":00" : "",
              S = {
                GUID: c.GUID,
                title: c.title.trim(),
                content: c.content.trim(),
                priority: c.priority,
                creator_dept: c.creator_dept,
                creator_name: c.creator_name,
                start_time: b(c.start_time),
                end_time: b(c.end_time),
              };
            await Gm(S), await h(), d(null), r && r();
          } catch (b) {
            u(b instanceof Error ? b.message : "更新公告失敗，請稍後再試");
          } finally {
            g(!1);
          }
        }
      },
      w = async () => {
        if (c) {
          z(!0), u(null), v(!1);
          try {
            await Ym(c.GUID), await h(), d(null), r && r();
          } catch (b) {
            u(b instanceof Error ? b.message : "刪除公告失敗，請稍後再試");
          } finally {
            z(!1);
          }
        }
      },
      D = (b) => {
        if (!b) return "-";
        try {
          const S = b.replace(/\//g, "-");
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
          return b;
        }
      },
      E = (b) => {
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
      T = (b) => {
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
      C = () => {
        !i && !f && !x && (d(null), v(!1), t());
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
                        n.jsx(ht, {
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
                      onClick: C,
                      disabled: i || f,
                      className:
                        "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                      children: n.jsx(Ze, { size: 20 }),
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
                          n.jsx(Je, {
                            size: 20,
                            className: "mr-2 flex-shrink-0",
                          }),
                          o,
                        ],
                      }),
                    i
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
                            n.jsx(ht, {
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
                                  children: s.map((b) =>
                                    n.jsxs(
                                      "tr",
                                      {
                                        className:
                                          "hover:bg-blue-50 cursor-pointer transition-colors",
                                        onClick: () => m(b),
                                        title: "點擊編輯此公告",
                                        children: [
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: D(b.created_time),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 text-sm text-gray-900 max-w-xs",
                                            children: n.jsx("div", {
                                              className: "truncate",
                                              title: b.title,
                                              children: b.title || "-",
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 text-sm text-gray-900 max-w-md",
                                            children: n.jsx("div", {
                                              className: "truncate",
                                              title: b.content,
                                              children: b.content || "-",
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap",
                                            children: n.jsx("span", {
                                              className: `px-2 py-1 rounded-full text-xs font-medium ${T(
                                                b.priority
                                              )}`,
                                              children: E(b.priority),
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children:
                                              `${b.creator_dept || ""} ${
                                                b.creator_name || ""
                                              }`.trim() || "-",
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: D(b.start_time),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: D(b.end_time),
                                          }),
                                        ],
                                      },
                                      b.GUID
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
            c &&
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
                            n.jsx(Ir, {
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
                              disabled: f || x,
                              className:
                                "flex items-center px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                              title: "刪除公告",
                              children: [
                                n.jsx(dt, { size: 16, className: "mr-2" }),
                                "刪除",
                              ],
                            }),
                            n.jsx("button", {
                              onClick: () => d(null),
                              disabled: f || x,
                              className:
                                "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                              children: n.jsx(Ze, { size: 20 }),
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
                              value: c.title,
                              onChange: (b) =>
                                d({ ...c, title: b.target.value }),
                              disabled: f,
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
                              value: c.content,
                              onChange: (b) =>
                                d({ ...c, content: b.target.value }),
                              disabled: f,
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
                              value: c.priority,
                              onChange: (b) =>
                                d({ ...c, priority: b.target.value }),
                              disabled: f,
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
                                  value: c.start_time,
                                  onChange: (b) =>
                                    d({ ...c, start_time: b.target.value }),
                                  disabled: f,
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
                                  value: c.end_time,
                                  onChange: (b) =>
                                    d({ ...c, end_time: b.target.value }),
                                  disabled: f,
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
                          disabled: f || x,
                          className:
                            "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        n.jsx("button", {
                          onClick: p,
                          disabled:
                            f || x || !c.title.trim() || !c.content.trim(),
                          className:
                            "flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                          children:
                            f || x
                              ? n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(X, {
                                      size: "small",
                                      className: "mr-2",
                                    }),
                                    f ? "更新中..." : "處理中...",
                                  ],
                                })
                              : n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(Ir, { size: 16, className: "mr-2" }),
                                    "更新公告",
                                  ],
                                }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            y &&
              c &&
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
                          n.jsx(dt, {
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
                        children: ["您確定要刪除公告「", c.title, "」嗎？"],
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
                            disabled: x,
                            className:
                              "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                            children: "取消",
                          }),
                          n.jsx("button", {
                            onClick: w,
                            disabled: x,
                            className:
                              "flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                            children: x
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
                                    n.jsx(dt, { size: 16, className: "mr-2" }),
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
  z0 = ({
    bulletins: e,
    onBulletinAdded: t,
    showInFocus: r = !0,
    onFocusToggle: s,
  }) => {
    const [l, i] = Te.useState(!1),
      [a, o] = Te.useState(!1),
      u = (y) => {
        switch (y) {
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
      c = (y) => {
        switch (y) {
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
      d = (y) =>
        new Date(y).toLocaleString("zh-TW", {
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        }),
      f = () => {
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
                      n.jsx(sn, { size: 20, className: "text-blue-600 mr-2" }),
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
                                  onChange: (y) => s(y.target.checked),
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
                          n.jsx(ht, { size: 16, className: "mr-2" }),
                          "查看歷史",
                        ],
                      }),
                      n.jsxs("button", {
                        onClick: () => i(!0),
                        className:
                          "flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors text-sm",
                        children: [
                          n.jsx(xt, { size: 16, className: "mr-2" }),
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
                        n.jsx(sn, {
                          size: 48,
                          className: "mx-auto text-gray-300 mb-2",
                        }),
                        n.jsx("p", { children: "暫無公告" }),
                      ],
                    })
                  : e.map((y) =>
                      n.jsxs(
                        "div",
                        {
                          className: `p-3 rounded-lg ${u(y.priority)}`,
                          children: [
                            n.jsxs("div", {
                              className:
                                "flex items-start justify-between mb-2",
                              children: [
                                n.jsx("h4", {
                                  className: "font-medium text-gray-800 flex-1",
                                  children: y.title,
                                }),
                                n.jsx("span", {
                                  className: `px-2 py-1 rounded-full text-xs font-medium ${c(
                                    y.priority
                                  )}`,
                                  children:
                                    y.priority === "high"
                                      ? "緊急"
                                      : y.priority === "medium"
                                      ? "重要"
                                      : "一般",
                                }),
                              ],
                            }),
                            n.jsx("p", {
                              className:
                                "text-gray-700 text-sm mb-3 leading-relaxed",
                              children: y.content,
                            }),
                            n.jsxs("div", {
                              className:
                                "flex items-center justify-between text-xs text-gray-500",
                              children: [
                                n.jsxs("div", {
                                  className: "flex items-center",
                                  children: [
                                    n.jsx(Ks, { size: 12, className: "mr-1" }),
                                    n.jsx("span", { children: y.author }),
                                  ],
                                }),
                                n.jsxs("div", {
                                  className: "flex items-center",
                                  children: [
                                    n.jsx(zn, { size: 12, className: "mr-1" }),
                                    n.jsx("span", {
                                      children: d(y.publishDate),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        },
                        y.id
                      )
                    ),
            }),
          ],
        }),
        n.jsx(E0, { isOpen: l, onClose: () => i(!1), onSuccess: f }),
        n.jsx(T0, { isOpen: a, onClose: () => o(!1), onSuccess: g }),
      ],
    });
  },
  I0 = ({ bulletins: e }) => {
    const [t, r] = N.useState(0);
    N.useEffect(() => {
      if (e.length <= 1) return;
      const u = setInterval(() => {
        r((c) => (c + 1) % e.length);
      }, 8e3);
      return () => clearInterval(u);
    }, [e.length]);
    const s = (u) => {
        switch (u) {
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
      l = (u) => {
        switch (u) {
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
      i = (u) => {
        switch (u) {
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
      a = (u) => {
        try {
          const c = u.replace(/\//g, "-"),
            d = new Date(c);
          return isNaN(d.getTime())
            ? u
            : d.toLocaleString("zh-TW", {
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
              });
        } catch {
          return u;
        }
      };
    if (e.length === 0)
      return n.jsxs("div", {
        className:
          "bg-white rounded-lg shadow-sm border border-gray-200 h-full flex flex-col",
        children: [
          n.jsx("div", {
            className: "p-3 border-b border-gray-200 bg-blue-50",
            children: n.jsxs("div", {
              className: "flex items-center",
              children: [
                n.jsx(sn, {
                  size: 18,
                  className: `text-blue-600 mr-2 ${K.large}`,
                }),
                n.jsx("h3", {
                  className: `${P.title} font-semibold text-gray-800`,
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
                n.jsx(sn, {
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
          className: "p-3 border-b border-gray-200 bg-blue-50",
          children: n.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              n.jsxs("div", {
                className: "flex items-center",
                children: [
                  n.jsx(sn, {
                    size: 22,
                    className: `text-blue-600 mr-3 ${K.large}`,
                  }),
                  n.jsx("h3", {
                    className: `${P.subTitle} font-semibold text-gray-800`,
                    children: "公告欄",
                  }),
                ],
              }),
              n.jsxs("span", {
                className: `${P.smallLabel} text-gray-500 font-medium`,
                children: [t + 1, "/", e.length],
              }),
            ],
          }),
        }),
        n.jsx("div", {
          className: "flex-1 p-3",
          children: n.jsxs("div", {
            className: `h-full p-4 border rounded-xl transition-colors ${s(
              o.priority
            )} border-gray-200`,
            children: [
              n.jsxs("div", {
                className: "flex items-center justify-between mb-3",
                children: [
                  n.jsx("h4", {
                    className: `font-bold ${P.subTitle} text-gray-800 flex-1 leading-tight`,
                    children: o.title,
                  }),
                  n.jsx("span", {
                    className: `px-3 py-1 rounded-full ${
                      P.smallLabel
                    } font-bold ${l(o.priority)} ml-2`,
                    children: i(o.priority),
                  }),
                ],
              }),
              n.jsx("p", {
                className: `text-gray-700 ${P.content} mb-4 leading-relaxed`,
                children: o.content,
              }),
              n.jsxs("div", {
                className: `flex items-center justify-between ${P.smallLabel} text-gray-500 mt-auto`,
                children: [
                  n.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      n.jsx(Ks, { size: 14, className: `mr-2 ${K.small}` }),
                      n.jsx("span", { children: o.author }),
                    ],
                  }),
                  n.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      n.jsx(zn, { size: 14, className: `mr-2 ${K.small}` }),
                      n.jsx("span", { children: a(o.publishDate) }),
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
  bi = ({
    bulletins: e,
    isFullscreen: t = !1,
    onBulletinAdded: r,
    showInFocus: s,
    onFocusToggle: l,
  }) =>
    t
      ? n.jsx(I0, { bulletins: e })
      : n.jsx(z0, {
          bulletins: e,
          onBulletinAdded: r,
          showInFocus: s,
          onFocusToggle: l,
        }),
  ka = ({ isOpen: e, onClose: t, sectionKey: r, sectionTitle: s }) => {
    const [l, i] = N.useState(5);
    N.useEffect(() => {
      if (e) {
        const o = localStorage.getItem(`focusTable_${r}_itemsPerPage`);
        o && i(parseInt(o, 10));
      }
    }, [e, r]);
    const a = () => {
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
                      n.jsx(Sn, { size: 24, className: "text-blue-600 mr-3" }),
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
                    children: n.jsx(Ze, { size: 24 }),
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
                            i(
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
                            children: n.jsx(Sn, {
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
                    onClick: a,
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
  P0 = ({
    restockTasks: e,
    receivingTasks: t,
    putAwayTasks: r,
    showInFocus: s = !0,
    onFocusToggle: l,
  }) => {
    var y;
    const [i, a] = N.useState("restock"),
      [o, u] = N.useState(!1),
      c = (v) => {
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
      d = ({ task: v, taskType: x }) =>
        x === "restock" && "code" in v
          ? n.jsx("div", {
              className: `p-3 border rounded-lg transition-all duration-200 ${c(
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
          : (x === "receiving" || x === "putaway") && "code" in v
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
      f = [
        { key: "restock", label: "撥補", icon: Me, tasks: e },
        { key: "receiving", label: "驗收", icon: Kt, tasks: t },
        { key: "putaway", label: "歸貨", icon: Xu, tasks: r },
      ],
      g = ((y = f.find((v) => v.key === i)) == null ? void 0 : y.tasks) || [];
    return (
      g.filter((v) =>
        "state" in v ? v.state === "等待過帳" : v.quantity && v.quantity > 0
      ).length,
      g.filter((v) => ("state" in v ? v.state === "已簽收" : !1)).length,
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
                    onClick: () => u(!0),
                    className:
                      "p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                    title: "專注模式設定",
                    children: n.jsx(Sn, { size: 18 }),
                  }),
                ],
              }),
              n.jsx("div", {
                className: "flex space-x-1 bg-gray-100 rounded-lg p-1",
                children: f.map((v) => {
                  const x = v.icon,
                    z = i === v.key,
                    h = v.tasks.filter((m) =>
                      "state" in m
                        ? m.state === "等待過帳"
                        : m.quantity && m.quantity > 0
                    ).length;
                  return n.jsxs(
                    "button",
                    {
                      onClick: () => a(v.key),
                      className: `flex-1 flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        z
                          ? "bg-white text-blue-600 shadow-sm"
                          : "text-gray-600 hover:text-gray-800"
                      }`,
                      children: [
                        n.jsx(x, { size: 16, className: "mr-2" }),
                        v.label,
                        h > 0 &&
                          n.jsx("span", {
                            className: `ml-2 px-2 py-0.5 rounded-full text-xs ${
                              z
                                ? "bg-blue-100 text-blue-600"
                                : "bg-gray-200 text-gray-600"
                            }`,
                            children: h,
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
                g.length === 0
                  ? n.jsxs("div", {
                      className: "text-center text-gray-500 py-8",
                      children: [
                        n.jsx(Me, {
                          size: 48,
                          className: "mx-auto text-gray-300 mb-2",
                        }),
                        n.jsx("p", { children: "暫無任務" }),
                      ],
                    })
                  : g.map((v) => n.jsx(d, { task: v, taskType: i }, v.id)),
            }),
          }),
          n.jsx(ka, {
            isOpen: o,
            onClose: () => u(!1),
            sectionKey: "tasks",
            sectionTitle: "任務清單",
          }),
        ],
      })
    );
  },
  M0 = ({ restockTasks: e, receivingTasks: t, putAwayTasks: r }) => {
    var v;
    const [s, l] = N.useState("restock"),
      [i, a] = N.useState(0),
      u = (() => {
        const x = localStorage.getItem("focusTable_tasks_itemsPerPage");
        return x ? parseInt(x, 10) : 5;
      })(),
      c = [
        { key: "restock", label: "撥補", icon: Me, tasks: e },
        { key: "receiving", label: "驗收", icon: Kt, tasks: t },
        { key: "putaway", label: "歸貨", icon: Xu, tasks: r },
      ],
      d = ((v = c.find((x) => x.key === s)) == null ? void 0 : v.tasks) || [];
    N.useEffect(() => {
      const x = setInterval(() => {
        l((z) => {
          const m = (c.findIndex((p) => p.key === z) + 1) % c.length;
          return c[m].key;
        }),
          a(0);
      }, 12e3);
      return () => clearInterval(x);
    }, []),
      N.useEffect(() => {
        if (d.length <= u) return;
        const x = setInterval(() => {
          a((z) => {
            const h = z + u;
            return h >= d.length ? 0 : h;
          });
        }, 8e3);
        return () => clearInterval(x);
      }, [d.length, s]),
      d.filter((x) =>
        "state" in x
          ? x.state === "等待過帳"
          : "quantity" in x && x.quantity > 0
      ).length,
      d.filter((x) => ("state" in x ? x.state === "已簽收" : !1)).length;
    const f = d.slice(i, i + u),
      g = Math.ceil(d.length / u),
      y = Math.floor(i / u) + 1;
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
                  className: `${P.subTitle} font-semibold text-gray-800 flex gap-2 items-end`,
                  children: [
                    "任務清單",
                    n.jsxs("span", {
                      className: "text-gray-500 text-sm",
                      children: ["總計: ", d.length],
                    }),
                  ],
                }),
                n.jsx("div", {
                  className: "flex space-x-1 bg-gray-100 rounded-lg p-1",
                  children: c.map((x) => {
                    const z = x.icon,
                      h = s === x.key,
                      m = x.tasks.filter((p) =>
                        "state" in p
                          ? p.state === "等待過帳"
                          : "quantity" in p && p.quantity > 0
                      ).length;
                    return n.jsxs(
                      "div",
                      {
                        className: `flex items-center justify-center px-2 py-1 rounded-md text-xs font-medium transition-colors ${
                          h
                            ? "bg-white text-blue-600 shadow-sm"
                            : "text-gray-600"
                        }`,
                        children: [
                          n.jsx(z, { size: 12, className: `mr-1 ${K.small}` }),
                          x.label,
                          m > 0 &&
                            n.jsx("span", {
                              className: `ml-1 px-1 py-0.5 rounded-full ${
                                P.smallLabel
                              } ${
                                h
                                  ? "bg-blue-100 text-blue-600"
                                  : "bg-gray-200 text-gray-600"
                              }`,
                              children: m,
                            }),
                        ],
                      },
                      x.key
                    );
                  }),
                }),
              ],
            }),
            d.length > u &&
              n.jsxs("div", {
                className: `flex items-center justify-between ${P.smallLabel} text-gray-600 mt-2`,
                children: [
                  n.jsxs("span", { children: ["第 ", y, " / ", g, " 頁"] }),
                  n.jsx("div", {
                    className: "flex space-x-1",
                    children: Array.from({ length: g }, (x, z) =>
                      n.jsx(
                        "div",
                        {
                          className: `w-2 h-2 rounded-full ${
                            z === y - 1 ? "bg-green-500" : "bg-gray-300"
                          }`,
                        },
                        z
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
            d.length === 0
              ? n.jsx("div", {
                  className:
                    "flex items-center justify-center h-full text-gray-500",
                  children: n.jsxs("div", {
                    className: "text-center",
                    children: [
                      n.jsx(Me, {
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
                              className: `${P.content} font-semibold text-left p-2 text-gray-700`,
                              children: "藥碼",
                            }),
                            n.jsx("th", {
                              className: `${P.content} font-semibold text-left p-2 text-gray-700`,
                              children: "藥名",
                            }),
                            n.jsx("th", {
                              className: `${P.content} font-semibold text-center p-2 text-gray-700`,
                              children: "數量",
                            }),
                            n.jsxs("th", {
                              className: `${P.content} font-semibold text-center p-2 text-gray-700`,
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
                        children: f.map((x, z) => {
                          if (s === "restock" && "code" in x && "state" in x) {
                            const h = (p) => {
                                switch (p) {
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
                              m =
                                (x.state === "已過帳" ||
                                  x.state === "已簽收") &&
                                x.actualIssuedQuantity
                                  ? x.actualIssuedQuantity
                                  : x.issuedQuantity;
                            return n.jsxs(
                              "tr",
                              {
                                className: `border-b border-gray-200 transition-colors ${h(
                                  x.state
                                )}`,
                                children: [
                                  n.jsx("td", {
                                    className: `${P.content} p-2 text-gray-800 font-medium`,
                                    children: x.code,
                                  }),
                                  n.jsx("td", {
                                    className: `${P.content} p-2 text-gray-800 font-medium`,
                                    children: x.name,
                                  }),
                                  n.jsx("td", {
                                    className: `${P.content} p-2 text-center text-gray-700`,
                                    children: m,
                                  }),
                                  n.jsx("td", {
                                    className: `${P.content} p-2 text-center text-gray-700`,
                                    children: x.destinationStoreType,
                                  }),
                                ],
                              },
                              `${i}-${z}`
                            );
                          }
                          return (s === "receiving" || s === "putaway") &&
                            "code" in x
                            ? n.jsxs(
                                "tr",
                                {
                                  className:
                                    "border-b border-gray-200 transition-colors bg-white hover:bg-gray-50",
                                  children: [
                                    n.jsx("td", {
                                      className: `${P.content} p-2 text-gray-800 font-medium`,
                                      children: x.code,
                                    }),
                                    n.jsx("td", {
                                      className: `${P.content} p-2 text-gray-800 font-medium`,
                                      children: x.name,
                                    }),
                                    n.jsx("td", {
                                      className: `${P.content} p-2 text-center text-gray-700`,
                                      children: x.quantity,
                                    }),
                                    n.jsx("td", {
                                      className: `${P.content} p-2 text-center text-gray-700`,
                                      children: x.supplier,
                                    }),
                                  ],
                                },
                                `${i}-${z}`
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
  ki = ({
    restockTasks: e,
    receivingTasks: t,
    putAwayTasks: r,
    isFullscreen: s = !1,
    showInFocus: l,
    onFocusToggle: i,
  }) =>
    s
      ? n.jsx(M0, { restockTasks: e, receivingTasks: t, putAwayTasks: r })
      : n.jsx(P0, {
          restockTasks: e,
          receivingTasks: t,
          putAwayTasks: r,
          showInFocus: l,
          onFocusToggle: i,
        }),
  L0 = ({ incomingDrugs: e, showInFocus: t = !0, onFocusToggle: r }) => {
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
      i = (o) => {
        if (!o) return "未設定";
        try {
          const u = new Date(o.replace(/\//g, "-")),
            c = new Date(),
            d = u.getTime() - c.getTime(),
            f = Math.ceil(d / (1e3 * 60 * 60 * 24)),
            g = u.toLocaleDateString("zh-TW", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            });
          return f < 0
            ? `${g} (逾期 ${Math.abs(f)} 天)`
            : f === 0
            ? `${g} (今天)`
            : f === 1
            ? `${g} (明天)`
            : `${g} (${f} 天後)`;
        } catch {
          return o;
        }
      },
      a = (o) => {
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
                  n.jsx(Kt, { size: 20, className: "text-green-600 mr-2" }),
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
                      n.jsx(Kt, {
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
                          a(o.expectedArrivalDate)
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
                                  a(o.expectedArrivalDate) &&
                                    n.jsx(Je, {
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
                                  n.jsx(Ys, {
                                    size: 14,
                                    className: `mr-2 ${
                                      a(o.expectedArrivalDate)
                                        ? "text-red-500"
                                        : "text-gray-400"
                                    }`,
                                  }),
                                  n.jsxs("span", {
                                    className: a(o.expectedArrivalDate)
                                      ? "text-red-600 font-medium"
                                      : "",
                                    children: [
                                      "預計到貨: ",
                                      i(o.expectedArrivalDate),
                                    ],
                                  }),
                                ],
                              }),
                              n.jsxs("div", {
                                className: "flex items-center",
                                children: [
                                  n.jsx(Me, {
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
                                  n.jsx(Ju, {
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
  R0 = ({ incomingDrugs: e }) => {
    const [t, r] = N.useState(0);
    N.useEffect(() => {
      if (e.length <= 1) return;
      const u = setInterval(() => {
        r((c) => (c + 1) % e.length);
      }, 6e3);
      return () => clearInterval(u);
    }, [e.length]);
    const s = (u) => {
        switch (u) {
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
      l = (u) => {
        switch (u) {
          case "shipped":
            return "已出貨";
          case "ordered":
            return "已訂購";
          case "delayed":
            return "延遲";
          default:
            return u;
        }
      },
      i = (u) => {
        if (!u) return "未設定";
        try {
          const c = new Date(u.replace(/\//g, "-")),
            d = new Date(),
            f = c.getTime() - d.getTime(),
            g = Math.ceil(f / (1e3 * 60 * 60 * 24)),
            y = c.toLocaleDateString("zh-TW", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            });
          return g < 0
            ? `${y} (逾期 ${Math.abs(g)} 天)`
            : g === 0
            ? `${y} (今天)`
            : g === 1
            ? `${y} (明天)`
            : `${y} (${g} 天後)`;
        } catch {
          return u;
        }
      },
      a = (u) => {
        if (!u) return !1;
        try {
          return new Date(u.replace(/\//g, "-")) < new Date();
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
            className: "p-3 border-b border-gray-200 bg-green-50",
            children: n.jsxs("div", {
              className: "flex items-center",
              children: [
                n.jsx(Kt, {
                  size: 18,
                  className: `text-green-600 mr-2 ${K.large}`,
                }),
                n.jsx("h3", {
                  className: `${P.subTitle} font-semibold text-gray-800`,
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
                n.jsx(Kt, {
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
          className: "p-3 border-b border-gray-200 bg-green-50",
          children: n.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              n.jsxs("div", {
                className: "flex items-center",
                children: [
                  n.jsx(Kt, {
                    size: 22,
                    className: `text-green-600 mr-3 ${K.xlarge}`,
                  }),
                  n.jsx("h3", {
                    className: `${P.subTitle} font-bold text-gray-800`,
                    children: "未到貨監控",
                  }),
                ],
              }),
              n.jsxs("span", {
                className: `${P.smallLabel} text-gray-500 font-medium`,
                children: [t + 1, "/", e.length],
              }),
            ],
          }),
        }),
        n.jsx("div", {
          className: "flex-1 p-2",
          children: n.jsxs("div", {
            className: `h-full p-2 border rounded-xl transition-colors ${
              a(o.expectedArrivalDate)
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
                    className: `font-bold ${P.subTitle} text-gray-800 flex-1 leading-tight`,
                    children: o.drugName,
                  }),
                  n.jsxs("div", {
                    className: "flex items-center space-x-1 ml-2",
                    children: [
                      a(o.expectedArrivalDate) &&
                        n.jsx(Je, {
                          size: 16,
                          className: `text-red-500 ${K.medium}`,
                        }),
                      n.jsx("span", {
                        className: `px-3 py-1 rounded-full ${
                          P.smallLabel
                        } font-bold ${s(o.status)}`,
                        children: l(o.status),
                      }),
                    ],
                  }),
                ],
              }),
              n.jsxs("div", {
                className: `space-y-1 ${P.content} text-gray-600`,
                children: [
                  n.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      n.jsx(Ys, {
                        size: 20,
                        className: `mr-3 ${K.medium} ${
                          a(o.expectedArrivalDate)
                            ? "text-red-500"
                            : "text-gray-400"
                        }`,
                      }),
                      n.jsxs("span", {
                        className: a(o.expectedArrivalDate)
                          ? "text-red-600 font-medium"
                          : "",
                        children: ["預計到貨: ", i(o.expectedArrivalDate)],
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    className: "flex justify-between",
                    children: [
                      n.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          n.jsx(Me, {
                            size: 20,
                            className: `mr-3 ${K.medium} text-gray-400`,
                          }),
                          n.jsxs("span", {
                            children: ["數量: ", o.quantityOrdered],
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          n.jsx(Ju, {
                            size: 16,
                            className: `mr-3 ${K.medium} text-gray-400`,
                          }),
                          n.jsxs("span", {
                            children: ["供應商: ", o.supplier],
                          }),
                        ],
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    className: `${P.content} text-gray-500 mt-3 pt-3 border-t`,
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
  Si = ({
    incomingDrugs: e,
    isFullscreen: t = !1,
    showInFocus: r,
    onFocusToggle: s,
  }) =>
    t
      ? n.jsx(R0, { incomingDrugs: e })
      : n.jsx(L0, { incomingDrugs: e, showInFocus: r, onFocusToggle: s }),
  O0 = ({ isOpen: e, onClose: t, onSuccess: r }) => {
    const [s, l] = N.useState({ drugName: "", start_time: "", end_time: "" }),
      [i, a] = N.useState([]),
      [o, u] = N.useState([]),
      [c, d] = N.useState(!1),
      [f, g] = N.useState(!1),
      [y, v] = N.useState(!1),
      [x, z] = N.useState(null);
    Te.useEffect(() => {
      if (e) {
        const C = new Date(),
          b = C.toISOString().slice(0, 16),
          S = new Date(C);
        S.setMonth(S.getMonth() + 1);
        const L = S.toISOString().slice(0, 16);
        l({ drugName: "", start_time: b, end_time: L }),
          u([]),
          d(!1),
          z(null),
          h();
      }
    }, [e]);
    const h = async () => {
        g(!0);
        try {
          const C = await Xs();
          C.Code === 200 && C.Data
            ? a(C.Data)
            : console.warn("Failed to load medicine data:", C);
        } catch (C) {
          console.error("Error loading medicine data:", C);
        } finally {
          g(!1);
        }
      },
      m = (C, b) => {
        l((S) => ({ ...S, [C]: b })), C === "drugName" && p(b);
      },
      p = (C) => {
        if (!C.trim()) {
          u([]), d(!1);
          return;
        }
        const b = i.filter((S) =>
          S.NAME.toLowerCase().includes(C.toLowerCase())
        );
        u(b.slice(0, 10)), d(b.length > 0);
      },
      w = (C) => {
        l((b) => ({ ...b, drugName: C })), d(!1), u([]);
      },
      D = () => {
        if (!s.drugName.trim()) return "請輸入藥品名稱";
        if (!s.start_time) return "請選擇開始時間";
        if (!s.end_time) return "請選擇結束時間";
        const C = new Date(s.start_time);
        return new Date(s.end_time) <= C ? "結束時間必須晚於開始時間" : null;
      },
      E = async () => {
        z(null);
        const C = D();
        if (C) {
          z(C);
          return;
        }
        const b = In();
        if (!b) {
          z("無法獲取使用者資訊，請重新登入");
          return;
        }
        v(!0);
        try {
          const S = (O) => O.replace("T", " ") + ":00",
            L = {
              title: "缺貨通知",
              content: s.drugName.trim(),
              priority: "Critical",
              creator_dept: b.Employer || "",
              creator_name: b.Name || "",
              start_time: S(s.start_time),
              end_time: S(s.end_time),
            };
          await o0(L), r(), t();
        } catch (S) {
          z(S instanceof Error ? S.message : "新增缺貨項目失敗，請稍後再試");
        } finally {
          v(!1);
        }
      },
      T = () => {
        y || t();
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
                      n.jsx(xt, { size: 24, className: "text-blue-600 mr-3" }),
                      n.jsx("h2", {
                        className: "text-xl font-semibold text-gray-800",
                        children: "新增缺貨項目",
                      }),
                    ],
                  }),
                  n.jsx("button", {
                    onClick: T,
                    disabled: y,
                    className:
                      "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                    children: n.jsx(Ze, { size: 20 }),
                  }),
                ],
              }),
              n.jsxs("div", {
                className: "p-6 space-y-6",
                children: [
                  x &&
                    n.jsxs("div", {
                      className:
                        "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center",
                      children: [
                        n.jsx(Je, {
                          size: 20,
                          className: "mr-2 flex-shrink-0",
                        }),
                        x,
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
                            children: n.jsx(kn, {
                              size: 16,
                              className: "text-gray-400",
                            }),
                          }),
                          n.jsx("input", {
                            type: "text",
                            value: s.drugName,
                            onChange: (C) => m("drugName", C.target.value),
                            onFocus: () => {
                              o.length > 0 && d(!0);
                            },
                            disabled: y || f,
                            className:
                              "w-full pl-10 pr-10 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                            placeholder: "請輸入藥品名稱進行搜尋",
                            autoComplete: "off",
                          }),
                          f &&
                            n.jsx("div", {
                              className:
                                "absolute inset-y-0 right-0 flex items-center pr-3",
                              children: n.jsx(X, { size: "small" }),
                            }),
                          c &&
                            n.jsx("div", {
                              className:
                                "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",
                              children: n.jsx(bn, {
                                size: 16,
                                className: "text-gray-400",
                              }),
                            }),
                        ],
                      }),
                      c &&
                        o.length > 0 &&
                        n.jsx("div", {
                          className:
                            "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                          children: o.map((C, b) =>
                            n.jsx(
                              "button",
                              {
                                type: "button",
                                onClick: () => w(C.NAME),
                                className:
                                  "w-full px-4 py-2 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors border-b border-gray-100 last:border-b-0",
                                children: n.jsx("div", {
                                  className: "font-medium text-gray-900",
                                  children: C.NAME,
                                }),
                              },
                              b
                            )
                          ),
                        }),
                      f &&
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
                  c &&
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
                            onChange: (C) => m("start_time", C.target.value),
                            disabled: y,
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
                            onChange: (C) => m("end_time", C.target.value),
                            disabled: y,
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
                    disabled: y,
                    className:
                      "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                    children: "取消",
                  }),
                  n.jsx("button", {
                    onClick: E,
                    disabled: y || !s.drugName.trim(),
                    className:
                      "flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                    children: y
                      ? n.jsxs(n.Fragment, {
                          children: [
                            n.jsx(X, { size: "small", className: "mr-2" }),
                            "新增中...",
                          ],
                        })
                      : n.jsxs(n.Fragment, {
                          children: [
                            n.jsx(xt, { size: 16, className: "mr-2" }),
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
  $0 = ({ isOpen: e, onClose: t, onSuccess: r }) => {
    const [s, l] = N.useState([]),
      [i, a] = N.useState(!1),
      [o, u] = N.useState(null),
      [c, d] = N.useState(null),
      [f, g] = N.useState(!1),
      [y, v] = N.useState(!1),
      [x, z] = N.useState(!1),
      [h, m] = N.useState([]),
      [p, w] = N.useState([]),
      [D, E] = N.useState(!1),
      [T, C] = N.useState(!1);
    N.useEffect(() => {
      e && b();
    }, [e]);
    const b = async () => {
        a(!0), u(null);
        try {
          const k = await a0();
          if (k.Code === 200) l(k.Data || []);
          else throw new Error(k.Result || "載入歷史缺貨項目失敗");
        } catch (k) {
          u(k instanceof Error ? k.message : "載入歷史缺貨項目時發生錯誤");
        } finally {
          a(!1);
        }
      },
      S = async () => {
        C(!0);
        try {
          const k = await Xs();
          k.Code === 200 && k.Data
            ? m(k.Data)
            : console.warn("Failed to load medicine data:", k);
        } catch (k) {
          console.error("Error loading medicine data:", k);
        } finally {
          C(!1);
        }
      },
      L = (k) => {
        const F = (j) => {
          if (!j) return "";
          try {
            const A = j.replace(/\//g, "-");
            return new Date(A).toISOString().slice(0, 16);
          } catch (A) {
            return console.error("Error formatting date for input:", j, A), "";
          }
        };
        d({
          GUID: k.GUID,
          title: k.title || "",
          content: k.content || "",
          priority: k.priority || "Normal",
          creator_dept: k.creator_dept || "",
          creator_name: k.creator_name || "",
          start_time: F(k.start_time),
          end_time: F(k.end_time),
          created_time: k.created_time || "",
        }),
          h.length === 0 && S();
      },
      O = (k) => {
        if (!k.trim()) {
          w([]), E(!1);
          return;
        }
        const F = h.filter((j) =>
          j.NAME.toLowerCase().includes(k.toLowerCase())
        );
        w(F.slice(0, 10)), E(F.length > 0);
      },
      V = (k) => {
        c && d({ ...c, content: k }), E(!1), w([]);
      },
      we = async () => {
        if (c) {
          g(!0), u(null);
          try {
            const k = (j) =>
                j ? j.replace("T", " ").replace(/-/g, "/") + ":00" : "",
              F = {
                GUID: c.GUID,
                title: c.title.trim(),
                content: c.content.trim(),
                priority: c.priority,
                creator_dept: c.creator_dept,
                creator_name: c.creator_name,
                start_time: k(c.start_time),
                end_time: k(c.end_time),
              };
            await c0(F), await b(), d(null), r && r();
          } catch (k) {
            u(k instanceof Error ? k.message : "更新缺貨項目失敗，請稍後再試");
          } finally {
            g(!1);
          }
        }
      },
      He = async () => {
        if (c) {
          z(!0), u(null), v(!1);
          try {
            await u0(c.GUID), await b(), d(null), r && r();
          } catch (k) {
            u(k instanceof Error ? k.message : "刪除缺貨項目失敗，請稍後再試");
          } finally {
            z(!1);
          }
        }
      },
      Ve = (k) => {
        if (!k) return "-";
        try {
          const F = k.replace(/\//g, "-");
          return new Date(F).toLocaleString("zh-TW", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: !1,
          });
        } catch {
          return k;
        }
      },
      lt = (k) => {
        switch (k) {
          case "Critical":
            return "緊急";
          case "Important":
            return "重要";
          case "Normal":
            return "一般";
          default:
            return k || "一般";
        }
      },
      I = (k) => {
        switch (k) {
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
      R = () => {
        !i && !f && !x && (d(null), v(!1), t());
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
                        n.jsx(ht, {
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
                      onClick: R,
                      disabled: i || f,
                      className:
                        "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                      children: n.jsx(Ze, { size: 20 }),
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
                          n.jsx(Je, {
                            size: 20,
                            className: "mr-2 flex-shrink-0",
                          }),
                          o,
                        ],
                      }),
                    i
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
                            n.jsx(ht, {
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
                                  children: s.map((k) =>
                                    n.jsxs(
                                      "tr",
                                      {
                                        className:
                                          "hover:bg-blue-50 cursor-pointer transition-colors",
                                        onClick: () => L(k),
                                        title: "點擊編輯此缺貨項目",
                                        children: [
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: Ve(k.created_time),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 text-sm text-gray-900 max-w-xs",
                                            children: n.jsx("div", {
                                              className: "truncate",
                                              title: k.content,
                                              children: k.content || "-",
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap",
                                            children: n.jsx("span", {
                                              className: `px-2 py-1 rounded-full text-xs font-medium ${I(
                                                k.priority
                                              )}`,
                                              children: lt(k.priority),
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children:
                                              `${k.creator_dept || ""} ${
                                                k.creator_name || ""
                                              }`.trim() || "-",
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: Ve(k.start_time),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: Ve(k.end_time),
                                          }),
                                        ],
                                      },
                                      k.GUID
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
            c &&
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
                            n.jsx(Ir, {
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
                              disabled: f || x,
                              className:
                                "flex items-center px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                              title: "刪除缺貨項目",
                              children: [
                                n.jsx(dt, { size: 16, className: "mr-2" }),
                                "刪除",
                              ],
                            }),
                            n.jsx("button", {
                              onClick: () => d(null),
                              disabled: f || x,
                              className:
                                "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                              children: n.jsx(Ze, { size: 20 }),
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
                                  children: n.jsx(kn, {
                                    size: 16,
                                    className: "text-gray-400",
                                  }),
                                }),
                                n.jsx("input", {
                                  type: "text",
                                  value: c.content,
                                  onChange: (k) => {
                                    d({ ...c, content: k.target.value }),
                                      O(k.target.value);
                                  },
                                  onFocus: () => {
                                    p.length > 0 && E(!0);
                                  },
                                  disabled: f || T,
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
                                D &&
                                  n.jsx("div", {
                                    className:
                                      "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",
                                    children: n.jsx(bn, {
                                      size: 16,
                                      className: "text-gray-400",
                                    }),
                                  }),
                              ],
                            }),
                            D &&
                              p.length > 0 &&
                              n.jsx("div", {
                                className:
                                  "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                                children: p.map((k, F) =>
                                  n.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      onClick: () => V(k.NAME),
                                      className:
                                        "w-full px-4 py-2 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors border-b border-gray-100 last:border-b-0",
                                      children: n.jsx("div", {
                                        className: "font-medium text-gray-900",
                                        children: k.NAME,
                                      }),
                                    },
                                    F
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
                        D &&
                          n.jsx("div", {
                            className: "fixed inset-0 z-40",
                            onClick: () => E(!1),
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
                              value: c.priority,
                              onChange: (k) =>
                                d({ ...c, priority: k.target.value }),
                              disabled: f,
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
                                  value: c.start_time,
                                  onChange: (k) =>
                                    d({ ...c, start_time: k.target.value }),
                                  disabled: f,
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
                                  value: c.end_time,
                                  onChange: (k) =>
                                    d({ ...c, end_time: k.target.value }),
                                  disabled: f,
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
                          disabled: f || x,
                          className:
                            "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        n.jsx("button", {
                          onClick: we,
                          disabled: f || x || !c.content.trim(),
                          className:
                            "flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                          children:
                            f || x
                              ? n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(X, {
                                      size: "small",
                                      className: "mr-2",
                                    }),
                                    f ? "更新中..." : "處理中...",
                                  ],
                                })
                              : n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(Ir, { size: 16, className: "mr-2" }),
                                    "更新項目",
                                  ],
                                }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            y &&
              c &&
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
                          n.jsx(dt, {
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
                          c.content,
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
                            disabled: x,
                            className:
                              "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                            children: "取消",
                          }),
                          n.jsx("button", {
                            onClick: He,
                            disabled: x,
                            className:
                              "flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                            children: x
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
                                    n.jsx(dt, { size: 16, className: "mr-2" }),
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
  F0 = ({
    outOfStockItems: e,
    onItemAdded: t,
    showInFocus: r = !0,
    onFocusToggle: s,
  }) => {
    const [l, i] = Te.useState(!1),
      [a, o] = Te.useState(!1),
      [u, c] = Te.useState(!1),
      [d, f] = Te.useState(!1),
      g = (h) =>
        new Date(h).toLocaleDateString("zh-TW", {
          month: "2-digit",
          day: "2-digit",
        }),
      y = (h) => {
        const m = new Date(h);
        if (isNaN(m.getTime()))
          return console.warn("Invalid lastStockDate:", h), 0;
        const p = new Date(),
          w = new Date(m.getFullYear(), m.getMonth(), m.getDate()),
          D = new Date(p.getFullYear(), p.getMonth(), p.getDate()),
          E = D.getTime() - w.getTime(),
          T = Math.floor(E / (1e3 * 60 * 60 * 24));
        return (
          console.log("Days calculation in OutOfStockList:", {
            lastStockDate: h,
            lastStock: m,
            lastStockDateOnly: w,
            nowDateOnly: D,
            diffDays: T,
          }),
          T
        );
      },
      v = () => {
        t && t();
      },
      x = async () => {
        c(!0);
        try {
          await new Promise((h) => setTimeout(h, 100)), i(!0);
        } catch (h) {
          console.error("Failed to prepare add modal:", h), i(!0);
        } finally {
          c(!1);
        }
      },
      z = () => {
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
                        n.jsx(wi, { size: 20, className: "text-red-600 mr-2" }),
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
                                    onChange: (h) => s(h.target.checked),
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
                          onClick: () => f(!0),
                          className:
                            "p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                          title: "專注模式設定",
                          children: n.jsx(Sn, { size: 18 }),
                        }),
                        n.jsxs("button", {
                          onClick: () => o(!0),
                          className:
                            "flex items-center px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors text-sm",
                          children: [
                            n.jsx(ht, { size: 16, className: "mr-2" }),
                            "查看歷史",
                          ],
                        }),
                        n.jsx("button", {
                          onClick: x,
                          disabled: u,
                          className:
                            "flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed",
                          children: u
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
                                  n.jsx(xt, { size: 16, className: "mr-2" }),
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
                          n.jsx(wi, {
                            size: 48,
                            className: "mx-auto text-gray-300 mb-2",
                          }),
                          n.jsx("p", { children: "目前無缺貨品項" }),
                        ],
                      })
                    : e.map((h) => {
                        const m = y(h.lastStockDate),
                          p = m > 3 || h.status === "urgent_order";
                        return n.jsxs(
                          "div",
                          {
                            className: `p-3 border rounded-lg transition-colors ${
                              p
                                ? "border-red-200 bg-red-50"
                                : "border-gray-200 bg-white hover:border-gray-300"
                            }`,
                            children: [
                              n.jsx("div", {
                                className:
                                  "flex items-start justify-between mb-2",
                                children: n.jsx("h4", {
                                  className: "font-medium text-gray-800 flex-1",
                                  children: h.drugName,
                                }),
                              }),
                              n.jsx("div", {
                                className: "space-y-1 text-sm text-gray-600",
                                children: n.jsxs("div", {
                                  className: "flex items-center",
                                  children: [
                                    n.jsx(zn, {
                                      size: 14,
                                      className: "mr-2 text-gray-400",
                                    }),
                                    n.jsxs("span", {
                                      className:
                                        m > 3 ? "text-red-600 font-medium" : "",
                                      children: [
                                        "缺貨 ",
                                        m,
                                        " 天 (自 ",
                                        g(h.lastStockDate),
                                        ")",
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          },
                          h.id
                        );
                      }),
              }),
            }),
          ],
        }),
        n.jsx(O0, { isOpen: l, onClose: () => i(!1), onSuccess: v }),
        n.jsx($0, { isOpen: a, onClose: () => o(!1), onSuccess: z }),
        n.jsx(ka, {
          isOpen: d,
          onClose: () => f(!1),
          sectionKey: "outOfStock",
          sectionTitle: "缺貨通知",
        }),
      ],
    });
  },
  A0 = ({ outOfStockItems: e }) => {
    const [t, r] = N.useState(0),
      l = (() => {
        const c = localStorage.getItem("focusTable_outOfStock_itemsPerPage");
        return c ? parseInt(c, 10) : 5;
      })();
    N.useEffect(() => {
      if (e.length <= l) return;
      const c = setInterval(() => {
        r((d) => {
          const f = d + l;
          return f >= e.length ? 0 : f;
        });
      }, 8e3);
      return () => clearInterval(c);
    }, [e.length]);
    const i = (c) => {
        if (!c) return 0;
        try {
          console.log("計算缺貨天數 - 原始時間:", c);
          const d = new Date(c),
            f = new Date(),
            g = new Date(d.getFullYear(), d.getMonth(), d.getDate()),
            y = new Date(f.getFullYear(), f.getMonth(), f.getDate());
          console.log("最後庫存日期:", g), console.log("今天日期:", y);
          const v = y.getTime() - g.getTime(),
            x = Math.floor(v / (1e3 * 60 * 60 * 24));
          return (
            console.log("時間差(毫秒):", v),
            console.log("計算天數:", x),
            Math.max(0, x)
          );
        } catch (d) {
          return console.error("日期解析錯誤:", d, "原始日期:", c), 0;
        }
      },
      a = e.slice(t, t + l),
      o = Math.ceil(e.length / l),
      u = Math.floor(t / l) + 1;
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
                  className: `${P.subTitle} font-semibold text-gray-800 flex items-center`,
                  children: [
                    n.jsx(wi, {
                      size: 16,
                      className: `mr-2 text-red-500 ${K.xlarge}`,
                    }),
                    "缺貨通知",
                  ],
                }),
                n.jsxs("div", {
                  className: `${P.smallLabel} text-gray-600`,
                  children: ["總計: ", e.length, " 項"],
                }),
              ],
            }),
            e.length > l &&
              n.jsxs("div", {
                className: `flex items-center justify-between ${P.smallLabel} text-gray-600`,
                children: [
                  n.jsxs("span", { children: ["第 ", u, " / ", o, " 頁"] }),
                  n.jsx("div", {
                    className: "flex space-x-1",
                    children: Array.from({ length: o }, (c, d) =>
                      n.jsx(
                        "div",
                        {
                          className: `w-2 h-2 rounded-full ${
                            d === u - 1 ? "bg-red-500" : "bg-gray-300"
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
                      n.jsx(Me, {
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
                              className: `${P.content} font-semibold text-left p-2 text-gray-700`,
                              children: "藥品名稱",
                            }),
                            n.jsx("th", {
                              className: `${P.content} font-semibold text-center p-2 text-gray-700`,
                              children: "缺貨天數",
                            }),
                            n.jsx("th", {
                              className: `${P.content} font-semibold text-center p-2 text-gray-700`,
                              children: "庫存/最低",
                            }),
                          ],
                        }),
                      }),
                      n.jsx("tbody", {
                        children: a.map((c, d) => {
                          const f = i(c.lastStockDate),
                            g = f > 3 || c.status === "urgent_order";
                          return n.jsxs(
                            "tr",
                            {
                              className: `border-b border-gray-200 transition-colors ${
                                g ? "bg-red-50" : "bg-white hover:bg-gray-50"
                              }`,
                              children: [
                                n.jsx("td", {
                                  className: `${P.content} p-2 text-gray-800`,
                                  children: n.jsx("div", {
                                    className: "font-semibold",
                                    children: c.drugName,
                                  }),
                                }),
                                n.jsx("td", {
                                  className: `${P.content} p-2 text-center`,
                                  children: n.jsxs("span", {
                                    className: `font-semibold ${
                                      f > 3 ? "text-red-600" : "text-gray-700"
                                    }`,
                                    children: [f, " 天"],
                                  }),
                                }),
                                n.jsx("td", {
                                  className: `${P.content} p-2 text-center text-gray-700`,
                                  children:
                                    c.currentStock !== void 0 &&
                                    c.minimumStock !== void 0
                                      ? `${c.currentStock} / ${c.minimumStock}`
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
  Ci = ({
    outOfStockItems: e,
    isFullscreen: t = !1,
    onItemAdded: r,
    showInFocus: s,
    onFocusToggle: l,
  }) =>
    t
      ? n.jsx(A0, { outOfStockItems: e })
      : n.jsx(F0, {
          outOfStockItems: e,
          onItemAdded: r,
          showInFocus: s,
          onFocusToggle: l,
        }),
  U0 = ({ isOpen: e, onClose: t, onSuccess: r }) => {
    const [s, l] = N.useState({
        originalDrug: null,
        reason: "",
        start_time: "",
        end_time: "",
      }),
      [i, a] = N.useState([]),
      [o, u] = N.useState([]),
      [c, d] = N.useState(""),
      [f, g] = N.useState(!1),
      [y, v] = N.useState(!1),
      [x, z] = N.useState(!1),
      [h, m] = N.useState(null);
    Te.useEffect(() => {
      if (e) {
        const S = new Date(),
          L = S.toISOString().slice(0, 16),
          O = new Date(S);
        O.setMonth(O.getMonth() + 1);
        const V = O.toISOString().slice(0, 16);
        l({ originalDrug: null, reason: "", start_time: L, end_time: V }),
          d(""),
          u([]),
          g(!1),
          m(null),
          p();
      }
    }, [e]);
    const p = async () => {
        v(!0);
        try {
          const S = await Xs();
          S.Code === 200 && S.Data
            ? a(S.Data)
            : console.warn("Failed to load medicine data:", S);
        } catch (S) {
          console.error("Error loading medicine data:", S);
        } finally {
          v(!1);
        }
      },
      w = (S, L) => {
        l((O) => ({ ...O, [S]: L }));
      },
      D = (S) => {
        if ((d(S), !S.trim())) {
          u([]), g(!1);
          return;
        }
        const L = S.toLowerCase(),
          O = i.filter((V) => {
            const we = (V.NAME || "").toLowerCase(),
              He = (V.CODE || "").toLowerCase(),
              Ve = (V.SKDIACODE || "").toLowerCase(),
              lt = (V.CHT_NAME || "").toLowerCase();
            return (
              we.includes(L) ||
              He.includes(L) ||
              Ve.includes(L) ||
              lt.includes(L)
            );
          });
        u(O.slice(0, 10)), g(O.length > 0);
      },
      E = (S) => {
        l((L) => ({ ...L, originalDrug: S })), d(S.NAME), g(!1), u([]);
      },
      T = () => {
        if (!s.originalDrug) return "請選擇藥品";
        if (!s.reason.trim()) return "請輸入替換原因";
        if (!s.start_time) return "請選擇開始時間";
        if (!s.end_time) return "請選擇結束時間";
        const S = new Date(s.start_time);
        return new Date(s.end_time) <= S ? "結束時間必須晚於開始時間" : null;
      },
      C = async () => {
        m(null);
        const S = T();
        if (S) {
          m(S);
          return;
        }
        const L = In();
        if (!L) {
          m("無法獲取使用者資訊，請重新登入");
          return;
        }
        z(!0);
        try {
          const O = (we) => we.replace("T", " ") + ":00",
            V = {
              title: "藥品通知",
              content: `${s.originalDrug.NAME.trim()};${s.originalDrug.CODE.trim()}`,
              note: s.reason.trim(),
              priority: "Important",
              creator_dept: L.Employer || "",
              creator_name: L.Name || "",
              start_time: O(s.start_time),
              end_time: O(s.end_time),
            };
          await n0(V), t(), r();
        } catch (O) {
          m(
            O instanceof Error ? O.message : "新增藥品通知項目失敗，請稍後再試"
          );
        } finally {
          z(!1);
        }
      },
      b = () => {
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
                      n.jsx(xt, { size: 24, className: "text-blue-600 mr-3" }),
                      n.jsx("h2", {
                        className: "text-xl font-semibold text-gray-800",
                        children: "新增藥品通知",
                      }),
                    ],
                  }),
                  n.jsx("button", {
                    onClick: b,
                    disabled: x,
                    className:
                      "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                    children: n.jsx(Ze, { size: 20 }),
                  }),
                ],
              }),
              n.jsxs("div", {
                className: "p-6 space-y-6",
                children: [
                  h &&
                    n.jsxs("div", {
                      className:
                        "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center",
                      children: [
                        n.jsx(Je, {
                          size: 20,
                          className: "mr-2 flex-shrink-0",
                        }),
                        h,
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
                            children: n.jsx(kn, {
                              size: 16,
                              className: "text-gray-400",
                            }),
                          }),
                          n.jsx("input", {
                            type: "text",
                            value: c,
                            onChange: (S) => D(S.target.value),
                            onFocus: () => {
                              o.length > 0 && g(!0);
                            },
                            disabled: x || y,
                            className:
                              "w-full pl-10 pr-10 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                            placeholder: "請輸入藥品名稱進行搜尋",
                            autoComplete: "off",
                          }),
                          y &&
                            n.jsx("div", {
                              className:
                                "absolute inset-y-0 right-0 flex items-center pr-3",
                              children: n.jsx(X, { size: "small" }),
                            }),
                          f &&
                            n.jsx("div", {
                              className:
                                "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",
                              children: n.jsx(bn, {
                                size: 16,
                                className: "text-gray-400",
                              }),
                            }),
                        ],
                      }),
                      f &&
                        o.length > 0 &&
                        n.jsx("div", {
                          className:
                            "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                          children: o.map((S, L) =>
                            n.jsxs(
                              "button",
                              {
                                type: "button",
                                onClick: () => E(S),
                                className:
                                  "w-full px-4 py-2 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors border-b border-gray-100 last:border-b-0",
                                children: [
                                  n.jsx("div", {
                                    className: "font-medium text-gray-900",
                                    children: S.NAME,
                                  }),
                                  n.jsxs("div", {
                                    className:
                                      "text-sm text-gray-500 space-y-0.5",
                                    children: [
                                      n.jsxs("div", {
                                        children: ["藥碼: ", S.CODE],
                                      }),
                                      S.SKDIACODE &&
                                        n.jsxs("div", {
                                          children: ["料號: ", S.SKDIACODE],
                                        }),
                                      S.CHT_NAME &&
                                        n.jsxs("div", {
                                          children: ["中文名: ", S.CHT_NAME],
                                        }),
                                    ],
                                  }),
                                ],
                              },
                              L
                            )
                          ),
                        }),
                    ],
                  }),
                  f &&
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
                        onChange: (S) => w("reason", S.target.value),
                        disabled: x,
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
                            onChange: (S) => w("start_time", S.target.value),
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
                            onChange: (S) => w("end_time", S.target.value),
                            disabled: x,
                            className:
                              "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                          }),
                        ],
                      }),
                    ],
                  }),
                  y &&
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
                    onClick: b,
                    disabled: x,
                    className:
                      "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                    children: "取消",
                  }),
                  n.jsx("button", {
                    onClick: C,
                    disabled: x || !s.originalDrug || !s.reason.trim(),
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
                            n.jsx(xt, { size: 16, className: "mr-2" }),
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
    const [s, l] = N.useState([]),
      [i, a] = N.useState(!1),
      [o, u] = N.useState(null),
      [c, d] = N.useState(null),
      [f, g] = N.useState(!1),
      [y, v] = N.useState(!1),
      [x, z] = N.useState(!1),
      [h, m] = N.useState([]),
      [p, w] = N.useState([]),
      [D, E] = N.useState(null),
      [T, C] = N.useState(!1);
    N.useEffect(() => {
      e && b();
    }, [e]);
    const b = async () => {
        a(!0), u(null);
        try {
          const j = await r0();
          if (j.Code === 200) l(j.Data || []);
          else throw new Error(j.Result || "載入歷史藥品通知項目失敗");
        } catch (j) {
          u(j instanceof Error ? j.message : "載入歷史藥品通知項目時發生錯誤");
        } finally {
          a(!1);
        }
      },
      S = async () => {
        C(!0);
        try {
          const j = await Xs();
          j.Code === 200 && j.Data
            ? m(j.Data)
            : console.warn("Failed to load medicine data:", j);
        } catch (j) {
          console.error("Error loading medicine data:", j);
        } finally {
          C(!1);
        }
      },
      L = (j) => {
        const A = (ee) => {
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
          GUID: j.GUID,
          title: j.title || "",
          content: j.content || "",
          note: j.note || "",
          priority: j.priority || "Normal",
          creator_dept: j.creator_dept || "",
          creator_name: j.creator_name || "",
          start_time: A(j.start_time),
          end_time: A(j.end_time),
          created_time: j.created_time || "",
        }),
          h.length === 0 && S();
      },
      O = (j, A) => {
        if (!j.trim()) {
          w([]), E(null);
          return;
        }
        const ee = h.filter((_e) =>
          _e.NAME.toLowerCase().includes(j.toLowerCase())
        );
        w(ee.slice(0, 10)), E(ee.length > 0 ? A : null);
      },
      V = (j, A) => {
        if (c) {
          const ee = c.content.split(";");
          let _e = "";
          A === "original"
            ? (_e = `${j};${ee[1] || ""}`)
            : (_e = `${ee[0] || ""};${j}`),
            d({ ...c, content: _e });
        }
        E(null), w([]);
      },
      we = (j) => {
        var A;
        return ((A = j.split(";")[0]) == null ? void 0 : A.trim()) || "";
      },
      He = (j) => {
        var A;
        return ((A = j.split(";")[1]) == null ? void 0 : A.trim()) || "";
      },
      Ve = async () => {
        if (c) {
          g(!0), u(null);
          try {
            const j = (ee) =>
                ee ? ee.replace("T", " ").replace(/-/g, "/") + ":00" : "",
              A = {
                GUID: c.GUID,
                title: c.title.trim(),
                content: c.content.trim(),
                note: c.note.trim(),
                priority: c.priority,
                creator_dept: c.creator_dept,
                creator_name: c.creator_name,
                start_time: j(c.start_time),
                end_time: j(c.end_time),
              };
            await s0(A), await b(), d(null), r && r();
          } catch (j) {
            u(
              j instanceof Error
                ? j.message
                : "更新藥品通知項目失敗，請稍後再試"
            );
          } finally {
            g(!1);
          }
        }
      },
      lt = async () => {
        if (c) {
          z(!0), u(null), v(!1);
          try {
            await l0(c.GUID), await b(), d(null), r && r();
          } catch (j) {
            u(
              j instanceof Error
                ? j.message
                : "刪除藥品通知項目失敗，請稍後再試"
            );
          } finally {
            z(!1);
          }
        }
      },
      I = (j) => {
        if (!j) return "-";
        try {
          const A = j.replace(/\//g, "-");
          return new Date(A).toLocaleString("zh-TW", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: !1,
          });
        } catch {
          return j;
        }
      },
      R = (j) => {
        switch (j) {
          case "Critical":
            return "緊急";
          case "Important":
            return "重要";
          case "Normal":
            return "一般";
          default:
            return j || "一般";
        }
      },
      k = (j) => {
        switch (j) {
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
        !i && !f && !x && (d(null), v(!1), t());
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
                        n.jsx(ht, {
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
                      onClick: F,
                      disabled: i || f,
                      className:
                        "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                      children: n.jsx(Ze, { size: 20 }),
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
                          n.jsx(Je, {
                            size: 20,
                            className: "mr-2 flex-shrink-0",
                          }),
                          o,
                        ],
                      }),
                    i
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
                            n.jsx(ht, {
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
                                  children: s.map((j) =>
                                    n.jsxs(
                                      "tr",
                                      {
                                        className:
                                          "hover:bg-blue-50 cursor-pointer transition-colors",
                                        onClick: () => L(j),
                                        title: "點擊編輯此藥品通知項目",
                                        children: [
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: I(j.created_time),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 text-sm text-gray-900 max-w-xs",
                                            children: n.jsx("div", {
                                              className: "truncate",
                                              title: we(j.content),
                                              children: we(j.content) || "-",
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 text-sm text-gray-900 max-w-xs",
                                            children: n.jsx("div", {
                                              className: "truncate",
                                              title: He(j.content),
                                              children: He(j.content) || "-",
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 text-sm text-gray-900 max-w-md",
                                            children: n.jsx("div", {
                                              className: "truncate",
                                              title: j.note,
                                              children: j.note || "-",
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap",
                                            children: n.jsx("span", {
                                              className: `px-2 py-1 rounded-full text-xs font-medium ${k(
                                                j.priority
                                              )}`,
                                              children: R(j.priority),
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children:
                                              `${j.creator_dept || ""} ${
                                                j.creator_name || ""
                                              }`.trim() || "-",
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: I(j.start_time),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: I(j.end_time),
                                          }),
                                        ],
                                      },
                                      j.GUID
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
            c &&
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
                            n.jsx(Ir, {
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
                              disabled: f || x,
                              className:
                                "flex items-center px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                              title: "刪除藥品通知項目",
                              children: [
                                n.jsx(dt, { size: 16, className: "mr-2" }),
                                "刪除",
                              ],
                            }),
                            n.jsx("button", {
                              onClick: () => d(null),
                              disabled: f || x,
                              className:
                                "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                              children: n.jsx(Ze, { size: 20 }),
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
                                  children: n.jsx(kn, {
                                    size: 16,
                                    className: "text-gray-400",
                                  }),
                                }),
                                n.jsx("input", {
                                  type: "text",
                                  value: we(c.content),
                                  onChange: (j) => {
                                    const A = `${j.target.value};${He(
                                      c.content
                                    )}`;
                                    d({ ...c, content: A }),
                                      O(j.target.value, "original");
                                  },
                                  onFocus: () => {
                                    p.length > 0 && E("original");
                                  },
                                  disabled: f || T,
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
                                D === "original" &&
                                  n.jsx("div", {
                                    className:
                                      "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",
                                    children: n.jsx(bn, {
                                      size: 16,
                                      className: "text-gray-400",
                                    }),
                                  }),
                              ],
                            }),
                            D === "original" &&
                              p.length > 0 &&
                              n.jsx("div", {
                                className:
                                  "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                                children: p.map((j, A) =>
                                  n.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      onClick: () => V(j.NAME, "original"),
                                      className:
                                        "w-full px-4 py-2 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors border-b border-gray-100 last:border-b-0",
                                      children: n.jsx("div", {
                                        className: "font-medium text-gray-900",
                                        children: j.NAME,
                                      }),
                                    },
                                    A
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
                                  children: n.jsx(kn, {
                                    size: 16,
                                    className: "text-gray-400",
                                  }),
                                }),
                                n.jsx("input", {
                                  type: "text",
                                  value: He(c.content),
                                  onChange: (j) => {
                                    const A = `${we(c.content)};${
                                      j.target.value
                                    }`;
                                    d({ ...c, content: A }),
                                      O(j.target.value, "replacement");
                                  },
                                  onFocus: () => {
                                    p.length > 0 && E("replacement");
                                  },
                                  disabled: f || T,
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
                                D === "replacement" &&
                                  n.jsx("div", {
                                    className:
                                      "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",
                                    children: n.jsx(bn, {
                                      size: 16,
                                      className: "text-gray-400",
                                    }),
                                  }),
                              ],
                            }),
                            D === "replacement" &&
                              p.length > 0 &&
                              n.jsx("div", {
                                className:
                                  "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                                children: p.map((j, A) =>
                                  n.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      onClick: () => V(j.NAME, "replacement"),
                                      className:
                                        "w-full px-4 py-2 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors border-b border-gray-100 last:border-b-0",
                                      children: n.jsx("div", {
                                        className: "font-medium text-gray-900",
                                        children: j.NAME,
                                      }),
                                    },
                                    A
                                  )
                                ),
                              }),
                          ],
                        }),
                        D &&
                          n.jsx("div", {
                            className: "fixed inset-0 z-40",
                            onClick: () => E(null),
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
                              value: c.note,
                              onChange: (j) =>
                                d({ ...c, note: j.target.value }),
                              disabled: f,
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
                              value: c.priority,
                              onChange: (j) =>
                                d({ ...c, priority: j.target.value }),
                              disabled: f,
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
                                  value: c.start_time,
                                  onChange: (j) =>
                                    d({ ...c, start_time: j.target.value }),
                                  disabled: f,
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
                                  value: c.end_time,
                                  onChange: (j) =>
                                    d({ ...c, end_time: j.target.value }),
                                  disabled: f,
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
                          disabled: f || x,
                          className:
                            "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        n.jsx("button", {
                          onClick: Ve,
                          disabled:
                            f || x || !c.content.trim() || !c.note.trim(),
                          className:
                            "flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                          children:
                            f || x
                              ? n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(X, {
                                      size: "small",
                                      className: "mr-2",
                                    }),
                                    f ? "更新中..." : "處理中...",
                                  ],
                                })
                              : n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(Ir, { size: 16, className: "mr-2" }),
                                    "更新項目",
                                  ],
                                }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            y &&
              c &&
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
                          n.jsx(dt, {
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
                          we(c.content),
                          " → ",
                          He(c.content),
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
                            disabled: x,
                            className:
                              "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                            children: "取消",
                          }),
                          n.jsx("button", {
                            onClick: lt,
                            disabled: x,
                            className:
                              "flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                            children: x
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
                                    n.jsx(dt, { size: 16, className: "mr-2" }),
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
  H0 = ({
    drugReplacements: e,
    onItemAdded: t,
    showInFocus: r = !0,
    onFocusToggle: s,
  }) => {
    const [l, i] = Te.useState(!1),
      [a, o] = Te.useState(!1),
      u = (g) => {
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
      c = (g) => {
        const y = new Date(g),
          v = new Date();
        return (
          y.getTime() - v.getTime(),
          y.toLocaleDateString("zh-TW", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })
        );
      },
      d = () => {
        t && t();
      },
      f = () => {
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
                        n.jsx(br, {
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
                            n.jsx(ht, { size: 16, className: "mr-2" }),
                            "查看歷史",
                          ],
                        }),
                        n.jsxs("button", {
                          onClick: () => i(!0),
                          className:
                            "flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors text-sm",
                          children: [
                            n.jsx(xt, { size: 16, className: "mr-2" }),
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
                          n.jsx(br, {
                            size: 48,
                            className: "mx-auto text-gray-300 mb-2",
                          }),
                          n.jsx("p", { children: "暫無藥品通知" }),
                        ],
                      })
                    : e.map((g) => {
                        const [y, v] = [g.originalDrug, g.replacementDrug];
                        return n.jsxs(
                          "div",
                          {
                            className: `p-3 rounded-lg border ${u(g.priority)}`,
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
                                        children: y,
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
                                      n.jsx(Yt, {
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
                                      n.jsx(Ys, {
                                        size: 14,
                                        className: "mr-2 text-gray-400",
                                      }),
                                      n.jsxs("span", {
                                        children: [
                                          "生效日期: ",
                                          c(g.effectiveDate),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          g.id || `${g.originalDrug}`
                        );
                      }),
              }),
            }),
          ],
        }),
        n.jsx(U0, { isOpen: l, onClose: () => i(!1), onSuccess: d }),
        n.jsx(B0, { isOpen: a, onClose: () => o(!1), onSuccess: f }),
      ],
    });
  },
  V0 = ({ drugReplacements: e }) => {
    const [t, r] = N.useState(0),
      s = (u) => {
        switch (u) {
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
    N.useEffect(() => {
      if (e.length <= 1) return;
      const u = setInterval(() => {
        r((c) => (c + 1) % e.length);
      }, 8e3);
      return () => clearInterval(u);
    }, [e.length]);
    const l = (u) => {
      const c = new Date(u),
        d = new Date();
      return (
        c.getTime() - d.getTime(),
        c.toLocaleDateString("zh-TW", {
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
            className: "p-3 border-b border-gray-200 bg-purple-50",
            children: n.jsxs("div", {
              className: "flex items-center",
              children: [
                n.jsx(br, { size: 18, className: "text-purple-600 mr-2" }),
                n.jsx("h3", {
                  className: "text-base font-semibold text-gray-800",
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
                n.jsx(br, {
                  size: 32,
                  className: "mx-auto text-gray-300 mb-2",
                }),
                n.jsx("p", { className: "text-sm", children: "暫無藥品通知" }),
              ],
            }),
          }),
        ],
      });
    const i = e[t],
      [a, o] = [i.originalDrug, i.replacementDrug];
    return n.jsxs("div", {
      className:
        "bg-white rounded-xl shadow-lg border border-gray-200 h-full flex flex-col",
      children: [
        n.jsx("div", {
          className: "p-3 border-b border-gray-200 bg-purple-50",
          children: n.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              n.jsxs("div", {
                className: "flex items-center",
                children: [
                  n.jsx(br, {
                    size: 22,
                    className: `text-purple-600 mr-3 ${K.xlarge}`,
                  }),
                  n.jsx("h3", {
                    className: `${P.subTitle} font-bold text-gray-800`,
                    children: "藥品通知",
                  }),
                ],
              }),
              n.jsxs("span", {
                className: `${P.smallLabel} text-gray-500 font-medium`,
                children: [t + 1, "/", e.length],
              }),
            ],
          }),
        }),
        n.jsx("div", {
          className: "flex-1 p-3",
          children: n.jsxs("div", {
            className: `h-full p-4 border rounded-xl transition-colors ${s(
              i.priority
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
                        className: `font-medium text-gray-900 ${P.label}`,
                        children: a,
                      }),
                      n.jsx("div", {
                        className: `pl-2 font-medium text-gray-600 ${P.label}`,
                        children: o,
                      }),
                    ],
                  }),
                }),
              }),
              n.jsxs("div", {
                className: `mt-4 space-y-2 ${P.smallLabel} text-gray-600`,
                children: [
                  n.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      n.jsx(Yt, {
                        size: 14,
                        className: `mr-2 text-gray-400 ${K.small}`,
                      }),
                      n.jsxs("span", { children: ["原因: ", i.reason] }),
                    ],
                  }),
                  n.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      n.jsx(Ys, {
                        size: 14,
                        className: `mr-2 text-gray-400 ${K.small}`,
                      }),
                      n.jsxs("span", {
                        children: ["生效: ", l(i.effectiveDate)],
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
  Di = ({
    drugReplacements: e,
    isFullscreen: t = !1,
    onItemAdded: r,
    showInFocus: s,
    onFocusToggle: l,
  }) =>
    t
      ? n.jsx(V0, { drugReplacements: e })
      : n.jsx(H0, {
          drugReplacements: e,
          onItemAdded: r,
          showInFocus: s,
          onFocusToggle: l,
        }),
  Q0 = ({ inventoryHighlights: e, showInFocus: t = !0, onFocusToggle: r }) => {
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
                  n.jsx(Me, { size: 20, className: "text-indigo-600 mr-2" }),
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
                              onChange: (i) => r(i.target.checked),
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
                    children: n.jsx(Sn, { size: 18 }),
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
                      n.jsx(Me, {
                        size: 48,
                        className: "mx-auto text-gray-300 mb-2",
                      }),
                      n.jsx("p", { children: "暫無庫存監控項目" }),
                    ],
                  })
                : e.map((i) =>
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
                                  children: i.name,
                                }),
                                n.jsxs("p", {
                                  className: "text-sm text-gray-500",
                                  children: ["藥碼: ", i.code],
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
                                    children: "庫存:",
                                  }),
                                  n.jsx("span", {
                                    className:
                                      "ml-2 font-semibold text-gray-800",
                                    children: i.totalQuantity,
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
                                    children: i.batchCount,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      i.id
                    )
                  ),
          }),
        }),
        n.jsx(ka, {
          isOpen: s,
          onClose: () => l(!1),
          sectionKey: "inventory",
          sectionTitle: "即時庫存重點",
        }),
      ],
    });
  },
  W0 = ({ inventoryHighlights: e }) => {
    const [t, r] = N.useState(0),
      l = (() => {
        const u = localStorage.getItem("focusTable_inventory_itemsPerPage");
        return u ? parseInt(u, 10) : 5;
      })();
    N.useEffect(() => {
      if (e.length <= l) return;
      const u = setInterval(() => {
        r((c) => {
          const d = c + l;
          return d >= e.length ? 0 : d;
        });
      }, 8e3);
      return () => clearInterval(u);
    }, [e.length, l]);
    const i = e.slice(t, t + l),
      a = Math.ceil(e.length / l),
      o = Math.floor(t / l) + 1;
    return n.jsxs("div", {
      className:
        "bg-white rounded-xl shadow-lg border border-gray-200 h-full flex flex-col min-h-0 max-h-full",
      children: [
        n.jsxs("div", {
          className: "p-2 border-b border-gray-200 bg-indigo-50 flex-shrink-0",
          children: [
            n.jsxs("div", {
              className: "flex items-center justify-between mb-2",
              children: [
                n.jsxs("h3", {
                  className: `${P.subTitle} font-semibold text-gray-800 flex items-center`,
                  children: [
                    n.jsx(Me, {
                      size: 16,
                      className: `mr-2 text-indigo-600 ${K.xlarge}`,
                    }),
                    "即時庫存重點",
                  ],
                }),
                n.jsxs("div", {
                  className: `${P.smallLabel} text-gray-600`,
                  children: ["總計: ", e.length, " 項"],
                }),
              ],
            }),
            e.length > l &&
              n.jsxs("div", {
                className: `flex items-center justify-between ${P.smallLabel} text-gray-600`,
                children: [
                  n.jsxs("span", { children: ["第 ", o, " / ", a, " 頁"] }),
                  n.jsx("div", {
                    className: "flex space-x-1",
                    children: Array.from({ length: a }, (u, c) =>
                      n.jsx(
                        "div",
                        {
                          className: `w-2 h-2 rounded-full ${
                            c === o - 1 ? "bg-indigo-500" : "bg-gray-300"
                          }`,
                        },
                        c
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
                      n.jsx(Me, {
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
                    className: "w-full table-fixed border-collapse",
                    children: [
                      n.jsxs("colgroup", {
                        children: [
                          n.jsx("col", { className: "w-[60%]" }),
                          n.jsx("col", { className: "w-[20%]" }),
                          n.jsx("col", { className: "w-[20%]" }),
                        ],
                      }),
                      n.jsx("thead", {
                        className:
                          "sticky top-0 bg-gray-50 border-b-2 border-gray-200",
                        children: n.jsxs("tr", {
                          children: [
                            n.jsx("th", {
                              className: `${P.content} font-semibold text-left p-2 text-gray-700 truncate whitespace-nowrap`,
                              children: "藥品名稱",
                            }),
                            n.jsx("th", {
                              className: `${P.content} font-semibold text-center p-2 whitespace-nowrap truncate text-gray-700`,
                              children: "藥碼",
                            }),
                            n.jsx("th", {
                              className: `${P.content} font-semibold text-center p-2 whitespace-nowrap truncate text-gray-700`,
                              children: "庫存",
                            }),
                          ],
                        }),
                      }),
                      n.jsx("tbody", {
                        children: i.map((u, c) =>
                          n.jsxs(
                            "tr",
                            {
                              className: `border-b border-gray-200 transition-colors ${
                                c % 2 === 0
                                  ? "bg-white hover:bg-gray-300"
                                  : "bg-gray-200 hover:bg-gray-300"
                              }`,
                              children: [
                                n.jsx("td", {
                                  className: `${P.content} truncate whitespace-nowrap p-2 text-gray-800`,
                                  children: n.jsx("div", {
                                    className:
                                      "font-semibold truncate whitespace-nowrap",
                                    children: u.name,
                                  }),
                                }),
                                n.jsx("td", {
                                  className: `${P.content} p-2 text-center whitespace-nowrap truncate text-gray-600`,
                                  children: u.code,
                                }),
                                n.jsx("td", {
                                  className: `${P.content} p-2 whitespace-nowrap truncate text-center`,
                                  children: n.jsx("div", {
                                    className: "font-semibold text-gray-700",
                                    children: u.totalQuantity,
                                  }),
                                }),
                              ],
                            },
                            `${t}-${c}`
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
  _i = ({
    inventoryHighlights: e,
    isFullscreen: t = !1,
    showInFocus: r,
    onFocusToggle: s,
  }) =>
    t
      ? n.jsx(W0, { inventoryHighlights: e })
      : n.jsx(Q0, { inventoryHighlights: e, showInFocus: r, onFocusToggle: s });
class q0 {
  constructor() {
    (this.audioContext = null),
      (this.isEnabled = !0),
      this.initializeAudioContext(),
      this.loadSettings();
  }
  initializeAudioContext() {
    try {
      this.audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
    } catch (t) {
      console.warn("Audio context not supported:", t);
    }
  }
  async resumeAudioContext() {
    if (this.audioContext && this.audioContext.state === "suspended")
      try {
        await this.audioContext.resume();
      } catch (t) {
        console.warn("Failed to resume audio context:", t);
      }
  }
  createDingSound() {
    if (!this.audioContext) return;
    const t = this.audioContext.createOscillator(),
      r = this.audioContext.createGain();
    t.connect(r),
      r.connect(this.audioContext.destination),
      t.frequency.setValueAtTime(800, this.audioContext.currentTime),
      (t.type = "sine"),
      r.gain.setValueAtTime(0.5, this.audioContext.currentTime),
      r.gain.exponentialRampToValueAtTime(
        0.01,
        this.audioContext.currentTime + 0.3
      ),
      t.start(this.audioContext.currentTime),
      t.stop(this.audioContext.currentTime + 0.3);
  }
  async playNotification() {
    if (this.isEnabled)
      try {
        await this.resumeAudioContext(), this.createDingSound();
      } catch (t) {
        console.warn("Failed to play notification sound:", t);
      }
  }
  enable() {
    (this.isEnabled = !0), this.saveSettings();
  }
  disable() {
    (this.isEnabled = !1), this.saveSettings();
  }
  toggle() {
    return (
      (this.isEnabled = !this.isEnabled), this.saveSettings(), this.isEnabled
    );
  }
  getStatus() {
    return this.isEnabled;
  }
  saveSettings() {
    try {
      localStorage.setItem(
        "internalRequestNotificationEnabled",
        JSON.stringify(this.isEnabled)
      );
    } catch (t) {
      console.warn("Failed to save notification settings:", t);
    }
  }
  loadSettings() {
    try {
      const t = localStorage.getItem("internalRequestNotificationEnabled");
      t !== null && (this.isEnabled = JSON.parse(t));
    } catch (t) {
      console.warn("Failed to load notification settings:", t);
    }
  }
}
const kr = new q0(),
  G0 = ({ internalRequests: e, showInFocus: t = !0, onFocusToggle: r }) => {
    const [s, l] = N.useState(kr.getStatus()),
      i = N.useRef(new Set());
    N.useEffect(() => {
      const d = new Set();
      e.forEach((g) => {
        g.state === "等待過帳" && g.actionType === "緊急申領" && d.add(g.id);
      }),
        Array.from(d).some((g) => !i.current.has(g)) &&
          i.current.size > 0 &&
          kr.playNotification(),
        (i.current = d);
    }, [e]);
    const a = () => {
        const d = kr.toggle();
        l(d);
      },
      o = (d, f) => {
        if (d === "等待過帳" && f === "緊急申領")
          return "border-red-500 bg-red-50";
        switch (d) {
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
      u = (d) => {
        try {
          return new Date(d.replace(/\//g, "-")).toLocaleString("zh-TW", {
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          });
        } catch {
          return d;
        }
      },
      c = [...e].sort((d, f) => {
        if (d.state === "等待過帳" && d.actionType === "緊急申領") return -1;
        if (f.state === "等待過帳" && f.actionType === "緊急申領") return 1;
        const g = { 等待過帳: 0, 已過帳: 1, 已簽收: 2 },
          y = g[d.state],
          v = g[f.state];
        if (y !== v) return y - v;
        try {
          const x = new Date(d.requestTime.replace(/\//g, "-")).getTime();
          return new Date(f.requestTime.replace(/\//g, "-")).getTime() - x;
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
                  n.jsx(Yt, { size: 20, className: "text-teal-600 mr-2" }),
                  n.jsx("h3", {
                    className: "text-lg font-semibold text-gray-800",
                    children: "內部申請通知",
                  }),
                  n.jsx("button", {
                    onClick: a,
                    className: `ml-3 p-2 rounded-lg transition-colors ${
                      s
                        ? "bg-green-100 text-green-600 hover:bg-green-200"
                        : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                    }`,
                    title: s ? "通知已啟用" : "通知已關閉",
                    children: s
                      ? n.jsx(Ni, { size: 18, className: "fill-current" })
                      : n.jsx(ji, { size: 18 }),
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
                              onChange: (d) => r(d.target.checked),
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
                  e.filter((d) => d.state === "等待過帳").length,
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
              c.length === 0
                ? n.jsxs("div", {
                    className: "text-center text-gray-500 py-8",
                    children: [
                      n.jsx(Yt, {
                        size: 48,
                        className: "mx-auto text-gray-300 mb-2",
                      }),
                      n.jsx("p", { children: "暫無內部申請" }),
                    ],
                  })
                : c.map(
                    (d) => (
                      d.state === "等待過帳" && d.actionType,
                      n.jsxs(
                        "div",
                        {
                          className: `p-3 border-2 rounded-lg transition-colors ${o(
                            d.state,
                            d.actionType
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
                                          children: d.code,
                                        }),
                                        d.actionType === "緊急申領" &&
                                          n.jsxs("span", {
                                            className:
                                              "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-red-600 text-white",
                                            children: [
                                              n.jsx(Je, {
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
                                      children: d.name,
                                    }),
                                  ],
                                }),
                                n.jsx("span", {
                                  className:
                                    "px-2 py-1 rounded-lg text-xs font-medium bg-gray-100 text-gray-700",
                                  children: d.state,
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
                                        n.jsx(Zu, {
                                          size: 14,
                                          className: "mr-2 text-gray-400",
                                        }),
                                        n.jsx("span", {
                                          children: d.requestingUnit,
                                        }),
                                      ],
                                    }),
                                    n.jsxs("div", {
                                      className: "flex items-center",
                                      children: [
                                        n.jsx(Me, {
                                          size: 14,
                                          className: "mr-2 text-gray-400",
                                        }),
                                        n.jsxs("span", {
                                          className: "font-medium",
                                          children: [
                                            "數量: ",
                                            d.requestedQuantity,
                                          ],
                                        }),
                                      ],
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
                                        "申請人: ",
                                        d.requestingPerson,
                                      ],
                                    }),
                                  ],
                                }),
                                n.jsxs("div", {
                                  className: "flex items-center",
                                  children: [
                                    n.jsx(zn, {
                                      size: 14,
                                      className: "mr-2 text-gray-400",
                                    }),
                                    n.jsxs("span", {
                                      children: [
                                        "申請時間: ",
                                        u(d.requestTime),
                                      ],
                                    }),
                                  ],
                                }),
                                d.remarks &&
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
                                        children: d.remarks,
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        },
                        d.id
                      )
                    )
                  ),
          }),
        }),
      ],
    });
  },
  Y0 = ({ internalRequests: e }) => {
    const [t, r] = N.useState(0),
      [s, l] = N.useState(kr.getStatus()),
      i = N.useRef(new Set());
    N.useEffect(() => {
      const y = new Set();
      e.forEach((x) => {
        x.state === "等待過帳" && x.actionType === "緊急申領" && y.add(x.id);
      }),
        Array.from(y).some((x) => !i.current.has(x)) &&
          i.current.size > 0 &&
          kr.playNotification(),
        (i.current = y);
    }, [e]),
      N.useEffect(() => {
        if (e.length <= 1) return;
        const y = setInterval(() => {
          r((v) => (v + 1) % e.length);
        }, 6e3);
        return () => clearInterval(y);
      }, [e.length]);
    const a = () => {
        const y = kr.toggle();
        l(y);
      },
      o = (y, v) => {
        if (y === "等待過帳" && v === "緊急申領")
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
      u = (y, v) => {
        if (y === "等待過帳" && v === "緊急申領") return "text-gray-800";
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
      c = (y) => {
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
      };
    if (e.length === 0)
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
                    n.jsx(Yt, { size: 20, className: "text-teal-600 mr-2" }),
                    n.jsx("h3", {
                      className: `${P.subTitle} font-semibold text-gray-800`,
                      children: "內部申請通知",
                    }),
                  ],
                }),
                n.jsx("button", {
                  onClick: a,
                  className: `p-2 rounded-lg transition-colors ${
                    s
                      ? "bg-green-100 text-green-600 hover:bg-green-200"
                      : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                  }`,
                  title: s ? "通知已啟用" : "通知已關閉",
                  children: s
                    ? n.jsx(Ni, { size: 18, className: "fill-current" })
                    : n.jsx(ji, { size: 18 }),
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
                  size: 48,
                  className: "mx-auto text-gray-300 mb-2",
                }),
                n.jsx("p", { children: "暫無內部申請" }),
              ],
            }),
          }),
        ],
      });
    const d = [...e].sort((y, v) => {
        if (y.state === "等待過帳" && y.actionType === "緊急申領") return -1;
        if (v.state === "等待過帳" && v.actionType === "緊急申領") return 1;
        const x = { 等待過帳: 0, 已過帳: 1, 已簽收: 2 },
          z = x[y.state],
          h = x[v.state];
        if (z !== h) return z - h;
        try {
          const m = new Date(y.requestTime.replace(/\//g, "-")).getTime();
          return new Date(v.requestTime.replace(/\//g, "-")).getTime() - m;
        } catch {
          return 0;
        }
      }),
      f = d[t],
      g = f.state === "等待過帳" && f.actionType === "緊急申領";
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
                  n.jsx(Yt, {
                    size: 18,
                    className: `text-teal-600 mr-2 ${K.xlarge}`,
                  }),
                  n.jsx("h3", {
                    className: `${P.subTitle} font-semibold text-gray-800`,
                    children: "內部申請通知",
                  }),
                ],
              }),
              n.jsxs("div", {
                className: "flex items-center space-x-4",
                children: [
                  n.jsx("button", {
                    onClick: a,
                    className: `p-2 rounded-lg transition-colors ${
                      s
                        ? "bg-green-100 text-green-600 hover:bg-green-200"
                        : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                    }`,
                    title: s ? "通知已啟用" : "通知已關閉",
                    children: s
                      ? n.jsx(Ni, { size: 18, className: "fill-current" })
                      : n.jsx(ji, { size: 18 }),
                  }),
                  n.jsxs("span", {
                    className: `${P.smallLabel} text-gray-500 font-medium`,
                    children: [
                      e.filter((y) => y.state === "等待過帳").length,
                      " 項待處理",
                    ],
                  }),
                  n.jsxs("span", {
                    className: `${P.smallLabel} text-gray-500 font-medium`,
                    children: [t + 1, "/", d.length],
                  }),
                ],
              }),
            ],
          }),
        }),
        n.jsx("div", {
          className: "flex-1 p-1 min-h-0 overflow-hidden",
          children: n.jsxs("div", {
            className: `h-full p-3 border-2 rounded-lg transition-all flex flex-col ${o(
              f.state,
              f.actionType
            )}`,
            children: [
              n.jsx("div", {
                className: "flex items-start justify-between mb-3",
                children: n.jsxs("div", {
                  className: "flex-1",
                  children: [
                    n.jsxs("div", {
                      className: "flex items-center justify-between gap-1 mb-2",
                      children: [
                        n.jsx("span", {
                          className: `${P.content} font-semibold ${u(
                            f.state,
                            f.actionType
                          )}`,
                          children: f.code,
                        }),
                        f.actionType === "緊急申領" &&
                          n.jsxs("span", {
                            className:
                              "inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-red-600 text-white",
                            children: [
                              n.jsx(Je, { size: 12, className: "mr-1" }),
                              "緊急申領",
                            ],
                          }),
                      ],
                    }),
                    n.jsx("h4", {
                      className: `font-semibold ${P.subTitle} ${u(
                        f.state,
                        f.actionType
                      )} leading-tight`,
                      children: f.name,
                    }),
                  ],
                }),
              }),
              n.jsxs("div", {
                className: `grid grid-cols-2 gap-4 ${P.content} ${u(
                  f.state,
                  f.actionType
                )} flex-1 min-h-0`,
                children: [
                  n.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      n.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          n.jsx(Zu, {
                            size: 20,
                            className: `mr-2 ${K.small} ${
                              g ? "text-gray-800" : "text-gray-400"
                            }`,
                          }),
                          n.jsx("span", {
                            children: n.jsx("strong", {
                              children: f.requestingUnit,
                            }),
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          n.jsx(Ks, {
                            size: 20,
                            className: `mr-2 ${K.small} ${
                              g ? "text-gray-800" : "text-gray-400"
                            }`,
                          }),
                          n.jsx("span", {
                            children: n.jsx("strong", {
                              children: f.requestingPerson,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      n.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          n.jsx(Me, {
                            size: 20,
                            className: `mr-2 ${K.small} ${
                              g ? "text-gray-800" : "text-gray-400"
                            }`,
                          }),
                          n.jsx("span", {
                            children: n.jsx("strong", {
                              children: f.requestedQuantity,
                            }),
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          n.jsx(zn, {
                            size: 20,
                            className: `mr-2 ${K.small} ${
                              g ? "text-gray-800" : "text-gray-400"
                            }`,
                          }),
                          n.jsx("span", {
                            children: n.jsx("strong", {
                              children: c(f.requestTime),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              f.remarks &&
                n.jsxs("div", {
                  className: `mt-3 p-2 border rounded-lg ${
                    P.smallLabel
                  } flex-shrink-0 ${
                    g
                      ? "bg-red-600 border-red-700 text-white"
                      : "bg-gray-50 border-gray-200 text-gray-700"
                  }`,
                  children: [
                    n.jsx("span", {
                      className: "font-medium",
                      children: "備註: ",
                    }),
                    n.jsx("span", { children: f.remarks }),
                  ],
                }),
            ],
          }),
        }),
      ],
    });
  },
  Ei = ({
    internalRequests: e,
    isFullscreen: t = !1,
    showInFocus: r,
    onFocusToggle: s,
  }) =>
    t
      ? n.jsx(Y0, { internalRequests: e })
      : n.jsx(G0, { internalRequests: e, showInFocus: r, onFocusToggle: s }),
  K0 = ({
    isOpen: e,
    onClose: t,
    dashboardData: r,
    lastRefresh: s,
    sectionVisibility: l,
  }) => {
    const [i, a] = N.useState(new Date()),
      [o, u] = N.useState(k0());
    N.useEffect(() => {
      if (!e) return;
      const f = setInterval(() => {
        a(new Date());
      }, 1e3);
      return () => clearInterval(f);
    }, [e]),
      N.useEffect(() => {
        Oo(o);
      }, [o]),
      N.useEffect(() => {
        Oo(o);
      }, [o]),
      N.useEffect(() => {
        const f = (g) => {
          g.key === "Escape" && t();
        };
        return (
          e &&
            (document.addEventListener("keydown", f),
            (document.body.style.overflow = "hidden")),
          () => {
            document.removeEventListener("keydown", f),
              (document.body.style.overflow = "unset");
          }
        );
      }, [e, t]);
    const c = (f, g) => {
        u((y) => ({ ...y, [f]: { ...y[f], position: g } }));
      },
      d = (f, g) => {
        u((y) => ({ ...y, [f]: { ...y[f], ...g } }));
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
                        n.jsx(ed, {
                          size: 24,
                          className: `text-blue-400 ${K.xlarge}`,
                        }),
                        n.jsx("h1", {
                          className: `${P.subTitle} font-bold`,
                          children: "戰情白板 - 專注顯示模式",
                        }),
                      ],
                    }),
                    n.jsx("div", {
                      className: `${P.subTitle} font-mono`,
                      children: i.toLocaleString("zh-TW", {
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
                        className: `text-gray-300 ${P.content}`,
                        children: ["最後更新: ", s.toLocaleTimeString("zh-TW")],
                      }),
                    n.jsx("button", {
                      onClick: t,
                      className:
                        "p-2 hover:bg-gray-700 rounded-lg transition-colors",
                      title: "退出專注模式 (ESC)",
                      children: n.jsx(Ze, { size: 24, className: K.xlarge }),
                    }),
                  ],
                }),
              ],
            }),
            n.jsx("div", {
              className: "flex-1 p-3 overflow-hidden",
              children: n.jsx("div", {
                className: "h-full grid grid-cols-8 grid-rows-6 gap-4",
                children: Object.entries(l).some(([f, g]) => g)
                  ? n.jsxs(n.Fragment, {
                      children: [
                        l.bulletins &&
                          n.jsx(Ne, {
                            sectionKey: "bulletins",
                            gridData: o.bulletins,
                            onPositionChange: c,
                            onSizeChange: d,
                            gridArea: je(o.bulletins.position, {
                              row: o.bulletins.row,
                              col: o.bulletins.col,
                            }),
                            children: n.jsx(bi, {
                              bulletins: r.bulletins,
                              isFullscreen: !0,
                            }),
                          }),
                        l.bulletins &&
                          n.jsx(Ne, {
                            sectionKey: "bulletins",
                            gridData: o.bulletins,
                            onPositionChange: c,
                            onSizeChange: d,
                            gridArea: je(o.bulletins.position, {
                              row: o.bulletins.row,
                              col: o.bulletins.col,
                            }),
                            children: n.jsx(bi, {
                              bulletins: r.bulletins,
                              isFullscreen: !0,
                            }),
                          }),
                        l.tasks &&
                          n.jsx(Ne, {
                            sectionKey: "tasks",
                            gridData: o.tasks,
                            onPositionChange: c,
                            onSizeChange: d,
                            gridArea: je(o.tasks.position, {
                              row: o.tasks.row,
                              col: o.tasks.col,
                            }),
                            children: n.jsx(ki, {
                              restockTasks: r.restockTasks,
                              receivingTasks: r.receivingTasks,
                              putAwayTasks: r.putAwayTasks,
                              isFullscreen: !0,
                            }),
                          }),
                        l.tasks &&
                          n.jsx(Ne, {
                            sectionKey: "tasks",
                            gridData: o.tasks,
                            onPositionChange: c,
                            onSizeChange: d,
                            gridArea: je(o.tasks.position, {
                              row: o.tasks.row,
                              col: o.tasks.col,
                            }),
                            children: n.jsx(ki, {
                              restockTasks: r.restockTasks,
                              receivingTasks: r.receivingTasks,
                              putAwayTasks: r.putAwayTasks,
                              isFullscreen: !0,
                            }),
                          }),
                        l.incomingDrugs &&
                          n.jsx(Ne, {
                            sectionKey: "incomingDrugs",
                            gridData: o.incomingDrugs,
                            onPositionChange: c,
                            onSizeChange: d,
                            gridArea: je(o.incomingDrugs.position, {
                              row: o.incomingDrugs.row,
                              col: o.incomingDrugs.col,
                            }),
                            children: n.jsx(Si, {
                              incomingDrugs: r.incomingDrugs,
                              isFullscreen: !0,
                            }),
                          }),
                        l.incomingDrugs &&
                          n.jsx(Ne, {
                            sectionKey: "incomingDrugs",
                            gridData: o.incomingDrugs,
                            onPositionChange: c,
                            onSizeChange: d,
                            gridArea: je(o.incomingDrugs.position, {
                              row: o.incomingDrugs.row,
                              col: o.incomingDrugs.col,
                            }),
                            children: n.jsx(Si, {
                              incomingDrugs: r.incomingDrugs,
                              isFullscreen: !0,
                            }),
                          }),
                        l.outOfStock &&
                          n.jsx(Ne, {
                            sectionKey: "outOfStock",
                            gridData: o.outOfStock,
                            onPositionChange: c,
                            onSizeChange: d,
                            gridArea: je(o.outOfStock.position, {
                              row: o.outOfStock.row,
                              col: o.outOfStock.col,
                            }),
                            children: n.jsx(Ci, {
                              outOfStockItems: r.outOfStockItems,
                              isFullscreen: !0,
                            }),
                          }),
                        l.outOfStock &&
                          n.jsx(Ne, {
                            sectionKey: "outOfStock",
                            gridData: o.outOfStock,
                            onPositionChange: c,
                            onSizeChange: d,
                            gridArea: je(o.outOfStock.position, {
                              row: o.outOfStock.row,
                              col: o.outOfStock.col,
                            }),
                            children: n.jsx(Ci, {
                              outOfStockItems: r.outOfStockItems,
                              isFullscreen: !0,
                            }),
                          }),
                        l.drugReplacements &&
                          n.jsx(Ne, {
                            sectionKey: "drugReplacements",
                            gridData: o.drugReplacements,
                            onPositionChange: c,
                            onSizeChange: d,
                            gridArea: je(o.drugReplacements.position, {
                              row: o.drugReplacements.row,
                              col: o.drugReplacements.col,
                            }),
                            children: n.jsx(Di, {
                              drugReplacements: r.drugReplacements,
                              isFullscreen: !0,
                            }),
                          }),
                        l.drugReplacements &&
                          n.jsx(Ne, {
                            sectionKey: "drugReplacements",
                            gridData: o.drugReplacements,
                            onPositionChange: c,
                            onSizeChange: d,
                            gridArea: je(o.drugReplacements.position, {
                              row: o.drugReplacements.row,
                              col: o.drugReplacements.col,
                            }),
                            children: n.jsx(Di, {
                              drugReplacements: r.drugReplacements,
                              isFullscreen: !0,
                            }),
                          }),
                        l.inventory &&
                          n.jsx(Ne, {
                            sectionKey: "inventory",
                            gridData: o.inventory,
                            onPositionChange: c,
                            onSizeChange: d,
                            gridArea: je(o.inventory.position, {
                              row: o.inventory.row,
                              col: o.inventory.col,
                            }),
                            children: n.jsx(_i, {
                              inventoryHighlights: r.inventoryHighlights,
                              isFullscreen: !0,
                            }),
                          }),
                        l.inventory &&
                          n.jsx(Ne, {
                            sectionKey: "inventory",
                            gridData: o.inventory,
                            onPositionChange: c,
                            onSizeChange: d,
                            gridArea: je(o.inventory.position, {
                              row: o.inventory.row,
                              col: o.inventory.col,
                            }),
                            children: n.jsx(_i, {
                              inventoryHighlights: r.inventoryHighlights,
                              isFullscreen: !0,
                            }),
                          }),
                        l.internalRequests &&
                          n.jsx(Ne, {
                            sectionKey: "internalRequests",
                            gridData: o.internalRequests,
                            onPositionChange: c,
                            onSizeChange: d,
                            gridArea: je(o.internalRequests.position, {
                              row: o.internalRequests.row,
                              col: o.internalRequests.col,
                            }),
                            children: n.jsx(Ei, {
                              internalRequests: r.internalRequests,
                              isFullscreen: !0,
                            }),
                          }),
                        l.internalRequests &&
                          n.jsx(Ne, {
                            sectionKey: "internalRequests",
                            gridData: o.internalRequests,
                            onPositionChange: c,
                            onSizeChange: d,
                            gridArea: je(o.internalRequests.position, {
                              row: o.internalRequests.row,
                              col: o.internalRequests.col,
                            }),
                            children: n.jsx(Ei, {
                              internalRequests: r.internalRequests,
                              isFullscreen: !0,
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
                            className: `${P.title} mb-4`,
                            children: "👁️",
                          }),
                          n.jsx("p", {
                            className: P.subTitle,
                            children: "所有區塊都已隱藏",
                          }),
                          n.jsx("p", {
                            className: `${P.content} mt-2`,
                            children: "請在一般模式下開啟需要顯示的區塊",
                          }),
                        ],
                      }),
                    }),
              }),
            }),
            n.jsx("div", {
              className: `bg-gray-800 text-gray-300 text-center py-1 ${P.smallLabel} border-t border-gray-700`,
              children:
                "按 ESC 鍵退出專注顯示模式 | 拖拽標題移動位置 | 拖拽右下角調整大小 | 內容每 8 秒自動輪播",
            }),
          ],
        })
      : null;
  },
  X0 = () => {
    const { t: e } = Rr(),
      [t, r] = N.useState(null),
      [s, l] = N.useState(!0),
      [i, a] = N.useState(null),
      [o, u] = N.useState(null),
      [c, d] = N.useState(!1),
      [f, g] = N.useState({
        bulletins: !0,
        tasks: !0,
        incomingDrugs: !0,
        outOfStock: !0,
        drugReplacements: !0,
        inventory: !0,
        internalRequests: !0,
      }),
      y = In(),
      v = y ? `${y.Name} - ${y.Employer}` : "鴻森智能科技 - 臨床藥事科";
    N.useEffect(() => {
      (async () => {
        try {
          const D = S0();
          g(D), await rd(), await x();
        } catch (D) {
          console.error("Failed to initialize:", D),
            a("初始化失敗，請重新整理頁面");
        }
      })();
      const w = setInterval(x, 1 * 60 * 1e3);
      return () => clearInterval(w);
    }, []);
    const x = async () => {
        try {
          a(null);
          const p = await j0();
          r(p), u(new Date());
        } catch (p) {
          a("載入資料失敗，請稍後再試"),
            console.error("Failed to load dashboard data:", p);
        } finally {
          l(!1);
        }
      },
      z = () => {
        l(!0), x();
      },
      h = () => {
        x();
      },
      m = (p, w) => {
        const D = { ...f, [p]: w };
        g(D), C0(D);
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
                                const p = Sl();
                                p != null &&
                                  p.homepage &&
                                  (window.location.href = `${p.homepage}/phar_system/frontpage/`);
                              },
                              className:
                                "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors group relative",
                              title: e("platform.title"),
                              children: [
                                n.jsx(kl, { size: 24 }),
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
                                  children: v,
                                }),
                              ],
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className: "flex items-center space-x-4",
                          children: [n.jsx(Dl, {}), n.jsx(Cl, {})],
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
                          children: "載入戰情白板資料中...",
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
      : i && !t
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
                                const p = Sl();
                                p != null &&
                                  p.homepage &&
                                  (window.location.href = `${p.homepage}/phar_system/frontpage/`);
                              },
                              className:
                                "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors group relative",
                              title: e("platform.title"),
                              children: [
                                n.jsx(kl, { size: 24 }),
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
                                  children: v,
                                }),
                              ],
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className: "flex items-center space-x-4",
                          children: [n.jsx(Dl, {}), n.jsx(Cl, {})],
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
                          children: i,
                        }),
                        n.jsx("button", {
                          onClick: z,
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
                                const p = Sl();
                                p != null &&
                                  p.homepage &&
                                  (window.location.href = `${p.homepage}/phar_system/frontpage/`);
                              },
                              className:
                                "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors group relative",
                              title: e("platform.title"),
                              children: [
                                n.jsx(kl, { size: 24 }),
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
                                  children: v,
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
                                  onClick: z,
                                  disabled: s,
                                  className:
                                    "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                                  title: "重新整理",
                                  children: n.jsx(br, {
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
                                n.jsx(Lm, { size: 16, className: "mr-2" }),
                                "專注顯示",
                              ],
                            }),
                            n.jsx(Dl, {}),
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
                        children: n.jsx(bi, {
                          bulletins: t.bulletins,
                          onBulletinAdded: h,
                          showInFocus: f.bulletins,
                          onFocusToggle: (p) => m("bulletins", p),
                        }),
                      }),
                      n.jsx("div", {
                        className: "lg:col-span-2 xl:col-span-1",
                        children: n.jsx(ki, {
                          restockTasks: t.restockTasks,
                          receivingTasks: t.receivingTasks,
                          putAwayTasks: t.putAwayTasks,
                          showInFocus: f.tasks,
                          onFocusToggle: (p) => m("tasks", p),
                        }),
                      }),
                      n.jsx("div", {
                        children: n.jsx(Si, {
                          incomingDrugs: t.incomingDrugs,
                          showInFocus: f.incomingDrugs,
                          onFocusToggle: (p) => m("incomingDrugs", p),
                        }),
                      }),
                      n.jsx("div", {
                        children: n.jsx(Ci, {
                          outOfStockItems: t.outOfStockItems,
                          onItemAdded: h,
                          showInFocus: f.outOfStock,
                          onFocusToggle: (p) => m("outOfStock", p),
                        }),
                      }),
                      n.jsx("div", {
                        children: n.jsx(Di, {
                          drugReplacements: t.drugReplacements,
                          showInFocus: f.drugReplacements,
                          onFocusToggle: (p) => m("drugReplacements", p),
                        }),
                      }),
                      n.jsx("div", {
                        children: n.jsx(_i, {
                          inventoryHighlights: t.inventoryHighlights,
                          showInFocus: f.inventory,
                          onFocusToggle: (p) => m("inventory", p),
                        }),
                      }),
                      n.jsx("div", {
                        className: "lg:col-span-2",
                        children: n.jsx(Ei, {
                          internalRequests: t.internalRequests,
                          showInFocus: f.internalRequests,
                          onFocusToggle: (p) => m("internalRequests", p),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            n.jsx(K0, {
              isOpen: c,
              onClose: () => d(!1),
              dashboardData: t,
              lastRefresh: o,
              sectionVisibility: f,
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
  Z0 = ({ onLogin: e }) => {
    const { t } = Rr(),
      [r, s] = N.useState(""),
      [l, i] = N.useState(""),
      [a, o] = N.useState(null),
      [u, c] = N.useState(!1),
      d = async (f) => {
        f.preventDefault(), o(null), c(!0);
        try {
          const g = await Am({ ID: r, Password: l });
          g.Code === 200
            ? (Um(g.Data), e())
            : g.Code === -1 || g.Code === -2
            ? o(g.Result)
            : o(t("error.api"));
        } catch (g) {
          console.error("Login error:", g),
            o(g instanceof Error ? g.message : t("error.api"));
        } finally {
          c(!1);
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
          a &&
            n.jsxs("div", {
              className:
                "mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center gap-2",
              children: [
                n.jsx(Je, { size: 20 }),
                n.jsx("span", { children: a }),
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
                    onChange: (f) => s(f.target.value),
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
                    onChange: (f) => i(f.target.value),
                    className:
                      "w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                    required: !0,
                    autoComplete: "current-password",
                  }),
                ],
              }),
              n.jsx("button", {
                type: "submit",
                disabled: u,
                className: `w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center ${
                  u
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`,
                children: u
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
function J0() {
  const [e, t] = N.useState(!1),
    [r, s] = N.useState(!1),
    [l, i] = N.useState(!0);
  N.useEffect(() => {
    (async () => {
      try {
        await rd(), t(!0);
        const u = Hm();
        s(u),
          console.log("Authentication check:", {
            authenticated: u,
            userSession: sessionStorage.getItem("user_session")
              ? "exists"
              : "missing",
          });
      } catch (u) {
        console.error("Failed to load configuration:", u);
      } finally {
        i(!1);
      }
    })();
  }, []);
  const a = () => {
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
    : n.jsx($m, { children: r ? n.jsx(X0, {}) : n.jsx(Z0, { onLogin: a }) });
}
Ku(document.getElementById("root")).render(
  n.jsx(N.StrictMode, { children: n.jsx(J0, {}) })
);
