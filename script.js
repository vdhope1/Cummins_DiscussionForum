function showDiscussions(cat_id) {
	var html_id = "#cat_discussion_" + cat_id;
	var dropdownid = ".drop_down_" + cat_id;
	console.log(dropdownid);
	if ($(html_id).css("display") == 'block') {
		$(html_id).css("display", "none");
		$(dropdownid).removeClass("fa fa-angle-up");
		$(dropdownid).addClass("fa fa-angle-down");
	} else {
		$(html_id).css("display", "block");
		$(dropdownid).addClass("fa fa-angle-up");
		$(dropdownid).removeClass("fa fa-angle-down");
	}
}

function startDiscussion(cat_id){
	var html_id = "#cat_new_discussion_" + cat_id;
	var button_id = "#startDiscussionButton_" + cat_id;
	if($(html_id).css("display") == 'block') {
		$(html_id).css("display", "none");
		$(button_id).text("Start Discussion");
	} else {
		$(html_id).css("display", "block");
		$(button_id).text("Cancel");
	}
}