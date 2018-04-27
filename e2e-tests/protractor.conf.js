/**
 * Created by user on 4/25/18.
 */
var HtmlReporter

exports.config = {

    allScriptsTimeout: 11000,

    specs: [
        '*.js'
    ],

    capabilities: {
        'directConnect': true,
        'browserName': 'chrome',
        'chromeOptions': {
            'args': [
                'no-sandbox'
            ]
        }
    },

    /*baseUrl: 'http://localhost:3000/',*/
    baseUrl: 'http://172.17.0.2:5013/',

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },
    onPrepare: function() {
        browser.ignoreSynchronization = true;
        browser.manage().timeouts().implicitlyWait(20000);
    }
};
