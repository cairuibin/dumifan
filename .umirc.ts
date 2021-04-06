import { defineConfig } from 'dumi';
const path=require('path')

export default defineConfig({
  title: '文字性',
  favicon:
    'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config,

  chainWebpack(config, { webpack }) {
            
  }

});
