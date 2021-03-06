(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  [
    ,
    function(e, t, n) {
      e.exports = {
        BreadBottom: "BurgerIngredient_BreadBottom__3qAGC",
        BreadTop: "BurgerIngredient_BreadTop__1tII-",
        Seeds1: "BurgerIngredient_Seeds1__3Xp_i",
        Seeds2: "BurgerIngredient_Seeds2__W7CBw",
        Meat: "BurgerIngredient_Meat__1syVU",
        Cheese: "BurgerIngredient_Cheese__y3hfF",
        Salad: "BurgerIngredient_Salad__2Z1yE",
        Bacon: "BurgerIngredient_Bacon__nP9UP"
      };
    },
    function(e, t, n) {
      e.exports = {
        BuildControl: "BuildControl_BuildControl__3FZQ8",
        Label: "BuildControl_Label__3tKEX",
        Less: "BuildControl_Less__3TbjD",
        More: "BuildControl_More__35n-C"
      };
    },
    ,
    ,
    ,
    ,
    ,
    function(e, t, n) {
      e.exports = {
        SideDrawer: "SideDrawer_SideDrawer__3Yv3I",
        Open: "SideDrawer_Open__3wZQj",
        Close: "SideDrawer_Close__3Plbp"
      };
    },
    function(e, t, n) {
      e.exports = {
        Button: "Button_Button__2zeGs",
        Success: "Button_Success__3EgOl",
        Danger: "Button_Danger__3i_hm"
      };
    },
    ,
    function(e, t, n) {
      e.exports = {
        Toolbar: "Toolbar_Toolbar__1Q-8L",
        DesktopOnly: "Toolbar_DesktopOnly__2nShd"
      };
    },
    function(e, t, n) {
      e.exports = {
        NavigationItem: "NavigationItem_NavigationItem__CY_sm",
        active: "NavigationItem_active__2qJ_P"
      };
    },
    function(e, t, n) {
      e.exports = {
        BuildControls: "BuildControls_BuildControls__3wNQ0",
        OrderButton: "BuildControls_OrderButton__2tSAi",
        enable: "BuildControls_enable__1B9WH"
      };
    },
    ,
    ,
    function(e, t, n) {
      e.exports = { Content: "Layout_Content__2XLi2" };
    },
    function(e, t, n) {
      e.exports = { Logo: "Logo_Logo__1DeCp" };
    },
    function(e, t, n) {
      e.exports = n.p + "burger/static/media/burger-logo.b8503d26.png";
    },
    function(e, t, n) {
      e.exports = { NavigationItems: "NavigationItems_NavigationItems__2ozwa" };
    },
    function(e, t, n) {
      e.exports = { Menu: "DrawerToggle_Menu__qSWlt" };
    },
    function(e, t, n) {
      e.exports = { Dash: "ToggleDash_Dash__1DdRp" };
    },
    function(e, t, n) {
      e.exports = { Backdrop: "Backdrop_Backdrop__3yRfh" };
    },
    function(e, t, n) {
      e.exports = { Burger: "Burger_Burger__4s0Go" };
    },
    function(e, t, n) {
      e.exports = { Modal: "Modal_Modal__2JOml" };
    },
    ,
    function(e, t, n) {
      e.exports = n(33);
    },
    ,
    ,
    ,
    ,
    ,
    function(e, t, n) {},
    function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        r = n.n(a),
        o = n(15),
        l = n.n(o),
        c = (n(32), n(3)),
        i = n(4),
        s = n(6),
        u = n(5),
        d = n(7),
        m = n(25),
        _ = n(16),
        g = n.n(_),
        p = n(11),
        E = n.n(p),
        h = n(17),
        f = n.n(h),
        B = n(18),
        b = n.n(B),
        v = function(e) {
          return r.a.createElement(
            "div",
            {
              className: f.a.Logo,
              style: { height: e.height, marginBottom: e.marginBottom }
            },
            r.a.createElement("img", { src: b.a, alt: "Burger Builder" })
          );
        },
        w = n(19),
        k = n.n(w),
        C = n(12),
        N = n.n(C),
        O = function(e) {
          return r.a.createElement(
            "li",
            { className: N.a.NavigationItem },
            r.a.createElement(
              "a",
              { href: e.link, className: e.active ? N.a.active : null },
              e.children
            )
          );
        },
        S = function(e) {
          return r.a.createElement(
            "ul",
            { className: k.a.NavigationItems },
            r.a.createElement(O, { link: "/", active: !0 }, "Burger Builder"),
            r.a.createElement(O, { link: "/" }, " Checkout ")
          );
        },
        y = n(20),
        D = n.n(y),
        M = n(21),
        j = n.n(M),
        I = function(e) {
          return r.a.createElement("div", { className: j.a.Dash });
        },
        x = function(e) {
          return r.a.createElement(
            "div",
            { className: D.a.Menu, onClick: e.clicked },
            r.a.createElement(I, null),
            r.a.createElement(I, null),
            r.a.createElement(I, null)
          );
        },
        L = function(e) {
          return r.a.createElement(
            "div",
            { className: E.a.Toolbar },
            r.a.createElement(x, { clicked: e.showSideDrawer }),
            r.a.createElement(v, { height: "80%", marginBottom: "0px" }),
            r.a.createElement(
              "nav",
              { className: E.a.DesktopOnly },
              r.a.createElement(S, { direction: "row" })
            )
          );
        },
        P = n(8),
        H = n.n(P),
        T = n(22),
        A = n.n(T),
        F = function(e) {
          return e.show
            ? r.a.createElement("div", {
                className: A.a.Backdrop,
                onClick: e.clicked
              })
            : null;
        },
        W = function(e) {
          return r.a.createElement(
            a.Fragment,
            null,
            r.a.createElement(F, { show: e.show, clicked: e.clicked }),
            r.a.createElement(
              "div",
              {
                className: [H.a.SideDrawer, e.show ? H.a.Open : H.a.Close].join(
                  " "
                )
              },
              r.a.createElement(v, { height: "11%", marginBottom: "32px" }),
              r.a.createElement(
                "nav",
                null,
                r.a.createElement(S, { direction: "column" })
              )
            )
          );
        },
        J = function(e) {
          var t = Object(a.useState)({ showSideDrawer: !1 }),
            n = Object(m.a)(t, 2),
            o = n[0],
            l = n[1];
          return r.a.createElement(
            a.Fragment,
            null,
            r.a.createElement(L, {
              showSideDrawer: function() {
                l({ showSideDrawer: !0 });
              }
            }),
            r.a.createElement(W, {
              clicked: function() {
                l({ showSideDrawer: !1 });
              },
              show: o.showSideDrawer
            }),
            r.a.createElement("main", { className: g.a.Content }, e.children)
          );
        },
        Q = n(10),
        R = n(23),
        q = n.n(R),
        G = n(1),
        U = n.n(G),
        X = function(e) {
          var t = null;
          switch (e.type) {
            case "bread-bottom":
              t = r.a.createElement("div", { className: U.a.BreadBottom });
              break;
            case "bread-top":
              t = r.a.createElement(
                "div",
                { className: U.a.BreadTop },
                r.a.createElement("div", { className: U.a.Seeds1 }),
                r.a.createElement("div", { className: U.a.Seeds2 })
              );
              break;
            case "meat":
              t = r.a.createElement("div", { className: U.a.Meat });
              break;
            case "cheese":
              t = r.a.createElement("div", { className: U.a.Cheese });
              break;
            case "salad":
              t = r.a.createElement("div", { className: U.a.Salad });
              break;
            case "shawrma":
              t = r.a.createElement("div", { className: U.a.Bacon });
          }
          return t;
        },
        Y = function(e) {
          var t = Object.keys(e.ingredints)
            .map(function(t) {
              return Object(Q.a)(Array(e.ingredints[t].amount)).map(function(
                e,
                n
              ) {
                return r.a.createElement(X, { key: t + n, type: t });
              });
            })
            .reduce(function(e, t) {
              return [].concat(Object(Q.a)(e), Object(Q.a)(t));
            }, []);
          return (
            0 === t.length &&
              (t = r.a.createElement("p", null, "Please, Pick your choice")),
            r.a.createElement(
              "div",
              { className: q.a.Burger },
              r.a.createElement(X, { type: "bread-top" }),
              t,
              r.a.createElement(X, { type: "bread-bottom" })
            )
          );
        },
        Z = n(13),
        z = n.n(Z),
        K = n(2),
        V = n.n(K),
        $ = function(e) {
          return r.a.createElement(
            "div",
            { className: V.a.BuildControl },
            r.a.createElement("div", { className: V.a.Label }, e.label),
            r.a.createElement(
              "button",
              {
                className: V.a.Less,
                onClick: function() {
                  e.onLess(e.label);
                },
                disabled: e.disabled
              },
              "Less"
            ),
            r.a.createElement(
              "button",
              {
                className: V.a.More,
                onClick: function() {
                  e.onMore(e.label);
                }
              },
              "More"
            )
          );
        },
        ee = function(e) {
          var t = Object.keys(e.ingredints).map(function(t, n) {
            return r.a.createElement($, {
              onMore: e.onMore,
              onLess: e.onLess,
              disabled: 0 === e.ingredints[t].amount,
              key: t + n,
              label: t
            });
          });
          return r.a.createElement(
            "div",
            { className: z.a.BuildControls },
            r.a.createElement("p", null, e.totalPrice, " AED"),
            t,
            r.a.createElement(
              "button",
              {
                className: z.a.OrderButton,
                disabled: 0 === e.totalPrice,
                onClick: e.onOrder
              },
              "ORDER NOW"
            )
          );
        },
        te = n(24),
        ne = n.n(te),
        ae = function(e) {
          var t = {};
          return (
            e.show || (t = { top: "-100%", opacity: "0" }),
            r.a.createElement(
              a.Fragment,
              null,
              r.a.createElement(F, { show: e.show, clicked: e.onCloseModal }),
              r.a.createElement(
                "div",
                { className: ne.a.Modal, style: t },
                e.children
              )
            )
          );
        },
        re = function(e) {
          var t = Object.keys(e.ingredints).map(function(t, n) {
            return r.a.createElement(
              "li",
              { key: t + n },
              r.a.createElement("span", null, t.toUpperCase()),
              ": ",
              e.ingredints[t].amount,
              " "
            );
          });
          return r.a.createElement(
            a.Fragment,
            null,
            r.a.createElement("h3", null, "Your Order"),
            r.a.createElement("p", null, " a burger with ingredients:"),
            r.a.createElement("ul", null, t),
            r.a.createElement("hr", null),
            r.a.createElement("p", null, "Total: ", e.totalPrice, " AED")
          );
        },
        oe = n(9),
        le = n.n(oe),
        ce = function(e) {
          return r.a.createElement(
            "button",
            {
              className: [
                le.a.Button,
                e.success ? le.a.Success : le.a.Danger
              ].join(" "),
              onClick: e.onClicked
            },
            e.children
          );
        },
        ie = (function(e) {
          function t() {
            var e, n;
            Object(c.a)(this, t);
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++)
              r[o] = arguments[o];
            return (
              ((n = Object(s.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(r))
              )).state = {
                ingredints: {
                  salad: { amount: 0, price: 3 },
                  shawrma: { amount: 0, price: 5 },
                  cheese: { amount: 0, price: 2 },
                  meat: { amount: 0, price: 7 }
                },
                totalPrice: 0,
                order: !1
              }),
              (n.moreHandle = function(e) {
                n.setState(function(t) {
                  return (
                    (t.ingredints[e].amount += 1),
                    (t.totalPrice +=
                      t.ingredints[e].price * t.ingredints[e].amount),
                    t
                  );
                });
              }),
              (n.lessHandle = function(e) {
                n.setState(function(t) {
                  return (
                    (t.totalPrice -=
                      t.ingredints[e].price * t.ingredints[e].amount),
                    0 !== t.ingredints[e].amount &&
                      (t.ingredints[e].amount -= 1),
                    t
                  );
                });
              }),
              (n.openModalHandle = function() {
                n.setState(function(e) {
                  return (e.order = !0), e;
                });
              }),
              (n.closeModalHandle = function() {
                n.setState(function(e) {
                  return (e.order = !1), e;
                });
              }),
              (n.orderHandler = function() {
                alert("order Now!!"), n.closeModalHandle();
              }),
              n
            );
          }
          return (
            Object(d.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function() {
                  return r.a.createElement(
                    a.Fragment,
                    null,
                    r.a.createElement(
                      ae,
                      {
                        show: this.state.order,
                        onCloseModal: this.closeModalHandle
                      },
                      r.a.createElement(re, {
                        ingredints: this.state.ingredints,
                        totalPrice: this.state.totalPrice
                      }),
                      r.a.createElement(
                        ce,
                        { onClicked: this.orderHandler, success: !0 },
                        "Checkout"
                      ),
                      r.a.createElement(
                        ce,
                        { onClicked: this.closeModalHandle },
                        "Cancel"
                      )
                    ),
                    r.a.createElement(Y, { ingredints: this.state.ingredints }),
                    r.a.createElement(ee, {
                      ingredints: this.state.ingredints,
                      onMore: this.moreHandle,
                      onLess: this.lessHandle,
                      onOrder: this.openModalHandle,
                      totalPrice: this.state.totalPrice
                    })
                  );
                }
              }
            ]),
            t
          );
        })(a.Component),
        se = (function(e) {
          function t() {
            return (
              Object(c.a)(this, t),
              Object(s.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(d.a)(t, e),
            Object(i.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  document.title = "Burger Builder";
                }
              },
              {
                key: "render",
                value: function() {
                  return r.a.createElement(
                    "div",
                    { className: "App" },
                    r.a.createElement(J, null, r.a.createElement(ie, null))
                  );
                }
              }
            ]),
            t
          );
        })(a.Component);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      l.a.render(r.a.createElement(se, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    }
  ],
  [[26, 1, 2]]
]);
//# sourceMappingURL=main.f24987d9.chunk.js.map
