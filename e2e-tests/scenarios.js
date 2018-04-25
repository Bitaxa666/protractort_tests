/**
 * Created by user on 4/25/18.
 */
'use strict';


describe('React Book App', function() {

    describe('Home page title', function () {

        beforeEach(function () {
            browser.get('/');
        });

        afterEach(function () {
            browser.close();
        });


        it('should have a title', function () {
            browser.sleep(1000).then(function() {
                expect(browser.getTitle()).toEqual('Google');
            });
        });
    });
});
