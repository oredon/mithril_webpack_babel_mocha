/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	var _MyComponent = __webpack_require__(2);
	
	var _MyComponent2 = _interopRequireDefault(_MyComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_mithril2.default.mount(document.getElementById("root"), _MyComponent2.default);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {;(function (global, factory) { // eslint-disable-line
		"use strict"
		/* eslint-disable no-undef */
		var m = factory(global)
		if (typeof module === "object" && module != null && module.exports) {
			module.exports = m
		} else if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () { return m }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
		} else {
			global.m = m
		}
		/* eslint-enable no-undef */
	})(typeof window !== "undefined" ? window : this, function (global, undefined) { // eslint-disable-line
		"use strict"
	
		m.version = function () {
			return "v0.2.3"
		}
	
		var hasOwn = {}.hasOwnProperty
		var type = {}.toString
	
		function isFunction(object) {
			return typeof object === "function"
		}
	
		function isObject(object) {
			return type.call(object) === "[object Object]"
		}
	
		function isString(object) {
			return type.call(object) === "[object String]"
		}
	
		var isArray = Array.isArray || function (object) {
			return type.call(object) === "[object Array]"
		}
	
		function noop() {}
	
		var voidElements = {
			AREA: 1,
			BASE: 1,
			BR: 1,
			COL: 1,
			COMMAND: 1,
			EMBED: 1,
			HR: 1,
			IMG: 1,
			INPUT: 1,
			KEYGEN: 1,
			LINK: 1,
			META: 1,
			PARAM: 1,
			SOURCE: 1,
			TRACK: 1,
			WBR: 1
		}
	
		// caching commonly used variables
		var $document, $location, $requestAnimationFrame, $cancelAnimationFrame
	
		// self invoking function needed because of the way mocks work
		function initialize(mock) {
			$document = mock.document
			$location = mock.location
			$cancelAnimationFrame = mock.cancelAnimationFrame || mock.clearTimeout
			$requestAnimationFrame = mock.requestAnimationFrame || mock.setTimeout
		}
	
		// testing API
		m.deps = function (mock) {
			initialize(global = mock || window)
			return global
		}
	
		m.deps(global)
	
		/**
		 * @typedef {String} Tag
		 * A string that looks like -> div.classname#id[param=one][param2=two]
		 * Which describes a DOM node
		 */
	
		function parseTagAttrs(cell, tag) {
			var classes = []
			var parser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[.+?\])/g
			var match
	
			while ((match = parser.exec(tag))) {
				if (match[1] === "" && match[2]) {
					cell.tag = match[2]
				} else if (match[1] === "#") {
					cell.attrs.id = match[2]
				} else if (match[1] === ".") {
					classes.push(match[2])
				} else if (match[3][0] === "[") {
					var pair = /\[(.+?)(?:=("|'|)(.*?)\2)?\]/.exec(match[3])
					cell.attrs[pair[1]] = pair[3] || ""
				}
			}
	
			return classes
		}
	
		function getVirtualChildren(args, hasAttrs) {
			var children = hasAttrs ? args.slice(1) : args
	
			if (children.length === 1 && isArray(children[0])) {
				return children[0]
			} else {
				return children
			}
		}
	
		function assignAttrs(target, attrs, classes) {
			var classAttr = "class" in attrs ? "class" : "className"
	
			for (var attrName in attrs) {
				if (hasOwn.call(attrs, attrName)) {
					if (attrName === classAttr &&
							attrs[attrName] != null &&
							attrs[attrName] !== "") {
						classes.push(attrs[attrName])
						// create key in correct iteration order
						target[attrName] = ""
					} else {
						target[attrName] = attrs[attrName]
					}
				}
			}
	
			if (classes.length) target[classAttr] = classes.join(" ")
		}
	
		/**
		 *
		 * @param {Tag} The DOM node tag
		 * @param {Object=[]} optional key-value pairs to be mapped to DOM attrs
		 * @param {...mNode=[]} Zero or more Mithril child nodes. Can be an array,
		 *                      or splat (optional)
		 */
		function m(tag, pairs) {
			var args = []
	
			for (var i = 1, length = arguments.length; i < length; i++) {
				args[i - 1] = arguments[i]
			}
	
			if (isObject(tag)) return parameterize(tag, args)
	
			if (!isString(tag)) {
				throw new Error("selector in m(selector, attrs, children) should " +
					"be a string")
			}
	
			var hasAttrs = pairs != null && isObject(pairs) &&
				!("tag" in pairs || "view" in pairs || "subtree" in pairs)
	
			var attrs = hasAttrs ? pairs : {}
			var cell = {
				tag: "div",
				attrs: {},
				children: getVirtualChildren(args, hasAttrs)
			}
	
			assignAttrs(cell.attrs, attrs, parseTagAttrs(cell, tag))
			return cell
		}
	
		function forEach(list, f) {
			for (var i = 0; i < list.length && !f(list[i], i++);) {
				// function called in condition
			}
		}
	
		function forKeys(list, f) {
			forEach(list, function (attrs, i) {
				return (attrs = attrs && attrs.attrs) &&
					attrs.key != null &&
					f(attrs, i)
			})
		}
		// This function was causing deopts in Chrome.
		function dataToString(data) {
			// data.toString() might throw or return null if data is the return
			// value of Console.log in some versions of Firefox (behavior depends on
			// version)
			try {
				if (data != null && data.toString() != null) return data
			} catch (e) {
				// silently ignore errors
			}
			return ""
		}
	
		// This function was causing deopts in Chrome.
		function injectTextNode(parentElement, first, index, data) {
			try {
				insertNode(parentElement, first, index)
				first.nodeValue = data
			} catch (e) {
				// IE erroneously throws error when appending an empty text node
				// after a null
			}
		}
	
		function flatten(list) {
			// recursively flatten array
			for (var i = 0; i < list.length; i++) {
				if (isArray(list[i])) {
					list = list.concat.apply([], list)
					// check current index again and flatten until there are no more
					// nested arrays at that index
					i--
				}
			}
			return list
		}
	
		function insertNode(parentElement, node, index) {
			parentElement.insertBefore(node,
				parentElement.childNodes[index] || null)
		}
	
		var DELETION = 1
		var INSERTION = 2
		var MOVE = 3
	
		function handleKeysDiffer(data, existing, cached, parentElement) {
			forKeys(data, function (key, i) {
				existing[key = key.key] = existing[key] ? {
					action: MOVE,
					index: i,
					from: existing[key].index,
					element: cached.nodes[existing[key].index] ||
						$document.createElement("div")
				} : {action: INSERTION, index: i}
			})
	
			var actions = []
			for (var prop in existing) {
				if (hasOwn.call(existing, prop)) {
					actions.push(existing[prop])
				}
			}
	
			var changes = actions.sort(sortChanges)
			var newCached = new Array(cached.length)
	
			newCached.nodes = cached.nodes.slice()
	
			forEach(changes, function (change) {
				var index = change.index
				if (change.action === DELETION) {
					clear(cached[index].nodes, cached[index])
					newCached.splice(index, 1)
				}
				if (change.action === INSERTION) {
					var dummy = $document.createElement("div")
					dummy.key = data[index].attrs.key
					insertNode(parentElement, dummy, index)
					newCached.splice(index, 0, {
						attrs: {key: data[index].attrs.key},
						nodes: [dummy]
					})
					newCached.nodes[index] = dummy
				}
	
				if (change.action === MOVE) {
					var changeElement = change.element
					var maybeChanged = parentElement.childNodes[index]
					if (maybeChanged !== changeElement && changeElement !== null) {
						parentElement.insertBefore(changeElement,
							maybeChanged || null)
					}
					newCached[index] = cached[change.from]
					newCached.nodes[index] = changeElement
				}
			})
	
			return newCached
		}
	
		function diffKeys(data, cached, existing, parentElement) {
			var keysDiffer = data.length !== cached.length
	
			if (!keysDiffer) {
				forKeys(data, function (attrs, i) {
					var cachedCell = cached[i]
					return keysDiffer = cachedCell &&
						cachedCell.attrs &&
						cachedCell.attrs.key !== attrs.key
				})
			}
	
			if (keysDiffer) {
				return handleKeysDiffer(data, existing, cached, parentElement)
			} else {
				return cached
			}
		}
	
		function diffArray(data, cached, nodes) {
			// diff the array itself
	
			// update the list of DOM nodes by collecting the nodes from each item
			forEach(data, function (_, i) {
				if (cached[i] != null) nodes.push.apply(nodes, cached[i].nodes)
			})
			// remove items from the end of the array if the new array is shorter
			// than the old one. if errors ever happen here, the issue is most
			// likely a bug in the construction of the `cached` data structure
			// somewhere earlier in the program
			forEach(cached.nodes, function (node, i) {
				if (node.parentNode != null && nodes.indexOf(node) < 0) {
					clear([node], [cached[i]])
				}
			})
	
			if (data.length < cached.length) cached.length = data.length
			cached.nodes = nodes
		}
	
		function buildArrayKeys(data) {
			var guid = 0
			forKeys(data, function () {
				forEach(data, function (attrs) {
					if ((attrs = attrs && attrs.attrs) && attrs.key == null) {
						attrs.key = "__mithril__" + guid++
					}
				})
				return 1
			})
		}
	
		function isDifferentEnough(data, cached, dataAttrKeys) {
			if (data.tag !== cached.tag) return true
	
			if (dataAttrKeys.sort().join() !==
					Object.keys(cached.attrs).sort().join()) {
				return true
			}
	
			if (data.attrs.id !== cached.attrs.id) {
				return true
			}
	
			if (data.attrs.key !== cached.attrs.key) {
				return true
			}
	
			if (m.redraw.strategy() === "all") {
				return !cached.configContext || cached.configContext.retain !== true
			}
	
			if (m.redraw.strategy() === "diff") {
				return cached.configContext && cached.configContext.retain === false
			}
	
			return false
		}
	
		function maybeRecreateObject(data, cached, dataAttrKeys) {
			// if an element is different enough from the one in cache, recreate it
			if (isDifferentEnough(data, cached, dataAttrKeys)) {
				if (cached.nodes.length) clear(cached.nodes)
	
				if (cached.configContext &&
						isFunction(cached.configContext.onunload)) {
					cached.configContext.onunload()
				}
	
				if (cached.controllers) {
					forEach(cached.controllers, function (controller) {
						if (controller.onunload) {
							controller.onunload({preventDefault: noop})
						}
					})
				}
			}
		}
	
		function getObjectNamespace(data, namespace) {
			if (data.attrs.xmlns) return data.attrs.xmlns
			if (data.tag === "svg") return "http://www.w3.org/2000/svg"
			if (data.tag === "math") return "http://www.w3.org/1998/Math/MathML"
			return namespace
		}
	
		var pendingRequests = 0
		m.startComputation = function () { pendingRequests++ }
		m.endComputation = function () {
			if (pendingRequests > 1) {
				pendingRequests--
			} else {
				pendingRequests = 0
				m.redraw()
			}
		}
	
		function unloadCachedControllers(cached, views, controllers) {
			if (controllers.length) {
				cached.views = views
				cached.controllers = controllers
				forEach(controllers, function (controller) {
					if (controller.onunload && controller.onunload.$old) {
						controller.onunload = controller.onunload.$old
					}
	
					if (pendingRequests && controller.onunload) {
						var onunload = controller.onunload
						controller.onunload = noop
						controller.onunload.$old = onunload
					}
				})
			}
		}
	
		function scheduleConfigsToBeCalled(configs, data, node, isNew, cached) {
			// schedule configs to be called. They are called after `build` finishes
			// running
			if (isFunction(data.attrs.config)) {
				var context = cached.configContext = cached.configContext || {}
	
				// bind
				configs.push(function () {
					return data.attrs.config.call(data, node, !isNew, context,
						cached)
				})
			}
		}
	
		function buildUpdatedNode(
			cached,
			data,
			editable,
			hasKeys,
			namespace,
			views,
			configs,
			controllers
		) {
			var node = cached.nodes[0]
	
			if (hasKeys) {
				setAttributes(node, data.tag, data.attrs, cached.attrs, namespace)
			}
	
			cached.children = build(
				node,
				data.tag,
				undefined,
				undefined,
				data.children,
				cached.children,
				false,
				0,
				data.attrs.contenteditable ? node : editable,
				namespace,
				configs
			)
	
			cached.nodes.intact = true
	
			if (controllers.length) {
				cached.views = views
				cached.controllers = controllers
			}
	
			return node
		}
	
		function handleNonexistentNodes(data, parentElement, index) {
			var nodes
			if (data.$trusted) {
				nodes = injectHTML(parentElement, index, data)
			} else {
				nodes = [$document.createTextNode(data)]
				if (!(parentElement.nodeName in voidElements)) {
					insertNode(parentElement, nodes[0], index)
				}
			}
	
			var cached
	
			if (typeof data === "string" ||
					typeof data === "number" ||
					typeof data === "boolean") {
				cached = new data.constructor(data)
			} else {
				cached = data
			}
	
			cached.nodes = nodes
			return cached
		}
	
		function reattachNodes(
			data,
			cached,
			parentElement,
			editable,
			index,
			parentTag
		) {
			var nodes = cached.nodes
			if (!editable || editable !== $document.activeElement) {
				if (data.$trusted) {
					clear(nodes, cached)
					nodes = injectHTML(parentElement, index, data)
				} else if (parentTag === "textarea") {
					// <textarea> uses `value` instead of `nodeValue`.
					parentElement.value = data
				} else if (editable) {
					// contenteditable nodes use `innerHTML` instead of `nodeValue`.
					editable.innerHTML = data
				} else {
					// was a trusted string
					if (nodes[0].nodeType === 1 || nodes.length > 1 ||
							(nodes[0].nodeValue.trim &&
								!nodes[0].nodeValue.trim())) {
						clear(cached.nodes, cached)
						nodes = [$document.createTextNode(data)]
					}
	
					injectTextNode(parentElement, nodes[0], index, data)
				}
			}
			cached = new data.constructor(data)
			cached.nodes = nodes
			return cached
		}
	
		function handleTextNode(
			cached,
			data,
			index,
			parentElement,
			shouldReattach,
			editable,
			parentTag
		) {
			if (!cached.nodes.length) {
				return handleNonexistentNodes(data, parentElement, index)
			} else if (cached.valueOf() !== data.valueOf() || shouldReattach) {
				return reattachNodes(data, cached, parentElement, editable, index,
					parentTag)
			} else {
				return (cached.nodes.intact = true, cached)
			}
		}
	
		function getSubArrayCount(item) {
			if (item.$trusted) {
				// fix offset of next element if item was a trusted string w/ more
				// than one html element
				// the first clause in the regexp matches elements
				// the second clause (after the pipe) matches text nodes
				var match = item.match(/<[^\/]|\>\s*[^<]/g)
				if (match != null) return match.length
			} else if (isArray(item)) {
				return item.length
			}
			return 1
		}
	
		function buildArray(
			data,
			cached,
			parentElement,
			index,
			parentTag,
			shouldReattach,
			editable,
			namespace,
			configs
		) {
			data = flatten(data)
			var nodes = []
			var intact = cached.length === data.length
			var subArrayCount = 0
	
			// keys algorithm: sort elements without recreating them if keys are
			// present
			//
			// 1) create a map of all existing keys, and mark all for deletion
			// 2) add new keys to map and mark them for addition
			// 3) if key exists in new list, change action from deletion to a move
			// 4) for each key, handle its corresponding action as marked in
			//    previous steps
	
			var existing = {}
			var shouldMaintainIdentities = false
	
			forKeys(cached, function (attrs, i) {
				shouldMaintainIdentities = true
				existing[cached[i].attrs.key] = {action: DELETION, index: i}
			})
	
			buildArrayKeys(data)
			if (shouldMaintainIdentities) {
				cached = diffKeys(data, cached, existing, parentElement)
			}
			// end key algorithm
	
			var cacheCount = 0
			// faster explicitly written
			for (var i = 0, len = data.length; i < len; i++) {
				// diff each item in the array
				var item = build(
					parentElement,
					parentTag,
					cached,
					index,
					data[i],
					cached[cacheCount],
					shouldReattach,
					index + subArrayCount || subArrayCount,
					editable,
					namespace,
					configs)
	
				if (item !== undefined) {
					intact = intact && item.nodes.intact
					subArrayCount += getSubArrayCount(item)
					cached[cacheCount++] = item
				}
			}
	
			if (!intact) diffArray(data, cached, nodes)
			return cached
		}
	
		function makeCache(data, cached, index, parentIndex, parentCache) {
			if (cached != null) {
				if (type.call(cached) === type.call(data)) return cached
	
				if (parentCache && parentCache.nodes) {
					var offset = index - parentIndex
					var end = offset + (isArray(data) ? data : cached.nodes).length
					clear(
						parentCache.nodes.slice(offset, end),
						parentCache.slice(offset, end))
				} else if (cached.nodes) {
					clear(cached.nodes, cached)
				}
			}
	
			cached = new data.constructor()
			// if constructor creates a virtual dom element, use a blank object as
			// the base cached node instead of copying the virtual el (#277)
			if (cached.tag) cached = {}
			cached.nodes = []
			return cached
		}
	
		function constructNode(data, namespace) {
			if (data.attrs.is) {
				if (namespace == null) {
					return $document.createElement(data.tag, data.attrs.is)
				} else {
					return $document.createElementNS(namespace, data.tag,
						data.attrs.is)
				}
			} else if (namespace == null) {
				return $document.createElement(data.tag)
			} else {
				return $document.createElementNS(namespace, data.tag)
			}
		}
	
		function constructAttrs(data, node, namespace, hasKeys) {
			if (hasKeys) {
				return setAttributes(node, data.tag, data.attrs, {}, namespace)
			} else {
				return data.attrs
			}
		}
	
		function constructChildren(
			data,
			node,
			cached,
			editable,
			namespace,
			configs
		) {
			if (data.children != null && data.children.length > 0) {
				return build(
					node,
					data.tag,
					undefined,
					undefined,
					data.children,
					cached.children,
					true,
					0,
					data.attrs.contenteditable ? node : editable,
					namespace,
					configs)
			} else {
				return data.children
			}
		}
	
		function reconstructCached(
			data,
			attrs,
			children,
			node,
			namespace,
			views,
			controllers
		) {
			var cached = {
				tag: data.tag,
				attrs: attrs,
				children: children,
				nodes: [node]
			}
	
			unloadCachedControllers(cached, views, controllers)
	
			if (cached.children && !cached.children.nodes) {
				cached.children.nodes = []
			}
	
			// edge case: setting value on <select> doesn't work before children
			// exist, so set it again after children have been created
			if (data.tag === "select" && "value" in data.attrs) {
				setAttributes(node, data.tag, {value: data.attrs.value}, {},
					namespace)
			}
	
			return cached
		}
	
		function getController(views, view, cachedControllers, controller) {
			var controllerIndex
	
			if (m.redraw.strategy() === "diff" && views) {
				controllerIndex = views.indexOf(view)
			} else {
				controllerIndex = -1
			}
	
			if (controllerIndex > -1) {
				return cachedControllers[controllerIndex]
			} else if (isFunction(controller)) {
				return new controller()
			} else {
				return {}
			}
		}
	
		var unloaders = []
	
		function updateLists(views, controllers, view, controller) {
			if (controller.onunload != null &&
					unloaders.map(function (u) { return u.handler })
						.indexOf(controller.onunload) < 0) {
				unloaders.push({
					controller: controller,
					handler: controller.onunload
				})
			}
	
			views.push(view)
			controllers.push(controller)
		}
	
		var forcing = false
		function checkView(
			data,
			view,
			cached,
			cachedControllers,
			controllers,
			views
		) {
			var controller = getController(
				cached.views,
				view,
				cachedControllers,
				data.controller)
	
			var key = data && data.attrs && data.attrs.key
	
			if (pendingRequests === 0 ||
					forcing ||
					cachedControllers &&
						cachedControllers.indexOf(controller) > -1) {
				data = data.view(controller)
			} else {
				data = {tag: "placeholder"}
			}
	
			if (data.subtree === "retain") return data
			data.attrs = data.attrs || {}
			data.attrs.key = key
			updateLists(views, controllers, view, controller)
			return data
		}
	
		function markViews(data, cached, views, controllers) {
			var cachedControllers = cached && cached.controllers
	
			while (data.view != null) {
				data = checkView(
					data,
					data.view.$original || data.view,
					cached,
					cachedControllers,
					controllers,
					views)
			}
	
			return data
		}
	
		function buildObject( // eslint-disable-line max-statements
			data,
			cached,
			editable,
			parentElement,
			index,
			shouldReattach,
			namespace,
			configs
		) {
			var views = []
			var controllers = []
	
			data = markViews(data, cached, views, controllers)
	
			if (data.subtree === "retain") return cached
	
			if (!data.tag && controllers.length) {
				throw new Error("Component template must return a virtual " +
					"element, not an array, string, etc.")
			}
	
			data.attrs = data.attrs || {}
			cached.attrs = cached.attrs || {}
	
			var dataAttrKeys = Object.keys(data.attrs)
			var hasKeys = dataAttrKeys.length > ("key" in data.attrs ? 1 : 0)
	
			maybeRecreateObject(data, cached, dataAttrKeys)
	
			if (!isString(data.tag)) return
	
			var isNew = cached.nodes.length === 0
	
			namespace = getObjectNamespace(data, namespace)
	
			var node
			if (isNew) {
				node = constructNode(data, namespace)
				// set attributes first, then create children
				var attrs = constructAttrs(data, node, namespace, hasKeys)
	
				var children = constructChildren(data, node, cached, editable,
					namespace, configs)
	
				cached = reconstructCached(
					data,
					attrs,
					children,
					node,
					namespace,
					views,
					controllers)
			} else {
				node = buildUpdatedNode(
					cached,
					data,
					editable,
					hasKeys,
					namespace,
					views,
					configs,
					controllers)
			}
	
			if (isNew || shouldReattach === true && node != null) {
				insertNode(parentElement, node, index)
			}
	
			// The configs are called after `build` finishes running
			scheduleConfigsToBeCalled(configs, data, node, isNew, cached)
	
			return cached
		}
	
		function build(
			parentElement,
			parentTag,
			parentCache,
			parentIndex,
			data,
			cached,
			shouldReattach,
			index,
			editable,
			namespace,
			configs
		) {
			/*
			 * `build` is a recursive function that manages creation/diffing/removal
			 * of DOM elements based on comparison between `data` and `cached` the
			 * diff algorithm can be summarized as this:
			 *
			 * 1 - compare `data` and `cached`
			 * 2 - if they are different, copy `data` to `cached` and update the DOM
			 *     based on what the difference is
			 * 3 - recursively apply this algorithm for every array and for the
			 *     children of every virtual element
			 *
			 * The `cached` data structure is essentially the same as the previous
			 * redraw's `data` data structure, with a few additions:
			 * - `cached` always has a property called `nodes`, which is a list of
			 *    DOM elements that correspond to the data represented by the
			 *    respective virtual element
			 * - in order to support attaching `nodes` as a property of `cached`,
			 *    `cached` is *always* a non-primitive object, i.e. if the data was
			 *    a string, then cached is a String instance. If data was `null` or
			 *    `undefined`, cached is `new String("")`
			 * - `cached also has a `configContext` property, which is the state
			 *    storage object exposed by config(element, isInitialized, context)
			 * - when `cached` is an Object, it represents a virtual element; when
			 *    it's an Array, it represents a list of elements; when it's a
			 *    String, Number or Boolean, it represents a text node
			 *
			 * `parentElement` is a DOM element used for W3C DOM API calls
			 * `parentTag` is only used for handling a corner case for textarea
			 * values
			 * `parentCache` is used to remove nodes in some multi-node cases
			 * `parentIndex` and `index` are used to figure out the offset of nodes.
			 * They're artifacts from before arrays started being flattened and are
			 * likely refactorable
			 * `data` and `cached` are, respectively, the new and old nodes being
			 * diffed
			 * `shouldReattach` is a flag indicating whether a parent node was
			 * recreated (if so, and if this node is reused, then this node must
			 * reattach itself to the new parent)
			 * `editable` is a flag that indicates whether an ancestor is
			 * contenteditable
			 * `namespace` indicates the closest HTML namespace as it cascades down
			 * from an ancestor
			 * `configs` is a list of config functions to run after the topmost
			 * `build` call finishes running
			 *
			 * there's logic that relies on the assumption that null and undefined
			 * data are equivalent to empty strings
			 * - this prevents lifecycle surprises from procedural helpers that mix
			 *   implicit and explicit return statements (e.g.
			 *   function foo() {if (cond) return m("div")}
			 * - it simplifies diffing code
			 */
			data = dataToString(data)
			if (data.subtree === "retain") return cached
			cached = makeCache(data, cached, index, parentIndex, parentCache)
	
			if (isArray(data)) {
				return buildArray(
					data,
					cached,
					parentElement,
					index,
					parentTag,
					shouldReattach,
					editable,
					namespace,
					configs)
			} else if (data != null && isObject(data)) {
				return buildObject(
					data,
					cached,
					editable,
					parentElement,
					index,
					shouldReattach,
					namespace,
					configs)
			} else if (!isFunction(data)) {
				return handleTextNode(
					cached,
					data,
					index,
					parentElement,
					shouldReattach,
					editable,
					parentTag)
			} else {
				return cached
			}
		}
	
		function sortChanges(a, b) {
			return a.action - b.action || a.index - b.index
		}
	
		function copyStyleAttrs(node, dataAttr, cachedAttr) {
			for (var rule in dataAttr) {
				if (hasOwn.call(dataAttr, rule)) {
					if (cachedAttr == null || cachedAttr[rule] !== dataAttr[rule]) {
						node.style[rule] = dataAttr[rule]
					}
				}
			}
	
			for (rule in cachedAttr) {
				if (hasOwn.call(cachedAttr, rule)) {
					if (!hasOwn.call(dataAttr, rule)) node.style[rule] = ""
				}
			}
		}
	
		var shouldUseSetAttribute = {
			list: 1,
			style: 1,
			form: 1,
			type: 1,
			width: 1,
			height: 1
		}
	
		function setSingleAttr(
			node,
			attrName,
			dataAttr,
			cachedAttr,
			tag,
			namespace
		) {
			if (attrName === "config" || attrName === "key") {
				// `config` isn't a real attribute, so ignore it
				return true
			} else if (isFunction(dataAttr) && attrName.slice(0, 2) === "on") {
				// hook event handlers to the auto-redrawing system
				node[attrName] = autoredraw(dataAttr, node)
			} else if (attrName === "style" && dataAttr != null &&
					isObject(dataAttr)) {
				// handle `style: {...}`
				copyStyleAttrs(node, dataAttr, cachedAttr)
			} else if (namespace != null) {
				// handle SVG
				if (attrName === "href") {
					node.setAttributeNS("http://www.w3.org/1999/xlink",
						"href", dataAttr)
				} else {
					node.setAttribute(
						attrName === "className" ? "class" : attrName,
						dataAttr)
				}
			} else if (attrName in node && !shouldUseSetAttribute[attrName]) {
				// handle cases that are properties (but ignore cases where we
				// should use setAttribute instead)
				//
				// - list and form are typically used as strings, but are DOM
				//   element references in js
				//
				// - when using CSS selectors (e.g. `m("[style='']")`), style is
				//   used as a string, but it's an object in js
				//
				// #348 don't set the value if not needed - otherwise, cursor
				// placement breaks in Chrome
				try {
					if (tag !== "input" || node[attrName] !== dataAttr) {
						node[attrName] = dataAttr
					}
				} catch (e) {
					node.setAttribute(attrName, dataAttr)
				}
			}
			else node.setAttribute(attrName, dataAttr)
		}
	
		function trySetAttr(
			node,
			attrName,
			dataAttr,
			cachedAttr,
			cachedAttrs,
			tag,
			namespace
		) {
			if (!(attrName in cachedAttrs) || (cachedAttr !== dataAttr)) {
				cachedAttrs[attrName] = dataAttr
				try {
					return setSingleAttr(
						node,
						attrName,
						dataAttr,
						cachedAttr,
						tag,
						namespace)
				} catch (e) {
					// swallow IE's invalid argument errors to mimic HTML's
					// fallback-to-doing-nothing-on-invalid-attributes behavior
					if (e.message.indexOf("Invalid argument") < 0) throw e
				}
			} else if (attrName === "value" && tag === "input" &&
					node.value !== dataAttr) {
				// #348 dataAttr may not be a string, so use loose comparison
				node.value = dataAttr
			}
		}
	
		function setAttributes(node, tag, dataAttrs, cachedAttrs, namespace) {
			for (var attrName in dataAttrs) {
				if (hasOwn.call(dataAttrs, attrName)) {
					if (trySetAttr(
							node,
							attrName,
							dataAttrs[attrName],
							cachedAttrs[attrName],
							cachedAttrs,
							tag,
							namespace)) {
						continue
					}
				}
			}
			return cachedAttrs
		}
	
		function clear(nodes, cached) {
			for (var i = nodes.length - 1; i > -1; i--) {
				if (nodes[i] && nodes[i].parentNode) {
					try {
						nodes[i].parentNode.removeChild(nodes[i])
					} catch (e) {
						/* eslint-disable max-len */
						// ignore if this fails due to order of events (see
						// http://stackoverflow.com/questions/21926083/failed-to-execute-removechild-on-node)
						/* eslint-enable max-len */
					}
					cached = [].concat(cached)
					if (cached[i]) unload(cached[i])
				}
			}
			// release memory if nodes is an array. This check should fail if nodes
			// is a NodeList (see loop above)
			if (nodes.length) {
				nodes.length = 0
			}
		}
	
		function unload(cached) {
			if (cached.configContext && isFunction(cached.configContext.onunload)) {
				cached.configContext.onunload()
				cached.configContext.onunload = null
			}
			if (cached.controllers) {
				forEach(cached.controllers, function (controller) {
					if (isFunction(controller.onunload)) {
						controller.onunload({preventDefault: noop})
					}
				})
			}
			if (cached.children) {
				if (isArray(cached.children)) forEach(cached.children, unload)
				else if (cached.children.tag) unload(cached.children)
			}
		}
	
		function appendTextFragment(parentElement, data) {
			try {
				parentElement.appendChild(
					$document.createRange().createContextualFragment(data))
			} catch (e) {
				parentElement.insertAdjacentHTML("beforeend", data)
			}
		}
	
		function injectHTML(parentElement, index, data) {
			var nextSibling = parentElement.childNodes[index]
			if (nextSibling) {
				var isElement = nextSibling.nodeType !== 1
				var placeholder = $document.createElement("span")
				if (isElement) {
					parentElement.insertBefore(placeholder, nextSibling || null)
					placeholder.insertAdjacentHTML("beforebegin", data)
					parentElement.removeChild(placeholder)
				} else {
					nextSibling.insertAdjacentHTML("beforebegin", data)
				}
			} else {
				appendTextFragment(parentElement, data)
			}
	
			var nodes = []
	
			while (parentElement.childNodes[index] !== nextSibling) {
				nodes.push(parentElement.childNodes[index])
				index++
			}
	
			return nodes
		}
	
		function autoredraw(callback, object) {
			return function (e) {
				e = e || event
				m.redraw.strategy("diff")
				m.startComputation()
				try {
					return callback.call(object, e)
				} finally {
					endFirstComputation()
				}
			}
		}
	
		var html
		var documentNode = {
			appendChild: function (node) {
				if (html === undefined) html = $document.createElement("html")
				if ($document.documentElement &&
						$document.documentElement !== node) {
					$document.replaceChild(node, $document.documentElement)
				} else {
					$document.appendChild(node)
				}
	
				this.childNodes = $document.childNodes
			},
	
			insertBefore: function (node) {
				this.appendChild(node)
			},
	
			childNodes: []
		}
	
		var nodeCache = []
		var cellCache = {}
	
		m.render = function (root, cell, forceRecreation) {
			if (!root) {
				throw new Error("Ensure the DOM element being passed to " +
					"m.route/m.mount/m.render is not undefined.")
			}
			var configs = []
			var id = getCellCacheKey(root)
			var isDocumentRoot = root === $document
			var node
	
			if (isDocumentRoot || root === $document.documentElement) {
				node = documentNode
			} else {
				node = root
			}
	
			if (isDocumentRoot && cell.tag !== "html") {
				cell = {tag: "html", attrs: {}, children: cell}
			}
	
			if (cellCache[id] === undefined) clear(node.childNodes)
			if (forceRecreation === true) reset(root)
	
			cellCache[id] = build(
				node,
				null,
				undefined,
				undefined,
				cell,
				cellCache[id],
				false,
				0,
				null,
				undefined,
				configs)
	
			forEach(configs, function (config) { config() })
		}
	
		function getCellCacheKey(element) {
			var index = nodeCache.indexOf(element)
			return index < 0 ? nodeCache.push(element) - 1 : index
		}
	
		m.trust = function (value) {
			value = new String(value) // eslint-disable-line no-new-wrappers
			value.$trusted = true
			return value
		}
	
		function gettersetter(store) {
			function prop() {
				if (arguments.length) store = arguments[0]
				return store
			}
	
			prop.toJSON = function () {
				return store
			}
	
			return prop
		}
	
		m.prop = function (store) {
			if ((store != null && isObject(store) || isFunction(store)) &&
					isFunction(store.then)) {
				return propify(store)
			}
	
			return gettersetter(store)
		}
	
		var roots = []
		var components = []
		var controllers = []
		var lastRedrawId = null
		var lastRedrawCallTime = 0
		var computePreRedrawHook = null
		var computePostRedrawHook = null
		var topComponent
		var FRAME_BUDGET = 16 // 60 frames per second = 1 call per 16 ms
	
		function parameterize(component, args) {
			function controller() {
				/* eslint-disable no-invalid-this */
				return (component.controller || noop).apply(this, args) || this
				/* eslint-enable no-invalid-this */
			}
	
			if (component.controller) {
				controller.prototype = component.controller.prototype
			}
	
			function view(ctrl) {
				var currentArgs = [ctrl].concat(args)
				for (var i = 1; i < arguments.length; i++) {
					currentArgs.push(arguments[i])
				}
	
				return component.view.apply(component, currentArgs)
			}
	
			view.$original = component.view
			var output = {controller: controller, view: view}
			if (args[0] && args[0].key != null) output.attrs = {key: args[0].key}
			return output
		}
	
		m.component = function (component) {
			var args = new Array(arguments.length - 1)
	
			for (var i = 1; i < arguments.length; i++) {
				args[i - 1] = arguments[i]
			}
	
			return parameterize(component, args)
		}
	
		function checkPrevented(component, root, index, isPrevented) {
			if (!isPrevented) {
				m.redraw.strategy("all")
				m.startComputation()
				roots[index] = root
				var currentComponent
	
				if (component) {
					currentComponent = topComponent = component
				} else {
					currentComponent = topComponent = component = {controller: noop}
				}
	
				var controller = new (component.controller || noop)()
	
				// controllers may call m.mount recursively (via m.route redirects,
				// for example)
				// this conditional ensures only the last recursive m.mount call is
				// applied
				if (currentComponent === topComponent) {
					controllers[index] = controller
					components[index] = component
				}
				endFirstComputation()
				if (component === null) {
					removeRootElement(root, index)
				}
				return controllers[index]
			} else if (component == null) {
				removeRootElement(root, index)
			}
		}
	
		m.mount = m.module = function (root, component) {
			if (!root) {
				throw new Error("Please ensure the DOM element exists before " +
					"rendering a template into it.")
			}
	
			var index = roots.indexOf(root)
			if (index < 0) index = roots.length
	
			var isPrevented = false
			var event = {
				preventDefault: function () {
					isPrevented = true
					computePreRedrawHook = computePostRedrawHook = null
				}
			}
	
			forEach(unloaders, function (unloader) {
				unloader.handler.call(unloader.controller, event)
				unloader.controller.onunload = null
			})
	
			if (isPrevented) {
				forEach(unloaders, function (unloader) {
					unloader.controller.onunload = unloader.handler
				})
			} else {
				unloaders = []
			}
	
			if (controllers[index] && isFunction(controllers[index].onunload)) {
				controllers[index].onunload(event)
			}
	
			return checkPrevented(component, root, index, isPrevented)
		}
	
		function removeRootElement(root, index) {
			roots.splice(index, 1)
			controllers.splice(index, 1)
			components.splice(index, 1)
			reset(root)
			nodeCache.splice(getCellCacheKey(root), 1)
		}
	
		var redrawing = false
		m.redraw = function (force) {
			if (redrawing) return
			redrawing = true
			if (force) forcing = true
	
			try {
				// lastRedrawId is a positive number if a second redraw is requested
				// before the next animation frame
				// lastRedrawId is null if it's the first redraw and not an event
				// handler
				if (lastRedrawId && !force) {
					// when setTimeout: only reschedule redraw if time between now
					// and previous redraw is bigger than a frame, otherwise keep
					// currently scheduled timeout
					// when rAF: always reschedule redraw
					if ($requestAnimationFrame === global.requestAnimationFrame ||
							new Date() - lastRedrawCallTime > FRAME_BUDGET) {
						if (lastRedrawId > 0) $cancelAnimationFrame(lastRedrawId)
						lastRedrawId = $requestAnimationFrame(redraw, FRAME_BUDGET)
					}
				} else {
					redraw()
					lastRedrawId = $requestAnimationFrame(function () {
						lastRedrawId = null
					}, FRAME_BUDGET)
				}
			} finally {
				redrawing = forcing = false
			}
		}
	
		m.redraw.strategy = m.prop()
		function redraw() {
			if (computePreRedrawHook) {
				computePreRedrawHook()
				computePreRedrawHook = null
			}
			forEach(roots, function (root, i) {
				var component = components[i]
				if (controllers[i]) {
					var args = [controllers[i]]
					m.render(root,
						component.view ? component.view(controllers[i], args) : "")
				}
			})
			// after rendering within a routed context, we need to scroll back to
			// the top, and fetch the document title for history.pushState
			if (computePostRedrawHook) {
				computePostRedrawHook()
				computePostRedrawHook = null
			}
			lastRedrawId = null
			lastRedrawCallTime = new Date()
			m.redraw.strategy("diff")
		}
	
		function endFirstComputation() {
			if (m.redraw.strategy() === "none") {
				pendingRequests--
				m.redraw.strategy("diff")
			} else {
				m.endComputation()
			}
		}
	
		m.withAttr = function (prop, withAttrCallback, callbackThis) {
			return function (e) {
				e = e || window.event
				/* eslint-disable no-invalid-this */
				var currentTarget = e.currentTarget || this
				var _this = callbackThis || this
				/* eslint-enable no-invalid-this */
				var target = prop in currentTarget ?
					currentTarget[prop] :
					currentTarget.getAttribute(prop)
				withAttrCallback.call(_this, target)
			}
		}
	
		// routing
		var modes = {pathname: "", hash: "#", search: "?"}
		var redirect = noop
		var isDefaultRoute = false
		var routeParams, currentRoute
	
		m.route = function (root, arg1, arg2, vdom) { // eslint-disable-line
			// m.route()
			if (arguments.length === 0) return currentRoute
			// m.route(el, defaultRoute, routes)
			if (arguments.length === 3 && isString(arg1)) {
				redirect = function (source) {
					var path = currentRoute = normalizeRoute(source)
					if (!routeByValue(root, arg2, path)) {
						if (isDefaultRoute) {
							throw new Error("Ensure the default route matches " +
								"one of the routes defined in m.route")
						}
	
						isDefaultRoute = true
						m.route(arg1, true)
						isDefaultRoute = false
					}
				}
	
				var listener = m.route.mode === "hash" ?
					"onhashchange" :
					"onpopstate"
	
				global[listener] = function () {
					var path = $location[m.route.mode]
					if (m.route.mode === "pathname") path += $location.search
					if (currentRoute !== normalizeRoute(path)) redirect(path)
				}
	
				computePreRedrawHook = setScroll
				global[listener]()
	
				return
			}
	
			// config: m.route
			if (root.addEventListener || root.attachEvent) {
				var base = m.route.mode !== "pathname" ? $location.pathname : ""
				root.href = base + modes[m.route.mode] + vdom.attrs.href
				if (root.addEventListener) {
					root.removeEventListener("click", routeUnobtrusive)
					root.addEventListener("click", routeUnobtrusive)
				} else {
					root.detachEvent("onclick", routeUnobtrusive)
					root.attachEvent("onclick", routeUnobtrusive)
				}
	
				return
			}
			// m.route(route, params, shouldReplaceHistoryEntry)
			if (isString(root)) {
				var oldRoute = currentRoute
				currentRoute = root
	
				var args = arg1 || {}
				var queryIndex = currentRoute.indexOf("?")
				var params
	
				if (queryIndex > -1) {
					params = parseQueryString(currentRoute.slice(queryIndex + 1))
				} else {
					params = {}
				}
	
				for (var i in args) {
					if (hasOwn.call(args, i)) {
						params[i] = args[i]
					}
				}
	
				var querystring = buildQueryString(params)
				var currentPath
	
				if (queryIndex > -1) {
					currentPath = currentRoute.slice(0, queryIndex)
				} else {
					currentPath = currentRoute
				}
	
				if (querystring) {
					currentRoute = currentPath +
						(currentPath.indexOf("?") === -1 ? "?" : "&") +
						querystring
				}
	
				var replaceHistory =
					(arguments.length === 3 ? arg2 : arg1) === true ||
					oldRoute === root
	
				if (global.history.pushState) {
					var method = replaceHistory ? "replaceState" : "pushState"
					computePreRedrawHook = setScroll
					computePostRedrawHook = function () {
						global.history[method](null, $document.title,
							modes[m.route.mode] + currentRoute)
					}
					redirect(modes[m.route.mode] + currentRoute)
				} else {
					$location[m.route.mode] = currentRoute
					redirect(modes[m.route.mode] + currentRoute)
				}
			}
		}
	
		m.route.param = function (key) {
			if (!routeParams) {
				throw new Error("You must call m.route(element, defaultRoute, " +
					"routes) before calling m.route.param()")
			}
	
			if (!key) {
				return routeParams
			}
	
			return routeParams[key]
		}
	
		m.route.mode = "search"
	
		function normalizeRoute(route) {
			return route.slice(modes[m.route.mode].length)
		}
	
		function routeByValue(root, router, path) {
			routeParams = {}
	
			var queryStart = path.indexOf("?")
			if (queryStart !== -1) {
				routeParams = parseQueryString(
					path.substr(queryStart + 1, path.length))
				path = path.substr(0, queryStart)
			}
	
			// Get all routes and check if there's
			// an exact match for the current path
			var keys = Object.keys(router)
			var index = keys.indexOf(path)
	
			if (index !== -1){
				m.mount(root, router[keys [index]])
				return true
			}
	
			for (var route in router) {
				if (hasOwn.call(router, route)) {
					if (route === path) {
						m.mount(root, router[route])
						return true
					}
	
					var matcher = new RegExp("^" + route
						.replace(/:[^\/]+?\.{3}/g, "(.*?)")
						.replace(/:[^\/]+/g, "([^\\/]+)") + "\/?$")
	
					if (matcher.test(path)) {
						/* eslint-disable no-loop-func */
						path.replace(matcher, function () {
							var keys = route.match(/:[^\/]+/g) || []
							var values = [].slice.call(arguments, 1, -2)
							forEach(keys, function (key, i) {
								routeParams[key.replace(/:|\./g, "")] =
									decodeURIComponent(values[i])
							})
							m.mount(root, router[route])
						})
						/* eslint-enable no-loop-func */
						return true
					}
				}
			}
		}
	
		function routeUnobtrusive(e) {
			e = e || event
			if (e.ctrlKey || e.metaKey || e.shiftKey || e.which === 2) return
	
			if (e.preventDefault) {
				e.preventDefault()
			} else {
				e.returnValue = false
			}
	
			var currentTarget = e.currentTarget || e.srcElement
			var args
	
			if (m.route.mode === "pathname" && currentTarget.search) {
				args = parseQueryString(currentTarget.search.slice(1))
			} else {
				args = {}
			}
	
			while (currentTarget && !/a/i.test(currentTarget.nodeName)) {
				currentTarget = currentTarget.parentNode
			}
	
			// clear pendingRequests because we want an immediate route change
			pendingRequests = 0
			m.route(currentTarget[m.route.mode]
				.slice(modes[m.route.mode].length), args)
		}
	
		function setScroll() {
			if (m.route.mode !== "hash" && $location.hash) {
				$location.hash = $location.hash
			} else {
				global.scrollTo(0, 0)
			}
		}
	
		function buildQueryString(object, prefix) {
			var duplicates = {}
			var str = []
	
			for (var prop in object) {
				if (hasOwn.call(object, prop)) {
					var key = prefix ? prefix + "[" + prop + "]" : prop
					var value = object[prop]
	
					if (value === null) {
						str.push(encodeURIComponent(key))
					} else if (isObject(value)) {
						str.push(buildQueryString(value, key))
					} else if (isArray(value)) {
						var keys = []
						duplicates[key] = duplicates[key] || {}
						/* eslint-disable no-loop-func */
						forEach(value, function (item) {
							/* eslint-enable no-loop-func */
							if (!duplicates[key][item]) {
								duplicates[key][item] = true
								keys.push(encodeURIComponent(key) + "=" +
									encodeURIComponent(item))
							}
						})
						str.push(keys.join("&"))
					} else if (value !== undefined) {
						str.push(encodeURIComponent(key) + "=" +
							encodeURIComponent(value))
					}
				}
			}
	
			return str.join("&")
		}
	
		function parseQueryString(str) {
			if (str === "" || str == null) return {}
			if (str.charAt(0) === "?") str = str.slice(1)
	
			var pairs = str.split("&")
			var params = {}
	
			forEach(pairs, function (string) {
				var pair = string.split("=")
				var key = decodeURIComponent(pair[0])
				var value = pair.length === 2 ? decodeURIComponent(pair[1]) : null
				if (params[key] != null) {
					if (!isArray(params[key])) params[key] = [params[key]]
					params[key].push(value)
				}
				else params[key] = value
			})
	
			return params
		}
	
		m.route.buildQueryString = buildQueryString
		m.route.parseQueryString = parseQueryString
	
		function reset(root) {
			var cacheKey = getCellCacheKey(root)
			clear(root.childNodes, cellCache[cacheKey])
			cellCache[cacheKey] = undefined
		}
	
		m.deferred = function () {
			var deferred = new Deferred()
			deferred.promise = propify(deferred.promise)
			return deferred
		}
	
		function propify(promise, initialValue) {
			var prop = m.prop(initialValue)
			promise.then(prop)
			prop.then = function (resolve, reject) {
				return propify(promise.then(resolve, reject), initialValue)
			}
	
			prop.catch = prop.then.bind(null, null)
			return prop
		}
		// Promiz.mithril.js | Zolmeister | MIT
		// a modified version of Promiz.js, which does not conform to Promises/A+
		// for two reasons:
		//
		// 1) `then` callbacks are called synchronously (because setTimeout is too
		//    slow, and the setImmediate polyfill is too big
		//
		// 2) throwing subclasses of Error cause the error to be bubbled up instead
		//    of triggering rejection (because the spec does not account for the
		//    important use case of default browser error handling, i.e. message w/
		//    line number)
	
		var RESOLVING = 1
		var REJECTING = 2
		var RESOLVED = 3
		var REJECTED = 4
	
		function Deferred(onSuccess, onFailure) {
			var self = this
			var state = 0
			var promiseValue = 0
			var next = []
	
			self.promise = {}
	
			self.resolve = function (value) {
				if (!state) {
					promiseValue = value
					state = RESOLVING
	
					fire()
				}
	
				return self
			}
	
			self.reject = function (value) {
				if (!state) {
					promiseValue = value
					state = REJECTING
	
					fire()
				}
	
				return self
			}
	
			self.promise.then = function (onSuccess, onFailure) {
				var deferred = new Deferred(onSuccess, onFailure)
	
				if (state === RESOLVED) {
					deferred.resolve(promiseValue)
				} else if (state === REJECTED) {
					deferred.reject(promiseValue)
				} else {
					next.push(deferred)
				}
	
				return deferred.promise
			}
	
			function finish(type) {
				state = type || REJECTED
				next.map(function (deferred) {
					if (state === RESOLVED) {
						deferred.resolve(promiseValue)
					} else {
						deferred.reject(promiseValue)
					}
				})
			}
	
			function thennable(then, success, failure, notThennable) {
				if (((promiseValue != null && isObject(promiseValue)) ||
						isFunction(promiseValue)) && isFunction(then)) {
					try {
						// count protects against abuse calls from spec checker
						var count = 0
						then.call(promiseValue, function (value) {
							if (count++) return
							promiseValue = value
							success()
						}, function (value) {
							if (count++) return
							promiseValue = value
							failure()
						})
					} catch (e) {
						m.deferred.onerror(e)
						promiseValue = e
						failure()
					}
				} else {
					notThennable()
				}
			}
	
			function fire() {
				// check if it's a thenable
				var then
				try {
					then = promiseValue && promiseValue.then
				} catch (e) {
					m.deferred.onerror(e)
					promiseValue = e
					state = REJECTING
					return fire()
				}
	
				if (state === REJECTING) {
					m.deferred.onerror(promiseValue)
				}
	
				thennable(then, function () {
					state = RESOLVING
					fire()
				}, function () {
					state = REJECTING
					fire()
				}, function () {
					try {
						if (state === RESOLVING && isFunction(onSuccess)) {
							promiseValue = onSuccess(promiseValue)
						} else if (state === REJECTING && isFunction(onFailure)) {
							promiseValue = onFailure(promiseValue)
							state = RESOLVING
						}
					} catch (e) {
						m.deferred.onerror(e)
						promiseValue = e
						return finish()
					}
	
					if (promiseValue === self) {
						promiseValue = TypeError()
						finish()
					} else {
						thennable(then, function () {
							finish(RESOLVED)
						}, finish, function () {
							finish(state === RESOLVING && RESOLVED)
						})
					}
				})
			}
		}
	
		m.deferred.onerror = function (e) {
			if (type.call(e) === "[object Error]" &&
					!/ Error/.test(e.constructor.toString())) {
				pendingRequests = 0
				throw e
			}
		}
	
		m.sync = function (args) {
			var deferred = m.deferred()
			var outstanding = args.length
			var results = []
			var method = "resolve"
	
			function synchronizer(pos, resolved) {
				return function (value) {
					results[pos] = value
					if (!resolved) method = "reject"
					if (--outstanding === 0) {
						deferred.promise(results)
						deferred[method](results)
					}
					return value
				}
			}
	
			if (args.length > 0) {
				forEach(args, function (arg, i) {
					arg.then(synchronizer(i, true), synchronizer(i, false))
				})
			} else {
				deferred.resolve([])
			}
	
			return deferred.promise
		}
	
		function identity(value) { return value }
	
		function handleJsonp(options) {
			var callbackKey = "mithril_callback_" +
				new Date().getTime() + "_" +
				(Math.round(Math.random() * 1e16)).toString(36)
	
			var script = $document.createElement("script")
	
			global[callbackKey] = function (resp) {
				script.parentNode.removeChild(script)
				options.onload({
					type: "load",
					target: {
						responseText: resp
					}
				})
				global[callbackKey] = undefined
			}
	
			script.onerror = function () {
				script.parentNode.removeChild(script)
	
				options.onerror({
					type: "error",
					target: {
						status: 500,
						responseText: JSON.stringify({
							error: "Error making jsonp request"
						})
					}
				})
				global[callbackKey] = undefined
	
				return false
			}
	
			script.onload = function () {
				return false
			}
	
			script.src = options.url +
				(options.url.indexOf("?") > 0 ? "&" : "?") +
				(options.callbackKey ? options.callbackKey : "callback") +
				"=" + callbackKey +
				"&" + buildQueryString(options.data || {})
	
			$document.body.appendChild(script)
		}
	
		function createXhr(options) {
			var xhr = new global.XMLHttpRequest()
			xhr.open(options.method, options.url, true, options.user,
				options.password)
	
			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {
					if (xhr.status >= 200 && xhr.status < 300) {
						options.onload({type: "load", target: xhr})
					} else {
						options.onerror({type: "error", target: xhr})
					}
				}
			}
	
			if (options.serialize === JSON.stringify &&
					options.data &&
					options.method !== "GET") {
				xhr.setRequestHeader("Content-Type",
					"application/json; charset=utf-8")
			}
	
			if (options.deserialize === JSON.parse) {
				xhr.setRequestHeader("Accept", "application/json, text/*")
			}
	
			if (isFunction(options.config)) {
				var maybeXhr = options.config(xhr, options)
				if (maybeXhr != null) xhr = maybeXhr
			}
	
			var data = options.method === "GET" || !options.data ? "" : options.data
	
			if (data && !isString(data) && data.constructor !== global.FormData) {
				throw new Error("Request data should be either be a string or " +
					"FormData. Check the `serialize` option in `m.request`")
			}
	
			xhr.send(data)
			return xhr
		}
	
		function ajax(options) {
			if (options.dataType && options.dataType.toLowerCase() === "jsonp") {
				return handleJsonp(options)
			} else {
				return createXhr(options)
			}
		}
	
		function bindData(options, data, serialize) {
			if (options.method === "GET" && options.dataType !== "jsonp") {
				var prefix = options.url.indexOf("?") < 0 ? "?" : "&"
				var querystring = buildQueryString(data)
				options.url += (querystring ? prefix + querystring : "")
			} else {
				options.data = serialize(data)
			}
		}
	
		function parameterizeUrl(url, data) {
			if (data) {
				url = url.replace(/:[a-z]\w+/gi, function (token){
					var key = token.slice(1)
					var value = data[key]
					delete data[key]
					return value
				})
			}
			return url
		}
	
		m.request = function (options) {
			if (options.background !== true) m.startComputation()
			var deferred = new Deferred()
			var isJSONP = options.dataType &&
				options.dataType.toLowerCase() === "jsonp"
	
			var serialize, deserialize, extract
	
			if (isJSONP) {
				serialize = options.serialize =
				deserialize = options.deserialize = identity
	
				extract = function (jsonp) { return jsonp.responseText }
			} else {
				serialize = options.serialize = options.serialize || JSON.stringify
	
				deserialize = options.deserialize =
					options.deserialize || JSON.parse
				extract = options.extract || function (xhr) {
					if (xhr.responseText.length || deserialize !== JSON.parse) {
						return xhr.responseText
					} else {
						return null
					}
				}
			}
	
			options.method = (options.method || "GET").toUpperCase()
			options.url = parameterizeUrl(options.url, options.data)
			bindData(options, options.data, serialize)
			options.onload = options.onerror = function (ev) {
				try {
					ev = ev || event
					var response = deserialize(extract(ev.target, options))
					if (ev.type === "load") {
						if (options.unwrapSuccess) {
							response = options.unwrapSuccess(response, ev.target)
						}
	
						if (isArray(response) && options.type) {
							forEach(response, function (res, i) {
								response[i] = new options.type(res)
							})
						} else if (options.type) {
							response = new options.type(response)
						}
	
						deferred.resolve(response)
					} else {
						if (options.unwrapError) {
							response = options.unwrapError(response, ev.target)
						}
	
						deferred.reject(response)
					}
				} catch (e) {
					deferred.reject(e)
					m.deferred.onerror(e)
				} finally {
					if (options.background !== true) m.endComputation()
				}
			}
	
			ajax(options)
			deferred.promise = propify(deferred.promise, options.initialValue)
			return deferred.promise
		}
	
		return m
	}); // eslint-disable-line
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	var _MyModel = __webpack_require__(3);
	
	var _MyModel2 = _interopRequireDefault(_MyModel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var viewModel = {
	  initialize: function initialize() {
	    viewModel.dataList = _MyModel2.default.getData();
	  }
	};
	
	var MyComponent = {
	  controller: function controller() {
	    viewModel.initialize();
	    this.viewModel = viewModel;
	  },
	  view: function view(ctrl) {
	    return {
	      tag: 'ul',
	      children: [[ctrl.viewModel.dataList().map(function (d) {
	        return (0, _mithril2.default)('li', d.text());
	      })]]
	    };
	  }
	};
	
	exports.default = MyComponent;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MyModel = function MyModel(data) {
	  this.text = _mithril2.default.prop(data && data.text || "");
	};
	MyModel.getData = function () {
	  return _mithril2.default.request({
	    method: "GET",
	    url: "/ajax",
	    type: MyModel
	  });
	};
	MyModel.setData = function (dataList) {
	  _mithril2.default.request({
	    method: "POST",
	    url: "/ajax",
	    data: dataList
	  });
	};
	exports.default = MyModel;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmM0M2Q2MjVhMWZlNThhOWU3MzkiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9taXRocmlsL21pdGhyaWwuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9NeUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL015TW9kZWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOzs7O0FBQ0E7Ozs7OztBQUVBLG1CQUFFLEtBQUYsQ0FBUSxTQUFTLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBUix5Qjs7Ozs7O21DQ0hBLCtDQUFDLDZCQUE2QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGLGtEQUFzQixXQUFXO0FBQ2pDLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFDLCtFQUErRTtBQUNoRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWdCO0FBQ2hCLGVBQWM7O0FBRWQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxlQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBLEtBQUk7QUFDSjtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQVksSUFBSTtBQUNoQixhQUFZLFVBQVU7QUFDdEIsYUFBWSxZQUFZO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZDQUE0QyxZQUFZO0FBQ3hEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBaUIscUNBQXFDO0FBQ3REO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJLElBQUk7QUFDUixJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhLDJCQUEyQjtBQUN4QztBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUEyQixxQkFBcUI7QUFDaEQ7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDQUFvQztBQUNwQyxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDQUFvQyxTQUFTO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXNEO0FBQ3RELElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUFrQyx3QkFBd0IsSUFBSTtBQUM5RDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGlDQUFnQyxtQkFBbUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxZQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBbUU7QUFDbkUseURBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsdUJBQXNCLElBQUk7QUFDMUI7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWdDLFFBQVE7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTBCLHFCQUFxQjtBQUMvQztBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLFlBQVcsc0JBQXNCO0FBQ2pDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVDQUFzQyxXQUFXO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFrQixzQkFBc0I7QUFDeEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWdCO0FBQ2hCLHVEQUFzRDtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWlCLHNCQUFzQjtBQUN2QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFJO0FBQ0osb0RBQW1EO0FBQ25EOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0osSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBLCtDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMEIsRUFBRTtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0EsT0FBTTtBQUNOO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSixJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDRCQUEyQjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBLEtBQUk7QUFDSjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE0Qzs7QUFFNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUIsMEJBQTBCO0FBQy9DLE1BQUs7QUFDTCx1QkFBc0IsMkJBQTJCO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdDQUErQjtBQUMvQixJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxPQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7QUM3b0VIOzs7O0FBQ0E7Ozs7OztBQUVBLEtBQUksWUFBWTtBQUNkLGVBQVksc0JBQVU7QUFDcEIsZUFBVSxRQUFWLEdBQXFCLGtCQUFRLE9BQVIsRUFBckI7QUFDRDtBQUhhLEVBQWhCOztBQU1BLEtBQUksY0FBYztBQUNoQixlQUFZLHNCQUFVO0FBQ3BCLGVBQVUsVUFBVjtBQUNBLFVBQUssU0FBTCxHQUFpQixTQUFqQjtBQUNELElBSmU7QUFLaEIsU0FBTSxjQUFTLElBQVQsRUFBYztBQUNsQjtBQUFBO0FBQUEsa0JBRUssQ0FDQyxLQUFLLFNBQUwsQ0FBZSxRQUFmLEdBQTBCLEdBQTFCLENBQThCLFVBQVMsQ0FBVCxFQUFXO0FBQ3ZDLGdCQUFPLHVCQUFFLElBQUYsRUFBUSxFQUFFLElBQUYsRUFBUixDQUFQO0FBQ0QsUUFGRCxDQURELENBRkw7QUFBQTtBQVNEO0FBZmUsRUFBbEI7O21CQWtCZSxXOzs7Ozs7Ozs7Ozs7QUMzQmY7Ozs7OztBQUVBLEtBQUksVUFBVSxTQUFWLE9BQVUsQ0FBUyxJQUFULEVBQWM7QUFDMUIsUUFBSyxJQUFMLEdBQVksa0JBQUUsSUFBRixDQUFPLFFBQVEsS0FBSyxJQUFiLElBQXFCLEVBQTVCLENBQVo7QUFDRCxFQUZEO0FBR0EsU0FBUSxPQUFSLEdBQWtCLFlBQVU7QUFDMUIsVUFBTyxrQkFBRSxPQUFGLENBQVU7QUFDZixhQUFRLEtBRE87QUFFZixVQUFLLE9BRlU7QUFHZixXQUFNO0FBSFMsSUFBVixDQUFQO0FBS0QsRUFORDtBQU9BLFNBQVEsT0FBUixHQUFrQixVQUFTLFFBQVQsRUFBa0I7QUFDbEMscUJBQUUsT0FBRixDQUFVO0FBQ1IsYUFBUSxNQURBO0FBRVIsVUFBSyxPQUZHO0FBR1IsV0FBTTtBQUhFLElBQVY7QUFLRCxFQU5EO21CQU9lLE87Ozs7OztBQ25CZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMmM0M2Q2MjVhMWZlNThhOWU3MzlcbiAqKi8iLCJpbXBvcnQgbSBmcm9tICdtaXRocmlsJztcbmltcG9ydCBNeUNvbXBvbmVudCBmcm9tICcuL21vZHVsZXMvTXlDb21wb25lbnQnXG5cbm0ubW91bnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpLCBNeUNvbXBvbmVudClcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaW5kZXguanNcbiAqKi8iLCI7KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG5cdFwidXNlIHN0cmljdFwiXHJcblx0LyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cclxuXHR2YXIgbSA9IGZhY3RvcnkoZ2xvYmFsKVxyXG5cdGlmICh0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiICYmIG1vZHVsZSAhPSBudWxsICYmIG1vZHVsZS5leHBvcnRzKSB7XHJcblx0XHRtb2R1bGUuZXhwb3J0cyA9IG1cclxuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XHJcblx0XHRkZWZpbmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gbSB9KVxyXG5cdH0gZWxzZSB7XHJcblx0XHRnbG9iYWwubSA9IG1cclxuXHR9XHJcblx0LyogZXNsaW50LWVuYWJsZSBuby11bmRlZiAqL1xyXG59KSh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdGhpcywgZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuXHRcInVzZSBzdHJpY3RcIlxyXG5cclxuXHRtLnZlcnNpb24gPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gXCJ2MC4yLjNcIlxyXG5cdH1cclxuXHJcblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5XHJcblx0dmFyIHR5cGUgPSB7fS50b1N0cmluZ1xyXG5cclxuXHRmdW5jdGlvbiBpc0Z1bmN0aW9uKG9iamVjdCkge1xyXG5cdFx0cmV0dXJuIHR5cGVvZiBvYmplY3QgPT09IFwiZnVuY3Rpb25cIlxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaXNPYmplY3Qob2JqZWN0KSB7XHJcblx0XHRyZXR1cm4gdHlwZS5jYWxsKG9iamVjdCkgPT09IFwiW29iamVjdCBPYmplY3RdXCJcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGlzU3RyaW5nKG9iamVjdCkge1xyXG5cdFx0cmV0dXJuIHR5cGUuY2FsbChvYmplY3QpID09PSBcIltvYmplY3QgU3RyaW5nXVwiXHJcblx0fVxyXG5cclxuXHR2YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKG9iamVjdCkge1xyXG5cdFx0cmV0dXJuIHR5cGUuY2FsbChvYmplY3QpID09PSBcIltvYmplY3QgQXJyYXldXCJcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG5vb3AoKSB7fVxyXG5cclxuXHR2YXIgdm9pZEVsZW1lbnRzID0ge1xyXG5cdFx0QVJFQTogMSxcclxuXHRcdEJBU0U6IDEsXHJcblx0XHRCUjogMSxcclxuXHRcdENPTDogMSxcclxuXHRcdENPTU1BTkQ6IDEsXHJcblx0XHRFTUJFRDogMSxcclxuXHRcdEhSOiAxLFxyXG5cdFx0SU1HOiAxLFxyXG5cdFx0SU5QVVQ6IDEsXHJcblx0XHRLRVlHRU46IDEsXHJcblx0XHRMSU5LOiAxLFxyXG5cdFx0TUVUQTogMSxcclxuXHRcdFBBUkFNOiAxLFxyXG5cdFx0U09VUkNFOiAxLFxyXG5cdFx0VFJBQ0s6IDEsXHJcblx0XHRXQlI6IDFcclxuXHR9XHJcblxyXG5cdC8vIGNhY2hpbmcgY29tbW9ubHkgdXNlZCB2YXJpYWJsZXNcclxuXHR2YXIgJGRvY3VtZW50LCAkbG9jYXRpb24sICRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUsICRjYW5jZWxBbmltYXRpb25GcmFtZVxyXG5cclxuXHQvLyBzZWxmIGludm9raW5nIGZ1bmN0aW9uIG5lZWRlZCBiZWNhdXNlIG9mIHRoZSB3YXkgbW9ja3Mgd29ya1xyXG5cdGZ1bmN0aW9uIGluaXRpYWxpemUobW9jaykge1xyXG5cdFx0JGRvY3VtZW50ID0gbW9jay5kb2N1bWVudFxyXG5cdFx0JGxvY2F0aW9uID0gbW9jay5sb2NhdGlvblxyXG5cdFx0JGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gbW9jay5jYW5jZWxBbmltYXRpb25GcmFtZSB8fCBtb2NrLmNsZWFyVGltZW91dFxyXG5cdFx0JHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IG1vY2sucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IG1vY2suc2V0VGltZW91dFxyXG5cdH1cclxuXHJcblx0Ly8gdGVzdGluZyBBUElcclxuXHRtLmRlcHMgPSBmdW5jdGlvbiAobW9jaykge1xyXG5cdFx0aW5pdGlhbGl6ZShnbG9iYWwgPSBtb2NrIHx8IHdpbmRvdylcclxuXHRcdHJldHVybiBnbG9iYWxcclxuXHR9XHJcblxyXG5cdG0uZGVwcyhnbG9iYWwpXHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlZGVmIHtTdHJpbmd9IFRhZ1xyXG5cdCAqIEEgc3RyaW5nIHRoYXQgbG9va3MgbGlrZSAtPiBkaXYuY2xhc3NuYW1lI2lkW3BhcmFtPW9uZV1bcGFyYW0yPXR3b11cclxuXHQgKiBXaGljaCBkZXNjcmliZXMgYSBET00gbm9kZVxyXG5cdCAqL1xyXG5cclxuXHRmdW5jdGlvbiBwYXJzZVRhZ0F0dHJzKGNlbGwsIHRhZykge1xyXG5cdFx0dmFyIGNsYXNzZXMgPSBbXVxyXG5cdFx0dmFyIHBhcnNlciA9IC8oPzooXnwjfFxcLikoW14jXFwuXFxbXFxdXSspKXwoXFxbLis/XFxdKS9nXHJcblx0XHR2YXIgbWF0Y2hcclxuXHJcblx0XHR3aGlsZSAoKG1hdGNoID0gcGFyc2VyLmV4ZWModGFnKSkpIHtcclxuXHRcdFx0aWYgKG1hdGNoWzFdID09PSBcIlwiICYmIG1hdGNoWzJdKSB7XHJcblx0XHRcdFx0Y2VsbC50YWcgPSBtYXRjaFsyXVxyXG5cdFx0XHR9IGVsc2UgaWYgKG1hdGNoWzFdID09PSBcIiNcIikge1xyXG5cdFx0XHRcdGNlbGwuYXR0cnMuaWQgPSBtYXRjaFsyXVxyXG5cdFx0XHR9IGVsc2UgaWYgKG1hdGNoWzFdID09PSBcIi5cIikge1xyXG5cdFx0XHRcdGNsYXNzZXMucHVzaChtYXRjaFsyXSlcclxuXHRcdFx0fSBlbHNlIGlmIChtYXRjaFszXVswXSA9PT0gXCJbXCIpIHtcclxuXHRcdFx0XHR2YXIgcGFpciA9IC9cXFsoLis/KSg/Oj0oXCJ8J3wpKC4qPylcXDIpP1xcXS8uZXhlYyhtYXRjaFszXSlcclxuXHRcdFx0XHRjZWxsLmF0dHJzW3BhaXJbMV1dID0gcGFpclszXSB8fCBcIlwiXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gY2xhc3Nlc1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZ2V0VmlydHVhbENoaWxkcmVuKGFyZ3MsIGhhc0F0dHJzKSB7XHJcblx0XHR2YXIgY2hpbGRyZW4gPSBoYXNBdHRycyA/IGFyZ3Muc2xpY2UoMSkgOiBhcmdzXHJcblxyXG5cdFx0aWYgKGNoaWxkcmVuLmxlbmd0aCA9PT0gMSAmJiBpc0FycmF5KGNoaWxkcmVuWzBdKSkge1xyXG5cdFx0XHRyZXR1cm4gY2hpbGRyZW5bMF1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBjaGlsZHJlblxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYXNzaWduQXR0cnModGFyZ2V0LCBhdHRycywgY2xhc3Nlcykge1xyXG5cdFx0dmFyIGNsYXNzQXR0ciA9IFwiY2xhc3NcIiBpbiBhdHRycyA/IFwiY2xhc3NcIiA6IFwiY2xhc3NOYW1lXCJcclxuXHJcblx0XHRmb3IgKHZhciBhdHRyTmFtZSBpbiBhdHRycykge1xyXG5cdFx0XHRpZiAoaGFzT3duLmNhbGwoYXR0cnMsIGF0dHJOYW1lKSkge1xyXG5cdFx0XHRcdGlmIChhdHRyTmFtZSA9PT0gY2xhc3NBdHRyICYmXHJcblx0XHRcdFx0XHRcdGF0dHJzW2F0dHJOYW1lXSAhPSBudWxsICYmXHJcblx0XHRcdFx0XHRcdGF0dHJzW2F0dHJOYW1lXSAhPT0gXCJcIikge1xyXG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGF0dHJzW2F0dHJOYW1lXSlcclxuXHRcdFx0XHRcdC8vIGNyZWF0ZSBrZXkgaW4gY29ycmVjdCBpdGVyYXRpb24gb3JkZXJcclxuXHRcdFx0XHRcdHRhcmdldFthdHRyTmFtZV0gPSBcIlwiXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRhcmdldFthdHRyTmFtZV0gPSBhdHRyc1thdHRyTmFtZV1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoY2xhc3Nlcy5sZW5ndGgpIHRhcmdldFtjbGFzc0F0dHJdID0gY2xhc3Nlcy5qb2luKFwiIFwiKVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1RhZ30gVGhlIERPTSBub2RlIHRhZ1xyXG5cdCAqIEBwYXJhbSB7T2JqZWN0PVtdfSBvcHRpb25hbCBrZXktdmFsdWUgcGFpcnMgdG8gYmUgbWFwcGVkIHRvIERPTSBhdHRyc1xyXG5cdCAqIEBwYXJhbSB7Li4ubU5vZGU9W119IFplcm8gb3IgbW9yZSBNaXRocmlsIGNoaWxkIG5vZGVzLiBDYW4gYmUgYW4gYXJyYXksXHJcblx0ICogICAgICAgICAgICAgICAgICAgICAgb3Igc3BsYXQgKG9wdGlvbmFsKVxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIG0odGFnLCBwYWlycykge1xyXG5cdFx0dmFyIGFyZ3MgPSBbXVxyXG5cclxuXHRcdGZvciAodmFyIGkgPSAxLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0YXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoaXNPYmplY3QodGFnKSkgcmV0dXJuIHBhcmFtZXRlcml6ZSh0YWcsIGFyZ3MpXHJcblxyXG5cdFx0aWYgKCFpc1N0cmluZyh0YWcpKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcInNlbGVjdG9yIGluIG0oc2VsZWN0b3IsIGF0dHJzLCBjaGlsZHJlbikgc2hvdWxkIFwiICtcclxuXHRcdFx0XHRcImJlIGEgc3RyaW5nXCIpXHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGhhc0F0dHJzID0gcGFpcnMgIT0gbnVsbCAmJiBpc09iamVjdChwYWlycykgJiZcclxuXHRcdFx0IShcInRhZ1wiIGluIHBhaXJzIHx8IFwidmlld1wiIGluIHBhaXJzIHx8IFwic3VidHJlZVwiIGluIHBhaXJzKVxyXG5cclxuXHRcdHZhciBhdHRycyA9IGhhc0F0dHJzID8gcGFpcnMgOiB7fVxyXG5cdFx0dmFyIGNlbGwgPSB7XHJcblx0XHRcdHRhZzogXCJkaXZcIixcclxuXHRcdFx0YXR0cnM6IHt9LFxyXG5cdFx0XHRjaGlsZHJlbjogZ2V0VmlydHVhbENoaWxkcmVuKGFyZ3MsIGhhc0F0dHJzKVxyXG5cdFx0fVxyXG5cclxuXHRcdGFzc2lnbkF0dHJzKGNlbGwuYXR0cnMsIGF0dHJzLCBwYXJzZVRhZ0F0dHJzKGNlbGwsIHRhZykpXHJcblx0XHRyZXR1cm4gY2VsbFxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZm9yRWFjaChsaXN0LCBmKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoICYmICFmKGxpc3RbaV0sIGkrKyk7KSB7XHJcblx0XHRcdC8vIGZ1bmN0aW9uIGNhbGxlZCBpbiBjb25kaXRpb25cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGZvcktleXMobGlzdCwgZikge1xyXG5cdFx0Zm9yRWFjaChsaXN0LCBmdW5jdGlvbiAoYXR0cnMsIGkpIHtcclxuXHRcdFx0cmV0dXJuIChhdHRycyA9IGF0dHJzICYmIGF0dHJzLmF0dHJzKSAmJlxyXG5cdFx0XHRcdGF0dHJzLmtleSAhPSBudWxsICYmXHJcblx0XHRcdFx0ZihhdHRycywgaSlcclxuXHRcdH0pXHJcblx0fVxyXG5cdC8vIFRoaXMgZnVuY3Rpb24gd2FzIGNhdXNpbmcgZGVvcHRzIGluIENocm9tZS5cclxuXHRmdW5jdGlvbiBkYXRhVG9TdHJpbmcoZGF0YSkge1xyXG5cdFx0Ly8gZGF0YS50b1N0cmluZygpIG1pZ2h0IHRocm93IG9yIHJldHVybiBudWxsIGlmIGRhdGEgaXMgdGhlIHJldHVyblxyXG5cdFx0Ly8gdmFsdWUgb2YgQ29uc29sZS5sb2cgaW4gc29tZSB2ZXJzaW9ucyBvZiBGaXJlZm94IChiZWhhdmlvciBkZXBlbmRzIG9uXHJcblx0XHQvLyB2ZXJzaW9uKVxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0aWYgKGRhdGEgIT0gbnVsbCAmJiBkYXRhLnRvU3RyaW5nKCkgIT0gbnVsbCkgcmV0dXJuIGRhdGFcclxuXHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0Ly8gc2lsZW50bHkgaWdub3JlIGVycm9yc1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIFwiXCJcclxuXHR9XHJcblxyXG5cdC8vIFRoaXMgZnVuY3Rpb24gd2FzIGNhdXNpbmcgZGVvcHRzIGluIENocm9tZS5cclxuXHRmdW5jdGlvbiBpbmplY3RUZXh0Tm9kZShwYXJlbnRFbGVtZW50LCBmaXJzdCwgaW5kZXgsIGRhdGEpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGluc2VydE5vZGUocGFyZW50RWxlbWVudCwgZmlyc3QsIGluZGV4KVxyXG5cdFx0XHRmaXJzdC5ub2RlVmFsdWUgPSBkYXRhXHJcblx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdC8vIElFIGVycm9uZW91c2x5IHRocm93cyBlcnJvciB3aGVuIGFwcGVuZGluZyBhbiBlbXB0eSB0ZXh0IG5vZGVcclxuXHRcdFx0Ly8gYWZ0ZXIgYSBudWxsXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBmbGF0dGVuKGxpc3QpIHtcclxuXHRcdC8vIHJlY3Vyc2l2ZWx5IGZsYXR0ZW4gYXJyYXlcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAoaXNBcnJheShsaXN0W2ldKSkge1xyXG5cdFx0XHRcdGxpc3QgPSBsaXN0LmNvbmNhdC5hcHBseShbXSwgbGlzdClcclxuXHRcdFx0XHQvLyBjaGVjayBjdXJyZW50IGluZGV4IGFnYWluIGFuZCBmbGF0dGVuIHVudGlsIHRoZXJlIGFyZSBubyBtb3JlXHJcblx0XHRcdFx0Ly8gbmVzdGVkIGFycmF5cyBhdCB0aGF0IGluZGV4XHJcblx0XHRcdFx0aS0tXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBsaXN0XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBpbnNlcnROb2RlKHBhcmVudEVsZW1lbnQsIG5vZGUsIGluZGV4KSB7XHJcblx0XHRwYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShub2RlLFxyXG5cdFx0XHRwYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbaW5kZXhdIHx8IG51bGwpXHJcblx0fVxyXG5cclxuXHR2YXIgREVMRVRJT04gPSAxXHJcblx0dmFyIElOU0VSVElPTiA9IDJcclxuXHR2YXIgTU9WRSA9IDNcclxuXHJcblx0ZnVuY3Rpb24gaGFuZGxlS2V5c0RpZmZlcihkYXRhLCBleGlzdGluZywgY2FjaGVkLCBwYXJlbnRFbGVtZW50KSB7XHJcblx0XHRmb3JLZXlzKGRhdGEsIGZ1bmN0aW9uIChrZXksIGkpIHtcclxuXHRcdFx0ZXhpc3Rpbmdba2V5ID0ga2V5LmtleV0gPSBleGlzdGluZ1trZXldID8ge1xyXG5cdFx0XHRcdGFjdGlvbjogTU9WRSxcclxuXHRcdFx0XHRpbmRleDogaSxcclxuXHRcdFx0XHRmcm9tOiBleGlzdGluZ1trZXldLmluZGV4LFxyXG5cdFx0XHRcdGVsZW1lbnQ6IGNhY2hlZC5ub2Rlc1tleGlzdGluZ1trZXldLmluZGV4XSB8fFxyXG5cdFx0XHRcdFx0JGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuXHRcdFx0fSA6IHthY3Rpb246IElOU0VSVElPTiwgaW5kZXg6IGl9XHJcblx0XHR9KVxyXG5cclxuXHRcdHZhciBhY3Rpb25zID0gW11cclxuXHRcdGZvciAodmFyIHByb3AgaW4gZXhpc3RpbmcpIHtcclxuXHRcdFx0aWYgKGhhc093bi5jYWxsKGV4aXN0aW5nLCBwcm9wKSkge1xyXG5cdFx0XHRcdGFjdGlvbnMucHVzaChleGlzdGluZ1twcm9wXSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBjaGFuZ2VzID0gYWN0aW9ucy5zb3J0KHNvcnRDaGFuZ2VzKVxyXG5cdFx0dmFyIG5ld0NhY2hlZCA9IG5ldyBBcnJheShjYWNoZWQubGVuZ3RoKVxyXG5cclxuXHRcdG5ld0NhY2hlZC5ub2RlcyA9IGNhY2hlZC5ub2Rlcy5zbGljZSgpXHJcblxyXG5cdFx0Zm9yRWFjaChjaGFuZ2VzLCBmdW5jdGlvbiAoY2hhbmdlKSB7XHJcblx0XHRcdHZhciBpbmRleCA9IGNoYW5nZS5pbmRleFxyXG5cdFx0XHRpZiAoY2hhbmdlLmFjdGlvbiA9PT0gREVMRVRJT04pIHtcclxuXHRcdFx0XHRjbGVhcihjYWNoZWRbaW5kZXhdLm5vZGVzLCBjYWNoZWRbaW5kZXhdKVxyXG5cdFx0XHRcdG5ld0NhY2hlZC5zcGxpY2UoaW5kZXgsIDEpXHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGNoYW5nZS5hY3Rpb24gPT09IElOU0VSVElPTikge1xyXG5cdFx0XHRcdHZhciBkdW1teSA9ICRkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcblx0XHRcdFx0ZHVtbXkua2V5ID0gZGF0YVtpbmRleF0uYXR0cnMua2V5XHJcblx0XHRcdFx0aW5zZXJ0Tm9kZShwYXJlbnRFbGVtZW50LCBkdW1teSwgaW5kZXgpXHJcblx0XHRcdFx0bmV3Q2FjaGVkLnNwbGljZShpbmRleCwgMCwge1xyXG5cdFx0XHRcdFx0YXR0cnM6IHtrZXk6IGRhdGFbaW5kZXhdLmF0dHJzLmtleX0sXHJcblx0XHRcdFx0XHRub2RlczogW2R1bW15XVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0bmV3Q2FjaGVkLm5vZGVzW2luZGV4XSA9IGR1bW15XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChjaGFuZ2UuYWN0aW9uID09PSBNT1ZFKSB7XHJcblx0XHRcdFx0dmFyIGNoYW5nZUVsZW1lbnQgPSBjaGFuZ2UuZWxlbWVudFxyXG5cdFx0XHRcdHZhciBtYXliZUNoYW5nZWQgPSBwYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbaW5kZXhdXHJcblx0XHRcdFx0aWYgKG1heWJlQ2hhbmdlZCAhPT0gY2hhbmdlRWxlbWVudCAmJiBjaGFuZ2VFbGVtZW50ICE9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRwYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShjaGFuZ2VFbGVtZW50LFxyXG5cdFx0XHRcdFx0XHRtYXliZUNoYW5nZWQgfHwgbnVsbClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bmV3Q2FjaGVkW2luZGV4XSA9IGNhY2hlZFtjaGFuZ2UuZnJvbV1cclxuXHRcdFx0XHRuZXdDYWNoZWQubm9kZXNbaW5kZXhdID0gY2hhbmdlRWxlbWVudFxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cclxuXHRcdHJldHVybiBuZXdDYWNoZWRcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGRpZmZLZXlzKGRhdGEsIGNhY2hlZCwgZXhpc3RpbmcsIHBhcmVudEVsZW1lbnQpIHtcclxuXHRcdHZhciBrZXlzRGlmZmVyID0gZGF0YS5sZW5ndGggIT09IGNhY2hlZC5sZW5ndGhcclxuXHJcblx0XHRpZiAoIWtleXNEaWZmZXIpIHtcclxuXHRcdFx0Zm9yS2V5cyhkYXRhLCBmdW5jdGlvbiAoYXR0cnMsIGkpIHtcclxuXHRcdFx0XHR2YXIgY2FjaGVkQ2VsbCA9IGNhY2hlZFtpXVxyXG5cdFx0XHRcdHJldHVybiBrZXlzRGlmZmVyID0gY2FjaGVkQ2VsbCAmJlxyXG5cdFx0XHRcdFx0Y2FjaGVkQ2VsbC5hdHRycyAmJlxyXG5cdFx0XHRcdFx0Y2FjaGVkQ2VsbC5hdHRycy5rZXkgIT09IGF0dHJzLmtleVxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChrZXlzRGlmZmVyKSB7XHJcblx0XHRcdHJldHVybiBoYW5kbGVLZXlzRGlmZmVyKGRhdGEsIGV4aXN0aW5nLCBjYWNoZWQsIHBhcmVudEVsZW1lbnQpXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gY2FjaGVkXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBkaWZmQXJyYXkoZGF0YSwgY2FjaGVkLCBub2Rlcykge1xyXG5cdFx0Ly8gZGlmZiB0aGUgYXJyYXkgaXRzZWxmXHJcblxyXG5cdFx0Ly8gdXBkYXRlIHRoZSBsaXN0IG9mIERPTSBub2RlcyBieSBjb2xsZWN0aW5nIHRoZSBub2RlcyBmcm9tIGVhY2ggaXRlbVxyXG5cdFx0Zm9yRWFjaChkYXRhLCBmdW5jdGlvbiAoXywgaSkge1xyXG5cdFx0XHRpZiAoY2FjaGVkW2ldICE9IG51bGwpIG5vZGVzLnB1c2guYXBwbHkobm9kZXMsIGNhY2hlZFtpXS5ub2RlcylcclxuXHRcdH0pXHJcblx0XHQvLyByZW1vdmUgaXRlbXMgZnJvbSB0aGUgZW5kIG9mIHRoZSBhcnJheSBpZiB0aGUgbmV3IGFycmF5IGlzIHNob3J0ZXJcclxuXHRcdC8vIHRoYW4gdGhlIG9sZCBvbmUuIGlmIGVycm9ycyBldmVyIGhhcHBlbiBoZXJlLCB0aGUgaXNzdWUgaXMgbW9zdFxyXG5cdFx0Ly8gbGlrZWx5IGEgYnVnIGluIHRoZSBjb25zdHJ1Y3Rpb24gb2YgdGhlIGBjYWNoZWRgIGRhdGEgc3RydWN0dXJlXHJcblx0XHQvLyBzb21ld2hlcmUgZWFybGllciBpbiB0aGUgcHJvZ3JhbVxyXG5cdFx0Zm9yRWFjaChjYWNoZWQubm9kZXMsIGZ1bmN0aW9uIChub2RlLCBpKSB7XHJcblx0XHRcdGlmIChub2RlLnBhcmVudE5vZGUgIT0gbnVsbCAmJiBub2Rlcy5pbmRleE9mKG5vZGUpIDwgMCkge1xyXG5cdFx0XHRcdGNsZWFyKFtub2RlXSwgW2NhY2hlZFtpXV0pXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblxyXG5cdFx0aWYgKGRhdGEubGVuZ3RoIDwgY2FjaGVkLmxlbmd0aCkgY2FjaGVkLmxlbmd0aCA9IGRhdGEubGVuZ3RoXHJcblx0XHRjYWNoZWQubm9kZXMgPSBub2Rlc1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYnVpbGRBcnJheUtleXMoZGF0YSkge1xyXG5cdFx0dmFyIGd1aWQgPSAwXHJcblx0XHRmb3JLZXlzKGRhdGEsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0Zm9yRWFjaChkYXRhLCBmdW5jdGlvbiAoYXR0cnMpIHtcclxuXHRcdFx0XHRpZiAoKGF0dHJzID0gYXR0cnMgJiYgYXR0cnMuYXR0cnMpICYmIGF0dHJzLmtleSA9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRhdHRycy5rZXkgPSBcIl9fbWl0aHJpbF9fXCIgKyBndWlkKytcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdHJldHVybiAxXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaXNEaWZmZXJlbnRFbm91Z2goZGF0YSwgY2FjaGVkLCBkYXRhQXR0cktleXMpIHtcclxuXHRcdGlmIChkYXRhLnRhZyAhPT0gY2FjaGVkLnRhZykgcmV0dXJuIHRydWVcclxuXHJcblx0XHRpZiAoZGF0YUF0dHJLZXlzLnNvcnQoKS5qb2luKCkgIT09XHJcblx0XHRcdFx0T2JqZWN0LmtleXMoY2FjaGVkLmF0dHJzKS5zb3J0KCkuam9pbigpKSB7XHJcblx0XHRcdHJldHVybiB0cnVlXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGRhdGEuYXR0cnMuaWQgIT09IGNhY2hlZC5hdHRycy5pZCkge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChkYXRhLmF0dHJzLmtleSAhPT0gY2FjaGVkLmF0dHJzLmtleSkge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChtLnJlZHJhdy5zdHJhdGVneSgpID09PSBcImFsbFwiKSB7XHJcblx0XHRcdHJldHVybiAhY2FjaGVkLmNvbmZpZ0NvbnRleHQgfHwgY2FjaGVkLmNvbmZpZ0NvbnRleHQucmV0YWluICE9PSB0cnVlXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKG0ucmVkcmF3LnN0cmF0ZWd5KCkgPT09IFwiZGlmZlwiKSB7XHJcblx0XHRcdHJldHVybiBjYWNoZWQuY29uZmlnQ29udGV4dCAmJiBjYWNoZWQuY29uZmlnQ29udGV4dC5yZXRhaW4gPT09IGZhbHNlXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBtYXliZVJlY3JlYXRlT2JqZWN0KGRhdGEsIGNhY2hlZCwgZGF0YUF0dHJLZXlzKSB7XHJcblx0XHQvLyBpZiBhbiBlbGVtZW50IGlzIGRpZmZlcmVudCBlbm91Z2ggZnJvbSB0aGUgb25lIGluIGNhY2hlLCByZWNyZWF0ZSBpdFxyXG5cdFx0aWYgKGlzRGlmZmVyZW50RW5vdWdoKGRhdGEsIGNhY2hlZCwgZGF0YUF0dHJLZXlzKSkge1xyXG5cdFx0XHRpZiAoY2FjaGVkLm5vZGVzLmxlbmd0aCkgY2xlYXIoY2FjaGVkLm5vZGVzKVxyXG5cclxuXHRcdFx0aWYgKGNhY2hlZC5jb25maWdDb250ZXh0ICYmXHJcblx0XHRcdFx0XHRpc0Z1bmN0aW9uKGNhY2hlZC5jb25maWdDb250ZXh0Lm9udW5sb2FkKSkge1xyXG5cdFx0XHRcdGNhY2hlZC5jb25maWdDb250ZXh0Lm9udW5sb2FkKClcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGNhY2hlZC5jb250cm9sbGVycykge1xyXG5cdFx0XHRcdGZvckVhY2goY2FjaGVkLmNvbnRyb2xsZXJzLCBmdW5jdGlvbiAoY29udHJvbGxlcikge1xyXG5cdFx0XHRcdFx0aWYgKGNvbnRyb2xsZXIub251bmxvYWQpIHtcclxuXHRcdFx0XHRcdFx0Y29udHJvbGxlci5vbnVubG9hZCh7cHJldmVudERlZmF1bHQ6IG5vb3B9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGdldE9iamVjdE5hbWVzcGFjZShkYXRhLCBuYW1lc3BhY2UpIHtcclxuXHRcdGlmIChkYXRhLmF0dHJzLnhtbG5zKSByZXR1cm4gZGF0YS5hdHRycy54bWxuc1xyXG5cdFx0aWYgKGRhdGEudGFnID09PSBcInN2Z1wiKSByZXR1cm4gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcblx0XHRpZiAoZGF0YS50YWcgPT09IFwibWF0aFwiKSByZXR1cm4gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MXCJcclxuXHRcdHJldHVybiBuYW1lc3BhY2VcclxuXHR9XHJcblxyXG5cdHZhciBwZW5kaW5nUmVxdWVzdHMgPSAwXHJcblx0bS5zdGFydENvbXB1dGF0aW9uID0gZnVuY3Rpb24gKCkgeyBwZW5kaW5nUmVxdWVzdHMrKyB9XHJcblx0bS5lbmRDb21wdXRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmIChwZW5kaW5nUmVxdWVzdHMgPiAxKSB7XHJcblx0XHRcdHBlbmRpbmdSZXF1ZXN0cy0tXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRwZW5kaW5nUmVxdWVzdHMgPSAwXHJcblx0XHRcdG0ucmVkcmF3KClcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHVubG9hZENhY2hlZENvbnRyb2xsZXJzKGNhY2hlZCwgdmlld3MsIGNvbnRyb2xsZXJzKSB7XHJcblx0XHRpZiAoY29udHJvbGxlcnMubGVuZ3RoKSB7XHJcblx0XHRcdGNhY2hlZC52aWV3cyA9IHZpZXdzXHJcblx0XHRcdGNhY2hlZC5jb250cm9sbGVycyA9IGNvbnRyb2xsZXJzXHJcblx0XHRcdGZvckVhY2goY29udHJvbGxlcnMsIGZ1bmN0aW9uIChjb250cm9sbGVyKSB7XHJcblx0XHRcdFx0aWYgKGNvbnRyb2xsZXIub251bmxvYWQgJiYgY29udHJvbGxlci5vbnVubG9hZC4kb2xkKSB7XHJcblx0XHRcdFx0XHRjb250cm9sbGVyLm9udW5sb2FkID0gY29udHJvbGxlci5vbnVubG9hZC4kb2xkXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAocGVuZGluZ1JlcXVlc3RzICYmIGNvbnRyb2xsZXIub251bmxvYWQpIHtcclxuXHRcdFx0XHRcdHZhciBvbnVubG9hZCA9IGNvbnRyb2xsZXIub251bmxvYWRcclxuXHRcdFx0XHRcdGNvbnRyb2xsZXIub251bmxvYWQgPSBub29wXHJcblx0XHRcdFx0XHRjb250cm9sbGVyLm9udW5sb2FkLiRvbGQgPSBvbnVubG9hZFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHNjaGVkdWxlQ29uZmlnc1RvQmVDYWxsZWQoY29uZmlncywgZGF0YSwgbm9kZSwgaXNOZXcsIGNhY2hlZCkge1xyXG5cdFx0Ly8gc2NoZWR1bGUgY29uZmlncyB0byBiZSBjYWxsZWQuIFRoZXkgYXJlIGNhbGxlZCBhZnRlciBgYnVpbGRgIGZpbmlzaGVzXHJcblx0XHQvLyBydW5uaW5nXHJcblx0XHRpZiAoaXNGdW5jdGlvbihkYXRhLmF0dHJzLmNvbmZpZykpIHtcclxuXHRcdFx0dmFyIGNvbnRleHQgPSBjYWNoZWQuY29uZmlnQ29udGV4dCA9IGNhY2hlZC5jb25maWdDb250ZXh0IHx8IHt9XHJcblxyXG5cdFx0XHQvLyBiaW5kXHJcblx0XHRcdGNvbmZpZ3MucHVzaChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0cmV0dXJuIGRhdGEuYXR0cnMuY29uZmlnLmNhbGwoZGF0YSwgbm9kZSwgIWlzTmV3LCBjb250ZXh0LFxyXG5cdFx0XHRcdFx0Y2FjaGVkKVxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYnVpbGRVcGRhdGVkTm9kZShcclxuXHRcdGNhY2hlZCxcclxuXHRcdGRhdGEsXHJcblx0XHRlZGl0YWJsZSxcclxuXHRcdGhhc0tleXMsXHJcblx0XHRuYW1lc3BhY2UsXHJcblx0XHR2aWV3cyxcclxuXHRcdGNvbmZpZ3MsXHJcblx0XHRjb250cm9sbGVyc1xyXG5cdCkge1xyXG5cdFx0dmFyIG5vZGUgPSBjYWNoZWQubm9kZXNbMF1cclxuXHJcblx0XHRpZiAoaGFzS2V5cykge1xyXG5cdFx0XHRzZXRBdHRyaWJ1dGVzKG5vZGUsIGRhdGEudGFnLCBkYXRhLmF0dHJzLCBjYWNoZWQuYXR0cnMsIG5hbWVzcGFjZSlcclxuXHRcdH1cclxuXHJcblx0XHRjYWNoZWQuY2hpbGRyZW4gPSBidWlsZChcclxuXHRcdFx0bm9kZSxcclxuXHRcdFx0ZGF0YS50YWcsXHJcblx0XHRcdHVuZGVmaW5lZCxcclxuXHRcdFx0dW5kZWZpbmVkLFxyXG5cdFx0XHRkYXRhLmNoaWxkcmVuLFxyXG5cdFx0XHRjYWNoZWQuY2hpbGRyZW4sXHJcblx0XHRcdGZhbHNlLFxyXG5cdFx0XHQwLFxyXG5cdFx0XHRkYXRhLmF0dHJzLmNvbnRlbnRlZGl0YWJsZSA/IG5vZGUgOiBlZGl0YWJsZSxcclxuXHRcdFx0bmFtZXNwYWNlLFxyXG5cdFx0XHRjb25maWdzXHJcblx0XHQpXHJcblxyXG5cdFx0Y2FjaGVkLm5vZGVzLmludGFjdCA9IHRydWVcclxuXHJcblx0XHRpZiAoY29udHJvbGxlcnMubGVuZ3RoKSB7XHJcblx0XHRcdGNhY2hlZC52aWV3cyA9IHZpZXdzXHJcblx0XHRcdGNhY2hlZC5jb250cm9sbGVycyA9IGNvbnRyb2xsZXJzXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG5vZGVcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGhhbmRsZU5vbmV4aXN0ZW50Tm9kZXMoZGF0YSwgcGFyZW50RWxlbWVudCwgaW5kZXgpIHtcclxuXHRcdHZhciBub2Rlc1xyXG5cdFx0aWYgKGRhdGEuJHRydXN0ZWQpIHtcclxuXHRcdFx0bm9kZXMgPSBpbmplY3RIVE1MKHBhcmVudEVsZW1lbnQsIGluZGV4LCBkYXRhKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bm9kZXMgPSBbJGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRhdGEpXVxyXG5cdFx0XHRpZiAoIShwYXJlbnRFbGVtZW50Lm5vZGVOYW1lIGluIHZvaWRFbGVtZW50cykpIHtcclxuXHRcdFx0XHRpbnNlcnROb2RlKHBhcmVudEVsZW1lbnQsIG5vZGVzWzBdLCBpbmRleClcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBjYWNoZWRcclxuXHJcblx0XHRpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIgfHxcclxuXHRcdFx0XHR0eXBlb2YgZGF0YSA9PT0gXCJudW1iZXJcIiB8fFxyXG5cdFx0XHRcdHR5cGVvZiBkYXRhID09PSBcImJvb2xlYW5cIikge1xyXG5cdFx0XHRjYWNoZWQgPSBuZXcgZGF0YS5jb25zdHJ1Y3RvcihkYXRhKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y2FjaGVkID0gZGF0YVxyXG5cdFx0fVxyXG5cclxuXHRcdGNhY2hlZC5ub2RlcyA9IG5vZGVzXHJcblx0XHRyZXR1cm4gY2FjaGVkXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiByZWF0dGFjaE5vZGVzKFxyXG5cdFx0ZGF0YSxcclxuXHRcdGNhY2hlZCxcclxuXHRcdHBhcmVudEVsZW1lbnQsXHJcblx0XHRlZGl0YWJsZSxcclxuXHRcdGluZGV4LFxyXG5cdFx0cGFyZW50VGFnXHJcblx0KSB7XHJcblx0XHR2YXIgbm9kZXMgPSBjYWNoZWQubm9kZXNcclxuXHRcdGlmICghZWRpdGFibGUgfHwgZWRpdGFibGUgIT09ICRkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XHJcblx0XHRcdGlmIChkYXRhLiR0cnVzdGVkKSB7XHJcblx0XHRcdFx0Y2xlYXIobm9kZXMsIGNhY2hlZClcclxuXHRcdFx0XHRub2RlcyA9IGluamVjdEhUTUwocGFyZW50RWxlbWVudCwgaW5kZXgsIGRhdGEpXHJcblx0XHRcdH0gZWxzZSBpZiAocGFyZW50VGFnID09PSBcInRleHRhcmVhXCIpIHtcclxuXHRcdFx0XHQvLyA8dGV4dGFyZWE+IHVzZXMgYHZhbHVlYCBpbnN0ZWFkIG9mIGBub2RlVmFsdWVgLlxyXG5cdFx0XHRcdHBhcmVudEVsZW1lbnQudmFsdWUgPSBkYXRhXHJcblx0XHRcdH0gZWxzZSBpZiAoZWRpdGFibGUpIHtcclxuXHRcdFx0XHQvLyBjb250ZW50ZWRpdGFibGUgbm9kZXMgdXNlIGBpbm5lckhUTUxgIGluc3RlYWQgb2YgYG5vZGVWYWx1ZWAuXHJcblx0XHRcdFx0ZWRpdGFibGUuaW5uZXJIVE1MID0gZGF0YVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIHdhcyBhIHRydXN0ZWQgc3RyaW5nXHJcblx0XHRcdFx0aWYgKG5vZGVzWzBdLm5vZGVUeXBlID09PSAxIHx8IG5vZGVzLmxlbmd0aCA+IDEgfHxcclxuXHRcdFx0XHRcdFx0KG5vZGVzWzBdLm5vZGVWYWx1ZS50cmltICYmXHJcblx0XHRcdFx0XHRcdFx0IW5vZGVzWzBdLm5vZGVWYWx1ZS50cmltKCkpKSB7XHJcblx0XHRcdFx0XHRjbGVhcihjYWNoZWQubm9kZXMsIGNhY2hlZClcclxuXHRcdFx0XHRcdG5vZGVzID0gWyRkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhKV1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGluamVjdFRleHROb2RlKHBhcmVudEVsZW1lbnQsIG5vZGVzWzBdLCBpbmRleCwgZGF0YSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Y2FjaGVkID0gbmV3IGRhdGEuY29uc3RydWN0b3IoZGF0YSlcclxuXHRcdGNhY2hlZC5ub2RlcyA9IG5vZGVzXHJcblx0XHRyZXR1cm4gY2FjaGVkXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBoYW5kbGVUZXh0Tm9kZShcclxuXHRcdGNhY2hlZCxcclxuXHRcdGRhdGEsXHJcblx0XHRpbmRleCxcclxuXHRcdHBhcmVudEVsZW1lbnQsXHJcblx0XHRzaG91bGRSZWF0dGFjaCxcclxuXHRcdGVkaXRhYmxlLFxyXG5cdFx0cGFyZW50VGFnXHJcblx0KSB7XHJcblx0XHRpZiAoIWNhY2hlZC5ub2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0cmV0dXJuIGhhbmRsZU5vbmV4aXN0ZW50Tm9kZXMoZGF0YSwgcGFyZW50RWxlbWVudCwgaW5kZXgpXHJcblx0XHR9IGVsc2UgaWYgKGNhY2hlZC52YWx1ZU9mKCkgIT09IGRhdGEudmFsdWVPZigpIHx8IHNob3VsZFJlYXR0YWNoKSB7XHJcblx0XHRcdHJldHVybiByZWF0dGFjaE5vZGVzKGRhdGEsIGNhY2hlZCwgcGFyZW50RWxlbWVudCwgZWRpdGFibGUsIGluZGV4LFxyXG5cdFx0XHRcdHBhcmVudFRhZylcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiAoY2FjaGVkLm5vZGVzLmludGFjdCA9IHRydWUsIGNhY2hlZClcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGdldFN1YkFycmF5Q291bnQoaXRlbSkge1xyXG5cdFx0aWYgKGl0ZW0uJHRydXN0ZWQpIHtcclxuXHRcdFx0Ly8gZml4IG9mZnNldCBvZiBuZXh0IGVsZW1lbnQgaWYgaXRlbSB3YXMgYSB0cnVzdGVkIHN0cmluZyB3LyBtb3JlXHJcblx0XHRcdC8vIHRoYW4gb25lIGh0bWwgZWxlbWVudFxyXG5cdFx0XHQvLyB0aGUgZmlyc3QgY2xhdXNlIGluIHRoZSByZWdleHAgbWF0Y2hlcyBlbGVtZW50c1xyXG5cdFx0XHQvLyB0aGUgc2Vjb25kIGNsYXVzZSAoYWZ0ZXIgdGhlIHBpcGUpIG1hdGNoZXMgdGV4dCBub2Rlc1xyXG5cdFx0XHR2YXIgbWF0Y2ggPSBpdGVtLm1hdGNoKC88W15cXC9dfFxcPlxccypbXjxdL2cpXHJcblx0XHRcdGlmIChtYXRjaCAhPSBudWxsKSByZXR1cm4gbWF0Y2gubGVuZ3RoXHJcblx0XHR9IGVsc2UgaWYgKGlzQXJyYXkoaXRlbSkpIHtcclxuXHRcdFx0cmV0dXJuIGl0ZW0ubGVuZ3RoXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gMVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYnVpbGRBcnJheShcclxuXHRcdGRhdGEsXHJcblx0XHRjYWNoZWQsXHJcblx0XHRwYXJlbnRFbGVtZW50LFxyXG5cdFx0aW5kZXgsXHJcblx0XHRwYXJlbnRUYWcsXHJcblx0XHRzaG91bGRSZWF0dGFjaCxcclxuXHRcdGVkaXRhYmxlLFxyXG5cdFx0bmFtZXNwYWNlLFxyXG5cdFx0Y29uZmlnc1xyXG5cdCkge1xyXG5cdFx0ZGF0YSA9IGZsYXR0ZW4oZGF0YSlcclxuXHRcdHZhciBub2RlcyA9IFtdXHJcblx0XHR2YXIgaW50YWN0ID0gY2FjaGVkLmxlbmd0aCA9PT0gZGF0YS5sZW5ndGhcclxuXHRcdHZhciBzdWJBcnJheUNvdW50ID0gMFxyXG5cclxuXHRcdC8vIGtleXMgYWxnb3JpdGhtOiBzb3J0IGVsZW1lbnRzIHdpdGhvdXQgcmVjcmVhdGluZyB0aGVtIGlmIGtleXMgYXJlXHJcblx0XHQvLyBwcmVzZW50XHJcblx0XHQvL1xyXG5cdFx0Ly8gMSkgY3JlYXRlIGEgbWFwIG9mIGFsbCBleGlzdGluZyBrZXlzLCBhbmQgbWFyayBhbGwgZm9yIGRlbGV0aW9uXHJcblx0XHQvLyAyKSBhZGQgbmV3IGtleXMgdG8gbWFwIGFuZCBtYXJrIHRoZW0gZm9yIGFkZGl0aW9uXHJcblx0XHQvLyAzKSBpZiBrZXkgZXhpc3RzIGluIG5ldyBsaXN0LCBjaGFuZ2UgYWN0aW9uIGZyb20gZGVsZXRpb24gdG8gYSBtb3ZlXHJcblx0XHQvLyA0KSBmb3IgZWFjaCBrZXksIGhhbmRsZSBpdHMgY29ycmVzcG9uZGluZyBhY3Rpb24gYXMgbWFya2VkIGluXHJcblx0XHQvLyAgICBwcmV2aW91cyBzdGVwc1xyXG5cclxuXHRcdHZhciBleGlzdGluZyA9IHt9XHJcblx0XHR2YXIgc2hvdWxkTWFpbnRhaW5JZGVudGl0aWVzID0gZmFsc2VcclxuXHJcblx0XHRmb3JLZXlzKGNhY2hlZCwgZnVuY3Rpb24gKGF0dHJzLCBpKSB7XHJcblx0XHRcdHNob3VsZE1haW50YWluSWRlbnRpdGllcyA9IHRydWVcclxuXHRcdFx0ZXhpc3RpbmdbY2FjaGVkW2ldLmF0dHJzLmtleV0gPSB7YWN0aW9uOiBERUxFVElPTiwgaW5kZXg6IGl9XHJcblx0XHR9KVxyXG5cclxuXHRcdGJ1aWxkQXJyYXlLZXlzKGRhdGEpXHJcblx0XHRpZiAoc2hvdWxkTWFpbnRhaW5JZGVudGl0aWVzKSB7XHJcblx0XHRcdGNhY2hlZCA9IGRpZmZLZXlzKGRhdGEsIGNhY2hlZCwgZXhpc3RpbmcsIHBhcmVudEVsZW1lbnQpXHJcblx0XHR9XHJcblx0XHQvLyBlbmQga2V5IGFsZ29yaXRobVxyXG5cclxuXHRcdHZhciBjYWNoZUNvdW50ID0gMFxyXG5cdFx0Ly8gZmFzdGVyIGV4cGxpY2l0bHkgd3JpdHRlblxyXG5cdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IGRhdGEubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0Ly8gZGlmZiBlYWNoIGl0ZW0gaW4gdGhlIGFycmF5XHJcblx0XHRcdHZhciBpdGVtID0gYnVpbGQoXHJcblx0XHRcdFx0cGFyZW50RWxlbWVudCxcclxuXHRcdFx0XHRwYXJlbnRUYWcsXHJcblx0XHRcdFx0Y2FjaGVkLFxyXG5cdFx0XHRcdGluZGV4LFxyXG5cdFx0XHRcdGRhdGFbaV0sXHJcblx0XHRcdFx0Y2FjaGVkW2NhY2hlQ291bnRdLFxyXG5cdFx0XHRcdHNob3VsZFJlYXR0YWNoLFxyXG5cdFx0XHRcdGluZGV4ICsgc3ViQXJyYXlDb3VudCB8fCBzdWJBcnJheUNvdW50LFxyXG5cdFx0XHRcdGVkaXRhYmxlLFxyXG5cdFx0XHRcdG5hbWVzcGFjZSxcclxuXHRcdFx0XHRjb25maWdzKVxyXG5cclxuXHRcdFx0aWYgKGl0ZW0gIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdGludGFjdCA9IGludGFjdCAmJiBpdGVtLm5vZGVzLmludGFjdFxyXG5cdFx0XHRcdHN1YkFycmF5Q291bnQgKz0gZ2V0U3ViQXJyYXlDb3VudChpdGVtKVxyXG5cdFx0XHRcdGNhY2hlZFtjYWNoZUNvdW50KytdID0gaXRlbVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCFpbnRhY3QpIGRpZmZBcnJheShkYXRhLCBjYWNoZWQsIG5vZGVzKVxyXG5cdFx0cmV0dXJuIGNhY2hlZFxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gbWFrZUNhY2hlKGRhdGEsIGNhY2hlZCwgaW5kZXgsIHBhcmVudEluZGV4LCBwYXJlbnRDYWNoZSkge1xyXG5cdFx0aWYgKGNhY2hlZCAhPSBudWxsKSB7XHJcblx0XHRcdGlmICh0eXBlLmNhbGwoY2FjaGVkKSA9PT0gdHlwZS5jYWxsKGRhdGEpKSByZXR1cm4gY2FjaGVkXHJcblxyXG5cdFx0XHRpZiAocGFyZW50Q2FjaGUgJiYgcGFyZW50Q2FjaGUubm9kZXMpIHtcclxuXHRcdFx0XHR2YXIgb2Zmc2V0ID0gaW5kZXggLSBwYXJlbnRJbmRleFxyXG5cdFx0XHRcdHZhciBlbmQgPSBvZmZzZXQgKyAoaXNBcnJheShkYXRhKSA/IGRhdGEgOiBjYWNoZWQubm9kZXMpLmxlbmd0aFxyXG5cdFx0XHRcdGNsZWFyKFxyXG5cdFx0XHRcdFx0cGFyZW50Q2FjaGUubm9kZXMuc2xpY2Uob2Zmc2V0LCBlbmQpLFxyXG5cdFx0XHRcdFx0cGFyZW50Q2FjaGUuc2xpY2Uob2Zmc2V0LCBlbmQpKVxyXG5cdFx0XHR9IGVsc2UgaWYgKGNhY2hlZC5ub2Rlcykge1xyXG5cdFx0XHRcdGNsZWFyKGNhY2hlZC5ub2RlcywgY2FjaGVkKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Y2FjaGVkID0gbmV3IGRhdGEuY29uc3RydWN0b3IoKVxyXG5cdFx0Ly8gaWYgY29uc3RydWN0b3IgY3JlYXRlcyBhIHZpcnR1YWwgZG9tIGVsZW1lbnQsIHVzZSBhIGJsYW5rIG9iamVjdCBhc1xyXG5cdFx0Ly8gdGhlIGJhc2UgY2FjaGVkIG5vZGUgaW5zdGVhZCBvZiBjb3B5aW5nIHRoZSB2aXJ0dWFsIGVsICgjMjc3KVxyXG5cdFx0aWYgKGNhY2hlZC50YWcpIGNhY2hlZCA9IHt9XHJcblx0XHRjYWNoZWQubm9kZXMgPSBbXVxyXG5cdFx0cmV0dXJuIGNhY2hlZFxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gY29uc3RydWN0Tm9kZShkYXRhLCBuYW1lc3BhY2UpIHtcclxuXHRcdGlmIChkYXRhLmF0dHJzLmlzKSB7XHJcblx0XHRcdGlmIChuYW1lc3BhY2UgPT0gbnVsbCkge1xyXG5cdFx0XHRcdHJldHVybiAkZG9jdW1lbnQuY3JlYXRlRWxlbWVudChkYXRhLnRhZywgZGF0YS5hdHRycy5pcylcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gJGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2UsIGRhdGEudGFnLFxyXG5cdFx0XHRcdFx0ZGF0YS5hdHRycy5pcylcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmIChuYW1lc3BhY2UgPT0gbnVsbCkge1xyXG5cdFx0XHRyZXR1cm4gJGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZGF0YS50YWcpXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gJGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2UsIGRhdGEudGFnKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gY29uc3RydWN0QXR0cnMoZGF0YSwgbm9kZSwgbmFtZXNwYWNlLCBoYXNLZXlzKSB7XHJcblx0XHRpZiAoaGFzS2V5cykge1xyXG5cdFx0XHRyZXR1cm4gc2V0QXR0cmlidXRlcyhub2RlLCBkYXRhLnRhZywgZGF0YS5hdHRycywge30sIG5hbWVzcGFjZSlcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBkYXRhLmF0dHJzXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjb25zdHJ1Y3RDaGlsZHJlbihcclxuXHRcdGRhdGEsXHJcblx0XHRub2RlLFxyXG5cdFx0Y2FjaGVkLFxyXG5cdFx0ZWRpdGFibGUsXHJcblx0XHRuYW1lc3BhY2UsXHJcblx0XHRjb25maWdzXHJcblx0KSB7XHJcblx0XHRpZiAoZGF0YS5jaGlsZHJlbiAhPSBudWxsICYmIGRhdGEuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRyZXR1cm4gYnVpbGQoXHJcblx0XHRcdFx0bm9kZSxcclxuXHRcdFx0XHRkYXRhLnRhZyxcclxuXHRcdFx0XHR1bmRlZmluZWQsXHJcblx0XHRcdFx0dW5kZWZpbmVkLFxyXG5cdFx0XHRcdGRhdGEuY2hpbGRyZW4sXHJcblx0XHRcdFx0Y2FjaGVkLmNoaWxkcmVuLFxyXG5cdFx0XHRcdHRydWUsXHJcblx0XHRcdFx0MCxcclxuXHRcdFx0XHRkYXRhLmF0dHJzLmNvbnRlbnRlZGl0YWJsZSA/IG5vZGUgOiBlZGl0YWJsZSxcclxuXHRcdFx0XHRuYW1lc3BhY2UsXHJcblx0XHRcdFx0Y29uZmlncylcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBkYXRhLmNoaWxkcmVuXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiByZWNvbnN0cnVjdENhY2hlZChcclxuXHRcdGRhdGEsXHJcblx0XHRhdHRycyxcclxuXHRcdGNoaWxkcmVuLFxyXG5cdFx0bm9kZSxcclxuXHRcdG5hbWVzcGFjZSxcclxuXHRcdHZpZXdzLFxyXG5cdFx0Y29udHJvbGxlcnNcclxuXHQpIHtcclxuXHRcdHZhciBjYWNoZWQgPSB7XHJcblx0XHRcdHRhZzogZGF0YS50YWcsXHJcblx0XHRcdGF0dHJzOiBhdHRycyxcclxuXHRcdFx0Y2hpbGRyZW46IGNoaWxkcmVuLFxyXG5cdFx0XHRub2RlczogW25vZGVdXHJcblx0XHR9XHJcblxyXG5cdFx0dW5sb2FkQ2FjaGVkQ29udHJvbGxlcnMoY2FjaGVkLCB2aWV3cywgY29udHJvbGxlcnMpXHJcblxyXG5cdFx0aWYgKGNhY2hlZC5jaGlsZHJlbiAmJiAhY2FjaGVkLmNoaWxkcmVuLm5vZGVzKSB7XHJcblx0XHRcdGNhY2hlZC5jaGlsZHJlbi5ub2RlcyA9IFtdXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gZWRnZSBjYXNlOiBzZXR0aW5nIHZhbHVlIG9uIDxzZWxlY3Q+IGRvZXNuJ3Qgd29yayBiZWZvcmUgY2hpbGRyZW5cclxuXHRcdC8vIGV4aXN0LCBzbyBzZXQgaXQgYWdhaW4gYWZ0ZXIgY2hpbGRyZW4gaGF2ZSBiZWVuIGNyZWF0ZWRcclxuXHRcdGlmIChkYXRhLnRhZyA9PT0gXCJzZWxlY3RcIiAmJiBcInZhbHVlXCIgaW4gZGF0YS5hdHRycykge1xyXG5cdFx0XHRzZXRBdHRyaWJ1dGVzKG5vZGUsIGRhdGEudGFnLCB7dmFsdWU6IGRhdGEuYXR0cnMudmFsdWV9LCB7fSxcclxuXHRcdFx0XHRuYW1lc3BhY2UpXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGNhY2hlZFxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZ2V0Q29udHJvbGxlcih2aWV3cywgdmlldywgY2FjaGVkQ29udHJvbGxlcnMsIGNvbnRyb2xsZXIpIHtcclxuXHRcdHZhciBjb250cm9sbGVySW5kZXhcclxuXHJcblx0XHRpZiAobS5yZWRyYXcuc3RyYXRlZ3koKSA9PT0gXCJkaWZmXCIgJiYgdmlld3MpIHtcclxuXHRcdFx0Y29udHJvbGxlckluZGV4ID0gdmlld3MuaW5kZXhPZih2aWV3KVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29udHJvbGxlckluZGV4ID0gLTFcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoY29udHJvbGxlckluZGV4ID4gLTEpIHtcclxuXHRcdFx0cmV0dXJuIGNhY2hlZENvbnRyb2xsZXJzW2NvbnRyb2xsZXJJbmRleF1cclxuXHRcdH0gZWxzZSBpZiAoaXNGdW5jdGlvbihjb250cm9sbGVyKSkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IGNvbnRyb2xsZXIoKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIHt9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR2YXIgdW5sb2FkZXJzID0gW11cclxuXHJcblx0ZnVuY3Rpb24gdXBkYXRlTGlzdHModmlld3MsIGNvbnRyb2xsZXJzLCB2aWV3LCBjb250cm9sbGVyKSB7XHJcblx0XHRpZiAoY29udHJvbGxlci5vbnVubG9hZCAhPSBudWxsICYmXHJcblx0XHRcdFx0dW5sb2FkZXJzLm1hcChmdW5jdGlvbiAodSkgeyByZXR1cm4gdS5oYW5kbGVyIH0pXHJcblx0XHRcdFx0XHQuaW5kZXhPZihjb250cm9sbGVyLm9udW5sb2FkKSA8IDApIHtcclxuXHRcdFx0dW5sb2FkZXJzLnB1c2goe1xyXG5cdFx0XHRcdGNvbnRyb2xsZXI6IGNvbnRyb2xsZXIsXHJcblx0XHRcdFx0aGFuZGxlcjogY29udHJvbGxlci5vbnVubG9hZFxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cclxuXHRcdHZpZXdzLnB1c2godmlldylcclxuXHRcdGNvbnRyb2xsZXJzLnB1c2goY29udHJvbGxlcilcclxuXHR9XHJcblxyXG5cdHZhciBmb3JjaW5nID0gZmFsc2VcclxuXHRmdW5jdGlvbiBjaGVja1ZpZXcoXHJcblx0XHRkYXRhLFxyXG5cdFx0dmlldyxcclxuXHRcdGNhY2hlZCxcclxuXHRcdGNhY2hlZENvbnRyb2xsZXJzLFxyXG5cdFx0Y29udHJvbGxlcnMsXHJcblx0XHR2aWV3c1xyXG5cdCkge1xyXG5cdFx0dmFyIGNvbnRyb2xsZXIgPSBnZXRDb250cm9sbGVyKFxyXG5cdFx0XHRjYWNoZWQudmlld3MsXHJcblx0XHRcdHZpZXcsXHJcblx0XHRcdGNhY2hlZENvbnRyb2xsZXJzLFxyXG5cdFx0XHRkYXRhLmNvbnRyb2xsZXIpXHJcblxyXG5cdFx0dmFyIGtleSA9IGRhdGEgJiYgZGF0YS5hdHRycyAmJiBkYXRhLmF0dHJzLmtleVxyXG5cclxuXHRcdGlmIChwZW5kaW5nUmVxdWVzdHMgPT09IDAgfHxcclxuXHRcdFx0XHRmb3JjaW5nIHx8XHJcblx0XHRcdFx0Y2FjaGVkQ29udHJvbGxlcnMgJiZcclxuXHRcdFx0XHRcdGNhY2hlZENvbnRyb2xsZXJzLmluZGV4T2YoY29udHJvbGxlcikgPiAtMSkge1xyXG5cdFx0XHRkYXRhID0gZGF0YS52aWV3KGNvbnRyb2xsZXIpXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRkYXRhID0ge3RhZzogXCJwbGFjZWhvbGRlclwifVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChkYXRhLnN1YnRyZWUgPT09IFwicmV0YWluXCIpIHJldHVybiBkYXRhXHJcblx0XHRkYXRhLmF0dHJzID0gZGF0YS5hdHRycyB8fCB7fVxyXG5cdFx0ZGF0YS5hdHRycy5rZXkgPSBrZXlcclxuXHRcdHVwZGF0ZUxpc3RzKHZpZXdzLCBjb250cm9sbGVycywgdmlldywgY29udHJvbGxlcilcclxuXHRcdHJldHVybiBkYXRhXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBtYXJrVmlld3MoZGF0YSwgY2FjaGVkLCB2aWV3cywgY29udHJvbGxlcnMpIHtcclxuXHRcdHZhciBjYWNoZWRDb250cm9sbGVycyA9IGNhY2hlZCAmJiBjYWNoZWQuY29udHJvbGxlcnNcclxuXHJcblx0XHR3aGlsZSAoZGF0YS52aWV3ICE9IG51bGwpIHtcclxuXHRcdFx0ZGF0YSA9IGNoZWNrVmlldyhcclxuXHRcdFx0XHRkYXRhLFxyXG5cdFx0XHRcdGRhdGEudmlldy4kb3JpZ2luYWwgfHwgZGF0YS52aWV3LFxyXG5cdFx0XHRcdGNhY2hlZCxcclxuXHRcdFx0XHRjYWNoZWRDb250cm9sbGVycyxcclxuXHRcdFx0XHRjb250cm9sbGVycyxcclxuXHRcdFx0XHR2aWV3cylcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZGF0YVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYnVpbGRPYmplY3QoIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LXN0YXRlbWVudHNcclxuXHRcdGRhdGEsXHJcblx0XHRjYWNoZWQsXHJcblx0XHRlZGl0YWJsZSxcclxuXHRcdHBhcmVudEVsZW1lbnQsXHJcblx0XHRpbmRleCxcclxuXHRcdHNob3VsZFJlYXR0YWNoLFxyXG5cdFx0bmFtZXNwYWNlLFxyXG5cdFx0Y29uZmlnc1xyXG5cdCkge1xyXG5cdFx0dmFyIHZpZXdzID0gW11cclxuXHRcdHZhciBjb250cm9sbGVycyA9IFtdXHJcblxyXG5cdFx0ZGF0YSA9IG1hcmtWaWV3cyhkYXRhLCBjYWNoZWQsIHZpZXdzLCBjb250cm9sbGVycylcclxuXHJcblx0XHRpZiAoZGF0YS5zdWJ0cmVlID09PSBcInJldGFpblwiKSByZXR1cm4gY2FjaGVkXHJcblxyXG5cdFx0aWYgKCFkYXRhLnRhZyAmJiBjb250cm9sbGVycy5sZW5ndGgpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQ29tcG9uZW50IHRlbXBsYXRlIG11c3QgcmV0dXJuIGEgdmlydHVhbCBcIiArXHJcblx0XHRcdFx0XCJlbGVtZW50LCBub3QgYW4gYXJyYXksIHN0cmluZywgZXRjLlwiKVxyXG5cdFx0fVxyXG5cclxuXHRcdGRhdGEuYXR0cnMgPSBkYXRhLmF0dHJzIHx8IHt9XHJcblx0XHRjYWNoZWQuYXR0cnMgPSBjYWNoZWQuYXR0cnMgfHwge31cclxuXHJcblx0XHR2YXIgZGF0YUF0dHJLZXlzID0gT2JqZWN0LmtleXMoZGF0YS5hdHRycylcclxuXHRcdHZhciBoYXNLZXlzID0gZGF0YUF0dHJLZXlzLmxlbmd0aCA+IChcImtleVwiIGluIGRhdGEuYXR0cnMgPyAxIDogMClcclxuXHJcblx0XHRtYXliZVJlY3JlYXRlT2JqZWN0KGRhdGEsIGNhY2hlZCwgZGF0YUF0dHJLZXlzKVxyXG5cclxuXHRcdGlmICghaXNTdHJpbmcoZGF0YS50YWcpKSByZXR1cm5cclxuXHJcblx0XHR2YXIgaXNOZXcgPSBjYWNoZWQubm9kZXMubGVuZ3RoID09PSAwXHJcblxyXG5cdFx0bmFtZXNwYWNlID0gZ2V0T2JqZWN0TmFtZXNwYWNlKGRhdGEsIG5hbWVzcGFjZSlcclxuXHJcblx0XHR2YXIgbm9kZVxyXG5cdFx0aWYgKGlzTmV3KSB7XHJcblx0XHRcdG5vZGUgPSBjb25zdHJ1Y3ROb2RlKGRhdGEsIG5hbWVzcGFjZSlcclxuXHRcdFx0Ly8gc2V0IGF0dHJpYnV0ZXMgZmlyc3QsIHRoZW4gY3JlYXRlIGNoaWxkcmVuXHJcblx0XHRcdHZhciBhdHRycyA9IGNvbnN0cnVjdEF0dHJzKGRhdGEsIG5vZGUsIG5hbWVzcGFjZSwgaGFzS2V5cylcclxuXHJcblx0XHRcdHZhciBjaGlsZHJlbiA9IGNvbnN0cnVjdENoaWxkcmVuKGRhdGEsIG5vZGUsIGNhY2hlZCwgZWRpdGFibGUsXHJcblx0XHRcdFx0bmFtZXNwYWNlLCBjb25maWdzKVxyXG5cclxuXHRcdFx0Y2FjaGVkID0gcmVjb25zdHJ1Y3RDYWNoZWQoXHJcblx0XHRcdFx0ZGF0YSxcclxuXHRcdFx0XHRhdHRycyxcclxuXHRcdFx0XHRjaGlsZHJlbixcclxuXHRcdFx0XHRub2RlLFxyXG5cdFx0XHRcdG5hbWVzcGFjZSxcclxuXHRcdFx0XHR2aWV3cyxcclxuXHRcdFx0XHRjb250cm9sbGVycylcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG5vZGUgPSBidWlsZFVwZGF0ZWROb2RlKFxyXG5cdFx0XHRcdGNhY2hlZCxcclxuXHRcdFx0XHRkYXRhLFxyXG5cdFx0XHRcdGVkaXRhYmxlLFxyXG5cdFx0XHRcdGhhc0tleXMsXHJcblx0XHRcdFx0bmFtZXNwYWNlLFxyXG5cdFx0XHRcdHZpZXdzLFxyXG5cdFx0XHRcdGNvbmZpZ3MsXHJcblx0XHRcdFx0Y29udHJvbGxlcnMpXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGlzTmV3IHx8IHNob3VsZFJlYXR0YWNoID09PSB0cnVlICYmIG5vZGUgIT0gbnVsbCkge1xyXG5cdFx0XHRpbnNlcnROb2RlKHBhcmVudEVsZW1lbnQsIG5vZGUsIGluZGV4KVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFRoZSBjb25maWdzIGFyZSBjYWxsZWQgYWZ0ZXIgYGJ1aWxkYCBmaW5pc2hlcyBydW5uaW5nXHJcblx0XHRzY2hlZHVsZUNvbmZpZ3NUb0JlQ2FsbGVkKGNvbmZpZ3MsIGRhdGEsIG5vZGUsIGlzTmV3LCBjYWNoZWQpXHJcblxyXG5cdFx0cmV0dXJuIGNhY2hlZFxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYnVpbGQoXHJcblx0XHRwYXJlbnRFbGVtZW50LFxyXG5cdFx0cGFyZW50VGFnLFxyXG5cdFx0cGFyZW50Q2FjaGUsXHJcblx0XHRwYXJlbnRJbmRleCxcclxuXHRcdGRhdGEsXHJcblx0XHRjYWNoZWQsXHJcblx0XHRzaG91bGRSZWF0dGFjaCxcclxuXHRcdGluZGV4LFxyXG5cdFx0ZWRpdGFibGUsXHJcblx0XHRuYW1lc3BhY2UsXHJcblx0XHRjb25maWdzXHJcblx0KSB7XHJcblx0XHQvKlxyXG5cdFx0ICogYGJ1aWxkYCBpcyBhIHJlY3Vyc2l2ZSBmdW5jdGlvbiB0aGF0IG1hbmFnZXMgY3JlYXRpb24vZGlmZmluZy9yZW1vdmFsXHJcblx0XHQgKiBvZiBET00gZWxlbWVudHMgYmFzZWQgb24gY29tcGFyaXNvbiBiZXR3ZWVuIGBkYXRhYCBhbmQgYGNhY2hlZGAgdGhlXHJcblx0XHQgKiBkaWZmIGFsZ29yaXRobSBjYW4gYmUgc3VtbWFyaXplZCBhcyB0aGlzOlxyXG5cdFx0ICpcclxuXHRcdCAqIDEgLSBjb21wYXJlIGBkYXRhYCBhbmQgYGNhY2hlZGBcclxuXHRcdCAqIDIgLSBpZiB0aGV5IGFyZSBkaWZmZXJlbnQsIGNvcHkgYGRhdGFgIHRvIGBjYWNoZWRgIGFuZCB1cGRhdGUgdGhlIERPTVxyXG5cdFx0ICogICAgIGJhc2VkIG9uIHdoYXQgdGhlIGRpZmZlcmVuY2UgaXNcclxuXHRcdCAqIDMgLSByZWN1cnNpdmVseSBhcHBseSB0aGlzIGFsZ29yaXRobSBmb3IgZXZlcnkgYXJyYXkgYW5kIGZvciB0aGVcclxuXHRcdCAqICAgICBjaGlsZHJlbiBvZiBldmVyeSB2aXJ0dWFsIGVsZW1lbnRcclxuXHRcdCAqXHJcblx0XHQgKiBUaGUgYGNhY2hlZGAgZGF0YSBzdHJ1Y3R1cmUgaXMgZXNzZW50aWFsbHkgdGhlIHNhbWUgYXMgdGhlIHByZXZpb3VzXHJcblx0XHQgKiByZWRyYXcncyBgZGF0YWAgZGF0YSBzdHJ1Y3R1cmUsIHdpdGggYSBmZXcgYWRkaXRpb25zOlxyXG5cdFx0ICogLSBgY2FjaGVkYCBhbHdheXMgaGFzIGEgcHJvcGVydHkgY2FsbGVkIGBub2Rlc2AsIHdoaWNoIGlzIGEgbGlzdCBvZlxyXG5cdFx0ICogICAgRE9NIGVsZW1lbnRzIHRoYXQgY29ycmVzcG9uZCB0byB0aGUgZGF0YSByZXByZXNlbnRlZCBieSB0aGVcclxuXHRcdCAqICAgIHJlc3BlY3RpdmUgdmlydHVhbCBlbGVtZW50XHJcblx0XHQgKiAtIGluIG9yZGVyIHRvIHN1cHBvcnQgYXR0YWNoaW5nIGBub2Rlc2AgYXMgYSBwcm9wZXJ0eSBvZiBgY2FjaGVkYCxcclxuXHRcdCAqICAgIGBjYWNoZWRgIGlzICphbHdheXMqIGEgbm9uLXByaW1pdGl2ZSBvYmplY3QsIGkuZS4gaWYgdGhlIGRhdGEgd2FzXHJcblx0XHQgKiAgICBhIHN0cmluZywgdGhlbiBjYWNoZWQgaXMgYSBTdHJpbmcgaW5zdGFuY2UuIElmIGRhdGEgd2FzIGBudWxsYCBvclxyXG5cdFx0ICogICAgYHVuZGVmaW5lZGAsIGNhY2hlZCBpcyBgbmV3IFN0cmluZyhcIlwiKWBcclxuXHRcdCAqIC0gYGNhY2hlZCBhbHNvIGhhcyBhIGBjb25maWdDb250ZXh0YCBwcm9wZXJ0eSwgd2hpY2ggaXMgdGhlIHN0YXRlXHJcblx0XHQgKiAgICBzdG9yYWdlIG9iamVjdCBleHBvc2VkIGJ5IGNvbmZpZyhlbGVtZW50LCBpc0luaXRpYWxpemVkLCBjb250ZXh0KVxyXG5cdFx0ICogLSB3aGVuIGBjYWNoZWRgIGlzIGFuIE9iamVjdCwgaXQgcmVwcmVzZW50cyBhIHZpcnR1YWwgZWxlbWVudDsgd2hlblxyXG5cdFx0ICogICAgaXQncyBhbiBBcnJheSwgaXQgcmVwcmVzZW50cyBhIGxpc3Qgb2YgZWxlbWVudHM7IHdoZW4gaXQncyBhXHJcblx0XHQgKiAgICBTdHJpbmcsIE51bWJlciBvciBCb29sZWFuLCBpdCByZXByZXNlbnRzIGEgdGV4dCBub2RlXHJcblx0XHQgKlxyXG5cdFx0ICogYHBhcmVudEVsZW1lbnRgIGlzIGEgRE9NIGVsZW1lbnQgdXNlZCBmb3IgVzNDIERPTSBBUEkgY2FsbHNcclxuXHRcdCAqIGBwYXJlbnRUYWdgIGlzIG9ubHkgdXNlZCBmb3IgaGFuZGxpbmcgYSBjb3JuZXIgY2FzZSBmb3IgdGV4dGFyZWFcclxuXHRcdCAqIHZhbHVlc1xyXG5cdFx0ICogYHBhcmVudENhY2hlYCBpcyB1c2VkIHRvIHJlbW92ZSBub2RlcyBpbiBzb21lIG11bHRpLW5vZGUgY2FzZXNcclxuXHRcdCAqIGBwYXJlbnRJbmRleGAgYW5kIGBpbmRleGAgYXJlIHVzZWQgdG8gZmlndXJlIG91dCB0aGUgb2Zmc2V0IG9mIG5vZGVzLlxyXG5cdFx0ICogVGhleSdyZSBhcnRpZmFjdHMgZnJvbSBiZWZvcmUgYXJyYXlzIHN0YXJ0ZWQgYmVpbmcgZmxhdHRlbmVkIGFuZCBhcmVcclxuXHRcdCAqIGxpa2VseSByZWZhY3RvcmFibGVcclxuXHRcdCAqIGBkYXRhYCBhbmQgYGNhY2hlZGAgYXJlLCByZXNwZWN0aXZlbHksIHRoZSBuZXcgYW5kIG9sZCBub2RlcyBiZWluZ1xyXG5cdFx0ICogZGlmZmVkXHJcblx0XHQgKiBgc2hvdWxkUmVhdHRhY2hgIGlzIGEgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgYSBwYXJlbnQgbm9kZSB3YXNcclxuXHRcdCAqIHJlY3JlYXRlZCAoaWYgc28sIGFuZCBpZiB0aGlzIG5vZGUgaXMgcmV1c2VkLCB0aGVuIHRoaXMgbm9kZSBtdXN0XHJcblx0XHQgKiByZWF0dGFjaCBpdHNlbGYgdG8gdGhlIG5ldyBwYXJlbnQpXHJcblx0XHQgKiBgZWRpdGFibGVgIGlzIGEgZmxhZyB0aGF0IGluZGljYXRlcyB3aGV0aGVyIGFuIGFuY2VzdG9yIGlzXHJcblx0XHQgKiBjb250ZW50ZWRpdGFibGVcclxuXHRcdCAqIGBuYW1lc3BhY2VgIGluZGljYXRlcyB0aGUgY2xvc2VzdCBIVE1MIG5hbWVzcGFjZSBhcyBpdCBjYXNjYWRlcyBkb3duXHJcblx0XHQgKiBmcm9tIGFuIGFuY2VzdG9yXHJcblx0XHQgKiBgY29uZmlnc2AgaXMgYSBsaXN0IG9mIGNvbmZpZyBmdW5jdGlvbnMgdG8gcnVuIGFmdGVyIHRoZSB0b3Btb3N0XHJcblx0XHQgKiBgYnVpbGRgIGNhbGwgZmluaXNoZXMgcnVubmluZ1xyXG5cdFx0ICpcclxuXHRcdCAqIHRoZXJlJ3MgbG9naWMgdGhhdCByZWxpZXMgb24gdGhlIGFzc3VtcHRpb24gdGhhdCBudWxsIGFuZCB1bmRlZmluZWRcclxuXHRcdCAqIGRhdGEgYXJlIGVxdWl2YWxlbnQgdG8gZW1wdHkgc3RyaW5nc1xyXG5cdFx0ICogLSB0aGlzIHByZXZlbnRzIGxpZmVjeWNsZSBzdXJwcmlzZXMgZnJvbSBwcm9jZWR1cmFsIGhlbHBlcnMgdGhhdCBtaXhcclxuXHRcdCAqICAgaW1wbGljaXQgYW5kIGV4cGxpY2l0IHJldHVybiBzdGF0ZW1lbnRzIChlLmcuXHJcblx0XHQgKiAgIGZ1bmN0aW9uIGZvbygpIHtpZiAoY29uZCkgcmV0dXJuIG0oXCJkaXZcIil9XHJcblx0XHQgKiAtIGl0IHNpbXBsaWZpZXMgZGlmZmluZyBjb2RlXHJcblx0XHQgKi9cclxuXHRcdGRhdGEgPSBkYXRhVG9TdHJpbmcoZGF0YSlcclxuXHRcdGlmIChkYXRhLnN1YnRyZWUgPT09IFwicmV0YWluXCIpIHJldHVybiBjYWNoZWRcclxuXHRcdGNhY2hlZCA9IG1ha2VDYWNoZShkYXRhLCBjYWNoZWQsIGluZGV4LCBwYXJlbnRJbmRleCwgcGFyZW50Q2FjaGUpXHJcblxyXG5cdFx0aWYgKGlzQXJyYXkoZGF0YSkpIHtcclxuXHRcdFx0cmV0dXJuIGJ1aWxkQXJyYXkoXHJcblx0XHRcdFx0ZGF0YSxcclxuXHRcdFx0XHRjYWNoZWQsXHJcblx0XHRcdFx0cGFyZW50RWxlbWVudCxcclxuXHRcdFx0XHRpbmRleCxcclxuXHRcdFx0XHRwYXJlbnRUYWcsXHJcblx0XHRcdFx0c2hvdWxkUmVhdHRhY2gsXHJcblx0XHRcdFx0ZWRpdGFibGUsXHJcblx0XHRcdFx0bmFtZXNwYWNlLFxyXG5cdFx0XHRcdGNvbmZpZ3MpXHJcblx0XHR9IGVsc2UgaWYgKGRhdGEgIT0gbnVsbCAmJiBpc09iamVjdChkYXRhKSkge1xyXG5cdFx0XHRyZXR1cm4gYnVpbGRPYmplY3QoXHJcblx0XHRcdFx0ZGF0YSxcclxuXHRcdFx0XHRjYWNoZWQsXHJcblx0XHRcdFx0ZWRpdGFibGUsXHJcblx0XHRcdFx0cGFyZW50RWxlbWVudCxcclxuXHRcdFx0XHRpbmRleCxcclxuXHRcdFx0XHRzaG91bGRSZWF0dGFjaCxcclxuXHRcdFx0XHRuYW1lc3BhY2UsXHJcblx0XHRcdFx0Y29uZmlncylcclxuXHRcdH0gZWxzZSBpZiAoIWlzRnVuY3Rpb24oZGF0YSkpIHtcclxuXHRcdFx0cmV0dXJuIGhhbmRsZVRleHROb2RlKFxyXG5cdFx0XHRcdGNhY2hlZCxcclxuXHRcdFx0XHRkYXRhLFxyXG5cdFx0XHRcdGluZGV4LFxyXG5cdFx0XHRcdHBhcmVudEVsZW1lbnQsXHJcblx0XHRcdFx0c2hvdWxkUmVhdHRhY2gsXHJcblx0XHRcdFx0ZWRpdGFibGUsXHJcblx0XHRcdFx0cGFyZW50VGFnKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIGNhY2hlZFxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gc29ydENoYW5nZXMoYSwgYikge1xyXG5cdFx0cmV0dXJuIGEuYWN0aW9uIC0gYi5hY3Rpb24gfHwgYS5pbmRleCAtIGIuaW5kZXhcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGNvcHlTdHlsZUF0dHJzKG5vZGUsIGRhdGFBdHRyLCBjYWNoZWRBdHRyKSB7XHJcblx0XHRmb3IgKHZhciBydWxlIGluIGRhdGFBdHRyKSB7XHJcblx0XHRcdGlmIChoYXNPd24uY2FsbChkYXRhQXR0ciwgcnVsZSkpIHtcclxuXHRcdFx0XHRpZiAoY2FjaGVkQXR0ciA9PSBudWxsIHx8IGNhY2hlZEF0dHJbcnVsZV0gIT09IGRhdGFBdHRyW3J1bGVdKSB7XHJcblx0XHRcdFx0XHRub2RlLnN0eWxlW3J1bGVdID0gZGF0YUF0dHJbcnVsZV1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKHJ1bGUgaW4gY2FjaGVkQXR0cikge1xyXG5cdFx0XHRpZiAoaGFzT3duLmNhbGwoY2FjaGVkQXR0ciwgcnVsZSkpIHtcclxuXHRcdFx0XHRpZiAoIWhhc093bi5jYWxsKGRhdGFBdHRyLCBydWxlKSkgbm9kZS5zdHlsZVtydWxlXSA9IFwiXCJcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dmFyIHNob3VsZFVzZVNldEF0dHJpYnV0ZSA9IHtcclxuXHRcdGxpc3Q6IDEsXHJcblx0XHRzdHlsZTogMSxcclxuXHRcdGZvcm06IDEsXHJcblx0XHR0eXBlOiAxLFxyXG5cdFx0d2lkdGg6IDEsXHJcblx0XHRoZWlnaHQ6IDFcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHNldFNpbmdsZUF0dHIoXHJcblx0XHRub2RlLFxyXG5cdFx0YXR0ck5hbWUsXHJcblx0XHRkYXRhQXR0cixcclxuXHRcdGNhY2hlZEF0dHIsXHJcblx0XHR0YWcsXHJcblx0XHRuYW1lc3BhY2VcclxuXHQpIHtcclxuXHRcdGlmIChhdHRyTmFtZSA9PT0gXCJjb25maWdcIiB8fCBhdHRyTmFtZSA9PT0gXCJrZXlcIikge1xyXG5cdFx0XHQvLyBgY29uZmlnYCBpc24ndCBhIHJlYWwgYXR0cmlidXRlLCBzbyBpZ25vcmUgaXRcclxuXHRcdFx0cmV0dXJuIHRydWVcclxuXHRcdH0gZWxzZSBpZiAoaXNGdW5jdGlvbihkYXRhQXR0cikgJiYgYXR0ck5hbWUuc2xpY2UoMCwgMikgPT09IFwib25cIikge1xyXG5cdFx0XHQvLyBob29rIGV2ZW50IGhhbmRsZXJzIHRvIHRoZSBhdXRvLXJlZHJhd2luZyBzeXN0ZW1cclxuXHRcdFx0bm9kZVthdHRyTmFtZV0gPSBhdXRvcmVkcmF3KGRhdGFBdHRyLCBub2RlKVxyXG5cdFx0fSBlbHNlIGlmIChhdHRyTmFtZSA9PT0gXCJzdHlsZVwiICYmIGRhdGFBdHRyICE9IG51bGwgJiZcclxuXHRcdFx0XHRpc09iamVjdChkYXRhQXR0cikpIHtcclxuXHRcdFx0Ly8gaGFuZGxlIGBzdHlsZTogey4uLn1gXHJcblx0XHRcdGNvcHlTdHlsZUF0dHJzKG5vZGUsIGRhdGFBdHRyLCBjYWNoZWRBdHRyKVxyXG5cdFx0fSBlbHNlIGlmIChuYW1lc3BhY2UgIT0gbnVsbCkge1xyXG5cdFx0XHQvLyBoYW5kbGUgU1ZHXHJcblx0XHRcdGlmIChhdHRyTmFtZSA9PT0gXCJocmVmXCIpIHtcclxuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLFxyXG5cdFx0XHRcdFx0XCJocmVmXCIsIGRhdGFBdHRyKVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKFxyXG5cdFx0XHRcdFx0YXR0ck5hbWUgPT09IFwiY2xhc3NOYW1lXCIgPyBcImNsYXNzXCIgOiBhdHRyTmFtZSxcclxuXHRcdFx0XHRcdGRhdGFBdHRyKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKGF0dHJOYW1lIGluIG5vZGUgJiYgIXNob3VsZFVzZVNldEF0dHJpYnV0ZVthdHRyTmFtZV0pIHtcclxuXHRcdFx0Ly8gaGFuZGxlIGNhc2VzIHRoYXQgYXJlIHByb3BlcnRpZXMgKGJ1dCBpZ25vcmUgY2FzZXMgd2hlcmUgd2VcclxuXHRcdFx0Ly8gc2hvdWxkIHVzZSBzZXRBdHRyaWJ1dGUgaW5zdGVhZClcclxuXHRcdFx0Ly9cclxuXHRcdFx0Ly8gLSBsaXN0IGFuZCBmb3JtIGFyZSB0eXBpY2FsbHkgdXNlZCBhcyBzdHJpbmdzLCBidXQgYXJlIERPTVxyXG5cdFx0XHQvLyAgIGVsZW1lbnQgcmVmZXJlbmNlcyBpbiBqc1xyXG5cdFx0XHQvL1xyXG5cdFx0XHQvLyAtIHdoZW4gdXNpbmcgQ1NTIHNlbGVjdG9ycyAoZS5nLiBgbShcIltzdHlsZT0nJ11cIilgKSwgc3R5bGUgaXNcclxuXHRcdFx0Ly8gICB1c2VkIGFzIGEgc3RyaW5nLCBidXQgaXQncyBhbiBvYmplY3QgaW4ganNcclxuXHRcdFx0Ly9cclxuXHRcdFx0Ly8gIzM0OCBkb24ndCBzZXQgdGhlIHZhbHVlIGlmIG5vdCBuZWVkZWQgLSBvdGhlcndpc2UsIGN1cnNvclxyXG5cdFx0XHQvLyBwbGFjZW1lbnQgYnJlYWtzIGluIENocm9tZVxyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGlmICh0YWcgIT09IFwiaW5wdXRcIiB8fCBub2RlW2F0dHJOYW1lXSAhPT0gZGF0YUF0dHIpIHtcclxuXHRcdFx0XHRcdG5vZGVbYXR0ck5hbWVdID0gZGF0YUF0dHJcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgZGF0YUF0dHIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVsc2Ugbm9kZS5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGRhdGFBdHRyKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gdHJ5U2V0QXR0cihcclxuXHRcdG5vZGUsXHJcblx0XHRhdHRyTmFtZSxcclxuXHRcdGRhdGFBdHRyLFxyXG5cdFx0Y2FjaGVkQXR0cixcclxuXHRcdGNhY2hlZEF0dHJzLFxyXG5cdFx0dGFnLFxyXG5cdFx0bmFtZXNwYWNlXHJcblx0KSB7XHJcblx0XHRpZiAoIShhdHRyTmFtZSBpbiBjYWNoZWRBdHRycykgfHwgKGNhY2hlZEF0dHIgIT09IGRhdGFBdHRyKSkge1xyXG5cdFx0XHRjYWNoZWRBdHRyc1thdHRyTmFtZV0gPSBkYXRhQXR0clxyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHJldHVybiBzZXRTaW5nbGVBdHRyKFxyXG5cdFx0XHRcdFx0bm9kZSxcclxuXHRcdFx0XHRcdGF0dHJOYW1lLFxyXG5cdFx0XHRcdFx0ZGF0YUF0dHIsXHJcblx0XHRcdFx0XHRjYWNoZWRBdHRyLFxyXG5cdFx0XHRcdFx0dGFnLFxyXG5cdFx0XHRcdFx0bmFtZXNwYWNlKVxyXG5cdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0Ly8gc3dhbGxvdyBJRSdzIGludmFsaWQgYXJndW1lbnQgZXJyb3JzIHRvIG1pbWljIEhUTUwnc1xyXG5cdFx0XHRcdC8vIGZhbGxiYWNrLXRvLWRvaW5nLW5vdGhpbmctb24taW52YWxpZC1hdHRyaWJ1dGVzIGJlaGF2aW9yXHJcblx0XHRcdFx0aWYgKGUubWVzc2FnZS5pbmRleE9mKFwiSW52YWxpZCBhcmd1bWVudFwiKSA8IDApIHRocm93IGVcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmIChhdHRyTmFtZSA9PT0gXCJ2YWx1ZVwiICYmIHRhZyA9PT0gXCJpbnB1dFwiICYmXHJcblx0XHRcdFx0bm9kZS52YWx1ZSAhPT0gZGF0YUF0dHIpIHtcclxuXHRcdFx0Ly8gIzM0OCBkYXRhQXR0ciBtYXkgbm90IGJlIGEgc3RyaW5nLCBzbyB1c2UgbG9vc2UgY29tcGFyaXNvblxyXG5cdFx0XHRub2RlLnZhbHVlID0gZGF0YUF0dHJcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMobm9kZSwgdGFnLCBkYXRhQXR0cnMsIGNhY2hlZEF0dHJzLCBuYW1lc3BhY2UpIHtcclxuXHRcdGZvciAodmFyIGF0dHJOYW1lIGluIGRhdGFBdHRycykge1xyXG5cdFx0XHRpZiAoaGFzT3duLmNhbGwoZGF0YUF0dHJzLCBhdHRyTmFtZSkpIHtcclxuXHRcdFx0XHRpZiAodHJ5U2V0QXR0cihcclxuXHRcdFx0XHRcdFx0bm9kZSxcclxuXHRcdFx0XHRcdFx0YXR0ck5hbWUsXHJcblx0XHRcdFx0XHRcdGRhdGFBdHRyc1thdHRyTmFtZV0sXHJcblx0XHRcdFx0XHRcdGNhY2hlZEF0dHJzW2F0dHJOYW1lXSxcclxuXHRcdFx0XHRcdFx0Y2FjaGVkQXR0cnMsXHJcblx0XHRcdFx0XHRcdHRhZyxcclxuXHRcdFx0XHRcdFx0bmFtZXNwYWNlKSkge1xyXG5cdFx0XHRcdFx0Y29udGludWVcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBjYWNoZWRBdHRyc1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gY2xlYXIobm9kZXMsIGNhY2hlZCkge1xyXG5cdFx0Zm9yICh2YXIgaSA9IG5vZGVzLmxlbmd0aCAtIDE7IGkgPiAtMTsgaS0tKSB7XHJcblx0XHRcdGlmIChub2Rlc1tpXSAmJiBub2Rlc1tpXS5wYXJlbnROb2RlKSB7XHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdG5vZGVzW2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZXNbaV0pXHJcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdFx0LyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xyXG5cdFx0XHRcdFx0Ly8gaWdub3JlIGlmIHRoaXMgZmFpbHMgZHVlIHRvIG9yZGVyIG9mIGV2ZW50cyAoc2VlXHJcblx0XHRcdFx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIxOTI2MDgzL2ZhaWxlZC10by1leGVjdXRlLXJlbW92ZWNoaWxkLW9uLW5vZGUpXHJcblx0XHRcdFx0XHQvKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4gKi9cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FjaGVkID0gW10uY29uY2F0KGNhY2hlZClcclxuXHRcdFx0XHRpZiAoY2FjaGVkW2ldKSB1bmxvYWQoY2FjaGVkW2ldKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQvLyByZWxlYXNlIG1lbW9yeSBpZiBub2RlcyBpcyBhbiBhcnJheS4gVGhpcyBjaGVjayBzaG91bGQgZmFpbCBpZiBub2Rlc1xyXG5cdFx0Ly8gaXMgYSBOb2RlTGlzdCAoc2VlIGxvb3AgYWJvdmUpXHJcblx0XHRpZiAobm9kZXMubGVuZ3RoKSB7XHJcblx0XHRcdG5vZGVzLmxlbmd0aCA9IDBcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHVubG9hZChjYWNoZWQpIHtcclxuXHRcdGlmIChjYWNoZWQuY29uZmlnQ29udGV4dCAmJiBpc0Z1bmN0aW9uKGNhY2hlZC5jb25maWdDb250ZXh0Lm9udW5sb2FkKSkge1xyXG5cdFx0XHRjYWNoZWQuY29uZmlnQ29udGV4dC5vbnVubG9hZCgpXHJcblx0XHRcdGNhY2hlZC5jb25maWdDb250ZXh0Lm9udW5sb2FkID0gbnVsbFxyXG5cdFx0fVxyXG5cdFx0aWYgKGNhY2hlZC5jb250cm9sbGVycykge1xyXG5cdFx0XHRmb3JFYWNoKGNhY2hlZC5jb250cm9sbGVycywgZnVuY3Rpb24gKGNvbnRyb2xsZXIpIHtcclxuXHRcdFx0XHRpZiAoaXNGdW5jdGlvbihjb250cm9sbGVyLm9udW5sb2FkKSkge1xyXG5cdFx0XHRcdFx0Y29udHJvbGxlci5vbnVubG9hZCh7cHJldmVudERlZmF1bHQ6IG5vb3B9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHRcdGlmIChjYWNoZWQuY2hpbGRyZW4pIHtcclxuXHRcdFx0aWYgKGlzQXJyYXkoY2FjaGVkLmNoaWxkcmVuKSkgZm9yRWFjaChjYWNoZWQuY2hpbGRyZW4sIHVubG9hZClcclxuXHRcdFx0ZWxzZSBpZiAoY2FjaGVkLmNoaWxkcmVuLnRhZykgdW5sb2FkKGNhY2hlZC5jaGlsZHJlbilcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGFwcGVuZFRleHRGcmFnbWVudChwYXJlbnRFbGVtZW50LCBkYXRhKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKFxyXG5cdFx0XHRcdCRkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChkYXRhKSlcclxuXHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0cGFyZW50RWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgZGF0YSlcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGluamVjdEhUTUwocGFyZW50RWxlbWVudCwgaW5kZXgsIGRhdGEpIHtcclxuXHRcdHZhciBuZXh0U2libGluZyA9IHBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1tpbmRleF1cclxuXHRcdGlmIChuZXh0U2libGluZykge1xyXG5cdFx0XHR2YXIgaXNFbGVtZW50ID0gbmV4dFNpYmxpbmcubm9kZVR5cGUgIT09IDFcclxuXHRcdFx0dmFyIHBsYWNlaG9sZGVyID0gJGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXHJcblx0XHRcdGlmIChpc0VsZW1lbnQpIHtcclxuXHRcdFx0XHRwYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShwbGFjZWhvbGRlciwgbmV4dFNpYmxpbmcgfHwgbnVsbClcclxuXHRcdFx0XHRwbGFjZWhvbGRlci5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmViZWdpblwiLCBkYXRhKVxyXG5cdFx0XHRcdHBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQocGxhY2Vob2xkZXIpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bmV4dFNpYmxpbmcuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlYmVnaW5cIiwgZGF0YSlcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0YXBwZW5kVGV4dEZyYWdtZW50KHBhcmVudEVsZW1lbnQsIGRhdGEpXHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIG5vZGVzID0gW11cclxuXHJcblx0XHR3aGlsZSAocGFyZW50RWxlbWVudC5jaGlsZE5vZGVzW2luZGV4XSAhPT0gbmV4dFNpYmxpbmcpIHtcclxuXHRcdFx0bm9kZXMucHVzaChwYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbaW5kZXhdKVxyXG5cdFx0XHRpbmRleCsrXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG5vZGVzXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBhdXRvcmVkcmF3KGNhbGxiYWNrLCBvYmplY3QpIHtcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRlID0gZSB8fCBldmVudFxyXG5cdFx0XHRtLnJlZHJhdy5zdHJhdGVneShcImRpZmZcIilcclxuXHRcdFx0bS5zdGFydENvbXB1dGF0aW9uKClcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRyZXR1cm4gY2FsbGJhY2suY2FsbChvYmplY3QsIGUpXHJcblx0XHRcdH0gZmluYWxseSB7XHJcblx0XHRcdFx0ZW5kRmlyc3RDb21wdXRhdGlvbigpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHZhciBodG1sXHJcblx0dmFyIGRvY3VtZW50Tm9kZSA9IHtcclxuXHRcdGFwcGVuZENoaWxkOiBmdW5jdGlvbiAobm9kZSkge1xyXG5cdFx0XHRpZiAoaHRtbCA9PT0gdW5kZWZpbmVkKSBodG1sID0gJGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJodG1sXCIpXHJcblx0XHRcdGlmICgkZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmXHJcblx0XHRcdFx0XHQkZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICE9PSBub2RlKSB7XHJcblx0XHRcdFx0JGRvY3VtZW50LnJlcGxhY2VDaGlsZChub2RlLCAkZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCRkb2N1bWVudC5hcHBlbmRDaGlsZChub2RlKVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLmNoaWxkTm9kZXMgPSAkZG9jdW1lbnQuY2hpbGROb2Rlc1xyXG5cdFx0fSxcclxuXHJcblx0XHRpbnNlcnRCZWZvcmU6IGZ1bmN0aW9uIChub2RlKSB7XHJcblx0XHRcdHRoaXMuYXBwZW5kQ2hpbGQobm9kZSlcclxuXHRcdH0sXHJcblxyXG5cdFx0Y2hpbGROb2RlczogW11cclxuXHR9XHJcblxyXG5cdHZhciBub2RlQ2FjaGUgPSBbXVxyXG5cdHZhciBjZWxsQ2FjaGUgPSB7fVxyXG5cclxuXHRtLnJlbmRlciA9IGZ1bmN0aW9uIChyb290LCBjZWxsLCBmb3JjZVJlY3JlYXRpb24pIHtcclxuXHRcdGlmICghcm9vdCkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJFbnN1cmUgdGhlIERPTSBlbGVtZW50IGJlaW5nIHBhc3NlZCB0byBcIiArXHJcblx0XHRcdFx0XCJtLnJvdXRlL20ubW91bnQvbS5yZW5kZXIgaXMgbm90IHVuZGVmaW5lZC5cIilcclxuXHRcdH1cclxuXHRcdHZhciBjb25maWdzID0gW11cclxuXHRcdHZhciBpZCA9IGdldENlbGxDYWNoZUtleShyb290KVxyXG5cdFx0dmFyIGlzRG9jdW1lbnRSb290ID0gcm9vdCA9PT0gJGRvY3VtZW50XHJcblx0XHR2YXIgbm9kZVxyXG5cclxuXHRcdGlmIChpc0RvY3VtZW50Um9vdCB8fCByb290ID09PSAkZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XHJcblx0XHRcdG5vZGUgPSBkb2N1bWVudE5vZGVcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG5vZGUgPSByb290XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGlzRG9jdW1lbnRSb290ICYmIGNlbGwudGFnICE9PSBcImh0bWxcIikge1xyXG5cdFx0XHRjZWxsID0ge3RhZzogXCJodG1sXCIsIGF0dHJzOiB7fSwgY2hpbGRyZW46IGNlbGx9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGNlbGxDYWNoZVtpZF0gPT09IHVuZGVmaW5lZCkgY2xlYXIobm9kZS5jaGlsZE5vZGVzKVxyXG5cdFx0aWYgKGZvcmNlUmVjcmVhdGlvbiA9PT0gdHJ1ZSkgcmVzZXQocm9vdClcclxuXHJcblx0XHRjZWxsQ2FjaGVbaWRdID0gYnVpbGQoXHJcblx0XHRcdG5vZGUsXHJcblx0XHRcdG51bGwsXHJcblx0XHRcdHVuZGVmaW5lZCxcclxuXHRcdFx0dW5kZWZpbmVkLFxyXG5cdFx0XHRjZWxsLFxyXG5cdFx0XHRjZWxsQ2FjaGVbaWRdLFxyXG5cdFx0XHRmYWxzZSxcclxuXHRcdFx0MCxcclxuXHRcdFx0bnVsbCxcclxuXHRcdFx0dW5kZWZpbmVkLFxyXG5cdFx0XHRjb25maWdzKVxyXG5cclxuXHRcdGZvckVhY2goY29uZmlncywgZnVuY3Rpb24gKGNvbmZpZykgeyBjb25maWcoKSB9KVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZ2V0Q2VsbENhY2hlS2V5KGVsZW1lbnQpIHtcclxuXHRcdHZhciBpbmRleCA9IG5vZGVDYWNoZS5pbmRleE9mKGVsZW1lbnQpXHJcblx0XHRyZXR1cm4gaW5kZXggPCAwID8gbm9kZUNhY2hlLnB1c2goZWxlbWVudCkgLSAxIDogaW5kZXhcclxuXHR9XHJcblxyXG5cdG0udHJ1c3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuXHRcdHZhbHVlID0gbmV3IFN0cmluZyh2YWx1ZSkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcclxuXHRcdHZhbHVlLiR0cnVzdGVkID0gdHJ1ZVxyXG5cdFx0cmV0dXJuIHZhbHVlXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnZXR0ZXJzZXR0ZXIoc3RvcmUpIHtcclxuXHRcdGZ1bmN0aW9uIHByb3AoKSB7XHJcblx0XHRcdGlmIChhcmd1bWVudHMubGVuZ3RoKSBzdG9yZSA9IGFyZ3VtZW50c1swXVxyXG5cdFx0XHRyZXR1cm4gc3RvcmVcclxuXHRcdH1cclxuXHJcblx0XHRwcm9wLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIHN0b3JlXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHByb3BcclxuXHR9XHJcblxyXG5cdG0ucHJvcCA9IGZ1bmN0aW9uIChzdG9yZSkge1xyXG5cdFx0aWYgKChzdG9yZSAhPSBudWxsICYmIGlzT2JqZWN0KHN0b3JlKSB8fCBpc0Z1bmN0aW9uKHN0b3JlKSkgJiZcclxuXHRcdFx0XHRpc0Z1bmN0aW9uKHN0b3JlLnRoZW4pKSB7XHJcblx0XHRcdHJldHVybiBwcm9waWZ5KHN0b3JlKVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBnZXR0ZXJzZXR0ZXIoc3RvcmUpXHJcblx0fVxyXG5cclxuXHR2YXIgcm9vdHMgPSBbXVxyXG5cdHZhciBjb21wb25lbnRzID0gW11cclxuXHR2YXIgY29udHJvbGxlcnMgPSBbXVxyXG5cdHZhciBsYXN0UmVkcmF3SWQgPSBudWxsXHJcblx0dmFyIGxhc3RSZWRyYXdDYWxsVGltZSA9IDBcclxuXHR2YXIgY29tcHV0ZVByZVJlZHJhd0hvb2sgPSBudWxsXHJcblx0dmFyIGNvbXB1dGVQb3N0UmVkcmF3SG9vayA9IG51bGxcclxuXHR2YXIgdG9wQ29tcG9uZW50XHJcblx0dmFyIEZSQU1FX0JVREdFVCA9IDE2IC8vIDYwIGZyYW1lcyBwZXIgc2Vjb25kID0gMSBjYWxsIHBlciAxNiBtc1xyXG5cclxuXHRmdW5jdGlvbiBwYXJhbWV0ZXJpemUoY29tcG9uZW50LCBhcmdzKSB7XHJcblx0XHRmdW5jdGlvbiBjb250cm9sbGVyKCkge1xyXG5cdFx0XHQvKiBlc2xpbnQtZGlzYWJsZSBuby1pbnZhbGlkLXRoaXMgKi9cclxuXHRcdFx0cmV0dXJuIChjb21wb25lbnQuY29udHJvbGxlciB8fCBub29wKS5hcHBseSh0aGlzLCBhcmdzKSB8fCB0aGlzXHJcblx0XHRcdC8qIGVzbGludC1lbmFibGUgbm8taW52YWxpZC10aGlzICovXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGNvbXBvbmVudC5jb250cm9sbGVyKSB7XHJcblx0XHRcdGNvbnRyb2xsZXIucHJvdG90eXBlID0gY29tcG9uZW50LmNvbnRyb2xsZXIucHJvdG90eXBlXHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gdmlldyhjdHJsKSB7XHJcblx0XHRcdHZhciBjdXJyZW50QXJncyA9IFtjdHJsXS5jb25jYXQoYXJncylcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRjdXJyZW50QXJncy5wdXNoKGFyZ3VtZW50c1tpXSlcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGNvbXBvbmVudC52aWV3LmFwcGx5KGNvbXBvbmVudCwgY3VycmVudEFyZ3MpXHJcblx0XHR9XHJcblxyXG5cdFx0dmlldy4kb3JpZ2luYWwgPSBjb21wb25lbnQudmlld1xyXG5cdFx0dmFyIG91dHB1dCA9IHtjb250cm9sbGVyOiBjb250cm9sbGVyLCB2aWV3OiB2aWV3fVxyXG5cdFx0aWYgKGFyZ3NbMF0gJiYgYXJnc1swXS5rZXkgIT0gbnVsbCkgb3V0cHV0LmF0dHJzID0ge2tleTogYXJnc1swXS5rZXl9XHJcblx0XHRyZXR1cm4gb3V0cHV0XHJcblx0fVxyXG5cclxuXHRtLmNvbXBvbmVudCA9IGZ1bmN0aW9uIChjb21wb25lbnQpIHtcclxuXHRcdHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKVxyXG5cclxuXHRcdGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHBhcmFtZXRlcml6ZShjb21wb25lbnQsIGFyZ3MpXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjaGVja1ByZXZlbnRlZChjb21wb25lbnQsIHJvb3QsIGluZGV4LCBpc1ByZXZlbnRlZCkge1xyXG5cdFx0aWYgKCFpc1ByZXZlbnRlZCkge1xyXG5cdFx0XHRtLnJlZHJhdy5zdHJhdGVneShcImFsbFwiKVxyXG5cdFx0XHRtLnN0YXJ0Q29tcHV0YXRpb24oKVxyXG5cdFx0XHRyb290c1tpbmRleF0gPSByb290XHJcblx0XHRcdHZhciBjdXJyZW50Q29tcG9uZW50XHJcblxyXG5cdFx0XHRpZiAoY29tcG9uZW50KSB7XHJcblx0XHRcdFx0Y3VycmVudENvbXBvbmVudCA9IHRvcENvbXBvbmVudCA9IGNvbXBvbmVudFxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGN1cnJlbnRDb21wb25lbnQgPSB0b3BDb21wb25lbnQgPSBjb21wb25lbnQgPSB7Y29udHJvbGxlcjogbm9vcH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIGNvbnRyb2xsZXIgPSBuZXcgKGNvbXBvbmVudC5jb250cm9sbGVyIHx8IG5vb3ApKClcclxuXHJcblx0XHRcdC8vIGNvbnRyb2xsZXJzIG1heSBjYWxsIG0ubW91bnQgcmVjdXJzaXZlbHkgKHZpYSBtLnJvdXRlIHJlZGlyZWN0cyxcclxuXHRcdFx0Ly8gZm9yIGV4YW1wbGUpXHJcblx0XHRcdC8vIHRoaXMgY29uZGl0aW9uYWwgZW5zdXJlcyBvbmx5IHRoZSBsYXN0IHJlY3Vyc2l2ZSBtLm1vdW50IGNhbGwgaXNcclxuXHRcdFx0Ly8gYXBwbGllZFxyXG5cdFx0XHRpZiAoY3VycmVudENvbXBvbmVudCA9PT0gdG9wQ29tcG9uZW50KSB7XHJcblx0XHRcdFx0Y29udHJvbGxlcnNbaW5kZXhdID0gY29udHJvbGxlclxyXG5cdFx0XHRcdGNvbXBvbmVudHNbaW5kZXhdID0gY29tcG9uZW50XHJcblx0XHRcdH1cclxuXHRcdFx0ZW5kRmlyc3RDb21wdXRhdGlvbigpXHJcblx0XHRcdGlmIChjb21wb25lbnQgPT09IG51bGwpIHtcclxuXHRcdFx0XHRyZW1vdmVSb290RWxlbWVudChyb290LCBpbmRleClcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gY29udHJvbGxlcnNbaW5kZXhdXHJcblx0XHR9IGVsc2UgaWYgKGNvbXBvbmVudCA9PSBudWxsKSB7XHJcblx0XHRcdHJlbW92ZVJvb3RFbGVtZW50KHJvb3QsIGluZGV4KVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bS5tb3VudCA9IG0ubW9kdWxlID0gZnVuY3Rpb24gKHJvb3QsIGNvbXBvbmVudCkge1xyXG5cdFx0aWYgKCFyb290KSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBlbnN1cmUgdGhlIERPTSBlbGVtZW50IGV4aXN0cyBiZWZvcmUgXCIgK1xyXG5cdFx0XHRcdFwicmVuZGVyaW5nIGEgdGVtcGxhdGUgaW50byBpdC5cIilcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgaW5kZXggPSByb290cy5pbmRleE9mKHJvb3QpXHJcblx0XHRpZiAoaW5kZXggPCAwKSBpbmRleCA9IHJvb3RzLmxlbmd0aFxyXG5cclxuXHRcdHZhciBpc1ByZXZlbnRlZCA9IGZhbHNlXHJcblx0XHR2YXIgZXZlbnQgPSB7XHJcblx0XHRcdHByZXZlbnREZWZhdWx0OiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0aXNQcmV2ZW50ZWQgPSB0cnVlXHJcblx0XHRcdFx0Y29tcHV0ZVByZVJlZHJhd0hvb2sgPSBjb21wdXRlUG9zdFJlZHJhd0hvb2sgPSBudWxsXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmb3JFYWNoKHVubG9hZGVycywgZnVuY3Rpb24gKHVubG9hZGVyKSB7XHJcblx0XHRcdHVubG9hZGVyLmhhbmRsZXIuY2FsbCh1bmxvYWRlci5jb250cm9sbGVyLCBldmVudClcclxuXHRcdFx0dW5sb2FkZXIuY29udHJvbGxlci5vbnVubG9hZCA9IG51bGxcclxuXHRcdH0pXHJcblxyXG5cdFx0aWYgKGlzUHJldmVudGVkKSB7XHJcblx0XHRcdGZvckVhY2godW5sb2FkZXJzLCBmdW5jdGlvbiAodW5sb2FkZXIpIHtcclxuXHRcdFx0XHR1bmxvYWRlci5jb250cm9sbGVyLm9udW5sb2FkID0gdW5sb2FkZXIuaGFuZGxlclxyXG5cdFx0XHR9KVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dW5sb2FkZXJzID0gW11cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoY29udHJvbGxlcnNbaW5kZXhdICYmIGlzRnVuY3Rpb24oY29udHJvbGxlcnNbaW5kZXhdLm9udW5sb2FkKSkge1xyXG5cdFx0XHRjb250cm9sbGVyc1tpbmRleF0ub251bmxvYWQoZXZlbnQpXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGNoZWNrUHJldmVudGVkKGNvbXBvbmVudCwgcm9vdCwgaW5kZXgsIGlzUHJldmVudGVkKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gcmVtb3ZlUm9vdEVsZW1lbnQocm9vdCwgaW5kZXgpIHtcclxuXHRcdHJvb3RzLnNwbGljZShpbmRleCwgMSlcclxuXHRcdGNvbnRyb2xsZXJzLnNwbGljZShpbmRleCwgMSlcclxuXHRcdGNvbXBvbmVudHMuc3BsaWNlKGluZGV4LCAxKVxyXG5cdFx0cmVzZXQocm9vdClcclxuXHRcdG5vZGVDYWNoZS5zcGxpY2UoZ2V0Q2VsbENhY2hlS2V5KHJvb3QpLCAxKVxyXG5cdH1cclxuXHJcblx0dmFyIHJlZHJhd2luZyA9IGZhbHNlXHJcblx0bS5yZWRyYXcgPSBmdW5jdGlvbiAoZm9yY2UpIHtcclxuXHRcdGlmIChyZWRyYXdpbmcpIHJldHVyblxyXG5cdFx0cmVkcmF3aW5nID0gdHJ1ZVxyXG5cdFx0aWYgKGZvcmNlKSBmb3JjaW5nID0gdHJ1ZVxyXG5cclxuXHRcdHRyeSB7XHJcblx0XHRcdC8vIGxhc3RSZWRyYXdJZCBpcyBhIHBvc2l0aXZlIG51bWJlciBpZiBhIHNlY29uZCByZWRyYXcgaXMgcmVxdWVzdGVkXHJcblx0XHRcdC8vIGJlZm9yZSB0aGUgbmV4dCBhbmltYXRpb24gZnJhbWVcclxuXHRcdFx0Ly8gbGFzdFJlZHJhd0lkIGlzIG51bGwgaWYgaXQncyB0aGUgZmlyc3QgcmVkcmF3IGFuZCBub3QgYW4gZXZlbnRcclxuXHRcdFx0Ly8gaGFuZGxlclxyXG5cdFx0XHRpZiAobGFzdFJlZHJhd0lkICYmICFmb3JjZSkge1xyXG5cdFx0XHRcdC8vIHdoZW4gc2V0VGltZW91dDogb25seSByZXNjaGVkdWxlIHJlZHJhdyBpZiB0aW1lIGJldHdlZW4gbm93XHJcblx0XHRcdFx0Ly8gYW5kIHByZXZpb3VzIHJlZHJhdyBpcyBiaWdnZXIgdGhhbiBhIGZyYW1lLCBvdGhlcndpc2Uga2VlcFxyXG5cdFx0XHRcdC8vIGN1cnJlbnRseSBzY2hlZHVsZWQgdGltZW91dFxyXG5cdFx0XHRcdC8vIHdoZW4gckFGOiBhbHdheXMgcmVzY2hlZHVsZSByZWRyYXdcclxuXHRcdFx0XHRpZiAoJHJlcXVlc3RBbmltYXRpb25GcmFtZSA9PT0gZ2xvYmFsLnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG5cdFx0XHRcdFx0XHRuZXcgRGF0ZSgpIC0gbGFzdFJlZHJhd0NhbGxUaW1lID4gRlJBTUVfQlVER0VUKSB7XHJcblx0XHRcdFx0XHRpZiAobGFzdFJlZHJhd0lkID4gMCkgJGNhbmNlbEFuaW1hdGlvbkZyYW1lKGxhc3RSZWRyYXdJZClcclxuXHRcdFx0XHRcdGxhc3RSZWRyYXdJZCA9ICRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVkcmF3LCBGUkFNRV9CVURHRVQpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlZHJhdygpXHJcblx0XHRcdFx0bGFzdFJlZHJhd0lkID0gJHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRsYXN0UmVkcmF3SWQgPSBudWxsXHJcblx0XHRcdFx0fSwgRlJBTUVfQlVER0VUKVxyXG5cdFx0XHR9XHJcblx0XHR9IGZpbmFsbHkge1xyXG5cdFx0XHRyZWRyYXdpbmcgPSBmb3JjaW5nID0gZmFsc2VcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG0ucmVkcmF3LnN0cmF0ZWd5ID0gbS5wcm9wKClcclxuXHRmdW5jdGlvbiByZWRyYXcoKSB7XHJcblx0XHRpZiAoY29tcHV0ZVByZVJlZHJhd0hvb2spIHtcclxuXHRcdFx0Y29tcHV0ZVByZVJlZHJhd0hvb2soKVxyXG5cdFx0XHRjb21wdXRlUHJlUmVkcmF3SG9vayA9IG51bGxcclxuXHRcdH1cclxuXHRcdGZvckVhY2gocm9vdHMsIGZ1bmN0aW9uIChyb290LCBpKSB7XHJcblx0XHRcdHZhciBjb21wb25lbnQgPSBjb21wb25lbnRzW2ldXHJcblx0XHRcdGlmIChjb250cm9sbGVyc1tpXSkge1xyXG5cdFx0XHRcdHZhciBhcmdzID0gW2NvbnRyb2xsZXJzW2ldXVxyXG5cdFx0XHRcdG0ucmVuZGVyKHJvb3QsXHJcblx0XHRcdFx0XHRjb21wb25lbnQudmlldyA/IGNvbXBvbmVudC52aWV3KGNvbnRyb2xsZXJzW2ldLCBhcmdzKSA6IFwiXCIpXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0XHQvLyBhZnRlciByZW5kZXJpbmcgd2l0aGluIGEgcm91dGVkIGNvbnRleHQsIHdlIG5lZWQgdG8gc2Nyb2xsIGJhY2sgdG9cclxuXHRcdC8vIHRoZSB0b3AsIGFuZCBmZXRjaCB0aGUgZG9jdW1lbnQgdGl0bGUgZm9yIGhpc3RvcnkucHVzaFN0YXRlXHJcblx0XHRpZiAoY29tcHV0ZVBvc3RSZWRyYXdIb29rKSB7XHJcblx0XHRcdGNvbXB1dGVQb3N0UmVkcmF3SG9vaygpXHJcblx0XHRcdGNvbXB1dGVQb3N0UmVkcmF3SG9vayA9IG51bGxcclxuXHRcdH1cclxuXHRcdGxhc3RSZWRyYXdJZCA9IG51bGxcclxuXHRcdGxhc3RSZWRyYXdDYWxsVGltZSA9IG5ldyBEYXRlKClcclxuXHRcdG0ucmVkcmF3LnN0cmF0ZWd5KFwiZGlmZlwiKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZW5kRmlyc3RDb21wdXRhdGlvbigpIHtcclxuXHRcdGlmIChtLnJlZHJhdy5zdHJhdGVneSgpID09PSBcIm5vbmVcIikge1xyXG5cdFx0XHRwZW5kaW5nUmVxdWVzdHMtLVxyXG5cdFx0XHRtLnJlZHJhdy5zdHJhdGVneShcImRpZmZcIilcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG0uZW5kQ29tcHV0YXRpb24oKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bS53aXRoQXR0ciA9IGZ1bmN0aW9uIChwcm9wLCB3aXRoQXR0ckNhbGxiYWNrLCBjYWxsYmFja1RoaXMpIHtcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRlID0gZSB8fCB3aW5kb3cuZXZlbnRcclxuXHRcdFx0LyogZXNsaW50LWRpc2FibGUgbm8taW52YWxpZC10aGlzICovXHJcblx0XHRcdHZhciBjdXJyZW50VGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0IHx8IHRoaXNcclxuXHRcdFx0dmFyIF90aGlzID0gY2FsbGJhY2tUaGlzIHx8IHRoaXNcclxuXHRcdFx0LyogZXNsaW50LWVuYWJsZSBuby1pbnZhbGlkLXRoaXMgKi9cclxuXHRcdFx0dmFyIHRhcmdldCA9IHByb3AgaW4gY3VycmVudFRhcmdldCA/XHJcblx0XHRcdFx0Y3VycmVudFRhcmdldFtwcm9wXSA6XHJcblx0XHRcdFx0Y3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUocHJvcClcclxuXHRcdFx0d2l0aEF0dHJDYWxsYmFjay5jYWxsKF90aGlzLCB0YXJnZXQpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyByb3V0aW5nXHJcblx0dmFyIG1vZGVzID0ge3BhdGhuYW1lOiBcIlwiLCBoYXNoOiBcIiNcIiwgc2VhcmNoOiBcIj9cIn1cclxuXHR2YXIgcmVkaXJlY3QgPSBub29wXHJcblx0dmFyIGlzRGVmYXVsdFJvdXRlID0gZmFsc2VcclxuXHR2YXIgcm91dGVQYXJhbXMsIGN1cnJlbnRSb3V0ZVxyXG5cclxuXHRtLnJvdXRlID0gZnVuY3Rpb24gKHJvb3QsIGFyZzEsIGFyZzIsIHZkb20pIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG5cdFx0Ly8gbS5yb3V0ZSgpXHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGN1cnJlbnRSb3V0ZVxyXG5cdFx0Ly8gbS5yb3V0ZShlbCwgZGVmYXVsdFJvdXRlLCByb3V0ZXMpXHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMyAmJiBpc1N0cmluZyhhcmcxKSkge1xyXG5cdFx0XHRyZWRpcmVjdCA9IGZ1bmN0aW9uIChzb3VyY2UpIHtcclxuXHRcdFx0XHR2YXIgcGF0aCA9IGN1cnJlbnRSb3V0ZSA9IG5vcm1hbGl6ZVJvdXRlKHNvdXJjZSlcclxuXHRcdFx0XHRpZiAoIXJvdXRlQnlWYWx1ZShyb290LCBhcmcyLCBwYXRoKSkge1xyXG5cdFx0XHRcdFx0aWYgKGlzRGVmYXVsdFJvdXRlKSB7XHJcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIkVuc3VyZSB0aGUgZGVmYXVsdCByb3V0ZSBtYXRjaGVzIFwiICtcclxuXHRcdFx0XHRcdFx0XHRcIm9uZSBvZiB0aGUgcm91dGVzIGRlZmluZWQgaW4gbS5yb3V0ZVwiKVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlzRGVmYXVsdFJvdXRlID0gdHJ1ZVxyXG5cdFx0XHRcdFx0bS5yb3V0ZShhcmcxLCB0cnVlKVxyXG5cdFx0XHRcdFx0aXNEZWZhdWx0Um91dGUgPSBmYWxzZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIGxpc3RlbmVyID0gbS5yb3V0ZS5tb2RlID09PSBcImhhc2hcIiA/XHJcblx0XHRcdFx0XCJvbmhhc2hjaGFuZ2VcIiA6XHJcblx0XHRcdFx0XCJvbnBvcHN0YXRlXCJcclxuXHJcblx0XHRcdGdsb2JhbFtsaXN0ZW5lcl0gPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0dmFyIHBhdGggPSAkbG9jYXRpb25bbS5yb3V0ZS5tb2RlXVxyXG5cdFx0XHRcdGlmIChtLnJvdXRlLm1vZGUgPT09IFwicGF0aG5hbWVcIikgcGF0aCArPSAkbG9jYXRpb24uc2VhcmNoXHJcblx0XHRcdFx0aWYgKGN1cnJlbnRSb3V0ZSAhPT0gbm9ybWFsaXplUm91dGUocGF0aCkpIHJlZGlyZWN0KHBhdGgpXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbXB1dGVQcmVSZWRyYXdIb29rID0gc2V0U2Nyb2xsXHJcblx0XHRcdGdsb2JhbFtsaXN0ZW5lcl0oKVxyXG5cclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gY29uZmlnOiBtLnJvdXRlXHJcblx0XHRpZiAocm9vdC5hZGRFdmVudExpc3RlbmVyIHx8IHJvb3QuYXR0YWNoRXZlbnQpIHtcclxuXHRcdFx0dmFyIGJhc2UgPSBtLnJvdXRlLm1vZGUgIT09IFwicGF0aG5hbWVcIiA/ICRsb2NhdGlvbi5wYXRobmFtZSA6IFwiXCJcclxuXHRcdFx0cm9vdC5ocmVmID0gYmFzZSArIG1vZGVzW20ucm91dGUubW9kZV0gKyB2ZG9tLmF0dHJzLmhyZWZcclxuXHRcdFx0aWYgKHJvb3QuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG5cdFx0XHRcdHJvb3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJvdXRlVW5vYnRydXNpdmUpXHJcblx0XHRcdFx0cm9vdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcm91dGVVbm9idHJ1c2l2ZSlcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyb290LmRldGFjaEV2ZW50KFwib25jbGlja1wiLCByb3V0ZVVub2J0cnVzaXZlKVxyXG5cdFx0XHRcdHJvb3QuYXR0YWNoRXZlbnQoXCJvbmNsaWNrXCIsIHJvdXRlVW5vYnRydXNpdmUpXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVyblxyXG5cdFx0fVxyXG5cdFx0Ly8gbS5yb3V0ZShyb3V0ZSwgcGFyYW1zLCBzaG91bGRSZXBsYWNlSGlzdG9yeUVudHJ5KVxyXG5cdFx0aWYgKGlzU3RyaW5nKHJvb3QpKSB7XHJcblx0XHRcdHZhciBvbGRSb3V0ZSA9IGN1cnJlbnRSb3V0ZVxyXG5cdFx0XHRjdXJyZW50Um91dGUgPSByb290XHJcblxyXG5cdFx0XHR2YXIgYXJncyA9IGFyZzEgfHwge31cclxuXHRcdFx0dmFyIHF1ZXJ5SW5kZXggPSBjdXJyZW50Um91dGUuaW5kZXhPZihcIj9cIilcclxuXHRcdFx0dmFyIHBhcmFtc1xyXG5cclxuXHRcdFx0aWYgKHF1ZXJ5SW5kZXggPiAtMSkge1xyXG5cdFx0XHRcdHBhcmFtcyA9IHBhcnNlUXVlcnlTdHJpbmcoY3VycmVudFJvdXRlLnNsaWNlKHF1ZXJ5SW5kZXggKyAxKSlcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRwYXJhbXMgPSB7fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmb3IgKHZhciBpIGluIGFyZ3MpIHtcclxuXHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJncywgaSkpIHtcclxuXHRcdFx0XHRcdHBhcmFtc1tpXSA9IGFyZ3NbaV1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBxdWVyeXN0cmluZyA9IGJ1aWxkUXVlcnlTdHJpbmcocGFyYW1zKVxyXG5cdFx0XHR2YXIgY3VycmVudFBhdGhcclxuXHJcblx0XHRcdGlmIChxdWVyeUluZGV4ID4gLTEpIHtcclxuXHRcdFx0XHRjdXJyZW50UGF0aCA9IGN1cnJlbnRSb3V0ZS5zbGljZSgwLCBxdWVyeUluZGV4KVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGN1cnJlbnRQYXRoID0gY3VycmVudFJvdXRlXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChxdWVyeXN0cmluZykge1xyXG5cdFx0XHRcdGN1cnJlbnRSb3V0ZSA9IGN1cnJlbnRQYXRoICtcclxuXHRcdFx0XHRcdChjdXJyZW50UGF0aC5pbmRleE9mKFwiP1wiKSA9PT0gLTEgPyBcIj9cIiA6IFwiJlwiKSArXHJcblx0XHRcdFx0XHRxdWVyeXN0cmluZ1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgcmVwbGFjZUhpc3RvcnkgPVxyXG5cdFx0XHRcdChhcmd1bWVudHMubGVuZ3RoID09PSAzID8gYXJnMiA6IGFyZzEpID09PSB0cnVlIHx8XHJcblx0XHRcdFx0b2xkUm91dGUgPT09IHJvb3RcclxuXHJcblx0XHRcdGlmIChnbG9iYWwuaGlzdG9yeS5wdXNoU3RhdGUpIHtcclxuXHRcdFx0XHR2YXIgbWV0aG9kID0gcmVwbGFjZUhpc3RvcnkgPyBcInJlcGxhY2VTdGF0ZVwiIDogXCJwdXNoU3RhdGVcIlxyXG5cdFx0XHRcdGNvbXB1dGVQcmVSZWRyYXdIb29rID0gc2V0U2Nyb2xsXHJcblx0XHRcdFx0Y29tcHV0ZVBvc3RSZWRyYXdIb29rID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0Z2xvYmFsLmhpc3RvcnlbbWV0aG9kXShudWxsLCAkZG9jdW1lbnQudGl0bGUsXHJcblx0XHRcdFx0XHRcdG1vZGVzW20ucm91dGUubW9kZV0gKyBjdXJyZW50Um91dGUpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJlZGlyZWN0KG1vZGVzW20ucm91dGUubW9kZV0gKyBjdXJyZW50Um91dGUpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JGxvY2F0aW9uW20ucm91dGUubW9kZV0gPSBjdXJyZW50Um91dGVcclxuXHRcdFx0XHRyZWRpcmVjdChtb2Rlc1ttLnJvdXRlLm1vZGVdICsgY3VycmVudFJvdXRlKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRtLnJvdXRlLnBhcmFtID0gZnVuY3Rpb24gKGtleSkge1xyXG5cdFx0aWYgKCFyb3V0ZVBhcmFtcykge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJZb3UgbXVzdCBjYWxsIG0ucm91dGUoZWxlbWVudCwgZGVmYXVsdFJvdXRlLCBcIiArXHJcblx0XHRcdFx0XCJyb3V0ZXMpIGJlZm9yZSBjYWxsaW5nIG0ucm91dGUucGFyYW0oKVwiKVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICgha2V5KSB7XHJcblx0XHRcdHJldHVybiByb3V0ZVBhcmFtc1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiByb3V0ZVBhcmFtc1trZXldXHJcblx0fVxyXG5cclxuXHRtLnJvdXRlLm1vZGUgPSBcInNlYXJjaFwiXHJcblxyXG5cdGZ1bmN0aW9uIG5vcm1hbGl6ZVJvdXRlKHJvdXRlKSB7XHJcblx0XHRyZXR1cm4gcm91dGUuc2xpY2UobW9kZXNbbS5yb3V0ZS5tb2RlXS5sZW5ndGgpXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiByb3V0ZUJ5VmFsdWUocm9vdCwgcm91dGVyLCBwYXRoKSB7XHJcblx0XHRyb3V0ZVBhcmFtcyA9IHt9XHJcblxyXG5cdFx0dmFyIHF1ZXJ5U3RhcnQgPSBwYXRoLmluZGV4T2YoXCI/XCIpXHJcblx0XHRpZiAocXVlcnlTdGFydCAhPT0gLTEpIHtcclxuXHRcdFx0cm91dGVQYXJhbXMgPSBwYXJzZVF1ZXJ5U3RyaW5nKFxyXG5cdFx0XHRcdHBhdGguc3Vic3RyKHF1ZXJ5U3RhcnQgKyAxLCBwYXRoLmxlbmd0aCkpXHJcblx0XHRcdHBhdGggPSBwYXRoLnN1YnN0cigwLCBxdWVyeVN0YXJ0KVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIEdldCBhbGwgcm91dGVzIGFuZCBjaGVjayBpZiB0aGVyZSdzXHJcblx0XHQvLyBhbiBleGFjdCBtYXRjaCBmb3IgdGhlIGN1cnJlbnQgcGF0aFxyXG5cdFx0dmFyIGtleXMgPSBPYmplY3Qua2V5cyhyb3V0ZXIpXHJcblx0XHR2YXIgaW5kZXggPSBrZXlzLmluZGV4T2YocGF0aClcclxuXHJcblx0XHRpZiAoaW5kZXggIT09IC0xKXtcclxuXHRcdFx0bS5tb3VudChyb290LCByb3V0ZXJba2V5cyBbaW5kZXhdXSlcclxuXHRcdFx0cmV0dXJuIHRydWVcclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKHZhciByb3V0ZSBpbiByb3V0ZXIpIHtcclxuXHRcdFx0aWYgKGhhc093bi5jYWxsKHJvdXRlciwgcm91dGUpKSB7XHJcblx0XHRcdFx0aWYgKHJvdXRlID09PSBwYXRoKSB7XHJcblx0XHRcdFx0XHRtLm1vdW50KHJvb3QsIHJvdXRlcltyb3V0ZV0pXHJcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dmFyIG1hdGNoZXIgPSBuZXcgUmVnRXhwKFwiXlwiICsgcm91dGVcclxuXHRcdFx0XHRcdC5yZXBsYWNlKC86W15cXC9dKz9cXC57M30vZywgXCIoLio/KVwiKVxyXG5cdFx0XHRcdFx0LnJlcGxhY2UoLzpbXlxcL10rL2csIFwiKFteXFxcXC9dKylcIikgKyBcIlxcLz8kXCIpXHJcblxyXG5cdFx0XHRcdGlmIChtYXRjaGVyLnRlc3QocGF0aCkpIHtcclxuXHRcdFx0XHRcdC8qIGVzbGludC1kaXNhYmxlIG5vLWxvb3AtZnVuYyAqL1xyXG5cdFx0XHRcdFx0cGF0aC5yZXBsYWNlKG1hdGNoZXIsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0dmFyIGtleXMgPSByb3V0ZS5tYXRjaCgvOlteXFwvXSsvZykgfHwgW11cclxuXHRcdFx0XHRcdFx0dmFyIHZhbHVlcyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxLCAtMilcclxuXHRcdFx0XHRcdFx0Zm9yRWFjaChrZXlzLCBmdW5jdGlvbiAoa2V5LCBpKSB7XHJcblx0XHRcdFx0XHRcdFx0cm91dGVQYXJhbXNba2V5LnJlcGxhY2UoLzp8XFwuL2csIFwiXCIpXSA9XHJcblx0XHRcdFx0XHRcdFx0XHRkZWNvZGVVUklDb21wb25lbnQodmFsdWVzW2ldKVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRtLm1vdW50KHJvb3QsIHJvdXRlcltyb3V0ZV0pXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LyogZXNsaW50LWVuYWJsZSBuby1sb29wLWZ1bmMgKi9cclxuXHRcdFx0XHRcdHJldHVybiB0cnVlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiByb3V0ZVVub2J0cnVzaXZlKGUpIHtcclxuXHRcdGUgPSBlIHx8IGV2ZW50XHJcblx0XHRpZiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSB8fCBlLnNoaWZ0S2V5IHx8IGUud2hpY2ggPT09IDIpIHJldHVyblxyXG5cclxuXHRcdGlmIChlLnByZXZlbnREZWZhdWx0KSB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZS5yZXR1cm5WYWx1ZSA9IGZhbHNlXHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGN1cnJlbnRUYXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQgfHwgZS5zcmNFbGVtZW50XHJcblx0XHR2YXIgYXJnc1xyXG5cclxuXHRcdGlmIChtLnJvdXRlLm1vZGUgPT09IFwicGF0aG5hbWVcIiAmJiBjdXJyZW50VGFyZ2V0LnNlYXJjaCkge1xyXG5cdFx0XHRhcmdzID0gcGFyc2VRdWVyeVN0cmluZyhjdXJyZW50VGFyZ2V0LnNlYXJjaC5zbGljZSgxKSlcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGFyZ3MgPSB7fVxyXG5cdFx0fVxyXG5cclxuXHRcdHdoaWxlIChjdXJyZW50VGFyZ2V0ICYmICEvYS9pLnRlc3QoY3VycmVudFRhcmdldC5ub2RlTmFtZSkpIHtcclxuXHRcdFx0Y3VycmVudFRhcmdldCA9IGN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGNsZWFyIHBlbmRpbmdSZXF1ZXN0cyBiZWNhdXNlIHdlIHdhbnQgYW4gaW1tZWRpYXRlIHJvdXRlIGNoYW5nZVxyXG5cdFx0cGVuZGluZ1JlcXVlc3RzID0gMFxyXG5cdFx0bS5yb3V0ZShjdXJyZW50VGFyZ2V0W20ucm91dGUubW9kZV1cclxuXHRcdFx0LnNsaWNlKG1vZGVzW20ucm91dGUubW9kZV0ubGVuZ3RoKSwgYXJncylcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHNldFNjcm9sbCgpIHtcclxuXHRcdGlmIChtLnJvdXRlLm1vZGUgIT09IFwiaGFzaFwiICYmICRsb2NhdGlvbi5oYXNoKSB7XHJcblx0XHRcdCRsb2NhdGlvbi5oYXNoID0gJGxvY2F0aW9uLmhhc2hcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGdsb2JhbC5zY3JvbGxUbygwLCAwKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYnVpbGRRdWVyeVN0cmluZyhvYmplY3QsIHByZWZpeCkge1xyXG5cdFx0dmFyIGR1cGxpY2F0ZXMgPSB7fVxyXG5cdFx0dmFyIHN0ciA9IFtdXHJcblxyXG5cdFx0Zm9yICh2YXIgcHJvcCBpbiBvYmplY3QpIHtcclxuXHRcdFx0aWYgKGhhc093bi5jYWxsKG9iamVjdCwgcHJvcCkpIHtcclxuXHRcdFx0XHR2YXIga2V5ID0gcHJlZml4ID8gcHJlZml4ICsgXCJbXCIgKyBwcm9wICsgXCJdXCIgOiBwcm9wXHJcblx0XHRcdFx0dmFyIHZhbHVlID0gb2JqZWN0W3Byb3BdXHJcblxyXG5cdFx0XHRcdGlmICh2YWx1ZSA9PT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0c3RyLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleSkpXHJcblx0XHRcdFx0fSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcclxuXHRcdFx0XHRcdHN0ci5wdXNoKGJ1aWxkUXVlcnlTdHJpbmcodmFsdWUsIGtleSkpXHJcblx0XHRcdFx0fSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xyXG5cdFx0XHRcdFx0dmFyIGtleXMgPSBbXVxyXG5cdFx0XHRcdFx0ZHVwbGljYXRlc1trZXldID0gZHVwbGljYXRlc1trZXldIHx8IHt9XHJcblx0XHRcdFx0XHQvKiBlc2xpbnQtZGlzYWJsZSBuby1sb29wLWZ1bmMgKi9cclxuXHRcdFx0XHRcdGZvckVhY2godmFsdWUsIGZ1bmN0aW9uIChpdGVtKSB7XHJcblx0XHRcdFx0XHRcdC8qIGVzbGludC1lbmFibGUgbm8tbG9vcC1mdW5jICovXHJcblx0XHRcdFx0XHRcdGlmICghZHVwbGljYXRlc1trZXldW2l0ZW1dKSB7XHJcblx0XHRcdFx0XHRcdFx0ZHVwbGljYXRlc1trZXldW2l0ZW1dID0gdHJ1ZVxyXG5cdFx0XHRcdFx0XHRcdGtleXMucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSArIFwiPVwiICtcclxuXHRcdFx0XHRcdFx0XHRcdGVuY29kZVVSSUNvbXBvbmVudChpdGVtKSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdHN0ci5wdXNoKGtleXMuam9pbihcIiZcIikpXHJcblx0XHRcdFx0fSBlbHNlIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRzdHIucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSArIFwiPVwiICtcclxuXHRcdFx0XHRcdFx0ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gc3RyLmpvaW4oXCImXCIpXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBwYXJzZVF1ZXJ5U3RyaW5nKHN0cikge1xyXG5cdFx0aWYgKHN0ciA9PT0gXCJcIiB8fCBzdHIgPT0gbnVsbCkgcmV0dXJuIHt9XHJcblx0XHRpZiAoc3RyLmNoYXJBdCgwKSA9PT0gXCI/XCIpIHN0ciA9IHN0ci5zbGljZSgxKVxyXG5cclxuXHRcdHZhciBwYWlycyA9IHN0ci5zcGxpdChcIiZcIilcclxuXHRcdHZhciBwYXJhbXMgPSB7fVxyXG5cclxuXHRcdGZvckVhY2gocGFpcnMsIGZ1bmN0aW9uIChzdHJpbmcpIHtcclxuXHRcdFx0dmFyIHBhaXIgPSBzdHJpbmcuc3BsaXQoXCI9XCIpXHJcblx0XHRcdHZhciBrZXkgPSBkZWNvZGVVUklDb21wb25lbnQocGFpclswXSlcclxuXHRcdFx0dmFyIHZhbHVlID0gcGFpci5sZW5ndGggPT09IDIgPyBkZWNvZGVVUklDb21wb25lbnQocGFpclsxXSkgOiBudWxsXHJcblx0XHRcdGlmIChwYXJhbXNba2V5XSAhPSBudWxsKSB7XHJcblx0XHRcdFx0aWYgKCFpc0FycmF5KHBhcmFtc1trZXldKSkgcGFyYW1zW2tleV0gPSBbcGFyYW1zW2tleV1dXHJcblx0XHRcdFx0cGFyYW1zW2tleV0ucHVzaCh2YWx1ZSlcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHBhcmFtc1trZXldID0gdmFsdWVcclxuXHRcdH0pXHJcblxyXG5cdFx0cmV0dXJuIHBhcmFtc1xyXG5cdH1cclxuXHJcblx0bS5yb3V0ZS5idWlsZFF1ZXJ5U3RyaW5nID0gYnVpbGRRdWVyeVN0cmluZ1xyXG5cdG0ucm91dGUucGFyc2VRdWVyeVN0cmluZyA9IHBhcnNlUXVlcnlTdHJpbmdcclxuXHJcblx0ZnVuY3Rpb24gcmVzZXQocm9vdCkge1xyXG5cdFx0dmFyIGNhY2hlS2V5ID0gZ2V0Q2VsbENhY2hlS2V5KHJvb3QpXHJcblx0XHRjbGVhcihyb290LmNoaWxkTm9kZXMsIGNlbGxDYWNoZVtjYWNoZUtleV0pXHJcblx0XHRjZWxsQ2FjaGVbY2FjaGVLZXldID0gdW5kZWZpbmVkXHJcblx0fVxyXG5cclxuXHRtLmRlZmVycmVkID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dmFyIGRlZmVycmVkID0gbmV3IERlZmVycmVkKClcclxuXHRcdGRlZmVycmVkLnByb21pc2UgPSBwcm9waWZ5KGRlZmVycmVkLnByb21pc2UpXHJcblx0XHRyZXR1cm4gZGVmZXJyZWRcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHByb3BpZnkocHJvbWlzZSwgaW5pdGlhbFZhbHVlKSB7XHJcblx0XHR2YXIgcHJvcCA9IG0ucHJvcChpbml0aWFsVmFsdWUpXHJcblx0XHRwcm9taXNlLnRoZW4ocHJvcClcclxuXHRcdHByb3AudGhlbiA9IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuXHRcdFx0cmV0dXJuIHByb3BpZnkocHJvbWlzZS50aGVuKHJlc29sdmUsIHJlamVjdCksIGluaXRpYWxWYWx1ZSlcclxuXHRcdH1cclxuXHJcblx0XHRwcm9wLmNhdGNoID0gcHJvcC50aGVuLmJpbmQobnVsbCwgbnVsbClcclxuXHRcdHJldHVybiBwcm9wXHJcblx0fVxyXG5cdC8vIFByb21pei5taXRocmlsLmpzIHwgWm9sbWVpc3RlciB8IE1JVFxyXG5cdC8vIGEgbW9kaWZpZWQgdmVyc2lvbiBvZiBQcm9taXouanMsIHdoaWNoIGRvZXMgbm90IGNvbmZvcm0gdG8gUHJvbWlzZXMvQStcclxuXHQvLyBmb3IgdHdvIHJlYXNvbnM6XHJcblx0Ly9cclxuXHQvLyAxKSBgdGhlbmAgY2FsbGJhY2tzIGFyZSBjYWxsZWQgc3luY2hyb25vdXNseSAoYmVjYXVzZSBzZXRUaW1lb3V0IGlzIHRvb1xyXG5cdC8vICAgIHNsb3csIGFuZCB0aGUgc2V0SW1tZWRpYXRlIHBvbHlmaWxsIGlzIHRvbyBiaWdcclxuXHQvL1xyXG5cdC8vIDIpIHRocm93aW5nIHN1YmNsYXNzZXMgb2YgRXJyb3IgY2F1c2UgdGhlIGVycm9yIHRvIGJlIGJ1YmJsZWQgdXAgaW5zdGVhZFxyXG5cdC8vICAgIG9mIHRyaWdnZXJpbmcgcmVqZWN0aW9uIChiZWNhdXNlIHRoZSBzcGVjIGRvZXMgbm90IGFjY291bnQgZm9yIHRoZVxyXG5cdC8vICAgIGltcG9ydGFudCB1c2UgY2FzZSBvZiBkZWZhdWx0IGJyb3dzZXIgZXJyb3IgaGFuZGxpbmcsIGkuZS4gbWVzc2FnZSB3L1xyXG5cdC8vICAgIGxpbmUgbnVtYmVyKVxyXG5cclxuXHR2YXIgUkVTT0xWSU5HID0gMVxyXG5cdHZhciBSRUpFQ1RJTkcgPSAyXHJcblx0dmFyIFJFU09MVkVEID0gM1xyXG5cdHZhciBSRUpFQ1RFRCA9IDRcclxuXHJcblx0ZnVuY3Rpb24gRGVmZXJyZWQob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcclxuXHRcdHZhciBzZWxmID0gdGhpc1xyXG5cdFx0dmFyIHN0YXRlID0gMFxyXG5cdFx0dmFyIHByb21pc2VWYWx1ZSA9IDBcclxuXHRcdHZhciBuZXh0ID0gW11cclxuXHJcblx0XHRzZWxmLnByb21pc2UgPSB7fVxyXG5cclxuXHRcdHNlbGYucmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG5cdFx0XHRpZiAoIXN0YXRlKSB7XHJcblx0XHRcdFx0cHJvbWlzZVZhbHVlID0gdmFsdWVcclxuXHRcdFx0XHRzdGF0ZSA9IFJFU09MVklOR1xyXG5cclxuXHRcdFx0XHRmaXJlKClcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHNlbGZcclxuXHRcdH1cclxuXHJcblx0XHRzZWxmLnJlamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG5cdFx0XHRpZiAoIXN0YXRlKSB7XHJcblx0XHRcdFx0cHJvbWlzZVZhbHVlID0gdmFsdWVcclxuXHRcdFx0XHRzdGF0ZSA9IFJFSkVDVElOR1xyXG5cclxuXHRcdFx0XHRmaXJlKClcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHNlbGZcclxuXHRcdH1cclxuXHJcblx0XHRzZWxmLnByb21pc2UudGhlbiA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xyXG5cdFx0XHR2YXIgZGVmZXJyZWQgPSBuZXcgRGVmZXJyZWQob25TdWNjZXNzLCBvbkZhaWx1cmUpXHJcblxyXG5cdFx0XHRpZiAoc3RhdGUgPT09IFJFU09MVkVEKSB7XHJcblx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShwcm9taXNlVmFsdWUpXHJcblx0XHRcdH0gZWxzZSBpZiAoc3RhdGUgPT09IFJFSkVDVEVEKSB7XHJcblx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KHByb21pc2VWYWx1ZSlcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRuZXh0LnB1c2goZGVmZXJyZWQpXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBkZWZlcnJlZC5wcm9taXNlXHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZmluaXNoKHR5cGUpIHtcclxuXHRcdFx0c3RhdGUgPSB0eXBlIHx8IFJFSkVDVEVEXHJcblx0XHRcdG5leHQubWFwKGZ1bmN0aW9uIChkZWZlcnJlZCkge1xyXG5cdFx0XHRcdGlmIChzdGF0ZSA9PT0gUkVTT0xWRUQpIHtcclxuXHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUocHJvbWlzZVZhbHVlKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QocHJvbWlzZVZhbHVlKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiB0aGVubmFibGUodGhlbiwgc3VjY2VzcywgZmFpbHVyZSwgbm90VGhlbm5hYmxlKSB7XHJcblx0XHRcdGlmICgoKHByb21pc2VWYWx1ZSAhPSBudWxsICYmIGlzT2JqZWN0KHByb21pc2VWYWx1ZSkpIHx8XHJcblx0XHRcdFx0XHRpc0Z1bmN0aW9uKHByb21pc2VWYWx1ZSkpICYmIGlzRnVuY3Rpb24odGhlbikpIHtcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0Ly8gY291bnQgcHJvdGVjdHMgYWdhaW5zdCBhYnVzZSBjYWxscyBmcm9tIHNwZWMgY2hlY2tlclxyXG5cdFx0XHRcdFx0dmFyIGNvdW50ID0gMFxyXG5cdFx0XHRcdFx0dGhlbi5jYWxsKHByb21pc2VWYWx1ZSwgZnVuY3Rpb24gKHZhbHVlKSB7XHJcblx0XHRcdFx0XHRcdGlmIChjb3VudCsrKSByZXR1cm5cclxuXHRcdFx0XHRcdFx0cHJvbWlzZVZhbHVlID0gdmFsdWVcclxuXHRcdFx0XHRcdFx0c3VjY2VzcygpXHJcblx0XHRcdFx0XHR9LCBmdW5jdGlvbiAodmFsdWUpIHtcclxuXHRcdFx0XHRcdFx0aWYgKGNvdW50KyspIHJldHVyblxyXG5cdFx0XHRcdFx0XHRwcm9taXNlVmFsdWUgPSB2YWx1ZVxyXG5cdFx0XHRcdFx0XHRmYWlsdXJlKClcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdFx0bS5kZWZlcnJlZC5vbmVycm9yKGUpXHJcblx0XHRcdFx0XHRwcm9taXNlVmFsdWUgPSBlXHJcblx0XHRcdFx0XHRmYWlsdXJlKClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bm90VGhlbm5hYmxlKClcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGZpcmUoKSB7XHJcblx0XHRcdC8vIGNoZWNrIGlmIGl0J3MgYSB0aGVuYWJsZVxyXG5cdFx0XHR2YXIgdGhlblxyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHRoZW4gPSBwcm9taXNlVmFsdWUgJiYgcHJvbWlzZVZhbHVlLnRoZW5cclxuXHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdG0uZGVmZXJyZWQub25lcnJvcihlKVxyXG5cdFx0XHRcdHByb21pc2VWYWx1ZSA9IGVcclxuXHRcdFx0XHRzdGF0ZSA9IFJFSkVDVElOR1xyXG5cdFx0XHRcdHJldHVybiBmaXJlKClcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHN0YXRlID09PSBSRUpFQ1RJTkcpIHtcclxuXHRcdFx0XHRtLmRlZmVycmVkLm9uZXJyb3IocHJvbWlzZVZhbHVlKVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGVubmFibGUodGhlbiwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHN0YXRlID0gUkVTT0xWSU5HXHJcblx0XHRcdFx0ZmlyZSgpXHJcblx0XHRcdH0sIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRzdGF0ZSA9IFJFSkVDVElOR1xyXG5cdFx0XHRcdGZpcmUoKVxyXG5cdFx0XHR9LCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdGlmIChzdGF0ZSA9PT0gUkVTT0xWSU5HICYmIGlzRnVuY3Rpb24ob25TdWNjZXNzKSkge1xyXG5cdFx0XHRcdFx0XHRwcm9taXNlVmFsdWUgPSBvblN1Y2Nlc3MocHJvbWlzZVZhbHVlKVxyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChzdGF0ZSA9PT0gUkVKRUNUSU5HICYmIGlzRnVuY3Rpb24ob25GYWlsdXJlKSkge1xyXG5cdFx0XHRcdFx0XHRwcm9taXNlVmFsdWUgPSBvbkZhaWx1cmUocHJvbWlzZVZhbHVlKVxyXG5cdFx0XHRcdFx0XHRzdGF0ZSA9IFJFU09MVklOR1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRcdG0uZGVmZXJyZWQub25lcnJvcihlKVxyXG5cdFx0XHRcdFx0cHJvbWlzZVZhbHVlID0gZVxyXG5cdFx0XHRcdFx0cmV0dXJuIGZpbmlzaCgpXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAocHJvbWlzZVZhbHVlID09PSBzZWxmKSB7XHJcblx0XHRcdFx0XHRwcm9taXNlVmFsdWUgPSBUeXBlRXJyb3IoKVxyXG5cdFx0XHRcdFx0ZmluaXNoKClcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhlbm5hYmxlKHRoZW4sIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0ZmluaXNoKFJFU09MVkVEKVxyXG5cdFx0XHRcdFx0fSwgZmluaXNoLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcdGZpbmlzaChzdGF0ZSA9PT0gUkVTT0xWSU5HICYmIFJFU09MVkVEKVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRtLmRlZmVycmVkLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xyXG5cdFx0aWYgKHR5cGUuY2FsbChlKSA9PT0gXCJbb2JqZWN0IEVycm9yXVwiICYmXHJcblx0XHRcdFx0IS8gRXJyb3IvLnRlc3QoZS5jb25zdHJ1Y3Rvci50b1N0cmluZygpKSkge1xyXG5cdFx0XHRwZW5kaW5nUmVxdWVzdHMgPSAwXHJcblx0XHRcdHRocm93IGVcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG0uc3luYyA9IGZ1bmN0aW9uIChhcmdzKSB7XHJcblx0XHR2YXIgZGVmZXJyZWQgPSBtLmRlZmVycmVkKClcclxuXHRcdHZhciBvdXRzdGFuZGluZyA9IGFyZ3MubGVuZ3RoXHJcblx0XHR2YXIgcmVzdWx0cyA9IFtdXHJcblx0XHR2YXIgbWV0aG9kID0gXCJyZXNvbHZlXCJcclxuXHJcblx0XHRmdW5jdGlvbiBzeW5jaHJvbml6ZXIocG9zLCByZXNvbHZlZCkge1xyXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XHJcblx0XHRcdFx0cmVzdWx0c1twb3NdID0gdmFsdWVcclxuXHRcdFx0XHRpZiAoIXJlc29sdmVkKSBtZXRob2QgPSBcInJlamVjdFwiXHJcblx0XHRcdFx0aWYgKC0tb3V0c3RhbmRpbmcgPT09IDApIHtcclxuXHRcdFx0XHRcdGRlZmVycmVkLnByb21pc2UocmVzdWx0cylcclxuXHRcdFx0XHRcdGRlZmVycmVkW21ldGhvZF0ocmVzdWx0cylcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHZhbHVlXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoYXJncy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdGZvckVhY2goYXJncywgZnVuY3Rpb24gKGFyZywgaSkge1xyXG5cdFx0XHRcdGFyZy50aGVuKHN5bmNocm9uaXplcihpLCB0cnVlKSwgc3luY2hyb25pemVyKGksIGZhbHNlKSlcclxuXHRcdFx0fSlcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGRlZmVycmVkLnJlc29sdmUoW10pXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGRlZmVycmVkLnByb21pc2VcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7IHJldHVybiB2YWx1ZSB9XHJcblxyXG5cdGZ1bmN0aW9uIGhhbmRsZUpzb25wKG9wdGlvbnMpIHtcclxuXHRcdHZhciBjYWxsYmFja0tleSA9IFwibWl0aHJpbF9jYWxsYmFja19cIiArXHJcblx0XHRcdG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgXCJfXCIgK1xyXG5cdFx0XHQoTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMWUxNikpLnRvU3RyaW5nKDM2KVxyXG5cclxuXHRcdHZhciBzY3JpcHQgPSAkZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKVxyXG5cclxuXHRcdGdsb2JhbFtjYWxsYmFja0tleV0gPSBmdW5jdGlvbiAocmVzcCkge1xyXG5cdFx0XHRzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpXHJcblx0XHRcdG9wdGlvbnMub25sb2FkKHtcclxuXHRcdFx0XHR0eXBlOiBcImxvYWRcIixcclxuXHRcdFx0XHR0YXJnZXQ6IHtcclxuXHRcdFx0XHRcdHJlc3BvbnNlVGV4dDogcmVzcFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdFx0Z2xvYmFsW2NhbGxiYWNrS2V5XSA9IHVuZGVmaW5lZFxyXG5cdFx0fVxyXG5cclxuXHRcdHNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpXHJcblxyXG5cdFx0XHRvcHRpb25zLm9uZXJyb3Ioe1xyXG5cdFx0XHRcdHR5cGU6IFwiZXJyb3JcIixcclxuXHRcdFx0XHR0YXJnZXQ6IHtcclxuXHRcdFx0XHRcdHN0YXR1czogNTAwLFxyXG5cdFx0XHRcdFx0cmVzcG9uc2VUZXh0OiBKU09OLnN0cmluZ2lmeSh7XHJcblx0XHRcdFx0XHRcdGVycm9yOiBcIkVycm9yIG1ha2luZyBqc29ucCByZXF1ZXN0XCJcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHRnbG9iYWxbY2FsbGJhY2tLZXldID0gdW5kZWZpbmVkXHJcblxyXG5cdFx0XHRyZXR1cm4gZmFsc2VcclxuXHRcdH1cclxuXHJcblx0XHRzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2VcclxuXHRcdH1cclxuXHJcblx0XHRzY3JpcHQuc3JjID0gb3B0aW9ucy51cmwgK1xyXG5cdFx0XHQob3B0aW9ucy51cmwuaW5kZXhPZihcIj9cIikgPiAwID8gXCImXCIgOiBcIj9cIikgK1xyXG5cdFx0XHQob3B0aW9ucy5jYWxsYmFja0tleSA/IG9wdGlvbnMuY2FsbGJhY2tLZXkgOiBcImNhbGxiYWNrXCIpICtcclxuXHRcdFx0XCI9XCIgKyBjYWxsYmFja0tleSArXHJcblx0XHRcdFwiJlwiICsgYnVpbGRRdWVyeVN0cmluZyhvcHRpb25zLmRhdGEgfHwge30pXHJcblxyXG5cdFx0JGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gY3JlYXRlWGhyKG9wdGlvbnMpIHtcclxuXHRcdHZhciB4aHIgPSBuZXcgZ2xvYmFsLlhNTEh0dHBSZXF1ZXN0KClcclxuXHRcdHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCBvcHRpb25zLnVybCwgdHJ1ZSwgb3B0aW9ucy51c2VyLFxyXG5cdFx0XHRvcHRpb25zLnBhc3N3b3JkKVxyXG5cclxuXHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xyXG5cdFx0XHRcdGlmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSB7XHJcblx0XHRcdFx0XHRvcHRpb25zLm9ubG9hZCh7dHlwZTogXCJsb2FkXCIsIHRhcmdldDogeGhyfSlcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0b3B0aW9ucy5vbmVycm9yKHt0eXBlOiBcImVycm9yXCIsIHRhcmdldDogeGhyfSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAob3B0aW9ucy5zZXJpYWxpemUgPT09IEpTT04uc3RyaW5naWZ5ICYmXHJcblx0XHRcdFx0b3B0aW9ucy5kYXRhICYmXHJcblx0XHRcdFx0b3B0aW9ucy5tZXRob2QgIT09IFwiR0VUXCIpIHtcclxuXHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIixcclxuXHRcdFx0XHRcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIilcclxuXHRcdH1cclxuXHJcblx0XHRpZiAob3B0aW9ucy5kZXNlcmlhbGl6ZSA9PT0gSlNPTi5wYXJzZSkge1xyXG5cdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLCBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvKlwiKVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMuY29uZmlnKSkge1xyXG5cdFx0XHR2YXIgbWF5YmVYaHIgPSBvcHRpb25zLmNvbmZpZyh4aHIsIG9wdGlvbnMpXHJcblx0XHRcdGlmIChtYXliZVhociAhPSBudWxsKSB4aHIgPSBtYXliZVhoclxyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBkYXRhID0gb3B0aW9ucy5tZXRob2QgPT09IFwiR0VUXCIgfHwgIW9wdGlvbnMuZGF0YSA/IFwiXCIgOiBvcHRpb25zLmRhdGFcclxuXHJcblx0XHRpZiAoZGF0YSAmJiAhaXNTdHJpbmcoZGF0YSkgJiYgZGF0YS5jb25zdHJ1Y3RvciAhPT0gZ2xvYmFsLkZvcm1EYXRhKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlJlcXVlc3QgZGF0YSBzaG91bGQgYmUgZWl0aGVyIGJlIGEgc3RyaW5nIG9yIFwiICtcclxuXHRcdFx0XHRcIkZvcm1EYXRhLiBDaGVjayB0aGUgYHNlcmlhbGl6ZWAgb3B0aW9uIGluIGBtLnJlcXVlc3RgXCIpXHJcblx0XHR9XHJcblxyXG5cdFx0eGhyLnNlbmQoZGF0YSlcclxuXHRcdHJldHVybiB4aHJcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGFqYXgob3B0aW9ucykge1xyXG5cdFx0aWYgKG9wdGlvbnMuZGF0YVR5cGUgJiYgb3B0aW9ucy5kYXRhVHlwZS50b0xvd2VyQ2FzZSgpID09PSBcImpzb25wXCIpIHtcclxuXHRcdFx0cmV0dXJuIGhhbmRsZUpzb25wKG9wdGlvbnMpXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gY3JlYXRlWGhyKG9wdGlvbnMpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBiaW5kRGF0YShvcHRpb25zLCBkYXRhLCBzZXJpYWxpemUpIHtcclxuXHRcdGlmIChvcHRpb25zLm1ldGhvZCA9PT0gXCJHRVRcIiAmJiBvcHRpb25zLmRhdGFUeXBlICE9PSBcImpzb25wXCIpIHtcclxuXHRcdFx0dmFyIHByZWZpeCA9IG9wdGlvbnMudXJsLmluZGV4T2YoXCI/XCIpIDwgMCA/IFwiP1wiIDogXCImXCJcclxuXHRcdFx0dmFyIHF1ZXJ5c3RyaW5nID0gYnVpbGRRdWVyeVN0cmluZyhkYXRhKVxyXG5cdFx0XHRvcHRpb25zLnVybCArPSAocXVlcnlzdHJpbmcgPyBwcmVmaXggKyBxdWVyeXN0cmluZyA6IFwiXCIpXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRvcHRpb25zLmRhdGEgPSBzZXJpYWxpemUoZGF0YSlcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHBhcmFtZXRlcml6ZVVybCh1cmwsIGRhdGEpIHtcclxuXHRcdGlmIChkYXRhKSB7XHJcblx0XHRcdHVybCA9IHVybC5yZXBsYWNlKC86W2Etel1cXHcrL2dpLCBmdW5jdGlvbiAodG9rZW4pe1xyXG5cdFx0XHRcdHZhciBrZXkgPSB0b2tlbi5zbGljZSgxKVxyXG5cdFx0XHRcdHZhciB2YWx1ZSA9IGRhdGFba2V5XVxyXG5cdFx0XHRcdGRlbGV0ZSBkYXRhW2tleV1cclxuXHRcdFx0XHRyZXR1cm4gdmFsdWVcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHRcdHJldHVybiB1cmxcclxuXHR9XHJcblxyXG5cdG0ucmVxdWVzdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcblx0XHRpZiAob3B0aW9ucy5iYWNrZ3JvdW5kICE9PSB0cnVlKSBtLnN0YXJ0Q29tcHV0YXRpb24oKVxyXG5cdFx0dmFyIGRlZmVycmVkID0gbmV3IERlZmVycmVkKClcclxuXHRcdHZhciBpc0pTT05QID0gb3B0aW9ucy5kYXRhVHlwZSAmJlxyXG5cdFx0XHRvcHRpb25zLmRhdGFUeXBlLnRvTG93ZXJDYXNlKCkgPT09IFwianNvbnBcIlxyXG5cclxuXHRcdHZhciBzZXJpYWxpemUsIGRlc2VyaWFsaXplLCBleHRyYWN0XHJcblxyXG5cdFx0aWYgKGlzSlNPTlApIHtcclxuXHRcdFx0c2VyaWFsaXplID0gb3B0aW9ucy5zZXJpYWxpemUgPVxyXG5cdFx0XHRkZXNlcmlhbGl6ZSA9IG9wdGlvbnMuZGVzZXJpYWxpemUgPSBpZGVudGl0eVxyXG5cclxuXHRcdFx0ZXh0cmFjdCA9IGZ1bmN0aW9uIChqc29ucCkgeyByZXR1cm4ganNvbnAucmVzcG9uc2VUZXh0IH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNlcmlhbGl6ZSA9IG9wdGlvbnMuc2VyaWFsaXplID0gb3B0aW9ucy5zZXJpYWxpemUgfHwgSlNPTi5zdHJpbmdpZnlcclxuXHJcblx0XHRcdGRlc2VyaWFsaXplID0gb3B0aW9ucy5kZXNlcmlhbGl6ZSA9XHJcblx0XHRcdFx0b3B0aW9ucy5kZXNlcmlhbGl6ZSB8fCBKU09OLnBhcnNlXHJcblx0XHRcdGV4dHJhY3QgPSBvcHRpb25zLmV4dHJhY3QgfHwgZnVuY3Rpb24gKHhocikge1xyXG5cdFx0XHRcdGlmICh4aHIucmVzcG9uc2VUZXh0Lmxlbmd0aCB8fCBkZXNlcmlhbGl6ZSAhPT0gSlNPTi5wYXJzZSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHhoci5yZXNwb25zZVRleHRcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIG51bGxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRvcHRpb25zLm1ldGhvZCA9IChvcHRpb25zLm1ldGhvZCB8fCBcIkdFVFwiKS50b1VwcGVyQ2FzZSgpXHJcblx0XHRvcHRpb25zLnVybCA9IHBhcmFtZXRlcml6ZVVybChvcHRpb25zLnVybCwgb3B0aW9ucy5kYXRhKVxyXG5cdFx0YmluZERhdGEob3B0aW9ucywgb3B0aW9ucy5kYXRhLCBzZXJpYWxpemUpXHJcblx0XHRvcHRpb25zLm9ubG9hZCA9IG9wdGlvbnMub25lcnJvciA9IGZ1bmN0aW9uIChldikge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGV2ID0gZXYgfHwgZXZlbnRcclxuXHRcdFx0XHR2YXIgcmVzcG9uc2UgPSBkZXNlcmlhbGl6ZShleHRyYWN0KGV2LnRhcmdldCwgb3B0aW9ucykpXHJcblx0XHRcdFx0aWYgKGV2LnR5cGUgPT09IFwibG9hZFwiKSB7XHJcblx0XHRcdFx0XHRpZiAob3B0aW9ucy51bndyYXBTdWNjZXNzKSB7XHJcblx0XHRcdFx0XHRcdHJlc3BvbnNlID0gb3B0aW9ucy51bndyYXBTdWNjZXNzKHJlc3BvbnNlLCBldi50YXJnZXQpXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKGlzQXJyYXkocmVzcG9uc2UpICYmIG9wdGlvbnMudHlwZSkge1xyXG5cdFx0XHRcdFx0XHRmb3JFYWNoKHJlc3BvbnNlLCBmdW5jdGlvbiAocmVzLCBpKSB7XHJcblx0XHRcdFx0XHRcdFx0cmVzcG9uc2VbaV0gPSBuZXcgb3B0aW9ucy50eXBlKHJlcylcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAob3B0aW9ucy50eXBlKSB7XHJcblx0XHRcdFx0XHRcdHJlc3BvbnNlID0gbmV3IG9wdGlvbnMudHlwZShyZXNwb25zZSlcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHJlc3BvbnNlKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpZiAob3B0aW9ucy51bndyYXBFcnJvcikge1xyXG5cdFx0XHRcdFx0XHRyZXNwb25zZSA9IG9wdGlvbnMudW53cmFwRXJyb3IocmVzcG9uc2UsIGV2LnRhcmdldClcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QocmVzcG9uc2UpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGUpXHJcblx0XHRcdFx0bS5kZWZlcnJlZC5vbmVycm9yKGUpXHJcblx0XHRcdH0gZmluYWxseSB7XHJcblx0XHRcdFx0aWYgKG9wdGlvbnMuYmFja2dyb3VuZCAhPT0gdHJ1ZSkgbS5lbmRDb21wdXRhdGlvbigpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRhamF4KG9wdGlvbnMpXHJcblx0XHRkZWZlcnJlZC5wcm9taXNlID0gcHJvcGlmeShkZWZlcnJlZC5wcm9taXNlLCBvcHRpb25zLmluaXRpYWxWYWx1ZSlcclxuXHRcdHJldHVybiBkZWZlcnJlZC5wcm9taXNlXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbVxyXG59KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9taXRocmlsL21pdGhyaWwuanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgbSBmcm9tICdtaXRocmlsJztcbmltcG9ydCBNeU1vZGVsIGZyb20gJy4vTXlNb2RlbCdcblxudmFyIHZpZXdNb2RlbCA9IHtcclxuICBpbml0aWFsaXplOiBmdW5jdGlvbigpe1xyXG4gICAgdmlld01vZGVsLmRhdGFMaXN0ID0gTXlNb2RlbC5nZXREYXRhKClcclxuICB9XHJcbn1cclxuXHJcbnZhciBNeUNvbXBvbmVudCA9IHtcclxuICBjb250cm9sbGVyOiBmdW5jdGlvbigpe1xyXG4gICAgdmlld01vZGVsLmluaXRpYWxpemUoKTtcclxuICAgIHRoaXMudmlld01vZGVsID0gdmlld01vZGVsO1xyXG4gIH0sXHJcbiAgdmlldzogZnVuY3Rpb24oY3RybCl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge1tcclxuICAgICAgICAgIGN0cmwudmlld01vZGVsLmRhdGFMaXN0KCkubWFwKGZ1bmN0aW9uKGQpe1xyXG4gICAgICAgICAgICByZXR1cm4gbSgnbGknLCBkLnRleHQoKSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgXX1cclxuICAgICAgPC91bD5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15Q29tcG9uZW50XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbW9kdWxlcy9NeUNvbXBvbmVudC5qc1xuICoqLyIsImltcG9ydCBtIGZyb20gJ21pdGhyaWwnO1xuXG52YXIgTXlNb2RlbCA9IGZ1bmN0aW9uKGRhdGEpe1xyXG4gIHRoaXMudGV4dCA9IG0ucHJvcChkYXRhICYmIGRhdGEudGV4dCB8fCBcIlwiKTtcclxufVxyXG5NeU1vZGVsLmdldERhdGEgPSBmdW5jdGlvbigpe1xyXG4gIHJldHVybiBtLnJlcXVlc3Qoe1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgdXJsOiBcIi9hamF4XCIsXHJcbiAgICB0eXBlOiBNeU1vZGVsXHJcbiAgfSlcclxufVxyXG5NeU1vZGVsLnNldERhdGEgPSBmdW5jdGlvbihkYXRhTGlzdCl7XHJcbiAgbS5yZXF1ZXN0KHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICB1cmw6IFwiL2FqYXhcIixcclxuICAgIGRhdGE6IGRhdGFMaXN0XHJcbiAgfSlcclxufVxyXG5leHBvcnQgZGVmYXVsdCBNeU1vZGVsXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbW9kdWxlcy9NeU1vZGVsLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0bW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=