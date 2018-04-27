/**
 * Created by user on 4/25/18.
 */
'use strict';


describe('React Book App', function() {

    describe('Home page title', function () {

        beforeEach(function () {
            browser.get('/');
        });

        /*afterEach(function () {
            browser.close();
        });*/


        it('TEST-1: home page should have a title', function () {
            browser.sleep(1000).then(function() {
                expect(browser.getTitle()).toEqual('React App');
            });
        });

        it('TEST-2: text on the login link', function() {
            var loginLink = element(by.css('.container >div>div>a:first-child'));
            expect(loginLink.getText()).toBe('Login');
        });

        it('TEST-3: go to login page', function() {
            var loginLink = element(by.css('.container >div>div>a:first-child'));
            loginLink.click();
            browser.sleep(1000).then(function() {
                var pageTitle = element(by.css('.container >div>h1'));
                expect(pageTitle.getText()).toBe('Login Page');
            });
        });

       /* it('expect the form fields', function() {

            element.all(by.css('form[name="mySendForm"] span')).then(function(items){
                var userMessageInput = element(by.name('message'));
                userMessageInput.sendKeys('email test');

                expect(items.length).toBe(6);

                userMessageInput.clear();
                expect(items[3].getText()).toBe('Message is required.');
            });

        });*/

    });
});

/*
 var fs = require('fs');
 describe('Headless chrome', () => {
 it('Take screenshot', () => {
 browser.get('http://angularjs.org');
 browser.takeScreenshot().then(function (png) {
 var stream = fs.createWriteStream('./screenshot.png');
 stream.write(new Buffer(png, 'base64'));
 stream.end();
 })
 })
 })
* */