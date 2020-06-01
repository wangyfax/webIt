module.exports = {
  roots: ["<rootDir>/src"],
  /* 
    覆盖率，!src表示不要去分析.d.ts问价
  */
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
  /* 
    在测试的时候，使用一些polyfill的垫片对jsdom做一些补偿，解决一些兼容性问题
  */
  setupFiles: [
    "react-app-polyfill/jsdom",
    "<rootDir>/src/component/__mocks__/matchMediaMock.js",
  ],
  /* 
    准备一些测试过程中额外的一些配置
  */
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  /* 
    当运行npm run test的时候，会执行测试一些文件，只要实在src下test目录下的任何
    文件都认为是测试文件
  */
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
  ],
  /* 
    测试运行的环境，在node的环境下去模拟浏览器上的一些dom
  */
  testEnvironment: "jest-environment-jsdom-fourteen",
  /* 
    1、如果是js\jsx\ts\tsx文件会通过babel-jest去处理
    2、css文件用cssTransform.js文件去处理
    3、通过fileTransform.js对非css文件进行处理
  */
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)":
      "<rootDir>/config/jest/fileTransform.js",
  },
  /* 
    当引入node_modules下的文件时，直接忽略，不会走transform进行转化
    有时候我们会对样式进行模块化，比如module.xxx.css，所以这样的文件
    我们也不需要分析
  */
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  /* 
    当做自动化测试的时候，会引入一些模块，这些模块默认从node_modules下找，
    如果想从别的模块下找在这里进行配置就好了
  */
  modulePaths: [],
  /* 
    当我们引入模块样式的时候，identity-obj-proxy（第三方插件）会将这些
    模块样式进行一个转化，转化为对象的形式
  */
  moduleNameMapper: {
    "^react-native$": "react-native-web",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
  },
  /* 
    引入文件的时候不写后缀的原因，会自动查找
  */
  moduleFileExtensions: [
    "web.js",
    "js",
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "json",
    "web.jsx",
    "jsx",
    "node",
  ],
  /* 
    运行npm run test的时候，可以在终端进行一些选项操作
  */
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
};
