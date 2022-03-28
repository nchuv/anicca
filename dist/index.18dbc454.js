// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"g9TDx":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0bcb44a518dbc454";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"1SICI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _gsap = require("gsap");
var _gsapDefault = parcelHelpers.interopDefault(_gsap);
var _locomotiveScroll = require("locomotive-scroll");
var _locomotiveScrollDefault = parcelHelpers.interopDefault(_locomotiveScroll);
var _swiperBundleCss = require("swiper/swiper-bundle.css");
var _cursor = require("./cursor");
var _projects = require("./projects");
var _projectsDefault = parcelHelpers.interopDefault(_projects);
var _buttonCtrl = require("./buttonCtrl");
var _buttonCtrlDefault = parcelHelpers.interopDefault(_buttonCtrl);
// const nav = document.querySelectorAll(".menu")[0];
//
// if (nav) {
//   nav.addEventListener("click", function () {
//     nav.classList.toggle("opened");
//   });
// }
_projectsDefault.default();
const buttonEl = document.querySelectorAll('.button')[0];
const cursorEl = document.querySelectorAll('.cursor')[0];
const cursor = new _cursor.Cursor(cursorEl);
if (buttonEl && cursorEl) {
    const button = new _buttonCtrlDefault.default(buttonEl);
    button.on('enter', ()=>cursor.enter()
    );
    button.on('leave', ()=>cursor.leave()
    );
}
// mouse effects on all links and others
// [...document.querySelectorAll('a')].forEach(link => {
//   link.addEventListener('mouseenter', () => cursor.enter());
//   link.addEventListener('mouseleave', () => cursor.leave());
// });
// https://github.com/locomotivemtl/locomotive-scroll
// https://locomotivemtl.github.io/locomotive-scroll/
const lscroll = new _locomotiveScrollDefault.default({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    direction: 'up'
});
const hero = document.querySelector('[data-hero]');
window.addEventListener('mousemove', (e)=>{
    const { clientX , clientY  } = e;
    const x = Math.round(clientX / window.innerWidth * 100);
    const y = Math.round(clientY / window.innerHeight * 100);
    _gsapDefault.default.to(hero, {
        '--x': `${x}%`,
        '--y': `${y}%`,
        duration: 0.3,
        ease: 'sine.out'
    });
});

},{"gsap":"fPSuC","locomotive-scroll":"iDXE3","swiper/swiper-bundle.css":"aErfw","./cursor":"3v1v0","./projects":"82j8t","./buttonCtrl":"bnzgd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fPSuC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gsap", ()=>gsapWithCSS
);
parcelHelpers.export(exports, "default", ()=>gsapWithCSS
);
parcelHelpers.export(exports, "CSSPlugin", ()=>_csspluginJs.CSSPlugin
);
parcelHelpers.export(exports, "TweenMax", ()=>TweenMaxWithCSS
);
parcelHelpers.export(exports, "TweenLite", ()=>_gsapCoreJs.TweenLite
);
parcelHelpers.export(exports, "TimelineMax", ()=>_gsapCoreJs.TimelineMax
);
parcelHelpers.export(exports, "TimelineLite", ()=>_gsapCoreJs.TimelineLite
);
parcelHelpers.export(exports, "Power0", ()=>_gsapCoreJs.Power0
);
parcelHelpers.export(exports, "Power1", ()=>_gsapCoreJs.Power1
);
parcelHelpers.export(exports, "Power2", ()=>_gsapCoreJs.Power2
);
parcelHelpers.export(exports, "Power3", ()=>_gsapCoreJs.Power3
);
parcelHelpers.export(exports, "Power4", ()=>_gsapCoreJs.Power4
);
parcelHelpers.export(exports, "Linear", ()=>_gsapCoreJs.Linear
);
parcelHelpers.export(exports, "Quad", ()=>_gsapCoreJs.Quad
);
parcelHelpers.export(exports, "Cubic", ()=>_gsapCoreJs.Cubic
);
parcelHelpers.export(exports, "Quart", ()=>_gsapCoreJs.Quart
);
parcelHelpers.export(exports, "Quint", ()=>_gsapCoreJs.Quint
);
parcelHelpers.export(exports, "Strong", ()=>_gsapCoreJs.Strong
);
parcelHelpers.export(exports, "Elastic", ()=>_gsapCoreJs.Elastic
);
parcelHelpers.export(exports, "Back", ()=>_gsapCoreJs.Back
);
parcelHelpers.export(exports, "SteppedEase", ()=>_gsapCoreJs.SteppedEase
);
parcelHelpers.export(exports, "Bounce", ()=>_gsapCoreJs.Bounce
);
parcelHelpers.export(exports, "Sine", ()=>_gsapCoreJs.Sine
);
parcelHelpers.export(exports, "Expo", ()=>_gsapCoreJs.Expo
);
parcelHelpers.export(exports, "Circ", ()=>_gsapCoreJs.Circ
);
var _gsapCoreJs = require("./gsap-core.js");
var _csspluginJs = require("./CSSPlugin.js");
var gsapWithCSS = _gsapCoreJs.gsap.registerPlugin(_csspluginJs.CSSPlugin) || _gsapCoreJs.gsap, // to protect from tree shaking
TweenMaxWithCSS = gsapWithCSS.core.Tween;

},{"./gsap-core.js":"05eeC","./CSSPlugin.js":"l02JQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"05eeC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GSCache", ()=>GSCache
);
parcelHelpers.export(exports, "Animation", ()=>Animation
);
parcelHelpers.export(exports, "Timeline", ()=>Timeline
);
parcelHelpers.export(exports, "Tween", ()=>Tween
);
parcelHelpers.export(exports, "PropTween", ()=>PropTween
);
parcelHelpers.export(exports, "gsap", ()=>gsap
);
parcelHelpers.export(exports, "Power0", ()=>Power0
);
parcelHelpers.export(exports, "Power1", ()=>Power1
);
parcelHelpers.export(exports, "Power2", ()=>Power2
);
parcelHelpers.export(exports, "Power3", ()=>Power3
);
parcelHelpers.export(exports, "Power4", ()=>Power4
);
parcelHelpers.export(exports, "Linear", ()=>Linear
);
parcelHelpers.export(exports, "Quad", ()=>Quad
);
parcelHelpers.export(exports, "Cubic", ()=>Cubic
);
parcelHelpers.export(exports, "Quart", ()=>Quart
);
parcelHelpers.export(exports, "Quint", ()=>Quint
);
parcelHelpers.export(exports, "Strong", ()=>Strong
);
parcelHelpers.export(exports, "Elastic", ()=>Elastic
);
parcelHelpers.export(exports, "Back", ()=>Back
);
parcelHelpers.export(exports, "SteppedEase", ()=>SteppedEase
);
parcelHelpers.export(exports, "Bounce", ()=>Bounce
);
parcelHelpers.export(exports, "Sine", ()=>Sine
);
parcelHelpers.export(exports, "Expo", ()=>Expo
);
parcelHelpers.export(exports, "Circ", ()=>Circ
);
parcelHelpers.export(exports, "TweenMax", ()=>Tween
) //export some internal methods/orojects for use in CSSPlugin so that we can externalize that file and allow custom builds that exclude it.
;
parcelHelpers.export(exports, "TweenLite", ()=>Tween
);
parcelHelpers.export(exports, "TimelineMax", ()=>Timeline
);
parcelHelpers.export(exports, "TimelineLite", ()=>Timeline
);
parcelHelpers.export(exports, "default", ()=>gsap
);
parcelHelpers.export(exports, "wrap", ()=>wrap
);
parcelHelpers.export(exports, "wrapYoyo", ()=>wrapYoyo
);
parcelHelpers.export(exports, "distribute", ()=>distribute
);
parcelHelpers.export(exports, "random", ()=>random
);
parcelHelpers.export(exports, "snap", ()=>snap
);
parcelHelpers.export(exports, "normalize", ()=>normalize
);
parcelHelpers.export(exports, "getUnit", ()=>getUnit
);
parcelHelpers.export(exports, "clamp", ()=>clamp
);
parcelHelpers.export(exports, "splitColor", ()=>splitColor
);
parcelHelpers.export(exports, "toArray", ()=>toArray
);
parcelHelpers.export(exports, "selector", ()=>selector
);
parcelHelpers.export(exports, "mapRange", ()=>mapRange
);
parcelHelpers.export(exports, "pipe", ()=>pipe
);
parcelHelpers.export(exports, "unitize", ()=>unitize
);
parcelHelpers.export(exports, "interpolate", ()=>interpolate
);
parcelHelpers.export(exports, "shuffle", ()=>shuffle
);
parcelHelpers.export(exports, "_getProperty", ()=>_getProperty
);
parcelHelpers.export(exports, "_numExp", ()=>_numExp
);
parcelHelpers.export(exports, "_numWithUnitExp", ()=>_numWithUnitExp
);
parcelHelpers.export(exports, "_isString", ()=>_isString
);
parcelHelpers.export(exports, "_isUndefined", ()=>_isUndefined
);
parcelHelpers.export(exports, "_renderComplexString", ()=>_renderComplexString
);
parcelHelpers.export(exports, "_relExp", ()=>_relExp
);
parcelHelpers.export(exports, "_setDefaults", ()=>_setDefaults
);
parcelHelpers.export(exports, "_removeLinkedListItem", ()=>_removeLinkedListItem
);
parcelHelpers.export(exports, "_forEachName", ()=>_forEachName
);
parcelHelpers.export(exports, "_sortPropTweensByPriority", ()=>_sortPropTweensByPriority
);
parcelHelpers.export(exports, "_colorStringFilter", ()=>_colorStringFilter
);
parcelHelpers.export(exports, "_replaceRandom", ()=>_replaceRandom
);
parcelHelpers.export(exports, "_checkPlugin", ()=>_checkPlugin
);
parcelHelpers.export(exports, "_plugins", ()=>_plugins
);
parcelHelpers.export(exports, "_ticker", ()=>_ticker
);
parcelHelpers.export(exports, "_config", ()=>_config
);
parcelHelpers.export(exports, "_roundModifier", ()=>_roundModifier
);
parcelHelpers.export(exports, "_round", ()=>_round
);
parcelHelpers.export(exports, "_missingPlugin", ()=>_missingPlugin
);
parcelHelpers.export(exports, "_getSetter", ()=>_getSetter
);
parcelHelpers.export(exports, "_getCache", ()=>_getCache
);
parcelHelpers.export(exports, "_colorExp", ()=>_colorExp
);
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
/*!
 * GSAP 3.9.1
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/ /* eslint-disable */ var _config = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, _defaults = {
    duration: 0.5,
    overwrite: false,
    delay: 0
}, _suppressOverwrites, _bigNum = 100000000, _tinyNum = 1 / _bigNum, _2PI = Math.PI * 2, _HALF_PI = _2PI / 4, _gsID = 0, _sqrt = Math.sqrt, _cos = Math.cos, _sin = Math.sin, _isString = function _isString(value) {
    return typeof value === "string";
}, _isFunction = function _isFunction(value) {
    return typeof value === "function";
}, _isNumber = function _isNumber(value) {
    return typeof value === "number";
}, _isUndefined = function _isUndefined(value) {
    return typeof value === "undefined";
}, _isObject = function _isObject(value) {
    return typeof value === "object";
}, _isNotFalse = function _isNotFalse(value) {
    return value !== false;
}, _windowExists = function _windowExists() {
    return typeof window !== "undefined";
}, _isFuncOrString = function _isFuncOrString(value) {
    return _isFunction(value) || _isString(value);
}, _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
}, // note: IE10 has ArrayBuffer, but NOT ArrayBuffer.isView().
_isArray = Array.isArray, _strictNumExp = /(?:-?\.?\d|\.)+/gi, //only numbers (including negatives and decimals) but NOT relative values.
_numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
_numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, //duplicate so that while we're looping through matches from exec(), it doesn't contaminate the lastIndex of _numExp which we use to search for colors too.
_relExp = /[+-]=-?[.\d]+/, _delimitedValueExp = /[^,'"\[\]\s]+/gi, // previously /[#\-+.]*\b[a-z\d\-=+%.]+/gi but didn't catch special characters.
_unitExp = /[\d.+\-=]+(?:e[-+]\d*)*/i, _globalTimeline, _win, _coreInitted, _doc, _globals = {
}, _installScope = {
}, _coreReady, _install = function _install(scope) {
    return (_installScope = _merge(scope, _globals)) && gsap;
}, _missingPlugin = function _missingPlugin(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
}, _warn = function _warn(message, suppress) {
    return !suppress && console.warn(message);
}, _addGlobal = function _addGlobal(name, obj) {
    return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
}, _emptyFunc = function _emptyFunc() {
    return 0;
}, _reservedProps = {
}, _lazyTweens = [], _lazyLookup = {
}, _lastRenderedFrame, _plugins = {
}, _effects = {
}, _nextGCFrame = 30, _harnessPlugins = [], _callbackNames = "", _harness = function _harness(targets) {
    var target = targets[0], harnessPlugin, i;
    _isObject(target) || _isFunction(target) || (targets = [
        targets
    ]);
    if (!(harnessPlugin = (target._gsap || {
    }).harness)) {
        // find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
        i = _harnessPlugins.length;
        while((i--) && !_harnessPlugins[i].targetTest(target));
        harnessPlugin = _harnessPlugins[i];
    }
    i = targets.length;
    while(i--)targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
    return targets;
}, _getCache = function _getCache(target) {
    return target._gsap || _harness(toArray(target))[0]._gsap;
}, _getProperty = function _getProperty(target, property, v) {
    return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
}, _forEachName = function _forEachName(names, func) {
    return (names = names.split(",")).forEach(func) || names;
}, //split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
_round = function _round(value) {
    return Math.round(value * 100000) / 100000 || 0;
}, _roundPrecise = function _roundPrecise(value) {
    return Math.round(value * 10000000) / 10000000 || 0;
}, // increased precision mostly for timing values.
_arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
    //searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
    var l = toFind.length, i = 0;
    for(; toSearch.indexOf(toFind[i]) < 0 && ++i < l;);
    return i < l;
}, _lazyRender = function _lazyRender() {
    var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
    _lazyLookup = {
    };
    _lazyTweens.length = 0;
    for(i = 0; i < l; i++){
        tween = a[i];
        tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
}, _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
    _lazyTweens.length && _lazyRender();
    animation.render(time, suppressEvents, force);
    _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
}, _numericIfPossible = function _numericIfPossible(value) {
    var n = parseFloat(value);
    return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
}, _passThrough = function _passThrough(p) {
    return p;
}, _setDefaults = function _setDefaults(obj, defaults) {
    for(var p in defaults)p in obj || (obj[p] = defaults[p]);
    return obj;
}, _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
    return function(obj, defaults) {
        for(var p in defaults)p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
    };
}, _merge = function _merge(base, toMerge) {
    for(var p in toMerge)base[p] = toMerge[p];
    return base;
}, _mergeDeep = function _mergeDeep1(base, toMerge) {
    for(var p in toMerge)p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep1(base[p] || (base[p] = {
    }), toMerge[p]) : toMerge[p]);
    return base;
}, _copyExcluding = function _copyExcluding(obj, excluding) {
    var copy = {
    }, p;
    for(p in obj)p in excluding || (copy[p] = obj[p]);
    return copy;
}, _inheritDefaults = function _inheritDefaults(vars) {
    var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
    if (_isNotFalse(vars.inherit)) while(parent){
        func(vars, parent.vars.defaults);
        parent = parent.parent || parent._dp;
    }
    return vars;
}, _arraysMatch = function _arraysMatch(a1, a2) {
    var i = a1.length, match = i === a2.length;
    while(match && i-- && a1[i] === a2[i]);
    return i < 0;
}, _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) firstProp = "_first";
    if (lastProp === void 0) lastProp = "_last";
    var prev = parent[lastProp], t;
    if (sortBy) {
        t = child[sortBy];
        while(prev && prev[sortBy] > t)prev = prev._prev;
    }
    if (prev) {
        child._next = prev._next;
        prev._next = child;
    } else {
        child._next = parent[firstProp];
        parent[firstProp] = child;
    }
    if (child._next) child._next._prev = child;
    else parent[lastProp] = child;
    child._prev = prev;
    child.parent = child._dp = parent;
    return child;
}, _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
    if (firstProp === void 0) firstProp = "_first";
    if (lastProp === void 0) lastProp = "_last";
    var prev = child._prev, next = child._next;
    if (prev) prev._next = next;
    else if (parent[firstProp] === child) parent[firstProp] = next;
    if (next) next._prev = prev;
    else if (parent[lastProp] === child) parent[lastProp] = prev;
    child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
}, _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
    child._act = 0;
}, _uncache = function _uncache(animation, child) {
    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
        // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
        var a = animation;
        while(a){
            a._dirty = 1;
            a = a.parent;
        }
    }
    return animation;
}, _recacheAncestors = function _recacheAncestors(animation) {
    var parent = animation.parent;
    while(parent && parent.parent){
        //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
        parent._dirty = 1;
        parent.totalDuration();
        parent = parent.parent;
    }
    return animation;
}, _hasNoPausedAncestors = function _hasNoPausedAncestors1(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors1(animation.parent);
}, _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
    return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
}, // feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
_animationCycle = function _animationCycle(tTime, cycleDuration) {
    var whole = Math.floor(tTime /= cycleDuration);
    return tTime && whole === tTime ? whole - 1 : whole;
}, _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
}, _setEnd = function _setEnd(animation) {
    return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
}, _alignPlayhead = function _alignPlayhead(animation, totalTime) {
    // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
    var parent = animation._dp;
    if (parent && parent.smoothChildTiming && animation._ts) {
        animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
        _setEnd(animation);
        parent._dirty || _uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
    }
    return animation;
}, /*
_totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
	let cycleDuration = duration + repeatDelay,
		time = _round(clampedTotalTime % cycleDuration);
	if (time > duration) {
		time = duration;
	}
	return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
},
*/ _postAddChecks = function _postAddChecks(timeline, child) {
    var t;
    if (child._time || child._initted && !child._dur) {
        //in case, for example, the _start is moved on a tween that has already rendered. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning.
        t = _parentToChildTotalTime(timeline.rawTime(), child);
        if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) child.render(t, true);
    } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.
    if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
        //in case any of the ancestors had completed but should now be enabled...
        if (timeline._dur < timeline.duration()) {
            t = timeline;
            while(t._dp){
                t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.
                t = t._dp;
            }
        }
        timeline._zTime = -_tinyNum; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
    }
}, _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
    child.parent && _removeFromParent(child);
    child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
    child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
    _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);
    _isFromOrFromStart(child) || (timeline._recent = child);
    skipChecks || _postAddChecks(timeline, child);
    return timeline;
}, _scrollTrigger = function _scrollTrigger(animation, trigger) {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
}, _attemptInitTween = function _attemptInitTween(tween, totalTime, force, suppressEvents) {
    _initTween(tween, totalTime);
    if (!tween._initted) return 1;
    if (!force && tween._pt && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
        _lazyTweens.push(tween);
        tween._lazy = [
            totalTime,
            suppressEvents
        ];
        return 1;
    }
}, _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart1(_ref) {
    var parent = _ref.parent;
    return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart1(parent));
}, // check parent's _lock because when a timeline repeats/yoyos and does its artificial wrapping, we shouldn't force the ratio back to 0
_isFromOrFromStart = function _isFromOrFromStart(_ref2) {
    var data = _ref2.data;
    return data === "isFromStart" || data === "isStart";
}, _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, // if the tween or its parent is reversed and the totalTime is 0, we should go to a ratio of 0. Edge case: if a from() or fromTo() stagger tween is placed later in a timeline, the "startAt" zero-duration tween could initially render at a time when the parent timeline's playhead is technically BEFORE where this tween is, so make sure that any "from" and "fromTo" startAt tweens are rendered the first time at a ratio of 1.
    repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
    if (repeatDelay && tween._repeat) {
        // in case there's a zero-duration tween that has a repeat with a repeatDelay
        tTime = _clamp(0, tween._tDur, totalTime);
        iteration = _animationCycle(tTime, repeatDelay);
        tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
        if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
            // if iteration changed
            prevRatio = 1 - ratio;
            tween.vars.repeatRefresh && tween._initted && tween.invalidate();
        }
    }
    if (ratio !== prevRatio || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
        if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents)) // if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
        return;
        prevIteration = tween._zTime;
        tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.
        suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.
        tween.ratio = ratio;
        tween._from && (ratio = 1 - ratio);
        tween._time = 0;
        tween._tTime = tTime;
        pt = tween._pt;
        while(pt){
            pt.r(ratio, pt.d);
            pt = pt._next;
        }
        tween._startAt && totalTime < 0 && tween._startAt.render(totalTime, true, true);
        tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
        tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
        if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
            ratio && _removeFromParent(tween, 1);
            if (!suppressEvents) {
                _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
                tween._prom && tween._prom();
            }
        }
    } else if (!tween._zTime) tween._zTime = totalTime;
}, _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
    var child;
    if (time > prevTime) {
        child = animation._first;
        while(child && child._start <= time){
            if (child.data === "isPause" && child._start > prevTime) return child;
            child = child._next;
        }
    } else {
        child = animation._last;
        while(child && child._start >= time){
            if (child.data === "isPause" && child._start < prevTime) return child;
            child = child._prev;
        }
    }
}, _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 10000000000 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress > 0 && !leavePlayhead ? _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress) : animation.parent && _setEnd(animation);
    skipUncache || _uncache(animation.parent, animation);
    return animation;
}, _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
    return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
}, _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc,
    totalDuration: _emptyFunc
}, _parsePosition = function _parsePosition1(animation, position, percentAnimation) {
    var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
    i, offset, isPercent;
    if (_isString(position) && (isNaN(position) || position in labels)) {
        //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
        offset = position.charAt(0);
        isPercent = position.substr(-1) === "%";
        i = position.indexOf("=");
        if (offset === "<" || offset === ">") {
            i >= 0 && (position = position.replace(/=/, ""));
            return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
        }
        if (i < 0) {
            position in labels || (labels[position] = clippedDuration);
            return labels[position];
        }
        offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
        if (isPercent && percentAnimation) offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
        return i > 1 ? _parsePosition1(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
    }
    return position == null ? clippedDuration : +position;
}, _createTweenType = function _createTweenType(type, params, timeline) {
    var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
    isLegacy && (vars.duration = params[1]);
    vars.parent = timeline;
    if (type) {
        irVars = vars;
        parent = timeline;
        while(parent && !("immediateRender" in irVars)){
            // inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
            irVars = parent.vars.defaults || {
            };
            parent = _isNotFalse(parent.vars.inherit) && parent.parent;
        }
        vars.immediateRender = _isNotFalse(irVars.immediateRender);
        type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
    }
    return new Tween(params[0], vars, params[varsIndex + 1]);
}, _conditionalReturn = function _conditionalReturn(value, func) {
    return value || value === 0 ? func(value) : func;
}, _clamp = function _clamp(min, max, value) {
    return value < min ? min : value > max ? max : value;
}, getUnit = function getUnit(value, v) {
    return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : value.substr(v.index + v[0].length);
}, // note: protect against padded numbers as strings, like "100.100". That shouldn't return "00" as the unit. If it's numeric, return no unit.
clamp = function clamp(min, max, value) {
    return _conditionalReturn(value, function(v) {
        return _clamp(min, max, v);
    });
}, _slice = [].slice, _isArrayLike = function _isArrayLike(value, nonEmpty) {
    return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
}, _flatten = function _flatten(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) accumulator = [];
    return ar.forEach(function(value) {
        var _accumulator;
        return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
    }) || accumulator;
}, //takes any value and returns an array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
toArray = function toArray(value, scope, leaveStrings) {
    return _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [
        value
    ] : [];
}, selector = function selector(value) {
    value = toArray(value)[0] || _warn("Invalid scope") || {
    };
    return function(v) {
        var el = value.current || value.nativeElement || value;
        return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
    };
}, shuffle = function shuffle(a) {
    return a.sort(function() {
        return 0.5 - Math.random();
    });
}, // alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = Math.floor(Math.random() * i), v = a[--i], a[i] = a[j], a[j] = v); return a;
//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
distribute = function distribute(v) {
    if (_isFunction(v)) return v;
    var vars = _isObject(v) ? v : {
        each: v
    }, //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
    ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {
    }, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
    if (_isString(from)) ratioX = ratioY = ({
        center: 0.5,
        edges: 0.5,
        end: 1
    })[from] || 0;
    else if (!isDecimal && ratios) {
        ratioX = from[0];
        ratioY = from[1];
    }
    return function(i, target, a) {
        var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
        if (!distances) {
            wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [
                1,
                _bigNum
            ])[1];
            if (!wrapAt) {
                max = -_bigNum;
                while(max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l);
                wrapAt--;
            }
            distances = cache[l] = [];
            originX = ratios ? Math.min(wrapAt, l) * ratioX - 0.5 : from % wrapAt;
            originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - 0.5 : from / wrapAt | 0;
            max = 0;
            min = _bigNum;
            for(j = 0; j < l; j++){
                x = j % wrapAt - originX;
                y = originY - (j / wrapAt | 0);
                distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
                d > max && (max = d);
                d < min && (min = d);
            }
            from === "random" && shuffle(distances);
            distances.max = max - min;
            distances.min = min;
            distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
            distances.b = l < 0 ? base - l : base;
            distances.u = getUnit(vars.amount || vars.each) || 0; //unit
            ease = ease && l < 0 ? _invertEase(ease) : ease;
        }
        l = (distances[i] - distances.min) / distances.max || 0;
        return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
    };
}, _roundModifier = function _roundModifier(v) {
    //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
    var p = Math.pow(10, ((v + "").split(".")[1] || "").length); //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed())
    return function(raw) {
        var n = Math.round(parseFloat(raw) / v) * v * p;
        return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw)); // n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
    };
}, snap = function snap(snapTo, value) {
    var isArray = _isArray(snapTo), radius, is2D;
    if (!isArray && _isObject(snapTo)) {
        radius = isArray = snapTo.radius || _bigNum;
        if (snapTo.values) {
            snapTo = toArray(snapTo.values);
            if (is2D = !_isNumber(snapTo[0])) radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
        } else snapTo = _roundModifier(snapTo.increment);
    }
    return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
        is2D = snapTo(raw);
        return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function(raw) {
        var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length, dx, dy;
        while(i--){
            if (is2D) {
                dx = snapTo[i].x - x;
                dy = snapTo[i].y - y;
                dx = dx * dx + dy * dy;
            } else dx = Math.abs(snapTo[i] - x);
            if (dx < min) {
                min = dx;
                closest = i;
            }
        }
        closest = !radius || min <= radius ? snapTo[closest] : raw;
        return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
    });
}, random = function random(min, max, roundingIncrement, returnFunction) {
    return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? (roundingIncrement = 0, false) : !returnFunction, function() {
        return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 0.00001, returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
}, pipe = function pipe() {
    for(var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++)functions[_key] = arguments[_key];
    return function(value) {
        return functions.reduce(function(v, f) {
            return f(v);
        }, value);
    };
}, unitize = function unitize(func, unit) {
    return function(value) {
        return func(parseFloat(value)) + (unit || getUnit(value));
    };
}, normalize = function normalize(min, max, value) {
    return mapRange(min, max, 0, 1, value);
}, _wrapArray = function _wrapArray(a, wrapper, value) {
    return _conditionalReturn(value, function(index) {
        return a[~~wrapper(index)];
    });
}, wrap = function wrap1(min, max, value1) {
    // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
    var range = max - min;
    return _isArray(min) ? _wrapArray(min, wrap1(0, min.length), max) : _conditionalReturn(value1, function(value) {
        return (range + (value - min) % range) % range + min;
    });
}, wrapYoyo = function wrapYoyo1(min, max, value2) {
    var range = max - min, total = range * 2;
    return _isArray(min) ? _wrapArray(min, wrapYoyo1(0, min.length - 1), max) : _conditionalReturn(value2, function(value) {
        value = (total + (value - min) % total) % total || 0;
        return min + (value > range ? total - value : value);
    });
}, _replaceRandom = function _replaceRandom(value) {
    //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
    var prev = 0, s = "", i, nums, end, isArray;
    while(~(i = value.indexOf("random(", prev))){
        end = value.indexOf(")", i);
        isArray = value.charAt(i + 7) === "[";
        nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
        s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 0.00001);
        prev = end + 1;
    }
    return s + value.substr(prev, value.length - prev);
}, mapRange = function mapRange(inMin, inMax, outMin, outMax, value3) {
    var inRange = inMax - inMin, outRange = outMax - outMin;
    return _conditionalReturn(value3, function(value) {
        return outMin + ((value - inMin) / inRange * outRange || 0);
    });
}, interpolate = function interpolate1(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function(p) {
        return (1 - p) * start + p * end;
    };
    if (!func) {
        var isString = _isString(start), master = {
        }, p1, i1, interpolators, l, il;
        progress === true && (mutate = 1) && (progress = null);
        if (isString) {
            start = {
                p: start
            };
            end = {
                p: end
            };
        } else if (_isArray(start) && !_isArray(end)) {
            interpolators = [];
            l = start.length;
            il = l - 2;
            for(i1 = 1; i1 < l; i1++)interpolators.push(interpolate1(start[i1 - 1], start[i1])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
            l--;
            func = function func(p) {
                p *= l;
                var i = Math.min(il, ~~p);
                return interpolators[i](p - i);
            };
            progress = end;
        } else if (!mutate) start = _merge(_isArray(start) ? [] : {
        }, start);
        if (!interpolators) {
            for(p1 in end)_addPropTween.call(master, start, p1, "get", end[p1]);
            func = function func(p) {
                return _renderPropTweens(p, master) || (isString ? start.p : start);
            };
        }
    }
    return _conditionalReturn(progress, func);
}, _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
    //used for nextLabel() and previousLabel()
    var labels = timeline.labels, min = _bigNum, p, distance, label;
    for(p in labels){
        distance = labels[p] - fromTime;
        if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
            label = p;
            min = distance;
        }
    }
    return label;
}, _callback = function _callback(animation, type, executeLazyFirst) {
    var v = animation.vars, callback = v[type], params, scope;
    if (!callback) return;
    params = v[type + "Params"];
    scope = v.callbackScope || animation;
    executeLazyFirst && _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
    return params ? callback.apply(scope, params) : callback.call(scope);
}, _interrupt = function _interrupt(animation) {
    _removeFromParent(animation);
    animation.scrollTrigger && animation.scrollTrigger.kill(false);
    animation.progress() < 1 && _callback(animation, "onInterrupt");
    return animation;
}, _quickTween, _createPlugin = function _createPlugin(config) {
    config = !config.name && config["default"] || config; //UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.
    var name = config.name, isFunc = _isFunction(config), Plugin = name && !isFunc && config.init ? function() {
        this._props = [];
    } : config, //in case someone passes in an object that's not a plugin, like CustomEase
    instanceDefaults = {
        init: _emptyFunc,
        render: _renderPropTweens,
        add: _addPropTween,
        kill: _killPropTweensOf,
        modifier: _addPluginModifier,
        rawVars: 0
    }, statics = {
        targetTest: 0,
        get: 0,
        getSetter: _getSetter,
        aliases: {
        },
        register: 0
    };
    _wake();
    if (config !== Plugin) {
        if (_plugins[name]) return;
        _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics)); //static methods
        _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics))); //instance methods
        _plugins[Plugin.prop = name] = Plugin;
        if (config.targetTest) {
            _harnessPlugins.push(Plugin);
            _reservedProps[name] = 1;
        }
        name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
    }
    _addGlobal(name, Plugin);
    config.register && config.register(gsap, Plugin, PropTween);
}, /*
 * --------------------------------------------------------------------------------------
 * COLORS
 * --------------------------------------------------------------------------------------
 */ _255 = 255, _colorLookup = {
    aqua: [
        0,
        _255,
        _255
    ],
    lime: [
        0,
        _255,
        0
    ],
    silver: [
        192,
        192,
        192
    ],
    black: [
        0,
        0,
        0
    ],
    maroon: [
        128,
        0,
        0
    ],
    teal: [
        0,
        128,
        128
    ],
    blue: [
        0,
        0,
        _255
    ],
    navy: [
        0,
        0,
        128
    ],
    white: [
        _255,
        _255,
        _255
    ],
    olive: [
        128,
        128,
        0
    ],
    yellow: [
        _255,
        _255,
        0
    ],
    orange: [
        _255,
        165,
        0
    ],
    gray: [
        128,
        128,
        128
    ],
    purple: [
        128,
        0,
        128
    ],
    green: [
        0,
        128,
        0
    ],
    red: [
        _255,
        0,
        0
    ],
    pink: [
        _255,
        192,
        203
    ],
    cyan: [
        0,
        _255,
        _255
    ],
    transparent: [
        _255,
        _255,
        _255,
        0
    ]
}, // possible future idea to replace the hard-coded color name values - put this in the ticker.wake() where we set the _doc:
// let ctx = _doc.createElement("canvas").getContext("2d");
// _forEachName("aqua,lime,silver,black,maroon,teal,blue,navy,white,olive,yellow,orange,gray,purple,green,red,pink,cyan", color => {ctx.fillStyle = color; _colorLookup[color] = splitColor(ctx.fillStyle)});
_hue = function _hue(h, m1, m2) {
    h += h < 0 ? 1 : h > 1 ? -1 : 0;
    return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + 0.5 | 0;
}, splitColor = function splitColor(v, toHSL, forceAlpha) {
    var a = !v ? _colorLookup.black : _isNumber(v) ? [
        v >> 16,
        v >> 8 & _255,
        v & _255
    ] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
    if (!a) {
        if (v.substr(-1) === ",") //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
        v = v.substr(0, v.length - 1);
        if (_colorLookup[v]) a = _colorLookup[v];
        else if (v.charAt(0) === "#") {
            if (v.length < 6) {
                //for shorthand like #9F0 or #9F0F (could have alpha)
                r = v.charAt(1);
                g = v.charAt(2);
                b = v.charAt(3);
                v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
            }
            if (v.length === 9) {
                // hex with alpha, like #fd5e53ff
                a = parseInt(v.substr(1, 6), 16);
                return [
                    a >> 16,
                    a >> 8 & _255,
                    a & _255,
                    parseInt(v.substr(7), 16) / 255
                ];
            }
            v = parseInt(v.substr(1), 16);
            a = [
                v >> 16,
                v >> 8 & _255,
                v & _255
            ];
        } else if (v.substr(0, 3) === "hsl") {
            a = wasHSL = v.match(_strictNumExp);
            if (!toHSL) {
                h = +a[0] % 360 / 360;
                s = +a[1] / 100;
                l = +a[2] / 100;
                g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
                r = l * 2 - g;
                a.length > 3 && (a[3] *= 1); //cast as number
                a[0] = _hue(h + 1 / 3, r, g);
                a[1] = _hue(h, r, g);
                a[2] = _hue(h - 1 / 3, r, g);
            } else if (~v.indexOf("=")) {
                //if relative values are found, just return the raw strings with the relative prefixes in place.
                a = v.match(_numExp);
                forceAlpha && a.length < 4 && (a[3] = 1);
                return a;
            }
        } else a = v.match(_strictNumExp) || _colorLookup.transparent;
        a = a.map(Number);
    }
    if (toHSL && !wasHSL) {
        r = a[0] / _255;
        g = a[1] / _255;
        b = a[2] / _255;
        max = Math.max(r, g, b);
        min = Math.min(r, g, b);
        l = (max + min) / 2;
        if (max === min) h = s = 0;
        else {
            d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
            h *= 60;
        }
        a[0] = ~~(h + 0.5);
        a[1] = ~~(s * 100 + 0.5);
        a[2] = ~~(l * 100 + 0.5);
    }
    forceAlpha && a.length < 4 && (a[3] = 1);
    return a;
}, _colorOrderData = function _colorOrderData(v1) {
    // strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
    var values = [], c = [], i = -1;
    v1.split(_colorExp).forEach(function(v) {
        var a = v.match(_numWithUnitExp) || [];
        values.push.apply(values, a);
        c.push(i += a.length + 1);
    });
    values.c = c;
    return values;
}, _formatColors = function _formatColors(s, toHSL, orderMatchData) {
    var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
    if (!colors) return s;
    colors = colors.map(function(color) {
        return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });
    if (orderMatchData) {
        d = _colorOrderData(s);
        c = orderMatchData.c;
        if (c.join(result) !== d.c.join(result)) {
            shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
            l = shell.length - 1;
            for(; i < l; i++)result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
        }
    }
    if (!shell) {
        shell = s.split(_colorExp);
        l = shell.length - 1;
        for(; i < l; i++)result += shell[i] + colors[i];
    }
    return result + shell[l];
}, _colorExp = function() {
    var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
    p;
    for(p in _colorLookup)s += "|" + p + "\\b";
    return new RegExp(s + ")", "gi");
}(), _hslExp = /hsl[a]?\(/, _colorStringFilter = function _colorStringFilter(a) {
    var combined = a.join(" "), toHSL;
    _colorExp.lastIndex = 0;
    if (_colorExp.test(combined)) {
        toHSL = _hslExp.test(combined);
        a[1] = _formatColors(a[1], toHSL);
        a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.
        return true;
    }
}, /*
 * --------------------------------------------------------------------------------------
 * TICKER
 * --------------------------------------------------------------------------------------
 */ _tickerActive, _ticker = function() {
    var _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1000 / 240, _nextTime = _gap, _listeners = [], _id, _req, _raf, _self, _delta, _i, _tick1 = function _tick(v) {
        var elapsed = _getTime() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
        elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
        _lastUpdate += elapsed;
        time = _lastUpdate - _startTime;
        overlap = time - _nextTime;
        if (overlap > 0 || manual) {
            frame = ++_self.frame;
            _delta = time - _self.time * 1000;
            _self.time = time = time / 1000;
            _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
            dispatch = 1;
        }
        manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
        if (dispatch) for(_i = 0; _i < _listeners.length; _i++)// use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
        _listeners[_i](time, _delta, frame, v);
    };
    _self = {
        time: 0,
        frame: 0,
        tick: function tick() {
            _tick1(true);
        },
        deltaRatio: function deltaRatio(fps) {
            return _delta / (1000 / (fps || 60));
        },
        wake: function wake() {
            if (_coreReady) {
                if (!_coreInitted && _windowExists()) {
                    _win = _coreInitted = window;
                    _doc = _win.document || {
                    };
                    _globals.gsap = gsap;
                    (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
                    _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {
                    });
                    _raf = _win.requestAnimationFrame;
                }
                _id && _self.sleep();
                _req = _raf || function(f) {
                    return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
                };
                _tickerActive = 1;
                _tick1(2);
            }
        },
        sleep: function sleep() {
            (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
            _tickerActive = 0;
            _req = _emptyFunc;
        },
        lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
            _lagThreshold = threshold || 1 / _tinyNum; //zero should be interpreted as basically unlimited
            _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
        },
        fps: function fps(_fps) {
            _gap = 1000 / (_fps || 240);
            _nextTime = _self.time * 1000 + _gap;
        },
        add: function add(callback) {
            _listeners.indexOf(callback) < 0 && _listeners.push(callback);
            _wake();
        },
        remove: function remove(callback, i) {
            ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
        },
        _listeners: _listeners
    };
    return _self;
}(), _wake = function _wake() {
    return !_tickerActive && _ticker.wake();
}, //also ensures the core classes are initialized.
/*
* -------------------------------------------------
* EASING
* -------------------------------------------------
*/ _easeMap = {
}, _customEaseExp = /^[\d.\-M][\d.\-,\s]/, _quotesExp = /["']/g, _parseObjectInString = function _parseObjectInString(value) {
    //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
    var obj = {
    }, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
    for(; i < l; i++){
        val = split[i];
        index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
        parsedVal = val.substr(0, index);
        obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
        key = val.substr(index + 1).trim();
    }
    return obj;
}, _valueInParentheses = function _valueInParentheses(value) {
    var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
    return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
}, _configEaseFromString = function _configEaseFromString(name) {
    //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
    var split = (name + "").split("("), ease = _easeMap[split[0]];
    return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [
        _parseObjectInString(split[1])
    ] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
}, _invertEase = function _invertEase(ease) {
    return function(p) {
        return 1 - ease(1 - p);
    };
}, // allow yoyoEase to be set in children and have those affected when the parent/ancestor timeline yoyos.
_propagateYoyoEase = function _propagateYoyoEase1(timeline, isYoyo) {
    var child = timeline._first, ease;
    while(child){
        if (child instanceof Timeline) _propagateYoyoEase1(child, isYoyo);
        else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
            if (child.timeline) _propagateYoyoEase1(child.timeline, isYoyo);
            else {
                ease = child._ease;
                child._ease = child._yEase;
                child._yEase = ease;
                child._yoyo = isYoyo;
            }
        }
        child = child._next;
    }
}, _parseEase = function _parseEase(ease, defaultEase) {
    return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
}, _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) easeOut = function easeOut(p) {
        return 1 - easeIn(1 - p);
    };
    if (easeInOut === void 0) easeInOut = function easeInOut(p) {
        return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
    };
    var ease = {
        easeIn: easeIn,
        easeOut: easeOut,
        easeInOut: easeInOut
    }, lowercaseName;
    _forEachName(names, function(name) {
        _easeMap[name] = _globals[name] = ease;
        _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
        for(var p in ease)_easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
    });
    return ease;
}, _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
    return function(p) {
        return p < 0.5 ? (1 - easeOut(1 - p * 2)) / 2 : 0.5 + easeOut((p - 0.5) * 2) / 2;
    };
}, _configElastic = function _configElastic1(type, amplitude1, period1) {
    var p1 = amplitude1 >= 1 ? amplitude1 : 1, //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
    p2 = (period1 || (type ? 0.3 : 0.45)) / (amplitude1 < 1 ? amplitude1 : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut(p) {
        return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
        return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    p2 = _2PI / p2; //precalculate to optimize
    ease.config = function(amplitude, period) {
        return _configElastic1(type, amplitude, period);
    };
    return ease;
}, _configBack = function _configBack1(type, overshoot1) {
    if (overshoot1 === void 0) overshoot1 = 1.70158;
    var easeOut = function easeOut(p) {
        return p ? --p * p * ((overshoot1 + 1) * p + overshoot1) + 1 : 0;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
        return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    ease.config = function(overshoot) {
        return _configBack1(type, overshoot);
    };
    return ease;
}; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };
_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
    var power = i < 5 ? i + 1 : i;
    _insertEase(name + ",Power" + (power - 1), i ? function(p) {
        return Math.pow(p, power);
    } : function(p) {
        return p;
    }, function(p) {
        return 1 - Math.pow(1 - p, power);
    }, function(p) {
        return p < 0.5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
    });
});
_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
(function(n, c) {
    var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut(p) {
        return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + 0.75 : p < n3 ? n * (p -= 2.25 / c) * p + 0.9375 : n * Math.pow(p - 2.625 / c, 2) + 0.984375;
    };
    _insertEase("Bounce", function(p) {
        return 1 - easeOut(1 - p);
    }, easeOut);
})(7.5625, 2.75);
_insertEase("Expo", function(p) {
    return p ? Math.pow(2, 10 * (p - 1)) : 0;
});
_insertEase("Circ", function(p) {
    return -(_sqrt(1 - p * p) - 1);
});
_insertEase("Sine", function(p) {
    return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});
_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
    config: function config(steps, immediateStart) {
        if (steps === void 0) steps = 1;
        var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
        return function(p) {
            return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
        };
    }
};
_defaults.ease = _easeMap["quad.out"];
_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
    return _callbackNames += name + "," + name + "Params,";
});
var GSCache = function GSCache(target, harness) {
    this.id = _gsID++;
    target._gsap = this;
    this.target = target;
    this.harness = harness;
    this.get = harness ? harness.get : _getProperty;
    this.set = harness ? harness.getSetter : _getSetter;
};
var Animation = /*#__PURE__*/ function() {
    function Animation1(vars) {
        this.vars = vars;
        this._delay = +vars.delay || 0;
        if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
            // TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
            this._rDelay = vars.repeatDelay || 0;
            this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
        }
        this._ts = 1;
        _setDuration(this, +vars.duration, 1, 1);
        this.data = vars.data;
        _tickerActive || _ticker.wake();
    }
    var _proto = Animation1.prototype;
    _proto.delay = function delay(value) {
        if (value || value === 0) {
            this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
            this._delay = value;
            return this;
        }
        return this._delay;
    };
    _proto.duration = function duration(value) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
    };
    _proto.totalDuration = function totalDuration(value) {
        if (!arguments.length) return this._tDur;
        this._dirty = 0;
        return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
    };
    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
        _wake();
        if (!arguments.length) return this._tTime;
        var parent = this._dp;
        if (parent && parent.smoothChildTiming && this._ts) {
            _alignPlayhead(this, _totalTime);
            !parent._dp || parent.parent || _postAddChecks(parent, this); // edge case: if this is a child of a timeline that already completed, for example, we must re-activate the parent.
            //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.
            while(parent && parent.parent){
                if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) parent.totalTime(parent._tTime, true);
                parent = parent.parent;
            }
            if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
            _addToTimeline(this._dp, this, this._start - this._delay);
        }
        if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
            // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
            this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause
            //if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
            //   this._lock = 1;
            _lazySafeRender(this, _totalTime, suppressEvents); //   this._lock = 0;
        //}
        }
        return this;
    };
    _proto.time = function time(value, suppressEvents) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
    };
    _proto.totalProgress = function totalProgress(value, suppressEvents) {
        return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
    };
    _proto.progress = function progress(value, suppressEvents) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
    };
    _proto.iteration = function iteration(value, suppressEvents) {
        var cycleDuration = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
    } // potential future addition:
    ;
    _proto.timeScale = function timeScale(value) {
        if (!arguments.length) return this._rts === -_tinyNum ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
        if (this._rts === value) return this;
        var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
        // future addition? Up side: fast and minimal file size. Down side: only works on this animation; if a timeline is reversed, for example, its childrens' onReverse wouldn't get called.
        //(+value < 0 && this._rts >= 0) && _callback(this, "onReverse", true);
        // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.
        this._rts = +value || 0;
        this._ts = this._ps || value === -_tinyNum ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.
        _recacheAncestors(this.totalTime(_clamp(-this._delay, this._tDur, tTime), true));
        _setEnd(this); // if parent.smoothChildTiming was false, the end time didn't get updated in the _alignPlayhead() method, so do it here.
        return this;
    };
    _proto.paused = function paused(value) {
        if (!arguments.length) return this._ps;
        if (this._ps !== value) {
            this._ps = value;
            if (value) {
                this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.
                this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
            } else {
                _wake();
                this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.
                this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum)); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
            }
        }
        return this;
    };
    _proto.startTime = function startTime(value) {
        if (arguments.length) {
            this._start = value;
            var parent = this.parent || this._dp;
            parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
            return this;
        }
        return this._start;
    };
    _proto.endTime = function endTime(includeRepeats) {
        return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    };
    _proto.rawTime = function rawTime(wrapRepeats) {
        var parent = this.parent || this._dp; // _dp = detached parent
        return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
    };
    _proto.globalTime = function globalTime(rawTime) {
        var animation = this, time = arguments.length ? rawTime : animation.rawTime();
        while(animation){
            time = animation._start + time / (animation._ts || 1);
            animation = animation._dp;
        }
        return time;
    };
    _proto.repeat = function repeat(value) {
        if (arguments.length) {
            this._repeat = value === Infinity ? -2 : value;
            return _onUpdateTotalDuration(this);
        }
        return this._repeat === -2 ? Infinity : this._repeat;
    };
    _proto.repeatDelay = function repeatDelay(value) {
        if (arguments.length) {
            var time = this._time;
            this._rDelay = value;
            _onUpdateTotalDuration(this);
            return time ? this.time(time) : this;
        }
        return this._rDelay;
    };
    _proto.yoyo = function yoyo(value) {
        if (arguments.length) {
            this._yoyo = value;
            return this;
        }
        return this._yoyo;
    };
    _proto.seek = function seek(position, suppressEvents) {
        return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
    };
    _proto.restart = function restart(includeDelay, suppressEvents) {
        return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
    };
    _proto.play = function play(from, suppressEvents) {
        from != null && this.seek(from, suppressEvents);
        return this.reversed(false).paused(false);
    };
    _proto.reverse = function reverse(from, suppressEvents) {
        from != null && this.seek(from || this.totalDuration(), suppressEvents);
        return this.reversed(true).paused(false);
    };
    _proto.pause = function pause(atTime, suppressEvents) {
        atTime != null && this.seek(atTime, suppressEvents);
        return this.paused(true);
    };
    _proto.resume = function resume() {
        return this.paused(false);
    };
    _proto.reversed = function reversed(value) {
        if (arguments.length) {
            !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.
            return this;
        }
        return this._rts < 0;
    };
    _proto.invalidate = function invalidate() {
        this._initted = this._act = 0;
        this._zTime = -_tinyNum;
        return this;
    };
    _proto.isActive = function isActive() {
        var parent = this.parent || this._dp, start = this._start, rawTime;
        return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
    };
    _proto.eventCallback = function eventCallback(type, callback, params) {
        var vars = this.vars;
        if (arguments.length > 1) {
            if (!callback) delete vars[type];
            else {
                vars[type] = callback;
                params && (vars[type + "Params"] = params);
                type === "onUpdate" && (this._onUpdate = callback);
            }
            return this;
        }
        return vars[type];
    };
    _proto.then = function then(onFulfilled) {
        var self = this;
        return new Promise(function(resolve) {
            var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve() {
                var _then = self.then;
                self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)
                _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
                resolve(f);
                self.then = _then;
            };
            if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) _resolve();
            else self._prom = _resolve;
        });
    };
    _proto.kill = function kill() {
        _interrupt(this);
    };
    return Animation1;
}();
_setDefaults(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -_tinyNum,
    _prom: 0,
    _ps: false,
    _rts: 1
});
var Timeline = /*#__PURE__*/ function(_Animation) {
    _inheritsLoose(Timeline1, _Animation);
    function Timeline1(vars, position) {
        var _this;
        if (vars === void 0) vars = {
        };
        _this = _Animation.call(this, vars) || this;
        _this.labels = {
        };
        _this.smoothChildTiming = !!vars.smoothChildTiming;
        _this.autoRemoveChildren = !!vars.autoRemoveChildren;
        _this._sort = _isNotFalse(vars.sortChildren);
        _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
        vars.reversed && _this.reverse();
        vars.paused && _this.paused(true);
        vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
        return _this;
    }
    var _proto2 = Timeline1.prototype;
    _proto2.to = function to(targets, vars, position) {
        _createTweenType(0, arguments, this);
        return this;
    };
    _proto2.from = function from(targets, vars, position) {
        _createTweenType(1, arguments, this);
        return this;
    };
    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
        _createTweenType(2, arguments, this);
        return this;
    };
    _proto2.set = function set(targets, vars, position) {
        vars.duration = 0;
        vars.parent = this;
        _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
        vars.immediateRender = !!vars.immediateRender;
        new Tween(targets, vars, _parsePosition(this, position), 1);
        return this;
    };
    _proto2.call = function call(callback, params, position) {
        return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
    } //ONLY for backward compatibility! Maybe delete?
    ;
    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
        vars.duration = duration;
        vars.stagger = vars.stagger || stagger;
        vars.onComplete = onCompleteAll;
        vars.onCompleteParams = onCompleteAllParams;
        vars.parent = this;
        new Tween(targets, vars, _parsePosition(this, position));
        return this;
    };
    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
        vars.runBackwards = 1;
        _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
        return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
        toVars.startAt = fromVars;
        _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
        return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.render = function render(totalTime, suppressEvents, force) {
        var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), // if a paused timeline is resumed (or its _start is updated for another reason...which rounds it), that could result in the playhead shifting a **tiny** amount and a zero-duration child at that spot may get rendered at a different ratio, like its totalTime in render() may be 1e-17 instead of 0, for example.
        crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
        this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
        if (tTime !== this._tTime || force || crossingStart) {
            if (prevTime !== this._time && dur) {
                //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
                tTime += this._time - prevTime;
                totalTime += this._time - prevTime;
            }
            time = tTime;
            prevStart = this._start;
            timeScale = this._ts;
            prevPaused = !timeScale;
            if (crossingStart) {
                dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.
                (totalTime || !suppressEvents) && (this._zTime = totalTime);
            }
            if (this._repeat) {
                //adjust the time for repeats and yoyos
                yoyo = this._yoyo;
                cycleDuration = dur + this._rDelay;
                if (this._repeat < -1 && totalTime < 0) return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)
                if (tTime === tDur) {
                    // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
                    iteration = this._repeat;
                    time = dur;
                } else {
                    iteration = ~~(tTime / cycleDuration);
                    if (iteration && iteration === tTime / cycleDuration) {
                        time = dur;
                        iteration--;
                    }
                    time > dur && (time = dur);
                }
                prevIteration = _animationCycle(this._tTime, cycleDuration);
                !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://greensock.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005
                if (yoyo && iteration & 1) {
                    time = dur - time;
                    isYoyo = 1;
                }
                /*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
        */ if (iteration !== prevIteration && !this._lock) {
                    var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
                    iteration < prevIteration && (rewinding = !rewinding);
                    prevTime = rewinding ? 0 : dur;
                    this._lock = 1;
                    this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
                    this._tTime = tTime; // if a user gets the iteration() inside the onRepeat, for example, it should be accurate.
                    !suppressEvents && this.parent && _callback(this, "onRepeat");
                    this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
                    if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) // if prevTime is 0 and we render at the very end, _time will be the end, thus won't match. So in this edge case, prevTime won't match _time but that's okay. If it gets killed in the onRepeat, eject as well.
                    return this;
                    dur = this._dur; // in case the duration changed in the onRepeat
                    tDur = this._tDur;
                    if (doesWrap) {
                        this._lock = 2;
                        prevTime = rewinding ? dur : -0.0001;
                        this.render(prevTime, true);
                        this.vars.repeatRefresh && !isYoyo && this.invalidate();
                    }
                    this._lock = 0;
                    if (!this._ts && !prevPaused) return this;
                     //in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.
                    _propagateYoyoEase(this, isYoyo);
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2) {
                pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
                if (pauseTween) tTime -= time - (time = pauseTween._start);
            }
            this._tTime = tTime;
            this._time = time;
            this._act = !timeScale; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.
            if (!this._initted) {
                this._onUpdate = this.vars.onUpdate;
                this._initted = 1;
                this._zTime = totalTime;
                prevTime = 0; // upon init, the playhead should always go forward; someone could invalidate() a completed timeline and then if they restart(), that would make child tweens render in reverse order which could lock in the wrong starting values if they build on each other, like tl.to(obj, {x: 100}).to(obj, {x: 0}).
            }
            if (!prevTime && time && !suppressEvents) {
                _callback(this, "onStart");
                if (this._tTime !== tTime) // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
                return this;
            }
            if (time >= prevTime && totalTime >= 0) {
                child = this._first;
                while(child){
                    next = child._next;
                    if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
                        if (child.parent !== this) // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
                        return this.render(totalTime, suppressEvents, force);
                        child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
                        if (time !== this._time || !this._ts && !prevPaused) {
                            //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
                            pauseTween = 0;
                            next && (tTime += this._zTime = -_tinyNum); // it didn't finish rendering, so flag zTime as negative so that so that the next time render() is called it'll be forced (to render any remaining children)
                            break;
                        }
                    }
                    child = next;
                }
            } else {
                child = this._last;
                var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.
                while(child){
                    next = child._prev;
                    if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
                        if (child.parent !== this) // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
                        return this.render(totalTime, suppressEvents, force);
                        child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force);
                        if (time !== this._time || !this._ts && !prevPaused) {
                            //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
                            pauseTween = 0;
                            next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)
                            break;
                        }
                    }
                    child = next;
                }
            }
            if (pauseTween && !suppressEvents) {
                this.pause();
                pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
                if (this._ts) {
                    //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
                    this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.
                    _setEnd(this);
                    return this.render(totalTime, suppressEvents, force);
                }
            }
            this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
            if (tTime === tDur && tDur >= this.totalDuration() || !tTime && prevTime) {
                if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
                    if (!this._lock) {
                        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.
                        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                            _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                        }
                    }
                }
            }
        }
        return this;
    };
    _proto2.add = function add(child, position) {
        var _this2 = this;
        _isNumber(position) || (position = _parsePosition(this, position, child));
        if (!(child instanceof Animation)) {
            if (_isArray(child)) {
                child.forEach(function(obj) {
                    return _this2.add(obj, position);
                });
                return this;
            }
            if (_isString(child)) return this.addLabel(child, position);
            if (_isFunction(child)) child = Tween.delayedCall(0, child);
            else return this;
        }
        return this !== child ? _addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
    };
    _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
        if (nested === void 0) nested = true;
        if (tweens === void 0) tweens = true;
        if (timelines === void 0) timelines = true;
        if (ignoreBeforeTime === void 0) ignoreBeforeTime = -_bigNum;
        var a = [], child = this._first;
        while(child){
            if (child._start >= ignoreBeforeTime) {
                if (child instanceof Tween) tweens && a.push(child);
                else {
                    timelines && a.push(child);
                    nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
                }
            }
            child = child._next;
        }
        return a;
    };
    _proto2.getById = function getById(id) {
        var animations = this.getChildren(1, 1, 1), i = animations.length;
        while(i--){
            if (animations[i].vars.id === id) return animations[i];
        }
    };
    _proto2.remove = function remove(child) {
        if (_isString(child)) return this.removeLabel(child);
        if (_isFunction(child)) return this.killTweensOf(child);
        _removeLinkedListItem(this, child);
        if (child === this._recent) this._recent = this._last;
        return _uncache(this);
    };
    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
        if (!arguments.length) return this._tTime;
        this._forcing = 1;
        if (!this._dp && this._ts) //special case for the global timeline (or any other that has no parent or detached parent).
        this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
        _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
        this._forcing = 0;
        return this;
    };
    _proto2.addLabel = function addLabel(label, position) {
        this.labels[label] = _parsePosition(this, position);
        return this;
    };
    _proto2.removeLabel = function removeLabel(label) {
        delete this.labels[label];
        return this;
    };
    _proto2.addPause = function addPause(position, callback, params) {
        var t = Tween.delayedCall(0, callback || _emptyFunc, params);
        t.data = "isPause";
        this._hasPause = 1;
        return _addToTimeline(this, t, _parsePosition(this, position));
    };
    _proto2.removePause = function removePause(position) {
        var child = this._first;
        position = _parsePosition(this, position);
        while(child){
            if (child._start === position && child.data === "isPause") _removeFromParent(child);
            child = child._next;
        }
    };
    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
        var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
        while(i--)_overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
        return this;
    };
    _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
        var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), // a number is interpreted as a global time. If the animation spans
        children;
        while(child){
            if (child instanceof Tween) {
                if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
                a.push(child);
            } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) a.push.apply(a, children);
            child = child._next;
        }
        return a;
    } // potential future feature - targets() on timelines
    ;
    _proto2.tweenTo = function tweenTo(position, vars) {
        vars = vars || {
        };
        var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
            ease: vars.ease || "none",
            lazy: false,
            immediateRender: false,
            time: endTime,
            overwrite: "auto",
            duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
            onStart: function onStart() {
                tl.pause();
                if (!initted) {
                    var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
                    tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
                    initted = 1;
                }
                _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
            }
        }, vars));
        return immediateRender ? tween.render(0) : tween;
    };
    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
        return this.tweenTo(toPosition, _setDefaults({
            startAt: {
                time: _parsePosition(this, fromPosition)
            }
        }, vars));
    };
    _proto2.recent = function recent() {
        return this._recent;
    };
    _proto2.nextLabel = function nextLabel(afterTime) {
        if (afterTime === void 0) afterTime = this._time;
        return _getLabelInDirection(this, _parsePosition(this, afterTime));
    };
    _proto2.previousLabel = function previousLabel(beforeTime) {
        if (beforeTime === void 0) beforeTime = this._time;
        return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
    };
    _proto2.currentLabel = function currentLabel(value) {
        return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
    };
    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
        if (ignoreBeforeTime === void 0) ignoreBeforeTime = 0;
        var child = this._first, labels = this.labels, p;
        while(child){
            if (child._start >= ignoreBeforeTime) {
                child._start += amount;
                child._end += amount;
            }
            child = child._next;
        }
        if (adjustLabels) {
            for(p in labels)if (labels[p] >= ignoreBeforeTime) labels[p] += amount;
        }
        return _uncache(this);
    };
    _proto2.invalidate = function invalidate() {
        var child = this._first;
        this._lock = 0;
        while(child){
            child.invalidate();
            child = child._next;
        }
        return _Animation.prototype.invalidate.call(this);
    };
    _proto2.clear = function clear(includeLabels) {
        if (includeLabels === void 0) includeLabels = true;
        var child = this._first, next;
        while(child){
            next = child._next;
            this.remove(child);
            child = next;
        }
        this._dp && (this._time = this._tTime = this._pTime = 0);
        includeLabels && (this.labels = {
        });
        return _uncache(this);
    };
    _proto2.totalDuration = function totalDuration(value) {
        var max = 0, self = this, child = self._last, prevStart = _bigNum, prev, start, parent;
        if (arguments.length) return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
        if (self._dirty) {
            parent = self.parent;
            while(child){
                prev = child._prev; //record it here in case the tween changes position in the sequence...
                child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.
                start = child._start;
                if (start > prevStart && self._sort && child._ts && !self._lock) {
                    //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
                    self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().
                    _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
                } else prevStart = start;
                if (start < 0 && child._ts) {
                    //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
                    max -= start;
                    if (!parent && !self._dp || parent && parent.smoothChildTiming) {
                        self._start += start / self._ts;
                        self._time -= start;
                        self._tTime -= start;
                    }
                    self.shiftChildren(-start, false, -Infinity);
                    prevStart = 0;
                }
                child._end > max && child._ts && (max = child._end);
                child = prev;
            }
            _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
            self._dirty = 0;
        }
        return self._tDur;
    };
    Timeline1.updateRoot = function updateRoot(time) {
        if (_globalTimeline._ts) {
            _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
            _lastRenderedFrame = _ticker.frame;
        }
        if (_ticker.frame >= _nextGCFrame) {
            _nextGCFrame += _config.autoSleep || 120;
            var child = _globalTimeline._first;
            if (!child || !child._ts) {
                if (_config.autoSleep && _ticker._listeners.length < 2) {
                    while(child && !child._ts)child = child._next;
                    child || _ticker.sleep();
                }
            }
        }
    };
    return Timeline1;
}(Animation);
_setDefaults(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
    //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
    pt.b = start;
    pt.e = end;
    start += ""; //ensure values are strings
    end += "";
    if (hasRandom = ~end.indexOf("random(")) end = _replaceRandom(end);
    if (stringFilter) {
        a = [
            start,
            end
        ];
        stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.
        start = a[0];
        end = a[1];
    }
    startNums = start.match(_complexStringNumExp) || [];
    while(result = _complexStringNumExp.exec(end)){
        endNum = result[0];
        chunk = end.substring(index, result.index);
        if (color) color = (color + 1) % 5;
        else if (chunk.substr(-5) === "rgba(") color = 1;
        if (endNum !== startNums[matchIndex++]) {
            startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.
            pt._pt = {
                _next: pt._pt,
                p: chunk || matchIndex === 1 ? chunk : ",",
                //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
                s: startNum,
                c: endNum.charAt(1) === "=" ? parseFloat(endNum.substr(2)) * (endNum.charAt(0) === "-" ? -1 : 1) : parseFloat(endNum) - startNum,
                m: color && color < 4 ? Math.round : 0
            };
            index = _complexStringNumExp.lastIndex;
        }
    }
    pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
    pt.fp = funcParam;
    if (_relExp.test(end) || hasRandom) pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
    this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    return pt;
}, _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam) {
    _isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
    if (_isString(end)) {
        if (~end.indexOf("random(")) end = _replaceRandom(end);
        if (end.charAt(1) === "=") {
            pt = parseFloat(parsedStart) + parseFloat(end.substr(2)) * (end.charAt(0) === "-" ? -1 : 1) + (getUnit(parsedStart) || 0);
            if (pt || pt === 0) // to avoid isNaN, like if someone passes in a value like "!= whatever"
            end = pt;
        }
    }
    if (parsedStart !== end) {
        if (!isNaN(parsedStart * end) && end !== "") {
            // fun fact: any number multiplied by "" is evaluated as the number 0!
            pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
            funcParam && (pt.fp = funcParam);
            modifier && pt.modifier(modifier, this, target);
            return this._pt = pt;
        }
        !currentValue && !(prop in target) && _missingPlugin(prop, end);
        return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
    }
}, //creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
_processVars = function _processVars(vars, index, target, targets, tween) {
    _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
    if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
    var copy = {
    }, p;
    for(p in vars)copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
    return copy;
}, _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
    var plugin, pt, ptLookup, i;
    if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
        tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
        if (tween !== _quickTween) {
            ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.
            i = plugin._props.length;
            while(i--)ptLookup[plugin._props[i]] = pt;
        }
    }
    return plugin;
}, _overwritingTween, //store a reference temporarily so we can avoid overwriting itself.
_initTween = function _initTween1(tween, time) {
    var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, onUpdateParams = vars.onUpdateParams, callbackScope = vars.callbackScope, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.parent._targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = _parseEase(ease, _defaults.ease);
    tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
    if (yoyoEase && tween._yoyo && !tween._repeat) {
        //there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
        yoyoEase = tween._yEase;
        tween._yEase = tween._ease;
        tween._ease = yoyoEase;
    }
    tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.
    if (!tl || keyframes && !vars.stagger) {
        //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
        harness = targets[0] ? _getCache(targets[0]).harness : 0;
        harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.
        cleanVars = _copyExcluding(vars, _reservedProps);
        prevStartAt && _removeFromParent(prevStartAt.render(-1, true));
        if (startAt) {
            _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
                data: "isStart",
                overwrite: false,
                parent: parent,
                immediateRender: true,
                lazy: _isNotFalse(lazy),
                startAt: null,
                delay: 0,
                onUpdate: onUpdate,
                onUpdateParams: onUpdateParams,
                callbackScope: callbackScope,
                stagger: 0
            }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);
            time < 0 && !immediateRender && !autoRevert && tween._startAt.render(-1, true); // rare edge case, like if a render is forced in the negative direction of a non-initted tween.
            if (immediateRender) {
                time > 0 && !autoRevert && (tween._startAt = 0); //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in Timeline instances where immediateRender was false or when autoRevert is explicitly set to true.
                if (dur && time <= 0) {
                    time && (tween._zTime = time);
                    return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
                } // if (time > 0) {
            // 	autoRevert || (tween._startAt = 0); //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in Timeline instances where immediateRender was false or when autoRevert is explicitly set to true.
            // } else if (dur && !(time < 0 && prevStartAt)) {
            // 	time && (tween._zTime = time);
            // 	return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
            // }
            } else if (autoRevert === false) tween._startAt = 0;
        } else if (runBackwards && dur) {
            //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
            if (prevStartAt) !autoRevert && (tween._startAt = 0);
            else {
                time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0
                p = _setDefaults({
                    overwrite: false,
                    data: "isFromStart",
                    //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
                    lazy: immediateRender && _isNotFalse(lazy),
                    immediateRender: immediateRender,
                    //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
                    stagger: 0,
                    parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y:gsap.utils.wrap([-100,100])})
                }, cleanVars);
                harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})
                _removeFromParent(tween._startAt = Tween.set(targets, p));
                time < 0 && tween._startAt.render(-1, true); // rare edge case, like if a render is forced in the negative direction of a non-initted from() tween.
                tween._zTime = time;
                if (!immediateRender) _initTween1(tween._startAt, _tinyNum); //ensures that the initial values are recorded
                else if (!time) return;
            }
        }
        tween._pt = 0;
        lazy = dur && _isNotFalse(lazy) || lazy && !dur;
        for(i = 0; i < targets.length; i++){
            target = targets[i];
            gsData = target._gsap || _harness(targets)[i]._gsap;
            tween._ptLookup[i] = ptLookup = {
            };
            _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)
            index = fullTargets === targets ? i : fullTargets.indexOf(target);
            if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
                tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
                plugin._props.forEach(function(name) {
                    ptLookup[name] = pt;
                });
                plugin.priority && (hasPriority = 1);
            }
            if (!harness || harnessVars) {
                for(p in cleanVars)if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) plugin.priority && (hasPriority = 1);
                else ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
            }
            tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
            if (autoOverwrite && tween._pt) {
                _overwritingTween = tween;
                _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time)); // make sure the overwriting doesn't overwrite THIS tween!!!
                overwritten = !tween.parent;
                _overwritingTween = 0;
            }
            tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
        }
        hasPriority && _sortPropTweensByPriority(tween);
        tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
    }
    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.
    keyframes && time <= 0 && tl.render(_bigNum, true, true); // if there's a 0% keyframe, it'll render in the "before" state for any staggered/delayed animations thus when the following tween initializes, it'll use the "before" state instead of the "after" state as the initial values.
}, _addAliasesToVars = function _addAliasesToVars(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
    if (!propertyAliases) return vars;
    copy = _merge({
    }, vars);
    for(p in propertyAliases)if (p in copy) {
        aliases = propertyAliases[p].split(",");
        i = aliases.length;
        while(i--)copy[aliases[i]] = copy[p];
    }
    return copy;
}, // parses multiple formats, like {"0%": {x: 100}, {"50%": {x: -20}} and { x: {"0%": 100, "50%": -20} }, and an "ease" can be set on any object. We populate an "allProps" object with an Array for each property, like {x: [{}, {}], y:[{}, {}]} with data for each property tween. The objects have a "t" (time), "v", (value), and "e" (ease) property. This allows us to piece together a timeline later.
_parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
    var ease = obj.ease || easeEach || "power1.inOut", p, a;
    if (_isArray(obj)) {
        a = allProps[prop] || (allProps[prop] = []); // t = time (out of 100), v = value, e = ease
        obj.forEach(function(value, i) {
            return a.push({
                t: i / (obj.length - 1) * 100,
                v: value,
                e: ease
            });
        });
    } else for(p in obj){
        a = allProps[p] || (allProps[p] = []);
        p === "ease" || a.push({
            t: parseFloat(prop),
            v: obj[p],
            e: ease
        });
    }
}, _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
    return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
}, _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase", _staggerPropsToSkip = {
};
_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
    return _staggerPropsToSkip[name] = 1;
});
var Tween = /*#__PURE__*/ function(_Animation2) {
    _inheritsLoose(Tween1, _Animation2);
    function Tween1(targets, vars, position, skipInherit) {
        var _this3;
        if (typeof vars === "number") {
            position.duration = vars;
            vars = position;
            position = null;
        }
        _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
        var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [
            targets
        ] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
        _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
        _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property
        _this3._overwrite = overwrite;
        if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
            vars = _this3.vars;
            tl = _this3.timeline = new Timeline({
                data: "nested",
                defaults: defaults || {
                }
            });
            tl.kill();
            tl.parent = tl._dp = _assertThisInitialized(_this3);
            tl._start = 0;
            if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
                l = parsedTargets.length;
                staggerFunc = stagger && distribute(stagger);
                if (_isObject(stagger)) {
                    //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
                    for(p in stagger)if (~_staggerTweenProps.indexOf(p)) {
                        staggerVarsToMerge || (staggerVarsToMerge = {
                        });
                        staggerVarsToMerge[p] = stagger[p];
                    }
                }
                for(i = 0; i < l; i++){
                    copy = _copyExcluding(vars, _staggerPropsToSkip);
                    copy.stagger = 0;
                    yoyoEase && (copy.yoyoEase = yoyoEase);
                    staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
                    curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.
                    copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
                    copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
                    if (!stagger && l === 1 && copy.delay) {
                        // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
                        _this3._delay = delay = copy.delay;
                        _this3._start += delay;
                        copy.delay = 0;
                    }
                    tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
                    tl._ease = _easeMap.none;
                }
                tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
            } else if (keyframes) {
                _inheritDefaults(_setDefaults(tl.vars.defaults, {
                    ease: "none"
                }));
                tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
                var time = 0, a1, kf, v;
                if (_isArray(keyframes)) keyframes.forEach(function(frame) {
                    return tl.to(parsedTargets, frame, ">");
                });
                else {
                    copy = {
                    };
                    for(p in keyframes)p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
                    for(p in copy){
                        a1 = copy[p].sort(function(a, b) {
                            return a.t - b.t;
                        });
                        time = 0;
                        for(i = 0; i < a1.length; i++){
                            kf = a1[i];
                            v = {
                                ease: kf.e,
                                duration: (kf.t - (i ? a1[i - 1].t : 0)) / 100 * duration
                            };
                            v[p] = kf.v;
                            tl.to(parsedTargets, v, time);
                            time += v.duration;
                        }
                    }
                    tl.duration() < duration && tl.to({
                    }, {
                        duration: duration - tl.duration()
                    }); // in case keyframes didn't go to 100%
                }
            }
            duration || _this3.duration(duration = tl.duration());
        } else _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
        if (overwrite === true && !_suppressOverwrites) {
            _overwritingTween = _assertThisInitialized(_this3);
            _globalTimeline.killTweensOf(parsedTargets);
            _overwritingTween = 0;
        }
        _addToTimeline(parent, _assertThisInitialized(_this3), position);
        vars.reversed && _this3.reverse();
        vars.paused && _this3.paused(true);
        if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
            _this3._tTime = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
            _this3.render(Math.max(0, -delay)); //in case delay is negative
        }
        scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
        return _this3;
    }
    var _proto3 = Tween1.prototype;
    _proto3.render = function render(totalTime, suppressEvents, force) {
        var prevTime = this._time, tDur = this._tDur, dur = this._dur, tTime = totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline, yoyoEase;
        if (!dur) _renderZeroDurationTween(this, totalTime, suppressEvents, force);
        else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== totalTime < 0) {
            //this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
            time = tTime;
            timeline = this.timeline;
            if (this._repeat) {
                //adjust the time for repeats and yoyos
                cycleDuration = dur + this._rDelay;
                if (this._repeat < -1 && totalTime < 0) return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)
                if (tTime === tDur) {
                    // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
                    iteration = this._repeat;
                    time = dur;
                } else {
                    iteration = ~~(tTime / cycleDuration);
                    if (iteration && iteration === tTime / cycleDuration) {
                        time = dur;
                        iteration--;
                    }
                    time > dur && (time = dur);
                }
                isYoyo = this._yoyo && iteration & 1;
                if (isYoyo) {
                    yoyoEase = this._yEase;
                    time = dur - time;
                }
                prevIteration = _animationCycle(this._tTime, cycleDuration);
                if (time === prevTime && !force && this._initted) //could be during the repeatDelay part. No need to render and fire callbacks.
                return this;
                if (iteration !== prevIteration) {
                    timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo); //repeatRefresh functionality
                    if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
                        this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.
                        this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
                    }
                }
            }
            if (!this._initted) {
                if (_attemptInitTween(this, totalTime < 0 ? totalTime : time, force, suppressEvents)) {
                    this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.
                    return this;
                }
                if (dur !== this._dur) // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
                return this.render(totalTime, suppressEvents, force);
            }
            this._tTime = tTime;
            this._time = time;
            if (!this._act && this._ts) {
                this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.
                this._lazy = 0;
            }
            this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
            if (this._from) this.ratio = ratio = 1 - ratio;
            if (time && !prevTime && !suppressEvents) {
                _callback(this, "onStart");
                if (this._tTime !== tTime) // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
                return this;
            }
            pt = this._pt;
            while(pt){
                pt.r(ratio, pt.d);
                pt = pt._next;
            }
            timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
            if (this._onUpdate && !suppressEvents) {
                totalTime < 0 && this._startAt && this._startAt.render(totalTime, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
                _callback(this, "onUpdate");
            }
            this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
            if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
                totalTime < 0 && this._startAt && !this._onUpdate && this._startAt.render(totalTime, true, true);
                (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.
                if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
                    // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
                    _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
                    this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                }
            }
        }
        return this;
    };
    _proto3.targets = function targets() {
        return this._targets;
    };
    _proto3.invalidate = function invalidate() {
        this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0;
        this._ptLookup = [];
        this.timeline && this.timeline.invalidate();
        return _Animation2.prototype.invalidate.call(this);
    };
    _proto3.kill = function kill(targets, vars) {
        if (vars === void 0) vars = "all";
        if (!targets && (!vars || vars === "all")) {
            this._lazy = this._pt = 0;
            return this.parent ? _interrupt(this) : this;
        }
        if (this.timeline) {
            var tDur = this.timeline.totalDuration();
            this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this); // if nothing is left tweening, interrupt.
            this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.
            return this;
        }
        var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
        if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
            vars === "all" && (this._pt = 0);
            return _interrupt(this);
        }
        overwrittenProps = this._op = this._op || [];
        if (vars !== "all") {
            //so people can pass in a comma-delimited list of property names
            if (_isString(vars)) {
                p = {
                };
                _forEachName(vars, function(name) {
                    return p[name] = 1;
                });
                vars = p;
            }
            vars = _addAliasesToVars(parsedTargets, vars);
        }
        i = parsedTargets.length;
        while(i--)if (~killingTargets.indexOf(parsedTargets[i])) {
            curLookup = propTweenLookup[i];
            if (vars === "all") {
                overwrittenProps[i] = vars;
                props = curLookup;
                curOverwriteProps = {
                };
            } else {
                curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {
                };
                props = vars;
            }
            for(p in props){
                pt = curLookup && curLookup[p];
                if (pt) {
                    if (!("kill" in pt.d) || pt.d.kill(p) === true) _removeLinkedListItem(this, pt, "_pt");
                    delete curLookup[p];
                }
                if (curOverwriteProps !== "all") curOverwriteProps[p] = 1;
            }
        }
        this._initted && !this._pt && firstPT && _interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.
        return this;
    };
    Tween1.to = function to(targets, vars) {
        return new Tween1(targets, vars, arguments[2]);
    };
    Tween1.from = function from(targets, vars) {
        return _createTweenType(1, arguments);
    };
    Tween1.delayedCall = function delayedCall(delay, callback, params, scope) {
        return new Tween1(callback, 0, {
            immediateRender: false,
            lazy: false,
            overwrite: false,
            delay: delay,
            onComplete: callback,
            onReverseComplete: callback,
            onCompleteParams: params,
            onReverseCompleteParams: params,
            callbackScope: scope
        });
    };
    Tween1.fromTo = function fromTo(targets, fromVars, toVars) {
        return _createTweenType(2, arguments);
    };
    Tween1.set = function set(targets, vars) {
        vars.duration = 0;
        vars.repeatDelay || (vars.repeat = 0);
        return new Tween1(targets, vars);
    };
    Tween1.killTweensOf = function killTweensOf(targets, props, onlyActive) {
        return _globalTimeline.killTweensOf(targets, props, onlyActive);
    };
    return Tween1;
}(Animation);
_setDefaults(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
}); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.
_forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
    Tween[name] = function() {
        var tl = new Timeline(), params = _slice.call(arguments, 0);
        params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
        return tl[name].apply(tl, params);
    };
});
/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */ var _setterPlain = function _setterPlain(target, property, value) {
    return target[property] = value;
}, _setterFunc = function _setterFunc(target, property, value) {
    return target[property](value);
}, _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
    return target[property](data.fp, value);
}, _setterAttribute = function _setterAttribute(target, property, value) {
    return target.setAttribute(property, value);
}, _getSetter = function _getSetter(target, property) {
    return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
}, _renderPlain = function _renderPlain(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
}, _renderBoolean = function _renderBoolean(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
}, _renderComplexString = function _renderComplexString(ratio, data) {
    var pt = data._pt, s = "";
    if (!ratio && data.b) //b = beginning string
    s = data.b;
    else if (ratio === 1 && data.e) //e = ending string
    s = data.e;
    else {
        while(pt){
            s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.
            pt = pt._next;
        }
        s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
    }
    data.set(data.t, data.p, s, data);
}, _renderPropTweens = function _renderPropTweens(ratio, data) {
    var pt = data._pt;
    while(pt){
        pt.r(ratio, pt.d);
        pt = pt._next;
    }
}, _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
    var pt = this._pt, next;
    while(pt){
        next = pt._next;
        pt.p === property && pt.modifier(modifier, tween, target);
        pt = next;
    }
}, _killPropTweensOf = function _killPropTweensOf(property) {
    var pt = this._pt, hasNonDependentRemaining, next;
    while(pt){
        next = pt._next;
        if (pt.p === property && !pt.op || pt.op === property) _removeLinkedListItem(this, pt, "_pt");
        else if (!pt.dep) hasNonDependentRemaining = 1;
        pt = next;
    }
    return !hasNonDependentRemaining;
}, _setterWithModifier = function _setterWithModifier(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
}, _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
    var pt = parent._pt, next, pt2, first, last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)
    while(pt){
        next = pt._next;
        pt2 = first;
        while(pt2 && pt2.pr > pt.pr)pt2 = pt2._next;
        if (pt._prev = pt2 ? pt2._prev : last) pt._prev._next = pt;
        else first = pt;
        if (pt._next = pt2) pt2._prev = pt;
        else last = pt;
        pt = next;
    }
    parent._pt = first;
}; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)
var PropTween = /*#__PURE__*/ function() {
    function PropTween1(next, target, prop, start, change, renderer, data, setter, priority) {
        this.t = target;
        this.s = start;
        this.c = change;
        this.p = prop;
        this.r = renderer || _renderPlain;
        this.d = data || this;
        this.set = setter || _setterPlain;
        this.pr = priority || 0;
        this._next = next;
        if (next) next._prev = this;
    }
    var _proto4 = PropTween1.prototype;
    _proto4.modifier = function modifier(func, tween, target) {
        this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)
        this.set = _setterWithModifier;
        this.m = func;
        this.mt = target; //modifier target
        this.tween = tween;
    };
    return PropTween1;
}(); //Initialization tasks
_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
    return _reservedProps[name] = 1;
});
_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
    sortChildren: false,
    defaults: _defaults,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;
/*
 * --------------------------------------------------------------------------------------
 * GSAP
 * --------------------------------------------------------------------------------------
 */ var _gsap = {
    registerPlugin: function registerPlugin() {
        for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
        args.forEach(function(config) {
            return _createPlugin(config);
        });
    },
    timeline: function timeline(vars) {
        return new Timeline(vars);
    },
    getTweensOf: function getTweensOf(targets, onlyActive) {
        return _globalTimeline.getTweensOf(targets, onlyActive);
    },
    getProperty: function getProperty(target, property1, unit1, uncache1) {
        _isString(target) && (target = toArray(target)[0]); //in case selector text or an array is passed in
        var getter = _getCache(target || {
        }).get, format = unit1 ? _passThrough : _numericIfPossible;
        unit1 === "native" && (unit1 = "");
        return !target ? target : !property1 ? function(property, unit, uncache) {
            return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
        } : format((_plugins[property1] && _plugins[property1].get || getter)(target, property1, unit1, uncache1));
    },
    quickSetter: function quickSetter(target, property, unit) {
        target = toArray(target);
        if (target.length > 1) {
            var setters = target.map(function(t) {
                return gsap.quickSetter(t, property, unit);
            }), l = setters.length;
            return function(value) {
                var i = l;
                while(i--)setters[i](value);
            };
        }
        target = target[0] || {
        };
        var Plugin = _plugins[property], cache = _getCache(target), p2 = cache.harness && (cache.harness.aliases || {
        })[property] || property, // in case it's an alias, like "rotate" for "rotation".
        setter = Plugin ? function(value) {
            var p = new Plugin();
            _quickTween._pt = 0;
            p.init(target, unit ? value + unit : value, _quickTween, 0, [
                target
            ]);
            p.render(1, p);
            _quickTween._pt && _renderPropTweens(1, _quickTween);
        } : cache.set(target, p2);
        return Plugin ? setter : function(value) {
            return setter(target, p2, unit ? value + unit : value, cache, 1);
        };
    },
    isTweening: function isTweening(targets) {
        return _globalTimeline.getTweensOf(targets, true).length > 0;
    },
    defaults: function defaults(value) {
        value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
        return _mergeDeep(_defaults, value || {
        });
    },
    config: function config(value) {
        return _mergeDeep(_config, value || {
        });
    },
    registerEffect: function registerEffect(_ref3) {
        var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
        (plugins || "").split(",").forEach(function(pluginName) {
            return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
        });
        _effects[name] = function(targets, vars, tl) {
            return effect(toArray(targets), _setDefaults(vars || {
            }, defaults), tl);
        };
        if (extendTimeline) Timeline.prototype[name] = function(targets, vars, position) {
            return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {
            }, this), position);
        };
    },
    registerEase: function registerEase(name, ease) {
        _easeMap[name] = _parseEase(ease);
    },
    parseEase: function parseEase(ease, defaultEase) {
        return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
    },
    getById: function getById(id) {
        return _globalTimeline.getById(id);
    },
    exportRoot: function exportRoot(vars, includeDelayedCalls) {
        if (vars === void 0) vars = {
        };
        var tl = new Timeline(vars), child, next;
        tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
        _globalTimeline.remove(tl);
        tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).
        tl._time = tl._tTime = _globalTimeline._time;
        child = _globalTimeline._first;
        while(child){
            next = child._next;
            if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) _addToTimeline(tl, child, child._start - child._delay);
            child = next;
        }
        _addToTimeline(_globalTimeline, tl, 0);
        return tl;
    },
    utils: {
        wrap: wrap,
        wrapYoyo: wrapYoyo,
        distribute: distribute,
        random: random,
        snap: snap,
        normalize: normalize,
        getUnit: getUnit,
        clamp: clamp,
        splitColor: splitColor,
        toArray: toArray,
        selector: selector,
        mapRange: mapRange,
        pipe: pipe,
        unitize: unitize,
        interpolate: interpolate,
        shuffle: shuffle
    },
    install: _install,
    effects: _effects,
    ticker: _ticker,
    updateRoot: Timeline.updateRoot,
    plugins: _plugins,
    globalTimeline: _globalTimeline,
    core: {
        PropTween: PropTween,
        globals: _addGlobal,
        Tween: Tween,
        Timeline: Timeline,
        Animation: Animation,
        getCache: _getCache,
        _removeLinkedListItem: _removeLinkedListItem,
        suppressOverwrites: function suppressOverwrites(value) {
            return _suppressOverwrites = value;
        }
    }
};
_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
    return _gsap[name] = Tween[name];
});
_ticker.add(Timeline.updateRoot);
_quickTween = _gsap.to({
}, {
    duration: 0
}); // ---- EXTRA PLUGINS --------------------------------------------------------
var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
    var pt = plugin._pt;
    while(pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop)pt = pt._next;
    return pt;
}, _addModifiers = function _addModifiers(tween, modifiers) {
    var targets = tween._targets, p, i, pt;
    for(p in modifiers){
        i = targets.length;
        while(i--){
            pt = tween._ptLookup[i][p];
            if (pt && (pt = pt.d)) {
                if (pt._pt) // is a plugin
                pt = _getPluginPropTween(pt, p);
                pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
            }
        }
    }
}, _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
    return {
        name: name,
        rawVars: 1,
        //don't pre-process function-based values or "random()" strings.
        init: function init(target, vars, tween1) {
            tween1._onInit = function(tween) {
                var temp, p;
                if (_isString(vars)) {
                    temp = {
                    };
                    _forEachName(vars, function(name) {
                        return temp[name] = 1;
                    }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.
                    vars = temp;
                }
                if (modifier) {
                    temp = {
                    };
                    for(p in vars)temp[p] = modifier(vars[p]);
                    vars = temp;
                }
                _addModifiers(tween, vars);
            };
        }
    };
}; //register core plugins
var gsap = _gsap.registerPlugin({
    name: "attr",
    init: function init(target, vars, tween, index, targets) {
        var p, pt;
        for(p in vars){
            pt = this.add(target, "setAttribute", (target.getAttribute(p) || 0) + "", vars[p], index, targets, 0, 0, p);
            pt && (pt.op = p);
            this._props.push(p);
        }
    }
}, {
    name: "endArray",
    init: function init(target, value) {
        var i = value.length;
        while(i--)this.add(target, i, target[i] || 0, value[i]);
    }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.
Tween.version = Timeline.version = gsap.version = "3.9.1";
_coreReady = 1;
_windowExists() && _wake();
var Power0 = _easeMap.Power0, Power1 = _easeMap.Power1, Power2 = _easeMap.Power2, Power3 = _easeMap.Power3, Power4 = _easeMap.Power4, Linear = _easeMap.Linear, Quad = _easeMap.Quad, Cubic = _easeMap.Cubic, Quart = _easeMap.Quart, Quint = _easeMap.Quint, Strong = _easeMap.Strong, Elastic = _easeMap.Elastic, Back = _easeMap.Back, SteppedEase = _easeMap.SteppedEase, Bounce = _easeMap.Bounce, Sine = _easeMap.Sine, Expo = _easeMap.Expo, Circ = _easeMap.Circ;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"l02JQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSPlugin", ()=>CSSPlugin
);
parcelHelpers.export(exports, "default", ()=>CSSPlugin
);
parcelHelpers.export(exports, "_getBBox", ()=>_getBBox
);
parcelHelpers.export(exports, "_createElement", ()=>_createElement
);
parcelHelpers.export(exports, "checkPrefix", ()=>_checkPropPrefix
);
/*!
 * CSSPlugin 3.9.1
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/ /* eslint-disable */ var _gsapCoreJs = require("./gsap-core.js");
var _win, _doc, _docElement, _pluginInitted, _tempDiv, _tempDivStyler, _recentSetterPlugin, _windowExists = function _windowExists() {
    return typeof window !== "undefined";
}, _transformProps = {
}, _RAD2DEG = 180 / Math.PI, _DEG2RAD = Math.PI / 180, _atan2 = Math.atan2, _bigNum = 100000000, _capsExp = /([A-Z])/g, _horizontalExp = /(?:left|right|width|margin|padding|x)/i, _complexExp = /[\s,\(]\S/, _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, _renderCSSProp = function _renderCSSProp(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
}, _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
}, _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
}, //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
_renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
    var value = data.s + data.c * ratio;
    data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u, data);
}, _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
}, _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
}, _setterCSSStyle = function _setterCSSStyle(target, property, value) {
    return target.style[property] = value;
}, _setterCSSProp = function _setterCSSProp(target, property, value) {
    return target.style.setProperty(property, value);
}, _setterTransform = function _setterTransform(target, property, value) {
    return target._gsap[property] = value;
}, _setterScale = function _setterScale(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
}, _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache.scaleX = cache.scaleY = value;
    cache.renderTransform(ratio, cache);
}, _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache[property] = value;
    cache.renderTransform(ratio, cache);
}, _transformProp = "transform", _transformOriginProp = _transformProp + "Origin", _supports3D, _createElement = function _createElement(type, ns) {
    var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.
    return e.style ? e : _doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://greensock.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
}, _getComputedProperty = function _getComputedProperty1(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty1(target, _checkPropPrefix(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
}, _prefixes = "O,Moz,ms,Ms,Webkit".split(","), _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
    var e = element || _tempDiv, s = e.style, i = 5;
    if (property in s && !preferPrefix) return property;
    property = property.charAt(0).toUpperCase() + property.substr(1);
    while((i--) && !(_prefixes[i] + property in s));
    return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
}, _initCore = function _initCore() {
    if (_windowExists() && window.document) {
        _win = window;
        _doc = _win.document;
        _docElement = _doc.documentElement;
        _tempDiv = _createElement("div") || {
            style: {
            }
        };
        _tempDivStyler = _createElement("div");
        _transformProp = _checkPropPrefix(_transformProp);
        _transformOriginProp = _transformProp + "Origin";
        _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.
        _supports3D = !!_checkPropPrefix("perspective");
        _pluginInitted = 1;
    }
}, _getBBoxHack = function _getBBoxHack1(swapIfPossible) {
    //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
    var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText, bbox;
    _docElement.appendChild(svg);
    svg.appendChild(this);
    this.style.display = "block";
    if (swapIfPossible) try {
        bbox = this.getBBox();
        this._gsapBBox = this.getBBox; //store the original
        this.getBBox = _getBBoxHack1;
    } catch (e) {
    }
    else if (this._gsapBBox) bbox = this._gsapBBox();
    if (oldParent) {
        if (oldSibling) oldParent.insertBefore(this, oldSibling);
        else oldParent.appendChild(this);
    }
    _docElement.removeChild(svg);
    this.style.cssText = oldCSS;
    return bbox;
}, _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
    var i = attributesArray.length;
    while(i--){
        if (target.hasAttribute(attributesArray[i])) return target.getAttribute(attributesArray[i]);
    }
}, _getBBox = function _getBBox(target) {
    var bounds;
    try {
        bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
    } catch (error) {
        bounds = _getBBoxHack.call(target, true);
    }
    bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.
    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
        x: +_getAttributeFallbacks(target, [
            "x",
            "cx",
            "x1"
        ]) || 0,
        y: +_getAttributeFallbacks(target, [
            "y",
            "cy",
            "y1"
        ]) || 0,
        width: 0,
        height: 0
    } : bounds;
}, _isSVG = function _isSVG(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
}, //reports if the element is an SVG on which getBBox() actually works
_removeProperty = function _removeProperty(target, property) {
    if (property) {
        var style = target.style;
        if (property in _transformProps && property !== _transformOriginProp) property = _transformProp;
        if (style.removeProperty) {
            if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
            property = "-" + property;
            style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
        } else //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
        style.removeAttribute(property);
    }
}, _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new _gsapCoreJs.PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;
    plugin._props.push(property);
    return pt;
}, _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
}, //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
_convertToUnit = function _convertToUnit1(target, property, value, unit) {
    var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
    style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) return curValue;
    curUnit !== "px" && !toPixels && (curValue = _convertToUnit1(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);
    if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
        px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
        return _gsapCoreJs._round(toPercent ? curValue / px * amount : curValue / 100 * px);
    }
    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
    if (isSVG) parent = (target.ownerSVGElement || {
    }).parentNode;
    if (!parent || parent === _doc || !parent.appendChild) parent = _doc.body;
    cache = parent._gsap;
    if (cache && toPercent && cache.width && horizontal && cache.time === _gsapCoreJs._ticker.time) return _gsapCoreJs._round(curValue / cache.width * amount);
    else {
        (toPercent || curUnit === "%") && (style.position = _getComputedProperty(target, "position"));
        parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.
        parent.appendChild(_tempDiv);
        px = _tempDiv[measureProperty];
        parent.removeChild(_tempDiv);
        style.position = "absolute";
        if (horizontal && toPercent) {
            cache = _gsapCoreJs._getCache(parent);
            cache.time = _gsapCoreJs._ticker.time;
            cache.width = parent[measureProperty];
        }
    }
    return _gsapCoreJs._round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
}, _get = function _get(target, property, unit, uncache) {
    var value;
    _pluginInitted || _initCore();
    if (property in _propertyAliases && property !== "transform") {
        property = _propertyAliases[property];
        if (~property.indexOf(",")) property = property.split(",")[0];
    }
    if (_transformProps[property] && property !== "transform") {
        value = _parseTransform(target, uncache);
        value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
        value = target.style[property];
        if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _gsapCoreJs._getProperty(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
    }
    return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
}, _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
    //note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    if (!start || start === "none") {
        // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://greensock.com/forums/topic/18310-clippath-doesnt-work-on-ios/
        var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
        if (s && s !== start) {
            prop = p;
            start = s;
        } else if (prop === "borderColor") start = _getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://greensock.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
    }
    var pt = new _gsapCoreJs.PropTween(this._pt, target.style, prop, 0, 1, _gsapCoreJs._renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, relative, endValues;
    pt.b = start;
    pt.e = end;
    start += ""; //ensure values are strings
    end += "";
    if (end === "auto") {
        target.style[prop] = end;
        end = _getComputedProperty(target, prop) || end;
        target.style[prop] = start;
    }
    a = [
        start,
        end
    ];
    _gsapCoreJs._colorStringFilter(a); //pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().
    start = a[0];
    end = a[1];
    startValues = start.match(_gsapCoreJs._numWithUnitExp) || [];
    endValues = end.match(_gsapCoreJs._numWithUnitExp) || [];
    if (endValues.length) {
        while(result = _gsapCoreJs._numWithUnitExp.exec(end)){
            endValue = result[0];
            chunk = end.substring(index, result.index);
            if (color) color = (color + 1) % 5;
            else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") color = 1;
            if (endValue !== (startValue = startValues[matchIndex++] || "")) {
                startNum = parseFloat(startValue) || 0;
                startUnit = startValue.substr((startNum + "").length);
                relative = endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;
                if (relative) endValue = endValue.substr(2);
                endNum = parseFloat(endValue);
                endUnit = endValue.substr((endNum + "").length);
                index = _gsapCoreJs._numWithUnitExp.lastIndex - endUnit.length;
                if (!endUnit) {
                    //if something like "perspective:300" is passed in and we must add a unit to the end
                    endUnit = endUnit || _gsapCoreJs._config.units[prop] || startUnit;
                    if (index === end.length) {
                        end += endUnit;
                        pt.e += endUnit;
                    }
                }
                if (startUnit !== endUnit) startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
                 //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.
                pt._pt = {
                    _next: pt._pt,
                    p: chunk || matchIndex === 1 ? chunk : ",",
                    //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
                    s: startNum,
                    c: relative ? relative * endNum : endNum - startNum,
                    m: color && color < 4 || prop === "zIndex" ? Math.round : 0
                };
            }
        }
        pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
    } else pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    _gsapCoreJs._relExp.test(end) && (pt.e = 0); //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
    this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.
    return pt;
}, _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
    var split = value.split(" "), x = split[0], y = split[1] || "50%";
    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
        //the user provided them in the wrong order, so flip them
        value = x;
        x = y;
        y = value;
    }
    split[0] = _keywordToPercent[x] || x;
    split[1] = _keywordToPercent[y] || y;
    return split.join(" ");
}, _renderClearProps = function _renderClearProps(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
        var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
        if (props === "all" || props === true) {
            style.cssText = "";
            clearTransforms = 1;
        } else {
            props = props.split(",");
            i = props.length;
            while(--i > -1){
                prop = props[i];
                if (_transformProps[prop]) {
                    clearTransforms = 1;
                    prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
                }
                _removeProperty(target, prop);
            }
        }
        if (clearTransforms) {
            _removeProperty(target, _transformProp);
            if (cache) {
                cache.svg && target.removeAttribute("transform");
                _parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.
                cache.uncache = 1;
            }
        }
    }
}, // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
_specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
        if (tween.data !== "isFromStart") {
            var pt = plugin._pt = new _gsapCoreJs.PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
            pt.u = endValue;
            pt.pr = -10;
            pt.tween = tween;
            plugin._props.push(property);
            return 1;
        }
    }
}, /*
 * --------------------------------------------------------------------------------------
 * TRANSFORMS
 * --------------------------------------------------------------------------------------
 */ _identity2DMatrix = [
    1,
    0,
    0,
    1,
    0,
    0
], _rotationalProperties = {
}, _isNullTransform = function _isNullTransform(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
}, _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
    var matrixString = _getComputedProperty(target, _transformProp);
    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_gsapCoreJs._numExp).map(_gsapCoreJs._round);
}, _getMatrix = function _getMatrix(target, force2D) {
    var cache = target._gsap || _gsapCoreJs._getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
    if (cache.svg && target.getAttribute("transform")) {
        temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.
        matrix = [
            temp.a,
            temp.b,
            temp.c,
            temp.d,
            temp.e,
            temp.f
        ];
        return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
        //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
        //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
        temp = style.display;
        style.display = "block";
        parent = target.parentNode;
        if (!parent || !target.offsetParent) {
            // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375
            addedToDOM = 1; //flag
            nextSibling = target.nextSibling;
            _docElement.appendChild(target); //we must add it to the DOM in order to get values properly
        }
        matrix = _getComputedTransformMatrixAsArray(target);
        temp ? style.display = temp : _removeProperty(target, "display");
        if (addedToDOM) nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
    }
    return force2D && matrix.length > 6 ? [
        matrix[0],
        matrix[1],
        matrix[4],
        matrix[5],
        matrix[12],
        matrix[13]
    ] : matrix;
}, _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
    if (!originIsAbsolute) {
        bounds = _getBBox(target);
        xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
        yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
    } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
        //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
        x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
        y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
        xOrigin = x;
        yOrigin = y;
    }
    if (smooth || smooth !== false && cache.smooth) {
        tx = xOrigin - xOriginOld;
        ty = yOrigin - yOriginOld;
        cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
        cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    } else cache.xOffset = cache.yOffset = 0;
    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).
    if (pluginToAddPropTweensTo) {
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }
    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
}, _parseTransform = function _parseTransform(target, uncache) {
    var cache = target._gsap || new _gsapCoreJs.GSCache(target);
    if ("x" in cache && !uncache && !cache.uncache) return cache;
    var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && _isSVG(target));
    matrix = _getMatrix(target, cache.svg);
    if (cache.svg) {
        t1 = (!cache.uncache || origin === "0px 0px") && !uncache && target.getAttribute("data-svg-origin"); // if origin is 0,0 and cache.uncache is true, let the recorded data-svg-origin stay. Otherwise, whenever we set cache.uncache to true, we'd need to set element.style.transformOrigin = (cache.xOrigin - bbox.x) + "px " + (cache.yOrigin - bbox.y) + "px". Remember, to work around browser inconsistencies we always force SVG elements' transformOrigin to 0,0 and offset the translation accordingly.
        _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }
    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;
    if (matrix !== _identity2DMatrix) {
        a = matrix[0]; //a11
        b = matrix[1]; //a21
        c = matrix[2]; //a31
        d = matrix[3]; //a41
        x = a12 = matrix[4];
        y = a22 = matrix[5]; //2D matrix
        if (matrix.length === 6) {
            scaleX = Math.sqrt(a * a + b * b);
            scaleY = Math.sqrt(d * d + c * c);
            rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).
            skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
            skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
            if (cache.svg) {
                x -= xOrigin - (xOrigin * a + yOrigin * c);
                y -= yOrigin - (xOrigin * b + yOrigin * d);
            } //3D matrix
        } else {
            a32 = matrix[6];
            a42 = matrix[7];
            a13 = matrix[8];
            a23 = matrix[9];
            a33 = matrix[10];
            a43 = matrix[11];
            x = matrix[12];
            y = matrix[13];
            z = matrix[14];
            angle = _atan2(a32, a33);
            rotationX = angle * _RAD2DEG; //rotationX
            if (angle) {
                cos = Math.cos(-angle);
                sin = Math.sin(-angle);
                t1 = a12 * cos + a13 * sin;
                t2 = a22 * cos + a23 * sin;
                t3 = a32 * cos + a33 * sin;
                a13 = a12 * -sin + a13 * cos;
                a23 = a22 * -sin + a23 * cos;
                a33 = a32 * -sin + a33 * cos;
                a43 = a42 * -sin + a43 * cos;
                a12 = t1;
                a22 = t2;
                a32 = t3;
            } //rotationY
            angle = _atan2(-c, a33);
            rotationY = angle * _RAD2DEG;
            if (angle) {
                cos = Math.cos(-angle);
                sin = Math.sin(-angle);
                t1 = a * cos - a13 * sin;
                t2 = b * cos - a23 * sin;
                t3 = c * cos - a33 * sin;
                a43 = d * sin + a43 * cos;
                a = t1;
                b = t2;
                c = t3;
            } //rotationZ
            angle = _atan2(b, a);
            rotation = angle * _RAD2DEG;
            if (angle) {
                cos = Math.cos(angle);
                sin = Math.sin(angle);
                t1 = a * cos + b * sin;
                t2 = a12 * cos + a22 * sin;
                b = b * cos - a * sin;
                a22 = a22 * cos - a12 * sin;
                a = t1;
                a12 = t2;
            }
            if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
                //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
                rotationX = rotation = 0;
                rotationY = 180 - rotationY;
            }
            scaleX = _gsapCoreJs._round(Math.sqrt(a * a + b * b + c * c));
            scaleY = _gsapCoreJs._round(Math.sqrt(a22 * a22 + a32 * a32));
            angle = _atan2(a12, a22);
            skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
            perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
        }
        if (cache.svg) {
            //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
            t1 = target.getAttribute("transform");
            cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
            t1 && target.setAttribute("transform", t1);
        }
    }
    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
        if (invertedScaleX) {
            scaleX *= -1;
            skewX += rotation <= 0 ? 180 : -180;
            rotation += rotation <= 0 ? 180 : -180;
        } else {
            scaleY *= -1;
            skewX += skewX <= 0 ? 180 : -180;
        }
    }
    cache.x = x - ((cache.xPercent = x && (cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
    cache.y = y - ((cache.yPercent = y && (cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
    cache.z = z + px;
    cache.scaleX = _gsapCoreJs._round(scaleX);
    cache.scaleY = _gsapCoreJs._round(scaleY);
    cache.rotation = _gsapCoreJs._round(rotation) + deg;
    cache.rotationX = _gsapCoreJs._round(rotationX) + deg;
    cache.rotationY = _gsapCoreJs._round(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;
    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) style[_transformOriginProp] = _firstTwoOnly(origin);
    cache.xOffset = cache.yOffset = 0;
    cache.force3D = _gsapCoreJs._config.force3D;
    cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
}, _firstTwoOnly = function _firstTwoOnly(value) {
    return (value = value.split(" "))[0] + " " + value[1];
}, //for handling transformOrigin values, stripping out the 3rd dimension
_addPxTranslate = function _addPxTranslate(target, start, value) {
    var unit = _gsapCoreJs.getUnit(start);
    return _gsapCoreJs._round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
}, _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;
    _renderCSSTransforms(ratio, cache);
}, _zeroDeg = "0deg", _zeroPx = "0px", _endParenthesis = ") ", _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
    var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)
    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
        var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
        angle = parseFloat(rotationX) * _DEG2RAD;
        cos = Math.cos(angle);
        x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
        y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
        z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }
    if (transformPerspective !== _zeroPx) transforms += "perspective(" + transformPerspective + _endParenthesis;
    if (xPercent || yPercent) transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
    if (rotation !== _zeroDeg) transforms += "rotate(" + rotation + _endParenthesis;
    if (rotationY !== _zeroDeg) transforms += "rotateY(" + rotationY + _endParenthesis;
    if (rotationX !== _zeroDeg) transforms += "rotateX(" + rotationX + _endParenthesis;
    if (skewX !== _zeroDeg || skewY !== _zeroDeg) transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
    if (scaleX !== 1 || scaleY !== 1) transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
    target.style[_transformProp] = transforms || "translate(0, 0)";
}, _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
    var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);
    if (skewY) {
        //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
        skewY = parseFloat(skewY);
        skewX += skewY;
        rotation += skewY;
    }
    if (rotation || skewX) {
        rotation *= _DEG2RAD;
        skewX *= _DEG2RAD;
        a11 = Math.cos(rotation) * scaleX;
        a21 = Math.sin(rotation) * scaleX;
        a12 = Math.sin(rotation - skewX) * -scaleY;
        a22 = Math.cos(rotation - skewX) * scaleY;
        if (skewX) {
            skewY *= _DEG2RAD;
            temp = Math.tan(skewX - skewY);
            temp = Math.sqrt(1 + temp * temp);
            a12 *= temp;
            a22 *= temp;
            if (skewY) {
                temp = Math.tan(skewY);
                temp = Math.sqrt(1 + temp * temp);
                a11 *= temp;
                a21 *= temp;
            }
        }
        a11 = _gsapCoreJs._round(a11);
        a21 = _gsapCoreJs._round(a21);
        a12 = _gsapCoreJs._round(a12);
        a22 = _gsapCoreJs._round(a22);
    } else {
        a11 = scaleX;
        a22 = scaleY;
        a21 = a12 = 0;
    }
    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
        tx = _convertToUnit(target, "x", x, "px");
        ty = _convertToUnit(target, "y", y, "px");
    }
    if (xOrigin || yOrigin || xOffset || yOffset) {
        tx = _gsapCoreJs._round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
        ty = _gsapCoreJs._round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }
    if (xPercent || yPercent) {
        //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
        temp = target.getBBox();
        tx = _gsapCoreJs._round(tx + xPercent / 100 * temp.width);
        ty = _gsapCoreJs._round(ty + yPercent / 100 * temp.height);
    }
    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
    forceCSS && (target.style[_transformProp] = temp); //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the  transform attribute changes!)
}, _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue, relative) {
    var cap = 360, isString = _gsapCoreJs._isString(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = relative ? endNum * relative : endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
    if (isString) {
        direction = endValue.split("_")[1];
        if (direction === "short") {
            change %= cap;
            if (change !== change % (cap / 2)) change += change < 0 ? cap : -cap;
        }
        if (direction === "cw" && change < 0) change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
        else if (direction === "ccw" && change > 0) change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
    }
    plugin._pt = pt = new _gsapCoreJs.PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";
    plugin._props.push(property);
    return pt;
}, _assign = function _assign(target, source) {
    // Internet Explorer doesn't have Object.assign(), so we recreate it here.
    for(var p in source)target[p] = source[p];
    return target;
}, _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
    //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
    var startCache = _assign({
    }, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
    if (startCache.svg) {
        startValue = target.getAttribute("transform");
        target.setAttribute("transform", "");
        style[_transformProp] = transforms;
        endCache = _parseTransform(target, 1);
        _removeProperty(target, _transformProp);
        target.setAttribute("transform", startValue);
    } else {
        startValue = getComputedStyle(target)[_transformProp];
        style[_transformProp] = transforms;
        endCache = _parseTransform(target, 1);
        style[_transformProp] = startValue;
    }
    for(p in _transformProps){
        startValue = startCache[p];
        endValue = endCache[p];
        if (startValue !== endValue && exclude.indexOf(p) < 0) {
            //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
            startUnit = _gsapCoreJs.getUnit(startValue);
            endUnit = _gsapCoreJs.getUnit(endValue);
            startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
            endNum = parseFloat(endValue);
            plugin._pt = new _gsapCoreJs.PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
            plugin._pt.u = endUnit || 0;
            plugin._props.push(p);
        }
    }
    _assign(endCache, startCache);
}; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.
_gsapCoreJs._forEachName("padding,margin,Width,Radius", function(name, index) {
    var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [
        t,
        r,
        b,
        l
    ] : [
        t + l,
        t + r,
        b + r,
        b + l
    ]).map(function(side) {
        return index < 2 ? name + side : "border" + side + name;
    });
    _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
        var a, vars;
        if (arguments.length < 4) {
            // getter, passed target, property, and unit (from _get())
            a = props.map(function(prop) {
                return _get(plugin, prop, property);
            });
            vars = a.join(" ");
            return vars.split(a[0]).length === 5 ? a[0] : vars;
        }
        a = (endValue + "").split(" ");
        vars = {
        };
        props.forEach(function(prop, i) {
            return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
        });
        plugin.init(target, vars, tween);
    };
});
var CSSPlugin = {
    name: "css",
    register: _initCore,
    targetTest: function targetTest(target) {
        return target.style && target.nodeType;
    },
    init: function init(target, vars, tween, index, targets) {
        var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority;
        _pluginInitted || _initCore();
        for(p in vars){
            if (p === "autoRound") continue;
            endValue = vars[p];
            if (_gsapCoreJs._plugins[p] && _gsapCoreJs._checkPlugin(p, vars, tween, index, target, targets)) continue;
            type = typeof endValue;
            specialProp = _specialProps[p];
            if (type === "function") {
                endValue = endValue.call(tween, index, target, targets);
                type = typeof endValue;
            }
            if (type === "string" && ~endValue.indexOf("random(")) endValue = _gsapCoreJs._replaceRandom(endValue);
            if (specialProp) specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
            else if (p.substr(0, 2) === "--") {
                //CSS variable
                startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
                endValue += "";
                _gsapCoreJs._colorExp.lastIndex = 0;
                if (!_gsapCoreJs._colorExp.test(startValue)) {
                    // colors don't have units
                    startUnit = _gsapCoreJs.getUnit(startValue);
                    endUnit = _gsapCoreJs.getUnit(endValue);
                }
                endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
                this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
                props.push(p);
            } else if (type !== "undefined") {
                if (startAt && p in startAt) {
                    // in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
                    startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
                    _gsapCoreJs._isString(startValue) && ~startValue.indexOf("random(") && (startValue = _gsapCoreJs._replaceRandom(startValue));
                    _gsapCoreJs.getUnit(startValue + "") || (startValue += _gsapCoreJs._config.units[p] || _gsapCoreJs.getUnit(_get(target, p)) || ""); // for cases when someone passes in a unitless value like {x: 100}; if we try setting translate(100, 0px) it won't work.
                    (startValue + "").charAt(1) === "=" && (startValue = _get(target, p)); // can't work with relative values
                } else startValue = _get(target, p);
                startNum = parseFloat(startValue);
                relative = type === "string" && endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;
                relative && (endValue = endValue.substr(2));
                endNum = parseFloat(endValue);
                if (p in _propertyAliases) {
                    if (p === "autoAlpha") {
                        //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
                        if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
                        startNum = 0;
                        _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
                    }
                    if (p !== "scale" && p !== "transform") {
                        p = _propertyAliases[p];
                        ~p.indexOf(",") && (p = p.split(",")[0]);
                    }
                }
                isTransformRelated = p in _transformProps; //--- TRANSFORM-RELATED ---
                if (isTransformRelated) {
                    if (!transformPropTween) {
                        cache = target._gsap;
                        cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.
                        smooth = vars.smoothOrigin !== false && cache.smooth;
                        transformPropTween = this._pt = new _gsapCoreJs.PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)
                        transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
                    }
                    if (p === "scale") {
                        this._pt = new _gsapCoreJs.PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? relative * endNum : endNum - cache.scaleY) || 0);
                        props.push("scaleY", p);
                        p += "X";
                    } else if (p === "transformOrigin") {
                        endValue = _convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.
                        if (cache.svg) _applySVGOrigin(target, endValue, 0, smooth, 0, this);
                        else {
                            endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!
                            endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                            _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
                        }
                        continue;
                    } else if (p === "svgOrigin") {
                        _applySVGOrigin(target, endValue, 1, smooth, 0, this);
                        continue;
                    } else if (p in _rotationalProperties) {
                        _addRotationalPropTween(this, cache, p, startNum, endValue, relative);
                        continue;
                    } else if (p === "smoothOrigin") {
                        _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
                        continue;
                    } else if (p === "force3D") {
                        cache[p] = endValue;
                        continue;
                    } else if (p === "transform") {
                        _addRawTransformPTs(this, endValue, target);
                        continue;
                    }
                } else if (!(p in style)) p = _checkPropPrefix(p) || p;
                if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
                    startUnit = (startValue + "").substr((startNum + "").length);
                    endNum || (endNum = 0); // protect against NaN
                    endUnit = _gsapCoreJs.getUnit(endValue) || (p in _gsapCoreJs._config.units ? _gsapCoreJs._config.units[p] : startUnit);
                    startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
                    this._pt = new _gsapCoreJs.PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, relative ? relative * endNum : endNum - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
                    this._pt.u = endUnit || 0;
                    if (startUnit !== endUnit && endUnit !== "%") {
                        //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
                        this._pt.b = startValue;
                        this._pt.r = _renderCSSPropWithBeginning;
                    }
                } else if (!(p in style)) {
                    if (p in target) //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
                    this.add(target, p, startValue || target[p], endValue, index, targets);
                    else {
                        _gsapCoreJs._missingPlugin(p, endValue);
                        continue;
                    }
                } else _tweenComplexCSSString.call(this, target, p, startValue, endValue);
                props.push(p);
            }
        }
        hasPriority && _gsapCoreJs._sortPropTweensByPriority(this);
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function getSetter(target, property, plugin) {
        //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
        var p = _propertyAliases[property];
        p && p.indexOf(",") < 0 && (property = p);
        return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {
        }, property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_gsapCoreJs._isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _gsapCoreJs._getSetter(target, property);
    },
    core: {
        _removeProperty: _removeProperty,
        _getMatrix: _getMatrix
    }
};
_gsapCoreJs.gsap.utils.checkPrefix = _checkPropPrefix;
(function(positionAndScale, rotation, others, aliases) {
    var all = _gsapCoreJs._forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
        _transformProps[name] = 1;
    });
    _gsapCoreJs._forEachName(rotation, function(name) {
        _gsapCoreJs._config.units[name] = "deg";
        _rotationalProperties[name] = 1;
    });
    _propertyAliases[all[13]] = positionAndScale + "," + rotation;
    _gsapCoreJs._forEachName(aliases, function(name) {
        var split = name.split(":");
        _propertyAliases[split[1]] = all[split[0]];
    });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
_gsapCoreJs._forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
    _gsapCoreJs._config.units[name] = "px";
});
_gsapCoreJs.gsap.registerPlugin(CSSPlugin);

},{"./gsap-core.js":"05eeC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iDXE3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Native", ()=>Native
);
parcelHelpers.export(exports, "Smooth", ()=>Smooth
);
var global = arguments[3];
/* locomotive-scroll v4.1.3 | MIT License | https://github.com/locomotivemtl/locomotive-scroll */ function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
}
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
function _get(target1, property1, receiver1) {
    if (typeof Reflect !== "undefined" && Reflect.get) _get = Reflect.get;
    else _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) return desc.get.call(receiver);
        return desc.value;
    };
    return _get(target1, property1, receiver1 || target1);
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var defaults = {
    el: document,
    name: 'scroll',
    offset: [
        0,
        0
    ],
    repeat: false,
    smooth: false,
    initPosition: {
        x: 0,
        y: 0
    },
    direction: 'vertical',
    gestureDirection: 'vertical',
    reloadOnContextChange: false,
    lerp: 0.1,
    "class": 'is-inview',
    scrollbarContainer: false,
    scrollbarClass: 'c-scrollbar',
    scrollingClass: 'has-scroll-scrolling',
    draggingClass: 'has-scroll-dragging',
    smoothClass: 'has-scroll-smooth',
    initClass: 'has-scroll-init',
    getSpeed: false,
    getDirection: false,
    scrollFromAnywhere: false,
    multiplier: 1,
    firefoxMultiplier: 50,
    touchMultiplier: 2,
    resetNativeScroll: true,
    tablet: {
        smooth: false,
        direction: 'vertical',
        gestureDirection: 'vertical',
        breakpoint: 1024
    },
    smartphone: {
        smooth: false,
        direction: 'vertical',
        gestureDirection: 'vertical'
    }
};
var _default = /*#__PURE__*/ function() {
    function _default1() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        };
        _classCallCheck(this, _default1);
        Object.assign(this, defaults, options);
        this.smartphone = defaults.smartphone;
        if (options.smartphone) Object.assign(this.smartphone, options.smartphone);
        this.tablet = defaults.tablet;
        if (options.tablet) Object.assign(this.tablet, options.tablet);
        this.namespace = 'locomotive';
        this.html = document.documentElement;
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;
        this.windowMiddle = {
            x: this.windowWidth / 2,
            y: this.windowHeight / 2
        };
        this.els = {
        };
        this.currentElements = {
        };
        this.listeners = {
        };
        this.hasScrollTicking = false;
        this.hasCallEventSet = false;
        this.checkScroll = this.checkScroll.bind(this);
        this.checkResize = this.checkResize.bind(this);
        this.checkEvent = this.checkEvent.bind(this);
        this.instance = {
            scroll: {
                x: 0,
                y: 0
            },
            limit: {
                x: this.html.offsetWidth,
                y: this.html.offsetHeight
            },
            currentElements: this.currentElements
        };
        if (this.isMobile) {
            if (this.isTablet) this.context = 'tablet';
            else this.context = 'smartphone';
        } else this.context = 'desktop';
        if (this.isMobile) this.direction = this[this.context].direction;
        if (this.direction === 'horizontal') this.directionAxis = 'x';
        else this.directionAxis = 'y';
        if (this.getDirection) this.instance.direction = null;
        if (this.getDirection) this.instance.speed = 0;
        this.html.classList.add(this.initClass);
        window.addEventListener('resize', this.checkResize, false);
    }
    _createClass(_default1, [
        {
            key: "init",
            value: function init() {
                this.initEvents();
            }
        },
        {
            key: "checkScroll",
            value: function checkScroll() {
                this.dispatchScroll();
            }
        },
        {
            key: "checkResize",
            value: function checkResize() {
                var _this = this;
                if (!this.resizeTick) {
                    this.resizeTick = true;
                    requestAnimationFrame(function() {
                        _this.resize();
                        _this.resizeTick = false;
                    });
                }
            }
        },
        {
            key: "resize",
            value: function resize() {
            }
        },
        {
            key: "checkContext",
            value: function checkContext() {
                if (!this.reloadOnContextChange) return;
                this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 || this.windowWidth < this.tablet.breakpoint;
                this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint;
                var oldContext = this.context;
                if (this.isMobile) {
                    if (this.isTablet) this.context = 'tablet';
                    else this.context = 'smartphone';
                } else this.context = 'desktop';
                if (oldContext != this.context) {
                    var oldSmooth = oldContext == 'desktop' ? this.smooth : this[oldContext].smooth;
                    var newSmooth = this.context == 'desktop' ? this.smooth : this[this.context].smooth;
                    if (oldSmooth != newSmooth) window.location.reload();
                }
            }
        },
        {
            key: "initEvents",
            value: function initEvents() {
                var _this2 = this;
                this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]"));
                this.setScrollTo = this.setScrollTo.bind(this);
                this.scrollToEls.forEach(function(el) {
                    el.addEventListener('click', _this2.setScrollTo, false);
                });
            }
        },
        {
            key: "setScrollTo",
            value: function setScrollTo(event) {
                event.preventDefault();
                this.scrollTo(event.currentTarget.getAttribute("data-".concat(this.name, "-href")) || event.currentTarget.getAttribute('href'), {
                    offset: event.currentTarget.getAttribute("data-".concat(this.name, "-offset"))
                });
            }
        },
        {
            key: "addElements",
            value: function addElements() {
            }
        },
        {
            key: "detectElements",
            value: function detectElements(hasCallEventSet) {
                var _this3 = this;
                var scrollTop = this.instance.scroll.y;
                var scrollBottom = scrollTop + this.windowHeight;
                var scrollLeft = this.instance.scroll.x;
                var scrollRight = scrollLeft + this.windowWidth;
                Object.entries(this.els).forEach(function(_ref) {
                    var _ref2 = _slicedToArray(_ref, 2), i = _ref2[0], el = _ref2[1];
                    if (el && (!el.inView || hasCallEventSet)) {
                        if (_this3.direction === 'horizontal') {
                            if (scrollRight >= el.left && scrollLeft < el.right) _this3.setInView(el, i);
                        } else if (scrollBottom >= el.top && scrollTop < el.bottom) _this3.setInView(el, i);
                    }
                    if (el && el.inView) {
                        if (_this3.direction === 'horizontal') {
                            var width = el.right - el.left;
                            el.progress = (_this3.instance.scroll.x - (el.left - _this3.windowWidth)) / (width + _this3.windowWidth);
                            if (scrollRight < el.left || scrollLeft > el.right) _this3.setOutOfView(el, i);
                        } else {
                            var height = el.bottom - el.top;
                            el.progress = (_this3.instance.scroll.y - (el.top - _this3.windowHeight)) / (height + _this3.windowHeight);
                            if (scrollBottom < el.top || scrollTop > el.bottom) _this3.setOutOfView(el, i);
                        }
                    }
                }); // this.els = this.els.filter((current, i) => {
                //     return current !== null;
                // });
                this.hasScrollTicking = false;
            }
        },
        {
            key: "setInView",
            value: function setInView(current, i) {
                this.els[i].inView = true;
                current.el.classList.add(current["class"]);
                this.currentElements[i] = current;
                if (current.call && this.hasCallEventSet) {
                    this.dispatchCall(current, 'enter');
                    if (!current.repeat) this.els[i].call = false;
                } // if (!current.repeat && !current.speed && !current.sticky) {
            //     if (!current.call || current.call && this.hasCallEventSet) {
            //        this.els[i] = null
            //     }
            // }
            }
        },
        {
            key: "setOutOfView",
            value: function setOutOfView(current, i) {
                var _this4 = this;
                // if (current.repeat || current.speed !== undefined) {
                this.els[i].inView = false; // }
                Object.keys(this.currentElements).forEach(function(el) {
                    el === i && delete _this4.currentElements[el];
                });
                if (current.call && this.hasCallEventSet) this.dispatchCall(current, 'exit');
                if (current.repeat) current.el.classList.remove(current["class"]);
            }
        },
        {
            key: "dispatchCall",
            value: function dispatchCall(current, way) {
                this.callWay = way;
                this.callValue = current.call.split(',').map(function(item) {
                    return item.trim();
                });
                this.callObj = current;
                if (this.callValue.length == 1) this.callValue = this.callValue[0];
                var callEvent = new Event(this.namespace + 'call');
                this.el.dispatchEvent(callEvent);
            }
        },
        {
            key: "dispatchScroll",
            value: function dispatchScroll() {
                var scrollEvent = new Event(this.namespace + 'scroll');
                this.el.dispatchEvent(scrollEvent);
            }
        },
        {
            key: "setEvents",
            value: function setEvents(event, func) {
                if (!this.listeners[event]) this.listeners[event] = [];
                var list = this.listeners[event];
                list.push(func);
                if (list.length === 1) this.el.addEventListener(this.namespace + event, this.checkEvent, false);
                if (event === 'call') {
                    this.hasCallEventSet = true;
                    this.detectElements(true);
                }
            }
        },
        {
            key: "unsetEvents",
            value: function unsetEvents(event, func) {
                if (!this.listeners[event]) return;
                var list = this.listeners[event];
                var index = list.indexOf(func);
                if (index < 0) return;
                list.splice(index, 1);
                if (list.index === 0) this.el.removeEventListener(this.namespace + event, this.checkEvent, false);
            }
        },
        {
            key: "checkEvent",
            value: function checkEvent(event) {
                var _this5 = this;
                var name = event.type.replace(this.namespace, '');
                var list = this.listeners[name];
                if (!list || list.length === 0) return;
                list.forEach(function(func) {
                    switch(name){
                        case 'scroll':
                            return func(_this5.instance);
                        case 'call':
                            return func(_this5.callValue, _this5.callWay, _this5.callObj);
                        default:
                            return func();
                    }
                });
            }
        },
        {
            key: "startScroll",
            value: function startScroll() {
            }
        },
        {
            key: "stopScroll",
            value: function stopScroll() {
            }
        },
        {
            key: "setScroll",
            value: function setScroll(x, y) {
                this.instance.scroll = {
                    x: 0,
                    y: 0
                };
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                var _this6 = this;
                window.removeEventListener('resize', this.checkResize, false);
                Object.keys(this.listeners).forEach(function(event) {
                    _this6.el.removeEventListener(_this6.namespace + event, _this6.checkEvent, false);
                });
                this.listeners = {
                };
                this.scrollToEls.forEach(function(el) {
                    el.removeEventListener('click', _this6.setScrollTo, false);
                });
                this.html.classList.remove(this.initClass);
            }
        }
    ]);
    return _default1;
}();
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {
};
function createCommonjsModule(fn, module) {
    return module = {
        exports: {
        }
    }, fn(module, module.exports), module.exports;
}
var smoothscroll = createCommonjsModule(function(module, exports) {
    (function() {
        // polyfill
        function polyfill() {
            // aliases
            var w = window;
            var d = document;
            // return if scroll behavior is supported and polyfill is not forced
            if ('scrollBehavior' in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) return;
            // globals
            var Element = w.HTMLElement || w.Element;
            var SCROLL_TIME = 468;
            // object gathering original scroll methods
            var original = {
                scroll: w.scroll || w.scrollTo,
                scrollBy: w.scrollBy,
                elementScroll: Element.prototype.scroll || scrollElement,
                scrollIntoView: Element.prototype.scrollIntoView
            };
            // define timing method
            var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;
            /**
     * indicates if a the current browser is made by Microsoft
     * @method isMicrosoftBrowser
     * @param {String} userAgent
     * @returns {Boolean}
     */ function isMicrosoftBrowser(userAgent) {
                var userAgentPatterns = [
                    'MSIE ',
                    'Trident/',
                    'Edge/'
                ];
                return new RegExp(userAgentPatterns.join('|')).test(userAgent);
            }
            /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */ var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;
            /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */ function scrollElement(x, y) {
                this.scrollLeft = x;
                this.scrollTop = y;
            }
            /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */ function ease(k) {
                return 0.5 * (1 - Math.cos(Math.PI * k));
            }
            /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */ function shouldBailOut(firstArg) {
                if (firstArg === null || typeof firstArg !== 'object' || firstArg.behavior === undefined || firstArg.behavior === 'auto' || firstArg.behavior === 'instant') // first argument is not an object/null
                // or behavior is auto, instant or undefined
                return true;
                if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') // first argument is an object and behavior is smooth
                return false;
                // throw error when behavior is not supported
                throw new TypeError('behavior member of ScrollOptions ' + firstArg.behavior + ' is not a valid value for enumeration ScrollBehavior.');
            }
            /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */ function hasScrollableSpace(el, axis) {
                if (axis === 'Y') return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
                if (axis === 'X') return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
            }
            /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */ function canOverflow(el, axis) {
                var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];
                return overflowValue === 'auto' || overflowValue === 'scroll';
            }
            /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */ function isScrollable(el) {
                var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
                var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');
                return isScrollableY || isScrollableX;
            }
            /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */ function findScrollableParent(el) {
                while(el !== d.body && isScrollable(el) === false)el = el.parentNode || el.host;
                return el;
            }
            /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */ function step(context) {
                var time = now();
                var value;
                var currentX;
                var currentY;
                var elapsed = (time - context.startTime) / SCROLL_TIME;
                // avoid elapsed times higher than one
                elapsed = elapsed > 1 ? 1 : elapsed;
                // apply easing to elapsed time
                value = ease(elapsed);
                currentX = context.startX + (context.x - context.startX) * value;
                currentY = context.startY + (context.y - context.startY) * value;
                context.method.call(context.scrollable, currentX, currentY);
                // scroll more if we have not reached our destination
                if (currentX !== context.x || currentY !== context.y) w.requestAnimationFrame(step.bind(w, context));
            }
            /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */ function smoothScroll(el, x, y) {
                var scrollable;
                var startX;
                var startY;
                var method;
                var startTime = now();
                // define scroll context
                if (el === d.body) {
                    scrollable = w;
                    startX = w.scrollX || w.pageXOffset;
                    startY = w.scrollY || w.pageYOffset;
                    method = original.scroll;
                } else {
                    scrollable = el;
                    startX = el.scrollLeft;
                    startY = el.scrollTop;
                    method = scrollElement;
                }
                // scroll looping over a frame
                step({
                    scrollable: scrollable,
                    method: method,
                    startTime: startTime,
                    startX: startX,
                    startY: startY,
                    x: x,
                    y: y
                });
            }
            // ORIGINAL METHODS OVERRIDES
            // w.scroll and w.scrollTo
            w.scroll = w.scrollTo = function() {
                // avoid action when no arguments are passed
                if (arguments[0] === undefined) return;
                // avoid smooth behavior if not required
                if (shouldBailOut(arguments[0]) === true) {
                    original.scroll.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : w.scrollX || w.pageXOffset, // use top prop, second argument if present or fallback to scrollY
                    arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : w.scrollY || w.pageYOffset);
                    return;
                }
                // LET THE SMOOTHNESS BEGIN!
                smoothScroll.call(w, d.body, arguments[0].left !== undefined ? ~~arguments[0].left : w.scrollX || w.pageXOffset, arguments[0].top !== undefined ? ~~arguments[0].top : w.scrollY || w.pageYOffset);
            };
            // w.scrollBy
            w.scrollBy = function() {
                // avoid action when no arguments are passed
                if (arguments[0] === undefined) return;
                // avoid smooth behavior if not required
                if (shouldBailOut(arguments[0])) {
                    original.scrollBy.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : 0, arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : 0);
                    return;
                }
                // LET THE SMOOTHNESS BEGIN!
                smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
            };
            // Element.prototype.scroll and Element.prototype.scrollTo
            Element.prototype.scroll = Element.prototype.scrollTo = function() {
                // avoid action when no arguments are passed
                if (arguments[0] === undefined) return;
                // avoid smooth behavior if not required
                if (shouldBailOut(arguments[0]) === true) {
                    // if one number is passed, throw error to match Firefox implementation
                    if (typeof arguments[0] === 'number' && arguments[1] === undefined) throw new SyntaxError('Value could not be converted');
                    original.elementScroll.call(this, // use left prop, first number argument or fallback to scrollLeft
                    arguments[0].left !== undefined ? ~~arguments[0].left : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft, // use top prop, second argument or fallback to scrollTop
                    arguments[0].top !== undefined ? ~~arguments[0].top : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop);
                    return;
                }
                var left = arguments[0].left;
                var top = arguments[0].top;
                // LET THE SMOOTHNESS BEGIN!
                smoothScroll.call(this, this, typeof left === 'undefined' ? this.scrollLeft : ~~left, typeof top === 'undefined' ? this.scrollTop : ~~top);
            };
            // Element.prototype.scrollBy
            Element.prototype.scrollBy = function() {
                // avoid action when no arguments are passed
                if (arguments[0] === undefined) return;
                // avoid smooth behavior if not required
                if (shouldBailOut(arguments[0]) === true) {
                    original.elementScroll.call(this, arguments[0].left !== undefined ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== undefined ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
                    return;
                }
                this.scroll({
                    left: ~~arguments[0].left + this.scrollLeft,
                    top: ~~arguments[0].top + this.scrollTop,
                    behavior: arguments[0].behavior
                });
            };
            // Element.prototype.scrollIntoView
            Element.prototype.scrollIntoView = function() {
                // avoid smooth behavior if not required
                if (shouldBailOut(arguments[0]) === true) {
                    original.scrollIntoView.call(this, arguments[0] === undefined ? true : arguments[0]);
                    return;
                }
                // LET THE SMOOTHNESS BEGIN!
                var scrollableParent = findScrollableParent(this);
                var parentRects = scrollableParent.getBoundingClientRect();
                var clientRects = this.getBoundingClientRect();
                if (scrollableParent !== d.body) {
                    // reveal element inside parent
                    smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientRects.left - parentRects.left, scrollableParent.scrollTop + clientRects.top - parentRects.top);
                    // reveal parent in viewport unless is fixed
                    if (w.getComputedStyle(scrollableParent).position !== 'fixed') w.scrollBy({
                        left: parentRects.left,
                        top: parentRects.top,
                        behavior: 'smooth'
                    });
                } else // reveal element in viewport
                w.scrollBy({
                    left: clientRects.left,
                    top: clientRects.top,
                    behavior: 'smooth'
                });
            };
        }
        // commonjs
        module.exports = {
            polyfill: polyfill
        };
    })();
});
var smoothscroll_1 = smoothscroll.polyfill;
var _default$1 = /*#__PURE__*/ function(_Core) {
    _inherits(_default2, _Core);
    var _super = _createSuper(_default2);
    function _default2() {
        var _this;
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        };
        _classCallCheck(this, _default2);
        _this = _super.call(this, options);
        if (_this.resetNativeScroll) {
            if (history.scrollRestoration) history.scrollRestoration = 'manual';
            window.scrollTo(0, 0);
        }
        window.addEventListener('scroll', _this.checkScroll, false);
        if (window.smoothscrollPolyfill === undefined) {
            window.smoothscrollPolyfill = smoothscroll;
            window.smoothscrollPolyfill.polyfill();
        }
        return _this;
    }
    _createClass(_default2, [
        {
            key: "init",
            value: function init() {
                this.instance.scroll.y = window.pageYOffset;
                this.addElements();
                this.detectElements();
                _get(_getPrototypeOf(_default2.prototype), "init", this).call(this);
            }
        },
        {
            key: "checkScroll",
            value: function checkScroll() {
                var _this2 = this;
                _get(_getPrototypeOf(_default2.prototype), "checkScroll", this).call(this);
                if (this.getDirection) this.addDirection();
                if (this.getSpeed) {
                    this.addSpeed();
                    this.speedTs = Date.now();
                }
                this.instance.scroll.y = window.pageYOffset;
                if (Object.entries(this.els).length) {
                    if (!this.hasScrollTicking) {
                        requestAnimationFrame(function() {
                            _this2.detectElements();
                        });
                        this.hasScrollTicking = true;
                    }
                }
            }
        },
        {
            key: "addDirection",
            value: function addDirection() {
                if (window.pageYOffset > this.instance.scroll.y) {
                    if (this.instance.direction !== 'down') this.instance.direction = 'down';
                } else if (window.pageYOffset < this.instance.scroll.y) {
                    if (this.instance.direction !== 'up') this.instance.direction = 'up';
                }
            }
        },
        {
            key: "addSpeed",
            value: function addSpeed() {
                if (window.pageYOffset != this.instance.scroll.y) this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / Math.max(1, Date.now() - this.speedTs);
                else this.instance.speed = 0;
            }
        },
        {
            key: "resize",
            value: function resize() {
                if (Object.entries(this.els).length) {
                    this.windowHeight = window.innerHeight;
                    this.updateElements();
                }
            }
        },
        {
            key: "addElements",
            value: function addElements() {
                var _this3 = this;
                this.els = {
                };
                var els = this.el.querySelectorAll('[data-' + this.name + ']');
                els.forEach(function(el, index) {
                    var BCR = el.getBoundingClientRect();
                    var cl = el.dataset[_this3.name + 'Class'] || _this3["class"];
                    var id = typeof el.dataset[_this3.name + 'Id'] === 'string' ? el.dataset[_this3.name + 'Id'] : index;
                    var top;
                    var left;
                    var offset = typeof el.dataset[_this3.name + 'Offset'] === 'string' ? el.dataset[_this3.name + 'Offset'].split(',') : _this3.offset;
                    var repeat = el.dataset[_this3.name + 'Repeat'];
                    var call = el.dataset[_this3.name + 'Call'];
                    var target = el.dataset[_this3.name + 'Target'];
                    var targetEl;
                    if (target !== undefined) targetEl = document.querySelector("".concat(target));
                    else targetEl = el;
                    var targetElBCR = targetEl.getBoundingClientRect();
                    top = targetElBCR.top + _this3.instance.scroll.y;
                    left = targetElBCR.left + _this3.instance.scroll.x;
                    var bottom = top + targetEl.offsetHeight;
                    var right = left + targetEl.offsetWidth;
                    if (repeat == 'false') repeat = false;
                    else if (repeat != undefined) repeat = true;
                    else repeat = _this3.repeat;
                    var relativeOffset = _this3.getRelativeOffset(offset);
                    top = top + relativeOffset[0];
                    bottom = bottom - relativeOffset[1];
                    var mappedEl = {
                        el: el,
                        targetEl: targetEl,
                        id: id,
                        "class": cl,
                        top: top,
                        bottom: bottom,
                        left: left,
                        right: right,
                        offset: offset,
                        progress: 0,
                        repeat: repeat,
                        inView: false,
                        call: call
                    };
                    _this3.els[id] = mappedEl;
                    if (el.classList.contains(cl)) _this3.setInView(_this3.els[id], id);
                });
            }
        },
        {
            key: "updateElements",
            value: function updateElements() {
                var _this4 = this;
                Object.entries(this.els).forEach(function(_ref) {
                    var _ref2 = _slicedToArray(_ref, 2), i = _ref2[0], el = _ref2[1];
                    var top = el.targetEl.getBoundingClientRect().top + _this4.instance.scroll.y;
                    var bottom = top + el.targetEl.offsetHeight;
                    var relativeOffset = _this4.getRelativeOffset(el.offset);
                    _this4.els[i].top = top + relativeOffset[0];
                    _this4.els[i].bottom = bottom - relativeOffset[1];
                });
                this.hasScrollTicking = false;
            }
        },
        {
            key: "getRelativeOffset",
            value: function getRelativeOffset(offset) {
                var relativeOffset = [
                    0,
                    0
                ];
                if (offset) {
                    for(var i = 0; i < offset.length; i++)if (typeof offset[i] == 'string') {
                        if (offset[i].includes('%')) relativeOffset[i] = parseInt(offset[i].replace('%', '') * this.windowHeight / 100);
                        else relativeOffset[i] = parseInt(offset[i]);
                    } else relativeOffset[i] = offset[i];
                }
                return relativeOffset;
            }
        },
        {
            key: "scrollTo",
            value: function scrollTo(target) {
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                };
                // Parse options
                var offset = parseInt(options.offset) || 0; // An offset to apply on top of given `target` or `sourceElem`'s target
                var callback = options.callback ? options.callback : false; // function called when scrollTo completes (note that it won't wait for lerp to stabilize)
                if (typeof target === 'string') {
                    // Selector or boundaries
                    if (target === 'top') target = this.html;
                    else if (target === 'bottom') target = this.html.offsetHeight - window.innerHeight;
                    else {
                        target = document.querySelector(target); // If the query fails, abort
                        if (!target) return;
                    }
                } else if (typeof target === 'number') // Absolute coordinate
                target = parseInt(target);
                else if (target && target.tagName) ;
                else {
                    console.warn('`target` parameter is not valid');
                    return;
                } // We have a target that is not a coordinate yet, get it
                if (typeof target !== 'number') offset = target.getBoundingClientRect().top + offset + this.instance.scroll.y;
                else offset = target + offset;
                var isTargetReached = function isTargetReached() {
                    return parseInt(window.pageYOffset) === parseInt(offset);
                };
                if (callback) {
                    if (isTargetReached()) {
                        callback();
                        return;
                    } else {
                        var onScroll1 = function onScroll() {
                            if (isTargetReached()) {
                                window.removeEventListener('scroll', onScroll);
                                callback();
                            }
                        };
                        window.addEventListener('scroll', onScroll1);
                    }
                }
                window.scrollTo({
                    top: offset,
                    behavior: options.duration === 0 ? 'auto' : 'smooth'
                });
            }
        },
        {
            key: "update",
            value: function update() {
                this.addElements();
                this.detectElements();
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                _get(_getPrototypeOf(_default2.prototype), "destroy", this).call(this);
                window.removeEventListener('scroll', this.checkScroll, false);
            }
        }
    ]);
    return _default2;
}(_default);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ /* eslint-disable no-unused-vars */ var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) throw new TypeError('Object.assign cannot be called with null or undefined');
    return Object(val);
}
function shouldUseNative() {
    try {
        if (!Object.assign) return false;
        // Detect buggy property enumeration order in older V8 versions.
        // https://bugs.chromium.org/p/v8/issues/detail?id=4118
        var test1 = "abc"; // eslint-disable-line no-new-wrappers
        test1[5] = 'de';
        if (Object.getOwnPropertyNames(test1)[0] === '5') return false;
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test2 = {
        };
        for(var i = 0; i < 10; i++)test2['_' + String.fromCharCode(i)] = i;
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
        });
        if (order2.join('') !== '0123456789') return false;
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test3 = {
        };
        'abcdefghijklmnopqrst'.split('').forEach(function(letter) {
            test3[letter] = letter;
        });
        if (Object.keys(Object.assign({
        }, test3)).join('') !== 'abcdefghijklmnopqrst') return false;
        return true;
    } catch (err) {
        // We don't expect any of the above to throw, but better to be safe.
        return false;
    }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for(var s = 1; s < arguments.length; s++){
        from = Object(arguments[s]);
        for(var key in from)if (hasOwnProperty.call(from, key)) to[key] = from[key];
        if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for(var i = 0; i < symbols.length; i++)if (propIsEnumerable.call(from, symbols[i])) to[symbols[i]] = from[symbols[i]];
        }
    }
    return to;
};
function E() {
// Keep this empty so it's easier to inherit from
// (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}
E.prototype = {
    on: function(name, callback, ctx) {
        var e = this.e || (this.e = {
        });
        (e[name] || (e[name] = [])).push({
            fn: callback,
            ctx: ctx
        });
        return this;
    },
    once: function(name, callback, ctx) {
        var self = this;
        function listener() {
            self.off(name, listener);
            callback.apply(ctx, arguments);
        }
        listener._ = callback;
        return this.on(name, listener, ctx);
    },
    emit: function(name) {
        var data = [].slice.call(arguments, 1);
        var evtArr = ((this.e || (this.e = {
        }))[name] || []).slice();
        var i = 0;
        var len = evtArr.length;
        for(; i < len; i++)evtArr[i].fn.apply(evtArr[i].ctx, data);
        return this;
    },
    off: function(name, callback) {
        var e = this.e || (this.e = {
        });
        var evts = e[name];
        var liveEvents = [];
        if (evts && callback) {
            for(var i = 0, len = evts.length; i < len; i++)if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
        }
        // Remove event from queue to prevent memory leak
        // Suggested by https://github.com/lazd
        // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910
        liveEvents.length ? e[name] = liveEvents : delete e[name];
        return this;
    }
};
var tinyEmitter = E;
var lethargy = createCommonjsModule(function(module, exports) {
    // Generated by CoffeeScript 1.9.2
    (function() {
        var root;
        root = exports !== null ? exports : this;
        root.Lethargy = (function() {
            function Lethargy1(stability, sensitivity, tolerance, delay) {
                this.stability = stability != null ? Math.abs(stability) : 8;
                this.sensitivity = sensitivity != null ? 1 + Math.abs(sensitivity) : 100;
                this.tolerance = tolerance != null ? 1 + Math.abs(tolerance) : 1.1;
                this.delay = delay != null ? delay : 150;
                this.lastUpDeltas = (function() {
                    var i, ref, results;
                    results = [];
                    for(i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--)results.push(null);
                    return results;
                }).call(this);
                this.lastDownDeltas = (function() {
                    var i, ref, results;
                    results = [];
                    for(i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--)results.push(null);
                    return results;
                }).call(this);
                this.deltasTimestamp = (function() {
                    var i, ref, results;
                    results = [];
                    for(i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--)results.push(null);
                    return results;
                }).call(this);
            }
            Lethargy1.prototype.check = function(e) {
                var lastDelta;
                e = e.originalEvent || e;
                if (e.wheelDelta != null) lastDelta = e.wheelDelta;
                else if (e.deltaY != null) lastDelta = e.deltaY * -40;
                else if (e.detail != null || e.detail === 0) lastDelta = e.detail * -40;
                this.deltasTimestamp.push(Date.now());
                this.deltasTimestamp.shift();
                if (lastDelta > 0) {
                    this.lastUpDeltas.push(lastDelta);
                    this.lastUpDeltas.shift();
                    return this.isInertia(1);
                } else {
                    this.lastDownDeltas.push(lastDelta);
                    this.lastDownDeltas.shift();
                    return this.isInertia(-1);
                }
            };
            Lethargy1.prototype.isInertia = function(direction) {
                var lastDeltas, lastDeltasNew, lastDeltasOld, newAverage, newSum, oldAverage, oldSum;
                lastDeltas = direction === -1 ? this.lastDownDeltas : this.lastUpDeltas;
                if (lastDeltas[0] === null) return direction;
                if (this.deltasTimestamp[this.stability * 2 - 2] + this.delay > Date.now() && lastDeltas[0] === lastDeltas[this.stability * 2 - 1]) return false;
                lastDeltasOld = lastDeltas.slice(0, this.stability);
                lastDeltasNew = lastDeltas.slice(this.stability, this.stability * 2);
                oldSum = lastDeltasOld.reduce(function(t, s) {
                    return t + s;
                });
                newSum = lastDeltasNew.reduce(function(t, s) {
                    return t + s;
                });
                oldAverage = oldSum / lastDeltasOld.length;
                newAverage = newSum / lastDeltasNew.length;
                if (Math.abs(oldAverage) < Math.abs(newAverage * this.tolerance) && this.sensitivity < Math.abs(newAverage)) return direction;
                else return false;
            };
            Lethargy1.prototype.showLastUpDeltas = function() {
                return this.lastUpDeltas;
            };
            Lethargy1.prototype.showLastDownDeltas = function() {
                return this.lastDownDeltas;
            };
            return Lethargy1;
        })();
    }).call(commonjsGlobal);
});
var support = function getSupport() {
    return {
        hasWheelEvent: 'onwheel' in document,
        hasMouseWheelEvent: 'onmousewheel' in document,
        hasTouch: 'ontouchstart' in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
        hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
        hasPointer: !!window.navigator.msPointerEnabled,
        hasKeyDown: 'onkeydown' in document,
        isFirefox: navigator.userAgent.indexOf('Firefox') > -1
    };
}();
var toString = Object.prototype.toString, hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var bindallStandalone = function(object) {
    if (!object) return console.warn('bindAll requires at least one argument.');
    var functions = Array.prototype.slice.call(arguments, 1);
    if (functions.length === 0) for(var method in object){
        if (hasOwnProperty$1.call(object, method)) {
            if (typeof object[method] == 'function' && toString.call(object[method]) == "[object Function]") functions.push(method);
        }
    }
    for(var i = 0; i < functions.length; i++){
        var f = functions[i];
        object[f] = bind(object[f], object);
    }
};
/*
    Faster bind without specific-case checking. (see https://coderwall.com/p/oi3j3w).
    bindAll is only needed for events binding so no need to make slow fixes for constructor
    or partial application.
*/ function bind(func, context) {
    return function() {
        return func.apply(context, arguments);
    };
}
var Lethargy = lethargy.Lethargy;
var EVT_ID = 'virtualscroll';
var src = VirtualScroll;
var keyCodes = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SPACE: 32
};
function VirtualScroll(options) {
    bindallStandalone(this, '_onWheel', '_onMouseWheel', '_onTouchStart', '_onTouchMove', '_onKeyDown');
    this.el = window;
    if (options && options.el) {
        this.el = options.el;
        delete options.el;
    }
    this.options = objectAssign({
        mouseMultiplier: 1,
        touchMultiplier: 2,
        firefoxMultiplier: 15,
        keyStep: 120,
        preventTouch: false,
        unpreventTouchClass: 'vs-touchmove-allowed',
        limitInertia: false,
        useKeyboard: true,
        useTouch: true
    }, options);
    if (this.options.limitInertia) this._lethargy = new Lethargy();
    this._emitter = new tinyEmitter();
    this._event = {
        y: 0,
        x: 0,
        deltaX: 0,
        deltaY: 0
    };
    this.touchStartX = null;
    this.touchStartY = null;
    this.bodyTouchAction = null;
    if (this.options.passive !== undefined) this.listenerOptions = {
        passive: this.options.passive
    };
}
VirtualScroll.prototype._notify = function(e) {
    var evt = this._event;
    evt.x += evt.deltaX;
    evt.y += evt.deltaY;
    this._emitter.emit(EVT_ID, {
        x: evt.x,
        y: evt.y,
        deltaX: evt.deltaX,
        deltaY: evt.deltaY,
        originalEvent: e
    });
};
VirtualScroll.prototype._onWheel = function(e) {
    var options = this.options;
    if (this._lethargy && this._lethargy.check(e) === false) return;
    var evt = this._event;
    // In Chrome and in Firefox (at least the new one)
    evt.deltaX = e.wheelDeltaX || e.deltaX * -1;
    evt.deltaY = e.wheelDeltaY || e.deltaY * -1;
    // for our purpose deltamode = 1 means user is on a wheel mouse, not touch pad
    // real meaning: https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent#Delta_modes
    if (support.isFirefox && e.deltaMode == 1) {
        evt.deltaX *= options.firefoxMultiplier;
        evt.deltaY *= options.firefoxMultiplier;
    }
    evt.deltaX *= options.mouseMultiplier;
    evt.deltaY *= options.mouseMultiplier;
    this._notify(e);
};
VirtualScroll.prototype._onMouseWheel = function(e) {
    if (this.options.limitInertia && this._lethargy.check(e) === false) return;
    var evt = this._event;
    // In Safari, IE and in Chrome if 'wheel' isn't defined
    evt.deltaX = e.wheelDeltaX ? e.wheelDeltaX : 0;
    evt.deltaY = e.wheelDeltaY ? e.wheelDeltaY : e.wheelDelta;
    this._notify(e);
};
VirtualScroll.prototype._onTouchStart = function(e) {
    var t = e.targetTouches ? e.targetTouches[0] : e;
    this.touchStartX = t.pageX;
    this.touchStartY = t.pageY;
};
VirtualScroll.prototype._onTouchMove = function(e) {
    var options = this.options;
    if (options.preventTouch && !e.target.classList.contains(options.unpreventTouchClass)) e.preventDefault();
    var evt = this._event;
    var t = e.targetTouches ? e.targetTouches[0] : e;
    evt.deltaX = (t.pageX - this.touchStartX) * options.touchMultiplier;
    evt.deltaY = (t.pageY - this.touchStartY) * options.touchMultiplier;
    this.touchStartX = t.pageX;
    this.touchStartY = t.pageY;
    this._notify(e);
};
VirtualScroll.prototype._onKeyDown = function(e) {
    var evt = this._event;
    evt.deltaX = evt.deltaY = 0;
    var windowHeight = window.innerHeight - 40;
    switch(e.keyCode){
        case keyCodes.LEFT:
        case keyCodes.UP:
            evt.deltaY = this.options.keyStep;
            break;
        case keyCodes.RIGHT:
        case keyCodes.DOWN:
            evt.deltaY = -this.options.keyStep;
            break;
        case e.shiftKey:
            evt.deltaY = windowHeight;
            break;
        case keyCodes.SPACE:
            evt.deltaY = -windowHeight;
            break;
        default:
            return;
    }
    this._notify(e);
};
VirtualScroll.prototype._bind = function() {
    if (support.hasWheelEvent) this.el.addEventListener('wheel', this._onWheel, this.listenerOptions);
    if (support.hasMouseWheelEvent) this.el.addEventListener('mousewheel', this._onMouseWheel, this.listenerOptions);
    if (support.hasTouch && this.options.useTouch) {
        this.el.addEventListener('touchstart', this._onTouchStart, this.listenerOptions);
        this.el.addEventListener('touchmove', this._onTouchMove, this.listenerOptions);
    }
    if (support.hasPointer && support.hasTouchWin) {
        this.bodyTouchAction = document.body.style.msTouchAction;
        document.body.style.msTouchAction = 'none';
        this.el.addEventListener('MSPointerDown', this._onTouchStart, true);
        this.el.addEventListener('MSPointerMove', this._onTouchMove, true);
    }
    if (support.hasKeyDown && this.options.useKeyboard) document.addEventListener('keydown', this._onKeyDown);
};
VirtualScroll.prototype._unbind = function() {
    if (support.hasWheelEvent) this.el.removeEventListener('wheel', this._onWheel);
    if (support.hasMouseWheelEvent) this.el.removeEventListener('mousewheel', this._onMouseWheel);
    if (support.hasTouch) {
        this.el.removeEventListener('touchstart', this._onTouchStart);
        this.el.removeEventListener('touchmove', this._onTouchMove);
    }
    if (support.hasPointer && support.hasTouchWin) {
        document.body.style.msTouchAction = this.bodyTouchAction;
        this.el.removeEventListener('MSPointerDown', this._onTouchStart, true);
        this.el.removeEventListener('MSPointerMove', this._onTouchMove, true);
    }
    if (support.hasKeyDown && this.options.useKeyboard) document.removeEventListener('keydown', this._onKeyDown);
};
VirtualScroll.prototype.on = function(cb, ctx) {
    this._emitter.on(EVT_ID, cb, ctx);
    var events = this._emitter.e;
    if (events && events[EVT_ID] && events[EVT_ID].length === 1) this._bind();
};
VirtualScroll.prototype.off = function(cb, ctx) {
    this._emitter.off(EVT_ID, cb, ctx);
    var events = this._emitter.e;
    if (!events[EVT_ID] || events[EVT_ID].length <= 0) this._unbind();
};
VirtualScroll.prototype.reset = function() {
    var evt = this._event;
    evt.x = 0;
    evt.y = 0;
};
VirtualScroll.prototype.destroy = function() {
    this._emitter.off();
    this._unbind();
};
function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
}
function getTranslate(el) {
    var translate = {
    };
    if (!window.getComputedStyle) return;
    var style = getComputedStyle(el);
    var transform = style.transform || style.webkitTransform || style.mozTransform;
    var mat = transform.match(/^matrix3d\((.+)\)$/);
    if (mat) {
        translate.x = mat ? parseFloat(mat[1].split(', ')[12]) : 0;
        translate.y = mat ? parseFloat(mat[1].split(', ')[13]) : 0;
    } else {
        mat = transform.match(/^matrix\((.+)\)$/);
        translate.x = mat ? parseFloat(mat[1].split(', ')[4]) : 0;
        translate.y = mat ? parseFloat(mat[1].split(', ')[5]) : 0;
    }
    return translate;
}
/**
 * Returns an array containing all the parent nodes of the given node
 * @param  {object} node
 * @return {array} parent nodes
 */ function getParents(elem) {
    // Set up a parent array
    var parents = []; // Push each parent element to the array
    for(; elem && elem !== document; elem = elem.parentNode)parents.push(elem);
     // Return our parent array
    return parents;
} // https://gomakethings.com/how-to-get-the-closest-parent-element-with-a-matching-selector-using-vanilla-javascript/
/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */ // These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;
var kSplineTableSize = 11;
var kSampleStepSize = 1 / (kSplineTableSize - 1);
var float32ArraySupported = typeof Float32Array === 'function';
function A(aA1, aA2) {
    return 1 - 3 * aA2 + 3 * aA1;
}
function B(aA1, aA2) {
    return 3 * aA2 - 6 * aA1;
}
function C(aA1) {
    return 3 * aA1;
}
// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier(aT, aA1, aA2) {
    return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
}
// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope(aT, aA1, aA2) {
    return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
}
function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX, currentT, i = 0;
    do {
        currentT = aA + (aB - aA) / 2;
        currentX = calcBezier(currentT, mX1, mX2) - aX;
        if (currentX > 0) aB = currentT;
        else aA = currentT;
    }while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS)
    return currentT;
}
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for(var i = 0; i < NEWTON_ITERATIONS; ++i){
        var currentSlope = getSlope(aGuessT, mX1, mX2);
        if (currentSlope === 0) return aGuessT;
        var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
}
function LinearEasing(x) {
    return x;
}
var src$1 = function bezier(mX1, mY1, mX2, mY2) {
    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) throw new Error('bezier x values must be in [0, 1] range');
    if (mX1 === mY1 && mX2 === mY2) return LinearEasing;
    // Precompute samples table
    var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
    for(var i = 0; i < kSplineTableSize; ++i)sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    function getTForX(aX) {
        var intervalStart = 0;
        var currentSample = 1;
        var lastSample = kSplineTableSize - 1;
        for(; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample)intervalStart += kSampleStepSize;
        --currentSample;
        // Interpolate to provide an initial guess for t
        var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        var guessForT = intervalStart + dist * kSampleStepSize;
        var initialSlope = getSlope(guessForT, mX1, mX2);
        if (initialSlope >= NEWTON_MIN_SLOPE) return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
        else if (initialSlope === 0) return guessForT;
        else return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
    return function BezierEasing(x) {
        // Because JavaScript number are imprecise, we should guarantee the extremes are right.
        if (x === 0) return 0;
        if (x === 1) return 1;
        return calcBezier(getTForX(x), mY1, mY2);
    };
};
var keyCodes$1 = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SPACE: 32,
    TAB: 9,
    PAGEUP: 33,
    PAGEDOWN: 34,
    HOME: 36,
    END: 35
};
var _default$2 = /*#__PURE__*/ function(_Core) {
    _inherits(_default3, _Core);
    var _super = _createSuper(_default3);
    function _default3() {
        var _this;
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        };
        _classCallCheck(this, _default3);
        if (history.scrollRestoration) history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);
        _this = _super.call(this, options);
        if (_this.inertia) _this.lerp = _this.inertia * 0.1;
        _this.isScrolling = false;
        _this.isDraggingScrollbar = false;
        _this.isTicking = false;
        _this.hasScrollTicking = false;
        _this.parallaxElements = {
        };
        _this.stop = false;
        _this.scrollbarContainer = options.scrollbarContainer;
        _this.checkKey = _this.checkKey.bind(_assertThisInitialized(_this));
        window.addEventListener('keydown', _this.checkKey, false);
        return _this;
    }
    _createClass(_default3, [
        {
            key: "init",
            value: function init() {
                var _this2 = this;
                this.html.classList.add(this.smoothClass);
                this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction);
                this.instance = _objectSpread2({
                    delta: {
                        x: this.initPosition.x,
                        y: this.initPosition.y
                    },
                    scroll: {
                        x: this.initPosition.x,
                        y: this.initPosition.y
                    }
                }, this.instance);
                this.vs = new src({
                    el: this.scrollFromAnywhere ? document : this.el,
                    mouseMultiplier: navigator.platform.indexOf('Win') > -1 ? 1 : 0.4,
                    firefoxMultiplier: this.firefoxMultiplier,
                    touchMultiplier: this.touchMultiplier,
                    useKeyboard: false,
                    passive: true
                });
                this.vs.on(function(e) {
                    if (_this2.stop) return;
                    if (!_this2.isDraggingScrollbar) requestAnimationFrame(function() {
                        _this2.updateDelta(e);
                        if (!_this2.isScrolling) _this2.startScrolling();
                    });
                });
                this.setScrollLimit();
                this.initScrollBar();
                this.addSections();
                this.addElements();
                this.checkScroll(true);
                this.transformElements(true, true);
                _get(_getPrototypeOf(_default3.prototype), "init", this).call(this);
            }
        },
        {
            key: "setScrollLimit",
            value: function setScrollLimit() {
                this.instance.limit.y = this.el.offsetHeight - this.windowHeight;
                if (this.direction === 'horizontal') {
                    var totalWidth = 0;
                    var nodes = this.el.children;
                    for(var i = 0; i < nodes.length; i++)totalWidth += nodes[i].offsetWidth;
                    this.instance.limit.x = totalWidth - this.windowWidth;
                }
            }
        },
        {
            key: "startScrolling",
            value: function startScrolling() {
                this.startScrollTs = Date.now(); // Record timestamp
                this.isScrolling = true;
                this.checkScroll();
                this.html.classList.add(this.scrollingClass);
            }
        },
        {
            key: "stopScrolling",
            value: function stopScrolling() {
                cancelAnimationFrame(this.checkScrollRaf); // Prevent checkScroll to continue looping
                //Pevent scrollbar glitch/locking
                this.startScrollTs = undefined;
                if (this.scrollToRaf) {
                    cancelAnimationFrame(this.scrollToRaf);
                    this.scrollToRaf = null;
                }
                this.isScrolling = false;
                this.instance.scroll.y = Math.round(this.instance.scroll.y);
                this.html.classList.remove(this.scrollingClass);
            }
        },
        {
            key: "checkKey",
            value: function checkKey(e) {
                var _this3 = this;
                if (this.stop) {
                    // If we are stopped, we don't want any scroll to occur because of a keypress
                    // Prevent tab to scroll to activeElement
                    if (e.keyCode == keyCodes$1.TAB) requestAnimationFrame(function() {
                        // Make sure native scroll is always at top of page
                        _this3.html.scrollTop = 0;
                        document.body.scrollTop = 0;
                        _this3.html.scrollLeft = 0;
                        document.body.scrollLeft = 0;
                    });
                    return;
                }
                switch(e.keyCode){
                    case keyCodes$1.TAB:
                        // Do not remove the RAF
                        // It allows to override the browser's native scrollTo, which is essential
                        requestAnimationFrame(function() {
                            // Make sure native scroll is always at top of page
                            _this3.html.scrollTop = 0;
                            document.body.scrollTop = 0;
                            _this3.html.scrollLeft = 0;
                            document.body.scrollLeft = 0; // Request scrollTo on the focusedElement, putting it at the center of the screen
                            _this3.scrollTo(document.activeElement, {
                                offset: -window.innerHeight / 2
                            });
                        });
                        break;
                    case keyCodes$1.UP:
                        if (this.isActiveElementScrollSensitive()) this.instance.delta[this.directionAxis] -= 240;
                        break;
                    case keyCodes$1.DOWN:
                        if (this.isActiveElementScrollSensitive()) this.instance.delta[this.directionAxis] += 240;
                        break;
                    case keyCodes$1.PAGEUP:
                        this.instance.delta[this.directionAxis] -= window.innerHeight;
                        break;
                    case keyCodes$1.PAGEDOWN:
                        this.instance.delta[this.directionAxis] += window.innerHeight;
                        break;
                    case keyCodes$1.HOME:
                        this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
                        break;
                    case keyCodes$1.END:
                        this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
                        break;
                    case keyCodes$1.SPACE:
                        if (this.isActiveElementScrollSensitive()) {
                            if (e.shiftKey) this.instance.delta[this.directionAxis] -= window.innerHeight;
                            else this.instance.delta[this.directionAxis] += window.innerHeight;
                        }
                        break;
                    default:
                        return;
                }
                if (this.instance.delta[this.directionAxis] < 0) this.instance.delta[this.directionAxis] = 0;
                if (this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis]) this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis];
                this.stopScrolling(); // Stop any movement, allows to kill any other `scrollTo` still happening
                this.isScrolling = true;
                this.checkScroll();
                this.html.classList.add(this.scrollingClass);
            }
        },
        {
            key: "isActiveElementScrollSensitive",
            value: function isActiveElementScrollSensitive() {
                return !(document.activeElement instanceof HTMLInputElement) && !(document.activeElement instanceof HTMLTextAreaElement) && !(document.activeElement instanceof HTMLButtonElement) && !(document.activeElement instanceof HTMLSelectElement);
            }
        },
        {
            key: "checkScroll",
            value: function checkScroll() {
                var _this4 = this;
                var forced = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                if (forced || this.isScrolling || this.isDraggingScrollbar) {
                    if (!this.hasScrollTicking) {
                        this.checkScrollRaf = requestAnimationFrame(function() {
                            return _this4.checkScroll();
                        });
                        this.hasScrollTicking = true;
                    }
                    this.updateScroll();
                    var distance = Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]);
                    var timeSinceStart = Date.now() - this.startScrollTs; // Get the time since the scroll was started: the scroll can be stopped again only past 100ms
                    if (!this.animatingScroll && timeSinceStart > 100 && (distance < 0.5 && this.instance.delta[this.directionAxis] != 0 || distance < 0.5 && this.instance.delta[this.directionAxis] == 0)) this.stopScrolling();
                    Object.entries(this.sections).forEach(function(_ref) {
                        var _ref2 = _slicedToArray(_ref, 2), i = _ref2[0], section = _ref2[1];
                        if (section.persistent || _this4.instance.scroll[_this4.directionAxis] > section.offset[_this4.directionAxis] && _this4.instance.scroll[_this4.directionAxis] < section.limit[_this4.directionAxis]) {
                            if (_this4.direction === 'horizontal') _this4.transform(section.el, -_this4.instance.scroll[_this4.directionAxis], 0);
                            else _this4.transform(section.el, 0, -_this4.instance.scroll[_this4.directionAxis]);
                            if (!section.inView) {
                                section.inView = true;
                                section.el.style.opacity = 1;
                                section.el.style.pointerEvents = 'all';
                                section.el.setAttribute("data-".concat(_this4.name, "-section-inview"), '');
                            }
                        } else {
                            if (section.inView || forced) {
                                section.inView = false;
                                section.el.style.opacity = 0;
                                section.el.style.pointerEvents = 'none';
                                section.el.removeAttribute("data-".concat(_this4.name, "-section-inview"));
                            }
                            _this4.transform(section.el, 0, 0);
                        }
                    });
                    if (this.getDirection) this.addDirection();
                    if (this.getSpeed) {
                        this.addSpeed();
                        this.speedTs = Date.now();
                    }
                    this.detectElements();
                    this.transformElements();
                    if (this.hasScrollbar) {
                        var scrollBarTranslation = this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis] * this.scrollBarLimit[this.directionAxis];
                        if (this.direction === 'horizontal') this.transform(this.scrollbarThumb, scrollBarTranslation, 0);
                        else this.transform(this.scrollbarThumb, 0, scrollBarTranslation);
                    }
                    _get(_getPrototypeOf(_default3.prototype), "checkScroll", this).call(this);
                    this.hasScrollTicking = false;
                }
            }
        },
        {
            key: "resize",
            value: function resize() {
                this.windowHeight = window.innerHeight;
                this.windowWidth = window.innerWidth;
                this.checkContext();
                this.windowMiddle = {
                    x: this.windowWidth / 2,
                    y: this.windowHeight / 2
                };
                this.update();
            }
        },
        {
            key: "updateDelta",
            value: function updateDelta(e) {
                var delta;
                var gestureDirection = this[this.context] && this[this.context].gestureDirection ? this[this.context].gestureDirection : this.gestureDirection;
                if (gestureDirection === 'both') delta = e.deltaX + e.deltaY;
                else if (gestureDirection === 'vertical') delta = e.deltaY;
                else if (gestureDirection === 'horizontal') delta = e.deltaX;
                else delta = e.deltaY;
                this.instance.delta[this.directionAxis] -= delta * this.multiplier;
                if (this.instance.delta[this.directionAxis] < 0) this.instance.delta[this.directionAxis] = 0;
                if (this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis]) this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis];
            }
        },
        {
            key: "updateScroll",
            value: function updateScroll(e) {
                if (this.isScrolling || this.isDraggingScrollbar) this.instance.scroll[this.directionAxis] = lerp(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.lerp);
                else {
                    if (this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis]) this.setScroll(this.instance.scroll[this.directionAxis], this.instance.limit[this.directionAxis]);
                    else if (this.instance.scroll.y < 0) this.setScroll(this.instance.scroll[this.directionAxis], 0);
                    else this.setScroll(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis]);
                }
            }
        },
        {
            key: "addDirection",
            value: function addDirection() {
                if (this.instance.delta.y > this.instance.scroll.y) {
                    if (this.instance.direction !== 'down') this.instance.direction = 'down';
                } else if (this.instance.delta.y < this.instance.scroll.y) {
                    if (this.instance.direction !== 'up') this.instance.direction = 'up';
                }
                if (this.instance.delta.x > this.instance.scroll.x) {
                    if (this.instance.direction !== 'right') this.instance.direction = 'right';
                } else if (this.instance.delta.x < this.instance.scroll.x) {
                    if (this.instance.direction !== 'left') this.instance.direction = 'left';
                }
            }
        },
        {
            key: "addSpeed",
            value: function addSpeed() {
                if (this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis]) this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / Math.max(1, Date.now() - this.speedTs);
                else this.instance.speed = 0;
            }
        },
        {
            key: "initScrollBar",
            value: function initScrollBar() {
                this.scrollbar = document.createElement('span');
                this.scrollbarThumb = document.createElement('span');
                this.scrollbar.classList.add("".concat(this.scrollbarClass));
                this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb"));
                this.scrollbar.append(this.scrollbarThumb);
                if (this.scrollbarContainer) this.scrollbarContainer.append(this.scrollbar);
                else document.body.append(this.scrollbar);
                 // Scrollbar Events
                this.getScrollBar = this.getScrollBar.bind(this);
                this.releaseScrollBar = this.releaseScrollBar.bind(this);
                this.moveScrollBar = this.moveScrollBar.bind(this);
                this.scrollbarThumb.addEventListener('mousedown', this.getScrollBar);
                window.addEventListener('mouseup', this.releaseScrollBar);
                window.addEventListener('mousemove', this.moveScrollBar); // Set scrollbar values
                this.hasScrollbar = false;
                if (this.direction == 'horizontal') {
                    if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return;
                } else {
                    if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
                }
                this.hasScrollbar = true;
                this.scrollbarBCR = this.scrollbar.getBoundingClientRect();
                this.scrollbarHeight = this.scrollbarBCR.height;
                this.scrollbarWidth = this.scrollbarBCR.width;
                if (this.direction === 'horizontal') this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px");
                else this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px");
                this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect();
                this.scrollBarLimit = {
                    x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                    y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                };
            }
        },
        {
            key: "reinitScrollBar",
            value: function reinitScrollBar() {
                this.hasScrollbar = false;
                if (this.direction == 'horizontal') {
                    if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return;
                } else {
                    if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
                }
                this.hasScrollbar = true;
                this.scrollbarBCR = this.scrollbar.getBoundingClientRect();
                this.scrollbarHeight = this.scrollbarBCR.height;
                this.scrollbarWidth = this.scrollbarBCR.width;
                if (this.direction === 'horizontal') this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px");
                else this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px");
                this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect();
                this.scrollBarLimit = {
                    x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                    y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                };
            }
        },
        {
            key: "destroyScrollBar",
            value: function destroyScrollBar() {
                this.scrollbarThumb.removeEventListener('mousedown', this.getScrollBar);
                window.removeEventListener('mouseup', this.releaseScrollBar);
                window.removeEventListener('mousemove', this.moveScrollBar);
                this.scrollbar.remove();
            }
        },
        {
            key: "getScrollBar",
            value: function getScrollBar(e) {
                this.isDraggingScrollbar = true;
                this.checkScroll();
                this.html.classList.remove(this.scrollingClass);
                this.html.classList.add(this.draggingClass);
            }
        },
        {
            key: "releaseScrollBar",
            value: function releaseScrollBar(e) {
                this.isDraggingScrollbar = false;
                if (this.isScrolling) this.html.classList.add(this.scrollingClass);
                this.html.classList.remove(this.draggingClass);
            }
        },
        {
            key: "moveScrollBar",
            value: function moveScrollBar(e) {
                var _this5 = this;
                if (this.isDraggingScrollbar) requestAnimationFrame(function() {
                    var x = (e.clientX - _this5.scrollbarBCR.left) * 100 / _this5.scrollbarWidth * _this5.instance.limit.x / 100;
                    var y = (e.clientY - _this5.scrollbarBCR.top) * 100 / _this5.scrollbarHeight * _this5.instance.limit.y / 100;
                    if (y > 0 && y < _this5.instance.limit.y) _this5.instance.delta.y = y;
                    if (x > 0 && x < _this5.instance.limit.x) _this5.instance.delta.x = x;
                });
            }
        },
        {
            key: "addElements",
            value: function addElements() {
                var _this6 = this;
                this.els = {
                };
                this.parallaxElements = {
                }; // this.sections.forEach((section, y) => {
                var els = this.el.querySelectorAll("[data-".concat(this.name, "]"));
                els.forEach(function(el, index) {
                    // Try and find the target's parent section
                    var targetParents = getParents(el);
                    var section1 = Object.entries(_this6.sections).map(function(_ref3) {
                        var _ref4 = _slicedToArray(_ref3, 2), key = _ref4[0], section = _ref4[1];
                        return section;
                    }).find(function(section) {
                        return targetParents.includes(section.el);
                    });
                    var cl = el.dataset[_this6.name + 'Class'] || _this6["class"];
                    var id = typeof el.dataset[_this6.name + 'Id'] === 'string' ? el.dataset[_this6.name + 'Id'] : 'el' + index;
                    var top;
                    var left;
                    var repeat = el.dataset[_this6.name + 'Repeat'];
                    var call = el.dataset[_this6.name + 'Call'];
                    var position = el.dataset[_this6.name + 'Position'];
                    var delay = el.dataset[_this6.name + 'Delay'];
                    var direction = el.dataset[_this6.name + 'Direction'];
                    var sticky = typeof el.dataset[_this6.name + 'Sticky'] === 'string';
                    var speed = el.dataset[_this6.name + 'Speed'] ? parseFloat(el.dataset[_this6.name + 'Speed']) / 10 : false;
                    var offset = typeof el.dataset[_this6.name + 'Offset'] === 'string' ? el.dataset[_this6.name + 'Offset'].split(',') : _this6.offset;
                    var target = el.dataset[_this6.name + 'Target'];
                    var targetEl;
                    if (target !== undefined) targetEl = document.querySelector("".concat(target));
                    else targetEl = el;
                    var targetElBCR = targetEl.getBoundingClientRect();
                    if (section1 === null) {
                        top = targetElBCR.top + _this6.instance.scroll.y - getTranslate(targetEl).y;
                        left = targetElBCR.left + _this6.instance.scroll.x - getTranslate(targetEl).x;
                    } else if (!section1.inView) {
                        top = targetElBCR.top - getTranslate(section1.el).y - getTranslate(targetEl).y;
                        left = targetElBCR.left - getTranslate(section1.el).x - getTranslate(targetEl).x;
                    } else {
                        top = targetElBCR.top + _this6.instance.scroll.y - getTranslate(targetEl).y;
                        left = targetElBCR.left + _this6.instance.scroll.x - getTranslate(targetEl).x;
                    }
                    var bottom = top + targetEl.offsetHeight;
                    var right = left + targetEl.offsetWidth;
                    var middle = {
                        x: (right - left) / 2 + left,
                        y: (bottom - top) / 2 + top
                    };
                    if (sticky) {
                        var elBCR = el.getBoundingClientRect();
                        var elTop = elBCR.top;
                        var elLeft = elBCR.left;
                        var elDistance = {
                            x: elLeft - left,
                            y: elTop - top
                        };
                        top += window.innerHeight;
                        left += window.innerWidth;
                        bottom = elTop + targetEl.offsetHeight - el.offsetHeight - elDistance[_this6.directionAxis];
                        right = elLeft + targetEl.offsetWidth - el.offsetWidth - elDistance[_this6.directionAxis];
                        middle = {
                            x: (right - left) / 2 + left,
                            y: (bottom - top) / 2 + top
                        };
                    }
                    if (repeat == 'false') repeat = false;
                    else if (repeat != undefined) repeat = true;
                    else repeat = _this6.repeat;
                    var relativeOffset = [
                        0,
                        0
                    ];
                    if (offset) {
                        if (_this6.direction === 'horizontal') {
                            for(var i = 0; i < offset.length; i++)if (typeof offset[i] == 'string') {
                                if (offset[i].includes('%')) relativeOffset[i] = parseInt(offset[i].replace('%', '') * _this6.windowWidth / 100);
                                else relativeOffset[i] = parseInt(offset[i]);
                            } else relativeOffset[i] = offset[i];
                            left = left + relativeOffset[0];
                            right = right - relativeOffset[1];
                        } else {
                            for(var i = 0; i < offset.length; i++)if (typeof offset[i] == 'string') {
                                if (offset[i].includes('%')) relativeOffset[i] = parseInt(offset[i].replace('%', '') * _this6.windowHeight / 100);
                                else relativeOffset[i] = parseInt(offset[i]);
                            } else relativeOffset[i] = offset[i];
                            top = top + relativeOffset[0];
                            bottom = bottom - relativeOffset[1];
                        }
                    }
                    var mappedEl = {
                        el: el,
                        id: id,
                        "class": cl,
                        section: section1,
                        top: top,
                        middle: middle,
                        bottom: bottom,
                        left: left,
                        right: right,
                        offset: offset,
                        progress: 0,
                        repeat: repeat,
                        inView: false,
                        call: call,
                        speed: speed,
                        delay: delay,
                        position: position,
                        target: targetEl,
                        direction: direction,
                        sticky: sticky
                    };
                    _this6.els[id] = mappedEl;
                    if (el.classList.contains(cl)) _this6.setInView(_this6.els[id], id);
                    if (speed !== false || sticky) _this6.parallaxElements[id] = mappedEl;
                }); // });
            }
        },
        {
            key: "addSections",
            value: function addSections() {
                var _this7 = this;
                this.sections = {
                };
                var sections = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));
                if (sections.length === 0) sections = [
                    this.el
                ];
                sections.forEach(function(section, index) {
                    var id = typeof section.dataset[_this7.name + 'Id'] === 'string' ? section.dataset[_this7.name + 'Id'] : 'section' + index;
                    var sectionBCR = section.getBoundingClientRect();
                    var offset = {
                        x: sectionBCR.left - window.innerWidth * 1.5 - getTranslate(section).x,
                        y: sectionBCR.top - window.innerHeight * 1.5 - getTranslate(section).y
                    };
                    var limit = {
                        x: offset.x + sectionBCR.width + window.innerWidth * 2,
                        y: offset.y + sectionBCR.height + window.innerHeight * 2
                    };
                    var persistent = typeof section.dataset[_this7.name + 'Persistent'] === 'string';
                    section.setAttribute('data-scroll-section-id', id);
                    var mappedSection = {
                        el: section,
                        offset: offset,
                        limit: limit,
                        inView: false,
                        persistent: persistent,
                        id: id
                    };
                    _this7.sections[id] = mappedSection;
                });
            }
        },
        {
            key: "transform",
            value: function transform(element, x, y, delay) {
                var transform;
                if (!delay) transform = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(x, ",").concat(y, ",0,1)");
                else {
                    var start = getTranslate(element);
                    var lerpX = lerp(start.x, x, delay);
                    var lerpY = lerp(start.y, y, delay);
                    transform = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(lerpX, ",").concat(lerpY, ",0,1)");
                }
                element.style.webkitTransform = transform;
                element.style.msTransform = transform;
                element.style.transform = transform;
            }
        },
        {
            key: "transformElements",
            value: function transformElements(isForced) {
                var _this8 = this;
                var setAllElements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                var scrollRight = this.instance.scroll.x + this.windowWidth;
                var scrollBottom = this.instance.scroll.y + this.windowHeight;
                var scrollMiddle = {
                    x: this.instance.scroll.x + this.windowMiddle.x,
                    y: this.instance.scroll.y + this.windowMiddle.y
                };
                Object.entries(this.parallaxElements).forEach(function(_ref5) {
                    var _ref6 = _slicedToArray(_ref5, 2), i = _ref6[0], current = _ref6[1];
                    var transformDistance = false;
                    if (isForced) transformDistance = 0;
                    if (current.inView || setAllElements) switch(current.position){
                        case 'top':
                            transformDistance = _this8.instance.scroll[_this8.directionAxis] * -current.speed;
                            break;
                        case 'elementTop':
                            transformDistance = (scrollBottom - current.top) * -current.speed;
                            break;
                        case 'bottom':
                            transformDistance = (_this8.instance.limit[_this8.directionAxis] - scrollBottom + _this8.windowHeight) * current.speed;
                            break;
                        case 'left':
                            transformDistance = _this8.instance.scroll[_this8.directionAxis] * -current.speed;
                            break;
                        case 'elementLeft':
                            transformDistance = (scrollRight - current.left) * -current.speed;
                            break;
                        case 'right':
                            transformDistance = (_this8.instance.limit[_this8.directionAxis] - scrollRight + _this8.windowHeight) * current.speed;
                            break;
                        default:
                            transformDistance = (scrollMiddle[_this8.directionAxis] - current.middle[_this8.directionAxis]) * -current.speed;
                            break;
                    }
                    if (current.sticky) {
                        if (current.inView) {
                            if (_this8.direction === 'horizontal') transformDistance = _this8.instance.scroll.x - current.left + window.innerWidth;
                            else transformDistance = _this8.instance.scroll.y - current.top + window.innerHeight;
                        } else if (_this8.direction === 'horizontal') {
                            if (_this8.instance.scroll.x < current.left - window.innerWidth && _this8.instance.scroll.x < current.left - window.innerWidth / 2) transformDistance = 0;
                            else if (_this8.instance.scroll.x > current.right && _this8.instance.scroll.x > current.right + 100) transformDistance = current.right - current.left + window.innerWidth;
                            else transformDistance = false;
                        } else {
                            if (_this8.instance.scroll.y < current.top - window.innerHeight && _this8.instance.scroll.y < current.top - window.innerHeight / 2) transformDistance = 0;
                            else if (_this8.instance.scroll.y > current.bottom && _this8.instance.scroll.y > current.bottom + 100) transformDistance = current.bottom - current.top + window.innerHeight;
                            else transformDistance = false;
                        }
                    }
                    if (transformDistance !== false) {
                        if (current.direction === 'horizontal' || _this8.direction === 'horizontal' && current.direction !== 'vertical') _this8.transform(current.el, transformDistance, 0, isForced ? false : current.delay);
                        else _this8.transform(current.el, 0, transformDistance, isForced ? false : current.delay);
                    }
                });
            }
        },
        {
            key: "scrollTo",
            value: function scrollTo(target) {
                var _this9 = this;
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                };
                // Parse options
                var offset = parseInt(options.offset) || 0; // An offset to apply on top of given `target` or `sourceElem`'s target
                var duration = !isNaN(parseInt(options.duration)) ? parseInt(options.duration) : 1000; // Duration of the scroll animation in milliseconds
                var easing = options.easing || [
                    0.25,
                    0,
                    0.35,
                    1
                ]; // An array of 4 floats between 0 and 1 defining the bezier curve for the animation's easing. See http://greweb.me/bezier-easing-editor/example/
                var disableLerp = options.disableLerp ? true : false; // Lerp effect won't be applied if set to true
                var callback = options.callback ? options.callback : false; // function called when scrollTo completes (note that it won't wait for lerp to stabilize)
                easing = src$1.apply(void 0, _toConsumableArray(easing));
                if (typeof target === 'string') {
                    // Selector or boundaries
                    if (target === 'top') target = 0;
                    else if (target === 'bottom') target = this.instance.limit.y;
                    else if (target === 'left') target = 0;
                    else if (target === 'right') target = this.instance.limit.x;
                    else {
                        target = document.querySelector(target); // If the query fails, abort
                        if (!target) return;
                    }
                } else if (typeof target === 'number') // Absolute coordinate
                target = parseInt(target);
                else if (target && target.tagName) ;
                else {
                    console.warn('`target` parameter is not valid');
                    return;
                } // We have a target that is not a coordinate yet, get it
                if (typeof target !== 'number') {
                    // Verify the given target belongs to this scroll scope
                    var targetInScope = getParents(target).includes(this.el);
                    if (!targetInScope) // If the target isn't inside our main element, abort any action
                    return;
                     // Get target offset from top
                    var targetBCR = target.getBoundingClientRect();
                    var offsetTop = targetBCR.top;
                    var offsetLeft = targetBCR.left; // Try and find the target's parent section
                    var targetParents = getParents(target);
                    var parentSection = targetParents.find(function(candidate) {
                        return Object.entries(_this9.sections) // Get sections associative array as a regular array
                        .map(function(_ref7) {
                            var _ref8 = _slicedToArray(_ref7, 2), key = _ref8[0], section = _ref8[1];
                            return section;
                        }) // map to section only (we dont need the key here)
                        .find(function(section) {
                            return section.el == candidate;
                        }); // finally find the section that matches the candidate
                    });
                    var parentSectionOffset = 0;
                    if (parentSection) parentSectionOffset = getTranslate(parentSection)[this.directionAxis]; // We got a parent section, store it's current offset to remove it later
                    else // if no parent section is found we need to use instance scroll directly
                    parentSectionOffset = -this.instance.scroll[this.directionAxis];
                     // Final value of scroll destination : offsetTop + (optional offset given in options) - (parent's section translate)
                    if (this.direction === 'horizontal') offset = offsetLeft + offset - parentSectionOffset;
                    else offset = offsetTop + offset - parentSectionOffset;
                } else offset = target + offset;
                 // Actual scrollto
                // ==========================================================================
                // Setup
                var scrollStart = parseFloat(this.instance.delta[this.directionAxis]);
                var scrollTarget = Math.max(0, Math.min(offset, this.instance.limit[this.directionAxis])); // Make sure our target is in the scroll boundaries
                var scrollDiff = scrollTarget - scrollStart;
                var render = function render(p) {
                    if (disableLerp) {
                        if (_this9.direction === 'horizontal') _this9.setScroll(scrollStart + scrollDiff * p, _this9.instance.delta.y);
                        else _this9.setScroll(_this9.instance.delta.x, scrollStart + scrollDiff * p);
                    } else _this9.instance.delta[_this9.directionAxis] = scrollStart + scrollDiff * p;
                }; // Prepare the scroll
                this.animatingScroll = true; // This boolean allows to prevent `checkScroll()` from calling `stopScrolling` when the animation is slow (i.e. at the beginning of an EaseIn)
                this.stopScrolling(); // Stop any movement, allows to kill any other `scrollTo` still happening
                this.startScrolling(); // Restart the scroll
                // Start the animation loop
                var start = Date.now();
                var loop1 = function loop() {
                    var p = (Date.now() - start) / duration; // Animation progress
                    if (p > 1) {
                        // Animation ends
                        render(1);
                        _this9.animatingScroll = false;
                        if (duration == 0) _this9.update();
                        if (callback) callback();
                    } else {
                        _this9.scrollToRaf = requestAnimationFrame(loop);
                        render(easing(p));
                    }
                };
                loop1();
            }
        },
        {
            key: "update",
            value: function update() {
                this.setScrollLimit();
                this.addSections();
                this.addElements();
                this.detectElements();
                this.updateScroll();
                this.transformElements(true);
                this.reinitScrollBar();
                this.checkScroll(true);
            }
        },
        {
            key: "startScroll",
            value: function startScroll() {
                this.stop = false;
            }
        },
        {
            key: "stopScroll",
            value: function stopScroll() {
                this.stop = true;
            }
        },
        {
            key: "setScroll",
            value: function setScroll(x, y) {
                this.instance = _objectSpread2(_objectSpread2({
                }, this.instance), {
                }, {
                    scroll: {
                        x: x,
                        y: y
                    },
                    delta: {
                        x: x,
                        y: y
                    },
                    speed: 0
                });
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                _get(_getPrototypeOf(_default3.prototype), "destroy", this).call(this);
                this.stopScrolling();
                this.html.classList.remove(this.smoothClass);
                this.vs.destroy();
                this.destroyScrollBar();
                window.removeEventListener('keydown', this.checkKey, false);
            }
        }
    ]);
    return _default3;
}(_default);
var Smooth = /*#__PURE__*/ function() {
    function Smooth1() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        };
        _classCallCheck(this, Smooth1);
        this.options = options; // Override default options with given ones
        Object.assign(this, defaults, options);
        this.smartphone = defaults.smartphone;
        if (options.smartphone) Object.assign(this.smartphone, options.smartphone);
        this.tablet = defaults.tablet;
        if (options.tablet) Object.assign(this.tablet, options.tablet);
        if (!this.smooth && this.direction == 'horizontal') console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible');
        if (!this.tablet.smooth && this.tablet.direction == 'horizontal') console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)');
        if (!this.smartphone.smooth && this.smartphone.direction == 'horizontal') console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)');
        this.init();
    }
    _createClass(Smooth1, [
        {
            key: "init",
            value: function init() {
                this.options.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 || window.innerWidth < this.tablet.breakpoint;
                this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint;
                if (this.smooth && !this.options.isMobile || this.tablet.smooth && this.options.isTablet || this.smartphone.smooth && this.options.isMobile && !this.options.isTablet) this.scroll = new _default$2(this.options);
                else this.scroll = new _default$1(this.options);
                this.scroll.init();
                if (window.location.hash) {
                    // Get the hash without the '#' and find the matching element
                    var id = window.location.hash.slice(1, window.location.hash.length);
                    var target = document.getElementById(id); // If found, scroll to the element
                    if (target) this.scroll.scrollTo(target);
                }
            }
        },
        {
            key: "update",
            value: function update() {
                this.scroll.update();
            }
        },
        {
            key: "start",
            value: function start() {
                this.scroll.startScroll();
            }
        },
        {
            key: "stop",
            value: function stop() {
                this.scroll.stopScroll();
            }
        },
        {
            key: "scrollTo",
            value: function scrollTo(target, options) {
                this.scroll.scrollTo(target, options);
            }
        },
        {
            key: "setScroll",
            value: function setScroll(x, y) {
                this.scroll.setScroll(x, y);
            }
        },
        {
            key: "on",
            value: function on(event, func) {
                this.scroll.setEvents(event, func);
            }
        },
        {
            key: "off",
            value: function off(event, func) {
                this.scroll.unsetEvents(event, func);
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this.scroll.destroy();
            }
        }
    ]);
    return Smooth1;
}();
var Native = /*#__PURE__*/ function() {
    function Native1() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        };
        _classCallCheck(this, Native1);
        this.options = options; // Override default options with given ones
        Object.assign(this, defaults, options);
        this.smartphone = defaults.smartphone;
        if (options.smartphone) Object.assign(this.smartphone, options.smartphone);
        this.tablet = defaults.tablet;
        if (options.tablet) Object.assign(this.tablet, options.tablet);
        this.init();
    }
    _createClass(Native1, [
        {
            key: "init",
            value: function init() {
                this.scroll = new _default$1(this.options);
                this.scroll.init();
                if (window.location.hash) {
                    // Get the hash without the '#' and find the matching element
                    var id = window.location.hash.slice(1, window.location.hash.length);
                    var target = document.getElementById(id); // If found, scroll to the element
                    if (target) this.scroll.scrollTo(target);
                }
            }
        },
        {
            key: "update",
            value: function update() {
                this.scroll.update();
            }
        },
        {
            key: "start",
            value: function start() {
                this.scroll.startScroll();
            }
        },
        {
            key: "stop",
            value: function stop() {
                this.scroll.stopScroll();
            }
        },
        {
            key: "scrollTo",
            value: function scrollTo(target, options) {
                this.scroll.scrollTo(target, options);
            }
        },
        {
            key: "setScroll",
            value: function setScroll(x, y) {
                this.scroll.setScroll(x, y);
            }
        },
        {
            key: "on",
            value: function on(event, func) {
                this.scroll.setEvents(event, func);
            }
        },
        {
            key: "off",
            value: function off(event, func) {
                this.scroll.unsetEvents(event, func);
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this.scroll.destroy();
            }
        }
    ]);
    return Native1;
}();
exports.default = Smooth;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aErfw":[function() {},{}],"3v1v0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Cursor", ()=>Cursor
);
var _gsap = require("gsap");
var _utils = require("./utils");
// Track the mouse position
let mouse = {
    x: 0,
    y: 0
};
window.addEventListener('mousemove', (ev)=>mouse = _utils.getMousePos(ev)
);
class Cursor {
    constructor(el){
        this.DOM = {
            el: el
        };
        this.DOM.el.style.opacity = 0;
        this.DOM.el.style.stroke = "#000";
        this.bounds = this.DOM.el.getBoundingClientRect();
        this.renderedStyles = {
            tx: {
                previous: 0,
                current: 0,
                amt: 0.15
            },
            ty: {
                previous: 0,
                current: 0,
                amt: 0.15
            },
            scale: {
                previous: 1,
                current: 1,
                amt: 0.15
            },
            opacity: {
                previous: 1,
                current: 1,
                amt: 0.1
            },
            stroke: {
                previous: "#ffffff",
                current: "#ffffff",
                amt: 0.1
            }
        };
        this.onMouseMoveEv = ()=>{
            this.renderedStyles.tx.previous = this.renderedStyles.tx.current = mouse.x - this.bounds.width / 2;
            this.renderedStyles.ty.previous = this.renderedStyles.ty.previous = mouse.y - this.bounds.height / 2;
            _gsap.gsap.to(this.DOM.el, {
                duration: 0.9,
                ease: 'Power3.easeOut',
                opacity: 1
            });
            requestAnimationFrame(()=>this.render()
            );
            window.removeEventListener('mousemove', this.onMouseMoveEv);
        };
        window.addEventListener('mousemove', this.onMouseMoveEv);
    }
    enter() {
        this.renderedStyles['scale'].current = 2.5;
        this.renderedStyles['opacity'].current = 1;
        this.renderedStyles['stroke'].current = "#ffffff";
    }
    leave() {
        this.renderedStyles['scale'].current = 1;
        this.renderedStyles['opacity'].current = 1;
        this.renderedStyles['stroke'].current = "#000000";
    }
    render() {
        this.renderedStyles['tx'].current = mouse.x - this.bounds.width / 2;
        this.renderedStyles['ty'].current = mouse.y - this.bounds.height / 2;
        for(const key in this.renderedStyles)this.renderedStyles[key].previous = _utils.lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt);
        this.DOM.el.style.transform = `translateX(${this.renderedStyles['tx'].previous}px) translateY(${this.renderedStyles['ty'].previous}px) scale(${this.renderedStyles['scale'].previous})`;
        this.DOM.el.style.opacity = this.renderedStyles['opacity'].previous;
        this.DOM.el.style.stroke = this.renderedStyles['stroke'].previous;
        requestAnimationFrame(()=>this.render()
        );
    }
}

},{"gsap":"fPSuC","./utils":"72Dku","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"72Dku":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "map", ()=>map
);
parcelHelpers.export(exports, "lerp", ()=>lerp
);
parcelHelpers.export(exports, "clamp", ()=>clamp
);
parcelHelpers.export(exports, "getMousePos", ()=>getMousePos
);
parcelHelpers.export(exports, "distance", ()=>distance
);
parcelHelpers.export(exports, "getRandomFloat", ()=>getRandomFloat
);
parcelHelpers.export(exports, "calcWinsize", ()=>calcWinsize
);
// Map number x from range [a, b] to [c, d]
const map = (x, a, b, c, d)=>(x - a) * (d - c) / (b - a) + c
;
// Linear interpolation
const lerp = (a, b, n)=>(1 - n) * a + n * b
;
const clamp = (num, min, max)=>num <= min ? min : num >= max ? max : num
;
// Gets the mouse position
const getMousePos = (e)=>{
    return {
        x: e.clientX,
        y: e.clientY
    };
};
const calcWinsize = ()=>{
    return {
        width: window.innerWidth,
        height: window.innerHeight
    };
};
const distance = (x1, y1, x2, y2)=>{
    var a = x1 - x2;
    var b = y1 - y2;
    return Math.hypot(a, b);
};
// Generate a random float.
const getRandomFloat = (min, max)=>(Math.random() * (max - min) + min).toFixed(2)
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"82j8t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _swiper = require("swiper");
var _swiperDefault = parcelHelpers.interopDefault(_swiper);
var _i18N = require("../i18n");
function projectsSlider() {
    let el = document.querySelector('.swiper');
    if (!el) return;
    const swiper = new _swiperDefault.default('.swiper', {
        modules: [
            _swiper.Navigation,
            _swiper.Pagination,
            _swiper.Scrollbar
        ],
        loop: true,
        // scrollbar
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true
        },
        // Navigation arrows
        navigation: {
            nextEl: '.projects-next',
            prevEl: '.projects-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function(index, className) {
                return '<button class="' + className + '">' + _i18N.projects[index].title + '</button>';
            }
        }
    });
}
exports.default = projectsSlider;

},{"swiper":"cCbRx","../i18n":"6LohX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cCbRx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Swiper 8.0.7
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: March 4, 2022
 */ parcelHelpers.export(exports, "Swiper", ()=>_coreJsDefault.default
);
parcelHelpers.export(exports, "default", ()=>_coreJsDefault.default
);
parcelHelpers.export(exports, "Virtual", ()=>_virtualJsDefault.default
);
parcelHelpers.export(exports, "Keyboard", ()=>_keyboardJsDefault.default
);
parcelHelpers.export(exports, "Mousewheel", ()=>_mousewheelJsDefault.default
);
parcelHelpers.export(exports, "Navigation", ()=>_navigationJsDefault.default
);
parcelHelpers.export(exports, "Pagination", ()=>_paginationJsDefault.default
);
parcelHelpers.export(exports, "Scrollbar", ()=>_scrollbarJsDefault.default
);
parcelHelpers.export(exports, "Parallax", ()=>_parallaxJsDefault.default
);
parcelHelpers.export(exports, "Zoom", ()=>_zoomJsDefault.default
);
parcelHelpers.export(exports, "Lazy", ()=>_lazyJsDefault.default
);
parcelHelpers.export(exports, "Controller", ()=>_controllerJsDefault.default
);
parcelHelpers.export(exports, "A11y", ()=>_a11YJsDefault.default
);
parcelHelpers.export(exports, "History", ()=>_historyJsDefault.default
);
parcelHelpers.export(exports, "HashNavigation", ()=>_hashNavigationJsDefault.default
);
parcelHelpers.export(exports, "Autoplay", ()=>_autoplayJsDefault.default
);
parcelHelpers.export(exports, "Thumbs", ()=>_thumbsJsDefault.default
);
parcelHelpers.export(exports, "FreeMode", ()=>_freeModeJsDefault.default
);
parcelHelpers.export(exports, "Grid", ()=>_gridJsDefault.default
);
parcelHelpers.export(exports, "Manipulation", ()=>_manipulationJsDefault.default
);
parcelHelpers.export(exports, "EffectFade", ()=>_effectFadeJsDefault.default
);
parcelHelpers.export(exports, "EffectCube", ()=>_effectCubeJsDefault.default
);
parcelHelpers.export(exports, "EffectFlip", ()=>_effectFlipJsDefault.default
);
parcelHelpers.export(exports, "EffectCoverflow", ()=>_effectCoverflowJsDefault.default
);
parcelHelpers.export(exports, "EffectCreative", ()=>_effectCreativeJsDefault.default
);
parcelHelpers.export(exports, "EffectCards", ()=>_effectCardsJsDefault.default
);
var _coreJs = require("./core/core.js");
var _coreJsDefault = parcelHelpers.interopDefault(_coreJs);
var _virtualJs = require("./modules/virtual/virtual.js");
var _virtualJsDefault = parcelHelpers.interopDefault(_virtualJs);
var _keyboardJs = require("./modules/keyboard/keyboard.js");
var _keyboardJsDefault = parcelHelpers.interopDefault(_keyboardJs);
var _mousewheelJs = require("./modules/mousewheel/mousewheel.js");
var _mousewheelJsDefault = parcelHelpers.interopDefault(_mousewheelJs);
var _navigationJs = require("./modules/navigation/navigation.js");
var _navigationJsDefault = parcelHelpers.interopDefault(_navigationJs);
var _paginationJs = require("./modules/pagination/pagination.js");
var _paginationJsDefault = parcelHelpers.interopDefault(_paginationJs);
var _scrollbarJs = require("./modules/scrollbar/scrollbar.js");
var _scrollbarJsDefault = parcelHelpers.interopDefault(_scrollbarJs);
var _parallaxJs = require("./modules/parallax/parallax.js");
var _parallaxJsDefault = parcelHelpers.interopDefault(_parallaxJs);
var _zoomJs = require("./modules/zoom/zoom.js");
var _zoomJsDefault = parcelHelpers.interopDefault(_zoomJs);
var _lazyJs = require("./modules/lazy/lazy.js");
var _lazyJsDefault = parcelHelpers.interopDefault(_lazyJs);
var _controllerJs = require("./modules/controller/controller.js");
var _controllerJsDefault = parcelHelpers.interopDefault(_controllerJs);
var _a11YJs = require("./modules/a11y/a11y.js");
var _a11YJsDefault = parcelHelpers.interopDefault(_a11YJs);
var _historyJs = require("./modules/history/history.js");
var _historyJsDefault = parcelHelpers.interopDefault(_historyJs);
var _hashNavigationJs = require("./modules/hash-navigation/hash-navigation.js");
var _hashNavigationJsDefault = parcelHelpers.interopDefault(_hashNavigationJs);
var _autoplayJs = require("./modules/autoplay/autoplay.js");
var _autoplayJsDefault = parcelHelpers.interopDefault(_autoplayJs);
var _thumbsJs = require("./modules/thumbs/thumbs.js");
var _thumbsJsDefault = parcelHelpers.interopDefault(_thumbsJs);
var _freeModeJs = require("./modules/free-mode/free-mode.js");
var _freeModeJsDefault = parcelHelpers.interopDefault(_freeModeJs);
var _gridJs = require("./modules/grid/grid.js");
var _gridJsDefault = parcelHelpers.interopDefault(_gridJs);
var _manipulationJs = require("./modules/manipulation/manipulation.js");
var _manipulationJsDefault = parcelHelpers.interopDefault(_manipulationJs);
var _effectFadeJs = require("./modules/effect-fade/effect-fade.js");
var _effectFadeJsDefault = parcelHelpers.interopDefault(_effectFadeJs);
var _effectCubeJs = require("./modules/effect-cube/effect-cube.js");
var _effectCubeJsDefault = parcelHelpers.interopDefault(_effectCubeJs);
var _effectFlipJs = require("./modules/effect-flip/effect-flip.js");
var _effectFlipJsDefault = parcelHelpers.interopDefault(_effectFlipJs);
var _effectCoverflowJs = require("./modules/effect-coverflow/effect-coverflow.js");
var _effectCoverflowJsDefault = parcelHelpers.interopDefault(_effectCoverflowJs);
var _effectCreativeJs = require("./modules/effect-creative/effect-creative.js");
var _effectCreativeJsDefault = parcelHelpers.interopDefault(_effectCreativeJs);
var _effectCardsJs = require("./modules/effect-cards/effect-cards.js");
var _effectCardsJsDefault = parcelHelpers.interopDefault(_effectCardsJs);

},{"./core/core.js":"jvZQa","./modules/virtual/virtual.js":"13JV9","./modules/keyboard/keyboard.js":"82wTs","./modules/mousewheel/mousewheel.js":"dP6Ui","./modules/navigation/navigation.js":"lGdRo","./modules/pagination/pagination.js":"40Lys","./modules/scrollbar/scrollbar.js":"bfOsF","./modules/parallax/parallax.js":"aEM3Y","./modules/zoom/zoom.js":"5YHxH","./modules/lazy/lazy.js":"kPhLF","./modules/controller/controller.js":"hcdrq","./modules/a11y/a11y.js":"lDTl7","./modules/history/history.js":"7pifE","./modules/hash-navigation/hash-navigation.js":"6TTnC","./modules/autoplay/autoplay.js":"1YoHq","./modules/thumbs/thumbs.js":"e0dJV","./modules/free-mode/free-mode.js":"4NFQW","./modules/grid/grid.js":"gE5KG","./modules/manipulation/manipulation.js":"ga5Sr","./modules/effect-fade/effect-fade.js":"fBGpM","./modules/effect-cube/effect-cube.js":"hV6iY","./modules/effect-flip/effect-flip.js":"dI6Dz","./modules/effect-coverflow/effect-coverflow.js":"9UFNU","./modules/effect-creative/effect-creative.js":"6uSvC","./modules/effect-cards/effect-cards.js":"9saRD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jvZQa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint no-param-reassign: "off" */ var _ssrWindow = require("ssr-window");
var _domJs = require("../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../shared/utils.js");
var _getSupportJs = require("../shared/get-support.js");
var _getDeviceJs = require("../shared/get-device.js");
var _getBrowserJs = require("../shared/get-browser.js");
var _resizeJs = require("./modules/resize/resize.js");
var _resizeJsDefault = parcelHelpers.interopDefault(_resizeJs);
var _observerJs = require("./modules/observer/observer.js");
var _observerJsDefault = parcelHelpers.interopDefault(_observerJs);
var _eventsEmitterJs = require("./events-emitter.js");
var _eventsEmitterJsDefault = parcelHelpers.interopDefault(_eventsEmitterJs);
var _indexJs = require("./update/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("./translate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("./transition/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("./slide/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("./loop/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("./grab-cursor/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("./events/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs6);
var _indexJs7 = require("./breakpoints/index.js");
var _indexJsDefault7 = parcelHelpers.interopDefault(_indexJs7);
var _indexJs8 = require("./classes/index.js");
var _indexJsDefault8 = parcelHelpers.interopDefault(_indexJs8);
var _indexJs9 = require("./images/index.js");
var _indexJsDefault9 = parcelHelpers.interopDefault(_indexJs9);
var _indexJs10 = require("./check-overflow/index.js");
var _indexJsDefault10 = parcelHelpers.interopDefault(_indexJs10);
var _defaultsJs = require("./defaults.js");
var _defaultsJsDefault = parcelHelpers.interopDefault(_defaultsJs);
var _moduleExtendParamsJs = require("./moduleExtendParams.js");
var _moduleExtendParamsJsDefault = parcelHelpers.interopDefault(_moduleExtendParamsJs);
const prototypes = {
    eventsEmitter: _eventsEmitterJsDefault.default,
    update: _indexJsDefault.default,
    translate: _indexJsDefault1.default,
    transition: _indexJsDefault2.default,
    slide: _indexJsDefault3.default,
    loop: _indexJsDefault4.default,
    grabCursor: _indexJsDefault5.default,
    events: _indexJsDefault6.default,
    breakpoints: _indexJsDefault7.default,
    checkOverflow: _indexJsDefault10.default,
    classes: _indexJsDefault8.default,
    images: _indexJsDefault9.default
};
const extendedDefaults = {
};
class Swiper {
    constructor(){
        let el;
        let params;
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') params = args[0];
        else [el, params] = args;
        if (!params) params = {
        };
        params = _utilsJs.extend({
        }, params);
        if (el && !params.el) params.el = el;
        if (params.el && _domJsDefault.default(params.el).length > 1) {
            const swipers = [];
            _domJsDefault.default(params.el).each((containerEl)=>{
                const newParams = _utilsJs.extend({
                }, params, {
                    el: containerEl
                });
                swipers.push(new Swiper(newParams));
            });
            return swipers;
        } // Swiper Instance
        const swiper = this;
        swiper.__swiper__ = true;
        swiper.support = _getSupportJs.getSupport();
        swiper.device = _getDeviceJs.getDevice({
            userAgent: params.userAgent
        });
        swiper.browser = _getBrowserJs.getBrowser();
        swiper.eventsListeners = {
        };
        swiper.eventsAnyListeners = [];
        swiper.modules = [
            ...swiper.__modules__
        ];
        if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
        const allModulesParams = {
        };
        swiper.modules.forEach((mod)=>{
            mod({
                swiper,
                extendParams: _moduleExtendParamsJsDefault.default(params, allModulesParams),
                on: swiper.on.bind(swiper),
                once: swiper.once.bind(swiper),
                off: swiper.off.bind(swiper),
                emit: swiper.emit.bind(swiper)
            });
        }); // Extend defaults with modules params
        const swiperParams = _utilsJs.extend({
        }, _defaultsJsDefault.default, allModulesParams); // Extend defaults with passed params
        swiper.params = _utilsJs.extend({
        }, swiperParams, extendedDefaults, params);
        swiper.originalParams = _utilsJs.extend({
        }, swiper.params);
        swiper.passedParams = _utilsJs.extend({
        }, params); // add event listeners
        if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName)=>{
            swiper.on(eventName, swiper.params.on[eventName]);
        });
        if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
         // Save Dom lib
        swiper.$ = _domJsDefault.default; // Extend Swiper
        Object.assign(swiper, {
            enabled: swiper.params.enabled,
            el,
            // Classes
            classNames: [],
            // Slides
            slides: _domJsDefault.default(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            // isDirection
            isHorizontal () {
                return swiper.params.direction === 'horizontal';
            },
            isVertical () {
                return swiper.params.direction === 'vertical';
            },
            // Indexes
            activeIndex: 0,
            realIndex: 0,
            //
            isBeginning: true,
            isEnd: false,
            // Props
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: false,
            // Locks
            allowSlideNext: swiper.params.allowSlideNext,
            allowSlidePrev: swiper.params.allowSlidePrev,
            // Touch Events
            touchEvents: function touchEvents() {
                const touch = [
                    'touchstart',
                    'touchmove',
                    'touchend',
                    'touchcancel'
                ];
                const desktop = [
                    'pointerdown',
                    'pointermove',
                    'pointerup'
                ];
                swiper.touchEventsTouch = {
                    start: touch[0],
                    move: touch[1],
                    end: touch[2],
                    cancel: touch[3]
                };
                swiper.touchEventsDesktop = {
                    start: desktop[0],
                    move: desktop[1],
                    end: desktop[2]
                };
                return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
            }(),
            touchEventsData: {
                isTouched: undefined,
                isMoved: undefined,
                allowTouchCallbacks: undefined,
                touchStartTime: undefined,
                isScrolling: undefined,
                currentTranslate: undefined,
                startTranslate: undefined,
                allowThresholdMove: undefined,
                // Form elements to match
                focusableElements: swiper.params.focusableElements,
                // Last click time
                lastClickTime: _utilsJs.now(),
                clickTimeout: undefined,
                // Velocities
                velocities: [],
                allowMomentumBounce: undefined,
                isTouchEvent: undefined,
                startMoving: undefined
            },
            // Clicks
            allowClick: true,
            // Touches
            allowTouchMove: swiper.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            // Images
            imagesToLoad: [],
            imagesLoaded: 0
        });
        swiper.emit('_swiper'); // Init
        if (swiper.params.init) swiper.init();
         // Return app instance
        return swiper;
    }
    enable() {
        const swiper = this;
        if (swiper.enabled) return;
        swiper.enabled = true;
        if (swiper.params.grabCursor) swiper.setGrabCursor();
        swiper.emit('enable');
    }
    disable() {
        const swiper = this;
        if (!swiper.enabled) return;
        swiper.enabled = false;
        if (swiper.params.grabCursor) swiper.unsetGrabCursor();
        swiper.emit('disable');
    }
    setProgress(progress, speed) {
        const swiper = this;
        progress = Math.min(Math.max(progress, 0), 1);
        const min = swiper.minTranslate();
        const max = swiper.maxTranslate();
        const current = (max - min) * progress + min;
        swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    emitContainerClasses() {
        const swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        const cls = swiper.el.className.split(' ').filter((className)=>{
            return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
        });
        swiper.emit('_containerClasses', cls.join(' '));
    }
    getSlideClasses(slideEl) {
        const swiper = this;
        return slideEl.className.split(' ').filter((className)=>{
            return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
        }).join(' ');
    }
    emitSlidesClasses() {
        const swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        const updates = [];
        swiper.slides.each((slideEl)=>{
            const classNames = swiper.getSlideClasses(slideEl);
            updates.push({
                slideEl,
                classNames
            });
            swiper.emit('_slideClass', slideEl, classNames);
        });
        swiper.emit('_slideClasses', updates);
    }
    slidesPerViewDynamic(view, exact) {
        if (view === void 0) view = 'current';
        if (exact === void 0) exact = false;
        const swiper = this;
        const { params , slides , slidesGrid , slidesSizesGrid , size: swiperSize , activeIndex  } = swiper;
        let spv = 1;
        if (params.centeredSlides) {
            let slideSize = slides[activeIndex].swiperSlideSize;
            let breakLoop;
            for(let i = activeIndex + 1; i < slides.length; i += 1)if (slides[i] && !breakLoop) {
                slideSize += slides[i].swiperSlideSize;
                spv += 1;
                if (slideSize > swiperSize) breakLoop = true;
            }
            for(let i1 = activeIndex - 1; i1 >= 0; i1 -= 1)if (slides[i1] && !breakLoop) {
                slideSize += slides[i1].swiperSlideSize;
                spv += 1;
                if (slideSize > swiperSize) breakLoop = true;
            }
        } else {
            // eslint-disable-next-line
            if (view === 'current') for(let i = activeIndex + 1; i < slides.length; i += 1){
                const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                if (slideInView) spv += 1;
            }
            else // previous
            for(let i2 = activeIndex - 1; i2 >= 0; i2 -= 1){
                const slideInView = slidesGrid[activeIndex] - slidesGrid[i2] < swiperSize;
                if (slideInView) spv += 1;
            }
        }
        return spv;
    }
    update() {
        const swiper = this;
        if (!swiper || swiper.destroyed) return;
        const { snapGrid , params  } = swiper; // Breakpoints
        if (params.breakpoints) swiper.setBreakpoint();
        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        function setTranslate() {
            const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
            const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
            swiper.setTranslate(newTranslate);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        let translated;
        if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
            setTranslate();
            if (swiper.params.autoHeight) swiper.updateAutoHeight();
        } else {
            if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
            else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (!translated) setTranslate();
        }
        if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        swiper.emit('update');
    }
    changeDirection(newDirection, needUpdate) {
        if (needUpdate === void 0) needUpdate = true;
        const swiper = this;
        const currentDirection = swiper.params.direction;
        if (!newDirection) // eslint-disable-next-line
        newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
        if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') return swiper;
        swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
        swiper.emitContainerClasses();
        swiper.params.direction = newDirection;
        swiper.slides.each((slideEl)=>{
            if (newDirection === 'vertical') slideEl.style.width = '';
            else slideEl.style.height = '';
        });
        swiper.emit('changeDirection');
        if (needUpdate) swiper.update();
        return swiper;
    }
    mount(el) {
        const swiper = this;
        if (swiper.mounted) return true; // Find el
        const $el = _domJsDefault.default(el || swiper.params.el);
        el = $el[0];
        if (!el) return false;
        el.swiper = swiper;
        const getWrapperSelector = ()=>{
            return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
        };
        const getWrapper = ()=>{
            if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                const res = _domJsDefault.default(el.shadowRoot.querySelector(getWrapperSelector())); // Children needs to return slot items
                res.children = (options)=>$el.children(options)
                ;
                return res;
            }
            return $el.children(getWrapperSelector());
        }; // Find Wrapper
        let $wrapperEl = getWrapper();
        if ($wrapperEl.length === 0 && swiper.params.createElements) {
            const document = _ssrWindow.getDocument();
            const wrapper = document.createElement('div');
            $wrapperEl = _domJsDefault.default(wrapper);
            wrapper.className = swiper.params.wrapperClass;
            $el.append(wrapper);
            $el.children(`.${swiper.params.slideClass}`).each((slideEl)=>{
                $wrapperEl.append(slideEl);
            });
        }
        Object.assign(swiper, {
            $el,
            el,
            $wrapperEl,
            wrapperEl: $wrapperEl[0],
            mounted: true,
            // RTL
            rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
            rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
            wrongRTL: $wrapperEl.css('display') === '-webkit-box'
        });
        return true;
    }
    init(el) {
        const swiper = this;
        if (swiper.initialized) return swiper;
        const mounted = swiper.mount(el);
        if (mounted === false) return swiper;
        swiper.emit('beforeInit'); // Set breakpoint
        if (swiper.params.breakpoints) swiper.setBreakpoint();
         // Add Classes
        swiper.addClasses(); // Create loop
        if (swiper.params.loop) swiper.loopCreate();
         // Update size
        swiper.updateSize(); // Update slides
        swiper.updateSlides();
        if (swiper.params.watchOverflow) swiper.checkOverflow();
         // Set Grab Cursor
        if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
        if (swiper.params.preloadImages) swiper.preloadImages();
         // Slide To Initial Slide
        if (swiper.params.loop) swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
        else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
         // Attach events
        swiper.attachEvents(); // Init Flag
        swiper.initialized = true; // Emit
        swiper.emit('init');
        swiper.emit('afterInit');
        return swiper;
    }
    destroy(deleteInstance, cleanStyles) {
        if (deleteInstance === void 0) deleteInstance = true;
        if (cleanStyles === void 0) cleanStyles = true;
        const swiper = this;
        const { params , $el , $wrapperEl , slides  } = swiper;
        if (typeof swiper.params === 'undefined' || swiper.destroyed) return null;
        swiper.emit('beforeDestroy'); // Init Flag
        swiper.initialized = false; // Detach events
        swiper.detachEvents(); // Destroy loop
        if (params.loop) swiper.loopDestroy();
         // Cleanup styles
        if (cleanStyles) {
            swiper.removeClasses();
            $el.removeAttr('style');
            $wrapperEl.removeAttr('style');
            if (slides && slides.length) slides.removeClass([
                params.slideVisibleClass,
                params.slideActiveClass,
                params.slideNextClass,
                params.slidePrevClass
            ].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
        }
        swiper.emit('destroy'); // Detach emitter events
        Object.keys(swiper.eventsListeners).forEach((eventName)=>{
            swiper.off(eventName);
        });
        if (deleteInstance !== false) {
            swiper.$el[0].swiper = null;
            _utilsJs.deleteProps(swiper);
        }
        swiper.destroyed = true;
        return null;
    }
    static extendDefaults(newDefaults) {
        _utilsJs.extend(extendedDefaults, newDefaults);
    }
    static get extendedDefaults() {
        return extendedDefaults;
    }
    static get defaults() {
        return _defaultsJsDefault.default;
    }
    static installModule(mod) {
        if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
        const modules = Swiper.prototype.__modules__;
        if (typeof mod === 'function' && modules.indexOf(mod) < 0) modules.push(mod);
    }
    static use(module) {
        if (Array.isArray(module)) {
            module.forEach((m)=>Swiper.installModule(m)
            );
            return Swiper;
        }
        Swiper.installModule(module);
        return Swiper;
    }
}
Object.keys(prototypes).forEach((prototypeGroup)=>{
    Object.keys(prototypes[prototypeGroup]).forEach((protoMethod)=>{
        Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
});
Swiper.use([
    _resizeJsDefault.default,
    _observerJsDefault.default
]);
exports.default = Swiper;

},{"ssr-window":"3lyfI","../shared/dom.js":"7pW5q","../shared/utils.js":"dbikn","../shared/get-support.js":"dU80s","../shared/get-device.js":"fHzNz","../shared/get-browser.js":"2AwWY","./modules/resize/resize.js":"awiu0","./modules/observer/observer.js":"Fvg8a","./events-emitter.js":"970nW","./update/index.js":"5pXU1","./translate/index.js":"82UFa","./transition/index.js":"8Knou","./slide/index.js":"5VZY1","./loop/index.js":"6S1wN","./grab-cursor/index.js":"6y5ez","./events/index.js":"jPWSg","./breakpoints/index.js":"6sZHb","./classes/index.js":"dJ7YF","./images/index.js":"4xpbQ","./check-overflow/index.js":"cCZBR","./defaults.js":"jwKb5","./moduleExtendParams.js":"2G6E7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3lyfI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "extend", ()=>extend
);
parcelHelpers.export(exports, "getDocument", ()=>getDocument
);
parcelHelpers.export(exports, "getWindow", ()=>getWindow
);
parcelHelpers.export(exports, "ssrDocument", ()=>ssrDocument
);
parcelHelpers.export(exports, "ssrWindow", ()=>ssrWindow
);
/**
 * SSR Window 4.0.2
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2021, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: December 13, 2021
 */ /* eslint-disable no-param-reassign */ function isObject(obj) {
    return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
}
function extend(target = {
}, src = {
}) {
    Object.keys(src).forEach((key)=>{
        if (typeof target[key] === 'undefined') target[key] = src[key];
        else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
    });
}
const ssrDocument = {
    body: {
    },
    addEventListener () {
    },
    removeEventListener () {
    },
    activeElement: {
        blur () {
        },
        nodeName: ''
    },
    querySelector () {
        return null;
    },
    querySelectorAll () {
        return [];
    },
    getElementById () {
        return null;
    },
    createEvent () {
        return {
            initEvent () {
            }
        };
    },
    createElement () {
        return {
            children: [],
            childNodes: [],
            style: {
            },
            setAttribute () {
            },
            getElementsByTagName () {
                return [];
            }
        };
    },
    createElementNS () {
        return {
        };
    },
    importNode () {
        return null;
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: ''
    }
};
function getDocument() {
    const doc = typeof document !== 'undefined' ? document : {
    };
    extend(doc, ssrDocument);
    return doc;
}
const ssrWindow = {
    document: ssrDocument,
    navigator: {
        userAgent: ''
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: ''
    },
    history: {
        replaceState () {
        },
        pushState () {
        },
        go () {
        },
        back () {
        }
    },
    CustomEvent: function CustomEvent() {
        return this;
    },
    addEventListener () {
    },
    removeEventListener () {
    },
    getComputedStyle () {
        return {
            getPropertyValue () {
                return '';
            }
        };
    },
    Image () {
    },
    Date () {
    },
    screen: {
    },
    setTimeout () {
    },
    clearTimeout () {
    },
    matchMedia () {
        return {
        };
    },
    requestAnimationFrame (callback) {
        if (typeof setTimeout === 'undefined') {
            callback();
            return null;
        }
        return setTimeout(callback, 0);
    },
    cancelAnimationFrame (id) {
        if (typeof setTimeout === 'undefined') return;
        clearTimeout(id);
    }
};
function getWindow() {
    const win = typeof window !== 'undefined' ? window : {
    };
    extend(win, ssrWindow);
    return win;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7pW5q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dom7 = require("dom7");
const Methods = {
    addClass: _dom7.addClass,
    removeClass: _dom7.removeClass,
    hasClass: _dom7.hasClass,
    toggleClass: _dom7.toggleClass,
    attr: _dom7.attr,
    removeAttr: _dom7.removeAttr,
    transform: _dom7.transform,
    transition: _dom7.transition,
    on: _dom7.on,
    off: _dom7.off,
    trigger: _dom7.trigger,
    transitionEnd: _dom7.transitionEnd,
    outerWidth: _dom7.outerWidth,
    outerHeight: _dom7.outerHeight,
    styles: _dom7.styles,
    offset: _dom7.offset,
    css: _dom7.css,
    each: _dom7.each,
    html: _dom7.html,
    text: _dom7.text,
    is: _dom7.is,
    index: _dom7.index,
    eq: _dom7.eq,
    append: _dom7.append,
    prepend: _dom7.prepend,
    next: _dom7.next,
    nextAll: _dom7.nextAll,
    prev: _dom7.prev,
    prevAll: _dom7.prevAll,
    parent: _dom7.parent,
    parents: _dom7.parents,
    closest: _dom7.closest,
    find: _dom7.find,
    children: _dom7.children,
    filter: _dom7.filter,
    remove: _dom7.remove
};
Object.keys(Methods).forEach((methodName)=>{
    Object.defineProperty(_dom7.$.fn, methodName, {
        value: Methods[methodName],
        writable: true
    });
});
exports.default = _dom7.$;

},{"dom7":"fDQYr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fDQYr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "$", ()=>$
);
parcelHelpers.export(exports, "add", ()=>add
);
parcelHelpers.export(exports, "addClass", ()=>addClass
);
parcelHelpers.export(exports, "animate", ()=>animate
);
parcelHelpers.export(exports, "animationEnd", ()=>animationEnd
);
parcelHelpers.export(exports, "append", ()=>append
);
parcelHelpers.export(exports, "appendTo", ()=>appendTo
);
parcelHelpers.export(exports, "attr", ()=>attr
);
parcelHelpers.export(exports, "blur", ()=>blur
);
parcelHelpers.export(exports, "change", ()=>change
);
parcelHelpers.export(exports, "children", ()=>children
);
parcelHelpers.export(exports, "click", ()=>click
);
parcelHelpers.export(exports, "closest", ()=>closest
);
parcelHelpers.export(exports, "css", ()=>css
);
parcelHelpers.export(exports, "data", ()=>data
);
parcelHelpers.export(exports, "dataset", ()=>dataset
);
parcelHelpers.export(exports, "detach", ()=>detach
);
parcelHelpers.export(exports, "each", ()=>each
);
parcelHelpers.export(exports, "empty", ()=>empty
);
parcelHelpers.export(exports, "eq", ()=>eq
);
parcelHelpers.export(exports, "filter", ()=>filter
);
parcelHelpers.export(exports, "find", ()=>find
);
parcelHelpers.export(exports, "focus", ()=>focus
);
parcelHelpers.export(exports, "focusin", ()=>focusin
);
parcelHelpers.export(exports, "focusout", ()=>focusout
);
parcelHelpers.export(exports, "hasClass", ()=>hasClass
);
parcelHelpers.export(exports, "height", ()=>height
);
parcelHelpers.export(exports, "hide", ()=>hide
);
parcelHelpers.export(exports, "html", ()=>html
);
parcelHelpers.export(exports, "index", ()=>index
);
parcelHelpers.export(exports, "insertAfter", ()=>insertAfter
);
parcelHelpers.export(exports, "insertBefore", ()=>insertBefore
);
parcelHelpers.export(exports, "is", ()=>is
);
parcelHelpers.export(exports, "keydown", ()=>keydown
);
parcelHelpers.export(exports, "keypress", ()=>keypress
);
parcelHelpers.export(exports, "keyup", ()=>keyup
);
parcelHelpers.export(exports, "mousedown", ()=>mousedown
);
parcelHelpers.export(exports, "mouseenter", ()=>mouseenter
);
parcelHelpers.export(exports, "mouseleave", ()=>mouseleave
);
parcelHelpers.export(exports, "mousemove", ()=>mousemove
);
parcelHelpers.export(exports, "mouseout", ()=>mouseout
);
parcelHelpers.export(exports, "mouseover", ()=>mouseover
);
parcelHelpers.export(exports, "mouseup", ()=>mouseup
);
parcelHelpers.export(exports, "next", ()=>next
);
parcelHelpers.export(exports, "nextAll", ()=>nextAll
);
parcelHelpers.export(exports, "off", ()=>off
);
parcelHelpers.export(exports, "offset", ()=>offset
);
parcelHelpers.export(exports, "on", ()=>on
);
parcelHelpers.export(exports, "once", ()=>once
);
parcelHelpers.export(exports, "outerHeight", ()=>outerHeight
);
parcelHelpers.export(exports, "outerWidth", ()=>outerWidth
);
parcelHelpers.export(exports, "parent", ()=>parent
);
parcelHelpers.export(exports, "parents", ()=>parents
);
parcelHelpers.export(exports, "prepend", ()=>prepend
);
parcelHelpers.export(exports, "prependTo", ()=>prependTo
);
parcelHelpers.export(exports, "prev", ()=>prev
);
parcelHelpers.export(exports, "prevAll", ()=>prevAll
);
parcelHelpers.export(exports, "prop", ()=>prop
);
parcelHelpers.export(exports, "remove", ()=>remove
);
parcelHelpers.export(exports, "removeAttr", ()=>removeAttr
);
parcelHelpers.export(exports, "removeClass", ()=>removeClass
);
parcelHelpers.export(exports, "removeData", ()=>removeData
);
parcelHelpers.export(exports, "resize", ()=>resize
);
parcelHelpers.export(exports, "scroll", ()=>scroll
);
parcelHelpers.export(exports, "scrollLeft", ()=>scrollLeft
);
parcelHelpers.export(exports, "scrollTo", ()=>scrollTo
);
parcelHelpers.export(exports, "scrollTop", ()=>scrollTop
);
parcelHelpers.export(exports, "show", ()=>show
);
parcelHelpers.export(exports, "siblings", ()=>siblings
);
parcelHelpers.export(exports, "stop", ()=>stop
);
parcelHelpers.export(exports, "styles", ()=>styles
);
parcelHelpers.export(exports, "submit", ()=>submit
);
parcelHelpers.export(exports, "text", ()=>text
);
parcelHelpers.export(exports, "toggleClass", ()=>toggleClass
);
parcelHelpers.export(exports, "touchend", ()=>touchend
);
parcelHelpers.export(exports, "touchmove", ()=>touchmove
);
parcelHelpers.export(exports, "touchstart", ()=>touchstart
);
parcelHelpers.export(exports, "transform", ()=>transform
);
parcelHelpers.export(exports, "transition", ()=>transition
);
parcelHelpers.export(exports, "transitionEnd", ()=>transitionEnd
);
parcelHelpers.export(exports, "trigger", ()=>trigger
);
parcelHelpers.export(exports, "val", ()=>val
);
parcelHelpers.export(exports, "value", ()=>value
);
parcelHelpers.export(exports, "width", ()=>width
);
/**
 * Dom7 4.0.4
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * https://framework7.io/docs/dom7.html
 *
 * Copyright 2022, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: January 11, 2022
 */ var _ssrWindow = require("ssr-window");
/* eslint-disable no-proto */ function makeReactive(obj) {
    const proto = obj.__proto__;
    Object.defineProperty(obj, '__proto__', {
        get () {
            return proto;
        },
        set (value1) {
            proto.__proto__ = value1;
        }
    });
}
class Dom7 extends Array {
    constructor(items){
        if (typeof items === 'number') super(items);
        else {
            super(...items || []);
            makeReactive(this);
        }
    }
}
function arrayFlat(arr = []) {
    const res = [];
    arr.forEach((el)=>{
        if (Array.isArray(el)) res.push(...arrayFlat(el));
        else res.push(el);
    });
    return res;
}
function arrayFilter(arr, callback) {
    return Array.prototype.filter.call(arr, callback);
}
function arrayUnique(arr) {
    const uniqueArray = [];
    for(let i = 0; i < arr.length; i += 1)if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
    return uniqueArray;
}
function toCamelCase(string) {
    return string.toLowerCase().replace(/-(.)/g, (match, group)=>group.toUpperCase()
    );
}
// eslint-disable-next-line
function qsa(selector, context) {
    if (typeof selector !== 'string') return [
        selector
    ];
    const a = [];
    const res = context.querySelectorAll(selector);
    for(let i = 0; i < res.length; i += 1)a.push(res[i]);
    return a;
}
function $(selector, context) {
    const window = _ssrWindow.getWindow();
    const document = _ssrWindow.getDocument();
    let arr = [];
    if (!context && selector instanceof Dom7) return selector;
    if (!selector) return new Dom7(arr);
    if (typeof selector === 'string') {
        const html1 = selector.trim();
        if (html1.indexOf('<') >= 0 && html1.indexOf('>') >= 0) {
            let toCreate = 'div';
            if (html1.indexOf('<li') === 0) toCreate = 'ul';
            if (html1.indexOf('<tr') === 0) toCreate = 'tbody';
            if (html1.indexOf('<td') === 0 || html1.indexOf('<th') === 0) toCreate = 'tr';
            if (html1.indexOf('<tbody') === 0) toCreate = 'table';
            if (html1.indexOf('<option') === 0) toCreate = 'select';
            const tempParent = document.createElement(toCreate);
            tempParent.innerHTML = html1;
            for(let i = 0; i < tempParent.childNodes.length; i += 1)arr.push(tempParent.childNodes[i]);
        } else arr = qsa(selector.trim(), context || document);
         // arr = qsa(selector, document);
    } else if (selector.nodeType || selector === window || selector === document) arr.push(selector);
    else if (Array.isArray(selector)) {
        if (selector instanceof Dom7) return selector;
        arr = selector;
    }
    return new Dom7(arrayUnique(arr));
}
$.fn = Dom7.prototype;
// eslint-disable-next-line
function addClass(...classes) {
    const classNames = arrayFlat(classes.map((c)=>c.split(' ')
    ));
    this.forEach((el)=>{
        el.classList.add(...classNames);
    });
    return this;
}
function removeClass(...classes) {
    const classNames = arrayFlat(classes.map((c)=>c.split(' ')
    ));
    this.forEach((el)=>{
        el.classList.remove(...classNames);
    });
    return this;
}
function toggleClass(...classes) {
    const classNames = arrayFlat(classes.map((c)=>c.split(' ')
    ));
    this.forEach((el)=>{
        classNames.forEach((className)=>{
            el.classList.toggle(className);
        });
    });
}
function hasClass(...classes) {
    const classNames = arrayFlat(classes.map((c)=>c.split(' ')
    ));
    return arrayFilter(this, (el)=>{
        return classNames.filter((className)=>el.classList.contains(className)
        ).length > 0;
    }).length > 0;
}
function attr(attrs, value2) {
    if (arguments.length === 1 && typeof attrs === 'string') {
        // Get attr
        if (this[0]) return this[0].getAttribute(attrs);
        return undefined;
    } // Set attrs
    for(let i = 0; i < this.length; i += 1){
        if (arguments.length === 2) // String
        this[i].setAttribute(attrs, value2);
        else // Object
        for(const attrName in attrs){
            this[i][attrName] = attrs[attrName];
            this[i].setAttribute(attrName, attrs[attrName]);
        }
    }
    return this;
}
function removeAttr(attr1) {
    for(let i = 0; i < this.length; i += 1)this[i].removeAttribute(attr1);
    return this;
}
function prop(props, value3) {
    if (arguments.length === 1 && typeof props === 'string') {
        // Get prop
        if (this[0]) return this[0][props];
    } else {
        // Set props
        for(let i = 0; i < this.length; i += 1){
            if (arguments.length === 2) // String
            this[i][props] = value3;
            else // Object
            for(const propName in props)this[i][propName] = props[propName];
        }
        return this;
    }
    return this;
}
function data(key, value4) {
    let el;
    if (typeof value4 === 'undefined') {
        el = this[0];
        if (!el) return undefined; // Get value
        if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) return el.dom7ElementDataStorage[key];
        const dataKey = el.getAttribute(`data-${key}`);
        if (dataKey) return dataKey;
        return undefined;
    } // Set value
    for(let i = 0; i < this.length; i += 1){
        el = this[i];
        if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {
        };
        el.dom7ElementDataStorage[key] = value4;
    }
    return this;
}
function removeData(key) {
    for(let i = 0; i < this.length; i += 1){
        const el = this[i];
        if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
            el.dom7ElementDataStorage[key] = null;
            delete el.dom7ElementDataStorage[key];
        }
    }
}
function dataset() {
    const el = this[0];
    if (!el) return undefined;
    const dataset1 = {
    }; // eslint-disable-line
    if (el.dataset) for(const dataKey in el.dataset)dataset1[dataKey] = el.dataset[dataKey];
    else for(let i = 0; i < el.attributes.length; i += 1){
        const attr2 = el.attributes[i];
        if (attr2.name.indexOf('data-') >= 0) dataset1[toCamelCase(attr2.name.split('data-')[1])] = attr2.value;
    }
    for(const key in dataset1){
        if (dataset1[key] === 'false') dataset1[key] = false;
        else if (dataset1[key] === 'true') dataset1[key] = true;
        else if (parseFloat(dataset1[key]) === dataset1[key] * 1) dataset1[key] *= 1;
    }
    return dataset1;
}
function val(value5) {
    if (typeof value5 === 'undefined') {
        // get value
        const el = this[0];
        if (!el) return undefined;
        if (el.multiple && el.nodeName.toLowerCase() === 'select') {
            const values = [];
            for(let i = 0; i < el.selectedOptions.length; i += 1)values.push(el.selectedOptions[i].value);
            return values;
        }
        return el.value;
    } // set value
    for(let i = 0; i < this.length; i += 1){
        const el = this[i];
        if (Array.isArray(value5) && el.multiple && el.nodeName.toLowerCase() === 'select') for(let j = 0; j < el.options.length; j += 1)el.options[j].selected = value5.indexOf(el.options[j].value) >= 0;
        else el.value = value5;
    }
    return this;
}
function value(value6) {
    return this.val(value6);
}
function transform(transform1) {
    for(let i = 0; i < this.length; i += 1)this[i].style.transform = transform1;
    return this;
}
function transition(duration) {
    for(let i = 0; i < this.length; i += 1)this[i].style.transitionDuration = typeof duration !== 'string' ? `${duration}ms` : duration;
    return this;
}
function on(...args) {
    let [eventType, targetSelector, listener, capture] = args;
    if (typeof args[1] === 'function') {
        [eventType, listener, capture] = args;
        targetSelector = undefined;
    }
    if (!capture) capture = false;
    function handleLiveEvent(e) {
        const target = e.target;
        if (!target) return;
        const eventData = e.target.dom7EventData || [];
        if (eventData.indexOf(e) < 0) eventData.unshift(e);
        if ($(target).is(targetSelector)) listener.apply(target, eventData);
        else {
            const parents1 = $(target).parents(); // eslint-disable-line
            for(let k = 0; k < parents1.length; k += 1)if ($(parents1[k]).is(targetSelector)) listener.apply(parents1[k], eventData);
        }
    }
    function handleEvent(e) {
        const eventData = e && e.target ? e.target.dom7EventData || [] : [];
        if (eventData.indexOf(e) < 0) eventData.unshift(e);
        listener.apply(this, eventData);
    }
    const events = eventType.split(' ');
    let j;
    for(let i = 0; i < this.length; i += 1){
        const el = this[i];
        if (!targetSelector) for(j = 0; j < events.length; j += 1){
            const event = events[j];
            if (!el.dom7Listeners) el.dom7Listeners = {
            };
            if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
            el.dom7Listeners[event].push({
                listener,
                proxyListener: handleEvent
            });
            el.addEventListener(event, handleEvent, capture);
        }
        else // Live events
        for(j = 0; j < events.length; j += 1){
            const event = events[j];
            if (!el.dom7LiveListeners) el.dom7LiveListeners = {
            };
            if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
            el.dom7LiveListeners[event].push({
                listener,
                proxyListener: handleLiveEvent
            });
            el.addEventListener(event, handleLiveEvent, capture);
        }
    }
    return this;
}
function off(...args) {
    let [eventType, targetSelector, listener, capture] = args;
    if (typeof args[1] === 'function') {
        [eventType, listener, capture] = args;
        targetSelector = undefined;
    }
    if (!capture) capture = false;
    const events = eventType.split(' ');
    for(let i = 0; i < events.length; i += 1){
        const event = events[i];
        for(let j = 0; j < this.length; j += 1){
            const el = this[j];
            let handlers;
            if (!targetSelector && el.dom7Listeners) handlers = el.dom7Listeners[event];
            else if (targetSelector && el.dom7LiveListeners) handlers = el.dom7LiveListeners[event];
            if (handlers && handlers.length) for(let k = handlers.length - 1; k >= 0; k -= 1){
                const handler = handlers[k];
                if (listener && handler.listener === listener) {
                    el.removeEventListener(event, handler.proxyListener, capture);
                    handlers.splice(k, 1);
                } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                    el.removeEventListener(event, handler.proxyListener, capture);
                    handlers.splice(k, 1);
                } else if (!listener) {
                    el.removeEventListener(event, handler.proxyListener, capture);
                    handlers.splice(k, 1);
                }
            }
        }
    }
    return this;
}
function once(...args) {
    const dom = this;
    let [eventName, targetSelector, listener, capture] = args;
    if (typeof args[1] === 'function') {
        [eventName, listener, capture] = args;
        targetSelector = undefined;
    }
    function onceHandler(...eventArgs) {
        listener.apply(this, eventArgs);
        dom.off(eventName, targetSelector, onceHandler, capture);
        if (onceHandler.dom7proxy) delete onceHandler.dom7proxy;
    }
    onceHandler.dom7proxy = listener;
    return dom.on(eventName, targetSelector, onceHandler, capture);
}
function trigger(...args) {
    const window = _ssrWindow.getWindow();
    const events = args[0].split(' ');
    const eventData = args[1];
    for(let i = 0; i < events.length; i += 1){
        const event = events[i];
        for(let j = 0; j < this.length; j += 1){
            const el = this[j];
            if (window.CustomEvent) {
                const evt = new window.CustomEvent(event, {
                    detail: eventData,
                    bubbles: true,
                    cancelable: true
                });
                el.dom7EventData = args.filter((data, dataIndex)=>dataIndex > 0
                );
                el.dispatchEvent(evt);
                el.dom7EventData = [];
                delete el.dom7EventData;
            }
        }
    }
    return this;
}
function transitionEnd(callback) {
    const dom = this;
    function fireCallBack(e) {
        if (e.target !== this) return;
        callback.call(this, e);
        dom.off('transitionend', fireCallBack);
    }
    if (callback) dom.on('transitionend', fireCallBack);
    return this;
}
function animationEnd(callback) {
    const dom = this;
    function fireCallBack(e) {
        if (e.target !== this) return;
        callback.call(this, e);
        dom.off('animationend', fireCallBack);
    }
    if (callback) dom.on('animationend', fireCallBack);
    return this;
}
function width() {
    const window = _ssrWindow.getWindow();
    if (this[0] === window) return window.innerWidth;
    if (this.length > 0) return parseFloat(this.css('width'));
    return null;
}
function outerWidth(includeMargins) {
    if (this.length > 0) {
        if (includeMargins) {
            const styles1 = this.styles();
            return this[0].offsetWidth + parseFloat(styles1.getPropertyValue('margin-right')) + parseFloat(styles1.getPropertyValue('margin-left'));
        }
        return this[0].offsetWidth;
    }
    return null;
}
function height() {
    const window = _ssrWindow.getWindow();
    if (this[0] === window) return window.innerHeight;
    if (this.length > 0) return parseFloat(this.css('height'));
    return null;
}
function outerHeight(includeMargins) {
    if (this.length > 0) {
        if (includeMargins) {
            const styles2 = this.styles();
            return this[0].offsetHeight + parseFloat(styles2.getPropertyValue('margin-top')) + parseFloat(styles2.getPropertyValue('margin-bottom'));
        }
        return this[0].offsetHeight;
    }
    return null;
}
function offset() {
    if (this.length > 0) {
        const window = _ssrWindow.getWindow();
        const document = _ssrWindow.getDocument();
        const el = this[0];
        const box = el.getBoundingClientRect();
        const body = document.body;
        const clientTop = el.clientTop || body.clientTop || 0;
        const clientLeft = el.clientLeft || body.clientLeft || 0;
        const scrollTop1 = el === window ? window.scrollY : el.scrollTop;
        const scrollLeft1 = el === window ? window.scrollX : el.scrollLeft;
        return {
            top: box.top + scrollTop1 - clientTop,
            left: box.left + scrollLeft1 - clientLeft
        };
    }
    return null;
}
function hide() {
    for(let i = 0; i < this.length; i += 1)this[i].style.display = 'none';
    return this;
}
function show() {
    const window = _ssrWindow.getWindow();
    for(let i = 0; i < this.length; i += 1){
        const el = this[i];
        if (el.style.display === 'none') el.style.display = '';
        if (window.getComputedStyle(el, null).getPropertyValue('display') === 'none') // Still not visible
        el.style.display = 'block';
    }
    return this;
}
function styles() {
    const window = _ssrWindow.getWindow();
    if (this[0]) return window.getComputedStyle(this[0], null);
    return {
    };
}
function css(props, value7) {
    const window = _ssrWindow.getWindow();
    let i;
    if (arguments.length === 1) {
        if (typeof props === 'string') {
            // .css('width')
            if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
        } else {
            // .css({ width: '100px' })
            for(i = 0; i < this.length; i += 1)for(const prop in props)this[i].style[prop] = props[prop];
            return this;
        }
    }
    if (arguments.length === 2 && typeof props === 'string') {
        // .css('width', '100px')
        for(i = 0; i < this.length; i += 1)this[i].style[props] = value7;
        return this;
    }
    return this;
}
function each(callback) {
    if (!callback) return this;
    this.forEach((el, index1)=>{
        callback.apply(el, [
            el,
            index1
        ]);
    });
    return this;
}
function filter(callback) {
    const result = arrayFilter(this, callback);
    return $(result);
}
function html(html2) {
    if (typeof html2 === 'undefined') return this[0] ? this[0].innerHTML : null;
    for(let i = 0; i < this.length; i += 1)this[i].innerHTML = html2;
    return this;
}
function text(text1) {
    if (typeof text1 === 'undefined') return this[0] ? this[0].textContent.trim() : null;
    for(let i = 0; i < this.length; i += 1)this[i].textContent = text1;
    return this;
}
function is(selector) {
    const window = _ssrWindow.getWindow();
    const document = _ssrWindow.getDocument();
    const el = this[0];
    let compareWith;
    let i;
    if (!el || typeof selector === 'undefined') return false;
    if (typeof selector === 'string') {
        if (el.matches) return el.matches(selector);
        if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
        if (el.msMatchesSelector) return el.msMatchesSelector(selector);
        compareWith = $(selector);
        for(i = 0; i < compareWith.length; i += 1){
            if (compareWith[i] === el) return true;
        }
        return false;
    }
    if (selector === document) return el === document;
    if (selector === window) return el === window;
    if (selector.nodeType || selector instanceof Dom7) {
        compareWith = selector.nodeType ? [
            selector
        ] : selector;
        for(i = 0; i < compareWith.length; i += 1){
            if (compareWith[i] === el) return true;
        }
        return false;
    }
    return false;
}
function index() {
    let child = this[0];
    let i;
    if (child) {
        i = 0; // eslint-disable-next-line
        while((child = child.previousSibling) !== null)if (child.nodeType === 1) i += 1;
        return i;
    }
    return undefined;
}
function eq(index2) {
    if (typeof index2 === 'undefined') return this;
    const length = this.length;
    if (index2 > length - 1) return $([]);
    if (index2 < 0) {
        const returnIndex = length + index2;
        if (returnIndex < 0) return $([]);
        return $([
            this[returnIndex]
        ]);
    }
    return $([
        this[index2]
    ]);
}
function append(...els) {
    let newChild;
    const document = _ssrWindow.getDocument();
    for(let k = 0; k < els.length; k += 1){
        newChild = els[k];
        for(let i = 0; i < this.length; i += 1){
            if (typeof newChild === 'string') {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = newChild;
                while(tempDiv.firstChild)this[i].appendChild(tempDiv.firstChild);
            } else if (newChild instanceof Dom7) for(let j = 0; j < newChild.length; j += 1)this[i].appendChild(newChild[j]);
            else this[i].appendChild(newChild);
        }
    }
    return this;
}
function appendTo(parent1) {
    $(parent1).append(this);
    return this;
}
function prepend(newChild) {
    const document = _ssrWindow.getDocument();
    let i;
    let j;
    for(i = 0; i < this.length; i += 1){
        if (typeof newChild === 'string') {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = newChild;
            for(j = tempDiv.childNodes.length - 1; j >= 0; j -= 1)this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
        } else if (newChild instanceof Dom7) for(j = 0; j < newChild.length; j += 1)this[i].insertBefore(newChild[j], this[i].childNodes[0]);
        else this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
    return this;
}
function prependTo(parent2) {
    $(parent2).prepend(this);
    return this;
}
function insertBefore(selector) {
    const before = $(selector);
    for(let i = 0; i < this.length; i += 1){
        if (before.length === 1) before[0].parentNode.insertBefore(this[i], before[0]);
        else if (before.length > 1) for(let j = 0; j < before.length; j += 1)before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
    }
}
function insertAfter(selector) {
    const after = $(selector);
    for(let i = 0; i < this.length; i += 1){
        if (after.length === 1) after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
        else if (after.length > 1) for(let j = 0; j < after.length; j += 1)after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
    }
}
function next(selector) {
    if (this.length > 0) {
        if (selector) {
            if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) return $([
                this[0].nextElementSibling
            ]);
            return $([]);
        }
        if (this[0].nextElementSibling) return $([
            this[0].nextElementSibling
        ]);
        return $([]);
    }
    return $([]);
}
function nextAll(selector) {
    const nextEls = [];
    let el = this[0];
    if (!el) return $([]);
    while(el.nextElementSibling){
        const next1 = el.nextElementSibling; // eslint-disable-line
        if (selector) {
            if ($(next1).is(selector)) nextEls.push(next1);
        } else nextEls.push(next1);
        el = next1;
    }
    return $(nextEls);
}
function prev(selector) {
    if (this.length > 0) {
        const el = this[0];
        if (selector) {
            if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) return $([
                el.previousElementSibling
            ]);
            return $([]);
        }
        if (el.previousElementSibling) return $([
            el.previousElementSibling
        ]);
        return $([]);
    }
    return $([]);
}
function prevAll(selector) {
    const prevEls = [];
    let el = this[0];
    if (!el) return $([]);
    while(el.previousElementSibling){
        const prev1 = el.previousElementSibling; // eslint-disable-line
        if (selector) {
            if ($(prev1).is(selector)) prevEls.push(prev1);
        } else prevEls.push(prev1);
        el = prev1;
    }
    return $(prevEls);
}
function siblings(selector) {
    return this.nextAll(selector).add(this.prevAll(selector));
}
function parent(selector) {
    const parents2 = []; // eslint-disable-line
    for(let i = 0; i < this.length; i += 1)if (this[i].parentNode !== null) {
        if (selector) {
            if ($(this[i].parentNode).is(selector)) parents2.push(this[i].parentNode);
        } else parents2.push(this[i].parentNode);
    }
    return $(parents2);
}
function parents(selector) {
    const parents3 = []; // eslint-disable-line
    for(let i = 0; i < this.length; i += 1){
        let parent3 = this[i].parentNode; // eslint-disable-line
        while(parent3){
            if (selector) {
                if ($(parent3).is(selector)) parents3.push(parent3);
            } else parents3.push(parent3);
            parent3 = parent3.parentNode;
        }
    }
    return $(parents3);
}
function closest(selector) {
    let closest1 = this; // eslint-disable-line
    if (typeof selector === 'undefined') return $([]);
    if (!closest1.is(selector)) closest1 = closest1.parents(selector).eq(0);
    return closest1;
}
function find(selector) {
    const foundElements = [];
    for(let i = 0; i < this.length; i += 1){
        const found = this[i].querySelectorAll(selector);
        for(let j = 0; j < found.length; j += 1)foundElements.push(found[j]);
    }
    return $(foundElements);
}
function children(selector) {
    const children1 = []; // eslint-disable-line
    for(let i = 0; i < this.length; i += 1){
        const childNodes = this[i].children;
        for(let j = 0; j < childNodes.length; j += 1)if (!selector || $(childNodes[j]).is(selector)) children1.push(childNodes[j]);
    }
    return $(children1);
}
function remove() {
    for(let i = 0; i < this.length; i += 1)if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
    return this;
}
function detach() {
    return this.remove();
}
function add(...els) {
    const dom = this;
    let i;
    let j;
    for(i = 0; i < els.length; i += 1){
        const toAdd = $(els[i]);
        for(j = 0; j < toAdd.length; j += 1)dom.push(toAdd[j]);
    }
    return dom;
}
function empty() {
    for(let i = 0; i < this.length; i += 1){
        const el = this[i];
        if (el.nodeType === 1) {
            for(let j = 0; j < el.childNodes.length; j += 1)if (el.childNodes[j].parentNode) el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
            el.textContent = '';
        }
    }
    return this;
}
// eslint-disable-next-line
function scrollTo(...args) {
    const window = _ssrWindow.getWindow();
    let [left, top, duration, easing, callback] = args;
    if (args.length === 4 && typeof easing === 'function') {
        callback = easing;
        [left, top, duration, callback, easing] = args;
    }
    if (typeof easing === 'undefined') easing = 'swing';
    return this.each(function animate() {
        const el = this;
        let currentTop;
        let currentLeft;
        let maxTop;
        let maxLeft;
        let newTop;
        let newLeft;
        let scrollTop2; // eslint-disable-line
        let scrollLeft2; // eslint-disable-line
        let animateTop = top > 0 || top === 0;
        let animateLeft = left > 0 || left === 0;
        if (typeof easing === 'undefined') easing = 'swing';
        if (animateTop) {
            currentTop = el.scrollTop;
            if (!duration) el.scrollTop = top;
        }
        if (animateLeft) {
            currentLeft = el.scrollLeft;
            if (!duration) el.scrollLeft = left;
        }
        if (!duration) return;
        if (animateTop) {
            maxTop = el.scrollHeight - el.offsetHeight;
            newTop = Math.max(Math.min(top, maxTop), 0);
        }
        if (animateLeft) {
            maxLeft = el.scrollWidth - el.offsetWidth;
            newLeft = Math.max(Math.min(left, maxLeft), 0);
        }
        let startTime = null;
        if (animateTop && newTop === currentTop) animateTop = false;
        if (animateLeft && newLeft === currentLeft) animateLeft = false;
        function render(time = new Date().getTime()) {
            if (startTime === null) startTime = time;
            const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
            const easeProgress = easing === 'linear' ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
            let done;
            if (animateTop) scrollTop2 = currentTop + easeProgress * (newTop - currentTop);
            if (animateLeft) scrollLeft2 = currentLeft + easeProgress * (newLeft - currentLeft);
            if (animateTop && newTop > currentTop && scrollTop2 >= newTop) {
                el.scrollTop = newTop;
                done = true;
            }
            if (animateTop && newTop < currentTop && scrollTop2 <= newTop) {
                el.scrollTop = newTop;
                done = true;
            }
            if (animateLeft && newLeft > currentLeft && scrollLeft2 >= newLeft) {
                el.scrollLeft = newLeft;
                done = true;
            }
            if (animateLeft && newLeft < currentLeft && scrollLeft2 <= newLeft) {
                el.scrollLeft = newLeft;
                done = true;
            }
            if (done) {
                if (callback) callback();
                return;
            }
            if (animateTop) el.scrollTop = scrollTop2;
            if (animateLeft) el.scrollLeft = scrollLeft2;
            window.requestAnimationFrame(render);
        }
        window.requestAnimationFrame(render);
    });
} // scrollTop(top, duration, easing, callback) {
function scrollTop(...args) {
    let [top, duration, easing, callback] = args;
    if (args.length === 3 && typeof easing === 'function') [top, duration, callback, easing] = args;
    const dom = this;
    if (typeof top === 'undefined') {
        if (dom.length > 0) return dom[0].scrollTop;
        return null;
    }
    return dom.scrollTo(undefined, top, duration, easing, callback);
}
function scrollLeft(...args) {
    let [left, duration, easing, callback] = args;
    if (args.length === 3 && typeof easing === 'function') [left, duration, callback, easing] = args;
    const dom = this;
    if (typeof left === 'undefined') {
        if (dom.length > 0) return dom[0].scrollLeft;
        return null;
    }
    return dom.scrollTo(left, undefined, duration, easing, callback);
}
// eslint-disable-next-line
function animate(initialProps, initialParams) {
    const window = _ssrWindow.getWindow();
    const els = this;
    const a = {
        props: Object.assign({
        }, initialProps),
        params: Object.assign({
            duration: 300,
            easing: 'swing' // or 'linear'
        }, initialParams),
        elements: els,
        animating: false,
        que: [],
        easingProgress (easing, progress) {
            if (easing === 'swing') return 0.5 - Math.cos(progress * Math.PI) / 2;
            if (typeof easing === 'function') return easing(progress);
            return progress;
        },
        stop () {
            if (a.frameId) window.cancelAnimationFrame(a.frameId);
            a.animating = false;
            a.elements.each((el)=>{
                const element = el;
                delete element.dom7AnimateInstance;
            });
            a.que = [];
        },
        done (complete) {
            a.animating = false;
            a.elements.each((el)=>{
                const element = el;
                delete element.dom7AnimateInstance;
            });
            if (complete) complete(els);
            if (a.que.length > 0) {
                const que = a.que.shift();
                a.animate(que[0], que[1]);
            }
        },
        animate (props, params) {
            if (a.animating) {
                a.que.push([
                    props,
                    params
                ]);
                return a;
            }
            const elements = []; // Define & Cache Initials & Units
            a.elements.each((el, index)=>{
                let initialFullValue;
                let initialValue;
                let unit;
                let finalValue;
                let finalFullValue;
                if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;
                elements[index] = {
                    container: el
                };
                Object.keys(props).forEach((prop1)=>{
                    initialFullValue = window.getComputedStyle(el, null).getPropertyValue(prop1).replace(',', '.');
                    initialValue = parseFloat(initialFullValue);
                    unit = initialFullValue.replace(initialValue, '');
                    finalValue = parseFloat(props[prop1]);
                    finalFullValue = props[prop1] + unit;
                    elements[index][prop1] = {
                        initialFullValue,
                        initialValue,
                        unit,
                        finalValue,
                        finalFullValue,
                        currentValue: initialValue
                    };
                });
            });
            let startTime = null;
            let time;
            let elementsDone = 0;
            let propsDone = 0;
            let done;
            let began = false;
            a.animating = true;
            function render() {
                time = new Date().getTime();
                let progress;
                let easeProgress; // let el;
                if (!began) {
                    began = true;
                    if (params.begin) params.begin(els);
                }
                if (startTime === null) startTime = time;
                if (params.progress) // eslint-disable-next-line
                params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
                elements.forEach((element)=>{
                    const el = element;
                    if (done || el.done) return;
                    Object.keys(props).forEach((prop)=>{
                        if (done || el.done) return;
                        progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
                        easeProgress = a.easingProgress(params.easing, progress);
                        const { initialValue , finalValue , unit  } = el[prop];
                        el[prop].currentValue = initialValue + easeProgress * (finalValue - initialValue);
                        const currentValue = el[prop].currentValue;
                        if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {
                            el.container.style[prop] = finalValue + unit;
                            propsDone += 1;
                            if (propsDone === Object.keys(props).length) {
                                el.done = true;
                                elementsDone += 1;
                            }
                            if (elementsDone === elements.length) done = true;
                        }
                        if (done) {
                            a.done(params.complete);
                            return;
                        }
                        el.container.style[prop] = currentValue + unit;
                    });
                });
                if (done) return; // Then call
                a.frameId = window.requestAnimationFrame(render);
            }
            a.frameId = window.requestAnimationFrame(render);
            return a;
        }
    };
    if (a.elements.length === 0) return els;
    let animateInstance;
    for(let i = 0; i < a.elements.length; i += 1)if (a.elements[i].dom7AnimateInstance) animateInstance = a.elements[i].dom7AnimateInstance;
    else a.elements[i].dom7AnimateInstance = a;
    if (!animateInstance) animateInstance = a;
    if (initialProps === 'stop') animateInstance.stop();
    else animateInstance.animate(a.props, a.params);
    return els;
}
function stop() {
    const els = this;
    for(let i = 0; i < els.length; i += 1)if (els[i].dom7AnimateInstance) els[i].dom7AnimateInstance.stop();
}
const noTrigger = 'resize scroll'.split(' ');
function shortcut(name) {
    function eventHandler(...args) {
        if (typeof args[0] === 'undefined') {
            for(let i = 0; i < this.length; i += 1)if (noTrigger.indexOf(name) < 0) {
                if (name in this[i]) this[i][name]();
                else $(this[i]).trigger(name);
            }
            return this;
        }
        return this.on(name, ...args);
    }
    return eventHandler;
}
const click = shortcut('click');
const blur = shortcut('blur');
const focus = shortcut('focus');
const focusin = shortcut('focusin');
const focusout = shortcut('focusout');
const keyup = shortcut('keyup');
const keydown = shortcut('keydown');
const keypress = shortcut('keypress');
const submit = shortcut('submit');
const change = shortcut('change');
const mousedown = shortcut('mousedown');
const mousemove = shortcut('mousemove');
const mouseup = shortcut('mouseup');
const mouseenter = shortcut('mouseenter');
const mouseleave = shortcut('mouseleave');
const mouseout = shortcut('mouseout');
const mouseover = shortcut('mouseover');
const touchstart = shortcut('touchstart');
const touchend = shortcut('touchend');
const touchmove = shortcut('touchmove');
const resize = shortcut('resize');
const scroll = shortcut('scroll');
exports.default = $;

},{"ssr-window":"3lyfI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dbikn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateCSSModeScroll", ()=>animateCSSModeScroll
);
parcelHelpers.export(exports, "deleteProps", ()=>deleteProps
);
parcelHelpers.export(exports, "nextTick", ()=>nextTick
);
parcelHelpers.export(exports, "now", ()=>now
);
parcelHelpers.export(exports, "getTranslate", ()=>getTranslate
);
parcelHelpers.export(exports, "isObject", ()=>isObject
);
parcelHelpers.export(exports, "extend", ()=>extend
);
parcelHelpers.export(exports, "getComputedStyle", ()=>getComputedStyle
);
parcelHelpers.export(exports, "setCSSProperty", ()=>setCSSProperty
);
var _ssrWindow = require("ssr-window");
function deleteProps(obj) {
    const object = obj;
    Object.keys(object).forEach((key)=>{
        try {
            object[key] = null;
        } catch (e) {
        }
        try {
            delete object[key];
        } catch (e1) {
        }
    });
}
function nextTick(callback, delay) {
    if (delay === void 0) delay = 0;
    return setTimeout(callback, delay);
}
function now() {
    return Date.now();
}
function getComputedStyle(el) {
    const window = _ssrWindow.getWindow();
    let style;
    if (window.getComputedStyle) style = window.getComputedStyle(el, null);
    if (!style && el.currentStyle) style = el.currentStyle;
    if (!style) style = el.style;
    return style;
}
function getTranslate(el, axis) {
    if (axis === void 0) axis = 'x';
    const window = _ssrWindow.getWindow();
    let matrix;
    let curTransform;
    let transformMatrix;
    const curStyle = getComputedStyle(el, null);
    if (window.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;
        if (curTransform.split(',').length > 6) curTransform = curTransform.split(', ').map((a)=>a.replace(',', '.')
        ).join(', ');
         // Some old versions of Webkit choke when 'none' is passed; pass
        // empty string instead in this case
        transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
    } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
        matrix = transformMatrix.toString().split(',');
    }
    if (axis === 'x') {
        // Latest Chrome and webkits Fix
        if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
        else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
        else curTransform = parseFloat(matrix[4]);
    }
    if (axis === 'y') {
        // Latest Chrome and webkits Fix
        if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
        else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
        else curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
}
function isObject(o) {
    return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}
function isNode(node) {
    // eslint-disable-next-line
    if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') return node instanceof HTMLElement;
    return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend() {
    const to = Object(arguments.length <= 0 ? undefined : arguments[0]);
    const noExtend = [
        '__proto__',
        'constructor',
        'prototype'
    ];
    for(let i = 1; i < arguments.length; i += 1){
        const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];
        if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
            const keysArray = Object.keys(Object(nextSource)).filter((key)=>noExtend.indexOf(key) < 0
            );
            for(let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1){
                const nextKey = keysArray[nextIndex];
                const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                if (desc !== undefined && desc.enumerable) {
                    if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                        if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey];
                        else extend(to[nextKey], nextSource[nextKey]);
                    } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                        to[nextKey] = {
                        };
                        if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey];
                        else extend(to[nextKey], nextSource[nextKey]);
                    } else to[nextKey] = nextSource[nextKey];
                }
            }
        }
    }
    return to;
}
function setCSSProperty(el, varName, varValue) {
    el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll(_ref) {
    let { swiper , targetPosition , side  } = _ref;
    const window = _ssrWindow.getWindow();
    const startPosition = -swiper.translate;
    let startTime = null;
    let time;
    const duration = swiper.params.speed;
    swiper.wrapperEl.style.scrollSnapType = 'none';
    window.cancelAnimationFrame(swiper.cssModeFrameID);
    const dir = targetPosition > startPosition ? 'next' : 'prev';
    const isOutOfBound = (current, target)=>{
        return dir === 'next' && current >= target || dir === 'prev' && current <= target;
    };
    const animate = ()=>{
        time = new Date().getTime();
        if (startTime === null) startTime = time;
        const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
        const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
        let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
        if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
        swiper.wrapperEl.scrollTo({
            [side]: currentPosition
        });
        if (isOutOfBound(currentPosition, targetPosition)) {
            swiper.wrapperEl.style.overflow = 'hidden';
            swiper.wrapperEl.style.scrollSnapType = '';
            setTimeout(()=>{
                swiper.wrapperEl.style.overflow = '';
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
            });
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            return;
        }
        swiper.cssModeFrameID = window.requestAnimationFrame(animate);
    };
    animate();
}

},{"ssr-window":"3lyfI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dU80s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getSupport", ()=>getSupport
);
var _ssrWindow = require("ssr-window");
let support;
function calcSupport() {
    const window = _ssrWindow.getWindow();
    const document = _ssrWindow.getDocument();
    return {
        smoothScroll: document.documentElement && 'scrollBehavior' in document.documentElement.style,
        touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        passiveListener: (function checkPassiveListener() {
            let supportsPassive = false;
            try {
                const opts = Object.defineProperty({
                }, 'passive', {
                    // eslint-disable-next-line
                    get () {
                        supportsPassive = true;
                    }
                });
                window.addEventListener('testPassiveListener', null, opts);
            } catch (e) {
            }
            return supportsPassive;
        })(),
        gestures: (function checkGestures() {
            return 'ongesturestart' in window;
        })()
    };
}
function getSupport() {
    if (!support) support = calcSupport();
    return support;
}

},{"ssr-window":"3lyfI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fHzNz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDevice", ()=>getDevice
);
var _ssrWindow = require("ssr-window");
var _getSupportJs = require("./get-support.js");
let deviceCached;
function calcDevice(_temp) {
    let { userAgent  } = _temp === void 0 ? {
    } : _temp;
    const support = _getSupportJs.getSupport();
    const window = _ssrWindow.getWindow();
    const platform = window.navigator.platform;
    const ua = userAgent || window.navigator.userAgent;
    const device = {
        ios: false,
        android: false
    };
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    const windows = platform === 'Win32';
    let macos = platform === 'MacIntel'; // iPadOs 13 fix
    const iPadScreens = [
        '1024x1366',
        '1366x1024',
        '834x1194',
        '1194x834',
        '834x1112',
        '1112x834',
        '768x1024',
        '1024x768',
        '820x1180',
        '1180x820',
        '810x1080',
        '1080x810'
    ];
    if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
        ipad = ua.match(/(Version)\/([\d.]+)/);
        if (!ipad) ipad = [
            0,
            1,
            '13_0_0'
        ];
        macos = false;
    } // Android
    if (android && !windows) {
        device.os = 'android';
        device.android = true;
    }
    if (ipad || iphone || ipod) {
        device.os = 'ios';
        device.ios = true;
    } // Export object
    return device;
}
function getDevice(overrides) {
    if (overrides === void 0) overrides = {
    };
    if (!deviceCached) deviceCached = calcDevice(overrides);
    return deviceCached;
}

},{"ssr-window":"3lyfI","./get-support.js":"dU80s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2AwWY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getBrowser", ()=>getBrowser
);
var _ssrWindow = require("ssr-window");
let browser;
function calcBrowser() {
    const window = _ssrWindow.getWindow();
    function isSafari() {
        const ua = window.navigator.userAgent.toLowerCase();
        return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
    }
    return {
        isSafari: isSafari(),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
    };
}
function getBrowser() {
    if (!browser) browser = calcBrowser();
    return browser;
}

},{"ssr-window":"3lyfI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"awiu0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
function Resize(_ref) {
    let { swiper , on , emit  } = _ref;
    const window = _ssrWindow.getWindow();
    let observer = null;
    let animationFrame = null;
    const resizeHandler = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        emit('beforeResize');
        emit('resize');
    };
    const createObserver = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        observer = new ResizeObserver((entries)=>{
            animationFrame = window.requestAnimationFrame(()=>{
                const { width , height  } = swiper;
                let newWidth = width;
                let newHeight = height;
                entries.forEach((_ref2)=>{
                    let { contentBoxSize , contentRect , target  } = _ref2;
                    if (target && target !== swiper.el) return;
                    newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                    newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                });
                if (newWidth !== width || newHeight !== height) resizeHandler();
            });
        });
        observer.observe(swiper.el);
    };
    const removeObserver = ()=>{
        if (animationFrame) window.cancelAnimationFrame(animationFrame);
        if (observer && observer.unobserve && swiper.el) {
            observer.unobserve(swiper.el);
            observer = null;
        }
    };
    const orientationChangeHandler = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        emit('orientationchange');
    };
    on('init', ()=>{
        if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
            createObserver();
            return;
        }
        window.addEventListener('resize', resizeHandler);
        window.addEventListener('orientationchange', orientationChangeHandler);
    });
    on('destroy', ()=>{
        removeObserver();
        window.removeEventListener('resize', resizeHandler);
        window.removeEventListener('orientationchange', orientationChangeHandler);
    });
}
exports.default = Resize;

},{"ssr-window":"3lyfI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Fvg8a":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
function Observer(_ref) {
    let { swiper , extendParams , on , emit  } = _ref;
    const observers = [];
    const window = _ssrWindow.getWindow();
    const attach = function(target, options) {
        if (options === void 0) options = {
        };
        const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
        const observer = new ObserverFunc((mutations)=>{
            // The observerUpdate event should only be triggered
            // once despite the number of mutations.  Additional
            // triggers are redundant and are very costly
            if (mutations.length === 1) {
                emit('observerUpdate', mutations[0]);
                return;
            }
            const observerUpdate = function observerUpdate() {
                emit('observerUpdate', mutations[0]);
            };
            if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate);
            else window.setTimeout(observerUpdate, 0);
        });
        observer.observe(target, {
            attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
            childList: typeof options.childList === 'undefined' ? true : options.childList,
            characterData: typeof options.characterData === 'undefined' ? true : options.characterData
        });
        observers.push(observer);
    };
    const init = ()=>{
        if (!swiper.params.observer) return;
        if (swiper.params.observeParents) {
            const containerParents = swiper.$el.parents();
            for(let i = 0; i < containerParents.length; i += 1)attach(containerParents[i]);
        } // Observe container
        attach(swiper.$el[0], {
            childList: swiper.params.observeSlideChildren
        }); // Observe wrapper
        attach(swiper.$wrapperEl[0], {
            attributes: false
        });
    };
    const destroy = ()=>{
        observers.forEach((observer)=>{
            observer.disconnect();
        });
        observers.splice(0, observers.length);
    };
    extendParams({
        observer: false,
        observeParents: false,
        observeSlideChildren: false
    });
    on('init', init);
    on('destroy', destroy);
}
exports.default = Observer;

},{"ssr-window":"3lyfI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"970nW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    on (events, handler, priority) {
        const self = this;
        if (typeof handler !== 'function') return self;
        const method = priority ? 'unshift' : 'push';
        events.split(' ').forEach((event)=>{
            if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
            self.eventsListeners[event][method](handler);
        });
        return self;
    },
    once (events, handler, priority) {
        const self = this;
        if (typeof handler !== 'function') return self;
        function onceHandler() {
            self.off(events, onceHandler);
            if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
            handler.apply(self, args);
        }
        onceHandler.__emitterProxy = handler;
        return self.on(events, onceHandler, priority);
    },
    onAny (handler, priority) {
        const self = this;
        if (typeof handler !== 'function') return self;
        const method = priority ? 'unshift' : 'push';
        if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
        return self;
    },
    offAny (handler) {
        const self = this;
        if (!self.eventsAnyListeners) return self;
        const index = self.eventsAnyListeners.indexOf(handler);
        if (index >= 0) self.eventsAnyListeners.splice(index, 1);
        return self;
    },
    off (events, handler) {
        const self = this;
        if (!self.eventsListeners) return self;
        events.split(' ').forEach((event)=>{
            if (typeof handler === 'undefined') self.eventsListeners[event] = [];
            else if (self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler, index)=>{
                if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
            });
        });
        return self;
    },
    emit () {
        const self = this;
        if (!self.eventsListeners) return self;
        let events;
        let data;
        let context;
        for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
        if (typeof args[0] === 'string' || Array.isArray(args[0])) {
            events = args[0];
            data = args.slice(1, args.length);
            context = self;
        } else {
            events = args[0].events;
            data = args[0].data;
            context = args[0].context || self;
        }
        data.unshift(context);
        const eventsArray = Array.isArray(events) ? events : events.split(' ');
        eventsArray.forEach((event)=>{
            if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler)=>{
                eventHandler.apply(context, [
                    event,
                    ...data
                ]);
            });
            if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler)=>{
                eventHandler.apply(context, data);
            });
        });
        return self;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5pXU1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _updateSizeJs = require("./updateSize.js");
var _updateSizeJsDefault = parcelHelpers.interopDefault(_updateSizeJs);
var _updateSlidesJs = require("./updateSlides.js");
var _updateSlidesJsDefault = parcelHelpers.interopDefault(_updateSlidesJs);
var _updateAutoHeightJs = require("./updateAutoHeight.js");
var _updateAutoHeightJsDefault = parcelHelpers.interopDefault(_updateAutoHeightJs);
var _updateSlidesOffsetJs = require("./updateSlidesOffset.js");
var _updateSlidesOffsetJsDefault = parcelHelpers.interopDefault(_updateSlidesOffsetJs);
var _updateSlidesProgressJs = require("./updateSlidesProgress.js");
var _updateSlidesProgressJsDefault = parcelHelpers.interopDefault(_updateSlidesProgressJs);
var _updateProgressJs = require("./updateProgress.js");
var _updateProgressJsDefault = parcelHelpers.interopDefault(_updateProgressJs);
var _updateSlidesClassesJs = require("./updateSlidesClasses.js");
var _updateSlidesClassesJsDefault = parcelHelpers.interopDefault(_updateSlidesClassesJs);
var _updateActiveIndexJs = require("./updateActiveIndex.js");
var _updateActiveIndexJsDefault = parcelHelpers.interopDefault(_updateActiveIndexJs);
var _updateClickedSlideJs = require("./updateClickedSlide.js");
var _updateClickedSlideJsDefault = parcelHelpers.interopDefault(_updateClickedSlideJs);
exports.default = {
    updateSize: _updateSizeJsDefault.default,
    updateSlides: _updateSlidesJsDefault.default,
    updateAutoHeight: _updateAutoHeightJsDefault.default,
    updateSlidesOffset: _updateSlidesOffsetJsDefault.default,
    updateSlidesProgress: _updateSlidesProgressJsDefault.default,
    updateProgress: _updateProgressJsDefault.default,
    updateSlidesClasses: _updateSlidesClassesJsDefault.default,
    updateActiveIndex: _updateActiveIndexJsDefault.default,
    updateClickedSlide: _updateClickedSlideJsDefault.default
};

},{"./updateSize.js":"bsa2K","./updateSlides.js":"eZm9z","./updateAutoHeight.js":"7KfeT","./updateSlidesOffset.js":"6FBIR","./updateSlidesProgress.js":"f3Dkt","./updateProgress.js":"2zH9x","./updateSlidesClasses.js":"28hyn","./updateActiveIndex.js":"8xZJ6","./updateClickedSlide.js":"e8k92","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bsa2K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function updateSize() {
    const swiper = this;
    let width;
    let height;
    const $el = swiper.$el;
    if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) width = swiper.params.width;
    else width = $el[0].clientWidth;
    if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) height = swiper.params.height;
    else height = $el[0].clientHeight;
    if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
     // Subtract paddings
    width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
    height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
    if (Number.isNaN(width)) width = 0;
    if (Number.isNaN(height)) height = 0;
    Object.assign(swiper, {
        width,
        height,
        size: swiper.isHorizontal() ? width : height
    });
}
exports.default = updateSize;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eZm9z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../../shared/utils.js");
function updateSlides() {
    const swiper = this;
    function getDirectionLabel(property) {
        if (swiper.isHorizontal()) return property;
         // prettier-ignore
        return ({
            'width': 'height',
            'margin-top': 'margin-left',
            'margin-bottom ': 'margin-right',
            'margin-left': 'margin-top',
            'margin-right': 'margin-bottom',
            'padding-left': 'padding-top',
            'padding-right': 'padding-bottom',
            'marginRight': 'marginBottom'
        })[property];
    }
    function getDirectionPropertyValue(node, label) {
        return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
    }
    const params = swiper.params;
    const { $wrapperEl , size: swiperSize , rtlTranslate: rtl , wrongRTL  } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
    const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    let snapGrid = [];
    const slidesGrid = [];
    const slidesSizesGrid = [];
    let offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === 'function') offsetBefore = params.slidesOffsetBefore.call(swiper);
    let offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === 'function') offsetAfter = params.slidesOffsetAfter.call(swiper);
    const previousSnapGridLength = swiper.snapGrid.length;
    const previousSlidesGridLength = swiper.slidesGrid.length;
    let spaceBetween = params.spaceBetween;
    let slidePosition = -offsetBefore;
    let prevSlideSize = 0;
    let index = 0;
    if (typeof swiperSize === 'undefined') return;
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
    swiper.virtualSize = -spaceBetween; // reset margins
    if (rtl) slides.css({
        marginLeft: '',
        marginBottom: '',
        marginTop: ''
    });
    else slides.css({
        marginRight: '',
        marginBottom: '',
        marginTop: ''
    }); // reset cssMode offsets
    if (params.centeredSlides && params.cssMode) {
        _utilsJs.setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', '');
        _utilsJs.setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', '');
    }
    const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
    if (gridEnabled) swiper.grid.initSlides(slidesLength);
     // Calc slides
    let slideSize;
    const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter((key)=>{
        return typeof params.breakpoints[key].slidesPerView !== 'undefined';
    }).length > 0;
    for(let i = 0; i < slidesLength; i += 1){
        slideSize = 0;
        const slide = slides.eq(i);
        if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
        if (slide.css('display') === 'none') continue; // eslint-disable-line
        if (params.slidesPerView === 'auto') {
            if (shouldResetSlideSize) slides[i].style[getDirectionLabel('width')] = ``;
            const slideStyles = getComputedStyle(slide[0]);
            const currentTransform = slide[0].style.transform;
            const currentWebKitTransform = slide[0].style.webkitTransform;
            if (currentTransform) slide[0].style.transform = 'none';
            if (currentWebKitTransform) slide[0].style.webkitTransform = 'none';
            if (params.roundLengths) slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
            else {
                // eslint-disable-next-line
                const width = getDirectionPropertyValue(slideStyles, 'width');
                const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
                const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
                const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
                const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
                const boxSizing = slideStyles.getPropertyValue('box-sizing');
                if (boxSizing && boxSizing === 'border-box') slideSize = width + marginLeft + marginRight;
                else {
                    const { clientWidth , offsetWidth  } = slide[0];
                    slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                }
            }
            if (currentTransform) slide[0].style.transform = currentTransform;
            if (currentWebKitTransform) slide[0].style.webkitTransform = currentWebKitTransform;
            if (params.roundLengths) slideSize = Math.floor(slideSize);
        } else {
            slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
            if (params.roundLengths) slideSize = Math.floor(slideSize);
            if (slides[i]) slides[i].style[getDirectionLabel('width')] = `${slideSize}px`;
        }
        if (slides[i]) slides[i].swiperSlideSize = slideSize;
        slidesSizesGrid.push(slideSize);
        if (params.centeredSlides) {
            slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
            if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
            if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
            if (Math.abs(slidePosition) < 0.001) slidePosition = 0;
            if (params.roundLengths) slidePosition = Math.floor(slidePosition);
            if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
            slidesGrid.push(slidePosition);
        } else {
            if (params.roundLengths) slidePosition = Math.floor(slidePosition);
            if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
            slidesGrid.push(slidePosition);
            slidePosition = slidePosition + slideSize + spaceBetween;
        }
        swiper.virtualSize += slideSize + spaceBetween;
        prevSlideSize = slideSize;
        index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) $wrapperEl.css({
        width: `${swiper.virtualSize + params.spaceBetween}px`
    });
    if (params.setWrapperSize) $wrapperEl.css({
        [getDirectionLabel('width')]: `${swiper.virtualSize + params.spaceBetween}px`
    });
    if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
     // Remove last grid elements depending on width
    if (!params.centeredSlides) {
        const newSlidesGrid = [];
        for(let i = 0; i < snapGrid.length; i += 1){
            let slidesGridItem = snapGrid[i];
            if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
            if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
        }
        snapGrid = newSlidesGrid;
        if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
    }
    if (snapGrid.length === 0) snapGrid = [
        0
    ];
    if (params.spaceBetween !== 0) {
        const key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
        slides.filter((_, slideIndex)=>{
            if (!params.cssMode) return true;
            if (slideIndex === slides.length - 1) return false;
            return true;
        }).css({
            [key]: `${spaceBetween}px`
        });
    }
    if (params.centeredSlides && params.centeredSlidesBounds) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach((slideSizeValue)=>{
            allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
        });
        allSlidesSize -= params.spaceBetween;
        const maxSnap = allSlidesSize - swiperSize;
        snapGrid = snapGrid.map((snap)=>{
            if (snap < 0) return -offsetBefore;
            if (snap > maxSnap) return maxSnap + offsetAfter;
            return snap;
        });
    }
    if (params.centerInsufficientSlides) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach((slideSizeValue)=>{
            allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
        });
        allSlidesSize -= params.spaceBetween;
        if (allSlidesSize < swiperSize) {
            const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
            snapGrid.forEach((snap, snapIndex)=>{
                snapGrid[snapIndex] = snap - allSlidesOffset;
            });
            slidesGrid.forEach((snap, snapIndex)=>{
                slidesGrid[snapIndex] = snap + allSlidesOffset;
            });
        }
    }
    Object.assign(swiper, {
        slides,
        snapGrid,
        slidesGrid,
        slidesSizesGrid
    });
    if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
        _utilsJs.setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
        _utilsJs.setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
        const addToSnapGrid = -swiper.snapGrid[0];
        const addToSlidesGrid = -swiper.slidesGrid[0];
        swiper.snapGrid = swiper.snapGrid.map((v)=>v + addToSnapGrid
        );
        swiper.slidesGrid = swiper.slidesGrid.map((v)=>v + addToSlidesGrid
        );
    }
    if (slidesLength !== previousSlidesLength) swiper.emit('slidesLengthChange');
    if (snapGrid.length !== previousSnapGridLength) {
        if (swiper.params.watchOverflow) swiper.checkOverflow();
        swiper.emit('snapGridLengthChange');
    }
    if (slidesGrid.length !== previousSlidesGridLength) swiper.emit('slidesGridLengthChange');
    if (params.watchSlidesProgress) swiper.updateSlidesOffset();
    if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
        const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
        const hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);
        if (slidesLength <= params.maxBackfaceHiddenSlides) {
            if (!hasClassBackfaceClassAdded) swiper.$el.addClass(backFaceHiddenClass);
        } else if (hasClassBackfaceClassAdded) swiper.$el.removeClass(backFaceHiddenClass);
    }
}
exports.default = updateSlides;

},{"../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7KfeT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function updateAutoHeight(speed) {
    const swiper = this;
    const activeSlides = [];
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let newHeight = 0;
    let i;
    if (typeof speed === 'number') swiper.setTransition(speed);
    else if (speed === true) swiper.setTransition(swiper.params.speed);
    const getSlideByIndex = (index)=>{
        if (isVirtual) return swiper.slides.filter((el)=>parseInt(el.getAttribute('data-swiper-slide-index'), 10) === index
        )[0];
        return swiper.slides.eq(index)[0];
    }; // Find slides currently in view
    if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
        if (swiper.params.centeredSlides) swiper.visibleSlides.each((slide)=>{
            activeSlides.push(slide);
        });
        else for(i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1){
            const index = swiper.activeIndex + i;
            if (index > swiper.slides.length && !isVirtual) break;
            activeSlides.push(getSlideByIndex(index));
        }
    } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
     // Find new height from highest slide in view
    for(i = 0; i < activeSlides.length; i += 1)if (typeof activeSlides[i] !== 'undefined') {
        const height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
    }
     // Update Height
    if (newHeight || newHeight === 0) swiper.$wrapperEl.css('height', `${newHeight}px`);
}
exports.default = updateAutoHeight;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6FBIR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function updateSlidesOffset() {
    const swiper = this;
    const slides = swiper.slides;
    for(let i = 0; i < slides.length; i += 1)slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
}
exports.default = updateSlidesOffset;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f3Dkt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function updateSlidesProgress(translate) {
    if (translate === void 0) translate = this && this.translate || 0;
    const swiper = this;
    const params = swiper.params;
    const { slides , rtlTranslate: rtl , snapGrid  } = swiper;
    if (slides.length === 0) return;
    if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
    let offsetCenter = -translate;
    if (rtl) offsetCenter = translate; // Visible Slides
    slides.removeClass(params.slideVisibleClass);
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    for(let i = 0; i < slides.length; i += 1){
        const slide = slides[i];
        let slideOffset = slide.swiperSlideOffset;
        if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
        const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
        const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
        const slideBefore = -(offsetCenter - slideOffset);
        const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
        const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
        if (isVisible) {
            swiper.visibleSlides.push(slide);
            swiper.visibleSlidesIndexes.push(i);
            slides.eq(i).addClass(params.slideVisibleClass);
        }
        slide.progress = rtl ? -slideProgress : slideProgress;
        slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
    }
    swiper.visibleSlides = _domJsDefault.default(swiper.visibleSlides);
}
exports.default = updateSlidesProgress;

},{"../../shared/dom.js":"7pW5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2zH9x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function updateProgress(translate) {
    const swiper = this;
    if (typeof translate === 'undefined') {
        const multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line
        translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
    }
    const params = swiper.params;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    let { progress , isBeginning , isEnd  } = swiper;
    const wasBeginning = isBeginning;
    const wasEnd = isEnd;
    if (translatesDiff === 0) {
        progress = 0;
        isBeginning = true;
        isEnd = true;
    } else {
        progress = (translate - swiper.minTranslate()) / translatesDiff;
        isBeginning = progress <= 0;
        isEnd = progress >= 1;
    }
    Object.assign(swiper, {
        progress,
        isBeginning,
        isEnd
    });
    if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
    if (isBeginning && !wasBeginning) swiper.emit('reachBeginning toEdge');
    if (isEnd && !wasEnd) swiper.emit('reachEnd toEdge');
    if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit('fromEdge');
    swiper.emit('progress', progress);
}
exports.default = updateProgress;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"28hyn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function updateSlidesClasses() {
    const swiper = this;
    const { slides , params , $wrapperEl , activeIndex , realIndex  } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
    let activeSlide;
    if (isVirtual) activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`);
    else activeSlide = slides.eq(activeIndex);
     // Active classes
    activeSlide.addClass(params.slideActiveClass);
    if (params.loop) {
        // Duplicate to all looped slides
        if (activeSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
        else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
    } // Next Slide
    let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
    if (params.loop && nextSlide.length === 0) {
        nextSlide = slides.eq(0);
        nextSlide.addClass(params.slideNextClass);
    } // Prev Slide
    let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
    if (params.loop && prevSlide.length === 0) {
        prevSlide = slides.eq(-1);
        prevSlide.addClass(params.slidePrevClass);
    }
    if (params.loop) {
        // Duplicate to all looped slides
        if (nextSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
        else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
        if (prevSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
        else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
    }
    swiper.emitSlidesClasses();
}
exports.default = updateSlidesClasses;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8xZJ6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function updateActiveIndex(newActiveIndex) {
    const swiper = this;
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    const { slidesGrid , snapGrid , params , activeIndex: previousIndex , realIndex: previousRealIndex , snapIndex: previousSnapIndex  } = swiper;
    let activeIndex = newActiveIndex;
    let snapIndex;
    if (typeof activeIndex === 'undefined') {
        for(let i = 0; i < slidesGrid.length; i += 1){
            if (typeof slidesGrid[i + 1] !== 'undefined') {
                if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i;
                else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
            } else if (translate >= slidesGrid[i]) activeIndex = i;
        } // Normalize slideIndex
        if (params.normalizeSlideIndex) {
            if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
        }
    }
    if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate);
    else {
        const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
        snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex) {
        if (snapIndex !== previousSnapIndex) {
            swiper.snapIndex = snapIndex;
            swiper.emit('snapIndexChange');
        }
        return;
    } // Get real index
    const realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
    Object.assign(swiper, {
        snapIndex,
        realIndex,
        previousIndex,
        activeIndex
    });
    swiper.emit('activeIndexChange');
    swiper.emit('snapIndexChange');
    if (previousRealIndex !== realIndex) swiper.emit('realIndexChange');
    if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit('slideChange');
}
exports.default = updateActiveIndex;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e8k92":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function updateClickedSlide(e) {
    const swiper = this;
    const params = swiper.params;
    const slide = _domJsDefault.default(e).closest(`.${params.slideClass}`)[0];
    let slideFound = false;
    let slideIndex;
    if (slide) {
        for(let i = 0; i < swiper.slides.length; i += 1)if (swiper.slides[i] === slide) {
            slideFound = true;
            slideIndex = i;
            break;
        }
    }
    if (slide && slideFound) {
        swiper.clickedSlide = slide;
        if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(_domJsDefault.default(slide).attr('data-swiper-slide-index'), 10);
        else swiper.clickedIndex = slideIndex;
    } else {
        swiper.clickedSlide = undefined;
        swiper.clickedIndex = undefined;
        return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
}
exports.default = updateClickedSlide;

},{"../../shared/dom.js":"7pW5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"82UFa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getTranslateJs = require("./getTranslate.js");
var _getTranslateJsDefault = parcelHelpers.interopDefault(_getTranslateJs);
var _setTranslateJs = require("./setTranslate.js");
var _setTranslateJsDefault = parcelHelpers.interopDefault(_setTranslateJs);
var _minTranslateJs = require("./minTranslate.js");
var _minTranslateJsDefault = parcelHelpers.interopDefault(_minTranslateJs);
var _maxTranslateJs = require("./maxTranslate.js");
var _maxTranslateJsDefault = parcelHelpers.interopDefault(_maxTranslateJs);
var _translateToJs = require("./translateTo.js");
var _translateToJsDefault = parcelHelpers.interopDefault(_translateToJs);
exports.default = {
    getTranslate: _getTranslateJsDefault.default,
    setTranslate: _setTranslateJsDefault.default,
    minTranslate: _minTranslateJsDefault.default,
    maxTranslate: _maxTranslateJsDefault.default,
    translateTo: _translateToJsDefault.default
};

},{"./getTranslate.js":"l7sfz","./setTranslate.js":"g0P3q","./minTranslate.js":"hopBm","./maxTranslate.js":"izojh","./translateTo.js":"9fo5P","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l7sfz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../../shared/utils.js");
function getSwiperTranslate(axis) {
    if (axis === void 0) axis = this.isHorizontal() ? 'x' : 'y';
    const swiper = this;
    const { params , rtlTranslate: rtl , translate , $wrapperEl  } = swiper;
    if (params.virtualTranslate) return rtl ? -translate : translate;
    if (params.cssMode) return translate;
    let currentTranslate = _utilsJs.getTranslate($wrapperEl[0], axis);
    if (rtl) currentTranslate = -currentTranslate;
    return currentTranslate || 0;
}
exports.default = getSwiperTranslate;

},{"../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g0P3q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function setTranslate(translate, byController) {
    const swiper = this;
    const { rtlTranslate: rtl , params , $wrapperEl , wrapperEl , progress  } = swiper;
    let x = 0;
    let y = 0;
    const z = 0;
    if (swiper.isHorizontal()) x = rtl ? -translate : translate;
    else y = translate;
    if (params.roundLengths) {
        x = Math.floor(x);
        y = Math.floor(y);
    }
    if (params.cssMode) wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
    else if (!params.virtualTranslate) $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) newProgress = 0;
    else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
    if (newProgress !== progress) swiper.updateProgress(translate);
    swiper.emit('setTranslate', swiper.translate, byController);
}
exports.default = setTranslate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hopBm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function minTranslate() {
    return -this.snapGrid[0];
}
exports.default = minTranslate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"izojh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
}
exports.default = maxTranslate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9fo5P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../../shared/utils.js");
function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
    if (translate === void 0) translate = 0;
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    if (translateBounds === void 0) translateBounds = true;
    const swiper = this;
    const { params , wrapperEl  } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition) return false;
    const minTranslate = swiper.minTranslate();
    const maxTranslate = swiper.maxTranslate();
    let newTranslate;
    if (translateBounds && translate > minTranslate) newTranslate = minTranslate;
    else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;
    else newTranslate = translate; // Update progress
    swiper.updateProgress(newTranslate);
    if (params.cssMode) {
        const isH = swiper.isHorizontal();
        if (speed === 0) wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
        else {
            if (!swiper.support.smoothScroll) {
                _utilsJs.animateCSSModeScroll({
                    swiper,
                    targetPosition: -newTranslate,
                    side: isH ? 'left' : 'top'
                });
                return true;
            }
            wrapperEl.scrollTo({
                [isH ? 'left' : 'top']: -newTranslate,
                behavior: 'smooth'
            });
        }
        return true;
    }
    if (speed === 0) {
        swiper.setTransition(0);
        swiper.setTranslate(newTranslate);
        if (runCallbacks) {
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.emit('transitionEnd');
        }
    } else {
        swiper.setTransition(speed);
        swiper.setTranslate(newTranslate);
        if (runCallbacks) {
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.emit('transitionStart');
        }
        if (!swiper.animating) {
            swiper.animating = true;
            if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                if (!swiper || swiper.destroyed) return;
                if (e.target !== this) return;
                swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
                swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
                swiper.onTranslateToWrapperTransitionEnd = null;
                delete swiper.onTranslateToWrapperTransitionEnd;
                if (runCallbacks) swiper.emit('transitionEnd');
            };
            swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
            swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
        }
    }
    return true;
}
exports.default = translateTo;

},{"../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Knou":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setTransitionJs = require("./setTransition.js");
var _setTransitionJsDefault = parcelHelpers.interopDefault(_setTransitionJs);
var _transitionStartJs = require("./transitionStart.js");
var _transitionStartJsDefault = parcelHelpers.interopDefault(_transitionStartJs);
var _transitionEndJs = require("./transitionEnd.js");
var _transitionEndJsDefault = parcelHelpers.interopDefault(_transitionEndJs);
exports.default = {
    setTransition: _setTransitionJsDefault.default,
    transitionStart: _transitionStartJsDefault.default,
    transitionEnd: _transitionEndJsDefault.default
};

},{"./setTransition.js":"g4hnj","./transitionStart.js":"ZupG2","./transitionEnd.js":"6fcJ0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g4hnj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function setTransition(duration, byController) {
    const swiper = this;
    if (!swiper.params.cssMode) swiper.$wrapperEl.transition(duration);
    swiper.emit('setTransition', duration, byController);
}
exports.default = setTransition;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ZupG2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _transitionEmitJs = require("./transitionEmit.js");
var _transitionEmitJsDefault = parcelHelpers.interopDefault(_transitionEmitJs);
function transitionStart(runCallbacks, direction) {
    if (runCallbacks === void 0) runCallbacks = true;
    const swiper = this;
    const { params  } = swiper;
    if (params.cssMode) return;
    if (params.autoHeight) swiper.updateAutoHeight();
    _transitionEmitJsDefault.default({
        swiper,
        runCallbacks,
        direction,
        step: 'Start'
    });
}
exports.default = transitionStart;

},{"./transitionEmit.js":"d6fZ6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d6fZ6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function transitionEmit(_ref) {
    let { swiper , runCallbacks , direction , step  } = _ref;
    const { activeIndex , previousIndex  } = swiper;
    let dir = direction;
    if (!dir) {
        if (activeIndex > previousIndex) dir = 'next';
        else if (activeIndex < previousIndex) dir = 'prev';
        else dir = 'reset';
    }
    swiper.emit(`transition${step}`);
    if (runCallbacks && activeIndex !== previousIndex) {
        if (dir === 'reset') {
            swiper.emit(`slideResetTransition${step}`);
            return;
        }
        swiper.emit(`slideChangeTransition${step}`);
        if (dir === 'next') swiper.emit(`slideNextTransition${step}`);
        else swiper.emit(`slidePrevTransition${step}`);
    }
}
exports.default = transitionEmit;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6fcJ0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _transitionEmitJs = require("./transitionEmit.js");
var _transitionEmitJsDefault = parcelHelpers.interopDefault(_transitionEmitJs);
function transitionEnd(runCallbacks, direction) {
    if (runCallbacks === void 0) runCallbacks = true;
    const swiper = this;
    const { params  } = swiper;
    swiper.animating = false;
    if (params.cssMode) return;
    swiper.setTransition(0);
    _transitionEmitJsDefault.default({
        swiper,
        runCallbacks,
        direction,
        step: 'End'
    });
}
exports.default = transitionEnd;

},{"./transitionEmit.js":"d6fZ6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5VZY1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _slideToJs = require("./slideTo.js");
var _slideToJsDefault = parcelHelpers.interopDefault(_slideToJs);
var _slideToLoopJs = require("./slideToLoop.js");
var _slideToLoopJsDefault = parcelHelpers.interopDefault(_slideToLoopJs);
var _slideNextJs = require("./slideNext.js");
var _slideNextJsDefault = parcelHelpers.interopDefault(_slideNextJs);
var _slidePrevJs = require("./slidePrev.js");
var _slidePrevJsDefault = parcelHelpers.interopDefault(_slidePrevJs);
var _slideResetJs = require("./slideReset.js");
var _slideResetJsDefault = parcelHelpers.interopDefault(_slideResetJs);
var _slideToClosestJs = require("./slideToClosest.js");
var _slideToClosestJsDefault = parcelHelpers.interopDefault(_slideToClosestJs);
var _slideToClickedSlideJs = require("./slideToClickedSlide.js");
var _slideToClickedSlideJsDefault = parcelHelpers.interopDefault(_slideToClickedSlideJs);
exports.default = {
    slideTo: _slideToJsDefault.default,
    slideToLoop: _slideToLoopJsDefault.default,
    slideNext: _slideNextJsDefault.default,
    slidePrev: _slidePrevJsDefault.default,
    slideReset: _slideResetJsDefault.default,
    slideToClosest: _slideToClosestJsDefault.default,
    slideToClickedSlide: _slideToClickedSlideJsDefault.default
};

},{"./slideTo.js":"iYsU0","./slideToLoop.js":"c0zrc","./slideNext.js":"6QRzM","./slidePrev.js":"2gloi","./slideReset.js":"2Jl3v","./slideToClosest.js":"c03V7","./slideToClickedSlide.js":"kCvnh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iYsU0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../../shared/utils.js");
function slideTo(index, speed, runCallbacks, internal, initial) {
    if (index === void 0) index = 0;
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    if (typeof index !== 'number' && typeof index !== 'string') throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
    if (typeof index === 'string') {
        /**
     * The `index` argument converted from `string` to `number`.
     * @type {number}
     */ const indexAsNumber = parseInt(index, 10);
        /**
     * Determines whether the `index` argument is a valid `number`
     * after being converted from the `string` type.
     * @type {boolean}
     */ const isValidNumber = isFinite(indexAsNumber);
        if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
         // Knowing that the converted `index` is a valid number,
        // we can update the original argument's value.
        index = indexAsNumber;
    }
    const swiper = this;
    let slideIndex = index;
    if (slideIndex < 0) slideIndex = 0;
    const { params , snapGrid , slidesGrid , previousIndex , activeIndex , rtlTranslate: rtl , wrapperEl , enabled  } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) swiper.emit('beforeSlideChangeStart');
    const translate = -snapGrid[snapIndex]; // Update progress
    swiper.updateProgress(translate); // Normalize slideIndex
    if (params.normalizeSlideIndex) for(let i = 0; i < slidesGrid.length; i += 1){
        const normalizedTranslate = -Math.floor(translate * 100);
        const normalizedGrid = Math.floor(slidesGrid[i] * 100);
        const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
        if (typeof slidesGrid[i + 1] !== 'undefined') {
            if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i;
            else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
        } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
    }
     // Directions locks
    if (swiper.initialized && slideIndex !== activeIndex) {
        if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) return false;
        if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
            if ((activeIndex || 0) !== slideIndex) return false;
        }
    }
    let direction;
    if (slideIndex > activeIndex) direction = 'next';
    else if (slideIndex < activeIndex) direction = 'prev';
    else direction = 'reset'; // Update Index
    if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
        swiper.updateActiveIndex(slideIndex); // Update Height
        if (params.autoHeight) swiper.updateAutoHeight();
        swiper.updateSlidesClasses();
        if (params.effect !== 'slide') swiper.setTranslate(translate);
        if (direction !== 'reset') {
            swiper.transitionStart(runCallbacks, direction);
            swiper.transitionEnd(runCallbacks, direction);
        }
        return false;
    }
    if (params.cssMode) {
        const isH = swiper.isHorizontal();
        const t = rtl ? translate : -translate;
        if (speed === 0) {
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            if (isVirtual) {
                swiper.wrapperEl.style.scrollSnapType = 'none';
                swiper._immediateVirtual = true;
            }
            wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
            if (isVirtual) requestAnimationFrame(()=>{
                swiper.wrapperEl.style.scrollSnapType = '';
                swiper._swiperImmediateVirtual = false;
            });
        } else {
            if (!swiper.support.smoothScroll) {
                _utilsJs.animateCSSModeScroll({
                    swiper,
                    targetPosition: t,
                    side: isH ? 'left' : 'top'
                });
                return true;
            }
            wrapperEl.scrollTo({
                [isH ? 'left' : 'top']: t,
                behavior: 'smooth'
            });
        }
        return true;
    }
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (speed === 0) swiper.transitionEnd(runCallbacks, direction);
    else if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) return;
            if (e.target !== this) return;
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
            swiper.onSlideToWrapperTransitionEnd = null;
            delete swiper.onSlideToWrapperTransitionEnd;
            swiper.transitionEnd(runCallbacks, direction);
        };
        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
    }
    return true;
}
exports.default = slideTo;

},{"../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c0zrc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function slideToLoop(index, speed, runCallbacks, internal) {
    if (index === void 0) index = 0;
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    const swiper = this;
    let newIndex = index;
    if (swiper.params.loop) newIndex += swiper.loopedSlides;
    return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}
exports.default = slideToLoop;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6QRzM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function slideNext(speed, runCallbacks, internal) {
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    const swiper = this;
    const { animating , enabled , params  } = swiper;
    if (!enabled) return swiper;
    let perGroup = params.slidesPerGroup;
    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
    const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
    if (params.loop) {
        if (animating && params.loopPreventsSlide) return false;
        swiper.loopFix(); // eslint-disable-next-line
        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}
exports.default = slideNext;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2gloi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function slidePrev(speed, runCallbacks, internal) {
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    const swiper = this;
    const { params , animating , snapGrid , slidesGrid , rtlTranslate , enabled  } = swiper;
    if (!enabled) return swiper;
    if (params.loop) {
        if (animating && params.loopPreventsSlide) return false;
        swiper.loopFix(); // eslint-disable-next-line
        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    const translate = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
        if (val < 0) return -Math.floor(Math.abs(val));
        return Math.floor(val);
    }
    const normalizedTranslate = normalize(translate);
    const normalizedSnapGrid = snapGrid.map((val)=>normalize(val)
    );
    let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === 'undefined' && params.cssMode) {
        let prevSnapIndex;
        snapGrid.forEach((snap, snapIndex)=>{
            if (normalizedTranslate >= snap) // prevSnap = snap;
            prevSnapIndex = snapIndex;
        });
        if (typeof prevSnapIndex !== 'undefined') prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
    let prevIndex = 0;
    if (typeof prevSnap !== 'undefined') {
        prevIndex = slidesGrid.indexOf(prevSnap);
        if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
        if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
            prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
            prevIndex = Math.max(prevIndex, 0);
        }
    }
    if (params.rewind && swiper.isBeginning) {
        const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
        return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}
exports.default = slidePrev;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Jl3v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function slideReset(speed, runCallbacks, internal) {
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    const swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}
exports.default = slideReset;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c03V7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function slideToClosest(speed, runCallbacks, internal, threshold) {
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    if (threshold === void 0) threshold = 0.5;
    const swiper = this;
    let index = swiper.activeIndex;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
    const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    if (translate >= swiper.snapGrid[snapIndex]) {
        // The current translate is on or after the current snap index, so the choice
        // is between the current index and the one after it.
        const currentSnap = swiper.snapGrid[snapIndex];
        const nextSnap = swiper.snapGrid[snapIndex + 1];
        if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
    } else {
        // The current translate is before the current snap index, so the choice
        // is between the current index and the one before it.
        const prevSnap = swiper.snapGrid[snapIndex - 1];
        const currentSnap = swiper.snapGrid[snapIndex];
        if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
    }
    index = Math.max(index, 0);
    index = Math.min(index, swiper.slidesGrid.length - 1);
    return swiper.slideTo(index, speed, runCallbacks, internal);
}
exports.default = slideToClosest;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kCvnh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../../shared/utils.js");
function slideToClickedSlide() {
    const swiper = this;
    const { params , $wrapperEl  } = swiper;
    const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    let slideToIndex = swiper.clickedIndex;
    let realIndex;
    if (params.loop) {
        if (swiper.animating) return;
        realIndex = parseInt(_domJsDefault.default(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
        if (params.centeredSlides) {
            if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                swiper.loopFix();
                slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                _utilsJs.nextTick(()=>{
                    swiper.slideTo(slideToIndex);
                });
            } else swiper.slideTo(slideToIndex);
        } else if (slideToIndex > swiper.slides.length - slidesPerView) {
            swiper.loopFix();
            slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
            _utilsJs.nextTick(()=>{
                swiper.slideTo(slideToIndex);
            });
        } else swiper.slideTo(slideToIndex);
    } else swiper.slideTo(slideToIndex);
}
exports.default = slideToClickedSlide;

},{"../../shared/dom.js":"7pW5q","../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6S1wN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _loopCreateJs = require("./loopCreate.js");
var _loopCreateJsDefault = parcelHelpers.interopDefault(_loopCreateJs);
var _loopFixJs = require("./loopFix.js");
var _loopFixJsDefault = parcelHelpers.interopDefault(_loopFixJs);
var _loopDestroyJs = require("./loopDestroy.js");
var _loopDestroyJsDefault = parcelHelpers.interopDefault(_loopDestroyJs);
exports.default = {
    loopCreate: _loopCreateJsDefault.default,
    loopFix: _loopFixJsDefault.default,
    loopDestroy: _loopDestroyJsDefault.default
};

},{"./loopCreate.js":"2lRpX","./loopFix.js":"iCLJj","./loopDestroy.js":"in4TF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2lRpX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function loopCreate() {
    const swiper = this;
    const document = _ssrWindow.getDocument();
    const { params , $wrapperEl  } = swiper; // Remove duplicated slides
    const $selector = $wrapperEl.children().length > 0 ? _domJsDefault.default($wrapperEl.children()[0].parentNode) : $wrapperEl;
    $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
    let slides = $selector.children(`.${params.slideClass}`);
    if (params.loopFillGroupWithBlank) {
        const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
        if (blankSlidesNum !== params.slidesPerGroup) {
            for(let i = 0; i < blankSlidesNum; i += 1){
                const blankNode = _domJsDefault.default(document.createElement('div')).addClass(`${params.slideClass} ${params.slideBlankClass}`);
                $selector.append(blankNode);
            }
            slides = $selector.children(`.${params.slideClass}`);
        }
    }
    if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
    swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
    swiper.loopedSlides += params.loopAdditionalSlides;
    if (swiper.loopedSlides > slides.length) swiper.loopedSlides = slides.length;
    const prependSlides = [];
    const appendSlides = [];
    slides.each((el, index)=>{
        const slide = _domJsDefault.default(el);
        if (index < swiper.loopedSlides) appendSlides.push(el);
        if (index < slides.length && index >= slides.length - swiper.loopedSlides) prependSlides.push(el);
        slide.attr('data-swiper-slide-index', index);
    });
    for(let i = 0; i < appendSlides.length; i += 1)$selector.append(_domJsDefault.default(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
    for(let i1 = prependSlides.length - 1; i1 >= 0; i1 -= 1)$selector.prepend(_domJsDefault.default(prependSlides[i1].cloneNode(true)).addClass(params.slideDuplicateClass));
}
exports.default = loopCreate;

},{"ssr-window":"3lyfI","../../shared/dom.js":"7pW5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iCLJj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function loopFix() {
    const swiper = this;
    swiper.emit('beforeLoopFix');
    const { activeIndex , slides , loopedSlides , allowSlidePrev , allowSlideNext , snapGrid , rtlTranslate: rtl  } = swiper;
    let newIndex;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    const snapTranslate = -snapGrid[activeIndex];
    const diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding
    if (activeIndex < loopedSlides) {
        newIndex = slides.length - loopedSlides * 3 + activeIndex;
        newIndex += loopedSlides;
        const slideChanged = swiper.slideTo(newIndex, 0, false, true);
        if (slideChanged && diff !== 0) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    } else if (activeIndex >= slides.length - loopedSlides) {
        // Fix For Positive Oversliding
        newIndex = -slides.length + activeIndex + loopedSlides;
        newIndex += loopedSlides;
        const slideChanged = swiper.slideTo(newIndex, 0, false, true);
        if (slideChanged && diff !== 0) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit('loopFix');
}
exports.default = loopFix;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"in4TF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function loopDestroy() {
    const swiper = this;
    const { $wrapperEl , params , slides  } = swiper;
    $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
    slides.removeAttr('data-swiper-slide-index');
}
exports.default = loopDestroy;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6y5ez":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setGrabCursorJs = require("./setGrabCursor.js");
var _setGrabCursorJsDefault = parcelHelpers.interopDefault(_setGrabCursorJs);
var _unsetGrabCursorJs = require("./unsetGrabCursor.js");
var _unsetGrabCursorJsDefault = parcelHelpers.interopDefault(_unsetGrabCursorJs);
exports.default = {
    setGrabCursor: _setGrabCursorJsDefault.default,
    unsetGrabCursor: _unsetGrabCursorJsDefault.default
};

},{"./setGrabCursor.js":"6iLu0","./unsetGrabCursor.js":"fKd0x","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6iLu0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function setGrabCursor(moving) {
    const swiper = this;
    if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
    const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
    el.style.cursor = 'move';
    el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
    el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
    el.style.cursor = moving ? 'grabbing' : 'grab';
}
exports.default = setGrabCursor;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fKd0x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function unsetGrabCursor() {
    const swiper = this;
    if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
    swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
}
exports.default = unsetGrabCursor;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jPWSg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _onTouchStartJs = require("./onTouchStart.js");
var _onTouchStartJsDefault = parcelHelpers.interopDefault(_onTouchStartJs);
var _onTouchMoveJs = require("./onTouchMove.js");
var _onTouchMoveJsDefault = parcelHelpers.interopDefault(_onTouchMoveJs);
var _onTouchEndJs = require("./onTouchEnd.js");
var _onTouchEndJsDefault = parcelHelpers.interopDefault(_onTouchEndJs);
var _onResizeJs = require("./onResize.js");
var _onResizeJsDefault = parcelHelpers.interopDefault(_onResizeJs);
var _onClickJs = require("./onClick.js");
var _onClickJsDefault = parcelHelpers.interopDefault(_onClickJs);
var _onScrollJs = require("./onScroll.js");
var _onScrollJsDefault = parcelHelpers.interopDefault(_onScrollJs);
let dummyEventAttached = false;
function dummyEventListener() {
}
const events = (swiper, method)=>{
    const document = _ssrWindow.getDocument();
    const { params , touchEvents , el , wrapperEl , device , support  } = swiper;
    const capture = !!params.nested;
    const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
    const swiperMethod = method; // Touch Events
    if (!support.touch) {
        el[domMethod](touchEvents.start, swiper.onTouchStart, false);
        document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
        document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
    } else {
        const passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
        el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
            passive: false,
            capture
        } : capture);
        el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);
        if (touchEvents.cancel) el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
    } // Prevent Links Clicks
    if (params.preventClicks || params.preventClicksPropagation) el[domMethod]('click', swiper.onClick, true);
    if (params.cssMode) wrapperEl[domMethod]('scroll', swiper.onScroll);
     // Resize handler
    if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', _onResizeJsDefault.default, true);
    else swiper[swiperMethod]('observerUpdate', _onResizeJsDefault.default, true);
};
function attachEvents() {
    const swiper = this;
    const document = _ssrWindow.getDocument();
    const { params , support  } = swiper;
    swiper.onTouchStart = _onTouchStartJsDefault.default.bind(swiper);
    swiper.onTouchMove = _onTouchMoveJsDefault.default.bind(swiper);
    swiper.onTouchEnd = _onTouchEndJsDefault.default.bind(swiper);
    if (params.cssMode) swiper.onScroll = _onScrollJsDefault.default.bind(swiper);
    swiper.onClick = _onClickJsDefault.default.bind(swiper);
    if (support.touch && !dummyEventAttached) {
        document.addEventListener('touchstart', dummyEventListener);
        dummyEventAttached = true;
    }
    events(swiper, 'on');
}
function detachEvents() {
    const swiper = this;
    events(swiper, 'off');
}
exports.default = {
    attachEvents,
    detachEvents
};

},{"ssr-window":"3lyfI","./onTouchStart.js":"kkzrg","./onTouchMove.js":"cSIvX","./onTouchEnd.js":"db2nG","./onResize.js":"4q7ER","./onClick.js":"leO2O","./onScroll.js":"ik2Ty","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kkzrg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../../shared/utils.js"); // Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
function closestElement(selector, base) {
    if (base === void 0) base = this;
    function __closestFrom(el) {
        if (!el || el === _ssrWindow.getDocument() || el === _ssrWindow.getWindow()) return null;
        if (el.assignedSlot) el = el.assignedSlot;
        const found = el.closest(selector);
        return found || __closestFrom(el.getRootNode().host);
    }
    return __closestFrom(base);
}
function onTouchStart(event) {
    const swiper = this;
    const document = _ssrWindow.getDocument();
    const window = _ssrWindow.getWindow();
    const data = swiper.touchEventsData;
    const { params , touches , enabled  } = swiper;
    if (!enabled) return;
    if (swiper.animating && params.preventInteractionOnTransition) return;
    if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    let $targetEl = _domJsDefault.default(e.target);
    if (params.touchEventsTarget === 'wrapper') {
        if (!$targetEl.closest(swiper.wrapperEl).length) return;
    }
    data.isTouchEvent = e.type === 'touchstart';
    if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
    if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
    if (data.isTouched && data.isMoved) return; // change target el for shadow root component
    const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
    if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) $targetEl = _domJsDefault.default(event.path[0]);
    const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
    const isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element
    if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, e.target) : $targetEl.closest(noSwipingSelector)[0])) {
        swiper.allowClick = true;
        return;
    }
    if (params.swipeHandler) {
        if (!$targetEl.closest(params.swipeHandler)[0]) return;
    }
    touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    const startX = touches.currentX;
    const startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore
    const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
    const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
        if (edgeSwipeDetection === 'prevent') event.preventDefault();
        else return;
    }
    Object.assign(data, {
        isTouched: true,
        isMoved: false,
        allowTouchCallbacks: true,
        isScrolling: undefined,
        startMoving: undefined
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = _utilsJs.now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = undefined;
    if (params.threshold > 0) data.allowThresholdMove = false;
    if (e.type !== 'touchstart') {
        let preventDefault = true;
        if ($targetEl.is(data.focusableElements)) {
            preventDefault = false;
            if ($targetEl[0].nodeName === 'SELECT') data.isTouched = false;
        }
        if (document.activeElement && _domJsDefault.default(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) document.activeElement.blur();
        const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
        if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) e.preventDefault();
    }
    if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
    swiper.emit('touchStart', e);
}
exports.default = onTouchStart;

},{"ssr-window":"3lyfI","../../shared/dom.js":"7pW5q","../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cSIvX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../../shared/utils.js");
function onTouchMove(event) {
    const document = _ssrWindow.getDocument();
    const swiper = this;
    const data = swiper.touchEventsData;
    const { params , touches , rtlTranslate: rtl , enabled  } = swiper;
    if (!enabled) return;
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    if (!data.isTouched) {
        if (data.startMoving && data.isScrolling) swiper.emit('touchMoveOpposite', e);
        return;
    }
    if (data.isTouchEvent && e.type !== 'touchmove') return;
    const targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
    const pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
    const pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;
    if (e.preventedByNestedSwiper) {
        touches.startX = pageX;
        touches.startY = pageY;
        return;
    }
    if (!swiper.allowTouchMove) {
        if (!_domJsDefault.default(e.target).is(data.focusableElements)) swiper.allowClick = false;
        if (data.isTouched) {
            Object.assign(touches, {
                startX: pageX,
                startY: pageY,
                currentX: pageX,
                currentY: pageY
            });
            data.touchStartTime = _utilsJs.now();
        }
        return;
    }
    if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
        if (swiper.isVertical()) // Vertical
        {
            if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                data.isTouched = false;
                data.isMoved = false;
                return;
            }
        } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
    }
    if (data.isTouchEvent && document.activeElement) {
        if (e.target === document.activeElement && _domJsDefault.default(e.target).is(data.focusableElements)) {
            data.isMoved = true;
            swiper.allowClick = false;
            return;
        }
    }
    if (data.allowTouchCallbacks) swiper.emit('touchMove', e);
    if (e.targetTouches && e.targetTouches.length > 1) return;
    touches.currentX = pageX;
    touches.currentY = pageY;
    const diffX = touches.currentX - touches.startX;
    const diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
    if (typeof data.isScrolling === 'undefined') {
        let touchAngle;
        if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false;
        else // eslint-disable-next-line
        if (diffX * diffX + diffY * diffY >= 25) {
            touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
            data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
        }
    }
    if (data.isScrolling) swiper.emit('touchMoveOpposite', e);
    if (typeof data.startMoving === 'undefined') {
        if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
    }
    if (data.isScrolling) {
        data.isTouched = false;
        return;
    }
    if (!data.startMoving) return;
    swiper.allowClick = false;
    if (!params.cssMode && e.cancelable) e.preventDefault();
    if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
    if (!data.isMoved) {
        if (params.loop && !params.cssMode) swiper.loopFix();
        data.startTranslate = swiper.getTranslate();
        swiper.setTransition(0);
        if (swiper.animating) swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
        data.allowMomentumBounce = false; // Grab Cursor
        if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
        swiper.emit('sliderFirstMove', e);
    }
    swiper.emit('sliderMove', e);
    data.isMoved = true;
    let diff = swiper.isHorizontal() ? diffX : diffY;
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) diff = -diff;
    swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
    data.currentTranslate = diff + data.startTranslate;
    let disableParentSwiper = true;
    let resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) resistanceRatio = 0;
    if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
    } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
    }
    if (disableParentSwiper) e.preventedByNestedSwiper = true;
     // Directions locks
    if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
    if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
    if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
     // Threshold
    if (params.threshold > 0) {
        if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
            if (!data.allowThresholdMove) {
                data.allowThresholdMove = true;
                touches.startX = touches.currentX;
                touches.startY = touches.currentY;
                data.currentTranslate = data.startTranslate;
                touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                return;
            }
        } else {
            data.currentTranslate = data.startTranslate;
            return;
        }
    }
    if (!params.followFinger || params.cssMode) return; // Update active index in free mode
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
     // Update progress
    swiper.updateProgress(data.currentTranslate); // Update translate
    swiper.setTranslate(data.currentTranslate);
}
exports.default = onTouchMove;

},{"ssr-window":"3lyfI","../../shared/dom.js":"7pW5q","../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"db2nG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../../shared/utils.js");
function onTouchEnd(event) {
    const swiper = this;
    const data = swiper.touchEventsData;
    const { params , touches , rtlTranslate: rtl , slidesGrid , enabled  } = swiper;
    if (!enabled) return;
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    if (data.allowTouchCallbacks) swiper.emit('touchEnd', e);
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
        if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
        data.isMoved = false;
        data.startMoving = false;
        return;
    } // Return Grab Cursor
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
     // Time diff
    const touchEndTime = _utilsJs.now();
    const timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click
    if (swiper.allowClick) {
        const pathTree = e.path || e.composedPath && e.composedPath();
        swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
        swiper.emit('tap click', e);
        if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit('doubleTap doubleClick', e);
    }
    data.lastClickTime = _utilsJs.now();
    _utilsJs.nextTick(()=>{
        if (!swiper.destroyed) swiper.allowClick = true;
    });
    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    let currentPos;
    if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate;
    else currentPos = -data.currentTranslate;
    if (params.cssMode) return;
    if (swiper.params.freeMode && params.freeMode.enabled) {
        swiper.freeMode.onTouchEnd({
            currentPos
        });
        return;
    } // Find current slide
    let stopIndex = 0;
    let groupSize = swiper.slidesSizesGrid[0];
    for(let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup){
        const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
        if (typeof slidesGrid[i + increment] !== 'undefined') {
            if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                stopIndex = i;
                groupSize = slidesGrid[i + increment] - slidesGrid[i];
            }
        } else if (currentPos >= slidesGrid[i]) {
            stopIndex = i;
            groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
        }
    }
    let rewindFirstIndex = null;
    let rewindLastIndex = null;
    if (params.rewind) {
        if (swiper.isBeginning) rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
        else if (swiper.isEnd) rewindFirstIndex = 0;
    } // Find current slide size
    const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
        // Long touches
        if (!params.longSwipes) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        if (swiper.swipeDirection === 'next') {
            if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);
            else swiper.slideTo(stopIndex);
        }
        if (swiper.swipeDirection === 'prev') {
            if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);
            else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex);
            else swiper.slideTo(stopIndex);
        }
    } else {
        // Short swipes
        if (!params.shortSwipes) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
        if (!isNavButtonTarget) {
            if (swiper.swipeDirection === 'next') swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
            if (swiper.swipeDirection === 'prev') swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
        } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment);
        else swiper.slideTo(stopIndex);
    }
}
exports.default = onTouchEnd;

},{"../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4q7ER":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function onResize() {
    const swiper = this;
    const { params , el  } = swiper;
    if (el && el.offsetWidth === 0) return; // Breakpoints
    if (params.breakpoints) swiper.setBreakpoint();
     // Save locks
    const { allowSlideNext , allowSlidePrev , snapGrid  } = swiper; // Disable locks on resize
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();
    if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    else swiper.slideTo(swiper.activeIndex, 0, false, true);
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.run();
     // Return locks after resize
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
}
exports.default = onResize;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"leO2O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function onClick(e) {
    const swiper = this;
    if (!swiper.enabled) return;
    if (!swiper.allowClick) {
        if (swiper.params.preventClicks) e.preventDefault();
        if (swiper.params.preventClicksPropagation && swiper.animating) {
            e.stopPropagation();
            e.stopImmediatePropagation();
        }
    }
}
exports.default = onClick;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ik2Ty":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function onScroll() {
    const swiper = this;
    const { wrapperEl , rtlTranslate , enabled  } = swiper;
    if (!enabled) return;
    swiper.previousTranslate = swiper.translate;
    if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft;
    else swiper.translate = -wrapperEl.scrollTop;
     // eslint-disable-next-line
    if (swiper.translate === -0) swiper.translate = 0;
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) newProgress = 0;
    else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
    swiper.emit('setTranslate', swiper.translate, false);
}
exports.default = onScroll;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6sZHb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setBreakpointJs = require("./setBreakpoint.js");
var _setBreakpointJsDefault = parcelHelpers.interopDefault(_setBreakpointJs);
var _getBreakpointJs = require("./getBreakpoint.js");
var _getBreakpointJsDefault = parcelHelpers.interopDefault(_getBreakpointJs);
exports.default = {
    setBreakpoint: _setBreakpointJsDefault.default,
    getBreakpoint: _getBreakpointJsDefault.default
};

},{"./setBreakpoint.js":"9am8j","./getBreakpoint.js":"dePRa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9am8j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../../shared/utils.js");
const isGridEnabled = (swiper, params)=>{
    return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
    const swiper = this;
    const { activeIndex , initialized , loopedSlides =0 , params , $el  } = swiper;
    const breakpoints = params.breakpoints;
    if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters
    const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
    if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
    const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
    const breakpointParams = breakpointOnlyParams || swiper.originalParams;
    const wasMultiRow = isGridEnabled(swiper, params);
    const isMultiRow = isGridEnabled(swiper, breakpointParams);
    const wasEnabled = params.enabled;
    if (wasMultiRow && !isMultiRow) {
        $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
        swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
        $el.addClass(`${params.containerModifierClass}grid`);
        if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') $el.addClass(`${params.containerModifierClass}grid-column`);
        swiper.emitContainerClasses();
    }
    const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
    if (directionChanged && initialized) swiper.changeDirection();
    _utilsJs.extend(swiper.params, breakpointParams);
    const isEnabled = swiper.params.enabled;
    Object.assign(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev
    });
    if (wasEnabled && !isEnabled) swiper.disable();
    else if (!wasEnabled && isEnabled) swiper.enable();
    swiper.currentBreakpoint = breakpoint;
    swiper.emit('_beforeBreakpoint', breakpointParams);
    if (needsReLoop && initialized) {
        swiper.loopDestroy();
        swiper.loopCreate();
        swiper.updateSlides();
        swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
    }
    swiper.emit('breakpoint', breakpointParams);
}
exports.default = setBreakpoint;

},{"../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dePRa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
function getBreakpoint(breakpoints, base, containerEl) {
    if (base === void 0) base = 'window';
    if (!breakpoints || base === 'container' && !containerEl) return undefined;
    let breakpoint = false;
    const window = _ssrWindow.getWindow();
    const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
    const points = Object.keys(breakpoints).map((point)=>{
        if (typeof point === 'string' && point.indexOf('@') === 0) {
            const minRatio = parseFloat(point.substr(1));
            const value = currentHeight * minRatio;
            return {
                value,
                point
            };
        }
        return {
            value: point,
            point
        };
    });
    points.sort((a, b)=>parseInt(a.value, 10) - parseInt(b.value, 10)
    );
    for(let i = 0; i < points.length; i += 1){
        const { point , value  } = points[i];
        if (base === 'window') {
            if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
        } else if (value <= containerEl.clientWidth) breakpoint = point;
    }
    return breakpoint || 'max';
}
exports.default = getBreakpoint;

},{"ssr-window":"3lyfI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dJ7YF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _addClassesJs = require("./addClasses.js");
var _addClassesJsDefault = parcelHelpers.interopDefault(_addClassesJs);
var _removeClassesJs = require("./removeClasses.js");
var _removeClassesJsDefault = parcelHelpers.interopDefault(_removeClassesJs);
exports.default = {
    addClasses: _addClassesJsDefault.default,
    removeClasses: _removeClassesJsDefault.default
};

},{"./addClasses.js":"2wJnK","./removeClasses.js":"bfksE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2wJnK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function prepareClasses(entries, prefix) {
    const resultClasses = [];
    entries.forEach((item)=>{
        if (typeof item === 'object') Object.keys(item).forEach((classNames)=>{
            if (item[classNames]) resultClasses.push(prefix + classNames);
        });
        else if (typeof item === 'string') resultClasses.push(prefix + item);
    });
    return resultClasses;
}
function addClasses() {
    const swiper = this;
    const { classNames , params , rtl , $el , device , support  } = swiper; // prettier-ignore
    const suffixes = prepareClasses([
        'initialized',
        params.direction,
        {
            'pointer-events': !support.touch
        },
        {
            'free-mode': swiper.params.freeMode && params.freeMode.enabled
        },
        {
            'autoheight': params.autoHeight
        },
        {
            'rtl': rtl
        },
        {
            'grid': params.grid && params.grid.rows > 1
        },
        {
            'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
        },
        {
            'android': device.android
        },
        {
            'ios': device.ios
        },
        {
            'css-mode': params.cssMode
        },
        {
            'centered': params.cssMode && params.centeredSlides
        }
    ], params.containerModifierClass);
    classNames.push(...suffixes);
    $el.addClass([
        ...classNames
    ].join(' '));
    swiper.emitContainerClasses();
}
exports.default = addClasses;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bfksE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function removeClasses() {
    const swiper = this;
    const { $el , classNames  } = swiper;
    $el.removeClass(classNames.join(' '));
    swiper.emitContainerClasses();
}
exports.default = removeClasses;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4xpbQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _loadImageJs = require("./loadImage.js");
var _loadImageJsDefault = parcelHelpers.interopDefault(_loadImageJs);
var _preloadImagesJs = require("./preloadImages.js");
var _preloadImagesJsDefault = parcelHelpers.interopDefault(_preloadImagesJs);
exports.default = {
    loadImage: _loadImageJsDefault.default,
    preloadImages: _preloadImagesJsDefault.default
};

},{"./loadImage.js":"lapsD","./preloadImages.js":"4DDtH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lapsD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
    const window = _ssrWindow.getWindow();
    let image;
    function onReady() {
        if (callback) callback();
    }
    const isPicture = _domJsDefault.default(imageEl).parent('picture')[0];
    if (!isPicture && (!imageEl.complete || !checkForComplete)) {
        if (src) {
            image = new window.Image();
            image.onload = onReady;
            image.onerror = onReady;
            if (sizes) image.sizes = sizes;
            if (srcset) image.srcset = srcset;
            if (src) image.src = src;
        } else onReady();
    } else // image already loaded...
    onReady();
}
exports.default = loadImage;

},{"ssr-window":"3lyfI","../../shared/dom.js":"7pW5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4DDtH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function preloadImages() {
    const swiper = this;
    swiper.imagesToLoad = swiper.$el.find('img');
    function onReady() {
        if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
        if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;
        if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
            if (swiper.params.updateOnImagesReady) swiper.update();
            swiper.emit('imagesReady');
        }
    }
    for(let i = 0; i < swiper.imagesToLoad.length; i += 1){
        const imageEl = swiper.imagesToLoad[i];
        swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
    }
}
exports.default = preloadImages;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cCZBR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function checkOverflow() {
    const swiper = this;
    const { isLocked: wasLocked , params  } = swiper;
    const { slidesOffsetBefore  } = params;
    if (slidesOffsetBefore) {
        const lastSlideIndex = swiper.slides.length - 1;
        const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
        swiper.isLocked = swiper.size > lastSlideRightEdge;
    } else swiper.isLocked = swiper.snapGrid.length === 1;
    if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
    if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
    if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
    if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
}
exports.default = {
    checkOverflow
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jwKb5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    init: true,
    direction: 'horizontal',
    touchEventsTarget: 'wrapper',
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: true,
    nested: false,
    createElements: false,
    enabled: true,
    focusableElements: 'input, select, option, textarea, button, video, label',
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: false,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: 'slide',
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    // Breakpoints
    breakpoints: undefined,
    breakpointsBase: 'window',
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: false,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: true,
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 0,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // Images
    preloadImages: true,
    updateOnImagesReady: true,
    // loop
    loop: false,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: false,
    loopPreventsSlide: true,
    // rewind
    rewind: false,
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: true,
    maxBackfaceHiddenSlides: 10,
    // NS
    containerModifierClass: 'swiper-',
    // NEW
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-invisible-blank',
    slideActiveClass: 'swiper-slide-active',
    slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideDuplicateClass: 'swiper-slide-duplicate',
    slideNextClass: 'swiper-slide-next',
    slideDuplicateNextClass: 'swiper-slide-duplicate-next',
    slidePrevClass: 'swiper-slide-prev',
    slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
    wrapperClass: 'swiper-wrapper',
    // Callbacks
    runCallbacksOnInit: true,
    // Internals
    _emitClasses: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2G6E7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../shared/utils.js");
function moduleExtendParams(params, allModulesParams) {
    return function extendParams(obj) {
        if (obj === void 0) obj = {
        };
        const moduleParamName = Object.keys(obj)[0];
        const moduleParams = obj[moduleParamName];
        if (typeof moduleParams !== 'object' || moduleParams === null) {
            _utilsJs.extend(allModulesParams, obj);
            return;
        }
        if ([
            'navigation',
            'pagination',
            'scrollbar'
        ].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) params[moduleParamName] = {
            auto: true
        };
        if (!(moduleParamName in params && 'enabled' in moduleParams)) {
            _utilsJs.extend(allModulesParams, obj);
            return;
        }
        if (params[moduleParamName] === true) params[moduleParamName] = {
            enabled: true
        };
        if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) params[moduleParamName].enabled = true;
        if (!params[moduleParamName]) params[moduleParamName] = {
            enabled: false
        };
        _utilsJs.extend(allModulesParams, obj);
    };
}
exports.default = moduleExtendParams;

},{"../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"13JV9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../../shared/utils.js");
function Virtual(_ref) {
    let { swiper , extendParams , on , emit  } = _ref;
    extendParams({
        virtual: {
            enabled: false,
            slides: [],
            cache: true,
            renderSlide: null,
            renderExternal: null,
            renderExternalUpdate: true,
            addSlidesBefore: 0,
            addSlidesAfter: 0
        }
    });
    let cssModeTimeout;
    swiper.virtual = {
        cache: {
        },
        from: undefined,
        to: undefined,
        slides: [],
        offset: 0,
        slidesGrid: []
    };
    function renderSlide(slide, index) {
        const params = swiper.params.virtual;
        if (params.cache && swiper.virtual.cache[index]) return swiper.virtual.cache[index];
        const $slideEl = params.renderSlide ? _domJsDefault.default(params.renderSlide.call(swiper, slide, index)) : _domJsDefault.default(`<div class="${swiper.params.slideClass}" data-swiper-slide-index="${index}">${slide}</div>`);
        if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
        if (params.cache) swiper.virtual.cache[index] = $slideEl;
        return $slideEl;
    }
    function update(force) {
        const { slidesPerView , slidesPerGroup , centeredSlides  } = swiper.params;
        const { addSlidesBefore , addSlidesAfter  } = swiper.params.virtual;
        const { from: previousFrom , to: previousTo , slides , slidesGrid: previousSlidesGrid , offset: previousOffset  } = swiper.virtual;
        if (!swiper.params.cssMode) swiper.updateActiveIndex();
        const activeIndex = swiper.activeIndex || 0;
        let offsetProp;
        if (swiper.rtlTranslate) offsetProp = 'right';
        else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
        let slidesAfter;
        let slidesBefore;
        if (centeredSlides) {
            slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
            slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
        } else {
            slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
            slidesBefore = slidesPerGroup + addSlidesBefore;
        }
        const from = Math.max((activeIndex || 0) - slidesBefore, 0);
        const to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
        const offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
        Object.assign(swiper.virtual, {
            from,
            to,
            offset,
            slidesGrid: swiper.slidesGrid
        });
        function onRendered() {
            swiper.updateSlides();
            swiper.updateProgress();
            swiper.updateSlidesClasses();
            if (swiper.lazy && swiper.params.lazy.enabled) swiper.lazy.load();
            emit('virtualUpdate');
        }
        if (previousFrom === from && previousTo === to && !force) {
            if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) swiper.slides.css(offsetProp, `${offset}px`);
            swiper.updateProgress();
            emit('virtualUpdate');
            return;
        }
        if (swiper.params.virtual.renderExternal) {
            swiper.params.virtual.renderExternal.call(swiper, {
                offset,
                from,
                to,
                slides: function getSlides() {
                    const slidesToRender = [];
                    for(let i = from; i <= to; i += 1)slidesToRender.push(slides[i]);
                    return slidesToRender;
                }()
            });
            if (swiper.params.virtual.renderExternalUpdate) onRendered();
            else emit('virtualUpdate');
            return;
        }
        const prependIndexes = [];
        const appendIndexes = [];
        if (force) swiper.$wrapperEl.find(`.${swiper.params.slideClass}`).remove();
        else {
            for(let i = previousFrom; i <= previousTo; i += 1)if (i < from || i > to) swiper.$wrapperEl.find(`.${swiper.params.slideClass}[data-swiper-slide-index="${i}"]`).remove();
        }
        for(let i1 = 0; i1 < slides.length; i1 += 1)if (i1 >= from && i1 <= to) {
            if (typeof previousTo === 'undefined' || force) appendIndexes.push(i1);
            else {
                if (i1 > previousTo) appendIndexes.push(i1);
                if (i1 < previousFrom) prependIndexes.push(i1);
            }
        }
        appendIndexes.forEach((index)=>{
            swiper.$wrapperEl.append(renderSlide(slides[index], index));
        });
        prependIndexes.sort((a, b)=>b - a
        ).forEach((index)=>{
            swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
        });
        swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, `${offset}px`);
        onRendered();
    }
    function appendSlide(slides) {
        if (typeof slides === 'object' && 'length' in slides) {
            for(let i = 0; i < slides.length; i += 1)if (slides[i]) swiper.virtual.slides.push(slides[i]);
        } else swiper.virtual.slides.push(slides);
        update(true);
    }
    function prependSlide(slides) {
        const activeIndex = swiper.activeIndex;
        let newActiveIndex = activeIndex + 1;
        let numberOfNewSlides = 1;
        if (Array.isArray(slides)) {
            for(let i = 0; i < slides.length; i += 1)if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
            newActiveIndex = activeIndex + slides.length;
            numberOfNewSlides = slides.length;
        } else swiper.virtual.slides.unshift(slides);
        if (swiper.params.virtual.cache) {
            const cache = swiper.virtual.cache;
            const newCache = {
            };
            Object.keys(cache).forEach((cachedIndex)=>{
                const $cachedEl = cache[cachedIndex];
                const cachedElIndex = $cachedEl.attr('data-swiper-slide-index');
                if (cachedElIndex) $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
                newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
            });
            swiper.virtual.cache = newCache;
        }
        update(true);
        swiper.slideTo(newActiveIndex, 0);
    }
    function removeSlide(slidesIndexes) {
        if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
        let activeIndex = swiper.activeIndex;
        if (Array.isArray(slidesIndexes)) for(let i = slidesIndexes.length - 1; i >= 0; i -= 1){
            swiper.virtual.slides.splice(slidesIndexes[i], 1);
            if (swiper.params.virtual.cache) delete swiper.virtual.cache[slidesIndexes[i]];
            if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
            activeIndex = Math.max(activeIndex, 0);
        }
        else {
            swiper.virtual.slides.splice(slidesIndexes, 1);
            if (swiper.params.virtual.cache) delete swiper.virtual.cache[slidesIndexes];
            if (slidesIndexes < activeIndex) activeIndex -= 1;
            activeIndex = Math.max(activeIndex, 0);
        }
        update(true);
        swiper.slideTo(activeIndex, 0);
    }
    function removeAllSlides() {
        swiper.virtual.slides = [];
        if (swiper.params.virtual.cache) swiper.virtual.cache = {
        };
        update(true);
        swiper.slideTo(0, 0);
    }
    on('beforeInit', ()=>{
        if (!swiper.params.virtual.enabled) return;
        swiper.virtual.slides = swiper.params.virtual.slides;
        swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
        if (!swiper.params.initialSlide) update();
    });
    on('setTranslate', ()=>{
        if (!swiper.params.virtual.enabled) return;
        if (swiper.params.cssMode && !swiper._immediateVirtual) {
            clearTimeout(cssModeTimeout);
            cssModeTimeout = setTimeout(()=>{
                update();
            }, 100);
        } else update();
    });
    on('init update resize', ()=>{
        if (!swiper.params.virtual.enabled) return;
        if (swiper.params.cssMode) _utilsJs.setCSSProperty(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);
    });
    Object.assign(swiper.virtual, {
        appendSlide,
        prependSlide,
        removeSlide,
        removeAllSlides,
        update
    });
}
exports.default = Virtual;

},{"../../shared/dom.js":"7pW5q","../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"82wTs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint-disable consistent-return */ var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function Keyboard(_ref) {
    let { swiper , extendParams , on , emit  } = _ref;
    const document = _ssrWindow.getDocument();
    const window = _ssrWindow.getWindow();
    swiper.keyboard = {
        enabled: false
    };
    extendParams({
        keyboard: {
            enabled: false,
            onlyInViewport: true,
            pageUpDown: true
        }
    });
    function handle(event) {
        if (!swiper.enabled) return;
        const { rtlTranslate: rtl  } = swiper;
        let e = event;
        if (e.originalEvent) e = e.originalEvent; // jquery fix
        const kc = e.keyCode || e.charCode;
        const pageUpDown = swiper.params.keyboard.pageUpDown;
        const isPageUp = pageUpDown && kc === 33;
        const isPageDown = pageUpDown && kc === 34;
        const isArrowLeft = kc === 37;
        const isArrowRight = kc === 39;
        const isArrowUp = kc === 38;
        const isArrowDown = kc === 40; // Directions locks
        if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) return false;
        if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) return false;
        if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return undefined;
        if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) return undefined;
        if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
            let inView = false; // Check that swiper should be inside of visible area of window
            if (swiper.$el.parents(`.${swiper.params.slideClass}`).length > 0 && swiper.$el.parents(`.${swiper.params.slideActiveClass}`).length === 0) return undefined;
            const $el = swiper.$el;
            const swiperWidth = $el[0].clientWidth;
            const swiperHeight = $el[0].clientHeight;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const swiperOffset = swiper.$el.offset();
            if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
            const swiperCoord = [
                [
                    swiperOffset.left,
                    swiperOffset.top
                ],
                [
                    swiperOffset.left + swiperWidth,
                    swiperOffset.top
                ],
                [
                    swiperOffset.left,
                    swiperOffset.top + swiperHeight
                ],
                [
                    swiperOffset.left + swiperWidth,
                    swiperOffset.top + swiperHeight
                ]
            ];
            for(let i = 0; i < swiperCoord.length; i += 1){
                const point = swiperCoord[i];
                if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
                    if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
                    inView = true;
                }
            }
            if (!inView) return undefined;
        }
        if (swiper.isHorizontal()) {
            if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
            }
            if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
            if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
        } else {
            if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
            }
            if (isPageDown || isArrowDown) swiper.slideNext();
            if (isPageUp || isArrowUp) swiper.slidePrev();
        }
        emit('keyPress', kc);
        return undefined;
    }
    function enable() {
        if (swiper.keyboard.enabled) return;
        _domJsDefault.default(document).on('keydown', handle);
        swiper.keyboard.enabled = true;
    }
    function disable() {
        if (!swiper.keyboard.enabled) return;
        _domJsDefault.default(document).off('keydown', handle);
        swiper.keyboard.enabled = false;
    }
    on('init', ()=>{
        if (swiper.params.keyboard.enabled) enable();
    });
    on('destroy', ()=>{
        if (swiper.keyboard.enabled) disable();
    });
    Object.assign(swiper.keyboard, {
        enable,
        disable
    });
}
exports.default = Keyboard;

},{"ssr-window":"3lyfI","../../shared/dom.js":"7pW5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dP6Ui":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint-disable consistent-return */ var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../../shared/utils.js");
function Mousewheel(_ref) {
    let { swiper , extendParams , on , emit  } = _ref;
    const window = _ssrWindow.getWindow();
    extendParams({
        mousewheel: {
            enabled: false,
            releaseOnEdges: false,
            invert: false,
            forceToAxis: false,
            sensitivity: 1,
            eventsTarget: 'container',
            thresholdDelta: null,
            thresholdTime: null
        }
    });
    swiper.mousewheel = {
        enabled: false
    };
    let timeout;
    let lastScrollTime = _utilsJs.now();
    let lastEventBeforeSnap;
    const recentWheelEvents = [];
    function normalize(e) {
        // Reasonable defaults
        const PIXEL_STEP = 10;
        const LINE_HEIGHT = 40;
        const PAGE_HEIGHT = 800;
        let sX = 0;
        let sY = 0; // spinX, spinY
        let pX = 0;
        let pY = 0; // pixelX, pixelY
        // Legacy
        if ('detail' in e) sY = e.detail;
        if ('wheelDelta' in e) sY = -e.wheelDelta / 120;
        if ('wheelDeltaY' in e) sY = -e.wheelDeltaY / 120;
        if ('wheelDeltaX' in e) sX = -e.wheelDeltaX / 120;
         // side scrolling on FF with DOMMouseScroll
        if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
            sX = sY;
            sY = 0;
        }
        pX = sX * PIXEL_STEP;
        pY = sY * PIXEL_STEP;
        if ('deltaY' in e) pY = e.deltaY;
        if ('deltaX' in e) pX = e.deltaX;
        if (e.shiftKey && !pX) {
            // if user scrolls with shift he wants horizontal scroll
            pX = pY;
            pY = 0;
        }
        if ((pX || pY) && e.deltaMode) {
            if (e.deltaMode === 1) {
                // delta in LINE units
                pX *= LINE_HEIGHT;
                pY *= LINE_HEIGHT;
            } else {
                // delta in PAGE units
                pX *= PAGE_HEIGHT;
                pY *= PAGE_HEIGHT;
            }
        } // Fall-back if spin cannot be determined
        if (pX && !sX) sX = pX < 1 ? -1 : 1;
        if (pY && !sY) sY = pY < 1 ? -1 : 1;
        return {
            spinX: sX,
            spinY: sY,
            pixelX: pX,
            pixelY: pY
        };
    }
    function handleMouseEnter() {
        if (!swiper.enabled) return;
        swiper.mouseEntered = true;
    }
    function handleMouseLeave() {
        if (!swiper.enabled) return;
        swiper.mouseEntered = false;
    }
    function animateSlider(newEvent) {
        if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) // Prevent if delta of wheel scroll delta is below configured threshold
        return false;
        if (swiper.params.mousewheel.thresholdTime && _utilsJs.now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) // Prevent if time between scrolls is below configured threshold
        return false;
         // If the movement is NOT big enough and
        // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
        //   Don't go any further (avoid insignificant scroll movement).
        if (newEvent.delta >= 6 && _utilsJs.now() - lastScrollTime < 60) // Return false as a default
        return true;
         // If user is scrolling towards the end:
        //   If the slider hasn't hit the latest slide or
        //   if the slider is a loop and
        //   if the slider isn't moving right now:
        //     Go to next slide and
        //     emit a scroll event.
        // Else (the user is scrolling towards the beginning) and
        // if the slider hasn't hit the first slide or
        // if the slider is a loop and
        // if the slider isn't moving right now:
        //   Go to prev slide and
        //   emit a scroll event.
        if (newEvent.direction < 0) {
            if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
                swiper.slideNext();
                emit('scroll', newEvent.raw);
            }
        } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
            swiper.slidePrev();
            emit('scroll', newEvent.raw);
        } // If you got here is because an animation has been triggered so store the current time
        lastScrollTime = new window.Date().getTime(); // Return false as a default
        return false;
    }
    function releaseScroll(newEvent) {
        const params = swiper.params.mousewheel;
        if (newEvent.direction < 0) {
            if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) // Return true to animate scroll on edges
            return true;
        } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) // Return true to animate scroll on edges
        return true;
        return false;
    }
    function handle(event) {
        let e = event;
        let disableParentSwiper = true;
        if (!swiper.enabled) return;
        const params = swiper.params.mousewheel;
        if (swiper.params.cssMode) e.preventDefault();
        let target = swiper.$el;
        if (swiper.params.mousewheel.eventsTarget !== 'container') target = _domJsDefault.default(swiper.params.mousewheel.eventsTarget);
        if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
        if (e.originalEvent) e = e.originalEvent; // jquery fix
        let delta = 0;
        const rtlFactor = swiper.rtlTranslate ? -1 : 1;
        const data = normalize(e);
        if (params.forceToAxis) {
            if (swiper.isHorizontal()) {
                if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;
                else return true;
            } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;
            else return true;
        } else delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
        if (delta === 0) return true;
        if (params.invert) delta = -delta; // Get the scroll positions
        let positions = swiper.getTranslate() + delta * params.sensitivity;
        if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
        if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate(); // When loop is true:
        //     the disableParentSwiper will be true.
        // When loop is false:
        //     if the scroll positions is not on edge,
        //     then the disableParentSwiper will be true.
        //     if the scroll on edge positions,
        //     then the disableParentSwiper will be false.
        disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
        if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
        if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
            // Register the new event in a variable which stores the relevant data
            const newEvent = {
                time: _utilsJs.now(),
                delta: Math.abs(delta),
                direction: Math.sign(delta),
                raw: event
            }; // Keep the most recent events
            if (recentWheelEvents.length >= 2) recentWheelEvents.shift(); // only store the last N events
            const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
            recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
            //   If direction has changed or
            //   if the scroll is quicker than the previous one:
            //     Animate the slider.
            // Else (this is the first time the wheel is moved):
            //     Animate the slider.
            if (prevEvent) {
                if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) animateSlider(newEvent);
            } else animateSlider(newEvent);
             // If it's time to release the scroll:
            //   Return now so you don't hit the preventDefault.
            if (releaseScroll(newEvent)) return true;
        } else {
            // Freemode or scrollContainer:
            // If we recently snapped after a momentum scroll, then ignore wheel events
            // to give time for the deceleration to finish. Stop ignoring after 500 msecs
            // or if it's a new scroll (larger delta or inverse sign as last event before
            // an end-of-momentum snap).
            const newEvent = {
                time: _utilsJs.now(),
                delta: Math.abs(delta),
                direction: Math.sign(delta)
            };
            const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
            if (!ignoreWheelEvents) {
                lastEventBeforeSnap = undefined;
                if (swiper.params.loop) swiper.loopFix();
                let position = swiper.getTranslate() + delta * params.sensitivity;
                const wasBeginning = swiper.isBeginning;
                const wasEnd = swiper.isEnd;
                if (position >= swiper.minTranslate()) position = swiper.minTranslate();
                if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
                swiper.setTransition(0);
                swiper.setTranslate(position);
                swiper.updateProgress();
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
                if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) swiper.updateSlidesClasses();
                if (swiper.params.freeMode.sticky) {
                    // When wheel scrolling starts with sticky (aka snap) enabled, then detect
                    // the end of a momentum scroll by storing recent (N=15?) wheel events.
                    // 1. do all N events have decreasing or same (absolute value) delta?
                    // 2. did all N events arrive in the last M (M=500?) msecs?
                    // 3. does the earliest event have an (absolute value) delta that's
                    //    at least P (P=1?) larger than the most recent event's delta?
                    // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
                    // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
                    // Snap immediately and ignore remaining wheel events in this scroll.
                    // See comment above for "remaining wheel events in this scroll" determination.
                    // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
                    clearTimeout(timeout);
                    timeout = undefined;
                    if (recentWheelEvents.length >= 15) recentWheelEvents.shift(); // only store the last N events
                    const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
                    const firstEvent = recentWheelEvents[0];
                    recentWheelEvents.push(newEvent);
                    if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
                    recentWheelEvents.splice(0);
                    else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
                        // We're at the end of the deceleration of a momentum scroll, so there's no need
                        // to wait for more events. Snap ASAP on the next tick.
                        // Also, because there's some remaining momentum we'll bias the snap in the
                        // direction of the ongoing scroll because it's better UX for the scroll to snap
                        // in the same direction as the scroll instead of reversing to snap.  Therefore,
                        // if it's already scrolled more than 20% in the current direction, keep going.
                        const snapToThreshold = delta > 0 ? 0.8 : 0.2;
                        lastEventBeforeSnap = newEvent;
                        recentWheelEvents.splice(0);
                        timeout = _utilsJs.nextTick(()=>{
                            swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                        }, 0); // no delay; move on next tick
                    }
                    if (!timeout) // if we get here, then we haven't detected the end of a momentum scroll, so
                    // we'll consider a scroll "complete" when there haven't been any wheel events
                    // for 500ms.
                    timeout = _utilsJs.nextTick(()=>{
                        const snapToThreshold = 0.5;
                        lastEventBeforeSnap = newEvent;
                        recentWheelEvents.splice(0);
                        swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                    }, 500);
                } // Emit event
                if (!ignoreWheelEvents) emit('scroll', e); // Stop autoplay
                if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions
                if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
            }
        }
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
        return false;
    }
    function events(method) {
        let target = swiper.$el;
        if (swiper.params.mousewheel.eventsTarget !== 'container') target = _domJsDefault.default(swiper.params.mousewheel.eventsTarget);
        target[method]('mouseenter', handleMouseEnter);
        target[method]('mouseleave', handleMouseLeave);
        target[method]('wheel', handle);
    }
    function enable() {
        if (swiper.params.cssMode) {
            swiper.wrapperEl.removeEventListener('wheel', handle);
            return true;
        }
        if (swiper.mousewheel.enabled) return false;
        events('on');
        swiper.mousewheel.enabled = true;
        return true;
    }
    function disable() {
        if (swiper.params.cssMode) {
            swiper.wrapperEl.addEventListener(event, handle);
            return true;
        }
        if (!swiper.mousewheel.enabled) return false;
        events('off');
        swiper.mousewheel.enabled = false;
        return true;
    }
    on('init', ()=>{
        if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) disable();
        if (swiper.params.mousewheel.enabled) enable();
    });
    on('destroy', ()=>{
        if (swiper.params.cssMode) enable();
        if (swiper.mousewheel.enabled) disable();
    });
    Object.assign(swiper.mousewheel, {
        enable,
        disable
    });
}
exports.default = Mousewheel;

},{"ssr-window":"3lyfI","../../shared/dom.js":"7pW5q","../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lGdRo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createElementIfNotDefinedJs = require("../../shared/create-element-if-not-defined.js");
var _createElementIfNotDefinedJsDefault = parcelHelpers.interopDefault(_createElementIfNotDefinedJs);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function Navigation(_ref) {
    let { swiper , extendParams , on , emit  } = _ref;
    extendParams({
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: false,
            disabledClass: 'swiper-button-disabled',
            hiddenClass: 'swiper-button-hidden',
            lockClass: 'swiper-button-lock'
        }
    });
    swiper.navigation = {
        nextEl: null,
        $nextEl: null,
        prevEl: null,
        $prevEl: null
    };
    function getEl(el) {
        let $el;
        if (el) {
            $el = _domJsDefault.default(el);
            if (swiper.params.uniqueNavElements && typeof el === 'string' && $el.length > 1 && swiper.$el.find(el).length === 1) $el = swiper.$el.find(el);
        }
        return $el;
    }
    function toggleEl($el, disabled) {
        const params = swiper.params.navigation;
        if ($el && $el.length > 0) {
            $el[disabled ? 'addClass' : 'removeClass'](params.disabledClass);
            if ($el[0] && $el[0].tagName === 'BUTTON') $el[0].disabled = disabled;
            if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
        }
    }
    function update() {
        // Update Navigation Buttons
        if (swiper.params.loop) return;
        const { $nextEl , $prevEl  } = swiper.navigation;
        toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
        toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
    }
    function onPrevClick(e) {
        e.preventDefault();
        if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
        swiper.slidePrev();
    }
    function onNextClick(e) {
        e.preventDefault();
        if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
        swiper.slideNext();
    }
    function init() {
        const params = swiper.params.navigation;
        swiper.params.navigation = _createElementIfNotDefinedJsDefault.default(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
            nextEl: 'swiper-button-next',
            prevEl: 'swiper-button-prev'
        });
        if (!(params.nextEl || params.prevEl)) return;
        const $nextEl = getEl(params.nextEl);
        const $prevEl = getEl(params.prevEl);
        if ($nextEl && $nextEl.length > 0) $nextEl.on('click', onNextClick);
        if ($prevEl && $prevEl.length > 0) $prevEl.on('click', onPrevClick);
        Object.assign(swiper.navigation, {
            $nextEl,
            nextEl: $nextEl && $nextEl[0],
            $prevEl,
            prevEl: $prevEl && $prevEl[0]
        });
        if (!swiper.enabled) {
            if ($nextEl) $nextEl.addClass(params.lockClass);
            if ($prevEl) $prevEl.addClass(params.lockClass);
        }
    }
    function destroy() {
        const { $nextEl , $prevEl  } = swiper.navigation;
        if ($nextEl && $nextEl.length) {
            $nextEl.off('click', onNextClick);
            $nextEl.removeClass(swiper.params.navigation.disabledClass);
        }
        if ($prevEl && $prevEl.length) {
            $prevEl.off('click', onPrevClick);
            $prevEl.removeClass(swiper.params.navigation.disabledClass);
        }
    }
    on('init', ()=>{
        init();
        update();
    });
    on('toEdge fromEdge lock unlock', ()=>{
        update();
    });
    on('destroy', ()=>{
        destroy();
    });
    on('enable disable', ()=>{
        const { $nextEl , $prevEl  } = swiper.navigation;
        if ($nextEl) $nextEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
        if ($prevEl) $prevEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
    });
    on('click', (_s, e)=>{
        const { $nextEl , $prevEl  } = swiper.navigation;
        const targetEl = e.target;
        if (swiper.params.navigation.hideOnClick && !_domJsDefault.default(targetEl).is($prevEl) && !_domJsDefault.default(targetEl).is($nextEl)) {
            if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
            let isHidden;
            if ($nextEl) isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
            else if ($prevEl) isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
            if (isHidden === true) emit('navigationShow');
            else emit('navigationHide');
            if ($nextEl) $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
            if ($prevEl) $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
        }
    });
    Object.assign(swiper.navigation, {
        update,
        init,
        destroy
    });
}
exports.default = Navigation;

},{"../../shared/create-element-if-not-defined.js":"4uqq0","../../shared/dom.js":"7pW5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4uqq0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
    const document = _ssrWindow.getDocument();
    if (swiper.params.createElements) Object.keys(checkProps).forEach((key)=>{
        if (!params[key] && params.auto === true) {
            let element = swiper.$el.children(`.${checkProps[key]}`)[0];
            if (!element) {
                element = document.createElement('div');
                element.className = checkProps[key];
                swiper.$el.append(element);
            }
            params[key] = element;
            originalParams[key] = element;
        }
    });
    return params;
}
exports.default = createElementIfNotDefined;

},{"ssr-window":"3lyfI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"40Lys":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _classesToSelectorJs = require("../../shared/classes-to-selector.js");
var _classesToSelectorJsDefault = parcelHelpers.interopDefault(_classesToSelectorJs);
var _createElementIfNotDefinedJs = require("../../shared/create-element-if-not-defined.js");
var _createElementIfNotDefinedJsDefault = parcelHelpers.interopDefault(_createElementIfNotDefinedJs);
function Pagination(_ref) {
    let { swiper , extendParams , on , emit  } = _ref;
    const pfx = 'swiper-pagination';
    extendParams({
        pagination: {
            el: null,
            bulletElement: 'span',
            clickable: false,
            hideOnClick: false,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: false,
            type: 'bullets',
            // 'bullets' or 'progressbar' or 'fraction' or 'custom'
            dynamicBullets: false,
            dynamicMainBullets: 1,
            formatFractionCurrent: (number)=>number
            ,
            formatFractionTotal: (number)=>number
            ,
            bulletClass: `${pfx}-bullet`,
            bulletActiveClass: `${pfx}-bullet-active`,
            modifierClass: `${pfx}-`,
            currentClass: `${pfx}-current`,
            totalClass: `${pfx}-total`,
            hiddenClass: `${pfx}-hidden`,
            progressbarFillClass: `${pfx}-progressbar-fill`,
            progressbarOppositeClass: `${pfx}-progressbar-opposite`,
            clickableClass: `${pfx}-clickable`,
            lockClass: `${pfx}-lock`,
            horizontalClass: `${pfx}-horizontal`,
            verticalClass: `${pfx}-vertical`
        }
    });
    swiper.pagination = {
        el: null,
        $el: null,
        bullets: []
    };
    let bulletSize;
    let dynamicBulletIndex = 0;
    function isPaginationDisabled() {
        return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0;
    }
    function setSideBullets($bulletEl, position) {
        const { bulletActiveClass  } = swiper.params.pagination;
        $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);
    }
    function update() {
        // Render || Update Pagination bullets/items
        const rtl = swiper.rtl;
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        const $el = swiper.pagination.$el; // Current/Total
        let current;
        const total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        if (swiper.params.loop) {
            current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
            if (current > slidesLength - 1 - swiper.loopedSlides * 2) current -= slidesLength - swiper.loopedSlides * 2;
            if (current > total - 1) current -= total;
            if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
        } else if (typeof swiper.snapIndex !== 'undefined') current = swiper.snapIndex;
        else current = swiper.activeIndex || 0;
         // Types
        if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
            const bullets = swiper.pagination.bullets;
            let firstIndex;
            let lastIndex;
            let midIndex;
            if (params.dynamicBullets) {
                bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
                $el.css(swiper.isHorizontal() ? 'width' : 'height', `${bulletSize * (params.dynamicMainBullets + 4)}px`);
                if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
                    dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);
                    if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1;
                    else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                }
                firstIndex = Math.max(current - dynamicBulletIndex, 0);
                lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                midIndex = (lastIndex + firstIndex) / 2;
            }
            bullets.removeClass([
                '',
                '-next',
                '-next-next',
                '-prev',
                '-prev-prev',
                '-main'
            ].map((suffix)=>`${params.bulletActiveClass}${suffix}`
            ).join(' '));
            if ($el.length > 1) bullets.each((bullet)=>{
                const $bullet = _domJsDefault.default(bullet);
                const bulletIndex = $bullet.index();
                if (bulletIndex === current) $bullet.addClass(params.bulletActiveClass);
                if (params.dynamicBullets) {
                    if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) $bullet.addClass(`${params.bulletActiveClass}-main`);
                    if (bulletIndex === firstIndex) setSideBullets($bullet, 'prev');
                    if (bulletIndex === lastIndex) setSideBullets($bullet, 'next');
                }
            });
            else {
                const $bullet = bullets.eq(current);
                const bulletIndex = $bullet.index();
                $bullet.addClass(params.bulletActiveClass);
                if (params.dynamicBullets) {
                    const $firstDisplayedBullet = bullets.eq(firstIndex);
                    const $lastDisplayedBullet = bullets.eq(lastIndex);
                    for(let i = firstIndex; i <= lastIndex; i += 1)bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
                    if (swiper.params.loop) {
                        if (bulletIndex >= bullets.length) {
                            for(let i = params.dynamicMainBullets; i >= 0; i -= 1)bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
                            bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
                        } else {
                            setSideBullets($firstDisplayedBullet, 'prev');
                            setSideBullets($lastDisplayedBullet, 'next');
                        }
                    } else {
                        setSideBullets($firstDisplayedBullet, 'prev');
                        setSideBullets($lastDisplayedBullet, 'next');
                    }
                }
            }
            if (params.dynamicBullets) {
                const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                const offsetProp = rtl ? 'right' : 'left';
                bullets.css(swiper.isHorizontal() ? offsetProp : 'top', `${bulletsOffset}px`);
            }
        }
        if (params.type === 'fraction') {
            $el.find(_classesToSelectorJsDefault.default(params.currentClass)).text(params.formatFractionCurrent(current + 1));
            $el.find(_classesToSelectorJsDefault.default(params.totalClass)).text(params.formatFractionTotal(total));
        }
        if (params.type === 'progressbar') {
            let progressbarDirection;
            if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
            else progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
            const scale = (current + 1) / total;
            let scaleX = 1;
            let scaleY = 1;
            if (progressbarDirection === 'horizontal') scaleX = scale;
            else scaleY = scale;
            $el.find(_classesToSelectorJsDefault.default(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
        }
        if (params.type === 'custom' && params.renderCustom) {
            $el.html(params.renderCustom(swiper, current + 1, total));
            emit('paginationRender', $el[0]);
        } else emit('paginationUpdate', $el[0]);
        if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }
    function render() {
        // Render Container
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        const $el = swiper.pagination.$el;
        let paginationHTML = '';
        if (params.type === 'bullets') {
            let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
            if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
            for(let i = 0; i < numberOfBullets; i += 1)if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
            else paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
            $el.html(paginationHTML);
            swiper.pagination.bullets = $el.find(_classesToSelectorJsDefault.default(params.bulletClass));
        }
        if (params.type === 'fraction') {
            if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
            else paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
            $el.html(paginationHTML);
        }
        if (params.type === 'progressbar') {
            if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
            else paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
            $el.html(paginationHTML);
        }
        if (params.type !== 'custom') emit('paginationRender', swiper.pagination.$el[0]);
    }
    function init() {
        swiper.params.pagination = _createElementIfNotDefinedJsDefault.default(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
            el: 'swiper-pagination'
        });
        const params = swiper.params.pagination;
        if (!params.el) return;
        let $el = _domJsDefault.default(params.el);
        if ($el.length === 0) return;
        if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
            $el = swiper.$el.find(params.el); // check if it belongs to another nested Swiper
            if ($el.length > 1) $el = $el.filter((el)=>{
                if (_domJsDefault.default(el).parents('.swiper')[0] !== swiper.el) return false;
                return true;
            });
        }
        if (params.type === 'bullets' && params.clickable) $el.addClass(params.clickableClass);
        $el.addClass(params.modifierClass + params.type);
        $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.type === 'bullets' && params.dynamicBullets) {
            $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
            dynamicBulletIndex = 0;
            if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
        }
        if (params.type === 'progressbar' && params.progressbarOpposite) $el.addClass(params.progressbarOppositeClass);
        if (params.clickable) $el.on('click', _classesToSelectorJsDefault.default(params.bulletClass), function onClick(e) {
            e.preventDefault();
            let index = _domJsDefault.default(this).index() * swiper.params.slidesPerGroup;
            if (swiper.params.loop) index += swiper.loopedSlides;
            swiper.slideTo(index);
        });
        Object.assign(swiper.pagination, {
            $el,
            el: $el[0]
        });
        if (!swiper.enabled) $el.addClass(params.lockClass);
    }
    function destroy() {
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        const $el = swiper.pagination.$el;
        $el.removeClass(params.hiddenClass);
        $el.removeClass(params.modifierClass + params.type);
        $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass) swiper.pagination.bullets.removeClass(params.bulletActiveClass);
        if (params.clickable) $el.off('click', _classesToSelectorJsDefault.default(params.bulletClass));
    }
    on('init', ()=>{
        init();
        render();
        update();
    });
    on('activeIndexChange', ()=>{
        if (swiper.params.loop) update();
        else if (typeof swiper.snapIndex === 'undefined') update();
    });
    on('snapIndexChange', ()=>{
        if (!swiper.params.loop) update();
    });
    on('slidesLengthChange', ()=>{
        if (swiper.params.loop) {
            render();
            update();
        }
    });
    on('snapGridLengthChange', ()=>{
        if (!swiper.params.loop) {
            render();
            update();
        }
    });
    on('destroy', ()=>{
        destroy();
    });
    on('enable disable', ()=>{
        const { $el  } = swiper.pagination;
        if ($el) $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.pagination.lockClass);
    });
    on('lock unlock', ()=>{
        update();
    });
    on('click', (_s, e)=>{
        const targetEl = e.target;
        const { $el  } = swiper.pagination;
        if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el.length > 0 && !_domJsDefault.default(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
            if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
            const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);
            if (isHidden === true) emit('paginationShow');
            else emit('paginationHide');
            $el.toggleClass(swiper.params.pagination.hiddenClass);
        }
    });
    Object.assign(swiper.pagination, {
        render,
        update,
        init,
        destroy
    });
}
exports.default = Pagination;

},{"../../shared/dom.js":"7pW5q","../../shared/classes-to-selector.js":"227R4","../../shared/create-element-if-not-defined.js":"4uqq0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"227R4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function classesToSelector(classes) {
    if (classes === void 0) classes = '';
    return `.${classes.trim().replace(/([\.:!\/])/g, '\\$1') // eslint-disable-line
    .replace(/ /g, '.')}`;
}
exports.default = classesToSelector;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bfOsF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../../shared/utils.js");
var _createElementIfNotDefinedJs = require("../../shared/create-element-if-not-defined.js");
var _createElementIfNotDefinedJsDefault = parcelHelpers.interopDefault(_createElementIfNotDefinedJs);
function Scrollbar(_ref) {
    let { swiper , extendParams , on , emit  } = _ref;
    const document = _ssrWindow.getDocument();
    let isTouched = false;
    let timeout = null;
    let dragTimeout = null;
    let dragStartPos;
    let dragSize;
    let trackSize;
    let divider;
    extendParams({
        scrollbar: {
            el: null,
            dragSize: 'auto',
            hide: false,
            draggable: false,
            snapOnRelease: true,
            lockClass: 'swiper-scrollbar-lock',
            dragClass: 'swiper-scrollbar-drag'
        }
    });
    swiper.scrollbar = {
        el: null,
        dragEl: null,
        $el: null,
        $dragEl: null
    };
    function setTranslate() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        const { scrollbar , rtlTranslate: rtl , progress  } = swiper;
        const { $dragEl , $el  } = scrollbar;
        const params = swiper.params.scrollbar;
        let newSize = dragSize;
        let newPos = (trackSize - dragSize) * progress;
        if (rtl) {
            newPos = -newPos;
            if (newPos > 0) {
                newSize = dragSize - newPos;
                newPos = 0;
            } else if (-newPos + dragSize > trackSize) newSize = trackSize + newPos;
        } else if (newPos < 0) {
            newSize = dragSize + newPos;
            newPos = 0;
        } else if (newPos + dragSize > trackSize) newSize = trackSize - newPos;
        if (swiper.isHorizontal()) {
            $dragEl.transform(`translate3d(${newPos}px, 0, 0)`);
            $dragEl[0].style.width = `${newSize}px`;
        } else {
            $dragEl.transform(`translate3d(0px, ${newPos}px, 0)`);
            $dragEl[0].style.height = `${newSize}px`;
        }
        if (params.hide) {
            clearTimeout(timeout);
            $el[0].style.opacity = 1;
            timeout = setTimeout(()=>{
                $el[0].style.opacity = 0;
                $el.transition(400);
            }, 1000);
        }
    }
    function setTransition(duration) {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        swiper.scrollbar.$dragEl.transition(duration);
    }
    function updateSize() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        const { scrollbar  } = swiper;
        const { $dragEl , $el  } = scrollbar;
        $dragEl[0].style.width = '';
        $dragEl[0].style.height = '';
        trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
        divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
        if (swiper.params.scrollbar.dragSize === 'auto') dragSize = trackSize * divider;
        else dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
        if (swiper.isHorizontal()) $dragEl[0].style.width = `${dragSize}px`;
        else $dragEl[0].style.height = `${dragSize}px`;
        if (divider >= 1) $el[0].style.display = 'none';
        else $el[0].style.display = '';
        if (swiper.params.scrollbar.hide) $el[0].style.opacity = 0;
        if (swiper.params.watchOverflow && swiper.enabled) scrollbar.$el[swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
    }
    function getPointerPosition(e) {
        if (swiper.isHorizontal()) return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
        return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
    }
    function setDragPosition(e) {
        const { scrollbar , rtlTranslate: rtl  } = swiper;
        const { $el  } = scrollbar;
        let positionRatio;
        positionRatio = (getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
        positionRatio = Math.max(Math.min(positionRatio, 1), 0);
        if (rtl) positionRatio = 1 - positionRatio;
        const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
        swiper.updateProgress(position);
        swiper.setTranslate(position);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    function onDragStart(e) {
        const params = swiper.params.scrollbar;
        const { scrollbar , $wrapperEl  } = swiper;
        const { $el , $dragEl  } = scrollbar;
        isTouched = true;
        dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
        e.preventDefault();
        e.stopPropagation();
        $wrapperEl.transition(100);
        $dragEl.transition(100);
        setDragPosition(e);
        clearTimeout(dragTimeout);
        $el.transition(0);
        if (params.hide) $el.css('opacity', 1);
        if (swiper.params.cssMode) swiper.$wrapperEl.css('scroll-snap-type', 'none');
        emit('scrollbarDragStart', e);
    }
    function onDragMove(e) {
        const { scrollbar , $wrapperEl  } = swiper;
        const { $el , $dragEl  } = scrollbar;
        if (!isTouched) return;
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
        setDragPosition(e);
        $wrapperEl.transition(0);
        $el.transition(0);
        $dragEl.transition(0);
        emit('scrollbarDragMove', e);
    }
    function onDragEnd(e) {
        const params = swiper.params.scrollbar;
        const { scrollbar , $wrapperEl  } = swiper;
        const { $el  } = scrollbar;
        if (!isTouched) return;
        isTouched = false;
        if (swiper.params.cssMode) {
            swiper.$wrapperEl.css('scroll-snap-type', '');
            $wrapperEl.transition('');
        }
        if (params.hide) {
            clearTimeout(dragTimeout);
            dragTimeout = _utilsJs.nextTick(()=>{
                $el.css('opacity', 0);
                $el.transition(400);
            }, 1000);
        }
        emit('scrollbarDragEnd', e);
        if (params.snapOnRelease) swiper.slideToClosest();
    }
    function events(method) {
        const { scrollbar , touchEventsTouch , touchEventsDesktop , params , support  } = swiper;
        const $el = scrollbar.$el;
        const target = $el[0];
        const activeListener = support.passiveListener && params.passiveListeners ? {
            passive: false,
            capture: false
        } : false;
        const passiveListener = support.passiveListener && params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        if (!target) return;
        const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
        if (!support.touch) {
            target[eventMethod](touchEventsDesktop.start, onDragStart, activeListener);
            document[eventMethod](touchEventsDesktop.move, onDragMove, activeListener);
            document[eventMethod](touchEventsDesktop.end, onDragEnd, passiveListener);
        } else {
            target[eventMethod](touchEventsTouch.start, onDragStart, activeListener);
            target[eventMethod](touchEventsTouch.move, onDragMove, activeListener);
            target[eventMethod](touchEventsTouch.end, onDragEnd, passiveListener);
        }
    }
    function enableDraggable() {
        if (!swiper.params.scrollbar.el) return;
        events('on');
    }
    function disableDraggable() {
        if (!swiper.params.scrollbar.el) return;
        events('off');
    }
    function init() {
        const { scrollbar , $el: $swiperEl  } = swiper;
        swiper.params.scrollbar = _createElementIfNotDefinedJsDefault.default(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
            el: 'swiper-scrollbar'
        });
        const params = swiper.params.scrollbar;
        if (!params.el) return;
        let $el = _domJsDefault.default(params.el);
        if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) $el = $swiperEl.find(params.el);
        let $dragEl = $el.find(`.${swiper.params.scrollbar.dragClass}`);
        if ($dragEl.length === 0) {
            $dragEl = _domJsDefault.default(`<div class="${swiper.params.scrollbar.dragClass}"></div>`);
            $el.append($dragEl);
        }
        Object.assign(scrollbar, {
            $el,
            el: $el[0],
            $dragEl,
            dragEl: $dragEl[0]
        });
        if (params.draggable) enableDraggable();
        if ($el) $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
    }
    function destroy() {
        disableDraggable();
    }
    on('init', ()=>{
        init();
        updateSize();
        setTranslate();
    });
    on('update resize observerUpdate lock unlock', ()=>{
        updateSize();
    });
    on('setTranslate', ()=>{
        setTranslate();
    });
    on('setTransition', (_s, duration)=>{
        setTransition(duration);
    });
    on('enable disable', ()=>{
        const { $el  } = swiper.scrollbar;
        if ($el) $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
    });
    on('destroy', ()=>{
        destroy();
    });
    Object.assign(swiper.scrollbar, {
        updateSize,
        setTranslate,
        init,
        destroy
    });
}
exports.default = Scrollbar;

},{"ssr-window":"3lyfI","../../shared/dom.js":"7pW5q","../../shared/utils.js":"dbikn","../../shared/create-element-if-not-defined.js":"4uqq0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aEM3Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function Parallax(_ref) {
    let { swiper , extendParams , on  } = _ref;
    extendParams({
        parallax: {
            enabled: false
        }
    });
    const setTransform = (el, progress)=>{
        const { rtl  } = swiper;
        const $el = _domJsDefault.default(el);
        const rtlFactor = rtl ? -1 : 1;
        const p = $el.attr('data-swiper-parallax') || '0';
        let x = $el.attr('data-swiper-parallax-x');
        let y = $el.attr('data-swiper-parallax-y');
        const scale = $el.attr('data-swiper-parallax-scale');
        const opacity = $el.attr('data-swiper-parallax-opacity');
        if (x || y) {
            x = x || '0';
            y = y || '0';
        } else if (swiper.isHorizontal()) {
            x = p;
            y = '0';
        } else {
            y = p;
            x = '0';
        }
        if (x.indexOf('%') >= 0) x = `${parseInt(x, 10) * progress * rtlFactor}%`;
        else x = `${x * progress * rtlFactor}px`;
        if (y.indexOf('%') >= 0) y = `${parseInt(y, 10) * progress}%`;
        else y = `${y * progress}px`;
        if (typeof opacity !== 'undefined' && opacity !== null) {
            const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
            $el[0].style.opacity = currentOpacity;
        }
        if (typeof scale === 'undefined' || scale === null) $el.transform(`translate3d(${x}, ${y}, 0px)`);
        else {
            const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
            $el.transform(`translate3d(${x}, ${y}, 0px) scale(${currentScale})`);
        }
    };
    const setTranslate = ()=>{
        const { $el , slides , progress , snapGrid  } = swiper;
        $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each((el)=>{
            setTransform(el, progress);
        });
        slides.each((slideEl, slideIndex)=>{
            let slideProgress = slideEl.progress;
            if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
            slideProgress = Math.min(Math.max(slideProgress, -1), 1);
            _domJsDefault.default(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each((el)=>{
                setTransform(el, slideProgress);
            });
        });
    };
    const setTransition = function(duration) {
        if (duration === void 0) duration = swiper.params.speed;
        const { $el  } = swiper;
        $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each((parallaxEl)=>{
            const $parallaxEl = _domJsDefault.default(parallaxEl);
            let parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
            if (duration === 0) parallaxDuration = 0;
            $parallaxEl.transition(parallaxDuration);
        });
    };
    on('beforeInit', ()=>{
        if (!swiper.params.parallax.enabled) return;
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
    });
    on('init', ()=>{
        if (!swiper.params.parallax.enabled) return;
        setTranslate();
    });
    on('setTranslate', ()=>{
        if (!swiper.params.parallax.enabled) return;
        setTranslate();
    });
    on('setTransition', (_swiper, duration)=>{
        if (!swiper.params.parallax.enabled) return;
        setTransition(duration);
    });
}
exports.default = Parallax;

},{"../../shared/dom.js":"7pW5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5YHxH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../../shared/utils.js");
function Zoom(_ref) {
    let { swiper , extendParams , on , emit  } = _ref;
    const window = _ssrWindow.getWindow();
    extendParams({
        zoom: {
            enabled: false,
            maxRatio: 3,
            minRatio: 1,
            toggle: true,
            containerClass: 'swiper-zoom-container',
            zoomedSlideClass: 'swiper-slide-zoomed'
        }
    });
    swiper.zoom = {
        enabled: false
    };
    let currentScale = 1;
    let isScaling = false;
    let gesturesEnabled;
    let fakeGestureTouched;
    let fakeGestureMoved;
    const gesture = {
        $slideEl: undefined,
        slideWidth: undefined,
        slideHeight: undefined,
        $imageEl: undefined,
        $imageWrapEl: undefined,
        maxRatio: 3
    };
    const image = {
        isTouched: undefined,
        isMoved: undefined,
        currentX: undefined,
        currentY: undefined,
        minX: undefined,
        minY: undefined,
        maxX: undefined,
        maxY: undefined,
        width: undefined,
        height: undefined,
        startX: undefined,
        startY: undefined,
        touchesStart: {
        },
        touchesCurrent: {
        }
    };
    const velocity = {
        x: undefined,
        y: undefined,
        prevPositionX: undefined,
        prevPositionY: undefined,
        prevTime: undefined
    };
    let scale = 1;
    Object.defineProperty(swiper.zoom, 'scale', {
        get () {
            return scale;
        },
        set (value) {
            if (scale !== value) {
                const imageEl = gesture.$imageEl ? gesture.$imageEl[0] : undefined;
                const slideEl = gesture.$slideEl ? gesture.$slideEl[0] : undefined;
                emit('zoomChange', value, imageEl, slideEl);
            }
            scale = value;
        }
    });
    function getDistanceBetweenTouches(e) {
        if (e.targetTouches.length < 2) return 1;
        const x1 = e.targetTouches[0].pageX;
        const y1 = e.targetTouches[0].pageY;
        const x2 = e.targetTouches[1].pageX;
        const y2 = e.targetTouches[1].pageY;
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return distance;
    } // Events
    function onGestureStart(e) {
        const support = swiper.support;
        const params = swiper.params.zoom;
        fakeGestureTouched = false;
        fakeGestureMoved = false;
        if (!support.gestures) {
            if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) return;
            fakeGestureTouched = true;
            gesture.scaleStart = getDistanceBetweenTouches(e);
        }
        if (!gesture.$slideEl || !gesture.$slideEl.length) {
            gesture.$slideEl = _domJsDefault.default(e.target).closest(`.${swiper.params.slideClass}`);
            if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
            gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
            gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
            gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
            if (gesture.$imageWrapEl.length === 0) {
                gesture.$imageEl = undefined;
                return;
            }
        }
        if (gesture.$imageEl) gesture.$imageEl.transition(0);
        isScaling = true;
    }
    function onGestureChange(e) {
        const support = swiper.support;
        const params = swiper.params.zoom;
        const zoom = swiper.zoom;
        if (!support.gestures) {
            if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) return;
            fakeGestureMoved = true;
            gesture.scaleMove = getDistanceBetweenTouches(e);
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
            if (e.type === 'gesturechange') onGestureStart(e);
            return;
        }
        if (support.gestures) zoom.scale = e.scale * currentScale;
        else zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
        if (zoom.scale > gesture.maxRatio) zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
        if (zoom.scale < params.minRatio) zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
        gesture.$imageEl.transform(`translate3d(0,0,0) scale(${zoom.scale})`);
    }
    function onGestureEnd(e) {
        const device = swiper.device;
        const support = swiper.support;
        const params = swiper.params.zoom;
        const zoom = swiper.zoom;
        if (!support.gestures) {
            if (!fakeGestureTouched || !fakeGestureMoved) return;
            if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !device.android) return;
            fakeGestureTouched = false;
            fakeGestureMoved = false;
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
        gesture.$imageEl.transition(swiper.params.speed).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
        currentScale = zoom.scale;
        isScaling = false;
        if (zoom.scale === 1) gesture.$slideEl = undefined;
    }
    function onTouchStart(e) {
        const device = swiper.device;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        if (image.isTouched) return;
        if (device.android && e.cancelable) e.preventDefault();
        image.isTouched = true;
        image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
        image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    }
    function onTouchMove(e) {
        const zoom = swiper.zoom;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        swiper.allowClick = false;
        if (!image.isTouched || !gesture.$slideEl) return;
        if (!image.isMoved) {
            image.width = gesture.$imageEl[0].offsetWidth;
            image.height = gesture.$imageEl[0].offsetHeight;
            image.startX = _utilsJs.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
            image.startY = _utilsJs.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
            gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
            gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
            gesture.$imageWrapEl.transition(0);
        } // Define if we need image drag
        const scaledWidth = image.width * zoom.scale;
        const scaledHeight = image.height * zoom.scale;
        if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
        image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
        if (!image.isMoved && !isScaling) {
            if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
                image.isTouched = false;
                return;
            }
            if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
                image.isTouched = false;
                return;
            }
        }
        if (e.cancelable) e.preventDefault();
        e.stopPropagation();
        image.isMoved = true;
        image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
        image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;
        if (image.currentX < image.minX) image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
        if (image.currentX > image.maxX) image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
        if (image.currentY < image.minY) image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
        if (image.currentY > image.maxY) image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
         // Velocity
        if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
        if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
        if (!velocity.prevTime) velocity.prevTime = Date.now();
        velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
        velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
        if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
        if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
        velocity.prevPositionX = image.touchesCurrent.x;
        velocity.prevPositionY = image.touchesCurrent.y;
        velocity.prevTime = Date.now();
        gesture.$imageWrapEl.transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
    }
    function onTouchEnd() {
        const zoom = swiper.zoom;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        if (!image.isTouched || !image.isMoved) {
            image.isTouched = false;
            image.isMoved = false;
            return;
        }
        image.isTouched = false;
        image.isMoved = false;
        let momentumDurationX = 300;
        let momentumDurationY = 300;
        const momentumDistanceX = velocity.x * momentumDurationX;
        const newPositionX = image.currentX + momentumDistanceX;
        const momentumDistanceY = velocity.y * momentumDurationY;
        const newPositionY = image.currentY + momentumDistanceY; // Fix duration
        if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
        if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
        const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
        image.currentX = newPositionX;
        image.currentY = newPositionY; // Define if we need image drag
        const scaledWidth = image.width * zoom.scale;
        const scaledHeight = image.height * zoom.scale;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
        image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
        gesture.$imageWrapEl.transition(momentumDuration).transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
    }
    function onTransitionEnd() {
        const zoom = swiper.zoom;
        if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
            if (gesture.$imageEl) gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
            if (gesture.$imageWrapEl) gesture.$imageWrapEl.transform('translate3d(0,0,0)');
            zoom.scale = 1;
            currentScale = 1;
            gesture.$slideEl = undefined;
            gesture.$imageEl = undefined;
            gesture.$imageWrapEl = undefined;
        }
    }
    function zoomIn(e) {
        const zoom = swiper.zoom;
        const params = swiper.params.zoom;
        if (!gesture.$slideEl) {
            if (e && e.target) gesture.$slideEl = _domJsDefault.default(e.target).closest(`.${swiper.params.slideClass}`);
            if (!gesture.$slideEl) {
                if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
                else gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
            }
            gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
            gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;
        if (swiper.params.cssMode) {
            swiper.wrapperEl.style.overflow = 'hidden';
            swiper.wrapperEl.style.touchAction = 'none';
        }
        gesture.$slideEl.addClass(`${params.zoomedSlideClass}`);
        let touchX;
        let touchY;
        let offsetX;
        let offsetY;
        let diffX;
        let diffY;
        let translateX;
        let translateY;
        let imageWidth;
        let imageHeight;
        let scaledWidth;
        let scaledHeight;
        let translateMinX;
        let translateMinY;
        let translateMaxX;
        let translateMaxY;
        let slideWidth;
        let slideHeight;
        if (typeof image.touchesStart.x === 'undefined' && e) {
            touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
            touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
        } else {
            touchX = image.touchesStart.x;
            touchY = image.touchesStart.y;
        }
        zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
        currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
        if (e) {
            slideWidth = gesture.$slideEl[0].offsetWidth;
            slideHeight = gesture.$slideEl[0].offsetHeight;
            offsetX = gesture.$slideEl.offset().left + window.scrollX;
            offsetY = gesture.$slideEl.offset().top + window.scrollY;
            diffX = offsetX + slideWidth / 2 - touchX;
            diffY = offsetY + slideHeight / 2 - touchY;
            imageWidth = gesture.$imageEl[0].offsetWidth;
            imageHeight = gesture.$imageEl[0].offsetHeight;
            scaledWidth = imageWidth * zoom.scale;
            scaledHeight = imageHeight * zoom.scale;
            translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
            translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
            translateMaxX = -translateMinX;
            translateMaxY = -translateMinY;
            translateX = diffX * zoom.scale;
            translateY = diffY * zoom.scale;
            if (translateX < translateMinX) translateX = translateMinX;
            if (translateX > translateMaxX) translateX = translateMaxX;
            if (translateY < translateMinY) translateY = translateMinY;
            if (translateY > translateMaxY) translateY = translateMaxY;
        } else {
            translateX = 0;
            translateY = 0;
        }
        gesture.$imageWrapEl.transition(300).transform(`translate3d(${translateX}px, ${translateY}px,0)`);
        gesture.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
    }
    function zoomOut() {
        const zoom = swiper.zoom;
        const params = swiper.params.zoom;
        if (!gesture.$slideEl) {
            if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
            else gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
            gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
            gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;
        if (swiper.params.cssMode) {
            swiper.wrapperEl.style.overflow = '';
            swiper.wrapperEl.style.touchAction = '';
        }
        zoom.scale = 1;
        currentScale = 1;
        gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
        gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
        gesture.$slideEl.removeClass(`${params.zoomedSlideClass}`);
        gesture.$slideEl = undefined;
    } // Toggle Zoom
    function zoomToggle(e) {
        const zoom = swiper.zoom;
        if (zoom.scale && zoom.scale !== 1) // Zoom Out
        zoomOut();
        else // Zoom In
        zoomIn(e);
    }
    function getListeners() {
        const support = swiper.support;
        const passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        const activeListenerWithCapture = support.passiveListener ? {
            passive: false,
            capture: true
        } : true;
        return {
            passiveListener,
            activeListenerWithCapture
        };
    }
    function getSlideSelector() {
        return `.${swiper.params.slideClass}`;
    }
    function toggleGestures(method) {
        const { passiveListener  } = getListeners();
        const slideSelector = getSlideSelector();
        swiper.$wrapperEl[method]('gesturestart', slideSelector, onGestureStart, passiveListener);
        swiper.$wrapperEl[method]('gesturechange', slideSelector, onGestureChange, passiveListener);
        swiper.$wrapperEl[method]('gestureend', slideSelector, onGestureEnd, passiveListener);
    }
    function enableGestures() {
        if (gesturesEnabled) return;
        gesturesEnabled = true;
        toggleGestures('on');
    }
    function disableGestures() {
        if (!gesturesEnabled) return;
        gesturesEnabled = false;
        toggleGestures('off');
    } // Attach/Detach Events
    function enable() {
        const zoom = swiper.zoom;
        if (zoom.enabled) return;
        zoom.enabled = true;
        const support = swiper.support;
        const { passiveListener , activeListenerWithCapture  } = getListeners();
        const slideSelector = getSlideSelector(); // Scale image
        if (support.gestures) {
            swiper.$wrapperEl.on(swiper.touchEvents.start, enableGestures, passiveListener);
            swiper.$wrapperEl.on(swiper.touchEvents.end, disableGestures, passiveListener);
        } else if (swiper.touchEvents.start === 'touchstart') {
            swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
            swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
            swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);
            if (swiper.touchEvents.cancel) swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
        } // Move image
        swiper.$wrapperEl.on(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
    }
    function disable() {
        const zoom = swiper.zoom;
        if (!zoom.enabled) return;
        const support = swiper.support;
        zoom.enabled = false;
        const { passiveListener , activeListenerWithCapture  } = getListeners();
        const slideSelector = getSlideSelector(); // Scale image
        if (support.gestures) {
            swiper.$wrapperEl.off(swiper.touchEvents.start, enableGestures, passiveListener);
            swiper.$wrapperEl.off(swiper.touchEvents.end, disableGestures, passiveListener);
        } else if (swiper.touchEvents.start === 'touchstart') {
            swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
            swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
            swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);
            if (swiper.touchEvents.cancel) swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
        } // Move image
        swiper.$wrapperEl.off(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
    }
    on('init', ()=>{
        if (swiper.params.zoom.enabled) enable();
    });
    on('destroy', ()=>{
        disable();
    });
    on('touchStart', (_s, e)=>{
        if (!swiper.zoom.enabled) return;
        onTouchStart(e);
    });
    on('touchEnd', (_s, e)=>{
        if (!swiper.zoom.enabled) return;
        onTouchEnd(e);
    });
    on('doubleTap', (_s, e)=>{
        if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) zoomToggle(e);
    });
    on('transitionEnd', ()=>{
        if (swiper.zoom.enabled && swiper.params.zoom.enabled) onTransitionEnd();
    });
    on('slideChange', ()=>{
        if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) onTransitionEnd();
    });
    Object.assign(swiper.zoom, {
        enable,
        disable,
        in: zoomIn,
        out: zoomOut,
        toggle: zoomToggle
    });
}
exports.default = Zoom;

},{"ssr-window":"3lyfI","../../shared/dom.js":"7pW5q","../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kPhLF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function Lazy(_ref) {
    let { swiper , extendParams , on , emit  } = _ref;
    extendParams({
        lazy: {
            checkInView: false,
            enabled: false,
            loadPrevNext: false,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: false,
            scrollingElement: '',
            elementClass: 'swiper-lazy',
            loadingClass: 'swiper-lazy-loading',
            loadedClass: 'swiper-lazy-loaded',
            preloaderClass: 'swiper-lazy-preloader'
        }
    });
    swiper.lazy = {
    };
    let scrollHandlerAttached = false;
    let initialImageLoaded = false;
    function loadInSlide(index, loadInDuplicate) {
        if (loadInDuplicate === void 0) loadInDuplicate = true;
        const params = swiper.params.lazy;
        if (typeof index === 'undefined') return;
        if (swiper.slides.length === 0) return;
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        const $slideEl = isVirtual ? swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-swiper-slide-index="${index}"]`) : swiper.slides.eq(index);
        const $images = $slideEl.find(`.${params.elementClass}:not(.${params.loadedClass}):not(.${params.loadingClass})`);
        if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) $images.push($slideEl[0]);
        if ($images.length === 0) return;
        $images.each((imageEl)=>{
            const $imageEl = _domJsDefault.default(imageEl);
            $imageEl.addClass(params.loadingClass);
            const background = $imageEl.attr('data-background');
            const src = $imageEl.attr('data-src');
            const srcset = $imageEl.attr('data-srcset');
            const sizes = $imageEl.attr('data-sizes');
            const $pictureEl = $imageEl.parent('picture');
            swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, ()=>{
                if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;
                if (background) {
                    $imageEl.css('background-image', `url("${background}")`);
                    $imageEl.removeAttr('data-background');
                } else {
                    if (srcset) {
                        $imageEl.attr('srcset', srcset);
                        $imageEl.removeAttr('data-srcset');
                    }
                    if (sizes) {
                        $imageEl.attr('sizes', sizes);
                        $imageEl.removeAttr('data-sizes');
                    }
                    if ($pictureEl.length) $pictureEl.children('source').each((sourceEl)=>{
                        const $source = _domJsDefault.default(sourceEl);
                        if ($source.attr('data-srcset')) {
                            $source.attr('srcset', $source.attr('data-srcset'));
                            $source.removeAttr('data-srcset');
                        }
                    });
                    if (src) {
                        $imageEl.attr('src', src);
                        $imageEl.removeAttr('data-src');
                    }
                }
                $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
                $slideEl.find(`.${params.preloaderClass}`).remove();
                if (swiper.params.loop && loadInDuplicate) {
                    const slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
                    if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                        const originalSlide = swiper.$wrapperEl.children(`[data-swiper-slide-index="${slideOriginalIndex}"]:not(.${swiper.params.slideDuplicateClass})`);
                        loadInSlide(originalSlide.index(), false);
                    } else {
                        const duplicatedSlide = swiper.$wrapperEl.children(`.${swiper.params.slideDuplicateClass}[data-swiper-slide-index="${slideOriginalIndex}"]`);
                        loadInSlide(duplicatedSlide.index(), false);
                    }
                }
                emit('lazyImageReady', $slideEl[0], $imageEl[0]);
                if (swiper.params.autoHeight) swiper.updateAutoHeight();
            });
            emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
        });
    }
    function load() {
        const { $wrapperEl , params: swiperParams , slides , activeIndex  } = swiper;
        const isVirtual = swiper.virtual && swiperParams.virtual.enabled;
        const params = swiperParams.lazy;
        let slidesPerView = swiperParams.slidesPerView;
        if (slidesPerView === 'auto') slidesPerView = 0;
        function slideExist(index) {
            if (isVirtual) {
                if ($wrapperEl.children(`.${swiperParams.slideClass}[data-swiper-slide-index="${index}"]`).length) return true;
            } else if (slides[index]) return true;
            return false;
        }
        function slideIndex(slideEl) {
            if (isVirtual) return _domJsDefault.default(slideEl).attr('data-swiper-slide-index');
            return _domJsDefault.default(slideEl).index();
        }
        if (!initialImageLoaded) initialImageLoaded = true;
        if (swiper.params.watchSlidesProgress) $wrapperEl.children(`.${swiperParams.slideVisibleClass}`).each((slideEl)=>{
            const index = isVirtual ? _domJsDefault.default(slideEl).attr('data-swiper-slide-index') : _domJsDefault.default(slideEl).index();
            loadInSlide(index);
        });
        else if (slidesPerView > 1) {
            for(let i = activeIndex; i < activeIndex + slidesPerView; i += 1)if (slideExist(i)) loadInSlide(i);
        } else loadInSlide(activeIndex);
        if (params.loadPrevNext) {
            if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
                const amount = params.loadPrevNextAmount;
                const spv = slidesPerView;
                const maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
                const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides
                for(let i = activeIndex + slidesPerView; i < maxIndex; i += 1)if (slideExist(i)) loadInSlide(i);
                 // Prev Slides
                for(let i1 = minIndex; i1 < activeIndex; i1 += 1)if (slideExist(i1)) loadInSlide(i1);
            } else {
                const nextSlide = $wrapperEl.children(`.${swiperParams.slideNextClass}`);
                if (nextSlide.length > 0) loadInSlide(slideIndex(nextSlide));
                const prevSlide = $wrapperEl.children(`.${swiperParams.slidePrevClass}`);
                if (prevSlide.length > 0) loadInSlide(slideIndex(prevSlide));
            }
        }
    }
    function checkInViewOnLoad() {
        const window = _ssrWindow.getWindow();
        if (!swiper || swiper.destroyed) return;
        const $scrollElement = swiper.params.lazy.scrollingElement ? _domJsDefault.default(swiper.params.lazy.scrollingElement) : _domJsDefault.default(window);
        const isWindow = $scrollElement[0] === window;
        const scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth;
        const scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight;
        const swiperOffset = swiper.$el.offset();
        const { rtlTranslate: rtl  } = swiper;
        let inView = false;
        if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
        const swiperCoord = [
            [
                swiperOffset.left,
                swiperOffset.top
            ],
            [
                swiperOffset.left + swiper.width,
                swiperOffset.top
            ],
            [
                swiperOffset.left,
                swiperOffset.top + swiper.height
            ],
            [
                swiperOffset.left + swiper.width,
                swiperOffset.top + swiper.height
            ]
        ];
        for(let i = 0; i < swiperCoord.length; i += 1){
            const point = swiperCoord[i];
            if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
                if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
                inView = true;
            }
        }
        const passiveListener = swiper.touchEvents.start === 'touchstart' && swiper.support.passiveListener && swiper.params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        if (inView) {
            load();
            $scrollElement.off('scroll', checkInViewOnLoad, passiveListener);
        } else if (!scrollHandlerAttached) {
            scrollHandlerAttached = true;
            $scrollElement.on('scroll', checkInViewOnLoad, passiveListener);
        }
    }
    on('beforeInit', ()=>{
        if (swiper.params.lazy.enabled && swiper.params.preloadImages) swiper.params.preloadImages = false;
    });
    on('init', ()=>{
        if (swiper.params.lazy.enabled) {
            if (swiper.params.lazy.checkInView) checkInViewOnLoad();
            else load();
        }
    });
    on('scroll', ()=>{
        if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.freeMode.sticky) load();
    });
    on('scrollbarDragMove resize _freeModeNoMomentumRelease', ()=>{
        if (swiper.params.lazy.enabled) {
            if (swiper.params.lazy.checkInView) checkInViewOnLoad();
            else load();
        }
    });
    on('transitionStart', ()=>{
        if (swiper.params.lazy.enabled) {
            if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !initialImageLoaded) {
                if (swiper.params.lazy.checkInView) checkInViewOnLoad();
                else load();
            }
        }
    });
    on('transitionEnd', ()=>{
        if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
            if (swiper.params.lazy.checkInView) checkInViewOnLoad();
            else load();
        }
    });
    on('slideChange', ()=>{
        const { lazy , cssMode , watchSlidesProgress , touchReleaseOnEdges , resistanceRatio  } = swiper.params;
        if (lazy.enabled && (cssMode || watchSlidesProgress && (touchReleaseOnEdges || resistanceRatio === 0))) load();
    });
    Object.assign(swiper.lazy, {
        load,
        loadInSlide
    });
}
exports.default = Lazy;

},{"ssr-window":"3lyfI","../../shared/dom.js":"7pW5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hcdrq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint no-bitwise: ["error", { "allow": [">>"] }] */ var _utilsJs = require("../../shared/utils.js");
function Controller(_ref) {
    let { swiper , extendParams , on  } = _ref;
    extendParams({
        controller: {
            control: undefined,
            inverse: false,
            by: 'slide' // or 'container'
        }
    });
    swiper.controller = {
        control: undefined
    };
    function LinearSpline(x, y) {
        const binarySearch = function search() {
            let maxIndex;
            let minIndex;
            let guess;
            return (array, val)=>{
                minIndex = -1;
                maxIndex = array.length;
                while(maxIndex - minIndex > 1){
                    guess = maxIndex + minIndex >> 1;
                    if (array[guess] <= val) minIndex = guess;
                    else maxIndex = guess;
                }
                return maxIndex;
            };
        }();
        this.x = x;
        this.y = y;
        this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
        // (x1,y1) is the known point before given value,
        // (x3,y3) is the known point after given value.
        let i1;
        let i3;
        this.interpolate = function interpolate(x2) {
            if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):
            i3 = binarySearch(this.x, x2);
            i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
            // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
            return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
        };
        return this;
    } // xxx: for now i will just save one spline function to to
    function getInterpolateFunction(c) {
        if (!swiper.controller.spline) swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
    }
    function setTranslate(_t, byController) {
        const controlled = swiper.controller.control;
        let multiplier;
        let controlledTranslate;
        const Swiper = swiper.constructor;
        function setControlledTranslate(c) {
            // this will create an Interpolate function based on the snapGrids
            // x is the Grid of the scrolled scroller and y will be the controlled scroller
            // it makes sense to create this only once and recall it for the interpolation
            // the function does a lot of value caching for performance
            const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
            if (swiper.params.controller.by === 'slide') {
                getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                // but it did not work out
                controlledTranslate = -swiper.controller.spline.interpolate(-translate);
            }
            if (!controlledTranslate || swiper.params.controller.by === 'container') {
                multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
                controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
            }
            if (swiper.params.controller.inverse) controlledTranslate = c.maxTranslate() - controlledTranslate;
            c.updateProgress(controlledTranslate);
            c.setTranslate(controlledTranslate, swiper);
            c.updateActiveIndex();
            c.updateSlidesClasses();
        }
        if (Array.isArray(controlled)) {
            for(let i = 0; i < controlled.length; i += 1)if (controlled[i] !== byController && controlled[i] instanceof Swiper) setControlledTranslate(controlled[i]);
        } else if (controlled instanceof Swiper && byController !== controlled) setControlledTranslate(controlled);
    }
    function setTransition(duration, byController) {
        const Swiper = swiper.constructor;
        const controlled = swiper.controller.control;
        let i;
        function setControlledTransition(c) {
            c.setTransition(duration, swiper);
            if (duration !== 0) {
                c.transitionStart();
                if (c.params.autoHeight) _utilsJs.nextTick(()=>{
                    c.updateAutoHeight();
                });
                c.$wrapperEl.transitionEnd(()=>{
                    if (!controlled) return;
                    if (c.params.loop && swiper.params.controller.by === 'slide') c.loopFix();
                    c.transitionEnd();
                });
            }
        }
        if (Array.isArray(controlled)) {
            for(i = 0; i < controlled.length; i += 1)if (controlled[i] !== byController && controlled[i] instanceof Swiper) setControlledTransition(controlled[i]);
        } else if (controlled instanceof Swiper && byController !== controlled) setControlledTransition(controlled);
    }
    function removeSpline() {
        if (!swiper.controller.control) return;
        if (swiper.controller.spline) {
            swiper.controller.spline = undefined;
            delete swiper.controller.spline;
        }
    }
    on('beforeInit', ()=>{
        swiper.controller.control = swiper.params.controller.control;
    });
    on('update', ()=>{
        removeSpline();
    });
    on('resize', ()=>{
        removeSpline();
    });
    on('observerUpdate', ()=>{
        removeSpline();
    });
    on('setTranslate', (_s, translate, byController)=>{
        if (!swiper.controller.control) return;
        swiper.controller.setTranslate(translate, byController);
    });
    on('setTransition', (_s, duration, byController)=>{
        if (!swiper.controller.control) return;
        swiper.controller.setTransition(duration, byController);
    });
    Object.assign(swiper.controller, {
        setTranslate,
        setTransition
    });
}
exports.default = Controller;

},{"../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lDTl7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classesToSelectorJs = require("../../shared/classes-to-selector.js");
var _classesToSelectorJsDefault = parcelHelpers.interopDefault(_classesToSelectorJs);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function A11y(_ref) {
    let { swiper , extendParams , on  } = _ref;
    extendParams({
        a11y: {
            enabled: true,
            notificationClass: 'swiper-notification',
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
            paginationBulletMessage: 'Go to slide {{index}}',
            slideLabelMessage: '{{index}} / {{slidesLength}}',
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            itemRoleDescriptionMessage: null,
            slideRole: 'group'
        }
    });
    let liveRegion = null;
    function notify(message) {
        const notification = liveRegion;
        if (notification.length === 0) return;
        notification.html('');
        notification.html(message);
    }
    function getRandomNumber(size) {
        if (size === void 0) size = 16;
        const randomChar = ()=>Math.round(16 * Math.random()).toString(16)
        ;
        return 'x'.repeat(size).replace(/x/g, randomChar);
    }
    function makeElFocusable($el) {
        $el.attr('tabIndex', '0');
    }
    function makeElNotFocusable($el) {
        $el.attr('tabIndex', '-1');
    }
    function addElRole($el, role) {
        $el.attr('role', role);
    }
    function addElRoleDescription($el, description) {
        $el.attr('aria-roledescription', description);
    }
    function addElControls($el, controls) {
        $el.attr('aria-controls', controls);
    }
    function addElLabel($el, label) {
        $el.attr('aria-label', label);
    }
    function addElId($el, id) {
        $el.attr('id', id);
    }
    function addElLive($el, live) {
        $el.attr('aria-live', live);
    }
    function disableEl($el) {
        $el.attr('aria-disabled', true);
    }
    function enableEl($el) {
        $el.attr('aria-disabled', false);
    }
    function onEnterOrSpaceKey(e) {
        if (e.keyCode !== 13 && e.keyCode !== 32) return;
        const params = swiper.params.a11y;
        const $targetEl = _domJsDefault.default(e.target);
        if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
            if (!(swiper.isEnd && !swiper.params.loop)) swiper.slideNext();
            if (swiper.isEnd) notify(params.lastSlideMessage);
            else notify(params.nextSlideMessage);
        }
        if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
            if (!(swiper.isBeginning && !swiper.params.loop)) swiper.slidePrev();
            if (swiper.isBeginning) notify(params.firstSlideMessage);
            else notify(params.prevSlideMessage);
        }
        if (swiper.pagination && $targetEl.is(_classesToSelectorJsDefault.default(swiper.params.pagination.bulletClass))) $targetEl[0].click();
    }
    function updateNavigation() {
        if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
        const { $nextEl , $prevEl  } = swiper.navigation;
        if ($prevEl && $prevEl.length > 0) {
            if (swiper.isBeginning) {
                disableEl($prevEl);
                makeElNotFocusable($prevEl);
            } else {
                enableEl($prevEl);
                makeElFocusable($prevEl);
            }
        }
        if ($nextEl && $nextEl.length > 0) {
            if (swiper.isEnd) {
                disableEl($nextEl);
                makeElNotFocusable($nextEl);
            } else {
                enableEl($nextEl);
                makeElFocusable($nextEl);
            }
        }
    }
    function hasPagination() {
        return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
    }
    function hasClickablePagination() {
        return hasPagination() && swiper.params.pagination.clickable;
    }
    function updatePagination() {
        const params = swiper.params.a11y;
        if (!hasPagination()) return;
        swiper.pagination.bullets.each((bulletEl)=>{
            const $bulletEl = _domJsDefault.default(bulletEl);
            if (swiper.params.pagination.clickable) {
                makeElFocusable($bulletEl);
                if (!swiper.params.pagination.renderBullet) {
                    addElRole($bulletEl, 'button');
                    addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
                }
            }
            if ($bulletEl.is(`.${swiper.params.pagination.bulletActiveClass}`)) $bulletEl.attr('aria-current', 'true');
            else $bulletEl.removeAttr('aria-current');
        });
    }
    const initNavEl = ($el, wrapperId, message)=>{
        makeElFocusable($el);
        if ($el[0].tagName !== 'BUTTON') {
            addElRole($el, 'button');
            $el.on('keydown', onEnterOrSpaceKey);
        }
        addElLabel($el, message);
        addElControls($el, wrapperId);
    };
    const handleFocus = (e)=>{
        const slideEl = e.target.closest(`.${swiper.params.slideClass}`);
        if (!slideEl || !swiper.slides.includes(slideEl)) return;
        const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
        const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
        if (isActive || isVisible) return;
        swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
    };
    function init() {
        const params = swiper.params.a11y;
        swiper.$el.append(liveRegion); // Container
        const $containerEl = swiper.$el;
        if (params.containerRoleDescriptionMessage) addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);
        if (params.containerMessage) addElLabel($containerEl, params.containerMessage);
         // Wrapper
        const $wrapperEl = swiper.$wrapperEl;
        const wrapperId = $wrapperEl.attr('id') || `swiper-wrapper-${getRandomNumber(16)}`;
        const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
        addElId($wrapperEl, wrapperId);
        addElLive($wrapperEl, live); // Slide
        if (params.itemRoleDescriptionMessage) addElRoleDescription(_domJsDefault.default(swiper.slides), params.itemRoleDescriptionMessage);
        addElRole(_domJsDefault.default(swiper.slides), params.slideRole);
        const slidesLength = swiper.params.loop ? swiper.slides.filter((el)=>!el.classList.contains(swiper.params.slideDuplicateClass)
        ).length : swiper.slides.length;
        swiper.slides.each((slideEl, index)=>{
            const $slideEl = _domJsDefault.default(slideEl);
            const slideIndex = swiper.params.loop ? parseInt($slideEl.attr('data-swiper-slide-index'), 10) : index;
            const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
            addElLabel($slideEl, ariaLabelMessage);
        }); // Navigation
        let $nextEl;
        let $prevEl;
        if (swiper.navigation && swiper.navigation.$nextEl) $nextEl = swiper.navigation.$nextEl;
        if (swiper.navigation && swiper.navigation.$prevEl) $prevEl = swiper.navigation.$prevEl;
        if ($nextEl && $nextEl.length) initNavEl($nextEl, wrapperId, params.nextSlideMessage);
        if ($prevEl && $prevEl.length) initNavEl($prevEl, wrapperId, params.prevSlideMessage);
         // Pagination
        if (hasClickablePagination()) swiper.pagination.$el.on('keydown', _classesToSelectorJsDefault.default(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
         // Tab focus
        swiper.$el.on('focus', handleFocus, true);
    }
    function destroy() {
        if (liveRegion && liveRegion.length > 0) liveRegion.remove();
        let $nextEl;
        let $prevEl;
        if (swiper.navigation && swiper.navigation.$nextEl) $nextEl = swiper.navigation.$nextEl;
        if (swiper.navigation && swiper.navigation.$prevEl) $prevEl = swiper.navigation.$prevEl;
        if ($nextEl) $nextEl.off('keydown', onEnterOrSpaceKey);
        if ($prevEl) $prevEl.off('keydown', onEnterOrSpaceKey);
         // Pagination
        if (hasClickablePagination()) swiper.pagination.$el.off('keydown', _classesToSelectorJsDefault.default(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
         // Tab focus
        swiper.$el.off('focus', handleFocus, true);
    }
    on('beforeInit', ()=>{
        liveRegion = _domJsDefault.default(`<span class="${swiper.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`);
    });
    on('afterInit', ()=>{
        if (!swiper.params.a11y.enabled) return;
        init();
    });
    on('fromEdge toEdge afterInit lock unlock', ()=>{
        if (!swiper.params.a11y.enabled) return;
        updateNavigation();
    });
    on('paginationUpdate', ()=>{
        if (!swiper.params.a11y.enabled) return;
        updatePagination();
    });
    on('destroy', ()=>{
        if (!swiper.params.a11y.enabled) return;
        destroy();
    });
}
exports.default = A11y;

},{"../../shared/classes-to-selector.js":"227R4","../../shared/dom.js":"7pW5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7pifE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
function History(_ref) {
    let { swiper , extendParams , on  } = _ref;
    extendParams({
        history: {
            enabled: false,
            root: '',
            replaceState: false,
            key: 'slides'
        }
    });
    let initialized = false;
    let paths = {
    };
    const slugify = (text)=>{
        return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
    };
    const getPathValues = (urlOverride)=>{
        const window = _ssrWindow.getWindow();
        let location;
        if (urlOverride) location = new URL(urlOverride);
        else location = window.location;
        const pathArray = location.pathname.slice(1).split('/').filter((part)=>part !== ''
        );
        const total = pathArray.length;
        const key = pathArray[total - 2];
        const value = pathArray[total - 1];
        return {
            key,
            value
        };
    };
    const setHistory = (key, index)=>{
        const window = _ssrWindow.getWindow();
        if (!initialized || !swiper.params.history.enabled) return;
        let location;
        if (swiper.params.url) location = new URL(swiper.params.url);
        else location = window.location;
        const slide = swiper.slides.eq(index);
        let value = slugify(slide.attr('data-history'));
        if (swiper.params.history.root.length > 0) {
            let root = swiper.params.history.root;
            if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
            value = `${root}/${key}/${value}`;
        } else if (!location.pathname.includes(key)) value = `${key}/${value}`;
        const currentState = window.history.state;
        if (currentState && currentState.value === value) return;
        if (swiper.params.history.replaceState) window.history.replaceState({
            value
        }, null, value);
        else window.history.pushState({
            value
        }, null, value);
    };
    const scrollToSlide = (speed, value, runCallbacks)=>{
        if (value) for(let i = 0, length = swiper.slides.length; i < length; i += 1){
            const slide = swiper.slides.eq(i);
            const slideHistory = slugify(slide.attr('data-history'));
            if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                const index = slide.index();
                swiper.slideTo(index, speed, runCallbacks);
            }
        }
        else swiper.slideTo(0, speed, runCallbacks);
    };
    const setHistoryPopState = ()=>{
        paths = getPathValues(swiper.params.url);
        scrollToSlide(swiper.params.speed, swiper.paths.value, false);
    };
    const init = ()=>{
        const window = _ssrWindow.getWindow();
        if (!swiper.params.history) return;
        if (!window.history || !window.history.pushState) {
            swiper.params.history.enabled = false;
            swiper.params.hashNavigation.enabled = true;
            return;
        }
        initialized = true;
        paths = getPathValues(swiper.params.url);
        if (!paths.key && !paths.value) return;
        scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
        if (!swiper.params.history.replaceState) window.addEventListener('popstate', setHistoryPopState);
    };
    const destroy = ()=>{
        const window = _ssrWindow.getWindow();
        if (!swiper.params.history.replaceState) window.removeEventListener('popstate', setHistoryPopState);
    };
    on('init', ()=>{
        if (swiper.params.history.enabled) init();
    });
    on('destroy', ()=>{
        if (swiper.params.history.enabled) destroy();
    });
    on('transitionEnd _freeModeNoMomentumRelease', ()=>{
        if (initialized) setHistory(swiper.params.history.key, swiper.activeIndex);
    });
    on('slideChange', ()=>{
        if (initialized && swiper.params.cssMode) setHistory(swiper.params.history.key, swiper.activeIndex);
    });
}
exports.default = History;

},{"ssr-window":"3lyfI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6TTnC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function HashNavigation(_ref) {
    let { swiper , extendParams , emit , on  } = _ref;
    let initialized = false;
    const document = _ssrWindow.getDocument();
    const window = _ssrWindow.getWindow();
    extendParams({
        hashNavigation: {
            enabled: false,
            replaceState: false,
            watchState: false
        }
    });
    const onHashChange = ()=>{
        emit('hashChange');
        const newHash = document.location.hash.replace('#', '');
        const activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
        if (newHash !== activeSlideHash) {
            const newIndex = swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-hash="${newHash}"]`).index();
            if (typeof newIndex === 'undefined') return;
            swiper.slideTo(newIndex);
        }
    };
    const setHash = ()=>{
        if (!initialized || !swiper.params.hashNavigation.enabled) return;
        if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
            window.history.replaceState(null, null, `#${swiper.slides.eq(swiper.activeIndex).attr('data-hash')}` || '');
            emit('hashSet');
        } else {
            const slide = swiper.slides.eq(swiper.activeIndex);
            const hash = slide.attr('data-hash') || slide.attr('data-history');
            document.location.hash = hash || '';
            emit('hashSet');
        }
    };
    const init = ()=>{
        if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
        initialized = true;
        const hash = document.location.hash.replace('#', '');
        if (hash) {
            const speed = 0;
            for(let i = 0, length = swiper.slides.length; i < length; i += 1){
                const slide = swiper.slides.eq(i);
                const slideHash = slide.attr('data-hash') || slide.attr('data-history');
                if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                    const index = slide.index();
                    swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
                }
            }
        }
        if (swiper.params.hashNavigation.watchState) _domJsDefault.default(window).on('hashchange', onHashChange);
    };
    const destroy = ()=>{
        if (swiper.params.hashNavigation.watchState) _domJsDefault.default(window).off('hashchange', onHashChange);
    };
    on('init', ()=>{
        if (swiper.params.hashNavigation.enabled) init();
    });
    on('destroy', ()=>{
        if (swiper.params.hashNavigation.enabled) destroy();
    });
    on('transitionEnd _freeModeNoMomentumRelease', ()=>{
        if (initialized) setHash();
    });
    on('slideChange', ()=>{
        if (initialized && swiper.params.cssMode) setHash();
    });
}
exports.default = HashNavigation;

},{"ssr-window":"3lyfI","../../shared/dom.js":"7pW5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1YoHq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint no-underscore-dangle: "off" */ /* eslint no-use-before-define: "off" */ var _ssrWindow = require("ssr-window");
var _utilsJs = require("../../shared/utils.js");
function Autoplay(_ref) {
    let { swiper , extendParams , on , emit  } = _ref;
    let timeout;
    swiper.autoplay = {
        running: false,
        paused: false
    };
    extendParams({
        autoplay: {
            enabled: false,
            delay: 3000,
            waitForTransition: true,
            disableOnInteraction: true,
            stopOnLastSlide: false,
            reverseDirection: false,
            pauseOnMouseEnter: false
        }
    });
    function run() {
        const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
        let delay = swiper.params.autoplay.delay;
        if ($activeSlideEl.attr('data-swiper-autoplay')) delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
        clearTimeout(timeout);
        timeout = _utilsJs.nextTick(()=>{
            let autoplayResult;
            if (swiper.params.autoplay.reverseDirection) {
                if (swiper.params.loop) {
                    swiper.loopFix();
                    autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                    emit('autoplay');
                } else if (!swiper.isBeginning) {
                    autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                    emit('autoplay');
                } else if (!swiper.params.autoplay.stopOnLastSlide) {
                    autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
                    emit('autoplay');
                } else stop();
            } else if (swiper.params.loop) {
                swiper.loopFix();
                autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                emit('autoplay');
            } else if (!swiper.isEnd) {
                autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                emit('autoplay');
            } else if (!swiper.params.autoplay.stopOnLastSlide) {
                autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
                emit('autoplay');
            } else stop();
            if (swiper.params.cssMode && swiper.autoplay.running) run();
            else if (autoplayResult === false) run();
        }, delay);
    }
    function start() {
        if (typeof timeout !== 'undefined') return false;
        if (swiper.autoplay.running) return false;
        swiper.autoplay.running = true;
        emit('autoplayStart');
        run();
        return true;
    }
    function stop() {
        if (!swiper.autoplay.running) return false;
        if (typeof timeout === 'undefined') return false;
        if (timeout) {
            clearTimeout(timeout);
            timeout = undefined;
        }
        swiper.autoplay.running = false;
        emit('autoplayStop');
        return true;
    }
    function pause(speed) {
        if (!swiper.autoplay.running) return;
        if (swiper.autoplay.paused) return;
        if (timeout) clearTimeout(timeout);
        swiper.autoplay.paused = true;
        if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
            swiper.autoplay.paused = false;
            run();
        } else [
            'transitionend',
            'webkitTransitionEnd'
        ].forEach((event)=>{
            swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd);
        });
    }
    function onVisibilityChange() {
        const document = _ssrWindow.getDocument();
        if (document.visibilityState === 'hidden' && swiper.autoplay.running) pause();
        if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
            run();
            swiper.autoplay.paused = false;
        }
    }
    function onTransitionEnd(e) {
        if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
        if (e.target !== swiper.$wrapperEl[0]) return;
        [
            'transitionend',
            'webkitTransitionEnd'
        ].forEach((event)=>{
            swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
        });
        swiper.autoplay.paused = false;
        if (!swiper.autoplay.running) stop();
        else run();
    }
    function onMouseEnter() {
        if (swiper.params.autoplay.disableOnInteraction) stop();
        else {
            emit('autoplayPause');
            pause();
        }
        [
            'transitionend',
            'webkitTransitionEnd'
        ].forEach((event)=>{
            swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
        });
    }
    function onMouseLeave() {
        if (swiper.params.autoplay.disableOnInteraction) return;
        swiper.autoplay.paused = false;
        emit('autoplayResume');
        run();
    }
    function attachMouseEvents() {
        if (swiper.params.autoplay.pauseOnMouseEnter) {
            swiper.$el.on('mouseenter', onMouseEnter);
            swiper.$el.on('mouseleave', onMouseLeave);
        }
    }
    function detachMouseEvents() {
        swiper.$el.off('mouseenter', onMouseEnter);
        swiper.$el.off('mouseleave', onMouseLeave);
    }
    on('init', ()=>{
        if (swiper.params.autoplay.enabled) {
            start();
            const document = _ssrWindow.getDocument();
            document.addEventListener('visibilitychange', onVisibilityChange);
            attachMouseEvents();
        }
    });
    on('beforeTransitionStart', (_s, speed, internal)=>{
        if (swiper.autoplay.running) {
            if (internal || !swiper.params.autoplay.disableOnInteraction) swiper.autoplay.pause(speed);
            else stop();
        }
    });
    on('sliderFirstMove', ()=>{
        if (swiper.autoplay.running) {
            if (swiper.params.autoplay.disableOnInteraction) stop();
            else pause();
        }
    });
    on('touchEnd', ()=>{
        if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) run();
    });
    on('destroy', ()=>{
        detachMouseEvents();
        if (swiper.autoplay.running) stop();
        const document = _ssrWindow.getDocument();
        document.removeEventListener('visibilitychange', onVisibilityChange);
    });
    Object.assign(swiper.autoplay, {
        pause,
        run,
        start,
        stop
    });
}
exports.default = Autoplay;

},{"ssr-window":"3lyfI","../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e0dJV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../../shared/utils.js");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function Thumb(_ref) {
    let { swiper , extendParams , on  } = _ref;
    extendParams({
        thumbs: {
            swiper: null,
            multipleActiveThumbs: true,
            autoScrollOffset: 0,
            slideThumbActiveClass: 'swiper-slide-thumb-active',
            thumbsContainerClass: 'swiper-thumbs'
        }
    });
    let initialized = false;
    let swiperCreated = false;
    swiper.thumbs = {
        swiper: null
    };
    function onThumbClick() {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) return;
        const clickedIndex = thumbsSwiper.clickedIndex;
        const clickedSlide = thumbsSwiper.clickedSlide;
        if (clickedSlide && _domJsDefault.default(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
        if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
        let slideToIndex;
        if (thumbsSwiper.params.loop) slideToIndex = parseInt(_domJsDefault.default(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
        else slideToIndex = clickedIndex;
        if (swiper.params.loop) {
            let currentIndex = swiper.activeIndex;
            if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
                swiper.loopFix(); // eslint-disable-next-line
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
                currentIndex = swiper.activeIndex;
            }
            const prevIndex = swiper.slides.eq(currentIndex).prevAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
            const nextIndex = swiper.slides.eq(currentIndex).nextAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
            if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;
            else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;
            else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;
            else slideToIndex = prevIndex;
        }
        swiper.slideTo(slideToIndex);
    }
    function init() {
        const { thumbs: thumbsParams  } = swiper.params;
        if (initialized) return false;
        initialized = true;
        const SwiperClass = swiper.constructor;
        if (thumbsParams.swiper instanceof SwiperClass) {
            swiper.thumbs.swiper = thumbsParams.swiper;
            Object.assign(swiper.thumbs.swiper.originalParams, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
            });
            Object.assign(swiper.thumbs.swiper.params, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
            });
        } else if (_utilsJs.isObject(thumbsParams.swiper)) {
            const thumbsSwiperParams = Object.assign({
            }, thumbsParams.swiper);
            Object.assign(thumbsSwiperParams, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
            });
            swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
            swiperCreated = true;
        }
        swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
        swiper.thumbs.swiper.on('tap', onThumbClick);
        return true;
    }
    function update(initial) {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) return;
        const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
        const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
        const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
        if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
            let currentThumbsIndex = thumbsSwiper.activeIndex;
            let newThumbsIndex;
            let direction;
            if (thumbsSwiper.params.loop) {
                if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
                    thumbsSwiper.loopFix(); // eslint-disable-next-line
                    thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
                    currentThumbsIndex = thumbsSwiper.activeIndex;
                } // Find actual thumbs index to slide to
                const prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
                const nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
                if (typeof prevThumbsIndex === 'undefined') newThumbsIndex = nextThumbsIndex;
                else if (typeof nextThumbsIndex === 'undefined') newThumbsIndex = prevThumbsIndex;
                else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) newThumbsIndex = thumbsSwiper.params.slidesPerGroup > 1 ? nextThumbsIndex : currentThumbsIndex;
                else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex;
                else newThumbsIndex = prevThumbsIndex;
                direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
            } else {
                newThumbsIndex = swiper.realIndex;
                direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
            }
            if (useOffset) newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
            if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
                if (thumbsSwiper.params.centeredSlides) {
                    if (newThumbsIndex > currentThumbsIndex) newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
                    else newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
                } else newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup;
                thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
            }
        } // Activate thumbs
        let thumbsToActivate = 1;
        const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
        if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) thumbsToActivate = swiper.params.slidesPerView;
        if (!swiper.params.thumbs.multipleActiveThumbs) thumbsToActivate = 1;
        thumbsToActivate = Math.floor(thumbsToActivate);
        thumbsSwiper.slides.removeClass(thumbActiveClass);
        if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) for(let i = 0; i < thumbsToActivate; i += 1)thumbsSwiper.$wrapperEl.children(`[data-swiper-slide-index="${swiper.realIndex + i}"]`).addClass(thumbActiveClass);
        else for(let i1 = 0; i1 < thumbsToActivate; i1 += 1)thumbsSwiper.slides.eq(swiper.realIndex + i1).addClass(thumbActiveClass);
    }
    on('beforeInit', ()=>{
        const { thumbs  } = swiper.params;
        if (!thumbs || !thumbs.swiper) return;
        init();
        update(true);
    });
    on('slideChange update resize observerUpdate', ()=>{
        if (!swiper.thumbs.swiper) return;
        update();
    });
    on('setTransition', (_s, duration)=>{
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) return;
        thumbsSwiper.setTransition(duration);
    });
    on('beforeDestroy', ()=>{
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) return;
        if (swiperCreated && thumbsSwiper) thumbsSwiper.destroy();
    });
    Object.assign(swiper.thumbs, {
        init,
        update
    });
}
exports.default = Thumb;

},{"../../shared/utils.js":"dbikn","../../shared/dom.js":"7pW5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4NFQW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../../shared/utils.js");
function freeMode(_ref) {
    let { swiper , extendParams , emit , once  } = _ref;
    extendParams({
        freeMode: {
            enabled: false,
            momentum: true,
            momentumRatio: 1,
            momentumBounce: true,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: false,
            minimumVelocity: 0.02
        }
    });
    function onTouchStart() {
        const translate = swiper.getTranslate();
        swiper.setTranslate(translate);
        swiper.setTransition(0);
        swiper.touchEventsData.velocities.length = 0;
        swiper.freeMode.onTouchEnd({
            currentPos: swiper.rtl ? swiper.translate : -swiper.translate
        });
    }
    function onTouchMove() {
        const { touchEventsData: data , touches  } = swiper; // Velocity
        if (data.velocities.length === 0) data.velocities.push({
            position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
            time: data.touchStartTime
        });
        data.velocities.push({
            position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
            time: _utilsJs.now()
        });
    }
    function onTouchEnd(_ref2) {
        let { currentPos  } = _ref2;
        const { params , $wrapperEl , rtlTranslate: rtl , snapGrid , touchEventsData: data  } = swiper; // Time diff
        const touchEndTime = _utilsJs.now();
        const timeDiff = touchEndTime - data.touchStartTime;
        if (currentPos < -swiper.minTranslate()) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        if (currentPos > -swiper.maxTranslate()) {
            if (swiper.slides.length < snapGrid.length) swiper.slideTo(snapGrid.length - 1);
            else swiper.slideTo(swiper.slides.length - 1);
            return;
        }
        if (params.freeMode.momentum) {
            if (data.velocities.length > 1) {
                const lastMoveEvent = data.velocities.pop();
                const velocityEvent = data.velocities.pop();
                const distance = lastMoveEvent.position - velocityEvent.position;
                const time = lastMoveEvent.time - velocityEvent.time;
                swiper.velocity = distance / time;
                swiper.velocity /= 2;
                if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) swiper.velocity = 0;
                 // this implies that the user stopped moving a finger then released.
                // There would be no events with distance zero, so the last event is stale.
                if (time > 150 || _utilsJs.now() - lastMoveEvent.time > 300) swiper.velocity = 0;
            } else swiper.velocity = 0;
            swiper.velocity *= params.freeMode.momentumVelocityRatio;
            data.velocities.length = 0;
            let momentumDuration = 1000 * params.freeMode.momentumRatio;
            const momentumDistance = swiper.velocity * momentumDuration;
            let newPosition = swiper.translate + momentumDistance;
            if (rtl) newPosition = -newPosition;
            let doBounce = false;
            let afterBouncePosition;
            const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
            let needsLoopFix;
            if (newPosition < swiper.maxTranslate()) {
                if (params.freeMode.momentumBounce) {
                    if (newPosition + swiper.maxTranslate() < -bounceAmount) newPosition = swiper.maxTranslate() - bounceAmount;
                    afterBouncePosition = swiper.maxTranslate();
                    doBounce = true;
                    data.allowMomentumBounce = true;
                } else newPosition = swiper.maxTranslate();
                if (params.loop && params.centeredSlides) needsLoopFix = true;
            } else if (newPosition > swiper.minTranslate()) {
                if (params.freeMode.momentumBounce) {
                    if (newPosition - swiper.minTranslate() > bounceAmount) newPosition = swiper.minTranslate() + bounceAmount;
                    afterBouncePosition = swiper.minTranslate();
                    doBounce = true;
                    data.allowMomentumBounce = true;
                } else newPosition = swiper.minTranslate();
                if (params.loop && params.centeredSlides) needsLoopFix = true;
            } else if (params.freeMode.sticky) {
                let nextSlide;
                for(let j = 0; j < snapGrid.length; j += 1)if (snapGrid[j] > -newPosition) {
                    nextSlide = j;
                    break;
                }
                if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') newPosition = snapGrid[nextSlide];
                else newPosition = snapGrid[nextSlide - 1];
                newPosition = -newPosition;
            }
            if (needsLoopFix) once('transitionEnd', ()=>{
                swiper.loopFix();
            });
             // Fix duration
            if (swiper.velocity !== 0) {
                if (rtl) momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
                else momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
                if (params.freeMode.sticky) {
                    // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
                    // event, then durations can be 20+ seconds to slide one (or zero!) slides.
                    // It's easy to see this when simulating touch with mouse events. To fix this,
                    // limit single-slide swipes to the default slide duration. This also has the
                    // nice side effect of matching slide speed if the user stopped moving before
                    // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
                    // For faster swipes, also apply limits (albeit higher ones).
                    const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
                    const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
                    if (moveDistance < currentSlideSize) momentumDuration = params.speed;
                    else if (moveDistance < 2 * currentSlideSize) momentumDuration = params.speed * 1.5;
                    else momentumDuration = params.speed * 2.5;
                }
            } else if (params.freeMode.sticky) {
                swiper.slideToClosest();
                return;
            }
            if (params.freeMode.momentumBounce && doBounce) {
                swiper.updateProgress(afterBouncePosition);
                swiper.setTransition(momentumDuration);
                swiper.setTranslate(newPosition);
                swiper.transitionStart(true, swiper.swipeDirection);
                swiper.animating = true;
                $wrapperEl.transitionEnd(()=>{
                    if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
                    emit('momentumBounce');
                    swiper.setTransition(params.speed);
                    setTimeout(()=>{
                        swiper.setTranslate(afterBouncePosition);
                        $wrapperEl.transitionEnd(()=>{
                            if (!swiper || swiper.destroyed) return;
                            swiper.transitionEnd();
                        });
                    }, 0);
                });
            } else if (swiper.velocity) {
                emit('_freeModeNoMomentumRelease');
                swiper.updateProgress(newPosition);
                swiper.setTransition(momentumDuration);
                swiper.setTranslate(newPosition);
                swiper.transitionStart(true, swiper.swipeDirection);
                if (!swiper.animating) {
                    swiper.animating = true;
                    $wrapperEl.transitionEnd(()=>{
                        if (!swiper || swiper.destroyed) return;
                        swiper.transitionEnd();
                    });
                }
            } else swiper.updateProgress(newPosition);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        } else if (params.freeMode.sticky) {
            swiper.slideToClosest();
            return;
        } else if (params.freeMode) emit('_freeModeNoMomentumRelease');
        if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
            swiper.updateProgress();
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
    }
    Object.assign(swiper, {
        freeMode: {
            onTouchStart,
            onTouchMove,
            onTouchEnd
        }
    });
}
exports.default = freeMode;

},{"../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gE5KG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function Grid(_ref) {
    let { swiper , extendParams  } = _ref;
    extendParams({
        grid: {
            rows: 1,
            fill: 'column'
        }
    });
    let slidesNumberEvenToRows;
    let slidesPerRow;
    let numFullColumns;
    const initSlides = (slidesLength)=>{
        const { slidesPerView  } = swiper.params;
        const { rows , fill  } = swiper.params.grid;
        slidesPerRow = slidesNumberEvenToRows / rows;
        numFullColumns = Math.floor(slidesLength / rows);
        if (Math.floor(slidesLength / rows) === slidesLength / rows) slidesNumberEvenToRows = slidesLength;
        else slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
        if (slidesPerView !== 'auto' && fill === 'row') slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
    };
    const updateSlide = (i, slide, slidesLength, getDirectionLabel)=>{
        const { slidesPerGroup , spaceBetween  } = swiper.params;
        const { rows , fill  } = swiper.params.grid; // Set slides order
        let newSlideOrderIndex;
        let column;
        let row;
        if (fill === 'row' && slidesPerGroup > 1) {
            const groupIndex = Math.floor(i / (slidesPerGroup * rows));
            const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
            const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
            row = Math.floor(slideIndexInGroup / columnsInGroup);
            column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
            newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
            slide.css({
                '-webkit-order': newSlideOrderIndex,
                order: newSlideOrderIndex
            });
        } else if (fill === 'column') {
            column = Math.floor(i / rows);
            row = i - column * rows;
            if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
                row += 1;
                if (row >= rows) {
                    row = 0;
                    column += 1;
                }
            }
        } else {
            row = Math.floor(i / slidesPerRow);
            column = i - row * slidesPerRow;
        }
        slide.css(getDirectionLabel('margin-top'), row !== 0 ? spaceBetween && `${spaceBetween}px` : '');
    };
    const updateWrapperSize = (slideSize, snapGrid, getDirectionLabel)=>{
        const { spaceBetween , centeredSlides , roundLengths  } = swiper.params;
        const { rows  } = swiper.params.grid;
        swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
        swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
        swiper.$wrapperEl.css({
            [getDirectionLabel('width')]: `${swiper.virtualSize + spaceBetween}px`
        });
        if (centeredSlides) {
            snapGrid.splice(0, snapGrid.length);
            const newSlidesGrid = [];
            for(let i = 0; i < snapGrid.length; i += 1){
                let slidesGridItem = snapGrid[i];
                if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
            }
            snapGrid.push(...newSlidesGrid);
        }
    };
    swiper.grid = {
        initSlides,
        updateSlide,
        updateWrapperSize
    };
}
exports.default = Grid;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ga5Sr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _appendSlideJs = require("./methods/appendSlide.js");
var _appendSlideJsDefault = parcelHelpers.interopDefault(_appendSlideJs);
var _prependSlideJs = require("./methods/prependSlide.js");
var _prependSlideJsDefault = parcelHelpers.interopDefault(_prependSlideJs);
var _addSlideJs = require("./methods/addSlide.js");
var _addSlideJsDefault = parcelHelpers.interopDefault(_addSlideJs);
var _removeSlideJs = require("./methods/removeSlide.js");
var _removeSlideJsDefault = parcelHelpers.interopDefault(_removeSlideJs);
var _removeAllSlidesJs = require("./methods/removeAllSlides.js");
var _removeAllSlidesJsDefault = parcelHelpers.interopDefault(_removeAllSlidesJs);
function Manipulation(_ref) {
    let { swiper  } = _ref;
    Object.assign(swiper, {
        appendSlide: _appendSlideJsDefault.default.bind(swiper),
        prependSlide: _prependSlideJsDefault.default.bind(swiper),
        addSlide: _addSlideJsDefault.default.bind(swiper),
        removeSlide: _removeSlideJsDefault.default.bind(swiper),
        removeAllSlides: _removeAllSlidesJsDefault.default.bind(swiper)
    });
}
exports.default = Manipulation;

},{"./methods/appendSlide.js":"69bun","./methods/prependSlide.js":"djuuM","./methods/addSlide.js":"4opfk","./methods/removeSlide.js":"8WI06","./methods/removeAllSlides.js":"7pufd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"69bun":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function appendSlide(slides) {
    const swiper = this;
    const { $wrapperEl , params  } = swiper;
    if (params.loop) swiper.loopDestroy();
    if (typeof slides === 'object' && 'length' in slides) {
        for(let i = 0; i < slides.length; i += 1)if (slides[i]) $wrapperEl.append(slides[i]);
    } else $wrapperEl.append(slides);
    if (params.loop) swiper.loopCreate();
    if (!params.observer) swiper.update();
}
exports.default = appendSlide;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"djuuM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function prependSlide(slides) {
    const swiper = this;
    const { params , $wrapperEl , activeIndex  } = swiper;
    if (params.loop) swiper.loopDestroy();
    let newActiveIndex = activeIndex + 1;
    if (typeof slides === 'object' && 'length' in slides) {
        for(let i = 0; i < slides.length; i += 1)if (slides[i]) $wrapperEl.prepend(slides[i]);
        newActiveIndex = activeIndex + slides.length;
    } else $wrapperEl.prepend(slides);
    if (params.loop) swiper.loopCreate();
    if (!params.observer) swiper.update();
    swiper.slideTo(newActiveIndex, 0, false);
}
exports.default = prependSlide;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4opfk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function addSlide(index, slides) {
    const swiper = this;
    const { $wrapperEl , params , activeIndex  } = swiper;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
    }
    const baseLength = swiper.slides.length;
    if (index <= 0) {
        swiper.prependSlide(slides);
        return;
    }
    if (index >= baseLength) {
        swiper.appendSlide(slides);
        return;
    }
    let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
    const slidesBuffer = [];
    for(let i = baseLength - 1; i >= index; i -= 1){
        const currentSlide = swiper.slides.eq(i);
        currentSlide.remove();
        slidesBuffer.unshift(currentSlide);
    }
    if (typeof slides === 'object' && 'length' in slides) {
        for(let i = 0; i < slides.length; i += 1)if (slides[i]) $wrapperEl.append(slides[i]);
        newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
    } else $wrapperEl.append(slides);
    for(let i1 = 0; i1 < slidesBuffer.length; i1 += 1)$wrapperEl.append(slidesBuffer[i1]);
    if (params.loop) swiper.loopCreate();
    if (!params.observer) swiper.update();
    if (params.loop) swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    else swiper.slideTo(newActiveIndex, 0, false);
}
exports.default = addSlide;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8WI06":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function removeSlide(slidesIndexes) {
    const swiper = this;
    const { params , $wrapperEl , activeIndex  } = swiper;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
    }
    let newActiveIndex = activeIndexBuffer;
    let indexToRemove;
    if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
        for(let i = 0; i < slidesIndexes.length; i += 1){
            indexToRemove = slidesIndexes[i];
            if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
            if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        }
        newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
        indexToRemove = slidesIndexes;
        if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
        if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        newActiveIndex = Math.max(newActiveIndex, 0);
    }
    if (params.loop) swiper.loopCreate();
    if (!params.observer) swiper.update();
    if (params.loop) swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    else swiper.slideTo(newActiveIndex, 0, false);
}
exports.default = removeSlide;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7pufd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function removeAllSlides() {
    const swiper = this;
    const slidesIndexes = [];
    for(let i = 0; i < swiper.slides.length; i += 1)slidesIndexes.push(i);
    swiper.removeSlide(slidesIndexes);
}
exports.default = removeAllSlides;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fBGpM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _effectInitJs = require("../../shared/effect-init.js");
var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
var _effectTargetJs = require("../../shared/effect-target.js");
var _effectTargetJsDefault = parcelHelpers.interopDefault(_effectTargetJs);
var _effectVirtualTransitionEndJs = require("../../shared/effect-virtual-transition-end.js");
var _effectVirtualTransitionEndJsDefault = parcelHelpers.interopDefault(_effectVirtualTransitionEndJs);
function EffectFade(_ref) {
    let { swiper , extendParams , on  } = _ref;
    extendParams({
        fadeEffect: {
            crossFade: false,
            transformEl: null
        }
    });
    const setTranslate = ()=>{
        const { slides  } = swiper;
        const params = swiper.params.fadeEffect;
        for(let i = 0; i < slides.length; i += 1){
            const $slideEl = swiper.slides.eq(i);
            const offset = $slideEl[0].swiperSlideOffset;
            let tx = -offset;
            if (!swiper.params.virtualTranslate) tx -= swiper.translate;
            let ty = 0;
            if (!swiper.isHorizontal()) {
                ty = tx;
                tx = 0;
            }
            const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
            const $targetEl = _effectTargetJsDefault.default(params, $slideEl);
            $targetEl.css({
                opacity: slideOpacity
            }).transform(`translate3d(${tx}px, ${ty}px, 0px)`);
        }
    };
    const setTransition = (duration)=>{
        const { transformEl  } = swiper.params.fadeEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration);
        _effectVirtualTransitionEndJsDefault.default({
            swiper,
            duration,
            transformEl,
            allSlides: true
        });
    };
    _effectInitJsDefault.default({
        effect: 'fade',
        swiper,
        on,
        setTranslate,
        setTransition,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}
exports.default = EffectFade;

},{"../../shared/effect-init.js":"5DnvG","../../shared/effect-target.js":"eKqS8","../../shared/effect-virtual-transition-end.js":"VhYFx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5DnvG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function effectInit(params) {
    const { effect , swiper , on , setTranslate , setTransition , overwriteParams , perspective  } = params;
    on('beforeInit', ()=>{
        if (swiper.params.effect !== effect) return;
        swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
        if (perspective && perspective()) swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
        const overwriteParamsResult = overwriteParams ? overwriteParams() : {
        };
        Object.assign(swiper.params, overwriteParamsResult);
        Object.assign(swiper.originalParams, overwriteParamsResult);
    });
    on('setTranslate', ()=>{
        if (swiper.params.effect !== effect) return;
        setTranslate();
    });
    on('setTransition', (_s, duration)=>{
        if (swiper.params.effect !== effect) return;
        setTransition(duration);
    });
    let requireUpdateOnVirtual;
    on('virtualUpdate', ()=>{
        if (!swiper.slides.length) requireUpdateOnVirtual = true;
        requestAnimationFrame(()=>{
            if (requireUpdateOnVirtual && swiper.slides.length) {
                setTranslate();
                requireUpdateOnVirtual = false;
            }
        });
    });
}
exports.default = effectInit;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eKqS8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function effectTarget(effectParams, $slideEl) {
    if (effectParams.transformEl) return $slideEl.find(effectParams.transformEl).css({
        'backface-visibility': 'hidden',
        '-webkit-backface-visibility': 'hidden'
    });
    return $slideEl;
}
exports.default = effectTarget;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"VhYFx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function effectVirtualTransitionEnd(_ref) {
    let { swiper , duration , transformEl , allSlides  } = _ref;
    const { slides , activeIndex , $wrapperEl  } = swiper;
    if (swiper.params.virtualTranslate && duration !== 0) {
        let eventTriggered = false;
        let $transitionEndTarget;
        if (allSlides) $transitionEndTarget = transformEl ? slides.find(transformEl) : slides;
        else $transitionEndTarget = transformEl ? slides.eq(activeIndex).find(transformEl) : slides.eq(activeIndex);
        $transitionEndTarget.transitionEnd(()=>{
            if (eventTriggered) return;
            if (!swiper || swiper.destroyed) return;
            eventTriggered = true;
            swiper.animating = false;
            const triggerEvents = [
                'webkitTransitionEnd',
                'transitionend'
            ];
            for(let i = 0; i < triggerEvents.length; i += 1)$wrapperEl.trigger(triggerEvents[i]);
        });
    }
}
exports.default = effectVirtualTransitionEnd;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hV6iY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _effectInitJs = require("../../shared/effect-init.js");
var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
function EffectCube(_ref) {
    let { swiper , extendParams , on  } = _ref;
    extendParams({
        cubeEffect: {
            slideShadows: true,
            shadow: true,
            shadowOffset: 20,
            shadowScale: 0.94
        }
    });
    const setTranslate = ()=>{
        const { $el , $wrapperEl , slides , width: swiperWidth , height: swiperHeight , rtlTranslate: rtl , size: swiperSize , browser  } = swiper;
        const params = swiper.params.cubeEffect;
        const isHorizontal = swiper.isHorizontal();
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        let wrapperRotate = 0;
        let $cubeShadowEl;
        if (params.shadow) {
            if (isHorizontal) {
                $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
                if ($cubeShadowEl.length === 0) {
                    $cubeShadowEl = _domJsDefault.default('<div class="swiper-cube-shadow"></div>');
                    $wrapperEl.append($cubeShadowEl);
                }
                $cubeShadowEl.css({
                    height: `${swiperWidth}px`
                });
            } else {
                $cubeShadowEl = $el.find('.swiper-cube-shadow');
                if ($cubeShadowEl.length === 0) {
                    $cubeShadowEl = _domJsDefault.default('<div class="swiper-cube-shadow"></div>');
                    $el.append($cubeShadowEl);
                }
            }
        }
        for(let i = 0; i < slides.length; i += 1){
            const $slideEl = slides.eq(i);
            let slideIndex = i;
            if (isVirtual) slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
            let slideAngle = slideIndex * 90;
            let round = Math.floor(slideAngle / 360);
            if (rtl) {
                slideAngle = -slideAngle;
                round = Math.floor(-slideAngle / 360);
            }
            const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
            let tx = 0;
            let ty = 0;
            let tz = 0;
            if (slideIndex % 4 === 0) {
                tx = -round * 4 * swiperSize;
                tz = 0;
            } else if ((slideIndex - 1) % 4 === 0) {
                tx = 0;
                tz = -round * 4 * swiperSize;
            } else if ((slideIndex - 2) % 4 === 0) {
                tx = swiperSize + round * 4 * swiperSize;
                tz = swiperSize;
            } else if ((slideIndex - 3) % 4 === 0) {
                tx = -swiperSize;
                tz = 3 * swiperSize + swiperSize * 4 * round;
            }
            if (rtl) tx = -tx;
            if (!isHorizontal) {
                ty = tx;
                tx = 0;
            }
            const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
            if (progress <= 1 && progress > -1) {
                wrapperRotate = slideIndex * 90 + progress * 90;
                if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
            }
            $slideEl.transform(transform);
            if (params.slideShadows) {
                // Set shadows
                let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                if (shadowBefore.length === 0) {
                    shadowBefore = _domJsDefault.default(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
                    $slideEl.append(shadowBefore);
                }
                if (shadowAfter.length === 0) {
                    shadowAfter = _domJsDefault.default(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
                    $slideEl.append(shadowAfter);
                }
                if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
            }
        }
        $wrapperEl.css({
            '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,
            'transform-origin': `50% 50% -${swiperSize / 2}px`
        });
        if (params.shadow) {
            if (isHorizontal) $cubeShadowEl.transform(`translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
            else {
                const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                const scale1 = params.shadowScale;
                const scale2 = params.shadowScale / multiplier;
                const offset = params.shadowOffset;
                $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
            }
        }
        const zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
        $wrapperEl.transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
    };
    const setTransition = (duration)=>{
        const { $el , slides  } = swiper;
        slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
        if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) $el.find('.swiper-cube-shadow').transition(duration);
    };
    _effectInitJsDefault.default({
        effect: 'cube',
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: ()=>true
        ,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: false,
                virtualTranslate: true
            })
    });
}
exports.default = EffectCube;

},{"../../shared/dom.js":"7pW5q","../../shared/effect-init.js":"5DnvG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dI6Dz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createShadowJs = require("../../shared/create-shadow.js");
var _createShadowJsDefault = parcelHelpers.interopDefault(_createShadowJs);
var _effectInitJs = require("../../shared/effect-init.js");
var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
var _effectTargetJs = require("../../shared/effect-target.js");
var _effectTargetJsDefault = parcelHelpers.interopDefault(_effectTargetJs);
var _effectVirtualTransitionEndJs = require("../../shared/effect-virtual-transition-end.js");
var _effectVirtualTransitionEndJsDefault = parcelHelpers.interopDefault(_effectVirtualTransitionEndJs);
function EffectFlip(_ref) {
    let { swiper , extendParams , on  } = _ref;
    extendParams({
        flipEffect: {
            slideShadows: true,
            limitRotation: true,
            transformEl: null
        }
    });
    const setTranslate = ()=>{
        const { slides , rtlTranslate: rtl  } = swiper;
        const params = swiper.params.flipEffect;
        for(let i = 0; i < slides.length; i += 1){
            const $slideEl = slides.eq(i);
            let progress = $slideEl[0].progress;
            if (swiper.params.flipEffect.limitRotation) progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
            const offset = $slideEl[0].swiperSlideOffset;
            const rotate = -180 * progress;
            let rotateY = rotate;
            let rotateX = 0;
            let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
            let ty = 0;
            if (!swiper.isHorizontal()) {
                ty = tx;
                tx = 0;
                rotateX = -rotateY;
                rotateY = 0;
            } else if (rtl) rotateY = -rotateY;
            $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
            if (params.slideShadows) {
                // Set shadows
                let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                if (shadowBefore.length === 0) shadowBefore = _createShadowJsDefault.default(params, $slideEl, swiper.isHorizontal() ? 'left' : 'top');
                if (shadowAfter.length === 0) shadowAfter = _createShadowJsDefault.default(params, $slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
                if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
            }
            const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            const $targetEl = _effectTargetJsDefault.default(params, $slideEl);
            $targetEl.transform(transform);
        }
    };
    const setTransition = (duration)=>{
        const { transformEl  } = swiper.params.flipEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
        _effectVirtualTransitionEndJsDefault.default({
            swiper,
            duration,
            transformEl
        });
    };
    _effectInitJsDefault.default({
        effect: 'flip',
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: ()=>true
        ,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}
exports.default = EffectFlip;

},{"../../shared/create-shadow.js":"9JYAP","../../shared/effect-init.js":"5DnvG","../../shared/effect-target.js":"eKqS8","../../shared/effect-virtual-transition-end.js":"VhYFx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9JYAP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _domJs = require("./dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function createShadow(params, $slideEl, side) {
    const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}`;
    const $shadowContainer = params.transformEl ? $slideEl.find(params.transformEl) : $slideEl;
    let $shadowEl = $shadowContainer.children(`.${shadowClass}`);
    if (!$shadowEl.length) {
        $shadowEl = _domJsDefault.default(`<div class="swiper-slide-shadow${side ? `-${side}` : ''}"></div>`);
        $shadowContainer.append($shadowEl);
    }
    return $shadowEl;
}
exports.default = createShadow;

},{"./dom.js":"7pW5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9UFNU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createShadowJs = require("../../shared/create-shadow.js");
var _createShadowJsDefault = parcelHelpers.interopDefault(_createShadowJs);
var _effectInitJs = require("../../shared/effect-init.js");
var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
var _effectTargetJs = require("../../shared/effect-target.js");
var _effectTargetJsDefault = parcelHelpers.interopDefault(_effectTargetJs);
function EffectCoverflow(_ref) {
    let { swiper , extendParams , on  } = _ref;
    extendParams({
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: true,
            transformEl: null
        }
    });
    const setTranslate = ()=>{
        const { width: swiperWidth , height: swiperHeight , slides , slidesSizesGrid  } = swiper;
        const params = swiper.params.coverflowEffect;
        const isHorizontal = swiper.isHorizontal();
        const transform = swiper.translate;
        const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
        const rotate = isHorizontal ? params.rotate : -params.rotate;
        const translate = params.depth; // Each slide offset from center
        for(let i = 0, length = slides.length; i < length; i += 1){
            const $slideEl = slides.eq(i);
            const slideSize = slidesSizesGrid[i];
            const slideOffset = $slideEl[0].swiperSlideOffset;
            const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
            const offsetMultiplier = typeof params.modifier === 'function' ? params.modifier(centerOffset) : centerOffset * params.modifier;
            let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
            let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0
            let translateZ = -translate * Math.abs(offsetMultiplier);
            let stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders
            if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) stretch = parseFloat(params.stretch) / 100 * slideSize;
            let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
            let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
            let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values
            if (Math.abs(translateX) < 0.001) translateX = 0;
            if (Math.abs(translateY) < 0.001) translateY = 0;
            if (Math.abs(translateZ) < 0.001) translateZ = 0;
            if (Math.abs(rotateY) < 0.001) rotateY = 0;
            if (Math.abs(rotateX) < 0.001) rotateX = 0;
            if (Math.abs(scale) < 0.001) scale = 0;
            const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
            const $targetEl = _effectTargetJsDefault.default(params, $slideEl);
            $targetEl.transform(slideTransform);
            $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
            if (params.slideShadows) {
                // Set shadows
                let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                if ($shadowBeforeEl.length === 0) $shadowBeforeEl = _createShadowJsDefault.default(params, $slideEl, isHorizontal ? 'left' : 'top');
                if ($shadowAfterEl.length === 0) $shadowAfterEl = _createShadowJsDefault.default(params, $slideEl, isHorizontal ? 'right' : 'bottom');
                if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
            }
        }
    };
    const setTransition = (duration)=>{
        const { transformEl  } = swiper.params.coverflowEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
    };
    _effectInitJsDefault.default({
        effect: 'coverflow',
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: ()=>true
        ,
        overwriteParams: ()=>({
                watchSlidesProgress: true
            })
    });
}
exports.default = EffectCoverflow;

},{"../../shared/create-shadow.js":"9JYAP","../../shared/effect-init.js":"5DnvG","../../shared/effect-target.js":"eKqS8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6uSvC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createShadowJs = require("../../shared/create-shadow.js");
var _createShadowJsDefault = parcelHelpers.interopDefault(_createShadowJs);
var _effectInitJs = require("../../shared/effect-init.js");
var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
var _effectTargetJs = require("../../shared/effect-target.js");
var _effectTargetJsDefault = parcelHelpers.interopDefault(_effectTargetJs);
var _effectVirtualTransitionEndJs = require("../../shared/effect-virtual-transition-end.js");
var _effectVirtualTransitionEndJsDefault = parcelHelpers.interopDefault(_effectVirtualTransitionEndJs);
function EffectCreative(_ref) {
    let { swiper , extendParams , on  } = _ref;
    extendParams({
        creativeEffect: {
            transformEl: null,
            limitProgress: 1,
            shadowPerProgress: false,
            progressMultiplier: 1,
            perspective: true,
            prev: {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                opacity: 1,
                scale: 1
            },
            next: {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                opacity: 1,
                scale: 1
            }
        }
    });
    const getTranslateValue = (value)=>{
        if (typeof value === 'string') return value;
        return `${value}px`;
    };
    const setTranslate = ()=>{
        const { slides , $wrapperEl , slidesSizesGrid  } = swiper;
        const params = swiper.params.creativeEffect;
        const { progressMultiplier: multiplier  } = params;
        const isCenteredSlides = swiper.params.centeredSlides;
        if (isCenteredSlides) {
            const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
            $wrapperEl.transform(`translateX(calc(50% - ${margin}px))`);
        }
        for(let i = 0; i < slides.length; i += 1){
            const $slideEl = slides.eq(i);
            const slideProgress = $slideEl[0].progress;
            const progress = Math.min(Math.max($slideEl[0].progress, -params.limitProgress), params.limitProgress);
            let originalProgress = progress;
            if (!isCenteredSlides) originalProgress = Math.min(Math.max($slideEl[0].originalProgress, -params.limitProgress), params.limitProgress);
            const offset = $slideEl[0].swiperSlideOffset;
            const t = [
                swiper.params.cssMode ? -offset - swiper.translate : -offset,
                0,
                0
            ];
            const r = [
                0,
                0,
                0
            ];
            let custom = false;
            if (!swiper.isHorizontal()) {
                t[1] = t[0];
                t[0] = 0;
            }
            let data = {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                scale: 1,
                opacity: 1
            };
            if (progress < 0) {
                data = params.next;
                custom = true;
            } else if (progress > 0) {
                data = params.prev;
                custom = true;
            } // set translate
            t.forEach((value, index)=>{
                t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
            }); // set rotates
            r.forEach((value, index)=>{
                r[index] = data.rotate[index] * Math.abs(progress * multiplier);
            });
            $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
            const translateString = t.join(', ');
            const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
            const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
            const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
            const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`; // Set shadows
            if (custom && data.shadow || !custom) {
                let $shadowEl = $slideEl.children('.swiper-slide-shadow');
                if ($shadowEl.length === 0 && data.shadow) $shadowEl = _createShadowJsDefault.default(params, $slideEl);
                if ($shadowEl.length) {
                    const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
                    $shadowEl[0].style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
                }
            }
            const $targetEl = _effectTargetJsDefault.default(params, $slideEl);
            $targetEl.transform(transform).css({
                opacity: opacityString
            });
            if (data.origin) $targetEl.css('transform-origin', data.origin);
        }
    };
    const setTransition = (duration)=>{
        const { transformEl  } = swiper.params.creativeEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
        _effectVirtualTransitionEndJsDefault.default({
            swiper,
            duration,
            transformEl,
            allSlides: true
        });
    };
    _effectInitJsDefault.default({
        effect: 'creative',
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: ()=>swiper.params.creativeEffect.perspective
        ,
        overwriteParams: ()=>({
                watchSlidesProgress: true,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}
exports.default = EffectCreative;

},{"../../shared/create-shadow.js":"9JYAP","../../shared/effect-init.js":"5DnvG","../../shared/effect-target.js":"eKqS8","../../shared/effect-virtual-transition-end.js":"VhYFx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9saRD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createShadowJs = require("../../shared/create-shadow.js");
var _createShadowJsDefault = parcelHelpers.interopDefault(_createShadowJs);
var _effectInitJs = require("../../shared/effect-init.js");
var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
var _effectTargetJs = require("../../shared/effect-target.js");
var _effectTargetJsDefault = parcelHelpers.interopDefault(_effectTargetJs);
var _effectVirtualTransitionEndJs = require("../../shared/effect-virtual-transition-end.js");
var _effectVirtualTransitionEndJsDefault = parcelHelpers.interopDefault(_effectVirtualTransitionEndJs);
function EffectCards(_ref) {
    let { swiper , extendParams , on  } = _ref;
    extendParams({
        cardsEffect: {
            slideShadows: true,
            transformEl: null
        }
    });
    const setTranslate = ()=>{
        const { slides , activeIndex  } = swiper;
        const params = swiper.params.cardsEffect;
        const { startTranslate , isTouched  } = swiper.touchEventsData;
        const currentTranslate = swiper.translate;
        for(let i = 0; i < slides.length; i += 1){
            const $slideEl = slides.eq(i);
            const slideProgress = $slideEl[0].progress;
            const progress = Math.min(Math.max(slideProgress, -4), 4);
            let offset = $slideEl[0].swiperSlideOffset;
            if (swiper.params.centeredSlides && !swiper.params.cssMode) swiper.$wrapperEl.transform(`translateX(${swiper.minTranslate()}px)`);
            if (swiper.params.centeredSlides && swiper.params.cssMode) offset -= slides[0].swiperSlideOffset;
            let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
            let tY = 0;
            const tZ = -100 * Math.abs(progress);
            let scale = 1;
            let rotate = -2 * progress;
            let tXAdd = 8 - Math.abs(progress) * 0.75;
            const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
            const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
            const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
            if (isSwipeToNext || isSwipeToPrev) {
                const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
                rotate += -28 * progress * subProgress;
                scale += -0.5 * subProgress;
                tXAdd += 96 * subProgress;
                tY = `${-25 * subProgress * Math.abs(progress)}%`;
            }
            if (progress < 0) // next
            tX = `calc(${tX}px + (${tXAdd * Math.abs(progress)}%))`;
            else if (progress > 0) // prev
            tX = `calc(${tX}px + (-${tXAdd * Math.abs(progress)}%))`;
            else tX = `${tX}px`;
            if (!swiper.isHorizontal()) {
                const prevY = tY;
                tY = tX;
                tX = prevY;
            }
            const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
            const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${rotate}deg)
        scale(${scaleString})
      `;
            if (params.slideShadows) {
                // Set shadows
                let $shadowEl = $slideEl.find('.swiper-slide-shadow');
                if ($shadowEl.length === 0) $shadowEl = _createShadowJsDefault.default(params, $slideEl);
                if ($shadowEl.length) $shadowEl[0].style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
            }
            $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
            const $targetEl = _effectTargetJsDefault.default(params, $slideEl);
            $targetEl.transform(transform);
        }
    };
    const setTransition = (duration)=>{
        const { transformEl  } = swiper.params.cardsEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
        _effectVirtualTransitionEndJsDefault.default({
            swiper,
            duration,
            transformEl
        });
    };
    _effectInitJsDefault.default({
        effect: 'cards',
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: ()=>true
        ,
        overwriteParams: ()=>({
                watchSlidesProgress: true,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}
exports.default = EffectCards;

},{"../../shared/create-shadow.js":"9JYAP","../../shared/effect-init.js":"5DnvG","../../shared/effect-target.js":"eKqS8","../../shared/effect-virtual-transition-end.js":"VhYFx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6LohX":[function(require,module,exports) {
const menu = require('./menu.js');
const about = require('./about.js');
const projects = require('./projects.js');
module.exports = {
    menu: menu,
    about: about,
    projects: projects
};

},{"./menu.js":"cAsPv","./about.js":"csC5d","./projects.js":"eXGfZ"}],"cAsPv":[function(require,module,exports) {
module.exports = [
    {
        title: 'Что делаем',
        link: 'about'
    },
    {
        title: 'Проекты',
        link: 'projects'
    },
    {
        title: 'Контакты',
        link: 'contacts'
    }, 
];

},{}],"csC5d":[function(require,module,exports) {
module.exports = {
    list: [
        'Запустим ваш стартап методом гибких итераций.',
        'Обучим самым эффективным подходам и методологиям, тонкостям разработки софта, а также поможем научиться мыслить в формате MVP.',
        'Поможем рассчитать объём каждой итерации, спроектировать гибкую архитектуру, разработаем дизайн и воплотим ваши смелые идеи в жизнь.',
        'Поможем генерировать и проверять продуктовые гипотезы, управлять бэклогом задач и продуктивно управлять командой разработки.'
    ]
};

},{}],"eXGfZ":[function(require,module,exports) {
module.exports = [
    {
        title: 'СберОбразование Маркетплейс',
        text: `<p>Маркетплейс СберОбразование — образовательная платформа для носителей знаний двух целевых аудиторий: для тех, кто хочет делиться знаниями и зарабатывать на этом; для тех, кто хочет узнавать новое.</p>
        <p>Представляет собой маркетплейс, где находят друг друга различные компании и предприниматели - авторы курсов, заинтересованные в привлечении аудитории, и пользова тели, желающие пройти обучение.</p>`,
        stack: [
            'Front WEB: React, Typescript, Effector, Gqless, Tailwind Backend: Go, бизнес-процессы в Camunda, identity provider: Keycloak',
            'Databases: Hasura (GraphQL), PostgreSQL',
            'Мобильные приложения: IOS - swift, Android - kotlin'
        ],
        year: '2020'
    },
    {
        title: 'СберОбразование Маркетплейс. Личный кабинет',
        text: `<p>ЛК поставщика — раздел Маркетплейса, предназначенный для тех, кто хочет размещать на нем свои образовательные материалы.</p>
<p>В этом разделе можно создавать курс, управлять данными своей школы и ее сотрудников, настраивать эквайринг, знакомиться с аналитикой по процессу обучения.</p>`,
        stack: [
            'React, Typescript, Effector, Gqless, Tailwind, Camunda, Hasura (GraphQL)'
        ],
        year: '2020'
    },
    {
        title: 'SBO AI Elementary',
        text: `<p>
Мобильное приложение для обучения детей 5-7 лет основам понимания искусственного интеллекта и программирования в игровой форме.</p> 
<p>Версия для ребенка: планеты с играми и библиотека контента с видео, мини-играми, тренажерами.</p>
<p>Версия для родителя: личный кабинет, прогресс детей в обучении и аналитика по обретенным навыкам.</p>`,
        stack: [
            'iOS — Swift, Combine, MVVM, GraphQL, Apollo, SwiftPM.',
            'Android — Kotlin, Coroutines, LiveData, MVVM, Dagger Hilt, Apollo, Hasura (GraphQL), Retrofit, OkHttp3'
        ],
        year: '2020'
    },
    {
        title: 'СберКласс. Dashboard',
        text: `<p>СберКласс — это современная цифровая платформа для школы. Помогает учителю персонализировать обучающие материалы, развивать у детей актуальные навыки, автоматизировать рутину и вовлечь учеников в образовательный процесс.</p>
<p>Dashboard — первая страница, на которую попадают пользователи после авторизации, она является ключевым элементом взаимодействия пользователя с платформой.</p>`,
        stack: [
            'React, Typescript, Effector, Gqless, GraphQL, Apollo, Tailwind; Java, Spring, MongoDB, PostgreSQL Docker/Kubernetes'
        ],
        year: '2020'
    },
    {
        title: 'СберКласс. Конструктор контента (Web-версия)',
        text: `<p>СберКласс — это современная цифровая платформа для школы. Помогает учителю построить персонализированную образовательную траекторию для ребёнка, развить у него актуальные навыки, автоматизировать рутину и вовлечь учеников в образовательный процесс.</p>
<p>Конструктор контента предназначен для создания учителем заданий для учеников, которые они выполняют в Плеере контента.</p>`,
        stack: [
            'React, Typescript, Effector, Gqless, GraphQL, Apollo, Tailwind; Java, Spring, MongoDB, PostgreSQL Docker/Kubernetes.'
        ],
        year: '2020'
    },
    {
        title: 'СберКласс. Мобильная версия',
        text: `<p>СберКласс — это современная цифровая платформа для школы. Помогает учителю персонализировать обучающие материалы, развивать у детей актуальные навыки, автоматизировать рутину и вовлечь учеников в образовательный процесс.</p>
<p>Мобильное приложение для работы с платформой.</p>`,
        stack: [
            'React Native'
        ],
        year: '2020'
    },
    {
        title: 'Petshop',
        text: `<p>Мобильное eCommerce приложение для крупнейшего магазина зоотоваров в России. В нем реализован удобный личный кабинет для совершения покупок, записи питомцев в ветеринарную клинику от Petshop, а также для онлайн-заказа услуг по выгулу и грумингу.</p>`,
        stack: [
            'Kotlin, Swift, Firebase'
        ],
        year: '2020'
    },
    {
        title: 'LIS',
        text: `<p>ПО для настройки и управления потоками работ и документооборотом в лабораториях. Данный софт оптимизирует процесс сбора, анализа и возврата лабораторных данных, а также отчетности по ним.</p>`,
        stack: [
            'Java+spring'
        ],
        year: '2020'
    }
];

},{}],"bnzgd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _gsap = require("gsap");
var _events = require("events");
var _utils = require("./utils");
// Calculate the viewport size
let winsize = _utils.calcWinsize();
window.addEventListener('resize', ()=>winsize = _utils.calcWinsize()
);
// Track the mouse position
let mousepos = {
    x: 0,
    y: 0
};
window.addEventListener('mousemove', (ev)=>mousepos = _utils.getMousePos(ev)
);
class ButtonCtrl extends _events.EventEmitter {
    constructor(el){
        super();
        // DOM elements
        // el: main button
        // text: inner text element
        this.DOM = {
            el: el
        };
        this.DOM.text = this.DOM.el.querySelector('.button__text');
        this.DOM.textinner = this.DOM.el.querySelector('.button__text-inner');
        this.DOM.filler = this.DOM.el.querySelector('.button__filler');
        // amounts the button will translate
        this.renderedStyles = {
            tx: {
                previous: 0,
                current: 0,
                amt: 0.1
            },
            ty: {
                previous: 0,
                current: 0,
                amt: 0.1
            }
        };
        // button state (hover)
        this.state = {
            hover: false
        };
        // calculate size/position
        this.calculateSizePosition();
        // init events
        this.initEvents();
        // loop fn
        requestAnimationFrame(()=>this.render()
        );
    }
    calculateSizePosition() {
        // size/position
        this.rect = this.DOM.el.getBoundingClientRect();
        // the movement will take place when the distance from the mouse to the center of the button is lower than this value
        this.distanceToTrigger = this.rect.width * 0.7;
    }
    initEvents() {
        this.onResize = ()=>this.calculateSizePosition()
        ;
        window.addEventListener('resize', this.onResize);
    }
    render() {
        // calculate the distance from the mouse to the center of the button
        const distanceMouseButton = _utils.distance(mousepos.x + window.scrollX, mousepos.y + window.scrollY, this.rect.left + this.rect.width / 2, this.rect.top + this.rect.height / 2);
        // new values for the translations
        let x = 0;
        let y = 0;
        if (distanceMouseButton < this.distanceToTrigger) {
            if (!this.state.hover) this.enter();
            x = (mousepos.x + window.scrollX - (this.rect.left + this.rect.width / 2)) * 0.3;
            y = (mousepos.y + window.scrollY - (this.rect.top + this.rect.height / 2)) * 0.3;
        } else if (this.state.hover) this.leave();
        this.renderedStyles['tx'].current = x;
        this.renderedStyles['ty'].current = y;
        for(const key in this.renderedStyles)this.renderedStyles[key].previous = _utils.lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt);
        this.DOM.el.style.transform = `translate3d(${this.renderedStyles['tx'].previous}px, ${this.renderedStyles['ty'].previous}px, 0)`;
        this.DOM.text.style.transform = `translate3d(${-this.renderedStyles['tx'].previous * 0.6}px, ${-this.renderedStyles['ty'].previous * 0.6}px, 0)`;
        requestAnimationFrame(()=>this.render()
        );
    }
    enter() {
        this.emit('enter');
        this.state.hover = true;
        this.DOM.el.classList.add('button--hover');
        document.body.classList.add('active');
        _gsap.gsap.killTweensOf(this.DOM.filler);
        _gsap.gsap.killTweensOf(this.DOM.textinner);
        _gsap.gsap.timeline().to(this.DOM.filler, 0.5, {
            ease: 'Power3.easeOut',
            startAt: {
                y: '75%'
            },
            y: '0%'
        }).to(this.DOM.textinner, 0.1, {
            ease: 'Power3.easeOut',
            opacity: 0,
            y: '-10%'
        }, 0).to(this.DOM.textinner, 0.25, {
            ease: 'Power3.easeOut',
            opacity: 1,
            startAt: {
                y: '30%',
                opacity: 1
            },
            y: '0%'
        }, 0.1);
    }
    leave() {
        this.emit('leave');
        this.state.hover = false;
        this.DOM.el.classList.remove('button--hover');
        document.body.classList.remove('active');
        _gsap.gsap.killTweensOf(this.DOM.filler);
        _gsap.gsap.killTweensOf(this.DOM.textinner);
        _gsap.gsap.timeline().to(this.DOM.filler, 0.4, {
            ease: 'Power3.easeOut',
            y: '-75%'
        }).to(this.DOM.textinner, 0.1, {
            ease: 'Power3.easeOut',
            opacity: 0,
            y: '10%'
        }, 0).to(this.DOM.textinner, 0.25, {
            ease: 'Power3.easeOut',
            opacity: 1,
            startAt: {
                y: '-30%',
                opacity: 1
            },
            y: '0%'
        }, 0.1);
    }
}
exports.default = ButtonCtrl;

},{"gsap":"fPSuC","events":"1VQLm","./utils":"72Dku","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1VQLm":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';
var R = typeof Reflect === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
};
var ReflectOwnKeys;
if (R && typeof R.ownKeys === 'function') ReflectOwnKeys = R.ownKeys;
else if (Object.getOwnPropertySymbols) ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
};
else ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
};
function ProcessEmitWarning(warning) {
    if (console && console.warn) console.warn(warning);
}
var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
    return value !== value;
};
function EventEmitter() {
    EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;
// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;
// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;
function checkListener(listener) {
    if (typeof listener !== 'function') throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
}
Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
    enumerable: true,
    get: function() {
        return defaultMaxListeners;
    },
    set: function(arg) {
        if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
        defaultMaxListeners = arg;
    }
});
EventEmitter.init = function() {
    if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
        this._events = Object.create(null);
        this._eventsCount = 0;
    }
    this._maxListeners = this._maxListeners || undefined;
};
// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
    this._maxListeners = n;
    return this;
};
function _getMaxListeners(that) {
    if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
    return that._maxListeners;
}
EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return _getMaxListeners(this);
};
EventEmitter.prototype.emit = function emit(type) {
    var args = [];
    for(var i = 1; i < arguments.length; i++)args.push(arguments[i]);
    var doError = type === 'error';
    var events = this._events;
    if (events !== undefined) doError = doError && events.error === undefined;
    else if (!doError) return false;
    // If there is no 'error' event listener then throw.
    if (doError) {
        var er;
        if (args.length > 0) er = args[0];
        if (er instanceof Error) // Note: The comments on the `throw` lines are intentional, they show
        // up in Node's output if this results in an unhandled exception.
        throw er; // Unhandled 'error' event
        // At least give some kind of context to the user
        var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
        err.context = er;
        throw err; // Unhandled 'error' event
    }
    var handler = events[type];
    if (handler === undefined) return false;
    if (typeof handler === 'function') ReflectApply(handler, this, args);
    else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for(var i = 0; i < len; ++i)ReflectApply(listeners[i], this, args);
    }
    return true;
};
function _addListener(target, type, listener, prepend) {
    var m;
    var events;
    var existing;
    checkListener(listener);
    events = target._events;
    if (events === undefined) {
        events = target._events = Object.create(null);
        target._eventsCount = 0;
    } else {
        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (events.newListener !== undefined) {
            target.emit('newListener', type, listener.listener ? listener.listener : listener);
            // Re-assign `events` because a newListener handler could have caused the
            // this._events to be assigned to a new object
            events = target._events;
        }
        existing = events[type];
    }
    if (existing === undefined) {
        // Optimize the case of one listener. Don't need the extra array object.
        existing = events[type] = listener;
        ++target._eventsCount;
    } else {
        if (typeof existing === 'function') // Adding the second element, need to change to array.
        existing = events[type] = prepend ? [
            listener,
            existing
        ] : [
            existing,
            listener
        ];
        else if (prepend) existing.unshift(listener);
        else existing.push(listener);
        // Check for listener leak
        m = _getMaxListeners(target);
        if (m > 0 && existing.length > m && !existing.warned) {
            existing.warned = true;
            // No error code for this since it is a Warning
            // eslint-disable-next-line no-restricted-syntax
            var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
            w.name = 'MaxListenersExceededWarning';
            w.emitter = target;
            w.type = type;
            w.count = existing.length;
            ProcessEmitWarning(w);
        }
    }
    return target;
}
EventEmitter.prototype.addListener = function addListener(type, listener) {
    return _addListener(this, type, listener, false);
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.prependListener = function prependListener(type, listener) {
    return _addListener(this, type, listener, true);
};
function onceWrapper() {
    if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0) return this.listener.call(this.target);
        return this.listener.apply(this.target, arguments);
    }
}
function _onceWrap(target, type, listener) {
    var state = {
        fired: false,
        wrapFn: undefined,
        target: target,
        type: type,
        listener: listener
    };
    var wrapped = onceWrapper.bind(state);
    wrapped.listener = listener;
    state.wrapFn = wrapped;
    return wrapped;
}
EventEmitter.prototype.once = function once(type, listener) {
    checkListener(listener);
    this.on(type, _onceWrap(this, type, listener));
    return this;
};
EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
    checkListener(listener);
    this.prependListener(type, _onceWrap(this, type, listener));
    return this;
};
// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener = function removeListener(type, listener) {
    var list, events, position, i, originalListener;
    checkListener(listener);
    events = this._events;
    if (events === undefined) return this;
    list = events[type];
    if (list === undefined) return this;
    if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0) this._events = Object.create(null);
        else {
            delete events[type];
            if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
        }
    } else if (typeof list !== 'function') {
        position = -1;
        for(i = list.length - 1; i >= 0; i--)if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
        }
        if (position < 0) return this;
        if (position === 0) list.shift();
        else spliceOne(list, position);
        if (list.length === 1) events[type] = list[0];
        if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
    }
    return this;
};
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
    var listeners, events, i;
    events = this._events;
    if (events === undefined) return this;
    // not listening for removeListener, no need to emit
    if (events.removeListener === undefined) {
        if (arguments.length === 0) {
            this._events = Object.create(null);
            this._eventsCount = 0;
        } else if (events[type] !== undefined) {
            if (--this._eventsCount === 0) this._events = Object.create(null);
            else delete events[type];
        }
        return this;
    }
    // emit removeListener for all listeners on all events
    if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for(i = 0; i < keys.length; ++i){
            key = keys[i];
            if (key === 'removeListener') continue;
            this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
    }
    listeners = events[type];
    if (typeof listeners === 'function') this.removeListener(type, listeners);
    else if (listeners !== undefined) // LIFO order
    for(i = listeners.length - 1; i >= 0; i--)this.removeListener(type, listeners[i]);
    return this;
};
function _listeners(target, type, unwrap) {
    var events = target._events;
    if (events === undefined) return [];
    var evlistener = events[type];
    if (evlistener === undefined) return [];
    if (typeof evlistener === 'function') return unwrap ? [
        evlistener.listener || evlistener
    ] : [
        evlistener
    ];
    return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}
EventEmitter.prototype.listeners = function listeners(type) {
    return _listeners(this, type, true);
};
EventEmitter.prototype.rawListeners = function rawListeners(type) {
    return _listeners(this, type, false);
};
EventEmitter.listenerCount = function(emitter, type) {
    if (typeof emitter.listenerCount === 'function') return emitter.listenerCount(type);
    else return listenerCount.call(emitter, type);
};
EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
    var events = this._events;
    if (events !== undefined) {
        var evlistener = events[type];
        if (typeof evlistener === 'function') return 1;
        else if (evlistener !== undefined) return evlistener.length;
    }
    return 0;
}
EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};
function arrayClone(arr, n) {
    var copy = new Array(n);
    for(var i = 0; i < n; ++i)copy[i] = arr[i];
    return copy;
}
function spliceOne(list, index) {
    for(; index + 1 < list.length; index++)list[index] = list[index + 1];
    list.pop();
}
function unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for(var i = 0; i < ret.length; ++i)ret[i] = arr[i].listener || arr[i];
    return ret;
}
function once(emitter, name) {
    return new Promise(function(resolve, reject) {
        function errorListener(err) {
            emitter.removeListener(name, resolver);
            reject(err);
        }
        function resolver() {
            if (typeof emitter.removeListener === 'function') emitter.removeListener('error', errorListener);
            resolve([].slice.call(arguments));
        }
        eventTargetAgnosticAddListener(emitter, name, resolver, {
            once: true
        });
        if (name !== 'error') addErrorHandlerIfEventEmitter(emitter, errorListener, {
            once: true
        });
    });
}
function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
    if (typeof emitter.on === 'function') eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
}
function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
    if (typeof emitter.on === 'function') {
        if (flags.once) emitter.once(name, listener);
        else emitter.on(name, listener);
    } else if (typeof emitter.addEventListener === 'function') // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
        // IE does not have builtin `{ once: true }` support so we
        // have to do it manually.
        if (flags.once) emitter.removeEventListener(name, wrapListener);
        listener(arg);
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
}

},{}]},["g9TDx","1SICI"], "1SICI", "parcelRequire6b4d")

//# sourceMappingURL=index.18dbc454.js.map
