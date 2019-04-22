"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var AppPage = /** @class */ (function () {
    function AppPage() {
    }
    AppPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    AppPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return AppPage;
}());
exports.AppPage = AppPage;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2UyZS9zcmMvYXBwLnBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQWtEO0FBRWxEO0lBQUE7SUFRQSxDQUFDO0lBUEMsNEJBQVUsR0FBVjtRQUNFLE1BQU0sQ0FBQyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsa0NBQWdCLEdBQWhCO1FBQ0UsTUFBTSxDQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FSQSxBQVFDLElBQUE7QUFSWSwwQkFBTyIsImZpbGUiOiJlMmUvc3JjL2FwcC5wby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJyb3dzZXIsIGJ5LCBlbGVtZW50IH0gZnJvbSAncHJvdHJhY3Rvcic7XG5cbmV4cG9ydCBjbGFzcyBBcHBQYWdlIHtcbiAgbmF2aWdhdGVUbygpIHtcbiAgICByZXR1cm4gYnJvd3Nlci5nZXQoJy8nKTtcbiAgfVxuXG4gIGdldFBhcmFncmFwaFRleHQoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQoYnkuY3NzKCdhcHAtcm9vdCBoMScpKS5nZXRUZXh0KCk7XG4gIH1cbn1cbiJdfQ==
