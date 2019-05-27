(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ "./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createPage = createPage;exports.createComponent = createComponent;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/megalo/dist/megalo.mp.esm.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var SYNC_API_RE = /subNVue|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$/;

var CONTEXT_API_RE = /^create|Manager$/;

var CALLBACK_API_RE = /^on/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name);
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name);
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name);
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {params[_key - 1] = arguments[_key];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return api.apply(void 0, [options].concat(params));
    }
    return handlePromise(new Promise(function (resolve, reject) {
      api.apply(void 0, [Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
      /* eslint-disable no-extend-native */
      Promise.prototype.finally = function (callback) {
        var promise = this.constructor;
        return this.then(
        function (value) {return promise.resolve(callback()).then(function () {return value;});},
        function (reason) {return promise.resolve(callback()).then(function () {
            throw reason;
          });});

      };
    }));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _tt$getSystemInfoSync =




  tt.getSystemInfoSync(),platform = _tt$getSystemInfoSync.platform,pixelRatio = _tt$getSystemInfoSync.pixelRatio,windowWidth = _tt$getSystemInfoSync.windowWidth; // uni=>tt runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      return 1;
    } else {
      return 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


// 不支持的 API 列表
var todos = [
'hideKeyboard',
'onSocketOpen',
'onSocketError',
'sendSocketMessage',
'onSocketMessage',
'closeSocket',
'onSocketClose',
'getImageInfo',
'getBackgroundAudioManager',
'createVideoContext',
'createCameraContext',
'createLivePlayerContext',
'getSavedFileList',
'getSavedFileInfo',
'removeSavedFile',
'getFileInfo',
'openDocument',
'chooseLocation',
'createMapContext',
'canIUse',
'onMemoryWarning',
'onGyroscopeChange',
'startGyroscope',
'stopGyroscope',
'setScreenBrightness',
'getScreenBrightness',
'onUserCaptureScreen',
'addPhoneContact',
'openBluetoothAdapter',
'startBluetoothDevicesDiscovery',
'onBluetoothDeviceFound',
'stopBluetoothDevicesDiscovery',
'onBluetoothAdapterStateChange',
'getConnectedBluetoothDevices',
'getBluetoothDevices',
'getBluetoothAdapterState',
'closeBluetoothAdapter',
'writeBLECharacteristicValue',
'readBLECharacteristicValue',
'onBLEConnectionStateChange',
'onBLECharacteristicValueChange',
'notifyBLECharacteristicValueChange',
'getBLEDeviceServices',
'getBLEDeviceCharacteristics',
'createBLEConnection',
'closeBLEConnection',
'onBeaconServiceChange',
'onBeaconUpdate',
'getBeacons',
'startBeaconDiscovery',
'stopBeaconDiscovery',
'setNavigationBarColor',
'showNavigationBarLoading',
'hideNavigationBarLoading',
'setTabBarItem',
'setTabBarStyle',
'hideTabBar',
'showTabBar',
'setTabBarBadge',
'removeTabBarBadge',
'showTabBarRedDot',
'hideTabBarRedDot',
'setBackgroundColor',
'setBackgroundTextStyle',
'createIntersectionObserver',
'chooseInvoiceTitle',
'navigateToMiniProgram',
'navigateBackMiniProgram',
'addTemplate',
'deleteTemplate',
'getTemplateLibraryById',
'getTemplateLibraryList',
'getTemplateList',
'sendTemplateMessage',
'setEnableDebug',
'getExtConfig',
'getExtConfigSync',
'onWindowResize',
'offWindowResize'];


// 存在兼容性的 API 列表
var canIUses = [];

// 需要做转换的 API 列表
var protocols = {
  chooseImage: {
    args: {
      sizeType: false } },


  previewImage: previewImage,
  connectSocket: {
    args: {
      method: false } },


  chooseVideo: {
    args: {
      maxDuration: false } },


  scanCode: {
    args: {
      onlyFromCamera: false,
      scanType: false } },


  startAccelerometer: {
    args: {
      interval: false } },


  showToast: {
    args: {
      image: false,
      mask: false } },


  showLoading: {
    args: {
      mask: false } },


  showModal: {
    args: {
      cancelColor: false,
      confirmColor: false } },


  showActionSheet: {
    args: {
      itemColor: false } },


  login: {
    args: {
      scopes: false,
      timeout: false } },


  getUserInfo: {
    args: {
      lang: false,
      timeout: false } },


  requestPayment: {
    orderInfo: 'data' } };



var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5934\u6761\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5934\u6761\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var returnValue = tt[options.name || methodName](arg1, arg2);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['toutiao'],
  share: ['toutiao'],
  payment: ['toutiao'],
  push: ['toutiao'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  getProvider: getProvider });




var api = /*#__PURE__*/Object.freeze({});



var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {args[_key2 - 1] = arguments[_key2];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {args[_key3] = arguments[_key3];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

function initBehavior(options) {
  return Behavior(options);
}

var instances = Object.create(null);

var mocks$1 = ['__route__', '__webviewId__', '__nodeid__'];

function initPage$1(pageOptions) {
  return initComponent$1(pageOptions);
}

function initComponent$1(componentOptions) {
  if (componentOptions.properties) {// ref
    componentOptions.properties.vueRef = {
      type: String,
      value: '' };

  }
  return Component(componentOptions);
}

function initRefs$1(vm) {
  var mpInstance = vm.$scope;
  mpInstance.selectAllComponents('.vue-ref', function (components) {
    components.forEach(function (component) {
      var ref = component.data.vueRef; // 头条的组件 dataset 竟然是空的
      vm.$refs[ref] = component.$vm || component;
    });
  });
  mpInstance.selectAllComponents('.vue-ref-in-for', function (forComponents) {
    forComponents.forEach(function (component) {
      var ref = component.data.vueRef;
      if (!vm.$refs[ref]) {
        vm.$refs[ref] = [];
      }
      vm.$refs[ref].push(component.$vm || component);
    });
  });
}

function triggerLink$1(mpInstance) {
  var nodeId = mpInstance.__nodeid__ + '';
  var webviewId = mpInstance.__webviewId__ + '';

  instances[webviewId + '_' + nodeId] = mpInstance.$vm;

  mpInstance.triggerEvent('__l', {
    nodeId: nodeId,
    webviewId: webviewId },
  {
    bubbles: true,
    composed: true });

}
// TODO 目前有 bug，composed 不生效
function handleLink$1(event) {
  var nodeId = event.detail.nodeId;
  var webviewId = event.detail.webviewId;

  var childVm = instances[webviewId + '_' + nodeId];

  if (childVm) {
    childVm.$parent = this.$vm;
    childVm.$parent.$children.push(event.detail);

    childVm.$root = this.$vm.$root;
    delete instances[webviewId + '_' + nodeId];
  }
}

function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function initHooks(mpOptions, hooks) {
  hooks.forEach(function (hook) {
    mpOptions[hook] = function (args) {
      return this.$vm.__call_hook(hook, args);
    };
  });
}

function getData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_PLATFORM":"mp-toutiao","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function getBehaviors(vueOptions) {
  var vueBehaviors = vueOptions['behaviors'];
  var vueExtends = vueOptions['extends'];
  var vueMixins = vueOptions['mixins'];

  var vueProps = vueOptions['props'];

  if (!vueProps) {
    vueOptions['props'] = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "tt".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps['name'] = String;
          vueProps['value'] = null;
        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: getProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: getProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function getProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts['default'];
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type, value, file);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts, null, file);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor = dataPath ? vm.__get_value(dataPath, context) : context;

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                                  *[
                                                  *    ['data.items', 'data.id', item.data.id],
                                                  *    ['metas', 'id', meta.id]
                                                  *],
                                                  *[
                                                  *    ['data.items', 'data.id', item.data.id],
                                                  *    ['metas', 'id', meta.id]
                                                  *],
                                                  *'test'
                                                  */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var eventOpts = (event.currentTarget || event.target).dataset.eventOpts;
  if (!eventOpts) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;
  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && eventType === type) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handler = _this.$vm[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          handler.apply(_this.$vm, processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName));

        }
      });
    }
  });
}

var hooks = [
'onHide',
'onError',
'onPageNotFound',
'onUniNViewMessage'];


function initVm(vm) {
  if (this.$vm) {// 百度竟然 onShow 在 onLaunch 之前？
    return;
  }

  this.$vm = vm;

  this.$vm.$mp = {
    app: this };

}

function createApp(vm) {

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs$1(this);
        initMocks(this, mocks$1);
      }
    },
    created: function created() {// 处理 injections
      this.__init_injections(this);
      this.__init_provide(this);
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      initVm.call(this, vm);

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted');

      this.$vm.__call_hook('onLaunch', args);
    },
    onShow: function onShow(args) {
      initVm.call(this, vm);

      this.$vm.__call_hook('onShow', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};

  initHooks(appOptions, hooks); // 延迟执行，因为 App 的注册在 main.js 之前，可能导致生命周期内 Vue 原型上开发者注册的属性无法访问

  App(appOptions);

  return vm;
}

var hooks$1 = [
'onShow',
'onHide',
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap',
'onBackPress',
'onNavigationBarButtonTap',
'onNavigationBarSearchInputChanged',
'onNavigationBarSearchInputConfirmed',
'onNavigationBarSearchInputClicked'];


function initVm$1(VueComponent) {// 百度的 onLoad 触发在 attached 之前
  if (this.$vm) {
    return;
  }

  this.$vm = new VueComponent({
    mpType: 'page',
    mpInstance: this });


  this.$vm.__call_hook('created');
  this.$vm.$mount();
}

function createPage(vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
    vueOptions = VueComponent.extendOptions;
  } else {
    VueComponent = _vue.default.extend(vueOptions);
  }
  var pageOptions = {
    options: {
      multipleSlots: true,
      addGlobalClass: true },

    data: getData(vueOptions, _vue.default.prototype),
    lifetimes: { // 当页面作为组件时
      attached: function attached() {
        initVm$1.call(this, VueComponent);
      },
      ready: function ready() {
        this.$vm.__call_hook('beforeMount');
        this.$vm._isMounted = true;
        this.$vm.__call_hook('mounted');
        this.$vm.__call_hook('onReady');
      },
      detached: function detached() {
        this.$vm.$destroy();
      } },

    methods: { // 作为页面时
      onLoad: function onLoad(args) {
        initVm$1.call(this, VueComponent);
        this.$vm.$mp.query = args; // 又要兼容 mpvue
        this.$vm.__call_hook('onLoad', args); // 开发者可能会在 onLoad 时赋值，提前到 mount 之前
      },
      onUnload: function onUnload() {
        this.$vm.__call_hook('onUnload');
      },
      __e: handleEvent,
      __l: handleLink$1 } };



  initHooks(pageOptions.methods, hooks$1);

  return initPage$1(pageOptions, vueOptions);
}

function initVm$2(VueComponent) {
  if (this.$vm) {
    return;
  }

  var properties = this.properties;

  var options = {
    mpType: 'component',
    mpInstance: this,
    propsData: properties };

  // 初始化 vue 实例
  this.$vm = new VueComponent(options);

  // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
  var vueSlots = properties.vueSlots;
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    this.$vm.$scopedSlots = this.$vm.$slots = $slots;
  }
  // 性能优先，mount 提前到 attached 中，保证组件首次渲染数据被合并
  // 导致与标准 Vue 的差异，data 和 computed 中不能使用$parent，provide等组件属性
  this.$vm.$mount();
}

function createComponent(vueOptions) {
  vueOptions = vueOptions.default || vueOptions;

  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions; // TODO form-field props.name,props.value
    vueOptions = VueComponent.extendOptions;
  } else {
    VueComponent = _vue.default.extend(vueOptions);
  }

  var behaviors = getBehaviors(vueOptions);

  var properties = getProperties(vueOptions.props, false, vueOptions.__file);

  var componentOptions = {
    options: {
      multipleSlots: true,
      addGlobalClass: true },

    data: getData(vueOptions, _vue.default.prototype),
    behaviors: behaviors,
    properties: properties,
    lifetimes: {
      attached: function attached() {
        initVm$2.call(this, VueComponent);
      },
      ready: function ready() {
        initVm$2.call(this, VueComponent); // 目前发现部分情况小程序 attached 不触发
        triggerLink$1(this); // 处理 parent,children

        // 补充生命周期
        this.$vm.__call_hook('created');
        this.$vm.__call_hook('beforeMount');
        this.$vm._isMounted = true;
        this.$vm.__call_hook('mounted');
        this.$vm.__call_hook('onReady');
      },
      detached: function detached() {
        this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __e: handleEvent,
      __l: handleLink$1 } };



  return initComponent$1(componentOptions, vueOptions);
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name : canIUseApi;
  if (!tt.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (name === 'upx2px') {
        return upx2px;
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (!hasOwn(tt, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, tt[name]));
    } });

} else {
  uni.upx2px = upx2px;

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(tt).forEach(function (name) {
    if (hasOwn(tt, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, tt[name]));
    }
  });
}

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/megalo/dist/megalo.mp.esm.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/megalo/dist/megalo.mp.esm.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, wx) {// fix env
try {
  if (!global) global = {};
  global.process = global.process || {};
  global.process.env = global.process.env || {};
  global.App = global.App || App;
  global.Page = global.Page || Page;
  global.Component = global.Component || Component;
  global.getApp = global.getApp || getApp;
} catch (e) {}

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it... e.g.
 * PhantomJS 1.x. Technically we don't need this anymore since native bind is
 * now more performant in most browsers, but removing it would be breaking for
 * code that was able to run in PhantomJS 1.x, so this must be kept for
 * backwards compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */


/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "production" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "production" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
})

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined' && window.navigator;//fixed by xxxxxx 百度2.10.24 window 为 function
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;


if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;

 // work around flow check

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  if (!getter && arguments.length === 2) {
    val = obj[key];
  }
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "production" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};



/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else {}
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else {}
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else {}
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
//fixed by xxxxxx
if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */


function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    /* istanbul ignore if */
    if (isUndef(cur)) {
      
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;


function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */




var queue = [];
var activatedChildren = [];
var has = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    {
      defineReactive(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (props && hasOwn(props, key)) {
      
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else {}
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      {
        defineReactive(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else {}
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */




// Register the component hook to weex native render engine.
// The hook will be triggered by native, not javascript.


// Updates the state of the component to weex native render engine.

/*  */

// https://github.com/Hanks10100/weex-native-directive/tree/master/component

// listening on native callback

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var options = {
    _isComponent: true,
    parent: parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    hooks[key] = componentVNodeHooks[key];
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    // reset _rendered flag on slots for duplicate slot check
    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue (options) {
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
}

var builtInComponents = {
  KeepAlive: KeepAlive
}

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.5.17';//fixed by xxxxxx

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  // let parentNode = vnode
  // let childNode = vnode
  // while (isDef(childNode.componentInstance)) {
  //   childNode = childNode.componentInstance._vnode
  //   if (childNode && childNode.data) {
  // data = mergeClassData(childNode.data, data)
  // }
  // }
  // while (isDef(parentNode = parentNode.parent)) {
  // if (parentNode && parentNode.data) {
  // data = mergeClassData(data, parentNode.data)
  // }
  // }
  // mp: no need to update static class
  return renderClass(data.class)
}

// function mergeClassData (child: VNodeData, parent: VNodeData): {
//   staticClass: string,
//   class: any
// } {
//   return {
//     staticClass: concat(child.staticClass, parent.staticClass),
//     class: isDef(child.class)
//       ? [child.class, parent.class]
//       : parent.class
//   }
// }

function renderClass (
  dynamicClass
) {
  if (isDef(dynamicClass)) {
    return concat(stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/**
 * 频率控制 返回函数连续调用时，func 执行频率限定为 次 / wait
 *
 * @param  {function}   func      传入函数
 * @param  {number}     wait      表示时间窗口的间隔
 * @param  {object}     [options] 如果想忽略开始边界上的调用，传入{leading: false}。
 * @param  {boolean}    [options.leading=true] 如果想忽略开始边界上的调用，传入{leading: false}。
 * @param  {number|boolean}    [options.leadingDelay=false] 开始边界上的调用延时，传入{leadingDelay: 0}。
 * @param  {boolean}    [options.trailing=true] 如果想忽略结尾边界上的调用，传入{trailing: false}
 *
 * @return {Function}
 *
 * @example
 * const throttleCallback = throttle(callback, 100);
 *
 */
function throttle (func, wait, options) {
  if ( options === void 0 ) options = {};

  var context, args, result;
  var timeout = null;
  var leadingDelay = options.leadingDelay === undefined ? false : options.leadingDelay;
  // 上次执行时间点
  var previous = 0;
  // 延迟执行函数
  var later = function () {
    // 若设定了开始边界不执行选项，上次执行时间始终为0
    previous = options.leading === false ? 0 : (+new Date());
    timeout = null;
    // $flow-disable-line
    result = func.apply(context, args);
    if (!timeout) {
      context = args = null;
    }
  };
  return function () {
    var now = (+new Date());
    // 首次执行时，如果设定了开始边界不执行选项，将上次执行时间设定为当前时间。
    if (!previous && options.leading === false) {
      previous = now;
    }
    // 延迟执行时间间隔
    var remaining = wait - (now - previous);
    context = this;
        args = arguments; // eslint-disable-line
    // 延迟时间间隔remaining小于等于0，表示上次执行至此所间隔时间已经超过一个时间窗口
    // remaining大于时间窗口wait，表示客户端系统时间被调整过
    if (remaining <= 0 || remaining > wait) {
      clearTimeout(timeout);
      timeout = null;
      previous = now;
      if (leadingDelay === false) {
        result = func.apply(context, args);
      } else {
        setTimeout(function () {
          result = func.apply(context, args);
        }, leadingDelay);
      }
      if (!timeout) {
        context = args = null;
      }
      // 如果延迟执行不存在，且没有设定结尾边界不执行选项
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result
  }
}

function aop (fn, options) {
  if ( options === void 0 ) options = {};

  var before = options.before;
  var after = options.after;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var self = this;

    if (before) {
      before.call.apply(before, [ self, args ].concat( args ));
    }

    var ret = fn.call.apply(fn, [ self ].concat( args ));

    if (after) {
      after.call.apply(after, [ self, ret ].concat( args, [ret] ));
    }

    return ret
  }
}

var Buffer = function Buffer () {
  this.buff = {};
};

Buffer.prototype.push = function push (data) {
  Object.assign(this.buff, data);
};

Buffer.prototype.pop = function pop () {
  var data = Object.assign({}, this.buff);
  this.buff = {};
  return data
};

Buffer.prototype.isEqual = function isEqual (key, value) {
  return this.buff[key] !== undefined && this.buff[key] === value
};
//fixed by xxxxxx 调整识别顺序 alipay,swan,tt,wechat
function getMPPlatform () {
  var platform = '';
  try {
    /* eslint-disable */
    if (!platform && my) {
      platform = 'alipay';
    }
    /* eslint-enable */
  } catch (e) {}
  try {
    /* eslint-disable */
    if (!platform && swan) {
      platform = 'swan';
    }
    /* eslint-enable */
  } catch (e) {}
  try {
    /* eslint-disable */
    if (!platform && tt) {
      platform = 'tt';
    }
    /* eslint-enable */
  } catch (e) {}
  try {
  	/* eslint-disable */
  	if (!platform && wx) {
  		platform = 'wechat';
  	}
  	/* eslint-enable */
  } catch (e) {}
  return platform || 'unknown'
}

var ROOT_DATA_VAR = '$root';
var HOLDER_VAR = 'h';

var VM_ID_VAR = 'c';
var VM_ID_PREFIX = 'cp';

var VM_ID_SEP = 'v';

var SLOT_CONTEXT_ID_VAR = 's';

var LIST_TAIL_SEPS = {
  swan: '_',
  wechat: '-',
  alipay: '-',
  tt:'-'//fixed by xxxxxx
};


var HOLDER_TYPE_VARS = {
  text: 't',
  vtext: 'vt',
  if: '_if',
  for: 'li',
  class: 'cl',
  rootClass: 'rcl',
  style: 'st',
  value: 'value',
  vhtml: 'html',
  vshow: 'vs',
  slot: 'slot'
};

var notEmpty = function (e) { return !!e; };


var isReservedTag = makeMap(
  'template,script,style,element,content,slot,link,meta,svg,view,' +
  'a,div,img,image,text,span,richtext,input,switch,textarea,spinner,select,' +
  'slider,slider-neighbor,indicator,trisition,trisition-group,canvas,' +
  'list,cell,header,loading,loading-indicator,refresh,scrollable,scroller,' +
  'video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown',
  true
);

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// Elements that you can, intentionally, leave open (and which close themselves)
// more flexable than web
var canBeLeftOpenTag = makeMap(
  'web,spinner,switch,video,textarea,canvas,' +
  'indicator,marquee,countdown',
  true
);

var isUnaryTag = makeMap(
  'embed,img,image,input,link,meta',
  true
);

function mustUseProp () { /* console.log('mustUseProp') */ }
function getTagNamespace () { /* console.log('getTagNamespace') */ }
function isUnknownElement () { /* console.log('isUnknownElement') */ }

var eventTypeMap = {
  tap: ['tap', 'click']
};

function getValue (obj, path) {
  if ( obj === void 0 ) obj = {};
  if ( path === void 0 ) path = '';

  var paths = typeof path === 'string' ? path.split('.') : path;
  return paths.reduce(function (prev, k) {
    /* istanbul ignore if */
    if (prev && isDef(prev)) {
      prev = prev[k];
    }
    return prev
  }, obj)
}

function deepEqual (a, b) {
  var aType = typeof a;
  var bType = typeof b;
  if (aType !== 'object' || bType !== 'object' || aType !== bType) {
    return a === b || (a === '' && b === undefined) || (a === undefined && b === '')
  } else {
    if (Array.isArray(a)) {
      if (a.length !== b.length) {
        return false
      }
    }
    for (var k in a) {
      if (!deepEqual(a[k], b[k])) {
        return false
      }
    }
  }
  return true
}

function getHid (vm, vnode) {
  if ( vnode === void 0 ) vnode = {};

  var sep = LIST_TAIL_SEPS[vm.$mp.platform] || LIST_TAIL_SEPS.wechat;
  var data = vnode.data; if ( data === void 0 ) data = {};
  var _hid = isDef(data._hid) ? data._hid : (data.attrs && data.attrs._hid);
  var _fid = isDef(data._fid) ? data._fid : (data.attrs && data.attrs._fid);
  if (isDef(_fid)) {
    return ("" + _hid + sep + _fid)
  }
  return _hid
}

function getVM (vm, id) {
  if ( vm === void 0 ) vm = {};

  var res;
  if (getVMId(vm) === ("" + id)) {
    return vm
  }
  var $children = vm.$children;
  for (var i = 0; i < $children.length; ++i) {
    res = getVM($children[i], id);
    /* istanbul ignore else */
    if (res) {
      return res
    }
  }
}

function getCid (vm) {
  var $vnode = vm.$vnode;
  var cid = $vnode && $vnode.data && $vnode.data.attrs._cid;
  cid = cid || '0';
  return cid
}

function getFid (vm) {
  var $vnode = vm.$vnode;
  var fid = $vnode && $vnode.data && $vnode.data.attrs._fid;
  return fid
}

function getVMId (vm) {
  var sep = LIST_TAIL_SEPS[vm.$mp.platform] || LIST_TAIL_SEPS.wechat;
  var res = [];
  var cursor = vm;
  var prev;
  while (cursor) {
    if (cursor === vm || !isSlotParent(cursor, prev)) {
      res.unshift(getCid(cursor));
    }
    prev = cursor;
    cursor = cursor.$parent;
  }
  var vmId = res.join(VM_ID_SEP);
  var fid = getFid(vm);
  if (isDef(fid)) {
    return ("" + vmId + sep + fid)
  }
  return vmId
}

function isSlotParent (parent, child) {
  var ref = child || {};
  var $vnode = ref.$vnode; if ( $vnode === void 0 ) $vnode = {};
  var childSlotParentUId = $vnode._mpSlotParentUId;
  return isDef(childSlotParentUId) && childSlotParentUId === parent._uid
}

// export function getVMParentId (vm) {
//   if (vm.$parent) {
//     return getVMId(vm.$parent)
//   }
//   return ''
// }

function isEmptyObj (obj) {
  if ( obj === void 0 ) obj = {};

  return Object.keys(obj).length === 0
}

function initVMToMP (vm) {
  var obj;

  var sep = LIST_TAIL_SEPS[vm.$mp.platform] || LIST_TAIL_SEPS.wechat;

  vm = vm || this;
  // const cid = getVMId(vm)
  var vmId = getVMId(vm);
  // console.log(vmId)
  var i = vmId.indexOf(sep);
  var cid = i > -1 ? vmId.slice(0, i) : vmId;
  var info = {
    cid: vmId,
    cpath: ("" + cid + VM_ID_SEP)
  };

  var prefix = ROOT_DATA_VAR + "." + vmId;

  vm.$mp._update(( obj = {}, obj[(prefix + "." + VM_ID_VAR)] = info.cid, obj[(prefix + "." + VM_ID_PREFIX)] = info.cpath, obj));
}

function updateSlotId (vm, sid) {
  var obj;

  vm = vm || this;
  var vmId = getVMId(vm);
  var dataPaths = [ROOT_DATA_VAR, vmId, SLOT_CONTEXT_ID_VAR];
  var curValue = getValue(vm.$mp.page.data, dataPaths);
  var dataPathStr = dataPaths.join('.');

  /* istanbul ignore else */
  if (isDef(sid) && curValue !== sid) {
    vm.$mp._update(( obj = {}, obj[dataPathStr] = sid, obj));
  }
}

function updateMPData (type, data, vnode) {
  var obj;

  if ( type === void 0 ) type = HOLDER_TYPE_VARS.text;
  var vm = this;
  var vmId = getVMId(vm);
  var hid = getHid(vm, vnode);
  var dataPaths = [
    ROOT_DATA_VAR,
    vmId,
    HOLDER_VAR,
    hid,
    type
  ];
  var dataPathStr = dataPaths.join('.');

  var curValue = getValue(vm.$mp.page.data, dataPaths);
  var isDeepEqual = deepEqual(curValue, data);

  /* istanbul ignore else */
  if (isDef(hid)) {
    if ((vm.$mp.platform === 'swan') && /[^A-Za-z0-9_]/.test(type)) {
      dataPathStr = dataPathStr.replace(/\.[^\.]*$/, ("['" + type + "']"));
    }

    if (!isDeepEqual || !vm.$mp._isEqualToBuffer(dataPathStr, data)) {
      vm.$mp._update(( obj = {}, obj[dataPathStr] = data, obj));
    }
  }
}

function assignData(newData,pageData,path,value){
  var segments = path.split('.');
  var len = segments.length;
  var obj = pageData;
  var depth = len-1;
  for (var i = 0; i < len; i++) {
      var segment = segments[i];
      if(i < depth){
          if(!obj.hasOwnProperty(segment)){
            obj = obj[segment] = {}
            var parentPath = segments.slice(0,i).join('.')
            if(newData[parentPath]){//$root.0.h
              newData[parentPath][segment]={}
            }else if(i > 2){//$root.0.h.0
              parentPath = segments.slice(0,i-1).join('.')
              if(newData[parentPath]){
                newData[parentPath][segments[i-1]][segment]={}
              }else{//$root.0.h.0-0
                newData[segments.slice(0,i+1).join('.')]={}
              }
            }else{//$root.0
              newData[segments.slice(0,i+1).join('.')]={}
            }
          } else {
            obj = obj[segment]
          }
      }
    }
}


function processData(pageData,data){
  var newData = {};  
  for(var key in data){
    assignData(newData,pageData,key,data[key])
  }
  return newData
}

function createUpdateFn (page) {
  var buffer = new Buffer();

  function doUpdate () {
    var data = buffer.pop();

    if (!isEmptyObj(data) && page.setData) {
      if(Vue.prototype._mpPlatform==='tt'){//fixed by xxxxxx 因为头条 path 赋值有 bug，必须填充之前未声明的对象
          var emptyData = processData(page.data,data)
          page.setData(emptyData,function(){//头条的 android 可以一步 setData，iOS 目前必须分两步
            page.setData(data,function(){
            })
          });
      } else {
          page.setData(data);
      }
    }
  }

  var throttleSetData = throttle(function () {
    doUpdate();
  }, 50, { leadingDelay: 0 });

  return {
    update: function update (data) {
      buffer.push(data);
      throttleSetData();
    },
    instantUpdate: function instantUpdate (data) {
      doUpdate();
    },
    isEqualToBuffer: function isEqualToBuffer (key, value) {
      return buffer.isEqual(key, value)
    }
  }
}

function updateVnodeToMP (vnode, key, value) {
  if ( key === void 0 ) key = HOLDER_TYPE_VARS.text;

  var context = vnode.context;
  var slotContext = vnode.slotContext;
  var realContext = slotContext || context;
  realContext && realContext.$updateMPData(key, value, vnode);

  /* istanbul ignore if */
  if (!realContext) {
    console.warn('update text with no context', key, value, vnode);
  }
}

var sep = '';

function assertHid (vnode, hid) {
  var data = vnode.data; if ( data === void 0 ) data = {};
  var attrs = data.attrs; if ( attrs === void 0 ) attrs = {};
  var _hid = attrs._hid;
  var _fid = attrs._fid;
  var curHid = isDef(_fid) ? ("" + _hid + sep + _fid) : _hid;
  return ("" + curHid) === ("" + hid)
}

//TODO 暂时仅处理首个 form fixed by xxxxxx
function getAlipayFormVNode(vnode){
	if(vnode.tag==='form'){
		return vnode
	}else{
		var children = vnode.children
		if(children&&children.length){
			for(var i=0;i<children.length;i++){
				var childVNode = children[i]
				var formVNode= getAlipayFormVNode(childVNode)
				if(formVNode){
					return formVNode
				}
			}
		}
	}
}

//fixed by xxxxxx
function getAlipayResetHandlers(vnode){
	if(!vnode){
		return []
	}
	var formVNode = getAlipayFormVNode(vnode)
	if(formVNode.data&&formVNode.data.on&&formVNode.data.on.reset){
			var handlers = []
			if(typeof formVNode.data.on.reset === 'function'){
				handlers.push(formVNode.data.on.reset)
			}else{
				handlers = formVNode.data.on.reset
			}
			return handlers
	}
	return []
}

function proxyEvent (rootVM, event) {
  if (!sep) {
    sep = LIST_TAIL_SEPS[rootVM.$mp.platform] || LIST_TAIL_SEPS.wechat;
  }
  
  //fixed by xxxxxx
  var isAlipayResetEvent = rootVM.$mp.platform === 'alipay' && typeof event === 'function'
	if(isAlipayResetEvent){//支付宝小程序 form reset 事件 event 对象是一个 function 
      event = {
        type:'reset',
        detail:{},
        currentTarget:{},
        target:{},
        dataset:{}
      }
  }
  
  //fixed by xxxxxx 支付宝部分事件无 target
  if(!event.currentTarget){
    event.currentTarget = {}
  }
  if(!event.target){
    event.target = {}
  }
  
  var type = event.type;
  var detail = event.detail; if ( detail === void 0 ) detail = {};
  var target = event.currentTarget || event.target;
  var dataset = target.dataset; if ( dataset === void 0 ) dataset = {};
  var cid = dataset.cid;
  var hid = dataset.hid;

  //fixed by xxxxxx
  var handlers = [];
	if(isAlipayResetEvent){
		handlers = getAlipayResetHandlers(rootVM._vnode)
	}else{
		var vm = getVM(rootVM, cid);
		handlers = getHandlers(vm, type, hid);
	}
  
  var $event = Object.assign({}, event);
  Object.assign(event.target, {
    value: detail.value
  });
  //fixed by xxxxxx 
  $event.mp = event
  handlers.forEach(function (handler) {
    handler($event);
  });
}

function getVnode (vnode, hid) {
  if ( vnode === void 0 ) vnode = {};

  var componentInstance = vnode.componentInstance;
  var children = vnode.children; if ( children === void 0 ) children = [];
  if (assertHid(vnode, hid)) {
    return vnode
  }

  // if vnode is component
  // find vnode in its slots
  if (componentInstance) {
    var $slots = componentInstance.$slots; if ( $slots === void 0 ) $slots = {};
    children = Object.keys($slots)
      .reduce(function (res, k) {
        var nodes = $slots[k];
        /* istanbul ignore else */
        if (nodes._rendered) {
          res = res.concat(nodes);
        }
        return res
      }, []);
  }

  for (var i = 0, len = children.length; i < len; ++i) {
    var res = getVnode(children[i], hid);
    if (res) { return res }
  }
}

// TODO: unit test for @touchstart and @touchStart
function getHandlers (vm, rawType, hid) {
  var type = rawType.toLowerCase();
  var res = [];

  var eventTypes = eventTypeMap[type] || [type];
  if (type !== rawType) {
    eventTypes.push(rawType);
  }

  /* istanbul ignore if */
  if (!vm) { return res }

  var vnode = getVnode(vm._vnode, hid);

  if (!vnode) { return res }

  var elm = vnode.elm;
  var on = elm.on; if ( on === void 0 ) on = {};

  /* istanbul ignore if */
  if (!assertHid(vnode, hid)) { return res }

  res = eventTypes.reduce(function (buf, event) {
    var handler = on[event];
    /* istanbul ignore if */
    if (typeof handler === 'function') {
      buf.push(handler);
    } else if (Array.isArray(handler)) {
      buf = buf.concat(handler);
    }
    return buf
  }, []);

  return res
}

/*  */

// import { extend, warn, isObject } from 'core/util/index'
/**
 * Runtime helper for rendering <slot>
 */
function afterRenderSlot (
  nodes,
  name,
  fallback,
  props,
  bindObject
) {
  var _fid = props._fid;
  // single tag:
  // <CompA><span slot-scope="props">{{ props.msg }}</span></CompA>
  if (nodes && nodes.tag) {
    nodes = [nodes];
  }
  if (nodes && nodes.length) {
    var firstNode = getFirstNode(nodes);
    var context = firstNode.context;
    if (context !== this) {
      var sid = getVMId(context);
      updateSlotId(this, sid);
    }
    markComponents(nodes, this._uid);
  }

  // scopedSlotFn with v-for
  var scopedSlotFn = this.$scopedSlots[name];
  // update vnode hid in scoped slot with the slot host's actual fid
  if (scopedSlotFn && isDef(_fid)) {
    updateNodesHid(nodes, ("-" + _fid));
  }

  return nodes
}

function updateNodesHid (nodes, tail) {
  if ( nodes === void 0 ) nodes = [];

  nodes.forEach(function (node) {
    /* istanbul ignore else */
    if (node.data && node.data._hid) {
      node.data._hid += tail;
    } else if (node && node.data && node.data.attrs && node.data.attrs._hid) {
      node.data.attrs._hid += tail;
    }
    updateNodesHid(node.children || [], tail);
  });
}

function getFirstNode (nodes) {
  var firstNode = nodes;
  while (firstNode && Array.isArray(firstNode)) {
    firstNode = firstNode[0];
  }
  return firstNode
}

function markComponents (nodes, parentUId) {
  if ( nodes === void 0 ) nodes = [];

  nodes.forEach(function (node) {
    var componentOptions = node.componentOptions;
    if (componentOptions) {
      node._mpSlotParentUId = parentUId;
    }
    markComponents(node.children, parentUId);
  });
}

function renderIf (cond, _hid, _fid) {
  var cloneVnode = {
    context: this,
    data: {
      attrs: { _hid: _hid, _fid: _fid }
    }
  };
  updateVnodeToMP(cloneVnode, HOLDER_TYPE_VARS.if, cond);
  return cond
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function afterRenderList (
  ret,
  val,
  render,
  forId,
  context
) {
  updateListToMP(ret, val, forId, context);
}

// TODO: support for destructuring
// TODO: keys collecting method needs improve for
// <li v-for="i in 3" :key="i"></li>
function updateListToMP (vnodeList, val, forId, context) {
  if ( vnodeList === void 0 ) vnodeList = [];

  var firstItem = vnodeList[0];
  var forKeys;
  var list = [];
  /* istanbul ignore else */
  if (firstItem) {
    // collect v-key
    if (Array.isArray(firstItem)) {
      forKeys = firstItem.map(function (e) {
        var ref = e.data || /* istanbul ignore next */ {};
        var attrs = ref.attrs; if ( attrs === void 0 ) attrs = {};
        var _fk = attrs._fk; if ( _fk === void 0 ) _fk = '';
        return _fk
      });
    } else {
      var ref = firstItem.data || {};
      var attrs = ref.attrs; if ( attrs === void 0 ) attrs = {};
      var _fk = attrs._fk; if ( _fk === void 0 ) _fk = '';
      forKeys = [_fk];
    }

    forKeys = forKeys.filter(function (e) { return e; });

    // generate list array with v-key value
    var valToList = [];
    /* istanbul ignore else */
    if (Array.isArray(val) || typeof val === 'string') {
      valToList = new Array(val.length);
      for (var i = 0, l = val.length; i < l; i++) {
        valToList[i] = val[i];
      }
    } else if (typeof val === 'number') {
      valToList = new Array(val);
      for (var i$1 = 0; i$1 < val; i$1++) {
        valToList[i$1] = i$1;
      }
    } else if (isObject(val)) {
      valToList = Object.keys(val).map(function (e, i) { return i; });
    }

    list = valToList.map(function (e, i) {
      if (forKeys.length === 0) {
        return i
      }
      return forKeys.reduce(function (res, k) {
        res[k.replace(/\./g, '_')] = getValue(val[i], k);
        return res
      }, {})
    });
  }

  var cloneVnode = {
    context: context,
    data: {
      attrs: { _hid: forId }
    }
  };

  // TODO: try not disable key diff in patching process
  // key will reuse existing vnode which won't update the vnode content
  // see unit test: with key
  // list won't update after this.list.reverse() if it's not disable

  // if is a scoped slot list
  if (firstItem && !firstItem.fn) {
    vnodeList.forEach(function (vnode) {
      if (Array.isArray(vnode)) {
        vnode.forEach(function (c) {
          if (c.key) { c.key = undefined; }
        });
      } else if (vnode.key) {
        vnode.key = undefined;
      }
    });
  }

  updateVnodeToMP(cloneVnode, HOLDER_TYPE_VARS.for, list);
}

var app = null;

function initRootVM (mpVM, opt, query) {
  if ( opt === void 0 ) opt = {};
  if ( query === void 0 ) query = {};

  var options = opt.options;
  var Component = opt.Component;
  var platform = opt.platform;
  var mpType = options.mpType;
  var mpVMOptions = query;
  var ref = createUpdateFn(mpVM);
  var update = ref.update;
  var instantUpdate = ref.instantUpdate;
  var isEqualToBuffer = ref.isEqualToBuffer;
  var $mp = {
    platform: platform,
    status: 'load',
    query: mpVMOptions,
    options: mpVMOptions,
    _update: update,
    _instantUpdate: instantUpdate,
    _isEqualToBuffer: isEqualToBuffer
  };

  if (mpType === 'app') {
    app = mpVM;
    Object.assign($mp, { app: app });
  } else {
    Object.assign($mp, {
      page: mpVM,
      app: app
    });
  }

  Object.assign(options, { $mp: $mp });

  var rootVM = new Component(options);

  return rootVM
}

/*  */
function createElement$1 (tagName, vnode) {
  return {
    on: {

    }
  }
}

function createElementNS (namespace, tagName) {
  return {}
}

function createTextNode (text, vnode) {
  updateVnodeToMP(vnode, HOLDER_TYPE_VARS.text, text);
  return {
    text: text
  }
}

function createComment (text) {
  return {
    text: text
  }
}

function insertBefore (parentNode, newNode, referenceNode) {
}

function removeChild (node, child) {
}

function appendChild (node, child) {
}

function parentNode (node) {
  return {}
}

function nextSibling (node) {
  return {}
}

function tagName (node) {
  return '#'
}

function setTextContent (node, text, vnode) {
  updateVnodeToMP(vnode, HOLDER_TYPE_VARS.text, text);
  return {}
}

function setStyleScope (node, scopeId, vnode) {
  return {}
}

function setAttribute (node, scopeId, v, vnode) {
  return {}
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setStyleScope: setStyleScope,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
}

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *

/*
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

// Some browsers do not support dynamically changing type for <input>
// so they need to be treated as different nodes
function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text, vnode);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text, vnode));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    var ancestor = vnode;
    while (ancestor) {
      if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
        nodeOps.setAttribute(vnode.elm, i, '', vnode);
      }
      ancestor = ancestor.parent;
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setAttribute(vnode.elm, i, '', vnode);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if (sameVnode(elmToMove, newStartVnode)) {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          }
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, '', vnode); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '', vnode);
      }
    } else if (oldVnode.text !== vnode.text || (oldVnode.data && vnode.data && oldVnode.data._hid !== vnode.data._hid)) {
      nodeOps.setTextContent(elm, vnode.text, vnode);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue) {
    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.elm = elm;
      vnode.isAsyncPlaceholder = true;
      return true
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          var childrenMatch = true;
          var childNode = elm.firstChild;
          for (var i$1 = 0; i$1 < children.length; i$1++) {
            if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
              childrenMatch = false;
              break
            }
            childNode = childNode.nextSibling;
          }
          // if childNode is not null, it means the actual childNodes list is
          // longer than the virtual children list.
          if (!childrenMatch || childNode) {
            return false
          }
        }
      }
      if (isDef(data)) {
        for (var key in data) {
          if (!isRenderedModule(key)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else {}
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        if (isDef(vnode.parent)) {
          // component root element replaced.
          // update parent placeholder node element, recursively
          var ancestor = vnode.parent;
          while (ancestor) {
            ancestor.elm = vnode.elm;
            ancestor = ancestor.parent;
          }
          if (isPatchable(vnode)) {
            for (var i = 0; i < cbs.create.length; ++i) {
              cbs.create[i](emptyNode, vnode.parent);
            }
          }
        }

        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

function createTextVNode$1 (val, _hid, _fid) {
  var vnode = new VNode(undefined, {
    _hid: _hid, _fid: _fid
  }, undefined, String(val), undefined, this);

  return vnode
}

/*  */

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function beforeCreateElement (
  args,
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  var childrenIndex = 3;
  if (Array.isArray(data) || isPrimitive(data)) {
    childrenIndex = 2;
    normalizationType = children;
    children = data;
    data = undefined;
  }

  args[childrenIndex] = normalizeChildren$1(children);
}

function normalizeChildren$1 (children) {
  if ( children === void 0 ) children = [];

  var res = [];
  for (var i = 0, len = children.length; i < len; i++) {
    var child = children[i];
    if (Array.isArray(child)) {
      res = res.concat(normalizeChildren$1(child));
    } else if (child) {
      res.push(child);
    }
  }
  return res
}

/*  */



var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);









var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode$1 = new VNode('', {}, []);

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode$1);
  }
}

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode$1;
  var isDestroy = vnode === emptyNode$1;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
]

/*  */

var ignoreKeys = ['_hid', '_fk', '_cid', '_batrs'];

function isIgnoreKey (key) {
  return ignoreKeys.indexOf(key) > -1 ||
  /^_if_/.test(key)
}

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  var bindingAttrs = (attrs._batrs || '').split(',');
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    if (isIgnoreKey(key)) {
      continue
    }
    cur = attrs[key];
    old = oldAttrs[key];

    // only update daynamic attrs in runtime
    if (old !== cur && (bindingAttrs.indexOf(key) > -1 || key === 'slot')) {
      updateVnodeToMP(vnode, key, cur);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
}

/*  */

function updateClass (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);
  var rootClass = null;
  var rootVnode = null;

  if (isDef(cls) && isDef(vnode.componentInstance)) {
    var ref = vnode.data;
    var staticClass = ref.staticClass; if ( staticClass === void 0 ) staticClass = '';
    var rootClassList = cls
      .split(/\s+/)
      .concat(staticClass.split(/\s+/));
    rootVnode = vnode.componentInstance._vnode;
    rootClass = rootClassList.join(' ');
    cls = undefined;
  }

  if (isDef(cls)) {
    vnode.elm.class = cls;
    updateVnodeToMP(vnode, HOLDER_TYPE_VARS.class, cls);
  }

  if (isDef(rootClass)) {
    updateVnodeToMP(rootVnode, HOLDER_TYPE_VARS.rootClass, rootClass);
  }
}

var klass = {
  create: updateClass,
  update: updateClass
}

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      /* istanbul ignore else */
      if (key === 'innerHTML') {
        var ref = vnode.context;
        var $htmlParse = ref.$htmlParse;
        if ($htmlParse) {
          var htmlNodes = $htmlParse(cur);
          updateVnodeToMP(vnode, HOLDER_TYPE_VARS.vhtml, htmlNodes);
        } else {
          updateVnodeToMP(vnode, HOLDER_TYPE_VARS.vhtml, cur);
        }
        return
      } else if (key === 'textContent') {
        updateVnodeToMP(vnode, HOLDER_TYPE_VARS.vtext, cur);
        return
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        if (elm.value !== strCur) {
          elm.value = strCur;
          updateVnodeToMP(vnode, key, strCur);
        }
      }
    } else if (elm[key] !== cur) {
      elm[key] = cur;
      updateVnodeToMP(vnode, key, cur);
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  // return data.staticStyle
  //   ? extend(data.staticStyle, style)
  //   : style

  // mp: no need to update staticStyle
  return style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
// const setProp = (el, name, val) => {
//   /* istanbul ignore if */
//   if (cssVarRE.test(name)) {
//     el.style.setProperty(name, val)
//   } else if (importantRE.test(val)) {
//     el.style.setProperty(name, val.replace(importantRE, ''), 'important')
//   } else {
//     const normalizedName = normalize(name)
//     if (Array.isArray(val)) {
//       // Support values array created by autoprefixer, e.g.
//       // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
//       // Set them one by one, and the browser will only set those it can recognize
//       for (let i = 0, len = val.length; i < len; i++) {
//         el.style[normalizedName] = val[i]
//       }
//     } else {
//       el.style[normalizedName] = val
//     }
//   }
// }

// const vendorNames = ['Webkit', 'Moz', 'ms']

// let emptyStyle
// const normalize = cached(function (prop) {
//   emptyStyle = emptyStyle || {}
//   prop = camelize(prop)
//   if (prop !== 'filter' && (prop in emptyStyle)) {
//     return prop
//   }
//   const capName = prop.charAt(0).toUpperCase() + prop.slice(1)
//   for (let i = 0; i < vendorNames.length; i++) {
//     const name = vendorNames[i] + capName
//     if (name in emptyStyle) {
//       return name
//     }
//   }
//   return prop
// })

var normalize = cached(function (prop) {
  if ( prop === void 0 ) prop = '';

  return prop.replace(/[A-Z]/g, function (e) { return ("-" + (e.toLowerCase())); })
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  // const el: any = vnode.elm
  // const oldStaticStyle: any = oldData.staticStyle
  // const oldStyleBinding: any = oldData.normalizedStyle || oldData.style || {}

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  // const oldStyle = oldStaticStyle || oldStyleBinding

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  var res = [];
  var cur = Object.keys(newStyle)
    .reduce(function (res, name) {
      var val = newStyle[name];
      var normalizedName = normalize(name);
      if (val === undefined || val === null || val === false) {
        return res
      }
      if (cssVarRE.test(name)) {
        res.push((name + ": " + val));
      } else if (importantRE.test(val)) {
        res.push((normalizedName + ": " + val));
      } else {
        if (Array.isArray(val)) {
          // Support values array created by autoprefixer, e.g.
          // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
          // Set them one by one, and the browser will only set those it can recognize
          for (var i = 0, len = val.length; i < len; i++) {
            res.push((normalizedName + ": " + (val[i])));
          }
        } else {
          res.push((normalizedName + ": " + val));
        }
      }
      return res
    }, res)
    .filter(notEmpty)
    .join('; ');

  updateVnodeToMP(vnode, HOLDER_TYPE_VARS.style, cur);
}

var style = {
  create: updateStyle,
  update: updateStyle
}

/*  */

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  // handler = withMacroTask(handler)
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  /* istanbul ignore else */
  if (!target$1.on[event]) {
    target$1.on[event] = [];
  }
  target$1.on[event].push(handler);
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  if (!handler) {
    return
  }
  var realTarget = _target || target$1;
  var realHanlder = handler._withTask || handler;
  /* istanbul ignore else */
  if (realTarget.on[event]) {
    var index = realTarget.on[event].indexOf(realHanlder);
    /* istanbul ignore else */
    if (index > -1) {
      realTarget.on[event].splice(index, 1);
    }
  }
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
}

var platformModules = [
  attrs,
  klass,
  domProps,
  style,
  events
]

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

function walkInTree (vm, fn, options) {
  if ( options === void 0 ) options = {};

  var result;
  var bottomToTop = options.bottomToTop; if ( bottomToTop === void 0 ) bottomToTop = false;

  if (!bottomToTop) {
    result = fn(vm);
  }

  /* istanbul ignore else */
  if (vm.$children) {
    for (var i = vm.$children.length - 1; i >= 0; i--) {
      var child = vm.$children[i];
      result = walkInTree(child, fn, options) || result;
    }
  }

  if (bottomToTop) {
    result = fn(vm);
  }

  return result
}

function callHook$2 (vm, hook, options) {
  /* istanbul ignore if */
  if (!vm) {
    return
  }

  var result;

  if (hook === 'onReady') {
    result = walkInTree(vm, function (_vm) {
      var handler = _vm.$options[hook];
      handler && handler.call(_vm, options);
    }, { bottomToTop: true });
  } else {
    result = walkInTree(vm, function (_vm) {
      var handler = _vm.$options[hook];
      return handler && handler.call(_vm, options)
    });
  }

  if (hook === 'onUnload') {
    var rootVM = vm.$root;
    rootVM.$destroy();
  }

  return result
}

var page = {};

page.init = function init (opt) {
  var obj;

  Page({
    // 生命周期函数--监听页面加载
    data: ( obj = {}, obj[ROOT_DATA_VAR] = {}, obj),
    onLoad: function onLoad (options) {
      var rootVM = this.rootVM = initRootVM(this, opt, options);

      callHook$2(rootVM, 'onLoad', options);

      rootVM.$mount();

      rootVM.$mp._instantUpdate();
    },
    // 生命周期函数--监听页面初次渲染完成
    onReady: function onReady (options) {
      var rootVM = this.rootVM;
      var mp = rootVM.$mp;

      mp.status = 'ready';

      callHook$2(rootVM, 'onReady', options);
    },
    // 生命周期函数--监听页面显示
    onShow: function onShow (options) {
      var rootVM = this.rootVM;
      var mp = rootVM.$mp;

      mp.status = 'show';
      callHook$2(rootVM, 'onShow', options);
    },
    // 生命周期函数--监听页面隐藏
    onHide: function onHide (options) {
      var rootVM = this.rootVM;
      var mp = rootVM.$mp;

      mp.status = 'hide';
      callHook$2(rootVM, 'onHide', options);
    },
    // 生命周期函数--监听页面卸载
    onUnload: function onUnload (options) {
      var rootVM = this.rootVM;
      var mp = rootVM.$mp;

      mp.status = 'unload';
      callHook$2(rootVM, 'onUnload', options);
    },
    // 页面相关事件处理函数--监听用户下拉动作
    onPullDownRefresh: function onPullDownRefresh (options) {
      var rootVM = this.rootVM;

      callHook$2(rootVM, 'onPullDownRefresh', options);
    },
    // 页面上拉触底事件的处理函数
    onReachBottom: function onReachBottom (options) {
      var rootVM = this.rootVM;

      callHook$2(rootVM, 'onReachBottom', options);
    },
    // 用户点击右上角转发
    onShareAppMessage: function onShareAppMessage (options) {
      var rootVM = this.rootVM;
      //fixed by xxxxxx
      if(options.currentTarget){
        options.target = options.currentTarget
      }
      return callHook$2(rootVM, 'onShareAppMessage', options)
    },
    // 页面滚动触发事件的处理函数
    onPageScroll: function onPageScroll (options) {
      var rootVM = this.rootVM;

      callHook$2(rootVM, 'onPageScroll', options);
    },
    // 当前是 tab 页时，点击 tab 时触发
    onTabItemTap: function onTabItemTap (options) {
      var rootVM = this.rootVM;

      callHook$2(rootVM, 'onTabItemTap', options);
    },
    // 支付宝小程序: 标题被点击
    onTitleClick: function onTitleClick () {
      var rootVM = this.rootVM;

      callHook$2(rootVM, 'onTitleClick');
    },
    _pe: function _pe (e) {
      this.proxyEvent(e);
    },
    proxyEvent: function proxyEvent$1 (e) {
      var rootVM = this.rootVM;
      proxyEvent(rootVM, e);
    }
  });
};

var app$1 = {};

app$1.init = function (opt) {
  var obj;

  var _App;

  try {
    _App = App;
  } catch (err) {
    // 支付宝小程序中 App() 必须在 app.js 里调用，且不能调用多次。
    _App = my.__megalo.App; // eslint-disable-line
  }

  _App({
    data: ( obj = {}, obj[ROOT_DATA_VAR] = {}, obj),
    //	Function	生命周期函数--监听小程序初始化	当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
    onLaunch: function onLaunch (options) {
      if ( options === void 0 ) options = {};

      var rootVM = this.rootVM = initRootVM(this, opt, options.query);
      var ref = rootVM.$options;
      var globalData = ref.globalData; if ( globalData === void 0 ) globalData = function () {};
      this.globalData = globalData && (typeof globalData === 'function'
        ? globalData.call(rootVM, options)
        : globalData) || {};
      rootVM.globalData = this.globalData;
      rootVM.$mount();
      callHook$2(rootVM, 'onLaunch', options);
    },
    //	Function	生命周期函数--监听小程序显示	当小程序启动，或从后台进入前台显示，会触发 onShow
    onShow: function onShow (options) {
      var rootVM = this.rootVM;
      callHook$2(rootVM, 'onShow', options);
    },
    //	Function	生命周期函数--监听小程序隐藏	当小程序从前台进入后台，会触发 onHide
    onHide: function onHide () {
      var rootVM = this.rootVM;
      callHook$2(rootVM, 'onHide');
    },
    //	Function	错误监听函数	当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
    onError: function onError (msg) {
      var rootVM = this.rootVM;
      callHook$2(rootVM, 'onError', msg);
    },
    //	Function	页面不存在监听函数	当小程序出现要打开的页面不存在的情况，会带上页面信息回调该函数，详见下文
    onPageNotFound: function onPageNotFound (options) {
      var rootVM = this.rootVM;
      callHook$2(rootVM, 'onPageNotFound', options);
    },
    globalData: {}
  });
};

function initMP (vm, options) {
  var mpType = options.mpType; if ( mpType === void 0 ) mpType = 'page';
  var _mpPlatform = vm._mpPlatform;

  /* istanbul ignore else */
  if (mpType === 'app') {
    app$1.init({
      Component: vm.constructor,
      options: options,
      platform: _mpPlatform
    });
  } else if (mpType === 'page') {
    page.init({
      Component: vm.constructor,
      options: options,
      platform: _mpPlatform
    });
  }
}

/*  */

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

// import { isTextInputType } from 'mp/util/element'
// import { looseEqual, looseIndexOf } from 'shared/util'
// import { mergeVNodeHook } from 'core/vdom/helpers/index'
// import { warn } from 'core/util/index'

/* istanbul ignore if */
// if (isIE9) {
//   // http://www.matts411.com/post/internet-explorer-9-oninput/
//   document.addEventListener('selectionchange', () => {
//     const el = document.activeElement
//     if (el && el.vmodel) {
//       trigger(el, 'input')
//     }
//   })
// }

var directive = {
  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    if (oldValue !== value) {
      updateVnodeToMP(vnode, HOLDER_TYPE_VARS.value, value);
    }
  },

  inserted: function inserted (el, binding, vnode, oldVnode) {
    // if (vnode.tag === 'select') {
    //   // #6903
    //   if (oldVnode.elm && !oldVnode.elm._vOptions) {
    //     mergeVNodeHook(vnode, 'postpatch', () => {
    //       directive.componentUpdated(el, binding, vnode)
    //     })
    //   } else {
    //     setSelected(el, binding, vnode.context)
    //   }
    //   el._vOptions = [].map.call(el.options, getValue)
    // } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
    //   el._vModifiers = binding.modifiers
    //   if (!binding.modifiers.lazy) {
    //     el.addEventListener('compositionstart', onCompositionStart)
    //     el.addEventListener('compositionend', onCompositionEnd)
    //     // Safari < 10.2 & UIWebView doesn't fire compositionend when
    //     // switching focus before confirming composition choice
    //     // this also fixes the issue where some browsers e.g. iOS Chrome
    //     // fires "change" instead of "input" on autocomplete.
    //     el.addEventListener('change', onCompositionEnd)
    //     /* istanbul ignore if */
    //     if (isIE9) {
    //       el.vmodel = true
    //     }
    //   }
    // }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    // if (vnode.tag === 'select') {
    //   setSelected(el, binding, vnode.context)
    //   // in case the options rendered by v-for have changed,
    //   // it's possible that the value is out-of-sync with the rendered options.
    //   // detect such cases and filter out values that no longer has a matching
    //   // option in the DOM.
    //   const prevOptions = el._vOptions
    //   const curOptions = el._vOptions = [].map.call(el.options, getValue)
    //   if (curOptions.some((o, i) => !looseEqual(o, prevOptions[i]))) {
    //     // trigger change event if
    //     // no matching option found for at least one value
    //     const needReset = el.multiple
    //       ? binding.value.some(v => hasNoMatchingOption(v, curOptions))
    //       : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions)
    //     if (needReset) {
    //       trigger(el, 'change')
    //     }
    //   }
    // }
  }
};

/*  */

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore else */
    if (value !== oldValue) {
      updateVnodeToMP(vnode, HOLDER_TYPE_VARS.vshow, !value);
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    if (value !== oldValue) {
      updateVnodeToMP(vnode, HOLDER_TYPE_VARS.vshow, !value);
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    // if (!isDestroy) {
    //   el.style.display = el.__vOriginalDisplay
    // }
  }
}

var platformDirectives = {
  model: directive,
  show: show
}

/*  */

// import config from 'core/config'
// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);

// install platform patch function
Vue.prototype.__patch__ = patch;
Vue.prototype._v = createTextVNode$1;
Vue.prototype._ri = renderIf;
Vue.prototype.$updateMPData = updateMPData;

Vue.prototype._l = aop(Vue.prototype._l, {
  after: afterRenderList
});

var oInit = Vue.prototype._init;
Vue.prototype._init = function (options) {
  if ( options === void 0 ) options = {};

  if (!Vue.prototype._mpPlatform) {
    Vue.prototype._mpPlatform = getMPPlatform();
  }

  var $mp = options.$mp;
  var parent = options.parent; if ( parent === void 0 ) parent = {};
  var mpType = options.mpType; if ( mpType === void 0 ) mpType = '';
  //fixed by xxxxxx
  if(!mpType && this.constructor.extendOptions && this.constructor.extendOptions.mpType){
    options = this.constructor.extendOptions
    mpType = options.mpType
  }
  
  $mp = $mp || parent.$mp;
  if (!$mp && mpType) {
    initMP(this, options);
  } else if ($mp) {
    delete options.$mp;
    this.$mp = $mp;
    oInit.call(this, options);

    this._t = aop(this._t, {
      after: afterRenderSlot
    });

    this._c = aop(this._c, {
      before: beforeCreateElement
    });

    return this
  } else {
    oInit.call(this, options);
    return this
  }
};

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  if (this.$mp) {
    var vm = mountComponent(this, undefined, undefined);
    initVMToMP(vm);
    return vm
  }
};

/*  */

return Vue;

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ "./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\bottom-vue.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/ThinkPad/Desktop/Orange/components/bottom-vue.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;








var leanCloud = _interopRequireWildcard(__webpack_require__(/*! leancloud-storage/dist/av-weapp.js */ "C:\\Users\\ThinkPad\\Desktop\\Orange\\node_modules\\leancloud-storage\\dist\\av-weapp.js"));function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};if (desc.get || desc.set) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}}newObj.default = obj;return newObj;}} //
//
//
//
//
//
//
//
var _default = { data: function data() {return {};}, methods: { bindGetUserInfo: function bindGetUserInfo() {
      var _this = this;
      var queryaaa = new leanCloud.Query('MyHouse');
      queryaaa.equalTo('user', leanCloud.User.current());
      queryaaa.find().then(
      function (res) {
        if (res.length > 0) {
          uni.setStorageSync('supervisionHouse', res.reverse());
          uni.setStorageSync('supervisionName', "购买全程监理服务");
          uni.navigateTo({
            url: '../my-house/my-house' });

        } else {
          uni.navigateTo({
            url: '../no-house/no-house' });

        }
      },
      function (error) {});

      //uni.navigateTo({ url: '../buy/buy' });
    },
    make: function make() {
      uni.navigateTo({
        url: '../order/order' });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ "./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\uni-icon\\uni-icon.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/ThinkPad/Desktop/Orange/components/uni-icon/uni-icon.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
var _default =
{
  name: 'uni-icon',
  props: {
    /**
            * 图标类型
            */
    type: String,
    /**
                   * 图标颜色
                   */
    color: String,
    /**
                    * 图标大小
                    */
    size: [Number, String] },

  computed: {
    fontSize: function fontSize() {
      return "".concat(this.size, "px");
    } },

  methods: {
    onClick: function onClick() {
      this.$emit('click');
    } } };exports.default = _default;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\uni-rate\\uni-rate.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/ThinkPad/Desktop/Orange/components/uni-rate/uni-rate.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;











var _uniIcon = _interopRequireDefault(__webpack_require__(/*! ../uni-icon/uni-icon.vue */ "C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\uni-icon\\uni-icon.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
var _default = { name: "uni-rate", components: { uniIcon: _uniIcon.default }, props: { isFill: { //星星的类型，是否镂空
      type: [Boolean, String], default: true }, color: { //星星的颜色
      type: String, default: '#ececec' },

    activeColor: { //星星选中状态颜色
      type: String,
      default: '#ffca3e' },

    size: { //星星的大小
      type: [Number, String],
      default: 24 },

    value: { //当前评分
      type: [Number, String],
      default: 0 },

    max: { //最大评分
      type: [Number, String],
      default: 5 },

    margin: { //星星的间距
      type: [Number, String],
      default: 0 },

    disabled: { //是否可点击
      type: [Boolean, String],
      default: false } },


  data: function data() {
    console.log('data');
    return {
      maxSync: this.max,
      valueSync: this.value };

  },
  computed: {
    stars: function stars() {
      var max = Number(this.maxSync) ? Number(this.maxSync) : 5;
      var value = Number(this.valueSync) ? Number(this.valueSync) : 0;
      var starList = [];
      var floorValue = Math.floor(value);
      var ceilValue = Math.ceil(value);
      for (var i = 0; i < max; i++) {
        if (floorValue > i) {
          starList.push({
            activeWitch: '100%' });

        } else if (ceilValue - 1 === i) {
          starList.push({
            activeWitch: (value - floorValue) * 100 + '%' });

        } else {
          starList.push({
            activeWitch: '0' });

        }
      }
      return starList;
    } },

  methods: {
    onClick: function onClick(index) {
      if (this.disabled === true || this.disabled === 'true') {
        return;
      }
      this.valueSync = index + 1;
      this.$emit('change', {
        value: this.valueSync });

    } } };exports.default = _default;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\wait.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/ThinkPad/Desktop/Orange/components/wait.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
var _default =
{
  //props: ['text']
  methods: {},


  created: function created() {
    console.log('wait');
    wx.getStorage({
      key: 'avatarUrl',
      success: function success(res) {
        console.log(res.data);
      } });

    wx.getStorage({
      key: 'nickName',
      success: function success(res) {
        console.log(res.data);
      } });

  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ "./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\uni-rate\\uni-rate.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/ThinkPad/Desktop/Orange/components/uni-rate/uni-rate.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\bottom-vue.vue?vue&type=style&index=0&id=db669de8&scoped=scoped&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/ThinkPad/Desktop/Orange/components/bottom-vue.vue?vue&type=style&index=0&id=db669de8&scoped=scoped&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\uni-icon\\uni-icon.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/ThinkPad/Desktop/Orange/components/uni-icon/uni-icon.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\wait.vue?vue&type=style&index=0&id=1b8f331d&scoped=scoped&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/ThinkPad/Desktop/Orange/components/wait.vue?vue&type=style&index=0&id=1b8f331d&scoped=scoped&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/node-libs-browser/mock/process.js":
/*!********************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/process.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
	setTimeout(fn, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
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

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node-libs-browser/mock/process.js */ "./node_modules/node-libs-browser/mock/process.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\bottom-vue.vue?vue&type=template&id=db669de8&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/ThinkPad/Desktop/Orange/components/bottom-vue.vue?vue&type=template&id=db669de8&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: "view-bt", attrs: { _hid: 0 } },
    [
      _c(
        "button",
        { attrs: { plain: "true", "open-type": "contact", _hid: 1 } },
        [
          _c("image", {
            staticClass: "bt-img1",
            attrs: { src: "../../static/img/index/kefu.png", _hid: 2 }
          })
        ]
      ),
      _c(
        "button",
        {
          attrs: { plain: "true", _hid: 3 },
          on: { click: _vm.bindGetUserInfo }
        },
        [
          _c("image", {
            staticClass: "bt-img2",
            attrs: { src: "../../static/img/index/buy.png", _hid: 4 }
          })
        ]
      ),
      _c(
        "button",
        { attrs: { plain: "true", _hid: 5 }, on: { click: _vm.make } },
        [
          _c("image", {
            staticClass: "bt-img3",
            attrs: { src: "../../static/img/index/ty.png", _hid: 6 }
          })
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\uni-icon\\uni-icon.vue?vue&type=template&id=5d439977&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/ThinkPad/Desktop/Orange/components/uni-icon/uni-icon.vue?vue&type=template&id=5d439977& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", {
    staticClass: "uni-icon",
    class: ["uni-icon-" + _vm.type],
    style: { color: _vm.color, "font-size": _vm.fontSize },
    attrs: { _hid: 0 },
    on: {
      click: function($event) {
        _vm.onClick()
      }
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\uni-rate\\uni-rate.vue?vue&type=template&id=f485a552&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/ThinkPad/Desktop/Orange/components/uni-rate/uni-rate.vue?vue&type=template&id=f485a552& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: "uni-rate", attrs: { _hid: 0 } },
    _vm._l(
      _vm.stars,
      function(star, index, star_i2) {
        var _fid = star_i2 !== undefined ? star_i2 : index
        return _c(
          "view",
          {
            key: index,
            staticClass: "uni-rate-icon",
            style: { marginLeft: _vm.margin + "px" },
            attrs: { _hid: 1, _fid: _fid, _fk: "index" },
            on: {
              click: function($event) {
                _vm.onClick(index)
              }
            }
          },
          [
            _c("uni-icon", {
              attrs: {
                size: _vm.size,
                color: _vm.color,
                type:
                  _vm.isFill === false || _vm.isFill === "false"
                    ? "star"
                    : "star-filled",
                _hid: 2,
                _fid: _fid,
                _batrs: "size,color,type",
                _cid: 0
              }
            }),
            _c(
              "view",
              {
                staticClass: "uni-rate-icon-on",
                style: { width: star.activeWitch },
                attrs: { _hid: 1004, _fid: _fid }
              },
              [
                _c("uni-icon", {
                  attrs: {
                    size: _vm.size,
                    color: _vm.activeColor,
                    type: "star-filled",
                    _hid: 1005,
                    _fid: _fid,
                    _batrs: "size,color",
                    _cid: 1
                  }
                })
              ],
              1
            )
          ],
          1
        )
      },
      1,
      _vm._self
    )
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\wait.vue?vue&type=template&id=1b8f331d&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/ThinkPad/Desktop/Orange/components/wait.vue?vue&type=template&id=1b8f331d&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: "wait", attrs: { _hid: 0 } },
    [
      _c("image", {
        attrs: {
          src: "/static/img/index/pic_wait.png",
          mode: "widthFix",
          _hid: 1
        }
      }),
      _c("p", { attrs: { _hid: 2 } }, [])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\bottom-vue.vue":
/*!******************************************************************!*\
  !*** C:/Users/ThinkPad/Desktop/Orange/components/bottom-vue.vue ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bottom_vue_vue_vue_type_template_id_db669de8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bottom-vue.vue?vue&type=template&id=db669de8&scoped=true& */ "C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\bottom-vue.vue?vue&type=template&id=db669de8&scoped=true&");
/* harmony import */ var _bottom_vue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bottom-vue.vue?vue&type=script&lang=js& */ "C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\bottom-vue.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _bottom_vue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _bottom_vue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _bottom_vue_vue_vue_type_style_index_0_id_db669de8_scoped_scoped_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bottom-vue.vue?vue&type=style&index=0&id=db669de8&scoped=scoped&lang=css& */ "C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\bottom-vue.vue?vue&type=style&index=0&id=db669de8&scoped=scoped&lang=css&");
/* harmony import */ var _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _bottom_vue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _bottom_vue_vue_vue_type_template_id_db669de8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _bottom_vue_vue_vue_type_template_id_db669de8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "db669de8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/ThinkPad/Desktop/Orange/components/bottom-vue.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\bottom-vue.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** C:/Users/ThinkPad/Desktop/Orange/components/bottom-vue.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bottom_vue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./bottom-vue.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\bottom-vue.vue?vue&type=script&lang=js&");
/* harmony import */ var _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bottom_vue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bottom_vue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bottom_vue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bottom_vue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bottom_vue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\bottom-vue.vue?vue&type=style&index=0&id=db669de8&scoped=scoped&lang=css&":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/ThinkPad/Desktop/Orange/components/bottom-vue.vue?vue&type=style&index=0&id=db669de8&scoped=scoped&lang=css& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bottom_vue_vue_vue_type_style_index_0_id_db669de8_scoped_scoped_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./bottom-vue.vue?vue&type=style&index=0&id=db669de8&scoped=scoped&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\bottom-vue.vue?vue&type=style&index=0&id=db669de8&scoped=scoped&lang=css&");
/* harmony import */ var _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bottom_vue_vue_vue_type_style_index_0_id_db669de8_scoped_scoped_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bottom_vue_vue_vue_type_style_index_0_id_db669de8_scoped_scoped_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bottom_vue_vue_vue_type_style_index_0_id_db669de8_scoped_scoped_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bottom_vue_vue_vue_type_style_index_0_id_db669de8_scoped_scoped_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bottom_vue_vue_vue_type_style_index_0_id_db669de8_scoped_scoped_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\bottom-vue.vue?vue&type=template&id=db669de8&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** C:/Users/ThinkPad/Desktop/Orange/components/bottom-vue.vue?vue&type=template&id=db669de8&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bottom_vue_vue_vue_type_template_id_db669de8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./bottom-vue.vue?vue&type=template&id=db669de8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\bottom-vue.vue?vue&type=template&id=db669de8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bottom_vue_vue_vue_type_template_id_db669de8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bottom_vue_vue_vue_type_template_id_db669de8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\uni-icon\\uni-icon.vue":
/*!*************************************************************************!*\
  !*** C:/Users/ThinkPad/Desktop/Orange/components/uni-icon/uni-icon.vue ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_icon_vue_vue_type_template_id_5d439977___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-icon.vue?vue&type=template&id=5d439977& */ "C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\uni-icon\\uni-icon.vue?vue&type=template&id=5d439977&");
/* harmony import */ var _uni_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-icon.vue?vue&type=script&lang=js& */ "C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\uni-icon\\uni-icon.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _uni_icon_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uni-icon.vue?vue&type=style&index=0&lang=css& */ "C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\uni-icon\\uni-icon.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _uni_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_icon_vue_vue_type_template_id_5d439977___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_icon_vue_vue_type_template_id_5d439977___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/ThinkPad/Desktop/Orange/components/uni-icon/uni-icon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\uni-icon\\uni-icon.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** C:/Users/ThinkPad/Desktop/Orange/components/uni-icon/uni-icon.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./uni-icon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\uni-icon\\uni-icon.vue?vue&type=script&lang=js&");
/* harmony import */ var _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\uni-icon\\uni-icon.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************!*\
  !*** C:/Users/ThinkPad/Desktop/Orange/components/uni-icon/uni-icon.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_icon_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./uni-icon.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\uni-icon\\uni-icon.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_icon_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_icon_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_icon_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_icon_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_icon_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\uni-icon\\uni-icon.vue?vue&type=template&id=5d439977&":
/*!********************************************************************************************************!*\
  !*** C:/Users/ThinkPad/Desktop/Orange/components/uni-icon/uni-icon.vue?vue&type=template&id=5d439977& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_icon_vue_vue_type_template_id_5d439977___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./uni-icon.vue?vue&type=template&id=5d439977& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\uni-icon\\uni-icon.vue?vue&type=template&id=5d439977&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_icon_vue_vue_type_template_id_5d439977___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_icon_vue_vue_type_template_id_5d439977___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\uni-rate\\uni-rate.vue":
/*!*************************************************************************!*\
  !*** C:/Users/ThinkPad/Desktop/Orange/components/uni-rate/uni-rate.vue ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_rate_vue_vue_type_template_id_f485a552___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-rate.vue?vue&type=template&id=f485a552& */ "C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\uni-rate\\uni-rate.vue?vue&type=template&id=f485a552&");
/* harmony import */ var _uni_rate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-rate.vue?vue&type=script&lang=js& */ "C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\uni-rate\\uni-rate.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_rate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_rate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _uni_rate_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uni-rate.vue?vue&type=style&index=0&lang=scss& */ "C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\uni-rate\\uni-rate.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _uni_rate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_rate_vue_vue_type_template_id_f485a552___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_rate_vue_vue_type_template_id_f485a552___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/ThinkPad/Desktop/Orange/components/uni-rate/uni-rate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\uni-rate\\uni-rate.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** C:/Users/ThinkPad/Desktop/Orange/components/uni-rate/uni-rate.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_rate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./uni-rate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\uni-rate\\uni-rate.vue?vue&type=script&lang=js&");
/* harmony import */ var _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_rate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_rate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_rate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_rate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_rate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\uni-rate\\uni-rate.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************!*\
  !*** C:/Users/ThinkPad/Desktop/Orange/components/uni-rate/uni-rate.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_rate_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./uni-rate.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\uni-rate\\uni-rate.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_rate_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_rate_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_rate_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_rate_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_rate_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\uni-rate\\uni-rate.vue?vue&type=template&id=f485a552&":
/*!********************************************************************************************************!*\
  !*** C:/Users/ThinkPad/Desktop/Orange/components/uni-rate/uni-rate.vue?vue&type=template&id=f485a552& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_rate_vue_vue_type_template_id_f485a552___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./uni-rate.vue?vue&type=template&id=f485a552& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\uni-rate\\uni-rate.vue?vue&type=template&id=f485a552&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_rate_vue_vue_type_template_id_f485a552___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_rate_vue_vue_type_template_id_f485a552___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\wait.vue":
/*!************************************************************!*\
  !*** C:/Users/ThinkPad/Desktop/Orange/components/wait.vue ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wait_vue_vue_type_template_id_1b8f331d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wait.vue?vue&type=template&id=1b8f331d&scoped=true& */ "C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\wait.vue?vue&type=template&id=1b8f331d&scoped=true&");
/* harmony import */ var _wait_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wait.vue?vue&type=script&lang=js& */ "C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\wait.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _wait_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _wait_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _wait_vue_vue_type_style_index_0_id_1b8f331d_scoped_scoped_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wait.vue?vue&type=style&index=0&id=1b8f331d&scoped=scoped&lang=css& */ "C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\wait.vue?vue&type=style&index=0&id=1b8f331d&scoped=scoped&lang=css&");
/* harmony import */ var _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _wait_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _wait_vue_vue_type_template_id_1b8f331d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _wait_vue_vue_type_template_id_1b8f331d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1b8f331d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/ThinkPad/Desktop/Orange/components/wait.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\wait.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** C:/Users/ThinkPad/Desktop/Orange/components/wait.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_wait_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./wait.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\wait.vue?vue&type=script&lang=js&");
/* harmony import */ var _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_wait_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_wait_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_wait_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_wait_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_wait_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\wait.vue?vue&type=style&index=0&id=1b8f331d&scoped=scoped&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/ThinkPad/Desktop/Orange/components/wait.vue?vue&type=style&index=0&id=1b8f331d&scoped=scoped&lang=css& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_wait_vue_vue_type_style_index_0_id_1b8f331d_scoped_scoped_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./wait.vue?vue&type=style&index=0&id=1b8f331d&scoped=scoped&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\wait.vue?vue&type=style&index=0&id=1b8f331d&scoped=scoped&lang=css&");
/* harmony import */ var _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_wait_vue_vue_type_style_index_0_id_1b8f331d_scoped_scoped_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_wait_vue_vue_type_style_index_0_id_1b8f331d_scoped_scoped_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_wait_vue_vue_type_style_index_0_id_1b8f331d_scoped_scoped_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_wait_vue_vue_type_style_index_0_id_1b8f331d_scoped_scoped_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_wait_vue_vue_type_style_index_0_id_1b8f331d_scoped_scoped_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\wait.vue?vue&type=template&id=1b8f331d&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** C:/Users/ThinkPad/Desktop/Orange/components/wait.vue?vue&type=template&id=1b8f331d&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_wait_vue_vue_type_template_id_1b8f331d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./wait.vue?vue&type=template&id=1b8f331d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\ThinkPad\\Desktop\\Orange\\components\\wait.vue?vue&type=template&id=1b8f331d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_wait_vue_vue_type_template_id_1b8f331d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_wait_vue_vue_type_template_id_1b8f331d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "C:\\Users\\ThinkPad\\Desktop\\Orange\\node_modules\\leancloud-storage\\dist\\av-weapp.js":
/*!****************************************************************************************!*\
  !*** C:/Users/ThinkPad/Desktop/Orange/node_modules/leancloud-storage/dist/av-weapp.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, wx) {var window={};var XMLHttpRequest;var navigator;var localStorage;
(function webpackUniversalModuleDefinition(root,factory){
if(true)
module.exports=factory();else
{}
})(typeof self!=='undefined'?self:void 0,function(){
return(/******/function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};
/******/
/******/ // The require function
/******/function __webpack_require__(moduleId){
/******/
/******/ // Check if module is in cache
/******/if(installedModules[moduleId]){
/******/return installedModules[moduleId].exports;
/******/}
/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={
/******/i:moduleId,
/******/l:false,
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);
/******/
/******/ // Flag the module as loaded
/******/module.l=true;
/******/
/******/ // Return the exports of the module
/******/return module.exports;
/******/}
/******/
/******/
/******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;
/******/
/******/ // expose the module cache
/******/__webpack_require__.c=installedModules;
/******/
/******/ // define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){
/******/if(!__webpack_require__.o(exports,name)){
/******/Object.defineProperty(exports,name,{
/******/configurable:false,
/******/enumerable:true,
/******/get:getter
/******/});
/******/}
/******/};
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){
/******/var getter=module&&module.__esModule?
/******/function getDefault(){return module['default'];}:
/******/function getModuleExports(){return module;};
/******/__webpack_require__.d(getter,'a',getter);
/******/return getter;
/******/};
/******/
/******/ // Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};
/******/
/******/ // __webpack_public_path__
/******/__webpack_require__.p="";
/******/
/******/ // Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=23);
/******/}(
/************************************************************************/
/******/[
/* 0 */
/***/function(module,exports,__webpack_require__){

/* WEBPACK VAR INJECTION */(function(global,module){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.9.1
//     http://underscorejs.org
//     (c) 2009-2018 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function(){

// Baseline setup
// --------------

// Establish the root object, `window` (`self`) in the browser, `global`
// on the server, or `this` in some virtual machines. We use `self`
// instead of `window` for `WebWorker` support.
var root=typeof self=='object'&&self.self===self&&self||
typeof global=='object'&&global.global===global&&global||
this||
{};

// Save the previous value of the `_` variable.
var previousUnderscore=root._;

// Save bytes in the minified (but not gzipped) version:
var ArrayProto=Array.prototype,ObjProto=Object.prototype;
var SymbolProto=typeof Symbol!=='undefined'?Symbol.prototype:null;

// Create quick reference variables for speed access to core prototypes.
var push=ArrayProto.push,
slice=ArrayProto.slice,
toString=ObjProto.toString,
hasOwnProperty=ObjProto.hasOwnProperty;

// All **ECMAScript 5** native function implementations that we hope to use
// are declared here.
var nativeIsArray=Array.isArray,
nativeKeys=Object.keys,
nativeCreate=Object.create;

// Naked function reference for surrogate-prototype-swapping.
var Ctor=function Ctor(){};

// Create a safe reference to the Underscore object for use below.
var _=function _(obj){
if(obj instanceof _)return obj;
if(!(this instanceof _))return new _(obj);
this._wrapped=obj;
};

// Export the Underscore object for **Node.js**, with
// backwards-compatibility for their old module API. If we're in
// the browser, add `_` as a global object.
// (`nodeType` is checked to ensure that `module`
// and `exports` are not HTML elements.)
if(typeof exports!='undefined'&&!exports.nodeType){
if(typeof module!='undefined'&&!module.nodeType&&module.exports){
exports=module.exports=_;
}
exports._=_;
}else{
root._=_;
}

// Current version.
_.VERSION='1.9.1';

// Internal function that returns an efficient (for current engines) version
// of the passed-in callback, to be repeatedly applied in other Underscore
// functions.
var optimizeCb=function optimizeCb(func,context,argCount){
if(context===void 0)return func;
switch(argCount==null?3:argCount){
case 1:return function(value){
return func.call(context,value);
};
// The 2-argument case is omitted because we’re not using it.
case 3:return function(value,index,collection){
return func.call(context,value,index,collection);
};
case 4:return function(accumulator,value,index,collection){
return func.call(context,accumulator,value,index,collection);
};}

return function(){
return func.apply(context,arguments);
};
};

var builtinIteratee;

// An internal function to generate callbacks that can be applied to each
// element in a collection, returning the desired result — either `identity`,
// an arbitrary callback, a property matcher, or a property accessor.
var cb=function cb(value,context,argCount){
if(_.iteratee!==builtinIteratee)return _.iteratee(value,context);
if(value==null)return _.identity;
if(_.isFunction(value))return optimizeCb(value,context,argCount);
if(_.isObject(value)&&!_.isArray(value))return _.matcher(value);
return _.property(value);
};

// External wrapper for our callback generator. Users may customize
// `_.iteratee` if they want additional predicate/iteratee shorthand styles.
// This abstraction hides the internal-only argCount argument.
_.iteratee=builtinIteratee=function builtinIteratee(value,context){
return cb(value,context,Infinity);
};

// Some functions take a variable number of arguments, or a few expected
// arguments at the beginning and then a variable number of values to operate
// on. This helper accumulates all remaining arguments past the function’s
// argument length (or an explicit `startIndex`), into an array that becomes
// the last argument. Similar to ES6’s "rest parameter".
var restArguments=function restArguments(func,startIndex){
startIndex=startIndex==null?func.length-1:+startIndex;
return function(){
var length=Math.max(arguments.length-startIndex,0),
rest=Array(length),
index=0;
for(;index<length;index++){
rest[index]=arguments[index+startIndex];
}
switch(startIndex){
case 0:return func.call(this,rest);
case 1:return func.call(this,arguments[0],rest);
case 2:return func.call(this,arguments[0],arguments[1],rest);}

var args=Array(startIndex+1);
for(index=0;index<startIndex;index++){
args[index]=arguments[index];
}
args[startIndex]=rest;
return func.apply(this,args);
};
};

// An internal function for creating a new object that inherits from another.
var baseCreate=function baseCreate(prototype){
if(!_.isObject(prototype))return{};
if(nativeCreate)return nativeCreate(prototype);
Ctor.prototype=prototype;
var result=new Ctor();
Ctor.prototype=null;
return result;
};

var shallowProperty=function shallowProperty(key){
return function(obj){
return obj==null?void 0:obj[key];
};
};

var has=function has(obj,path){
return obj!=null&&hasOwnProperty.call(obj,path);
};

var deepGet=function deepGet(obj,path){
var length=path.length;
for(var i=0;i<length;i++){
if(obj==null)return void 0;
obj=obj[path[i]];
}
return length?obj:void 0;
};

// Helper for collection methods to determine whether a collection
// should be iterated as an array or as an object.
// Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
// Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
var MAX_ARRAY_INDEX=Math.pow(2,53)-1;
var getLength=shallowProperty('length');
var isArrayLike=function isArrayLike(collection){
var length=getLength(collection);
return typeof length=='number'&&length>=0&&length<=MAX_ARRAY_INDEX;
};

// Collection Functions
// --------------------

// The cornerstone, an `each` implementation, aka `forEach`.
// Handles raw objects in addition to array-likes. Treats all
// sparse array-likes as if they were dense.
_.each=_.forEach=function(obj,iteratee,context){
iteratee=optimizeCb(iteratee,context);
var i,length;
if(isArrayLike(obj)){
for(i=0,length=obj.length;i<length;i++){
iteratee(obj[i],i,obj);
}
}else{
var keys=_.keys(obj);
for(i=0,length=keys.length;i<length;i++){
iteratee(obj[keys[i]],keys[i],obj);
}
}
return obj;
};

// Return the results of applying the iteratee to each element.
_.map=_.collect=function(obj,iteratee,context){
iteratee=cb(iteratee,context);
var keys=!isArrayLike(obj)&&_.keys(obj),
length=(keys||obj).length,
results=Array(length);
for(var index=0;index<length;index++){
var currentKey=keys?keys[index]:index;
results[index]=iteratee(obj[currentKey],currentKey,obj);
}
return results;
};

// Create a reducing function iterating left or right.
var createReduce=function createReduce(dir){
// Wrap code that reassigns argument variables in a separate function than
// the one that accesses `arguments.length` to avoid a perf hit. (#1991)
var reducer=function reducer(obj,iteratee,memo,initial){
var keys=!isArrayLike(obj)&&_.keys(obj),
length=(keys||obj).length,
index=dir>0?0:length-1;
if(!initial){
memo=obj[keys?keys[index]:index];
index+=dir;
}
for(;index>=0&&index<length;index+=dir){
var currentKey=keys?keys[index]:index;
memo=iteratee(memo,obj[currentKey],currentKey,obj);
}
return memo;
};

return function(obj,iteratee,memo,context){
var initial=arguments.length>=3;
return reducer(obj,optimizeCb(iteratee,context,4),memo,initial);
};
};

// **Reduce** builds up a single result from a list of values, aka `inject`,
// or `foldl`.
_.reduce=_.foldl=_.inject=createReduce(1);

// The right-associative version of reduce, also known as `foldr`.
_.reduceRight=_.foldr=createReduce(-1);

// Return the first value which passes a truth test. Aliased as `detect`.
_.find=_.detect=function(obj,predicate,context){
var keyFinder=isArrayLike(obj)?_.findIndex:_.findKey;
var key=keyFinder(obj,predicate,context);
if(key!==void 0&&key!==-1)return obj[key];
};

// Return all the elements that pass a truth test.
// Aliased as `select`.
_.filter=_.select=function(obj,predicate,context){
var results=[];
predicate=cb(predicate,context);
_.each(obj,function(value,index,list){
if(predicate(value,index,list))results.push(value);
});
return results;
};

// Return all the elements for which a truth test fails.
_.reject=function(obj,predicate,context){
return _.filter(obj,_.negate(cb(predicate)),context);
};

// Determine whether all of the elements match a truth test.
// Aliased as `all`.
_.every=_.all=function(obj,predicate,context){
predicate=cb(predicate,context);
var keys=!isArrayLike(obj)&&_.keys(obj),
length=(keys||obj).length;
for(var index=0;index<length;index++){
var currentKey=keys?keys[index]:index;
if(!predicate(obj[currentKey],currentKey,obj))return false;
}
return true;
};

// Determine if at least one element in the object matches a truth test.
// Aliased as `any`.
_.some=_.any=function(obj,predicate,context){
predicate=cb(predicate,context);
var keys=!isArrayLike(obj)&&_.keys(obj),
length=(keys||obj).length;
for(var index=0;index<length;index++){
var currentKey=keys?keys[index]:index;
if(predicate(obj[currentKey],currentKey,obj))return true;
}
return false;
};

// Determine if the array or object contains a given item (using `===`).
// Aliased as `includes` and `include`.
_.contains=_.includes=_.include=function(obj,item,fromIndex,guard){
if(!isArrayLike(obj))obj=_.values(obj);
if(typeof fromIndex!='number'||guard)fromIndex=0;
return _.indexOf(obj,item,fromIndex)>=0;
};

// Invoke a method (with arguments) on every item in a collection.
_.invoke=restArguments(function(obj,path,args){
var contextPath,func;
if(_.isFunction(path)){
func=path;
}else if(_.isArray(path)){
contextPath=path.slice(0,-1);
path=path[path.length-1];
}
return _.map(obj,function(context){
var method=func;
if(!method){
if(contextPath&&contextPath.length){
context=deepGet(context,contextPath);
}
if(context==null)return void 0;
method=context[path];
}
return method==null?method:method.apply(context,args);
});
});

// Convenience version of a common use case of `map`: fetching a property.
_.pluck=function(obj,key){
return _.map(obj,_.property(key));
};

// Convenience version of a common use case of `filter`: selecting only objects
// containing specific `key:value` pairs.
_.where=function(obj,attrs){
return _.filter(obj,_.matcher(attrs));
};

// Convenience version of a common use case of `find`: getting the first object
// containing specific `key:value` pairs.
_.findWhere=function(obj,attrs){
return _.find(obj,_.matcher(attrs));
};

// Return the maximum element (or element-based computation).
_.max=function(obj,iteratee,context){
var result=-Infinity,lastComputed=-Infinity,
value,computed;
if(iteratee==null||typeof iteratee=='number'&&typeof obj[0]!='object'&&obj!=null){
obj=isArrayLike(obj)?obj:_.values(obj);
for(var i=0,length=obj.length;i<length;i++){
value=obj[i];
if(value!=null&&value>result){
result=value;
}
}
}else{
iteratee=cb(iteratee,context);
_.each(obj,function(v,index,list){
computed=iteratee(v,index,list);
if(computed>lastComputed||computed===-Infinity&&result===-Infinity){
result=v;
lastComputed=computed;
}
});
}
return result;
};

// Return the minimum element (or element-based computation).
_.min=function(obj,iteratee,context){
var result=Infinity,lastComputed=Infinity,
value,computed;
if(iteratee==null||typeof iteratee=='number'&&typeof obj[0]!='object'&&obj!=null){
obj=isArrayLike(obj)?obj:_.values(obj);
for(var i=0,length=obj.length;i<length;i++){
value=obj[i];
if(value!=null&&value<result){
result=value;
}
}
}else{
iteratee=cb(iteratee,context);
_.each(obj,function(v,index,list){
computed=iteratee(v,index,list);
if(computed<lastComputed||computed===Infinity&&result===Infinity){
result=v;
lastComputed=computed;
}
});
}
return result;
};

// Shuffle a collection.
_.shuffle=function(obj){
return _.sample(obj,Infinity);
};

// Sample **n** random values from a collection using the modern version of the
// [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
// If **n** is not specified, returns a single random element.
// The internal `guard` argument allows it to work with `map`.
_.sample=function(obj,n,guard){
if(n==null||guard){
if(!isArrayLike(obj))obj=_.values(obj);
return obj[_.random(obj.length-1)];
}
var sample=isArrayLike(obj)?_.clone(obj):_.values(obj);
var length=getLength(sample);
n=Math.max(Math.min(n,length),0);
var last=length-1;
for(var index=0;index<n;index++){
var rand=_.random(index,last);
var temp=sample[index];
sample[index]=sample[rand];
sample[rand]=temp;
}
return sample.slice(0,n);
};

// Sort the object's values by a criterion produced by an iteratee.
_.sortBy=function(obj,iteratee,context){
var index=0;
iteratee=cb(iteratee,context);
return _.pluck(_.map(obj,function(value,key,list){
return{
value:value,
index:index++,
criteria:iteratee(value,key,list)};

}).sort(function(left,right){
var a=left.criteria;
var b=right.criteria;
if(a!==b){
if(a>b||a===void 0)return 1;
if(a<b||b===void 0)return-1;
}
return left.index-right.index;
}),'value');
};

// An internal function used for aggregate "group by" operations.
var group=function group(behavior,partition){
return function(obj,iteratee,context){
var result=partition?[[],[]]:{};
iteratee=cb(iteratee,context);
_.each(obj,function(value,index){
var key=iteratee(value,index,obj);
behavior(result,value,key);
});
return result;
};
};

// Groups the object's values by a criterion. Pass either a string attribute
// to group by, or a function that returns the criterion.
_.groupBy=group(function(result,value,key){
if(has(result,key))result[key].push(value);else result[key]=[value];
});

// Indexes the object's values by a criterion, similar to `groupBy`, but for
// when you know that your index values will be unique.
_.indexBy=group(function(result,value,key){
result[key]=value;
});

// Counts instances of an object that group by a certain criterion. Pass
// either a string attribute to count by, or a function that returns the
// criterion.
_.countBy=group(function(result,value,key){
if(has(result,key))result[key]++;else result[key]=1;
});

var reStrSymbol=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
// Safely create a real, live array from anything iterable.
_.toArray=function(obj){
if(!obj)return[];
if(_.isArray(obj))return slice.call(obj);
if(_.isString(obj)){
// Keep surrogate pair characters together
return obj.match(reStrSymbol);
}
if(isArrayLike(obj))return _.map(obj,_.identity);
return _.values(obj);
};

// Return the number of elements in an object.
_.size=function(obj){
if(obj==null)return 0;
return isArrayLike(obj)?obj.length:_.keys(obj).length;
};

// Split a collection into two arrays: one whose elements all satisfy the given
// predicate, and one whose elements all do not satisfy the predicate.
_.partition=group(function(result,value,pass){
result[pass?0:1].push(value);
},true);

// Array Functions
// ---------------

// Get the first element of an array. Passing **n** will return the first N
// values in the array. Aliased as `head` and `take`. The **guard** check
// allows it to work with `_.map`.
_.first=_.head=_.take=function(array,n,guard){
if(array==null||array.length<1)return n==null?void 0:[];
if(n==null||guard)return array[0];
return _.initial(array,array.length-n);
};

// Returns everything but the last entry of the array. Especially useful on
// the arguments object. Passing **n** will return all the values in
// the array, excluding the last N.
_.initial=function(array,n,guard){
return slice.call(array,0,Math.max(0,array.length-(n==null||guard?1:n)));
};

// Get the last element of an array. Passing **n** will return the last N
// values in the array.
_.last=function(array,n,guard){
if(array==null||array.length<1)return n==null?void 0:[];
if(n==null||guard)return array[array.length-1];
return _.rest(array,Math.max(0,array.length-n));
};

// Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
// Especially useful on the arguments object. Passing an **n** will return
// the rest N values in the array.
_.rest=_.tail=_.drop=function(array,n,guard){
return slice.call(array,n==null||guard?1:n);
};

// Trim out all falsy values from an array.
_.compact=function(array){
return _.filter(array,Boolean);
};

// Internal implementation of a recursive `flatten` function.
var flatten=function flatten(input,shallow,strict,output){
output=output||[];
var idx=output.length;
for(var i=0,length=getLength(input);i<length;i++){
var value=input[i];
if(isArrayLike(value)&&(_.isArray(value)||_.isArguments(value))){
// Flatten current level of array or arguments object.
if(shallow){
var j=0,len=value.length;
while(j<len){output[idx++]=value[j++];}
}else{
flatten(value,shallow,strict,output);
idx=output.length;
}
}else if(!strict){
output[idx++]=value;
}
}
return output;
};

// Flatten out an array, either recursively (by default), or just one level.
_.flatten=function(array,shallow){
return flatten(array,shallow,false);
};

// Return a version of the array that does not contain the specified value(s).
_.without=restArguments(function(array,otherArrays){
return _.difference(array,otherArrays);
});

// Produce a duplicate-free version of the array. If the array has already
// been sorted, you have the option of using a faster algorithm.
// The faster algorithm will not work with an iteratee if the iteratee
// is not a one-to-one function, so providing an iteratee will disable
// the faster algorithm.
// Aliased as `unique`.
_.uniq=_.unique=function(array,isSorted,iteratee,context){
if(!_.isBoolean(isSorted)){
context=iteratee;
iteratee=isSorted;
isSorted=false;
}
if(iteratee!=null)iteratee=cb(iteratee,context);
var result=[];
var seen=[];
for(var i=0,length=getLength(array);i<length;i++){
var value=array[i],
computed=iteratee?iteratee(value,i,array):value;
if(isSorted&&!iteratee){
if(!i||seen!==computed)result.push(value);
seen=computed;
}else if(iteratee){
if(!_.contains(seen,computed)){
seen.push(computed);
result.push(value);
}
}else if(!_.contains(result,value)){
result.push(value);
}
}
return result;
};

// Produce an array that contains the union: each distinct element from all of
// the passed-in arrays.
_.union=restArguments(function(arrays){
return _.uniq(flatten(arrays,true,true));
});

// Produce an array that contains every item shared between all the
// passed-in arrays.
_.intersection=function(array){
var result=[];
var argsLength=arguments.length;
for(var i=0,length=getLength(array);i<length;i++){
var item=array[i];
if(_.contains(result,item))continue;
var j;
for(j=1;j<argsLength;j++){
if(!_.contains(arguments[j],item))break;
}
if(j===argsLength)result.push(item);
}
return result;
};

// Take the difference between one array and a number of other arrays.
// Only the elements present in just the first array will remain.
_.difference=restArguments(function(array,rest){
rest=flatten(rest,true,true);
return _.filter(array,function(value){
return!_.contains(rest,value);
});
});

// Complement of _.zip. Unzip accepts an array of arrays and groups
// each array's elements on shared indices.
_.unzip=function(array){
var length=array&&_.max(array,getLength).length||0;
var result=Array(length);

for(var index=0;index<length;index++){
result[index]=_.pluck(array,index);
}
return result;
};

// Zip together multiple lists into a single array -- elements that share
// an index go together.
_.zip=restArguments(_.unzip);

// Converts lists into objects. Pass either a single array of `[key, value]`
// pairs, or two parallel arrays of the same length -- one of keys, and one of
// the corresponding values. Passing by pairs is the reverse of _.pairs.
_.object=function(list,values){
var result={};
for(var i=0,length=getLength(list);i<length;i++){
if(values){
result[list[i]]=values[i];
}else{
result[list[i][0]]=list[i][1];
}
}
return result;
};

// Generator function to create the findIndex and findLastIndex functions.
var createPredicateIndexFinder=function createPredicateIndexFinder(dir){
return function(array,predicate,context){
predicate=cb(predicate,context);
var length=getLength(array);
var index=dir>0?0:length-1;
for(;index>=0&&index<length;index+=dir){
if(predicate(array[index],index,array))return index;
}
return-1;
};
};

// Returns the first index on an array-like that passes a predicate test.
_.findIndex=createPredicateIndexFinder(1);
_.findLastIndex=createPredicateIndexFinder(-1);

// Use a comparator function to figure out the smallest index at which
// an object should be inserted so as to maintain order. Uses binary search.
_.sortedIndex=function(array,obj,iteratee,context){
iteratee=cb(iteratee,context,1);
var value=iteratee(obj);
var low=0,high=getLength(array);
while(low<high){
var mid=Math.floor((low+high)/2);
if(iteratee(array[mid])<value)low=mid+1;else high=mid;
}
return low;
};

// Generator function to create the indexOf and lastIndexOf functions.
var createIndexFinder=function createIndexFinder(dir,predicateFind,sortedIndex){
return function(array,item,idx){
var i=0,length=getLength(array);
if(typeof idx=='number'){
if(dir>0){
i=idx>=0?idx:Math.max(idx+length,i);
}else{
length=idx>=0?Math.min(idx+1,length):idx+length+1;
}
}else if(sortedIndex&&idx&&length){
idx=sortedIndex(array,item);
return array[idx]===item?idx:-1;
}
if(item!==item){
idx=predicateFind(slice.call(array,i,length),_.isNaN);
return idx>=0?idx+i:-1;
}
for(idx=dir>0?i:length-1;idx>=0&&idx<length;idx+=dir){
if(array[idx]===item)return idx;
}
return-1;
};
};

// Return the position of the first occurrence of an item in an array,
// or -1 if the item is not included in the array.
// If the array is large and already in sort order, pass `true`
// for **isSorted** to use binary search.
_.indexOf=createIndexFinder(1,_.findIndex,_.sortedIndex);
_.lastIndexOf=createIndexFinder(-1,_.findLastIndex);

// Generate an integer Array containing an arithmetic progression. A port of
// the native Python `range()` function. See
// [the Python documentation](http://docs.python.org/library/functions.html#range).
_.range=function(start,stop,step){
if(stop==null){
stop=start||0;
start=0;
}
if(!step){
step=stop<start?-1:1;
}

var length=Math.max(Math.ceil((stop-start)/step),0);
var range=Array(length);

for(var idx=0;idx<length;idx++,start+=step){
range[idx]=start;
}

return range;
};

// Chunk a single array into multiple arrays, each containing `count` or fewer
// items.
_.chunk=function(array,count){
if(count==null||count<1)return[];
var result=[];
var i=0,length=array.length;
while(i<length){
result.push(slice.call(array,i,i+=count));
}
return result;
};

// Function (ahem) Functions
// ------------------

// Determines whether to execute a function as a constructor
// or a normal function with the provided arguments.
var executeBound=function executeBound(sourceFunc,boundFunc,context,callingContext,args){
if(!(callingContext instanceof boundFunc))return sourceFunc.apply(context,args);
var self=baseCreate(sourceFunc.prototype);
var result=sourceFunc.apply(self,args);
if(_.isObject(result))return result;
return self;
};

// Create a function bound to a given object (assigning `this`, and arguments,
// optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
// available.
_.bind=restArguments(function(func,context,args){
if(!_.isFunction(func))throw new TypeError('Bind must be called on a function');
var bound=restArguments(function(callArgs){
return executeBound(func,bound,context,this,args.concat(callArgs));
});
return bound;
});

// Partially apply a function by creating a version that has had some of its
// arguments pre-filled, without changing its dynamic `this` context. _ acts
// as a placeholder by default, allowing any combination of arguments to be
// pre-filled. Set `_.partial.placeholder` for a custom placeholder argument.
_.partial=restArguments(function(func,boundArgs){
var placeholder=_.partial.placeholder;
var bound=function bound(){
var position=0,length=boundArgs.length;
var args=Array(length);
for(var i=0;i<length;i++){
args[i]=boundArgs[i]===placeholder?arguments[position++]:boundArgs[i];
}
while(position<arguments.length){args.push(arguments[position++]);}
return executeBound(func,bound,this,this,args);
};
return bound;
});

_.partial.placeholder=_;

// Bind a number of an object's methods to that object. Remaining arguments
// are the method names to be bound. Useful for ensuring that all callbacks
// defined on an object belong to it.
_.bindAll=restArguments(function(obj,keys){
keys=flatten(keys,false,false);
var index=keys.length;
if(index<1)throw new Error('bindAll must be passed function names');
while(index--){
var key=keys[index];
obj[key]=_.bind(obj[key],obj);
}
});

// Memoize an expensive function by storing its results.
_.memoize=function(func,hasher){
var memoize=function memoize(key){
var cache=memoize.cache;
var address=''+(hasher?hasher.apply(this,arguments):key);
if(!has(cache,address))cache[address]=func.apply(this,arguments);
return cache[address];
};
memoize.cache={};
return memoize;
};

// Delays a function for the given number of milliseconds, and then calls
// it with the arguments supplied.
_.delay=restArguments(function(func,wait,args){
return setTimeout(function(){
return func.apply(null,args);
},wait);
});

// Defers a function, scheduling it to run after the current call stack has
// cleared.
_.defer=_.partial(_.delay,_,1);

// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
_.throttle=function(func,wait,options){
var timeout,context,args,result;
var previous=0;
if(!options)options={};

var later=function later(){
previous=options.leading===false?0:_.now();
timeout=null;
result=func.apply(context,args);
if(!timeout)context=args=null;
};

var throttled=function throttled(){
var now=_.now();
if(!previous&&options.leading===false)previous=now;
var remaining=wait-(now-previous);
context=this;
args=arguments;
if(remaining<=0||remaining>wait){
if(timeout){
clearTimeout(timeout);
timeout=null;
}
previous=now;
result=func.apply(context,args);
if(!timeout)context=args=null;
}else if(!timeout&&options.trailing!==false){
timeout=setTimeout(later,remaining);
}
return result;
};

throttled.cancel=function(){
clearTimeout(timeout);
previous=0;
timeout=context=args=null;
};

return throttled;
};

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
_.debounce=function(func,wait,immediate){
var timeout,result;

var later=function later(context,args){
timeout=null;
if(args)result=func.apply(context,args);
};

var debounced=restArguments(function(args){
if(timeout)clearTimeout(timeout);
if(immediate){
var callNow=!timeout;
timeout=setTimeout(later,wait);
if(callNow)result=func.apply(this,args);
}else{
timeout=_.delay(later,wait,this,args);
}

return result;
});

debounced.cancel=function(){
clearTimeout(timeout);
timeout=null;
};

return debounced;
};

// Returns the first function passed as an argument to the second,
// allowing you to adjust arguments, run code before and after, and
// conditionally execute the original function.
_.wrap=function(func,wrapper){
return _.partial(wrapper,func);
};

// Returns a negated version of the passed-in predicate.
_.negate=function(predicate){
return function(){
return!predicate.apply(this,arguments);
};
};

// Returns a function that is the composition of a list of functions, each
// consuming the return value of the function that follows.
_.compose=function(){
var args=arguments;
var start=args.length-1;
return function(){
var i=start;
var result=args[start].apply(this,arguments);
while(i--){result=args[i].call(this,result);}
return result;
};
};

// Returns a function that will only be executed on and after the Nth call.
_.after=function(times,func){
return function(){
if(--times<1){
return func.apply(this,arguments);
}
};
};

// Returns a function that will only be executed up to (but not including) the Nth call.
_.before=function(times,func){
var memo;
return function(){
if(--times>0){
memo=func.apply(this,arguments);
}
if(times<=1)func=null;
return memo;
};
};

// Returns a function that will be executed at most one time, no matter how
// often you call it. Useful for lazy initialization.
_.once=_.partial(_.before,2);

_.restArguments=restArguments;

// Object Functions
// ----------------

// Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
var hasEnumBug=!{toString:null}.propertyIsEnumerable('toString');
var nonEnumerableProps=['valueOf','isPrototypeOf','toString',
'propertyIsEnumerable','hasOwnProperty','toLocaleString'];

var collectNonEnumProps=function collectNonEnumProps(obj,keys){
var nonEnumIdx=nonEnumerableProps.length;
var constructor=obj.constructor;
var proto=_.isFunction(constructor)&&constructor.prototype||ObjProto;

// Constructor is a special case.
var prop='constructor';
if(has(obj,prop)&&!_.contains(keys,prop))keys.push(prop);

while(nonEnumIdx--){
prop=nonEnumerableProps[nonEnumIdx];
if(prop in obj&&obj[prop]!==proto[prop]&&!_.contains(keys,prop)){
keys.push(prop);
}
}
};

// Retrieve the names of an object's own properties.
// Delegates to **ECMAScript 5**'s native `Object.keys`.
_.keys=function(obj){
if(!_.isObject(obj))return[];
if(nativeKeys)return nativeKeys(obj);
var keys=[];
for(var key in obj){if(has(obj,key))keys.push(key);}
// Ahem, IE < 9.
if(hasEnumBug)collectNonEnumProps(obj,keys);
return keys;
};

// Retrieve all the property names of an object.
_.allKeys=function(obj){
if(!_.isObject(obj))return[];
var keys=[];
for(var key in obj){keys.push(key);}
// Ahem, IE < 9.
if(hasEnumBug)collectNonEnumProps(obj,keys);
return keys;
};

// Retrieve the values of an object's properties.
_.values=function(obj){
var keys=_.keys(obj);
var length=keys.length;
var values=Array(length);
for(var i=0;i<length;i++){
values[i]=obj[keys[i]];
}
return values;
};

// Returns the results of applying the iteratee to each element of the object.
// In contrast to _.map it returns an object.
_.mapObject=function(obj,iteratee,context){
iteratee=cb(iteratee,context);
var keys=_.keys(obj),
length=keys.length,
results={};
for(var index=0;index<length;index++){
var currentKey=keys[index];
results[currentKey]=iteratee(obj[currentKey],currentKey,obj);
}
return results;
};

// Convert an object into a list of `[key, value]` pairs.
// The opposite of _.object.
_.pairs=function(obj){
var keys=_.keys(obj);
var length=keys.length;
var pairs=Array(length);
for(var i=0;i<length;i++){
pairs[i]=[keys[i],obj[keys[i]]];
}
return pairs;
};

// Invert the keys and values of an object. The values must be serializable.
_.invert=function(obj){
var result={};
var keys=_.keys(obj);
for(var i=0,length=keys.length;i<length;i++){
result[obj[keys[i]]]=keys[i];
}
return result;
};

// Return a sorted list of the function names available on the object.
// Aliased as `methods`.
_.functions=_.methods=function(obj){
var names=[];
for(var key in obj){
if(_.isFunction(obj[key]))names.push(key);
}
return names.sort();
};

// An internal function for creating assigner functions.
var createAssigner=function createAssigner(keysFunc,defaults){
return function(obj){
var length=arguments.length;
if(defaults)obj=Object(obj);
if(length<2||obj==null)return obj;
for(var index=1;index<length;index++){
var source=arguments[index],
keys=keysFunc(source),
l=keys.length;
for(var i=0;i<l;i++){
var key=keys[i];
if(!defaults||obj[key]===void 0)obj[key]=source[key];
}
}
return obj;
};
};

// Extend a given object with all the properties in passed-in object(s).
_.extend=createAssigner(_.allKeys);

// Assigns a given object with all the own properties in the passed-in object(s).
// (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
_.extendOwn=_.assign=createAssigner(_.keys);

// Returns the first key on an object that passes a predicate test.
_.findKey=function(obj,predicate,context){
predicate=cb(predicate,context);
var keys=_.keys(obj),key;
for(var i=0,length=keys.length;i<length;i++){
key=keys[i];
if(predicate(obj[key],key,obj))return key;
}
};

// Internal pick helper function to determine if `obj` has key `key`.
var keyInObj=function keyInObj(value,key,obj){
return key in obj;
};

// Return a copy of the object only containing the whitelisted properties.
_.pick=restArguments(function(obj,keys){
var result={},iteratee=keys[0];
if(obj==null)return result;
if(_.isFunction(iteratee)){
if(keys.length>1)iteratee=optimizeCb(iteratee,keys[1]);
keys=_.allKeys(obj);
}else{
iteratee=keyInObj;
keys=flatten(keys,false,false);
obj=Object(obj);
}
for(var i=0,length=keys.length;i<length;i++){
var key=keys[i];
var value=obj[key];
if(iteratee(value,key,obj))result[key]=value;
}
return result;
});

// Return a copy of the object without the blacklisted properties.
_.omit=restArguments(function(obj,keys){
var iteratee=keys[0],context;
if(_.isFunction(iteratee)){
iteratee=_.negate(iteratee);
if(keys.length>1)context=keys[1];
}else{
keys=_.map(flatten(keys,false,false),String);
iteratee=function iteratee(value,key){
return!_.contains(keys,key);
};
}
return _.pick(obj,iteratee,context);
});

// Fill in a given object with default properties.
_.defaults=createAssigner(_.allKeys,true);

// Creates an object that inherits from the given prototype object.
// If additional properties are provided then they will be added to the
// created object.
_.create=function(prototype,props){
var result=baseCreate(prototype);
if(props)_.extendOwn(result,props);
return result;
};

// Create a (shallow-cloned) duplicate of an object.
_.clone=function(obj){
if(!_.isObject(obj))return obj;
return _.isArray(obj)?obj.slice():_.extend({},obj);
};

// Invokes interceptor with the obj, and then returns obj.
// The primary purpose of this method is to "tap into" a method chain, in
// order to perform operations on intermediate results within the chain.
_.tap=function(obj,interceptor){
interceptor(obj);
return obj;
};

// Returns whether an object has a given set of `key:value` pairs.
_.isMatch=function(object,attrs){
var keys=_.keys(attrs),length=keys.length;
if(object==null)return!length;
var obj=Object(object);
for(var i=0;i<length;i++){
var key=keys[i];
if(attrs[key]!==obj[key]||!(key in obj))return false;
}
return true;
};


// Internal recursive comparison function for `isEqual`.
var eq,deepEq;
eq=function eq(a,b,aStack,bStack){
// Identical objects are equal. `0 === -0`, but they aren't identical.
// See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
if(a===b)return a!==0||1/a===1/b;
// `null` or `undefined` only equal to itself (strict comparison).
if(a==null||b==null)return false;
// `NaN`s are equivalent, but non-reflexive.
if(a!==a)return b!==b;
// Exhaust primitive checks
var type=typeof a;
if(type!=='function'&&type!=='object'&&typeof b!='object')return false;
return deepEq(a,b,aStack,bStack);
};

// Internal recursive comparison function for `isEqual`.
deepEq=function deepEq(a,b,aStack,bStack){
// Unwrap any wrapped objects.
if(a instanceof _)a=a._wrapped;
if(b instanceof _)b=b._wrapped;
// Compare `[[Class]]` names.
var className=toString.call(a);
if(className!==toString.call(b))return false;
switch(className){
// Strings, numbers, regular expressions, dates, and booleans are compared by value.
case'[object RegExp]':
// RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
case'[object String]':
// Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
// equivalent to `new String("5")`.
return''+a===''+b;
case'[object Number]':
// `NaN`s are equivalent, but non-reflexive.
// Object(NaN) is equivalent to NaN.
if(+a!==+a)return+b!==+b;
// An `egal` comparison is performed for other numeric values.
return+a===0?1/+a===1/b:+a===+b;
case'[object Date]':
case'[object Boolean]':
// Coerce dates and booleans to numeric primitive values. Dates are compared by their
// millisecond representations. Note that invalid dates with millisecond representations
// of `NaN` are not equivalent.
return+a===+b;
case'[object Symbol]':
return SymbolProto.valueOf.call(a)===SymbolProto.valueOf.call(b);}


var areArrays=className==='[object Array]';
if(!areArrays){
if(typeof a!='object'||typeof b!='object')return false;

// Objects with different constructors are not equivalent, but `Object`s or `Array`s
// from different frames are.
var aCtor=a.constructor,bCtor=b.constructor;
if(aCtor!==bCtor&&!(_.isFunction(aCtor)&&aCtor instanceof aCtor&&
_.isFunction(bCtor)&&bCtor instanceof bCtor)&&
'constructor'in a&&'constructor'in b){
return false;
}
}
// Assume equality for cyclic structures. The algorithm for detecting cyclic
// structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

// Initializing stack of traversed objects.
// It's done here since we only need them for objects and arrays comparison.
aStack=aStack||[];
bStack=bStack||[];
var length=aStack.length;
while(length--){
// Linear search. Performance is inversely proportional to the number of
// unique nested structures.
if(aStack[length]===a)return bStack[length]===b;
}

// Add the first object to the stack of traversed objects.
aStack.push(a);
bStack.push(b);

// Recursively compare objects and arrays.
if(areArrays){
// Compare array lengths to determine if a deep comparison is necessary.
length=a.length;
if(length!==b.length)return false;
// Deep compare the contents, ignoring non-numeric properties.
while(length--){
if(!eq(a[length],b[length],aStack,bStack))return false;
}
}else{
// Deep compare objects.
var keys=_.keys(a),key;
length=keys.length;
// Ensure that both objects contain the same number of properties before comparing deep equality.
if(_.keys(b).length!==length)return false;
while(length--){
// Deep compare each member
key=keys[length];
if(!(has(b,key)&&eq(a[key],b[key],aStack,bStack)))return false;
}
}
// Remove the first object from the stack of traversed objects.
aStack.pop();
bStack.pop();
return true;
};

// Perform a deep comparison to check if two objects are equal.
_.isEqual=function(a,b){
return eq(a,b);
};

// Is a given array, string, or object empty?
// An "empty" object has no enumerable own-properties.
_.isEmpty=function(obj){
if(obj==null)return true;
if(isArrayLike(obj)&&(_.isArray(obj)||_.isString(obj)||_.isArguments(obj)))return obj.length===0;
return _.keys(obj).length===0;
};

// Is a given value a DOM element?
_.isElement=function(obj){
return!!(obj&&obj.nodeType===1);
};

// Is a given value an array?
// Delegates to ECMA5's native Array.isArray
_.isArray=nativeIsArray||function(obj){
return toString.call(obj)==='[object Array]';
};

// Is a given variable an object?
_.isObject=function(obj){
var type=typeof obj;
return type==='function'||type==='object'&&!!obj;
};

// Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError, isMap, isWeakMap, isSet, isWeakSet.
_.each(['Arguments','Function','String','Number','Date','RegExp','Error','Symbol','Map','WeakMap','Set','WeakSet'],function(name){
_['is'+name]=function(obj){
return toString.call(obj)==='[object '+name+']';
};
});

// Define a fallback version of the method in browsers (ahem, IE < 9), where
// there isn't any inspectable "Arguments" type.
if(!_.isArguments(arguments)){
_.isArguments=function(obj){
return has(obj,'callee');
};
}

// Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
// IE 11 (#1621), Safari 8 (#1929), and PhantomJS (#2236).
var nodelist=root.document&&root.document.childNodes;
if( true&&typeof Int8Array!='object'&&typeof nodelist!='function'){
_.isFunction=function(obj){
return typeof obj=='function'||false;
};
}

// Is a given object a finite number?
_.isFinite=function(obj){
return!_.isSymbol(obj)&&isFinite(obj)&&!isNaN(parseFloat(obj));
};

// Is the given value `NaN`?
_.isNaN=function(obj){
return _.isNumber(obj)&&isNaN(obj);
};

// Is a given value a boolean?
_.isBoolean=function(obj){
return obj===true||obj===false||toString.call(obj)==='[object Boolean]';
};

// Is a given value equal to null?
_.isNull=function(obj){
return obj===null;
};

// Is a given variable undefined?
_.isUndefined=function(obj){
return obj===void 0;
};

// Shortcut function for checking if an object has a given property directly
// on itself (in other words, not on a prototype).
_.has=function(obj,path){
if(!_.isArray(path)){
return has(obj,path);
}
var length=path.length;
for(var i=0;i<length;i++){
var key=path[i];
if(obj==null||!hasOwnProperty.call(obj,key)){
return false;
}
obj=obj[key];
}
return!!length;
};

// Utility Functions
// -----------------

// Run Underscore.js in *noConflict* mode, returning the `_` variable to its
// previous owner. Returns a reference to the Underscore object.
_.noConflict=function(){
root._=previousUnderscore;
return this;
};

// Keep the identity function around for default iteratees.
_.identity=function(value){
return value;
};

// Predicate-generating functions. Often useful outside of Underscore.
_.constant=function(value){
return function(){
return value;
};
};

_.noop=function(){};

// Creates a function that, when passed an object, will traverse that object’s
// properties down the given `path`, specified as an array of keys or indexes.
_.property=function(path){
if(!_.isArray(path)){
return shallowProperty(path);
}
return function(obj){
return deepGet(obj,path);
};
};

// Generates a function for a given object that returns a given property.
_.propertyOf=function(obj){
if(obj==null){
return function(){};
}
return function(path){
return!_.isArray(path)?obj[path]:deepGet(obj,path);
};
};

// Returns a predicate for checking whether an object has a given set of
// `key:value` pairs.
_.matcher=_.matches=function(attrs){
attrs=_.extendOwn({},attrs);
return function(obj){
return _.isMatch(obj,attrs);
};
};

// Run a function **n** times.
_.times=function(n,iteratee,context){
var accum=Array(Math.max(0,n));
iteratee=optimizeCb(iteratee,context,1);
for(var i=0;i<n;i++){accum[i]=iteratee(i);}
return accum;
};

// Return a random integer between min and max (inclusive).
_.random=function(min,max){
if(max==null){
max=min;
min=0;
}
return min+Math.floor(Math.random()*(max-min+1));
};

// A (possibly faster) way to get the current timestamp as an integer.
_.now=Date.now||function(){
return new Date().getTime();
};

// List of HTML entities for escaping.
var escapeMap={
'&':'&amp;',
'<':'&lt;',
'>':'&gt;',
'"':'&quot;',
"'":'&#x27;',
'`':'&#x60;'};

var unescapeMap=_.invert(escapeMap);

// Functions for escaping and unescaping strings to/from HTML interpolation.
var createEscaper=function createEscaper(map){
var escaper=function escaper(match){
return map[match];
};
// Regexes for identifying a key that needs to be escaped.
var source='(?:'+_.keys(map).join('|')+')';
var testRegexp=RegExp(source);
var replaceRegexp=RegExp(source,'g');
return function(string){
string=string==null?'':''+string;
return testRegexp.test(string)?string.replace(replaceRegexp,escaper):string;
};
};
_.escape=createEscaper(escapeMap);
_.unescape=createEscaper(unescapeMap);

// Traverses the children of `obj` along `path`. If a child is a function, it
// is invoked with its parent as context. Returns the value of the final
// child, or `fallback` if any child is undefined.
_.result=function(obj,path,fallback){
if(!_.isArray(path))path=[path];
var length=path.length;
if(!length){
return _.isFunction(fallback)?fallback.call(obj):fallback;
}
for(var i=0;i<length;i++){
var prop=obj==null?void 0:obj[path[i]];
if(prop===void 0){
prop=fallback;
i=length;// Ensure we don't continue iterating.
}
obj=_.isFunction(prop)?prop.call(obj):prop;
}
return obj;
};

// Generate a unique integer id (unique within the entire client session).
// Useful for temporary DOM ids.
var idCounter=0;
_.uniqueId=function(prefix){
var id=++idCounter+'';
return prefix?prefix+id:id;
};

// By default, Underscore uses ERB-style template delimiters, change the
// following template settings to use alternative delimiters.
_.templateSettings={
evaluate:/<%([\s\S]+?)%>/g,
interpolate:/<%=([\s\S]+?)%>/g,
escape:/<%-([\s\S]+?)%>/g};


// When customizing `templateSettings`, if you don't want to define an
// interpolation, evaluation or escaping regex, we need one that is
// guaranteed not to match.
var noMatch=/(.)^/;

// Certain characters need to be escaped so that they can be put into a
// string literal.
var escapes={
"'":"'",
'\\':'\\',
'\r':'r',
'\n':'n',
"\u2028":'u2028',
"\u2029":'u2029'};


var escapeRegExp=/\\|'|\r|\n|\u2028|\u2029/g;

var escapeChar=function escapeChar(match){
return'\\'+escapes[match];
};

// JavaScript micro-templating, similar to John Resig's implementation.
// Underscore templating handles arbitrary delimiters, preserves whitespace,
// and correctly escapes quotes within interpolated code.
// NB: `oldSettings` only exists for backwards compatibility.
_.template=function(text,settings,oldSettings){
if(!settings&&oldSettings)settings=oldSettings;
settings=_.defaults({},settings,_.templateSettings);

// Combine delimiters into one regular expression via alternation.
var matcher=RegExp([
(settings.escape||noMatch).source,
(settings.interpolate||noMatch).source,
(settings.evaluate||noMatch).source].
join('|')+'|$','g');

// Compile the template source, escaping string literals appropriately.
var index=0;
var source="__p+='";
text.replace(matcher,function(match,escape,interpolate,evaluate,offset){
source+=text.slice(index,offset).replace(escapeRegExp,escapeChar);
index=offset+match.length;

if(escape){
source+="'+\n((__t=("+escape+"))==null?'':_.escape(__t))+\n'";
}else if(interpolate){
source+="'+\n((__t=("+interpolate+"))==null?'':__t)+\n'";
}else if(evaluate){
source+="';\n"+evaluate+"\n__p+='";
}

// Adobe VMs need the match returned to produce the correct offset.
return match;
});
source+="';\n";

// If a variable is not specified, place data values in local scope.
if(!settings.variable)source='with(obj||{}){\n'+source+'}\n';

source="var __t,__p='',__j=Array.prototype.join,"+
"print=function(){__p+=__j.call(arguments,'');};\n"+
source+'return __p;\n';

var render;
try{
render=new Function(settings.variable||'obj','_',source);
}catch(e){
e.source=source;
throw e;
}

var template=function template(data){
return render.call(this,data,_);
};

// Provide the compiled source as a convenience for precompilation.
var argument=settings.variable||'obj';
template.source='function('+argument+'){\n'+source+'}';

return template;
};

// Add a "chain" function. Start chaining a wrapped Underscore object.
_.chain=function(obj){
var instance=_(obj);
instance._chain=true;
return instance;
};

// OOP
// ---------------
// If Underscore is called as a function, it returns a wrapped object that
// can be used OO-style. This wrapper holds altered versions of all the
// underscore functions. Wrapped objects may be chained.

// Helper function to continue chaining intermediate results.
var chainResult=function chainResult(instance,obj){
return instance._chain?_(obj).chain():obj;
};

// Add your own custom functions to the Underscore object.
_.mixin=function(obj){
_.each(_.functions(obj),function(name){
var func=_[name]=obj[name];
_.prototype[name]=function(){
var args=[this._wrapped];
push.apply(args,arguments);
return chainResult(this,func.apply(_,args));
};
});
return _;
};

// Add all of the Underscore functions to the wrapper object.
_.mixin(_);

// Add all mutator Array functions to the wrapper.
_.each(['pop','push','reverse','shift','sort','splice','unshift'],function(name){
var method=ArrayProto[name];
_.prototype[name]=function(){
var obj=this._wrapped;
method.apply(obj,arguments);
if((name==='shift'||name==='splice')&&obj.length===0)delete obj[0];
return chainResult(this,obj);
};
});

// Add all accessor Array functions to the wrapper.
_.each(['concat','join','slice'],function(name){
var method=ArrayProto[name];
_.prototype[name]=function(){
return chainResult(this,method.apply(this._wrapped,arguments));
};
});

// Extracts the result from a wrapped and chained object.
_.prototype.value=function(){
return this._wrapped;
};

// Provide unwrapping proxy for some methods used in engine operations
// such as arithmetic and JSON stringification.
_.prototype.valueOf=_.prototype.toJSON=_.prototype.value;

_.prototype.toString=function(){
return String(this._wrapped);
};

// AMD registration happens at the end for compatibility with AMD loaders
// that may not enforce next-turn semantics on modules. Even though general
// practice for AMD registration is to be anonymous, underscore registers
// as a named module because, like jQuery, it is a base library that is
// popular enough to be bundled in a third party lib, but not be part of
// an AMD load request. Those cases could generate an error when an
// anonymous define() is called outside of a loader request.
if(true){
!(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){
return _;
}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),
__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));
}
})();

/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(6),__webpack_require__(30)(module));

/***/},
/* 1 */
/***/function(module,exports,__webpack_require__){

"use strict";


var Promise=__webpack_require__(42).Promise;

Promise._continueWhile=function(predicate,asyncFunction){
if(predicate()){
return asyncFunction().then(function(){
return Promise._continueWhile(predicate,asyncFunction);
});
}
return Promise.resolve();
};

module.exports=Promise;

/***/},
/* 2 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _=__webpack_require__(0);
var md5=__webpack_require__(57);

var _require=__webpack_require__(0),
extend=_require.extend;

var Promise=__webpack_require__(1);
var AV=__webpack_require__(5);

var _require2=__webpack_require__(3),
getSessionToken=_require2.getSessionToken,
ajax=_require2.ajax;

// 计算 X-LC-Sign 的签名方法


var sign=function sign(key,isMasterKey){
var now=new Date().getTime();
var signature=md5(now+key);
if(isMasterKey){
return signature+','+now+',master';
}
return signature+','+now;
};

var setAppKey=function setAppKey(headers,signKey){
if(signKey){
headers['X-LC-Sign']=sign(AV.applicationKey);
}else{
headers['X-LC-Key']=AV.applicationKey;
}
};

var setHeaders=function setHeaders(){
var authOptions=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};
var signKey=arguments[1];

var headers={
'X-LC-Id':AV.applicationId,
'Content-Type':'application/json;charset=UTF-8'};

var useMasterKey=false;
if(typeof authOptions.useMasterKey==='boolean'){
useMasterKey=authOptions.useMasterKey;
}else if(typeof AV._config.useMasterKey==='boolean'){
useMasterKey=AV._config.useMasterKey;
}
if(useMasterKey){
if(AV.masterKey){
if(signKey){
headers['X-LC-Sign']=sign(AV.masterKey,true);
}else{
headers['X-LC-Key']=AV.masterKey+',master';
}
}else{
console.warn('masterKey is not set, fall back to use appKey');
setAppKey(headers,signKey);
}
}else{
setAppKey(headers,signKey);
}
if(AV.hookKey){
headers['X-LC-Hook-Key']=AV.hookKey;
}
if(AV._config.production!==null){
headers['X-LC-Prod']=String(AV._config.production);
}
headers[false?undefined:'X-LC-UA']=AV._sharedConfig.userAgent;

return Promise.resolve().then(function(){
// Pass the session token
var sessionToken=getSessionToken(authOptions);
if(sessionToken){
headers['X-LC-Session']=sessionToken;
}else if(!AV._config.disableCurrentUser){
return AV.User.currentAsync().then(function(currentUser){
if(currentUser&&currentUser._sessionToken){
headers['X-LC-Session']=currentUser._sessionToken;
}
return headers;
});
}
return headers;
});
};

var createApiUrl=function createApiUrl(_ref){
var _ref$service=_ref.service,
service=_ref$service===undefined?'api':_ref$service,
_ref$version=_ref.version,
version=_ref$version===undefined?'1.1':_ref$version,
path=_ref.path;

var apiURL=AV._config.serverURLs[service];

if(!apiURL)throw new Error('undefined server URL for '+service);

if(apiURL.charAt(apiURL.length-1)!=='/'){
apiURL+='/';
}
apiURL+=version;
if(path){
apiURL+=path;
}

return apiURL;
};

/**
 * Low level REST API client. Call REST endpoints with authorization headers.
 * @function AV.request
 * @since 3.0.0
 * @param {Object} options
 * @param {String} options.method HTTP method
 * @param {String} options.path endpoint path, e.g. `/classes/Test/55759577e4b029ae6015ac20`
 * @param {Object} [options.query] query string dict
 * @param {Object} [options.data] HTTP body
 * @param {AuthOptions} [options.authOptions]
 * @param {String} [options.service = 'api']
 * @param {String} [options.version = '1.1']
 */
var request=function request(_ref2){
var service=_ref2.service,
version=_ref2.version,
method=_ref2.method,
path=_ref2.path,
query=_ref2.query,
data=_ref2.data,
authOptions=_ref2.authOptions,
_ref2$signKey=_ref2.signKey,
signKey=_ref2$signKey===undefined?true:_ref2$signKey;

if(!(AV.applicationId&&(AV.applicationKey||AV.masterKey))){
throw new Error('Not initialized');
}
AV._appRouter.refresh();
var timeout=AV._config.requestTimeout;

var url=createApiUrl({service:service,path:path,version:version});
return setHeaders(authOptions,signKey).then(function(headers){
return ajax({method:method,url:url,query:query,data:data,headers:headers,timeout:timeout}).catch(function(error){
var errorJSON={
code:error.code||-1,
error:error.message||error.responseText};

if(error.response&&error.response.code){
errorJSON=error.response;
}else if(error.responseText){
try{
errorJSON=JSON.parse(error.responseText);
}catch(e){
// If we fail to parse the error text, that's okay.
}
}
errorJSON.rawMessage=errorJSON.rawMessage||errorJSON.error;
if(!AV._sharedConfig.keepErrorRawMessage){
errorJSON.error+=' ['+(error.statusCode||'N/A')+' '+method+' '+url+']';
}
// Transform the error into an instance of AVError by trying to parse
// the error string as JSON.
var err=new Error(errorJSON.error);
delete errorJSON.error;
throw _.extend(err,errorJSON);
});
});
};

// lagecy request
var _request=function _request(route,className,objectId,method,data,authOptions,query){
var path='';
if(route)path+='/'+route;
if(className)path+='/'+className;
if(objectId)path+='/'+objectId;
// for migeration
if(data&&data._fetchWhenSave)throw new Error('_fetchWhenSave should be in the query');
if(data&&data._where)throw new Error('_where should be in the query');
if(method&&method.toLowerCase()==='get'){
query=extend({},query,data);
data=null;
}
return request({
method:method,
path:path,
query:query,
data:data,
authOptions:authOptions});

};

AV.request=request;

module.exports={
_request:_request,
request:request};


/***/},
/* 3 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};

var _=__webpack_require__(0);
var request=__webpack_require__(8);
var debug=__webpack_require__(7);
var debugRequest=debug('leancloud:request');
var debugRequestError=debug('leancloud:request:error');
var Promise=__webpack_require__(1);

var requestsCount=0;

var ajax=function ajax(_ref){
var method=_ref.method,
url=_ref.url,
query=_ref.query,
data=_ref.data,
_ref$headers=_ref.headers,
headers=_ref$headers===undefined?{}:_ref$headers,
onprogress=_ref.onprogress,
timeout=_ref.timeout;

var flattenedQuery={};
if(query){
for(var k in query){
var value=query[k];
if(value===undefined)continue;
if((typeof value==='undefined'?'undefined':_typeof(value))==='object'){
flattenedQuery[k]=JSON.stringify(value);
}else{
flattenedQuery[k]=value;
}
}
}

var count=requestsCount++;
debugRequest('request(%d) %s %s %o %o %o',count,method,url,flattenedQuery,data,headers);

return new Promise(function(resolve,reject){
var req=request(method,url).set(headers).query(flattenedQuery).send(data);
if(onprogress){
req.on('progress',onprogress);
}
if(timeout){
req.timeout(timeout);
}
req.end(function(err,res){
if(err){
if(res){
if(!debug.enabled('leancloud:request')){
debugRequestError('request(%d) %s %s %o %o %o',count,method,url,query,data,headers);
}
debugRequestError('response(%d) %d %O %o',count,res.status,res.body||res.text,res.header);
err.statusCode=res.status;
err.responseText=res.text;
err.response=res.body;
}
return reject(err);
}
debugRequest('response(%d) %d %O %o',count,res.status,res.body||res.text,res.header);
return resolve(res.body);
});
});
};

// Helper function to check null or undefined.
var isNullOrUndefined=function isNullOrUndefined(x){
return _.isNull(x)||_.isUndefined(x);
};

var ensureArray=function ensureArray(target){
if(_.isArray(target)){
return target;
}
if(target===undefined||target===null){
return[];
}
return[target];
};

var transformFetchOptions=function transformFetchOptions(){
var _ref2=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},
keys=_ref2.keys,
include=_ref2.include,
includeACL=_ref2.includeACL;

var fetchOptions={};
if(keys){
fetchOptions.keys=ensureArray(keys).join(',');
}
if(include){
fetchOptions.include=ensureArray(include).join(',');
}
if(includeACL){
fetchOptions.returnACL=includeACL;
}
return fetchOptions;
};

var getSessionToken=function getSessionToken(authOptions){
if(authOptions.sessionToken){
return authOptions.sessionToken;
}
if(authOptions.user&&typeof authOptions.user.getSessionToken==='function'){
return authOptions.user.getSessionToken();
}
};

var tap=function tap(interceptor){
return function(value){
return interceptor(value),value;
};
};

// Shared empty constructor function to aid in prototype-chain creation.
var EmptyConstructor=function EmptyConstructor(){};

// Helper function to correctly set up the prototype chain, for subclasses.
// Similar to `goog.inherits`, but uses a hash of prototype properties and
// class properties to be extended.
var inherits=function inherits(parent,protoProps,staticProps){
var child;

// The constructor function for the new subclass is either defined by you
// (the "constructor" property in your `extend` definition), or defaulted
// by us to simply call the parent's constructor.
if(protoProps&&protoProps.hasOwnProperty('constructor')){
child=protoProps.constructor;
}else{
/** @ignore */
child=function child(){
parent.apply(this,arguments);
};
}

// Inherit class (static) properties from parent.
_.extend(child,parent);

// Set the prototype chain to inherit from `parent`, without calling
// `parent`'s constructor function.
EmptyConstructor.prototype=parent.prototype;
child.prototype=new EmptyConstructor();

// Add prototype properties (instance properties) to the subclass,
// if supplied.
if(protoProps){
_.extend(child.prototype,protoProps);
}

// Add static properties to the constructor function, if supplied.
if(staticProps){
_.extend(child,staticProps);
}

// Correctly set child's `prototype.constructor`.
child.prototype.constructor=child;

// Set a convenience property in case the parent's prototype is
// needed later.
child.__super__=parent.prototype;

return child;
};

function parseDate(iso8601){
var regexp=new RegExp('^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})'+'T'+'([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})'+'(.([0-9]+))?'+'Z$');
var match=regexp.exec(iso8601);
if(!match){
return null;
}

var year=match[1]||0;
var month=(match[2]||1)-1;
var day=match[3]||0;
var hour=match[4]||0;
var minute=match[5]||0;
var second=match[6]||0;
var milli=match[8]||0;

return new Date(Date.UTC(year,month,day,hour,minute,second,milli));
}

var setValue=function setValue(target,key,value){
// '.' is not allowed in Class keys, escaping is not in concern now.
var segs=key.split('.');
var lastSeg=segs.pop();
var currentTarget=target;
segs.forEach(function(seg){
if(currentTarget[seg]===undefined)currentTarget[seg]={};
currentTarget=currentTarget[seg];
});
currentTarget[lastSeg]=value;
return target;
};

var findValue=function findValue(target,key){
var segs=key.split('.');
var firstSeg=segs[0];
var lastSeg=segs.pop();
var currentTarget=target;
for(var i=0;i<segs.length;i++){
currentTarget=currentTarget[segs[i]];
if(currentTarget===undefined){
return[undefined,undefined,lastSeg];
}
}
var value=currentTarget[lastSeg];
return[value,currentTarget,lastSeg,firstSeg];
};

var isPlainObject=function isPlainObject(obj){
return _.isObject(obj)&&Object.getPrototypeOf(obj)===Object.prototype;
};

module.exports={
ajax:ajax,
isNullOrUndefined:isNullOrUndefined,
ensureArray:ensureArray,
transformFetchOptions:transformFetchOptions,
getSessionToken:getSessionToken,
tap:tap,
inherits:inherits,
parseDate:parseDate,
setValue:setValue,
findValue:findValue,
isPlainObject:isPlainObject};


/***/},
/* 4 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _=__webpack_require__(0);

/**
 * @class AV.Error
 */

function AVError(code,message){
var error=new Error(message);
error.code=code;
return error;
}

_.extend(AVError,
/** @lends AV.Error */{
/**
   * Error code indicating some error other than those enumerated here.
   * @constant
   */
OTHER_CAUSE:-1,

/**
   * Error code indicating that something has gone wrong with the server.
   * If you get this error code, it is AV's fault. Contact us at
   * https://avoscloud.com/help
   * @constant
   */
INTERNAL_SERVER_ERROR:1,

/**
   * Error code indicating the connection to the AV servers failed.
   * @constant
   */
CONNECTION_FAILED:100,

/**
   * Error code indicating the specified object doesn't exist.
   * @constant
   */
OBJECT_NOT_FOUND:101,

/**
   * Error code indicating you tried to query with a datatype that doesn't
   * support it, like exact matching an array or object.
   * @constant
   */
INVALID_QUERY:102,

/**
   * Error code indicating a missing or invalid classname. Classnames are
   * case-sensitive. They must start with a letter, and a-zA-Z0-9_ are the
   * only valid characters.
   * @constant
   */
INVALID_CLASS_NAME:103,

/**
   * Error code indicating an unspecified object id.
   * @constant
   */
MISSING_OBJECT_ID:104,

/**
   * Error code indicating an invalid key name. Keys are case-sensitive. They
   * must start with a letter, and a-zA-Z0-9_ are the only valid characters.
   * @constant
   */
INVALID_KEY_NAME:105,

/**
   * Error code indicating a malformed pointer. You should not see this unless
   * you have been mucking about changing internal AV code.
   * @constant
   */
INVALID_POINTER:106,

/**
   * Error code indicating that badly formed JSON was received upstream. This
   * either indicates you have done something unusual with modifying how
   * things encode to JSON, or the network is failing badly.
   * @constant
   */
INVALID_JSON:107,

/**
   * Error code indicating that the feature you tried to access is only
   * available internally for testing purposes.
   * @constant
   */
COMMAND_UNAVAILABLE:108,

/**
   * You must call AV.initialize before using the AV library.
   * @constant
   */
NOT_INITIALIZED:109,

/**
   * Error code indicating that a field was set to an inconsistent type.
   * @constant
   */
INCORRECT_TYPE:111,

/**
   * Error code indicating an invalid channel name. A channel name is either
   * an empty string (the broadcast channel) or contains only a-zA-Z0-9_
   * characters.
   * @constant
   */
INVALID_CHANNEL_NAME:112,

/**
   * Error code indicating that push is misconfigured.
   * @constant
   */
PUSH_MISCONFIGURED:115,

/**
   * Error code indicating that the object is too large.
   * @constant
   */
OBJECT_TOO_LARGE:116,

/**
   * Error code indicating that the operation isn't allowed for clients.
   * @constant
   */
OPERATION_FORBIDDEN:119,

/**
   * Error code indicating the result was not found in the cache.
   * @constant
   */
CACHE_MISS:120,

/**
   * Error code indicating that an invalid key was used in a nested
   * JSONObject.
   * @constant
   */
INVALID_NESTED_KEY:121,

/**
   * Error code indicating that an invalid filename was used for AVFile.
   * A valid file name contains only a-zA-Z0-9_. characters and is between 1
   * and 128 characters.
   * @constant
   */
INVALID_FILE_NAME:122,

/**
   * Error code indicating an invalid ACL was provided.
   * @constant
   */
INVALID_ACL:123,

/**
   * Error code indicating that the request timed out on the server. Typically
   * this indicates that the request is too expensive to run.
   * @constant
   */
TIMEOUT:124,

/**
   * Error code indicating that the email address was invalid.
   * @constant
   */
INVALID_EMAIL_ADDRESS:125,

/**
   * Error code indicating a missing content type.
   * @constant
   */
MISSING_CONTENT_TYPE:126,

/**
   * Error code indicating a missing content length.
   * @constant
   */
MISSING_CONTENT_LENGTH:127,

/**
   * Error code indicating an invalid content length.
   * @constant
   */
INVALID_CONTENT_LENGTH:128,

/**
   * Error code indicating a file that was too large.
   * @constant
   */
FILE_TOO_LARGE:129,

/**
   * Error code indicating an error saving a file.
   * @constant
   */
FILE_SAVE_ERROR:130,

/**
   * Error code indicating an error deleting a file.
   * @constant
   */
FILE_DELETE_ERROR:153,

/**
   * Error code indicating that a unique field was given a value that is
   * already taken.
   * @constant
   */
DUPLICATE_VALUE:137,

/**
   * Error code indicating that a role's name is invalid.
   * @constant
   */
INVALID_ROLE_NAME:139,

/**
   * Error code indicating that an application quota was exceeded.  Upgrade to
   * resolve.
   * @constant
   */
EXCEEDED_QUOTA:140,

/**
   * Error code indicating that a Cloud Code script failed.
   * @constant
   */
SCRIPT_FAILED:141,

/**
   * Error code indicating that a Cloud Code validation failed.
   * @constant
   */
VALIDATION_ERROR:142,

/**
   * Error code indicating that invalid image data was provided.
   * @constant
   */
INVALID_IMAGE_DATA:150,

/**
   * Error code indicating an unsaved file.
   * @constant
   */
UNSAVED_FILE_ERROR:151,

/**
   * Error code indicating an invalid push time.
   */
INVALID_PUSH_TIME_ERROR:152,

/**
   * Error code indicating that the username is missing or empty.
   * @constant
   */
USERNAME_MISSING:200,

/**
   * Error code indicating that the password is missing or empty.
   * @constant
   */
PASSWORD_MISSING:201,

/**
   * Error code indicating that the username has already been taken.
   * @constant
   */
USERNAME_TAKEN:202,

/**
   * Error code indicating that the email has already been taken.
   * @constant
   */
EMAIL_TAKEN:203,

/**
   * Error code indicating that the email is missing, but must be specified.
   * @constant
   */
EMAIL_MISSING:204,

/**
   * Error code indicating that a user with the specified email was not found.
   * @constant
   */
EMAIL_NOT_FOUND:205,

/**
   * Error code indicating that a user object without a valid session could
   * not be altered.
   * @constant
   */
SESSION_MISSING:206,

/**
   * Error code indicating that a user can only be created through signup.
   * @constant
   */
MUST_CREATE_USER_THROUGH_SIGNUP:207,

/**
   * Error code indicating that an an account being linked is already linked
   * to another user.
   * @constant
   */
ACCOUNT_ALREADY_LINKED:208,

/**
   * Error code indicating that a user cannot be linked to an account because
   * that account's id could not be found.
   * @constant
   */
LINKED_ID_MISSING:250,

/**
   * Error code indicating that a user with a linked (e.g. Facebook) account
   * has an invalid session.
   * @constant
   */
INVALID_LINKED_SESSION:251,

/**
   * Error code indicating that a service being linked (e.g. Facebook or
   * Twitter) is unsupported.
   * @constant
   */
UNSUPPORTED_SERVICE:252,
/**
   * Error code indicating a real error code is unavailable because
   * we had to use an XDomainRequest object to allow CORS requests in
   * Internet Explorer, which strips the body from HTTP responses that have
   * a non-2XX status code.
   * @constant
   */
X_DOMAIN_REQUEST:602});


module.exports=AVError;

/***/},
/* 5 */
/***/function(module,exports,__webpack_require__){

"use strict";
/* WEBPACK VAR INJECTION */(function(global){

var _=__webpack_require__(0);
var uuid=__webpack_require__(17);
var userAgent=__webpack_require__(33);

var _require=__webpack_require__(3),
inherits=_require.inherits,
parseDate=_require.parseDate;

var Promise=__webpack_require__(1);

var AV=global.AV||{};

// All internal configuration items
AV._config={
serverURLs:{},
useMasterKey:false,
production:null,
realtime:null,
requestTimeout:null};


// configs shared by all AV instances
AV._sharedConfig={
userAgent:userAgent,
liveQueryRealtime:null};


/**
 * Contains all AV API classes and functions.
 * @namespace AV
 */

/**
 * Returns prefix for localStorage keys used by this instance of AV.
 * @param {String} path The relative suffix to append to it.
 *     null or undefined is treated as the empty string.
 * @return {String} The full key name.
 * @private
 */
AV._getAVPath=function(path){
if(!AV.applicationId){
throw new Error('You need to call AV.initialize before using AV.');
}
if(!path){
path='';
}
if(!_.isString(path)){
throw new Error("Tried to get a localStorage path that wasn't a String.");
}
if(path[0]==='/'){
path=path.substring(1);
}
return'AV/'+AV.applicationId+'/'+path;
};

/**
 * Returns the unique string for this app on this machine.
 * Gets reset when localStorage is cleared.
 * @private
 */
AV._installationId=null;
AV._getInstallationId=function(){
// See if it's cached in RAM.
if(AV._installationId){
return Promise.resolve(AV._installationId);
}

// Try to get it from localStorage.
var path=AV._getAVPath('installationId');
return AV.localStorage.getItemAsync(path).then(function(_installationId){
AV._installationId=_installationId;
if(!AV._installationId){
// It wasn't in localStorage, so create a new one.
AV._installationId=_installationId=uuid();
return AV.localStorage.setItemAsync(path,_installationId).then(function(){
return _installationId;
});
}
return _installationId;
});
};

AV._subscriptionId=null;
AV._refreshSubscriptionId=function(){
var path=arguments.length>0&&arguments[0]!==undefined?arguments[0]:AV._getAVPath('subscriptionId');

var subscriptionId=AV._subscriptionId=uuid();
return AV.localStorage.setItemAsync(path,subscriptionId).then(function(){
return subscriptionId;
});
};
AV._getSubscriptionId=function(){
// See if it's cached in RAM.
if(AV._subscriptionId){
return Promise.resolve(AV._subscriptionId);
}

// Try to get it from localStorage.
var path=AV._getAVPath('subscriptionId');
return AV.localStorage.getItemAsync(path).then(function(_subscriptionId){
AV._subscriptionId=_subscriptionId;
if(!AV._subscriptionId){
// It wasn't in localStorage, so create a new one.
_subscriptionId=AV._refreshSubscriptionId(path);
}
return _subscriptionId;
});
};

AV._parseDate=parseDate;

// A self-propagating extend function.
AV._extend=function(protoProps,classProps){
var child=inherits(this,protoProps,classProps);
child.extend=this.extend;
return child;
};

/**
 * Converts a value in a AV Object into the appropriate representation.
 * This is the JS equivalent of Java's AV.maybeReferenceAndEncode(Object)
 * if seenObjects is falsey. Otherwise any AV.Objects not in
 * seenObjects will be fully embedded rather than encoded
 * as a pointer.  This array will be used to prevent going into an infinite
 * loop because we have circular references.  If <seenObjects>
 * is set, then none of the AV Objects that are serialized can be dirty.
 * @private
 */
AV._encode=function(value,seenObjects,disallowObjects){
var full=arguments.length>3&&arguments[3]!==undefined?arguments[3]:true;

if(value instanceof AV.Object){
if(disallowObjects){
throw new Error('AV.Objects not allowed here');
}
if(!seenObjects||_.include(seenObjects,value)||!value._hasData){
return value._toPointer();
}
return value._toFullJSON(seenObjects.concat(value),full);
}
if(value instanceof AV.ACL){
return value.toJSON();
}
if(_.isDate(value)){
return full?{__type:'Date',iso:value.toJSON()}:value.toJSON();
}
if(value instanceof AV.GeoPoint){
return value.toJSON();
}
if(_.isArray(value)){
return _.map(value,function(x){
return AV._encode(x,seenObjects,disallowObjects,full);
});
}
if(_.isRegExp(value)){
return value.source;
}
if(value instanceof AV.Relation){
return value.toJSON();
}
if(value instanceof AV.Op){
return value.toJSON();
}
if(value instanceof AV.File){
if(!value.url()&&!value.id){
throw new Error('Tried to save an object containing an unsaved file.');
}
return value._toFullJSON(seenObjects,full);
}
if(_.isObject(value)){
return _.mapObject(value,function(v,k){
return AV._encode(v,seenObjects,disallowObjects,full);
});
}
return value;
};

/**
 * The inverse function of AV._encode.
 * @private
 */
AV._decode=function(value,key){
if(!_.isObject(value)||_.isDate(value)){
return value;
}
if(_.isArray(value)){
return _.map(value,function(v){
return AV._decode(v);
});
}
if(value instanceof AV.Object){
return value;
}
if(value instanceof AV.File){
return value;
}
if(value instanceof AV.Op){
return value;
}
if(value instanceof AV.GeoPoint){
return value;
}
if(value instanceof AV.ACL){
return value;
}
if(key==='ACL'){
return new AV.ACL(value);
}
if(value.__op){
return AV.Op._decode(value);
}
var className;
if(value.__type==='Pointer'){
className=value.className;
var pointer=AV.Object._create(className);
if(Object.keys(value).length>3){
var v=_.clone(value);
delete v.__type;
delete v.className;
pointer._finishFetch(v,true);
}else{
pointer._finishFetch({objectId:value.objectId},false);
}
return pointer;
}
if(value.__type==='Object'){
// It's an Object included in a query result.
className=value.className;
var _v=_.clone(value);
delete _v.__type;
delete _v.className;
var object=AV.Object._create(className);
object._finishFetch(_v,true);
return object;
}
if(value.__type==='Date'){
return AV._parseDate(value.iso);
}
if(value.__type==='GeoPoint'){
return new AV.GeoPoint({
latitude:value.latitude,
longitude:value.longitude});

}
if(value.__type==='Relation'){
if(!key)throw new Error('key missing decoding a Relation');
var relation=new AV.Relation(null,key);
relation.targetClassName=value.className;
return relation;
}
if(value.__type==='File'){
var file=new AV.File(value.name);
var _v2=_.clone(value);
delete _v2.__type;
file._finishFetch(_v2);
return file;
}
return _.mapObject(value,AV._decode);
};

/**
 * The inverse function of {@link AV.Object#toFullJSON}.
 * @since 2.0.0
 * @method
 * @param {Object}
 * return {AV.Object|AV.File|any}
 */
AV.parseJSON=AV._decode;

AV._encodeObjectOrArray=function(value){
var encodeAVObject=function encodeAVObject(object){
if(object&&object._toFullJSON){
object=object._toFullJSON([]);
}

return _.mapObject(object,function(value){
return AV._encode(value,[]);
});
};

if(_.isArray(value)){
return value.map(function(object){
return encodeAVObject(object);
});
}else{
return encodeAVObject(value);
}
};

AV._arrayEach=_.each;

/**
 * Does a deep traversal of every item in object, calling func on every one.
 * @param {Object} object The object or array to traverse deeply.
 * @param {Function} func The function to call for every item. It will
 *     be passed the item as an argument. If it returns a truthy value, that
 *     value will replace the item in its parent container.
 * @returns {} the result of calling func on the top-level object itself.
 * @private
 */
AV._traverse=function(object,func,seen){
if(object instanceof AV.Object){
seen=seen||[];
if(_.indexOf(seen,object)>=0){
// We've already visited this object in this call.
return;
}
seen.push(object);
AV._traverse(object.attributes,func,seen);
return func(object);
}
if(object instanceof AV.Relation||object instanceof AV.File){
// Nothing needs to be done, but we don't want to recurse into the
// object's parent infinitely, so we catch this case.
return func(object);
}
if(_.isArray(object)){
_.each(object,function(child,index){
var newChild=AV._traverse(child,func,seen);
if(newChild){
object[index]=newChild;
}
});
return func(object);
}
if(_.isObject(object)){
AV._each(object,function(child,key){
var newChild=AV._traverse(child,func,seen);
if(newChild){
object[key]=newChild;
}
});
return func(object);
}
return func(object);
};

/**
 * This is like _.each, except:
 * * it doesn't work for so-called array-like objects,
 * * it does work for dictionaries with a "length" attribute.
 * @private
 */
AV._objectEach=AV._each=function(obj,callback){
if(_.isObject(obj)){
_.each(_.keys(obj),function(key){
callback(obj[key],key);
});
}else{
_.each(obj,callback);
}
};

module.exports=AV;
/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(6));

/***/},
/* 6 */
/***/function(module,exports){

var g;

// This works in non-strict mode
g=function(){
return this;
}();

try{
// This works if eval is allowed (see CSP)
g=g||Function("return this")()||(1,eval)("this");
}catch(e){
// This works if the window reference is available
if(typeof window==="object")
g=window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports=g;


/***/},
/* 7 */
/***/function(module,exports,__webpack_require__){

"use strict";


function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */
exports.log=log;
exports.formatArgs=formatArgs;
exports.save=save;
exports.load=load;
exports.useColors=useColors;
exports.storage=localstorage();
/**
 * Colors.
 */

exports.colors=['#0000CC','#0000FF','#0033CC','#0033FF','#0066CC','#0066FF','#0099CC','#0099FF','#00CC00','#00CC33','#00CC66','#00CC99','#00CCCC','#00CCFF','#3300CC','#3300FF','#3333CC','#3333FF','#3366CC','#3366FF','#3399CC','#3399FF','#33CC00','#33CC33','#33CC66','#33CC99','#33CCCC','#33CCFF','#6600CC','#6600FF','#6633CC','#6633FF','#66CC00','#66CC33','#9900CC','#9900FF','#9933CC','#9933FF','#99CC00','#99CC33','#CC0000','#CC0033','#CC0066','#CC0099','#CC00CC','#CC00FF','#CC3300','#CC3333','#CC3366','#CC3399','#CC33CC','#CC33FF','#CC6600','#CC6633','#CC9900','#CC9933','#CCCC00','#CCCC33','#FF0000','#FF0033','#FF0066','#FF0099','#FF00CC','#FF00FF','#FF3300','#FF3333','#FF3366','#FF3399','#FF33CC','#FF33FF','#FF6600','#FF6633','#FF9900','#FF9933','#FFCC00','#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */
// eslint-disable-next-line complexity

function useColors(){
// NB: In an Electron preload script, document will be defined but not fully
// initialized. Since we know we're in Chrome, we'll just detect this case
// explicitly
if(typeof window!=='undefined'&&window.process&&(window.process.type==='renderer'||window.process.__nwjs)){
return true;
}// Internet Explorer and Edge do not support colors.


if(typeof navigator!=='undefined'&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)){
return false;
}// Is webkit? http://stackoverflow.com/a/16459606/376773
// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


return typeof document!=='undefined'&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||// Is firebug? http://stackoverflow.com/a/398120/376773
typeof window!=='undefined'&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||// Is firefox >= v31?
// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
typeof navigator!=='undefined'&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||// Double check webkit in userAgent just in case we are in a worker
typeof navigator!=='undefined'&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args){
args[0]=(this.useColors?'%c':'')+this.namespace+(this.useColors?' %c':' ')+args[0]+(this.useColors?'%c ':' ')+'+'+module.exports.humanize(this.diff);

if(!this.useColors){
return;
}

var c='color: '+this.color;
args.splice(1,0,c,'color: inherit');// The final "%c" is somewhat tricky, because there could be other
// arguments passed either before or after the %c, so we need to
// figure out the correct index to insert the CSS into

var index=0;
var lastC=0;
args[0].replace(/%[a-zA-Z%]/g,function(match){
if(match==='%%'){
return;
}

index++;

if(match==='%c'){
// We only are interested in the *last* %c
// (the user may have provided their own)
lastC=index;
}
});
args.splice(lastC,0,c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */


function log(){
var _console;

// This hackery is required for IE8/9, where
// the `console.log` function doesn't have 'apply'
return(typeof console==="undefined"?"undefined":_typeof(console))==='object'&&console.log&&(_console=console).log.apply(_console,arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces){
try{
if(namespaces){
exports.storage.setItem('debug',namespaces);
}else{
exports.storage.removeItem('debug');
}
}catch(error){// Swallow
// XXX (@Qix-) should we be logging these?
}
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load(){
var r;

try{
r=exports.storage.getItem('debug');
}catch(error){}// Swallow
// XXX (@Qix-) should we be logging these?
// If debug isn't set in LS, and we're in Electron, try to load $DEBUG


if(!r&&typeof process!=='undefined'&&'env'in process){
r=Object({"VUE_APP_PLATFORM":"mp-toutiao","NODE_ENV":"development","BASE_URL":"/"}).DEBUG;
}

return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */


function localstorage(){
try{
// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
// The Browser also has localStorage in the global context.
return localStorage;
}catch(error){// Swallow
// XXX (@Qix-) should we be logging these?
}
}

module.exports=__webpack_require__(40)(exports);
var formatters=module.exports.formatters;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j=function(v){
try{
return JSON.stringify(v);
}catch(error){
return'[UnexpectedJSONParseError]: '+error.message;
}
};



/***/},
/* 8 */
/***/function(module,exports,__webpack_require__){

/**
 * Root reference for iframes.
 */

var root;
if(typeof window!=='undefined'){// Browser window
root=window;
}else if(typeof self!=='undefined'){// Web Worker
root=self;
}else{// Other environments
console.warn("Using browser-only version of superagent in non-browser environment");
root=this;
}

var Emitter=__webpack_require__(35);
var RequestBase=__webpack_require__(36);
var isObject=__webpack_require__(19);
var ResponseBase=__webpack_require__(37);
var Agent=__webpack_require__(39);

/**
 * Noop.
 */

function noop(){};

/**
 * Expose `request`.
 */

var request=exports=module.exports=function(method,url){
// callback
if('function'==typeof url){
return new exports.Request('GET',method).end(url);
}

// url first
if(1==arguments.length){
return new exports.Request('GET',method);
}

return new exports.Request(method,url);
};

exports.Request=Request;

/**
 * Determine XHR.
 */

request.getXHR=function(){
if(root.XMLHttpRequest&&(
!root.location||'file:'!=root.location.protocol||
!root.ActiveXObject)){
return new XMLHttpRequest();
}else{
try{return new ActiveXObject('Microsoft.XMLHTTP');}catch(e){}
try{return new ActiveXObject('Msxml2.XMLHTTP.6.0');}catch(e){}
try{return new ActiveXObject('Msxml2.XMLHTTP.3.0');}catch(e){}
try{return new ActiveXObject('Msxml2.XMLHTTP');}catch(e){}
}
throw Error("Browser-only version of superagent could not find XHR");
};

/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */

var trim=''.trim?
function(s){return s.trim();}:
function(s){return s.replace(/(^\s*|\s*$)/g,'');};

/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj){
if(!isObject(obj))return obj;
var pairs=[];
for(var key in obj){
pushEncodedKeyValuePair(pairs,key,obj[key]);
}
return pairs.join('&');
}

/**
 * Helps 'serialize' with serializing arrays.
 * Mutates the pairs array.
 *
 * @param {Array} pairs
 * @param {String} key
 * @param {Mixed} val
 */

function pushEncodedKeyValuePair(pairs,key,val){
if(val!=null){
if(Array.isArray(val)){
val.forEach(function(v){
pushEncodedKeyValuePair(pairs,key,v);
});
}else if(isObject(val)){
for(var subkey in val){
pushEncodedKeyValuePair(pairs,key+'['+subkey+']',val[subkey]);
}
}else{
pairs.push(encodeURIComponent(key)+
'='+encodeURIComponent(val));
}
}else if(val===null){
pairs.push(encodeURIComponent(key));
}
}

/**
 * Expose serialization method.
 */

request.serializeObject=serialize;

/**
  * Parse the given x-www-form-urlencoded `str`.
  *
  * @param {String} str
  * @return {Object}
  * @api private
  */

function parseString(str){
var obj={};
var pairs=str.split('&');
var pair;
var pos;

for(var i=0,len=pairs.length;i<len;++i){
pair=pairs[i];
pos=pair.indexOf('=');
if(pos==-1){
obj[decodeURIComponent(pair)]='';
}else{
obj[decodeURIComponent(pair.slice(0,pos))]=
decodeURIComponent(pair.slice(pos+1));
}
}

return obj;
}

/**
 * Expose parser.
 */

request.parseString=parseString;

/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types={
html:'text/html',
json:'application/json',
xml:'text/xml',
urlencoded:'application/x-www-form-urlencoded',
'form':'application/x-www-form-urlencoded',
'form-data':'application/x-www-form-urlencoded'};


/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

request.serialize={
'application/x-www-form-urlencoded':serialize,
'application/json':JSON.stringify};


/**
  * Default parsers.
  *
  *     superagent.parse['application/xml'] = function(str){
  *       return { object parsed from str };
  *     };
  *
  */

request.parse={
'application/x-www-form-urlencoded':parseString,
'application/json':JSON.parse};


/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str){
var lines=str.split(/\r?\n/);
var fields={};
var index;
var line;
var field;
var val;

for(var i=0,len=lines.length;i<len;++i){
line=lines[i];
index=line.indexOf(':');
if(index===-1){// could be empty line, just skip it
continue;
}
field=line.slice(0,index).toLowerCase();
val=trim(line.slice(index+1));
fields[field]=val;
}

return fields;
}

/**
 * Check if `mime` is json or has +json structured syntax suffix.
 *
 * @param {String} mime
 * @return {Boolean}
 * @api private
 */

function isJSON(mime){
// should match /json or +json
// but not /json-seq
return /[\/+]json($|[^-\w])/.test(mime);
}

/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */

function Response(req){
this.req=req;
this.xhr=this.req.xhr;
// responseText is accessible only if responseType is '' or 'text' and on older browsers
this.text=this.req.method!='HEAD'&&(this.xhr.responseType===''||this.xhr.responseType==='text')||typeof this.xhr.responseType==='undefined'?
this.xhr.responseText:
null;
this.statusText=this.req.xhr.statusText;
var status=this.xhr.status;
// handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
if(status===1223){
status=204;
}
this._setStatusProperties(status);
this.header=this.headers=parseHeader(this.xhr.getAllResponseHeaders());
// getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
// getResponseHeader still works. so we get content-type even if getting
// other headers fails.
this.header['content-type']=this.xhr.getResponseHeader('content-type');
this._setHeaderProperties(this.header);

if(null===this.text&&req._responseType){
this.body=this.xhr.response;
}else{
this.body=this.req.method!='HEAD'?
this._parseBody(this.text?this.text:this.xhr.response):
null;
}
}

ResponseBase(Response.prototype);

/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype._parseBody=function(str){
var parse=request.parse[this.type];
if(this.req._parser){
return this.req._parser(this,str);
}
if(!parse&&isJSON(this.type)){
parse=request.parse['application/json'];
}
return parse&&str&&(str.length||str instanceof Object)?
parse(str):
null;
};

/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */

Response.prototype.toError=function(){
var req=this.req;
var method=req.method;
var url=req.url;

var msg='cannot '+method+' '+url+' ('+this.status+')';
var err=new Error(msg);
err.status=this.status;
err.method=method;
err.url=url;

return err;
};

/**
 * Expose `Response`.
 */

request.Response=Response;

/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method,url){
var self=this;
this._query=this._query||[];
this.method=method;
this.url=url;
this.header={};// preserves header name case
this._header={};// coerces header names to lowercase
this.on('end',function(){
var err=null;
var res=null;

try{
res=new Response(self);
}catch(e){
err=new Error('Parser is unable to parse the response');
err.parse=true;
err.original=e;
// issue #675: return the raw response if the response parsing fails
if(self.xhr){
// ie9 doesn't have 'response' property
err.rawResponse=typeof self.xhr.responseType=='undefined'?self.xhr.responseText:self.xhr.response;
// issue #876: return the http status code if the response parsing fails
err.status=self.xhr.status?self.xhr.status:null;
err.statusCode=err.status;// backwards-compat only
}else{
err.rawResponse=null;
err.status=null;
}

return self.callback(err);
}

self.emit('response',res);

var new_err;
try{
if(!self._isResponseOK(res)){
new_err=new Error(res.statusText||'Unsuccessful HTTP response');
}
}catch(custom_err){
new_err=custom_err;// ok() callback can throw
}

// #1000 don't catch errors from the callback to avoid double calling it
if(new_err){
new_err.original=err;
new_err.response=res;
new_err.status=res.status;
self.callback(new_err,res);
}else{
self.callback(null,res);
}
});
}

/**
 * Mixin `Emitter` and `RequestBase`.
 */

Emitter(Request.prototype);
RequestBase(Request.prototype);

/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type=function(type){
this.set('Content-Type',request.types[type]||type);
return this;
};

/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.accept=function(type){
this.set('Accept',request.types[type]||type);
return this;
};

/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} [pass] optional in case of using 'bearer' as type
 * @param {Object} options with 'type' property 'auto', 'basic' or 'bearer' (default 'basic')
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.auth=function(user,pass,options){
if(1===arguments.length)pass='';
if(typeof pass==='object'&&pass!==null){// pass is optional and can be replaced with options
options=pass;
pass='';
}
if(!options){
options={
type:'function'===typeof btoa?'basic':'auto'};

}

var encoder=function encoder(string){
if('function'===typeof btoa){
return btoa(string);
}
throw new Error('Cannot use basic auth, btoa is not a function');
};

return this._auth(user,pass,options,encoder);
};

/**
 * Add query-string `val`.
 *
 * Examples:
 *
 *   request.get('/shoes')
 *     .query('size=10')
 *     .query({ color: 'blue' })
 *
 * @param {Object|String} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.query=function(val){
if('string'!=typeof val)val=serialize(val);
if(val)this._query.push(val);
return this;
};

/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `options` (or filename).
 *
 * ``` js
 * request.post('/upload')
 *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String|Object} options
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.attach=function(field,file,options){
if(file){
if(this._data){
throw Error("superagent can't mix .send() and .attach()");
}

this._getFormData().append(field,file,options||file.name);
}
return this;
};

Request.prototype._getFormData=function(){
if(!this._formData){
this._formData=new root.FormData();
}
return this._formData;
};

/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */

Request.prototype.callback=function(err,res){
if(this._shouldRetry(err,res)){
return this._retry();
}

var fn=this._callback;
this.clearTimeout();

if(err){
if(this._maxRetries)err.retries=this._retries-1;
this.emit('error',err);
}

fn(err,res);
};

/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */

Request.prototype.crossDomainError=function(){
var err=new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
err.crossDomain=true;

err.status=this.status;
err.method=this.method;
err.url=this.url;

this.callback(err);
};

// This only warns, because the request is still likely to work
Request.prototype.buffer=Request.prototype.ca=Request.prototype.agent=function(){
console.warn("This is not supported in browser version of superagent");
return this;
};

// This throws, because it can't send/receive data as expected
Request.prototype.pipe=Request.prototype.write=function(){
throw Error("Streaming is not supported in browser version of superagent");
};

/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */
Request.prototype._isHost=function _isHost(obj){
// Native objects stringify to [object File], [object Blob], [object FormData], etc.
return obj&&'object'===typeof obj&&!Array.isArray(obj)&&Object.prototype.toString.call(obj)!=='[object Object]';
};

/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.end=function(fn){
if(this._endCalled){
console.warn("Warning: .end() was called twice. This is not supported in superagent");
}
this._endCalled=true;

// store callback
this._callback=fn||noop;

// querystring
this._finalizeQueryString();

return this._end();
};

Request.prototype._end=function(){
var self=this;
var xhr=this.xhr=request.getXHR();
var data=this._formData||this._data;

this._setTimeouts();

// state change
xhr.onreadystatechange=function(){
var readyState=xhr.readyState;
if(readyState>=2&&self._responseTimeoutTimer){
clearTimeout(self._responseTimeoutTimer);
}
if(4!=readyState){
return;
}

// In IE9, reads to any property (e.g. status) off of an aborted XHR will
// result in the error "Could not complete the operation due to error c00c023f"
var status;
try{status=xhr.status;}catch(e){status=0;}

if(!status){
if(self.timedout||self._aborted)return;
return self.crossDomainError();
}
self.emit('end');
};

// progress
var handleProgress=function handleProgress(direction,e){
if(e.total>0){
e.percent=e.loaded/e.total*100;
}
e.direction=direction;
self.emit('progress',e);
};
if(this.hasListeners('progress')){
try{
xhr.onprogress=handleProgress.bind(null,'download');
if(xhr.upload){
xhr.upload.onprogress=handleProgress.bind(null,'upload');
}
}catch(e){
// Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
// Reported here:
// https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
}
}

// initiate request
try{
if(this.username&&this.password){
xhr.open(this.method,this.url,true,this.username,this.password);
}else{
xhr.open(this.method,this.url,true);
}
}catch(err){
// see #1149
return this.callback(err);
}

// CORS
if(this._withCredentials)xhr.withCredentials=true;

// body
if(!this._formData&&'GET'!=this.method&&'HEAD'!=this.method&&'string'!=typeof data&&!this._isHost(data)){
// serialize stuff
var contentType=this._header['content-type'];
var serialize=this._serializer||request.serialize[contentType?contentType.split(';')[0]:''];
if(!serialize&&isJSON(contentType)){
serialize=request.serialize['application/json'];
}
if(serialize)data=serialize(data);
}

// set header fields
for(var field in this.header){
if(null==this.header[field])continue;

if(this.header.hasOwnProperty(field))
xhr.setRequestHeader(field,this.header[field]);
}

if(this._responseType){
xhr.responseType=this._responseType;
}

// send stuff
this.emit('request',this);

// IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
// We need null here if data is undefined
xhr.send(typeof data!=='undefined'?data:null);
return this;
};

request.agent=function(){
return new Agent();
};

["GET","POST","OPTIONS","PATCH","PUT","DELETE"].forEach(function(method){
Agent.prototype[method.toLowerCase()]=function(url,fn){
var req=new request.Request(method,url);
this._setDefaults(req);
if(fn){
req.end(fn);
}
return req;
};
});

Agent.prototype.del=Agent.prototype['delete'];

/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.get=function(url,data,fn){
var req=request('GET',url);
if('function'==typeof data)fn=data,data=null;
if(data)req.query(data);
if(fn)req.end(fn);
return req;
};

/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.head=function(url,data,fn){
var req=request('HEAD',url);
if('function'==typeof data)fn=data,data=null;
if(data)req.query(data);
if(fn)req.end(fn);
return req;
};

/**
 * OPTIONS query to `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.options=function(url,data,fn){
var req=request('OPTIONS',url);
if('function'==typeof data)fn=data,data=null;
if(data)req.send(data);
if(fn)req.end(fn);
return req;
};

/**
 * DELETE `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

function del(url,data,fn){
var req=request('DELETE',url);
if('function'==typeof data)fn=data,data=null;
if(data)req.send(data);
if(fn)req.end(fn);
return req;
}

request['del']=del;
request['delete']=del;

/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.patch=function(url,data,fn){
var req=request('PATCH',url);
if('function'==typeof data)fn=data,data=null;
if(data)req.send(data);
if(fn)req.end(fn);
return req;
};

/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.post=function(url,data,fn){
var req=request('POST',url);
if('function'==typeof data)fn=data,data=null;
if(data)req.send(data);
if(fn)req.end(fn);
return req;
};

/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.put=function(url,data,fn){
var req=request('PUT',url);
if('function'==typeof data)fn=data,data=null;
if(data)req.send(data);
if(fn)req.end(fn);
return req;
};


/***/},
/* 9 */
/***/function(module,exports,__webpack_require__){

"use strict";
/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */



//-----------------------------------------------------------------------------
// Requirements
//-----------------------------------------------------------------------------

var Commons=__webpack_require__(10);
var CustomEventTarget=__webpack_require__(27);
var EventWrapper=__webpack_require__(28);
var LISTENERS=Commons.LISTENERS;
var CAPTURE=Commons.CAPTURE;
var BUBBLE=Commons.BUBBLE;
var ATTRIBUTE=Commons.ATTRIBUTE;
var newNode=Commons.newNode;
var defineCustomEventTarget=CustomEventTarget.defineCustomEventTarget;
var createEventWrapper=EventWrapper.createEventWrapper;
var STOP_IMMEDIATE_PROPAGATION_FLAG=
EventWrapper.STOP_IMMEDIATE_PROPAGATION_FLAG;

//-----------------------------------------------------------------------------
// Constants
//-----------------------------------------------------------------------------

/**
 * A flag which shows there is the native `EventTarget` interface object.
 *
 * @type {boolean}
 * @private
 */
var HAS_EVENTTARGET_INTERFACE=
typeof window!=="undefined"&&
typeof window.EventTarget!=="undefined";


//-----------------------------------------------------------------------------
// Public Interface
//-----------------------------------------------------------------------------

/**
 * An implementation for `EventTarget` interface.
 *
 * @constructor
 * @public
 */
var EventTarget=module.exports=function EventTarget(){
if(this instanceof EventTarget){
// this[LISTENERS] is a Map.
// Its key is event type.
// Its value is ListenerNode object or null.
//
// interface ListenerNode {
//     var listener: Function
//     var kind: CAPTURE|BUBBLE|ATTRIBUTE
//     var next: ListenerNode|null
// }
Object.defineProperty(this,LISTENERS,{value:Object.create(null)});
}else
if(arguments.length===1&&Array.isArray(arguments[0])){
return defineCustomEventTarget(EventTarget,arguments[0]);
}else
if(arguments.length>0){
var types=Array(arguments.length);
for(var i=0;i<arguments.length;++i){
types[i]=arguments[i];
}

// To use to extend with attribute listener properties.
// e.g.
//     class MyCustomObject extends EventTarget("message", "error") {
//         //...
//     }
return defineCustomEventTarget(EventTarget,types);
}else
{
throw new TypeError("Cannot call a class as a function");
}
};

EventTarget.prototype=Object.create(
(HAS_EVENTTARGET_INTERFACE?window.EventTarget:Object).prototype,
{
constructor:{
value:EventTarget,
writable:true,
configurable:true},


addEventListener:{
value:function addEventListener(type,listener,capture){
if(listener==null){
return false;
}
if(typeof listener!=="function"&&typeof listener!=="object"){
throw new TypeError("\"listener\" is not an object.");
}

var kind=capture?CAPTURE:BUBBLE;
var node=this[LISTENERS][type];
if(node==null){
this[LISTENERS][type]=newNode(listener,kind);
return true;
}

var prev=null;
while(node!=null){
if(node.listener===listener&&node.kind===kind){
// Should ignore a duplicated listener.
return false;
}
prev=node;
node=node.next;
}

prev.next=newNode(listener,kind);
return true;
},
configurable:true,
writable:true},


removeEventListener:{
value:function removeEventListener(type,listener,capture){
if(listener==null){
return false;
}

var kind=capture?CAPTURE:BUBBLE;
var prev=null;
var node=this[LISTENERS][type];
while(node!=null){
if(node.listener===listener&&node.kind===kind){
if(prev==null){
this[LISTENERS][type]=node.next;
}else
{
prev.next=node.next;
}
return true;
}

prev=node;
node=node.next;
}

return false;
},
configurable:true,
writable:true},


dispatchEvent:{
value:function dispatchEvent(event){
// If listeners aren't registered, terminate.
var node=this[LISTENERS][event.type];
if(node==null){
return true;
}

// Since we cannot rewrite several properties, so wrap object.
var wrapped=createEventWrapper(event,this);

// This doesn't process capturing phase and bubbling phase.
// This isn't participating in a tree.
while(node!=null){
if(typeof node.listener==="function"){
node.listener.call(this,wrapped);
}else
if(node.kind!==ATTRIBUTE&&typeof node.listener.handleEvent==="function"){
node.listener.handleEvent(wrapped);
}

if(wrapped[STOP_IMMEDIATE_PROPAGATION_FLAG]){
break;
}
node=node.next;
}

return!wrapped.defaultPrevented;
},
configurable:true,
writable:true}});





/***/},
/* 10 */
/***/function(module,exports,__webpack_require__){

"use strict";
/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */



/**
 * Creates a unique key.
 *
 * @param {string} name - A name to create.
 * @returns {symbol|string}
 * @private
 */
var createUniqueKey=exports.createUniqueKey=typeof Symbol!=="undefined"?
Symbol:
function createUniqueKey(name){
return"[["+name+"_"+Math.random().toFixed(8).slice(2)+"]]";
};

/**
 * The key of listeners.
 *
 * @type {symbol|string}
 * @private
 */
exports.LISTENERS=createUniqueKey("listeners");

/**
 * A value of kind for listeners which are registered in the capturing phase.
 *
 * @type {number}
 * @private
 */
exports.CAPTURE=1;

/**
 * A value of kind for listeners which are registered in the bubbling phase.
 *
 * @type {number}
 * @private
 */
exports.BUBBLE=2;

/**
 * A value of kind for listeners which are registered as an attribute.
 *
 * @type {number}
 * @private
 */
exports.ATTRIBUTE=3;

/**
 * @typedef object ListenerNode
 * @property {function} listener - A listener function.
 * @property {number} kind - The kind of the listener.
 * @property {ListenerNode|null} next - The next node.
 *      If this node is the last, this is `null`.
 */

/**
 * Creates a node of singly linked list for a list of listeners.
 *
 * @param {function} listener - A listener function.
 * @param {number} kind - The kind of the listener.
 * @returns {ListenerNode} The created listener node.
 */
exports.newNode=function newNode(listener,kind){
return{listener:listener,kind:kind,next:null};
};


/***/},
/* 11 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};

var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

var FormData=function(){
function FormData(){
_classCallCheck(this,FormData);

this._entries=[];
}

_createClass(FormData,[{
key:'append',
value:function append(name,value){
if(typeof name!=='string'){
throw new TypeError('FormData name must be a string');
}
if(typeof value!=='string'){
if((typeof value==='undefined'?'undefined':_typeof(value))!=='object'||typeof value.uri!=='string'){
throw new TypeError('FormData value must be a string or { uri: tempFilePath }');
}
}
this._entries.push([name,value]);
}},
{
key:'set',
value:function set(name,value){
var entry=this.get(name);
if(entry){
entry[1]=value;
}else{
this.append(name,value);
}
}},
{
key:'delete',
value:function _delete(name){
this._entries=this._entries.filter(function(entry){
return entry[0]!==name;
});
}},
{
key:'entries',
value:function entries(){
return this._entries;
}},
{
key:'get',
value:function get(name){
return this._entries.find(function(entry){
return entry[0]===name;
});
}},
{
key:'getAll',
value:function getAll(name){
return this._entries.filter(function(entry){
return entry[0]===name;
});
}},
{
key:'has',
value:function has(name){
return this._entries.some(function(entry){
return entry[0]===name;
});
}},
{
key:'keys',
value:function keys(){
return this._entries.map(function(entry){
return entry[0];
});
}},
{
key:'values',
value:function values(){
return this._entries.map(function(entry){
return entry[1];
});
}}]);


return FormData;
}();

module.exports=FormData;

/***/},
/* 12 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

var Storage=function(){
function Storage(){
_classCallCheck(this,Storage);
}

_createClass(Storage,[{
key:'getItem',
value:function getItem(key){
return wx.getStorageSync(key);
}},
{
key:'setItem',
value:function setItem(key,value){
return wx.setStorageSync(key,value);
}},
{
key:'removeItem',
value:function removeItem(key){
return this.setItem(key,'');
}},
{
key:'clear',
value:function clear(){
return wx.clearStorageSync();
}}]);


return Storage;
}();

module.exports=new Storage();

/***/},
/* 13 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}

function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}

function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var assign=__webpack_require__(14);
var EventTarget=__webpack_require__(9);
var FormData=__webpack_require__(11);

var UNSENT=0;
var OPENED=1;
var HEADERS_RECEIVED=2;
var LOADING=3;
var DONE=4;

var REQUEST_EVENTS=['abort','error','load','loadstart','progress','timeout','loadend','readystatechange'];

var REQUEST_UPLOAD_EVENTS=['abort','error','load','loadstart','progress','timeout','loadend'];

function successCallback(response){
this.status=response.statusCode;
this.statusText=response.statusCode;
// 基础库 1.2.0 开始支持
if(response.header){
this._responseHeaders=Object.keys(response.header).reduce(function(headers,key){
headers[key.toLowerCase()]=response.header[key];
return headers;
},{});
}
var text=response.data;
if(typeof text!=='string'){
text=JSON.stringify(text);
}
this.responseText=this.response=text;
this.readyState=DONE;
this.dispatchEvent({type:'readystatechange'});
}

var XMLHttpRequestUpload=function(_EventTarget){
_inherits(XMLHttpRequestUpload,_EventTarget);

function XMLHttpRequestUpload(){
_classCallCheck(this,XMLHttpRequestUpload);

return _possibleConstructorReturn(this,(XMLHttpRequestUpload.__proto__||Object.getPrototypeOf(XMLHttpRequestUpload)).apply(this,arguments));
}

return XMLHttpRequestUpload;
}(EventTarget(REQUEST_UPLOAD_EVENTS));

var XMLHttpRequest=function(_EventTarget2){
_inherits(XMLHttpRequest,_EventTarget2);

function XMLHttpRequest(){
_classCallCheck(this,XMLHttpRequest);

var _this2=_possibleConstructorReturn(this,(XMLHttpRequest.__proto__||Object.getPrototypeOf(XMLHttpRequest)).call(this));

_this2.readyState=UNSENT;
_this2._headers={};
_this2.upload=new XMLHttpRequestUpload();
return _this2;
}

_createClass(XMLHttpRequest,[{
key:'abort',
value:function abort(){
// 基础库 1.4.0 开始支持
if(!this._request||this._request.abort){
this.status=0;
this.readyState=DONE;
return this._request.abort();
}
throw new Error('该版本基础库不支持 abort request');
}},
{
key:'getAllResponseHeaders',
value:function getAllResponseHeaders(){
var _this3=this;

return this._responseHeaders?Object.keys(this._responseHeaders).map(function(key){
return key+': '+_this3._responseHeaders[key];
}).join('\r\n'):'';
}},
{
key:'getResponseHeader',
value:function getResponseHeader(key){
var lowserCasedKey=key.toLowerCase();
if(this._responseHeaders&&this._responseHeaders[lowserCasedKey]){
return this._responseHeaders[lowserCasedKey];
}
return null;
}},
{
key:'overrideMimeType',
value:function overrideMimeType(){
throw new Error('not supported in weapp');
}},
{
key:'open',
value:function open(method,url){
var async=arguments.length>2&&arguments[2]!==undefined?arguments[2]:true;

if(this.readyState!==UNSENT){
throw new Error('request is already opened');
}
if(!async){
throw new Error('sync request is not supported');
}
this._method=method;
this._url=url;
this.readyState=OPENED;
this.dispatchEvent({type:'readystatechange'});
}},
{
key:'setRequestHeader',
value:function setRequestHeader(header,value){
if(this.readyState!==OPENED){
throw new Error('request is not opened');
}
this._headers[header.toLowerCase()]=value;
}},
{
key:'send',
value:function send(data){
var _this4=this;

if(this.readyState!==OPENED){
throw new Error('request is not opened');
}
if(data instanceof FormData){
var entries=data.entries();
var blobs=entries.filter(function(entry){
return typeof entry[1]!=='string';
});
if(blobs.length===0){
throw new Error('Must specify a Blob field in FormData');
}
if(blobs.length>1){
console.warn('Only the first Blob will be send in Weapp');
}
var restData=entries.filter(function(entry){
return typeof entry[1]==='string';
}).reduce(function(result,entry){
return assign(result,_defineProperty({},entry[0],entry[1]));
},{});
this._request=wx.uploadFile({
url:this._url,
name:blobs[0][0],
filePath:blobs[0][1].uri,
formData:restData,
header:this._headers,
success:successCallback.bind(this),
fail:function fail(error){
_this4.status=0;
_this4.readyState=DONE;
_this4.dispatchEvent({type:'readystatechange'});
_this4.dispatchEvent({type:'error'});
}});

// 基础库 1.4.0 开始支持
if(this._request&&this._request.onProgressUpdate){
this._request.onProgressUpdate(function(_ref){
var totalBytesSent=_ref.totalBytesSent,
totalBytesExpectedToSend=_ref.totalBytesExpectedToSend;

_this4.upload.dispatchEvent({
type:'progress',
loaded:totalBytesSent,
total:totalBytesExpectedToSend});

});
}
}else{
this._request=wx.request({
url:this._url,
data:data||'',
// method 的 value 居然必须为大写
method:this._method.toUpperCase(),
header:this._headers,
success:successCallback.bind(this),
fail:function fail(error){
_this4.status=0;
_this4.readyState=DONE;
_this4.dispatchEvent({type:'readystatechange'});
_this4.dispatchEvent({type:'error'});
}});

}
}}]);


return XMLHttpRequest;
}(EventTarget(REQUEST_EVENTS));

assign(XMLHttpRequest,{
UNSENT:UNSENT,
OPENED:OPENED,
HEADERS_RECEIVED:HEADERS_RECEIVED,
LOADING:LOADING,
DONE:DONE});


module.exports=XMLHttpRequest;

/***/},
/* 14 */
/***/function(module,exports,__webpack_require__){

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols=Object.getOwnPropertySymbols;
var hasOwnProperty=Object.prototype.hasOwnProperty;
var propIsEnumerable=Object.prototype.propertyIsEnumerable;

function toObject(val){
if(val===null||val===undefined){
throw new TypeError('Object.assign cannot be called with null or undefined');
}

return Object(val);
}

function shouldUseNative(){
try{
if(!Object.assign){
return false;
}

// Detect buggy property enumeration order in older V8 versions.

// https://bugs.chromium.org/p/v8/issues/detail?id=4118
var test1=new String('abc');// eslint-disable-line no-new-wrappers
test1[5]='de';
if(Object.getOwnPropertyNames(test1)[0]==='5'){
return false;
}

// https://bugs.chromium.org/p/v8/issues/detail?id=3056
var test2={};
for(var i=0;i<10;i++){
test2['_'+String.fromCharCode(i)]=i;
}
var order2=Object.getOwnPropertyNames(test2).map(function(n){
return test2[n];
});
if(order2.join('')!=='0123456789'){
return false;
}

// https://bugs.chromium.org/p/v8/issues/detail?id=3056
var test3={};
'abcdefghijklmnopqrst'.split('').forEach(function(letter){
test3[letter]=letter;
});
if(Object.keys(Object.assign({},test3)).join('')!==
'abcdefghijklmnopqrst'){
return false;
}

return true;
}catch(err){
// We don't expect any of the above to throw, but better to be safe.
return false;
}
}

module.exports=shouldUseNative()?Object.assign:function(target,source){
var from;
var to=toObject(target);
var symbols;

for(var s=1;s<arguments.length;s++){
from=Object(arguments[s]);

for(var key in from){
if(hasOwnProperty.call(from,key)){
to[key]=from[key];
}
}

if(getOwnPropertySymbols){
symbols=getOwnPropertySymbols(from);
for(var i=0;i<symbols.length;i++){
if(propIsEnumerable.call(from,symbols[i])){
to[symbols[i]]=from[symbols[i]];
}
}
}
}

return to;
};


/***/},
/* 15 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}

function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var assign=__webpack_require__(14);
var EventTarget=__webpack_require__(9);

var CONNECTING=0;
var OPEN=1;
var CLOSING=2;
var CLOSED=3;

var EVENTS=['open','error','message','close'];

var WebSocket=function(_EventTarget){
_inherits(WebSocket,_EventTarget);

function WebSocket(url,protocal){
_classCallCheck(this,WebSocket);

if(!url){
throw new TypeError('Failed to construct \'WebSocket\': url required');
}
if(protocal&&!(wx.canIUse&&wx.canIUse('connectSocket.object.protocols'))){
throw new Error('subprotocal not supported in weapp');
}

var _this=_possibleConstructorReturn(this,(WebSocket.__proto__||Object.getPrototypeOf(WebSocket)).call(this));

_this._url=url;
_this._protocal=protocal||'';// default value according to specs
_this._readyState=CONNECTING;

var errorHandler=function errorHandler(event){
_this._readyState=CLOSED;
_this.dispatchEvent({
type:'error',
message:event.errMsg});

};

var socketTask=wx.connectSocket({
url:url,
protocals:_this._protocal,
fail:function fail(error){
return setTimeout(function(){
return errorHandler(error);
},0);
}});

_this._socketTask=socketTask;

socketTask.onOpen(function(event){
_this._readyState=OPEN;
_this.dispatchEvent({
type:'open'});

});
socketTask.onError(errorHandler);
socketTask.onMessage(function(event){
var data=event.data,
origin=event.origin,
ports=event.ports,
source=event.source;

_this.dispatchEvent({
data:data,
origin:origin,
ports:ports,
source:source,
type:'message'});

});
socketTask.onClose(function(event){
_this._readyState=CLOSED;
var code=event.code,
reason=event.reason,
wasClean=event.wasClean;

_this.dispatchEvent({
code:code,
reason:reason,
wasClean:wasClean,
type:'close'});

});
return _this;
}

_createClass(WebSocket,[{
key:'close',
value:function close(){
if(this.readyState===CLOSED)return;
if(this.readyState===CONNECTING){
console.warn('close WebSocket which is connecting might not work');
}
this._socketTask.close();
}},
{
key:'send',
value:function send(data){
if(this.readyState!==OPEN){
throw new Error('INVALID_STATE_ERR');
}

if(!(typeof data==='string'||data instanceof ArrayBuffer)){
throw new TypeError('only String/ArrayBuffer supported');
}

this._socketTask.send({
data:data});

}},
{
key:'url',
get:function get(){
return this._url;
}},
{
key:'protocal',
get:function get(){
return this._protocal;
}},
{
key:'readyState',
get:function get(){
return this._readyState;
}}]);


return WebSocket;
}(EventTarget(EVENTS));

assign(WebSocket,{
CONNECTING:CONNECTING,
OPEN:OPEN,
CLOSING:CLOSING,
CLOSED:CLOSED});


module.exports=WebSocket;

/***/},
/* 16 */
/***/function(module,exports,__webpack_require__){

"use strict";


module.exports={};

/***/},
/* 17 */
/***/function(module,exports,__webpack_require__){

var rng=__webpack_require__(31);
var bytesToUuid=__webpack_require__(32);

function v4(options,buf,offset){
var i=buf&&offset||0;

if(typeof options=='string'){
buf=options==='binary'?new Array(16):null;
options=null;
}
options=options||{};

var rnds=options.random||(options.rng||rng)();

// Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
rnds[6]=rnds[6]&0x0f|0x40;
rnds[8]=rnds[8]&0x3f|0x80;

// Copy bytes to buffer, if provided
if(buf){
for(var ii=0;ii<16;++ii){
buf[i+ii]=rnds[ii];
}
}

return buf||bytesToUuid(rnds);
}

module.exports=v4;


/***/},
/* 18 */
/***/function(module,exports,__webpack_require__){

"use strict";


module.exports='3.13.2';

/***/},
/* 19 */
/***/function(module,exports,__webpack_require__){

"use strict";


/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isObject(obj){
return null!==obj&&'object'===typeof obj;
}

module.exports=isObject;


/***/},
/* 20 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _=__webpack_require__(0);
var Promise=__webpack_require__(1);
var localStorage=__webpack_require__(44);

var syncApiNames=['getItem','setItem','removeItem','clear'];

if(!localStorage.async){
// wrap sync apis with async ones.
_(syncApiNames).each(function(apiName){
if(typeof localStorage[apiName]==='function'){
localStorage[apiName+'Async']=function(){
return Promise.resolve(localStorage[apiName].apply(localStorage,arguments));
};
}
});
}else{
_(syncApiNames).each(function(apiName){
if(typeof localStorage[apiName]!=='function'){
localStorage[apiName]=function(){
var error=new Error('Synchronous API ['+apiName+'] is not available in this runtime.');
error.code='SYNC_API_NOT_AVAILABLE';
throw error;
};
}
});
}

module.exports=localStorage;

/***/},
/* 21 */
/***/function(module,exports,__webpack_require__){

"use strict";


var storage=__webpack_require__(20);
var AV=__webpack_require__(5);

var removeAsync=exports.removeAsync=storage.removeItemAsync.bind(storage);

var getCacheData=function getCacheData(cacheData,key){
try{
cacheData=JSON.parse(cacheData);
}catch(e){
return null;
}
if(cacheData){
var expired=cacheData.expiredAt&&cacheData.expiredAt<Date.now();
if(!expired){
return cacheData.value;
}
return removeAsync(key).then(function(){
return null;
});
}
return null;
};

exports.getAsync=function(key){
key='AV/'+AV.applicationId+'/'+key;
return storage.getItemAsync(key).then(function(cache){
return getCacheData(cache,key);
});
};

exports.setAsync=function(key,value,ttl){
var cache={value:value};
if(typeof ttl==='number'){
cache.expiredAt=Date.now()+ttl;
}
return storage.setItemAsync('AV/'+AV.applicationId+'/'+key,JSON.stringify(cache));
};

/***/},
/* 22 */
/***/function(module,exports){

var charenc={
// UTF-8 encoding
utf8:{
// Convert a string to a byte array
stringToBytes:function stringToBytes(str){
return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
},

// Convert a byte array to a string
bytesToString:function bytesToString(bytes){
return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
}},


// Binary encoding
bin:{
// Convert a string to a byte array
stringToBytes:function stringToBytes(str){
for(var bytes=[],i=0;i<str.length;i++){
bytes.push(str.charCodeAt(i)&0xFF);}
return bytes;
},

// Convert a byte array to a string
bytesToString:function bytesToString(bytes){
for(var str=[],i=0;i<bytes.length;i++){
str.push(String.fromCharCode(bytes[i]));}
return str.join('');
}}};



module.exports=charenc;


/***/},
/* 23 */
/***/function(module,exports,__webpack_require__){

"use strict";


/*!
 * LeanCloud JavaScript SDK
 * https://leancloud.cn
 *
 * Copyright 2016 LeanCloud.cn, Inc.
 * The LeanCloud JavaScript SDK is freely distributable under the MIT license.
 */
__webpack_require__(24);
var _=__webpack_require__(0);

var AV=__webpack_require__(5);

AV._=_;
AV.version=__webpack_require__(18);
AV.Promise=__webpack_require__(1);
AV.localStorage=__webpack_require__(20);
AV.Cache=__webpack_require__(21);
AV.Error=__webpack_require__(4);

__webpack_require__(46);
__webpack_require__(48)(AV);
__webpack_require__(49)(AV);
__webpack_require__(50)(AV);
__webpack_require__(51)(AV);
__webpack_require__(52)(AV);
__webpack_require__(53)(AV);
__webpack_require__(61)(AV);
__webpack_require__(62)(AV);
__webpack_require__(63)(AV);
__webpack_require__(64)(AV);
__webpack_require__(65)(AV);
__webpack_require__(67)(AV);
__webpack_require__(68)(AV);
__webpack_require__(69)(AV);
__webpack_require__(70)(AV);
__webpack_require__(71)(AV);
__webpack_require__(72)(AV);

AV.Conversation=__webpack_require__(73);
__webpack_require__(74);
module.exports=AV;

/**
 * Options to controll the authentication for an operation
 * @typedef {Object} AuthOptions
 * @property {String} [sessionToken] Specify a user to excute the operation as.
 * @property {AV.User} [user] Specify a user to excute the operation as. The user must have _sessionToken. This option will be ignored if sessionToken option provided.
 * @property {Boolean} [useMasterKey] Indicates whether masterKey is used for this operation. Only valid when masterKey is set.
 */

/***/},
/* 24 */
/***/function(module,exports,__webpack_require__){

"use strict";


__webpack_require__(25);

/***/},
/* 25 */
/***/function(module,exports,__webpack_require__){

"use strict";


var polyfill=__webpack_require__(26).polyfill;
try{
polyfill();
}catch(e){}
try{
polyfill(GameGlobal);
}catch(e){}
try{
window=window||{};
polyfill(window);
}catch(e){}
try{
localStorage=localStorage||__webpack_require__(12);
}catch(e){}
try{
XMLHttpRequest=XMLHttpRequest||__webpack_require__(13);
}catch(e){}
try{
FormData=FormData||__webpack_require__(11);
}catch(e){}
try{
WebSocket=WebSocket||__webpack_require__(15);
}catch(e){}
try{
navigator=navigator||__webpack_require__(16);
}catch(e){}

/***/},
/* 26 */
/***/function(module,exports,__webpack_require__){

"use strict";
/* WEBPACK VAR INJECTION */(function(global){

var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};

var localStorage=__webpack_require__(12);
var XMLHttpRequest=__webpack_require__(13);
var FormData=__webpack_require__(11);
var WebSocket=__webpack_require__(15);
var OnlineOfflineEvents=__webpack_require__(29);
var navigator=__webpack_require__(16);

module.exports={
polyfill:function polyfill(){
var target=arguments.length>0&&arguments[0]!==undefined?arguments[0]:global||window;

if((typeof target==='undefined'?'undefined':_typeof(target))!=='object'){
throw new Error('polyfill target is not an Object');
}
var polyfills={
localStorage:localStorage,
XMLHttpRequest:XMLHttpRequest,
FormData:FormData,
WebSocket:WebSocket,
Object:Object,
navigator:navigator};

for(var k in polyfills){
if(!target[k])target[k]=polyfills[k];
}
OnlineOfflineEvents.polyfill(target);
//  假扮为 React Native，让 axios 认为这是一个 nonStandardBrowserEnv
target.navigator.product='ReactNative';
},

localStorage:localStorage,
XMLHttpRequest:XMLHttpRequest,
FormData:FormData,
WebSocket:WebSocket};

/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(6));

/***/},
/* 27 */
/***/function(module,exports,__webpack_require__){

"use strict";
/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */



//-----------------------------------------------------------------------------
// Requirements
//-----------------------------------------------------------------------------

var Commons=__webpack_require__(10);
var LISTENERS=Commons.LISTENERS;
var ATTRIBUTE=Commons.ATTRIBUTE;
var newNode=Commons.newNode;

//-----------------------------------------------------------------------------
// Helpers
//-----------------------------------------------------------------------------

/**
 * Gets a specified attribute listener from a given EventTarget object.
 *
 * @param {EventTarget} eventTarget - An EventTarget object to get.
 * @param {string} type - An event type to get.
 * @returns {function|null} The found attribute listener.
 */
function getAttributeListener(eventTarget,type){
var node=eventTarget[LISTENERS][type];
while(node!=null){
if(node.kind===ATTRIBUTE){
return node.listener;
}
node=node.next;
}
return null;
}

/**
 * Sets a specified attribute listener to a given EventTarget object.
 *
 * @param {EventTarget} eventTarget - An EventTarget object to set.
 * @param {string} type - An event type to set.
 * @param {function|null} listener - A listener to be set.
 * @returns {void}
 */
function setAttributeListener(eventTarget,type,listener){
if(typeof listener!=="function"&&typeof listener!=="object"){
listener=null;// eslint-disable-line no-param-reassign
}

var prev=null;
var node=eventTarget[LISTENERS][type];
while(node!=null){
if(node.kind===ATTRIBUTE){
// Remove old value.
if(prev==null){
eventTarget[LISTENERS][type]=node.next;
}else
{
prev.next=node.next;
}
}else
{
prev=node;
}

node=node.next;
}

// Add new value.
if(listener!=null){
if(prev==null){
eventTarget[LISTENERS][type]=newNode(listener,ATTRIBUTE);
}else
{
prev.next=newNode(listener,ATTRIBUTE);
}
}
}

//-----------------------------------------------------------------------------
// Public Interface
//-----------------------------------------------------------------------------

/**
 * Defines an `EventTarget` implementation which has `onfoobar` attributes.
 *
 * @param {EventTarget} EventTargetBase - A base implementation of EventTarget.
 * @param {string[]} types - A list of event types which are defined as attribute listeners.
 * @returns {EventTarget} The defined `EventTarget` implementation which has attribute listeners.
 */
exports.defineCustomEventTarget=function(EventTargetBase,types){
function EventTarget(){
EventTargetBase.call(this);
}

var descripter={
constructor:{
value:EventTarget,
configurable:true,
writable:true}};



types.forEach(function(type){
descripter["on"+type]={
get:function get(){return getAttributeListener(this,type);},
set:function set(listener){setAttributeListener(this,type,listener);},
configurable:true,
enumerable:true};

});

EventTarget.prototype=Object.create(EventTargetBase.prototype,descripter);

return EventTarget;
};


/***/},
/* 28 */
/***/function(module,exports,__webpack_require__){

"use strict";
/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */



//-----------------------------------------------------------------------------
// Requirements
//-----------------------------------------------------------------------------

var createUniqueKey=__webpack_require__(10).createUniqueKey;

//-----------------------------------------------------------------------------
// Constsnts
//-----------------------------------------------------------------------------

/**
 * The key of the flag which is turned on by `stopImmediatePropagation` method.
 *
 * @type {symbol|string}
 * @private
 */
var STOP_IMMEDIATE_PROPAGATION_FLAG=
createUniqueKey("stop_immediate_propagation_flag");

/**
 * The key of the flag which is turned on by `preventDefault` method.
 *
 * @type {symbol|string}
 * @private
 */
var CANCELED_FLAG=createUniqueKey("canceled_flag");

/**
 * The key of the original event object.
 *
 * @type {symbol|string}
 * @private
 */
var ORIGINAL_EVENT=createUniqueKey("original_event");

/**
 * Method definitions for the event wrapper.
 *
 * @type {object}
 * @private
 */
var wrapperPrototypeDefinition=Object.freeze({
stopPropagation:Object.freeze({
value:function stopPropagation(){
var e=this[ORIGINAL_EVENT];
if(typeof e.stopPropagation==="function"){
e.stopPropagation();
}
},
writable:true,
configurable:true}),


stopImmediatePropagation:Object.freeze({
value:function stopImmediatePropagation(){
this[STOP_IMMEDIATE_PROPAGATION_FLAG]=true;

var e=this[ORIGINAL_EVENT];
if(typeof e.stopImmediatePropagation==="function"){
e.stopImmediatePropagation();
}
},
writable:true,
configurable:true}),


preventDefault:Object.freeze({
value:function preventDefault(){
if(this.cancelable===true){
this[CANCELED_FLAG]=true;
}

var e=this[ORIGINAL_EVENT];
if(typeof e.preventDefault==="function"){
e.preventDefault();
}
},
writable:true,
configurable:true}),


defaultPrevented:Object.freeze({
get:function defaultPrevented(){return this[CANCELED_FLAG];},
enumerable:true,
configurable:true})});



//-----------------------------------------------------------------------------
// Public Interface
//-----------------------------------------------------------------------------

exports.STOP_IMMEDIATE_PROPAGATION_FLAG=STOP_IMMEDIATE_PROPAGATION_FLAG;

/**
 * Creates an event wrapper.
 *
 * We cannot modify several properties of `Event` object, so we need to create the wrapper.
 * Plus, this wrapper supports non `Event` objects.
 *
 * @param {Event|{type: string}} event - An original event to create the wrapper.
 * @param {EventTarget} eventTarget - The event target of the event.
 * @returns {Event} The created wrapper. This object is implemented `Event` interface.
 * @private
 */
exports.createEventWrapper=function createEventWrapper(event,eventTarget){
var timeStamp=
typeof event.timeStamp==="number"?event.timeStamp:Date.now();

var propertyDefinition={
type:{value:event.type,enumerable:true},
target:{value:eventTarget,enumerable:true},
currentTarget:{value:eventTarget,enumerable:true},
eventPhase:{value:2,enumerable:true},
bubbles:{value:Boolean(event.bubbles),enumerable:true},
cancelable:{value:Boolean(event.cancelable),enumerable:true},
timeStamp:{value:timeStamp,enumerable:true},
isTrusted:{value:false,enumerable:true}};

propertyDefinition[STOP_IMMEDIATE_PROPAGATION_FLAG]={value:false,writable:true};
propertyDefinition[CANCELED_FLAG]={value:false,writable:true};
propertyDefinition[ORIGINAL_EVENT]={value:event};

// For CustomEvent.
if(typeof event.detail!=="undefined"){
propertyDefinition.detail={value:event.detail,enumerable:true};
}

return Object.create(
Object.create(event,wrapperPrototypeDefinition),
propertyDefinition);

};


/***/},
/* 29 */
/***/function(module,exports,__webpack_require__){

"use strict";


var EventTarget=__webpack_require__(9);

exports.polyfill=function(target){
if(!wx.onNetworkStatusChange)return;
if(target.__onlineOfflinePolyfilled)return;
target.__onlineOfflinePolyfilled=true;
var internalEventTarget=new EventTarget();
if(!target.dispatchEvent){
target.addEventListener=internalEventTarget.addEventListener.bind(internalEventTarget);
target.removeEventListener=internalEventTarget.removeEventListener.bind(internalEventTarget);
target.dispatchEvent=internalEventTarget.dispatchEvent.bind(internalEventTarget);
// avoid this condition to be true:
// https://github.com/zloirock/core-js/blob/9f051803760c02b306aae2595621bb7ef698fc29/library/modules/_task.js#L61
if(typeof postMessage=='function'&&!target.importScripts){
target.importScripts=function(){
throw new Error('mocked');
};
}
}
wx.getNetworkType({
success:function success(_ref){
var networkType=_ref.networkType;

target.onLine=networkType!=='none';
wx.onNetworkStatusChange(function(_ref2){
var isConnected=_ref2.isConnected;

if(target.onLine===isConnected)return;
target.onLine=isConnected;
target.dispatchEvent({
type:isConnected?'online':'offline'});

});
}});

};

/***/},
/* 30 */
/***/function(module,exports){

module.exports=function(module){
if(!module.webpackPolyfill){
module.deprecate=function(){};
module.paths=[];
// module.parent = undefined by default
if(!module.children)module.children=[];
Object.defineProperty(module,"loaded",{
enumerable:true,
get:function get(){
return module.l;
}});

Object.defineProperty(module,"id",{
enumerable:true,
get:function get(){
return module.i;
}});

module.webpackPolyfill=1;
}
return module;
};


/***/},
/* 31 */
/***/function(module,exports){

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues=typeof crypto!='undefined'&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||
typeof msCrypto!='undefined'&&typeof window.msCrypto.getRandomValues=='function'&&msCrypto.getRandomValues.bind(msCrypto);

if(getRandomValues){
// WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
var rnds8=new Uint8Array(16);// eslint-disable-line no-undef

module.exports=function whatwgRNG(){
getRandomValues(rnds8);
return rnds8;
};
}else{
// Math.random()-based (RNG)
//
// If all else fails, use Math.random().  It's fast, but is of unspecified
// quality.
var rnds=new Array(16);

module.exports=function mathRNG(){
for(var i=0,r;i<16;i++){
if((i&0x03)===0)r=Math.random()*0x100000000;
rnds[i]=r>>>((i&0x03)<<3)&0xff;
}

return rnds;
};
}


/***/},
/* 32 */
/***/function(module,exports){

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex=[];
for(var i=0;i<256;++i){
byteToHex[i]=(i+0x100).toString(16).substr(1);
}

function bytesToUuid(buf,offset){
var i=offset||0;
var bth=byteToHex;
// join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
return[bth[buf[i++]],bth[buf[i++]],
bth[buf[i++]],bth[buf[i++]],'-',
bth[buf[i++]],bth[buf[i++]],'-',
bth[buf[i++]],bth[buf[i++]],'-',
bth[buf[i++]],bth[buf[i++]],'-',
bth[buf[i++]],bth[buf[i++]],
bth[buf[i++]],bth[buf[i++]],
bth[buf[i++]],bth[buf[i++]]].join('');
}

module.exports=bytesToUuid;


/***/},
/* 33 */
/***/function(module,exports,__webpack_require__){

"use strict";


var version=__webpack_require__(18);
var comments=["Weapp"||false].concat(__webpack_require__(34));

module.exports='LeanCloud-JS-SDK/'+version+' ('+comments.join('; ')+')';

/***/},
/* 34 */
/***/function(module,exports,__webpack_require__){

"use strict";


module.exports=[];

/***/},
/* 35 */
/***/function(module,exports,__webpack_require__){


/**
 * Expose `Emitter`.
 */

if(true){
module.exports=Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj){
if(obj)return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj){
for(var key in Emitter.prototype){
obj[key]=Emitter.prototype[key];
}
return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on=
Emitter.prototype.addEventListener=function(event,fn){
this._callbacks=this._callbacks||{};
(this._callbacks['$'+event]=this._callbacks['$'+event]||[]).
push(fn);
return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once=function(event,fn){
function on(){
this.off(event,on);
fn.apply(this,arguments);
}

on.fn=fn;
this.on(event,on);
return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off=
Emitter.prototype.removeListener=
Emitter.prototype.removeAllListeners=
Emitter.prototype.removeEventListener=function(event,fn){
this._callbacks=this._callbacks||{};

// all
if(0==arguments.length){
this._callbacks={};
return this;
}

// specific event
var callbacks=this._callbacks['$'+event];
if(!callbacks)return this;

// remove all handlers
if(1==arguments.length){
delete this._callbacks['$'+event];
return this;
}

// remove specific handler
var cb;
for(var i=0;i<callbacks.length;i++){
cb=callbacks[i];
if(cb===fn||cb.fn===fn){
callbacks.splice(i,1);
break;
}
}

// Remove event specific arrays for event types that no
// one is subscribed for to avoid memory leak.
if(callbacks.length===0){
delete this._callbacks['$'+event];
}

return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit=function(event){
this._callbacks=this._callbacks||{};

var args=new Array(arguments.length-1),
callbacks=this._callbacks['$'+event];

for(var i=1;i<arguments.length;i++){
args[i-1]=arguments[i];
}

if(callbacks){
callbacks=callbacks.slice(0);
for(var i=0,len=callbacks.length;i<len;++i){
callbacks[i].apply(this,args);
}
}

return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners=function(event){
this._callbacks=this._callbacks||{};
return this._callbacks['$'+event]||[];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners=function(event){
return!!this.listeners(event).length;
};


/***/},
/* 36 */
/***/function(module,exports,__webpack_require__){

"use strict";


/**
 * Module of mixed-in functions shared between node and client code
 */
var isObject=__webpack_require__(19);

/**
 * Expose `RequestBase`.
 */

module.exports=RequestBase;

/**
 * Initialize a new `RequestBase`.
 *
 * @api public
 */

function RequestBase(obj){
if(obj)return mixin(obj);
}

/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj){
for(var key in RequestBase.prototype){
obj[key]=RequestBase.prototype[key];
}
return obj;
}

/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.clearTimeout=function _clearTimeout(){
clearTimeout(this._timer);
clearTimeout(this._responseTimeoutTimer);
delete this._timer;
delete this._responseTimeoutTimer;
return this;
};

/**
 * Override default response body parser
 *
 * This function will be called to convert incoming data into request.body
 *
 * @param {Function}
 * @api public
 */

RequestBase.prototype.parse=function parse(fn){
this._parser=fn;
return this;
};

/**
 * Set format of binary response body.
 * In browser valid formats are 'blob' and 'arraybuffer',
 * which return Blob and ArrayBuffer, respectively.
 *
 * In Node all values result in Buffer.
 *
 * Examples:
 *
 *      req.get('/')
 *        .responseType('blob')
 *        .end(callback);
 *
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.responseType=function(val){
this._responseType=val;
return this;
};

/**
 * Override default request body serializer
 *
 * This function will be called to convert data set via .send or .attach into payload to send
 *
 * @param {Function}
 * @api public
 */

RequestBase.prototype.serialize=function serialize(fn){
this._serializer=fn;
return this;
};

/**
 * Set timeouts.
 *
 * - response timeout is time between sending request and receiving the first byte of the response. Includes DNS and connection time.
 * - deadline is the time from start of the request to receiving response body in full. If the deadline is too short large files may not load at all on slow connections.
 *
 * Value of 0 or false means no timeout.
 *
 * @param {Number|Object} ms or {response, deadline}
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.timeout=function timeout(options){
if(!options||'object'!==typeof options){
this._timeout=options;
this._responseTimeout=0;
return this;
}

for(var option in options){
switch(option){
case'deadline':
this._timeout=options.deadline;
break;
case'response':
this._responseTimeout=options.response;
break;
default:
console.warn("Unknown timeout option",option);}

}
return this;
};

/**
 * Set number of retry attempts on error.
 *
 * Failed requests will be retried 'count' times if timeout or err.code >= 500.
 *
 * @param {Number} count
 * @param {Function} [fn]
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.retry=function retry(count,fn){
// Default to 1 if no count passed or true
if(arguments.length===0||count===true)count=1;
if(count<=0)count=0;
this._maxRetries=count;
this._retries=0;
this._retryCallback=fn;
return this;
};

var ERROR_CODES=[
'ECONNRESET',
'ETIMEDOUT',
'EADDRINFO',
'ESOCKETTIMEDOUT'];


/**
 * Determine if a request should be retried.
 * (Borrowed from segmentio/superagent-retry)
 *
 * @param {Error} err
 * @param {Response} [res]
 * @returns {Boolean}
 */
RequestBase.prototype._shouldRetry=function(err,res){
if(!this._maxRetries||this._retries++>=this._maxRetries){
return false;
}
if(this._retryCallback){
try{
var override=this._retryCallback(err,res);
if(override===true)return true;
if(override===false)return false;
// undefined falls back to defaults
}catch(e){
console.error(e);
}
}
if(res&&res.status&&res.status>=500&&res.status!=501)return true;
if(err){
if(err.code&&~ERROR_CODES.indexOf(err.code))return true;
// Superagent timeout
if(err.timeout&&err.code=='ECONNABORTED')return true;
if(err.crossDomain)return true;
}
return false;
};

/**
 * Retry request
 *
 * @return {Request} for chaining
 * @api private
 */

RequestBase.prototype._retry=function(){

this.clearTimeout();

// node
if(this.req){
this.req=null;
this.req=this.request();
}

this._aborted=false;
this.timedout=false;

return this._end();
};

/**
 * Promise support
 *
 * @param {Function} resolve
 * @param {Function} [reject]
 * @return {Request}
 */

RequestBase.prototype.then=function then(resolve,reject){
if(!this._fullfilledPromise){
var self=this;
if(this._endCalled){
console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises");
}
this._fullfilledPromise=new Promise(function(innerResolve,innerReject){
self.end(function(err,res){
if(err)innerReject(err);else
innerResolve(res);
});
});
}
return this._fullfilledPromise.then(resolve,reject);
};

RequestBase.prototype['catch']=function(cb){
return this.then(undefined,cb);
};

/**
 * Allow for extension
 */

RequestBase.prototype.use=function use(fn){
fn(this);
return this;
};

RequestBase.prototype.ok=function(cb){
if('function'!==typeof cb)throw Error("Callback required");
this._okCallback=cb;
return this;
};

RequestBase.prototype._isResponseOK=function(res){
if(!res){
return false;
}

if(this._okCallback){
return this._okCallback(res);
}

return res.status>=200&&res.status<300;
};

/**
 * Get request header `field`.
 * Case-insensitive.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

RequestBase.prototype.get=function(field){
return this._header[field.toLowerCase()];
};

/**
 * Get case-insensitive header `field` value.
 * This is a deprecated internal API. Use `.get(field)` instead.
 *
 * (getHeader is no longer used internally by the superagent code base)
 *
 * @param {String} field
 * @return {String}
 * @api private
 * @deprecated
 */

RequestBase.prototype.getHeader=RequestBase.prototype.get;

/**
 * Set header `field` to `val`, or multiple fields with one object.
 * Case-insensitive.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.set=function(field,val){
if(isObject(field)){
for(var key in field){
this.set(key,field[key]);
}
return this;
}
this._header[field.toLowerCase()]=val;
this.header[field]=val;
return this;
};

/**
 * Remove header `field`.
 * Case-insensitive.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field
 */
RequestBase.prototype.unset=function(field){
delete this._header[field.toLowerCase()];
delete this.header[field];
return this;
};

/**
 * Write the field `name` and `val`, or multiple fields with one object
 * for "multipart/form-data" request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 *
 * request.post('/upload')
 *   .field({ foo: 'bar', baz: 'qux' })
 *   .end(callback);
 * ```
 *
 * @param {String|Object} name
 * @param {String|Blob|File|Buffer|fs.ReadStream} val
 * @return {Request} for chaining
 * @api public
 */
RequestBase.prototype.field=function(name,val){
// name should be either a string or an object.
if(null===name||undefined===name){
throw new Error('.field(name, val) name can not be empty');
}

if(this._data){
console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
}

if(isObject(name)){
for(var key in name){
this.field(key,name[key]);
}
return this;
}

if(Array.isArray(val)){
for(var i in val){
this.field(name,val[i]);
}
return this;
}

// val should be defined now
if(null===val||undefined===val){
throw new Error('.field(name, val) val can not be empty');
}
if('boolean'===typeof val){
val=''+val;
}
this._getFormData().append(name,val);
return this;
};

/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request}
 * @api public
 */
RequestBase.prototype.abort=function(){
if(this._aborted){
return this;
}
this._aborted=true;
this.xhr&&this.xhr.abort();// browser
this.req&&this.req.abort();// node
this.clearTimeout();
this.emit('abort');
return this;
};

RequestBase.prototype._auth=function(user,pass,options,base64Encoder){
switch(options.type){
case'basic':
this.set('Authorization','Basic '+base64Encoder(user+':'+pass));
break;

case'auto':
this.username=user;
this.password=pass;
break;

case'bearer':// usage would be .auth(accessToken, { type: 'bearer' })
this.set('Authorization','Bearer '+user);
break;}

return this;
};

/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */

RequestBase.prototype.withCredentials=function(on){
// This is browser-only functionality. Node side is no-op.
if(on==undefined)on=true;
this._withCredentials=on;
return this;
};

/**
 * Set the max redirects to `n`. Does noting in browser XHR implementation.
 *
 * @param {Number} n
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.redirects=function(n){
this._maxRedirects=n;
return this;
};

/**
 * Maximum size of buffered response body, in bytes. Counts uncompressed size.
 * Default 200MB.
 *
 * @param {Number} n
 * @return {Request} for chaining
 */
RequestBase.prototype.maxResponseSize=function(n){
if('number'!==typeof n){
throw TypeError("Invalid argument");
}
this._maxResponseSize=n;
return this;
};

/**
 * Convert to a plain javascript object (not JSON string) of scalar properties.
 * Note as this method is designed to return a useful non-this value,
 * it cannot be chained.
 *
 * @return {Object} describing method, url, and data of this request
 * @api public
 */

RequestBase.prototype.toJSON=function(){
return{
method:this.method,
url:this.url,
data:this._data,
headers:this._header};

};

/**
 * Send `data` as the request body, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"}')
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
 *      request.post('/user')
 *        .send('name=tobi')
 *        .send('species=ferret')
 *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.send=function(data){
var isObj=isObject(data);
var type=this._header['content-type'];

if(this._formData){
console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
}

if(isObj&&!this._data){
if(Array.isArray(data)){
this._data=[];
}else if(!this._isHost(data)){
this._data={};
}
}else if(data&&this._data&&this._isHost(this._data)){
throw Error("Can't merge these send calls");
}

// merge
if(isObj&&isObject(this._data)){
for(var key in data){
this._data[key]=data[key];
}
}else if('string'==typeof data){
// default to x-www-form-urlencoded
if(!type)this.type('form');
type=this._header['content-type'];
if('application/x-www-form-urlencoded'==type){
this._data=this._data?
this._data+'&'+data:
data;
}else{
this._data=(this._data||'')+data;
}
}else{
this._data=data;
}

if(!isObj||this._isHost(data)){
return this;
}

// default to json
if(!type)this.type('json');
return this;
};

/**
 * Sort `querystring` by the sort function
 *
 *
 * Examples:
 *
 *       // default order
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery()
 *         .end(callback)
 *
 *       // customized sort function
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery(function(a, b){
 *           return a.length - b.length;
 *         })
 *         .end(callback)
 *
 *
 * @param {Function} sort
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.sortQuery=function(sort){
// _sort default to true but otherwise can be a function or boolean
this._sort=typeof sort==='undefined'?true:sort;
return this;
};

/**
 * Compose querystring to append to req.url
 *
 * @api private
 */
RequestBase.prototype._finalizeQueryString=function(){
var query=this._query.join('&');
if(query){
this.url+=(this.url.indexOf('?')>=0?'&':'?')+query;
}
this._query.length=0;// Makes the call idempotent

if(this._sort){
var index=this.url.indexOf('?');
if(index>=0){
var queryArr=this.url.substring(index+1).split('&');
if('function'===typeof this._sort){
queryArr.sort(this._sort);
}else{
queryArr.sort();
}
this.url=this.url.substring(0,index)+'?'+queryArr.join('&');
}
}
};

// For backwards compat only
RequestBase.prototype._appendQueryString=function(){console.trace("Unsupported");};

/**
 * Invoke callback with timeout error.
 *
 * @api private
 */

RequestBase.prototype._timeoutError=function(reason,timeout,errno){
if(this._aborted){
return;
}
var err=new Error(reason+timeout+'ms exceeded');
err.timeout=timeout;
err.code='ECONNABORTED';
err.errno=errno;
this.timedout=true;
this.abort();
this.callback(err);
};

RequestBase.prototype._setTimeouts=function(){
var self=this;

// deadline
if(this._timeout&&!this._timer){
this._timer=setTimeout(function(){
self._timeoutError('Timeout of ',self._timeout,'ETIME');
},this._timeout);
}
// response timeout
if(this._responseTimeout&&!this._responseTimeoutTimer){
this._responseTimeoutTimer=setTimeout(function(){
self._timeoutError('Response timeout of ',self._responseTimeout,'ETIMEDOUT');
},this._responseTimeout);
}
};


/***/},
/* 37 */
/***/function(module,exports,__webpack_require__){

"use strict";


/**
 * Module dependencies.
 */

var utils=__webpack_require__(38);

/**
 * Expose `ResponseBase`.
 */

module.exports=ResponseBase;

/**
 * Initialize a new `ResponseBase`.
 *
 * @api public
 */

function ResponseBase(obj){
if(obj)return mixin(obj);
}

/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj){
for(var key in ResponseBase.prototype){
obj[key]=ResponseBase.prototype[key];
}
return obj;
}

/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

ResponseBase.prototype.get=function(field){
return this.header[field.toLowerCase()];
};

/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */

ResponseBase.prototype._setHeaderProperties=function(header){
// TODO: moar!
// TODO: make this a util

// content-type
var ct=header['content-type']||'';
this.type=utils.type(ct);

// params
var params=utils.params(ct);
for(var key in params){this[key]=params[key];}

this.links={};

// links
try{
if(header.link){
this.links=utils.parseLinks(header.link);
}
}catch(err){
// ignore
}
};

/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */

ResponseBase.prototype._setStatusProperties=function(status){
var type=status/100|0;

// status / class
this.status=this.statusCode=status;
this.statusType=type;

// basics
this.info=1==type;
this.ok=2==type;
this.redirect=3==type;
this.clientError=4==type;
this.serverError=5==type;
this.error=4==type||5==type?
this.toError():
false;

// sugar
this.created=201==status;
this.accepted=202==status;
this.noContent=204==status;
this.badRequest=400==status;
this.unauthorized=401==status;
this.notAcceptable=406==status;
this.forbidden=403==status;
this.notFound=404==status;
this.unprocessableEntity=422==status;
};


/***/},
/* 38 */
/***/function(module,exports,__webpack_require__){

"use strict";


/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

exports.type=function(str){
return str.split(/ *; */).shift();
};

/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

exports.params=function(str){
return str.split(/ *; */).reduce(function(obj,str){
var parts=str.split(/ *= */);
var key=parts.shift();
var val=parts.shift();

if(key&&val)obj[key]=val;
return obj;
},{});
};

/**
 * Parse Link header fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

exports.parseLinks=function(str){
return str.split(/ *, */).reduce(function(obj,str){
var parts=str.split(/ *; */);
var url=parts[0].slice(1,-1);
var rel=parts[1].split(/ *= */)[1].slice(1,-1);
obj[rel]=url;
return obj;
},{});
};

/**
 * Strip content related fields from `header`.
 *
 * @param {Object} header
 * @return {Object} header
 * @api private
 */

exports.cleanHeader=function(header,changesOrigin){
delete header['content-type'];
delete header['content-length'];
delete header['transfer-encoding'];
delete header['host'];
// secuirty
if(changesOrigin){
delete header['authorization'];
delete header['cookie'];
}
return header;
};


/***/},
/* 39 */
/***/function(module,exports){

function Agent(){
this._defaults=[];
}

["use","on","once","set","query","type","accept","auth","withCredentials","sortQuery","retry","ok","redirects",
"timeout","buffer","serialize","parse","ca","key","pfx","cert"].forEach(function(fn){
/** Default setting for all requests from this agent */
Agent.prototype[fn]=function()/*varargs*/{
this._defaults.push({fn:fn,arguments:arguments});
return this;
};
});

Agent.prototype._setDefaults=function(req){
this._defaults.forEach(function(def){
req[def.fn].apply(req,def.arguments);
});
};

module.exports=Agent;


/***/},
/* 40 */
/***/function(module,exports,__webpack_require__){

"use strict";


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */
function setup(env){
createDebug.debug=createDebug;
createDebug.default=createDebug;
createDebug.coerce=coerce;
createDebug.disable=disable;
createDebug.enable=enable;
createDebug.enabled=enabled;
createDebug.humanize=__webpack_require__(41);
Object.keys(env).forEach(function(key){
createDebug[key]=env[key];
});
/**
  * Active `debug` instances.
  */

createDebug.instances=[];
/**
  * The currently active debug mode names, and names to skip.
  */

createDebug.names=[];
createDebug.skips=[];
/**
  * Map of special "%n" handling functions, for the debug "format" argument.
  *
  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
  */

createDebug.formatters={};
/**
  * Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the for the debug instance to be colored
  * @return {Number|String} An ANSI color code for the given namespace
  * @api private
  */

function selectColor(namespace){
var hash=0;

for(var i=0;i<namespace.length;i++){
hash=(hash<<5)-hash+namespace.charCodeAt(i);
hash|=0;// Convert to 32bit integer
}

return createDebug.colors[Math.abs(hash)%createDebug.colors.length];
}

createDebug.selectColor=selectColor;
/**
  * Create a debugger with the given `namespace`.
  *
  * @param {String} namespace
  * @return {Function}
  * @api public
  */

function createDebug(namespace){
var prevTime;

function debug(){
// Disabled?
if(!debug.enabled){
return;
}

for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){
args[_key]=arguments[_key];
}

var self=debug;// Set `diff` timestamp

var curr=Number(new Date());
var ms=curr-(prevTime||curr);
self.diff=ms;
self.prev=prevTime;
self.curr=curr;
prevTime=curr;
args[0]=createDebug.coerce(args[0]);

if(typeof args[0]!=='string'){
// Anything else let's inspect with %O
args.unshift('%O');
}// Apply any `formatters` transformations


var index=0;
args[0]=args[0].replace(/%([a-zA-Z%])/g,function(match,format){
// If we encounter an escaped % then don't increase the array index
if(match==='%%'){
return match;
}

index++;
var formatter=createDebug.formatters[format];

if(typeof formatter==='function'){
var val=args[index];
match=formatter.call(self,val);// Now we need to remove `args[index]` since it's inlined in the `format`

args.splice(index,1);
index--;
}

return match;
});// Apply env-specific formatting (colors, etc.)

createDebug.formatArgs.call(self,args);
var logFn=self.log||createDebug.log;
logFn.apply(self,args);
}

debug.namespace=namespace;
debug.enabled=createDebug.enabled(namespace);
debug.useColors=createDebug.useColors();
debug.color=selectColor(namespace);
debug.destroy=destroy;
debug.extend=extend;// Debug.formatArgs = formatArgs;
// debug.rawLog = rawLog;
// env-specific initialization logic for debug instances

if(typeof createDebug.init==='function'){
createDebug.init(debug);
}

createDebug.instances.push(debug);
return debug;
}

function destroy(){
var index=createDebug.instances.indexOf(this);

if(index!==-1){
createDebug.instances.splice(index,1);
return true;
}

return false;
}

function extend(namespace,delimiter){
return createDebug(this.namespace+(typeof delimiter==='undefined'?':':delimiter)+namespace);
}
/**
  * Enables a debug mode by namespaces. This can include modes
  * separated by a colon and wildcards.
  *
  * @param {String} namespaces
  * @api public
  */


function enable(namespaces){
createDebug.save(namespaces);
createDebug.names=[];
createDebug.skips=[];
var i;
var split=(typeof namespaces==='string'?namespaces:'').split(/[\s,]+/);
var len=split.length;

for(i=0;i<len;i++){
if(!split[i]){
// ignore empty strings
continue;
}

namespaces=split[i].replace(/\*/g,'.*?');

if(namespaces[0]==='-'){
createDebug.skips.push(new RegExp('^'+namespaces.substr(1)+'$'));
}else{
createDebug.names.push(new RegExp('^'+namespaces+'$'));
}
}

for(i=0;i<createDebug.instances.length;i++){
var instance=createDebug.instances[i];
instance.enabled=createDebug.enabled(instance.namespace);
}
}
/**
  * Disable debug output.
  *
  * @api public
  */


function disable(){
createDebug.enable('');
}
/**
  * Returns true if the given mode name is enabled, false otherwise.
  *
  * @param {String} name
  * @return {Boolean}
  * @api public
  */


function enabled(name){
if(name[name.length-1]==='*'){
return true;
}

var i;
var len;

for(i=0,len=createDebug.skips.length;i<len;i++){
if(createDebug.skips[i].test(name)){
return false;
}
}

for(i=0,len=createDebug.names.length;i<len;i++){
if(createDebug.names[i].test(name)){
return true;
}
}

return false;
}
/**
  * Coerce `val`.
  *
  * @param {Mixed} val
  * @return {Mixed}
  * @api private
  */


function coerce(val){
if(val instanceof Error){
return val.stack||val.message;
}

return val;
}

createDebug.enable(createDebug.load());
return createDebug;
}

module.exports=setup;



/***/},
/* 41 */
/***/function(module,exports){

/**
 * Helpers.
 */

var s=1000;
var m=s*60;
var h=m*60;
var d=h*24;
var w=d*7;
var y=d*365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports=function(val,options){
options=options||{};
var type=typeof val;
if(type==='string'&&val.length>0){
return parse(val);
}else if(type==='number'&&isNaN(val)===false){
return options.long?fmtLong(val):fmtShort(val);
}
throw new Error(
'val is not a non-empty string or a valid number. val='+
JSON.stringify(val));

};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str){
str=String(str);
if(str.length>100){
return;
}
var match=/^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
str);

if(!match){
return;
}
var n=parseFloat(match[1]);
var type=(match[2]||'ms').toLowerCase();
switch(type){
case'years':
case'year':
case'yrs':
case'yr':
case'y':
return n*y;
case'weeks':
case'week':
case'w':
return n*w;
case'days':
case'day':
case'd':
return n*d;
case'hours':
case'hour':
case'hrs':
case'hr':
case'h':
return n*h;
case'minutes':
case'minute':
case'mins':
case'min':
case'm':
return n*m;
case'seconds':
case'second':
case'secs':
case'sec':
case's':
return n*s;
case'milliseconds':
case'millisecond':
case'msecs':
case'msec':
case'ms':
return n;
default:
return undefined;}

}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms){
var msAbs=Math.abs(ms);
if(msAbs>=d){
return Math.round(ms/d)+'d';
}
if(msAbs>=h){
return Math.round(ms/h)+'h';
}
if(msAbs>=m){
return Math.round(ms/m)+'m';
}
if(msAbs>=s){
return Math.round(ms/s)+'s';
}
return ms+'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms){
var msAbs=Math.abs(ms);
if(msAbs>=d){
return plural(ms,msAbs,d,'day');
}
if(msAbs>=h){
return plural(ms,msAbs,h,'hour');
}
if(msAbs>=m){
return plural(ms,msAbs,m,'minute');
}
if(msAbs>=s){
return plural(ms,msAbs,s,'second');
}
return ms+' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms,msAbs,n,name){
var isPlural=msAbs>=n*1.5;
return Math.round(ms/n)+' '+name+(isPlural?'s':'');
}


/***/},
/* 42 */
/***/function(module,exports,__webpack_require__){

/* WEBPACK VAR INJECTION */(function(global){var require;/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.3+b33f4734
 */

(function(global,factory){
true?module.exports=factory():
undefined;
})(this,function(){'use strict';

function objectOrFunction(x){
var type=typeof x;
return x!==null&&(type==='object'||type==='function');
}

function isFunction(x){
return typeof x==='function';
}



var _isArray=void 0;
if(Array.isArray){
_isArray=Array.isArray;
}else{
_isArray=function _isArray(x){
return Object.prototype.toString.call(x)==='[object Array]';
};
}

var isArray=_isArray;

var len=0;
var vertxNext=void 0;
var customSchedulerFn=void 0;

var asap=function asap(callback,arg){
queue[len]=callback;
queue[len+1]=arg;
len+=2;
if(len===2){
// If len is 2, that means that we need to schedule an async flush.
// If additional callbacks are queued before the queue is flushed, they
// will be processed by this flush that we are scheduling.
if(customSchedulerFn){
customSchedulerFn(flush);
}else{
scheduleFlush();
}
}
};

function setScheduler(scheduleFn){
customSchedulerFn=scheduleFn;
}

function setAsap(asapFn){
asap=asapFn;
}

var browserWindow=typeof window!=='undefined'?window:undefined;
var browserGlobal=browserWindow||{};
var BrowserMutationObserver=browserGlobal.MutationObserver||browserGlobal.WebKitMutationObserver;
var isNode=typeof self==='undefined'&&typeof process!=='undefined'&&{}.toString.call(process)==='[object process]';

// test for web worker but not in IE10
var isWorker=typeof Uint8ClampedArray!=='undefined'&&typeof importScripts!=='undefined'&&typeof MessageChannel!=='undefined';

// node
function useNextTick(){
// node version 0.10.x displays a deprecation warning when nextTick is used recursively
// see https://github.com/cujojs/when/issues/410 for details
return function(){
return process.nextTick(flush);
};
}

// vertx
function useVertxTimer(){
if(typeof vertxNext!=='undefined'){
return function(){
vertxNext(flush);
};
}

return useSetTimeout();
}

function useMutationObserver(){
var iterations=0;
var observer=new BrowserMutationObserver(flush);
var node=document.createTextNode('');
observer.observe(node,{characterData:true});

return function(){
node.data=iterations=++iterations%2;
};
}

// web worker
function useMessageChannel(){
var channel=new MessageChannel();
channel.port1.onmessage=flush;
return function(){
return channel.port2.postMessage(0);
};
}

function useSetTimeout(){
// Store setTimeout reference so es6-promise will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var globalSetTimeout=setTimeout;
return function(){
return globalSetTimeout(flush,1);
};
}

var queue=new Array(1000);
function flush(){
for(var i=0;i<len;i+=2){
var callback=queue[i];
var arg=queue[i+1];

callback(arg);

queue[i]=undefined;
queue[i+1]=undefined;
}

len=0;
}

function attemptVertx(){
try{
var r=require;
var vertx=__webpack_require__(43);
vertxNext=vertx.runOnLoop||vertx.runOnContext;
return useVertxTimer();
}catch(e){
return useSetTimeout();
}
}

var scheduleFlush=void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if(isNode){
scheduleFlush=useNextTick();
}else if(BrowserMutationObserver){
scheduleFlush=useMutationObserver();
}else if(isWorker){
scheduleFlush=useMessageChannel();
}else if(browserWindow===undefined&&"function"==='function'){
scheduleFlush=attemptVertx();
}else{
scheduleFlush=useSetTimeout();
}

function then(onFulfillment,onRejection){
var parent=this;

var child=new this.constructor(noop);

if(child[PROMISE_ID]===undefined){
makePromise(child);
}

var _state=parent._state;


if(_state){
var callback=arguments[_state-1];
asap(function(){
return invokeCallback(_state,child,callback,parent._result);
});
}else{
subscribe(parent,child,onFulfillment,onRejection);
}

return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object){
/*jshint validthis:true */
var Constructor=this;

if(object&&typeof object==='object'&&object.constructor===Constructor){
return object;
}

var promise=new Constructor(noop);
resolve(promise,object);
return promise;
}

var PROMISE_ID=Math.random().toString(36).substring(2);

function noop(){}

var PENDING=void 0;
var FULFILLED=1;
var REJECTED=2;

var TRY_CATCH_ERROR={error:null};

function selfFulfillment(){
return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn(){
return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise){
try{
return promise.then;
}catch(error){
TRY_CATCH_ERROR.error=error;
return TRY_CATCH_ERROR;
}
}

function tryThen(then$$1,value,fulfillmentHandler,rejectionHandler){
try{
then$$1.call(value,fulfillmentHandler,rejectionHandler);
}catch(e){
return e;
}
}

function handleForeignThenable(promise,thenable,then$$1){
asap(function(promise){
var sealed=false;
var error=tryThen(then$$1,thenable,function(value){
if(sealed){
return;
}
sealed=true;
if(thenable!==value){
resolve(promise,value);
}else{
fulfill(promise,value);
}
},function(reason){
if(sealed){
return;
}
sealed=true;

reject(promise,reason);
},'Settle: '+(promise._label||' unknown promise'));

if(!sealed&&error){
sealed=true;
reject(promise,error);
}
},promise);
}

function handleOwnThenable(promise,thenable){
if(thenable._state===FULFILLED){
fulfill(promise,thenable._result);
}else if(thenable._state===REJECTED){
reject(promise,thenable._result);
}else{
subscribe(thenable,undefined,function(value){
return resolve(promise,value);
},function(reason){
return reject(promise,reason);
});
}
}

function handleMaybeThenable(promise,maybeThenable,then$$1){
if(maybeThenable.constructor===promise.constructor&&then$$1===then&&maybeThenable.constructor.resolve===resolve$1){
handleOwnThenable(promise,maybeThenable);
}else{
if(then$$1===TRY_CATCH_ERROR){
reject(promise,TRY_CATCH_ERROR.error);
TRY_CATCH_ERROR.error=null;
}else if(then$$1===undefined){
fulfill(promise,maybeThenable);
}else if(isFunction(then$$1)){
handleForeignThenable(promise,maybeThenable,then$$1);
}else{
fulfill(promise,maybeThenable);
}
}
}

function resolve(promise,value){
if(promise===value){
reject(promise,selfFulfillment());
}else if(objectOrFunction(value)){
handleMaybeThenable(promise,value,getThen(value));
}else{
fulfill(promise,value);
}
}

function publishRejection(promise){
if(promise._onerror){
promise._onerror(promise._result);
}

publish(promise);
}

function fulfill(promise,value){
if(promise._state!==PENDING){
return;
}

promise._result=value;
promise._state=FULFILLED;

if(promise._subscribers.length!==0){
asap(publish,promise);
}
}

function reject(promise,reason){
if(promise._state!==PENDING){
return;
}
promise._state=REJECTED;
promise._result=reason;

asap(publishRejection,promise);
}

function subscribe(parent,child,onFulfillment,onRejection){
var _subscribers=parent._subscribers;
var length=_subscribers.length;


parent._onerror=null;

_subscribers[length]=child;
_subscribers[length+FULFILLED]=onFulfillment;
_subscribers[length+REJECTED]=onRejection;

if(length===0&&parent._state){
asap(publish,parent);
}
}

function publish(promise){
var subscribers=promise._subscribers;
var settled=promise._state;

if(subscribers.length===0){
return;
}

var child=void 0,
callback=void 0,
detail=promise._result;

for(var i=0;i<subscribers.length;i+=3){
child=subscribers[i];
callback=subscribers[i+settled];

if(child){
invokeCallback(settled,child,callback,detail);
}else{
callback(detail);
}
}

promise._subscribers.length=0;
}

function tryCatch(callback,detail){
try{
return callback(detail);
}catch(e){
TRY_CATCH_ERROR.error=e;
return TRY_CATCH_ERROR;
}
}

function invokeCallback(settled,promise,callback,detail){
var hasCallback=isFunction(callback),
value=void 0,
error=void 0,
succeeded=void 0,
failed=void 0;

if(hasCallback){
value=tryCatch(callback,detail);

if(value===TRY_CATCH_ERROR){
failed=true;
error=value.error;
value.error=null;
}else{
succeeded=true;
}

if(promise===value){
reject(promise,cannotReturnOwn());
return;
}
}else{
value=detail;
succeeded=true;
}

if(promise._state!==PENDING){
// noop
}else if(hasCallback&&succeeded){
resolve(promise,value);
}else if(failed){
reject(promise,error);
}else if(settled===FULFILLED){
fulfill(promise,value);
}else if(settled===REJECTED){
reject(promise,value);
}
}

function initializePromise(promise,resolver){
try{
resolver(function resolvePromise(value){
resolve(promise,value);
},function rejectPromise(reason){
reject(promise,reason);
});
}catch(e){
reject(promise,e);
}
}

var id=0;
function nextId(){
return id++;
}

function makePromise(promise){
promise[PROMISE_ID]=id++;
promise._state=undefined;
promise._result=undefined;
promise._subscribers=[];
}

function validationError(){
return new Error('Array Methods must be provided an Array');
}

var Enumerator=function(){
function Enumerator(Constructor,input){
this._instanceConstructor=Constructor;
this.promise=new Constructor(noop);

if(!this.promise[PROMISE_ID]){
makePromise(this.promise);
}

if(isArray(input)){
this.length=input.length;
this._remaining=input.length;

this._result=new Array(this.length);

if(this.length===0){
fulfill(this.promise,this._result);
}else{
this.length=this.length||0;
this._enumerate(input);
if(this._remaining===0){
fulfill(this.promise,this._result);
}
}
}else{
reject(this.promise,validationError());
}
}

Enumerator.prototype._enumerate=function _enumerate(input){
for(var i=0;this._state===PENDING&&i<input.length;i++){
this._eachEntry(input[i],i);
}
};

Enumerator.prototype._eachEntry=function _eachEntry(entry,i){
var c=this._instanceConstructor;
var resolve$$1=c.resolve;


if(resolve$$1===resolve$1){
var _then=getThen(entry);

if(_then===then&&entry._state!==PENDING){
this._settledAt(entry._state,i,entry._result);
}else if(typeof _then!=='function'){
this._remaining--;
this._result[i]=entry;
}else if(c===Promise$1){
var promise=new c(noop);
handleMaybeThenable(promise,entry,_then);
this._willSettleAt(promise,i);
}else{
this._willSettleAt(new c(function(resolve$$1){
return resolve$$1(entry);
}),i);
}
}else{
this._willSettleAt(resolve$$1(entry),i);
}
};

Enumerator.prototype._settledAt=function _settledAt(state,i,value){
var promise=this.promise;


if(promise._state===PENDING){
this._remaining--;

if(state===REJECTED){
reject(promise,value);
}else{
this._result[i]=value;
}
}

if(this._remaining===0){
fulfill(promise,this._result);
}
};

Enumerator.prototype._willSettleAt=function _willSettleAt(promise,i){
var enumerator=this;

subscribe(promise,undefined,function(value){
return enumerator._settledAt(FULFILLED,i,value);
},function(reason){
return enumerator._settledAt(REJECTED,i,reason);
});
};

return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries){
return new Enumerator(this,entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries){
/*jshint validthis:true */
var Constructor=this;

if(!isArray(entries)){
return new Constructor(function(_,reject){
return reject(new TypeError('You must pass an array to race.'));
});
}else{
return new Constructor(function(resolve,reject){
var length=entries.length;
for(var i=0;i<length;i++){
Constructor.resolve(entries[i]).then(resolve,reject);
}
});
}
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason){
/*jshint validthis:true */
var Constructor=this;
var promise=new Constructor(noop);
reject(promise,reason);
return promise;
}

function needsResolver(){
throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew(){
throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1=function(){
function Promise(resolver){
this[PROMISE_ID]=nextId();
this._result=this._state=undefined;
this._subscribers=[];

if(noop!==resolver){
typeof resolver!=='function'&&needsResolver();
this instanceof Promise?initializePromise(this,resolver):needsNew();
}
}

/**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

/**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


Promise.prototype.catch=function _catch(onRejection){
return this.then(null,onRejection);
};

/**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


Promise.prototype.finally=function _finally(callback){
var promise=this;
var constructor=promise.constructor;

return promise.then(function(value){
return constructor.resolve(callback()).then(function(){
return value;
});
},function(reason){
return constructor.resolve(callback()).then(function(){
throw reason;
});
});
};

return Promise;
}();

Promise$1.prototype.then=then;
Promise$1.all=all;
Promise$1.race=race;
Promise$1.resolve=resolve$1;
Promise$1.reject=reject$1;
Promise$1._setScheduler=setScheduler;
Promise$1._setAsap=setAsap;
Promise$1._asap=asap;

/*global self*/
function polyfill(){
var local=void 0;

if(typeof global!=='undefined'){
local=global;
}else if(typeof self!=='undefined'){
local=self;
}else{
try{
local=Function('return this')();
}catch(e){
throw new Error('polyfill failed because global object is unavailable in this environment');
}
}

var P=local.Promise;

if(P){
var promiseToString=null;
try{
promiseToString=Object.prototype.toString.call(P.resolve());
}catch(e){
// silently ignored
}

if(promiseToString==='[object Promise]'&&!P.cast){
return;
}
}

local.Promise=Promise$1;
}

// Strange compat..
Promise$1.polyfill=polyfill;
Promise$1.Promise=Promise$1;

return Promise$1;

});





/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(6));

/***/},
/* 43 */
/***/function(module,exports){

/* (ignored) */

/***/},
/* 44 */
/***/function(module,exports,__webpack_require__){

"use strict";
/* WEBPACK VAR INJECTION */(function(global){

var _=__webpack_require__(0);

// interface Storage {
//   readonly attribute boolean async;
//   string getItem(string key);
//   void setItem(string key, string value);
//   void removeItem(string key);
//   void clear();
//   Promise getItemAsync(string key);
//   Promise setItemAsync(string key, string value);
//   Promise removeItemAsync(string key);
//   Promise clearAsync();
// }
var Storage={};
var apiNames=['getItem','setItem','removeItem','clear'];

var localStorage=global.localStorage;

try{
var testKey='__storejs__';
localStorage.setItem(testKey,testKey);
if(localStorage.getItem(testKey)!=testKey){
throw new Error();
}
localStorage.removeItem(testKey);
}catch(e){
localStorage=__webpack_require__(45);
}

// in browser, `localStorage.async = false` will excute `localStorage.setItem('async', false)`
_(apiNames).each(function(apiName){
Storage[apiName]=function(){
return localStorage[apiName].apply(localStorage,arguments);
};
});
Storage.async=false;

module.exports=Storage;
/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(6));

/***/},
/* 45 */
/***/function(module,exports,__webpack_require__){

(function(root){
var localStorageMemory={};
var cache={};

/**
   * number of stored items.
   */
localStorageMemory.length=0;

/**
   * returns item for passed key, or null
   *
   * @para {String} key
   *       name of item to be returned
   * @returns {String|null}
   */
localStorageMemory.getItem=function(key){
if(key in cache){
return cache[key];
}

return null;
};

/**
   * sets item for key to passed value, as String
   *
   * @para {String} key
   *       name of item to be set
   * @para {String} value
   *       value, will always be turned into a String
   * @returns {undefined}
   */
localStorageMemory.setItem=function(key,value){
if(typeof value==='undefined'){
localStorageMemory.removeItem(key);
}else{
if(!cache.hasOwnProperty(key)){
localStorageMemory.length++;
}

cache[key]=''+value;
}
};

/**
   * removes item for passed key
   *
   * @para {String} key
   *       name of item to be removed
   * @returns {undefined}
   */
localStorageMemory.removeItem=function(key){
if(cache.hasOwnProperty(key)){
delete cache[key];
localStorageMemory.length--;
}
};

/**
   * returns name of key at passed index
   *
   * @para {Number} index
   *       Position for key to be returned (starts at 0)
   * @returns {String|null}
   */
localStorageMemory.key=function(index){
return Object.keys(cache)[index]||null;
};

/**
   * removes all stored items and sets length to 0
   *
   * @returns {undefined}
   */
localStorageMemory.clear=function(){
cache={};
localStorageMemory.length=0;
};

if(true){
module.exports=localStorageMemory;
}else{}
})(this);


/***/},
/* 46 */
/***/function(module,exports,__webpack_require__){

"use strict";


var AV=__webpack_require__(5);
var AppRouter=__webpack_require__(47);

var _require=__webpack_require__(3),
isNullOrUndefined=_require.isNullOrUndefined;

var _require2=__webpack_require__(0),
extend=_require2.extend,
isObject=_require2.isObject;

var fillServerURLs=function fillServerURLs(url){
return{
push:url,
stats:url,
engine:url,
api:url};

};

function getDefaultServerURLs(appId){
var domain=void 0;
var id=appId.slice(0,8).toLowerCase();
switch(appId.slice(-9)){
case'-9Nh9j0Va':
// TAB
domain='lncldapi.com';
break;
case'-MdYXbMMI':
// US
domain='lncldglobal.com';
break;
default:
domain='lncld.net';}

return{
push:'https://'+id+'.push.'+domain,
stats:'https://'+id+'.stats.'+domain,
engine:'https://'+id+'.engine.'+domain,
api:'https://'+id+'.api.'+domain};

}

var _disableAppRouter=false;

/**
 * URLs for services
 * @typedef {Object} ServerURLs
 * @property {String} [api] serverURL for api service
 * @property {String} [engine] serverURL for engine service
 * @property {String} [stats] serverURL for stats service
 * @property {String} [push] serverURL for push service
 */

/**
 * Call this method first to set up your authentication tokens for AV.
 * You can get your app keys from the LeanCloud dashboard on http://leancloud.cn .
 * @function AV.init
 * @param {Object} options
 * @param {String} options.appId application id
 * @param {String} options.appKey application key
 * @param {String} [options.masterKey] application master key
 * @param {Boolean} [options.production]
 * @param {String|ServerURLs} [options.serverURLs] URLs for services. if a string was given, it will be applied for all services.
 * @param {Boolean} [options.disableCurrentUser]
 */
AV.init=function init(options){
if(!isObject(options)){
return AV.init({
appId:options,
appKey:arguments.length<=1?undefined:arguments[1],
masterKey:arguments.length<=2?undefined:arguments[2]});

}
var appId=options.appId,
appKey=options.appKey,
masterKey=options.masterKey,
hookKey=options.hookKey,
serverURLs=options.serverURLs,
disableCurrentUser=options.disableCurrentUser,
production=options.production,
realtime=options.realtime;

if(AV.applicationId)throw new Error('SDK is already initialized.');
if(!appId)throw new TypeError('appId must be a string');
if(!appKey)throw new TypeError('appKey must be a string');
if( true&&masterKey)console.warn('MasterKey is not supposed to be used in browser.');
AV._config.applicationId=appId;
AV._config.applicationKey=appKey;
AV._config.masterKey=masterKey;
if(false){}
if(typeof production!=='undefined')AV._config.production=production;
if(typeof disableCurrentUser!=='undefined')AV._config.disableCurrentUser=disableCurrentUser;
AV._appRouter=new AppRouter(AV);
var disableAppRouter=_disableAppRouter||typeof serverURLs!=='undefined';
AV._setServerURLs(extend({},getDefaultServerURLs(appId),AV._config.serverURLs,typeof serverURLs==='string'?fillServerURLs(serverURLs):serverURLs),disableAppRouter);
if(realtime){
AV._config.realtime=realtime;
}else if(AV._sharedConfig.liveQueryRealtime){
AV._config.realtime=new AV._sharedConfig.liveQueryRealtime({
appId:appId,
appKey:appKey});

}
};

// If we're running in node.js, allow using the master key.
if(false){}

/**
 * Call this method to set production environment variable.
 * @function AV.setProduction
 * @param {Boolean} production True is production environment,and
 *  it's true by default.
 */
AV.setProduction=function(production){
if(!isNullOrUndefined(production)){
AV._config.production=production?1:0;
}else{
// change to default value
AV._config.production=null;
}
};

AV._setServerURLs=function(urls){
var disableAppRouter=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;

if(typeof urls!=='string'){
extend(AV._config.serverURLs,urls);
}else{
AV._config.serverURLs=fillServerURLs(urls);
}
if(disableAppRouter){
if(AV._appRouter){
AV._appRouter.disable();
}else{
_disableAppRouter=true;
}
}
};
/**
 * Set server URLs for services.
 * @function AV.setServerURLs
 * @since 3.0.0
 * @param {String|ServerURLs} urls URLs for services. if a string was given, it will be applied for all services.
 * You can also set them when initializing SDK with `options.serverURLs`
 */
AV.setServerURLs=function(urls){
return AV._setServerURLs(urls);
};

AV.keepErrorRawMessage=function(value){
AV._sharedConfig.keepErrorRawMessage=value;
};

/**
 * Set a deadline for requests to complete.
 * Note that file upload requests are not affected.
 * @function AV.setRequestTimeout
 * @since 3.6.0
 * @param {number} ms
 */
AV.setRequestTimeout=function(ms){
AV._config.requestTimeout=ms;
};

// backword compatible
AV.initialize=AV.init;

var defineConfig=function defineConfig(property){
return Object.defineProperty(AV,property,{
get:function get(){
return AV._config[property];
},
set:function set(value){
AV._config[property]=value;
}});

};

['applicationId','applicationKey','masterKey','hookKey'].forEach(defineConfig);

/***/},
/* 47 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _require=__webpack_require__(3),
ajax=_require.ajax;

var Cache=__webpack_require__(21);

function AppRouter(AV){
var _this=this;

this.AV=AV;
this.lockedUntil=0;
Cache.getAsync('serverURLs').then(function(data){
if(_this.disabled)return;
if(!data)return _this.lock(0);
var serverURLs=data.serverURLs,
lockedUntil=data.lockedUntil;

_this.AV._setServerURLs(serverURLs,false);
_this.lockedUntil=lockedUntil;
}).catch(function(){
return _this.lock(0);
});
}

AppRouter.prototype.disable=function disable(){
this.disabled=true;
};
AppRouter.prototype.lock=function lock(ttl){
this.lockedUntil=Date.now()+ttl;
};
AppRouter.prototype.refresh=function refresh(){
var _this2=this;

if(this.disabled)return;
if(Date.now()<this.lockedUntil)return;
this.lock(10);
var url='https://app-router.leancloud.cn/2/route';
return ajax({
method:'get',
url:url,
query:{
appId:this.AV.applicationId}}).

then(function(servers){
if(_this2.disabled)return;
var ttl=servers.ttl;
if(!ttl)throw new Error('missing ttl');
ttl=ttl*1000;
var protocal='https://';
var serverURLs={
push:protocal+servers.push_server,
stats:protocal+servers.stats_server,
engine:protocal+servers.engine_server,
api:protocal+servers.api_server};

_this2.AV._setServerURLs(serverURLs,false);
_this2.lock(ttl);
return Cache.setAsync('serverURLs',{
serverURLs:serverURLs,
lockedUntil:_this2.lockedUntil},
ttl);
}).catch(function(error){
// bypass all errors
console.warn('refresh server URLs failed: '+error.message);
_this2.lock(600);
});
};

module.exports=AppRouter;

/***/},
/* 48 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _=__webpack_require__(0);

module.exports=function(AV){
var eventSplitter=/\s+/;
var slice=Array.prototype.slice;

/**
   * @class
   *
   * <p>AV.Events is a fork of Backbone's Events module, provided for your
   * convenience.</p>
   *
   * <p>A module that can be mixed in to any object in order to provide
   * it with custom events. You may bind callback functions to an event
   * with `on`, or remove these functions with `off`.
   * Triggering an event fires all callbacks in the order that `on` was
   * called.
   *
   * @private
   * @example
   * var object = {};
   * _.extend(object, AV.Events);
   * object.on('expand', function(){ alert('expanded'); });
   * object.trigger('expand');</pre></p>
   *
   */
AV.Events={
/**
     * Bind one or more space separated events, `events`, to a `callback`
     * function. Passing `"all"` will bind the callback to all events fired.
     */
on:function on(events,callback,context){
var calls,event,node,tail,list;
if(!callback){
return this;
}
events=events.split(eventSplitter);
calls=this._callbacks||(this._callbacks={});

// Create an immutable callback list, allowing traversal during
// modification.  The tail is an empty object that will always be used
// as the next node.
event=events.shift();
while(event){
list=calls[event];
node=list?list.tail:{};
node.next=tail={};
node.context=context;
node.callback=callback;
calls[event]={tail:tail,next:list?list.next:node};
event=events.shift();
}

return this;
},

/**
     * Remove one or many callbacks. If `context` is null, removes all callbacks
     * with that function. If `callback` is null, removes all callbacks for the
     * event. If `events` is null, removes all bound callbacks for all events.
     */
off:function off(events,callback,context){
var event,calls,node,tail,cb,ctx;

// No events, or removing *all* events.
if(!(calls=this._callbacks)){
return;
}
if(!(events||callback||context)){
delete this._callbacks;
return this;
}

// Loop through the listed events and contexts, splicing them out of the
// linked list of callbacks if appropriate.
events=events?events.split(eventSplitter):_.keys(calls);
event=events.shift();
while(event){
node=calls[event];
delete calls[event];
if(!node||!(callback||context)){
continue;
}
// Create a new list, omitting the indicated callbacks.
tail=node.tail;
node=node.next;
while(node!==tail){
cb=node.callback;
ctx=node.context;
if(callback&&cb!==callback||context&&ctx!==context){
this.on(event,cb,ctx);
}
node=node.next;
}
event=events.shift();
}

return this;
},

/**
     * Trigger one or many events, firing all bound callbacks. Callbacks are
     * passed the same arguments as `trigger` is, apart from the event name
     * (unless you're listening on `"all"`, which will cause your callback to
     * receive the true name of the event as the first argument).
     */
trigger:function trigger(events){
var event,node,calls,tail,args,all,rest;
if(!(calls=this._callbacks)){
return this;
}
all=calls.all;
events=events.split(eventSplitter);
rest=slice.call(arguments,1);

// For each event, walk through the linked list of callbacks twice,
// first to trigger the event, then to trigger any `"all"` callbacks.
event=events.shift();
while(event){
node=calls[event];
if(node){
tail=node.tail;
while((node=node.next)!==tail){
node.callback.apply(node.context||this,rest);
}
}
node=all;
if(node){
tail=node.tail;
args=[event].concat(rest);
while((node=node.next)!==tail){
node.callback.apply(node.context||this,args);
}
}
event=events.shift();
}

return this;
}};


/**
   * @function
   */
AV.Events.bind=AV.Events.on;

/**
   * @function
   */
AV.Events.unbind=AV.Events.off;
};

/***/},
/* 49 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _=__webpack_require__(0);
var Promise=__webpack_require__(1);

/*global navigator: false */
module.exports=function(AV){
/**
   * Creates a new GeoPoint with any of the following forms:<br>
   * @example
   * new GeoPoint(otherGeoPoint)
   * new GeoPoint(30, 30)
   * new GeoPoint([30, 30])
   * new GeoPoint({latitude: 30, longitude: 30})
   * new GeoPoint()  // defaults to (0, 0)
   * @class
   *
   * <p>Represents a latitude / longitude point that may be associated
   * with a key in a AVObject or used as a reference point for geo queries.
   * This allows proximity-based queries on the key.</p>
   *
   * <p>Only one key in a class may contain a GeoPoint.</p>
   *
   * <p>Example:<pre>
   *   var point = new AV.GeoPoint(30.0, -20.0);
   *   var object = new AV.Object("PlaceObject");
   *   object.set("location", point);
   *   object.save();</pre></p>
   */
AV.GeoPoint=function(arg1,arg2){
if(_.isArray(arg1)){
AV.GeoPoint._validate(arg1[0],arg1[1]);
this.latitude=arg1[0];
this.longitude=arg1[1];
}else if(_.isObject(arg1)){
AV.GeoPoint._validate(arg1.latitude,arg1.longitude);
this.latitude=arg1.latitude;
this.longitude=arg1.longitude;
}else if(_.isNumber(arg1)&&_.isNumber(arg2)){
AV.GeoPoint._validate(arg1,arg2);
this.latitude=arg1;
this.longitude=arg2;
}else{
this.latitude=0;
this.longitude=0;
}

// Add properties so that anyone using Webkit or Mozilla will get an error
// if they try to set values that are out of bounds.
var self=this;
if(this.__defineGetter__&&this.__defineSetter__){
// Use _latitude and _longitude to actually store the values, and add
// getters and setters for latitude and longitude.
this._latitude=this.latitude;
this._longitude=this.longitude;
this.__defineGetter__('latitude',function(){
return self._latitude;
});
this.__defineGetter__('longitude',function(){
return self._longitude;
});
this.__defineSetter__('latitude',function(val){
AV.GeoPoint._validate(val,self.longitude);
self._latitude=val;
});
this.__defineSetter__('longitude',function(val){
AV.GeoPoint._validate(self.latitude,val);
self._longitude=val;
});
}
};

/**
   * @lends AV.GeoPoint.prototype
   * @property {float} latitude North-south portion of the coordinate, in range
   *   [-90, 90].  Throws an exception if set out of range in a modern browser.
   * @property {float} longitude East-west portion of the coordinate, in range
   *   [-180, 180].  Throws if set out of range in a modern browser.
   */

/**
   * Throws an exception if the given lat-long is out of bounds.
   * @private
   */
AV.GeoPoint._validate=function(latitude,longitude){
if(latitude<-90.0){
throw new Error('AV.GeoPoint latitude '+latitude+' < -90.0.');
}
if(latitude>90.0){
throw new Error('AV.GeoPoint latitude '+latitude+' > 90.0.');
}
if(longitude<-180.0){
throw new Error('AV.GeoPoint longitude '+longitude+' < -180.0.');
}
if(longitude>180.0){
throw new Error('AV.GeoPoint longitude '+longitude+' > 180.0.');
}
};

/**
   * Creates a GeoPoint with the user's current location, if available.
   * @return {Promise.<AV.GeoPoint>}
   */
AV.GeoPoint.current=function(){
return new Promise(function(resolve,reject){
navigator.geolocation.getCurrentPosition(function(location){
resolve(new AV.GeoPoint({
latitude:location.coords.latitude,
longitude:location.coords.longitude}));

},reject);
});
};

_.extend(AV.GeoPoint.prototype,
/** @lends AV.GeoPoint.prototype */{
/**
     * Returns a JSON representation of the GeoPoint, suitable for AV.
     * @return {Object}
     */
toJSON:function toJSON(){
AV.GeoPoint._validate(this.latitude,this.longitude);
return{
__type:'GeoPoint',
latitude:this.latitude,
longitude:this.longitude};

},

/**
     * Returns the distance from this GeoPoint to another in radians.
     * @param {AV.GeoPoint} point the other AV.GeoPoint.
     * @return {Number}
     */
radiansTo:function radiansTo(point){
var d2r=Math.PI/180.0;
var lat1rad=this.latitude*d2r;
var long1rad=this.longitude*d2r;
var lat2rad=point.latitude*d2r;
var long2rad=point.longitude*d2r;
var deltaLat=lat1rad-lat2rad;
var deltaLong=long1rad-long2rad;
var sinDeltaLatDiv2=Math.sin(deltaLat/2);
var sinDeltaLongDiv2=Math.sin(deltaLong/2);
// Square of half the straight line chord distance between both points.
var a=sinDeltaLatDiv2*sinDeltaLatDiv2+Math.cos(lat1rad)*Math.cos(lat2rad)*sinDeltaLongDiv2*sinDeltaLongDiv2;
a=Math.min(1.0,a);
return 2*Math.asin(Math.sqrt(a));
},

/**
     * Returns the distance from this GeoPoint to another in kilometers.
     * @param {AV.GeoPoint} point the other AV.GeoPoint.
     * @return {Number}
     */
kilometersTo:function kilometersTo(point){
return this.radiansTo(point)*6371.0;
},

/**
     * Returns the distance from this GeoPoint to another in miles.
     * @param {AV.GeoPoint} point the other AV.GeoPoint.
     * @return {Number}
     */
milesTo:function milesTo(point){
return this.radiansTo(point)*3958.8;
}});

};

/***/},
/* 50 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _=__webpack_require__(0);

module.exports=function(AV){
var PUBLIC_KEY='*';

/**
   * Creates a new ACL.
   * If no argument is given, the ACL has no permissions for anyone.
   * If the argument is a AV.User, the ACL will have read and write
   *   permission for only that user.
   * If the argument is any other JSON object, that object will be interpretted
   *   as a serialized ACL created with toJSON().
   * @see AV.Object#setACL
   * @class
   *
   * <p>An ACL, or Access Control List can be added to any
   * <code>AV.Object</code> to restrict access to only a subset of users
   * of your application.</p>
   */
AV.ACL=function(arg1){
var self=this;
self.permissionsById={};
if(_.isObject(arg1)){
if(arg1 instanceof AV.User){
self.setReadAccess(arg1,true);
self.setWriteAccess(arg1,true);
}else{
if(_.isFunction(arg1)){
throw new Error('AV.ACL() called with a function.  Did you forget ()?');
}
AV._objectEach(arg1,function(accessList,userId){
if(!_.isString(userId)){
throw new Error('Tried to create an ACL with an invalid userId.');
}
self.permissionsById[userId]={};
AV._objectEach(accessList,function(allowed,permission){
if(permission!=='read'&&permission!=='write'){
throw new Error('Tried to create an ACL with an invalid permission type.');
}
if(!_.isBoolean(allowed)){
throw new Error('Tried to create an ACL with an invalid permission value.');
}
self.permissionsById[userId][permission]=allowed;
});
});
}
}
};

/**
   * Returns a JSON-encoded version of the ACL.
   * @return {Object}
   */
AV.ACL.prototype.toJSON=function(){
return _.clone(this.permissionsById);
};

AV.ACL.prototype._setAccess=function(accessType,userId,allowed){
if(userId instanceof AV.User){
userId=userId.id;
}else if(userId instanceof AV.Role){
userId='role:'+userId.getName();
}
if(!_.isString(userId)){
throw new Error('userId must be a string.');
}
if(!_.isBoolean(allowed)){
throw new Error('allowed must be either true or false.');
}
var permissions=this.permissionsById[userId];
if(!permissions){
if(!allowed){
// The user already doesn't have this permission, so no action needed.
return;
}else{
permissions={};
this.permissionsById[userId]=permissions;
}
}

if(allowed){
this.permissionsById[userId][accessType]=true;
}else{
delete permissions[accessType];
if(_.isEmpty(permissions)){
delete this.permissionsById[userId];
}
}
};

AV.ACL.prototype._getAccess=function(accessType,userId){
if(userId instanceof AV.User){
userId=userId.id;
}else if(userId instanceof AV.Role){
userId='role:'+userId.getName();
}
var permissions=this.permissionsById[userId];
if(!permissions){
return false;
}
return permissions[accessType]?true:false;
};

/**
   * Set whether the given user is allowed to read this object.
   * @param userId An instance of AV.User or its objectId.
   * @param {Boolean} allowed Whether that user should have read access.
   */
AV.ACL.prototype.setReadAccess=function(userId,allowed){
this._setAccess('read',userId,allowed);
};

/**
   * Get whether the given user id is *explicitly* allowed to read this object.
   * Even if this returns false, the user may still be able to access it if
   * getPublicReadAccess returns true or a role that the user belongs to has
   * write access.
   * @param userId An instance of AV.User or its objectId, or a AV.Role.
   * @return {Boolean}
   */
AV.ACL.prototype.getReadAccess=function(userId){
return this._getAccess('read',userId);
};

/**
   * Set whether the given user id is allowed to write this object.
   * @param userId An instance of AV.User or its objectId, or a AV.Role..
   * @param {Boolean} allowed Whether that user should have write access.
   */
AV.ACL.prototype.setWriteAccess=function(userId,allowed){
this._setAccess('write',userId,allowed);
};

/**
   * Get whether the given user id is *explicitly* allowed to write this object.
   * Even if this returns false, the user may still be able to write it if
   * getPublicWriteAccess returns true or a role that the user belongs to has
   * write access.
   * @param userId An instance of AV.User or its objectId, or a AV.Role.
   * @return {Boolean}
   */
AV.ACL.prototype.getWriteAccess=function(userId){
return this._getAccess('write',userId);
};

/**
   * Set whether the public is allowed to read this object.
   * @param {Boolean} allowed
   */
AV.ACL.prototype.setPublicReadAccess=function(allowed){
this.setReadAccess(PUBLIC_KEY,allowed);
};

/**
   * Get whether the public is allowed to read this object.
   * @return {Boolean}
   */
AV.ACL.prototype.getPublicReadAccess=function(){
return this.getReadAccess(PUBLIC_KEY);
};

/**
   * Set whether the public is allowed to write this object.
   * @param {Boolean} allowed
   */
AV.ACL.prototype.setPublicWriteAccess=function(allowed){
this.setWriteAccess(PUBLIC_KEY,allowed);
};

/**
   * Get whether the public is allowed to write this object.
   * @return {Boolean}
   */
AV.ACL.prototype.getPublicWriteAccess=function(){
return this.getWriteAccess(PUBLIC_KEY);
};

/**
   * Get whether users belonging to the given role are allowed
   * to read this object. Even if this returns false, the role may
   * still be able to write it if a parent role has read access.
   *
   * @param role The name of the role, or a AV.Role object.
   * @return {Boolean} true if the role has read access. false otherwise.
   * @throws {String} If role is neither a AV.Role nor a String.
   */
AV.ACL.prototype.getRoleReadAccess=function(role){
if(role instanceof AV.Role){
// Normalize to the String name
role=role.getName();
}
if(_.isString(role)){
return this.getReadAccess('role:'+role);
}
throw new Error('role must be a AV.Role or a String');
};

/**
   * Get whether users belonging to the given role are allowed
   * to write this object. Even if this returns false, the role may
   * still be able to write it if a parent role has write access.
   *
   * @param role The name of the role, or a AV.Role object.
   * @return {Boolean} true if the role has write access. false otherwise.
   * @throws {String} If role is neither a AV.Role nor a String.
   */
AV.ACL.prototype.getRoleWriteAccess=function(role){
if(role instanceof AV.Role){
// Normalize to the String name
role=role.getName();
}
if(_.isString(role)){
return this.getWriteAccess('role:'+role);
}
throw new Error('role must be a AV.Role or a String');
};

/**
   * Set whether users belonging to the given role are allowed
   * to read this object.
   *
   * @param role The name of the role, or a AV.Role object.
   * @param {Boolean} allowed Whether the given role can read this object.
   * @throws {String} If role is neither a AV.Role nor a String.
   */
AV.ACL.prototype.setRoleReadAccess=function(role,allowed){
if(role instanceof AV.Role){
// Normalize to the String name
role=role.getName();
}
if(_.isString(role)){
this.setReadAccess('role:'+role,allowed);
return;
}
throw new Error('role must be a AV.Role or a String');
};

/**
   * Set whether users belonging to the given role are allowed
   * to write this object.
   *
   * @param role The name of the role, or a AV.Role object.
   * @param {Boolean} allowed Whether the given role can write this object.
   * @throws {String} If role is neither a AV.Role nor a String.
   */
AV.ACL.prototype.setRoleWriteAccess=function(role,allowed){
if(role instanceof AV.Role){
// Normalize to the String name
role=role.getName();
}
if(_.isString(role)){
this.setWriteAccess('role:'+role,allowed);
return;
}
throw new Error('role must be a AV.Role or a String');
};
};

/***/},
/* 51 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _=__webpack_require__(0);

module.exports=function(AV){
/**
   * @private
   * @class
   * A AV.Op is an atomic operation that can be applied to a field in a
   * AV.Object. For example, calling <code>object.set("foo", "bar")</code>
   * is an example of a AV.Op.Set. Calling <code>object.unset("foo")</code>
   * is a AV.Op.Unset. These operations are stored in a AV.Object and
   * sent to the server as part of <code>object.save()</code> operations.
   * Instances of AV.Op should be immutable.
   *
   * You should not create subclasses of AV.Op or instantiate AV.Op
   * directly.
   */
AV.Op=function(){
this._initialize.apply(this,arguments);
};

_.extend(AV.Op.prototype,
/** @lends AV.Op.prototype */{
_initialize:function _initialize(){}});


_.extend(AV.Op,{
/**
     * To create a new Op, call AV.Op._extend();
     * @private
     */
_extend:AV._extend,

// A map of __op string to decoder function.
_opDecoderMap:{},

/**
     * Registers a function to convert a json object with an __op field into an
     * instance of a subclass of AV.Op.
     * @private
     */
_registerDecoder:function _registerDecoder(opName,decoder){
AV.Op._opDecoderMap[opName]=decoder;
},

/**
     * Converts a json object into an instance of a subclass of AV.Op.
     * @private
     */
_decode:function _decode(json){
var decoder=AV.Op._opDecoderMap[json.__op];
if(decoder){
return decoder(json);
}else{
return undefined;
}
}});


/*
   * Add a handler for Batch ops.
   */
AV.Op._registerDecoder('Batch',function(json){
var op=null;
AV._arrayEach(json.ops,function(nextOp){
nextOp=AV.Op._decode(nextOp);
op=nextOp._mergeWithPrevious(op);
});
return op;
});

/**
   * @private
   * @class
   * A Set operation indicates that either the field was changed using
   * AV.Object.set, or it is a mutable container that was detected as being
   * changed.
   */
AV.Op.Set=AV.Op._extend(
/** @lends AV.Op.Set.prototype */{
_initialize:function _initialize(value){
this._value=value;
},

/**
     * Returns the new value of this field after the set.
     */
value:function value(){
return this._value;
},

/**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
toJSON:function toJSON(){
return AV._encode(this.value());
},

_mergeWithPrevious:function _mergeWithPrevious(previous){
return this;
},

_estimate:function _estimate(oldValue){
return this.value();
}});


/**
   * A sentinel value that is returned by AV.Op.Unset._estimate to
   * indicate the field should be deleted. Basically, if you find _UNSET as a
   * value in your object, you should remove that key.
   */
AV.Op._UNSET={};

/**
   * @private
   * @class
   * An Unset operation indicates that this field has been deleted from the
   * object.
   */
AV.Op.Unset=AV.Op._extend(
/** @lends AV.Op.Unset.prototype */{
/**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
toJSON:function toJSON(){
return{__op:'Delete'};
},

_mergeWithPrevious:function _mergeWithPrevious(previous){
return this;
},

_estimate:function _estimate(oldValue){
return AV.Op._UNSET;
}});


AV.Op._registerDecoder('Delete',function(json){
return new AV.Op.Unset();
});

/**
   * @private
   * @class
   * An Increment is an atomic operation where the numeric value for the field
   * will be increased by a given amount.
   */
AV.Op.Increment=AV.Op._extend(
/** @lends AV.Op.Increment.prototype */{
_initialize:function _initialize(amount){
this._amount=amount;
},

/**
     * Returns the amount to increment by.
     * @return {Number} the amount to increment by.
     */
amount:function amount(){
return this._amount;
},

/**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
toJSON:function toJSON(){
return{__op:'Increment',amount:this._amount};
},

_mergeWithPrevious:function _mergeWithPrevious(previous){
if(!previous){
return this;
}else if(previous instanceof AV.Op.Unset){
return new AV.Op.Set(this.amount());
}else if(previous instanceof AV.Op.Set){
return new AV.Op.Set(previous.value()+this.amount());
}else if(previous instanceof AV.Op.Increment){
return new AV.Op.Increment(this.amount()+previous.amount());
}else{
throw new Error('Op is invalid after previous op.');
}
},

_estimate:function _estimate(oldValue){
if(!oldValue){
return this.amount();
}
return oldValue+this.amount();
}});


AV.Op._registerDecoder('Increment',function(json){
return new AV.Op.Increment(json.amount);
});

/**
   * @private
   * @class
   * BitAnd is an atomic operation where the given value will be bit and to the
   * value than is stored in this field.
   */
AV.Op.BitAnd=AV.Op._extend(
/** @lends AV.Op.BitAnd.prototype */{
_initialize:function _initialize(value){
this._value=value;
},
value:function value(){
return this._value;
},


/**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
toJSON:function toJSON(){
return{__op:'BitAnd',value:this.value()};
},
_mergeWithPrevious:function _mergeWithPrevious(previous){
if(!previous){
return this;
}else if(previous instanceof AV.Op.Unset){
return new AV.Op.Set(0);
}else if(previous instanceof AV.Op.Set){
return new AV.Op.Set(previous.value()&this.value());
}else{
throw new Error('Op is invalid after previous op.');
}
},
_estimate:function _estimate(oldValue){
return oldValue&this.value();
}});


AV.Op._registerDecoder('BitAnd',function(json){
return new AV.Op.BitAnd(json.value);
});

/**
   * @private
   * @class
   * BitOr is an atomic operation where the given value will be bit and to the
   * value than is stored in this field.
   */
AV.Op.BitOr=AV.Op._extend(
/** @lends AV.Op.BitOr.prototype */{
_initialize:function _initialize(value){
this._value=value;
},
value:function value(){
return this._value;
},


/**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
toJSON:function toJSON(){
return{__op:'BitOr',value:this.value()};
},
_mergeWithPrevious:function _mergeWithPrevious(previous){
if(!previous){
return this;
}else if(previous instanceof AV.Op.Unset){
return new AV.Op.Set(this.value());
}else if(previous instanceof AV.Op.Set){
return new AV.Op.Set(previous.value()|this.value());
}else{
throw new Error('Op is invalid after previous op.');
}
},
_estimate:function _estimate(oldValue){
return oldValue|this.value();
}});


AV.Op._registerDecoder('BitOr',function(json){
return new AV.Op.BitOr(json.value);
});

/**
   * @private
   * @class
   * BitXor is an atomic operation where the given value will be bit and to the
   * value than is stored in this field.
   */
AV.Op.BitXor=AV.Op._extend(
/** @lends AV.Op.BitXor.prototype */{
_initialize:function _initialize(value){
this._value=value;
},
value:function value(){
return this._value;
},


/**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
toJSON:function toJSON(){
return{__op:'BitXor',value:this.value()};
},
_mergeWithPrevious:function _mergeWithPrevious(previous){
if(!previous){
return this;
}else if(previous instanceof AV.Op.Unset){
return new AV.Op.Set(this.value());
}else if(previous instanceof AV.Op.Set){
return new AV.Op.Set(previous.value()^this.value());
}else{
throw new Error('Op is invalid after previous op.');
}
},
_estimate:function _estimate(oldValue){
return oldValue^this.value();
}});


AV.Op._registerDecoder('BitXor',function(json){
return new AV.Op.BitXor(json.value);
});

/**
   * @private
   * @class
   * Add is an atomic operation where the given objects will be appended to the
   * array that is stored in this field.
   */
AV.Op.Add=AV.Op._extend(
/** @lends AV.Op.Add.prototype */{
_initialize:function _initialize(objects){
this._objects=objects;
},

/**
     * Returns the objects to be added to the array.
     * @return {Array} The objects to be added to the array.
     */
objects:function objects(){
return this._objects;
},

/**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
toJSON:function toJSON(){
return{__op:'Add',objects:AV._encode(this.objects())};
},

_mergeWithPrevious:function _mergeWithPrevious(previous){
if(!previous){
return this;
}else if(previous instanceof AV.Op.Unset){
return new AV.Op.Set(this.objects());
}else if(previous instanceof AV.Op.Set){
return new AV.Op.Set(this._estimate(previous.value()));
}else if(previous instanceof AV.Op.Add){
return new AV.Op.Add(previous.objects().concat(this.objects()));
}else{
throw new Error('Op is invalid after previous op.');
}
},

_estimate:function _estimate(oldValue){
if(!oldValue){
return _.clone(this.objects());
}else{
return oldValue.concat(this.objects());
}
}});


AV.Op._registerDecoder('Add',function(json){
return new AV.Op.Add(AV._decode(json.objects));
});

/**
   * @private
   * @class
   * AddUnique is an atomic operation where the given items will be appended to
   * the array that is stored in this field only if they were not already
   * present in the array.
   */
AV.Op.AddUnique=AV.Op._extend(
/** @lends AV.Op.AddUnique.prototype */{
_initialize:function _initialize(objects){
this._objects=_.uniq(objects);
},

/**
     * Returns the objects to be added to the array.
     * @return {Array} The objects to be added to the array.
     */
objects:function objects(){
return this._objects;
},

/**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
toJSON:function toJSON(){
return{__op:'AddUnique',objects:AV._encode(this.objects())};
},

_mergeWithPrevious:function _mergeWithPrevious(previous){
if(!previous){
return this;
}else if(previous instanceof AV.Op.Unset){
return new AV.Op.Set(this.objects());
}else if(previous instanceof AV.Op.Set){
return new AV.Op.Set(this._estimate(previous.value()));
}else if(previous instanceof AV.Op.AddUnique){
return new AV.Op.AddUnique(this._estimate(previous.objects()));
}else{
throw new Error('Op is invalid after previous op.');
}
},

_estimate:function _estimate(oldValue){
if(!oldValue){
return _.clone(this.objects());
}else{
// We can't just take the _.uniq(_.union(...)) of oldValue and
// this.objects, because the uniqueness may not apply to oldValue
// (especially if the oldValue was set via .set())
var newValue=_.clone(oldValue);
AV._arrayEach(this.objects(),function(obj){
if(obj instanceof AV.Object&&obj.id){
var matchingObj=_.find(newValue,function(anObj){
return anObj instanceof AV.Object&&anObj.id===obj.id;
});
if(!matchingObj){
newValue.push(obj);
}else{
var index=_.indexOf(newValue,matchingObj);
newValue[index]=obj;
}
}else if(!_.contains(newValue,obj)){
newValue.push(obj);
}
});
return newValue;
}
}});


AV.Op._registerDecoder('AddUnique',function(json){
return new AV.Op.AddUnique(AV._decode(json.objects));
});

/**
   * @private
   * @class
   * Remove is an atomic operation where the given objects will be removed from
   * the array that is stored in this field.
   */
AV.Op.Remove=AV.Op._extend(
/** @lends AV.Op.Remove.prototype */{
_initialize:function _initialize(objects){
this._objects=_.uniq(objects);
},

/**
     * Returns the objects to be removed from the array.
     * @return {Array} The objects to be removed from the array.
     */
objects:function objects(){
return this._objects;
},

/**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
toJSON:function toJSON(){
return{__op:'Remove',objects:AV._encode(this.objects())};
},

_mergeWithPrevious:function _mergeWithPrevious(previous){
if(!previous){
return this;
}else if(previous instanceof AV.Op.Unset){
return previous;
}else if(previous instanceof AV.Op.Set){
return new AV.Op.Set(this._estimate(previous.value()));
}else if(previous instanceof AV.Op.Remove){
return new AV.Op.Remove(_.union(previous.objects(),this.objects()));
}else{
throw new Error('Op is invalid after previous op.');
}
},

_estimate:function _estimate(oldValue){
if(!oldValue){
return[];
}else{
var newValue=_.difference(oldValue,this.objects());
// If there are saved AV Objects being removed, also remove them.
AV._arrayEach(this.objects(),function(obj){
if(obj instanceof AV.Object&&obj.id){
newValue=_.reject(newValue,function(other){
return other instanceof AV.Object&&other.id===obj.id;
});
}
});
return newValue;
}
}});


AV.Op._registerDecoder('Remove',function(json){
return new AV.Op.Remove(AV._decode(json.objects));
});

/**
   * @private
   * @class
   * A Relation operation indicates that the field is an instance of
   * AV.Relation, and objects are being added to, or removed from, that
   * relation.
   */
AV.Op.Relation=AV.Op._extend(
/** @lends AV.Op.Relation.prototype */{
_initialize:function _initialize(adds,removes){
this._targetClassName=null;

var self=this;

var pointerToId=function pointerToId(object){
if(object instanceof AV.Object){
if(!object.id){
throw new Error("You can't add an unsaved AV.Object to a relation.");
}
if(!self._targetClassName){
self._targetClassName=object.className;
}
if(self._targetClassName!==object.className){
throw new Error('Tried to create a AV.Relation with 2 different types: '+self._targetClassName+' and '+object.className+'.');
}
return object.id;
}
return object;
};

this.relationsToAdd=_.uniq(_.map(adds,pointerToId));
this.relationsToRemove=_.uniq(_.map(removes,pointerToId));
},

/**
     * Returns an array of unfetched AV.Object that are being added to the
     * relation.
     * @return {Array}
     */
added:function added(){
var self=this;
return _.map(this.relationsToAdd,function(objectId){
var object=AV.Object._create(self._targetClassName);
object.id=objectId;
return object;
});
},

/**
     * Returns an array of unfetched AV.Object that are being removed from
     * the relation.
     * @return {Array}
     */
removed:function removed(){
var self=this;
return _.map(this.relationsToRemove,function(objectId){
var object=AV.Object._create(self._targetClassName);
object.id=objectId;
return object;
});
},

/**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
toJSON:function toJSON(){
var adds=null;
var removes=null;
var self=this;
var idToPointer=function idToPointer(id){
return{
__type:'Pointer',
className:self._targetClassName,
objectId:id};

};
var pointers=null;
if(this.relationsToAdd.length>0){
pointers=_.map(this.relationsToAdd,idToPointer);
adds={__op:'AddRelation',objects:pointers};
}

if(this.relationsToRemove.length>0){
pointers=_.map(this.relationsToRemove,idToPointer);
removes={__op:'RemoveRelation',objects:pointers};
}

if(adds&&removes){
return{__op:'Batch',ops:[adds,removes]};
}

return adds||removes||{};
},

_mergeWithPrevious:function _mergeWithPrevious(previous){
if(!previous){
return this;
}else if(previous instanceof AV.Op.Unset){
throw new Error("You can't modify a relation after deleting it.");
}else if(previous instanceof AV.Op.Relation){
if(previous._targetClassName&&previous._targetClassName!==this._targetClassName){
throw new Error('Related object must be of class '+previous._targetClassName+', but '+this._targetClassName+' was passed in.');
}
var newAdd=_.union(_.difference(previous.relationsToAdd,this.relationsToRemove),this.relationsToAdd);
var newRemove=_.union(_.difference(previous.relationsToRemove,this.relationsToAdd),this.relationsToRemove);

var newRelation=new AV.Op.Relation(newAdd,newRemove);
newRelation._targetClassName=this._targetClassName;
return newRelation;
}else{
throw new Error('Op is invalid after previous op.');
}
},

_estimate:function _estimate(oldValue,object,key){
if(!oldValue){
var relation=new AV.Relation(object,key);
relation.targetClassName=this._targetClassName;
}else if(oldValue instanceof AV.Relation){
if(this._targetClassName){
if(oldValue.targetClassName){
if(oldValue.targetClassName!==this._targetClassName){
throw new Error('Related object must be a '+oldValue.targetClassName+', but a '+this._targetClassName+' was passed in.');
}
}else{
oldValue.targetClassName=this._targetClassName;
}
}
return oldValue;
}else{
throw new Error('Op is invalid after previous op.');
}
}});


AV.Op._registerDecoder('AddRelation',function(json){
return new AV.Op.Relation(AV._decode(json.objects),[]);
});
AV.Op._registerDecoder('RemoveRelation',function(json){
return new AV.Op.Relation([],AV._decode(json.objects));
});
};

/***/},
/* 52 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _=__webpack_require__(0);

module.exports=function(AV){
/**
   * Creates a new Relation for the given parent object and key. This
   * constructor should rarely be used directly, but rather created by
   * {@link AV.Object#relation}.
   * @param {AV.Object} parent The parent of this relation.
   * @param {String} key The key for this relation on the parent.
   * @see AV.Object#relation
   * @class
   *
   * <p>
   * A class that is used to access all of the children of a many-to-many
   * relationship.  Each instance of AV.Relation is associated with a
   * particular parent object and key.
   * </p>
   */
AV.Relation=function(parent,key){
if(!_.isString(key)){
throw new TypeError('key must be a string');
}
this.parent=parent;
this.key=key;
this.targetClassName=null;
};

/**
   * Creates a query that can be used to query the parent objects in this relation.
   * @param {String} parentClass The parent class or name.
   * @param {String} relationKey The relation field key in parent.
   * @param {AV.Object} child The child object.
   * @return {AV.Query}
   */
AV.Relation.reverseQuery=function(parentClass,relationKey,child){
var query=new AV.Query(parentClass);
query.equalTo(relationKey,child._toPointer());
return query;
};

_.extend(AV.Relation.prototype,
/** @lends AV.Relation.prototype */{
/**
     * Makes sure that this relation has the right parent and key.
     * @private
     */
_ensureParentAndKey:function _ensureParentAndKey(parent,key){
this.parent=this.parent||parent;
this.key=this.key||key;
if(this.parent!==parent){
throw new Error('Internal Error. Relation retrieved from two different Objects.');
}
if(this.key!==key){
throw new Error('Internal Error. Relation retrieved from two different keys.');
}
},

/**
     * Adds a AV.Object or an array of AV.Objects to the relation.
     * @param {AV.Object|AV.Object[]} objects The item or items to add.
     */
add:function add(objects){
if(!_.isArray(objects)){
objects=[objects];
}

var change=new AV.Op.Relation(objects,[]);
this.parent.set(this.key,change);
this.targetClassName=change._targetClassName;
},

/**
     * Removes a AV.Object or an array of AV.Objects from this relation.
     * @param {AV.Object|AV.Object[]} objects The item or items to remove.
     */
remove:function remove(objects){
if(!_.isArray(objects)){
objects=[objects];
}

var change=new AV.Op.Relation([],objects);
this.parent.set(this.key,change);
this.targetClassName=change._targetClassName;
},

/**
     * Returns a JSON version of the object suitable for saving to disk.
     * @return {Object}
     */
toJSON:function toJSON(){
return{__type:'Relation',className:this.targetClassName};
},

/**
     * Returns a AV.Query that is limited to objects in this
     * relation.
     * @return {AV.Query}
     */
query:function query(){
var targetClass;
var query;
if(!this.targetClassName){
targetClass=AV.Object._getSubclass(this.parent.className);
query=new AV.Query(targetClass);
query._extraOptions.redirectClassNameForKey=this.key;
}else{
targetClass=AV.Object._getSubclass(this.targetClassName);
query=new AV.Query(targetClass);
}
query._addCondition('$relatedTo','object',this.parent._toPointer());
query._addCondition('$relatedTo','key',this.key);

return query;
}});

};

/***/},
/* 53 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _=__webpack_require__(0);
var cos=__webpack_require__(54);
var qiniu=__webpack_require__(55);
var s3=__webpack_require__(56);
var AVError=__webpack_require__(4);
var AVRequest=__webpack_require__(2)._request;
var Promise=__webpack_require__(1);

var _require=__webpack_require__(3),
tap=_require.tap,
transformFetchOptions=_require.transformFetchOptions;

var debug=__webpack_require__(7)('leancloud:file');
var parseBase64=__webpack_require__(60);

module.exports=function(AV){
var hexOctet=function hexOctet(){
return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
};

// port from browserify path module
// since react-native packager won't shim node modules.
var extname=function extname(path){
if(!_.isString(path))return'';
return path.match(/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/)[4];
};

var b64Digit=function b64Digit(number){
if(number<26){
return String.fromCharCode(65+number);
}
if(number<52){
return String.fromCharCode(97+(number-26));
}
if(number<62){
return String.fromCharCode(48+(number-52));
}
if(number===62){
return'+';
}
if(number===63){
return'/';
}
throw new Error('Tried to encode large digit '+number+' in base64.');
};

var encodeBase64=function encodeBase64(array){
var chunks=[];
chunks.length=Math.ceil(array.length/3);
_.times(chunks.length,function(i){
var b1=array[i*3];
var b2=array[i*3+1]||0;
var b3=array[i*3+2]||0;

var has2=i*3+1<array.length;
var has3=i*3+2<array.length;

chunks[i]=[b64Digit(b1>>2&0x3f),b64Digit(b1<<4&0x30|b2>>4&0x0f),has2?b64Digit(b2<<2&0x3c|b3>>6&0x03):'=',has3?b64Digit(b3&0x3f):'='].join('');
});
return chunks.join('');
};

/**
   * An AV.File is a local representation of a file that is saved to the AV
   * cloud.
   * @param name {String} The file's name. This will change to a unique value
   *     once the file has finished saving.
   * @param data {Array} The data for the file, as either:
   *     1. an Array of byte value Numbers, or
   *     2. an Object like { base64: "..." } with a base64-encoded String.
   *     3. a Blob(File) selected with a file upload control.
   *     4. a Buffer in Node.js runtime.
   *     5. a Stream in Node.js runtime.
   *
   *        For example:<pre>
   * var fileUploadControl = $("#profilePhotoFileUpload")[0];
   * if (fileUploadControl.files.length > 0) {
   *   var file = fileUploadControl.files[0];
   *   var name = "photo.jpg";
   *   var file = new AV.File(name, file);
   *   file.save().then(function() {
   *     // The file has been saved to AV.
   *   }, function(error) {
   *     // The file either could not be read, or could not be saved to AV.
   *   });
   * }</pre>
   *
   * @class
   * @param [mimeType] {String} Content-Type header to use for the file. If
   *     this is omitted, the content type will be inferred from the name's
   *     extension.
   */
AV.File=function(name,data,mimeType){
this.attributes={
name:name,
url:'',
metaData:{},
// 用来存储转换后要上传的 base64 String
base64:''};


if(_.isString(data)){
throw new TypeError('Creating an AV.File from a String is not yet supported.');
}
if(_.isArray(data)){
this.attributes.metaData.size=data.length;
data={base64:encodeBase64(data)};
}

this._extName='';
this._data=data;
this._uploadHeaders={};

if(true){
if(data&&data.blob){
this._extName=extname(data.blob.uri);
}
}

if(typeof Blob!=='undefined'&&data instanceof Blob){
if(data.size){
this.attributes.metaData.size=data.size;
}
if(data.name){
this._extName=extname(data.name);
}
}

var owner=void 0;
if(data&&data.owner){
owner=data.owner;
}else if(!AV._config.disableCurrentUser){
try{
owner=AV.User.current();
}catch(error){
if('SYNC_API_NOT_AVAILABLE'!==error.code){
throw error;
}
}
}

this.attributes.metaData.owner=owner?owner.id:'unknown';

this.set('mime_type',mimeType);
};

/**
   * Creates a fresh AV.File object with exists url for saving to AVOS Cloud.
   * @param {String} name the file name
   * @param {String} url the file url.
   * @param {Object} [metaData] the file metadata object.
   * @param {String} [type] Content-Type header to use for the file. If
   *     this is omitted, the content type will be inferred from the name's
   *     extension.
   * @return {AV.File} the file object
   */
AV.File.withURL=function(name,url,metaData,type){
if(!name||!url){
throw new Error('Please provide file name and url');
}
var file=new AV.File(name,null,type);
//copy metaData properties to file.
if(metaData){
for(var prop in metaData){
if(!file.attributes.metaData[prop])file.attributes.metaData[prop]=metaData[prop];
}
}
file.attributes.url=url;
//Mark the file is from external source.
file.attributes.metaData.__source='external';
return file;
};

/**
   * Creates a file object with exists objectId.
   * @param {String} objectId The objectId string
   * @return {AV.File} the file object
   */
AV.File.createWithoutData=function(objectId){
var file=new AV.File();
file.id=objectId;
return file;
};

_.extend(AV.File.prototype,
/** @lends AV.File.prototype */{
className:'_File',

_toFullJSON:function _toFullJSON(seenObjects){
var _this=this;

var full=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;

var json=_.clone(this.attributes);
AV._objectEach(json,function(val,key){
json[key]=AV._encode(val,seenObjects,undefined,full);
});
AV._objectEach(this._operations,function(val,key){
json[key]=val;
});

if(_.has(this,'id')){
json.objectId=this.id;
}
_(['createdAt','updatedAt']).each(function(key){
if(_.has(_this,key)){
var val=_this[key];
json[key]=_.isDate(val)?val.toJSON():val;
}
});
if(full){
json.__type='File';
}
return json;
},


/**
     * Returns a JSON version of the file with meta data.
     * Inverse to {@link AV.parseJSON}
     * @since 2.0.0
     * @return {Object}
     */
toFullJSON:function toFullJSON(){
var seenObjects=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];

return this._toFullJSON(seenObjects);
},


/**
     * Returns a JSON version of the object.
     * @return {Object}
     */
toJSON:function toJSON(key,holder){
var seenObjects=arguments.length>2&&arguments[2]!==undefined?arguments[2]:[this];

return this._toFullJSON(seenObjects,false);
},


/**
     * Gets a Pointer referencing this file.
     * @private
     */
_toPointer:function _toPointer(){
return{
__type:'Pointer',
className:this.className,
objectId:this.id};

},


/**
     * Returns the ACL for this file.
     * @returns {AV.ACL} An instance of AV.ACL.
     */
getACL:function getACL(){
return this._acl;
},


/**
     * Sets the ACL to be used for this file.
     * @param {AV.ACL} acl An instance of AV.ACL.
     */
setACL:function setACL(acl){
if(!(acl instanceof AV.ACL)){
return new AVError(AVError.OTHER_CAUSE,'ACL must be a AV.ACL.');
}
this._acl=acl;
return this;
},


/**
     * Gets the name of the file. Before save is called, this is the filename
     * given by the user. After save is called, that name gets prefixed with a
     * unique identifier.
     */
name:function name(){
return this.get('name');
},


/**
     * Gets the url of the file. It is only available after you save the file or
     * after you get the file from a AV.Object.
     * @return {String}
     */
url:function url(){
return this.get('url');
},


/**
     * Gets the attributs of the file object.
     * @param {String} The attribute name which want to get.
     * @returns {Any}
     */
get:function get(attrName){
switch(attrName){
case'objectId':
return this.id;
case'url':
case'name':
case'mime_type':
case'metaData':
case'createdAt':
case'updatedAt':
return this.attributes[attrName];
default:
return this.attributes.metaData[attrName];}

},


/**
     * Set the metaData of the file object.
     * @param {Object} Object is an key value Object for setting metaData.
     * @param {String} attr is an optional metadata key.
     * @param {Object} value is an optional metadata value.
     * @returns {String|Number|Array|Object}
     */
set:function set(){
var _this2=this;

var set=function set(attrName,value){
switch(attrName){
case'name':
case'url':
case'mime_type':
case'base64':
case'metaData':
_this2.attributes[attrName]=value;
break;
default:
// File 并非一个 AVObject，不能完全自定义其他属性，所以只能都放在 metaData 上面
_this2.attributes.metaData[attrName]=value;
break;}

};

for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){
args[_key]=arguments[_key];
}

switch(args.length){
case 1:
// 传入一个 Object
for(var k in args[0]){
set(k,args[0][k]);
}
break;
case 2:
set(args[0],args[1]);
break;}

return this;
},


/**
     * Set a header for the upload request.
     * For more infomation, go to https://url.leanapp.cn/avfile-upload-headers
     *
     * @param {String} key header key
     * @param {String} value header value
     * @return {AV.File} this
     */
setUploadHeader:function setUploadHeader(key,value){
this._uploadHeaders[key]=value;
return this;
},


/**
     * <p>Returns the file's metadata JSON object if no arguments is given.Returns the
     * metadata value if a key is given.Set metadata value if key and value are both given.</p>
     * <p><pre>
     *  var metadata = file.metaData(); //Get metadata JSON object.
     *  var size = file.metaData('size');  // Get the size metadata value.
     *  file.metaData('format', 'jpeg'); //set metadata attribute and value.
     *</pre></p>
     * @return {Object} The file's metadata JSON object.
     * @param {String} attr an optional metadata key.
     * @param {Object} value an optional metadata value.
     **/
metaData:function metaData(attr,value){
if(attr&&value){
this.attributes.metaData[attr]=value;
return this;
}else if(attr&&!value){
return this.attributes.metaData[attr];
}else{
return this.attributes.metaData;
}
},


/**
     * 如果文件是图片，获取图片的缩略图URL。可以传入宽度、高度、质量、格式等参数。
     * @return {String} 缩略图URL
     * @param {Number} width 宽度，单位：像素
     * @param {Number} heigth 高度，单位：像素
     * @param {Number} quality 质量，1-100的数字，默认100
     * @param {Number} scaleToFit 是否将图片自适应大小。默认为true。
     * @param {String} fmt 格式，默认为png，也可以为jpeg,gif等格式。
     */

thumbnailURL:function thumbnailURL(width,height){
var quality=arguments.length>2&&arguments[2]!==undefined?arguments[2]:100;
var scaleToFit=arguments.length>3&&arguments[3]!==undefined?arguments[3]:true;
var fmt=arguments.length>4&&arguments[4]!==undefined?arguments[4]:'png';

var url=this.attributes.url;
if(!url){
throw new Error('Invalid url.');
}
if(!width||!height||width<=0||height<=0){
throw new Error('Invalid width or height value.');
}
if(quality<=0||quality>100){
throw new Error('Invalid quality value.');
}
var mode=scaleToFit?2:1;
return url+'?imageView/'+mode+'/w/'+width+'/h/'+height+'/q/'+quality+'/format/'+fmt;
},


/**
     * Returns the file's size.
     * @return {Number} The file's size in bytes.
     **/
size:function size(){
return this.metaData().size;
},


/**
     * Returns the file's owner.
     * @return {String} The file's owner id.
     */
ownerId:function ownerId(){
return this.metaData().owner;
},


/**
     * Destroy the file.
     * @param {AuthOptions} options
     * @return {Promise} A promise that is fulfilled when the destroy
     *     completes.
     */
destroy:function destroy(options){
if(!this.id){
return Promise.reject(new Error('The file id does not eixst.'));
}
var request=AVRequest('files',null,this.id,'DELETE',null,options);
return request;
},


/**
     * Request Qiniu upload token
     * @param {string} type
     * @return {Promise} Resolved with the response
     * @private
     */
_fileToken:function _fileToken(type,authOptions){
var name=this.attributes.name;

var extName=extname(name);
if(!extName&&this._extName){
name+=this._extName;
extName=this._extName;
}
// Create 16-bits uuid as qiniu key.
var key=hexOctet()+hexOctet()+hexOctet()+hexOctet()+hexOctet()+extName;
var data={
key:key,
name:name,
keep_file_name:authOptions.keepFileName,
ACL:this._acl,
mime_type:type,
metaData:this.attributes.metaData};

this._qiniu_key=key;
return AVRequest('fileTokens',null,null,'POST',data,authOptions);
},


/**
     * @callback UploadProgressCallback
     * @param {XMLHttpRequestProgressEvent} event - The progress event with 'loaded' and 'total' attributes
     */
/**
     * Saves the file to the AV cloud.
     * @param {AuthOptions} [options] AuthOptions plus:
     * @param {UploadProgressCallback} [options.onprogress] 文件上传进度，在 Node.js 中无效，回调参数说明详见 {@link UploadProgressCallback}。
     * @param {boolean} [options.keepFileName = false] 保留下载文件的文件名。
     * @return {Promise} Promise that is resolved when the save finishes.
     */
save:function save(){
var _this3=this;

var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};

if(this.id){
throw new Error('File is already saved.');
}
if(!this._previousSave){
if(this._data){
var mimeType=this.get('mime_type');
this._previousSave=this._fileToken(mimeType,options).then(function(uploadInfo){
if(uploadInfo.mime_type){
mimeType=uploadInfo.mime_type;
_this3.set('mime_type',mimeType);
}
_this3._token=uploadInfo.token;
return Promise.resolve().then(function(){
var data=_this3._data;
if(data&&data.base64){
return parseBase64(data.base64,mimeType);
}
if(data&&data.blob){
if(!data.blob.type&&mimeType){
data.blob.type=mimeType;
}
if(!data.blob.name){
data.blob.name=_this3.get('name');
}
return data.blob;
}
if(typeof Blob!=='undefined'&&data instanceof Blob){
return data;
}
throw new TypeError('malformed file data');
}).then(function(data){
var _options=_.extend({},options);
// filter out download progress events
if(options.onprogress){
_options.onprogress=function(event){
if(event.direction==='download')return;
return options.onprogress(event);
};
}
switch(uploadInfo.provider){
case's3':
return s3(uploadInfo,data,_this3,_options);
case'qcloud':
return cos(uploadInfo,data,_this3,_options);
case'qiniu':
default:
return qiniu(uploadInfo,data,_this3,_options);}

}).then(tap(function(){
return _this3._callback(true);
}),function(error){
_this3._callback(false);
throw error;
});
});
}else if(this.attributes.url&&this.attributes.metaData.__source==='external'){
// external link file.
var data={
name:this.attributes.name,
ACL:this._acl,
metaData:this.attributes.metaData,
mime_type:this.mimeType,
url:this.attributes.url};

this._previousSave=AVRequest('files',this.attributes.name,null,'post',data,options).then(function(response){
_this3.attributes.name=response.name;
_this3.attributes.url=response.url;
_this3.id=response.objectId;
if(response.size){
_this3.attributes.metaData.size=response.size;
}
return _this3;
});
}
}
return this._previousSave;
},
_callback:function _callback(success){
AVRequest('fileCallback',null,null,'post',{
token:this._token,
result:success}).
catch(debug);
delete this._token;
delete this._data;
},


/**
     * fetch the file from server. If the server's representation of the
     * model differs from its current attributes, they will be overriden,
     * @param {Object} fetchOptions Optional options to set 'keys',
     *      'include' and 'includeACL' option.
     * @param {AuthOptions} options
     * @return {Promise} A promise that is fulfilled when the fetch
     *     completes.
     */
fetch:function fetch(fetchOptions,options){
var request=AVRequest('files',null,this.id,'GET',transformFetchOptions(fetchOptions),options);
return request.then(this._finishFetch.bind(this));
},
_finishFetch:function _finishFetch(response){
var value=AV.Object.prototype.parse(response);
value.attributes={
name:value.name,
url:value.url,
mime_type:value.mime_type,
bucket:value.bucket};

value.attributes.metaData=value.metaData||{};
value.id=value.objectId;
// clean
delete value.objectId;
delete value.metaData;
delete value.url;
delete value.name;
delete value.mime_type;
delete value.bucket;
_.extend(this,value);
return this;
}});

};

/***/},
/* 54 */
/***/function(module,exports,__webpack_require__){

"use strict";


var request=__webpack_require__(8);
var debug=__webpack_require__(7)('cos');
var Promise=__webpack_require__(1);

module.exports=function upload(uploadInfo,data,file){
var saveOptions=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};

file.attributes.url=uploadInfo.url;
file._bucket=uploadInfo.bucket;
file.id=uploadInfo.objectId;
var uploadUrl=uploadInfo.upload_url+'?sign='+encodeURIComponent(uploadInfo.token);

return new Promise(function(resolve,reject){
var req=request('POST',uploadUrl).set(file._uploadHeaders).attach('fileContent',data,file.attributes.name).field('op','upload');
if(saveOptions.onprogress){
req.on('progress',saveOptions.onprogress);
}
req.end(function(err,res){
if(res){
debug(res.status,res.body,res.text);
}
if(err){
if(res){
err.statusCode=res.status;
err.responseText=res.text;
err.response=res.body;
}
return reject(err);
}
resolve(file);
});
});
};

/***/},
/* 55 */
/***/function(module,exports,__webpack_require__){

"use strict";


var request=__webpack_require__(8);
var Promise=__webpack_require__(1);
var debug=__webpack_require__(7)('qiniu');

module.exports=function upload(uploadInfo,data,file){
var saveOptions=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};

file.attributes.url=uploadInfo.url;
file._bucket=uploadInfo.bucket;
file.id=uploadInfo.objectId;
// Get the uptoken to upload files to qiniu.
var uptoken=uploadInfo.token;
var uploadUrl=uploadInfo.upload_url||'https://upload.qiniup.com';
return new Promise(function(resolve,reject){
var req=request('POST',uploadUrl).set(file._uploadHeaders).attach('file',data,file.attributes.name).field('name',file.attributes.name).field('key',uploadInfo.key||file._qiniu_key).field('token',uptoken);
if(saveOptions.onprogress){
req.on('progress',saveOptions.onprogress);
}
req.end(function(err,res){
if(res){
debug(res.status,res.body,res.text);
}
if(err){
if(res){
err.statusCode=res.status;
err.responseText=res.text;
err.response=res.body;
}
return reject(err);
}
resolve(file);
});
});
};

/***/},
/* 56 */
/***/function(module,exports,__webpack_require__){

"use strict";


var request=__webpack_require__(8);
var Promise=__webpack_require__(1);

var handleError=function handleError(error,res){
if(res){
error.statusCode=res.status;
error.responseText=res.text;
error.response=res.body;
}
return error;
};

module.exports=function upload(uploadInfo,data,file){
var saveOptions=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};

file.attributes.url=uploadInfo.url;
file._bucket=uploadInfo.bucket;
file.id=uploadInfo.objectId;
return new Promise(function(resolve,reject){
// 海外节点，针对 S3 才会返回 upload_url
var req=request('PUT',uploadInfo.upload_url).set(Object.assign({
'Content-Type':file.get('mime_type'),
'Cache-Control':'public, max-age=31536000'},
file._uploadHeaders));
if(saveOptions.onprogress){
req.on('progress',saveOptions.onprogress);
}
req.on('response',function(res){
if(res.ok)return resolve(file);
reject(handleError(res.error,res));
});
req.on('error',function(err,res){
return reject(handleError(err,res));
});
req.send(data).end();
});
};

/***/},
/* 57 */
/***/function(module,exports,__webpack_require__){

(function(){
var crypt=__webpack_require__(58),
utf8=__webpack_require__(22).utf8,
isBuffer=__webpack_require__(59),
bin=__webpack_require__(22).bin,

// The core
md5=function md5(message,options){
// Convert to byte array
if(message.constructor==String){
if(options&&options.encoding==='binary')
message=bin.stringToBytes(message);else

message=utf8.stringToBytes(message);}else
if(isBuffer(message))
message=Array.prototype.slice.call(message,0);else
if(!Array.isArray(message))
message=message.toString();
// else, assume byte array already

var m=crypt.bytesToWords(message),
l=message.length*8,
a=1732584193,
b=-271733879,
c=-1732584194,
d=271733878;

// Swap endian
for(var i=0;i<m.length;i++){
m[i]=(m[i]<<8|m[i]>>>24)&0x00FF00FF|
(m[i]<<24|m[i]>>>8)&0xFF00FF00;
}

// Padding
m[l>>>5]|=0x80<<l%32;
m[(l+64>>>9<<4)+14]=l;

// Method shortcuts
var FF=md5._ff,
GG=md5._gg,
HH=md5._hh,
II=md5._ii;

for(var i=0;i<m.length;i+=16){

var aa=a,
bb=b,
cc=c,
dd=d;

a=FF(a,b,c,d,m[i+0],7,-680876936);
d=FF(d,a,b,c,m[i+1],12,-389564586);
c=FF(c,d,a,b,m[i+2],17,606105819);
b=FF(b,c,d,a,m[i+3],22,-1044525330);
a=FF(a,b,c,d,m[i+4],7,-176418897);
d=FF(d,a,b,c,m[i+5],12,1200080426);
c=FF(c,d,a,b,m[i+6],17,-1473231341);
b=FF(b,c,d,a,m[i+7],22,-45705983);
a=FF(a,b,c,d,m[i+8],7,1770035416);
d=FF(d,a,b,c,m[i+9],12,-1958414417);
c=FF(c,d,a,b,m[i+10],17,-42063);
b=FF(b,c,d,a,m[i+11],22,-1990404162);
a=FF(a,b,c,d,m[i+12],7,1804603682);
d=FF(d,a,b,c,m[i+13],12,-40341101);
c=FF(c,d,a,b,m[i+14],17,-1502002290);
b=FF(b,c,d,a,m[i+15],22,1236535329);

a=GG(a,b,c,d,m[i+1],5,-165796510);
d=GG(d,a,b,c,m[i+6],9,-1069501632);
c=GG(c,d,a,b,m[i+11],14,643717713);
b=GG(b,c,d,a,m[i+0],20,-373897302);
a=GG(a,b,c,d,m[i+5],5,-701558691);
d=GG(d,a,b,c,m[i+10],9,38016083);
c=GG(c,d,a,b,m[i+15],14,-660478335);
b=GG(b,c,d,a,m[i+4],20,-405537848);
a=GG(a,b,c,d,m[i+9],5,568446438);
d=GG(d,a,b,c,m[i+14],9,-1019803690);
c=GG(c,d,a,b,m[i+3],14,-187363961);
b=GG(b,c,d,a,m[i+8],20,1163531501);
a=GG(a,b,c,d,m[i+13],5,-1444681467);
d=GG(d,a,b,c,m[i+2],9,-51403784);
c=GG(c,d,a,b,m[i+7],14,1735328473);
b=GG(b,c,d,a,m[i+12],20,-1926607734);

a=HH(a,b,c,d,m[i+5],4,-378558);
d=HH(d,a,b,c,m[i+8],11,-2022574463);
c=HH(c,d,a,b,m[i+11],16,1839030562);
b=HH(b,c,d,a,m[i+14],23,-35309556);
a=HH(a,b,c,d,m[i+1],4,-1530992060);
d=HH(d,a,b,c,m[i+4],11,1272893353);
c=HH(c,d,a,b,m[i+7],16,-155497632);
b=HH(b,c,d,a,m[i+10],23,-1094730640);
a=HH(a,b,c,d,m[i+13],4,681279174);
d=HH(d,a,b,c,m[i+0],11,-358537222);
c=HH(c,d,a,b,m[i+3],16,-722521979);
b=HH(b,c,d,a,m[i+6],23,76029189);
a=HH(a,b,c,d,m[i+9],4,-640364487);
d=HH(d,a,b,c,m[i+12],11,-421815835);
c=HH(c,d,a,b,m[i+15],16,530742520);
b=HH(b,c,d,a,m[i+2],23,-995338651);

a=II(a,b,c,d,m[i+0],6,-198630844);
d=II(d,a,b,c,m[i+7],10,1126891415);
c=II(c,d,a,b,m[i+14],15,-1416354905);
b=II(b,c,d,a,m[i+5],21,-57434055);
a=II(a,b,c,d,m[i+12],6,1700485571);
d=II(d,a,b,c,m[i+3],10,-1894986606);
c=II(c,d,a,b,m[i+10],15,-1051523);
b=II(b,c,d,a,m[i+1],21,-2054922799);
a=II(a,b,c,d,m[i+8],6,1873313359);
d=II(d,a,b,c,m[i+15],10,-30611744);
c=II(c,d,a,b,m[i+6],15,-1560198380);
b=II(b,c,d,a,m[i+13],21,1309151649);
a=II(a,b,c,d,m[i+4],6,-145523070);
d=II(d,a,b,c,m[i+11],10,-1120210379);
c=II(c,d,a,b,m[i+2],15,718787259);
b=II(b,c,d,a,m[i+9],21,-343485551);

a=a+aa>>>0;
b=b+bb>>>0;
c=c+cc>>>0;
d=d+dd>>>0;
}

return crypt.endian([a,b,c,d]);
};

// Auxiliary functions
md5._ff=function(a,b,c,d,x,s,t){
var n=a+(b&c|~b&d)+(x>>>0)+t;
return(n<<s|n>>>32-s)+b;
};
md5._gg=function(a,b,c,d,x,s,t){
var n=a+(b&d|c&~d)+(x>>>0)+t;
return(n<<s|n>>>32-s)+b;
};
md5._hh=function(a,b,c,d,x,s,t){
var n=a+(b^c^d)+(x>>>0)+t;
return(n<<s|n>>>32-s)+b;
};
md5._ii=function(a,b,c,d,x,s,t){
var n=a+(c^(b|~d))+(x>>>0)+t;
return(n<<s|n>>>32-s)+b;
};

// Package private blocksize
md5._blocksize=16;
md5._digestsize=16;

module.exports=function(message,options){
if(message===undefined||message===null)
throw new Error('Illegal argument '+message);

var digestbytes=crypt.wordsToBytes(md5(message,options));
return options&&options.asBytes?digestbytes:
options&&options.asString?bin.bytesToString(digestbytes):
crypt.bytesToHex(digestbytes);
};

})();


/***/},
/* 58 */
/***/function(module,exports){

(function(){
var base64map=
'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

crypt={
// Bit-wise rotation left
rotl:function rotl(n,b){
return n<<b|n>>>32-b;
},

// Bit-wise rotation right
rotr:function rotr(n,b){
return n<<32-b|n>>>b;
},

// Swap big-endian to little-endian and vice versa
endian:function endian(n){
// If number given, swap endian
if(n.constructor==Number){
return crypt.rotl(n,8)&0x00FF00FF|crypt.rotl(n,24)&0xFF00FF00;
}

// Else, assume array and swap all items
for(var i=0;i<n.length;i++){
n[i]=crypt.endian(n[i]);}
return n;
},

// Generate an array of any length of random bytes
randomBytes:function randomBytes(n){
for(var bytes=[];n>0;n--){
bytes.push(Math.floor(Math.random()*256));}
return bytes;
},

// Convert a byte array to big-endian 32-bit words
bytesToWords:function bytesToWords(bytes){
for(var words=[],i=0,b=0;i<bytes.length;i++,b+=8){
words[b>>>5]|=bytes[i]<<24-b%32;}
return words;
},

// Convert big-endian 32-bit words to a byte array
wordsToBytes:function wordsToBytes(words){
for(var bytes=[],b=0;b<words.length*32;b+=8){
bytes.push(words[b>>>5]>>>24-b%32&0xFF);}
return bytes;
},

// Convert a byte array to a hex string
bytesToHex:function bytesToHex(bytes){
for(var hex=[],i=0;i<bytes.length;i++){
hex.push((bytes[i]>>>4).toString(16));
hex.push((bytes[i]&0xF).toString(16));
}
return hex.join('');
},

// Convert a hex string to a byte array
hexToBytes:function hexToBytes(hex){
for(var bytes=[],c=0;c<hex.length;c+=2){
bytes.push(parseInt(hex.substr(c,2),16));}
return bytes;
},

// Convert a byte array to a base-64 string
bytesToBase64:function bytesToBase64(bytes){
for(var base64=[],i=0;i<bytes.length;i+=3){
var triplet=bytes[i]<<16|bytes[i+1]<<8|bytes[i+2];
for(var j=0;j<4;j++){
if(i*8+j*6<=bytes.length*8)
base64.push(base64map.charAt(triplet>>>6*(3-j)&0x3F));else

base64.push('=');}
}
return base64.join('');
},

// Convert a base-64 string to a byte array
base64ToBytes:function base64ToBytes(base64){
// Remove non-base-64 characters
base64=base64.replace(/[^A-Z0-9+\/]/ig,'');

for(var bytes=[],i=0,imod4=0;i<base64.length;
imod4=++i%4){
if(imod4==0)continue;
bytes.push((base64map.indexOf(base64.charAt(i-1))&
Math.pow(2,-2*imod4+8)-1)<<imod4*2|
base64map.indexOf(base64.charAt(i))>>>6-imod4*2);
}
return bytes;
}};


module.exports=crypt;
})();


/***/},
/* 59 */
/***/function(module,exports){

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports=function(obj){
return obj!=null&&(isBuffer(obj)||isSlowBuffer(obj)||!!obj._isBuffer);
};

function isBuffer(obj){
return!!obj.constructor&&typeof obj.constructor.isBuffer==='function'&&obj.constructor.isBuffer(obj);
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer(obj){
return typeof obj.readFloatLE==='function'&&typeof obj.slice==='function'&&isBuffer(obj.slice(0,0));
}


/***/},
/* 60 */
/***/function(module,exports,__webpack_require__){

"use strict";


var dataURItoBlob=function dataURItoBlob(dataURI,type){
var byteString;

// 传入的 base64，不是 dataURL
if(dataURI.indexOf('base64')<0){
byteString=atob(dataURI);
}else if(dataURI.split(',')[0].indexOf('base64')>=0){
type=type||dataURI.split(',')[0].split(':')[1].split(';')[0];
byteString=atob(dataURI.split(',')[1]);
}else{
byteString=unescape(dataURI.split(',')[1]);
}
var ia=new Uint8Array(byteString.length);
for(var i=0;i<byteString.length;i++){
ia[i]=byteString.charCodeAt(i);
}
return new Blob([ia],{type:type});
};

module.exports=dataURItoBlob;

/***/},
/* 61 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();

var _=__webpack_require__(0);
var AVError=__webpack_require__(4);
var Promise=__webpack_require__(1);

var _require=__webpack_require__(2),
_request=_require._request;

var _require2=__webpack_require__(3),
isNullOrUndefined=_require2.isNullOrUndefined,
ensureArray=_require2.ensureArray,
transformFetchOptions=_require2.transformFetchOptions,
setValue=_require2.setValue,
findValue=_require2.findValue,
isPlainObject=_require2.isPlainObject;

var recursiveToPointer=function recursiveToPointer(value){
if(_.isArray(value))return value.map(recursiveToPointer);
if(isPlainObject(value))return _.mapObject(value,recursiveToPointer);
if(_.isObject(value)&&value._toPointer)return value._toPointer();
return value;
};

var RESERVED_KEYS=['objectId','createdAt','updatedAt'];
var checkReservedKey=function checkReservedKey(key){
if(RESERVED_KEYS.indexOf(key)!==-1){
throw new Error('key['+key+'] is reserved');
}
};

var handleBatchResults=function handleBatchResults(results){
var firstError=_.find(results,function(result){
return result instanceof Error;
});
if(!firstError){
return results;
}
var error=new AVError(firstError.code,firstError.message);
error.results=results;
throw error;
};

// Helper function to get a value from a Backbone object as a property
// or as a function.
function getValue(object,prop){
if(!(object&&object[prop])){
return null;
}
return _.isFunction(object[prop])?object[prop]():object[prop];
}

// AV.Object is analogous to the Java AVObject.
// It also implements the same interface as a Backbone model.

module.exports=function(AV){
/**
   * Creates a new model with defined attributes. A client id (cid) is
   * automatically generated and assigned for you.
   *
   * <p>You won't normally call this method directly.  It is recommended that
   * you use a subclass of <code>AV.Object</code> instead, created by calling
   * <code>extend</code>.</p>
   *
   * <p>However, if you don't want to use a subclass, or aren't sure which
   * subclass is appropriate, you can use this form:<pre>
   *     var object = new AV.Object("ClassName");
   * </pre>
   * That is basically equivalent to:<pre>
   *     var MyClass = AV.Object.extend("ClassName");
   *     var object = new MyClass();
   * </pre></p>
   *
   * @param {Object} attributes The initial set of data to store in the object.
   * @param {Object} options A set of Backbone-like options for creating the
   *     object.  The only option currently supported is "collection".
   * @see AV.Object.extend
   *
   * @class
   *
   * <p>The fundamental unit of AV data, which implements the Backbone Model
   * interface.</p>
   */
AV.Object=function(attributes,options){
// Allow new AV.Object("ClassName") as a shortcut to _create.
if(_.isString(attributes)){
return AV.Object._create.apply(this,arguments);
}

attributes=attributes||{};
if(options&&options.parse){
attributes=this.parse(attributes);
attributes=this._mergeMagicFields(attributes);
}
var defaults=getValue(this,'defaults');
if(defaults){
attributes=_.extend({},defaults,attributes);
}
if(options&&options.collection){
this.collection=options.collection;
}

this._serverData={};// The last known data for this object from cloud.
this._opSetQueue=[{}];// List of sets of changes to the data.
this._flags={};
this.attributes={};// The best estimate of this's current data.

this._hashedJSON={};// Hash of values of containers at last save.
this._escapedAttributes={};
this.cid=_.uniqueId('c');
this.changed={};
this._silent={};
this._pending={};
this.set(attributes,{silent:true});
this.changed={};
this._silent={};
this._pending={};
this._hasData=true;
this._previousAttributes=_.clone(this.attributes);
this.initialize.apply(this,arguments);
};

/**
   * @lends AV.Object.prototype
   * @property {String} id The objectId of the AV Object.
   */

/**
   * Saves the given list of AV.Object.
   * If any error is encountered, stops and calls the error handler.
   *
   * @example
   * AV.Object.saveAll([object1, object2, ...]).then(function(list) {
   *   // All the objects were saved.
   * }, function(error) {
   *   // An error occurred while saving one of the objects.
   * });
   *
   * @param {Array} list A list of <code>AV.Object</code>.
   */
AV.Object.saveAll=function(list,options){
return AV.Object._deepSaveAsync(list,null,options);
};

/**
   * Fetch the given list of AV.Object.
   *
   * @param {AV.Object[]} objects A list of <code>AV.Object</code>
   * @param {AuthOptions} options
   * @return {Promise.<AV.Object[]>} The given list of <code>AV.Object</code>, updated
   */

AV.Object.fetchAll=function(objects,options){
return Promise.resolve().then(function(){
return _request('batch',null,null,'POST',{
requests:_.map(objects,function(object){
if(!object.className)throw new Error('object must have className to fetch');
if(!object.id)throw new Error('object must have id to fetch');
if(object.dirty())throw new Error('object is modified but not saved');
return{
method:'GET',
path:'/1.1/classes/'+object.className+'/'+object.id};

})},
options);
}).then(function(response){
var results=_.map(objects,function(object,i){
if(response[i].success){
var fetchedAttrs=object.parse(response[i].success);
object._cleanupUnsetKeys(fetchedAttrs);
object._finishFetch(fetchedAttrs);
return object;
}
if(response[i].success===null){
return new AVError(AVError.OBJECT_NOT_FOUND,'Object not found.');
}
return new AVError(response[i].error.code,response[i].error.error);
});
return handleBatchResults(results);
});
};

// Attach all inheritable methods to the AV.Object prototype.
_.extend(AV.Object.prototype,AV.Events,
/** @lends AV.Object.prototype */{
_fetchWhenSave:false,

/**
     * Initialize is an empty function by default. Override it with your own
     * initialization logic.
     */
initialize:function initialize(){},

/**
     * Set whether to enable fetchWhenSave option when updating object.
     * When set true, SDK would fetch the latest object after saving.
     * Default is false.
     *
     * @deprecated use AV.Object#save with options.fetchWhenSave instead
     * @param {boolean} enable  true to enable fetchWhenSave option.
     */
fetchWhenSave:function fetchWhenSave(enable){
console.warn('AV.Object#fetchWhenSave is deprecated, use AV.Object#save with options.fetchWhenSave instead.');
if(!_.isBoolean(enable)){
throw new Error('Expect boolean value for fetchWhenSave');
}
this._fetchWhenSave=enable;
},

/**
     * Returns the object's objectId.
     * @return {String} the objectId.
     */
getObjectId:function getObjectId(){
return this.id;
},

/**
     * Returns the object's createdAt attribute.
     * @return {Date}
     */
getCreatedAt:function getCreatedAt(){
return this.createdAt||this.get('createdAt');
},

/**
     * Returns the object's updatedAt attribute.
     * @return {Date}
     */
getUpdatedAt:function getUpdatedAt(){
return this.updatedAt||this.get('updatedAt');
},

/**
     * Returns a JSON version of the object.
     * @return {Object}
     */
toJSON:function toJSON(key,holder){
var seenObjects=arguments.length>2&&arguments[2]!==undefined?arguments[2]:[];

return this._toFullJSON(seenObjects,false);
},

/**
     * Returns a JSON version of the object with meta data.
     * Inverse to {@link AV.parseJSON}
     * @since 2.0.0
     * @return {Object}
     */
toFullJSON:function toFullJSON(){
var seenObjects=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];

return this._toFullJSON(seenObjects);
},


_toFullJSON:function _toFullJSON(seenObjects){
var _this=this;

var full=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;

var json=_.clone(this.attributes);
if(_.isArray(seenObjects)){
var newSeenObjects=seenObjects.concat(this);
}
AV._objectEach(json,function(val,key){
json[key]=AV._encode(val,newSeenObjects,undefined,full);
});
AV._objectEach(this._operations,function(val,key){
json[key]=val;
});

if(_.has(this,'id')){
json.objectId=this.id;
}
_(['createdAt','updatedAt']).each(function(key){
if(_.has(_this,key)){
var val=_this[key];
json[key]=_.isDate(val)?val.toJSON():val;
}
});
if(full){
json.__type='Object';
if(_.isArray(seenObjects)&&seenObjects.length)json.__type='Pointer';
json.className=this.className;
}
return json;
},

/**
     * Updates _hashedJSON to reflect the current state of this object.
     * Adds any changed hash values to the set of pending changes.
     * @private
     */
_refreshCache:function _refreshCache(){
var self=this;
if(self._refreshingCache){
return;
}
self._refreshingCache=true;
AV._objectEach(this.attributes,function(value,key){
if(value instanceof AV.Object){
value._refreshCache();
}else if(_.isObject(value)){
if(self._resetCacheForKey(key)){
self.set(key,new AV.Op.Set(value),{silent:true});
}
}
});
delete self._refreshingCache;
},

/**
     * Returns true if this object has been modified since its last
     * save/refresh.  If an attribute is specified, it returns true only if that
     * particular attribute has been modified since the last save/refresh.
     * @param {String} attr An attribute name (optional).
     * @return {Boolean}
     */
dirty:function dirty(attr){
this._refreshCache();

var currentChanges=_.last(this._opSetQueue);

if(attr){
return currentChanges[attr]?true:false;
}
if(!this.id){
return true;
}
if(_.keys(currentChanges).length>0){
return true;
}
return false;
},

/**
     * Gets a Pointer referencing this Object.
     * @private
     */
_toPointer:function _toPointer(){
// if (!this.id) {
//   throw new Error("Can't serialize an unsaved AV.Object");
// }
return{
__type:'Pointer',
className:this.className,
objectId:this.id};

},

/**
     * Gets the value of an attribute.
     * @param {String} attr The string name of an attribute.
     */
get:function get(attr){
switch(attr){
case'objectId':
return this.id;
case'createdAt':
case'updatedAt':
return this[attr];
default:
return this.attributes[attr];}

},

/**
     * Gets a relation on the given class for the attribute.
     * @param {String} attr The attribute to get the relation for.
     * @return {AV.Relation}
     */
relation:function relation(attr){
var value=this.get(attr);
if(value){
if(!(value instanceof AV.Relation)){
throw new Error('Called relation() on non-relation field '+attr);
}
value._ensureParentAndKey(this,attr);
return value;
}else{
return new AV.Relation(this,attr);
}
},

/**
     * Gets the HTML-escaped value of an attribute.
     */
escape:function escape(attr){
var html=this._escapedAttributes[attr];
if(html){
return html;
}
var val=this.attributes[attr];
var escaped;
if(isNullOrUndefined(val)){
escaped='';
}else{
escaped=_.escape(val.toString());
}
this._escapedAttributes[attr]=escaped;
return escaped;
},

/**
     * Returns <code>true</code> if the attribute contains a value that is not
     * null or undefined.
     * @param {String} attr The string name of the attribute.
     * @return {Boolean}
     */
has:function has(attr){
return!isNullOrUndefined(this.attributes[attr]);
},

/**
     * Pulls "special" fields like objectId, createdAt, etc. out of attrs
     * and puts them on "this" directly.  Removes them from attrs.
     * @param attrs - A dictionary with the data for this AV.Object.
     * @private
     */
_mergeMagicFields:function _mergeMagicFields(attrs){
// Check for changes of magic fields.
var model=this;
var specialFields=['objectId','createdAt','updatedAt'];
AV._arrayEach(specialFields,function(attr){
if(attrs[attr]){
if(attr==='objectId'){
model.id=attrs[attr];
}else if((attr==='createdAt'||attr==='updatedAt')&&!_.isDate(attrs[attr])){
model[attr]=AV._parseDate(attrs[attr]);
}else{
model[attr]=attrs[attr];
}
delete attrs[attr];
}
});
return attrs;
},

/**
     * Returns the json to be sent to the server.
     * @private
     */
_startSave:function _startSave(){
this._opSetQueue.push({});
},

/**
     * Called when a save fails because of an error. Any changes that were part
     * of the save need to be merged with changes made after the save. This
     * might throw an exception is you do conflicting operations. For example,
     * if you do:
     *   object.set("foo", "bar");
     *   object.set("invalid field name", "baz");
     *   object.save();
     *   object.increment("foo");
     * then this will throw when the save fails and the client tries to merge
     * "bar" with the +1.
     * @private
     */
_cancelSave:function _cancelSave(){
var failedChanges=_.first(this._opSetQueue);
this._opSetQueue=_.rest(this._opSetQueue);
var nextChanges=_.first(this._opSetQueue);
AV._objectEach(failedChanges,function(op,key){
var op1=failedChanges[key];
var op2=nextChanges[key];
if(op1&&op2){
nextChanges[key]=op2._mergeWithPrevious(op1);
}else if(op1){
nextChanges[key]=op1;
}
});
this._saving=this._saving-1;
},

/**
     * Called when a save completes successfully. This merges the changes that
     * were saved into the known server data, and overrides it with any data
     * sent directly from the server.
     * @private
     */
_finishSave:function _finishSave(serverData){
// Grab a copy of any object referenced by this object. These instances
// may have already been fetched, and we don't want to lose their data.
// Note that doing it like this means we will unify separate copies of the
// same object, but that's a risk we have to take.
var fetchedObjects={};
AV._traverse(this.attributes,function(object){
if(object instanceof AV.Object&&object.id&&object._hasData){
fetchedObjects[object.id]=object;
}
});

var savedChanges=_.first(this._opSetQueue);
this._opSetQueue=_.rest(this._opSetQueue);
this._applyOpSet(savedChanges,this._serverData);
this._mergeMagicFields(serverData);
var self=this;
AV._objectEach(serverData,function(value,key){
self._serverData[key]=AV._decode(value,key);

// Look for any objects that might have become unfetched and fix them
// by replacing their values with the previously observed values.
var fetched=AV._traverse(self._serverData[key],function(object){
if(object instanceof AV.Object&&fetchedObjects[object.id]){
return fetchedObjects[object.id];
}
});
if(fetched){
self._serverData[key]=fetched;
}
});
this._rebuildAllEstimatedData();
var opSetQueue=this._opSetQueue.map(_.clone);
this._refreshCache();
this._opSetQueue=opSetQueue;
this._saving=this._saving-1;
},

/**
     * Called when a fetch or login is complete to set the known server data to
     * the given object.
     * @private
     */
_finishFetch:function _finishFetch(serverData,hasData){
// Clear out any changes the user might have made previously.
this._opSetQueue=[{}];

// Bring in all the new server data.
this._mergeMagicFields(serverData);
var self=this;
AV._objectEach(serverData,function(value,key){
self._serverData[key]=AV._decode(value,key);
});

// Refresh the attributes.
this._rebuildAllEstimatedData();

// Clear out the cache of mutable containers.
this._refreshCache();
this._opSetQueue=[{}];

this._hasData=hasData;
},

/**
     * Applies the set of AV.Op in opSet to the object target.
     * @private
     */
_applyOpSet:function _applyOpSet(opSet,target){
var self=this;
AV._objectEach(opSet,function(change,key){
var _findValue=findValue(target,key),
_findValue2=_slicedToArray(_findValue,3),
value=_findValue2[0],
actualTarget=_findValue2[1],
actualKey=_findValue2[2];

setValue(target,key,change._estimate(value,self,key));
if(actualTarget&&actualTarget[actualKey]===AV.Op._UNSET){
delete actualTarget[actualKey];
}
});
},

/**
     * Replaces the cached value for key with the current value.
     * Returns true if the new value is different than the old value.
     * @private
     */
_resetCacheForKey:function _resetCacheForKey(key){
var value=this.attributes[key];
if(_.isObject(value)&&!(value instanceof AV.Object)&&!(value instanceof AV.File)){
var json=JSON.stringify(recursiveToPointer(value));
if(this._hashedJSON[key]!==json){
var wasSet=!!this._hashedJSON[key];
this._hashedJSON[key]=json;
return wasSet;
}
}
return false;
},

/**
     * Populates attributes[key] by starting with the last known data from the
     * server, and applying all of the local changes that have been made to that
     * key since then.
     * @private
     */
_rebuildEstimatedDataForKey:function _rebuildEstimatedDataForKey(key){
var self=this;
delete this.attributes[key];
if(this._serverData[key]){
this.attributes[key]=this._serverData[key];
}
AV._arrayEach(this._opSetQueue,function(opSet){
var op=opSet[key];
if(op){
var _findValue3=findValue(self.attributes,key),
_findValue4=_slicedToArray(_findValue3,4),
value=_findValue4[0],
actualTarget=_findValue4[1],
actualKey=_findValue4[2],
firstKey=_findValue4[3];

setValue(self.attributes,key,op._estimate(value,self,key));
if(actualTarget&&actualTarget[actualKey]===AV.Op._UNSET){
delete actualTarget[actualKey];
}
self._resetCacheForKey(firstKey);
}
});
},

/**
     * Populates attributes by starting with the last known data from the
     * server, and applying all of the local changes that have been made since
     * then.
     * @private
     */
_rebuildAllEstimatedData:function _rebuildAllEstimatedData(){
var self=this;

var previousAttributes=_.clone(this.attributes);

this.attributes=_.clone(this._serverData);
AV._arrayEach(this._opSetQueue,function(opSet){
self._applyOpSet(opSet,self.attributes);
AV._objectEach(opSet,function(op,key){
self._resetCacheForKey(key);
});
});

// Trigger change events for anything that changed because of the fetch.
AV._objectEach(previousAttributes,function(oldValue,key){
if(self.attributes[key]!==oldValue){
self.trigger('change:'+key,self,self.attributes[key],{});
}
});
AV._objectEach(this.attributes,function(newValue,key){
if(!_.has(previousAttributes,key)){
self.trigger('change:'+key,self,newValue,{});
}
});
},

/**
     * Sets a hash of model attributes on the object, firing
     * <code>"change"</code> unless you choose to silence it.
     *
     * <p>You can call it with an object containing keys and values, or with one
     * key and value.  For example:</p>
     *
     * @example
     * gameTurn.set({
     *   player: player1,
     *   diceRoll: 2
     * });
     *
     * game.set("currentPlayer", player2);
     *
     * game.set("finished", true);
     *
     * @param {String} key The key to set.
     * @param {Any} value The value to give it.
     * @param {Object} [options]
     * @param {Boolean} [options.silent]
     * @return {AV.Object} self if succeeded, throws if the value is not valid.
     * @see AV.Object#validate
     */
set:function set(key,value,options){
var attrs;
if(_.isObject(key)||isNullOrUndefined(key)){
attrs=_.mapObject(key,function(v,k){
checkReservedKey(k);
return AV._decode(v,k);
});
options=value;
}else{
attrs={};
checkReservedKey(key);
attrs[key]=AV._decode(value,key);
}

// Extract attributes and options.
options=options||{};
if(!attrs){
return this;
}
if(attrs instanceof AV.Object){
attrs=attrs.attributes;
}

// If the unset option is used, every attribute should be a Unset.
if(options.unset){
AV._objectEach(attrs,function(unused_value,key){
attrs[key]=new AV.Op.Unset();
});
}

// Apply all the attributes to get the estimated values.
var dataToValidate=_.clone(attrs);
var self=this;
AV._objectEach(dataToValidate,function(value,key){
if(value instanceof AV.Op){
dataToValidate[key]=value._estimate(self.attributes[key],self,key);
if(dataToValidate[key]===AV.Op._UNSET){
delete dataToValidate[key];
}
}
});

// Run validation.
this._validate(attrs,options);

options.changes={};
var escaped=this._escapedAttributes;

// Update attributes.
AV._arrayEach(_.keys(attrs),function(attr){
var val=attrs[attr];

// If this is a relation object we need to set the parent correctly,
// since the location where it was parsed does not have access to
// this object.
if(val instanceof AV.Relation){
val.parent=self;
}

if(!(val instanceof AV.Op)){
val=new AV.Op.Set(val);
}

// See if this change will actually have any effect.
var isRealChange=true;
if(val instanceof AV.Op.Set&&_.isEqual(self.attributes[attr],val.value)){
isRealChange=false;
}

if(isRealChange){
delete escaped[attr];
if(options.silent){
self._silent[attr]=true;
}else{
options.changes[attr]=true;
}
}

var currentChanges=_.last(self._opSetQueue);
currentChanges[attr]=val._mergeWithPrevious(currentChanges[attr]);
self._rebuildEstimatedDataForKey(attr);

if(isRealChange){
self.changed[attr]=self.attributes[attr];
if(!options.silent){
self._pending[attr]=true;
}
}else{
delete self.changed[attr];
delete self._pending[attr];
}
});

if(!options.silent){
this.change(options);
}
return this;
},

/**
     * Remove an attribute from the model, firing <code>"change"</code> unless
     * you choose to silence it. This is a noop if the attribute doesn't
     * exist.
     * @param key {String} The key.
     */
unset:function unset(attr,options){
options=options||{};
options.unset=true;
return this.set(attr,null,options);
},

/**
     * Atomically increments the value of the given attribute the next time the
     * object is saved. If no amount is specified, 1 is used by default.
     *
     * @param key {String} The key.
     * @param amount {Number} The amount to increment by.
     */
increment:function increment(attr,amount){
if(_.isUndefined(amount)||_.isNull(amount)){
amount=1;
}
return this.set(attr,new AV.Op.Increment(amount));
},

/**
     * Atomically add an object to the end of the array associated with a given
     * key.
     * @param key {String} The key.
     * @param item {} The item to add.
     */
add:function add(attr,item){
return this.set(attr,new AV.Op.Add(ensureArray(item)));
},

/**
     * Atomically add an object to the array associated with a given key, only
     * if it is not already present in the array. The position of the insert is
     * not guaranteed.
     *
     * @param key {String} The key.
     * @param item {} The object to add.
     */
addUnique:function addUnique(attr,item){
return this.set(attr,new AV.Op.AddUnique(ensureArray(item)));
},

/**
     * Atomically remove all instances of an object from the array associated
     * with a given key.
     *
     * @param key {String} The key.
     * @param item {} The object to remove.
     */
remove:function remove(attr,item){
return this.set(attr,new AV.Op.Remove(ensureArray(item)));
},

/**
     * Atomically apply a "bit and" operation on the value associated with a
     * given key.
     *
     * @param key {String} The key.
     * @param value {Number} The value to apply.
     */
bitAnd:function bitAnd(attr,value){
return this.set(attr,new AV.Op.BitAnd(value));
},


/**
     * Atomically apply a "bit or" operation on the value associated with a
     * given key.
     *
     * @param key {String} The key.
     * @param value {Number} The value to apply.
     */
bitOr:function bitOr(attr,value){
return this.set(attr,new AV.Op.BitOr(value));
},


/**
     * Atomically apply a "bit xor" operation on the value associated with a
     * given key.
     *
     * @param key {String} The key.
     * @param value {Number} The value to apply.
     */
bitXor:function bitXor(attr,value){
return this.set(attr,new AV.Op.BitXor(value));
},


/**
     * Returns an instance of a subclass of AV.Op describing what kind of
     * modification has been performed on this field since the last time it was
     * saved. For example, after calling object.increment("x"), calling
     * object.op("x") would return an instance of AV.Op.Increment.
     *
     * @param key {String} The key.
     * @returns {AV.Op} The operation, or undefined if none.
     */
op:function op(attr){
return _.last(this._opSetQueue)[attr];
},

/**
     * Clear all attributes on the model, firing <code>"change"</code> unless
     * you choose to silence it.
     */
clear:function clear(options){
options=options||{};
options.unset=true;
var keysToClear=_.extend(this.attributes,this._operations);
return this.set(keysToClear,options);
},

/**
     * Clears any (or specific) changes to the model made since the last save.
     * @param {string|string[]} [keys] specify keys to revert.
     */
revert:function revert(keys){
var lastOp=_.last(this._opSetQueue);
var _keys=ensureArray(keys||_.keys(lastOp));
_keys.forEach(function(key){
delete lastOp[key];
});
this._rebuildAllEstimatedData();
return this;
},


/**
     * Returns a JSON-encoded set of operations to be sent with the next save
     * request.
     * @private
     */
_getSaveJSON:function _getSaveJSON(){
var json=_.clone(_.first(this._opSetQueue));
AV._objectEach(json,function(op,key){
json[key]=op.toJSON();
});
return json;
},

/**
     * Returns true if this object can be serialized for saving.
     * @private
     */
_canBeSerialized:function _canBeSerialized(){
return AV.Object._canBeSerializedAsValue(this.attributes);
},

/**
     * Fetch the model from the server. If the server's representation of the
     * model differs from its current attributes, they will be overriden,
     * triggering a <code>"change"</code> event.
     * @param {Object} fetchOptions Optional options to set 'keys',
     *      'include' and 'includeACL' option.
     * @param {AuthOptions} options
     * @return {Promise} A promise that is fulfilled when the fetch
     *     completes.
     */
fetch:function fetch(){
var fetchOptions=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};
var options=arguments[1];

var self=this;
var request=_request('classes',this.className,this.id,'GET',transformFetchOptions(fetchOptions),options);
return request.then(function(response){
var fetchedAttrs=self.parse(response);
if(!fetchOptions.keys)self._cleanupUnsetKeys(fetchedAttrs);
self._finishFetch(fetchedAttrs,true);
return self;
});
},

_cleanupUnsetKeys:function _cleanupUnsetKeys(fetchedAttrs){
var _this2=this;

AV._objectEach(this._serverData,function(value,key){
if(fetchedAttrs[key]===undefined)delete _this2._serverData[key];
});
},


/**
     * Set a hash of model attributes, and save the model to the server.
     * updatedAt will be updated when the request returns.
     * You can either call it as:<pre>
     *   object.save();</pre>
     * or<pre>
     *   object.save(null, options);</pre>
     * or<pre>
     *   object.save(attrs, options);</pre>
     * or<pre>
     *   object.save(key, value, options);</pre>
     *
     * @example
     * gameTurn.save({
     *   player: "Jake Cutter",
     *   diceRoll: 2
     * }).then(function(gameTurnAgain) {
     *   // The save was successful.
     * }, function(error) {
     *   // The save failed.  Error is an instance of AVError.
     * });
     *
     * @param {AuthOptions} options AuthOptions plus:
     * @param {Boolean} options.fetchWhenSave fetch and update object after save succeeded
     * @param {AV.Query} options.query Save object only when it matches the query
     * @return {Promise} A promise that is fulfilled when the save
     *     completes.
     * @see AVError
     */
save:function save(arg1,arg2,arg3){
var attrs,current,options;
if(_.isObject(arg1)||isNullOrUndefined(arg1)){
attrs=arg1;
options=arg2;
}else{
attrs={};
attrs[arg1]=arg2;
options=arg3;
}

options=_.clone(options)||{};
if(options.wait){
current=_.clone(this.attributes);
}

var setOptions=_.clone(options)||{};
if(setOptions.wait){
setOptions.silent=true;
}
if(attrs){
this.set(attrs,setOptions);
}

var model=this;

var unsavedChildren=[];
var unsavedFiles=[];
AV.Object._findUnsavedChildren(model,unsavedChildren,unsavedFiles);
if(unsavedChildren.length+unsavedFiles.length>1){
return AV.Object._deepSaveAsync(this,model,options);
}

this._startSave();
this._saving=(this._saving||0)+1;

this._allPreviousSaves=this._allPreviousSaves||Promise.resolve();
this._allPreviousSaves=this._allPreviousSaves.catch(function(e){}).then(function(){
var method=model.id?'PUT':'POST';

var json=model._getSaveJSON();
var query={};

if(model._fetchWhenSave||options.fetchWhenSave){
query['new']='true';
}
// user login option
if(options._failOnNotExist){
query.failOnNotExist='true';
}

if(options.query){
var queryJSON;
if(typeof options.query.toJSON==='function'){
queryJSON=options.query.toJSON();
if(queryJSON){
query.where=queryJSON.where;
}
}
if(!query.where){
var error=new Error('options.query is not an AV.Query');
throw error;
}
}

_.extend(json,model._flags);

var route='classes';
var className=model.className;
if(model.className==='_User'&&!model.id){
// Special-case user sign-up.
route='users';
className=null;
}
//hook makeRequest in options.
var makeRequest=options._makeRequest||_request;
var requestPromise=makeRequest(route,className,model.id,method,json,options,query);

requestPromise=requestPromise.then(function(resp){
var serverAttrs=model.parse(resp);
if(options.wait){
serverAttrs=_.extend(attrs||{},serverAttrs);
}
model._finishSave(serverAttrs);
if(options.wait){
model.set(current,setOptions);
}
return model;
},function(error){
model._cancelSave();
throw error;
});

return requestPromise;
});
return this._allPreviousSaves;
},

/**
     * Destroy this model on the server if it was already persisted.
     * Optimistically removes the model from its collection, if it has one.
     * @param {AuthOptions} options AuthOptions plus:
     * @param {Boolean} [options.wait] wait for the server to respond
     * before removal.
     *
     * @return {Promise} A promise that is fulfilled when the destroy
     *     completes.
     */
destroy:function destroy(options){
options=options||{};
var model=this;

var triggerDestroy=function triggerDestroy(){
model.trigger('destroy',model,model.collection,options);
};

if(!this.id){
return triggerDestroy();
}

if(!options.wait){
triggerDestroy();
}

var request=_request('classes',this.className,this.id,'DELETE',this._flags,options);
return request.then(function(){
if(options.wait){
triggerDestroy();
}
return model;
});
},

/**
     * Converts a response into the hash of attributes to be set on the model.
     * @ignore
     */
parse:function parse(resp){
var output=_.clone(resp);
_(['createdAt','updatedAt']).each(function(key){
if(output[key]){
output[key]=AV._parseDate(output[key]);
}
});
if(output.createdAt&&!output.updatedAt){
output.updatedAt=output.createdAt;
}
return output;
},

/**
     * Creates a new model with identical attributes to this one.
     * @return {AV.Object}
     */
clone:function clone(){
return new this.constructor(this.attributes);
},

/**
     * Returns true if this object has never been saved to AV.
     * @return {Boolean}
     */
isNew:function isNew(){
return!this.id;
},

/**
     * Call this method to manually fire a `"change"` event for this model and
     * a `"change:attribute"` event for each changed attribute.
     * Calling this will cause all objects observing the model to update.
     */
change:function change(options){
options=options||{};
var changing=this._changing;
this._changing=true;

// Silent changes become pending changes.
var self=this;
AV._objectEach(this._silent,function(attr){
self._pending[attr]=true;
});

// Silent changes are triggered.
var changes=_.extend({},options.changes,this._silent);
this._silent={};
AV._objectEach(changes,function(unused_value,attr){
self.trigger('change:'+attr,self,self.get(attr),options);
});
if(changing){
return this;
}

// This is to get around lint not letting us make a function in a loop.
var deleteChanged=function deleteChanged(value,attr){
if(!self._pending[attr]&&!self._silent[attr]){
delete self.changed[attr];
}
};

// Continue firing `"change"` events while there are pending changes.
while(!_.isEmpty(this._pending)){
this._pending={};
this.trigger('change',this,options);
// Pending and silent changes still remain.
AV._objectEach(this.changed,deleteChanged);
self._previousAttributes=_.clone(this.attributes);
}

this._changing=false;
return this;
},

/**
     * Determine if the model has changed since the last <code>"change"</code>
     * event.  If you specify an attribute name, determine if that attribute
     * has changed.
     * @param {String} attr Optional attribute name
     * @return {Boolean}
     */
hasChanged:function hasChanged(attr){
if(!arguments.length){
return!_.isEmpty(this.changed);
}
return this.changed&&_.has(this.changed,attr);
},

/**
     * Returns an object containing all the attributes that have changed, or
     * false if there are no changed attributes. Useful for determining what
     * parts of a view need to be updated and/or what attributes need to be
     * persisted to the server. Unset attributes will be set to undefined.
     * You can also pass an attributes object to diff against the model,
     * determining if there *would be* a change.
     */
changedAttributes:function changedAttributes(diff){
if(!diff){
return this.hasChanged()?_.clone(this.changed):false;
}
var changed={};
var old=this._previousAttributes;
AV._objectEach(diff,function(diffVal,attr){
if(!_.isEqual(old[attr],diffVal)){
changed[attr]=diffVal;
}
});
return changed;
},

/**
     * Gets the previous value of an attribute, recorded at the time the last
     * <code>"change"</code> event was fired.
     * @param {String} attr Name of the attribute to get.
     */
previous:function previous(attr){
if(!arguments.length||!this._previousAttributes){
return null;
}
return this._previousAttributes[attr];
},

/**
     * Gets all of the attributes of the model at the time of the previous
     * <code>"change"</code> event.
     * @return {Object}
     */
previousAttributes:function previousAttributes(){
return _.clone(this._previousAttributes);
},

/**
     * Checks if the model is currently in a valid state. It's only possible to
     * get into an *invalid* state if you're using silent changes.
     * @return {Boolean}
     */
isValid:function isValid(){
try{
this.validate(this.attributes);
}catch(error){
return false;
}
return true;
},

/**
     * You should not call this function directly unless you subclass
     * <code>AV.Object</code>, in which case you can override this method
     * to provide additional validation on <code>set</code> and
     * <code>save</code>.  Your implementation should throw an Error if
     * the attrs is invalid
     *
     * @param {Object} attrs The current data to validate.
     * @see AV.Object#set
     */
validate:function validate(attrs){
if(_.has(attrs,'ACL')&&!(attrs.ACL instanceof AV.ACL)){
throw new AVError(AVError.OTHER_CAUSE,'ACL must be a AV.ACL.');
}
},

/**
     * Run validation against a set of incoming attributes, returning `true`
     * if all is well. If a specific `error` callback has been passed,
     * call that instead of firing the general `"error"` event.
     * @private
     */
_validate:function _validate(attrs,options){
if(options.silent||!this.validate){
return;
}
attrs=_.extend({},this.attributes,attrs);
this.validate(attrs);
},

/**
     * Returns the ACL for this object.
     * @returns {AV.ACL} An instance of AV.ACL.
     * @see AV.Object#get
     */
getACL:function getACL(){
return this.get('ACL');
},

/**
     * Sets the ACL to be used for this object.
     * @param {AV.ACL} acl An instance of AV.ACL.
     * @param {Object} options Optional Backbone-like options object to be
     *     passed in to set.
     * @return {AV.Object} self
     * @see AV.Object#set
     */
setACL:function setACL(acl,options){
return this.set('ACL',acl,options);
},

disableBeforeHook:function disableBeforeHook(){
this.ignoreHook('beforeSave');
this.ignoreHook('beforeUpdate');
this.ignoreHook('beforeDelete');
},

disableAfterHook:function disableAfterHook(){
this.ignoreHook('afterSave');
this.ignoreHook('afterUpdate');
this.ignoreHook('afterDelete');
},

ignoreHook:function ignoreHook(hookName){
if(!_.contains(['beforeSave','afterSave','beforeUpdate','afterUpdate','beforeDelete','afterDelete'],hookName)){
console.trace('Unsupported hookName: '+hookName);
}

if(!AV.hookKey){
console.trace('ignoreHook required hookKey');
}

if(!this._flags.__ignore_hooks){
this._flags.__ignore_hooks=[];
}

this._flags.__ignore_hooks.push(hookName);
}});


/**
   * Creates an instance of a subclass of AV.Object for the give classname
   * and id.
   * @param  {String|Function} class the className or a subclass of AV.Object.
   * @param {String} id The object id of this model.
   * @return {AV.Object} A new subclass instance of AV.Object.
   */
AV.Object.createWithoutData=function(klass,id,hasData){
var _klass=void 0;
if(_.isString(klass)){
_klass=AV.Object._getSubclass(klass);
}else if(klass.prototype&&klass.prototype instanceof AV.Object){
_klass=klass;
}else{
throw new Error('class must be a string or a subclass of AV.Object.');
}
var object=new _klass();
object.id=id;
object._hasData=hasData;
return object;
};
/**
   * Delete objects in batch.
   * @param {AV.Object[]} objects The <code>AV.Object</code> array to be deleted.
   * @param {AuthOptions} options
   * @return {Promise} A promise that is fulfilled when the save
   *     completes.
   */
AV.Object.destroyAll=function(objects){
var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};

if(!objects||objects.length===0){
return Promise.resolve();
}
var objectsByClassNameAndFlags=_.groupBy(objects,function(object){
return JSON.stringify({
className:object.className,
flags:object._flags});

});
var body={
requests:_.map(objectsByClassNameAndFlags,function(objects){
var ids=_.map(objects,'id').join(',');
return{
method:'DELETE',
path:'/1.1/classes/'+objects[0].className+'/'+ids,
body:objects[0]._flags};

})};

return _request('batch',null,null,'POST',body,options).then(function(response){
var firstError=_.find(response,function(result){
return!result.success;
});
if(firstError)throw new AVError(firstError.error.code,firstError.error.error);
return undefined;
});
};

/**
   * Returns the appropriate subclass for making new instances of the given
   * className string.
   * @private
   */
AV.Object._getSubclass=function(className){
if(!_.isString(className)){
throw new Error('AV.Object._getSubclass requires a string argument.');
}
var ObjectClass=AV.Object._classMap[className];
if(!ObjectClass){
ObjectClass=AV.Object.extend(className);
AV.Object._classMap[className]=ObjectClass;
}
return ObjectClass;
};

/**
   * Creates an instance of a subclass of AV.Object for the given classname.
   * @private
   */
AV.Object._create=function(className,attributes,options){
var ObjectClass=AV.Object._getSubclass(className);
return new ObjectClass(attributes,options);
};

// Set up a map of className to class so that we can create new instances of
// AV Objects from JSON automatically.
AV.Object._classMap={};

AV.Object._extend=AV._extend;

/**
   * Creates a new model with defined attributes,
   * It's the same with
   * <pre>
   *   new AV.Object(attributes, options);
   *  </pre>
   * @param {Object} attributes The initial set of data to store in the object.
   * @param {Object} options A set of Backbone-like options for creating the
   *     object.  The only option currently supported is "collection".
   * @return {AV.Object}
   * @since v0.4.4
   * @see AV.Object
   * @see AV.Object.extend
   */
AV.Object['new']=function(attributes,options){
return new AV.Object(attributes,options);
};

/**
   * Creates a new subclass of AV.Object for the given AV class name.
   *
   * <p>Every extension of a AV class will inherit from the most recent
   * previous extension of that class. When a AV.Object is automatically
   * created by parsing JSON, it will use the most recent extension of that
   * class.</p>
   *
   * @example
   * var MyClass = AV.Object.extend("MyClass", {
   *     // Instance properties
   * }, {
   *     // Class properties
   * });
   *
   * @param {String} className The name of the AV class backing this model.
   * @param {Object} protoProps Instance properties to add to instances of the
   *     class returned from this method.
   * @param {Object} classProps Class properties to add the class returned from
   *     this method.
   * @return {Class} A new subclass of AV.Object.
   */
AV.Object.extend=function(className,protoProps,classProps){
// Handle the case with only two args.
if(!_.isString(className)){
if(className&&_.has(className,'className')){
return AV.Object.extend(className.className,className,protoProps);
}else{
throw new Error("AV.Object.extend's first argument should be the className.");
}
}

// If someone tries to subclass "User", coerce it to the right type.
if(className==='User'){
className='_User';
}

var NewClassObject=null;
if(_.has(AV.Object._classMap,className)){
var OldClassObject=AV.Object._classMap[className];
// This new subclass has been told to extend both from "this" and from
// OldClassObject. This is multiple inheritance, which isn't supported.
// For now, let's just pick one.
if(protoProps||classProps){
NewClassObject=OldClassObject._extend(protoProps,classProps);
}else{
return OldClassObject;
}
}else{
protoProps=protoProps||{};
protoProps._className=className;
NewClassObject=this._extend(protoProps,classProps);
}
// Extending a subclass should reuse the classname automatically.
NewClassObject.extend=function(arg0){
if(_.isString(arg0)||arg0&&_.has(arg0,'className')){
return AV.Object.extend.apply(NewClassObject,arguments);
}
var newArguments=[className].concat(_.toArray(arguments));
return AV.Object.extend.apply(NewClassObject,newArguments);
};
// Add the query property descriptor.
Object.defineProperty(NewClassObject,'query',Object.getOwnPropertyDescriptor(AV.Object,'query'));
NewClassObject['new']=function(attributes,options){
return new NewClassObject(attributes,options);
};
AV.Object._classMap[className]=NewClassObject;
return NewClassObject;
};

// ES6 class syntax support
Object.defineProperty(AV.Object.prototype,'className',{
get:function get(){
var className=this._className||this.constructor._LCClassName||this.constructor.name;
// If someone tries to subclass "User", coerce it to the right type.
if(className==='User'){
return'_User';
}
return className;
}});


/**
   * Register a class.
   * If a subclass of <code>AV.Object</code> is defined with your own implement
   * rather then <code>AV.Object.extend</code>, the subclass must be registered.
   * @param {Function} klass A subclass of <code>AV.Object</code>
   * @param {String} [name] Specify the name of the class. Useful when the class might be uglified.
   * @example
   * class Person extend AV.Object {}
   * AV.Object.register(Person);
   */
AV.Object.register=function(klass,name){
if(!(klass.prototype instanceof AV.Object)){
throw new Error('registered class is not a subclass of AV.Object');
}
var className=name||klass.name;
if(!className.length){
throw new Error('registered class must be named');
}
if(name){
klass._LCClassName=name;
}
AV.Object._classMap[className]=klass;
};

/**
   * Get a new Query of the current class
   * @name query
   * @memberof AV.Object
   * @type AV.Query
   * @readonly
   * @since v3.1.0
   * @example
   * const Post = AV.Object.extend('Post');
   * Post.query.equalTo('author', 'leancloud').find().then();
   */
Object.defineProperty(AV.Object,'query',{
get:function get(){
return new AV.Query(this.prototype.className);
}});


AV.Object._findUnsavedChildren=function(objects,children,files){
AV._traverse(objects,function(object){
if(object instanceof AV.Object){
if(object.dirty()){
children.push(object);
}
return;
}

if(object instanceof AV.File){
if(!object.id){
files.push(object);
}
return;
}
});
};

AV.Object._canBeSerializedAsValue=function(object){
var canBeSerializedAsValue=true;

if(object instanceof AV.Object||object instanceof AV.File){
canBeSerializedAsValue=!!object.id;
}else if(_.isArray(object)){
AV._arrayEach(object,function(child){
if(!AV.Object._canBeSerializedAsValue(child)){
canBeSerializedAsValue=false;
}
});
}else if(_.isObject(object)){
AV._objectEach(object,function(child){
if(!AV.Object._canBeSerializedAsValue(child)){
canBeSerializedAsValue=false;
}
});
}

return canBeSerializedAsValue;
};

AV.Object._deepSaveAsync=function(object,model,options){
var unsavedChildren=[];
var unsavedFiles=[];
AV.Object._findUnsavedChildren(object,unsavedChildren,unsavedFiles);

var promise=Promise.resolve();
_.each(unsavedFiles,function(file){
promise=promise.then(function(){
return file.save();
});
});

var objects=_.uniq(unsavedChildren);
var remaining=_.uniq(objects);

return promise.then(function(){
return Promise._continueWhile(function(){
return remaining.length>0;
},function(){
// Gather up all the objects that can be saved in this batch.
var batch=[];
var newRemaining=[];
AV._arrayEach(remaining,function(object){
// Limit batches to 20 objects.
if(batch.length>20){
newRemaining.push(object);
return;
}

if(object._canBeSerialized()){
batch.push(object);
}else{
newRemaining.push(object);
}
});
remaining=newRemaining;

// If we can't save any objects, there must be a circular reference.
if(batch.length===0){
return Promise.reject(new AVError(AVError.OTHER_CAUSE,'Tried to save a batch with a cycle.'));
}

// Reserve a spot in every object's save queue.
var readyToStart=Promise.resolve(_.map(batch,function(object){
return object._allPreviousSaves||Promise.resolve();
}));

// Save a single batch, whether previous saves succeeded or failed.
var bathSavePromise=readyToStart.then(function(){
return _request('batch',null,null,'POST',{
requests:_.map(batch,function(object){
var method=object.id?'PUT':'POST';

var json=object._getSaveJSON();

_.extend(json,object._flags);

var route='classes';
var className=object.className;
var path='/'+route+'/'+className;
if(object.className==='_User'&&!object.id){
// Special-case user sign-up.
path='/users';
}

var path='/1.1'+path;
if(object.id){
path=path+'/'+object.id;
}

object._startSave();

return{
method:method,
path:path,
body:json};

})},
options).then(function(response){
var results=_.map(batch,function(object,i){
if(response[i].success){
object._finishSave(object.parse(response[i].success));
return object;
}
object._cancelSave();
return new AVError(response[i].error.code,response[i].error.error);
});
return handleBatchResults(results);
});
});
AV._arrayEach(batch,function(object){
object._allPreviousSaves=bathSavePromise;
});
return bathSavePromise;
});
}).then(function(){
return object;
});
};
};

/***/},
/* 62 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _=__webpack_require__(0);
var AVError=__webpack_require__(4);

module.exports=function(AV){
AV.Role=AV.Object.extend('_Role',
/** @lends AV.Role.prototype */{
// Instance Methods

/**
     * Represents a Role on the AV server. Roles represent groupings of
     * Users for the purposes of granting permissions (e.g. specifying an ACL
     * for an Object). Roles are specified by their sets of child users and
     * child roles, all of which are granted any permissions that the parent
     * role has.
     *
     * <p>Roles must have a name (which cannot be changed after creation of the
     * role), and must specify an ACL.</p>
     * An AV.Role is a local representation of a role persisted to the AV
     * cloud.
     * @class AV.Role
     * @param {String} name The name of the Role to create.
     * @param {AV.ACL} acl The ACL for this role.
     */
constructor:function constructor(name,acl){
if(_.isString(name)){
AV.Object.prototype.constructor.call(this,null,null);
this.setName(name);
}else{
AV.Object.prototype.constructor.call(this,name,acl);
}
if(acl){
if(!(acl instanceof AV.ACL)){
throw new TypeError('acl must be an instance of AV.ACL');
}else{
this.setACL(acl);
}
}
},

/**
     * Gets the name of the role.  You can alternatively call role.get("name")
     *
     * @return {String} the name of the role.
     */
getName:function getName(){
return this.get('name');
},

/**
     * Sets the name for a role. This value must be set before the role has
     * been saved to the server, and cannot be set once the role has been
     * saved.
     *
     * <p>
     *   A role's name can only contain alphanumeric characters, _, -, and
     *   spaces.
     * </p>
     *
     * <p>This is equivalent to calling role.set("name", name)</p>
     *
     * @param {String} name The name of the role.
     */
setName:function setName(name,options){
return this.set('name',name,options);
},

/**
     * Gets the AV.Relation for the AV.Users that are direct
     * children of this role. These users are granted any privileges that this
     * role has been granted (e.g. read or write access through ACLs). You can
     * add or remove users from the role through this relation.
     *
     * <p>This is equivalent to calling role.relation("users")</p>
     *
     * @return {AV.Relation} the relation for the users belonging to this
     *     role.
     */
getUsers:function getUsers(){
return this.relation('users');
},

/**
     * Gets the AV.Relation for the AV.Roles that are direct
     * children of this role. These roles' users are granted any privileges that
     * this role has been granted (e.g. read or write access through ACLs). You
     * can add or remove child roles from this role through this relation.
     *
     * <p>This is equivalent to calling role.relation("roles")</p>
     *
     * @return {AV.Relation} the relation for the roles belonging to this
     *     role.
     */
getRoles:function getRoles(){
return this.relation('roles');
},

/**
     * @ignore
     */
validate:function validate(attrs,options){
if('name'in attrs&&attrs.name!==this.getName()){
var newName=attrs.name;
if(this.id&&this.id!==attrs.objectId){
// Check to see if the objectId being set matches this.id.
// This happens during a fetch -- the id is set before calling fetch.
// Let the name be set in this case.
return new AVError(AVError.OTHER_CAUSE,"A role's name can only be set before it has been saved.");
}
if(!_.isString(newName)){
return new AVError(AVError.OTHER_CAUSE,"A role's name must be a String.");
}
if(!/^[0-9a-zA-Z\-_ ]+$/.test(newName)){
return new AVError(AVError.OTHER_CAUSE,"A role's name can only contain alphanumeric characters, _,"+' -, and spaces.');
}
}
if(AV.Object.prototype.validate){
return AV.Object.prototype.validate.call(this,attrs,options);
}
return false;
}});

};

/***/},
/* 63 */
/***/function(module,exports,__webpack_require__){

"use strict";


function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}

var _=__webpack_require__(0);
var uuid=__webpack_require__(17);
var AVError=__webpack_require__(4);

var _require=__webpack_require__(2),
AVRequest=_require._request,
request=_require.request;

var Promise=__webpack_require__(1);

var PLATFORM_ANONYMOUS='anonymous';
var PLATFORM_WEAPP='lc_weapp';

var getWeappLoginCode=function getWeappLoginCode(){
if(typeof wx==='undefined'||typeof wx.login!=='function'){
throw new Error('Weapp Login is only available in Weapp');
}
return new Promise(function(resolve,reject){
wx.login({
success:function success(_ref){
var code=_ref.code,
errMsg=_ref.errMsg;

if(code){
resolve(code);
}else{
reject(new Error(errMsg));
}
},
fail:function fail(){
return reject(new Error('wx.login 失败'));
}});

});
};

var getWeappAuthData=function getWeappAuthData(code){
var _ref2=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},
preferUnionId=_ref2.preferUnionId,
_ref2$unionIdPlatform=_ref2.unionIdPlatform,
unionIdPlatform=_ref2$unionIdPlatform===undefined?'weixin':_ref2$unionIdPlatform,
_ref2$asMainAccount=_ref2.asMainAccount,
asMainAccount=_ref2$asMainAccount===undefined?true:_ref2$asMainAccount;

return preferUnionId?{
platform:unionIdPlatform,
main_account:asMainAccount,
code:code}:
{code:code};
};

var mergeUnionDataIntoAuthData=function mergeUnionDataIntoAuthData(authData,unionId){
var _ref3=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{},
_ref3$unionIdPlatform=_ref3.unionIdPlatform,
unionIdPlatform=_ref3$unionIdPlatform===undefined?'weixin':_ref3$unionIdPlatform,
_ref3$asMainAccount=_ref3.asMainAccount,
asMainAccount=_ref3$asMainAccount===undefined?false:_ref3$asMainAccount;

if(typeof unionId!=='string')throw new AVError(AVError.OTHER_CAUSE,'unionId is not a string');
if(typeof unionIdPlatform!=='string')throw new AVError(AVError.OTHER_CAUSE,'unionIdPlatform is not a string');

return _.extend({},authData,{
platform:unionIdPlatform,
unionid:unionId,
main_account:Boolean(asMainAccount)});

};

module.exports=function(AV){
/**
   * @class
   *
   * <p>An AV.User object is a local representation of a user persisted to the
   * LeanCloud server. This class is a subclass of an AV.Object, and retains the
   * same functionality of an AV.Object, but also extends it with various
   * user specific methods, like authentication, signing up, and validation of
   * uniqueness.</p>
   */
AV.User=AV.Object.extend('_User',
/** @lends AV.User.prototype */{
// Instance Variables
_isCurrentUser:false,

// Instance Methods

/**
     * Internal method to handle special fields in a _User response.
     * @private
     */
_mergeMagicFields:function _mergeMagicFields(attrs){
if(attrs.sessionToken){
this._sessionToken=attrs.sessionToken;
delete attrs.sessionToken;
}
return AV.User.__super__._mergeMagicFields.call(this,attrs);
},

/**
     * Removes null values from authData (which exist temporarily for
     * unlinking)
     * @private
     */
_cleanupAuthData:function _cleanupAuthData(){
if(!this.isCurrent()){
return;
}
var authData=this.get('authData');
if(!authData){
return;
}
AV._objectEach(this.get('authData'),function(value,key){
if(!authData[key]){
delete authData[key];
}
});
},

/**
     * Synchronizes authData for all providers.
     * @private
     */
_synchronizeAllAuthData:function _synchronizeAllAuthData(){
var authData=this.get('authData');
if(!authData){
return;
}

var self=this;
AV._objectEach(this.get('authData'),function(value,key){
self._synchronizeAuthData(key);
});
},

/**
     * Synchronizes auth data for a provider (e.g. puts the access token in the
     * right place to be used by the Facebook SDK).
     * @private
     */
_synchronizeAuthData:function _synchronizeAuthData(provider){
if(!this.isCurrent()){
return;
}
var authType;
if(_.isString(provider)){
authType=provider;
provider=AV.User._authProviders[authType];
}else{
authType=provider.getAuthType();
}
var authData=this.get('authData');
if(!authData||!provider){
return;
}
var success=provider.restoreAuthentication(authData[authType]);
if(!success){
this.dissociateAuthData(provider);
}
},

_handleSaveResult:function _handleSaveResult(makeCurrent){
// Clean up and synchronize the authData object, removing any unset values
if(makeCurrent&&!AV._config.disableCurrentUser){
this._isCurrentUser=true;
}
this._cleanupAuthData();
this._synchronizeAllAuthData();
// Don't keep the password around.
delete this._serverData.password;
this._rebuildEstimatedDataForKey('password');
this._refreshCache();
if((makeCurrent||this.isCurrent())&&!AV._config.disableCurrentUser){
// Some old version of leanengine-node-sdk will overwrite
// AV.User._saveCurrentUser which returns no Promise.
// So we need a Promise wrapper.
return Promise.resolve(AV.User._saveCurrentUser(this));
}else{
return Promise.resolve();
}
},

/**
     * Unlike in the Android/iOS SDKs, logInWith is unnecessary, since you can
     * call linkWith on the user (even if it doesn't exist yet on the server).
     * @private
     */
_linkWith:function _linkWith(provider,data){
var _this=this;

var _ref4=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{},
_ref4$failOnNotExist=_ref4.failOnNotExist,
failOnNotExist=_ref4$failOnNotExist===undefined?false:_ref4$failOnNotExist;

var authType;
if(_.isString(provider)){
authType=provider;
provider=AV.User._authProviders[provider];
}else{
authType=provider.getAuthType();
}
if(data){
return this.save({authData:_defineProperty({},authType,data)},{
fetchWhenSave:!!this.get('authData'),
_failOnNotExist:failOnNotExist}).
then(function(model){
return model._handleSaveResult(true).then(function(){
return model;
});
});
}else{
return provider.authenticate().then(function(result){
return _this._linkWith(provider,result);
});
}
},

/**
     * Associate the user with a third party authData.
     * @since 3.3.0
     * @param {Object} authData The response json data returned from third party token, maybe like { openid: 'abc123', access_token: '123abc', expires_in: 1382686496 }
     * @param {string} platform Available platform for sign up.
     * @return {Promise<AV.User>} A promise that is fulfilled with the user when completed.
     * @example user.associateWithAuthData({
     *   openid: 'abc123',
     *   access_token: '123abc',
     *   expires_in: 1382686496
     * }, 'weixin').then(function(user) {
     *   //Access user here
     * }).catch(function(error) {
     *   //console.error("error: ", error);
     * });
     */
associateWithAuthData:function associateWithAuthData(authData,platform){
return this._linkWith(platform,authData);
},


/**
     * Associate the user with a third party authData and unionId.
     * @since 3.5.0
     * @param {Object} authData The response json data returned from third party token, maybe like { openid: 'abc123', access_token: '123abc', expires_in: 1382686496 }
     * @param {string} platform Available platform for sign up.
     * @param {string} unionId
     * @param {Object} [unionLoginOptions]
     * @param {string} [unionLoginOptions.unionIdPlatform = 'weixin'] unionId platform
     * @param {boolean} [unionLoginOptions.asMainAccount = false] If true, the unionId will be associated with the user.
     * @return {Promise<AV.User>} A promise that is fulfilled with the user when completed.
     * @example user.associateWithAuthDataAndUnionId({
     *   openid: 'abc123',
     *   access_token: '123abc',
     *   expires_in: 1382686496
     * }, 'weixin', 'union123', {
     *   unionIdPlatform: 'weixin',
     *   asMainAccount: true,
     * }).then(function(user) {
     *   //Access user here
     * }).catch(function(error) {
     *   //console.error("error: ", error);
     * });
     */
associateWithAuthDataAndUnionId:function associateWithAuthDataAndUnionId(authData,platform,unionId,unionOptions){
return this._linkWith(platform,mergeUnionDataIntoAuthData(authData,unionId,unionOptions));
},


/**
     * 将用户与小程序用户进行关联。适用于为已经在用户系统中存在的用户关联当前使用小程序的微信帐号。
     * 仅在小程序中可用。
     *
     * @since 3.13.0
     * @param {Object} [options]
     * @param {boolean} [options.preferUnionId] 当用户满足 {@link https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/union-id.html 获取 UnionId 的条件} 时，是否将 UnionId 保存在用户账号中。
     * @param {string} [options.unionIdPlatform = 'weixin'] (only take effect when preferUnionId) unionId platform
     * @param {boolean} [options.asMainAccount = false] (only take effect when preferUnionId) If true, the unionId will be associated with the user.
     * @return {Promise<AV.User>}
     */
associateWithWeapp:function associateWithWeapp(options){
var _this2=this;

return getWeappLoginCode().then(function(code){
return _this2._linkWith(PLATFORM_WEAPP,getWeappAuthData(code,options));
});
},


/**
     * @deprecated renamed to {@link AV.User#associateWithWeapp}
     * @return {Promise<AV.User>}
     */
linkWithWeapp:function linkWithWeapp(options){
console.warn('DEPRECATED: User#linkWithWeapp 已废弃，请使用 User#associateWithWeapp 代替');
return this.associateWithWeapp(options);
},


/**
     * 将用户与小程序用户进行关联。适用于为已经在用户系统中存在的用户关联当前使用小程序的微信帐号。
     * 仅在小程序中可用。
     *
     * @since 3.13.0
     * @param {string} unionId
     * @param {Object} [unionOptions]
     * @param {string} [unionOptions.unionIdPlatform = 'weixin'] unionId platform
     * @param {boolean} [unionOptions.asMainAccount = false] If true, the unionId will be associated with the user.
     * @return {Promise<AV.User>}
     */
associateWithWeappWithUnionId:function associateWithWeappWithUnionId(unionId,unionOptions){
var _this3=this;

return getWeappLoginCode().then(function(code){
return _this3._linkWith(PLATFORM_WEAPP,mergeUnionDataIntoAuthData({code:code},unionId,unionOptions));
});
},


/**
     * Unlinks a user from a service.
     * @param {string} platform
     * @return {Promise<AV.User>}
     * @since 3.3.0
     */
dissociateAuthData:function dissociateAuthData(provider){
this.unset('authData.'+provider);
return this.save().then(function(model){
return model._handleSaveResult(true).then(function(){
return model;
});
});
},


/**
     * @private
     * @deprecated
     */
_unlinkFrom:function _unlinkFrom(provider){
console.warn('DEPRECATED: User#_unlinkFrom 已废弃，请使用 User#dissociateAuthData 代替');
return this.dissociateAuthData(provider);
},


/**
     * Checks whether a user is linked to a service.
     * @private
     */
_isLinked:function _isLinked(provider){
var authType;
if(_.isString(provider)){
authType=provider;
}else{
authType=provider.getAuthType();
}
var authData=this.get('authData')||{};
return!!authData[authType];
},

/**
     * Checks whether a user is anonymous.
     * @since 3.9.0
     * @return {boolean}
     */
isAnonymous:function isAnonymous(){
return this._isLinked(PLATFORM_ANONYMOUS);
},


logOut:function logOut(){
this._logOutWithAll();
this._isCurrentUser=false;
},

/**
     * Deauthenticates all providers.
     * @private
     */
_logOutWithAll:function _logOutWithAll(){
var authData=this.get('authData');
if(!authData){
return;
}
var self=this;
AV._objectEach(this.get('authData'),function(value,key){
self._logOutWith(key);
});
},

/**
     * Deauthenticates a single provider (e.g. removing access tokens from the
     * Facebook SDK).
     * @private
     */
_logOutWith:function _logOutWith(provider){
if(!this.isCurrent()){
return;
}
if(_.isString(provider)){
provider=AV.User._authProviders[provider];
}
if(provider&&provider.deauthenticate){
provider.deauthenticate();
}
},

/**
     * Signs up a new user. You should call this instead of save for
     * new AV.Users. This will create a new AV.User on the server, and
     * also persist the session on disk so that you can access the user using
     * <code>current</code>.
     *
     * <p>A username and password must be set before calling signUp.</p>
     *
     * @param {Object} attrs Extra fields to set on the new user, or null.
     * @param {AuthOptions} options
     * @return {Promise} A promise that is fulfilled when the signup
     *     finishes.
     * @see AV.User.signUp
     */
signUp:function signUp(attrs,options){
var error;

var username=attrs&&attrs.username||this.get('username');
if(!username||username===''){
error=new AVError(AVError.OTHER_CAUSE,'Cannot sign up user with an empty name.');
throw error;
}

var password=attrs&&attrs.password||this.get('password');
if(!password||password===''){
error=new AVError(AVError.OTHER_CAUSE,'Cannot sign up user with an empty password.');
throw error;
}

return this.save(attrs,options).then(function(model){
if(model.isAnonymous()){
model.unset('authData.'+PLATFORM_ANONYMOUS);
model._opSetQueue=[{}];
}
return model._handleSaveResult(true).then(function(){
return model;
});
});
},

/**
     * Signs up a new user with mobile phone and sms code.
     * You should call this instead of save for
     * new AV.Users. This will create a new AV.User on the server, and
     * also persist the session on disk so that you can access the user using
     * <code>current</code>.
     *
     * <p>A username and password must be set before calling signUp.</p>
     *
     * @param {Object} attrs Extra fields to set on the new user, or null.
     * @param {AuthOptions} options
     * @return {Promise} A promise that is fulfilled when the signup
     *     finishes.
     * @see AV.User.signUpOrlogInWithMobilePhone
     * @see AV.Cloud.requestSmsCode
     */
signUpOrlogInWithMobilePhone:function signUpOrlogInWithMobilePhone(attrs){
var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};

var error;

var mobilePhoneNumber=attrs&&attrs.mobilePhoneNumber||this.get('mobilePhoneNumber');
if(!mobilePhoneNumber||mobilePhoneNumber===''){
error=new AVError(AVError.OTHER_CAUSE,'Cannot sign up or login user by mobilePhoneNumber '+'with an empty mobilePhoneNumber.');
throw error;
}

var smsCode=attrs&&attrs.smsCode||this.get('smsCode');
if(!smsCode||smsCode===''){
error=new AVError(AVError.OTHER_CAUSE,'Cannot sign up or login user by mobilePhoneNumber  '+'with an empty smsCode.');
throw error;
}

options._makeRequest=function(route,className,id,method,json){
return AVRequest('usersByMobilePhone',null,null,'POST',json);
};
return this.save(attrs,options).then(function(model){
delete model.attributes.smsCode;
delete model._serverData.smsCode;
return model._handleSaveResult(true).then(function(){
return model;
});
});
},

/**
     * The same with {@link AV.User.loginWithAuthData}, except that you can set attributes before login.
     * @since 3.7.0
     */
loginWithAuthData:function loginWithAuthData(authData,platform,options){
return this._linkWith(platform,authData,options);
},


/**
     * The same with {@link AV.User.loginWithAuthDataAndUnionId}, except that you can set attributes before login.
     * @since 3.7.0
     */
loginWithAuthDataAndUnionId:function loginWithAuthDataAndUnionId(authData,platform,unionId,unionLoginOptions){
return this.loginWithAuthData(mergeUnionDataIntoAuthData(authData,unionId,unionLoginOptions),platform,unionLoginOptions);
},


/**
     * The same with {@link AV.User.loginWithWeapp}, except that you can set attributes before login.
     * @since 3.7.0
     * @param {Object} [options]
     * @param {boolean} [options.failOnNotExist] If true, the login request will fail when no user matches this authData exists.
     * @param {boolean} [options.preferUnionId] 当用户满足 {@link https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/union-id.html 获取 UnionId 的条件} 时，是否使用 UnionId 登录。（since 3.13.0）
     * @param {string} [options.unionIdPlatform = 'weixin'] (only take effect when preferUnionId) unionId platform
     * @param {boolean} [options.asMainAccount = false] (only take effect when preferUnionId) If true, the unionId will be associated with the user.
     */
loginWithWeapp:function loginWithWeapp(options){
var _this4=this;

return getWeappLoginCode().then(function(code){
return _this4.loginWithAuthData(getWeappAuthData(code,options),PLATFORM_WEAPP,options);
});
},


/**
     * The same with {@link AV.User.loginWithWeappWithUnionId}, except that you can set attributes before login.
     * @since 3.13.0
     */
loginWithWeappWithUnionId:function loginWithWeappWithUnionId(unionId,unionLoginOptions){
var _this5=this;

return getWeappLoginCode().then(function(code){
return _this5.loginWithAuthData(mergeUnionDataIntoAuthData({code:code},unionId,unionLoginOptions),PLATFORM_WEAPP,unionLoginOptions);
});
},


/**
     * Logs in a AV.User. On success, this saves the session to localStorage,
     * so you can retrieve the currently logged in user using
     * <code>current</code>.
     *
     * <p>A username and password must be set before calling logIn.</p>
     *
     * @see AV.User.logIn
     * @return {Promise} A promise that is fulfilled with the user when
     *     the login is complete.
     */
logIn:function logIn(){
var model=this;
var request=AVRequest('login',null,null,'POST',this.toJSON());
return request.then(function(resp){
var serverAttrs=model.parse(resp);
model._finishFetch(serverAttrs);
return model._handleSaveResult(true).then(function(){
if(!serverAttrs.smsCode)delete model.attributes['smsCode'];
return model;
});
});
},
/**
     * @see AV.Object#save
     */
save:function save(arg1,arg2,arg3){
var attrs,options;
if(_.isObject(arg1)||_.isNull(arg1)||_.isUndefined(arg1)){
attrs=arg1;
options=arg2;
}else{
attrs={};
attrs[arg1]=arg2;
options=arg3;
}
options=options||{};

return AV.Object.prototype.save.call(this,attrs,options).then(function(model){
return model._handleSaveResult(false).then(function(){
return model;
});
});
},

/**
     * Follow a user
     * @since 0.3.0
     * @param {Object | AV.User | String} options if an AV.User or string is given, it will be used as the target user.
     * @param {AV.User | String} options.user The target user or user's objectId to follow.
     * @param {Object} [options.attributes] key-value attributes dictionary to be used as
     *  conditions of followerQuery/followeeQuery.
     * @param {AuthOptions} [authOptions]
     */
follow:function follow(options,authOptions){
if(!this.id){
throw new Error('Please signin.');
}
var user=void 0;
var attributes=void 0;
if(options.user){
user=options.user;
attributes=options.attributes;
}else{
user=options;
}
var userObjectId=_.isString(user)?user:user.id;
if(!userObjectId){
throw new Error('Invalid target user.');
}
var route='users/'+this.id+'/friendship/'+userObjectId;
var request=AVRequest(route,null,null,'POST',AV._encode(attributes),authOptions);
return request;
},

/**
     * Unfollow a user.
     * @since 0.3.0
     * @param {Object | AV.User | String} options if an AV.User or string is given, it will be used as the target user.
     * @param {AV.User | String} options.user The target user or user's objectId to unfollow.
     * @param {AuthOptions} [authOptions]
     */
unfollow:function unfollow(options,authOptions){
if(!this.id){
throw new Error('Please signin.');
}
var user=void 0;
if(options.user){
user=options.user;
}else{
user=options;
}
var userObjectId=_.isString(user)?user:user.id;
if(!userObjectId){
throw new Error('Invalid target user.');
}
var route='users/'+this.id+'/friendship/'+userObjectId;
var request=AVRequest(route,null,null,'DELETE',null,authOptions);
return request;
},

/**
     *Create a follower query to query the user's followers.
     * @since 0.3.0
     * @see AV.User#followerQuery
     */
followerQuery:function followerQuery(){
return AV.User.followerQuery(this.id);
},

/**
     *Create a followee query to query the user's followees.
     * @since 0.3.0
     * @see AV.User#followeeQuery
     */
followeeQuery:function followeeQuery(){
return AV.User.followeeQuery(this.id);
},

/**
     * @see AV.Object#fetch
     */
fetch:function fetch(fetchOptions,options){
return AV.Object.prototype.fetch.call(this,fetchOptions,options).then(function(model){
return model._handleSaveResult(false).then(function(){
return model;
});
});
},

/**
     * Update user's new password safely based on old password.
     * @param {String} oldPassword the old password.
     * @param {String} newPassword the new password.
     * @param {AuthOptions} options
     */
updatePassword:function updatePassword(oldPassword,newPassword,options){
var route='users/'+this.id+'/updatePassword';
var params={
old_password:oldPassword,
new_password:newPassword};

var request=AVRequest(route,null,null,'PUT',params,options);
return request;
},

/**
     * Returns true if <code>current</code> would return this user.
     * @see AV.User#current
     */
isCurrent:function isCurrent(){
return this._isCurrentUser;
},

/**
     * Returns get("username").
     * @return {String}
     * @see AV.Object#get
     */
getUsername:function getUsername(){
return this.get('username');
},

/**
     * Returns get("mobilePhoneNumber").
     * @return {String}
     * @see AV.Object#get
     */
getMobilePhoneNumber:function getMobilePhoneNumber(){
return this.get('mobilePhoneNumber');
},

/**
     * Calls set("mobilePhoneNumber", phoneNumber, options) and returns the result.
     * @param {String} mobilePhoneNumber
     * @return {Boolean}
     * @see AV.Object#set
     */
setMobilePhoneNumber:function setMobilePhoneNumber(phone,options){
return this.set('mobilePhoneNumber',phone,options);
},

/**
     * Calls set("username", username, options) and returns the result.
     * @param {String} username
     * @return {Boolean}
     * @see AV.Object#set
     */
setUsername:function setUsername(username,options){
return this.set('username',username,options);
},

/**
     * Calls set("password", password, options) and returns the result.
     * @param {String} password
     * @return {Boolean}
     * @see AV.Object#set
     */
setPassword:function setPassword(password,options){
return this.set('password',password,options);
},

/**
     * Returns get("email").
     * @return {String}
     * @see AV.Object#get
     */
getEmail:function getEmail(){
return this.get('email');
},

/**
     * Calls set("email", email, options) and returns the result.
     * @param {String} email
     * @param {AuthOptions} options
     * @return {Boolean}
     * @see AV.Object#set
     */
setEmail:function setEmail(email,options){
return this.set('email',email,options);
},

/**
     * Checks whether this user is the current user and has been authenticated.
     * @deprecated 如果要判断当前用户的登录状态是否有效，请使用 currentUser.isAuthenticated().then()，
     * 如果要判断该用户是否是当前登录用户，请使用 user.id === currentUser.id
     * @return (Boolean) whether this user is the current user and is logged in.
     */
authenticated:function authenticated(){
console.warn('DEPRECATED: 如果要判断当前用户的登录状态是否有效，请使用 currentUser.isAuthenticated().then()，如果要判断该用户是否是当前登录用户，请使用 user.id === currentUser.id。');
return!!this._sessionToken&&!AV._config.disableCurrentUser&&AV.User.current()&&AV.User.current().id===this.id;
},

/**
     * 检查该用户的登录状态是否有效，请注意该方法会校验 sessionToken 的有效性，是个异步方法。
     *
     * @since 2.0.0
     * @return Promise.<Boolean>
     */
isAuthenticated:function isAuthenticated(){
var _this6=this;

return Promise.resolve().then(function(){
return!!_this6._sessionToken&&AV.User._fetchUserBySessionToken(_this6._sessionToken).then(function(){
return true;
},function(error){
if(error.code===211){
return false;
}
throw error;
});
});
},


/**
     * Get sessionToken of current user.
     * @return {String} sessionToken
     */
getSessionToken:function getSessionToken(){
return this._sessionToken;
},


/**
     * Refresh sessionToken of current user.
     * @since 2.1.0
     * @param {AuthOptions} [options]
     * @return {Promise.<AV.User>} user with refreshed sessionToken
     */
refreshSessionToken:function refreshSessionToken(options){
var _this7=this;

return AVRequest('users/'+this.id+'/refreshSessionToken',null,null,'PUT',null,options).then(function(response){
_this7._finishFetch(response);
return _this7._handleSaveResult(true).then(function(){
return _this7;
});
});
},


/**
     * Get this user's Roles.
     * @param {AuthOptions} [options]
     * @return {Promise.<AV.Role[]>} A promise that is fulfilled with the roles when
     *     the query is complete.
     */
getRoles:function getRoles(options){
return AV.Relation.reverseQuery('_Role','users',this).find(options);
}},

/** @lends AV.User */{
// Class Variables

// The currently logged-in user.
_currentUser:null,

// Whether currentUser is known to match the serialized version on disk.
// This is useful for saving a localstorage check if you try to load
// _currentUser frequently while there is none stored.
_currentUserMatchesDisk:false,

// The localStorage key suffix that the current user is stored under.
_CURRENT_USER_KEY:'currentUser',

// The mapping of auth provider names to actual providers
_authProviders:{},

// Class Methods

/**
     * Signs up a new user with a username (or email) and password.
     * This will create a new AV.User on the server, and also persist the
     * session in localStorage so that you can access the user using
     * {@link #current}.
     *
     * @param {String} username The username (or email) to sign up with.
     * @param {String} password The password to sign up with.
     * @param {Object} [attrs] Extra fields to set on the new user.
     * @param {AuthOptions} [options]
     * @return {Promise} A promise that is fulfilled with the user when
     *     the signup completes.
     * @see AV.User#signUp
     */
signUp:function signUp(username,password,attrs,options){
attrs=attrs||{};
attrs.username=username;
attrs.password=password;
var user=AV.Object._create('_User');
return user.signUp(attrs,options);
},

/**
     * Logs in a user with a username (or email) and password. On success, this
     * saves the session to disk, so you can retrieve the currently logged in
     * user using <code>current</code>.
     *
     * @param {String} username The username (or email) to log in with.
     * @param {String} password The password to log in with.
     * @return {Promise} A promise that is fulfilled with the user when
     *     the login completes.
     * @see AV.User#logIn
     */
logIn:function logIn(username,password){
var user=AV.Object._create('_User');
user._finishFetch({username:username,password:password});
return user.logIn();
},

/**
     * Logs in a user with a session token. On success, this saves the session
     * to disk, so you can retrieve the currently logged in user using
     * <code>current</code>.
     *
     * @param {String} sessionToken The sessionToken to log in with.
     * @return {Promise} A promise that is fulfilled with the user when
     *     the login completes.
     */
become:function become(sessionToken){
return this._fetchUserBySessionToken(sessionToken).then(function(user){
return user._handleSaveResult(true).then(function(){
return user;
});
});
},

_fetchUserBySessionToken:function _fetchUserBySessionToken(sessionToken){
var user=AV.Object._create('_User');
return request({
method:'GET',
path:'/users/me',
authOptions:{
sessionToken:sessionToken}}).

then(function(resp){
var serverAttrs=user.parse(resp);
user._finishFetch(serverAttrs);
return user;
});
},

/**
     * Logs in a user with a mobile phone number and sms code sent by
     * AV.User.requestLoginSmsCode.On success, this
     * saves the session to disk, so you can retrieve the currently logged in
     * user using <code>current</code>.
     *
     * @param {String} mobilePhone The user's mobilePhoneNumber
     * @param {String} smsCode The sms code sent by AV.User.requestLoginSmsCode
     * @return {Promise} A promise that is fulfilled with the user when
     *     the login completes.
     * @see AV.User#logIn
     */
logInWithMobilePhoneSmsCode:function logInWithMobilePhoneSmsCode(mobilePhone,smsCode){
var user=AV.Object._create('_User');
user._finishFetch({mobilePhoneNumber:mobilePhone,smsCode:smsCode});
return user.logIn();
},

/**
     * Sign up or logs in a user with a mobilePhoneNumber and smsCode.
     * On success, this saves the session to disk, so you can retrieve the currently
     * logged in user using <code>current</code>.
     *
     * @param {String} mobilePhoneNumber The user's mobilePhoneNumber.
     * @param {String} smsCode The sms code sent by AV.Cloud.requestSmsCode
     * @param {Object} attributes  The user's other attributes such as username etc.
     * @param {AuthOptions} options
     * @return {Promise} A promise that is fulfilled with the user when
     *     the login completes.
     * @see AV.User#signUpOrlogInWithMobilePhone
     * @see AV.Cloud.requestSmsCode
     */
signUpOrlogInWithMobilePhone:function signUpOrlogInWithMobilePhone(mobilePhoneNumber,smsCode,attrs,options){
attrs=attrs||{};
attrs.mobilePhoneNumber=mobilePhoneNumber;
attrs.smsCode=smsCode;
var user=AV.Object._create('_User');
return user.signUpOrlogInWithMobilePhone(attrs,options);
},

/**
     * Logs in a user with a mobile phone number and password. On success, this
     * saves the session to disk, so you can retrieve the currently logged in
     * user using <code>current</code>.
     *
     * @param {String} mobilePhone The user's mobilePhoneNumber
     * @param {String} password The password to log in with.
     * @return {Promise} A promise that is fulfilled with the user when
     *     the login completes.
     * @see AV.User#logIn
     */
logInWithMobilePhone:function logInWithMobilePhone(mobilePhone,password){
var user=AV.Object._create('_User');
user._finishFetch({
mobilePhoneNumber:mobilePhone,
password:password});

return user.logIn();
},

/**
     * Logs in a user with email and password.
     *
     * @since 3.13.0
     * @param {String} email The user's email.
     * @param {String} password The password to log in with.
     * @return {Promise} A promise that is fulfilled with the user when
     *     the login completes.
     */
loginWithEmail:function loginWithEmail(email,password){
var user=AV.Object._create('_User');
user._finishFetch({
email:email,
password:password});

return user.logIn();
},


/**
     * Sign up or logs in a user with a third party auth data(AccessToken).
     * On success, this saves the session to disk, so you can retrieve the currently
     * logged in user using <code>current</code>.
     *
     * @since 3.7.0
     * @param {Object} authData The response json data returned from third party token, maybe like { openid: 'abc123', access_token: '123abc', expires_in: 1382686496 }
     * @param {string} platform Available platform for sign up.
     * @param {Object} [options]
     * @param {boolean} [options.failOnNotExist] If true, the login request will fail when no user matches this authData exists.
     * @return {Promise} A promise that is fulfilled with the user when
     *     the login completes.
     * @example AV.User.loginWithAuthData({
     *   openid: 'abc123',
     *   access_token: '123abc',
     *   expires_in: 1382686496
     * }, 'weixin').then(function(user) {
     *   //Access user here
     * }).catch(function(error) {
     *   //console.error("error: ", error);
     * });
     * @see {@link https://leancloud.cn/docs/js_guide.html#绑定第三方平台账户}
     */
loginWithAuthData:function loginWithAuthData(authData,platform,options){
return AV.User._logInWith(platform,authData,options);
},


/**
     * @deprecated renamed to {@link AV.User.loginWithAuthData}
     */
signUpOrlogInWithAuthData:function signUpOrlogInWithAuthData(){
console.warn('DEPRECATED: User.signUpOrlogInWithAuthData 已废弃，请使用 User#loginWithAuthData 代替');
return this.loginWithAuthData.apply(this,arguments);
},


/**
     * Sign up or logs in a user with a third party authData and unionId.
     * @since 3.7.0
     * @param {Object} authData The response json data returned from third party token, maybe like { openid: 'abc123', access_token: '123abc', expires_in: 1382686496 }
     * @param {string} platform Available platform for sign up.
     * @param {string} unionId
     * @param {Object} [unionLoginOptions]
     * @param {string} [unionLoginOptions.unionIdPlatform = 'weixin'] unionId platform
     * @param {boolean} [unionLoginOptions.asMainAccount = false] If true, the unionId will be associated with the user.
     * @param {boolean} [unionLoginOptions.failOnNotExist] If true, the login request will fail when no user matches this authData exists.
     * @return {Promise<AV.User>} A promise that is fulfilled with the user when completed.
     * @example AV.User.loginWithAuthDataAndUnionId({
     *   openid: 'abc123',
     *   access_token: '123abc',
     *   expires_in: 1382686496
     * }, 'weixin', 'union123', {
     *   unionIdPlatform: 'weixin',
     *   asMainAccount: true,
     * }).then(function(user) {
     *   //Access user here
     * }).catch(function(error) {
     *   //console.error("error: ", error);
     * });
     */
loginWithAuthDataAndUnionId:function loginWithAuthDataAndUnionId(authData,platform,unionId,unionLoginOptions){
return this.loginWithAuthData(mergeUnionDataIntoAuthData(authData,unionId,unionLoginOptions),platform,unionLoginOptions);
},


/**
     * @deprecated renamed to {@link AV.User.loginWithAuthDataAndUnionId}
     * @since 3.5.0
     */
signUpOrlogInWithAuthDataAndUnionId:function signUpOrlogInWithAuthDataAndUnionId(){
console.warn('DEPRECATED: User.signUpOrlogInWithAuthDataAndUnionId 已废弃，请使用 User#loginWithAuthDataAndUnionId 代替');
return this.loginWithAuthDataAndUnionId.apply(this,arguments);
},


/**
     * 使用当前使用小程序的微信用户身份注册或登录，成功后用户的 session 会在设备上持久化保存，之后可以使用 AV.User.current() 获取当前登录用户。
     * 仅在小程序中可用。
     *
     * @since 2.0.0
     * @param {Object} [options]
     * @param {boolean} [options.preferUnionId] 当用户满足 {@link https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/union-id.html 获取 UnionId 的条件} 时，是否使用 UnionId 登录。（since 3.13.0）
     * @param {string} [options.unionIdPlatform = 'weixin'] (only take effect when preferUnionId) unionId platform
     * @param {boolean} [options.asMainAccount = false] (only take effect when preferUnionId) If true, the unionId will be associated with the user.
     * @param {boolean} [options.failOnNotExist] If true, the login request will fail when no user matches this authData exists. (since v3.7.0)
     * @return {Promise.<AV.User>}
     */
loginWithWeapp:function loginWithWeapp(options){
var _this8=this;

return getWeappLoginCode().then(function(code){
return _this8.loginWithAuthData(getWeappAuthData(code,options),PLATFORM_WEAPP,options);
});
},


/**
     * 使用当前使用小程序的微信用户身份注册或登录，
     * 仅在小程序中可用。
     *
     * @since 3.13.0
     * @param {Object} [unionLoginOptions]
     * @param {string} [unionLoginOptions.unionIdPlatform = 'weixin'] unionId platform
     * @param {boolean} [unionLoginOptions.asMainAccount = false] If true, the unionId will be associated with the user.
     * @param {boolean} [unionLoginOptions.failOnNotExist] If true, the login request will fail when no user matches this authData exists.       * @return {Promise.<AV.User>}
     */
loginWithWeappWithUnionId:function loginWithWeappWithUnionId(unionId,unionLoginOptions){
var _this9=this;

return getWeappLoginCode().then(function(code){
return _this9.loginWithAuthData(mergeUnionDataIntoAuthData({code:code},unionId,unionLoginOptions),PLATFORM_WEAPP,unionLoginOptions);
});
},


/**
     * Creates an anonymous user.
     *
     * @since 3.9.0
     * @return {Promise.<AV.User>}
     */
loginAnonymously:function loginAnonymously(){
return this.loginWithAuthData({
id:uuid()},
'anonymous');
},
associateWithAuthData:function associateWithAuthData(userObj,platform,authData){
console.warn('DEPRECATED: User.associateWithAuthData 已废弃，请使用 User#associateWithAuthData 代替');
return userObj._linkWith(platform,authData);
},

/**
     * Logs out the currently logged in user session. This will remove the
     * session from disk, log out of linked services, and future calls to
     * <code>current</code> will return <code>null</code>.
     * @return {Promise}
     */
logOut:function logOut(){
if(AV._config.disableCurrentUser){
console.warn('AV.User.current() was disabled in multi-user environment, call logOut() from user object instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html');
return Promise.resolve(null);
}

if(AV.User._currentUser!==null){
AV.User._currentUser._logOutWithAll();
AV.User._currentUser._isCurrentUser=false;
}
AV.User._currentUserMatchesDisk=true;
AV.User._currentUser=null;
return AV.localStorage.removeItemAsync(AV._getAVPath(AV.User._CURRENT_USER_KEY)).then(function(){
return AV._refreshSubscriptionId();
});
},

/**
     *Create a follower query for special user to query the user's followers.
     * @param {String} userObjectId The user object id.
     * @return {AV.FriendShipQuery}
     * @since 0.3.0
     */
followerQuery:function followerQuery(userObjectId){
if(!userObjectId||!_.isString(userObjectId)){
throw new Error('Invalid user object id.');
}
var query=new AV.FriendShipQuery('_Follower');
query._friendshipTag='follower';
query.equalTo('user',AV.Object.createWithoutData('_User',userObjectId));
return query;
},

/**
     *Create a followee query for special user to query the user's followees.
     * @param {String} userObjectId The user object id.
     * @return {AV.FriendShipQuery}
     * @since 0.3.0
     */
followeeQuery:function followeeQuery(userObjectId){
if(!userObjectId||!_.isString(userObjectId)){
throw new Error('Invalid user object id.');
}
var query=new AV.FriendShipQuery('_Followee');
query._friendshipTag='followee';
query.equalTo('user',AV.Object.createWithoutData('_User',userObjectId));
return query;
},

/**
     * Requests a password reset email to be sent to the specified email address
     * associated with the user account. This email allows the user to securely
     * reset their password on the AV site.
     *
     * @param {String} email The email address associated with the user that
     *     forgot their password.
     * @return {Promise}
     */
requestPasswordReset:function requestPasswordReset(email){
var json={email:email};
var request=AVRequest('requestPasswordReset',null,null,'POST',json);
return request;
},

/**
     * Requests a verify email to be sent to the specified email address
     * associated with the user account. This email allows the user to securely
     * verify their email address on the AV site.
     *
     * @param {String} email The email address associated with the user that
     *     doesn't verify their email address.
     * @return {Promise}
     */
requestEmailVerify:function requestEmailVerify(email){
var json={email:email};
var request=AVRequest('requestEmailVerify',null,null,'POST',json);
return request;
},

/**
     * Requests a verify sms code to be sent to the specified mobile phone
     * number associated with the user account. This sms code allows the user to
     * verify their mobile phone number by calling AV.User.verifyMobilePhone
     *
     * @param {String} mobilePhoneNumber The mobile phone number associated with the
     *                  user that doesn't verify their mobile phone number.
     * @param {AuthOptions} [options] AuthOptions plus:
     * @param {String} [options.validateToken] a validate token returned by {@link AV.Cloud.verifyCaptcha}
     * @return {Promise}
     */
requestMobilePhoneVerify:function requestMobilePhoneVerify(mobilePhoneNumber){
var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};

var data={
mobilePhoneNumber:mobilePhoneNumber};

if(options.validateToken){
data.validate_token=options.validateToken;
}
var request=AVRequest('requestMobilePhoneVerify',null,null,'POST',data,options);
return request;
},

/**
     * Requests a reset password sms code to be sent to the specified mobile phone
     * number associated with the user account. This sms code allows the user to
     * reset their account's password by calling AV.User.resetPasswordBySmsCode
     *
     * @param {String} mobilePhoneNumber The mobile phone number  associated with the
     *                  user that doesn't verify their mobile phone number.
     * @param {AuthOptions} [options] AuthOptions plus:
     * @param {String} [options.validateToken] a validate token returned by {@link AV.Cloud.verifyCaptcha}
     * @return {Promise}
     */
requestPasswordResetBySmsCode:function requestPasswordResetBySmsCode(mobilePhoneNumber){
var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};

var data={
mobilePhoneNumber:mobilePhoneNumber};

if(options.validateToken){
data.validate_token=options.validateToken;
}
var request=AVRequest('requestPasswordResetBySmsCode',null,null,'POST',data,options);
return request;
},

/**
     * Makes a call to reset user's account password by sms code and new password.
     * The sms code is sent by AV.User.requestPasswordResetBySmsCode.
     * @param {String} code The sms code sent by AV.User.Cloud.requestSmsCode
     * @param {String} password The new password.
     * @return {Promise} A promise that will be resolved with the result
     * of the function.
     */
resetPasswordBySmsCode:function resetPasswordBySmsCode(code,password){
var json={password:password};
var request=AVRequest('resetPasswordBySmsCode',null,code,'PUT',json);
return request;
},

/**
     * Makes a call to verify sms code that sent by AV.User.Cloud.requestSmsCode
     * If verify successfully,the user mobilePhoneVerified attribute will be true.
     * @param {String} code The sms code sent by AV.User.Cloud.requestSmsCode
     * @return {Promise} A promise that will be resolved with the result
     * of the function.
     */
verifyMobilePhone:function verifyMobilePhone(code){
var request=AVRequest('verifyMobilePhone',null,code,'POST',null);
return request;
},

/**
     * Requests a logIn sms code to be sent to the specified mobile phone
     * number associated with the user account. This sms code allows the user to
     * login by AV.User.logInWithMobilePhoneSmsCode function.
     *
     * @param {String} mobilePhoneNumber The mobile phone number  associated with the
     *           user that want to login by AV.User.logInWithMobilePhoneSmsCode
     * @param {AuthOptions} [options] AuthOptions plus:
     * @param {String} [options.validateToken] a validate token returned by {@link AV.Cloud.verifyCaptcha}
     * @return {Promise}
     */
requestLoginSmsCode:function requestLoginSmsCode(mobilePhoneNumber){
var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};

var data={
mobilePhoneNumber:mobilePhoneNumber};

if(options.validateToken){
data.validate_token=options.validateToken;
}
var request=AVRequest('requestLoginSmsCode',null,null,'POST',data,options);
return request;
},

/**
     * Retrieves the currently logged in AVUser with a valid session,
     * either from memory or localStorage, if necessary.
     * @return {Promise.<AV.User>} resolved with the currently logged in AV.User.
     */
currentAsync:function currentAsync(){
if(AV._config.disableCurrentUser){
console.warn('AV.User.currentAsync() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html');
return Promise.resolve(null);
}

if(AV.User._currentUser){
return Promise.resolve(AV.User._currentUser);
}

if(AV.User._currentUserMatchesDisk){
return Promise.resolve(AV.User._currentUser);
}

return AV.localStorage.getItemAsync(AV._getAVPath(AV.User._CURRENT_USER_KEY)).then(function(userData){
if(!userData){
return null;
}

// Load the user from local storage.
AV.User._currentUserMatchesDisk=true;

AV.User._currentUser=AV.Object._create('_User');
AV.User._currentUser._isCurrentUser=true;

var json=JSON.parse(userData);
AV.User._currentUser.id=json._id;
delete json._id;
AV.User._currentUser._sessionToken=json._sessionToken;
delete json._sessionToken;
AV.User._currentUser._finishFetch(json);
//AV.User._currentUser.set(json);

AV.User._currentUser._synchronizeAllAuthData();
AV.User._currentUser._refreshCache();
AV.User._currentUser._opSetQueue=[{}];
return AV.User._currentUser;
});
},

/**
     * Retrieves the currently logged in AVUser with a valid session,
     * either from memory or localStorage, if necessary.
     * @return {AV.User} The currently logged in AV.User.
     */
current:function current(){
if(AV._config.disableCurrentUser){
console.warn('AV.User.current() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html');
return null;
}

if(AV.User._currentUser){
return AV.User._currentUser;
}

if(AV.User._currentUserMatchesDisk){
return AV.User._currentUser;
}

// Load the user from local storage.
AV.User._currentUserMatchesDisk=true;

var userData=AV.localStorage.getItem(AV._getAVPath(AV.User._CURRENT_USER_KEY));
if(!userData){
return null;
}
AV.User._currentUser=AV.Object._create('_User');
AV.User._currentUser._isCurrentUser=true;

var json=JSON.parse(userData);
AV.User._currentUser.id=json._id;
delete json._id;
AV.User._currentUser._sessionToken=json._sessionToken;
delete json._sessionToken;
AV.User._currentUser._finishFetch(json);
//AV.User._currentUser.set(json);

AV.User._currentUser._synchronizeAllAuthData();
AV.User._currentUser._refreshCache();
AV.User._currentUser._opSetQueue=[{}];
return AV.User._currentUser;
},

/**
     * Persists a user as currentUser to localStorage, and into the singleton.
     * @private
     */
_saveCurrentUser:function _saveCurrentUser(user){
var promise;
if(AV.User._currentUser!==user){
promise=AV.User.logOut();
}else{
promise=Promise.resolve();
}
return promise.then(function(){
user._isCurrentUser=true;
AV.User._currentUser=user;

var json=user._toFullJSON();
json._id=user.id;
json._sessionToken=user._sessionToken;
return AV.localStorage.setItemAsync(AV._getAVPath(AV.User._CURRENT_USER_KEY),JSON.stringify(json)).then(function(){
AV.User._currentUserMatchesDisk=true;
return AV._refreshSubscriptionId();
});
});
},

_registerAuthenticationProvider:function _registerAuthenticationProvider(provider){
AV.User._authProviders[provider.getAuthType()]=provider;
// Synchronize the current user with the auth provider.
if(!AV._config.disableCurrentUser&&AV.User.current()){
AV.User.current()._synchronizeAuthData(provider.getAuthType());
}
},

_logInWith:function _logInWith(provider,authData,options){
var user=AV.Object._create('_User');
return user._linkWith(provider,authData,options);
}});

};

/***/},
/* 64 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _=__webpack_require__(0);
var debug=__webpack_require__(7)('leancloud:query');
var Promise=__webpack_require__(1);
var AVError=__webpack_require__(4);

var _require=__webpack_require__(2),
_request=_require._request,
request=_require.request;

var _require2=__webpack_require__(3),
ensureArray=_require2.ensureArray,
transformFetchOptions=_require2.transformFetchOptions;

var requires=function requires(value,message){
if(value===undefined){
throw new Error(message);
}
};

// AV.Query is a way to create a list of AV.Objects.
module.exports=function(AV){
/**
   * Creates a new AV.Query for the given AV.Object subclass.
   * @param {Class|String} objectClass An instance of a subclass of AV.Object, or a AV className string.
   * @class
   *
   * <p>AV.Query defines a query that is used to fetch AV.Objects. The
   * most common use case is finding all objects that match a query through the
   * <code>find</code> method. For example, this sample code fetches all objects
   * of class <code>MyClass</code>. It calls a different function depending on
   * whether the fetch succeeded or not.
   *
   * <pre>
   * var query = new AV.Query(MyClass);
   * query.find().then(function(results) {
   *   // results is an array of AV.Object.
   * }, function(error) {
   *   // error is an instance of AVError.
   * });</pre></p>
   *
   * <p>An AV.Query can also be used to retrieve a single object whose id is
   * known, through the get method. For example, this sample code fetches an
   * object of class <code>MyClass</code> and id <code>myId</code>. It calls a
   * different function depending on whether the fetch succeeded or not.
   *
   * <pre>
   * var query = new AV.Query(MyClass);
   * query.get(myId).then(function(object) {
   *   // object is an instance of AV.Object.
   * }, function(error) {
   *   // error is an instance of AVError.
   * });</pre></p>
   *
   * <p>An AV.Query can also be used to count the number of objects that match
   * the query without retrieving all of those objects. For example, this
   * sample code counts the number of objects of the class <code>MyClass</code>
   * <pre>
   * var query = new AV.Query(MyClass);
   * query.count().then(function(number) {
   *   // There are number instances of MyClass.
   * }, function(error) {
   *   // error is an instance of AVError.
   * });</pre></p>
   */
AV.Query=function(objectClass){
if(_.isString(objectClass)){
objectClass=AV.Object._getSubclass(objectClass);
}

this.objectClass=objectClass;

this.className=objectClass.prototype.className;

this._where={};
this._include=[];
this._select=[];
this._limit=-1;// negative limit means, do not send a limit
this._skip=0;
this._extraOptions={};
};

/**
   * Constructs a AV.Query that is the OR of the passed in queries.  For
   * example:
   * <pre>var compoundQuery = AV.Query.or(query1, query2, query3);</pre>
   *
   * will create a compoundQuery that is an or of the query1, query2, and
   * query3.
   * @param {...AV.Query} var_args The list of queries to OR.
   * @return {AV.Query} The query that is the OR of the passed in queries.
   */
AV.Query.or=function(){
var queries=_.toArray(arguments);
var className=null;
AV._arrayEach(queries,function(q){
if(_.isNull(className)){
className=q.className;
}

if(className!==q.className){
throw new Error('All queries must be for the same class');
}
});
var query=new AV.Query(className);
query._orQuery(queries);
return query;
};

/**
   * Constructs a AV.Query that is the AND of the passed in queries.  For
   * example:
   * <pre>var compoundQuery = AV.Query.and(query1, query2, query3);</pre>
   *
   * will create a compoundQuery that is an 'and' of the query1, query2, and
   * query3.
   * @param {...AV.Query} var_args The list of queries to AND.
   * @return {AV.Query} The query that is the AND of the passed in queries.
   */
AV.Query.and=function(){
var queries=_.toArray(arguments);
var className=null;
AV._arrayEach(queries,function(q){
if(_.isNull(className)){
className=q.className;
}

if(className!==q.className){
throw new Error('All queries must be for the same class');
}
});
var query=new AV.Query(className);
query._andQuery(queries);
return query;
};

/**
   * Retrieves a list of AVObjects that satisfy the CQL.
   * CQL syntax please see {@link https://leancloud.cn/docs/cql_guide.html CQL Guide}.
   *
   * @param {String} cql A CQL string, see {@link https://leancloud.cn/docs/cql_guide.html CQL Guide}.
   * @param {Array} pvalues An array contains placeholder values.
   * @param {AuthOptions} options
   * @return {Promise} A promise that is resolved with the results when
   * the query completes.
   */
AV.Query.doCloudQuery=function(cql,pvalues,options){
var params={cql:cql};
if(_.isArray(pvalues)){
params.pvalues=pvalues;
}else{
options=pvalues;
}

var request=_request('cloudQuery',null,null,'GET',params,options);
return request.then(function(response){
//query to process results.
var query=new AV.Query(response.className);
var results=_.map(response.results,function(json){
var obj=query._newObject(response);
if(obj._finishFetch){
obj._finishFetch(query._processResult(json),true);
}
return obj;
});
return{
results:results,
count:response.count,
className:response.className};

});
};

AV.Query._extend=AV._extend;

_.extend(AV.Query.prototype,
/** @lends AV.Query.prototype */{
//hook to iterate result. Added by dennis<xzhuang@avoscloud.com>.
_processResult:function _processResult(obj){
return obj;
},

/**
     * Constructs an AV.Object whose id is already known by fetching data from
     * the server.
     *
     * @param {String} objectId The id of the object to be fetched.
     * @param {AuthOptions} options
     * @return {Promise.<AV.Object>}
     */
get:function get(objectId,options){
if(!objectId){
var errorObject=new AVError(AVError.OBJECT_NOT_FOUND,'Object not found.');
throw errorObject;
}

var obj=this._newObject();
obj.id=objectId;

var queryJSON=this.toJSON();
var fetchOptions={};

if(queryJSON.keys)fetchOptions.keys=queryJSON.keys;
if(queryJSON.include)fetchOptions.include=queryJSON.include;
if(queryJSON.includeACL)fetchOptions.includeACL=queryJSON.includeACL;

return _request('classes',this.className,objectId,'GET',transformFetchOptions(fetchOptions),options).then(function(response){
if(_.isEmpty(response))throw new AVError(AVError.OBJECT_NOT_FOUND,'Object not found.');
obj._finishFetch(obj.parse(response),true);
return obj;
});
},

/**
     * Returns a JSON representation of this query.
     * @return {Object}
     */
toJSON:function toJSON(){
var params={
where:this._where};


if(this._include.length>0){
params.include=this._include.join(',');
}
if(this._select.length>0){
params.keys=this._select.join(',');
}
if(this._includeACL!==undefined){
params.returnACL=this._includeACL;
}
if(this._limit>=0){
params.limit=this._limit;
}
if(this._skip>0){
params.skip=this._skip;
}
if(this._order!==undefined){
params.order=this._order;
}

AV._objectEach(this._extraOptions,function(v,k){
params[k]=v;
});

return params;
},

_newObject:function _newObject(response){
var obj;
if(response&&response.className){
obj=new AV.Object(response.className);
}else{
obj=new this.objectClass();
}
return obj;
},
_createRequest:function _createRequest(){
var params=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.toJSON();
var options=arguments[1];
var path=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'/classes/'+this.className;

if(encodeURIComponent(JSON.stringify(params)).length>2000){
var body={
requests:[{
method:'GET',
path:'/1.1'+path,
params:params}]};


return request({
path:'/batch',
method:'POST',
data:body,
authOptions:options}).
then(function(response){
var result=response[0];
if(result.success){
return result.success;
}
var error=new Error(result.error.error||'Unknown batch error');
error.code=result.error.code;
throw error;
});
}
return request({
method:'GET',
path:path,
query:params,
authOptions:options});

},
_parseResponse:function _parseResponse(response){
var _this=this;

return _.map(response.results,function(json){
var obj=_this._newObject(response);
if(obj._finishFetch){
obj._finishFetch(_this._processResult(json),true);
}
return obj;
});
},


/**
     * Retrieves a list of AVObjects that satisfy this query.
     *
     * @param {AuthOptions} options
     * @return {Promise} A promise that is resolved with the results when
     * the query completes.
     */
find:function find(options){
var request=this._createRequest(undefined,options);
return request.then(this._parseResponse.bind(this));
},


/**
     * scan a Query. masterKey required.
     *
     * @since 2.1.0
     * @param {object} [options]
     * @param {string} [options.orderedBy] specify the key to sort
     * @param {number} [options.batchSize] specify the batch size for each request
     * @param {AuthOptions} [authOptions]
     * @return {AsyncIterator.<AV.Object>}
     * @example const scan = new AV.Query(TestClass).scan({
     *   orderedBy: 'objectId',
     *   batchSize: 10,
     * }, {
     *   useMasterKey: true,
     * });
     * const getTen = () => Promise.all(new Array(10).fill(0).map(() => scan.next()));
     * getTen().then(results => {
     *   // results are fisrt 10 instances of TestClass
     *   return getTen();
     * }).then(results => {
     *   // 11 - 20
     * });
     */
scan:function scan(){
var _this2=this;

var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},
orderedBy=_ref.orderedBy,
batchSize=_ref.batchSize;

var authOptions=arguments[1];

var condition=this.toJSON();
debug('scan %O',condition);
if(condition.order){
console.warn('The order of the query is ignored for Query#scan. Checkout the orderedBy option of Query#scan.');
delete condition.order;
}
if(condition.skip){
console.warn('The skip option of the query is ignored for Query#scan.');
delete condition.skip;
}
if(condition.limit){
console.warn('The limit option of the query is ignored for Query#scan.');
delete condition.limit;
}
if(orderedBy)condition.scan_key=orderedBy;
if(batchSize)condition.limit=batchSize;
var promise=Promise.resolve([]);
var cursor=void 0;
var done=false;
return{
next:function next(){
promise=promise.then(function(remainResults){
if(done)return[];
if(remainResults.length>1)return remainResults;
// no cursor means we have reached the end
// except for the first time
if(!cursor&&remainResults.length!==0){
done=true;
return remainResults;
}
// when only 1 item left in queue
// start the next request to see if it is the last one
return _request('scan/classes',_this2.className,null,'GET',cursor?_.extend({},condition,{cursor:cursor}):condition,authOptions).then(function(response){
cursor=response.cursor;
return _this2._parseResponse(response);
}).then(function(results){
if(!results.length)done=true;
return remainResults.concat(results);
});
});
return promise.then(function(remainResults){
return remainResults.shift();
}).then(function(result){
return{
value:result,
done:done};

});
}};

},


/**
     * Delete objects retrieved by this query.
     * @param {AuthOptions} options
     * @return {Promise} A promise that is fulfilled when the save
     *     completes.
     */
destroyAll:function destroyAll(options){
var self=this;
return self.find(options).then(function(objects){
return AV.Object.destroyAll(objects,options);
});
},

/**
     * Counts the number of objects that match this query.
     *
     * @param {AuthOptions} options
     * @return {Promise} A promise that is resolved with the count when
     * the query completes.
     */
count:function count(options){
var params=this.toJSON();
params.limit=0;
params.count=1;
var request=this._createRequest(params,options);

return request.then(function(response){
return response.count;
});
},

/**
     * Retrieves at most one AV.Object that satisfies this query.
     *
     * @param {AuthOptions} options
     * @return {Promise} A promise that is resolved with the object when
     * the query completes.
     */
first:function first(options){
var self=this;

var params=this.toJSON();
params.limit=1;
var request=this._createRequest(params,options);

return request.then(function(response){
return _.map(response.results,function(json){
var obj=self._newObject();
if(obj._finishFetch){
obj._finishFetch(self._processResult(json),true);
}
return obj;
})[0];
});
},

/**
     * Sets the number of results to skip before returning any results.
     * This is useful for pagination.
     * Default is to skip zero results.
     * @param {Number} n the number of results to skip.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
skip:function skip(n){
requires(n,'undefined is not a valid skip value');
this._skip=n;
return this;
},

/**
     * Sets the limit of the number of results to return. The default limit is
     * 100, with a maximum of 1000 results being returned at a time.
     * @param {Number} n the number of results to limit to.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
limit:function limit(n){
requires(n,'undefined is not a valid limit value');
this._limit=n;
return this;
},

/**
     * Add a constraint to the query that requires a particular key's value to
     * be equal to the provided value.
     * @param {String} key The key to check.
     * @param value The value that the AV.Object must contain.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
equalTo:function equalTo(key,value){
requires(key,'undefined is not a valid key');
requires(value,'undefined is not a valid value');
this._where[key]=AV._encode(value);
return this;
},

/**
     * Helper for condition queries
     * @private
     */
_addCondition:function _addCondition(key,condition,value){
requires(key,'undefined is not a valid condition key');
requires(condition,'undefined is not a valid condition');
requires(value,'undefined is not a valid condition value');

// Check if we already have a condition
if(!this._where[key]){
this._where[key]={};
}
this._where[key][condition]=AV._encode(value);
return this;
},

/**
     * Add a constraint to the query that requires a particular
     * <strong>array</strong> key's length to be equal to the provided value.
     * @param {String} key The array key to check.
     * @param value The length value.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
sizeEqualTo:function sizeEqualTo(key,value){
this._addCondition(key,'$size',value);
return this;
},

/**
     * Add a constraint to the query that requires a particular key's value to
     * be not equal to the provided value.
     * @param {String} key The key to check.
     * @param value The value that must not be equalled.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
notEqualTo:function notEqualTo(key,value){
this._addCondition(key,'$ne',value);
return this;
},

/**
     * Add a constraint to the query that requires a particular key's value to
     * be less than the provided value.
     * @param {String} key The key to check.
     * @param value The value that provides an upper bound.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
lessThan:function lessThan(key,value){
this._addCondition(key,'$lt',value);
return this;
},

/**
     * Add a constraint to the query that requires a particular key's value to
     * be greater than the provided value.
     * @param {String} key The key to check.
     * @param value The value that provides an lower bound.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
greaterThan:function greaterThan(key,value){
this._addCondition(key,'$gt',value);
return this;
},

/**
     * Add a constraint to the query that requires a particular key's value to
     * be less than or equal to the provided value.
     * @param {String} key The key to check.
     * @param value The value that provides an upper bound.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
lessThanOrEqualTo:function lessThanOrEqualTo(key,value){
this._addCondition(key,'$lte',value);
return this;
},

/**
     * Add a constraint to the query that requires a particular key's value to
     * be greater than or equal to the provided value.
     * @param {String} key The key to check.
     * @param value The value that provides an lower bound.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
greaterThanOrEqualTo:function greaterThanOrEqualTo(key,value){
this._addCondition(key,'$gte',value);
return this;
},

/**
     * Add a constraint to the query that requires a particular key's value to
     * be contained in the provided list of values.
     * @param {String} key The key to check.
     * @param {Array} values The values that will match.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
containedIn:function containedIn(key,values){
this._addCondition(key,'$in',values);
return this;
},

/**
     * Add a constraint to the query that requires a particular key's value to
     * not be contained in the provided list of values.
     * @param {String} key The key to check.
     * @param {Array} values The values that will not match.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
notContainedIn:function notContainedIn(key,values){
this._addCondition(key,'$nin',values);
return this;
},

/**
     * Add a constraint to the query that requires a particular key's value to
     * contain each one of the provided list of values.
     * @param {String} key The key to check.  This key's value must be an array.
     * @param {Array} values The values that will match.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
containsAll:function containsAll(key,values){
this._addCondition(key,'$all',values);
return this;
},

/**
     * Add a constraint for finding objects that contain the given key.
     * @param {String} key The key that should exist.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
exists:function exists(key){
this._addCondition(key,'$exists',true);
return this;
},

/**
     * Add a constraint for finding objects that do not contain a given key.
     * @param {String} key The key that should not exist
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
doesNotExist:function doesNotExist(key){
this._addCondition(key,'$exists',false);
return this;
},

/**
     * Add a regular expression constraint for finding string values that match
     * the provided regular expression.
     * This may be slow for large datasets.
     * @param {String} key The key that the string to match is stored in.
     * @param {RegExp} regex The regular expression pattern to match.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
matches:function matches(key,regex,modifiers){
this._addCondition(key,'$regex',regex);
if(!modifiers){
modifiers='';
}
// Javascript regex options support mig as inline options but store them
// as properties of the object. We support mi & should migrate them to
// modifiers
if(regex.ignoreCase){
modifiers+='i';
}
if(regex.multiline){
modifiers+='m';
}

if(modifiers&&modifiers.length){
this._addCondition(key,'$options',modifiers);
}
return this;
},

/**
     * Add a constraint that requires that a key's value matches a AV.Query
     * constraint.
     * @param {String} key The key that the contains the object to match the
     *                     query.
     * @param {AV.Query} query The query that should match.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
matchesQuery:function matchesQuery(key,query){
var queryJSON=query.toJSON();
queryJSON.className=query.className;
this._addCondition(key,'$inQuery',queryJSON);
return this;
},

/**
     * Add a constraint that requires that a key's value not matches a
     * AV.Query constraint.
     * @param {String} key The key that the contains the object to match the
     *                     query.
     * @param {AV.Query} query The query that should not match.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
doesNotMatchQuery:function doesNotMatchQuery(key,query){
var queryJSON=query.toJSON();
queryJSON.className=query.className;
this._addCondition(key,'$notInQuery',queryJSON);
return this;
},

/**
     * Add a constraint that requires that a key's value matches a value in
     * an object returned by a different AV.Query.
     * @param {String} key The key that contains the value that is being
     *                     matched.
     * @param {String} queryKey The key in the objects returned by the query to
     *                          match against.
     * @param {AV.Query} query The query to run.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
matchesKeyInQuery:function matchesKeyInQuery(key,queryKey,query){
var queryJSON=query.toJSON();
queryJSON.className=query.className;
this._addCondition(key,'$select',{key:queryKey,query:queryJSON});
return this;
},

/**
     * Add a constraint that requires that a key's value not match a value in
     * an object returned by a different AV.Query.
     * @param {String} key The key that contains the value that is being
     *                     excluded.
     * @param {String} queryKey The key in the objects returned by the query to
     *                          match against.
     * @param {AV.Query} query The query to run.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
doesNotMatchKeyInQuery:function doesNotMatchKeyInQuery(key,queryKey,query){
var queryJSON=query.toJSON();
queryJSON.className=query.className;
this._addCondition(key,'$dontSelect',{
key:queryKey,
query:queryJSON});

return this;
},

/**
     * Add constraint that at least one of the passed in queries matches.
     * @param {Array} queries
     * @return {AV.Query} Returns the query, so you can chain this call.
     * @private
     */
_orQuery:function _orQuery(queries){
var queryJSON=_.map(queries,function(q){
return q.toJSON().where;
});

this._where.$or=queryJSON;
return this;
},

/**
     * Add constraint that both of the passed in queries matches.
     * @param {Array} queries
     * @return {AV.Query} Returns the query, so you can chain this call.
     * @private
     */
_andQuery:function _andQuery(queries){
var queryJSON=_.map(queries,function(q){
return q.toJSON().where;
});

this._where.$and=queryJSON;
return this;
},

/**
     * Converts a string into a regex that matches it.
     * Surrounding with \Q .. \E does this, we just need to escape \E's in
     * the text separately.
     * @private
     */
_quote:function _quote(s){
return'\\Q'+s.replace('\\E','\\E\\\\E\\Q')+'\\E';
},

/**
     * Add a constraint for finding string values that contain a provided
     * string.  This may be slow for large datasets.
     * @param {String} key The key that the string to match is stored in.
     * @param {String} substring The substring that the value must contain.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
contains:function contains(key,value){
this._addCondition(key,'$regex',this._quote(value));
return this;
},

/**
     * Add a constraint for finding string values that start with a provided
     * string.  This query will use the backend index, so it will be fast even
     * for large datasets.
     * @param {String} key The key that the string to match is stored in.
     * @param {String} prefix The substring that the value must start with.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
startsWith:function startsWith(key,value){
this._addCondition(key,'$regex','^'+this._quote(value));
return this;
},

/**
     * Add a constraint for finding string values that end with a provided
     * string.  This will be slow for large datasets.
     * @param {String} key The key that the string to match is stored in.
     * @param {String} suffix The substring that the value must end with.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
endsWith:function endsWith(key,value){
this._addCondition(key,'$regex',this._quote(value)+'$');
return this;
},

/**
     * Sorts the results in ascending order by the given key.
     *
     * @param {String} key The key to order by.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
ascending:function ascending(key){
requires(key,'undefined is not a valid key');
this._order=key;
return this;
},

/**
     * Also sorts the results in ascending order by the given key. The previous sort keys have
     * precedence over this key.
     *
     * @param {String} key The key to order by
     * @return {AV.Query} Returns the query so you can chain this call.
     */
addAscending:function addAscending(key){
requires(key,'undefined is not a valid key');
if(this._order)this._order+=','+key;else this._order=key;
return this;
},

/**
     * Sorts the results in descending order by the given key.
     *
     * @param {String} key The key to order by.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
descending:function descending(key){
requires(key,'undefined is not a valid key');
this._order='-'+key;
return this;
},

/**
     * Also sorts the results in descending order by the given key. The previous sort keys have
     * precedence over this key.
     *
     * @param {String} key The key to order by
     * @return {AV.Query} Returns the query so you can chain this call.
     */
addDescending:function addDescending(key){
requires(key,'undefined is not a valid key');
if(this._order)this._order+=',-'+key;else this._order='-'+key;
return this;
},

/**
     * Add a proximity based constraint for finding objects with key point
     * values near the point given.
     * @param {String} key The key that the AV.GeoPoint is stored in.
     * @param {AV.GeoPoint} point The reference AV.GeoPoint that is used.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
near:function near(key,point){
if(!(point instanceof AV.GeoPoint)){
// Try to cast it to a GeoPoint, so that near("loc", [20,30]) works.
point=new AV.GeoPoint(point);
}
this._addCondition(key,'$nearSphere',point);
return this;
},

/**
     * Add a proximity based constraint for finding objects with key point
     * values near the point given and within the maximum distance given.
     * @param {String} key The key that the AV.GeoPoint is stored in.
     * @param {AV.GeoPoint} point The reference AV.GeoPoint that is used.
     * @param maxDistance Maximum distance (in radians) of results to return.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
withinRadians:function withinRadians(key,point,distance){
this.near(key,point);
this._addCondition(key,'$maxDistance',distance);
return this;
},

/**
     * Add a proximity based constraint for finding objects with key point
     * values near the point given and within the maximum distance given.
     * Radius of earth used is 3958.8 miles.
     * @param {String} key The key that the AV.GeoPoint is stored in.
     * @param {AV.GeoPoint} point The reference AV.GeoPoint that is used.
     * @param {Number} maxDistance Maximum distance (in miles) of results to
     *     return.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
withinMiles:function withinMiles(key,point,distance){
return this.withinRadians(key,point,distance/3958.8);
},

/**
     * Add a proximity based constraint for finding objects with key point
     * values near the point given and within the maximum distance given.
     * Radius of earth used is 6371.0 kilometers.
     * @param {String} key The key that the AV.GeoPoint is stored in.
     * @param {AV.GeoPoint} point The reference AV.GeoPoint that is used.
     * @param {Number} maxDistance Maximum distance (in kilometers) of results
     *     to return.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
withinKilometers:function withinKilometers(key,point,distance){
return this.withinRadians(key,point,distance/6371.0);
},

/**
     * Add a constraint to the query that requires a particular key's
     * coordinates be contained within a given rectangular geographic bounding
     * box.
     * @param {String} key The key to be constrained.
     * @param {AV.GeoPoint} southwest
     *     The lower-left inclusive corner of the box.
     * @param {AV.GeoPoint} northeast
     *     The upper-right inclusive corner of the box.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
withinGeoBox:function withinGeoBox(key,southwest,northeast){
if(!(southwest instanceof AV.GeoPoint)){
southwest=new AV.GeoPoint(southwest);
}
if(!(northeast instanceof AV.GeoPoint)){
northeast=new AV.GeoPoint(northeast);
}
this._addCondition(key,'$within',{$box:[southwest,northeast]});
return this;
},

/**
     * Include nested AV.Objects for the provided key.  You can use dot
     * notation to specify which fields in the included object are also fetch.
     * @param {String[]} keys The name of the key to include.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
include:function include(keys){
var _this3=this;

requires(keys,'undefined is not a valid key');
_(arguments).forEach(function(keys){
_this3._include=_this3._include.concat(ensureArray(keys));
});
return this;
},

/**
     * Include the ACL.
     * @param {Boolean} [value=true] Whether to include the ACL
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
includeACL:function includeACL(){
var value=arguments.length>0&&arguments[0]!==undefined?arguments[0]:true;

this._includeACL=value;
return this;
},

/**
     * Restrict the fields of the returned AV.Objects to include only the
     * provided keys.  If this is called multiple times, then all of the keys
     * specified in each of the calls will be included.
     * @param {String[]} keys The names of the keys to include.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
select:function select(keys){
var _this4=this;

requires(keys,'undefined is not a valid key');
_(arguments).forEach(function(keys){
_this4._select=_this4._select.concat(ensureArray(keys));
});
return this;
},

/**
     * Iterates over each result of a query, calling a callback for each one. If
     * the callback returns a promise, the iteration will not continue until
     * that promise has been fulfilled. If the callback returns a rejected
     * promise, then iteration will stop with that error. The items are
     * processed in an unspecified order. The query may not have any sort order,
     * and may not use limit or skip.
     * @param callback {Function} Callback that will be called with each result
     *     of the query.
     * @return {Promise} A promise that will be fulfilled once the
     *     iteration has completed.
     */
each:function each(callback){
var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};

if(this._order||this._skip||this._limit>=0){
var error=new Error('Cannot iterate on a query with sort, skip, or limit.');
return Promise.reject(error);
}

var query=new AV.Query(this.objectClass);
// We can override the batch size from the options.
// This is undocumented, but useful for testing.
query._limit=options.batchSize||100;
query._where=_.clone(this._where);
query._include=_.clone(this._include);

query.ascending('objectId');

var finished=false;
return Promise._continueWhile(function(){
return!finished;
},function(){
return query.find(options).then(function(results){
var callbacksDone=Promise.resolve();
_.each(results,function(result){
callbacksDone=callbacksDone.then(function(){
return callback(result);
});
});

return callbacksDone.then(function(){
if(results.length>=query._limit){
query.greaterThan('objectId',results[results.length-1].id);
}else{
finished=true;
}
});
});
});
},

/**
     * Subscribe the changes of this query.
     *
     * LiveQuery is not included in the default bundle: {@link https://url.leanapp.cn/enable-live-query}.
     *
     * @since 3.0.0
     * @return {AV.LiveQuery} An eventemitter which can be used to get LiveQuery updates;
     */
subscribe:function subscribe(options){
return AV.LiveQuery.init(this,options);
}});


AV.FriendShipQuery=AV.Query._extend({
_newObject:function _newObject(){
var UserClass=AV.Object._getSubclass('_User');
return new UserClass();
},
_processResult:function _processResult(json){
if(json&&json[this._friendshipTag]){
var user=json[this._friendshipTag];
if(user.__type==='Pointer'&&user.className==='_User'){
delete user.__type;
delete user.className;
}
return user;
}else{
return null;
}
}});

};

/***/},
/* 65 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _=__webpack_require__(0);
var EventEmitter=__webpack_require__(66);
var Promise=__webpack_require__(1);

var _require=__webpack_require__(3),
inherits=_require.inherits;

var _require2=__webpack_require__(2),
request=_require2.request;

var subscribe=function subscribe(queryJSON,subscriptionId){
return request({
method:'POST',
path:'/LiveQuery/subscribe',
data:{
query:queryJSON,
id:subscriptionId}});


};

module.exports=function(AV){
var requireRealtime=function requireRealtime(){
if(!AV._config.realtime){
throw new Error('LiveQuery not supported. Please use the LiveQuery bundle. https://url.leanapp.cn/enable-live-query');
}
};
/**
   * @class
   * A LiveQuery, created by {@link AV.Query#subscribe} is an EventEmitter notifies changes of the Query.
   * @since 3.0.0
   */
AV.LiveQuery=inherits(EventEmitter,
/** @lends AV.LiveQuery.prototype */{
constructor:function constructor(id,client,queryJSON,subscriptionId){
var _this=this;

EventEmitter.apply(this);
this.id=id;
this._client=client;
this._client.register(this);
this._queryJSON=queryJSON;
this._subscriptionId=subscriptionId;
this._onMessage=this._dispatch.bind(this);
this._onReconnect=function(){
subscribe(_this._queryJSON,_this._subscriptionId).catch(function(error){
return console.error('LiveQuery resubscribe error: '+error.message);
});
};
client.on('message',this._onMessage);
client.on('reconnect',this._onReconnect);
},
_dispatch:function _dispatch(message){
var _this2=this;

message.forEach(function(_ref){
var op=_ref.op,
object=_ref.object,
queryId=_ref.query_id,
updatedKeys=_ref.updatedKeys;

if(queryId!==_this2.id)return;
var target=AV.parseJSON(_.extend({
__type:object.className==='_File'?'File':'Object'},
object));
if(updatedKeys){
/**
           * An existing AV.Object which fulfills the Query you subscribe is updated.
           * @event AV.LiveQuery#update
           * @param {AV.Object|AV.File} target updated object
           * @param {String[]} updatedKeys updated keys
           */
/**
           * An existing AV.Object which doesn't fulfill the Query is updated and now it fulfills the Query.
           * @event AV.LiveQuery#enter
           * @param {AV.Object|AV.File} target updated object
           * @param {String[]} updatedKeys updated keys
           */
/**
           * An existing AV.Object which fulfills the Query is updated and now it doesn't fulfill the Query.
           * @event AV.LiveQuery#leave
           * @param {AV.Object|AV.File} target updated object
           * @param {String[]} updatedKeys updated keys
           */
_this2.emit(op,target,updatedKeys);
}else{
/**
           * A new AV.Object which fulfills the Query you subscribe is created.
           * @event AV.LiveQuery#create
           * @param {AV.Object|AV.File} target updated object
           */
/**
           * An existing AV.Object which fulfills the Query you subscribe is deleted.
           * @event AV.LiveQuery#delete
           * @param {AV.Object|AV.File} target updated object
           */
_this2.emit(op,target);
}
});
},

/**
     * unsubscribe the query
     *
     * @return {Promise}
     */
unsubscribe:function unsubscribe(){
var client=this._client;
client.off('message',this._onMessage);
client.off('reconnect',this._onReconnect);
client.deregister(this);
return request({
method:'POST',
path:'/LiveQuery/unsubscribe',
data:{
id:client.id,
query_id:this.id}});


}},

/** @lends AV.LiveQuery */
{
init:function init(query){
var _ref2=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},
_ref2$subscriptionId=_ref2.subscriptionId,
userDefinedSubscriptionId=_ref2$subscriptionId===undefined?AV._getSubscriptionId():_ref2$subscriptionId;

requireRealtime();
if(!(query instanceof AV.Query))throw new TypeError('LiveQuery must be inited with a Query');
return Promise.resolve(userDefinedSubscriptionId).then(function(subscriptionId){
return AV._config.realtime.createLiveQueryClient(subscriptionId).then(function(liveQueryClient){
var _query$toJSON=query.toJSON(),
where=_query$toJSON.where,
keys=_query$toJSON.keys,
returnACL=_query$toJSON.returnACL;

var queryJSON={
where:where,
keys:keys,
returnACL:returnACL,
className:query.className};

var promise=subscribe(queryJSON,subscriptionId).then(function(_ref3){
var queryId=_ref3.query_id;
return new AV.LiveQuery(queryId,liveQueryClient,queryJSON,subscriptionId);
}).finally(function(){
liveQueryClient.deregister(promise);
});
liveQueryClient.register(promise);
return promise;
});
});
},

/**
     * Pause the LiveQuery connection. This is useful to deactivate the SDK when the app is swtiched to background.
     * @static
     * @return void
     */
pause:function pause(){
requireRealtime();
return AV._config.realtime.pause();
},

/**
     * Resume the LiveQuery connection. All subscriptions will be restored after reconnection.
     * @static
     * @return void
     */
resume:function resume(){
requireRealtime();
return AV._config.realtime.resume();
}});

};

/***/},
/* 66 */
/***/function(module,exports,__webpack_require__){

"use strict";


var has=Object.prototype.hasOwnProperty,
prefix='~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @api private
 */
function Events(){}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if(Object.create){
Events.prototype=Object.create(null);

//
// This hack is needed because the `__proto__` property is still inherited in
// some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
//
if(!new Events().__proto__)prefix=false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {Mixed} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @api private
 */
function EE(fn,context,once){
this.fn=fn;
this.context=context;
this.once=once||false;
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @api public
 */
function EventEmitter(){
this._events=new Events();
this._eventsCount=0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @api public
 */
EventEmitter.prototype.eventNames=function eventNames(){
var names=[],
events,
name;

if(this._eventsCount===0)return names;

for(name in events=this._events){
if(has.call(events,name))names.push(prefix?name.slice(1):name);
}

if(Object.getOwnPropertySymbols){
return names.concat(Object.getOwnPropertySymbols(events));
}

return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Boolean} exists Only check if there are listeners.
 * @returns {Array|Boolean}
 * @api public
 */
EventEmitter.prototype.listeners=function listeners(event,exists){
var evt=prefix?prefix+event:event,
available=this._events[evt];

if(exists)return!!available;
if(!available)return[];
if(available.fn)return[available.fn];

for(var i=0,l=available.length,ee=new Array(l);i<l;i++){
ee[i]=available[i].fn;
}

return ee;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @api public
 */
EventEmitter.prototype.emit=function emit(event,a1,a2,a3,a4,a5){
var evt=prefix?prefix+event:event;

if(!this._events[evt])return false;

var listeners=this._events[evt],
len=arguments.length,
args,
i;

if(listeners.fn){
if(listeners.once)this.removeListener(event,listeners.fn,undefined,true);

switch(len){
case 1:return listeners.fn.call(listeners.context),true;
case 2:return listeners.fn.call(listeners.context,a1),true;
case 3:return listeners.fn.call(listeners.context,a1,a2),true;
case 4:return listeners.fn.call(listeners.context,a1,a2,a3),true;
case 5:return listeners.fn.call(listeners.context,a1,a2,a3,a4),true;
case 6:return listeners.fn.call(listeners.context,a1,a2,a3,a4,a5),true;}


for(i=1,args=new Array(len-1);i<len;i++){
args[i-1]=arguments[i];
}

listeners.fn.apply(listeners.context,args);
}else{
var length=listeners.length,
j;

for(i=0;i<length;i++){
if(listeners[i].once)this.removeListener(event,listeners[i].fn,undefined,true);

switch(len){
case 1:listeners[i].fn.call(listeners[i].context);break;
case 2:listeners[i].fn.call(listeners[i].context,a1);break;
case 3:listeners[i].fn.call(listeners[i].context,a1,a2);break;
case 4:listeners[i].fn.call(listeners[i].context,a1,a2,a3);break;
default:
if(!args)for(j=1,args=new Array(len-1);j<len;j++){
args[j-1]=arguments[j];
}

listeners[i].fn.apply(listeners[i].context,args);}

}
}

return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.on=function on(event,fn,context){
var listener=new EE(fn,context||this),
evt=prefix?prefix+event:event;

if(!this._events[evt])this._events[evt]=listener,this._eventsCount++;else
if(!this._events[evt].fn)this._events[evt].push(listener);else
this._events[evt]=[this._events[evt],listener];

return this;
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.once=function once(event,fn,context){
var listener=new EE(fn,context||this,true),
evt=prefix?prefix+event:event;

if(!this._events[evt])this._events[evt]=listener,this._eventsCount++;else
if(!this._events[evt].fn)this._events[evt].push(listener);else
this._events[evt]=[this._events[evt],listener];

return this;
};

/**
 * Remove the listeners of a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {Mixed} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeListener=function removeListener(event,fn,context,once){
var evt=prefix?prefix+event:event;

if(!this._events[evt])return this;
if(!fn){
if(--this._eventsCount===0)this._events=new Events();else
delete this._events[evt];
return this;
}

var listeners=this._events[evt];

if(listeners.fn){
if(
listeners.fn===fn&&(
!once||listeners.once)&&(
!context||listeners.context===context))
{
if(--this._eventsCount===0)this._events=new Events();else
delete this._events[evt];
}
}else{
for(var i=0,events=[],length=listeners.length;i<length;i++){
if(
listeners[i].fn!==fn||
once&&!listeners[i].once||
context&&listeners[i].context!==context)
{
events.push(listeners[i]);
}
}

//
// Reset the array, or remove it completely if we have no more listeners.
//
if(events.length)this._events[evt]=events.length===1?events[0]:events;else
if(--this._eventsCount===0)this._events=new Events();else
delete this._events[evt];
}

return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {String|Symbol} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeAllListeners=function removeAllListeners(event){
var evt;

if(event){
evt=prefix?prefix+event:event;
if(this._events[evt]){
if(--this._eventsCount===0)this._events=new Events();else
delete this._events[evt];
}
}else{
this._events=new Events();
this._eventsCount=0;
}

return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off=EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener=EventEmitter.prototype.on;

//
// This function doesn't apply anymore.
//
EventEmitter.prototype.setMaxListeners=function setMaxListeners(){
return this;
};

//
// Expose the prefix.
//
EventEmitter.prefixed=prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter=EventEmitter;

//
// Expose the module.
//
if(true){
module.exports=EventEmitter;
}


/***/},
/* 67 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _=__webpack_require__(0);

var _require=__webpack_require__(3),
tap=_require.tap;

module.exports=function(AV){
/**
   * @class
   * @example
   * AV.Captcha.request().then(captcha => {
   *   captcha.bind({
   *     textInput: 'code', // the id for textInput
   *     image: 'captcha',
   *     verifyButton: 'verify',
   *   }, {
   *     success: (validateCode) => {}, // next step
   *     error: (error) => {}, // present error.message to user
   *   });
   * });
   */
AV.Captcha=function Captcha(options,authOptions){
this._options=options;
this._authOptions=authOptions;
/**
     * The image url of the captcha
     * @type string
     */
this.url=undefined;
/**
     * The captchaToken of the captcha.
     * @type string
     */
this.captchaToken=undefined;
/**
     * The validateToken of the captcha.
     * @type string
     */
this.validateToken=undefined;
};

/**
   * Refresh the captcha
   * @return {Promise.<string>} a new capcha url
   */
AV.Captcha.prototype.refresh=function refresh(){
var _this=this;

return AV.Cloud._requestCaptcha(this._options,this._authOptions).then(function(_ref){
var captchaToken=_ref.captchaToken,
url=_ref.url;

_.extend(_this,{captchaToken:captchaToken,url:url});
return url;
});
};

/**
   * Verify the captcha
   * @param {String} code The code from user input
   * @return {Promise.<string>} validateToken if the code is valid
   */
AV.Captcha.prototype.verify=function verify(code){
var _this2=this;

return AV.Cloud.verifyCaptcha(code,this.captchaToken).then(tap(function(validateToken){
return _this2.validateToken=validateToken;
}));
};

if(false){}

/**
   * Request a captcha
   * @param [options]
   * @param {Number} [options.width] width(px) of the captcha, ranged 60-200
   * @param {Number} [options.height] height(px) of the captcha, ranged 30-100
   * @param {Number} [options.size=4] length of the captcha, ranged 3-6. MasterKey required.
   * @param {Number} [options.ttl=60] time to live(s), ranged 10-180. MasterKey required.
   * @return {Promise.<AV.Captcha>}
   */
AV.Captcha.request=function(options,authOptions){
var captcha=new AV.Captcha(options,authOptions);
return captcha.refresh().then(function(){
return captcha;
});
};
};

/***/},
/* 68 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _=__webpack_require__(0);

var _require=__webpack_require__(2),
_request=_require._request,
request=_require.request;

var Promise=__webpack_require__(1);

module.exports=function(AV){
/**
   * Contains functions for calling and declaring
   * <p><strong><em>
   *   Some functions are only available from Cloud Code.
   * </em></strong></p>
   *
   * @namespace
   * @borrows AV.Captcha.request as requestCaptcha
   */
AV.Cloud=AV.Cloud||{};

_.extend(AV.Cloud,
/** @lends AV.Cloud */{
/**
     * Makes a call to a cloud function.
     * @param {String} name The function name.
     * @param {Object} data The parameters to send to the cloud function.
     * @param {AuthOptions} options
     * @return {Promise} A promise that will be resolved with the result
     * of the function.
     */
run:function run(name,data,options){
return request({
service:'engine',
method:'POST',
path:'/functions/'+name,
data:AV._encode(data,null,true),
authOptions:options}).
then(function(resp){
return AV._decode(resp).result;
});
},


/**
     * Makes a call to a cloud function, you can send {AV.Object} as param or a field of param; the response
     * from server will also be parsed as an {AV.Object}, array of {AV.Object}, or object includes {AV.Object}
     * @param {String} name The function name.
     * @param {Object} data The parameters to send to the cloud function.
     * @param {AuthOptions} options
     * @return {Promise} A promise that will be resolved with the result of the function.
     */
rpc:function rpc(name,data,options){
if(_.isArray(data)){
return Promise.reject(new Error("Can't pass Array as the param of rpc function in JavaScript SDK."));
}

return request({
service:'engine',
method:'POST',
path:'/call/'+name,
data:AV._encodeObjectOrArray(data),
authOptions:options}).
then(function(resp){
return AV._decode(resp).result;
});
},


/**
     * Make a call to request server date time.
     * @return {Promise.<Date>} A promise that will be resolved with the result
     * of the function.
     * @since 0.5.9
     */
getServerDate:function getServerDate(){
return _request('date',null,null,'GET').then(function(resp){
return AV._decode(resp);
});
},


/**
     * Makes a call to request a sms code for operation verification.
     * @param {String|Object} data The mobile phone number string or a JSON
     *    object that contains mobilePhoneNumber,template,sign,op,ttl,name etc.
     * @param {String} data.mobilePhoneNumber
     * @param {String} [data.template] sms template name
     * @param {String} [data.sign] sms signature name
     * @param {AuthOptions} [options] AuthOptions plus:
     * @param {String} [options.validateToken] a validate token returned by {@link AV.Cloud.verifyCaptcha}
     * @return {Promise} A promise that will be resolved if the request succeed
     */
requestSmsCode:function requestSmsCode(data){
var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};

if(_.isString(data)){
data={mobilePhoneNumber:data};
}
if(!data.mobilePhoneNumber){
throw new Error('Missing mobilePhoneNumber.');
}
if(options.validateToken){
data=_.extend({},data,{
validate_token:options.validateToken});

}
return _request('requestSmsCode',null,null,'POST',data,options);
},


/**
     * Makes a call to verify sms code that sent by AV.Cloud.requestSmsCode
     * @param {String} code The sms code sent by AV.Cloud.requestSmsCode
     * @param {phone} phone The mobile phoner number(optional).
     * @return {Promise} A promise that will be resolved with the result
     * of the function.
     */
verifySmsCode:function verifySmsCode(code,phone){
if(!code)throw new Error('Missing sms code.');
var params={};
if(_.isString(phone)){
params['mobilePhoneNumber']=phone;
}

return _request('verifySmsCode',code,null,'POST',params);
},
_requestCaptcha:function _requestCaptcha(options,authOptions){
return _request('requestCaptcha',null,null,'GET',options,authOptions).then(function(_ref){
var url=_ref.captcha_url,
captchaToken=_ref.captcha_token;
return{
captchaToken:captchaToken,
url:url};

});
},


/**
     * Request a captcha.
     */
requestCaptcha:AV.Captcha.request,

/**
     * Verify captcha code. This is the low-level API for captcha.
     * Checkout {@link AV.Captcha} for high abstract APIs.
     * @param {String} code the code from user input
     * @param {String} captchaToken captchaToken returned by {@link AV.Cloud.requestCaptcha}
     * @return {Promise.<String>} validateToken if the code is valid
     */
verifyCaptcha:function verifyCaptcha(code,captchaToken){
return _request('verifyCaptcha',null,null,'POST',{
captcha_code:code,
captcha_token:captchaToken}).
then(function(_ref2){
var validateToken=_ref2.validate_token;
return validateToken;
});
}});

};

/***/},
/* 69 */
/***/function(module,exports,__webpack_require__){

"use strict";


var request=__webpack_require__(2).request;

module.exports=function(AV){
AV.Installation=AV.Object.extend('_Installation');

/**
   * @namespace
   */
AV.Push=AV.Push||{};

/**
   * Sends a push notification.
   * @param {Object} data The data of the push notification.
   * @param {String[]} [data.channels] An Array of channels to push to.
   * @param {Date} [data.push_time] A Date object for when to send the push.
   * @param {Date} [data.expiration_time]  A Date object for when to expire
   *         the push.
   * @param {Number} [data.expiration_interval] The seconds from now to expire the push.
   * @param {AV.Query} [data.where] An AV.Query over AV.Installation that is used to match
   *         a set of installations to push to.
   * @param {String} [data.cql] A CQL statement over AV.Installation that is used to match
   *         a set of installations to push to.
   * @param {Object} data.data The data to send as part of the push.
             More details:  https://url.leanapp.cn/pushData
   * @param {AuthOptions} [options]
   * @return {Promise}
   */
AV.Push.send=function(data,options){
if(data.where){
data.where=data.where.toJSON().where;
}

if(data.where&&data.cql){
throw new Error("Both where and cql can't be set");
}

if(data.push_time){
data.push_time=data.push_time.toJSON();
}

if(data.expiration_time){
data.expiration_time=data.expiration_time.toJSON();
}

if(data.expiration_time&&data.expiration_time_interval){
throw new Error("Both expiration_time and expiration_time_interval can't be set");
}

return request({
service:'push',
method:'POST',
path:'/push',
data:data,
authOptions:options});

};
};

/***/},
/* 70 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};

var _=__webpack_require__(0);
var Promise=__webpack_require__(1);
var AVRequest=__webpack_require__(2)._request;

var _require=__webpack_require__(3),
getSessionToken=_require.getSessionToken;

module.exports=function(AV){
var getUser=function getUser(){
var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};

var sessionToken=getSessionToken(options);
if(sessionToken){
return AV.User._fetchUserBySessionToken(getSessionToken(options));
}
return AV.User.currentAsync();
};

var getUserPointer=function getUserPointer(options){
return getUser(options).then(function(currUser){
return AV.Object.createWithoutData('_User',currUser.id)._toPointer();
});
};

/**
   * Contains functions to deal with Status in LeanCloud.
   * @class
   */
AV.Status=function(imageUrl,message){
this.data={};
this.inboxType='default';
this.query=null;
if(imageUrl&&(typeof imageUrl==='undefined'?'undefined':_typeof(imageUrl))==='object'){
this.data=imageUrl;
}else{
if(imageUrl){
this.data.image=imageUrl;
}
if(message){
this.data.message=message;
}
}
return this;
};

_.extend(AV.Status.prototype,
/** @lends AV.Status.prototype */{
/**
     * Gets the value of an attribute in status data.
     * @param {String} attr The string name of an attribute.
     */
get:function get(attr){
return this.data[attr];
},
/**
     * Sets a hash of model attributes on the status data.
     * @param {String} key The key to set.
     * @param {} value The value to give it.
     */
set:function set(key,value){
this.data[key]=value;
return this;
},
/**
     * Destroy this status,then it will not be avaiable in other user's inboxes.
     * @param {AuthOptions} options
     * @return {Promise} A promise that is fulfilled when the destroy
     *     completes.
     */
destroy:function destroy(options){
if(!this.id)return Promise.reject(new Error('The status id is not exists.'));
var request=AVRequest('statuses',null,this.id,'DELETE',options);
return request;
},
/**
     * Cast the AV.Status object to an AV.Object pointer.
     * @return {AV.Object} A AV.Object pointer.
     */
toObject:function toObject(){
if(!this.id)return null;
return AV.Object.createWithoutData('_Status',this.id);
},
_getDataJSON:function _getDataJSON(){
var json=_.clone(this.data);
return AV._encode(json);
},
/**
     * Send a status by a AV.Query object.
     * @since 0.3.0
     * @param {AuthOptions} options
     * @return {Promise} A promise that is fulfilled when the send
     *     completes.
     * @example
     *     // send a status to male users
     *     var status = new AVStatus('image url', 'a message');
     *     status.query = new AV.Query('_User');
     *     status.query.equalTo('gender', 'male');
     *     status.send().then(function(){
     *              //send status successfully.
     *      }, function(err){
     *             //an error threw.
     *             console.dir(err);
     *      });
     */
send:function send(){
var _this=this;

var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};

if(!getSessionToken(options)&&!AV.User.current()){
throw new Error('Please signin an user.');
}
if(!this.query){
return AV.Status.sendStatusToFollowers(this,options);
}

return getUserPointer(options).then(function(currUser){
var query=_this.query.toJSON();
query.className=_this.query.className;
var data={};
data.query=query;
_this.data=_this.data||{};
_this.data.source=_this.data.source||currUser;
data.data=_this._getDataJSON();
data.inboxType=_this.inboxType||'default';

return AVRequest('statuses',null,null,'POST',data,options);
}).then(function(response){
_this.id=response.objectId;
_this.createdAt=AV._parseDate(response.createdAt);
return _this;
});
},

_finishFetch:function _finishFetch(serverData){
this.id=serverData.objectId;
this.createdAt=AV._parseDate(serverData.createdAt);
this.updatedAt=AV._parseDate(serverData.updatedAt);
this.messageId=serverData.messageId;
delete serverData.messageId;
delete serverData.objectId;
delete serverData.createdAt;
delete serverData.updatedAt;
this.data=AV._decode(serverData);
}});


/**
   * Send a status to current signined user's followers.
   * @since 0.3.0
   * @param {AV.Status} status  A status object to be send to followers.
   * @param {AuthOptions} options
   * @return {Promise} A promise that is fulfilled when the send
   *     completes.
   * @example
   *     var status = new AVStatus('image url', 'a message');
   *     AV.Status.sendStatusToFollowers(status).then(function(){
   *              //send status successfully.
   *      }, function(err){
   *             //an error threw.
   *             console.dir(err);
   *      });
   */
AV.Status.sendStatusToFollowers=function(status){
var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};

if(!getSessionToken(options)&&!AV.User.current()){
throw new Error('Please signin an user.');
}
return getUserPointer(options).then(function(currUser){
var query={};
query.className='_Follower';
query.keys='follower';
query.where={user:currUser};
var data={};
data.query=query;
status.data=status.data||{};
status.data.source=status.data.source||currUser;
data.data=status._getDataJSON();
data.inboxType=status.inboxType||'default';

var request=AVRequest('statuses',null,null,'POST',data,options);
return request.then(function(response){
status.id=response.objectId;
status.createdAt=AV._parseDate(response.createdAt);
return status;
});
});
};

/**
   * <p>Send  a status from current signined user to other user's private status inbox.</p>
   * @since 0.3.0
   * @param {AV.Status} status  A status object to be send to followers.
   * @param {String} target The target user or user's objectId.
   * @param {AuthOptions} options
   * @return {Promise} A promise that is fulfilled when the send
   *     completes.
   * @example
   *     // send a private status to user '52e84e47e4b0f8de283b079b'
   *     var status = new AVStatus('image url', 'a message');
   *     AV.Status.sendPrivateStatus(status, '52e84e47e4b0f8de283b079b').then(function(){
   *              //send status successfully.
   *      }, function(err){
   *             //an error threw.
   *             console.dir(err);
   *      });
   */
AV.Status.sendPrivateStatus=function(status,target){
var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};

if(!getSessionToken(options)&&!AV.User.current()){
throw new Error('Please signin an user.');
}
if(!target){
throw new Error('Invalid target user.');
}
var userObjectId=_.isString(target)?target:target.id;
if(!userObjectId){
throw new Error('Invalid target user.');
}
return getUserPointer(options).then(function(currUser){
var query={};
query.className='_User';
query.where={objectId:userObjectId};
var data={};
data.query=query;
status.data=status.data||{};
status.data.source=status.data.source||currUser;
data.data=status._getDataJSON();
data.inboxType='private';
status.inboxType='private';

var request=AVRequest('statuses',null,null,'POST',data,options);
return request.then(function(response){
status.id=response.objectId;
status.createdAt=AV._parseDate(response.createdAt);
return status;
});
});
};

/**
   * Count unread statuses in someone's inbox.
   * @since 0.3.0
   * @param {AV.User} owner The status owner.
   * @param {String} inboxType The inbox type, 'default' by default.
   * @param {AuthOptions} options
   * @return {Promise} A promise that is fulfilled when the count
   *     completes.
   * @example
   *  AV.Status.countUnreadStatuses(AV.User.current()).then(function(response){
   *    console.log(response.unread); //unread statuses number.
   *    console.log(response.total);  //total statuses number.
   *  });
   */
AV.Status.countUnreadStatuses=function(owner){
var inboxType=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'default';
var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};

if(!_.isString(inboxType))options=inboxType;
if(!getSessionToken(options)&&owner==null&&!AV.User.current()){
throw new Error('Please signin an user or pass the owner objectId.');
}
return Promise.resolve(owner||getUser(options)).then(function(owner){
var params={};
params.inboxType=AV._encode(inboxType);
params.owner=AV._encode(owner);
return AVRequest('subscribe/statuses/count',null,null,'GET',params,options);
});
};

/**
   * reset unread statuses count in someone's inbox.
   * @since 2.1.0
   * @param {AV.User} owner The status owner.
   * @param {String} inboxType The inbox type, 'default' by default.
   * @param {AuthOptions} options
   * @return {Promise} A promise that is fulfilled when the reset
   *     completes.
   * @example
   *  AV.Status.resetUnreadCount(AV.User.current()).then(function(response){
   *    console.log(response.unread); //unread statuses number.
   *    console.log(response.total);  //total statuses number.
   *  });
   */
AV.Status.resetUnreadCount=function(owner){
var inboxType=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'default';
var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};

if(!_.isString(inboxType))options=inboxType;
if(!getSessionToken(options)&&owner==null&&!AV.User.current()){
throw new Error('Please signin an user or pass the owner objectId.');
}
return Promise.resolve(owner||getUser(options)).then(function(owner){
var params={};
params.inboxType=AV._encode(inboxType);
params.owner=AV._encode(owner);
return AVRequest('subscribe/statuses/resetUnreadCount',null,null,'POST',params,options);
});
};

/**
   * Create a status query to find someone's published statuses.
   * @since 0.3.0
   * @param {AV.User} source The status source, typically the publisher.
   * @return {AV.Query} The query object for status.
   * @example
   *   //Find current user's published statuses.
   *   var query = AV.Status.statusQuery(AV.User.current());
   *   query.find().then(function(statuses){
   *      //process statuses
   *   });
   */
AV.Status.statusQuery=function(source){
var query=new AV.Query('_Status');
if(source){
query.equalTo('source',source);
}
return query;
};

/**
   * <p>AV.InboxQuery defines a query that is used to fetch somebody's inbox statuses.</p>
   * @class
   */
AV.InboxQuery=AV.Query._extend(
/** @lends AV.InboxQuery.prototype */{
_objectClass:AV.Status,
_sinceId:0,
_maxId:0,
_inboxType:'default',
_owner:null,
_newObject:function _newObject(){
return new AV.Status();
},
_createRequest:function _createRequest(params,options){
return AV.InboxQuery.__super__._createRequest.call(this,params,options,'/subscribe/statuses');
},

/**
     * Sets the messageId of results to skip before returning any results.
     * This is useful for pagination.
     * Default is zero.
     * @param {Number} n the mesage id.
     * @return {AV.InboxQuery} Returns the query, so you can chain this call.
     */
sinceId:function sinceId(id){
this._sinceId=id;
return this;
},
/**
     * Sets the maximal messageId of results。
     * This is useful for pagination.
     * Default is zero that is no limition.
     * @param {Number} n the mesage id.
     * @return {AV.InboxQuery} Returns the query, so you can chain this call.
     */
maxId:function maxId(id){
this._maxId=id;
return this;
},
/**
     * Sets the owner of the querying inbox.
     * @param {AV.User} owner The inbox owner.
     * @return {AV.InboxQuery} Returns the query, so you can chain this call.
     */
owner:function owner(_owner){
this._owner=_owner;
return this;
},
/**
     * Sets the querying inbox type.default is 'default'.
     * @param {Object} type The inbox type.
     * @return {AV.InboxQuery} Returns the query, so you can chain this call.
     */
inboxType:function inboxType(type){
this._inboxType=type;
return this;
},
toJSON:function toJSON(){
var params=AV.InboxQuery.__super__.toJSON.call(this);
params.owner=AV._encode(this._owner);
params.inboxType=AV._encode(this._inboxType);
params.sinceId=AV._encode(this._sinceId);
params.maxId=AV._encode(this._maxId);
return params;
}});


/**
   * Create a inbox status query to find someone's inbox statuses.
   * @since 0.3.0
   * @param {AV.User} owner The inbox's owner
   * @param {String} inboxType The inbox type,'default' by default.
   * @return {AV.InboxQuery} The inbox query object.
   * @see AV.InboxQuery
   * @example
   *   //Find current user's default inbox statuses.
   *   var query = AV.Status.inboxQuery(AV.User.current());
   *   //find the statuses after the last message id
   *   query.sinceId(lastMessageId);
   *   query.find().then(function(statuses){
   *      //process statuses
   *   });
   */
AV.Status.inboxQuery=function(owner,inboxType){
var query=new AV.InboxQuery(AV.Status);
if(owner){
query._owner=owner;
}
if(inboxType){
query._inboxType=inboxType;
}
return query;
};
};

/***/},
/* 71 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _=__webpack_require__(0);
var AVRequest=__webpack_require__(2)._request;

module.exports=function(AV){
/**
   * A builder to generate sort string for app searching.For example:
   * @class
   * @since 0.5.1
   * @example
   *   var builder = new AV.SearchSortBuilder();
   *   builder.ascending('key1').descending('key2','max');
   *   var query = new AV.SearchQuery('Player');
   *   query.sortBy(builder);
   *   query.find().then();
   */
AV.SearchSortBuilder=function(){
this._sortFields=[];
};

_.extend(AV.SearchSortBuilder.prototype,
/** @lends AV.SearchSortBuilder.prototype */{
_addField:function _addField(key,order,mode,missing){
var field={};
field[key]={
order:order||'asc',
mode:mode||'avg',
missing:'_'+(missing||'last')};

this._sortFields.push(field);
return this;
},

/**
     * Sorts the results in ascending order by the given key and options.
     *
     * @param {String} key The key to order by.
     * @param {String} mode The sort mode, default is 'avg', you can choose
     *                  'max' or 'min' too.
     * @param {String} missing The missing key behaviour, default is 'last',
     *                  you can choose 'first' too.
     * @return {AV.SearchSortBuilder} Returns the builder, so you can chain this call.
     */
ascending:function ascending(key,mode,missing){
return this._addField(key,'asc',mode,missing);
},

/**
     * Sorts the results in descending order by the given key and options.
     *
     * @param {String} key The key to order by.
     * @param {String} mode The sort mode, default is 'avg', you can choose
     *                  'max' or 'min' too.
     * @param {String} missing The missing key behaviour, default is 'last',
     *                  you can choose 'first' too.
     * @return {AV.SearchSortBuilder} Returns the builder, so you can chain this call.
     */
descending:function descending(key,mode,missing){
return this._addField(key,'desc',mode,missing);
},

/**
     * Add a proximity based constraint for finding objects with key point
     * values near the point given.
     * @param {String} key The key that the AV.GeoPoint is stored in.
     * @param {AV.GeoPoint} point The reference AV.GeoPoint that is used.
     * @param {Object} options The other options such as mode,order, unit etc.
     * @return {AV.SearchSortBuilder} Returns the builder, so you can chain this call.
     */
whereNear:function whereNear(key,point,options){
options=options||{};
var field={};
var geo={
lat:point.latitude,
lon:point.longitude};

var m={
order:options.order||'asc',
mode:options.mode||'avg',
unit:options.unit||'km'};

m[key]=geo;
field['_geo_distance']=m;

this._sortFields.push(field);
return this;
},

/**
     * Build a sort string by configuration.
     * @return {String} the sort string.
     */
build:function build(){
return JSON.stringify(AV._encode(this._sortFields));
}});


/**
   * App searching query.Use just like AV.Query:
   *
   * Visit <a href='https://leancloud.cn/docs/app_search_guide.html'>App Searching Guide</a>
   * for more details.
   * @class
   * @since 0.5.1
   * @example
   *   var query = new AV.SearchQuery('Player');
   *   query.queryString('*');
   *   query.find().then(function(results) {
   *     console.log('Found %d objects', query.hits());
   *     //Process results
   *   });
   */
AV.SearchQuery=AV.Query._extend(
/** @lends AV.SearchQuery.prototype */{
_sid:null,
_hits:0,
_queryString:null,
_highlights:null,
_sortBuilder:null,
_createRequest:function _createRequest(params,options){
return AVRequest('search/select',null,null,'GET',params||this.toJSON(),options);
},

/**
     * Sets the sid of app searching query.Default is null.
     * @param {String} sid  Scroll id for searching.
     * @return {AV.SearchQuery} Returns the query, so you can chain this call.
     */
sid:function sid(_sid){
this._sid=_sid;
return this;
},

/**
     * Sets the query string of app searching.
     * @param {String} q  The query string.
     * @return {AV.SearchQuery} Returns the query, so you can chain this call.
     */
queryString:function queryString(q){
this._queryString=q;
return this;
},

/**
     * Sets the highlight fields. Such as
     * <pre><code>
     *   query.highlights('title');
     *   //or pass an array.
     *   query.highlights(['title', 'content'])
     * </code></pre>
     * @param {String|String[]} highlights a list of fields.
     * @return {AV.SearchQuery} Returns the query, so you can chain this call.
     */
highlights:function highlights(_highlights){
var objects;
if(_highlights&&_.isString(_highlights)){
objects=arguments;
}else{
objects=_highlights;
}
this._highlights=objects;
return this;
},

/**
     * Sets the sort builder for this query.
     * @see AV.SearchSortBuilder
     * @param { AV.SearchSortBuilder} builder The sort builder.
     * @return {AV.SearchQuery} Returns the query, so you can chain this call.
     *
     */
sortBy:function sortBy(builder){
this._sortBuilder=builder;
return this;
},

/**
     * Returns the number of objects that match this query.
     * @return {Number}
     */
hits:function hits(){
if(!this._hits){
this._hits=0;
}
return this._hits;
},

_processResult:function _processResult(json){
delete json['className'];
delete json['_app_url'];
delete json['_deeplink'];
return json;
},

/**
     * Returns true when there are more documents can be retrieved by this
     * query instance, you can call find function to get more results.
     * @see AV.SearchQuery#find
     * @return {Boolean}
     */
hasMore:function hasMore(){
return!this._hitEnd;
},

/**
     * Reset current query instance state(such as sid, hits etc) except params
     * for a new searching. After resetting, hasMore() will return true.
     */
reset:function reset(){
this._hitEnd=false;
this._sid=null;
this._hits=0;
},

/**
     * Retrieves a list of AVObjects that satisfy this query.
     * Either options.success or options.error is called when the find
     * completes.
     *
     * @see AV.Query#find
     * @return {Promise} A promise that is resolved with the results when
     * the query completes.
     */
find:function find(){
var self=this;

var request=this._createRequest();

return request.then(function(response){
//update sid for next querying.
if(response.sid){
self._oldSid=self._sid;
self._sid=response.sid;
}else{
self._sid=null;
self._hitEnd=true;
}
self._hits=response.hits||0;

return _.map(response.results,function(json){
if(json.className){
response.className=json.className;
}
var obj=self._newObject(response);
obj.appURL=json['_app_url'];
obj._finishFetch(self._processResult(json),true);
return obj;
});
});
},

toJSON:function toJSON(){
var params=AV.SearchQuery.__super__.toJSON.call(this);
delete params.where;
if(this.className){
params.clazz=this.className;
}
if(this._sid){
params.sid=this._sid;
}
if(!this._queryString){
throw new Error('Please set query string.');
}else{
params.q=this._queryString;
}
if(this._highlights){
params.highlights=this._highlights.join(',');
}
if(this._sortBuilder&&params.order){
throw new Error('sort and order can not be set at same time.');
}
if(this._sortBuilder){
params.sort=this._sortBuilder.build();
}

return params;
}});

};

/**
 * Sorts the results in ascending order by the given key.
 *
 * @method AV.SearchQuery#ascending
 * @param {String} key The key to order by.
 * @return {AV.SearchQuery} Returns the query, so you can chain this call.
 */
/**
 * Also sorts the results in ascending order by the given key. The previous sort keys have
 * precedence over this key.
 *
 * @method AV.SearchQuery#addAscending
 * @param {String} key The key to order by
 * @return {AV.SearchQuery} Returns the query so you can chain this call.
 */
/**
 * Sorts the results in descending order by the given key.
 *
 * @method AV.SearchQuery#descending
 * @param {String} key The key to order by.
 * @return {AV.SearchQuery} Returns the query, so you can chain this call.
 */
/**
 * Also sorts the results in descending order by the given key. The previous sort keys have
 * precedence over this key.
 *
 * @method AV.SearchQuery#addDescending
 * @param {String} key The key to order by
 * @return {AV.SearchQuery} Returns the query so you can chain this call.
 */
/**
 * Include nested AV.Objects for the provided key.  You can use dot
 * notation to specify which fields in the included object are also fetch.
 * @method AV.SearchQuery#include
 * @param {String[]} keys The name of the key to include.
 * @return {AV.SearchQuery} Returns the query, so you can chain this call.
 */
/**
 * Sets the number of results to skip before returning any results.
 * This is useful for pagination.
 * Default is to skip zero results.
 * @method AV.SearchQuery#skip
 * @param {Number} n the number of results to skip.
 * @return {AV.SearchQuery} Returns the query, so you can chain this call.
 */
/**
 * Sets the limit of the number of results to return. The default limit is
 * 100, with a maximum of 1000 results being returned at a time.
 * @method AV.SearchQuery#limit
 * @param {Number} n the number of results to limit to.
 * @return {AV.SearchQuery} Returns the query, so you can chain this call.
 */

/***/},
/* 72 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _=__webpack_require__(0);
var AVError=__webpack_require__(4);

var _require=__webpack_require__(2),
request=_require.request;

var Promise=__webpack_require__(1);

module.exports=function(AV){
/**
   * 包含了使用了 LeanCloud
   *  <a href='/docs/leaninsight_guide.html'>离线数据分析功能</a>的函数。
   * <p><strong><em>
   *   仅在云引擎运行环境下有效。
   * </em></strong></p>
   * @namespace
   */
AV.Insight=AV.Insight||{};

_.extend(AV.Insight,
/** @lends AV.Insight */{
/**
     * 开始一个 Insight 任务。结果里将返回 Job id，你可以拿得到的 id 使用
     * AV.Insight.JobQuery 查询任务状态和结果。
     * @param {Object} jobConfig 任务配置的 JSON 对象，例如：<code><pre>
     *                   { "sql" : "select count(*) as c,gender from _User group by gender",
     *                     "saveAs": {
     *                         "className" : "UserGender",
     *                         "limit": 1
     *                      }
     *                   }
     *                  </pre></code>
     *               sql 指定任务执行的 SQL 语句， saveAs（可选） 指定将结果保存在哪张表里，limit 最大 1000。
     * @param {AuthOptions} [options]
     * @return {Promise} A promise that will be resolved with the result
     * of the function.
     */
startJob:function startJob(jobConfig,options){
if(!jobConfig||!jobConfig.sql){
throw new Error('Please provide the sql to run the job.');
}
var data={
jobConfig:jobConfig,
appId:AV.applicationId};

return request({
path:'/bigquery/jobs',
method:'POST',
data:AV._encode(data,null,true),
authOptions:options,
signKey:false}).
then(function(resp){
return AV._decode(resp).id;
});
},

/**
     * 监听 Insight 任务事件，目前仅支持 end 事件，表示任务完成。
     *  <p><strong><em>
     *     仅在云引擎运行环境下有效。
     *  </em></strong></p>
     * @param {String} event 监听的事件，目前仅支持 'end' ，表示任务完成
     * @param {Function} 监听回调函数，接收 (err, id) 两个参数，err 表示错误信息，
     *                   id 表示任务 id。接下来你可以拿这个 id 使用AV.Insight.JobQuery 查询任务状态和结果。
     *
     */
on:function on(event,cb){}});


/**
   * 创建一个对象，用于查询 Insight 任务状态和结果。
   * @class
   * @param {String} id 任务 id
   * @since 0.5.5
   */
AV.Insight.JobQuery=function(id,className){
if(!id){
throw new Error('Please provide the job id.');
}
this.id=id;
this.className=className;
this._skip=0;
this._limit=100;
};

_.extend(AV.Insight.JobQuery.prototype,
/** @lends AV.Insight.JobQuery.prototype */{
/**
     * Sets the number of results to skip before returning any results.
     * This is useful for pagination.
     * Default is to skip zero results.
     * @param {Number} n the number of results to skip.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
skip:function skip(n){
this._skip=n;
return this;
},

/**
     * Sets the limit of the number of results to return. The default limit is
     * 100, with a maximum of 1000 results being returned at a time.
     * @param {Number} n the number of results to limit to.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
limit:function limit(n){
this._limit=n;
return this;
},

/**
     * 查询任务状态和结果，任务结果为一个 JSON 对象，包括 status 表示任务状态， totalCount 表示总数，
     * results 数组表示任务结果数组，previewCount 表示可以返回的结果总数，任务的开始和截止时间
     * startTime、endTime 等信息。
     *
     * @param {AuthOptions} [options]
     * @return {Promise} A promise that will be resolved with the result
     * of the function.
     *
     */
find:function find(options){
var params={
skip:this._skip,
limit:this._limit};


return request({
path:'/bigquery/jobs/'+this.id,
method:'GET',
query:params,
authOptions:options,
signKey:false}).
then(function(response){
if(response.error){
return Promise.reject(new AVError(response.code,response.error));
}
return Promise.resolve(response);
});
}});

};

/***/},
/* 73 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _=__webpack_require__(0);

var _require=__webpack_require__(2),
_request=_require._request;

var AV=__webpack_require__(5);

var serializeMessage=function serializeMessage(message){
if(typeof message==='string'){
return message;
}
if(typeof message.getPayload==='function'){
return JSON.stringify(message.getPayload());
}
return JSON.stringify(message);
};

/**
 * <p>An AV.Conversation is a local representation of a LeanCloud realtime's
 * conversation. This class is a subclass of AV.Object, and retains the
 * same functionality of an AV.Object, but also extends it with various
 * conversation specific methods, like get members, creators of this conversation.
 * </p>
 *
 * @class AV.Conversation
 * @param {String} name The name of the Role to create.
 * @param {Object} [options]
 * @param {Boolean} [options.isSystem] Set this conversation as system conversation.
 * @param {Boolean} [options.isTransient] Set this conversation as transient conversation.
 */
module.exports=AV.Object.extend('_Conversation',
/** @lends AV.Conversation.prototype */{
constructor:function constructor(name){
var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};

AV.Object.prototype.constructor.call(this,null,null);
this.set('name',name);
if(options.isSystem!==undefined){
this.set('sys',options.isSystem?true:false);
}
if(options.isTransient!==undefined){
this.set('tr',options.isTransient?true:false);
}
},

/**
   * Get current conversation's creator.
   *
   * @return {String}
   */
getCreator:function getCreator(){
return this.get('c');
},


/**
   * Get the last message's time.
   *
   * @return {Date}
   */
getLastMessageAt:function getLastMessageAt(){
return this.get('lm');
},


/**
   * Get this conversation's members
   *
   * @return {String[]}
   */
getMembers:function getMembers(){
return this.get('m');
},


/**
   * Add a member to this conversation
   *
   * @param {String} member
   */
addMember:function addMember(member){
return this.add('m',member);
},


/**
   * Get this conversation's members who set this conversation as muted.
   *
   * @return {String[]}
   */
getMutedMembers:function getMutedMembers(){
return this.get('mu');
},


/**
   * Get this conversation's name field.
   *
   * @return String
   */
getName:function getName(){
return this.get('name');
},


/**
   * Returns true if this conversation is transient conversation.
   *
   * @return {Boolean}
   */
isTransient:function isTransient(){
return this.get('tr');
},


/**
   * Returns true if this conversation is system conversation.
   *
   * @return {Boolean}
   */
isSystem:function isSystem(){
return this.get('sys');
},


/**
   * Send realtime message to this conversation, using HTTP request.
   *
   * @param {String} fromClient Sender's client id.
   * @param {String|Object} message The message which will send to conversation.
   *     It could be a raw string, or an object with a `toJSON` method, like a
   *     realtime SDK's Message object. See more: {@link https://leancloud.cn/docs/realtime_guide-js.html#消息}
   * @param {Object} [options]
   * @param {Boolean} [options.transient] Whether send this message as transient message or not.
   * @param {String[]} [options.toClients] Ids of clients to send to. This option can be used only in system conversation.
   * @param {Object} [options.pushData] Push data to this message. See more: {@link https://url.leanapp.cn/pushData 推送消息内容}
   * @param {AuthOptions} [authOptions]
   * @return {Promise}
   */
send:function send(fromClient,message){
var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};
var authOptions=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};

var data={
from_peer:fromClient,
conv_id:this.id,
transient:false,
message:serializeMessage(message)};

if(options.toClients!==undefined){
data.to_peers=options.toClients;
}
if(options.transient!==undefined){
data.transient=options.transient?true:false;
}
if(options.pushData!==undefined){
data.push_data=options.pushData;
}
return _request('rtm','messages',null,'POST',data,authOptions);
},


/**
   * Send realtime broadcast message to all clients, via this conversation, using HTTP request.
   *
   * @param {String} fromClient Sender's client id.
   * @param {String|Object} message The message which will send to conversation.
   *     It could be a raw string, or an object with a `toJSON` method, like a
   *     realtime SDK's Message object. See more: {@link https://leancloud.cn/docs/realtime_guide-js.html#消息}.
   * @param {Object} [options]
   * @param {Object} [options.pushData] Push data to this message. See more: {@link https://url.leanapp.cn/pushData 推送消息内容}.
   * @param {Object} [options.validTill] The message will valid till this time.
   * @param {AuthOptions} [authOptions]
   * @return {Promise}
   */
broadcast:function broadcast(fromClient,message){
var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};
var authOptions=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};

var data={
from_peer:fromClient,
conv_id:this.id,
message:serializeMessage(message)};

if(options.pushData!==undefined){
data.push=options.pushData;
}
if(options.validTill!==undefined){
var ts=options.validTill;
if(_.isDate(ts)){
ts=ts.getTime();
}
options.valid_till=ts;
}
return _request('rtm','broadcast',null,'POST',data,authOptions);
}});


/***/},
/* 74 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _=__webpack_require__(0);
var Promise=__webpack_require__(1);

var _require=__webpack_require__(2),
request=_require.request;

var _require2=__webpack_require__(3),
ensureArray=_require2.ensureArray,
parseDate=_require2.parseDate;

var AV=__webpack_require__(5);

/**
 * The version change interval for Leaderboard
 * @enum
 */
AV.LeaderboardVersionChangeInterval={
NEVER:'never',
DAY:'day',
WEEK:'week',
MONTH:'month'};


/**
 * The order of the leaderboard results
 * @enum
 */
AV.LeaderboardOrder={
ASCENDING:'ascending',
DESCENDING:'descending'};


/**
 * The update strategy for Leaderboard
 * @enum
 */
AV.LeaderboardUpdateStrategy={
/** Only keep the best statistic. If the leaderboard is in descending order, the best statistic is the highest one. */
BETTER:'better',
/** Keep the last updated statistic */
LAST:'last',
/** Keep the sum of all updated statistics */
SUM:'sum'};


/**
 * @typedef {Object} Ranking
 * @property {number} rank Starts at 0
 * @property {number} value the statistic value of this ranking
 * @property {AV.User} user The user of this ranking
 * @property {Statistic[]} [includedStatistics] Other statistics of the user, specified by the `includeStatistic` option of `AV.Leaderboard.getResults()`
 */

/**
 * @typedef {Object} LeaderboardArchive
 * @property {string} statisticName
 * @property {number} version version of the leaderboard
 * @property {string} status
 * @property {string} url URL for the downloadable archive
 * @property {Date} activatedAt time when this version became active
 * @property {Date} deactivatedAt time when this version was deactivated by a version incrementing
 */

/**
 * @class
 */
function Statistic(_ref){
var name=_ref.name,
value=_ref.value,
version=_ref.version;

/**
   * @type {string}
   */
this.name=name;
/**
   * @type {number}
   */
this.value=value;
/**
   * @type {number?}
   */
this.version=version;
}

var parseStatisticData=function parseStatisticData(statisticData){
var _AV$_decode=AV._decode(statisticData),
name=_AV$_decode.statisticName,
value=_AV$_decode.statisticValue,
version=_AV$_decode.version;

return new Statistic({name:name,value:value,version:version});
};

/**
 * @class
 */
AV.Leaderboard=function Leaderboard(statisticName){
/**
   * @type {string}
   */
this.statisticName=statisticName;
/**
   * @type {AV.LeaderboardOrder}
   */
this.order=undefined;
/**
   * @type {AV.LeaderboardUpdateStrategy}
   */
this.updateStrategy=undefined;
/**
   * @type {AV.LeaderboardVersionChangeInterval}
   */
this.versionChangeInterval=undefined;
/**
   * @type {number}
   */
this.version=undefined;
/**
   * @type {Date?}
   */
this.nextResetAt=undefined;
/**
   * @type {Date?}
   */
this.createdAt=undefined;
};
var Leaderboard=AV.Leaderboard;

/**
 * Create an instance of Leaderboard for the give statistic name.
 * @param {string} statisticName
 * @return {AV.Leaderboard}
 */
AV.Leaderboard.createWithoutData=function(statisticName){
return new Leaderboard(statisticName);
};
/**
 * (masterKey required) Create a new Leaderboard.
 * @param {Object} options
 * @param {string} options.statisticName
 * @param {AV.LeaderboardOrder} options.order
 * @param {AV.LeaderboardVersionChangeInterval} [options.versionChangeInterval] default to WEEK
 * @param {AV.LeaderboardUpdateStrategy} [options.updateStrategy] default to BETTER
 * @param {AuthOptions} [authOptions]
 * @return {Promise<AV.Leaderboard>}
 */
AV.Leaderboard.createLeaderboard=function(_ref2,authOptions){
var statisticName=_ref2.statisticName,
order=_ref2.order,
versionChangeInterval=_ref2.versionChangeInterval,
updateStrategy=_ref2.updateStrategy;
return request({
method:'POST',
path:'/leaderboard/leaderboards',
data:{
statisticName:statisticName,
order:order,
versionChangeInterval:versionChangeInterval,
updateStrategy:updateStrategy},

authOptions:authOptions}).
then(function(data){
var leaderboard=new Leaderboard(statisticName);
return leaderboard._finishFetch(data);
});
};
/**
 * Get the Leaderboard with the specified statistic name.
 * @param {string} statisticName
 * @param {AuthOptions} [authOptions]
 * @return {Promise<AV.Leaderboard>}
 */
AV.Leaderboard.getLeaderboard=function(statisticName,authOptions){
return Leaderboard.createWithoutData(statisticName).fetch(authOptions);
};
/**
 * Get Statistics for the specified user.
 * @param {AV.User} user The specified AV.User pointer.
 * @param {Object} [options]
 * @param {string[]} [options.statisticNames] Specify the statisticNames. If not set, all statistics of the user will be fetched.
 * @param {AuthOptions} [authOptions]
 * @return {Promise<Statistic[]>}
 */
AV.Leaderboard.getStatistics=function(user){
var _ref3=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},
statisticNames=_ref3.statisticNames;

var authOptions=arguments[2];
return Promise.resolve().then(function(){
if(!(user&&user.id))throw new Error('user must be an AV.User');
return request({
method:'GET',
path:'/leaderboard/users/'+user.id+'/statistics',
query:{
statistics:statisticNames?ensureArray(statisticNames).join(','):undefined},

authOptions:authOptions}).
then(function(_ref4){
var results=_ref4.results;
return results.map(parseStatisticData);
});
});
};

/**
 * Update Statistics for the specified user.
 * @param {AV.User} user The specified AV.User pointer.
 * @param {Object} statistics A name-value pair representing the statistics to update.
 * @param {AuthOptions} [options] AuthOptions plus:
 * @param {boolean} [options.overwrite] Wethere to overwrite these statistics disregarding the updateStrategy of there leaderboards
 * @return {Promise<Statistic[]>}
 */
AV.Leaderboard.updateStatistics=function(user,statistics){
var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};
return Promise.resolve().then(function(){
if(!(user&&user.id))throw new Error('user must be an AV.User');
var data=_.map(statistics,function(value,key){
return{
statisticName:key,
statisticValue:value};

});
var overwrite=options.overwrite;

return request({
method:'POST',
path:'/leaderboard/users/'+user.id+'/statistics',
query:{
overwrite:overwrite?1:undefined},

data:data,
authOptions:options}).
then(function(_ref5){
var results=_ref5.results;
return results.map(parseStatisticData);
});
});
};

/**
 * Delete Statistics for the specified user.
 * @param {AV.User} user The specified AV.User pointer.
 * @param {Object} statistics A name-value pair representing the statistics to delete.
 * @param {AuthOptions} [options]
 * @return {Promise<void>}
 */
AV.Leaderboard.deleteStatistics=function(user,statisticNames,authOptions){
return Promise.resolve().then(function(){
if(!(user&&user.id))throw new Error('user must be an AV.User');
return request({
method:'DELETE',
path:'/leaderboard/users/'+user.id+'/statistics',
query:{
statistics:ensureArray(statisticNames).join(',')},

authOptions:authOptions}).
then(function(){
return undefined;
});
});
};

_.extend(Leaderboard.prototype,
/** @lends AV.Leaderboard.prototype */{
_finishFetch:function _finishFetch(data){
var _this=this;

_.forEach(data,function(value,key){
if(key==='updatedAt'||key==='objectId')return;
if(key==='expiredAt'){
key='nextResetAt';
}
if(key==='createdAt'){
value=parseDate(value);
}
if(value&&value.__type==='Date'){
value=parseDate(value.iso);
}
_this[key]=value;
});
return this;
},

/**
   * Fetch data from the srever.
   * @param {AuthOptions} [authOptions]
   * @return {Promise<AV.Leaderboard>}
   */
fetch:function fetch(authOptions){
var _this2=this;

return request({
method:'GET',
path:'/leaderboard/leaderboards/'+this.statisticName,
authOptions:authOptions}).
then(function(data){
return _this2._finishFetch(data);
});
},
_getResults:function _getResults(_ref6,authOptions,userId){
var skip=_ref6.skip,
limit=_ref6.limit,
selectUserKeys=_ref6.selectUserKeys,
includeStatistics=_ref6.includeStatistics,
version=_ref6.version;

return request({
method:'GET',
path:'/leaderboard/leaderboards/'+this.statisticName+'/ranks'+(userId?'/'+userId:''),
query:{
skip:skip,
limit:limit,
includeUser:selectUserKeys?ensureArray(selectUserKeys).join(','):undefined,
includeStatistics:includeStatistics?ensureArray(includeStatistics).join(','):undefined,
version:version},

authOptions:authOptions}).
then(function(_ref7){
var rankings=_ref7.results;
return rankings.map(function(rankingData){
var _AV$_decode2=AV._decode(rankingData),
user=_AV$_decode2.user,
value=_AV$_decode2.statisticValue,
rank=_AV$_decode2.rank,
_AV$_decode2$statisti=_AV$_decode2.statistics,
statistics=_AV$_decode2$statisti===undefined?[]:_AV$_decode2$statisti;

return{
user:user,
value:value,
rank:rank,
includedStatistics:statistics.map(parseStatisticData)};

});
});
},

/**
   * Retrieve a list of ranked users for this Leaderboard.
   * @param {Object} [options]
   * @param {number} [options.skip] The number of results to skip. This is useful for pagination.
   * @param {number} [options.limit] The limit of the number of results.
   * @param {string[]} [options.selectUserKeys] Specify keys of the users to include
   * @param {string[]} [options.includeStatistics] Specify other statistics to include in the Rankings
   * @param {number} [options.version] Specify the version of the leaderboard
   * @param {AuthOptions} [authOptions]
   * @return {Promise<Ranking[]>}
   */
getResults:function getResults(){
var _ref8=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},
skip=_ref8.skip,
limit=_ref8.limit,
selectUserKeys=_ref8.selectUserKeys,
includeStatistics=_ref8.includeStatistics,
version=_ref8.version;

var authOptions=arguments[1];

return this._getResults({skip:skip,limit:limit,selectUserKeys:selectUserKeys,includeStatistics:includeStatistics,version:version},authOptions);
},

/**
   * Retrieve a list of ranked users for this Leaderboard, centered on the specified user.
   * @param {AV.User} user The specified AV.User pointer.
   * @param {Object} [options]
   * @param {number} [options.limit] The limit of the number of results.
   * @param {string[]} [options.selectUserKeys] Specify keys of the users to include
   * @param {string[]} [options.includeStatistics] Specify other statistics to include in the Rankings
   * @param {number} [options.version] Specify the version of the leaderboard
   * @param {AuthOptions} [authOptions]
   * @return {Promise<Ranking[]>}
   */
getResultsAroundUser:function getResultsAroundUser(user){
var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};
var authOptions=arguments[2];

// getResultsAroundUser(options, authOptions)
if(user&&typeof user.id!=='string'){
return this.getResultsAroundUser(undefined,user,options);
}
var limit=options.limit,
selectUserKeys=options.selectUserKeys,
includeStatistics=options.includeStatistics,
version=options.version;

return this._getResults({limit:limit,selectUserKeys:selectUserKeys,includeStatistics:includeStatistics,version:version},authOptions,user?user.id:'self');
},
_update:function _update(data,authOptions){
var _this3=this;

return request({
method:'PUT',
path:'/leaderboard/leaderboards/'+this.statisticName,
data:data,
authOptions:authOptions}).
then(function(result){
return _this3._finishFetch(result);
});
},

/**
   * (masterKey required) Update the version change interval of the Leaderboard.
   * @param {AV.LeaderboardVersionChangeInterval} versionChangeInterval
   * @param {AuthOptions} [authOptions]
   * @return {Promise<AV.Leaderboard>}
   */
updateVersionChangeInterval:function updateVersionChangeInterval(versionChangeInterval,authOptions){
return this._update({versionChangeInterval:versionChangeInterval},authOptions);
},

/**
   * (masterKey required) Update the version change interval of the Leaderboard.
   * @param {AV.LeaderboardUpdateStrategy} updateStrategy
   * @param {AuthOptions} [authOptions]
   * @return {Promise<AV.Leaderboard>}
   */
updateUpdateStrategy:function updateUpdateStrategy(updateStrategy,authOptions){
return this._update({updateStrategy:updateStrategy},authOptions);
},

/**
   * (masterKey required) Reset the Leaderboard. The version of the Leaderboard will be incremented by 1.
   * @param {AuthOptions} [authOptions]
   * @return {Promise<AV.Leaderboard>}
   */
reset:function reset(authOptions){
var _this4=this;

return request({
method:'PUT',
path:'/leaderboard/leaderboards/'+this.statisticName+'/incrementVersion',
authOptions:authOptions}).
then(function(data){
return _this4._finishFetch(data);
});
},

/**
   * (masterKey required) Delete the Leaderboard and its all archived versions.
   * @param {AuthOptions} [authOptions]
   * @return {void}
   */
destroy:function destroy(authOptions){
return AV.request({
method:'DELETE',
path:'/leaderboard/leaderboards/'+this.statisticName,
authOptions:authOptions}).
then(function(){
return undefined;
});
},

/**
   * (masterKey required) Get archived versions.
   * @param {Object} [options]
   * @param {number} [options.skip] The number of results to skip. This is useful for pagination.
   * @param {number} [options.limit] The limit of the number of results.
   * @param {AuthOptions} [authOptions]
   * @return {Promise<LeaderboardArchive[]>}
   */
getArchives:function getArchives(){
var _this5=this;

var _ref9=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},
skip=_ref9.skip,
limit=_ref9.limit;

var authOptions=arguments[1];

return request({
method:'GET',
path:'/leaderboard/leaderboards/'+this.statisticName+'/archives',
query:{
skip:skip,
limit:limit},

authOptions:authOptions}).
then(function(_ref10){
var results=_ref10.results;
return results.map(function(_ref11){
var version=_ref11.version,
status=_ref11.status,
url=_ref11.url,
activatedAt=_ref11.activatedAt,
deactivatedAt=_ref11.deactivatedAt;
return{
statisticName:_this5.statisticName,
version:version,
status:status,
url:url,
activatedAt:parseDate(activatedAt.iso),
deactivatedAt:parseDate(deactivatedAt.iso)};

});
});
}});


/***/}]));

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/node-libs-browser/mock/process.js */ "./node_modules/node-libs-browser/mock/process.js"), __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ "./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js")["default"]))

/***/ }),

/***/ "C:\\Users\\ThinkPad\\Desktop\\Orange\\pages.json":
/*!***************************************************!*\
  !*** C:/Users/ThinkPad/Desktop/Orange/pages.json ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-toutiao/common/vendor.js.map