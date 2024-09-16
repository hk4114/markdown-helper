<template>
  <div>
    <el-form :model="state"  :inline="true" class="demo-form-inline">
      <el-form-item label="预览主题">
        <el-select v-model="state.previewTheme">
          <el-option v-for="theme in state.previewThemeList" :key="theme" :label="theme" :value="theme" />
        </el-select>
      </el-form-item>
      <el-form-item label="代码主题">
        <el-select v-model="state.codeTheme">
          <el-option v-for="theme in state.codeThemeList" :key="theme" :label="theme" :value="theme" />
        </el-select>
      </el-form-item>
      <el-form-item>
      </el-form-item>
    </el-form>
    <MdEditor class="editor" ref="editorRef" v-model="state.text" :editorId="editorId" :previewTheme="state.previewTheme"
      :codeTheme="state.codeTheme" :toolbars="state.toolbars" :footers="['markdownTotal', '=', 0, 'scrollSwitch']"
      showCodeRowNumber autoDetectCode>
      <template #defToolbars>
        <Mark />
        <Emoji />
        <ExportPDF :modelValue="state.text" height="700px" />
      </template>
    </MdEditor>
  </div>
</template>

<script setup lang="ts" name="markdown">
import { reactive, ref } from 'vue';
import { ElForm, ElFormItem, ElSelect, ElOption } from 'element-plus'
import { Emoji, Mark, ExportPDF } from '@vavt/v3-extension';
import { MdEditor } from 'md-editor-v3';
import { toolbars } from './config';

const state = reactive({
  text: '',
  previewTheme: 'default',
  codeTheme: 'atom',
  toolbars,
  previewThemeList: ['default', 'github', 'vuepress', 'mk-cute', 'smart-blue', 'cyanosis'],
  codeThemeList: ['atom', 'a11y', 'github', 'gradient', 'kimbie', 'paraiso', 'qtcreator', 'stackoverflow']
});

const editorId = 'editor-preview';

const editorRef = ref();
</script>

<style scoped>
.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}

.editor {
  height: calc(100vh - 166px);
}
</style>