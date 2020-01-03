// cross off todo
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// add new todo
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

// input field toggle
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});