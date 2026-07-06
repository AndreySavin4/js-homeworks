import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  // Указываем, что корень нашего сайта — это папка src
  root: "src",

  build: {
    outDir: "../dist",
    rollupOptions: {
      // Перечисляем все наши будущие страницы, чтобы Vite их не потерял при сборке
      input: {
        main: resolve(__dirname, "src/index.html"),
        task1: resolve(__dirname, "src/task-01.html"),
        task2: resolve(__dirname, "src/task-02.html"),
        task3: resolve(__dirname, "src/task-03.html"),
        task4: resolve(__dirname, "src/task-04.html"),
        task5: resolve(__dirname, "src/task-05.html"),
        task6: resolve(__dirname, "src/task-06.html"),
        task7: resolve(__dirname, "src/task-07.html"),
        task8: resolve(__dirname, "src/task-08.html"),
        task9: resolve(__dirname, "src/task-09.html"),
        task10: resolve(__dirname, "src/task-10.html"),
      },
    },
  },
});
