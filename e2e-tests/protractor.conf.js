/**
 * Created by user on 4/25/18.
 */

exports.config = {

    allScriptsTimeout: 11000,

    specs: [
        '*.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    /*baseUrl: 'http://localhost:3000/',*/
    baseUrl: 'https://www.google.com/',

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },
    onPrepare: function() {
        browser.ignoreSynchronization = true;
    }
};
