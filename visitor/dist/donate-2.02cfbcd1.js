parcelRequire = (function(e, r, n, t) {
  var i = "function" == typeof parcelRequire && parcelRequire,
    o = "function" == typeof require && require;
  function u(n, t) {
    if (!r[n]) {
      if (!e[n]) {
        var f = "function" == typeof parcelRequire && parcelRequire;
        if (!t && f) return f(n, !0);
        if (i) return i(n, !0);
        if (o && "string" == typeof n) return o(n);
        var c = new Error("Cannot find module '" + n + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      p.resolve = function(r) {
        return e[n][1][r] || r;
      };
      var l = (r[n] = new u.Module(n));
      e[n][0].call(l.exports, p, l, l.exports, this);
    }
    return r[n].exports;
    function p(e) {
      return u(p.resolve(e));
    }
  }
  (u.isParcelRequire = !0),
    (u.Module = function(e) {
      (this.id = e), (this.bundle = u), (this.exports = {});
    }),
    (u.modules = e),
    (u.cache = r),
    (u.parent = i),
    (u.register = function(r, n) {
      e[r] = [
        function(e, r) {
          r.exports = n;
        },
        {}
      ];
    });
  for (var f = 0; f < n.length; f++) u(n[f]);
  if (n.length) {
    var c = u(n[n.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = c)
      : "function" == typeof define && define.amd
      ? define(function() {
          return c;
        })
      : t && (this[t] = c);
  }
  return u;
})(
  {
    PAQK: [
      function(require, module, exports) {
        var e = {
          apiKey: "AIzaSyBrTXlPTks8CPKRbZBSDnTXpPaotL4Wpwg",
          authDomain: "polyeco-eda86.firebaseapp.com",
          databaseURL: "https://polyeco-eda86.firebaseio.com",
          projectId: "polyeco-eda86",
          storageBucket: "polyeco-eda86.appspot.com",
          messagingSenderId: "86781747630"
        };
        firebase.initializeApp(e);
        var t = firebase.firestore();
        t.settings({ timestampsInSnapshots: !0 });
        var a = document.querySelector("#step-2 input[name='name']"),
          o = document.querySelector("#step-2 input[name='email']"),
          n = document.querySelector("#step-2 input[name='cardname']"),
          r = document.querySelector("#step-2 input[name='cardnumber']"),
          c = document.querySelector("#step-2 input[name='cardmonth']"),
          s = document.querySelector("#step-2 input[name='cardyear']"),
          i = document.querySelector("#step-2 input[name='cvv']"),
          u = document.querySelector(".submit"),
          m = document.querySelector("form .submit"),
          l = document.querySelector("#step-2 #paymentForm"),
          d = document.querySelector("form .error-message"),
          p = document.querySelector("form .checking"),
          y = document.querySelector("form .submit .container");
        function v(e) {
          e.preventDefault(),
            (d.innerHTML = ""),
            m.classList.add("move-up"),
            p.classList.add("active"),
            setTimeout(h, 1e3);
        }
        function h() {
          var e = [];
          validator.isByteLength(a.value, { min: 3 }) ||
            (!1, e.push("- Name has to be at least 3 characters")),
            validator.isEmail(o.value) || (!1, e.push("- Invalid email")),
            validator.isNumeric(n.value, { min: 16 }) ||
              (!1, e.push("- Card number has to be 16 characters")),
            validator.isNumeric(c.value, { min: 2 }) ||
              (!1,
              e.push("- Please specify the month by two numeric characters")),
            validator.isNumeric(s.value, { min: 4 }) ||
              (!1, e.push("- Please specify the exact year of expiration")),
            validator.isNumeric(i.value, { min: 3 }) ||
              (!1, e.push("- CVV has to be 3 characters")),
            !0 ? b() : (S(), console.log(e), (d.innerHTML = e.join("<br>")));
        }
        function f() {
          y.classList.add("send"), p.classList.add("send");
        }
        function S() {
          m.classList.remove("move-up"), p.classList.remove("active");
        }
        function b() {
          console.log("RUUN");
          var e = JSON.parse(sessionStorage.getItem("step1Data")),
            n = document.querySelector("#step-2 #subcheckbox").checked
              ? "Anonymous"
              : a.value,
            r = +new Date(),
            c = moment().format("DD/MM/YYYY");
          t.collection("donations")
            .add({
              date: c,
              name: n,
              email: o.value,
              amount: e.amount,
              currency: e.currency,
              type: e.type,
              timestamp: r
            })
            .then(function(e) {
              (window.location = "step-3.html"),
                console.log("Document written with ID: ", e.id);
            })
            .catch(function(e) {
              console.error("Error adding document: ", e);
            });
        }
        l.addEventListener("submit", v);
      },
      {}
    ]
  },
  {},
  ["PAQK"],
  null
);
//# sourceMappingURL=donate-2.02cfbcd1.map
