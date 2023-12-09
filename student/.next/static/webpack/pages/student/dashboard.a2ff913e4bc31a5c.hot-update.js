"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/student/dashboard",{

/***/ "./shared/Apps.jsx":
/*!*************************!*\
  !*** ./shared/Apps.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Container */ \"./node_modules/@mui/material/Container/index.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/IconButton */ \"./node_modules/@mui/material/IconButton/index.js\");\n/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/Search */ \"./node_modules/@mui/icons-material/Search.js\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/TextField */ \"./node_modules/@mui/material/TextField/index.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button!=!@mui/material */ \"__barrel_optimize__?names=Box,Button!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _HomeAppCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomeAppCard */ \"./shared/HomeAppCard.jsx\");\n/* harmony import */ var _PendingAppCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/PendingAppCard */ \"./shared/PendingAppCard.jsx\");\n/* harmony import */ var _StoreAppCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/StoreAppCard */ \"./shared/StoreAppCard.jsx\");\n// Apps.tsx\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n // Import PendingAppCard\n\nconst installedAppsData = [\n    {\n        name: \"VS Code\",\n        description: \"Code editor\",\n        image: \"https://imgs.search.brave.com/i_x3Xj7berzbEMNffR4YncVE-AcMw4MHEn6bVCps96c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/dnMtY29kZS5zdmc.svg\"\n    }\n];\nconst pendingAppsData = [\n    {\n        name: \"Figma\",\n        description: \"Designing app\",\n        image: \"https://imgs.search.brave.com/FdIGGfc3R9dZX9ggCvuTLVjuAb0LfOkNMSxiNmq0NrE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/ZmlnbWEuc3Zn.svg\"\n    }\n];\nconst globalAppsData = [\n    {\n        name: \"VS Code\",\n        description: \"Code editor\",\n        image: \"https://imgs.search.brave.com/i_x3Xj7berzbEMNffR4YncVE-AcMw4MHEn6bVCps96c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/dnMtY29kZS5zdmc.svg\"\n    },\n    {\n        name: \"Figma\",\n        description: \"Designing app\",\n        image: \"https://imgs.search.brave.com/FdIGGfc3R9dZX9ggCvuTLVjuAb0LfOkNMSxiNmq0NrE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/ZmlnbWEuc3Zn.svg\"\n    }\n];\nconst AppGrid = ()=>{\n    _s();\n    const [searchValue, setSearchValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [filteredCards, setFilteredCards] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(installedAppsData); // Default to Installed section\n    const [curr, setCurr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Installed\");\n    const handleSearchChange = (event)=>{\n        setSearchValue(event.target.value);\n    };\n    const handleSearchSubmit = (event)=>{\n        event.preventDefault();\n        // Filter cards based on the search value\n        const filtered = getActiveSectionData().filter((card)=>card.name.toLowerCase().includes(searchValue.toLowerCase()));\n        setFilteredCards(filtered);\n    };\n    const handleTabChange = (event, newValue)=>{\n        setCurr(newValue);\n        setFilteredCards(getActiveSectionData(newValue));\n    };\n    const getActiveSectionData = function() {\n        let section = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : curr;\n        switch(section){\n            case \"Installed\":\n                return installedAppsData;\n            case \"Pending\":\n                return pendingAppsData;\n            case \"Global\":\n                return globalAppsData;\n            default:\n                return [];\n        }\n    };\n    const getActiveSectionComponent = function() {\n        let section = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : curr;\n        switch(section){\n            case \"Installed\":\n                return _HomeAppCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; // Use StoreAppCard for 'Installed' tab\n            case \"Pending\":\n                return _PendingAppCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; // Use PendingAppCard for 'Pending' tab\n            case \"Global\":\n                return _StoreAppCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; // Use HomeAppCard for 'Global' tab\n            default:\n                return null; // Return null or a default component for unknown tabs\n        }\n    };\n    const ActiveCardComponent = getActiveSectionComponent();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: \"#f6f6f6\",\n            minHeight: \"100vh\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            maxWidth: \"xl\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                border: \"1px solid #ddd\",\n                boxShadow: \"0px 0px 5px 0px #D1D1D1\",\n                borderRadius: \"10px\",\n                p: 2,\n                sx: {\n                    backgroundColor: \"#FBF8F8\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            height: \"50px\",\n                            width: \"100%\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                variant: curr === \"Installed\" ? \"contained\" : \"outlined\",\n                                onClick: ()=>handleTabChange({}, \"Installed\"),\n                                style: {\n                                    marginRight: \"8px\",\n                                    width: \"150px\",\n                                    borderRadius: \"40px\"\n                                },\n                                children: \"Installed\"\n                            }, void 0, false, {\n                                fileName: \"/Users/devanshv17/DataShieldX/student/shared/Apps.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                variant: curr === \"Pending\" ? \"contained\" : \"outlined\",\n                                onClick: ()=>handleTabChange({}, \"Pending\"),\n                                style: {\n                                    marginRight: \"8px\",\n                                    width: \"150px\",\n                                    borderRadius: \"40px\"\n                                },\n                                children: \"Pending\"\n                            }, void 0, false, {\n                                fileName: \"/Users/devanshv17/DataShieldX/student/shared/Apps.jsx\",\n                                lineNumber: 97,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                variant: curr === \"Global\" ? \"contained\" : \"outlined\",\n                                onClick: ()=>handleTabChange({}, \"Global\"),\n                                style: {\n                                    marginRight: \"8px\",\n                                    width: \"150px\",\n                                    borderRadius: \"40px\"\n                                },\n                                children: \"Global\"\n                            }, void 0, false, {\n                                fileName: \"/Users/devanshv17/DataShieldX/student/shared/Apps.jsx\",\n                                lineNumber: 100,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/devanshv17/DataShieldX/student/shared/Apps.jsx\",\n                        lineNumber: 90,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                        mb: 2,\n                        display: \"flex\",\n                        justifyContent: \"flex-start\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSearchSubmit,\n                            style: {\n                                display: \"flex\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    position: \"relative\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        type: \"submit\",\n                                        sx: {\n                                            p: \"10px\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/devanshv17/DataShieldX/student/shared/Apps.jsx\",\n                                            lineNumber: 110,\n                                            columnNumber: 45\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/devanshv17/DataShieldX/student/shared/Apps.jsx\",\n                                        lineNumber: 109,\n                                        columnNumber: 41\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        label: \"Search...\",\n                                        value: searchValue,\n                                        onChange: handleSearchChange,\n                                        sx: {\n                                            ml: 1,\n                                            width: \"200px\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/devanshv17/DataShieldX/student/shared/Apps.jsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 41\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/devanshv17/DataShieldX/student/shared/Apps.jsx\",\n                                lineNumber: 108,\n                                columnNumber: 37\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/devanshv17/DataShieldX/student/shared/Apps.jsx\",\n                            lineNumber: 107,\n                            columnNumber: 33\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/devanshv17/DataShieldX/student/shared/Apps.jsx\",\n                        lineNumber: 106,\n                        columnNumber: 29\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        item: true,\n                        xs: 12,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            container: true,\n                            spacing: 2,\n                            children: filteredCards.map((card, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    item: true,\n                                    xs: 12,\n                                    sm: 6,\n                                    md: 4,\n                                    children: [\n                                        ActiveCardComponent === _HomeAppCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"] && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HomeAppCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            linkTo: \"/student/app?id=\".concat(card.name),\n                                            name: card.name,\n                                            description: card.description,\n                                            image: card.image\n                                        }, void 0, false, {\n                                            fileName: \"/Users/devanshv17/DataShieldX/student/shared/Apps.jsx\",\n                                            lineNumber: 123,\n                                            columnNumber: 45\n                                        }, undefined),\n                                        ActiveCardComponent === _PendingAppCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"] && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PendingAppCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            linkTo: \"/student/app?id=\".concat(card.name),\n                                            name: card.name,\n                                            description: card.description,\n                                            image: card.image\n                                        }, void 0, false, {\n                                            fileName: \"/Users/devanshv17/DataShieldX/student/shared/Apps.jsx\",\n                                            lineNumber: 126,\n                                            columnNumber: 45\n                                        }, undefined),\n                                        ActiveCardComponent === _StoreAppCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"] && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StoreAppCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            linkTo: \"/student/app?id=\".concat(card.name),\n                                            name: card.name,\n                                            description: card.description,\n                                            image: card.image\n                                        }, void 0, false, {\n                                            fileName: \"/Users/devanshv17/DataShieldX/student/shared/Apps.jsx\",\n                                            lineNumber: 129,\n                                            columnNumber: 45\n                                        }, undefined)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/Users/devanshv17/DataShieldX/student/shared/Apps.jsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 37\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/devanshv17/DataShieldX/student/shared/Apps.jsx\",\n                            lineNumber: 118,\n                            columnNumber: 29\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/devanshv17/DataShieldX/student/shared/Apps.jsx\",\n                        lineNumber: 117,\n                        columnNumber: 25\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/devanshv17/DataShieldX/student/shared/Apps.jsx\",\n                lineNumber: 89,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/devanshv17/DataShieldX/student/shared/Apps.jsx\",\n            lineNumber: 88,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/devanshv17/DataShieldX/student/shared/Apps.jsx\",\n        lineNumber: 84,\n        columnNumber: 9\n    }, undefined);\n};\n_s(AppGrid, \"E3c8GGMXhf3JFKSMBre29n/hVI4=\");\n_c = AppGrid;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppGrid);\nvar _c;\n$RefreshReg$(_c, \"AppGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBS3BCLFdBQVc7NENBQUVDLE9BQU9tQixLQUFLbkIsS0FBSzs7Ozs7O3dDQUVySDBCLHdCQUF3Qi9CLHVEQUFjQSxrQkFDbkMsOERBQUNBLHVEQUFjQTs0Q0FBQ2lFLFFBQVEsbUJBQTZCLE9BQVZ6QyxLQUFLckIsSUFBSTs0Q0FBSUEsTUFBTXFCLEtBQUtyQixJQUFJOzRDQUFFQyxhQUFhb0IsS0FBS3BCLFdBQVc7NENBQUVDLE9BQU9tQixLQUFLbkIsS0FBSzs7Ozs7O3dDQUU1SDBCLHdCQUF3QjlCLHFEQUFZQSxrQkFDakMsOERBQUNBLHFEQUFZQTs0Q0FBQ2dFLFFBQVEsbUJBQTZCLE9BQVZ6QyxLQUFLckIsSUFBSTs0Q0FBSUEsTUFBTXFCLEtBQUtyQixJQUFJOzRDQUFFQyxhQUFhb0IsS0FBS3BCLFdBQVc7NENBQUVDLE9BQU9tQixLQUFLbkIsS0FBSzs7Ozs7OzttQ0FUL0d5RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CcEQ7R0F0R010RDtLQUFBQTtBQXVHTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zaGFyZWQvQXBwcy5qc3g/OGJmMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBcHBzLnRzeFxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG11aS9tYXRlcmlhbC9HcmlkJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uJztcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2VhcmNoJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG11aS9tYXRlcmlhbC9UZXh0RmllbGQnO1xuaW1wb3J0IHsgQm94LCBCdXR0b24gfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCBBcHBDYXJkIGZyb20gJy4vSG9tZUFwcENhcmQnO1xuaW1wb3J0IFBlbmRpbmdBcHBDYXJkIGZyb20gJ0AvUGVuZGluZ0FwcENhcmQnOyAvLyBJbXBvcnQgUGVuZGluZ0FwcENhcmRcbmltcG9ydCBTdG9yZUFwcENhcmQgZnJvbSAnQC9TdG9yZUFwcENhcmQnO1xuY29uc3QgaW5zdGFsbGVkQXBwc0RhdGEgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiAnVlMgQ29kZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQ29kZSBlZGl0b3InLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaW1ncy5zZWFyY2guYnJhdmUuY29tL2lfeDNYajdiZXJ6YkVNTmZmUjRZbmNWRS1BY013NE1IRW42YlZDcHM5NmMvcnM6Zml0OjUwMDowOjAvZzpjZS9hSFIwY0hNNkx5OXNiMmR2L2RIbHdMblZ6TDJacGJHVXYvZG5NdFkyOWtaUzV6ZG1jLnN2ZycsXG4gICAgfSxcbl07XG5jb25zdCBwZW5kaW5nQXBwc0RhdGEgPSBbXG4gIHtcbiAgICBuYW1lOiAnRmlnbWEnLFxuICAgIGRlc2NyaXB0aW9uOiAnRGVzaWduaW5nIGFwcCcsXG4gICAgaW1hZ2U6ICdodHRwczovL2ltZ3Muc2VhcmNoLmJyYXZlLmNvbS9GZElHR2ZjM1I5ZFpYOWdnQ3Z1VExWanVBYjBMZk9rTk1TeGlObXEwTnJFL3JzOmZpdDo1MDA6MDowL2c6Y2UvYUhSMGNITTZMeTlzYjJkdi9kSGx3TG5WekwyWnBiR1V2L1ptbG5iV0V1YzNabi5zdmcnLFxuICB9LFxuXTtcbmNvbnN0IGdsb2JhbEFwcHNEYXRhID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ1ZTIENvZGUnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0NvZGUgZWRpdG9yJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2ltZ3Muc2VhcmNoLmJyYXZlLmNvbS9pX3gzWGo3YmVyemJFTU5mZlI0WW5jVkUtQWNNdzRNSEVuNmJWQ3BzOTZjL3JzOmZpdDo1MDA6MDowL2c6Y2UvYUhSMGNITTZMeTlzYjJkdi9kSGx3TG5WekwyWnBiR1V2L2RuTXRZMjlrWlM1emRtYy5zdmcnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnRmlnbWEnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0Rlc2lnbmluZyBhcHAnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaW1ncy5zZWFyY2guYnJhdmUuY29tL0ZkSUdHZmMzUjlkWlg5Z2dDdnVUTFZqdUFiMExmT2tOTVN4aU5tcTBOckUvcnM6Zml0OjUwMDowOjAvZzpjZS9hSFIwY0hNNkx5OXNiMmR2L2RIbHdMblZ6TDJacGJHVXYvWm1sbmJXRXVjM1puLnN2ZycsXG4gICAgfSxcbl07XG5jb25zdCBBcHBHcmlkID0gKCkgPT4ge1xuICAgIGNvbnN0IFtzZWFyY2hWYWx1ZSwgc2V0U2VhcmNoVmFsdWVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtmaWx0ZXJlZENhcmRzLCBzZXRGaWx0ZXJlZENhcmRzXSA9IHVzZVN0YXRlKGluc3RhbGxlZEFwcHNEYXRhKTsgLy8gRGVmYXVsdCB0byBJbnN0YWxsZWQgc2VjdGlvblxuICAgIGNvbnN0IFtjdXJyLCBzZXRDdXJyXSA9IHVzZVN0YXRlKFwiSW5zdGFsbGVkXCIpO1xuICAgIGNvbnN0IGhhbmRsZVNlYXJjaENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgICBzZXRTZWFyY2hWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlU2VhcmNoU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIEZpbHRlciBjYXJkcyBiYXNlZCBvbiB0aGUgc2VhcmNoIHZhbHVlXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0gZ2V0QWN0aXZlU2VjdGlvbkRhdGEoKS5maWx0ZXIoKGNhcmQpID0+IGNhcmQubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFZhbHVlLnRvTG93ZXJDYXNlKCkpKTtcbiAgICAgICAgc2V0RmlsdGVyZWRDYXJkcyhmaWx0ZXJlZCk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVUYWJDaGFuZ2UgPSAoZXZlbnQsIG5ld1ZhbHVlKSA9PiB7XG4gICAgICAgIHNldEN1cnIobmV3VmFsdWUpO1xuICAgICAgICBzZXRGaWx0ZXJlZENhcmRzKGdldEFjdGl2ZVNlY3Rpb25EYXRhKG5ld1ZhbHVlKSk7XG4gICAgfTtcbiAgICBjb25zdCBnZXRBY3RpdmVTZWN0aW9uRGF0YSA9IChzZWN0aW9uID0gY3VycikgPT4ge1xuICAgICAgICBzd2l0Y2ggKHNlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ0luc3RhbGxlZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbGxlZEFwcHNEYXRhO1xuICAgICAgICAgICAgY2FzZSAnUGVuZGluZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBlbmRpbmdBcHBzRGF0YTtcbiAgICAgICAgICAgIGNhc2UgJ0dsb2JhbCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdsb2JhbEFwcHNEYXRhO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0QWN0aXZlU2VjdGlvbkNvbXBvbmVudCA9IChzZWN0aW9uID0gY3VycikgPT4ge1xuICAgICAgICBzd2l0Y2ggKHNlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ0luc3RhbGxlZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEFwcENhcmQ7IC8vIFVzZSBTdG9yZUFwcENhcmQgZm9yICdJbnN0YWxsZWQnIHRhYlxuICAgICAgICAgICAgY2FzZSAnUGVuZGluZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFBlbmRpbmdBcHBDYXJkOyAvLyBVc2UgUGVuZGluZ0FwcENhcmQgZm9yICdQZW5kaW5nJyB0YWJcbiAgICAgICAgICAgIGNhc2UgJ0dsb2JhbCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0b3JlQXBwQ2FyZDsgLy8gVXNlIEhvbWVBcHBDYXJkIGZvciAnR2xvYmFsJyB0YWJcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7IC8vIFJldHVybiBudWxsIG9yIGEgZGVmYXVsdCBjb21wb25lbnQgZm9yIHVua25vd24gdGFic1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IEFjdGl2ZUNhcmRDb21wb25lbnQgPSBnZXRBY3RpdmVTZWN0aW9uQ29tcG9uZW50KCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y2ZjZmNlwiLFxuICAgICAgICAgICAgbWluSGVpZ2h0OiAnMTAwdmgnXG4gICAgICAgIH19PlxuICAgICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInhsXCI+XG4gICAgICAgICAgICAgICAgPEJveCBib3JkZXI9XCIxcHggc29saWQgI2RkZFwiIGJveFNoYWRvdz17XCIwcHggMHB4IDVweCAwcHggI0QxRDFEMVwifSBib3JkZXJSYWRpdXM9XCIxMHB4XCIgcD17Mn0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNGQkY4RjhcIiB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzUwcHgnLCB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTZWN0aW9uIFRhYnMgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PXtjdXJyID09PSAnSW5zdGFsbGVkJyA/ICdjb250YWluZWQnIDogJ291dGxpbmVkJ30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVGFiQ2hhbmdlKHt9LCAnSW5zdGFsbGVkJyl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnOHB4Jywgd2lkdGg6ICcxNTBweCcsIGJvcmRlclJhZGl1czogJzQwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnN0YWxsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9e2N1cnIgPT09ICdQZW5kaW5nJyA/ICdjb250YWluZWQnIDogJ291dGxpbmVkJ30gb25DbGljaz17KCkgPT4gaGFuZGxlVGFiQ2hhbmdlKHt9LCAnUGVuZGluZycpfSBzdHlsZT17eyBtYXJnaW5SaWdodDogJzhweCcsIHdpZHRoOiAnMTUwcHgnLCBib3JkZXJSYWRpdXM6ICc0MHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGVuZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD17Y3VyciA9PT0gJ0dsb2JhbCcgPyAnY29udGFpbmVkJyA6ICdvdXRsaW5lZCd9IG9uQ2xpY2s9eygpID0+IGhhbmRsZVRhYkNoYW5nZSh7fSwgJ0dsb2JhbCcpfSBzdHlsZT17eyBtYXJnaW5SaWdodDogJzhweCcsIHdpZHRoOiAnMTUwcHgnLCBib3JkZXJSYWRpdXM6ICc0MHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2xvYmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBtYj17Mn0gZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImZsZXgtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVNlYXJjaFN1Ym1pdH0gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiB0eXBlPVwic3VibWl0XCIgc3g9e3sgcDogJzEwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGxhYmVsPVwiU2VhcmNoLi4uXCIgdmFsdWU9e3NlYXJjaFZhbHVlfSBvbkNoYW5nZT17aGFuZGxlU2VhcmNoQ2hhbmdlfSBzeD17eyBtbDogMSwgd2lkdGg6ICcyMDBweCcgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWx0ZXJlZENhcmRzLm1hcCgoY2FyZCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0ga2V5PXtpbmRleH0geHM9ezEyfSBzbT17Nn0gbWQ9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBVc2UgdGhlIGR5bmFtaWNhbGx5IGRldGVybWluZWQgY2FyZCBjb21wb25lbnQgd2l0aCBleHBsaWNpdCBwcm9wcyAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7QWN0aXZlQ2FyZENvbXBvbmVudCA9PT0gQXBwQ2FyZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcHBDYXJkIGxpbmtUbz17YC9zdHVkZW50L2FwcD9pZD0ke2NhcmQubmFtZX1gfSBuYW1lPXtjYXJkLm5hbWV9IGRlc2NyaXB0aW9uPXtjYXJkLmRlc2NyaXB0aW9ufSBpbWFnZT17Y2FyZC5pbWFnZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtBY3RpdmVDYXJkQ29tcG9uZW50ID09PSBQZW5kaW5nQXBwQ2FyZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZW5kaW5nQXBwQ2FyZCBsaW5rVG89e2Avc3R1ZGVudC9hcHA/aWQ9JHtjYXJkLm5hbWV9YH0gbmFtZT17Y2FyZC5uYW1lfSBkZXNjcmlwdGlvbj17Y2FyZC5kZXNjcmlwdGlvbn0gaW1hZ2U9e2NhcmQuaW1hZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7QWN0aXZlQ2FyZENvbXBvbmVudCA9PT0gU3RvcmVBcHBDYXJkICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0b3JlQXBwQ2FyZCBsaW5rVG89e2Avc3R1ZGVudC9hcHA/aWQ9JHtjYXJkLm5hbWV9YH0gbmFtZT17Y2FyZC5uYW1lfSBkZXNjcmlwdGlvbj17Y2FyZC5kZXNjcmlwdGlvbn0gaW1hZ2U9e2NhcmQuaW1hZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQXBwR3JpZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiR3JpZCIsIkNvbnRhaW5lciIsIkljb25CdXR0b24iLCJTZWFyY2hJY29uIiwiVGV4dEZpZWxkIiwiQm94IiwiQnV0dG9uIiwiQXBwQ2FyZCIsIlBlbmRpbmdBcHBDYXJkIiwiU3RvcmVBcHBDYXJkIiwiaW5zdGFsbGVkQXBwc0RhdGEiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInBlbmRpbmdBcHBzRGF0YSIsImdsb2JhbEFwcHNEYXRhIiwiQXBwR3JpZCIsInNlYXJjaFZhbHVlIiwic2V0U2VhcmNoVmFsdWUiLCJmaWx0ZXJlZENhcmRzIiwic2V0RmlsdGVyZWRDYXJkcyIsImN1cnIiLCJzZXRDdXJyIiwiaGFuZGxlU2VhcmNoQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVNlYXJjaFN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZmlsdGVyZWQiLCJnZXRBY3RpdmVTZWN0aW9uRGF0YSIsImZpbHRlciIsImNhcmQiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiaGFuZGxlVGFiQ2hhbmdlIiwibmV3VmFsdWUiLCJzZWN0aW9uIiwiZ2V0QWN0aXZlU2VjdGlvbkNvbXBvbmVudCIsIkFjdGl2ZUNhcmRDb21wb25lbnQiLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsIm1pbkhlaWdodCIsIm1heFdpZHRoIiwiYm9yZGVyIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwicCIsInN4IiwiaGVpZ2h0Iiwid2lkdGgiLCJ2YXJpYW50Iiwib25DbGljayIsIm1hcmdpblJpZ2h0IiwibWIiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJmb3JtIiwib25TdWJtaXQiLCJwb3NpdGlvbiIsInR5cGUiLCJsYWJlbCIsIm9uQ2hhbmdlIiwibWwiLCJpdGVtIiwieHMiLCJjb250YWluZXIiLCJzcGFjaW5nIiwibWFwIiwiaW5kZXgiLCJzbSIsIm1kIiwibGlua1RvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./shared/Apps.jsx\n"));

/***/ })

});