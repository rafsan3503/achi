(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return s(2835);
        },
      ]);
    },
    2835: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return g;
          },
        });
      var l = s(5893),
        a = s(7294),
        r = s(1058),
        i = s(1163),
        n = function (e) {
          var t = e.children;
          return (0, l.jsx)("div", {
            className:
              "min-h-screen bg-gradient-to-t from-blue-500 to-blue-900 p-0 m-0 bg-cover bg-right bg-fixed bg-no-repeat ",
            children: t,
          });
        },
        c = s(603),
        o = s(5434),
        d = s(6261),
        x = {
          src: "/_next/static/media/logo.d427fdcc.png",
          height: 2500,
          width: 2500,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAXVBMVEVMaXG/6MuqsnDnvIl9fWvXr33Flmv///+j05eW1bSi3rubnXHNdzT1rm65t5So3sa9j16arIic7+DtqmhdOx+ZuplAKhimmWpnTjeL/fWH39StlGSkgFmfWyqbdUkLfXX/AAAAGHRSTlMALGdy/f0sAS1yb/b7aGf1+/r0+/v6+voeq5CjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQUlEQVR4nAXBhRGAMAAAsa8rLldl/zFJcPgQPA7k0/shwaeZ80ye0MwYpgVi1aXoGhHnd79lE7BeRu8LOKxSFvcDbwgC+QUQWP0AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        };
      function m() {
        var e = (0, a.useState)(!1),
          t = e[0],
          s = e[1],
          n = (0, a.useState)(!1);
        n[0], n[1];
        var m = (0, a.useState)(0),
          A = m[0],
          u = m[1],
          f = (0, a.useState)(!0),
          h = f[0],
          b = f[1],
          p = [
            ["Home", null],
            ["About", null],
            ["Tokenomics", null],
            ["Facts", null],
          ],
          g = (0, i.useRouter)();
        return (
          (0, a.useEffect)(
            function () {
              if ((s(!1), "/" === g.pathname)) return b(!0);
              b(!1);
            },
            [g]
          ),
          (0, a.useEffect)(function () {
            var e = function () {
              window.pageYOffset, u(window.scrollY);
            };
            document.addEventListener("scroll", e, { passive: !0 });
          }, []),
          (0, l.jsxs)("div", {
            className:
              "fixed top-4 z-40 w-screen flex flex-col justify-center items-center",
            children: [
              (0, l.jsxs)("div", {
                className: "".concat(
                  (A < 70 && "bg-black") || "bg-black",
                  " transition-all duration-500 p-4 md:px-16 md:py-8 flex w-11/12 items-center justify-between rounded-lg bg-opacity-20 backdrop-blur-sm h-24"
                ),
                children: [
                  (0, l.jsx)("div", {
                    className: "block w-20 p-1",
                    children: (0, l.jsx)(r.Z, {
                      src: x,
                      alt: "logo",
                      layout: "responsive",
                      className: "",
                    }),
                  }),
                  (0, l.jsx)("ul", {
                    className: " md:justify-between md:flex hidden",
                    children:
                      h &&
                      p.map(function (e, t) {
                        var s = (0, c.Z)(e, 2),
                          a = s[0];
                        return (
                          s[1],
                          (0, l.jsx)(
                            d.rU,
                            {
                              className:
                                "m-2 text-white font-bold text-xl cursor-pointer hover:text-blue-400 ",
                              activeClass: "active",
                              to: "".concat(a),
                              spy: !0,
                              smooth: !0,
                              offset: -70,
                              duration: 500,
                              children: a,
                            },
                            t
                          )
                        );
                      }),
                  }),
                  (0, l.jsx)("button", {
                    className:
                      "md:hidden relative z-60 p-2 outline-none after:rounded-full transition-all duration-700 bg-black rounded-full bg-opacity-40 backdrop-blur-sm  ".concat(
                        (A < 70 && "text-white") || "text-white"
                      ),
                    onClick: function () {
                      return s(!t);
                    },
                    children:
                      (t && (0, l.jsx)(o.$WQ, { size: 40 })) ||
                      (0, l.jsx)(o.EJ4, { size: 40 }),
                  }),
                ],
              }),
              (0, l.jsx)("div", {
                className:
                  "md:hidden absolute top-0 z-40 overflow-hidden h-screen flex  bg-bg2 bg-opacity-30 backdrop-blur-sm shadow-lg w-full items-center justify-center transition-all ease-out duration-300 ".concat(
                    (t && " scale-100") || "scale-0 py-0"
                  ),
                children: (0, l.jsx)("ul", {
                  className: "flex flex-col translate-y-[-100px]",
                  children:
                    h &&
                    p.map(function (e, t) {
                      var a = (0, c.Z)(e, 2),
                        r = a[0];
                      return (
                        a[1],
                        (h &&
                          (0, l.jsx)(
                            d.rU,
                            {
                              className:
                                "mt-4  text-gray-50  text-center   font-bold  text-2xl ",
                              onClick: function () {
                                return s(!1);
                              },
                              activeClass: "active",
                              to: "".concat(r),
                              spy: !0,
                              smooth: !0,
                              offset: -70,
                              duration: 500,
                              children: r,
                            },
                            t
                          )) ||
                          (0, l.jsx)(
                            "li",
                            {
                              className:
                                "mt-2 pl-2 text-gray-50 m-1 font-light text-xl hover:scale-105",
                              onClick: function () {
                                return g.push("/");
                              },
                              children: r,
                            },
                            t
                          )
                      );
                    }),
                }),
              }),
            ],
          })
        );
      }
      var A = s(8367),
        u = {
          src: "/_next/static/media/tokenomics.a9cf951b.jpg",
          height: 640,
          width: 640,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAL/xAAeEAABAwQDAAAAAAAAAAAAAAABAAMRAhITMRQiQf/EABQBAQAAAAAAAAAAAAAAAAAAAAX/xAAaEQACAwEBAAAAAAAAAAAAAAABAgADETFR/9oADAMBAAIRAxEAPwC8NfIDeJyDJuDZtgb7a9RESVFjMX08Jh9yhQueCf/Z",
          blurWidth: 8,
          blurHeight: 8,
        },
        f = {
          src: "/_next/static/media/about.e742a3de.png",
          height: 2500,
          width: 2500,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEVMaXHSsIT2ypKfWCPMik6Oc1i/fUKiZj2hYDDDgU2JVS6aWCWzZCSyYyPUjU1mTjixoIFTPi00KBvMkF3Zl159VzKSeVpnTzngvYxjSDH0tHZ+ZkuqjiYGAAAAFXRSTlMA5/eQ/g/2G2Mkfrb07/29/NX8PHljSMoGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPElEQVR4nE3JNxaAIADA0NDBAkqx3v+ePpnI8ofAkHOdoNZl9oC3UesJMOJ4RZ/pvPdfY1tuFSiP3C4ZPiqfAcFVTHFsAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        h = s(3750),
        b = s(8193),
        p = s(9583);
      s(4107);
      var g = function () {
        var e = (0, a.useState)(!1),
          t = e[0],
          s = e[1];
        return (
          (0, a.useRef)(null),
          (0, a.useEffect)(
            function () {
              new Audio("/images/music.mp3");
            },
            [t]
          ),
          (0, i.useRouter)(),
          (t &&
            (0, l.jsxs)("div", {
              className:
                " bg-gradient-to-t from-bg1 to-bg2 min-h-screen flex flex-col justify-center items-center p-8",
              children: [
                (0, l.jsx)("div", {
                  className:
                    "block p-2 w-full md:w-1/3 bg-primary rounded-full",
                  children: (0, l.jsx)(r.Z, {
                    src: x,
                    alt: "illustration",
                    layout: "responsive",
                    className:
                      " border-secondary border-2 border-solid rounded-full",
                  }),
                }),
                (0, l.jsxs)("p", {
                  className:
                    "text-white font-extrabold md:text-8xl text-4xl text-center md:text-left ",
                  children: [
                    "Welcome to ",
                    (0, l.jsx)("span", {
                      className: "text-primary",
                      children: "ACHI",
                    }),
                  ],
                }),
                (0, l.jsx)("button", {
                  className:
                    "text-3xl my-3 md:text-5xl hover:-translate-y-2 transition-all duration-700 bg-primary text-white py-3 px-2 shadow-md rounded font-bold mr-1 border-none animate-pulse",
                  onClick: function () {
                    s(!1);
                  },
                  children: "Click here to Continue",
                }),
              ],
            })) ||
            (0, l.jsxs)("div", {
              children: [
                (0, l.jsx)(m, {}),
                (0, l.jsxs)(n, {
                  children: [
                    (0, l.jsx)("section", {
                      className:
                        " min-h-screen mb-0 pb-0 w-full md:py-20 bg-contain bg-no-repeat bg-top md:bg-top md:bg-fixed bg-blue-900 bg-opacity-60 backdrop-blur-sm m-auto z-20 ",
                      id: "Home",
                      children: (0, l.jsxs)("div", {
                        className:
                          "h-full flex flex-col-reverse items-center justify-center md:justify-around md:flex-row-reverse md:gap-2 md:items-center w-full md:px-24 md:py-8 py-36 p-3",
                        children: [
                          (0, l.jsx)(A.LG, {
                            top: !0,
                            children: (0, l.jsx)("div", {
                              className:
                                "block p-2 w-full md:w-2/5 bg-primary rounded-full",
                              children: (0, l.jsx)(r.Z, {
                                src: x,
                                alt: "illustration",
                                layout: "responsive",
                                className:
                                  " border-secondary border-2 border-solid rounded-full",
                              }),
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: " md:pt-0 md:w-1/2 px-6 md:p-3 w-full",
                            children: (0, l.jsxs)(A.sm, {
                              top: !0,
                              children: [
                                (0, l.jsx)("h3", {
                                  className:
                                    "md:block font-extrabold text-8xl md:text-8xl text-primary my-1 text-center md:text-left ",
                                  children: "ACHI",
                                }),
                                (0, l.jsx)("p", {
                                  className:
                                    "text-white font-extrabold md:text-6xl text-4xl text-center md:text-left ",
                                  children: "$ACHI, The Japanese Hachiko dog",
                                }),
                                (0, l.jsxs)("div", {
                                  className:
                                    "flex md:flex-row md:w-1/2 gap-2 md:mb-0 my-3 md:my-6",
                                  children: [
                                    (0, l.jsx)("button", {
                                      onClick: function () {
                                        return (window.location.href = "");
                                      },
                                      className:
                                        " text-3xl hover:-translate-y-2 transition-all duration-700 bg-primary text-white py-3 px-2 shadow-md rounded-full bg-opacity-30 backdrop-blur-lg font-bold mr-1 border-none flex-1 ",
                                      children: "Buy",
                                    }),
                                    (0, l.jsx)("button", {
                                      onClick: function () {
                                        return (window.location.href =
                                          "https://www.dextools.io/app/en/ether/pair-explorer/0x9f3e58c936e84b4bbe4b2617d02f5b0deb4138bd?t=1718818019380");
                                      },
                                      className:
                                        " text-3xl hover:-translate-y-2 transition-all duration-700 bg-white text-primary py-3 px-2 shadow-md rounded-full bg-opacity-30 backdrop-blur-lg font-bold mr-1 border-none flex-1 ",
                                      children: "Chart",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, l.jsx)("section", {
                      className:
                        "bg-primary py-4 w-full break-all text-white text-lg md:text-2xl text-center p-2 bg-opacity-40 backdrop-blur-sm",
                      children: "0xA46E1E0cf3df66E3eb106eA831db67c582a616Bd",
                    }),
                    (0, l.jsx)("section", {
                      className:
                        " flex flex-col justify-center items-center p-6 md:py-12 w-full backdrop-blur-sm bg-cover bg-bottom md:bg-fixed",
                      id: "About",
                      children: (0, l.jsxs)("div", {
                        className:
                          "flex flex-col md:flex-row items-center md:px-12 justify-center md:gap-10 relative",
                        children: [
                          (0, l.jsx)("div", {
                            className: "w-full md:w-2/5",
                            children: (0, l.jsx)(r.Z, {
                              src: f,
                              alt: "illustration",
                              layout: "responsive",
                              className: " ",
                            }),
                          }),
                          (0, l.jsx)(A.LG, {
                            top: !0,
                            children: (0, l.jsx)("div", {
                              className:
                                "flex flex-col items-center py-5 md:w-1/2 transition-all duration-500 h-full md:hover:border-none",
                              children: (0, l.jsx)("h4", {
                                className:
                                  "md:text-left text-3xl md:text-5xl text-white text-center font-bold",
                                children:
                                  "Introducing $ACHI The Japanese Hachiko dog renowned for his exceptional loyalty, or better known from $WIF the most adorable dog in the world!",
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, l.jsxs)("section", {
                      className:
                        " flex flex-col justify-center items-center p-6 md:py-12 w-full bg-black bg-opacity-10 backdrop-blur-sm bg-cover bg-bottom md:bg-fixed",
                      id: "Tokenomics",
                      children: [
                        (0, l.jsx)(A.pT, {
                          top: !0,
                          children: (0, l.jsx)("h3", {
                            className:
                              "text-center text-3xl md:text-6xl mb-7 w-full p-1 font-extrabold text-white ",
                            children: (0, l.jsx)("span", {
                              className: "text-primary",
                              children: " Tokenomics",
                            }),
                          }),
                        }),
                        (0, l.jsxs)("div", {
                          className:
                            "md:flex flex-row-reverse items-center justify-center w-full",
                          children: [
                            (0, l.jsx)(A.LG, {
                              children: (0, l.jsx)("div", {
                                className: "block p-2 w-full md:w-1/3",
                                children: (0, l.jsx)(r.Z, {
                                  src: u,
                                  alt: "Tokenomics Illustration",
                                  layout: "responsive",
                                  className: "md:rounded-3xl animate-bouncing",
                                }),
                              }),
                            }),
                            (0, l.jsx)("div", {
                              className:
                                "flex p-2 flex-col items-center md:w-1/2",
                              children: (0, l.jsx)("div", {
                                className: "flex flex-col gap-1",
                                children: (0, l.jsxs)("div", {
                                  className:
                                    "flex flex-col items-start justify-center",
                                  children: [
                                    (0, l.jsx)(A.LG, {
                                      children: (0, l.jsxs)("h3", {
                                        className:
                                          "flex text-white md:text-5xl text-3xl m-1 font-bold break-all",
                                        children: [
                                          (0, l.jsx)(b.bzc, {
                                            size: 40,
                                            className: "mr-1 text-secondary ",
                                          }),
                                          " ",
                                          (0, l.jsx)("span", {
                                            className: " w-11/12",
                                            children: "Supply: 1B",
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, l.jsx)(A.LG, {
                                      children: (0, l.jsxs)("h3", {
                                        className:
                                          "flex text-white md:text-5xl text-3xl m-1 font-bold",
                                        children: [
                                          (0, l.jsx)(b.bzc, {
                                            size: 40,
                                            className: "mr-1 text-secondary ",
                                          }),
                                          " ",
                                          (0, l.jsx)("span", {
                                            className: " w-11/12",
                                            children: "Tax: 0/0",
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, l.jsx)(A.LG, {
                                      children: (0, l.jsxs)("h3", {
                                        className:
                                          "flex text-white md:text-5xl text-3xl m-1 font-bold",
                                        children: [
                                          (0, l.jsx)(b.bzc, {
                                            size: 40,
                                            className: "mr-1 text-secondary ",
                                          }),
                                          " ",
                                          (0, l.jsx)("span", {
                                            className: " w-11/12",
                                            children: "LP Burned Forever",
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsx)("section", {
                      className:
                        " flex flex-col justify-center items-center p-6 md:p-12 py-12 w-full bg-black bg-opacity-30 backdrop-blur-sm bg-cover bg-right md:bg-fixed",
                      id: "Facts",
                      children: (0, l.jsx)("div", {
                        className:
                          "flex flex-col md:flex-row items-center md:px-12 justify-center md:gap-10 relative",
                        children: (0, l.jsx)(A.LG, {
                          top: !0,
                          children: (0, l.jsxs)("div", {
                            className:
                              "flex items-start bg-primary bg-opacity-50 p-5 rounded-xl justify-center gap-5 py-5 md:w-3/5 transition-all duration-500 h-full md:hover:border-none",
                            children: [
                              (0, l.jsxs)("div", {
                                children: [
                                  (0, l.jsx)(p.tLl, {
                                    size: 120,
                                    className: "text-white",
                                  }),
                                  (0, l.jsx)("div", {
                                    className: "block p-2 w-full md:w-1/3",
                                    children: (0, l.jsx)(r.Z, {
                                      src: u,
                                      alt: "Tokenomics Illustration",
                                      layout: "responsive",
                                      className:
                                        "md:rounded-3xl animate-bouncing",
                                    }),
                                  }),
                                ],
                              }),
                              (0, l.jsxs)("h4", {
                                className:
                                  " w-11/12 text-start text-3xl md:text-5xl text-white font-bold",
                                children: [
                                  "Everyone likes Dogs. Created for fun to compete in the meme space.",
                                  (0, l.jsx)("br", {}),
                                  (0, l.jsx)("br", {}),
                                  "This Dog has absolute no use cases and is completely a meme.",
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    (0, l.jsxs)("section", {
                      className:
                        "p-6 md:p-12 pb-12 w-full bg-bg2 bg-opacity-10 flex flex-col items-center bg-cover bg-bottom md:bg-fixed",
                      id: "Roadmap",
                      style: {
                        backgroundImage: "url('images/background2.gif')",
                      },
                      children: [
                        (0, l.jsx)(A.pT, {
                          top: !0,
                          children: (0, l.jsx)("h3", {
                            className:
                              "text-center text-2xl md:text-6xl mb-7 w-fit p-1 font-extrabold text-white ",
                            children: "Roadmap",
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className:
                            "flex flex-col md:flex-row justify-center w-full md:items-start items-start gap-5 md:gap-6 ",
                          children: [
                            { title: "Phase 1", desc: ["ACHI Launch"] },
                            { title: "Phase 2", desc: ["ACHI mooning"] },
                            {
                              title: "Phase 3",
                              desc: ["ACHI just a Dog again "],
                            },
                            {
                              title: "Phase 4",
                              desc: ["ACHI is coming to CEX"],
                            },
                          ].map(function (e, t) {
                            return (0, l.jsx)(
                              A.LG,
                              {
                                top: !0,
                                children: (0, l.jsxs)("div", {
                                  className:
                                    "shadow-lg rounded-3xl group p-8 md:py-12 w-full flex flex-col justify-center items-center bg-black bg-opacity-40 backdrop-blur-sm",
                                  children: [
                                    (0, l.jsx)("h3", {
                                      className:
                                        " z-10 text-3xl font-extrabold my-3 text-center text-white group-hover:text-white self-center",
                                      children: e.title,
                                    }),
                                    (0, l.jsx)("div", {
                                      className:
                                        "h-[0.3px] self-center mb-5 p-[0.1px] w-32 bg-slate-300 z-10",
                                    }),
                                    (0, l.jsx)("div", {
                                      className: " text-2xl text-white z-10",
                                      children: e.desc.map(function (e, t) {
                                        return (0,
                                        l.jsx)("div", { className: "my-1 flex items-center gap-1 text-center", children: (0, l.jsx)("span", { className: "my-2 text-center", children: e }) }, t);
                                      }),
                                    }),
                                  ],
                                }),
                              },
                              t
                            );
                          }),
                        }),
                      ],
                    }),
                    (0, l.jsx)("section", {
                      className:
                        "px-6 md:p-12 py-12 w-full bg-black bg-opacity-60 backdrop-blur-sm flex flex-col items-center rounded-t-3xl ",
                      id: "Socials",
                      children: (0, l.jsx)(A.pT, {
                        top: !0,
                        children: (0, l.jsxs)("div", {
                          className:
                            "flex gap-3 my-3 justify-center items-center md:justify-start text-white",
                          children: [
                            (0, l.jsx)("a", {
                              href: "https://t.me/ETHAchiCTO",
                              className: "",
                              children: (0, l.jsx)(h.iEj, { size: 40 }),
                            }),
                            (0, l.jsx)("a", {
                              href: "twitterlink",
                              className: "",
                              children: (0, l.jsx)(h.AMt, { size: 40 }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, l.jsxs)("section", {
                      className: " text-sm bg-bg2 text-center p-1 text-white",
                      children: [
                        (0, l.jsx)("p", { children: "" }),
                        "Copyright \xa9 ",
                        new Date().getFullYear(),
                        " ACHI. All Rights Reserved.",
                      ],
                    }),
                  ],
                }),
              ],
            })
        );
      };
    },
  },
  function (e) {
    e.O(0, [228, 445, 13, 617, 488, 774, 888, 179], function () {
      return e((e.s = 8312));
    }),
      (_N_E = e.O());
  },
]);
