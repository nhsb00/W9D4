const FollowToggle = require('./follow_toggle.js');


$(() => {
    $("button.follow-toggle").each( 
        (button) => new FollowToggle(button))
})