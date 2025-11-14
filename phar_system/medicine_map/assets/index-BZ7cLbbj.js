(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) s(o);
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === "childList")
        for (const a of l.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && s(a);
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
  function s(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = n(o);
    fetch(o.href, l);
  }
})();
function mf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var bc = { exports: {} },
  _o = {},
  Nc = { exports: {} },
  Pe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ys = Symbol.for("react.element"),
  hf = Symbol.for("react.portal"),
  gf = Symbol.for("react.fragment"),
  xf = Symbol.for("react.strict_mode"),
  yf = Symbol.for("react.profiler"),
  vf = Symbol.for("react.provider"),
  wf = Symbol.for("react.context"),
  bf = Symbol.for("react.forward_ref"),
  Nf = Symbol.for("react.suspense"),
  jf = Symbol.for("react.memo"),
  Sf = Symbol.for("react.lazy"),
  ci = Symbol.iterator;
function Cf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ci && e[ci]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var jc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Sc = Object.assign,
  Cc = {};
function Mr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Cc),
    (this.updater = n || jc);
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
function kc() {}
kc.prototype = Mr.prototype;
function fa(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Cc),
    (this.updater = n || jc);
}
var pa = (fa.prototype = new kc());
pa.constructor = fa;
Sc(pa, Mr.prototype);
pa.isPureReactComponent = !0;
var ui = Array.isArray,
  Dc = Object.prototype.hasOwnProperty,
  ma = { current: null },
  _c = { key: !0, ref: !0, __self: !0, __source: !0 };
function Mc(e, t, n) {
  var s,
    o = {},
    l = null,
    a = null;
  if (t != null)
    for (s in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      Dc.call(t, s) && !_c.hasOwnProperty(s) && (o[s] = t[s]);
  var i = arguments.length - 2;
  if (i === 1) o.children = n;
  else if (1 < i) {
    for (var c = Array(i), g = 0; g < i; g++) c[g] = arguments[g + 2];
    o.children = c;
  }
  if (e && e.defaultProps)
    for (s in ((i = e.defaultProps), i)) o[s] === void 0 && (o[s] = i[s]);
  return {
    $$typeof: ys,
    type: e,
    key: l,
    ref: a,
    props: o,
    _owner: ma.current,
  };
}
function kf(e, t) {
  return {
    $$typeof: ys,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ha(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ys;
}
function Df(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var di = /\/+/g;
function qo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Df("" + e.key)
    : t.toString(36);
}
function Hs(e, t, n, s, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (l) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ys:
          case hf:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = s === "" ? "." + qo(a, 0) : s),
      ui(o)
        ? ((n = ""),
          e != null && (n = e.replace(di, "$&/") + "/"),
          Hs(o, t, n, "", function (g) {
            return g;
          }))
        : o != null &&
          (ha(o) &&
            (o = kf(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(di, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (s = s === "" ? "." : s + ":"), ui(e)))
    for (var i = 0; i < e.length; i++) {
      l = e[i];
      var c = s + qo(l, i);
      a += Hs(l, t, n, c, o);
    }
  else if (((c = Cf(e)), typeof c == "function"))
    for (e = c.call(e), i = 0; !(l = e.next()).done; )
      (l = l.value), (c = s + qo(l, i++)), (a += Hs(l, t, n, c, o));
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
  return a;
}
function Cs(e, t, n) {
  if (e == null) return e;
  var s = [],
    o = 0;
  return (
    Hs(e, s, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    s
  );
}
function _f(e) {
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
var ft = { current: null },
  Vs = { transition: null },
  Mf = {
    ReactCurrentDispatcher: ft,
    ReactCurrentBatchConfig: Vs,
    ReactCurrentOwner: ma,
  };
function Ec() {
  throw Error("act(...) is not supported in production builds of React.");
}
Pe.Children = {
  map: Cs,
  forEach: function (e, t, n) {
    Cs(
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
      Cs(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Cs(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ha(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Pe.Component = Mr;
Pe.Fragment = gf;
Pe.Profiler = yf;
Pe.PureComponent = fa;
Pe.StrictMode = xf;
Pe.Suspense = Nf;
Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mf;
Pe.act = Ec;
Pe.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var s = Sc({}, e.props),
    o = e.key,
    l = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (a = ma.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var i = e.type.defaultProps;
    for (c in t)
      Dc.call(t, c) &&
        !_c.hasOwnProperty(c) &&
        (s[c] = t[c] === void 0 && i !== void 0 ? i[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) s.children = n;
  else if (1 < c) {
    i = Array(c);
    for (var g = 0; g < c; g++) i[g] = arguments[g + 2];
    s.children = i;
  }
  return { $$typeof: ys, type: e.type, key: o, ref: l, props: s, _owner: a };
};
Pe.createContext = function (e) {
  return (
    (e = {
      $$typeof: wf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: vf, _context: e }),
    (e.Consumer = e)
  );
};
Pe.createElement = Mc;
Pe.createFactory = function (e) {
  var t = Mc.bind(null, e);
  return (t.type = e), t;
};
Pe.createRef = function () {
  return { current: null };
};
Pe.forwardRef = function (e) {
  return { $$typeof: bf, render: e };
};
Pe.isValidElement = ha;
Pe.lazy = function (e) {
  return { $$typeof: Sf, _payload: { _status: -1, _result: e }, _init: _f };
};
Pe.memo = function (e, t) {
  return { $$typeof: jf, type: e, compare: t === void 0 ? null : t };
};
Pe.startTransition = function (e) {
  var t = Vs.transition;
  Vs.transition = {};
  try {
    e();
  } finally {
    Vs.transition = t;
  }
};
Pe.unstable_act = Ec;
Pe.useCallback = function (e, t) {
  return ft.current.useCallback(e, t);
};
Pe.useContext = function (e) {
  return ft.current.useContext(e);
};
Pe.useDebugValue = function () {};
Pe.useDeferredValue = function (e) {
  return ft.current.useDeferredValue(e);
};
Pe.useEffect = function (e, t) {
  return ft.current.useEffect(e, t);
};
Pe.useId = function () {
  return ft.current.useId();
};
Pe.useImperativeHandle = function (e, t, n) {
  return ft.current.useImperativeHandle(e, t, n);
};
Pe.useInsertionEffect = function (e, t) {
  return ft.current.useInsertionEffect(e, t);
};
Pe.useLayoutEffect = function (e, t) {
  return ft.current.useLayoutEffect(e, t);
};
Pe.useMemo = function (e, t) {
  return ft.current.useMemo(e, t);
};
Pe.useReducer = function (e, t, n) {
  return ft.current.useReducer(e, t, n);
};
Pe.useRef = function (e) {
  return ft.current.useRef(e);
};
Pe.useState = function (e) {
  return ft.current.useState(e);
};
Pe.useSyncExternalStore = function (e, t, n) {
  return ft.current.useSyncExternalStore(e, t, n);
};
Pe.useTransition = function () {
  return ft.current.useTransition();
};
Pe.version = "18.3.1";
Nc.exports = Pe;
var m = Nc.exports;
const no = mf(m);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ef = m,
  If = Symbol.for("react.element"),
  Pf = Symbol.for("react.fragment"),
  Rf = Object.prototype.hasOwnProperty,
  Tf = Ef.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Af = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ic(e, t, n) {
  var s,
    o = {},
    l = null,
    a = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (s in t) Rf.call(t, s) && !Af.hasOwnProperty(s) && (o[s] = t[s]);
  if (e && e.defaultProps)
    for (s in ((t = e.defaultProps), t)) o[s] === void 0 && (o[s] = t[s]);
  return {
    $$typeof: If,
    type: e,
    key: l,
    ref: a,
    props: o,
    _owner: Tf.current,
  };
}
_o.Fragment = Pf;
_o.jsx = Ic;
_o.jsxs = Ic;
bc.exports = _o;
var r = bc.exports,
  Pc = { exports: {} },
  _t = {},
  Rc = { exports: {} },
  Tc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, V) {
    var de = j.length;
    j.push(V);
    e: for (; 0 < de; ) {
      var te = (de - 1) >>> 1,
        ae = j[te];
      if (0 < o(ae, V)) (j[te] = V), (j[de] = ae), (de = te);
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function s(j) {
    if (j.length === 0) return null;
    var V = j[0],
      de = j.pop();
    if (de !== V) {
      j[0] = de;
      e: for (var te = 0, ae = j.length, Se = ae >>> 1; te < Se; ) {
        var ue = 2 * (te + 1) - 1,
          Ce = j[ue],
          fe = ue + 1,
          Y = j[fe];
        if (0 > o(Ce, de))
          fe < ae && 0 > o(Y, Ce)
            ? ((j[te] = Y), (j[fe] = de), (te = fe))
            : ((j[te] = Ce), (j[ue] = de), (te = ue));
        else if (fe < ae && 0 > o(Y, de)) (j[te] = Y), (j[fe] = de), (te = fe);
        else break e;
      }
    }
    return V;
  }
  function o(j, V) {
    var de = j.sortIndex - V.sortIndex;
    return de !== 0 ? de : j.id - V.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var a = Date,
      i = a.now();
    e.unstable_now = function () {
      return a.now() - i;
    };
  }
  var c = [],
    g = [],
    h = 1,
    p = null,
    f = 3,
    b = !1,
    w = !1,
    M = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    u = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(j) {
    for (var V = n(g); V !== null; ) {
      if (V.callback === null) s(g);
      else if (V.startTime <= j)
        s(g), (V.sortIndex = V.expirationTime), t(c, V);
      else break;
      V = n(g);
    }
  }
  function k(j) {
    if (((M = !1), x(j), !w))
      if (n(c) !== null) (w = !0), v(O);
      else {
        var V = n(g);
        V !== null && N(k, V.startTime - j);
      }
  }
  function O(j, V) {
    (w = !1), M && ((M = !1), u(_), (_ = -1)), (b = !0);
    var de = f;
    try {
      for (
        x(V), p = n(c);
        p !== null && (!(p.expirationTime > V) || (j && !U()));

      ) {
        var te = p.callback;
        if (typeof te == "function") {
          (p.callback = null), (f = p.priorityLevel);
          var ae = te(p.expirationTime <= V);
          (V = e.unstable_now()),
            typeof ae == "function" ? (p.callback = ae) : p === n(c) && s(c),
            x(V);
        } else s(c);
        p = n(c);
      }
      if (p !== null) var Se = !0;
      else {
        var ue = n(g);
        ue !== null && N(k, ue.startTime - V), (Se = !1);
      }
      return Se;
    } finally {
      (p = null), (f = de), (b = !1);
    }
  }
  var I = !1,
    A = null,
    _ = -1,
    ee = 5,
    S = -1;
  function U() {
    return !(e.unstable_now() - S < ee);
  }
  function q() {
    if (A !== null) {
      var j = e.unstable_now();
      S = j;
      var V = !0;
      try {
        V = A(!0, j);
      } finally {
        V ? P() : ((I = !1), (A = null));
      }
    } else I = !1;
  }
  var P;
  if (typeof d == "function")
    P = function () {
      d(q);
    };
  else if (typeof MessageChannel < "u") {
    var T = new MessageChannel(),
      se = T.port2;
    (T.port1.onmessage = q),
      (P = function () {
        se.postMessage(null);
      });
  } else
    P = function () {
      C(q, 0);
    };
  function v(j) {
    (A = j), I || ((I = !0), P());
  }
  function N(j, V) {
    _ = C(function () {
      j(e.unstable_now());
    }, V);
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
      w || b || ((w = !0), v(O));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (ee = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (j) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = f;
      }
      var de = f;
      f = V;
      try {
        return j();
      } finally {
        f = de;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, V) {
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
      var de = f;
      f = j;
      try {
        return V();
      } finally {
        f = de;
      }
    }),
    (e.unstable_scheduleCallback = function (j, V, de) {
      var te = e.unstable_now();
      switch (
        (typeof de == "object" && de !== null
          ? ((de = de.delay),
            (de = typeof de == "number" && 0 < de ? te + de : te))
          : (de = te),
        j)
      ) {
        case 1:
          var ae = -1;
          break;
        case 2:
          ae = 250;
          break;
        case 5:
          ae = 1073741823;
          break;
        case 4:
          ae = 1e4;
          break;
        default:
          ae = 5e3;
      }
      return (
        (ae = de + ae),
        (j = {
          id: h++,
          callback: V,
          priorityLevel: j,
          startTime: de,
          expirationTime: ae,
          sortIndex: -1,
        }),
        de > te
          ? ((j.sortIndex = de),
            t(g, j),
            n(c) === null &&
              j === n(g) &&
              (M ? (u(_), (_ = -1)) : (M = !0), N(k, de - te)))
          : ((j.sortIndex = ae), t(c, j), w || b || ((w = !0), v(O))),
        j
      );
    }),
    (e.unstable_shouldYield = U),
    (e.unstable_wrapCallback = function (j) {
      var V = f;
      return function () {
        var de = f;
        f = V;
        try {
          return j.apply(this, arguments);
        } finally {
          f = de;
        }
      };
    });
})(Tc);
Rc.exports = Tc;
var $f = Rc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Of = m,
  Dt = $f;
function le(e) {
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
var Ac = new Set(),
  ts = {};
function qn(e, t) {
  br(e, t), br(e + "Capture", t);
}
function br(e, t) {
  for (ts[e] = t, e = 0; e < t.length; e++) Ac.add(t[e]);
}
var cn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  vl = Object.prototype.hasOwnProperty,
  Lf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  fi = {},
  pi = {};
function Uf(e) {
  return vl.call(pi, e)
    ? !0
    : vl.call(fi, e)
    ? !1
    : Lf.test(e)
    ? (pi[e] = !0)
    : ((fi[e] = !0), !1);
}
function Bf(e, t, n, s) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return s
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function zf(e, t, n, s) {
  if (t === null || typeof t > "u" || Bf(e, t, n, s)) return !0;
  if (s) return !1;
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
function pt(e, t, n, s, o, l, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = s),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = a);
}
var ot = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ot[e] = new pt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ot[t] = new pt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ot[e] = new pt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ot[e] = new pt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ot[e] = new pt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ot[e] = new pt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ot[e] = new pt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ot[e] = new pt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ot[e] = new pt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ga = /[\-:]([a-z])/g;
function xa(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ga, xa);
    ot[t] = new pt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ga, xa);
    ot[t] = new pt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ga, xa);
  ot[t] = new pt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ot[e] = new pt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ot.xlinkHref = new pt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ot[e] = new pt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ya(e, t, n, s) {
  var o = ot.hasOwnProperty(t) ? ot[t] : null;
  (o !== null
    ? o.type !== 0
    : s ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (zf(t, n, o, s) && (n = null),
    s || o === null
      ? Uf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (s = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            s ? e.setAttributeNS(s, t, n) : e.setAttribute(t, n))));
}
var pn = Of.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ks = Symbol.for("react.element"),
  nr = Symbol.for("react.portal"),
  rr = Symbol.for("react.fragment"),
  va = Symbol.for("react.strict_mode"),
  wl = Symbol.for("react.profiler"),
  $c = Symbol.for("react.provider"),
  Oc = Symbol.for("react.context"),
  wa = Symbol.for("react.forward_ref"),
  bl = Symbol.for("react.suspense"),
  Nl = Symbol.for("react.suspense_list"),
  ba = Symbol.for("react.memo"),
  gn = Symbol.for("react.lazy"),
  Lc = Symbol.for("react.offscreen"),
  mi = Symbol.iterator;
function Tr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (mi && e[mi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ve = Object.assign,
  Yo;
function Gr(e) {
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
var Xo = !1;
function Qo(e, t) {
  if (!e || Xo) return "";
  Xo = !0;
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
        } catch (g) {
          var s = g;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (g) {
          s = g;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (g) {
        s = g;
      }
      e();
    }
  } catch (g) {
    if (g && s && typeof g.stack == "string") {
      for (
        var o = g.stack.split(`
`),
          l = s.stack.split(`
`),
          a = o.length - 1,
          i = l.length - 1;
        1 <= a && 0 <= i && o[a] !== l[i];

      )
        i--;
      for (; 1 <= a && 0 <= i; a--, i--)
        if (o[a] !== l[i]) {
          if (a !== 1 || i !== 1)
            do
              if ((a--, i--, 0 > i || o[a] !== l[i])) {
                var c =
                  `
` + o[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    c.includes("<anonymous>") &&
                    (c = c.replace("<anonymous>", e.displayName)),
                  c
                );
              }
            while (1 <= a && 0 <= i);
          break;
        }
    }
  } finally {
    (Xo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Gr(e) : "";
}
function Gf(e) {
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
      return (e = Qo(e.type, !1)), e;
    case 11:
      return (e = Qo(e.type.render, !1)), e;
    case 1:
      return (e = Qo(e.type, !0)), e;
    default:
      return "";
  }
}
function jl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case rr:
      return "Fragment";
    case nr:
      return "Portal";
    case wl:
      return "Profiler";
    case va:
      return "StrictMode";
    case bl:
      return "Suspense";
    case Nl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Oc:
        return (e.displayName || "Context") + ".Consumer";
      case $c:
        return (e._context.displayName || "Context") + ".Provider";
      case wa:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ba:
        return (
          (t = e.displayName || null), t !== null ? t : jl(e.type) || "Memo"
        );
      case gn:
        (t = e._payload), (e = e._init);
        try {
          return jl(e(t));
        } catch {}
    }
  return null;
}
function Ff(e) {
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
      return jl(t);
    case 8:
      return t === va ? "StrictMode" : "Mode";
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
function En(e) {
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
function Uc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Hf(e) {
  var t = Uc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    s = "" + e[t];
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
        set: function (a) {
          (s = "" + a), l.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
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
function Ds(e) {
  e._valueTracker || (e._valueTracker = Hf(e));
}
function Bc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    s = "";
  return (
    e && (s = Uc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = s),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ro(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Sl(e, t) {
  var n = t.checked;
  return Ve({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function hi(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    s = t.checked != null ? t.checked : t.defaultChecked;
  (n = En(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: s,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function zc(e, t) {
  (t = t.checked), t != null && ya(e, "checked", t, !1);
}
function Cl(e, t) {
  zc(e, t);
  var n = En(t.value),
    s = t.type;
  if (n != null)
    s === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (s === "submit" || s === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? kl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && kl(e, t.type, En(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function gi(e, t, n) {
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
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function kl(e, t, n) {
  (t !== "number" || ro(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Fr = Array.isArray;
function hr(e, t, n, s) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && s && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + En(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), s && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Dl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(le(91));
  return Ve({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function xi(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(le(92));
      if (Fr(n)) {
        if (1 < n.length) throw Error(le(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: En(n) };
}
function Gc(e, t) {
  var n = En(t.value),
    s = En(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    s != null && (e.defaultValue = "" + s);
}
function yi(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Fc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function _l(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Fc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var _s,
  Hc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, s, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, s, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        _s = _s || document.createElement("div"),
          _s.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = _s.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ns(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Wr = {
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
  Vf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Wr).forEach(function (e) {
  Vf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Wr[t] = Wr[e]);
  });
});
function Vc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Wr.hasOwnProperty(e) && Wr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Wc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var s = n.indexOf("--") === 0,
        o = Vc(n, t[n], s);
      n === "float" && (n = "cssFloat"), s ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Wf = Ve(
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
function Ml(e, t) {
  if (t) {
    if (Wf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(le(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(le(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(le(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(le(62));
  }
}
function El(e, t) {
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
var Il = null;
function Na(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Pl = null,
  gr = null,
  xr = null;
function vi(e) {
  if ((e = bs(e))) {
    if (typeof Pl != "function") throw Error(le(280));
    var t = e.stateNode;
    t && ((t = Ro(t)), Pl(e.stateNode, e.type, t));
  }
}
function qc(e) {
  gr ? (xr ? xr.push(e) : (xr = [e])) : (gr = e);
}
function Yc() {
  if (gr) {
    var e = gr,
      t = xr;
    if (((xr = gr = null), vi(e), t)) for (e = 0; e < t.length; e++) vi(t[e]);
  }
}
function Xc(e, t) {
  return e(t);
}
function Qc() {}
var Ko = !1;
function Kc(e, t, n) {
  if (Ko) return e(t, n);
  Ko = !0;
  try {
    return Xc(e, t, n);
  } finally {
    (Ko = !1), (gr !== null || xr !== null) && (Qc(), Yc());
  }
}
function rs(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var s = Ro(n);
  if (s === null) return null;
  n = s[t];
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
  if (n && typeof n != "function") throw Error(le(231, t, typeof n));
  return n;
}
var Rl = !1;
if (cn)
  try {
    var Ar = {};
    Object.defineProperty(Ar, "passive", {
      get: function () {
        Rl = !0;
      },
    }),
      window.addEventListener("test", Ar, Ar),
      window.removeEventListener("test", Ar, Ar);
  } catch {
    Rl = !1;
  }
function qf(e, t, n, s, o, l, a, i, c) {
  var g = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, g);
  } catch (h) {
    this.onError(h);
  }
}
var qr = !1,
  so = null,
  oo = !1,
  Tl = null,
  Yf = {
    onError: function (e) {
      (qr = !0), (so = e);
    },
  };
function Xf(e, t, n, s, o, l, a, i, c) {
  (qr = !1), (so = null), qf.apply(Yf, arguments);
}
function Qf(e, t, n, s, o, l, a, i, c) {
  if ((Xf.apply(this, arguments), qr)) {
    if (qr) {
      var g = so;
      (qr = !1), (so = null);
    } else throw Error(le(198));
    oo || ((oo = !0), (Tl = g));
  }
}
function Yn(e) {
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
function Jc(e) {
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
function wi(e) {
  if (Yn(e) !== e) throw Error(le(188));
}
function Kf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Yn(e)), t === null)) throw Error(le(188));
    return t !== e ? null : e;
  }
  for (var n = e, s = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var l = o.alternate;
    if (l === null) {
      if (((s = o.return), s !== null)) {
        n = s;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return wi(o), e;
        if (l === s) return wi(o), t;
        l = l.sibling;
      }
      throw Error(le(188));
    }
    if (n.return !== s.return) (n = o), (s = l);
    else {
      for (var a = !1, i = o.child; i; ) {
        if (i === n) {
          (a = !0), (n = o), (s = l);
          break;
        }
        if (i === s) {
          (a = !0), (s = o), (n = l);
          break;
        }
        i = i.sibling;
      }
      if (!a) {
        for (i = l.child; i; ) {
          if (i === n) {
            (a = !0), (n = l), (s = o);
            break;
          }
          if (i === s) {
            (a = !0), (s = l), (n = o);
            break;
          }
          i = i.sibling;
        }
        if (!a) throw Error(le(189));
      }
    }
    if (n.alternate !== s) throw Error(le(190));
  }
  if (n.tag !== 3) throw Error(le(188));
  return n.stateNode.current === n ? e : t;
}
function Zc(e) {
  return (e = Kf(e)), e !== null ? eu(e) : null;
}
function eu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = eu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var tu = Dt.unstable_scheduleCallback,
  bi = Dt.unstable_cancelCallback,
  Jf = Dt.unstable_shouldYield,
  Zf = Dt.unstable_requestPaint,
  Xe = Dt.unstable_now,
  ep = Dt.unstable_getCurrentPriorityLevel,
  ja = Dt.unstable_ImmediatePriority,
  nu = Dt.unstable_UserBlockingPriority,
  lo = Dt.unstable_NormalPriority,
  tp = Dt.unstable_LowPriority,
  ru = Dt.unstable_IdlePriority,
  Mo = null,
  Jt = null;
function np(e) {
  if (Jt && typeof Jt.onCommitFiberRoot == "function")
    try {
      Jt.onCommitFiberRoot(Mo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ht = Math.clz32 ? Math.clz32 : op,
  rp = Math.log,
  sp = Math.LN2;
function op(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((rp(e) / sp) | 0)) | 0;
}
var Ms = 64,
  Es = 4194304;
function Hr(e) {
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
function ao(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var s = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var i = a & ~o;
    i !== 0 ? (s = Hr(i)) : ((l &= a), l !== 0 && (s = Hr(l)));
  } else (a = n & ~o), a !== 0 ? (s = Hr(a)) : l !== 0 && (s = Hr(l));
  if (s === 0) return 0;
  if (
    t !== 0 &&
    t !== s &&
    !(t & o) &&
    ((o = s & -s), (l = t & -t), o >= l || (o === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((s & 4 && (s |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= s; 0 < t; )
      (n = 31 - Ht(t)), (o = 1 << n), (s |= e[n]), (t &= ~o);
  return s;
}
function lp(e, t) {
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
function ap(e, t) {
  for (
    var n = e.suspendedLanes,
      s = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var a = 31 - Ht(l),
      i = 1 << a,
      c = o[a];
    c === -1
      ? (!(i & n) || i & s) && (o[a] = lp(i, t))
      : c <= t && (e.expiredLanes |= i),
      (l &= ~i);
  }
}
function Al(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function su() {
  var e = Ms;
  return (Ms <<= 1), !(Ms & 4194240) && (Ms = 64), e;
}
function Jo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function vs(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ht(t)),
    (e[t] = n);
}
function ip(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var s = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Ht(n),
      l = 1 << o;
    (t[o] = 0), (s[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function Sa(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var s = 31 - Ht(n),
      o = 1 << s;
    (o & t) | (e[s] & t) && (e[s] |= t), (n &= ~o);
  }
}
var Ae = 0;
function ou(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var lu,
  Ca,
  au,
  iu,
  cu,
  $l = !1,
  Is = [],
  Nn = null,
  jn = null,
  Sn = null,
  ss = new Map(),
  os = new Map(),
  yn = [],
  cp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ni(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Nn = null;
      break;
    case "dragenter":
    case "dragleave":
      jn = null;
      break;
    case "mouseover":
    case "mouseout":
      Sn = null;
      break;
    case "pointerover":
    case "pointerout":
      ss.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      os.delete(t.pointerId);
  }
}
function $r(e, t, n, s, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: s,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = bs(t)), t !== null && Ca(t)),
      e)
    : ((e.eventSystemFlags |= s),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function up(e, t, n, s, o) {
  switch (t) {
    case "focusin":
      return (Nn = $r(Nn, e, t, n, s, o)), !0;
    case "dragenter":
      return (jn = $r(jn, e, t, n, s, o)), !0;
    case "mouseover":
      return (Sn = $r(Sn, e, t, n, s, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return ss.set(l, $r(ss.get(l) || null, e, t, n, s, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), os.set(l, $r(os.get(l) || null, e, t, n, s, o)), !0
      );
  }
  return !1;
}
function uu(e) {
  var t = On(e.target);
  if (t !== null) {
    var n = Yn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Jc(n)), t !== null)) {
          (e.blockedOn = t),
            cu(e.priority, function () {
              au(n);
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
function Ws(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ol(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var s = new n.constructor(n.type, n);
      (Il = s), n.target.dispatchEvent(s), (Il = null);
    } else return (t = bs(n)), t !== null && Ca(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function ji(e, t, n) {
  Ws(e) && n.delete(t);
}
function dp() {
  ($l = !1),
    Nn !== null && Ws(Nn) && (Nn = null),
    jn !== null && Ws(jn) && (jn = null),
    Sn !== null && Ws(Sn) && (Sn = null),
    ss.forEach(ji),
    os.forEach(ji);
}
function Or(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    $l ||
      (($l = !0),
      Dt.unstable_scheduleCallback(Dt.unstable_NormalPriority, dp)));
}
function ls(e) {
  function t(o) {
    return Or(o, e);
  }
  if (0 < Is.length) {
    Or(Is[0], e);
    for (var n = 1; n < Is.length; n++) {
      var s = Is[n];
      s.blockedOn === e && (s.blockedOn = null);
    }
  }
  for (
    Nn !== null && Or(Nn, e),
      jn !== null && Or(jn, e),
      Sn !== null && Or(Sn, e),
      ss.forEach(t),
      os.forEach(t),
      n = 0;
    n < yn.length;
    n++
  )
    (s = yn[n]), s.blockedOn === e && (s.blockedOn = null);
  for (; 0 < yn.length && ((n = yn[0]), n.blockedOn === null); )
    uu(n), n.blockedOn === null && yn.shift();
}
var yr = pn.ReactCurrentBatchConfig,
  io = !0;
function fp(e, t, n, s) {
  var o = Ae,
    l = yr.transition;
  yr.transition = null;
  try {
    (Ae = 1), ka(e, t, n, s);
  } finally {
    (Ae = o), (yr.transition = l);
  }
}
function pp(e, t, n, s) {
  var o = Ae,
    l = yr.transition;
  yr.transition = null;
  try {
    (Ae = 4), ka(e, t, n, s);
  } finally {
    (Ae = o), (yr.transition = l);
  }
}
function ka(e, t, n, s) {
  if (io) {
    var o = Ol(e, t, n, s);
    if (o === null) il(e, t, s, co, n), Ni(e, s);
    else if (up(o, e, t, n, s)) s.stopPropagation();
    else if ((Ni(e, s), t & 4 && -1 < cp.indexOf(e))) {
      for (; o !== null; ) {
        var l = bs(o);
        if (
          (l !== null && lu(l),
          (l = Ol(e, t, n, s)),
          l === null && il(e, t, s, co, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && s.stopPropagation();
    } else il(e, t, s, null, n);
  }
}
var co = null;
function Ol(e, t, n, s) {
  if (((co = null), (e = Na(s)), (e = On(e)), e !== null))
    if (((t = Yn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Jc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (co = e), null;
}
function du(e) {
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
      switch (ep()) {
        case ja:
          return 1;
        case nu:
          return 4;
        case lo:
        case tp:
          return 16;
        case ru:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var wn = null,
  Da = null,
  qs = null;
function fu() {
  if (qs) return qs;
  var e,
    t = Da,
    n = t.length,
    s,
    o = "value" in wn ? wn.value : wn.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (s = 1; s <= a && t[n - s] === o[l - s]; s++);
  return (qs = o.slice(e, 1 < s ? 1 - s : void 0));
}
function Ys(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ps() {
  return !0;
}
function Si() {
  return !1;
}
function Mt(e) {
  function t(n, s, o, l, a) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = s),
      (this.nativeEvent = l),
      (this.target = a),
      (this.currentTarget = null);
    for (var i in e)
      e.hasOwnProperty(i) && ((n = e[i]), (this[i] = n ? n(l) : l[i]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? Ps
        : Si),
      (this.isPropagationStopped = Si),
      this
    );
  }
  return (
    Ve(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ps));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ps));
      },
      persist: function () {},
      isPersistent: Ps,
    }),
    t
  );
}
var Er = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  _a = Mt(Er),
  ws = Ve({}, Er, { view: 0, detail: 0 }),
  mp = Mt(ws),
  Zo,
  el,
  Lr,
  Eo = Ve({}, ws, {
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
    getModifierState: Ma,
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
        : (e !== Lr &&
            (Lr && e.type === "mousemove"
              ? ((Zo = e.screenX - Lr.screenX), (el = e.screenY - Lr.screenY))
              : (el = Zo = 0),
            (Lr = e)),
          Zo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : el;
    },
  }),
  Ci = Mt(Eo),
  hp = Ve({}, Eo, { dataTransfer: 0 }),
  gp = Mt(hp),
  xp = Ve({}, ws, { relatedTarget: 0 }),
  tl = Mt(xp),
  yp = Ve({}, Er, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  vp = Mt(yp),
  wp = Ve({}, Er, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  bp = Mt(wp),
  Np = Ve({}, Er, { data: 0 }),
  ki = Mt(Np),
  jp = {
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
  Sp = {
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
  Cp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function kp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Cp[e]) ? !!t[e] : !1;
}
function Ma() {
  return kp;
}
var Dp = Ve({}, ws, {
    key: function (e) {
      if (e.key) {
        var t = jp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ys(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Sp[e.keyCode] || "Unidentified"
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
    getModifierState: Ma,
    charCode: function (e) {
      return e.type === "keypress" ? Ys(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ys(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  _p = Mt(Dp),
  Mp = Ve({}, Eo, {
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
  Di = Mt(Mp),
  Ep = Ve({}, ws, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ma,
  }),
  Ip = Mt(Ep),
  Pp = Ve({}, Er, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Rp = Mt(Pp),
  Tp = Ve({}, Eo, {
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
  Ap = Mt(Tp),
  $p = [9, 13, 27, 32],
  Ea = cn && "CompositionEvent" in window,
  Yr = null;
cn && "documentMode" in document && (Yr = document.documentMode);
var Op = cn && "TextEvent" in window && !Yr,
  pu = cn && (!Ea || (Yr && 8 < Yr && 11 >= Yr)),
  _i = " ",
  Mi = !1;
function mu(e, t) {
  switch (e) {
    case "keyup":
      return $p.indexOf(t.keyCode) !== -1;
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
function hu(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var sr = !1;
function Lp(e, t) {
  switch (e) {
    case "compositionend":
      return hu(t);
    case "keypress":
      return t.which !== 32 ? null : ((Mi = !0), _i);
    case "textInput":
      return (e = t.data), e === _i && Mi ? null : e;
    default:
      return null;
  }
}
function Up(e, t) {
  if (sr)
    return e === "compositionend" || (!Ea && mu(e, t))
      ? ((e = fu()), (qs = Da = wn = null), (sr = !1), e)
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
      return pu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Bp = {
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
function Ei(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Bp[e.type] : t === "textarea";
}
function gu(e, t, n, s) {
  qc(s),
    (t = uo(t, "onChange")),
    0 < t.length &&
      ((n = new _a("onChange", "change", null, n, s)),
      e.push({ event: n, listeners: t }));
}
var Xr = null,
  as = null;
function zp(e) {
  Du(e, 0);
}
function Io(e) {
  var t = ar(e);
  if (Bc(t)) return e;
}
function Gp(e, t) {
  if (e === "change") return t;
}
var xu = !1;
if (cn) {
  var nl;
  if (cn) {
    var rl = "oninput" in document;
    if (!rl) {
      var Ii = document.createElement("div");
      Ii.setAttribute("oninput", "return;"),
        (rl = typeof Ii.oninput == "function");
    }
    nl = rl;
  } else nl = !1;
  xu = nl && (!document.documentMode || 9 < document.documentMode);
}
function Pi() {
  Xr && (Xr.detachEvent("onpropertychange", yu), (as = Xr = null));
}
function yu(e) {
  if (e.propertyName === "value" && Io(as)) {
    var t = [];
    gu(t, as, e, Na(e)), Kc(zp, t);
  }
}
function Fp(e, t, n) {
  e === "focusin"
    ? (Pi(), (Xr = t), (as = n), Xr.attachEvent("onpropertychange", yu))
    : e === "focusout" && Pi();
}
function Hp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Io(as);
}
function Vp(e, t) {
  if (e === "click") return Io(t);
}
function Wp(e, t) {
  if (e === "input" || e === "change") return Io(t);
}
function qp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Wt = typeof Object.is == "function" ? Object.is : qp;
function is(e, t) {
  if (Wt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    s = Object.keys(t);
  if (n.length !== s.length) return !1;
  for (s = 0; s < n.length; s++) {
    var o = n[s];
    if (!vl.call(t, o) || !Wt(e[o], t[o])) return !1;
  }
  return !0;
}
function Ri(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ti(e, t) {
  var n = Ri(e);
  e = 0;
  for (var s; n; ) {
    if (n.nodeType === 3) {
      if (((s = e + n.textContent.length), e <= t && s >= t))
        return { node: n, offset: t - e };
      e = s;
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
    n = Ri(n);
  }
}
function vu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? vu(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function wu() {
  for (var e = window, t = ro(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ro(e.document);
  }
  return t;
}
function Ia(e) {
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
function Yp(e) {
  var t = wu(),
    n = e.focusedElem,
    s = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    vu(n.ownerDocument.documentElement, n)
  ) {
    if (s !== null && Ia(n)) {
      if (
        ((t = s.start),
        (e = s.end),
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
          l = Math.min(s.start, o);
        (s = s.end === void 0 ? l : Math.min(s.end, o)),
          !e.extend && l > s && ((o = s), (s = l), (l = o)),
          (o = Ti(n, l));
        var a = Ti(n, s);
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          l > s
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
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
var Xp = cn && "documentMode" in document && 11 >= document.documentMode,
  or = null,
  Ll = null,
  Qr = null,
  Ul = !1;
function Ai(e, t, n) {
  var s = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ul ||
    or == null ||
    or !== ro(s) ||
    ((s = or),
    "selectionStart" in s && Ia(s)
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
    (Qr && is(Qr, s)) ||
      ((Qr = s),
      (s = uo(Ll, "onSelect")),
      0 < s.length &&
        ((t = new _a("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: s }),
        (t.target = or))));
}
function Rs(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var lr = {
    animationend: Rs("Animation", "AnimationEnd"),
    animationiteration: Rs("Animation", "AnimationIteration"),
    animationstart: Rs("Animation", "AnimationStart"),
    transitionend: Rs("Transition", "TransitionEnd"),
  },
  sl = {},
  bu = {};
cn &&
  ((bu = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete lr.animationend.animation,
    delete lr.animationiteration.animation,
    delete lr.animationstart.animation),
  "TransitionEvent" in window || delete lr.transitionend.transition);
function Po(e) {
  if (sl[e]) return sl[e];
  if (!lr[e]) return e;
  var t = lr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in bu) return (sl[e] = t[n]);
  return e;
}
var Nu = Po("animationend"),
  ju = Po("animationiteration"),
  Su = Po("animationstart"),
  Cu = Po("transitionend"),
  ku = new Map(),
  $i =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Pn(e, t) {
  ku.set(e, t), qn(t, [e]);
}
for (var ol = 0; ol < $i.length; ol++) {
  var ll = $i[ol],
    Qp = ll.toLowerCase(),
    Kp = ll[0].toUpperCase() + ll.slice(1);
  Pn(Qp, "on" + Kp);
}
Pn(Nu, "onAnimationEnd");
Pn(ju, "onAnimationIteration");
Pn(Su, "onAnimationStart");
Pn("dblclick", "onDoubleClick");
Pn("focusin", "onFocus");
Pn("focusout", "onBlur");
Pn(Cu, "onTransitionEnd");
br("onMouseEnter", ["mouseout", "mouseover"]);
br("onMouseLeave", ["mouseout", "mouseover"]);
br("onPointerEnter", ["pointerout", "pointerover"]);
br("onPointerLeave", ["pointerout", "pointerover"]);
qn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
qn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
qn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
qn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
qn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
qn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Vr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Jp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Vr));
function Oi(e, t, n) {
  var s = e.type || "unknown-event";
  (e.currentTarget = n), Qf(s, t, void 0, e), (e.currentTarget = null);
}
function Du(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var s = e[n],
      o = s.event;
    s = s.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var a = s.length - 1; 0 <= a; a--) {
          var i = s[a],
            c = i.instance,
            g = i.currentTarget;
          if (((i = i.listener), c !== l && o.isPropagationStopped())) break e;
          Oi(o, i, g), (l = c);
        }
      else
        for (a = 0; a < s.length; a++) {
          if (
            ((i = s[a]),
            (c = i.instance),
            (g = i.currentTarget),
            (i = i.listener),
            c !== l && o.isPropagationStopped())
          )
            break e;
          Oi(o, i, g), (l = c);
        }
    }
  }
  if (oo) throw ((e = Tl), (oo = !1), (Tl = null), e);
}
function Le(e, t) {
  var n = t[Hl];
  n === void 0 && (n = t[Hl] = new Set());
  var s = e + "__bubble";
  n.has(s) || (_u(t, e, 2, !1), n.add(s));
}
function al(e, t, n) {
  var s = 0;
  t && (s |= 4), _u(n, e, s, t);
}
var Ts = "_reactListening" + Math.random().toString(36).slice(2);
function cs(e) {
  if (!e[Ts]) {
    (e[Ts] = !0),
      Ac.forEach(function (n) {
        n !== "selectionchange" && (Jp.has(n) || al(n, !1, e), al(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ts] || ((t[Ts] = !0), al("selectionchange", !1, t));
  }
}
function _u(e, t, n, s) {
  switch (du(t)) {
    case 1:
      var o = fp;
      break;
    case 4:
      o = pp;
      break;
    default:
      o = ka;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Rl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    s
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function il(e, t, n, s, o) {
  var l = s;
  if (!(t & 1) && !(t & 2) && s !== null)
    e: for (;;) {
      if (s === null) return;
      var a = s.tag;
      if (a === 3 || a === 4) {
        var i = s.stateNode.containerInfo;
        if (i === o || (i.nodeType === 8 && i.parentNode === o)) break;
        if (a === 4)
          for (a = s.return; a !== null; ) {
            var c = a.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = a.stateNode.containerInfo),
              c === o || (c.nodeType === 8 && c.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; i !== null; ) {
          if (((a = On(i)), a === null)) return;
          if (((c = a.tag), c === 5 || c === 6)) {
            s = l = a;
            continue e;
          }
          i = i.parentNode;
        }
      }
      s = s.return;
    }
  Kc(function () {
    var g = l,
      h = Na(n),
      p = [];
    e: {
      var f = ku.get(e);
      if (f !== void 0) {
        var b = _a,
          w = e;
        switch (e) {
          case "keypress":
            if (Ys(n) === 0) break e;
          case "keydown":
          case "keyup":
            b = _p;
            break;
          case "focusin":
            (w = "focus"), (b = tl);
            break;
          case "focusout":
            (w = "blur"), (b = tl);
            break;
          case "beforeblur":
          case "afterblur":
            b = tl;
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
            b = Ci;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            b = gp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            b = Ip;
            break;
          case Nu:
          case ju:
          case Su:
            b = vp;
            break;
          case Cu:
            b = Rp;
            break;
          case "scroll":
            b = mp;
            break;
          case "wheel":
            b = Ap;
            break;
          case "copy":
          case "cut":
          case "paste":
            b = bp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            b = Di;
        }
        var M = (t & 4) !== 0,
          C = !M && e === "scroll",
          u = M ? (f !== null ? f + "Capture" : null) : f;
        M = [];
        for (var d = g, x; d !== null; ) {
          x = d;
          var k = x.stateNode;
          if (
            (x.tag === 5 &&
              k !== null &&
              ((x = k),
              u !== null && ((k = rs(d, u)), k != null && M.push(us(d, k, x)))),
            C)
          )
            break;
          d = d.return;
        }
        0 < M.length &&
          ((f = new b(f, w, null, n, h)), p.push({ event: f, listeners: M }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (b = e === "mouseout" || e === "pointerout"),
          f &&
            n !== Il &&
            (w = n.relatedTarget || n.fromElement) &&
            (On(w) || w[un]))
        )
          break e;
        if (
          (b || f) &&
          ((f =
            h.window === h
              ? h
              : (f = h.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          b
            ? ((w = n.relatedTarget || n.toElement),
              (b = g),
              (w = w ? On(w) : null),
              w !== null &&
                ((C = Yn(w)), w !== C || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((b = null), (w = g)),
          b !== w)
        ) {
          if (
            ((M = Ci),
            (k = "onMouseLeave"),
            (u = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((M = Di),
              (k = "onPointerLeave"),
              (u = "onPointerEnter"),
              (d = "pointer")),
            (C = b == null ? f : ar(b)),
            (x = w == null ? f : ar(w)),
            (f = new M(k, d + "leave", b, n, h)),
            (f.target = C),
            (f.relatedTarget = x),
            (k = null),
            On(h) === g &&
              ((M = new M(u, d + "enter", w, n, h)),
              (M.target = x),
              (M.relatedTarget = C),
              (k = M)),
            (C = k),
            b && w)
          )
            t: {
              for (M = b, u = w, d = 0, x = M; x; x = tr(x)) d++;
              for (x = 0, k = u; k; k = tr(k)) x++;
              for (; 0 < d - x; ) (M = tr(M)), d--;
              for (; 0 < x - d; ) (u = tr(u)), x--;
              for (; d--; ) {
                if (M === u || (u !== null && M === u.alternate)) break t;
                (M = tr(M)), (u = tr(u));
              }
              M = null;
            }
          else M = null;
          b !== null && Li(p, f, b, M, !1),
            w !== null && C !== null && Li(p, C, w, M, !0);
        }
      }
      e: {
        if (
          ((f = g ? ar(g) : window),
          (b = f.nodeName && f.nodeName.toLowerCase()),
          b === "select" || (b === "input" && f.type === "file"))
        )
          var O = Gp;
        else if (Ei(f))
          if (xu) O = Wp;
          else {
            O = Hp;
            var I = Fp;
          }
        else
          (b = f.nodeName) &&
            b.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (O = Vp);
        if (O && (O = O(e, g))) {
          gu(p, O, n, h);
          break e;
        }
        I && I(e, f, g),
          e === "focusout" &&
            (I = f._wrapperState) &&
            I.controlled &&
            f.type === "number" &&
            kl(f, "number", f.value);
      }
      switch (((I = g ? ar(g) : window), e)) {
        case "focusin":
          (Ei(I) || I.contentEditable === "true") &&
            ((or = I), (Ll = g), (Qr = null));
          break;
        case "focusout":
          Qr = Ll = or = null;
          break;
        case "mousedown":
          Ul = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ul = !1), Ai(p, n, h);
          break;
        case "selectionchange":
          if (Xp) break;
        case "keydown":
        case "keyup":
          Ai(p, n, h);
      }
      var A;
      if (Ea)
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
        sr
          ? mu(e, n) && (_ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ &&
        (pu &&
          n.locale !== "ko" &&
          (sr || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && sr && (A = fu())
            : ((wn = h),
              (Da = "value" in wn ? wn.value : wn.textContent),
              (sr = !0))),
        (I = uo(g, _)),
        0 < I.length &&
          ((_ = new ki(_, e, null, n, h)),
          p.push({ event: _, listeners: I }),
          A ? (_.data = A) : ((A = hu(n)), A !== null && (_.data = A)))),
        (A = Op ? Lp(e, n) : Up(e, n)) &&
          ((g = uo(g, "onBeforeInput")),
          0 < g.length &&
            ((h = new ki("onBeforeInput", "beforeinput", null, n, h)),
            p.push({ event: h, listeners: g }),
            (h.data = A)));
    }
    Du(p, t);
  });
}
function us(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function uo(e, t) {
  for (var n = t + "Capture", s = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = rs(e, n)),
      l != null && s.unshift(us(e, l, o)),
      (l = rs(e, t)),
      l != null && s.push(us(e, l, o))),
      (e = e.return);
  }
  return s;
}
function tr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Li(e, t, n, s, o) {
  for (var l = t._reactName, a = []; n !== null && n !== s; ) {
    var i = n,
      c = i.alternate,
      g = i.stateNode;
    if (c !== null && c === s) break;
    i.tag === 5 &&
      g !== null &&
      ((i = g),
      o
        ? ((c = rs(n, l)), c != null && a.unshift(us(n, c, i)))
        : o || ((c = rs(n, l)), c != null && a.push(us(n, c, i)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Zp = /\r\n?/g,
  em = /\u0000|\uFFFD/g;
function Ui(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Zp,
      `
`
    )
    .replace(em, "");
}
function As(e, t, n) {
  if (((t = Ui(t)), Ui(e) !== t && n)) throw Error(le(425));
}
function fo() {}
var Bl = null,
  zl = null;
function Gl(e, t) {
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
var Fl = typeof setTimeout == "function" ? setTimeout : void 0,
  tm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Bi = typeof Promise == "function" ? Promise : void 0,
  nm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Bi < "u"
      ? function (e) {
          return Bi.resolve(null).then(e).catch(rm);
        }
      : Fl;
function rm(e) {
  setTimeout(function () {
    throw e;
  });
}
function cl(e, t) {
  var n = t,
    s = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (s === 0) {
          e.removeChild(o), ls(t);
          return;
        }
        s--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || s++;
    n = o;
  } while (n);
  ls(t);
}
function Cn(e) {
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
function zi(e) {
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
var Ir = Math.random().toString(36).slice(2),
  Kt = "__reactFiber$" + Ir,
  ds = "__reactProps$" + Ir,
  un = "__reactContainer$" + Ir,
  Hl = "__reactEvents$" + Ir,
  sm = "__reactListeners$" + Ir,
  om = "__reactHandles$" + Ir;
function On(e) {
  var t = e[Kt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[un] || n[Kt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = zi(e); e !== null; ) {
          if ((n = e[Kt])) return n;
          e = zi(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function bs(e) {
  return (
    (e = e[Kt] || e[un]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ar(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(le(33));
}
function Ro(e) {
  return e[ds] || null;
}
var Vl = [],
  ir = -1;
function Rn(e) {
  return { current: e };
}
function Ue(e) {
  0 > ir || ((e.current = Vl[ir]), (Vl[ir] = null), ir--);
}
function Oe(e, t) {
  ir++, (Vl[ir] = e.current), (e.current = t);
}
var In = {},
  ct = Rn(In),
  wt = Rn(!1),
  Gn = In;
function Nr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return In;
  var s = e.stateNode;
  if (s && s.__reactInternalMemoizedUnmaskedChildContext === t)
    return s.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    l;
  for (l in n) o[l] = t[l];
  return (
    s &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function bt(e) {
  return (e = e.childContextTypes), e != null;
}
function po() {
  Ue(wt), Ue(ct);
}
function Gi(e, t, n) {
  if (ct.current !== In) throw Error(le(168));
  Oe(ct, t), Oe(wt, n);
}
function Mu(e, t, n) {
  var s = e.stateNode;
  if (((t = t.childContextTypes), typeof s.getChildContext != "function"))
    return n;
  s = s.getChildContext();
  for (var o in s) if (!(o in t)) throw Error(le(108, Ff(e) || "Unknown", o));
  return Ve({}, n, s);
}
function mo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || In),
    (Gn = ct.current),
    Oe(ct, e),
    Oe(wt, wt.current),
    !0
  );
}
function Fi(e, t, n) {
  var s = e.stateNode;
  if (!s) throw Error(le(169));
  n
    ? ((e = Mu(e, t, Gn)),
      (s.__reactInternalMemoizedMergedChildContext = e),
      Ue(wt),
      Ue(ct),
      Oe(ct, e))
    : Ue(wt),
    Oe(wt, n);
}
var rn = null,
  To = !1,
  ul = !1;
function Eu(e) {
  rn === null ? (rn = [e]) : rn.push(e);
}
function lm(e) {
  (To = !0), Eu(e);
}
function Tn() {
  if (!ul && rn !== null) {
    ul = !0;
    var e = 0,
      t = Ae;
    try {
      var n = rn;
      for (Ae = 1; e < n.length; e++) {
        var s = n[e];
        do s = s(!0);
        while (s !== null);
      }
      (rn = null), (To = !1);
    } catch (o) {
      throw (rn !== null && (rn = rn.slice(e + 1)), tu(ja, Tn), o);
    } finally {
      (Ae = t), (ul = !1);
    }
  }
  return null;
}
var cr = [],
  ur = 0,
  ho = null,
  go = 0,
  It = [],
  Pt = 0,
  Fn = null,
  on = 1,
  ln = "";
function An(e, t) {
  (cr[ur++] = go), (cr[ur++] = ho), (ho = e), (go = t);
}
function Iu(e, t, n) {
  (It[Pt++] = on), (It[Pt++] = ln), (It[Pt++] = Fn), (Fn = e);
  var s = on;
  e = ln;
  var o = 32 - Ht(s) - 1;
  (s &= ~(1 << o)), (n += 1);
  var l = 32 - Ht(t) + o;
  if (30 < l) {
    var a = o - (o % 5);
    (l = (s & ((1 << a) - 1)).toString(32)),
      (s >>= a),
      (o -= a),
      (on = (1 << (32 - Ht(t) + o)) | (n << o) | s),
      (ln = l + e);
  } else (on = (1 << l) | (n << o) | s), (ln = e);
}
function Pa(e) {
  e.return !== null && (An(e, 1), Iu(e, 1, 0));
}
function Ra(e) {
  for (; e === ho; )
    (ho = cr[--ur]), (cr[ur] = null), (go = cr[--ur]), (cr[ur] = null);
  for (; e === Fn; )
    (Fn = It[--Pt]),
      (It[Pt] = null),
      (ln = It[--Pt]),
      (It[Pt] = null),
      (on = It[--Pt]),
      (It[Pt] = null);
}
var kt = null,
  Ct = null,
  Be = !1,
  Ft = null;
function Pu(e, t) {
  var n = Rt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Hi(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (kt = e), (Ct = Cn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (kt = e), (Ct = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Fn !== null ? { id: on, overflow: ln } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Rt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (kt = e),
            (Ct = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Wl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ql(e) {
  if (Be) {
    var t = Ct;
    if (t) {
      var n = t;
      if (!Hi(e, t)) {
        if (Wl(e)) throw Error(le(418));
        t = Cn(n.nextSibling);
        var s = kt;
        t && Hi(e, t)
          ? Pu(s, n)
          : ((e.flags = (e.flags & -4097) | 2), (Be = !1), (kt = e));
      }
    } else {
      if (Wl(e)) throw Error(le(418));
      (e.flags = (e.flags & -4097) | 2), (Be = !1), (kt = e);
    }
  }
}
function Vi(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  kt = e;
}
function $s(e) {
  if (e !== kt) return !1;
  if (!Be) return Vi(e), (Be = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Gl(e.type, e.memoizedProps))),
    t && (t = Ct))
  ) {
    if (Wl(e)) throw (Ru(), Error(le(418)));
    for (; t; ) Pu(e, t), (t = Cn(t.nextSibling));
  }
  if ((Vi(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(le(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ct = Cn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ct = null;
    }
  } else Ct = kt ? Cn(e.stateNode.nextSibling) : null;
  return !0;
}
function Ru() {
  for (var e = Ct; e; ) e = Cn(e.nextSibling);
}
function jr() {
  (Ct = kt = null), (Be = !1);
}
function Ta(e) {
  Ft === null ? (Ft = [e]) : Ft.push(e);
}
var am = pn.ReactCurrentBatchConfig;
function Ur(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(le(309));
        var s = n.stateNode;
      }
      if (!s) throw Error(le(147, e));
      var o = s,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (a) {
            var i = o.refs;
            a === null ? delete i[l] : (i[l] = a);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(le(284));
    if (!n._owner) throw Error(le(290, e));
  }
  return e;
}
function Os(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      le(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Wi(e) {
  var t = e._init;
  return t(e._payload);
}
function Tu(e) {
  function t(u, d) {
    if (e) {
      var x = u.deletions;
      x === null ? ((u.deletions = [d]), (u.flags |= 16)) : x.push(d);
    }
  }
  function n(u, d) {
    if (!e) return null;
    for (; d !== null; ) t(u, d), (d = d.sibling);
    return null;
  }
  function s(u, d) {
    for (u = new Map(); d !== null; )
      d.key !== null ? u.set(d.key, d) : u.set(d.index, d), (d = d.sibling);
    return u;
  }
  function o(u, d) {
    return (u = Mn(u, d)), (u.index = 0), (u.sibling = null), u;
  }
  function l(u, d, x) {
    return (
      (u.index = x),
      e
        ? ((x = u.alternate),
          x !== null
            ? ((x = x.index), x < d ? ((u.flags |= 2), d) : x)
            : ((u.flags |= 2), d))
        : ((u.flags |= 1048576), d)
    );
  }
  function a(u) {
    return e && u.alternate === null && (u.flags |= 2), u;
  }
  function i(u, d, x, k) {
    return d === null || d.tag !== 6
      ? ((d = xl(x, u.mode, k)), (d.return = u), d)
      : ((d = o(d, x)), (d.return = u), d);
  }
  function c(u, d, x, k) {
    var O = x.type;
    return O === rr
      ? h(u, d, x.props.children, k, x.key)
      : d !== null &&
        (d.elementType === O ||
          (typeof O == "object" &&
            O !== null &&
            O.$$typeof === gn &&
            Wi(O) === d.type))
      ? ((k = o(d, x.props)), (k.ref = Ur(u, d, x)), (k.return = u), k)
      : ((k = to(x.type, x.key, x.props, null, u.mode, k)),
        (k.ref = Ur(u, d, x)),
        (k.return = u),
        k);
  }
  function g(u, d, x, k) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== x.containerInfo ||
      d.stateNode.implementation !== x.implementation
      ? ((d = yl(x, u.mode, k)), (d.return = u), d)
      : ((d = o(d, x.children || [])), (d.return = u), d);
  }
  function h(u, d, x, k, O) {
    return d === null || d.tag !== 7
      ? ((d = zn(x, u.mode, k, O)), (d.return = u), d)
      : ((d = o(d, x)), (d.return = u), d);
  }
  function p(u, d, x) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = xl("" + d, u.mode, x)), (d.return = u), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ks:
          return (
            (x = to(d.type, d.key, d.props, null, u.mode, x)),
            (x.ref = Ur(u, null, d)),
            (x.return = u),
            x
          );
        case nr:
          return (d = yl(d, u.mode, x)), (d.return = u), d;
        case gn:
          var k = d._init;
          return p(u, k(d._payload), x);
      }
      if (Fr(d) || Tr(d))
        return (d = zn(d, u.mode, x, null)), (d.return = u), d;
      Os(u, d);
    }
    return null;
  }
  function f(u, d, x, k) {
    var O = d !== null ? d.key : null;
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return O !== null ? null : i(u, d, "" + x, k);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case ks:
          return x.key === O ? c(u, d, x, k) : null;
        case nr:
          return x.key === O ? g(u, d, x, k) : null;
        case gn:
          return (O = x._init), f(u, d, O(x._payload), k);
      }
      if (Fr(x) || Tr(x)) return O !== null ? null : h(u, d, x, k, null);
      Os(u, x);
    }
    return null;
  }
  function b(u, d, x, k, O) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return (u = u.get(x) || null), i(d, u, "" + k, O);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case ks:
          return (u = u.get(k.key === null ? x : k.key) || null), c(d, u, k, O);
        case nr:
          return (u = u.get(k.key === null ? x : k.key) || null), g(d, u, k, O);
        case gn:
          var I = k._init;
          return b(u, d, x, I(k._payload), O);
      }
      if (Fr(k) || Tr(k)) return (u = u.get(x) || null), h(d, u, k, O, null);
      Os(d, k);
    }
    return null;
  }
  function w(u, d, x, k) {
    for (
      var O = null, I = null, A = d, _ = (d = 0), ee = null;
      A !== null && _ < x.length;
      _++
    ) {
      A.index > _ ? ((ee = A), (A = null)) : (ee = A.sibling);
      var S = f(u, A, x[_], k);
      if (S === null) {
        A === null && (A = ee);
        break;
      }
      e && A && S.alternate === null && t(u, A),
        (d = l(S, d, _)),
        I === null ? (O = S) : (I.sibling = S),
        (I = S),
        (A = ee);
    }
    if (_ === x.length) return n(u, A), Be && An(u, _), O;
    if (A === null) {
      for (; _ < x.length; _++)
        (A = p(u, x[_], k)),
          A !== null &&
            ((d = l(A, d, _)), I === null ? (O = A) : (I.sibling = A), (I = A));
      return Be && An(u, _), O;
    }
    for (A = s(u, A); _ < x.length; _++)
      (ee = b(A, u, _, x[_], k)),
        ee !== null &&
          (e && ee.alternate !== null && A.delete(ee.key === null ? _ : ee.key),
          (d = l(ee, d, _)),
          I === null ? (O = ee) : (I.sibling = ee),
          (I = ee));
    return (
      e &&
        A.forEach(function (U) {
          return t(u, U);
        }),
      Be && An(u, _),
      O
    );
  }
  function M(u, d, x, k) {
    var O = Tr(x);
    if (typeof O != "function") throw Error(le(150));
    if (((x = O.call(x)), x == null)) throw Error(le(151));
    for (
      var I = (O = null), A = d, _ = (d = 0), ee = null, S = x.next();
      A !== null && !S.done;
      _++, S = x.next()
    ) {
      A.index > _ ? ((ee = A), (A = null)) : (ee = A.sibling);
      var U = f(u, A, S.value, k);
      if (U === null) {
        A === null && (A = ee);
        break;
      }
      e && A && U.alternate === null && t(u, A),
        (d = l(U, d, _)),
        I === null ? (O = U) : (I.sibling = U),
        (I = U),
        (A = ee);
    }
    if (S.done) return n(u, A), Be && An(u, _), O;
    if (A === null) {
      for (; !S.done; _++, S = x.next())
        (S = p(u, S.value, k)),
          S !== null &&
            ((d = l(S, d, _)), I === null ? (O = S) : (I.sibling = S), (I = S));
      return Be && An(u, _), O;
    }
    for (A = s(u, A); !S.done; _++, S = x.next())
      (S = b(A, u, _, S.value, k)),
        S !== null &&
          (e && S.alternate !== null && A.delete(S.key === null ? _ : S.key),
          (d = l(S, d, _)),
          I === null ? (O = S) : (I.sibling = S),
          (I = S));
    return (
      e &&
        A.forEach(function (q) {
          return t(u, q);
        }),
      Be && An(u, _),
      O
    );
  }
  function C(u, d, x, k) {
    if (
      (typeof x == "object" &&
        x !== null &&
        x.type === rr &&
        x.key === null &&
        (x = x.props.children),
      typeof x == "object" && x !== null)
    ) {
      switch (x.$$typeof) {
        case ks:
          e: {
            for (var O = x.key, I = d; I !== null; ) {
              if (I.key === O) {
                if (((O = x.type), O === rr)) {
                  if (I.tag === 7) {
                    n(u, I.sibling),
                      (d = o(I, x.props.children)),
                      (d.return = u),
                      (u = d);
                    break e;
                  }
                } else if (
                  I.elementType === O ||
                  (typeof O == "object" &&
                    O !== null &&
                    O.$$typeof === gn &&
                    Wi(O) === I.type)
                ) {
                  n(u, I.sibling),
                    (d = o(I, x.props)),
                    (d.ref = Ur(u, I, x)),
                    (d.return = u),
                    (u = d);
                  break e;
                }
                n(u, I);
                break;
              } else t(u, I);
              I = I.sibling;
            }
            x.type === rr
              ? ((d = zn(x.props.children, u.mode, k, x.key)),
                (d.return = u),
                (u = d))
              : ((k = to(x.type, x.key, x.props, null, u.mode, k)),
                (k.ref = Ur(u, d, x)),
                (k.return = u),
                (u = k));
          }
          return a(u);
        case nr:
          e: {
            for (I = x.key; d !== null; ) {
              if (d.key === I)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === x.containerInfo &&
                  d.stateNode.implementation === x.implementation
                ) {
                  n(u, d.sibling),
                    (d = o(d, x.children || [])),
                    (d.return = u),
                    (u = d);
                  break e;
                } else {
                  n(u, d);
                  break;
                }
              else t(u, d);
              d = d.sibling;
            }
            (d = yl(x, u.mode, k)), (d.return = u), (u = d);
          }
          return a(u);
        case gn:
          return (I = x._init), C(u, d, I(x._payload), k);
      }
      if (Fr(x)) return w(u, d, x, k);
      if (Tr(x)) return M(u, d, x, k);
      Os(u, x);
    }
    return (typeof x == "string" && x !== "") || typeof x == "number"
      ? ((x = "" + x),
        d !== null && d.tag === 6
          ? (n(u, d.sibling), (d = o(d, x)), (d.return = u), (u = d))
          : (n(u, d), (d = xl(x, u.mode, k)), (d.return = u), (u = d)),
        a(u))
      : n(u, d);
  }
  return C;
}
var Sr = Tu(!0),
  Au = Tu(!1),
  xo = Rn(null),
  yo = null,
  dr = null,
  Aa = null;
function $a() {
  Aa = dr = yo = null;
}
function Oa(e) {
  var t = xo.current;
  Ue(xo), (e._currentValue = t);
}
function Yl(e, t, n) {
  for (; e !== null; ) {
    var s = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), s !== null && (s.childLanes |= t))
        : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function vr(e, t) {
  (yo = e),
    (Aa = dr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (yt = !0), (e.firstContext = null));
}
function $t(e) {
  var t = e._currentValue;
  if (Aa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), dr === null)) {
      if (yo === null) throw Error(le(308));
      (dr = e), (yo.dependencies = { lanes: 0, firstContext: e });
    } else dr = dr.next = e;
  return t;
}
var Ln = null;
function La(e) {
  Ln === null ? (Ln = [e]) : Ln.push(e);
}
function $u(e, t, n, s) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), La(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    dn(e, s)
  );
}
function dn(e, t) {
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
var xn = !1;
function Ua(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ou(e, t) {
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
function an(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function kn(e, t, n) {
  var s = e.updateQueue;
  if (s === null) return null;
  if (((s = s.shared), Te & 2)) {
    var o = s.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (s.pending = t),
      dn(e, n)
    );
  }
  return (
    (o = s.interleaved),
    o === null ? ((t.next = t), La(s)) : ((t.next = o.next), (o.next = t)),
    (s.interleaved = t),
    dn(e, n)
  );
}
function Xs(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var s = t.lanes;
    (s &= e.pendingLanes), (n |= s), (t.lanes = n), Sa(e, n);
  }
}
function qi(e, t) {
  var n = e.updateQueue,
    s = e.alternate;
  if (s !== null && ((s = s.updateQueue), n === s)) {
    var o = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (o = l = a) : (l = l.next = a), (n = n.next);
      } while (n !== null);
      l === null ? (o = l = t) : (l = l.next = t);
    } else o = l = t;
    (n = {
      baseState: s.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: l,
      shared: s.shared,
      effects: s.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function vo(e, t, n, s) {
  var o = e.updateQueue;
  xn = !1;
  var l = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    i = o.shared.pending;
  if (i !== null) {
    o.shared.pending = null;
    var c = i,
      g = c.next;
    (c.next = null), a === null ? (l = g) : (a.next = g), (a = c);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (i = h.lastBaseUpdate),
      i !== a &&
        (i === null ? (h.firstBaseUpdate = g) : (i.next = g),
        (h.lastBaseUpdate = c)));
  }
  if (l !== null) {
    var p = o.baseState;
    (a = 0), (h = g = c = null), (i = l);
    do {
      var f = i.lane,
        b = i.eventTime;
      if ((s & f) === f) {
        h !== null &&
          (h = h.next =
            {
              eventTime: b,
              lane: 0,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null,
            });
        e: {
          var w = e,
            M = i;
          switch (((f = t), (b = n), M.tag)) {
            case 1:
              if (((w = M.payload), typeof w == "function")) {
                p = w.call(b, p, f);
                break e;
              }
              p = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = M.payload),
                (f = typeof w == "function" ? w.call(b, p, f) : w),
                f == null)
              )
                break e;
              p = Ve({}, p, f);
              break e;
            case 2:
              xn = !0;
          }
        }
        i.callback !== null &&
          i.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [i]) : f.push(i));
      } else
        (b = {
          eventTime: b,
          lane: f,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null,
        }),
          h === null ? ((g = h = b), (c = p)) : (h = h.next = b),
          (a |= f);
      if (((i = i.next), i === null)) {
        if (((i = o.shared.pending), i === null)) break;
        (f = i),
          (i = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (c = p),
      (o.baseState = c),
      (o.firstBaseUpdate = g),
      (o.lastBaseUpdate = h),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    (Vn |= a), (e.lanes = a), (e.memoizedState = p);
  }
}
function Yi(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var s = e[t],
        o = s.callback;
      if (o !== null) {
        if (((s.callback = null), (s = n), typeof o != "function"))
          throw Error(le(191, o));
        o.call(s);
      }
    }
}
var Ns = {},
  Zt = Rn(Ns),
  fs = Rn(Ns),
  ps = Rn(Ns);
function Un(e) {
  if (e === Ns) throw Error(le(174));
  return e;
}
function Ba(e, t) {
  switch ((Oe(ps, t), Oe(fs, e), Oe(Zt, Ns), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : _l(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = _l(t, e));
  }
  Ue(Zt), Oe(Zt, t);
}
function Cr() {
  Ue(Zt), Ue(fs), Ue(ps);
}
function Lu(e) {
  Un(ps.current);
  var t = Un(Zt.current),
    n = _l(t, e.type);
  t !== n && (Oe(fs, e), Oe(Zt, n));
}
function za(e) {
  fs.current === e && (Ue(Zt), Ue(fs));
}
var Ge = Rn(0);
function wo(e) {
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
var dl = [];
function Ga() {
  for (var e = 0; e < dl.length; e++)
    dl[e]._workInProgressVersionPrimary = null;
  dl.length = 0;
}
var Qs = pn.ReactCurrentDispatcher,
  fl = pn.ReactCurrentBatchConfig,
  Hn = 0,
  He = null,
  Ze = null,
  tt = null,
  bo = !1,
  Kr = !1,
  ms = 0,
  im = 0;
function lt() {
  throw Error(le(321));
}
function Fa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Wt(e[n], t[n])) return !1;
  return !0;
}
function Ha(e, t, n, s, o, l) {
  if (
    ((Hn = l),
    (He = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Qs.current = e === null || e.memoizedState === null ? fm : pm),
    (e = n(s, o)),
    Kr)
  ) {
    l = 0;
    do {
      if (((Kr = !1), (ms = 0), 25 <= l)) throw Error(le(301));
      (l += 1),
        (tt = Ze = null),
        (t.updateQueue = null),
        (Qs.current = mm),
        (e = n(s, o));
    } while (Kr);
  }
  if (
    ((Qs.current = No),
    (t = Ze !== null && Ze.next !== null),
    (Hn = 0),
    (tt = Ze = He = null),
    (bo = !1),
    t)
  )
    throw Error(le(300));
  return e;
}
function Va() {
  var e = ms !== 0;
  return (ms = 0), e;
}
function Qt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return tt === null ? (He.memoizedState = tt = e) : (tt = tt.next = e), tt;
}
function Ot() {
  if (Ze === null) {
    var e = He.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ze.next;
  var t = tt === null ? He.memoizedState : tt.next;
  if (t !== null) (tt = t), (Ze = e);
  else {
    if (e === null) throw Error(le(310));
    (Ze = e),
      (e = {
        memoizedState: Ze.memoizedState,
        baseState: Ze.baseState,
        baseQueue: Ze.baseQueue,
        queue: Ze.queue,
        next: null,
      }),
      tt === null ? (He.memoizedState = tt = e) : (tt = tt.next = e);
  }
  return tt;
}
function hs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function pl(e) {
  var t = Ot(),
    n = t.queue;
  if (n === null) throw Error(le(311));
  n.lastRenderedReducer = e;
  var s = Ze,
    o = s.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = l.next), (l.next = a);
    }
    (s.baseQueue = o = l), (n.pending = null);
  }
  if (o !== null) {
    (l = o.next), (s = s.baseState);
    var i = (a = null),
      c = null,
      g = l;
    do {
      var h = g.lane;
      if ((Hn & h) === h)
        c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: g.action,
              hasEagerState: g.hasEagerState,
              eagerState: g.eagerState,
              next: null,
            }),
          (s = g.hasEagerState ? g.eagerState : e(s, g.action));
      else {
        var p = {
          lane: h,
          action: g.action,
          hasEagerState: g.hasEagerState,
          eagerState: g.eagerState,
          next: null,
        };
        c === null ? ((i = c = p), (a = s)) : (c = c.next = p),
          (He.lanes |= h),
          (Vn |= h);
      }
      g = g.next;
    } while (g !== null && g !== l);
    c === null ? (a = s) : (c.next = i),
      Wt(s, t.memoizedState) || (yt = !0),
      (t.memoizedState = s),
      (t.baseState = a),
      (t.baseQueue = c),
      (n.lastRenderedState = s);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (He.lanes |= l), (Vn |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ml(e) {
  var t = Ot(),
    n = t.queue;
  if (n === null) throw Error(le(311));
  n.lastRenderedReducer = e;
  var s = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (l = e(l, a.action)), (a = a.next);
    while (a !== o);
    Wt(l, t.memoizedState) || (yt = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, s];
}
function Uu() {}
function Bu(e, t) {
  var n = He,
    s = Ot(),
    o = t(),
    l = !Wt(s.memoizedState, o);
  if (
    (l && ((s.memoizedState = o), (yt = !0)),
    (s = s.queue),
    Wa(Fu.bind(null, n, s, e), [e]),
    s.getSnapshot !== t || l || (tt !== null && tt.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      gs(9, Gu.bind(null, n, s, o, t), void 0, null),
      nt === null)
    )
      throw Error(le(349));
    Hn & 30 || zu(n, t, o);
  }
  return o;
}
function zu(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = He.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (He.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Gu(e, t, n, s) {
  (t.value = n), (t.getSnapshot = s), Hu(t) && Vu(e);
}
function Fu(e, t, n) {
  return n(function () {
    Hu(t) && Vu(e);
  });
}
function Hu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Wt(e, n);
  } catch {
    return !0;
  }
}
function Vu(e) {
  var t = dn(e, 1);
  t !== null && Vt(t, e, 1, -1);
}
function Xi(e) {
  var t = Qt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: hs,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = dm.bind(null, He, e)),
    [t.memoizedState, e]
  );
}
function gs(e, t, n, s) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: s, next: null }),
    (t = He.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (He.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((s = n.next), (n.next = e), (e.next = s), (t.lastEffect = e))),
    e
  );
}
function Wu() {
  return Ot().memoizedState;
}
function Ks(e, t, n, s) {
  var o = Qt();
  (He.flags |= e),
    (o.memoizedState = gs(1 | t, n, void 0, s === void 0 ? null : s));
}
function Ao(e, t, n, s) {
  var o = Ot();
  s = s === void 0 ? null : s;
  var l = void 0;
  if (Ze !== null) {
    var a = Ze.memoizedState;
    if (((l = a.destroy), s !== null && Fa(s, a.deps))) {
      o.memoizedState = gs(t, n, l, s);
      return;
    }
  }
  (He.flags |= e), (o.memoizedState = gs(1 | t, n, l, s));
}
function Qi(e, t) {
  return Ks(8390656, 8, e, t);
}
function Wa(e, t) {
  return Ao(2048, 8, e, t);
}
function qu(e, t) {
  return Ao(4, 2, e, t);
}
function Yu(e, t) {
  return Ao(4, 4, e, t);
}
function Xu(e, t) {
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
function Qu(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ao(4, 4, Xu.bind(null, t, e), n)
  );
}
function qa() {}
function Ku(e, t) {
  var n = Ot();
  t = t === void 0 ? null : t;
  var s = n.memoizedState;
  return s !== null && t !== null && Fa(t, s[1])
    ? s[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ju(e, t) {
  var n = Ot();
  t = t === void 0 ? null : t;
  var s = n.memoizedState;
  return s !== null && t !== null && Fa(t, s[1])
    ? s[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Zu(e, t, n) {
  return Hn & 21
    ? (Wt(n, t) || ((n = su()), (He.lanes |= n), (Vn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (yt = !0)), (e.memoizedState = n));
}
function cm(e, t) {
  var n = Ae;
  (Ae = n !== 0 && 4 > n ? n : 4), e(!0);
  var s = fl.transition;
  fl.transition = {};
  try {
    e(!1), t();
  } finally {
    (Ae = n), (fl.transition = s);
  }
}
function ed() {
  return Ot().memoizedState;
}
function um(e, t, n) {
  var s = _n(e);
  if (
    ((n = {
      lane: s,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    td(e))
  )
    nd(t, n);
  else if (((n = $u(e, t, n, s)), n !== null)) {
    var o = dt();
    Vt(n, e, s, o), rd(n, t, s);
  }
}
function dm(e, t, n) {
  var s = _n(e),
    o = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (td(e)) nd(t, o);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var a = t.lastRenderedState,
          i = l(a, n);
        if (((o.hasEagerState = !0), (o.eagerState = i), Wt(i, a))) {
          var c = t.interleaved;
          c === null
            ? ((o.next = o), La(t))
            : ((o.next = c.next), (c.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = $u(e, t, o, s)),
      n !== null && ((o = dt()), Vt(n, e, s, o), rd(n, t, s));
  }
}
function td(e) {
  var t = e.alternate;
  return e === He || (t !== null && t === He);
}
function nd(e, t) {
  Kr = bo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function rd(e, t, n) {
  if (n & 4194240) {
    var s = t.lanes;
    (s &= e.pendingLanes), (n |= s), (t.lanes = n), Sa(e, n);
  }
}
var No = {
    readContext: $t,
    useCallback: lt,
    useContext: lt,
    useEffect: lt,
    useImperativeHandle: lt,
    useInsertionEffect: lt,
    useLayoutEffect: lt,
    useMemo: lt,
    useReducer: lt,
    useRef: lt,
    useState: lt,
    useDebugValue: lt,
    useDeferredValue: lt,
    useTransition: lt,
    useMutableSource: lt,
    useSyncExternalStore: lt,
    useId: lt,
    unstable_isNewReconciler: !1,
  },
  fm = {
    readContext: $t,
    useCallback: function (e, t) {
      return (Qt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: $t,
    useEffect: Qi,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ks(4194308, 4, Xu.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ks(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ks(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Qt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var s = Qt();
      return (
        (t = n !== void 0 ? n(t) : t),
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
        (e = e.dispatch = um.bind(null, He, e)),
        [s.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Qt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Xi,
    useDebugValue: qa,
    useDeferredValue: function (e) {
      return (Qt().memoizedState = e);
    },
    useTransition: function () {
      var e = Xi(!1),
        t = e[0];
      return (e = cm.bind(null, e[1])), (Qt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var s = He,
        o = Qt();
      if (Be) {
        if (n === void 0) throw Error(le(407));
        n = n();
      } else {
        if (((n = t()), nt === null)) throw Error(le(349));
        Hn & 30 || zu(s, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        Qi(Fu.bind(null, s, l, e), [e]),
        (s.flags |= 2048),
        gs(9, Gu.bind(null, s, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Qt(),
        t = nt.identifierPrefix;
      if (Be) {
        var n = ln,
          s = on;
        (n = (s & ~(1 << (32 - Ht(s) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ms++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = im++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  pm = {
    readContext: $t,
    useCallback: Ku,
    useContext: $t,
    useEffect: Wa,
    useImperativeHandle: Qu,
    useInsertionEffect: qu,
    useLayoutEffect: Yu,
    useMemo: Ju,
    useReducer: pl,
    useRef: Wu,
    useState: function () {
      return pl(hs);
    },
    useDebugValue: qa,
    useDeferredValue: function (e) {
      var t = Ot();
      return Zu(t, Ze.memoizedState, e);
    },
    useTransition: function () {
      var e = pl(hs)[0],
        t = Ot().memoizedState;
      return [e, t];
    },
    useMutableSource: Uu,
    useSyncExternalStore: Bu,
    useId: ed,
    unstable_isNewReconciler: !1,
  },
  mm = {
    readContext: $t,
    useCallback: Ku,
    useContext: $t,
    useEffect: Wa,
    useImperativeHandle: Qu,
    useInsertionEffect: qu,
    useLayoutEffect: Yu,
    useMemo: Ju,
    useReducer: ml,
    useRef: Wu,
    useState: function () {
      return ml(hs);
    },
    useDebugValue: qa,
    useDeferredValue: function (e) {
      var t = Ot();
      return Ze === null ? (t.memoizedState = e) : Zu(t, Ze.memoizedState, e);
    },
    useTransition: function () {
      var e = ml(hs)[0],
        t = Ot().memoizedState;
      return [e, t];
    },
    useMutableSource: Uu,
    useSyncExternalStore: Bu,
    useId: ed,
    unstable_isNewReconciler: !1,
  };
function zt(e, t) {
  if (e && e.defaultProps) {
    (t = Ve({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Xl(e, t, n, s) {
  (t = e.memoizedState),
    (n = n(s, t)),
    (n = n == null ? t : Ve({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var $o = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Yn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var s = dt(),
      o = _n(e),
      l = an(s, o);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = kn(e, l, o)),
      t !== null && (Vt(t, e, o, s), Xs(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var s = dt(),
      o = _n(e),
      l = an(s, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = kn(e, l, o)),
      t !== null && (Vt(t, e, o, s), Xs(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = dt(),
      s = _n(e),
      o = an(n, s);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = kn(e, o, s)),
      t !== null && (Vt(t, e, s, n), Xs(t, e, s));
  },
};
function Ki(e, t, n, s, o, l, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(s, l, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !is(n, s) || !is(o, l)
      : !0
  );
}
function sd(e, t, n) {
  var s = !1,
    o = In,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = $t(l))
      : ((o = bt(t) ? Gn : ct.current),
        (s = t.contextTypes),
        (l = (s = s != null) ? Nr(e, o) : In)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = $o),
    (e.stateNode = t),
    (t._reactInternals = e),
    s &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function Ji(e, t, n, s) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, s),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, s),
    t.state !== e && $o.enqueueReplaceState(t, t.state, null);
}
function Ql(e, t, n, s) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Ua(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = $t(l))
    : ((l = bt(t) ? Gn : ct.current), (o.context = Nr(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (Xl(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && $o.enqueueReplaceState(o, o.state, null),
      vo(e, n, o, s),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function kr(e, t) {
  try {
    var n = "",
      s = t;
    do (n += Gf(s)), (s = s.return);
    while (s);
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
function hl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Kl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var hm = typeof WeakMap == "function" ? WeakMap : Map;
function od(e, t, n) {
  (n = an(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var s = t.value;
  return (
    (n.callback = function () {
      So || ((So = !0), (aa = s)), Kl(e, t);
    }),
    n
  );
}
function ld(e, t, n) {
  (n = an(-1, n)), (n.tag = 3);
  var s = e.type.getDerivedStateFromError;
  if (typeof s == "function") {
    var o = t.value;
    (n.payload = function () {
      return s(o);
    }),
      (n.callback = function () {
        Kl(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        Kl(e, t),
          typeof s != "function" &&
            (Dn === null ? (Dn = new Set([this])) : Dn.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function Zi(e, t, n) {
  var s = e.pingCache;
  if (s === null) {
    s = e.pingCache = new hm();
    var o = new Set();
    s.set(t, o);
  } else (o = s.get(t)), o === void 0 && ((o = new Set()), s.set(t, o));
  o.has(n) || (o.add(n), (e = Mm.bind(null, e, t, n)), t.then(e, e));
}
function ec(e) {
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
function tc(e, t, n, s, o) {
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
              : ((t = an(-1, 1)), (t.tag = 2), kn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var gm = pn.ReactCurrentOwner,
  yt = !1;
function ut(e, t, n, s) {
  t.child = e === null ? Au(t, null, n, s) : Sr(t, e.child, n, s);
}
function nc(e, t, n, s, o) {
  n = n.render;
  var l = t.ref;
  return (
    vr(t, o),
    (s = Ha(e, t, n, s, l, o)),
    (n = Va()),
    e !== null && !yt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        fn(e, t, o))
      : (Be && n && Pa(t), (t.flags |= 1), ut(e, t, s, o), t.child)
  );
}
function rc(e, t, n, s, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !ti(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), ad(e, t, l, s, o))
      : ((e = to(n.type, null, s, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var a = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : is), n(a, s) && e.ref === t.ref)
    )
      return fn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Mn(l, s)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ad(e, t, n, s, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (is(l, s) && e.ref === t.ref)
      if (((yt = !1), (t.pendingProps = s = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (yt = !0);
      else return (t.lanes = e.lanes), fn(e, t, o);
  }
  return Jl(e, t, n, s, o);
}
function id(e, t, n) {
  var s = t.pendingProps,
    o = s.children,
    l = e !== null ? e.memoizedState : null;
  if (s.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Oe(pr, St),
        (St |= n);
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
          Oe(pr, St),
          (St |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (s = l !== null ? l.baseLanes : n),
        Oe(pr, St),
        (St |= s);
    }
  else
    l !== null ? ((s = l.baseLanes | n), (t.memoizedState = null)) : (s = n),
      Oe(pr, St),
      (St |= s);
  return ut(e, t, o, n), t.child;
}
function cd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Jl(e, t, n, s, o) {
  var l = bt(n) ? Gn : ct.current;
  return (
    (l = Nr(t, l)),
    vr(t, o),
    (n = Ha(e, t, n, s, l, o)),
    (s = Va()),
    e !== null && !yt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        fn(e, t, o))
      : (Be && s && Pa(t), (t.flags |= 1), ut(e, t, n, o), t.child)
  );
}
function sc(e, t, n, s, o) {
  if (bt(n)) {
    var l = !0;
    mo(t);
  } else l = !1;
  if ((vr(t, o), t.stateNode === null))
    Js(e, t), sd(t, n, s), Ql(t, n, s, o), (s = !0);
  else if (e === null) {
    var a = t.stateNode,
      i = t.memoizedProps;
    a.props = i;
    var c = a.context,
      g = n.contextType;
    typeof g == "object" && g !== null
      ? (g = $t(g))
      : ((g = bt(n) ? Gn : ct.current), (g = Nr(t, g)));
    var h = n.getDerivedStateFromProps,
      p =
        typeof h == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((i !== s || c !== g) && Ji(t, a, s, g)),
      (xn = !1);
    var f = t.memoizedState;
    (a.state = f),
      vo(t, s, a, o),
      (c = t.memoizedState),
      i !== s || f !== c || wt.current || xn
        ? (typeof h == "function" && (Xl(t, n, h, s), (c = t.memoizedState)),
          (i = xn || Ki(t, n, i, s, f, c, g))
            ? (p ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = s),
              (t.memoizedState = c)),
          (a.props = s),
          (a.state = c),
          (a.context = g),
          (s = i))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (s = !1));
  } else {
    (a = t.stateNode),
      Ou(e, t),
      (i = t.memoizedProps),
      (g = t.type === t.elementType ? i : zt(t.type, i)),
      (a.props = g),
      (p = t.pendingProps),
      (f = a.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = $t(c))
        : ((c = bt(n) ? Gn : ct.current), (c = Nr(t, c)));
    var b = n.getDerivedStateFromProps;
    (h =
      typeof b == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((i !== p || f !== c) && Ji(t, a, s, c)),
      (xn = !1),
      (f = t.memoizedState),
      (a.state = f),
      vo(t, s, a, o);
    var w = t.memoizedState;
    i !== p || f !== w || wt.current || xn
      ? (typeof b == "function" && (Xl(t, n, b, s), (w = t.memoizedState)),
        (g = xn || Ki(t, n, g, s, f, w, c) || !1)
          ? (h ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(s, w, c),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(s, w, c)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (i === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (i === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = s),
            (t.memoizedState = w)),
        (a.props = s),
        (a.state = w),
        (a.context = c),
        (s = g))
      : (typeof a.componentDidUpdate != "function" ||
          (i === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (i === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (s = !1));
  }
  return Zl(e, t, n, s, l, o);
}
function Zl(e, t, n, s, o, l) {
  cd(e, t);
  var a = (t.flags & 128) !== 0;
  if (!s && !a) return o && Fi(t, n, !1), fn(e, t, l);
  (s = t.stateNode), (gm.current = t);
  var i =
    a && typeof n.getDerivedStateFromError != "function" ? null : s.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Sr(t, e.child, null, l)), (t.child = Sr(t, null, i, l)))
      : ut(e, t, i, l),
    (t.memoizedState = s.state),
    o && Fi(t, n, !0),
    t.child
  );
}
function ud(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Gi(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Gi(e, t.context, !1),
    Ba(e, t.containerInfo);
}
function oc(e, t, n, s, o) {
  return jr(), Ta(o), (t.flags |= 256), ut(e, t, n, s), t.child;
}
var ea = { dehydrated: null, treeContext: null, retryLane: 0 };
function ta(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function dd(e, t, n) {
  var s = t.pendingProps,
    o = Ge.current,
    l = !1,
    a = (t.flags & 128) !== 0,
    i;
  if (
    ((i = a) ||
      (i = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    i
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Oe(Ge, o & 1),
    e === null)
  )
    return (
      ql(t),
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
          l
            ? ((s = t.mode),
              (l = t.child),
              (a = { mode: "hidden", children: a }),
              !(s & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = a))
                : (l = Uo(a, s, 0, null)),
              (e = zn(e, s, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = ta(n)),
              (t.memoizedState = ea),
              e)
            : Ya(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((i = o.dehydrated), i !== null)))
    return xm(e, t, a, s, i, o, n);
  if (l) {
    (l = s.fallback), (a = t.mode), (o = e.child), (i = o.sibling);
    var c = { mode: "hidden", children: s.children };
    return (
      !(a & 1) && t.child !== o
        ? ((s = t.child),
          (s.childLanes = 0),
          (s.pendingProps = c),
          (t.deletions = null))
        : ((s = Mn(o, c)), (s.subtreeFlags = o.subtreeFlags & 14680064)),
      i !== null ? (l = Mn(i, l)) : ((l = zn(l, a, n, null)), (l.flags |= 2)),
      (l.return = t),
      (s.return = t),
      (s.sibling = l),
      (t.child = s),
      (s = l),
      (l = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? ta(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (l.memoizedState = a),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = ea),
      s
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (s = Mn(l, { mode: "visible", children: s.children })),
    !(t.mode & 1) && (s.lanes = n),
    (s.return = t),
    (s.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = s),
    (t.memoizedState = null),
    s
  );
}
function Ya(e, t) {
  return (
    (t = Uo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ls(e, t, n, s) {
  return (
    s !== null && Ta(s),
    Sr(t, e.child, null, n),
    (e = Ya(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function xm(e, t, n, s, o, l, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (s = hl(Error(le(422)))), Ls(e, t, a, s))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = s.fallback),
        (o = t.mode),
        (s = Uo({ mode: "visible", children: s.children }, o, 0, null)),
        (l = zn(l, o, a, null)),
        (l.flags |= 2),
        (s.return = t),
        (l.return = t),
        (s.sibling = l),
        (t.child = s),
        t.mode & 1 && Sr(t, e.child, null, a),
        (t.child.memoizedState = ta(a)),
        (t.memoizedState = ea),
        l);
  if (!(t.mode & 1)) return Ls(e, t, a, null);
  if (o.data === "$!") {
    if (((s = o.nextSibling && o.nextSibling.dataset), s)) var i = s.dgst;
    return (
      (s = i), (l = Error(le(419))), (s = hl(l, s, void 0)), Ls(e, t, a, s)
    );
  }
  if (((i = (a & e.childLanes) !== 0), yt || i)) {
    if (((s = nt), s !== null)) {
      switch (a & -a) {
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
      (o = o & (s.suspendedLanes | a) ? 0 : o),
        o !== 0 &&
          o !== l.retryLane &&
          ((l.retryLane = o), dn(e, o), Vt(s, e, o, -1));
    }
    return ei(), (s = hl(Error(le(421)))), Ls(e, t, a, s);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Em.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Ct = Cn(o.nextSibling)),
      (kt = t),
      (Be = !0),
      (Ft = null),
      e !== null &&
        ((It[Pt++] = on),
        (It[Pt++] = ln),
        (It[Pt++] = Fn),
        (on = e.id),
        (ln = e.overflow),
        (Fn = t)),
      (t = Ya(t, s.children)),
      (t.flags |= 4096),
      t);
}
function lc(e, t, n) {
  e.lanes |= t;
  var s = e.alternate;
  s !== null && (s.lanes |= t), Yl(e.return, t, n);
}
function gl(e, t, n, s, o) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: s,
        tail: n,
        tailMode: o,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = s),
      (l.tail = n),
      (l.tailMode = o));
}
function fd(e, t, n) {
  var s = t.pendingProps,
    o = s.revealOrder,
    l = s.tail;
  if ((ut(e, t, s.children, n), (s = Ge.current), s & 2))
    (s = (s & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && lc(e, n, t);
        else if (e.tag === 19) lc(e, n, t);
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
  if ((Oe(Ge, s), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && wo(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          gl(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && wo(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        gl(t, !0, n, null, l);
        break;
      case "together":
        gl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Js(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function fn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Vn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(le(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Mn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Mn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function ym(e, t, n) {
  switch (t.tag) {
    case 3:
      ud(t), jr();
      break;
    case 5:
      Lu(t);
      break;
    case 1:
      bt(t.type) && mo(t);
      break;
    case 4:
      Ba(t, t.stateNode.containerInfo);
      break;
    case 10:
      var s = t.type._context,
        o = t.memoizedProps.value;
      Oe(xo, s._currentValue), (s._currentValue = o);
      break;
    case 13:
      if (((s = t.memoizedState), s !== null))
        return s.dehydrated !== null
          ? (Oe(Ge, Ge.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? dd(e, t, n)
          : (Oe(Ge, Ge.current & 1),
            (e = fn(e, t, n)),
            e !== null ? e.sibling : null);
      Oe(Ge, Ge.current & 1);
      break;
    case 19:
      if (((s = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (s) return fd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Oe(Ge, Ge.current),
        s)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), id(e, t, n);
  }
  return fn(e, t, n);
}
var pd, na, md, hd;
pd = function (e, t) {
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
na = function () {};
md = function (e, t, n, s) {
  var o = e.memoizedProps;
  if (o !== s) {
    (e = t.stateNode), Un(Zt.current);
    var l = null;
    switch (n) {
      case "input":
        (o = Sl(e, o)), (s = Sl(e, s)), (l = []);
        break;
      case "select":
        (o = Ve({}, o, { value: void 0 })),
          (s = Ve({}, s, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = Dl(e, o)), (s = Dl(e, s)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof s.onClick == "function" &&
          (e.onclick = fo);
    }
    Ml(n, s);
    var a;
    n = null;
    for (g in o)
      if (!s.hasOwnProperty(g) && o.hasOwnProperty(g) && o[g] != null)
        if (g === "style") {
          var i = o[g];
          for (a in i) i.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          g !== "dangerouslySetInnerHTML" &&
            g !== "children" &&
            g !== "suppressContentEditableWarning" &&
            g !== "suppressHydrationWarning" &&
            g !== "autoFocus" &&
            (ts.hasOwnProperty(g)
              ? l || (l = [])
              : (l = l || []).push(g, null));
    for (g in s) {
      var c = s[g];
      if (
        ((i = o != null ? o[g] : void 0),
        s.hasOwnProperty(g) && c !== i && (c != null || i != null))
      )
        if (g === "style")
          if (i) {
            for (a in i)
              !i.hasOwnProperty(a) ||
                (c && c.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in c)
              c.hasOwnProperty(a) &&
                i[a] !== c[a] &&
                (n || (n = {}), (n[a] = c[a]));
          } else n || (l || (l = []), l.push(g, n)), (n = c);
        else
          g === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (i = i ? i.__html : void 0),
              c != null && i !== c && (l = l || []).push(g, c))
            : g === "children"
            ? (typeof c != "string" && typeof c != "number") ||
              (l = l || []).push(g, "" + c)
            : g !== "suppressContentEditableWarning" &&
              g !== "suppressHydrationWarning" &&
              (ts.hasOwnProperty(g)
                ? (c != null && g === "onScroll" && Le("scroll", e),
                  l || i === c || (l = []))
                : (l = l || []).push(g, c));
    }
    n && (l = l || []).push("style", n);
    var g = l;
    (t.updateQueue = g) && (t.flags |= 4);
  }
};
hd = function (e, t, n, s) {
  n !== s && (t.flags |= 4);
};
function Br(e, t) {
  if (!Be)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var s = null; n !== null; )
          n.alternate !== null && (s = n), (n = n.sibling);
        s === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (s.sibling = null);
    }
}
function at(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    s = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (s |= o.subtreeFlags & 14680064),
        (s |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (s |= o.subtreeFlags),
        (s |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= s), (e.childLanes = n), t;
}
function vm(e, t, n) {
  var s = t.pendingProps;
  switch ((Ra(t), t.tag)) {
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
      return at(t), null;
    case 1:
      return bt(t.type) && po(), at(t), null;
    case 3:
      return (
        (s = t.stateNode),
        Cr(),
        Ue(wt),
        Ue(ct),
        Ga(),
        s.pendingContext &&
          ((s.context = s.pendingContext), (s.pendingContext = null)),
        (e === null || e.child === null) &&
          ($s(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ft !== null && (ua(Ft), (Ft = null)))),
        na(e, t),
        at(t),
        null
      );
    case 5:
      za(t);
      var o = Un(ps.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        md(e, t, n, s, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!s) {
          if (t.stateNode === null) throw Error(le(166));
          return at(t), null;
        }
        if (((e = Un(Zt.current)), $s(t))) {
          (s = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((s[Kt] = t), (s[ds] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Le("cancel", s), Le("close", s);
              break;
            case "iframe":
            case "object":
            case "embed":
              Le("load", s);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Vr.length; o++) Le(Vr[o], s);
              break;
            case "source":
              Le("error", s);
              break;
            case "img":
            case "image":
            case "link":
              Le("error", s), Le("load", s);
              break;
            case "details":
              Le("toggle", s);
              break;
            case "input":
              hi(s, l), Le("invalid", s);
              break;
            case "select":
              (s._wrapperState = { wasMultiple: !!l.multiple }),
                Le("invalid", s);
              break;
            case "textarea":
              xi(s, l), Le("invalid", s);
          }
          Ml(n, l), (o = null);
          for (var a in l)
            if (l.hasOwnProperty(a)) {
              var i = l[a];
              a === "children"
                ? typeof i == "string"
                  ? s.textContent !== i &&
                    (l.suppressHydrationWarning !== !0 &&
                      As(s.textContent, i, e),
                    (o = ["children", i]))
                  : typeof i == "number" &&
                    s.textContent !== "" + i &&
                    (l.suppressHydrationWarning !== !0 &&
                      As(s.textContent, i, e),
                    (o = ["children", "" + i]))
                : ts.hasOwnProperty(a) &&
                  i != null &&
                  a === "onScroll" &&
                  Le("scroll", s);
            }
          switch (n) {
            case "input":
              Ds(s), gi(s, l, !0);
              break;
            case "textarea":
              Ds(s), yi(s);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (s.onclick = fo);
          }
          (s = o), (t.updateQueue = s), s !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Fc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof s.is == "string"
                ? (e = a.createElement(n, { is: s.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    s.multiple
                      ? (a.multiple = !0)
                      : s.size && (a.size = s.size)))
              : (e = a.createElementNS(e, n)),
            (e[Kt] = t),
            (e[ds] = s),
            pd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = El(n, s)), n)) {
              case "dialog":
                Le("cancel", e), Le("close", e), (o = s);
                break;
              case "iframe":
              case "object":
              case "embed":
                Le("load", e), (o = s);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Vr.length; o++) Le(Vr[o], e);
                o = s;
                break;
              case "source":
                Le("error", e), (o = s);
                break;
              case "img":
              case "image":
              case "link":
                Le("error", e), Le("load", e), (o = s);
                break;
              case "details":
                Le("toggle", e), (o = s);
                break;
              case "input":
                hi(e, s), (o = Sl(e, s)), Le("invalid", e);
                break;
              case "option":
                o = s;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!s.multiple }),
                  (o = Ve({}, s, { value: void 0 })),
                  Le("invalid", e);
                break;
              case "textarea":
                xi(e, s), (o = Dl(e, s)), Le("invalid", e);
                break;
              default:
                o = s;
            }
            Ml(n, o), (i = o);
            for (l in i)
              if (i.hasOwnProperty(l)) {
                var c = i[l];
                l === "style"
                  ? Wc(e, c)
                  : l === "dangerouslySetInnerHTML"
                  ? ((c = c ? c.__html : void 0), c != null && Hc(e, c))
                  : l === "children"
                  ? typeof c == "string"
                    ? (n !== "textarea" || c !== "") && ns(e, c)
                    : typeof c == "number" && ns(e, "" + c)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (ts.hasOwnProperty(l)
                      ? c != null && l === "onScroll" && Le("scroll", e)
                      : c != null && ya(e, l, c, a));
              }
            switch (n) {
              case "input":
                Ds(e), gi(e, s, !1);
                break;
              case "textarea":
                Ds(e), yi(e);
                break;
              case "option":
                s.value != null && e.setAttribute("value", "" + En(s.value));
                break;
              case "select":
                (e.multiple = !!s.multiple),
                  (l = s.value),
                  l != null
                    ? hr(e, !!s.multiple, l, !1)
                    : s.defaultValue != null &&
                      hr(e, !!s.multiple, s.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = fo);
            }
            switch (n) {
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
      return at(t), null;
    case 6:
      if (e && t.stateNode != null) hd(e, t, e.memoizedProps, s);
      else {
        if (typeof s != "string" && t.stateNode === null) throw Error(le(166));
        if (((n = Un(ps.current)), Un(Zt.current), $s(t))) {
          if (
            ((s = t.stateNode),
            (n = t.memoizedProps),
            (s[Kt] = t),
            (l = s.nodeValue !== n) && ((e = kt), e !== null))
          )
            switch (e.tag) {
              case 3:
                As(s.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  As(s.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (s = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(s)),
            (s[Kt] = t),
            (t.stateNode = s);
      }
      return at(t), null;
    case 13:
      if (
        (Ue(Ge),
        (s = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Be && Ct !== null && t.mode & 1 && !(t.flags & 128))
          Ru(), jr(), (t.flags |= 98560), (l = !1);
        else if (((l = $s(t)), s !== null && s.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(le(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(le(317));
            l[Kt] = t;
          } else
            jr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          at(t), (l = !1);
        } else Ft !== null && (ua(Ft), (Ft = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((s = s !== null),
          s !== (e !== null && e.memoizedState !== null) &&
            s &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Ge.current & 1 ? et === 0 && (et = 3) : ei())),
          t.updateQueue !== null && (t.flags |= 4),
          at(t),
          null);
    case 4:
      return (
        Cr(), na(e, t), e === null && cs(t.stateNode.containerInfo), at(t), null
      );
    case 10:
      return Oa(t.type._context), at(t), null;
    case 17:
      return bt(t.type) && po(), at(t), null;
    case 19:
      if ((Ue(Ge), (l = t.memoizedState), l === null)) return at(t), null;
      if (((s = (t.flags & 128) !== 0), (a = l.rendering), a === null))
        if (s) Br(l, !1);
        else {
          if (et !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = wo(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Br(l, !1),
                    s = a.updateQueue,
                    s !== null && ((t.updateQueue = s), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    s = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = s),
                    (l.flags &= 14680066),
                    (a = l.alternate),
                    a === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = a.childLanes),
                        (l.lanes = a.lanes),
                        (l.child = a.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = a.memoizedProps),
                        (l.memoizedState = a.memoizedState),
                        (l.updateQueue = a.updateQueue),
                        (l.type = a.type),
                        (e = a.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Oe(Ge, (Ge.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            Xe() > Dr &&
            ((t.flags |= 128), (s = !0), Br(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!s)
          if (((e = wo(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (s = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Br(l, !0),
              l.tail === null && l.tailMode === "hidden" && !a.alternate && !Be)
            )
              return at(t), null;
          } else
            2 * Xe() - l.renderingStartTime > Dr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (s = !0), Br(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = l.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (l.last = a));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = Xe()),
          (t.sibling = null),
          (n = Ge.current),
          Oe(Ge, s ? (n & 1) | 2 : n & 1),
          t)
        : (at(t), null);
    case 22:
    case 23:
      return (
        Za(),
        (s = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== s && (t.flags |= 8192),
        s && t.mode & 1
          ? St & 1073741824 && (at(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : at(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(le(156, t.tag));
}
function wm(e, t) {
  switch ((Ra(t), t.tag)) {
    case 1:
      return (
        bt(t.type) && po(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Cr(),
        Ue(wt),
        Ue(ct),
        Ga(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return za(t), null;
    case 13:
      if (
        (Ue(Ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(le(340));
        jr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Ue(Ge), null;
    case 4:
      return Cr(), null;
    case 10:
      return Oa(t.type._context), null;
    case 22:
    case 23:
      return Za(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Us = !1,
  it = !1,
  bm = typeof WeakSet == "function" ? WeakSet : Set,
  ve = null;
function fr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (s) {
        qe(e, t, s);
      }
    else n.current = null;
}
function ra(e, t, n) {
  try {
    n();
  } catch (s) {
    qe(e, t, s);
  }
}
var ac = !1;
function Nm(e, t) {
  if (((Bl = io), (e = wu()), Ia(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var s = n.getSelection && n.getSelection();
        if (s && s.rangeCount !== 0) {
          n = s.anchorNode;
          var o = s.anchorOffset,
            l = s.focusNode;
          s = s.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            i = -1,
            c = -1,
            g = 0,
            h = 0,
            p = e,
            f = null;
          t: for (;;) {
            for (
              var b;
              p !== n || (o !== 0 && p.nodeType !== 3) || (i = a + o),
                p !== l || (s !== 0 && p.nodeType !== 3) || (c = a + s),
                p.nodeType === 3 && (a += p.nodeValue.length),
                (b = p.firstChild) !== null;

            )
              (f = p), (p = b);
            for (;;) {
              if (p === e) break t;
              if (
                (f === n && ++g === o && (i = a),
                f === l && ++h === s && (c = a),
                (b = p.nextSibling) !== null)
              )
                break;
              (p = f), (f = p.parentNode);
            }
            p = b;
          }
          n = i === -1 || c === -1 ? null : { start: i, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (
    zl = { focusedElem: e, selectionRange: n }, io = !1, ve = t;
    ve !== null;

  )
    if (((t = ve), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (ve = e);
    else
      for (; ve !== null; ) {
        t = ve;
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
                  var M = w.memoizedProps,
                    C = w.memoizedState,
                    u = t.stateNode,
                    d = u.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? M : zt(t.type, M),
                      C
                    );
                  u.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var x = t.stateNode.containerInfo;
                x.nodeType === 1
                  ? (x.textContent = "")
                  : x.nodeType === 9 &&
                    x.documentElement &&
                    x.removeChild(x.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(le(163));
            }
        } catch (k) {
          qe(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (ve = e);
          break;
        }
        ve = t.return;
      }
  return (w = ac), (ac = !1), w;
}
function Jr(e, t, n) {
  var s = t.updateQueue;
  if (((s = s !== null ? s.lastEffect : null), s !== null)) {
    var o = (s = s.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && ra(t, n, l);
      }
      o = o.next;
    } while (o !== s);
  }
}
function Oo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var s = n.create;
        n.destroy = s();
      }
      n = n.next;
    } while (n !== t);
  }
}
function sa(e) {
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
function gd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), gd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Kt], delete t[ds], delete t[Hl], delete t[sm], delete t[om])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function xd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ic(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || xd(e.return)) return null;
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
function oa(e, t, n) {
  var s = e.tag;
  if (s === 5 || s === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = fo));
  else if (s !== 4 && ((e = e.child), e !== null))
    for (oa(e, t, n), e = e.sibling; e !== null; ) oa(e, t, n), (e = e.sibling);
}
function la(e, t, n) {
  var s = e.tag;
  if (s === 5 || s === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (s !== 4 && ((e = e.child), e !== null))
    for (la(e, t, n), e = e.sibling; e !== null; ) la(e, t, n), (e = e.sibling);
}
var rt = null,
  Gt = !1;
function hn(e, t, n) {
  for (n = n.child; n !== null; ) yd(e, t, n), (n = n.sibling);
}
function yd(e, t, n) {
  if (Jt && typeof Jt.onCommitFiberUnmount == "function")
    try {
      Jt.onCommitFiberUnmount(Mo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      it || fr(n, t);
    case 6:
      var s = rt,
        o = Gt;
      (rt = null),
        hn(e, t, n),
        (rt = s),
        (Gt = o),
        rt !== null &&
          (Gt
            ? ((e = rt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : rt.removeChild(n.stateNode));
      break;
    case 18:
      rt !== null &&
        (Gt
          ? ((e = rt),
            (n = n.stateNode),
            e.nodeType === 8
              ? cl(e.parentNode, n)
              : e.nodeType === 1 && cl(e, n),
            ls(e))
          : cl(rt, n.stateNode));
      break;
    case 4:
      (s = rt),
        (o = Gt),
        (rt = n.stateNode.containerInfo),
        (Gt = !0),
        hn(e, t, n),
        (rt = s),
        (Gt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !it &&
        ((s = n.updateQueue), s !== null && ((s = s.lastEffect), s !== null))
      ) {
        o = s = s.next;
        do {
          var l = o,
            a = l.destroy;
          (l = l.tag),
            a !== void 0 && (l & 2 || l & 4) && ra(n, t, a),
            (o = o.next);
        } while (o !== s);
      }
      hn(e, t, n);
      break;
    case 1:
      if (
        !it &&
        (fr(n, t),
        (s = n.stateNode),
        typeof s.componentWillUnmount == "function")
      )
        try {
          (s.props = n.memoizedProps),
            (s.state = n.memoizedState),
            s.componentWillUnmount();
        } catch (i) {
          qe(n, t, i);
        }
      hn(e, t, n);
      break;
    case 21:
      hn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((it = (s = it) || n.memoizedState !== null), hn(e, t, n), (it = s))
        : hn(e, t, n);
      break;
    default:
      hn(e, t, n);
  }
}
function cc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new bm()),
      t.forEach(function (s) {
        var o = Im.bind(null, e, s);
        n.has(s) || (n.add(s), s.then(o, o));
      });
  }
}
function Bt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var s = 0; s < n.length; s++) {
      var o = n[s];
      try {
        var l = e,
          a = t,
          i = a;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case 5:
              (rt = i.stateNode), (Gt = !1);
              break e;
            case 3:
              (rt = i.stateNode.containerInfo), (Gt = !0);
              break e;
            case 4:
              (rt = i.stateNode.containerInfo), (Gt = !0);
              break e;
          }
          i = i.return;
        }
        if (rt === null) throw Error(le(160));
        yd(l, a, o), (rt = null), (Gt = !1);
        var c = o.alternate;
        c !== null && (c.return = null), (o.return = null);
      } catch (g) {
        qe(o, t, g);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) vd(t, e), (t = t.sibling);
}
function vd(e, t) {
  var n = e.alternate,
    s = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Bt(t, e), Yt(e), s & 4)) {
        try {
          Jr(3, e, e.return), Oo(3, e);
        } catch (M) {
          qe(e, e.return, M);
        }
        try {
          Jr(5, e, e.return);
        } catch (M) {
          qe(e, e.return, M);
        }
      }
      break;
    case 1:
      Bt(t, e), Yt(e), s & 512 && n !== null && fr(n, n.return);
      break;
    case 5:
      if (
        (Bt(t, e),
        Yt(e),
        s & 512 && n !== null && fr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          ns(o, "");
        } catch (M) {
          qe(e, e.return, M);
        }
      }
      if (s & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          a = n !== null ? n.memoizedProps : l,
          i = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            i === "input" && l.type === "radio" && l.name != null && zc(o, l),
              El(i, a);
            var g = El(i, l);
            for (a = 0; a < c.length; a += 2) {
              var h = c[a],
                p = c[a + 1];
              h === "style"
                ? Wc(o, p)
                : h === "dangerouslySetInnerHTML"
                ? Hc(o, p)
                : h === "children"
                ? ns(o, p)
                : ya(o, h, p, g);
            }
            switch (i) {
              case "input":
                Cl(o, l);
                break;
              case "textarea":
                Gc(o, l);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var b = l.value;
                b != null
                  ? hr(o, !!l.multiple, b, !1)
                  : f !== !!l.multiple &&
                    (l.defaultValue != null
                      ? hr(o, !!l.multiple, l.defaultValue, !0)
                      : hr(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[ds] = l;
          } catch (M) {
            qe(e, e.return, M);
          }
      }
      break;
    case 6:
      if ((Bt(t, e), Yt(e), s & 4)) {
        if (e.stateNode === null) throw Error(le(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (M) {
          qe(e, e.return, M);
        }
      }
      break;
    case 3:
      if (
        (Bt(t, e), Yt(e), s & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ls(t.containerInfo);
        } catch (M) {
          qe(e, e.return, M);
        }
      break;
    case 4:
      Bt(t, e), Yt(e);
      break;
    case 13:
      Bt(t, e),
        Yt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Ka = Xe())),
        s & 4 && cc(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((it = (g = it) || h), Bt(t, e), (it = g)) : Bt(t, e),
        Yt(e),
        s & 8192)
      ) {
        if (
          ((g = e.memoizedState !== null),
          (e.stateNode.isHidden = g) && !h && e.mode & 1)
        )
          for (ve = e, h = e.child; h !== null; ) {
            for (p = ve = h; ve !== null; ) {
              switch (((f = ve), (b = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Jr(4, f, f.return);
                  break;
                case 1:
                  fr(f, f.return);
                  var w = f.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (s = f), (n = f.return);
                    try {
                      (t = s),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (M) {
                      qe(s, n, M);
                    }
                  }
                  break;
                case 5:
                  fr(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    dc(p);
                    continue;
                  }
              }
              b !== null ? ((b.return = f), (ve = b)) : dc(p);
            }
            h = h.sibling;
          }
        e: for (h = null, p = e; ; ) {
          if (p.tag === 5) {
            if (h === null) {
              h = p;
              try {
                (o = p.stateNode),
                  g
                    ? ((l = o.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((i = p.stateNode),
                      (c = p.memoizedProps.style),
                      (a =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (i.style.display = Vc("display", a)));
              } catch (M) {
                qe(e, e.return, M);
              }
            }
          } else if (p.tag === 6) {
            if (h === null)
              try {
                p.stateNode.nodeValue = g ? "" : p.memoizedProps;
              } catch (M) {
                qe(e, e.return, M);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            h === p && (h = null), (p = p.return);
          }
          h === p && (h = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      Bt(t, e), Yt(e), s & 4 && cc(e);
      break;
    case 21:
      break;
    default:
      Bt(t, e), Yt(e);
  }
}
function Yt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (xd(n)) {
            var s = n;
            break e;
          }
          n = n.return;
        }
        throw Error(le(160));
      }
      switch (s.tag) {
        case 5:
          var o = s.stateNode;
          s.flags & 32 && (ns(o, ""), (s.flags &= -33));
          var l = ic(e);
          la(e, l, o);
          break;
        case 3:
        case 4:
          var a = s.stateNode.containerInfo,
            i = ic(e);
          oa(e, i, a);
          break;
        default:
          throw Error(le(161));
      }
    } catch (c) {
      qe(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function jm(e, t, n) {
  (ve = e), wd(e);
}
function wd(e, t, n) {
  for (var s = (e.mode & 1) !== 0; ve !== null; ) {
    var o = ve,
      l = o.child;
    if (o.tag === 22 && s) {
      var a = o.memoizedState !== null || Us;
      if (!a) {
        var i = o.alternate,
          c = (i !== null && i.memoizedState !== null) || it;
        i = Us;
        var g = it;
        if (((Us = a), (it = c) && !g))
          for (ve = o; ve !== null; )
            (a = ve),
              (c = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? fc(o)
                : c !== null
                ? ((c.return = a), (ve = c))
                : fc(o);
        for (; l !== null; ) (ve = l), wd(l), (l = l.sibling);
        (ve = o), (Us = i), (it = g);
      }
      uc(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (ve = l)) : uc(e);
  }
}
function uc(e) {
  for (; ve !== null; ) {
    var t = ve;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              it || Oo(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !it)
                if (n === null) s.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : zt(t.type, n.memoizedProps);
                  s.componentDidUpdate(
                    o,
                    n.memoizedState,
                    s.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && Yi(t, l, s);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Yi(t, a, n);
              }
              break;
            case 5:
              var i = t.stateNode;
              if (n === null && t.flags & 4) {
                n = i;
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
                var g = t.alternate;
                if (g !== null) {
                  var h = g.memoizedState;
                  if (h !== null) {
                    var p = h.dehydrated;
                    p !== null && ls(p);
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
              throw Error(le(163));
          }
        it || (t.flags & 512 && sa(t));
      } catch (f) {
        qe(t, t.return, f);
      }
    }
    if (t === e) {
      ve = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (ve = n);
      break;
    }
    ve = t.return;
  }
}
function dc(e) {
  for (; ve !== null; ) {
    var t = ve;
    if (t === e) {
      ve = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (ve = n);
      break;
    }
    ve = t.return;
  }
}
function fc(e) {
  for (; ve !== null; ) {
    var t = ve;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Oo(4, t);
          } catch (c) {
            qe(t, n, c);
          }
          break;
        case 1:
          var s = t.stateNode;
          if (typeof s.componentDidMount == "function") {
            var o = t.return;
            try {
              s.componentDidMount();
            } catch (c) {
              qe(t, o, c);
            }
          }
          var l = t.return;
          try {
            sa(t);
          } catch (c) {
            qe(t, l, c);
          }
          break;
        case 5:
          var a = t.return;
          try {
            sa(t);
          } catch (c) {
            qe(t, a, c);
          }
      }
    } catch (c) {
      qe(t, t.return, c);
    }
    if (t === e) {
      ve = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      (i.return = t.return), (ve = i);
      break;
    }
    ve = t.return;
  }
}
var Sm = Math.ceil,
  jo = pn.ReactCurrentDispatcher,
  Xa = pn.ReactCurrentOwner,
  Tt = pn.ReactCurrentBatchConfig,
  Te = 0,
  nt = null,
  Ke = null,
  st = 0,
  St = 0,
  pr = Rn(0),
  et = 0,
  xs = null,
  Vn = 0,
  Lo = 0,
  Qa = 0,
  Zr = null,
  xt = null,
  Ka = 0,
  Dr = 1 / 0,
  nn = null,
  So = !1,
  aa = null,
  Dn = null,
  Bs = !1,
  bn = null,
  Co = 0,
  es = 0,
  ia = null,
  Zs = -1,
  eo = 0;
function dt() {
  return Te & 6 ? Xe() : Zs !== -1 ? Zs : (Zs = Xe());
}
function _n(e) {
  return e.mode & 1
    ? Te & 2 && st !== 0
      ? st & -st
      : am.transition !== null
      ? (eo === 0 && (eo = su()), eo)
      : ((e = Ae),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : du(e.type))),
        e)
    : 1;
}
function Vt(e, t, n, s) {
  if (50 < es) throw ((es = 0), (ia = null), Error(le(185)));
  vs(e, n, s),
    (!(Te & 2) || e !== nt) &&
      (e === nt && (!(Te & 2) && (Lo |= n), et === 4 && vn(e, st)),
      Nt(e, s),
      n === 1 && Te === 0 && !(t.mode & 1) && ((Dr = Xe() + 500), To && Tn()));
}
function Nt(e, t) {
  var n = e.callbackNode;
  ap(e, t);
  var s = ao(e, e === nt ? st : 0);
  if (s === 0)
    n !== null && bi(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = s & -s), e.callbackPriority !== t)) {
    if ((n != null && bi(n), t === 1))
      e.tag === 0 ? lm(pc.bind(null, e)) : Eu(pc.bind(null, e)),
        nm(function () {
          !(Te & 6) && Tn();
        }),
        (n = null);
    else {
      switch (ou(s)) {
        case 1:
          n = ja;
          break;
        case 4:
          n = nu;
          break;
        case 16:
          n = lo;
          break;
        case 536870912:
          n = ru;
          break;
        default:
          n = lo;
      }
      n = _d(n, bd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function bd(e, t) {
  if (((Zs = -1), (eo = 0), Te & 6)) throw Error(le(327));
  var n = e.callbackNode;
  if (wr() && e.callbackNode !== n) return null;
  var s = ao(e, e === nt ? st : 0);
  if (s === 0) return null;
  if (s & 30 || s & e.expiredLanes || t) t = ko(e, s);
  else {
    t = s;
    var o = Te;
    Te |= 2;
    var l = jd();
    (nt !== e || st !== t) && ((nn = null), (Dr = Xe() + 500), Bn(e, t));
    do
      try {
        Dm();
        break;
      } catch (i) {
        Nd(e, i);
      }
    while (!0);
    $a(),
      (jo.current = l),
      (Te = o),
      Ke !== null ? (t = 0) : ((nt = null), (st = 0), (t = et));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Al(e)), o !== 0 && ((s = o), (t = ca(e, o)))), t === 1)
    )
      throw ((n = xs), Bn(e, 0), vn(e, s), Nt(e, Xe()), n);
    if (t === 6) vn(e, s);
    else {
      if (
        ((o = e.current.alternate),
        !(s & 30) &&
          !Cm(o) &&
          ((t = ko(e, s)),
          t === 2 && ((l = Al(e)), l !== 0 && ((s = l), (t = ca(e, l)))),
          t === 1))
      )
        throw ((n = xs), Bn(e, 0), vn(e, s), Nt(e, Xe()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = s), t)) {
        case 0:
        case 1:
          throw Error(le(345));
        case 2:
          $n(e, xt, nn);
          break;
        case 3:
          if (
            (vn(e, s), (s & 130023424) === s && ((t = Ka + 500 - Xe()), 10 < t))
          ) {
            if (ao(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & s) !== s)) {
              dt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Fl($n.bind(null, e, xt, nn), t);
            break;
          }
          $n(e, xt, nn);
          break;
        case 4:
          if ((vn(e, s), (s & 4194240) === s)) break;
          for (t = e.eventTimes, o = -1; 0 < s; ) {
            var a = 31 - Ht(s);
            (l = 1 << a), (a = t[a]), a > o && (o = a), (s &= ~l);
          }
          if (
            ((s = o),
            (s = Xe() - s),
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
                : 1960 * Sm(s / 1960)) - s),
            10 < s)
          ) {
            e.timeoutHandle = Fl($n.bind(null, e, xt, nn), s);
            break;
          }
          $n(e, xt, nn);
          break;
        case 5:
          $n(e, xt, nn);
          break;
        default:
          throw Error(le(329));
      }
    }
  }
  return Nt(e, Xe()), e.callbackNode === n ? bd.bind(null, e) : null;
}
function ca(e, t) {
  var n = Zr;
  return (
    e.current.memoizedState.isDehydrated && (Bn(e, t).flags |= 256),
    (e = ko(e, t)),
    e !== 2 && ((t = xt), (xt = n), t !== null && ua(t)),
    e
  );
}
function ua(e) {
  xt === null ? (xt = e) : xt.push.apply(xt, e);
}
function Cm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var s = 0; s < n.length; s++) {
          var o = n[s],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!Wt(l(), o)) return !1;
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
function vn(e, t) {
  for (
    t &= ~Qa,
      t &= ~Lo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ht(t),
      s = 1 << n;
    (e[n] = -1), (t &= ~s);
  }
}
function pc(e) {
  if (Te & 6) throw Error(le(327));
  wr();
  var t = ao(e, 0);
  if (!(t & 1)) return Nt(e, Xe()), null;
  var n = ko(e, t);
  if (e.tag !== 0 && n === 2) {
    var s = Al(e);
    s !== 0 && ((t = s), (n = ca(e, s)));
  }
  if (n === 1) throw ((n = xs), Bn(e, 0), vn(e, t), Nt(e, Xe()), n);
  if (n === 6) throw Error(le(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    $n(e, xt, nn),
    Nt(e, Xe()),
    null
  );
}
function Ja(e, t) {
  var n = Te;
  Te |= 1;
  try {
    return e(t);
  } finally {
    (Te = n), Te === 0 && ((Dr = Xe() + 500), To && Tn());
  }
}
function Wn(e) {
  bn !== null && bn.tag === 0 && !(Te & 6) && wr();
  var t = Te;
  Te |= 1;
  var n = Tt.transition,
    s = Ae;
  try {
    if (((Tt.transition = null), (Ae = 1), e)) return e();
  } finally {
    (Ae = s), (Tt.transition = n), (Te = t), !(Te & 6) && Tn();
  }
}
function Za() {
  (St = pr.current), Ue(pr);
}
function Bn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), tm(n)), Ke !== null))
    for (n = Ke.return; n !== null; ) {
      var s = n;
      switch ((Ra(s), s.tag)) {
        case 1:
          (s = s.type.childContextTypes), s != null && po();
          break;
        case 3:
          Cr(), Ue(wt), Ue(ct), Ga();
          break;
        case 5:
          za(s);
          break;
        case 4:
          Cr();
          break;
        case 13:
          Ue(Ge);
          break;
        case 19:
          Ue(Ge);
          break;
        case 10:
          Oa(s.type._context);
          break;
        case 22:
        case 23:
          Za();
      }
      n = n.return;
    }
  if (
    ((nt = e),
    (Ke = e = Mn(e.current, null)),
    (st = St = t),
    (et = 0),
    (xs = null),
    (Qa = Lo = Vn = 0),
    (xt = Zr = null),
    Ln !== null)
  ) {
    for (t = 0; t < Ln.length; t++)
      if (((n = Ln[t]), (s = n.interleaved), s !== null)) {
        n.interleaved = null;
        var o = s.next,
          l = n.pending;
        if (l !== null) {
          var a = l.next;
          (l.next = o), (s.next = a);
        }
        n.pending = s;
      }
    Ln = null;
  }
  return e;
}
function Nd(e, t) {
  do {
    var n = Ke;
    try {
      if (($a(), (Qs.current = No), bo)) {
        for (var s = He.memoizedState; s !== null; ) {
          var o = s.queue;
          o !== null && (o.pending = null), (s = s.next);
        }
        bo = !1;
      }
      if (
        ((Hn = 0),
        (tt = Ze = He = null),
        (Kr = !1),
        (ms = 0),
        (Xa.current = null),
        n === null || n.return === null)
      ) {
        (et = 1), (xs = t), (Ke = null);
        break;
      }
      e: {
        var l = e,
          a = n.return,
          i = n,
          c = t;
        if (
          ((t = st),
          (i.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var g = c,
            h = i,
            p = h.tag;
          if (!(h.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var f = h.alternate;
            f
              ? ((h.updateQueue = f.updateQueue),
                (h.memoizedState = f.memoizedState),
                (h.lanes = f.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var b = ec(a);
          if (b !== null) {
            (b.flags &= -257),
              tc(b, a, i, l, t),
              b.mode & 1 && Zi(l, g, t),
              (t = b),
              (c = g);
            var w = t.updateQueue;
            if (w === null) {
              var M = new Set();
              M.add(c), (t.updateQueue = M);
            } else w.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              Zi(l, g, t), ei();
              break e;
            }
            c = Error(le(426));
          }
        } else if (Be && i.mode & 1) {
          var C = ec(a);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              tc(C, a, i, l, t),
              Ta(kr(c, i));
            break e;
          }
        }
        (l = c = kr(c, i)),
          et !== 4 && (et = 2),
          Zr === null ? (Zr = [l]) : Zr.push(l),
          (l = a);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var u = od(l, c, t);
              qi(l, u);
              break e;
            case 1:
              i = c;
              var d = l.type,
                x = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (x !== null &&
                    typeof x.componentDidCatch == "function" &&
                    (Dn === null || !Dn.has(x))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var k = ld(l, i, t);
                qi(l, k);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Cd(n);
    } catch (O) {
      (t = O), Ke === n && n !== null && (Ke = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function jd() {
  var e = jo.current;
  return (jo.current = No), e === null ? No : e;
}
function ei() {
  (et === 0 || et === 3 || et === 2) && (et = 4),
    nt === null || (!(Vn & 268435455) && !(Lo & 268435455)) || vn(nt, st);
}
function ko(e, t) {
  var n = Te;
  Te |= 2;
  var s = jd();
  (nt !== e || st !== t) && ((nn = null), Bn(e, t));
  do
    try {
      km();
      break;
    } catch (o) {
      Nd(e, o);
    }
  while (!0);
  if (($a(), (Te = n), (jo.current = s), Ke !== null)) throw Error(le(261));
  return (nt = null), (st = 0), et;
}
function km() {
  for (; Ke !== null; ) Sd(Ke);
}
function Dm() {
  for (; Ke !== null && !Jf(); ) Sd(Ke);
}
function Sd(e) {
  var t = Dd(e.alternate, e, St);
  (e.memoizedProps = e.pendingProps),
    t === null ? Cd(e) : (Ke = t),
    (Xa.current = null);
}
function Cd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = wm(n, t)), n !== null)) {
        (n.flags &= 32767), (Ke = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (et = 6), (Ke = null);
        return;
      }
    } else if (((n = vm(n, t, St)), n !== null)) {
      Ke = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ke = t;
      return;
    }
    Ke = t = e;
  } while (t !== null);
  et === 0 && (et = 5);
}
function $n(e, t, n) {
  var s = Ae,
    o = Tt.transition;
  try {
    (Tt.transition = null), (Ae = 1), _m(e, t, n, s);
  } finally {
    (Tt.transition = o), (Ae = s);
  }
  return null;
}
function _m(e, t, n, s) {
  do wr();
  while (bn !== null);
  if (Te & 6) throw Error(le(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(le(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (ip(e, l),
    e === nt && ((Ke = nt = null), (st = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Bs ||
      ((Bs = !0),
      _d(lo, function () {
        return wr(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = Tt.transition), (Tt.transition = null);
    var a = Ae;
    Ae = 1;
    var i = Te;
    (Te |= 4),
      (Xa.current = null),
      Nm(e, n),
      vd(n, e),
      Yp(zl),
      (io = !!Bl),
      (zl = Bl = null),
      (e.current = n),
      jm(n),
      Zf(),
      (Te = i),
      (Ae = a),
      (Tt.transition = l);
  } else e.current = n;
  if (
    (Bs && ((Bs = !1), (bn = e), (Co = o)),
    (l = e.pendingLanes),
    l === 0 && (Dn = null),
    np(n.stateNode),
    Nt(e, Xe()),
    t !== null)
  )
    for (s = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), s(o.value, { componentStack: o.stack, digest: o.digest });
  if (So) throw ((So = !1), (e = aa), (aa = null), e);
  return (
    Co & 1 && e.tag !== 0 && wr(),
    (l = e.pendingLanes),
    l & 1 ? (e === ia ? es++ : ((es = 0), (ia = e))) : (es = 0),
    Tn(),
    null
  );
}
function wr() {
  if (bn !== null) {
    var e = ou(Co),
      t = Tt.transition,
      n = Ae;
    try {
      if (((Tt.transition = null), (Ae = 16 > e ? 16 : e), bn === null))
        var s = !1;
      else {
        if (((e = bn), (bn = null), (Co = 0), Te & 6)) throw Error(le(331));
        var o = Te;
        for (Te |= 4, ve = e.current; ve !== null; ) {
          var l = ve,
            a = l.child;
          if (ve.flags & 16) {
            var i = l.deletions;
            if (i !== null) {
              for (var c = 0; c < i.length; c++) {
                var g = i[c];
                for (ve = g; ve !== null; ) {
                  var h = ve;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Jr(8, h, l);
                  }
                  var p = h.child;
                  if (p !== null) (p.return = h), (ve = p);
                  else
                    for (; ve !== null; ) {
                      h = ve;
                      var f = h.sibling,
                        b = h.return;
                      if ((gd(h), h === g)) {
                        ve = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = b), (ve = f);
                        break;
                      }
                      ve = b;
                    }
                }
              }
              var w = l.alternate;
              if (w !== null) {
                var M = w.child;
                if (M !== null) {
                  w.child = null;
                  do {
                    var C = M.sibling;
                    (M.sibling = null), (M = C);
                  } while (M !== null);
                }
              }
              ve = l;
            }
          }
          if (l.subtreeFlags & 2064 && a !== null) (a.return = l), (ve = a);
          else
            e: for (; ve !== null; ) {
              if (((l = ve), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Jr(9, l, l.return);
                }
              var u = l.sibling;
              if (u !== null) {
                (u.return = l.return), (ve = u);
                break e;
              }
              ve = l.return;
            }
        }
        var d = e.current;
        for (ve = d; ve !== null; ) {
          a = ve;
          var x = a.child;
          if (a.subtreeFlags & 2064 && x !== null) (x.return = a), (ve = x);
          else
            e: for (a = d; ve !== null; ) {
              if (((i = ve), i.flags & 2048))
                try {
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Oo(9, i);
                  }
                } catch (O) {
                  qe(i, i.return, O);
                }
              if (i === a) {
                ve = null;
                break e;
              }
              var k = i.sibling;
              if (k !== null) {
                (k.return = i.return), (ve = k);
                break e;
              }
              ve = i.return;
            }
        }
        if (
          ((Te = o), Tn(), Jt && typeof Jt.onPostCommitFiberRoot == "function")
        )
          try {
            Jt.onPostCommitFiberRoot(Mo, e);
          } catch {}
        s = !0;
      }
      return s;
    } finally {
      (Ae = n), (Tt.transition = t);
    }
  }
  return !1;
}
function mc(e, t, n) {
  (t = kr(n, t)),
    (t = od(e, t, 1)),
    (e = kn(e, t, 1)),
    (t = dt()),
    e !== null && (vs(e, 1, t), Nt(e, t));
}
function qe(e, t, n) {
  if (e.tag === 3) mc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        mc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof s.componentDidCatch == "function" &&
            (Dn === null || !Dn.has(s)))
        ) {
          (e = kr(n, e)),
            (e = ld(t, e, 1)),
            (t = kn(t, e, 1)),
            (e = dt()),
            t !== null && (vs(t, 1, e), Nt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Mm(e, t, n) {
  var s = e.pingCache;
  s !== null && s.delete(t),
    (t = dt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    nt === e &&
      (st & n) === n &&
      (et === 4 || (et === 3 && (st & 130023424) === st && 500 > Xe() - Ka)
        ? Bn(e, 0)
        : (Qa |= n)),
    Nt(e, t);
}
function kd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Es), (Es <<= 1), !(Es & 130023424) && (Es = 4194304))
      : (t = 1));
  var n = dt();
  (e = dn(e, t)), e !== null && (vs(e, t, n), Nt(e, n));
}
function Em(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), kd(e, n);
}
function Im(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var s = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      s = e.stateNode;
      break;
    default:
      throw Error(le(314));
  }
  s !== null && s.delete(t), kd(e, n);
}
var Dd;
Dd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || wt.current) yt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (yt = !1), ym(e, t, n);
      yt = !!(e.flags & 131072);
    }
  else (yt = !1), Be && t.flags & 1048576 && Iu(t, go, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var s = t.type;
      Js(e, t), (e = t.pendingProps);
      var o = Nr(t, ct.current);
      vr(t, n), (o = Ha(null, t, s, e, o, n));
      var l = Va();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            bt(s) ? ((l = !0), mo(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Ua(t),
            (o.updater = $o),
            (t.stateNode = o),
            (o._reactInternals = t),
            Ql(t, s, e, n),
            (t = Zl(null, t, s, !0, l, n)))
          : ((t.tag = 0), Be && l && Pa(t), ut(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      s = t.elementType;
      e: {
        switch (
          (Js(e, t),
          (e = t.pendingProps),
          (o = s._init),
          (s = o(s._payload)),
          (t.type = s),
          (o = t.tag = Rm(s)),
          (e = zt(s, e)),
          o)
        ) {
          case 0:
            t = Jl(null, t, s, e, n);
            break e;
          case 1:
            t = sc(null, t, s, e, n);
            break e;
          case 11:
            t = nc(null, t, s, e, n);
            break e;
          case 14:
            t = rc(null, t, s, zt(s.type, e), n);
            break e;
        }
        throw Error(le(306, s, ""));
      }
      return t;
    case 0:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : zt(s, o)),
        Jl(e, t, s, o, n)
      );
    case 1:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : zt(s, o)),
        sc(e, t, s, o, n)
      );
    case 3:
      e: {
        if ((ud(t), e === null)) throw Error(le(387));
        (s = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          Ou(e, t),
          vo(t, s, null, n);
        var a = t.memoizedState;
        if (((s = a.element), l.isDehydrated))
          if (
            ((l = {
              element: s,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (o = kr(Error(le(423)), t)), (t = oc(e, t, s, n, o));
            break e;
          } else if (s !== o) {
            (o = kr(Error(le(424)), t)), (t = oc(e, t, s, n, o));
            break e;
          } else
            for (
              Ct = Cn(t.stateNode.containerInfo.firstChild),
                kt = t,
                Be = !0,
                Ft = null,
                n = Au(t, null, s, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((jr(), s === o)) {
            t = fn(e, t, n);
            break e;
          }
          ut(e, t, s, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Lu(t),
        e === null && ql(t),
        (s = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (a = o.children),
        Gl(s, o) ? (a = null) : l !== null && Gl(s, l) && (t.flags |= 32),
        cd(e, t),
        ut(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && ql(t), null;
    case 13:
      return dd(e, t, n);
    case 4:
      return (
        Ba(t, t.stateNode.containerInfo),
        (s = t.pendingProps),
        e === null ? (t.child = Sr(t, null, s, n)) : ut(e, t, s, n),
        t.child
      );
    case 11:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : zt(s, o)),
        nc(e, t, s, o, n)
      );
    case 7:
      return ut(e, t, t.pendingProps, n), t.child;
    case 8:
      return ut(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ut(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((s = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (a = o.value),
          Oe(xo, s._currentValue),
          (s._currentValue = a),
          l !== null)
        )
          if (Wt(l.value, a)) {
            if (l.children === o.children && !wt.current) {
              t = fn(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var i = l.dependencies;
              if (i !== null) {
                a = l.child;
                for (var c = i.firstContext; c !== null; ) {
                  if (c.context === s) {
                    if (l.tag === 1) {
                      (c = an(-1, n & -n)), (c.tag = 2);
                      var g = l.updateQueue;
                      if (g !== null) {
                        g = g.shared;
                        var h = g.pending;
                        h === null
                          ? (c.next = c)
                          : ((c.next = h.next), (h.next = c)),
                          (g.pending = c);
                      }
                    }
                    (l.lanes |= n),
                      (c = l.alternate),
                      c !== null && (c.lanes |= n),
                      Yl(l.return, n, t),
                      (i.lanes |= n);
                    break;
                  }
                  c = c.next;
                }
              } else if (l.tag === 10) a = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((a = l.return), a === null)) throw Error(le(341));
                (a.lanes |= n),
                  (i = a.alternate),
                  i !== null && (i.lanes |= n),
                  Yl(a, n, t),
                  (a = l.sibling);
              } else a = l.child;
              if (a !== null) a.return = l;
              else
                for (a = l; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((l = a.sibling), l !== null)) {
                    (l.return = a.return), (a = l);
                    break;
                  }
                  a = a.return;
                }
              l = a;
            }
        ut(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (s = t.pendingProps.children),
        vr(t, n),
        (o = $t(o)),
        (s = s(o)),
        (t.flags |= 1),
        ut(e, t, s, n),
        t.child
      );
    case 14:
      return (
        (s = t.type),
        (o = zt(s, t.pendingProps)),
        (o = zt(s.type, o)),
        rc(e, t, s, o, n)
      );
    case 15:
      return ad(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : zt(s, o)),
        Js(e, t),
        (t.tag = 1),
        bt(s) ? ((e = !0), mo(t)) : (e = !1),
        vr(t, n),
        sd(t, s, o),
        Ql(t, s, o, n),
        Zl(null, t, s, !0, e, n)
      );
    case 19:
      return fd(e, t, n);
    case 22:
      return id(e, t, n);
  }
  throw Error(le(156, t.tag));
};
function _d(e, t) {
  return tu(e, t);
}
function Pm(e, t, n, s) {
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
    (this.mode = s),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Rt(e, t, n, s) {
  return new Pm(e, t, n, s);
}
function ti(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Rm(e) {
  if (typeof e == "function") return ti(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === wa)) return 11;
    if (e === ba) return 14;
  }
  return 2;
}
function Mn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Rt(e.tag, t, e.key, e.mode)),
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
function to(e, t, n, s, o, l) {
  var a = 2;
  if (((s = e), typeof e == "function")) ti(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case rr:
        return zn(n.children, o, l, t);
      case va:
        (a = 8), (o |= 8);
        break;
      case wl:
        return (
          (e = Rt(12, n, t, o | 2)), (e.elementType = wl), (e.lanes = l), e
        );
      case bl:
        return (e = Rt(13, n, t, o)), (e.elementType = bl), (e.lanes = l), e;
      case Nl:
        return (e = Rt(19, n, t, o)), (e.elementType = Nl), (e.lanes = l), e;
      case Lc:
        return Uo(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case $c:
              a = 10;
              break e;
            case Oc:
              a = 9;
              break e;
            case wa:
              a = 11;
              break e;
            case ba:
              a = 14;
              break e;
            case gn:
              (a = 16), (s = null);
              break e;
          }
        throw Error(le(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Rt(a, n, t, o)), (t.elementType = e), (t.type = s), (t.lanes = l), t
  );
}
function zn(e, t, n, s) {
  return (e = Rt(7, e, s, t)), (e.lanes = n), e;
}
function Uo(e, t, n, s) {
  return (
    (e = Rt(22, e, s, t)),
    (e.elementType = Lc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function xl(e, t, n) {
  return (e = Rt(6, e, null, t)), (e.lanes = n), e;
}
function yl(e, t, n) {
  return (
    (t = Rt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Tm(e, t, n, s, o) {
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
    (this.eventTimes = Jo(0)),
    (this.expirationTimes = Jo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Jo(0)),
    (this.identifierPrefix = s),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function ni(e, t, n, s, o, l, a, i, c) {
  return (
    (e = new Tm(e, t, n, i, c)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Rt(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: s,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ua(l),
    e
  );
}
function Am(e, t, n) {
  var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: nr,
    key: s == null ? null : "" + s,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Md(e) {
  if (!e) return In;
  e = e._reactInternals;
  e: {
    if (Yn(e) !== e || e.tag !== 1) throw Error(le(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (bt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(le(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (bt(n)) return Mu(e, n, t);
  }
  return t;
}
function Ed(e, t, n, s, o, l, a, i, c) {
  return (
    (e = ni(n, s, !0, e, o, l, a, i, c)),
    (e.context = Md(null)),
    (n = e.current),
    (s = dt()),
    (o = _n(n)),
    (l = an(s, o)),
    (l.callback = t ?? null),
    kn(n, l, o),
    (e.current.lanes = o),
    vs(e, o, s),
    Nt(e, s),
    e
  );
}
function Bo(e, t, n, s) {
  var o = t.current,
    l = dt(),
    a = _n(o);
  return (
    (n = Md(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = an(l, a)),
    (t.payload = { element: e }),
    (s = s === void 0 ? null : s),
    s !== null && (t.callback = s),
    (e = kn(o, t, a)),
    e !== null && (Vt(e, o, a, l), Xs(e, o, a)),
    a
  );
}
function Do(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function hc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ri(e, t) {
  hc(e, t), (e = e.alternate) && hc(e, t);
}
function $m() {
  return null;
}
var Id =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function si(e) {
  this._internalRoot = e;
}
zo.prototype.render = si.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(le(409));
  Bo(e, t, null, null);
};
zo.prototype.unmount = si.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Wn(function () {
      Bo(null, e, null, null);
    }),
      (t[un] = null);
  }
};
function zo(e) {
  this._internalRoot = e;
}
zo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = iu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < yn.length && t !== 0 && t < yn[n].priority; n++);
    yn.splice(n, 0, e), n === 0 && uu(e);
  }
};
function oi(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Go(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function gc() {}
function Om(e, t, n, s, o) {
  if (o) {
    if (typeof s == "function") {
      var l = s;
      s = function () {
        var g = Do(a);
        l.call(g);
      };
    }
    var a = Ed(t, s, e, 0, null, !1, !1, "", gc);
    return (
      (e._reactRootContainer = a),
      (e[un] = a.current),
      cs(e.nodeType === 8 ? e.parentNode : e),
      Wn(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof s == "function") {
    var i = s;
    s = function () {
      var g = Do(c);
      i.call(g);
    };
  }
  var c = ni(e, 0, !1, null, null, !1, !1, "", gc);
  return (
    (e._reactRootContainer = c),
    (e[un] = c.current),
    cs(e.nodeType === 8 ? e.parentNode : e),
    Wn(function () {
      Bo(t, c, n, s);
    }),
    c
  );
}
function Fo(e, t, n, s, o) {
  var l = n._reactRootContainer;
  if (l) {
    var a = l;
    if (typeof o == "function") {
      var i = o;
      o = function () {
        var c = Do(a);
        i.call(c);
      };
    }
    Bo(t, a, e, o);
  } else a = Om(n, t, e, o, s);
  return Do(a);
}
lu = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Hr(t.pendingLanes);
        n !== 0 &&
          (Sa(t, n | 1), Nt(t, Xe()), !(Te & 6) && ((Dr = Xe() + 500), Tn()));
      }
      break;
    case 13:
      Wn(function () {
        var s = dn(e, 1);
        if (s !== null) {
          var o = dt();
          Vt(s, e, 1, o);
        }
      }),
        ri(e, 1);
  }
};
Ca = function (e) {
  if (e.tag === 13) {
    var t = dn(e, 134217728);
    if (t !== null) {
      var n = dt();
      Vt(t, e, 134217728, n);
    }
    ri(e, 134217728);
  }
};
au = function (e) {
  if (e.tag === 13) {
    var t = _n(e),
      n = dn(e, t);
    if (n !== null) {
      var s = dt();
      Vt(n, e, t, s);
    }
    ri(e, t);
  }
};
iu = function () {
  return Ae;
};
cu = function (e, t) {
  var n = Ae;
  try {
    return (Ae = e), t();
  } finally {
    Ae = n;
  }
};
Pl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Cl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var s = n[t];
          if (s !== e && s.form === e.form) {
            var o = Ro(s);
            if (!o) throw Error(le(90));
            Bc(s), Cl(s, o);
          }
        }
      }
      break;
    case "textarea":
      Gc(e, n);
      break;
    case "select":
      (t = n.value), t != null && hr(e, !!n.multiple, t, !1);
  }
};
Xc = Ja;
Qc = Wn;
var Lm = { usingClientEntryPoint: !1, Events: [bs, ar, Ro, qc, Yc, Ja] },
  zr = {
    findFiberByHostInstance: On,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Um = {
    bundleType: zr.bundleType,
    version: zr.version,
    rendererPackageName: zr.rendererPackageName,
    rendererConfig: zr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: pn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Zc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: zr.findFiberByHostInstance || $m,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var zs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!zs.isDisabled && zs.supportsFiber)
    try {
      (Mo = zs.inject(Um)), (Jt = zs);
    } catch {}
}
_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lm;
_t.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!oi(t)) throw Error(le(200));
  return Am(e, t, null, n);
};
_t.createRoot = function (e, t) {
  if (!oi(e)) throw Error(le(299));
  var n = !1,
    s = "",
    o = Id;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = ni(e, 1, !1, null, null, n, !1, s, o)),
    (e[un] = t.current),
    cs(e.nodeType === 8 ? e.parentNode : e),
    new si(t)
  );
};
_t.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(le(188))
      : ((e = Object.keys(e).join(",")), Error(le(268, e)));
  return (e = Zc(t)), (e = e === null ? null : e.stateNode), e;
};
_t.flushSync = function (e) {
  return Wn(e);
};
_t.hydrate = function (e, t, n) {
  if (!Go(t)) throw Error(le(200));
  return Fo(null, e, t, !0, n);
};
_t.hydrateRoot = function (e, t, n) {
  if (!oi(e)) throw Error(le(405));
  var s = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    a = Id;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Ed(t, null, e, 1, n ?? null, o, !1, l, a)),
    (e[un] = t.current),
    cs(e),
    s)
  )
    for (e = 0; e < s.length; e++)
      (n = s[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new zo(t);
};
_t.render = function (e, t, n) {
  if (!Go(t)) throw Error(le(200));
  return Fo(null, e, t, !1, n);
};
_t.unmountComponentAtNode = function (e) {
  if (!Go(e)) throw Error(le(40));
  return e._reactRootContainer
    ? (Wn(function () {
        Fo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[un] = null);
        });
      }),
      !0)
    : !1;
};
_t.unstable_batchedUpdates = Ja;
_t.unstable_renderSubtreeIntoContainer = function (e, t, n, s) {
  if (!Go(n)) throw Error(le(200));
  if (e == null || e._reactInternals === void 0) throw Error(le(38));
  return Fo(e, t, n, !1, s);
};
_t.version = "18.3.1-next-f1338f8080-20240426";
function Pd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pd);
    } catch (e) {
      console.error(e);
    }
}
Pd(), (Pc.exports = _t);
var Bm = Pc.exports,
  Rd,
  xc = Bm;
(Rd = xc.createRoot), xc.hydrateRoot;
class zm {
  constructor() {
    (this.config = null), (this.isConfigLoaded = !1);
  }
  async loadConfig() {
    var t;
    if (this.config && this.isConfigLoaded) return this.config;
    try {
      const n = await fetch("../config.txt");
      if (!n.ok) throw new Error(`Failed to load config: ${n.status}`);
      const s = await n.text();
      if (
        ((this.config = JSON.parse(s)),
        (this.isConfigLoaded = !0),
        !((t = this.config) != null && t.domain))
      )
        throw new Error("Invalid config: missing domain");
      return this.config;
    } catch (n) {
      throw (
        (console.error("Failed to load API config:", n),
        new Error("API configuration not available"))
      );
    }
  }
  async request(t, n = {}) {
    const o = `${(await this.loadConfig()).domain}${t}`,
      l = {
        method: "POST",
        headers: { "Content-Type": "application/json", ...n.headers },
        ...n,
      },
      a = new Date().toISOString();
    if (
      (console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"),
      console.log(`📤 API Request [${a}]`),
      console.log("🔗 Endpoint:", t),
      console.log("🌐 Full URL:", o),
      console.log("🔧 Method:", l.method),
      console.log("📋 Headers:", l.headers),
      l.body)
    ) {
      console.log("📦 Request Body:", l.body);
      try {
        const i = JSON.parse(l.body);
        console.log("📦 Parsed Body:", i);
      } catch {
        console.log("📦 Body (raw):", l.body);
      }
    }
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    try {
      const i = await fetch(o, l);
      if (
        (console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"),
        console.log(`📥 API Response [${new Date().toISOString()}]`),
        console.log("🔗 Endpoint:", t),
        console.log("📊 Status:", i.status, i.statusText),
        console.log(
          "📋 Response Headers:",
          Object.fromEntries(i.headers.entries())
        ),
        !i.ok)
      )
        throw (
          (console.log("❌ HTTP Error:", i.status),
          console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"),
          new Error(`HTTP error! status: ${i.status}`))
        );
      const c = await i.json();
      return (
        console.log("✅ Response Data:", c),
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"),
        c
      );
    } catch (i) {
      throw (
        (console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"),
        console.log("❌ API Request Failed"),
        console.log("🔗 Endpoint:", t),
        console.log("💥 Error:", i),
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"),
        i)
      );
    }
  }
  async login(t) {
    const n = { Data: { ID: t.ID.trim(), Password: t.Password } };
    return this.request("/api/session/login", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
  async getDepartments(t = {}) {
    return this.request("/api/ServerSetting/get_name", {
      method: "POST",
      body: JSON.stringify(t),
    });
  }
  async getMedicineCloud(t = {}) {
    return this.request("/api/MED_page/get_med_cloud", {
      method: "POST",
      body: JSON.stringify({}),
    });
  }
  async searchMedicine(t = "", n = "N") {
    try {
      const s = await this.getMedicineCloud();
      if (s.Code !== 200 || !s.Data)
        return console.error("API returned error:", s), [];
      let o = s.Data;
      if (
        ((o = o.filter((l) => l.DRUGKIND === n)),
        (o = o.filter((l) => l.FILE_STATUS !== "關檔中")),
        t.trim())
      ) {
        const l = t.toLowerCase();
        o = o.filter(
          (a) =>
            (a.CODE && a.CODE.toLowerCase().includes(l)) ||
            (a.CHT_NAME && a.CHT_NAME.toLowerCase().includes(l)) ||
            (a.NAME && a.NAME.toLowerCase().includes(l))
        );
      }
      return o;
    } catch (s) {
      return console.error("Medicine search failed:", s), [];
    }
  }
  async getMedMapByDepartment(t) {
    const n = { Data: {}, ValueAry: [t] };
    return this.request("/api/medMap/get_medMap_by_department", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
  async updateContainerPosition(t) {
    const n = { Data: [t] };
    return this.request("/api/medMap/update_medMap_section", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
  async addMedMapBox(t) {
    const n = { Data: t };
    return this.request("/api/medMap/add_medMap_box", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
  async updateMedMapBox(t) {
    const n = { Data: t };
    return this.request("/api/medMap/update_medMap_box", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
  async updateEpd266Storages(t, n, s) {
    const o = { ServerName: t, ServerType: n, Data: s };
    return this.request("/api/device/update_epd266_storages", {
      method: "POST",
      body: JSON.stringify(o),
    });
  }
  async updateMedMapDrawer(t) {
    const n = { Data: t };
    return this.request("/api/medMap/update_medMap_drawer", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
  async updateMedMapShelf(t) {
    const n = { Data: t };
    return this.request("/api/medMap/update_medMap_shelf", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
  async addMedMapSection(t, n) {
    const s = { ValueAry: [t, n] };
    return this.request("/api/medMap/add_medMap_section", {
      method: "POST",
      body: JSON.stringify(s),
    });
  }
  async addMedMapShelf(t) {
    const n = { Data: t };
    return this.request("/api/medMap/add_medMap_shelf", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
  async addMedMapDrawer(t) {
    const n = { Data: t };
    return this.request("/api/medMap/add_medMap_drawer", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
  async addSubSection(t, n) {
    const s = { ValueAry: [t, n] };
    return this.request("/api/medMap/add_sub_section", {
      method: "POST",
      body: JSON.stringify(s),
    });
  }
  async updateSubSection(t) {
    const n = { Data: t };
    return this.request("/api/medMap/update_sub_section", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
  async updateMedMapSection(t) {
    const n = { Data: t };
    return this.request("/api/medMap/update_medMap_section", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
  async updateEpd266Medcode(t, n, s, o) {
    const l = {
      ServerName: t,
      ServerType: n,
      ValueAry: [`code=${s}`],
      Data: o,
    };
    return this.request("/api/device/update_epd266_medcode", {
      method: "POST",
      body: JSON.stringify(l),
    });
  }
  async getConfig() {
    return this.loadConfig();
  }
  async checkConnection() {
    try {
      return await this.loadConfig(), !0;
    } catch (t) {
      return console.error("API connection check failed:", t), !1;
    }
  }
  async addStock(t) {
    const n = { Data: t };
    return (
      console.log(n),
      this.request("/api/medMap/add_stock", {
        method: "POST",
        body: JSON.stringify(n),
      })
    );
  }
  async updateStock(t) {
    const n = { Data: t };
    return this.request("/api/medMap/update_stock", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
  async addMedMap(t, n, s) {
    const o = { ValueAry: [t, n, s, "0,0"] };
    return this.request("/api/medMap/add_medMap", {
      method: "POST",
      body: JSON.stringify(o),
    });
  }
  async scanBarcode(t) {
    const o = `${
        (await this.loadConfig()).ai || "https://www.kutech.tw:3000"
      }/barcode`,
      l = new FormData();
    l.append("file", t),
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"),
      console.log(`📤 AI Barcode Scan Request [${new Date().toISOString()}]`),
      console.log("🔗 URL:", o),
      console.log("📷 Image File:", t.name, t.size, "bytes"),
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    try {
      const a = await fetch(o, { method: "POST", body: l }),
        i = await a.json();
      return (
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"),
        console.log(
          `📥 AI Barcode Scan Response [${new Date().toISOString()}]`
        ),
        console.log("📊 Status:", a.status),
        console.log("📦 Response Data:", i),
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"),
        i
      );
    } catch (a) {
      return console.error("❌ AI Barcode Scan Error:", a), { results: [] };
    }
  }
  async searchByBarCode(t) {
    const n = { Value: t };
    return this.request("/api/MED_page/serch_by_BarCode", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
  async lightByCodeNameType(t, n, s, o, l) {
    const a = {
      Method: "light_by_code_name_type",
      ValueAry: [
        `ServerName=${t}`,
        `ServerType=${n}`,
        `code=${s}`,
        `color=${o}`,
        `lightness=${l}`,
      ],
      Data: {},
    };
    return this.request("/api/medMap/light_by_code_name_type", {
      method: "POST",
      body: JSON.stringify(a),
    });
  }
  async addMedClouds(t, n, s, o) {
    let l = o;
    l.push(t);
    const a = {
      Data: [{ BARCODE: l, CODE: n, BARCODE2: s || JSON.stringify([t]) }],
    };
    return this.request("/api/MED_page/add_med_clouds", {
      method: "POST",
      body: JSON.stringify(a),
    });
  }
  async stockDeleteValidityPeriod(t, n) {
    const s = { ValueAry: [t, n] };
    return this.request("/api/medMap/stock_delete_Validity_period", {
      method: "POST",
      body: JSON.stringify(s),
    });
  }
  resetConfig() {
    (this.config = null), (this.isConfigLoaded = !1);
  }
  async getRequisitionByTime(t, n) {
    const s = { ValueAry: [t, n] };
    return this.request("/api/materialRequisition/get_by_requestTime", {
      method: "POST",
      body: JSON.stringify(s),
    });
  }
  async getDistributionByTime(t, n) {
    const s = { ValueAry: [t, n] };
    return this.request("/api/drugStotreDistribution/get_by_addedTime", {
      method: "POST",
      body: JSON.stringify(s),
    });
  }
  async updateRequisitionNotice(t, n) {
    const s = { Data: { GUID: t, notice: n } };
    return this.request("/api/materialRequisition/update_notice", {
      method: "POST",
      body: JSON.stringify(s),
    });
  }
  async updateDistributionNotice(t, n) {
    const s = { ValueAry: [t, n] };
    return (
      console.log(s),
      this.request("/api/drugStotreDistribution/update_notice", {
        method: "POST",
        body: JSON.stringify(s),
      })
    );
  }
  async updateRequisitionActualQuantity(t, n) {
    const s = { Data: { GUID: t, actualQuantity: n } };
    return this.request("/api/materialRequisition/update_actual_quantity", {
      method: "POST",
      body: JSON.stringify(s),
    });
  }
  async updateRequisitionByGuid(t) {
    const n = { Data: [t] };
    return this.request("/api/materialRequisition/update_by_guid", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
  async updateDistributionActualQuantity(t, n) {
    const s = { ValueAry: [t, n] };
    return this.request("/api/drugStotreDistribution/update_actqty_by_guid", {
      method: "POST",
      body: JSON.stringify(s),
    });
  }
  async updateDistributionByGuid(t) {
    const n = { Data: [t] };
    return this.request("/api/drugStotreDistribution/update_by_guid", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
  async getAllStaffInfo() {
    return this.request("/api/person_page/get_all", {
      method: "POST",
      body: JSON.stringify({}),
    });
  }
}
const ke = new zm();
class Gm {
  convertMedMapApiToFakeData(t) {
    console.log("🔄 開始轉換 MedMap API 資料到假資料格式"),
      console.log("📥 原始 API 資料:", t);
    try {
      Array.isArray(t) ||
        (console.warn("⚠️ API 資料不是陣列格式，嘗試包裝成陣列"), (t = [t]));
      const s = t
        .map((o, l) => this.convertSingleDepartment(o, l))
        .filter((o) => {
          if (Object.keys(o).length !== 0) return o;
        });
      return console.log("✅ MedMap 資料轉換完成，結果:", s), s;
    } catch (n) {
      return console.error("❌ MedMap 資料轉換失敗:", n), [];
    }
  }
  convertSingleDepartment(t, n) {
    if (Object.keys(t).length !== 0) {
      let s;
      t.absolute_position ? (s = t.absolute_position.split(",")) : (s = [0, 0]);
      const o = {
        GUID: t.GUID || t.guid || `dept_${n}_${Date.now()}`,
        Master_GUID: t.Master_GUID,
        type: t.sys_ServerSetting.type || "",
        name: t.sys_ServerSetting.name || "",
        gird_position: t.position,
        position: { x: s[0], y: s[1] },
        contents: t.medMap_Section,
        department_type: t.sys_ServerSetting["department_type "],
        class: 0,
      };
      return (
        Array.isArray(t.medMap_Section) &&
          t.medMap_Section.forEach((l, a) => {
            let i;
            l.absolute_position
              ? (i = l.absolute_position.split(","))
              : (i = [0, 0]),
              (o.contents[a] = {
                GUID: l.GUID,
                Master_GUID: l.Master_GUID,
                name: l.name,
                type: "parent_container",
                class: 1,
                gird_position: l.position,
                position: { x: i[0], y: i[1] },
                serverName: t.sys_ServerSetting.name,
                serverType: t.sys_ServerSetting.type,
                device_type: t.sys_ServerSetting.device_type,
                contents: [],
                med_list: [],
              }),
              Array.isArray(l.sub_section) &&
                l.sub_section.forEach((c, g) => {
                  let h = {
                    GUID: c.GUID,
                    Master_GUID: c.Master_GUID,
                    name: c.name,
                    type: "sub_container",
                    class: 2,
                    gird_position: c.position,
                    contents: [],
                    serverName: t.sys_ServerSetting.name,
                    serverType: t.sys_ServerSetting.type,
                    oriMaxCol: 0,
                  };
                  o.contents[a].contents[g] = h;
                  let p = 0;
                  Array.isArray(c.shelf) &&
                    c.shelf.forEach((f, b) => {
                      let w = {
                        GUID: f.GUID,
                        Master_GUID: f.Master_GUID,
                        name: `層架_${b}`,
                        class: 3,
                        gird_position: f.position,
                        serverName: f.serverName || "",
                        serverType: f.serverType || "",
                        device_type: f.device_type || "",
                        type: f.type,
                        contents: [],
                      };
                      if (
                        (w.serverName &&
                          (w.serverName = t.sys_ServerSetting.name),
                        w.serverType &&
                          (w.serverType = t.sys_ServerSetting.type),
                        f.type == "dispensing_shelves" || f.type == "shelf")
                      )
                        f.type == "shelf" && (w.type = "dispensing_shelves"),
                          Array.isArray(f.medMapBox) &&
                            f.medMapBox.forEach((C, u) => {
                              let d = {
                                  GUID: C.GUID,
                                  Master_GUID: C.Master_GUID,
                                  name: "藥盒",
                                  class: 4,
                                  gird_position: C.position,
                                  ip: C.ip_box,
                                  box_type: "",
                                  width: C.width,
                                  height: C.height,
                                  serverType: C.serverType,
                                  serverName: C.serverName,
                                  med_info: [],
                                  type: "med_box",
                                },
                                x = {},
                                k = f.position.split(","),
                                O = C.position.split(",");
                              if (C.storage) {
                                switch (
                                  ((d.device_type = C.storage.DeviceType),
                                  (d.storage = C.storage),
                                  +d.device_type)
                                ) {
                                  case 10:
                                    d.box_type = "2.9";
                                    break;
                                  case 118:
                                    d.box_type = "2.13";
                                    break;
                                  case 13:
                                    d.box_type = "4.2";
                                    break;
                                }
                                (x.name = C.storage.Name),
                                  (x.code = C.storage.Code),
                                  (x.cht_name = C.storage.ChineseName),
                                  (x.SKDIACODE = C.storage.SKDIACODE),
                                  (x.device_type = C.storage.device_type),
                                  (x.qty = C.storage.StorageName),
                                  (x.stockCol = `${+k[0] + 1}`),
                                  (x.stockRow = ""),
                                  (x.stock = `${+O[1] + 1}`);
                              } else
                                (d.device_type = 10),
                                  (d.box_type = "2.9"),
                                  (x.name = ""),
                                  (x.code = ""),
                                  (x.cht_name = ""),
                                  (x.stockCol = `${+k[0] + 1}`),
                                  (x.stockRow = ""),
                                  (x.stock = `${+O[1] + 1}`);
                              o.contents[a].med_list.push(x),
                                (d.med_info[0] = x),
                                w.contents.push(d);
                            });
                      else {
                        (w.type = "store_shelves"),
                          (w.ip = f.ip_light),
                          (w.width = f.width),
                          (w.height = f.height);
                        const C = f.medMapStock.sort((u, d) => {
                          const [x] = u.location.split(",").map(Number),
                            [k] = d.location.split(",").map(Number);
                          return x - k;
                        });
                        (w.medMapStock = C),
                          (w.name = f.name),
                          C.forEach((u, d) => {
                            let x = f.position.split(",");
                            if (u.code) {
                              let k = {};
                              (k.name = u.name),
                                (k.code = u.code),
                                (k.cht_name = ""),
                                (k.SKDIACODE = u.material_no),
                                (k.qty = u.qty),
                                (k.stockCol = `${+x[0] + 1}`),
                                (k.stockRow = `${+x[1] + 1}`),
                                (k.stock = `${d + 1}`),
                                o.contents[a].med_list.push(k);
                            }
                          });
                      }
                      let M = f.position.split(",")[1];
                      p < +M &&
                        ((p = +M), (o.contents[a].contents[g].oriMaxCol = +p)),
                        o.contents[a].contents[g].contents.push(w);
                    }),
                    Array.isArray(c.drawer) &&
                      c.drawer.forEach((f, b) => {
                        let w = {
                          GUID: f.GUID,
                          Master_GUID: f.Master_GUID,
                          name: `抽屜 ${b}`,
                          class: 3,
                          gird_position: f.position,
                          ip: f.ip_drawer,
                          serverName: f.serverName,
                          serverType: f.serverType,
                        };
                        w.serverName &&
                          (w.serverName = t.sys_ServerSetting.name),
                          w.serverType &&
                            (w.serverType = t.sys_ServerSetting.type),
                          f.drawer
                            ? ((w.drawer = f.drawer),
                              f.drawer.Boxes &&
                                ((w.type = "grid_draw"),
                                (w.name = f.drawer.Name),
                                (w.Boxes = []),
                                Array.isArray(f.drawer.Boxes)
                                  ? f.drawer.Boxes.forEach((u, d) => {
                                      let x = [];
                                      Array.isArray(u) &&
                                        u.forEach((k, O) => {
                                          let I = {
                                            Row: k.Row,
                                            Column: k.Column,
                                            Width: 1,
                                            Height: 1,
                                            Slave: k.Slave,
                                            SlaveBox_Row: k.SlaveBox_Row,
                                            SlaveBox_Column: k.SlaveBox_Column,
                                            MasterBox_Column:
                                              k.MasterBox_Column,
                                            MasterBox_Row: k.MasterBox_Row,
                                            Name: k.Name,
                                            Code: k.Code,
                                            ChineseName: k.ChineseName,
                                            GUID: k.GUID,
                                          };
                                          x.push(I),
                                            k.Code &&
                                              o.contents[a].med_list.push(
                                                k.Code
                                              );
                                        }),
                                        w.Boxes.push(x);
                                    })
                                  : (w.Boxes = f.drawer.Boxes)))
                            : ((w.type = "list_draw"),
                              (w.name = `清單抽屜 ${b}`));
                        let M = f.position.split(",")[1];
                        p < +M &&
                          ((p = +M),
                          (o.contents[a].contents[g].oriMaxCol = +p)),
                          o.contents[a].contents[g].contents.push(w);
                      });
                });
          }),
        o
      );
    } else return {};
  }
  convertSingleComponent(t, n, s) {
    var l, a, i, c, g;
    const o = {
      GUID: t.GUID || t.guid || `comp_${n}_${Date.now()}`,
      type: this.mapComponentType(t.type || t.component_type || "unknown"),
      name: t.name || t.component_name || `組件_${n}`,
      position: {
        x: ((l = t.position) == null ? void 0 : l.x) || t.x || 50 + n * 200,
        y: ((a = t.position) == null ? void 0 : a.y) || t.y || 50 + n * 150,
      },
      dimensions: {
        width:
          ((i = t.dimensions) == null ? void 0 : i.width) || t.width || 180,
        height:
          ((c = t.dimensions) == null ? void 0 : c.height) || t.height || 120,
        depth: ((g = t.dimensions) == null ? void 0 : g.depth) || t.depth || 30,
      },
      med_box: t.med_box || t.medBox || t.medicine_boxes || [],
      Master_GUID: s,
    };
    return (
      t.components &&
        Array.isArray(t.components) &&
        (o.components = t.components.map((h, p) =>
          this.convertSingleComponent(h, p, o.GUID)
        )),
      Object.keys(t).forEach((h) => {
        [
          "GUID",
          "type",
          "name",
          "position",
          "dimensions",
          "med_box",
          "components",
        ].includes(h) || (o[h] = t[h]);
      }),
      o
    );
  }
  mapDepartmentType(t) {
    return (
      {
        dispensing_station: "調劑台",
        warehouse: "藥庫",
        pharmacy: "藥局",
        storage: "儲存區",
      }[t] || t
    );
  }
  mapComponentType(t) {
    return (
      {
        medicine_box_shelf: "med_box_shelf",
        medicine_shelf: "normal_shelf",
        grid_drawer: "grid_draw",
        list_drawer: "list_draw",
        medicine_box: "med_box",
        parent_container: "parent_container",
        sub_container: "sub_container",
        dispensing_shelves: "dispensing_shelves",
        store_shelves: "store_shelves",
      }[t] || t
    );
  }
  validateConvertedData(t) {
    try {
      if (!Array.isArray(t))
        return console.error("❌ 轉換後的資料不是陣列格式"), !1;
      for (const n of t) {
        if (!n.GUID || !n.type || !n.name)
          return console.error("❌ 部門資料缺少必要欄位:", n), !1;
        if (!n.gird_position || typeof n.gird_position != "string")
          return console.error("❌ 部門位置資料格式錯誤:", n.gird_position), !1;
        if (n.components && Array.isArray(n.components)) {
          for (const s of n.components)
            if (!s.GUID || !s.type)
              return console.error("❌ 組件資料缺少必要欄位:", s), !1;
        }
      }
      return console.log("✅ 轉換後的資料結構驗證通過"), !0;
    } catch (n) {
      return console.error("❌ 資料驗證過程中發生錯誤:", n), !1;
    }
  }
  generateConversionReport(t, n) {
    const s = {
      timestamp: new Date().toISOString(),
      originalDataCount: Array.isArray(t) ? t.length : 0,
      convertedDataCount: n.length,
      conversionSuccess: n.length > 0,
      totalComponents: n.reduce((o, l) => {
        var a;
        return o + (((a = l.components) == null ? void 0 : a.length) || 0);
      }, 0),
      departmentTypes: [...new Set(n.map((o) => o.type))],
      componentTypes: [
        ...new Set(
          n.flatMap((o) => {
            var l;
            return (
              ((l = o.components) == null ? void 0 : l.map((a) => a.type)) || []
            );
          })
        ),
      ],
    };
    return console.log("📊 資料轉換報告:", s), s;
  }
}
const At = new Gm(),
  Fm = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: At },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Td = m.createContext(void 0),
  Hm = ({ children: e }) => {
    const [t, n] = m.useState(!1),
      [s, o] = m.useState(null),
      [l, a] = m.useState(!1),
      [i, c] = m.useState(null),
      [g, h] = m.useState(null),
      [p, f] = m.useState("medicine"),
      [b, w] = m.useState(!1),
      [M, C] = m.useState(0),
      [u, d] = m.useState({ message: "", type: "success", isVisible: !1 }),
      [x, k] = m.useState(!1),
      [O, I] = m.useState(null),
      [A, _] = m.useState("edit"),
      [ee, S] = m.useState(!1),
      [U, q] = m.useState(null),
      [P, T] = m.useState(!1),
      [se, v] = m.useState(null),
      [N, j] = m.useState(!1),
      [V, de] = m.useState(!1),
      [te, ae] = m.useState(null),
      [Se, ue] = m.useState(!1),
      [Ce, fe] = m.useState(null),
      [Y, pe] = m.useState(!1),
      [be, R] = m.useState(null),
      [me, z] = m.useState(!1),
      [D, ne] = m.useState(null),
      [ie, B] = m.useState(null),
      [J, E] = m.useState("add"),
      [F, H] = m.useState(!1),
      [K, ce] = m.useState([]),
      [he, _e] = m.useState([]),
      [ye, we] = m.useState(!1),
      [Ne, Ee] = m.useState(!1),
      [Je, Me] = m.useState(""),
      [Ye, ze] = m.useState(!1),
      [Lt, ht] = m.useState(""),
      [qt, en] = m.useState(!1),
      [js, Pr] = m.useState(null),
      [y, W] = m.useState(null),
      [Q, L] = m.useState(!1),
      [Z, $] = m.useState(null),
      [oe, re] = m.useState(!1),
      [X, G] = m.useState(null),
      xe = () => {
        sessionStorage.removeItem("user_session"), n(!1), o(null);
      },
      ge = m.useCallback(() => {
        C((Ie) => Ie + 1);
      }, []),
      De = m.useCallback((Ie, Et) => {
        d({ message: Ie, type: Et, isVisible: !0 });
      }, []),
      je = m.useCallback(() => {
        d((Ie) => ({ ...Ie, isVisible: !1 }));
      }, []),
      Re = (Ie) => {
        I(Ie), _("edit"), k(!0);
      },
      gt = () => {
        const Ie = {
          GUID: `new_medbox_${Date.now()}`,
          name: "",
          box_type: "",
          width: [],
          width_index: 0,
          med_info: [],
          parentShelf: null,
        };
        I(Ie), _("add"), k(!0);
      },
      We = () => {
        k(!1), I(null), _("edit");
      },
      tn = (Ie) => {
        q(Ie), S(!0);
      },
      Rr = () => {
        S(!1), q(null);
      },
      Vo = (Ie) => {
        v(Ie), T(!0);
      },
      Gd = () => {
        T(!1), v(null);
      },
      Fd = (Ie) => {
        ae(Ie), de(!0);
      },
      Hd = () => {
        de(!1), ae(null);
      },
      Vd = (Ie) => {
        fe(Ie), ue(!0);
      },
      Wd = () => {
        ue(!1), fe(null);
      },
      qd = (Ie) => {
        R(Ie), pe(!0);
      },
      Yd = () => {
        pe(!1), R(null);
      },
      Xd = (Ie) => {
        ne(Ie), B(null), E("add"), z(!0);
      },
      Qd = (Ie, Et) => {
        ne(Ie), B(Et), E("edit"), z(!0);
      },
      Kd = () => {
        z(!1), ne(null), B(null), E("add");
      },
      Jd = () => {
        H(!0);
      },
      Zd = () => {
        H(!1);
      },
      ef = (Ie = "") => {
        Me(Ie), Ee(!0);
      },
      tf = () => {
        Ee(!1);
      },
      nf = (Ie) => {
        ht(Ie), ze(!0);
      },
      rf = () => {
        ze(!1), ht("");
      },
      sf = (Ie, Et) => {
        Pr(Ie), W(Et || null), en(!0);
      },
      of = () => {
        en(!1), Pr(null), W(null);
      },
      lf = (Ie) => {
        $(Ie), L(!0);
      },
      af = () => {
        L(!1), $(null);
      },
      cf = (Ie) => {
        G(Ie), re(!0);
      },
      uf = () => {
        re(!1), G(null);
      },
      df = m.useCallback(async () => {
        if (!i) {
          console.warn("沒有選擇部門分類，無法重新載入資料");
          return;
        }
        console.log("🔄 重新載入藥品地圖資料，部門類型:", i), j(!0);
        try {
          const Ie = await ke.getMedMapByDepartment(i);
          if (Ie.Code === 200 && Ie.Data) {
            console.log("📡 重新載入成功:", Ie.Data);
            const Et = At.convertMedMapApiToFakeData(Ie.Data);
            if (!At.validateConvertedData(Et)) {
              console.error("❌ 轉換後的資料驗證失敗"), h(null);
              return;
            }
            h(Et), console.log("✅ 地圖資料已重新載入");
          } else console.error("❌ API 回傳錯誤:", Ie), h(null);
        } catch (Ie) {
          console.error("💥 重新載入藥品地圖資料失敗:", Ie), h(null);
        } finally {
          j(!1);
        }
      }, [i, j, h]),
      ff = m.useCallback((Ie, Et) => {
        h(
          (Xn) =>
            Xn &&
            Xn.map((ai) => {
              const Qn = { ...ai };
              return (
                Qn.contents &&
                  (Qn.contents = Qn.contents.map((Kn) => {
                    const Jn = { ...Kn };
                    return (
                      Jn.contents &&
                        (Jn.contents = Jn.contents.map((Zn) => {
                          const er = { ...Zn };
                          return (
                            er.contents &&
                              (er.contents = er.contents.map((mn) => {
                                if (mn.GUID === Ie) {
                                  const Ut = { ...mn };
                                  return (
                                    Ut.medMapStock || (Ut.medMapStock = []),
                                    (Ut.medMapStock = [...Ut.medMapStock, Et]),
                                    Ut
                                  );
                                }
                                return mn;
                              })),
                            er
                          );
                        })),
                      Jn
                    );
                  })),
                Qn
              );
            })
        );
      }, []),
      pf = m.useCallback((Ie, Et, Xn) => {
        h(
          (Ss) =>
            Ss &&
            Ss.map((Qn) => {
              const Kn = { ...Qn };
              return (
                Kn.contents &&
                  (Kn.contents = Kn.contents.map((Jn) => {
                    const Zn = { ...Jn };
                    return (
                      Zn.contents &&
                        (Zn.contents = Zn.contents.map((er) => {
                          const mn = { ...er };
                          return (
                            mn.contents &&
                              (mn.contents = mn.contents.map((Ut) => {
                                if (Ut.GUID === Ie && Ut.medMapStock) {
                                  const ii = { ...Ut };
                                  return (
                                    (ii.medMapStock = Ut.medMapStock.map((Wo) =>
                                      Wo.GUID === Et ? { ...Wo, ...Xn } : Wo
                                    )),
                                    ii
                                  );
                                }
                                return Ut;
                              })),
                            mn
                          );
                        })),
                      Zn
                    );
                  })),
                Kn
              );
            })
        );
      }, []);
    return r.jsx(Td.Provider, {
      value: {
        isAuthenticated: t,
        setIsAuthenticated: n,
        currentUser: s,
        setCurrentUser: o,
        logout: xe,
        sidebarOpen: l,
        setSidebarOpen: a,
        selectedDepartmentType: i,
        setSelectedDepartmentType: c,
        isAdminMode: b,
        setIsAdminMode: w,
        apiDepartmentData: g,
        setApiDepartmentData: h,
        viewMode: p,
        setViewMode: f,
        refreshTrigger: M,
        triggerRefresh: ge,
        addStockToShelf: ff,
        notification: u,
        showNotification: De,
        hideNotification: je,
        medBoxModalOpen: x,
        setMedBoxModalOpen: k,
        selectedMedBox: O,
        setSelectedMedBox: I,
        openMedBoxModal: Re,
        closeMedBoxModal: We,
        modalMode: A,
        setModalMode: _,
        openAddMedBoxModal: gt,
        listDrawModalOpen: ee,
        setListDrawModalOpen: S,
        selectedListDraw: U,
        setSelectedListDraw: q,
        openListDrawModal: tn,
        closeListDrawModal: Rr,
        gridDrawModalOpen: P,
        setGridDrawModalOpen: T,
        selectedGridDraw: se,
        setSelectedGridDraw: v,
        openGridDrawModal: Vo,
        closeGridDrawModal: Gd,
        isLoadingMedMap: N,
        setIsLoadingMedMap: j,
        addParentContainerModalOpen: V,
        setAddParentContainerModalOpen: de,
        selectedDepartmentForAdd: te,
        setSelectedDepartmentForAdd: ae,
        openAddParentContainerModal: Fd,
        closeAddParentContainerModal: Hd,
        addShelfDrawContainerModalOpen: Se,
        setAddShelfDrawContainerModalOpen: ue,
        selectedSubContainerForAdd: Ce,
        setSelectedSubContainerForAdd: fe,
        openAddShelfDrawContainerModal: Vd,
        closeAddShelfDrawContainerModal: Wd,
        addSubContainerModalOpen: Y,
        setAddSubContainerModalOpen: pe,
        selectedParentContainerForAdd: be,
        setSelectedParentContainerForAdd: R,
        openAddSubContainerModal: qd,
        closeAddSubContainerModal: Yd,
        addStoreItemModalOpen: me,
        setAddStoreItemModalOpen: z,
        selectedStoreShelfForAdd: D,
        setSelectedStoreShelfForAdd: ne,
        selectedStockItemForEdit: ie,
        setSelectedStockItemForEdit: B,
        storeItemModalMode: J,
        setStoreItemModalMode: E,
        openAddStoreItemModal: Xd,
        openEditStoreItemModal: Qd,
        closeAddStoreItemModal: Kd,
        updateStockInShelf: pf,
        addDepartmentModalOpen: F,
        setAddDepartmentModalOpen: H,
        allDepartmentsList: K,
        setAllDepartmentsList: ce,
        openAddDepartmentModal: Jd,
        closeAddDepartmentModal: Zd,
        reloadMedMapData: df,
        qrCodeScannerModalOpen: Ne,
        qrCodeScannerMode: Je,
        setQRCodeScannerModalOpen: Ee,
        openQRCodeScannerModal: ef,
        closeQRCodeScannerModal: tf,
        addBarcodeModalOpen: Ye,
        setAddBarcodeModalOpen: ze,
        openAddBarcodeModal: nf,
        closeAddBarcodeModal: rf,
        initialBarcodeValue: Lt,
        containerDetailModalOpen: qt,
        setContainerDetailModalOpen: en,
        selectedContainerForDetail: js,
        setSelectedContainerForDetail: Pr,
        highlightedMedicineCode: y,
        setHighlightedMedicineCode: W,
        openContainerDetailModal: sf,
        closeContainerDetailModal: of,
        editStoreShelfModalOpen: Q,
        setEditStoreShelfModalOpen: L,
        selectedStoreShelfForEdit: Z,
        setSelectedStoreShelfForEdit: $,
        openEditStoreShelfModal: lf,
        closeEditStoreShelfModal: af,
        editParentContainerModalOpen: oe,
        setEditParentContainerModalOpen: re,
        selectedParentContainerForEdit: X,
        setSelectedParentContainerForEdit: G,
        openEditParentContainerModal: cf,
        closeEditParentContainerModal: uf,
        medicineList: he,
        setMedicineList: _e,
        isLoadingMedicines: ye,
        setIsLoadingMedicines: we,
      },
      children: e,
    });
  },
  Qe = () => {
    const e = m.useContext(Td);
    if (e === void 0)
      throw new Error("useDrugMap must be used within a DrugMapProvider");
    return e;
  },
  Vm = {
    "zh-TW": {
      "nav.title": "藥品地圖",
      "nav.home": "返回首頁",
      "nav.expandSidebar": "展開側邊欄",
      "nav.collapseSidebar": "收合側邊欄",
      "topbar.medicine": "藥品",
      "topbar.department": "部門",
      "topbar.language": "中文",
      "topbar.logout": "登出",
      "sidebar.drugMap": "藥品地圖",
      "sidebar.closeSidebar": "關閉側邊欄",
      "sidebar.departmentCategories": "部門分類",
      "sidebar.departments": "個部門",
      "canvas.lockCanvas": "鎖定畫布",
      "canvas.unlockCanvas": "解鎖畫布",
      "type.dispensingStation": "調劑台",
      "type.warehouse": "藥庫",
      "type.medBoxShelf": "藥盒層架",
      "type.storeShelf": "藥品層架",
      "type.parentContainer": "櫃體",
      "type.subContainer": "虛擬容器",
      "type.gridDraw": "格線抽屜",
      "type.listDraw": "抽屜",
      "type.medBox": "藥盒",
      "type.containers": "個容器",
      "modal.medBoxSettings": "藥盒設定",
      "modal.addMedBox": "新增藥盒",
      "modal.listDrawSettings": "抽屜設定",
      "modal.gridDrawSettings": "格線抽屜設定",
      "modal.settings": "編輯設定",
      "modal.add": "新增藥盒",
      "form.medBoxName": "藥盒名稱",
      "form.medBoxType": "藥盒類型",
      "form.widthSelection": "寬度選擇",
      "form.ipAddress": "IP 位址",
      "form.drugInfo": "藥品資料",
      "form.drawerName": "抽屜名稱",
      "form.drugList": "藥品清單",
      "form.drugCode": "藥碼",
      "form.drugName": "藥名",
      "form.chineseName": "中文名",
      "form.drugSearch": "藥品搜尋",
      "placeholder.medBoxName": "請輸入 藥盒名稱 位址",
      "placeholder.ipAddress": "請輸入 IP 位址",
      "placeholder.drawerName": "請輸入抽屜名稱",
      "placeholder.gridDrawName": "請輸入格線抽屜名稱",
      "placeholder.drugSearch": "請輸入 藥碼/藥名/中文名",
      "button.cancel": "取消",
      "button.save": "儲存",
      "button.add": "新增",
      "button.edit": "編輯",
      "button.change": "變更",
      "button.remove": "移除藥品",
      "button.search": "搜尋",
      "button.merge": "合併",
      "button.unmerge": "取消合併",
      "status.noDrugData": "此藥盒尚未配置藥品資料",
      "status.newMedBoxNoDrug": "請先建立藥盒後，進行編輯藥盒",
      "status.drawerNoDrug": "此抽屜尚未配置藥品",
      "status.gridDrawNotConfigured": "此格線抽屜尚未配置",
      "status.noDrugInfo": "無藥品資料",
      "status.drugListEmpty": "藥品清單為空",
      "status.noContent": "No content available",
      "status.notSet": "未設定",
      "status.notAdded": "未加入藥品",
      "status.searchResults": "搜尋結果將顯示於此區域",
      "status.selectCellsForDrug": "請選取合併格子以顯示藥品資訊",
      "status.selectedCellsNoDrug": "選取的格子無藥品資料",
      "status.loadingMedMapData": "正在載入藥品地圖資料...",
      "status.loadingMedMapHint": "請稍候，系統正在處理部門資料",
      "footer.copyright": "Copyright ©2025 鴻森智能科技",
      "login.title": "藥品地圖系統",
      "login.subtitle": "請登入以繼續使用系統",
      "login.userId": "帳號",
      "login.userIdPlaceholder": "請輸入使用者帳號",
      "login.password": "密碼",
      "login.passwordPlaceholder": "請輸入密碼",
      "login.loginButton": "登入",
      "login.loggingIn": "登入中...",
    },
    en: {
      "nav.title": "Drug Map",
      "nav.home": "Back to Home",
      "nav.expandSidebar": "Expand Sidebar",
      "nav.collapseSidebar": "Collapse Sidebar",
      "topbar.medicine": "Medicine",
      "topbar.department": "Department",
      "topbar.language": "English",
      "topbar.logout": "Logout",
      "sidebar.drugMap": "Drug Map",
      "sidebar.closeSidebar": "Close Sidebar",
      "sidebar.departmentCategories": "Department Categories",
      "sidebar.departments": "Departments",
      "canvas.lockCanvas": "Lock Canvas",
      "canvas.unlockCanvas": "Unlock Canvas",
      "type.dispensingStation": "Dispensing Station",
      "type.warehouse": "Warehouse",
      "type.medBoxShelf": "Medicine Box Shelf",
      "type.parentContainer": "Cabinet",
      "type.subContainer": "sub container",
      "type.gridDraw": "Grid Drawer",
      "type.listDraw": "List Drawer",
      "type.medBox": "Medicine Box",
      "type.containers": "Containers",
      "modal.medBoxSettings": "Medicine Box Settings",
      "modal.addMedBox": "Add Medicine Box",
      "modal.listDrawSettings": "Drawer Settings",
      "modal.gridDrawSettings": "Grid Drawer Settings",
      "modal.settings": "Edit Settings",
      "modal.add": "Add Medicine Box",
      "form.medBoxName": "Medicine Box Name",
      "form.medBoxType": "Medicine Box Type",
      "form.widthSelection": "Width Selection",
      "form.ipAddress": "IP Address",
      "form.drugInfo": "Drug Information",
      "form.drawerName": "Drawer Name",
      "form.drugList": "Drug List",
      "form.drugCode": "Drug Code",
      "form.drugName": "Drug Name",
      "form.chineseName": "Chinese Name",
      "form.drugSearch": "Drug Search",
      "placeholder.medBoxName": "Enter medicine box name",
      "placeholder.ipAddress": "Enter IP address",
      "placeholder.drawerName": "Enter drawer name",
      "placeholder.gridDrawName": "Enter grid drawer name",
      "placeholder.drugSearch": "Enter drug code/name/Chinese name",
      "button.cancel": "Cancel",
      "button.save": "Save",
      "button.add": "Add",
      "button.edit": "Edit",
      "button.change": "Change",
      "button.remove": "Remove Drug",
      "button.search": "Search",
      "button.merge": "Merge",
      "button.unmerge": "Unmerge",
      "status.noDrugData": "This medicine box has no drug data configured",
      "status.newMedBoxNoDrug": "New medicine box has no drug data configured",
      "status.drawerNoDrug": "This drawer has no drugs configured",
      "status.gridDrawNotConfigured": "This grid drawer is not configured",
      "status.noDrugInfo": "No drug information",
      "status.drugListEmpty": "Drug list is empty",
      "status.noContent": "No content available",
      "status.notSet": "Not set",
      "status.notAdded": "No drugs added",
      "status.searchResults": "Search results will be displayed here",
      "status.selectCellsForDrug":
        "Select merged cells to display drug information",
      "status.selectedCellsNoDrug": "Selected cells have no drug data",
      "status.searching": "Searching...",
      "status.noSearchResults": "No search results found",
      "status.loadingMedMapData": "Loading medicine map data...",
      "status.loadingMedMapHint":
        "Please wait while we process department data",
      "footer.copyright": "Copyright ©2025 Hongsen Intelligent Technology",
      "login.title": "Drug Map System",
      "login.subtitle": "Please login to continue",
      "login.userId": "ID",
      "login.userIdPlaceholder": "Enter your user ID",
      "login.password": "Password",
      "login.passwordPlaceholder": "Enter your password",
      "login.loginButton": "Login",
      "login.loggingIn": "Logging in...",
    },
  },
  Ad = m.createContext(void 0),
  Wm = ({ children: e }) => {
    const [t, n] = m.useState("zh-TW"),
      s = (o) => Vm[t][o] || o;
    return r.jsx(Ad.Provider, {
      value: { language: t, setLanguage: n, t: s },
      children: e,
    });
  },
  mt = () => {
    const e = m.useContext(Ad);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var qm = {
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
 */ const Ym = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  $e = (e, t) => {
    const n = m.forwardRef(
      (
        {
          color: s = "currentColor",
          size: o = 24,
          strokeWidth: l = 2,
          absoluteStrokeWidth: a,
          className: i = "",
          children: c,
          ...g
        },
        h
      ) =>
        m.createElement(
          "svg",
          {
            ref: h,
            ...qm,
            width: o,
            height: o,
            stroke: s,
            strokeWidth: a ? (Number(l) * 24) / Number(o) : l,
            className: ["lucide", `lucide-${Ym(e)}`, i].join(" "),
            ...g,
          },
          [
            ...t.map(([p, f]) => m.createElement(p, f)),
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
 */ const Xm = $e("Archive", [
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
 */ const yc = $e("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $d = $e("Building2", [
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
 */ const _r = $e("Camera", [
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
 */ const Qm = $e("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gs = $e("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Od = $e("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Km = $e("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jm = $e("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zm = $e("EyeOff", [
  ["path", { d: "M9.88 9.88a3 3 0 1 0 4.24 4.24", key: "1jxqfv" }],
  [
    "path",
    {
      d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",
      key: "9wicm4",
    },
  ],
  [
    "path",
    {
      d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",
      key: "1jreej",
    },
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eh = $e("Eye", [
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
 */ const th = $e("Globe", [
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
 */ const Ld = $e("Grid3x3", [
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
  ],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const li = $e("Layers", [
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
 */ const nh = $e("ListX", [
  ["path", { d: "M11 12H3", key: "51ecnj" }],
  ["path", { d: "M16 6H3", key: "1wxfjs" }],
  ["path", { d: "M16 18H3", key: "12xzn7" }],
  ["path", { d: "m19 10-4 4", key: "1tz659" }],
  ["path", { d: "m15 10 4 4", key: "1n7nei" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const da = $e("List", [
  ["line", { x1: "8", x2: "21", y1: "6", y2: "6", key: "7ey8pc" }],
  ["line", { x1: "8", x2: "21", y1: "12", y2: "12", key: "rjfblc" }],
  ["line", { x1: "8", x2: "21", y1: "18", y2: "18", key: "c3b1m8" }],
  ["line", { x1: "3", x2: "3.01", y1: "6", y2: "6", key: "1g7gq3" }],
  ["line", { x1: "3", x2: "3.01", y1: "12", y2: "12", key: "1pjlvk" }],
  ["line", { x1: "3", x2: "3.01", y1: "18", y2: "18", key: "28t2mc" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jt = $e("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ud = $e("Lock", [
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
 */ const rh = $e("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sh = $e("Package", [
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
 */ const mr = $e("Pen", [
  [
    "path",
    { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oh = $e("Pill", [
  [
    "path",
    {
      d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",
      key: "wa1lgi",
    },
  ],
  ["path", { d: "m8.5 8.5 7 7", key: "rvfmvr" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vt = $e("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sn = $e("Settings", [
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
 */ const lh = $e("Trash2", [
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
 */ const Bd = $e("Unlock", [
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
 */ const ah = $e("Warehouse", [
  [
    "path",
    {
      d: "M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z",
      key: "gksnxg",
    },
  ],
  ["path", { d: "M6 18h12", key: "9pbo8z" }],
  ["path", { d: "M6 14h12", key: "4cwo0f" }],
  ["rect", { width: "12", height: "12", x: "6", y: "10", key: "apd30q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ih = $e("XCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fe = $e("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  ch = () => {
    const { sidebarOpen: e, setSidebarOpen: t } = Qe(),
      { t: n } = mt();
    return r.jsx("div", {
      className: "fixed top-4 left-4 z-30",
      children: r.jsx("nav", {
        className:
          "bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-xl shadow-lg px-2 py-1",
        children: r.jsxs("div", {
          className: "flex items-center",
          children: [
            r.jsx("a", {
              href: "../frontpage",
              className:
                "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
              title: n("nav.home"),
              children: r.jsx(li, { className: "w-5 h-5" }),
            }),
            r.jsx("div", {
              className: "ml-2 text-lg font-semibold text-gray-900",
              children: n("nav.title"),
            }),
            r.jsx("button", {
              onClick: () => t(!e),
              className:
                "ml-8 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
              title: n(e ? "nav.collapseSidebar" : "nav.expandSidebar"),
              children: e
                ? r.jsx(da, { className: "w-6 h-6" })
                : r.jsx(da, { className: "w-6 h-6" }),
            }),
          ],
        }),
      }),
    });
  },
  uh = () => {
    const {
        viewMode: e,
        setViewMode: t,
        logout: n,
        currentUser: s,
        selectedDepartmentType: o,
        openAddDepartmentModal: l,
        apiDepartmentData: a,
        allDepartmentsList: i,
      } = Qe(),
      { language: c, setLanguage: g, t: h } = mt(),
      [p, f] = no.useState(!1),
      b = () => {
        g(c === "zh-TW" ? "en" : "zh-TW");
      },
      w = no.useMemo(() => {
        if (!o || !i || !a) return !1;
        const M = a.map((d) => d.name);
        return (
          i
            .filter((d) => d["department_type "] === o)
            .filter((d) => !M.includes(d.name)).length > 0
        );
      }, [o, i, a]);
    return r.jsx("div", {
      className:
        "fixed top-20 left-4 right-auto sm:top-4 sm:left-auto sm:right-4 z-30",
      children: r.jsx("div", {
        className:
          "bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-xl shadow-lg px-2 py-1 sm:px-3 sm:py-2",
        children: r.jsxs("div", {
          className:
            "flex items-center gap-2 lg:gap-0 lg:space-x-2 flex-col lg:flex-row relative",
          children: [
            r.jsxs("div", {
              className: "flex items-center",
              children: [
                r.jsxs("div", {
                  className: "flex items-center bg-gray-100 rounded-lg p-1",
                  children: [
                    r.jsxs("button", {
                      onClick: () => t("medicine"),
                      className: `flex items-center space-x-2 px-3 py-1.5 rounded-md transition-all duration-300 ease-in-out transform ${
                        e === "medicine"
                          ? "bg-white text-green-600 shadow-sm scale-105"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:scale-102"
                      }`,
                      children: [
                        r.jsx(oh, { className: "w-4 h-4" }),
                        r.jsx("span", {
                          className: "text-sm font-medium",
                          children: h("topbar.medicine"),
                        }),
                      ],
                    }),
                    r.jsxs("button", {
                      onClick: () => t("department"),
                      className: `flex items-center space-x-2 px-3 py-1.5 rounded-md transition-all duration-300 ease-in-out transform ${
                        e === "department"
                          ? "bg-white text-blue-600 shadow-sm scale-105"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:scale-102"
                      }`,
                      children: [
                        r.jsx($d, { className: "w-4 h-4" }),
                        r.jsx("span", {
                          className: "text-sm font-medium",
                          children: h("topbar.department"),
                        }),
                      ],
                    }),
                  ],
                }),
                r.jsx("button", {
                  onClick: () => f(!p),
                  className:
                    "lg:hidden flex items-center justify-center p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
                  children: p
                    ? r.jsx(Jm, { className: "w-4 h-4" })
                    : r.jsx(Od, { className: "w-4 h-4" }),
                }),
              ],
            }),
            r.jsxs("div", {
              className: `
            flex items-center gap-2 lg:gap-0 lg:space-x-2 flex-col lg:flex-row
            lg:flex lg:opacity-100 lg:max-h-none
            transition-all duration-300 ease-in-out overflow-hidden
            ${
              p
                ? "flex opacity-100 max-h-96"
                : "hidden opacity-0 max-h-0 lg:flex lg:opacity-100 lg:max-h-none"
            }
          `,
              children: [
                r.jsx("div", {
                  className: "mx-1 w-full lg:w-px lg:h-6 h-px bg-gray-300",
                }),
                o &&
                  w &&
                  r.jsxs(r.Fragment, {
                    children: [
                      r.jsxs("button", {
                        onClick: () => l(),
                        className:
                          "w-full lg:w-auto flex justify-center items-center space-x-2 px-3 py-1.5 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors border border-green-700",
                        children: [
                          r.jsx(vt, { className: "w-4 h-4" }),
                          r.jsx("span", {
                            className: "text-sm font-medium",
                            children: "新增部門",
                          }),
                        ],
                      }),
                      r.jsx("div", {
                        className: "w-full lg:w-px lg:h-6 h-px bg-gray-300",
                      }),
                    ],
                  }),
                r.jsxs("button", {
                  onClick: b,
                  className:
                    "w-full lg:w-auto flex justify-center items-center space-x-2 px-3 py-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors border",
                  children: [
                    r.jsx(th, { className: "w-4 h-4" }),
                    r.jsx("span", {
                      className: "text-sm font-medium",
                      children: h("topbar.language"),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "w-full lg:w-px lg:h-6 h-px bg-gray-300",
                }),
                s &&
                  r.jsx("div", {
                    className:
                      "w-full lg:w-auto flex justify-center items-center space-x-2 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg",
                    children: r.jsx("span", {
                      className: "text-sm font-medium text-gray-700",
                      children: s.Name,
                    }),
                  }),
                r.jsxs("button", {
                  onClick: n,
                  className:
                    "w-full lg:w-auto flex items-center space-x-2 px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 border border-red-200 rounded-lg transition-colors justify-center",
                  children: [
                    r.jsx(rh, { className: "w-4 h-4" }),
                    r.jsx("span", {
                      className: "text-sm font-medium",
                      children: h("topbar.logout"),
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
  dh = [
    {
      name: "藍色",
      value: "blue",
      bgr: "255,0,0",
      bgColor: "white",
      textColor: "text-black",
    },
    {
      name: "綠色",
      value: "green",
      bgr: "0,255,0",
      bgColor: "white",
      textColor: "text-black",
    },
    {
      name: "紅色",
      value: "red",
      bgr: "0,0,255",
      bgColor: "white",
      textColor: "text-black",
    },
    {
      name: "黃色",
      value: "yellow",
      bgr: "0,255,255",
      bgColor: "white",
      textColor: "text-black",
    },
    {
      name: "紫色",
      value: "purple",
      bgr: "255,0,255",
      bgColor: "white",
      textColor: "text-black",
    },
    {
      name: "青色",
      value: "cyan",
      bgr: "255,255,0",
      bgColor: "white",
      textColor: "text-black",
    },
  ],
  fh = ({ isOpen: e, onClose: t }) => {
    const [n, s] = m.useState("blue"),
      [o, l] = m.useState(1),
      [a, i] = m.useState(60),
      [c, g] = m.useState(""),
      [h, p] = m.useState(""),
      [f, b] = m.useState([]),
      [w, M] = m.useState([]),
      [C, u] = m.useState([]),
      [d, x] = m.useState(!1),
      [k, O] = m.useState(!1),
      I = m.useRef(null),
      A = m.useRef(null),
      _ = m.useRef(null),
      ee = m.useRef(null);
    m.useEffect(() => {
      if (e) {
        const v = localStorage.getItem("medMap_setting");
        if (v)
          try {
            const N = JSON.parse(v);
            s(N.light_color || "blue"),
              l(N.brightness !== void 0 ? N.brightness : 1),
              i(N.light_sec !== void 0 ? N.light_sec : 60),
              g(N.default_person || ""),
              p(N.default_person_id || "");
          } catch (N) {
            console.error("讀取設定失敗:", N),
              s("blue"),
              l(1),
              i(60),
              g(""),
              p("");
          }
        else s("blue"), l(1), i(60), g(""), p("");
        S();
      }
    }, [e]),
      m.useEffect(() => {
        const v = (N) => {
          _.current &&
            !_.current.contains(N.target) &&
            I.current &&
            !I.current.contains(N.target) &&
            x(!1),
            ee.current &&
              !ee.current.contains(N.target) &&
              A.current &&
              !A.current.contains(N.target) &&
              O(!1);
        };
        return (
          document.addEventListener("mousedown", v),
          () => document.removeEventListener("mousedown", v)
        );
      }, []);
    const S = async () => {
        try {
          const v = await ke.getAllStaffInfo();
          v.Code === 200 && v.Data && b(v.Data);
        } catch (v) {
          console.error("獲取人員資料失敗:", v);
        }
      },
      U = (v) => {
        if ((g(v), v.trim() === "")) {
          M([]), x(!1);
          return;
        }
        const N = f.filter(
          (j) => j.name && j.name.toLowerCase().includes(v.toLowerCase())
        );
        M(N), x(N.length > 0);
      },
      q = (v) => {
        if ((p(v), v.trim() === "")) {
          u([]), O(!1);
          return;
        }
        const N = f.filter(
          (j) => j.ID && j.ID.toLowerCase().includes(v.toLowerCase())
        );
        u(N), O(N.length > 0);
      },
      P = (v) => {
        g(v.name), p(v.ID), x(!1);
      },
      T = (v) => {
        g(v.name), p(v.ID), O(!1);
      },
      se = () => {
        const v = {
          light_color: n,
          brightness: o,
          light_sec: a,
          default_person: c,
          default_person_id: h,
        };
        localStorage.setItem("medMap_setting", JSON.stringify(v)),
          console.log("設定已儲存:", v),
          t();
      };
    return e
      ? r.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center p-4",
          children: [
            r.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: t,
            }),
            r.jsxs("div", {
              className:
                "relative bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto",
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between p-4 border-b border-gray-200 sticky top-0 bg-white z-10",
                  children: [
                    r.jsx("h2", {
                      className: "text-xl font-semibold text-gray-900",
                      children: "設定",
                    }),
                    r.jsx("button", {
                      onClick: t,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Fe, { className: "w-5 h-5" }),
                    }),
                  ],
                }),
                r.jsxs("div", {
                  className: "p-6 space-y-6",
                  children: [
                    r.jsxs("div", {
                      children: [
                        r.jsx("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-3",
                          children: "預設撥補/申領人員",
                        }),
                        r.jsxs("div", {
                          className: "grid grid-cols-2 gap-3",
                          children: [
                            r.jsxs("div", {
                              className: "relative",
                              children: [
                                r.jsx("label", {
                                  className: "block text-xs text-gray-600 mb-1",
                                  children: "人員名稱",
                                }),
                                r.jsx("input", {
                                  ref: I,
                                  type: "text",
                                  value: c,
                                  onChange: (v) => U(v.target.value),
                                  onFocus: () => {
                                    c.trim() && U(c);
                                  },
                                  placeholder: "請輸入人員名稱",
                                  className:
                                    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                                }),
                                d &&
                                  r.jsx("div", {
                                    ref: _,
                                    className:
                                      "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto",
                                    children: w.map((v, N) =>
                                      r.jsxs(
                                        "div",
                                        {
                                          onClick: () => P(v),
                                          className:
                                            "px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                          children: [
                                            r.jsx("div", {
                                              className:
                                                "font-medium text-gray-900",
                                              children: v.name,
                                            }),
                                            r.jsx("div", {
                                              className:
                                                "text-xs text-gray-500",
                                              children: v.ID,
                                            }),
                                          ],
                                        },
                                        N
                                      )
                                    ),
                                  }),
                              ],
                            }),
                            r.jsxs("div", {
                              className: "relative",
                              children: [
                                r.jsx("label", {
                                  className: "block text-xs text-gray-600 mb-1",
                                  children: "人員 ID",
                                }),
                                r.jsx("input", {
                                  ref: A,
                                  type: "text",
                                  value: h,
                                  onChange: (v) => q(v.target.value),
                                  onFocus: () => {
                                    h.trim() && q(h);
                                  },
                                  placeholder: "請輸入人員 ID",
                                  className:
                                    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                                }),
                                k &&
                                  r.jsx("div", {
                                    ref: ee,
                                    className:
                                      "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto",
                                    children: C.map((v, N) =>
                                      r.jsxs(
                                        "div",
                                        {
                                          onClick: () => T(v),
                                          className:
                                            "px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                          children: [
                                            r.jsx("div", {
                                              className:
                                                "font-medium text-gray-900",
                                              children: v.ID,
                                            }),
                                            r.jsx("div", {
                                              className:
                                                "text-xs text-gray-500",
                                              children: v.name,
                                            }),
                                          ],
                                        },
                                        N
                                      )
                                    ),
                                  }),
                              ],
                            }),
                          ],
                        }),
                        r.jsx("p", {
                          className: "mt-2 text-xs text-gray-500",
                          children: "設定後將自動填入撥補/申領表單中",
                        }),
                      ],
                    }),
                    r.jsxs("div", {
                      children: [
                        r.jsx("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-3",
                          children: "亮燈顏色 (BGR)",
                        }),
                        r.jsx("div", {
                          className: "grid grid-cols-3 gap-3",
                          children: dh.map((v) =>
                            r.jsxs(
                              "button",
                              {
                                onClick: () => s(v.value),
                                className: `
                    relative p-3 rounded-lg border-2 transition-all
                    ${v.bgColor} ${v.textColor}
                    ${
                      n === v.value
                        ? "border-gray-900 shadow-lg scale-105"
                        : "border-gray-300 hover:border-gray-400 hover:shadow-md"
                    }
                  `,
                                children: [
                                  r.jsxs("div", {
                                    className: "text-center",
                                    children: [
                                      r.jsx("div", {
                                        className: "font-semibold text-sm mb-1",
                                        children: v.name,
                                      }),
                                      r.jsx("div", {
                                        className: "text-xs opacity-90",
                                        children: v.bgr,
                                      }),
                                    ],
                                  }),
                                  n === v.value &&
                                    r.jsx("div", {
                                      className:
                                        "absolute top-1 right-1 w-3 h-3 bg-white rounded-full border-2 border-gray-900",
                                    }),
                                ],
                              },
                              v.value
                            )
                          ),
                        }),
                      ],
                    }),
                    r.jsxs("div", {
                      children: [
                        r.jsxs("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: ["亮度: ", o.toFixed(1)],
                        }),
                        r.jsxs("div", {
                          className: "relative",
                          children: [
                            r.jsx("input", {
                              type: "range",
                              min: "0",
                              max: "1",
                              step: "0.1",
                              value: o,
                              onChange: (v) => l(parseFloat(v.target.value)),
                              className:
                                "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600",
                              style: {
                                background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${
                                  o * 100
                                }%, #e5e7eb ${o * 100}%, #e5e7eb 100%)`,
                              },
                            }),
                            r.jsxs("div", {
                              className:
                                "flex justify-between text-xs text-gray-500 mt-1",
                              children: [
                                r.jsx("span", { children: "0" }),
                                r.jsx("span", { children: "0.5" }),
                                r.jsx("span", { children: "1" }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    r.jsxs("div", {
                      children: [
                        r.jsxs("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: ["自動滅燈時間 (秒): ", a],
                        }),
                        r.jsxs("div", {
                          className: "relative",
                          children: [
                            r.jsx("input", {
                              type: "range",
                              min: "1",
                              max: "120",
                              step: "1",
                              value: a,
                              onChange: (v) => i(parseInt(v.target.value)),
                              className:
                                "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600",
                              style: {
                                background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${
                                  ((a - 1) / 119) * 100
                                }%, #e5e7eb ${
                                  ((a - 1) / 119) * 100
                                }%, #e5e7eb 100%)`,
                              },
                            }),
                            r.jsxs("div", {
                              className:
                                "flex justify-between text-xs text-gray-500 mt-1",
                              children: [
                                r.jsx("span", { children: "5秒" }),
                                r.jsx("span", { children: "60秒" }),
                                r.jsx("span", { children: "120秒" }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                r.jsxs("div", {
                  className:
                    "flex justify-end gap-3 p-4 border-t border-gray-200 bg-gray-50 rounded-b-xl sticky bottom-0",
                  children: [
                    r.jsx("button", {
                      onClick: t,
                      className:
                        "px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors",
                      children: "取消",
                    }),
                    r.jsx("button", {
                      onClick: se,
                      className:
                        "px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors",
                      children: "儲存",
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      : null;
  },
  ph = () => {
    const {
        sidebarOpen: e,
        setSidebarOpen: t,
        selectedDepartmentType: n,
        setSelectedDepartmentType: s,
        setApiDepartmentData: o,
        isLoadingMedMap: l,
        setIsLoadingMedMap: a,
        setAllDepartmentsList: i,
        isAdminMode: c,
        setIsAdminMode: g,
      } = Qe(),
      { t: h } = mt(),
      [p, f] = m.useState(new Set()),
      [b, w] = m.useState([]),
      [M, C] = m.useState(!0),
      [u, d] = m.useState([]),
      [x, k] = m.useState(!1),
      O = () => {
        c
          ? g(!1)
          : prompt("請輸入後台密碼：") === "66437068"
          ? g(!0)
          : alert("密碼錯誤，無法開啟後台模式");
      };
    m.useEffect(() => {
      (async () => {
        C(!0);
        try {
          const U = await ke.getDepartments();
          U.Code === 200 && U.Data
            ? (console.log(U.Data), w(U.Data), i(U.Data))
            : (console.error("API returned error:", U), w([]), i([]));
        } catch (U) {
          console.error("Failed to fetch department data:", U), w([]), i([]);
        } finally {
          C(!1);
        }
      })();
    }, []);
    const I = b.reduce((S, U) => {
        const q = U["department_type "];
        return S[q] || (S[q] = []), S[q].push(U), S;
      }, {}),
      A = (S) => {
        const U = new Set(p);
        U.has(S) ? U.delete(S) : U.add(S), f(U);
      },
      _ = async (S) => {
        console.log("🏢 選擇部門:", S), s(S), await ee(S), t(!1);
      },
      ee = async (S) => {
        console.log("🚀 開始取得藥品地圖資料，部門類型:", S), a(!0);
        try {
          const U = await ke.getMedMapByDepartment(S);
          if (U.Code === 200 && U.Data) {
            console.log("📡 API 回傳成功:", U.Data);
            const q = At.convertMedMapApiToFakeData(U.Data);
            if (!At.validateConvertedData(q)) {
              console.error("❌ 轉換後的資料驗證失敗"), d([]);
              return;
            }
            const T = At.generateConversionReport(U.Data, q);
            d(q),
              o(q),
              console.log("💾 已暫存轉換後的資料到狀態中"),
              console.log("📊 最終轉換結果:", q),
              console.log("📋 轉換報告:", T);
          } else console.error("❌ API 回傳錯誤:", U), d([]), o(null);
        } catch (U) {
          console.error("💥 取得藥品地圖資料失敗:", U), d([]), o(null);
        } finally {
          a(!1);
        }
      };
    return r.jsxs(r.Fragment, {
      children: [
        e &&
          r.jsx("div", {
            className:
              "fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden",
            onClick: () => t(!1),
          }),
        r.jsx("div", {
          className: `fixed w-80 bg-white/95 backdrop-blur-sm shadow-xl border border-gray-200/50 z-50 transform transition-all duration-300 ease-in-out h-screen h-svh ${
            e ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`,
          children: r.jsxs("div", {
            className: "flex flex-col h-screen h-svh",
            children: [
              r.jsx("div", {
                className:
                  "flex-shrink-0 px-4 py-2 border-b border-gray-200/50",
                children: r.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx("a", {
                          href: "../frontpage",
                          className:
                            "text-gray-600 hover:text-gray-900 transition-colors p-2 rounded-lg hover:bg-gray-100/50",
                          title: h("nav.home"),
                          children: r.jsx(li, { className: "w-5 h-5" }),
                        }),
                        r.jsx("h1", {
                          className: "text-lg font-semibold text-gray-900",
                          children: h("sidebar.drugMap"),
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: () => t(!e),
                      className:
                        "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
                      title: h("sidebar.closeSidebar"),
                      children: r.jsx(nh, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
              }),
              r.jsx("div", {
                className: "flex-1 overflow-y-auto p-4",
                children: M
                  ? r.jsx("div", {
                      className: "flex items-center justify-center py-8",
                      children: r.jsx("div", {
                        className: "text-gray-500",
                        children: "Loading departments...",
                      }),
                    })
                  : r.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        r.jsx("h3", {
                          className:
                            "text-base font-semibold text-gray-700 mb-4",
                          children: h("sidebar.departmentCategories"),
                        }),
                        Object.entries(I).map(([S, U]) =>
                          r.jsxs(
                            "div",
                            {
                              className: "space-y-1",
                              children: [
                                r.jsxs("button", {
                                  onClick: () => _(S),
                                  disabled: l,
                                  className: `w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 border ${
                                    n === S
                                      ? "bg-blue-50 text-blue-700 border-blue-200 shadow-sm"
                                      : "text-gray-700 hover:bg-gray-50 hover:shadow-sm border-transparent"
                                  } ${
                                    l ? "opacity-50 cursor-not-allowed" : ""
                                  }`,
                                  children: [
                                    r.jsxs("div", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        S === "B1F"
                                          ? r.jsx($d, { className: "w-4 h-4" })
                                          : r.jsx(ah, { className: "w-4 h-4" }),
                                        r.jsxs("div", {
                                          className: "text-left",
                                          children: [
                                            r.jsx("div", {
                                              className: "font-medium",
                                              children: S,
                                            }),
                                            r.jsxs("div", {
                                              className:
                                                "text-xs text-gray-500",
                                              children: [
                                                U.length,
                                                " ",
                                                h("sidebar.departments"),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    r.jsx("div", {
                                      onClick: (q) => {
                                        q.stopPropagation(), A(S);
                                      },
                                      className:
                                        "p-1 hover:bg-gray-200/50 rounded transition-colors",
                                      children: p.has(S)
                                        ? r.jsx(Od, { className: "w-4 h-4" })
                                        : r.jsx(Km, { className: "w-4 h-4" }),
                                    }),
                                  ],
                                }),
                                p.has(S) &&
                                  r.jsx("div", {
                                    className: "ml-6 space-y-2",
                                    children: U.map((q) =>
                                      r.jsx(
                                        "div",
                                        {
                                          className:
                                            "p-3 text-base text-gray-600 bg-gray-50 rounded-lg",
                                          children: r.jsxs("div", {
                                            className:
                                              "flex items-center justify-between",
                                            children: [
                                              r.jsx("div", {
                                                className:
                                                  "font-medium text-gray-800",
                                                children: q.name,
                                              }),
                                              r.jsx("span", {
                                                className: `text-xs px-2 py-1 rounded-full ${
                                                  q.type === "調劑台"
                                                    ? "bg-green-100 text-green-800"
                                                    : "bg-blue-100 text-blue-800"
                                                }`,
                                                children: q.type,
                                              }),
                                            ],
                                          }),
                                        },
                                        q.GUID
                                      )
                                    ),
                                  }),
                              ],
                            },
                            S
                          )
                        ),
                      ],
                    }),
              }),
              r.jsx("div", {
                className:
                  "flex-shrink-0 px-4 py-3 border-t border-gray-200/50",
                children: r.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx("label", {
                          htmlFor: "admin-mode-toggle",
                          className:
                            "text-sm font-medium text-gray-700 cursor-pointer select-none",
                          children: "後台模式",
                        }),
                        r.jsx("button", {
                          id: "admin-mode-toggle",
                          role: "switch",
                          "aria-checked": c,
                          onClick: O,
                          className: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                            c ? "bg-blue-600" : "bg-gray-300"
                          }`,
                          children: r.jsx("span", {
                            className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              c ? "translate-x-6" : "translate-x-1"
                            }`,
                          }),
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: () => k(!0),
                      className:
                        "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
                      title: "設定",
                      children: r.jsx(sn, { className: "w-5 h-5" }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
        r.jsx(fh, { isOpen: x, onClose: () => k(!1) }),
      ],
    });
  },
  mh = () => {
    const { t: e } = mt();
    return r.jsx("div", {
      className: "fixed bottom-4 left-1/2 transform -translate-x-1/2 z-30",
      children: r.jsx("div", {
        className:
          "bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-xl shadow-lg px-4 py-2",
        children: r.jsx("p", {
          className: "text-sm text-gray-600 font-medium whitespace-nowrap",
          children: e("footer.copyright"),
        }),
      }),
    });
  },
  hh = ({
    component: e,
    scale: t,
    isLocked: n,
    isHighlighted: s = !1,
    onContainerClick: o,
  }) => {
    const l = m.useRef(null),
      { t: a } = mt(),
      {
        apiDepartmentData: i,
        setApiDepartmentData: c,
        showNotification: g,
      } = Qe(),
      [h, p] = m.useState(!1),
      [f, b] = m.useState({ x: 0, y: 0 }),
      [w, M] = m.useState(e.position),
      [C, u] = m.useState(!1),
      [d, x] = m.useState(null),
      [k, O] = m.useState({ x: 0, y: 0 }),
      [I, A] = m.useState({ x: 0, y: 0 }),
      _ = () => {
        try {
          const Y = localStorage.getItem("medMap_setting");
          if (Y) return JSON.parse(Y).light_color || "red";
        } catch (Y) {
          console.error("讀取高亮顏色設定失敗:", Y);
        }
        return "red";
      },
      ee = m.useCallback(
        async (Y, pe) => {
          if (!i) return;
          console.log("🔄 更新組件位置:", Y, pe);
          const be = JSON.parse(JSON.stringify(i)),
            R = (z) => {
              for (const D of z) {
                if (D.GUID === Y)
                  return (
                    (D.position = { x: pe.x.toFixed(3), y: pe.y.toFixed(3) }),
                    console.log(
                      "✅ 組件位置已更新:",
                      D.name,
                      pe.x.toFixed(3),
                      pe.y.toFixed(3)
                    ),
                    !0
                  );
                if (
                  (D.components &&
                    Array.isArray(D.components) &&
                    R(D.components)) ||
                  (D.contents && Array.isArray(D.contents) && R(D.contents))
                )
                  return !0;
              }
              return !1;
            };
          if (R(be)) {
            c(be), console.log("💾 全域資料已更新");
            try {
              console.log("📡 開始同步後端位置資料...");
              const z = await ke.updateContainerPosition({
                GUID: Y,
                absolute_position: `${pe.x.toFixed(3)},${pe.y.toFixed(3)}`,
              });
              z.Code === 200
                ? (console.log("✅ 後端位置同步成功", z),
                  g("位置更新成功", "success"))
                : (console.error("❌ 後端位置同步失敗:", z),
                  g(`位置更新失敗: ${z.Result || "未知錯誤"}`, "error"));
            } catch (z) {
              console.error("💥 後端位置同步發生錯誤:", z),
                g("位置更新失敗: 網路錯誤", "error");
            }
          } else console.warn("⚠️ 未找到要更新的組件:", Y);
        },
        [i, c, g]
      ),
      { position: S, dimensions: U, name: q, type: P } = e,
      T = m.useCallback(
        (Y) => {
          const pe = l.current;
          if (pe)
            if ((A({ x: Y.clientX, y: Y.clientY }), n)) {
              Y.preventDefault(),
                Y.stopPropagation(),
                pe.setPointerCapture(Y.pointerId);
              const be = pe.getBoundingClientRect(),
                R = Y.clientX - be.left,
                me = Y.clientY - be.top;
              b({ x: R, y: me }), p(!0), u(!1);
            } else u(!1);
        },
        [n]
      ),
      se = m.useCallback(() => {
        if (!i) return [];
        const Y = [],
          pe = (be) => {
            for (const R of be)
              R.GUID !== e.GUID &&
                R.position &&
                Y.push({
                  GUID: R.GUID,
                  position: R.position,
                  dimensions: R.dimensions,
                }),
                R.components && Array.isArray(R.components) && pe(R.components),
                R.contents && Array.isArray(R.contents) && pe(R.contents);
          };
        return pe(i), Y;
      }, [i, e.GUID]),
      v = m.useCallback(
        (Y, pe) => {
          const R = se();
          let me = Y,
            z = pe;
          for (const D of R) {
            const ne = parseFloat(D.position.x),
              ie = parseFloat(D.position.y);
            if (
              (Math.abs(Y - ne) < 20 && (me = ne),
              Math.abs(pe - ie) < 20 && (z = ie),
              D.dimensions && e.dimensions)
            ) {
              const B = ne + parseFloat(D.dimensions.width),
                J = Y + parseFloat(e.dimensions.width);
              Math.abs(J - B) < 20 && (me = B - parseFloat(e.dimensions.width));
              const E = ie + parseFloat(D.dimensions.depth),
                F = pe + parseFloat(e.dimensions.depth);
              Math.abs(F - E) < 20 && (z = E - parseFloat(e.dimensions.depth));
            }
          }
          return { x: me, y: z };
        },
        [se, e.dimensions]
      ),
      N = m.useCallback(
        (Y) => {
          const pe = Math.abs(Y.clientX - I.x),
            be = Math.abs(Y.clientY - I.y);
          if (((pe > 5 || be > 5) && u(!0), !h || !n)) return;
          Y.preventDefault(), Y.stopPropagation();
          const R = l.current;
          if (!R) return;
          const me = R.closest("[data-canvas-content]");
          if (!me) return;
          const z = me.getBoundingClientRect(),
            D = (Y.clientX - z.left - f.x) / t,
            ne = (Y.clientY - z.top - f.y) / t,
            ie = v(D, ne);
          M(ie);
        },
        [h, f, t, n, v, I]
      ),
      j = m.useCallback(
        (Y) => {
          const pe = Math.abs(Y.clientX - I.x),
            be = Math.abs(Y.clientY - I.y),
            R = pe > 5 || be > 5;
          if (n) {
            if (!h) return;
            Y.preventDefault(), Y.stopPropagation();
            const me = l.current;
            me && me.releasePointerCapture(Y.pointerId),
              p(!1),
              R ? ee(e.GUID, w) : o && o(e),
              u(!1);
          } else
            !R && o && (Y.preventDefault(), Y.stopPropagation(), o(e)), u(!1);
        },
        [h, n, o, e, ee, w, I]
      ),
      V = m.useCallback(
        (Y) => {
          const pe = l.current;
          if (!pe) return;
          const be = Y.touches[0];
          if (be && (O({ x: be.clientX, y: be.clientY }), n)) {
            Y.preventDefault(), Y.stopPropagation(), x(be.identifier);
            const R = pe.getBoundingClientRect(),
              me = be.clientX - R.left,
              z = be.clientY - R.top;
            b({ x: me, y: z }), p(!0);
          }
        },
        [n]
      ),
      de = m.useCallback(
        (Y) => {
          if (!h || !n || d === null) return;
          Y.preventDefault(), Y.stopPropagation();
          const pe = l.current;
          if (!pe) return;
          const be = Array.from(Y.touches).find((ie) => ie.identifier === d);
          if (!be) return;
          const R = pe.closest("[data-canvas-content]");
          if (!R) return;
          const me = R.getBoundingClientRect(),
            z = (be.clientX - me.left - f.x) / t,
            D = (be.clientY - me.top - f.y) / t,
            ne = v(z, D);
          M(ne);
        },
        [h, f, t, n, d, v]
      ),
      te = m.useCallback(
        (Y) => {
          const pe = Array.from(Y.changedTouches)[0];
          if (!pe) return;
          const be = Math.abs(pe.clientX - k.x),
            R = Math.abs(pe.clientY - k.y),
            me = be > 10 || R > 10;
          if (n) {
            if (
              !h ||
              d === null ||
              !Array.from(Y.changedTouches).some((D) => D.identifier === d)
            )
              return;
            Y.preventDefault(),
              Y.stopPropagation(),
              p(!1),
              x(null),
              O({ x: 0, y: 0 }),
              me ? ee(e.GUID, w) : o && o(e);
          } else
            !me && o && (Y.preventDefault(), Y.stopPropagation(), o(e)),
              O({ x: 0, y: 0 });
        },
        [h, n, d, ee, e, w, k, o]
      ),
      ae = m.useCallback(
        (Y) => {
          !h ||
            !n ||
            d === null ||
            !Array.from(Y.changedTouches).some((be) => be.identifier === d) ||
            (Y.preventDefault(),
            Y.stopPropagation(),
            M(e.position),
            p(!1),
            x(null),
            O({ x: 0, y: 0 }));
        },
        [h, n, d, e.position]
      ),
      Se = (Y) => {
        if (s) return `highlight-breathe-${_()}`;
        switch (Y) {
          case "調劑台":
            return "bg-gray-100 border-gray-400";
          case "藥庫":
            return "bg-gray-100 border-gray-400";
          case "parent_container":
            return "bg-gray-100 border-gray-400";
          default:
            return "bg-gray-50 border-gray-400";
        }
      },
      ue = (Y) => {
        if (s) return `highlight-breathe-${_()}`;
        switch (Y) {
          case "調劑台":
            return "bg-gray-200 text-gray-900";
          case "藥庫":
            return "bg-gray-200 text-gray-900";
          case "parent_container":
            return "bg-gray-200 text-gray-900";
          default:
            return "bg-gray-200 text-gray-800";
        }
      },
      Ce = (Y) => {
        if (s) return `highlight-tag-${_()}`;
        switch (Y) {
          case "調劑台":
            return "bg-gray-700 text-gray-900";
          case "藥庫":
            return "bg-gray-700 text-gray-900";
          case "parent_container":
            return "bg-gray-700 text-gray-900";
          default:
            return "bg-gray-700 text-gray-900";
        }
      },
      fe = (Y) => {
        const pe =
          Y === "調劑台"
            ? "type.dispensingStation"
            : Y === "藥庫"
            ? "type.warehouse"
            : Y === "parent_container"
            ? "櫃體"
            : "type." + Y;
        return a(pe) || Y;
      };
    return r.jsx("div", {
      ref: l,
      className: `flex flex-col absolute border-2 rounded-lg shadow-lg hover:shadow-xl ${Se(
        P
      )} overflow-hidden ${n ? "cursor-move" : "cursor-default"} ${
        h ? "shadow-2xl z-50" : ""
      }`,
      style: {
        left: `${w.x}px`,
        top: `${w.y}px`,
        minWidth: P === "調劑台" || P === "藥庫" ? "120px" : "180px",
        minHeight: P === "調劑台" || P === "藥庫" ? "60px" : "120px",
        userSelect: "none",
        touchAction: "none",
        transition: h
          ? "none"
          : "transform 0.2s ease-out, box-shadow 0.2s ease-out",
      },
      onPointerDown: T,
      onPointerMove: N,
      onPointerUp: j,
      onTouchStart: V,
      onTouchMove: de,
      onTouchEnd: te,
      onTouchCancel: ae,
      children: r.jsx("div", {
        className: `w-full min-w-[400px] h-auto flex items-start flex-1 justify-between p-2 border-gray-600 ${ue(
          P
        )}`,
        children: r.jsx("div", {
          className: "flex space-x-2 flex-1 min-w-0",
          children: r.jsxs("div", {
            className: "min-w-0 flex gap-4",
            children: [
              r.jsx("div", {
                className: "font-semibold text-lg truncate",
                children: q,
              }),
              r.jsx("div", {
                className: `text-sm truncate py-1 px-3 text-white rounded-2xl ${Ce(
                  P
                )}`,
                children: fe(P),
              }),
            ],
          }),
        }),
      }),
    });
  },
  Ho = ({ isOpen: e, onClose: t, onScanSuccess: n, mode: s }) => {
    const { showNotification: o, openAddBarcodeModal: l } = Qe();
    console.log("🔍 QRCodeScannerModal props:", {
      isOpen: e,
      mode: s,
      hasOnScanSuccess: !!n,
    });
    const a = m.useRef(null),
      i = m.useRef(null),
      c = m.useRef(null),
      g = m.useRef(null),
      h = m.useRef(null),
      [p, f] = m.useState(!1),
      [b, w] = m.useState(""),
      [M, C] = m.useState(0),
      [u, d] = m.useState(null),
      [x, k] = m.useState(!1);
    m.useEffect(() => {
      const U = () => {
        const q = window.innerWidth < 680;
        k(q);
      };
      return (
        U(),
        window.addEventListener("resize", U),
        () => window.removeEventListener("resize", U)
      );
    }, []);
    const O = async () => {
        try {
          w("");
          const U = await navigator.mediaDevices.getUserMedia({
            video: {
              facingMode: "environment",
              width: { ideal: 1920 },
              height: { ideal: 1080 },
            },
          });
          (c.current = U),
            a.current &&
              ((a.current.srcObject = U),
              await a.current.play(),
              console.log("✅ Camera started, setting isScanning to true"),
              f(!0));
        } catch (U) {
          console.error("無法開啟相機:", U),
            w("無法開啟相機，請確認相機權限已開啟");
        }
      },
      I = () => {
        g.current && (clearInterval(g.current), (g.current = null)),
          c.current &&
            (c.current.getTracks().forEach((U) => U.stop()),
            (c.current = null)),
          a.current && (a.current.srcObject = null),
          f(!1);
      },
      A = async () => {
        if (
          (console.log("🔄 captureAndScan called"),
          console.log("📹 videoRef.current:", !!a.current),
          console.log("🖼️ canvasRef.current:", !!i.current),
          console.log("▶️ isScanning:", p),
          !a.current || !i.current || !p)
        ) {
          console.log("❌ Early return: missing refs or not scanning");
          return;
        }
        const U = Date.now();
        if (U - M < 1e3) {
          console.log("⏱️ Throttled: too soon since last scan");
          return;
        }
        C(U);
        const q = a.current,
          P = i.current,
          T = P.getContext("2d");
        if (
          (console.log("🎥 video.readyState:", q.readyState),
          console.log("🎥 HAVE_ENOUGH_DATA:", q.HAVE_ENOUGH_DATA),
          !T || q.readyState !== q.HAVE_ENOUGH_DATA)
        ) {
          console.log("❌ Video not ready or no context");
          return;
        }
        (P.width = q.videoWidth),
          (P.height = q.videoHeight),
          T.drawImage(q, 0, 0, P.width, P.height),
          P.toBlob(
            async (se) => {
              if (!se) return;
              const v = new File([se], "scan.jpg", { type: "image/jpeg" });
              try {
                console.log("📸 截取圖片並掃描...");
                const N = await ke.scanBarcode(v);
                if (!N.results || N.results.length === 0) {
                  console.log("⚠️ 未辨識到條碼");
                  return;
                }
                const j = N.results[0];
                if (!j.code) {
                  console.log("⚠️ 辨識到條碼但無法讀取內容");
                  return;
                }
                console.log("✅ 成功辨識條碼:", j.code),
                  console.log("📋 條碼類型:", j.type),
                  console.log("📊 信心度:", j.conf),
                  I(),
                  t();
                try {
                  const V = await ke.searchByBarCode(j.code);
                  console.log("🔍 條碼搜尋結果:", V),
                    V.Code === 200
                      ? (console.log("✅ 找到藥品資料:", V.Data),
                        console.log("🎯 準備調用 onScanSuccess, mode:", s),
                        o("找到藥品資料", "success"),
                        n
                          ? (console.log("✅ onScanSuccess 存在，開始調用"),
                            n(j.code, V.Data),
                            console.log("✅ onScanSuccess 調用完成"))
                          : console.warn("⚠️ onScanSuccess 不存在"))
                      : V.Code === -200 && V.Result === "查無資料"
                      ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                        o("查無條碼資料，請建立條碼", "warning"),
                        l(j.code))
                      : (console.log("❌ 搜尋失敗:", V.Result),
                        o(V.Result || "搜尋失敗", "error"));
                } catch (V) {
                  console.error("條碼搜尋錯誤:", V),
                    o("搜尋失敗，請稍後再試", "error");
                }
              } catch (N) {
                console.error("掃描錯誤:", N);
              }
            },
            "image/jpeg",
            1
          );
      },
      _ = () => {
        g.current && clearInterval(g.current),
          (g.current = setInterval(() => {
            A();
          }, 1e3));
      };
    m.useEffect(
      () => (
        e ? O() : I(),
        () => {
          I();
        }
      ),
      [e]
    ),
      m.useEffect(() => {
        p && !g.current
          ? (console.log("🚀 isScanning became true, starting interval"), _())
          : !p &&
            g.current &&
            (console.log("🛑 isScanning became false, stopping interval"),
            g.current && (clearInterval(g.current), (g.current = null)));
      }, [p]);
    const ee = () => {
        I(), t();
      },
      S = async (U) => {
        if (!c.current || !h.current) return;
        const q = h.current.getBoundingClientRect(),
          P = (U.clientX - q.left) / q.width,
          T = (U.clientY - q.top) / q.height;
        console.log("🎯 點擊聚焦位置:", { x: P, y: T }),
          d({ x: U.clientX - q.left, y: U.clientY - q.top }),
          setTimeout(() => d(null), 1e3);
        try {
          const se = c.current.getVideoTracks()[0],
            v = se.getCapabilities();
          if (
            (console.log("📹 相機能力:", v),
            !v.focusMode || !v.focusMode.includes("manual"))
          ) {
            console.log("⚠️ 此相機不支援手動聚焦");
            return;
          }
          const N = {
            advanced: [
              {
                focusMode: "manual",
                focusDistance: 0,
                pointsOfInterest: [{ x: P, y: T }],
              },
            ],
          };
          await se.applyConstraints(N), console.log("✅ 聚焦成功");
        } catch (se) {
          console.log("⚠️ 聚焦失敗 (可能不支援):", se);
        }
      };
    return e
      ? x
        ? r.jsxs("div", {
            className: "fixed inset-0 bg-black z-50 flex flex-col",
            children: [
              r.jsxs("div", {
                className:
                  "flex items-center justify-between p-4 bg-gray-900 bg-opacity-90",
                children: [
                  r.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      r.jsx(_r, { className: "w-6 h-6 text-white" }),
                      r.jsx("h2", {
                        className: "text-lg font-semibold text-white",
                        children: "條碼掃描",
                      }),
                    ],
                  }),
                  r.jsx("button", {
                    onClick: ee,
                    className:
                      "p-2 hover:bg-gray-700 rounded-lg transition-colors",
                    children: r.jsx(Fe, { className: "w-6 h-6 text-white" }),
                  }),
                ],
              }),
              r.jsxs("div", {
                className: "flex-1 relative",
                children: [
                  r.jsxs("div", {
                    ref: h,
                    className: "absolute inset-0 bg-black cursor-crosshair",
                    onClick: S,
                    children: [
                      r.jsx("video", {
                        ref: a,
                        className: "w-full h-full object-cover",
                        playsInline: !0,
                        muted: !0,
                      }),
                      u &&
                        r.jsxs("div", {
                          className: "absolute pointer-events-none",
                          style: {
                            left: u.x,
                            top: u.y,
                            transform: "translate(-50%, -50%)",
                          },
                          children: [
                            r.jsx("div", {
                              className:
                                "w-16 h-16 border-2 border-yellow-400 rounded-full animate-ping",
                            }),
                            r.jsx("div", {
                              className:
                                "absolute inset-0 w-16 h-16 border-2 border-yellow-400 rounded-full",
                            }),
                            r.jsxs("div", {
                              className:
                                "absolute inset-0 w-16 h-16 flex items-center justify-center",
                              children: [
                                r.jsx("div", {
                                  className: "w-1 h-16 bg-yellow-400",
                                }),
                                r.jsx("div", {
                                  className: "absolute w-16 h-1 bg-yellow-400",
                                }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                  r.jsx("canvas", { ref: i, className: "hidden" }),
                ],
              }),
              r.jsxs("div", {
                className: "p-4 bg-gray-900 bg-opacity-90",
                children: [
                  b &&
                    r.jsx("div", {
                      className:
                        "bg-red-500 bg-opacity-20 border border-red-500 rounded-lg px-3 py-2 mb-3",
                      children: r.jsx("p", {
                        className: "text-red-200 text-sm",
                        children: b,
                      }),
                    }),
                  r.jsxs("div", {
                    className: "text-center",
                    children: [
                      r.jsx("p", {
                        className: "text-white text-base font-medium mb-1",
                        children: "請將條碼對準鏡頭",
                      }),
                      r.jsx("p", {
                        className: "text-gray-300 text-sm mb-1",
                        children: "支援一維條碼與二維條碼（QR Code）",
                      }),
                      r.jsx("p", {
                        className: "text-gray-400 text-xs",
                        children: "💡 點擊畫面可對焦",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        : r.jsx("div", {
            className:
              "fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4",
            children: r.jsxs("div", {
              className:
                "bg-white rounded-lg shadow-xl max-w-2xl w-full overflow-hidden flex flex-col max-h-[90vh]",
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between p-4 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        r.jsx("div", {
                          className:
                            "w-10 h-10 rounded-xl flex items-center justify-center",
                          children: r.jsx(_r, {
                            className: "w-6 h-6 text-blue-500",
                          }),
                        }),
                        r.jsx("h2", {
                          className: "text-lg font-semibold text-gray-900",
                          children: "條碼掃描",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: ee,
                      className:
                        "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Fe, {
                        className: "w-6 h-6 text-gray-600",
                      }),
                    }),
                  ],
                }),
                r.jsxs("div", {
                  className: "flex-1 overflow-y-auto p-4",
                  children: [
                    b &&
                      r.jsx("div", {
                        className:
                          "bg-red-50 border border-red-200 rounded-lg px-3 py-2 mb-4",
                        children: r.jsx("p", {
                          className: "text-red-600 text-sm",
                          children: b,
                        }),
                      }),
                    r.jsxs("div", {
                      className: "space-y-4",
                      children: [
                        r.jsx("div", {
                          ref: h,
                          className:
                            "relative bg-black rounded-xl overflow-hidden cursor-crosshair",
                          style: { aspectRatio: "16/9" },
                          onClick: S,
                          children: r.jsx("video", {
                            ref: a,
                            className: "w-full h-full object-cover",
                            playsInline: !0,
                            muted: !0,
                          }),
                        }),
                        r.jsx("canvas", { ref: i, className: "hidden" }),
                        r.jsxs("div", {
                          className: "text-center rounded-lg pb-4",
                          children: [
                            r.jsx("p", {
                              className:
                                "text-gray-800 text-base font-medium mb-2",
                              children: "請將條碼對準鏡頭",
                            }),
                            r.jsx("p", {
                              className: "text-gray-600 text-sm",
                              children: "支援一維條碼與二維條碼（QR Code）",
                            }),
                            r.jsx("p", {
                              className: "text-gray-500 text-xs mt-1",
                              children: "💡 點擊畫面可對焦",
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
  gh = ({ children: e }) => {
    const t = m.useRef(null),
      n = m.useRef(null),
      {
        selectedDepartmentType: s,
        apiDepartmentData: o,
        showNotification: l,
        openAddBarcodeModal: a,
        openContainerDetailModal: i,
        setHighlightedMedicineCode: c,
      } = Qe(),
      { t: g } = mt(),
      [h, p] = m.useState({ x: 0, y: 0, scale: 1 }),
      [f, b] = m.useState(!1),
      [w, M] = m.useState(!1),
      [C, u] = m.useState({ x: 0, y: 0 }),
      [d, x] = m.useState(!1),
      [k, O] = m.useState(!1),
      [I, A] = m.useState(""),
      [_, ee] = m.useState([]),
      [S, U] = m.useState(null),
      q = {
        blue: "255,0,0",
        green: "0,255,0",
        red: "0,0,255",
        yellow: "0,255,255",
        purple: "255,0,255",
        cyan: "255,255,0",
      },
      P = (E) => {
        const F = E.split(",").map((H) => H.trim());
        return F.length === 3 ? `${F[2]},${F[1]},${F[0]}` : E;
      },
      T = () => {
        try {
          const E = localStorage.getItem("med_map_anchor");
          return E ? JSON.parse(E) : [];
        } catch (E) {
          return (
            console.error("Error reading canvas states from localStorage:", E),
            []
          );
        }
      },
      se = (E, F, H, K) => {
        try {
          const ce = T(),
            he = ce.findIndex(
              (ye) => ye.department === E && ye.canvasType === F
            ),
            _e = { department: E, canvasType: F, scale: H, position: K };
          he >= 0 ? (ce[he] = _e) : ce.push(_e),
            localStorage.setItem("med_map_anchor", JSON.stringify(ce));
        } catch (ce) {
          console.error("Error saving canvas state to localStorage:", ce);
        }
      },
      v = (E, F) =>
        T().find((K) => K.department === E && K.canvasType === F) || null;
    m.useEffect(() => {
      if (s) {
        const E = v(s, "InfiniteCanvas");
        if (E) p({ x: E.position.x, y: E.position.y, scale: E.scale });
        else {
          const F = { x: 0, y: 0, scale: 1 };
          p(F), se(s, "InfiniteCanvas", F.scale, F);
        }
      }
    }, [s]),
      m.useEffect(() => {
        if (!s) return;
        const E = setTimeout(() => {
          se(s, "InfiniteCanvas", h.scale, { x: h.x, y: h.y });
        }, 500);
        return () => clearTimeout(E);
      }, [h, s]),
      m.useEffect(() => {
        const E = (H) => {
            H.code === "Space" && !H.repeat && (H.preventDefault(), x(!0));
          },
          F = (H) => {
            H.code === "Space" && (H.preventDefault(), x(!1), b(!1));
          };
        return (
          window.addEventListener("keydown", E),
          window.addEventListener("keyup", F),
          () => {
            window.removeEventListener("keydown", E),
              window.removeEventListener("keyup", F);
          }
        );
      }, []);
    const N = m.useCallback(
        (E) => {
          var H;
          if (w) return;
          if (
            (E.ctrlKey && !navigator.userAgent.includes("Mac")) ||
            (E.metaKey && navigator.userAgent.includes("Mac"))
          ) {
            E.preventDefault(), E.stopPropagation();
            const K =
              (H = t.current) == null ? void 0 : H.getBoundingClientRect();
            if (!K) return;
            const ce = E.clientX - K.left,
              he = E.clientY - K.top,
              _e = E.deltaY > 0 ? 0.9 : 1.1,
              ye = Math.max(0.1, Math.min(5, h.scale * _e)),
              we = ye / h.scale,
              Ne = ce - (ce - h.x) * we,
              Ee = he - (he - h.y) * we;
            p({ x: Ne, y: Ee, scale: ye });
          }
        },
        [h, w]
      ),
      j = m.useCallback(
        (E) => {
          w ||
            !d ||
            (b(!0), u({ x: E.clientX, y: E.clientY }), E.preventDefault());
        },
        [w, d]
      ),
      V = m.useCallback(
        (E) => {
          if (!f || w) return;
          const F = E.clientX - C.x,
            H = E.clientY - C.y;
          p((K) => ({ ...K, x: K.x + F, y: K.y + H })),
            u({ x: E.clientX, y: E.clientY });
        },
        [f, C, w]
      ),
      de = m.useCallback(() => {
        b(!1);
      }, []),
      te = m.useCallback(
        (E) => {
          if (!o) return [];
          const F = [],
            H = (K) => {
              for (const ce of K)
                ce.med_list &&
                  Array.isArray(ce.med_list) &&
                  ce.med_list.some((_e) => _e.code == E) &&
                  (console.log("✅ 找到藥品所在櫃體:", ce.name, ce.GUID),
                  F.push(ce)),
                  ce.components &&
                    Array.isArray(ce.components) &&
                    H(ce.components),
                  ce.contents && Array.isArray(ce.contents) && H(ce.contents);
            };
          return H(o), F;
        },
        [o]
      ),
      ae = m.useCallback(() => {
        try {
          const F = localStorage.getItem("medMap_setting");
          if (F) {
            const K = JSON.parse(F).light_sec;
            if (K != null && K !== "") {
              const ce = Number(K);
              if (!isNaN(ce) && ce > 0) return ce * 1e3;
            }
          }
        } catch (F) {
          console.error("讀取亮燈設定失敗:", F);
        }
        return 6e4;
      }, []),
      Se = m.useCallback(() => {
        const E = { rgb_color: "0,0,255", brightness: "100" };
        try {
          const F = localStorage.getItem("medMap_setting");
          if (F) {
            const H = JSON.parse(F),
              K = H.light_color || "red",
              ce = q[K] || q.red;
            return {
              rgb_color: P(ce),
              brightness: String(H.brightness !== void 0 ? H.brightness : 100),
            };
          }
        } catch (F) {
          console.error("讀取亮燈設定失敗:", F);
        }
        return E;
      }, []),
      ue = m.useCallback(
        async (E) => {
          if (!E.trim()) return;
          n.current && (clearTimeout(n.current), (n.current = null)),
            console.log("🔍 搜尋藥碼:", E);
          const F = te(E);
          if (F.length > 0) {
            const H = ae(),
              K = Se();
            console.log(`🎯 高亮 ${F.length} 個櫃體:`, F),
              console.log(`⏱️ 亮燈時長: ${H}ms (${H / 1e3}秒)`),
              console.log("💡 亮燈設定:", K);
            const ce = F.map((he) => he.GUID);
            ee(ce), U(E), c(E);
            for (const he of F)
              if (he.serverName && he.serverType)
                try {
                  console.log(
                    `💡 呼叫亮燈 API - 櫃體: ${he.name}, ServerName: ${he.serverName}, ServerType: ${he.serverType}`
                  ),
                    await ke.lightByCodeNameType(
                      he.serverName,
                      he.serverType,
                      E,
                      K.rgb_color,
                      K.brightness,
                      he.device_type
                    );
                } catch (_e) {
                  console.error(`❌ 亮燈 API 失敗 - 櫃體: ${he.name}:`, _e);
                }
              else
                console.warn(
                  `⚠️ 櫃體 ${he.name} 缺少 serverName 或 serverType，無法亮燈`
                );
            n.current = setTimeout(async () => {
              console.log("⏱️ 恢復原本顏色，呼叫滅燈 API"),
                ee([]),
                U(null),
                c(null);
              for (const he of F)
                if (he.serverName && he.serverType)
                  try {
                    console.log(`🌑 呼叫滅燈 API - 櫃體: ${he.name}`),
                      await ke.lightByCodeNameType(
                        he.serverName,
                        he.serverType,
                        E,
                        "0,0,0",
                        K.brightness,
                        he.device_type
                      );
                  } catch (_e) {
                    console.error(`❌ 滅燈 API 失敗 - 櫃體: ${he.name}:`, _e);
                  }
              n.current = null;
            }, H);
          } else
            console.log("❌ 未找到包含此藥品的櫃體"), ee([]), U(null), c(null);
        },
        [te, ae, Se, c]
      ),
      Ce = (E, F) => {
        var K, ce;
        console.log("📍 藥品定位模式 - 掃描到藥品:", {
          barcode: E,
          medicineData: F,
        });
        const H =
          ((K = F[0]) == null ? void 0 : K.CODE) ||
          ((ce = F[0]) == null ? void 0 : ce.code);
        O(!1), ue(H);
      },
      fe = async (E) => {
        var F, H;
        if (E.key === "Enter") {
          if ((E.preventDefault(), !I.trim())) {
            l("請輸入條碼", "warning");
            return;
          }
          try {
            console.log("🔍 搜尋條碼:", I);
            const K = await ke.searchByBarCode(I);
            if (
              (console.log("📋 條碼搜尋回應:", K),
              K.Code === 200 && K.Data && K.Data.length > 0)
            ) {
              const ce =
                ((F = K.Data[0]) == null ? void 0 : F.CODE) ||
                ((H = K.Data[0]) == null ? void 0 : H.code);
              console.log("✅ 找到藥品資料:", K.Data),
                l("找到藥品，開始亮燈", "success"),
                ue(ce),
                A("");
            } else
              K.Code === -200 && K.Result === "查無資料"
                ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                  l("查無條碼資料，請建立條碼", "warning"),
                  a(I),
                  A(""))
                : (console.log("❌ 搜尋失敗:", K.Result),
                  l(K.Result || "搜尋失敗", "error"));
          } catch (K) {
            console.error("條碼搜尋錯誤:", K),
              l("搜尋失敗，請稍後再試", "error");
          }
        }
      };
    m.useEffect(
      () => () => {
        n.current && clearTimeout(n.current);
      },
      []
    );
    const [Y, pe] = m.useState(null),
      [be, R] = m.useState({ x: 0, y: 0 }),
      me = (E) => {
        if (E.length < 2) return null;
        const F = E[0],
          H = E[1];
        return Math.sqrt(
          Math.pow(H.clientX - F.clientX, 2) +
            Math.pow(H.clientY - F.clientY, 2)
        );
      },
      z = (E) => {
        if (E.length === 1) return { x: E[0].clientX, y: E[0].clientY };
        const F = E[0],
          H = E[1];
        return {
          x: (F.clientX + H.clientX) / 2,
          y: (F.clientY + H.clientY) / 2,
        };
      },
      D = m.useCallback(
        (E) => {
          if (!w) {
            if (E.touches.length === 2) {
              const F = me(E.touches),
                H = z(E.touches);
              pe(F), R(H);
            } else if (E.touches.length === 1) {
              const F = E.touches[0];
              u({ x: F.clientX, y: F.clientY }), b(!0);
            }
          }
        },
        [w]
      ),
      ne = m.useCallback(
        (E) => {
          var F;
          if (!w) {
            if ((E.preventDefault(), E.touches.length === 2 && Y !== null)) {
              const H = me(E.touches),
                K = z(E.touches);
              if (H && Y) {
                const ce =
                  (F = t.current) == null ? void 0 : F.getBoundingClientRect();
                if (!ce) return;
                const he = H / Y,
                  _e = Math.max(0.1, Math.min(5, h.scale * he)),
                  ye = K.x - ce.left,
                  we = K.y - ce.top,
                  Ne = _e / h.scale,
                  Ee = ye - (ye - h.x) * Ne,
                  Je = we - (we - h.y) * Ne;
                p({ x: Ee, y: Je, scale: _e }), pe(H), R(K);
              }
            } else if (E.touches.length === 1 && f) {
              const H = E.touches[0],
                K = H.clientX - C.x,
                ce = H.clientY - C.y;
              p((he) => ({ ...he, x: he.x + K, y: he.y + ce })),
                u({ x: H.clientX, y: H.clientY });
            }
          }
        },
        [h, Y, f, C, w]
      ),
      ie = m.useCallback(() => {
        pe(null), b(!1);
      }, []);
    m.useEffect(() => {
      const E = t.current;
      if (E)
        return (
          E.addEventListener("wheel", N, { passive: !1 }),
          () => E.removeEventListener("wheel", N)
        );
    }, [N]),
      m.useCallback(() => {
        p({ x: 0, y: 0, scale: 1 });
      }, []);
    const J = (() => {
      if (!o || o.length === 0) return [];
      const E = o,
        F = [];
      for (const H of E)
        if (H.type === "調劑台" || H.type === "藥庫")
          for (const K of H.contents)
            F.push({
              GUID: K.GUID,
              type: K.type,
              name: `${K.name}`,
              position: K.position,
              dimensions: K.dimensions,
              med_list: K.med_list,
              serverName: K.serverName,
              serverType: K.serverType,
              Master_GUID: H.GUID,
              contents: K.contents || [],
            });
        else H.componets && H.componets.length > 0 && F.push(...H.componets);
      return F;
    })();
    return r.jsxs("div", {
      className: "relative w-full h-full overflow-hidden bg-gray-50",
      children: [
        r.jsx("div", {
          className:
            "absolute md:bottom-4 md:left-4 bottom-16 left-[50%] md:translate-x-[0%] translate-x-[-50%] z-10",
          children: r.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-lg flex items-center overflow-hidden border border-gray-200",
            children: [
              r.jsx("input", {
                type: "text",
                value: I,
                onChange: (E) => A(E.target.value),
                onKeyPress: fe,
                placeholder: "輸入條碼或掃描...",
                className:
                  "px-4 py-2 w-50 focus:outline-none text-gray-700 disabled:opacity-50",
              }),
              r.jsx("button", {
                onClick: () => O(!0),
                className: "p-2",
                title: "掃描條碼",
                children: r.jsx(_r, { className: "w-6 h-6 text-blue-600" }),
              }),
            ],
          }),
        }),
        r.jsx("div", {
          className: "absolute bottom-4 right-4 z-10 flex gap-2",
          children: r.jsx("button", {
            onClick: () => M(!w),
            className: `p-3 rounded-lg shadow-lg transition-colors ${
              w
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`,
            title: g(w ? "canvas.unlockCanvas" : "canvas.lockCanvas"),
            children: w
              ? r.jsx(Ud, { className: "w-6 h-6" })
              : r.jsx(Bd, { className: "w-6 h-6" }),
          }),
        }),
        r.jsx("div", {
          ref: t,
          className: `w-full h-full relative ${
            d && !w ? "cursor-grab" : "cursor-default"
          } ${f ? "cursor-grabbing" : ""}`,
          onMouseDown: j,
          onMouseMove: V,
          onMouseUp: de,
          onMouseLeave: de,
          onTouchStart: D,
          onTouchMove: ne,
          onTouchEnd: ie,
          children: r.jsxs("div", {
            className: "absolute inset-0 origin-top-left",
            style: {
              transform: `translate(${h.x}px, ${h.y}px) scale(${h.scale})`,
              transformOrigin: "0 0",
            },
            children: [
              r.jsx("div", {
                className: "absolute",
                style: {
                  left: -1e4,
                  top: -1e4,
                  width: 2e4,
                  height: 2e4,
                  backgroundImage: `
                linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
              `,
                  backgroundSize: "50px 50px",
                },
              }),
              r.jsxs("div", {
                className: "relative",
                "data-canvas-content": !0,
                children: [
                  J.map((E) =>
                    r.jsx(
                      hh,
                      {
                        component: E,
                        scale: h.scale,
                        isLocked: w,
                        isHighlighted: _.includes(E.GUID),
                        onContainerClick: (F) => {
                          console.log("🖱️ 點擊櫃體，傳遞亮燈藥品代碼:", S),
                            i(F, S);
                        },
                      },
                      E.GUID
                    )
                  ),
                  e,
                ],
              }),
            ],
          }),
        }),
        r.jsx(Ho, {
          isOpen: k,
          onClose: () => O(!1),
          onScanSuccess: Ce,
          mode: "med_light_location_mode",
        }),
      ],
    });
  },
  Fs = ({ content: e, isAdminMode: t }) => {
    const {
        openMedBoxModal: n,
        openAddMedBoxModal: s,
        openListDrawModal: o,
        openGridDrawModal: l,
        openAddShelfDrawContainerModal: a,
        openAddSubContainerModal: i,
        openAddStoreItemModal: c,
        setSelectedMedBox: g,
        setModalMode: h,
        setMedBoxModalOpen: p,
        showNotification: f,
        triggerRefresh: b,
        openEditStoreShelfModal: w,
        openEditParentContainerModal: M,
        reloadMedMapData: C,
      } = Qe(),
      { t: u } = mt(),
      [d, x] = m.useState(!1),
      [k, O] = m.useState(""),
      [I, A] = m.useState(!1),
      [_, ee] = m.useState(e.name);
    m.useEffect(() => {
      ee(e.name);
    }, [e.name]);
    const S = (N) => {
        N.stopPropagation(), O(e.name || ""), x(!0);
      },
      U = (N) => {
        N.stopPropagation(), x(!1), O("");
      },
      q = async (N) => {
        if ((N.stopPropagation(), !k.trim())) {
          f("名稱不能為空", "error");
          return;
        }
        if (k === e.name) {
          x(!1);
          return;
        }
        A(!0);
        try {
          const j = [
            {
              GUID: e.GUID,
              name: k.trim(),
              Master_GUID: e.Master_GUID,
              position: e.gird_position,
              serverName: e.serverName,
              serverType: e.serverType,
            },
          ];
          let V;
          if (e.type === "store_shelves" || e.type === "dispensing_shelves")
            V = await ke.updateMedMapShelf(j);
          else if (e.type === "sub_container") V = await ke.updateSubSection(j);
          else if (e.type === "parent_container")
            V = await ke.updateMedMapSection(j);
          else {
            f("不支援的容器類型", "error"), A(!1);
            return;
          }
          V.Code === 200
            ? (f("名稱更新成功", "success"), x(!1), await C())
            : f(V.Result || "更新失敗", "error");
        } catch (j) {
          console.error("更新名稱失敗:", j), f("更新失敗，請稍後再試", "error");
        } finally {
          A(!1);
        }
      },
      P = (N) => {
        switch (N) {
          case "parent_container":
            return "bg-pink-100";
          case "sub_container":
            return "bg-blue-100";
          case "dispensing_shelves":
          case "store_shelves":
            return "bg-green-100";
          case "med_box":
            return "bg-yellow-100";
          case "grid_draw":
          case "list_draw":
            return "bg-violet-100";
          default:
            return "bg-gray-100";
        }
      },
      T = (N) => {
        switch (N) {
          case "parent_container":
            return "border-pink-200";
          case "sub_container":
            return "border-blue-200";
          case "dispensing_shelves":
          case "store_shelves":
            return "border-green-200";
          case "med_box":
            return "border-yellow-200";
          case "grid_draw":
          case "list_draw":
            return "border-violet-200";
          default:
            return "border-gray-200";
        }
      },
      se = (N) => {
        switch (N) {
          case "parent_container":
            return "bg-pink-400";
          case "sub_container":
            return "bg-blue-400";
          case "dispensing_shelves":
          case "store_shelves":
            return "bg-green-400";
          case "med_box":
            return "bg-yellow-400";
          case "grid_draw":
          case "list_draw":
            return "bg-violet-400";
          default:
            return "bg-gray-200";
        }
      },
      v = (N) => {
        switch (N) {
          case "parent_container":
            return u("type.parentContainer");
          case "sub_container":
            return u("type.subContainer");
          case "dispensing_shelves":
            return u("type.medBoxShelf");
          case "store_shelves":
            return u("type.storeShelf");
          case "grid_draw":
            return u("type.gridDraw");
          case "list_draw":
            return u("type.listDraw");
          case "med_box":
            return u("type.medBox");
          default:
            return N;
        }
      };
    switch (e.type) {
      case "sub_container":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${P(
            e.type || 0
          )} ${T(e.type || 0)}`,
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                d
                  ? r.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        r.jsx("input", {
                          type: "text",
                          value: k,
                          onChange: (N) => O(N.target.value),
                          onClick: (N) => N.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: I,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: q,
                          disabled: I,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(Gs, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: U,
                          disabled: I,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(Fe, {
                            className: "w-5 h-5 text-red-600",
                          }),
                        }),
                      ],
                    })
                  : r.jsxs(r.Fragment, {
                      children: [
                        r.jsx("span", {
                          className:
                            "text-base font-semibold text-gray-800 whitespace-nowrap",
                          children: _,
                        }),
                        r.jsx("button", {
                          onClick: S,
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(mr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !d &&
                  r.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${se(
                      e.type
                    )}`,
                    children: v(e.type),
                  }),
              ],
            }),
            e.type !== "none" &&
              !d &&
              r.jsx("div", {
                className: "flex items-center space-x-1",
                children: r.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (N) => {
                    N.stopPropagation(), a(e);
                  },
                  title: u("modal.add"),
                  children: r.jsx(vt, { className: "w-6 h-6 text-green-700" }),
                }),
              }),
          ],
        });
      case "parent_container":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${P(
            e.type || 0
          )} ${T(
            e.type || 0
          )} cursor-pointer hover:bg-black/5 transition-colors`,
          onClick: (N) => {
            d || M(e);
          },
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                d
                  ? r.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        r.jsx("input", {
                          type: "text",
                          value: k,
                          onChange: (N) => O(N.target.value),
                          onClick: (N) => N.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: I,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: (N) => {
                            N.stopPropagation(), q(N);
                          },
                          disabled: I,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(Gs, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: (N) => {
                            N.stopPropagation(), U(N);
                          },
                          disabled: I,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(Fe, {
                            className: "w-5 h-5 text-red-600",
                          }),
                        }),
                      ],
                    })
                  : r.jsxs(r.Fragment, {
                      children: [
                        r.jsx("span", {
                          className:
                            "text-base font-semibold text-gray-800 whitespace-nowrap",
                          children: _,
                        }),
                        r.jsx("button", {
                          onClick: (N) => {
                            N.stopPropagation(), S(N);
                          },
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(mr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" && !d
                  ? r.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${se(
                        e.type
                      )}`,
                      children: v(e.type),
                    })
                  : null,
              ],
            }),
            e.type !== "none" &&
              !d &&
              r.jsx("div", {
                className: "flex items-center space-x-1",
                children: r.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (N) => {
                    N.stopPropagation(), i(e);
                  },
                  title: u("modal.add"),
                  children: r.jsx(vt, { className: "w-6 h-6 text-green-700" }),
                }),
              }),
          ],
        });
      case "med_box":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${P(
            e.type || 0
          )} ${T(e.type || 0)}`,
          children: [
            r.jsx("div", {
              className: "flex items-center mr-4",
              children:
                e.type != "parent_container"
                  ? r.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${se(
                        e.type
                      )}`,
                      children: v(e.type),
                    })
                  : null,
            }),
            r.jsx("div", {
              className: "flex items-center space-x-1",
              children: r.jsx("button", {
                className: "p-1 hover:bg-black/10 rounded transition-colors",
                onClick: (N) => {
                  N.stopPropagation(), n(e);
                },
                title: u("modal.settings"),
                children: r.jsx(sn, { className: "w-6 h-6 text-gray-600" }),
              }),
            }),
          ],
        });
      case "dispensing_shelves":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${P(
            e.type || 0
          )} ${T(e.type || 0)}`,
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                d
                  ? r.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        r.jsx("input", {
                          type: "text",
                          value: k,
                          onChange: (N) => O(N.target.value),
                          onClick: (N) => N.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: I,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: q,
                          disabled: I,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(Gs, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: U,
                          disabled: I,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(Fe, {
                            className: "w-5 h-5 text-red-600",
                          }),
                        }),
                      ],
                    })
                  : r.jsxs(r.Fragment, {
                      children: [
                        r.jsx("span", {
                          className:
                            "text-base font-semibold text-gray-800 whitespace-nowrap",
                          children: _,
                        }),
                        r.jsx("button", {
                          onClick: S,
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(mr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !d &&
                  r.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${se(
                      e.type
                    )}`,
                    children: v(e.type),
                  }),
              ],
            }),
            r.jsxs("div", {
              className: "flex items-center space-x-1",
              children: [
                r.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (N) => {
                    N.stopPropagation();
                    const j = {
                      GUID: `new_medbox_${Date.now()}`,
                      name: "",
                      box_type: "",
                      width: [],
                      width_index: 0,
                      med_info: [],
                      parentShelf: e,
                    };
                    g(j), h("add"), p(!0);
                  },
                  title: u("modal.add"),
                  children: r.jsx(vt, { className: "w-6 h-6 text-green-700" }),
                }),
                r.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (N) => {},
                  title: u("modal.settings"),
                  children: r.jsx(sn, { className: "w-6 h-6 text-gray-600" }),
                }),
              ],
            }),
          ],
        });
      case "store_shelves":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${P(
            e.type || 0
          )} ${T(
            e.type || 0
          )} cursor-pointer hover:bg-black/5 transition-colors`,
          onClick: (N) => {
            d || w(e);
          },
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                d
                  ? r.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        r.jsx("input", {
                          type: "text",
                          value: k,
                          onChange: (N) => O(N.target.value),
                          onClick: (N) => N.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: I,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: (N) => {
                            N.stopPropagation(), q(N);
                          },
                          disabled: I,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(Gs, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: (N) => {
                            N.stopPropagation(), U(N);
                          },
                          disabled: I,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(Fe, {
                            className: "w-5 h-5 text-red-600",
                          }),
                        }),
                      ],
                    })
                  : r.jsxs(r.Fragment, {
                      children: [
                        r.jsx("span", {
                          className:
                            "text-base font-semibold text-gray-800 whitespace-nowrap",
                          children: _,
                        }),
                        r.jsx("button", {
                          onClick: (N) => {
                            N.stopPropagation(), S(N);
                          },
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(mr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !d &&
                  r.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${se(
                      e.type
                    )}`,
                    children: v(e.type),
                  }),
              ],
            }),
            r.jsx("div", {
              className: "flex items-center space-x-1",
              children: r.jsx("button", {
                className: "p-1 hover:bg-black/10 rounded transition-colors",
                onClick: (N) => {
                  N.stopPropagation(), c(e);
                },
                title: u("modal.add"),
                children: r.jsx(vt, { className: "w-6 h-6 text-green-700" }),
              }),
            }),
          ],
        });
      case "list_draw":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${P(
            e.type || 0
          )} ${T(e.type || 0)}`,
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6",
              children: [
                r.jsx("span", {
                  className:
                    "text-base font-semibold text-gray-800 whitespace-nowrap",
                  children: e.name,
                }),
                e.type != "parent_container"
                  ? r.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${se(
                        e.type
                      )}`,
                      children: v(e.type),
                    })
                  : null,
              ],
            }),
            r.jsx("button", {
              className: "p-1 hover:bg-black/10 rounded transition-colors",
              onClick: (N) => {
                N.stopPropagation(), o(e);
              },
              title: u("modal.settings"),
              children: r.jsx(sn, { className: "w-6 h-6 text-gray-600" }),
            }),
          ],
        });
      case "grid_draw":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${P(
            e.type || 0
          )} ${T(e.type || 0)}`,
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6",
              children: [
                r.jsx("span", {
                  className:
                    "text-base font-semibold text-gray-800 whitespace-nowrap",
                  children: e.name,
                }),
                e.type != "parent_container"
                  ? r.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${se(
                        e.type
                      )}`,
                      children: v(e.type),
                    })
                  : null,
              ],
            }),
            r.jsx("button", {
              className: "p-1 hover:bg-black/10 rounded transition-colors",
              onClick: (N) => {
                N.stopPropagation(), l(e);
              },
              title: u("modal.settings"),
              children: r.jsx(sn, { className: "w-6 h-6 text-gray-600" }),
            }),
          ],
        });
      default:
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${P(
            e.type || 0
          )} ${T(e.type || 0)}`,
          children: [
            r.jsx("div", {
              className: "flex items-center space-x-2 mr-6",
              children:
                e.type != "parent_container"
                  ? r.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${se(
                        e.type
                      )}`,
                      children: v(e.type),
                    })
                  : null,
            }),
            e.type !== "none" &&
              r.jsx("button", {
                className: "p-1 hover:bg-black/10 rounded transition-colors",
                title: u("modal.settings"),
                children: r.jsx(sn, { className: "w-6 h-6 text-gray-600" }),
              }),
          ],
        });
    }
  },
  zd = m.forwardRef(({ children: e }, t) => {
    const n = m.useRef(null),
      {
        selectedDepartmentType: s,
        apiDepartmentData: o,
        setSidebarOpen: l,
        openAddParentContainerModal: a,
        openEditStoreItemModal: i,
        openQRCodeScannerModal: c,
        openAddBarcodeModal: g,
        showNotification: h,
        isAdminMode: p,
      } = Qe(),
      [f, b] = m.useState({ x: 0, y: 0, scale: 1 }),
      [w, M] = m.useState(!1),
      [C, u] = m.useState(!1),
      [d, x] = m.useState({ x: 0, y: 0 }),
      [k, O] = m.useState(!1),
      [I, A] = m.useState(""),
      [_, ee] = m.useState(!1),
      [S, U] = m.useState(null),
      [q, P] = m.useState(!1),
      [T, se] = m.useState({
        isDragging: !1,
        draggedContainer: null,
        draggedElement: null,
        floatingElement: null,
        originalParent: null,
        originalPosition: "",
        originalIndex: -1,
        mouseOffset: { x: 0, y: 0 },
        isMobileDrag: !1,
        originalData: null,
        draggedStockItem: null,
        draggedStockShelf: null,
      }),
      [v, N] = m.useState(null),
      j = m.useRef({}),
      V = () =>
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0,
      de = 8,
      te = () => {
        try {
          const y = localStorage.getItem("med_map_anchor");
          return y ? JSON.parse(y) : [];
        } catch (y) {
          return (
            console.error("Error reading canvas states from localStorage:", y),
            []
          );
        }
      },
      ae = (y, W, Q, L) => {
        try {
          const Z = te(),
            $ = Z.findIndex((re) => re.department === y && re.canvasType === W),
            oe = { department: y, canvasType: W, scale: Q, position: L };
          $ >= 0 ? (Z[$] = oe) : Z.push(oe),
            localStorage.setItem("med_map_anchor", JSON.stringify(Z));
        } catch (Z) {
          console.error("Error saving canvas state to localStorage:", Z);
        }
      },
      Se = (y, W) =>
        te().find((L) => L.department === y && L.canvasType === W) || null;
    m.useEffect(() => {
      if (s) {
        const y = Se(s, "drugCanvas");
        if (y) b({ x: y.position.x, y: y.position.y, scale: y.scale });
        else {
          const W = { x: 0, y: 0, scale: 1 };
          b(W), ae(s, "drugCanvas", W.scale, W);
        }
      }
    }, [s]),
      m.useEffect(() => {
        if (!s) return;
        const y = setTimeout(() => {
          ae(s, "drugCanvas", f.scale, { x: f.x, y: f.y });
        }, 500);
        return () => clearTimeout(y);
      }, [f, s]);
    const ue = (y) =>
        [
          "parent_container",
          "sub_container",
          "dispensing_shelves",
          "store_shelves",
          "grid_draw",
          "list_draw",
          "med_box",
        ].includes(y),
      Ce = (y) =>
        ({
          parent_container: ["parent_container", "調劑台", "藥庫"],
          sub_container: ["parent_container", "sub_container"],
          dispensing_shelves: [
            "dispensing_shelves",
            "store_shelves",
            "sub_container",
            "grid_draw",
            "list_draw",
          ],
          store_shelves: [
            "dispensing_shelves",
            "store_shelves",
            "sub_container",
            "grid_draw",
            "list_draw",
          ],
          grid_draw: [
            "grid_draw",
            "list_draw",
            "sub_container",
            "dispensing_shelves",
            "store_shelves",
          ],
          list_draw: [
            "grid_draw",
            "list_draw",
            "sub_container",
            "dispensing_shelves",
            "store_shelves",
          ],
          med_box: ["med_box", "dispensing_shelves"],
        }[y] || []),
      fe = (y) => {
        const [W, Q] = y.split(",").map(Number);
        return { row: W || 0, col: Q || 0 };
      },
      Y = (y, W) => `${y},${W}`,
      pe = (y, W) => {
        const Q = (Z, $ = null) => {
            if (Z.GUID === y) return { container: Z, parent: $ };
            if (Z.contents)
              for (const oe of Z.contents) {
                const re = Q(oe, Z);
                if (re) return re;
              }
            return null;
          },
          L = Je();
        for (const Z of L) {
          const $ = Q(Z);
          if ($) return $;
        }
        return null;
      },
      be = (y, W) => {
        if (!y.contents) return;
        const { sortedContents: Q, maxRow: L, maxCol: Z } = Me(y.contents),
          $ = W;
        if (!$) return;
        const oe = fe($.gird_position);
        console.log(L), console.log(Z), console.log($), console.log(oe);
        for (let re = 0; re < Q.length; re++) {
          const X = Q[re],
            G = fe(X.gird_position);
          if (G.row === oe.row && G.col > oe.col)
            (X.gird_position = Y(G.row, G.col - 1)),
              (j.current[X.GUID] = {
                GUID: X.GUID,
                Master_GUID: y.GUID,
                position: `${G.row},${G.col - 1}`,
                serverName: y.serverName,
                serverType: y.serverType,
                type: X.type,
                containerData: X,
              });
          else if (G.row > oe.row) {
            const xe = G.col === 0 ? Z : G.col - 1,
              ge = G.col === 0 ? G.row - 1 : G.row;
            (X.gird_position = Y(ge, xe)),
              (j.current[X.GUID] = {
                GUID: X.GUID,
                Master_GUID: y.GUID,
                position: `${ge},${xe}`,
                serverName: y.serverName,
                serverType: y.serverType,
                type: X.type,
                containerData: X,
              });
          }
        }
        return console.log("移除更新其餘容器", Q), Q;
      },
      R = (y, W, Q, L, Z) => {
        y.contents || (y.contents = []);
        let $ = Math.max(
            1,
            ...y.contents.map((X) => fe(X.gird_position || "0,0").col + 1)
          ),
          oe = Math.max(
            1,
            ...y.contents.map((X) => fe(X.gird_position || "0,0").row + 1)
          );
        console.log("--------", y),
          console.log("目標容器最大列", $),
          console.log("目標容器最大行", oe),
          (y.type == "sub_container" ||
            y.type == "parent_container" ||
            y.type == "調劑台" ||
            y.type == "藥庫") &&
            ($ = +y.oriMaxCol + 1),
          Z != null &&
            Z === "right" &&
            W.type !== "med_box" &&
            L == $ &&
            ((Q = Q + 1),
            y.contents.filter((G) => `${Q},0` == G.gird_position).length > 0
              ? (L = $ - 1)
              : (L = 0)),
          console.log(Q),
          console.log(L);
        const re = y.contents.filter((X) => {
          const G = fe(X.gird_position || "0,0");
          return G.row > Q || (G.row === Q && G.col >= L);
        });
        re.sort((X, G) => {
          const xe = fe(X.gird_position || "0,0"),
            ge = fe(G.gird_position || "0,0");
          return xe.row !== ge.row ? ge.row - xe.row : ge.col - xe.col;
        }),
          console.log("會做變更的目標容器", re),
          re.forEach((X) => {
            const G = fe(X.gird_position || "0,0");
            let xe = G.row,
              ge = G.col;
            X.type === "med_box" || ge < $ - 1
              ? (ge += 1)
              : ((xe += 1), (ge = 0)),
              (X.gird_position = `${xe},${ge}`),
              (j.current[X.GUID] = {
                GUID: X.GUID,
                Master_GUID: y.GUID,
                position: `${xe},${ge}`,
                serverName: y.serverName,
                serverType: y.serverType,
                type: X.type,
                containerData: X,
              }),
              console.log(
                `Shifted container ${X.GUID} from ${G.row},${G.col} to ${xe},${ge}`
              );
          }),
          y.contents.length == 0 && ((Q = 0), (L = 0)),
          (W.gird_position = `${Q},${L}`),
          (W.Master_GUID = y.GUID),
          console.log(`Inserted container ${W.GUID} at position ${Q},${L}`),
          y.contents.push(W),
          (j.current[W.GUID] = {
            GUID: W.GUID,
            Master_GUID: y.GUID,
            position: `${Q},${L}`,
            serverName: y.serverName,
            serverType: y.serverType,
            type: W.type,
            containerData: W,
          }),
          W.type === "dispensing_shelves" &&
            W.contents &&
            W.contents.forEach((X) => {
              X.type === "med_box" &&
                (j.current[X.GUID] = {
                  GUID: X.GUID,
                  Master_GUID: X.Master_GUID,
                  position: X.gird_position,
                  serverName: y.serverName,
                  serverType: y.serverType,
                  type: X.type,
                  containerData: X,
                });
            });
      },
      me = (y, W, Q) => {
        const L = y.getBoundingClientRect(),
          Z = L.left + L.width / 2,
          $ = L.top + L.height / 2,
          oe = W - Z,
          re = Q - $;
        return Math.abs(oe) > Math.abs(re)
          ? oe > 0
            ? "right"
            : "left"
          : re > 0
          ? "bottom"
          : "top";
      },
      z = (y, W, Q, L) => {
        if (!C) return;
        L.preventDefault(), L.stopPropagation();
        const Z = V(),
          $ =
            "touches" in L
              ? L.touches[0].clientX
              : ("pointerId" in L, L.clientX),
          oe =
            "touches" in L
              ? L.touches[0].clientY
              : ("pointerId" in L, L.clientY),
          re = Q.getBoundingClientRect(),
          X = { x: $ - re.left, y: oe - re.top },
          G = Q.cloneNode(!0);
        (G.style.position = "fixed"),
          (G.style.left = `${$ - X.x}px`),
          (G.style.top = `${oe - X.y}px`),
          (G.style.width = `${re.width}px`),
          (G.style.height = `${re.height}px`),
          (G.style.zIndex = "9999"),
          (G.style.opacity = "0.8"),
          (G.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)"),
          (G.style.pointerEvents = "none"),
          document.body.appendChild(G),
          console.log("開始拖曳 stockItem:", y),
          console.log("來源 shelf:", W),
          se({
            isDragging: !0,
            draggedContainer: null,
            draggedElement: Q,
            floatingElement: G,
            originalParent: null,
            originalPosition: "",
            originalIndex: -1,
            mouseOffset: X,
            isMobileDrag: Z,
            originalData: null,
            draggedStockItem: y,
            draggedStockShelf: W,
          });
      },
      D = (y, W, Q) => {
        if (!C || !ue(y.type)) return;
        (j.current = {}), Q.preventDefault(), Q.stopPropagation();
        const L = V(),
          Z =
            "touches" in Q
              ? Q.touches[0].clientX
              : ("pointerId" in Q, Q.clientX),
          $ =
            "touches" in Q
              ? Q.touches[0].clientY
              : ("pointerId" in Q, Q.clientY),
          oe = W.getBoundingClientRect(),
          re = { x: Z - oe.left, y: $ - oe.top },
          X = pe(y.GUID);
        if (!X) return;
        console.log("拖曳目標", y), console.log("拖曳目標", X);
        const G = W.cloneNode(!0);
        if (
          ((G.style.position = "fixed"),
          (G.style.left = `${Z - re.x}px`),
          (G.style.top = `${$ - re.y}px`),
          (G.style.width = `${oe.width}px`),
          (G.style.height = `${oe.height}px`),
          (G.style.zIndex = "9999"),
          (G.style.opacity = "0.8"),
          (G.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)"),
          (G.style.pointerEvents = "none"),
          document.body.appendChild(G),
          L)
        ) {
          const xe = X.parent.contents.findIndex((De) => De.GUID === y.GUID);
          X.parent.contents.splice(xe, 1), console.log(xe), X.parent;
          const ge = be(X.parent, y);
          (X.parent.contents = ge),
            console.log(X.parent),
            se({
              isDragging: !0,
              draggedContainer: y,
              draggedElement: W,
              floatingElement: G,
              originalParent: X.parent,
              originalPosition: y.gird_position,
              originalIndex: xe,
              mouseOffset: re,
              isMobileDrag: !1,
              originalData: null,
            });
        } else {
          const xe = X.parent.contents.findIndex((je) => je.GUID === y.GUID);
          X.parent.contents.splice(xe, 1), console.log(xe);
          const ge = X.parent,
            De = be(X.parent, y);
          (X.parent.contents = De),
            console.log(X.parent),
            se({
              isDragging: !0,
              draggedContainer: y,
              draggedElement: W,
              floatingElement: G,
              originalParent: ge,
              originalPosition: y.gird_position,
              originalIndex: xe,
              mouseOffset: re,
              isMobileDrag: !1,
              originalData: null,
            });
        }
      },
      ne = (y) => {
        if (!T.isDragging || !T.floatingElement) return;
        const W = "touches" in y ? y.touches[0].clientX : y.clientX,
          Q = "touches" in y ? y.touches[0].clientY : y.clientY;
        if (
          ((T.floatingElement.style.left = `${W - T.mouseOffset.x}px`),
          (T.floatingElement.style.top = `${Q - T.mouseOffset.y}px`),
          T.draggedStockItem)
        ) {
          const $ = document.elementFromPoint(W, Q),
            oe = $ == null ? void 0 : $.closest("[data-stock-guid]");
          if (oe) {
            const X = oe.getAttribute("data-stock-guid"),
              G = (ge) => {
                for (const De of ge) {
                  if (De.type === "store_shelves" && De.medMapStock) {
                    const je = De.medMapStock.find((Re) => Re.GUID === X);
                    if (je) return { stockItem: je, shelf: De };
                  }
                  if (De.contents) {
                    const je = G(De.contents);
                    if (je) return je;
                  }
                }
                return null;
              },
              xe = G(o);
            if (xe && xe.stockItem.GUID !== T.draggedStockItem.GUID) {
              const ge = oe.getBoundingClientRect(),
                De = ge.left + ge.width / 2,
                je = W < De ? "left" : "right";
              N({
                container: xe.shelf,
                direction: null,
                element: oe,
                stockItem: xe.stockItem,
                stockItemDirection: je,
              });
              return;
            }
          }
          const re = $ == null ? void 0 : $.closest("[data-container-guid]");
          if (re) {
            const X = re.getAttribute("data-container-guid"),
              G = pe(X);
            if (G && G.container.type === "store_shelves") {
              N({ container: G.container, direction: null, element: re });
              return;
            }
          }
          N(null);
          return;
        }
        const L = document.elementFromPoint(W, Q),
          Z = L == null ? void 0 : L.closest("[data-container-guid]");
        if (Z) {
          const $ = Z.getAttribute("data-container-guid"),
            oe = pe($);
          if (oe && Ce(T.draggedContainer.type).includes(oe.container.type)) {
            const X = me(Z, W, Q);
            if (
              T.draggedContainer.type === "med_box" &&
              !["left", "right"].includes(X)
            ) {
              N(null);
              return;
            }
            N({ container: oe.container, direction: X, element: Z });
            return;
          }
        }
        N(null);
      },
      ie = async (y) => {
        if (!T.isDragging) return;
        if (
          (T.floatingElement && document.body.removeChild(T.floatingElement),
          T.draggedStockItem && T.draggedStockShelf)
        ) {
          if (
            (console.log("StockItem 拖曳結束"),
            console.log("Drop Target:", v),
            v)
          ) {
            const Z = [];
            if (v.stockItem && v.stockItemDirection) {
              console.log(
                `拖曳到 stockItem ${v.stockItem.GUID} 的 ${v.stockItemDirection} 邊`
              );
              const $ = v.container,
                oe = T.draggedStockShelf,
                re = T.draggedStockItem,
                X = Number(v.stockItem.location),
                G = Number(re.location);
              if ($.GUID === oe.GUID) {
                console.log("同一層架內移動");
                const ge = oe.medMapStock.findIndex(
                  (Re) => Re.GUID === re.GUID
                );
                ge !== -1 && oe.medMapStock.splice(ge, 1),
                  oe.medMapStock.forEach((Re) => {
                    const gt = Number(Re.location);
                    gt > G &&
                      ((Re.location = String(gt - 1)), Z.push({ ...Re }));
                  });
                let De;
                const je = X > G ? X - 1 : X;
                v.stockItemDirection === "left" ? (De = je) : (De = je + 1),
                  oe.medMapStock.forEach((Re) => {
                    const gt = Number(Re.location);
                    gt >= De &&
                      ((Re.location = String(gt + 1)), Z.push({ ...Re }));
                  }),
                  (re.location = String(De)),
                  oe.medMapStock.push(re),
                  oe.medMapStock.sort(
                    (Re, gt) => Number(Re.location) - Number(gt.location)
                  ),
                  Z.push({ ...re });
              } else {
                console.log("不同層架間移動");
                const ge = oe.medMapStock.findIndex(
                  (je) => je.GUID === re.GUID
                );
                ge !== -1 && oe.medMapStock.splice(ge, 1),
                  oe.medMapStock.forEach((je) => {
                    const Re = Number(je.location);
                    Re > G &&
                      ((je.location = String(Re - 1)), Z.push({ ...je }));
                  });
                let De;
                v.stockItemDirection === "left" ? (De = X) : (De = X + 1),
                  $.medMapStock.forEach((je) => {
                    const Re = Number(je.location);
                    Re >= De &&
                      ((je.location = String(Re + 1)), Z.push({ ...je }));
                  }),
                  (re.location = String(De)),
                  (re.shelf_guid = $.GUID),
                  $.medMapStock.push(re),
                  $.medMapStock.sort(
                    (je, Re) => Number(je.location) - Number(Re.location)
                  ),
                  Z.push({ ...re });
              }
            } else if (v.container.type === "store_shelves") {
              console.log("拖曳到 store_shelves 容器");
              const $ = v.container,
                oe = T.draggedStockShelf,
                re = T.draggedStockItem,
                X = Number(re.location),
                G = oe.medMapStock.findIndex((xe) => xe.GUID === re.GUID);
              G !== -1 &&
                (oe.medMapStock.splice(G, 1),
                oe.medMapStock.forEach((xe) => {
                  const ge = Number(xe.location);
                  ge > X && ((xe.location = String(ge - 1)), Z.push({ ...xe }));
                })),
                (re.location = "0"),
                (re.shelf_guid = $.GUID),
                $.medMapStock || ($.medMapStock = []),
                $.medMapStock.forEach((xe) => {
                  const ge = Number(xe.location);
                  (xe.location = String(ge + 1)), Z.push({ ...xe });
                }),
                $.medMapStock.push(re),
                $.medMapStock.sort(
                  (xe, ge) => Number(xe.location) - Number(ge.location)
                ),
                Z.push({ ...re });
            }
            if (Z.length > 0) {
              console.log("準備更新的 stockItems:", Z);
              try {
                const $ = await ke.updateStock(Z);
                $.Code === 200
                  ? h("藥品位置更新成功", "success")
                  : h($.Result || "更新失敗", "error");
              } catch ($) {
                console.error("更新 stockItem 失敗:", $),
                  h("更新失敗，請稍後再試", "error");
              }
            }
          }
          se({
            isDragging: !1,
            draggedContainer: null,
            draggedElement: null,
            floatingElement: null,
            originalParent: null,
            originalPosition: "",
            originalIndex: -1,
            mouseOffset: { x: 0, y: 0 },
            isMobileDrag: !1,
            originalData: null,
            draggedStockItem: null,
            draggedStockShelf: null,
          }),
            N(null);
          return;
        }
        let W = null,
          Q = null,
          L = null;
        if (
          (console.log("Drop Target:", v),
          console.log("Is Mobile Drag:", T.isMobileDrag),
          T.isMobileDrag)
        )
          if (v) {
            (W = v.direction), (L = v.container);
            const Z = pe(T.draggedContainer.GUID);
            if (Z) {
              const xe = Z.parent.contents.findIndex(
                (De) => De.GUID === T.draggedContainer.GUID
              );
              Z.parent.contents.splice(xe, 1);
              const ge = be(Z.parent, T.draggedContainer);
              Z.parent.contents = ge;
            }
            const $ = fe(v.container.gird_position || "0,0");
            let oe = $.row,
              re = $.col;
            switch (v.direction) {
              case "top":
                oe = Math.max(0, $.row);
                break;
              case "bottom":
                oe = $.row + 1;
                break;
              case "left":
                re = Math.max(0, $.col);
                break;
              case "right":
                re = $.col + 1;
                break;
            }
            const X = pe(v.container.Master_GUID || v.container.GUID);
            let G = (X == null ? void 0 : X.container) || v.container;
            if (
              (T.draggedContainer.class != v.class && (G = v),
              T.draggedContainer.type === "med_box" &&
                v.container.type !== "med_box")
            )
              if (
                (console.log("藥盒移動目標到層架上"),
                (G = v.container),
                G.contents.length > 0)
              ) {
                let xe = 0,
                  ge = 0;
                G.contents.forEach((De) => {
                  const je = fe(De.gird_position || "0,0").row,
                    Re = fe(De.gird_position || "0,0").col;
                  xe > je && (xe = je), ge > Re && (ge = Re);
                });
                for (let De = 0; De <= ge; De++)
                  for (let je = 0; je <= xe; je++) {
                    const Re = `${De},${je}`;
                    G.contents.filter((We) => We.grid_position === Re)
                      .length === 0 && ((oe = De), (re = je));
                  }
              } else (oe = 0), (re = 0);
            (Q = G), R(G, T.draggedContainer, oe, re, v.direction);
          } else (W = null), (L = null), (Q = T.originalParent);
        else if (v) {
          (W = v.direction), (L = v.container);
          const Z = fe(v.container.gird_position || "0,0");
          let $ = Z.row,
            oe = Z.col;
          switch (v.direction) {
            case "top":
              $ = Math.max(0, Z.row);
              break;
            case "bottom":
              $ = Z.row + 1;
              break;
            case "left":
              oe = Math.max(0, Z.col);
              break;
            case "right":
              oe = Z.col + 1;
              break;
          }
          const re = pe(v.container.Master_GUID || v.container.GUID);
          console.log("------目標容器", v),
            console.log("------拖曳容器", T.draggedContainer);
          let X = (re == null ? void 0 : re.container) || v.container;
          if (
            (console.log(T.draggedContainer.class),
            console.log(v.container.class),
            console.log(T.draggedContainer.class != v.container.class),
            T.draggedContainer.class != v.container.class &&
              ((X = v.container),
              console.log("------這邊顯示放到上層容器現象"),
              console.log("------目標容器", v),
              console.log("------拖曳容器", T.draggedContainer),
              console.log("------目標父容器", X)),
            T.draggedContainer.type === "med_box" &&
              v.container.type !== "med_box")
          )
            if (
              (console.log("藥盒移動目標到層架上"),
              (X = v.container),
              X.contents.length > 0)
            ) {
              let G = 0,
                xe = 0;
              X.contents.forEach((ge) => {
                const De = fe(ge.gird_position || "0,0").row,
                  je = fe(ge.gird_position || "0,0").col;
                G > De && (G = De), xe > je && (xe = je);
              });
              for (let ge = 0; ge <= xe; ge++)
                for (let De = 0; De <= G; De++) {
                  const je = `${ge},${De}`;
                  X.contents.filter((gt) => gt.grid_position === je).length ===
                    0 && (($ = ge), (oe = De));
                }
            } else ($ = 0), (oe = 0);
          (Q = X), R(X, T.draggedContainer, $, oe, v.direction);
        } else {
          (W = null),
            (L = null),
            (Q = T.originalParent),
            (T.draggedContainer.gird_position = T.originalPosition);
          const Z = fe(T.originalPosition || "0,0").row,
            $ = fe(T.originalPosition || "0,0").col;
          R(T.originalParent, T.draggedContainer, Z, $, null);
        }
        se({
          isDragging: !1,
          draggedContainer: null,
          draggedElement: null,
          floatingElement: null,
          originalParent: null,
          originalPosition: "",
          originalIndex: -1,
          mouseOffset: { x: 0, y: 0 },
          isMobileDrag: !1,
          originalData: null,
          draggedStockItem: null,
          draggedStockShelf: null,
        }),
          N(null),
          console.log("Drop Direction:", W),
          console.log("Parent Object:", Q),
          console.log("Target Object:", L),
          console.log("API更新資料：", j),
          await xh(j);
      };
    m.useEffect(() => {
      if (T.isDragging)
        if (V()) {
          const W = (Z) => {
              Z.preventDefault(), ne(Z);
            },
            Q = (Z) => ie(),
            L = (Z) => ie();
          return (
            document.addEventListener("pointermove", W, { passive: !1 }),
            document.addEventListener("pointerup", Q),
            document.addEventListener("pointercancel", L),
            () => {
              document.removeEventListener("pointermove", W),
                document.removeEventListener("pointerup", Q),
                document.removeEventListener("pointercancel", L);
            }
          );
        } else {
          const W = ($) => ne($),
            Q = ($) => ie(),
            L = ($) => {
              $.preventDefault(), ne($);
            },
            Z = ($) => ie();
          return (
            document.addEventListener("mousemove", W),
            document.addEventListener("mouseup", Q),
            document.addEventListener("touchmove", L, { passive: !1 }),
            document.addEventListener("touchend", Z),
            () => {
              document.removeEventListener("mousemove", W),
                document.removeEventListener("mouseup", Q),
                document.removeEventListener("touchmove", L),
                document.removeEventListener("touchend", Z);
            }
          );
        }
    }, [T.isDragging, v]),
      m.useEffect(() => {
        const y = (Q) => {
            Q.code === "Space" && !Q.repeat && (Q.preventDefault(), O(!0));
          },
          W = (Q) => {
            Q.code === "Space" && (Q.preventDefault(), O(!1), M(!1));
          };
        return (
          window.addEventListener("keydown", y),
          window.addEventListener("keyup", W),
          () => {
            window.removeEventListener("keydown", y),
              window.removeEventListener("keyup", W);
          }
        );
      }, []);
    const B = m.useCallback(
        (y) => {
          var Q;
          if (C) return;
          if (y.ctrlKey || y.metaKey) {
            y.preventDefault(), y.stopPropagation();
            const L =
              (Q = n.current) == null ? void 0 : Q.getBoundingClientRect();
            if (!L) return;
            const Z = y.clientX - L.left,
              $ = y.clientY - L.top,
              oe = y.deltaY > 0 ? 0.9 : 1.1,
              re = Math.max(0.1, Math.min(5, f.scale * oe)),
              X = re / f.scale,
              G = Z - (Z - f.x) * X,
              xe = $ - ($ - f.y) * X;
            b({ x: G, y: xe, scale: re });
          }
        },
        [f, C]
      ),
      J = m.useCallback(
        (y) => {
          C ||
            !k ||
            (M(!0),
            x({ x: y.clientX, y: y.clientY }),
            U({ x: y.clientX, y: y.clientY }),
            P(!1),
            y.preventDefault());
        },
        [C, k]
      ),
      E = m.useCallback(
        (y) => {
          if (!w || C) return;
          const W = y.clientX - d.x,
            Q = y.clientY - d.y;
          if (S) {
            const L = Math.abs(y.clientX - S.x),
              Z = Math.abs(y.clientY - S.y);
            (L > 5 || Z > 5) && P(!0);
          }
          b((L) => ({ ...L, x: L.x + W, y: L.y + Q })),
            x({ x: y.clientX, y: y.clientY });
        },
        [w, d, C, S]
      ),
      F = m.useCallback(() => {
        M(!1), U(null);
      }, []),
      [H, K] = m.useState(null),
      [ce, he] = m.useState({ x: 0, y: 0 }),
      _e = (y) => {
        if (y.length < 2) return null;
        const W = y[0],
          Q = y[1];
        return Math.sqrt(
          Math.pow(Q.clientX - W.clientX, 2) +
            Math.pow(Q.clientY - W.clientY, 2)
        );
      },
      ye = (y) => {
        if (y.length === 1) return { x: y[0].clientX, y: y[0].clientY };
        const W = y[0],
          Q = y[1];
        return {
          x: (W.clientX + Q.clientX) / 2,
          y: (W.clientY + Q.clientY) / 2,
        };
      },
      we = m.useCallback(
        (y) => {
          if (!C) {
            if (y.touches.length === 2) {
              const W = _e(y.touches),
                Q = ye(y.touches);
              K(W), he(Q);
            } else if (y.touches.length === 1) {
              const W = y.touches[0];
              x({ x: W.clientX, y: W.clientY }), M(!0);
            }
          }
        },
        [C]
      ),
      Ne = m.useCallback(
        (y) => {
          var W;
          if (!C) {
            if ((y.preventDefault(), y.touches.length === 2 && H !== null)) {
              const Q = _e(y.touches),
                L = ye(y.touches);
              if (Q && H) {
                const Z =
                  (W = n.current) == null ? void 0 : W.getBoundingClientRect();
                if (!Z) return;
                const $ = Q / H,
                  oe = Math.max(0.1, Math.min(5, f.scale * $)),
                  re = L.x - Z.left,
                  X = L.y - Z.top,
                  G = oe / f.scale,
                  xe = re - (re - f.x) * G,
                  ge = X - (X - f.y) * G;
                b({ x: xe, y: ge, scale: oe }), K(Q), he(L);
              }
            } else if (y.touches.length === 1 && w) {
              const Q = y.touches[0],
                L = Q.clientX - d.x,
                Z = Q.clientY - d.y;
              b(($) => ({ ...$, x: $.x + L, y: $.y + Z })),
                x({ x: Q.clientX, y: Q.clientY });
            }
          }
        },
        [f, H, w, d, C]
      ),
      Ee = m.useCallback(() => {
        K(null), M(!1);
      }, []);
    m.useEffect(() => {
      const y = n.current;
      if (y)
        return (
          y.addEventListener("wheel", B, { passive: !1 }),
          () => y.removeEventListener("wheel", B)
        );
    }, [B]);
    const Je = () => (!o || o.length === 0 ? [] : o),
      Me = (y) => {
        if (!y || y.length === 0)
          return { sortedContents: [], maxRow: 0, maxCol: 0 };
        const W = y.map(($) => ({
            ...$,
            gridPos: fe($.gird_position || "0,0"),
          })),
          Q = Math.max(...W.map(($) => $.gridPos.row), 0),
          L = Math.max(...W.map(($) => $.gridPos.col), 0);
        return {
          sortedContents: W.sort(($, oe) =>
            $.gridPos.row !== oe.gridPos.row
              ? $.gridPos.row - oe.gridPos.row
              : $.gridPos.col - oe.gridPos.col
          ),
          maxRow: Q,
          maxCol: L,
        };
      },
      Ye = Je(),
      ze = Math.max(...Ye.map((y) => fe(y.gird_position || "0,0").row), 0),
      Lt = Math.max(...Ye.map((y) => fe(y.gird_position || "0,0").col), 0),
      ht = (y) => {
        const W = (L) => {
            if (
              L.width &&
              Array.isArray(L.width) &&
              typeof L.width_index == "number" &&
              L.width_index >= 0 &&
              L.width_index < L.width.length
            ) {
              const $ = parseFloat(L.width[L.width_index]);
              if (!isNaN($)) {
                const oe = $ * 20;
                return Math.max(200, oe);
              }
            }
            return 200;
          },
          Q = (L) => {
            switch (L) {
              case "parent_container":
                return "bg-pink-50 border-pink-300";
              case "sub_container":
                return "bg-blue-50 border-blue-300";
              case "dispensing_shelves":
              case "store_shelves":
                return "bg-green-50 border-green-300";
              case "med_box":
                return "bg-yellow-50 border-yellow-300";
              case "grid_draw":
              case "list_draw":
                return "bg-violet-50 border-violet-300";
              default:
                return "bg-gray-50 border-gray-300";
            }
          };
        switch (y.type) {
          case "med_box":
            return (
              W(y),
              r.jsxs(
                "div",
                {
                  "data-container-guid": y.GUID,
                  className: `${
                    y.type !== "sub_container"
                      ? "border-2 rounded-lg shadow-sm"
                      : ""
                  } ${Q(
                    y.type || 0
                  )} min-h-[80px] flex flex-col flex-shrink-0 h-full overflow-hidden`,
                  children: [
                    r.jsx("div", {
                      onMouseDown:
                        C && ue(y.type) && !V()
                          ? (L) =>
                              D(
                                y,
                                L.currentTarget.closest(
                                  "[data-container-guid]"
                                ),
                                L
                              )
                          : void 0,
                      onTouchStart:
                        C && ue(y.type) && !V()
                          ? (L) =>
                              D(
                                y,
                                L.currentTarget.closest(
                                  "[data-container-guid]"
                                ),
                                L
                              )
                          : void 0,
                      onPointerDown:
                        C && ue(y.type) && V()
                          ? (L) =>
                              D(
                                y,
                                L.currentTarget.closest(
                                  "[data-container-guid]"
                                ),
                                L
                              )
                          : void 0,
                      className: C && ue(y.type) ? "cursor-move" : "",
                      children: r.jsx(Fs, { content: y, isAdminMode: p }),
                    }),
                    r.jsx("div", { className: "flex-1 p-1", children: qt(y) }),
                  ],
                },
                y.GUID
              )
            );
          case "sub_container":
          case "parent_container":
            return r.jsxs(
              "div",
              {
                "data-container-guid": y.GUID,
                className: `${Q(
                  y.type || 0
                )} border-2 overflow-hidden rounded-lg shadow-sm min-h-[80px] flex flex-col h-full`,
                children: [
                  r.jsx("div", {
                    onMouseDown:
                      C && ue(y.type) && !V()
                        ? (L) =>
                            D(
                              y,
                              L.currentTarget.closest("[data-container-guid]"),
                              L
                            )
                        : void 0,
                    onTouchStart:
                      C && ue(y.type) && !V()
                        ? (L) =>
                            D(
                              y,
                              L.currentTarget.closest("[data-container-guid]"),
                              L
                            )
                        : void 0,
                    onPointerDown:
                      C && ue(y.type) && V()
                        ? (L) =>
                            D(
                              y,
                              L.currentTarget.closest("[data-container-guid]"),
                              L
                            )
                        : void 0,
                    className: C && ue(y.type) ? "cursor-move" : "",
                    children: r.jsx(Fs, { content: y, isAdminMode: p }),
                  }),
                  r.jsx("div", { className: "flex-1  p-1", children: qt(y) }),
                ],
              },
              y.GUID
            );
          case "grid_draw":
            return r.jsxs(
              "div",
              {
                "data-container-guid": y.GUID,
                className: `${
                  y.type !== "sub_container"
                    ? "border-2 rounded-lg shadow-sm"
                    : ""
                } ${Q(
                  y.type || 0
                )} min-h-[80px] flex flex-col h-full overflow-hidden`,
                children: [
                  r.jsx("div", {
                    onMouseDown:
                      C && ue(y.type) && !V()
                        ? (L) =>
                            D(
                              y,
                              L.currentTarget.closest("[data-container-guid]"),
                              L
                            )
                        : void 0,
                    onTouchStart:
                      C && ue(y.type) && !V()
                        ? (L) =>
                            D(
                              y,
                              L.currentTarget.closest("[data-container-guid]"),
                              L
                            )
                        : void 0,
                    onPointerDown:
                      C && ue(y.type) && V()
                        ? (L) =>
                            D(
                              y,
                              L.currentTarget.closest("[data-container-guid]"),
                              L
                            )
                        : void 0,
                    className: C && ue(y.type) ? "cursor-move" : "",
                    children: r.jsx(Fs, { content: y, isAdminMode: p }),
                  }),
                  r.jsx("div", {
                    className: "flex-1 p-1 flex items-center",
                    children: qt(y),
                  }),
                ],
              },
              y.GUID
            );
          default:
            return r.jsxs(
              "div",
              {
                "data-container-guid": y.GUID,
                className: `${
                  y.type !== "sub_container"
                    ? "border-2 rounded-lg shadow-sm"
                    : ""
                } ${Q(
                  y.type || 0
                )} min-h-[80px] flex flex-col h-full overflow-hidden ${
                  y.type == "none" ? "opacity-0" : ""
                }`,
                children: [
                  r.jsx("div", {
                    onMouseDown:
                      C && ue(y.type) && !V()
                        ? (L) =>
                            D(
                              y,
                              L.currentTarget.closest("[data-container-guid]"),
                              L
                            )
                        : void 0,
                    onTouchStart:
                      C && ue(y.type) && !V()
                        ? (L) =>
                            D(
                              y,
                              L.currentTarget.closest("[data-container-guid]"),
                              L
                            )
                        : void 0,
                    onPointerDown:
                      C && ue(y.type) && V()
                        ? (L) =>
                            D(
                              y,
                              L.currentTarget.closest("[data-container-guid]"),
                              L
                            )
                        : void 0,
                    className: C && ue(y.type) ? "cursor-move" : "",
                    children: r.jsx(Fs, { content: y, isAdminMode: p }),
                  }),
                  r.jsx("div", { className: "flex-1 p-1", children: qt(y) }),
                ],
              },
              y.GUID
            );
        }
      },
      qt = (y) => {
        const W = (Q, L, Z) => {
          const $ = Array(L + 1)
              .fill(null)
              .map(() => Array(Z + 1).fill(!1)),
            oe = {};
          return (
            Q.forEach((re) => {
              const X = fe(re.gird_position || "0,0");
              (oe[`${X.row},${X.col}`] = re), ($[X.row][X.col] = !0);
            }),
            r.jsx("table", {
              className: "w-full h-full",
              style: { borderCollapse: "none", borderSpacing: "0px" },
              children: r.jsx("tbody", {
                children: Array.from({ length: L + 1 }, (re, X) =>
                  r.jsx(
                    "tr",
                    {
                      className: "h-full",
                      style: { height: `${100 / (L + 1)}%`, minHeight: "80px" },
                      children: Array.from({ length: Z + 1 }, (G, xe) => {
                        const ge = `${X},${xe}`,
                          De = oe[ge];
                        return De
                          ? r.jsxs(
                              "td",
                              {
                                className: "align-top bg-transparent",
                                style: {
                                  width: `${100 / (Z + 1)}%`,
                                  height: `${100 / (L + 1)}%`,
                                  minHeight: "80px",
                                  border: "none",
                                  position: "relative",
                                },
                                children: [
                                  ht(De),
                                  (v == null ? void 0 : v.container.GUID) ===
                                    De.GUID &&
                                    r.jsx("div", {
                                      className:
                                        "absolute inset-0 pointer-events-none",
                                      children: r.jsx("div", {
                                        className: `absolute bg-blue-400 opacity-50 ${
                                          v.direction === "top"
                                            ? "top-0 left-0 right-0 h-1"
                                            : v.direction === "bottom"
                                            ? "bottom-0 left-0 right-0 h-1"
                                            : v.direction === "left"
                                            ? "left-0 top-0 bottom-0 w-1"
                                            : "right-0 top-0 bottom-0 w-1"
                                        }`,
                                      }),
                                    }),
                                ],
                              },
                              xe
                            )
                          : r.jsx(
                              "td",
                              {
                                className: "p-1 align-top bg-transparent",
                                style: {
                                  width: `${100 / (Z + 1)}%`,
                                  height: `${100 / (L + 1)}%`,
                                  minHeight: "80px",
                                  border: "none",
                                },
                                children: r.jsx("div", {
                                  className:
                                    "w-full h-full flex items-center justify-center text-gray-400 text-sm",
                                  children: "空位",
                                }),
                              },
                              xe
                            );
                      }),
                    },
                    X
                  )
                ),
              }),
            })
          );
        };
        switch (y.type) {
          case "parent_container":
          case "sub_container":
            if (y.contents && y.contents.length > 0) {
              const {
                sortedContents: G,
                maxRow: xe,
                maxCol: ge,
              } = Me(y.contents);
              return W(G, xe, ge);
            } else
              return r.jsx("table", {
                className: "bg-transparent w-full h-full",
                style: { borderCollapse: "separate", borderSpacing: "1px" },
                children: r.jsx("tbody", { children: r.jsx("tr", {}) }),
              });
          case "dispensing_shelves":
            if (y.contents && y.contents.length > 0) {
              const {
                sortedContents: G,
                maxRow: xe,
                maxCol: ge,
              } = Me(y.contents);
              return W(G, xe, ge);
            } else
              return r.jsx("table", {
                className: "bg-transparent w-full h-full",
                style: { borderCollapse: "separate", borderSpacing: "0px" },
                children: r.jsx("tbody", {
                  children: r.jsx("tr", {
                    children: r.jsx("td", {
                      className: "p-4 text-center text-gray-500 bg-transparent",
                      children: r.jsx("div", {
                        className: "text-base",
                        children: "無內容",
                      }),
                    }),
                  }),
                }),
              });
          case "store_shelves":
            if (y.medMapStock && y.medMapStock.length > 0) {
              const G = y.medMapStock,
                xe = G.length,
                ge = xe > 0 ? 100 / xe : 100,
                De = y.width ? y.width * 5 : 500;
              return r.jsx("div", {
                className: "flex h-full",
                style: { minWidth: `${De}px` },
                children: G.map((je, Re) => {
                  const gt = Number(je.location);
                  return r.jsx(
                    "div",
                    {
                      className: "m-1 flex-shrink-0",
                      style: { width: `calc(${ge}% - 8px)` },
                      "data-stock-guid": je.GUID,
                      children: r.jsxs("div", {
                        className: `border-2 bg-yellow-50 border-yellow-400 rounded-lg p-2 h-full flex flex-col justify-center items-center cursor-pointer bg-white hover:bg-yellow-100 hover:border-yellow-500 hover:shadow-md transition-all ${
                          C ? "cursor-move" : ""
                        }`,
                        onMouseDown: (We) => {
                          C
                            ? z(
                                je,
                                y,
                                We.currentTarget.closest("[data-stock-guid]"),
                                We
                              )
                            : !w &&
                              !k &&
                              (U({ x: We.clientX, y: We.clientY }), P(!1));
                        },
                        onMouseUp: (We) => {
                          if (!w && !k && !q && S && !C) {
                            const tn = Math.abs(We.clientX - S.x),
                              Rr = Math.abs(We.clientY - S.y);
                            tn <= 5 &&
                              Rr <= 5 &&
                              (We.stopPropagation(), i(y, je));
                          }
                          C || (U(null), P(!1));
                        },
                        onTouchStart: (We) => {
                          if (C && V())
                            z(
                              je,
                              y,
                              We.currentTarget.closest("[data-stock-guid]"),
                              We
                            );
                          else if (!w && !C) {
                            const tn = We.touches[0];
                            U({ x: tn.clientX, y: tn.clientY }), P(!1);
                          }
                        },
                        onTouchEnd: (We) => {
                          if (!w && !q && S && !C) {
                            const tn = We.changedTouches[0],
                              Rr = Math.abs(tn.clientX - S.x),
                              Vo = Math.abs(tn.clientY - S.y);
                            Rr <= 5 &&
                              Vo <= 5 &&
                              (We.stopPropagation(), i(y, je));
                          }
                          C || (U(null), P(!1));
                        },
                        onPointerDown: (We) => {
                          C &&
                            V() &&
                            z(
                              je,
                              y,
                              We.currentTarget.closest("[data-stock-guid]"),
                              We
                            );
                        },
                        children: [
                          r.jsx("div", {
                            className:
                              "text-base font-semibold text-gray-800 truncate w-full text-center",
                            children: je.name || je.material_no,
                          }),
                          r.jsxs("div", {
                            className: "text-sm text-gray-600 mt-1",
                            children: ["數量: ", je.qty || 0],
                          }),
                          r.jsxs("div", {
                            className: "text-sm text-gray-500 mt-1",
                            children: ["位置: ", gt],
                          }),
                        ],
                      }),
                    },
                    je.GUID || Re
                  );
                }),
              });
            } else if (y.contents && y.contents.length > 0) {
              const {
                sortedContents: G,
                maxRow: xe,
                maxCol: ge,
              } = Me(y.contents);
              return W(G, xe, ge);
            } else
              return r.jsx("table", {
                className: "bg-transparent w-full h-full",
                style: { borderCollapse: "separate", borderSpacing: "0px" },
                children: r.jsx("tbody", {
                  children: r.jsx("tr", {
                    children: r.jsx("td", {
                      className: "p-4 text-center text-gray-500 bg-transparent",
                      children: r.jsx("div", {
                        className: "text-base",
                        children: "無內容",
                      }),
                    }),
                  }),
                }),
              });
          case "none":
            if (y.contents && y.contents.length > 0) {
              const {
                sortedContents: G,
                maxRow: xe,
                maxCol: ge,
              } = Me(y.contents);
              return W(G, xe, ge);
            } else
              return r.jsx("table", {
                className: "bg-transparent w-full h-full",
                style: { borderCollapse: "separate", borderSpacing: "0px" },
                children: r.jsx("tbody", {
                  children: r.jsx("tr", {
                    children: r.jsx("td", {
                      className: "p-4 text-center text-gray-500 bg-transparent",
                      children: r.jsx("div", {
                        className: "text-base",
                        children: "無內容",
                      }),
                    }),
                  }),
                }),
              });
          case "grid_draw":
            const Q = Math.max(
                ...y.Boxes.flat().map((G) => +G.Row + +G.Height - 1)
              ),
              L = Math.max(
                ...y.Boxes.flat().map((G) => +G.Column + +G.Width - 1)
              ),
              Z = Q + 1,
              $ = L + 1,
              oe = y.Boxes.flat(),
              re = Array(Z)
                .fill(null)
                .map(() => Array($).fill(!1)),
              X = {};
            return (
              oe.forEach((G) => {
                G.Slave || (X[`${G.Row},${G.Column}`] = G);
              }),
              oe.forEach((G) => {
                if (!G.Slave && (G.Width > 1 || G.Height > 1))
                  for (let xe = G.Row; xe < G.Row + G.Height; xe++)
                    for (let ge = G.Column; ge < G.Column + G.Width; ge++)
                      (xe !== G.Row || ge !== G.Column) && (re[xe][ge] = !0);
              }),
              r.jsxs("div", {
                className:
                  "bg-violet-100 h-20 flex ml-2 mt-2 mb-6 rounded-xl border-2 border-violet-400 w-[140px] items-center justify-center",
                children: [
                  r.jsx("div", {
                    className: "h-[60%] bg-violet-400 w-[3%] rounded-xl",
                  }),
                  r.jsx("div", {
                    className:
                      "h-[80%] border-2 border-violet-400 w-[82%] mx-1",
                    children: r.jsx("div", {
                      className:
                        "flex items-center justify-center text-base text-violet-400 h-[100%]",
                    }),
                  }),
                  r.jsx("div", { className: "h-[60%] bg-violet-400 w-[3%]" }),
                ],
              })
            );
          case "list_draw":
            return r.jsxs("div", {
              className:
                "bg-violet-100 h-20 flex ml-2 mt-2 mb-6 rounded-xl border-2 border-violet-400 w-[140px] items-center justify-center",
              children: [
                r.jsx("div", {
                  className: "h-[60%] bg-violet-400 w-[3%] rounded-xl",
                }),
                r.jsx("div", {
                  className: "h-[80%] border-2 border-violet-400 w-[82%] mx-1",
                  children: r.jsx("div", {
                    className:
                      "flex items-center justify-center text-base text-violet-400 h-[100%]",
                  }),
                }),
                r.jsx("div", { className: "h-[60%] bg-violet-400 w-[3%]" }),
              ],
            });
          case "med_box":
            return y.med_info && y.med_info.length > 0
              ? r.jsxs("div", {
                  className:
                    "text-base text-left h-full min-h-[40px] max-w-[200px] min-w-[200px] p-1 flex items-center justify-between flex-col",
                  children: [
                    r.jsx("div", {
                      className: "text-gray-700 font-bold truncate w-full",
                      children: y.med_info[0].name,
                    }),
                    r.jsxs("div", {
                      className:
                        "text-gray-700 w-full flex justify-between px-1",
                      children: [
                        r.jsxs("div", { children: [y.box_type, "吋"] }),
                        r.jsxs("div", {
                          children: [y.width[y.width_index], "cm"],
                        }),
                      ],
                    }),
                  ],
                })
              : r.jsx("div", {
                  className:
                    "h-full flex items-center justify-center text-gray-500",
                  children: r.jsx("div", {
                    className: "text-base",
                    children: "空藥盒",
                  }),
                });
          default:
            return y.contents && y.contents.length > 0
              ? r.jsx("div", {
                  className: "space-y-2",
                  children: y.contents.map((G) => ht(G)),
                })
              : r.jsx("div", {
                  className:
                    "h-full flex items-center justify-center text-gray-500",
                  children: r.jsxs("div", {
                    className: "text-base",
                    children: ["未知類型: ", y.type],
                  }),
                });
        }
      },
      en = (y) => {
        if (
          (fe(y.gird_position || "0,0"),
          y.type !== "調劑台" && y.type !== "藥庫")
        )
          return null;
        const W = (Q) => {
          if (!Q || Q.length === 0)
            return r.jsx("table", {
              className: "w-full h-full border-none",
              children: r.jsx("tbody", {
                children: r.jsx("tr", {
                  children: r.jsx("td", {
                    className: "p-4 text-center text-gray-500",
                    children: r.jsx("div", {
                      className: "text-center",
                      children: r.jsx("div", {
                        className: "text-base",
                        children: "內容將在此處顯示",
                      }),
                    }),
                  }),
                }),
              }),
            });
          const { sortedContents: L, maxRow: Z, maxCol: $ } = Me(Q),
            oe = Array(Z + 1)
              .fill(null)
              .map(() => Array($ + 1).fill(!1)),
            re = {};
          return (
            L.forEach((X) => {
              const G = fe(X.gird_position || "0,0");
              (re[`${G.row},${G.col}`] = X), (oe[G.row][G.col] = !0);
            }),
            r.jsx("table", {
              className: "w-full h-full",
              style: { borderCollapse: "none", borderSpacing: "0px" },
              children: r.jsx("tbody", {
                children: Array.from({ length: Z + 1 }, (X, G) =>
                  r.jsx(
                    "tr",
                    {
                      className: "h-full",
                      children: Array.from({ length: $ + 1 }, (xe, ge) => {
                        const De = `${G},${ge}`,
                          je = re[De];
                        return je
                          ? r.jsx(
                              "td",
                              {
                                className: "p-1 align-top bg-transparent",
                                style: {
                                  width: `${100 / ($ + 1)}%`,
                                  height: `${100 / (Z + 1)}%`,
                                  minHeight: "120px",
                                  border: "none",
                                },
                                children: ht(je),
                              },
                              ge
                            )
                          : r.jsx(
                              "td",
                              {
                                className: "p-1 align-top bg-transparent",
                                style: {
                                  width: `${100 / ($ + 1)}%`,
                                  height: `${100 / (Z + 1)}%`,
                                  minHeight: "120px",
                                  border: "1px dashed #e5e7eb",
                                },
                                children: r.jsx("div", {
                                  className:
                                    "w-full h-full flex items-center justify-center text-gray-400 text-sm",
                                  children: "空位",
                                }),
                              },
                              ge
                            );
                      }),
                    },
                    G
                  )
                ),
              }),
            })
          );
        };
        return r.jsxs(
          "div",
          {
            "data-container-guid": y.GUID,
            className:
              "border-2 rounded-lg shadow-lg bg-orange-50 border-orange-300 min-h-[120px] flex flex-col overflow-hidden w-full h-full",
            children: [
              r.jsxs("div", {
                className:
                  "flex items-center justify-between px-3 py-2 border-b-2 bg-orange-100 border-b-orange-200",
                children: [
                  r.jsx("div", {
                    className: "flex items-center space-x-2",
                    children: r.jsx("span", {
                      className: "text-lg font-semibold text-gray-800",
                      children: y.name,
                    }),
                  }),
                  r.jsx("div", {
                    className: "flex items-center space-x-1",
                    children: r.jsx("button", {
                      className:
                        "p-1 hover:bg-black/10 rounded transition-colors",
                      onClick: (Q) => {
                        Q.stopPropagation(),
                          console.log("🔘 點擊新增父容器按鈕"),
                          console.log("📋 找到的部門資料:", y),
                          y
                            ? (console.log(
                                "✅ 呼叫 openAddParentContainerModal"
                              ),
                              a(y))
                            : console.warn("⚠️ 未找到對應的部門資料");
                      },
                      title: "新增",
                      children: r.jsx(vt, {
                        className: "w-6 h-6 text-green-700",
                      }),
                    }),
                  }),
                ],
              }),
              r.jsx("div", {
                className: `flex-1 bg-orange-50 ${
                  (v == null ? void 0 : v.container.GUID) === y.GUID
                    ? "ring-2 ring-blue-400 ring-inset"
                    : ""
                }`,
                children: W(y.contents || []),
              }),
            ],
          },
          y.GUID
        );
      },
      js = m.useCallback(
        (y) => {
          if (
            (console.log("🎯 locateDrugOnCanvas 被調用，藥品資料:", y),
            console.log("🎯 apiDepartmentData:", !!o),
            console.log("🎯 canvasRef.current:", !!n.current),
            !o || !n.current)
          ) {
            console.warn("⚠️ 無法定位藥品：缺少必要資料", {
              hasApiData: !!o,
              hasCanvasRef: !!n.current,
            });
            return;
          }
          const W = y[0].CODE || y[0].code;
          if ((console.log("🎯 提取的藥碼:", W), !W)) {
            console.warn("⚠️ 無法定位藥品：缺少藥碼");
            return;
          }
          console.log("🎯 開始定位藥品:", W);
          const Q = (Z) => {
              for (const $ of Z) {
                if ($.type === "grid_draw" && $.Boxes) {
                  for (const oe of $.Boxes)
                    for (const re of oe)
                      if (re.Code === W) {
                        const X = document.querySelector(
                          `[data-container-guid="${$.GUID}"]`
                        );
                        if (X)
                          return (
                            console.log("✅ 找到藥品容器 (grid_draw):", $),
                            { element: X, bounds: X.getBoundingClientRect() }
                          );
                      }
                }
                if (
                  $.type === "list_draw" &&
                  $.drugs &&
                  $.drugs.some((re) => re.code === W)
                ) {
                  const re = document.querySelector(
                    `[data-container-guid="${$.GUID}"]`
                  );
                  if (re)
                    return (
                      console.log("✅ 找到藥品容器 (list_draw):", $),
                      { element: re, bounds: re.getBoundingClientRect() }
                    );
                }
                if (
                  ($.type === "store_shelves" ||
                    $.type === "dispensing_shelves") &&
                  $.medMapStock &&
                  $.medMapStock.some(
                    (re) => re.code === W || re.material_no === W
                  )
                ) {
                  const re = document.querySelector(
                    `[data-container-guid="${$.GUID}"]`
                  );
                  if (re)
                    return (
                      console.log("✅ 找到藥品容器 (store_shelves):", $),
                      { element: re, bounds: re.getBoundingClientRect() }
                    );
                }
                if (
                  $.type === "med_box" &&
                  $.med_info &&
                  $.med_info.length > 0 &&
                  $.med_info.some((re) => re.code === W)
                ) {
                  const re = document.querySelector(
                    `[data-container-guid="${$.GUID}"]`
                  );
                  if (re)
                    return (
                      console.log("✅ 找到藥品容器 (med_box):", $),
                      { element: re, bounds: re.getBoundingClientRect() }
                    );
                }
                if ($.contents && $.contents.length > 0) {
                  const oe = Q($.contents);
                  if (oe) return oe;
                }
              }
              return null;
            },
            L = Q(o);
          if (L) {
            const Z = n.current.getBoundingClientRect(),
              $ = L.bounds,
              oe = ($.left + $.right) / 2,
              re = ($.top + $.bottom) / 2,
              X = (oe - Z.left - f.x) / f.scale,
              G = (re - Z.top - f.y) / f.scale,
              xe = Z.width / 2,
              ge = Z.height / 2,
              De = xe - X * f.scale,
              je = ge - G * f.scale;
            b((Re) => ({ ...Re, x: De, y: je })),
              console.log("✅ 定位完成", {
                elementScreenCenter: { x: oe, y: re },
                elementCanvasPos: { x: X, y: G },
                screenCenter: { x: xe, y: ge },
                newTransform: { x: De, y: je },
              }),
              h(`已定位到藥品：${y.CHT_NAME || y.NAME || W}`, "success");
          } else
            console.warn("❌ 未找到藥品容器"),
              h("未找到該藥品的儲存位置", "error");
        },
        [o, f, h]
      );
    m.useImperativeHandle(
      t,
      () => (
        console.log("🔧 useImperativeHandle 設置 ref 方法"), { locateDrug: js }
      )
    );
    const Pr = async (y) => {
      if (y.key === "Enter" && I.trim() && !_) {
        y.preventDefault(), ee(!0);
        try {
          console.log("🔍 搜尋條碼:", I);
          const W = await ke.searchByBarCode(I.trim());
          console.log("📋 條碼搜尋回應:", W),
            W.Code === 200
              ? (console.log("✅ 找到藥品資料:", W.Data),
                h("找到藥品資料", "success"),
                js(W.Data),
                A(""))
              : W.Code === -200 && W.Result === "查無資料"
              ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                h("查無資料，請建立條碼", "error"),
                g(I.trim()),
                A(""))
              : (console.log("❌ 搜尋失敗:", W.Result),
                h(W.Result || "搜尋失敗", "error"));
        } catch (W) {
          console.error("條碼搜尋錯誤:", W), h("搜尋失敗，請稍後再試", "error");
        } finally {
          ee(!1);
        }
      }
    };
    return r.jsxs("div", {
      className: "relative w-full h-full overflow-hidden bg-gray-50",
      children: [
        r.jsx("div", {
          className:
            "absolute md:bottom-4 md:left-4 bottom-16 left-[50%] md:translate-x-[0%] translate-x-[-50%] z-10",
          children: r.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-lg flex items-center overflow-hidden border border-gray-200",
            children: [
              r.jsx("input", {
                type: "text",
                value: I,
                onChange: (y) => A(y.target.value),
                onKeyDown: Pr,
                placeholder: "輸入條碼或掃描...",
                className:
                  "px-4 py-2 w-50 focus:outline-none text-gray-700 disabled:opacity-50",
                disabled: _,
              }),
              r.jsx("button", {
                onClick: () => c("track_Drug_mode"),
                className: "p-2",
                title: "掃描條碼",
                disabled: _,
                children: r.jsx(_r, { className: "w-6 h-6 text-blue-600" }),
              }),
            ],
          }),
        }),
        r.jsx("div", {
          className: "absolute bottom-4 right-4 z-10 flex gap-2",
          children: r.jsx("button", {
            onClick: () => u(!C),
            className: `rounded-lg shadow-lg p-2 transition-colors ${
              C
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`,
            title: C ? "Unlock Canvas" : "Lock Canvas",
            children: C
              ? r.jsx(Ud, { className: "w-6 h-6" })
              : r.jsx(Bd, { className: "w-6 h-6" }),
          }),
        }),
        r.jsx("div", {
          ref: n,
          className: `w-full h-full relative ${
            k && !C ? "cursor-grab" : "cursor-default"
          } ${w ? "cursor-grabbing" : ""}`,
          onMouseDown: J,
          onMouseMove: E,
          onMouseUp: F,
          onMouseLeave: F,
          onTouchStart: we,
          onTouchMove: Ne,
          onTouchEnd: Ee,
          children: r.jsxs("div", {
            className: "absolute inset-0 origin-top-left",
            style: {
              transform: `translate(${f.x}px, ${f.y}px) scale(${f.scale})`,
              transformOrigin: "0 0",
            },
            children: [
              r.jsx("div", {
                className: "relative",
                "data-canvas-content": !0,
                children: r.jsx("table", {
                  className: "h-full",
                  style: {
                    borderCollapse: "separate",
                    borderSpacing: `${de}px`,
                    minWidth: "fit-content",
                    minHeight: "fit-content",
                  },
                  children: r.jsx("tbody", {
                    children: Array.from({ length: ze + 1 }, (y, W) =>
                      r.jsx(
                        "tr",
                        {
                          children: Array.from({ length: Lt + 1 }, (Q, L) => {
                            const Z = Ye.find(($) => {
                              const oe = fe($.gird_position || "0,0");
                              return oe.row === W && oe.col === L;
                            });
                            return Z
                              ? r.jsx(
                                  "td",
                                  {
                                    className: "align-top",
                                    style: {
                                      minWidth: "150px",
                                      minHeight: "120px",
                                      border: "none",
                                    },
                                    children: en(Z),
                                  },
                                  L
                                )
                              : r.jsx(
                                  "td",
                                  {
                                    className: "align-top",
                                    style: {
                                      minWidth: "150px",
                                      minHeight: "120px",
                                      border: "none",
                                    },
                                    children: r.jsx("div", {
                                      className:
                                        "w-full h-full flex items-center justify-center text-gray-400 text-base",
                                    }),
                                  },
                                  L
                                );
                          }),
                        },
                        W
                      )
                    ),
                  }),
                }),
              }),
              e,
            ],
          }),
        }),
      ],
    });
  });
zd.displayName = "DrugCanvas";
const xh = async (e) => {
    if ((console.log(e), Object.keys(e.current).length === 0)) {
      console.log("沒有需要更新的容器資料");
      return;
    }
    console.log("🚀 開始批次更新容器資料:", e.current);
    const t = [],
      n = [],
      s = [],
      o = [],
      l = [];
    Object.values(e.current).forEach((i) => {
      var g, h, p;
      console.log("開始整理API REQ資料：", i);
      const c = {
        GUID: i.GUID,
        position: i.position,
        Master_GUID: i.Master_GUID,
        serverName: i.serverName,
        serverType: i.serverType,
      };
      switch (i.type) {
        case "med_box":
          t.push(c);
          break;
        case "grid_draw":
        case "list_draw":
          n.push(c);
          break;
        case "dispensing_shelves":
        case "store_shelves":
          s.push(c);
          break;
        case "parent_container":
          const f = {
            ...c,
            absolute_position:
              ((g = i.containerData) == null ? void 0 : g.absolute_position) ||
              i.position,
            name: ((h = i.containerData) == null ? void 0 : h.name) || "",
            ip: ((p = i.containerData) == null ? void 0 : p.ip) || "",
          };
          o.push(f);
          break;
        case "sub_container":
          l.push(c);
          break;
        default:
          console.warn("未知的容器類型:", i.type);
      }
    });
    const a = [];
    if (
      (t.length > 0 &&
        (console.log("📦 更新藥盒資料:", t),
        a.push(
          ke
            .updateMedMapBox(t)
            .then((i) => ({ type: "med_box", response: i, count: t.length }))
            .catch((i) => ({ type: "med_box", error: i, count: t.length }))
        )),
      n.length > 0 &&
        (console.log("🗂️ 更新抽屜資料:", n),
        a.push(
          ke
            .updateMedMapDrawer(n)
            .then((i) => ({ type: "drawer", response: i, count: n.length }))
            .catch((i) => ({ type: "drawer", error: i, count: n.length }))
        )),
      s.length > 0 &&
        (console.log("🏪 更新層架資料:", s),
        a.push(
          ke
            .updateMedMapShelf(s)
            .then((i) => ({ type: "shelf", response: i, count: s.length }))
            .catch((i) => ({ type: "shelf", error: i, count: s.length }))
        )),
      o.length > 0 &&
        (console.log("🏢 更新父容器資料:", o),
        o.forEach((i) => {
          a.push(
            ke
              .updateContainerPosition(i)
              .then((c) => ({
                type: "parent_container",
                response: c,
                count: 1,
              }))
              .catch((c) => ({ type: "parent_container", error: c, count: 1 }))
          );
        })),
      l.length > 0 &&
        (console.log("📁 更新子容器資料:", l),
        a.push(
          ke
            .updateSubSection(l)
            .then((i) => ({
              type: "sub_container",
              response: i,
              count: l.length,
            }))
            .catch((i) => ({
              type: "sub_container",
              error: i,
              count: l.length,
            }))
        )),
      a.length === 0)
    ) {
      console.log("沒有需要呼叫的 API");
      return;
    }
    try {
      const i = await Promise.all(a);
      let c = 0,
        g = 0;
      const h = [];
      i.forEach((p) => {
        var f, b;
        if (p.error)
          (g += p.count),
            h.push(`${p.type}: ${p.error.message || "網路錯誤"}`),
            console.error(`❌ ${p.type} API 失敗:`, p.error);
        else if (((f = p.response) == null ? void 0 : f.Code) === 200)
          (c += p.count), console.log(`✅ ${p.type} API 成功:`, p.response);
        else {
          g += p.count;
          const w =
            ((b = p.response) == null ? void 0 : b.Result) || "未知錯誤";
          h.push(`${p.type}: ${w}`),
            console.error(`❌ ${p.type} API 失敗:`, p.response);
        }
      });
    } catch (i) {
      console.error("💥 批次更新過程中發生錯誤:", i);
    } finally {
      console.log("完成更新");
    }
  },
  yh = "modulepreload",
  vh = function (e) {
    return "/" + e;
  },
  vc = {},
  wh = function (t, n, s) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const a = document.querySelector("meta[property=csp-nonce]"),
        i =
          (a == null ? void 0 : a.nonce) ||
          (a == null ? void 0 : a.getAttribute("nonce"));
      o = Promise.allSettled(
        n.map((c) => {
          if (((c = vh(c)), c in vc)) return;
          vc[c] = !0;
          const g = c.endsWith(".css"),
            h = g ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${c}"]${h}`)) return;
          const p = document.createElement("link");
          if (
            ((p.rel = g ? "stylesheet" : yh),
            g || (p.as = "script"),
            (p.crossOrigin = ""),
            (p.href = c),
            i && p.setAttribute("nonce", i),
            document.head.appendChild(p),
            g)
          )
            return new Promise((f, b) => {
              p.addEventListener("load", f),
                p.addEventListener("error", () =>
                  b(new Error(`Unable to preload CSS for ${c}`))
                );
            });
        })
      );
    }
    function l(a) {
      const i = new Event("vite:preloadError", { cancelable: !0 });
      if (((i.payload = a), window.dispatchEvent(i), !i.defaultPrevented))
        throw a;
    }
    return o.then((a) => {
      for (const i of a || []) i.status === "rejected" && l(i.reason);
      return t().catch(l);
    });
  },
  Xt = [
    { name: "2.13吋", box_type: "2.13", width: ["7.5"], unit: "cm" },
    { name: "2.9吋", type: "2.9", width: ["10", "15", "20"], unit: "cm" },
    { name: "4.2吋", type: "4.2", width: ["11", "16"], unit: "cm" },
  ],
  bh = () => {
    const {
        medBoxModalOpen: e,
        closeMedBoxModal: t,
        selectedMedBox: n,
        selectedDepartmentType: s,
        setApiDepartmentData: o,
        setIsLoadingMedMap: l,
        showNotification: a,
        triggerRefresh: i,
        modalMode: c,
        medicineList: g,
      } = Qe(),
      { t: h } = mt(),
      [p, f] = m.useState(0),
      [b, w] = m.useState({}),
      [M, C] = m.useState(""),
      [u, d] = m.useState(""),
      [x, k] = m.useState("N"),
      [O, I] = m.useState([]),
      [A, _] = m.useState(!1),
      [ee, S] = m.useState(!1),
      [U, q] = m.useState(null),
      [P, T] = m.useState(null),
      [se, v] = m.useState(!1),
      [N, j] = m.useState(!1);
    m.useEffect(() => {
      if (n && e)
        if (c === "add") {
          f(0);
          const z = {};
          Xt.forEach((D, ne) => {
            z[ne] = 0;
          }),
            w(z),
            C(""),
            S(!1),
            V();
        } else {
          const z = Xt.findIndex(
            (D) => D.box_type === n.box_type || D.type === n.box_type
          );
          if ((console.log(n), z >= 0)) {
            f(z);
            const ne = Xt[z].width.findIndex((B) => {
                var J;
                return (
                  B === ((J = n.width) == null ? void 0 : J[n.width_index || 0])
                );
              }),
              ie = {};
            Xt.forEach((B, J) => {
              J === z ? (ie[J] = ne >= 0 ? ne : 0) : (ie[J] = 0);
            }),
              w(ie);
          } else {
            f(0);
            const D = {};
            Xt.forEach((ne, ie) => {
              D[ie] = 0;
            }),
              w(D);
          }
          C(n.ip || ""),
            T({
              box_type: n.box_type,
              width: n.width,
              width_index: n.width_index,
              ip: n.ip || "",
              storage: n.storage ? JSON.parse(JSON.stringify(n.storage)) : null,
            });
        }
    }, [n, e, c]);
    const V = () => {
        n && n.parentShelf && q(n.parentShelf);
      },
      de = (z) => {
        if (!z || !z.contents || z.contents.length === 0) return "0,0";
        let D = -1,
          ne = 0;
        return (
          z.contents.forEach((ie) => {
            if (ie.gird_position) {
              const [B, J] = ie.gird_position.split(",").map(Number);
              J > D && ((D = J), (ne = B));
            }
          }),
          `${ne},${D + 1}`
        );
      },
      te = () => {
        if (!P || c !== "edit") return !1;
        const z = Xt[p],
          D = b[p] || 0,
          ne = z.box_type || z.type || z.name;
        return (
          P.box_type !== ne ||
          P.width_index !== D ||
          P.ip !== M ||
          JSON.stringify(P.storage) !==
            JSON.stringify(n == null ? void 0 : n.storage)
        );
      },
      ae = (z) => {
        f(z);
      },
      Se = (z, D) => {
        w((ne) => ({ ...ne, [z]: D }));
      },
      ue = () => {
        n && (c === "add" ? fe() : Y());
      },
      Ce = () => {
        t();
      },
      fe = async () => {
        if (!n || !U) {
          a("缺少必要資料，無法新增藥盒", "error");
          return;
        }
        S(!0);
        try {
          const z = Xt[p],
            D = b[p] || 0,
            ne = z.width[D],
            ie = de(U),
            B = {
              Master_GUID: U.GUID,
              position: ie,
              width: ne.toString(),
              height: "60",
              ip_box: M,
              serverName: U.serverName || "",
              serverType: U.serverType || "",
            };
          console.log("🚀 發送新增藥盒 API 請求:", B);
          const J = await ke.addMedMapBox(B);
          J.Code === 200
            ? (a("藥盒新增成功", "success"), t(), await pe())
            : a(`藥盒新增失敗：${J.Result || "未知錯誤"}`, "error");
        } catch (z) {
          console.error("Add med box failed:", z),
            a("藥盒新增失敗：網路錯誤", "error");
        } finally {
          S(!1);
        }
      },
      Y = async () => {
        var z;
        if (!n || !te()) {
          a("沒有資料變更", "error");
          return;
        }
        v(!0);
        try {
          const D = Xt[p],
            ne = b[p] || 0,
            ie = D.width[ne],
            B = D.box_type || D.type || D.name,
            J = P.box_type !== B || P.width_index !== ne || P.ip !== M,
            E =
              JSON.stringify(P.storage) !==
              JSON.stringify(n == null ? void 0 : n.storage),
            F = [];
          if (J) {
            const ce = {
              GUID: n.GUID,
              Master_GUID: n.Master_GUID,
              position: n.gird_position,
              ip_light: M,
              serverName: n.serverName,
              serverType: n.serverType,
            };
            F.push(ke.updateMedMapBox([ce]));
          }
          E &&
            F.push(
              ke.updateEpd266Storages(n.serverName || "", n.serverType || "", [
                n.storage,
              ])
            );
          const H = await Promise.all(F);
          if (H.every((ce) => ce.Code === 200))
            a("藥盒更新成功", "success"), t(), await pe();
          else {
            const ce = H.filter((he) => he.Code !== 200);
            a(
              `藥盒更新失敗：${
                ((z = ce[0]) == null ? void 0 : z.Result) || "未知錯誤"
              }`,
              "error"
            );
          }
        } catch (D) {
          console.error("Update med box failed:", D),
            a("藥盒更新失敗：網路錯誤", "error");
        } finally {
          v(!1);
        }
      },
      pe = async () => {
        if (!s) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", s), l(!0);
        try {
          const z = await ke.getMedMapByDepartment(s);
          if (z.Code === 200 && z.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const D = await wh(() => Promise.resolve().then(() => Fm), void 0),
              ne = D.default.convertMedMapApiToFakeData(z.Data);
            if (!D.default.validateConvertedData(ne)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(ne), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", z),
              a("資料更新失敗：API 錯誤", "error");
        } catch (z) {
          console.error("💥 重新獲取藥品地圖資料失敗:", z),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      be = async () => {
        _(!0);
        try {
          const z = u.toLowerCase().trim();
          let D = g;
          z &&
            (D = D.filter((ne) => {
              var ie, B, J;
              return (
                ((ie = ne.CODE) == null
                  ? void 0
                  : ie.toLowerCase().includes(z)) ||
                ((B = ne.NAME) == null
                  ? void 0
                  : B.toLowerCase().includes(z)) ||
                ((J = ne.CHT_NAME) == null
                  ? void 0
                  : J.toLowerCase().includes(z))
              );
            })),
            x !== "N" && (D = D.filter((ne) => ne.DRUGKIND === x)),
            I(D);
        } catch (z) {
          console.error("Search failed:", z), I([]);
        } finally {
          _(!1);
        }
      },
      R = (z, D) => {
        console.log("📸 掃描成功，藥品資料:", D), j(!1), me(D);
      },
      me = async (z) => {
        if (n)
          try {
            console.log("🚀 開始更新藥盒藥品代碼:", z.CODE);
            const D = await ke.updateEpd266Medcode(
              n.serverName || "",
              n.serverType || "",
              z.CODE,
              n.storage || {}
            );
            D.Code === 200
              ? (console.log("✅ 藥品代碼更新成功:", D.Data),
                (n.storage = D.Data),
                (n.med_info = [
                  { name: z.NAME, cht_name: z.CHT_NAME, code: z.CODE },
                ]),
                a("藥品更新成功", "success"),
                i())
              : (console.error("❌ 藥品代碼更新失敗:", D),
                a(`藥品更新失敗：${D.Result || "未知錯誤"}`, "error"));
          } catch (D) {
            console.error("💥 藥品代碼更新發生錯誤:", D),
              a("藥品更新失敗：網路錯誤", "error");
          }
      };
    return !e || !n
      ? null
      : r.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            r.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: Ce,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh" },
              onClick: (z) => z.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(sn, { className: "w-6 h-6 text-gray-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: h(
                            c === "add"
                              ? "modal.addMedBox"
                              : "modal.medBoxSettings"
                          ),
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: Ce,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Fe, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 px-4 py-2 overflow-y-auto",
                  children: r.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      r.jsx("div", {
                        className: "gap-16 flex",
                        children: r.jsxs("div", {
                          className: "space-y-1",
                          children: [
                            r.jsx("h3", {
                              className: "text-base font-medium text-gray-900",
                              children: h("form.ipAddress"),
                            }),
                            r.jsx("div", {
                              className: "flex items-center",
                              children: r.jsx("input", {
                                type: "text",
                                onChange: (z) => C(z.target.value),
                                placeholder:
                                  (n == null ? void 0 : n.ip) ||
                                  (n == null ? void 0 : n.name) ||
                                  h("placeholder.ipAddress"),
                                className:
                                  "px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors w-64",
                              }),
                            }),
                          ],
                        }),
                      }),
                      r.jsxs("div", {
                        className: "flex gap-16",
                        children: [
                          r.jsxs("div", {
                            className: "space-y-1 min-w-[260px]",
                            children: [
                              r.jsx("h3", {
                                className:
                                  "text-base font-medium text-gray-900",
                                children: h("form.medBoxType"),
                              }),
                              r.jsx("div", {
                                className: "flex gap-4 justify-between",
                                children: Xt.map((z, D) =>
                                  r.jsxs(
                                    "label",
                                    {
                                      className: `flex items-center px-4 py-2 border-2 rounded-lg cursor-pointer transition-all ${
                                        p === D
                                          ? "border-blue-500 bg-blue-50"
                                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                      }`,
                                      children: [
                                        r.jsx("input", {
                                          type: "radio",
                                          name: "boxType",
                                          value: D,
                                          checked: p === D,
                                          onChange: () => ae(D),
                                          className:
                                            "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 hidden",
                                        }),
                                        r.jsx("div", {
                                          children: r.jsx("div", {
                                            className:
                                              "text-sm font-medium text-gray-900",
                                            children: z.name,
                                          }),
                                        }),
                                      ],
                                    },
                                    D
                                  )
                                ),
                              }),
                            ],
                          }),
                          r.jsxs("div", {
                            className: "space-y-1",
                            children: [
                              r.jsx("h3", {
                                className:
                                  "text-base font-medium text-gray-900",
                                children: h("form.widthSelection"),
                              }),
                              Xt.map((z, D) =>
                                r.jsx(
                                  "div",
                                  {
                                    className: `flex gap-4 ${
                                      p === D ? "block" : "hidden"
                                    }`,
                                    children: z.width.map((ne, ie) =>
                                      r.jsxs(
                                        "label",
                                        {
                                          className: `flex items-center justify-center px-4 py-2 border-2 rounded-lg cursor-pointer transition-all ${
                                            p === D && (b[D] || 0) === ie
                                              ? "border-green-500 bg-green-50"
                                              : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                          }`,
                                          children: [
                                            r.jsx("input", {
                                              type: "radio",
                                              name: `width-${D}`,
                                              value: ie,
                                              checked:
                                                p === D && (b[D] || 0) === ie,
                                              onChange: () => Se(D, ie),
                                              className:
                                                "w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500 hidden",
                                            }),
                                            r.jsx("div", {
                                              className: "text-center",
                                              children: r.jsxs("div", {
                                                className:
                                                  "text-sm font-semibold text-gray-900",
                                                children: [ne, " ", z.unit],
                                              }),
                                            }),
                                          ],
                                        },
                                        `${D}-${ie}`
                                      )
                                    ),
                                  },
                                  D
                                )
                              ),
                            ],
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        className: "flex gap-6",
                        children: [
                          c === "edit" &&
                            r.jsxs("div", {
                              className: "space-y-2 w-[50%]",
                              children: [
                                r.jsx("h3", {
                                  className:
                                    "text-lg font-medium text-gray-900",
                                  children: h("form.drugInfo"),
                                }),
                                r.jsx("div", {
                                  children:
                                    n != null &&
                                    n.med_info &&
                                    n.med_info.length > 0
                                      ? r.jsx("div", {
                                          children: n.med_info.map((z, D) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                className:
                                                  "space-y-2 p-4 border border-gray-200 rounded-lg min-h-[262px] max-h-[262px]",
                                                children: [
                                                  r.jsxs("div", {
                                                    children: [
                                                      r.jsxs("span", {
                                                        className:
                                                          "text-sm font-medium text-gray-600",
                                                        children: [
                                                          h("form.drugCode"),
                                                          ":",
                                                        ],
                                                      }),
                                                      r.jsx("div", {
                                                        className:
                                                          "text-base text-gray-900 mt-1",
                                                        children:
                                                          z.code ||
                                                          h("status.notSet"),
                                                      }),
                                                    ],
                                                  }),
                                                  r.jsxs("div", {
                                                    children: [
                                                      r.jsxs("span", {
                                                        className:
                                                          "text-sm font-medium text-gray-600",
                                                        children: [
                                                          h("form.drugName"),
                                                          ":",
                                                        ],
                                                      }),
                                                      r.jsx("div", {
                                                        className:
                                                          "text-base text-gray-900 mt-1",
                                                        children:
                                                          z.name ||
                                                          h("status.notSet"),
                                                      }),
                                                    ],
                                                  }),
                                                  r.jsxs("div", {
                                                    children: [
                                                      r.jsxs("span", {
                                                        className:
                                                          "text-sm font-medium text-gray-600",
                                                        children: [
                                                          h("form.chineseName"),
                                                          ":",
                                                        ],
                                                      }),
                                                      r.jsx("div", {
                                                        className:
                                                          "text-base text-gray-900 mt-1",
                                                        children:
                                                          z.cht_name ||
                                                          h("status.notSet"),
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              D
                                            )
                                          ),
                                        })
                                      : r.jsx("div", {
                                          className:
                                            "bg-gray-50 border border-gray-200 rounded-lg py-8 px-4 text-center space-y-4",
                                          children: r.jsx("div", {
                                            className:
                                              "text-gray-500 text-base",
                                            children: h("status.noDrugData"),
                                          }),
                                        }),
                                }),
                              ],
                            }),
                          c === "add" &&
                            r.jsxs("div", {
                              className: "space-y-2 w-[50%]",
                              children: [
                                r.jsx("h3", {
                                  className:
                                    "text-base font-medium text-gray-900",
                                  children: h("form.drugInfo"),
                                }),
                                r.jsx("div", {
                                  className:
                                    "bg-gray-50 border border-gray-200 rounded-lg py-2 px-4 min-h-[262px] max-h-[262px]",
                                  children: r.jsx("div", {
                                    className: "text-center py-8 space-y-4",
                                    children: r.jsx("div", {
                                      className: "text-gray-500 text-base",
                                      children: h("status.newMedBoxNoDrug"),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          r.jsxs("div", {
                            className: "space-y-2 w-[50%]",
                            children: [
                              r.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [
                                  r.jsx("h3", {
                                    className:
                                      "text-lg font-medium text-gray-900",
                                    children: h("form.drugSearch"),
                                  }),
                                  r.jsx("button", {
                                    onClick: () => j(!0),
                                    className:
                                      "p-2 hover:bg-gray-100 rounded-full transition-colors",
                                    title: "掃描條碼",
                                    children: r.jsx(_r, {
                                      className: "w-5 h-5 text-gray-600",
                                    }),
                                  }),
                                ],
                              }),
                              r.jsxs("div", {
                                className: "flex gap-2 mb-2",
                                children: [
                                  r.jsx("input", {
                                    type: "text",
                                    value: u,
                                    onChange: (z) => d(z.target.value),
                                    placeholder: h("placeholder.drugSearch"),
                                    className:
                                      "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                  r.jsxs("select", {
                                    value: x,
                                    onChange: (z) => k(z.target.value),
                                    className:
                                      "border rounded px-2 py-1 focus:border-blue-500 focus:outline-none transition-colors",
                                    title: "管制級別",
                                    children: [
                                      r.jsx("option", {
                                        value: "N",
                                        children: "N",
                                      }),
                                      r.jsx("option", {
                                        value: "1",
                                        children: "1",
                                      }),
                                      r.jsx("option", {
                                        value: "2",
                                        children: "2",
                                      }),
                                      r.jsx("option", {
                                        value: "3",
                                        children: "3",
                                      }),
                                      r.jsx("option", {
                                        value: "4",
                                        children: "4",
                                      }),
                                    ],
                                  }),
                                  r.jsxs("button", {
                                    onClick: be,
                                    disabled: A,
                                    className:
                                      "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                    children: [
                                      A &&
                                        r.jsx(jt, {
                                          className: "w-4 h-4 animate-spin",
                                        }),
                                      h("button.search"),
                                    ],
                                  }),
                                ],
                              }),
                              r.jsx("div", {
                                className:
                                  "bg-white border rounded p-3 min-h-[220px] max-h-[220px] overflow-y-auto",
                                children: A
                                  ? r.jsxs("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: [
                                        r.jsx(jt, {
                                          className:
                                            "w-5 h-5 animate-spin mr-2",
                                        }),
                                        h("status.searching"),
                                      ],
                                    })
                                  : O.length > 0
                                  ? r.jsx("div", {
                                      className: "space-y-1",
                                      children: O.map((z, D) =>
                                        r.jsxs(
                                          "div",
                                          {
                                            className:
                                              "flex items-center justify-between p-2 border border-gray-200 rounded hover:bg-gray-50 transition-colors",
                                            children: [
                                              r.jsxs("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                  r.jsx("div", {
                                                    className:
                                                      "text-sm font-medium text-gray-900 truncate",
                                                    children: z.NAME,
                                                  }),
                                                  r.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-500 truncate",
                                                    children: z.CHT_NAME,
                                                  }),
                                                  r.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-400 font-mono",
                                                    children: z.CODE,
                                                  }),
                                                ],
                                              }),
                                              r.jsx("button", {
                                                onClick: () => me(z),
                                                className:
                                                  "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                                title: h("button.add"),
                                                children: r.jsx(vt, {
                                                  className: "w-4 h-4",
                                                }),
                                              }),
                                            ],
                                          },
                                          z.GUID || D
                                        )
                                      ),
                                    })
                                  : r.jsx("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: h(
                                        u || x !== "N"
                                          ? "status.noSearchResults"
                                          : "status.searchResults"
                                      ),
                                    }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                r.jsxs("div", {
                  className:
                    "flex items-center justify-end space-x-3 py-2 px-4 border-t border-gray-200",
                  children: [
                    r.jsx("button", {
                      onClick: Ce,
                      disabled: ee || se,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                      children: h("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: ue,
                      disabled: ee || se,
                      className:
                        "px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        (ee || se) &&
                          r.jsx(jt, { className: "w-4 h-4 animate-spin" }),
                        r.jsx("span", {
                          children: ee
                            ? "新增中..."
                            : se
                            ? "更新中..."
                            : h(c === "add" ? "button.add" : "button.save"),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            r.jsx(Ho, {
              isOpen: N,
              onClose: () => j(!1),
              onScanSuccess: R,
              mode: "set_med_box_med_mode",
            }),
          ],
        });
  },
  Nh = () => {
    const {
        listDrawModalOpen: e,
        closeListDrawModal: t,
        selectedListDraw: n,
        triggerRefresh: s,
      } = Qe(),
      { t: o } = mt(),
      [l, a] = m.useState(""),
      [i, c] = m.useState([]),
      [g, h] = m.useState(""),
      [p, f] = m.useState("N"),
      [b, w] = m.useState([]),
      [M, C] = m.useState(!1);
    m.useEffect(() => {
      n && e && (a(n.name || ""), c(n.med_info || []));
    }, [n, e]);
    const u = (I) => {
        c((A) => A.filter((_) => _.code !== I));
      },
      d = async () => {
        C(!0);
        try {
          const I = await ke.searchMedicine(g, p);
          w(I);
        } catch (I) {
          console.error("Search failed:", I), w([]);
        } finally {
          C(!1);
        }
      },
      x = (I) => {
        const A = {
          id: I.GUID || `${Date.now()}_${Math.random()}`,
          name: I.NAME,
          cht_name: I.CHT_NAME,
          code: I.CODE,
        };
        c((_) => (_.some((S) => S.code === A.code) ? _ : [..._, A]));
      },
      k = () => {
        n && ((n.name = l), (n.med_info = i), s(), t());
      },
      O = () => {
        t();
      };
    return !e || !n
      ? null
      : r.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            r.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: O,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh" },
              onClick: (I) => I.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(sn, { className: "w-6 h-6 text-gray-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: o("modal.listDrawSettings"),
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: O,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Fe, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 px-4 py-1 overflow-y-auto",
                  children: r.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      r.jsxs("div", {
                        className: "space-y-1",
                        children: [
                          r.jsx("h3", {
                            className: "text-lg font-medium text-gray-900",
                            children: o("form.drawerName"),
                          }),
                          r.jsx("input", {
                            type: "text",
                            value: l,
                            onChange: (I) => a(I.target.value),
                            placeholder:
                              (n == null ? void 0 : n.name) ||
                              o("placeholder.drawerName"),
                            className:
                              "w-full px-2 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-base",
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        className: "flex gap-6",
                        children: [
                          r.jsxs("div", {
                            className: "space-y-2 w-[50%]",
                            children: [
                              r.jsx("h3", {
                                className: "text-lg font-medium text-gray-900",
                                children: o("form.drugList"),
                              }),
                              i.length > 0
                                ? r.jsx("div", {
                                    className:
                                      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2",
                                    children: i.map((I) =>
                                      r.jsx(
                                        "div",
                                        {
                                          className:
                                            "bg-white border-2 border-gray-200 rounded-lg p-1 hover:border-gray-300 transition-colors",
                                          children: r.jsxs("div", {
                                            className:
                                              "flex items-start justify-between",
                                            children: [
                                              r.jsx("div", {
                                                className: "flex-1 min-w-0",
                                                children: r.jsxs("div", {
                                                  children: [
                                                    I.code &&
                                                      r.jsx("div", {
                                                        children: r.jsx("div", {
                                                          className:
                                                            "text-sm text-gray-900 font-mono",
                                                          children: I.code,
                                                        }),
                                                      }),
                                                    r.jsx("div", {
                                                      children: r.jsx("div", {
                                                        className:
                                                          "text-sm text-gray-900 font-medium",
                                                        children:
                                                          I.name ||
                                                          o("status.notSet"),
                                                      }),
                                                    }),
                                                    r.jsx("div", {
                                                      children: r.jsx("div", {
                                                        className:
                                                          "text-sm text-gray-900",
                                                        children:
                                                          I.cht_name ||
                                                          o("status.notSet"),
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              r.jsx("button", {
                                                onClick: () => u(I.code),
                                                className:
                                                  "ml-3 p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0",
                                                title: o("button.remove"),
                                                children: r.jsx(Fe, {
                                                  className: "w-5 h-5",
                                                }),
                                              }),
                                            ],
                                          }),
                                        },
                                        I.id
                                      )
                                    ),
                                  })
                                : r.jsx("div", {
                                    className:
                                      "bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg py-12",
                                    children: r.jsxs("div", {
                                      className: "text-center",
                                      children: [
                                        r.jsx("div", {
                                          className:
                                            "text-gray-500 text-lg mb-2",
                                          children: o("status.drawerNoDrug"),
                                        }),
                                        r.jsx("div", {
                                          className: "text-gray-400 text-sm",
                                          children: o("status.drugListEmpty"),
                                        }),
                                      ],
                                    }),
                                  }),
                            ],
                          }),
                          r.jsxs("div", {
                            className: "space-y-2 w-[50%]",
                            children: [
                              r.jsx("h3", {
                                className: "text-lg font-medium text-gray-900",
                                children: o("form.drugSearch"),
                              }),
                              r.jsxs("div", {
                                className: "flex gap-2 mb-2",
                                children: [
                                  r.jsx("input", {
                                    type: "text",
                                    value: g,
                                    onChange: (I) => h(I.target.value),
                                    placeholder: o("placeholder.drugSearch"),
                                    className:
                                      "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                  r.jsxs("select", {
                                    value: p,
                                    onChange: (I) => f(I.target.value),
                                    className:
                                      "border rounded px-2 py-1 focus:border-blue-500 focus:outline-none transition-colors",
                                    title: "管制級別",
                                    children: [
                                      r.jsx("option", {
                                        value: "N",
                                        children: "N",
                                      }),
                                      r.jsx("option", {
                                        value: "1",
                                        children: "1",
                                      }),
                                      r.jsx("option", {
                                        value: "2",
                                        children: "2",
                                      }),
                                      r.jsx("option", {
                                        value: "3",
                                        children: "3",
                                      }),
                                      r.jsx("option", {
                                        value: "4",
                                        children: "4",
                                      }),
                                    ],
                                  }),
                                  r.jsxs("button", {
                                    onClick: d,
                                    disabled: M,
                                    className:
                                      "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                    children: [
                                      M &&
                                        r.jsx(jt, {
                                          className: "w-4 h-4 animate-spin",
                                        }),
                                      o("button.search"),
                                    ],
                                  }),
                                ],
                              }),
                              r.jsx("div", {
                                className:
                                  "bg-white border rounded p-3 min-h-[300px] max-h-[300px] overflow-y-auto",
                                children: M
                                  ? r.jsxs("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: [
                                        r.jsx(jt, {
                                          className:
                                            "w-5 h-5 animate-spin mr-2",
                                        }),
                                        o("status.searching"),
                                      ],
                                    })
                                  : b.length > 0
                                  ? r.jsx("div", {
                                      className: "space-y-1",
                                      children: b.map((I, A) =>
                                        r.jsxs(
                                          "div",
                                          {
                                            className:
                                              "flex items-center justify-between p-2 border border-gray-200 rounded hover:bg-gray-50 transition-colors",
                                            children: [
                                              r.jsxs("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                  r.jsx("div", {
                                                    className:
                                                      "text-sm font-medium text-gray-900 truncate",
                                                    children: I.NAME,
                                                  }),
                                                  r.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-500 truncate",
                                                    children: I.CHT_NAME,
                                                  }),
                                                  r.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-400 font-mono",
                                                    children: I.CODE,
                                                  }),
                                                ],
                                              }),
                                              r.jsx("button", {
                                                onClick: () => x(I),
                                                className:
                                                  "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                                title: o("button.add"),
                                                children: r.jsx(vt, {
                                                  className: "w-4 h-4",
                                                }),
                                              }),
                                            ],
                                          },
                                          I.GUID || A
                                        )
                                      ),
                                    })
                                  : r.jsx("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: o(
                                        g || p !== "N"
                                          ? "status.noSearchResults"
                                          : "status.searchResults"
                                      ),
                                    }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                r.jsxs("div", {
                  className:
                    "flex items-center justify-end space-x-3 px-6 py-4 border-t border-gray-200",
                  children: [
                    r.jsx("button", {
                      onClick: O,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                      children: o("button.cancel"),
                    }),
                    r.jsx("button", {
                      onClick: k,
                      className:
                        "px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors",
                      children: o("button.save"),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  },
  jh = () => {
    const {
        gridDrawModalOpen: e,
        closeGridDrawModal: t,
        selectedGridDraw: n,
        triggerRefresh: s,
        apiDepartmentData: o,
        setApiDepartmentData: l,
        showNotification: a,
        medicineList: i,
      } = Qe(),
      { t: c } = mt(),
      [g, h] = m.useState(""),
      [p, f] = m.useState(null),
      [b, w] = m.useState(!1),
      [M, C] = m.useState(!1),
      [u, d] = m.useState(null),
      [x, k] = m.useState(""),
      [O, I] = m.useState("N"),
      [A, _] = m.useState([]),
      [ee, S] = m.useState(!1),
      [U, q] = m.useState(0),
      [P, T] = m.useState({ x: 0, y: 0 });
    m.useEffect(() => {
      if (n && e)
        if ((h(n.name || ""), n.drawer)) {
          if (!b) {
            console.log("🔄 備份原始 drawer 資料:", n);
            const B = JSON.parse(JSON.stringify(n.drawer));
            f(B), w(!0), console.log("✅ 備份完成，備份資料:", B);
          }
        } else console.log("⚠️ 沒有 drawer 資料可備份"), f(null), w(!1);
    }, [n, e, b]),
      m.useEffect(() => {
        e || (w(!1), f(null), d(null));
      }, [e]);
    const se = () => {
        n && ne();
      },
      v = () => {
        if (
          (console.log("🔄 開始恢復原始資料..."),
          console.log("原始備份資料:", p),
          console.log("當前 selectedGridDraw:", n),
          n && p && b)
        ) {
          console.log("📦 恢復 drawer 資料...");
          const B = JSON.parse(JSON.stringify(p));
          if (((n.drawer = B), o)) {
            const J = (F) => {
                F.forEach((H) => {
                  H.GUID === n.GUID &&
                    (console.log("🎯 找到目標格線抽屜，更新資料"),
                    (H.drawer = B)),
                    H.contents && Array.isArray(H.contents) && J(H.contents),
                    H.components &&
                      Array.isArray(H.components) &&
                      J(H.components);
                });
              },
              E = JSON.parse(JSON.stringify(o));
            J(E), l(E), console.log("🔄 已更新全域資料狀態");
          }
          console.log("✅ 資料已恢復:", n.drawer);
        } else
          console.log(
            "⚠️ 無法恢復資料 - selectedGridDraw、originalDrawerData 或 hasBackup 為空"
          ),
            console.log("selectedGridDraw:", !!n),
            console.log("originalDrawerData:", !!p),
            console.log("hasBackup:", b);
        d(null), w(!1), f(null), s(), t();
      },
      N = (B, J) => {
        if (!u) return !1;
        const E = Math.min(u.startRow, u.endRow),
          F = Math.max(u.startRow, u.endRow),
          H = Math.min(u.startCol, u.endCol),
          K = Math.max(u.startCol, u.endCol);
        return B >= E && B <= F && J >= H && J <= K;
      },
      j = (B) => {
        var _e;
        if (
          !((_e = n == null ? void 0 : n.drawer) != null && _e.Boxes) ||
          B.Slave
        )
          return { width: 1, height: 1 };
        const E = n.drawer.Boxes.flat().filter(
          (ye) =>
            ye.Slave &&
            ye.MasterBox_Row === B.Row &&
            ye.MasterBox_Column === B.Column
        );
        if (E.length === 0) return { width: 1, height: 1 };
        const F = [B, ...E],
          H = Math.min(...F.map((ye) => ye.Row)),
          K = Math.max(...F.map((ye) => ye.Row)),
          ce = Math.min(...F.map((ye) => ye.Column));
        return {
          width: Math.max(...F.map((ye) => ye.Column)) - ce + 1,
          height: K - H + 1,
        };
      },
      V = () => {
        var ce;
        if (!u || !((ce = n == null ? void 0 : n.drawer) != null && ce.Boxes))
          return [];
        const B = n.drawer.Boxes.flat(),
          J = Math.min(u.startRow, u.endRow),
          E = Math.max(u.startRow, u.endRow),
          F = Math.min(u.startCol, u.endCol),
          H = Math.max(u.startCol, u.endCol),
          K = [];
        return (
          B.forEach((he) => {
            if (!he.Slave) {
              const _e = j(he),
                ye = he.Row + _e.height - 1,
                we = he.Column + _e.width - 1;
              he.Row >= J && ye <= E && he.Column >= F && we <= H && K.push(he);
            }
          }),
          K
        );
      },
      de = (B, J, E, F) => {
        var we;
        if (!u || !((we = n == null ? void 0 : n.drawer) != null && we.Boxes))
          return !1;
        const H = n.drawer.Boxes.flat();
        let K = !0,
          ce = B,
          he = J,
          _e = E,
          ye = F;
        for (; K; )
          (K = !1),
            H.forEach((Ne) => {
              if (!Ne.Slave) {
                const Ee = j(Ne),
                  Je = Ne.Row + Ee.height - 1,
                  Me = Ne.Column + Ee.width - 1;
                !(Ne.Row > he || Je < ce || Ne.Column > ye || Me < _e) &&
                  (Ne.Row < ce && ((ce = Ne.Row), (K = !0)),
                  Je > he && ((he = Je), (K = !0)),
                  Ne.Column < _e && ((_e = Ne.Column), (K = !0)),
                  Me > ye && ((ye = Me), (K = !0)));
              }
            });
        return { minRow: ce, maxRow: he, minCol: _e, maxCol: ye };
      },
      te = () => {
        var K;
        if (!u || !((K = n == null ? void 0 : n.drawer) != null && K.Boxes))
          return !1;
        const B = Math.min(u.startRow, u.endRow),
          J = Math.max(u.startRow, u.endRow),
          E = Math.min(u.startCol, u.endCol),
          F = Math.max(u.startCol, u.endCol),
          H = n.drawer.Boxes.flat();
        for (let ce = B; ce <= J; ce++)
          for (let he = E; he <= F; he++) {
            let _e = !1;
            for (const ye of H)
              if (!ye.Slave) {
                const we = j(ye),
                  Ne = ye.Row + we.height - 1,
                  Ee = ye.Column + we.width - 1;
                if (ce >= ye.Row && ce <= Ne && he >= ye.Column && he <= Ee) {
                  _e = !0;
                  break;
                }
              }
            if (!_e) return !1;
          }
        return !0;
      },
      ae = () => {
        var we, Ne;
        const B = V();
        if (!u) return { canMerge: !1, canUnmerge: !1 };
        if (B.length === 0) return { canMerge: !1, canUnmerge: !1 };
        const J =
            ((Ne =
              (we = n == null ? void 0 : n.drawer) == null
                ? void 0
                : we.Boxes) == null
              ? void 0
              : Ne.flat()) || [],
          E = B.some(
            (Ee) =>
              J.filter(
                (Me) =>
                  Me.Slave &&
                  Me.MasterBox_Row === Ee.Row &&
                  Me.MasterBox_Column === Ee.Column
              ).length > 0
          ),
          F = Math.min(u.startRow, u.endRow),
          H = Math.max(u.startRow, u.endRow),
          K = Math.min(u.startCol, u.endCol),
          ce = Math.max(u.startCol, u.endCol),
          he = J.some(
            (Ee) =>
              Ee.Slave &&
              Ee.Row >= F &&
              Ee.Row <= H &&
              Ee.Column >= K &&
              Ee.Column <= ce
          );
        return { canMerge: B.length > 1 && te(), canUnmerge: E || he };
      },
      { canMerge: Se, canUnmerge: ue } = ae(),
      Ce = async () => {
        S(!0);
        try {
          const B = x.toLowerCase().trim();
          let J = i;
          B &&
            (J = J.filter((E) => {
              var F, H, K;
              return (
                ((F = E.CODE) == null ? void 0 : F.toLowerCase().includes(B)) ||
                ((H = E.NAME) == null ? void 0 : H.toLowerCase().includes(B)) ||
                ((K = E.CHT_NAME) == null
                  ? void 0
                  : K.toLowerCase().includes(B))
              );
            })),
            O !== "N" && (J = J.filter((E) => E.DRUGKIND === O)),
            _(J);
        } catch (B) {
          console.error("Search failed:", B), _([]);
        } finally {
          S(!1);
        }
      },
      fe = async (B) => {
        var E;
        if (!u || !((E = n == null ? void 0 : n.drawer) != null && E.Boxes))
          return;
        const J = V();
        if (J.length !== 0)
          try {
            const F = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [`guid=${J[0].GUID}`, `code=${B.CODE}`],
              Data: n.drawer,
            };
            console.log("🚀 發送更新藥品 API 請求:", F);
            const H = await ke.request("/api/device/update_drawer_medcode", {
              method: "POST",
              body: JSON.stringify(F),
            });
            if (
              (console.log("📡 更新藥品 API 回應:", H),
              H.Code === 200 && H.Data)
            ) {
              if (
                ((n.drawer = H.Data),
                H.Data.Boxes && (n.Boxes = H.Data.Boxes),
                console.log("✅ 藥品資料更新成功"),
                o)
              ) {
                const K = (he) => {
                    he.forEach((_e) => {
                      _e.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新資料"),
                        (_e.drawer = n.drawer),
                        n.Boxes && (_e.Boxes = n.Boxes)),
                        _e.contents &&
                          Array.isArray(_e.contents) &&
                          K(_e.contents),
                        _e.components &&
                          Array.isArray(_e.components) &&
                          K(_e.components);
                    });
                  },
                  ce = JSON.parse(JSON.stringify(o));
                K(ce), l(ce);
              }
              d(null), s();
            } else
              console.error("❌ 藥品更新失敗:", H),
                a(`藥品更新失敗：${H.Result || "未知錯誤"}`, "error");
          } catch (F) {
            console.error("💥 藥品更新 API 調用失敗:", F),
              a("藥品更新失敗：網路錯誤", "error");
          }
      },
      Y = (B, J, E) => {
        E.preventDefault(),
          E.stopPropagation(),
          "touches" in E &&
            (q(Date.now()),
            T({ x: E.touches[0].clientX, y: E.touches[0].clientY })),
          C(!0),
          d({ startRow: B, startCol: J, endRow: B, endCol: J });
      },
      pe = (B, J) => {
        if (!M || !u) return;
        const E = Math.min(u.startRow, B),
          F = Math.max(u.startRow, B),
          H = Math.min(u.startCol, J),
          K = Math.max(u.startCol, J),
          ce = de(E, F, H, K);
        ce &&
          d((he) =>
            he
              ? {
                  startRow: he.startRow,
                  startCol: he.startCol,
                  endRow: B >= he.startRow ? ce.maxRow : ce.minRow,
                  endCol: J >= he.startCol ? ce.maxCol : ce.minCol,
                }
              : null
          );
      },
      be = () => {
        if (M && (C(!1), u && n != null && n.Boxes)) {
          const B = Math.min(u.startRow, u.endRow),
            J = Math.max(u.startRow, u.endRow),
            E = Math.min(u.startCol, u.endCol),
            F = Math.max(u.startCol, u.endCol),
            H = de(B, J, E, F);
          H &&
            d({
              startRow: H.minRow,
              startCol: H.minCol,
              endRow: H.maxRow,
              endCol: H.maxCol,
            });
        }
      },
      R = () => {
        var B;
        !Se ||
          !((B = n == null ? void 0 : n.drawer) != null && B.Boxes) ||
          !u ||
          D();
      },
      me = () => {
        var B;
        !ue ||
          !((B = n == null ? void 0 : n.drawer) != null && B.Boxes) ||
          !u ||
          (console.log(u), z());
      },
      z = async () => {
        var B;
        if (!(!u || !((B = n == null ? void 0 : n.drawer) != null && B.Boxes)))
          try {
            const J = Math.min(u.startRow, u.endRow),
              E = Math.max(u.startRow, u.endRow),
              F = Math.min(u.startCol, u.endCol),
              H = Math.max(u.startCol, u.endCol),
              ce = n.drawer.Boxes.flat().filter(
                (Ne) =>
                  Ne.Row >= J && Ne.Row <= E && Ne.Column >= F && Ne.Column <= H
              ),
              he = [],
              _e = [];
            ce.forEach((Ne) => {
              he.push(Ne.Column.toString()), _e.push(Ne.Row.toString());
            });
            const ye = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [
                `SelectColumns=${he.join(",")}`,
                `SelectRows=${_e.join(",")}`,
              ],
              Data: { IP: n.ip, Boxes: n.Boxes },
            };
            console.log("🚀 發送 API 請求:", ye);
            const we = await ke.request("/api/device/separate_drawer_boxes", {
              method: "POST",
              body: JSON.stringify(ye),
            });
            if ((console.log("📡 API 回應:", we), we.Code === 200 && we.Data)) {
              if (
                we.Data.Boxes &&
                Array.isArray(we.Data.Boxes) &&
                ((n.Boxes = we.Data.Boxes),
                (n.drawer = we.Data),
                console.log("✅ 資料已更新"),
                o)
              ) {
                const Ne = (Je) => {
                    Je.forEach((Me) => {
                      Me.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新資料"),
                        (Me.drawer = n.drawer)),
                        Me.contents &&
                          Array.isArray(Me.contents) &&
                          Ne(Me.contents),
                        Me.components &&
                          Array.isArray(Me.components) &&
                          Ne(Me.components);
                    });
                  },
                  Ee = JSON.parse(JSON.stringify(o));
                Ne(Ee), l(Ee);
              }
            } else
              console.error("❌ API 回應錯誤:", we),
                a(`取消合併失敗：${we.Result || "未知錯誤"}`, "error");
          } catch (J) {
            console.error("💥 API 調用失敗:", J),
              a("取消合併失敗：網路錯誤", "error");
          } finally {
            console.log("更新後資料：", n),
              console.log("更新後最深層資料：", o),
              d(null),
              s();
          }
      },
      D = async () => {
        var B;
        if (!(!u || !((B = n == null ? void 0 : n.drawer) != null && B.Boxes)))
          try {
            const J = Math.min(u.startRow, u.endRow),
              E = Math.max(u.startRow, u.endRow),
              F = Math.min(u.startCol, u.endCol),
              H = Math.max(u.startCol, u.endCol),
              ce = n.drawer.Boxes.flat().filter(
                (Ne) =>
                  Ne.Row >= J && Ne.Row <= E && Ne.Column >= F && Ne.Column <= H
              ),
              he = [],
              _e = [];
            ce.forEach((Ne) => {
              he.push(Ne.Column.toString()), _e.push(Ne.Row.toString());
            });
            const ye = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [
                `SelectColumns=${he.join(",")}`,
                `SelectRows=${_e.join(",")}`,
              ],
              Data: { IP: n.ip, Boxes: n.Boxes },
            };
            console.log("🚀 發送 API 請求:", ye);
            const we = await ke.request("/api/device/combine_drawer_boxes", {
              method: "POST",
              body: JSON.stringify(ye),
            });
            if ((console.log("📡 API 回應:", we), we.Code === 200 && we.Data)) {
              if (
                we.Data.Boxes &&
                Array.isArray(we.Data.Boxes) &&
                ((n.Boxes = we.Data.Boxes),
                (n.drawer = we.Data),
                console.log("✅ 資料已更新"),
                o)
              ) {
                const Ne = (Je) => {
                    Je.forEach((Me) => {
                      Me.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新資料"),
                        (Me.drawer = n.drawer)),
                        Me.contents &&
                          Array.isArray(Me.contents) &&
                          Ne(Me.contents),
                        Me.components &&
                          Array.isArray(Me.components) &&
                          Ne(Me.components);
                    });
                  },
                  Ee = JSON.parse(JSON.stringify(o));
                Ne(Ee), l(Ee);
              }
            } else
              console.error("❌ API 回應錯誤:", we),
                a(`取消合併失敗：${we.Result || "未知錯誤"}`, "error");
          } catch (J) {
            console.error("💥 API 調用失敗:", J),
              a("取消合併失敗：網路錯誤", "error");
          } finally {
            console.log("更新後資料：", n),
              console.log("更新後最深層資料：", o),
              d(null),
              s();
          }
      },
      ne = async () => {
        if (n)
          try {
            n.name = g;
            const B = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              Data: [n.drawer],
            };
            console.log("🚀 發送確認更新 API 請求:", B);
            const J = await ke.request("/api/device/update_epd583_drawers", {
              method: "POST",
              body: JSON.stringify(B),
            });
            if ((console.log("📡 確認更新 API 回應:", J), J.Code === 200)) {
              if (
                (console.log("✅ 抽屜資料更新成功"),
                a("抽屜資料更新成功", "success"),
                o)
              ) {
                const E = (H) => {
                    H.forEach((K) => {
                      K.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新名稱"),
                        (K.name = n.name)),
                        K.contents &&
                          Array.isArray(K.contents) &&
                          E(K.contents),
                        K.components &&
                          Array.isArray(K.components) &&
                          E(K.components);
                    });
                  },
                  F = JSON.parse(JSON.stringify(o));
                E(F), l(F);
              }
              w(!1), f(null), s(), t();
            } else
              console.error("❌ 抽屜資料更新失敗:", J),
                a(`抽屜資料更新失敗：${J.Result || "未知錯誤"}`, "error");
          } catch (B) {
            console.error("💥 抽屜資料更新 API 調用失敗:", B),
              a("抽屜資料更新失敗：網路錯誤", "error");
          }
      },
      ie = () => {
        var _e;
        if (
          !((_e = n == null ? void 0 : n.drawer) != null && _e.Boxes) ||
          n.drawer.Boxes.length === 0
        )
          return r.jsx("div", {
            className:
              "bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg py-12",
            children: r.jsxs("div", {
              className: "text-center",
              children: [
                r.jsx(Ld, {
                  className: "w-12 h-12 text-gray-400 mx-auto mb-4",
                }),
                r.jsx("div", {
                  className: "text-gray-500 text-lg mb-2",
                  children: c("status.gridDrawNotConfigured"),
                }),
                r.jsx("div", {
                  className: "text-gray-400 text-sm",
                  children: c("status.noDrugInfo"),
                }),
              ],
            }),
          });
        const B = n.drawer.Boxes.flat(),
          J = (ye) => {
            if (ye.Slave) return { width: 1, height: 1 };
            const we = B.filter(
              (ze) =>
                ze.Slave &&
                ze.MasterBox_Row === ye.Row &&
                ze.MasterBox_Column === ye.Column
            );
            if (we.length === 0) return { width: 1, height: 1 };
            const Ne = [ye, ...we],
              Ee = Math.min(...Ne.map((ze) => ze.Row)),
              Je = Math.max(...Ne.map((ze) => ze.Row)),
              Me = Math.min(...Ne.map((ze) => ze.Column));
            return {
              width: Math.max(...Ne.map((ze) => ze.Column)) - Me + 1,
              height: Je - Ee + 1,
            };
          },
          E = Math.max(...B.map((ye) => ye.Row + 1 - 1)),
          F = Math.max(...B.map((ye) => ye.Column + 1 - 1)),
          H = E + 1,
          K = F + 1,
          ce = Array(H)
            .fill(null)
            .map(() => Array(K).fill(!1)),
          he = {};
        return (
          B.forEach((ye) => {
            if (!ye.Slave) {
              const we = J(ye);
              (he[`${ye.Row},${ye.Column}`] = ye),
                (ye.calculatedWidth = we.width),
                (ye.calculatedHeight = we.height);
            }
          }),
          B.forEach((ye) => {
            if (
              !ye.Slave &&
              (ye.calculatedWidth > 1 || ye.calculatedHeight > 1)
            )
              for (let we = ye.Row; we < ye.Row + ye.calculatedHeight; we++)
                for (
                  let Ne = ye.Column;
                  Ne < ye.Column + ye.calculatedWidth;
                  Ne++
                )
                  (we !== ye.Row || Ne !== ye.Column) && (ce[we][Ne] = !0);
          }),
          r.jsx("div", {
            className: "rounded-lg",
            children: r.jsx("table", {
              className: "w-full",
              children: r.jsx("tbody", {
                children: Array.from({ length: H }, (ye, we) =>
                  r.jsx(
                    "tr",
                    {
                      children: Array.from({ length: K }, (Ne, Ee) => {
                        if (ce[we][Ee]) return null;
                        const Je = `${we},${Ee}`,
                          Me = he[Je];
                        return Me
                          ? r.jsx(
                              "td",
                              {
                                className: `border border-gray-400 pt-1 pl-1 align-top cursor-pointer select-none ${
                                  N(we, Ee)
                                    ? "bg-blue-200"
                                    : "bg-white hover:bg-gray-100"
                                }`,
                                style: {
                                  width: `${100 / K}%`,
                                  minHeight: "40px",
                                  height: `${50 * Me.calculatedHeight}px`,
                                  maxHeight: `${50 * Me.calculatedHeight}px`,
                                },
                                colSpan: Me.calculatedWidth,
                                rowSpan: Me.calculatedHeight,
                                onMouseDown: (Ye) => Y(we, Ee, Ye),
                                onMouseEnter: () => pe(we, Ee),
                                onMouseUp: be,
                                onTouchStart: (Ye) => Y(we, Ee, Ye),
                                onTouchMove: (Ye) => {
                                  if ((Ye.preventDefault(), !M)) return;
                                  const ze = Ye.touches[0],
                                    Lt = document.elementFromPoint(
                                      ze.clientX,
                                      ze.clientY
                                    ),
                                    ht = Lt == null ? void 0 : Lt.closest("td");
                                  if (ht) {
                                    const qt = parseInt(
                                        ht.getAttribute("data-row") || "0"
                                      ),
                                      en = parseInt(
                                        ht.getAttribute("data-col") || "0"
                                      );
                                    pe(qt, en);
                                  }
                                },
                                onTouchEnd: be,
                                "data-row": we,
                                "data-col": Ee,
                                children: r.jsx("div", {
                                  className: "h-full flex flex-col",
                                  children:
                                    Me.Code || Me.Name || Me.ChineseName
                                      ? r.jsxs(r.Fragment, {
                                          children: [
                                            Me.Code &&
                                              r.jsx("div", {
                                                className:
                                                  "text-xs font-mono text-gray-600",
                                                children: Me.Code,
                                              }),
                                            Me.Name &&
                                              r.jsx("div", {
                                                className:
                                                  "text-xs font-medium text-gray-900",
                                                children: Me.Name,
                                              }),
                                            Me.ChineseName &&
                                              r.jsx("div", {
                                                className:
                                                  "text-xs text-gray-700",
                                                children: Me.ChineseName,
                                              }),
                                          ],
                                        })
                                      : r.jsx("div", {
                                          className:
                                            "h-full flex justify-center items-center text-xs text-gray-400 italic text-center",
                                          children: c("status.notAdded"),
                                        }),
                                }),
                              },
                              Ee
                            )
                          : r.jsx(
                              "td",
                              {
                                className: `border border-gray-300 p-2 align-top cursor-pointer select-none ${
                                  N(we, Ee)
                                    ? "border-1 border-blue-500 bg-blue-100"
                                    : "bg-gray-50 hover:bg-gray-100"
                                }`,
                                style: {
                                  width: `${100 / K}%`,
                                  minWidth: "80px",
                                  minHeight: "80px",
                                },
                                onMouseDown: (Ye) => Y(we, Ee, Ye),
                                onMouseEnter: () => pe(we, Ee),
                                onMouseUp: be,
                                onTouchStart: (Ye) => Y(we, Ee, Ye),
                                onTouchMove: (Ye) => {
                                  if ((Ye.preventDefault(), !M)) return;
                                  const ze = Ye.touches[0],
                                    Lt = document.elementFromPoint(
                                      ze.clientX,
                                      ze.clientY
                                    ),
                                    ht = Lt == null ? void 0 : Lt.closest("td");
                                  if (ht) {
                                    const qt = parseInt(
                                        ht.getAttribute("data-row") || "0"
                                      ),
                                      en = parseInt(
                                        ht.getAttribute("data-col") || "0"
                                      );
                                    pe(qt, en);
                                  }
                                },
                                onTouchEnd: be,
                                "data-row": we,
                                "data-col": Ee,
                                children: r.jsx("div", {
                                  className:
                                    "h-full flex items-center justify-center text-gray-400 text-xs",
                                  children: c("status.notAdded"),
                                }),
                              },
                              Ee
                            );
                      }),
                    },
                    we
                  )
                ),
              }),
            }),
          })
        );
      };
    return !e || !n
      ? null
      : r.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            r.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: v,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh" },
              onClick: (B) => B.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(sn, { className: "w-6 h-6 text-gray-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: c("modal.gridDrawSettings"),
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: v,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Fe, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                r.jsxs("div", {
                  className: "flex-1 px-4 py-2 overflow-y-auto",
                  children: [
                    r.jsxs("div", {
                      className: "space-y-4 pt-2",
                      children: [
                        r.jsxs("div", {
                          className: "flex items-center space-x-3",
                          children: [
                            r.jsx("h3", {
                              className:
                                "text-lg whitespace-nowrap font-medium text-gray-900",
                              children: c("form.drawerName"),
                            }),
                            r.jsx("input", {
                              type: "text",
                              value: g,
                              onChange: (B) => h(B.target.value),
                              disabled: !0,
                              placeholder:
                                (n == null ? void 0 : n.name) ||
                                c("placeholder.gridDrawName"),
                              className:
                                "px-2 py-1 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-base",
                            }),
                          ],
                        }),
                        r.jsx("div", {
                          className: "space-y-1",
                          children: ie(),
                        }),
                      ],
                    }),
                    r.jsxs("div", {
                      className: "py-2 flex space-x-4",
                      children: [
                        r.jsx("div", {
                          className: "grid grid-cols-1 gap-2 w-[10%]",
                          children: r.jsxs("div", {
                            className: "grid grid-cols-1 gap-2 items-strat",
                            children: [
                              r.jsx("button", {
                                onClick: R,
                                disabled: !Se,
                                className: `px-4 py-2 rounded transition-colors ${
                                  Se
                                    ? "bg-blue-600 text-white hover:bg-blue-700"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                }`,
                                children: c("button.merge"),
                              }),
                              r.jsx("button", {
                                onClick: me,
                                disabled: !ue,
                                className: `px-4 py-2 rounded transition-colors ${
                                  ue
                                    ? "bg-red-600 text-white hover:bg-red-700"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                }`,
                                children: c("button.unmerge"),
                              }),
                            ],
                          }),
                        }),
                        r.jsx("div", {
                          className: "space-y-2 w-[30%]",
                          children: (() => {
                            const B = V(),
                              J = B.find((E) => !E.Slave);
                            return J && (J.Code || J.Name || J.ChineseName)
                              ? r.jsxs("div", {
                                  className:
                                    "border border-blue-200 rounded-lg p-2 space-y-1 h-full",
                                  children: [
                                    r.jsxs("div", {
                                      children: [
                                        r.jsx("div", {
                                          className:
                                            "text-sm text-gray-900 mb-1",
                                          children: c("form.drugCode"),
                                        }),
                                        r.jsx("div", {
                                          className: "text-base text-gray-900",
                                          children: J.Code || "-",
                                        }),
                                      ],
                                    }),
                                    r.jsxs("div", {
                                      children: [
                                        r.jsx("div", {
                                          className:
                                            "text-sm text-gray-900  mb-1",
                                          children: c("form.drugName"),
                                        }),
                                        r.jsx("div", {
                                          className: "text-base text-gray-900",
                                          children: J.Name || "-",
                                        }),
                                      ],
                                    }),
                                    r.jsxs("div", {
                                      children: [
                                        r.jsx("div", {
                                          className:
                                            "text-sm text-gray-900 mb-1",
                                          children: c("form.chineseName"),
                                        }),
                                        r.jsx("div", {
                                          className: "text-base text-gray-900",
                                          children: J.ChineseName || "-",
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : r.jsx("div", {
                                  className:
                                    "bg-gray-50 border h-full border-gray-200 rounded-lg p-3 text-center",
                                  children: r.jsx("div", {
                                    className:
                                      "text-gray-500 h-full w-full flex justify-center items-center",
                                    children:
                                      u && B.length > 0
                                        ? c("status.selectedCellsNoDrug")
                                        : c("status.selectCellsForDrug"),
                                  }),
                                });
                          })(),
                        }),
                        r.jsxs("div", {
                          className: "w-[60%]",
                          children: [
                            r.jsxs("div", {
                              className: "flex gap-2 mb-2",
                              children: [
                                r.jsx("input", {
                                  type: "text",
                                  value: x,
                                  onChange: (B) => k(B.target.value),
                                  placeholder: c("placeholder.drugSearch"),
                                  className:
                                    "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                }),
                                r.jsxs("select", {
                                  value: O,
                                  onChange: (B) => I(B.target.value),
                                  className:
                                    "border rounded px-2 py-1 focus:border-blue-500 focus:outline-none transition-colors",
                                  title: "管制級別",
                                  children: [
                                    r.jsx("option", {
                                      value: "N",
                                      children: "N",
                                    }),
                                    r.jsx("option", {
                                      value: "1",
                                      children: "1",
                                    }),
                                    r.jsx("option", {
                                      value: "2",
                                      children: "2",
                                    }),
                                    r.jsx("option", {
                                      value: "3",
                                      children: "3",
                                    }),
                                    r.jsx("option", {
                                      value: "4",
                                      children: "4",
                                    }),
                                  ],
                                }),
                                r.jsxs("button", {
                                  onClick: Ce,
                                  disabled: ee,
                                  className:
                                    "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                  children: [
                                    ee &&
                                      r.jsx(jt, {
                                        className: "w-4 h-4 animate-spin",
                                      }),
                                    c("button.search"),
                                  ],
                                }),
                              ],
                            }),
                            r.jsx("div", {
                              className:
                                "bg-white border rounded p-3 min-h-[150px] max-h-[150px] overflow-y-auto",
                              children: ee
                                ? r.jsxs("div", {
                                    className:
                                      "text-gray-500 text-center flex items-center justify-center h-full",
                                    children: [
                                      r.jsx(jt, {
                                        className: "w-5 h-5 animate-spin mr-2",
                                      }),
                                      c("status.searching"),
                                    ],
                                  })
                                : A.length > 0
                                ? r.jsx("div", {
                                    className: "space-y-1",
                                    children: A.map((B, J) =>
                                      r.jsxs(
                                        "div",
                                        {
                                          className:
                                            "flex items-center justify-between p-1 border border-gray-200 rounded hover:bg-gray-50 transition-colors",
                                          children: [
                                            r.jsxs("div", {
                                              className: "flex-1 min-w-0",
                                              children: [
                                                r.jsx("div", {
                                                  className:
                                                    "text-sm font-medium text-gray-900 truncate",
                                                  children: B.NAME,
                                                }),
                                                r.jsx("div", {
                                                  className:
                                                    "text-xs text-gray-500 truncate",
                                                  children: B.CHT_NAME,
                                                }),
                                                r.jsx("div", {
                                                  className:
                                                    "text-xs text-gray-400 font-mono",
                                                  children: B.CODE,
                                                }),
                                              ],
                                            }),
                                            r.jsx("button", {
                                              onClick: () => fe(B),
                                              className:
                                                "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                              title: c("button.add"),
                                              children: r.jsx(vt, {
                                                className: "w-4 h-4",
                                              }),
                                            }),
                                          ],
                                        },
                                        B.GUID || J
                                      )
                                    ),
                                  })
                                : r.jsx("div", {
                                    className:
                                      "text-gray-500 text-center flex items-center justify-center h-full",
                                    children: c(
                                      x || O !== "N"
                                        ? "status.noSearchResults"
                                        : "status.searchResults"
                                    ),
                                  }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    r.jsxs("div", {
                      className:
                        "flex items-center justify-end space-x-3 px-6 py-4 border-t border-gray-200",
                      children: [
                        r.jsx("button", {
                          onClick: v,
                          className:
                            "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                          children: c("button.cancel"),
                        }),
                        r.jsx("button", {
                          onClick: se,
                          className:
                            "px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors",
                          children: c("button.save"),
                        }),
                      ],
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "fixed inset-0 pointer-events-none",
                  onMouseUp: be,
                  onMouseLeave: be,
                  onTouchEnd: be,
                  onTouchCancel: be,
                }),
              ],
            }),
          ],
        });
  },
  Sh = () => {
    var q;
    const {
        addParentContainerModalOpen: e,
        closeAddParentContainerModal: t,
        selectedDepartmentForAdd: n,
        selectedDepartmentType: s,
        setApiDepartmentData: o,
        setIsLoadingMedMap: l,
        showNotification: a,
        triggerRefresh: i,
        setSidebarOpen: c,
      } = Qe(),
      { t: g } = mt(),
      [h, p] = m.useState(null),
      [f, b] = m.useState(0),
      [w, M] = m.useState(0),
      [C, u] = m.useState(!1);
    m.useEffect(() => {
      e && (p(null), b(0), M(0), u(!1));
    }, [e]),
      m.useEffect(() => {
        h && (b(h.row), M(h.col));
      }, [h]);
    const d = () => {
        const P = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((T) => {
              T.type === "parent_container" &&
                T.gird_position &&
                P.add(T.gird_position);
            }),
          P
        );
      },
      x = () => {
        const P = d(),
          T = [];
        if (P.size === 0) return T.push({ row: 0, col: 0 }), T;
        const se = [];
        P.forEach((N) => {
          const [j, V] = N.split(",").map(Number);
          se.push({ row: j, col: V });
        });
        const v = new Set();
        return (
          se.forEach(({ row: N, col: j }) => {
            v.add(`${N},${j + 1}`),
              v.add(`${N + 1},${j}`),
              j > 0 && v.add(`${N},${j - 1}`),
              N > 0 && v.add(`${N - 1},${j}`);
          }),
          v.forEach((N) => {
            if (!P.has(N)) {
              const [j, V] = N.split(",").map(Number);
              j >= 0 && V >= 0 && T.push({ row: j, col: V });
            }
          }),
          P.has("0,1") ||
            T.some((j) => j.row === 0 && j.col === 1) ||
            T.push({ row: 0, col: 1 }),
          P.has("1,0") ||
            T.some((j) => j.row === 1 && j.col === 0) ||
            T.push({ row: 1, col: 0 }),
          T.sort((N, j) => (N.row === j.row ? N.col - j.col : N.row - j.row))
        );
      },
      k = (P) => {
        p(P);
      },
      O = (P) => {
        b(P), p({ row: P, col: w });
      },
      I = (P) => {
        M(P), p({ row: f, col: P });
      },
      A = h && !d().has(`${h.row},${h.col}`) && h.row >= 0 && h.col >= 0,
      _ = async () => {
        if (!(!h || !n || !A)) {
          u(!0);
          try {
            const P = `${h.row},${h.col}`,
              T = await ke.addMedMapSection(n.GUID, P);
            T.Code === 200
              ? (a("新增成功", "success"), t(), c(!1), await ee())
              : a(`新增失敗：${T.Result || "未知錯誤"}`, "error");
          } catch (P) {
            console.error("Add parent container failed:", P),
              a("新增失敗：網路錯誤", "error");
          } finally {
            u(!1);
          }
        }
      },
      ee = async () => {
        if (!s) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", s), l(!0);
        try {
          const P = await ke.getMedMapByDepartment(s);
          if (P.Code === 200 && P.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const T = At.convertMedMapApiToFakeData(P.Data);
            if (!At.validateConvertedData(T)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(T), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", P),
              a("資料更新失敗：API 錯誤", "error");
        } catch (P) {
          console.error("💥 重新獲取藥品地圖資料失敗:", P),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      S = () => {
        t();
      },
      U = () => {
        const P = d(),
          T = x(),
          se = [...P]
            .map((ae) => {
              const [Se, ue] = ae.split(",").map(Number);
              return { row: Se, col: ue };
            })
            .concat(T);
        se.length === 0 && se.push({ row: 0, col: 0 });
        const v = Math.max(...se.map((ae) => ae.row)),
          N = Math.max(...se.map((ae) => ae.col)),
          j = Math.min(...se.map((ae) => ae.row)),
          V = Math.min(...se.map((ae) => ae.col)),
          de = v - j + 1,
          te = N - V + 1;
        return r.jsxs("div", {
          className: "space-y-2",
          children: [
            r.jsx("h3", {
              className: "text-lg font-medium text-gray-900",
              children: "座標選擇",
            }),
            r.jsx("div", {
              className: "border border-gray-300 rounded-lg p-4 bg-gray-50",
              children: r.jsx("div", {
                className: "grid gap-2",
                style: { gridTemplateColumns: `repeat(${te}, 1fr)` },
                children: Array.from({ length: de * te }, (ae, Se) => {
                  const ue = Math.floor(Se / te) + j,
                    Ce = (Se % te) + V,
                    fe = `${ue},${Ce}`,
                    Y = P.has(fe),
                    pe = T.some((R) => R.row === ue && R.col === Ce),
                    be =
                      (h == null ? void 0 : h.row) === ue &&
                      (h == null ? void 0 : h.col) === Ce;
                  return r.jsx(
                    "button",
                    {
                      onClick: () => pe && k({ row: ue, col: Ce }),
                      disabled: Y || !pe,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      Y
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : be
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : pe
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: Y ? "已占用" : pe ? "可選擇" : "不可用",
                      children: Y ? "占用" : `${ue},${Ce}`,
                    },
                    fe
                  );
                }),
              }),
            }),
          ],
        });
      };
    return !e || !n
      ? null
      : r.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            r.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: S,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh", maxWidth: "800px" },
              onClick: (P) => P.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(vt, { className: "w-6 h-6 text-green-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "新增櫃體",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: S,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Fe, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 px-6 py-4 overflow-y-auto",
                  children: r.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      U(),
                      r.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          r.jsx("h3", {
                            className: "text-lg font-medium text-gray-900",
                            children: "手動輸入座標",
                          }),
                          r.jsxs("div", {
                            className: "flex items-center space-x-4",
                            children: [
                              r.jsxs("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                  r.jsx("label", {
                                    className:
                                      "text-sm font-medium text-gray-700",
                                    children: "行 (Row):",
                                  }),
                                  r.jsx("input", {
                                    type: "number",
                                    min: "0",
                                    value: f,
                                    onChange: (P) =>
                                      O(parseInt(P.target.value) || 0),
                                    className:
                                      "w-20 px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                ],
                              }),
                              r.jsxs("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                  r.jsx("label", {
                                    className:
                                      "text-sm font-medium text-gray-700",
                                    children: "列 (Column):",
                                  }),
                                  r.jsx("input", {
                                    type: "number",
                                    min: "0",
                                    value: w,
                                    onChange: (P) =>
                                      I(parseInt(P.target.value) || 0),
                                    className:
                                      "w-20 px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          h &&
                            r.jsx("div", {
                              className: `text-sm p-2 rounded ${
                                A
                                  ? "bg-green-50 text-green-700 border border-green-200"
                                  : "bg-red-50 text-red-700 border border-red-200"
                              }`,
                              children: A
                                ? `已選擇位置：${h.row},${h.col}`
                                : `位置 ${h.row},${h.col} 已被占用或無效`,
                            }),
                        ],
                      }),
                      r.jsxs("div", {
                        className:
                          "bg-gray-50 border border-gray-200 rounded-lg p-4",
                        children: [
                          r.jsx("h3", {
                            className: "text-lg font-medium text-gray-900 mb-2",
                            children: "部門資訊",
                          }),
                          r.jsxs("div", {
                            className: "text-sm text-gray-600",
                            children: [
                              r.jsxs("div", {
                                children: [
                                  "部門名稱：",
                                  (n == null ? void 0 : n.name) || "未知",
                                ],
                              }),
                              r.jsxs("div", {
                                children: [
                                  "部門類型：",
                                  (n == null ? void 0 : n.type) || "未知",
                                ],
                              }),
                              r.jsxs("div", {
                                children: [
                                  "現有父容器數量：",
                                  ((q = n == null ? void 0 : n.contents) == null
                                    ? void 0
                                    : q.filter(
                                        (P) => P.type === "parent_container"
                                      ).length) || 0,
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                r.jsxs("div", {
                  className:
                    "flex items-center justify-end space-x-3 px-6 py-4 border-t border-gray-200",
                  children: [
                    r.jsx("button", {
                      onClick: S,
                      disabled: C,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: g("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: _,
                      disabled: !A || C,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        C && r.jsx(jt, { className: "w-4 h-4 animate-spin" }),
                        r.jsx("span", { children: C ? "新增中..." : "新增" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  },
  wc = [
    {
      value: "dispensing_shelves",
      label: "藥盒層架",
      icon: r.jsx(sh, { className: "w-5 h-5" }),
      isShelf: !0,
    },
    {
      value: "store_shelves",
      label: "藥品層架",
      icon: r.jsx(Xm, { className: "w-5 h-5" }),
      isShelf: !0,
    },
    {
      value: "list_draw",
      label: "清單抽屜",
      icon: r.jsx(da, { className: "w-5 h-5" }),
      isShelf: !1,
    },
    {
      value: "grid_draw",
      label: "格線抽屜",
      icon: r.jsx(Ld, { className: "w-5 h-5" }),
      isShelf: !1,
    },
  ],
  Ch = () => {
    var de;
    const {
        addShelfDrawContainerModalOpen: e,
        closeAddShelfDrawContainerModal: t,
        selectedSubContainerForAdd: n,
        selectedDepartmentType: s,
        setApiDepartmentData: o,
        setIsLoadingMedMap: l,
        showNotification: a,
        triggerRefresh: i,
        setSidebarOpen: c,
      } = Qe(),
      { t: g } = mt(),
      [h, p] = m.useState("dispensing_shelves"),
      [f, b] = m.useState("1"),
      [w, M] = m.useState("1"),
      [C, u] = m.useState(""),
      [d, x] = m.useState(null),
      [k, O] = m.useState(0),
      [I, A] = m.useState(0),
      [_, ee] = m.useState(!1);
    m.useEffect(() => {
      e &&
        (p("dispensing_shelves"),
        b("1"),
        M("1"),
        u(""),
        x(null),
        O(0),
        A(0),
        ee(!1));
    }, [e]),
      m.useEffect(() => {
        d && (O(d.row), A(d.col));
      }, [d]);
    const S = () => {
        const te = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((ae) => {
              ae.gird_position && te.add(ae.gird_position);
            }),
          te
        );
      },
      U = () => {
        const te = S(),
          ae = [];
        if (te.size === 0) return ae.push({ row: 0, col: 0 }), ae;
        const Se = [];
        te.forEach((Ce) => {
          const [fe, Y] = Ce.split(",").map(Number);
          Se.push({ row: fe, col: Y });
        });
        const ue = new Set();
        return (
          Se.forEach(({ row: Ce, col: fe }) => {
            ue.add(`${Ce},${fe + 1}`),
              ue.add(`${Ce + 1},${fe}`),
              fe > 0 && ue.add(`${Ce},${fe - 1}`),
              Ce > 0 && ue.add(`${Ce - 1},${fe}`);
          }),
          ue.forEach((Ce) => {
            if (!te.has(Ce)) {
              const [fe, Y] = Ce.split(",").map(Number);
              fe >= 0 && Y >= 0 && ae.push({ row: fe, col: Y });
            }
          }),
          te.has("0,1") ||
            ae.some((fe) => fe.row === 0 && fe.col === 1) ||
            ae.push({ row: 0, col: 1 }),
          te.has("1,0") ||
            ae.some((fe) => fe.row === 1 && fe.col === 0) ||
            ae.push({ row: 1, col: 0 }),
          ae.sort((Ce, fe) =>
            Ce.row === fe.row ? Ce.col - fe.col : Ce.row - fe.row
          )
        );
      },
      q = (te) => {
        x(te);
      },
      P = (te) => {
        O(te), x({ row: te, col: I });
      },
      T = (te) => {
        A(te), x({ row: k, col: te });
      },
      se = d && !S().has(`${d.row},${d.col}`) && d.row >= 0 && d.col >= 0,
      v = async () => {
        if (!(!d || !n || !se)) {
          ee(!0);
          try {
            const te = `${d.row},${d.col}`,
              ae = wc.find((ue) => ue.value === h);
            let Se;
            ae != null && ae.isShelf
              ? (Se = await ke.addMedMapShelf({
                  Master_GUID: n.GUID,
                  position: te,
                  width: f,
                  height: w,
                  ip_light: C,
                  type: h,
                }))
              : (Se = await ke.addMedMapDrawer({
                  Master_GUID: n.GUID,
                  position: te,
                  width: f,
                  height: w,
                  ip_drawer: C,
                  type: h,
                })),
              Se.Code === 200
                ? (a("新增成功", "success"), t(), c(!1), await N())
                : a(`新增失敗：${Se.Result || "未知錯誤"}`, "error");
          } catch (te) {
            console.error("Add container failed:", te),
              a("新增失敗：網路錯誤", "error");
          } finally {
            ee(!1);
          }
        }
      },
      N = async () => {
        if (!s) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", s), l(!0);
        try {
          const te = await ke.getMedMapByDepartment(s);
          if (te.Code === 200 && te.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const ae = At.convertMedMapApiToFakeData(te.Data);
            if (!At.validateConvertedData(ae)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(ae), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", te),
              a("資料更新失敗：API 錯誤", "error");
        } catch (te) {
          console.error("💥 重新獲取藥品地圖資料失敗:", te),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      j = () => {
        t();
      },
      V = () => {
        const te = S(),
          ae = U(),
          Se = [...te]
            .map((R) => {
              const [me, z] = R.split(",").map(Number);
              return { row: me, col: z };
            })
            .concat(ae);
        Se.length === 0 && Se.push({ row: 0, col: 0 });
        const ue = Math.max(...Se.map((R) => R.row)),
          Ce = Math.max(...Se.map((R) => R.col)),
          fe = Math.min(...Se.map((R) => R.row)),
          Y = Math.min(...Se.map((R) => R.col)),
          pe = ue - fe + 1,
          be = Ce - Y + 1;
        return r.jsxs("div", {
          className: "space-y-2",
          children: [
            r.jsx("h3", {
              className: "text-lg font-medium text-gray-900",
              children: "座標選擇",
            }),
            r.jsx("div", {
              className: "border border-gray-300 rounded-lg p-4 bg-gray-50",
              children: r.jsx("div", {
                className: "grid gap-2",
                style: { gridTemplateColumns: `repeat(${be}, 1fr)` },
                children: Array.from({ length: pe * be }, (R, me) => {
                  const z = Math.floor(me / be) + fe,
                    D = (me % be) + Y,
                    ne = `${z},${D}`,
                    ie = te.has(ne),
                    B = ae.some((E) => E.row === z && E.col === D),
                    J =
                      (d == null ? void 0 : d.row) === z &&
                      (d == null ? void 0 : d.col) === D;
                  return r.jsx(
                    "button",
                    {
                      onClick: () => B && q({ row: z, col: D }),
                      disabled: ie || !B,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      ie
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : J
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : B
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: ie ? "已占用" : B ? "可選擇" : "不可用",
                      children: ie ? "占用" : `${z},${D}`,
                    },
                    ne
                  );
                }),
              }),
            }),
          ],
        });
      };
    return !e || !n
      ? null
      : r.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            r.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: j,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh", maxWidth: "1000px" },
              onClick: (te) => te.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(vt, { className: "w-6 h-6 text-green-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "新增層架/抽屜",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: j,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Fe, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 px-6 py-4 overflow-y-auto",
                  children: r.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      r.jsxs("div", {
                        className: "space-y-3",
                        children: [
                          r.jsx("h3", {
                            className: "text-lg font-medium text-gray-900",
                            children: "容器類型",
                          }),
                          r.jsx("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: wc.map((te) =>
                              r.jsxs(
                                "label",
                                {
                                  className: `flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                    h === te.value
                                      ? "border-blue-500 bg-blue-50"
                                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                  }`,
                                  children: [
                                    r.jsx("input", {
                                      type: "radio",
                                      name: "containerType",
                                      value: te.value,
                                      checked: h === te.value,
                                      onChange: (ae) => p(ae.target.value),
                                      className:
                                        "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 hidden",
                                    }),
                                    r.jsxs("div", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        te.icon,
                                        r.jsx("span", {
                                          className:
                                            "font-medium text-gray-900",
                                          children: te.label,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                te.value
                              )
                            ),
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [
                          r.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              r.jsx("label", {
                                className: "text-sm font-medium text-gray-700",
                                children: "寬度",
                              }),
                              r.jsx("input", {
                                type: "number",
                                min: "1",
                                value: f,
                                onChange: (te) => b(te.target.value),
                                className:
                                  "w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                              }),
                            ],
                          }),
                          r.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              r.jsx("label", {
                                className: "text-sm font-medium text-gray-700",
                                children: "高度",
                              }),
                              r.jsx("input", {
                                type: "number",
                                min: "1",
                                value: w,
                                onChange: (te) => M(te.target.value),
                                className:
                                  "w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                              }),
                            ],
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          r.jsx("label", {
                            className: "text-sm font-medium text-gray-700",
                            children: "IP 位址",
                          }),
                          r.jsx("input", {
                            type: "text",
                            value: C,
                            onChange: (te) => u(te.target.value),
                            placeholder: "請輸入 IP 位址",
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                          }),
                        ],
                      }),
                      V(),
                      r.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          r.jsx("h3", {
                            className: "text-lg font-medium text-gray-900",
                            children: "手動輸入座標",
                          }),
                          r.jsxs("div", {
                            className: "flex items-center space-x-4",
                            children: [
                              r.jsxs("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                  r.jsx("label", {
                                    className:
                                      "text-sm font-medium text-gray-700",
                                    children: "行 (Row):",
                                  }),
                                  r.jsx("input", {
                                    type: "number",
                                    min: "0",
                                    value: k,
                                    onChange: (te) =>
                                      P(parseInt(te.target.value) || 0),
                                    className:
                                      "w-20 px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                ],
                              }),
                              r.jsxs("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                  r.jsx("label", {
                                    className:
                                      "text-sm font-medium text-gray-700",
                                    children: "列 (Column):",
                                  }),
                                  r.jsx("input", {
                                    type: "number",
                                    min: "0",
                                    value: I,
                                    onChange: (te) =>
                                      T(parseInt(te.target.value) || 0),
                                    className:
                                      "w-20 px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          d &&
                            r.jsx("div", {
                              className: `text-sm p-2 rounded ${
                                se
                                  ? "bg-green-50 text-green-700 border border-green-200"
                                  : "bg-red-50 text-red-700 border border-red-200"
                              }`,
                              children: se
                                ? `已選擇位置：${d.row},${d.col}`
                                : `位置 ${d.row},${d.col} 已被占用或無效`,
                            }),
                        ],
                      }),
                      r.jsxs("div", {
                        className:
                          "bg-gray-50 border border-gray-200 rounded-lg p-4",
                        children: [
                          r.jsx("h3", {
                            className: "text-lg font-medium text-gray-900 mb-2",
                            children: "子容器資訊",
                          }),
                          r.jsxs("div", {
                            className: "text-sm text-gray-600",
                            children: [
                              r.jsxs("div", {
                                children: [
                                  "容器名稱：",
                                  (n == null ? void 0 : n.name) || "未知",
                                ],
                              }),
                              r.jsxs("div", {
                                children: [
                                  "容器類型：",
                                  (n == null ? void 0 : n.type) || "未知",
                                ],
                              }),
                              r.jsxs("div", {
                                children: [
                                  "現有內容數量：",
                                  ((de = n == null ? void 0 : n.contents) ==
                                  null
                                    ? void 0
                                    : de.length) || 0,
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                r.jsxs("div", {
                  className:
                    "flex items-center justify-end space-x-3 px-6 py-4 border-t border-gray-200",
                  children: [
                    r.jsx("button", {
                      onClick: j,
                      disabled: _,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: g("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: v,
                      disabled: !se || _,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        _ && r.jsx(jt, { className: "w-4 h-4 animate-spin" }),
                        r.jsx("span", { children: _ ? "新增中..." : "新增" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  },
  kh = () => {
    var q;
    const {
        addSubContainerModalOpen: e,
        closeAddSubContainerModal: t,
        selectedParentContainerForAdd: n,
        selectedDepartmentType: s,
        setApiDepartmentData: o,
        setIsLoadingMedMap: l,
        showNotification: a,
        triggerRefresh: i,
        setSidebarOpen: c,
      } = Qe(),
      { t: g } = mt(),
      [h, p] = m.useState(null),
      [f, b] = m.useState(0),
      [w, M] = m.useState(0),
      [C, u] = m.useState(!1);
    m.useEffect(() => {
      e && (p(null), b(0), M(0), u(!1));
    }, [e]),
      m.useEffect(() => {
        h && (b(h.row), M(h.col));
      }, [h]);
    const d = () => {
        const P = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((T) => {
              T.type === "sub_container" &&
                T.gird_position &&
                P.add(T.gird_position);
            }),
          P
        );
      },
      x = () => {
        const P = d(),
          T = [];
        if (P.size === 0) return T.push({ row: 0, col: 0 }), T;
        const se = [];
        P.forEach((N) => {
          const [j, V] = N.split(",").map(Number);
          se.push({ row: j, col: V });
        });
        const v = new Set();
        return (
          se.forEach(({ row: N, col: j }) => {
            v.add(`${N},${j + 1}`),
              v.add(`${N + 1},${j}`),
              j > 0 && v.add(`${N},${j - 1}`),
              N > 0 && v.add(`${N - 1},${j}`);
          }),
          v.forEach((N) => {
            if (!P.has(N)) {
              const [j, V] = N.split(",").map(Number);
              j >= 0 && V >= 0 && T.push({ row: j, col: V });
            }
          }),
          P.has("0,1") ||
            T.some((j) => j.row === 0 && j.col === 1) ||
            T.push({ row: 0, col: 1 }),
          P.has("1,0") ||
            T.some((j) => j.row === 1 && j.col === 0) ||
            T.push({ row: 1, col: 0 }),
          T.sort((N, j) => (N.row === j.row ? N.col - j.col : N.row - j.row))
        );
      },
      k = (P) => {
        p(P);
      },
      O = (P) => {
        b(P), p({ row: P, col: w });
      },
      I = (P) => {
        M(P), p({ row: f, col: P });
      },
      A = h && !d().has(`${h.row},${h.col}`) && h.row >= 0 && h.col >= 0,
      _ = async () => {
        if (!(!h || !n || !A)) {
          u(!0);
          try {
            const P = `${h.row},${h.col}`,
              T = await ke.addSubSection(n.GUID, P);
            T.Code === 200
              ? (a("新增成功", "success"), t(), c(!1), await ee())
              : a(`新增失敗：${T.Result || "未知錯誤"}`, "error");
          } catch (P) {
            console.error("Add sub container failed:", P),
              a("新增失敗：網路錯誤", "error");
          } finally {
            u(!1);
          }
        }
      },
      ee = async () => {
        if (!s) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", s), l(!0);
        try {
          const P = await ke.getMedMapByDepartment(s);
          if (P.Code === 200 && P.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const T = At.convertMedMapApiToFakeData(P.Data);
            if (!At.validateConvertedData(T)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(T), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", P),
              a("資料更新失敗：API 錯誤", "error");
        } catch (P) {
          console.error("💥 重新獲取藥品地圖資料失敗:", P),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      S = () => {
        t();
      },
      U = () => {
        const P = d(),
          T = x(),
          se = [...P]
            .map((ae) => {
              const [Se, ue] = ae.split(",").map(Number);
              return { row: Se, col: ue };
            })
            .concat(T);
        se.length === 0 && se.push({ row: 0, col: 0 });
        const v = Math.max(...se.map((ae) => ae.row)),
          N = Math.max(...se.map((ae) => ae.col)),
          j = Math.min(...se.map((ae) => ae.row)),
          V = Math.min(...se.map((ae) => ae.col)),
          de = v - j + 1,
          te = N - V + 1;
        return r.jsxs("div", {
          className: "space-y-2",
          children: [
            r.jsx("h3", {
              className: "text-lg font-medium text-gray-900",
              children: "座標選擇",
            }),
            r.jsx("div", {
              className: "border border-gray-300 rounded-lg p-4 bg-gray-50",
              children: r.jsx("div", {
                className: "grid gap-2",
                style: { gridTemplateColumns: `repeat(${te}, 1fr)` },
                children: Array.from({ length: de * te }, (ae, Se) => {
                  const ue = Math.floor(Se / te) + j,
                    Ce = (Se % te) + V,
                    fe = `${ue},${Ce}`,
                    Y = P.has(fe),
                    pe = T.some((R) => R.row === ue && R.col === Ce),
                    be =
                      (h == null ? void 0 : h.row) === ue &&
                      (h == null ? void 0 : h.col) === Ce;
                  return r.jsx(
                    "button",
                    {
                      onClick: () => pe && k({ row: ue, col: Ce }),
                      disabled: Y || !pe,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      Y
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : be
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : pe
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: Y ? "已占用" : pe ? "可選擇" : "不可用",
                      children: Y ? "占用" : `${ue},${Ce}`,
                    },
                    fe
                  );
                }),
              }),
            }),
          ],
        });
      };
    return !e || !n
      ? null
      : r.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            r.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: S,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh", maxWidth: "800px" },
              onClick: (P) => P.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(vt, { className: "w-6 h-6 text-green-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "新增虛擬容器",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: S,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Fe, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 px-6 py-4 overflow-y-auto",
                  children: r.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      U(),
                      r.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          r.jsx("h3", {
                            className: "text-lg font-medium text-gray-900",
                            children: "手動輸入座標",
                          }),
                          r.jsxs("div", {
                            className: "flex items-center space-x-4",
                            children: [
                              r.jsxs("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                  r.jsx("label", {
                                    className:
                                      "text-sm font-medium text-gray-700",
                                    children: "行 (Row):",
                                  }),
                                  r.jsx("input", {
                                    type: "number",
                                    min: "0",
                                    value: f,
                                    onChange: (P) =>
                                      O(parseInt(P.target.value) || 0),
                                    className:
                                      "w-20 px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                ],
                              }),
                              r.jsxs("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                  r.jsx("label", {
                                    className:
                                      "text-sm font-medium text-gray-700",
                                    children: "列 (Column):",
                                  }),
                                  r.jsx("input", {
                                    type: "number",
                                    min: "0",
                                    value: w,
                                    onChange: (P) =>
                                      I(parseInt(P.target.value) || 0),
                                    className:
                                      "w-20 px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          h &&
                            r.jsx("div", {
                              className: `text-sm p-2 rounded ${
                                A
                                  ? "bg-green-50 text-green-700 border border-green-200"
                                  : "bg-red-50 text-red-700 border border-red-200"
                              }`,
                              children: A
                                ? `已選擇位置：${h.row},${h.col}`
                                : `位置 ${h.row},${h.col} 已被占用或無效`,
                            }),
                        ],
                      }),
                      r.jsxs("div", {
                        className:
                          "bg-gray-50 border border-gray-200 rounded-lg p-4",
                        children: [
                          r.jsx("h3", {
                            className: "text-lg font-medium text-gray-900 mb-2",
                            children: "父容器資訊",
                          }),
                          r.jsxs("div", {
                            className: "text-sm text-gray-600",
                            children: [
                              r.jsxs("div", {
                                children: [
                                  "容器名稱：",
                                  (n == null ? void 0 : n.name) || "未知",
                                ],
                              }),
                              r.jsxs("div", {
                                children: [
                                  "容器類型：",
                                  (n == null ? void 0 : n.type) || "未知",
                                ],
                              }),
                              r.jsxs("div", {
                                children: [
                                  "現有子容器數量：",
                                  ((q = n == null ? void 0 : n.contents) == null
                                    ? void 0
                                    : q.filter(
                                        (P) => P.type === "sub_container"
                                      ).length) || 0,
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                r.jsxs("div", {
                  className:
                    "flex items-center justify-end space-x-3 px-6 py-4 border-t border-gray-200",
                  children: [
                    r.jsx("button", {
                      onClick: S,
                      disabled: C,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: g("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: _,
                      disabled: !A || C,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        C && r.jsx(jt, { className: "w-4 h-4 animate-spin" }),
                        r.jsx("span", { children: C ? "新增中..." : "新增" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  },
  Dh = ({ isOpen: e, onClose: t, storeShelf: n }) => {
    const {
        showNotification: s,
        medicineList: o,
        isLoadingMedicines: l,
        addStockToShelf: a,
        selectedStockItemForEdit: i,
        storeItemModalMode: c,
        updateStockInShelf: g,
      } = Qe(),
      [h, p] = m.useState(""),
      [f, b] = m.useState(""),
      [w, M] = m.useState(""),
      [C, u] = m.useState(""),
      [d, x] = m.useState([]),
      [k, O] = m.useState([]),
      [I, A] = m.useState(""),
      [_, ee] = m.useState(""),
      [S, U] = m.useState(""),
      [q, P] = m.useState(null),
      [T, se] = m.useState([]),
      [v, N] = m.useState(""),
      [j, V] = m.useState(!1),
      de = m.useRef(null);
    m.useEffect(() => {
      if (e && c === "edit" && i) {
        p(i.code || ""), b(i.name || ""), M(""), u(i.material_no || "");
        const R = i.lot || [],
          me = i.expiry_date || [],
          z = i.qty || [],
          D = [];
        if (R.length > 0 || me.length > 0 || z.length > 0) {
          const ne = Math.max(R.length, me.length, z.length),
            ie = [];
          for (let B = 0; B < ne; B++) {
            const J = me[B] || "";
            let E = "";
            J && (E = J.split("T")[0]),
              (E = E.replace(/\//g, "-")),
              ie.push({
                id: `batch_${Date.now()}_${B}`,
                lot: R[B] || "",
                expiryDate: E,
                qty: String(z[B] || ""),
              }),
              E && D.push(E);
          }
          x(ie), O(D);
        } else x([]), O([]);
        A(i.location || ""), ee(i.led_index || ""), U(i.ip || "");
      } else
        e &&
          c === "add" &&
          (p(""), b(""), M(""), u(""), x([]), O([]), A(""), ee(""), U(""));
    }, [e, c, i]),
      m.useEffect(() => {
        const R = (me) => {
          de.current && !de.current.contains(me.target) && P(null);
        };
        return (
          document.addEventListener("mousedown", R),
          () => {
            document.removeEventListener("mousedown", R);
          }
        );
      }, []);
    const te = (R, me) => {
        if (!me.trim()) {
          se([]);
          return;
        }
        const z = me.toLowerCase(),
          D = o.filter((ne) => {
            var ie, B, J, E;
            switch (R) {
              case "code":
                return (ie = ne.CODE) == null
                  ? void 0
                  : ie.toLowerCase().includes(z);
              case "name":
                return (B = ne.NAME) == null
                  ? void 0
                  : B.toLowerCase().includes(z);
              case "chineseName":
                return (J = ne.CHT_NAME) == null
                  ? void 0
                  : J.toLowerCase().includes(z);
              case "skdiacode":
                return (E = ne.SKDIACODE) == null
                  ? void 0
                  : E.toLowerCase().includes(z);
              default:
                return !1;
            }
          });
        se(D.slice(0, 50));
      },
      ae = (R, me) => {
        switch ((P(R), R)) {
          case "code":
            p(me);
            break;
          case "name":
            b(me);
            break;
          case "chineseName":
            M(me);
            break;
          case "skdiacode":
            u(me);
            break;
        }
        te(R, me);
      },
      Se = (R, me) => {
        switch (me) {
          case "code":
            p(R.CODE || ""),
              b(R.NAME || ""),
              M(R.CHT_NAME || ""),
              u(R.SKDIACODE || "");
            break;
          case "name":
            p(R.CODE || ""),
              b(R.NAME || ""),
              M(R.CHT_NAME || ""),
              u(R.SKDIACODE || "");
            break;
          case "chineseName":
            p(R.CODE || ""),
              b(R.NAME || ""),
              M(R.CHT_NAME || ""),
              u(R.SKDIACODE || "");
            break;
          case "skdiacode":
            p(R.CODE || ""),
              b(R.NAME || ""),
              M(R.CHT_NAME || ""),
              u(R.SKDIACODE || "");
            break;
        }
        N(R.GUID), P(null), se([]);
      },
      ue = () => {
        const R = {
          id: `batch_${Date.now()}`,
          lot: "",
          expiryDate: "",
          qty: "",
        };
        x([...d, R]);
      },
      Ce = (R) => {
        x(d.filter((me) => me.id !== R));
      },
      fe = (R, me, z) => {
        x(d.map((D) => (D.id === R ? { ...D, [me]: z } : D)));
      },
      Y = async () => {
        var D;
        if (!h || !f) {
          s("請選擇藥品", "error");
          return;
        }
        if (!n || !n.GUID) {
          s("層架資訊錯誤", "error");
          return;
        }
        const R = [],
          me = [],
          z = [];
        d.forEach((ne) => {
          R.push(ne.lot || "");
          let ie = "";
          ne.expiryDate && (ie = `${ne.expiryDate}`),
            me.push(ie),
            z.push(ne.qty ? `${Number(ne.qty)}` : "0");
        });
        try {
          if (c === "edit" && i) {
            const ne = {
                GUID: i.GUID,
                code: h,
                device_type: "EPD290",
                expiry_date: me,
                ip: S || "",
                led_index: _ || "",
                location: I || "",
                lot: R,
                material_no: C || "",
                name: f,
                qty: z,
                shelf_guid: n.GUID,
              },
              ie = await ke.updateStock([ne]);
            if (ie.Code === 200) {
              g(n.GUID, i.GUID, ne), console.log("檢查有無貨物批次被刪除");
              const B = k.filter((J) => !me.includes(J));
              if ((console.log(B), B.length > 0)) {
                console.log("🗑️ 檢測到被刪除的批次效期:", B);
                let J = "";
                try {
                  i.Value &&
                    ((J = JSON.parse(i.Value).GUID || ""),
                    console.log("📦 從 Value 欄位解析出的 GUID:", J));
                } catch (E) {
                  console.error("❌ 解析 Value 欄位失敗:", E);
                }
                if (J) {
                  for (const E of B)
                    try {
                      console.log(`🗑️ 正在刪除批次，GUID: ${J}, 效期: ${E}`);
                      const F = await ke.stockDeleteValidityPeriod(J, E);
                      F.Code === 200
                        ? console.log(`✅ 成功刪除批次效期: ${E}`)
                        : console.warn(
                            `⚠️ 刪除批次失敗 (效期: ${E}):`,
                            F.Result
                          );
                    } catch (F) {
                      console.error(`❌ 刪除批次時發生錯誤 (效期: ${E}):`, F);
                    }
                  s(`更新貨物成功，已刪除 ${B.length} 個批次`, "success");
                } else
                  console.warn("⚠️ 無法取得 Value GUID，跳過批次刪除"),
                    s("更新貨物成功（但無法刪除批次）", "success");
              } else s("更新貨物成功", "success");
              be();
            } else s(ie.Result || "更新貨物失敗", "error");
          } else {
            const ne = {
                code: h,
                device_type: "EPD290",
                expiry_date: me,
                ip: S || "",
                led_index: _ || "",
                location: I || "",
                lot: R,
                material_no: C || "",
                name: f,
                qty: z,
                shelf_guid: n.GUID,
              },
              ie = await ke.addStock([ne]);
            ie.Code === 200
              ? (a(n.GUID, {
                  GUID:
                    ((D = ie.Data) == null ? void 0 : D.GUID) ||
                    `stock_${Date.now()}`,
                  ...ne,
                }),
                s("新增貨物成功", "success"),
                be())
              : s(ie.Result || "新增貨物失敗", "error");
          }
        } catch (ne) {
          console.error("貨物操作錯誤:", ne),
            s(
              c === "edit"
                ? "更新貨物失敗，請稍後再試"
                : "新增貨物失敗，請稍後再試",
              "error"
            );
        }
      },
      pe = (R, me) => {
        console.log("📸 掃描成功，填入藥品資料:", me),
          p(me[0].CODE || me[0].code || ""),
          b(me[0].NAME || me[0].name || ""),
          M(me[0].CHT_NAME || me[0].cht_name || ""),
          u(me[0].SKDIACODE || me[0].skdiacode || me[0].material_no || ""),
          N(me[0].GUID || ""),
          V(!1),
          s("已自動填入藥品資料", "success");
      },
      be = () => {
        p(""),
          b(""),
          M(""),
          u(""),
          x([]),
          O([]),
          A(""),
          ee(""),
          U(""),
          N(""),
          se([]),
          P(null),
          t();
      };
    return e
      ? r.jsxs("div", {
          className:
            "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
          children: [
            r.jsxs("div", {
              className:
                "bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto",
              children: [
                r.jsxs("div", {
                  className:
                    "sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between z-10",
                  children: [
                    r.jsx("h2", {
                      className: "text-xl font-bold text-gray-800",
                      children: c === "edit" ? "編輯貨物" : "新增貨物",
                    }),
                    r.jsx("button", {
                      onClick: be,
                      className:
                        "p-2 hover:bg-gray-100 rounded-full transition-colors",
                      children: r.jsx(Fe, { className: "w-5 h-5" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "p-6 space-y-6",
                  children: l
                    ? r.jsxs("div", {
                        className: "text-center py-8",
                        children: [
                          r.jsx("div", {
                            className:
                              "inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent",
                          }),
                          r.jsx("p", {
                            className: "mt-2 text-gray-600",
                            children: "載入藥品資料中...",
                          }),
                        ],
                      })
                    : o.length === 0
                    ? r.jsxs("div", {
                        className: "text-center py-8",
                        children: [
                          r.jsx("p", {
                            className: "text-gray-600",
                            children: "藥品資料尚未載入，請稍後再試",
                          }),
                          r.jsx("p", {
                            className: "text-sm text-gray-500 mt-2",
                            children: "或檢查網路連線",
                          }),
                        ],
                      })
                    : r.jsxs(r.Fragment, {
                        children: [
                          r.jsxs("div", {
                            className: "space-y-4",
                            children: [
                              r.jsxs("div", {
                                className:
                                  "flex w-full border-b items-center pb-1",
                                children: [
                                  r.jsx("h3", {
                                    className:
                                      "text-lg font-semibold text-gray-700 mr-6",
                                    children: "藥品資訊",
                                  }),
                                  r.jsx("button", {
                                    onClick: () => V(!0),
                                    className:
                                      "hover:bg-gray-100 rounded-lg transition-colors p-2",
                                    title: "掃描條碼",
                                    children: r.jsx(_r, {
                                      className: "w-7 h-7 text-blue-600",
                                    }),
                                  }),
                                ],
                              }),
                              r.jsxs("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                  r.jsxs("div", {
                                    className: "relative",
                                    ref: q === "code" ? de : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "藥碼",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: h,
                                        onChange: (R) =>
                                          ae("code", R.target.value),
                                        onFocus: () => P("code"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入藥品代碼",
                                      }),
                                      q === "code" &&
                                        T.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: T.map((R) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () => Se(R, "code"),
                                                className:
                                                  "px-3 py-2 hover:bg-blue-50 cursor-pointer border-b last:border-b-0",
                                                children: [
                                                  r.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2 text-sm",
                                                    children: [
                                                      r.jsx("span", {
                                                        className:
                                                          "font-medium text-gray-900",
                                                        children: R.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: R.NAME,
                                                      }),
                                                    ],
                                                  }),
                                                  r.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2 text-xs mt-1",
                                                    children: [
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: R.CHT_NAME,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-400",
                                                        children: "|",
                                                      }),
                                                      r.jsxs("span", {
                                                        className:
                                                          "text-gray-500",
                                                        children: [
                                                          "料號: ",
                                                          R.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              R.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    className: "relative",
                                    ref: q === "name" ? de : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "藥名",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: f,
                                        onChange: (R) =>
                                          ae("name", R.target.value),
                                        onFocus: () => P("name"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入藥品名稱",
                                      }),
                                      q === "name" &&
                                        T.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: T.map((R) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () => Se(R, "name"),
                                                className:
                                                  "px-3 py-2 hover:bg-blue-50 cursor-pointer border-b last:border-b-0",
                                                children: [
                                                  r.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2 text-sm",
                                                    children: [
                                                      r.jsx("span", {
                                                        className:
                                                          "font-medium text-gray-900",
                                                        children: R.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: R.NAME,
                                                      }),
                                                    ],
                                                  }),
                                                  r.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2 text-xs mt-1",
                                                    children: [
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: R.CHT_NAME,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-400",
                                                        children: "|",
                                                      }),
                                                      r.jsxs("span", {
                                                        className:
                                                          "text-gray-500",
                                                        children: [
                                                          "料號: ",
                                                          R.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              R.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    className: "relative",
                                    ref: q === "chineseName" ? de : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "中文名",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: w,
                                        onChange: (R) =>
                                          ae("chineseName", R.target.value),
                                        onFocus: () => P("chineseName"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入中文名稱",
                                      }),
                                      q === "chineseName" &&
                                        T.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: T.map((R) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () =>
                                                  Se(R, "chineseName"),
                                                className:
                                                  "px-3 py-2 hover:bg-blue-50 cursor-pointer border-b last:border-b-0",
                                                children: [
                                                  r.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2 text-sm",
                                                    children: [
                                                      r.jsx("span", {
                                                        className:
                                                          "font-medium text-gray-900",
                                                        children: R.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: R.NAME,
                                                      }),
                                                    ],
                                                  }),
                                                  r.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2 text-xs mt-1",
                                                    children: [
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: R.CHT_NAME,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-400",
                                                        children: "|",
                                                      }),
                                                      r.jsxs("span", {
                                                        className:
                                                          "text-gray-500",
                                                        children: [
                                                          "料號: ",
                                                          R.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              R.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    className: "relative",
                                    ref: q === "skdiacode" ? de : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "料號",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: C,
                                        onChange: (R) =>
                                          ae("skdiacode", R.target.value),
                                        onFocus: () => P("skdiacode"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入料號",
                                      }),
                                      q === "skdiacode" &&
                                        T.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: T.map((R) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () =>
                                                  Se(R, "skdiacode"),
                                                className:
                                                  "px-3 py-2 hover:bg-blue-50 cursor-pointer border-b last:border-b-0",
                                                children: [
                                                  r.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2 text-sm",
                                                    children: [
                                                      r.jsx("span", {
                                                        className:
                                                          "font-medium text-gray-900",
                                                        children: R.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: R.NAME,
                                                      }),
                                                    ],
                                                  }),
                                                  r.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2 text-xs mt-1",
                                                    children: [
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: R.CHT_NAME,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-400",
                                                        children: "|",
                                                      }),
                                                      r.jsxs("span", {
                                                        className:
                                                          "text-gray-500",
                                                        children: [
                                                          "料號: ",
                                                          R.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              R.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          r.jsxs("div", {
                            className: "space-y-4",
                            children: [
                              r.jsxs("div", {
                                className:
                                  "flex items-center justify-between border-b pb-2",
                                children: [
                                  r.jsx("h3", {
                                    className:
                                      "text-lg font-semibold text-gray-700",
                                    children: "批次資訊",
                                  }),
                                  r.jsxs("button", {
                                    onClick: ue,
                                    className:
                                      "flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",
                                    title: "新增批次",
                                    children: [
                                      r.jsx(vt, { className: "w-4 h-4" }),
                                      "新增批次",
                                    ],
                                  }),
                                ],
                              }),
                              d.length === 0
                                ? r.jsxs("div", {
                                    className:
                                      "text-center py-6 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300",
                                    children: [
                                      r.jsx("p", {
                                        className: "text-gray-500",
                                        children: "暫無藥品批號資訊",
                                      }),
                                      r.jsx("p", {
                                        className: "text-sm text-gray-400 mt-1",
                                        children:
                                          "點擊上方「新增批次」按鈕開始添加",
                                      }),
                                    ],
                                  })
                                : r.jsx("div", {
                                    className: "space-y-3",
                                    children: d.map((R, me) =>
                                      r.jsxs(
                                        "div",
                                        {
                                          className:
                                            "bg-gray-50 rounded-lg p-4 border border-gray-200",
                                          children: [
                                            r.jsxs("div", {
                                              className:
                                                "flex items-center justify-between mb-3",
                                              children: [
                                                r.jsxs("span", {
                                                  className:
                                                    "text-sm font-medium text-gray-700",
                                                  children: ["批次 ", me + 1],
                                                }),
                                                r.jsx("button", {
                                                  onClick: () => Ce(R.id),
                                                  className:
                                                    "p-1 text-red-600 hover:bg-red-50 rounded transition-colors",
                                                  title: "刪除批次",
                                                  children: r.jsx(lh, {
                                                    className: "w-4 h-4",
                                                  }),
                                                }),
                                              ],
                                            }),
                                            r.jsxs("div", {
                                              className:
                                                "grid grid-cols-3 gap-3",
                                              children: [
                                                r.jsxs("div", {
                                                  children: [
                                                    r.jsx("label", {
                                                      className:
                                                        "block text-xs font-medium text-gray-600 mb-1",
                                                      children: "批號",
                                                    }),
                                                    r.jsx("input", {
                                                      type: "text",
                                                      value: R.lot,
                                                      onChange: (z) =>
                                                        fe(
                                                          R.id,
                                                          "lot",
                                                          z.target.value
                                                        ),
                                                      className:
                                                        "w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                      placeholder: "輸入批號",
                                                    }),
                                                  ],
                                                }),
                                                r.jsxs("div", {
                                                  children: [
                                                    r.jsx("label", {
                                                      className:
                                                        "block text-xs font-medium text-gray-600 mb-1",
                                                      children: "效期",
                                                    }),
                                                    r.jsx("input", {
                                                      type: "date",
                                                      value: R.expiryDate,
                                                      onChange: (z) =>
                                                        fe(
                                                          R.id,
                                                          "expiryDate",
                                                          z.target.value
                                                        ),
                                                      className:
                                                        "w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                    }),
                                                  ],
                                                }),
                                                r.jsxs("div", {
                                                  children: [
                                                    r.jsx("label", {
                                                      className:
                                                        "block text-xs font-medium text-gray-600 mb-1",
                                                      children: "數量",
                                                    }),
                                                    r.jsx("input", {
                                                      type: "number",
                                                      value: R.qty,
                                                      onChange: (z) =>
                                                        fe(
                                                          R.id,
                                                          "qty",
                                                          z.target.value
                                                        ),
                                                      className:
                                                        "w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                      placeholder: "輸入數量",
                                                      min: "0",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        },
                                        R.id
                                      )
                                    ),
                                  }),
                            ],
                          }),
                          r.jsxs("div", {
                            className: "space-y-4",
                            children: [
                              r.jsx("h3", {
                                className:
                                  "text-lg font-semibold text-gray-700 border-b pb-2",
                                children: "位置與設備資訊",
                              }),
                              r.jsxs("div", {
                                className: "grid grid-cols-3 gap-4",
                                children: [
                                  r.jsxs("div", {
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "位置",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: I,
                                        onChange: (R) => A(R.target.value),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入位置",
                                      }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "LED 索引",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: _,
                                        onChange: (R) => ee(R.target.value),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入 LED 索引",
                                      }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "電子紙 IP",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: S,
                                        onChange: (R) => U(R.target.value),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入電子紙 IP",
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
                r.jsxs("div", {
                  className:
                    "sticky bottom-0 bg-gray-50 px-6 py-4 border-t flex justify-end space-x-3",
                  children: [
                    r.jsx("button", {
                      onClick: be,
                      className:
                        "px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
                      children: "取消",
                    }),
                    r.jsx("button", {
                      onClick: Y,
                      disabled: l || o.length === 0,
                      className:
                        "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400",
                      children: c === "edit" ? "修改" : "新增",
                    }),
                  ],
                }),
              ],
            }),
            r.jsx(Ho, {
              isOpen: j,
              onClose: () => V(!1),
              onScanSuccess: pe,
              mode: "set_store_med_mode",
            }),
          ],
        })
      : null;
  },
  _h = ({ isOpen: e, onClose: t }) => {
    const {
        selectedDepartmentType: n,
        apiDepartmentData: s,
        allDepartmentsList: o,
        showNotification: l,
        triggerRefresh: a,
        reloadMedMapData: i,
      } = Qe(),
      [c, g] = m.useState(null),
      [h, p] = m.useState(""),
      [f, b] = m.useState(!1),
      w = () => (s ? s.map((A) => A.name) : []),
      M = () => (!n || !o ? [] : o.filter((A) => A["department_type "] === n)),
      C = () => {
        const A = w();
        return M().filter((ee) => !A.includes(ee.name));
      },
      u = () => (s ? s.map((A) => A.gird_position) : []),
      d = () => {
        const A = u(),
          _ = [];
        for (let ee = 0; ee < 10; ee++)
          for (let S = 0; S < 10; S++) {
            const U = `${ee},${S}`;
            A.includes(U) || _.push(U);
          }
        return _.slice(0, 20);
      };
    m.useEffect(() => {
      e && (g(null), p(""));
    }, [e]);
    const x = async () => {
        if (!c) {
          l("請選擇部門", "error");
          return;
        }
        if (!h) {
          l("請選擇位置", "error");
          return;
        }
        if (!n) {
          l("部門分類資訊錯誤", "error");
          return;
        }
        b(!0);
        try {
          const A = await ke.addMedMap(c.name, c.type, h);
          A.Code === 200
            ? (l("新增部門成功", "success"), await i(), k())
            : l(A.Result || "新增部門失敗", "error");
        } catch (A) {
          console.error("新增部門錯誤:", A),
            l("新增部門失敗，請稍後再試", "error");
        } finally {
          b(!1);
        }
      },
      k = () => {
        g(null), p(""), t();
      };
    if (!e) return null;
    const O = C(),
      I = d();
    return r.jsx("div", {
      className:
        "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
      children: r.jsxs("div", {
        className:
          "bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto",
        children: [
          r.jsxs("div", {
            className:
              "sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between",
            children: [
              r.jsx("h2", {
                className: "text-xl font-bold text-gray-800",
                children: "新增部門",
              }),
              r.jsx("button", {
                onClick: k,
                className:
                  "p-2 hover:bg-gray-100 rounded-full transition-colors",
                children: r.jsx(Fe, { className: "w-5 h-5" }),
              }),
            ],
          }),
          r.jsxs("div", {
            className: "p-6 space-y-6",
            children: [
              n &&
                r.jsx("div", {
                  className: "bg-blue-50 border border-blue-200 rounded-lg p-4",
                  children: r.jsxs("p", {
                    className: "text-sm font-medium text-blue-900",
                    children: [
                      "部門分類：",
                      r.jsx("span", { className: "font-bold", children: n }),
                    ],
                  }),
                }),
              r.jsxs("div", {
                className: "space-y-4",
                children: [
                  r.jsx("h3", {
                    className:
                      "text-lg font-semibold text-gray-700 border-b pb-2",
                    children: "選擇部門",
                  }),
                  O.length === 0
                    ? r.jsx("div", {
                        className: "text-center py-8",
                        children: r.jsx("p", {
                          className: "text-gray-600",
                          children: "所有部門都已新增",
                        }),
                      })
                    : r.jsx("div", {
                        className: "space-y-2",
                        children: O.map((A) =>
                          r.jsxs(
                            "label",
                            {
                              className: `flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                (c == null ? void 0 : c.name) === A.name
                                  ? "border-blue-500 bg-blue-50"
                                  : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                              }`,
                              children: [
                                r.jsx("input", {
                                  type: "radio",
                                  name: "department",
                                  value: A.name,
                                  checked:
                                    (c == null ? void 0 : c.name) === A.name,
                                  onChange: () => g(A),
                                  className:
                                    "w-4 h-4 text-blue-600 focus:ring-blue-500",
                                }),
                                r.jsxs("div", {
                                  className: "ml-3",
                                  children: [
                                    r.jsx("div", {
                                      className:
                                        "text-sm font-medium text-gray-900",
                                      children: A.name,
                                    }),
                                    r.jsx("div", {
                                      className: "text-xs text-gray-500",
                                      children: A.type,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            A.name
                          )
                        ),
                      }),
                ],
              }),
              c &&
                r.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    r.jsx("h3", {
                      className:
                        "text-lg font-semibold text-gray-700 border-b pb-2",
                      children: "選擇位置",
                    }),
                    I.length === 0
                      ? r.jsx("div", {
                          className: "text-center py-8",
                          children: r.jsx("p", {
                            className: "text-gray-600",
                            children: "沒有可用的位置",
                          }),
                        })
                      : r.jsx("div", {
                          className: "grid grid-cols-5 gap-2",
                          children: I.map((A) => {
                            const [_, ee] = A.split(",");
                            return r.jsxs(
                              "button",
                              {
                                onClick: () => p(A),
                                className: `p-3 border-2 rounded-lg text-sm font-medium transition-all ${
                                  h === A
                                    ? "border-blue-500 bg-blue-500 text-white"
                                    : "border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700"
                                }`,
                                children: ["(", _, ",", ee, ")"],
                              },
                              A
                            );
                          }),
                        }),
                  ],
                }),
            ],
          }),
          r.jsxs("div", {
            className:
              "sticky bottom-0 bg-gray-50 px-6 py-4 border-t flex justify-end space-x-3",
            children: [
              r.jsx("button", {
                onClick: k,
                className:
                  "px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
                disabled: f,
                children: "取消",
              }),
              r.jsx("button", {
                onClick: x,
                disabled: !c || !h || f,
                className:
                  "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                children: f ? "新增中..." : "新增",
              }),
            ],
          }),
        ],
      }),
    });
  },
  Mh = ({ isOpen: e, onClose: t, initialBarcode: n = "" }) => {
    const {
        showNotification: s,
        medicineList: o,
        isLoadingMedicines: l,
      } = Qe(),
      [a, i] = m.useState(""),
      [c, g] = m.useState(""),
      [h, p] = m.useState(""),
      [f, b] = m.useState(""),
      [w, M] = m.useState(""),
      [C, u] = m.useState(null),
      [d, x] = m.useState([]),
      [k, O] = m.useState(""),
      [I, A] = m.useState(null),
      [_, ee] = m.useState(!1),
      S = m.useRef(null);
    m.useEffect(() => {
      e && (i(n), g(""), p(""), b(""), M(""), O(""), A(null), u(null));
    }, [e, n]),
      m.useEffect(() => {
        const v = (N) => {
          S.current && !S.current.contains(N.target) && u(null);
        };
        return (
          document.addEventListener("mousedown", v),
          () => {
            document.removeEventListener("mousedown", v);
          }
        );
      }, []);
    const U = (v, N) => {
        if (!N.trim() || l) {
          x([]);
          return;
        }
        const j = N.toLowerCase(),
          V = o.filter((de) => {
            var te, ae, Se, ue;
            switch (v) {
              case "code":
                return (te = de.CODE) == null
                  ? void 0
                  : te.toLowerCase().includes(j);
              case "name":
                return (ae = de.NAME) == null
                  ? void 0
                  : ae.toLowerCase().includes(j);
              case "chineseName":
                return (Se = de.CHT_NAME) == null
                  ? void 0
                  : Se.toLowerCase().includes(j);
              case "skdiacode":
                return (ue = de.SKDIACODE) == null
                  ? void 0
                  : ue.toLowerCase().includes(j);
              default:
                return !1;
            }
          });
        x(V.slice(0, 10));
      },
      q = (v, N) => {
        switch ((u(v), v)) {
          case "code":
            g(N);
            break;
          case "name":
            p(N);
            break;
          case "chineseName":
            b(N);
            break;
          case "skdiacode":
            M(N);
            break;
        }
        U(v, N);
      },
      P = (v) => {
        O(v.GUID),
          A(v),
          g(v.CODE || ""),
          p(v.NAME || ""),
          b(v.CHT_NAME || ""),
          M(v.SKDIACODE || ""),
          u(null),
          x([]);
      },
      T = () => {
        i(""), g(""), p(""), b(""), M(""), O(""), A(null), u(null), x([]), t();
      },
      se = async () => {
        if (!c.trim()) {
          s("藥碼為必填欄位", "error");
          return;
        }
        if (!a.trim()) {
          s("條碼不能為空", "error");
          return;
        }
        ee(!0);
        try {
          let v = [];
          if (I && I.BARCODE2)
            try {
              const j = JSON.parse(I.BARCODE2);
              Array.isArray(j)
                ? (v = [...j])
                : typeof j == "string" && (v = [j]);
            } catch {
              console.warn("解析 BARCODE2 失敗，使用原始值:", I.BARCODE2),
                I.BARCODE2 && (v = [I.BARCODE2]);
            }
          v.includes(a.trim()) || v.push(a.trim()),
            console.log("📋 處理後的 BARCODE2 陣列:", v);
          const N = await ke.addMedClouds(
            a.trim(),
            c.trim(),
            JSON.stringify(v),
            I.BARCODE
          );
          N.Code === 200
            ? (s("條碼建立成功", "success"), T())
            : s(N.Result || "建立條碼失敗", "error");
        } catch (v) {
          console.error("建立條碼失敗:", v),
            s("建立條碼失敗，請稍後再試", "error");
        } finally {
          ee(!1);
        }
      };
    return e
      ? r.jsx("div", {
          className:
            "fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4",
          children: r.jsxs("div", {
            className:
              "bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col",
            children: [
              r.jsxs("div", {
                className: "flex items-center justify-between p-2 border-b",
                children: [
                  r.jsxs("div", {
                    className: "flex items-center space-x-3",
                    children: [
                      r.jsx("div", {
                        className: "w-10 h-10 flex items-center justify-center",
                        children: r.jsx(vt, {
                          className: "w-6 h-6 text-blue-500",
                        }),
                      }),
                      r.jsx("h2", {
                        className: "text-lg font-semibold text-gray-900",
                        children: "建立條碼",
                      }),
                    ],
                  }),
                  r.jsx("button", {
                    onClick: T,
                    className:
                      "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                    disabled: _,
                    children: r.jsx(Fe, { className: "w-6 h-6 text-gray-600" }),
                  }),
                ],
              }),
              r.jsx("div", {
                className: "flex-1 overflow-y-auto p-6",
                children: r.jsxs("div", {
                  className: "space-y-4",
                  ref: S,
                  children: [
                    r.jsxs("div", {
                      children: [
                        r.jsx("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: "條碼",
                        }),
                        r.jsx("input", {
                          type: "text",
                          value: a,
                          disabled: !0,
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed",
                        }),
                      ],
                    }),
                    r.jsxs("div", {
                      className: "relative",
                      children: [
                        r.jsxs("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: [
                            "藥碼 ",
                            r.jsx("span", {
                              className: "text-red-500",
                              children: "*",
                            }),
                          ],
                        }),
                        r.jsx("input", {
                          type: "text",
                          value: c,
                          onChange: (v) => q("code", v.target.value),
                          onFocus: () => u("code"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入藥碼搜尋...",
                          disabled: _,
                        }),
                        C === "code" &&
                          d.length > 0 &&
                          r.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: d.map((v) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => P(v),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    r.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: v.CODE,
                                    }),
                                    r.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: v.NAME,
                                    }),
                                  ],
                                },
                                v.GUID
                              )
                            ),
                          }),
                      ],
                    }),
                    r.jsxs("div", {
                      className: "relative",
                      children: [
                        r.jsx("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: "藥名",
                        }),
                        r.jsx("input", {
                          type: "text",
                          value: h,
                          onChange: (v) => q("name", v.target.value),
                          onFocus: () => u("name"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入藥名搜尋...",
                          disabled: _,
                        }),
                        C === "name" &&
                          d.length > 0 &&
                          r.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: d.map((v) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => P(v),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    r.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: v.NAME,
                                    }),
                                    r.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: v.CODE,
                                    }),
                                  ],
                                },
                                v.GUID
                              )
                            ),
                          }),
                      ],
                    }),
                    r.jsxs("div", {
                      className: "relative",
                      children: [
                        r.jsx("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: "中文名",
                        }),
                        r.jsx("input", {
                          type: "text",
                          value: f,
                          onChange: (v) => q("chineseName", v.target.value),
                          onFocus: () => u("chineseName"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入中文名搜尋...",
                          disabled: _,
                        }),
                        C === "chineseName" &&
                          d.length > 0 &&
                          r.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: d.map((v) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => P(v),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    r.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: v.CHT_NAME,
                                    }),
                                    r.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: v.CODE,
                                    }),
                                  ],
                                },
                                v.GUID
                              )
                            ),
                          }),
                      ],
                    }),
                    r.jsxs("div", {
                      className: "relative",
                      children: [
                        r.jsx("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: "料號",
                        }),
                        r.jsx("input", {
                          type: "text",
                          value: w,
                          onChange: (v) => q("skdiacode", v.target.value),
                          onFocus: () => u("skdiacode"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入料號搜尋...",
                          disabled: _,
                        }),
                        C === "skdiacode" &&
                          d.length > 0 &&
                          r.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: d.map((v) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => P(v),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    r.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: v.SKDIACODE,
                                    }),
                                    r.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: v.NAME,
                                    }),
                                  ],
                                },
                                v.GUID
                              )
                            ),
                          }),
                      ],
                    }),
                    l &&
                      r.jsx("div", {
                        className: "text-center py-2 text-gray-500 text-sm",
                        children: "載入藥品資料中...",
                      }),
                  ],
                }),
              }),
              r.jsx("div", {
                className: "p-6 border-t border-gray-200 bg-gray-50",
                children: r.jsxs("div", {
                  className: "flex justify-end space-x-3",
                  children: [
                    r.jsx("button", {
                      onClick: T,
                      disabled: _,
                      className:
                        "px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: "取消",
                    }),
                    r.jsx("button", {
                      onClick: se,
                      disabled: _ || !c.trim(),
                      className:
                        "px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: _ ? "建立中..." : "確認建立",
                    }),
                  ],
                }),
              }),
            ],
          }),
        })
      : null;
  },
  Eh = ({
    container: e,
    highlightedMedicineCode: t,
    pendingRequisitionCodes: n = [],
    onMedicineClick: s,
  }) => {
    const o = () => {
        try {
          const p = localStorage.getItem("medMap_setting");
          if (p) return JSON.parse(p).light_color || "red";
        } catch (p) {
          console.error("讀取高亮顏色設定失敗:", p);
        }
        return "red";
      },
      l = (p) => {
        const [f, b] = p.split(",").map(Number);
        return { row: f || 0, col: b || 0 };
      },
      a = (p) => {
        if (!p || p.length === 0)
          return { sortedContents: [], maxRow: 0, maxCol: 0 };
        const f = p.map((C) => ({
            ...C,
            gridPos: l(C.gird_position || "0,0"),
          })),
          b = Math.max(...f.map((C) => C.gridPos.row), 0),
          w = Math.max(...f.map((C) => C.gridPos.col), 0);
        return {
          sortedContents: f.sort((C, u) =>
            C.gridPos.row !== u.gridPos.row
              ? C.gridPos.row - u.gridPos.row
              : C.gridPos.col - u.gridPos.col
          ),
          maxRow: b,
          maxCol: w,
        };
      },
      i = (p) => {
        switch (p) {
          case "parent_container":
            return "border-gray-300";
          case "sub_container":
            return "border-gray-300";
          case "dispensing_shelves":
          case "store_shelves":
            return "border-gray-300";
          case "med_box":
            return "border-gray-300";
          case "grid_draw":
          case "list_draw":
            return "border-gray-300";
          default:
            return "border-gray-300";
        }
      },
      c = (p) => {
        const f = [
          "med_box",
          "dispensing_shelves",
          "store_shelves",
          "grid_draw",
          "list_draw",
        ].includes(p.type);
        return r.jsx(
          "div",
          {
            className: `${f ? "shadow-sm border-2 p-1 rounded-lg" : ""} ${i(
              p.type
            )} flex flex-col max-w-full min-w-0 h-full overflow-hidden`,
            children: r.jsx("div", {
              className: "flex-1 min-w-0 overflow-hidden",
              children: h(p),
            }),
          },
          p.GUID
        );
      },
      g = (p, f, b) => {
        const w = {};
        return (
          p.forEach((M) => {
            const C = l(M.gird_position || "0,0");
            w[`${C.row},${C.col}`] = M;
          }),
          r.jsx("table", {
            className: "w-full h-full max-w-full table-fixed",
            style: { borderCollapse: "separate", borderSpacing: "0px" },
            children: r.jsx("tbody", {
              children: Array.from({ length: f + 1 }, (M, C) =>
                r.jsx(
                  "tr",
                  {
                    children: Array.from({ length: b + 1 }, (u, d) => {
                      const x = `${C},${d}`,
                        k = w[x];
                      return k
                        ? r.jsx(
                            "td",
                            {
                              className:
                                "align-top bg-transparent overflow-hidden",
                              style: {
                                width: `${100 / (b + 1)}%`,
                                maxWidth: `${100 / (b + 1)}%`,
                              },
                              children: c(k),
                            },
                            d
                          )
                        : r.jsx(
                            "td",
                            {
                              className:
                                "align-top bg-transparent overflow-hidden",
                              style: {
                                width: `${100 / (b + 1)}%`,
                                maxWidth: `${100 / (b + 1)}%`,
                              },
                              children: r.jsx("div", {
                                className:
                                  "w-full h-full flex items-center justify-center text-gray-300 text-xs border border-dashed border-gray-200 rounded overflow-hidden",
                                children: "空位",
                              }),
                            },
                            d
                          );
                    }),
                  },
                  C
                )
              ),
            }),
          })
        );
      },
      h = (p) => {
        switch (p.type) {
          case "parent_container":
            if (p.contents && p.contents.length > 0) {
              const { sortedContents: f, maxRow: b, maxCol: w } = a(p.contents);
              return g(f, b, w);
            } else return r.jsx("div", { className: "" });
          case "sub_container":
            if (p.contents && p.contents.length > 0) {
              const { sortedContents: f, maxRow: b, maxCol: w } = a(p.contents);
              return g(f, b, w);
            } else return r.jsx("div", { className: "" });
          case "dispensing_shelves":
            if (p.contents && p.contents.length > 0) {
              const { sortedContents: f, maxRow: b, maxCol: w } = a(p.contents);
              return g(f, b, w);
            } else
              return r.jsx("div", {
                className:
                  "border-2 rounded-lg flex py-3 items-center justify-center h-full text-gray-400 text-sm",
                children: "無藥盒",
              });
          case "store_shelves":
            if (p.medMapStock && p.medMapStock.length > 0) {
              const f = p.medMapStock,
                b = f.length,
                w = b > 0 ? 100 / b : 100;
              return r.jsx("div", {
                className: "flex h-full w-full overflow-hidden",
                children: f.map((M, C) => {
                  const u = t && (M.code == t || M.material_no == t),
                    d = n.includes(M.code) || n.includes(M.material_no),
                    x = o();
                  return r.jsxs(
                    "div",
                    {
                      className: `border-2 rounded-lg border-gray-300 p-2 flex flex-col text-gray-800 justify-center items-center transition-colors cursor-pointer min-w-0 overflow-hidden ${
                        d
                          ? "highlight-breathe-red"
                          : u
                          ? `highlight-breathe-${x}`
                          : ""
                      }`,
                      style: {
                        width: `${w}%`,
                        maxWidth: `${w}%`,
                        flexShrink: 0,
                      },
                      onClick: () =>
                        s && s({ code: M.code || M.material_no, name: M.name }),
                      children: [
                        r.jsx("div", {
                          className:
                            "text-sm font-semibold truncate w-full text-center overflow-hidden",
                          children: M.name || M.material_no,
                        }),
                        r.jsxs("div", {
                          className: "text-xs mt-1",
                          children: ["數量: ", M.qty || 0],
                        }),
                      ],
                    },
                    M.GUID || C
                  );
                }),
              });
            } else if (p.contents && p.contents.length > 0) {
              const { sortedContents: f, maxRow: b, maxCol: w } = a(p.contents);
              return g(f, b, w);
            } else
              return r.jsx("div", {
                className:
                  "border-2 flex py-3 items-center justify-center h-full text-gray-400 text-sm",
                children: "無庫存",
              });
          case "grid_draw":
            return r.jsxs("div", {
              className:
                "border-2 bg-violet-100 h-16 flex rounded-lg border-2 border-violet-400 max-w-[120px] w-full items-center justify-center mx-auto overflow-hidden",
              children: [
                r.jsx("div", {
                  className:
                    "h-[50%] bg-violet-400 w-[3%] rounded flex-shrink-0",
                }),
                r.jsx("div", {
                  className:
                    "h-[70%] border-2 border-violet-400 w-[82%] mx-1 flex items-center justify-center overflow-hidden",
                  children: r.jsx("span", {
                    className: "text-xs text-violet-600 truncate",
                    children: "格狀抽屜",
                  }),
                }),
                r.jsx("div", {
                  className: "h-[50%] bg-violet-400 w-[3%] flex-shrink-0",
                }),
              ],
            });
          case "list_draw":
            return r.jsxs("div", {
              className:
                "border-2 bg-violet-100 h-16 flex rounded-lg border-2 border-violet-400 max-w-[120px] w-full items-center justify-center mx-auto overflow-hidden",
              children: [
                r.jsx("div", {
                  className:
                    "h-[50%] bg-violet-400 w-[3%] rounded flex-shrink-0",
                }),
                r.jsx("div", {
                  className:
                    "h-[70%] border-2 border-violet-400 w-[82%] mx-1 flex items-center justify-center overflow-hidden",
                  children: r.jsx("span", {
                    className: "text-xs text-violet-600 truncate",
                    children: "清單抽屜",
                  }),
                }),
                r.jsx("div", {
                  className: "h-[50%] bg-violet-400 w-[3%] flex-shrink-0",
                }),
              ],
            });
          case "med_box":
            if (p.med_info && p.med_info.length > 0) {
              const f = t && p.med_info.some((M) => M.code == t),
                b = p.med_info.some((M) => n.includes(M.code)),
                w = o();
              return r.jsx("div", {
                className: `text-sm text-center h-full p-2 flex flex-col text-gray-800 justify-center transition-colors cursor-pointer overflow-hidden ${
                  b
                    ? "highlight-breathe-red"
                    : f
                    ? `highlight-breathe-${w}`
                    : ""
                }`,
                onClick: () => s && s(p.med_info[0]),
                children: r.jsx("div", {
                  className: "font-semibold truncate w-full overflow-hidden",
                  children: p.med_info[0].name || "-",
                }),
              });
            } else
              return r.jsx("div", {
                className:
                  "flex items-center justify-center h-full text-gray-400 text-xs",
                children: "空藥盒",
              });
          default:
            if (p.contents && p.contents.length > 0) {
              const { sortedContents: f, maxRow: b, maxCol: w } = a(p.contents);
              return g(f, b, w);
            } else
              return r.jsxs("div", {
                className:
                  "flex items-center justify-center h-full text-gray-400 text-sm",
                children: ["未知類型: ", p.type],
              });
        }
      };
    return e
      ? r.jsx("div", {
          className: "w-full h-full overflow-auto",
          children: r.jsx("div", {
            className: "max-w-full h-full",
            children: h(e),
          }),
        })
      : r.jsx("div", {
          className: "flex items-center justify-center h-full text-gray-400",
          children: r.jsx("p", { children: "無容器資料" }),
        });
  },
  Ih = ({ isOpen: e, onClose: t, type: n, data: s, onApprove: o }) => {
    const [l, a] = m.useState("0"),
      [i, c] = m.useState("0"),
      [g, h] = m.useState(null),
      [p, f] = m.useState(null),
      [b, w] = m.useState(!1),
      [M, C] = m.useState(!1),
      [u, d] = m.useState(""),
      [x, k] = m.useState(""),
      [O, I] = m.useState([]),
      [A, _] = m.useState([]),
      [ee, S] = m.useState([]),
      [U, q] = m.useState(!1),
      [P, T] = m.useState(!1),
      se = m.useRef(null),
      v = m.useRef(null),
      N = m.useRef(null),
      j = m.useRef(null);
    m.useEffect(() => {
      if (e && s) {
        const D = s.issuedQuantity || s.requestedQuantity || "0";
        a(D), c(D), h(null), f(null), w(!1);
        const ne = localStorage.getItem("medMap_setting");
        if (ne)
          try {
            const ie = JSON.parse(ne);
            d(ie.default_person || ""), k(ie.default_person_id || "");
          } catch (ie) {
            console.error("讀取設定失敗:", ie), d(""), k("");
          }
        else d(""), k("");
        V();
      }
    }, [e, s]),
      m.useEffect(() => {
        const D = (ne) => {
          N.current &&
            !N.current.contains(ne.target) &&
            se.current &&
            !se.current.contains(ne.target) &&
            q(!1),
            j.current &&
              !j.current.contains(ne.target) &&
              v.current &&
              !v.current.contains(ne.target) &&
              T(!1);
        };
        return (
          document.addEventListener("mousedown", D),
          () => document.removeEventListener("mousedown", D)
        );
      }, []);
    const V = async () => {
        try {
          const D = await ke.getAllStaffInfo();
          D.Code === 200 && D.Data && I(D.Data);
        } catch (D) {
          console.error("獲取人員資料失敗:", D);
        }
      },
      de = (D) => {
        if ((d(D), D.trim() === "")) {
          _([]), q(!1);
          return;
        }
        const ne = O.filter(
          (ie) => ie.name && ie.name.toLowerCase().includes(D.toLowerCase())
        );
        _(ne), q(ne.length > 0);
      },
      te = (D) => {
        if ((k(D), D.trim() === "")) {
          S([]), T(!1);
          return;
        }
        const ne = O.filter(
          (ie) => ie.ID && ie.ID.toLowerCase().includes(D.toLowerCase())
        );
        S(ne), T(ne.length > 0);
      },
      ae = (D) => {
        d(D.name), k(D.ID), q(!1);
      },
      Se = (D) => {
        d(D.name), k(D.ID), T(!1);
      };
    if (!e || !s) return null;
    const ue = (D) => {
        if (b) a(D), c(D), w(!1);
        else {
          const ne = l === "0" ? D : l + D;
          a(ne), c(ne);
        }
      },
      Ce = (D) => {
        g && p !== null && !b && fe(), f(i), h(D), w(!0);
      },
      fe = () => {
        if (g === null || p === null) return;
        const D = parseFloat(p),
          ne = parseFloat(i);
        let ie = 0;
        switch (g) {
          case "+":
            ie = D + ne;
            break;
          case "-":
            ie = D - ne;
            break;
          case "×":
            ie = D * ne;
            break;
          case "÷":
            ie = ne !== 0 ? D / ne : 0;
            break;
          default:
            return;
        }
        const B = ie.toString();
        a(B), c(B), h(null), f(null), w(!0);
      },
      Y = () => {
        fe();
      },
      pe = () => {
        if (b) a("0."), c("0."), w(!1);
        else if (!l.includes(".")) {
          const D = l + ".";
          a(D), c(D);
        }
      },
      be = () => {
        a("0"), c("0"), h(null), f(null), w(!1);
      },
      R = () => {
        const D = new Date(),
          ne = D.getFullYear(),
          ie = String(D.getMonth() + 1).padStart(2, "0"),
          B = String(D.getDate()).padStart(2, "0"),
          J = String(D.getHours()).padStart(2, "0"),
          E = String(D.getMinutes()).padStart(2, "0"),
          F = String(D.getSeconds()).padStart(2, "0");
        return `${ne}-${ie}-${B}T${J}:${E}:${F}`;
      },
      me = async () => {
        if (!s) return;
        if (!u.trim()) {
          alert("請輸入核撥人員名稱");
          return;
        }
        const D = n === "requisition" ? "申領" : "撥補";
        if (
          window.confirm(`確認核撥資訊：

藥品名稱：${s.name}
實際撥發量：${l}
核撥人員：${u}${x ? ` (${x})` : ""}

是否確認${D}？`)
        ) {
          C(!0);
          try {
            const ie = R();
            if (n === "requisition") {
              const B = await ke.updateRequisitionActualQuantity(s.GUID, l);
              if (B.Code !== 200) {
                alert(`更新實際撥發量失敗：${B.Message || "未知錯誤"}`), C(!1);
                return;
              }
              const J = {
                ...s,
                actualQuantity: l,
                notice: "False",
                state: "已過帳",
                issuingPerson: u,
                issueTime: ie,
              };
              console.log("申領request", J);
              const E = await ke.updateRequisitionByGuid(J);
              if (E.Code !== 200) {
                alert(`申領過帳失敗：${E.Message || "未知錯誤"}`), C(!1);
                return;
              }
              console.log("✅ 申領核撥成功:", {
                GUID: s.GUID,
                name: s.name,
                actualQuantity: l,
                issuingPerson: u,
                issueTime: ie,
              });
            } else {
              const B = await ke.updateDistributionActualQuantity(s.GUID, l);
              if (B.Code !== 200) {
                alert(`更新實際撥發量失敗：${B.Message || "未知錯誤"}`), C(!1);
                return;
              }
              const J = {
                ...s,
                actualQuantity: l,
                notice: "False",
                state: "已過帳",
                issuer: u,
                issuanceTime: ie,
              };
              console.log("撥補request", J);
              const E = await ke.updateDistributionByGuid(J);
              if (E.Code !== 200) {
                alert(`撥補過帳失敗：${E.Message || "未知錯誤"}`), C(!1);
                return;
              }
              console.log("✅ 撥補核撥成功:", {
                GUID: s.GUID,
                name: s.name,
                actualQuantity: l,
                issuer: u,
                issuanceTime: ie,
              });
            }
            o && (await o()), alert(`${D}核撥成功！`), t();
          } catch (ie) {
            console.error(`${D}核撥失敗:`, ie),
              alert(`${D}核撥失敗，請稍後再試`);
          } finally {
            C(!1);
          }
        }
      },
      z = n === "requisition" ? s.requestedQuantity : s.issuedQuantity;
    return r.jsxs("div", {
      className: "fixed inset-0 z-[70] flex items-center justify-center",
      children: [
        r.jsx("div", {
          className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
          onClick: t,
        }),
        r.jsxs("div", {
          className:
            "relative w-full max-w-md bg-white shadow-2xl rounded-xl overflow-hidden flex flex-col m-4 max-h-[90vh]",
          children: [
            r.jsxs("div", {
              className:
                "flex items-center justify-between px-3 py-2 border-b border-gray-200",
              children: [
                r.jsxs("h2", {
                  className: "text-lg font-bold text-gray-800",
                  children: [n === "requisition" ? "申領" : "撥補", "核撥"],
                }),
                r.jsx("button", {
                  onClick: t,
                  className:
                    "p-2 hover:bg-white/50 rounded-full transition-colors",
                  title: "關閉",
                  children: r.jsx(Fe, { className: "w-5 h-5 text-gray-700" }),
                }),
              ],
            }),
            r.jsx("div", {
              className: "overflow-y-auto flex-1",
              children: r.jsxs("div", {
                className: "p-4 space-y-2",
                children: [
                  r.jsxs("div", {
                    className: "bg-blue-50 rounded-lg p-3 space-y-2",
                    children: [
                      r.jsx("label", {
                        className:
                          "block text-sm font-semibold text-gray-700 mb-1",
                        children: "核撥人員",
                      }),
                      r.jsxs("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: [
                          r.jsxs("div", {
                            className: "relative",
                            children: [
                              r.jsx("input", {
                                ref: se,
                                type: "text",
                                value: u,
                                onChange: (D) => de(D.target.value),
                                onFocus: () => {
                                  u.trim() && de(u);
                                },
                                placeholder: "人員名稱",
                                className:
                                  "w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                              }),
                              U &&
                                r.jsx("div", {
                                  ref: N,
                                  className:
                                    "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto",
                                  children: A.map((D, ne) =>
                                    r.jsxs(
                                      "div",
                                      {
                                        onClick: () => ae(D),
                                        className:
                                          "px-3 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                        children: [
                                          r.jsx("div", {
                                            className: "text-xs text-gray-500",
                                            children: D.ID,
                                          }),
                                          r.jsx("div", {
                                            className:
                                              "font-medium text-gray-900 text-sm",
                                            children: D.name,
                                          }),
                                        ],
                                      },
                                      ne
                                    )
                                  ),
                                }),
                            ],
                          }),
                          r.jsxs("div", {
                            className: "relative",
                            children: [
                              r.jsx("input", {
                                ref: v,
                                type: "text",
                                value: x,
                                onChange: (D) => te(D.target.value),
                                onFocus: () => {
                                  x.trim() && te(x);
                                },
                                placeholder: "人員 ID",
                                className:
                                  "w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                              }),
                              P &&
                                r.jsx("div", {
                                  ref: j,
                                  className:
                                    "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto",
                                  children: ee.map((D, ne) =>
                                    r.jsxs(
                                      "div",
                                      {
                                        onClick: () => Se(D),
                                        className:
                                          "px-3 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                        children: [
                                          r.jsx("div", {
                                            className:
                                              "font-medium text-gray-900 text-sm",
                                            children: D.ID,
                                          }),
                                          r.jsx("div", {
                                            className: "text-xs text-gray-500",
                                            children: D.name,
                                          }),
                                        ],
                                      },
                                      ne
                                    )
                                  ),
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  r.jsxs("div", {
                    className: "space-y-1",
                    children: [
                      r.jsxs("div", {
                        children: [
                          r.jsx("span", {
                            className: "text-sm font-semibold text-gray-600",
                            children: "藥名",
                          }),
                          r.jsx("div", {
                            className: "text-base text-gray-800 mt-1",
                            children: s.name || "-",
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        children: [
                          r.jsx("span", {
                            className: "text-sm font-semibold text-gray-600",
                            children: "藥碼",
                          }),
                          r.jsx("div", {
                            className: "text-base text-gray-800 mt-1",
                            children: s.code || "-",
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        children: [
                          r.jsx("span", {
                            className: "text-sm font-semibold text-gray-600",
                            children: n === "requisition" ? "申領量" : "撥發量",
                          }),
                          r.jsx("div", {
                            className: "text-base text-gray-800 mt-1",
                            children: z || "-",
                          }),
                        ],
                      }),
                    ],
                  }),
                  r.jsxs("div", {
                    children: [
                      r.jsx("label", {
                        className:
                          "text-base font-semibold text-gray-600 block mb-2",
                        children: "實際撥發量",
                      }),
                      r.jsx("input", {
                        type: "text",
                        value: l,
                        disabled: !0,
                        className:
                          "w-full px-4 py-3 text-lg font-semibold text-gray-800 bg-gray-100 border border-gray-300 rounded-lg",
                      }),
                    ],
                  }),
                  r.jsxs("div", {
                    className: "grid grid-cols-4 gap-2",
                    children: [
                      r.jsx("button", {
                        onClick: () => ue("7"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "7",
                      }),
                      r.jsx("button", {
                        onClick: () => ue("8"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "8",
                      }),
                      r.jsx("button", {
                        onClick: () => ue("9"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "9",
                      }),
                      r.jsx("button", {
                        onClick: () => Ce("÷"),
                        className:
                          "py-4 text-lg font-semibold bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors",
                        children: "÷",
                      }),
                      r.jsx("button", {
                        onClick: () => ue("4"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "4",
                      }),
                      r.jsx("button", {
                        onClick: () => ue("5"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "5",
                      }),
                      r.jsx("button", {
                        onClick: () => ue("6"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "6",
                      }),
                      r.jsx("button", {
                        onClick: () => Ce("×"),
                        className:
                          "py-4 text-lg font-semibold bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors",
                        children: "×",
                      }),
                      r.jsx("button", {
                        onClick: () => ue("1"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "1",
                      }),
                      r.jsx("button", {
                        onClick: () => ue("2"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "2",
                      }),
                      r.jsx("button", {
                        onClick: () => ue("3"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "3",
                      }),
                      r.jsx("button", {
                        onClick: () => Ce("-"),
                        className:
                          "py-4 text-lg font-semibold bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors",
                        children: "-",
                      }),
                      r.jsx("button", {
                        onClick: () => ue("0"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "0",
                      }),
                      r.jsx("button", {
                        onClick: pe,
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: ".",
                      }),
                      r.jsx("button", {
                        onClick: Y,
                        className:
                          "py-4 text-lg font-semibold bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors",
                        children: "=",
                      }),
                      r.jsx("button", {
                        onClick: () => Ce("+"),
                        className:
                          "py-4 text-lg font-semibold bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors",
                        children: "+",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            r.jsxs("div", {
              className:
                "flex items-center justify-end gap-2 p-3 border-t border-gray-200 bg-gray-50",
              children: [
                r.jsx("button", {
                  onClick: be,
                  className:
                    "px-6 py-2.5 font-semibold text-white bg-red-500 hover:bg-red-600 rounded-lg transition-colors",
                  children: "清除",
                }),
                r.jsx("button", {
                  onClick: t,
                  className:
                    "px-6 py-2.5 font-semibold text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 rounded-lg transition-colors",
                  children: "取消",
                }),
                r.jsx("button", {
                  onClick: me,
                  disabled: M,
                  className:
                    "px-6 py-2.5 font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                  children: M ? "處理中..." : "核撥",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Ph = ({
    isOpen: e,
    onClose: t,
    medicineInfo: n,
    requisitions: s,
    distributions: o,
    onNoticeUpdated: l,
  }) => {
    const [a, i] = m.useState(s),
      [c, g] = m.useState(o),
      [h, p] = m.useState(null),
      [f, b] = m.useState(!1),
      [w, M] = m.useState(null),
      [C, u] = m.useState("requisition");
    no.useEffect(() => {
      i(s), g(o);
    }, [s, o]);
    const d = async (_) => {
        const ee = _.notice === "True" ? "False" : "True";
        p(_.GUID);
        const S = [...a],
          U = S.findIndex((q) => q.GUID === _.GUID);
        if (U === -1) {
          p(null);
          return;
        }
        (S[U] = { ..._, notice: ee }), i(S);
        try {
          const q = await ke.updateRequisitionNotice(_.GUID, ee);
          q.Code !== 200
            ? ((S[U] = { ..._, notice: _.notice }),
              i(S),
              console.error("更新申領通知狀態失敗:", q))
            : l && l();
        } catch (q) {
          (S[U] = { ..._, notice: _.notice }),
            i(S),
            console.error("更新申領通知狀態失敗:", q);
        } finally {
          p(null);
        }
      },
      x = async (_) => {
        const ee = _.notice === "True" ? "False" : "True";
        p(_.GUID);
        const S = [...c],
          U = S.findIndex((q) => q.GUID === _.GUID);
        if (U === -1) {
          p(null);
          return;
        }
        (S[U] = { ..._, notice: ee }), g(S);
        try {
          const q = await ke.updateDistributionNotice(_.GUID, ee);
          q.Code !== 200
            ? ((S[U] = { ..._, notice: _.notice }),
              g(S),
              console.error("更新撥補通知狀態失敗:", q))
            : l && l();
        } catch (q) {
          (S[U] = { ..._, notice: _.notice }),
            g(S),
            console.error("更新撥補通知狀態失敗:", q);
        } finally {
          p(null);
        }
      };
    if (!e || !n) return null;
    const k = a.filter((_) => _.state === "等待過帳"),
      O = c.filter((_) => _.state === "等待過帳"),
      I = k.length === 0 && O.length === 0,
      A = (_) => {
        if (!_ || _ === "1/01/01 00:00:00" || _ === "0001-01-01T00:00:00")
          return "-";
        try {
          const ee = new Date(_);
          if (isNaN(ee.getTime())) return _;
          const S = ee.getFullYear(),
            U = String(ee.getMonth() + 1).padStart(2, "0"),
            q = String(ee.getDate()).padStart(2, "0"),
            P = String(ee.getHours()).padStart(2, "0"),
            T = String(ee.getMinutes()).padStart(2, "0");
          return `${S}/${U}/${q} ${P}:${T}`;
        } catch {
          return _;
        }
      };
    return r.jsxs("div", {
      className: "fixed inset-0 z-[60] flex items-center justify-center",
      children: [
        r.jsx("div", {
          className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
          onClick: t,
        }),
        r.jsxs("div", {
          className:
            "relative w-full max-w-4xl max-h-[90vh] bg-white shadow-2xl rounded-lg overflow-hidden flex flex-col m-4",
          children: [
            r.jsxs("div", {
              className:
                "flex items-center justify-between px-3 py-2 border-b border-gray-200",
              children: [
                r.jsx("h2", {
                  className: "text-xl font-bold text-gray-800",
                  children: "藥品核撥",
                }),
                r.jsx("button", {
                  onClick: t,
                  className:
                    "p-2 hover:bg-white/50 rounded-full transition-colors",
                  title: "關閉",
                  children: r.jsx(Fe, { className: "w-6 h-6 text-gray-700" }),
                }),
              ],
            }),
            r.jsx("div", {
              className: "px-3 py-2 bg-gray-50 border-b border-gray-200",
              children: r.jsxs("div", {
                className: "grid grid-cols-2 gap-2",
                children: [
                  r.jsxs("div", {
                    className: "col-span-2",
                    children: [
                      r.jsx("span", {
                        className: "font-semibold text-gray-600",
                        children: "藥名：",
                      }),
                      r.jsx("span", {
                        className: "text-gray-800",
                        children: n.name || "-",
                      }),
                    ],
                  }),
                  r.jsxs("div", {
                    children: [
                      r.jsx("span", {
                        className: "font-semibold text-gray-600",
                        children: "料號：",
                      }),
                      r.jsx("span", {
                        className: "text-gray-800",
                        children: n.skdiacode || "-",
                      }),
                    ],
                  }),
                  r.jsxs("div", {
                    children: [
                      r.jsx("span", {
                        className: "font-semibold text-gray-600",
                        children: "藥碼：",
                      }),
                      r.jsx("span", {
                        className: "text-gray-800",
                        children: n.code || "-",
                      }),
                    ],
                  }),
                  n.cht_name &&
                    r.jsxs("div", {
                      className: "col-span-2",
                      children: [
                        r.jsx("span", {
                          className: "font-semibold text-gray-600",
                          children: "中文名：",
                        }),
                        r.jsx("span", {
                          className: "text-gray-800",
                          children: n.cht_name,
                        }),
                      ],
                    }),
                ],
              }),
            }),
            r.jsx("div", {
              className: "flex-1 overflow-y-auto p-4",
              children: I
                ? r.jsx("div", {
                    className:
                      "flex items-center justify-center h-40 text-gray-400 text-lg",
                    children: "無藥品需求",
                  })
                : r.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      k.map((_, ee) =>
                        r.jsxs(
                          "div",
                          {
                            className:
                              "border border-blue-200 rounded-lg p-3 bg-blue-50 hover:shadow-md transition-shadow",
                            onClick: () => {
                              u("requisition"), M(_), b(!0);
                            },
                            children: [
                              r.jsxs("div", {
                                className:
                                  "flex items-center justify-between gap-2 mb-2",
                                children: [
                                  r.jsxs("div", {
                                    className: "flex items-center gap-6",
                                    children: [
                                      r.jsx("span", {
                                        className:
                                          "underline font-medium text-xl font-semibold text-gray-700",
                                        children: "申領",
                                      }),
                                      r.jsx("button", {
                                        onClick: (S) => {
                                          S.stopPropagation(), d(_);
                                        },
                                        disabled: h === _.GUID,
                                        className: `p-2 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 ${
                                          _.notice === "True"
                                            ? "bg-green-500 text-white hover:bg-green-600"
                                            : "bg-gray-300 text-gray-600 hover:bg-gray-400"
                                        }`,
                                        title:
                                          _.notice === "True"
                                            ? "點擊關閉通知"
                                            : "點擊開啟通知",
                                        children: r.jsx(yc, {
                                          className: "w-5 h-5",
                                        }),
                                      }),
                                    ],
                                  }),
                                  r.jsx("span", {
                                    className: `px-3 text-sm py-2 text-white font-semibold rounded-full ${
                                      _.actionType.includes("緊急")
                                        ? "bg-green-600"
                                        : "bg-blue-600"
                                    }`,
                                    children: _.actionType,
                                  }),
                                ],
                              }),
                              r.jsxs("div", {
                                className: "grid grid-cols-2 gap-2",
                                children: [
                                  r.jsxs("div", {
                                    children: [
                                      r.jsx("span", {
                                        className:
                                          "font-semibold text-gray-600",
                                        children: "申領單位：",
                                      }),
                                      r.jsx("span", {
                                        className: "text-gray-800",
                                        children: _.requestingUnit || "-",
                                      }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    children: [
                                      r.jsx("span", {
                                        className:
                                          "font-semibold text-gray-600",
                                        children: "申領人：",
                                      }),
                                      r.jsx("span", {
                                        className: "text-gray-800",
                                        children: _.requestingPerson || "-",
                                      }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    children: [
                                      r.jsx("span", {
                                        className:
                                          "font-semibold text-gray-600",
                                        children: "申領數量：",
                                      }),
                                      r.jsx("span", {
                                        className: "text-gray-800",
                                        children: _.requestedQuantity || "-",
                                      }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    children: [
                                      r.jsx("span", {
                                        className:
                                          "font-semibold text-gray-600",
                                        children: "申領時間：",
                                      }),
                                      r.jsx("span", {
                                        className: "text-gray-800",
                                        children: A(_.requestTime),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          _.GUID
                        )
                      ),
                      O.map((_, ee) =>
                        r.jsxs(
                          "div",
                          {
                            className:
                              "border border-yellow-200 rounded-lg p-3 bg-yellow-50 hover:shadow-md transition-shadow",
                            onClick: () => {
                              u("distribution"), M(_), b(!0);
                            },
                            children: [
                              r.jsxs("div", {
                                className: "flex items-center gap-6 mb-2",
                                children: [
                                  r.jsx("span", {
                                    className:
                                      "underline font-medium text-xl rounded-full text-gray-700",
                                    children: "撥補",
                                  }),
                                  r.jsx("button", {
                                    onClick: (S) => {
                                      S.stopPropagation(), x(_);
                                    },
                                    disabled: h === _.GUID,
                                    className: `p-2 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 ${
                                      _.notice === "True"
                                        ? "bg-green-500 text-white hover:bg-green-600"
                                        : "bg-gray-300 text-gray-600 hover:bg-gray-400"
                                    }`,
                                    title:
                                      _.notice === "True"
                                        ? "點擊關閉通知"
                                        : "點擊開啟通知",
                                    children: r.jsx(yc, {
                                      className: "w-5 h-5",
                                    }),
                                  }),
                                ],
                              }),
                              r.jsxs("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: [
                                  r.jsxs("div", {
                                    children: [
                                      r.jsx("span", {
                                        className:
                                          "font-semibold text-gray-600",
                                        children: "來源庫別：",
                                      }),
                                      r.jsx("span", {
                                        className: "text-gray-800",
                                        children: _.sourceStoreType || "-",
                                      }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    children: [
                                      r.jsx("span", {
                                        className:
                                          "font-semibold text-gray-600",
                                        children: "目的庫別：",
                                      }),
                                      r.jsx("span", {
                                        className: "text-gray-800",
                                        children: _.destinationStoreType || "-",
                                      }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    children: [
                                      r.jsx("span", {
                                        className:
                                          "font-semibold text-gray-600",
                                        children: "批號：",
                                      }),
                                      r.jsx("span", {
                                        className: "text-gray-800",
                                        children: _.LOT || "-",
                                      }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    children: [
                                      r.jsx("span", {
                                        className:
                                          "font-semibold text-gray-600",
                                        children: "效期：",
                                      }),
                                      r.jsx("span", {
                                        className: "text-gray-800",
                                        children: _.VAL || "-",
                                      }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    children: [
                                      r.jsx("span", {
                                        className:
                                          "font-semibold text-gray-600",
                                        children: "撥補數量：",
                                      }),
                                      r.jsx("span", {
                                        className: "text-gray-800",
                                        children: _.issuedQuantity || "-",
                                      }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    children: [
                                      r.jsx("span", {
                                        className:
                                          "font-semibold text-gray-600",
                                        children: "建表人員：",
                                      }),
                                      r.jsx("span", {
                                        className: "text-gray-800",
                                        children: _.reportName || "-",
                                      }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    className: "col-span-2",
                                    children: [
                                      r.jsx("span", {
                                        className:
                                          "font-semibold text-gray-600",
                                        children: "建立時間：",
                                      }),
                                      r.jsx("span", {
                                        className: "text-gray-800",
                                        children: A(_.addedTime),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          _.GUID
                        )
                      ),
                    ],
                  }),
            }),
          ],
        }),
        r.jsx(Ih, {
          isOpen: f,
          onClose: () => b(!1),
          type: C,
          data: w,
          onApprove: l,
        }),
      ],
    });
  },
  Rh = ({ isOpen: e, onClose: t, container: n }) => {
    const [s, o] = m.useState("list_mode"),
      { highlightedMedicineCode: l } = Qe(),
      [a, i] = m.useState(!1),
      [c, g] = m.useState([]),
      [h, p] = m.useState([]),
      [f, b] = m.useState([]),
      [w, M] = m.useState(!1),
      [C, u] = m.useState(null),
      d = m.useRef(null),
      x = m.useRef(null),
      k = () => {
        try {
          const U = localStorage.getItem("medMap_setting");
          if (U) {
            const P = JSON.parse(U).light_sec;
            if (P != null && P !== "") {
              const T = Number(P);
              if (!isNaN(T) && T > 0) return T * 1e3;
            }
          }
        } catch (U) {
          console.error("讀取亮燈設定失敗:", U);
        }
        return 6e4;
      },
      O = () => {
        try {
          const S = localStorage.getItem("medMap_setting");
          if (S) return JSON.parse(S).light_color || "red";
        } catch (S) {
          console.error("讀取高亮顏色設定失敗:", S);
        }
        return "red";
      },
      I = m.useCallback(async () => {
        try {
          const S = new Date(),
            U = `${S.getFullYear()}-${String(S.getMonth() + 1).padStart(
              2,
              "0"
            )}-${String(S.getDate()).padStart(2, "0")} 00:00:00`,
            q = `${S.getFullYear()}-${String(S.getMonth() + 1).padStart(
              2,
              "0"
            )}-${String(S.getDate()).padStart(2, "0")} 23:59:59`,
            [P, T] = await Promise.all([
              ke.getRequisitionByTime(U, q),
              ke.getDistributionByTime(U, q),
            ]),
            se = [];
          if (P.Code === 200 && P.Data) {
            const v = P.Data.filter((j) => {
              var V;
              return (V = n == null ? void 0 : n.med_list) == null
                ? void 0
                : V.some((de) => de.code === j.code);
            });
            p(v),
              v
                .filter((j) => j.state === "等待過帳" && j.notice === "True")
                .forEach((j) => {
                  j.code && se.push(j.code);
                });
          }
          if (T.Code === 200 && T.Data) {
            const v = T.Data.filter((j) => {
              var V;
              return (V = n == null ? void 0 : n.med_list) == null
                ? void 0
                : V.some((de) => de.code === j.code);
            });
            b(v),
              v
                .filter((j) => j.state === "等待過帳" && j.notice === "True")
                .forEach((j) => {
                  j.code && (se.includes(j.code) || se.push(j.code));
                });
          }
          g(se);
        } catch (S) {
          console.error("檢查申領撥補資料失敗:", S);
        }
      }, [n]);
    m.useEffect(
      () => (
        e
          ? (I(),
            x.current && clearInterval(x.current),
            (x.current = setInterval(() => {
              I();
            }, 1e4)))
          : x.current && (clearInterval(x.current), (x.current = null)),
        () => {
          x.current && (clearInterval(x.current), (x.current = null));
        }
      ),
      [e, I]
    ),
      m.useEffect(() => {
        if (
          (console.log("容器資料：", n),
          console.log("🔍 ContainerDetailModal - 亮燈狀態檢查:", {
            isOpen: e,
            highlightedMedicineCode: l,
            containerName: n == null ? void 0 : n.name,
          }),
          e && l)
        ) {
          i(!0);
          const S = k();
          console.log("✅ ContainerDetailModal - 啟動亮燈:", {
            medicineCode: l,
            duration: S / 1e3 + "秒",
          }),
            d.current && clearTimeout(d.current),
            (d.current = setTimeout(() => {
              console.log("⏱️ ContainerDetailModal - 亮燈時間結束"),
                i(!1),
                (d.current = null);
            }, S));
        } else i(!1);
        return () => {
          d.current && clearTimeout(d.current);
        };
      }, [e, l]);
    const A = (S) => {
      h.filter((U) => U.code === S.code),
        f.filter((U) => U.code === S.code),
        u({
          code: S.code,
          name: S.name,
          cht_name: S.cht_name,
          skdiacode: S.SKDIACODE || S.skdiacode,
        }),
        M(!0);
    };
    if (!e) return null;
    const _ = () =>
        !(n != null && n.med_list) || n.med_list.length === 0
          ? r.jsx("div", {
              className:
                "flex items-center justify-center h-full text-gray-400",
              children: r.jsx("p", { children: "無藥品資料" }),
            })
          : r.jsx("div", {
              className: "overflow-y-auto h-full",
              children: r.jsxs("table", {
                className: "w-full border-collapse",
                children: [
                  r.jsx("thead", {
                    className: "sticky top-0",
                    children: r.jsxs("tr", {
                      children: [
                        r.jsx("th", {
                          className:
                            "border border-gray-300 px-1 py-2 text-left text-sm font-semibold text-gray-700",
                          children: "藥品代碼",
                        }),
                        r.jsx("th", {
                          className:
                            "border border-gray-300 px-1 py-2 text-left text-sm font-semibold text-gray-700",
                          children: "料號",
                        }),
                        r.jsx("th", {
                          className:
                            "border border-gray-300 px-1 py-2 text-left text-sm font-semibold text-gray-700",
                          children: "藥品名稱",
                        }),
                        r.jsx("th", {
                          className:
                            "border border-gray-300 px-1 py-2 text-left text-sm font-semibold text-gray-700 text-right",
                          children: "數量",
                        }),
                        r.jsx("th", {
                          className:
                            "border border-gray-300 px-1 py-2 text-left text-sm font-semibold text-gray-700 text-center",
                          children: "層",
                        }),
                        r.jsx("th", {
                          className:
                            "border border-gray-300 px-1 py-2 text-left text-sm font-semibold text-gray-700 text-center",
                          children: "格",
                        }),
                        r.jsx("th", {
                          className:
                            "border border-gray-300 px-1 py-2 text-left text-sm font-semibold text-gray-700 text-center",
                          children: "位",
                        }),
                      ],
                    }),
                  }),
                  r.jsx("tbody", {
                    children: n.med_list.map((S, U) => {
                      const q = a && l && S.code == l,
                        P = c.includes(S.code);
                      U === 0 &&
                        console.log(
                          "🧪 ContainerDetailModal - 第一筆藥品檢查:",
                          {
                            medCode: S.code,
                            highlightedCode: l,
                            isHighlightActive: a,
                            isHighlighted: q,
                            isPendingRequisition: P,
                            comparison: `${S.code} == ${l} = ${S.code == l}`,
                          }
                        );
                      const T = O();
                      return r.jsxs(
                        "tr",
                        {
                          className: `transition-colors cursor-pointer ${
                            P
                              ? "highlight-breathe-red"
                              : q
                              ? `highlight-breathe-${T}`
                              : "hover:bg-gray-50"
                          }`,
                          onClick: () => A(S),
                          children: [
                            r.jsx("td", {
                              className:
                                "border border-gray-300 px-1 py-2 text-sm",
                              children: S.code || "-",
                            }),
                            r.jsx("td", {
                              className:
                                "border border-gray-300 px-1 py-2 text-sm",
                              children: S.SKDIACODE || "-",
                            }),
                            r.jsx("td", {
                              className:
                                "border border-gray-300 px-1 py-2 text-sm",
                              children: S.name || "-",
                            }),
                            r.jsx("td", {
                              className:
                                "border border-gray-300 px-1 py-2 text-sm text-right",
                              children: S.qty || "-",
                            }),
                            r.jsx("td", {
                              className:
                                "border border-gray-300 px-1 py-2 text-sm text-center",
                              children: S.stockCol || "-",
                            }),
                            r.jsx("td", {
                              className:
                                "border border-gray-300 px-1 py-2 text-sm text-center",
                              children: S.stockRow || "-",
                            }),
                            r.jsx("td", {
                              className:
                                "border border-gray-300 px-1 py-2 text-sm text-center",
                              children: S.stock || "-",
                            }),
                          ],
                        },
                        U
                      );
                    }),
                  }),
                ],
              }),
            }),
      ee = () =>
        n
          ? r.jsx(Eh, {
              container: n,
              highlightedMedicineCode: a ? l : null,
              pendingRequisitionCodes: c,
              onMedicineClick: A,
            })
          : r.jsx("div", {
              className:
                "flex items-center justify-center h-full text-gray-400",
              children: r.jsx("p", { children: "無容器資料" }),
            });
    return r.jsxs(r.Fragment, {
      children: [
        r.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            r.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: t,
            }),
            r.jsxs("div", {
              className:
                "relative w-full h-full bg-white shadow-2xl overflow-hidden flex flex-col",
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-white",
                  children: [
                    r.jsxs("div", {
                      className:
                        "flex items-center gap-2 bg-gray-100 rounded-lg p-1",
                      children: [
                        r.jsx("button", {
                          onClick: () => o("list_mode"),
                          className: `px-4 py-2 rounded-md text-sm font-medium transition-all ${
                            s === "list_mode"
                              ? "bg-white text-gray-900 shadow-sm"
                              : "text-gray-600 hover:text-gray-900"
                          }`,
                          children: "清單",
                        }),
                        r.jsx("button", {
                          onClick: () => o("view_mode"),
                          className: `px-4 py-2 rounded-md text-sm font-medium transition-all ${
                            s === "view_mode"
                              ? "bg-white text-gray-900 shadow-sm"
                              : "text-gray-600 hover:text-gray-900"
                          }`,
                          children: "視圖",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: t,
                      className:
                        "p-2 hover:bg-gray-100 rounded-full transition-colors",
                      title: "關閉",
                      children: r.jsx(Fe, {
                        className: "w-6 h-6 text-gray-700",
                      }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 overflow-hidden p-3",
                  children: s === "list_mode" ? _() : ee(),
                }),
              ],
            }),
          ],
        }),
        r.jsx(Ph, {
          isOpen: w,
          onClose: () => M(!1),
          medicineInfo: C,
          requisitions: C ? h.filter((S) => S.code === C.code) : [],
          distributions: C ? f.filter((S) => S.code === C.code) : [],
          onNoticeUpdated: I,
        }),
      ],
    });
  },
  Th = () => {
    const {
        editStoreShelfModalOpen: e,
        closeEditStoreShelfModal: t,
        selectedStoreShelfForEdit: n,
        showNotification: s,
        reloadMedMapData: o,
      } = Qe(),
      [l, a] = m.useState({
        name: "",
        position: "",
        width: "85",
        height: "29",
        ip: "",
        serverName: "",
        serverType: "",
        deviceType: "",
      }),
      [i, c] = m.useState(!1);
    m.useEffect(() => {
      n &&
        e &&
        a({
          name: n.name || "",
          position: n.gird_position || "",
          width: n.width || "85",
          height: n.height || "29",
          ip: n.ip || "",
          serverName: n.serverName || "",
          serverType: n.serverType || "",
          deviceType: n.device_type || "",
        });
    }, [n, e]);
    const g = (f, b) => {
        a((w) => ({ ...w, [f]: b }));
      },
      h = async () => {
        if (n) {
          if (!l.name.trim()) {
            s("層架名稱不能為空", "error");
            return;
          }
          if (!l.position.trim()) {
            s("位置不能為空", "error");
            return;
          }
          c(!0);
          try {
            const f = {
                Data: [
                  {
                    Master_GUID: n.Master_GUID,
                    name: l.name.trim(),
                    position: l.position.trim(),
                    type: n.type,
                    width: l.width,
                    height: l.height,
                    ip_light: l.ip.trim(),
                    device_type: l.deviceType,
                    serverName: l.serverName.trim(),
                    serverType: l.serverType.trim(),
                    GUID: n.GUID,
                  },
                ],
              },
              w = `${(await ke.getConfig()).domain}/api/medmap/update_shelf`,
              C = await (
                await fetch(w, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(f),
                })
              ).json();
            console.log(f),
              console.log(C),
              C.Code === 200
                ? (s("層架更新成功", "success"), t(), await o())
                : s(C.Result || "更新失敗", "error");
          } catch (f) {
            console.error("更新層架失敗:", f),
              s("更新失敗，請稍後再試", "error");
          } finally {
            c(!1);
          }
        }
      },
      p = () => {
        t();
      };
    return !e || !n
      ? null
      : r.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            r.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: p,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200 w-[600px]",
              onClick: (f) => f.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-6 py-4 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(mr, { className: "w-6 h-6 text-gray-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "編輯層架設定",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: p,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Fe, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 px-6 py-4 overflow-y-auto",
                  children: r.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      r.jsxs("div", {
                        children: [
                          r.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "層架名稱",
                          }),
                          r.jsx("input", {
                            type: "text",
                            value: l.name,
                            onChange: (f) => g("name", f.target.value),
                            className:
                              "w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                            placeholder: "請輸入層架名稱",
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        children: [
                          r.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "位置 (grid_position)",
                          }),
                          r.jsx("input", {
                            type: "text",
                            value: l.position,
                            onChange: (f) => g("position", f.target.value),
                            className:
                              "w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                            placeholder: "例如：0,0",
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [
                          r.jsxs("div", {
                            children: [
                              r.jsx("label", {
                                className:
                                  "block text-sm font-medium text-gray-700 mb-2",
                                children: "寬度",
                              }),
                              r.jsx("input", {
                                type: "text",
                                value: l.width,
                                onChange: (f) => g("width", f.target.value),
                                className:
                                  "w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                                placeholder: "85",
                              }),
                            ],
                          }),
                          r.jsxs("div", {
                            children: [
                              r.jsx("label", {
                                className:
                                  "block text-sm font-medium text-gray-700 mb-2",
                                children: "高度",
                              }),
                              r.jsx("input", {
                                type: "text",
                                value: l.height,
                                onChange: (f) => g("height", f.target.value),
                                className:
                                  "w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                                placeholder: "29",
                              }),
                            ],
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        children: [
                          r.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "燈條IP",
                          }),
                          r.jsx("input", {
                            type: "text",
                            value: l.ip,
                            onChange: (f) => g("ip", f.target.value),
                            className:
                              "w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                            placeholder: "請輸入燈條IP",
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        children: [
                          r.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "伺服器名稱",
                          }),
                          r.jsx("input", {
                            type: "text",
                            value: l.serverName,
                            onChange: (f) => g("serverName", f.target.value),
                            className:
                              "w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                            placeholder: "請輸入伺服器名稱",
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        children: [
                          r.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "伺服器類型",
                          }),
                          r.jsx("input", {
                            type: "text",
                            value: l.serverType,
                            onChange: (f) => g("serverType", f.target.value),
                            className:
                              "w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                            placeholder: "請輸入伺服器類型",
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        children: [
                          r.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "設備類型",
                          }),
                          r.jsxs("select", {
                            value: l.deviceType,
                            onChange: (f) => g("deviceType", f.target.value),
                            className:
                              "w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors bg-white",
                            children: [
                              r.jsx("option", {
                                value: "",
                                children: "請選擇設備類型",
                              }),
                              r.jsx("option", {
                                value: "RowsLED",
                                children: "RowsLED",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                r.jsxs("div", {
                  className:
                    "flex items-center justify-end space-x-3 py-4 px-6 border-t border-gray-200",
                  children: [
                    r.jsx("button", {
                      onClick: p,
                      disabled: i,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                      children: "取消",
                    }),
                    r.jsxs("button", {
                      onClick: h,
                      disabled: i,
                      className:
                        "px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        i && r.jsx(jt, { className: "w-4 h-4 animate-spin" }),
                        r.jsx("span", { children: i ? "更新中..." : "確認" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  },
  Ah = () => {
    const {
        editParentContainerModalOpen: e,
        closeEditParentContainerModal: t,
        selectedParentContainerForEdit: n,
        showNotification: s,
        reloadMedMapData: o,
      } = Qe(),
      [l, a] = m.useState({
        name: "",
        position: "",
        ip: "",
        serverName: "",
        serverType: "",
        deviceType: "",
      }),
      [i, c] = m.useState(!1);
    m.useEffect(() => {
      n &&
        e &&
        a({
          name: n.name || "",
          position: n.gird_position || "",
          ip: n.ip || "",
          serverName: n.serverName || "",
          serverType: n.serverType || "",
          deviceType: n.device_type || "",
        });
    }, [n, e]);
    const g = (f, b) => {
        a((w) => ({ ...w, [f]: b }));
      },
      h = async () => {
        if (n) {
          if (!l.name.trim()) {
            s("名稱不能為空", "error");
            return;
          }
          if (!l.position.trim()) {
            s("位置不能為空", "error");
            return;
          }
          c(!0);
          try {
            const f = [
                {
                  GUID: n.GUID,
                  name: l.name.trim(),
                  position: l.position.trim(),
                  absolute_position: n.absolute_position || "0,0",
                  ip: l.ip.trim(),
                  serverName: l.serverName.trim(),
                  serverType: l.serverType.trim(),
                  device_type: l.deviceType,
                },
              ],
              b = await ke.updateMedMapSection(f);
            b.Code === 200
              ? (s("父容器更新成功", "success"), t(), await o())
              : s(b.Result || "更新失敗", "error");
          } catch (f) {
            console.error("更新父容器失敗:", f),
              s("更新失敗，請稍後再試", "error");
          } finally {
            c(!1);
          }
        }
      },
      p = () => {
        t();
      };
    return !e || !n
      ? null
      : r.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            r.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: p,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200 w-[600px]",
              onClick: (f) => f.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-6 py-4 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(mr, { className: "w-6 h-6 text-gray-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "編輯父容器設定",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: p,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Fe, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 px-6 py-4 overflow-y-auto",
                  children: r.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      r.jsxs("div", {
                        children: [
                          r.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "容器名稱",
                          }),
                          r.jsx("input", {
                            type: "text",
                            value: l.name,
                            onChange: (f) => g("name", f.target.value),
                            className:
                              "w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                            placeholder: "請輸入容器名稱",
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        children: [
                          r.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "位置 (grid_position)",
                          }),
                          r.jsx("input", {
                            type: "text",
                            value: l.position,
                            onChange: (f) => g("position", f.target.value),
                            className:
                              "w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                            placeholder: "例如：0,0",
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        children: [
                          r.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "燈棒IP",
                          }),
                          r.jsx("input", {
                            type: "text",
                            value: l.ip,
                            onChange: (f) => g("ip", f.target.value),
                            className:
                              "w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                            placeholder: "請輸入燈棒IP",
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        children: [
                          r.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "伺服器名稱",
                          }),
                          r.jsx("input", {
                            type: "text",
                            value: l.serverName,
                            onChange: (f) => g("serverName", f.target.value),
                            className:
                              "w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                            placeholder: "請輸入伺服器名稱",
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        children: [
                          r.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "伺服器類型",
                          }),
                          r.jsx("input", {
                            type: "text",
                            value: l.serverType,
                            onChange: (f) => g("serverType", f.target.value),
                            className:
                              "w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                            placeholder: "請輸入伺服器類型",
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        children: [
                          r.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "設備類型",
                          }),
                          r.jsxs("select", {
                            value: l.deviceType,
                            onChange: (f) => g("deviceType", f.target.value),
                            className:
                              "w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors bg-white",
                            children: [
                              r.jsx("option", {
                                value: "",
                                children: "請選擇設備類型",
                              }),
                              r.jsx("option", {
                                value: "RowsLED",
                                children: "RowsLED",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                r.jsxs("div", {
                  className:
                    "flex items-center justify-end space-x-3 py-4 px-6 border-t border-gray-200",
                  children: [
                    r.jsx("button", {
                      onClick: p,
                      disabled: i,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                      children: "取消",
                    }),
                    r.jsxs("button", {
                      onClick: h,
                      disabled: i,
                      className:
                        "px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        i && r.jsx(jt, { className: "w-4 h-4 animate-spin" }),
                        r.jsx("span", { children: i ? "更新中..." : "確認" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  },
  $h = ({ isOpen: e, onLoginSuccess: t }) => {
    const { t: n } = mt(),
      [s, o] = m.useState(""),
      [l, a] = m.useState(""),
      [i, c] = m.useState(!1),
      [g, h] = m.useState(!1),
      [p, f] = m.useState(""),
      b = async (M) => {
        if ((M.preventDefault(), !s.trim() || !l.trim())) {
          f("Please enter both ID and password");
          return;
        }
        h(!0), f("");
        try {
          const C = await ke.login({ ID: s.trim(), Password: l });
          if (C.Code === 200 && C.Data) {
            const u = { ...C.Data, loginTime: new Date().toISOString() };
            sessionStorage.setItem("user_session", JSON.stringify(u)), t(u);
          } else f(C.Result || "Login failed");
        } catch (C) {
          console.error("Login failed:", C),
            f("Network error. Please try again.");
        } finally {
          h(!1);
        }
      },
      w = (M) => {
        M.key === "Enter" && !g && b(M);
      };
    return e
      ? r.jsxs("div", {
          className:
            "fixed inset-0 z-50 flex items-center justify-center bg-gray-900",
          children: [
            r.jsx("div", { className: "absolute inset-0 bg-white" }),
            r.jsxs("div", {
              className: "relative z-10 w-full max-w-md mx-4",
              children: [
                r.jsx("h1", {
                  className:
                    "text-3xl font-bold text-gray-900 mb-8 text-center",
                  children: n("login.title"),
                }),
                r.jsxs("div", {
                  className: "bg-white rounded-lg shadow-sm border p-4 md:p-6",
                  children: [
                    p &&
                      r.jsx("div", {
                        className:
                          "mb-6 p-4 bg-red-50 border border-red-200 rounded-lg",
                        children: r.jsx("p", {
                          className: "text-red-600 text-sm",
                          children: p,
                        }),
                      }),
                    r.jsxs("form", {
                      onSubmit: b,
                      className: "space-y-6",
                      children: [
                        r.jsxs("div", {
                          children: [
                            r.jsx("label", {
                              htmlFor: "userId",
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: n("login.userId"),
                            }),
                            r.jsx("input", {
                              id: "userId",
                              type: "text",
                              value: s,
                              onChange: (M) => o(M.target.value),
                              onKeyPress: w,
                              placeholder: n("login.userIdPlaceholder"),
                              className:
                                "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                              disabled: g,
                              autoComplete: "username",
                            }),
                          ],
                        }),
                        r.jsxs("div", {
                          children: [
                            r.jsx("label", {
                              htmlFor: "password",
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: n("login.password"),
                            }),
                            r.jsxs("div", {
                              className: "relative",
                              children: [
                                r.jsx("input", {
                                  id: "password",
                                  type: i ? "text" : "password",
                                  value: l,
                                  onChange: (M) => a(M.target.value),
                                  onKeyPress: w,
                                  placeholder: n("login.passwordPlaceholder"),
                                  className:
                                    "w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                                  disabled: g,
                                  autoComplete: "current-password",
                                }),
                                r.jsx("button", {
                                  type: "button",
                                  onClick: () => c(!i),
                                  className:
                                    "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors",
                                  disabled: g,
                                  children: i
                                    ? r.jsx(Zm, { className: "w-5 h-5" })
                                    : r.jsx(eh, { className: "w-5 h-5" }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        r.jsx("button", {
                          type: "submit",
                          disabled: g || !s.trim() || !l.trim(),
                          className:
                            "w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                          children: g
                            ? r.jsxs(r.Fragment, {
                                children: [
                                  r.jsx(jt, {
                                    className: "w-5 h-5 animate-spin mr-2",
                                  }),
                                  n("login.loggingIn"),
                                ],
                              })
                            : r.jsx(r.Fragment, {
                                children: n("login.loginButton"),
                              }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      : null;
  },
  Oh = ({ isVisible: e, message: t }) => {
    const { t: n } = mt();
    return e
      ? r.jsxs("div", {
          className: "fixed inset-0 z-[9999] flex items-center justify-center",
          children: [
            r.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
            }),
            r.jsx("div", {
              className:
                "relative z-10 flex flex-col items-center justify-center p-8",
              children: r.jsxs("div", {
                className:
                  "bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-2xl px-8 py-6 flex flex-col items-center space-y-4 min-w-[280px]",
                children: [
                  r.jsxs("div", {
                    className: "flex items-center space-x-3 mb-2",
                    children: [
                      r.jsx("div", {
                        className: "p-3 bg-blue-100 rounded-full",
                        children: r.jsx(li, {
                          className: "w-8 h-8 text-blue-600",
                        }),
                      }),
                      r.jsx("div", {
                        className: "text-xl font-semibold text-gray-900",
                        children: n("nav.title"),
                      }),
                    ],
                  }),
                  r.jsxs("div", {
                    className: "flex items-center space-x-3",
                    children: [
                      r.jsx(jt, {
                        className: "w-8 h-8 text-blue-600 animate-spin",
                      }),
                      r.jsx("div", {
                        className: "text-lg font-medium text-gray-700",
                        children: t || n("status.loadingMedMapData"),
                      }),
                    ],
                  }),
                  r.jsx("div", {
                    className:
                      "w-full bg-gray-200 rounded-full h-2 overflow-hidden",
                    children: r.jsx("div", {
                      className:
                        "h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-pulse",
                      style: { width: "100%" },
                    }),
                  }),
                  r.jsx("div", {
                    className: "text-sm text-gray-500 text-center max-w-xs",
                    children: n("status.loadingMedMapHint"),
                  }),
                ],
              }),
            }),
          ],
        })
      : null;
  },
  Lh = ({
    message: e,
    type: t,
    isVisible: n,
    onClose: s,
    duration: o = 3e3,
  }) => {
    const [l, a] = m.useState(!1);
    return (
      m.useEffect(() => {
        if (n) {
          a(!0);
          const i = setTimeout(() => {
            s();
          }, o);
          return () => clearTimeout(i);
        } else {
          const i = setTimeout(() => {
            a(!1);
          }, 300);
          return () => clearTimeout(i);
        }
      }, [n, o, s]),
      l
        ? r.jsx("div", {
            className: `fixed top-4 left-1/2 transform -translate-x-1/2 z-[9999] transition-all duration-300 ease-in-out ${
              n ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`,
            children: r.jsxs("div", {
              className: `flex items-center space-x-3 px-4 py-3 rounded-lg shadow-lg border ${
                t === "success"
                  ? "bg-green-50 border-green-200 text-green-800"
                  : "bg-red-50 border-red-200 text-red-800"
              }`,
              children: [
                t === "success"
                  ? r.jsx(Qm, { className: "w-5 h-5 text-green-600" })
                  : r.jsx(ih, { className: "w-5 h-5 text-red-600" }),
                r.jsx("span", {
                  className: "text-sm font-medium",
                  children: e,
                }),
                r.jsx("button", {
                  onClick: s,
                  className: `p-1 rounded-full hover:bg-black/10 transition-colors ${
                    t === "success" ? "text-green-600" : "text-red-600"
                  }`,
                  children: r.jsx(Fe, { className: "w-4 h-4" }),
                }),
              ],
            }),
          })
        : null
    );
  };
function Uh() {
  const {
    selectedDepartmentType: e,
    viewMode: t,
    isAuthenticated: n,
    setIsAuthenticated: s,
    setCurrentUser: o,
    isLoadingMedMap: l,
    notification: a,
    hideNotification: i,
    addParentContainerModalOpen: c,
    closeAddParentContainerModal: g,
    selectedDepartmentForAdd: h,
    addStoreItemModalOpen: p,
    closeAddStoreItemModal: f,
    selectedStoreShelfForAdd: b,
    addDepartmentModalOpen: w,
    closeAddDepartmentModal: M,
    qrCodeScannerModalOpen: C,
    qrCodeScannerMode: u,
    closeQRCodeScannerModal: d,
    addBarcodeModalOpen: x,
    closeAddBarcodeModal: k,
    initialBarcodeValue: O,
    containerDetailModalOpen: I,
    closeContainerDetailModal: A,
    selectedContainerForDetail: _,
    setMedicineList: ee,
    setIsLoadingMedicines: S,
    showNotification: U,
  } = Qe();
  m.useEffect(() => {
    (() => {
      try {
        const v = sessionStorage.getItem("user_session");
        if (v) {
          const N = JSON.parse(v);
          N.GUID && N.ID && N.Name
            ? (o(N), s(!0))
            : sessionStorage.removeItem("user_session");
        }
      } catch (v) {
        console.error("Error checking session:", v),
          sessionStorage.removeItem("user_session");
      }
    })();
  }, [s, o]),
    m.useEffect(() => {
      let se = !0;
      return (
        (async () => {
          if (n) {
            S(!0);
            try {
              console.log("開始載入藥品資料...");
              const N = await ke.getMedicineCloud();
              if ((console.log("藥品資料 API 回應:", N), !se)) return;
              N.Code === 200 && N.Data
                ? (ee(N.Data),
                  console.log(`✅ 成功載入 ${N.Data.length} 筆藥品資料`),
                  U(`載入 ${N.Data.length} 筆藥品資料`, "success"))
                : (console.warn("API 回應異常:", N),
                  ee([]),
                  U("藥品資料載入異常，請稍後重試", "error"));
            } catch (N) {
              if (!se) return;
              console.error("載入藥品資料失敗:", N),
                ee([]),
                U("無法連線到藥品資料庫，部分功能可能無法使用", "error");
            } finally {
              se && S(!1);
            }
          }
        })(),
        () => {
          se = !1;
        }
      );
    }, [n]);
  const q = (se) => {
      o(se), s(!0);
    },
    P = no.useRef(null),
    T = (se, v) => {
      if (
        (console.log("📸 QR掃描成功 - handleQRScanSuccess 被調用:", {
          barcode: se,
          medicineData: v,
          mode: u,
        }),
        console.log("📸 當前 mode:", u),
        console.log("📸 當前 viewMode:", t),
        console.log("📸 drugCanvasRef.current:", P.current),
        u === "track_Drug_mode")
      ) {
        if ((console.log("✅ 進入 track_Drug_mode 分支"), t !== "medicine")) {
          console.warn("⚠️ 當前不在藥品地圖視圖，無法定位藥品"),
            U("請切換到藥品地圖視圖後再使用此功能", "error");
          return;
        }
        P.current
          ? (console.log("✅ drugCanvasRef.current 存在"),
            console.log(
              "📸 drugCanvasRef.current.locateDrug 類型:",
              typeof P.current.locateDrug
            ),
            typeof P.current.locateDrug == "function"
              ? (console.log("✅ 呼叫 locateDrug 函數"),
                P.current.locateDrug(v))
              : console.warn("⚠️ locateDrug 不是函數"))
          : console.warn("⚠️ drugCanvasRef.current 不存在");
      } else console.log("⚠️ mode 不是 track_Drug_mode，當前 mode:", u);
    };
  return n
    ? r.jsxs("div", {
        className: "min-h-screen bg-gray-50",
        children: [
          r.jsx(ch, {}),
          r.jsx(uh, {}),
          r.jsx(ph, {}),
          r.jsx("div", {
            className: "fixed inset-0",
            children: r.jsx("div", {
              className: "w-full h-full",
              children:
                t === "department" ? r.jsx(gh, {}) : r.jsx(zd, { ref: P }),
            }),
          }),
          r.jsx(mh, {}),
          r.jsx(bh, {}),
          r.jsx(Nh, {}),
          r.jsx(jh, {}),
          r.jsx(Sh, {}),
          r.jsx(Ch, {}),
          r.jsx(kh, {}),
          r.jsx(Dh, { isOpen: p, onClose: f, storeShelf: b }),
          r.jsx(_h, { isOpen: w, onClose: M }),
          r.jsx(Ho, { isOpen: C, onClose: d, mode: u, onScanSuccess: T }),
          r.jsx(Mh, { isOpen: x, onClose: k, initialBarcode: O }),
          r.jsx(Rh, { isOpen: I, onClose: A, container: _ }),
          r.jsx(Th, {}),
          r.jsx(Ah, {}),
          r.jsx(Oh, { isVisible: l }),
          r.jsx(Lh, {
            message: a.message,
            type: a.type,
            isVisible: a.isVisible,
            onClose: i,
          }),
        ],
      })
    : r.jsx($h, { isOpen: !0, onLoginSuccess: q });
}
function Bh() {
  return r.jsx(Wm, { children: r.jsx(Hm, { children: r.jsx(Uh, {}) }) });
}
Rd(document.getElementById("root")).render(
  r.jsx(m.StrictMode, { children: r.jsx(Bh, {}) })
);
