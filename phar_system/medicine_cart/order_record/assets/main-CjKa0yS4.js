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
function lf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ba = { exports: {} },
  zl = {},
  Za = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vr = Symbol.for("react.element"),
  of = Symbol.for("react.portal"),
  sf = Symbol.for("react.fragment"),
  af = Symbol.for("react.strict_mode"),
  uf = Symbol.for("react.profiler"),
  cf = Symbol.for("react.provider"),
  df = Symbol.for("react.context"),
  ff = Symbol.for("react.forward_ref"),
  pf = Symbol.for("react.suspense"),
  mf = Symbol.for("react.memo"),
  hf = Symbol.for("react.lazy"),
  Os = Symbol.iterator;
function yf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Os && e[Os]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ja = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  qa = Object.assign,
  eu = {};
function Tn(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = eu),
    (this.updater = n || Ja));
}
Tn.prototype.isReactComponent = {};
Tn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Tn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function tu() {}
tu.prototype = Tn.prototype;
function mi(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = eu),
    (this.updater = n || Ja));
}
var hi = (mi.prototype = new tu());
hi.constructor = mi;
qa(hi, Tn.prototype);
hi.isPureReactComponent = !0;
var Is = Array.isArray,
  nu = Object.prototype.hasOwnProperty,
  yi = { current: null },
  ru = { key: !0, ref: !0, __self: !0, __source: !0 };
function lu(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      nu.call(t, r) && !ru.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), f = 0; f < a; f++) u[f] = arguments[f + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: vr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: yi.current,
  };
}
function gf(e, t) {
  return {
    $$typeof: vr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function gi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === vr;
}
function vf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Fs = /\/+/g;
function Xl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? vf("" + e.key)
    : t.toString(36);
}
function Kr(e, t, n, r, l) {
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
          case vr:
          case of:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Xl(i, 0) : r),
      Is(l)
        ? ((n = ""),
          e != null && (n = e.replace(Fs, "$&/") + "/"),
          Kr(l, t, n, "", function (f) {
            return f;
          }))
        : l != null &&
          (gi(l) &&
            (l = gf(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Fs, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Is(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var u = r + Xl(o, a);
      i += Kr(o, t, n, u, l);
    }
  else if (((u = yf(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(o = e.next()).done; )
      ((o = o.value), (u = r + Xl(o, a++)), (i += Kr(o, t, n, u, l)));
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
function Tr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Kr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function xf(e) {
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
var he = { current: null },
  Yr = { transition: null },
  wf = {
    ReactCurrentDispatcher: he,
    ReactCurrentBatchConfig: Yr,
    ReactCurrentOwner: yi,
  };
function ou() {
  throw Error("act(...) is not supported in production builds of React.");
}
F.Children = {
  map: Tr,
  forEach: function (e, t, n) {
    Tr(
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
      Tr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Tr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!gi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
F.Component = Tn;
F.Fragment = sf;
F.Profiler = uf;
F.PureComponent = mi;
F.StrictMode = af;
F.Suspense = pf;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wf;
F.act = ou;
F.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = qa({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = yi.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      nu.call(t, u) &&
        !ru.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var f = 0; f < u; f++) a[f] = arguments[f + 2];
    r.children = a;
  }
  return { $$typeof: vr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: df,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: cf, _context: e }),
    (e.Consumer = e)
  );
};
F.createElement = lu;
F.createFactory = function (e) {
  var t = lu.bind(null, e);
  return ((t.type = e), t);
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: ff, render: e };
};
F.isValidElement = gi;
F.lazy = function (e) {
  return { $$typeof: hf, _payload: { _status: -1, _result: e }, _init: xf };
};
F.memo = function (e, t) {
  return { $$typeof: mf, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
  var t = Yr.transition;
  Yr.transition = {};
  try {
    e();
  } finally {
    Yr.transition = t;
  }
};
F.unstable_act = ou;
F.useCallback = function (e, t) {
  return he.current.useCallback(e, t);
};
F.useContext = function (e) {
  return he.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
  return he.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
  return he.current.useEffect(e, t);
};
F.useId = function () {
  return he.current.useId();
};
F.useImperativeHandle = function (e, t, n) {
  return he.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function (e, t) {
  return he.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
  return he.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
  return he.current.useMemo(e, t);
};
F.useReducer = function (e, t, n) {
  return he.current.useReducer(e, t, n);
};
F.useRef = function (e) {
  return he.current.useRef(e);
};
F.useState = function (e) {
  return he.current.useState(e);
};
F.useSyncExternalStore = function (e, t, n) {
  return he.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function () {
  return he.current.useTransition();
};
F.version = "18.3.1";
Za.exports = F;
var E = Za.exports;
const kf = lf(E);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sf = E,
  Nf = Symbol.for("react.element"),
  jf = Symbol.for("react.fragment"),
  Cf = Object.prototype.hasOwnProperty,
  Ef = Sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  _f = { key: !0, ref: !0, __self: !0, __source: !0 };
function iu(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  (n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref));
  for (r in t) Cf.call(t, r) && !_f.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Nf,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Ef.current,
  };
}
zl.Fragment = jf;
zl.jsx = iu;
zl.jsxs = iu;
ba.exports = zl;
var s = ba.exports,
  su = { exports: {} },
  Te = {},
  au = { exports: {} },
  uu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, I) {
    var O = _.length;
    _.push(I);
    e: for (; 0 < O; ) {
      var W = (O - 1) >>> 1,
        J = _[W];
      if (0 < l(J, I)) ((_[W] = I), (_[O] = J), (O = W));
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var I = _[0],
      O = _.pop();
    if (O !== I) {
      _[0] = O;
      e: for (var W = 0, J = _.length, Ke = J >>> 1; W < Ke; ) {
        var De = 2 * (W + 1) - 1,
          Jt = _[De],
          qe = De + 1,
          Rt = _[qe];
        if (0 > l(Jt, O))
          qe < J && 0 > l(Rt, Jt)
            ? ((_[W] = Rt), (_[qe] = O), (W = qe))
            : ((_[W] = Jt), (_[De] = O), (W = De));
        else if (qe < J && 0 > l(Rt, O)) ((_[W] = Rt), (_[qe] = O), (W = qe));
        else break e;
      }
    }
    return I;
  }
  function l(_, I) {
    var O = _.sortIndex - I.sortIndex;
    return O !== 0 ? O : _.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var u = [],
    f = [],
    y = 1,
    h = null,
    m = 3,
    x = !1,
    g = !1,
    j = !1,
    P = typeof setTimeout == "function" ? setTimeout : null,
    c = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(_) {
    for (var I = n(f); I !== null; ) {
      if (I.callback === null) r(f);
      else if (I.startTime <= _)
        (r(f), (I.sortIndex = I.expirationTime), t(u, I));
      else break;
      I = n(f);
    }
  }
  function v(_) {
    if (((j = !1), p(_), !g))
      if (n(u) !== null) ((g = !0), Ge(C));
      else {
        var I = n(f);
        I !== null && Zt(v, I.startTime - _);
      }
  }
  function C(_, I) {
    ((g = !1), j && ((j = !1), c(L), (L = -1)), (x = !0));
    var O = m;
    try {
      for (
        p(I), h = n(u);
        h !== null && (!(h.expirationTime > I) || (_ && !ze()));
      ) {
        var W = h.callback;
        if (typeof W == "function") {
          ((h.callback = null), (m = h.priorityLevel));
          var J = W(h.expirationTime <= I);
          ((I = e.unstable_now()),
            typeof J == "function" ? (h.callback = J) : h === n(u) && r(u),
            p(I));
        } else r(u);
        h = n(u);
      }
      if (h !== null) var Ke = !0;
      else {
        var De = n(f);
        (De !== null && Zt(v, De.startTime - I), (Ke = !1));
      }
      return Ke;
    } finally {
      ((h = null), (m = O), (x = !1));
    }
  }
  var z = !1,
    D = null,
    L = -1,
    A = 5,
    M = -1;
  function ze() {
    return !(e.unstable_now() - M < A);
  }
  function ft() {
    if (D !== null) {
      var _ = e.unstable_now();
      M = _;
      var I = !0;
      try {
        I = D(!0, _);
      } finally {
        I ? bt() : ((z = !1), (D = null));
      }
    } else z = !1;
  }
  var bt;
  if (typeof d == "function")
    bt = function () {
      d(ft);
    };
  else if (typeof MessageChannel < "u") {
    var Dn = new MessageChannel(),
      Nr = Dn.port2;
    ((Dn.port1.onmessage = ft),
      (bt = function () {
        Nr.postMessage(null);
      }));
  } else
    bt = function () {
      P(ft, 0);
    };
  function Ge(_) {
    ((D = _), z || ((z = !0), bt()));
  }
  function Zt(_, I) {
    L = P(function () {
      _(e.unstable_now());
    }, I);
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
      g || x || ((g = !0), Ge(C));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (A = 0 < _ ? Math.floor(1e3 / _) : 5);
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
          var I = 3;
          break;
        default:
          I = m;
      }
      var O = m;
      m = I;
      try {
        return _();
      } finally {
        m = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, I) {
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
      var O = m;
      m = _;
      try {
        return I();
      } finally {
        m = O;
      }
    }),
    (e.unstable_scheduleCallback = function (_, I, O) {
      var W = e.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? W + O : W))
          : (O = W),
        _)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = O + J),
        (_ = {
          id: y++,
          callback: I,
          priorityLevel: _,
          startTime: O,
          expirationTime: J,
          sortIndex: -1,
        }),
        O > W
          ? ((_.sortIndex = O),
            t(f, _),
            n(u) === null &&
              _ === n(f) &&
              (j ? (c(L), (L = -1)) : (j = !0), Zt(v, O - W)))
          : ((_.sortIndex = J), t(u, _), g || x || ((g = !0), Ge(C))),
        _
      );
    }),
    (e.unstable_shouldYield = ze),
    (e.unstable_wrapCallback = function (_) {
      var I = m;
      return function () {
        var O = m;
        m = I;
        try {
          return _.apply(this, arguments);
        } finally {
          m = O;
        }
      };
    }));
})(uu);
au.exports = uu;
var Tf = au.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pf = E,
  _e = Tf;
function N(e) {
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
var cu = new Set(),
  tr = {};
function Yt(e, t) {
  (kn(e, t), kn(e + "Capture", t));
}
function kn(e, t) {
  for (tr[e] = t, e = 0; e < t.length; e++) cu.add(t[e]);
}
var st = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  So = Object.prototype.hasOwnProperty,
  zf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  $s = {},
  Us = {};
function Df(e) {
  return So.call(Us, e)
    ? !0
    : So.call($s, e)
      ? !1
      : zf.test(e)
        ? (Us[e] = !0)
        : (($s[e] = !0), !1);
}
function Lf(e, t, n, r) {
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
function Rf(e, t, n, r) {
  if (t === null || typeof t > "u" || Lf(e, t, n, r)) return !0;
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
var ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ae[e] = new ye(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ae[t] = new ye(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ae[e] = new ye(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ae[e] = new ye(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ae[e] = new ye(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ae[e] = new ye(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ae[e] = new ye(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ae[e] = new ye(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ae[e] = new ye(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var vi = /[\-:]([a-z])/g;
function xi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(vi, xi);
    ae[t] = new ye(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(vi, xi);
    ae[t] = new ye(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(vi, xi);
  ae[t] = new ye(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ae[e] = new ye(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ae.xlinkHref = new ye(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ae[e] = new ye(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function wi(e, t, n, r) {
  var l = ae.hasOwnProperty(t) ? ae[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Rf(t, n, l, r) && (n = null),
    r || l === null
      ? Df(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var dt = Pf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Pr = Symbol.for("react.element"),
  nn = Symbol.for("react.portal"),
  rn = Symbol.for("react.fragment"),
  ki = Symbol.for("react.strict_mode"),
  No = Symbol.for("react.profiler"),
  du = Symbol.for("react.provider"),
  fu = Symbol.for("react.context"),
  Si = Symbol.for("react.forward_ref"),
  jo = Symbol.for("react.suspense"),
  Co = Symbol.for("react.suspense_list"),
  Ni = Symbol.for("react.memo"),
  mt = Symbol.for("react.lazy"),
  pu = Symbol.for("react.offscreen"),
  Vs = Symbol.iterator;
function Rn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Vs && e[Vs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var X = Object.assign,
  bl;
function An(e) {
  if (bl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      bl = (t && t[1]) || "";
    }
  return (
    `
` +
    bl +
    e
  );
}
var Zl = !1;
function Jl(e, t) {
  if (!e || Zl) return "";
  Zl = !0;
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
        } catch (f) {
          var r = f;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (f) {
          r = f;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (f) {
        r = f;
      }
      e();
    }
  } catch (f) {
    if (f && r && typeof f.stack == "string") {
      for (
        var l = f.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          a = o.length - 1;
        1 <= i && 0 <= a && l[i] !== o[a];
      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (l[i] !== o[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || l[i] !== o[a])) {
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
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    ((Zl = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? An(e) : "";
}
function Mf(e) {
  switch (e.tag) {
    case 5:
      return An(e.type);
    case 16:
      return An("Lazy");
    case 13:
      return An("Suspense");
    case 19:
      return An("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Jl(e.type, !1)), e);
    case 11:
      return ((e = Jl(e.type.render, !1)), e);
    case 1:
      return ((e = Jl(e.type, !0)), e);
    default:
      return "";
  }
}
function Eo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case rn:
      return "Fragment";
    case nn:
      return "Portal";
    case No:
      return "Profiler";
    case ki:
      return "StrictMode";
    case jo:
      return "Suspense";
    case Co:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case fu:
        return (e.displayName || "Context") + ".Consumer";
      case du:
        return (e._context.displayName || "Context") + ".Provider";
      case Si:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ni:
        return (
          (t = e.displayName || null),
          t !== null ? t : Eo(e.type) || "Memo"
        );
      case mt:
        ((t = e._payload), (e = e._init));
        try {
          return Eo(e(t));
        } catch {}
    }
  return null;
}
function Of(e) {
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
      return Eo(t);
    case 8:
      return t === ki ? "StrictMode" : "Mode";
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
function Tt(e) {
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
function mu(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function If(e) {
  var t = mu(e) ? "checked" : "value",
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
  e._valueTracker || (e._valueTracker = If(e));
}
function hu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = mu(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ol(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function _o(e, t) {
  var n = t.checked;
  return X({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function As(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = Tt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function yu(e, t) {
  ((t = t.checked), t != null && wi(e, "checked", t, !1));
}
function To(e, t) {
  yu(e, t);
  var n = Tt(t.value),
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
    ? Po(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Po(e, t.type, Tt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Ws(e, t, n) {
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
function Po(e, t, n) {
  (t !== "number" || ol(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Wn = Array.isArray;
function hn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      ((l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + Tt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function zo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return X({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Bs(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (Wn(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: Tt(n) };
}
function gu(e, t) {
  var n = Tt(t.value),
    r = Tt(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function Hs(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function vu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Do(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? vu(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Dr,
  xu = (function (e) {
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
        Dr = Dr || document.createElement("div"),
          Dr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Dr.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function nr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Gn = {
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
  Ff = ["Webkit", "ms", "Moz", "O"];
Object.keys(Gn).forEach(function (e) {
  Ff.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Gn[t] = Gn[e]));
  });
});
function wu(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Gn.hasOwnProperty(e) && Gn[e])
      ? ("" + t).trim()
      : t + "px";
}
function ku(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = wu(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l));
    }
}
var $f = X(
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
function Lo(e, t) {
  if (t) {
    if ($f[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
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
var Mo = null;
function ji(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Oo = null,
  yn = null,
  gn = null;
function Qs(e) {
  if ((e = kr(e))) {
    if (typeof Oo != "function") throw Error(N(280));
    var t = e.stateNode;
    t && ((t = Ol(t)), Oo(e.stateNode, e.type, t));
  }
}
function Su(e) {
  yn ? (gn ? gn.push(e) : (gn = [e])) : (yn = e);
}
function Nu() {
  if (yn) {
    var e = yn,
      t = gn;
    if (((gn = yn = null), Qs(e), t)) for (e = 0; e < t.length; e++) Qs(t[e]);
  }
}
function ju(e, t) {
  return e(t);
}
function Cu() {}
var ql = !1;
function Eu(e, t, n) {
  if (ql) return e(t, n);
  ql = !0;
  try {
    return ju(e, t, n);
  } finally {
    ((ql = !1), (yn !== null || gn !== null) && (Cu(), Nu()));
  }
}
function rr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ol(n);
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
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var Io = !1;
if (st)
  try {
    var Mn = {};
    (Object.defineProperty(Mn, "passive", {
      get: function () {
        Io = !0;
      },
    }),
      window.addEventListener("test", Mn, Mn),
      window.removeEventListener("test", Mn, Mn));
  } catch {
    Io = !1;
  }
function Uf(e, t, n, r, l, o, i, a, u) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (y) {
    this.onError(y);
  }
}
var Kn = !1,
  il = null,
  sl = !1,
  Fo = null,
  Vf = {
    onError: function (e) {
      ((Kn = !0), (il = e));
    },
  };
function Af(e, t, n, r, l, o, i, a, u) {
  ((Kn = !1), (il = null), Uf.apply(Vf, arguments));
}
function Wf(e, t, n, r, l, o, i, a, u) {
  if ((Af.apply(this, arguments), Kn)) {
    if (Kn) {
      var f = il;
      ((Kn = !1), (il = null));
    } else throw Error(N(198));
    sl || ((sl = !0), (Fo = f));
  }
}
function Xt(e) {
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
function _u(e) {
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
function Gs(e) {
  if (Xt(e) !== e) throw Error(N(188));
}
function Bf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Xt(e)), t === null)) throw Error(N(188));
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
        if (o === n) return (Gs(l), e);
        if (o === r) return (Gs(l), t);
        o = o.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) ((n = l), (r = o));
    else {
      for (var i = !1, a = l.child; a; ) {
        if (a === n) {
          ((i = !0), (n = l), (r = o));
          break;
        }
        if (a === r) {
          ((i = !0), (r = l), (n = o));
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = o.child; a; ) {
          if (a === n) {
            ((i = !0), (n = o), (r = l));
            break;
          }
          if (a === r) {
            ((i = !0), (r = o), (n = l));
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function Tu(e) {
  return ((e = Bf(e)), e !== null ? Pu(e) : null);
}
function Pu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Pu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var zu = _e.unstable_scheduleCallback,
  Ks = _e.unstable_cancelCallback,
  Hf = _e.unstable_shouldYield,
  Qf = _e.unstable_requestPaint,
  q = _e.unstable_now,
  Gf = _e.unstable_getCurrentPriorityLevel,
  Ci = _e.unstable_ImmediatePriority,
  Du = _e.unstable_UserBlockingPriority,
  al = _e.unstable_NormalPriority,
  Kf = _e.unstable_LowPriority,
  Lu = _e.unstable_IdlePriority,
  Dl = null,
  Ze = null;
function Yf(e) {
  if (Ze && typeof Ze.onCommitFiberRoot == "function")
    try {
      Ze.onCommitFiberRoot(Dl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Be = Math.clz32 ? Math.clz32 : Zf,
  Xf = Math.log,
  bf = Math.LN2;
function Zf(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Xf(e) / bf) | 0)) | 0);
}
var Lr = 64,
  Rr = 4194304;
function Bn(e) {
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
function ul(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~l;
    a !== 0 ? (r = Bn(a)) : ((o &= i), o !== 0 && (r = Bn(o)));
  } else ((i = n & ~l), i !== 0 ? (r = Bn(i)) : o !== 0 && (r = Bn(o)));
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
function Jf(e, t) {
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
function qf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;
  ) {
    var i = 31 - Be(o),
      a = 1 << i,
      u = l[i];
    (u === -1
      ? (!(a & n) || a & r) && (l[i] = Jf(a, t))
      : u <= t && (e.expiredLanes |= a),
      (o &= ~a));
  }
}
function $o(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ru() {
  var e = Lr;
  return ((Lr <<= 1), !(Lr & 4194240) && (Lr = 64), e);
}
function eo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function xr(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Be(t)),
    (e[t] = n));
}
function ep(e, t) {
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
function Ei(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Be(n),
      l = 1 << r;
    ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
  }
}
var V = 0;
function Mu(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Ou,
  _i,
  Iu,
  Fu,
  $u,
  Uo = !1,
  Mr = [],
  wt = null,
  kt = null,
  St = null,
  lr = new Map(),
  or = new Map(),
  yt = [],
  tp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Ys(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      wt = null;
      break;
    case "dragenter":
    case "dragleave":
      kt = null;
      break;
    case "mouseover":
    case "mouseout":
      St = null;
      break;
    case "pointerover":
    case "pointerout":
      lr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      or.delete(t.pointerId);
  }
}
function On(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = kr(t)), t !== null && _i(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function np(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ((wt = On(wt, e, t, n, r, l)), !0);
    case "dragenter":
      return ((kt = On(kt, e, t, n, r, l)), !0);
    case "mouseover":
      return ((St = On(St, e, t, n, r, l)), !0);
    case "pointerover":
      var o = l.pointerId;
      return (lr.set(o, On(lr.get(o) || null, e, t, n, r, l)), !0);
    case "gotpointercapture":
      return (
        (o = l.pointerId),
        or.set(o, On(or.get(o) || null, e, t, n, r, l)),
        !0
      );
  }
  return !1;
}
function Uu(e) {
  var t = $t(e.target);
  if (t !== null) {
    var n = Xt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = _u(n)), t !== null)) {
          ((e.blockedOn = t),
            $u(e.priority, function () {
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
function Xr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Vo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((Mo = r), n.target.dispatchEvent(r), (Mo = null));
    } else return ((t = kr(n)), t !== null && _i(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Xs(e, t, n) {
  Xr(e) && n.delete(t);
}
function rp() {
  ((Uo = !1),
    wt !== null && Xr(wt) && (wt = null),
    kt !== null && Xr(kt) && (kt = null),
    St !== null && Xr(St) && (St = null),
    lr.forEach(Xs),
    or.forEach(Xs));
}
function In(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Uo ||
      ((Uo = !0),
      _e.unstable_scheduleCallback(_e.unstable_NormalPriority, rp)));
}
function ir(e) {
  function t(l) {
    return In(l, e);
  }
  if (0 < Mr.length) {
    In(Mr[0], e);
    for (var n = 1; n < Mr.length; n++) {
      var r = Mr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    wt !== null && In(wt, e),
      kt !== null && In(kt, e),
      St !== null && In(St, e),
      lr.forEach(t),
      or.forEach(t),
      n = 0;
    n < yt.length;
    n++
  )
    ((r = yt[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < yt.length && ((n = yt[0]), n.blockedOn === null); )
    (Uu(n), n.blockedOn === null && yt.shift());
}
var vn = dt.ReactCurrentBatchConfig,
  cl = !0;
function lp(e, t, n, r) {
  var l = V,
    o = vn.transition;
  vn.transition = null;
  try {
    ((V = 1), Ti(e, t, n, r));
  } finally {
    ((V = l), (vn.transition = o));
  }
}
function op(e, t, n, r) {
  var l = V,
    o = vn.transition;
  vn.transition = null;
  try {
    ((V = 4), Ti(e, t, n, r));
  } finally {
    ((V = l), (vn.transition = o));
  }
}
function Ti(e, t, n, r) {
  if (cl) {
    var l = Vo(e, t, n, r);
    if (l === null) (co(e, t, r, dl, n), Ys(e, r));
    else if (np(l, e, t, n, r)) r.stopPropagation();
    else if ((Ys(e, r), t & 4 && -1 < tp.indexOf(e))) {
      for (; l !== null; ) {
        var o = kr(l);
        if (
          (o !== null && Ou(o),
          (o = Vo(e, t, n, r)),
          o === null && co(e, t, r, dl, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else co(e, t, r, null, n);
  }
}
var dl = null;
function Vo(e, t, n, r) {
  if (((dl = null), (e = ji(r)), (e = $t(e)), e !== null))
    if (((t = Xt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = _u(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((dl = e), null);
}
function Vu(e) {
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
      switch (Gf()) {
        case Ci:
          return 1;
        case Du:
          return 4;
        case al:
        case Kf:
          return 16;
        case Lu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var vt = null,
  Pi = null,
  br = null;
function Au() {
  if (br) return br;
  var e,
    t = Pi,
    n = t.length,
    r,
    l = "value" in vt ? vt.value : vt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (br = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Zr(e) {
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
function bs() {
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
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Or
        : bs),
      (this.isPropagationStopped = bs),
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
var Pn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  zi = Pe(Pn),
  wr = X({}, Pn, { view: 0, detail: 0 }),
  ip = Pe(wr),
  to,
  no,
  Fn,
  Ll = X({}, wr, {
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
    getModifierState: Di,
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
        : (e !== Fn &&
            (Fn && e.type === "mousemove"
              ? ((to = e.screenX - Fn.screenX), (no = e.screenY - Fn.screenY))
              : (no = to = 0),
            (Fn = e)),
          to);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : no;
    },
  }),
  Zs = Pe(Ll),
  sp = X({}, Ll, { dataTransfer: 0 }),
  ap = Pe(sp),
  up = X({}, wr, { relatedTarget: 0 }),
  ro = Pe(up),
  cp = X({}, Pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  dp = Pe(cp),
  fp = X({}, Pn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  pp = Pe(fp),
  mp = X({}, Pn, { data: 0 }),
  Js = Pe(mp),
  hp = {
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
  yp = {
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
  gp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function vp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = gp[e]) ? !!t[e] : !1;
}
function Di() {
  return vp;
}
var xp = X({}, wr, {
    key: function (e) {
      if (e.key) {
        var t = hp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Zr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? yp[e.keyCode] || "Unidentified"
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
    getModifierState: Di,
    charCode: function (e) {
      return e.type === "keypress" ? Zr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Zr(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  wp = Pe(xp),
  kp = X({}, Ll, {
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
  qs = Pe(kp),
  Sp = X({}, wr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Di,
  }),
  Np = Pe(Sp),
  jp = X({}, Pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Cp = Pe(jp),
  Ep = X({}, Ll, {
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
  _p = Pe(Ep),
  Tp = [9, 13, 27, 32],
  Li = st && "CompositionEvent" in window,
  Yn = null;
st && "documentMode" in document && (Yn = document.documentMode);
var Pp = st && "TextEvent" in window && !Yn,
  Wu = st && (!Li || (Yn && 8 < Yn && 11 >= Yn)),
  ea = " ",
  ta = !1;
function Bu(e, t) {
  switch (e) {
    case "keyup":
      return Tp.indexOf(t.keyCode) !== -1;
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
function Hu(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var ln = !1;
function zp(e, t) {
  switch (e) {
    case "compositionend":
      return Hu(t);
    case "keypress":
      return t.which !== 32 ? null : ((ta = !0), ea);
    case "textInput":
      return ((e = t.data), e === ea && ta ? null : e);
    default:
      return null;
  }
}
function Dp(e, t) {
  if (ln)
    return e === "compositionend" || (!Li && Bu(e, t))
      ? ((e = Au()), (br = Pi = vt = null), (ln = !1), e)
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
      return Wu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Lp = {
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
function na(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Lp[e.type] : t === "textarea";
}
function Qu(e, t, n, r) {
  (Su(r),
    (t = fl(t, "onChange")),
    0 < t.length &&
      ((n = new zi("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var Xn = null,
  sr = null;
function Rp(e) {
  nc(e, 0);
}
function Rl(e) {
  var t = an(e);
  if (hu(t)) return e;
}
function Mp(e, t) {
  if (e === "change") return t;
}
var Gu = !1;
if (st) {
  var lo;
  if (st) {
    var oo = "oninput" in document;
    if (!oo) {
      var ra = document.createElement("div");
      (ra.setAttribute("oninput", "return;"),
        (oo = typeof ra.oninput == "function"));
    }
    lo = oo;
  } else lo = !1;
  Gu = lo && (!document.documentMode || 9 < document.documentMode);
}
function la() {
  Xn && (Xn.detachEvent("onpropertychange", Ku), (sr = Xn = null));
}
function Ku(e) {
  if (e.propertyName === "value" && Rl(sr)) {
    var t = [];
    (Qu(t, sr, e, ji(e)), Eu(Rp, t));
  }
}
function Op(e, t, n) {
  e === "focusin"
    ? (la(), (Xn = t), (sr = n), Xn.attachEvent("onpropertychange", Ku))
    : e === "focusout" && la();
}
function Ip(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Rl(sr);
}
function Fp(e, t) {
  if (e === "click") return Rl(t);
}
function $p(e, t) {
  if (e === "input" || e === "change") return Rl(t);
}
function Up(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Qe = typeof Object.is == "function" ? Object.is : Up;
function ar(e, t) {
  if (Qe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!So.call(t, l) || !Qe(e[l], t[l])) return !1;
  }
  return !0;
}
function oa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ia(e, t) {
  var n = oa(e);
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
    n = oa(n);
  }
}
function Yu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Yu(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Xu() {
  for (var e = window, t = ol(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ol(e.document);
  }
  return t;
}
function Ri(e) {
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
function Vp(e) {
  var t = Xu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Yu(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ri(n)) {
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
          (l = ia(n, o)));
        var i = ia(n, r);
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
var Ap = st && "documentMode" in document && 11 >= document.documentMode,
  on = null,
  Ao = null,
  bn = null,
  Wo = !1;
function sa(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Wo ||
    on == null ||
    on !== ol(r) ||
    ((r = on),
    "selectionStart" in r && Ri(r)
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
    (bn && ar(bn, r)) ||
      ((bn = r),
      (r = fl(Ao, "onSelect")),
      0 < r.length &&
        ((t = new zi("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = on))));
}
function Ir(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var sn = {
    animationend: Ir("Animation", "AnimationEnd"),
    animationiteration: Ir("Animation", "AnimationIteration"),
    animationstart: Ir("Animation", "AnimationStart"),
    transitionend: Ir("Transition", "TransitionEnd"),
  },
  io = {},
  bu = {};
st &&
  ((bu = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete sn.animationend.animation,
    delete sn.animationiteration.animation,
    delete sn.animationstart.animation),
  "TransitionEvent" in window || delete sn.transitionend.transition);
function Ml(e) {
  if (io[e]) return io[e];
  if (!sn[e]) return e;
  var t = sn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in bu) return (io[e] = t[n]);
  return e;
}
var Zu = Ml("animationend"),
  Ju = Ml("animationiteration"),
  qu = Ml("animationstart"),
  ec = Ml("transitionend"),
  tc = new Map(),
  aa =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function zt(e, t) {
  (tc.set(e, t), Yt(t, [e]));
}
for (var so = 0; so < aa.length; so++) {
  var ao = aa[so],
    Wp = ao.toLowerCase(),
    Bp = ao[0].toUpperCase() + ao.slice(1);
  zt(Wp, "on" + Bp);
}
zt(Zu, "onAnimationEnd");
zt(Ju, "onAnimationIteration");
zt(qu, "onAnimationStart");
zt("dblclick", "onDoubleClick");
zt("focusin", "onFocus");
zt("focusout", "onBlur");
zt(ec, "onTransitionEnd");
kn("onMouseEnter", ["mouseout", "mouseover"]);
kn("onMouseLeave", ["mouseout", "mouseover"]);
kn("onPointerEnter", ["pointerout", "pointerover"]);
kn("onPointerLeave", ["pointerout", "pointerover"]);
Yt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Yt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Yt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Yt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Yt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Yt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Hn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Hp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Hn));
function ua(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), Wf(r, t, void 0, e), (e.currentTarget = null));
}
function nc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            u = a.instance,
            f = a.currentTarget;
          if (((a = a.listener), u !== o && l.isPropagationStopped())) break e;
          (ua(l, a, f), (o = u));
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (u = a.instance),
            (f = a.currentTarget),
            (a = a.listener),
            u !== o && l.isPropagationStopped())
          )
            break e;
          (ua(l, a, f), (o = u));
        }
    }
  }
  if (sl) throw ((e = Fo), (sl = !1), (Fo = null), e);
}
function H(e, t) {
  var n = t[Ko];
  n === void 0 && (n = t[Ko] = new Set());
  var r = e + "__bubble";
  n.has(r) || (rc(t, e, 2, !1), n.add(r));
}
function uo(e, t, n) {
  var r = 0;
  (t && (r |= 4), rc(n, e, r, t));
}
var Fr = "_reactListening" + Math.random().toString(36).slice(2);
function ur(e) {
  if (!e[Fr]) {
    ((e[Fr] = !0),
      cu.forEach(function (n) {
        n !== "selectionchange" && (Hp.has(n) || uo(n, !1, e), uo(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Fr] || ((t[Fr] = !0), uo("selectionchange", !1, t));
  }
}
function rc(e, t, n, r) {
  switch (Vu(t)) {
    case 1:
      var l = lp;
      break;
    case 4:
      l = op;
      break;
    default:
      l = Ti;
  }
  ((n = l.bind(null, t, n, e)),
    (l = void 0),
    !Io ||
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
function co(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
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
        for (; a !== null; ) {
          if (((i = $t(a)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = o = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Eu(function () {
    var f = o,
      y = ji(n),
      h = [];
    e: {
      var m = tc.get(e);
      if (m !== void 0) {
        var x = zi,
          g = e;
        switch (e) {
          case "keypress":
            if (Zr(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = wp;
            break;
          case "focusin":
            ((g = "focus"), (x = ro));
            break;
          case "focusout":
            ((g = "blur"), (x = ro));
            break;
          case "beforeblur":
          case "afterblur":
            x = ro;
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
            x = Zs;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = ap;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Np;
            break;
          case Zu:
          case Ju:
          case qu:
            x = dp;
            break;
          case ec:
            x = Cp;
            break;
          case "scroll":
            x = ip;
            break;
          case "wheel":
            x = _p;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = pp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = qs;
        }
        var j = (t & 4) !== 0,
          P = !j && e === "scroll",
          c = j ? (m !== null ? m + "Capture" : null) : m;
        j = [];
        for (var d = f, p; d !== null; ) {
          p = d;
          var v = p.stateNode;
          if (
            (p.tag === 5 &&
              v !== null &&
              ((p = v),
              c !== null && ((v = rr(d, c)), v != null && j.push(cr(d, v, p)))),
            P)
          )
            break;
          d = d.return;
        }
        0 < j.length &&
          ((m = new x(m, g, null, n, y)), h.push({ event: m, listeners: j }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Mo &&
            (g = n.relatedTarget || n.fromElement) &&
            ($t(g) || g[at]))
        )
          break e;
        if (
          (x || m) &&
          ((m =
            y.window === y
              ? y
              : (m = y.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
          x
            ? ((g = n.relatedTarget || n.toElement),
              (x = f),
              (g = g ? $t(g) : null),
              g !== null &&
                ((P = Xt(g)), g !== P || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((x = null), (g = f)),
          x !== g)
        ) {
          if (
            ((j = Zs),
            (v = "onMouseLeave"),
            (c = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((j = qs),
              (v = "onPointerLeave"),
              (c = "onPointerEnter"),
              (d = "pointer")),
            (P = x == null ? m : an(x)),
            (p = g == null ? m : an(g)),
            (m = new j(v, d + "leave", x, n, y)),
            (m.target = P),
            (m.relatedTarget = p),
            (v = null),
            $t(y) === f &&
              ((j = new j(c, d + "enter", g, n, y)),
              (j.target = p),
              (j.relatedTarget = P),
              (v = j)),
            (P = v),
            x && g)
          )
            t: {
              for (j = x, c = g, d = 0, p = j; p; p = en(p)) d++;
              for (p = 0, v = c; v; v = en(v)) p++;
              for (; 0 < d - p; ) ((j = en(j)), d--);
              for (; 0 < p - d; ) ((c = en(c)), p--);
              for (; d--; ) {
                if (j === c || (c !== null && j === c.alternate)) break t;
                ((j = en(j)), (c = en(c)));
              }
              j = null;
            }
          else j = null;
          (x !== null && ca(h, m, x, j, !1),
            g !== null && P !== null && ca(h, P, g, j, !0));
        }
      }
      e: {
        if (
          ((m = f ? an(f) : window),
          (x = m.nodeName && m.nodeName.toLowerCase()),
          x === "select" || (x === "input" && m.type === "file"))
        )
          var C = Mp;
        else if (na(m))
          if (Gu) C = $p;
          else {
            C = Ip;
            var z = Op;
          }
        else
          (x = m.nodeName) &&
            x.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (C = Fp);
        if (C && (C = C(e, f))) {
          Qu(h, C, n, y);
          break e;
        }
        (z && z(e, m, f),
          e === "focusout" &&
            (z = m._wrapperState) &&
            z.controlled &&
            m.type === "number" &&
            Po(m, "number", m.value));
      }
      switch (((z = f ? an(f) : window), e)) {
        case "focusin":
          (na(z) || z.contentEditable === "true") &&
            ((on = z), (Ao = f), (bn = null));
          break;
        case "focusout":
          bn = Ao = on = null;
          break;
        case "mousedown":
          Wo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Wo = !1), sa(h, n, y));
          break;
        case "selectionchange":
          if (Ap) break;
        case "keydown":
        case "keyup":
          sa(h, n, y);
      }
      var D;
      if (Li)
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
        ln
          ? Bu(e, n) && (L = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      (L &&
        (Wu &&
          n.locale !== "ko" &&
          (ln || L !== "onCompositionStart"
            ? L === "onCompositionEnd" && ln && (D = Au())
            : ((vt = y),
              (Pi = "value" in vt ? vt.value : vt.textContent),
              (ln = !0))),
        (z = fl(f, L)),
        0 < z.length &&
          ((L = new Js(L, e, null, n, y)),
          h.push({ event: L, listeners: z }),
          D ? (L.data = D) : ((D = Hu(n)), D !== null && (L.data = D)))),
        (D = Pp ? zp(e, n) : Dp(e, n)) &&
          ((f = fl(f, "onBeforeInput")),
          0 < f.length &&
            ((y = new Js("onBeforeInput", "beforeinput", null, n, y)),
            h.push({ event: y, listeners: f }),
            (y.data = D))));
    }
    nc(h, t);
  });
}
function cr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function fl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    (l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = rr(e, n)),
      o != null && r.unshift(cr(e, o, l)),
      (o = rr(e, t)),
      o != null && r.push(cr(e, o, l))),
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
function ca(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      f = a.stateNode;
    if (u !== null && u === r) break;
    (a.tag === 5 &&
      f !== null &&
      ((a = f),
      l
        ? ((u = rr(n, o)), u != null && i.unshift(cr(n, u, a)))
        : l || ((u = rr(n, o)), u != null && i.push(cr(n, u, a)))),
      (n = n.return));
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Qp = /\r\n?/g,
  Gp = /\u0000|\uFFFD/g;
function da(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Qp,
      `
`,
    )
    .replace(Gp, "");
}
function $r(e, t, n) {
  if (((t = da(t)), da(e) !== t && n)) throw Error(N(425));
}
function pl() {}
var Bo = null,
  Ho = null;
function Qo(e, t) {
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
var Go = typeof setTimeout == "function" ? setTimeout : void 0,
  Kp = typeof clearTimeout == "function" ? clearTimeout : void 0,
  fa = typeof Promise == "function" ? Promise : void 0,
  Yp =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof fa < "u"
        ? function (e) {
            return fa.resolve(null).then(e).catch(Xp);
          }
        : Go;
function Xp(e) {
  setTimeout(function () {
    throw e;
  });
}
function fo(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(l), ir(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  ir(t);
}
function Nt(e) {
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
function pa(e) {
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
  be = "__reactFiber$" + zn,
  dr = "__reactProps$" + zn,
  at = "__reactContainer$" + zn,
  Ko = "__reactEvents$" + zn,
  bp = "__reactListeners$" + zn,
  Zp = "__reactHandles$" + zn;
function $t(e) {
  var t = e[be];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[at] || n[be])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = pa(e); e !== null; ) {
          if ((n = e[be])) return n;
          e = pa(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function kr(e) {
  return (
    (e = e[be] || e[at]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function an(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function Ol(e) {
  return e[dr] || null;
}
var Yo = [],
  un = -1;
function Dt(e) {
  return { current: e };
}
function Q(e) {
  0 > un || ((e.current = Yo[un]), (Yo[un] = null), un--);
}
function B(e, t) {
  (un++, (Yo[un] = e.current), (e.current = t));
}
var Pt = {},
  fe = Dt(Pt),
  xe = Dt(!1),
  Bt = Pt;
function Sn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Pt;
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
function we(e) {
  return ((e = e.childContextTypes), e != null);
}
function ml() {
  (Q(xe), Q(fe));
}
function ma(e, t, n) {
  if (fe.current !== Pt) throw Error(N(168));
  (B(fe, t), B(xe, n));
}
function lc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(N(108, Of(e) || "Unknown", l));
  return X({}, n, r);
}
function hl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Pt),
    (Bt = fe.current),
    B(fe, e),
    B(xe, xe.current),
    !0
  );
}
function ha(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  (n
    ? ((e = lc(e, t, Bt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Q(xe),
      Q(fe),
      B(fe, e))
    : Q(xe),
    B(xe, n));
}
var rt = null,
  Il = !1,
  po = !1;
function oc(e) {
  rt === null ? (rt = [e]) : rt.push(e);
}
function Jp(e) {
  ((Il = !0), oc(e));
}
function Lt() {
  if (!po && rt !== null) {
    po = !0;
    var e = 0,
      t = V;
    try {
      var n = rt;
      for (V = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((rt = null), (Il = !1));
    } catch (l) {
      throw (rt !== null && (rt = rt.slice(e + 1)), zu(Ci, Lt), l);
    } finally {
      ((V = t), (po = !1));
    }
  }
  return null;
}
var cn = [],
  dn = 0,
  yl = null,
  gl = 0,
  Le = [],
  Re = 0,
  Ht = null,
  lt = 1,
  ot = "";
function It(e, t) {
  ((cn[dn++] = gl), (cn[dn++] = yl), (yl = e), (gl = t));
}
function ic(e, t, n) {
  ((Le[Re++] = lt), (Le[Re++] = ot), (Le[Re++] = Ht), (Ht = e));
  var r = lt;
  e = ot;
  var l = 32 - Be(r) - 1;
  ((r &= ~(1 << l)), (n += 1));
  var o = 32 - Be(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    ((o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (lt = (1 << (32 - Be(t) + l)) | (n << l) | r),
      (ot = o + e));
  } else ((lt = (1 << o) | (n << l) | r), (ot = e));
}
function Mi(e) {
  e.return !== null && (It(e, 1), ic(e, 1, 0));
}
function Oi(e) {
  for (; e === yl; )
    ((yl = cn[--dn]), (cn[dn] = null), (gl = cn[--dn]), (cn[dn] = null));
  for (; e === Ht; )
    ((Ht = Le[--Re]),
      (Le[Re] = null),
      (ot = Le[--Re]),
      (Le[Re] = null),
      (lt = Le[--Re]),
      (Le[Re] = null));
}
var Ee = null,
  Ce = null,
  G = !1,
  We = null;
function sc(e, t) {
  var n = Me(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function ya(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ee = e), (Ce = Nt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ee = e), (Ce = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ht !== null ? { id: lt, overflow: ot } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Me(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ee = e),
            (Ce = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Xo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function bo(e) {
  if (G) {
    var t = Ce;
    if (t) {
      var n = t;
      if (!ya(e, t)) {
        if (Xo(e)) throw Error(N(418));
        t = Nt(n.nextSibling);
        var r = Ee;
        t && ya(e, t)
          ? sc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (G = !1), (Ee = e));
      }
    } else {
      if (Xo(e)) throw Error(N(418));
      ((e.flags = (e.flags & -4097) | 2), (G = !1), (Ee = e));
    }
  }
}
function ga(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ee = e;
}
function Ur(e) {
  if (e !== Ee) return !1;
  if (!G) return (ga(e), (G = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Qo(e.type, e.memoizedProps))),
    t && (t = Ce))
  ) {
    if (Xo(e)) throw (ac(), Error(N(418)));
    for (; t; ) (sc(e, t), (t = Nt(t.nextSibling)));
  }
  if ((ga(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ce = Nt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ce = null;
    }
  } else Ce = Ee ? Nt(e.stateNode.nextSibling) : null;
  return !0;
}
function ac() {
  for (var e = Ce; e; ) e = Nt(e.nextSibling);
}
function Nn() {
  ((Ce = Ee = null), (G = !1));
}
function Ii(e) {
  We === null ? (We = [e]) : We.push(e);
}
var qp = dt.ReactCurrentBatchConfig;
function $n(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var a = l.refs;
            i === null ? delete a[o] : (a[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Vr(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function va(e) {
  var t = e._init;
  return t(e._payload);
}
function uc(e) {
  function t(c, d) {
    if (e) {
      var p = c.deletions;
      p === null ? ((c.deletions = [d]), (c.flags |= 16)) : p.push(d);
    }
  }
  function n(c, d) {
    if (!e) return null;
    for (; d !== null; ) (t(c, d), (d = d.sibling));
    return null;
  }
  function r(c, d) {
    for (c = new Map(); d !== null; )
      (d.key !== null ? c.set(d.key, d) : c.set(d.index, d), (d = d.sibling));
    return c;
  }
  function l(c, d) {
    return ((c = _t(c, d)), (c.index = 0), (c.sibling = null), c);
  }
  function o(c, d, p) {
    return (
      (c.index = p),
      e
        ? ((p = c.alternate),
          p !== null
            ? ((p = p.index), p < d ? ((c.flags |= 2), d) : p)
            : ((c.flags |= 2), d))
        : ((c.flags |= 1048576), d)
    );
  }
  function i(c) {
    return (e && c.alternate === null && (c.flags |= 2), c);
  }
  function a(c, d, p, v) {
    return d === null || d.tag !== 6
      ? ((d = wo(p, c.mode, v)), (d.return = c), d)
      : ((d = l(d, p)), (d.return = c), d);
  }
  function u(c, d, p, v) {
    var C = p.type;
    return C === rn
      ? y(c, d, p.props.children, v, p.key)
      : d !== null &&
          (d.elementType === C ||
            (typeof C == "object" &&
              C !== null &&
              C.$$typeof === mt &&
              va(C) === d.type))
        ? ((v = l(d, p.props)), (v.ref = $n(c, d, p)), (v.return = c), v)
        : ((v = ll(p.type, p.key, p.props, null, c.mode, v)),
          (v.ref = $n(c, d, p)),
          (v.return = c),
          v);
  }
  function f(c, d, p, v) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== p.containerInfo ||
      d.stateNode.implementation !== p.implementation
      ? ((d = ko(p, c.mode, v)), (d.return = c), d)
      : ((d = l(d, p.children || [])), (d.return = c), d);
  }
  function y(c, d, p, v, C) {
    return d === null || d.tag !== 7
      ? ((d = Wt(p, c.mode, v, C)), (d.return = c), d)
      : ((d = l(d, p)), (d.return = c), d);
  }
  function h(c, d, p) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return ((d = wo("" + d, c.mode, p)), (d.return = c), d);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Pr:
          return (
            (p = ll(d.type, d.key, d.props, null, c.mode, p)),
            (p.ref = $n(c, null, d)),
            (p.return = c),
            p
          );
        case nn:
          return ((d = ko(d, c.mode, p)), (d.return = c), d);
        case mt:
          var v = d._init;
          return h(c, v(d._payload), p);
      }
      if (Wn(d) || Rn(d))
        return ((d = Wt(d, c.mode, p, null)), (d.return = c), d);
      Vr(c, d);
    }
    return null;
  }
  function m(c, d, p, v) {
    var C = d !== null ? d.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return C !== null ? null : a(c, d, "" + p, v);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Pr:
          return p.key === C ? u(c, d, p, v) : null;
        case nn:
          return p.key === C ? f(c, d, p, v) : null;
        case mt:
          return ((C = p._init), m(c, d, C(p._payload), v));
      }
      if (Wn(p) || Rn(p)) return C !== null ? null : y(c, d, p, v, null);
      Vr(c, p);
    }
    return null;
  }
  function x(c, d, p, v, C) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return ((c = c.get(p) || null), a(d, c, "" + v, C));
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Pr:
          return (
            (c = c.get(v.key === null ? p : v.key) || null),
            u(d, c, v, C)
          );
        case nn:
          return (
            (c = c.get(v.key === null ? p : v.key) || null),
            f(d, c, v, C)
          );
        case mt:
          var z = v._init;
          return x(c, d, p, z(v._payload), C);
      }
      if (Wn(v) || Rn(v)) return ((c = c.get(p) || null), y(d, c, v, C, null));
      Vr(d, v);
    }
    return null;
  }
  function g(c, d, p, v) {
    for (
      var C = null, z = null, D = d, L = (d = 0), A = null;
      D !== null && L < p.length;
      L++
    ) {
      D.index > L ? ((A = D), (D = null)) : (A = D.sibling);
      var M = m(c, D, p[L], v);
      if (M === null) {
        D === null && (D = A);
        break;
      }
      (e && D && M.alternate === null && t(c, D),
        (d = o(M, d, L)),
        z === null ? (C = M) : (z.sibling = M),
        (z = M),
        (D = A));
    }
    if (L === p.length) return (n(c, D), G && It(c, L), C);
    if (D === null) {
      for (; L < p.length; L++)
        ((D = h(c, p[L], v)),
          D !== null &&
            ((d = o(D, d, L)),
            z === null ? (C = D) : (z.sibling = D),
            (z = D)));
      return (G && It(c, L), C);
    }
    for (D = r(c, D); L < p.length; L++)
      ((A = x(D, c, L, p[L], v)),
        A !== null &&
          (e && A.alternate !== null && D.delete(A.key === null ? L : A.key),
          (d = o(A, d, L)),
          z === null ? (C = A) : (z.sibling = A),
          (z = A)));
    return (
      e &&
        D.forEach(function (ze) {
          return t(c, ze);
        }),
      G && It(c, L),
      C
    );
  }
  function j(c, d, p, v) {
    var C = Rn(p);
    if (typeof C != "function") throw Error(N(150));
    if (((p = C.call(p)), p == null)) throw Error(N(151));
    for (
      var z = (C = null), D = d, L = (d = 0), A = null, M = p.next();
      D !== null && !M.done;
      L++, M = p.next()
    ) {
      D.index > L ? ((A = D), (D = null)) : (A = D.sibling);
      var ze = m(c, D, M.value, v);
      if (ze === null) {
        D === null && (D = A);
        break;
      }
      (e && D && ze.alternate === null && t(c, D),
        (d = o(ze, d, L)),
        z === null ? (C = ze) : (z.sibling = ze),
        (z = ze),
        (D = A));
    }
    if (M.done) return (n(c, D), G && It(c, L), C);
    if (D === null) {
      for (; !M.done; L++, M = p.next())
        ((M = h(c, M.value, v)),
          M !== null &&
            ((d = o(M, d, L)),
            z === null ? (C = M) : (z.sibling = M),
            (z = M)));
      return (G && It(c, L), C);
    }
    for (D = r(c, D); !M.done; L++, M = p.next())
      ((M = x(D, c, L, M.value, v)),
        M !== null &&
          (e && M.alternate !== null && D.delete(M.key === null ? L : M.key),
          (d = o(M, d, L)),
          z === null ? (C = M) : (z.sibling = M),
          (z = M)));
    return (
      e &&
        D.forEach(function (ft) {
          return t(c, ft);
        }),
      G && It(c, L),
      C
    );
  }
  function P(c, d, p, v) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === rn &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case Pr:
          e: {
            for (var C = p.key, z = d; z !== null; ) {
              if (z.key === C) {
                if (((C = p.type), C === rn)) {
                  if (z.tag === 7) {
                    (n(c, z.sibling),
                      (d = l(z, p.props.children)),
                      (d.return = c),
                      (c = d));
                    break e;
                  }
                } else if (
                  z.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === mt &&
                    va(C) === z.type)
                ) {
                  (n(c, z.sibling),
                    (d = l(z, p.props)),
                    (d.ref = $n(c, z, p)),
                    (d.return = c),
                    (c = d));
                  break e;
                }
                n(c, z);
                break;
              } else t(c, z);
              z = z.sibling;
            }
            p.type === rn
              ? ((d = Wt(p.props.children, c.mode, v, p.key)),
                (d.return = c),
                (c = d))
              : ((v = ll(p.type, p.key, p.props, null, c.mode, v)),
                (v.ref = $n(c, d, p)),
                (v.return = c),
                (c = v));
          }
          return i(c);
        case nn:
          e: {
            for (z = p.key; d !== null; ) {
              if (d.key === z)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === p.containerInfo &&
                  d.stateNode.implementation === p.implementation
                ) {
                  (n(c, d.sibling),
                    (d = l(d, p.children || [])),
                    (d.return = c),
                    (c = d));
                  break e;
                } else {
                  n(c, d);
                  break;
                }
              else t(c, d);
              d = d.sibling;
            }
            ((d = ko(p, c.mode, v)), (d.return = c), (c = d));
          }
          return i(c);
        case mt:
          return ((z = p._init), P(c, d, z(p._payload), v));
      }
      if (Wn(p)) return g(c, d, p, v);
      if (Rn(p)) return j(c, d, p, v);
      Vr(c, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        d !== null && d.tag === 6
          ? (n(c, d.sibling), (d = l(d, p)), (d.return = c), (c = d))
          : (n(c, d), (d = wo(p, c.mode, v)), (d.return = c), (c = d)),
        i(c))
      : n(c, d);
  }
  return P;
}
var jn = uc(!0),
  cc = uc(!1),
  vl = Dt(null),
  xl = null,
  fn = null,
  Fi = null;
function $i() {
  Fi = fn = xl = null;
}
function Ui(e) {
  var t = vl.current;
  (Q(vl), (e._currentValue = t));
}
function Zo(e, t, n) {
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
  ((xl = e),
    (Fi = fn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ve = !0), (e.firstContext = null)));
}
function Ie(e) {
  var t = e._currentValue;
  if (Fi !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), fn === null)) {
      if (xl === null) throw Error(N(308));
      ((fn = e), (xl.dependencies = { lanes: 0, firstContext: e }));
    } else fn = fn.next = e;
  return t;
}
var Ut = null;
function Vi(e) {
  Ut === null ? (Ut = [e]) : Ut.push(e);
}
function dc(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Vi(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    ut(e, r)
  );
}
function ut(e, t) {
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
var ht = !1;
function Ai(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function fc(e, t) {
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
function it(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function jt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), U & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      ut(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Vi(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    ut(e, n)
  );
}
function Jr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ei(e, n));
  }
}
function xa(e, t) {
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
function wl(e, t, n, r) {
  var l = e.updateQueue;
  ht = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      f = u.next;
    ((u.next = null), i === null ? (o = f) : (i.next = f), (i = u));
    var y = e.alternate;
    y !== null &&
      ((y = y.updateQueue),
      (a = y.lastBaseUpdate),
      a !== i &&
        (a === null ? (y.firstBaseUpdate = f) : (a.next = f),
        (y.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var h = l.baseState;
    ((i = 0), (y = f = u = null), (a = o));
    do {
      var m = a.lane,
        x = a.eventTime;
      if ((r & m) === m) {
        y !== null &&
          (y = y.next =
            {
              eventTime: x,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var g = e,
            j = a;
          switch (((m = t), (x = n), j.tag)) {
            case 1:
              if (((g = j.payload), typeof g == "function")) {
                h = g.call(x, h, m);
                break e;
              }
              h = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = j.payload),
                (m = typeof g == "function" ? g.call(x, h, m) : g),
                m == null)
              )
                break e;
              h = X({}, h, m);
              break e;
            case 2:
              ht = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [a]) : m.push(a));
      } else
        ((x = {
          eventTime: x,
          lane: m,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          y === null ? ((f = y = x), (u = h)) : (y = y.next = x),
          (i |= m));
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        ((m = a),
          (a = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null));
      }
    } while (!0);
    if (
      (y === null && (u = h),
      (l.baseState = u),
      (l.firstBaseUpdate = f),
      (l.lastBaseUpdate = y),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do ((i |= l.lane), (l = l.next));
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    ((Gt |= i), (e.lanes = i), (e.memoizedState = h));
  }
}
function wa(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(N(191, l));
        l.call(r);
      }
    }
}
var Sr = {},
  Je = Dt(Sr),
  fr = Dt(Sr),
  pr = Dt(Sr);
function Vt(e) {
  if (e === Sr) throw Error(N(174));
  return e;
}
function Wi(e, t) {
  switch ((B(pr, t), B(fr, e), B(Je, Sr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Do(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Do(t, e)));
  }
  (Q(Je), B(Je, t));
}
function Cn() {
  (Q(Je), Q(fr), Q(pr));
}
function pc(e) {
  Vt(pr.current);
  var t = Vt(Je.current),
    n = Do(t, e.type);
  t !== n && (B(fr, e), B(Je, n));
}
function Bi(e) {
  fr.current === e && (Q(Je), Q(fr));
}
var K = Dt(0);
function kl(e) {
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
var mo = [];
function Hi() {
  for (var e = 0; e < mo.length; e++)
    mo[e]._workInProgressVersionPrimary = null;
  mo.length = 0;
}
var qr = dt.ReactCurrentDispatcher,
  ho = dt.ReactCurrentBatchConfig,
  Qt = 0,
  Y = null,
  ne = null,
  le = null,
  Sl = !1,
  Zn = !1,
  mr = 0,
  em = 0;
function ue() {
  throw Error(N(321));
}
function Qi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Qe(e[n], t[n])) return !1;
  return !0;
}
function Gi(e, t, n, r, l, o) {
  if (
    ((Qt = o),
    (Y = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (qr.current = e === null || e.memoizedState === null ? lm : om),
    (e = n(r, l)),
    Zn)
  ) {
    o = 0;
    do {
      if (((Zn = !1), (mr = 0), 25 <= o)) throw Error(N(301));
      ((o += 1),
        (le = ne = null),
        (t.updateQueue = null),
        (qr.current = im),
        (e = n(r, l)));
    } while (Zn);
  }
  if (
    ((qr.current = Nl),
    (t = ne !== null && ne.next !== null),
    (Qt = 0),
    (le = ne = Y = null),
    (Sl = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function Ki() {
  var e = mr !== 0;
  return ((mr = 0), e);
}
function Xe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (le === null ? (Y.memoizedState = le = e) : (le = le.next = e), le);
}
function Fe() {
  if (ne === null) {
    var e = Y.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ne.next;
  var t = le === null ? Y.memoizedState : le.next;
  if (t !== null) ((le = t), (ne = e));
  else {
    if (e === null) throw Error(N(310));
    ((ne = e),
      (e = {
        memoizedState: ne.memoizedState,
        baseState: ne.baseState,
        baseQueue: ne.baseQueue,
        queue: ne.queue,
        next: null,
      }),
      le === null ? (Y.memoizedState = le = e) : (le = le.next = e));
  }
  return le;
}
function hr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function yo(e) {
  var t = Fe(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = ne,
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
    var a = (i = null),
      u = null,
      f = o;
    do {
      var y = f.lane;
      if ((Qt & y) === y)
        (u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: f.action,
              hasEagerState: f.hasEagerState,
              eagerState: f.eagerState,
              next: null,
            }),
          (r = f.hasEagerState ? f.eagerState : e(r, f.action)));
      else {
        var h = {
          lane: y,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null,
        };
        (u === null ? ((a = u = h), (i = r)) : (u = u.next = h),
          (Y.lanes |= y),
          (Gt |= y));
      }
      f = f.next;
    } while (f !== null && f !== o);
    (u === null ? (i = r) : (u.next = a),
      Qe(r, t.memoizedState) || (ve = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do ((o = l.lane), (Y.lanes |= o), (Gt |= o), (l = l.next));
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function go(e) {
  var t = Fe(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do ((o = e(o, i.action)), (i = i.next));
    while (i !== l);
    (Qe(o, t.memoizedState) || (ve = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o));
  }
  return [o, r];
}
function mc() {}
function hc(e, t) {
  var n = Y,
    r = Fe(),
    l = t(),
    o = !Qe(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (ve = !0)),
    (r = r.queue),
    Yi(vc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (le !== null && le.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      yr(9, gc.bind(null, n, r, l, t), void 0, null),
      oe === null)
    )
      throw Error(N(349));
    Qt & 30 || yc(n, t, l);
  }
  return l;
}
function yc(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function gc(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), xc(t) && wc(e));
}
function vc(e, t, n) {
  return n(function () {
    xc(t) && wc(e);
  });
}
function xc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Qe(e, n);
  } catch {
    return !0;
  }
}
function wc(e) {
  var t = ut(e, 1);
  t !== null && He(t, e, 1, -1);
}
function ka(e) {
  var t = Xe();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: hr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = rm.bind(null, Y, e)),
    [t.memoizedState, e]
  );
}
function yr(e, t, n, r) {
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
function kc() {
  return Fe().memoizedState;
}
function el(e, t, n, r) {
  var l = Xe();
  ((Y.flags |= e),
    (l.memoizedState = yr(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Fl(e, t, n, r) {
  var l = Fe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ne !== null) {
    var i = ne.memoizedState;
    if (((o = i.destroy), r !== null && Qi(r, i.deps))) {
      l.memoizedState = yr(t, n, o, r);
      return;
    }
  }
  ((Y.flags |= e), (l.memoizedState = yr(1 | t, n, o, r)));
}
function Sa(e, t) {
  return el(8390656, 8, e, t);
}
function Yi(e, t) {
  return Fl(2048, 8, e, t);
}
function Sc(e, t) {
  return Fl(4, 2, e, t);
}
function Nc(e, t) {
  return Fl(4, 4, e, t);
}
function jc(e, t) {
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
function Cc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Fl(4, 4, jc.bind(null, t, e), n)
  );
}
function Xi() {}
function Ec(e, t) {
  var n = Fe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qi(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function _c(e, t) {
  var n = Fe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qi(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Tc(e, t, n) {
  return Qt & 21
    ? (Qe(n, t) || ((n = Ru()), (Y.lanes |= n), (Gt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ve = !0)), (e.memoizedState = n));
}
function tm(e, t) {
  var n = V;
  ((V = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = ho.transition;
  ho.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((V = n), (ho.transition = r));
  }
}
function Pc() {
  return Fe().memoizedState;
}
function nm(e, t, n) {
  var r = Et(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    zc(e))
  )
    Dc(t, n);
  else if (((n = dc(e, t, n, r)), n !== null)) {
    var l = me();
    (He(n, e, r, l), Lc(n, t, r));
  }
}
function rm(e, t, n) {
  var r = Et(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (zc(e)) Dc(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), Qe(a, i))) {
          var u = t.interleaved;
          (u === null
            ? ((l.next = l), Vi(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l));
          return;
        }
      } catch {
      } finally {
      }
    ((n = dc(e, t, l, r)),
      n !== null && ((l = me()), He(n, e, r, l), Lc(n, t, r)));
  }
}
function zc(e) {
  var t = e.alternate;
  return e === Y || (t !== null && t === Y);
}
function Dc(e, t) {
  Zn = Sl = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function Lc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ei(e, n));
  }
}
var Nl = {
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
  lm = {
    readContext: Ie,
    useCallback: function (e, t) {
      return ((Xe().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Ie,
    useEffect: Sa,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        el(4194308, 4, jc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return el(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return el(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Xe();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = Xe();
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
        (e = e.dispatch = nm.bind(null, Y, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Xe();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: ka,
    useDebugValue: Xi,
    useDeferredValue: function (e) {
      return (Xe().memoizedState = e);
    },
    useTransition: function () {
      var e = ka(!1),
        t = e[0];
      return ((e = tm.bind(null, e[1])), (Xe().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Y,
        l = Xe();
      if (G) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), oe === null)) throw Error(N(349));
        Qt & 30 || yc(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Sa(vc.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        yr(9, gc.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Xe(),
        t = oe.identifierPrefix;
      if (G) {
        var n = ot,
          r = lt;
        ((n = (r & ~(1 << (32 - Be(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = mr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = em++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  om = {
    readContext: Ie,
    useCallback: Ec,
    useContext: Ie,
    useEffect: Yi,
    useImperativeHandle: Cc,
    useInsertionEffect: Sc,
    useLayoutEffect: Nc,
    useMemo: _c,
    useReducer: yo,
    useRef: kc,
    useState: function () {
      return yo(hr);
    },
    useDebugValue: Xi,
    useDeferredValue: function (e) {
      var t = Fe();
      return Tc(t, ne.memoizedState, e);
    },
    useTransition: function () {
      var e = yo(hr)[0],
        t = Fe().memoizedState;
      return [e, t];
    },
    useMutableSource: mc,
    useSyncExternalStore: hc,
    useId: Pc,
    unstable_isNewReconciler: !1,
  },
  im = {
    readContext: Ie,
    useCallback: Ec,
    useContext: Ie,
    useEffect: Yi,
    useImperativeHandle: Cc,
    useInsertionEffect: Sc,
    useLayoutEffect: Nc,
    useMemo: _c,
    useReducer: go,
    useRef: kc,
    useState: function () {
      return go(hr);
    },
    useDebugValue: Xi,
    useDeferredValue: function (e) {
      var t = Fe();
      return ne === null ? (t.memoizedState = e) : Tc(t, ne.memoizedState, e);
    },
    useTransition: function () {
      var e = go(hr)[0],
        t = Fe().memoizedState;
      return [e, t];
    },
    useMutableSource: mc,
    useSyncExternalStore: hc,
    useId: Pc,
    unstable_isNewReconciler: !1,
  };
function Ve(e, t) {
  if (e && e.defaultProps) {
    ((t = X({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Jo(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : X({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var $l = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Xt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = me(),
      l = Et(e),
      o = it(r, l);
    ((o.payload = t),
      n != null && (o.callback = n),
      (t = jt(e, o, l)),
      t !== null && (He(t, e, l, r), Jr(t, e, l)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = me(),
      l = Et(e),
      o = it(r, l);
    ((o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = jt(e, o, l)),
      t !== null && (He(t, e, l, r), Jr(t, e, l)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = me(),
      r = Et(e),
      l = it(n, r);
    ((l.tag = 2),
      t != null && (l.callback = t),
      (t = jt(e, l, r)),
      t !== null && (He(t, e, r, n), Jr(t, e, r)));
  },
};
function Na(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !ar(n, r) || !ar(l, o)
        : !0
  );
}
function Rc(e, t, n) {
  var r = !1,
    l = Pt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ie(o))
      : ((l = we(t) ? Bt : fe.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Sn(e, l) : Pt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = $l),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function ja(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && $l.enqueueReplaceState(t, t.state, null));
}
function qo(e, t, n, r) {
  var l = e.stateNode;
  ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Ai(e));
  var o = t.contextType;
  (typeof o == "object" && o !== null
    ? (l.context = Ie(o))
    : ((o = we(t) ? Bt : fe.current), (l.context = Sn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Jo(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && $l.enqueueReplaceState(l, l.state, null),
      wl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308));
}
function En(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += Mf(r)), (r = r.return));
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
function vo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ei(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var sm = typeof WeakMap == "function" ? WeakMap : Map;
function Mc(e, t, n) {
  ((n = it(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (Cl || ((Cl = !0), (ci = r)), ei(e, t));
    }),
    n
  );
}
function Oc(e, t, n) {
  ((n = it(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    ((n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        ei(e, t);
      }));
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        (ei(e, t),
          typeof r != "function" &&
            (Ct === null ? (Ct = new Set([this])) : Ct.add(this)));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Ca(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new sm();
    var l = new Set();
    r.set(t, l);
  } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
  l.has(n) || (l.add(n), (e = km.bind(null, e, t, n)), t.then(e, e));
}
function Ea(e) {
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
function _a(e, t, n, r, l) {
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
              : ((t = it(-1, 1)), (t.tag = 2), jt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var am = dt.ReactCurrentOwner,
  ve = !1;
function pe(e, t, n, r) {
  t.child = e === null ? cc(t, null, n, r) : jn(t, e.child, n, r);
}
function Ta(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    xn(t, l),
    (r = Gi(e, t, n, r, o, l)),
    (n = Ki()),
    e !== null && !ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        ct(e, t, l))
      : (G && n && Mi(t), (t.flags |= 1), pe(e, t, r, l), t.child)
  );
}
function Pa(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !rs(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Ic(e, t, o, r, l))
      : ((e = ll(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ar), n(i, r) && e.ref === t.ref)
    )
      return ct(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = _t(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ic(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (ar(o, r) && e.ref === t.ref)
      if (((ve = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (ve = !0);
      else return ((t.lanes = e.lanes), ct(e, t, l));
  }
  return ti(e, t, n, r, l);
}
function Fc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        B(mn, je),
        (je |= n));
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
          B(mn, je),
          (je |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        B(mn, je),
        (je |= r));
    }
  else
    (o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      B(mn, je),
      (je |= r));
  return (pe(e, t, l, n), t.child);
}
function $c(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ti(e, t, n, r, l) {
  var o = we(n) ? Bt : fe.current;
  return (
    (o = Sn(t, o)),
    xn(t, l),
    (n = Gi(e, t, n, r, o, l)),
    (r = Ki()),
    e !== null && !ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        ct(e, t, l))
      : (G && r && Mi(t), (t.flags |= 1), pe(e, t, n, l), t.child)
  );
}
function za(e, t, n, r, l) {
  if (we(n)) {
    var o = !0;
    hl(t);
  } else o = !1;
  if ((xn(t, l), t.stateNode === null))
    (tl(e, t), Rc(t, n, r), qo(t, n, r, l), (r = !0));
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var u = i.context,
      f = n.contextType;
    typeof f == "object" && f !== null
      ? (f = Ie(f))
      : ((f = we(n) ? Bt : fe.current), (f = Sn(t, f)));
    var y = n.getDerivedStateFromProps,
      h =
        typeof y == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    (h ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || u !== f) && ja(t, i, r, f)),
      (ht = !1));
    var m = t.memoizedState;
    ((i.state = m),
      wl(t, r, i, l),
      (u = t.memoizedState),
      a !== r || m !== u || xe.current || ht
        ? (typeof y == "function" && (Jo(t, n, y, r), (u = t.memoizedState)),
          (a = ht || Na(t, n, a, r, m, u, f))
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
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = f),
          (r = a))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((i = t.stateNode),
      fc(e, t),
      (a = t.memoizedProps),
      (f = t.type === t.elementType ? a : Ve(t.type, a)),
      (i.props = f),
      (h = t.pendingProps),
      (m = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Ie(u))
        : ((u = we(n) ? Bt : fe.current), (u = Sn(t, u))));
    var x = n.getDerivedStateFromProps;
    ((y =
      typeof x == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== h || m !== u) && ja(t, i, r, u)),
      (ht = !1),
      (m = t.memoizedState),
      (i.state = m),
      wl(t, r, i, l));
    var g = t.memoizedState;
    a !== h || m !== g || xe.current || ht
      ? (typeof x == "function" && (Jo(t, n, x, r), (g = t.memoizedState)),
        (f = ht || Na(t, n, f, r, m, g, u) || !1)
          ? (y ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, g, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, g, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (i.props = r),
        (i.state = g),
        (i.context = u),
        (r = f))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ni(e, t, n, r, o, l);
}
function ni(e, t, n, r, l, o) {
  $c(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return (l && ha(t, n, !1), ct(e, t, o));
  ((r = t.stateNode), (am.current = t));
  var a =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = jn(t, e.child, null, o)), (t.child = jn(t, null, a, o)))
      : pe(e, t, a, o),
    (t.memoizedState = r.state),
    l && ha(t, n, !0),
    t.child
  );
}
function Uc(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? ma(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ma(e, t.context, !1),
    Wi(e, t.containerInfo));
}
function Da(e, t, n, r, l) {
  return (Nn(), Ii(l), (t.flags |= 256), pe(e, t, n, r), t.child);
}
var ri = { dehydrated: null, treeContext: null, retryLane: 0 };
function li(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Vc(e, t, n) {
  var r = t.pendingProps,
    l = K.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    B(K, l & 1),
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
                : (o = Al(i, r, 0, null)),
              (e = Wt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = li(n)),
              (t.memoizedState = ri),
              e)
            : bi(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return um(e, t, i, r, a, l, n);
  if (o) {
    ((o = r.fallback), (i = t.mode), (l = e.child), (a = l.sibling));
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = _t(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (o = _t(a, o)) : ((o = Wt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? li(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = ri),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = _t(o, { mode: "visible", children: r.children })),
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
function bi(e, t) {
  return (
    (t = Al({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ar(e, t, n, r) {
  return (
    r !== null && Ii(r),
    jn(t, e.child, null, n),
    (e = bi(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function um(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = vo(Error(N(422)))), Ar(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (l = t.mode),
          (r = Al({ mode: "visible", children: r.children }, l, 0, null)),
          (o = Wt(o, l, i, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && jn(t, e.child, null, i),
          (t.child.memoizedState = li(i)),
          (t.memoizedState = ri),
          o);
  if (!(t.mode & 1)) return Ar(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a),
      (o = Error(N(419))),
      (r = vo(o, r, void 0)),
      Ar(e, t, i, r)
    );
  }
  if (((a = (i & e.childLanes) !== 0), ve || a)) {
    if (((r = oe), r !== null)) {
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
          ((o.retryLane = l), ut(e, l), He(r, e, l, -1)));
    }
    return (ns(), (r = vo(Error(N(421)))), Ar(e, t, i, r));
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Sm.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ce = Nt(l.nextSibling)),
      (Ee = t),
      (G = !0),
      (We = null),
      e !== null &&
        ((Le[Re++] = lt),
        (Le[Re++] = ot),
        (Le[Re++] = Ht),
        (lt = e.id),
        (ot = e.overflow),
        (Ht = t)),
      (t = bi(t, r.children)),
      (t.flags |= 4096),
      t);
}
function La(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), Zo(e.return, t, n));
}
function xo(e, t, n, r, l) {
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
function Ac(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((pe(e, t, r.children, n), (r = K.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && La(e, n, t);
        else if (e.tag === 19) La(e, n, t);
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
            e !== null && kl(e) === null && (l = n),
            (n = n.sibling));
        ((n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          xo(t, !1, l, n, o));
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && kl(e) === null)) {
            t.child = l;
            break;
          }
          ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
        }
        xo(t, !0, n, null, o);
        break;
      case "together":
        xo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function tl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ct(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Gt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = _t(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = _t(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function cm(e, t, n) {
  switch (t.tag) {
    case 3:
      (Uc(t), Nn());
      break;
    case 5:
      pc(t);
      break;
    case 1:
      we(t.type) && hl(t);
      break;
    case 4:
      Wi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      (B(vl, r._currentValue), (r._currentValue = l));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (B(K, K.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Vc(e, t, n)
            : (B(K, K.current & 1),
              (e = ct(e, t, n)),
              e !== null ? e.sibling : null);
      B(K, K.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ac(e, t, n);
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
      return ((t.lanes = 0), Fc(e, t, n));
  }
  return ct(e, t, n);
}
var Wc, oi, Bc, Hc;
Wc = function (e, t) {
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
oi = function () {};
Bc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    ((e = t.stateNode), Vt(Je.current));
    var o = null;
    switch (n) {
      case "input":
        ((l = _o(e, l)), (r = _o(e, r)), (o = []));
        break;
      case "select":
        ((l = X({}, l, { value: void 0 })),
          (r = X({}, r, { value: void 0 })),
          (o = []));
        break;
      case "textarea":
        ((l = zo(e, l)), (r = zo(e, r)), (o = []));
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = pl);
    }
    Lo(n, r);
    var i;
    n = null;
    for (f in l)
      if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null)
        if (f === "style") {
          var a = l[f];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          f !== "dangerouslySetInnerHTML" &&
            f !== "children" &&
            f !== "suppressContentEditableWarning" &&
            f !== "suppressHydrationWarning" &&
            f !== "autoFocus" &&
            (tr.hasOwnProperty(f)
              ? o || (o = [])
              : (o = o || []).push(f, null));
    for (f in r) {
      var u = r[f];
      if (
        ((a = l != null ? l[f] : void 0),
        r.hasOwnProperty(f) && u !== a && (u != null || a != null))
      )
        if (f === "style")
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in u)
              u.hasOwnProperty(i) &&
                a[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else (n || (o || (o = []), o.push(f, n)), (n = u));
        else
          f === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (o = o || []).push(f, u))
            : f === "children"
              ? (typeof u != "string" && typeof u != "number") ||
                (o = o || []).push(f, "" + u)
              : f !== "suppressContentEditableWarning" &&
                f !== "suppressHydrationWarning" &&
                (tr.hasOwnProperty(f)
                  ? (u != null && f === "onScroll" && H("scroll", e),
                    o || a === u || (o = []))
                  : (o = o || []).push(f, u));
    }
    n && (o = o || []).push("style", n);
    var f = o;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
Hc = function (e, t, n, r) {
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
function ce(e) {
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
function dm(e, t, n) {
  var r = t.pendingProps;
  switch ((Oi(t), t.tag)) {
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
      return (ce(t), null);
    case 1:
      return (we(t.type) && ml(), ce(t), null);
    case 3:
      return (
        (r = t.stateNode),
        Cn(),
        Q(xe),
        Q(fe),
        Hi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ur(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), We !== null && (pi(We), (We = null)))),
        oi(e, t),
        ce(t),
        null
      );
    case 5:
      Bi(t);
      var l = Vt(pr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Bc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return (ce(t), null);
        }
        if (((e = Vt(Je.current)), Ur(t))) {
          ((r = t.stateNode), (n = t.type));
          var o = t.memoizedProps;
          switch (((r[be] = t), (r[dr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (H("cancel", r), H("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              H("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Hn.length; l++) H(Hn[l], r);
              break;
            case "source":
              H("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (H("error", r), H("load", r));
              break;
            case "details":
              H("toggle", r);
              break;
            case "input":
              (As(r, o), H("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!o.multiple }),
                H("invalid", r));
              break;
            case "textarea":
              (Bs(r, o), H("invalid", r));
          }
          (Lo(n, o), (l = null));
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var a = o[i];
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      $r(r.textContent, a, e),
                    (l = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      $r(r.textContent, a, e),
                    (l = ["children", "" + a]))
                : tr.hasOwnProperty(i) &&
                  a != null &&
                  i === "onScroll" &&
                  H("scroll", r);
            }
          switch (n) {
            case "input":
              (zr(r), Ws(r, o, !0));
              break;
            case "textarea":
              (zr(r), Hs(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = pl);
          }
          ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = vu(n)),
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
            (e[be] = t),
            (e[dr] = r),
            Wc(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((i = Ro(n, r)), n)) {
              case "dialog":
                (H("cancel", e), H("close", e), (l = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (H("load", e), (l = r));
                break;
              case "video":
              case "audio":
                for (l = 0; l < Hn.length; l++) H(Hn[l], e);
                l = r;
                break;
              case "source":
                (H("error", e), (l = r));
                break;
              case "img":
              case "image":
              case "link":
                (H("error", e), H("load", e), (l = r));
                break;
              case "details":
                (H("toggle", e), (l = r));
                break;
              case "input":
                (As(e, r), (l = _o(e, r)), H("invalid", e));
                break;
              case "option":
                l = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = X({}, r, { value: void 0 })),
                  H("invalid", e));
                break;
              case "textarea":
                (Bs(e, r), (l = zo(e, r)), H("invalid", e));
                break;
              default:
                l = r;
            }
            (Lo(n, l), (a = l));
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var u = a[o];
                o === "style"
                  ? ku(e, u)
                  : o === "dangerouslySetInnerHTML"
                    ? ((u = u ? u.__html : void 0), u != null && xu(e, u))
                    : o === "children"
                      ? typeof u == "string"
                        ? (n !== "textarea" || u !== "") && nr(e, u)
                        : typeof u == "number" && nr(e, "" + u)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (tr.hasOwnProperty(o)
                          ? u != null && o === "onScroll" && H("scroll", e)
                          : u != null && wi(e, o, u, i));
              }
            switch (n) {
              case "input":
                (zr(e), Ws(e, r, !1));
                break;
              case "textarea":
                (zr(e), Hs(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Tt(r.value));
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
                typeof l.onClick == "function" && (e.onclick = pl);
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
      return (ce(t), null);
    case 6:
      if (e && t.stateNode != null) Hc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (((n = Vt(pr.current)), Vt(Je.current), Ur(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[be] = t),
            (o = r.nodeValue !== n) && ((e = Ee), e !== null))
          )
            switch (e.tag) {
              case 3:
                $r(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  $r(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[be] = t),
            (t.stateNode = r));
      }
      return (ce(t), null);
    case 13:
      if (
        (Q(K),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (G && Ce !== null && t.mode & 1 && !(t.flags & 128))
          (ac(), Nn(), (t.flags |= 98560), (o = !1));
        else if (((o = Ur(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(N(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(N(317));
            o[be] = t;
          } else
            (Nn(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (ce(t), (o = !1));
        } else (We !== null && (pi(We), (We = null)), (o = !0));
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || K.current & 1 ? re === 0 && (re = 3) : ns())),
          t.updateQueue !== null && (t.flags |= 4),
          ce(t),
          null);
    case 4:
      return (
        Cn(),
        oi(e, t),
        e === null && ur(t.stateNode.containerInfo),
        ce(t),
        null
      );
    case 10:
      return (Ui(t.type._context), ce(t), null);
    case 17:
      return (we(t.type) && ml(), ce(t), null);
    case 19:
      if ((Q(K), (o = t.memoizedState), o === null)) return (ce(t), null);
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Un(o, !1);
        else {
          if (re !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = kl(e)), i !== null)) {
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
            q() > _n &&
            ((t.flags |= 128), (r = !0), Un(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = kl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Un(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !G)
            )
              return (ce(t), null);
          } else
            2 * q() - o.renderingStartTime > _n &&
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
          (o.renderingStartTime = q()),
          (t.sibling = null),
          (n = K.current),
          B(K, r ? (n & 1) | 2 : n & 1),
          t)
        : (ce(t), null);
    case 22:
    case 23:
      return (
        ts(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? je & 1073741824 && (ce(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ce(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function fm(e, t) {
  switch ((Oi(t), t.tag)) {
    case 1:
      return (
        we(t.type) && ml(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Cn(),
        Q(xe),
        Q(fe),
        Hi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Bi(t), null);
    case 13:
      if ((Q(K), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(N(340));
        Nn();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (Q(K), null);
    case 4:
      return (Cn(), null);
    case 10:
      return (Ui(t.type._context), null);
    case 22:
    case 23:
      return (ts(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Wr = !1,
  de = !1,
  pm = typeof WeakSet == "function" ? WeakSet : Set,
  T = null;
function pn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        b(e, t, r);
      }
    else n.current = null;
}
function ii(e, t, n) {
  try {
    n();
  } catch (r) {
    b(e, t, r);
  }
}
var Ra = !1;
function mm(e, t) {
  if (((Bo = cl), (e = Xu()), Ri(e))) {
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
            a = -1,
            u = -1,
            f = 0,
            y = 0,
            h = e,
            m = null;
          t: for (;;) {
            for (
              var x;
              h !== n || (l !== 0 && h.nodeType !== 3) || (a = i + l),
                h !== o || (r !== 0 && h.nodeType !== 3) || (u = i + r),
                h.nodeType === 3 && (i += h.nodeValue.length),
                (x = h.firstChild) !== null;
            )
              ((m = h), (h = x));
            for (;;) {
              if (h === e) break t;
              if (
                (m === n && ++f === l && (a = i),
                m === o && ++y === r && (u = i),
                (x = h.nextSibling) !== null)
              )
                break;
              ((h = m), (m = h.parentNode));
            }
            h = x;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ho = { focusedElem: e, selectionRange: n }, cl = !1, T = t; T !== null; )
    if (((t = T), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (T = e));
    else
      for (; T !== null; ) {
        t = T;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var j = g.memoizedProps,
                    P = g.memoizedState,
                    c = t.stateNode,
                    d = c.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? j : Ve(t.type, j),
                      P,
                    );
                  c.__reactInternalSnapshotBeforeUpdate = d;
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
                throw Error(N(163));
            }
        } catch (v) {
          b(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (T = e));
          break;
        }
        T = t.return;
      }
  return ((g = Ra), (Ra = !1), g);
}
function Jn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        ((l.destroy = void 0), o !== void 0 && ii(t, n, o));
      }
      l = l.next;
    } while (l !== r);
  }
}
function Ul(e, t) {
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
function si(e) {
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
function Qc(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Qc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[be], delete t[dr], delete t[Ko], delete t[bp], delete t[Zp])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Gc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ma(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Gc(e.return)) return null;
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
function ai(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = pl)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ai(e, t, n), e = e.sibling; e !== null; )
      (ai(e, t, n), (e = e.sibling));
}
function ui(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ui(e, t, n), e = e.sibling; e !== null; )
      (ui(e, t, n), (e = e.sibling));
}
var ie = null,
  Ae = !1;
function pt(e, t, n) {
  for (n = n.child; n !== null; ) (Kc(e, t, n), (n = n.sibling));
}
function Kc(e, t, n) {
  if (Ze && typeof Ze.onCommitFiberUnmount == "function")
    try {
      Ze.onCommitFiberUnmount(Dl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      de || pn(n, t);
    case 6:
      var r = ie,
        l = Ae;
      ((ie = null),
        pt(e, t, n),
        (ie = r),
        (Ae = l),
        ie !== null &&
          (Ae
            ? ((e = ie),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ie.removeChild(n.stateNode)));
      break;
    case 18:
      ie !== null &&
        (Ae
          ? ((e = ie),
            (n = n.stateNode),
            e.nodeType === 8
              ? fo(e.parentNode, n)
              : e.nodeType === 1 && fo(e, n),
            ir(e))
          : fo(ie, n.stateNode));
      break;
    case 4:
      ((r = ie),
        (l = Ae),
        (ie = n.stateNode.containerInfo),
        (Ae = !0),
        pt(e, t, n),
        (ie = r),
        (Ae = l));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !de &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          ((o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && ii(n, t, i),
            (l = l.next));
        } while (l !== r);
      }
      pt(e, t, n);
      break;
    case 1:
      if (
        !de &&
        (pn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (a) {
          b(n, t, a);
        }
      pt(e, t, n);
      break;
    case 21:
      pt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((de = (r = de) || n.memoizedState !== null), pt(e, t, n), (de = r))
        : pt(e, t, n);
      break;
    default:
      pt(e, t, n);
  }
}
function Oa(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new pm()),
      t.forEach(function (r) {
        var l = Nm.bind(null, e, r);
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
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ((ie = a.stateNode), (Ae = !1));
              break e;
            case 3:
              ((ie = a.stateNode.containerInfo), (Ae = !0));
              break e;
            case 4:
              ((ie = a.stateNode.containerInfo), (Ae = !0));
              break e;
          }
          a = a.return;
        }
        if (ie === null) throw Error(N(160));
        (Kc(o, i, l), (ie = null), (Ae = !1));
        var u = l.alternate;
        (u !== null && (u.return = null), (l.return = null));
      } catch (f) {
        b(l, t, f);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (Yc(t, e), (t = t.sibling));
}
function Yc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ue(t, e), Ye(e), r & 4)) {
        try {
          (Jn(3, e, e.return), Ul(3, e));
        } catch (j) {
          b(e, e.return, j);
        }
        try {
          Jn(5, e, e.return);
        } catch (j) {
          b(e, e.return, j);
        }
      }
      break;
    case 1:
      (Ue(t, e), Ye(e), r & 512 && n !== null && pn(n, n.return));
      break;
    case 5:
      if (
        (Ue(t, e),
        Ye(e),
        r & 512 && n !== null && pn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          nr(l, "");
        } catch (j) {
          b(e, e.return, j);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            (a === "input" && o.type === "radio" && o.name != null && yu(l, o),
              Ro(a, i));
            var f = Ro(a, o);
            for (i = 0; i < u.length; i += 2) {
              var y = u[i],
                h = u[i + 1];
              y === "style"
                ? ku(l, h)
                : y === "dangerouslySetInnerHTML"
                  ? xu(l, h)
                  : y === "children"
                    ? nr(l, h)
                    : wi(l, y, h, f);
            }
            switch (a) {
              case "input":
                To(l, o);
                break;
              case "textarea":
                gu(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var x = o.value;
                x != null
                  ? hn(l, !!o.multiple, x, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? hn(l, !!o.multiple, o.defaultValue, !0)
                      : hn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[dr] = o;
          } catch (j) {
            b(e, e.return, j);
          }
      }
      break;
    case 6:
      if ((Ue(t, e), Ye(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        ((l = e.stateNode), (o = e.memoizedProps));
        try {
          l.nodeValue = o;
        } catch (j) {
          b(e, e.return, j);
        }
      }
      break;
    case 3:
      if (
        (Ue(t, e), Ye(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ir(t.containerInfo);
        } catch (j) {
          b(e, e.return, j);
        }
      break;
    case 4:
      (Ue(t, e), Ye(e));
      break;
    case 13:
      (Ue(t, e),
        Ye(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (qi = q())),
        r & 4 && Oa(e));
      break;
    case 22:
      if (
        ((y = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((de = (f = de) || y), Ue(t, e), (de = f)) : Ue(t, e),
        Ye(e),
        r & 8192)
      ) {
        if (
          ((f = e.memoizedState !== null),
          (e.stateNode.isHidden = f) && !y && e.mode & 1)
        )
          for (T = e, y = e.child; y !== null; ) {
            for (h = T = y; T !== null; ) {
              switch (((m = T), (x = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Jn(4, m, m.return);
                  break;
                case 1:
                  pn(m, m.return);
                  var g = m.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    ((r = m), (n = m.return));
                    try {
                      ((t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount());
                    } catch (j) {
                      b(r, n, j);
                    }
                  }
                  break;
                case 5:
                  pn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Fa(h);
                    continue;
                  }
              }
              x !== null ? ((x.return = m), (T = x)) : Fa(h);
            }
            y = y.sibling;
          }
        e: for (y = null, h = e; ; ) {
          if (h.tag === 5) {
            if (y === null) {
              y = h;
              try {
                ((l = h.stateNode),
                  f
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = h.stateNode),
                      (u = h.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = wu("display", i))));
              } catch (j) {
                b(e, e.return, j);
              }
            }
          } else if (h.tag === 6) {
            if (y === null)
              try {
                h.stateNode.nodeValue = f ? "" : h.memoizedProps;
              } catch (j) {
                b(e, e.return, j);
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
            (y === h && (y = null), (h = h.return));
          }
          (y === h && (y = null),
            (h.sibling.return = h.return),
            (h = h.sibling));
        }
      }
      break;
    case 19:
      (Ue(t, e), Ye(e), r & 4 && Oa(e));
      break;
    case 21:
      break;
    default:
      (Ue(t, e), Ye(e));
  }
}
function Ye(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Gc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (nr(l, ""), (r.flags &= -33));
          var o = Ma(e);
          ui(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = Ma(e);
          ai(e, a, i);
          break;
        default:
          throw Error(N(161));
      }
    } catch (u) {
      b(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function hm(e, t, n) {
  ((T = e), Xc(e));
}
function Xc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; T !== null; ) {
    var l = T,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Wr;
      if (!i) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || de;
        a = Wr;
        var f = de;
        if (((Wr = i), (de = u) && !f))
          for (T = l; T !== null; )
            ((i = T),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? $a(l)
                : u !== null
                  ? ((u.return = i), (T = u))
                  : $a(l));
        for (; o !== null; ) ((T = o), Xc(o), (o = o.sibling));
        ((T = l), (Wr = a), (de = f));
      }
      Ia(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (T = o)) : Ia(e);
  }
}
function Ia(e) {
  for (; T !== null; ) {
    var t = T;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              de || Ul(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !de)
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
              o !== null && wa(t, o, r);
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
                wa(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
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
                var f = t.alternate;
                if (f !== null) {
                  var y = f.memoizedState;
                  if (y !== null) {
                    var h = y.dehydrated;
                    h !== null && ir(h);
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
              throw Error(N(163));
          }
        de || (t.flags & 512 && si(t));
      } catch (m) {
        b(t, t.return, m);
      }
    }
    if (t === e) {
      T = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (T = n));
      break;
    }
    T = t.return;
  }
}
function Fa(e) {
  for (; T !== null; ) {
    var t = T;
    if (t === e) {
      T = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (T = n));
      break;
    }
    T = t.return;
  }
}
function $a(e) {
  for (; T !== null; ) {
    var t = T;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ul(4, t);
          } catch (u) {
            b(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              b(t, l, u);
            }
          }
          var o = t.return;
          try {
            si(t);
          } catch (u) {
            b(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            si(t);
          } catch (u) {
            b(t, i, u);
          }
      }
    } catch (u) {
      b(t, t.return, u);
    }
    if (t === e) {
      T = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (T = a));
      break;
    }
    T = t.return;
  }
}
var ym = Math.ceil,
  jl = dt.ReactCurrentDispatcher,
  Zi = dt.ReactCurrentOwner,
  Oe = dt.ReactCurrentBatchConfig,
  U = 0,
  oe = null,
  te = null,
  se = 0,
  je = 0,
  mn = Dt(0),
  re = 0,
  gr = null,
  Gt = 0,
  Vl = 0,
  Ji = 0,
  qn = null,
  ge = null,
  qi = 0,
  _n = 1 / 0,
  nt = null,
  Cl = !1,
  ci = null,
  Ct = null,
  Br = !1,
  xt = null,
  El = 0,
  er = 0,
  di = null,
  nl = -1,
  rl = 0;
function me() {
  return U & 6 ? q() : nl !== -1 ? nl : (nl = q());
}
function Et(e) {
  return e.mode & 1
    ? U & 2 && se !== 0
      ? se & -se
      : qp.transition !== null
        ? (rl === 0 && (rl = Ru()), rl)
        : ((e = V),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Vu(e.type))),
          e)
    : 1;
}
function He(e, t, n, r) {
  if (50 < er) throw ((er = 0), (di = null), Error(N(185)));
  (xr(e, n, r),
    (!(U & 2) || e !== oe) &&
      (e === oe && (!(U & 2) && (Vl |= n), re === 4 && gt(e, se)),
      ke(e, r),
      n === 1 && U === 0 && !(t.mode & 1) && ((_n = q() + 500), Il && Lt())));
}
function ke(e, t) {
  var n = e.callbackNode;
  qf(e, t);
  var r = ul(e, e === oe ? se : 0);
  if (r === 0)
    (n !== null && Ks(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ks(n), t === 1))
      (e.tag === 0 ? Jp(Ua.bind(null, e)) : oc(Ua.bind(null, e)),
        Yp(function () {
          !(U & 6) && Lt();
        }),
        (n = null));
    else {
      switch (Mu(r)) {
        case 1:
          n = Ci;
          break;
        case 4:
          n = Du;
          break;
        case 16:
          n = al;
          break;
        case 536870912:
          n = Lu;
          break;
        default:
          n = al;
      }
      n = rd(n, bc.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function bc(e, t) {
  if (((nl = -1), (rl = 0), U & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (wn() && e.callbackNode !== n) return null;
  var r = ul(e, e === oe ? se : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = _l(e, r);
  else {
    t = r;
    var l = U;
    U |= 2;
    var o = Jc();
    (oe !== e || se !== t) && ((nt = null), (_n = q() + 500), At(e, t));
    do
      try {
        xm();
        break;
      } catch (a) {
        Zc(e, a);
      }
    while (!0);
    ($i(),
      (jl.current = o),
      (U = l),
      te !== null ? (t = 0) : ((oe = null), (se = 0), (t = re)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = $o(e)), l !== 0 && ((r = l), (t = fi(e, l)))), t === 1)
    )
      throw ((n = gr), At(e, 0), gt(e, r), ke(e, q()), n);
    if (t === 6) gt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !gm(l) &&
          ((t = _l(e, r)),
          t === 2 && ((o = $o(e)), o !== 0 && ((r = o), (t = fi(e, o)))),
          t === 1))
      )
        throw ((n = gr), At(e, 0), gt(e, r), ke(e, q()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          Ft(e, ge, nt);
          break;
        case 3:
          if (
            (gt(e, r), (r & 130023424) === r && ((t = qi + 500 - q()), 10 < t))
          ) {
            if (ul(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              (me(), (e.pingedLanes |= e.suspendedLanes & l));
              break;
            }
            e.timeoutHandle = Go(Ft.bind(null, e, ge, nt), t);
            break;
          }
          Ft(e, ge, nt);
          break;
        case 4:
          if ((gt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Be(r);
            ((o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o));
          }
          if (
            ((r = l),
            (r = q() - r),
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
                          : 1960 * ym(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Go(Ft.bind(null, e, ge, nt), r);
            break;
          }
          Ft(e, ge, nt);
          break;
        case 5:
          Ft(e, ge, nt);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return (ke(e, q()), e.callbackNode === n ? bc.bind(null, e) : null);
}
function fi(e, t) {
  var n = qn;
  return (
    e.current.memoizedState.isDehydrated && (At(e, t).flags |= 256),
    (e = _l(e, t)),
    e !== 2 && ((t = ge), (ge = n), t !== null && pi(t)),
    e
  );
}
function pi(e) {
  ge === null ? (ge = e) : ge.push.apply(ge, e);
}
function gm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Qe(o(), l)) return !1;
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
function gt(e, t) {
  for (
    t &= ~Ji,
      t &= ~Vl,
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
function Ua(e) {
  if (U & 6) throw Error(N(327));
  wn();
  var t = ul(e, 0);
  if (!(t & 1)) return (ke(e, q()), null);
  var n = _l(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = $o(e);
    r !== 0 && ((t = r), (n = fi(e, r)));
  }
  if (n === 1) throw ((n = gr), At(e, 0), gt(e, t), ke(e, q()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ft(e, ge, nt),
    ke(e, q()),
    null
  );
}
function es(e, t) {
  var n = U;
  U |= 1;
  try {
    return e(t);
  } finally {
    ((U = n), U === 0 && ((_n = q() + 500), Il && Lt()));
  }
}
function Kt(e) {
  xt !== null && xt.tag === 0 && !(U & 6) && wn();
  var t = U;
  U |= 1;
  var n = Oe.transition,
    r = V;
  try {
    if (((Oe.transition = null), (V = 1), e)) return e();
  } finally {
    ((V = r), (Oe.transition = n), (U = t), !(U & 6) && Lt());
  }
}
function ts() {
  ((je = mn.current), Q(mn));
}
function At(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Kp(n)), te !== null))
    for (n = te.return; n !== null; ) {
      var r = n;
      switch ((Oi(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && ml());
          break;
        case 3:
          (Cn(), Q(xe), Q(fe), Hi());
          break;
        case 5:
          Bi(r);
          break;
        case 4:
          Cn();
          break;
        case 13:
          Q(K);
          break;
        case 19:
          Q(K);
          break;
        case 10:
          Ui(r.type._context);
          break;
        case 22:
        case 23:
          ts();
      }
      n = n.return;
    }
  if (
    ((oe = e),
    (te = e = _t(e.current, null)),
    (se = je = t),
    (re = 0),
    (gr = null),
    (Ji = Vl = Gt = 0),
    (ge = qn = null),
    Ut !== null)
  ) {
    for (t = 0; t < Ut.length; t++)
      if (((n = Ut[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          ((o.next = l), (r.next = i));
        }
        n.pending = r;
      }
    Ut = null;
  }
  return e;
}
function Zc(e, t) {
  do {
    var n = te;
    try {
      if (($i(), (qr.current = Nl), Sl)) {
        for (var r = Y.memoizedState; r !== null; ) {
          var l = r.queue;
          (l !== null && (l.pending = null), (r = r.next));
        }
        Sl = !1;
      }
      if (
        ((Qt = 0),
        (le = ne = Y = null),
        (Zn = !1),
        (mr = 0),
        (Zi.current = null),
        n === null || n.return === null)
      ) {
        ((re = 1), (gr = t), (te = null));
        break;
      }
      e: {
        var o = e,
          i = n.return,
          a = n,
          u = t;
        if (
          ((t = se),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var f = u,
            y = a,
            h = y.tag;
          if (!(y.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = y.alternate;
            m
              ? ((y.updateQueue = m.updateQueue),
                (y.memoizedState = m.memoizedState),
                (y.lanes = m.lanes))
              : ((y.updateQueue = null), (y.memoizedState = null));
          }
          var x = Ea(i);
          if (x !== null) {
            ((x.flags &= -257),
              _a(x, i, a, o, t),
              x.mode & 1 && Ca(o, f, t),
              (t = x),
              (u = f));
            var g = t.updateQueue;
            if (g === null) {
              var j = new Set();
              (j.add(u), (t.updateQueue = j));
            } else g.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              (Ca(o, f, t), ns());
              break e;
            }
            u = Error(N(426));
          }
        } else if (G && a.mode & 1) {
          var P = Ea(i);
          if (P !== null) {
            (!(P.flags & 65536) && (P.flags |= 256),
              _a(P, i, a, o, t),
              Ii(En(u, a)));
            break e;
          }
        }
        ((o = u = En(u, a)),
          re !== 4 && (re = 2),
          qn === null ? (qn = [o]) : qn.push(o),
          (o = i));
        do {
          switch (o.tag) {
            case 3:
              ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
              var c = Mc(o, u, t);
              xa(o, c);
              break e;
            case 1:
              a = u;
              var d = o.type,
                p = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (Ct === null || !Ct.has(p))))
              ) {
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var v = Oc(o, a, t);
                xa(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      ed(n);
    } catch (C) {
      ((t = C), te === n && n !== null && (te = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Jc() {
  var e = jl.current;
  return ((jl.current = Nl), e === null ? Nl : e);
}
function ns() {
  ((re === 0 || re === 3 || re === 2) && (re = 4),
    oe === null || (!(Gt & 268435455) && !(Vl & 268435455)) || gt(oe, se));
}
function _l(e, t) {
  var n = U;
  U |= 2;
  var r = Jc();
  (oe !== e || se !== t) && ((nt = null), At(e, t));
  do
    try {
      vm();
      break;
    } catch (l) {
      Zc(e, l);
    }
  while (!0);
  if (($i(), (U = n), (jl.current = r), te !== null)) throw Error(N(261));
  return ((oe = null), (se = 0), re);
}
function vm() {
  for (; te !== null; ) qc(te);
}
function xm() {
  for (; te !== null && !Hf(); ) qc(te);
}
function qc(e) {
  var t = nd(e.alternate, e, je);
  ((e.memoizedProps = e.pendingProps),
    t === null ? ed(e) : (te = t),
    (Zi.current = null));
}
function ed(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = fm(n, t)), n !== null)) {
        ((n.flags &= 32767), (te = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((re = 6), (te = null));
        return;
      }
    } else if (((n = dm(n, t, je)), n !== null)) {
      te = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      te = t;
      return;
    }
    te = t = e;
  } while (t !== null);
  re === 0 && (re = 5);
}
function Ft(e, t, n) {
  var r = V,
    l = Oe.transition;
  try {
    ((Oe.transition = null), (V = 1), wm(e, t, n, r));
  } finally {
    ((Oe.transition = l), (V = r));
  }
  return null;
}
function wm(e, t, n, r) {
  do wn();
  while (xt !== null);
  if (U & 6) throw Error(N(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var o = n.lanes | n.childLanes;
  if (
    (ep(e, o),
    e === oe && ((te = oe = null), (se = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Br ||
      ((Br = !0),
      rd(al, function () {
        return (wn(), null);
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    ((o = Oe.transition), (Oe.transition = null));
    var i = V;
    V = 1;
    var a = U;
    ((U |= 4),
      (Zi.current = null),
      mm(e, n),
      Yc(n, e),
      Vp(Ho),
      (cl = !!Bo),
      (Ho = Bo = null),
      (e.current = n),
      hm(n),
      Qf(),
      (U = a),
      (V = i),
      (Oe.transition = o));
  } else e.current = n;
  if (
    (Br && ((Br = !1), (xt = e), (El = l)),
    (o = e.pendingLanes),
    o === 0 && (Ct = null),
    Yf(n.stateNode),
    ke(e, q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
  if (Cl) throw ((Cl = !1), (e = ci), (ci = null), e);
  return (
    El & 1 && e.tag !== 0 && wn(),
    (o = e.pendingLanes),
    o & 1 ? (e === di ? er++ : ((er = 0), (di = e))) : (er = 0),
    Lt(),
    null
  );
}
function wn() {
  if (xt !== null) {
    var e = Mu(El),
      t = Oe.transition,
      n = V;
    try {
      if (((Oe.transition = null), (V = 16 > e ? 16 : e), xt === null))
        var r = !1;
      else {
        if (((e = xt), (xt = null), (El = 0), U & 6)) throw Error(N(331));
        var l = U;
        for (U |= 4, T = e.current; T !== null; ) {
          var o = T,
            i = o.child;
          if (T.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var f = a[u];
                for (T = f; T !== null; ) {
                  var y = T;
                  switch (y.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Jn(8, y, o);
                  }
                  var h = y.child;
                  if (h !== null) ((h.return = y), (T = h));
                  else
                    for (; T !== null; ) {
                      y = T;
                      var m = y.sibling,
                        x = y.return;
                      if ((Qc(y), y === f)) {
                        T = null;
                        break;
                      }
                      if (m !== null) {
                        ((m.return = x), (T = m));
                        break;
                      }
                      T = x;
                    }
                }
              }
              var g = o.alternate;
              if (g !== null) {
                var j = g.child;
                if (j !== null) {
                  g.child = null;
                  do {
                    var P = j.sibling;
                    ((j.sibling = null), (j = P));
                  } while (j !== null);
                }
              }
              T = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) ((i.return = o), (T = i));
          else
            e: for (; T !== null; ) {
              if (((o = T), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Jn(9, o, o.return);
                }
              var c = o.sibling;
              if (c !== null) {
                ((c.return = o.return), (T = c));
                break e;
              }
              T = o.return;
            }
        }
        var d = e.current;
        for (T = d; T !== null; ) {
          i = T;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null) ((p.return = i), (T = p));
          else
            e: for (i = d; T !== null; ) {
              if (((a = T), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ul(9, a);
                  }
                } catch (C) {
                  b(a, a.return, C);
                }
              if (a === i) {
                T = null;
                break e;
              }
              var v = a.sibling;
              if (v !== null) {
                ((v.return = a.return), (T = v));
                break e;
              }
              T = a.return;
            }
        }
        if (
          ((U = l), Lt(), Ze && typeof Ze.onPostCommitFiberRoot == "function")
        )
          try {
            Ze.onPostCommitFiberRoot(Dl, e);
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
function Va(e, t, n) {
  ((t = En(n, t)),
    (t = Mc(e, t, 1)),
    (e = jt(e, t, 1)),
    (t = me()),
    e !== null && (xr(e, 1, t), ke(e, t)));
}
function b(e, t, n) {
  if (e.tag === 3) Va(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Va(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ct === null || !Ct.has(r)))
        ) {
          ((e = En(n, e)),
            (e = Oc(t, e, 1)),
            (t = jt(t, e, 1)),
            (e = me()),
            t !== null && (xr(t, 1, e), ke(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function km(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = me()),
    (e.pingedLanes |= e.suspendedLanes & n),
    oe === e &&
      (se & n) === n &&
      (re === 4 || (re === 3 && (se & 130023424) === se && 500 > q() - qi)
        ? At(e, 0)
        : (Ji |= n)),
    ke(e, t));
}
function td(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Rr), (Rr <<= 1), !(Rr & 130023424) && (Rr = 4194304))
      : (t = 1));
  var n = me();
  ((e = ut(e, t)), e !== null && (xr(e, t, n), ke(e, n)));
}
function Sm(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), td(e, n));
}
function Nm(e, t) {
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
      throw Error(N(314));
  }
  (r !== null && r.delete(t), td(e, n));
}
var nd;
nd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || xe.current) ve = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((ve = !1), cm(e, t, n));
      ve = !!(e.flags & 131072);
    }
  else ((ve = !1), G && t.flags & 1048576 && ic(t, gl, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (tl(e, t), (e = t.pendingProps));
      var l = Sn(t, fe.current);
      (xn(t, n), (l = Gi(null, t, r, e, l, n)));
      var o = Ki();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            we(r) ? ((o = !0), hl(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ai(t),
            (l.updater = $l),
            (t.stateNode = l),
            (l._reactInternals = t),
            qo(t, r, e, n),
            (t = ni(null, t, r, !0, o, n)))
          : ((t.tag = 0), G && o && Mi(t), pe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (tl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Cm(r)),
          (e = Ve(r, e)),
          l)
        ) {
          case 0:
            t = ti(null, t, r, e, n);
            break e;
          case 1:
            t = za(null, t, r, e, n);
            break e;
          case 11:
            t = Ta(null, t, r, e, n);
            break e;
          case 14:
            t = Pa(null, t, r, Ve(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ve(r, l)),
        ti(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ve(r, l)),
        za(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Uc(t), e === null)) throw Error(N(387));
        ((r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          fc(e, t),
          wl(t, r, null, n));
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
            ((l = En(Error(N(423)), t)), (t = Da(e, t, r, n, l)));
            break e;
          } else if (r !== l) {
            ((l = En(Error(N(424)), t)), (t = Da(e, t, r, n, l)));
            break e;
          } else
            for (
              Ce = Nt(t.stateNode.containerInfo.firstChild),
                Ee = t,
                G = !0,
                We = null,
                n = cc(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((Nn(), r === l)) {
            t = ct(e, t, n);
            break e;
          }
          pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        pc(t),
        e === null && bo(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Qo(r, l) ? (i = null) : o !== null && Qo(r, o) && (t.flags |= 32),
        $c(e, t),
        pe(e, t, i, n),
        t.child
      );
    case 6:
      return (e === null && bo(t), null);
    case 13:
      return Vc(e, t, n);
    case 4:
      return (
        Wi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = jn(t, null, r, n)) : pe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ve(r, l)),
        Ta(e, t, r, l, n)
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
          B(vl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Qe(o.value, i)) {
            if (o.children === l.children && !xe.current) {
              t = ct(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                i = o.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      ((u = it(-1, n & -n)), (u.tag = 2));
                      var f = o.updateQueue;
                      if (f !== null) {
                        f = f.shared;
                        var y = f.pending;
                        (y === null
                          ? (u.next = u)
                          : ((u.next = y.next), (y.next = u)),
                          (f.pending = u));
                      }
                    }
                    ((o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      Zo(o.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(N(341));
                ((i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  Zo(i, n, t),
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
        xn(t, n),
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
        Pa(e, t, r, l, n)
      );
    case 15:
      return Ic(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ve(r, l)),
        tl(e, t),
        (t.tag = 1),
        we(r) ? ((e = !0), hl(t)) : (e = !1),
        xn(t, n),
        Rc(t, r, l),
        qo(t, r, l, n),
        ni(null, t, r, !0, e, n)
      );
    case 19:
      return Ac(e, t, n);
    case 22:
      return Fc(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function rd(e, t) {
  return zu(e, t);
}
function jm(e, t, n, r) {
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
function Me(e, t, n, r) {
  return new jm(e, t, n, r);
}
function rs(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function Cm(e) {
  if (typeof e == "function") return rs(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Si)) return 11;
    if (e === Ni) return 14;
  }
  return 2;
}
function _t(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Me(e.tag, t, e.key, e.mode)),
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
function ll(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) rs(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case rn:
        return Wt(n.children, l, o, t);
      case ki:
        ((i = 8), (l |= 8));
        break;
      case No:
        return (
          (e = Me(12, n, t, l | 2)),
          (e.elementType = No),
          (e.lanes = o),
          e
        );
      case jo:
        return ((e = Me(13, n, t, l)), (e.elementType = jo), (e.lanes = o), e);
      case Co:
        return ((e = Me(19, n, t, l)), (e.elementType = Co), (e.lanes = o), e);
      case pu:
        return Al(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case du:
              i = 10;
              break e;
            case fu:
              i = 9;
              break e;
            case Si:
              i = 11;
              break e;
            case Ni:
              i = 14;
              break e;
            case mt:
              ((i = 16), (r = null));
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Me(i, n, t, l)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = o),
    t
  );
}
function Wt(e, t, n, r) {
  return ((e = Me(7, e, r, t)), (e.lanes = n), e);
}
function Al(e, t, n, r) {
  return (
    (e = Me(22, e, r, t)),
    (e.elementType = pu),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function wo(e, t, n) {
  return ((e = Me(6, e, null, t)), (e.lanes = n), e);
}
function ko(e, t, n) {
  return (
    (t = Me(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Em(e, t, n, r, l) {
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
    (this.eventTimes = eo(0)),
    (this.expirationTimes = eo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = eo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null));
}
function ls(e, t, n, r, l, o, i, a, u) {
  return (
    (e = new Em(e, t, n, a, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Me(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ai(o),
    e
  );
}
function _m(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: nn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function ld(e) {
  if (!e) return Pt;
  e = e._reactInternals;
  e: {
    if (Xt(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (we(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (we(n)) return lc(e, n, t);
  }
  return t;
}
function od(e, t, n, r, l, o, i, a, u) {
  return (
    (e = ls(n, r, !0, e, l, o, i, a, u)),
    (e.context = ld(null)),
    (n = e.current),
    (r = me()),
    (l = Et(n)),
    (o = it(r, l)),
    (o.callback = t ?? null),
    jt(n, o, l),
    (e.current.lanes = l),
    xr(e, l, r),
    ke(e, r),
    e
  );
}
function Wl(e, t, n, r) {
  var l = t.current,
    o = me(),
    i = Et(l);
  return (
    (n = ld(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = it(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = jt(l, t, i)),
    e !== null && (He(e, l, i, o), Jr(e, l, i)),
    i
  );
}
function Tl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Aa(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function os(e, t) {
  (Aa(e, t), (e = e.alternate) && Aa(e, t));
}
function Tm() {
  return null;
}
var id =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function is(e) {
  this._internalRoot = e;
}
Bl.prototype.render = is.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  Wl(e, t, null, null);
};
Bl.prototype.unmount = is.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (Kt(function () {
      Wl(null, e, null, null);
    }),
      (t[at] = null));
  }
};
function Bl(e) {
  this._internalRoot = e;
}
Bl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Fu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < yt.length && t !== 0 && t < yt[n].priority; n++);
    (yt.splice(n, 0, e), n === 0 && Uu(e));
  }
};
function ss(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Hl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Wa() {}
function Pm(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var f = Tl(i);
        o.call(f);
      };
    }
    var i = od(t, r, e, 0, null, !1, !1, "", Wa);
    return (
      (e._reactRootContainer = i),
      (e[at] = i.current),
      ur(e.nodeType === 8 ? e.parentNode : e),
      Kt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var f = Tl(u);
      a.call(f);
    };
  }
  var u = ls(e, 0, !1, null, null, !1, !1, "", Wa);
  return (
    (e._reactRootContainer = u),
    (e[at] = u.current),
    ur(e.nodeType === 8 ? e.parentNode : e),
    Kt(function () {
      Wl(t, u, n, r);
    }),
    u
  );
}
function Ql(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var a = l;
      l = function () {
        var u = Tl(i);
        a.call(u);
      };
    }
    Wl(t, i, e, l);
  } else i = Pm(n, t, e, l, r);
  return Tl(i);
}
Ou = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Bn(t.pendingLanes);
        n !== 0 &&
          (Ei(t, n | 1), ke(t, q()), !(U & 6) && ((_n = q() + 500), Lt()));
      }
      break;
    case 13:
      (Kt(function () {
        var r = ut(e, 1);
        if (r !== null) {
          var l = me();
          He(r, e, 1, l);
        }
      }),
        os(e, 1));
  }
};
_i = function (e) {
  if (e.tag === 13) {
    var t = ut(e, 134217728);
    if (t !== null) {
      var n = me();
      He(t, e, 134217728, n);
    }
    os(e, 134217728);
  }
};
Iu = function (e) {
  if (e.tag === 13) {
    var t = Et(e),
      n = ut(e, t);
    if (n !== null) {
      var r = me();
      He(n, e, t, r);
    }
    os(e, t);
  }
};
Fu = function () {
  return V;
};
$u = function (e, t) {
  var n = V;
  try {
    return ((V = e), t());
  } finally {
    V = n;
  }
};
Oo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((To(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var l = Ol(r);
            if (!l) throw Error(N(90));
            (hu(r), To(r, l));
          }
        }
      }
      break;
    case "textarea":
      gu(e, n);
      break;
    case "select":
      ((t = n.value), t != null && hn(e, !!n.multiple, t, !1));
  }
};
ju = es;
Cu = Kt;
var zm = { usingClientEntryPoint: !1, Events: [kr, an, Ol, Su, Nu, es] },
  Vn = {
    findFiberByHostInstance: $t,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Dm = {
    bundleType: Vn.bundleType,
    version: Vn.version,
    rendererPackageName: Vn.rendererPackageName,
    rendererConfig: Vn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: dt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Tu(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Vn.findFiberByHostInstance || Tm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Hr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Hr.isDisabled && Hr.supportsFiber)
    try {
      ((Dl = Hr.inject(Dm)), (Ze = Hr));
    } catch {}
}
Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zm;
Te.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ss(t)) throw Error(N(200));
  return _m(e, t, null, n);
};
Te.createRoot = function (e, t) {
  if (!ss(e)) throw Error(N(299));
  var n = !1,
    r = "",
    l = id;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = ls(e, 1, !1, null, null, n, !1, r, l)),
    (e[at] = t.current),
    ur(e.nodeType === 8 ? e.parentNode : e),
    new is(t)
  );
};
Te.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return ((e = Tu(t)), (e = e === null ? null : e.stateNode), e);
};
Te.flushSync = function (e) {
  return Kt(e);
};
Te.hydrate = function (e, t, n) {
  if (!Hl(t)) throw Error(N(200));
  return Ql(null, e, t, !0, n);
};
Te.hydrateRoot = function (e, t, n) {
  if (!ss(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = id;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = od(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[at] = t.current),
    ur(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l));
  return new Bl(t);
};
Te.render = function (e, t, n) {
  if (!Hl(t)) throw Error(N(200));
  return Ql(null, e, t, !1, n);
};
Te.unmountComponentAtNode = function (e) {
  if (!Hl(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (Kt(function () {
        Ql(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[at] = null));
        });
      }),
      !0)
    : !1;
};
Te.unstable_batchedUpdates = es;
Te.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Hl(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return Ql(e, t, n, !1, r);
};
Te.version = "18.3.1-next-f1338f8080-20240426";
function sd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sd);
    } catch (e) {
      console.error(e);
    }
}
(sd(), (su.exports = Te));
var Lm = su.exports,
  ad,
  Ba = Lm;
((ad = Ba.createRoot), Ba.hydrateRoot);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Rm = {
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
  Z = (e, t) => {
    const n = E.forwardRef(
      (
        {
          color: r = "currentColor",
          size: l = 24,
          strokeWidth: o = 2,
          absoluteStrokeWidth: i,
          className: a = "",
          children: u,
          ...f
        },
        y,
      ) =>
        E.createElement(
          "svg",
          {
            ref: y,
            ...Rm,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: i ? (Number(o) * 24) / Number(l) : o,
            className: ["lucide", `lucide-${Mm(e)}`, a].join(" "),
            ...f,
          },
          [
            ...t.map(([h, m]) => E.createElement(h, m)),
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
 */ const Om = Z("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Im = Z("BarChart3", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fm = Z("Bed", [
  ["path", { d: "M2 4v16", key: "vw9hq8" }],
  ["path", { d: "M2 8h18a2 2 0 0 1 2 2v10", key: "1dgv2r" }],
  ["path", { d: "M2 17h20", key: "18nfp3" }],
  ["path", { d: "M6 8v9", key: "1yriud" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $m = Z("CheckCircle2", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ud = Z("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Um = Z("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cd = Z("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vm = Z("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dd = Z("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Am = Z("Columns2", [
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
  ],
  ["path", { d: "M12 3v18", key: "108xh3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fd = Z("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wm = Z("Eye", [
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
 */ const Ha = Z("FileText", [
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
 */ const Bm = Z("FileWarning", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
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
 */ const Qa = Z("FileX", [
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
 */ const Hm = Z("Globe", [
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
 */ const Ga = Z("Layers", [
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
 */ const Pl = Z("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qm = Z("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gm = Z("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Km = Z("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qn = Z("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Qr = ({ message: e = "Loading..." }) =>
    s.jsx("div", {
      className:
        "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
      children: s.jsxs("div", {
        className: "bg-white rounded-lg p-8 flex flex-col items-center",
        children: [
          s.jsx(Pl, { className: "w-12 h-12 text-[#4E6DB4] animate-spin" }),
          s.jsx("p", { className: "mt-4 text-lg text-[#333333]", children: e }),
        ],
      }),
    }),
  Ym = ({ message: e, onClose: t }) => (
    E.useEffect(() => {
      const n = setTimeout(() => {
        t();
      }, 3e3);
      return () => clearTimeout(n);
    }, [t, e]),
    s.jsxs("div", {
      className:
        "fixed top-4 right-4 bg-red-50 border-l-4 border-red-400 p-4 rounded shadow-lg z-50",
      style: { animation: "slide-in 0.3s ease-out forwards" },
      children: [
        s.jsxs("div", {
          className: "flex items-center",
          children: [
            s.jsx(Om, { className: "h-5 w-5 text-red-400 mr-2" }),
            s.jsxs("p", {
              className: "text-red-700",
              children: ["錯誤 : ", e],
            }),
          ],
        }),
        s.jsx("style", {
          children: `
        @keyframes slide-in {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `,
        }),
      ],
    })
  ),
  pd = E.forwardRef(
    (
      {
        language: e,
        startDate: t,
        startTime: n,
        endDate: r,
        endTime: l,
        onStartDateChange: o,
        onStartTimeChange: i,
        onEndDateChange: a,
        onEndTimeChange: u,
        timeType: f = "ORD_START",
        onTimeTypeChange: y,
      },
      h,
    ) => {
      const [m, x] = E.useState(!0),
        g = [
          {
            value: "update_time",
            label: { en: "Update Time", "zh-TW": "更新時間" },
          },
        ],
        j = () => {
          x(!m);
        },
        P = () => {
          x(!1);
        };
      return (
        E.useImperativeHandle(h, () => ({ collapse: P })),
        s.jsxs("div", {
          className:
            "bg-white rounded-lg shadow-sm border border-gray-200 mb-4 overflow-hidden",
          children: [
            s.jsxs("div", {
              className:
                "flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100",
              onClick: j,
              children: [
                s.jsxs("div", {
                  className: "flex items-center space-x-3",
                  children: [
                    s.jsx(dd, { className: "w-5 h-5 text-gray-600" }),
                    s.jsx("h3", {
                      className: "text-lg font-semibold text-gray-900",
                      children: e === "en" ? "Time Range" : "時間範圍",
                    }),
                  ],
                }),
                s.jsx("div", {
                  className: "transition-transform duration-200",
                  children: m
                    ? s.jsx(Vm, { className: "w-5 h-5 text-gray-500" })
                    : s.jsx(ud, { className: "w-5 h-5 text-gray-500" }),
                }),
              ],
            }),
            s.jsx("div", {
              className: `transition-all duration-300 ease-in-out overflow-hidden ${m ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`,
              children: s.jsx("div", {
                className: "px-6 py-4",
                children: s.jsxs("div", {
                  className: "flex items-end gap-12",
                  children: [
                    s.jsxs("div", {
                      className: "w-[15%]",
                      children: [
                        s.jsx("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: e === "en" ? "Time Type" : "時間類型",
                        }),
                        s.jsx("select", {
                          value: f,
                          onChange: (c) =>
                            y == null ? void 0 : y(c.target.value),
                          className:
                            "w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 focus:bg-white transition-colors",
                          children: g.map((c) =>
                            s.jsx(
                              "option",
                              { value: c.value, children: c.label[e] },
                              c.value,
                            ),
                          ),
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "w-[30%]",
                      children: [
                        s.jsx("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children:
                            e === "en" ? "Start Date & Time" : "開始日期時間",
                        }),
                        s.jsxs("div", {
                          className: "flex gap-3",
                          children: [
                            s.jsx("input", {
                              type: "date",
                              value: t,
                              onChange: (c) => o(c.target.value),
                              className:
                                "flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 focus:bg-white transition-colors",
                            }),
                            s.jsx("input", {
                              type: "time",
                              value: n,
                              step: "1",
                              onChange: (c) => i(c.target.value),
                              className:
                                "flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 focus:bg-white transition-colors",
                            }),
                          ],
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "w-[30%]",
                      children: [
                        s.jsx("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children:
                            e === "en" ? "End Date & Time" : "結束日期時間",
                        }),
                        s.jsxs("div", {
                          className: "flex gap-3",
                          children: [
                            s.jsx("input", {
                              type: "date",
                              value: r,
                              onChange: (c) => a(c.target.value),
                              className:
                                "flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 focus:bg-white transition-colors",
                            }),
                            s.jsx("input", {
                              type: "time",
                              value: l,
                              step: "1",
                              onChange: (c) => u(c.target.value),
                              className:
                                "flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 focus:bg-white transition-colors",
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
        })
      );
    },
  );
pd.displayName = "TimeSearchBlock";
const Xm = ({
    language: e,
    searchField: t,
    searchValue: n,
    selectedPharmacy: r,
    selectedNursingStation: l,
    pharmacies: o,
    nursingStations: i,
    onSearchFieldChange: a,
    onSearchValueChange: u,
    onPharmacyChange: f,
    onNursingStationChange: y,
    onSearch: h,
    onReset: m,
    searchFields: x,
    recordsPerPage: g,
    data: j,
  }) => {
    const P = () => {
      u("");
    };
    return s.jsx("div", {
      children: s.jsx("div", {
        className: "bg-white rounded-lg py-4 md:py-6",
        children: s.jsx("div", {
          className: "flex justify-between items-center",
          children: s.jsxs("div", {
            className: "flex items-center space-x-4",
            children: [
              s.jsxs("div", {
                className: "flex items-center",
                children: [
                  s.jsx("h2", {
                    className: "text-xl font-semibold text-gray-900",
                    children: e === "en" ? "Search Results" : "搜尋結果",
                  }),
                  s.jsx("span", {
                    className: "ml-1 text-sm text-base text-gray-600",
                    children:
                      e === "en"
                        ? `(${j.length} entries)`
                        : `（${j.length} 筆)`,
                  }),
                ],
              }),
              s.jsx("div", {
                children: s.jsxs("select", {
                  value: r,
                  onChange: (c) => f(c.target.value),
                  className:
                    "w-full border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                  children: [
                    s.jsx("option", {
                      value: "",
                      children: e === "en" ? "Pharmacies" : "藥局",
                    }),
                    o.map((c) =>
                      s.jsx(
                        "option",
                        { value: c.phar, children: c.phar_name },
                        c.phar,
                      ),
                    ),
                  ],
                }),
              }),
              s.jsx("div", {
                children: s.jsxs("select", {
                  value: l,
                  onChange: (c) => y(c.target.value),
                  disabled: !r,
                  className:
                    "w-full border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                  children: [
                    s.jsx("option", {
                      value: "",
                      children: e === "en" ? "Nursing Stations" : "護理站",
                    }),
                    i.map((c) =>
                      s.jsx(
                        "option",
                        { value: c.hnursta, children: c.hnursta },
                        c.hnursta,
                      ),
                    ),
                  ],
                }),
              }),
              s.jsx("div", {
                children: s.jsx("select", {
                  value: t,
                  onChange: (c) => a(c.target.value),
                  className:
                    "w-full border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                  children: x.map((c) =>
                    s.jsx(
                      "option",
                      { value: c.key, children: c.label[e] },
                      c.key,
                    ),
                  ),
                }),
              }),
              s.jsxs("div", {
                className: "relative md:col-span-2",
                children: [
                  s.jsx("input", {
                    type: "text",
                    value: n,
                    onChange: (c) => u(c.target.value),
                    className:
                      "w-full border rounded-lg px-3 py-2 pr-10 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                    placeholder:
                      e === "en" ? "Enter search value" : "請輸入搜尋值",
                  }),
                  n &&
                    s.jsx("button", {
                      onClick: P,
                      className:
                        "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors",
                      type: "button",
                      children: s.jsx(Qn, { className: "w-4 h-4" }),
                    }),
                ],
              }),
              s.jsxs("button", {
                onClick: h,
                className:
                  "px-6 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 flex items-center hover:shadow-md",
                children: [
                  s.jsx(Gm, { className: "w-4 h-4 mr-2" }),
                  e === "en" ? "Search" : "搜尋",
                ],
              }),
            ],
          }),
        }),
      }),
    });
  },
  Ka = ({
    data: e,
    language: t,
    onRecordClick: n,
    visibleColumns: r,
    columns: l,
  }) => {
    const [o, i] = E.useState(new Set()),
      a = kf.useMemo(() => {
        const h = new Map(),
          m = [];
        return (
          e.forEach((x) => {
            const g = `${x.nurnum}-${x.bednum}-${x.histno}`;
            h.has(g) ||
              (h.set(g, {
                nurnum: x.nurnum,
                bednum: x.bednum,
                histno: x.histno,
                pnamec: x.pnamec,
                caseno: x.caseno,
                pharm: x.pharm,
                records: [],
                totalCount: 0,
                dispensedCount: 0,
                checkedCount: 0,
              }),
              m.push(g));
            const j = h.get(g);
            (j.records.push(x),
              j.totalCount++,
              x.dispens_status === "Y" && j.dispensedCount++,
              x.check_status === "Y" && j.checkedCount++);
          }),
          m.map((x) => h.get(x))
        );
      }, [e]),
      u = (h) => {
        const m = new Set(o);
        (m.has(h) ? m.delete(h) : m.add(h), i(m));
      },
      f = (h, m) =>
        h === "Y"
          ? s.jsx("div", {
              className: "flex items-center justify-center",
              children: s.jsxs("div", {
                className:
                  "flex items-center space-x-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium",
                children: [
                  s.jsx($m, { className: "w-3 h-3" }),
                  s.jsx("span", {
                    children: m === "dispens" ? "已調劑" : "已覆核",
                  }),
                ],
              }),
            })
          : s.jsx("div", {
              className: "flex items-center justify-center",
              children: s.jsxs("div", {
                className:
                  "flex items-center space-x-1 bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs",
                children: [
                  s.jsx(dd, { className: "w-3 h-3" }),
                  s.jsx("span", {
                    children: m === "dispens" ? "待調劑" : "待覆核",
                  }),
                ],
              }),
            }),
      y = (h, m) => {
        if (
          (m === "self" && h === "Y") ||
          (m === "large" && h === "L") ||
          (m === "injection" && h === "Y") ||
          (m === "oral" && h === "Y") ||
          (m === "ice" && h === "Y")
        ) {
          const g = {
            injection: {
              bg: "bg-red-100",
              text: "text-red-800",
              label: "針劑",
              icon: "💉",
            },
            oral: {
              bg: "bg-blue-100",
              text: "text-blue-800",
              label: "口服",
              icon: "💊",
            },
            ice: {
              bg: "bg-cyan-100",
              text: "text-cyan-800",
              label: "冷藏",
              icon: "❄️",
            },
            self: {
              bg: "bg-yellow-100",
              text: "text-yellow-800",
              label: "自購",
              icon: "💰",
            },
            large: {
              bg: "bg-purple-100",
              text: "text-purple-800",
              label: "大瓶藥",
              icon: "🍼",
            },
          }[m];
          return s.jsx("div", {
            className: "flex items-center justify-center",
            children: s.jsxs("span", {
              className: `${g.bg} ${g.text} px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1`,
              children: [
                s.jsx("span", { children: g.icon }),
                s.jsx("span", { children: g.label }),
              ],
            }),
          });
        }
        return s.jsx("div", {
          className: "flex items-center justify-center text-gray-400 text-xs",
          children: "-",
        });
      };
    return s.jsx("div", {
      className: "space-y-2",
      children: a.map((h) => {
        const m = `${h.nurnum}-${h.bednum}-${h.histno}`,
          x = o.has(m);
        return s.jsxs(
          "div",
          {
            className:
              "bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden",
            children: [
              s.jsx("div", {
                className:
                  "flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors",
                onClick: () => u(m),
                children: s.jsxs("div", {
                  className: "flex items-center space-x-4 flex-1",
                  children: [
                    s.jsx("div", {
                      className: "flex-shrink-0",
                      children: x
                        ? s.jsx(ud, { className: "w-5 h-5 text-gray-600" })
                        : s.jsx(cd, { className: "w-5 h-5 text-gray-600" }),
                    }),
                    s.jsxs("div", {
                      className: "flex items-center space-x-6 flex-1",
                      children: [
                        s.jsxs("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            s.jsx(Fm, { className: "w-4 h-4 text-gray-500" }),
                            s.jsxs("div", {
                              children: [
                                s.jsx("div", {
                                  className: "text-xs text-gray-500",
                                  children:
                                    t === "en" ? "Ward / Bed" : "護理站 / 床號",
                                }),
                                s.jsxs("div", {
                                  className: "font-medium text-gray-900",
                                  children: [h.nurnum, " / ", h.bednum],
                                }),
                              ],
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            s.jsx(Km, { className: "w-4 h-4 text-gray-500" }),
                            s.jsxs("div", {
                              children: [
                                s.jsx("div", {
                                  className: "text-xs text-gray-500",
                                  children:
                                    t === "en" ? "Patient Name" : "病人姓名",
                                }),
                                s.jsx("div", {
                                  className: "font-medium text-gray-900",
                                  children: h.pnamec,
                                }),
                              ],
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            s.jsx(Ha, { className: "w-4 h-4 text-gray-500" }),
                            s.jsxs("div", {
                              children: [
                                s.jsx("div", {
                                  className: "text-xs text-gray-500",
                                  children:
                                    t === "en"
                                      ? "Medical Record No."
                                      : "病歷號",
                                }),
                                s.jsx("div", {
                                  className: "font-medium text-gray-900",
                                  children: h.histno,
                                }),
                              ],
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            s.jsx(Ha, { className: "w-4 h-4 text-gray-500" }),
                            s.jsxs("div", {
                              children: [
                                s.jsx("div", {
                                  className: "text-xs text-gray-500",
                                  children:
                                    t === "en" ? "Admission No." : "住院號",
                                }),
                                s.jsx("div", {
                                  className: "font-medium text-gray-900",
                                  children: h.caseno,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        s.jsxs("div", {
                          className: "text-center",
                          children: [
                            s.jsx("div", {
                              className: "text-xs text-gray-500",
                              children: t === "en" ? "Total" : "總筆數",
                            }),
                            s.jsx("div", {
                              className: "text-lg font-semibold text-gray-900",
                              children: h.totalCount,
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          className: "text-center",
                          children: [
                            s.jsx("div", {
                              className: "text-xs text-gray-500",
                              children: t === "en" ? "Dispensed" : "已調劑",
                            }),
                            s.jsx("div", {
                              className: "text-lg font-semibold text-green-600",
                              children: h.dispensedCount,
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          className: "text-center",
                          children: [
                            s.jsx("div", {
                              className: "text-xs text-gray-500",
                              children: t === "en" ? "Checked" : "已覆核",
                            }),
                            s.jsx("div", {
                              className: "text-lg font-semibold text-blue-600",
                              children: h.checkedCount,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              x &&
                s.jsx("div", {
                  className: "border-t border-gray-200 bg-gray-50",
                  children: s.jsx("div", {
                    className: "overflow-x-auto",
                    children: s.jsxs("table", {
                      className: "min-w-full divide-y divide-gray-200",
                      children: [
                        s.jsx("thead", {
                          className: "bg-gray-100",
                          children: s.jsx("tr", {
                            children: l
                              .filter(
                                (g) =>
                                  r.has(g.key) &&
                                  g.key !== "nurnum" &&
                                  g.key !== "bednum" &&
                                  g.key !== "histno" &&
                                  g.key !== "pnamec" &&
                                  g.key !== "caseno",
                              )
                              .sort((g, j) => g.order - j.order)
                              .map((g) =>
                                s.jsx(
                                  "th",
                                  {
                                    scope: "col",
                                    className: `px-4 py-3 text-sm font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap ${g.key === "dispens_status" || g.key === "check_status" || g.key === "large" ? "text-center" : "text-left"}`,
                                    children: g.label[t],
                                  },
                                  g.key,
                                ),
                              ),
                          }),
                        }),
                        s.jsx("tbody", {
                          className: "bg-white divide-y divide-gray-200",
                          children: h.records.map((g, j) =>
                            s.jsx(
                              "tr",
                              {
                                className: `cursor-pointer transition-colors ${g.status === "DC" ? "bg-red-50 hover:bg-red-100" : "hover:bg-gray-50"}`,
                                onClick: () => n(g),
                                children: l
                                  .filter(
                                    (P) =>
                                      r.has(P.key) &&
                                      P.key !== "nurnum" &&
                                      P.key !== "bednum" &&
                                      P.key !== "histno" &&
                                      P.key !== "pnamec" &&
                                      P.key !== "caseno",
                                  )
                                  .sort((P, c) => P.order - c.order)
                                  .map((P) =>
                                    s.jsx(
                                      "td",
                                      {
                                        className: `px-4 py-3 text-sm text-gray-900 ${P.width || "truncate"}`,
                                        children:
                                          P.key === "index"
                                            ? j + 1
                                            : P.key === "dispens_status" ||
                                                P.key === "check_status"
                                              ? f(
                                                  g[P.key],
                                                  P.key === "dispens_status"
                                                    ? "dispens"
                                                    : "check",
                                                )
                                              : P.key === "injection"
                                                ? y(g[P.key], "injection")
                                                : P.key === "oral"
                                                  ? y(g[P.key], "oral")
                                                  : P.key === "ice"
                                                    ? y(g[P.key], "ice")
                                                    : P.key === "self"
                                                      ? y(g[P.key], "self")
                                                      : P.key === "large"
                                                        ? y(g[P.key], "large")
                                                        : g[P.key],
                                      },
                                      P.key,
                                    ),
                                  ),
                              },
                              g.GUID,
                            ),
                          ),
                        }),
                      ],
                    }),
                  }),
                }),
            ],
          },
          m,
        );
      }),
    });
  },
  bm = [
    { key: "pharm", label: { en: "Pharmacy", "zh-TW": "藥局" }, width: "w-24" },
    {
      key: "nurnum",
      label: { en: "Nursing Station", "zh-TW": "護理站" },
      width: "w-28",
    },
    {
      key: "disp_id",
      label: { en: "Dispenser ID", "zh-TW": "調劑人ID" },
      width: "w-28",
    },
    {
      key: "disp_name",
      label: { en: "Dispenser", "zh-TW": "調劑人" },
      width: "w-32",
    },
    {
      key: "reporter_id",
      label: { en: "Reporter ID", "zh-TW": "通報人ID" },
      width: "w-28",
    },
    {
      key: "reporter_name",
      label: { en: "Reporter", "zh-TW": "通報人" },
      width: "w-32",
    },
    {
      key: "creat_time",
      label: { en: "Report Time", "zh-TW": "通報時間" },
      width: "w-44",
    },
    { key: "reason", label: { en: "Reason", "zh-TW": "原因" }, width: "w-80" },
    { key: "note", label: { en: "Note", "zh-TW": "備註" }, width: "w-80" },
    { key: "action", label: { en: "Action", "zh-TW": "操作" }, width: "w-20" },
  ],
  Zm = ({
    data: e,
    language: t,
    onViewDetail: n,
    recordsPerPage: r = 25,
    startDateTime: l,
    endDateTime: o,
    getApiUrl: i,
    onError: a,
  }) => {
    const [u, f] = E.useState(1),
      [y, h] = E.useState("1"),
      [m, x] = E.useState(!1),
      g = Math.ceil(e.length / r),
      j = e.slice((u - 1) * r, u * r),
      P = (v) => {
        v >= 1 && v <= g && (f(v), h(v.toString()));
      },
      c = (v) => {
        h(v.target.value);
      },
      d = (v) => {
        if (v.key === "Enter") {
          const C = parseInt(y);
          !isNaN(C) && C >= 1 && C <= g ? P(C) : h(u.toString());
        }
      },
      p = async () => {
        x(!0);
        const v = i("api/nearMiss/download_report");
        try {
          const z = await fetch(v, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ValueAry: [l, o] }),
          });
          if (!z.ok) throw new Error("Failed to download report");
          const D = z.headers.get("content-type");
          if (
            D &&
            D.includes(
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            )
          ) {
            const L = await z.blob(),
              A = window.URL.createObjectURL(L),
              M = document.createElement("a");
            ((M.href = A),
              (M.download = `調劑錯誤報表_${new Date().toISOString().split("T")[0]}.xlsx`),
              document.body.appendChild(M),
              M.click(),
              document.body.removeChild(M),
              window.URL.revokeObjectURL(A));
          } else {
            const L = await z.json();
            L.Code !== 200 && a(L.Result || "Failed to download report");
          }
        } catch (C) {
          (console.error("Error downloading report:", C),
            a("Failed to download near miss report"));
        } finally {
          x(!1);
        }
      };
    return s.jsxs("div", {
      children: [
        s.jsxs("div", {
          className:
            "bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center justify-between",
          children: [
            s.jsx("div", {
              className: "flex items-center text-sm text-gray-600",
              children:
                t === "en"
                  ? `Total ${e.length} near miss records`
                  : `共 ${e.length} 筆調劑錯誤記錄`,
            }),
            s.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                s.jsxs("button", {
                  onClick: p,
                  disabled: e.length === 0 || m,
                  className:
                    "inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                  children: [
                    m
                      ? s.jsx(Pl, { className: "h-5 w-5 mr-2 animate-spin" })
                      : s.jsx(fd, { className: "h-5 w-5 mr-2" }),
                    t === "en" ? "Download Report" : "下載報表",
                  ],
                }),
                g > 1 &&
                  s.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      s.jsx("button", {
                        onClick: () => P(u - 1),
                        disabled: u === 1,
                        className:
                          "p-1 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed",
                        "aria-label": t === "en" ? "Previous page" : "上一頁",
                        children: s.jsx(Um, { className: "w-5 h-5" }),
                      }),
                      s.jsxs("div", {
                        className: "flex items-center gap-1 text-sm",
                        children: [
                          s.jsx("input", {
                            type: "text",
                            value: y,
                            onChange: c,
                            onKeyDown: d,
                            className:
                              "w-12 px-2 py-1 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",
                          }),
                          s.jsxs("span", {
                            className: "text-gray-600",
                            children: ["/ ", g],
                          }),
                        ],
                      }),
                      s.jsx("button", {
                        onClick: () => P(u + 1),
                        disabled: u === g,
                        className:
                          "p-1 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed",
                        "aria-label": t === "en" ? "Next page" : "下一頁",
                        children: s.jsx(cd, { className: "w-5 h-5" }),
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
        j.length > 0
          ? s.jsx("div", {
              className: "overflow-x-auto",
              children: s.jsxs("table", {
                className: "min-w-full divide-y divide-gray-200",
                children: [
                  s.jsx("thead", {
                    className: "bg-gray-50",
                    children: s.jsx("tr", {
                      children: bm.map((v) =>
                        s.jsx(
                          "th",
                          {
                            scope: "col",
                            className: `px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider ${v.width || ""}`,
                            children: v.label[t],
                          },
                          String(v.key),
                        ),
                      ),
                    }),
                  }),
                  s.jsx("tbody", {
                    className: "bg-white divide-y divide-gray-200",
                    children: j.map((v, C) =>
                      s.jsxs(
                        "tr",
                        {
                          className: C % 2 === 0 ? "bg-white" : "bg-gray-50",
                          children: [
                            s.jsx("td", {
                              className: "px-4 py-3 text-sm text-gray-900",
                              children: v.pharm,
                            }),
                            s.jsx("td", {
                              className: "px-4 py-3 text-sm text-gray-900",
                              children: v.nurnum,
                            }),
                            s.jsx("td", {
                              className: "px-4 py-3 text-sm text-gray-900",
                              children: v.disp_id,
                            }),
                            s.jsx("td", {
                              className: "px-4 py-3 text-sm text-gray-900",
                              children: v.disp_name,
                            }),
                            s.jsx("td", {
                              className: "px-4 py-3 text-sm text-gray-900",
                              children: v.reporter_id,
                            }),
                            s.jsx("td", {
                              className: "px-4 py-3 text-sm text-gray-900",
                              children: v.reporter_name,
                            }),
                            s.jsx("td", {
                              className: "px-4 py-3 text-sm text-gray-900",
                              children: v.creat_time,
                            }),
                            s.jsx("td", {
                              className: "px-4 py-3 text-sm",
                              children: s.jsx("div", {
                                className:
                                  "text-red-600 font-medium break-words",
                                children: v.reason,
                              }),
                            }),
                            s.jsx("td", {
                              className:
                                "px-4 py-3 text-sm text-gray-700 break-words",
                              children: v.note || "-",
                            }),
                            s.jsx("td", {
                              className: "px-4 py-3 text-sm text-center",
                              children: s.jsx("button", {
                                onClick: () => n(v.cpoe_GUID),
                                className:
                                  "inline-flex items-center justify-center p-2 rounded-lg hover:bg-blue-50 text-blue-600 hover:text-blue-700 transition-colors",
                                title: t === "en" ? "View Detail" : "查看明細",
                                children: s.jsx(Wm, { className: "w-5 h-5" }),
                              }),
                            }),
                          ],
                        },
                        v.GUID,
                      ),
                    ),
                  }),
                ],
              }),
            })
          : s.jsx("div", {
              className: "text-center py-12 text-gray-500",
              children:
                t === "en" ? "No near miss records found" : "查無調劑錯誤記錄",
            }),
      ],
    });
  };
async function Jm() {
  try {
    const e = await fetch("../../config.txt");
    if (!e.ok) throw new Error("Failed to load configuration");
    const t = await e.json();
    return { domain: t.domain || "", homepage: t.homepage || "" };
  } catch (e) {
    throw (console.error("Error loading configuration:", e), e);
  }
}
function qm() {
  const [e, t] = E.useState(() => {
    const l = sessionStorage.getItem("user_session");
    return l ? JSON.parse(l) : null;
  });
  return {
    user: e,
    login: (l) => {
      (t(l), sessionStorage.setItem("user_session", JSON.stringify(l)));
    },
    logout: () => {
      (t(null), sessionStorage.removeItem("user_session"));
    },
  };
}
const eh = ({ onLogin: e, language: t, getApiUrl: n }) => {
    const [r, l] = E.useState(""),
      [o, i] = E.useState(""),
      [a, u] = E.useState(null),
      [f, y] = E.useState(!1),
      h = async (m) => {
        (m.preventDefault(), u(null), y(!0));
        try {
          const g = await (
            await fetch(n("api/session/login"), {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ Data: { ID: r, Password: o } }),
            })
          ).json();
          g.Code === 200
            ? (sessionStorage.setItem("user_session", JSON.stringify(g.Data)),
              e(g.Data))
            : u(g.Result);
        } catch {
          u(t === "en" ? "Login failed" : "登入失敗");
        } finally {
          y(!1);
        }
      };
    return s.jsx("div", {
      className:
        "fixed inset-0 bg-[#F8F9FF] flex items-center justify-center z-50",
      children: s.jsxs("div", {
        className: "w-full max-w-md mx-auto px-6",
        children: [
          s.jsx("div", {
            className: "text-center mb-12",
            children: s.jsx("h1", {
              className: "text-3xl font-bold text-gray-900 mb-2",
              children:
                t === "en" ? "Inpatient Medical Order Records" : "住院醫令查詢",
            }),
          }),
          s.jsxs("form", {
            onSubmit: h,
            className: "space-y-6 bg-white rounded-2xl p-8 shadow-sm",
            children: [
              s.jsxs("div", {
                children: [
                  s.jsx("label", {
                    className: "block text-base font-medium text-gray-700 mb-1",
                    children: t === "en" ? "ID" : "帳號",
                  }),
                  s.jsx("input", {
                    type: "text",
                    value: r,
                    onChange: (m) => l(m.target.value),
                    className:
                      "block w-full px-4 py-3 rounded-lg bg-[#EFF1F9] border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:bg-white",
                    required: !0,
                    placeholder: t === "en" ? "Enter your ID" : "請輸入帳號",
                  }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", {
                    className: "block text-base font-medium text-gray-700 mb-1",
                    children: t === "en" ? "Password" : "密碼",
                  }),
                  s.jsx("input", {
                    type: "password",
                    value: o,
                    onChange: (m) => i(m.target.value),
                    className:
                      "block w-full px-4 py-3 rounded-lg bg-[#EFF1F9] border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:bg-white",
                    required: !0,
                    placeholder:
                      t === "en" ? "Enter your password" : "請輸入密碼",
                  }),
                ],
              }),
              a &&
                s.jsx("div", {
                  className:
                    "text-red-600 text-base text-center bg-red-50 py-2 rounded-lg",
                  children: a,
                }),
              s.jsx("button", {
                type: "submit",
                disabled: f,
                className:
                  "w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-150 ease-in-out",
                children: f
                  ? s.jsx("div", {
                      className: "flex items-center justify-center",
                      children: s.jsx("div", {
                        className:
                          "animate-spin rounded-full h-5 w-5 border-b-2 border-white",
                      }),
                    })
                  : t === "en"
                    ? "Login"
                    : "登入",
              }),
            ],
          }),
        ],
      }),
    });
  },
  Gr = {
    label: "color: #2563eb; font-weight: bold; font-size: 12px;",
    success: "color: #16a34a; font-weight: bold;",
    error: "color: #dc2626; font-weight: bold;",
    warning: "color: #d97706; font-weight: bold;",
    info: "color: #2563eb; font-weight: bold;",
  },
  tt = ({ url: e, method: t, payload: n, response: r }) => {
    (console.group(`🌐 API Call: ${t} ${e}`),
      console.log(
        "%cRequest URL",
        Gr.label,
        `
${e}`,
      ),
      console.log(
        "%cMethod",
        Gr.label,
        `
${t}`,
      ),
      n &&
        console.log(
          "%cPayload",
          Gr.label,
          `
`,
          n,
        ),
      r &&
        console.log(
          "%cResponse",
          Gr.label,
          `
`,
          r,
        ),
      console.groupEnd());
  },
  Ya = "cpoe-query-visible-columns",
  Xa = [
    { key: "op_time", label: { en: "Operation Time", "zh-TW": "操作時間" } },
    { key: "op_act", label: { en: "Operation Action", "zh-TW": "操作行為" } },
    { key: "op_id", label: { en: "Operator ID", "zh-TW": "操作者代號" } },
    { key: "op_name", label: { en: "Operator Name", "zh-TW": "操作者姓名" } },
  ],
  th = [
    { key: "name", label: { en: "Drug Name", "zh-TW": "藥名" } },
    { key: "code", label: { en: "Drug Code", "zh-TW": "藥碼" } },
    { key: "caseno", label: { en: "Admission Number", "zh-TW": "住院號" } },
    {
      key: "histno",
      label: { en: "Medical Record Number", "zh-TW": "病歷號" },
    },
    { key: "pnamec", label: { en: "Patient Name", "zh-TW": "病人姓名" } },
  ],
  tn = [
    {
      key: "index",
      label: { en: "No.", "zh-TW": "序號" },
      defaultVisible: !0,
      mandatory: !0,
      order: 0,
    },
    {
      key: "pharm",
      label: { en: "Pharmacy", "zh-TW": "藥局" },
      defaultVisible: !1,
      order: 1,
    },
    {
      key: "nurnum",
      label: { en: "Nursing Station", "zh-TW": "護理站" },
      defaultVisible: !0,
      mandatory: !0,
      order: 2,
    },
    {
      key: "bednum",
      label: { en: "Bed Number", "zh-TW": "床號" },
      defaultVisible: !0,
      mandatory: !0,
      order: 3,
    },
    {
      key: "pnamec",
      label: { en: "Patient Name", "zh-TW": "病人姓名" },
      defaultVisible: !0,
      mandatory: !0,
      order: 4,
    },
    {
      key: "caseno",
      label: { en: "Admission Number", "zh-TW": "住院號" },
      defaultVisible: !0,
      mandatory: !0,
      order: 5,
    },
    {
      key: "histno",
      label: { en: "Medical Record Number", "zh-TW": "病歷號" },
      defaultVisible: !0,
      mandatory: !0,
      order: 6,
    },
    {
      key: "status",
      label: { en: "Status", "zh-TW": "狀態" },
      defaultVisible: !0,
      mandatory: !0,
      order: 7,
    },
    {
      key: "dispens_status",
      label: { en: "Dispensing Status", "zh-TW": "調劑狀態" },
      defaultVisible: !0,
      mandatory: !0,
      order: 9,
    },
    {
      key: "check_status",
      label: { en: "Check Status", "zh-TW": "覆核狀態" },
      defaultVisible: !0,
      mandatory: !0,
      order: 10,
    },
    {
      key: "ordseq",
      label: { en: "Order Sequence", "zh-TW": "序號" },
      defaultVisible: !1,
      order: 11,
    },
    {
      key: "code",
      label: { en: "Drug Code", "zh-TW": "藥碼" },
      defaultVisible: !1,
      order: 12,
    },
    {
      key: "name",
      label: { en: "Drug Name (EN)", "zh-TW": "藥名" },
      defaultVisible: !0,
      mandatory: !0,
      width: "w-[300px] whitespace-normal",
      order: 13,
    },
    {
      key: "cht_name",
      label: { en: "Drug Name (ZH)", "zh-TW": "中文名" },
      defaultVisible: !1,
      order: 14,
    },
    {
      key: "qty",
      label: { en: "Quantity", "zh-TW": "數量" },
      defaultVisible: !0,
      mandatory: !0,
      order: 15,
    },
    {
      key: "update_time",
      label: { en: "Update Time", "zh-TW": "更新時間" },
      defaultVisible: !1,
      order: 16,
    },
    {
      key: "large",
      label: { en: "Large Bottle", "zh-TW": "大瓶藥" },
      defaultVisible: !1,
      order: 19,
    },
    {
      key: "self",
      label: { en: "Self-purchased", "zh-TW": "自購" },
      defaultVisible: !1,
      order: 21,
    },
    {
      key: "dosage",
      label: { en: "Dosage", "zh-TW": "劑量" },
      defaultVisible: !1,
      order: 22,
    },
    {
      key: "dunit",
      label: { en: "Unit", "zh-TW": "單位" },
      defaultVisible: !1,
      order: 23,
    },
    {
      key: "route",
      label: { en: "Route", "zh-TW": "途徑" },
      defaultVisible: !1,
      order: 24,
    },
    {
      key: "freqn",
      label: { en: "Frequency", "zh-TW": "頻次" },
      defaultVisible: !1,
      order: 25,
    },
    {
      key: "note",
      label: { en: "Remarks", "zh-TW": "備註" },
      defaultVisible: !1,
      order: 26,
    },
  ];
function nh() {
  const [e, t] = E.useState(null),
    [n, r] = E.useState("zh-TW"),
    [l, o] = E.useState(new Date().toISOString().split("T")[0]),
    [i, a] = E.useState("00:00"),
    [u, f] = E.useState(new Date().toISOString().split("T")[0]),
    [y, h] = E.useState("23:59"),
    [m, x] = E.useState("ORD_START"),
    [g, j] = E.useState("name"),
    [P, c] = E.useState(""),
    [d, p] = E.useState(""),
    [v, C] = E.useState(""),
    [z, D] = E.useState([]),
    [L, A] = E.useState([]),
    [M, ze] = E.useState(""),
    [ft, bt] = E.useState("asc"),
    [Dn, Nr] = E.useState([]),
    [Ge, Zt] = E.useState([]),
    [_, I] = E.useState(!1),
    [O, W] = E.useState(1),
    [J, Ke] = E.useState("1"),
    De = E.useRef(null),
    Jt = E.useRef(null),
    [qe, Rt] = E.useState(!1),
    [md, as] = E.useState(!1),
    [rh, hd] = E.useState([]),
    [yd, us] = E.useState(!1),
    [cs, ds] = E.useState([]),
    [gd, fs] = E.useState(!1),
    [vd, ps] = E.useState(!1),
    [jr, ms] = E.useState([]),
    [xd, hs] = E.useState(!1),
    [Gl, ys] = E.useState(!1),
    [gs, vs] = E.useState(!1),
    [wd, Cr] = E.useState(!0),
    [kd, xs] = E.useState(!1),
    [ws, Se] = E.useState(null),
    Ln = 25,
    { user: Mt, login: Sd, logout: Nd } = qm(),
    [jd, Kl] = E.useState(!Mt),
    [Ot, Cd] = E.useState("prescription"),
    [Er, ks] = E.useState([]),
    [Ed, Ss] = E.useState(!1),
    [Ns, js] = E.useState([]),
    [_d, Cs] = E.useState(!1),
    [Td, Es] = E.useState(!1),
    [qt, Pd] = E.useState(() => {
      const w = localStorage.getItem(Ya);
      if (w) {
        const k = new Set(JSON.parse(w));
        return (
          tn.forEach((S) => {
            S.mandatory && k.add(S.key);
          }),
          k
        );
      }
      return new Set(tn.filter((k) => k.defaultVisible).map((k) => k.key));
    });
  (E.useEffect(() => {
    Mt || Kl(!0);
  }, [Mt]),
    E.useEffect(() => {
      (async () => {
        try {
          const k = await Jm();
          t(k);
        } catch {
          Se("Failed to load configuration");
        }
      })();
    }, []),
    E.useEffect(() => {
      e &&
        (async () => {
          Cr(!0);
          try {
            (await zd(), await Dd());
            const k = new Date().toISOString().split("T")[0],
              S = `${k}T00:00:00`,
              R = `${k}T23:59:00`;
            await Ts(S, R);
          } finally {
            Cr(!1);
          }
        })();
    }, [e]),
    E.useEffect(() => {
      let w = Dn;
      if (
        (d && (w = w.filter((k) => k.pharm === d)),
        v && (w = w.filter((k) => k.nurnum === v)),
        P)
      ) {
        const k = P.toLowerCase();
        w = w.filter((S) => {
          const R = String(S[g] || "").toLowerCase();
          return R === k ? !0 : R.startsWith(k);
        });
      }
      (Zt(w), W(1), Ke("1"));
    }, [P, g, d, v, Dn]));
  const $e = (w) => {
      if (!e) throw new Error("Configuration not loaded");
      const k = e.domain.replace(/\/$/, ""),
        S = w.startsWith("/") ? w : `/${w}`;
      return `${k}${S}`;
    },
    et = (w) =>
      w.Code !== 200 ? (Se(w.Result || "An error occurred"), !1) : !0,
    zd = async () => {
      const w = $e("api/ServerSetting/get_serversetting_by_type"),
        k = { Data: {}, ValueAry: ["調劑台"] };
      try {
        const S = await fetch(w, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(k),
        });
        if (!S.ok) throw new Error("Failed to fetch dispensing stations");
        const R = await S.json();
        (tt({ url: w, method: "POST", payload: k, response: R }),
          et(R) && hd(R.Data));
      } catch (S) {
        (console.error("Error fetching dispensing stations:", S),
          Se("Failed to fetch dispensing stations"));
      }
    },
    Dd = async () => {
      const w = $e("api/medCarList/get_phar"),
        k = {};
      try {
        const S = await fetch(w, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(k),
        });
        if (!S.ok) throw new Error("Failed to fetch pharmacies");
        const R = await S.json();
        (tt({ url: w, method: "POST", payload: k, response: R }),
          et(R) && D(R.Data || []));
      } catch (S) {
        (console.error("Error fetching pharmacies:", S),
          Se("Failed to fetch pharmacies"));
      }
    },
    Ld = async (w) => {
      const k = $e("api/medCarList/get_medcar_by_phar"),
        S = { ValueAry: [w] };
      try {
        const R = await fetch(k, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(S),
        });
        if (!R.ok) throw new Error("Failed to fetch nursing stations");
        const $ = await R.json();
        (tt({ url: k, method: "POST", payload: S, response: $ }),
          et($) && A($.Data || []));
      } catch (R) {
        (console.error("Error fetching nursing stations:", R),
          Se("Failed to fetch nursing stations"));
      }
    },
    Rd = async (w) => {
      xs(!0);
      const k = $e("api/med_inventory/get_logtime_by_master_GUID");
      try {
        const S = { Data: {}, ValueAry: [w] },
          R = await fetch(k, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(S),
          });
        if (!R.ok) throw new Error("Failed to fetch transaction records");
        const $ = await R.json();
        (tt({ url: k, method: "POST", payload: S, response: $ }),
          et($) && (ds($.Data || []), us(!0)));
      } catch (S) {
        (console.error("Error fetching transaction records:", S),
          Se("Failed to fetch transaction records"));
      } finally {
        xs(!1);
      }
    },
    _s = async (w, k) => {
      Ss(!0);
      const S = $e("api/nearMiss/get_by_creat_time");
      try {
        const R = { ValueAry: [w, k] },
          $ = await fetch(S, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(R),
          });
        if (!$.ok) throw new Error("Failed to fetch near miss data");
        const ee = await $.json();
        (tt({ url: S, method: "POST", payload: R, response: ee }),
          et(ee) && ks(ee.Data || []));
      } catch (R) {
        (console.error("Error fetching near miss data:", R),
          Se("Failed to fetch near miss data"));
      } finally {
        Ss(!1);
      }
    },
    Md = async (w) => {
      const k = $e("api/med_cart/get_medCpoe_by_GUID");
      try {
        const S = { ValueAry: [w] },
          R = await fetch(k, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(S),
          });
        if (!R.ok) throw new Error("Failed to fetch detail");
        const $ = await R.json();
        (tt({ url: k, method: "POST", payload: S, response: $ }),
          et($) && (js($.Data || []), Cs(!0)));
      } catch (S) {
        (console.error("Error fetching detail:", S),
          Se("Failed to fetch prescription detail"));
      }
    },
    Ts = async (w, k) => {
      Cr(!0);
      const S = $e("api/med_cart/get_medCpoe_by_st_end");
      try {
        const R = { Data: {}, ValueAry: [w, k] },
          $ = await fetch(S, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(R),
          });
        if (!$.ok) throw new Error("Search failed");
        const ee = await $.json();
        (tt({ url: S, method: "POST", payload: R, response: ee }),
          et(ee) && (Nr(ee.Data), I(!0), W(1), Ke("1")));
      } catch (R) {
        (console.error("Search error:", R), Se("Search failed"));
      } finally {
        Cr(!1);
      }
    },
    Od = (w) => {
      Rd(w.GUID);
    },
    Id = async () => {
      ys(!0);
      const w = $e("api/med_cart/get_med_consumption");
      try {
        const k = { Data: Ge },
          S = await fetch(w, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(k),
          });
        if (!S.ok) throw new Error("Failed to fetch consumption report");
        const R = await S.json();
        (tt({ url: w, method: "POST", payload: k, response: R }),
          et(R) && (ms(R.Data || []), ps(!0)));
      } catch (k) {
        (console.error("Error fetching consumption report:", k),
          Se("Failed to fetch consumption report"));
      } finally {
        ys(!1);
      }
    },
    Fd = async () => {
      vs(!0);
      const w = $e("api/med_cart/download_med_consumption");
      try {
        const k = { Data: jr },
          S = await fetch(w, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(k),
          });
        if (!S.ok) throw new Error("Failed to export consumption report");
        const R = S.headers.get("content-type");
        if (
          R &&
          R.includes(
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          )
        ) {
          const $ = await S.blob(),
            ee = window.URL.createObjectURL($),
            Ne = document.createElement("a");
          ((Ne.href = ee),
            (Ne.download = `藥品消耗量報表_${new Date().toISOString().split("T")[0]}.xlsx`),
            document.body.appendChild(Ne),
            Ne.click(),
            document.body.removeChild(Ne),
            window.URL.revokeObjectURL(ee));
        } else {
          const $ = await S.json();
          (tt({ url: w, method: "POST", payload: k, response: $ }),
            et($) && console.log("Export completed successfully"));
        }
      } catch (k) {
        (console.error("Error exporting consumption report:", k),
          Se("Failed to export consumption report"));
      } finally {
        vs(!1);
      }
    },
    $d = () => {
      (fs(!0),
        setTimeout(() => {
          (us(!1), fs(!1), ds([]));
        }, 300));
    },
    Ud = () => {
      (Es(!0),
        setTimeout(() => {
          (Cs(!1), Es(!1), js([]));
        }, 300));
    },
    Vd = () => {
      if (!yd) return null;
      const w = gd ? "modalRollUp" : "modalRollDown";
      return s.jsx("div", {
        className:
          "fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50",
        children: s.jsxs("div", {
          className:
            "bg-white rounded-lg shadow-lg p-6 max-w-[90vw] w-full mx-4 max-h-[80vh] overflow-y-auto mt-16",
          style: { animation: `${w} 0.3s ease-out forwards` },
          children: [
            s.jsxs("div", {
              className: "flex justify-between items-center mb-6",
              children: [
                s.jsx("h2", {
                  className: "text-2xl font-bold text-gray-900",
                  children: n === "en" ? "Dispensing Records" : "調劑紀錄",
                }),
                s.jsx("button", {
                  onClick: $d,
                  className: "text-gray-700 hover:text-gray-900",
                  children: s.jsx(Qn, { className: "w-6 h-6" }),
                }),
              ],
            }),
            s.jsx("div", {
              className: "overflow-x-auto",
              children:
                cs.length > 0
                  ? s.jsxs("table", {
                      className: "min-w-full divide-y divide-gray-200",
                      children: [
                        s.jsx("thead", {
                          className: "bg-gray-50",
                          children: s.jsx("tr", {
                            children: Xa.map((k) =>
                              s.jsx(
                                "th",
                                {
                                  scope: "col",
                                  className: `px-4 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-50 transition-colors duration-150 ${k.width || ""}`,
                                  children: k.label[n],
                                },
                                k.key,
                              ),
                            ),
                          }),
                        }),
                        s.jsx("tbody", {
                          className: "bg-white divide-y divide-gray-200",
                          children: cs.map((k) =>
                            s.jsx(
                              "tr",
                              {
                                className: "hover:bg-gray-50",
                                children: Xa.map((S) =>
                                  s.jsx(
                                    "td",
                                    {
                                      className: `px-4 py-3 text-base text-gray-900 ${S.width || "truncate"}`,
                                      children: k[S.key],
                                    },
                                    S.key,
                                  ),
                                ),
                              },
                              k.GUID,
                            ),
                          ),
                        }),
                      ],
                    })
                  : s.jsx("div", {
                      className:
                        "flex flex-col items-center justify-center py-12 text-gray-700",
                      children: s.jsx("p", {
                        className: "text-xl",
                        children:
                          n === "en" ? "No Dispensing Records" : "無調劑紀錄",
                      }),
                    }),
            }),
          ],
        }),
      });
    },
    Ad = () => {
      if (!vd) return null;
      const w = xd ? "modalRollUp" : "modalRollDown";
      return s.jsx("div", {
        className:
          "fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50",
        children: s.jsxs("div", {
          className:
            "bg-white rounded-lg shadow-lg p-6 max-w-[90vw] w-full mx-4 max-h-[80vh] overflow-y-auto mt-16",
          style: { animation: `${w} 0.3s ease-out forwards` },
          children: [
            s.jsx("div", {
              className: "flex justify-between items-center mb-6",
              children: s.jsxs("div", {
                className: "flex items-center justify-between w-full",
                children: [
                  s.jsx("h2", {
                    className: "text-2xl font-bold text-gray-900",
                    children:
                      n === "en"
                        ? "Medication Consumption Report"
                        : "藥品消耗量",
                  }),
                  s.jsxs("div", {
                    className: "flex items-center space-x-3",
                    children: [
                      s.jsxs("button", {
                        onClick: Fd,
                        disabled: jr.length === 0 || gs,
                        className:
                          "inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                        children: [
                          gs
                            ? s.jsx(Pl, {
                                className: "h-5 w-5 mr-2 animate-spin",
                              })
                            : s.jsx(fd, { className: "h-5 w-5 mr-2" }),
                          n === "en" ? "Export" : "匯出",
                        ],
                      }),
                      s.jsx("button", {
                        onClick: Yd,
                        className: "text-gray-700 hover:text-gray-900",
                        children: s.jsx(Qn, { className: "w-6 h-6" }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            s.jsx("div", {
              className: "overflow-x-auto",
              children:
                jr.length > 0
                  ? s.jsxs("table", {
                      className: "min-w-full divide-y divide-gray-200",
                      children: [
                        s.jsx("thead", {
                          className: "bg-gray-50",
                          children: s.jsxs("tr", {
                            children: [
                              s.jsx("th", {
                                scope: "col",
                                className:
                                  "px-4 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider",
                                children: n === "en" ? "Drug Code" : "藥碼",
                              }),
                              s.jsx("th", {
                                scope: "col",
                                className:
                                  "px-4 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider",
                                children: n === "en" ? "Drug Name" : "藥名",
                              }),
                              s.jsx("th", {
                                scope: "col",
                                className:
                                  "px-4 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider",
                                children:
                                  n === "en" ? "Chinese Name" : "中文名",
                              }),
                              s.jsx("th", {
                                scope: "col",
                                className:
                                  "px-4 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider",
                                children: n === "en" ? "Quantity" : "數量",
                              }),
                            ],
                          }),
                        }),
                        s.jsx("tbody", {
                          className: "bg-white divide-y divide-gray-200",
                          children: jr.map((k, S) =>
                            s.jsxs(
                              "tr",
                              {
                                className: "hover:bg-gray-50",
                                children: [
                                  s.jsx("td", {
                                    className:
                                      "px-4 py-3 text-base text-gray-900",
                                    children: k.code,
                                  }),
                                  s.jsx("td", {
                                    className:
                                      "px-4 py-3 text-base text-gray-900 w-[300px] whitespace-normal",
                                    children: k.name,
                                  }),
                                  s.jsx("td", {
                                    className:
                                      "px-4 py-3 text-base text-gray-900 w-[300px] whitespace-normal",
                                    children: k.cht_name,
                                  }),
                                  s.jsx("td", {
                                    className:
                                      "px-4 py-3 text-base text-gray-900",
                                    children: k.qty,
                                  }),
                                ],
                              },
                              `${k.code}-${S}`,
                            ),
                          ),
                        }),
                      ],
                    })
                  : s.jsx("div", {
                      className:
                        "flex flex-col items-center justify-center py-12 text-gray-700",
                      children: s.jsx("p", {
                        className: "text-xl",
                        children:
                          n === "en" ? "No Consumption Data" : "無消耗量資料",
                      }),
                    }),
            }),
          ],
        }),
      });
    },
    Wd = () => {
      if (!_d) return null;
      const w = Td ? "modalRollUp" : "modalRollDown",
        k = Ns.flatMap((S) => S.med_inve_log || []);
      return s.jsx("div", {
        className:
          "fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50",
        children: s.jsxs("div", {
          className:
            "bg-white rounded-lg shadow-lg p-6 max-w-[95vw] w-full mx-4 max-h-[85vh] overflow-y-auto mt-16",
          style: { animation: `${w} 0.3s ease-out forwards` },
          children: [
            s.jsxs("div", {
              className: "flex justify-between items-center mb-6",
              children: [
                s.jsx("h2", {
                  className: "text-2xl font-bold text-gray-900",
                  children: n === "en" ? "Prescription Detail" : "處方明細",
                }),
                s.jsx("button", {
                  onClick: Ud,
                  className: "text-gray-700 hover:text-gray-900",
                  children: s.jsx(Qn, { className: "w-6 h-6" }),
                }),
              ],
            }),
            s.jsx("div", {
              className: "overflow-x-auto mb-6",
              children: s.jsx(Ka, {
                data: Ns,
                language: n,
                visibleColumns: qt,
                columns: tn,
                onRowClick: () => {},
              }),
            }),
            k.length > 0 &&
              s.jsxs("div", {
                className: "border-t pt-6",
                children: [
                  s.jsx("h3", {
                    className: "text-xl font-bold text-gray-900 mb-4",
                    children: n === "en" ? "Dispensing Records" : "調劑紀錄",
                  }),
                  s.jsx("div", {
                    className: "overflow-x-auto",
                    children: s.jsxs("table", {
                      className: "min-w-full divide-y divide-gray-200",
                      children: [
                        s.jsx("thead", {
                          className: "bg-gray-50",
                          children: s.jsxs("tr", {
                            children: [
                              s.jsx("th", {
                                scope: "col",
                                className:
                                  "px-4 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider",
                                children:
                                  n === "en" ? "Operation Time" : "操作時間",
                              }),
                              s.jsx("th", {
                                scope: "col",
                                className:
                                  "px-4 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider",
                                children:
                                  n === "en" ? "Operation Action" : "操作行為",
                              }),
                              s.jsx("th", {
                                scope: "col",
                                className:
                                  "px-4 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider",
                                children:
                                  n === "en" ? "Operator ID" : "操作者代號",
                              }),
                              s.jsx("th", {
                                scope: "col",
                                className:
                                  "px-4 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider",
                                children:
                                  n === "en" ? "Operator Name" : "操作者姓名",
                              }),
                              s.jsx("th", {
                                scope: "col",
                                className:
                                  "px-4 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider",
                                children: n === "en" ? "Drug Code" : "藥碼",
                              }),
                              s.jsx("th", {
                                scope: "col",
                                className:
                                  "px-4 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider",
                                children: n === "en" ? "Drug Name" : "藥名",
                              }),
                              s.jsx("th", {
                                scope: "col",
                                className:
                                  "px-4 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider",
                                children: n === "en" ? "Quantity" : "數量",
                              }),
                            ],
                          }),
                        }),
                        s.jsx("tbody", {
                          className: "bg-white divide-y divide-gray-200",
                          children: k.map((S) =>
                            s.jsxs(
                              "tr",
                              {
                                className: "hover:bg-gray-50",
                                children: [
                                  s.jsx("td", {
                                    className:
                                      "px-4 py-3 text-base text-gray-900",
                                    children: S.op_time,
                                  }),
                                  s.jsx("td", {
                                    className:
                                      "px-4 py-3 text-base text-gray-900",
                                    children: S.op_act,
                                  }),
                                  s.jsx("td", {
                                    className:
                                      "px-4 py-3 text-base text-gray-900",
                                    children: S.op_id,
                                  }),
                                  s.jsx("td", {
                                    className:
                                      "px-4 py-3 text-base text-gray-900",
                                    children: S.op_name,
                                  }),
                                  s.jsx("td", {
                                    className:
                                      "px-4 py-3 text-base text-gray-900",
                                    children: S.code,
                                  }),
                                  s.jsx("td", {
                                    className:
                                      "px-4 py-3 text-base text-gray-900 w-[300px] whitespace-normal",
                                    children: S.name,
                                  }),
                                  s.jsx("td", {
                                    className:
                                      "px-4 py-3 text-base text-gray-900",
                                    children: S.qty,
                                  }),
                                ],
                              },
                              S.GUID,
                            ),
                          ),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
          ],
        }),
      });
    },
    Bd = () => {
      var S;
      const w = `${l}T${i}:00`,
        k = `${u}T${y}:00`;
      (Ot === "prescription" ? Ts(w, k) : _s(w, k),
        (S = Jt.current) == null || S.collapse());
    },
    Hd = () => {
      const w = new Date().toISOString().split("T")[0];
      (o(w),
        a("00:00"),
        f(w),
        h("23:59"),
        c(""),
        p(""),
        C(""),
        A([]),
        x("starttm"),
        I(!1),
        Nr([]),
        Zt([]),
        ks([]));
    },
    Ps = (w) => {
      if ((Cd(w), w === "nearMiss" && Er.length === 0 && l && u)) {
        const k = `${l}T${i}:00`,
          S = `${u}T${y}:00`;
        _s(k, S);
      }
    },
    Qd = (w) => {
      (p(w), C(""), A([]), w && Ld(w));
    },
    Gd = (w) => {
      C(w);
    },
    Kd = (w) =>
      M
        ? [...w].sort((k, S) => {
            const R = k[M],
              $ = S[M];
            if (typeof R == "number" && typeof $ == "number")
              return ft === "asc" ? R - $ : $ - R;
            const ee = String(R).toLowerCase(),
              Ne = String($).toLowerCase();
            return ft === "asc" ? ee.localeCompare(Ne) : Ne.localeCompare(ee);
          })
        : w,
    Yd = () => {
      (hs(!0),
        setTimeout(() => {
          (ps(!1), hs(!1), ms([]));
        }, 300));
    },
    Xd = (w) => {
      const k = new Map(),
        S = [];
      return (
        w.forEach((R) => {
          const $ = `${R.nurnum}-${R.bednum}-${R.histno}`;
          (k.has($) || (k.set($, []), S.push($)), k.get($).push(R));
        }),
        S.flatMap((R) => k.get(R))
      );
    },
    bd = Kd(Ge),
    zs = Xd(bd),
    Ds = new Set();
  zs.forEach((w) => {
    Ds.add(`${w.nurnum}-${w.bednum}-${w.histno}`);
  });
  const Yl = Ds.size,
    _r = Math.ceil(Yl / Ln),
    Ls = (() => {
      const w = new Map(),
        k = [];
      zs.forEach((ee) => {
        const Ne = `${ee.nurnum}-${ee.bednum}-${ee.histno}`;
        (w.has(Ne) || (w.set(Ne, []), k.push(Ne)), w.get(Ne).push(ee));
      });
      const S = (O - 1) * Ln,
        R = S + Ln;
      return k.slice(S, R).flatMap((ee) => w.get(ee));
    })(),
    Rs = (w) => {
      const k = parseInt(w);
      return !isNaN(k) && k >= 1 && k <= _r;
    },
    Ms = (w) => {
      if (w >= 1 && w <= _r) {
        const k = window.scrollY;
        (W(w), Ke(w.toString()), window.scrollTo(0, k));
      }
    },
    Zd = (w) => {
      const k = w.target.value;
      if ((Ke(k), Rs(k))) {
        const S = parseInt(k),
          R = window.scrollY,
          $ = w.target.selectionStart;
        (W(S),
          requestAnimationFrame(() => {
            De.current &&
              (De.current.focus(),
              De.current.setSelectionRange($, $),
              window.scrollTo(0, R));
          }));
      }
    },
    Jd = () => {
      Rs(J) || Ke(O.toString());
    },
    qd = (w) => {
      const k = tn.find((R) => R.key === w);
      if (k != null && k.mandatory) return;
      const S = new Set(qt);
      (S.has(w) ? S.delete(w) : S.add(w),
        Pd(S),
        localStorage.setItem(Ya, JSON.stringify(Array.from(S))));
    },
    ef = () => {
      (as(!0),
        setTimeout(() => {
          (Rt(!1), as(!1));
        }, 300));
    },
    tf = () => {
      (Nd(), Kl(!0));
    },
    nf = () => {
      if (!qe) return null;
      const w = tn
          .filter((S) => !S.mandatory)
          .sort((S, R) => S.order - R.order),
        k = md ? "modalRollUp" : "modalRollDown";
      return s.jsx("div", {
        className:
          "fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50",
        children: s.jsxs("div", {
          className:
            "bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto mt-16",
          style: { animation: `${k} 0.3s ease-out forwards` },
          children: [
            s.jsx("style", {
              children: `
            @keyframes modalRollDown {
              from { transform: scaleY(0); transform-origin: top; }
              to { transform: scaleY(1); transform-origin: top; }
            }
            @keyframes modalRollUp {
              from { transform: scaleY(1); transform-origin: top; }
              to { transform: scaleY(0); transform-origin: top; }
            }
          `,
            }),
            s.jsxs("div", {
              className: "flex justify-between items-center mb-6",
              children: [
                s.jsx("h2", {
                  className: "text-2xl font-bold text-gray-900",
                  children:
                    n === "en" ? "Table Column Settings" : "表格欄位設定",
                }),
                s.jsx("button", {
                  onClick: ef,
                  className: "text-gray-700 hover:text-gray-900",
                  children: s.jsx(Qn, { className: "w-6 h-6" }),
                }),
              ],
            }),
            s.jsx("div", {
              className: "grid grid-cols-2 gap-4",
              children: w.map((S) =>
                s.jsxs(
                  "label",
                  {
                    className:
                      "flex items-center justify-between p-3 rounded hover:bg-gray-50",
                    children: [
                      s.jsx("span", {
                        className: "text-gray-900",
                        children: S.label[n],
                      }),
                      s.jsxs("div", {
                        className: "relative inline-block w-12 h-6",
                        children: [
                          s.jsx("input", {
                            type: "checkbox",
                            checked: qt.has(S.key),
                            onChange: () => qd(S.key),
                            className: "sr-only",
                          }),
                          s.jsx("div", {
                            className: `w-12 h-6 rounded-full ${qt.has(S.key) ? "bg-blue-600" : "bg-gray-200"}`,
                            children: s.jsx("div", {
                              className: `absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full ${qt.has(S.key) ? "translate-x-6" : "translate-x-0"}`,
                            }),
                          }),
                        ],
                      }),
                    ],
                  },
                  S.key,
                ),
              ),
            }),
          ],
        }),
      });
    },
    rf = () =>
      s.jsxs("div", {
        className:
          "bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center justify-between",
        children: [
          s.jsx("div", {
            className: "flex items-center text-sm text-gray-600",
            children:
              n === "en"
                ? `Total ${Yl} groups (${Ge.length} records)`
                : `共 ${Yl} 組 (${Ge.length} 筆資料)`,
          }),
          s.jsxs("div", {
            className: "flex items-center space-x-4",
            children: [
              s.jsxs("button", {
                onClick: Id,
                disabled: Ge.length === 0 || Gl,
                className:
                  "inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                children: [
                  Gl
                    ? s.jsx(Pl, { className: "h-5 w-5 mr-2 animate-spin" })
                    : s.jsx(Im, { className: "h-5 w-5 mr-2" }),
                  n === "en" ? "Consumption Report" : "藥品消耗量報表",
                ],
              }),
              s.jsxs("div", {
                className: "flex items-center space-x-2",
                children: [
                  s.jsx("button", {
                    onClick: () => Ms(O - 1),
                    className:
                      O == 1
                        ? "inline-flex items-center px-3 py-1 border text-base font-medium rounded-lg border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed"
                        : "inline-flex items-center px-3 py-1 border text-base font-medium rounded-lg border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
                    children: n === "en" ? "Previous" : "上一頁",
                  }),
                  s.jsxs("div", {
                    className: "flex items-center space-x-1",
                    children: [
                      s.jsx("input", {
                        ref: De,
                        type: "text",
                        value: J,
                        onChange: Zd,
                        onBlur: Jd,
                        className:
                          "w-12 px-2 py-1 text-sm text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",
                      }),
                      s.jsxs("span", {
                        className: "text-sm text-gray-700",
                        children: [" / ", _r],
                      }),
                    ],
                  }),
                  s.jsx("button", {
                    onClick: () => Ms(O + 1),
                    className:
                      O === _r
                        ? "inline-flex items-center px-3 py-1 border text-base font-medium rounded-lg border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed"
                        : "inline-flex items-center px-3 py-1 border text-base font-medium rounded-lg border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
                    children: n === "en" ? "Next" : "下一頁",
                  }),
                ],
              }),
            ],
          }),
        ],
      });
  return s.jsxs("div", {
    className: "min-h-screen bg-white flex flex-col pb-8 w-full p-4",
    children: [
      (!e || wd) &&
        s.jsx(Qr, { message: n === "en" ? "Loading..." : "載入中..." }),
      kd &&
        s.jsx(Qr, {
          message:
            n === "en" ? "Loading dispensing records..." : "載入調劑紀錄中...",
        }),
      Gl &&
        s.jsx(Qr, {
          message:
            n === "en"
              ? "Loading consumption report..."
              : "載入消耗量報表中...",
        }),
      Ed &&
        s.jsx(Qr, {
          message:
            n === "en"
              ? "Loading near miss records..."
              : "載入調劑錯誤記錄中...",
        }),
      ws && s.jsx(Ym, { message: ws, onClose: () => Se(null) }),
      jd &&
        e &&
        s.jsx(eh, {
          onLogin: (w) => {
            (Sd(w), Kl(!1));
          },
          language: n,
          getApiUrl: $e,
        }),
      s.jsx("nav", {
        className: "bg-transparent",
        children: s.jsx("div", {
          className: "w-full px-4 py-4",
          children: s.jsxs("div", {
            className: "flex justify-between items-center",
            children: [
              s.jsxs("div", {
                className: "flex items-center space-x-4",
                children: [
                  s.jsx("a", {
                    href: e ? `${e.homepage}/phar_system/frontpage/` : "#",
                    className:
                      "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors",
                    children: s.jsx(Ga, { className: "w-7 h-7" }),
                  }),
                  s.jsxs("div", {
                    children: [
                      s.jsx("h1", {
                        className:
                          "text-2xl md:text-3xl font-semibold text-gray-800",
                        children:
                          n === "en"
                            ? "Inpatient Medical Order Records"
                            : "住院醫令紀錄查詢",
                      }),
                      Mt &&
                        s.jsxs("p", {
                          className: "text-base text-gray-600 mt-1",
                          children: [Mt.Name, " - ", Mt.Employer],
                        }),
                    ],
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "flex items-center space-x-3",
                children: [
                  s.jsxs("button", {
                    onClick: () => Rt(!0),
                    className:
                      "inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors",
                    children: [
                      s.jsx(Am, { className: "h-5 w-5 mr-2" }),
                      n === "en" ? "Field Display" : "欄位顯示",
                    ],
                  }),
                  s.jsxs("button", {
                    onClick: () => r(n === "en" ? "zh-TW" : "en"),
                    className:
                      "inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors",
                    children: [
                      s.jsx(Hm, { className: "h-5 w-5 mr-2" }),
                      n === "en" ? "English" : "繁體中文",
                    ],
                  }),
                  Mt &&
                    s.jsxs("button", {
                      onClick: tf,
                      className:
                        "inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors",
                      children: [
                        s.jsx(Qm, { className: "h-5 w-5 mr-2" }),
                        n === "en" ? "Logout" : "登出",
                      ],
                    }),
                ],
              }),
            ],
          }),
        }),
      }),
      s.jsx("div", {
        className: "flex-grow py-6",
        children: s.jsxs("div", {
          className: "w-full px-4",
          children: [
            s.jsxs("div", {
              className: "space-y-4 mb-6",
              children: [
                s.jsx(pd, {
                  ref: Jt,
                  language: n,
                  startDate: l,
                  startTime: i,
                  endDate: u,
                  endTime: y,
                  timeType: m,
                  onStartDateChange: o,
                  onStartTimeChange: a,
                  onEndDateChange: f,
                  onEndTimeChange: h,
                  onTimeTypeChange: x,
                }),
                Ot === "prescription" &&
                  s.jsx(Xm, {
                    language: n,
                    searchField: g,
                    searchValue: P,
                    selectedPharmacy: d,
                    selectedNursingStation: v,
                    pharmacies: z,
                    nursingStations: L,
                    onSearchFieldChange: j,
                    onSearchValueChange: c,
                    onPharmacyChange: Qd,
                    onNursingStationChange: Gd,
                    onSearch: Bd,
                    onReset: Hd,
                    searchFields: th,
                    recordsPerPage: Ln,
                    data: Ge,
                  }),
                s.jsx("div", {
                  className:
                    "bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden p-2",
                  children: s.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      s.jsxs("button", {
                        onClick: () => Ps("prescription"),
                        className: `flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${Ot === "prescription" ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                        children: [
                          s.jsx(Ga, { className: "w-5 h-5" }),
                          n === "en" ? "Prescription Records" : "處方記錄",
                        ],
                      }),
                      s.jsxs("button", {
                        onClick: () => Ps("nearMiss"),
                        className: `flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${Ot === "nearMiss" ? "bg-red-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                        children: [
                          s.jsx(Bm, { className: "w-5 h-5" }),
                          n === "en" ? "Near Miss Records" : "調劑錯誤記錄",
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            Ot === "prescription" &&
              _ &&
              s.jsxs("div", {
                className:
                  "bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden",
                children: [
                  s.jsx(rf, {}),
                  Ls.length > 0
                    ? s.jsx("div", {
                        className: "p-4",
                        children: s.jsx(Ka, {
                          data: Ls,
                          language: n,
                          onRecordClick: Od,
                          visibleColumns: qt,
                          columns: tn,
                        }),
                      })
                    : s.jsx("div", {
                        className: "p-12",
                        children: s.jsxs("div", {
                          className:
                            "flex flex-col items-center justify-center text-gray-400",
                          children: [
                            s.jsx(Qa, { className: "w-12 h-12 mb-4" }),
                            s.jsx("p", {
                              className: "text-sm text-gray-500",
                              children:
                                n === "en" ? "No data available" : "無資料",
                            }),
                          ],
                        }),
                      }),
                ],
              }),
            Ot === "nearMiss" &&
              Er.length > 0 &&
              s.jsx("div", {
                className:
                  "bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden",
                children: s.jsx(Zm, {
                  data: Er,
                  language: n,
                  onViewDetail: Md,
                  recordsPerPage: Ln,
                  startDateTime: `${l} ${i}:00`,
                  endDateTime: `${u} ${y}:00`,
                  getApiUrl: $e,
                  onError: Se,
                }),
              }),
            Ot === "nearMiss" &&
              Er.length === 0 &&
              _ &&
              s.jsx("div", {
                className:
                  "bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden",
                children: s.jsx("div", {
                  className: "p-12",
                  children: s.jsxs("div", {
                    className:
                      "flex flex-col items-center justify-center text-gray-400",
                    children: [
                      s.jsx(Qa, { className: "w-12 h-12 mb-4" }),
                      s.jsx("p", {
                        className: "text-sm text-gray-500",
                        children:
                          n === "en"
                            ? "No near miss records found"
                            : "查無調劑錯誤記錄",
                      }),
                    ],
                  }),
                }),
              }),
          ],
        }),
      }),
      s.jsx("footer", {
        className: "bg-white shadow-sm border-t fixed bottom-0 left-0 right-0",
        children: s.jsx("div", {
          className: "w-full py-1 px-4 text-center text-gray-700 text-sm",
          children: "Copyright ©2025 鴻森智能科技",
        }),
      }),
      s.jsx(nf, {}),
      s.jsx(Vd, {}),
      s.jsx(Ad, {}),
      s.jsx(Wd, {}),
    ],
  });
}
ad(document.getElementById("root")).render(
  s.jsx(E.StrictMode, { children: s.jsx(nh, {}) }),
);
