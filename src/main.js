import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import ElementPlus from "element-plus";
import * as Icons from "@element-plus/icons-vue";
import "element-plus/dist/index.css";

import { config } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { foldGutter } from '@codemirror/language';
import { lineNumbers } from '@codemirror/view';
import LinkAttr from 'markdown-it-link-attributes';
import footnote from 'markdown-it-footnote'

const app = createApp(App);

// register the element Icons component
Object.keys(Icons).forEach((key) => {
  app.component(key, Icons);
});


config({
  codeMirrorExtensions(_theme, extensions) {
    return [...extensions, lineNumbers(), foldGutter()];
  },
  markdownItPlugins(plugins) { // , { editorId }
    const result =  plugins.map((item) => {
      if (item.type === 'taskList') {
        return {
          ...item,
          options: {
            ...item.options,
            enabled: true
            // 如果只是想对某个编辑器开启这个功能
            // enabled: editorId === 'myId'
          }
        };
      }
      return item;
    });
    result.push({
      type: 'footnote',
      plugin: footnote,
      options: {
        backRef: true
      }
    });
    result.push({
      type: 'linkAttr',
      plugin: LinkAttr,
      options: {
        matcher(href) {
          return !href.startsWith('#');
        },
        attrs: {
          target: '_blank'
        }
      }
    });
    return result;
  }
});

app.use(createPinia());
app.use(ElementPlus)
app.use(router);

app.mount("#app");
