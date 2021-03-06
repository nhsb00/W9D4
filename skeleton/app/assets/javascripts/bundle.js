/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module) => {

class FollowToggle {
    constructor(el) {
        this.$el = $(el);
        this.userId = this.$el.data("user-id");
        this.followState = this.$el.data("initial-follow-state");
    }

    handleClick(event) {
        const FollowToggle = this;

        event.preventDefault();

        if (this.followState === 'followed') {
            this.followState = "unfollowing";
            this.render();
        } else if (this.followState === 'unfollowed') {
            this.followState = "following";
            this.render();
        }
    }

    render() {
        switch (this.followState) {
            case 'followed':
                this.$el.prop("disabled", false);
                this.$el.html("Unfollow!");
                break;
            case 'unfollowed':
                this.$el.prop("disabled", false);
                this.$el.html("follow!");
                break;
            case 'following':
                this.$el.prop("disabled", true);
                this.$el.html("Following...");
                break;
            case 'unfollowing':
                this.$el.prop("disabled", true);
                this.$el.html("Not following...");
                break;
        }
    }
}


module.exports = FollowToggle;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js");


$(() => {
    $("button.follow-toggle").each( 
        (button) => new FollowToggle(button))
})
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map