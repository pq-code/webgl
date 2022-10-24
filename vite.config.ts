import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
import compressPlugin from "vite-plugin-compression"; //静态资源压缩

// // 路径查找
// const pathResolve = (dir: string): string => {
//   return resolve(__dirname, ".", dir);
// };
//
// // 设置别名
// const alias: Record<string, string> = {
//   "@": pathResolve("src")
// };
export default defineConfig(({ command }) => {
  const prodMock = true
  return {
    plugins: [vue(),compressPlugin({
      ext: ".gz",
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      deleteOriginFile: command !== 'serve', // 是否删除原始文件
    })],
    // 打包配置
    build: {
      terserOptions: {
        compress: {
          drop_console: command !== 'serve',
          // 默认是true
          drop_debugger: command !== 'serve'
        }
      }
    },
    server: {
      host: '0.0.0.0',
      port: 7000,
      proxy: {
        '/api': {
        //   target: 'https://pqartstation.cn:3005',
          target: 'http://localhost:3005',
          changeOrigin: true,
          // secure: false,
          rewrite: (path) => path.replace(/^\/api/, '/'),
        },
      }
    },
    css: {
      // css预处理器
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          lessOptions: {
            modifyVars: {
              'primary-color': '#ec6800'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "src")
      }
    }
  }
})
