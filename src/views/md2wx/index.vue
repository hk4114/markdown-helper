<template>
    <div class="page-wrap">
      <div class="head-wrap">
        <span class="head-link">可用地址：</span>
        <el-link
          v-for="item in list"
          :href="item.link"
          target="_blank"
          type="primary"
          class="head-link"
          >{{ item.title }}</el-link
        >
      </div>
      <el-row :gutter="20" class="content-wrap">
        <el-col :span="12">
          demo left
        </el-col>
        <el-col :span="12">
          demo right
        </el-col>
      </el-row>
    </div>
  </template>
  
  <script setup lang="ts" name="about">
  
  import { ref } from "vue";
  // https://github.com/saltedfish964/wechat-markdown-editor/tree/master
  // https://github.com/mdnice/markdown-nice
  
  const list = ref([
    {
      title: "markdown",
      link: "https://markdown.com.cn/editor/",
    },
    {
      title: "open write",
      link: "https://md.openwrite.cn/",
    },
    {
      title: "quail.ink",
      link: "https://quail.ink/tools/markdown-to-wx/",
    },
    {
      title: "墨滴",
      link: "https://editor.mdnice.com/",
    },
  ]);
  </script>
  
  <style scoped>
  .head-wrap {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 12px;
  }
  .head-link {
    margin-right: 20px;
  }
  </style>
  