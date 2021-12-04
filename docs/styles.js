(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Firas\prymodev.github.io\src\styles.css */"OmL/");


/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "LboF":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "OmL/":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--12-1!../node_modules/postcss-loader/src??embedded!./styles.css */ "W9N5");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "W9N5":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\r\n\r\n/* You can add global styles to this file, and also import other style files */\n:root {\r\n  --header-admin-height: 3rem;\r\n  /*=============================COLORS===================*/\r\n  /*change favorite color */\r\n  --hue-color: 274; /* purple 250 - Green 142 - Blue 230 - Pink 340 */\r\n  /*HSL color mode*/\r\n  --first-color: hsl(var(--hue-color), 69%, 61%);\r\n  --first-color-second: hsl(var(--hue-color), 69%, 61%);\r\n  --first-color-alt: hsl(var(--hue-color), 57%, 53%);\r\n  --first-color-lighter: hsl(var(--hue-color), 92%, 85%);\r\n  --title-color: hsl(var(--hue-color), 8%, 15%);\r\n  --text-color: hsl(var(--hue-color), 8%, 45%);\r\n  --text-color-light: hsl(var(--hue-color), 8%, 65%);\r\n  --input-color: hsl(var(--hue-color), 70%, 96%);\r\n  --body-color: hsl(var(--hue-color), 60%, 99%);\r\n  --container-color: #FFF;\r\n  --scroll-bar-color: hsl(var(--hue-color), 12%, 90%);\r\n  --scroll-thumb-color: hsl(var(--hue-color), 12%, 80%);\r\n  /*============================== Font and typography ===============*/\r\n  --body-font: 'Poppins', sans-serif;\r\n  /* .5rem=8px,1rem=16px,1.5rem=24px...*/\r\n  --big-font-size: 2rem;\r\n  --h1-font-size: 1.5rem;\r\n  --h2-font-size: 1.25rem;\r\n  --h3-font-size: 1.125rem;\r\n  --normal-font-size: .938rem;\r\n  --small-font-size: .813rem;\r\n  --smaller-font-size: .75rem;\r\n\r\n  /*============================== Font weight ===============*/\r\n  --font-medium: 500;\r\n  --font-semi-bold: 600;\r\n  /*============================== Margenes Bottom ===============*/\r\n  /*===.25rem=4px,.5rem=8px,.75rem=12px==*/\r\n  --mb-0-25: .25rem;\r\n  --mb-0-5: .5rem;\r\n  --mb-0-75: .75rem;\r\n  --mb-1: 1rem;\r\n  --mb-1-5: 1.5rem;\r\n  --mb-2: 2rem;\r\n  --mb-2-5: 2.5rem;\r\n  --mb-3: 3rem;\r\n  /*============================== z index ===============*/\r\n  --z-tooltip: 10;\r\n  --z-fixed: 100;\r\n  --z-modal: 1000;\r\n}\n/* font size for large devices*/\n@media screen and (min-width: 968px) {\r\n  :root {\r\n    --big-font-size: 3rem;\r\n    --h1-font-size: 2.25rem;\r\n    --h2-font-size: 1.5rem;\r\n    --h3-font-size: 1.25rem;\r\n    --normal-font-size: 1rem;\r\n    --small-font-size: .875rem;\r\n    --smaller-font-size: .813rem;\r\n\r\n  }\r\n}\n/*=======================  Variables Dark Theme====================*/\nbody.dark-theme {\r\n  /*HSL color mode*/\r\n  --first-color-second: hsl(var(--hue-color), 30%, 8%);\r\n  --title-color: hsl(var(--hue-color), 88%, 95%);\r\n  --text-color: hsl(var(--hue-color), 8%, 75%);\r\n  --input-color: hsl(var(--hue-color), 29%, 16%);\r\n  --body-color: hsl(var(--hue-color), 28%, 12%);\r\n  --container-color: hsl(var(--hue-color), 29%, 16%);\r\n  --scroll-bar-color: hsl(var(--hue-color), 12%, 480%);\r\n  --scroll-thumb-color: hsl(var(--hue-color), 12%, 36%);\r\n}\n/*======================= BASE====================*/\n* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\nhtml {\r\n  scroll-behavior: smooth;\r\n}\nbody {\r\n  margin: 0 0 var(--header-admin-height) 0;\r\n  font-family: var(--body-font);\r\n  font-size: var(--normal-font-size);\r\n  background-color: var(--body-color);\r\n  color: var(--text-color);\r\n}\nh1, h2, h3, h4 {\r\n  color: var(--title-color);\r\n  font-weight: var(--font-semi-bold);\r\n}\nul {\r\n  list-style: none;\r\n}\na {\r\n  text-decoration: none;\r\n}\nimg {\r\n  max-width: 100%;\r\n  height: auto;\r\n}\n/*============== REUSABLE CSS CLASSES=============*/\n.section {\r\n  padding: 2rem 0 4rem;\r\n}\n.section__title {\r\n  font-size: var(--h1-font-size);\r\n}\n.section__subtitle {\r\n  display: block;\r\n  font-size: var(--small-font-size);\r\n  margin-bottom: var(--mb-3);\r\n}\n.section__title,\r\n.section__subtitle {\r\n  text-align: center;\r\n}\n/*============= LAYOUT =============*/\n.container {\r\n  max-width: 1024px;\r\n  margin-left: var(--mb-1-5);\r\n  margin-right: var(--mb-1-5);\r\n}\n.grid {\r\n  display: grid;\r\n  gap: 1.5rem;\r\n}\n.header-admin {\r\n  width: 100%;\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: var(--z-fixed);\r\n  background-color: var(--body-color);\r\n\r\n}\n/*======================== BUTTONS========================*/\n.button {\r\n  display: inline-block;\r\n  background-color: var(--first-color);\r\n  color: #FFF;\r\n  padding: 1rem;\r\n  border-radius: .5rem;\r\n  font-weight: var(--font-medium);\r\n}\n.button:hover {\r\n  background-color: var(--first-color-alt);\r\n}\n.button__icon {\r\n  font-size: 1.25rem;\r\n  margin-left: var(--mb-0-5);\r\n  transition: .3s;\r\n}\n.button-white {\r\n  background-color: #FFF;\r\n  color: var(--first-color);\r\n}\n.button-white:hover {\r\n  background-color: var(--first-color);\r\n  color: #FFF;\r\n}\n.button--flex {\r\n  display: inline-flex;\r\n  align-items: center;\r\n}\n.button--small {\r\n  padding: .75rem 1rem;\r\n}\n.button--link {\r\n  padding: 0;\r\n  background-color: transparent;\r\n  color: var(--first-color);\r\n}\n/* ACTIVE MODAL */\n.active-modal {\r\n  opacity: 1;\r\n  visibility: visible;\r\n}\n.qualification [data-content] {\r\n  display: none;\r\n\r\n}\n.qualification__active[data-content] {\r\n  display: block;\r\n}\n.qualification__button.qualification__active {\r\n  color: var(--first-color);\r\n}\n/*========================== SCROLl BAR ==================*/\n::-webkit-scrollbar {\r\n  width: .60rem;\r\n  background-color: var(--scroll-bar-color);\r\n  border-radius: .5rem;\r\n}\n::-webkit-scrollbar-thumb {\r\n  background-color: var(--scroll-thumb-color);\r\n  border-radius: .5rem;\r\n}\n::-webkit-scrollbar-thumb:hover {\r\n  background-color: var(--text-color-light);\r\n}\n/*========================== Media QUERIES ==================*/\n/* For small devices */\n@media screen and (max-width: 350px) {\r\n  .container {\r\n    margin-left: var(--mb-1);\r\n    margin-right: var(--mb-1);\r\n  }\r\n}\n/* For medium devices */\n@media screen and (min-width: 768px) {\r\n  .container {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n\r\n  body {\r\n    margin: 0;\r\n  }\r\n\r\n  .section {\r\n    padding: 6rem 0 2rem;\r\n  }\r\n\r\n  .section__subtitle {\r\n    margin-bottom: 4rem;\r\n  }\r\n\r\n  .header-admin {\r\n    top: 0;\r\n    bottom: initial;\r\n  }\r\n\r\n  .header-admin,\r\n  .main,\r\n  .footer__container {\r\n    padding: 0 1rem;\r\n  }\r\n\r\n\r\n}\n/* For large devices */\n@media screen and (min-width: 1024px) {\r\n  .header-admin,\r\n  .main,\r\n  .footer__container {\r\n    padding: 0;\r\n  }\r\n\r\n}\r\n", "",{"version":3,"sources":["webpack://src/styles.css"],"names":[],"mappings":"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","sourcesContent":["/* You can add global styles to this file, and also import other style files */\r\n\r\n@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');\r\n\r\n:root {\r\n  --header-admin-height: 3rem;\r\n  /*=============================COLORS===================*/\r\n  /*change favorite color */\r\n  --hue-color: 274; /* purple 250 - Green 142 - Blue 230 - Pink 340 */\r\n  /*HSL color mode*/\r\n  --first-color: hsl(var(--hue-color), 69%, 61%);\r\n  --first-color-second: hsl(var(--hue-color), 69%, 61%);\r\n  --first-color-alt: hsl(var(--hue-color), 57%, 53%);\r\n  --first-color-lighter: hsl(var(--hue-color), 92%, 85%);\r\n  --title-color: hsl(var(--hue-color), 8%, 15%);\r\n  --text-color: hsl(var(--hue-color), 8%, 45%);\r\n  --text-color-light: hsl(var(--hue-color), 8%, 65%);\r\n  --input-color: hsl(var(--hue-color), 70%, 96%);\r\n  --body-color: hsl(var(--hue-color), 60%, 99%);\r\n  --container-color: #FFF;\r\n  --scroll-bar-color: hsl(var(--hue-color), 12%, 90%);\r\n  --scroll-thumb-color: hsl(var(--hue-color), 12%, 80%);\r\n  /*============================== Font and typography ===============*/\r\n  --body-font: 'Poppins', sans-serif;\r\n  /* .5rem=8px,1rem=16px,1.5rem=24px...*/\r\n  --big-font-size: 2rem;\r\n  --h1-font-size: 1.5rem;\r\n  --h2-font-size: 1.25rem;\r\n  --h3-font-size: 1.125rem;\r\n  --normal-font-size: .938rem;\r\n  --small-font-size: .813rem;\r\n  --smaller-font-size: .75rem;\r\n\r\n  /*============================== Font weight ===============*/\r\n  --font-medium: 500;\r\n  --font-semi-bold: 600;\r\n  /*============================== Margenes Bottom ===============*/\r\n  /*===.25rem=4px,.5rem=8px,.75rem=12px==*/\r\n  --mb-0-25: .25rem;\r\n  --mb-0-5: .5rem;\r\n  --mb-0-75: .75rem;\r\n  --mb-1: 1rem;\r\n  --mb-1-5: 1.5rem;\r\n  --mb-2: 2rem;\r\n  --mb-2-5: 2.5rem;\r\n  --mb-3: 3rem;\r\n  /*============================== z index ===============*/\r\n  --z-tooltip: 10;\r\n  --z-fixed: 100;\r\n  --z-modal: 1000;\r\n}\r\n\r\n/* font size for large devices*/\r\n@media screen and (min-width: 968px) {\r\n  :root {\r\n    --big-font-size: 3rem;\r\n    --h1-font-size: 2.25rem;\r\n    --h2-font-size: 1.5rem;\r\n    --h3-font-size: 1.25rem;\r\n    --normal-font-size: 1rem;\r\n    --small-font-size: .875rem;\r\n    --smaller-font-size: .813rem;\r\n\r\n  }\r\n}\r\n\r\n/*=======================  Variables Dark Theme====================*/\r\nbody.dark-theme {\r\n  /*HSL color mode*/\r\n  --first-color-second: hsl(var(--hue-color), 30%, 8%);\r\n  --title-color: hsl(var(--hue-color), 88%, 95%);\r\n  --text-color: hsl(var(--hue-color), 8%, 75%);\r\n  --input-color: hsl(var(--hue-color), 29%, 16%);\r\n  --body-color: hsl(var(--hue-color), 28%, 12%);\r\n  --container-color: hsl(var(--hue-color), 29%, 16%);\r\n  --scroll-bar-color: hsl(var(--hue-color), 12%, 480%);\r\n  --scroll-thumb-color: hsl(var(--hue-color), 12%, 36%);\r\n}\r\n\r\n\r\n/*======================= BASE====================*/\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  margin: 0 0 var(--header-admin-height) 0;\r\n  font-family: var(--body-font);\r\n  font-size: var(--normal-font-size);\r\n  background-color: var(--body-color);\r\n  color: var(--text-color);\r\n}\r\n\r\nh1, h2, h3, h4 {\r\n  color: var(--title-color);\r\n  font-weight: var(--font-semi-bold);\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n\r\n/*============== REUSABLE CSS CLASSES=============*/\r\n.section {\r\n  padding: 2rem 0 4rem;\r\n}\r\n\r\n.section__title {\r\n  font-size: var(--h1-font-size);\r\n}\r\n\r\n.section__subtitle {\r\n  display: block;\r\n  font-size: var(--small-font-size);\r\n  margin-bottom: var(--mb-3);\r\n}\r\n\r\n.section__title,\r\n.section__subtitle {\r\n  text-align: center;\r\n}\r\n\r\n/*============= LAYOUT =============*/\r\n.container {\r\n  max-width: 1024px;\r\n  margin-left: var(--mb-1-5);\r\n  margin-right: var(--mb-1-5);\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n  gap: 1.5rem;\r\n}\r\n\r\n.header-admin {\r\n  width: 100%;\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: var(--z-fixed);\r\n  background-color: var(--body-color);\r\n\r\n}\r\n\r\n\r\n/*======================== BUTTONS========================*/\r\n.button {\r\n  display: inline-block;\r\n  background-color: var(--first-color);\r\n  color: #FFF;\r\n  padding: 1rem;\r\n  border-radius: .5rem;\r\n  font-weight: var(--font-medium);\r\n}\r\n\r\n.button:hover {\r\n  background-color: var(--first-color-alt);\r\n}\r\n\r\n.button__icon {\r\n  font-size: 1.25rem;\r\n  margin-left: var(--mb-0-5);\r\n  transition: .3s;\r\n}\r\n\r\n.button-white {\r\n  background-color: #FFF;\r\n  color: var(--first-color);\r\n}\r\n\r\n.button-white:hover {\r\n  background-color: var(--first-color);\r\n  color: #FFF;\r\n}\r\n\r\n.button--flex {\r\n  display: inline-flex;\r\n  align-items: center;\r\n}\r\n\r\n.button--small {\r\n  padding: .75rem 1rem;\r\n}\r\n\r\n.button--link {\r\n  padding: 0;\r\n  background-color: transparent;\r\n  color: var(--first-color);\r\n}\r\n\r\n/* ACTIVE MODAL */\r\n.active-modal {\r\n  opacity: 1;\r\n  visibility: visible;\r\n}\r\n\r\n.qualification [data-content] {\r\n  display: none;\r\n\r\n}\r\n\r\n.qualification__active[data-content] {\r\n  display: block;\r\n}\r\n\r\n.qualification__button.qualification__active {\r\n  color: var(--first-color);\r\n}\r\n\r\n/*========================== SCROLl BAR ==================*/\r\n::-webkit-scrollbar {\r\n  width: .60rem;\r\n  background-color: var(--scroll-bar-color);\r\n  border-radius: .5rem;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background-color: var(--scroll-thumb-color);\r\n  border-radius: .5rem;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background-color: var(--text-color-light);\r\n}\r\n\r\n/*========================== Media QUERIES ==================*/\r\n/* For small devices */\r\n@media screen and (max-width: 350px) {\r\n  .container {\r\n    margin-left: var(--mb-1);\r\n    margin-right: var(--mb-1);\r\n  }\r\n}\r\n\r\n/* For medium devices */\r\n\r\n\r\n@media screen and (min-width: 768px) {\r\n  .container {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n\r\n  body {\r\n    margin: 0;\r\n  }\r\n\r\n  .section {\r\n    padding: 6rem 0 2rem;\r\n  }\r\n\r\n  .section__subtitle {\r\n    margin-bottom: 4rem;\r\n  }\r\n\r\n  .header-admin {\r\n    top: 0;\r\n    bottom: initial;\r\n  }\r\n\r\n  .header-admin,\r\n  .main,\r\n  .footer__container {\r\n    padding: 0 1rem;\r\n  }\r\n\r\n\r\n}\r\n\r\n/* For large devices */\r\n\r\n@media screen and (min-width: 1024px) {\r\n  .header-admin,\r\n  .main,\r\n  .footer__container {\r\n    padding: 0;\r\n  }\r\n\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map
