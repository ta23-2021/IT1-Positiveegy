!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.lodash},function(e,t,n){"use strict";n.r(t);var i=n(1),o=n(0);window.ampCustomizeControls=function(e,t){const n={nonAmpCustomizerLink:null,data:{queryVar:"",l10n:{ampVersionNotice:"",rootPanelDescription:""},optionSettings:[],activeThemeSettingImports:{},mimeTypeIcons:{image:"",document:""}},boot:function(i){n.data=i,n.updatePreviewNotice(),n.extendRootDescription(),t.ajaxPrefilter(n.injectAmpIntoAjaxRequests),e.bind("ready",n.updateNonAmpCustomizeLink),e.bind("ready",n.forceAmpPreviewUrl),e.bind("ready",n.addOptionSettingNotices),e.bind("ready",n.addNavMenuPanelNotice),e.bind("ready",n.addActiveThemeSettingsImporting)},updatePreviewNotice:function(){const e=t("#customize-info .preview-notice");e.html(n.data.l10n.ampVersionNotice),n.nonAmpCustomizerLink=e.find("a[href]")[0]},updateNonAmpCustomizeLink:function(){if(!(n.nonAmpCustomizerLink instanceof HTMLAnchorElement))return;const t=()=>{const t=new URL(e.previewer.previewUrl());t.searchParams.delete(n.data.queryVar);const i=new URL(n.nonAmpCustomizerLink.href);i.searchParams.set("url",t),n.nonAmpCustomizerLink.href=i.href};t(),e.previewer.previewUrl.bind(t)},extendRootDescription:function(){const e=t("#customize-info .customize-panel-description");if(0===e.find("p").length){const n=t("<p></p>");n.html(e.html()),e.html(""),e.append(n)}const i=t("<p>"+n.data.l10n.rootPanelDescription+"</p>");e.append(i)}},a=["background_position","background_size","background_repeat","background_attachment"],r={display_header_text:"blank",background_attachment:"fixed",background_repeat:"no-repeat"},s={accent_hue_active:["accent_hue"]};function c(e){for(const t of e)t.id in n.data.activeThemeSettingImports&&t.set(n.data.activeThemeSettingImports[t.id])}const d=e.Section.extend({isContextuallyActive:()=>!0,expand(){},otherSections(){const t=[];return e.section.each(e=>{e.id!==this.id&&t.push(e)}),t.sort((e,t)=>e.priority()-t.priority()),t},renderDetails(){const e=this.headContainer.find("dl");for(const n of this.otherSections()){const i=[];for(const e of n.controls())this.params.controls.has(e)&&i.push(e);if(!i.length)continue;let a;switch(n.id){case"menu_locations":a=Object(o.__)("Menu Locations","amp");break;default:a=n.params.title}const r=t("<dt></dt>");r.text(a),e.append(r);for(const n of i){const i=t("<dd></dd>"),o="amp-import-"+n.id,a=t("<input type=checkbox checked>");a.attr("id",o),a.val(n.id);const r=t("<label></label>");r.attr("for",o),r.html(n.params.label),i.append(a),i.append(r),e.append(i)}}},attachEvents(){this.headContainer.find("button").on("click",()=>{this.importSelectedSettings()})},importSelectedSettings(){let i=0;this.headContainer.find("input[type=checkbox]").each((function(){const o=t(this);o.prop("checked")?(function(t){if(a.includes(t.id)){const t=e("background_preset");t&&t.set("custom")}t.id in r?function(e){e.id in r&&"element"in e&&e.setting.id in n.data.activeThemeSettingImports&&e.element.set(r[e.id]!==n.data.activeThemeSettingImports[e.setting.id])}(t):c(Object.values(t.settings)),function(t){if(t.id in s){const n=[];for(const i of s[t.id]){const t=e(i);t&&n.push(t)}c(n)}}(t),t.extended(e.UploadControl)?function(t){const i=t.setting();if(!i||t.params.attachment&&t.params.attachment.url===i)return;const o=new URL(i),a=["jpg","png","gif","bmp"].includes(o.pathname.substr(-3))?"image":"document",r={id:1,url:o.href,type:a,icon:n.data.mimeTypeIcons[a],title:(s=o.pathname,decodeURIComponent(encodeURIComponent(s).replace(/%(2F|5C)/g,"/").replace(/^.*\//,"")))};var s;"image"===a&&(r.sizes={full:{url:o.href}}),t.frame||t.initFrame(),t.frame.state()||t.frame.setState("library"),t.frame.state().get("selection").set([r]),t.extended(e.BackgroundControl)?e.UploadControl.prototype.select.call(t):t.select(),t.renderContent()}(t):t.extended(e.HeaderControl)&&function(t){const n=e("header_image_data").get();n&&t.setImageFromURL(n.url,n.attachment_id,n.width,n.height)}(t)}(e.control(o.val())),o.closest("dd").remove()):i++})),this.headContainer.find("dt").each((function(){const e=t(this);e.next("dd").length||e.remove()})),0===i&&this.active(!1)},ready(){e.Section.prototype.ready.call(this),this.renderDetails()}});return e.sectionConstructor.amp_active_theme_settings_import=d,n.addActiveThemeSettingsImporting=function(){const t=new Set;for(const[o,a]of Object.entries(n.data.activeThemeSettingImports)){const n=e(o);n&&!Object(i.isEqual)(n(),a)&&t.add(o)}if(0===t.size)return;const a=new Set;if(e.control.each(e=>{for(const n of Object.values(e.settings))e.params.label&&(t.has(n.id)||e.id in s&&s[e.id].find(e=>t.has(e)))&&a.add(e)}),0===a.size)return;const r=new d("amp_settings_import",{title:Object(o.__)("Primary Theme Settings","amp"),priority:-1,controls:a});e.section.add(r)},n.injectAmpIntoAjaxRequests=function(e){const t=new URL(e.url,window.location.href);t.searchParams.has(n.data.queryVar)||(t.searchParams.append(n.data.queryVar,"1"),e.url=t.href)},n.forceAmpPreviewUrl=function(){var t;e.previewer.previewUrl.validate=(t=e.previewer.previewUrl.validate,function(e){let i=t.call(this,e);if(i){const e=new URL(i);e.searchParams.has(n.data.queryVar)||(e.searchParams.append(n.data.queryVar,"1"),i=e.href)}return i})},n.addOptionSettingNotices=function(){for(const t of n.data.optionSettings)e(t,t=>{const n=new e.Notification("amp_option_setting",{type:"info",message:Object(o.__)("Also applies to non-AMP version of your site.","amp")});t.notifications.add(n.code,n)})},n.addNavMenuPanelNotice=function(){e.panel("nav_menus",n=>{n.notifications.container.length||(n.notifications.container=t('<div class="customize-control-notifications-container"></div>'),n.container.find(".panel-meta:first").append(n.notifications.container));const i=new e.Notification("amp_version",{type:"info",message:Object(o.__)("The menus here are shared with the non-AMP version of your site. Assign existing menus to menu locations in the Reader theme or create new AMP-specific menus.","amp")});n.notifications.add(i.code,i)})},n}(wp.customize,jQuery)}]);