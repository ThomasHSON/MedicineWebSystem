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
function sd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ro = { exports: {} },
  Ms = {},
  Lo = { exports: {} },
  L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sn = Symbol.for("react.element"),
  ld = Symbol.for("react.portal"),
  ad = Symbol.for("react.fragment"),
  id = Symbol.for("react.strict_mode"),
  od = Symbol.for("react.profiler"),
  cd = Symbol.for("react.provider"),
  ud = Symbol.for("react.context"),
  dd = Symbol.for("react.forward_ref"),
  fd = Symbol.for("react.suspense"),
  md = Symbol.for("react.memo"),
  pd = Symbol.for("react.lazy"),
  Ni = Symbol.iterator;
function hd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ni && e[Ni]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Fo = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ao = Object.assign,
  $o = {};
function Mr(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = $o),
    (this.updater = r || Fo);
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
function Uo() {}
Uo.prototype = Mr.prototype;
function Da(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = $o),
    (this.updater = r || Fo);
}
var _a = (Da.prototype = new Uo());
_a.constructor = Da;
Ao(_a, Mr.prototype);
_a.isPureReactComponent = !0;
var bi = Array.isArray,
  Ho = Object.prototype.hasOwnProperty,
  Ea = { current: null },
  Bo = { key: !0, ref: !0, __self: !0, __source: !0 };
function Vo(e, t, r) {
  var s,
    l = {},
    a = null,
    i = null;
  if (t != null)
    for (s in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (a = "" + t.key),
    t))
      Ho.call(t, s) && !Bo.hasOwnProperty(s) && (l[s] = t[s]);
  var o = arguments.length - 2;
  if (o === 1) l.children = r;
  else if (1 < o) {
    for (var u = Array(o), c = 0; c < o; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (s in ((o = e.defaultProps), o)) l[s] === void 0 && (l[s] = o[s]);
  return {
    $$typeof: Sn,
    type: e,
    key: a,
    ref: i,
    props: l,
    _owner: Ea.current,
  };
}
function gd(e, t) {
  return {
    $$typeof: Sn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ta(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Sn;
}
function xd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var ki = /\/+/g;
function Zs(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? xd("" + e.key)
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
          case Sn:
          case ld:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = s === "" ? "." + Zs(i, 0) : s),
      bi(l)
        ? ((r = ""),
          e != null && (r = e.replace(ki, "$&/") + "/"),
          Xn(l, t, r, "", function (c) {
            return c;
          }))
        : l != null &&
          (Ta(l) &&
            (l = gd(
              l,
              r +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(ki, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (s = s === "" ? "." : s + ":"), bi(e)))
    for (var o = 0; o < e.length; o++) {
      a = e[o];
      var u = s + Zs(a, o);
      i += Xn(a, t, r, u, l);
    }
  else if (((u = hd(e)), typeof u == "function"))
    for (e = u.call(e), o = 0; !(a = e.next()).done; )
      (a = a.value), (u = s + Zs(a, o++)), (i += Xn(a, t, r, u, l));
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
    Xn(e, s, "", "", function (a) {
      return t.call(r, a, l++);
    }),
    s
  );
}
function yd(e) {
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
var xe = { current: null },
  Zn = { transition: null },
  vd = {
    ReactCurrentDispatcher: xe,
    ReactCurrentBatchConfig: Zn,
    ReactCurrentOwner: Ea,
  };
function Wo() {
  throw Error("act(...) is not supported in production builds of React.");
}
L.Children = {
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
    if (!Ta(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
L.Component = Mr;
L.Fragment = ad;
L.Profiler = od;
L.PureComponent = Da;
L.StrictMode = id;
L.Suspense = fd;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vd;
L.act = Wo;
L.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var s = Ao({}, e.props),
    l = e.key,
    a = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((a = t.ref), (i = Ea.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (u in t)
      Ho.call(t, u) &&
        !Bo.hasOwnProperty(u) &&
        (s[u] = t[u] === void 0 && o !== void 0 ? o[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) s.children = r;
  else if (1 < u) {
    o = Array(u);
    for (var c = 0; c < u; c++) o[c] = arguments[c + 2];
    s.children = o;
  }
  return { $$typeof: Sn, type: e.type, key: l, ref: a, props: s, _owner: i };
};
L.createContext = function (e) {
  return (
    (e = {
      $$typeof: ud,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: cd, _context: e }),
    (e.Consumer = e)
  );
};
L.createElement = Vo;
L.createFactory = function (e) {
  var t = Vo.bind(null, e);
  return (t.type = e), t;
};
L.createRef = function () {
  return { current: null };
};
L.forwardRef = function (e) {
  return { $$typeof: dd, render: e };
};
L.isValidElement = Ta;
L.lazy = function (e) {
  return { $$typeof: pd, _payload: { _status: -1, _result: e }, _init: yd };
};
L.memo = function (e, t) {
  return { $$typeof: md, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function (e) {
  var t = Zn.transition;
  Zn.transition = {};
  try {
    e();
  } finally {
    Zn.transition = t;
  }
};
L.unstable_act = Wo;
L.useCallback = function (e, t) {
  return xe.current.useCallback(e, t);
};
L.useContext = function (e) {
  return xe.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
  return xe.current.useDeferredValue(e);
};
L.useEffect = function (e, t) {
  return xe.current.useEffect(e, t);
};
L.useId = function () {
  return xe.current.useId();
};
L.useImperativeHandle = function (e, t, r) {
  return xe.current.useImperativeHandle(e, t, r);
};
L.useInsertionEffect = function (e, t) {
  return xe.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function (e, t) {
  return xe.current.useLayoutEffect(e, t);
};
L.useMemo = function (e, t) {
  return xe.current.useMemo(e, t);
};
L.useReducer = function (e, t, r) {
  return xe.current.useReducer(e, t, r);
};
L.useRef = function (e) {
  return xe.current.useRef(e);
};
L.useState = function (e) {
  return xe.current.useState(e);
};
L.useSyncExternalStore = function (e, t, r) {
  return xe.current.useSyncExternalStore(e, t, r);
};
L.useTransition = function () {
  return xe.current.useTransition();
};
L.version = "18.3.1";
Lo.exports = L;
var b = Lo.exports;
const Ee = sd(b);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wd = b,
  jd = Symbol.for("react.element"),
  Nd = Symbol.for("react.fragment"),
  bd = Object.prototype.hasOwnProperty,
  kd = wd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Sd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qo(e, t, r) {
  var s,
    l = {},
    a = null,
    i = null;
  r !== void 0 && (a = "" + r),
    t.key !== void 0 && (a = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (s in t) bd.call(t, s) && !Sd.hasOwnProperty(s) && (l[s] = t[s]);
  if (e && e.defaultProps)
    for (s in ((t = e.defaultProps), t)) l[s] === void 0 && (l[s] = t[s]);
  return {
    $$typeof: jd,
    type: e,
    key: a,
    ref: i,
    props: l,
    _owner: kd.current,
  };
}
Ms.Fragment = Nd;
Ms.jsx = Qo;
Ms.jsxs = Qo;
Ro.exports = Ms;
var n = Ro.exports,
  qo = { exports: {} },
  Me = {},
  Go = { exports: {} },
  Yo = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, R) {
    var S = M.length;
    M.push(R);
    e: for (; 0 < S; ) {
      var F = (S - 1) >>> 1,
        k = M[F];
      if (0 < l(k, R)) (M[F] = R), (M[S] = k), (S = F);
      else break e;
    }
  }
  function r(M) {
    return M.length === 0 ? null : M[0];
  }
  function s(M) {
    if (M.length === 0) return null;
    var R = M[0],
      S = M.pop();
    if (S !== R) {
      M[0] = S;
      e: for (var F = 0, k = M.length, A = k >>> 1; F < A; ) {
        var Z = 2 * (F + 1) - 1,
          Se = M[Z],
          yt = Z + 1,
          In = M[yt];
        if (0 > l(Se, S))
          yt < k && 0 > l(In, Se)
            ? ((M[F] = In), (M[yt] = S), (F = yt))
            : ((M[F] = Se), (M[Z] = S), (F = Z));
        else if (yt < k && 0 > l(In, S)) (M[F] = In), (M[yt] = S), (F = yt);
        else break e;
      }
    }
    return R;
  }
  function l(M, R) {
    var S = M.sortIndex - R.sortIndex;
    return S !== 0 ? S : M.id - R.id;
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
  var u = [],
    c = [],
    m = 1,
    f = null,
    d = 3,
    x = !1,
    v = !1,
    y = !1,
    I = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(M) {
    for (var R = r(c); R !== null; ) {
      if (R.callback === null) s(c);
      else if (R.startTime <= M)
        s(c), (R.sortIndex = R.expirationTime), t(u, R);
      else break;
      R = r(c);
    }
  }
  function j(M) {
    if (((y = !1), h(M), !v))
      if (r(u) !== null) (v = !0), Ve(D);
      else {
        var R = r(c);
        R !== null && nt(j, R.startTime - M);
      }
  }
  function D(M, R) {
    (v = !1), y && ((y = !1), g(C), (C = -1)), (x = !0);
    var S = d;
    try {
      for (
        h(R), f = r(u);
        f !== null && (!(f.expirationTime > R) || (M && !E()));

      ) {
        var F = f.callback;
        if (typeof F == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var k = F(f.expirationTime <= R);
          (R = e.unstable_now()),
            typeof k == "function" ? (f.callback = k) : f === r(u) && s(u),
            h(R);
        } else s(u);
        f = r(u);
      }
      if (f !== null) var A = !0;
      else {
        var Z = r(c);
        Z !== null && nt(j, Z.startTime - R), (A = !1);
      }
      return A;
    } finally {
      (f = null), (d = S), (x = !1);
    }
  }
  var T = !1,
    z = null,
    C = -1,
    w = 5,
    N = -1;
  function E() {
    return !(e.unstable_now() - N < w);
  }
  function O() {
    if (z !== null) {
      var M = e.unstable_now();
      N = M;
      var R = !0;
      try {
        R = z(!0, M);
      } finally {
        R ? H() : ((T = !1), (z = null));
      }
    } else T = !1;
  }
  var H;
  if (typeof p == "function")
    H = function () {
      p(O);
    };
  else if (typeof MessageChannel < "u") {
    var ue = new MessageChannel(),
      Oe = ue.port2;
    (ue.port1.onmessage = O),
      (H = function () {
        Oe.postMessage(null);
      });
  } else
    H = function () {
      I(O, 0);
    };
  function Ve(M) {
    (z = M), T || ((T = !0), H());
  }
  function nt(M, R) {
    C = I(function () {
      M(e.unstable_now());
    }, R);
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
      v || x || ((v = !0), Ve(D));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (w = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(u);
    }),
    (e.unstable_next = function (M) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = d;
      }
      var S = d;
      d = R;
      try {
        return M();
      } finally {
        d = S;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, R) {
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
      var S = d;
      d = M;
      try {
        return R();
      } finally {
        d = S;
      }
    }),
    (e.unstable_scheduleCallback = function (M, R, S) {
      var F = e.unstable_now();
      switch (
        (typeof S == "object" && S !== null
          ? ((S = S.delay), (S = typeof S == "number" && 0 < S ? F + S : F))
          : (S = F),
        M)
      ) {
        case 1:
          var k = -1;
          break;
        case 2:
          k = 250;
          break;
        case 5:
          k = 1073741823;
          break;
        case 4:
          k = 1e4;
          break;
        default:
          k = 5e3;
      }
      return (
        (k = S + k),
        (M = {
          id: m++,
          callback: R,
          priorityLevel: M,
          startTime: S,
          expirationTime: k,
          sortIndex: -1,
        }),
        S > F
          ? ((M.sortIndex = S),
            t(c, M),
            r(u) === null &&
              M === r(c) &&
              (y ? (g(C), (C = -1)) : (y = !0), nt(j, S - F)))
          : ((M.sortIndex = k), t(u, M), v || x || ((v = !0), Ve(D))),
        M
      );
    }),
    (e.unstable_shouldYield = E),
    (e.unstable_wrapCallback = function (M) {
      var R = d;
      return function () {
        var S = d;
        d = R;
        try {
          return M.apply(this, arguments);
        } finally {
          d = S;
        }
      };
    });
})(Yo);
Go.exports = Yo;
var Cd = Go.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dd = b,
  Ie = Cd;
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
var Ko = new Set(),
  ln = {};
function rr(e, t) {
  kr(e, t), kr(e + "Capture", t);
}
function kr(e, t) {
  for (ln[e] = t, e = 0; e < t.length; e++) Ko.add(t[e]);
}
var dt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  _l = Object.prototype.hasOwnProperty,
  _d =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Si = {},
  Ci = {};
function Ed(e) {
  return _l.call(Ci, e)
    ? !0
    : _l.call(Si, e)
    ? !1
    : _d.test(e)
    ? (Ci[e] = !0)
    : ((Si[e] = !0), !1);
}
function Td(e, t, r, s) {
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
function zd(e, t, r, s) {
  if (t === null || typeof t > "u" || Td(e, t, r, s)) return !0;
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
function ye(e, t, r, s, l, a, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = s),
    (this.attributeNamespace = l),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = i);
}
var ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ce[e] = new ye(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ce[t] = new ye(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ce[e] = new ye(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ce[e] = new ye(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ce[e] = new ye(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ce[e] = new ye(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ce[e] = new ye(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ce[e] = new ye(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ce[e] = new ye(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var za = /[\-:]([a-z])/g;
function Ia(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(za, Ia);
    ce[t] = new ye(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(za, Ia);
    ce[t] = new ye(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(za, Ia);
  ce[t] = new ye(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ce[e] = new ye(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ce.xlinkHref = new ye(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ce[e] = new ye(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ma(e, t, r, s) {
  var l = ce.hasOwnProperty(t) ? ce[t] : null;
  (l !== null
    ? l.type !== 0
    : s ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (zd(t, r, l, s) && (r = null),
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
var xt = Dd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Pn = Symbol.for("react.element"),
  lr = Symbol.for("react.portal"),
  ar = Symbol.for("react.fragment"),
  Pa = Symbol.for("react.strict_mode"),
  El = Symbol.for("react.profiler"),
  Xo = Symbol.for("react.provider"),
  Zo = Symbol.for("react.context"),
  Oa = Symbol.for("react.forward_ref"),
  Tl = Symbol.for("react.suspense"),
  zl = Symbol.for("react.suspense_list"),
  Ra = Symbol.for("react.memo"),
  jt = Symbol.for("react.lazy"),
  Jo = Symbol.for("react.offscreen"),
  Di = Symbol.iterator;
function Lr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Di && e[Di]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var X = Object.assign,
  Js;
function Wr(e) {
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
            while (1 <= i && 0 <= o);
          break;
        }
    }
  } finally {
    (el = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : "") ? Wr(e) : "";
}
function Id(e) {
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
    case ar:
      return "Fragment";
    case lr:
      return "Portal";
    case El:
      return "Profiler";
    case Pa:
      return "StrictMode";
    case Tl:
      return "Suspense";
    case zl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Zo:
        return (e.displayName || "Context") + ".Consumer";
      case Xo:
        return (e._context.displayName || "Context") + ".Provider";
      case Oa:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ra:
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
function Md(e) {
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
      return t === Pa ? "StrictMode" : "Mode";
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
function Ot(e) {
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
function ec(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Pd(e) {
  var t = ec(e) ? "checked" : "value",
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
  e._valueTracker || (e._valueTracker = Pd(e));
}
function tc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    s = "";
  return (
    e && (s = ec(e) ? (e.checked ? "true" : "false") : e.value),
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
function Ml(e, t) {
  var r = t.checked;
  return X({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  });
}
function _i(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue,
    s = t.checked != null ? t.checked : t.defaultChecked;
  (r = Ot(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: s,
      initialValue: r,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function rc(e, t) {
  (t = t.checked), t != null && Ma(e, "checked", t, !1);
}
function Pl(e, t) {
  rc(e, t);
  var r = Ot(t.value),
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
    ? Ol(e, t.type, r)
    : t.hasOwnProperty("defaultValue") && Ol(e, t.type, Ot(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ei(e, t, r) {
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
function Ol(e, t, r) {
  (t !== "number" || cs(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var Qr = Array.isArray;
function xr(e, t, r, s) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < r.length; l++) t["$" + r[l]] = !0;
    for (r = 0; r < e.length; r++)
      (l = t.hasOwnProperty("$" + e[r].value)),
        e[r].selected !== l && (e[r].selected = l),
        l && s && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + Ot(r), t = null, l = 0; l < e.length; l++) {
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
  return X({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ti(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(_(92));
      if (Qr(r)) {
        if (1 < r.length) throw Error(_(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), (r = t);
  }
  e._wrapperState = { initialValue: Ot(r) };
}
function nc(e, t) {
  var r = Ot(t.value),
    s = Ot(t.defaultValue);
  r != null &&
    ((r = "" + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    s != null && (e.defaultValue = "" + s);
}
function zi(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function sc(e) {
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
    ? sc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Rn,
  lc = (function (e) {
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
        Rn = Rn || document.createElement("div"),
          Rn.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Rn.firstChild;
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
  Od = ["Webkit", "ms", "Moz", "O"];
Object.keys(Yr).forEach(function (e) {
  Od.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Yr[t] = Yr[e]);
  });
});
function ac(e, t, r) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : r || typeof t != "number" || t === 0 || (Yr.hasOwnProperty(e) && Yr[e])
    ? ("" + t).trim()
    : t + "px";
}
function ic(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var s = r.indexOf("--") === 0,
        l = ac(r, t[r], s);
      r === "float" && (r = "cssFloat"), s ? e.setProperty(r, l) : (e[r] = l);
    }
}
var Rd = X(
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
function Fl(e, t) {
  if (t) {
    if (Rd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Al(e, t) {
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
function La(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ul = null,
  yr = null,
  vr = null;
function Ii(e) {
  if ((e = _n(e))) {
    if (typeof Ul != "function") throw Error(_(280));
    var t = e.stateNode;
    t && ((t = Fs(t)), Ul(e.stateNode, e.type, t));
  }
}
function oc(e) {
  yr ? (vr ? vr.push(e) : (vr = [e])) : (yr = e);
}
function cc() {
  if (yr) {
    var e = yr,
      t = vr;
    if (((vr = yr = null), Ii(e), t)) for (e = 0; e < t.length; e++) Ii(t[e]);
  }
}
function uc(e, t) {
  return e(t);
}
function dc() {}
var rl = !1;
function fc(e, t, r) {
  if (rl) return e(t, r);
  rl = !0;
  try {
    return uc(e, t, r);
  } finally {
    (rl = !1), (yr !== null || vr !== null) && (dc(), cc());
  }
}
function on(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var s = Fs(r);
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
var Hl = !1;
if (dt)
  try {
    var Fr = {};
    Object.defineProperty(Fr, "passive", {
      get: function () {
        Hl = !0;
      },
    }),
      window.addEventListener("test", Fr, Fr),
      window.removeEventListener("test", Fr, Fr);
  } catch {
    Hl = !1;
  }
function Ld(e, t, r, s, l, a, i, o, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, c);
  } catch (m) {
    this.onError(m);
  }
}
var Kr = !1,
  us = null,
  ds = !1,
  Bl = null,
  Fd = {
    onError: function (e) {
      (Kr = !0), (us = e);
    },
  };
function Ad(e, t, r, s, l, a, i, o, u) {
  (Kr = !1), (us = null), Ld.apply(Fd, arguments);
}
function $d(e, t, r, s, l, a, i, o, u) {
  if ((Ad.apply(this, arguments), Kr)) {
    if (Kr) {
      var c = us;
      (Kr = !1), (us = null);
    } else throw Error(_(198));
    ds || ((ds = !0), (Bl = c));
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
function mc(e) {
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
function Mi(e) {
  if (nr(e) !== e) throw Error(_(188));
}
function Ud(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = nr(e)), t === null)) throw Error(_(188));
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
        if (a === r) return Mi(l), e;
        if (a === s) return Mi(l), t;
        a = a.sibling;
      }
      throw Error(_(188));
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
        if (!i) throw Error(_(189));
      }
    }
    if (r.alternate !== s) throw Error(_(190));
  }
  if (r.tag !== 3) throw Error(_(188));
  return r.stateNode.current === r ? e : t;
}
function pc(e) {
  return (e = Ud(e)), e !== null ? hc(e) : null;
}
function hc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = hc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var gc = Ie.unstable_scheduleCallback,
  Pi = Ie.unstable_cancelCallback,
  Hd = Ie.unstable_shouldYield,
  Bd = Ie.unstable_requestPaint,
  te = Ie.unstable_now,
  Vd = Ie.unstable_getCurrentPriorityLevel,
  Fa = Ie.unstable_ImmediatePriority,
  xc = Ie.unstable_UserBlockingPriority,
  fs = Ie.unstable_NormalPriority,
  Wd = Ie.unstable_LowPriority,
  yc = Ie.unstable_IdlePriority,
  Ps = null,
  tt = null;
function Qd(e) {
  if (tt && typeof tt.onCommitFiberRoot == "function")
    try {
      tt.onCommitFiberRoot(Ps, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ye = Math.clz32 ? Math.clz32 : Yd,
  qd = Math.log,
  Gd = Math.LN2;
function Yd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((qd(e) / Gd) | 0)) | 0;
}
var Ln = 64,
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
    a = e.pingedLanes,
    i = r & 268435455;
  if (i !== 0) {
    var o = i & ~l;
    o !== 0 ? (s = qr(o)) : ((a &= i), a !== 0 && (s = qr(a)));
  } else (i = r & ~l), i !== 0 ? (s = qr(i)) : a !== 0 && (s = qr(a));
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
      (r = 31 - Ye(t)), (l = 1 << r), (s |= e[r]), (t &= ~l);
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
function Xd(e, t) {
  for (
    var r = e.suspendedLanes,
      s = e.pingedLanes,
      l = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;

  ) {
    var i = 31 - Ye(a),
      o = 1 << i,
      u = l[i];
    u === -1
      ? (!(o & r) || o & s) && (l[i] = Kd(o, t))
      : u <= t && (e.expiredLanes |= o),
      (a &= ~o);
  }
}
function Vl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function vc() {
  var e = Ln;
  return (Ln <<= 1), !(Ln & 4194240) && (Ln = 64), e;
}
function nl(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function Cn(e, t, r) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ye(t)),
    (e[t] = r);
}
function Zd(e, t) {
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
      a = 1 << l;
    (t[l] = 0), (s[l] = -1), (e[l] = -1), (r &= ~a);
  }
}
function Aa(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r; ) {
    var s = 31 - Ye(r),
      l = 1 << s;
    (l & t) | (e[s] & t) && (e[s] |= t), (r &= ~l);
  }
}
var B = 0;
function wc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var jc,
  $a,
  Nc,
  bc,
  kc,
  Wl = !1,
  An = [],
  Dt = null,
  _t = null,
  Et = null,
  cn = new Map(),
  un = new Map(),
  bt = [],
  Jd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Oi(e, t) {
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
function Ar(e, t, r, s, l, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: s,
        nativeEvent: a,
        targetContainers: [l],
      }),
      t !== null && ((t = _n(t)), t !== null && $a(t)),
      e)
    : ((e.eventSystemFlags |= s),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function ef(e, t, r, s, l) {
  switch (t) {
    case "focusin":
      return (Dt = Ar(Dt, e, t, r, s, l)), !0;
    case "dragenter":
      return (_t = Ar(_t, e, t, r, s, l)), !0;
    case "mouseover":
      return (Et = Ar(Et, e, t, r, s, l)), !0;
    case "pointerover":
      var a = l.pointerId;
      return cn.set(a, Ar(cn.get(a) || null, e, t, r, s, l)), !0;
    case "gotpointercapture":
      return (
        (a = l.pointerId), un.set(a, Ar(un.get(a) || null, e, t, r, s, l)), !0
      );
  }
  return !1;
}
function Sc(e) {
  var t = Bt(e.target);
  if (t !== null) {
    var r = nr(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = mc(r)), t !== null)) {
          (e.blockedOn = t),
            kc(e.priority, function () {
              Nc(r);
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
    var r = Ql(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var s = new r.constructor(r.type, r);
      ($l = s), r.target.dispatchEvent(s), ($l = null);
    } else return (t = _n(r)), t !== null && $a(t), (e.blockedOn = r), !1;
    t.shift();
  }
  return !0;
}
function Ri(e, t, r) {
  Jn(e) && r.delete(t);
}
function tf() {
  (Wl = !1),
    Dt !== null && Jn(Dt) && (Dt = null),
    _t !== null && Jn(_t) && (_t = null),
    Et !== null && Jn(Et) && (Et = null),
    cn.forEach(Ri),
    un.forEach(Ri);
}
function $r(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Wl ||
      ((Wl = !0),
      Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority, tf)));
}
function dn(e) {
  function t(l) {
    return $r(l, e);
  }
  if (0 < An.length) {
    $r(An[0], e);
    for (var r = 1; r < An.length; r++) {
      var s = An[r];
      s.blockedOn === e && (s.blockedOn = null);
    }
  }
  for (
    Dt !== null && $r(Dt, e),
      _t !== null && $r(_t, e),
      Et !== null && $r(Et, e),
      cn.forEach(t),
      un.forEach(t),
      r = 0;
    r < bt.length;
    r++
  )
    (s = bt[r]), s.blockedOn === e && (s.blockedOn = null);
  for (; 0 < bt.length && ((r = bt[0]), r.blockedOn === null); )
    Sc(r), r.blockedOn === null && bt.shift();
}
var wr = xt.ReactCurrentBatchConfig,
  ps = !0;
function rf(e, t, r, s) {
  var l = B,
    a = wr.transition;
  wr.transition = null;
  try {
    (B = 1), Ua(e, t, r, s);
  } finally {
    (B = l), (wr.transition = a);
  }
}
function nf(e, t, r, s) {
  var l = B,
    a = wr.transition;
  wr.transition = null;
  try {
    (B = 4), Ua(e, t, r, s);
  } finally {
    (B = l), (wr.transition = a);
  }
}
function Ua(e, t, r, s) {
  if (ps) {
    var l = Ql(e, t, r, s);
    if (l === null) ml(e, t, s, hs, r), Oi(e, s);
    else if (ef(l, e, t, r, s)) s.stopPropagation();
    else if ((Oi(e, s), t & 4 && -1 < Jd.indexOf(e))) {
      for (; l !== null; ) {
        var a = _n(l);
        if (
          (a !== null && jc(a),
          (a = Ql(e, t, r, s)),
          a === null && ml(e, t, s, hs, r),
          a === l)
        )
          break;
        l = a;
      }
      l !== null && s.stopPropagation();
    } else ml(e, t, s, null, r);
  }
}
var hs = null;
function Ql(e, t, r, s) {
  if (((hs = null), (e = La(s)), (e = Bt(e)), e !== null))
    if (((t = nr(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = mc(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (hs = e), null;
}
function Cc(e) {
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
        case Fa:
          return 1;
        case xc:
          return 4;
        case fs:
        case Wd:
          return 16;
        case yc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var St = null,
  Ha = null,
  es = null;
function Dc() {
  if (es) return es;
  var e,
    t = Ha,
    r = t.length,
    s,
    l = "value" in St ? St.value : St.textContent,
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
function $n() {
  return !0;
}
function Li() {
  return !1;
}
function Pe(e) {
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
        ? $n
        : Li),
      (this.isPropagationStopped = Li),
      this
    );
  }
  return (
    X(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = $n));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = $n));
      },
      persist: function () {},
      isPersistent: $n,
    }),
    t
  );
}
var Pr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ba = Pe(Pr),
  Dn = X({}, Pr, { view: 0, detail: 0 }),
  sf = Pe(Dn),
  sl,
  ll,
  Ur,
  Os = X({}, Dn, {
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
    getModifierState: Va,
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
  Fi = Pe(Os),
  lf = X({}, Os, { dataTransfer: 0 }),
  af = Pe(lf),
  of = X({}, Dn, { relatedTarget: 0 }),
  al = Pe(of),
  cf = X({}, Pr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  uf = Pe(cf),
  df = X({}, Pr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ff = Pe(df),
  mf = X({}, Pr, { data: 0 }),
  Ai = Pe(mf),
  pf = {
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
  hf = {
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
function xf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = gf[e]) ? !!t[e] : !1;
}
function Va() {
  return xf;
}
var yf = X({}, Dn, {
    key: function (e) {
      if (e.key) {
        var t = pf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ts(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? hf[e.keyCode] || "Unidentified"
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
    getModifierState: Va,
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
  vf = Pe(yf),
  wf = X({}, Os, {
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
  $i = Pe(wf),
  jf = X({}, Dn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Va,
  }),
  Nf = Pe(jf),
  bf = X({}, Pr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  kf = Pe(bf),
  Sf = X({}, Os, {
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
  Cf = Pe(Sf),
  Df = [9, 13, 27, 32],
  Wa = dt && "CompositionEvent" in window,
  Xr = null;
dt && "documentMode" in document && (Xr = document.documentMode);
var _f = dt && "TextEvent" in window && !Xr,
  _c = dt && (!Wa || (Xr && 8 < Xr && 11 >= Xr)),
  Ui = " ",
  Hi = !1;
function Ec(e, t) {
  switch (e) {
    case "keyup":
      return Df.indexOf(t.keyCode) !== -1;
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
function Tc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var ir = !1;
function Ef(e, t) {
  switch (e) {
    case "compositionend":
      return Tc(t);
    case "keypress":
      return t.which !== 32 ? null : ((Hi = !0), Ui);
    case "textInput":
      return (e = t.data), e === Ui && Hi ? null : e;
    default:
      return null;
  }
}
function Tf(e, t) {
  if (ir)
    return e === "compositionend" || (!Wa && Ec(e, t))
      ? ((e = Dc()), (es = Ha = St = null), (ir = !1), e)
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
      return _c && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var zf = {
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
  return t === "input" ? !!zf[e.type] : t === "textarea";
}
function zc(e, t, r, s) {
  oc(s),
    (t = gs(t, "onChange")),
    0 < t.length &&
      ((r = new Ba("onChange", "change", null, r, s)),
      e.push({ event: r, listeners: t }));
}
var Zr = null,
  fn = null;
function If(e) {
  Hc(e, 0);
}
function Rs(e) {
  var t = ur(e);
  if (tc(t)) return e;
}
function Mf(e, t) {
  if (e === "change") return t;
}
var Ic = !1;
if (dt) {
  var il;
  if (dt) {
    var ol = "oninput" in document;
    if (!ol) {
      var Vi = document.createElement("div");
      Vi.setAttribute("oninput", "return;"),
        (ol = typeof Vi.oninput == "function");
    }
    il = ol;
  } else il = !1;
  Ic = il && (!document.documentMode || 9 < document.documentMode);
}
function Wi() {
  Zr && (Zr.detachEvent("onpropertychange", Mc), (fn = Zr = null));
}
function Mc(e) {
  if (e.propertyName === "value" && Rs(fn)) {
    var t = [];
    zc(t, fn, e, La(e)), fc(If, t);
  }
}
function Pf(e, t, r) {
  e === "focusin"
    ? (Wi(), (Zr = t), (fn = r), Zr.attachEvent("onpropertychange", Mc))
    : e === "focusout" && Wi();
}
function Of(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Rs(fn);
}
function Rf(e, t) {
  if (e === "click") return Rs(t);
}
function Lf(e, t) {
  if (e === "input" || e === "change") return Rs(t);
}
function Ff(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Xe = typeof Object.is == "function" ? Object.is : Ff;
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
function Qi(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function qi(e, t) {
  var r = Qi(e);
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
    r = Qi(r);
  }
}
function Pc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Pc(e, t.parentNode)
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
function Qa(e) {
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
  var t = Oc(),
    r = e.focusedElem,
    s = e.selectionRange;
  if (
    t !== r &&
    r &&
    r.ownerDocument &&
    Pc(r.ownerDocument.documentElement, r)
  ) {
    if (s !== null && Qa(r)) {
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
          (l = qi(r, a));
        var i = qi(r, s);
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
var $f = dt && "documentMode" in document && 11 >= document.documentMode,
  or = null,
  ql = null,
  Jr = null,
  Gl = !1;
function Gi(e, t, r) {
  var s = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  Gl ||
    or == null ||
    or !== cs(s) ||
    ((s = or),
    "selectionStart" in s && Qa(s)
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
      (s = gs(ql, "onSelect")),
      0 < s.length &&
        ((t = new Ba("onSelect", "select", null, t, r)),
        e.push({ event: t, listeners: s }),
        (t.target = or))));
}
function Un(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r["Webkit" + e] = "webkit" + t),
    (r["Moz" + e] = "moz" + t),
    r
  );
}
var cr = {
    animationend: Un("Animation", "AnimationEnd"),
    animationiteration: Un("Animation", "AnimationIteration"),
    animationstart: Un("Animation", "AnimationStart"),
    transitionend: Un("Transition", "TransitionEnd"),
  },
  cl = {},
  Rc = {};
dt &&
  ((Rc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete cr.animationend.animation,
    delete cr.animationiteration.animation,
    delete cr.animationstart.animation),
  "TransitionEvent" in window || delete cr.transitionend.transition);
function Ls(e) {
  if (cl[e]) return cl[e];
  if (!cr[e]) return e;
  var t = cr[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in Rc) return (cl[e] = t[r]);
  return e;
}
var Lc = Ls("animationend"),
  Fc = Ls("animationiteration"),
  Ac = Ls("animationstart"),
  $c = Ls("transitionend"),
  Uc = new Map(),
  Yi =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Ft(e, t) {
  Uc.set(e, t), rr(t, [e]);
}
for (var ul = 0; ul < Yi.length; ul++) {
  var dl = Yi[ul],
    Uf = dl.toLowerCase(),
    Hf = dl[0].toUpperCase() + dl.slice(1);
  Ft(Uf, "on" + Hf);
}
Ft(Lc, "onAnimationEnd");
Ft(Fc, "onAnimationIteration");
Ft(Ac, "onAnimationStart");
Ft("dblclick", "onDoubleClick");
Ft("focusin", "onFocus");
Ft("focusout", "onBlur");
Ft($c, "onTransitionEnd");
kr("onMouseEnter", ["mouseout", "mouseover"]);
kr("onMouseLeave", ["mouseout", "mouseover"]);
kr("onPointerEnter", ["pointerout", "pointerover"]);
kr("onPointerLeave", ["pointerout", "pointerover"]);
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
function Ki(e, t, r) {
  var s = e.type || "unknown-event";
  (e.currentTarget = r), $d(s, t, void 0, e), (e.currentTarget = null);
}
function Hc(e, t) {
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
            u = o.instance,
            c = o.currentTarget;
          if (((o = o.listener), u !== a && l.isPropagationStopped())) break e;
          Ki(l, o, c), (a = u);
        }
      else
        for (i = 0; i < s.length; i++) {
          if (
            ((o = s[i]),
            (u = o.instance),
            (c = o.currentTarget),
            (o = o.listener),
            u !== a && l.isPropagationStopped())
          )
            break e;
          Ki(l, o, c), (a = u);
        }
    }
  }
  if (ds) throw ((e = Bl), (ds = !1), (Bl = null), e);
}
function W(e, t) {
  var r = t[Jl];
  r === void 0 && (r = t[Jl] = new Set());
  var s = e + "__bubble";
  r.has(s) || (Bc(t, e, 2, !1), r.add(s));
}
function fl(e, t, r) {
  var s = 0;
  t && (s |= 4), Bc(r, e, s, t);
}
var Hn = "_reactListening" + Math.random().toString(36).slice(2);
function pn(e) {
  if (!e[Hn]) {
    (e[Hn] = !0),
      Ko.forEach(function (r) {
        r !== "selectionchange" && (Bf.has(r) || fl(r, !1, e), fl(r, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Hn] || ((t[Hn] = !0), fl("selectionchange", !1, t));
  }
}
function Bc(e, t, r, s) {
  switch (Cc(t)) {
    case 1:
      var l = rf;
      break;
    case 4:
      l = nf;
      break;
    default:
      l = Ua;
  }
  (r = l.bind(null, t, r, e)),
    (l = void 0),
    !Hl ||
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
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; o !== null; ) {
          if (((i = Bt(o)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            s = a = i;
            continue e;
          }
          o = o.parentNode;
        }
      }
      s = s.return;
    }
  fc(function () {
    var c = a,
      m = La(r),
      f = [];
    e: {
      var d = Uc.get(e);
      if (d !== void 0) {
        var x = Ba,
          v = e;
        switch (e) {
          case "keypress":
            if (ts(r) === 0) break e;
          case "keydown":
          case "keyup":
            x = vf;
            break;
          case "focusin":
            (v = "focus"), (x = al);
            break;
          case "focusout":
            (v = "blur"), (x = al);
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
            x = Fi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = af;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Nf;
            break;
          case Lc:
          case Fc:
          case Ac:
            x = uf;
            break;
          case $c:
            x = kf;
            break;
          case "scroll":
            x = sf;
            break;
          case "wheel":
            x = Cf;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = ff;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = $i;
        }
        var y = (t & 4) !== 0,
          I = !y && e === "scroll",
          g = y ? (d !== null ? d + "Capture" : null) : d;
        y = [];
        for (var p = c, h; p !== null; ) {
          h = p;
          var j = h.stateNode;
          if (
            (h.tag === 5 &&
              j !== null &&
              ((h = j),
              g !== null && ((j = on(p, g)), j != null && y.push(hn(p, j, h)))),
            I)
          )
            break;
          p = p.return;
        }
        0 < y.length &&
          ((d = new x(d, v, null, r, m)), f.push({ event: d, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          d &&
            r !== $l &&
            (v = r.relatedTarget || r.fromElement) &&
            (Bt(v) || v[ft]))
        )
          break e;
        if (
          (x || d) &&
          ((d =
            m.window === m
              ? m
              : (d = m.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          x
            ? ((v = r.relatedTarget || r.toElement),
              (x = c),
              (v = v ? Bt(v) : null),
              v !== null &&
                ((I = nr(v)), v !== I || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((x = null), (v = c)),
          x !== v)
        ) {
          if (
            ((y = Fi),
            (j = "onMouseLeave"),
            (g = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = $i),
              (j = "onPointerLeave"),
              (g = "onPointerEnter"),
              (p = "pointer")),
            (I = x == null ? d : ur(x)),
            (h = v == null ? d : ur(v)),
            (d = new y(j, p + "leave", x, r, m)),
            (d.target = I),
            (d.relatedTarget = h),
            (j = null),
            Bt(m) === c &&
              ((y = new y(g, p + "enter", v, r, m)),
              (y.target = h),
              (y.relatedTarget = I),
              (j = y)),
            (I = j),
            x && v)
          )
            t: {
              for (y = x, g = v, p = 0, h = y; h; h = sr(h)) p++;
              for (h = 0, j = g; j; j = sr(j)) h++;
              for (; 0 < p - h; ) (y = sr(y)), p--;
              for (; 0 < h - p; ) (g = sr(g)), h--;
              for (; p--; ) {
                if (y === g || (g !== null && y === g.alternate)) break t;
                (y = sr(y)), (g = sr(g));
              }
              y = null;
            }
          else y = null;
          x !== null && Xi(f, d, x, y, !1),
            v !== null && I !== null && Xi(f, I, v, y, !0);
        }
      }
      e: {
        if (
          ((d = c ? ur(c) : window),
          (x = d.nodeName && d.nodeName.toLowerCase()),
          x === "select" || (x === "input" && d.type === "file"))
        )
          var D = Mf;
        else if (Bi(d))
          if (Ic) D = Lf;
          else {
            D = Of;
            var T = Pf;
          }
        else
          (x = d.nodeName) &&
            x.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (D = Rf);
        if (D && (D = D(e, c))) {
          zc(f, D, r, m);
          break e;
        }
        T && T(e, d, c),
          e === "focusout" &&
            (T = d._wrapperState) &&
            T.controlled &&
            d.type === "number" &&
            Ol(d, "number", d.value);
      }
      switch (((T = c ? ur(c) : window), e)) {
        case "focusin":
          (Bi(T) || T.contentEditable === "true") &&
            ((or = T), (ql = c), (Jr = null));
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
          (Gl = !1), Gi(f, r, m);
          break;
        case "selectionchange":
          if ($f) break;
        case "keydown":
        case "keyup":
          Gi(f, r, m);
      }
      var z;
      if (Wa)
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
        ir
          ? Ec(e, r) && (C = "onCompositionEnd")
          : e === "keydown" && r.keyCode === 229 && (C = "onCompositionStart");
      C &&
        (_c &&
          r.locale !== "ko" &&
          (ir || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && ir && (z = Dc())
            : ((St = m),
              (Ha = "value" in St ? St.value : St.textContent),
              (ir = !0))),
        (T = gs(c, C)),
        0 < T.length &&
          ((C = new Ai(C, e, null, r, m)),
          f.push({ event: C, listeners: T }),
          z ? (C.data = z) : ((z = Tc(r)), z !== null && (C.data = z)))),
        (z = _f ? Ef(e, r) : Tf(e, r)) &&
          ((c = gs(c, "onBeforeInput")),
          0 < c.length &&
            ((m = new Ai("onBeforeInput", "beforeinput", null, r, m)),
            f.push({ event: m, listeners: c }),
            (m.data = z)));
    }
    Hc(f, t);
  });
}
function hn(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function gs(e, t) {
  for (var r = t + "Capture", s = []; e !== null; ) {
    var l = e,
      a = l.stateNode;
    l.tag === 5 &&
      a !== null &&
      ((l = a),
      (a = on(e, r)),
      a != null && s.unshift(hn(e, a, l)),
      (a = on(e, t)),
      a != null && s.push(hn(e, a, l))),
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
function Xi(e, t, r, s, l) {
  for (var a = t._reactName, i = []; r !== null && r !== s; ) {
    var o = r,
      u = o.alternate,
      c = o.stateNode;
    if (u !== null && u === s) break;
    o.tag === 5 &&
      c !== null &&
      ((o = c),
      l
        ? ((u = on(r, a)), u != null && i.unshift(hn(r, u, o)))
        : l || ((u = on(r, a)), u != null && i.push(hn(r, u, o)))),
      (r = r.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Vf = /\r\n?/g,
  Wf = /\u0000|\uFFFD/g;
function Zi(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Vf,
      `
`
    )
    .replace(Wf, "");
}
function Bn(e, t, r) {
  if (((t = Zi(t)), Zi(e) !== t && r)) throw Error(_(425));
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
  Ji = typeof Promise == "function" ? Promise : void 0,
  qf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ji < "u"
      ? function (e) {
          return Ji.resolve(null).then(e).catch(Gf);
        }
      : Zl;
function Gf(e) {
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
function eo(e) {
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
  et = "__reactFiber$" + Or,
  gn = "__reactProps$" + Or,
  ft = "__reactContainer$" + Or,
  Jl = "__reactEvents$" + Or,
  Yf = "__reactListeners$" + Or,
  Kf = "__reactHandles$" + Or;
function Bt(e) {
  var t = e[et];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[ft] || r[et])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = eo(e); e !== null; ) {
          if ((r = e[et])) return r;
          e = eo(e);
        }
      return t;
    }
    (e = r), (r = e.parentNode);
  }
  return null;
}
function _n(e) {
  return (
    (e = e[et] || e[ft]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ur(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(_(33));
}
function Fs(e) {
  return e[gn] || null;
}
var ea = [],
  dr = -1;
function At(e) {
  return { current: e };
}
function Q(e) {
  0 > dr || ((e.current = ea[dr]), (ea[dr] = null), dr--);
}
function V(e, t) {
  dr++, (ea[dr] = e.current), (e.current = t);
}
var Rt = {},
  pe = At(Rt),
  je = At(!1),
  Xt = Rt;
function Sr(e, t) {
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
function Ne(e) {
  return (e = e.childContextTypes), e != null;
}
function ys() {
  Q(je), Q(pe);
}
function to(e, t, r) {
  if (pe.current !== Rt) throw Error(_(168));
  V(pe, t), V(je, r);
}
function Vc(e, t, r) {
  var s = e.stateNode;
  if (((t = t.childContextTypes), typeof s.getChildContext != "function"))
    return r;
  s = s.getChildContext();
  for (var l in s) if (!(l in t)) throw Error(_(108, Md(e) || "Unknown", l));
  return X({}, r, s);
}
function vs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Rt),
    (Xt = pe.current),
    V(pe, e),
    V(je, je.current),
    !0
  );
}
function ro(e, t, r) {
  var s = e.stateNode;
  if (!s) throw Error(_(169));
  r
    ? ((e = Vc(e, t, Xt)),
      (s.__reactInternalMemoizedMergedChildContext = e),
      Q(je),
      Q(pe),
      V(pe, e))
    : Q(je),
    V(je, r);
}
var lt = null,
  As = !1,
  hl = !1;
function Wc(e) {
  lt === null ? (lt = [e]) : lt.push(e);
}
function Xf(e) {
  (As = !0), Wc(e);
}
function $t() {
  if (!hl && lt !== null) {
    hl = !0;
    var e = 0,
      t = B;
    try {
      var r = lt;
      for (B = 1; e < r.length; e++) {
        var s = r[e];
        do s = s(!0);
        while (s !== null);
      }
      (lt = null), (As = !1);
    } catch (l) {
      throw (lt !== null && (lt = lt.slice(e + 1)), gc(Fa, $t), l);
    } finally {
      (B = t), (hl = !1);
    }
  }
  return null;
}
var fr = [],
  mr = 0,
  ws = null,
  js = 0,
  Re = [],
  Le = 0,
  Zt = null,
  at = 1,
  it = "";
function Ut(e, t) {
  (fr[mr++] = js), (fr[mr++] = ws), (ws = e), (js = t);
}
function Qc(e, t, r) {
  (Re[Le++] = at), (Re[Le++] = it), (Re[Le++] = Zt), (Zt = e);
  var s = at;
  e = it;
  var l = 32 - Ye(s) - 1;
  (s &= ~(1 << l)), (r += 1);
  var a = 32 - Ye(t) + l;
  if (30 < a) {
    var i = l - (l % 5);
    (a = (s & ((1 << i) - 1)).toString(32)),
      (s >>= i),
      (l -= i),
      (at = (1 << (32 - Ye(t) + l)) | (r << l) | s),
      (it = a + e);
  } else (at = (1 << a) | (r << l) | s), (it = e);
}
function qa(e) {
  e.return !== null && (Ut(e, 1), Qc(e, 1, 0));
}
function Ga(e) {
  for (; e === ws; )
    (ws = fr[--mr]), (fr[mr] = null), (js = fr[--mr]), (fr[mr] = null);
  for (; e === Zt; )
    (Zt = Re[--Le]),
      (Re[Le] = null),
      (it = Re[--Le]),
      (Re[Le] = null),
      (at = Re[--Le]),
      (Re[Le] = null);
}
var ze = null,
  Te = null,
  q = !1,
  Ge = null;
function qc(e, t) {
  var r = Fe(5, null, null, 0);
  (r.elementType = "DELETED"),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
}
function no(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ze = e), (Te = Tt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ze = e), (Te = null), !0) : !1
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
            (r = Fe(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (ze = e),
            (Te = null),
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
  if (q) {
    var t = Te;
    if (t) {
      var r = t;
      if (!no(e, t)) {
        if (ta(e)) throw Error(_(418));
        t = Tt(r.nextSibling);
        var s = ze;
        t && no(e, t)
          ? qc(s, r)
          : ((e.flags = (e.flags & -4097) | 2), (q = !1), (ze = e));
      }
    } else {
      if (ta(e)) throw Error(_(418));
      (e.flags = (e.flags & -4097) | 2), (q = !1), (ze = e);
    }
  }
}
function so(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ze = e;
}
function Vn(e) {
  if (e !== ze) return !1;
  if (!q) return so(e), (q = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Xl(e.type, e.memoizedProps))),
    t && (t = Te))
  ) {
    if (ta(e)) throw (Gc(), Error(_(418)));
    for (; t; ) qc(e, t), (t = Tt(t.nextSibling));
  }
  if ((so(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(_(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              Te = Tt(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Te = null;
    }
  } else Te = ze ? Tt(e.stateNode.nextSibling) : null;
  return !0;
}
function Gc() {
  for (var e = Te; e; ) e = Tt(e.nextSibling);
}
function Cr() {
  (Te = ze = null), (q = !1);
}
function Ya(e) {
  Ge === null ? (Ge = [e]) : Ge.push(e);
}
var Zf = xt.ReactCurrentBatchConfig;
function Hr(e, t, r) {
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
function lo(e) {
  var t = e._init;
  return t(e._payload);
}
function Yc(e) {
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
  function o(g, p, h, j) {
    return p === null || p.tag !== 6
      ? ((p = Nl(h, g.mode, j)), (p.return = g), p)
      : ((p = l(p, h)), (p.return = g), p);
  }
  function u(g, p, h, j) {
    var D = h.type;
    return D === ar
      ? m(g, p, h.props.children, j, h.key)
      : p !== null &&
        (p.elementType === D ||
          (typeof D == "object" &&
            D !== null &&
            D.$$typeof === jt &&
            lo(D) === p.type))
      ? ((j = l(p, h.props)), (j.ref = Hr(g, p, h)), (j.return = g), j)
      : ((j = os(h.type, h.key, h.props, null, g.mode, j)),
        (j.ref = Hr(g, p, h)),
        (j.return = g),
        j);
  }
  function c(g, p, h, j) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== h.containerInfo ||
      p.stateNode.implementation !== h.implementation
      ? ((p = bl(h, g.mode, j)), (p.return = g), p)
      : ((p = l(p, h.children || [])), (p.return = g), p);
  }
  function m(g, p, h, j, D) {
    return p === null || p.tag !== 7
      ? ((p = Gt(h, g.mode, j, D)), (p.return = g), p)
      : ((p = l(p, h)), (p.return = g), p);
  }
  function f(g, p, h) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Nl("" + p, g.mode, h)), (p.return = g), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Pn:
          return (
            (h = os(p.type, p.key, p.props, null, g.mode, h)),
            (h.ref = Hr(g, null, p)),
            (h.return = g),
            h
          );
        case lr:
          return (p = bl(p, g.mode, h)), (p.return = g), p;
        case jt:
          var j = p._init;
          return f(g, j(p._payload), h);
      }
      if (Qr(p) || Lr(p))
        return (p = Gt(p, g.mode, h, null)), (p.return = g), p;
      Wn(g, p);
    }
    return null;
  }
  function d(g, p, h, j) {
    var D = p !== null ? p.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return D !== null ? null : o(g, p, "" + h, j);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Pn:
          return h.key === D ? u(g, p, h, j) : null;
        case lr:
          return h.key === D ? c(g, p, h, j) : null;
        case jt:
          return (D = h._init), d(g, p, D(h._payload), j);
      }
      if (Qr(h) || Lr(h)) return D !== null ? null : m(g, p, h, j, null);
      Wn(g, h);
    }
    return null;
  }
  function x(g, p, h, j, D) {
    if ((typeof j == "string" && j !== "") || typeof j == "number")
      return (g = g.get(h) || null), o(p, g, "" + j, D);
    if (typeof j == "object" && j !== null) {
      switch (j.$$typeof) {
        case Pn:
          return (g = g.get(j.key === null ? h : j.key) || null), u(p, g, j, D);
        case lr:
          return (g = g.get(j.key === null ? h : j.key) || null), c(p, g, j, D);
        case jt:
          var T = j._init;
          return x(g, p, h, T(j._payload), D);
      }
      if (Qr(j) || Lr(j)) return (g = g.get(h) || null), m(p, g, j, D, null);
      Wn(p, j);
    }
    return null;
  }
  function v(g, p, h, j) {
    for (
      var D = null, T = null, z = p, C = (p = 0), w = null;
      z !== null && C < h.length;
      C++
    ) {
      z.index > C ? ((w = z), (z = null)) : (w = z.sibling);
      var N = d(g, z, h[C], j);
      if (N === null) {
        z === null && (z = w);
        break;
      }
      e && z && N.alternate === null && t(g, z),
        (p = a(N, p, C)),
        T === null ? (D = N) : (T.sibling = N),
        (T = N),
        (z = w);
    }
    if (C === h.length) return r(g, z), q && Ut(g, C), D;
    if (z === null) {
      for (; C < h.length; C++)
        (z = f(g, h[C], j)),
          z !== null &&
            ((p = a(z, p, C)), T === null ? (D = z) : (T.sibling = z), (T = z));
      return q && Ut(g, C), D;
    }
    for (z = s(g, z); C < h.length; C++)
      (w = x(z, g, C, h[C], j)),
        w !== null &&
          (e && w.alternate !== null && z.delete(w.key === null ? C : w.key),
          (p = a(w, p, C)),
          T === null ? (D = w) : (T.sibling = w),
          (T = w));
    return (
      e &&
        z.forEach(function (E) {
          return t(g, E);
        }),
      q && Ut(g, C),
      D
    );
  }
  function y(g, p, h, j) {
    var D = Lr(h);
    if (typeof D != "function") throw Error(_(150));
    if (((h = D.call(h)), h == null)) throw Error(_(151));
    for (
      var T = (D = null), z = p, C = (p = 0), w = null, N = h.next();
      z !== null && !N.done;
      C++, N = h.next()
    ) {
      z.index > C ? ((w = z), (z = null)) : (w = z.sibling);
      var E = d(g, z, N.value, j);
      if (E === null) {
        z === null && (z = w);
        break;
      }
      e && z && E.alternate === null && t(g, z),
        (p = a(E, p, C)),
        T === null ? (D = E) : (T.sibling = E),
        (T = E),
        (z = w);
    }
    if (N.done) return r(g, z), q && Ut(g, C), D;
    if (z === null) {
      for (; !N.done; C++, N = h.next())
        (N = f(g, N.value, j)),
          N !== null &&
            ((p = a(N, p, C)), T === null ? (D = N) : (T.sibling = N), (T = N));
      return q && Ut(g, C), D;
    }
    for (z = s(g, z); !N.done; C++, N = h.next())
      (N = x(z, g, C, N.value, j)),
        N !== null &&
          (e && N.alternate !== null && z.delete(N.key === null ? C : N.key),
          (p = a(N, p, C)),
          T === null ? (D = N) : (T.sibling = N),
          (T = N));
    return (
      e &&
        z.forEach(function (O) {
          return t(g, O);
        }),
      q && Ut(g, C),
      D
    );
  }
  function I(g, p, h, j) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === ar &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case Pn:
          e: {
            for (var D = h.key, T = p; T !== null; ) {
              if (T.key === D) {
                if (((D = h.type), D === ar)) {
                  if (T.tag === 7) {
                    r(g, T.sibling),
                      (p = l(T, h.props.children)),
                      (p.return = g),
                      (g = p);
                    break e;
                  }
                } else if (
                  T.elementType === D ||
                  (typeof D == "object" &&
                    D !== null &&
                    D.$$typeof === jt &&
                    lo(D) === T.type)
                ) {
                  r(g, T.sibling),
                    (p = l(T, h.props)),
                    (p.ref = Hr(g, T, h)),
                    (p.return = g),
                    (g = p);
                  break e;
                }
                r(g, T);
                break;
              } else t(g, T);
              T = T.sibling;
            }
            h.type === ar
              ? ((p = Gt(h.props.children, g.mode, j, h.key)),
                (p.return = g),
                (g = p))
              : ((j = os(h.type, h.key, h.props, null, g.mode, j)),
                (j.ref = Hr(g, p, h)),
                (j.return = g),
                (g = j));
          }
          return i(g);
        case lr:
          e: {
            for (T = h.key; p !== null; ) {
              if (p.key === T)
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
            (p = bl(h, g.mode, j)), (p.return = g), (g = p);
          }
          return i(g);
        case jt:
          return (T = h._init), I(g, p, T(h._payload), j);
      }
      if (Qr(h)) return v(g, p, h, j);
      if (Lr(h)) return y(g, p, h, j);
      Wn(g, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        p !== null && p.tag === 6
          ? (r(g, p.sibling), (p = l(p, h)), (p.return = g), (g = p))
          : (r(g, p), (p = Nl(h, g.mode, j)), (p.return = g), (g = p)),
        i(g))
      : r(g, p);
  }
  return I;
}
var Dr = Yc(!0),
  Kc = Yc(!1),
  Ns = At(null),
  bs = null,
  pr = null,
  Ka = null;
function Xa() {
  Ka = pr = bs = null;
}
function Za(e) {
  var t = Ns.current;
  Q(Ns), (e._currentValue = t);
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
function jr(e, t) {
  (bs = e),
    (Ka = pr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (we = !0), (e.firstContext = null));
}
function $e(e) {
  var t = e._currentValue;
  if (Ka !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), pr === null)) {
      if (bs === null) throw Error(_(308));
      (pr = e), (bs.dependencies = { lanes: 0, firstContext: e });
    } else pr = pr.next = e;
  return t;
}
var Vt = null;
function Ja(e) {
  Vt === null ? (Vt = [e]) : Vt.push(e);
}
function Xc(e, t, r, s) {
  var l = t.interleaved;
  return (
    l === null ? ((r.next = r), Ja(t)) : ((r.next = l.next), (l.next = r)),
    (t.interleaved = r),
    mt(e, s)
  );
}
function mt(e, t) {
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
function ei(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Zc(e, t) {
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
  if (((s = s.shared), $ & 2)) {
    var l = s.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (s.pending = t),
      mt(e, r)
    );
  }
  return (
    (l = s.interleaved),
    l === null ? ((t.next = t), Ja(s)) : ((t.next = l.next), (l.next = t)),
    (s.interleaved = t),
    mt(e, r)
  );
}
function rs(e, t, r) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
  ) {
    var s = t.lanes;
    (s &= e.pendingLanes), (r |= s), (t.lanes = r), Aa(e, r);
  }
}
function ao(e, t) {
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
  Nt = !1;
  var a = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    o = l.shared.pending;
  if (o !== null) {
    l.shared.pending = null;
    var u = o,
      c = u.next;
    (u.next = null), i === null ? (a = c) : (i.next = c), (i = u);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (o = m.lastBaseUpdate),
      o !== i &&
        (o === null ? (m.firstBaseUpdate = c) : (o.next = c),
        (m.lastBaseUpdate = u)));
  }
  if (a !== null) {
    var f = l.baseState;
    (i = 0), (m = c = u = null), (o = a);
    do {
      var d = o.lane,
        x = o.eventTime;
      if ((s & d) === d) {
        m !== null &&
          (m = m.next =
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
            y = o;
          switch (((d = t), (x = r), y.tag)) {
            case 1:
              if (((v = y.payload), typeof v == "function")) {
                f = v.call(x, f, d);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = y.payload),
                (d = typeof v == "function" ? v.call(x, f, d) : v),
                d == null)
              )
                break e;
              f = X({}, f, d);
              break e;
            case 2:
              Nt = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (d = l.effects),
          d === null ? (l.effects = [o]) : d.push(o));
      } else
        (x = {
          eventTime: x,
          lane: d,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          m === null ? ((c = m = x), (u = f)) : (m = m.next = x),
          (i |= d);
      if (((o = o.next), o === null)) {
        if (((o = l.shared.pending), o === null)) break;
        (d = o),
          (o = d.next),
          (d.next = null),
          (l.lastBaseUpdate = d),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (m === null && (u = f),
      (l.baseState = u),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = m),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else a === null && (l.shared.lanes = 0);
    (er |= i), (e.lanes = i), (e.memoizedState = f);
  }
}
function io(e, t, r) {
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
var En = {},
  rt = At(En),
  xn = At(En),
  yn = At(En);
function Wt(e) {
  if (e === En) throw Error(_(174));
  return e;
}
function ti(e, t) {
  switch ((V(yn, t), V(xn, e), V(rt, En), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ll(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ll(t, e));
  }
  Q(rt), V(rt, t);
}
function _r() {
  Q(rt), Q(xn), Q(yn);
}
function Jc(e) {
  Wt(yn.current);
  var t = Wt(rt.current),
    r = Ll(t, e.type);
  t !== r && (V(xn, e), V(rt, r));
}
function ri(e) {
  xn.current === e && (Q(rt), Q(xn));
}
var G = At(0);
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
var gl = [];
function ni() {
  for (var e = 0; e < gl.length; e++)
    gl[e]._workInProgressVersionPrimary = null;
  gl.length = 0;
}
var ns = xt.ReactCurrentDispatcher,
  xl = xt.ReactCurrentBatchConfig,
  Jt = 0,
  K = null,
  ne = null,
  le = null,
  Cs = !1,
  en = !1,
  vn = 0,
  Jf = 0;
function de() {
  throw Error(_(321));
}
function si(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!Xe(e[r], t[r])) return !1;
  return !0;
}
function li(e, t, r, s, l, a) {
  if (
    ((Jt = a),
    (K = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ns.current = e === null || e.memoizedState === null ? nm : sm),
    (e = r(s, l)),
    en)
  ) {
    a = 0;
    do {
      if (((en = !1), (vn = 0), 25 <= a)) throw Error(_(301));
      (a += 1),
        (le = ne = null),
        (t.updateQueue = null),
        (ns.current = lm),
        (e = r(s, l));
    } while (en);
  }
  if (
    ((ns.current = Ds),
    (t = ne !== null && ne.next !== null),
    (Jt = 0),
    (le = ne = K = null),
    (Cs = !1),
    t)
  )
    throw Error(_(300));
  return e;
}
function ai() {
  var e = vn !== 0;
  return (vn = 0), e;
}
function Je() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return le === null ? (K.memoizedState = le = e) : (le = le.next = e), le;
}
function Ue() {
  if (ne === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ne.next;
  var t = le === null ? K.memoizedState : le.next;
  if (t !== null) (le = t), (ne = e);
  else {
    if (e === null) throw Error(_(310));
    (ne = e),
      (e = {
        memoizedState: ne.memoizedState,
        baseState: ne.baseState,
        baseQueue: ne.baseQueue,
        queue: ne.queue,
        next: null,
      }),
      le === null ? (K.memoizedState = le = e) : (le = le.next = e);
  }
  return le;
}
function wn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function yl(e) {
  var t = Ue(),
    r = t.queue;
  if (r === null) throw Error(_(311));
  r.lastRenderedReducer = e;
  var s = ne,
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
      u = null,
      c = a;
    do {
      var m = c.lane;
      if ((Jt & m) === m)
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
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        u === null ? ((o = u = f), (i = s)) : (u = u.next = f),
          (K.lanes |= m),
          (er |= m);
      }
      c = c.next;
    } while (c !== null && c !== a);
    u === null ? (i = s) : (u.next = o),
      Xe(s, t.memoizedState) || (we = !0),
      (t.memoizedState = s),
      (t.baseState = i),
      (t.baseQueue = u),
      (r.lastRenderedState = s);
  }
  if (((e = r.interleaved), e !== null)) {
    l = e;
    do (a = l.lane), (K.lanes |= a), (er |= a), (l = l.next);
    while (l !== e);
  } else l === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function vl(e) {
  var t = Ue(),
    r = t.queue;
  if (r === null) throw Error(_(311));
  r.lastRenderedReducer = e;
  var s = r.dispatch,
    l = r.pending,
    a = t.memoizedState;
  if (l !== null) {
    r.pending = null;
    var i = (l = l.next);
    do (a = e(a, i.action)), (i = i.next);
    while (i !== l);
    Xe(a, t.memoizedState) || (we = !0),
      (t.memoizedState = a),
      t.baseQueue === null && (t.baseState = a),
      (r.lastRenderedState = a);
  }
  return [a, s];
}
function eu() {}
function tu(e, t) {
  var r = K,
    s = Ue(),
    l = t(),
    a = !Xe(s.memoizedState, l);
  if (
    (a && ((s.memoizedState = l), (we = !0)),
    (s = s.queue),
    ii(su.bind(null, r, s, e), [e]),
    s.getSnapshot !== t || a || (le !== null && le.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      jn(9, nu.bind(null, r, s, l, t), void 0, null),
      ae === null)
    )
      throw Error(_(349));
    Jt & 30 || ru(r, t, l);
  }
  return l;
}
function ru(e, t, r) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
}
function nu(e, t, r, s) {
  (t.value = r), (t.getSnapshot = s), lu(t) && au(e);
}
function su(e, t, r) {
  return r(function () {
    lu(t) && au(e);
  });
}
function lu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !Xe(e, r);
  } catch {
    return !0;
  }
}
function au(e) {
  var t = mt(e, 1);
  t !== null && Ke(t, e, 1, -1);
}
function oo(e) {
  var t = Je();
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
    (e = e.dispatch = rm.bind(null, K, e)),
    [t.memoizedState, e]
  );
}
function jn(e, t, r, s) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: s, next: null }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((s = r.next), (r.next = e), (e.next = s), (t.lastEffect = e))),
    e
  );
}
function iu() {
  return Ue().memoizedState;
}
function ss(e, t, r, s) {
  var l = Je();
  (K.flags |= e),
    (l.memoizedState = jn(1 | t, r, void 0, s === void 0 ? null : s));
}
function $s(e, t, r, s) {
  var l = Ue();
  s = s === void 0 ? null : s;
  var a = void 0;
  if (ne !== null) {
    var i = ne.memoizedState;
    if (((a = i.destroy), s !== null && si(s, i.deps))) {
      l.memoizedState = jn(t, r, a, s);
      return;
    }
  }
  (K.flags |= e), (l.memoizedState = jn(1 | t, r, a, s));
}
function co(e, t) {
  return ss(8390656, 8, e, t);
}
function ii(e, t) {
  return $s(2048, 8, e, t);
}
function ou(e, t) {
  return $s(4, 2, e, t);
}
function cu(e, t) {
  return $s(4, 4, e, t);
}
function uu(e, t) {
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
function du(e, t, r) {
  return (
    (r = r != null ? r.concat([e]) : null), $s(4, 4, uu.bind(null, t, e), r)
  );
}
function oi() {}
function fu(e, t) {
  var r = Ue();
  t = t === void 0 ? null : t;
  var s = r.memoizedState;
  return s !== null && t !== null && si(t, s[1])
    ? s[0]
    : ((r.memoizedState = [e, t]), e);
}
function mu(e, t) {
  var r = Ue();
  t = t === void 0 ? null : t;
  var s = r.memoizedState;
  return s !== null && t !== null && si(t, s[1])
    ? s[0]
    : ((e = e()), (r.memoizedState = [e, t]), e);
}
function pu(e, t, r) {
  return Jt & 21
    ? (Xe(r, t) || ((r = vc()), (K.lanes |= r), (er |= r), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (we = !0)), (e.memoizedState = r));
}
function em(e, t) {
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
function hu() {
  return Ue().memoizedState;
}
function tm(e, t, r) {
  var s = Mt(e);
  if (
    ((r = {
      lane: s,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    gu(e))
  )
    xu(t, r);
  else if (((r = Xc(e, t, r, s)), r !== null)) {
    var l = ge();
    Ke(r, e, s, l), yu(r, t, s);
  }
}
function rm(e, t, r) {
  var s = Mt(e),
    l = { lane: s, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (gu(e)) xu(t, l);
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
        if (((l.hasEagerState = !0), (l.eagerState = o), Xe(o, i))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), Ja(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (r = Xc(e, t, l, s)),
      r !== null && ((l = ge()), Ke(r, e, s, l), yu(r, t, s));
  }
}
function gu(e) {
  var t = e.alternate;
  return e === K || (t !== null && t === K);
}
function xu(e, t) {
  en = Cs = !0;
  var r = e.pending;
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
    (e.pending = t);
}
function yu(e, t, r) {
  if (r & 4194240) {
    var s = t.lanes;
    (s &= e.pendingLanes), (r |= s), (t.lanes = r), Aa(e, r);
  }
}
var Ds = {
    readContext: $e,
    useCallback: de,
    useContext: de,
    useEffect: de,
    useImperativeHandle: de,
    useInsertionEffect: de,
    useLayoutEffect: de,
    useMemo: de,
    useReducer: de,
    useRef: de,
    useState: de,
    useDebugValue: de,
    useDeferredValue: de,
    useTransition: de,
    useMutableSource: de,
    useSyncExternalStore: de,
    useId: de,
    unstable_isNewReconciler: !1,
  },
  nm = {
    readContext: $e,
    useCallback: function (e, t) {
      return (Je().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: $e,
    useEffect: co,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        ss(4194308, 4, uu.bind(null, t, e), r)
      );
    },
    useLayoutEffect: function (e, t) {
      return ss(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ss(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = Je();
      return (
        (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, r) {
      var s = Je();
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
        (e = e.dispatch = tm.bind(null, K, e)),
        [s.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Je();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: oo,
    useDebugValue: oi,
    useDeferredValue: function (e) {
      return (Je().memoizedState = e);
    },
    useTransition: function () {
      var e = oo(!1),
        t = e[0];
      return (e = em.bind(null, e[1])), (Je().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var s = K,
        l = Je();
      if (q) {
        if (r === void 0) throw Error(_(407));
        r = r();
      } else {
        if (((r = t()), ae === null)) throw Error(_(349));
        Jt & 30 || ru(s, t, r);
      }
      l.memoizedState = r;
      var a = { value: r, getSnapshot: t };
      return (
        (l.queue = a),
        co(su.bind(null, s, a, e), [e]),
        (s.flags |= 2048),
        jn(9, nu.bind(null, s, a, r, t), void 0, null),
        r
      );
    },
    useId: function () {
      var e = Je(),
        t = ae.identifierPrefix;
      if (q) {
        var r = it,
          s = at;
        (r = (s & ~(1 << (32 - Ye(s) - 1))).toString(32) + r),
          (t = ":" + t + "R" + r),
          (r = vn++),
          0 < r && (t += "H" + r.toString(32)),
          (t += ":");
      } else (r = Jf++), (t = ":" + t + "r" + r.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  sm = {
    readContext: $e,
    useCallback: fu,
    useContext: $e,
    useEffect: ii,
    useImperativeHandle: du,
    useInsertionEffect: ou,
    useLayoutEffect: cu,
    useMemo: mu,
    useReducer: yl,
    useRef: iu,
    useState: function () {
      return yl(wn);
    },
    useDebugValue: oi,
    useDeferredValue: function (e) {
      var t = Ue();
      return pu(t, ne.memoizedState, e);
    },
    useTransition: function () {
      var e = yl(wn)[0],
        t = Ue().memoizedState;
      return [e, t];
    },
    useMutableSource: eu,
    useSyncExternalStore: tu,
    useId: hu,
    unstable_isNewReconciler: !1,
  },
  lm = {
    readContext: $e,
    useCallback: fu,
    useContext: $e,
    useEffect: ii,
    useImperativeHandle: du,
    useInsertionEffect: ou,
    useLayoutEffect: cu,
    useMemo: mu,
    useReducer: vl,
    useRef: iu,
    useState: function () {
      return vl(wn);
    },
    useDebugValue: oi,
    useDeferredValue: function (e) {
      var t = Ue();
      return ne === null ? (t.memoizedState = e) : pu(t, ne.memoizedState, e);
    },
    useTransition: function () {
      var e = vl(wn)[0],
        t = Ue().memoizedState;
      return [e, t];
    },
    useMutableSource: eu,
    useSyncExternalStore: tu,
    useId: hu,
    unstable_isNewReconciler: !1,
  };
function Qe(e, t) {
  if (e && e.defaultProps) {
    (t = X({}, t)), (e = e.defaultProps);
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
function sa(e, t, r, s) {
  (t = e.memoizedState),
    (r = r(s, t)),
    (r = r == null ? t : X({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r);
}
var Us = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? nr(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var s = ge(),
      l = Mt(e),
      a = ot(s, l);
    (a.payload = t),
      r != null && (a.callback = r),
      (t = zt(e, a, l)),
      t !== null && (Ke(t, e, l, s), rs(t, e, l));
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var s = ge(),
      l = Mt(e),
      a = ot(s, l);
    (a.tag = 1),
      (a.payload = t),
      r != null && (a.callback = r),
      (t = zt(e, a, l)),
      t !== null && (Ke(t, e, l, s), rs(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = ge(),
      s = Mt(e),
      l = ot(r, s);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = zt(e, l, s)),
      t !== null && (Ke(t, e, s, r), rs(t, e, s));
  },
};
function uo(e, t, r, s, l, a, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(s, a, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !mn(r, s) || !mn(l, a)
      : !0
  );
}
function vu(e, t, r) {
  var s = !1,
    l = Rt,
    a = t.contextType;
  return (
    typeof a == "object" && a !== null
      ? (a = $e(a))
      : ((l = Ne(t) ? Xt : pe.current),
        (s = t.contextTypes),
        (a = (s = s != null) ? Sr(e, l) : Rt)),
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
function fo(e, t, r, s) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(r, s),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(r, s),
    t.state !== e && Us.enqueueReplaceState(t, t.state, null);
}
function la(e, t, r, s) {
  var l = e.stateNode;
  (l.props = r), (l.state = e.memoizedState), (l.refs = {}), ei(e);
  var a = t.contextType;
  typeof a == "object" && a !== null
    ? (l.context = $e(a))
    : ((a = Ne(t) ? Xt : pe.current), (l.context = Sr(e, a))),
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
      ks(e, r, l, s),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Er(e, t) {
  try {
    var r = "",
      s = t;
    do (r += Id(s)), (s = s.return);
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
var am = typeof WeakMap == "function" ? WeakMap : Map;
function wu(e, t, r) {
  (r = ot(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var s = t.value;
  return (
    (r.callback = function () {
      Es || ((Es = !0), (ga = s)), aa(e, t);
    }),
    r
  );
}
function ju(e, t, r) {
  (r = ot(-1, r)), (r.tag = 3);
  var s = e.type.getDerivedStateFromError;
  if (typeof s == "function") {
    var l = t.value;
    (r.payload = function () {
      return s(l);
    }),
      (r.callback = function () {
        aa(e, t);
      });
  }
  var a = e.stateNode;
  return (
    a !== null &&
      typeof a.componentDidCatch == "function" &&
      (r.callback = function () {
        aa(e, t),
          typeof s != "function" &&
            (It === null ? (It = new Set([this])) : It.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    r
  );
}
function mo(e, t, r) {
  var s = e.pingCache;
  if (s === null) {
    s = e.pingCache = new am();
    var l = new Set();
    s.set(t, l);
  } else (l = s.get(t)), l === void 0 && ((l = new Set()), s.set(t, l));
  l.has(r) || (l.add(r), (e = wm.bind(null, e, t, r)), t.then(e, e));
}
function po(e) {
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
function ho(e, t, r, s, l) {
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
var im = xt.ReactCurrentOwner,
  we = !1;
function he(e, t, r, s) {
  t.child = e === null ? Kc(t, null, r, s) : Dr(t, e.child, r, s);
}
function go(e, t, r, s, l) {
  r = r.render;
  var a = t.ref;
  return (
    jr(t, l),
    (s = li(e, t, r, s, a, l)),
    (r = ai()),
    e !== null && !we
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        pt(e, t, l))
      : (q && r && qa(t), (t.flags |= 1), he(e, t, s, l), t.child)
  );
}
function xo(e, t, r, s, l) {
  if (e === null) {
    var a = r.type;
    return typeof a == "function" &&
      !gi(a) &&
      a.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), Nu(e, t, a, s, l))
      : ((e = os(r.type, null, s, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((a = e.child), !(e.lanes & l))) {
    var i = a.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : mn), r(i, s) && e.ref === t.ref)
    )
      return pt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Pt(a, s)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Nu(e, t, r, s, l) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (mn(a, s) && e.ref === t.ref)
      if (((we = !1), (t.pendingProps = s = a), (e.lanes & l) !== 0))
        e.flags & 131072 && (we = !0);
      else return (t.lanes = e.lanes), pt(e, t, l);
  }
  return ia(e, t, r, s, l);
}
function bu(e, t, r) {
  var s = t.pendingProps,
    l = s.children,
    a = e !== null ? e.memoizedState : null;
  if (s.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        V(gr, _e),
        (_e |= r);
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
          V(gr, _e),
          (_e |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (s = a !== null ? a.baseLanes : r),
        V(gr, _e),
        (_e |= s);
    }
  else
    a !== null ? ((s = a.baseLanes | r), (t.memoizedState = null)) : (s = r),
      V(gr, _e),
      (_e |= s);
  return he(e, t, l, r), t.child;
}
function ku(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ia(e, t, r, s, l) {
  var a = Ne(r) ? Xt : pe.current;
  return (
    (a = Sr(t, a)),
    jr(t, l),
    (r = li(e, t, r, s, a, l)),
    (s = ai()),
    e !== null && !we
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        pt(e, t, l))
      : (q && s && qa(t), (t.flags |= 1), he(e, t, r, l), t.child)
  );
}
function yo(e, t, r, s, l) {
  if (Ne(r)) {
    var a = !0;
    vs(t);
  } else a = !1;
  if ((jr(t, l), t.stateNode === null))
    ls(e, t), vu(t, r, s), la(t, r, s, l), (s = !0);
  else if (e === null) {
    var i = t.stateNode,
      o = t.memoizedProps;
    i.props = o;
    var u = i.context,
      c = r.contextType;
    typeof c == "object" && c !== null
      ? (c = $e(c))
      : ((c = Ne(r) ? Xt : pe.current), (c = Sr(t, c)));
    var m = r.getDerivedStateFromProps,
      f =
        typeof m == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((o !== s || u !== c) && fo(t, i, s, c)),
      (Nt = !1);
    var d = t.memoizedState;
    (i.state = d),
      ks(t, s, i, l),
      (u = t.memoizedState),
      o !== s || d !== u || je.current || Nt
        ? (typeof m == "function" && (sa(t, r, m, s), (u = t.memoizedState)),
          (o = Nt || uo(t, r, o, s, d, u, c))
            ? (f ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = s),
              (t.memoizedState = u)),
          (i.props = s),
          (i.state = u),
          (i.context = c),
          (s = o))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (s = !1));
  } else {
    (i = t.stateNode),
      Zc(e, t),
      (o = t.memoizedProps),
      (c = t.type === t.elementType ? o : Qe(t.type, o)),
      (i.props = c),
      (f = t.pendingProps),
      (d = i.context),
      (u = r.contextType),
      typeof u == "object" && u !== null
        ? (u = $e(u))
        : ((u = Ne(r) ? Xt : pe.current), (u = Sr(t, u)));
    var x = r.getDerivedStateFromProps;
    (m =
      typeof x == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((o !== f || d !== u) && fo(t, i, s, u)),
      (Nt = !1),
      (d = t.memoizedState),
      (i.state = d),
      ks(t, s, i, l);
    var v = t.memoizedState;
    o !== f || d !== v || je.current || Nt
      ? (typeof x == "function" && (sa(t, r, x, s), (v = t.memoizedState)),
        (c = Nt || uo(t, r, c, s, d, v, u) || !1)
          ? (m ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(s, v, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(s, v, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (o === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (o === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = s),
            (t.memoizedState = v)),
        (i.props = s),
        (i.state = v),
        (i.context = u),
        (s = c))
      : (typeof i.componentDidUpdate != "function" ||
          (o === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (o === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (s = !1));
  }
  return oa(e, t, r, s, a, l);
}
function oa(e, t, r, s, l, a) {
  ku(e, t);
  var i = (t.flags & 128) !== 0;
  if (!s && !i) return l && ro(t, r, !1), pt(e, t, a);
  (s = t.stateNode), (im.current = t);
  var o =
    i && typeof r.getDerivedStateFromError != "function" ? null : s.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Dr(t, e.child, null, a)), (t.child = Dr(t, null, o, a)))
      : he(e, t, o, a),
    (t.memoizedState = s.state),
    l && ro(t, r, !0),
    t.child
  );
}
function Su(e) {
  var t = e.stateNode;
  t.pendingContext
    ? to(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && to(e, t.context, !1),
    ti(e, t.containerInfo);
}
function vo(e, t, r, s, l) {
  return Cr(), Ya(l), (t.flags |= 256), he(e, t, r, s), t.child;
}
var ca = { dehydrated: null, treeContext: null, retryLane: 0 };
function ua(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Cu(e, t, r) {
  var s = t.pendingProps,
    l = G.current,
    a = !1,
    i = (t.flags & 128) !== 0,
    o;
  if (
    ((o = i) ||
      (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    o
      ? ((a = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    V(G, l & 1),
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
                : (a = Vs(i, s, 0, null)),
              (e = Gt(e, s, r, null)),
              (a.return = t),
              (e.return = t),
              (a.sibling = e),
              (t.child = a),
              (t.child.memoizedState = ua(r)),
              (t.memoizedState = ca),
              e)
            : ci(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((o = l.dehydrated), o !== null)))
    return om(e, t, i, s, o, l, r);
  if (a) {
    (a = s.fallback), (i = t.mode), (l = e.child), (o = l.sibling);
    var u = { mode: "hidden", children: s.children };
    return (
      !(i & 1) && t.child !== l
        ? ((s = t.child),
          (s.childLanes = 0),
          (s.pendingProps = u),
          (t.deletions = null))
        : ((s = Pt(l, u)), (s.subtreeFlags = l.subtreeFlags & 14680064)),
      o !== null ? (a = Pt(o, a)) : ((a = Gt(a, i, r, null)), (a.flags |= 2)),
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
function ci(e, t) {
  return (
    (t = Vs({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Qn(e, t, r, s) {
  return (
    s !== null && Ya(s),
    Dr(t, e.child, null, r),
    (e = ci(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function om(e, t, r, s, l, a, i) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (s = wl(Error(_(422)))), Qn(e, t, i, s))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((a = s.fallback),
        (l = t.mode),
        (s = Vs({ mode: "visible", children: s.children }, l, 0, null)),
        (a = Gt(a, l, i, null)),
        (a.flags |= 2),
        (s.return = t),
        (a.return = t),
        (s.sibling = a),
        (t.child = s),
        t.mode & 1 && Dr(t, e.child, null, i),
        (t.child.memoizedState = ua(i)),
        (t.memoizedState = ca),
        a);
  if (!(t.mode & 1)) return Qn(e, t, i, null);
  if (l.data === "$!") {
    if (((s = l.nextSibling && l.nextSibling.dataset), s)) var o = s.dgst;
    return (s = o), (a = Error(_(419))), (s = wl(a, s, void 0)), Qn(e, t, i, s);
  }
  if (((o = (i & e.childLanes) !== 0), we || o)) {
    if (((s = ae), s !== null)) {
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
          ((a.retryLane = l), mt(e, l), Ke(s, e, l, -1));
    }
    return hi(), (s = wl(Error(_(421)))), Qn(e, t, i, s);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = jm.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = a.treeContext),
      (Te = Tt(l.nextSibling)),
      (ze = t),
      (q = !0),
      (Ge = null),
      e !== null &&
        ((Re[Le++] = at),
        (Re[Le++] = it),
        (Re[Le++] = Zt),
        (at = e.id),
        (it = e.overflow),
        (Zt = t)),
      (t = ci(t, s.children)),
      (t.flags |= 4096),
      t);
}
function wo(e, t, r) {
  e.lanes |= t;
  var s = e.alternate;
  s !== null && (s.lanes |= t), na(e.return, t, r);
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
function Du(e, t, r) {
  var s = t.pendingProps,
    l = s.revealOrder,
    a = s.tail;
  if ((he(e, t, s.children, r), (s = G.current), s & 2))
    (s = (s & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && wo(e, r, t);
        else if (e.tag === 19) wo(e, r, t);
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
  if ((V(G, s), !(t.mode & 1))) t.memoizedState = null;
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
          jl(t, !1, l, r, a);
        break;
      case "backwards":
        for (r = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Ss(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = r), (r = l), (l = e);
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
function pt(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (er |= t.lanes),
    !(r & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(_(153));
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
function cm(e, t, r) {
  switch (t.tag) {
    case 3:
      Su(t), Cr();
      break;
    case 5:
      Jc(t);
      break;
    case 1:
      Ne(t.type) && vs(t);
      break;
    case 4:
      ti(t, t.stateNode.containerInfo);
      break;
    case 10:
      var s = t.type._context,
        l = t.memoizedProps.value;
      V(Ns, s._currentValue), (s._currentValue = l);
      break;
    case 13:
      if (((s = t.memoizedState), s !== null))
        return s.dehydrated !== null
          ? (V(G, G.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
          ? Cu(e, t, r)
          : (V(G, G.current & 1),
            (e = pt(e, t, r)),
            e !== null ? e.sibling : null);
      V(G, G.current & 1);
      break;
    case 19:
      if (((s = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (s) return Du(e, t, r);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        V(G, G.current),
        s)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), bu(e, t, r);
  }
  return pt(e, t, r);
}
var _u, da, Eu, Tu;
_u = function (e, t) {
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
da = function () {};
Eu = function (e, t, r, s) {
  var l = e.memoizedProps;
  if (l !== s) {
    (e = t.stateNode), Wt(rt.current);
    var a = null;
    switch (r) {
      case "input":
        (l = Ml(e, l)), (s = Ml(e, s)), (a = []);
        break;
      case "select":
        (l = X({}, l, { value: void 0 })),
          (s = X({}, s, { value: void 0 })),
          (a = []);
        break;
      case "textarea":
        (l = Rl(e, l)), (s = Rl(e, s)), (a = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof s.onClick == "function" &&
          (e.onclick = xs);
    }
    Fl(r, s);
    var i;
    r = null;
    for (c in l)
      if (!s.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var o = l[c];
          for (i in o) o.hasOwnProperty(i) && (r || (r = {}), (r[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (ln.hasOwnProperty(c)
              ? a || (a = [])
              : (a = a || []).push(c, null));
    for (c in s) {
      var u = s[c];
      if (
        ((o = l != null ? l[c] : void 0),
        s.hasOwnProperty(c) && u !== o && (u != null || o != null))
      )
        if (c === "style")
          if (o) {
            for (i in o)
              !o.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (r || (r = {}), (r[i] = ""));
            for (i in u)
              u.hasOwnProperty(i) &&
                o[i] !== u[i] &&
                (r || (r = {}), (r[i] = u[i]));
          } else r || (a || (a = []), a.push(c, r)), (r = u);
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (o = o ? o.__html : void 0),
              u != null && o !== u && (a = a || []).push(c, u))
            : c === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (a = a || []).push(c, "" + u)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (ln.hasOwnProperty(c)
                ? (u != null && c === "onScroll" && W("scroll", e),
                  a || o === u || (a = []))
                : (a = a || []).push(c, u));
    }
    r && (a = a || []).push("style", r);
    var c = a;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Tu = function (e, t, r, s) {
  r !== s && (t.flags |= 4);
};
function Br(e, t) {
  if (!q)
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
function fe(e) {
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
function um(e, t, r) {
  var s = t.pendingProps;
  switch ((Ga(t), t.tag)) {
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
      return fe(t), null;
    case 1:
      return Ne(t.type) && ys(), fe(t), null;
    case 3:
      return (
        (s = t.stateNode),
        _r(),
        Q(je),
        Q(pe),
        ni(),
        s.pendingContext &&
          ((s.context = s.pendingContext), (s.pendingContext = null)),
        (e === null || e.child === null) &&
          (Vn(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ge !== null && (va(Ge), (Ge = null)))),
        da(e, t),
        fe(t),
        null
      );
    case 5:
      ri(t);
      var l = Wt(yn.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        Eu(e, t, r, s, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!s) {
          if (t.stateNode === null) throw Error(_(166));
          return fe(t), null;
        }
        if (((e = Wt(rt.current)), Vn(t))) {
          (s = t.stateNode), (r = t.type);
          var a = t.memoizedProps;
          switch (((s[et] = t), (s[gn] = a), (e = (t.mode & 1) !== 0), r)) {
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
              _i(s, a), W("invalid", s);
              break;
            case "select":
              (s._wrapperState = { wasMultiple: !!a.multiple }),
                W("invalid", s);
              break;
            case "textarea":
              Ti(s, a), W("invalid", s);
          }
          Fl(r, a), (l = null);
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
                : ln.hasOwnProperty(i) &&
                  o != null &&
                  i === "onScroll" &&
                  W("scroll", s);
            }
          switch (r) {
            case "input":
              On(s), Ei(s, a, !0);
              break;
            case "textarea":
              On(s), zi(s);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (s.onclick = xs);
          }
          (s = l), (t.updateQueue = s), s !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = sc(r)),
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
            (e[et] = t),
            (e[gn] = s),
            _u(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Al(r, s)), r)) {
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
                _i(e, s), (l = Ml(e, s)), W("invalid", e);
                break;
              case "option":
                l = s;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!s.multiple }),
                  (l = X({}, s, { value: void 0 })),
                  W("invalid", e);
                break;
              case "textarea":
                Ti(e, s), (l = Rl(e, s)), W("invalid", e);
                break;
              default:
                l = s;
            }
            Fl(r, l), (o = l);
            for (a in o)
              if (o.hasOwnProperty(a)) {
                var u = o[a];
                a === "style"
                  ? ic(e, u)
                  : a === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && lc(e, u))
                  : a === "children"
                  ? typeof u == "string"
                    ? (r !== "textarea" || u !== "") && an(e, u)
                    : typeof u == "number" && an(e, "" + u)
                  : a !== "suppressContentEditableWarning" &&
                    a !== "suppressHydrationWarning" &&
                    a !== "autoFocus" &&
                    (ln.hasOwnProperty(a)
                      ? u != null && a === "onScroll" && W("scroll", e)
                      : u != null && Ma(e, a, u, i));
              }
            switch (r) {
              case "input":
                On(e), Ei(e, s, !1);
                break;
              case "textarea":
                On(e), zi(e);
                break;
              case "option":
                s.value != null && e.setAttribute("value", "" + Ot(s.value));
                break;
              case "select":
                (e.multiple = !!s.multiple),
                  (a = s.value),
                  a != null
                    ? xr(e, !!s.multiple, a, !1)
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
      return fe(t), null;
    case 6:
      if (e && t.stateNode != null) Tu(e, t, e.memoizedProps, s);
      else {
        if (typeof s != "string" && t.stateNode === null) throw Error(_(166));
        if (((r = Wt(yn.current)), Wt(rt.current), Vn(t))) {
          if (
            ((s = t.stateNode),
            (r = t.memoizedProps),
            (s[et] = t),
            (a = s.nodeValue !== r) && ((e = ze), e !== null))
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
            (s[et] = t),
            (t.stateNode = s);
      }
      return fe(t), null;
    case 13:
      if (
        (Q(G),
        (s = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (q && Te !== null && t.mode & 1 && !(t.flags & 128))
          Gc(), Cr(), (t.flags |= 98560), (a = !1);
        else if (((a = Vn(t)), s !== null && s.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(_(318));
            if (
              ((a = t.memoizedState),
              (a = a !== null ? a.dehydrated : null),
              !a)
            )
              throw Error(_(317));
            a[et] = t;
          } else
            Cr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          fe(t), (a = !1);
        } else Ge !== null && (va(Ge), (Ge = null)), (a = !0);
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((s = s !== null),
          s !== (e !== null && e.memoizedState !== null) &&
            s &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || G.current & 1 ? se === 0 && (se = 3) : hi())),
          t.updateQueue !== null && (t.flags |= 4),
          fe(t),
          null);
    case 4:
      return (
        _r(), da(e, t), e === null && pn(t.stateNode.containerInfo), fe(t), null
      );
    case 10:
      return Za(t.type._context), fe(t), null;
    case 17:
      return Ne(t.type) && ys(), fe(t), null;
    case 19:
      if ((Q(G), (a = t.memoizedState), a === null)) return fe(t), null;
      if (((s = (t.flags & 128) !== 0), (i = a.rendering), i === null))
        if (s) Br(a, !1);
        else {
          if (se !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Ss(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Br(a, !1),
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
                return V(G, (G.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          a.tail !== null &&
            te() > Tr &&
            ((t.flags |= 128), (s = !0), Br(a, !1), (t.lanes = 4194304));
        }
      else {
        if (!s)
          if (((e = Ss(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (s = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              Br(a, !0),
              a.tail === null && a.tailMode === "hidden" && !i.alternate && !q)
            )
              return fe(t), null;
          } else
            2 * te() - a.renderingStartTime > Tr &&
              r !== 1073741824 &&
              ((t.flags |= 128), (s = !0), Br(a, !1), (t.lanes = 4194304));
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
          (a.renderingStartTime = te()),
          (t.sibling = null),
          (r = G.current),
          V(G, s ? (r & 1) | 2 : r & 1),
          t)
        : (fe(t), null);
    case 22:
    case 23:
      return (
        pi(),
        (s = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== s && (t.flags |= 8192),
        s && t.mode & 1
          ? _e & 1073741824 && (fe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : fe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(_(156, t.tag));
}
function dm(e, t) {
  switch ((Ga(t), t.tag)) {
    case 1:
      return (
        Ne(t.type) && ys(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        _r(),
        Q(je),
        Q(pe),
        ni(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ri(t), null;
    case 13:
      if ((Q(G), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(_(340));
        Cr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Q(G), null;
    case 4:
      return _r(), null;
    case 10:
      return Za(t.type._context), null;
    case 22:
    case 23:
      return pi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var qn = !1,
  me = !1,
  fm = typeof WeakSet == "function" ? WeakSet : Set,
  P = null;
function hr(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (s) {
        J(e, t, s);
      }
    else r.current = null;
}
function fa(e, t, r) {
  try {
    r();
  } catch (s) {
    J(e, t, s);
  }
}
var jo = !1;
function mm(e, t) {
  if (((Yl = ps), (e = Oc()), Qa(e))) {
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
            u = -1,
            c = 0,
            m = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var x;
              f !== r || (l !== 0 && f.nodeType !== 3) || (o = i + l),
                f !== a || (s !== 0 && f.nodeType !== 3) || (u = i + s),
                f.nodeType === 3 && (i += f.nodeValue.length),
                (x = f.firstChild) !== null;

            )
              (d = f), (f = x);
            for (;;) {
              if (f === e) break t;
              if (
                (d === r && ++c === l && (o = i),
                d === a && ++m === s && (u = i),
                (x = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = x;
          }
          r = o === -1 || u === -1 ? null : { start: o, end: u };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (Kl = { focusedElem: e, selectionRange: r }, ps = !1, P = t; P !== null; )
    if (((t = P), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (P = e);
    else
      for (; P !== null; ) {
        t = P;
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
                  var y = v.memoizedProps,
                    I = v.memoizedState,
                    g = t.stateNode,
                    p = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Qe(t.type, y),
                      I
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
                throw Error(_(163));
            }
        } catch (j) {
          J(t, t.return, j);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (P = e);
          break;
        }
        P = t.return;
      }
  return (v = jo), (jo = !1), v;
}
function tn(e, t, r) {
  var s = t.updateQueue;
  if (((s = s !== null ? s.lastEffect : null), s !== null)) {
    var l = (s = s.next);
    do {
      if ((l.tag & e) === e) {
        var a = l.destroy;
        (l.destroy = void 0), a !== void 0 && fa(t, r, a);
      }
      l = l.next;
    } while (l !== s);
  }
}
function Hs(e, t) {
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
function zu(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), zu(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[et], delete t[gn], delete t[Jl], delete t[Yf], delete t[Kf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Iu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function No(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Iu(e.return)) return null;
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
function pa(e, t, r) {
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
    for (pa(e, t, r), e = e.sibling; e !== null; ) pa(e, t, r), (e = e.sibling);
}
function ha(e, t, r) {
  var s = e.tag;
  if (s === 5 || s === 6)
    (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (s !== 4 && ((e = e.child), e !== null))
    for (ha(e, t, r), e = e.sibling; e !== null; ) ha(e, t, r), (e = e.sibling);
}
var ie = null,
  qe = !1;
function vt(e, t, r) {
  for (r = r.child; r !== null; ) Mu(e, t, r), (r = r.sibling);
}
function Mu(e, t, r) {
  if (tt && typeof tt.onCommitFiberUnmount == "function")
    try {
      tt.onCommitFiberUnmount(Ps, r);
    } catch {}
  switch (r.tag) {
    case 5:
      me || hr(r, t);
    case 6:
      var s = ie,
        l = qe;
      (ie = null),
        vt(e, t, r),
        (ie = s),
        (qe = l),
        ie !== null &&
          (qe
            ? ((e = ie),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : ie.removeChild(r.stateNode));
      break;
    case 18:
      ie !== null &&
        (qe
          ? ((e = ie),
            (r = r.stateNode),
            e.nodeType === 8
              ? pl(e.parentNode, r)
              : e.nodeType === 1 && pl(e, r),
            dn(e))
          : pl(ie, r.stateNode));
      break;
    case 4:
      (s = ie),
        (l = qe),
        (ie = r.stateNode.containerInfo),
        (qe = !0),
        vt(e, t, r),
        (ie = s),
        (qe = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !me &&
        ((s = r.updateQueue), s !== null && ((s = s.lastEffect), s !== null))
      ) {
        l = s = s.next;
        do {
          var a = l,
            i = a.destroy;
          (a = a.tag),
            i !== void 0 && (a & 2 || a & 4) && fa(r, t, i),
            (l = l.next);
        } while (l !== s);
      }
      vt(e, t, r);
      break;
    case 1:
      if (
        !me &&
        (hr(r, t),
        (s = r.stateNode),
        typeof s.componentWillUnmount == "function")
      )
        try {
          (s.props = r.memoizedProps),
            (s.state = r.memoizedState),
            s.componentWillUnmount();
        } catch (o) {
          J(r, t, o);
        }
      vt(e, t, r);
      break;
    case 21:
      vt(e, t, r);
      break;
    case 22:
      r.mode & 1
        ? ((me = (s = me) || r.memoizedState !== null), vt(e, t, r), (me = s))
        : vt(e, t, r);
      break;
    default:
      vt(e, t, r);
  }
}
function bo(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new fm()),
      t.forEach(function (s) {
        var l = Nm.bind(null, e, s);
        r.has(s) || (r.add(s), s.then(l, l));
      });
  }
}
function We(e, t) {
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
              (ie = o.stateNode), (qe = !1);
              break e;
            case 3:
              (ie = o.stateNode.containerInfo), (qe = !0);
              break e;
            case 4:
              (ie = o.stateNode.containerInfo), (qe = !0);
              break e;
          }
          o = o.return;
        }
        if (ie === null) throw Error(_(160));
        Mu(a, i, l), (ie = null), (qe = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (c) {
        J(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Pu(t, e), (t = t.sibling);
}
function Pu(e, t) {
  var r = e.alternate,
    s = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((We(t, e), Ze(e), s & 4)) {
        try {
          tn(3, e, e.return), Hs(3, e);
        } catch (y) {
          J(e, e.return, y);
        }
        try {
          tn(5, e, e.return);
        } catch (y) {
          J(e, e.return, y);
        }
      }
      break;
    case 1:
      We(t, e), Ze(e), s & 512 && r !== null && hr(r, r.return);
      break;
    case 5:
      if (
        (We(t, e),
        Ze(e),
        s & 512 && r !== null && hr(r, r.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          an(l, "");
        } catch (y) {
          J(e, e.return, y);
        }
      }
      if (s & 4 && ((l = e.stateNode), l != null)) {
        var a = e.memoizedProps,
          i = r !== null ? r.memoizedProps : a,
          o = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            o === "input" && a.type === "radio" && a.name != null && rc(l, a),
              Al(o, i);
            var c = Al(o, a);
            for (i = 0; i < u.length; i += 2) {
              var m = u[i],
                f = u[i + 1];
              m === "style"
                ? ic(l, f)
                : m === "dangerouslySetInnerHTML"
                ? lc(l, f)
                : m === "children"
                ? an(l, f)
                : Ma(l, m, f, c);
            }
            switch (o) {
              case "input":
                Pl(l, a);
                break;
              case "textarea":
                nc(l, a);
                break;
              case "select":
                var d = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!a.multiple;
                var x = a.value;
                x != null
                  ? xr(l, !!a.multiple, x, !1)
                  : d !== !!a.multiple &&
                    (a.defaultValue != null
                      ? xr(l, !!a.multiple, a.defaultValue, !0)
                      : xr(l, !!a.multiple, a.multiple ? [] : "", !1));
            }
            l[gn] = a;
          } catch (y) {
            J(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((We(t, e), Ze(e), s & 4)) {
        if (e.stateNode === null) throw Error(_(162));
        (l = e.stateNode), (a = e.memoizedProps);
        try {
          l.nodeValue = a;
        } catch (y) {
          J(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (We(t, e), Ze(e), s & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          dn(t.containerInfo);
        } catch (y) {
          J(e, e.return, y);
        }
      break;
    case 4:
      We(t, e), Ze(e);
      break;
    case 13:
      We(t, e),
        Ze(e),
        (l = e.child),
        l.flags & 8192 &&
          ((a = l.memoizedState !== null),
          (l.stateNode.isHidden = a),
          !a ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (fi = te())),
        s & 4 && bo(e);
      break;
    case 22:
      if (
        ((m = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((me = (c = me) || m), We(t, e), (me = c)) : We(t, e),
        Ze(e),
        s & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !m && e.mode & 1)
        )
          for (P = e, m = e.child; m !== null; ) {
            for (f = P = m; P !== null; ) {
              switch (((d = P), (x = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  tn(4, d, d.return);
                  break;
                case 1:
                  hr(d, d.return);
                  var v = d.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (s = d), (r = d.return);
                    try {
                      (t = s),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (y) {
                      J(s, r, y);
                    }
                  }
                  break;
                case 5:
                  hr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    So(f);
                    continue;
                  }
              }
              x !== null ? ((x.return = d), (P = x)) : So(f);
            }
            m = m.sibling;
          }
        e: for (m = null, f = e; ; ) {
          if (f.tag === 5) {
            if (m === null) {
              m = f;
              try {
                (l = f.stateNode),
                  c
                    ? ((a = l.style),
                      typeof a.setProperty == "function"
                        ? a.setProperty("display", "none", "important")
                        : (a.display = "none"))
                    : ((o = f.stateNode),
                      (u = f.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (o.style.display = ac("display", i)));
              } catch (y) {
                J(e, e.return, y);
              }
            }
          } else if (f.tag === 6) {
            if (m === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (y) {
                J(e, e.return, y);
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
            m === f && (m = null), (f = f.return);
          }
          m === f && (m = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      We(t, e), Ze(e), s & 4 && bo(e);
      break;
    case 21:
      break;
    default:
      We(t, e), Ze(e);
  }
}
function Ze(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (Iu(r)) {
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
          var a = No(e);
          ha(e, a, l);
          break;
        case 3:
        case 4:
          var i = s.stateNode.containerInfo,
            o = No(e);
          pa(e, o, i);
          break;
        default:
          throw Error(_(161));
      }
    } catch (u) {
      J(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function pm(e, t, r) {
  (P = e), Ou(e);
}
function Ou(e, t, r) {
  for (var s = (e.mode & 1) !== 0; P !== null; ) {
    var l = P,
      a = l.child;
    if (l.tag === 22 && s) {
      var i = l.memoizedState !== null || qn;
      if (!i) {
        var o = l.alternate,
          u = (o !== null && o.memoizedState !== null) || me;
        o = qn;
        var c = me;
        if (((qn = i), (me = u) && !c))
          for (P = l; P !== null; )
            (i = P),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Co(l)
                : u !== null
                ? ((u.return = i), (P = u))
                : Co(l);
        for (; a !== null; ) (P = a), Ou(a), (a = a.sibling);
        (P = l), (qn = o), (me = c);
      }
      ko(e);
    } else
      l.subtreeFlags & 8772 && a !== null ? ((a.return = l), (P = a)) : ko(e);
  }
}
function ko(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              me || Hs(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !me)
                if (r === null) s.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? r.memoizedProps
                      : Qe(t.type, r.memoizedProps);
                  s.componentDidUpdate(
                    l,
                    r.memoizedState,
                    s.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var a = t.updateQueue;
              a !== null && io(t, a, s);
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
                io(t, i, r);
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
                  var m = c.memoizedState;
                  if (m !== null) {
                    var f = m.dehydrated;
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
        me || (t.flags & 512 && ma(t));
      } catch (d) {
        J(t, t.return, d);
      }
    }
    if (t === e) {
      P = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      (r.return = t.return), (P = r);
      break;
    }
    P = t.return;
  }
}
function So(e) {
  for (; P !== null; ) {
    var t = P;
    if (t === e) {
      P = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      (r.return = t.return), (P = r);
      break;
    }
    P = t.return;
  }
}
function Co(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            Hs(4, t);
          } catch (u) {
            J(t, r, u);
          }
          break;
        case 1:
          var s = t.stateNode;
          if (typeof s.componentDidMount == "function") {
            var l = t.return;
            try {
              s.componentDidMount();
            } catch (u) {
              J(t, l, u);
            }
          }
          var a = t.return;
          try {
            ma(t);
          } catch (u) {
            J(t, a, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ma(t);
          } catch (u) {
            J(t, i, u);
          }
      }
    } catch (u) {
      J(t, t.return, u);
    }
    if (t === e) {
      P = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      (o.return = t.return), (P = o);
      break;
    }
    P = t.return;
  }
}
var hm = Math.ceil,
  _s = xt.ReactCurrentDispatcher,
  ui = xt.ReactCurrentOwner,
  Ae = xt.ReactCurrentBatchConfig,
  $ = 0,
  ae = null,
  re = null,
  oe = 0,
  _e = 0,
  gr = At(0),
  se = 0,
  Nn = null,
  er = 0,
  Bs = 0,
  di = 0,
  rn = null,
  ve = null,
  fi = 0,
  Tr = 1 / 0,
  st = null,
  Es = !1,
  ga = null,
  It = null,
  Gn = !1,
  Ct = null,
  Ts = 0,
  nn = 0,
  xa = null,
  as = -1,
  is = 0;
function ge() {
  return $ & 6 ? te() : as !== -1 ? as : (as = te());
}
function Mt(e) {
  return e.mode & 1
    ? $ & 2 && oe !== 0
      ? oe & -oe
      : Zf.transition !== null
      ? (is === 0 && (is = vc()), is)
      : ((e = B),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Cc(e.type))),
        e)
    : 1;
}
function Ke(e, t, r, s) {
  if (50 < nn) throw ((nn = 0), (xa = null), Error(_(185)));
  Cn(e, r, s),
    (!($ & 2) || e !== ae) &&
      (e === ae && (!($ & 2) && (Bs |= r), se === 4 && kt(e, oe)),
      be(e, s),
      r === 1 && $ === 0 && !(t.mode & 1) && ((Tr = te() + 500), As && $t()));
}
function be(e, t) {
  var r = e.callbackNode;
  Xd(e, t);
  var s = ms(e, e === ae ? oe : 0);
  if (s === 0)
    r !== null && Pi(r), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = s & -s), e.callbackPriority !== t)) {
    if ((r != null && Pi(r), t === 1))
      e.tag === 0 ? Xf(Do.bind(null, e)) : Wc(Do.bind(null, e)),
        qf(function () {
          !($ & 6) && $t();
        }),
        (r = null);
    else {
      switch (wc(s)) {
        case 1:
          r = Fa;
          break;
        case 4:
          r = xc;
          break;
        case 16:
          r = fs;
          break;
        case 536870912:
          r = yc;
          break;
        default:
          r = fs;
      }
      r = Bu(r, Ru.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = r);
  }
}
function Ru(e, t) {
  if (((as = -1), (is = 0), $ & 6)) throw Error(_(327));
  var r = e.callbackNode;
  if (Nr() && e.callbackNode !== r) return null;
  var s = ms(e, e === ae ? oe : 0);
  if (s === 0) return null;
  if (s & 30 || s & e.expiredLanes || t) t = zs(e, s);
  else {
    t = s;
    var l = $;
    $ |= 2;
    var a = Fu();
    (ae !== e || oe !== t) && ((st = null), (Tr = te() + 500), qt(e, t));
    do
      try {
        ym();
        break;
      } catch (o) {
        Lu(e, o);
      }
    while (!0);
    Xa(),
      (_s.current = a),
      ($ = l),
      re !== null ? (t = 0) : ((ae = null), (oe = 0), (t = se));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Vl(e)), l !== 0 && ((s = l), (t = ya(e, l)))), t === 1)
    )
      throw ((r = Nn), qt(e, 0), kt(e, s), be(e, te()), r);
    if (t === 6) kt(e, s);
    else {
      if (
        ((l = e.current.alternate),
        !(s & 30) &&
          !gm(l) &&
          ((t = zs(e, s)),
          t === 2 && ((a = Vl(e)), a !== 0 && ((s = a), (t = ya(e, a)))),
          t === 1))
      )
        throw ((r = Nn), qt(e, 0), kt(e, s), be(e, te()), r);
      switch (((e.finishedWork = l), (e.finishedLanes = s), t)) {
        case 0:
        case 1:
          throw Error(_(345));
        case 2:
          Ht(e, ve, st);
          break;
        case 3:
          if (
            (kt(e, s), (s & 130023424) === s && ((t = fi + 500 - te()), 10 < t))
          ) {
            if (ms(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & s) !== s)) {
              ge(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Zl(Ht.bind(null, e, ve, st), t);
            break;
          }
          Ht(e, ve, st);
          break;
        case 4:
          if ((kt(e, s), (s & 4194240) === s)) break;
          for (t = e.eventTimes, l = -1; 0 < s; ) {
            var i = 31 - Ye(s);
            (a = 1 << i), (i = t[i]), i > l && (l = i), (s &= ~a);
          }
          if (
            ((s = l),
            (s = te() - s),
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
                : 1960 * hm(s / 1960)) - s),
            10 < s)
          ) {
            e.timeoutHandle = Zl(Ht.bind(null, e, ve, st), s);
            break;
          }
          Ht(e, ve, st);
          break;
        case 5:
          Ht(e, ve, st);
          break;
        default:
          throw Error(_(329));
      }
    }
  }
  return be(e, te()), e.callbackNode === r ? Ru.bind(null, e) : null;
}
function ya(e, t) {
  var r = rn;
  return (
    e.current.memoizedState.isDehydrated && (qt(e, t).flags |= 256),
    (e = zs(e, t)),
    e !== 2 && ((t = ve), (ve = r), t !== null && va(t)),
    e
  );
}
function va(e) {
  ve === null ? (ve = e) : ve.push.apply(ve, e);
}
function gm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var s = 0; s < r.length; s++) {
          var l = r[s],
            a = l.getSnapshot;
          l = l.value;
          try {
            if (!Xe(a(), l)) return !1;
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
    t &= ~di,
      t &= ~Bs,
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
function Do(e) {
  if ($ & 6) throw Error(_(327));
  Nr();
  var t = ms(e, 0);
  if (!(t & 1)) return be(e, te()), null;
  var r = zs(e, t);
  if (e.tag !== 0 && r === 2) {
    var s = Vl(e);
    s !== 0 && ((t = s), (r = ya(e, s)));
  }
  if (r === 1) throw ((r = Nn), qt(e, 0), kt(e, t), be(e, te()), r);
  if (r === 6) throw Error(_(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ht(e, ve, st),
    be(e, te()),
    null
  );
}
function mi(e, t) {
  var r = $;
  $ |= 1;
  try {
    return e(t);
  } finally {
    ($ = r), $ === 0 && ((Tr = te() + 500), As && $t());
  }
}
function tr(e) {
  Ct !== null && Ct.tag === 0 && !($ & 6) && Nr();
  var t = $;
  $ |= 1;
  var r = Ae.transition,
    s = B;
  try {
    if (((Ae.transition = null), (B = 1), e)) return e();
  } finally {
    (B = s), (Ae.transition = r), ($ = t), !($ & 6) && $t();
  }
}
function pi() {
  (_e = gr.current), Q(gr);
}
function qt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), Qf(r)), re !== null))
    for (r = re.return; r !== null; ) {
      var s = r;
      switch ((Ga(s), s.tag)) {
        case 1:
          (s = s.type.childContextTypes), s != null && ys();
          break;
        case 3:
          _r(), Q(je), Q(pe), ni();
          break;
        case 5:
          ri(s);
          break;
        case 4:
          _r();
          break;
        case 13:
          Q(G);
          break;
        case 19:
          Q(G);
          break;
        case 10:
          Za(s.type._context);
          break;
        case 22:
        case 23:
          pi();
      }
      r = r.return;
    }
  if (
    ((ae = e),
    (re = e = Pt(e.current, null)),
    (oe = _e = t),
    (se = 0),
    (Nn = null),
    (di = Bs = er = 0),
    (ve = rn = null),
    Vt !== null)
  ) {
    for (t = 0; t < Vt.length; t++)
      if (((r = Vt[t]), (s = r.interleaved), s !== null)) {
        r.interleaved = null;
        var l = s.next,
          a = r.pending;
        if (a !== null) {
          var i = a.next;
          (a.next = l), (s.next = i);
        }
        r.pending = s;
      }
    Vt = null;
  }
  return e;
}
function Lu(e, t) {
  do {
    var r = re;
    try {
      if ((Xa(), (ns.current = Ds), Cs)) {
        for (var s = K.memoizedState; s !== null; ) {
          var l = s.queue;
          l !== null && (l.pending = null), (s = s.next);
        }
        Cs = !1;
      }
      if (
        ((Jt = 0),
        (le = ne = K = null),
        (en = !1),
        (vn = 0),
        (ui.current = null),
        r === null || r.return === null)
      ) {
        (se = 1), (Nn = t), (re = null);
        break;
      }
      e: {
        var a = e,
          i = r.return,
          o = r,
          u = t;
        if (
          ((t = oe),
          (o.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            m = o,
            f = m.tag;
          if (!(m.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = m.alternate;
            d
              ? ((m.updateQueue = d.updateQueue),
                (m.memoizedState = d.memoizedState),
                (m.lanes = d.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var x = po(i);
          if (x !== null) {
            (x.flags &= -257),
              ho(x, i, o, a, t),
              x.mode & 1 && mo(a, c, t),
              (t = x),
              (u = c);
            var v = t.updateQueue;
            if (v === null) {
              var y = new Set();
              y.add(u), (t.updateQueue = y);
            } else v.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              mo(a, c, t), hi();
              break e;
            }
            u = Error(_(426));
          }
        } else if (q && o.mode & 1) {
          var I = po(i);
          if (I !== null) {
            !(I.flags & 65536) && (I.flags |= 256),
              ho(I, i, o, a, t),
              Ya(Er(u, o));
            break e;
          }
        }
        (a = u = Er(u, o)),
          se !== 4 && (se = 2),
          rn === null ? (rn = [a]) : rn.push(a),
          (a = i);
        do {
          switch (a.tag) {
            case 3:
              (a.flags |= 65536), (t &= -t), (a.lanes |= t);
              var g = wu(a, u, t);
              ao(a, g);
              break e;
            case 1:
              o = u;
              var p = a.type,
                h = a.stateNode;
              if (
                !(a.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (It === null || !It.has(h))))
              ) {
                (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                var j = ju(a, o, t);
                ao(a, j);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      $u(r);
    } catch (D) {
      (t = D), re === r && r !== null && (re = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function Fu() {
  var e = _s.current;
  return (_s.current = Ds), e === null ? Ds : e;
}
function hi() {
  (se === 0 || se === 3 || se === 2) && (se = 4),
    ae === null || (!(er & 268435455) && !(Bs & 268435455)) || kt(ae, oe);
}
function zs(e, t) {
  var r = $;
  $ |= 2;
  var s = Fu();
  (ae !== e || oe !== t) && ((st = null), qt(e, t));
  do
    try {
      xm();
      break;
    } catch (l) {
      Lu(e, l);
    }
  while (!0);
  if ((Xa(), ($ = r), (_s.current = s), re !== null)) throw Error(_(261));
  return (ae = null), (oe = 0), se;
}
function xm() {
  for (; re !== null; ) Au(re);
}
function ym() {
  for (; re !== null && !Hd(); ) Au(re);
}
function Au(e) {
  var t = Hu(e.alternate, e, _e);
  (e.memoizedProps = e.pendingProps),
    t === null ? $u(e) : (re = t),
    (ui.current = null);
}
function $u(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((r = dm(r, t)), r !== null)) {
        (r.flags &= 32767), (re = r);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (se = 6), (re = null);
        return;
      }
    } else if (((r = um(r, t, _e)), r !== null)) {
      re = r;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      re = t;
      return;
    }
    re = t = e;
  } while (t !== null);
  se === 0 && (se = 5);
}
function Ht(e, t, r) {
  var s = B,
    l = Ae.transition;
  try {
    (Ae.transition = null), (B = 1), vm(e, t, r, s);
  } finally {
    (Ae.transition = l), (B = s);
  }
  return null;
}
function vm(e, t, r, s) {
  do Nr();
  while (Ct !== null);
  if ($ & 6) throw Error(_(327));
  r = e.finishedWork;
  var l = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(_(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var a = r.lanes | r.childLanes;
  if (
    (Zd(e, a),
    e === ae && ((re = ae = null), (oe = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      Gn ||
      ((Gn = !0),
      Bu(fs, function () {
        return Nr(), null;
      })),
    (a = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || a)
  ) {
    (a = Ae.transition), (Ae.transition = null);
    var i = B;
    B = 1;
    var o = $;
    ($ |= 4),
      (ui.current = null),
      mm(e, r),
      Pu(r, e),
      Af(Kl),
      (ps = !!Yl),
      (Kl = Yl = null),
      (e.current = r),
      pm(r),
      Bd(),
      ($ = o),
      (B = i),
      (Ae.transition = a);
  } else e.current = r;
  if (
    (Gn && ((Gn = !1), (Ct = e), (Ts = l)),
    (a = e.pendingLanes),
    a === 0 && (It = null),
    Qd(r.stateNode),
    be(e, te()),
    t !== null)
  )
    for (s = e.onRecoverableError, r = 0; r < t.length; r++)
      (l = t[r]), s(l.value, { componentStack: l.stack, digest: l.digest });
  if (Es) throw ((Es = !1), (e = ga), (ga = null), e);
  return (
    Ts & 1 && e.tag !== 0 && Nr(),
    (a = e.pendingLanes),
    a & 1 ? (e === xa ? nn++ : ((nn = 0), (xa = e))) : (nn = 0),
    $t(),
    null
  );
}
function Nr() {
  if (Ct !== null) {
    var e = wc(Ts),
      t = Ae.transition,
      r = B;
    try {
      if (((Ae.transition = null), (B = 16 > e ? 16 : e), Ct === null))
        var s = !1;
      else {
        if (((e = Ct), (Ct = null), (Ts = 0), $ & 6)) throw Error(_(331));
        var l = $;
        for ($ |= 4, P = e.current; P !== null; ) {
          var a = P,
            i = a.child;
          if (P.flags & 16) {
            var o = a.deletions;
            if (o !== null) {
              for (var u = 0; u < o.length; u++) {
                var c = o[u];
                for (P = c; P !== null; ) {
                  var m = P;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      tn(8, m, a);
                  }
                  var f = m.child;
                  if (f !== null) (f.return = m), (P = f);
                  else
                    for (; P !== null; ) {
                      m = P;
                      var d = m.sibling,
                        x = m.return;
                      if ((zu(m), m === c)) {
                        P = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = x), (P = d);
                        break;
                      }
                      P = x;
                    }
                }
              }
              var v = a.alternate;
              if (v !== null) {
                var y = v.child;
                if (y !== null) {
                  v.child = null;
                  do {
                    var I = y.sibling;
                    (y.sibling = null), (y = I);
                  } while (y !== null);
                }
              }
              P = a;
            }
          }
          if (a.subtreeFlags & 2064 && i !== null) (i.return = a), (P = i);
          else
            e: for (; P !== null; ) {
              if (((a = P), a.flags & 2048))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    tn(9, a, a.return);
                }
              var g = a.sibling;
              if (g !== null) {
                (g.return = a.return), (P = g);
                break e;
              }
              P = a.return;
            }
        }
        var p = e.current;
        for (P = p; P !== null; ) {
          i = P;
          var h = i.child;
          if (i.subtreeFlags & 2064 && h !== null) (h.return = i), (P = h);
          else
            e: for (i = p; P !== null; ) {
              if (((o = P), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hs(9, o);
                  }
                } catch (D) {
                  J(o, o.return, D);
                }
              if (o === i) {
                P = null;
                break e;
              }
              var j = o.sibling;
              if (j !== null) {
                (j.return = o.return), (P = j);
                break e;
              }
              P = o.return;
            }
        }
        if (
          (($ = l), $t(), tt && typeof tt.onPostCommitFiberRoot == "function")
        )
          try {
            tt.onPostCommitFiberRoot(Ps, e);
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
function _o(e, t, r) {
  (t = Er(r, t)),
    (t = wu(e, t, 1)),
    (e = zt(e, t, 1)),
    (t = ge()),
    e !== null && (Cn(e, 1, t), be(e, t));
}
function J(e, t, r) {
  if (e.tag === 3) _o(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        _o(t, e, r);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof s.componentDidCatch == "function" &&
            (It === null || !It.has(s)))
        ) {
          (e = Er(r, e)),
            (e = ju(t, e, 1)),
            (t = zt(t, e, 1)),
            (e = ge()),
            t !== null && (Cn(t, 1, e), be(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function wm(e, t, r) {
  var s = e.pingCache;
  s !== null && s.delete(t),
    (t = ge()),
    (e.pingedLanes |= e.suspendedLanes & r),
    ae === e &&
      (oe & r) === r &&
      (se === 4 || (se === 3 && (oe & 130023424) === oe && 500 > te() - fi)
        ? qt(e, 0)
        : (di |= r)),
    be(e, t);
}
function Uu(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Fn), (Fn <<= 1), !(Fn & 130023424) && (Fn = 4194304))
      : (t = 1));
  var r = ge();
  (e = mt(e, t)), e !== null && (Cn(e, t, r), be(e, r));
}
function jm(e) {
  var t = e.memoizedState,
    r = 0;
  t !== null && (r = t.retryLane), Uu(e, r);
}
function Nm(e, t) {
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
  s !== null && s.delete(t), Uu(e, r);
}
var Hu;
Hu = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || je.current) we = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return (we = !1), cm(e, t, r);
      we = !!(e.flags & 131072);
    }
  else (we = !1), q && t.flags & 1048576 && Qc(t, js, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var s = t.type;
      ls(e, t), (e = t.pendingProps);
      var l = Sr(t, pe.current);
      jr(t, r), (l = li(null, t, s, e, l, r));
      var a = ai();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ne(s) ? ((a = !0), vs(t)) : (a = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            ei(t),
            (l.updater = Us),
            (t.stateNode = l),
            (l._reactInternals = t),
            la(t, s, e, r),
            (t = oa(null, t, s, !0, a, r)))
          : ((t.tag = 0), q && a && qa(t), he(null, t, l, r), (t = t.child)),
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
          (l = t.tag = km(s)),
          (e = Qe(s, e)),
          l)
        ) {
          case 0:
            t = ia(null, t, s, e, r);
            break e;
          case 1:
            t = yo(null, t, s, e, r);
            break e;
          case 11:
            t = go(null, t, s, e, r);
            break e;
          case 14:
            t = xo(null, t, s, Qe(s.type, e), r);
            break e;
        }
        throw Error(_(306, s, ""));
      }
      return t;
    case 0:
      return (
        (s = t.type),
        (l = t.pendingProps),
        (l = t.elementType === s ? l : Qe(s, l)),
        ia(e, t, s, l, r)
      );
    case 1:
      return (
        (s = t.type),
        (l = t.pendingProps),
        (l = t.elementType === s ? l : Qe(s, l)),
        yo(e, t, s, l, r)
      );
    case 3:
      e: {
        if ((Su(t), e === null)) throw Error(_(387));
        (s = t.pendingProps),
          (a = t.memoizedState),
          (l = a.element),
          Zc(e, t),
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
            (l = Er(Error(_(423)), t)), (t = vo(e, t, s, r, l));
            break e;
          } else if (s !== l) {
            (l = Er(Error(_(424)), t)), (t = vo(e, t, s, r, l));
            break e;
          } else
            for (
              Te = Tt(t.stateNode.containerInfo.firstChild),
                ze = t,
                q = !0,
                Ge = null,
                r = Kc(t, null, s, r),
                t.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((Cr(), s === l)) {
            t = pt(e, t, r);
            break e;
          }
          he(e, t, s, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Jc(t),
        e === null && ra(t),
        (s = t.type),
        (l = t.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Xl(s, l) ? (i = null) : a !== null && Xl(s, a) && (t.flags |= 32),
        ku(e, t),
        he(e, t, i, r),
        t.child
      );
    case 6:
      return e === null && ra(t), null;
    case 13:
      return Cu(e, t, r);
    case 4:
      return (
        ti(t, t.stateNode.containerInfo),
        (s = t.pendingProps),
        e === null ? (t.child = Dr(t, null, s, r)) : he(e, t, s, r),
        t.child
      );
    case 11:
      return (
        (s = t.type),
        (l = t.pendingProps),
        (l = t.elementType === s ? l : Qe(s, l)),
        go(e, t, s, l, r)
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
          (a = t.memoizedProps),
          (i = l.value),
          V(Ns, s._currentValue),
          (s._currentValue = i),
          a !== null)
        )
          if (Xe(a.value, i)) {
            if (a.children === l.children && !je.current) {
              t = pt(e, t, r);
              break e;
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null; ) {
              var o = a.dependencies;
              if (o !== null) {
                i = a.child;
                for (var u = o.firstContext; u !== null; ) {
                  if (u.context === s) {
                    if (a.tag === 1) {
                      (u = ot(-1, r & -r)), (u.tag = 2);
                      var c = a.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var m = c.pending;
                        m === null
                          ? (u.next = u)
                          : ((u.next = m.next), (m.next = u)),
                          (c.pending = u);
                      }
                    }
                    (a.lanes |= r),
                      (u = a.alternate),
                      u !== null && (u.lanes |= r),
                      na(a.return, r, t),
                      (o.lanes |= r);
                    break;
                  }
                  u = u.next;
                }
              } else if (a.tag === 10) i = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (((i = a.return), i === null)) throw Error(_(341));
                (i.lanes |= r),
                  (o = i.alternate),
                  o !== null && (o.lanes |= r),
                  na(i, r, t),
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
        he(e, t, l.children, r), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (s = t.pendingProps.children),
        jr(t, r),
        (l = $e(l)),
        (s = s(l)),
        (t.flags |= 1),
        he(e, t, s, r),
        t.child
      );
    case 14:
      return (
        (s = t.type),
        (l = Qe(s, t.pendingProps)),
        (l = Qe(s.type, l)),
        xo(e, t, s, l, r)
      );
    case 15:
      return Nu(e, t, t.type, t.pendingProps, r);
    case 17:
      return (
        (s = t.type),
        (l = t.pendingProps),
        (l = t.elementType === s ? l : Qe(s, l)),
        ls(e, t),
        (t.tag = 1),
        Ne(s) ? ((e = !0), vs(t)) : (e = !1),
        jr(t, r),
        vu(t, s, l),
        la(t, s, l, r),
        oa(null, t, s, !0, e, r)
      );
    case 19:
      return Du(e, t, r);
    case 22:
      return bu(e, t, r);
  }
  throw Error(_(156, t.tag));
};
function Bu(e, t) {
  return gc(e, t);
}
function bm(e, t, r, s) {
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
  return new bm(e, t, r, s);
}
function gi(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function km(e) {
  if (typeof e == "function") return gi(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Oa)) return 11;
    if (e === Ra) return 14;
  }
  return 2;
}
function Pt(e, t) {
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
function os(e, t, r, s, l, a) {
  var i = 2;
  if (((s = e), typeof e == "function")) gi(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case ar:
        return Gt(r.children, l, a, t);
      case Pa:
        (i = 8), (l |= 8);
        break;
      case El:
        return (
          (e = Fe(12, r, t, l | 2)), (e.elementType = El), (e.lanes = a), e
        );
      case Tl:
        return (e = Fe(13, r, t, l)), (e.elementType = Tl), (e.lanes = a), e;
      case zl:
        return (e = Fe(19, r, t, l)), (e.elementType = zl), (e.lanes = a), e;
      case Jo:
        return Vs(r, l, a, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Xo:
              i = 10;
              break e;
            case Zo:
              i = 9;
              break e;
            case Oa:
              i = 11;
              break e;
            case Ra:
              i = 14;
              break e;
            case jt:
              (i = 16), (s = null);
              break e;
          }
        throw Error(_(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Fe(i, r, t, l)), (t.elementType = e), (t.type = s), (t.lanes = a), t
  );
}
function Gt(e, t, r, s) {
  return (e = Fe(7, e, s, t)), (e.lanes = r), e;
}
function Vs(e, t, r, s) {
  return (
    (e = Fe(22, e, s, t)),
    (e.elementType = Jo),
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
function Sm(e, t, r, s, l) {
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
function xi(e, t, r, s, l, a, i, o, u) {
  return (
    (e = new Sm(e, t, r, o, u)),
    t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
    (a = Fe(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: s,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ei(a),
    e
  );
}
function Cm(e, t, r) {
  var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: lr,
    key: s == null ? null : "" + s,
    children: e,
    containerInfo: t,
    implementation: r,
  };
}
function Vu(e) {
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
          if (Ne(t.type)) {
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
    if (Ne(r)) return Vc(e, r, t);
  }
  return t;
}
function Wu(e, t, r, s, l, a, i, o, u) {
  return (
    (e = xi(r, s, !0, e, l, a, i, o, u)),
    (e.context = Vu(null)),
    (r = e.current),
    (s = ge()),
    (l = Mt(r)),
    (a = ot(s, l)),
    (a.callback = t ?? null),
    zt(r, a, l),
    (e.current.lanes = l),
    Cn(e, l, s),
    be(e, s),
    e
  );
}
function Ws(e, t, r, s) {
  var l = t.current,
    a = ge(),
    i = Mt(l);
  return (
    (r = Vu(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = ot(a, i)),
    (t.payload = { element: e }),
    (s = s === void 0 ? null : s),
    s !== null && (t.callback = s),
    (e = zt(l, t, i)),
    e !== null && (Ke(e, l, i, a), rs(e, l, i)),
    i
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
function Eo(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function yi(e, t) {
  Eo(e, t), (e = e.alternate) && Eo(e, t);
}
function Dm() {
  return null;
}
var Qu =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function vi(e) {
  this._internalRoot = e;
}
Qs.prototype.render = vi.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(_(409));
  Ws(e, t, null, null);
};
Qs.prototype.unmount = vi.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    tr(function () {
      Ws(null, e, null, null);
    }),
      (t[ft] = null);
  }
};
function Qs(e) {
  this._internalRoot = e;
}
Qs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = bc();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < bt.length && t !== 0 && t < bt[r].priority; r++);
    bt.splice(r, 0, e), r === 0 && Sc(e);
  }
};
function wi(e) {
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
function To() {}
function _m(e, t, r, s, l) {
  if (l) {
    if (typeof s == "function") {
      var a = s;
      s = function () {
        var c = Is(i);
        a.call(c);
      };
    }
    var i = Wu(t, s, e, 0, null, !1, !1, "", To);
    return (
      (e._reactRootContainer = i),
      (e[ft] = i.current),
      pn(e.nodeType === 8 ? e.parentNode : e),
      tr(),
      i
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
  var u = xi(e, 0, !1, null, null, !1, !1, "", To);
  return (
    (e._reactRootContainer = u),
    (e[ft] = u.current),
    pn(e.nodeType === 8 ? e.parentNode : e),
    tr(function () {
      Ws(t, u, r, s);
    }),
    u
  );
}
function Gs(e, t, r, s, l) {
  var a = r._reactRootContainer;
  if (a) {
    var i = a;
    if (typeof l == "function") {
      var o = l;
      l = function () {
        var u = Is(i);
        o.call(u);
      };
    }
    Ws(t, i, e, l);
  } else i = _m(r, t, e, l, s);
  return Is(i);
}
jc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = qr(t.pendingLanes);
        r !== 0 &&
          (Aa(t, r | 1), be(t, te()), !($ & 6) && ((Tr = te() + 500), $t()));
      }
      break;
    case 13:
      tr(function () {
        var s = mt(e, 1);
        if (s !== null) {
          var l = ge();
          Ke(s, e, 1, l);
        }
      }),
        yi(e, 1);
  }
};
$a = function (e) {
  if (e.tag === 13) {
    var t = mt(e, 134217728);
    if (t !== null) {
      var r = ge();
      Ke(t, e, 134217728, r);
    }
    yi(e, 134217728);
  }
};
Nc = function (e) {
  if (e.tag === 13) {
    var t = Mt(e),
      r = mt(e, t);
    if (r !== null) {
      var s = ge();
      Ke(r, e, t, s);
    }
    yi(e, t);
  }
};
bc = function () {
  return B;
};
kc = function (e, t) {
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
      if ((Pl(e, r), (t = r.name), r.type === "radio" && t != null)) {
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
            var l = Fs(s);
            if (!l) throw Error(_(90));
            tc(s), Pl(s, l);
          }
        }
      }
      break;
    case "textarea":
      nc(e, r);
      break;
    case "select":
      (t = r.value), t != null && xr(e, !!r.multiple, t, !1);
  }
};
uc = mi;
dc = tr;
var Em = { usingClientEntryPoint: !1, Events: [_n, ur, Fs, oc, cc, mi] },
  Vr = {
    findFiberByHostInstance: Bt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Tm = {
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
    currentDispatcherRef: xt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = pc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Vr.findFiberByHostInstance || Dm,
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
      (Ps = Yn.inject(Tm)), (tt = Yn);
    } catch {}
}
Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Em;
Me.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!wi(t)) throw Error(_(200));
  return Cm(e, t, null, r);
};
Me.createRoot = function (e, t) {
  if (!wi(e)) throw Error(_(299));
  var r = !1,
    s = "",
    l = Qu;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = xi(e, 1, !1, null, null, r, !1, s, l)),
    (e[ft] = t.current),
    pn(e.nodeType === 8 ? e.parentNode : e),
    new vi(t)
  );
};
Me.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(_(188))
      : ((e = Object.keys(e).join(",")), Error(_(268, e)));
  return (e = pc(t)), (e = e === null ? null : e.stateNode), e;
};
Me.flushSync = function (e) {
  return tr(e);
};
Me.hydrate = function (e, t, r) {
  if (!qs(t)) throw Error(_(200));
  return Gs(null, e, t, !0, r);
};
Me.hydrateRoot = function (e, t, r) {
  if (!wi(e)) throw Error(_(405));
  var s = (r != null && r.hydratedSources) || null,
    l = !1,
    a = "",
    i = Qu;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (l = !0),
      r.identifierPrefix !== void 0 && (a = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (i = r.onRecoverableError)),
    (t = Wu(t, null, e, 1, r ?? null, l, !1, a, i)),
    (e[ft] = t.current),
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
  return new Qs(t);
};
Me.render = function (e, t, r) {
  if (!qs(t)) throw Error(_(200));
  return Gs(null, e, t, !1, r);
};
Me.unmountComponentAtNode = function (e) {
  if (!qs(e)) throw Error(_(40));
  return e._reactRootContainer
    ? (tr(function () {
        Gs(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[ft] = null);
        });
      }),
      !0)
    : !1;
};
Me.unstable_batchedUpdates = mi;
Me.unstable_renderSubtreeIntoContainer = function (e, t, r, s) {
  if (!qs(r)) throw Error(_(200));
  if (e == null || e._reactInternals === void 0) throw Error(_(38));
  return Gs(e, t, r, !1, s);
};
Me.version = "18.3.1-next-f1338f8080-20240426";
function qu() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qu);
    } catch (e) {
      console.error(e);
    }
}
qu(), (qo.exports = Me);
var zm = qo.exports,
  Gu,
  zo = zm;
(Gu = zo.createRoot), zo.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Im = {
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
 */ const Mm = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  U = (e, t) => {
    const r = b.forwardRef(
      (
        {
          color: s = "currentColor",
          size: l = 24,
          strokeWidth: a = 2,
          absoluteStrokeWidth: i,
          className: o = "",
          children: u,
          ...c
        },
        m
      ) =>
        b.createElement(
          "svg",
          {
            ref: m,
            ...Im,
            width: l,
            height: l,
            stroke: s,
            strokeWidth: i ? (Number(a) * 24) / Number(l) : a,
            className: ["lucide", `lucide-${Mm(e)}`, o].join(" "),
            ...c,
          },
          [
            ...t.map(([f, d]) => b.createElement(f, d)),
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
 */ const Be = U("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wa = U("AlertTriangle", [
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
 */ const Yu = U("Archive", [
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
 */ const Ku = U("BellOff", [
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
 */ const Xu = U("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zu = U("Building2", [
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
 */ const Ju = U("Building", [
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
 */ const Ys = U("Calendar", [
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
 */ const Kn = U("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bn = U("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tn = U("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yt = U("FileText", [
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
 */ const Pm = U("Globe", [
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
 */ const ht = U("History", [
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
 */ const kl = U("Layers", [
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
 */ const Om = U("LayoutList", [
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
 */ const Rm = U("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ed = U("Maximize2", [
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
 */ const Lm = U("Maximize", [
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
 */ const sn = U("Megaphone", [
  ["path", { d: "m3 11 18-5v12L3 14v-3z", key: "n962bs" }],
  ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6", key: "1yl0tm" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fm = U("Move", [
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
 */ const ke = U("Package", [
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
 */ const gt = U("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const br = U("RefreshCw", [
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
 */ const kn = U("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zr = U("Settings", [
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
 */ const Am = U("SplitSquareHorizontal", [
  ["path", { d: "M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3", key: "lubmu8" }],
  ["path", { d: "M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3", key: "1ag34g" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ir = U("SquarePen", [
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
 */ const ct = U("Trash2", [
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
 */ const Kt = U("Truck", [
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
 */ const Ks = U("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $m = U("Volume2", [
  ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }],
  ["path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07", key: "ltjumu" }],
  ["path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14", key: "1kegas" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const He = U("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Um = {
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
  td = b.createContext(void 0),
  Hm = ({ children: e }) => {
    const [t, r] = b.useState("zh"),
      s = () => {
        r((a) => (a === "zh" ? "en" : "zh"));
      },
      l = (a, i) => {
        let o = Um[t][a] || a;
        return (
          i &&
            Object.entries(i).forEach(([u, c]) => {
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
    const e = b.useContext(td);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  };
let Qt = null;
const rd = async () => {
    if (Qt) return Qt;
    try {
      const e = await fetch("../config.txt");
      if (!e.ok) throw new Error("Failed to load configuration");
      return (Qt = await e.json()), Qt;
    } catch (e) {
      throw (console.error("Error loading config:", e), e);
    }
  },
  Bm = (e) => {
    if (!Qt) throw new Error("Configuration not loaded");
    return `${Qt.domain}${e}`;
  },
  Sl = () => Qt,
  ee = async (e, t = {}) => {
    let r;
    try {
      r = Bm(e);
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
    await ee("/api/session/login", { method: "POST", body: { Data: e } }),
  Wm = (e) => (
    sessionStorage.setItem("user_session", JSON.stringify(e)),
    sessionStorage.setItem("loggedGUID", e.GUID || ""),
    sessionStorage.setItem("loggedEmployer", e.Employer || ""),
    sessionStorage.setItem("loggedID", e.ID || ""),
    sessionStorage.setItem("loggedName", e.Name || ""),
    sessionStorage.setItem("loggedTime", e.loginTime || ""),
    sessionStorage.setItem("loggedLevel", e.level || ""),
    e
  ),
  Qm = () => {
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
  zn = () => {
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
  qm = () => !!zn(),
  Cl = () => {
    const { t: e } = Rr();
    return n.jsxs("button", {
      onClick: Qm,
      className:
        "inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      children: [n.jsx(Rm, { className: "h-4 w-4 mr-2" }), e("logout")],
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
  Gm = async () =>
    await ee("/api/controlpanel/get_by_startendtime_bbs", {
      method: "POST",
      body: {},
    }),
  Ym = (e) =>
    e.map((t, r) => ({
      id: t.GUID || `bulletin-${r}`,
      title: t.title || "無標題",
      content: t.content || "無內容",
      priority: t0(t.priority || "medium"),
      publishDate: e0(t.created_time) || new Date().toISOString(),
      author:
        `${t.creator_dept || ""} ${t.creator_name || ""}`.trim() ||
        "系統管理員",
    })),
  Km = async (e) => {
    await ee("/api/controlpanel/add", { method: "POST", body: { Data: e } });
  },
  Xm = async () =>
    await ee("/api/controlpanel/get_bbs", { method: "POST", body: {} }),
  Zm = async (e) => {
    await ee("/api/controlpanel/update", { method: "POST", body: { Data: e } });
  },
  Jm = async (e) => {
    await ee("/api/controlpanel/delete", {
      method: "POST",
      body: { Data: { GUID: e } },
    });
  },
  e0 = (e) => {
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
  t0 = (e) =>
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
    await ee("/api/med_page/get_med_cloud", { method: "POST", body: {} }),
  Lt = (e) => {
    const t = e.getFullYear(),
      r = String(e.getMonth() + 1).padStart(2, "0"),
      s = String(e.getDate()).padStart(2, "0"),
      l = String(e.getHours()).padStart(2, "0"),
      a = String(e.getMinutes()).padStart(2, "0"),
      i = String(e.getSeconds()).padStart(2, "0");
    return `${t}-${r}-${s} ${l}:${a}:${i}`;
  },
  r0 = async () => {
    const e = new Date(),
      t = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0),
      r = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59);
    return await ee("/api/drugStotreDistribution/get_by_addedTime", {
      method: "POST",
      body: { ValueAry: [Lt(t), Lt(r)] },
    });
  },
  n0 = async () => {
    const e = new Date(),
      t = new Date(e.getFullYear(), e.getMonth() - 1, e.getDate(), 0, 0, 0),
      r = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59);
    return await ee("/api/inspection/content_get_by_addTime", {
      method: "POST",
      body: { ValueAry: [Lt(t), Lt(r)] },
    });
  },
  s0 = async () => {
    const e = new Date(),
      t = new Date(e.getFullYear(), e.getMonth() - 1, e.getDate(), 0, 0, 0),
      r = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59);
    return await ee("/api/inspection/content_get_by_addTime", {
      method: "POST",
      body: { ValueAry: [Lt(t), Lt(r)] },
    });
  },
  l0 = async () =>
    await ee("/api/controlpanel/get_by_startendtime_MedNotice", {
      method: "POST",
      body: {},
    }),
  a0 = async () =>
    await ee("/api/controlpanel/get_MedNotice", { method: "POST", body: {} }),
  i0 = async (e) =>
    await ee("/api/controlpanel/add", { method: "POST", body: { Data: e } }),
  o0 = async (e) =>
    await ee("/api/controlpanel/update", { method: "POST", body: { Data: e } }),
  c0 = async (e) =>
    await ee("/api/controlpanel/delete", {
      method: "POST",
      body: { Data: { GUID: e } },
    }),
  u0 = async () =>
    await ee("/api/controlpanel/get_by_startendtime_out_of_stock", {
      method: "POST",
      body: {},
    }),
  d0 = async () =>
    await ee("/api/controlpanel/get_out_of_stock", {
      method: "POST",
      body: {},
    }),
  f0 = async (e) =>
    await ee("/api/controlpanel/add", { method: "POST", body: { Data: e } }),
  m0 = async (e) =>
    await ee("/api/controlpanel/update", { method: "POST", body: { Data: e } }),
  p0 = async (e) =>
    await ee("/api/controlpanel/delete", {
      method: "POST",
      body: { Data: { GUID: e } },
    }),
  h0 = (e) =>
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
  x0 = (e) => {
    const t = new Date(),
      r = new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0),
      s = new Date(t.getFullYear(), t.getMonth(), t.getDate(), 23, 59, 59);
    return e
      .map((l) => {
        const i = (l.Sub_content || [])
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
          quantity: i,
          supplier: l.BRD || "",
          priority: i > 0 ? "medium" : "low",
        };
      })
      .filter((l) => l.quantity > 0);
  },
  y0 = (e) =>
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
  v0 = async () =>
    await ee("/api/stock/get_stock_all_server", { method: "POST", body: {} }),
  w0 = (e) => {
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
          u = [],
          c = new Map();
        s.forEach((d) => {
          const x = d.serverName || "未知伺服器",
            v = d.qty || [],
            y = d.lot || [],
            I = d.expiry_date || [];
          i.push(...y), o.push(...I), u.push(...v);
          const g = v.reduce((h, j) => h + (Number(j) || 0), 0),
            p = c.get(x) || 0;
          c.set(x, p + g);
        });
        const m = u.reduce((d, x) => d + (Number(x) || 0), 0),
          f = Array.from(c.entries()).map(([d, x]) => ({
            serverName: d,
            qty: x,
          }));
        r.push({
          id: a.GUID || "",
          code: l,
          name: a.name || "",
          qty: u,
          lot: i,
          expiry_date: o,
          totalQuantity: m,
          batchCount: i.length,
          serverData: f,
        });
      }),
      r
    );
  },
  j0 = async () => {
    const e = new Date(),
      t = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0),
      r = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59);
    return await ee("/api/materialRequisition/get_by_requestTime", {
      method: "POST",
      body: { ValueAry: [Lt(t), Lt(r)] },
    });
  },
  N0 = (e) =>
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
  b0 = (e) =>
    e.map((t, r) => {
      var o, u;
      const s = (t.content || "").split(";"),
        l = ((o = s[0]) == null ? void 0 : o.trim()) || "未知原藥品",
        a = ((u = s[1]) == null ? void 0 : u.trim()) || "未知替換藥品";
      let i;
      try {
        const c = t.created_time.replace(/\//g, "-");
        i = new Date(c).toISOString();
      } catch (c) {
        console.error("Error parsing created_time:", t.created_time, c),
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
  k0 = (e) =>
    e.map((t, r) => {
      let s;
      try {
        const m = t.created_time.replace(/\//g, "-");
        (s = new Date(m)),
          isNaN(s.getTime()) &&
            (console.warn("Invalid date format:", t.created_time),
            (s = new Date()));
      } catch (m) {
        console.error("Error parsing created_time:", t.created_time, m),
          (s = new Date());
      }
      const l = new Date(),
        a = new Date(s.getFullYear(), s.getMonth(), s.getDate()),
        i = new Date(l.getFullYear(), l.getMonth(), l.getDate()),
        o = i.getTime() - a.getTime(),
        u = Math.floor(o / (1e3 * 60 * 60 * 24));
      console.log("Out of stock calculation:", {
        originalTime: t.created_time,
        parsedDate: s,
        createdDateOnly: a,
        nowDateOnly: i,
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
  S0 = async () => {
    await new Promise((c) => setTimeout(c, 500));
    let e = [];
    try {
      const c = await Gm();
      c.Code === 200 && c.Data
        ? (e = Ym(c.Data))
        : console.warn("Failed to fetch bulletin data, using mock data");
    } catch (c) {
      console.error("Error fetching bulletin data:", c);
    }
    let t = [];
    try {
      const c = await l0();
      console.log("Drug replacement API response:", c),
        c.Code === 200 && c.Data
          ? ((t = b0(c.Data)),
            console.log("Transformed drug replacement items:", t))
          : (console.warn(
              "Failed to fetch drug replacement data, using mock data. Response:",
              c
            ),
            (t = Mo()));
    } catch (c) {
      console.error(
        "Error fetching drug replacement data, using mock data:",
        c
      ),
        (t = Mo());
    }
    let r = [];
    try {
      const c = await u0();
      console.log("Out of stock API response:", c),
        c.Code === 200 && c.Data
          ? ((r = k0(c.Data)),
            console.log("Transformed out of stock items:", r))
          : (console.warn(
              "Failed to fetch out of stock data, using mock data. Response:",
              c
            ),
            (r = Io()));
    } catch (c) {
      console.error("Error fetching out of stock data, using mock data:", c),
        (r = Io());
    }
    let s = [];
    try {
      const c = await r0();
      console.log("Restock tasks API response:", c),
        c.Code === 200 && c.Data
          ? ((s = h0(c.Data)), console.log("Transformed restock tasks:", s))
          : console.warn("Failed to fetch restock tasks data. Response:", c);
    } catch (c) {
      console.error("Error fetching restock tasks data:", c);
    }
    let l = [],
      a = [];
    try {
      const c = await s0();
      console.log("Receiving and PutAway API response:", c),
        c.Code === 200 && c.Data
          ? ((l = g0(c.Data)),
            (a = x0(c.Data)),
            console.log("Transformed receiving tasks:", l),
            console.log("Transformed putaway tasks:", a))
          : console.warn(
              "Failed to fetch receiving and putaway tasks data. Response:",
              c
            );
    } catch (c) {
      console.error("Error fetching receiving and putaway tasks data:", c);
    }
    let i = [];
    try {
      const c = await j0();
      console.log("Internal requests API response:", c),
        c.Code === 200 && c.Data
          ? ((i = N0(c.Data)), console.log("Transformed internal requests:", i))
          : console.warn(
              "Failed to fetch internal requests data. Response:",
              c
            );
    } catch (c) {
      console.error("Error fetching internal requests data:", c);
    }
    let o = [];
    try {
      const c = await n0();
      console.log("Incoming drugs API response:", c),
        c.Code === 200 && c.Data
          ? ((o = y0(c.Data)), console.log("Transformed incoming drugs:", o))
          : console.warn("Failed to fetch incoming drugs data. Response:", c);
    } catch (c) {
      console.error("Error fetching incoming drugs data:", c);
    }
    let u = [];
    try {
      const c = await v0();
      console.log("Stock all server API response:", c),
        c.Code === 200 && c.Data
          ? ((u = w0(c.Data)),
            console.log("Transformed inventory highlights:", u))
          : console.warn("Failed to fetch stock all server data. Response:", c);
    } catch (c) {
      console.error("Error fetching stock all server data:", c);
    }
    return {
      bulletins: e,
      restockTasks: s,
      receivingTasks: l,
      putAwayTasks: a,
      incomingDrugs: o,
      outOfStockItems: r,
      drugReplacements: t,
      inventoryHighlights: u,
      internalRequests: i,
      lastUpdated: new Date().toISOString(),
    };
  },
  Io = () => [
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
  Mo = () => [
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
  wt = {
    title: "text-[32px] fhd:text-[32px] qhd:text-[48px] uhd:text-[64px]",
    subTitle: "text-[20px] fhd:text-[20px] qhd:text-[32px] uhd:text-[48px]",
    content: "text-[16px] fhd:text-[16px] qhd:text-[24px] uhd:text-[32px]",
    smallLabel: "text-[14px] fhd:text-[14px] qhd:text-[20px] uhd:text-[24px]",
  },
  Po = {
    small: "uhd:w-5 uhd:h-5 qhd:w-4 qhd:h-4",
    medium: "uhd:w-6 uhd:h-6 qhd:w-5 qhd:h-5",
    large: "uhd:w-8 uhd:h-8 qhd:w-6 qhd:h-6",
    xlarge: "uhd:w-10 uhd:h-10 qhd:w-8 qhd:h-8",
  },
  C0 = () => ({
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
  D0 = () => ({
    bulletins: !0,
    tasks: !0,
    incomingDrugs: !0,
    outOfStock: !0,
    drugReplacements: !0,
    inventory: !0,
    internalRequests: !0,
  }),
  _0 = () => {
    try {
      const e = localStorage.getItem("section_grid_position");
      if (e) {
        const t = JSON.parse(e);
        if (z0(t)) return t;
      }
    } catch (e) {
      console.error("Error loading grid config:", e);
    }
    return C0();
  },
  E0 = () => {
    try {
      const e = localStorage.getItem("section_visibility");
      if (e) {
        const t = JSON.parse(e);
        if (I0(t)) return t;
      }
    } catch (e) {
      console.error("Error loading section visibility:", e);
    }
    return D0();
  },
  Oo = (e) => {
    try {
      localStorage.setItem("section_grid_position", JSON.stringify(e));
    } catch (t) {
      console.error("Error saving grid config:", t);
    }
  },
  T0 = (e) => {
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
    for (const r of t) if (typeof e[r] != "boolean") return !1;
    return !0;
  },
  Ce = (e, t) => {
    const r = e.master_row + 1,
      s = e.master_col + 1,
      l = r + t.row,
      a = s + t.col;
    return `${r} / ${s} / ${l} / ${a}`;
  },
  De = ({
    children: e,
    sectionKey: t,
    gridData: r,
    onPositionChange: s,
    onSizeChange: l,
    gridArea: a,
  }) => {
    const [i, o] = b.useState(!1),
      [u, c] = b.useState(!1),
      [m, f] = b.useState(null),
      [d, x] = b.useState(null),
      v = b.useRef(null),
      y = b.useCallback(
        (h) => {
          h.preventDefault(),
            h.stopPropagation(),
            o(!0),
            f({
              x: h.clientX,
              y: h.clientY,
              startRow: r.position.master_row,
              startCol: r.position.master_col,
            });
        },
        [r.position]
      ),
      I = b.useCallback(
        (h) => {
          h.preventDefault(),
            h.stopPropagation(),
            c(!0),
            x({ x: h.clientX, y: h.clientY, startRow: r.row, startCol: r.col });
        },
        [r.row, r.col]
      ),
      g = b.useCallback(
        (h) => {
          if (i && m && v.current) {
            const j = h.clientX - m.x,
              D = h.clientY - m.y,
              T = v.current.parentElement;
            if (T) {
              const z = T.getBoundingClientRect(),
                C = (z.width - 7 * 16) / 8,
                w = (z.height - 5 * 16) / 6,
                N = Math.round(j / (C + 16)),
                E = Math.round(D / (w + 16)),
                O = Math.max(0, Math.min(8 - r.col, m.startCol + N)),
                H = Math.max(0, Math.min(6 - r.row, m.startRow + E));
              (H !== r.position.master_row || O !== r.position.master_col) &&
                s(t, { master_row: H, master_col: O });
            }
          }
          if (u && d && v.current) {
            const j = h.clientX - d.x,
              D = h.clientY - d.y,
              T = v.current.parentElement;
            if (T) {
              const z = T.getBoundingClientRect(),
                C = (z.width - 7 * 16) / 8,
                w = (z.height - 5 * 16) / 6,
                N = Math.round(j / (C + 16)),
                E = Math.round(D / (w + 16)),
                O = Math.max(
                  1,
                  Math.min(8 - r.position.master_col, d.startCol + N)
                ),
                H = Math.max(
                  1,
                  Math.min(6 - r.position.master_row, d.startRow + E)
                );
              (H !== r.row || O !== r.col) && l(t, { row: H, col: O });
            }
          }
        },
        [i, u, m, d, r, s, l, t]
      ),
      p = b.useCallback(() => {
        o(!1), c(!1), f(null), x(null);
      }, []);
    return (
      Ee.useEffect(() => {
        if (i || u)
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
      }, [i, u, g, p]),
      n.jsxs("div", {
        ref: v,
        className: `relative bg-white rounded-xl shadow-lg border border-gray-200 h-full flex flex-col min-h-0 max-h-full overflow-hidden transition-all duration-200 ${
          i || u ? "z-50 shadow-2xl scale-105" : "z-10"
        }`,
        style: { gridArea: a },
        children: [
          n.jsxs("div", {
            className: `absolute top-0 left-0 right-0 h-12 cursor-move z-20 flex items-center justify-center transition-opacity bg-blue-500 bg-opacity-20 rounded-t-xl ${
              i ? "opacity-100" : "opacity-0 hover:opacity-100"
            }`,
            onMouseDown: y,
            children: [
              n.jsx(Fm, { size: 20, className: "text-blue-600" }),
              n.jsx("span", {
                className: `ml-2 text-blue-600 font-medium ${wt.smallLabel}`,
                children: "拖拽移動",
              }),
            ],
          }),
          n.jsx("div", {
            className: `absolute bottom-2 right-2 w-6 h-6 cursor-nw-resize z-20 flex items-center justify-center transition-opacity bg-gray-500 bg-opacity-20 rounded ${
              u ? "opacity-100" : "opacity-0 hover:opacity-100"
            }`,
            onMouseDown: I,
            children: n.jsx(ed, { size: 16, className: "text-gray-600" }),
          }),
          n.jsx("div", { className: "flex-1 min-h-0 relative", children: e }),
          (i || u) &&
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
  Y = ({ size: e = "medium", className: t = "" }) => {
    const r = {
      small: "w-4 h-4 border-[2px]",
      medium: "w-8 h-8 border-[3px]",
      large: "w-12 h-12 border-[4px]",
    };
    return n.jsx("div", {
      className: `${r[e]} ${t} rounded-full border-blue-300 border-t-blue-600 animate-spin`,
    });
  },
  M0 = ({ isOpen: e, onClose: t, onSuccess: r }) => {
    Rr();
    const [s, l] = b.useState({
        title: "",
        content: "",
        priority: "Normal",
        start_time: "",
        end_time: "",
      }),
      [a, i] = b.useState(!1),
      [o, u] = b.useState(null);
    Ee.useEffect(() => {
      if (e) {
        const x = new Date(),
          v = x.toISOString().slice(0, 16),
          y = new Date(x);
        y.setMonth(y.getMonth() + 1);
        const I = y.toISOString().slice(0, 16);
        l({
          title: "",
          content: "",
          priority: "Normal",
          start_time: v,
          end_time: I,
        }),
          u(null);
      }
    }, [e]);
    const c = (x, v) => {
        l((y) => ({ ...y, [x]: v }));
      },
      m = () => {
        if (!s.title.trim()) return "請輸入主旨";
        if (!s.content.trim()) return "請輸入內容";
        if (!s.start_time) return "請選擇開始時間";
        if (!s.end_time) return "請選擇結束時間";
        const x = new Date(s.start_time);
        return new Date(s.end_time) <= x ? "結束時間必須晚於開始時間" : null;
      },
      f = async () => {
        u(null);
        const x = m();
        if (x) {
          u(x);
          return;
        }
        const v = zn();
        if (!v) {
          u("無法獲取使用者資訊，請重新登入");
          return;
        }
        i(!0);
        try {
          const y = (g) => g.replace("T", " ") + ":00",
            I = {
              title: s.title.trim(),
              content: s.content.trim(),
              priority: s.priority,
              creator_dept: v.Employer || "",
              creator_name: v.Name || "",
              start_time: y(s.start_time),
              end_time: y(s.end_time),
            };
          await Km(I), r(), t();
        } catch (y) {
          u(y instanceof Error ? y.message : "新增公告失敗，請稍後再試");
        } finally {
          i(!1);
        }
      },
      d = () => {
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
                      n.jsx(gt, { size: 24, className: "text-blue-600 mr-3" }),
                      n.jsx("h2", {
                        className: "text-xl font-semibold text-gray-800",
                        children: "新增公告",
                      }),
                    ],
                  }),
                  n.jsx("button", {
                    onClick: d,
                    disabled: a,
                    className:
                      "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                    children: n.jsx(He, { size: 20 }),
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
                        n.jsx(Be, {
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
                        onChange: (x) => c("title", x.target.value),
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
                        onChange: (x) => c("content", x.target.value),
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
                        onChange: (x) => c("priority", x.target.value),
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
                            onChange: (x) => c("start_time", x.target.value),
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
                            onChange: (x) => c("end_time", x.target.value),
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
                    onClick: d,
                    disabled: a,
                    className:
                      "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                    children: "取消",
                  }),
                  n.jsx("button", {
                    onClick: f,
                    disabled: a || !s.title.trim() || !s.content.trim(),
                    className:
                      "flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                    children: a
                      ? n.jsxs(n.Fragment, {
                          children: [
                            n.jsx(Y, { size: "small", className: "mr-2" }),
                            "新增中...",
                          ],
                        })
                      : n.jsxs(n.Fragment, {
                          children: [
                            n.jsx(gt, { size: 16, className: "mr-2" }),
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
    Rr();
    const [s, l] = b.useState([]),
      [a, i] = b.useState(!1),
      [o, u] = b.useState(null),
      [c, m] = b.useState(null),
      [f, d] = b.useState(!1),
      [x, v] = b.useState(!1),
      [y, I] = b.useState(!1);
    b.useEffect(() => {
      e && g();
    }, [e]);
    const g = async () => {
        i(!0), u(null);
        try {
          const w = await Xm();
          if (w.Code === 200) l(w.Data || []);
          else throw new Error(w.Result || "載入歷史公告失敗");
        } catch (w) {
          u(w instanceof Error ? w.message : "載入歷史公告時發生錯誤");
        } finally {
          i(!1);
        }
      },
      p = (w) => {
        const N = (E) => {
          if (!E) return "";
          try {
            const O = E.replace(/\//g, "-");
            return new Date(O).toISOString().slice(0, 16);
          } catch (O) {
            return console.error("Error formatting date for input:", E, O), "";
          }
        };
        m({
          GUID: w.GUID,
          title: w.title || "",
          content: w.content || "",
          priority: w.priority || "Normal",
          creator_dept: w.creator_dept || "",
          creator_name: w.creator_name || "",
          start_time: N(w.start_time),
          end_time: N(w.end_time),
          created_time: w.created_time || "",
        });
      },
      h = async () => {
        if (c) {
          d(!0), u(null);
          try {
            const w = (E) =>
                E ? E.replace("T", " ").replace(/-/g, "/") + ":00" : "",
              N = {
                GUID: c.GUID,
                title: c.title.trim(),
                content: c.content.trim(),
                priority: c.priority,
                creator_dept: c.creator_dept,
                creator_name: c.creator_name,
                start_time: w(c.start_time),
                end_time: w(c.end_time),
              };
            await Zm(N), await g(), m(null), r && r();
          } catch (w) {
            u(w instanceof Error ? w.message : "更新公告失敗，請稍後再試");
          } finally {
            d(!1);
          }
        }
      },
      j = async () => {
        if (c) {
          I(!0), u(null), v(!1);
          try {
            await Jm(c.GUID), await g(), m(null), r && r();
          } catch (w) {
            u(w instanceof Error ? w.message : "刪除公告失敗，請稍後再試");
          } finally {
            I(!1);
          }
        }
      },
      D = (w) => {
        if (!w) return "-";
        try {
          const N = w.replace(/\//g, "-");
          return new Date(N).toLocaleString("zh-TW", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: !1,
          });
        } catch {
          return w;
        }
      },
      T = (w) => {
        switch (w) {
          case "Critical":
            return "緊急";
          case "Important":
            return "重要";
          case "Normal":
            return "一般";
          default:
            return w || "一般";
        }
      },
      z = (w) => {
        switch (w) {
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
        !a && !f && !y && (m(null), v(!1), t());
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
                      disabled: a || f,
                      className:
                        "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                      children: n.jsx(He, { size: 20 }),
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
                          n.jsx(Be, {
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
                            n.jsx(Y, { size: "large" }),
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
                                  children: s.map((w) =>
                                    n.jsxs(
                                      "tr",
                                      {
                                        className:
                                          "hover:bg-blue-50 cursor-pointer transition-colors",
                                        onClick: () => p(w),
                                        title: "點擊編輯此公告",
                                        children: [
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: D(w.created_time),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 text-sm text-gray-900 max-w-xs",
                                            children: n.jsx("div", {
                                              className: "truncate",
                                              title: w.title,
                                              children: w.title || "-",
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 text-sm text-gray-900 max-w-md",
                                            children: n.jsx("div", {
                                              className: "truncate",
                                              title: w.content,
                                              children: w.content || "-",
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap",
                                            children: n.jsx("span", {
                                              className: `px-2 py-1 rounded-full text-xs font-medium ${z(
                                                w.priority
                                              )}`,
                                              children: T(w.priority),
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children:
                                              `${w.creator_dept || ""} ${
                                                w.creator_name || ""
                                              }`.trim() || "-",
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: D(w.start_time),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: D(w.end_time),
                                          }),
                                        ],
                                      },
                                      w.GUID
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
                              disabled: f || y,
                              className:
                                "flex items-center px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                              title: "刪除公告",
                              children: [
                                n.jsx(ct, { size: 16, className: "mr-2" }),
                                "刪除",
                              ],
                            }),
                            n.jsx("button", {
                              onClick: () => m(null),
                              disabled: f || y,
                              className:
                                "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                              children: n.jsx(He, { size: 20 }),
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
                              onChange: (w) =>
                                m({ ...c, title: w.target.value }),
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
                              onChange: (w) =>
                                m({ ...c, content: w.target.value }),
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
                              onChange: (w) =>
                                m({ ...c, priority: w.target.value }),
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
                                  onChange: (w) =>
                                    m({ ...c, start_time: w.target.value }),
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
                                  onChange: (w) =>
                                    m({ ...c, end_time: w.target.value }),
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
                          onClick: () => m(null),
                          disabled: f || y,
                          className:
                            "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        n.jsx("button", {
                          onClick: h,
                          disabled:
                            f || y || !c.title.trim() || !c.content.trim(),
                          className:
                            "flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                          children:
                            f || y
                              ? n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(Y, {
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
            x &&
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
                            disabled: y,
                            className:
                              "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                            children: "取消",
                          }),
                          n.jsx("button", {
                            onClick: j,
                            disabled: y,
                            className:
                              "flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                            children: y
                              ? n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(Y, {
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
  O0 = ({
    bulletins: e,
    onBulletinAdded: t,
    showInFocus: r = !0,
    onFocusToggle: s,
  }) => {
    const [l, a] = Ee.useState(!1),
      [i, o] = Ee.useState(!1),
      u = (x) => {
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
      c = (x) => {
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
      m = (x) =>
        new Date(x).toLocaleString("zh-TW", {
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        }),
      f = () => {
        t && t();
      },
      d = () => {
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
                          n.jsx(ht, { size: 16, className: "mr-2" }),
                          "查看歷史",
                        ],
                      }),
                      n.jsxs("button", {
                        onClick: () => a(!0),
                        className:
                          "flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors text-sm",
                        children: [
                          n.jsx(gt, { size: 16, className: "mr-2" }),
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
                  : e.map((x) =>
                      n.jsxs(
                        "div",
                        {
                          className: `p-3 rounded-lg ${u(x.priority)}`,
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
                                  className: `px-2 py-1 rounded-full text-xs font-medium ${c(
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
                                    n.jsx(Ks, { size: 12, className: "mr-1" }),
                                    n.jsx("span", { children: x.author }),
                                  ],
                                }),
                                n.jsxs("div", {
                                  className: "flex items-center",
                                  children: [
                                    n.jsx(Tn, { size: 12, className: "mr-1" }),
                                    n.jsx("span", {
                                      children: m(x.publishDate),
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
        n.jsx(M0, { isOpen: l, onClose: () => a(!1), onSuccess: f }),
        n.jsx(P0, { isOpen: i, onClose: () => o(!1), onSuccess: d }),
      ],
    });
  },
  R0 = ({ bulletins: e }) => {
    const [t, r] = b.useState(0);
    b.useEffect(() => {
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
      a = (u) => {
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
      i = (u) => {
        try {
          const c = u.replace(/\//g, "-"),
            m = new Date(c);
          return isNaN(m.getTime())
            ? u
            : m.toLocaleString("zh-TW", {
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
            className: "p-2 border-b border-gray-200 bg-blue-50",
            children: n.jsxs("div", {
              className: "flex items-center",
              children: [
                n.jsx(sn, { size: 20, className: "text-blue-600 mr-2" }),
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
          className: "p-2 border-b border-gray-200 bg-blue-50",
          children: n.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              n.jsxs("div", {
                className: "flex items-center",
                children: [
                  n.jsx(sn, { size: 20, className: "text-blue-600 mr-2" }),
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
                      n.jsx(Ks, { size: 16, className: "mr-2" }),
                      n.jsx("span", { children: o.author }),
                    ],
                  }),
                  n.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      n.jsx(Tn, { size: 16, className: "mr-2" }),
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
  ja = ({
    bulletins: e,
    isFullscreen: t = !1,
    onBulletinAdded: r,
    showInFocus: s,
    onFocusToggle: l,
  }) =>
    t
      ? n.jsx(R0, { bulletins: e })
      : n.jsx(O0, {
          bulletins: e,
          onBulletinAdded: r,
          showInFocus: s,
          onFocusToggle: l,
        }),
  ji = ({ isOpen: e, onClose: t, sectionKey: r, sectionTitle: s }) => {
    const [l, a] = b.useState(5);
    b.useEffect(() => {
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
                      n.jsx(zr, { size: 24, className: "text-blue-600 mr-3" }),
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
                    children: n.jsx(He, { size: 24 }),
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
                            children: n.jsx(zr, {
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
  L0 = ({
    restockTasks: e,
    receivingTasks: t,
    putAwayTasks: r,
    showInFocus: s = !0,
    onFocusToggle: l,
  }) => {
    var x;
    const [a, i] = b.useState("restock"),
      [o, u] = b.useState(!1),
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
      m = ({ task: v, taskType: y }) =>
        y === "restock" && "code" in v
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
          : (y === "receiving" || y === "putaway") && "code" in v
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
        { key: "restock", label: "撥補", icon: ke, tasks: e },
        { key: "receiving", label: "驗收", icon: Kt, tasks: t },
        { key: "putaway", label: "歸貨", icon: Yu, tasks: r },
      ],
      d = ((x = f.find((v) => v.key === a)) == null ? void 0 : x.tasks) || [];
    return (
      d.filter((v) =>
        "state" in v ? v.state === "等待過帳" : v.quantity && v.quantity > 0
      ).length,
      d.filter((v) => ("state" in v ? v.state === "已簽收" : !1)).length,
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
                            children: ["總計: ", d.length],
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
                    children: n.jsx(zr, { size: 18 }),
                  }),
                ],
              }),
              n.jsx("div", {
                className: "flex space-x-1 bg-gray-100 rounded-lg p-1",
                children: f.map((v) => {
                  const y = v.icon,
                    I = a === v.key,
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
                        I
                          ? "bg-white text-blue-600 shadow-sm"
                          : "text-gray-600 hover:text-gray-800"
                      }`,
                      children: [
                        n.jsx(y, { size: 16, className: "mr-2" }),
                        v.label,
                        g > 0 &&
                          n.jsx("span", {
                            className: `ml-2 px-2 py-0.5 rounded-full text-xs ${
                              I
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
                d.length === 0
                  ? n.jsxs("div", {
                      className: "text-center text-gray-500 py-8",
                      children: [
                        n.jsx(ke, {
                          size: 48,
                          className: "mx-auto text-gray-300 mb-2",
                        }),
                        n.jsx("p", { children: "暫無任務" }),
                      ],
                    })
                  : d.map((v) => n.jsx(m, { task: v, taskType: a }, v.id)),
            }),
          }),
          n.jsx(ji, {
            isOpen: o,
            onClose: () => u(!1),
            sectionKey: "tasks",
            sectionTitle: "任務清單",
          }),
        ],
      })
    );
  },
  F0 = ({ restockTasks: e, receivingTasks: t, putAwayTasks: r }) => {
    var v;
    const [s, l] = b.useState("restock"),
      [a, i] = b.useState(0),
      u = (() => {
        const y = localStorage.getItem("focusTable_tasks_itemsPerPage");
        return y ? parseInt(y, 10) : 5;
      })(),
      c = [
        { key: "restock", label: "撥補", icon: ke, tasks: e },
        { key: "receiving", label: "驗收", icon: Kt, tasks: t },
        { key: "putaway", label: "歸貨", icon: Yu, tasks: r },
      ],
      m = ((v = c.find((y) => y.key === s)) == null ? void 0 : v.tasks) || [];
    b.useEffect(() => {
      const y = setInterval(() => {
        l((I) => {
          const p = (c.findIndex((h) => h.key === I) + 1) % c.length;
          return c[p].key;
        }),
          i(0);
      }, 12e3);
      return () => clearInterval(y);
    }, []),
      b.useEffect(() => {
        if (m.length <= u) return;
        const y = setInterval(() => {
          i((I) => {
            const g = I + u;
            return g >= m.length ? 0 : g;
          });
        }, 8e3);
        return () => clearInterval(y);
      }, [m.length, s]),
      m.filter((y) =>
        "state" in y
          ? y.state === "等待過帳"
          : "quantity" in y && y.quantity > 0
      ).length,
      m.filter((y) => ("state" in y ? y.state === "已簽收" : !1)).length;
    const f = m.slice(a, a + u),
      d = Math.ceil(m.length / u),
      x = Math.floor(a / u) + 1;
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
                  children: c.map((y) => {
                    const I = y.icon,
                      g = s === y.key,
                      p = y.tasks.filter((h) =>
                        "state" in h
                          ? h.state === "等待過帳"
                          : "quantity" in h && h.quantity > 0
                      ).length;
                    return n.jsxs(
                      "div",
                      {
                        className: `flex items-center justify-center px-2 py-1 rounded-md text-xs font-medium transition-colors ${
                          g
                            ? "bg-white text-blue-600 shadow-sm"
                            : "text-gray-600"
                        }`,
                        children: [
                          n.jsx(I, { size: 14, className: "mr-1" }),
                          y.label,
                          p > 0 &&
                            n.jsx("span", {
                              className: `ml-1 px-1 py-0.5 rounded-full text-xs ${
                                g
                                  ? "bg-blue-100 text-blue-600"
                                  : "bg-gray-200 text-gray-600"
                              }`,
                              children: p,
                            }),
                        ],
                      },
                      y.key
                    );
                  }),
                }),
              ],
            }),
            m.length > u &&
              n.jsxs("div", {
                className:
                  "flex items-center justify-between text-base text-gray-600 mt-2",
                children: [
                  n.jsxs("span", { children: ["第 ", x, " / ", d, " 頁"] }),
                  n.jsx("div", {
                    className: "flex space-x-1",
                    children: Array.from({ length: d }, (y, I) =>
                      n.jsx(
                        "div",
                        {
                          className: `w-2 h-2 rounded-full ${
                            I === x - 1 ? "bg-green-500" : "bg-gray-300"
                          }`,
                        },
                        I
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
                      n.jsx(ke, {
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
                        children: f.map((y, I) => {
                          if (s === "restock" && "code" in y && "state" in y) {
                            const g = (h) => {
                                switch (h) {
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
                              p =
                                (y.state === "已過帳" ||
                                  y.state === "已簽收") &&
                                y.actualIssuedQuantity
                                  ? y.actualIssuedQuantity
                                  : y.issuedQuantity;
                            return n.jsxs(
                              "tr",
                              {
                                className: `border-b border-gray-200 transition-colors ${g(
                                  y.state
                                )}`,
                                children: [
                                  n.jsx("td", {
                                    className:
                                      "text-base p-2 text-gray-800 font-medium",
                                    children: y.code,
                                  }),
                                  n.jsx("td", {
                                    className:
                                      "text-base p-2 text-gray-800 font-medium",
                                    children: y.name,
                                  }),
                                  n.jsx("td", {
                                    className:
                                      "text-base p-2 text-center text-gray-700",
                                    children: p,
                                  }),
                                  n.jsx("td", {
                                    className:
                                      "text-base p-2 text-center text-gray-700",
                                    children: y.destinationStoreType,
                                  }),
                                ],
                              },
                              `${a}-${I}`
                            );
                          }
                          return (s === "receiving" || s === "putaway") &&
                            "code" in y
                            ? n.jsxs(
                                "tr",
                                {
                                  className:
                                    "border-b border-gray-200 transition-colors bg-white hover:bg-gray-50",
                                  children: [
                                    n.jsx("td", {
                                      className:
                                        "text-base p-2 text-gray-800 font-medium",
                                      children: y.code,
                                    }),
                                    n.jsx("td", {
                                      className:
                                        "text-base p-2 text-gray-800 font-medium",
                                      children: y.name,
                                    }),
                                    n.jsx("td", {
                                      className:
                                        "text-base p-2 text-center text-gray-700",
                                      children: y.quantity,
                                    }),
                                    n.jsx("td", {
                                      className:
                                        "text-base p-2 text-center text-gray-700",
                                      children: y.supplier,
                                    }),
                                  ],
                                },
                                `${a}-${I}`
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
  Na = ({
    restockTasks: e,
    receivingTasks: t,
    putAwayTasks: r,
    isFullscreen: s = !1,
    showInFocus: l,
    onFocusToggle: a,
  }) =>
    s
      ? n.jsx(F0, { restockTasks: e, receivingTasks: t, putAwayTasks: r })
      : n.jsx(L0, {
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
          const u = new Date(o.replace(/\//g, "-")),
            c = new Date(),
            m = u.getTime() - c.getTime(),
            f = Math.ceil(m / (1e3 * 60 * 60 * 24)),
            d = u.toLocaleDateString("zh-TW", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            });
          return f < 0
            ? `${d} (逾期 ${Math.abs(f)} 天)`
            : f === 0
            ? `${d} (今天)`
            : f === 1
            ? `${d} (明天)`
            : `${d} (${f} 天後)`;
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
                                    n.jsx(Be, {
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
                                  n.jsx(ke, {
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
  $0 = ({ incomingDrugs: e }) => {
    const [t, r] = b.useState(0);
    b.useEffect(() => {
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
      a = (u) => {
        if (!u) return "未設定";
        try {
          const c = new Date(u.replace(/\//g, "-")),
            m = new Date(),
            f = c.getTime() - m.getTime(),
            d = Math.ceil(f / (1e3 * 60 * 60 * 24)),
            x = c.toLocaleDateString("zh-TW", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            });
          return d < 0
            ? `${x} (逾期 ${Math.abs(d)} 天)`
            : d === 0
            ? `${x} (今天)`
            : d === 1
            ? `${x} (明天)`
            : `${x} (${d} 天後)`;
        } catch {
          return u;
        }
      },
      i = (u) => {
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
            className: "p-2 border-b border-gray-200 bg-green-50",
            children: n.jsxs("div", {
              className: "flex items-center",
              children: [
                n.jsx(Kt, { size: 20, className: "text-green-600 mr-2" }),
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
          className: "p-2 border-b border-gray-200 bg-green-50",
          children: n.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              n.jsxs("div", {
                className: "flex items-center",
                children: [
                  n.jsx(Kt, { size: 20, className: "text-green-600 mr-2" }),
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
                        n.jsx(Be, { size: 18, className: "text-red-500" }),
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
                      n.jsx(Ys, {
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
                          n.jsx(ke, {
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
                          n.jsx(Ju, {
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
  ba = ({
    incomingDrugs: e,
    isFullscreen: t = !1,
    showInFocus: r,
    onFocusToggle: s,
  }) =>
    t
      ? n.jsx($0, { incomingDrugs: e })
      : n.jsx(A0, { incomingDrugs: e, showInFocus: r, onFocusToggle: s }),
  U0 = ({ isOpen: e, onClose: t, onSuccess: r }) => {
    const [s, l] = b.useState({ drugName: "", start_time: "", end_time: "" }),
      [a, i] = b.useState([]),
      [o, u] = b.useState([]),
      [c, m] = b.useState(!1),
      [f, d] = b.useState(!1),
      [x, v] = b.useState(!1),
      [y, I] = b.useState(null);
    Ee.useEffect(() => {
      if (e) {
        const C = new Date(),
          w = C.toISOString().slice(0, 16),
          N = new Date(C);
        N.setMonth(N.getMonth() + 1);
        const E = N.toISOString().slice(0, 16);
        l({ drugName: "", start_time: w, end_time: E }),
          u([]),
          m(!1),
          I(null),
          g();
      }
    }, [e]);
    const g = async () => {
        d(!0);
        try {
          const C = await Xs();
          C.Code === 200 && C.Data
            ? i(C.Data)
            : console.warn("Failed to load medicine data:", C);
        } catch (C) {
          console.error("Error loading medicine data:", C);
        } finally {
          d(!1);
        }
      },
      p = (C, w) => {
        l((N) => ({ ...N, [C]: w })), C === "drugName" && h(w);
      },
      h = (C) => {
        if (!C.trim()) {
          u([]), m(!1);
          return;
        }
        const w = a.filter((N) =>
          N.NAME.toLowerCase().includes(C.toLowerCase())
        );
        u(w.slice(0, 10)), m(w.length > 0);
      },
      j = (C) => {
        l((w) => ({ ...w, drugName: C })), m(!1), u([]);
      },
      D = () => {
        if (!s.drugName.trim()) return "請輸入藥品名稱";
        if (!s.start_time) return "請選擇開始時間";
        if (!s.end_time) return "請選擇結束時間";
        const C = new Date(s.start_time);
        return new Date(s.end_time) <= C ? "結束時間必須晚於開始時間" : null;
      },
      T = async () => {
        I(null);
        const C = D();
        if (C) {
          I(C);
          return;
        }
        const w = zn();
        if (!w) {
          I("無法獲取使用者資訊，請重新登入");
          return;
        }
        v(!0);
        try {
          const N = (O) => O.replace("T", " ") + ":00",
            E = {
              title: "缺貨通知",
              content: s.drugName.trim(),
              priority: "Critical",
              creator_dept: w.Employer || "",
              creator_name: w.Name || "",
              start_time: N(s.start_time),
              end_time: N(s.end_time),
            };
          await f0(E), r(), t();
        } catch (N) {
          I(N instanceof Error ? N.message : "新增缺貨項目失敗，請稍後再試");
        } finally {
          v(!1);
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
                      n.jsx(gt, { size: 24, className: "text-blue-600 mr-3" }),
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
                    children: n.jsx(He, { size: 20 }),
                  }),
                ],
              }),
              n.jsxs("div", {
                className: "p-6 space-y-6",
                children: [
                  y &&
                    n.jsxs("div", {
                      className:
                        "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center",
                      children: [
                        n.jsx(Be, {
                          size: 20,
                          className: "mr-2 flex-shrink-0",
                        }),
                        y,
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
                            onChange: (C) => p("drugName", C.target.value),
                            onFocus: () => {
                              o.length > 0 && m(!0);
                            },
                            disabled: x || f,
                            className:
                              "w-full pl-10 pr-10 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                            placeholder: "請輸入藥品名稱進行搜尋",
                            autoComplete: "off",
                          }),
                          f &&
                            n.jsx("div", {
                              className:
                                "absolute inset-y-0 right-0 flex items-center pr-3",
                              children: n.jsx(Y, { size: "small" }),
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
                          children: o.map((C, w) =>
                            n.jsx(
                              "button",
                              {
                                type: "button",
                                onClick: () => j(C.NAME),
                                className:
                                  "w-full px-4 py-2 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors border-b border-gray-100 last:border-b-0",
                                children: n.jsx("div", {
                                  className: "font-medium text-gray-900",
                                  children: C.NAME,
                                }),
                              },
                              w
                            )
                          ),
                        }),
                      f &&
                        n.jsxs("div", {
                          className:
                            "mt-2 text-sm text-gray-500 flex items-center",
                          children: [
                            n.jsx(Y, { size: "small", className: "mr-2" }),
                            "載入藥品資料中...",
                          ],
                        }),
                    ],
                  }),
                  c &&
                    n.jsx("div", {
                      className: "fixed inset-0 z-40",
                      onClick: () => m(!1),
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
                            onChange: (C) => p("start_time", C.target.value),
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
                            onChange: (C) => p("end_time", C.target.value),
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
                    onClick: T,
                    disabled: x || !s.drugName.trim(),
                    className:
                      "flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                    children: x
                      ? n.jsxs(n.Fragment, {
                          children: [
                            n.jsx(Y, { size: "small", className: "mr-2" }),
                            "新增中...",
                          ],
                        })
                      : n.jsxs(n.Fragment, {
                          children: [
                            n.jsx(gt, { size: 16, className: "mr-2" }),
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
  H0 = ({ isOpen: e, onClose: t, onSuccess: r }) => {
    const [s, l] = b.useState([]),
      [a, i] = b.useState(!1),
      [o, u] = b.useState(null),
      [c, m] = b.useState(null),
      [f, d] = b.useState(!1),
      [x, v] = b.useState(!1),
      [y, I] = b.useState(!1),
      [g, p] = b.useState([]),
      [h, j] = b.useState([]),
      [D, T] = b.useState(!1),
      [z, C] = b.useState(!1);
    b.useEffect(() => {
      e && w();
    }, [e]);
    const w = async () => {
        i(!0), u(null);
        try {
          const S = await d0();
          if (S.Code === 200) l(S.Data || []);
          else throw new Error(S.Result || "載入歷史缺貨項目失敗");
        } catch (S) {
          u(S instanceof Error ? S.message : "載入歷史缺貨項目時發生錯誤");
        } finally {
          i(!1);
        }
      },
      N = async () => {
        C(!0);
        try {
          const S = await Xs();
          S.Code === 200 && S.Data
            ? p(S.Data)
            : console.warn("Failed to load medicine data:", S);
        } catch (S) {
          console.error("Error loading medicine data:", S);
        } finally {
          C(!1);
        }
      },
      E = (S) => {
        const F = (k) => {
          if (!k) return "";
          try {
            const A = k.replace(/\//g, "-");
            return new Date(A).toISOString().slice(0, 16);
          } catch (A) {
            return console.error("Error formatting date for input:", k, A), "";
          }
        };
        m({
          GUID: S.GUID,
          title: S.title || "",
          content: S.content || "",
          priority: S.priority || "Normal",
          creator_dept: S.creator_dept || "",
          creator_name: S.creator_name || "",
          start_time: F(S.start_time),
          end_time: F(S.end_time),
          created_time: S.created_time || "",
        }),
          g.length === 0 && N();
      },
      O = (S) => {
        if (!S.trim()) {
          j([]), T(!1);
          return;
        }
        const F = g.filter((k) =>
          k.NAME.toLowerCase().includes(S.toLowerCase())
        );
        j(F.slice(0, 10)), T(F.length > 0);
      },
      H = (S) => {
        c && m({ ...c, content: S }), T(!1), j([]);
      },
      ue = async () => {
        if (c) {
          d(!0), u(null);
          try {
            const S = (k) =>
                k ? k.replace("T", " ").replace(/-/g, "/") + ":00" : "",
              F = {
                GUID: c.GUID,
                title: c.title.trim(),
                content: c.content.trim(),
                priority: c.priority,
                creator_dept: c.creator_dept,
                creator_name: c.creator_name,
                start_time: S(c.start_time),
                end_time: S(c.end_time),
              };
            await m0(F), await w(), m(null), r && r();
          } catch (S) {
            u(S instanceof Error ? S.message : "更新缺貨項目失敗，請稍後再試");
          } finally {
            d(!1);
          }
        }
      },
      Oe = async () => {
        if (c) {
          I(!0), u(null), v(!1);
          try {
            await p0(c.GUID), await w(), m(null), r && r();
          } catch (S) {
            u(S instanceof Error ? S.message : "刪除缺貨項目失敗，請稍後再試");
          } finally {
            I(!1);
          }
        }
      },
      Ve = (S) => {
        if (!S) return "-";
        try {
          const F = S.replace(/\//g, "-");
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
          return S;
        }
      },
      nt = (S) => {
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
      M = (S) => {
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
      R = () => {
        !a && !f && !y && (m(null), v(!1), t());
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
                      disabled: a || f,
                      className:
                        "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                      children: n.jsx(He, { size: 20 }),
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
                          n.jsx(Be, {
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
                            n.jsx(Y, { size: "large" }),
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
                                  children: s.map((S) =>
                                    n.jsxs(
                                      "tr",
                                      {
                                        className:
                                          "hover:bg-blue-50 cursor-pointer transition-colors",
                                        onClick: () => E(S),
                                        title: "點擊編輯此缺貨項目",
                                        children: [
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: Ve(S.created_time),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 text-sm text-gray-900 max-w-xs",
                                            children: n.jsx("div", {
                                              className: "truncate",
                                              title: S.content,
                                              children: S.content || "-",
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap",
                                            children: n.jsx("span", {
                                              className: `px-2 py-1 rounded-full text-xs font-medium ${M(
                                                S.priority
                                              )}`,
                                              children: nt(S.priority),
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
                                            children: Ve(S.start_time),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: Ve(S.end_time),
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
                              disabled: f || y,
                              className:
                                "flex items-center px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                              title: "刪除缺貨項目",
                              children: [
                                n.jsx(ct, { size: 16, className: "mr-2" }),
                                "刪除",
                              ],
                            }),
                            n.jsx("button", {
                              onClick: () => m(null),
                              disabled: f || y,
                              className:
                                "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                              children: n.jsx(He, { size: 20 }),
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
                                  onChange: (S) => {
                                    m({ ...c, content: S.target.value }),
                                      O(S.target.value);
                                  },
                                  onFocus: () => {
                                    h.length > 0 && T(!0);
                                  },
                                  disabled: f || z,
                                  className:
                                    "w-full pl-10 pr-10 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                  placeholder: "請輸入藥品名稱進行搜尋",
                                  autoComplete: "off",
                                }),
                                z &&
                                  n.jsx("div", {
                                    className:
                                      "absolute inset-y-0 right-0 flex items-center pr-3",
                                    children: n.jsx(Y, { size: "small" }),
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
                              h.length > 0 &&
                              n.jsx("div", {
                                className:
                                  "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                                children: h.map((S, F) =>
                                  n.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      onClick: () => H(S.NAME),
                                      className:
                                        "w-full px-4 py-2 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors border-b border-gray-100 last:border-b-0",
                                      children: n.jsx("div", {
                                        className: "font-medium text-gray-900",
                                        children: S.NAME,
                                      }),
                                    },
                                    F
                                  )
                                ),
                              }),
                            z &&
                              n.jsxs("div", {
                                className:
                                  "mt-2 text-sm text-gray-500 flex items-center",
                                children: [
                                  n.jsx(Y, {
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
                            onClick: () => T(!1),
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
                              onChange: (S) =>
                                m({ ...c, priority: S.target.value }),
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
                                  onChange: (S) =>
                                    m({ ...c, start_time: S.target.value }),
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
                                  onChange: (S) =>
                                    m({ ...c, end_time: S.target.value }),
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
                          onClick: () => m(null),
                          disabled: f || y,
                          className:
                            "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        n.jsx("button", {
                          onClick: ue,
                          disabled: f || y || !c.content.trim(),
                          className:
                            "flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                          children:
                            f || y
                              ? n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(Y, {
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
            x &&
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
                            disabled: y,
                            className:
                              "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                            children: "取消",
                          }),
                          n.jsx("button", {
                            onClick: Oe,
                            disabled: y,
                            className:
                              "flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                            children: y
                              ? n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(Y, {
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
  B0 = ({
    outOfStockItems: e,
    onItemAdded: t,
    showInFocus: r = !0,
    onFocusToggle: s,
  }) => {
    const [l, a] = Ee.useState(!1),
      [i, o] = Ee.useState(!1),
      [u, c] = Ee.useState(!1),
      [m, f] = Ee.useState(!1),
      d = (g) =>
        new Date(g).toLocaleDateString("zh-TW", {
          month: "2-digit",
          day: "2-digit",
        }),
      x = (g) => {
        const p = new Date(g);
        if (isNaN(p.getTime()))
          return console.warn("Invalid lastStockDate:", g), 0;
        const h = new Date(),
          j = new Date(p.getFullYear(), p.getMonth(), p.getDate()),
          D = new Date(h.getFullYear(), h.getMonth(), h.getDate()),
          T = D.getTime() - j.getTime(),
          z = Math.floor(T / (1e3 * 60 * 60 * 24));
        return (
          console.log("Days calculation in OutOfStockList:", {
            lastStockDate: g,
            lastStock: p,
            lastStockDateOnly: j,
            nowDateOnly: D,
            diffDays: z,
          }),
          z
        );
      },
      v = () => {
        t && t();
      },
      y = async () => {
        c(!0);
        try {
          await new Promise((g) => setTimeout(g, 100)), a(!0);
        } catch (g) {
          console.error("Failed to prepare add modal:", g), a(!0);
        } finally {
          c(!1);
        }
      },
      I = () => {
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
                          onClick: () => f(!0),
                          className:
                            "p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                          title: "專注模式設定",
                          children: n.jsx(zr, { size: 18 }),
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
                          onClick: y,
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
                                  n.jsx(gt, { size: 16, className: "mr-2" }),
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
                                    n.jsx(Tn, {
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
                                        d(g.lastStockDate),
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
        n.jsx(U0, { isOpen: l, onClose: () => a(!1), onSuccess: v }),
        n.jsx(H0, { isOpen: i, onClose: () => o(!1), onSuccess: I }),
        n.jsx(ji, {
          isOpen: m,
          onClose: () => f(!1),
          sectionKey: "outOfStock",
          sectionTitle: "缺貨通知",
        }),
      ],
    });
  },
  V0 = ({ outOfStockItems: e }) => {
    const [t, r] = b.useState(0),
      l = (() => {
        const c = localStorage.getItem("focusTable_outOfStock_itemsPerPage");
        return c ? parseInt(c, 10) : 5;
      })();
    b.useEffect(() => {
      if (e.length <= l) return;
      const c = setInterval(() => {
        r((m) => {
          const f = m + l;
          return f >= e.length ? 0 : f;
        });
      }, 8e3);
      return () => clearInterval(c);
    }, [e.length]);
    const a = (c) => {
        if (!c) return 0;
        try {
          console.log("計算缺貨天數 - 原始時間:", c);
          const m = new Date(c),
            f = new Date(),
            d = new Date(m.getFullYear(), m.getMonth(), m.getDate()),
            x = new Date(f.getFullYear(), f.getMonth(), f.getDate());
          console.log("最後庫存日期:", d), console.log("今天日期:", x);
          const v = x.getTime() - d.getTime(),
            y = Math.floor(v / (1e3 * 60 * 60 * 24));
          return (
            console.log("時間差(毫秒):", v),
            console.log("計算天數:", y),
            Math.max(0, y)
          );
        } catch (m) {
          return console.error("日期解析錯誤:", m, "原始日期:", c), 0;
        }
      },
      i = e.slice(t, t + l),
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
                  n.jsxs("span", { children: ["第 ", u, " / ", o, " 頁"] }),
                  n.jsx("div", {
                    className: "flex space-x-1",
                    children: Array.from({ length: o }, (c, m) =>
                      n.jsx(
                        "div",
                        {
                          className: `w-2 h-2 rounded-full ${
                            m === u - 1 ? "bg-red-500" : "bg-gray-300"
                          }`,
                        },
                        m
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
                      n.jsx(ke, {
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
                        children: i.map((c, m) => {
                          const f = a(c.lastStockDate),
                            d = f > 3 || c.status === "urgent_order";
                          return n.jsxs(
                            "tr",
                            {
                              className: `border-b border-gray-200 transition-colors ${
                                d ? "bg-red-50" : "bg-white hover:bg-gray-50"
                              }`,
                              children: [
                                n.jsx("td", {
                                  className: "text-base p-2 text-gray-800",
                                  children: n.jsx("div", {
                                    className: "font-semibold",
                                    children: c.drugName,
                                  }),
                                }),
                                n.jsx("td", {
                                  className: "text-base p-2 text-center",
                                  children: n.jsxs("span", {
                                    className: `font-semibold ${
                                      f > 3 ? "text-red-600" : "text-gray-700"
                                    }`,
                                    children: [f, " 天"],
                                  }),
                                }),
                                n.jsx("td", {
                                  className:
                                    "text-base p-2 text-center text-gray-700",
                                  children:
                                    c.currentStock !== void 0 &&
                                    c.minimumStock !== void 0
                                      ? `${c.currentStock} / ${c.minimumStock}`
                                      : "-",
                                }),
                              ],
                            },
                            `${t}-${m}`
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
  ka = ({
    outOfStockItems: e,
    isFullscreen: t = !1,
    onItemAdded: r,
    showInFocus: s,
    onFocusToggle: l,
  }) =>
    t
      ? n.jsx(V0, { outOfStockItems: e })
      : n.jsx(B0, {
          outOfStockItems: e,
          onItemAdded: r,
          showInFocus: s,
          onFocusToggle: l,
        }),
  W0 = ({ isOpen: e, onClose: t, onSuccess: r }) => {
    const [s, l] = b.useState({
        originalDrug: null,
        reason: "",
        start_time: "",
        end_time: "",
      }),
      [a, i] = b.useState([]),
      [o, u] = b.useState([]),
      [c, m] = b.useState(""),
      [f, d] = b.useState(!1),
      [x, v] = b.useState(!1),
      [y, I] = b.useState(!1),
      [g, p] = b.useState(null);
    Ee.useEffect(() => {
      if (e) {
        const N = new Date(),
          E = N.toISOString().slice(0, 16),
          O = new Date(N);
        O.setMonth(O.getMonth() + 1);
        const H = O.toISOString().slice(0, 16);
        l({ originalDrug: null, reason: "", start_time: E, end_time: H }),
          m(""),
          u([]),
          d(!1),
          p(null),
          h();
      }
    }, [e]);
    const h = async () => {
        v(!0);
        try {
          const N = await Xs();
          N.Code === 200 && N.Data
            ? i(N.Data)
            : console.warn("Failed to load medicine data:", N);
        } catch (N) {
          console.error("Error loading medicine data:", N);
        } finally {
          v(!1);
        }
      },
      j = (N, E) => {
        l((O) => ({ ...O, [N]: E }));
      },
      D = (N) => {
        if ((m(N), !N.trim())) {
          u([]), d(!1);
          return;
        }
        const E = N.toLowerCase(),
          O = a.filter((H) => {
            const ue = (H.NAME || "").toLowerCase(),
              Oe = (H.CODE || "").toLowerCase(),
              Ve = (H.SKDIACODE || "").toLowerCase(),
              nt = (H.CHT_NAME || "").toLowerCase();
            return (
              ue.includes(E) ||
              Oe.includes(E) ||
              Ve.includes(E) ||
              nt.includes(E)
            );
          });
        u(O.slice(0, 10)), d(O.length > 0);
      },
      T = (N) => {
        l((E) => ({ ...E, originalDrug: N })), m(N.NAME), d(!1), u([]);
      },
      z = () => {
        if (!s.originalDrug) return "請選擇藥品";
        if (!s.reason.trim()) return "請輸入替換原因";
        if (!s.start_time) return "請選擇開始時間";
        if (!s.end_time) return "請選擇結束時間";
        const N = new Date(s.start_time);
        return new Date(s.end_time) <= N ? "結束時間必須晚於開始時間" : null;
      },
      C = async () => {
        p(null);
        const N = z();
        if (N) {
          p(N);
          return;
        }
        const E = zn();
        if (!E) {
          p("無法獲取使用者資訊，請重新登入");
          return;
        }
        I(!0);
        try {
          const O = (ue) => ue.replace("T", " ") + ":00",
            H = {
              title: "藥品通知",
              content: `${s.originalDrug.NAME.trim()};${s.originalDrug.CODE.trim()}`,
              note: s.reason.trim(),
              priority: "Important",
              creator_dept: E.Employer || "",
              creator_name: E.Name || "",
              start_time: O(s.start_time),
              end_time: O(s.end_time),
            };
          await i0(H), t(), r();
        } catch (O) {
          p(
            O instanceof Error ? O.message : "新增藥品通知項目失敗，請稍後再試"
          );
        } finally {
          I(!1);
        }
      },
      w = () => {
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
                      n.jsx(gt, { size: 24, className: "text-blue-600 mr-3" }),
                      n.jsx("h2", {
                        className: "text-xl font-semibold text-gray-800",
                        children: "新增藥品通知",
                      }),
                    ],
                  }),
                  n.jsx("button", {
                    onClick: w,
                    disabled: y,
                    className:
                      "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                    children: n.jsx(He, { size: 20 }),
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
                        n.jsx(Be, {
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
                            children: n.jsx(kn, {
                              size: 16,
                              className: "text-gray-400",
                            }),
                          }),
                          n.jsx("input", {
                            type: "text",
                            value: c,
                            onChange: (N) => D(N.target.value),
                            onFocus: () => {
                              o.length > 0 && d(!0);
                            },
                            disabled: y || x,
                            className:
                              "w-full pl-10 pr-10 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                            placeholder: "請輸入藥品名稱進行搜尋",
                            autoComplete: "off",
                          }),
                          x &&
                            n.jsx("div", {
                              className:
                                "absolute inset-y-0 right-0 flex items-center pr-3",
                              children: n.jsx(Y, { size: "small" }),
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
                          children: o.map((N, E) =>
                            n.jsxs(
                              "button",
                              {
                                type: "button",
                                onClick: () => T(N),
                                className:
                                  "w-full px-4 py-2 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors border-b border-gray-100 last:border-b-0",
                                children: [
                                  n.jsx("div", {
                                    className: "font-medium text-gray-900",
                                    children: N.NAME,
                                  }),
                                  n.jsxs("div", {
                                    className:
                                      "text-sm text-gray-500 space-y-0.5",
                                    children: [
                                      n.jsxs("div", {
                                        children: ["藥碼: ", N.CODE],
                                      }),
                                      N.SKDIACODE &&
                                        n.jsxs("div", {
                                          children: ["料號: ", N.SKDIACODE],
                                        }),
                                      N.CHT_NAME &&
                                        n.jsxs("div", {
                                          children: ["中文名: ", N.CHT_NAME],
                                        }),
                                    ],
                                  }),
                                ],
                              },
                              E
                            )
                          ),
                        }),
                    ],
                  }),
                  f &&
                    n.jsx("div", {
                      className: "fixed inset-0 z-40",
                      onClick: () => d(!1),
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
                        onChange: (N) => j("reason", N.target.value),
                        disabled: y,
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
                            onChange: (N) => j("start_time", N.target.value),
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
                            onChange: (N) => j("end_time", N.target.value),
                            disabled: y,
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
                        n.jsx(Y, { size: "small", className: "mr-2" }),
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
                    onClick: w,
                    disabled: y,
                    className:
                      "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                    children: "取消",
                  }),
                  n.jsx("button", {
                    onClick: C,
                    disabled: y || !s.originalDrug || !s.reason.trim(),
                    className:
                      "flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                    children: y
                      ? n.jsxs(n.Fragment, {
                          children: [
                            n.jsx(Y, { size: "small", className: "mr-2" }),
                            "新增中...",
                          ],
                        })
                      : n.jsxs(n.Fragment, {
                          children: [
                            n.jsx(gt, { size: 16, className: "mr-2" }),
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
  Q0 = ({ isOpen: e, onClose: t, onSuccess: r }) => {
    const [s, l] = b.useState([]),
      [a, i] = b.useState(!1),
      [o, u] = b.useState(null),
      [c, m] = b.useState(null),
      [f, d] = b.useState(!1),
      [x, v] = b.useState(!1),
      [y, I] = b.useState(!1),
      [g, p] = b.useState([]),
      [h, j] = b.useState([]),
      [D, T] = b.useState(null),
      [z, C] = b.useState(!1);
    b.useEffect(() => {
      e && w();
    }, [e]);
    const w = async () => {
        i(!0), u(null);
        try {
          const k = await a0();
          if (k.Code === 200) l(k.Data || []);
          else throw new Error(k.Result || "載入歷史藥品通知項目失敗");
        } catch (k) {
          u(k instanceof Error ? k.message : "載入歷史藥品通知項目時發生錯誤");
        } finally {
          i(!1);
        }
      },
      N = async () => {
        C(!0);
        try {
          const k = await Xs();
          k.Code === 200 && k.Data
            ? p(k.Data)
            : console.warn("Failed to load medicine data:", k);
        } catch (k) {
          console.error("Error loading medicine data:", k);
        } finally {
          C(!1);
        }
      },
      E = (k) => {
        const A = (Z) => {
          if (!Z) return "";
          try {
            const Se = Z.replace(/\//g, "-");
            return new Date(Se).toISOString().slice(0, 16);
          } catch (Se) {
            return console.error("Error formatting date for input:", Z, Se), "";
          }
        };
        m({
          GUID: k.GUID,
          title: k.title || "",
          content: k.content || "",
          note: k.note || "",
          priority: k.priority || "Normal",
          creator_dept: k.creator_dept || "",
          creator_name: k.creator_name || "",
          start_time: A(k.start_time),
          end_time: A(k.end_time),
          created_time: k.created_time || "",
        }),
          g.length === 0 && N();
      },
      O = (k, A) => {
        if (!k.trim()) {
          j([]), T(null);
          return;
        }
        const Z = g.filter((Se) =>
          Se.NAME.toLowerCase().includes(k.toLowerCase())
        );
        j(Z.slice(0, 10)), T(Z.length > 0 ? A : null);
      },
      H = (k, A) => {
        if (c) {
          const Z = c.content.split(";");
          let Se = "";
          A === "original"
            ? (Se = `${k};${Z[1] || ""}`)
            : (Se = `${Z[0] || ""};${k}`),
            m({ ...c, content: Se });
        }
        T(null), j([]);
      },
      ue = (k) => {
        var A;
        return ((A = k.split(";")[0]) == null ? void 0 : A.trim()) || "";
      },
      Oe = (k) => {
        var A;
        return ((A = k.split(";")[1]) == null ? void 0 : A.trim()) || "";
      },
      Ve = async () => {
        if (c) {
          d(!0), u(null);
          try {
            const k = (Z) =>
                Z ? Z.replace("T", " ").replace(/-/g, "/") + ":00" : "",
              A = {
                GUID: c.GUID,
                title: c.title.trim(),
                content: c.content.trim(),
                note: c.note.trim(),
                priority: c.priority,
                creator_dept: c.creator_dept,
                creator_name: c.creator_name,
                start_time: k(c.start_time),
                end_time: k(c.end_time),
              };
            await o0(A), await w(), m(null), r && r();
          } catch (k) {
            u(
              k instanceof Error
                ? k.message
                : "更新藥品通知項目失敗，請稍後再試"
            );
          } finally {
            d(!1);
          }
        }
      },
      nt = async () => {
        if (c) {
          I(!0), u(null), v(!1);
          try {
            await c0(c.GUID), await w(), m(null), r && r();
          } catch (k) {
            u(
              k instanceof Error
                ? k.message
                : "刪除藥品通知項目失敗，請稍後再試"
            );
          } finally {
            I(!1);
          }
        }
      },
      M = (k) => {
        if (!k) return "-";
        try {
          const A = k.replace(/\//g, "-");
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
          return k;
        }
      },
      R = (k) => {
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
      S = (k) => {
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
      F = () => {
        !a && !f && !y && (m(null), v(!1), t());
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
                      disabled: a || f,
                      className:
                        "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                      children: n.jsx(He, { size: 20 }),
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
                          n.jsx(Be, {
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
                            n.jsx(Y, { size: "large" }),
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
                                  children: s.map((k) =>
                                    n.jsxs(
                                      "tr",
                                      {
                                        className:
                                          "hover:bg-blue-50 cursor-pointer transition-colors",
                                        onClick: () => E(k),
                                        title: "點擊編輯此藥品通知項目",
                                        children: [
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: M(k.created_time),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 text-sm text-gray-900 max-w-xs",
                                            children: n.jsx("div", {
                                              className: "truncate",
                                              title: ue(k.content),
                                              children: ue(k.content) || "-",
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 text-sm text-gray-900 max-w-xs",
                                            children: n.jsx("div", {
                                              className: "truncate",
                                              title: Oe(k.content),
                                              children: Oe(k.content) || "-",
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 text-sm text-gray-900 max-w-md",
                                            children: n.jsx("div", {
                                              className: "truncate",
                                              title: k.note,
                                              children: k.note || "-",
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap",
                                            children: n.jsx("span", {
                                              className: `px-2 py-1 rounded-full text-xs font-medium ${S(
                                                k.priority
                                              )}`,
                                              children: R(k.priority),
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
                                            children: M(k.start_time),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: M(k.end_time),
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
                              children: "編輯藥品通知",
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            n.jsxs("button", {
                              onClick: () => v(!0),
                              disabled: f || y,
                              className:
                                "flex items-center px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                              title: "刪除藥品通知項目",
                              children: [
                                n.jsx(ct, { size: 16, className: "mr-2" }),
                                "刪除",
                              ],
                            }),
                            n.jsx("button", {
                              onClick: () => m(null),
                              disabled: f || y,
                              className:
                                "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                              children: n.jsx(He, { size: 20 }),
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
                                  value: ue(c.content),
                                  onChange: (k) => {
                                    const A = `${k.target.value};${Oe(
                                      c.content
                                    )}`;
                                    m({ ...c, content: A }),
                                      O(k.target.value, "original");
                                  },
                                  onFocus: () => {
                                    h.length > 0 && T("original");
                                  },
                                  disabled: f || z,
                                  className:
                                    "w-full pl-10 pr-10 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                  placeholder: "請輸入原藥品名稱進行搜尋",
                                  autoComplete: "off",
                                }),
                                z &&
                                  n.jsx("div", {
                                    className:
                                      "absolute inset-y-0 right-0 flex items-center pr-3",
                                    children: n.jsx(Y, { size: "small" }),
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
                              h.length > 0 &&
                              n.jsx("div", {
                                className:
                                  "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                                children: h.map((k, A) =>
                                  n.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      onClick: () => H(k.NAME, "original"),
                                      className:
                                        "w-full px-4 py-2 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors border-b border-gray-100 last:border-b-0",
                                      children: n.jsx("div", {
                                        className: "font-medium text-gray-900",
                                        children: k.NAME,
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
                                  value: Oe(c.content),
                                  onChange: (k) => {
                                    const A = `${ue(c.content)};${
                                      k.target.value
                                    }`;
                                    m({ ...c, content: A }),
                                      O(k.target.value, "replacement");
                                  },
                                  onFocus: () => {
                                    h.length > 0 && T("replacement");
                                  },
                                  disabled: f || z,
                                  className:
                                    "w-full pl-10 pr-10 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                  placeholder: "請輸入替換藥品名稱進行搜尋",
                                  autoComplete: "off",
                                }),
                                z &&
                                  n.jsx("div", {
                                    className:
                                      "absolute inset-y-0 right-0 flex items-center pr-3",
                                    children: n.jsx(Y, { size: "small" }),
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
                              h.length > 0 &&
                              n.jsx("div", {
                                className:
                                  "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                                children: h.map((k, A) =>
                                  n.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      onClick: () => H(k.NAME, "replacement"),
                                      className:
                                        "w-full px-4 py-2 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors border-b border-gray-100 last:border-b-0",
                                      children: n.jsx("div", {
                                        className: "font-medium text-gray-900",
                                        children: k.NAME,
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
                            onClick: () => T(null),
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
                              onChange: (k) =>
                                m({ ...c, note: k.target.value }),
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
                              onChange: (k) =>
                                m({ ...c, priority: k.target.value }),
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
                                    m({ ...c, start_time: k.target.value }),
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
                                    m({ ...c, end_time: k.target.value }),
                                  disabled: f,
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
                              n.jsx(Y, { size: "small", className: "mr-2" }),
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
                          onClick: () => m(null),
                          disabled: f || y,
                          className:
                            "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        n.jsx("button", {
                          onClick: Ve,
                          disabled:
                            f || y || !c.content.trim() || !c.note.trim(),
                          className:
                            "flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                          children:
                            f || y
                              ? n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(Y, {
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
            x &&
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
                          ue(c.content),
                          " → ",
                          Oe(c.content),
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
                            disabled: y,
                            className:
                              "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                            children: "取消",
                          }),
                          n.jsx("button", {
                            onClick: nt,
                            disabled: y,
                            className:
                              "flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                            children: y
                              ? n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(Y, {
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
    drugReplacements: e,
    onItemAdded: t,
    showInFocus: r = !0,
    onFocusToggle: s,
  }) => {
    const [l, a] = Ee.useState(!1),
      [i, o] = Ee.useState(!1),
      u = (d) => {
        switch (d) {
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
      c = (d) => {
        const x = new Date(d),
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
      m = () => {
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
                                    onChange: (d) => s(d.target.checked),
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
                          onClick: () => a(!0),
                          className:
                            "flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors text-sm",
                          children: [
                            n.jsx(gt, { size: 16, className: "mr-2" }),
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
                    : e.map((d) => {
                        const [x, v] = [d.originalDrug, d.replacementDrug];
                        return n.jsxs(
                          "div",
                          {
                            className: `p-3 rounded-lg border ${u(d.priority)}`,
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
                                      n.jsx(Yt, {
                                        size: 14,
                                        className: "mr-2 text-gray-400",
                                      }),
                                      n.jsxs("span", {
                                        children: ["原因: ", d.reason],
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
                                          c(d.effectiveDate),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          d.id || `${d.originalDrug}`
                        );
                      }),
              }),
            }),
          ],
        }),
        n.jsx(W0, { isOpen: l, onClose: () => a(!1), onSuccess: m }),
        n.jsx(Q0, { isOpen: i, onClose: () => o(!1), onSuccess: f }),
      ],
    });
  },
  G0 = ({ drugReplacements: e }) => {
    const [t, r] = b.useState(0),
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
    b.useEffect(() => {
      if (e.length <= 1) return;
      const u = setInterval(() => {
        r((c) => (c + 1) % e.length);
      }, 8e3);
      return () => clearInterval(u);
    }, [e.length]);
    const l = (u) => {
      const c = new Date(u),
        m = new Date();
      return (
        c.getTime() - m.getTime(),
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
            className: "p-2 border-b border-gray-200 bg-purple-50",
            children: n.jsxs("div", {
              className: "flex items-center",
              children: [
                n.jsx(br, { size: 20, className: "text-purple-600 mr-2" }),
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
                  n.jsx(br, { size: 20, className: "text-purple-600 mr-2" }),
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
                      n.jsx(Yt, { size: 16, className: "mr-2 text-gray-400" }),
                      n.jsxs("span", { children: ["原因: ", a.reason] }),
                    ],
                  }),
                  n.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      n.jsx(Ys, { size: 16, className: "mr-2 text-gray-400" }),
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
  Sa = ({
    drugReplacements: e,
    isFullscreen: t = !1,
    onItemAdded: r,
    showInFocus: s,
    onFocusToggle: l,
  }) =>
    t
      ? n.jsx(G0, { drugReplacements: e })
      : n.jsx(q0, {
          drugReplacements: e,
          onItemAdded: r,
          showInFocus: s,
          onFocusToggle: l,
        }),
  Y0 = ({ inventoryHighlights: e, showInFocus: t = !0, onFocusToggle: r }) => {
    const [s, l] = Ee.useState(!1);
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
                  n.jsx(ke, { size: 20, className: "text-blue-600 mr-2" }),
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
                    children: n.jsx(zr, { size: 18 }),
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
                      n.jsx(ke, {
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
        n.jsx(ji, {
          isOpen: s,
          onClose: () => l(!1),
          sectionKey: "inventory",
          sectionTitle: "即時庫存重點",
        }),
      ],
    });
  },
  K0 = ({ inventoryHighlights: e }) => {
    const [t, r] = b.useState(0),
      l = (() => {
        const f = localStorage.getItem("focusTable_inventory_itemsPerPage");
        return f ? parseInt(f, 10) : 5;
      })();
    b.useEffect(() => {
      if (e.length <= l) return;
      const f = setInterval(() => {
        r((d) => {
          const x = d + l;
          return x >= e.length ? 0 : x;
        });
      }, 8e3);
      return () => clearInterval(f);
    }, [e.length, l]);
    const a = e.slice(t, t + l),
      i = Math.ceil(e.length / l),
      o = Math.floor(t / l) + 1,
      u = Array.from(
        new Set(e.flatMap((f) => (f.serverData || []).map((d) => d.serverName)))
      ).sort(),
      c = 40,
      m = u.length > 0 ? 60 / u.length : 20;
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
                    n.jsx(ke, { size: 20, className: "mr-2 text-blue-600" }),
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
                      n.jsx(ke, {
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
                          n.jsx("col", { style: { width: `${c}%` } }),
                          u.map((f) =>
                            n.jsx("col", { style: { width: `${m}%` } }, f)
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
                            u.map((f) =>
                              n.jsx(
                                "th",
                                {
                                  className:
                                    "text-base font-semibold text-center py-1 px-3 whitespace-nowrap truncate text-gray-700",
                                  children: f,
                                },
                                f
                              )
                            ),
                          ],
                        }),
                      }),
                      n.jsx("tbody", {
                        children: a.map((f, d) =>
                          n.jsxs(
                            "tr",
                            {
                              className: `border-b border-gray-200 transition-colors ${
                                d % 2 === 0
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
                                      children: f.name,
                                    }),
                                    n.jsx("div", {
                                      className:
                                        "text-sm text-gray-500 truncate whitespace-nowrap",
                                      children: f.code,
                                    }),
                                  ],
                                }),
                                u.map((x) => {
                                  const v = (f.serverData || []).find(
                                      (I) => I.serverName === x
                                    ),
                                    y = v ? v.qty : 0;
                                  return n.jsx(
                                    "td",
                                    {
                                      className:
                                        "text-base py-1 px-3 whitespace-nowrap truncate text-center",
                                      children: n.jsx("div", {
                                        className:
                                          "font-semibold text-gray-700",
                                        children: y,
                                      }),
                                    },
                                    x
                                  );
                                }),
                              ],
                            },
                            `${t}-${d}`
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
  Ca = ({
    inventoryHighlights: e,
    isFullscreen: t = !1,
    showInFocus: r,
    onFocusToggle: s,
  }) =>
    t
      ? n.jsx(K0, { inventoryHighlights: e })
      : n.jsx(Y0, { inventoryHighlights: e, showInFocus: r, onFocusToggle: s });
class X0 {
  constructor() {
    (this.audioContext = null),
      (this.isEnabled = !0),
      (this.selectedSound = "ding"),
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
  createChimeSound() {
    if (!this.audioContext) return;
    const t = this.audioContext.currentTime;
    [1e3, 1200].forEach((r, s) => {
      const l = this.audioContext.createOscillator(),
        a = this.audioContext.createGain();
      l.connect(a),
        a.connect(this.audioContext.destination),
        l.frequency.setValueAtTime(r, t),
        (l.type = "sine");
      const i = t + s * 0.15;
      a.gain.setValueAtTime(0, i),
        a.gain.linearRampToValueAtTime(0.4, i + 0.02),
        a.gain.exponentialRampToValueAtTime(0.01, i + 0.4),
        l.start(i),
        l.stop(i + 0.4);
    });
  }
  createBellSound() {
    if (!this.audioContext) return;
    const t = this.audioContext.currentTime;
    [600, 800, 1e3].forEach((r, s) => {
      const l = this.audioContext.createOscillator(),
        a = this.audioContext.createGain();
      l.connect(a),
        a.connect(this.audioContext.destination),
        l.frequency.setValueAtTime(r, t),
        (l.type = "triangle");
      const i = t + s * 0.1;
      a.gain.setValueAtTime(0, i),
        a.gain.linearRampToValueAtTime(0.3, i + 0.02),
        a.gain.exponentialRampToValueAtTime(0.01, i + 0.5),
        l.start(i),
        l.stop(i + 0.5);
    });
  }
  playSound(t) {
    switch (t) {
      case "ding":
        this.createDingSound();
        break;
      case "chime":
        this.createChimeSound();
        break;
      case "bell":
        this.createBellSound();
        break;
    }
  }
  async playNotification() {
    if (this.isEnabled)
      try {
        await this.resumeAudioContext(), this.playSound(this.selectedSound);
      } catch (t) {
        console.warn("Failed to play notification sound:", t);
      }
  }
  async playPreview(t) {
    try {
      await this.resumeAudioContext(), this.playSound(t);
    } catch (r) {
      console.warn("Failed to play preview sound:", r);
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
  getSelectedSound() {
    return this.selectedSound;
  }
  setSelectedSound(t) {
    (this.selectedSound = t), this.saveSettings();
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
        );
    } catch (t) {
      console.warn("Failed to save notification settings:", t);
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
    } catch (t) {
      console.warn("Failed to load notification settings:", t);
    }
  }
}
const ut = new X0(),
  Z0 = ({ isOpen: e, onClose: t }) => {
    const [r, s] = b.useState(ut.getSelectedSound()),
      [l, a] = b.useState(() => {
        const m = localStorage.getItem("internalRequests_displayMode");
        return m || "all";
      }),
      i = [
        { type: "ding", name: "叮咚聲", description: "單音清脆提示音" },
        { type: "chime", name: "鐘鈴聲", description: "雙音和諧提示音" },
        { type: "bell", name: "鈴聲", description: "三音漸進提示音" },
      ],
      o = (m) => {
        ut.playPreview(m);
      },
      u = (m) => {
        s(m), ut.setSelectedSound(m);
      },
      c = (m) => {
        a(m),
          localStorage.setItem("internalRequests_displayMode", m),
          window.dispatchEvent(
            new CustomEvent("internalRequestsSettingChanged", {
              detail: { displayMode: m },
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
                    children: n.jsx(He, { size: 24 }),
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
                        children: i.map((m) =>
                          n.jsx(
                            "div",
                            {
                              className: `border-2 rounded-lg p-4 transition-all cursor-pointer ${
                                r === m.type
                                  ? "border-teal-500 bg-teal-50"
                                  : "border-gray-200 hover:border-gray-300"
                              }`,
                              onClick: () => u(m.type),
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
                                            children: m.name,
                                          }),
                                          r === m.type &&
                                            n.jsx(Kn, {
                                              size: 20,
                                              className: "text-teal-600",
                                            }),
                                        ],
                                      }),
                                      n.jsx("p", {
                                        className: "text-sm text-gray-600",
                                        children: m.description,
                                      }),
                                    ],
                                  }),
                                  n.jsx("button", {
                                    onClick: (f) => {
                                      f.stopPropagation(), o(m.type);
                                    },
                                    className:
                                      "ml-4 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors",
                                    title: "試聽音效",
                                    children: n.jsx($m, {
                                      size: 20,
                                      className: "text-gray-700",
                                    }),
                                  }),
                                ],
                              }),
                            },
                            m.type
                          )
                        ),
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
                              l === "all"
                                ? "border-teal-500 bg-teal-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`,
                            onClick: () => c("all"),
                            children: n.jsx("div", {
                              className: "flex items-center justify-between",
                              children: n.jsxs("div", {
                                className: "flex items-center space-x-3",
                                children: [
                                  n.jsx(Om, {
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
                                          l === "all" &&
                                            n.jsx(Kn, {
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
                              l === "separate"
                                ? "border-teal-500 bg-teal-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`,
                            onClick: () => c("separate"),
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
                                          l === "separate" &&
                                            n.jsx(Kn, {
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
                              l === "urgentOnly"
                                ? "border-teal-500 bg-teal-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`,
                            onClick: () => c("urgentOnly"),
                            children: n.jsx("div", {
                              className: "flex items-center justify-between",
                              children: n.jsxs("div", {
                                className: "flex items-center space-x-3",
                                children: [
                                  n.jsx(Be, {
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
                                          l === "urgentOnly" &&
                                            n.jsx(Kn, {
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
    const [s, l] = b.useState(ut.getStatus()),
      [a, i] = b.useState(!1),
      o = b.useRef(new Set());
    b.useEffect(() => {
      const d = new Set();
      if (
        (e.forEach((v) => {
          v.state === "等待過帳" && v.actionType === "緊急申領" && d.add(v.id);
        }),
        Array.from(d).some((v) => !o.current.has(v)) && o.current.size > 0)
      ) {
        console.log("======= 通知音效發出 =======");
        try {
          ut.playNotification();
        } catch (v) {
          console.error(v), console.log(v);
        }
      }
      o.current = d;
    }, [e]);
    const u = () => {
        const d = ut.toggle();
        l(d);
      },
      c = (d, x) => {
        if (d === "等待過帳" && x === "緊急申領")
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
      m = (d) => {
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
      f = [...e].sort((d, x) => {
        if (d.state === "等待過帳" && d.actionType === "緊急申領") return -1;
        if (x.state === "等待過帳" && x.actionType === "緊急申領") return 1;
        const v = { 等待過帳: 0, 已過帳: 1, 已簽收: 2 },
          y = v[d.state],
          I = v[x.state];
        if (y !== I) return y - I;
        try {
          const g = new Date(d.requestTime.replace(/\//g, "-")).getTime();
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
                  n.jsx(Yt, { size: 20, className: "text-teal-600 mr-2" }),
                  n.jsx("h3", {
                    className: "text-lg font-semibold text-gray-800",
                    children: "藥品申領通知",
                  }),
                  n.jsx("button", {
                    onClick: () => i(!0),
                    className:
                      "ml-3 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors",
                    title: "音效設定",
                    children: n.jsx(zr, { size: 18 }),
                  }),
                  n.jsx("button", {
                    onClick: u,
                    className: `ml-2 p-2 rounded-lg transition-colors ${
                      s
                        ? "bg-green-100 text-green-600 hover:bg-green-200"
                        : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                    }`,
                    title: s ? "通知已啟用" : "通知已關閉",
                    children: s
                      ? n.jsx(Xu, { size: 18, className: "fill-current" })
                      : n.jsx(Ku, { size: 18 }),
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
              f.length === 0
                ? n.jsxs("div", {
                    className: "text-center text-gray-500 py-8",
                    children: [
                      n.jsx(Yt, {
                        size: 48,
                        className: "mx-auto text-gray-300 mb-2",
                      }),
                      n.jsx("p", { children: "暫無藥品申領" }),
                    ],
                  })
                : f.map(
                    (d) => (
                      d.state === "等待過帳" && d.actionType,
                      n.jsxs(
                        "div",
                        {
                          className: `p-3 border-2 rounded-lg transition-colors ${c(
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
                                              n.jsx(Be, {
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
                                        n.jsx(ke, {
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
                                    n.jsx(Tn, {
                                      size: 14,
                                      className: "mr-2 text-gray-400",
                                    }),
                                    n.jsxs("span", {
                                      children: [
                                        "申請時間: ",
                                        m(d.requestTime),
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
        n.jsx(Z0, { isOpen: a, onClose: () => i(!1) }),
      ],
    });
  },
  ep = ({ internalRequests: e, gridHeight: t = 2 }) => {
    const [r, s] = b.useState(0),
      [l, a] = b.useState(0),
      [i, o] = b.useState(0),
      u = Math.min(5, Math.max(1, t - 1)),
      [c, m] = b.useState(ut.getStatus()),
      [f, d] = b.useState(() => {
        const w = localStorage.getItem("internalRequests_displayMode");
        return w || "all";
      }),
      x = b.useRef(new Set());
    b.useEffect(() => {
      const w = new Set();
      if (
        (e.forEach((E) => {
          E.state === "等待過帳" && E.actionType === "緊急申領" && w.add(E.id);
        }),
        Array.from(w).some((E) => !x.current.has(E)) && x.current.size > 0)
      ) {
        console.log("======= 通知音效發出 =======");
        try {
          ut.playNotification();
        } catch (E) {
          console.log(E), console.error(E);
        }
      }
      x.current = w;
    }, [e]),
      b.useEffect(() => {
        const w = (N) => {
          var O;
          const E = N;
          ((O = E.detail) == null ? void 0 : O.displayMode) !== void 0 &&
            d(E.detail.displayMode);
        };
        return (
          window.addEventListener("internalRequestsSettingChanged", w),
          () => window.removeEventListener("internalRequestsSettingChanged", w)
        );
      }, []),
      b.useEffect(() => {
        if (f === "separate") {
          const w = e.filter((E) => E.actionType === "緊急申領"),
            N = e.filter((E) => E.actionType !== "緊急申領");
          if (w.length > u) {
            const E = setInterval(() => {
              a((O) => (O + u) % w.length);
            }, 6e3);
            return () => clearInterval(E);
          }
          if (N.length > u) {
            const E = setInterval(() => {
              o((O) => (O + u) % N.length);
            }, 6e3);
            return () => clearInterval(E);
          }
        } else {
          const w =
            f === "urgentOnly"
              ? e.filter((N) => N.actionType === "緊急申領")
              : e;
          if (w.length > u) {
            const N = setInterval(() => {
              s((E) => (E + u) % w.length);
            }, 6e3);
            return () => clearInterval(N);
          }
        }
      }, [e.length, f, e, u]);
    const v = () => {
        const w = ut.toggle();
        m(w);
      },
      y = (w, N) => {
        if (w === "等待過帳" && N === "緊急申領")
          return "bg-red-100 border-red-300";
        switch (w) {
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
      I = (w, N) => {
        if (w === "等待過帳" && N === "緊急申領") return "text-gray-800";
        switch (w) {
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
      g = (w) => {
        try {
          return new Date(w.replace(/\//g, "-")).toLocaleString("zh-TW", {
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          });
        } catch {
          return w;
        }
      },
      p = (w, N) => {
        const E = w.state === "等待過帳" && w.actionType === "緊急申領";
        return n.jsx("div", {
          className: "h-full flex flex-col",
          children: n.jsxs("div", {
            className: `flex-1 p-3 border-2 rounded-lg transition-all flex flex-col ${y(
              w.state,
              w.actionType
            )}`,
            children: [
              n.jsxs("div", {
                className: "flex items-start justify-between mb-1 gap-1",
                children: [
                  n.jsxs("div", {
                    className: "flex-1 min-w-0",
                    children: [
                      n.jsx("h4", {
                        className: `font-semibold text-lg ${I(
                          w.state,
                          w.actionType
                        )} leading-tight truncate mb-1`,
                        title: w.name,
                        children: w.name,
                      }),
                      n.jsx("div", {
                        className: `text-sm ${I(w.state, w.actionType)}`,
                        children: w.code,
                      }),
                    ],
                  }),
                  w.actionType === "緊急申領" &&
                    n.jsxs("div", {
                      className:
                        "inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-red-600 text-white flex-shrink-0",
                      children: [
                        n.jsx(Be, { size: 12, className: "mr-1" }),
                        "緊急申領",
                      ],
                    }),
                ],
              }),
              n.jsxs("div", {
                className: `grid grid-cols-2 gap-1 text-base ${I(
                  w.state,
                  w.actionType
                )} flex-1 min-h-0`,
                children: [
                  n.jsxs("div", {
                    className: "space-y-1",
                    children: [
                      n.jsxs("div", {
                        className: "flex items-center min-w-0",
                        children: [
                          n.jsx(Zu, {
                            size: 20,
                            className: `mr-2 flex-shrink-0 ${
                              E ? "text-gray-800" : "text-gray-400"
                            }`,
                          }),
                          n.jsx("span", {
                            className: "truncate",
                            children: n.jsx("strong", {
                              children: w.requestingUnit,
                            }),
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className: "flex items-center min-w-0",
                        children: [
                          n.jsx(Ks, {
                            size: 20,
                            className: `mr-2 flex-shrink-0 ${
                              E ? "text-gray-800" : "text-gray-400"
                            }`,
                          }),
                          n.jsx("span", {
                            className: "truncate",
                            children: n.jsx("strong", {
                              children: w.requestingPerson,
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
                          n.jsx(ke, {
                            size: 20,
                            className: `mr-2 ${
                              E ? "text-gray-800" : "text-gray-400"
                            }`,
                          }),
                          n.jsx("span", {
                            children: n.jsx("strong", {
                              children: w.requestedQuantity,
                            }),
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          n.jsx(Tn, {
                            size: 20,
                            className: `mr-2 ${
                              E ? "text-gray-800" : "text-gray-400"
                            }`,
                          }),
                          n.jsx("span", {
                            children: n.jsx("strong", {
                              children: g(w.requestTime),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              w.remarks &&
                n.jsxs("div", {
                  className: `mt-3 p-2 border rounded-lg text-base flex-shrink-0 ${
                    E
                      ? "bg-red-600 border-red-700 text-white"
                      : "bg-gray-50 border-gray-200 text-gray-700"
                  }`,
                  children: [
                    n.jsx("span", {
                      className: "font-medium",
                      children: "備註: ",
                    }),
                    n.jsx("span", { children: w.remarks }),
                  ],
                }),
            ],
          }),
        });
      },
      h = e.filter((w) => w.actionType === "緊急申領"),
      j = e.filter((w) => w.actionType !== "緊急申領");
    if (f === "urgentOnly" ? h.length === 0 : e.length === 0)
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
                      className: "text-xl font-semibold text-gray-800",
                      children: "藥品申領通知",
                    }),
                  ],
                }),
                n.jsx("button", {
                  onClick: v,
                  className: `p-2 rounded-lg transition-colors ${
                    c
                      ? "bg-green-100 text-green-600 hover:bg-green-200"
                      : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                  }`,
                  title: c ? "通知已啟用" : "通知已關閉",
                  children: c
                    ? n.jsx(Xu, { size: 18, className: "fill-current" })
                    : n.jsx(Ku, { size: 18 }),
                }),
              ],
            }),
          }),
          n.jsx("div", {
            className: "flex-1 flex items-center justify-center",
            children: n.jsxs("div", {
              className: "text-center text-gray-500",
              children: [
                n.jsx(ke, {
                  size: 48,
                  className: "mx-auto text-gray-300 mb-2",
                }),
                n.jsx("p", {
                  children:
                    f === "urgentOnly" ? "暫無緊急申領" : "暫無藥品申領",
                }),
              ],
            }),
          }),
        ],
      });
    const T = [...e].sort((w, N) => {
      if (w.state === "等待過帳" && w.actionType === "緊急申領") return -1;
      if (N.state === "等待過帳" && N.actionType === "緊急申領") return 1;
      const E = { 等待過帳: 0, 已過帳: 1, 已簽收: 2 },
        O = E[w.state],
        H = E[N.state];
      if (O !== H) return O - H;
      try {
        const ue = new Date(w.requestTime.replace(/\//g, "-")).getTime();
        return new Date(N.requestTime.replace(/\//g, "-")).getTime() - ue;
      } catch {
        return 0;
      }
    });
    if (f === "separate") {
      const w = h.slice(l, l + u),
        N = j.slice(i, i + u);
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
                    n.jsx(Yt, { size: 20, className: "text-teal-600 mr-2" }),
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
                      e.filter((E) => E.state === "等待過帳").length,
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
                        children: [Math.min(l + u, h.length), "/", h.length],
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
                        : w.map((E, O) =>
                            n.jsx(
                              "div",
                              { className: "flex-1 min-h-0", children: p(E) },
                              E.id
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
                        children: ["一般申領 (", j.length, ")"],
                      }),
                      n.jsxs("div", {
                        children: [Math.min(i + u, j.length), "/", j.length],
                      }),
                    ],
                  }),
                  n.jsx("div", {
                    className:
                      "flex-1 min-h-0 overflow-hidden flex flex-col gap-2",
                    children:
                      j.length === 0
                        ? n.jsx("div", {
                            className:
                              "h-full flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg",
                            children: n.jsx("p", {
                              className: "text-sm text-gray-400",
                              children: "暫無一般申領",
                            }),
                          })
                        : N.map((E, O) =>
                            n.jsx(
                              "div",
                              { className: "flex-1 min-h-0", children: p(E) },
                              E.id
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
    const z =
        f === "urgentOnly" ? T.filter((w) => w.actionType === "緊急申領") : T,
      C = z.slice(r, r + u);
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
                  n.jsx(Yt, { size: 20, className: "text-teal-600 mr-2" }),
                  n.jsx("h3", {
                    className: "text-xl font-semibold text-gray-800",
                    children: "藥品申領通知",
                  }),
                ],
              }),
              n.jsxs("div", {
                className: "flex items-center space-x-4",
                children: [
                  f === "urgentOnly" &&
                    n.jsx("span", {
                      className: "text-sm text-red-600 font-semibold",
                      children: "僅顯示緊急申領",
                    }),
                  n.jsxs("span", {
                    className: "text-sm text-gray-500 font-medium",
                    children: [
                      f === "urgentOnly"
                        ? e.filter(
                            (w) =>
                              w.state === "等待過帳" &&
                              w.actionType === "緊急申領"
                          ).length
                        : e.filter((w) => w.state === "等待過帳").length,
                      " 項待處理",
                    ],
                  }),
                  n.jsxs("span", {
                    className: "text-sm text-gray-500 font-medium",
                    children: [Math.min(r + u, z.length), "/", z.length],
                  }),
                ],
              }),
            ],
          }),
        }),
        n.jsx("div", {
          className: "flex-1 p-1 min-h-0 overflow-hidden flex flex-col gap-2",
          children: C.map((w) =>
            n.jsx("div", { className: "flex-1 min-h-0", children: p(w) }, w.id)
          ),
        }),
      ],
    });
  },
  nd = ({
    internalRequests: e,
    isFullscreen: t = !1,
    showInFocus: r,
    onFocusToggle: s,
    gridHeight: l = 2,
  }) =>
    t
      ? n.jsx(ep, { internalRequests: e, gridHeight: l })
      : n.jsx(J0, { internalRequests: e, showInFocus: r, onFocusToggle: s }),
  tp = ({
    isOpen: e,
    onClose: t,
    dashboardData: r,
    lastRefresh: s,
    sectionVisibility: l,
  }) => {
    const [a, i] = b.useState(new Date()),
      [o, u] = b.useState(_0());
    b.useEffect(() => {
      if (!e) return;
      const f = setInterval(() => {
        i(new Date());
      }, 1e3);
      return () => clearInterval(f);
    }, [e]),
      b.useEffect(() => {
        Oo(o);
      }, [o]),
      b.useEffect(() => {
        Oo(o);
      }, [o]),
      b.useEffect(() => {
        const f = (d) => {
          d.key === "Escape" && t();
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
    const c = (f, d) => {
        u((x) => ({ ...x, [f]: { ...x[f], position: d } }));
      },
      m = (f, d) => {
        u((x) => ({ ...x, [f]: { ...x[f], ...d } }));
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
                          className: `text-blue-400 ${Po.xlarge}`,
                        }),
                        n.jsx("h1", {
                          className: `${wt.subTitle} font-bold`,
                          children: "戰情白板 - 專注顯示模式",
                        }),
                      ],
                    }),
                    n.jsx("div", {
                      className: `${wt.subTitle} font-mono`,
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
                        className: `text-gray-300 ${wt.content}`,
                        children: ["最後更新: ", s.toLocaleTimeString("zh-TW")],
                      }),
                    n.jsx("button", {
                      onClick: t,
                      className:
                        "p-2 hover:bg-gray-700 rounded-lg transition-colors",
                      title: "退出專注模式 (ESC)",
                      children: n.jsx(He, { size: 24, className: Po.xlarge }),
                    }),
                  ],
                }),
              ],
            }),
            n.jsx("div", {
              className: "flex-1 p-3 overflow-hidden",
              children: n.jsx("div", {
                className: "h-full grid grid-cols-8 grid-rows-6 gap-4",
                children: Object.entries(l).some(([f, d]) => d)
                  ? n.jsxs(n.Fragment, {
                      children: [
                        l.bulletins &&
                          n.jsx(De, {
                            sectionKey: "bulletins",
                            gridData: o.bulletins,
                            onPositionChange: c,
                            onSizeChange: m,
                            gridArea: Ce(o.bulletins.position, {
                              row: o.bulletins.row,
                              col: o.bulletins.col,
                            }),
                            children: n.jsx(ja, {
                              bulletins: r.bulletins,
                              isFullscreen: !0,
                            }),
                          }),
                        l.bulletins &&
                          n.jsx(De, {
                            sectionKey: "bulletins",
                            gridData: o.bulletins,
                            onPositionChange: c,
                            onSizeChange: m,
                            gridArea: Ce(o.bulletins.position, {
                              row: o.bulletins.row,
                              col: o.bulletins.col,
                            }),
                            children: n.jsx(ja, {
                              bulletins: r.bulletins,
                              isFullscreen: !0,
                            }),
                          }),
                        l.tasks &&
                          n.jsx(De, {
                            sectionKey: "tasks",
                            gridData: o.tasks,
                            onPositionChange: c,
                            onSizeChange: m,
                            gridArea: Ce(o.tasks.position, {
                              row: o.tasks.row,
                              col: o.tasks.col,
                            }),
                            children: n.jsx(Na, {
                              restockTasks: r.restockTasks,
                              receivingTasks: r.receivingTasks,
                              putAwayTasks: r.putAwayTasks,
                              isFullscreen: !0,
                            }),
                          }),
                        l.tasks &&
                          n.jsx(De, {
                            sectionKey: "tasks",
                            gridData: o.tasks,
                            onPositionChange: c,
                            onSizeChange: m,
                            gridArea: Ce(o.tasks.position, {
                              row: o.tasks.row,
                              col: o.tasks.col,
                            }),
                            children: n.jsx(Na, {
                              restockTasks: r.restockTasks,
                              receivingTasks: r.receivingTasks,
                              putAwayTasks: r.putAwayTasks,
                              isFullscreen: !0,
                            }),
                          }),
                        l.incomingDrugs &&
                          n.jsx(De, {
                            sectionKey: "incomingDrugs",
                            gridData: o.incomingDrugs,
                            onPositionChange: c,
                            onSizeChange: m,
                            gridArea: Ce(o.incomingDrugs.position, {
                              row: o.incomingDrugs.row,
                              col: o.incomingDrugs.col,
                            }),
                            children: n.jsx(ba, {
                              incomingDrugs: r.incomingDrugs,
                              isFullscreen: !0,
                            }),
                          }),
                        l.incomingDrugs &&
                          n.jsx(De, {
                            sectionKey: "incomingDrugs",
                            gridData: o.incomingDrugs,
                            onPositionChange: c,
                            onSizeChange: m,
                            gridArea: Ce(o.incomingDrugs.position, {
                              row: o.incomingDrugs.row,
                              col: o.incomingDrugs.col,
                            }),
                            children: n.jsx(ba, {
                              incomingDrugs: r.incomingDrugs,
                              isFullscreen: !0,
                            }),
                          }),
                        l.outOfStock &&
                          n.jsx(De, {
                            sectionKey: "outOfStock",
                            gridData: o.outOfStock,
                            onPositionChange: c,
                            onSizeChange: m,
                            gridArea: Ce(o.outOfStock.position, {
                              row: o.outOfStock.row,
                              col: o.outOfStock.col,
                            }),
                            children: n.jsx(ka, {
                              outOfStockItems: r.outOfStockItems,
                              isFullscreen: !0,
                            }),
                          }),
                        l.outOfStock &&
                          n.jsx(De, {
                            sectionKey: "outOfStock",
                            gridData: o.outOfStock,
                            onPositionChange: c,
                            onSizeChange: m,
                            gridArea: Ce(o.outOfStock.position, {
                              row: o.outOfStock.row,
                              col: o.outOfStock.col,
                            }),
                            children: n.jsx(ka, {
                              outOfStockItems: r.outOfStockItems,
                              isFullscreen: !0,
                            }),
                          }),
                        l.drugReplacements &&
                          n.jsx(De, {
                            sectionKey: "drugReplacements",
                            gridData: o.drugReplacements,
                            onPositionChange: c,
                            onSizeChange: m,
                            gridArea: Ce(o.drugReplacements.position, {
                              row: o.drugReplacements.row,
                              col: o.drugReplacements.col,
                            }),
                            children: n.jsx(Sa, {
                              drugReplacements: r.drugReplacements,
                              isFullscreen: !0,
                            }),
                          }),
                        l.drugReplacements &&
                          n.jsx(De, {
                            sectionKey: "drugReplacements",
                            gridData: o.drugReplacements,
                            onPositionChange: c,
                            onSizeChange: m,
                            gridArea: Ce(o.drugReplacements.position, {
                              row: o.drugReplacements.row,
                              col: o.drugReplacements.col,
                            }),
                            children: n.jsx(Sa, {
                              drugReplacements: r.drugReplacements,
                              isFullscreen: !0,
                            }),
                          }),
                        l.inventory &&
                          n.jsx(De, {
                            sectionKey: "inventory",
                            gridData: o.inventory,
                            onPositionChange: c,
                            onSizeChange: m,
                            gridArea: Ce(o.inventory.position, {
                              row: o.inventory.row,
                              col: o.inventory.col,
                            }),
                            children: n.jsx(Ca, {
                              inventoryHighlights: r.inventoryHighlights,
                              isFullscreen: !0,
                            }),
                          }),
                        l.inventory &&
                          n.jsx(De, {
                            sectionKey: "inventory",
                            gridData: o.inventory,
                            onPositionChange: c,
                            onSizeChange: m,
                            gridArea: Ce(o.inventory.position, {
                              row: o.inventory.row,
                              col: o.inventory.col,
                            }),
                            children: n.jsx(Ca, {
                              inventoryHighlights: r.inventoryHighlights,
                              isFullscreen: !0,
                            }),
                          }),
                        l.internalRequests &&
                          n.jsx(De, {
                            sectionKey: "internalRequests",
                            gridData: o.internalRequests,
                            onPositionChange: c,
                            onSizeChange: m,
                            gridArea: Ce(o.internalRequests.position, {
                              row: o.internalRequests.row,
                              col: o.internalRequests.col,
                            }),
                            children: n.jsx(nd, {
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
                            className: `${wt.title} mb-4`,
                            children: "👁️",
                          }),
                          n.jsx("p", {
                            className: wt.subTitle,
                            children: "所有區塊都已隱藏",
                          }),
                          n.jsx("p", {
                            className: `${wt.content} mt-2`,
                            children: "請在一般模式下開啟需要顯示的區塊",
                          }),
                        ],
                      }),
                    }),
              }),
            }),
            n.jsx("div", {
              className: `bg-gray-800 text-gray-300 text-center py-1 ${wt.smallLabel} border-t border-gray-700`,
              children:
                "按 ESC 鍵退出專注顯示模式 | 拖拽標題移動位置 | 拖拽右下角調整大小 | 內容每 8 秒自動輪播",
            }),
          ],
        })
      : null;
  },
  rp = () => {
    const { t: e } = Rr(),
      [t, r] = b.useState(null),
      [s, l] = b.useState(!0),
      [a, i] = b.useState(null),
      [o, u] = b.useState(null),
      [c, m] = b.useState(!1),
      [f, d] = b.useState({
        bulletins: !0,
        tasks: !0,
        incomingDrugs: !0,
        outOfStock: !0,
        drugReplacements: !0,
        inventory: !0,
        internalRequests: !0,
      }),
      x = zn(),
      v = x ? `${x.Name} - ${x.Employer}` : "鴻森智能科技 - 臨床藥事科";
    b.useEffect(() => {
      (async () => {
        try {
          const D = E0();
          d(D), await rd(), await y();
        } catch (D) {
          console.error("Failed to initialize:", D),
            i("初始化失敗，請重新整理頁面");
        }
      })();
      const j = setInterval(y, 1 * 30 * 1e3);
      return () => clearInterval(j);
    }, []);
    const y = async () => {
        try {
          i(null);
          const h = await S0();
          r(h), u(new Date());
        } catch (h) {
          i("載入資料失敗，請稍後再試"),
            console.error("Failed to load dashboard data:", h);
        } finally {
          l(!1);
        }
      },
      I = () => {
        l(!0), y();
      },
      g = () => {
        y();
      },
      p = (h, j) => {
        const D = { ...f, [h]: j };
        d(D), T0(D);
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
                                const h = Sl();
                                h != null &&
                                  h.homepage &&
                                  (window.location.href = `${h.homepage}/phar_system/frontpage/`);
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
                        n.jsx(Y, { size: "large" }),
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
                                const h = Sl();
                                h != null &&
                                  h.homepage &&
                                  (window.location.href = `${h.homepage}/phar_system/frontpage/`);
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
                          children: a,
                        }),
                        n.jsx("button", {
                          onClick: I,
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
                                const h = Sl();
                                h != null &&
                                  h.homepage &&
                                  (window.location.href = `${h.homepage}/phar_system/frontpage/`);
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
                                  onClick: I,
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
                              onClick: () => m(!0),
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
                        children: n.jsx(ja, {
                          bulletins: t.bulletins,
                          onBulletinAdded: g,
                          showInFocus: f.bulletins,
                          onFocusToggle: (h) => p("bulletins", h),
                        }),
                      }),
                      n.jsx("div", {
                        className: "lg:col-span-2 xl:col-span-1",
                        children: n.jsx(Na, {
                          restockTasks: t.restockTasks,
                          receivingTasks: t.receivingTasks,
                          putAwayTasks: t.putAwayTasks,
                          showInFocus: f.tasks,
                          onFocusToggle: (h) => p("tasks", h),
                        }),
                      }),
                      n.jsx("div", {
                        children: n.jsx(ba, {
                          incomingDrugs: t.incomingDrugs,
                          showInFocus: f.incomingDrugs,
                          onFocusToggle: (h) => p("incomingDrugs", h),
                        }),
                      }),
                      n.jsx("div", {
                        children: n.jsx(ka, {
                          outOfStockItems: t.outOfStockItems,
                          onItemAdded: g,
                          showInFocus: f.outOfStock,
                          onFocusToggle: (h) => p("outOfStock", h),
                        }),
                      }),
                      n.jsx("div", {
                        children: n.jsx(Sa, {
                          drugReplacements: t.drugReplacements,
                          showInFocus: f.drugReplacements,
                          onFocusToggle: (h) => p("drugReplacements", h),
                        }),
                      }),
                      n.jsx("div", {
                        children: n.jsx(Ca, {
                          inventoryHighlights: t.inventoryHighlights,
                          showInFocus: f.inventory,
                          onFocusToggle: (h) => p("inventory", h),
                        }),
                      }),
                      n.jsx("div", {
                        className: "lg:col-span-2",
                        children: n.jsx(nd, {
                          internalRequests: t.internalRequests,
                          showInFocus: f.internalRequests,
                          onFocusToggle: (h) => p("internalRequests", h),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            n.jsx(tp, {
              isOpen: c,
              onClose: () => m(!1),
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
  np = ({ onLogin: e }) => {
    const { t } = Rr(),
      [r, s] = b.useState(""),
      [l, a] = b.useState(""),
      [i, o] = b.useState(null),
      [u, c] = b.useState(!1),
      m = async (f) => {
        f.preventDefault(), o(null), c(!0);
        try {
          const d = await Vm({ ID: r, Password: l });
          d.Code === 200
            ? (Wm(d.Data), e())
            : d.Code === -1 || d.Code === -2
            ? o(d.Result)
            : o(t("error.api"));
        } catch (d) {
          console.error("Login error:", d),
            o(d instanceof Error ? d.message : t("error.api"));
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
          i &&
            n.jsxs("div", {
              className:
                "mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center gap-2",
              children: [
                n.jsx(Be, { size: 20 }),
                n.jsx("span", { children: i }),
              ],
            }),
          n.jsxs("form", {
            onSubmit: m,
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
                    onChange: (f) => a(f.target.value),
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
                        n.jsx(Y, { size: "small\\", className: "mr-2" }),
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
function sp() {
  const [e, t] = b.useState(!1),
    [r, s] = b.useState(!1),
    [l, a] = b.useState(!0);
  b.useEffect(() => {
    (async () => {
      try {
        await rd(), t(!0);
        const u = qm();
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
    : n.jsx(Hm, { children: r ? n.jsx(rp, {}) : n.jsx(np, { onLogin: i }) });
}
Gu(document.getElementById("root")).render(
  n.jsx(b.StrictMode, { children: n.jsx(sp, {}) })
);
