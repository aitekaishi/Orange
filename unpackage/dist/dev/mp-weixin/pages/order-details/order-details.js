(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/order-details/order-details"],{

/***/ "../../../../Desktop/github/Orange/main.js?{\"page\":\"pages%2Forder-details%2Forder-details\"}":
/*!*****************************************************************************************!*\
  !*** F:/Desktop/github/Orange/main.js?{"page":"pages%2Forder-details%2Forder-details"} ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "../../../../Desktop/github/Orange/pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _orderDetails = _interopRequireDefault(__webpack_require__(/*! ./pages/order-details/order-details.vue */ "../../../../Desktop/github/Orange/pages/order-details/order-details.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_orderDetails.default));

/***/ }),

/***/ "../../../../Desktop/github/Orange/pages/order-details/order-details.vue":
/*!**********************************************************************!*\
  !*** F:/Desktop/github/Orange/pages/order-details/order-details.vue ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _order_details_vue_vue_type_template_id_336106b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-details.vue?vue&type=template&id=336106b4&scoped=true& */ "../../../../Desktop/github/Orange/pages/order-details/order-details.vue?vue&type=template&id=336106b4&scoped=true&");
/* harmony import */ var _order_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-details.vue?vue&type=script&lang=js& */ "../../../../Desktop/github/Orange/pages/order-details/order-details.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _order_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _order_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _order_details_vue_vue_type_style_index_0_id_336106b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-details.vue?vue&type=style&index=0&id=336106b4&scoped=true&lang=css& */ "../../../../Desktop/github/Orange/pages/order-details/order-details.vue?vue&type=style&index=0&id=336106b4&scoped=true&lang=css&");
/* harmony import */ var _ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../ruanjian/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _order_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _order_details_vue_vue_type_template_id_336106b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _order_details_vue_vue_type_template_id_336106b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "336106b4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Desktop/github/Orange/pages/order-details/order-details.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../Desktop/github/Orange/pages/order-details/order-details.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** F:/Desktop/github/Orange/pages/order-details/order-details.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../ruanjian/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../ruanjian/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../ruanjian/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../../ruanjian/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../ruanjian/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./order-details.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Desktop/github/Orange/pages/order-details/order-details.vue?vue&type=script&lang=js&");
/* harmony import */ var _ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../Desktop/github/Orange/pages/order-details/order-details.vue?vue&type=style&index=0&id=336106b4&scoped=true&lang=css&":
/*!*******************************************************************************************************************************!*\
  !*** F:/Desktop/github/Orange/pages/order-details/order-details.vue?vue&type=style&index=0&id=336106b4&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_details_vue_vue_type_style_index_0_id_336106b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../ruanjian/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../ruanjian/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../ruanjian/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../ruanjian/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../ruanjian/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../ruanjian/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./order-details.vue?vue&type=style&index=0&id=336106b4&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../Desktop/github/Orange/pages/order-details/order-details.vue?vue&type=style&index=0&id=336106b4&scoped=true&lang=css&");
/* harmony import */ var _ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_details_vue_vue_type_style_index_0_id_336106b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_details_vue_vue_type_style_index_0_id_336106b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_details_vue_vue_type_style_index_0_id_336106b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_details_vue_vue_type_style_index_0_id_336106b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_details_vue_vue_type_style_index_0_id_336106b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../Desktop/github/Orange/pages/order-details/order-details.vue?vue&type=template&id=336106b4&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** F:/Desktop/github/Orange/pages/order-details/order-details.vue?vue&type=template&id=336106b4&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_details_vue_vue_type_template_id_336106b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../ruanjian/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../ruanjian/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../ruanjian/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../ruanjian/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./order-details.vue?vue&type=template&id=336106b4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Desktop/github/Orange/pages/order-details/order-details.vue?vue&type=template&id=336106b4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_details_vue_vue_type_template_id_336106b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_ruanjian_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_order_details_vue_vue_type_template_id_336106b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Desktop/github/Orange/pages/order-details/order-details.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!F:/Desktop/github/Orange/pages/order-details/order-details.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =




















































































































{
  data: function data() {
    return {
      items: [],
      createdAt: '',
      updatedAt: '',
      baoxian: '',
      mianqi: 0,
      chukaibaoxian: 0 };

  },
  created: function created() {
    var _this = this;
    console.log(uni.getStorageSync('itemOne'));
    console.log(new Date(uni.getStorageSync('createdAtIndex')));
    _this.items = uni.getStorageSync('itemOne');
    console.log(this.items.serviceType);
    _this.baoxian = uni.getStorageSync('baoxian');
    console.log(_this.items);
    _this.chukaibaoxian = _this.items.total - _this.items.insurancePrice;
    if (_this.items.area >= 80) {
      _this.mianqi = _this.items.area;
    } else {
      _this.mianqi = 80;
    }
    var getMinutes = '';
    if (new Date(uni.getStorageSync('createdAtIndex')).getMinutes() < 10) {
      getMinutes = '0' + new Date(uni.getStorageSync('createdAtIndex')).getMinutes();
    } else {
      getMinutes = new Date(uni.getStorageSync('createdAtIndex')).getMinutes();
    }
    var mouth = '';
    var day = '';
    var hour = '';
    var ms = '';
    if (new Date(uni.getStorageSync('createdAtIndex')).getMonth() + 1 > 9) {
      mouth = new Date(uni.getStorageSync('createdAtIndex')).getMonth() + 1;
    } else {
      mouth = '0' + (new Date(uni.getStorageSync('createdAtIndex')).getMonth() + 1);
    }
    if (new Date(uni.getStorageSync('createdAtIndex')).getDate() > 9) {
      day = new Date(uni.getStorageSync('createdAtIndex')).getDate() + 1;
    } else {
      day = '0' + new Date(uni.getStorageSync('createdAtIndex')).getDate();
    }
    if (new Date(uni.getStorageSync('createdAtIndex')).getHours() > 9) {
      hour = new Date(uni.getStorageSync('createdAtIndex')).getHours();
    } else {
      hour = '0' + new Date(uni.getStorageSync('createdAtIndex')).getHours();
    }
    if (new Date(uni.getStorageSync('createdAtIndex')).getSeconds() > 9) {
      ms = new Date(uni.getStorageSync('createdAtIndex')).getSeconds();
    } else {
      ms = '0' + new Date(uni.getStorageSync('createdAtIndex')).getSeconds();
    }

    var getMinutesa = '';
    if (new Date(uni.getStorageSync('createdAtIndex')).getMinutes() < 10) {
      getMinutesa = '0' + new Date(uni.getStorageSync('createdAtIndex')).getMinutes();
    } else {
      getMinutesa = new Date(uni.getStorageSync('createdAtIndex')).getMinutes();
    }
    var moutha = '';
    var daya = '';
    var houra = '';
    var msa = '';
    if (new Date(uni.getStorageSync('updatedAtIndex')).getMonth() + 1 > 9) {
      moutha = new Date(uni.getStorageSync('updatedAtIndex')).getMonth() + 1;
    } else {
      moutha = '0' + (new Date(uni.getStorageSync('updatedAtIndex')).getMonth() + 1);
    }
    if (new Date(uni.getStorageSync('updatedAtIndex')).getDate() > 9) {
      daya = new Date(uni.getStorageSync('updatedAtIndex')).getDate() + 1;
    } else {
      daya = '0' + new Date(uni.getStorageSync('updatedAtIndex')).getDate();
    }
    if (new Date(uni.getStorageSync('updatedAtIndex')).getHours() > 9) {
      houra = new Date(uni.getStorageSync('updatedAtIndex')).getHours();
    } else {
      houra = '0' + new Date(uni.getStorageSync('updatedAtIndex')).getHours();
    }
    if (new Date(uni.getStorageSync('updatedAtIndex')).getSeconds() > 9) {
      msa = new Date(uni.getStorageSync('updatedAtIndex')).getSeconds();
    } else {
      msa = '0' + new Date(uni.getStorageSync('updatedAtIndex')).getSeconds();
    }
    this.createdAt = new Date(uni.getStorageSync('createdAtIndex')).getFullYear() + '/' + mouth + '/' + day + '  ' + hour + ':' + getMinutes + ':' + ms;
    this.updatedAt = new Date(uni.getStorageSync('updatedAtIndex')).getFullYear() + '/' + moutha + '/' + daya + '  ' + houra + ':' + getMinutesa + ':' + msa;
  },
  methods: {
    comment: function comment(index) {
      uni.setStorageSync('assessOrder', index);
      uni.setStorageSync("indexServerType", this.items.serviceType);
      uni.navigateTo({
        url: '../assess/assess' });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../Desktop/github/Orange/pages/order-details/order-details.vue?vue&type=style&index=0&id=336106b4&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!F:/Desktop/github/Orange/pages/order-details/order-details.vue?vue&type=style&index=0&id=336106b4&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Desktop/github/Orange/pages/order-details/order-details.vue?vue&type=template&id=336106b4&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!F:/Desktop/github/Orange/pages/order-details/order-details.vue?vue&type=template&id=336106b4&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: "details" }, [
    _c("view", { staticClass: "one" }, [
      _c("view", { staticClass: "one-one" }, [
        _c("view", { staticClass: "one-name" }, [
          _vm._v(_vm._s(_vm.items.name))
        ]),
        _c("view", { staticClass: "one-phone" }, [
          _vm._v(_vm._s(_vm.items.mobilePhoneNumber))
        ])
      ]),
      _c("view", { staticClass: "one-two" }, [
        _c("view", { staticClass: "one-city" }, [
          _vm._v(_vm._s(_vm.items.city) + " " + _vm._s(_vm.items.address))
        ])
      ])
    ]),
    _c("view", { staticClass: "two" }, [
      _c("view", { staticClass: "two-title" }, [
        _vm._v("感谢您对橙子优家的信任，期待您再次购买我们的服务。")
      ]),
      _c(
        "view",
        { staticClass: "two-button" },
        [
          _c("button", { attrs: { plain: "true", "open-type": "contact" } }, [
            _vm._v("在线客服")
          ]),
          _c(
            "button",
            {
              staticClass: "two-button-comment",
              attrs: { eventid: "5a953494-0" },
              on: {
                click: function($event) {
                  _vm.comment(_vm.items.orderId)
                }
              }
            },
            [_vm._v("评价")]
          )
        ],
        1
      )
    ]),
    _c(
      "view",
      { staticClass: "three" },
      [
        _c("view", { staticClass: "three-one" }, [_vm._v("费用信息")]),
        _c("view", { staticClass: "three-two three-zzz" }, [
          _c("view", { staticClass: "three-two-one" }, [_vm._v("建筑面积")]),
          _c("view", { staticClass: "three-two-two" }, [
            _vm._v(_vm._s(_vm.items.area) + "m²")
          ])
        ]),
        _c("view", { staticClass: "three-two" }, [
          _c("view", { staticClass: "three-two-one" }, [_vm._v("服务类型")]),
          _c("view", { staticClass: "three-two-two" }, [
            _vm._v(_vm._s(_vm.items.serviceType))
          ])
        ]),
        _vm._l(_vm.items.server, function(itema, indexa) {
          return _c(
            "view",
            {
              key: indexa,
              staticClass: "three-two",
              class: { xixiaaa: itema != "全程监理服务" }
            },
            [
              _c("view", { staticClass: "three-two-one" }, [
                _vm._v("服务费用")
              ]),
              _c("view", { staticClass: "three-two-two" }, [
                _vm._v(
                  "29元/m²×" +
                    _vm._s(_vm.mianqi) +
                    "m²=" +
                    _vm._s(_vm.chukaibaoxian) +
                    "元"
                )
              ])
            ]
          )
        }),
        _vm._l(_vm.items.server, function(itema, indexa) {
          return _c("view", { key: indexa, staticClass: "three-two" }, [
            _c(
              "view",
              {
                staticClass: "three-onea",
                class: { xixiaaa: itema == "全程监理服务" }
              },
              [_vm._v(_vm._s(itema))]
            ),
            _c(
              "view",
              {
                staticClass: "three-onea",
                class: { xixiaaa: itema != "全程监理服务" }
              },
              [_vm._v("工程监理责任险")]
            ),
            _c(
              "view",
              {
                staticClass: "three-twoa",
                class: { xixiaaa: itema != "全程监理服务" }
              },
              [_vm._v("¥" + _vm._s(_vm.baoxian))]
            ),
            _c(
              "view",
              {
                staticClass: "three-twoa",
                class: { xixiaaa: itema != "水电节点" }
              },
              [_vm._v("¥299")]
            ),
            _c(
              "view",
              {
                staticClass: "three-twoa",
                class: { xixiaaa: itema != "泥工节点" }
              },
              [_vm._v("¥299")]
            ),
            _c(
              "view",
              {
                staticClass: "three-twoa",
                class: { xixiaaa: itema != "木作节点" }
              },
              [_vm._v("¥299")]
            ),
            _c(
              "view",
              {
                staticClass: "three-twoa",
                class: { xixiaaa: itema != "油漆节点" }
              },
              [_vm._v("¥299")]
            ),
            _c(
              "view",
              {
                staticClass: "three-twoa",
                class: { xixiaaa: itema != "竣工节点" }
              },
              [_vm._v("¥399")]
            ),
            _c(
              "view",
              {
                staticClass: "three-twoa",
                class: { xixiaaa: itema != "图纸审核" }
              },
              [_vm._v("¥299")]
            ),
            _c(
              "view",
              {
                staticClass: "three-twoa",
                class: { xixiaaa: itema != "预算审核" }
              },
              [_vm._v("¥299")]
            ),
            _c(
              "view",
              {
                staticClass: "three-twoa",
                class: { xixiaaa: itema != "合同陪签" }
              },
              [_vm._v("¥299")]
            ),
            _c(
              "view",
              {
                staticClass: "three-twoa",
                class: { xixiaaa: itema != "毛坯房验房" }
              },
              [_vm._v("¥299")]
            ),
            _c(
              "view",
              {
                staticClass: "three-twoa",
                class: { xixiaaa: itema != "精装房验房" }
              },
              [_vm._v("¥399")]
            )
          ])
        }),
        _c("view", { staticClass: "three-zzz" }),
        _c("view", { staticClass: "three-two" }, [
          _c("view", { staticClass: "three-two-one bold" }, [_vm._v("总计")]),
          _c("view", { staticClass: "three-two-two bold" }, [
            _vm._v("¥" + _vm._s(_vm.items.total))
          ])
        ])
      ],
      2
    ),
    _c("view", { staticClass: "three four" }, [
      _c("view", { staticClass: "three-one" }, [_vm._v("订单信息")]),
      _c("view", { staticClass: "three-two" }, [
        _c("view", { staticClass: "three-two-one" }, [_vm._v("订单编号")]),
        _c("view", { staticClass: "three-two-two" }, [
          _vm._v(_vm._s(_vm.items.orderId))
        ])
      ]),
      _c("view", { staticClass: "three-two" }, [
        _c("view", { staticClass: "three-two-one" }, [_vm._v("下单时间")]),
        _c("view", { staticClass: "three-two-two" }, [
          _vm._v(_vm._s(_vm.createdAt))
        ])
      ]),
      _c("view", { staticClass: "three-two" }, [
        _c("view", { staticClass: "three-two-one" }, [_vm._v("完成时间")]),
        _c("view", { staticClass: "three-two-two" }, [
          _vm._v(_vm._s(_vm.updatedAt))
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},[["../../../../Desktop/github/Orange/main.js?{\"page\":\"pages%2Forder-details%2Forder-details\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/order-details/order-details.js.map