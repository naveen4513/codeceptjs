exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: "http://localhost",
      restart: false,
      waitForAction: 500,
      show: true,
      windowSize: '1680x1050'
    },
    Sirion_helper: {
      require: './sirion_helper_helper.js',
    },
  },
    include: {
      I: './steps_file.js',
      PageObjects: './PageObjects.js',
      DATA: './DATA.js',
    },
    bootstrap: null,
    mocha: {},
    name: 'SirionUI',
    plugins: {
      pauseOnFail: {},
      retryFailedStep: {
        enabled: true
      },
      tryTo: {
        enabled: true
      },
      screenshotOnFail: {
        enabled: false
      },
      reportportal: {
        enabled: true,
        require: '@reportportal/agent-js-codecept',
        token: 'YOUR_TOKEN',
        endpoint: 'http://localhost:8080/api/v1',
        launchName: 'local launch',
      },
    }
}

