import './vite.init'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import Components from 'unplugin-vue-components/vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { snowballResolver } from './resolvers'

export default defineConfig(() => {
  return {
    plugins: [
      vue(),
      DefineOptions(),
      Components({
        include: `${__dirname}/**`,
        resolvers: snowballResolver(),
        dts: false,
      }),
      Inspect(),
    ],
    server: {
      host: true,
    },
  }
})
