"use strict";
exports.id = 393;
exports.ids = [393];
exports.modules = {

/***/ 9806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ blog_RecentComments)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/blog/RecentCommentItem.js


const RecentCommentItem = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "comment-box",
            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        children: [
                            "Shahriar_Rafi ",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "on"
                            }),
                            " Branding involves developing strategy to create a point."
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const blog_RecentCommentItem = (RecentCommentItem);

;// CONCATENATED MODULE: ./components/blog/RecentComments.js


const RecentComments = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "single-cart",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "cart-title",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "Recent Comments"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(blog_RecentCommentItem, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(blog_RecentCommentItem, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(blog_RecentCommentItem, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(blog_RecentCommentItem, {})
            ]
        })
    });
};
/* harmony default export */ const blog_RecentComments = (RecentComments);


/***/ }),

/***/ 3464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ RecentPosts)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/blog/RecentBlogItem.js


const RecentBlogItem = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "cart-post",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "cart-post-img",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/blog/demo",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: props.image,
                                alt: ""
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "cart-post-content",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/blog/demo",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: props.name
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: props.date
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const blog_RecentBlogItem = (RecentBlogItem);

;// CONCATENATED MODULE: ./components/blog/RecentPosts.js


const RecentPost = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "single-cart",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "cart-title",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "Recent Posts"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(blog_RecentBlogItem, {
                    image: "/assets/images/blog/cart-post-1.png",
                    name: "Top project management software.",
                    date: "February 22, 2021"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(blog_RecentBlogItem, {
                    image: "/assets/images/blog/cart-post-1.png",
                    name: "Top project management software.",
                    date: "February 22, 2021"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(blog_RecentBlogItem, {
                    image: "/assets/images/blog/cart-post-1.png",
                    name: "Top project management software.",
                    date: "February 22, 2021"
                })
            ]
        })
    });
};
/* harmony default export */ const RecentPosts = (RecentPost);


/***/ })

};
;