const APIUtil =require("./api_util.js")

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