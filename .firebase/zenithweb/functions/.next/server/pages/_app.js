"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/layout/Preloader.js

const Preloader = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "preloader",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "sk-cube-grid",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "sk-cube sk-cube1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "sk-cube sk-cube2"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "sk-cube sk-cube3"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "sk-cube sk-cube4"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "sk-cube sk-cube5"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "sk-cube sk-cube6"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "sk-cube sk-cube7"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "sk-cube sk-cube8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "sk-cube sk-cube9"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const layout_Preloader = (Preloader);

;// CONCATENATED MODULE: external "animated-scroll-to"
const external_animated_scroll_to_namespaceObject = require("animated-scroll-to");
var external_animated_scroll_to_default = /*#__PURE__*/__webpack_require__.n(external_animated_scroll_to_namespaceObject);
;// CONCATENATED MODULE: ./components/layout/index.js






const Layout = ({ children  })=>{
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            setLoading(false);
        }, 1500);
    }, []);
    function scrollToTop() {
        external_animated_scroll_to_default()(0, {
            maxDuration: 1000
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "UTF-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0, shrink-to-fit=no"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Zenith Institute IIT JEE NEET Foundation"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/assets/images/fav.png",
                        type: "image/gif",
                        sizes: "20x20"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/assets/css/google-fonts.css"
                    })
                ]
            }),
            loading ? /*#__PURE__*/ jsx_runtime_.jsx(layout_Preloader, {}) : null,
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "scroll-top",
                onClick: scrollToTop,
                className: "back-to-top-btn",
                style: {
                    display: 'inline'
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: "bi bi-arrow-up"
                })
            }),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: "/assets/js/wow.min.js"
            })
        ]
    });
};
/* harmony default export */ const layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js










function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9169));
module.exports = __webpack_exports__;

})();