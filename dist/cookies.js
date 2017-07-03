"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cookies;
(function (Cookies) {
    var defaultExpiryDays = 365;
    function setCookie(cname, cvalue, daysUntilExpiry) {
        var d = new Date();
        var exdays = daysUntilExpiry || defaultExpiryDays;
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = 'expires=' + d.toUTCString();
        document.cookie = cname + '=' + cvalue + ';' + expires + ';';
    }
    Cookies.setCookie = setCookie;
    function setUserCookie(cvalue, daysUntilExpiry) {
        setCookie('username', cvalue, daysUntilExpiry);
    }
    Cookies.setUserCookie = setUserCookie;
    function getCookie(cname) {
        var name = cname + '=';
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return '';
    }
    Cookies.getCookie = getCookie;
    function getUserCookie() {
        return getCookie('username');
    }
    Cookies.getUserCookie = getUserCookie;
    function userCookiePresent() {
        return getCookie('username') !== '';
    }
    Cookies.userCookiePresent = userCookiePresent;
})(Cookies = exports.Cookies || (exports.Cookies = {}));
