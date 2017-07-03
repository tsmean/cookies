export declare namespace Cookies {
    function setCookie(cname: string, cvalue: string, daysUntilExpiry?: number): void;
    function setUserCookie(cvalue: string, daysUntilExpiry?: number): void;
    function getCookie(cname: string): string;
    function getUserCookie(): string;
    function userCookiePresent(): boolean;
}
