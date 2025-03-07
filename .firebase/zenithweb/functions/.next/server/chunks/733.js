"use strict";
exports.id = 733;
exports.ids = [733];
exports.modules = {

/***/ 4733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ AppGrid)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/layout/AppsList.js

const AppsList = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "col wow animate fadeInUp",
            "data-wow-delay": "250ms",
            "data-wow-duration": "1500ms",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "apps-box",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: props.icon,
                    alt: ""
                })
            })
        })
    });
};
/* harmony default export */ const layout_AppsList = (AppsList);

;// CONCATENATED MODULE: ./components/layout/AppGrid.js


const LayoutAppGrid = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "apps-area positioning pb-76 pt-100",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "hrdd-section-title text-center wow animate fadeInDown",
                                    "data-wow-delay": "100ms",
                                    "data-wow-duration": "1500ms",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                        children: [
                                            "Easy to ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Intricate"
                                            }),
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            " Your Apps"
                                        ]
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row row-cols-1 row-cols-xl-5 row-cols-lg-5 row-cols-md-2 row-cols-sm-2 mt-50",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(layout_AppsList, {
                                    icon: "assets/images/client-logo/app-2.png"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(layout_AppsList, {
                                    icon: "assets/images/client-logo/app-2.png"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(layout_AppsList, {
                                    icon: "assets/images/client-logo/app-2.png"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(layout_AppsList, {
                                    icon: "assets/images/client-logo/app-2.png"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(layout_AppsList, {
                                    icon: "assets/images/client-logo/app-2.png"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(layout_AppsList, {
                                    icon: "assets/images/client-logo/app-2.png"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(layout_AppsList, {
                                    icon: "assets/images/client-logo/app-2.png"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(layout_AppsList, {
                                    icon: "assets/images/client-logo/app-2.png"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(layout_AppsList, {
                                    icon: "assets/images/client-logo/app-2.png"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(layout_AppsList, {
                                    icon: "assets/images/client-logo/app-2.png"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    className: "shape hrrd-app-shape",
                    src: "/assets/images/shape/hrrd-app.png",
                    alt: ""
                })
            ]
        })
    });
};
/* harmony default export */ const AppGrid = (LayoutAppGrid);


/***/ })

};
;